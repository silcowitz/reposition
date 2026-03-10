# cython: boundscheck=False, wraparound=False
import numpy as np
cimport numpy as np

cdef extern from "solve.h":
    double solve(const int n, double tol, int max_iter, const double* p, const double * m,  double* x, double * stats, const int stats_size)

def solve2(double tol, int max_iter,
    np.ndarray[np.float64_t, ndim=1, mode="c"] p,
    np.ndarray[np.float64_t, ndim=1, mode="c"] m,
    np.ndarray[np.float64_t, ndim=1, mode="c"] x,
    np.ndarray[np.float64_t, ndim=1, mode="c"] stats):

    if p.shape[0] % 3 != 0:
        raise ValueError("p length must be multiple of 3")

    cdef int N = p.shape[0] // 3

    if m.shape[0] != N:
        raise ValueError("m length must equal N")

    if x.shape[0] != N*3:
        raise ValueError("x length must equal 3N")

    return solve(N, tol, max_iter, &p[0], &m[0], &x[0], &stats[0], stats.shape[0] )

