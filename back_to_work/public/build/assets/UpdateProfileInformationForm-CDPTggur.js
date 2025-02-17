import{T as j,d as f,c as w,o as c,w as l,b as t,u as s,g as n,n as z,e as x,f as p,a as r,l as v,z as g,E as B,i as h,j as E,N as A}from"./app-C_TJi93_.js";import{_ as F}from"./ActionMessage-7mqdsLsN.js";import{_ as R}from"./FormSection-tq93uyHQ.js";import{a as _,_ as S}from"./TextInput-2r49mDGS.js";import{_ as k}from"./InputLabel-BejvmXXk.js";import{_ as T}from"./PrimaryButton-rlV8ZFGB.js";import{_ as V}from"./SecondaryButton-UI9t8Cp3.js";import"./SectionTitle-CtLWEWbp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const q={key:0,class:"col-span-6 sm:col-span-4"},D={class:"mt-2"},L=["src","alt"],M={class:"mt-2"},O={class:"col-span-6 sm:col-span-4"},Y={class:"col-span-6 sm:col-span-4"},G={key:0},H={class:"text-sm mt-2 dark:text-white"},J={class:"mt-2 font-medium text-sm text-green-600 dark:text-green-400"},ae={__name:"UpdateProfileInformationForm",props:{user:Object},setup(u){const y=u,o=j({_method:"PUT",name:y.user.name,email:y.user.email,photo:null}),b=f(null),m=f(null),i=f(null),N=()=>{i.value&&(o.photo=i.value.files[0]),o.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:()=>P()})},$=()=>{b.value=!0},C=()=>{i.value.click()},I=()=>{const a=i.value.files[0];if(!a)return;const e=new FileReader;e.onload=d=>{m.value=d.target.result},e.readAsDataURL(a)},U=()=>{A.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:()=>{m.value=null,P()}})},P=()=>{var a;(a=i.value)!=null&&a.value&&(i.value.value=null)};return(a,e)=>(c(),w(R,{onSubmitted:N},{title:l(()=>e[2]||(e[2]=[n(" Profile Information ")])),description:l(()=>e[3]||(e[3]=[n(" Update your account's profile information and email address. ")])),form:l(()=>[a.$page.props.jetstream.managesProfilePhotos?(c(),x("div",q,[r("input",{id:"photo",ref_key:"photoInput",ref:i,type:"file",class:"hidden",onChange:I},null,544),t(k,{for:"photo",value:"Photo"}),v(r("div",D,[r("img",{src:u.user.profile_photo_url,alt:u.user.name,class:"rounded-full size-20 object-cover"},null,8,L)],512),[[g,!m.value]]),v(r("div",M,[r("span",{class:"block rounded-full size-20 bg-cover bg-no-repeat bg-center",style:B("background-image: url('"+m.value+"');")},null,4)],512),[[g,m.value]]),t(V,{class:"mt-2 me-2",type:"button",onClick:h(C,["prevent"])},{default:l(()=>e[4]||(e[4]=[n(" Select A New Photo ")])),_:1}),u.user.profile_photo_path?(c(),w(V,{key:0,type:"button",class:"mt-2",onClick:h(U,["prevent"])},{default:l(()=>e[5]||(e[5]=[n(" Remove Photo ")])),_:1})):p("",!0),t(_,{message:s(o).errors.photo,class:"mt-2"},null,8,["message"])])):p("",!0),r("div",O,[t(k,{for:"name",value:"Name"}),t(S,{id:"name",modelValue:s(o).name,"onUpdate:modelValue":e[0]||(e[0]=d=>s(o).name=d),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"name"},null,8,["modelValue"]),t(_,{message:s(o).errors.name,class:"mt-2"},null,8,["message"])]),r("div",Y,[t(k,{for:"email",value:"Email"}),t(S,{id:"email",modelValue:s(o).email,"onUpdate:modelValue":e[1]||(e[1]=d=>s(o).email=d),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username"},null,8,["modelValue"]),t(_,{message:s(o).errors.email,class:"mt-2"},null,8,["message"]),a.$page.props.jetstream.hasEmailVerification&&u.user.email_verified_at===null?(c(),x("div",G,[r("p",H,[e[7]||(e[7]=n(" Your email address is unverified. ")),t(s(E),{href:a.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",onClick:h($,["prevent"])},{default:l(()=>e[6]||(e[6]=[n(" Click here to re-send the verification email. ")])),_:1},8,["href"])]),v(r("div",J," A new verification link has been sent to your email address. ",512),[[g,b.value]])])):p("",!0)])]),actions:l(()=>[t(F,{on:s(o).recentlySuccessful,class:"me-3"},{default:l(()=>e[8]||(e[8]=[n(" Saved. ")])),_:1},8,["on"]),t(T,{class:z({"opacity-25":s(o).processing}),disabled:s(o).processing},{default:l(()=>e[9]||(e[9]=[n(" Save ")])),_:1},8,["class","disabled"])]),_:1}))}};export{ae as default};
