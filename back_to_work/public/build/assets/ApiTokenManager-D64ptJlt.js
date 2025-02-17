import{c as M,o as i,w as s,a as o,r as b,T as _,d as $,e as d,b as l,f as y,u as a,g as n,n as w,F as C,h as A,t as x}from"./app-C_TJi93_.js";import{_ as N}from"./ActionMessage-7mqdsLsN.js";import{_ as L,a as U,b as h}from"./DialogModal-_kTepJJs.js";import{_ as S}from"./Checkbox-CMuspEyU.js";import{_ as W}from"./DangerButton-D9XtieAl.js";import{_ as E}from"./FormSection-tq93uyHQ.js";import{_ as H,a as Y}from"./TextInput-2r49mDGS.js";import{_ as B}from"./InputLabel-BejvmXXk.js";import{_ as I}from"./PrimaryButton-rlV8ZFGB.js";import{_ as P}from"./SecondaryButton-UI9t8Cp3.js";import{S as q}from"./SectionBorder-Drn7ejDe.js";import"./SectionTitle-CtLWEWbp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const G={class:"bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},J={class:"sm:flex sm:items-start"},K={class:"mt-3 text-center sm:mt-0 sm:ms-4 sm:text-start"},O={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},Q={class:"mt-4 text-sm text-gray-600 dark:text-gray-400"},R={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 dark:bg-gray-800 text-end"},X={__name:"ConfirmationModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(m,{emit:T}){const r=T,u=()=>{r("close")};return(p,c)=>(i(),M(L,{show:m.show,"max-width":m.maxWidth,closeable:m.closeable,onClose:u},{default:s(()=>[o("div",G,[o("div",J,[c[0]||(c[0]=o("div",{class:"mx-auto shrink-0 flex items-center justify-center size-12 rounded-full bg-red-100 sm:mx-0 sm:size-10"},[o("svg",{class:"size-6 text-red-600 dark:text-red-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"})])],-1)),o("div",K,[o("h3",O,[b(p.$slots,"title")]),o("div",Q,[b(p.$slots,"content")])])])]),o("div",R,[b(p.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}},Z={class:"col-span-6 sm:col-span-4"},ee={key:0,class:"col-span-6"},se={class:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"},te={class:"flex items-center"},oe={class:"ms-2 text-sm text-gray-600 dark:text-gray-400"},le={key:0},ne={class:"mt-10 sm:mt-0"},ae={class:"space-y-6"},ie={class:"break-all dark:text-white"},re={class:"flex items-center ms-2"},de={key:0,class:"text-sm text-gray-400"},me=["onClick"],ue=["onClick"],pe={key:0,class:"mt-4 bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded font-mono text-sm text-gray-500 break-all"},ce={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},fe={class:"flex items-center"},ve={class:"ms-2 text-sm text-gray-600 dark:text-gray-400"},Se={__name:"ApiTokenManager",props:{tokens:Array,availablePermissions:Array,defaultPermissions:Array},setup(m){const r=_({name:"",permissions:m.defaultPermissions}),u=_({permissions:[]}),p=_({}),c=$(!1),v=$(null),k=$(null),F=()=>{r.post(route("api-tokens.store"),{preserveScroll:!0,onSuccess:()=>{c.value=!0,r.reset()}})},V=f=>{u.permissions=f.abilities,v.value=f},j=()=>{u.put(route("api-tokens.update",v.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>v.value=null})},z=f=>{k.value=f},D=()=>{p.delete(route("api-tokens.destroy",k.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>k.value=null})};return(f,e)=>(i(),d("div",null,[l(E,{onSubmitted:F},{title:s(()=>e[9]||(e[9]=[n(" Create API Token ")])),description:s(()=>e[10]||(e[10]=[n(" API tokens allow third-party services to authenticate with our application on your behalf. ")])),form:s(()=>[o("div",Z,[l(B,{for:"name",value:"Name"}),l(H,{id:"name",modelValue:a(r).name,"onUpdate:modelValue":e[0]||(e[0]=t=>a(r).name=t),type:"text",class:"mt-1 block w-full",autofocus:""},null,8,["modelValue"]),l(Y,{message:a(r).errors.name,class:"mt-2"},null,8,["message"])]),m.availablePermissions.length>0?(i(),d("div",ee,[l(B,{for:"permissions",value:"Permissions"}),o("div",se,[(i(!0),d(C,null,A(m.availablePermissions,t=>(i(),d("div",{key:t},[o("label",te,[l(S,{checked:a(r).permissions,"onUpdate:checked":e[1]||(e[1]=g=>a(r).permissions=g),value:t},null,8,["checked","value"]),o("span",oe,x(t),1)])]))),128))])])):y("",!0)]),actions:s(()=>[l(N,{on:a(r).recentlySuccessful,class:"me-3"},{default:s(()=>e[11]||(e[11]=[n(" Created. ")])),_:1},8,["on"]),l(I,{class:w({"opacity-25":a(r).processing}),disabled:a(r).processing},{default:s(()=>e[12]||(e[12]=[n(" Create ")])),_:1},8,["class","disabled"])]),_:1}),m.tokens.length>0?(i(),d("div",le,[l(q),o("div",ne,[l(U,null,{title:s(()=>e[13]||(e[13]=[n(" Manage API Tokens ")])),description:s(()=>e[14]||(e[14]=[n(" You may delete any of your existing tokens if they are no longer needed. ")])),content:s(()=>[o("div",ae,[(i(!0),d(C,null,A(m.tokens,t=>(i(),d("div",{key:t.id,class:"flex items-center justify-between"},[o("div",ie,x(t.name),1),o("div",re,[t.last_used_ago?(i(),d("div",de," Last used "+x(t.last_used_ago),1)):y("",!0),m.availablePermissions.length>0?(i(),d("button",{key:1,class:"cursor-pointer ms-6 text-sm text-gray-400 underline",onClick:g=>V(t)}," Permissions ",8,me)):y("",!0),o("button",{class:"cursor-pointer ms-6 text-sm text-red-500",onClick:g=>z(t)}," Delete ",8,ue)])]))),128))])]),_:1})])])):y("",!0),l(h,{show:c.value,onClose:e[3]||(e[3]=t=>c.value=!1)},{title:s(()=>e[15]||(e[15]=[n(" API Token ")])),content:s(()=>[e[16]||(e[16]=o("div",null," Please copy your new API token. For your security, it won't be shown again. ",-1)),f.$page.props.jetstream.flash.token?(i(),d("div",pe,x(f.$page.props.jetstream.flash.token),1)):y("",!0)]),footer:s(()=>[l(P,{onClick:e[2]||(e[2]=t=>c.value=!1)},{default:s(()=>e[17]||(e[17]=[n(" Close ")])),_:1})]),_:1},8,["show"]),l(h,{show:v.value!=null,onClose:e[6]||(e[6]=t=>v.value=null)},{title:s(()=>e[18]||(e[18]=[n(" API Token Permissions ")])),content:s(()=>[o("div",ce,[(i(!0),d(C,null,A(m.availablePermissions,t=>(i(),d("div",{key:t},[o("label",fe,[l(S,{checked:a(u).permissions,"onUpdate:checked":e[4]||(e[4]=g=>a(u).permissions=g),value:t},null,8,["checked","value"]),o("span",ve,x(t),1)])]))),128))])]),footer:s(()=>[l(P,{onClick:e[5]||(e[5]=t=>v.value=null)},{default:s(()=>e[19]||(e[19]=[n(" Cancel ")])),_:1}),l(I,{class:w(["ms-3",{"opacity-25":a(u).processing}]),disabled:a(u).processing,onClick:j},{default:s(()=>e[20]||(e[20]=[n(" Save ")])),_:1},8,["class","disabled"])]),_:1},8,["show"]),l(X,{show:k.value!=null,onClose:e[8]||(e[8]=t=>k.value=null)},{title:s(()=>e[21]||(e[21]=[n(" Delete API Token ")])),content:s(()=>e[22]||(e[22]=[n(" Are you sure you would like to delete this API token? ")])),footer:s(()=>[l(P,{onClick:e[7]||(e[7]=t=>k.value=null)},{default:s(()=>e[23]||(e[23]=[n(" Cancel ")])),_:1}),l(W,{class:w(["ms-3",{"opacity-25":a(p).processing}]),disabled:a(p).processing,onClick:D},{default:s(()=>e[24]||(e[24]=[n(" Delete ")])),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{Se as default};
