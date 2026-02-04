import numpy as np
import scipy.linalg
import os
import sys
import time
from scipy.linalg import null_space
from scipy.sparse.linalg import cg
from scipy.linalg import solve_banded

np.set_printoptions(precision=2,linewidth=1260,threshold=sys.maxsize)

def solve_newton( m, pi, lamb, maxiter ):
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
    if lamb is None:
        lamb = np.zeros([L,1])
    Q= np.zeros([L,L*3])
    D = np.zeros([L*3])
    Mi = np.zeros((P*3,P*3))
    M = np.zeros((P*3,P*3))

    z = R.dot(p)
    for i in range(L):
        zi = z[i*3:(i+1)*3,0]
        znorm = np.linalg.norm(zi)
        zi /= znorm * np.sqrt(2)

    #z = np.random.randn(L*3,1)

    for i in range(P):
        Mi[i*3:(i+1)*3,i*3:(i+1)*3] = np.eye(3) * ( (1/m[i]) if m[i] > 0.0 else 0.0)
        M[i*3:(i+1)*3,i*3:(i+1)*3] = np.eye(3) * ( (m[i]) if m[i] > 0.0 else 0.0)

    #print(np.linalg.eigh(R.dot(M.dot(R.T))))
    #lkwjeqf

    RR = R.dot(Mi.dot(R.T))
    Si = np.linalg.pinv(RR)
    #print(z)
    for i in range(maxiter):

        #print("inner iter %d" % i )
        z0 = z.copy()
        #lamb *=0

        D[:] = 0
        lamb_sum = 0
        for j in range(L):
            zi = z[j*3:(j+1)*3]

            f = np.linalg.norm(zi)*np.sqrt(2)
            #f = 1.0
            z[j*3:(j+1)*3] /= f
            lamb[j] /= f
            lamb_sum += lamb[j]
            Q[j,j*3:(j+1)*3] = z[j*3:(j+1)*3].T * 1
            #D[ j*3:(j+1)*3] = lamb[j] if lamb[j] > 0 else 0
            D[ j*3:(j+1)*3] = abs(lamb[j]) # if lamb[j] > 0 else 0


        if False:
            for j in range(L):
                zi = z[j*3:(j+1)*3]
                D[ j*3:(j+1)*3] = 1*lamb_sum / L



        b_z = Si.dot(z-R.dot(p)) + Q.T.dot(lamb)
        b_lamb = 0.5*(np.diag(Q.dot(Q.T)).reshape(-1,1) - np.ones((L,1))*.5) * 0.0

        #print("b vectors")
        #print(b_z)
        #print(Si.dot(N))

        D2 = np.diag(np.ones_like(D))*(lamb_sum/L)
        #print(D2)
        #print(np.diag(D))
        Sp = np.linalg.inv(Si+np.diag(D)*0+D2*1)
        #Spdd = np.linalg.inv(Si+np.diag(D)*0+D2*1)


        Spdd = np.linalg.inv(np.diag(np.diag(Si))+np.diag(D))
        QQp = np.linalg.inv(Q.dot(Sp).dot(Q.T))

        #print("null space")
        #print(Q)
        #print(null_space(Q))
        #print(null_space(Q).shape)
        #N = null_space(Q)
        #print(N.T.dot(Si+np.diag(D)).dot(N))
        #print(np.linalg.cond(Si+np.diag(D)))
        #print(np.linalg.cond(N.T.dot(Si+np.diag(D)).dot(N)))
        #QQp = np.eye(L)
        #Sp = Spd
        #print( Sp )
        #print("reduced system, lambda=0")
        #print( Q.dot(R.dot(R.T)).dot(Q.T) )
        #QQp = np.linalg.inv(Q.dot(Q.T))
        #Sp = np.eye(L*3)
        #print(np.linalg.cond(P.dot(Si+np.diag(D))))

        #Si = RR
        A = np.vstack( [ np.hstack([ Si+np.diag(D), Q.T]), np.hstack([Q, np.zeros((L,L))]) ])
        P = np.vstack( [ np.hstack( [ Sp-Sp.dot(Q.T).dot(QQp).dot(Q).dot(Sp), Sp.dot(Q.T).dot(QQp) ]), np.hstack( [ QQp.dot(Q).dot(Sp), -QQp ]) ] )

        #print("condition number")
        #print(np.linalg.cond(P.dot(A)))
        #print("complement condition number")
        #print(np.linalg.cond(    np.linalg.inv(Q.dot(Spdd).dot(Q.T).dot(   Q.dot(Sp).dot(Q.T) )    )))

        #print(np.linalg.inv(Si+np.diag(D)))
        #print(np.diag(P.dot(A)))
        #print(np.linalg.cond(Q.dot(Sp).dot(Q.T)))



        b = np.vstack( [ b_z, b_lamb ])

        #s = np.linalg.pinv(A).dot(b)

        if False:
            qq,it = cg( Q.dot(Sp).dot(Q.T), Q.dot(Sp.dot(b_z))-b_lamb, M=np.linalg.inv(Q.dot(Spdd).dot(Q.T)), tol=1e-14, maxiter=15,callback = lambda x: print('iter2,',end='') )
            #s,it = cg( A, b, tol=1e-14, maxiter=15,callback = lambda x: print('iter') )
        #print("qq=")
        #print(qq)

        if False:
            s,it = cg( A, b, tol=1e-14, maxiter=15, M = P,callback = lambda x: print('iter,',end='') )
            #s,it = cg( A, b, tol=1e-14, maxiter=15,callback = lambda x: print('iter') )
            s = s.reshape(-1,1)

        s = P.dot(b)

        #print(np.linalg.inv(A))
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
        scale = np.linalg.norm(s) + 0.0001
        s /= scale

        dz = s[0:L*3]
        dlamb = s[L*3:]

        step = min(scale,scale)
        z -= dz * step
        lamb -= dlamb * step


        e = np.linalg.norm(b)**2
        #print(e)
        if (e < 1e-16 or i==maxiter-1 and i!=0 ):

            print("newton converged at iter %d with" % i )
            print(e)
            #print(z)
            #print(lamb)
            s = Si.dot(R.dot(p)-z)
            x = p-Mi.dot(R.T.dot(s))
            return x, lamb

