import { useSolver } from "./reposition.js";

const solver = await useSolver(1024);

const p = new Float64Array([1,2,3, 3,4,5, 5,-6,7]);
const x = new Float64Array([1,2,3, 3,4,5, 5,-6,7]);
const m = new Float64Array([1, 1, 1]);
const stats = new Float64Array(128);

solver.solve(3,1e-15,32,p,m,x,stats);

console.log(x)
console.log(stats.slice(0,3))

// use result to update geometry

