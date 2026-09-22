<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# ztriu2tril

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Reflect the upper triangular part of a double-precision complex floating-point matrix `A` into the lower triangular part of another matrix `B`.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-ztriu2tril
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var ztriu2tril = require( '@stdlib/blas-ext-base-ztriu2tril' );
```

#### ztriu2tril( order, M, N, k, A, LDA, B, LDB )

Reflects the upper triangular part of a double-precision complex floating-point matrix `A` into the lower triangular part of another matrix `B`.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var B = new Complex128Array( 4 );

ztriu2tril( 'row-major', 2, 2, 0, A, 2, B, 2 );
// B => <Complex128Array>[ 1.0, 2.0, 0.0, 0.0, 3.0, 4.0, 7.0, 8.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **k**: diagonal below which to ignore. A value of `k = 0` refers to the main diagonal and `k > 0` refers to a diagonal above the main diagonal. When `k > 0`, the function reflects only part of the upper triangle, excluding the main diagonal and the first `k-1` super-diagonals.
-   **A**: input matrix.
-   **LDA**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **B**: output matrix.
-   **LDB**: stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`).

Setting the `k` parameter to a value greater than `0` excludes the main diagonal (and, for larger values, additional super-diagonals). For example, to reflect only the elements strictly above the main diagonal,

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var B = new Complex128Array( 4 );

ztriu2tril( 'row-major', 2, 2, 1, A, 2, B, 2 );
// B => <Complex128Array>[ 0.0, 0.0, 0.0, 0.0, 3.0, 4.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments, max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

// Initial arrays...
var A0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
var B0 = new Complex128Array( 5 );