def solve_pgd( m, pi, maxiter, pre_z = None):
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


    #print(np.linalg.cholesky(S))
    #print(R1)

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
    Mip = np.zeros((P*3,P*3))

    z = R.dot(p)
    if False:
        for i in range(L):
            zi = z[i*3:(i+1)*3,0]
            znorm = np.linalg.norm(zi)
            zi /= znorm * np.sqrt(2)

    #z = np.random.randn(L*3,1)*0

    if not pre_z is None and True:
        z = pre_z

    for i in range(P):
        Mi[i*3:(i+1)*3,i*3:(i+1)*3] = np.eye(3) * ( (1/m[i]) if m[i] > 0.0 else 0.0)
        Mip[i*3:(i+1)*3,i*3:(i+1)*3] = np.eye(3) * ( (1/m[i]) if m[i] >= 1.0 else 0.0)



    RR = R.dot(Mi.dot(R.T))

    C = np.linalg.cholesky(RR)
    Ci = np.linalg.inv(C)
    q = Ci.dot(z)
    #print(q)
    #print(RR-C.dot(C.T))
    #wef
    #lkwjef
    #wer

    Du,U = np.linalg.eigh(RR)
    #print(np.max(d))
    #print(np.min(d))
    print(Du)
    #d_mask[0:3] = 0.0
    #d[453:] = 0.0
    d_mask = np.array([ 1.0/e if 1.0/e > 0 else 0.0 for e in Du])
    d_scale = np.linalg.norm(d_mask)
    d_scale = np.max(d_mask)
    d_scale = 1.0
    print("d_scale")
    print(d_scale)
    RRip = U.dot(np.diag(d_mask)).dot(U.T) * (1.0/d_scale)





    #RRip,rank = scipy.linalg.pinvh(R.dot(Mi).dot(R.T), cond=0.0, return_rank=True)
    #RRip = np.linalg.inv(RR)
    #print('RRip rank')
    #print(rank)

    RRi = scipy.linalg.pinvh(RR)
    RRn = scipy.linalg.pinvh(R.dot(R.T))
    c = RRip.dot(R.dot(p))
    cq = Ci.dot(R.dot(p))
    #print(np.linalg.norm( R.T.dot(RRi).dot(r), axis=0) )
    #print(r[1])
    #wfwe
    #print(z)
    e = 1


    w = U.T.dot(z)

    B = np.hstack( [ R, -np.eye((L)*3)])
    print(B)
    x = p.copy()
    for i in range(maxiter):
        #print("inner iter %d" % i )
        z0 = z.copy()
        w0 = w.copy()
        #RRi(z+u) = RRiRtp
        # solve for update
        #y = np.linalg.solve(RR+np.eye(L*3)*3, z-R.dot(p))
        #S = np.linalg.inv(RR-np.eye(L*3)*10)
        #S = (RR)
        #y = S.dot(z)-c

        g_z =  2*RRip.dot(z) - 2*RRip.dot(R.dot(p))
        g_w = 2*Du.dot(w) - 2*Du.dot(U.dot(R).dot(p))


        #g_q = (2*q - 2*cq)
        #print(g_q)

        #g_z = 2*RR.dot(z)-2*R.dot(p)
        #g_z =  .5*RR.dot(g)

        #print(g)
        #print(g_z)
        #lwkjef

        #dz = np.linalg.solve( 2*(RRi+np.diag(D)), -g_z)
        #dz = (.5*RR+np.diag(D)).dot(-g_z)
        #dznorm = np.linalg.norm(dz)
        #print("dz norm")
        #print(dznorm )

        if g_z.T.dot(g_z) > 0:
            step = float( g_z.T.dot(z-R.dot(p)) / (g_z.T.dot(RRip).dot(g_z)) )
        else:
            step = 1

        #print(step)
        step = (1.0/(i+1))
        #step = step if step < 0.004 else 0.004



        step = 0.2
        #z = z*1.0 - step*g_z * d_scale

        #z = z + t*0.1

        w = w - step*g_w

        #qs = q - (2/(i*1+2))*g_q
        #y = z

        #print("g_q norm")
        #print(np.linalg.norm(g_q))
        #y = z - (2/(i*1+2))* ( g_z.T.dot(g_z) / g_z.T.dot(RRip.dot(g_z)) ) * g_z

        #gznorm =  np.linalg.norm(g_z)
        #y = z -(g_z / gznorm) * (2/(i+2))* min(5.1,gznorm)

        #y = z-g_z
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
        #D[:] = 0

        # project
        #z = U.dot(w)

        x = x - 1.0*(2*x-2*p)

        for k in range(145):
            #print(z)
            for j in range(L):
                zi = z[j*3:(j+1)*3]
                ynorm = np.linalg.norm(zi) * 1.0 #* (1-(1/(i+1)))
                if True: #0.5*np.sqrt(2):
                    #print('projecting '+str(ynorm))
                    z[j*3:(j+1)*3] =  zi  * (1.0/(ynorm)) * (1.0/np.sqrt(2))

                Q[j,j*3:(j+1)*3] = z[j*3:(j+1)*3].T
            #D[ j*3:(j+1)*3] = lamb[j]



            v = np.vstack( [ x, z])
            P = np.eye((L+(L+1))*3)-B.T.dot(np.linalg.inv(B.dot(B.T))).dot(B)
            v2 = P.dot(v)
            x = v2[:(L+1)*3]
            z = v2[(L+1)*3:]

        for k in range(1):
            #print(z)
            for j in range(L):
                zi = z[j*3:(j+1)*3]
                ynorm = np.linalg.norm(zi) * 1.0 #* (1-(1/(i+1)))
                if True: #0.5*np.sqrt(2):
                    #print('projecting '+str(ynorm))
                    z[j*3:(j+1)*3] =  zi  * (1.0/(ynorm)) * (1.0/np.sqrt(2))

                Q[j,j*3:(j+1)*3] = z[j*3:(j+1)*3].T
        #print(p)
        #w = U.T.dot(z)

        #print(np.linalg.pinv(Q.T))
        #print(Q.dot(RR.dot(Q.T)))
        #print(lamb)

        #Si = np.linalg.inv(RRi+np.diag(D))
        #SS = RR
        #g_z = RRi.dot(z) - c + Q.T.dot(lamb)
        #g_lamb = .5*(np.diag(Q.dot(Q.T)).reshape(-1,1) - np.ones((L,1))*.5)
        #print(g_lamb)
        #d_lamb = np.linalg.solve( Q.dot(SS).dot(Q.T), Q.dot(SS).dot(g_z) - g_lamb * 0)
        #print(d_lamb)
        #lamb -= d_lamb
        #lamb *= lamb > 0

        # calc minimal error given z
        if True:
            c2 = RRip.dot(z)-c
            lamb =  -np.linalg.inv(Q.dot(Q.T)).dot(Q).dot(c2) * 1
            g_z = 2*RRip.dot(z) - 2*c + 2*Q.T.dot(lamb)



        #print(Q.dot(RR).dot(Q.T))
        #lamb *= lamb > 0
        #print("best fit lamba")
        #print(lamb)
        #lkwjef
        #for j in range(L):
            #D[ j*3:(j+1)*3] = lamb[j] #*  (lamb[j] >= 0)

        #lkwjef
        #print("g norm after lambda")
        #znorm = np.linalg.norm(z)
        #e = (z.T.dot(-g_z)/(gznorm*znorm))
        #e = np.linalg.norm(g_z)
        e = np.linalg.norm(z-z0)
        #e = np.linalg.norm(w-w0)
        #e = np.linalg.norm(q-q0)
        if False:
            print(e)
        else:
            print(e, end='' )
            print('         ',end='')
            print('\r', end='')
        if (e < 1e-5 or i==maxiter-1 and i!=0 ):

            print("solve_pgd converged at iter %d with" % i)
            print(e)
            #print(z)
            #print(lamb)
            #s = np.linalg.solve(RR, R.dot(p)-z)
            #z = C.dot(q)
            #print(zq)
            #z = U.dot(w)
            s = RRi.dot(R.dot(p)-z)
            #x = p-Mi.dot(R.T.dot(s))
            return x,z,lamb

