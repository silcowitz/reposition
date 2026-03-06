import numpy as np
from scipy.integrate import solve_ivp
import plots

# lorenz


def lorenz(t, state, sigma=10.0, rho=28.0, beta=8.0/3.0):
    x, y, z = state
    return [
        sigma * (y - x),
        x * (rho - z) - y,
        x * y - beta * z
    ]


t0, t1 = 0.0, 40.0
N = 1024*32
t_eval = np.linspace(t0, t1, N)
y0 = [1.0, 1.0, 1.0]

sol = solve_ivp(lorenz, (t0, t1), y0, t_eval=t_eval, rtol=1e-9, atol=1e-12)

points = sol.y.T
points -= points.mean(axis=0)
points *= 52
p = points.flatten()
N = p.shape[0]//3
m = np.array([1.0 for n in range(N)])
plots.run_test(p, m, 'lorenz')


# helix
def generate_helix_points(points_per_cycle, num_cycles, radius=8, height_per_cycle=5):
    points = []
    total_points = points_per_cycle * num_cycles
    for i in range(total_points):
        theta = 2 * np.pi * (i / points_per_cycle)
        x = radius * np.cos(theta)
        y = radius * np.sin(theta)
        z = height_per_cycle * (i / points_per_cycle)
        points.append((x, y, z))
    return np.array(points).flatten()


points_per_cycle = 16
num_cycles = 4
p = generate_helix_points(points_per_cycle, num_cycles)
N = points_per_cycle * num_cycles
m = np.array([1.0 for n in range(N)])
plots.run_test(p, m, 'helix')

# circle


def generate_closing_ellipse_points(num_points, a=12.0, b=6.0, z_step=0.2):
    points = []
    for i in range(num_points):
        t = (2.0 * np.pi * i) / num_points
        x = a * np.cos(t)
        y = b * np.sin(t)
        z = z_step * i * 0.0
        points.append((x, y, z))
    return np.array(points).flatten()


num_points = 32
p = generate_closing_ellipse_points(num_points, a=8, b=8)
m = np.array([1.0 for n in range(N)])
plots.run_test(p, m, 'circle')


# knot

# Constants
D = 15
A = 1.0*D
B = 1.0*D
C = 1.0*D

# Irrational frequency ratios
a = 1
b = np.sqrt(10.0)
c = np.pi

dt = 0.04

# Number of particles
N = 1024*2  # set this to whatever you need

# Time array
t = np.arange(N) * dt

# Mass array
m = np.ones(N)

# Position array (N x 3)
x = np.zeros((N, 3))

x[:, 0] = A * np.sin(a * t)
x[:, 1] = B * np.sin(b * t)
x[:, 2] = C * np.sin(c * t)
p = x.flatten().copy()

m = np.array([1.0 for n in range(N)])
plots.run_test(p, m, 'knot')


p = np.load('p.npy').reshape(-1)
m = np.array([1.0 for n in range(N)])
N = p.shape[0]//3
x = p.copy()
plots.run_test(p, m, 'animation')
