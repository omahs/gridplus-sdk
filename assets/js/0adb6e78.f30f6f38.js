"use strict";(self.webpackChunkgridplus_sdk=self.webpackChunkgridplus_sdk||[]).push([[942],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(o,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,s(s({ref:t},l),{},{components:n})):a.createElement(h,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,s[1]=d;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7622:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return l}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],d={id:"addresses",sidebar_position:2},o="\ud83d\udd11 Addresses and Public Keys",p={unversionedId:"addresses",id:"addresses",title:"\ud83d\udd11 Addresses and Public Keys",description:"Once your Client instance is connected, you can request a few different address and key types from the Lattice.",source:"@site/docs/addresses.md",sourceDirName:".",slug:"/addresses",permalink:"/gridplus-sdk/addresses",editUrl:"https://github.com/gridplus/gridplus-sdk/docs/addresses.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"addresses",sidebar_position:2},sidebar:"sidebar",previous:{title:"\ud83c\udfac Getting Started",permalink:"/gridplus-sdk/getting-started"},next:{title:"\ud83e\uddfe Signing Transactions and Messages",permalink:"/gridplus-sdk/signing"}},l=[{value:"\u039e Ethereum-type addresses",id:"\u03be-ethereum-type-addresses",children:[{value:"Example: requesting Ethereum addresses",id:"example-requesting-ethereum-addresses",children:[],level:3}],level:2},{value:"\u20bf Bitcoin addresses",id:"-bitcoin-addresses",children:[{value:"Example: requesting BTC segwit addresse",id:"example-requesting-btc-segwit-addresse",children:[],level:3}],level:2},{value:"\ud83d\udddd\ufe0f Public Keys",id:"\ufe0f-public-keys",children:[{value:"1\ufe0f\u20e3 <code>secp256k1</code> curve",id:"1\ufe0f\u20e3-secp256k1-curve",children:[{value:"Example: requesting secp256k1 public key",id:"example-requesting-secp256k1-public-key",children:[],level:4}],level:3},{value:"2\ufe0f\u20e3 <code>ed25519</code> curve",id:"2\ufe0f\u20e3-ed25519-curve",children:[],level:3}],level:2}],c={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-addresses-and-public-keys"},"\ud83d\udd11 Addresses and Public Keys"),(0,i.kt)("p",null,"Once your ",(0,i.kt)("inlineCode",{parentName:"p"},"Client")," instance is connected, you can request a few different address and key types from the Lattice."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This section uses the following notation when discussing BIP32 derivation paths: ",(0,i.kt)("inlineCode",{parentName:"p"},"[ purpose, coin_type, account, change, address ]"),". It also uses ",(0,i.kt)("inlineCode",{parentName:"p"},"'"),' to represent a "hardened", index, which is just ',(0,i.kt)("inlineCode",{parentName:"p"},"0x80000000 + index"),"."))),(0,i.kt)("h2",{id:"\u03be-ethereum-type-addresses"},"\u039e Ethereum-type addresses"),(0,i.kt)("p",null,"These addresses are 20-byte hex strings prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"0x"),". Lattice firmware places some restrictions based on derivation path, specifically that the ",(0,i.kt)("inlineCode",{parentName:"p"},"coin_type")," must be supported (Ethereum uses coin type ",(0,i.kt)("inlineCode",{parentName:"p"},"60'"),")."),(0,i.kt)("p",null,"In practice, most apps just use the standard Ethereum ",(0,i.kt)("inlineCode",{parentName:"p"},"coin_type")," (",(0,i.kt)("inlineCode",{parentName:"p"},"60'"),") when requesting addresses for other networks, but we do support some others (a vestige of an integration -- you probably won't ever need to use these): "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"966', 700', 9006', 9005', 1007', 178', 137', 3731', 1010', 61', 108', 40', 889', 1987', 820', 6060', 1620', 1313114', 76', 246529', 246785', 1001', 227', 916', 464', 2221', 344', 73799', 246'"))),(0,i.kt)("p",null,"Keep in mind that changing the ",(0,i.kt)("inlineCode",{parentName:"p"},"coin_type")," will change all the requested addresses relative to Ethereum. This is why, in practice, most apps just use the Ethereum path."),(0,i.kt)("h3",{id:"example-requesting-ethereum-addresses"},"Example: requesting Ethereum addresses"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const reqData = {\n startPath: [   // Derivation path of the first requested address\n   0x80000000 + 44,\n   0x80000000 + 60,\n   0x80000000,\n   0,\n   0,\n ],\n n: 5,          // Number of sequential addresses on specified path to return (max 10)\n};\n\nconst addrs = await client.getAddresses(reqData);\n")),(0,i.kt)("h2",{id:"-bitcoin-addresses"},"\u20bf Bitcoin addresses"),(0,i.kt)("p",null,"The Lattice can also export Bitcoin formatted addresses. There are three types of addresses that can be fetched and the type is determined by the ",(0,i.kt)("inlineCode",{parentName:"p"},"purpose")," index of the BIP32 derivation path."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"purpose = 44'"),", ",(0,i.kt)("em",{parentName:"li"},"legacy")," addresses (beginning with ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),") will be returned"),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"purpose = 49'"),", ",(0,i.kt)("em",{parentName:"li"},"wrapped segwit")," addresses (beginning with ",(0,i.kt)("inlineCode",{parentName:"li"},"3"),") will be returned"),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"purpose = 84'"),", ",(0,i.kt)("em",{parentName:"li"},"segwit v1")," addresses (beginning with ",(0,i.kt)("inlineCode",{parentName:"li"},"bc1"),") will be returned")),(0,i.kt)("p",null,"Keep in mind that ",(0,i.kt)("inlineCode",{parentName:"p"},"coin_type")," ",(0,i.kt)("inlineCode",{parentName:"p"},"0'")," is required when requesting BTC addresses."),(0,i.kt)("h3",{id:"example-requesting-btc-segwit-addresse"},"Example: requesting BTC segwit addresse"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const reqData = {\n startPath: [   // Derivation path of the first requested address\n   0x80000000 + 84,\n   0x80000000,\n   0x80000000,\n   0,\n   0,\n ]\n};\n\n// `n` will be set to 1 if not specified -> 1 address returned\nconst addr0 = await client.getAddresses(reqData);\n")),(0,i.kt)("h2",{id:"\ufe0f-public-keys"},"\ud83d\udddd\ufe0f Public Keys"),(0,i.kt)("p",null,"In addition to formatted addresses, the Lattice can return public keys on any supported curve for any BIP32 derivation path."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Currently the derivation path must be at least 2 indices deep, but this restriction may be removed in the future."))),(0,i.kt)("p",null,"For requesting public keys it is best to import ",(0,i.kt)("inlineCode",{parentName:"p"},"Constants")," with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Client, Constants } from 'gridplus-sdk'\n")),(0,i.kt)("h3",{id:"1\ufe0f\u20e3-secp256k1-curve"},"1\ufe0f\u20e3 ",(0,i.kt)("inlineCode",{parentName:"h3"},"secp256k1")," curve"),(0,i.kt)("p",null,"Used by Bitcoin, Ethereum, and most blockchains."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pubkey size: 65 bytes")),(0,i.kt)("p",null,"The public key has two 32 byte components and is of format: ",(0,i.kt)("inlineCode",{parentName:"p"},"04{X}{Y}"),", meaning every public key is prefixed with a ",(0,i.kt)("inlineCode",{parentName:"p"},"04")," byte."),(0,i.kt)("h4",{id:"example-requesting-secp256k1-public-key"},"Example: requesting secp256k1 public key"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const req = {\n  startPath: [   // Derivation path of the first requested pubkey\n    0x80000000 + 44,\n    0x80000000 + 60,\n    0x80000000,\n    0,\n    0,\n  ],\n  n: 3,\n  flag: Constants.GET_ADDR_FLAGS.SECP256K1_PUB,\n};\n\nconst pubkeys = await client.getAddresses(req);\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"startPath")," is the same, this example returns public keys which can be converted to Ethereum addresses to yield the same result as the above request to fetch Ethereum addresses."))),(0,i.kt)("h3",{id:"2\ufe0f\u20e3-ed25519-curve"},"2\ufe0f\u20e3 ",(0,i.kt)("inlineCode",{parentName:"h3"},"ed25519")," curve"),(0,i.kt)("p",null,"Used by Solana and a few others. ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Ed25519 requires all derivation path indices be hardened."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pubkey size: 32 bytes")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some libraries prefix these keys with a ",(0,i.kt)("inlineCode",{parentName:"p"},"00")," byte (making them 33 bytes), but we do ",(0,i.kt)("strong",{parentName:"p"},"not")," return keys with this prefix."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const req = {\n  startPath: [   // Derivation path of the first requested pubkey\n    0x80000000 + 44,\n    0x80000000 + 60,\n    0x80000000,\n  ],\n  n: 3,\n  flag: Constants.GET_ADDR_FLAGS.ED25519_PUB,\n};\n\nconst pubkeys = await client.getAddresses(req);\n")))}u.isMDXComponent=!0}}]);