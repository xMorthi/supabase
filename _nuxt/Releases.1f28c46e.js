import g from"./Badge.78c13966.js";import x from"./ProseH2.feaa3630.js";import h from"./ContentRenderer.fac21cab.js";import{u as D}from"./useGithub.09a0c13f.js";import{d as B,Z as w,$ as L,b as n,c as a,F as v,a0 as C,K as c,g as o,w as _,E as i,t as p}from"./entry.4081c259.js";import"./ContentSlot.7d0c94e5.js";import"./ContentRendererMarkdown.725b1822.js";const b=(r,t={year:"numeric",month:"long",day:"numeric"})=>new Date(r).toLocaleDateString("en",t),k={style:{"margin-top":"50px"}},G=B({__name:"Releases",async setup(r){let t,s;const{fetchReleases:l}=D(),{data:u}=([t,s]=w(()=>L("releases",()=>l({}))),t=await t,s(),t);return(m,R)=>{const d=g,f=x,y=h;return n(),a("div",k,[(n(!0),a(v,null,C(c(u),e=>(n(),a("div",{key:e.name,style:{"margin-bottom":"50px"}},[o(f,{id:e.name},{default:_(()=>[i(p(e.name)+" ",1),o(d,{style:{"margin-left":"10px"}},{default:_(()=>[i(p(("formatDateByLocale"in m?m.formatDateByLocale:c(b))(e.date)),1)]),_:2},1024)]),_:2},1032,["id"]),o(y,{value:e},null,8,["value"])]))),128))])}}});export{G as default};