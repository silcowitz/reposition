
#include <math.h>

/* Solve A x = b for symmetric tridiagonal SPD A
 *
 * A: symmetric tridiag (canonical storage)
 *   Ad[0..n-1]
 *   Al[0]=0, Al[i]=A[i,i-1]
 *
 * b: right-hand side
 * x: solution (can alias b)
 *
 * Returns 0 on success, -1 if A is not SPD.
 */
int sym_tridiag_solve(
    int n,
    const double *Ad,
    const double *Al,
    const double *b,
    double *x
) {
    if (n <= 0) return -1;

    /* factor A = L L^T */
    double Ld[n];
    double Ll[n];

    if (Ad[0] <= 0.0) return -1;
    Ld[0] = sqrt(Ad[0]);
    Ll[0] = 0.0;

    for (int i = 1; i < n; i++) {
        Ll[i] = Al[i] / Ld[i-1];
        double t = Ad[i] - Ll[i]*Ll[i];
        if (t <= 0.0) return -1;
        Ld[i] = sqrt(t);
    }

    /* forward solve: L y = b */
    x[0] = b[0] / Ld[0];
    for (int i = 1; i < n; i++) {
        x[i] = (b[i] - Ll[i]*x[i-1]) / Ld[i];
    }

    /* backward solve: L^T x = y */
    x[n-1] = x[n-1] / Ld[n-1];
    for (int i = n - 2; i >= 0; i--) {
        x[i] = (x[i] - Ll[i+1]*x[i+1]) / Ld[i];
    }

    return 0;
}


/* Solve A X = B for symmetric tridiagonal A (block-identity)
 *
 * A: canonical symmetric tridiag
 *   Ad[0..n-1]
 *   Al[0]=0, Al[i]=A[i,i-1]
 *
 * B: RHS, length n*bs
 * X: solution, length n*bs (may alias B)
 *
 * Uses on-the-fly LDL^T (no stored factorization)
 *
 * Returns 0 on success, -1 on zero/invalid pivot.
 */
int sym_tridiag_block_solve_direct(
    int n,
    int bs,
    const double *Ad,
    const double *Al,
    const double *B,
    double *X
) {
    /* workspace for modified diagonal */
    double D[n];

    /* ---- forward sweep: build D and solve L Y = B ---- */

    /* i = 0 */
    D[0] = Ad[0];
    if (D[0] == 0.0) return -1;

    for (int k = 0; k < bs; k++)
        X[k] = B[k];

    /* i = 1..n-1 */
    for (int i = 1; i < n; i++) {
        double ell = Al[i] / D[i - 1];
        D[i] = Ad[i] - ell * ell * D[i - 1];
        if (D[i] == 0.0) return -1;

        int off  = i * bs;
        int offm = (i - 1) * bs;

        for (int k = 0; k < bs; k++)
            X[off + k] = B[off + k] - ell * X[offm + k];
    }

    /* ---- diagonal solve: Z = D^{-1} Y ---- */
    for (int i = 0; i < n; i++) {
        double inv = 1.0 / D[i];
        int off = i * bs;
        for (int k = 0; k < bs; k++)
            X[off + k] *= inv;
    }

    /* ---- backward sweep: L^T X = Z ---- */
    for (int i = n - 2; i >= 0; i--) {
        double ell = Al[i + 1] / D[i];
        int off  = i * bs;
        int offp = (i + 1) * bs;

        for (int k = 0; k < bs; k++)
            X[off + k] -= ell * X[offp + k];
    }

    return 0;
}




void block_lower_tridiag_solve(
    int n, int bs,
    const double *a,
    const double *b,
    double *d
) {
    int i, k;

    for (k = 0; k < bs; k++)
        d[k] /= b[0];

    for (i = 1; i < n; i++) {
        double inv = 1.0 / b[i];
        for (k = 0; k < bs; k++) {
            d[i*bs + k] =
                (d[i*bs + k] - a[i] * d[(i-1)*bs + k]) * inv;
        }
    }
}