#    if False:
#        Q[:] = 0
#        D[:] = 0
#        for j in range(L):
#            v = z[j*3:(j+1)*3,0]
#            Q[ j, j*3:(j+1)*3 ] = v*2
#            D[ j*3:(j+1)*3] = lamb[j]
#            c[j] = .5*(v.T.dot(v)-1)

def solve_power( m, pi, maxiter, pre_z = None, pre_lamb = None, pre_L2 = None ):
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


    #print(np.linalg.cholesky(S))
    #print(R1)

    R = np.zeros((L*3,P*3))
    for i in range(L):
        #print(i)
        R[i*3:i*3+3,i*3:i*3+6] = R1

    p = np.zeros([P*3,1])
    p[:] = pi
    z = np.zeros([L*3,1])
    lamb = np.zeros([L,1])

    if not pre_lamb is None:
        lamb = pre_lamb*0

    D = np.zeros([L*3])
    Q= np.zeros([L,L*3])
    Mi = np.zeros((P*3,P*3))

    z = R.dot(p)
    for i in range(L):
        zi = z[i*3:(i+1)*3,0]
        znorm = np.linalg.norm(zi)
        zi /= znorm * np.sqrt(2)

    if not pre_z is None:
        z = pre_z
    #z = np.random.randn(L*3,1)*0

    for i in range(P):
        Mi[i*3:(i+1)*3,i*3:(i+1)*3] = np.eye(3) * ( (1/m[i]) if m[i] > 0.0 else 0.0)

    RR = R.dot(Mi.dot(R.T))

    #d,_ = np.linalg.eigh(RR)
    #print(d)
    #lkwjef



    #RRi = np.linalg.inv(RR)
    #print("RRi=")
    #print(RRi)
    #print("RR=")
    #print(RR)
    if pre_L2 is None:
        L2 = scipy.linalg.cholesky(RR).T
    else:
        L2 = pre_L2

    #print(L2 )
    #c = RRi.dot(R.dot(p))
    #print(z)
    for i in range(maxiter):
        #print("inner iter %d" % i )
        z0 = z.copy()

        # project z
        #for j in range(L):
        #    zi = z[j*3:(j+1)*3]
        #    z[j*3:(j+1)*3] /= np.linalg.norm(zi)
        #    Q[j,j*3:(j+1)*3] = z[j*3:(j+1)*3].T
        #

        #D[ j*3:(j+1)*3] = lamb[j] #if lamb[j] > 0 else 0


        #RRi(z+u) = RRiRtp
        # solve for update
        #y = np.linalg.solve(RR+np.eye(L*3)*3, z-R.dot(p))
        #S = np.linalg.inv(RR-np.eye(L*3)*10)
        #S = (RR)
        #y = S.dot(z)-c
        # (2RRi+D)^-1(-g_z)
        #B-1 = A(BA)-1 = AA-1B-1 = B-1
        #  A(I+DA)-1 A-1 (-z + 2Rp + AQTlamb)
        #  A(I+DA)-1 A-1(-z + Rp + AQTlamb)
        # gz = 2 RR-1(z-Rp) + 2QTlamb

        #g_z = 2*RRi.dot(z) - 2*c + 2*Q.T.dot(lamb)
        #dz = R.dot(p) - RR.dot(Q.T.dot(lamb)) - z
        #g_z = 2*L2-tL2-1z - 2*L2-tL2-1(Rp) + 2*Q.T.dot(lamb)
        # b  = 2L2-1(Rp-z) - L2tQtLamb

        #dz = np.linalg.solve( 2*(RRi+np.diag(D)), -g_z)
        #  L2-1L2(Lt-1L-1+D)-1L2-1L2
        # dz = .5*RR.dot( np.linalg.solve( 1*np.eye(L*3)+np.diag(D).dot(RR), -g_z) )
        #dz = (.5*RR+np.diag(D)).dot(-g_z)
        #print(np.eye(L*3)+np.diag(D).dot(RR))
        b = scipy.linalg.solve( L2, R.dot(p)-z, assume_a='banded' ) - L2.T.dot(Q.T).dot(lamb)
        #print(b)
        dz =  L2.dot( scipy.linalg.solve( np.eye(L*3)+L2.T.dot(np.diag(D).dot(L2)) , b, assume_a='banded'))
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
        lamb_sum = 0
        for j in range(L):
            yi = y[j*3:(j+1)*3]
            zi = z[j*3:(j+1)*3]
            sign = 1.0 if zi.T.dot(yi) >= 0 else -1.0
            ynorm = np.linalg.norm(yi)
            #print(ynorm)
            sign = 1
            if (sign<0):
                print("sign change")

            if ynorm>(np.sqrt(2)/2.0) or True:
                #v = yi *.5 + zi*.5
                z[j*3:(j+1)*3] =  yi  * sign * (1.0/(ynorm)) * (1.0/np.sqrt(2))
                #lamb[j] *= sign * ynorm*np.sqrt(2)

                #lamb[j] -= (1.0/ynorm)-(np.sqrt(2.0))
                #print(lu)

                lamb_sum += lamb[j]
                #lamb[j] = sign*(ynorm*np.sqrt(2)-1.0)


            else:
                z[j*3:(j+1)*3] = yi
                pass
                #lamb[j] = 0.0

            Q[j,j*3:(j+1)*3] = z[j*3:(j+1)*3].T
            D[ j*3:(j+1)*3] = lamb[j] #if lamb[j] > 0 else 0

        #z += dz
        lamb *=0

        #D = np.eye(L*3)*lamb_sum / (L*3)
        #print(np.linalg.pinv(Q.T))
        #print(Q.dot(RR.dot(Q.T)))
        #print(lamb)

        #Si = np.linalg.inv(RRi+np.diag(D))
        SS = RR
        #SS = np.diag(np.diag(RR))
        if False:
            g_z = RRi.dot(z) - c + Q.T.dot(lamb)
            g_lamb = .5*(np.diag(Q.dot(Q.T)).reshape(-1,1) - np.ones((L,1))*.5)
            #print(g_lamb)
            #g_lamb*=0
            d_lamb = np.linalg.solve( Q.dot(SS).dot(Q.T), Q.dot(SS).dot(g_z) - g_lamb * 1)
        # (Q SS QT)-1( Q SS ( SS-1z - SS-1Rp + QTlamb ) - g_lamb)
        # (Q SS QT)-1( Qz - QRp + QSS-1QTlamb ) - g_lamb)
        # (Q SS QT)-1( Q(z-Rp) + lamb - g_lamb = ( lamb_new - lamb)
        # lamb = Q SS QT -1 Q(z-Rp)
        # lamb = (Q LLt Qt) -1 Q(z-Rp)
        #print(Q.dot(SS).dot(g_z) - g_lamb * 1)

        #print( Q.T.dot( np.linalg.inv(Q.dot(SS).dot(Q.T)).dot(Q) ) )
        #print(Q.dot(z))
        #print(R.T.dot(Q.T))
        #d_z = -SS.dot(g_z) - SS.dot(Q.T.dot(d_lamb))
        #z -= d_z
        #lamb -= d_lamb
        lamb = scipy.linalg.solve( Q.dot(RR).dot(Q.T), Q.dot(R.dot(p)-z), assume_a='tridiagonal')
        #print(lamb)
        #lamb *= lamb > 0

        #c2 = RRi.dot(z)-c
        #lamb =  -np.linalg.inv(Q.dot(Q.T)).dot(Q).dot(c2) * 1



        #print(Q.dot(RR).dot(Q.T))
        #lamb *= lamb > 0
        #print("best fit lamba")
        #print(lamb)
        #lkwjef

        lamb_sum = 0
        for j in range(L):
            lamb_sum += lamb[j]


        for j in range(L):
            D[ j*3:(j+1)*3] = abs(lamb[j]) #*  (lamb[j] >= 0)
            #D[ j*3:(j+1)*3] = abs(lamb_sum/L) #*  (lamb[j] >= 0)

            #D[ j*3:(j+1)*3] = lamb[j] *  (lamb[j] >= 0)



        #lkwjef
        #print("g norm after lambda")
        #g_z = 2*RRi.dot(z) - 2*c + 2*Q.T.dot(lamb)
        e = np.linalg.norm(b)**2
        #print(e)
        if ((e < 1e-10 or i==maxiter-1) and i!=0 ):

            print("solve_power converged at iter %d with" % i)
            print(e)
            #print(z)
            #print(lamb)
            s = np.linalg.solve(RR, R.dot(p)-z)
            x = p-Mi.dot(R.T.dot(s))
            return x,z,lamb,i,L2


