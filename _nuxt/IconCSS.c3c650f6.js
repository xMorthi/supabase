import{d,aC as m,x,I as c,b as S,c as f,aD as I,J as o,l as z}from"./entry.ed68d387.js";const y=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(l){var r;const s=l;m(n=>({"16f7a24c":o(p)}));const e=x();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const _=c(()=>{var n;return(((n=e==null?void 0:e.nuxtIcon)==null?void 0:n.aliases)||{})[s.name]||s.name}),p=c(()=>`url('https://api.iconify.design/${_.value.replace(":","/")}.svg')`),a=c(()=>{var t,i,u;if(!s.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const n=s.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(n))===n?`${n}px`:n});return(n,t)=>(S(),f("span",{style:I({width:o(a),height:o(a)})},null,4))}});const g=z(y,[["__scopeId","data-v-37e6dc55"]]);export{g as default};
