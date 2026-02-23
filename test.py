import numpy as np
import reposition
import solve

#x0 = np.load('x0.npy').reshape(-1)
p = np.load('p.npy').reshape(-1)
x0 = p*1.0
N = p.shape[0]//3
m = np.array([0.001 if n > 0 and n < N-1 else 1.0 for n in range(N)])
stats = np.zeros(8)

reposition.solve2(1e-15, 15, p, m, x0, stats)

Mi, R, L2 = solve.setup(m)
x1,_ = solve.solve(p.reshape(-1, 1), Mi, R, L2, maxiter=15, tol=1e-15)

err = np.linalg.norm(x0-x1.reshape(-1))**2
print(err)