void block_upper_tridiag_solve(
    int n, int bs,
    const double *b,
    const double *c,
    double *d
) {
    int i, k;

    for (k = 0; k < bs; k++)
        d[(n-1)*bs + k] /= b[n-1];

    for (i = n-2; i >= 0; i--) {
        double inv = 1.0 / b[i];
        for (k = 0; k < bs; k++) {
            d[i*bs + k] =
                (d[i*bs + k] - c[i] * d[(i+1)*bs + k]) * inv;
        }
    }
}


/* Solve L x = b
 *
 * L: lower bidiagonal
 *   Ld[0..n-1]  diagonal
 *   Ll[0]=0, Ll[i]=L[i,i-1]
 *
 * b: RHS
 * x: solution (may alias b)
 */
void lower_bidiag_solve(
    int n,
    const double *Ld,
    const double *Ll,
    const double *b,
    double *x
) {
    x[0] = b[0] / Ld[0];

    for (int i = 1; i < n; i++) {
        x[i] = (b[i] - Ll[i] * x[i-1]) / Ld[i];
    }
}


/* Solve L X = B
 *
 * L: lower bidiagonal with block-identity structure
 *   Ld[i] * I_bs on diagonal
 *   Ll[i] * I_bs on subdiagonal (Ll[0]=0)
 *
 * B, X: vectors of length n*bs
 */
void lower_bidiag_block_solve(
    int n,
    int bs,
    const double *Ld,
    const double *Ll,
    const double *B,
    double *X
) {
    /* first block */
    double inv = 1.0 / Ld[0];
    for (int k = 0; k < bs; k++)
        X[k] = B[k] * inv;

    /* remaining blocks */
    for (int i = 1; i < n; i++) {
        inv = 1.0 / Ld[i];
        int off  = i * bs;
        int offm = (i - 1) * bs;

        for (int k = 0; k < bs; k++) {
            X[off + k] =
                (B[off + k] - Ll[i] * X[offm + k]) * inv;
        }
    }
}

/* Solve L^T X = B */
void upper_bidiag_block_solve(
    int n,
    int bs,
    const double *Ld,
    const double *Ll,
    const double *B,
    double *X
) {
    /* last block */
    double inv = 1.0 / Ld[n - 1];
    int off = (n - 1) * bs;
    for (int k = 0; k < bs; k++)
        X[off + k] = B[off + k] * inv;

    /* remaining blocks */
    for (int i = n - 2; i >= 0; i--) {
        inv = 1.0 / Ld[i];
        off  = i * bs;
        int offp = (i + 1) * bs;

        for (int k = 0; k < bs; k++) {
            X[off + k] =
                (B[off + k] - Ll[i + 1] * X[offp + k]) * inv;
        }
    }
}

/* y = L x
 *
 * L: lower bidiagonal, block-identity
 * x,y: vectors of length n*bs
 */
void lower_bidiag_block_mul(
    int n,
    int bs,
    const double *Ld,
    const double *Ll,
    const double *x,
    double *y
) {
    /* first block */
    for (int k = 0; k < bs; k++)
        y[k] = Ld[0] * x[k];

    /* remaining blocks */
    for (int i = 1; i < n; i++) {
        int off  = i * bs;
        int offm = (i - 1) * bs;

        for (int k = 0; k < bs; k++) {
            y[off + k] =
                Ld[i] * x[off + k]
              + Ll[i] * x[offm + k];
        }
    }
}

/* y = L^T x
 *
 * L: lower bidiagonal, block-identity
 */
void upper_bidiag_block_mul(
    int n,
    int bs,
    const double *Ld,
    const double *Ll,
    const double *x,
    double *y
) {
    /* last block */
    int off = (n - 1) * bs;
    for (int k = 0; k < bs; k++)
        y[off + k] = Ld[n - 1] * x[off + k];

    /* remaining blocks */
    for (int i = n - 2; i >= 0; i--) {
        off = i * bs;
        int offp = (i + 1) * bs;

        for (int k = 0; k < bs; k++) {
            y[off + k] =
                Ld[i] * x[off + k]
              + Ll[i + 1] * x[offp + k];
        }
    }
}


