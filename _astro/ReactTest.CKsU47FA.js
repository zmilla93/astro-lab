import{r as R}from"./index.BVOCwoKb.js";var l={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c;function v(){if(c)return n;c=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function u(d,r,t){var o=null;if(t!==void 0&&(o=""+t),r.key!==void 0&&(o=""+r.key),"key"in r){t={};for(var x in r)x!=="key"&&(t[x]=r[x])}else t=r;return r=t.ref,{$$typeof:e,type:d,key:o,ref:r!==void 0?r:null,props:t}}return n.Fragment=i,n.jsx=u,n.jsxs=u,n}var a;function p(){return a||(a=1,l.exports=v()),l.exports}var s=p();function E(){const[e,i]=R.useState(0);return s.jsxs("div",{children:[s.jsx("button",{onClick:()=>i(u=>u+1),children:"Click Me!"}),s.jsx("button",{onClick:()=>alert("Click!"),children:"Alert Me!"}),s.jsx(j,{count:e})]})}function j({count:e}){return s.jsxs("div",{children:["Inner Prop!! ",e]})}export{E as ReactTest};
