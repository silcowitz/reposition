import numpy as np
from numpy.linalg import norm

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
    L2 = np.linalg.cholesky(RMR)

    return Mi, R, L2


def solve(p, Mi, R, L2, maxiter=8, pre_z=None, tol=1e-15):
    p_mean = np.mean(p.reshape(-1,3), axis=0)
    p_mean = np.tile(p_mean, p.size // 3).reshape(p.shape)*0
    N=p.shape[0]
    #print(p_mean)
    p -= p_mean
    sc = np.linalg.norm(p)
    sc=1
    print(f'sc={sc}')
    p /= sc
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
            zi /= sc
            z[j*3:(j+1)*3] = zi
            Q[j, j*3:(j+1)*3] = zi.T

        # solve lambda
        lamb = np.linalg.solve(Q.dot(L2.dot(L2.T)).dot(
            Q.T), Q.dot(R.dot(p)-z))

        for j in range(L):
            D[j*3:(j+1)*3] = lamb[j] if lamb[j] > 0 else 0

        bz = np.linalg.solve(L2, R.dot(p)-z)
        bl = L2.T.dot(Q.T).dot(lamb)
        bz_rms = norm(bz)/np.sqrt(N)
        bl_rms = norm(bl)/np.sqrt(N)
        e_rms = norm(bz-bl)/np.sqrt(N)
        #e = e_rms / max(1, bz_rms, bl_rms)
        e = norm(bz-bl) / (1e-16 + norm(bz))
        #e = np.linalg.norm(bz-bl)**2
        print(f'e={e}')
        if ((e < tol or i == maxiter-1) and i != 0):
            print(f"solve_power converged at iter {i} with {e}")
            # get back to x
            s = np.linalg.solve(L2.T, bz)
            x = p-Mi.dot(R.T.dot(s))
            return x*sc+p_mean, z*sc

        # newton step
        dz = L2.dot(np.linalg.solve(1*np.eye(L*3) +
                    L2.T.dot(np.diag(D).dot(L2)), bz-bl))
        z += dz
