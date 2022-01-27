(function(){var t={1582:function(t,e,i){"use strict";var s=i(9963),n=i(6252),o=i(3577),r=i(5890),a=i(1460),l=i(3561);const c={class:"wrap"},h={style:{"padding-top":"2em",display:"flex","align-items":"center","justify-content":"center"},role:"main"},d={key:0},u={class:"container"},p={key:0,style:{"text-align":"left",width:"350px","margin-top":"2em"}},f={key:1},g={style:{"text-align":"left",width:"420px",margin:"0.5em auto 0.5em auto"}},m=(0,n.Uk)(" Adding "),w={class:"coldlight"},k=(0,n.Uk)(" ("),A={class:"highlight"},b=["value","max"],y={key:2,class:"section"},v=(0,n.uE)('<h2>You are all set to start pinning 👍</h2><hr style="margin:3em 0;"><ol><li> Enter any valid Tezos wallet address into the search bar above. This fetches the NFT metadata from <a href="https://data.objkt.com/docs/">data.objkt.com</a>. </li><li> The metadata fetching is pretty fast but depending on the size of a collection, the actual <a href="https://docs.ipfs.io/how-to/pin-files/">pinning</a> could take some time to complete. The intermediate state is preserved so if you refresh/close the tab it will pickup where it left off. </li><li> Everything is local to your web browser, no data/info is sent to any servers (except the initial query to <a href="https://data.objkt.com/docs/">data.objkt.com</a>). </li><li> Occassionally there might be timeouts when pinning large/slow files... you can restart the process by re-submitting the search. </li><li><p> You will continue to host the files for as long as your <span class="highlight">IPFS node</span> is online (you can close this tab once the pinning is complete). </p></li><li> Feel free to reach out to <a href="https://twitter.com/psychothan">@psychothan</a> or chime in on the <a href="https://discord.gg/kA8vFDUkr5">Discord server</a> if you have any questions, suggestions, or requests! </li></ol>',3),z=[v],P={key:1,style:{height:"50vh",display:"flex","align-items":"center","justify-content":"center"}},M=(0,n._)("h1",null,"GO to Your Computer!",-1),j=[M],D={class:"footer"},C=(0,n._)("div",null,[(0,n._)("a",{href:"https://twitter.com/psychothan"},[(0,n._)("img",{src:r,class:"icon"})]),(0,n._)("a",{href:"https://discord.gg/kA8vFDUkr5"},[(0,n._)("img",{src:a,class:"icon"})]),(0,n._)("a",{href:"https://github.com/psychothan/pinitforward"},[(0,n._)("img",{src:l,class:"icon"})])],-1),x={key:0},U=(0,n.Uk)(" 🚧 THIS "),Z=(0,n._)("span",{style:{"font-family":"'Jost', sans-serif"}},"dApp",-1),I=(0,n.Uk)(' IS PROVIDED "AS IS", '),H=(0,n._)("a",{style:{color:"white"},href:"https://github.com/psychothan/pinitforward/blob/main/LICENSE"},"WITHOUT WARRANTY",-1),F=(0,n.Uk)(" OF ANY KIND 🚧 "),T=[U,Z,I,H,F],W=(0,n._)("div",null,[(0,n.Uk)(" powered by "),(0,n._)("a",{href:"https://tzkt.io/",style:{color:"white"}},"TzKT API")],-1);function O(t,e,i,s,r,a){const l=(0,n.up)("search-pin"),v=(0,n.up)("ipfs-info"),M=(0,n.up)("objkt-table");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",c,[(0,n.Wm)(l,{online:r.online,onResults:a.pinObjkts,onProgress:a.fetchProgress},null,8,["online","onResults","onProgress"]),(0,n._)("main",h,[r.mobile?((0,n.wg)(),(0,n.iD)("div",P,j)):((0,n.wg)(),(0,n.iD)("div",d,[(0,n.Wm)(v,{onOnline:a.updateStatus,onIpfs:a.updateIpfs,objkts:r.objkts},null,8,["onOnline","onIpfs","objkts"]),(0,n._)("div",u,[r.downloading?((0,n.wg)(),(0,n.iD)("h2",p," Fetching Objkt Metadata"+(0,o.zw)(".".repeat(r.numEllipses%4)),1)):r.pinning?((0,n.wg)(),(0,n.iD)("div",f,[(0,n._)("h3",g,[m,(0,n._)("span",w,(0,o.zw)(r.pinProgress+r.timeouts.length+1)+" of "+(0,o.zw)(r.toPin)+" Objkts",1),k,(0,n._)("span",A,(0,o.zw)(r.timeouts.length)+" timeouts",1),(0,n.Uk)(")"+(0,o.zw)(".".repeat(r.numEllipses%4)),1)]),(0,n._)("progress",{value:r.pinProgress+r.timeouts.length,max:r.toPin,style:{width:"600px"}},null,8,b)])):(0,n.kq)("",!0),r.online&&!r.pinning&&!r.downloading&&Object.keys(r.objkts).length<1?((0,n.wg)(),(0,n.iD)("div",y,z)):(0,n.kq)("",!0)]),(0,n._)("div",null,[(0,n.Wm)(M,{objkts:r.objkts,ipfs:r.ipfs,onUnpin:a.updateObjkts},null,8,["objkts","ipfs","onUnpin"])])]))])]),(0,n._)("footer",null,[(0,n._)("div",D,[C,r.mobile?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",x,T)),W])])],64)}var L=i(9321);const Y=t=>((0,n.dD)("data-v-21b163d6"),t=t(),(0,n.Cn)(),t),E={class:"bar"},G={class:"container"},S=Y((()=>(0,n._)("input",{type:"submit",value:"📍"},null,-1))),N={id:"status"};function B(t,e,i,r,a,l){return(0,n.wg)(),(0,n.iD)("header",null,[(0,n._)("nav",E,[(0,n._)("div",G,[(0,n._)("form",{class:"search",onSubmit:e[1]||(e[1]=(0,s.iM)(((...t)=>l.findObjkts&&l.findObjkts(...t)),["prevent"]))},[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>a.address=t),placeholder:"Enter Tezos wallet address to pin assets (both creations and collection)",class:"text"},null,512),[[s.nr,a.address]]),S],32),(0,n._)("div",N,"IPFS "+(0,o.zw)(i.online?"🟢":"🔴"),1)])])])}var K={name:"Nav",props:["online"],emits:["results","progress"],data(){return{address:""}},methods:{async findObjkts(){if(this.$emit("progress",!0),navigator.storage&&navigator.storage.persist){const t=await navigator.storage.persist();console.log(`Persisted storage granted: ${t}`)}const t=await this.fetchObjkts(this.address),e=[];for(const i of t){const t=await(0,L.U2)(i.token.id);t||e.push(i)}0===e.length?(this.$emit("results",[]),alert("Search returned no new results... all NFTs are currently pinned.")):this.$emit("results",e)},async fetchObjkts(t){let e=0;const i=1e4;if(!t.startsWith("tz"))throw alert("Not a valid Tezos address"),"Not a valid Tezos address";let s,n=[];do{const s=await fetch(`https://staging.api.tzkt.io/v1/tokens/balances?token.standard=fa2&sort.desc=id&limit=${i}&account=${t}&offset=${e}`);if(s.errors)throw console.error(s.errors),alert(`Token metadata fetch failed for ${t}`),"Fetch Failed";const o=await s.json();n=[...n,...o],e+=i}while(s?.length===i);return n}}},R=i(3744);const X=(0,R.Z)(K,[["render",B],["__scopeId","data-v-21b163d6"]]);var J=X,V=i(8302),q=i(5746);const _=t=>((0,n.dD)("data-v-85cfcde6"),t=t(),(0,n.Cn)(),t),Q={class:"container"},$={key:0},tt={class:"flex"},et=_((()=>(0,n._)("img",{src:V,alt:"IPFS logo",style:{width:"auto",height:"8em"}},null,-1))),it={style:{"text-align":"right","padding-left":"2em"}},st={key:0},nt=(0,n.Uk)(" Connected to "),ot={class:"coldlight"},rt=(0,n.Uk)(" Pinning "),at={class:"coldlight"},lt=(0,n.Uk)(" Hosting "),ct={class:"coldlight"},ht=["value","max"],dt={key:1,class:"section"},ut=_((()=>(0,n._)("h2",null,"Hmmmm... I can't seem to connect to your local IPFS node 🤔",-1))),pt=_((()=>(0,n._)("hr",{style:{margin:"3em 0"}},null,-1))),ft=_((()=>(0,n._)("ol",null,[(0,n._)("li",null,[(0,n.Uk)(" Download "),(0,n._)("a",{href:"https://docs.ipfs.io/install/ipfs-desktop/#install-instructions"},"IPFS Desktop"),(0,n.Uk)(" (or the commandline client) for your respective operating system. ")]),(0,n._)("li",null,[(0,n.Uk)(" Make sure your node is running: "),(0,n._)("span",{class:"highlight"},"menubar/taskbar"),(0,n.Uk)(" for the desktop app or "),(0,n._)("code",null,"ipfs daemon"),(0,n.Uk)(" on the command-line. ")]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Uk)(" Add "),(0,n._)("code",null,"https://pinitforward.xyz"),(0,n.Uk)(" to the "),(0,n._)("a",{href:"https://github.com/ipfs/ipfs-webui#configure-ipfs-api-cors-headers"},"cross-origin requests list"),(0,n.Uk)(" and restart your node. ")]),(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Uk)(" Commandline 👉 "),(0,n._)("code",null,'/bin/bash -c "$(curl -fsSL https://pinitforward.xyz/cors-config.sh)"')]),(0,n._)("li",null,[(0,n.Uk)(" Desktop 👇 "),(0,n._)("a",{href:"../../img/ipfs-cors.png"},[(0,n._)("img",{src:q,alt:"add https://pinitforward.xyz\n            to IPFS config",style:{margin:"1em 0",width:"100%"}})])])])]),(0,n._)("li",null,[(0,n.Uk)(" Still not working?? Feel free to reach out to "),(0,n._)("a",{href:"https://twitter.com/psychothan"},"@psychothan"),(0,n.Uk)(" or chime in on the "),(0,n._)("a",{href:"https://discord.gg/kA8vFDUkr5"},"Discord server"),(0,n.Uk)(" 🤗 ")])],-1))),gt=[ut,pt,ft];function mt(t,e,i,s,r,a){return(0,n.wg)(),(0,n.iD)("div",Q,[r.online?((0,n.wg)(),(0,n.iD)("div",$,[(0,n._)("div",tt,[et,(0,n._)("div",it,[r.peers?((0,n.wg)(),(0,n.iD)("p",st,[nt,(0,n._)("span",ot,(0,o.zw)(r.peers.length)+" peers",1)])):(0,n.kq)("",!0),(0,n._)("div",null,[(0,n._)("p",null,[rt,(0,n._)("span",at,(0,o.zw)(Object.keys(i.objkts).length)+" Objkts",1)]),(0,n._)("p",null,[lt,(0,n._)("span",ct,(0,o.zw)(r.size)+"/"+(0,o.zw)(r.max)+" GB",1)]),(0,n._)("progress",{value:r.size,max:r.max,class:(0,o.C_)(a.progressClass)},null,10,ht)])])])])):((0,n.wg)(),(0,n.iD)("div",dt,gt))])}var wt=i(712),kt={name:"IPFS Client",emits:["online","ipfs"],props:["objkts"],data(){return{agentVersion:void 0,version:void 0,pins:void 0,peers:void 0,status:"Connecting to IPFS...",online:!1,ipfs:void 0,stats:{},size:void 0,max:void 0}},computed:{progressClass(){const t=this.size/this.max;return t>.3?t>.7?"high":"med":"low"}},created(){this.getIpfsNodeInfo(),this.timerID=setInterval(this.getIpfsNodeInfo,1e3)},methods:{async getIpfsNodeInfo(){this.ipfs=this.ipfs||(0,wt.Ue)("/ip4/127.0.0.1/tcp/5001",{protocol:"https"}),this.$emit("ipfs",this.ipfs);try{await this.ipfs.id(),this.online=!0,this.$emit("online",!0);const{agentVersion:t,id:e}=await this.ipfs.id(),i=await this.ipfs.swarm.peers(),s=await this.ipfs.repo.stat();this.agentVersion=t,this.id=e,this.peers=i,this.stats=s,this.size=(Number(s.repoSize)/1e9).toFixed(2),this.max=(Number(s.storageMax)/1e9).toFixed(2)}catch(t){"TypeError"==t.name?(this.online=!1,this.$emit("online",!1)):this.$emit("online",!1)}}}};const At=(0,R.Z)(kt,[["render",mt],["__scopeId","data-v-85cfcde6"]]);var bt=At;const yt=t=>((0,n.dD)("data-v-ce67621c"),t=t(),(0,n.Cn)(),t),vt={key:0,style:{width:"1440px",margin:"auto auto"}},zt=yt((()=>(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"Objkt"),(0,n._)("th",null,"Title"),(0,n._)("th",null,"Creator"),(0,n._)("th",null,"Medium"),(0,n._)("th",null,"Description"),(0,n._)("th",null,"Token"),(0,n._)("th",null,"Unpin")])],-1))),Pt=["href"],Mt={key:1},jt={style:{"font-style":"italic"}},Dt=["href"],Ct={key:1},xt=["href"],Ut={key:1},Zt={key:0},It={style:{"text-align":"center"}},Ht=["onClick"],Ft={class:"pagination"},Tt=["onClick"];function Wt(t,e,i,s,r,a){return(0,n.wg)(),(0,n.iD)(n.HY,null,[a.curPage.length>0?((0,n.wg)(),(0,n.iD)("table",vt,[zt,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.curPage,(t=>((0,n.wg)(),(0,n.iD)("tr",{key:t?.id?.toString()},[(0,n._)("td",null,[a.objktLink(t)?((0,n.wg)(),(0,n.iD)("a",{key:0,href:a.objktLink(t)},(0,o.zw)(t.tokenId.length>6?t.tokenId.substring(0,3)+"..."+t.tokenId.slice(-3):t.tokenId),9,Pt)):((0,n.wg)(),(0,n.iD)("span",Mt,(0,o.zw)(t.tokenId.substring(0,3)+"..."+t.tokenId.slice(-3)),1))]),(0,n._)("td",jt,[t.metadata?.artifactUri?((0,n.wg)(),(0,n.iD)("a",{key:0,href:`https://dweb.link/ipfs/${t.metadata?.artifactUri?.split("//")[1]}`},(0,o.zw)(t.metadata.name||"Untitled"),9,Dt)):((0,n.wg)(),(0,n.iD)("span",Ct,(0,o.zw)(t.metadata.name||"Untitled"),1))]),(0,n._)("td",null,[a.creatorLink(t)?((0,n.wg)(),(0,n.iD)("a",{key:0,href:a.creatorLink(t)},(0,o.zw)(a.creatorAlias(t)),9,xt)):((0,n.wg)(),(0,n.iD)("span",Ut,(0,o.zw)(a.creatorAlias(t)),1))]),(0,n._)("td",null,[t?.metadata?.formats?((0,n.wg)(),(0,n.iD)("span",Zt,(0,o.zw)(t?.metadata?.formats.map((t=>t.mimeType)).join(" | ")),1)):(0,n.kq)("",!0)]),(0,n._)("td",null,(0,o.zw)(t?.metadata?.description),1),(0,n._)("td",null,(0,o.zw)(t?.contract?.alias?t.contract.alias:" "),1),(0,n._)("td",It,[(0,n._)("span",{onClick:e=>a.unpin(t.id),class:"unpin"},"❌",8,Ht)])])))),128))])])):(0,n.kq)("",!0),(0,n._)("div",Ft,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.numPages,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t?.at(1),onClick:e=>a.goToPage(t?.at(1)),class:(0,o.C_)({current:r.page===t?.at(1)})},(0,o.zw)(t?.at(0)),11,Tt)))),128))])],64)}var Ot={name:"Objkts",props:["objkts","ipfs"],emits:["unpin"],data(){return{page:0,perPage:10}},mounted(){this.goToPage(0)},computed:{numPages(){let t=[];const e=Math.ceil(Object.keys(this.objkts||{}).length/this.perPage);if(0===e)return[];for(let n=0;n<e;n++)t.push([(n+1).toString(),n]);const i=t.shift(),s=0===t.length?[]:[t.pop()];return t.length>7&&(t=this.page<3?[...t.slice(0,3),["...",4]]:this.page>e-4?[["...",e-5],...t.slice(e-5)]:[["...",this.page-2],...t.slice(Math.max(this.page-2,0),Math.min(this.page+2,t.length)),["...",this.page+3]]),[i,...t,...s]},curPage(){const t=this.perPage*this.page,e=Object.values(this.objkts).slice(t,t+this.perPage);return e}},methods:{goToPage(t){this.page=t},creatorLink(t){return!t?.metadata?.creators||t?.metadata?.creators?.length<1?"":`https://tzkt.io/${t.metadata.creators[0]}`},creatorAlias(t){let e="";return e=!t?.metadata?.creators||t?.metadata?.creators?.length<1?t.contract?.address:t.metadata.creators[0],e.substring(0,5)+"..."+e.substring(e.length-5)},objktLink(t){const e={"hic et nunc NFTs":"https://hic.af/objkt/","Versum Items":"https://versum.xyz/token/versum/","FXHASH GENTK":"https://www.fxhash.xyz/gentk/"};return t?.contract?.alias&&e[t.contract.alias]?e[t.contract.alias]+t.tokenId:`https://tzkt.io/${t?.contract?.address}`},async unpin(t){const e=["artifactUri","displayUri","thumbnailUri"],i=await(0,L.U2)(t),s=[];console.log(`Unpinning objkt ${i.id}`);for(let n of e)if(i[n]){const t=i[n].match(/^ipfs:\/\/(\S+)$/);t&&s.push(t[1])}for await(let n of this.ipfs.pin.rmAll(s))console.log(`Removed CID: ${n}`);await(0,L.IV)(t),this.$emit("unpin",t)}}};const Lt=(0,R.Z)(Ot,[["render",Wt],["__scopeId","data-v-ce67621c"]]);var Yt=Lt,Et={name:"Pin it forward",components:{"search-pin":J,"ipfs-info":bt,"objkt-table":Yt},data(){return{online:!1,ipfs:void 0,objkts:{},pinProgress:0,toPin:0,mobile:!1,downloading:!1,pinning:!1,statusMsg:"Fetching Objkt Metadata",numEllipses:0,timeouts:[]}},created(){window.addEventListener("resize",this.onResize)},mounted(){this.onResize(),(0,L.qh)().then((t=>{console.log(`${t.length} Objkts found in local storage`);const e={};for(const i of t)e[i[0]]=i[1];this.objkts=e}))},methods:{onResize(){this.mobile=!(window.innerWidth>960)},updateStatus(t){this.online=t},updateIpfs(t){this.ipfs=t},updateObjkts(t){delete this.objkts[t]},fetchProgress(){this.downloading=!0,this.fetchTimer=setInterval((()=>{this.numEllipses+=1}),800)},async pinObjkts(t){this.downloading=!1,this.pinning=!0;const e=["artifactUri","displayUri","thumbnailUri"];this.pinProgress=0,this.timeouts=[],this.toPin=t.length;for(let s of t){const t=new Set,n=s.token.metadata;console.log(`Processing objkt ${s.token.tokenId} of ${s.token.contract.address}`);for(let i of e)if(n[i]){const e=n[i].match(/^ipfs:\/\/([^\\?]+)(\\?.*)?$/);e&&t.add(e[1])}for(let e of n.formats||[]){const i=e.uri.match(/^ipfs:\/\/([^\\?]+)(\\?.*)?$/);i&&t.add(i[1])}const o=[];for(let e of t.values())o.push({cid:e,recursive:!0});try{for await(let t of this.ipfs.pin.addAll(o,{timeout:6e4}))console.log(`Pinned CID: ${t}`)}catch(i){if(console.log(i),"TimeoutError"==i.name){console.log(`Pinning ${n.name} failed due to timeout. Continuing...`),this.timeouts.push({cids:o,token:s.token});continue}throw i}console.log(`Stored ${s.token.id}`),await(0,L.t8)(s.token.id,s.token),this.objkts[s.token.id]=s.token,this.pinProgress+=1}for(const[s,n]of this.timeouts.entries()){try{for await(let t of this.ipfs.pin.addAll(n.cids,{timeout:6e5}))console.log(`Pinned CID: ${t}`),this.timeouts.splice(s,1)}catch(i){if(console.log(i),"TimeoutError"==i.name){console.log("Pinning failed due to timeout. Continuing...");continue}throw i}console.log(`Stored ${n.token.id}`),await(0,L.t8)(n.token.id,n.token),this.objkts[n.token.id]=n.token,this.pinProgress+=1}this.pinning=!1}}};const Gt=(0,R.Z)(Et,[["render",O]]);var St=Gt;const Nt=(0,s.ri)(St);Nt.mount("#app")},1460:function(t,e,i){"use strict";t.exports=i.p+"img/discord.59a00c2e.svg"},3561:function(t,e,i){"use strict";t.exports=i.p+"img/github.0900f739.svg"},5890:function(t,e,i){"use strict";t.exports=i.p+"img/twitter.1ab0bb52.svg"},5746:function(t,e,i){"use strict";t.exports=i.p+"img/ipfs-cors.afb752c7.png"},8302:function(t){"use strict";t.exports="data:image/png;base64,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"},2611:function(){},8795:function(){}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var o=e[s]={exports:{}};return t[s].call(o.exports,o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(e,s,n,o){if(!s){var r=1/0;for(h=0;h<t.length;h++){s=t[h][0],n=t[h][1],o=t[h][2];for(var a=!0,l=0;l<s.length;l++)(!1&o||r>=o)&&Object.keys(i.O).every((function(t){return i.O[t](s[l])}))?s.splice(l--,1):(a=!1,o<r&&(r=o));if(a){t.splice(h--,1);var c=n();void 0!==c&&(e=c)}}return e}o=o||0;for(var h=t.length;h>0&&t[h-1][2]>o;h--)t[h]=t[h-1];t[h]=[s,n,o]}}(),function(){i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.p="/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,o,r=s[0],a=s[1],l=s[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(l)var h=l(i)}for(e&&e(s);c<r.length;c++)o=r[c],i.o(t,o)&&t[o]&&t[o][0](),t[r[c]]=0;return i.O(h)},s=self["webpackChunkpin_it_forward"]=self["webpackChunkpin_it_forward"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(1582)}));s=i.O(s)})();
//# sourceMappingURL=app.a712632c.js.map