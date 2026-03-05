import numpy as np
import reposition
import solve

def generate_spiral_points(num_points, spacing=0.5, height_increment=0.15):
    points = []
    theta = 0
    z = 0
    for i in range(num_points):
        r = spacing * (i+1)
        x = r * np.cos(theta)
        y = r * np.sin(theta)
        points.append((x, y, z))
        theta += 1.0 / r  # Adjust the angle increment for tighter/looser spirals
        z += height_increment
    return np.array(points).flatten()

#x0 = np.load('x0.npy').reshape(-1)
#p = np.load('p.npy').reshape(-1)
# Generate spiral points
num_points = 1024  # Adjust the number of points as needed
p = generate_spiral_points(num_points)

x0 = p*1.0
N = p.shape[0]//3
m = np.array([1.0 for n in range(N)])
stats = np.zeros(8)

reposition.solve2(1e-12, 225, p, m, x0, stats)
print(stats)

Mi, R, L2 = solve.setup(m)
x1,_ = solve.solve(p.reshape(-1, 1), Mi, R, L2, maxiter=15, tol=1e-32)

err = np.linalg.norm(x0-x1.reshape(-1))**2
print(err)





