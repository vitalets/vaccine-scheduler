"use strict";(self.webpackChunkvaccine_scheduler=self.webpackChunkvaccine_scheduler||[]).push([[137],{9531:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(7294),a=n(4320),l=n(9308),u=n(2973),c=n(1570),o=n(81),i=n(8511),m=n(4527),f=n(1780),d=n(229),s=n(5444),v=n(922);function g(){var e=(0,d.K)("dob"),t=e[0],n=e[1],g=(0,d.K)("sex"),E=g[0],p=g[1];return r.createElement(r.Fragment,null,r.createElement("form",{onSubmit:function(e){e.preventDefault(),e.currentTarget.reportValidity()&&(0,s.navigate)("../q-free-vac")}},r.createElement(a.ZP,{container:!0,spacing:3},r.createElement(a.ZP,{item:!0,xs:12},r.createElement(l.Z,{variant:"h5",sx:{mt:2}},"Заполните данные",r.createElement("br",null)," (свои или ребенка)")),r.createElement(a.ZP,{item:!0,xs:12},r.createElement(u.Z,{name:"dob",label:"Дата рождения",value:t,onChange:function(e){return n(e.target.value)},required:!0,autoFocus:!0,autoComplete:"off",inputProps:{pattern:"\\d{2}\\.\\d{2}\\.\\d{4}",title:"дд.мм.гггг"},placeholder:"дд.мм.гггг"})),r.createElement(a.ZP,{item:!0,xs:12},r.createElement(m.Z,{component:"fieldset"},r.createElement(f.Z,{component:"legend"},"Пол *"),r.createElement(i.Z,{row:!0,"aria-label":"Пол",name:"sex",value:E,onChange:function(e){return p(e.target.value)}},r.createElement(c.Z,{value:"male",control:r.createElement(o.Z,{required:!0}),label:"М"}),r.createElement(c.Z,{value:"female",control:r.createElement(o.Z,{required:!0}),label:"Ж"})))),r.createElement(v.Z,{prevPage:"../index",nextEnabled:!0}))))}},229:function(e,t,n){n.d(t,{y:function(){return a},K:function(){return l}});var r=n(7294);function a(){var e=l("dob")[0],t="male"===l("sex")[0],n=function(e){var t=e.split("."),n=t[0],r=t[1],a=t[2],l=new Date,u=new Date(Number(a),Number(r)-1,Number(n)),c=l.getFullYear()-u.getFullYear(),o=l.getMonth()-u.getMonth();(o<0||0===o&&l.getDate()<u.getDate())&&c--;return c}(e);return{isMale:t,age:n}}function l(e,t){void 0===t&&(t="");var n=r.useState((function(){var n="undefined"!=typeof window?window.localStorage.getItem(e):null;return null!==n?n:t})),a=n[0],l=n[1];return r.useEffect((function(){"undefined"!=typeof window&&window.localStorage.setItem(e,a)}),[e,a]),[a,l]}}}]);
//# sourceMappingURL=component---src-pages-pcv-q-dob-sex-tsx-acfb4f4fa93d74ea5bb3.js.map