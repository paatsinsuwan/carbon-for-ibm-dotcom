(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1717:function(e,a,t){"use strict";t.r(a);t(946),t(1445),t(1447);var n=t(101),r=t.n(n),c=t(0),o=t.n(c),i=t(28),l=t(2),m=t.n(l);const p=({api:e,active:a})=>{const[t,n]=Object(c.useState)("white"),r=Object(c.useCallback)(a=>{const{value:t}=a.target;n(t),e.getChannel().emit("carbon-theme/current",t)},[e]);return a&&o.a.createElement(i.Form,null,o.a.createElement(i.Form.Field,{label:"Select Carbon theme:"},o.a.createElement(i.Form.Select,{name:"carbon-theme",value:t,onChange:r,size:"flex"},o.a.createElement("option",{key:"white",value:"white"},"White"),o.a.createElement("option",{key:"g10",value:"g10"},"Gray 10"),o.a.createElement("option",{key:"g90",value:"g90"},"Gray 90"),o.a.createElement("option",{key:"g100",value:"g100"},"Gray 100"))))};p.propTypes={api:m.a.shape({getChannel:m.a.func}).isRequired,active:m.a.bool.isRequired};var u=p;r.a.register("carbon-theme",e=>{r.a.addPanel("carbon-theme/panel",{title:"Carbon theme",render:({active:a,key:t})=>o.a.createElement(u,{api:e,key:t,active:a}),paramKey:"carbon-theme"})})},632:function(e,a,t){t(633),t(948),t(1717),e.exports=t(563)},671:function(e,a){}},[[632,1,2]]]);