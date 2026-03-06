# test if python and c extension agree
import numpy as np
import reposition
import solve

def spiral(num_points, spacing=2.5, height_increment=0.15):
    points = []
    for i in range(num_points):
        theta = i*(np.pi/num_points)
        r = spacing * (i+1)
        x = r * np.cos(theta)
        y = r * np.sin(theta)
        z = i*height_increment
        points.append((x, y, z))
    return np.array(points).flatten()

p = spiral(128)

x0 = p*1.0
N = p.shape[0]//3
m = np.array([1.0 for n in range(N)])
stats = np.zeros(8)

reposition.solve2(1e-12, 64, p, m, x0, stats)
#print(stats)
Mi, R, L2 = solve.setup(m)
x1,_ = solve.solve(p.reshape(-1, 1), Mi, R, L2, maxiter=64, tol=1e-12)
err = np.linalg.norm(x0-x1.reshape(-1))
#print(err)
GREEN = "\033[32m"
RED = "\033[31m"
RESET = "\033[0m"

if err < 1e-11:
    print(f"{GREEN}[PASSED]{RESET}")
    exit(0)
else:
    print(f"{RED}[FAILED]{RESET}")
    exit(-1)









