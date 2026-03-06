import numpy as np
import reposition
import solve
import pyvista as pv
import matplotlib.pyplot as plt
from cpuinfo import get_cpu_info



def conv_plot(errors, times, name, max_ticks=10):
    iters = errors.shape[0]
    k = np.arange(iters)

    # convert time to milliseconds
    times_ms = np.asarray(times) * 1000.0

    plt.style.use('dark_background')
    fig, ax = plt.subplots()

    ax.semilogy(k, errors, color='red', linestyle='-', marker=None)
    ax.set_xlabel('Iteration')
    ax.set_ylabel('Error')
    tick_idx = np.unique(np.linspace(0, iters - 1, min(max_ticks, iters), dtype=int))
    tick_pos = k[tick_idx]
    ax.set_xticks(tick_pos)
    axt = ax.twiny()
    axt.set_xlim(ax.get_xlim())
    axt.set_xticks(tick_pos)
    axt.set_xticklabels([f'{times_ms[i]:.2f}' for i in tick_idx], color='white')
    axt.set_xlabel('ms elapsed', color='white')
    axt.tick_params(axis='x', colors='white', length=4)
    ax.grid(True, which='both', ls='-', alpha=0.6)
    fig.tight_layout()
    fig.savefig(f'plots/{name}.pdf', format='pdf',
                bbox_inches='tight', transparent=True)

def point_plot(x0, x1, name):
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
    conn_pts = np.vstack([points1[:N], points2[:N]])
    conn_lines = np.hstack([[2, i, i + N] for i in range(N)]).astype(np.int64)
    connectors = pv.PolyData()
    connectors.points = conn_pts
    connectors.lines = conn_lines

    plotter = pv.Plotter(off_screen=True, window_size=(512*4, 512*4))
    plotter.set_background('#1e1e1e')
    plotter.add_mesh(polyline2, color='blue', line_width=8,
                     render_lines_as_tubes=True)
    red = plotter.add_mesh(polyline1, color='red',
                           line_width=8, render_lines_as_tubes=True)
    if N <= 64: # display points and corresponding lines
        plotter.add_mesh(polyline2.points, color='blue', point_size=32, render_points_as_spheres=True)
        plotter.add_mesh(polyline1.points, color='red', point_size=32, render_points_as_spheres=True)
        connect = plotter.add_mesh(
            connectors, color='violet', line_width=2, render_lines_as_tubes=True, opacity=.8)

    plotter.camera_position = 'iso'
    plotter.reset_camera(bounds=polyline2.bounds)
    plotter.camera_set = True  # <-- important: prevents show() auto reset
    xmin, xmax, ymin, ymax, zmin, zmax = polyline2.bounds
    plotter.show_bounds(
        grid='back',
        color='grey',
        bounds=(xmin, xmax, ymin, ymax, zmin, zmax),
    )
    plotter.screenshot(f"plots/{name}.png")  # , window_size=(512*4, 512*4))


def run_test(p, m, name):
    stats = np.zeros(256, dtype=float)
    N = p.shape[0]//3
    x0 = p.copy()
    reposition.solve2(1e-99, 0, p, m, x0, stats)
    point_plot(x0, p, f'{name}_00')

    x0 = p.copy()
    reposition.solve2(1e-99, 1, p, m, x0, stats)
    point_plot(x0, p, f'{name}_01')

    reposition.solve2(1e-99, 120, p, m, x0, stats)
    time = stats[0]
    e = stats[1]
    iters = int(stats[2])
    errors = stats[3:3+iters*2:2]
    times = stats[3+1:3+iters*2:2]
    conv_plot(errors, times, name)
    idx = int(np.argmin(np.abs(errors-1e-13)))
    point_plot(x0, p, f'{name}_last')
    with open(f'plots/{name}.txt', 'w') as f:
        brand_raw = get_cpu_info().get("brand_raw")
        cpu_name = f" running on {brand_raw}" if brand_raw else ""
        print(
            f'N={N}, finished in {idx+1} iterations at e={errors[idx]:.2e} in {times[idx]*1000:.4f} ms{cpu_name}', file=f)

