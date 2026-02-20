import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
//import { setupCounter } from "./counter.js";
import { useSolver } from "@root/reposition.js";
//import Stats from 'stats.js';
import GUI from "lil-gui";

const N = 1024 * 2;
const solver = await useSolver(N);
const p = new Float64Array(N * 3);
const x = new Float64Array(N * 3);
const x0 = new Float64Array(N * 3);
const m = new Float64Array(N);
const stats = new Float64Array(8);

function reset1() {
    for (let i = 0; i < N; i++) {
        x[i * 3 + 0] = i * Math.cos(i * 0.1) * 0.1;
        x[i * 3 + 1] = i * Math.sin(i * 0.1) * 0.1;
        x[i * 3 + 2] = i * 0.01 - 250;
        m[i] =
            i === 0 || i === N - 1 || i === N / 4 || i % (N / 4) === 0
                ? 1
                : 0.001;
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
    10000
);
const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);

const geometry = new LineGeometry();
const vertices = new Float32Array(N * 3);
geometry.setPositions(vertices);

const material = new LineMaterial({
    color: 0xffff00,
    linewidth: 2.3,
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
    opacity: 1.0,
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

window.addEventListener("wheel", (event) => {
    const scrollSpeed = 1.102;
    camera.position.z += event.deltaY * scrollSpeed;
});

window.addEventListener("pointermove", (event) => {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    //console.log(mouse);
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

const gui = new GUI({
    title: "Stats",
});

gui.domElement.style.position = "fixed";
gui.domElement.style.bottom = "10px";
gui.domElement.style.right = "10px";
gui.domElement.style.top = "auto";
gui.domElement.style.width = "auto";

const settings = {
    links: N - 1,
    fps: 0,
    error: 0,
    solveTime: 0,
    iters: 0,
    max_iter: 15,
    tol_exp: -7,
    gravity: true,
    momentum: true,
    floor: true,
    mass_ratio: -3,
    beads: 2,
    fix: 0,
};

gui.add({ reset: reset1 }, "reset");
gui.add(settings, "links").listen().disable();
gui.add(settings, "error", 0, 1)
    .listen()
    .disable()
    .decimals(2)
    .name("solve error");
gui.add(settings, "solveTime", 0, 5)
    .listen()
    .decimals(3)
    .disable()
    .name("solve ms");
gui.add(settings, "iters", 1, 64).listen().disable().name("solver iters");
gui.add(settings, "tol_exp", -32, 0, 1);
gui.add(settings, "max_iter", 1, 64, 1);
gui.add(settings, "mass_ratio", -6, -1, 1).name("mass ratio exp");
gui.add(settings, "gravity");
gui.add(settings, "momentum");
gui.add(settings, "floor");
gui.add(settings, "beads", 2, 16, 1);
gui.add(settings, "fix", { "end-points": 0, between: 1 });
let single_step = false;

function animate() {
    requestAnimationFrame(animate);

    line.count = N;
    grid.visible = settings.floor;

    //function f(i, D, N) {
    //    return (i * (D - 1)) % (N - 1) === 0 ? true : false;
    //}
    function f(i, D, N) {
        const step = (N - 1) / (D - 1);
        return Math.floor(Math.round(i / step) * step) === i ? 1 : 0;
    }

    for (let i = 0; i < N; i++) {
        const is_bead = f(i, settings.beads, N);
        m[i] = is_bead ? 1.0 : Math.pow(10.0, settings.mass_ratio);
    }

    // momentum plus gravity
    for (let i = 0; i < N; i++) {
        const is_bead = f(i, settings.beads, N);
        //let curvature= 0.6 * ((x[i - 3] + x[i + 3]) / 2 - x[i]);
        if (is_bead) {
            if (settings.fix === 0 && (i == 0 || i == N - 1)) {
                continue;
            } else if (settings.fix == 1 && i > 0 && i < N - 1) {
                continue;
            }
        }

        for (let j = 0; j < 3; j++) {
            const idx = i * 3 + j;
            p[idx] =
                x[idx] +
                (x[idx] - x0[idx]) * (settings.momentum ? 1.0 : 0.0) -
                (settings.gravity ? 1.0 : 0.0) * (j % 3 === 1); //+ curvature;
        }
    }

    // drag
    if (drag_vert !== -1) {
        raycaster.ray.intersectPlane(drag_plane, drag_point);
        p[drag_vert * 3] = drag_point.x;
        p[drag_vert * 3 + 1] = drag_point.y;
        p[drag_vert * 3 + 2] = drag_point.z;
    }

    // floor
    if (settings.floor) {
        for (let i = 0; i < N; i++) {
            p[i * 3 + 1] = p[i * 3 + 1] < floor ? floor : p[i * 3 + 1];
        }
    }

    if (play || single_step) {
        x0.set(x);

        const start = performance.now();
        let t = solver.solve(
            m.length,
            Math.pow(10.0, settings.tol_exp),
            settings.max_iter,
            p,
            m,
            x,
            stats
        );
        // stats: time, error, iters
        const end = performance.now();
        settings.solveTime = stats[0];
        settings.error = stats[1];
        settings.iters = stats[2];
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
}

animate();
