"use strict";(self.webpackChunkvaccine_scheduler=self.webpackChunkvaccine_scheduler||[]).push([[493],{7987:function(e,t,n){n.d(t,{Z:function(){return z}});var r=n(4942),o=n(3366),a=n(7462),c=n(7294),i=n(600),l=n(7663),u=n(8440),m=n(2067),d=n(5893),s=(0,m.Z)((0,d.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),f=(0,m.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),v=(0,m.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=n(9240),h=n(2371),Z=n(1797),b=n(2717);function g(e){return(0,b.Z)("MuiCheckbox",e)}var y=(0,n(5495).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),x=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],k=(0,Z.ZP)(u.Z,{shouldForwardProp:function(e){return(0,Z.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat((0,p.Z)(n.color))]]}})((function(e){var t,n=e.theme,o=e.ownerState;return(0,a.Z)({color:n.palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:(0,l.Fq)("default"===o.color?n.palette.action.active:n.palette[o.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(t={},(0,r.Z)(t,"&.".concat(y.checked,", &.").concat(y.indeterminate),{color:n.palette[o.color].main}),(0,r.Z)(t,"&.".concat(y.disabled),{color:n.palette.action.disabled}),t))})),E=(0,d.jsx)(f,{}),S=(0,d.jsx)(s,{}),w=(0,d.jsx)(v,{}),z=c.forwardRef((function(e,t){var n,r,l=(0,h.Z)({props:e,name:"MuiCheckbox"}),u=l.checkedIcon,m=void 0===u?E:u,s=l.color,f=void 0===s?"primary":s,v=l.icon,Z=void 0===v?S:v,b=l.indeterminate,y=void 0!==b&&b,z=l.indeterminateIcon,C=void 0===z?w:z,M=l.inputProps,I=l.size,P=void 0===I?"medium":I,j=(0,o.Z)(l,x),A=y?C:Z,F=y?C:m,D=(0,a.Z)({},l,{color:f,indeterminate:y,size:P}),H=function(e){var t=e.classes,n=e.indeterminate,r=e.color,o={root:["root",n&&"indeterminate","color".concat((0,p.Z)(r))]},c=(0,i.Z)(o,g,t);return(0,a.Z)({},t,c)}(D);return(0,d.jsx)(k,(0,a.Z)({type:"checkbox",inputProps:(0,a.Z)({"data-indeterminate":y},M),icon:c.cloneElement(A,{fontSize:null!=(n=A.props.fontSize)?n:P}),checkedIcon:c.cloneElement(F,{fontSize:null!=(r=F.props.fontSize)?r:P}),ownerState:D,ref:t},j,{classes:H}))}))},8712:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(7294),o=n(4320),a=n(9308),c=n(1570),i=n(78),l=n(7315),u=n(4575),m=n(7987),d=n(229),s=n(5444);function f(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(){var e=(0,d.y)(),t=e.age,n=e.isMale;return r.createElement(r.Fragment,null,r.createElement("form",{onSubmit:function(e){e.preventDefault();for(var t,n=f(e.currentTarget.elements);!(t=n()).done;){if(t.value.checked)return void(0,s.navigate)("../result-free-vac")}(0,s.navigate)("../step3")}},r.createElement(o.ZP,{container:!0,spacing:3},r.createElement(o.ZP,{item:!0,xs:12},r.createElement(a.Z,{variant:"h5",sx:{mt:2}},"Выберите справедливые утверждения")),r.createElement(o.ZP,{item:!0,xs:12},r.createElement(u.Z,null,n&&t<27?r.createElement(c.Z,{control:r.createElement(m.Z,null),label:"Я призывник"}):null,r.createElement(c.Z,{control:r.createElement(m.Z,null),label:"У меня есть заболевание легких"}),t>=60?r.createElement(c.Z,{control:r.createElement(m.Z,null),label:"Я пенсионер"+(n?"":"ка")+" и живу в интернате / доме престарелых и т. п."}):null)),r.createElement(o.ZP,{item:!0,xs:6,sm:3},r.createElement(i.Z,{to:"../step1",fullWidth:!0,component:l.Z,variant:"outlined",color:"primary"},"Назад")),r.createElement(o.ZP,{item:!0,xs:6,sm:3},r.createElement(i.Z,{fullWidth:!0,type:"submit",variant:"contained",color:"primary"},"Дальше")))))}},229:function(e,t,n){n.d(t,{y:function(){return o},K:function(){return a}});var r=n(7294);function o(){var e=a("dob")[0],t="male"===a("sex")[0],n=function(e){var t=e.split("."),n=t[0],r=t[1],o=t[2],a=new Date,c=new Date(Number(o),Number(r)-1,Number(n)),i=a.getFullYear()-c.getFullYear(),l=a.getMonth()-c.getMonth();(l<0||0===l&&a.getDate()<c.getDate())&&i--;return i}(e);return{isMale:t,age:n}}function a(e,t){void 0===t&&(t="");var n=r.useState((function(){var n=window.localStorage.getItem(e);return null!==n?n:t})),o=n[0],a=n[1];return r.useEffect((function(){window.localStorage.setItem(e,o)}),[e,o]),[o,a]}}}]);
//# sourceMappingURL=component---src-pages-pcv-step-2-tsx-8b0b91b9003b9cd74c34.js.map