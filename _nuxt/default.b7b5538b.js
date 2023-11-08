import{d as R,e as B,n as L,f as y,r as P,g as T,h as E,i as N,j as w,k as U,l as S,m as V,p as j,q as I,s as O,w as D,v as F,x as z,y as k,z as $,A as M,_ as H,c as Q,B as x,C as b,D as X,F as G,o as J,E as C}from"./entry.f58d2ee2.js";async function q(t,n=R()){const{path:s,matched:e}=n.resolve(t);if(!e.length||(n._routePreloaded||(n._routePreloaded=new Set),n._routePreloaded.has(s)))return;const r=n._preloadPromises=n._preloadPromises||[];if(r.length>4)return Promise.all(r).then(()=>q(t,n));n._routePreloaded.add(s);const o=e.map(i=>{var a;return(a=i.components)==null?void 0:a.default}).filter(i=>typeof i=="function");for(const i of o){const a=Promise.resolve(i()).catch(()=>{}).finally(()=>r.splice(r.indexOf(a)));r.push(a)}await Promise.all(r)}const K=(...t)=>t.find(n=>n!==void 0),W="noopener noreferrer";/*! @__NO_SIDE_EFFECTS__ */function Y(t){const n=t.componentName||"NuxtLink",s=(e,r)=>{if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;const o=t.trailingSlash==="append"?D:F;if(typeof e=="string")return o(e,!0);const i="path"in e?e.path:r(e).path;return{...e,name:void 0,path:o(i,!0)}};return B({name:n,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:r}){const o=R(),i=z(),a=y(()=>{const l=e.to||e.href||"";return s(l,o.resolve)}),d=y(()=>typeof a.value=="string"&&M(a.value,{acceptRelative:!0})),v=y(()=>e.external||e.target&&e.target!=="_self"?!0:typeof a.value=="object"?!1:a.value===""||d.value),_=P(!1),h=P(null),A=l=>{var f;h.value=e.custom?(f=l==null?void 0:l.$el)==null?void 0:f.nextElementSibling:l==null?void 0:l.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!te()){const f=k();let m,u=null;T(()=>{const p=ee();E(()=>{m=N(()=>{var g;(g=h==null?void 0:h.value)!=null&&g.tagName&&(u=p.observe(h.value,async()=>{u==null||u(),u=null;const c=typeof a.value=="string"?a.value:o.resolve(a.value).fullPath;await Promise.all([f.hooks.callHook("link:prefetch",c).catch(()=>{}),!v.value&&q(a.value,o).catch(()=>{})]),_.value=!0}))})})}),w(()=>{m&&U(m),u==null||u(),u=null})}return()=>{var p,g;if(!v.value){const c={ref:A,to:a.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(_.value&&(c.class=e.prefetchedClass||t.prefetchedClass),c.rel=e.rel),S(V("RouterLink"),c,r.default)}const l=typeof a.value=="object"?((p=o.resolve(a.value))==null?void 0:p.href)??null:a.value&&!e.external&&!d.value?s(j(i.app.baseURL,a.value),o.resolve):a.value||null,f=e.target||null,m=e.noRel?null:K(e.rel,t.externalRelAttribute,l?W:"")||null,u=()=>$(l,{replace:e.replace});return e.custom?r.default?r.default({href:l,navigate:u,get route(){if(!l)return;const c=I(l);return{path:c.pathname,fullPath:c.pathname,get query(){return O(c.search)},hash:c.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:l}},rel:m,target:f,isExternal:v.value,isActive:!1,isExactActive:!1}):null:S("a",{ref:h,href:l,rel:m,target:f},(g=r.default)==null?void 0:g.call(r))}}})}const Z=Y(L);function ee(){const t=k();if(t._observer)return t._observer;let n=null;const s=new Map,e=(o,i)=>(n||(n=new IntersectionObserver(a=>{for(const d of a){const v=s.get(d.target);(d.isIntersecting||d.intersectionRatio>0)&&v&&v()}})),s.set(o,i),n.observe(o),()=>{s.delete(o),n.unobserve(o),s.size===0&&(n.disconnect(),n=null)});return t._observer={observe:e}}function te(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}const ae={};function ne(t,n){const s=Z;return J(),Q(G,null,[x(s,{to:"/"},{default:b(()=>[C("home")]),_:1}),x(s,{to:"/contacto"},{default:b(()=>[C("contacto")]),_:1}),x(s,{to:"/contacto"},{default:b(()=>[C("contacto")]),_:1}),X(t.$slots,"default")],64)}const re=H(ae,[["render",ne]]);export{re as default};
