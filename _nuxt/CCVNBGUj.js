import{u as P,d as B,r as q,a as N,o as I,b as U,c as T,e as H,f as V,h as A,g as L,p as F,i as z,j as x,k as O,l as M,m as D,n as $,w as W,q as G,s as K,_ as Q,t as J,v as X,x as Y,y as C,z as S,A as Z,B as ee,C as te}from"./DQQV-HtR.js";async function E(t,n=P()){const{path:f,matched:h}=n.resolve(t);if(!h.length||(n._routePreloaded||(n._routePreloaded=new Set),n._routePreloaded.has(f)))return;const v=n._preloadPromises=n._preloadPromises||[];if(v.length>4)return Promise.all(v).then(()=>E(t,n));n._routePreloaded.add(f);const e=h.map(a=>{var u;return(u=a.components)==null?void 0:u.default}).filter(a=>typeof a=="function");for(const a of e){const u=Promise.resolve(a()).catch(()=>{}).finally(()=>v.splice(v.indexOf(u)));v.push(u)}await Promise.all(v)}const ne=(...t)=>t.find(n=>n!==void 0);function ae(t){const n=t.componentName||"NuxtLink";function f(e){return typeof e=="string"&&e.startsWith("#")}function h(e,a){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return j(e,t.trailingSlash);const u="path"in e&&e.path!==void 0?e.path:a(e).path;return{...e,name:void 0,path:j(u,t.trailingSlash)}}function v(e){const a=P(),u=D(),s=x(()=>!!e.target&&e.target!=="_self"),p=x(()=>{const d=e.to||e.href||"";return typeof d=="string"&&O(d,{acceptRelative:!0})}),_=L("RouterLink"),b=typeof _!="string"?_.useLink:void 0,m=x(()=>{if(e.external)return!0;const d=e.to||e.href||"";return typeof d=="object"?!1:d===""||p.value}),r=x(()=>{const d=e.to||e.href||"";return m.value?d:h(d,a.resolve)}),c=m.value||b==null?void 0:b({...e,to:r}),y=x(()=>{var d;if(!r.value||p.value||f(r.value))return r.value;if(m.value){const k=typeof r.value=="object"&&"path"in r.value?z(r.value):r.value,w=typeof k=="object"?a.resolve(k).href:k;return h(w,a.resolve)}return typeof r.value=="object"?((d=a.resolve(r.value))==null?void 0:d.href)??null:h(M(u.app.baseURL,r.value),a.resolve)});return{to:r,hasTarget:s,isAbsoluteUrl:p,isExternal:m,href:y,isActive:(c==null?void 0:c.isActive)??x(()=>r.value===a.currentRoute.value.path),isExactActive:(c==null?void 0:c.isExactActive)??x(()=>r.value===a.currentRoute.value.path),route:(c==null?void 0:c.route)??x(()=>a.resolve(r.value)),async navigate(){await $(y.value,{replace:e.replace,external:m.value||s.value})}}}return B({name:n,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:v,setup(e,{slots:a}){const u=P(),{to:s,href:p,navigate:_,isExternal:b,hasTarget:m,isAbsoluteUrl:r}=v(e),c=q(!1),y=q(null),d=o=>{var l;y.value=e.custom?(l=o==null?void 0:o.$el)==null?void 0:l.nextElementSibling:o==null?void 0:o.$el};function k(o){var l,i;return!c.value&&(typeof e.prefetchOn=="string"?e.prefetchOn===o:((l=e.prefetchOn)==null?void 0:l[o])??((i=t.prefetchOn)==null?void 0:i[o]))&&(e.prefetch??t.prefetch)!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!se()}async function w(o=N()){if(c.value)return;c.value=!0;const l=typeof s.value=="string"?s.value:b.value?z(s.value):u.resolve(s.value).fullPath,i=b.value?new URL(l,window.location.href).href:l;await Promise.all([o.hooks.callHook("link:prefetch",i).catch(()=>{}),!b.value&&!m.value&&E(s.value,u).catch(()=>{})])}if(k("visibility")){const o=N();let l,i=null;I(()=>{const g=oe();U(()=>{l=T(()=>{var R;(R=y==null?void 0:y.value)!=null&&R.tagName&&(i=g.observe(y.value,async()=>{i==null||i(),i=null,await w(o)}))})})}),H(()=>{l&&V(l),i==null||i(),i=null})}return()=>{var i;if(!b.value&&!m.value&&!f(s.value)){const g={ref:d,to:s.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(k("interaction")&&(g.onPointerenter=w.bind(null,void 0),g.onFocus=w.bind(null,void 0)),c.value&&(g.class=e.prefetchedClass||t.prefetchedClass),g.rel=e.rel||void 0),A(L("RouterLink"),g,a.default)}const o=e.target||null,l=ne(e.noRel?"":e.rel,t.externalRelAttribute,r.value||m.value?"noopener noreferrer":"")||null;return e.custom?a.default?a.default({href:p.value,navigate:_,prefetch:w,get route(){if(!p.value)return;const g=new URL(p.value,window.location.href);return{path:g.pathname,fullPath:g.pathname,get query(){return F(g.search)},hash:g.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:p.value}},rel:l,target:o,isExternal:b.value||m.value,isActive:!1,isExactActive:!1}):null:A("a",{ref:y,href:p.value||null,rel:l,target:o},(i=a.default)==null?void 0:i.call(a))}}})}const re=ae(K);function j(t,n){const f=n==="append"?W:G;return O(t)&&!t.startsWith("http")?t:f(t,!0)}function oe(){const t=N();if(t._observer)return t._observer;let n=null;const f=new Map,h=(e,a)=>(n||(n=new IntersectionObserver(u=>{for(const s of u){const p=f.get(s.target);(s.isIntersecting||s.intersectionRatio>0)&&p&&p()}})),f.set(e,a),n.observe(e),()=>{f.delete(e),n==null||n.unobserve(e),f.size===0&&(n==null||n.disconnect(),n=null)});return t._observer={observe:h}}const ie=/2g/;function se(){const t=navigator.connection;return!!(t&&(t.saveData||ie.test(t.effectiveType)))}const le={class:"antialiased bg-white dark:bg-black dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-black"},ue={class:"max-w-520px text-center z-20"},ce=["textContent"],fe=["textContent"],de={class:"flex items-center justify-center w-full"},he={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(t){const n=t;return J({title:`${n.statusCode} - ${n.statusMessage} | ${n.appName}`,script:[{children:`!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();`}],style:[{children:'*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }'}]}),(f,h)=>{const v=re;return Y(),X("div",le,[h[0]||(h[0]=C("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),C("div",ue,[C("h1",{class:"font-medium mb-8 sm:text-10xl text-8xl",textContent:S(t.statusCode)},null,8,ce),C("p",{class:"font-light leading-tight mb-16 px-8 sm:px-0 sm:text-4xl text-xl",textContent:S(t.description)},null,8,fe),C("div",de,[Z(v,{to:"/",class:"cursor-pointer gradient-border px-4 py-2 sm:px-6 sm:py-3 sm:text-xl text-md"},{default:ee(()=>[te(S(t.backHome),1)]),_:1})])])])}}},pe=Q(he,[["__scopeId","data-v-c2c324f7"]]);export{pe as default};
