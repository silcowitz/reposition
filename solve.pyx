# cython: boundscheck=False, wraparound=False
import numpy as np
cimport numpy as np

cdef extern from "solve.h":
    double solve(const int n, double tol, int max_iter, const double* p, const double * m,  double* x, double * stats)

def solve2(double tol, int max_iter, double[:] p, double[:] m, double[:] x, double[:] stats):
    return solve(p.shape[0]//3, tol, max_iter, &p[0], &m[0], &x[0], &stats[0] )