void block_lower_tridiag_mv(
    int n, int bs,
    const double *a,
    const double *b,
    const double *x,
    double *y
) {
    int i, k;

    for (k = 0; k < bs; k++)
        y[k] = b[0] * x[k];

    for (i = 1; i < n; i++) {
        for (k = 0; k < bs; k++) {
            y[i*bs + k] =
                b[i] * x[i*bs + k]
              + a[i] * x[(i-1)*bs + k];
        }
    }
}



void block_upper_tridiag_mv(
    int n, int bs,
    const double *b,
    const double *c,
    const double *x,
    double *y
) {
    int i, k;

    for (k = 0; k < bs; k++)
        y[(n-1)*bs + k] = b[n-1] * x[(n-1)*bs + k];

    for (i = 0; i < n-1; i++) {
        for (k = 0; k < bs; k++) {
            y[i*bs + k] =
                b[i] * x[i*bs + k]
              + c[i] * x[(i+1)*bs + k];
        }
    }
}


void tridiag_LU_to_tridiag(
    int n,
    const double *aL,
    const double *bL,
    const double *bU,
    const double *cU,
    double *a,
    double *b,
    double *c
) {
    int i;

    for (i = 0; i < n; i++) {
        b[i] = bL[i] * bU[i];
        if (i > 0) {
            a[i] = aL[i] * bU[i-1];
            b[i] += aL[i] * cU[i-1];
        }
        if (i < n-1)
            c[i] = bL[i] * cU[i];
    }
}


/* Computes T = U * L, where
 * U is upper tridiagonal (bU, cU)
 * L is lower tridiagonal (aL, bL)
 *
 * Result T is tridiagonal (a, b, c)
 */
void tridiag_UL_to_tridiag(
    int n,
    const double *bU, const double *cU,
    const double *aL, const double *bL,
    double *a, double *b, double *c
) {
    int i;

    for (i = 0; i < n; i++) {
        b[i] = bU[i] * bL[i];

        if (i > 0)
            a[i] = bU[i] * aL[i];

        if (i < n - 1) {
            b[i] += cU[i] * aL[i + 1];
            c[i] = cU[i] * bL[i + 1];
        }
    }
}

#include <math.h>

void normalize_q(int n, int bs, double *q)
{
    int i, k;
    for (i = 0; i < n; i++) {
        double norm = 0.0;
        for (k = 0; k < bs; k++) {
            double v = q[i*bs + k];
            norm += v * v;
        }
        norm = sqrt(norm);

        if (norm > 0.0) {
            double inv = 1.0 / norm;
            for (k = 0; k < bs; k++)
                q[i*bs + k] *= inv;
        }
    }
}

static double dot(int bs, const double *x, const double *y)
{
    double s = 0.0;
    for (int k = 0; k < bs; k++) s += x[k] * y[k];
    return s;
}

void q_dots(int n, int bs,
                  const double *q,
                  double *v,      /* size n * bs */
                  double *out)      /* size n */
{
    for (int i = 0; i < n; i++) {
        out[i] = dot(bs, &q[i*bs], &v[i*bs]);
    }
}

void q_products(int n, int bs,
                  const double *q,
                  double *v,      /* size n  */
                  double *out)      /* size n * bs */
{
    for (int i = 0; i < n; i++) {
        int idx = i*3;
        out[idx] = q[idx] * v[i];
        out[idx+1] = q[idx+1] * v[i];
        out[idx+2] = q[idx+2] * v[i];
    }
}


/* Build M = Q^T A Q, where
 * - A is scalar tridiag on blocks (Adiag, Asub) with blocks = scalar * I_bs
 * - Q has one block vector q_i per block i (stored row-major in q)
 *
 * Outputs:
 * - Mdiag[0..n-1]
 * - Msub[1..n-1] (Msub[i] = M[i,i-1]); symmetric => Msup[i-1] = Msub[i]
 */
