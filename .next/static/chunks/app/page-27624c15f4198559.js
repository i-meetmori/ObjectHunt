(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8357:function(e,n,s){Promise.resolve().then(s.bind(s,3768))},6783:function(e,n,s){"use strict";var t=s(9268),a=s(6008);s(6006),n.Z=function(e){let n=(0,a.useRouter)(),s=()=>{let e=new Audio("/mouseclick.mp3");e.play()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("button",{className:"font-semibold cartoonish-btn ".concat(e.className," "),onClick:()=>{s(),e.onClick?e.onClick():n.push(e.href||"")},children:e.children})})}},2006:function(e,n,s){"use strict";var t=s(9268),a=s(4415),l=s.n(a),c=s(6006);n.Z=function(e){let[n,s]=(0,c.useState)(e.defaultOpen||!1);return(0,t.jsxs)(t.Fragment,{children:[e.defaultOpen||(0,t.jsx)("label",{onClick:()=>s(!n),className:"btn ".concat(e.buttonClassName," ").concat(l().className),children:e.btnname}),(0,t.jsx)("input",{type:"checkbox",id:e.id,checked:n,defaultChecked:e.defaultOpen,onChange:e=>{},className:"modal-toggle"}),(0,t.jsx)("div",{className:"modal ".concat(e.modalClassName),children:(0,t.jsxs)("div",{className:"modal-box bg-base border-2 nobar broder-white ".concat(l().className),children:[(0,t.jsx)("h3",{className:"font-bold text-2xl text-primary",children:e.title}),(0,t.jsx)("div",{className:"flex flex-col mt-3",children:e.children}),(0,t.jsxs)("div",{className:"modal-action flex justify-between",children:[(0,t.jsx)("div",{children:e.actions}),e.customClose?(0,t.jsx)("label",{onClick:()=>{window.location.href=e.customClose&&(null==e?void 0:e.customClose[1])||"/"},className:"btn btn-error ".concat(l().className),children:e.customClose[0]}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("label",{onClick:()=>s(!1),className:"btn btn-error ".concat(l().className),children:"Close"})})]})]})})]})}},3768:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return r}});var t=s(9268),a=s(3130),l=s.n(a),c=s(2006),o=s(6783);function r(){return(0,t.jsxs)("div",{className:"flex flex-col justify-around h-screen",children:[(0,t.jsx)("h1",{className:"text-primary text-4xl font-bold text-center",children:(0,t.jsx)("img",{className:"mx-auto",width:260,src:"/images/logo.png",alt:"logo"})}),(0,t.jsx)("style",{children:"\n                    .soham {\n                        animation: anim1 2s infinite ease-in-out;\n                    }\n                    @keyframes anim1 {\n                        0% {\n                            transform: scale(.8);\n                        }\n                        50% {\n                            transform: scale(1);\n                        }\n                        100% {\n                            transform: scale(.8);\n                        }\n                    }\n                "}),(0,t.jsxs)("div",{className:"flex flex-col justify-center p-3 gap-3",children:[(0,t.jsx)(o.Z,{href:"/menu",className:"btn-accent ".concat(l().className),children:"Play As Guest"}),(0,t.jsx)(c.Z,{enable:!0,id:"help_modal",title:"How to play",buttonClassName:"cartoonish-btn ".concat(l().className),btnname:"How to Play",children:"Fuck around and find out fool"})]}),(0,t.jsx)("div",{className:"bg-slate-500 m-2 py-7 text-black flex justify-center items-center",children:(0,t.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6679868109520957",crossOrigin:"anonymous"})})]})}},4415:function(e){e.exports={style:{fontFamily:"'__Bungee_e557cd', '__Bungee_Fallback_e557cd'",fontWeight:400,fontStyle:"normal"},className:"__className_e557cd"}},3130:function(e){e.exports={style:{fontFamily:"'__Bungee_e557cd', '__Bungee_Fallback_e557cd'",fontWeight:400,fontStyle:"normal"},className:"__className_e557cd"}},3177:function(e,n,s){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=s(6006),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,s){var t,l={},i=null,d=null;for(t in void 0!==s&&(i=""+s),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,t)&&!r.hasOwnProperty(t)&&(l[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===l[t]&&(l[t]=n[t]);return{$$typeof:a,type:e,key:i,ref:d,props:l,_owner:o.current}}n.Fragment=l,n.jsx=i,n.jsxs=i},9268:function(e,n,s){"use strict";e.exports=s(3177)},6008:function(e,n,s){e.exports=s(794)}},function(e){e.O(0,[253,769,744],function(){return e(e.s=8357)}),_N_E=e.O()}]);