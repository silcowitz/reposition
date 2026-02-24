##  Reposition - projection of chain-constrained points
This is a generalization of the well-known projection of two 3d points in position based dynamics (PBD), to handle a $N$-point chain of connected points. One can use this projection completely analagous to the classic PBD projection, only in this case it applies to a chain of points. [try the demo here](https://silcowitz.github.io/reposition/)

The algorithm works by transforming the problem to only work on the $N-1$ normalized direction vectors of each link in the chain, and performing staggered newton-like steps on this formulation. Read the technical description [here.](https://silcowitz.github.io/reposition/solve.pdf)

The main advantages of this are
  1. You can trivially project the solution $\mathbf z$ to one that satisfies the constraints by normalizing each 3-vector in $\mathbf z $. This drastically improves stability of the solver.

  2. Computing both the multipliers and the newton-step on the variables idependently requires only solving symetric tri-diagonal systems which are fast/easy to solve


## Code

The code in the repo is not super optimal, but the main goal was to have a simple C implementation that
  1. is fast enough to make a useful demo
  2. can be easily compiled to web-assembly target
  3. can be used as a boiler-plate for more effecient implementations later on
  4. be easily compared to the python reference implementation
