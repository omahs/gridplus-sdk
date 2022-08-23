"use strict";(self.webpackChunkgridplus_sdk_docs=self.webpackChunkgridplus_sdk_docs||[]).push([[3272],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),u=o(n),k=r,c=u["".concat(p,".").concat(k)]||u[k]||s[k]||i;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},398:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return d},metadata:function(){return o},toc:function(){return s}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],d={id:"util",title:"Module: util",custom_edit_url:null},p=void 0,o={unversionedId:"api/modules/util",id:"api/modules/util",title:"Module: util",description:"Functions",source:"@site/docs/api/modules/util.md",sourceDirName:"api/modules",slug:"/api/modules/util",permalink:"/gridplus-sdk/api/modules/util",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"util",title:"Module: util",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Class: Client",permalink:"/gridplus-sdk/api/classes/client.Client"},next:{title:"Module: constants",permalink:"/gridplus-sdk/api/modules/constants"}},m={},s=[{value:"Functions",id:"functions",level:2},{value:"fetchCalldataDecoder",id:"fetchcalldatadecoder",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"generateAppSecret",id:"generateappsecret",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getV",id:"getv",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"selectDefFrom4byteABI",id:"selectdeffrom4byteabi",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4}],u={toc:s};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"fetchcalldatadecoder"},"fetchCalldataDecoder"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"fetchCalldataDecoder"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"_data"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"to"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"_chainId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"recurse?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"abi"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"def"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer"),"  }",">"),(0,i.kt)("p",null,"Fetches calldata from a remote scanner based on the transaction's ",(0,i.kt)("inlineCode",{parentName:"p"},"chainId")),(0,i.kt)("p",null,"TODO: Remove recurse option when FW 0.16 is released"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"Uint8Array")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"to")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_chainId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"recurse")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"abi"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"def"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer"),"  }",">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/GridPlus/gridplus-sdk/blob/c7219c6/src/util.ts#L530"},"src/util.ts:530")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"generateappsecret"},"generateAppSecret"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"generateAppSecret"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"deviceId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"appName"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,i.kt)("p",null,"Generates an application secret for use in maintaining connection to device."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"deviceId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Buffer")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The device ID of the device you want to generate a token for.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"password")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Buffer")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The password entered when connecting to the device.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"appName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Buffer")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of the application.")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,i.kt)("p",null,"an application secret as a Buffer"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/GridPlus/gridplus-sdk/blob/c7219c6/src/util.ts#L322"},"src/util.ts:322")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getv"},"getV"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getV"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"tx"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"resp"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("p",null,"Generic signing does not return a ",(0,i.kt)("inlineCode",{parentName:"p"},"v")," value like legacy ETH signing requests did.\nGet the ",(0,i.kt)("inlineCode",{parentName:"p"},"v")," component of the signature as well as an ",(0,i.kt)("inlineCode",{parentName:"p"},"initV"),"\nparameter, which is what you need to use to re-create an ",(0,i.kt)("inlineCode",{parentName:"p"},"@ethereumjs/tx"),"\nobject. There is a lot of tech debt in ",(0,i.kt)("inlineCode",{parentName:"p"},"@ethereumjs/tx")," which also\ninherits the tech debt of ethereumjs-util."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The legacy ",(0,i.kt)("inlineCode",{parentName:"li"},"Transaction")," type can call ",(0,i.kt)("inlineCode",{parentName:"li"},"_processSignature")," with the regular\n",(0,i.kt)("inlineCode",{parentName:"li"},"v")," value."),(0,i.kt)("li",{parentName:"ol"},"Newer transaction types such as ",(0,i.kt)("inlineCode",{parentName:"li"},"FeeMarketEIP1559Transaction")," will subtract\n27 from the ",(0,i.kt)("inlineCode",{parentName:"li"},"v")," that gets passed in, so we need to add ",(0,i.kt)("inlineCode",{parentName:"li"},"27")," to create ",(0,i.kt)("inlineCode",{parentName:"li"},"initV"))),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tx")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any")),(0,i.kt)("td",{parentName:"tr",align:"left"},"An @ethereumjs/tx Transaction object or Buffer (serialized tx)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"resp")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any")),(0,i.kt)("td",{parentName:"tr",align:"left"},"response from Lattice. Can be either legacy or generic signing variety")))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("p",null,"bn.js BN object containing the ",(0,i.kt)("inlineCode",{parentName:"p"},"v")," param"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/GridPlus/gridplus-sdk/blob/c7219c6/src/util.ts#L350"},"src/util.ts:350")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"selectdeffrom4byteabi"},"selectDefFrom4byteABI"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"selectDefFrom4byteABI"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"abiData"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"selector"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("p",null,"Takes a list of ABI data objects and a selector, and returns the earliest ABI data object that\nmatches the selector."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"abiData")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"selector")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/GridPlus/gridplus-sdk/blob/c7219c6/src/util.ts#L460"},"src/util.ts:460")))}k.isMDXComponent=!0}}]);