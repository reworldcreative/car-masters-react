"use strict";(self.webpackChunkwebpackreact=self.webpackChunkwebpackreact||[]).push([[2503],{361:function(e,u,t){t.d(u,{Z:function(){return a}});var n=t(7294);function a(e){var u=e.children,t=e.addclass;return n.createElement("button",{className:"button ".concat(t)},u)}},1909:function(e,u,t){t.d(u,{Z:function(){return E}});var n=t(7294),a=t(8506),r=(t(361),t(9655)),l=t(7294).useState,c=t(7294).useEffect;function o(e,u){return function(e){if(Array.isArray(e))return e}(e)||function(e,u){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,r,l,c=[],o=!0,i=!1;try{if(r=(t=t.call(e)).next,0===u){if(Object(t)!==t)return;o=!1}else for(;!(o=(n=r.call(t)).done)&&(c.push(n.value),c.length!==u);o=!0);}catch(e){i=!0,a=e}finally{try{if(!o&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(i)throw a}}return c}}(e,u)||function(e,u){if(!e)return;if("string"==typeof e)return i(e,u);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,u)}(e,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,u){(null==u||u>e.length)&&(u=e.length);for(var t=0,n=new Array(u);t<u;t++)n[t]=e[t];return n}function D(e){var u=e.priceAmount,t=e.months,a=e.status,i=o(l(0),2),D=i[0],s=i[1],m=o(l(0),2),E=m[0],F=m[1],A=o(l(0),2),f=A[0],d=A[1];return c((function(){var e;switch(a){case"poor":e=Math.ceil(u/t*.9);break;case"average":e=Math.ceil(u/t*.98);break;default:e=Math.ceil(u/t)}var n=Math.ceil(e/4),r=Math.ceil(2*n);s(r),F(e),d(n)}),[u,t,a]),n.createElement("div",{className:"calculator__block calculator-results"},n.createElement("p",{className:"visibility-hidden"},"information about payments according to the selected parameters"),n.createElement("div",{className:"calculator-results__container first"},n.createElement("div",{className:"calculator-results__block"},n.createElement("p",{className:"secondary-text"},"Bi-Weekly Payment"),n.createElement("p",{className:"calculator-results__amount caption accent"},n.createElement("span",{className:"visibility-hidden"},D,"$"),n.createElement("span",{"aria-hidden":"true"},"$ ",D.toLocaleString()))),n.createElement("div",{className:"calculator-results__container"},n.createElement("div",{className:"calculator-results__block"},n.createElement("p",{className:"secondary-text"},"Monthly Payment"),n.createElement("p",{className:"calculator-results__amount caption"},n.createElement("span",{className:"visibility-hidden"},E,"$"),n.createElement("span",{"aria-hidden":"true"},"$ ",E.toLocaleString()))),n.createElement("div",{className:"calculator-results__block"},n.createElement("p",{className:"secondary-text"},"Weekly Payment"),n.createElement("p",{className:"calculator-results__amount caption"},n.createElement("span",{className:"visibility-hidden"},f,"$"),n.createElement("span",{"aria-hidden":"true"},"$ ",f.toLocaleString()))))),n.createElement("div",{style:{width:"100%",height:"45px"},className:"calculator-results__button-wrapper"},n.createElement(r.rU,{className:"calculator-results__button accent button",to:"/quiz","aria-label":"Move to quiz page"},"Request a car")))}function s(e,u){return function(e){if(Array.isArray(e))return e}(e)||function(e,u){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,r,l,c=[],o=!0,i=!1;try{if(r=(t=t.call(e)).next,0===u){if(Object(t)!==t)return;o=!1}else for(;!(o=(n=r.call(t)).done)&&(c.push(n.value),c.length!==u);o=!0);}catch(e){i=!0,a=e}finally{try{if(!o&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(i)throw a}}return c}}(e,u)||function(e,u){if(!e)return;if("string"==typeof e)return m(e,u);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(e,u)}(e,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,u){(null==u||u>e.length)&&(u=e.length);for(var t=0,n=new Array(u);t<u;t++)n[t]=e[t];return n}function E(){var e=s((0,n.useState)(window.innerWidth<1e3),2),u=e[0],t=e[1];(0,n.useEffect)((function(){var e=function(){t(window.innerWidth<1e3)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var r=s((0,n.useState)(15e4),2),l=r[0],c=r[1],o=s((0,n.useState)(18),2),i=o[0],m=o[1],E=s((0,n.useState)("poor"),2),F=E[0],A=E[1],f=function(e){A(e.target.value)};return n.createElement("section",{className:"calculator"},n.createElement("div",{className:"calculator__wrapper"},n.createElement("div",{className:"calculator__head"},n.createElement("h2",{className:"section-title"},"Let’s figure out how much you can afford"),n.createElement("p",{className:"secondary-text "},"Before you start shopping, let’s figure out how much you can afford. Move the sliders to see how the loan duration and the total loan amount affect your monthly payments.")),n.createElement("div",{className:"calculator__container"},n.createElement("form",{className:"calculator__block calculator-form"},n.createElement("div",{className:"calculator-form__wrapper"},n.createElement("fieldset",{className:"calculator__type",role:"radiogroup","aria-labelledby":"statusCaption"},n.createElement("p",{className:"visibility-hidden",id:"statusCaption"},"choose one of car status"),n.createElement("div",null,n.createElement("input",{type:"radio",id:"Poor",name:"car-status-type",value:"poor",defaultChecked:!0,className:"visibility-hidden",onClick:f}),n.createElement("label",{className:"secondary-text radio-label",htmlFor:"Poor",tabIndex:"0"},"Poor")),n.createElement("div",null,n.createElement("input",{type:"radio",id:"Average",name:"car-status-type",value:"average",className:"visibility-hidden",onChange:f}),n.createElement("label",{className:"secondary-text radio-label",htmlFor:"Average",tabIndex:"0"},"Average")),n.createElement("div",null,n.createElement("input",{type:"radio",id:"Good",name:"car-status-type",value:"good",className:"visibility-hidden",onChange:f}),n.createElement("label",{className:"secondary-text radio-label",htmlFor:"Good",tabIndex:"0"},"Good"))),n.createElement("div",{className:"calculator-form__wrapper sliders"},n.createElement(a.Z,{defaultValue:"150000",text:"Loan Amount",type:"money",min:"10000",max:"500000",ariaLabel:"select price of the car",change:function(e){c(e)}}),n.createElement(a.Z,{defaultValue:"18",text:"Loan Duration",type:"month",min:"1",max:"60",ariaLabel:"select the number of months to pay for the car",change:function(e){m(e)}})),!!u&&n.createElement(D,{priceAmount:l,months:i,status:F}))),!u&&n.createElement(D,{priceAmount:l,months:i,status:F}))))}},8506:function(e,u,t){t.d(u,{Z:function(){return l}});var n=t(7294);function a(e,u){return function(e){if(Array.isArray(e))return e}(e)||function(e,u){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,r,l,c=[],o=!0,i=!1;try{if(r=(t=t.call(e)).next,0===u){if(Object(t)!==t)return;o=!1}else for(;!(o=(n=r.call(t)).done)&&(c.push(n.value),c.length!==u);o=!0);}catch(e){i=!0,a=e}finally{try{if(!o&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(i)throw a}}return c}}(e,u)||function(e,u){if(!e)return;if("string"==typeof e)return r(e,u);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,u)}(e,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,u){(null==u||u>e.length)&&(u=e.length);for(var t=0,n=new Array(u);t<u;t++)n[t]=e[t];return n}function l(e){var u=e.defaultValue,t=e.text,r=e.type,l=e.min,c=e.max,o=e.ariaLabel,i=e.change,D=a((0,n.useState)(u),2),s=D[0],m=D[1];(0,n.useEffect)((function(){m(u)}),[u]);var E={background:"linear-gradient(to right, var(--base-color) 0%, var(--base-color) ".concat(s/c*100,"%, #d7d7d7 ").concat(s/c*100,"%, #d7d7d7 100%)")};return n.createElement("fieldset",{className:"slider-group",role:"group"},n.createElement("div",{className:"slider-group__container"},n.createElement("p",{className:"title","aria-hidden":"true"},t),n.createElement("p",{className:"caption","aria-hidden":"true"},"money"===r?n.createElement(n.Fragment,null,"$ ",parseInt(s).toLocaleString()):"month"===r?n.createElement(n.Fragment,null,s," ",n.createElement("span",{className:"secondary-text"},"month")):"kilometers"===r?n.createElement(n.Fragment,null,parseInt(s).toLocaleString(),s>0?n.createElement("span",{className:"secondary-text"}," or less"):n.createElement(n.Fragment,null)):n.createElement(n.Fragment,null))),n.createElement("input",{type:"range","aria-label":"".concat(o,", in range from ").concat(l," to ").concat(c),min:l,max:c,onChange:function(e){m(parseInt(e.target.value,10)),i(parseInt(e.target.value,10))},className:"slider",id:r+"Range",style:E,step:"1",value:s}))}},5034:function(e,u,t){t.d(u,{Z:function(){return c}});var n=t(7294),a=t(4280),r=t(3427),l=t(9655);function c(){return n.createElement("footer",{className:"footer"},n.createElement("div",{className:"footer__wrapper"},n.createElement("div",{className:"footer__wrapper-first"},n.createElement("div",{className:"footer__container"},n.createElement(a.Z,null),n.createElement("div",{className:"footer__links"},n.createElement(l.rU,{to:"/terms",className:"footer__link footer-text"},"Terms"),n.createElement(l.rU,{to:"/privacy",className:"footer__link footer-text"},"Privacy"))),n.createElement(r.Z,null)),n.createElement("div",{className:"footer__copyright-wrapper"},n.createElement("p",{className:"footer__copyright-title footer-text"},"Created by"),n.createElement("p",{className:"footer__copyright"},n.createElement("span",{"aria-hidden":"true"},"©"),"Copyright, 2020. Car Masters"))))}},1389:function(e,u,t){t.d(u,{Z:function(){return M}});var n=t(7294),a=t(4280);t(361);function r(e){var u=e.onClick,t=e.focus,a=(0,n.useRef)(null);return(0,n.useEffect)((function(){return t&&a.current&&a.current.focus(),function(){a.current&&a.current.blur()}}),[t]),n.createElement("button",{ref:a,className:"burgerButton",onClick:u,"aria-label":"open menu"},n.createElement("span",{className:"burgerButton__line"}),n.createElement("span",{className:"burgerButton__line"}),n.createElement("span",{className:"burgerButton__line"}))}var l=t(741),c=t(3427),o=t(9250),i=t(9655),D=t(7294).useState,s=t(7294).useEffect;function m(e,u){return function(e){if(Array.isArray(e))return e}(e)||function(e,u){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,r,l,c=[],o=!0,i=!1;try{if(r=(t=t.call(e)).next,0===u){if(Object(t)!==t)return;o=!1}else for(;!(o=(n=r.call(t)).done)&&(c.push(n.value),c.length!==u);o=!0);}catch(e){i=!0,a=e}finally{try{if(!o&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(i)throw a}}return c}}(e,u)||function(e,u){if(!e)return;if("string"==typeof e)return E(e,u);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return E(e,u)}(e,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,u){(null==u||u>e.length)&&(u=e.length);for(var t=0,n=new Array(u);t<u;t++)n[t]=e[t];return n}function F(e){var u=e.openContact,t=m(D(window.innerWidth<700),2),a=t[0],r=t[1],l=m(D(""),2),E=l[0],F=l[1],A=(0,o.TH)();return s((function(){switch(A.pathname.replace(/\/\d+$/,"")){case"/inventory":F("inventory");break;case"/about":F("about");break;case"/loan":F("loan");break;case"/videos":F("videos");break;case"/blog":F("blog");break;case"/calculator":F("calculator")}}),[A]),s((function(){var e=function(){r(window.innerWidth<700)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),n.createElement("div",null,n.createElement("ul",{className:"burgerMenu__list","aria-label":"navigation links"},a?n.createElement("li",{className:"burgerMenu__item"},n.createElement(i.rU,{to:"/inventory",className:"burgerMenu__link caption",style:{color:"inventory"===E&&"#7481ff"}},"Inventory")):n.createElement(n.Fragment,null),n.createElement("li",{className:"burgerMenu__item"},n.createElement("button",{className:"burgerMenu__link caption",onClick:u},"Contact us")),n.createElement("li",{className:"burgerMenu__item"},n.createElement(i.rU,{to:"/about",className:"burgerMenu__link caption",style:{color:"about"===E&&"#7481ff"}},"About CM")),n.createElement("li",{className:"burgerMenu__item"},n.createElement(i.rU,{to:"/loan",className:"burgerMenu__link caption",style:{color:"loan"===E&&"#7481ff"}},"Loan Rates")),n.createElement("li",{className:"burgerMenu__item"},n.createElement(i.rU,{to:"/videos",className:"burgerMenu__link caption",style:{color:"videos"===E&&"#7481ff"}},"Video")),n.createElement("li",{className:"burgerMenu__item"},n.createElement(i.rU,{to:"/blog/1",className:"burgerMenu__link caption",style:{color:"blog"===E&&"#7481ff"}},"Blog")),n.createElement("li",{className:"burgerMenu__item"},n.createElement(i.rU,{to:"/calculator",className:"burgerMenu__link caption",style:{color:"calculator"===E&&"#7481ff"}},"Calculate"))),n.createElement(c.Z,null))}var A=t(7536),f=t(3379),d=t.p+"img/icons/phone_icon.svg",C=t.p+"img/icons/avatar_icon.svg";function p(){return p=Object.assign?Object.assign.bind():function(e){for(var u=1;u<arguments.length;u++){var t=arguments[u];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},p.apply(this,arguments)}function h(e,u){return function(e){if(Array.isArray(e))return e}(e)||function(e,u){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,r,l,c=[],o=!0,i=!1;try{if(r=(t=t.call(e)).next,0===u){if(Object(t)!==t)return;o=!1}else for(;!(o=(n=r.call(t)).done)&&(c.push(n.value),c.length!==u);o=!0);}catch(e){i=!0,a=e}finally{try{if(!o&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(i)throw a}}return c}}(e,u)||function(e,u){if(!e)return;if("string"==typeof e)return y(e,u);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return y(e,u)}(e,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,u){(null==u||u>e.length)&&(u=e.length);for(var t=0,n=new Array(u);t<u;t++)n[t]=e[t];return n}function b(e){var u=e.success,t=h((0,n.useState)(!1),2),a=t[0],r=t[1],l=(0,o.TH)();(0,n.useEffect)((function(){"/inventory"===l.pathname&&r(!0)}),[l]);var i=(0,A.cI)({mode:"onChange"}),D=i.register,s=i.handleSubmit,m=(i.watch,i.formState.errors);return n.createElement("div",{className:"contactMenu"},n.createElement("p",{className:"contactMenu__title title-text"},"We can't wait to hear from you!"),n.createElement("form",{className:"contactMenu__form",onSubmit:s((function(e){u()}))},a?n.createElement(n.Fragment,null,n.createElement("div",{className:"contactMenu__input-container"},n.createElement("div",{className:"contactMenu__input-wrapper"},n.createElement("input",p({id:"car-name",className:"contactMenu__input car-model",type:"text",placeholder:"Name of selected vehicle",defaultValue:"",maxLength:"30",minLength:"1"},D("CarName",{required:"The field is required",pattern:{value:/^[0-9A-Z_a-z]{1,30}$/,message:"The field  no more than 30 characters"}})))),m.CarName&&n.createElement("p",{className:"contactMenu__errorMessage"},m.CarName.message))):n.createElement(n.Fragment,null),n.createElement("div",{className:"contactMenu__input-container"},n.createElement("div",{className:"contactMenu__input-wrapper"},n.createElement("input",p({id:"user-name",className:"contactMenu__input",type:"text",placeholder:"Your Name",defaultValue:"",maxLength:"30",minLength:"1"},D("Name",{required:"The field is required",pattern:{value:/^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]){1,30}$/,message:"The field can contain only letters and no more than 30 characters"}}))),n.createElement("div",{className:"contactMenu__icon-wrapper","aria-hidden":"true"},n.createElement("img",{className:"contactMenu__icon",src:C,alt:"avatar icon",width:"18",height:"18"}))),m.Name&&n.createElement("p",{className:"contactMenu__errorMessage"},m.Name.message)),n.createElement("div",{className:"contactMenu__input-container"},n.createElement("div",{className:"contactMenu__input-wrapper"},n.createElement("input",p({id:"user-phone",className:"contactMenu__input",type:"tel",placeholder:"Phone Number",defaultValue:"",maxLength:"12",minLength:"8"},D("Phone",{required:"The field is required",pattern:{value:/^(\+?38)?0[0-9]{9}$/,message:"The field can contain 380 + nine numbers"}}))),n.createElement("div",{className:"contactMenu__icon-wrapper","aria-hidden":"true"},n.createElement("img",{className:"contactMenu__icon",src:d,alt:"phone icon",width:"18",height:"18"}))),m.Phone&&n.createElement("p",{className:"contactMenu__errorMessage"},m.Phone.message)),n.createElement("div",{className:"contactMenu__input-container"},n.createElement("div",{className:"contactMenu__input-wrapper"},n.createElement("input",p({id:"user-email",className:"contactMenu__input",type:"email",placeholder:"Email Address",defaultValue:""},D("Email",{required:"The field is required",pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:"Invalid email address"}}))),n.createElement("div",{className:"contactMenu__icon-wrapper","aria-hidden":"true"},n.createElement("img",{className:"contactMenu__icon",src:f,alt:"mail icon",width:"18",height:"18"}))),m.Email&&n.createElement("p",{className:"contactMenu__errorMessage"},m.Email.message)),n.createElement("div",{className:"contact__button-wrapper",style:{height:"45px"}},n.createElement("button",{type:"submit",className:"button accent contact-button"},"contact me"))),n.createElement("div",{className:"contactMenu__links"},n.createElement("p",{className:"title"},"You can contact us yourself"),n.createElement(c.Z,{mail:"true"})))}var g=t(7899);function v(){return n.createElement("div",{className:"successfulContact"},n.createElement("div",{className:"successfulContact__wrapper"},n.createElement("img",{src:g,alt:"success icon",className:"successfulContact__icon",width:"70",height:"70","aria-hidden":"true"}),n.createElement("div",{className:"successfulContact__text-wrapper"},n.createElement("p",{className:"successfulContact__title title-text"},"Application Successful!"),n.createElement("p",{className:"successfulContact__text secondary-text"},"Our manager will contact you in the nearest time."))))}function B(e,u){return function(e){if(Array.isArray(e))return e}(e)||function(e,u){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,r,l,c=[],o=!0,i=!1;try{if(r=(t=t.call(e)).next,0===u){if(Object(t)!==t)return;o=!1}else for(;!(o=(n=r.call(t)).done)&&(c.push(n.value),c.length!==u);o=!0);}catch(e){i=!0,a=e}finally{try{if(!o&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(i)throw a}}return c}}(e,u)||function(e,u){if(!e)return;if("string"==typeof e)return _(e,u);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _(e,u)}(e,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,u){(null==u||u>e.length)&&(u=e.length);for(var t=0,n=new Array(u);t<u;t++)n[t]=e[t];return n}function N(e){var u=e.close,t=(0,n.useRef)(null),a=B((0,n.useState)(!1),2),r=a[0],c=a[1],o=B((0,n.useState)(!1),2),i=o[0],D=o[1],s=function(){c(!1),D(!1)},m=function(){r||i?s():u()};return(0,n.useEffect)((function(){document.body.classList.add("no-scroll");t.current&&t.current.focus();var e=function(e){var u=t.current.querySelectorAll("a[href], button, [tabindex]"),n=u[0],a=u[u.length-1];"Tab"===e.key&&(e.shiftKey&&document.activeElement===n?(e.preventDefault(),a.focus()):e.shiftKey||document.activeElement!==a||(e.preventDefault(),n.focus()))};return t.current&&t.current.addEventListener("keydown",e),function(){document.body.classList.remove("no-scroll"),D(!1),t.current&&t.current.removeEventListener("keydown",e)}}),[]),n.createElement(n.Fragment,null,n.createElement("nav",{className:"burgerMenu",tabIndex:"-1",ref:t,"aria-label":"burger navigation menu"},n.createElement("button",{className:"burgerMenu__close","aria-label":"close burger menu",onClick:m,tabIndex:"0"},n.createElement("img",{src:l,alt:"close burger menu icon",width:"27",height:"27","aria-hidden":"true",loading:"eager"})),n.createElement("div",{className:"burgerMenu__wrapper"},r||i?n.createElement(n.Fragment,null):n.createElement(F,{openContact:function(){c(!0)}}),r&&!i?n.createElement(b,{success:function(){D(!0)}}):n.createElement(n.Fragment,null),i?n.createElement(v,null):n.createElement(n.Fragment,null))),n.createElement("div",{className:"burgerMenu__background",onClick:m}))}function w(e,u){return function(e){if(Array.isArray(e))return e}(e)||function(e,u){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,r,l,c=[],o=!0,i=!1;try{if(r=(t=t.call(e)).next,0===u){if(Object(t)!==t)return;o=!1}else for(;!(o=(n=r.call(t)).done)&&(c.push(n.value),c.length!==u);o=!0);}catch(e){i=!0,a=e}finally{try{if(!o&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(i)throw a}}return c}}(e,u)||function(e,u){if(!e)return;if("string"==typeof e)return x(e,u);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x(e,u)}(e,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,u){(null==u||u>e.length)&&(u=e.length);for(var t=0,n=new Array(u);t<u;t++)n[t]=e[t];return n}function M(){var e=w((0,n.useState)(!1),2),u=e[0],t=e[1],l=w((0,n.useState)(!1),2),c=l[0],o=l[1],D=function(){t(!u),o(!!u)};return n.createElement(n.Fragment,null,!!u&&n.createElement(N,{close:D}),n.createElement("header",{className:"header"},n.createElement(a.Z,null),n.createElement("div",{className:"header__navigation"},n.createElement("div",{className:"header__buttons"},n.createElement(i.rU,{to:"/inventory",className:"button header__inventory"},"Inventory"),n.createElement(i.rU,{to:"/quiz",className:"button accent RequestCar"},"Request a car")),n.createElement(r,{onClick:D,focus:c}))))}},4280:function(e,u,t){t.d(u,{Z:function(){return o}});var n=t(7294),a=t(1126),r=t(9655);function l(e,u){return function(e){if(Array.isArray(e))return e}(e)||function(e,u){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,r,l,c=[],o=!0,i=!1;try{if(r=(t=t.call(e)).next,0===u){if(Object(t)!==t)return;o=!1}else for(;!(o=(n=r.call(t)).done)&&(c.push(n.value),c.length!==u);o=!0);}catch(e){i=!0,a=e}finally{try{if(!o&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(i)throw a}}return c}}(e,u)||function(e,u){if(!e)return;if("string"==typeof e)return c(e,u);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,u)}(e,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,u){(null==u||u>e.length)&&(u=e.length);for(var t=0,n=new Array(u);t<u;t++)n[t]=e[t];return n}function o(){var e=l((0,n.useState)(window.innerWidth),2),u=e[0],t=e[1];(0,n.useEffect)((function(){var e=function(){t(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var c="";return c=u<700?"CM":"CarMasters",n.createElement(n.Fragment,null,n.createElement(r.rU,{to:"/",className:"logo","aria-label":"Car Masters logo, move to main page"},n.createElement("img",{className:"logo__icon accent",src:a,alt:"logo icon",width:"42",height:"31","aria-hidden":"true"}),n.createElement("p",{className:"logo__text main-title"},c)))}},5968:function(e,u,t){t.d(u,{Z:function(){return a}});var n=t(7294);function a(e){var u=e.children;return n.createElement("div",{className:"page-title"},n.createElement("h1",{className:"main-title"},u))}},3427:function(e,u,t){t.d(u,{Z:function(){return o}});var n=t(7294),a=t.p+"img/icons/instagram_icon.svg",r=t.p+"img/icons/facebook_icon.svg",l=t.p+"img/icons/youtube_icon.svg",c=t(3379);function o(e){var u=e.mail;return n.createElement("address",null,n.createElement("ul",{className:"socialsList","aria-label":"our social links"},n.createElement("li",{className:"socialsList__item"},n.createElement("a",{href:"https://www.instagram.com",className:"socialsList__link",target:"_blank","aria-label":"instagram link"},n.createElement("img",{src:a,alt:"instagram icon",width:"16",height:"16","aria-hidden":"true"}))),n.createElement("li",{className:"socialsList__item"},n.createElement("a",{href:"https://uk-ua.facebook.com",className:"socialsList__link",target:"_blank","aria-label":"facebook link"},n.createElement("img",{src:r,alt:"facebook icon",width:"16",height:"16","aria-hidden":"true"}))),n.createElement("li",{className:"socialsList__item"},n.createElement("a",{href:"https://www.youtube.com",className:"socialsList__link",target:"_blank","aria-label":"youtube link"},n.createElement("img",{src:l,alt:"youtube icon",width:"16",height:"16","aria-hidden":"true"}))),"true"==u?n.createElement(n.Fragment,null,n.createElement("li",{className:"socialsList__item"},n.createElement("a",{href:"mailto:car-masters@mail.com",className:"socialsList__link",target:"_blank","aria-label":"mail link"},n.createElement("img",{src:c,alt:"mail icon",width:"16",height:"16","aria-hidden":"true"})))):n.createElement(n.Fragment,null)))}},5803:function(e,u,t){var n=t(7294),a=t(745),r=t(9655),l=t(9250),c=t(1372),o=t(1389),i=t(5034),D=t(5968),s=t(1909),m=t(7294).useEffect;function E(){return m((function(){document.title="CarMasters - Calculator"}),[]),n.createElement(n.Fragment,null,n.createElement(o.Z,null),n.createElement(D.Z,null,"Use our free calculator!"),n.createElement("div",{className:"calculator-page__container"},n.createElement(s.Z,null)),n.createElement(i.Z,null))}var F=t.p+"img/icons/preloader-logo.svg";function A(e){var u=e.style;return n.createElement("div",{className:"preloader",style:u},n.createElement("div",{className:"preloader__wrapper"},n.createElement("img",{src:F,alt:"logo icon",width:"93",height:"58",className:"preloader__logo","aria-hidden":"true",priority:"true"}),n.createElement("p",{className:"secondary-text preloader__text"},n.createElement("span",null,"Loading"),n.createElement("span",{className:"dot-1","aria-hidden":"true"},"."),n.createElement("span",{className:"dot-2","aria-hidden":"true"},"."),n.createElement("span",{className:"dot-3","aria-hidden":"true"},"."))))}(0,c.z2)();var f=n.lazy((function(){return Promise.all([t.e(8076),t.e(8773),t.e(2159),t.e(5331),t.e(919),t.e(707)]).then(t.bind(t,9139))})),d=n.lazy((function(){return Promise.all([t.e(8076),t.e(7290),t.e(6707)]).then(t.bind(t,4748))})),C=n.lazy((function(){return Promise.all([t.e(8076),t.e(8773),t.e(919),t.e(6433)]).then(t.bind(t,1533))})),p=n.lazy((function(){return Promise.all([t.e(8076),t.e(3758)]).then(t.bind(t,459))})),h=n.lazy((function(){return Promise.all([t.e(9025),t.e(5715),t.e(2284),t.e(3513),t.e(1268),t.e(7174),t.e(4548),t.e(8787),t.e(6771),t.e(8303),t.e(598),t.e(1659),t.e(9863),t.e(4490),t.e(2345),t.e(2267),t.e(2800),t.e(5661),t.e(5442),t.e(7365),t.e(5899),t.e(753),t.e(6209),t.e(441),t.e(303),t.e(7088),t.e(8229),t.e(4728),t.e(9426),t.e(3637)]).then(t.bind(t,5858))})),y=n.lazy((function(){return Promise.all([t.e(9025),t.e(5715),t.e(2284),t.e(3513),t.e(1268),t.e(7174),t.e(4548),t.e(8787),t.e(6771),t.e(8303),t.e(598),t.e(1659),t.e(9863),t.e(4490),t.e(2345),t.e(2267),t.e(2800),t.e(5661),t.e(5442),t.e(7365),t.e(5899),t.e(753),t.e(6209),t.e(441),t.e(303),t.e(7088),t.e(8229),t.e(4728),t.e(9426),t.e(8525)]).then(t.bind(t,7193))})),b=n.lazy((function(){return Promise.all([t.e(8076),t.e(2159),t.e(7290),t.e(9464)]).then(t.bind(t,9464))})),g=n.lazy((function(){return Promise.all([t.e(8076),t.e(8773),t.e(2159),t.e(8976),t.e(5331),t.e(3659)]).then(t.bind(t,6636))})),v=n.lazy((function(){return Promise.all([t.e(8076),t.e(7290),t.e(8976),t.e(9074),t.e(990),t.e(4342)]).then(t.bind(t,7674))})),B=n.lazy((function(){return Promise.all([t.e(990),t.e(1649)]).then(t.bind(t,1649))})),_=n.lazy((function(){return Promise.all([t.e(8076),t.e(8773),t.e(9074),t.e(7310)]).then(t.bind(t,5817))})),N=n.lazy((function(){return Promise.all([t.e(8976),t.e(6095)]).then(t.bind(t,6095))}));function w(){return n.createElement(n.Fragment,null,n.createElement(n.Suspense,{fallback:n.createElement(A,null)},n.createElement(l.Z5,null,n.createElement(l.AW,{exact:!0,path:"/",element:n.createElement(f,null)}),n.createElement(l.AW,{exact:!0,path:"/calculator",element:n.createElement(E,null)}),n.createElement(l.AW,{exact:!0,path:"/videos",element:n.createElement(d,null)}),n.createElement(l.AW,{exact:!0,path:"/about",element:n.createElement(C,null)}),n.createElement(l.AW,{exact:!0,path:"/loan",element:n.createElement(p,null)}),n.createElement(l.AW,{exact:!0,path:"/terms",element:n.createElement(h,null)}),n.createElement(l.AW,{exact:!0,path:"/privacy",element:n.createElement(y,null)}),n.createElement(l.AW,{exact:!0,path:"/blog/:page",element:n.createElement(b,null)}),n.createElement(l.AW,{exact:!0,path:"/article/:id",element:n.createElement(g,null)}),n.createElement(l.AW,{exact:!0,path:"/car/:id",element:n.createElement(_,null)}),n.createElement(l.AW,{exact:!0,path:"/inventory",element:n.createElement(v,null)}),n.createElement(l.AW,{exact:!0,path:"/quiz",element:n.createElement(N,null)}),n.createElement(l.AW,{exact:!0,path:"/404",element:n.createElement(B,null)}),n.createElement(l.AW,{exact:!0,path:"*",element:n.createElement(B,null)}))))}var x=document.getElementById("root");(0,a.s)(x).render(n.createElement(r.UT,null,n.createElement(w,null)))},7899:function(e,u,t){e.exports=t.p+"img/icons/Success.svg"},741:function(e,u,t){e.exports=t.p+"img/icons/close_icon.svg"},3379:function(e,u,t){e.exports=t.p+"img/icons/mail_icon.svg"},1126:function(e,u,t){e.exports=t.p+"img/logo/logo.svg"}},function(e){e.O(0,[9025,8095,5105,3655,2598,3617,1216,4522,4298,9026],(function(){return u=5803,e(e.s=u);var u}));e.O()}]);