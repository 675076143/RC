var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,a=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(r)for(var n of r(t))o.call(t,n)&&c(e,n,t[n]);return e},u=(e,r)=>t(e,n(r)),i=(e,t)=>{var n={};for(var c in e)l.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&r)for(var c of r(e))t.indexOf(c)<0&&o.call(e,c)&&(n[c]=e[c]);return n};import{R as s,r as m,a as d}from"./vendor.f6a89a1f.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const p=e=>{const t=e,{children:n,onClick:r}=t,l=i(t,["children","onClick"]),o={};return l.disabled&&Object.assign(o,{color:"gray",backgroundColor:"lightgray",cursor:"not-allowed",borderColor:"lightgray"}),s.createElement("button",u(a({style:o},l),{className:"button",onClick:r}),n)};const g=e=>{const t=e,{placeholder:n,onChange:r}=t,l=i(t,["placeholder","onChange"]);return s.createElement("input",u(a({},l),{placeholder:n,onChange:e=>{null==r||r(e.target.value)},className:"input"}))};const f=e=>{const t=e,{onChange:n}=t,r=i(t,["onChange"]),[l,o]=m.exports.useState("range"),c=m.exports.useRef([null,null]);return s.createElement("div",u(a({},r),{className:l,onFocus:()=>{o("range range-focus")},onBlur:()=>o("range")}),s.createElement("input",{placeholder:"min",onChange:e=>{c.current=[Number(e.target.value),c.current[1]],null==n||n(c.current)}}),"~",s.createElement("input",{placeholder:"max",onChange:e=>{c.current=[c.current[0],Number(e.target.value)],null==n||n(c.current)}}))};const h=e=>{const t=e,{onChange:n}=t,r=i(t,["onChange"]),[l,o]=m.exports.useState("filter"),c=m.exports.useRef(["=",""]);return s.createElement("div",u(a({},r),{className:l,onFocus:()=>{o("filter filter-focus")},onBlur:()=>o("filter")}),s.createElement("select",{onChange:e=>{c.current=[e.target.value,c.current[1]],null==n||n(c.current)}},s.createElement("option",null,"="),s.createElement("option",null,">"),s.createElement("option",null,"<"),s.createElement("option",null,">="),s.createElement("option",null,"<=")),s.createElement("input",{onChange:e=>{c.current=[c.current[0],e.target.value],null==n||n(c.current)}}))};const E=e=>s.createElement("div",{className:"divider","text-position":"50%"},e.children);function b(){return s.createElement("div",{className:"App"},s.createElement("header",null,s.createElement("h2",null,"React业务组件库")),s.createElement("h2",null,"按钮"),s.createElement(p,{onClick:()=>{console.log("我被点了")}},"点点看？"),s.createElement("h2",null,"输入框"),s.createElement(g,{placeholder:"愣着干嘛？写点啥啊",onChange:e=>{console.log(e)}}),s.createElement("h2",null,"输入框[范围]"),s.createElement(f,{onChange:e=>{console.log(e)}}),s.createElement("h2",null,"筛选"),s.createElement(h,{onChange:e=>{console.log(e)}}),s.createElement("h2",null,"分割线"),s.createElement(E,null,"Divider"))}d.render(s.createElement(s.StrictMode,null,s.createElement(b,null)),document.getElementById("root"));
