import numpy as np
import scipy.linalg

np.set_printoptions(precision=2,linewidth=260)

def solve_newton( m, pi, maxiter ):
    P = len(m)
    L = P-1

    S = .5*np.array([
    [1,0,0,-1,0,0],
    [0,1,0,0,-1,0],
    [0,0,1,0,0,-1],
    [-1,0,0,1,0,0],
    [0,-1,0,0,1,0],
    [0,0,-1,0,0,1]])

    v = 2.0/np.sqrt(2)
    R1 = S[:3] * v

    R = np.zeros((L*3,P*3))
    for i in range(L):
        #print(i)
        R[i*3:i*3+3,i*3:i*3+6] = R1

    p = np.zeros([P*3,1])
    p[:] = pi
    z = np.zeros([L*3,1])
    lamb = np.zeros([L,1])
    Q= np.zeros([L,L*3])
    D = np.zeros([L*3])
    Mi = np.zeros((P*3,P*3))

    z = R.dot(p)
    for i in range(L):
        zi = z[i*3:(i+1)*3,0]
        znorm = np.linalg.norm(zi)
        zi /= znorm * np.sqrt(2)

    #z = np.random.randn(L*3,1)

    for i in range(P):
        Mi[i*3:(i+1)*3,i*3:(i+1)*3] = np.eye(3) * (1/m[i])

    RR = R.dot(Mi.dot(R.T))
    #print(z)
    for i in range(maxiter):

        #print("inner iter %d" % i )
        z0 = z.copy()
        #lamb *=0

        D[:] = 0
        for j in range(L):
            zi = z[j*3:(j+1)*3]

            f = np.linalg.norm(zi)*np.sqrt(2)
            z[j*3:(j+1)*3] /= f
            lamb[j] *= f

            Q[j,j*3:(j+1)*3] = z[j*3:(j+1)*3].T
            D[ j*3:(j+1)*3] = lamb[j]

        b_z = np.linalg.solve(RR, z-R.dot(p)) + Q.T.dot(lamb)
        b_lamb = 0.5*(np.diag(Q.dot(Q.T)).reshape(-1,1) - np.ones((L,1))*.5)

        #print("b vectors")
        #print(b_z)
        #print(b_lamb)

        #Si = RR
        Si = np.linalg.inv(RR)
        A = np.vstack( [ np.hstack([ Si +np.diag(D), Q.T]), np.hstack([Q, np.zeros((L,L))]) ])
        #print(A)
        b = np.vstack( [ b_z, b_lamb ])
        s = np.linalg.solve(A,b)
        #print(s)

        #print(Q)
        #print(RR)
        #print(Q.dot(RR).dot(Q.T))
        #wfe
        #print(np.diag(D))
        #S = np.linalg.inv(RR+np.diag(D))

        #dlamb = lamb + np.linalg.solve(Q.dot(S).dot(Q.T), Q.dot(z-R.dot(p)) - b_lamb )
        #dz = z-R.dot(p)+S.dot(Q.T.dot(lamb-dlamb))
        #print("step vectors")
        #print(dz)
        #print(dlamb)
        #print(s)
        #liajwoeijf
        scale = np.linalg.norm(s)
        s /= scale

        dz = s[0:L*3]
        dlamb = s[L*3:]

        step = min(scale,scale)
        z -= dz * step
        lamb -= dlamb*step


        e = np.linalg.norm(b)**2
        #print(e)
        if (e < 1e-16 or i==maxiter-1 and i!=0 ):

            print("newton converged at iter %d with" % i )
            print(e)
            #print(z)
            #print(lamb)
            s = np.linalg.solve(RR, R.dot(p)-z)
            x = p-Mi.dot(R.T.dot(s))
            return x


#    if False:
#        Q[:] = 0
#        D[:] = 0
#        for j in range(L):
#            v = z[j*3:(j+1)*3,0]
#            Q[ j, j*3:(j+1)*3 ] = v*2
#            D[ j*3:(j+1)*3] = lamb[j]
#            c[j] = .5*(v.T.dot(v)-1)