#    if False:
#        Q[:] = 0
#        D[:] = 0
#        for j in range(L):
#            v = z[j*3:(j+1)*3,0]
#            Q[ j, j*3:(j+1)*3 ] = v*2
#            D[ j*3:(j+1)*3] = lamb[j]
#            c[j] = .5*(v.T.dot(v)-1)


use_pygame = True
if use_pygame:
    import sys, pygame
    pygame.init()

    speed = [2, 2]
    black = 0, 0, 0

    screen = pygame.display.set_mode((2*800,2*600))
    pygame.display.set_caption("My First Pygame Window")
    pygame.event.pump()

N = 128
p = np.zeros((N*3,1))
m = np.zeros((N,1))
pFixed =  np.array([[7.0,6.0,0.0]])
p0 = pFixed.copy()
zigzag = np.array([[1,0,0]])
for i in range(N):
    p[i*3:(i+1)*3,0] = p0
    pFix2 = p0
    noise = 1.0
    delta2 = np.random.randn(1,3) * noise
    zigzag*= -1 * 0
    delta = np.array([[1,1,0]],dtype=np.float32) + zigzag + delta2
    delta /= np.linalg.norm(delta)
    f = 1.0 if i<N-1 else 1.0
    p0 += delta * f * 1.0
    m[i] = 1.0 if i==N/2   else 0.01





