"use strict";(self.webpackChunkgridplus_sdk=self.webpackChunkgridplus_sdk||[]).push([[47],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(n),g=i,u=m["".concat(l,".").concat(g)]||m[g]||p[g]||s;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<s;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9437:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var a=n(7462),i=n(3366),s=(n(7294),n(3905)),r=["components"],o={id:"signing",sidebar_position:3},l="\ud83e\uddfe Signing Transactions and Messages",d={unversionedId:"signing",id:"signing",title:"\ud83e\uddfe Signing Transactions and Messages",description:"The Lattice1 is capable of signing messages on supported curves. For certain message types, it is capable of decoding and displaying the requests in more readable ways.",source:"@site/docs/signing.md",sourceDirName:".",slug:"/signing",permalink:"/gridplus-sdk/signing",editUrl:"https://github.com/gridplus/gridplus-sdk/docs/signing.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"signing",sidebar_position:3},sidebar:"sidebar",previous:{title:"\ud83d\udd11 Addresses and Public Keys",permalink:"/gridplus-sdk/addresses"},next:{title:"\ud83e\uddea Testing",permalink:"/gridplus-sdk/testing"}},c=[{value:"\u270d\ufe0f General Signing",id:"\ufe0f-general-signing",children:[{value:"\ud83d\udd8a\ufe0f Requesting Signatures",id:"\ufe0f-requesting-signatures",children:[{value:"Example: using generic signing",id:"example-using-generic-signing",children:[],level:4}],level:3},{value:"\ud83d\udcc3 Message Decoders",id:"-message-decoders",children:[{value:"Example: using the Solana decoder",id:"example-using-the-solana-decoder",children:[],level:4}],level:3},{value:"\ud83d\udcbe Calldata Decoding",id:"-calldata-decoding",children:[{value:"Storing Calldata Decoders",id:"storing-calldata-decoders",children:[],level:4},{value:"1\ufe0f\u20e3  EVM",id:"1\ufe0f\u20e3--evm",children:[{value:"Example Usage (see <code>test/signing/evm.ts</code> for more examples)",id:"example-usage-see-testsigningevmts-for-more-examples",children:[],level:5}],level:4},{value:"Param Names",id:"param-names",children:[],level:4}],level:3}],level:2},{value:"\ud83d\udcdc Legacy Signing",id:"-legacy-signing",children:[{value:"\u039e Ethereum (Transaction)",id:"\u03be-ethereum-transaction",children:[],level:3},{value:"\u039e Ethereum (Message)",id:"\u03be-ethereum-message",children:[{value:"<code>personal_sign</code>",id:"personal_sign",children:[{value:"Example: requesting signature on Ethereum <code>personal_sign</code> message",id:"example-requesting-signature-on-ethereum-personal_sign-message",children:[],level:5}],level:4},{value:"<code>sign_typed_data</code>",id:"sign_typed_data",children:[],level:4}],level:3},{value:"\u20bf Bitcoin",id:"-bitcoin",children:[{value:"Example: requesting BTC transactions",id:"example-requesting-btc-transactions",children:[],level:4}],level:3}],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"-signing-transactions-and-messages"},"\ud83e\uddfe Signing Transactions and Messages"),(0,s.kt)("p",null,"The Lattice1 is capable of signing messages on supported curves. For certain message types, it is capable of decoding and displaying the requests in more readable ways."),(0,s.kt)("h2",{id:"\ufe0f-general-signing"},"\u270d\ufe0f General Signing"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"This new signing mode was introduced Lattice firmare ",(0,s.kt)("inlineCode",{parentName:"em"},"v0.14.0"),". GridPlus plans on deprecating the legacy signing mode and replacing it with general signing decoders. This document will be updated as that happens."))),(0,s.kt)("p",null,"You should import ",(0,s.kt)("inlineCode",{parentName:"p"},"Constants")," when using general signing:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Constants } from `gridplus-sdk`\n")),(0,s.kt)("h3",{id:"\ufe0f-requesting-signatures"},"\ud83d\udd8a\ufe0f Requesting Signatures"),(0,s.kt)("p",null,"General signing allows you to request a signature on any message from a private key derived on any supported curve. Some curves (e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"secp256k1"),") require a hashing algorithm to be specified in order to hash the message before signing. Other curves (e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"ed25519"),") do not expect hashed messages prior to signing."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Location in ",(0,s.kt)("inlineCode",{parentName:"th"},"Constants")),(0,s.kt)("th",{parentName:"tr",align:"left"},"Options"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Curve"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"Constants.SIGNING.CURVES")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"SECP256K1"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"ED25519")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Curve on which to derive the signer's private key")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Hash"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"Constants.SIGNING.HASHES")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"KECCAK256"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"SHA256"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"NONE")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Hash to use prior to signing. Note that ",(0,s.kt)("inlineCode",{parentName:"td"},"ED25519")," requires ",(0,s.kt)("inlineCode",{parentName:"td"},"NONE")," as messages are not prehashed.")))),(0,s.kt)("h4",{id:"example-using-generic-signing"},"Example: using generic signing"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const msg = "I am the message to sign"\nconst req = {\n  signerPath: [\n    0x80000000 + 44,\n    0x80000000 + 60,\n    0x80000000,\n  ]\n  curveType: Constants.SIGNING.CURVES.ED25519,\n  hashType: Constants.SIGNING.HASHES.NONE,\n  payload: msg\n};\n\nconst sig = await client.sign(req)\n')),(0,s.kt)("h3",{id:"-message-decoders"},"\ud83d\udcc3 Message Decoders"),(0,s.kt)("p",null,"By default, the message will be displayed on the Lattice's screen in either ASCII or hex -- if the message contains only ASCII, it will be displayed as such; otherwise it will get printed as a hex string. This means the Lattice can produce a signature for any message you like. However, there are additional decoders that make the request more readable on the Lattice. These decoders can be accessed inside of ",(0,s.kt)("inlineCode",{parentName:"p"},"Constants"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const encodings = Constants.SIGNING.ENCODINGS\n")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Encoding"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"NONE")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Can also use ",(0,s.kt)("inlineCode",{parentName:"td"},"null")," or not specify the ",(0,s.kt)("inlineCode",{parentName:"td"},"encodingType"),". Lattice will display either an ASCII or a hex string depending on the payload.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"SOLANA")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Used to decode a Solana transaction. Transactions that cannot be decoded will be rejected. See ",(0,s.kt)("inlineCode",{parentName:"td"},"test/testGeneric.ts")," for an example.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"TERRA")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Used to decode a Terra transaction. Only ",(0,s.kt)("inlineCode",{parentName:"td"},"MsgSend"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"MsgMultiSend"),", and ",(0,s.kt)("inlineCode",{parentName:"td"},"MsgExecuteContract")," are supported, but any transaction with unsupported message types will still decode -- the message type and calldata will be displayed raw.")))),(0,s.kt)("p",null,"If you do not wish to specify a decoder, you can leave this field empty and the message will display either as ASCII or a hex string on the device."),(0,s.kt)("h4",{id:"example-using-the-solana-decoder"},"Example: using the Solana decoder"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const msg = solTx.compileMessage().serialize()\nconst req = {\n  signerPath: [   // Derivation path of the first requested pubkey\n    0x80000000 + 44,\n    0x80000000 + 60,\n    0x80000000,\n  ]\n  curveType: Constants.SIGNING.CURVES.ED25519,\n  hashType: Constants.SIGNING.HASHES.NONE,\n  encodingType: Constants.SIGNING.ENCODINGS.SOLANA,\n  payload: msg\n};\n\nconst sig = await client.sign(req)\n")),(0,s.kt)("h3",{id:"-calldata-decoding"},"\ud83d\udcbe Calldata Decoding"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"All available calldata decoding options will be documented in this section. More may be added as time goes on."))),(0,s.kt)("p",null,'Certain transaction decoder types may support calldata decoding for request data. You can use this feature by including "calldata decoder data" (explained shortly) in a general signing request using the ',(0,s.kt)("inlineCode",{parentName:"p"},"decoder")," request param:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"req.decoder = <calldata decoder data>\nawait client.sign(req);\n")),(0,s.kt)("p",null,"If you include a valid calldata decoder, the appearance of the transaction's data on the user's Lattice should transform from a raw hex string to a markdown-style version which displays the function name, parameter names, and values."),(0,s.kt)("h4",{id:"storing-calldata-decoders"},"Storing Calldata Decoders"),(0,s.kt)("p",null,"Although not necessary, in certain situations it may be advantageous to pre-save decoders to the Lattice. One advantage is that if the decoder is saved, you do not need to include it in the transaction request, which frees up some space. Additionally, pre-saving data may unlock certain security features depending on the decoder type."),(0,s.kt)("p",null,"You can use the following API:"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Please see API docs for all options. Also see tests in ",(0,s.kt)("inlineCode",{parentName:"p"},"test/signing/evm.ts")," for examples on usage.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"addDecoders"),": Allows the user to add a series of calldata decoders for a specific decoder type (e.g. EVM). This will prompt the user to approve these decoders on the target Lattice before returning success."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"getDecoders"),": Fetch ",(0,s.kt)("inlineCode",{parentName:"li"},"n")," consecutive decoders for a specific type, starting a specific index."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"removeDecoders"),": Remove a set of included decoders for a specific type. You can also set a flag to remove all decoders for a specific type.")),(0,s.kt)("h4",{id:"1\ufe0f\u20e3--evm"},"1\ufe0f\u20e3  EVM"),(0,s.kt)("p",null,"EVM transactions serialize calldata according to the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/latest/abi-spec.html"},"Ethereum ABI specification"),". The first four bytes of a transaction's ",(0,s.kt)("inlineCode",{parentName:"p"},"data"),' represent the "function selector", which is (sort of) a unique identifier for a given function. You can build the calldata decoder data by either parsing a ',(0,s.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/api/utils/abi/formats/#abi-formats--solidity"},"Solidity JSON ABI")," object (which you can fetch from ",(0,s.kt)("a",{parentName:"p",href:"https://etherscan.io"},"Etherscan"),") or by parsing an ABI canonical name (you can get this from ",(0,s.kt)("a",{parentName:"p",href:"https://www.4byte.directory"},"4byte"),"). ",(0,s.kt)("em",{parentName:"p"},"Using the Solidity JSON ABI is recommended"),"."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"We do not support 100% of all edge cases in the ABI specification, but we do support the vast majority of types.  Please open a pull request or an issue if your request fails to decode on a Lattice."))),(0,s.kt)("h5",{id:"example-usage-see-testsigningevmts-for-more-examples"},"Example Usage (see ",(0,s.kt)("inlineCode",{parentName:"h5"},"test/signing/evm.ts")," for more examples)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Calldata } from 'gridplus-sdk';\nconst EVMCalldata = Calldata.EVM;\n\nconst tx = {an @ethereumjs/tx object}\nconst selector = tx.data.slice(0, 4).toString('hex'); // must be a hex string\n\n// 1. Test JSON ABI object\n\n// First get the decoder data\nconst abi = {a Solidity JSON ABI object fetched from Etherscan}\n// Add the decoder to the request and the transaction should get marked down\nconst req = {\n  signerPath,\n  curveType: Constants.SIGNING.CURVES.SECP256K1,\n  hashType: Constants.SIGNING.HASHES.KECCAK256,\n  encodingType: Constants.SIGNING.ENCODINGS.EVM,\n  payload: tx.getMessageToSign(false), // will serialize the transaction\n  decoder: EVMCalldata.parsers.parseSolidityJSONABI(selector, abi)\n};\nconst sig = await client.sign(req)\n\n// 2. Test canonical name type\n\nconst canonicalName = 'myFunction(bytes,uint256)'; // assume this is the function being used\nreq.decoder = EVMCalldata.parsers.parseCanonicalName(selector, canonicalName);\nconst sig = await client.sign(req)\n")),(0,s.kt)("h4",{id:"param-names"},"Param Names"),(0,s.kt)("p",null,"There are two things to note about parameter names in EVM calldata decoding:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The canonical name alone validates the function name and the parameter types, but it does ",(0,s.kt)("em",{parentName:"li"},"not")," validate the parameter names (look at any canonical name and you will not find parameter names defined). This means that while we can send calldata decoder info in a request, a user cannot validate the ",(0,s.kt)("em",{parentName:"li"},"parameter")," names unless the decoder has been pre-saved to the device. If a decoder was pre-saved, its param names will show a \u2714\ufe0f icon on the decoder screen."),(0,s.kt)("li",{parentName:"ul"},"Using ",(0,s.kt)("inlineCode",{parentName:"li"},"parseCanonicalName")," will result in your decoder's param names being numerical values (#1, #2, etc) instead of the parameter names. This is because, again, the canonical name does not include parameter names. Therefore we do not recommend using ",(0,s.kt)("inlineCode",{parentName:"li"},"parseCanonicalName")," if you have a Solidity JSON ABI object available and we definitely do not recommend ",(0,s.kt)("em",{parentName:"li"},"saving")," decoders parsed from canonical names.")),(0,s.kt)("h2",{id:"-legacy-signing"},"\ud83d\udcdc Legacy Signing"),(0,s.kt)("p",null,"Prior to general signing, request data was sent to the Lattice in preformatted ways and was used to build the transaction in firmware. We are phasing out this mechanism, but for now it is how you request Ethereum, Bitcoin, and Ethereum-Message signatures. These signing methods are accessed using the ",(0,s.kt)("inlineCode",{parentName:"p"},"currency")," flag in the request data."),(0,s.kt)("h3",{id:"\u03be-ethereum-transaction"},"\u039e Ethereum (Transaction)"),(0,s.kt)("p",null,"All six Ethereum transactions must be specified in the request data along with a signer path."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Example: requesting signature on Ethereum transaction")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const txData = {\n  nonce: '0x02',\n  gasPrice: '0x1fe5d61a00',\n  gasLimit: '0x034e97',\n  to: '0x1af768c0a217804cfe1a0fb739230b546a566cd6',\n  value: '0x01cba1761f7ab9870c',\n  data: '0x17e914679b7e160613be4f8c2d3203d236286d74eb9192f6d6f71b9118a42bb033ccd8e8',\n}\n\nconst reqData = {\n  currency: 'ETH',\n  data: {\n    signerPath: [\n      0x80000000 + 44,\n      0x80000000 + 60,\n      0x80000000,\n      0,\n      0,\n    ],\n    ...txData,\n    chain: 5, // Defaults to 1 (i.e. mainnet)\n  }\n}\n\nconst sig = await client.sign(reqData)\n")),(0,s.kt)("h3",{id:"\u03be-ethereum-message"},"\u039e Ethereum (Message)"),(0,s.kt)("p",null,"Two message protocols are supported for Ethereum: ",(0,s.kt)("inlineCode",{parentName:"p"},"personal_sign")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"sign_typed_data"),"."),(0,s.kt)("h4",{id:"personal_sign"},(0,s.kt)("inlineCode",{parentName:"h4"},"personal_sign")),(0,s.kt)("p",null,"This is a protocol to display a simple, human readable message. It includes a prefix to avoid accidentally signing sensitive data. The message included should be a string."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"protocol")," must be specified as ",(0,s.kt)("inlineCode",{parentName:"strong"},'"signPersonal"')),"."),(0,s.kt)("h5",{id:"example-requesting-signature-on-ethereum-personal_sign-message"},"Example: requesting signature on Ethereum ",(0,s.kt)("inlineCode",{parentName:"h5"},"personal_sign")," message"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const reqData = {\n  currency: 'ETH_MSG',\n  data: {\n    signerPath: [\n      0x80000000 + 44,\n      0x80000000 + 60,\n      0x80000000,\n      0,\n      0,\n    ],\n    protocol: 'signPersonal' // You must use this string to specify this protocol\n    payload: 'my message to sign'\n  }\n}\n\nconst sig = await client.sign(reqData)\n")),(0,s.kt)("h4",{id:"sign_typed_data"},(0,s.kt)("inlineCode",{parentName:"h4"},"sign_typed_data")),(0,s.kt)("p",null,"This is used in protocols such as EIP712. It is meant to be an encoding for JSON-like data that can be more human readable."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Only ",(0,s.kt)("inlineCode",{parentName:"p"},"sign_typed_data")," V3 and V4 are supported."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"protocol")," must be specified as ",(0,s.kt)("inlineCode",{parentName:"strong"},'"eip712"')),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const message = {\n  hello: 'i am a message',\n  goodbye: 1\n}\nconst reqData = {\n  currency: 'ETH_MSG',\n  data: {\n    signerPath: [\n      0x80000000 + 44,\n      0x80000000 + 60,\n      0x80000000,\n      0,\n      0,\n    ],\n    protocol: 'eip712' // You must use this string to specify this protocol\n    payload: message\n  }\n}\n\nconst sig = await client.sign(reqData)\n")),(0,s.kt)("h3",{id:"-bitcoin"},"\u20bf Bitcoin"),(0,s.kt)("p",null,"Bitcoin transactions can be requested by including a set of UTXOs, which include the signer derivation path and spend type. The same ",(0,s.kt)("inlineCode",{parentName:"p"},"purpose")," values are used to determine how UTXOs should be signed:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If ",(0,s.kt)("inlineCode",{parentName:"li"},"purpose = 44'"),", the input will be signed with p2pkh"),(0,s.kt)("li",{parentName:"ul"},"If ",(0,s.kt)("inlineCode",{parentName:"li"},"purpose = 49'"),", the input will signed with p2sh-p2wpkh"),(0,s.kt)("li",{parentName:"ul"},"If ",(0,s.kt)("inlineCode",{parentName:"li"},"purpose = 84'"),", the input will be signed with p2wpkh")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"purpose")," of the ",(0,s.kt)("inlineCode",{parentName:"p"},"signerPath")," in the given previous output (a.k.a. UTXO) is used to make the above determination."),(0,s.kt)("h4",{id:"example-requesting-btc-transactions"},"Example: requesting BTC transactions"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const p2wpkhInputs = [\n  {\n    // Hash of transaction that produced this UTXO\n    txHash: "2aba3db3dc5b1b3ded7231d90fe333e184d24672eb0b6466dbc86228b8996112",\n    // Value of this UTXO in satoshis (1e8 sat = 1 BTC)\n    value: 100000,\n    // Index of this UTXO in the set of outputs in this transaction\n    index: 3,\n    // Owner of this UTXO. Since `purpose` is 84\' this will be spent with p2wpkh,\n    // meaning this is assumed to be a segwit address (starting with bc1)\n    signerPath: [\n      0x80000000 + 84,\n      0x80000000,\n      0x80000000,\n      0,\n      12\n    ]\n  }\n]\n\nconst reqData = {\n  currency: "BTC",\n  data: {\n    prevOuts: p2wpkhInputs,\n    // Recipient can be any legacy, wrapped segwit, or segwit address\n    recipient: "1FKpGnhtR3ZrVcU8hfEdMe8NpweFb2sj5F",\n    // Value (in sats) must be <= (SUM(prevOuts) - fee)\n    value: 50000,\n    // Fee (in sats) goes to the miner\n    fee: 20000,\n    // SUM(prevOuts) - fee goes to the change recipient, which is an\n    // address derived in the same wallet. Again, the `purpose` in this path \n    // determines what address the BTC will be sent to, or more accurately how \n    // the UTXO is locked -- e.g., p2wpkh unlocks differently than p2sh-p2wpkh\n    changePath: [\n      0x80000000 + 84,\n      0x80000000,\n      0x80000000,\n      1, // Typically the change path includes a `1` here\n      0\n    ]\n  }\n}\n\nconst sig = await client.sign(reqData)\n')))}m.isMDXComponent=!0}}]);