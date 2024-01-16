"use strict";(self.webpackChunkwebpackreact=self.webpackChunkwebpackreact||[]).push([[6707],{4748:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var i=a(7294),r=a(1389),n=a(5034),o=a(5968),l=a(8076),c=a.n(l),s=a.p+"img/icons/Play.svg";function d(e){var t=e.click;return i.createElement("button",{className:"playButton","aria-label":"play video",onClick:t},i.createElement("img",{className:"playButton__icon",src:s,alt:"pay button icon","aria-hidden":"true",width:"19",height:"19"}))}var m=a(7290),u=(a.p,a.p,a.p,a.p,a(741)),g=JSON.parse('[{"id":1,"image":"./img/videoImage/video_1-2.jpg","imageDescription":"The photo shows a red Chevrolet Cruze hatchback driving in the snow.","title":"CM\'s Vehicle Shoot #10: 2018 Chevy Cruze Hatchback","link":"reaRk-ThBEQ"},{"id":2,"image":"./img/videoImage/video_2-2.jpg","imageDescription":"The photo shows a Mazda CX-5 parked in the snow.","title":"CM\'s Vehicle Shoot #11: Toyota Highlander","link":"kKk0f10ntw0"},{"id":3,"image":"./img/videoImage/video_3-2.jpg","imageDescription":"The photo shows a black Toyota Highlander parked on a snowy road. A bridge and a blurred city can be seen in the background.","title":"CM\'s Vehicle Shoot #09: 2019 Mazda CX-5","link":"6Q1UrlMPtpo"},{"id":4,"image":"./img/videoImage/video_4-2.jpg","imageDescription":"The photo shows an orange Hyundai Veloster parked in front of a graffiti wall.","title":"Some Vehicles CM Offers!","link":"6IVmqqC7Voo"},{"id":5,"image":"./img/videoImage/video_4-2.jpg","imageDescription":"The photo shows an orange Hyundai Veloster parked in front of a graffiti wall.","title":"Some Vehicles CM Offers!","link":"6IVmqqC7Voo"},{"id":6,"image":"./img/videoImage/video_4-2.jpg","imageDescription":"The photo shows an orange Hyundai Veloster parked in front of a graffiti wall.","title":"Some Vehicles CM Offers!","link":"6IVmqqC7Voo"}]'),h=a.p+"img/watermark.svg",p=a.p+"img/icons/download-arrow.svg";function f(e){var t=e.buttonClick,a=e.image,r=e.title,n=e.imgDescription,o=e.link;return i.createElement("article",{className:"videos__item","data-link":o,"aria-label":"card for video"},i.createElement("p",{className:"visibility-hidden"},"card for video"),i.createElement("div",{className:"videos__img"},i.createElement("div",{className:"watermark","aria-hidden":"true"},i.createElement("img",{src:h,alt:"watermark CM",width:"30",height:"30"}),i.createElement("p",{className:"caption watermark__caption"},"CM")),i.createElement(c(),{src:a,alt:"Image placeholder for video, named-"+r+n,className:"videos__picture",width:"580",height:"326"}),i.createElement(d,{click:t}),i.createElement("button",{className:"download-button","aria-hidden":"true","aria-label":"download video"},i.createElement("img",{src:p,alt:"download icon",width:"15",height:"20"}))),i.createElement("p",{className:"videos__title caption","aria-hidden":"true"},r))}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var i,r,n,o,l=[],c=!0,s=!1;try{if(n=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;c=!1}else for(;!(c=(i=n.call(a)).done)&&(l.push(i.value),l.length!==t);c=!0);}catch(e){s=!0,r=e}finally{try{if(!c&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(s)throw r}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}function w(){var e=v((0,i.useState)(!1),2),t=e[0],a=e[1],l=v((0,i.useState)(""),2),c=l[0],s=l[1],d=function(e){var t,i=e.currentTarget.closest(".videos__item");t=i.getAttribute("data-link"),s(t),a(!0),document.body.classList.add("no-scroll")},h=function(){a(!1),document.body.classList.remove("no-scroll")},p=v((0,i.useState)(1),2),b=p[0],w=p[1],k=4*b,y=k-4,E=g.slice(y,k);return i.createElement(i.Fragment,null,i.createElement("div",{className:"videoMain"},i.createElement(r.Z,null),i.createElement(o.Z,null,"Vehicle videos"),i.createElement("div",{className:"videos__wrapper"},t&&i.createElement("div",{className:"pupUpVideo",onClick:h},i.createElement("div",{className:"pupUpVideo__wrapper"},i.createElement("iframe",{className:"pupUpVideo__video",width:"867",height:"542",src:"https://www.youtube.com/embed/"+c,title:"YouTube video player",frameBorder:"0",allowFullScreen:"allowfullscreen"}),i.createElement("button",{className:"pupUpVideo__button","aria-label":"close video",onClick:h,tabIndex:"0"},i.createElement("img",{src:u,alt:"close video icon",width:"24",height:"24","aria-hidden":"true",loading:"eager"})))),i.createElement("div",{className:"videos__container"},i.createElement("p",{className:"visibility-hidden"},"list of videos"),E.length?E.map((function(e){return i.createElement(f,{key:e.id,buttonClick:d,image:e.image,title:e.title,imgDescription:e.imageDescription,link:e.link})})):i.createElement(i.Fragment,null)),i.createElement(m.Z,{currentPage:b,totalPages:Math.min(Math.ceil(g.length/4),3),onPageChange:w})),i.createElement(n.Z,null)))}}}]);