// Create offset views...
var A1 = new Complex128Array( A0.buffer, A0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var B1 = new Complex128Array( B0.buffer, B0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

ztriu2tril( 'row-major', 2, 2, 0, A1, 2, B1, 2 );
// B0 => <Complex128Array>[ 0.0, 0.0, 3.0, 4.0, 0.0, 0.0, 5.0, 6.0, 9.0, 10.0 ]
```

#### ztriu2tril.ndarray( M, N, k, A, sa1, sa2, oa, B, sb1, sb2, ob )

Reflects the upper triangular part of a double-precision complex floating-point matrix `A` into the lower triangular part of another matrix `B` using alternative indexing semantics.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var B = new Complex128Array( 4 );

ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, 1, 0 );
// B => <Complex128Array>[ 1.0, 2.0, 0.0, 0.0, 3.0, 4.0, 7.0, 8.0 ]
```

The function has the following parameters:

-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **k**: diagonal below which to ignore.
-   **A**: input matrix.
-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.
-   **B**: output matrix.
-   **sb1**: stride of the first dimension of `B`.
-   **sb2**: stride of the second dimension of `B`.
-   **ob**: starting index for `B`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, 1, 2 );
// B => <Complex128Array>[ 0.0, 0.0, 0.0, 0.0, 1.0, 2.0, 0.0, 0.0, 3.0, 4.0, 7.0, 8.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Elements outside of the reflected region are left unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable max-len -->

```javascript
var ndarray2array = require( '@stdlib/ndarray-base-to-array' );
var uniform = require( '@stdlib/random-array-discrete-uniform' );
var Complex128Array = require( '@stdlib/array-complex128' );
var numel = require( '@stdlib/ndarray-base-numel' );
var shape2strides = require( '@stdlib/ndarray-base-shape2strides' );
var ztriu2tril = require( '@stdlib/blas-ext-base-ztriu2tril' );

var shape = [ 5, 8 ];
var order = 'row-major';
var strides = shape2strides( shape, order );

var N = numel( shape );

var opts = {
    'dtype': 'float64'
};
var A = new Complex128Array( uniform( N*2, -10, 10, opts ) );
console.log( ndarray2array( A, shape, strides, 0, order ) );

var B = new Complex128Array( uniform( N*2, -10, 10, opts ) );
var shapeB = [ shape[ 1 ], shape[ 0 ] ];
var stridesB = shape2strides( shapeB, order );
console.log( ndarray2array( B, shapeB, stridesB, 0, order ) );

ztriu2tril( order, shape[ 0 ], shape[ 1 ], 0, A, strides[ 0 ], B, stridesB[ 0 ] );
console.log( ndarray2array( B, shapeB, stridesB, 0, order ) );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/ztriu2tril.h"
```

#### stdlib_strided_ztriu2tril( layout, M, N, k, \*A, LDA, \*B, LDB )

Reflects the upper triangular part of a double-precision complex floating-point matrix `A` into the lower triangular part of another matrix `B`.

```c
#include "stdlib/blas/base/shared.h"
#include "stdlib/complex/float64/ctor.h"

const double A[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };
double B[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

stdlib_strided_ztriu2tril( CblasRowMajor, 2, 2, 0, (stdlib_complex128_t *)A, 2, (stdlib_complex128_t *)B, 2 );
```

The function accepts the following arguments:

-   **layout**: `[in] CBLAS_LAYOUT` storage layout.
-   **M**: `[in] CBLAS_INT` number of rows in `A`.
-   **N**: `[in] CBLAS_INT` number of columns in `A`.
-   **k**: `[in] CBLAS_INT` diagonal below which to ignore.
-   **A**: `[in] stdlib_complex128_t*` input matrix.
-   **LDA**: `[in] CBLAS_INT` stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **B**: `[out] stdlib_complex128_t*` output matrix.
-   **LDB**: `[in] CBLAS_INT` stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`).

```c
void stdlib_strided_ztriu2tril( const CBLAS_LAYOUT layout, const CBLAS_INT M, const CBLAS_INT N, const CBLAS_INT k, const stdlib_complex128_t *A, const CBLAS_INT LDA, stdlib_complex128_t *B, const CBLAS_INT LDB );
```

#### stdlib_strided_ztriu2tril_ndarray( M, N, k, \*A, sa1, sa2, oa, \*B, sb1, sb2, ob )

Reflects the upper triangular part of a double-precision complex floating-point matrix `A` into the lower triangular part of another matrix `B` using alternative indexing semantics.

```c
#include "stdlib/complex/float64/ctor.h"

const double A[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };
double B[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

stdlib_strided_ztriu2tril_ndarray( 2, 2, 0, (stdlib_complex128_t *)A, 2, 1, 0, (stdlib_complex128_t *)B, 2, 1, 0 );
```

The function accepts the following arguments:

-   **M**: `[in] CBLAS_INT` number of rows in `A`.
-   **N**: `[in] CBLAS_INT` number of columns in `A`.
-   **k**: `[in] CBLAS_INT` diagonal below which to ignore.
-   **A**: `[in] stdlib_complex128_t*` input matrix.
-   **sa1**: `[in] CBLAS_INT` stride of the first dimension of `A`.
-   **sa2**: `[in] CBLAS_INT` stride of the second dimension of `A`.
-   **oa**: `[in] CBLAS_INT` starting index for `A`.
-   **B**: `[out] stdlib_complex128_t*` output matrix.
-   **sb1**: `[in] CBLAS_INT` stride of the first dimension of `B`.
-   **sb2**: `[in] CBLAS_INT` stride of the second dimension of `B`.
-   **ob**: `[in] CBLAS_INT` starting index for `B`.

```c
void stdlib_strided_ztriu2tril_ndarray( const CBLAS_INT M, const CBLAS_INT N, const CBLAS_INT k, const stdlib_complex128_t *A, const CBLAS_INT strideA1, const CBLAS_INT strideA2, const CBLAS_INT offsetA, stdlib_complex128_t *B, const CBLAS_INT strideB1, const CBLAS_INT strideB2, const CBLAS_INT offsetB );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/ztriu2tril.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdio.h>

int main( void ) {
    // Define a 3x3 input matrix stored in row-major order:
    const double A[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0 };

    // Define a 3x3 output matrix:
    double B[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

    // Specify the number of elements along each dimension of `A`:
    const CBLAS_INT M = 3;
    const CBLAS_INT N = 3;

    // Reflect the upper triangular part of `A` into the lower triangular part of `B`:
    stdlib_strided_ztriu2tril( CblasRowMajor, M, N, 0, (stdlib_complex128_t *)A, N, (stdlib_complex128_t *)B, N );

    // Print the result:
    for ( int i = 0; i < M; i++ ) {
        for ( int j = 0; j < N; j++ ) {
            int idx = ( (i*N) + j ) * 2;
            printf( "B[ %i,%i ] = %lf + %lfi\n", i, j, B[ idx ], B[ idx+1 ] );
        }
    }

    // Reflect the upper triangular part of `A` (above the first super-diagonal) into `B` using alternative indexing semantics:
    stdlib_strided_ztriu2tril_ndarray( M, N, 1, (stdlib_complex128_t *)A, N, 1, 0, (stdlib_complex128_t *)B, N, 1, 0 );

    // Print the result:
    for ( int i = 0; i < M; i++ ) {
        for ( int j = 0; j < N; j++ ) {
            int idx = ( (i*N) + j ) * 2;
            printf( "B[ %i,%i ] = %lf + %lfi\n", i, j, B[ idx ], B[ idx+1 ] );
        }
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="references">

</section>

<!-- /.references -->

<section class="related">

</section>

<!-- /.related -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-ztriu2tril.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-ztriu2tril

[test-image]: https://github.com/stdlib-js/blas-ext-base-ztriu2tril/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-ztriu2tril/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-ztriu2tril/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-ztriu2tril?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-ztriu2tril.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-ztriu2tril/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-ztriu2tril/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-ztriu2tril/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-ztriu2tril/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-ztriu2tril/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-ztriu2tril/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-ztriu2tril/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-ztriu2tril/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-ztriu2tril/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
