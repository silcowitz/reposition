import numpy as np
from scipy.linalg import null_space

np.set_printoptions(precision=3,linewidth=260)

M = np.array([[2,1,0,0],[1,2,1,0],[0,1,2,1],[0,0,1,2]])
print(M)
print(np.linalg.eigh(M))

#A = np.random.rand(4,4)
#M = A.dot(A.T)+np.eye(4)*0.01


M2 = np.hstack( [M, np.zeros((4,1))])
M2 = np.vstack( [M2, np.array([[0,0,0,0,1]])])

#print(M2)


B = np.diag([1,1,1,1,-1])
print(B)

print(np.linalg.eigh(B))

R = np.vstack([ np.eye(5), np.array([[0,0,0,0,1]])])
print(R)

print("svd")
print(null_space(R.dot(R.T)))

S = R.dot(np.linalg.inv(M2)).dot(R.T)
print("eigh")
print(np.linalg.eigh(S))
Si = np.linalg.pinv(S)


d,R2=np.linalg.eigh(S)
t = 1.0*(d > 0)

def ds(s):
    u = d*(1-s) + t*s
    return np.diag( [ (1.0/i if i>0 else 0.0) for i in u ])

print(ds(1))

#wefwafe
#step_s = np.min(d[1:])/np.max(d[1:])

#lawekjf
z = np.random.randn(6,1)*1.0

for t in range(int(9e9)):
    s = (1.0/(t+1.0))
    #print(s)
    #Si = R2.dot(ds(np.random.rand(1))).dot(R2.T)
    g_z = 2*Si.dot(z)
    #s = 0.21
    z = z-s*g_z
    #z = S.dot(z)

    z0 = z.copy()
    # project
    for j in range(138):
        #project out of nullspace
        #v = (z[4] + z[5])*.5
        v = 1
        z[4] = v
        z[5] = v

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

        if (lamb*lamb < 1e-32):
            #print('z[5] = %f' % z[5])
            break


    #ljwoeif

    e = float((z-z0).T.dot(z-z0))

    n0 = g_z / np.linalg.norm(g_z)
    n1 = (z-z0) / np.linalg.norm(z-z0)

    e = 1.0-abs(n0.T.dot(n1))

    print(e)
    if e<1e-16 or t>1126:
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
