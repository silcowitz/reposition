import numpy as np


np.set_printoptions(precision=3,linewidth=260)

M = np.array([[2,1,0,0],[1,2,1,0],[0,1,2,1],[0,0,1,2]])
print(M)
print(np.linalg.eigh(M))


M2 = np.hstack( [M, np.zeros((4,1))])
M2 = np.vstack( [M2, np.array([[0,0,0,0,1]])])

print(M2)


B = np.diag([1,1,1,1,-1])
print(B)

print(np.linalg.eigh(B))

R = np.vstack([ np.eye(5), np.array([[0,0,0,0,1]])])
print(R)

S = R.dot(np.linalg.inv(M2)).dot(R.T)

print(np.linalg.eigh(S))
Si = np.linalg.pinv(S)

#lawekjf
z = np.random.randn(6,1)*0.0001

for t in range(11145):
    z0 = z.copy()
    g_z = Si.dot(z)
    z = z-(1/(t*1+1))*g_z

    # project
    p = np.linalg.norm(z[0:4])
    u = np.abs(z[4])
    lamb = (p-u)/(u+p)
    if np.abs(lamb)>1:
        lamb = 1.0/lamb

    #print(lamb)

    z[0:4] *= 1.0/(1.0+lamb)
    z[4] *= 1.0/(1.0-lamb)
    z[5] = 1.0

    #print((z-z0).T.dot(z-z0))


    #print(z[0:4].T.dot(z[0:4]) - z[4]*z[4] )

#(p-p0)2 + lamb(pTp - uTu )

#2p-2p0 + 2lamb p = 0
#2u-2u0 - 2lamb u = 0
#u - lamb u= u0
#(I-lambI)u = u0
print(z[0:6])
s = R.T.dot(Si.dot(z))
print(s)

v = s[0:4]
print(np.linalg.norm(v))
print(v/np.linalg.norm(v))
print(s / np.linalg.norm(v))

