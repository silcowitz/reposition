import scipy
import numpy as np


def setup(m):
    P = len(m)
    L = P-1

    R1 = -np.array([
        [1, 0, 0, -1, 0, 0],
        [0, 1, 0, 0, -1, 0],
        [0, 0, 1, 0, 0, -1]])

    R = np.zeros((L*3, P*3))
    for i in range(L):
        R[i*3:i*3+3, i*3:i*3+6] = R1

    Mi = np.zeros((P*3, P*3))

    for i in range(P):
        Mi[i*3:(i+1)*3, i*3:(i+1)*3] = np.eye(3) * \
            ((1/m[i]) if m[i] > 0.0 else 0.0)

    RMR = R.dot(Mi.dot(R.T))
    L2 = scipy.linalg.cholesky(RMR).T

    return Mi, R, L2


def solve(p, Mi, R, L2, maxiter=8, pre_z=None, tol=1e-15):
    L = (len(p)//3) - 1
    if not pre_z is None:
        z = pre_z
    else:
        z = R.dot(p)

    D = np.zeros([L*3])
    Q = np.zeros([L, L*3])
    Qf = None
    for i in range(maxiter):

        # project z and set Q
        for j in range(L):
            zi = np.zeros((3, 1))
            zi[:] = z[j*3:(j+1)*3]
            zi /= np.linalg.norm(zi)
            z[j*3:(j+1)*3] = zi
            Q[j, j*3:(j+1)*3] = zi.T

        # solve lambda
        lamb = scipy.linalg.solve(Q.dot(L2.dot(L2.T)).dot(
            Q.T), Q.dot(R.dot(p)-z), assume_a="tridiagonal")

        for j in range(L):
            D[j*3:(j+1)*3] = lamb[j] if lamb[j] > 0 else 0

        bz = scipy.linalg.solve(L2, R.dot(p)-z, assume_a="lower triangular")
        bl = L2.T.dot(Q.T).dot(lamb)
        e = np.linalg.norm(bz-bl)**2

        if ((e < tol or i == maxiter-1) and i != 0):
            print(f"solve_power converged at iter {i} with {e}")
            # get back to x
            s = scipy.linalg.solve(L2.T, bz, assume_a='upper triangular')
            x = p-Mi.dot(R.T.dot(s))
            return x, z

        # newton step
        dz = L2.dot(scipy.linalg.solve(1*np.eye(L*3) +
                    L2.T.dot(np.diag(D).dot(L2)), bz-bl, assume_a="banded"))
        z += dz
