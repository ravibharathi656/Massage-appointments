import{_,P as p,r as i,o,y as d,w as n,z as u,a as m,b as a,t as b,f as k,A as P,B as D,d as h,C as x,F as f,q as B}from"./index.64041f8b.js";const $={name:"Tooltip",components:{Popover:p},props:{hoverDelay:{default:.5},placement:{default:"top"},text:{type:String,default:null}}},w={key:0,class:"rounded bg-gray-900 px-2 py-1 text-xs text-white shadow-xl"},F={class:"py-px"};function T(t,g,r,C,y,s){const l=i("Popover");return o(),d(l,{trigger:"hover",hoverDelay:r.hoverDelay,placement:r.placement},{target:n(()=>[u(t.$slots,"default")]),body:n(()=>[u(t.$slots,"body",{},()=>[r.text?(o(),m("div",w,[a("div",F,b(r.text),1)])):k("",!0)])]),_:3},8,["hoverDelay","placement"])}var z=_($,[["render",T]]);const A={name:"FontColor",props:["editor"],components:{Popover:p,Tooltip:z},methods:{setBackgroundColor(t){t.name!="Default"?this.editor.chain().focus().toggleHighlight({color:t.hex}).run():this.editor.chain().focus().unsetHighlight().run()},setForegroundColor(t){t.name!="Default"?this.editor.chain().focus().setColor(t.hex).run():this.editor.chain().focus().unsetColor().run()}},computed:{foregroundColors(){return[{name:"Default",hex:"#1F272E"},{name:"Yellow",hex:"#ca8a04"},{name:"Orange",hex:"#ea580c"},{name:"Red",hex:"#dc2626"},{name:"Green",hex:"#16a34a"},{name:"Blue",hex:"#1579D0"},{name:"Purple",hex:"#9333ea"},{name:"Pink",hex:"#db2777"}]},backgroundColors(){return[{name:"Default",hex:null},{name:"Yellow",hex:"#fef9c3"},{name:"Orange",hex:"#ffedd5"},{name:"Red",hex:"#fee2e2"},{name:"Green",hex:"#dcfce7"},{name:"Blue",hex:"#D3E9FC"},{name:"Purple",hex:"#f3e8ff"},{name:"Pink",hex:"#fce7f3"}]}}},S={class:"p-2"},E=a("div",{class:"text-sm text-gray-700"},"Text Color",-1),R={class:"mt-1 grid grid-cols-8 gap-1"},j=["aria-label","onClick"],G=a("div",{class:"mt-2 text-sm text-gray-700"},"Background Color",-1),H={class:"mt-1 grid grid-cols-8 gap-1"},N=["aria-label","onClick"];function O(t,g,r,C,y,s){const l=i("Tooltip"),v=i("Popover");return o(),d(v,{transition:"default"},{target:n(({togglePopover:e,isOpen:c})=>[u(t.$slots,"default",P(D({onClick:()=>e(),isActive:c})))]),"body-main":n(()=>[a("div",S,[E,a("div",R,[(o(!0),m(f,null,h(s.foregroundColors,e=>(o(),d(l,{class:"flex",key:e.name,text:e.name},{default:n(()=>[a("button",{"aria-label":e.name,class:"flex h-5 w-5 items-center justify-center rounded border text-base",style:x({color:e.hex}),onClick:c=>s.setForegroundColor(e)}," A ",12,j)]),_:2},1032,["text"]))),128))]),G,a("div",H,[(o(!0),m(f,null,h(s.backgroundColors,e=>(o(),d(l,{class:"flex",key:e.name,text:e.name},{default:n(()=>[a("button",{"aria-label":e.name,class:B(["flex h-5 w-5 items-center justify-center rounded border text-base text-gray-900",e.hex?"border-transparent":"border-gray-200"]),style:x({backgroundColor:e.hex}),onClick:c=>s.setBackgroundColor(e)}," A ",14,N)]),_:2},1032,["text"]))),128))])])]),_:3})}var Y=_(A,[["render",O]]);export{Y as default};
