import{_ as g,c as m,n as f,m as d,a as r,b as e,u as n,v as _,x as u,e as h,w as y,p as w,g as S,r as k,o as p,j as N}from"./index.64041f8b.js";/* empty css                                                                  */const l=o=>(w("data-v-f5171c86"),o=o(),S(),o),E={class:"bg-gray-300",id:"i1"},A={class:"p-5"},I={key:0,class:"bg-green-400 w-[500px] rounded mt-28 ml-96 shadow-2xl shadow-black"},T=l(()=>e("div",{class:"text-center p-3"},[e("p",{class:"font-semibold text-2xl text-gray-800 p-4"},"Event Application")],-1)),B={class:"rounded bg-pink-400 w-[500px] border-2 border-white"},M={class:"flex flex-row p-3 mt-5"},U=l(()=>e("p",{class:"font-semibold text-gray-700 text-lg p-2 ml-20"},"Name : ",-1)),V={class:"flex flex-row p-3"},q=l(()=>e("p",{class:"font-semibold text-gray-700 text-lg p-2 ml-2"},"Phone Number : ",-1)),C={class:"items-center justify-center text-center p-4"},D=N("Apply"),j={key:1,class:"bg-blue-400 w-[500px] rounded mt-28 ml-96 shadow-2xl shadow-black"},L=l(()=>e("div",{class:"text-center p-3"},[e("p",{class:"font-semibold text-2xl text-black p-4"},"Thanks for Applying")],-1)),P=[L],R={props:{Eventname:{type:String,required:!0},Date:{type:String,required:!0},Time:{type:String,required:!0},Id:{type:String,required:!0}},setup(o){const a=o;m({doctype:"EventsTimeing",fields:["name1","date","time","no_of_seats","seats_filled","name"],auto:!0});const t=f({Name:d(""),Mobile:d(""),Seats:d(0),SetingUp:d(0)}),x=m({doctype:"EventApply",fields:["event_name","phone_no","name1","date","time","seats"],auto:!0});function v(){const c=t.Seats+1;t.SetingUp++,x.insert.submit({event_name:a.Eventname,phone_no:t.Mobile,name1:t.Name,date:a.Date,time:a.Time,seats:c,id:a.Id})}return(c,s)=>{const b=k("Button");return p(),r("div",E,[e("div",A,[n(t).SetingUp==0?(p(),r("div",I,[T,e("div",B,[e("div",M,[U,_(e("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>n(t).Name=i),type:"text",class:"rounded text-sm border-0 bg-white p-2"},null,512),[[u,n(t).Name]])]),e("div",V,[q,_(e("input",{"onUpdate:modelValue":s[1]||(s[1]=i=>n(t).Mobile=i),type:"text",class:"rounded text-sm border-0 bg-white p-2"},null,512),[[u,n(t).Mobile]])]),e("div",C,[h(b,{variant:"solid",class:"rounded font-semibold",onClick:s[2]||(s[2]=i=>v())},{default:y(()=>[D]),_:1})])])])):(p(),r("div",j,P))])])}}};var F=g(R,[["__scopeId","data-v-f5171c86"]]);export{F as default};