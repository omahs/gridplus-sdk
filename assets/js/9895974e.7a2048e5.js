"use strict";(self.webpackChunkgridplus_sdk_docs=self.webpackChunkgridplus_sdk_docs||[]).push([[6005],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||a;return n?r.createElement(m,l(l({ref:t},o),{},{components:n})):r.createElement(m,l({ref:t},o))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4183:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],s={id:"types_client.RequestParams",title:"Interface: RequestParams",custom_edit_url:null},p=void 0,u={unversionedId:"api/interfaces/types_client.RequestParams",id:"api/interfaces/types_client.RequestParams",title:"Interface: RequestParams",description:"types/client.RequestParams",source:"@site/docs/api/interfaces/types_client.RequestParams.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/types_client.RequestParams",permalink:"/gridplus-sdk/api/interfaces/types_client.RequestParams",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"types_client.RequestParams",title:"Interface: RequestParams",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: EncryptRequestParams",permalink:"/gridplus-sdk/api/interfaces/types_client.EncryptRequestParams"},next:{title:"Interface: SignData",permalink:"/gridplus-sdk/api/interfaces/types_client.SignData"}},o={},c=[{value:"Properties",id:"properties",level:2},{value:"payload",id:"payload",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"retries",id:"retries",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"timeout",id:"timeout",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"url",id:"url",level:3},{value:"Defined in",id:"defined-in-3",level:4}],d={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/gridplus-sdk/api/modules/types_client"},"types/client"),".RequestParams"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"payload"},"payload"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"payload"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/GridPlus/gridplus-sdk/blob/fba1154/src/types/client.d.ts#L67"},"src/types/client.d.ts:67")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"retries"},"retries"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"retries"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/GridPlus/gridplus-sdk/blob/fba1154/src/types/client.d.ts#L69"},"src/types/client.d.ts:69")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"timeout"},"timeout"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"timeout"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/GridPlus/gridplus-sdk/blob/fba1154/src/types/client.d.ts#L68"},"src/types/client.d.ts:68")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"url"},"url"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"url"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/GridPlus/gridplus-sdk/blob/fba1154/src/types/client.d.ts#L66"},"src/types/client.d.ts:66")))}f.isMDXComponent=!0}}]);