def solve_power( m, pi, maxiter ):
    P = len(m)
    L = P-1

    S = .5*np.array([
    [1,0,0,-1,0,0],
    [0,1,0,0,-1,0],
    [0,0,1,0,0,-1],
    [-1,0,0,1,0,0],
    [0,-1,0,0,1,0],
    [0,0,-1,0,0,1]])

    v = 2.0/np.sqrt(2)
    R1 = S[:3] * v

    R = np.zeros((L*3,P*3))
    for i in range(L):
        #print(i)
        R[i*3:i*3+3,i*3:i*3+6] = R1

    p = np.zeros([P*3,1])
    p[:] = pi
    z = np.zeros([L*3,1])
    lamb = np.zeros([L,1])
    D = np.zeros([L*3])
    Q= np.zeros([L,L*3])
    Mi = np.zeros((P*3,P*3))

    z = R.dot(p)
    for i in range(L):
        zi = z[i*3:(i+1)*3,0]
        znorm = np.linalg.norm(zi)
        zi /= znorm * np.sqrt(2)

    #z = np.random.randn(L*3,1)*0

    for i in range(P):
        Mi[i*3:(i+1)*3,i*3:(i+1)*3] = np.eye(3) * (1/m[i])

    RR = R.dot(Mi.dot(R.T))

    #d,_ = np.linalg.eigh(RR)
    #print(d)
    #lkwjef
    RRi = np.linalg.inv(RR)
    c = RRi.dot(R.dot(p))
    #print(z)
    for i in range(maxiter):
        #print("inner iter %d" % i )
        z0 = z.copy()

        #RRi(z+u) = RRiRtp
        # solve for update
        #y = np.linalg.solve(RR+np.eye(L*3)*3, z-R.dot(p))
        #S = np.linalg.inv(RR-np.eye(L*3)*10)
        #S = (RR)
        #y = S.dot(z)-c

        g_z = 2*RRi.dot(z) - 2*c + 2*Q.T.dot(lamb)
        dz = np.linalg.solve( 2*(RRi+np.diag(D)), -g_z)
        #dz = (.5*RR+np.diag(D)).dot(-g_z)
        dznorm = np.linalg.norm(dz)
        #print("dz norm")
        #print(dznorm )
        y = z + (dz/(dznorm)) * min(999999999,dznorm)
        #y = z + g
        #y = np.linalg.solve( RRi+np.diag(D), -Q.T.dot(lamb)+c)

        #y = np.linalg.solve( np.eye(L*3)+np.diag(D).dot(RR) , RR.dot(z)) - c
        #print("g norm")
        #print(np.linalg.norm(g))
        #wefwef
        #y = z*.5 + u*.5
        #y = np.linalg.solve(RRi+np.diag(D), c - Q.T.dot(lamb) )
        #print(Q.dot(Q.T))
        #dz = z - R.dot(p) + np.linalg.solve(RR,Q.T.dot(lamb))
        #u = (RR-np.eye(L*3)*0.0).dot(R.dot(p)-z)
        #u = R.dot(p) - RR.dot(z)
        #y = z + u
        #print(u)
        #waefwaf
        #y = z*.5 + y*.5
        #y = z - u
        # normalize z
        D[:] = 0
        for j in range(L):
            yi = y[j*3:(j+1)*3]
            zi = z[j*3:(j+1)*3]
            sign = 1.0 if zi.T.dot(yi) >= 0 else -1.0
            ynorm = np.linalg.norm(yi)
            #print(ynorm)
            sign = 1
            if (sign<0):
                print("sign change")

            if ynorm > 1e-17 and True:
                #v = yi *.5 + zi*.5
                z[j*3:(j+1)*3] =  yi  * sign * (1.0/(ynorm)) * (1.0/np.sqrt(2))
                lamb[j] *= sign * ynorm*np.sqrt(2)
                #lamb[j] = sign*(ynorm*np.sqrt(2)-1.0)


            else:
                z[j*3:(j+1)*3] = yi
                pass
                #lamb[j] = 0.0

            Q[j,j*3:(j+1)*3] = z[j*3:(j+1)*3].T
            D[ j*3:(j+1)*3] = lamb[j]

        #print(np.linalg.pinv(Q.T))
        #print(Q.dot(RR.dot(Q.T)))
        #print(lamb)

        #Si = np.linalg.inv(RRi+np.diag(D))
        SS = RR
        g_z = RRi.dot(z) - c + Q.T.dot(lamb)
        g_lamb = .5*(np.diag(Q.dot(Q.T)).reshape(-1,1) - np.ones((L,1))*.5)
        #print(g_lamb)
        d_lamb = np.linalg.solve( Q.dot(SS).dot(Q.T), Q.dot(SS).dot(g_z) - g_lamb * 0)
        #print(d_lamb)
        lamb -= d_lamb
        #lamb *= lamb > 0

        #c2 = RRi.dot(z)-c
        #lamb =  -np.linalg.inv(Q.dot(Q.T)).dot(Q).dot(c2) * 1



        #print(Q.dot(RR).dot(Q.T))
        #lamb *= lamb > 0
        #print("best fit lamba")
        #print(lamb)
        #lkwjef
        for j in range(L):
            D[ j*3:(j+1)*3] = lamb[j] #*  (lamb[j] >= 0)

        #lkwjef
        #print("g norm after lambda")
        g_z = 2*RRi.dot(z) - 2*c + 2*Q.T.dot(lamb)
        e = np.linalg.norm(g_z)**2
        #print(e)
        if (e < 1e-19 or i==maxiter-1 and i!=0 ):

            print("solve_power converged at iter %d with" % i)
            print(e)
            #print(z)
            #print(lamb)
            s = np.linalg.solve(RR, R.dot(p)-z)
            x = p-Mi.dot(R.T.dot(s))
            return x,z,lamb


