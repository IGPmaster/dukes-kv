import{Q as rt,_ as nt,m as f,W as L,r as k,N as G,n as E,y as p,q as lt,o as s,c as o,a as t,J as j,F as x,s as $,u as i,z as m,R as ct,S as P,p as M,b as r,t as g,w as I,B as S,T as V,U as ot,M as A,V as F,X as dt,Y as _t,Z as at,$ as it}from"./Bz25RTwc.js";import{_ as D}from"./CgnyxvZK.js";import{_ as N}from"./DMzAGznB.js";const pt=rt("/images/PP-EN_red.svg"),O=new Map;function T(u,n={}){const d=Object.entries(n).sort(([a],[l])=>a.localeCompare(l)).map(([a,l])=>`${a}:${l}`).join("|");return`${u}|${d}`}function B(u){const n=O.get(u);return n?n.expiry&&n.expiry<Date.now()?(O.delete(u),null):n.value:null}function C(u,n,d=5){O.set(u,{value:n,expiry:Date.now()+d*60*1e3})}function J(u){return new Promise((n,d)=>{const a=new Image;a.onload=()=>n(u),a.onerror=d,a.src=u})}const mt={key:0,class:"loading-placeholder"},ut={class:"headWrap bg-tertiary_dark"},ht={class:"w-full"},xt=["href"],gt=["srcset","alt","title","onError"],yt=["src","alt","title","onError","onLoad"],vt={class:"container mx-auto text-center text-primary sig_terms lg:py-5 lg:w-3/4"},ft=["innerHTML"],$t={__name:"MainBanner",emits:["loaded"],setup(u,{emit:n}){const d=f(()=>L),a=k(!0),l=k(!1),c=k(null),y=n,e=f(()=>T("banner",{brandId:d.value,lang:G.value})),w=(_,b)=>{console.error(`🚫 ${_} Banner image failed to load:`,{lang:G.value,url:b,timestamp:new Date().toISOString()}),c.value={type:_,url:b}},K=_=>{console.log("✅ Banner image loaded successfully:",{lang:G.value,url:_,timestamp:new Date().toISOString()}),l.value=!0},z=async _=>{if(_!=null&&_.acf)try{await Promise.all([J(_.acf.image_full),J(_.acf.image_small),J(_.acf.trust_icons)])}catch(b){console.warn("Failed to preload some banner images:",b)}};return E(async()=>{try{const _=B(e.value);if(_){p.value=_,a.value=!1,y("loaded"),z(_[0]);return}await lt(),p.value&&(C(e.value,p.value,15),z(p.value[0]))}catch(_){console.error("Error in MainBanner:",_)}finally{a.value=!1,y("loaded")}}),(_,b)=>(s(),o(x,null,[a.value?(s(),o("div",mt,b[0]||(b[0]=[t("svg",{class:"spinner",viewBox:"0 0 50 50"},[t("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"3"})],-1)]))):j("",!0),t("div",ut,[(s(!0),o(x,null,$(i(p),h=>(s(),o("div",{key:h.id},[t("div",ht,[h.acf&&h.yoast_head_json?(s(),o("a",{key:0,href:i(m),style:{"margin-bottom":"-5px"}},[t("picture",null,[t("source",{media:"(min-width: 992px)",srcset:h.acf.image_full,alt:h.yoast_head_json.description,title:h.yoast_head_json.og_title,onError:H=>w("desktop",h.acf.image_full)},null,40,gt),t("img",{src:h.acf.image_small,class:"w-full",alt:h.yoast_head_json.description,title:h.yoast_head_json.og_title,style:{"min-width":"100vw","padding-top":"6rem"},width:"1920",height:"400",onError:H=>w("mobile",h.acf.image_small),onLoad:H=>K(h.acf.image_small)},null,40,yt)])],8,xt)):j("",!0)]),t("div",vt,[t("div",{class:"px-5 font-light text-xs",innerHTML:h.acf.sig_terms},null,8,ft)]),b[1]||(b[1]=ct('<main class="container mx-auto text-center py-4" data-v-4223e757><h1 class="site_heading text-primary text-lg md:text-2xl lg:text-4xl font-bold" data-v-4223e757> Dukes Casino - Your Casino! </h1></main><div class="container mx-auto" data-v-4223e757><div class="flex justify-center lg:pb-5 py-3" data-v-4223e757><img class="lg:w-2/5 w-7/8 place-items-center" src="'+pt+'" alt="100% Licensed and fast payouts" data-v-4223e757></div></div>',2))]))),128))])],64))}},bt=nt($t,[["__scopeId","data-v-4223e757"]]),kt={class:"py-10 md:py-20 bg-primary_bg"},wt={class:"lg:mb-4"},jt={class:"container mx-auto px-4 sm:px-6 lg:px-8"},Gt={class:"grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center"},Lt={class:"col-span-full lg:col-span-6"},Et={class:"gamesSectionHead text-primary text-center lg:text-left p-4 text-3xl font-bold"},It={class:"info_content text-[#bacfdc] font-light text-lg py-5 px-4"},Nt={class:"lg:col-span-2 p-4"},Tt={class:"flex justify-between items-center"},Bt={class:"text-center"},Ct={key:0,class:"loading-placeholder",role:"status","aria-live":"polite"},Ht={key:1,class:"container mx-auto px-4 sm:px-6 lg:px-8 py-10"},Mt={class:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"},St={class:"show show-first relative"},Dt=["href"],zt=["src","onError","alt","title"],Pt={class:"mask absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"},Kt=["href"],Vt={class:"gameDescr p-4 text-white text-center"},At={key:0},Ft={key:1,class:"material-icons text-4xl scale-150"},Jt={class:"container mx-auto px-4 sm:px-6 lg:px-8 mt-10"},Ot={class:"flex flex-col sm:flex-row items-center justify-between bg-tertiary_dark p-5 sm:p-10 rounded-sm"},Ut={class:"text-primary font-bold text-base md:text-2xl xl:text-4xl mb-4 sm:mb-0"},Wt=["href"],Rt={__name:"NewGames",setup(u){f(()=>L);const n=k(!0),d=f(()=>T("new-games",{lang:G.value}));return E(async()=>{try{const a=B(d.value);if(a){P.value=a,n.value=!1;return}await M(),C(d.value,P.value)}catch(a){console.error("Error in new Games:",a)}finally{n.value=!1}}),(a,l)=>{const c=D,y=N;return s(),o("div",kt,[t("div",wt,[t("div",jt,[t("div",Gt,[t("div",Lt,[t("p",Et,[r(c,{"translation-key":"new_games"})]),(s(!0),o(x,null,$(i(p),e=>(s(),o("div",{key:e.id},[t("p",It,g(e.acf.new_games_info),1)]))),128))]),t("div",Nt,[t("div",Tt,[r(y,{to:"all-games",class:"w-full rounded-md py-3 flex items-center justify-center bg-secondary_bg text-secondary uppercase cursor-pointer transition-all ease-in-out duration-500 hover:text-primary hover:bg-tertiary_dark hover:scale-110"},{default:I(()=>[t("span",Bt,[r(c,{"translation-key":"see_more"})]),l[0]||(l[0]=t("i",{class:"material-icons pl-2 font-extralight"},"arrow_forward",-1))]),_:1})])])])])]),n.value?(s(),o("div",Ct,l[1]||(l[1]=[t("svg",{class:"spinner animate-spin w-12 h-12",viewBox:"0 0 50 50"},[t("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"3"})],-1),t("span",{class:"sr-only"},"Loading...",-1)]))):(s(),o("div",Ht,[t("div",Mt,[(s(!0),o(x,null,$(i(P).slice(-16).reverse(),e=>(s(),o("div",{key:e.id,class:S(["item-"+e.id,"shadow-lg rounded-md"])},[t("div",St,[t("a",{href:i(m),target:"_blank"},[t("img",{class:"rounded-md w-full",src:e.image,onError:w=>e.image="newGameImg.jpg",loading:"lazy",alt:"Image of "+e.gameName+" online new. "+e.description,title:e.gameName+" - "+e.id,width:"200",height:"132"},null,40,zt)],8,Dt),t("div",Pt,[t("a",{href:i(m),target:"_blank"},[t("div",Vt,[e!=null&&e.description?(s(),o("div",At,g(e.description)+" from "+g(e.provider),1)):(s(),o("i",Ft,"play_arrow"))])],8,Kt)])])],2))),128))])])),t("div",Jt,[t("div",Ot,[t("div",Ut,[r(c,{"translation-key":"claim"})]),t("a",{href:i(m),class:"inline-block py-2 px-4 md:px-10 font-semibold rounded text-sm bg-secondary_bg text-secondary hover:opacity-90 transition-opacity duration-300 text-md md:text-xl xl:text-3xl"},[r(c,{"translation-key":"sign_up"})],8,Wt)])])])}}},Yt={class:"py-10 md:py-20 bg-primary_bg"},qt={class:"lg:mb-4"},Qt={class:"container mx-auto px-4 sm:px-6 lg:px-8"},Xt={class:"grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center"},Zt={class:"col-span-full lg:col-span-6"},te={class:"gamesSectionHead text-primary text-center lg:text-left p-4 text-3xl font-bold"},ee={class:"info_content text-[#bacfdc] font-light text-lg py-5 px-4"},se={class:"lg:col-span-2 p-4"},oe={class:"flex justify-between items-center"},ae={class:"text-center"},ie={key:0,class:"loading-placeholder",role:"status","aria-live":"polite"},ne={key:1,class:"container mx-auto px-4 sm:px-6 lg:px-8 py-10"},le={class:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"},re={class:"show show-first relative"},ce=["href"],de=["src","onError","alt","title"],_e={class:"mask absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"},pe=["href"],me={class:"gameDescr p-4 text-white text-center"},ue={key:0},he={key:1,class:"material-icons text-4xl scale-150"},xe={class:"container mx-auto px-4 sm:px-6 lg:px-8 mt-10"},ge={class:"flex flex-col sm:flex-row items-center justify-between bg-tertiary_dark p-5 sm:p-10 rounded-sm"},ye={class:"text-primary font-bold text-base md:text-2xl xl:text-4xl mb-4 sm:mb-0"},ve=["href"],fe={__name:"PopularGames",setup(u){f(()=>L);const n=k(!0),d=f(()=>T("popular-games",{lang:G.value}));return E(async()=>{try{const a=B(d.value);if(a){V.value=a,n.value=!1;return}await M(),C(d.value,V.value)}catch(a){console.error("Error in popular Games:",a)}finally{n.value=!1}}),(a,l)=>{const c=D,y=N;return s(),o("div",Yt,[t("div",qt,[t("div",Qt,[t("div",Xt,[t("div",Zt,[t("p",te,[r(c,{"translation-key":"popular_games"})]),(s(!0),o(x,null,$(i(p),e=>(s(),o("div",{key:e.id},[t("p",ee,g(e.acf.popular_games_info),1)]))),128))]),t("div",se,[t("div",oe,[r(y,{to:"popular-games",class:"w-full rounded-md py-3 flex items-center justify-center bg-secondary_bg text-secondary uppercase cursor-pointer transition-all ease-in-out duration-500 hover:text-primary hover:bg-tertiary_dark hover:scale-110"},{default:I(()=>[t("span",ae,[r(c,{"translation-key":"see_more"})]),l[0]||(l[0]=t("i",{class:"material-icons pl-2 font-extralight"},"arrow_forward",-1))]),_:1})])])])])]),n.value?(s(),o("div",ie,l[1]||(l[1]=[t("svg",{class:"spinner animate-spin w-12 h-12",viewBox:"0 0 50 50"},[t("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"3"})],-1),t("span",{class:"sr-only"},"Loading...",-1)]))):(s(),o("div",ne,[t("div",le,[(s(!0),o(x,null,$(i(V).slice(-16).reverse(),e=>(s(),o("div",{key:e.id,class:S(["item-"+e.id,"shadow-lg rounded-md"])},[t("div",re,[t("a",{href:i(m),target:"_blank"},[t("img",{class:"rounded-md w-full",src:e.image,onError:w=>e.image="newGameImg.jpg",loading:"lazy",alt:"Image of "+e.gameName+" online popular. "+e.description,title:e.gameName+" - "+e.id,width:"200",height:"132"},null,40,de)],8,ce),t("div",_e,[t("a",{href:i(m),target:"_blank"},[t("div",me,[e!=null&&e.description?(s(),o("div",ue,g(e.description)+" from "+g(e.provider),1)):(s(),o("i",he,"play_arrow"))])],8,pe)])])],2))),128))])])),t("div",xe,[t("div",ge,[t("div",ye,[r(c,{"translation-key":"claim"})]),t("a",{href:i(m),class:"inline-block py-2 px-4 md:px-10 font-semibold rounded text-sm bg-secondary_bg text-secondary hover:opacity-90 transition-opacity duration-300 text-md md:text-xl xl:text-3xl"},[r(c,{"translation-key":"sign_up"})],8,ve)])])])}}},$e={class:"py-10 md:py-20 bg-primary_bg"},be={class:"lg:mb-4"},ke={class:"container mx-auto px-4 sm:px-6 lg:px-8"},we={class:"grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center"},je={class:"col-span-full lg:col-span-6"},Ge={class:"gamesSectionHead text-primary text-center lg:text-left p-4 text-3xl font-bold"},Le={class:"info_content text-[#bacfdc] font-light text-lg py-5 px-4"},Ee={class:"lg:col-span-2 p-4"},Ie={class:"flex justify-between items-center"},Ne={class:"text-center"},Te={key:0,class:"loading-placeholder",role:"status","aria-live":"polite"},Be={key:1,class:"container mx-auto px-4 sm:px-6 lg:px-8 py-10"},Ce={class:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"},He={class:"show show-first relative"},Me=["href"],Se=["src","onError","alt","title"],De={class:"mask absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"},ze=["href"],Pe={class:"gameDescr p-4 text-white text-center"},Ke={key:0},Ve={key:1,class:"material-icons text-4xl scale-150"},Ae={class:"container mx-auto px-4 sm:px-6 lg:px-8 mt-10"},Fe={class:"flex flex-col sm:flex-row items-center justify-between bg-tertiary_dark p-5 sm:p-10 rounded-sm"},Je={class:"text-primary font-bold text-base md:text-2xl xl:text-4xl mb-4 sm:mb-0"},Oe=["href"],Ue={__name:"SlotGames",setup(u){f(()=>L);const n=k(!0),d=f(()=>T("slot-games",{lang:G.value}));return E(async()=>{try{const a=B(d.value);if(a){ot.value=a,n.value=!1;return}await M(),C(d.value,ot.value)}catch(a){console.error("Error in slot Games:",a)}finally{n.value=!1}}),(a,l)=>{const c=D,y=N;return s(),o("div",$e,[t("div",be,[t("div",ke,[t("div",we,[t("div",je,[t("p",Ge,[r(c,{"translation-key":"slot_games"})]),(s(!0),o(x,null,$(i(p),e=>(s(),o("div",{key:e.id},[t("p",Le,g(e.acf.slot_games_info),1)]))),128))]),t("div",Ee,[t("div",Ie,[r(y,{to:"slot-games",class:"w-full rounded-md py-3 flex items-center justify-center bg-secondary_bg text-secondary uppercase cursor-pointer transition-all ease-in-out duration-500 hover:text-primary hover:bg-tertiary_dark hover:scale-110"},{default:I(()=>[t("span",Ne,[r(c,{"translation-key":"see_more"})]),l[0]||(l[0]=t("i",{class:"material-icons pl-2 font-extralight"},"arrow_forward",-1))]),_:1})])])])])]),n.value?(s(),o("div",Te,l[1]||(l[1]=[t("svg",{class:"spinner animate-spin w-12 h-12",viewBox:"0 0 50 50"},[t("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"3"})],-1),t("span",{class:"sr-only"},"Loading...",-1)]))):(s(),o("div",Be,[t("div",Ce,[(s(!0),o(x,null,$(("newGames"in a?a.newGames:i(P)).slice(-16).reverse(),e=>(s(),o("div",{key:e.id,class:S(["item-"+e.id,"shadow-lg rounded-md"])},[t("div",He,[t("a",{href:i(m),target:"_blank"},[t("img",{class:"rounded-md w-full",src:e.image,onError:w=>e.image="slotGameImg.jpg",loading:"lazy",alt:"Image of "+e.gameName+" online slot. "+e.description,title:e.gameName+" - "+e.id,width:"200",height:"132"},null,40,Se)],8,Me),t("div",De,[t("a",{href:i(m),target:"_blank"},[t("div",Pe,[e!=null&&e.description?(s(),o("div",Ke,g(e.description)+" from "+g(e.provider),1)):(s(),o("i",Ve,"play_arrow"))])],8,ze)])])],2))),128))])])),t("div",Ae,[t("div",Fe,[t("div",Je,[r(c,{"translation-key":"claim"})]),t("a",{href:i(m),class:"inline-block py-2 px-4 md:px-10 font-semibold rounded text-sm bg-secondary_bg text-secondary hover:opacity-90 transition-opacity duration-300 text-md md:text-xl xl:text-3xl"},[r(c,{"translation-key":"sign_up"})],8,Oe)])])])}}},We={class:"py-10 md:py-20 bg-primary_bg"},Re={class:"lg:mb-4"},Ye={class:"container mx-auto px-4 sm:px-6 lg:px-8"},qe={class:"grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center"},Qe={class:"col-span-full lg:col-span-6"},Xe={class:"gamesSectionHead text-primary text-center lg:text-left p-4 text-3xl font-bold"},Ze={class:"info_content text-[#bacfdc] font-light text-lg py-5 px-4"},ts={class:"lg:col-span-2 p-4"},es={class:"flex justify-between items-center"},ss={class:"text-center"},os={key:0,class:"loading-placeholder",role:"status","aria-live":"polite"},as={key:1,class:"container mx-auto px-4 sm:px-6 lg:px-8 py-10"},is={class:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"},ns={class:"show show-first relative"},ls=["href"],rs=["src","onError","alt","title"],cs={class:"mask absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"},ds=["href"],_s={class:"gameDescr p-4 text-white text-center"},ps={key:0},ms={key:1,class:"material-icons text-4xl scale-150"},us={class:"container mx-auto px-4 sm:px-6 lg:px-8 mt-10"},hs={class:"flex flex-col sm:flex-row items-center justify-between bg-tertiary_dark p-5 sm:p-10 rounded-sm"},xs={class:"text-primary font-bold text-base md:text-2xl xl:text-4xl mb-4 sm:mb-0"},gs=["href"],ys={__name:"CasinoGames",setup(u){f(()=>L);const n=k(!0),d=f(()=>T("casino-games",{lang:G.value}));return E(async()=>{try{const a=B(d.value);if(a){A.value=a,n.value=!1;return}await M(),C(d.value,A.value)}catch(a){console.error("Error in casino Games:",a)}finally{n.value=!1}}),(a,l)=>{const c=D,y=N;return s(),o("div",We,[t("div",Re,[t("div",Ye,[t("div",qe,[t("div",Qe,[t("p",Xe,[r(c,{"translation-key":"casino_games"})]),(s(!0),o(x,null,$(i(p),e=>(s(),o("div",{key:e.id},[t("p",Ze,g(e.acf.casino_games_info),1)]))),128))]),t("div",ts,[t("div",es,[r(y,{to:"casino-games",class:"w-full rounded-md py-3 flex items-center justify-center bg-secondary_bg text-secondary uppercase cursor-pointer transition-all ease-in-out duration-500 hover:text-primary hover:bg-tertiary_dark hover:scale-110"},{default:I(()=>[t("span",ss,[r(c,{"translation-key":"see_more"})]),l[0]||(l[0]=t("i",{class:"material-icons pl-2 font-extralight"},"arrow_forward",-1))]),_:1})])])])])]),n.value?(s(),o("div",os,l[1]||(l[1]=[t("svg",{class:"spinner animate-spin w-12 h-12",viewBox:"0 0 50 50"},[t("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"3"})],-1),t("span",{class:"sr-only"},"Loading...",-1)]))):(s(),o("div",as,[t("div",is,[(s(!0),o(x,null,$(i(A).slice(-16).reverse(),e=>(s(),o("div",{key:e.id,class:S(["item-"+e.id,"shadow-lg rounded-md"])},[t("div",ns,[t("a",{href:i(m),target:"_blank"},[t("img",{class:"rounded-md w-full",src:e.image,onError:w=>e.image="newGameImg.jpg",loading:"lazy",alt:"Image of "+e.gameName+" online casino. "+e.description,title:e.gameName+" - "+e.id,width:"200",height:"132"},null,40,rs)],8,ls),t("div",cs,[t("a",{href:i(m),target:"_blank"},[t("div",_s,[e!=null&&e.description?(s(),o("div",ps,g(e.description)+" from "+g(e.provider),1)):(s(),o("i",ms,"play_arrow"))])],8,ds)])])],2))),128))])])),t("div",us,[t("div",hs,[t("div",xs,[r(c,{"translation-key":"claim"})]),t("a",{href:i(m),class:"inline-block py-2 px-4 md:px-10 font-semibold rounded text-sm bg-secondary_bg text-secondary hover:opacity-90 transition-opacity duration-300 text-md md:text-xl xl:text-3xl"},[r(c,{"translation-key":"sig_up"})],8,gs)])])])}}},vs={class:"py-10 md:py-20 bg-primary_bg"},fs={class:"lg:mb-4"},$s={class:"container mx-auto px-4 sm:px-6 lg:px-8"},bs={class:"grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center"},ks={class:"col-span-full lg:col-span-6"},ws={class:"gamesSectionHead text-primary text-center lg:text-left p-4 text-3xl font-bold"},js={class:"info_content text-[#bacfdc] font-light text-lg py-5 px-4"},Gs={class:"lg:col-span-2 p-4"},Ls={class:"flex justify-between items-center"},Es={class:"text-center"},Is={key:0,class:"loading-placeholder",role:"status","aria-live":"polite"},Ns={key:1,class:"container mx-auto px-4 sm:px-6 lg:px-8 py-10"},Ts={class:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"},Bs={class:"show show-first relative"},Cs=["href"],Hs=["src","onError","alt","title"],Ms={class:"mask absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"},Ss=["href"],Ds={class:"gameDescr p-4 text-white text-center"},zs={key:0},Ps={key:1,class:"material-icons text-4xl scale-150"},Ks={class:"container mx-auto px-4 sm:px-6 lg:px-8 mt-10"},Vs={class:"flex flex-col sm:flex-row items-center justify-between bg-tertiary_dark p-5 sm:p-10 rounded-sm"},As={class:"text-primary font-bold text-base md:text-2xl xl:text-4xl mb-4 sm:mb-0"},Fs=["href"],Js={__name:"JackpotGames",setup(u){f(()=>L);const n=k(!0),d=f(()=>T("jackpot-games",{lang:G.value}));return E(async()=>{try{const a=B(d.value);if(a){F.value=a,n.value=!1;return}await M(),C(d.value,F.value)}catch(a){console.error("Error in jackpot Games:",a)}finally{n.value=!1}}),(a,l)=>{const c=D,y=N;return s(),o("div",vs,[t("div",fs,[t("div",$s,[t("div",bs,[t("div",ks,[t("p",ws,[r(c,{"translation-key":"jackpot_games"})]),(s(!0),o(x,null,$(i(p),e=>(s(),o("div",{key:e.id},[t("p",js,g(e.acf.jackpot_games_info),1)]))),128))]),t("div",Gs,[t("div",Ls,[r(y,{to:"jackpot-games",class:"w-full rounded-md py-3 flex items-center justify-center bg-secondary_bg text-secondary uppercase cursor-pointer transition-all ease-in-out duration-500 hover:text-primary hover:bg-tertiary_dark hover:scale-110"},{default:I(()=>[t("span",Es,[r(c,{"translation-key":"jackpot_games"})]),l[0]||(l[0]=t("i",{class:"material-icons pl-2 font-extralight"},"arrow_forward",-1))]),_:1})])])])])]),n.value?(s(),o("div",Is,l[1]||(l[1]=[t("svg",{class:"spinner animate-spin w-12 h-12",viewBox:"0 0 50 50"},[t("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"3"})],-1),t("span",{class:"sr-only"},"Loading...",-1)]))):(s(),o("div",Ns,[t("div",Ts,[(s(!0),o(x,null,$(i(F).slice(-16).reverse(),e=>(s(),o("div",{key:e.id,class:S(["item-"+e.id,"shadow-lg rounded-md"])},[t("div",Bs,[t("a",{href:i(m),target:"_blank"},[t("img",{class:"rounded-md w-full",src:e.image,onError:w=>e.image="newGameImg.jpg",loading:"lazy",alt:"Image of "+e.gameName+" online jackpot. "+e.description,title:e.gameName+" - "+e.id,width:"200",height:"132"},null,40,Hs)],8,Cs),t("div",Ms,[t("a",{href:i(m),target:"_blank"},[t("div",Ds,[e!=null&&e.description?(s(),o("div",zs,g(e.description)+" from "+g(e.provider),1)):(s(),o("i",Ps,"play_arrow"))])],8,Ss)])])],2))),128))])])),t("div",Ks,[t("div",Vs,[t("div",As,[r(c,{"translation-key":"claim"})]),t("a",{href:i(m),class:"inline-block py-2 px-4 md:px-10 font-semibold rounded text-sm bg-secondary_bg text-secondary hover:opacity-90 transition-opacity duration-300 text-md md:text-xl xl:text-3xl"},[r(c,{"translation-key":"sign_up"})],8,Fs)])])])}}},Os={key:0,class:"min-h-screen flex items-center justify-center"},Us={class:"section px-5 bg-tertiary_dark"},Ws={key:0,class:"container py-10 mx-auto text-primary"},Rs=["innerHTML"],Ys={key:1,class:"container mx-auto py-5"},qs={class:"grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8"},Qs={class:"card overflow-hidden rounded-lg leading-relaxed"},Xs={class:"card-image"},Zs=["src","alt","title"],to=["src","alt","title"],eo={key:2,class:"container mx-auto py-5"},so={class:"grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8"},oo={class:"card overflow-hidden rounded-lg leading-relaxed"},ao={class:"card-image"},io=["href"],no=["src","alt","title"],lo={key:3,class:"py-10"},ro={class:"container mx-auto py-2 info_content hide_this"},co=["innerHTML"],_o={class:"container mx-auto py-10"},po={class:"px-4"},mo={class:"text-sm text-primary"},uo=["innerHTML"],ho={__name:"index",setup(u){f(()=>L);const n=k(!0),d=k(null);return E(async()=>{try{await Promise.all([lt(),dt(),_t()])}catch(a){console.error("Error fetching data:",a),d.value=a}finally{n.value=!1}}),(a,l)=>{var b,h,H,U,W,R,Y,q,Q;const c=bt,y=Rt,e=N,w=fe,K=Ue,z=ys,_=Js;return s(),o("div",null,[n.value?(s(),o("div",Os,l[0]||(l[0]=[t("div",{class:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary"},null,-1)]))):(s(),o(x,{key:1},[r(c),r(y),t("div",Us,[(b=i(p))!=null&&b[0]?(s(),o("div",Ws,[(h=i(p)[0].acf)!=null&&h.promo_over?(s(),o("div",{key:0,innerHTML:i(p)[0].acf.promo_over,class:"leading-relaxed"},null,8,Rs)):j("",!0)])):j("",!0),((H=i(at))==null?void 0:H.length)>0?(s(),o("div",Ys,[t("div",qs,[(s(!0),o(x,null,$(i(at),v=>(s(),o("div",{key:v.id},[t("div",Qs,[t("div",Xs,[r(e,{to:`/promotion/${v.slug}`},{default:I(()=>{var X,Z,tt,et,st;return[t("img",{class:"activator w-full h-auto hidden md:block",src:(Z=(X=v.images)==null?void 0:X.desktop)==null?void 0:Z.url,loading:"lazy",alt:(et=(tt=v.images)==null?void 0:tt.desktop)==null?void 0:et.alt,title:v.title},null,8,Zs),t("img",{class:"activator w-full h-auto md:hidden",src:(st=v.images)==null?void 0:st.mobile,loading:"lazy",alt:v.title,title:v.title},null,8,to)]}),_:2},1032,["to"])])])]))),128))])])):j("",!0),((U=i(it))==null?void 0:U.length)>0?(s(),o("div",eo,[t("div",so,[(s(!0),o(x,null,$(i(it),v=>(s(),o("div",{key:v.code},[t("div",oo,[t("div",ao,[t("a",{href:i(m)},[t("img",{class:"activator w-full h-auto",src:v.bigImageUrl,loading:"lazy",alt:"Image of "+v.title+" promotion.",title:v.title+", "+v.subTitle},null,8,no)],8,io)])])]))),128))])])):j("",!0),(W=i(p))!=null&&W[0]?(s(),o("div",lo,[t("div",ro,[(R=i(p)[0].acf)!=null&&R.promo_under?(s(),o("div",{key:0,class:"text-primary",innerHTML:i(p)[0].acf.promo_under},null,8,co)):j("",!0)])])):j("",!0)]),r(w),r(K),r(z),r(_),t("div",_o,[t("div",po,[t("div",mo,[(Q=(q=(Y=i(p))==null?void 0:Y[0])==null?void 0:q.acf)!=null&&Q.main_content?(s(),o("div",{key:0,innerHTML:i(p)[0].acf.main_content},null,8,uo)):j("",!0)])])])],64))])}}},vo=nt(ho,[["__scopeId","data-v-b3bd8066"]]);export{vo as default};
