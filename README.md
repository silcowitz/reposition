##  Reposition - projection of chain-constrained points
This is a generalization of the well-known projection of two 3d points in position based dynamics (PBD), to handle a $$N$$-point chain of connected points. One can use this projection completely analagous to the classic PBD projection, only in this case it applies to a chain of points. [run demo](https://silcowitz.github.io/reposition/)

The algorithm works by transforming the problem to only work on the $$N-1$$ normalized direction vectors $$\mathbf z $$ of each link in the chain, and performing newton-like steps on this formulation.

The main advantages of this are,
  1. you can trivially project the solution $$\mathbf z $$ to one that satisfies the constraints by normalizing each 3-vector in $$\mathbf z $$

  2. computing both the multipliers as well as the newton-step on the variables requires only solving symetric tri-diagonal systems which are fast/easy to solve

     

## Formulation

we're going to solve 

$$\min_{\mathbf x}  \bf\frac{1}{2} (\mathbf x - \mathbf p)^{\mathrm T} \mathbf M (\mathbf x - \mathbf p)$$

subject to 

$$ \mathbf z = \mathbf R \mathbf x $$  and $$ || \mathbf z_i ||^2 = 1$$ 

where

​	$$ \mathbf R $$ is the per vector finite-difference matrix, so $$(\mathbf R\mathbf x)_i = \mathbf x_i - \mathbf x_{i+1}$$  

## Algorithm

inputs

$$\mathbf x \in \R^{3n}$$	 vector of current/warm start positions 

$$\mathbf p \in \R^{3n}$$ 	vecor of target/free fall particle positions 

$$\mathbf m \in \R^{n}$$	vector of mass weights for each particle   



1. form $$ \mathbf R\mathbf M^{-1} \mathbf R^{\mathrm T}  $$

## Code

The code in the repo is not super optimal, but the main goal was to have a simple C implementation that
  1. is fast enough to make a useful demo
  2. can be easily compiled to web-assembly target
  3. can be used as a boiler-plate for more effecient implementations later on
  4. be easily compared to the python reference implementation