void form_QT_A_Q_tridiag(
    int n, int bs,
    const double *Asub,   /* size n, use indices 1..n-1 */
    const double *Adiag,  /* size n */
    const double *q,      /* size n*bs */
    double *Msub,         /* size n, use 1..n-1 */
    double *Mdiag         /* size n */
) {
    /* diagonal */
    for (int i = 0; i < n; i++) {
        double s0 = dot(bs, &q[i*bs], &q[i*bs]);   /* q_i · q_i */
        Mdiag[i] = Adiag[i] * s0;
    }

    /* sub/super */
    for (int i = 1; i < n; i++) {
        double s1 = dot(bs, &q[i*bs], &q[(i-1)*bs]); /* q_i · q_{i-1} */
        Msub[i] = Asub[i] * s1;
    }
}





#include <math.h>

/* Compute L such that A = L L^T
 *
 * A: symmetric tridiagonal (canonical storage)
 *   Ad[0..n-1]
 *   Al[0]=0, Al[i]=A[i,i-1]
 *
 * L: lower bidiagonal
 *   Ld[0..n-1]
 *   Ll[0]=0, Ll[i]=L[i,i-1]
 *
 * Returns 0 on success, -1 if A is not SPD.
 */
int cholesky(
    int n,
    const double *Ad,
    const double *Al,
    double *Ld,
    double *Ll
) {
    if (n <= 0) return -1;
    if (Ad[0] <= 0.0) return -1;

    Ll[0] = 0.0;
    Ld[0] = sqrt(Ad[0]);

    for (int i = 1; i < n; i++) {
        Ll[i] = Al[i] / Ld[i-1];

        double t = Ad[i] - Ll[i]*Ll[i];
        if (t <= 0.0) return -1;

        Ld[i] = sqrt(t);
    }
    return 0;
}



/* A = L D L^T
 * L: lower bidiagonal with diag dL[0..n-1], subdiag ell[1..n-1] (ell[0] unused)
 * D: diagonal d[0..n-1]
 *
 * Output: symmetric tridiag in canonical form:
 *   Adiag[0..n-1]
 *   Asub[0]=0, Asub[i]=A[i,i-1] for i=1..n-1
 */
void D1_LD2LT(
    int n,
    const double *Ld,
    const double *Ll,
    const double *D1,
    const double *D2,
    double *Ad,
    double *Al
) {
    Al[0]  = 0.0;
    Ad[0] = D1[0] + Ld[0]*Ld[0] * D2[0];

    for (int i = 1; i < n; i++) {
        Al[i]  = Ld[i-1] * Ll[i] * D2[i-1];
        Ad[i] = D1[i] + Ld[i]*Ld[i] * D2[i] + Ll[i]*Ll[i] * D2[i-1];
    }
}

/* A = D1 + L^T D2 L */
void D1_LTD2L(
    int n,
    const double *Ld,   /* L diagonal */
    const double *Ll,   /* L subdiag, Ll[0]=0 */
    const double *D1,
    const double *D2,
    double *Ad,         /* A diagonal */
    double *Al          /* A subdiag, Al[0]=0 */
) {
    Al[0] = 0.0;

    for (int i = 0; i < n - 1; i++) {
        Al[i+1] = Ld[i+1] * Ll[i+1] * D2[i];
        Ad[i]   = D1[i]
                + Ld[i]*Ld[i] * D2[i]
                + Ll[i+1]*Ll[i+1] * D2[i+1];
    }

    /* last diagonal */
    Ad[n-1] = D1[n-1] + Ld[n-1]*Ld[n-1] * D2[n-1];
}




#include <stdio.h>

void trace( int n, double *p, const char * name ){
    if(0)
    for (int i = 0; i < n; i++) {
        printf("%s[%d] = %1.2f\n", name, i, p[i]);
    }
}

void set( int n, double *p, double v) {
    for (int i = 0; i < n; i++) {
        p[i] = v;
    }
}

void sum( int n, double *p, double *p2, double *v) {
    for (int i = 0; i < n; i++) {
        v[i] = p[i] + p2[i];
    }
}

void sub( int n, double *p, double *p2, double *v) {
    for (int i = 0; i < n; i++) {
        v[i] = p[i] - p2[i];
    }
}

void max( int n, double *p, double m, double *v) {
    for (int i = 0; i < n; i++) {
        v[i] = p[i] > m ? p[i] : m;
    }
}

