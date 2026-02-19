import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { useSolver } from "@root/reposition.js";
//import Stats from 'stats.js';
import "beercss/dist/cdn/beer.min.css";
import "beercss";

const N = 1024;
const solver = await useSolver(N);
const p = new Float64Array(N * 3);
const x = new Float64Array(N * 3);
const x0 = new Float64Array(N * 3);
const m = new Float64Array(N);

function reset1() {
    for (let i = 0; i < N; i++) {
        x[i * 3 + 0] = i * Math.cos(i * 0.1) * 0.1;
        x[i * 3 + 1] = i * Math.sin(i * 0.1) * 0.1;
        x[i * 3 + 2] = i * 0.01 - 250;
        m[i] = i === 0 || i === N - 1 || i === N / 2 ? 1 : 0.00001;
    }
    x0.set(x);
    p.set(x);
}
reset1();

//console.log(x);
import * as THREE from "three";

import { LineMaterial } from "three/addons/lines/LineMaterial.js";
import { Line2 } from "three/addons/lines/Line2.js";
import { LineGeometry } from "three/addons/lines/LineGeometry.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);

const geometry = new LineGeometry();
const vertices = new Float32Array(N * 3);
geometry.setPositions(vertices);

const material = new LineMaterial({
    color: 0xffff00,
    linewidth: 2,
    vertexColors: true,
});

// shadow
const shadow_material = new LineMaterial({
    color: 0x101010,
    linewidth: 4,
    transparent: true,
    opacity: 0.2,
});

const shadow_geometry = new LineGeometry();
const shadow_line = new Line2(shadow_geometry, shadow_material);
shadow_geometry.setPositions(vertices);
shadow_material.resolution.set(window.innerWidth, window.innerHeight);
shadow_material.depthWrite = false;
shadow_line.computeLineDistances();
//scene.add(shadow_line);

let pick_vert = -1;
let drag_vert = -1;

const line = new Line2(geometry, material);

const colors = new Float32Array(N * 3);

for (let i = 0; i < N; i++) {
    if ((i / 2) % 2 === 0) {
        colors[i * 3 + 0] = 1;
        colors[i * 3 + 1] = 1;
        colors[i * 3 + 2] = 0;
    } else {
        colors[i * 3 + 0] = 1;
        colors[i * 3 + 1] = 0;
        colors[i * 3 + 2] = 0;
    }
}

geometry.setColors(colors);

material.resolution.set(window.innerWidth, window.innerHeight);
line.computeLineDistances();
scene.add(line);
camera.position.z = 234;

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x404040);
let play = true;

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const drag_plane = new THREE.Plane();
const drag_point = new THREE.Vector3();
const tmp_point = new THREE.Vector3();
const tmp_color = new THREE.Color();

const vertex = new THREE.Vector3();

const sphereGeometry = new THREE.SphereGeometry(4.5, 64, 64);
const sphereMaterial = new THREE.MeshBasicMaterial({
    opacity: 0.3333,
    transparent: true,
});
const instancedMesh = new THREE.InstancedMesh(
    sphereGeometry,
    sphereMaterial,
    N
);
instancedMesh.setColorAt(0, new THREE.Color(0xffffff));
const dummy = new THREE.Object3D();
scene.add(instancedMesh);
const floor = -150;
const grid = new THREE.GridHelper(1024, 16 * 4, 0x7f7f7f, 0x7f7f7f);
grid.position.y = floor;
scene.add(grid);
console.log(instancedMesh.instanceColor);

window.addEventListener("pointermove", (event) => {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    console.log(mouse);
});

renderer.domElement.addEventListener("pointerdown", (event) => {
    console.log("mouse down", event);
    if (pick_vert >= 0) {
        renderer.domElement.setPointerCapture(event.pointerId);
        drag_vert = pick_vert;
        const planeNormal = new THREE.Vector3();
        const planePoint = new THREE.Vector3();
        // original picked vertex
        planePoint.fromArray(vertices, pick_vert * 3);
        // camera forward direction
        camera.getWorldDirection(planeNormal);
        // plane perpendicular to camera
        drag_plane.setFromNormalAndCoplanarPoint(planeNormal, planePoint);
    }
});

renderer.domElement.addEventListener("pointerup", (event) => {
    drag_vert = -1;
    renderer.domElement.releasePointerCapture(event.pointerId);
    console.log("Drag end");
});

function createToolbar() {
    const nav = document.createElement("nav");
    nav.className = "bottom";
    nav.innerHTML = `
    <button id="reset-button" class="square large border">
      <i class="material-symbols-outlined"></i>
    </button>
    <button id="momentum-button" class="square large border">
      <i class="material-symbols-outlined"></i>
    </button>
    <button id="gravity-button" class="square large border">
      <i class="material-symbols-outlined"></i>
    </button>
    <button id="step-button" class="square large border">
      <i class="material-symbols-outlined"></i>
    </button>

  `;

    document.body.appendChild(nav);

    return nav;
}

const toolbar = createToolbar();

