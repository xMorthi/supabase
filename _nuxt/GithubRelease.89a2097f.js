import{d as s,$ as n,az as f,a7 as i}from"./entry.4081c259.js";import{u as d}from"./useGithub.09a0c13f.js";const h=s({props:{query:{type:Object,required:!1,default:()=>({})}},async setup(a){const{fetchRelease:r}=d();if(!a.query.tag)return;const{data:u,refresh:e,pending:t}=await n(`github-release-${f(a.query)}`,()=>r(a.query));return{release:u,refresh:e,pending:t}},render({release:a,refresh:r,pending:u}){var t;const e=i();return(t=e==null?void 0:e.default)==null?void 0:t.call(e,{release:a,refresh:r,pending:u})}});export{h as default};