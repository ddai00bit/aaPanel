import{_ as e}from"./index99.js?v=1742891699271";import{cI as s,m as t,b as a}from"./page_layout.js?v=1742891699271";import{c as i,h as _}from"./public.js?v=1742891699271";import{o as p,g as r}from"./index56.js?v=1742891699271";import{T as o,bU as u}from"./naive.js?v=1742891699271";import{d as n,O as l,r as c,R as m,S as d,P as v,V as y,af as j,a1 as g,c as x,a2 as f}from"./vue.js?v=1742891699271";import"./common.js?v=1742891699271";import"./__commonjsHelpers__.js?v=1742891699271";import"./index104.js?v=1742891699271";import"./index.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang2.js?v=1742891699271";import"./index96.js?v=1742891699271";import"./config3.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang4.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang8.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang5.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang6.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang7.js?v=1742891699271";const w={class:"p-20px"},S=n({__name:"view",setup(n){const{t:S}=l(),b=c(""),H=()=>{_(b.value)},k=()=>{window.open("".concat(s(),"/ssh_security?action=download_key"))},B=async()=>{await p({ssh:"yes",type:"ed25519"},!1),await P(),t.success(S("Security.SSH.Basic.SSHKey.view_2"))},{loading:C,setLoading:h}=i(),P=async()=>{try{h(!0);const{message:e}=await r();a(e)&&(b.value=e.result)}finally{h(!1)}};return P(),(s,t)=>{const a=e,i=o,_=u;return m(),d("div",w,[v(a,{value:y(b),"onUpdate:value":t[0]||(t[0]=e=>j(b)?b.value=e:null),loading:y(C),rows:10},null,8,["value","loading"]),v(_,{class:"mt-16px",size:12},{default:g((()=>[v(i,{type:"primary",onClick:H},{default:g((()=>[x(f(s.$t("Public.Btn.Copy")),1)])),_:1}),v(i,{type:"primary",onClick:k},{default:g((()=>[x(f(s.$t("Public.Btn.Download")),1)])),_:1}),v(i,{onClick:B},{default:g((()=>[x(f(s.$t("Security.SSH.Basic.SSHKey.view_1")),1)])),_:1})])),_:1})])}}});export{S as default};
