var v=Object.defineProperty,y=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var h=(t,e,o)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,s=(t,e)=>{for(var o in e||(e={}))E.call(e,o)&&h(t,o,e[o]);if(m)for(var o of m(e))g.call(e,o)&&h(t,o,e[o]);return t},i=(t,e)=>y(t,N(e));var d=(t,e)=>{var o={};for(var u in t)E.call(t,u)&&e.indexOf(u)<0&&(o[u]=t[u]);if(t!=null&&m)for(var u of m(t))e.indexOf(u)<0&&g.call(t,u)&&(o[u]=t[u]);return o};import{R as r,r as p,a as F}from"./vendor.efdaefdd.js";const B=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))u(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&u(a)}).observe(document,{childList:!0,subtree:!0});function o(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerpolicy&&(n.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?n.credentials="include":l.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(l){if(l.ep)return;l.ep=!0;const n=o(l);fetch(l.href,n)}};B();const b=t=>{const f=t,{children:e,onClick:o,disabled:u=!1,loading:l=!1}=f,n=d(f,["children","onClick","disabled","loading"]),a={};u&&Object.assign(a,{color:"gray",backgroundColor:"lightgray",cursor:"not-allowed",borderColor:"lightgray"});const c=["button"];return l&&c.push("loading"),r.createElement("button",i(s({style:a,disabled:l||u},n),{className:c.join(" "),onClick:o}),l&&r.createElement("div",{className:"loader"}),e)};const x=t=>{const l=t,{placeholder:e,onChange:o}=l,u=d(l,["placeholder","onChange"]);return r.createElement("input",i(s({},u),{placeholder:e,onChange:n=>{o==null||o(n.target.value)},className:"input"}))};const A=t=>{const a=t,{onChange:e}=a,o=d(a,["onChange"]),[u,l]=p.exports.useState("range"),n=p.exports.useRef([null,null]);return r.createElement("div",i(s({},o),{className:u,onFocus:()=>{l("range range-focus")},onBlur:()=>l("range")}),r.createElement("input",{placeholder:"min",onChange:c=>{n.current=[Number(c.target.value),n.current[1]],e==null||e(n.current)}}),"~",r.createElement("input",{placeholder:"max",onChange:c=>{n.current=[n.current[0],Number(c.target.value)],e==null||e(n.current)}}))};const C=t=>{const a=t,{onChange:e}=a,o=d(a,["onChange"]),[u,l]=p.exports.useState("filter"),n=p.exports.useRef(["=",""]);return r.createElement("div",i(s({},o),{className:u,onFocus:()=>{l("filter filter-focus")},onBlur:()=>l("filter")}),r.createElement("select",{onChange:c=>{n.current=[c.target.value,n.current[1]],e==null||e(n.current)}},r.createElement("option",null,"="),r.createElement("option",null,">"),r.createElement("option",null,"<"),r.createElement("option",null,">="),r.createElement("option",null,"<=")),r.createElement("input",{onChange:c=>{n.current=[n.current[0],c.target.value],e==null||e(n.current)}}))};const R=t=>r.createElement("div",{className:"divider","text-position":"50%"},t.children);function O(){return r.createElement("div",{className:"App"},r.createElement("header",null,r.createElement("h2",null,"React\u4E1A\u52A1\u7EC4\u4EF6\u5E93")),r.createElement("h2",null,"\u6309\u94AE"),r.createElement(b,{onClick:()=>{console.log("\u6211\u88AB\u70B9\u4E86")}},"\u70B9\u70B9\u770B\uFF1F"),r.createElement("h2",null,"\u8F93\u5165\u6846"),r.createElement(x,{placeholder:"\u6123\u7740\u5E72\u561B\uFF1F\u5199\u70B9\u5565\u554A",onChange:t=>{console.log(t)}}),r.createElement("h2",null,"\u8F93\u5165\u6846[\u8303\u56F4]"),r.createElement(A,{onChange:t=>{console.log(t)}}),r.createElement("h2",null,"\u7B5B\u9009"),r.createElement(C,{onChange:t=>{console.log(t)}}),r.createElement("h2",null,"\u5206\u5272\u7EBF"),r.createElement(R,null,"Divider"))}F.render(r.createElement(r.StrictMode,null,r.createElement(O,null)),document.getElementById("root"));
