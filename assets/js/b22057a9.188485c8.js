/*! For license information please see b22057a9.188485c8.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26975],{27652:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=t(74848),s=t(28453);const i={sidebar_label:"JSCoverageOptions"},o="JSCoverageOptions interface",c={id:"api/puppeteer.jscoverageoptions",title:"JSCoverageOptions interface",description:"Set of configurable options for JS coverage.",source:"@site/versioned_docs/version-23.4.0/api/puppeteer.jscoverageoptions.md",sourceDirName:"api",slug:"/api/puppeteer.jscoverageoptions",permalink:"/api/puppeteer.jscoverageoptions",draft:!1,unlisted:!1,tags:[],version:"23.4.0",frontMatter:{sidebar_label:"JSCoverageOptions"},sidebar:"api",previous:{title:"JSCoverageEntry",permalink:"/api/puppeteer.jscoverageentry"},next:{title:"KeyboardTypeOptions",permalink:"/api/puppeteer.keyboardtypeoptions"}},l={},d=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function a(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"jscoverageoptions-interface",children:"JSCoverageOptions interface"})}),"\n",(0,n.jsx)(r.p,{children:"Set of configurable options for JS coverage."}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export interface JSCoverageOptions\n"})}),"\n",(0,n.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Property"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Modifiers"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Default"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"includerawscriptcoverage",children:"includeRawScriptCoverage"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"boolean"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Whether the result includes raw V8 script coverage entries."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"reportanonymousscripts",children:"reportAnonymousScripts"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"boolean"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Whether anonymous scripts generated by the page should be reported."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"resetonnavigation",children:"resetOnNavigation"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"boolean"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Whether to reset coverage on every navigation."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"useblockcoverage",children:"useBlockCoverage"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"boolean"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Whether to collect coverage information at the block level. If true, coverage will be collected at the block level (this is the default). If false, coverage will be collected at the function level."})}),(0,n.jsx)("td",{})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},21020:(e,r,t)=>{var n=t(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,i={},d=null,a=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(a=r.ref),r)o.call(r,n)&&!l.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:s,type:e,key:d,ref:a,props:i,_owner:c.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>c});var n=t(96540);const s={},i=n.createContext(s);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);