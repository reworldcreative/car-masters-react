"use strict";(self.webpackChunkwebpackreact=self.webpackChunkwebpackreact||[]).push([[95],{6095:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var r=a(7294),n=a(1389);function l(e){var t=e.text,a=e.getValue,n=e.selected;return r.createElement("div",{className:"quiz__radio-wrapper"},r.createElement("input",{className:"quiz__radio",type:"radio",id:t,value:t,name:"quizRadioGroup",checked:n===t,onChange:function(e){a(e.target.value)}}),r.createElement("label",{role:"button",className:"quiz__radio-label secondary-text",htmlFor:t,"aria-label":" "},t,r.createElement("span",{className:"visibility-hidden"},". ",n===t?"selected":"unselected")))}var i=JSON.parse('[{"id":1,"title":"What\'s your budget?","text":"Find vehicle options that fit your budget.","answers":["Under $250/Month","$250-374/Month","$374-500/Month","Over $500/Month"],"type":"radio"},{"id":2,"title":"What\'s your employment status?","text":"Your employment status will help determine the best vehicle and financing options for you.","answers":["Employed","Self-Employed","Student","Retired / Pension","Other"],"type":"radio"},{"id":3,"title":"How do you earn income?","text":"Your employment status will help determine the best vehicle and financing options for you.","answers":["Long-term disability","Spousal support / Alimony","Child support","Social assistance / Welfare","Maternity leave","Baby bonus / Child tax","Unemployed / EI","Other / Not listed"],"type":"radio"},{"id":4,"title":"Enter your monthly income","text":"Your income details help us make sure your vehicle payments are easy and affordable. Before taxes and deductions.","placeholder":"Monthly income","type":"input"},{"id":5,"title":"Are you currently working?","text":"Your employment status will help determing the best vehicle and financing options for you.","answers":["Yes","No"],"type":"radio"},{"id":6,"title":"Tell us about your employment","text":"We won’t come visit but we need these details to confirm your employment status so you can get the best rates possible.","placeholderEmployer":"Employer","placeholderTitle":"Title","type":"inputEmployment"},{"id":7,"title":"How long have you been earning this income?","text":"Your income details help us make sure your vehicle payments are easy and affordable.","placeholderYears":"Years","placeholderMonths":"Months","type":"inputData"},{"id":8,"title":"How long receiving?","text":"Your income details help us make sure your vehicle payments are easy and affordable.","placeholder":"Time","type":"input"},{"id":9,"title":"Where do you live?","text":"Providing your location helps find the best deals near you.","placeholderStreet":"Street address","placeholderCity":"City","placeholderProvince":"Province","placeholderPostal":"Postal code","type":"address"},{"id":10,"title":"When were you born?","text":"","placeholderYear":"Year","placeholderMonth":"Month","placeholderDay":"Day","type":"born"},{"id":11,"title":"Congratulations! Last step.","text":"Get access to your vehicle and financing options by creating your account. There is no obligation to continue with financing if you change your mind. ","placeholderFirstName":"First name","placeholderLastName":"Last name","placeholderEmail":"Email","placeholderPhone":"Phone number","type":"personal"}]'),o=a(8976),c=a(7899),u=a(7294).useState,s=a(7294).useEffect;function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,l,i,o=[],c=!0,u=!1;try{if(l=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;c=!1}else for(;!(c=(r=l.call(a)).done)&&(o.push(r.value),o.length!==t);c=!0);}catch(e){u=!0,n=e}finally{try{if(!c&&null!=a.return&&(i=a.return(),Object(i)!==i))return}finally{if(u)throw n}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function h(e){var t=e.placeholder,a=e.getValue,n=e.regular,l=e.value,i=e.maxLength,o=m(u(l),2),c=o[0],d=o[1];s((function(){d(l)}),[t]);return r.createElement("input",{type:"text",className:"quiz__input secondary-text",placeholder:t,value:c,onChange:function(e){null!==n&&""!==n?("number"===n?/^[0-9]*$/:/^((1|)(19)?|((2|)(20)?))((^(19|20)\d)?)((^((19|20)\d)\d)?)$/).test(e.target.value)&&(d(e.target.value),a(e.target.value)):(d(e.target.value),a(e.target.value))},maxLength:i})}var p=a(9655),f=a(7294).useRef;function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,l,i,o=[],c=!0,u=!1;try{if(l=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;c=!1}else for(;!(c=(r=l.call(a)).done)&&(o.push(r.value),o.length!==t);c=!0);}catch(e){u=!0,n=e}finally{try{if(!c&&null!=a.return&&(i=a.return(),Object(i)!==i))return}finally{if(u)throw n}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function b(){var e=f(null),t=y((0,r.useState)(1),2),a=t[0],u=t[1],s=y((0,r.useState)(i.length+1),2),m=s[0],d=(s[1],y((0,r.useState)(i.find((function(e){return e.id===a}))),2)),g=d[0],b=d[1],v=y((0,r.useState)(""),2),E=v[0],_=v[1],S=y((0,r.useState)(""),2),w=S[0],x=S[1],N=y((0,r.useState)(""),2),k=N[0],q=N[1],z=y((0,r.useState)(""),2),L=z[0],I=z[1],V=y((0,r.useState)(""),2),C=V[0],M=V[1],A=y((0,r.useState)(""),2),O=A[0],P=A[1],Y=y((0,r.useState)(""),2),F=Y[0],j=Y[1],T=y((0,r.useState)(""),2),R=T[0],$=T[1],B=y((0,r.useState)(""),2),D=B[0],W=B[1],U=y((0,r.useState)(""),2),G=U[0],H=U[1],J=y((0,r.useState)(""),2),Q=J[0],Z=J[1],K=y((0,r.useState)(""),2),X=K[0],ee=K[1],te=y((0,r.useState)(""),2),ae=te[0],re=te[1],ne=y((0,r.useState)(""),2),le=ne[0],ie=ne[1],oe=y((0,r.useState)(""),2),ce=oe[0],ue=oe[1],se=y((0,r.useState)(""),2),me=se[0],de=se[1],he=y((0,r.useState)(""),2),pe=he[0],fe=he[1],ye=y((0,r.useState)(""),2),ge=ye[0],be=ye[1],ve=y((0,r.useState)(""),2),Ee=ve[0],_e=ve[1],Se=y((0,r.useState)(""),2),we=Se[0],xe=Se[1],Ne=y((0,r.useState)(""),2),ke=Ne[0],qe=Ne[1],ze=y((0,r.useState)(!1),2),Le=ze[0],Ie=ze[1],Ve=y((0,r.useState)(""),2),Ce=Ve[0],Me=Ve[1],Ae=y((0,r.useState)(!1),2),Oe=Ae[0],Pe=Ae[1],Ye=y((0,r.useState)("select one or fill all fields"),2),Fe=Ye[0],je=Ye[1],Te=function(e){Pe(!0),je(e||"select one or fill all fields")},Re=function(){Pe(!1)};function $e(e){for(var t="Aa0BbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789",a="",r=0;r<e;r++){var n=Math.floor(63*Math.random());a+=t.charAt(n)}return a}var Be={background:"linear-gradient(to right, var(--base-color) 0%, var(--base-color) ".concat(a/m*100,"%, #d7d7d7 ").concat(a/m*100,"%, #d7d7d7 100%)")},De={display:"".concat(Oe?"block":"none")};(0,r.useEffect)((function(){b(i.find((function(e){return e.id===a})))}),[a]);var We=function(e){switch(a){case 1:_(e);break;case 2:x(e);break;case 3:q(e);break;case 5:M(e)}};(0,r.useEffect)((function(){e.current.blur(),document.title="CarMasters - Quiz"}),[]),(0,r.useEffect)((function(){e.current&&a>1&&setTimeout((function(){e.current.focus()}),100)}),[g,Le]);var Ue=new Date,Ge=Ue.getFullYear();return r.createElement(r.Fragment,null,r.createElement("div",{className:"quiz__header"},r.createElement(n.Z,null)),r.createElement("section",{className:"quiz"},r.createElement("div",{className:"quiz__wrapper"},Le?r.createElement(r.Fragment,null):r.createElement("p",{className:"visibility-hidden"},"little quiz for more information"),r.createElement("div",{className:"quiz__content"},Le?r.createElement("div",{className:"quiz__success"},r.createElement("img",{src:c,className:"success-icon",alt:"success icon",width:"70",height:"70","aria-hidden":"true"}),r.createElement("h1",{className:"caption quiz__success-title",ref:e,tabIndex:"0"},"Application successful!"),r.createElement("p",{className:"secondary-text"},"Your response was successfully submitted. Thank you! Our team will reach out to you shortly."),r.createElement("div",{className:"quiz__confirmation"},r.createElement("h2",{className:"title"},"Confirmation number:"),r.createElement("p",{className:"secondary-text quiz__confirmation_code"},Ce)),r.createElement("div",{style:{height:"45px",width:"fit-content"},className:"quiz__successButton_wrapper"},r.createElement(p.rU,{to:"/",className:"button accent successButton"},"Go to main page"))):r.createElement(r.Fragment,null,r.createElement("div",{className:"quiz__progressbar",style:Be,"aria-hidden":"true"}),i.length>0?r.createElement("div",{className:"quiz__question"},r.createElement("h1",{className:"quiz__title caption",ref:e,tabIndex:"0"},g.title),r.createElement("p",{className:"quiz__question-text secondary-text"},g.text),r.createElement("div",{className:"quiz__answer"},"radio"===g.type?g.answers.map((function(e,t){return r.createElement(l,{text:e,key:t,getValue:We,selected:1===g.id?E:2===g.id?w:3===g.id?k:5===g.id?C:""})})):"input"===g.type?r.createElement(h,{placeholder:g.placeholder,getValue:function(e){switch(a){case 4:I(e);break;case 8:H(e)}},regular:4===a?"number":"",value:4===g.id?L:8===g.id&&G,maxLength:15}):"inputEmployment"===g.type?r.createElement("div",{className:"quiz__inputEmployment"},r.createElement(h,{placeholder:g.placeholderEmployer,getValue:function(e){P(e)},regular:"",value:O,maxLength:100}),r.createElement(h,{placeholder:g.placeholderTitle,getValue:function(e){j(e)},regular:"",value:F,maxLength:150})):"inputData"===g.type?r.createElement("div",{className:"quiz__row"},r.createElement(h,{placeholder:g.placeholderYears,getValue:function(e){$(e)},regular:"number",value:R,maxLength:2}),r.createElement(h,{placeholder:g.placeholderMonths,getValue:function(e){W(e)},regular:"number",value:D,maxLength:2})):"address"===g.type?r.createElement("div",{className:"quiz__address"},r.createElement(h,{placeholder:g.placeholderStreet,getValue:function(e){Z(e)},regular:"",value:Q,maxLength:150}),r.createElement(h,{placeholder:g.placeholderCity,getValue:function(e){ee(e)},regular:"",value:X,maxLength:50}),r.createElement("div",{className:"quiz__row"},r.createElement(h,{placeholder:g.placeholderProvince,getValue:function(e){re(e)},regular:"",value:ae,maxLength:100}),r.createElement(h,{placeholder:g.placeholderPostal,getValue:function(e){ie(e)},regular:"",value:le,maxLength:15}))):"born"===g.type?r.createElement("div",{className:"quiz__row"},r.createElement(h,{placeholder:g.placeholderYear,getValue:function(e){ue(e)},regular:"years",value:ce,maxLength:4}),r.createElement("div",{className:"quiz__row minrow"},r.createElement(h,{placeholder:g.placeholderMonth,getValue:function(e){de(e)},regular:"number",value:me,maxLength:2}),r.createElement(h,{placeholder:g.placeholderDay,getValue:function(e){fe(e)},regular:"number",value:pe,maxLength:2}))):"personal"===g.type?r.createElement("div",{className:"quiz__address"},r.createElement("div",{className:"quiz__row"},r.createElement(h,{placeholder:g.placeholderFirstName,getValue:function(e){be(e)},regular:"",value:ge,maxLength:50}),r.createElement(h,{placeholder:g.placeholderLastName,getValue:function(e){_e(e)},regular:"",value:Ee,maxLength:50})),r.createElement(h,{placeholder:g.placeholderEmail,getValue:function(e){xe(e)},regular:"",value:we}),r.createElement(h,{placeholder:g.placeholderPhone,getValue:function(e){qe(e)},regular:"number",value:ke,maxLength:15})):r.createElement(r.Fragment,null))):r.createElement(r.Fragment,null),r.createElement("div",{"aria-live":"polite","aria-relevant":"all"},Oe?r.createElement("div",{className:"quiz__error",style:De},r.createElement("p",{className:"quiz__error-text secondary-text"},Fe)):r.createElement("p",{className:"quiz__error-text secondary-text visibility-hidden"},"no error")),r.createElement("div",{className:"quiz__buttons"},a>1?r.createElement("button",{className:"back-button secondary-text ",onClick:function(){if(a-1>=1)switch(u(a-1),Re(),a){case 4:"Other"!==w&&u(2);break;case 6:"Retired / Pension"!==w&&u(4);break;case 7:"Student"!==w&&"Self-Employed"!==w||u(4);break;case 8:u("Retired / Pension"===w?5:"Employed"===w||"Self-Employed"===w||"Student"===w?7:4);break;default:u(a-1)}}},r.createElement("img",{src:o,alt:"back icon","aria-hidden":"true",width:"16",height:"8"}),"Back",r.createElement("span",{className:"visibility-hidden"}," ","to previous question")):r.createElement(r.Fragment,null),r.createElement("div",{style:{height:"45px",width:"fit-content"},className:"quiz__Button_wrapper"},r.createElement("button",{className:"button accent continue",onClick:function(){if(a+1<=m)switch(a){case 1:""!==E?(u(a+1),Re()):Te();break;case 2:""!==w?(u(a+1),Re()):Te(),"Other"!==w&&(""!==w?(u(4),Re()):Te());break;case 3:0!==k.trim().length&&0!==w.trim().length?(u(a+1),Re()):Te();break;case 4:""!==L?"Retired / Pension"===w&&""!==L?(u(5),Re()):"Employed"===w&&""!==L?(u(6),Re()):"Self-Employed"===w&&""!==L||"Student"===w&&""!==L?(u(7),Re()):(u(8),Re()):Te();break;case 5:""!==w&&"Retired / Pension"===w&&""!==C?(u(8),Re()):Te();break;case 6:0!==O.trim().length&&0!==F.trim().length?(u(a+1),Re()):Te();break;case 7:""===R||""===D?Te():parseInt(R)<0||parseInt(R)>50?Te("incorrect year"):parseInt(D)<0||parseInt(D)>12?Te("incorrect months"):(u(a+1),Re());break;case 8:0!==G.trim().length?(u(a+1),Re()):Te();break;case 9:0!==Q.trim().length&&0!==X.trim().length&&0!==ae.trim().length&&0!==le.trim().length?(u(a+1),Re()):Te();break;case 10:""===ce||""===D||""===pe?Te():parseInt(ce)<1900||parseInt(ce)>Ge?Te("incorrect year"):Ge-parseInt(ce)<18?Te("age is lower than 18"):parseInt(me)<1||parseInt(me)>12?Te("incorrect months"):parseInt(pe)<1||parseInt(pe)>31?Te("incorrect day"):(u(a+1),Re());break;case 11:0!==ge.trim().length&&0!==Ee.trim().length&&""!==we&&/\S+@\S+\.\S+/.test(we)&&""!==ke?(Ie(!0),Me($e(7)+"-"+$e(7)),Re()):/\S+@\S+\.\S+/.test(we)?Te():Te("incorrect email");break;default:u(a+1)}}},"Continue"))))))))}}}]);