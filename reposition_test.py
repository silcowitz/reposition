import numpy as np
import reposition
import solve

p = np.array([ 1000,0,0,  1,0,0, 0,0,0])*1.0
x = np.array([  1000,0,0, 1,0,0,  0,0,0])*1.0

reposition.solve2(p,x)


#print(x)

#reposition.solve2(p,x)


x = x.reshape(-1,1)
print(x)
print(-x[0:3,:]+x[3:6,:])
#print(x[3:6,:]-x[6:9,:])

N = 2
Mi, R, L2 = solve.setup([0.001,1.0,0.001])

print(solve.solve(p.reshape(-1,1), Mi, R, L2))
