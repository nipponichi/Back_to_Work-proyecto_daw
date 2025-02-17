import{T as d,e as i,o as m,b as e,u as a,Z as f,w as r,a as o,f as c,t as p,i as _,n as g,g as w,F as x}from"./app-C_TJi93_.js";import{A as y}from"./AuthenticationCard-A6F2QW03.js";import{_ as b}from"./AuthenticationCardLogo-CfxIdTvl.js";import{_ as k,a as V}from"./TextInput-2r49mDGS.js";import{_ as v}from"./InputLabel-BejvmXXk.js";import{_ as F}from"./PrimaryButton-rlV8ZFGB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const N={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},$={class:"flex items-center justify-end mt-4"},j={__name:"ForgotPassword",props:{status:String},setup(l){const s=d({email:""}),n=()=>{s.post(route("password.email"))};return(C,t)=>(m(),i(x,null,[e(a(f),{title:"Forgot Password"}),e(y,null,{logo:r(()=>[e(b)]),default:r(()=>[t[2]||(t[2]=o("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1)),l.status?(m(),i("div",N,p(l.status),1)):c("",!0),o("form",{onSubmit:_(n,["prevent"])},[o("div",null,[e(v,{for:"email",value:"Email"}),e(k,{id:"email",modelValue:a(s).email,"onUpdate:modelValue":t[0]||(t[0]=u=>a(s).email=u),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(V,{class:"mt-2",message:a(s).errors.email},null,8,["message"])]),o("div",$,[e(F,{class:g({"opacity-25":a(s).processing}),disabled:a(s).processing},{default:r(()=>t[1]||(t[1]=[w(" Email Password Reset Link ")])),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{j as default};
