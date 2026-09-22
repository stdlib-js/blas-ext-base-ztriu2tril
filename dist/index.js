"use strict";var j=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var R=j(function(er,_){
var K=require('@stdlib/ndarray-base-assert-is-row-major/dist'),V=require('@stdlib/strided-base-reinterpret-complex128/dist'),P=require('@stdlib/math-base-special-fast-max/dist'),Q=require('@stdlib/math-base-special-fast-min/dist');function U(t,r,e,x,g,u,c,a,q,m,f){var v,s,n,o,b,y,h,p,d,w,i,l;if(v=V(x,0),s=V(a,0),n=g*2,o=u*2,b=q*2,y=m*2,h=c*2,p=f*2,K([g,u])){for(l=0;l<t;l++){for(i=P(0,l+e);i<r;i++)d=h+i*o,w=p+i*b,s[w]=v[d],s[w+1]=v[d+1];h+=n,p+=y}return a}for(l=0;l<r;l++){for(i=0;i<=Q(l-e,t-1);i++)d=h+i*n,w=p+i*y,s[w]=v[d],s[w+1]=v[d+1];h+=o,p+=b}return a}_.exports=U
});var S=j(function(ar,O){
var W=require('@stdlib/blas-base-layout-resolve-str/dist'),X=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),F=require('@stdlib/math-base-special-fast-max/dist'),z=require('@stdlib/error-tools-fmtprodmsg/dist'),Y=R();function Z(t,r,e,x,g,u,c,a){var q,m,f,v,s,n,o,b;if(b=W(t),b===null)throw new TypeError(z('nullFx',t));if(q=X(b),q?(n=e,o=r):(n=r,o=e),u<F(1,n))throw new RangeError(z('nullJL',n,u));if(a<F(1,o))throw new RangeError(z('nullGM',o,a));return q?(m=u,f=1,v=a,s=1):(m=1,f=u,v=1,s=a),Y(r,e,x,g,m,f,0,c,v,s,0)}O.exports=Z
});var C=j(function(ir,T){
var $=R();function k(t,r,e,x,g,u,c,a,q,m,f){return $(t,r,e,x,g,u,c,a,q,m,f)}T.exports=k
});var I=j(function(tr,H){
var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=S(),N=C();M(G,"ndarray",N);H.exports=G
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),D=I(),E,J=B(A(__dirname,"./native.js"));L(J)?E=D:E=J;module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
