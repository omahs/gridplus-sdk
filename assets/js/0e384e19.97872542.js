"use strict";(self.webpackChunkgridplus_sdk=self.webpackChunkgridplus_sdk||[]).push([[671],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=i,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9881:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={id:"index",title:"Introduction",slug:"/",sidebar_label:"Introduction",sidebar_position:0,custom_edit_url:null},u="GridPlus SDK",c={unversionedId:"index",id:"index",title:"Introduction",description:"The GridPlus SDK allows any",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/gridplus-sdk/",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"Introduction",slug:"/",sidebar_label:"Introduction",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",next:{title:"\ud83c\udfac Getting Started",permalink:"/gridplus-sdk/getting-started"}},l=[],d={toc:l};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gridplus-sdk"},"GridPlus SDK"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/GridPlus/gridplus-sdk"},"GridPlus SDK")," allows any\napplication to establish a connection and interact with a GridPlus Lattice\ndevice."),(0,o.kt)("p",null,"This SDK is designed to facilitate communication with a user's ",(0,o.kt)("a",{parentName:"p",href:"https://gridplus.io/lattice"},"Lattice1 hardware wallet"),". Once paired to a given Lattice, an instance of this SDK is used to make encrypted requests for things like getting addresses/public keys and making signatures."),(0,o.kt)("p",null,"The Lattice1 is an internet connected device which listens for requests and fills them in firmware. Web requests originate from this SDK and responses are returned asynchronously. Some requests require user authorization and may time out if the user does not approve them."))}p.isMDXComponent=!0}}]);