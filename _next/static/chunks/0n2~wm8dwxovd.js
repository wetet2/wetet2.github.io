(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,89129,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return _},NormalizeError:function(){return x},PageNotFoundError:function(){return m},SP:function(){return b},ST:function(){return y},WEB_VITALS:function(){return o},execOnce:function(){return l},getDisplayName:function(){return u},getLocationOrigin:function(){return d},getURL:function(){return f},isAbsoluteUrl:function(){return s},isResSent:function(){return c},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return P}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function l(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let a=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>a.test(e);function d(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function f(){let{href:e}=window.location,t=d();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function c(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&c(n))return r;if(!r)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return r}let b="u">typeof performance,y=b&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class x extends Error{}class m extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class _ extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function P(e){return JSON.stringify({message:e.message,stack:e.stack})}},71914,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useIntersection",{enumerable:!0,get:function(){return s}});let r=e.r(91788),i=e.r(99604),o="function"==typeof IntersectionObserver,l=new Map,a=[];function s({rootRef:e,rootMargin:t,disabled:n}){let d=n||!o,[f,u]=(0,r.useState)(!1),c=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{c.current=e},[]);return(0,r.useEffect)(()=>{if(o){if(d||f)return;let n=c.current;if(n&&n.tagName)return function(e,t,n){let{id:r,observer:i,elements:o}=function(e){let t,n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let i=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:i},a.push(n),l.set(n,t),t}(n);return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),l.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(n,e=>e&&u(e),{root:e?.current,rootMargin:t})}else if(!f){let e=(0,i.requestIdleCallback)(()=>u(!0));return()=>(0,i.cancelIdleCallback)(e)}},[d,t,e,f,c.current]),[p,f,(0,r.useCallback)(()=>{u(!1)},[])]}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},54471,(e,t,n)=>{"use strict";function r(e,t,n,r){return!1}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getDomainLocale",{enumerable:!0,get:function(){return r}}),e.r(70090),("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},63230,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return i}});let r=e.r(91788);function i(e,t){let n=(0,r.useRef)(null),i=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(n.current=o(e,r)),t&&(i.current=o(t,r))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},48735,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},39149,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return C},useLinkStatus:function(){return w}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=e.r(52456),l=e.r(91398),a=o._(e.r(91788)),s=e.r(60472),d=e.r(71112),f=e.r(28169),u=e.r(89129),c=e.r(14862),p=e.r(25479),h=e.r(71914),b=e.r(54471),y=e.r(44113),g=e.r(63230);e.r(48735);let x=new Set;function m(e,t,n,r){if(!("u"<typeof window)&&(0,d.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let i=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(x.has(i))return;x.add(i)}e.prefetch(t,n,r).catch(e=>{})}}function _(e){return"string"==typeof e?e:(0,f.formatUrl)(e)}let v=a.default.forwardRef(function(e,t){let n,r,{href:i,as:o,children:f,prefetch:x=null,passHref:v,replace:P,shallow:w,scroll:C,locale:T,onClick:k,onNavigate:S,onMouseEnter:E,onTouchStart:I,legacyBehavior:A=!1,transitionTypes:j,...O}=e;n=f,A&&("string"==typeof n||"number"==typeof n)&&(n=(0,l.jsx)("a",{children:n}));let M=a.default.useContext(p.RouterContext),N=!1!==x,{href:R,as:L}=a.default.useMemo(()=>{if(!M){let e=_(i);return{href:e,as:o?_(o):e}}let[e,t]=(0,s.resolveHref)(M,i,!0);return{href:e,as:o?(0,s.resolveHref)(M,o):t||e}},[M,i,o]),D=a.default.useRef(R),H=a.default.useRef(L);A&&(r=a.default.Children.only(n));let z=A?r&&"object"==typeof r&&r.ref:t,[$,W,B]=(0,h.useIntersection)({rootMargin:"200px"}),V=a.default.useCallback(e=>{(H.current!==L||D.current!==R)&&(B(),H.current=L,D.current=R),$(e)},[L,R,B,$]),U=(0,g.useMergedRef)(V,z);a.default.useEffect(()=>{!M||W&&N&&m(M,R,L,{locale:T})},[L,R,W,T,N,M?.locale,M]);let G={ref:U,onClick(e){A||"function"!=typeof k||k(e),A&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),!M||e.defaultPrevented||function(e,t,n,r,i,o,l,a,s){let f,{nodeName:u}=e.currentTarget;if(!("A"===u.toUpperCase()&&((f=e.currentTarget.getAttribute("target"))&&"_self"!==f||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which)||e.currentTarget.hasAttribute("download"))){if(!(0,d.isLocalURL)(n)){i&&(e.preventDefault(),location.replace(n));return}e.preventDefault(),(()=>{if(s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let e=l??!0;"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:o,locale:a,scroll:e}):t[i?"replace":"push"](r||n,{scroll:e})})()}}(e,M,R,L,P,w,C,T,S)},onMouseEnter(e){A||"function"!=typeof E||E(e),A&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),M&&m(M,R,L,{locale:T,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){A||"function"!=typeof I||I(e),A&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),M&&m(M,R,L,{locale:T,priority:!0,bypassPrefetchedCheck:!0})}};if((0,u.isAbsoluteUrl)(L))G.href=L;else if(!A||v||"a"===r.type&&!("href"in r.props)){let e=void 0!==T?T:M?.locale;G.href=M?.isLocaleDomain&&(0,b.getDomainLocale)(L,e,M?.locales,M?.domainLocales)||(0,y.addBasePath)((0,c.addLocale)(L,e,M?.defaultLocale))}return A?a.default.cloneElement(r,G):(0,l.jsx)("a",{...O,...G,children:n})}),P=(0,a.createContext)({pending:!1}),w=()=>(0,a.useContext)(P),C=v;("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},41158,(e,t,n)=>{t.exports=e.r(39149)},17431,(e,t,n)=>{"use strict";var r=e.r(91788);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},a=Symbol.for("react.portal"),s=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,n.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(i(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:a,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},n.flushSync=function(e){var t=s.T,n=l.p;try{if(s.T=null,l.p=2,e)return e()}finally{s.T=t,l.p=n,l.d.f()}},n.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,l.d.C(e,t))},n.prefetchDNS=function(e){"string"==typeof e&&l.d.D(e)},n.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var n=t.as,r=d(n,t.crossOrigin),i="string"==typeof t.integrity?t.integrity:void 0,o="string"==typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?l.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):"script"===n&&l.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},n.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=d(t.as,t.crossOrigin);l.d.M(e,{crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&l.d.M(e)},n.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var n=t.as,r=d(n,t.crossOrigin);l.d.L(e,n,{crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},n.preloadModule=function(e,t){if("string"==typeof e)if(t){var n=d(t.as,t.crossOrigin);l.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else l.d.m(e)},n.requestFormReset=function(e){l.d.r(e)},n.unstable_batchedUpdates=function(e,t){return e(t)},n.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},n.useFormStatus=function(){return s.H.useHostTransitionStatus()},n.version="19.2.4"},30943,(e,t,n)=>{"use strict";!function e(){if("u">typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),t.exports=e.r(17431)},11829,(e,t,n)=>{"use strict";function r(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,i=e[r];if(0<l(i,t))e[r]=t,e[n]=i,n=r;else break}}function i(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,i=e.length,o=i>>>1;r<o;){var a=2*(r+1)-1,s=e[a],d=a+1,f=e[d];if(0>l(s,n))d<i&&0>l(f,s)?(e[r]=f,e[d]=n,r=d):(e[r]=s,e[a]=n,r=a);else if(d<i&&0>l(f,n))e[r]=f,e[d]=n,r=d;else break}}return t}function l(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(n.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var a,s=performance;n.unstable_now=function(){return s.now()}}else{var d=Date,f=d.now();n.unstable_now=function(){return d.now()-f}}var u=[],c=[],p=1,h=null,b=3,y=!1,g=!1,x=!1,m=!1,_="function"==typeof setTimeout?setTimeout:null,v="function"==typeof clearTimeout?clearTimeout:null,P="u">typeof setImmediate?setImmediate:null;function w(e){for(var t=i(c);null!==t;){if(null===t.callback)o(c);else if(t.startTime<=e)o(c),t.sortIndex=t.expirationTime,r(u,t);else break;t=i(c)}}function C(e){if(x=!1,w(e),!g)if(null!==i(u))g=!0,T||(T=!0,a());else{var t=i(c);null!==t&&M(C,t.startTime-e)}}var T=!1,k=-1,S=5,E=-1;function I(){return!!m||!(n.unstable_now()-E<S)}function A(){if(m=!1,T){var e=n.unstable_now();E=e;var t=!0;try{e:{g=!1,x&&(x=!1,v(k),k=-1),y=!0;var r=b;try{t:{for(w(e),h=i(u);null!==h&&!(h.expirationTime>e&&I());){var l=h.callback;if("function"==typeof l){h.callback=null,b=h.priorityLevel;var s=l(h.expirationTime<=e);if(e=n.unstable_now(),"function"==typeof s){h.callback=s,w(e),t=!0;break t}h===i(u)&&o(u),w(e)}else o(u);h=i(u)}if(null!==h)t=!0;else{var d=i(c);null!==d&&M(C,d.startTime-e),t=!1}}break e}finally{h=null,b=r,y=!1}}}finally{t?a():T=!1}}}if("function"==typeof P)a=function(){P(A)};else if("u">typeof MessageChannel){var j=new MessageChannel,O=j.port2;j.port1.onmessage=A,a=function(){O.postMessage(null)}}else a=function(){_(A,0)};function M(e,t){k=_(function(){e(n.unstable_now())},t)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<e?Math.floor(1e3/e):5},n.unstable_getCurrentPriorityLevel=function(){return b},n.unstable_next=function(e){switch(b){case 1:case 2:case 3:var t=3;break;default:t=b}var n=b;b=t;try{return e()}finally{b=n}},n.unstable_requestPaint=function(){m=!0},n.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=b;b=e;try{return t()}finally{b=n}},n.unstable_scheduleCallback=function(e,t,o){var l=n.unstable_now();switch(o="object"==typeof o&&null!==o&&"number"==typeof(o=o.delay)&&0<o?l+o:l,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=0x3fffffff;break;case 4:s=1e4;break;default:s=5e3}return s=o+s,e={id:p++,callback:t,priorityLevel:e,startTime:o,expirationTime:s,sortIndex:-1},o>l?(e.sortIndex=o,r(c,e),null===i(u)&&e===i(c)&&(x?(v(k),k=-1):x=!0,M(C,o-l))):(e.sortIndex=s,r(u,e),g||y||(g=!0,T||(T=!0,a()))),e},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(e){var t=b;return function(){var n=b;b=t;try{return e.apply(this,arguments)}finally{b=n}}}},52659,(e,t,n)=>{"use strict";t.exports=e.r(11829)},61592,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"LoadableContext",{enumerable:!0,get:function(){return r}});let r=e.r(41705)._(e.r(91788)).default.createContext(null)},52414,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});let r=e.r(41705)._(e.r(91788)),i=e.r(61592),o=[],l=[],a=!1;function s(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class d{constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}}function f(t){return function(t,n){let s=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},n),f=null;function u(){if(!f){let e=new d(t,s);f={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return f.promise()}if("u"<typeof window&&o.push(u),!a&&"u">typeof window){let t=s.webpack&&"function"==typeof e.t.resolveWeak?s.webpack():s.modules;t&&l.push(e=>{for(let n of t)if(e.includes(n))return u()})}function c(e,t){let n;u(),(n=r.default.useContext(i.LoadableContext))&&Array.isArray(s.modules)&&s.modules.forEach(e=>{n(e)});let o=r.default.useSyncExternalStore(f.subscribe,f.getCurrentValue,f.getCurrentValue);return r.default.useImperativeHandle(t,()=>({retry:f.retry}),[]),r.default.useMemo(()=>{var t;return o.loading||o.error?r.default.createElement(s.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:f.retry}):o.loaded?r.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return c.preload=()=>u(),c.displayName="LoadableComponent",r.default.forwardRef(c)}(s,t)}function u(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then(()=>{if(e.length)return u(e,t)})}f.preloadAll=()=>new Promise((e,t)=>{u(o).then(e,t)}),f.preloadReady=(e=[])=>new Promise(t=>{let n=()=>(a=!0,t());u(l,e).then(n,n)}),"u">typeof window&&(window.__NEXT_PRELOADREADY=f.preloadReady);let c=f},25167,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return u},noSSR:function(){return f}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=e.r(41705),l=e.r(91398);e.r(91788);let a=o._(e.r(52414)),s="u"<typeof window;function d(e){return{default:e?.default||e}}function f(e,t){if(delete t.webpack,delete t.modules,!s)return e(t);let n=t.loading;return()=>(0,l.jsx)(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function u(e,t){let n=a.default,r={loading:({error:e,isLoading:t,pastDelay:n})=>null};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r={...r,...e});let i=(r={...r,...t}).loader;return(r.loadableGenerated&&(r={...r,...r.loadableGenerated},delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr)?n({...r,loader:()=>null!=i?i().then(d):Promise.resolve(d(()=>null))}):(delete r.webpack,delete r.modules,f(n,r))}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},68489,(e,t,n)=>{t.exports=e.r(25167)},45901,65305,e=>{"use strict";function t(e,t,n){return{x:("front"===n?175:505)+("front"===n?e:-e)*152,y:420-152*t}}function n(e,r,i,o,l,a,s=0){let d=t(i,o,r);e.ellipse(d.x,d.y,152*l,152*a,"front"===r?-s:s,0,2*Math.PI)}function r(e,n){let r=(e,r)=>t(e,r,n),i=r(0,1.54);for(let t of(e.beginPath(),e.moveTo(i.x,i.y),[{cp1:[.12,1.54],cp2:[.22,1.5],to:[.3,1.44]},{cp1:[.44,1.4],cp2:[.6,1.24],to:[.68,1.04]},{cp1:[.74,.9],cp2:[.64,.78],to:[.52,.84]},{cp1:[.46,.88],cp2:[.42,.98],to:[.39,1.06]},{cp1:[.43,.94],cp2:[.48,.76],to:[.45,.56]},{cp1:[.44,.42],cp2:[.43,.26],to:[.42,.14]},{cp1:[.42,.02],cp2:[.28,.01],to:[.24,.01]},{cp1:[.16,.01],cp2:[.09,.04],to:[.09,.15]},{cp1:[.09,.26],cp2:[.07,.42],to:[0,.44]}])){let n=r(t.cp1[0],t.cp1[1]),i=r(t.cp2[0],t.cp2[1]),o=r(t.to[0],t.to[1]);e.bezierCurveTo(n.x,n.y,i.x,i.y,o.x,o.y)}for(let t of[{cp1:[-.07,.42],cp2:[-.09,.26],to:[-.09,.15]},{cp1:[-.09,.04],cp2:[-.16,.01],to:[-.24,.01]},{cp1:[-.28,.01],cp2:[-.42,.02],to:[-.42,.14]},{cp1:[-.43,.26],cp2:[-.44,.42],to:[-.45,.56]},{cp1:[-.48,.76],cp2:[-.43,.94],to:[-.39,1.06]},{cp1:[-.42,.98],cp2:[-.46,.88],to:[-.52,.84]},{cp1:[-.64,.78],cp2:[-.74,.9],to:[-.68,1.04]},{cp1:[-.6,1.24],cp2:[-.44,1.4],to:[-.3,1.44]},{cp1:[-.22,1.5],cp2:[-.12,1.54],to:[0,1.54]}]){let n=r(t.cp1[0],t.cp1[1]),i=r(t.cp2[0],t.cp2[1]),o=r(t.to[0],t.to[1]);e.bezierCurveTo(n.x,n.y,i.x,i.y,o.x,o.y)}e.closePath()}function i(e,t,r){e.beginPath(),n(e,t,-.39,2.28,.19,.19),"fill"===r?e.fill():e.stroke(),e.beginPath(),n(e,t,.39,2.28,.19,.19),"fill"===r?e.fill():e.stroke(),e.beginPath(),n(e,t,0,1.87,.52,.46),"fill"===r?e.fill():e.stroke()}function o(e,t,r){e.beginPath(),n(e,t,-.4,2.29,.17,.21,-.2),"fill"===r?e.fill():e.stroke(),e.beginPath(),n(e,t,.4,2.29,.17,.21,.2),"fill"===r?e.fill():e.stroke(),e.beginPath(),n(e,t,-.42,1.77,.18,.15,.15),"fill"===r?e.fill():e.stroke(),e.beginPath(),n(e,t,.42,1.77,.18,.15,-.15),"fill"===r?e.fill():e.stroke(),e.beginPath(),n(e,t,0,1.87,.53,.46),"fill"===r?e.fill():e.stroke()}function l(e,t,r){e.beginPath(),n(e,t,-.22,2.38,.13,.28,-.1),"fill"===r?e.fill():e.stroke(),e.beginPath(),n(e,t,.22,2.38,.13,.28,.1),"fill"===r?e.fill():e.stroke(),e.beginPath(),n(e,t,0,1.84,.5,.44),"fill"===r?e.fill():e.stroke()}function a(e,t,r){e.beginPath(),n(e,t,-.53,1.89,.27,.35,.14),"fill"===r?e.fill():e.stroke(),e.beginPath(),n(e,t,.53,1.89,.27,.35,-.14),"fill"===r?e.fill():e.stroke(),e.beginPath(),n(e,t,0,1.87,.48,.45),"fill"===r?e.fill():e.stroke()}function s(e,t,n,i){let o=7.6*n,l=document.createElement("canvas");l.width=680,l.height=460;let a=l.getContext("2d");a&&(a.lineCap="round",a.lineJoin="round",a.strokeStyle="#1e293b",a.lineWidth=o,r(a,t),a.stroke(),a.globalCompositeOperation="destination-out",a.fillStyle="#000000",r(a,t),a.fill(),e.drawImage(l,0,0));let s=document.createElement("canvas");s.width=680,s.height=460;let d=s.getContext("2d");d&&(d.lineCap="round",d.lineJoin="round",d.strokeStyle="#1e293b",d.lineWidth=o,i(d,t,"stroke"),d.globalCompositeOperation="destination-out",d.fillStyle="#000000",i(d,t,"fill"),e.save(),e.globalCompositeOperation="destination-out",e.fillStyle="#000000",i(e,t,"fill"),e.restore(),e.drawImage(s,0,0))}e.s(["BACK_CENTER_X",0,505,"BRUSH_SIZES_6",0,[{size:4,label:"극세"},{size:8,label:"세필"},{size:14,label:"보통"},{size:22,label:"굵게"},{size:32,label:"왕붓"},{size:46,label:"점보"}],"CHARACTER_BASE_Y",0,420,"CHARACTER_SCALE",0,152,"COLOR_PALETTE_20",0,[{hex:"#ef4444",name:"사과 레드"},{hex:"#f97316",name:"탠저린 오렌지"},{hex:"#f59e0b",name:"허니 앰버"},{hex:"#eab308",name:"레몬 옐로우"},{hex:"#84cc16",name:"라임 그린"},{hex:"#22c55e",name:"클로버 그린"},{hex:"#10b981",name:"에메랄드 민트"},{hex:"#14b8a6",name:"트로피컬 틸"},{hex:"#06b6d4",name:"스카이 시안"},{hex:"#3b82f6",name:"오션 블루"},{hex:"#6366f1",name:"로얄 인디고"},{hex:"#8b5cf6",name:"라벤더 바이올렛"},{hex:"#a855f7",name:"포도 퍼플"},{hex:"#d946ef",name:"캔디 마젠타"},{hex:"#ec4899",name:"체리 핑크"},{hex:"#fda4af",name:"베이비 피치"},{hex:"#a16207",name:"테디 브라운"},{hex:"#d6a87c",name:"카라멜 베이지"},{hex:"#64748b",name:"코지 그레이"},{hex:"#1e293b",name:"차콜 블랙"}],"FRONT_CENTER_X",0,175,"TEMPLATE_CANVAS_HEIGHT",0,460,"TEMPLATE_CANVAS_WIDTH",0,680],65305);let d={id:"bear",name:"곰돌이",icon:"🐻",defaultColor:"#a16207",earRadius:.19,earOffset:[.39,2.28,0],headScale:[.52,.46,.46],snoutScale:[.18,.13,.14],tailRadius:.13,drawOutlineParts(e,t,n=1){s(e,t,n,i)},drawDetails(e,r,i=1,o=!1){if(e.save(),e.lineCap="round",e.lineJoin="round","front"===r){o||(e.strokeStyle="#334155",e.lineWidth=2.4*i,e.beginPath(),n(e,r,-.39,2.28,.095,.095),e.stroke(),e.beginPath(),n(e,r,.39,2.28,.095,.095),e.stroke(),e.strokeStyle="rgba(244, 114, 182, 0.65)",e.lineWidth=2.2*i,e.beginPath(),n(e,r,-.31,1.78,.075,.045),e.stroke(),e.beginPath(),n(e,r,.31,1.78,.075,.045),e.stroke(),e.strokeStyle="#1e293b",e.lineWidth=2.5*i,e.beginPath(),n(e,r,0,1.74,.17,.125),e.stroke());let l=t(-.19,1.91,r),a=t(.19,1.91,r);e.fillStyle="#1e293b",e.beginPath(),e.arc(l.x,l.y,6.2*i,0,2*Math.PI),e.arc(a.x,a.y,6.2*i,0,2*Math.PI),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.arc(l.x-2*i,l.y-2*i,2.1*i,0,2*Math.PI),e.arc(a.x-2*i,a.y-2*i,2.1*i,0,2*Math.PI),e.fill();let s=t(0,1.79,r);e.fillStyle="#1e293b",e.beginPath(),e.ellipse(s.x,s.y,6.8*i,4.8*i,0,0,2*Math.PI),e.fill();let d=t(0,1.75,r),f=t(-.07,1.69,r),u=t(.07,1.69,r);e.strokeStyle="#1e293b",e.lineWidth=2.5*i,e.beginPath(),e.moveTo(d.x,d.y),e.quadraticCurveTo(d.x,f.y,f.x,f.y),e.moveTo(d.x,d.y),e.quadraticCurveTo(d.x,u.y,u.x,u.y),e.stroke()}else o||(e.strokeStyle="#1e293b",e.lineWidth=3.2*i,e.beginPath(),n(e,r,0,.62,.12,.12),e.stroke());e.restore()}},f={id:"tiger",name:"호랑이",icon:"🐯",defaultColor:"#f97316",earRadius:.19,earOffset:[.4,2.29,0],headScale:[.54,.46,.46],snoutScale:[.19,.13,.14],tailRadius:.11,drawOutlineParts(e,t,n=1){s(e,t,n,o)},drawDetails(e,r,i=1,o=!1){if(e.save(),e.lineCap="round",e.lineJoin="round","front"===r){o||(e.strokeStyle="#334155",e.lineWidth=2.4*i,e.beginPath(),n(e,r,-.4,2.29,.09,.11,-.2),e.stroke(),e.beginPath(),n(e,r,.4,2.29,.09,.11,.2),e.stroke()),e.strokeStyle="#1e293b",e.lineWidth=3.2*i;let l=(n,i,o,l)=>{let a=t(n,i,r),s=t(o,l,r);e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(s.x,s.y),e.stroke()};l(-.14,2.21,.14,2.21),l(-.18,2.13,.18,2.13),l(-.12,2.05,.12,2.05),l(0,2.23,0,2.03),l(-.48,1.85,-.34,1.83),l(-.49,1.75,-.35,1.75),l(.48,1.85,.34,1.83),l(.49,1.75,.35,1.75),e.lineWidth=2.6*i,l(-.43,.9,-.3,.88),l(-.44,.78,-.31,.77),l(.43,.9,.3,.88),l(.44,.78,.31,.77);let a=t(-.2,1.91,r),s=t(.2,1.91,r);e.fillStyle="#1e293b",e.beginPath(),e.arc(a.x,a.y,6.4*i,0,2*Math.PI),e.arc(s.x,s.y,6.4*i,0,2*Math.PI),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.arc(a.x-2*i,a.y-2*i,2.2*i,0,2*Math.PI),e.arc(s.x-2*i,s.y-2*i,2.2*i,0,2*Math.PI),e.fill(),o||(e.strokeStyle="#1e293b",e.lineWidth=2.5*i,e.beginPath(),n(e,r,-.08,1.73,.11,.09),e.stroke(),e.beginPath(),n(e,r,.08,1.73,.11,.09),e.stroke());let d=t(0,1.79,r);e.fillStyle="#1e293b",e.beginPath(),e.ellipse(d.x,d.y,7*i,5*i,0,0,2*Math.PI),e.fill(),e.strokeStyle="#475569",e.lineWidth=1.8*i,l(-.22,1.74,-.34,1.76),l(-.22,1.7,-.33,1.68),l(.22,1.74,.34,1.76),l(.22,1.7,.33,1.68)}else{e.strokeStyle="#1e293b",e.lineWidth=3.2*i;let n=(n,i,o,l)=>{let a=t(n,i,r),s=t(o,l,r);e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(s.x,s.y),e.stroke()};if(n(-.36,1.92,-.18,1.9),n(.36,1.92,.18,1.9),n(-.35,1.8,-.2,1.79),n(.35,1.8,.2,1.79),n(-.4,1.02,-.22,1),n(.4,1.02,.22,1),n(-.43,.86,-.24,.85),n(.43,.86,.24,.85),!o){let n=t(0,.58,r),o=t(.18,.52,r),l=t(.34,.72,r),a=t(.28,.92,r);e.lineWidth=10*i,e.strokeStyle="#1e293b",e.beginPath(),e.moveTo(n.x,n.y),e.bezierCurveTo(o.x,o.y,l.x,l.y,a.x,a.y),e.stroke(),e.lineWidth=5*i,e.strokeStyle="#f97316",e.beginPath(),e.moveTo(n.x,n.y),e.bezierCurveTo(o.x,o.y,l.x,l.y,a.x,a.y),e.stroke()}}e.restore()}},u={id:"rabbit",name:"토끼",icon:"🐰",defaultColor:"#fda4af",earRadius:.2,earOffset:[.22,2.38,0],headScale:[.5,.44,.44],snoutScale:[.16,.12,.13],tailRadius:.16,drawOutlineParts(e,t,n=1){s(e,t,n,l)},drawDetails(e,r,i=1,o=!1){if(e.save(),e.lineCap="round",e.lineJoin="round","front"===r){o||(e.strokeStyle="#f43f5e",e.lineWidth=2.2*i,e.beginPath(),n(e,r,-.22,2.37,.065,.18,-.1),e.stroke(),e.beginPath(),n(e,r,.22,2.37,.065,.18,.1),e.stroke(),e.strokeStyle="rgba(244, 114, 182, 0.75)",e.lineWidth=2.2*i,e.beginPath(),n(e,r,-.31,1.76,.08,.048),e.stroke(),e.beginPath(),n(e,r,.31,1.76,.08,.048),e.stroke());let l=t(-.18,1.88,r),a=t(.18,1.88,r);e.fillStyle="#1e293b",e.beginPath(),e.arc(l.x,l.y,6.2*i,0,2*Math.PI),e.arc(a.x,a.y,6.2*i,0,2*Math.PI),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.arc(l.x-2*i,l.y-2*i,2.1*i,0,2*Math.PI),e.arc(a.x-2*i,a.y-2*i,2.1*i,0,2*Math.PI),e.fill();let s=t(0,1.77,r);e.fillStyle="#fb7185",e.beginPath(),e.ellipse(s.x,s.y,6.2*i,4.5*i,0,0,2*Math.PI),e.fill();let d=t(0,1.74,r),f=t(-.07,1.68,r),u=t(.07,1.68,r);e.strokeStyle="#1e293b",e.lineWidth=2.4*i,e.beginPath(),e.moveTo(d.x,d.y),e.quadraticCurveTo(d.x,f.y,f.x,f.y),e.moveTo(d.x,d.y),e.quadraticCurveTo(d.x,u.y,u.x,u.y),e.stroke(),e.strokeStyle="#64748b",e.lineWidth=1.6*i;let c=(n,i,o,l)=>{let a=t(n,i,r),s=t(o,l,r);e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(s.x,s.y),e.stroke()};c(-.18,1.75,-.28,1.77),c(-.18,1.71,-.27,1.69),c(.18,1.75,.28,1.77),c(.18,1.71,.27,1.69)}else o||(e.strokeStyle="#1e293b",e.lineWidth=3.2*i,e.beginPath(),n(e,r,0,.63,.15,.15),e.stroke());e.restore()}},c={id:"elephant",name:"코끼리",icon:"🐘",defaultColor:"#06b6d4",earRadius:.32,earOffset:[.53,1.89,0],headScale:[.48,.45,.45],snoutScale:[.15,.28,.22],tailRadius:.1,drawOutlineParts(e,t,n=1){s(e,t,n,a)},drawDetails(e,r,i=1,o=!1){e.save(),e.lineCap="round",e.lineJoin="round";let l=(e,n)=>t(e,n,r);if("front"===r){if(!o){e.strokeStyle="#475569",e.lineWidth=2.2*i,e.beginPath(),n(e,r,-.55,1.88,.16,.23,.14),e.stroke(),e.beginPath(),n(e,r,.55,1.88,.16,.23,-.14),e.stroke(),e.strokeStyle="rgba(244, 114, 182, 0.65)",e.lineWidth=2.2*i,e.beginPath(),n(e,r,-.3,1.79,.075,.045),e.stroke(),e.beginPath(),n(e,r,.3,1.79,.075,.045),e.stroke();let t=l(-.095,1.84),o=l(-.1,1.38),a=l(-.02,1.18),s=l(.14,1.24),d=l(.08,1.32),f=l(.08,1.48),u=l(.095,1.84);e.strokeStyle="#1e293b",e.lineWidth=3.2*i,e.beginPath(),e.moveTo(t.x,t.y),e.bezierCurveTo(o.x,o.y,a.x,a.y,s.x,s.y),e.quadraticCurveTo(d.x,d.y,f.x,f.y),e.lineTo(u.x,u.y),e.stroke()}let t=l(-.2,1.93),a=l(.2,1.93);for(let n of(e.fillStyle="#1e293b",e.beginPath(),e.arc(t.x,t.y,6.2*i,0,2*Math.PI),e.arc(a.x,a.y,6.2*i,0,2*Math.PI),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.arc(t.x-2*i,t.y-2*i,2.1*i,0,2*Math.PI),e.arc(a.x-2*i,a.y-2*i,2.1*i,0,2*Math.PI),e.fill(),e.strokeStyle="#1e293b",e.lineWidth=1.8*i,[1.76,1.66,1.56,1.46,1.36])){let t=l(-.055,n),r=l(.05,n);e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(r.x,r.y),e.stroke()}}else if(!o){e.strokeStyle="#475569",e.lineWidth=2*i,e.beginPath(),n(e,r,-.55,1.88,.15,.22,.14),e.stroke(),e.beginPath(),n(e,r,.55,1.88,.15,.22,-.14),e.stroke();let t=l(.02,.69),o=l(.14,.66),a=l(.22,.58),s=l(.19,.54),d=l(.11,.61),f=l(-.01,.64);e.strokeStyle="#1e293b",e.lineWidth=2.8*i,e.beginPath(),e.moveTo(t.x,t.y),e.quadraticCurveTo(o.x,o.y,a.x,a.y),e.lineTo(s.x,s.y),e.quadraticCurveTo(d.x,d.y,f.x,f.y),e.stroke();let u=l(.2,.56),c=l(.29,.57),p=l(.32,.49),h=l(.23,.47);e.fillStyle="#334155",e.beginPath(),e.moveTo(u.x,u.y),e.quadraticCurveTo(c.x,c.y,p.x,p.y),e.quadraticCurveTo(h.x,h.y,u.x,u.y),e.closePath(),e.fill(),e.stroke()}e.restore()}},p=[d,f,u,c];e.s(["ANIMAL_SPECIES_LIST",0,p,"ANIMAL_SPECIES_MAP",0,{bear:d,tiger:f,rabbit:u,elephant:c},"charToCanvas",0,t,"renderSpeciesOutlineOverlay",0,function(e,t){for(let n of(e.clearRect(0,0,680,460),e.save(),e.strokeStyle="rgba(148, 163, 184, 0.5)",e.lineWidth=1.5,e.setLineDash([6,6]),e.beginPath(),e.moveTo(340,20),e.lineTo(340,440),e.stroke(),e.restore(),["front","back"])){let r=document.createElement("canvas");r.width=680,r.height=460;let i=r.getContext("2d");i&&(t.drawOutlineParts(i,n,1),t.drawDetails(i,n,1),e.drawImage(r,0,0))}}],45901)},24781,e=>{"use strict";var t=e.i(91398),n=e.i(91788),r=e.i(58678),i=e.i(41158),o=e.i(68489),l=e.i(32369),a=e.i(45901),s=e.i(65305),d=e.i(60814);let f=d.default.div.withConfig({displayName:"styled__PageContainer",componentId:"sc-545aabb0-0"})`
  display: flex;
  flex-direction: column;

  position: relative;

  box-sizing: border-box;
  width: 100vw;
  height: 100vh;

  font-family: "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, sans-serif;
  color: #1e293b;
  background: #f0fdf4;
  overflow: hidden;
  user-select: none;
  -webkit-user-select: none;

  @media (max-width: 1024px) {
    height: auto;
    min-height: 100vh;
    overflow-y: auto;
  }
`,u=d.default.header.withConfig({displayName:"styled__TopBar",componentId:"sc-545aabb0-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  position: relative;
  z-index: 10;

  box-sizing: border-box;
  width: 100%;
  height: 56px;
  padding: 0 20px;

  background: rgba(255, 255, 255, 0.88);
  border-bottom: 1px solid rgba(34, 197, 94, 0.2);
  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.05);
  backdrop-filter: blur(12px);
`,c=d.default.div.withConfig({displayName:"styled__BrandGroup",componentId:"sc-545aabb0-2"})`
  display: flex;
  align-items: center;
  gap: 12px;
`,p=d.default.a.withConfig({displayName:"styled__HomeLinkButton",componentId:"sc-545aabb0-3"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  padding: 6px 12px;

  font-size: 13px;
  font-weight: 700;
  color: #15803d;
  text-decoration: none;
  background: #dcfce7;
  border: 1px solid #86efac;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #bbf7d0;
    transform: translateY(-1px);
  }
`,h=d.default.h1.withConfig({displayName:"styled__HeaderTitle",componentId:"sc-545aabb0-4"})`
  margin: 0;

  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #14532d;
`,b=d.default.span.withConfig({displayName:"styled__HeaderBadge",componentId:"sc-545aabb0-5"})`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 5px 12px;

  font-size: 12px;
  font-weight: 700;
  color: #0369a1;
  background: #e0f2fe;
  border: 1px solid #7dd3fc;
  border-radius: 999px;
`,y=d.default.main.withConfig({displayName:"styled__MainSplitLayout",componentId:"sc-545aabb0-6"})`
  display: flex;
  flex: 1;
  align-items: stretch;

  width: 100%;
  min-height: 0;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`,g=d.default.section.withConfig({displayName:"styled__LeftWorldPane",componentId:"sc-545aabb0-7"})`
  display: flex;
  flex: 1.15;
  flex-direction: column;

  position: relative;

  min-width: 0;
  height: 100%;

  background: linear-gradient(180deg, #bae6fd 0%, #dcfce7 100%);
  overflow: hidden;

  @media (max-width: 1024px) {
    flex: none;

    height: 52vh;
    min-height: 400px;
  }
`,x=d.default.div.withConfig({displayName:"styled__WorldHelpFooter",componentId:"sc-545aabb0-8"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 14px;
  z-index: 5;

  pointer-events: none;
`,m=d.default.div.withConfig({displayName:"styled__HelpPill",componentId:"sc-545aabb0-9"})`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 6px 12px;

  font-size: 12px;
  font-weight: 600;
  color: #334155;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 999px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(6px);
`,_=d.default.section.withConfig({displayName:"styled__RightDrawingPane",componentId:"sc-545aabb0-10"})`
  display: flex;
  flex: 0.95;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;

  box-sizing: border-box;
  min-width: 380px;
  max-width: 680px;
  height: 100%;
  padding: 16px 20px;

  background: #ffffff;
  border-left: 1px solid #e2e8f0;
  box-shadow: -6px 0 24px rgba(15, 23, 42, 0.04);
  overflow-y: auto;

  @media (max-width: 1024px) {
    flex: none;

    min-width: 0;
    max-width: 100%;
    height: auto;

    border-left: none;
    border-top: 1px solid #e2e8f0;
  }
`,v=d.default.div.withConfig({displayName:"styled__AnimalSelectorBar",componentId:"sc-545aabb0-11"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  box-sizing: border-box;
  width: 100%;
  padding: 8px 12px;

  background: #f0fdf4;
  border: 1.5px solid #bbf7d0;
  border-radius: 12px;
`,P=d.default.span.withConfig({displayName:"styled__AnimalSelectorLabel",componentId:"sc-545aabb0-12"})`
  font-size: 13px;
  font-weight: 800;
  color: #166534;
`,w=d.default.div.withConfig({displayName:"styled__AnimalTabGroup",componentId:"sc-545aabb0-13"})`
  display: flex;
  align-items: center;
  gap: 6px;
`,C=d.default.button.withConfig({displayName:"styled__AnimalTabButton",componentId:"sc-545aabb0-14"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  padding: 6px 14px;

  font-size: 13px;
  font-weight: 800;
  color: ${({$active:e})=>e?"#ffffff":"#15803d"};
  background: ${({$active:e})=>e?"linear-gradient(135deg, #22c55e 0%, #16a34a 100%)":"#ffffff"};
  border: 1.5px solid ${({$active:e})=>e?"#16a34a":"#86efac"};
  border-radius: 999px;
  box-shadow: ${({$active:e})=>e?"0 3px 10px rgba(22, 163, 74, 0.28)":"none"};
  cursor: pointer;
  transition: all 0.16s ease;

  &:hover {
    transform: translateY(-1px);
  }
`,T=d.default.div.withConfig({displayName:"styled__SectionHeaderRow",componentId:"sc-545aabb0-15"})`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`,k=d.default.div.withConfig({displayName:"styled__SectionTitleGroup",componentId:"sc-545aabb0-16"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,S=d.default.h2.withConfig({displayName:"styled__SectionTitle",componentId:"sc-545aabb0-17"})`
  margin: 0;

  font-size: 16px;
  font-weight: 800;
  color: #0f172a;
`,E=d.default.p.withConfig({displayName:"styled__SectionSubtext",componentId:"sc-545aabb0-18"})`
  margin: 0;

  font-size: 12px;
  color: #64748b;
`,I=d.default.div.withConfig({displayName:"styled__ToolActionRow",componentId:"sc-545aabb0-19"})`
  display: flex;
  align-items: center;
  gap: 6px;
`,A=d.default.button.withConfig({displayName:"styled__SubToolButton",componentId:"sc-545aabb0-20"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  padding: 6px 11px;

  font-size: 12px;
  font-weight: 700;
  color: ${({$active:e})=>e?"#ffffff":"#334155"};
  background: ${({$active:e})=>e?"#0f172a":"#f1f5f9"};
  border: 1px solid ${({$active:e})=>e?"#0f172a":"#cbd5e1"};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover:not(:disabled) {
    background: ${({$active:e})=>e?"#1e293b":"#e2e8f0"};
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,j=d.default.div.withConfig({displayName:"styled__CanvasFrame",componentId:"sc-545aabb0-21"})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  position: relative;

  box-sizing: border-box;
  width: 100%;
  min-height: 280px;

  background: #ffffff;
  border: 2px solid #cbd5e1;
  border-radius: 16px;
  box-shadow: inset 0 2px 6px rgba(15, 23, 42, 0.04);
  overflow: hidden;
  touch-action: none;
`,O=d.default.canvas.withConfig({displayName:"styled__DrawingCanvas",componentId:"sc-545aabb0-22"})`
  display: block;

  width: 100%;
  height: auto;
  aspect-ratio: 680 / 460;

  cursor: crosshair;
`,M=d.default.canvas.withConfig({displayName:"styled__OutlineOverlayCanvas",componentId:"sc-545aabb0-23"})`
  position: absolute;
  inset: 0;
  z-index: 2;

  width: 100%;
  height: 100%;

  pointer-events: none;
`,N=d.default.div.withConfig({displayName:"styled__ControlsPanel",componentId:"sc-545aabb0-24"})`
  display: flex;
  flex-direction: column;
  gap: 12px;

  box-sizing: border-box;
  width: 100%;
  padding: 12px 14px;

  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
`,R=d.default.div.withConfig({displayName:"styled__ControlBlock",componentId:"sc-545aabb0-25"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,L=d.default.div.withConfig({displayName:"styled__ControlLabelRow",componentId:"sc-545aabb0-26"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 12px;
  font-weight: 700;
  color: #334155;
`,D=d.default.div.withConfig({displayName:"styled__ColorGrid20",componentId:"sc-545aabb0-27"})`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 7px;

  width: 100%;
`,H=d.default.button.withConfig({displayName:"styled__ColorSwatchButton",componentId:"sc-545aabb0-28"})`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 100%;
  aspect-ratio: 1 / 1;
  padding: 0;

  background: ${({$color:e})=>e};
  border: ${({$selected:e})=>e?"3px solid #0f172a":"1.5px solid rgba(15, 23, 42, 0.16)"};
  border-radius: 9px;
  box-shadow: ${({$selected:e})=>e?"0 0 0 2px #ffffff inset, 0 4px 10px rgba(15, 23, 42, 0.2)":"0 1px 3px rgba(15, 23, 42, 0.08)"};
  cursor: pointer;
  transform: ${({$selected:e})=>e?"scale(1.08)":"scale(1)"};
  transition: all 0.14s ease;

  &:hover {
    transform: scale(1.08);
  }
`,z=d.default.div.withConfig({displayName:"styled__ThicknessRow6",componentId:"sc-545aabb0-29"})`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;

  width: 100%;
`,$=d.default.button.withConfig({displayName:"styled__ThicknessButton",componentId:"sc-545aabb0-30"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  height: 52px;
  padding: 4px;

  font-size: 11px;
  font-weight: 700;
  color: ${({$selected:e})=>e?"#0f172a":"#64748b"};
  background: ${({$selected:e})=>e?"#fef9c3":"#ffffff"};
  border: ${({$selected:e})=>e?"2px solid #eab308":"1px solid #cbd5e1"};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    border-color: #eab308;
  }
`,W=d.default.span.withConfig({displayName:"styled__DotPreview",componentId:"sc-545aabb0-31"})`
  display: inline-block;

  width: ${({$diameter:e})=>`${e}px`};
  height: ${({$diameter:e})=>`${e}px`};

  background: ${({$color:e})=>e};
  border-radius: 999px;
`,B=d.default.div.withConfig({displayName:"styled__ApplyRow",componentId:"sc-545aabb0-32"})`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 100%;
`,V=d.default.button.withConfig({displayName:"styled__ApplyButton",componentId:"sc-545aabb0-33"})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 8px;

  height: 48px;
  padding: 0 20px;

  font-size: 16px;
  font-weight: 800;
  color: #ffffff;
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  border: none;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(22, 163, 74, 0.32);
  cursor: pointer;
  transition: all 0.18s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 22px rgba(22, 163, 74, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`,U=(0,o.default)(()=>e.A(79256),{loadableGenerated:{modules:[37191]},ssr:!1});e.s(["default",0,function(){let[e,o]=(0,n.useState)("bear"),d=a.ANIMAL_SPECIES_MAP[e],[G,F]=(0,n.useState)(s.COLOR_PALETTE_20[16].hex),[q,K]=(0,n.useState)(s.BRUSH_SIZES_6[2].size),[X,Y]=(0,n.useState)(!1),J=(0,n.useRef)(null),Z=(0,n.useRef)(null),Q=(0,n.useRef)(!1),ee=(0,n.useRef)(null),et=(0,n.useRef)({}),en=(0,n.useRef)([]),[er,ei]=(0,n.useState)(!1),[eo,el]=(0,n.useState)([]),[ea,es]=(0,n.useState)(null),ed=(0,n.useCallback)(()=>{let e=J.current;if(!e)return;let t=e.getContext("2d");t&&(t.fillStyle="#ffffff",t.fillRect(0,0,s.TEMPLATE_CANVAS_WIDTH,s.TEMPLATE_CANVAS_HEIGHT))},[]);(0,n.useEffect)(()=>{ed()},[ed]),(0,n.useEffect)(()=>{let e=Z.current;if(e){let t=e.getContext("2d");t&&(0,a.renderSpeciesOutlineOverlay)(t,d)}},[d]);let ef=(0,n.useCallback)(t=>{if(t===e)return;let n=J.current,r=n?.getContext("2d");if(n&&r){et.current[e]=r.getImageData(0,0,s.TEMPLATE_CANVAS_WIDTH,s.TEMPLATE_CANVAS_HEIGHT);let n=et.current[t];n?r.putImageData(n,0,0):(r.fillStyle="#ffffff",r.fillRect(0,0,s.TEMPLATE_CANVAS_WIDTH,s.TEMPLATE_CANVAS_HEIGHT))}en.current=[],ei(!1),o(t),F(a.ANIMAL_SPECIES_MAP[t].defaultColor),Y(!1)},[e]),eu=(0,n.useRef)([]);(0,n.useEffect)(()=>{eu.current=eo},[eo]),(0,n.useEffect)(()=>()=>{eu.current.forEach(e=>e.texture.dispose())},[]),(0,n.useEffect)(()=>{let e=window.setInterval(()=>{let e=performance.now();el(t=>{if(0===t.length||!t.some(t=>e-t.spawnTime>=6e4))return t;let n=[];for(let r of t)e-r.spawnTime>=6e4?r.texture.dispose():n.push(r);return n})},500);return()=>window.clearInterval(e)},[]);let ec=(0,n.useCallback)(()=>{let e=J.current;if(!e)return;let t=e.getContext("2d");if(!t)return;let n=t.getImageData(0,0,s.TEMPLATE_CANVAS_WIDTH,s.TEMPLATE_CANVAS_HEIGHT);en.current.push(n),en.current.length>25&&en.current.shift(),ei(en.current.length>0)},[]),ep=(0,n.useCallback)(()=>{let e=J.current;if(!e||0===en.current.length)return;let t=e.getContext("2d");if(!t)return;let n=en.current.pop();n&&t.putImageData(n,0,0),ei(en.current.length>0)},[]),eh=(0,n.useCallback)(()=>{ec(),ed()},[ec,ed]),eb=(0,n.useCallback)(e=>{let t=J.current;if(!t)return{x:0,y:0};let n=t.getBoundingClientRect(),r=s.TEMPLATE_CANVAS_WIDTH/n.width,i=s.TEMPLATE_CANVAS_HEIGHT/n.height;return{x:(e.clientX-n.left)*r,y:(e.clientY-n.top)*i}},[]),ey=(0,n.useCallback)((e,t)=>{let n=J.current;if(!n)return;let r=n.getContext("2d");r&&(r.save(),r.lineCap="round",r.lineJoin="round",r.strokeStyle=X?"#ffffff":G,r.lineWidth=q,r.beginPath(),r.moveTo(e.x,e.y),r.lineTo(t.x,t.y),r.stroke(),r.restore())},[X,G,q]),eg=(0,n.useCallback)(e=>{if(0!==e.button&&"mouse"===e.pointerType)return;e.currentTarget.setPointerCapture(e.pointerId),ec();let t=eb(e);Q.current=!0,ee.current=t,ey(t,t)},[eb,ec,ey]),ex=(0,n.useCallback)(e=>{if(!Q.current||!ee.current)return;let t=eb(e);ey(ee.current,t),ee.current=t},[eb,ey]),em=(0,n.useCallback)(e=>{Q.current&&(Q.current=!1,ee.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId))},[]),e_=(0,n.useCallback)(()=>{let t=J.current;if(!t)return;let n=document.createElement("canvas");n.width=s.TEMPLATE_CANVAS_WIDTH,n.height=s.TEMPLATE_CANVAS_HEIGHT;let r=n.getContext("2d");if(!r)return;r.fillStyle="#ffffff",r.fillRect(0,0,s.TEMPLATE_CANVAS_WIDTH,s.TEMPLATE_CANVAS_HEIGHT),r.drawImage(t,0,0),d.drawDetails(r,"front",1,!0),d.drawDetails(r,"back",1,!0);let i=new l.CanvasTexture(n);i.colorSpace=l.SRGBColorSpace,i.needsUpdate=!0,el(t=>{let n=t.filter(t=>t.speciesId===e).length+1,r=["flower","candy"],o=0===t.length?r[Math.floor(2*Math.random())]:.65>Math.random()?"flower"===t[t.length-1].house?"candy":"flower":r[Math.floor(2*Math.random())],l={id:`villager-${Date.now()}-${t.length+1}`,speciesId:e,house:o,texture:i,spawnTime:performance.now(),name:`${d.icon} ${d.name} #${n}`};return es(l.id),[...t,l]}),ed(),delete et.current[e],en.current=[],ei(!1)},[ed,d,e]),ev=s.COLOR_PALETTE_20.find(e=>e.hex===G)??s.COLOR_PALETTE_20[0];return(0,t.jsxs)(f,{children:[(0,t.jsxs)(r.default,{children:[(0,t.jsx)("title",{children:"나만의 동물 숲 — Everything AI Have"}),(0,t.jsx)("meta",{name:"description",content:"곰돌이, 호랑이, 토끼, 코끼리 도안을 20가지 색상과 6가지 두께의 붓으로 색칠해 동물의 숲 같은 3D 마을에 등장시켜 보세요."})]}),(0,t.jsxs)(u,{children:[(0,t.jsxs)(c,{children:[(0,t.jsx)(i.default,{href:"/",passHref:!0,legacyBehavior:!0,children:(0,t.jsx)(p,{children:"← 홈으로"})}),(0,t.jsx)(h,{children:"🐾 나만의 동물 숲"})]}),(0,t.jsxs)(b,{children:["마을 주민 수: ",eo.length,"마리"]})]}),(0,t.jsxs)(y,{children:[(0,t.jsxs)(g,{children:[(0,t.jsx)(U,{villagers:eo,focusedVillagerId:ea,onSelectVillager:es}),(0,t.jsxs)(x,{children:[(0,t.jsx)(m,{children:"🖱️ 드래그: 시점 회전 · 휠: 확대/축소 · 우클릭 드래그: 이동"}),(0,t.jsx)(m,{children:0===eo.length?"오른쪽에서 동물을 선택·색칠하고 [적용]을 눌러보세요!":"집 안쪽 방에서 문이 열리며 걸어 나온 동물들이 분수 공원을 산책합니다"})]})]}),(0,t.jsxs)(_,{children:[(0,t.jsxs)(v,{children:[(0,t.jsx)(P,{children:"🐾 동물 캐릭터 선택"}),(0,t.jsx)(w,{children:a.ANIMAL_SPECIES_LIST.map(n=>(0,t.jsxs)(C,{type:"button",$active:e===n.id,onClick:()=>ef(n.id),children:[(0,t.jsx)("span",{children:n.icon}),(0,t.jsx)("span",{children:n.name})]},n.id))})]}),(0,t.jsxs)(T,{children:[(0,t.jsxs)(k,{children:[(0,t.jsxs)(S,{children:["🎨 ",d.icon," ",d.name," 앞·뒤 도안 색칠하기"]}),(0,t.jsx)(E,{children:"앞모습과 뒷모습 테두리 위에 자유롭게 색칠한 뒤 ‘적용’을 누르면 집 문이 열리며 등장해요"})]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(A,{type:"button",$active:!X,onClick:()=>Y(!1),children:"🖌️ 붓"}),(0,t.jsx)(A,{type:"button",$active:X,onClick:()=>Y(!0),children:"🧽 지우개"}),(0,t.jsx)(A,{type:"button",disabled:!er,onClick:ep,children:"↩ 실행 취소"}),(0,t.jsx)(A,{type:"button",onClick:eh,children:"🗑️ 초기화"})]})]}),(0,t.jsxs)(j,{children:[(0,t.jsx)(O,{ref:J,width:s.TEMPLATE_CANVAS_WIDTH,height:s.TEMPLATE_CANVAS_HEIGHT,onPointerDown:eg,onPointerMove:ex,onPointerUp:em,onPointerCancel:em}),(0,t.jsx)(M,{ref:Z,width:s.TEMPLATE_CANVAS_WIDTH,height:s.TEMPLATE_CANVAS_HEIGHT})]}),(0,t.jsxs)(N,{children:[(0,t.jsxs)(R,{children:[(0,t.jsxs)(L,{children:[(0,t.jsx)("span",{children:"색상 선택 (20가지)"}),(0,t.jsx)("span",{children:X?"현재: 지우개 모드":`선택됨: ${ev.name} (${ev.hex})`})]}),(0,t.jsx)(D,{children:s.COLOR_PALETTE_20.map(e=>{let n=!X&&G===e.hex;return(0,t.jsx)(H,{type:"button",title:e.name,"aria-label":e.name,$color:e.hex,$selected:n,onClick:()=>{F(e.hex),Y(!1)}},e.hex)})})]}),(0,t.jsxs)(R,{children:[(0,t.jsxs)(L,{children:[(0,t.jsx)("span",{children:"붓 두께 선택 (6단계)"}),(0,t.jsxs)("span",{children:["현재 두께: ",q,"px"]})]}),(0,t.jsx)(z,{children:s.BRUSH_SIZES_6.map(e=>{let n=q===e.size,r=Math.min(24,Math.max(4,.58*e.size));return(0,t.jsxs)($,{type:"button",$selected:n,onClick:()=>K(e.size),children:[(0,t.jsx)(W,{$diameter:r,$color:X?"#64748b":G}),(0,t.jsxs)("span",{children:[e.label," (",e.size,")"]})]},e.size)})})]})]}),(0,t.jsx)(B,{children:(0,t.jsxs)(V,{type:"button",onClick:e_,children:["✨ 적용 (3D 마을에 ",d.name," 등장시키기)"]})})]})]})]})}],24781)},11109,(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/a",()=>e.r(24781)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/a"])})},48761,e=>{e.v(t=>Promise.all(["static/chunks/0ey~yy8oeyp~5.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/0599p99vu8fk5.js"].map(t=>e.l(t))).then(()=>t(79466)))},79256,e=>{e.v(t=>Promise.all(["static/chunks/0hge1.4o436k..js","static/chunks/149ws4me4g6i8.js","static/chunks/0.aal118rf.v8.js"].map(t=>e.l(t))).then(()=>t(37191)))}]);