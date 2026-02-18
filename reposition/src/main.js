import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { useSolver } from "@root/reposition.js";

const solver = await useSolver(1024);

const N = 1024;
const p = new Float64Array(N * 3);
const x = new Float64Array(N * 3);
const x0 = new Float64Array(N * 3);
const m = new Float64Array(N);
for (let i = 0; i < N; i++) {
    x[i * 3 + 0] = i * Math.cos(i * 0.1) * 0.1;
    x[i * 3 + 1] = i * Math.sin(i * 0.1) * 0.1;
    x[i * 3 + 2] = 0;
    m[i] = i === 0 || i === N - 1 ? 1 : 0.001;
}
x0.set(x);
p.set(x);

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

let pick_vert = -1;
let drag_vert = -1;

const line = new Line2(geometry, material);

const colors = new Float32Array(N * 3);

for (let i = 0; i < N; i++) {
    if ((i/2)% 2 === 0) {
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
camera.position.z = 34;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x404040);
let once = true;

const pickGeometry = new THREE.BufferGeometry();
pickGeometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

const pickMaterial = new THREE.PointsMaterial({
    size: 10,
    sizeAttenuation: false,
    visible: false,
});

const pickPoints = new THREE.Points(pickGeometry, pickMaterial);
scene.add(pickPoints);

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const drag_plane = new THREE.Plane();

const drag_point = new THREE.Vector3();

const vertex = new THREE.Vector3();
raycaster.params.Points.threshold = 55; // world-space tolerance

window.addEventListener("pointermove", (event) => {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
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

function animate() {
    requestAnimationFrame(animate);
    const hits = raycaster.intersectObject(pickPoints);

    if (hits.length > 0) {
        let hits2 = hits.sort((a, b) => a.distanceToRay - b.distanceToRay);
        pick_vert = hits2[0].index;
        const i = pick_vert;
        //colors[i * 3 + 0] = 1;
        //colors[i * 3 + 1] = 0;
        //colors[i * 3 + 2] = 0;

        geometry.setColors(colors);
        //console.log(pick_vert);
    }

    for (let i = 0; i < p.length; i++) {
        p[i] = x[i] + (x[i] - x0[i]) * 0.9;
    }

    // drag
    if (drag_vert !== -1) {
        raycaster.ray.intersectPlane(drag_plane, drag_point)
        //raycaster.ray.closestPointToPoint(
        //    vertex.fromArray(vertices, drag_vert * 3),
        //    drag_point
        //);
        p[drag_vert * 3] = drag_point.x;
        p[drag_vert * 3 + 1] = drag_point.y;
        p[drag_vert * 3 + 2] = drag_point.z;
    }

    x0.set(x);
    if (once) {
        solver.solve(m.length, p, m, x);
        once = true;
    }
    vertices.set(x);
    //geometry.attributes.position.needsUpdate = true;
    geometry.setPositions(vertices);

    renderer.render(scene, camera);
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
