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
z = np.random.randn(6,1)*1.0

for t in range(int(9e9)):
    z0 = z.copy()


    g_z = 2*Si.dot(z)
    z = z-(1.0/(t+1.0))*g_z

    # project
    p = np.linalg.norm(z[0:4])
    u = np.abs(z[4])
    lamb = (p-u)/(u+p)
    if np.abs(lamb)>1:
        lamb = 1.0/lamb

    #print(lamb)
    if (lamb*lamb != 1):
        z[0:4] *= 1.0/(1.0+lamb)
        z[4] *= 1.0/(1.0-lamb)

    z[5] = 1


    #project out of nullspace
    v = (z[4] + z[5])*.5
    z[4] = v
    z[5] = v


    e = float((z-z0).T.dot(z-z0))
    if e<1e-14 or t>2256:
        print('terminate at %d with error %.12f' % (t,e))
        break


    #print(z[0:4].T.dot(z[0:4]) - z[4]*z[4] )

#(p-p0)2 + lamb(pTp - uTu )

#2p-2p0 + 2lamb p = 0
#2u-2u0 - 2lamb u = 0
#u - lamb u= u0
#(I-lambI)u = u0
print(z[0:6])
s = -np.linalg.inv(M2).dot( R.T.dot(-Si.dot(z)))
print(s)

v = s[0:4]
print(np.linalg.norm(v))
print(v/np.linalg.norm(v))
#print(s / np.linalg.norm(v))

