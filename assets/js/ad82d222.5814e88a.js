/*! For license information please see ad82d222.5814e88a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83640],{74921:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var r=n(74848),i=n(28453);const s={sidebar_label:"EventEmitter.on"},o="EventEmitter.on() method",d={id:"api/puppeteer.eventemitter.on",title:"EventEmitter.on() method",description:"Bind an event listener to fire when an event occurs.",source:"@site/../docs/api/puppeteer.eventemitter.on.md",sourceDirName:"api",slug:"/api/puppeteer.eventemitter.on",permalink:"/next/api/puppeteer.eventemitter.on",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"EventEmitter.on"},sidebar:"api",previous:{title:"EventEmitter.off",permalink:"/next/api/puppeteer.eventemitter.off"},next:{title:"EventEmitter.once",permalink:"/next/api/puppeteer.eventemitter.once"}},c={},l=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"eventemitteron-method",children:"EventEmitter.on() method"})}),"\n",(0,r.jsx)(t.p,{children:"Bind an event listener to fire when an event occurs."}),"\n",(0,r.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class EventEmitter {\n  on<Key extends keyof EventsWithWildcard<Events>>(\n    type: Key,\n    handler: Handler<EventsWithWildcard<Events>[Key]>\n  ): this;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"type"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"Key"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"the event type you'd like to listen to. Can be a string or symbol."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"handler"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/next/api/puppeteer.handler",children:"Handler"}),"<",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.eventswithwildcard",children:"EventsWithWildcard"}),"<Events>[Key]>"]})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"the function to be called when the event occurs."})})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"this"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"this"})," to enable you to chain method calls."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},21020:(e,t,n)=>{var r=n(96540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,a=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(a=t.ref),t)o.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:a,props:s,_owner:d.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var r=n(96540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);