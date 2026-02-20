#include "solve.h"

#include <math.h>
#include <stdio.h>
#include <time.h>

static inline double wtime(void) {
    struct timespec ts;
    clock_gettime(CLOCK_MONOTONIC, &ts);
    return ts.tv_sec + ts.tv_nsec * 1e-6;
}

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
int sym_tridiag_solve(int n, const scalar* Ad, const scalar* Al,
                      const scalar* b, scalar* x) {
    if (n <= 0) return -1;

    /* factor A = L L^T */
    scalar Ld[n];
    scalar Ll[n];

    if (Ad[0] <= 0.0) return -1;
    Ld[0] = sqrt(Ad[0]);
    Ll[0] = 0.0;

    for (int i = 1; i < n; i++) {
        Ll[i] = Al[i] / Ld[i - 1];
        scalar t = Ad[i] - Ll[i] * Ll[i];
        if (t <= 0.0) return -1;
        Ld[i] = sqrt(t);
    }

    /* forward solve: L y = b */
    x[0] = b[0] / Ld[0];
    for (int i = 1; i < n; i++) {
        x[i] = (b[i] - Ll[i] * x[i - 1]) / Ld[i];
    }

    /* backward solve: L^T x = y */
    x[n - 1] = x[n - 1] / Ld[n - 1];
    for (int i = n - 2; i >= 0; i--) {
        x[i] = (x[i] - Ll[i + 1] * x[i + 1]) / Ld[i];
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
int sym_tridiag_block_solve_direct(int n, int bs, const scalar* Ad,
                                   const scalar* Al, const scalar* B,
                                   scalar* X) {
    const scalar eps = 1.0e-7;
    /* workspace for modified diagonal */
    scalar D[n];

    /* ---- forward sweep: build D and solve L Y = B ---- */

    /* i = 0 */
    D[0] = Ad[0];
    if (D[0] * D[0] < eps) return -1;

    for (int k = 0; k < bs; k++) X[k] = B[k];

    /* i = 1..n-1 */
    for (int i = 1; i < n; i++) {
        scalar ell = Al[i] / D[i - 1];
        D[i] = Ad[i] - ell * ell * D[i - 1];
        if (D[i] * D[i] < eps) return -1;

        int off = i * bs;
        int offm = (i - 1) * bs;

        for (int k = 0; k < bs; k++)
            X[off + k] = B[off + k] - ell * X[offm + k];
    }

    /* ---- diagonal solve: Z = D^{-1} Y ---- */
    for (int i = 0; i < n; i++) {
        scalar inv = 1.0 / D[i];
        int off = i * bs;
        for (int k = 0; k < bs; k++) X[off + k] *= inv;
    }

    /* ---- backward sweep: L^T X = Z ---- */
    for (int i = n - 2; i >= 0; i--) {
        scalar ell = Al[i + 1] / D[i];
        int off = i * bs;
        int offp = (i + 1) * bs;

        for (int k = 0; k < bs; k++) X[off + k] -= ell * X[offp + k];
    }

    return 0;
}

/* Solve L X = B
 *
 * L: lower bidiagonal with block-identity structure
 *   Ld[i] * I_bs on diagonal
 *   Ll[i] * I_bs on subdiagonal (Ll[0]=0)
 *
 * B, X: vectors of length n*bs
 */
void lower_bidiag_block_solve(int n, int bs, const scalar* Ld, const scalar* Ll,
                              const scalar* B, scalar* X) {
    /* first block */
    scalar inv = 1.0 / Ld[0];
    for (int k = 0; k < bs; k++) X[k] = B[k] * inv;

    /* remaining blocks */
    for (int i = 1; i < n; i++) {
        inv = 1.0 / Ld[i];
        int off = i * bs;
        int offm = (i - 1) * bs;

        for (int k = 0; k < bs; k++) {
            X[off + k] = (B[off + k] - Ll[i] * X[offm + k]) * inv;
        }
    }
}

/* Solve L^T X = B */
void upper_bidiag_block_solve(int n, int bs, const scalar* Ld, const scalar* Ll,
                              const scalar* B, scalar* X) {
    /* last block */
    scalar inv = 1.0 / Ld[n - 1];
    int off = (n - 1) * bs;
    for (int k = 0; k < bs; k++) X[off + k] = B[off + k] * inv;

    /* remaining blocks */
    for (int i = n - 2; i >= 0; i--) {
        inv = 1.0 / Ld[i];
        off = i * bs;
        int offp = (i + 1) * bs;

        for (int k = 0; k < bs; k++) {
            X[off + k] = (B[off + k] - Ll[i + 1] * X[offp + k]) * inv;
        }
    }
}

/* y = L x
 *
 * L: lower bidiagonal, block-identity
 * x,y: vectors of length n*bs
 */
void lower_bidiag_block_mul(int n, int bs, const scalar* Ld, const scalar* Ll,
                            const scalar* x, scalar* y) {
    /* first block */
    for (int k = 0; k < bs; k++) y[k] = Ld[0] * x[k];

    /* remaining blocks */
    for (int i = 1; i < n; i++) {
        int off = i * bs;
        int offm = (i - 1) * bs;

        for (int k = 0; k < bs; k++) {
            y[off + k] = Ld[i] * x[off + k] + Ll[i] * x[offm + k];
        }
    }
}

/* y = L^T x
 *
 * L: lower bidiagonal, block-identity
 */
void upper_bidiag_block_mul(int n, int bs, const scalar* Ld, const scalar* Ll,
                            const scalar* x, scalar* y) {
    /* last block */
    int off = (n - 1) * bs;
    for (int k = 0; k < bs; k++) y[off + k] = Ld[n - 1] * x[off + k];

    /* remaining blocks */
    for (int i = n - 2; i >= 0; i--) {
        off = i * bs;
        int offp = (i + 1) * bs;

        for (int k = 0; k < bs; k++) {
            y[off + k] = Ld[i] * x[off + k] + Ll[i + 1] * x[offp + k];
        }
    }
}

void normalize_q(int n, int bs, scalar* q) {
    int i, k;
    for (i = 0; i < n; i++) {
        scalar norm = 0.0;
        for (k = 0; k < bs; k++) {
            scalar v = q[i * bs + k];
            norm += v * v;
        }
        norm = sqrt(norm);

        if (norm > 0.0) {
            scalar inv = 1.0 / norm;
            for (k = 0; k < bs; k++) q[i * bs + k] *= inv;
        }
    }
}

static scalar dot(int bs, const scalar* x, const scalar* y) {
    scalar s = 0.0;
    for (int k = 0; k < bs; k++) s += x[k] * y[k];
    return s;
}

void q_dots(int n, int bs, const scalar* q, scalar* v, /* size n * bs */
            scalar* out)                               /* size n */
{
    for (int i = 0; i < n; i++) {
        out[i] = dot(bs, &q[i * bs], &v[i * bs]);
    }
}

void q_products(int n, int bs, const scalar* q, scalar* v, /* size n  */
                scalar* out)                               /* size n * bs */
{
    for (int i = 0; i < n; i++) {
        int idx = i * 3;
        out[idx] = q[idx] * v[i];
        out[idx + 1] = q[idx + 1] * v[i];
        out[idx + 2] = q[idx + 2] * v[i];
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
void form_QT_A_Q_tridiag(int n, int bs,
                         const scalar* Asub,  /* size n, use indices 1..n-1 */
                         const scalar* Adiag, /* size n */
                         const scalar* q,     /* size n*bs */
                         scalar* Msub,        /* size n, use 1..n-1 */
                         scalar* Mdiag        /* size n */
) {
    /* diagonal */
    for (int i = 0; i < n; i++) {
        scalar s0 = dot(bs, &q[i * bs], &q[i * bs]); /* q_i · q_i */
        Mdiag[i] = Adiag[i] * s0;
    }

    /* sub/super */
    for (int i = 1; i < n; i++) {
        scalar s1 = dot(bs, &q[i * bs], &q[(i - 1) * bs]); /* q_i · q_{i-1} */
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
int cholesky(int n, const scalar* Ad, const scalar* Al, scalar* Ld,
             scalar* Ll) {
    if (n <= 0) return -1;
    if (Ad[0] <= 0.0) return -1;

    Ll[0] = 0.0;
    Ld[0] = sqrt(Ad[0]);

    for (int i = 1; i < n; i++) {
        Ll[i] = Al[i] / Ld[i - 1];

        scalar t = Ad[i] - Ll[i] * Ll[i];
        if (t <= 0.0) return -1;

        Ld[i] = sqrt(t);
    }
    return 0;
}

void D1_LTD2L_2(int n, const scalar* Ld, const scalar* Ll, const scalar* D1,
                const scalar* D2, scalar* Ad, scalar* Al) {
    /* first row */
    Al[0] = 0;

    if (n == 0) return;

    /* diagonal i = 0 */
    Ad[0] = D1[0] + D2[0] * Ld[0] * Ld[0];

    if (n > 1) {
        Ad[0] += D2[1] * Ll[1] * Ll[1];
    }

    /* rows 1..n-1 */
    for (int i = 1; i < n; i++) {
        /* subdiagonal */
        // Al[i] = D2[i-1] * Ld[i-1] * Ll[i];
        Al[i] = D2[i] * Ld[i] * Ll[i];
        /* diagonal */
        Ad[i] = D1[i] + D2[i] * Ld[i] * Ld[i];

        if (i < n - 1) {
            Ad[i] += D2[i + 1] * Ll[i + 1] * Ll[i + 1];
        }
    }
}

void trace(int n, const scalar* p, const char* name) {
    if (0)
        for (int i = n - 5; i < n; i++) {
            printf("%s[%d] = %1.6f\n", name, i, p[i]);
        }
}

void set(int n, scalar* p, const scalar v) {
    for (int i = 0; i < n; i++) {
        p[i] = v;
    }
}

void sum(int n, const scalar* p, const scalar* p2, scalar* v) {
    for (int i = 0; i < n; i++) {
        v[i] = p[i] + p2[i];
    }
}

void sub(int n, const scalar* p, const scalar* p2, scalar* v) {
    for (int i = 0; i < n; i++) {
        v[i] = p[i] - p2[i];
    }
}

void mul(int n, const scalar* p, const scalar* p2, scalar* v) {
    for (int i = 0; i < n; i++) {
        v[i] = p[i] * p2[i];
    }
}

void div(int n,  const scalar* p, const scalar* p2, scalar* v) {
    for (int i = 0; i < n; i++) {
        v[i] = p[i] / p2[i];
    }
}

void max(int n, const scalar* p, const scalar m, scalar* v) {
    for (int i = 0; i < n; i++) {
        v[i] = p[i] > m ? p[i] : m;
    }
}

void squared_norm(int n, const scalar* p, scalar* v) {
    *v = 0;
    for (int i = 0; i < n; i++) {
        *v += p[i] * p[i];
    }
}

scalar solve(const int N, scalar tol, int max_iter, const scalar* p, const scalar* m, scalar* x, scalar* stats) {
    double t0 = wtime();
    const int M = N - 1;
    scalar zero[N * 3] = {};
    scalar ones[N * 3];
    set(N * 3, ones, 1);
    // R
    scalar Rd[N];
    set(N, Rd, -1);
    scalar Ru[N];
    set(N, Ru, 1);
    Ru[0] = 0;

    // M inv
    scalar Md[N];
    div(N, ones, m, Md);
    //Md[0] = 1;
    //Md[N - 1] = 1;
    // trace(N, Md, "Md");

    scalar z[M * 3] = {};
    scalar Ad[N] = {};
    scalar Au[N] = {};

    // A = R M RT
    sum(M, Md, &Md[1], Ad);
    sub(M - 1, zero, &Md[1], &Au[1]);

    // trace(N, Ad, "A diag" );
    // trace(N, Au, "A upper" );

    scalar Ld[M] = {};
    scalar Ll[M] = {};

    int r = cholesky(M, Ad, Au, Ld, Ll);
    //printf("chol = %d\n", r);

    // trace(M, Ld, "L diag" );
    // trace(M, Ll, "L lower" );

    // z = Rp
    scalar Rp[N * 3] = {};
    upper_bidiag_block_mul(N, 3, Rd, Ru, p, Rp);
    // block_upper_tridiag_mv( N, 3, Rd, Ru, x, z); // z=Rx
    sum(M * 3, Rp, zero, z);  // z=Rp
    // trace(M*3, Rp, "Rp");
    // trace(N*3, p, "p");
    // trace(M*3, z, "z");

    // iters
    for (int j = 0;; j++) {
        // normalize
        normalize_q(M, 3, z);

        // trace(M*3, z, "z");

        // solve lambda
        scalar lamb[M] = {};
        {
            scalar Sd[M] = {};
            scalar Su[M] = {};

            // Q L LT QT
            form_QT_A_Q_tridiag(M, 3, Au, Ad, z, Su, Sd);

            // trace(M, Sd, "Sd");
            // trace(M, Su, "Su");

            scalar rhs[M] = {};

            // Q(Rp-z)
            q_dots(M, 3, z, Rp, rhs);
            sub(M, rhs, ones, rhs);
            // trace( M, rhs, "rhs");
            sym_tridiag_solve(M, Sd, Su, rhs, lamb);

            // trace( M, lamb, "lamb");
        }

        // bz
        scalar bz[M * 3];
        {
            scalar rhs[M * 3] = {};
            sub(M * 3, Rp, z, rhs);
            // trace( M*3, rhs, "rhs");
            lower_bidiag_block_solve(M, 3, Ld, Ll, rhs, bz);
            // trace( M*3, bz, "bz");
        }

        // bl
        scalar bl[M * 3] = {};
        {
            scalar tmp[M * 3] = {};
            q_products(M, 3, z, lamb, tmp);
            upper_bidiag_block_mul(M, 3, Ld, Ll, tmp, bl);
            // trace( M*3, bl, "bl");
        }

        // dz step
        scalar dz[M * 3] = {};
        {
            scalar rhs[M * 3];
            scalar tmp[M * 3];
            sub(M * 3, bz, bl, rhs);
            // trace( M*3, rhs, "rhs");
            scalar e;
            squared_norm(M * 3, rhs, &e);
            //printf("e=%f\n", e);

            // exit
            if (e < tol || j >= max_iter ) {
                scalar rhs2[N * 3] = {};
                scalar Ltinvbz_pad[N * 3] = {};
                upper_bidiag_block_solve(M, 3, Ld, Ll, bz, Ltinvbz_pad);
                // trace( N*3, Ltinvbz_pad, "LTinv bz");
                lower_bidiag_block_mul(N, 3, Rd, Ru, Ltinvbz_pad, rhs2);
                // trace( N*3, rhs2, "RT LTinv bz");
                lower_bidiag_block_mul(N, 3, Md, zero, rhs2, rhs2);
                // trace( N*3, rhs2, "M RT LTinv bz");
                sub(N * 3, p, rhs2, x);
                double t1 = wtime();
                stats[0] = t1-t0; // time
                stats[1] = e; // error
                stats[2] = j; // iterations
                //printf("time=%f\n", t1 - t0);
                return e;
            }

            scalar Sd[M] = {};
            scalar Su[M] = {};

            max(M, lamb, 0, lamb);
            // S = I + LT D(lamb) L
            D1_LTD2L_2(M, Ld, Ll, ones, lamb, Sd, Su);
            trace(M, Sd, "Sd");
            trace(M, Su, "Su");
            int r2 = sym_tridiag_block_solve_direct(M, 3, Sd, Su, rhs, tmp);
            // printf("solve = %d\n", r2);
            lower_bidiag_block_mul(M, 3, Ld, Ll, tmp, dz);
            // trace( M*3, dz, "dz");
        }

        // step
        sum(M * 3, z, dz, z);
    }
}

int main() {
    enum { N = 1024 * 16 };
    scalar p[N * 3] = {};
    scalar x[N * 3] = {};
    scalar m[N] = {};
    scalar stats[8] = {};

    for (int i = 0; i < N; ++i) {
        m[i] = 1;
        p[i * 3] = (float)i * 1;
        p[i * 3 + 1] = 0;
        p[i * 3 + 2] = 0;
    }
    p[0] -= 31.1;
    p[1] -= 213.1;
    p[2] -= 1321.1;

    p[(N - 1) * 3] += 12.1;
    // p[(N-1)*3+1] += 3.1;
    solve(N, 1.0e-15, 6,  p, m, x, stats);
}
