"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[296],{3296:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(9434),a=n(2791),i=n(4270),o=n(9439),c="ContactForm_conctactForm__srl99",u="ContactForm_label__-cVXI",l="ContactForm_button__eSwX9",s="NOT_FOUND";var f=function(e,t){return e===t};function d(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,a=void 0===r?f:r,i=n.maxSize,o=void 0===i?1:i,c=n.resultEqualityCheck,u=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}}(a),l=1===o?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:s},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(u):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return s}return{get:r,put:function(t,a){r(t)===s&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(o,u);function d(){var t=l.get(arguments);if(t===s){if(t=e.apply(null,arguments),c){var n=l.getEntries(),r=n.find((function(e){return c(e.value,t)}));r&&(t=r.value)}l.put(arguments,t)}return t}return d.clearCache=function(){return l.clear()},d}function p(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function v(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var i,o=0,c={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(c=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=c,s=l.memoizeOptions,f=void 0===s?n:s,d=Array.isArray(f)?f:[f],v=p(r),m=e.apply(void 0,[function(){return o++,u.apply(null,arguments)}].concat(d)),h=e((function(){for(var e=[],t=v.length,n=0;n<t;n++)e.push(v[n].apply(null,arguments));return i=m.apply(null,e)}));return Object.assign(h,{resultFunc:u,memoizedResultFunc:m,dependencies:v,lastResult:function(){return i},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),h};return a}var m=v(d),h=function(e){return e.contacts.contacts},y=function(e){return e.filter},b=function(e){return e.contacts.isLoading},g=function(e){return e.contacts.error},j=(m([h,y],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),n(3634)),_=n(184),x=function(){var e=(0,a.useState)(""),t=(0,o.Z)(e,2),n=t[0],i=t[1],s=(0,a.useState)(""),f=(0,o.Z)(s,2),d=f[0],p=f[1],v=(0,r.v9)(h),m=(0,r.I0)(),y={name:i,number:p},b=function(e){var t=e.target,n=t.name,r=t.value;y[n](r)};return(0,_.jsx)("div",{className:c,children:(0,_.jsxs)("form",{onSubmit:function(e){e.preventDefault();if(function(e){return v.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))}(n))return alert("".concat(n," is already in contacts."));m((0,j.uK)({name:n,number:d})),i(""),p("")},children:[(0,_.jsxs)("label",{className:u,children:["Name",(0,_.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:b})]}),(0,_.jsxs)("label",{className:u,children:["Number",(0,_.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:d,onChange:b})]}),(0,_.jsx)("button",{type:"submit",className:l,children:"Add contact"})]})})},w="ContactList_button__7kL4l",O=function(){var e=(0,r.v9)(h),t=(0,r.v9)(y),n=r.I0;return(0,_.jsx)("ul",{children:e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return(0,_.jsxs)("li",{children:[e.name,": ",e.number,(0,_.jsx)("button",{type:"button",onClick:function(){return t=e.id,n((0,j.GK)(t));var t},className:w,children:"Delete"})]})}))})},C={label:"FilterContact_label__fg+il"},k=n(4808),A=function(){var e=(0,r.v9)(y),t=(0,r.I0)();return(0,_.jsxs)("label",{className:C.label,children:["Find contact by name",(0,_.jsx)("input",{className:C.input,type:"text",name:"filter",value:e,onChange:function(e){return function(e){e.preventDefault(),t((0,k.T)(e.target.value))}(e)}})]})},E=n(8985),L=n.n(E),S="Loader_Loader__wqo9C",F=function(){return(0,_.jsx)("div",{className:S,children:(0,_.jsx)(L(),{color:"#36d7b7",size:35,"data-testid":"loader"})})},N=function(){var e=(0,r.I0)(),t=(0,r.v9)(b),n=(0,r.v9)(g);return(0,a.useEffect)((function(){e((0,j.yF)())}),[e]),(0,_.jsxs)("div",{children:[(0,_.jsx)(i.q,{children:(0,_.jsx)("title",{children:"Contacts"})}),(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{children:(0,_.jsx)("h1",{children:"Phonebook"})}),(0,_.jsxs)("div",{children:[(0,_.jsx)(x,{}),(0,_.jsx)(A,{})]}),(0,_.jsxs)("div",{children:[t?(0,_.jsx)(F,{}):(0,_.jsx)(O,{}),n&&(0,_.jsx)("getError",{})]})]})]})}},8985:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return i(t,e),t},c=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var u=o(n(2791)),l=n(8945),s=(0,n(7074).createAnimation)("ScaleLoader","0% {transform: scaley(1.0)} 50% {transform: scaley(0.4)} 100% {transform: scaley(1.0)}","scale");t.default=function(e){var t=e.loading,n=void 0===t||t,a=e.color,i=void 0===a?"#000000":a,o=e.speedMultiplier,f=void 0===o?1:o,d=e.cssOverride,p=void 0===d?{}:d,v=e.height,m=void 0===v?35:v,h=e.width,y=void 0===h?4:h,b=e.radius,g=void 0===b?2:b,j=e.margin,_=void 0===j?2:j,x=c(e,["loading","color","speedMultiplier","cssOverride","height","width","radius","margin"]),w=r({display:"inherit"},p),O=function(e){return{backgroundColor:i,width:(0,l.cssValue)(y),height:(0,l.cssValue)(m),margin:(0,l.cssValue)(_),borderRadius:(0,l.cssValue)(g),display:"inline-block",animation:"".concat(s," ").concat(1/f,"s ").concat(.1*e,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return n?u.createElement("span",r({style:w},x),u.createElement("span",{style:O(1)}),u.createElement("span",{style:O(2)}),u.createElement("span",{style:O(3)}),u.createElement("span",{style:O(4)}),u.createElement("span",{style:O(5)})):null}},7074:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return r;var a=document.createElement("style");document.head.appendChild(a);var i=a.sheet,o="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return i&&i.insertRule(o,0),r}},8945:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(e){if("number"===typeof e)return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var a=(e.match(/[^0-9]*$/)||"").toString();return n[a]?{value:t,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=r,t.cssValue=function(e){var t=r(e);return"".concat(t.value).concat(t.unit)}}}]);
//# sourceMappingURL=296.d8fd9234.chunk.js.map