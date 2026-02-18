import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import { useSolver } from '@root/reposition.js'


const solver = await useSolver(1024);


const N = 1024;
const p = new Float64Array(N*3);
const x = new Float64Array(N*3);
const x0 = new Float64Array(N*3);
const m = new Float64Array(N);
for (let i=0; i<N; i++ ) {
 x[i*3+0] = i * Math.cos(i * 0.1) * 0.1;
 x[i*3+1] = i * Math.sin(i * 0.1) * 0.1;
 x[i*3+2] = 0;
 m[i] = (i>-1)  ? 1 : 0.000001;
}
x0.set(x);
p.set(x);

//console.log(x);

import * as THREE from "three";
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';

//import * as THREE from "three";
//import { createSolver } from "./solver.js";

//const solver = await createSolver();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);


const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array(N*3);

geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

const material = new THREE.LineBasicMaterial({ color: 0xffff00, linecap: 'round', linewidth:16, });
const line = new THREE.Line(geometry, material);
//Yes, you can set the line thickness and style using the `linewidth` and `linecap` or `linejoin` properties in `LineBasicMaterial`. However, note that `linewidth` may not work as expected on all platforms due to WebGL limitations.

//```
//const material = new THREE.LineBasicMaterial({
//  color: 0xffffff,
//  linewidth: 2, // Set the line thickness
//  linecap: 'round', // Set the style of line ends
//  linejoin: 'round' // Set the style of line joins
//});
//const line = new THREE.Line(geometry, material);
//```

scene.add(line);
camera.position.z = 364;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x404040); // Grey background
let once = true;

function animate() {
    requestAnimationFrame(animate);

    for (let i = 0; i < p.length; i++) {
        p[i] = x[i] + (x[i] - x0[i])*1.0001;
    }

    x0.set(x)
    if (once) {
        solver.solve(m.length,p,m,x);
        once = true;
    }
    vertices.set(x)
    geometry.attributes.position.needsUpdate = true;
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


