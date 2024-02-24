import{h as x,q as a,b as p,c as r,d as e,a as c,u as o,y as d,z as i,w as f,f as h,o as l,k as b}from"./index.d3853cf3.js";import{_ as v}from"./SideBar.466d471f.js";const g={class:"flex flex-row bg-green-300 w-full"},y={key:0},w={class:"rounded justify-center items-center text-center bg-white ml-72 mt-20 shadow-2xl shadow-black"},k=e("div",{class:"bg-black"},[e("h1",{class:"text-2xl font-bold text-white p-2"},"Event")],-1),U={class:"flex flex-row text-center items-center justify-center p-4 mt-2"},V=e("h1",{class:"p-2 font-semibold text-gray-800"},"Event Name",-1),j={class:"flex flex-row text-center items-center justify-center p-4 mt-2"},B=e("h1",{class:"p-2 font-semibold text-gray-800"},"Duration",-1),C={class:"flex flex-row text-center items-center justify-center p-4"},E=e("h1",{class:"p-2 font-semibold text-gray-800"},"Address",-1),q={class:"p-3"},N=b("Create"),S={key:1,class:"ml-72 mt-40 rounded justify-center items-center text-center bg-white h-20 shadow-2xl shadow-black"},D=e("div",{class:"p-3 text-center"},[e("p",{class:"font-semibold text-2xl text-black p-4"},"\u{1F389} Your event has been created \u{1F389}")],-1),T=[D],M={setup($){const t=x({name:a(""),address:a(""),duration:a(0),SetingUp:a(0)}),u=p({doctype:"Events",fields:["name1","duration","location"],auto:!0});function m(){t.SetingUp++,u.insert.submit({name1:t.name,duration:t.duration,location:t.address})}return(z,s)=>{const _=h("Button");return l(),r("div",g,[e("div",null,[c(v)]),o(t).SetingUp==0?(l(),r("div",y,[e("div",w,[k,e("div",U,[V,d(e("input",{"onUpdate:modelValue":s[0]||(s[0]=n=>o(t).name=n),type:"text",class:"border-0 rounded bg-gray-300",required:""},null,512),[[i,o(t).name]])]),e("div",j,[B,d(e("input",{"onUpdate:modelValue":s[1]||(s[1]=n=>o(t).duration=n),type:"number",class:"border-0 rounded bg-gray-300",required:""},null,512),[[i,o(t).duration]])]),e("div",C,[E,d(e("textarea",{"onUpdate:modelValue":s[2]||(s[2]=n=>o(t).address=n),type:"text",class:"border-0 rounded bg-gray-300",required:""},null,512),[[i,o(t).address]])]),e("div",q,[c(_,{variant:"solid",onClick:s[3]||(s[3]=n=>m())},{default:f(()=>[N]),_:1})])])])):(l(),r("div",S,T))])}}};export{M as default};