void squared_norm( int n, double *p, double *v) {
    *v =0;
    for (int i = 0; i < n; i++) {
        *v += p[i]*p[i];
    }

}

int main() {
    const int N = 1024*8;
    const int M = N-1;
    double zero[N*3] = {};
    double ones[N*3]; set(N*3, ones, 1);
    double Rd[N]; set(N, Rd, -1); Rd[N-1] = 0;
    double Ru[N]; set(N, Ru, 1); Ru[0] = 1;

    double Md[N]; set(N, Md, 2);

    double p[N*3] = {};
    for (int i = 0; i < N; ++i) {
        p[i * 3] = i;
        p[i * 3+1] = 0;
        p[i * 3+2] = 0;
    }
    p[0] -= 12.1;
    p[1] -= 3.1;

    p[(N-1)*3] += 12.1;
    p[(N-1)*3+1] += 3.1;

    double z[N*3] = {};


    double Ad[N] = {};
    double Au[N] = {};

    D1_LTD2L(N, Rd, Ru, zero, Md, Ad, Au );
    trace(M, Ad, "A diag" );
    trace(M, Au, "A upper" );

    double Ld[M] = {};
    double Ll[M] = {};

    cholesky(M, Ad, Au, Ld, Ll );

    trace(M, Ld, "L diag" );
    trace(M, Ll, "L lower" );


    //D1_LD2LT(N-1, c1, c2, zero, m, out1, out2 );
    //trace(N-1, out1, "out1" );
    //trace(N-1, out2, "out2" );


    //z = Rp
    double Rp[N*3] = {};
    block_upper_tridiag_mv( N, 3, Rd, Ru, p, Rp);
    sum( N*3, Rp, zero, z); // z=Rp
    trace(N*3, p, "p");
    //trace(M*3, z, "z");

    // iters
    for (int j=0; j<5; j++)
    {
        // normalize
        normalize_q( M, 3, z);

        trace(M*3, z, "z");

        // solve lambda
        double lamb[M] = {};
        {
            double Sd[M] = {};
            double Su[M] = {};

            // Q L LT QT
            form_QT_A_Q_tridiag( M, 3, Au, Ad, z, Su, Sd );

            trace(M, Sd, "Sd");
            trace(M, Su, "Su");

            double rhs[M] = {};

            // Q(Rp-z)
            q_dots(M, 3, z, Rp, rhs);
            sub(M, rhs, ones, rhs);
            trace( M, rhs, "rhs");
            sym_tridiag_solve(M, Sd, Su, rhs, lamb);

            trace( M, lamb, "lamb");

        }

        //bz
        double bz[M*3];
        {
            double rhs[M*3] = {};
            sub(M*3, Rp, z, rhs);
            trace( M*3, rhs, "rhs");
            lower_bidiag_block_solve(M, 3, Ld, Ll, rhs, bz);
            trace( M*3, bz, "bz");
        }

        //bl
       double bl[M*3] = {};
       {
            double tmp[M*3] = {};
            q_products( M, 3, z, lamb, tmp);
            upper_bidiag_block_mul( M, 3, Ld, Ll, tmp, bl);
            trace( M*3, bl, "bl");
       }

       //dz step
       double dz[M*3] = {};
       {
            double rhs[M*3];
            double tmp[M*3];
            sub( M*3, bz, bl, rhs);
            trace( M*3, rhs, "rhs");
            double e;
            squared_norm(M*3, rhs, &e);
            printf("e=%f\n", e);

            double Sd[M] = {};
            double Su[M] = {};
            //dz =  L2.dot( scipy.linalg.solve( 1*np.eye(L*3)+L2.T.dot(np.diag(D).dot(L2)) , bz-bl, assume_a="banded"))
            //
            max( M, lamb, 0, lamb);
            D1_LTD2L(M, Ld, Ll, ones, lamb, Sd, Su );
            sym_tridiag_block_solve_direct(M, 3, Sd, Su, rhs, tmp);
            lower_bidiag_block_mul( M, 3, Ld, Ll, tmp, dz);
            trace( M*3, dz, "dz");
       }

       // step
       sum( M*3, z, dz, z);



    }


}

