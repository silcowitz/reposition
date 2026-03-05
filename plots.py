import numpy as np
import reposition
import solve
import pyvista as pv
import matplotlib.pyplot as plt
from cpuinfo import get_cpu_info


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

    plotter = pv.Plotter(off_screen=True, window_size=(512*4,512*4))
    #plotter.show_bounds(grid='back', color='grey')
    plotter.set_background('#1e1e1e')
    plotter.add_mesh(polyline2, color='blue', line_width=8, render_lines_as_tubes=True, reset_camera=True )
    plotter.reset_camera(bounds=polyline2.bounds)  # keep framing based on blue only
    red = plotter.add_mesh(polyline1, color='red', line_width=8, render_lines_as_tubes=True, reset_camera=False )
    red.SetUseBounds(False)
    #connect = plotter.add_mesh(connectors, color='white', line_width=1, opacity=.1)

    plotter.camera_position = 'iso'
    plotter.reset_camera(bounds=polyline2.bounds)
    plotter.camera_set = True  # <-- important: prevents show() auto reset
    # Lock bounds to blue data
    xmin, xmax, ymin, ymax, zmin, zmax = polyline2.bounds
    plotter.show_bounds(
        grid='back',
        color='grey',
        bounds=(xmin, xmax, ymin, ymax, zmin, zmax),
    )
    plotter.screenshot(f"{name}.png")#, window_size=(512*4, 512*4))

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
        brand_raw = get_cpu_info().get("brand_raw")
        cpu_name = f" on a {brand_raw}" if brand_raw else ""
        print(f'N={N}, finished in {iters} iterations at e={e:.2e} in {time:.4f}s{cpu_name}', file=f)