#    if False:
#        Q[:] = 0
#        D[:] = 0
#        for j in range(L):
#            v = z[j*3:(j+1)*3,0]
#            Q[ j, j*3:(j+1)*3 ] = v*2
#            D[ j*3:(j+1)*3] = lamb[j]
#            c[j] = .5*(v.T.dot(v)-1)




N = 128
p = np.zeros((N*3,1))
m = np.zeros((N,1))
p0 = np.array([[0.0,0.0,0.0]])
zigzag = np.array([[0,1,0]])
for i in range(N):
    p[i*3:(i+1)*3,0] = p0
    noise = 0.1
    delta2 = np.random.randn(1,3) * noise
    zigzag*= -1
    delta = np.array([[1,0,0]],dtype=np.float32) + zigzag + noise
    delta /= np.linalg.norm(delta)
    f = 1.0 if i<N-1 else 1.0
    p0 += delta * f
    m[i] = 1.0 if i==N-1 or i==0  else 1.0


for i in range(0):
    print("iter %d"%i)
    p0 = p.copy()


    p0[(N-1)*3:N*3,0] += np.array([1,1,1]) * 10.0




    #p*=2

    print("target p=")
    print(p0)
    r_power = solve_power( m, p0, 125 )
    r_newton = solve_newton( m, p0, 145 )

    print("result=")
    print(np.array( [r_power-r_newton, r_power, r_newton ]).T)
    print(np.linalg.norm(r_power-r_newton))


x0 = p.copy()
x1 = p.copy()
for i in range(2115):



    v = x1-x0
    #print("velocity")
    #print(v)
    x0[:] = x1
    x1 += v

    for j in range(N):
        x1[j*3:(j+1)*3,0] += np.array([0,-1,0]) * 0.098
    #print("targets")
    #print(x1)
    x1[0:3] *=0 # pin
    xp,z,lamb = solve_power(m, x1, 120 )
    y = solve_newton(m, x1, 120 )
    l = np.linalg.norm(xp-y)
    #print(l)
    if l>0.1 or False:
        print("z values")
        print( z)
        print(lamb)
        print(xp-y)
    x1[:] = xp
    #print("position")
    #print(x1)

    #print("target p=")
    #print(p)

    #print(p)
#print(Q.dot(Q.T))
#print(Q.dot(R).dot(R.T).dot(Q.T))


#print(scipy.linalg.null_space(R))

#S,V,D = np.linalg.svd(R)

#print(V)
