import numpy as np
import reposition
import solve

p = np.array([ 1000,0,0,  1,0,0, 0,0,0])*1.0
x = np.array([  1000,0,0, 1,0,0,  0,0,0])*1.0

x = np.load('x0.npy').reshape(-1)
p = np.load('p.npy').reshape(-1)

#x[:] = p

reposition.solve2(p,x)


#print(x)

#reposition.solve2(p,x)


x = x.reshape(-1,1)
#print(x)
#print(-x[0:3,:]+x[3:6,:])
#print(x[3:6,:]-x[6:9,:])

N = p.shape[0]//3
Mi, R, L2 = solve.setup([ 0.001 if n>0 and n<N-1 else 1.0 for n in range(N) ])

solve.solve(p.reshape(-1,1), Mi, R, L2, maxiter=2)

