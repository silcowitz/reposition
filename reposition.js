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
    const stats = allocf64(8);

    function solve( N_in, tol, max_iter, p_in, m_in, x_in, stats_in ) {
        p.view.set(p_in);
        mass.view.set(m_in);
        x.view.set(x_in);
        let t = m._solve(N_in, tol, max_iter, p.ptr, mass.ptr, x.ptr, stats.ptr);
        x_in.set(x.view.subarray(0, N_in*3));
        stats_in.set(stats.view);
        return t;
    }

    return { solve };
}
