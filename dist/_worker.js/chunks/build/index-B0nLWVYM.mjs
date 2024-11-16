import{p as e}from"../routes/renderer.mjs";import{_ as a,k as t,c as s,r as i,s as l,a as d,u as n,d as r,G as o,b as c,w as v,e as p,z as m,H as x,f as g,W as u,D as f,o as y,m as b,l as _,n as h,I as w,J as $,B as k,K as j}from"./server.mjs";import{_ as I}from"./TranslatedText-CB_9Fv-C.mjs";import{_ as C}from"./nuxt-link-BR4827PB.mjs";import"../runtime.mjs";const S=e("/images/PP-EN_red.svg");function getCacheKey(e,a={}){return`${e}|${Object.entries(a).sort((([e],[a])=>e.localeCompare(a))).map((([e,a])=>`${e}:${a}`)).join("|")}`}const G={__name:"MainBanner",__ssrInlineRender:!0,emits:["loaded"],setup(e,{emit:a}){const t=s((()=>u)),l=i(!0);return i(!1),i(null),s((()=>getCacheKey("banner",{brandId:t.value,lang:f.value}))),(e,a,t,s)=>{a("\x3c!--[--\x3e"),l.value?a('<div class="loading-placeholder" data-v-4223e757><svg class="spinner" viewBox="0 0 50 50" data-v-4223e757><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3" data-v-4223e757></circle></svg></div>'):a("\x3c!----\x3e"),a('<div class="headWrap bg-tertiary_dark" data-v-4223e757>\x3c!--[--\x3e'),c(n(r),(e=>{var t;a('<div data-v-4223e757><div class="w-full" data-v-4223e757>'),e.acf&&e.yoast_head_json?a(`<a${p("href",n(g))} style="${y({"margin-bottom":"-5px"})}" data-v-4223e757><picture data-v-4223e757><source media="(min-width: 992px)"${p("srcset",e.acf.image_full)}${p("alt",e.yoast_head_json.description)}${p("title",e.yoast_head_json.og_title)} data-v-4223e757><img${p("src",e.acf.image_small)} class="w-full"${p("alt",e.yoast_head_json.description)}${p("title",e.yoast_head_json.og_title)} style="${y({"min-width":"100vw","padding-top":"6rem"})}" width="1920" height="400" data-v-4223e757></picture></a>`):a("\x3c!----\x3e"),a(`</div><div class="container mx-auto text-center text-primary sig_terms lg:py-5 lg:w-3/4" data-v-4223e757><div class="px-5 font-light text-xs" data-v-4223e757>${null!=(t=e.acf.sig_terms)?t:""}</div></div><main class="container mx-auto text-center py-4" data-v-4223e757><h1 class="site_heading text-primary text-lg md:text-2xl lg:text-4xl font-bold" data-v-4223e757> Dukes Casino - Your Casino! </h1></main><div class="container mx-auto" data-v-4223e757><div class="flex justify-center lg:pb-5 py-3" data-v-4223e757><img class="lg:w-2/5 w-7/8 place-items-center"${p("src",S)} alt="100% Licensed and fast payouts" data-v-4223e757></div></div></div>`)})),a("\x3c!--]--\x3e</div>\x3c!--]--\x3e")}}},N=G.setup;G.setup=(e,a)=>{const s=t();return(s.modules||(s.modules=new Set)).add("components/MainBanner.vue"),N?N(e,a):void 0};const B=a(G,[["__scopeId","data-v-4223e757"]]),z={__name:"NewGames",__ssrInlineRender:!0,setup(e){s((()=>u));const a=i(!0);return s((()=>getCacheKey("new-games",{lang:f.value}))),(e,t,s,i)=>{const o=I,x=C;t(`<div${l(b({class:"py-10 md:py-20 bg-primary_bg"},i))}><div class="lg:mb-4"><div class="container mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center"><div class="col-span-full lg:col-span-6"><p class="gamesSectionHead text-primary text-center lg:text-left p-4 text-3xl font-bold">`),t(d(o,{"translation-key":"new_games"},null,s)),t("</p>\x3c!--[--\x3e"),c(n(r),(e=>{t(`<div><p class="info_content text-[#bacfdc] font-light text-lg py-5 px-4">${_(e.acf.new_games_info)}</p></div>`)})),t('\x3c!--]--\x3e</div><div class="lg:col-span-2 p-4"><div class="flex justify-between items-center">'),t(d(x,{to:"all-games",class:"w-full rounded-md py-3 flex items-center justify-center bg-secondary_bg text-secondary uppercase cursor-pointer transition-all ease-in-out duration-500 hover:text-primary hover:bg-tertiary_dark hover:scale-110"},{default:v(((e,a,t,s)=>{if(!a)return[m("span",{class:"text-center"},[m(o,{"translation-key":"see_more"})]),m("i",{class:"material-icons pl-2 font-extralight"},"arrow_forward")];a(`<span class="text-center"${s}>`),a(d(o,{"translation-key":"see_more"},null,t,s)),a(`</span><i class="material-icons pl-2 font-extralight"${s}>arrow_forward</i>`)})),_:1},s)),t("</div></div></div></div></div>"),a.value?t('<div class="loading-placeholder" role="status" aria-live="polite"><svg class="spinner animate-spin w-12 h-12" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3"></circle></svg><span class="sr-only">Loading...</span></div>'):(t('<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-10"><div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">\x3c!--[--\x3e'),c(n(w).slice(-16).reverse(),(e=>{t(`<div class="${h(["item-"+e.id,"shadow-lg rounded-md"])}"><div class="show show-first relative"><a${p("href",n(g))} target="_blank"><img class="rounded-md w-full"${p("src",e.image)} loading="lazy"${p("alt","Image of "+e.gameName+" online new. "+e.description)}${p("title",e.gameName+" - "+e.id)} width="200" height="132"></a><div class="mask absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"><a${p("href",n(g))} target="_blank"><div class="gameDescr p-4 text-white text-center">`),(null==e?void 0:e.description)?t(`<div>${_(e.description)} from ${_(e.provider)}</div>`):t('<i class="material-icons text-4xl scale-150">play_arrow</i>'),t("</div></a></div></div></div>")})),t("\x3c!--]--\x3e</div></div>")),t('<div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-10"><div class="flex flex-col sm:flex-row items-center justify-between bg-tertiary_dark p-5 sm:p-10 rounded-sm"><div class="text-primary font-bold text-base md:text-2xl xl:text-4xl mb-4 sm:mb-0">'),t(d(o,{"translation-key":"claim"},null,s)),t(`</div><a${p("href",n(g))} class="inline-block py-2 px-4 md:px-10 font-semibold rounded text-sm bg-secondary_bg text-secondary hover:opacity-90 transition-opacity duration-300 text-md md:text-xl xl:text-3xl">`),t(d(o,{"translation-key":"sign_up"},null,s)),t("</a></div></div></div>")}}},K=z.setup;z.setup=(e,a)=>{const s=t();return(s.modules||(s.modules=new Set)).add("components/NewGames.vue"),K?K(e,a):void 0};const R={__name:"PopularGames",__ssrInlineRender:!0,setup(e){s((()=>u));const a=i(!0);return s((()=>getCacheKey("popular-games",{lang:f.value}))),(e,t,s,i)=>{const o=I,x=C;t(`<div${l(b({class:"py-10 md:py-20 bg-primary_bg"},i))}><div class="lg:mb-4"><div class="container mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center"><div class="col-span-full lg:col-span-6"><p class="gamesSectionHead text-primary text-center lg:text-left p-4 text-3xl font-bold">`),t(d(o,{"translation-key":"popular_games"},null,s)),t("</p>\x3c!--[--\x3e"),c(n(r),(e=>{t(`<div><p class="info_content text-[#bacfdc] font-light text-lg py-5 px-4">${_(e.acf.popular_games_info)}</p></div>`)})),t('\x3c!--]--\x3e</div><div class="lg:col-span-2 p-4"><div class="flex justify-between items-center">'),t(d(x,{to:"popular-games",class:"w-full rounded-md py-3 flex items-center justify-center bg-secondary_bg text-secondary uppercase cursor-pointer transition-all ease-in-out duration-500 hover:text-primary hover:bg-tertiary_dark hover:scale-110"},{default:v(((e,a,t,s)=>{if(!a)return[m("span",{class:"text-center"},[m(o,{"translation-key":"see_more"})]),m("i",{class:"material-icons pl-2 font-extralight"},"arrow_forward")];a(`<span class="text-center"${s}>`),a(d(o,{"translation-key":"see_more"},null,t,s)),a(`</span><i class="material-icons pl-2 font-extralight"${s}>arrow_forward</i>`)})),_:1},s)),t("</div></div></div></div></div>"),a.value?t('<div class="loading-placeholder" role="status" aria-live="polite"><svg class="spinner animate-spin w-12 h-12" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3"></circle></svg><span class="sr-only">Loading...</span></div>'):(t('<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-10"><div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">\x3c!--[--\x3e'),c(n($).slice(-16).reverse(),(e=>{t(`<div class="${h(["item-"+e.id,"shadow-lg rounded-md"])}"><div class="show show-first relative"><a${p("href",n(g))} target="_blank"><img class="rounded-md w-full"${p("src",e.image)} loading="lazy"${p("alt","Image of "+e.gameName+" online popular. "+e.description)}${p("title",e.gameName+" - "+e.id)} width="200" height="132"></a><div class="mask absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"><a${p("href",n(g))} target="_blank"><div class="gameDescr p-4 text-white text-center">`),(null==e?void 0:e.description)?t(`<div>${_(e.description)} from ${_(e.provider)}</div>`):t('<i class="material-icons text-4xl scale-150">play_arrow</i>'),t("</div></a></div></div></div>")})),t("\x3c!--]--\x3e</div></div>")),t('<div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-10"><div class="flex flex-col sm:flex-row items-center justify-between bg-tertiary_dark p-5 sm:p-10 rounded-sm"><div class="text-primary font-bold text-base md:text-2xl xl:text-4xl mb-4 sm:mb-0">'),t(d(o,{"translation-key":"claim"},null,s)),t(`</div><a${p("href",n(g))} class="inline-block py-2 px-4 md:px-10 font-semibold rounded text-sm bg-secondary_bg text-secondary hover:opacity-90 transition-opacity duration-300 text-md md:text-xl xl:text-3xl">`),t(d(o,{"translation-key":"sign_up"},null,s)),t("</a></div></div></div>")}}},D=R.setup;R.setup=(e,a)=>{const s=t();return(s.modules||(s.modules=new Set)).add("components/PopularGames.vue"),D?D(e,a):void 0};const H={__name:"SlotGames",__ssrInlineRender:!0,setup(e){s((()=>u));const a=i(!0);return s((()=>getCacheKey("slot-games",{lang:f.value}))),(e,t,s,i)=>{const o=I,x=C;t(`<div${l(b({class:"py-10 md:py-20 bg-primary_bg"},i))}><div class="lg:mb-4"><div class="container mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center"><div class="col-span-full lg:col-span-6"><p class="gamesSectionHead text-primary text-center lg:text-left p-4 text-3xl font-bold">`),t(d(o,{"translation-key":"slot_games"},null,s)),t("</p>\x3c!--[--\x3e"),c(n(r),(e=>{t(`<div><p class="info_content text-[#bacfdc] font-light text-lg py-5 px-4">${_(e.acf.slot_games_info)}</p></div>`)})),t('\x3c!--]--\x3e</div><div class="lg:col-span-2 p-4"><div class="flex justify-between items-center">'),t(d(x,{to:"slot-games",class:"w-full rounded-md py-3 flex items-center justify-center bg-secondary_bg text-secondary uppercase cursor-pointer transition-all ease-in-out duration-500 hover:text-primary hover:bg-tertiary_dark hover:scale-110"},{default:v(((e,a,t,s)=>{if(!a)return[m("span",{class:"text-center"},[m(o,{"translation-key":"see_more"})]),m("i",{class:"material-icons pl-2 font-extralight"},"arrow_forward")];a(`<span class="text-center"${s}>`),a(d(o,{"translation-key":"see_more"},null,t,s)),a(`</span><i class="material-icons pl-2 font-extralight"${s}>arrow_forward</i>`)})),_:1},s)),t("</div></div></div></div></div>"),a.value?t('<div class="loading-placeholder" role="status" aria-live="polite"><svg class="spinner animate-spin w-12 h-12" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3"></circle></svg><span class="sr-only">Loading...</span></div>'):(t('<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-10"><div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">\x3c!--[--\x3e'),c(("newGames"in e?e.newGames:n(w)).slice(-16).reverse(),(e=>{t(`<div class="${h(["item-"+e.id,"shadow-lg rounded-md"])}"><div class="show show-first relative"><a${p("href",n(g))} target="_blank"><img class="rounded-md w-full"${p("src",e.image)} loading="lazy"${p("alt","Image of "+e.gameName+" online slot. "+e.description)}${p("title",e.gameName+" - "+e.id)} width="200" height="132"></a><div class="mask absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"><a${p("href",n(g))} target="_blank"><div class="gameDescr p-4 text-white text-center">`),(null==e?void 0:e.description)?t(`<div>${_(e.description)} from ${_(e.provider)}</div>`):t('<i class="material-icons text-4xl scale-150">play_arrow</i>'),t("</div></a></div></div></div>")})),t("\x3c!--]--\x3e</div></div>")),t('<div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-10"><div class="flex flex-col sm:flex-row items-center justify-between bg-tertiary_dark p-5 sm:p-10 rounded-sm"><div class="text-primary font-bold text-base md:text-2xl xl:text-4xl mb-4 sm:mb-0">'),t(d(o,{"translation-key":"claim"},null,s)),t(`</div><a${p("href",n(g))} class="inline-block py-2 px-4 md:px-10 font-semibold rounded text-sm bg-secondary_bg text-secondary hover:opacity-90 transition-opacity duration-300 text-md md:text-xl xl:text-3xl">`),t(d(o,{"translation-key":"sign_up"},null,s)),t("</a></div></div></div>")}}},L=H.setup;H.setup=(e,a)=>{const s=t();return(s.modules||(s.modules=new Set)).add("components/SlotGames.vue"),L?L(e,a):void 0};const P={__name:"CasinoGames",__ssrInlineRender:!0,setup(e){s((()=>u));const a=i(!0);return s((()=>getCacheKey("casino-games",{lang:f.value}))),(e,t,s,i)=>{const o=I,x=C;t(`<div${l(b({class:"py-10 md:py-20 bg-primary_bg"},i))}><div class="lg:mb-4"><div class="container mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center"><div class="col-span-full lg:col-span-6"><p class="gamesSectionHead text-primary text-center lg:text-left p-4 text-3xl font-bold">`),t(d(o,{"translation-key":"casino_games"},null,s)),t("</p>\x3c!--[--\x3e"),c(n(r),(e=>{t(`<div><p class="info_content text-[#bacfdc] font-light text-lg py-5 px-4">${_(e.acf.casino_games_info)}</p></div>`)})),t('\x3c!--]--\x3e</div><div class="lg:col-span-2 p-4"><div class="flex justify-between items-center">'),t(d(x,{to:"casino-games",class:"w-full rounded-md py-3 flex items-center justify-center bg-secondary_bg text-secondary uppercase cursor-pointer transition-all ease-in-out duration-500 hover:text-primary hover:bg-tertiary_dark hover:scale-110"},{default:v(((e,a,t,s)=>{if(!a)return[m("span",{class:"text-center"},[m(o,{"translation-key":"see_more"})]),m("i",{class:"material-icons pl-2 font-extralight"},"arrow_forward")];a(`<span class="text-center"${s}>`),a(d(o,{"translation-key":"see_more"},null,t,s)),a(`</span><i class="material-icons pl-2 font-extralight"${s}>arrow_forward</i>`)})),_:1},s)),t("</div></div></div></div></div>"),a.value?t('<div class="loading-placeholder" role="status" aria-live="polite"><svg class="spinner animate-spin w-12 h-12" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3"></circle></svg><span class="sr-only">Loading...</span></div>'):(t('<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-10"><div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">\x3c!--[--\x3e'),c(n(k).slice(-16).reverse(),(e=>{t(`<div class="${h(["item-"+e.id,"shadow-lg rounded-md"])}"><div class="show show-first relative"><a${p("href",n(g))} target="_blank"><img class="rounded-md w-full"${p("src",e.image)} loading="lazy"${p("alt","Image of "+e.gameName+" online casino. "+e.description)}${p("title",e.gameName+" - "+e.id)} width="200" height="132"></a><div class="mask absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"><a${p("href",n(g))} target="_blank"><div class="gameDescr p-4 text-white text-center">`),(null==e?void 0:e.description)?t(`<div>${_(e.description)} from ${_(e.provider)}</div>`):t('<i class="material-icons text-4xl scale-150">play_arrow</i>'),t("</div></a></div></div></div>")})),t("\x3c!--]--\x3e</div></div>")),t('<div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-10"><div class="flex flex-col sm:flex-row items-center justify-between bg-tertiary_dark p-5 sm:p-10 rounded-sm"><div class="text-primary font-bold text-base md:text-2xl xl:text-4xl mb-4 sm:mb-0">'),t(d(o,{"translation-key":"claim"},null,s)),t(`</div><a${p("href",n(g))} class="inline-block py-2 px-4 md:px-10 font-semibold rounded text-sm bg-secondary_bg text-secondary hover:opacity-90 transition-opacity duration-300 text-md md:text-xl xl:text-3xl">`),t(d(o,{"translation-key":"sig_up"},null,s)),t("</a></div></div></div>")}}},J=P.setup;P.setup=(e,a)=>{const s=t();return(s.modules||(s.modules=new Set)).add("components/CasinoGames.vue"),J?J(e,a):void 0};const T={__name:"JackpotGames",__ssrInlineRender:!0,setup(e){s((()=>u));const a=i(!0);return s((()=>getCacheKey("jackpot-games",{lang:f.value}))),(e,t,s,i)=>{const o=I,x=C;t(`<div${l(b({class:"py-10 md:py-20 bg-primary_bg"},i))}><div class="lg:mb-4"><div class="container mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center"><div class="col-span-full lg:col-span-6"><p class="gamesSectionHead text-primary text-center lg:text-left p-4 text-3xl font-bold">`),t(d(o,{"translation-key":"jackpot_games"},null,s)),t("</p>\x3c!--[--\x3e"),c(n(r),(e=>{t(`<div><p class="info_content text-[#bacfdc] font-light text-lg py-5 px-4">${_(e.acf.jackpot_games_info)}</p></div>`)})),t('\x3c!--]--\x3e</div><div class="lg:col-span-2 p-4"><div class="flex justify-between items-center">'),t(d(x,{to:"jackpot-games",class:"w-full rounded-md py-3 flex items-center justify-center bg-secondary_bg text-secondary uppercase cursor-pointer transition-all ease-in-out duration-500 hover:text-primary hover:bg-tertiary_dark hover:scale-110"},{default:v(((e,a,t,s)=>{if(!a)return[m("span",{class:"text-center"},[m(o,{"translation-key":"jackpot_games"})]),m("i",{class:"material-icons pl-2 font-extralight"},"arrow_forward")];a(`<span class="text-center"${s}>`),a(d(o,{"translation-key":"jackpot_games"},null,t,s)),a(`</span><i class="material-icons pl-2 font-extralight"${s}>arrow_forward</i>`)})),_:1},s)),t("</div></div></div></div></div>"),a.value?t('<div class="loading-placeholder" role="status" aria-live="polite"><svg class="spinner animate-spin w-12 h-12" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3"></circle></svg><span class="sr-only">Loading...</span></div>'):(t('<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-10"><div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">\x3c!--[--\x3e'),c(n(j).slice(-16).reverse(),(e=>{t(`<div class="${h(["item-"+e.id,"shadow-lg rounded-md"])}"><div class="show show-first relative"><a${p("href",n(g))} target="_blank"><img class="rounded-md w-full"${p("src",e.image)} loading="lazy"${p("alt","Image of "+e.gameName+" online jackpot. "+e.description)}${p("title",e.gameName+" - "+e.id)} width="200" height="132"></a><div class="mask absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"><a${p("href",n(g))} target="_blank"><div class="gameDescr p-4 text-white text-center">`),(null==e?void 0:e.description)?t(`<div>${_(e.description)} from ${_(e.provider)}</div>`):t('<i class="material-icons text-4xl scale-150">play_arrow</i>'),t("</div></a></div></div></div>")})),t("\x3c!--]--\x3e</div></div>")),t('<div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-10"><div class="flex flex-col sm:flex-row items-center justify-between bg-tertiary_dark p-5 sm:p-10 rounded-sm"><div class="text-primary font-bold text-base md:text-2xl xl:text-4xl mb-4 sm:mb-0">'),t(d(o,{"translation-key":"claim"},null,s)),t(`</div><a${p("href",n(g))} class="inline-block py-2 px-4 md:px-10 font-semibold rounded text-sm bg-secondary_bg text-secondary hover:opacity-90 transition-opacity duration-300 text-md md:text-xl xl:text-3xl">`),t(d(o,{"translation-key":"sign_up"},null,s)),t("</a></div></div></div>")}}},M=T.setup;T.setup=(e,a)=>{const s=t();return(s.modules||(s.modules=new Set)).add("components/JackpotGames.vue"),M?M(e,a):void 0};const W={__name:"index",__ssrInlineRender:!0,setup(e){s((()=>u));const a=i(!0);return i(null),(e,t,s,i)=>{var u,f,y,b,_,h,w,$,k,j,I,S;const G=B,N=z,K=C,D=R,L=H,J=P,M=T;t(`<div${l(i)} data-v-b3bd8066>`),a.value?t('<div class="min-h-screen flex items-center justify-center" data-v-b3bd8066><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" data-v-b3bd8066></div></div>'):(t("\x3c!--[--\x3e"),t(d(G,null,null,s)),t(d(N,null,null,s)),t('<div class="section px-5 bg-tertiary_dark" data-v-b3bd8066>'),(null==(b=n(r))?void 0:b[0])?(t('<div class="container py-10 mx-auto text-primary" data-v-b3bd8066>'),(null==(_=n(r)[0].acf)?void 0:_.promo_over)?t(`<div class="leading-relaxed" data-v-b3bd8066>${null!=(u=n(r)[0].acf.promo_over)?u:""}</div>`):t("\x3c!----\x3e"),t("</div>")):t("\x3c!----\x3e"),(null==(h=n(o))?void 0:h.length)>0?(t('<div class="container mx-auto py-5" data-v-b3bd8066><div class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8" data-v-b3bd8066>\x3c!--[--\x3e'),c(n(o),(e=>{t('<div data-v-b3bd8066><div class="card overflow-hidden rounded-lg leading-relaxed" data-v-b3bd8066><div class="card-image" data-v-b3bd8066>'),t(d(K,{to:`/promotion/${e.slug}`},{default:v(((a,t,s,i)=>{var l,d,n,r,o,c,v,x,g,u;if(!t)return[m("img",{class:"activator w-full h-auto hidden md:block",src:null==(v=null==(c=e.images)?void 0:c.desktop)?void 0:v.url,loading:"lazy",alt:null==(g=null==(x=e.images)?void 0:x.desktop)?void 0:g.alt,title:e.title},null,8,["src","alt","title"]),m("img",{class:"activator w-full h-auto md:hidden",src:null==(u=e.images)?void 0:u.mobile,loading:"lazy",alt:e.title,title:e.title},null,8,["src","alt","title"])];t(`<img class="activator w-full h-auto hidden md:block"${p("src",null==(d=null==(l=e.images)?void 0:l.desktop)?void 0:d.url)} loading="lazy"${p("alt",null==(r=null==(n=e.images)?void 0:n.desktop)?void 0:r.alt)}${p("title",e.title)} data-v-b3bd8066${i}><img class="activator w-full h-auto md:hidden"${p("src",null==(o=e.images)?void 0:o.mobile)} loading="lazy"${p("alt",e.title)}${p("title",e.title)} data-v-b3bd8066${i}>`)})),_:2},s)),t("</div></div></div>")})),t("\x3c!--]--\x3e</div></div>")):t("\x3c!----\x3e"),(null==(w=n(x))?void 0:w.length)>0?(t('<div class="container mx-auto py-5" data-v-b3bd8066><div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8" data-v-b3bd8066>\x3c!--[--\x3e'),c(n(x),(e=>{t(`<div data-v-b3bd8066><div class="card overflow-hidden rounded-lg leading-relaxed" data-v-b3bd8066><div class="card-image" data-v-b3bd8066><a${p("href",n(g))} data-v-b3bd8066><img class="activator w-full h-auto"${p("src",e.bigImageUrl)} loading="lazy"${p("alt","Image of "+e.title+" promotion.")}${p("title",e.title+", "+e.subTitle)} data-v-b3bd8066></a></div></div></div>`)})),t("\x3c!--]--\x3e</div></div>")):t("\x3c!----\x3e"),(null==($=n(r))?void 0:$[0])?(t('<div class="py-10" data-v-b3bd8066><div class="container mx-auto py-2 info_content hide_this" data-v-b3bd8066>'),(null==(k=n(r)[0].acf)?void 0:k.promo_under)?t(`<div class="text-primary" data-v-b3bd8066>${null!=(f=n(r)[0].acf.promo_under)?f:""}</div>`):t("\x3c!----\x3e"),t("</div></div>")):t("\x3c!----\x3e"),t("</div>"),t(d(D,null,null,s)),t(d(L,null,null,s)),t(d(J,null,null,s)),t(d(M,null,null,s)),t('<div class="container mx-auto py-10" data-v-b3bd8066><div class="px-4" data-v-b3bd8066><div class="text-sm text-primary" data-v-b3bd8066>'),(null==(S=null==(I=null==(j=n(r))?void 0:j[0])?void 0:I.acf)?void 0:S.main_content)?t(`<div data-v-b3bd8066>${null!=(y=n(r)[0].acf.main_content)?y:""}</div>`):t("\x3c!----\x3e"),t("</div></div></div>\x3c!--]--\x3e")),t("</div>")}}},E=W.setup;W.setup=(e,a)=>{const s=t();return(s.modules||(s.modules=new Set)).add("pages/index.vue"),E?E(e,a):void 0};const F=a(W,[["__scopeId","data-v-b3bd8066"]]);export{F as default};
//# sourceMappingURL=index-B0nLWVYM.mjs.map
