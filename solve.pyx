# cython: boundscheck=False, wraparound=False
import numpy as np
cimport numpy as np

cdef extern from "solve.h":
    double solve(const int n, const double* p, const double * m,  double* x)

def solve2(double[:] p, double[:] m, double[:] x):
    return solve(p.shape[0]//3, &p[0], &m[0], &x[0] )

