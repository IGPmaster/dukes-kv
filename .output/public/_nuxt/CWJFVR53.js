import{_ as R,m as v,W as C,r as b,N as X,n as L,y as m,q as N,o as s,c as o,u as i,a as t,J as $,F as x,s as y,z as h,t as u,Q as j,p as P,b as l,w as I,B,R as it,S as T,T as at,U as G}from"./CxEzVKOD.js";import{_ as H}from"./Y6WPHkzl.js";import{_ as E}from"./BlfSB-EH.js";const Y=()=>({getCacheKey:(d,r={})=>{const n=[d];return Object.entries(r).forEach(([a,c])=>{n.push(`${a}:${c}`)}),n.join("-")},getCache:d=>{const r=localStorage.getItem(d);if(!r)return null;const{data:n,timestamp:a}=JSON.parse(r);return Date.now()-a>3e5?(localStorage.removeItem(d),null):n},setCache:(d,r)=>{localStorage.setItem(d,JSON.stringify({data:r,timestamp:Date.now()}))}}),nt={key:0,class:"loading-placeholder"},lt={class:"headWrap bg-tertiary_dark"},rt={class:"w-full"},ct=["href"],dt=["srcset","alt","title"],_t=["src","alt","title"],pt={class:"container mx-auto text-center text-primary sig_terms lg:py-5 lg:w-3/4"},mt=["innerHTML"],ht={class:"container mx-auto text-center py-4"},ut={class:"site_heading text-primary text-lg md:text-2xl lg:text-4xl font-bold"},xt={__name:"MainBanner",setup(k){const f=v(()=>C),{getCacheKey:_,getCache:d,setCache:r}=Y(),n=b(!0),a=v(()=>_("main-banner",{lang:X.value,brandId:f.value}));return L(async()=>{try{const c=d(a.value);if(c){m.value=c,n.value=!1;return}await N(),r(a.value,m.value)}catch(c){console.error("Error in MainBanner:",c)}finally{n.value=!1}}),(c,e)=>(s(),o(x,null,[i(n)?(s(),o("div",nt,e[0]||(e[0]=[t("svg",{class:"spinner",viewBox:"0 0 50 50"},[t("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"3"})],-1)]))):$("",!0),t("div",lt,[(s(!0),o(x,null,y("brandContent"in c?c.brandContent:i(m),p=>(s(),o("div",{key:p.id},[t("div",rt,[p.acf&&p.yoast_head_json?(s(),o("a",{key:0,href:"regLink"in c?c.regLink:i(h),style:{"margin-bottom":"-5px"}},[t("picture",null,[t("source",{media:"(min-width: 992px)",srcset:p.acf.image_full,alt:p.acf.casino_games_info,title:p.yoast_head_json.title},null,8,dt),t("img",{src:p.acf.image_small,class:"w-full",alt:p.acf.casino_games_info,title:p.yoast_head_json.title,style:{"min-width":"100vw","padding-top":"6rem"},width:"1920",height:"400"},null,8,_t)])],8,ct)):$("",!0)]),t("div",pt,[t("div",{class:"px-5",innerHTML:p.acf.sig_terms},null,8,mt)]),t("main",ht,[t("h1",ut,u(p.yoast_head_json.title),1)])]))),128))])],64))}},gt=R(xt,[["__scopeId","data-v-82dfeb59"]]),yt={class:"py-10 md:py-20 bg-primary_bg"},ft={class:"lg:mb-4"},vt={class:"container mx-auto px-4 sm:px-6 lg:px-8"},$t={class:"grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center"},bt={class:"col-span-full lg:col-span-6"},kt={class:"gamesSectionHead text-primary text-center lg:text-left p-4 text-3xl font-bold"},wt={class:"info_content text-[#bacfdc] font-light text-lg py-5 px-4"},jt={class:"lg:col-span-2 p-4"},Ct={class:"flex justify-between items-center"},Lt={class:"text-center"},Nt={key:0,class:"loading-placeholder",role:"status","aria-live":"polite"},It={key:1,class:"container mx-auto px-4 sm:px-6 lg:px-8 py-10"},Et={class:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"},Tt={class:"show show-first relative"},Gt=["href"],Pt=["src","onError","alt","title"],Bt={class:"mask absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"},Ht=["href"],St={class:"gameDescr p-4 text-white text-center"},Mt={key:0},zt={key:1,class:"material-icons text-4xl scale-150"},Dt={class:"container mx-auto px-4 sm:px-6 lg:px-8 mt-10"},Kt={class:"flex flex-col sm:flex-row items-center justify-between bg-tertiary_dark p-5 sm:p-10 rounded-sm"},Jt={class:"text-primary font-bold text-base md:text-2xl xl:text-4xl mb-4 sm:mb-0"},At=["href"],Ot={__name:"NewGames",emits:["loaded"],setup(k,{emit:f}){v(()=>C);const _=b(!0),d=v(()=>getCacheKey("new-games",{lang:X.value,userId:userId.value}));return L(async()=>{try{const r=getCache(d.value);if(r){j.value=r,_.value=!1;return}await P(),setCache(d.value,j.value)}catch(r){console.error("Error in NewGames:",r)}finally{_.value=!1}}),(r,n)=>{const a=H,c=E;return s(),o("div",yt,[t("div",ft,[t("div",vt,[t("div",$t,[t("div",bt,[t("p",kt,[l(a,{"translation-key":"new_games"})]),(s(!0),o(x,null,y(i(m),e=>(s(),o("div",{key:e.id},[t("p",wt,u(e.acf.new_games_info),1)]))),128))]),t("div",jt,[t("div",Ct,[l(c,{to:"all-games",class:"w-full rounded-md py-3 flex items-center justify-center bg-secondary_bg text-secondary uppercase cursor-pointer transition-all ease-in-out duration-500 hover:text-primary hover:bg-tertiary_dark hover:scale-110"},{default:I(()=>[t("span",Lt,[l(a,{"translation-key":"see_more"})]),n[0]||(n[0]=t("i",{class:"material-icons pl-2 font-extralight"},"arrow_forward",-1))]),_:1})])])])])]),_.value?(s(),o("div",Nt,n[1]||(n[1]=[t("svg",{class:"spinner animate-spin w-12 h-12",viewBox:"0 0 50 50"},[t("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"3"})],-1),t("span",{class:"sr-only"},"Loading...",-1)]))):(s(),o("div",It,[t("div",Et,[(s(!0),o(x,null,y(i(j).slice(-16).reverse(),e=>(s(),o("div",{key:e.id,class:B(["item-"+e.id,"shadow-lg rounded-md"])},[t("div",Tt,[t("a",{href:i(h),target:"_blank"},[t("img",{class:"rounded-md w-full",src:e.image,onError:p=>e.image="newGameImg.jpg",loading:"lazy",alt:"Image of "+e.gameName+" online slot. "+e.description,title:e.gameName+" - "+e.id,width:"200",height:"132"},null,40,Pt)],8,Gt),t("div",Bt,[t("a",{href:i(h),target:"_blank"},[t("div",St,[e!=null&&e.description?(s(),o("div",Mt,u(e.description)+" from "+u(e.provider),1)):(s(),o("i",zt,"play_arrow"))])],8,Ht)])])],2))),128))])])),t("div",Dt,[t("div",Kt,[t("div",Jt,[l(a,{"translation-key":"claim"})]),t("a",{href:i(h),class:"inline-block py-2 px-4 md:px-10 font-semibold rounded text-sm bg-secondary_bg text-secondary hover:opacity-90 transition-opacity duration-300 text-md md:text-xl xl:text-3xl"},[l(a,{"translation-key":"sign_up"})],8,At)])])])}}},Vt={class:"py-10 md:py-20 bg-primary_bg"},Wt={class:"lg:mb-4"},Ft={class:"container mx-auto px-4 sm:px-6 lg:px-8"},Ut={class:"grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center"},qt={class:"col-span-full lg:col-span-6"},Qt={class:"gamesSectionHead text-primary text-center lg:text-left p-4 text-3xl font-bold"},Rt={class:"info_content text-[#bacfdc] font-light text-lg py-5 px-4"},Xt={class:"lg:col-span-2 p-4"},Yt={class:"flex justify-between items-center"},Zt={class:"text-center"},te={key:0,class:"loading-placeholder",role:"status","aria-live":"polite"},ee={key:1,class:"container mx-auto px-4 sm:px-6 lg:px-8 py-10"},se={class:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"},oe={class:"show show-first relative"},ie=["href"],ae=["src","onError","alt","title"],ne={class:"mask absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"},le=["href"],re={class:"gameDescr p-4 text-white text-center"},ce={key:0},de={key:1,class:"material-icons text-4xl scale-150"},_e={class:"container mx-auto px-4 sm:px-6 lg:px-8 mt-10"},pe={class:"flex flex-col sm:flex-row items-center justify-between bg-tertiary_dark p-5 sm:p-10 rounded-sm"},me={class:"text-primary font-bold text-base md:text-2xl xl:text-4xl mb-4 sm:mb-0"},he=["href"],ue={__name:"PopularGames",emits:["loaded"],setup(k,{emit:f}){v(()=>C);const _=b(!0),d=f;return L(async()=>{try{await Promise.all([N(),P()])}catch(r){console.error("Error fetching content:",r)}finally{_.value=!1,d("loaded")}}),(r,n)=>{const a=H,c=E;return s(),o("div",Vt,[t("div",Wt,[t("div",Ft,[t("div",Ut,[t("div",qt,[t("p",Qt,[l(a,{"translation-key":"popular_games"})]),(s(!0),o(x,null,y(i(m),e=>(s(),o("div",{key:e.id},[t("p",Rt,u(e.acf.popular_games_info),1)]))),128))]),t("div",Xt,[t("div",Yt,[l(c,{to:"popular-games",class:"w-full rounded-md py-3 flex items-center justify-center bg-secondary_bg text-secondary uppercase cursor-pointer transition-all ease-in-out duration-500 hover:text-primary hover:bg-tertiary_dark hover:scale-110"},{default:I(()=>[t("span",Zt,[l(a,{"translation-key":"see_more"})]),n[0]||(n[0]=t("i",{class:"material-icons pl-2 font-extralight"},"arrow_forward",-1))]),_:1})])])])])]),_.value?(s(),o("div",te,n[1]||(n[1]=[t("svg",{class:"spinner animate-spin w-12 h-12",viewBox:"0 0 50 50"},[t("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"3"})],-1),t("span",{class:"sr-only"},"Loading...",-1)]))):(s(),o("div",ee,[t("div",se,[(s(!0),o(x,null,y(i(j).slice(-16).reverse(),e=>(s(),o("div",{key:e.id,class:B(["item-"+e.id,"shadow-lg rounded-md"])},[t("div",oe,[t("a",{href:i(h),target:"_blank"},[t("img",{class:"rounded-md w-full",src:e.image,onError:p=>e.image="newGameImg.jpg",loading:"lazy",alt:"Image of "+e.gameName+" online slot. "+e.description,title:e.gameName+" - "+e.id,width:"200",height:"132"},null,40,ae)],8,ie),t("div",ne,[t("a",{href:i(h),target:"_blank"},[t("div",re,[e!=null&&e.description?(s(),o("div",ce,u(e.description)+" from "+u(e.provider),1)):(s(),o("i",de,"play_arrow"))])],8,le)])])],2))),128))])])),t("div",_e,[t("div",pe,[t("div",me,[l(a,{"translation-key":"claim"})]),t("a",{href:i(h),class:"inline-block py-2 px-4 md:px-10 font-semibold rounded text-sm bg-secondary_bg text-secondary hover:opacity-90 transition-opacity duration-300 text-md md:text-xl xl:text-3xl"},[l(a,{"translation-key":"sign_up"})],8,he)])])])}}},xe={class:"py-10 md:py-20 bg-primary_bg"},ge={class:"lg:mb-4"},ye={class:"container mx-auto px-4 sm:px-6 lg:px-8"},fe={class:"grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center"},ve={class:"col-span-full lg:col-span-6"},$e={class:"gamesSectionHead text-primary text-center lg:text-left p-4 text-3xl font-bold"},be={class:"info_content text-[#bacfdc] font-light text-lg py-5 px-4"},ke={class:"lg:col-span-2 p-4"},we={class:"flex justify-between items-center"},je={class:"text-center"},Ce={key:0,class:"loading-placeholder",role:"status","aria-live":"polite"},Le={key:1,class:"container mx-auto px-4 sm:px-6 lg:px-8 py-10"},Ne={class:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"},Ie={class:"show show-first relative"},Ee=["href"],Te=["src","onError","alt","title"],Ge={class:"mask absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"},Pe=["href"],Be={class:"gameDescr p-4 text-white text-center"},He={key:0},Se={key:1,class:"material-icons text-4xl scale-150"},Me={class:"container mx-auto px-4 sm:px-6 lg:px-8 mt-10"},ze={class:"flex flex-col sm:flex-row items-center justify-between bg-tertiary_dark p-5 sm:p-10 rounded-sm"},De={class:"text-primary font-bold text-base md:text-2xl xl:text-4xl mb-4 sm:mb-0"},Ke=["href"],Je={__name:"SlotGames",emits:["loaded"],setup(k,{emit:f}){v(()=>C);const _=b(!0),d=f;return L(async()=>{try{await Promise.all([N(),P()])}catch(r){console.error("Error fetching content:",r)}finally{_.value=!1,d("loaded")}}),(r,n)=>{const a=H,c=E;return s(),o("div",xe,[t("div",ge,[t("div",ye,[t("div",fe,[t("div",ve,[t("p",$e,[l(a,{"translation-key":"slot_games"})]),(s(!0),o(x,null,y(i(m),e=>(s(),o("div",{key:e.id},[t("p",be,u(e.acf.slot_games_info),1)]))),128))]),t("div",ke,[t("div",we,[l(c,{to:"slot-games",class:"w-full rounded-md py-3 flex items-center justify-center bg-secondary_bg text-secondary uppercase cursor-pointer transition-all ease-in-out duration-500 hover:text-primary hover:bg-tertiary_dark hover:scale-110"},{default:I(()=>[t("span",je,[l(a,{"translation-key":"see_more"})]),n[0]||(n[0]=t("i",{class:"material-icons pl-2 font-extralight"},"arrow_forward",-1))]),_:1})])])])])]),_.value?(s(),o("div",Ce,n[1]||(n[1]=[t("svg",{class:"spinner animate-spin w-12 h-12",viewBox:"0 0 50 50"},[t("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"3"})],-1),t("span",{class:"sr-only"},"Loading...",-1)]))):(s(),o("div",Le,[t("div",Ne,[(s(!0),o(x,null,y(i(j).slice(-16).reverse(),e=>(s(),o("div",{key:e.id,class:B(["item-"+e.id,"shadow-lg rounded-md"])},[t("div",Ie,[t("a",{href:i(h),target:"_blank"},[t("img",{class:"rounded-md w-full",src:e.image,onError:p=>e.image="newGameImg.jpg",loading:"lazy",alt:"Image of "+e.gameName+" online slot. "+e.description,title:e.gameName+" - "+e.id,width:"200",height:"132"},null,40,Te)],8,Ee),t("div",Ge,[t("a",{href:i(h),target:"_blank"},[t("div",Be,[e!=null&&e.description?(s(),o("div",He,u(e.description)+" from "+u(e.provider),1)):(s(),o("i",Se,"play_arrow"))])],8,Pe)])])],2))),128))])])),t("div",Me,[t("div",ze,[t("div",De,[l(a,{"translation-key":"claim"})]),t("a",{href:i(h),class:"inline-block py-2 px-4 md:px-10 font-semibold rounded text-sm bg-secondary_bg text-secondary hover:opacity-90 transition-opacity duration-300 text-md md:text-xl xl:text-3xl"},[l(a,{"translation-key":"sign_up"})],8,Ke)])])])}}},Ae={class:"py-10 md:py-20 bg-primary_bg"},Oe={class:"lg:mb-4"},Ve={class:"container mx-auto px-4 sm:px-6 lg:px-8"},We={class:"grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center"},Fe={class:"col-span-full lg:col-span-6"},Ue={class:"gamesSectionHead text-primary text-center lg:text-left p-4 text-3xl font-bold"},qe={class:"info_content text-[#bacfdc] font-light text-lg py-5 px-4"},Qe={class:"lg:col-span-2 p-4"},Re={class:"flex justify-between items-center"},Xe={class:"text-center"},Ye={key:0,class:"loading-placeholder",role:"status","aria-live":"polite"},Ze={key:1,class:"container mx-auto px-4 sm:px-6 lg:px-8 py-10"},ts={class:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"},es={class:"show show-first relative"},ss=["href"],os=["src","onError","alt","title"],is={class:"mask absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"},as=["href"],ns={class:"gameDescr p-4 text-white text-center"},ls={key:0},rs={key:1,class:"material-icons text-4xl scale-150"},cs={class:"container mx-auto px-4 sm:px-6 lg:px-8 mt-10"},ds={class:"flex flex-col sm:flex-row items-center justify-between bg-tertiary_dark p-5 sm:p-10 rounded-sm"},_s={class:"text-primary font-bold text-base md:text-2xl xl:text-4xl mb-4 sm:mb-0"},ps=["href"],ms={__name:"CasinoGames",emits:["loaded"],setup(k,{emit:f}){v(()=>C);const _=b(!0),d=f;return L(async()=>{try{await Promise.all([N(),P()])}catch(r){console.error("Error fetching content:",r)}finally{_.value=!1,d("loaded")}}),(r,n)=>{const a=H,c=E;return s(),o("div",Ae,[t("div",Oe,[t("div",Ve,[t("div",We,[t("div",Fe,[t("p",Ue,[l(a,{"translation-key":"casino_games"})]),(s(!0),o(x,null,y(i(m),e=>(s(),o("div",{key:e.id},[t("p",qe,u(e.acf.casino_games_info),1)]))),128))]),t("div",Qe,[t("div",Re,[l(c,{to:"casino-games",class:"w-full rounded-md py-3 flex items-center justify-center bg-secondary_bg text-secondary uppercase cursor-pointer transition-all ease-in-out duration-500 hover:text-primary hover:bg-tertiary_dark hover:scale-110"},{default:I(()=>[t("span",Xe,[l(a,{"translation-key":"see_more"})]),n[0]||(n[0]=t("i",{class:"material-icons pl-2 font-extralight"},"arrow_forward",-1))]),_:1})])])])])]),_.value?(s(),o("div",Ye,n[1]||(n[1]=[t("svg",{class:"spinner animate-spin w-12 h-12",viewBox:"0 0 50 50"},[t("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"3"})],-1),t("span",{class:"sr-only"},"Loading...",-1)]))):(s(),o("div",Ze,[t("div",ts,[(s(!0),o(x,null,y(i(j).slice(-16).reverse(),e=>(s(),o("div",{key:e.id,class:B(["item-"+e.id,"shadow-lg rounded-md"])},[t("div",es,[t("a",{href:i(h),target:"_blank"},[t("img",{class:"rounded-md w-full",src:e.image,onError:p=>e.image="newGameImg.jpg",loading:"lazy",alt:"Image of "+e.gameName+" online slot. "+e.description,title:e.gameName+" - "+e.id,width:"200",height:"132"},null,40,os)],8,ss),t("div",is,[t("a",{href:i(h),target:"_blank"},[t("div",ns,[e!=null&&e.description?(s(),o("div",ls,u(e.description)+" from "+u(e.provider),1)):(s(),o("i",rs,"play_arrow"))])],8,as)])])],2))),128))])])),t("div",cs,[t("div",ds,[t("div",_s,[l(a,{"translation-key":"claim"})]),t("a",{href:i(h),class:"inline-block py-2 px-4 md:px-10 font-semibold rounded text-sm bg-secondary_bg text-secondary hover:opacity-90 transition-opacity duration-300 text-md md:text-xl xl:text-3xl"},[l(a,{"translation-key":"sig_up"})],8,ps)])])])}}},hs={class:"py-10 md:py-20 bg-primary_bg"},us={class:"lg:mb-4"},xs={class:"container mx-auto px-4 sm:px-6 lg:px-8"},gs={class:"grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center"},ys={class:"col-span-full lg:col-span-6"},fs={class:"gamesSectionHead text-primary text-center lg:text-left p-4 text-3xl font-bold"},vs={class:"info_content text-[#bacfdc] font-light text-lg py-5 px-4"},$s={class:"lg:col-span-2 p-4"},bs={class:"flex justify-between items-center"},ks={class:"text-center"},ws={key:0,class:"loading-placeholder",role:"status","aria-live":"polite"},js={key:1,class:"container mx-auto px-4 sm:px-6 lg:px-8 py-10"},Cs={class:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"},Ls={class:"show show-first relative"},Ns=["href"],Is=["src","onError","alt","title"],Es={class:"mask absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"},Ts=["href"],Gs={class:"gameDescr p-4 text-white text-center"},Ps={key:0},Bs={key:1,class:"material-icons text-4xl scale-150"},Hs={class:"container mx-auto px-4 sm:px-6 lg:px-8 mt-10"},Ss={class:"flex flex-col sm:flex-row items-center justify-between bg-tertiary_dark p-5 sm:p-10 rounded-sm"},Ms={class:"text-primary font-bold text-base md:text-2xl xl:text-4xl mb-4 sm:mb-0"},zs=["href"],Ds={__name:"JackpotGames",emits:["loaded"],setup(k,{emit:f}){v(()=>C);const _=b(!0),d=f;return L(async()=>{try{await Promise.all([N(),P()])}catch(r){console.error("Error fetching content:",r)}finally{_.value=!1,d("loaded")}}),(r,n)=>{const a=H,c=E;return s(),o("div",hs,[t("div",us,[t("div",xs,[t("div",gs,[t("div",ys,[t("p",fs,[l(a,{"translation-key":"jackpot_games"})]),(s(!0),o(x,null,y(i(m),e=>(s(),o("div",{key:e.id},[t("p",vs,u(e.acf.jackpot_games_info),1)]))),128))]),t("div",$s,[t("div",bs,[l(c,{to:"jackpot-games",class:"w-full rounded-md py-3 flex items-center justify-center bg-secondary_bg text-secondary uppercase cursor-pointer transition-all ease-in-out duration-500 hover:text-primary hover:bg-tertiary_dark hover:scale-110"},{default:I(()=>[t("span",ks,[l(a,{"translation-key":"jackpot_games"})]),n[0]||(n[0]=t("i",{class:"material-icons pl-2 font-extralight"},"arrow_forward",-1))]),_:1})])])])])]),_.value?(s(),o("div",ws,n[1]||(n[1]=[t("svg",{class:"spinner animate-spin w-12 h-12",viewBox:"0 0 50 50"},[t("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"3"})],-1),t("span",{class:"sr-only"},"Loading...",-1)]))):(s(),o("div",js,[t("div",Cs,[(s(!0),o(x,null,y(i(j).slice(-16).reverse(),e=>(s(),o("div",{key:e.id,class:B(["item-"+e.id,"shadow-lg rounded-md"])},[t("div",Ls,[t("a",{href:i(h),target:"_blank"},[t("img",{class:"rounded-md w-full",src:e.image,onError:p=>e.image="newGameImg.jpg",loading:"lazy",alt:"Image of "+e.gameName+" online slot. "+e.description,title:e.gameName+" - "+e.id,width:"200",height:"132"},null,40,Is)],8,Ns),t("div",Es,[t("a",{href:i(h),target:"_blank"},[t("div",Gs,[e!=null&&e.description?(s(),o("div",Ps,u(e.description)+" from "+u(e.provider),1)):(s(),o("i",Bs,"play_arrow"))])],8,Ts)])])],2))),128))])])),t("div",Hs,[t("div",Ss,[t("div",Ms,[l(a,{"translation-key":"claim"})]),t("a",{href:i(h),class:"inline-block py-2 px-4 md:px-10 font-semibold rounded text-sm bg-secondary_bg text-secondary hover:opacity-90 transition-opacity duration-300 text-md md:text-xl xl:text-3xl"},[l(a,{"translation-key":"sign_up"})],8,zs)])])])}}},Ks={key:0,class:"min-h-screen flex items-center justify-center"},Js={class:"section px-5 bg-tertiary_dark"},As={key:0,class:"container py-10 mx-auto text-primary"},Os=["innerHTML"],Vs={key:1,class:"container mx-auto py-5"},Ws={class:"grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8"},Fs={class:"card overflow-hidden rounded-lg leading-relaxed"},Us={class:"card-image"},qs=["src","alt","title"],Qs=["src","alt","title"],Rs={key:2,class:"container mx-auto py-5"},Xs={class:"grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8"},Ys={class:"card overflow-hidden rounded-lg leading-relaxed"},Zs={class:"card-image"},to=["href"],eo=["src","alt","title"],so={key:3,class:"py-10"},oo={class:"container mx-auto py-2 info_content hide_this"},io=["innerHTML"],ao={class:"container mx-auto py-10"},no={class:"px-4"},lo={class:"text-sm text-primary"},ro=["innerHTML"],co={__name:"index",setup(k){v(()=>C);const{getCacheKey:f,getCache:_,setCache:d}=Y(),r=b(!0),n=b(null),a=v(()=>({brand:"brand-content",promotions:"promotions",ppPromotions:"pp-promotions"}));return L(async()=>{try{const c=_(a.value.brand),e=_(a.value.promotions),p=_(a.value.ppPromotions),w=[];c?m.value=c:w.push(N().then(()=>{m.value&&d(a.value.brand,m.value)})),e?T.value=e:w.push(it().then(()=>{T.value&&d(a.value.promotions,T.value)})),p?G.value=p:w.push(at().then(()=>{G.value&&d(a.value.ppPromotions,G.value)})),w.length>0&&await Promise.all(w)}catch(c){console.error("Error fetching data:",c),n.value=c}finally{r.value=!1}}),(c,e)=>{var S,M,z,D,K,J,A,O,V;const p=gt,w=Ot,Z=E,tt=ue,et=Je,st=ms,ot=Ds;return s(),o("div",null,[r.value?(s(),o("div",Ks,e[0]||(e[0]=[t("div",{class:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary"},null,-1)]))):(s(),o(x,{key:1},[l(p),l(w),t("div",Js,[(S=i(m))!=null&&S[0]?(s(),o("div",As,[(M=i(m)[0].acf)!=null&&M.promo_over?(s(),o("div",{key:0,innerHTML:i(m)[0].acf.promo_over,class:"leading-relaxed"},null,8,Os)):$("",!0)])):$("",!0),((z=i(T))==null?void 0:z.length)>0?(s(),o("div",Vs,[t("div",Ws,[(s(!0),o(x,null,y(i(T),g=>(s(),o("div",{key:g.id},[t("div",Fs,[t("div",Us,[l(Z,{to:`/promotion/${g.slug}`},{default:I(()=>{var W,F,U,q,Q;return[t("img",{class:"activator w-full h-auto hidden md:block",src:(F=(W=g.images)==null?void 0:W.desktop)==null?void 0:F.url,loading:"lazy",alt:(q=(U=g.images)==null?void 0:U.desktop)==null?void 0:q.alt,title:g.title},null,8,qs),t("img",{class:"activator w-full h-auto md:hidden",src:(Q=g.images)==null?void 0:Q.mobile,loading:"lazy",alt:g.title,title:g.title},null,8,Qs)]}),_:2},1032,["to"])])])]))),128))])])):$("",!0),((D=i(G))==null?void 0:D.length)>0?(s(),o("div",Rs,[t("div",Xs,[(s(!0),o(x,null,y(i(G),g=>(s(),o("div",{key:g.code},[t("div",Ys,[t("div",Zs,[t("a",{href:i(h)},[t("img",{class:"activator w-full h-auto",src:g.bigImageUrl,loading:"lazy",alt:"Image of "+g.title+" promotion.",title:g.title+", "+g.subTitle},null,8,eo)],8,to)])])]))),128))])])):$("",!0),(K=i(m))!=null&&K[0]?(s(),o("div",so,[t("div",oo,[(J=i(m)[0].acf)!=null&&J.promo_under?(s(),o("div",{key:0,class:"text-primary",innerHTML:i(m)[0].acf.promo_under},null,8,io)):$("",!0)])])):$("",!0)]),l(tt),l(et),l(st),l(ot),t("div",ao,[t("div",no,[t("div",lo,[(V=(O=(A=i(m))==null?void 0:A[0])==null?void 0:O.acf)!=null&&V.main_content?(s(),o("div",{key:0,innerHTML:i(m)[0].acf.main_content},null,8,ro)):$("",!0)])])])],64))])}}},ho=R(co,[["__scopeId","data-v-026e83c5"]]);export{ho as default};
