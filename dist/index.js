"use strict";var j=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(v){throw (r=0, v)}};};var h=j(function(x,g){
var p=require('@stdlib/array-base-resolve-getter/dist'),l=require('@stdlib/array-base-copy/dist');function m(e,r){var v,o,f,s,u,i,n,c,a,t;if(n=e.length,n<1)return[];if(o=p(e),c=o(e,0).length,c<1)return[];for(v=l(r),s=[],a=0;a<n;a++){for(i=o(e,a),f=p(i),u={},t=0;t<c;t++)u[v[t]]=f(i,t);s.push(u)}return s}g.exports=m
});var q=h();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
