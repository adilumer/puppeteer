/*! For license information please see bd5ae63e.27eb002a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26138],{1465:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=t(74848),o=t(28453);const a={sidebar_label:"Predicate"},i="Predicate type",p={id:"api/puppeteer.predicate",title:"Predicate type",description:"Signature",source:"@site/../docs/api/puppeteer.predicate.md",sourceDirName:"api",slug:"/api/puppeteer.predicate",permalink:"/next/api/puppeteer.predicate",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Predicate"},sidebar:"api",previous:{title:"PredefinedNetworkConditions",permalink:"/next/api/puppeteer.predefinednetworkconditions"},next:{title:"ProtocolError",permalink:"/next/api/puppeteer.protocolerror"}},s={},c=[{value:"Signature",id:"signature",level:3}];function d(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"predicate-type",children:"Predicate type"})}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type Predicate<From, To extends From = From> =\n  | ((value: From) => value is To)\n  | ((value: From) => Awaitable<boolean>);\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.awaitable",children:"Awaitable"})]})]})}function l(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},21020:(e,r,t)=>{var n=t(96540),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,p=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,a={},c=null,d=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)i.call(r,n)&&!s.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:o,type:e,key:c,ref:d,props:a,_owner:p.current}}r.Fragment=a,r.jsx=c,r.jsxs=c},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>p});var n=t(96540);const o={},a=n.createContext(o);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function p(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);