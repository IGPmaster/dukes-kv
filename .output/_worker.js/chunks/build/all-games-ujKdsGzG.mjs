import{r as e,c as a,g as l,s as r,m as s,a as t,b as i,d as o,u as n,e as d,f as u,h as c,i as v,j as p,k as g,l as m,n as y,p as x,o as f,q as b,_ as w}from"./server.mjs";import{u as _}from"../_/vue.8fc199ce.mjs";import"../runtime.mjs";import"../routes/renderer.mjs";const h={__name:"all-games",__ssrInlineRender:!0,setup(b){const h=e("all"),$=e("all"),k=e("all"),j=a((()=>{if("all"===$.value){let e=l.value.map((e=>e.provider));return[...new Set(e)]}{let e=l.value.filter((e=>e.subProvider===$.value)).map((e=>e.provider));return[...new Set(e)]}})),S=a((()=>{if("all"===h.value){let e=l.value.map((e=>e.subProvider));return[...new Set(e)]}{let e=l.value.filter((e=>e.provider===h.value)).map((e=>e.subProvider));return[...new Set(e)]}})),A=a((()=>{if("all"===h.value&&"all"===$.value){let e=l.value.map((e=>e.gameType));return[...new Set(e)]}{let e=l.value.filter((e=>!(e.provider!==h.value&&"all"!==h.value||e.subProvider!==$.value&&"all"!==$.value))).map((e=>e.gameType));return[...new Set(e)]}})),P=a((()=>l.value.filter((e=>!("all"!==h.value&&e.provider!==h.value||"all"!==$.value&&e.subProvider!==$.value||"all"!==k.value&&e.gameType!==k.value))))),G=a((()=>[...P.value].sort(((e,a)=>e.gameName.localeCompare(a.gameName)))));return _((()=>{var e,a,l,r,s,t,i,o,n;return{title:(null==(l=null==(a=null==(e=d.value)?void 0:e[0])?void 0:a.yoast_head_json)?void 0:l.title)||"All Games",meta:[{hid:"description",name:"description",content:(null==(t=null==(s=null==(r=d.value)?void 0:r[0])?void 0:s.yoast_head_json)?void 0:t.description)||"Explore all our games!"},{name:"keywords",content:(null==(n=null==(o=null==(i=d.value)?void 0:i[0])?void 0:o.yoast_head_json)?void 0:n.focus_keywords)||"games, casino"}]}})),(e,a,l,b)=>{const _=w;a(`<div${r(s({class:"section-even lg:py-10"},b))}><div class="row bg-primary_bg lg:mb-4 pt-20"><div class="container grid grid-cols-1 lg:grid-cols-8 lg:gap-10 items-center mx-auto p-4"><div class="col-span-full lg:col-span-6"><p class="gamesSectionHead text-center lg:text-left text-3xl text-primary py-4 px-4">`),a(t(_,{"translation-key":"all_games","loading-text":"Loading Games..."},null,l)),a("</p>\x3c!--[--\x3e"),i(n(d),(e=>{a(`<div><div class="info_content text-primary font-extralight py-5 px-4">${o(e.acf.slot_games_info)}</div></div>`)})),a(`\x3c!--]--\x3e</div><div class="lg:block lg:col-span-2 p-4"><div class="flex justify-between items-center"><a${u("href",n(c))} class="bg-secondary_bg w-full rounded-md py-3 flex text-secondary hover:text-primary hover:bg-tertiary_dark uppercase cursor-pointer transition ease-in-out duration-500 hover:scale-110"><span class="text-center w-full">`),a(t(_,{"translation-key":"sign_up","loading-text":"Sign Up"},null,l)),a(`</span><i class="material-icons items-center pr-2 font-extralight">arrow_forward</i></a></div></div></div></div><div class="row lg:mb-4 py-5"><div class="container mx-auto grid grid-cols-1 gap-0 lg:grid-cols-3 lg:gap-4 px-4"><div class="relative w-full py-4 lg:py-0"><select${v(!n(p))?" disabled":""} class="uppercase block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"><option value="all"${v(Array.isArray(h.value)?g(h.value,"all"):m(h.value,"all"))?" selected":""}>`),a(t(_,{"translation-key":"all_providers","loading-text":"Loading..."},null,l)),a("</option>\x3c!--[--\x3e"),i(j.value,(e=>{a(`<option${u("value",e)}>${o(e)}</option>`)})),a(`\x3c!--]--\x3e</select><i class="material-icons absolute top-1/2 right-3 transform -translate-y-1/2">arrow_drop_down</i></div><div class="relative w-full py-4 lg:py-0"><select${v(!n(p))?" disabled":""} class="block uppercase appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"><option value="all"${v(Array.isArray($.value)?g($.value,"all"):m($.value,"all"))?" selected":""}>`),a(t(_,{"translation-key":"all_subproviders","loading-text":"Loading..."},null,l)),a("</option>\x3c!--[--\x3e"),i(S.value,(e=>{a(`<option${u("value",e)}>${o(e)}</option>`)})),a(`\x3c!--]--\x3e</select><i class="material-icons absolute top-1/2 right-3 transform -translate-y-1/2">arrow_drop_down</i></div><div class="relative w-full py-4 lg:py-0"><select${v(!n(p))?" disabled":""} class="block uppercase appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"><option value="all"${v(Array.isArray(k.value)?g(k.value,"all"):m(k.value,"all"))?" selected":""}>`),a(t(_,{"translation-key":"all_game_types","loading-text":"Loading..."},null,l)),a("</option>\x3c!--[--\x3e"),i(A.value,(e=>{a(`<option${u("value",e)}>${o(e)}</option>`)})),a('\x3c!--]--\x3e</select><i class="material-icons absolute top-1/2 right-3 transform -translate-y-1/2">arrow_drop_down</i></div></div></div><div class="px-4 sm:px-6 lg:px-0 py-10"><div class="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">\x3c!--[--\x3e'),i(G.value,(e=>{a(`<div class="${y("item-"+e.excludedCountries)}"><div class="show show-first first-content-border"><a${u("href",n(x)+e.serverGameId)} target="_blank"><img style="${f({"min-width":"100%"})}"${u("src",e.image)} loading="lazy"${u("alt","Image of "+e.gameName+" online slot. "+e.description)}${u("title",e.gameName+" - "+e.id)}></a><div class="mask"><a${u("href",n(x)+e.serverGameId)} target="_blank"><div class="gameDescr">`),e&&e.description&&e.description.length>0?a(`<div class="px-2">${o(e.description)} From <strong>${o(e.subProvider)}</strong></div>`):a('<i class="large material-icons">play_arrow</i>'),a("</div></a></div></div></div>")})),a("\x3c!--]--\x3e</div></div></div>")}}},$=h.setup;h.setup=(e,a)=>{const l=b();return(l.modules||(l.modules=new Set)).add("pages/all-games.vue"),$?$(e,a):void 0};export{h as default};
//# sourceMappingURL=all-games-ujKdsGzG.mjs.map
