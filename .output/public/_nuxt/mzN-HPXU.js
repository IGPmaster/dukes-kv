import{r as d,n as u,p as g,c as a,a as t,t as l,N as m,K as h,o as n,$ as x}from"./CxWQ6TNc.js";const f={key:0,class:"promotion-page"},b={class:"relative"},w=["src"],y=["src"],k={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"},L={class:"text-3xl font-bold text-gray-900 mb-4"},B={class:"mb-6 text-sm text-gray-500"},M={key:0},T={key:1},D=["innerHTML"],H={class:"bg-gray-50 p-6 rounded-lg"},V=["innerHTML"],$={key:1,class:"text-center py-12"},C={class:"text-red-600"},I={key:2,class:"text-center py-12"},E={__name:"[slug]",setup(N){const _=h(),r=x(),e=d(null),i=d(null),p=u(()=>r.public.whitelabelId),v=u(()=>r.public.lang),c=s=>new Date(s).toLocaleDateString();return g(async()=>{try{const s=await fetch(`https://casino-promotions-api.tech1960.workers.dev/promotion?brandId=${p.value}&lang=${v.value}&slug=${_.params.slug}`);if(!s.ok)throw new Error("Promotion not found");const o=await s.json();e.value=o}catch(s){i.value=s.message}}),(s,o)=>e.value?(n(),a("div",f,[t("div",b,[t("img",{src:e.value.images.desktop,alt:"Promotion Banner",class:"w-full hidden md:block"},null,8,w),t("img",{src:e.value.images.mobile,alt:"Promotion Banner",class:"w-full md:hidden"},null,8,y)]),t("div",k,[t("h1",L,l(e.value.title),1),t("div",B,[e.value.valid_from?(n(),a("span",M," Valid from: "+l(c(e.value.valid_from)),1)):m("",!0),e.value.valid_to?(n(),a("span",T," - Valid until: "+l(c(e.value.valid_to)),1)):m("",!0)]),t("div",{class:"prose max-w-none mb-8",innerHTML:e.value.description},null,8,D),t("div",H,[o[0]||(o[0]=t("h2",{class:"text-lg font-semibold mb-4"},"Terms & Conditions",-1)),t("div",{class:"prose max-w-none",innerHTML:e.value.terms},null,8,V)])])])):i.value?(n(),a("div",$,[t("p",C,l(i.value),1)])):(n(),a("div",I,o[1]||(o[1]=[t("div",{class:"animate-spin h-8 w-8 mx-auto mb-4"},"Loading...",-1)])))}};export{E as default};
