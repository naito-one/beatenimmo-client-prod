import{D as O,E as C,k as I,l as $,F,G as V,H as W,a as P,m as G,j as y,d as k,I as J,r as M,o as T,v as L,J as X,x as D,K as A,L as q,M as Y,N as j,y as w,O as Q,A as Z}from"./DQQV-HtR.js";async function K(e,t){return await ee(t).catch(r=>(console.error("Failed to get image meta for "+t,r+""),{width:0,height:0,ratio:0}))}async function ee(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,i)=>{const r=new Image;r.onload=()=>{const s={width:r.width,height:r.height,ratio:r.width/r.height};t(s)},r.onerror=s=>i(s),r.src=e})}function N(e){return t=>t?e[t]||t:e.missingValue}function te({formatter:e,keyMap:t,joinWith:i="/",valueMap:r}={}){e||(e=(o,n)=>`${o}=${n}`),t&&typeof t!="function"&&(t=N(t));const s=r||{};return Object.keys(s).forEach(o=>{typeof s[o]!="function"&&(s[o]=N(s[o]))}),(o={})=>Object.entries(o).filter(([l,c])=>typeof c<"u").map(([l,c])=>{const d=s[l];return typeof d=="function"&&(c=d(o[l])),l=typeof t=="function"?t(l):l,e(l,c)}).join(i)}function v(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function re(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const i of e.split(" ")){const r=Number.parseInt(i.replace("x",""));r&&t.add(r)}return Array.from(t)}function ie(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function se(e){const t={};if(typeof e=="string")for(const i of e.split(/[\s,]+/).filter(r=>r)){const r=i.split(":");r.length!==2?t["1px"]=r[0].trim():t[r[0].trim()]=r[1].trim()}else Object.assign(t,e);return t}function oe(e){const t={options:e},i=(s,o={})=>H(t,s,o),r=(s,o={},n={})=>i(s,{...n,modifiers:O(o,n.modifiers||{})}).url;for(const s in e.presets)r[s]=(o,n,l)=>r(o,n,{...e.presets[s],...l});return r.options=e,r.getImage=i,r.getMeta=(s,o)=>ne(t,s,o),r.getSizes=(s,o)=>ce(t,s,o),t.$img=r,r}async function ne(e,t,i){const r=H(e,t,{...i});return typeof r.getMeta=="function"?await r.getMeta():await K(e,r.url)}function H(e,t,i){var d,u;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:r,defaults:s}=ae(e,i.provider||e.options.provider),o=le(e,i.preset);if(t=I(t)?t:C(t),!r.supportsAlias){for(const m in e.options.alias)if(t.startsWith(m)){const h=e.options.alias[m];h&&(t=$(h,t.slice(m.length)))}}if(r.validateDomains&&I(t)){const m=F(t).host;if(!e.options.domains.find(h=>h===m))return{url:t}}const n=O(i,o,s);n.modifiers={...n.modifiers};const l=n.modifiers.format;(d=n.modifiers)!=null&&d.width&&(n.modifiers.width=v(n.modifiers.width)),(u=n.modifiers)!=null&&u.height&&(n.modifiers.height=v(n.modifiers.height));const c=r.getImage(t,n,e);return c.format=c.format||l||"",c}function ae(e,t){const i=e.options.providers[t];if(!i)throw new Error("Unknown provider: "+t);return i}function le(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function ce(e,t,i){var S,z,x,a,f;const r=v((S=i.modifiers)==null?void 0:S.width),s=v((z=i.modifiers)==null?void 0:z.height),o=se(i.sizes),n=(x=i.densities)!=null&&x.trim()?re(i.densities.trim()):e.options.densities;ie(n);const l=r&&s?s/r:0,c=[],d=[];if(Object.keys(o).length>=1){for(const g in o){const p=B(g,String(o[g]),s,l,e);if(p!==void 0){c.push({size:p.size,screenMaxWidth:p.screenMaxWidth,media:`(max-width: ${p.screenMaxWidth}px)`});for(const b of n)d.push({width:p._cWidth*b,src:E(e,t,i,p,b)})}}de(c)}else for(const g of n){const p=Object.keys(o)[0];let b=p?B(p,String(o[p]),s,l,e):void 0;b===void 0&&(b={size:"",screenMaxWidth:0,_cWidth:(a=i.modifiers)==null?void 0:a.width,_cHeight:(f=i.modifiers)==null?void 0:f.height}),d.push({width:g,src:E(e,t,i,b,g)})}ue(d);const u=d[d.length-1],m=c.length?c.map(g=>`${g.media?g.media+" ":""}${g.size}`).join(", "):void 0,h=m?"w":"x",_=d.map(g=>`${g.src} ${g.width}${h}`).join(", ");return{sizes:m,srcset:_,src:u==null?void 0:u.src}}function B(e,t,i,r,s){const o=s.options.screens&&s.options.screens[e]||Number.parseInt(e),n=t.endsWith("vw");if(!n&&/^\d+$/.test(t)&&(t=t+"px"),!n&&!t.endsWith("px"))return;let l=Number.parseInt(t);if(!o||!l)return;n&&(l=Math.round(l/100*o));const c=r?Math.round(l*r):i;return{size:t,screenMaxWidth:o,_cWidth:l,_cHeight:c}}function E(e,t,i,r,s){return e.$img(t,{...i.modifiers,width:r._cWidth?r._cWidth*s:void 0,height:r._cHeight?r._cHeight*s:void 0},i)}function de(e){var i;e.sort((r,s)=>r.screenMaxWidth-s.screenMaxWidth);let t=null;for(let r=e.length-1;r>=0;r--){const s=e[r];s.media===t&&e.splice(r,1),t=s.media}for(let r=0;r<e.length;r++)e[r].media=((i=e[r+1])==null?void 0:i.media)||""}function ue(e){e.sort((i,r)=>i.width-r.width);let t=null;for(let i=e.length-1;i>=0;i--){const r=e[i];r.width===t&&e.splice(i,1),t=r.width}}const fe=te({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>W(e)+"_"+W(t)}),ge=(e,{modifiers:t={},baseURL:i}={},r)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const s=fe(t)||"_";return i||(i=$(r.options.nuxt.baseURL,"/_ipx")),{url:$(i,s,V(e))}},me=!0,he=!0,pe=Object.freeze(Object.defineProperty({__proto__:null,getImage:ge,supportsAlias:he,validateDomains:me},Symbol.toStringTag,{value:"Module"})),R={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};R.providers={ipxStatic:{provider:pe,defaults:{}}};const U=()=>{const e=G(),t=P();return t.$img||t._img||(t._img=oe({...R,nuxt:{baseURL:e.app.baseURL},runtimeConfig:e}))};function ve(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const we={src:{type:String,required:!1},format:{type:String,required:!1},quality:{type:[Number,String],required:!1},background:{type:String,required:!1},fit:{type:String,required:!1},modifiers:{type:Object,required:!1},preset:{type:String,required:!1},provider:{type:String,required:!1},sizes:{type:[Object,String],required:!1},densities:{type:String,required:!1},preload:{type:[Boolean,Object],required:!1},width:{type:[String,Number],required:!1},height:{type:[String,Number],required:!1},alt:{type:String,required:!1},referrerpolicy:{type:String,required:!1},usemap:{type:String,required:!1},longdesc:{type:String,required:!1},ismap:{type:Boolean,required:!1},loading:{type:String,required:!1,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],required:!1,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,required:!1,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],required:!1}},ye=e=>{const t=y(()=>({provider:e.provider,preset:e.preset})),i=y(()=>({width:v(e.width),height:v(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),r=U(),s=y(()=>({...e.modifiers,width:v(e.width),height:v(e.height),format:e.format,quality:e.quality||r.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:i,modifiers:s}},be={...we,placeholder:{type:[Boolean,String,Number,Array],required:!1},placeholderClass:{type:String,required:!1},custom:{type:Boolean,required:!1}},_e=["src"],Se=k({__name:"NuxtImg",props:be,emits:["load","error"],setup(e,{emit:t}){const i=e,r=J(),s=t,o=!1,n=U(),l=ye(i),c=M(!1),d=M(),u=y(()=>n.getSizes(i.src,{...l.options.value,sizes:i.sizes,densities:i.densities,modifiers:{...l.modifiers.value,width:v(i.width),height:v(i.height)}})),m=y(()=>{const a={...l.attrs.value,"data-nuxt-img":""};return(!i.placeholder||c.value)&&(a.sizes=u.value.sizes,a.srcset=u.value.srcset),a}),h=y(()=>{let a=i.placeholder;if(a===""&&(a=!0),!a||c.value)return!1;if(typeof a=="string")return a;const f=Array.isArray(a)?a:typeof a=="number"?[a,a]:[10,10];return n(i.src,{...l.modifiers.value,width:f[0],height:f[1],quality:f[2]||50,blur:f[3]||3},l.options.value)}),_=y(()=>i.sizes?u.value.src:n(i.src,l.modifiers.value,l.options.value)),S=y(()=>h.value?h.value:_.value),x=P().isHydrating;return T(()=>{if(h.value||i.custom){const a=new Image;_.value&&(a.src=_.value),i.sizes&&(a.sizes=u.value.sizes||"",a.srcset=u.value.srcset),a.onload=f=>{c.value=!0,s("load",f)},a.onerror=f=>{s("error",f)},ve("nuxt-image");return}d.value&&(d.value.complete&&x&&(d.value.getAttribute("data-error")?s("error",new Event("error")):s("load",new Event("load"))),d.value.onload=a=>{s("load",a)},d.value.onerror=a=>{s("error",a)})}),(a,f)=>a.custom?X(a.$slots,"default",Y(A({key:1},{...q(o)?{onerror:"this.setAttribute('data-error', 1)"}:{},imgAttrs:{...m.value,...q(r)},isLoaded:c.value,src:S.value}))):(D(),L("img",A({key:0,ref_key:"imgEl",ref:d,class:i.placeholder&&!c.value?i.placeholderClass:void 0},{...q(o)?{onerror:"this.setAttribute('data-error', 1)"}:{},...m.value,...q(r)},{src:S.value}),null,16,_e))}}),xe=j("/video/beatenimmo_frontpage.mp4"),qe=j("/img/background.png"),ze=j("/img/beatenimmo-logo-light.svg"),$e={class:"relative"},je={class:"relative w-full min-h-[100vh] flex flex-col items-center p-4"},Ie={class:"overflow-hidden w-full sm:w-auto mt-4 lg:mt-12 text-center text-white rounded-lg shadow-md bg-bi-blue"},Me=k({__name:"index",setup(e){return(t,i)=>{const r=Se;return D(),L("main",$e,[i[2]||(i[2]=w("video",{src:xe,autoplay:"",loop:"",class:"object-cover object-[50%_60%] fixed top-0 left-0 w-full h-screen -z-10"},null,-1)),w("div",je,[i[1]||(i[1]=Q('<div class="flex absolute top-0 flex-col w-full h-full -z-10"><div class="w-full h-80 lg:h-96 smooth-gradient"></div><div class="h-12 bg-gray-100/90"></div><img src="'+qe+'" class="w-screen h-12 bg-gray-100/90 md:h-auto lg:h-24 object-fit" alt="Wavy background"><div class="bg-white grow"></div></div><img src="'+ze+'" alt="BeatenIMMO" class="z-10 mt-16 lg:mt-12 w-3/4 select-none sm:w-1/2 lg:w-[35rem]"><p class="text-lg text-center"> Your real estate partner in Beatenberg </p>',3)),w("div",Ie,[Z(r,{format:"webp",src:"/img/splash.jpg",alt:"Wooden Building in Beatenberg",class:"w-full sm:w-auto sm:h-96",sizes:"xs:200px md:500px lg:1024"}),i[0]||(i[0]=w("div",{class:"flex flex-col items-center p-4"},[w("p",null,"Website under construction."),w("p",{class:"mb-4"},"Visit us again soon !"),w("a",{href:"mailto:info@beatenimmo.ch",class:"underline font-numbers"},"info@beatenimmo.ch"),w("a",{href:"tel:+41 78 703 00 33",class:"underline font-numbers"},"+41 78 703 00 33")],-1))])])])}}});export{Me as default};
