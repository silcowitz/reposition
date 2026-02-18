import { useSolver } from "./reposition.js";

const solver = await useSolver(1024);

const p = new Float64Array([1,2,3, 3,4,5]);
const x = new Float64Array([1,2,3, 3,4,5]);
const m = new Float64Array([1, 0.1]);

solver.solve(2,p,m,x);

console.log(x)

// use result to update geometry

