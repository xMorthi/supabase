import{d as m,r as l,a6 as b,b as a,c as s,F as v,a0 as g,e as u,f as x,a2 as y,n as I,t as k,p as T,j as S,R as C,l as $}from"./entry.4081c259.js";const w=t=>(T("data-v-9fef9ea1"),t=t(),S(),t),B={class:"tabs-header"},H=["onClick"],N=w(()=>u("span",{class:"tab"},null,-1)),R=[N],U=m({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:_}){const f=t,n=l(),r=l(),i=e=>{e&&(r.value.style.insetInlineStart=`${e.offsetLeft}px`,r.value.style.width=`${e.clientWidth}px`)},p=(e,c)=>{_("update:activeTabIndex",c),C(()=>i(e.target))};return b(n,e=>{e&&setTimeout(()=>{i(n.value.children[f.activeTabIndex])},50)},{immediate:!0}),(e,c)=>(a(),s("div",B,[t.tabs?(a(),s("div",{key:0,ref_key:"tabsRef",ref:n,class:"tabs"},[(a(!0),s(v,null,g(t.tabs,({label:d},o)=>(a(),s("button",{key:`${o}${d}`,class:I([t.activeTabIndex===o?"active":"not-active"]),onClick:h=>p(h,o)},k(d),11,H))),128)),u("span",{ref_key:"highlightUnderline",ref:r,class:"highlight-underline"},R,512)],512)):x("",!0),y(e.$slots,"footer",{},void 0,!0)]))}});const F=$(U,[["__scopeId","data-v-9fef9ea1"]]);export{F as default};