(this["webpackJsonpnft-minter"]=this["webpackJsonpnft-minter"]||[]).push([[0],{147:function(e,t,n){},148:function(e,t,n){},186:function(e,t){},190:function(e,t){},193:function(e,t){},202:function(e,t){},203:function(e,t){},233:function(e,t){},235:function(e,t){},246:function(e,t){},248:function(e,t){},261:function(e,t){},263:function(e,t){},280:function(e,t){},282:function(e,t){},289:function(e,t){},290:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mintNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},291:function(e,t,n){"use strict";n.r(t);var a=n(20),r=n.n(a),s=n(124),i=n.n(s),u=(n(147),n(148),n(11)),p=n.n(u),o=n(21),c=n(35),d="a0ad96baf598880e7359",l="78082148559aa3e8b50cae4ace88ca322d5fe5c12d535b385e0e70432ce725cb";n(72).config();var y=n(152),m=function(){var e=Object(o.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.pinata.cloud/pinning/pinJSONToIPFS",e.abrupt("return",y.post("https://api.pinata.cloud/pinning/pinJSONToIPFS",t,{headers:{pinata_api_key:d,pinata_secret_api_key:l}}).then((function(e){return{success:!0,pinataUrl:"https://gateway.pinata.cloud/ipfs/"+e.data.IpfsHash}})).catch((function(e){return console.log(e),{success:!1,message:e.message}})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=13;break}return e.prev=1,(n=new FormData).append("file",t),e.next=6,y({method:"post",url:"https://api.pinata.cloud/pinning/pinFileToIPFS",data:n,headers:{pinata_api_key:"".concat(d),pinata_secret_api_key:"".concat(l),"Content-Type":"multipart/form-data"}});case 6:return a=e.sent,e.abrupt("return",{success:!0,pinataUrl:"https://gateway.pinata.cloud/ipfs/"+a.data.IpfsHash,pinataHash:a.data.IpfsHash});case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",{success:!1,message:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),b=n(8);n(72).config();var h=(0,n(292).createAlchemyWeb3)("https://polygon-mumbai.g.alchemy.com/v2/62nC9HNCK7VsuD_oOXhLy4ear6L5sL0H"),w=n(290),x="0x4C4a07F737Bf57F6632B6CAB089B78f62385aCaE",j=function(){var e=Object(o.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=14;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_requestAccounts"});case 4:return t=e.sent,n={status:"\ud83d\udc46\ud83c\udffd Write a message in the text-field above.",address:t[0]},e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 12:e.next=15;break;case 14:return e.abrupt("return",{address:"",status:Object(b.jsx)("span",{children:Object(b.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(b.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=17;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_accounts"});case 4:if(!((t=e.sent).length>0)){e.next=9;break}return e.abrupt("return",{address:t[0],status:"\ud83d\udc46\ud83c\udffd Write a message in the text-field above."});case 9:return e.abrupt("return",{address:"",status:"\ud83e\udd8a Connect to Metamask using the top right button."});case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 15:e.next=18;break;case 17:return e.abrupt("return",{address:"",status:Object(b.jsx)("span",{children:Object(b.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(b.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(o.a)(p.a.mark((function e(t,n,a){var r,s,i,u,o,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.trim()&&""!==n.trim()){e.next=2;break}return e.abrupt("return",{success:!1,status:"\u2757Please make sure all fields are completed before minting."});case 2:if(null!==a){e.next=4;break}return e.abrupt("return",{success:!1,status:"\u2757Please upload the file you want to mint as NFT."});case 4:return e.next=6,f(a);case 6:if((r=e.sent).success){e.next=9;break}return e.abrupt("return",{success:!1,status:"\ud83d\ude22 "+r.message});case 9:return(s=new Object).name=t,s.image=r.pinataUrl,s.description=n,e.next=15,m(s);case 15:if((i=e.sent).success){e.next=18;break}return e.abrupt("return",{success:!1,status:"\ud83d\ude22 Something went wrong while uploading your tokenURI."});case 18:return u=i.pinataUrl,e.next=21,new h.eth.Contract(w,x);case 21:return window.contract=e.sent,o={to:x,from:window.ethereum.selectedAddress,data:window.contract.methods.mintNFT(window.ethereum.selectedAddress,u).encodeABI()},e.prev=23,e.next=26,window.ethereum.request({method:"eth_sendTransaction",params:[o]});case 26:return c=e.sent,e.abrupt("return",{success:!0,status:"\u2705 Check out your transaction on Etherscan: https://goerli.etherscan.io/tx/"+c});case 30:return e.prev=30,e.t0=e.catch(23),e.abrupt("return",{success:!1,status:"\ud83d\ude25 Something went wrong: "+e.t0.message});case 33:case"end":return e.stop()}}),e,null,[[23,30]])})));return function(t,n,a){return e.apply(this,arguments)}}(),T=function(e){var t=Object(a.useState)(""),n=Object(c.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(""),u=Object(c.a)(i,2),d=u[0],l=u[1],y=Object(a.useState)(""),m=Object(c.a)(y,2),f=m[0],h=m[1],w=Object(a.useState)(""),x=Object(c.a)(w,2),T=x[0],k=x[1],O=Object(a.useState)(""),M=Object(c.a)(O,2),I=(M[0],M[1],Object(a.useState)(null)),F=Object(c.a)(I,2),C=F[0],S=F[1],_=function(){var e=Object(o.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,l(t.status),s(t.address);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var A=function(){var e=Object(o.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(f,T,C);case 2:t=e.sent,n=t.status,l(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(t.target.files[0]);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)(Object(o.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,n=t.address,a=t.status,s(n),l(a),window.ethereum?window.ethereum.on("accountsChanged",(function(e){e.length>0?(s(e[0]),l("\ud83d\udc46\ud83c\udffd Write a message in the text-field above.")):(s(""),l("\ud83e\udd8a Connect to Metamask using the top right button."))})):l(Object(b.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(b.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]}));case 8:case"end":return e.stop()}}),e)}))),[]),Object(b.jsxs)("div",{className:"Minter",children:[Object(b.jsx)("button",{id:"walletButton",onClick:_,children:r.length>0?"Connected: "+String(r).substring(0,6)+"..."+String(r).substring(38):Object(b.jsx)("span",{children:"Connect Wallet"})}),Object(b.jsx)("br",{}),Object(b.jsx)("h1",{id:"title",children:"\ud83e\uddd9\u200d\u2642\ufe0f Awesome Chibyke NFT Minter"}),Object(b.jsx)("p",{children:'Simply add your asset\'s link, name, and description, then press "Mint."'}),Object(b.jsxs)("form",{children:[Object(b.jsx)("h2",{children:"\ud83d\uddbc Upload File: "}),Object(b.jsx)("input",{type:"file",placeholder:"Upload File",onChange:function(e){return N(e)}}),Object(b.jsx)("h2",{children:"\ud83e\udd14 Name: "}),Object(b.jsx)("input",{type:"text",placeholder:"e.g. My first NFT!",onChange:function(e){return h(e.target.value)}}),Object(b.jsx)("h2",{children:"\u270d\ufe0f Description: "}),Object(b.jsx)("input",{type:"text",placeholder:"e.g. Even cooler than cryptokitties ;)",onChange:function(e){return k(e.target.value)}})]}),Object(b.jsx)("button",{id:"mintButton",onClick:A,children:"Mint NFT"}),Object(b.jsx)("p",{id:"status",children:d})]})};var k=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(T,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,296)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),O()}},[[291,1,2]]]);
//# sourceMappingURL=main.287db18e.chunk.js.map