"use strict";var j=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var h=j(function(x,g){
var p=require('@stdlib/array-base-resolve-getter/dist'),l=require('@stdlib/array-base-copy/dist');function m(r,e){var c,a,f,o,s,u,i,n,v,t;if(i=r.length,i<1)return[];if(a=p(r),n=a(r,0).length,n<1)return[];for(c=l(e),o=[],v=0;v<i;v++){for(u=a(r,v),f=p(u),s={},t=0;t<n;t++)s[c[t]]=f(u,t);o.push(s)}return o}g.exports=m
});var q=h();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
