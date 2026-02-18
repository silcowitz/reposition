
//const reposition = require("./build-wasm/reposition_wasm.js");

//function allocf64(m, n) {
//    const ptr = m._malloc(n * 8);
//    const view = new Float64Array(m.HEAPU8.buffer, ptr, n);
//    return { ptr, view };
//}

//async function main() {
//    const m = await reposition();
//    const N = 2;
//    const p = allocf64(m,N*3);
//    const mass = allocf64(m,N);
//    const x = allocf64(m,N*3);

//    p.view.set([5,0,0, 0,0,0])
//    x.view.set([5,0,0, 0,0,0])
//    mass.view.set([1,1])

//    m._solve(N,p.ptr,mass.ptr,x.ptr);

//    console.log(x)
//}

//main();


import reposition from "./build-wasm/reposition_wasm.js";

export async function useSolver(Nmax) {
    const m = await reposition();

    function allocf64(n) {
        const ptr = m._malloc(n * 8);
        const view = new Float64Array(m.HEAPU8.buffer, ptr, n);
        return { ptr, view };
    }

    const p = allocf64(Nmax*3);
    const x = allocf64(Nmax*3);
    const mass = allocf64(Nmax);

    function solve( N_in, p_in, m_in, x_in ) {
        p.view.set(p_in);
        mass.view.set(m_in);
        x.view.set(x_in);
        m._solve(N_in, p.ptr, mass.ptr, x.ptr);
        x_in.set(x.view.subarray(0, N_in*3));
    }

    return { solve };
}

