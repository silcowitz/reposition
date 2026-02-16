# cython: boundscheck=False, wraparound=False
import numpy as np
cimport numpy as np

cdef extern from "solve.h":
    void solve(const int n, const double* p, double* x)

def solve2(double[:] arr, double[:] x):
    solve(arr.shape[0]//3, &arr[0], &x[0] )