for i in range(0):
    print("iter %d"%i)
    p0 = p.copy()


    p0[(N-1)*3:N*3,0] += np.array([1,1,1]) * 10.0




    #p*=2

    print("target p=")
    print(p0)
    r_power = solve_power( m, p0, 1125 )
    r_newton = solve_newton( m, p0, None, 145 )

    print("result=")
    print(np.array( [r_power-r_newton, r_power, r_newton ]).T)
    print(np.linalg.norm(r_power-r_newton))


x0 = p.copy()
x1 = p.copy()
z = None
lamb = None
lamb_newton = None
L2 = None
total_iters = 0;
for i in range(1235):

    dt = 0.5

    v = (x1-x0)/dt
    #print("velocity")
    #print(v)
    x0[:] = x1
    x1 += v*dt

    for j in range(N):
        x1[j*3:(j+1)*3,0] += np.array([1,0,0]) * 0.098 * dt
    #print("targets")
    #print(x1)
    x1[0:3] = pFixed.T # pin
    x1[N*3-3:N*3] = pFix2.T
    xp,z,lamb,used_iters,L2 = solve_power(m, x1, 131, pre_z = z, pre_lamb= lamb, pre_L2 = L2 )
    total_iters += used_iters

    if False:
        y,lamb_newton = solve_newton(m, x1, lamb_newton, 32 )
        l = np.linalg.norm(xp-y)
        print("solution divergence")
        print(l)
        if l>0.1 and False:
            print("x values")
            print( xp)
            #print(lamb)
            #print(xp-y)
    x1[:] = xp

    if use_pygame:
        for i in range(1,N):
            pp0 = 15*xp[(i-1)*3:i*3].flatten() + [55,55,55]
            pp1 = 15*xp[i*3:(i+1)*3].flatten() + [55,55,55]
            #print(pp0)
            #print(pp1)
            pygame.draw.line(screen, (255,255,255), pp0[:2][::-1], pp1[:2][::-1], 2)

        pygame.display.update()
        screen.fill((0,0,0))
    #print("position")
    #print(x1)

    #print("target p=")
    #print(p)
    #time.sleep(1)
    #print(p)
#print(Q.dot(Q.T))
#print(Q.dot(R).dot(R.T).dot(Q.T))
print("total = %d" % total_iters )

#print(scipy.linalg.null_space(R))

#S,V,D = np.linalg.svd(R)

#print(V)
