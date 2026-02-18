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
    m[i] = i === 0 || i === N - 1 ? 1 : 0.000001;
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
const line = new Line2(geometry, material);

const colors = new Float32Array(N * 3);

for (let i = 0; i < N; i++) {
    if (i % 2 === 0) {
        colors[i * 3 + 0] = 1;
        colors[i * 3 + 1] = 1;
        colors[i * 3 + 2] = 0;
    } else {
        colors[i * 3 + 0] = 0;
        colors[i * 3 + 1] = 0;
        colors[i * 3 + 2] = 1;
    }
}

geometry.setColors(colors);

material.resolution.set(window.innerWidth, window.innerHeight);
line.computeLineDistances();
scene.add(line);
camera.position.z = 364;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x404040);
let once = true;

function animate() {
    requestAnimationFrame(animate);

    for (let i = 0; i < p.length; i++) {
        p[i] = x[i] + (x[i] - x0[i]) * 0.99;
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
