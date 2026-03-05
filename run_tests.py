import numpy as np
import reposition
import solve
import pyvista as pv
import matplotlib.pyplot as plt

def generate_spiral_points(num_points, spacing=0.55, height_increment=0.015):
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


# Constants
D=15
A = 1.0*D
B = 1.0*D
C = 1.0*D

# Irrational frequency ratios
a = 1
b = np.sqrt(10.0)
c = 3.14159

dt = 0.04

# Number of particles
N = 1024*1 # set this to whatever you need

# Time array
t = np.arange(N) * dt

# Mass array
m = np.ones(N)

# Position array (N x 3)
x = np.zeros((N, 3))

x[:, 0] = A * np.sin(a * t)
x[:, 1] = B * np.sin(b * t)
x[:, 2] = C * np.sin(c * t)


#x = np.load('p.npy').reshape(-1)

if True:
    import numpy as np
    from scipy.integrate import solve_ivp

    def lorenz(t, state, sigma=10.0, rho=28.0, beta=8.0/3.0):
        x, y, z = state
        return [
            sigma * (y - x),
            x * (rho - z) - y,
            x * y - beta * z
        ]

    # Integration settings
    t0, t1 = 0.0, 40.0
    N = 1024*32
    t_eval = np.linspace(t0, t1, N)
    y0 = [1.0, 1.0, 1.0]

    sol = solve_ivp(lorenz, (t0, t1), y0, t_eval=t_eval, rtol=1e-9, atol=1e-12)

    points = sol.y.T              # shape (N, 3) as [x,y,z]
    points -= points.mean(axis=0)
    points *= 52
    x = points.ravel()  # shape (3N,) flat array


# If p is meant to be identical to x (as in your C code):
x = x.flatten()
p = x.copy()

#x0 = np.load('x0.npy').reshape(-1)
#p = np.load('p.npy').reshape(-1)
# Generate spiral points
#num_points = 1024*32  # Adjust the number of points as needed
#p = generate_spiral_points(num_points)

x0 = p*1.0
N = p.shape[0]//3
m = np.array([1.0 for n in range(N)])


def conv_plot(errors, name):
    iters = errors.shape[0]
    k = np.arange(1, iters + 1)
    plt.style.use('dark_background')
    fig, ax = plt.subplots()
    ax.semilogy(k, errors, color='red', linestyle='-', marker=None)
    ax.set_xlabel('Iteration')
    ax.set_ylabel('Error')
    ax.set_title('Convergence')
    ax.grid(True, which='both', ls='-', alpha=0.6)
    fig.tight_layout()
    fig.savefig(f'{name}.pdf', format='pdf', bbox_inches='tight', transparent=True)


def point_plot( x0, x1, name ):
    points1 = x0.reshape(-1, 3)
    points2 = x1.reshape(-1, 3)
    N = min(len(points1), len(points2))
    cells_chain = np.hstack([[N], np.arange(N)])

    polyline1 = pv.PolyData()
    polyline1.points = points1[:N]
    polyline1.lines = cells_chain

    polyline2 = pv.PolyData()
    polyline2.points = points2[:N]
    polyline2.lines = cells_chain

    # Connector lines (point i in set1 -> point i in set2)
    conn_pts = np.vstack([points1[:N], points2[:N]])  # first N are set1, next N are set2
    conn_lines = np.hstack([[2, i, i + N] for i in range(N)]).astype(np.int64)
    connectors = pv.PolyData()
    connectors.points = conn_pts
    connectors.lines = conn_lines

    plotter = pv.Plotter(off_screen=True)
    #plotter.show_bounds(grid='back', color='grey')
    plotter.set_background('#1e1e1e')
    plotter.add_mesh(polyline2, color='blue', line_width=8, render_lines_as_tubes=True, reset_camera=True )
    plotter.reset_camera(bounds=polyline2.bounds)  # keep framing based on blue only
    red = plotter.add_mesh(polyline1, color='red', line_width=8, render_lines_as_tubes=True, reset_camera=False )
    red.SetUseBounds(False)

    plotter.camera_position = 'yz'
    plotter.reset_camera(bounds=polyline2.bounds)
    plotter.camera_set = True  # <-- important: prevents show() auto reset
    # Lock bounds to blue data
    xmin, xmax, ymin, ymax, zmin, zmax = polyline2.bounds
    plotter.show_bounds(
        grid='back',
        color='grey',
        bounds=(xmin, xmax, ymin, ymax, zmin, zmax),
    )
    plotter.show(screenshot=f"{name}.png", window_size=(1024*2, 1024*2))

def run_test( p, m, name ):
    stats = np.zeros(128, dtype=float)
    N = p.shape[0]//3
    x0 = p.copy()
    reposition.solve2(1e-12, 0, p, m, x0, stats)
    point_plot(x0,p,f'{name}_00')

    x0 = p.copy()
    reposition.solve2(1e-12, 1, p, m, x0, stats)
    point_plot(x0,p,f'{name}_01')

    reposition.solve2(1e-12, 99, p, m, x0, stats)
    time = stats[0]
    e = stats[1]
    iters = int(stats[2])
    errors = stats[3:3+iters]
    conv_plot(errors, name)
    point_plot(x0,p,f'{name}_last')
    with open(f'{name}.txt','w') as f:
        print(f'N={N}, finished in {iters} iterations at e={e:.2e} in {time:.4f}s on a Mac M1', file=f)


run_test( p, m, 'test')


