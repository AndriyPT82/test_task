(this.webpackJsonptest_task=this.webpackJsonptest_task||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(19),s=n.n(r),o=n(8),i=(n(25),n(4)),u=n(9),l=n(2),j=(n(26),n(12)),b=n.n(j),d=n(10),O=(n(27),n(28),n(1)),m=function(e){var t=e.inputName,n=e.inputValue,c=e.placeholder,a=e.handleChange,r=e.handleBlur,s=e.errorMessage,o=e.clearField;return Object(O.jsxs)("div",{className:"input-container","error-message":s,children:[!!s&&Object(O.jsx)("div",{className:"input-cleaner",name:t,onClick:o,children:"\u292b"}),Object(O.jsx)("input",{className:b()("input",{"input--error":!!s}),type:"text",name:t,value:n,placeholder:c,onChange:a,onBlur:r})]})},h=function(){var e=Object(c.useState)({name:"",number:""}),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({name:"",number:""}),s=Object(u.a)(r,2),o=s[0],j=s[1],b=Object(l.e)(),h=function(e,t){var n={},c=!0;if(!t.length||t.match(/\d/)&&"name"===e)c=!1,n[e]=t.length?"Only letters allowed":"This field in required";else if("number"===e&&(isNaN(t)||12!==t.length)){c=!1;var a=isNaN(+t)?"Only numbers allowed":"Should contain 12 characters";n[e]=a}return!c&&j((function(e){return Object(i.a)(Object(i.a)({},e),n)})),c},f=function(e){var t=e.target,n=t.name,c=t.value;h(n,c.trim())},p=function(e){var t=e.target.getAttribute("name");j((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(d.a)({},t,""))})),a((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(d.a)({},t,""))}))},x=function(e){var t=e.target,n=t.name,c=t.value;o[n]&&j((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(d.a)({},n,""))})),a((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(d.a)({},n,c))}))},v=n.name,g=n.number;return Object(O.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();for(var t=!0,c=0,a=Object.entries(n);c<a.length;c++){var r=a[c],s=Object(u.a)(r,2),o=s[0],i=s[1];h(o,i)||(t=!1)}t&&(console.log(n),b.push("/"))},children:[Object(O.jsx)(m,{inputName:"name",inputValue:v,placeholder:"Name",errorMessage:o.name,handleChange:x,handleBlur:f,clearField:p}),Object(O.jsx)(m,{inputName:"number",inputValue:g,placeholder:"Number",errorMessage:o.number,handleChange:x,handleBlur:f,clearField:p}),Object(O.jsx)("button",{className:"button button--order",children:"Order"})]})},f=(n(35),function(e){var t=e.id,n=e.name,c=e.category,a=e.price,r=e.modal,s=void 0!==r&&r;return Object(O.jsxs)("li",{className:b()("card",{"card--modal":!!s}),children:[!!s&&Object(O.jsx)(o.b,{to:"/",className:"card__close",children:"\u292c"}),t?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"card__category",children:c}),Object(O.jsx)("div",{className:"card__name",children:n}),Object(O.jsxs)("div",{className:b()("card__order",{"card__order--modal":!!s}),children:[Object(O.jsx)("span",{className:"card__price",children:a.toFixed(2)}),s?Object(O.jsx)(h,{}):Object(O.jsx)(o.b,{to:"goods/".concat(t),className:"button card__button",children:"Buy"})]})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:"Not found"}),Object(O.jsx)(o.b,{to:"/",className:"button",children:"CLOSE"})]})]})}),p=(n(36),function(){var e=Object(c.useContext)(v).goods;return Object(O.jsx)("ul",{className:"cards",children:e.map((function(e){return Object(O.jsx)(a.a.Fragment,{children:Object(O.jsx)(f,Object(i.a)({},e))},e.id)}))})}),x=(n(37),function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useContext)(v).goods,s=Object(l.f)().id;return Object(c.useEffect)((function(){if(s){var e=r.find((function(e){return e.id===+s}));a(e)}}),[s]),Object(O.jsx)("div",{className:"modal",children:Object(O.jsx)(f,Object(i.a)({modal:!0},n))})}),v=a.a.createContext(null);var g=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(l.e)();return Object(c.useEffect)((function(){fetch("https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e,t){return Object(i.a)(Object(i.a)({},e),{},{id:t+1})}));a(t)}))}),[]),n.length?Object(O.jsx)(v.Provider,{value:{goods:n},children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(l.a,{path:"/",component:p}),Object(O.jsx)(l.a,{path:"/goods/:id",component:x}),Object(O.jsx)("button",{className:"button button--cheapest",name:"cheapest",onClick:function(){var e=n.sort((function(e,t){return e.price-t.price}))[0].id;r.push("/goods/".concat(e))},children:"Buy cheapest"})]})}):Object(O.jsx)("h1",{children:"Loading..."})};n(38),s.a.render(Object(O.jsx)(o.a,{children:Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(g,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.9aeab9cd.chunk.js.map