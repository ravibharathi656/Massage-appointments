import{i as d,c as u,a as e,w as n,f as o,o as m,d as p,u as _,s as r,j as f,k as w}from"./index.d3853cf3.js";const g={class:"m-3 flex flex-row items-center justify-center"},x=["onSubmit"],h=w("Login"),B=d({setup(b){function l(a){let t=new FormData(a.target);r.login.submit({email:t.get("email"),password:t.get("password")})}return(a,t)=>{const s=o("Input"),i=o("Button"),c=o("Card");return m(),u("div",g,[e(c,{title:"Login to your FrappeUI App!",class:"w-full max-w-md mt-4"},{default:n(()=>[p("form",{class:"flex flex-col space-y-2 w-full",onSubmit:f(l,["prevent"])},[e(s,{required:"",name:"email",type:"text",placeholder:"johndoe@email.com",label:"User ID"}),e(s,{required:"",name:"password",type:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022",label:"Password"}),e(i,{loading:_(r).login.loading,variant:"solid"},{default:n(()=>[h]),_:1},8,["loading"])],40,x)]),_:1})])}}});export{B as default};
