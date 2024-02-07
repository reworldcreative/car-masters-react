"use strict";(self.webpackChunkwebpackreact=self.webpackChunkwebpackreact||[]).push([[598],{7536:function(e,t,r){r.d(t,{cI:function(){return Se}});var s=r(7294),a=r(6624),i=e=>"checkbox"===e.type,n=e=>e instanceof Date,o=e=>null==e;const u=e=>"object"==typeof e;var l=e=>!o(e)&&!Array.isArray(e)&&u(e)&&!n(e),d=e=>l(e)&&e.target?i(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),f=e=>{const t=e.constructor&&e.constructor.prototype;return l(t)&&t.hasOwnProperty("isPrototypeOf")},y="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function m(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(y&&(e instanceof Blob||e instanceof FileList)||!r&&!l(e))return e;if(t=r?[]:{},r||f(e))for(const r in e)e.hasOwnProperty(r)&&(t[r]=m(e[r]));else t=e}return t}var h=e=>Array.isArray(e)?e.filter(Boolean):[],v=e=>void 0===e,g=(e,t,r)=>{if(!t||!l(e))return r;const s=h(t.split(/[,[\].]+?/)).reduce(((e,t)=>o(e)?e:e[t]),e);return v(s)||s===e?v(e[t])?r:e[t]:s},p=e=>"boolean"==typeof e;const b={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},_={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},V="max",A="min",w="maxLength",S="minLength",F="pattern",x="required",D="validate";s.createContext(null);var k=(e,t,r,s=!0)=>{const a={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(a,i,{get:()=>{const a=i;return t._proxyFormState[a]!==_.all&&(t._proxyFormState[a]=!s||_.all),r&&(r[a]=!0),e[a]}});return a},O=e=>l(e)&&!Object.keys(e).length,C=(e,t,r,s)=>{r(e);const{name:a,...i}=e;return O(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find((e=>t[e]===(!s||_.all)))},E=e=>Array.isArray(e)?e:[e];function T(e){const t=s.useRef(e);t.current=e,s.useEffect((()=>{const r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}}),[e.disabled])}var L=e=>"string"==typeof e,U=(e,t,r,s,a)=>L(e)?(s&&t.watch.add(e),g(r,e,a)):Array.isArray(e)?e.map((e=>(s&&t.watch.add(e),g(r,e)))):(s&&(t.watchAll=!0),r);var j=e=>/^\w*$/.test(e),B=e=>h(e.replace(/["|']|\]/g,"").split(/\.|\[/));function N(e,t,r){let s=-1;const a=j(t)?[t]:B(t),i=a.length,n=i-1;for(;++s<i;){const t=a[s];let i=r;if(s!==n){const r=e[t];i=l(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=i,e=e[t]}return e}var M=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{},q=e=>({isOnSubmit:!e||e===_.onSubmit,isOnBlur:e===_.onBlur,isOnChange:e===_.onChange,isOnAll:e===_.all,isOnTouch:e===_.onTouched}),R=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))));const I=(e,t,r,s)=>{for(const a of r||Object.keys(e)){const r=g(e,a);if(r){const{_f:e,...i}=r;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],a)&&!s)break;if(e.ref&&t(e.ref,e.name)&&!s)break}else l(i)&&I(i,t)}}};var P=(e,t,r)=>{const s=h(g(e,r));return N(s,"root",t[r]),N(e,r,s),e},H=e=>"file"===e.type,$=e=>"function"==typeof e,W=e=>{if(!y)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},G=e=>L(e),z=e=>"radio"===e.type,J=e=>e instanceof RegExp;const K={value:!1,isValid:!1},Q={value:!0,isValid:!0};var X=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!v(e[0].attributes.value)?v(e[0].value)||""===e[0].value?Q:{value:e[0].value,isValid:!0}:Q:K}return K};const Y={isValid:!1,value:null};var Z=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),Y):Y;function ee(e,t,r="validate"){if(G(e)||Array.isArray(e)&&e.every(G)||p(e)&&!e)return{type:r,message:G(e)?e:"",ref:t}}var te=e=>l(e)&&!J(e)?e:{value:e,message:""},re=async(e,t,r,s,a)=>{const{ref:n,refs:u,required:d,maxLength:c,minLength:f,min:y,max:m,pattern:h,validate:b,name:_,valueAsNumber:k,mount:C,disabled:E}=e._f,T=g(t,_);if(!C||E)return{};const U=u?u[0]:n,j=e=>{s&&U.reportValidity&&(U.setCustomValidity(p(e)?"":e||""),U.reportValidity())},B={},N=z(n),q=i(n),R=N||q,I=(k||H(n))&&v(n.value)&&v(T)||W(n)&&""===n.value||""===T||Array.isArray(T)&&!T.length,P=M.bind(null,_,r,B),K=(e,t,r,s=w,a=S)=>{const i=e?t:r;B[_]={type:e?s:a,message:i,ref:n,...P(e?s:a,i)}};if(a?!Array.isArray(T)||!T.length:d&&(!R&&(I||o(T))||p(T)&&!T||q&&!X(u).isValid||N&&!Z(u).isValid)){const{value:e,message:t}=G(d)?{value:!!d,message:d}:te(d);if(e&&(B[_]={type:x,message:t,ref:U,...P(x,t)},!r))return j(t),B}if(!(I||o(y)&&o(m))){let e,t;const s=te(m),a=te(y);if(o(T)||isNaN(T)){const r=n.valueAsDate||new Date(T),i=e=>new Date((new Date).toDateString()+" "+e),o="time"==n.type,u="week"==n.type;L(s.value)&&T&&(e=o?i(T)>i(s.value):u?T>s.value:r>new Date(s.value)),L(a.value)&&T&&(t=o?i(T)<i(a.value):u?T<a.value:r<new Date(a.value))}else{const r=n.valueAsNumber||(T?+T:T);o(s.value)||(e=r>s.value),o(a.value)||(t=r<a.value)}if((e||t)&&(K(!!e,s.message,a.message,V,A),!r))return j(B[_].message),B}if((c||f)&&!I&&(L(T)||a&&Array.isArray(T))){const e=te(c),t=te(f),s=!o(e.value)&&T.length>+e.value,a=!o(t.value)&&T.length<+t.value;if((s||a)&&(K(s,e.message,t.message),!r))return j(B[_].message),B}if(h&&!I&&L(T)){const{value:e,message:t}=te(h);if(J(e)&&!T.match(e)&&(B[_]={type:F,message:t,ref:n,...P(F,t)},!r))return j(t),B}if(b)if($(b)){const e=ee(await b(T,t),U);if(e&&(B[_]={...e,...P(D,e.message)},!r))return j(e.message),B}else if(l(b)){let e={};for(const s in b){if(!O(e)&&!r)break;const a=ee(await b[s](T,t),U,s);a&&(e={...a,...P(s,a.message)},j(a.message),r&&(B[_]=e))}if(!O(e)&&(B[_]={ref:U,...e},!r))return B}return j(!0),B};function se(e,t){const r=Array.isArray(t)?t:j(t)?[t]:B(t),s=1===r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=v(e)?s++:e[t[s++]];return e}(e,r),a=r.length-1,i=r[a];return s&&delete s[i],0!==a&&(l(s)&&O(s)||Array.isArray(s)&&function(e){for(const t in e)if(e.hasOwnProperty(t)&&!v(e[t]))return!1;return!0}(s))&&se(e,r.slice(0,-1)),e}function ae(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var ie=e=>o(e)||!u(e);function ne(e,t){if(ie(e)||ie(t))return e===t;if(n(e)&&n(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(n(r)&&n(e)||l(r)&&l(e)||Array.isArray(r)&&Array.isArray(e)?!ne(r,e):r!==e)return!1}}return!0}var oe=e=>"select-multiple"===e.type,ue=e=>z(e)||i(e),le=e=>W(e)&&e.isConnected,de=e=>{for(const t in e)if($(e[t]))return!0;return!1};function ce(e,t={}){const r=Array.isArray(e);if(l(e)||r)for(const r in e)Array.isArray(e[r])||l(e[r])&&!de(e[r])?(t[r]=Array.isArray(e[r])?[]:{},ce(e[r],t[r])):o(e[r])||(t[r]=!0);return t}function fe(e,t,r){const s=Array.isArray(e);if(l(e)||s)for(const s in e)Array.isArray(e[s])||l(e[s])&&!de(e[s])?v(t)||ie(r[s])?r[s]=Array.isArray(e[s])?ce(e[s],[]):{...ce(e[s])}:fe(e[s],o(t)?{}:t[s],r[s]):r[s]=!ne(e[s],t[s]);return r}var ye=(e,t)=>fe(e,t,ce(t)),me=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>v(e)?e:t?""===e?NaN:e?+e:e:r&&L(e)?new Date(e):s?s(e):e;function he(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return H(t)?t.files:z(t)?Z(e.refs).value:oe(t)?[...t.selectedOptions].map((({value:e})=>e)):i(t)?X(e.refs).value:me(v(t.value)?e.ref.value:t.value,e)}var ve=(e,t,r,s)=>{const a={};for(const r of e){const e=g(t,r);e&&N(a,r,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}},ge=e=>v(e)?e:J(e)?e.source:l(e)?J(e.value)?e.value.source:e.value:e,pe=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function be(e,t,r){const s=g(e,r);if(s||j(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),i=g(t,s),n=g(e,s);if(i&&!Array.isArray(i)&&r!==s)return{name:r};if(n&&n.type)return{name:s,error:n};a.pop()}return{name:r}}var _e=(e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e),Ve=(e,t)=>!h(g(e,t)).length&&se(e,t);const Ae={mode:_.onSubmit,reValidateMode:_.onChange,shouldFocusError:!0};function we(e={},t){let r,s={...Ae,...e},u={submitCount:0,isDirty:!1,isLoading:$(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},f={},V=(l(s.defaultValues)||l(s.values))&&m(s.defaultValues||s.values)||{},A=s.shouldUnregister?{}:m(V),w={action:!1,mount:!1,watch:!1},S={mount:new Set,unMount:new Set,array:new Set,watch:new Set},F=0;const x={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},D={values:ae(),array:ae(),state:ae()},k=e.resetOptions&&e.resetOptions.keepDirtyValues,C=q(s.mode),T=q(s.reValidateMode),j=s.criteriaMode===_.all,B=async e=>{if(x.isValid||e){const e=s.resolver?O((await K()).errors):await Q(f,!0);e!==u.isValid&&D.state.next({isValid:e})}},M=e=>x.isValidating&&D.state.next({isValidating:e}),G=(e,t,r,s)=>{const a=g(f,e);if(a){const i=g(A,e,v(r)?g(V,e):r);v(i)||s&&s.defaultChecked||t?N(A,e,t?i:he(a._f)):Z(e,i),w.mount&&B()}},z=(e,t,r,s,a)=>{let i=!1,n=!1;const o={name:e};if(!r||s){x.isDirty&&(n=u.isDirty,u.isDirty=o.isDirty=X(),i=n!==o.isDirty);const r=ne(g(V,e),t);n=g(u.dirtyFields,e),r?se(u.dirtyFields,e):N(u.dirtyFields,e,!0),o.dirtyFields=u.dirtyFields,i=i||x.dirtyFields&&n!==!r}if(r){const t=g(u.touchedFields,e);t||(N(u.touchedFields,e,r),o.touchedFields=u.touchedFields,i=i||x.touchedFields&&t!==r)}return i&&a&&D.state.next(o),i?o:{}},J=(t,s,a,i)=>{const n=g(u.errors,t),o=x.isValid&&p(s)&&u.isValid!==s;var l;if(e.delayError&&a?(l=()=>((e,t)=>{N(u.errors,e,t),D.state.next({errors:u.errors})})(t,a),r=e=>{clearTimeout(F),F=setTimeout(l,e)},r(e.delayError)):(clearTimeout(F),r=null,a?N(u.errors,t,a):se(u.errors,t)),(a?!ne(n,a):n)||!O(i)||o){const e={...i,...o&&p(s)?{isValid:s}:{},errors:u.errors,name:t};u={...u,...e},D.state.next(e)}M(!1)},K=async e=>s.resolver(A,s.context,ve(e||S.mount,f,s.criteriaMode,s.shouldUseNativeValidation)),Q=async(e,t,r={valid:!0})=>{for(const a in e){const i=e[a];if(i){const{_f:e,...a}=i;if(e){const a=S.array.has(e.name),n=await re(i,A,j,s.shouldUseNativeValidation&&!t,a);if(n[e.name]&&(r.valid=!1,t))break;!t&&(g(n,e.name)?a?P(u.errors,n,e.name):N(u.errors,e.name,n[e.name]):se(u.errors,e.name))}a&&await Q(a,t,r)}}return r.valid},X=(e,t)=>(e&&t&&N(A,e,t),!ne(we(),V)),Y=(e,t,r)=>U(e,S,{...w.mount?A:v(t)?V:L(e)?{[e]:t}:t},r,t),Z=(e,t,r={})=>{const s=g(f,e);let a=t;if(s){const r=s._f;r&&(!r.disabled&&N(A,e,me(t,r)),a=W(r.ref)&&o(t)?"":t,oe(r.ref)?[...r.ref.options].forEach((e=>e.selected=a.includes(e.value))):r.refs?i(r.ref)?r.refs.length>1?r.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(a)?!!a.find((t=>t===e.value)):a===e.value))):r.refs[0]&&(r.refs[0].checked=!!a):r.refs.forEach((e=>e.checked=e.value===a)):H(r.ref)?r.ref.value="":(r.ref.value=a,r.ref.type||D.values.next({name:e,values:{...A}})))}(r.shouldDirty||r.shouldTouch)&&z(e,a,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&fe(e)},ee=(e,t,r)=>{for(const s in t){const a=t[s],i=`${e}.${s}`,o=g(f,i);!S.array.has(e)&&ie(a)&&(!o||o._f)||n(a)?Z(i,a,r):ee(i,a,r)}},te=(e,r,s={})=>{const a=g(f,e),i=S.array.has(e),n=m(r);N(A,e,n),i?(D.array.next({name:e,values:{...A}}),(x.isDirty||x.dirtyFields)&&s.shouldDirty&&D.state.next({name:e,dirtyFields:ye(V,A),isDirty:X(e,n)})):!a||a._f||o(n)?Z(e,n,s):ee(e,n,s),R(e,S)&&D.state.next({...u}),D.values.next({name:e,values:{...A}}),!w.mount&&t()},de=async e=>{const t=e.target;let a=t.name,i=!0;const n=g(f,a),o=e=>{i=Number.isNaN(e)||e===g(A,a,e)};if(n){let l,c;const y=t.type?he(n._f):d(e),m=e.type===b.BLUR||e.type===b.FOCUS_OUT,h=!pe(n._f)&&!s.resolver&&!g(u.errors,a)&&!n._f.deps||_e(m,g(u.touchedFields,a),u.isSubmitted,T,C),v=R(a,S,m);N(A,a,y),m?(n._f.onBlur&&n._f.onBlur(e),r&&r(0)):n._f.onChange&&n._f.onChange(e);const p=z(a,y,m,!1),_=!O(p)||v;if(!m&&D.values.next({name:a,type:e.type,values:{...A}}),h)return x.isValid&&B(),_&&D.state.next({name:a,...v?{}:p});if(!m&&v&&D.state.next({...u}),M(!0),s.resolver){const{errors:e}=await K([a]);if(o(y),i){const t=be(u.errors,f,a),r=be(e,f,t.name||a);l=r.error,a=r.name,c=O(e)}}else l=(await re(n,A,j,s.shouldUseNativeValidation))[a],o(y),i&&(l?c=!1:x.isValid&&(c=await Q(f,!0)));i&&(n._f.deps&&fe(n._f.deps),J(a,c,l,p))}},ce=(e,t)=>{if(g(u.errors,t)&&e.focus)return e.focus(),1},fe=async(e,t={})=>{let r,i;const n=E(e);if(M(!0),s.resolver){const t=await(async e=>{const{errors:t}=await K(e);if(e)for(const r of e){const e=g(t,r);e?N(u.errors,r,e):se(u.errors,r)}else u.errors=t;return t})(v(e)?e:n);r=O(t),i=e?!n.some((e=>g(t,e))):r}else e?(i=(await a.all(n.map((async e=>{const t=g(f,e);return await Q(t&&t._f?{[e]:t}:t)})))).every(Boolean),(i||u.isValid)&&B()):i=r=await Q(f);return D.state.next({...!L(e)||x.isValid&&r!==u.isValid?{}:{name:e},...s.resolver||!e?{isValid:r}:{},errors:u.errors,isValidating:!1}),t.shouldFocus&&!i&&I(f,ce,e?n:S.mount),i},we=e=>{const t={...V,...w.mount?A:{}};return v(e)?t:L(e)?g(t,e):e.map((e=>g(t,e)))},Se=(e,t)=>({invalid:!!g((t||u).errors,e),isDirty:!!g((t||u).dirtyFields,e),isTouched:!!g((t||u).touchedFields,e),error:g((t||u).errors,e)}),Fe=(e,t,r)=>{const s=(g(f,e,{_f:{}})._f||{}).ref;N(u.errors,e,{...t,ref:s}),D.state.next({name:e,errors:u.errors,isValid:!1}),r&&r.shouldFocus&&s&&s.focus&&s.focus()},xe=(e,t={})=>{for(const r of e?E(e):S.mount)S.mount.delete(r),S.array.delete(r),t.keepValue||(se(f,r),se(A,r)),!t.keepError&&se(u.errors,r),!t.keepDirty&&se(u.dirtyFields,r),!t.keepTouched&&se(u.touchedFields,r),!s.shouldUnregister&&!t.keepDefaultValue&&se(V,r);D.values.next({values:{...A}}),D.state.next({...u,...t.keepDirty?{isDirty:X()}:{}}),!t.keepIsValid&&B()},De=({disabled:e,name:t,field:r,fields:s,value:a})=>{if(p(e)){const i=e?void 0:v(a)?he(r?r._f:g(s,t)._f):a;N(A,t,i),z(t,i,!1,!1,!0)}},ke=(e,t={})=>{let r=g(f,e);const a=p(t.disabled);return N(f,e,{...r||{},_f:{...r&&r._f?r._f:{ref:{name:e}},name:e,mount:!0,...t}}),S.mount.add(e),r?De({field:r,disabled:t.disabled,name:e}):G(e,!0,t.value),{...a?{disabled:t.disabled}:{},...s.progressive?{required:!!t.required,min:ge(t.min),max:ge(t.max),minLength:ge(t.minLength),maxLength:ge(t.maxLength),pattern:ge(t.pattern)}:{},name:e,onChange:de,onBlur:de,ref:a=>{if(a){ke(e,t),r=g(f,e);const s=v(a.value)&&a.querySelectorAll&&a.querySelectorAll("input,select,textarea")[0]||a,i=ue(s),n=r._f.refs||[];if(i?n.find((e=>e===s)):s===r._f.ref)return;N(f,e,{_f:{...r._f,...i?{refs:[...n.filter(le),s,...Array.isArray(g(V,e))?[{}]:[]],ref:{type:s.type,name:e}}:{ref:s}}}),G(e,!1,void 0,s)}else r=g(f,e,{}),r._f&&(r._f.mount=!1),(s.shouldUnregister||t.shouldUnregister)&&(!c(S.array,e)||!w.action)&&S.unMount.add(e)}}},Oe=()=>s.shouldFocusError&&I(f,ce,S.mount),Ce=(e,t)=>async r=>{r&&(r.preventDefault&&r.preventDefault(),r.persist&&r.persist());let a=m(A);if(D.state.next({isSubmitting:!0}),s.resolver){const{errors:e,values:t}=await K();u.errors=e,a=t}else await Q(f);se(u.errors,"root"),O(u.errors)?(D.state.next({errors:{}}),await e(a,r)):(t&&await t({...u.errors},r),Oe(),setTimeout(Oe)),D.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:O(u.errors),submitCount:u.submitCount+1,errors:u.errors})},Ee=(r,s={})=>{const a=r?m(r):V,i=m(a),n=r&&!O(r)?i:V;if(s.keepDefaultValues||(V=a),!s.keepValues){if(s.keepDirtyValues||k)for(const e of S.mount)g(u.dirtyFields,e)?N(n,e,g(A,e)):te(e,g(n,e));else{if(y&&v(r))for(const e of S.mount){const t=g(f,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(W(e)){const t=e.closest("form");if(t){t.reset();break}}}}f={}}A=e.shouldUnregister?s.keepDefaultValues?m(V):{}:m(n),D.array.next({values:{...n}}),D.values.next({values:{...n}})}S={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!w.mount&&t(),w.mount=!x.isValid||!!s.keepIsValid,w.watch=!!e.shouldUnregister,D.state.next({submitCount:s.keepSubmitCount?u.submitCount:0,isDirty:s.keepDirty?u.isDirty:!(!s.keepDefaultValues||ne(r,V)),isSubmitted:!!s.keepIsSubmitted&&u.isSubmitted,dirtyFields:s.keepDirtyValues?u.dirtyFields:s.keepDefaultValues&&r?ye(V,r):{},touchedFields:s.keepTouched?u.touchedFields:{},errors:s.keepErrors?u.errors:{},isSubmitSuccessful:!!s.keepIsSubmitSuccessful&&u.isSubmitSuccessful,isSubmitting:!1})},Te=(e,t)=>Ee($(e)?e(A):e,t);return{control:{register:ke,unregister:xe,getFieldState:Se,handleSubmit:Ce,setError:Fe,_executeSchema:K,_getWatch:Y,_getDirty:X,_updateValid:B,_removeUnmounted:()=>{for(const e of S.unMount){const t=g(f,e);t&&(t._f.refs?t._f.refs.every((e=>!le(e))):!le(t._f.ref))&&xe(e)}S.unMount=new Set},_updateFieldArray:(e,t=[],r,s,a=!0,i=!0)=>{if(s&&r){if(w.action=!0,i&&Array.isArray(g(f,e))){const t=r(g(f,e),s.argA,s.argB);a&&N(f,e,t)}if(i&&Array.isArray(g(u.errors,e))){const t=r(g(u.errors,e),s.argA,s.argB);a&&N(u.errors,e,t),Ve(u.errors,e)}if(x.touchedFields&&i&&Array.isArray(g(u.touchedFields,e))){const t=r(g(u.touchedFields,e),s.argA,s.argB);a&&N(u.touchedFields,e,t)}x.dirtyFields&&(u.dirtyFields=ye(V,A)),D.state.next({name:e,isDirty:X(e,t),dirtyFields:u.dirtyFields,errors:u.errors,isValid:u.isValid})}else N(A,e,t)},_updateDisabledField:De,_getFieldArray:t=>h(g(w.mount?A:V,t,e.shouldUnregister?g(V,t,[]):[])),_reset:Ee,_resetDefaultValues:()=>$(s.defaultValues)&&s.defaultValues().then((e=>{Te(e,s.resetOptions),D.state.next({isLoading:!1})})),_updateFormState:e=>{u={...u,...e}},_disableForm:e=>{p(e)&&(D.state.next({disabled:e}),I(f,(t=>{t.disabled=e}),0,!1))},_subjects:D,_proxyFormState:x,get _fields(){return f},get _formValues(){return A},get _state(){return w},set _state(e){w=e},get _defaultValues(){return V},get _names(){return S},set _names(e){S=e},get _formState(){return u},set _formState(e){u=e},get _options(){return s},set _options(e){s={...s,...e}}},trigger:fe,register:ke,handleSubmit:Ce,watch:(e,t)=>$(e)?D.values.subscribe({next:r=>e(Y(void 0,t),r)}):Y(e,t,!0),setValue:te,getValues:we,reset:Te,resetField:(e,t={})=>{g(f,e)&&(v(t.defaultValue)?te(e,g(V,e)):(te(e,t.defaultValue),N(V,e,t.defaultValue)),t.keepTouched||se(u.touchedFields,e),t.keepDirty||(se(u.dirtyFields,e),u.isDirty=t.defaultValue?X(e,g(V,e)):X()),t.keepError||(se(u.errors,e),x.isValid&&B()),D.state.next({...u}))},clearErrors:e=>{e&&E(e).forEach((e=>se(u.errors,e))),D.state.next({errors:e?u.errors:{}})},unregister:xe,setError:Fe,setFocus:(e,t={})=>{const r=g(f,e),s=r&&r._f;if(s){const e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:Se}}function Se(e={}){const t=s.useRef(),r=s.useRef(),[a,i]=s.useState({isDirty:!1,isValidating:!1,isLoading:$(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:$(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...we(e,(()=>i((e=>({...e}))))),formState:a});const n=t.current.control;return n._options=e,T({subject:n._subjects.state,next:e=>{C(e,n._proxyFormState,n._updateFormState,!0)&&i({...n._formState})}}),s.useEffect((()=>n._disableForm(e.disabled)),[n,e.disabled]),s.useEffect((()=>{if(n._proxyFormState.isDirty){const e=n._getDirty();e!==a.isDirty&&n._subjects.state.next({isDirty:e})}}),[n,a.isDirty]),s.useEffect((()=>{e.values&&!ne(e.values,r.current)?(n._reset(e.values,n._options.resetOptions),r.current=e.values):n._resetDefaultValues()}),[e.values,n]),s.useEffect((()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()})),t.current.formState=k(a,n),t.current}}}]);