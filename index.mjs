// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-copy@v0.2.2-esm/index.mjs";function t(t,s){var n,i,o,a,d,f,l,m,h,p;if((l=t.length)<1)return[];if((m=(i=r(t))(t,0).length)<1)return[];for(n=e(s),a=[],h=0;h<l;h++){for(f=i(t,h),o=r(f),d={},p=0;p<m;p++)d[n[p]]=o(f,p);a.push(d)}return a}export{t as default};
//# sourceMappingURL=index.mjs.map
