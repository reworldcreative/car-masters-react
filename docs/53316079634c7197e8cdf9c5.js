"use strict";(self.webpackChunkwebpackreact=self.webpackChunkwebpackreact||[]).push([[5331],{4167:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),i=(n(361),n(9106),n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n(4908)),a=n(8773),l=n(9655),s=n(714);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a,l,s=[],c=!0,o=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){o=!0,i=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(o)throw i}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e){var t=e.sliderNavigation,n=e.caption,o=e.articles,u=(0,r.useRef)(null);(0,r.useEffect)((function(){if(u.current){var e={modules:[s.W_,s.tl,s.s5,s.Qr,s.N1,s.bi,s.Gk]};Object.assign(u.current,e),u.current.initialize()}}),[]);var d=c((0,r.useState)(window.innerWidth<500),2),m=d[0],g=d[1];(0,r.useEffect)((function(){var e=function(){g(window.innerWidth<500)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var f=(0,r.useRef)(null);function p(){f.current&&(f.current.setAttribute("aria-hidden","false"),setTimeout((function(){f.current.textContent="slides have been changed. current: "+(u.current.swiper.activeIndex+1)}),100))}return(0,r.useEffect)((function(){f.current.setAttribute("aria-hidden","true"),document.querySelectorAll(".interesting__slider-prev, .interesting__slider-next").forEach((function(e){e.removeAttribute("aria-controls")}))}),[]),r.createElement("section",{className:"interesting"},r.createElement("div",{className:"interesting__wrapper"},r.createElement("div",{className:"interesting__head"},r.createElement("h2",{className:"section-title"},n),m?r.createElement(r.Fragment,null):r.createElement(r.Fragment,null,r.createElement(l.rU,{to:"/blog/1",className:"interesting__button button"},"all articles"))),r.createElement("div",{className:"interesting__container",id:"interesting__container"},r.createElement("p",{className:"visibility-hidden"},"list of interesting articles"),r.createElement("div",{className:"visibility-hidden",id:"live-region-InterestingPage","aria-live":"polite","aria-atomic":"true","aria-hidden":"true",ref:f},"slides have been changed. current:"),!0===t?r.createElement(r.Fragment,null,r.createElement("button",{className:"interesting__slider-prev","aria-label":"previous slide",onClick:p,"aria-controls":["interesting__container"]},r.createElement("img",{src:a,alt:"previous arrow",width:"11",height:"22","aria-hidden":"true",className:"interesting__slider-icon"})),r.createElement("button",{className:"interesting__slider-next","aria-label":"next slide",onClick:p,"aria-controls":["interesting__container"]},r.createElement("img",{src:a,alt:"next arrow",width:"11",height:"22","aria-hidden":"true",className:"interesting__slider-icon"}))):r.createElement(r.Fragment,null),r.createElement("swiper-container",{"slides-per-view":"1","space-between":"10","navigation-prev-el":".interesting__slider-prev","navigation-next-el":".interesting__slider-next",class:"interesting__slider",ref:u,id:"swiperInteresting-container",init:"false",a11y:"true",keyboard:"true",mousewheel:"true","mousewheel-threshold-delta":"70","mousewheel-force-to-axis":"true",breakpoints:JSON.stringify({1700:{slidesPerView:"3",spaceBetween:"70"},1100:{slidesPerView:"3",spaceBetween:"20"},500:{slidesPerView:"2",spaceBetween:"20"},100:{slidesPerView:"1",spaceBetween:"10"}})},o.length?o.slice(0,6).map((function(e){return r.createElement("swiper-slide",{key:e.id},r.createElement(i.Z,{image:e.image,imageMedium:!!e.imageMedium&&e.imageMedium,imageDescription:e.imageDescription,data:e.data,title:e.title,id:e.id}))})):r.createElement(r.Fragment,null))),m?r.createElement(r.Fragment,null,r.createElement("div",{style:{position:"relative"},className:"interesting__button-wrapper"},r.createElement(l.rU,{to:"/blog",className:"interesting__button button"},"all articles"))):r.createElement(r.Fragment,null)))}},9106:function(e,t,n){e.exports=n.p+"img/interesting/interesting_1.jpg"}}]);