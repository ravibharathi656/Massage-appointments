import{k as F,l as i,c as M,m as u,n as P,u as l,a as d,b as s,t as n,e as y,F as q,d as B,f as x,r as k,o as c,q as D,w as L}from"./index.64041f8b.js";const O={key:0},Y={class:"w-full mt-8 text-center justify-center"},A={class:"font-semibold text-[45px]"},U={class:"w-full text-center mt-5"},j={class:"text-gray-600 font-semibold text-lg"},z={class:"text-gray-800 font-semibold mt-4 text-xl"},H=s("p",{class:"text-gray-600 font-semibold mt-5 text-lg"},"Please arrive 10 minutes before the classs start time.",-1),$={class:"w-full h-[350px] border-t-[1.5px] border-gray-600 mt-10 flex flex-row"},G={class:"w-[1000px] text-center p-4"},J=s("p",{class:"font-bold text-xl"},"Select Date & Time",-1),K={class:"mt-5"},Q={class:"w-[400px] h-[350px] p-4 text-center flex flex-col items-center"},W={class:"font-bold text-xl"},X={class:"overflow-y-auto p-3 scroll-smooth",style:{"scrollbar-width":"thin"}},Z={key:0},tt={key:0,class:"w-[200px] p-2 rounded border-gray-600 border-2 mt-5 text-center bg-gray-400"},et={class:"text-lg text-black font-semibold"},st={class:"text-sm text-black mt-2"},ot=s("p",{class:"text-2xs text-black mt-2"},"SORRY! this section slot has bee filled",-1),at={class:"text-sm text-gray-600 mt-2"},nt={key:0,class:"mt-3"},lt={class:"text-sm text-red-600"},ct={props:{ename:{type:String,required:!0},duration:{type:String,required:!0}},setup(w){const v=w;function h(o){let t=parseInt(o.split(":")[0]),a=parseInt(o.split(":")[1]),r=t>=12?"PM":"AM";return t=t%12,t=t||12,a=a<10?"0"+a:a,t+":"+a+" "+r}const p=F({doctype:"Events",name:v.ename,auto:!0}),_=i(()=>p.doc),f=M({doctype:"EventsTimeing",fields:["name1","date","time","no_of_seats","seats_filled","name"],auto:!0}),g=i(()=>{const o=[];if(!f.data)return[];for(const t of f.data)if(p.doc.name==t.name1){const a=parseInt(t.date.split("-")[0]),r=parseInt(t.date.split("-")[1])-1,e=parseInt(t.date.split("-")[2]);o.push(new Date(a,r,e))}return o}),b=i(()=>{const o=[],t=new Date(2024,0,1),a=new Date(2024,11,31);for(;t<=a;)o.push(new Date(t)),t.setDate(t.getDate()+1);return o}),S=i(()=>{const o=[];if(!b.value)return[];for(const t of b.value){let a=!1;for(const r of g.value)if(t.getDate()==r.getDate()&&t.getMonth()==r.getMonth()&&t.getFullYear()==r.getFullYear()){a=!0;break}a||o.push(t)}return o}),m=u(new Date),I=i(()=>{const o={weekday:"short",month:"short",day:"numeric",year:"numeric"};return m.value.toLocaleDateString("en-US",o)}),V=i(()=>m.value.toISOString().split("T")[0]),E=u("red"),T=u(S),C=u([{highlight:"pink",dates:u(g)}]),N=P({name:"Not selected",trigger:u(0)});function R(){N.name="Selected"}return(o,t)=>{const a=k("VDatePicker"),r=k("router-link");return!l(p).loading&&l(p).doc?(c(),d("div",O,[s("div",Y,[s("h1",A,n(l(_).name1),1)]),s("div",U,[s("p",j,"\u{1F557} "+n(l(_).duration)+" minutes",1),s("p",z,"\u{1F4CD} "+n(l(_).location),1),H]),s("div",$,[s("div",G,[J,s("div",K,[y(a,{style:{height:"100%"},modelValue:m.value,"onUpdate:modelValue":t[0]||(t[0]=e=>m.value=e),mode:"date",borderless:"",expanded:"","disabled-dates":T.value,color:E.value,attributes:C.value},null,8,["modelValue","disabled-dates","color","attributes"])])]),s("div",Q,[s("p",W,n(l(I)),1),s("div",X,[(c(!0),d(q,null,B(l(f).data,e=>(c(),d("div",{key:e.name1},[e.name1==l(_).name&&e.date==l(V)?(c(),d("div",Z,[e.seats_filled==e.no_of_seats?(c(),d("div",tt,[s("p",et,n(h(e.time)),1),s("p",st,n(e.seats_filled)+" / "+n(e.no_of_seats)+" spots taken",1),ot])):(c(),d("div",{key:1,onClick:t[1]||(t[1]=rt=>R()),class:D(e.no_of_seats-e.seats_filled>5?" bg-white w-[200px] p-2 rounded border-pink-500 border-2 mt-5 text-center":"bg-yellow-400 w-[200px] p-2 rounded border-yellow-600 border-2 mt-5 text-center")},[y(r,{to:{name:"EventApplying",params:{Eventname:l(_).name,Date:e.date,Time:e.time,Id:e.name}}},{default:L(()=>[s("p",{class:D(e.no_of_seats-e.seats_filled>5?" text-pink-600 font-semibold":" text-black font-semibold")},n(h(e.time)),3),s("p",at,n(e.seats_filled)+" / "+n(e.no_of_seats)+" spots taken",1),e.no_of_seats-e.seats_filled<5?(c(),d("div",nt,[s("p",lt,"Hurry only "+n(e.no_of_seats-e.seats_filled)+" left",1)])):x("",!0)]),_:2},1032,["to"])],2))])):x("",!0)]))),128))])])])])):x("",!0)}}};export{ct as default};