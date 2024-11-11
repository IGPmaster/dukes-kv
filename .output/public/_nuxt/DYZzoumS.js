import{_ as h,r as m,p as g,Q as p,R as f,c as s,a as t,b as i,F as v,u as y,o,C as b,t as l,N as _,w as k,G as w,e as C}from"./DBXXYakC.js";import{u as D}from"./CCWiqP9f.js";const j={class:"pt-24 bg-gradient-to-b from-primary_bg to-tertiary_dark min-h-screen"},M={class:"container mx-auto px-4 sm:px-6 lg:px-8"},N={class:"text-center mb-12"},S={class:"text-4xl font-bold text-primary mb-4"},B={class:"text-gray-400 max-w-2xl mx-auto"},L={key:0,class:"flex justify-center items-center min-h-[400px]"},P={key:1,class:"text-center py-12"},V={class:"max-w-md mx-auto"},E={class:"mt-2 text-sm font-medium text-gray-300"},F={class:"mt-1 text-sm text-gray-400"},H={key:2,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"},T={class:"relative aspect-[16/9] overflow-hidden"},$=["src","alt"],q=["src","alt"],z={class:"p-6"},A={class:"text-xl font-bold text-primary mb-3 line-clamp-2"},G=["innerHTML"],I={class:"flex items-center justify-between mt-4"},Q={key:0,class:"text-xs text-gray-500"},R={__name:"index",setup(J){const d=m([]),c=m(!0),u=n=>new Date(n).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return g(async()=>{try{await p(),d.value=f.value.filter(n=>n.status==="active"||n.status==="scheduled")}catch(n){console.error("Error fetching promotions:",n)}finally{c.value=!1}}),D({title:"Special Promotions - Dukes Casino",meta:[{name:"description",content:"Explore our latest casino promotions and special offers. Find the best bonuses and rewards at Dukes Casino."},{name:"keywords",content:"casino promotions, bonuses, special offers, casino rewards, Dukes Casino"},{property:"og:title",content:"Special Promotions - Dukes Casino"},{property:"og:description",content:"Explore our latest casino promotions and special offers. Find the best bonuses and rewards at Dukes Casino."}]}),(n,a)=>{const r=w,x=C;return o(),s("div",j,[t("div",M,[t("div",N,[t("h1",S,[i(r,{"translation-key":"special_promotions","loading-text":"Special Promotions"})]),t("p",B,[i(r,{"translation-key":"promotions_quote","loading-text":"Check out our promotions selection. Something for everyone!"})])]),c.value?(o(),s("div",L,a[0]||(a[0]=[t("div",{class:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary"},null,-1)]))):d.value.length?(o(),s("div",H,[(o(!0),s(v,null,y(d.value,e=>(o(),s("div",{key:e.slug,class:"bg-tertiary_dark rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"},[t("div",T,[t("img",{src:e.images.desktop,alt:e.title,class:"w-full h-full object-cover hidden md:block"},null,8,$),t("img",{src:e.images.mobile||e.images.desktop,alt:e.title,class:"w-full h-full object-cover md:hidden"},null,8,q),e.status?(o(),s("div",{key:0,class:b({"absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold":!0,"bg-green-500 text-white":e.status==="active","bg-yellow-500 text-white":e.status==="scheduled","bg-gray-500 text-white":e.status==="expired"})},l(e.status),3)):_("",!0)]),t("div",z,[t("h2",A,l(e.title),1),t("div",{innerHTML:e.description,class:"text-gray-400 mb-4 line-clamp-3 text-sm"},null,8,G),t("div",I,[i(x,{to:`/promotion/${e.slug}`,class:"inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-secondary hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors duration-200"},{default:k(()=>[i(r,{"translation-key":"view_details","loading-text":"View Details"}),a[2]||(a[2]=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 ml-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1))]),_:2},1032,["to"]),e.valid_from?(o(),s("div",Q,l(u(e.valid_from))+" "+l(e.valid_to?` - ${u(e.valid_to)}`:""),1)):_("",!0)])])]))),128))])):(o(),s("div",P,[t("div",V,[a[1]||(a[1]=t("svg",{class:"mx-auto h-12 w-12 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})],-1)),t("h3",E,[i(r,{"translation-key":"no_promotions_title","loading-text":"No Promotions Available"})]),t("p",F,[i(r,{"translation-key":"no_promotions_message","loading-text":"Check back soon for new exciting promotions!"})])])]))])])}}},U=h(R,[["__scopeId","data-v-36a43577"]]);export{U as default};