function makeIconToggle(name, iconA, iconB, onChange) {
    const button = document.getElementById(name);
    const icon = button.querySelector("i");
    let state = false;
    icon.textContent = state ? iconA : iconB;
    button.addEventListener("click", () => {
        state = !state;
        icon.textContent = state ? iconA : iconB;
        onChange(state);
    });
}

makeIconToggle("reset-button", "replay", "replay", (v) => {
    reset1();
});

let momentum = 1.0;
makeIconToggle("momentum-button", "slow", "speed", (v) => {
    if (v) {
        momentum = 1.0;
    } else {
        momentum = 0.93;
    }
});

let gravity = 1.0;
makeIconToggle("gravity-button", "rocket_launch", "falling", (v) => {
    if (v) {
        gravity = 1.0;
    } else {
        gravity = 0.0;
    }
});

let single_step = false;
makeIconToggle("step-button", "step", "step", (v) => {
    single_step = true;
});

//var stats = new Stats();
//const solverPanel = new Stats.Panel('Solve error', '#fff', '#222');
//stats.addPanel(solverPanel);
//stats.showPanel(3); // 0: fps, 1: ms, 2: mb, 3+: custom
//Object.assign(stats.dom.style, {
//  position: 'fixed',
//  bottom: '10px',
//  right: '10px',
//  top: 'auto',
//  left: 'auto'
//});

//document.body.appendChild(stats.dom);



function animate() {
    requestAnimationFrame(animate);


   // stats.begin();

    // momentum plus gravity
    for (let i = 3; i < p.length - 3; i++) {
        //let curvature= 0.6 * ((x[i - 3] + x[i + 3]) / 2 - x[i]);
        p[i] = x[i] + (x[i] - x0[i]) * momentum - gravity * (i % 3 === 1); //+ curvature;
        if (i % 3 == 1) {
            p[i] = p[i] < floor ? floor : p[i];
        }
    }

    // drag
    if (drag_vert !== -1) {
        raycaster.ray.intersectPlane(drag_plane, drag_point);
        p[drag_vert * 3] = drag_point.x;
        p[drag_vert * 3 + 1] = drag_point.y;
        p[drag_vert * 3 + 2] = drag_point.z;
    }

    if (play || single_step) {
        x0.set(x);
        let t = solver.solve(m.length, p, m, x);
        //solverPanel.update(Math.min(t,1), 1)
        single_step = false;
    }
    vertices.set(x);
    geometry.setPositions(vertices);

    if (false) {
        //update shadows
        const start = shadow_geometry.attributes.instanceStart;
        const end = shadow_geometry.attributes.instanceEnd;
        for (let i = 0; i < N - 1; i++) {
            start.setXYZ(
                i,
                vertices[i * 3 + 0],
                1.01 + floor,
                vertices[i * 3 + 2]
            );
            end.setXYZ(
                i,
                vertices[(i + 1) * 3 + 0],
                1.01 + floor,
                vertices[(i + 1) * 3 + 2]
            );
        }
        start.needsUpdate = true;
        end.needsUpdate = true;
    }

    let best = Infinity;
    let best_idx = -1;
    for (let i = 0; i < N; i++) {
        if (m[i] === 1.0) {
            const ray = raycaster.ray;
            tmp_point.fromArray(vertices, i * 3);
            let d = ray.distanceSqToPoint(tmp_point);
            if (d < best) {
                best = d;
                best_idx = i;
                pick_vert = i;
            }
        }
    }

    //dummy.position.fromArray(vertices, pick_vert * 3);
    //dummy.updateMatrix();
    //instancedMesh.setMatrixAt(0, dummy.matrix);

    let j = 0;
    for (let i = 0; i < N; i++) {
        if (m[i] === 1.0) {
            dummy.position.fromArray(vertices, i * 3);
            dummy.scale.set(1, 1, 1);
            dummy.updateMatrix();
            tmp_color.set(0xff0000);
            instancedMesh.setColorAt(j, tmp_color);
            instancedMesh.setMatrixAt(j, dummy.matrix);
            j++;
            if (i == drag_vert) {
                dummy.scale.set(1.5, 1.5, 1.5);
                tmp_color.set(0xffffff);
                dummy.updateMatrix();
                instancedMesh.setColorAt(j, tmp_color);
                instancedMesh.setMatrixAt(j, dummy.matrix);
                j++;
            } else if (drag_vert === -1 && i == pick_vert) {
            }
        }
    }
    instancedMesh.count = j;

    instancedMesh.instanceColor.needsUpdate = true;
    instancedMesh.instanceMatrix.needsUpdate = true;
    renderer.render(scene, camera);

    //stats.end();
}

animate();

//document.querySelector('#app').innerHTML = `
//  <div>
//    <a href="https://vite.dev" target="_blank">
//      <img src="${viteLogo}" class="logo" alt="Vite logo" />
//    </a>
//    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//    </a>
//    <h1>Hello Vite!</h1>
//    <div class="card">
//      <button id="counter" type="button"></button>
//    </div>
//    <p class="read-the-docs">
//      Click on the Vite logo to learn more
//    </p>
//  </div>
//`

//setupCounter(document.querySelector('#counter'))
