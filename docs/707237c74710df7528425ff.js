"use strict";(self.webpackChunkwebpackreact=self.webpackChunkwebpackreact||[]).push([[707],{9139:function(e,t,a){a.r(t),a.d(t,{default:function(){return Y}});var r=a(7294),n=a(1389),i=(a(361),a(8076)),o=a.n(i),s=a.p+"img/cars/Nissan_SUV.png",c=a.p+"img/cars/Ford_CAR.png",l=a.p+"img/cars/Ram_TRUCK.png",m=a.p+"img/cars/Dodge_VAN.png",h=a.p+"img/cars/Nissan_SUV_small.png",d=a.p+"img/cars/Ford_CAR_small.png",u=a.p+"img/cars/Ram_TRUCK_small.png",p=a.p+"img/cars/Dodge_VAN_small.png",g=a(8773),v=a(7294).useEffect;function f(e){var t=e.handleSlideChange,a=(0,r.useRef)(null);function n(){var e=document.getElementById("live-region-HomePage");e&&(e.setAttribute("aria-hidden","false"),setTimeout((function(){e.textContent="slides have been changed. current: "+(a.current.swiper.activeIndex+1)}),100))}return v((function(){a.current&&a.current.swiper.on("slideChange",(function(){t(a.current?a.current.swiper.activeIndex+1:0)}))}),[t]),r.createElement("div",{className:"home-hero__slider-container"},r.createElement("div",{className:"visibility-hidden",id:"live-region-HomePage","aria-live":"polite","aria-atomic":"true","aria-hidden":"true"},"slides have been changed. current:"),r.createElement("p",{className:"visibility-hidden"},"slider of our popular models"),r.createElement("button",{className:"home-hero__slider-prev","aria-label":"previous slide",onClick:n},r.createElement("img",{src:g,alt:"previous arrow",width:"11",height:"22","aria-hidden":"true",className:"home-hero__slider-icon"})),r.createElement("button",{className:"home-hero__slider-next","aria-label":"next slide",onClick:n},r.createElement("img",{src:g,alt:"next arrow",width:"11",height:"22","aria-hidden":"true",className:"home-hero__slider-icon"})),r.createElement("swiper-container",{"slides-per-view":"1","space-between":"10","navigation-prev-el":".home-hero__slider-prev","navigation-next-el":".home-hero__slider-next",class:"home-hero__slider",ref:a,a11y:"true",keyboard:"true",mousewheel:"true","mousewheel-threshold-delta":"70","mousewheel-force-to-axis":"true","passive-events":"true"},r.createElement("swiper-slide",null,r.createElement(o(),{src:s,smallSrc:h,alt:"Nissan Kicks, a stylish and versatile vehicle designed to elevate your driving experience.",width:"494",height:"240",className:"home-hero__slider-img",loadingPriority:"eager"})),r.createElement("swiper-slide",null,r.createElement(o(),{src:c,smallSrc:d,alt:"The Ford Fusion, this sedan provides a smooth and comfortable ride for both driver and passengers. ",width:"490",height:"202",className:"home-hero__slider-img"})),r.createElement("swiper-slide",null,r.createElement(o(),{src:l,smallSrc:u,alt:"Ram 3500 is a powerful and reliable pickup truck that comes in a sleek white color.",width:"490",height:"230",className:"home-hero__slider-img"})),r.createElement("swiper-slide",null,r.createElement(o(),{src:m,smallSrc:p,alt:"The Dodge Grand Caravan is a versatile and compact van that offers both style and functionality.",width:"490",height:"222",className:"home-hero__slider-img"}))))}var _=a.p+"img/cars/Lexus.png",y=a.p+"img/cars/Honda-Accord.png",E=a.p+"img/cars/Lexus_small.png",w=a.p+"img/cars/Honda-Accord_small.png",N=a(6403),b=a.p+"img/cars/Honda_1.png",x=a.p+"img/cars/Corola_1.png",C=a.p+"img/phone_1.png",k=a.p+"img/phone_2.png";function S(e){var t=e.icon,a=e.title,n=e.text;return r.createElement("li",{className:"home-advantages__item"},r.createElement("img",{src:t,alt:"advantages icon",width:"70",height:"70",className:"home-advantages__icon","aria-hidden":"true"}),r.createElement("h3",{className:"title"},a),r.createElement("p",{className:"secondary-text"},n))}var A=JSON.parse('[{"id":1,"title":"First Contact","text":"Tell us what your dream vehicle is."},{"id":2,"title":"Vehicle Selection","text":"One of our Qualified Agents sends you custom pictures and videos of the car you are interested in."},{"id":3,"title":"Secure Financing","text":"You work with a dedicated Qualified Agent to secure financing on your terms."},{"id":4,"title":"Vehicle Delivery","text":"We deliver your car to your home or office for you to test drive."},{"id":5,"title":"Getting Vehicle","text":"If you love the vehicle, you sign the paperwork and keep the car."}]'),F=JSON.parse('[{"id":1,"icon":"./img/icons/Delivery.svg","title":"Vehicle Delivery","text":"We deliver your vehicle directly to your door. You don’t sign anything until you test drive the vehicle. There is never any obligation to buy beforehand."},{"id":2,"icon":"./img/icons/Finance.svg","title":"Auto Financing","text":"We partner with the largest lenders in Canada to offer the strongest financing options in the industry—including rates as low as 4%"},{"id":3,"icon":"./img/icons/Car.svg","title":"Huge Inventory","text":"We have access to thousands of high‑quality vehicles and offer them to you at wholesale prices. Your dream car is waiting for you"},{"id":4,"icon":"./img/icons/Car.svg","title":"Huge Inventory","text":"We have access to thousands of high‑quality vehicles and offer them to you at wholesale prices. Your dream car is waiting for you"},{"id":5,"icon":"./img/icons/Car.svg","title":"Huge Inventory","text":"We have access to thousands of high‑quality vehicles and offer them to you at wholesale prices. Your dream car is waiting for you"},{"id":6,"icon":"./img/icons/Car.svg","title":"Huge Inventory","text":"We have access to thousands of high‑quality vehicles and offer them to you at wholesale prices. Your dream car is waiting for you"}]'),I=(a.p,a.p,a.p,a(349)),W=a(3401),Z=a(784),H=a(1909),T=a(4167),R=a(5034),V=a(9802),U=a(9655);function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,i,o,s=[],c=!0,l=!1;try{if(i=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;c=!1}else for(;!(c=(r=i.call(a)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,n=e}finally{try{if(!c&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(l)throw n}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function Y(){var e=q((0,r.useState)("suv"),2),t=e[0],a=e[1],i=q((0,r.useState)(window.innerWidth<1350),2),s=i[0],c=i[1],l=q((0,r.useState)(window.innerWidth<500),2),m=(l[0],l[1]),h=function(e){switch(e){case 1:default:a("suv");break;case 2:a("car");break;case 3:a("truck");break;case 4:a("van")}};return(0,r.useEffect)((function(){var e=function(){c(window.innerWidth<1350),m(window.innerWidth<500)};return window.addEventListener("resize",e,{passive:!0}),function(){window.removeEventListener("resize",e)}}),[]),r.createElement(r.Fragment,null,r.createElement(n.Z,null),r.createElement("main",null,r.createElement("section",{className:"home-hero"},r.createElement("div",{className:"home-hero__wrapper"},r.createElement("div",{className:"home-hero__column"},r.createElement("h1",{className:"home-hero__title main-title"},"The easiest way to buy a car in Canada"),!!s&&r.createElement(f,{handleSlideChange:h}),r.createElement(U.rU,{to:"/inventory",className:"button home-hero__button"},"Request a ",t)),!s&&r.createElement(f,{handleSlideChange:h}))),r.createElement("section",{className:"home-info"},r.createElement("div",{className:"home-info__wrapper"},r.createElement("div",{"aria-hidden":"true",className:"home-info__decoration"},r.createElement(o(),{src:_,smallSrc:E,alt:"lexus car",width:"500",height:"255",className:"home-info__img right"}),r.createElement(o(),{src:y,smallSrc:w,alt:"honda accord car",width:"500",height:"209",className:"home-info__img left"})),r.createElement("div",{className:"home-info__container"},r.createElement("h2",{className:"section-title"},"How does it work?"),r.createElement("p",{className:"title-text home-info__caption"},"From your Phone to your Home"),r.createElement("p",{className:"secondary-text home-info__text"},"We make it easy for you to buy your dream car from your phone without ever having to step into a dealership! We deliver your vehicle to your home for you to test drive before you sign anything.")))),r.createElement("section",{className:"perfect-car"},r.createElement("div",{className:"perfect-car__wrapper"},r.createElement("h2",{className:"section-title"},"Your perfect car in 5 easy steps"),r.createElement("div",{className:"perfect-car__container"},r.createElement("ul",{className:"perfect-car__list","aria-label":"5 easy steps"},A.length?A.slice(0,5).map((function(e){return r.createElement(N.Z,{key:e.id,step:e.id,title:e.title.slice(0,200),text:e.text.slice(0,200)})})):r.createElement(r.Fragment,null)),r.createElement("div",{className:"perfect-car__decoration","aria-hidden":"true"},r.createElement(o(),{src:C,alt:"the ultimate mobile app",width:"255",height:"511",className:"perfect-car__phone perfect-car__phone-one"}),r.createElement(o(),{src:k,alt:"path on the map",width:"255",height:"512",className:"perfect-car__phone perfect-car__phone-two"}))))),r.createElement("section",{className:"home-advantages"},r.createElement("div",{className:"home-advantages__wrapper"},r.createElement("h2",{id:"advantages",className:"section-title"},"Advantages of working with us"),r.createElement("ul",{className:"home-advantages__container","aria-labelledby":"advantages list"},F.length?F.slice(0,3).map((function(e){return r.createElement(S,{key:e.id,icon:e.icon,title:e.title,text:e.text})})):r.createElement(r.Fragment,null)))),r.createElement("section",{className:"home-choose"},r.createElement("div",{className:"home-choose__wrapper"},r.createElement("div",{className:"home-choose__decoration","aria-hidden":"true"},r.createElement(o(),{src:b,alt:"honda car",width:"491",height:"234",className:"home-choose__img front"}),r.createElement(o(),{src:x,alt:"honda corola car",width:"428",height:"187",className:"home-choose__img back"})),r.createElement("div",{className:"home-choose__container"},r.createElement("h2",{className:"section-title"},"Сhoose your dream vehicle in our catalog"),r.createElement("div",{className:"home-choose__text-container"},r.createElement("p",{className:"secondary-text"},"In our catalogue there are many models of vehicles. Choose your car to your liking."),r.createElement("div",{style:{height:"50px",width:"fit-content"},className:"home-choose__button-wrapper"},r.createElement(U.rU,{to:"/inventory",className:"button home-choose__button accent"},"Inventory")))))),r.createElement("section",{className:"happy-customers"},r.createElement("div",{className:"happy-customers__wrapper"},r.createElement("div",{className:"happy-customers__text"},r.createElement("h2",{className:"section-title"},"Happy customers"),r.createElement("div",{className:"happy-customers__text-container"},r.createElement("p",{className:"secondary-text"},"Since 2017, we have helped thousands of Canadians get their dream vehicles from the comfort of their homes."),!!s&&r.createElement(I.Z,{ariaLabel:"our statistic"},r.createElement(W.Z,{title:"7,988+",text:"Sold Cars"}),r.createElement(W.Z,{title:"16,974+",text:"Vehicles To Choose From"}),r.createElement(W.Z,{title:"123",text:"Experts Across Canada"})),r.createElement("p",{className:"happy-customers__caption caption"},"What are you waiting? Get started right now!"),r.createElement("div",{style:{width:"fit-content",height:"45px",display:"flex"},className:"happy-customers__button-wrapper"},r.createElement(U.rU,{to:"/quiz",className:"button happy-customers__button accent"},"Request a car")))),!s&&r.createElement(I.Z,{ariaLabel:"our statistic"},r.createElement(W.Z,{title:"7,988+",text:"Sold Cars"}),r.createElement(W.Z,{title:"16,974+",text:"Vehicles To Choose From"}),r.createElement(W.Z,{title:"123",text:"Experts Across Canada"})))),r.createElement(Z.Z,null),r.createElement(H.Z,null),r.createElement(T.Z,{sliderNavigation:!0,caption:"Interesting to read",articles:V.slice(0,6)})),r.createElement(R.Z,null))}}}]);