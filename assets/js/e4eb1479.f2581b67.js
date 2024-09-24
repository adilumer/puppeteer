/*! For license information please see e4eb1479.f2581b67.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73714],{36043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var r=n(74848),s=n(28453);const a={sidebar_label:"Page.$eval"},i="Page.$eval() method",l={id:"api/puppeteer.page._eval",title:"Page.$eval() method",description:"This method finds the first element within the page that matches the selector and passes the result as the first argument to the pageFunction.",source:"@site/versioned_docs/version-23.4.0/api/puppeteer.page._eval.md",sourceDirName:"api",slug:"/api/puppeteer.page._eval",permalink:"/api/puppeteer.page._eval",draft:!1,unlisted:!1,tags:[],version:"23.4.0",frontMatter:{sidebar_label:"Page.$eval"},sidebar:"api",previous:{title:"Page.$$eval",permalink:"/api/puppeteer.page.__eval"},next:{title:"Page.addScriptTag",permalink:"/api/puppeteer.page.addscripttag"}},c={},o=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"pageeval-method",children:"Page.$eval() method"})}),"\n",(0,r.jsxs)(t.p,{children:["This method finds the first element within the page that matches the selector and passes the result as the first argument to the ",(0,r.jsx)(t.code,{children:"pageFunction"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  $eval<\n    Selector extends string,\n    Params extends unknown[],\n    Func extends EvaluateFuncWith<NodeFor<Selector>, Params> = EvaluateFuncWith<\n      NodeFor<Selector>,\n      Params\n    >,\n  >(\n    selector: Selector,\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"selector"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"Selector"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#selectors",children:"selector"})," to query the page for. ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"CSS selectors"})," can be passed as-is and a ",(0,r.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#non-css-selectors",children:"Puppeteer-specific selector syntax"})," allows quering by ",(0,r.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#text-selectors--p-text",children:"text"}),", ",(0,r.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#aria-selectors--p-aria",children:"a11y role and name"}),", and ",(0,r.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath",children:"xpath"})," and ",(0,r.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom",children:"combining these queries across shadow roots"}),". Alternatively, you can specify the selector type using a ",(0,r.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#prefixed-selector-syntax",children:"prefix"}),"."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"pageFunction"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"Func | string"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"the function to be evaluated in the page context. Will be passed the result of the element matching the selector as its first argument."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"args"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"Params"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["any additional arguments to pass through to ",(0,r.jsx)(t.code,{children:"pageFunction"}),"."]})})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"Promise<Awaited<ReturnType<Func>>>"}),"\n",(0,r.jsxs)(t.p,{children:["The result of calling ",(0,r.jsx)(t.code,{children:"pageFunction"}),". If it returns an element it is wrapped in an ",(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),", else the raw value itself is returned."]}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.p,{children:["If no element is found matching ",(0,r.jsx)(t.code,{children:"selector"}),", the method will throw an error."]}),"\n",(0,r.jsxs)(t.p,{children:["If ",(0,r.jsx)(t.code,{children:"pageFunction"})," returns a promise ",(0,r.jsx)(t.code,{children:"$eval"})," will wait for the promise to resolve and then return its value."]}),"\n",(0,r.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const searchValue = await page.$eval('#search', el => el.value);\nconst preloadHref = await page.$eval('link[rel=preload]', el => el.href);\nconst html = await page.$eval('.main-container', el => el.outerHTML);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["If you are using TypeScript, you may have to provide an explicit type to the first argument of the ",(0,r.jsx)(t.code,{children:"pageFunction"}),". By default it is typed as ",(0,r.jsx)(t.code,{children:"Element"}),", but you may need to provide a more specific sub-type:"]}),"\n",(0,r.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// if you don't provide HTMLInputElement here, TS will error\n// as `value` is not on `Element`\nconst searchValue = await page.$eval(\n  '#search',\n  (el: HTMLInputElement) => el.value\n);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The compiler should be able to infer the return type from the ",(0,r.jsx)(t.code,{children:"pageFunction"})," you provide. If it is unable to, you can use the generic type to tell the compiler what return type you expect from ",(0,r.jsx)(t.code,{children:"$eval"}),":"]}),"\n",(0,r.jsx)(t.h2,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// The compiler can infer the return type in this case, but if it can't\n// or if you want to be more explicit, provide it as the generic type.\nconst searchValue = await page.$eval<string>(\n  '#search',\n  (el: HTMLInputElement) => el.value\n);\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},21020:(e,t,n)=>{var r=n(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var r,a={},o=null,p=null;for(r in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:s,type:e,key:o,ref:p,props:a,_owner:l.current}}t.Fragment=a,t.jsx=o,t.jsxs=o},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);