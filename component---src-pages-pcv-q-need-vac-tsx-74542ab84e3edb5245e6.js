"use strict";(self.webpackChunkvaccine_scheduler=self.webpackChunkvaccine_scheduler||[]).push([[275],{718:function(e,t,n){n.d(t,{Z:function(){return D}});var r=n(2982),o=n(7294),c=n(4320),a=n(9308),i=n(1570),l=n(4575),u=n(4942),d=n(3366),s=n(7462),m=n(9408),h=n(7663),f=n(8440),v=n(2067),p=n(5893),g=(0,v.Z)((0,p.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),k=(0,v.Z)((0,p.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),x=(0,v.Z)((0,p.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),Z=n(9240),b=n(2371),w=n(1797),E=n(240);function P(e){return(0,E.Z)("MuiCheckbox",e)}var S=(0,n(2194).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),C=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],y=(0,w.ZP)(f.Z,{shouldForwardProp:function(e){return(0,w.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat((0,Z.Z)(n.color))]]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,s.Z)({color:n.palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:(0,h.Fq)("default"===r.color?n.palette.action.active:n.palette[r.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(t={},(0,u.Z)(t,"&.".concat(S.checked,", &.").concat(S.indeterminate),{color:n.palette[r.color].main}),(0,u.Z)(t,"&.".concat(S.disabled),{color:n.palette.action.disabled}),t))})),z=(0,p.jsx)(k,{}),M=(0,p.jsx)(g,{}),F=(0,p.jsx)(x,{}),I=o.forwardRef((function(e,t){var n,r,c=(0,b.Z)({props:e,name:"MuiCheckbox"}),a=c.checkedIcon,i=void 0===a?z:a,l=c.color,u=void 0===l?"primary":l,h=c.icon,f=void 0===h?M:h,v=c.indeterminate,g=void 0!==v&&v,k=c.indeterminateIcon,x=void 0===k?F:k,w=c.inputProps,E=c.size,S=void 0===E?"medium":E,I=(0,d.Z)(c,C),j=g?x:f,B=g?x:i,D=(0,s.Z)({},c,{color:u,indeterminate:g,size:S}),H=function(e){var t=e.classes,n=e.indeterminate,r=e.color,o={root:["root",n&&"indeterminate","color".concat((0,Z.Z)(r))]},c=(0,m.Z)(o,P,t);return(0,s.Z)({},t,c)}(D);return(0,p.jsx)(y,(0,s.Z)({type:"checkbox",inputProps:(0,s.Z)({"data-indeterminate":g},w),icon:o.cloneElement(j,{fontSize:null!=(n=j.props.fontSize)?n:S}),checkedIcon:o.cloneElement(B,{fontSize:null!=(r=B.props.fontSize)?r:S}),ownerState:D,ref:t},I,{classes:H}))})),j=n(5444),B=n(922);function D(e){var t=(0,o.useState)("initial"),n=t[0],r=t[1],u=(0,o.useState)(!1),d=u[0],s=u[1];return o.createElement("form",{onSubmit:function(t){t.preventDefault();var n=H(t.currentTarget);"checked"===n&&(0,j.navigate)(e.nextPageForChecked),"nothing"===n&&(0,j.navigate)(e.nextPageForNothing)},onChange:function(e){var t=H(e.currentTarget);r(t),s("initial"!==t)}},o.createElement(c.ZP,{container:!0,spacing:3},o.createElement(c.ZP,{item:!0,xs:12},o.createElement(a.Z,{variant:"h5",sx:{mt:2}},"Выберите справедливые утверждения")),o.createElement(c.ZP,{item:!0,xs:12},o.createElement(l.Z,null,e.checkboxes.map((function(e,t){return o.createElement(i.Z,{disabled:"nothing"===n,control:o.createElement(I,null),key:t,label:e,sx:{mb:1}})})),o.createElement(i.Z,{disabled:"checked"===n,control:o.createElement(I,null),label:"Ничего из вышеперечисленного",sx:{mb:1}}))),o.createElement(B.Z,{prevPage:e.prevPage,nextEnabled:d})))}function H(e){for(var t=(0,r.Z)(e.querySelectorAll('[type="checkbox"]')),n=0;n<t.length;n++){var o=t[n];if(o.checked&&n<t.length-1)return"checked";if(o.checked&&n===t.length-1)return"nothing"}return"initial"}},124:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var r=n(7294),o=n(229),c=n(718);function a(){var e=function(e){return[e>=49&&"Мне 50 лет или больше","Я курю (табак)","У меня недавно был острый средний отит / менингит / пневмония, от которых я сейчас выздоравливаю","У меня хроническое заболевание легких и/или бронхиальная астма","У меня хроническое заболевание сердечно-сосудистой системы","У меня хроническое заболевание печени и/или почек","У меня сахарный диабет","У меня нет селезенки или она не работает","У меня туберкулез","У меня иммунодефицит (в том числе от ВИЧ-инфекции или от лечения онкологических заболеваний)","У меня была пересадка костного мозга или органов","У меня установлен кохлеарный имплант / мне планируют установить кохлеарный имплант","У меня подтекает спинномозговая жидкость","Я живу в интернате, армии / другом организованном коллективе","Я страдаю алкоголизмом"].filter(Boolean)}((0,o.y)().age);return r.createElement(c.Z,{checkboxes:e,prevPage:"../q-free-vac",nextPageForChecked:"../r-need-vac",nextPageForNothing:"../r-no-vac"})}},229:function(e,t,n){n.d(t,{y:function(){return o},K:function(){return c}});var r=n(7294);function o(){var e=c("dob")[0],t="male"===c("sex")[0],n=function(e){var t=e.split("."),n=t[0],r=t[1],o=t[2],c=new Date,a=new Date(Number(o),Number(r)-1,Number(n)),i=c.getFullYear()-a.getFullYear(),l=c.getMonth()-a.getMonth();(l<0||0===l&&c.getDate()<a.getDate())&&i--;return i}(e);return{isMale:t,age:n}}function c(e,t){void 0===t&&(t="");var n=r.useState((function(){var n="undefined"!=typeof window?window.localStorage.getItem(e):null;return null!==n?n:t})),o=n[0],c=n[1];return r.useEffect((function(){"undefined"!=typeof window&&window.localStorage.setItem(e,o)}),[e,o]),[o,c]}}}]);
//# sourceMappingURL=component---src-pages-pcv-q-need-vac-tsx-74542ab84e3edb5245e6.js.map