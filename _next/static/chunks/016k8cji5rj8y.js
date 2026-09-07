(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,89129,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return h},MiddlewareNotFoundError:function(){return _},MissingStaticPage:function(){return w},NormalizeError:function(){return m},PageNotFoundError:function(){return x},SP:function(){return y},ST:function(){return b},WEB_VITALS:function(){return o},execOnce:function(){return a},getDisplayName:function(){return f},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return s},isResSent:function(){return d},loadGetInitialProps:function(){return g},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return v}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>l.test(e);function c(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function g(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await g(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&d(n))return r;if(!r)throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return r}let y="u">typeof performance,b=y&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class m extends Error{}class x extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class _ extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},71914,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useIntersection",{enumerable:!0,get:function(){return s}});let r=e.r(91788),i=e.r(99604),o="function"==typeof IntersectionObserver,a=new Map,l=[];function s({rootRef:e,rootMargin:t,disabled:n}){let c=n||!o,[u,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(o){if(c||u)return;let n=d.current;if(n&&n.tagName)return function(e,t,n){let{id:r,observer:i,elements:o}=function(e){let t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let i=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:i},l.push(n),a.set(n,t),t}(n);return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),a.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(n,e=>e&&f(e),{root:e?.current,rootMargin:t})}else if(!u){let e=(0,i.requestIdleCallback)(()=>f(!0));return()=>(0,i.cancelIdleCallback)(e)}},[c,t,e,u,d.current]),[p,u,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},54471,(e,t,n)=>{"use strict";function r(e,t,n,r){return!1}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getDomainLocale",{enumerable:!0,get:function(){return r}}),e.r(70090),("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},63230,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return i}});let r=e.r(91788);function i(e,t){let n=(0,r.useRef)(null),i=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(n.current=o(e,r)),t&&(i.current=o(t,r))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},48735,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},39149,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return j},useLinkStatus:function(){return k}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=e.r(52456),a=e.r(91398),l=o._(e.r(91788)),s=e.r(60472),c=e.r(71112),u=e.r(28169),f=e.r(89129),d=e.r(14862),p=e.r(25479),g=e.r(71914),y=e.r(54471),b=e.r(44113),h=e.r(63230);e.r(48735);let m=new Set;function x(e,t,n,r){if(!("u"<typeof window)&&(0,c.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let i=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(m.has(i))return;m.add(i)}e.prefetch(t,n,r).catch(e=>{})}}function w(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let _=l.default.forwardRef(function(e,t){let n,r,{href:i,as:o,children:u,prefetch:m=null,passHref:_,replace:v,shallow:k,scroll:j,locale:T,onClick:C,onNavigate:O,onMouseEnter:S,onTouchStart:P,legacyBehavior:I=!1,transitionTypes:E,...N}=e;n=u,I&&("string"==typeof n||"number"==typeof n)&&(n=(0,a.jsx)("a",{children:n}));let M=l.default.useContext(p.RouterContext),A=!1!==m,{href:R,as:$}=l.default.useMemo(()=>{if(!M){let e=w(i);return{href:e,as:o?w(o):e}}let[e,t]=(0,s.resolveHref)(M,i,!0);return{href:e,as:o?(0,s.resolveHref)(M,o):t||e}},[M,i,o]),L=l.default.useRef(R),B=l.default.useRef($);I&&(r=l.default.Children.only(n));let D=I?r&&"object"==typeof r&&r.ref:t,[U,z,V]=(0,g.useIntersection)({rootMargin:"200px"}),G=l.default.useCallback(e=>{(B.current!==$||L.current!==R)&&(V(),B.current=$,L.current=R),U(e)},[$,R,V,U]),F=(0,h.useMergedRef)(G,D);l.default.useEffect(()=>{!M||z&&A&&x(M,R,$,{locale:T})},[$,R,z,T,A,M?.locale,M]);let H={ref:F,onClick(e){I||"function"!=typeof C||C(e),I&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),!M||e.defaultPrevented||function(e,t,n,r,i,o,a,l,s){let u,{nodeName:f}=e.currentTarget;if(!("A"===f.toUpperCase()&&((u=e.currentTarget.getAttribute("target"))&&"_self"!==u||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which)||e.currentTarget.hasAttribute("download"))){if(!(0,c.isLocalURL)(n)){i&&(e.preventDefault(),location.replace(n));return}e.preventDefault(),(()=>{if(s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let e=a??!0;"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:o,locale:l,scroll:e}):t[i?"replace":"push"](r||n,{scroll:e})})()}}(e,M,R,$,v,k,j,T,O)},onMouseEnter(e){I||"function"!=typeof S||S(e),I&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),M&&x(M,R,$,{locale:T,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){I||"function"!=typeof P||P(e),I&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),M&&x(M,R,$,{locale:T,priority:!0,bypassPrefetchedCheck:!0})}};if((0,f.isAbsoluteUrl)($))H.href=$;else if(!I||_||"a"===r.type&&!("href"in r.props)){let e=void 0!==T?T:M?.locale;H.href=M?.isLocaleDomain&&(0,y.getDomainLocale)($,e,M?.locales,M?.domainLocales)||(0,b.addBasePath)((0,d.addLocale)($,e,M?.defaultLocale))}return I?l.default.cloneElement(r,H):(0,a.jsx)("a",{...N,...H,children:n})}),v=(0,l.createContext)({pending:!1}),k=()=>(0,l.useContext)(v),j=_;("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},41158,(e,t,n)=>{t.exports=e.r(39149)},17431,(e,t,n)=>{"use strict";var r=e.r(91788);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var a={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},l=Symbol.for("react.portal"),s=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,n.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(i(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},n.flushSync=function(e){var t=s.T,n=a.p;try{if(s.T=null,a.p=2,e)return e()}finally{s.T=t,a.p=n,a.d.f()}},n.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,a.d.C(e,t))},n.prefetchDNS=function(e){"string"==typeof e&&a.d.D(e)},n.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var n=t.as,r=c(n,t.crossOrigin),i="string"==typeof t.integrity?t.integrity:void 0,o="string"==typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?a.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):"script"===n&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},n.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},n.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var n=t.as,r=c(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},n.preloadModule=function(e,t){if("string"==typeof e)if(t){var n=c(t.as,t.crossOrigin);a.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},n.requestFormReset=function(e){a.d.r(e)},n.unstable_batchedUpdates=function(e,t){return e(t)},n.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},n.useFormStatus=function(){return s.H.useHostTransitionStatus()},n.version="19.2.4"},30943,(e,t,n)=>{"use strict";!function e(){if("u">typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),t.exports=e.r(17431)},11829,(e,t,n)=>{"use strict";function r(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,i=e[r];if(0<a(i,t))e[r]=t,e[n]=i,n=r;else break}}function i(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,i=e.length,o=i>>>1;r<o;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>a(s,n))c<i&&0>a(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else if(c<i&&0>a(u,n))e[r]=u,e[c]=n,r=c;else break}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(n.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var l,s=performance;n.unstable_now=function(){return s.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var f=[],d=[],p=1,g=null,y=3,b=!1,h=!1,m=!1,x=!1,w="function"==typeof setTimeout?setTimeout:null,_="function"==typeof clearTimeout?clearTimeout:null,v="u">typeof setImmediate?setImmediate:null;function k(e){for(var t=i(d);null!==t;){if(null===t.callback)o(d);else if(t.startTime<=e)o(d),t.sortIndex=t.expirationTime,r(f,t);else break;t=i(d)}}function j(e){if(m=!1,k(e),!h)if(null!==i(f))h=!0,T||(T=!0,l());else{var t=i(d);null!==t&&M(j,t.startTime-e)}}var T=!1,C=-1,O=5,S=-1;function P(){return!!x||!(n.unstable_now()-S<O)}function I(){if(x=!1,T){var e=n.unstable_now();S=e;var t=!0;try{e:{h=!1,m&&(m=!1,_(C),C=-1),b=!0;var r=y;try{t:{for(k(e),g=i(f);null!==g&&!(g.expirationTime>e&&P());){var a=g.callback;if("function"==typeof a){g.callback=null,y=g.priorityLevel;var s=a(g.expirationTime<=e);if(e=n.unstable_now(),"function"==typeof s){g.callback=s,k(e),t=!0;break t}g===i(f)&&o(f),k(e)}else o(f);g=i(f)}if(null!==g)t=!0;else{var c=i(d);null!==c&&M(j,c.startTime-e),t=!1}}break e}finally{g=null,y=r,b=!1}}}finally{t?l():T=!1}}}if("function"==typeof v)l=function(){v(I)};else if("u">typeof MessageChannel){var E=new MessageChannel,N=E.port2;E.port1.onmessage=I,l=function(){N.postMessage(null)}}else l=function(){w(I,0)};function M(e,t){C=w(function(){e(n.unstable_now())},t)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<e?Math.floor(1e3/e):5},n.unstable_getCurrentPriorityLevel=function(){return y},n.unstable_next=function(e){switch(y){case 1:case 2:case 3:var t=3;break;default:t=y}var n=y;y=t;try{return e()}finally{y=n}},n.unstable_requestPaint=function(){x=!0},n.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=y;y=e;try{return t()}finally{y=n}},n.unstable_scheduleCallback=function(e,t,o){var a=n.unstable_now();switch(o="object"==typeof o&&null!==o&&"number"==typeof(o=o.delay)&&0<o?a+o:a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=0x3fffffff;break;case 4:s=1e4;break;default:s=5e3}return s=o+s,e={id:p++,callback:t,priorityLevel:e,startTime:o,expirationTime:s,sortIndex:-1},o>a?(e.sortIndex=o,r(d,e),null===i(f)&&e===i(d)&&(m?(_(C),C=-1):m=!0,M(j,o-a))):(e.sortIndex=s,r(f,e),h||b||(h=!0,T||(T=!0,l()))),e},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(e){var t=y;return function(){var n=y;y=t;try{return e.apply(this,arguments)}finally{y=n}}}},52659,(e,t,n)=>{"use strict";t.exports=e.r(11829)},40941,e=>{"use strict";var t=e.i(91398),n=e.i(91788),r=e.i(58678),i=e.i(41158);let o=[{row:3,col:3},{row:3,col:11},{row:7,col:7},{row:11,col:3},{row:11,col:11}];function a(){return Array.from({length:15},()=>Array.from({length:15},()=>null))}function l(e,t){return e>=0&&e<15&&t>=0&&t<15}let s=[[0,1],[1,0],[1,1],[-1,1]];function c(e,t,n){let r=e[t][n];if(!r)return null;for(let[i,o]of s){let a=[{row:t,col:n}],s=t+i,c=n+o;for(;l(s,c)&&e[s][c]===r;)a.push({row:s,col:c}),s+=i,c+=o;for(s=t-i,c=n-o;l(s,c)&&e[s][c]===r;)a.push({row:s,col:c}),s-=i,c-=o;if(a.length>=5)return{winner:r,line:a}}return null}function u(e){for(let t=0;t<15;t++)for(let n=0;n<15;n++)if(null===e[t][n])return!1;return!0}let f=[[0,1],[1,0],[1,1],[-1,1]];function d(e,t,n,r,i,o){let a=1,s=0,c=t+r,u=n+i;for(;l(c,u)&&e[c][u]===o;)a++,c+=r,u+=i;for(l(c,u)&&null===e[c][u]&&s++,c=t-r,u=n-i;l(c,u)&&e[c][u]===o;)a++,c+=r,u+=i;if(l(c,u)&&null===e[c][u]&&s++,a>=5)return 1e7;if(4===a){if(2===s)return 1e6;if(1===s)return 1e5}if(3===a){if(2===s)return 5e4;if(1===s)return 5e3}if(2===a){if(2===s)return 1e3;if(1===s)return 100}return 0}function p(e,t,n,r){let i="black"===r?"white":"black",o=0,a=0;for(let[l,s]of f)o+=d(e,t,n,l,s,r),a+=d(e,t,n,l,s,i);let l=5*Math.max(0,14-(Math.abs(t-Math.floor(7.5))+Math.abs(n-Math.floor(7.5))));return o>=1e7?2e7:a>=1e7?1e7:1.1*o+a+l}function g(e){let t=[],n=Array.from({length:15},()=>Array(15).fill(!1)),r=!1;for(let i=0;i<15;i++)for(let o=0;o<15;o++)if(null!==e[i][o]){r=!0;for(let r=-2;r<=2;r++)for(let a=-2;a<=2;a++){let s=i+r,c=o+a;l(s,c)&&null===e[s][c]&&!n[s][c]&&(n[s][c]=!0,t.push({row:s,col:c}))}}if(!r){let e=Math.floor(7.5);return[{row:e,col:e}]}return t}let y=null;function b(){if(!y){let e=window.AudioContext||window.webkitAudioContext;e&&(y=new e)}return y&&"suspended"===y.state&&y.resume(),y}function h(e=!1){if(e)return;let t=b();if(t)try{let e=t.currentTime,n=.015*t.sampleRate,r=t.createBuffer(1,n,t.sampleRate),i=r.getChannelData(0);for(let e=0;e<n;e++)i[e]=2*Math.random()-1;let o=t.createBufferSource();o.buffer=r;let a=t.createBiquadFilter();a.type="highpass",a.frequency.setValueAtTime(1e3,e);let l=t.createGain();l.gain.setValueAtTime(.3,e),l.gain.exponentialRampToValueAtTime(.01,e+.015),o.connect(a),a.connect(l),l.connect(t.destination),o.start(e);let s=t.createOscillator(),c=t.createGain();s.type="sine",s.frequency.setValueAtTime(620,e),s.frequency.exponentialRampToValueAtTime(120,e+.08),c.gain.setValueAtTime(.4,e),c.gain.exponentialRampToValueAtTime(.001,e+.08),s.connect(c),c.connect(t.destination),s.start(e),s.stop(e+.09)}catch{}}function m(e=!1){if(e)return;let t=b();if(t)try{[523.25,659.25,783.99,1046.5].forEach((e,n)=>{let r=t.currentTime+.1*n,i=t.createOscillator(),o=t.createGain();i.type="triangle",i.frequency.setValueAtTime(e,r),o.gain.setValueAtTime(.2,r),o.gain.exponentialRampToValueAtTime(.001,r+.28),i.connect(o),o.connect(t.destination),i.start(r),i.stop(r+.3)})}catch{}}var x=e.i(60814);let w=x.keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 60, 60, 0.7);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(255, 60, 60, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 60, 60, 0);
  }
`,_=x.keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 6px #ffeb3b);
  }
  50% {
    filter: drop-shadow(0 0 14px #ff9800);
  }
`,v=x.default.div.withConfig({displayName:"styled__Container",componentId:"sc-f1e0290a-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;

  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  padding: 20px 12px 40px;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #ffffff;
  background: #1e1b18;
  background-image: radial-gradient(circle at 50% 0%, #2e261f 0%, #151311 100%);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`,k=x.default.header.withConfig({displayName:"styled__Header",componentId:"sc-f1e0290a-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 580px;
  padding: 0 4px;
`,j=x.default.div.withConfig({displayName:"styled__TitleRow",componentId:"sc-f1e0290a-2"})`
  display: flex;
  align-items: center;
  gap: 8px;
`,T=x.default.h1.withConfig({displayName:"styled__Title",componentId:"sc-f1e0290a-3"})`
  margin: 0;

  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #f7ede2;
`,C=x.default.button.withConfig({displayName:"styled__BackButton",componentId:"sc-f1e0290a-4"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  padding: 6px 12px;

  font-size: 13px;
  font-weight: 600;
  color: #c9b097;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.12);
  }
`,O=x.default.div.withConfig({displayName:"styled__ControlCard",componentId:"sc-f1e0290a-5"})`
  display: flex;
  flex-direction: column;
  gap: 12px;

  box-sizing: border-box;
  width: 100%;
  max-width: 580px;
  padding: 12px 14px;

  background: rgba(36, 30, 26, 0.85);
  border: 1px solid rgba(214, 169, 107, 0.18);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(8px);
`,S=x.default.div.withConfig({displayName:"styled__OptionsRow",componentId:"sc-f1e0290a-6"})`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`,P=x.default.div.withConfig({displayName:"styled__ButtonGroup",componentId:"sc-f1e0290a-7"})`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  padding: 3px;

  background: rgba(0, 0, 0, 0.35);
  border-radius: 8px;
`,I=x.default.button.withConfig({displayName:"styled__OptionButton",componentId:"sc-f1e0290a-8"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 5px 10px;

  font-size: 12px;
  font-weight: 600;
  color: ${({$active:e})=>e?"#1f1812":"#b09e8f"};
  background: ${({$active:e})=>e?"linear-gradient(135deg, #f5d79e 0%, #dfb56c 100%)":"transparent"};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    color: ${({$active:e})=>e?"#1f1812":"#ffffff"};
  }
`,E=x.default.button.withConfig({displayName:"styled__IconToggleButton",componentId:"sc-f1e0290a-9"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  padding: 6px 10px;

  font-size: 12px;
  font-weight: 600;
  color: ${({$active:e})=>e?"#dfb56c":"#7d6e61"};
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid
    ${({$active:e})=>e?"rgba(223, 181, 108, 0.4)":"rgba(255, 255, 255, 0.06)"};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #dfb56c;
  }
`,N=x.default.div.withConfig({displayName:"styled__StatusBanner",componentId:"sc-f1e0290a-10"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  padding: 8px 12px;

  font-size: 14px;
  font-weight: 700;
  color: ${({$winner:e})=>e?"#ffeb3b":"#f7ede2"};
  background: ${({$winner:e})=>e?"rgba(255, 193, 7, 0.15)":"rgba(0, 0, 0, 0.25)"};
  border: 1px solid
    ${({$winner:e})=>e?"rgba(255, 193, 7, 0.4)":"rgba(255, 255, 255, 0.05)"};
  border-radius: 8px;
`,M=x.default.div.withConfig({displayName:"styled__TurnBadge",componentId:"sc-f1e0290a-11"})`
  display: flex;
  align-items: center;
  gap: 8px;
`,A=x.default.span.withConfig({displayName:"styled__TurnDot",componentId:"sc-f1e0290a-12"})`
  display: inline-block;

  width: 14px;
  height: 14px;

  background: ${({$player:e})=>"black"===e?"radial-gradient(circle at 35% 35%, #555 0%, #1a1a1a 70%, #000 100%)":"radial-gradient(circle at 35% 35%, #fff 0%, #e0e0e0 70%, #b8b8b8 100%)"};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`,R=x.default.div.withConfig({displayName:"styled__BoardWrapper",componentId:"sc-f1e0290a-13"})`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  box-sizing: border-box;
  width: 100%;
  max-width: 580px;
  aspect-ratio: 1 / 1;
  padding: 10px;

  background: linear-gradient(135deg, #e5be75 0%, #d4a755 50%, #bd8f3e 100%);
  border: 3px solid #6b471f;
  border-radius: 12px;
  box-shadow:
    inset 0 0 10px rgba(71, 46, 17, 0.45),
    0 16px 36px rgba(0, 0, 0, 0.5),
    0 4px 10px rgba(0, 0, 0, 0.3);
`,$=x.default.div.withConfig({displayName:"styled__BoardGrid",componentId:"sc-f1e0290a-14"})`
  display: grid;
  grid-template-columns: repeat(${({$size:e})=>e}, 1fr);
  grid-template-rows: repeat(${({$size:e})=>e}, 1fr);

  position: relative;

  width: 100%;
  height: 100%;
`,L=x.default.svg.withConfig({displayName:"styled__GridLineOverlay",componentId:"sc-f1e0290a-15"})`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  pointer-events: none;
`,B=x.default.div.withConfig({displayName:"styled__IntersectionCell",componentId:"sc-f1e0290a-16"})`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 100%;
  height: 100%;

  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`,D=x.default.div.withConfig({displayName:"styled__Stone",componentId:"sc-f1e0290a-17"})`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 86%;
  height: 86%;

  font-size: clamp(9px, 2.2vw, 13px);
  font-weight: 800;
  color: ${({$player:e})=>"black"===e?"#ffffff":"#1a1a1a"};
  background: ${({$player:e})=>"black"===e?"radial-gradient(circle at 35% 35%, #555 0%, #1c1c1c 65%, #050505 100%)":"radial-gradient(circle at 35% 35%, #ffffff 0%, #ebebeb 55%, #b5b5b5 100%)"};
  border-radius: 50%;
  box-shadow:
    0 2px 5px rgba(0, 0, 0, 0.6),
    inset 0 1px 2px rgba(255, 255, 255, 0.4);
  transition: transform 0.12s ease-out;

  ${({$isWinLine:e})=>e&&x.css`
      animation: ${_} 1.5s infinite ease-in-out;
      border: 2px solid #ffd700;
    `}

  ${({$isLast:e})=>e&&x.css`
      &::after {
        position: absolute;
        top: 50%;
        left: 50%;

        width: 7px;
        height: 7px;

        background: #ff3b30;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: ${w} 1.6s infinite;
        content: "";
      }
    `}
`,U=x.default.div.withConfig({displayName:"styled__HoverGuide",componentId:"sc-f1e0290a-18"})`
  position: absolute;

  width: 80%;
  height: 80%;

  background: ${({$player:e})=>"black"===e?"radial-gradient(circle at 35% 35%, rgba(0,0,0,0.5), rgba(0,0,0,0.3))":"radial-gradient(circle at 35% 35%, rgba(255,255,255,0.7), rgba(255,255,255,0.4))"};
  border-radius: 50%;
  pointer-events: none;
  opacity: 0.75;
`,z=x.default.div.withConfig({displayName:"styled__BottomBar",componentId:"sc-f1e0290a-19"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  width: 100%;
  max-width: 580px;
`,V=x.default.button.withConfig({displayName:"styled__ActionButton",componentId:"sc-f1e0290a-20"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  padding: 9px 18px;

  font-size: 14px;
  font-weight: 700;
  color: ${({$variant:e})=>"primary"===e?"#1f1812":"#f7ede2"};
  background: ${({$variant:e})=>"primary"===e?"linear-gradient(135deg, #f5d79e 0%, #dfb56c 100%)":"rgba(255, 255, 255, 0.08)"};
  border: 1px solid
    ${({$variant:e})=>"primary"===e?"rgba(223, 181, 108, 0.8)":"rgba(255, 255, 255, 0.12)"};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;e.s(["default",0,function(){let[e,l]=(0,n.useState)(a),[s,f]=(0,n.useState)("black"),[d,y]=(0,n.useState)("ai"),[x,w]=(0,n.useState)("normal"),[_,G]=(0,n.useState)("black"),[F,H]=(0,n.useState)([]),[q,K]=(0,n.useState)("ready"),[W,X]=(0,n.useState)(null),[Y,Z]=(0,n.useState)(!1),[J,Q]=(0,n.useState)(!1),[ee,et]=(0,n.useState)(null),[en,er]=(0,n.useState)(!1),ei=(0,n.useRef)(null),eo=(0,n.useCallback)((e=d,t=_)=>{ei.current&&clearTimeout(ei.current);let n=a();if(l(n),H([]),X(null),er(!1),et(null),"ai"===e&&"white"===t){let e=Math.floor(7.5);n[e][e]="black",l([...n.map(e=>[...e])]),H([{row:e,col:e,player:"black",turnNumber:1}]),f("white"),K("playing")}else f("black"),K("ready")},[d,_]);(0,n.useEffect)(()=>{if("ai"!==d||"black_win"===q||"white_win"===q||"draw"===q)return;let t="black"===_?"white":"black";return s===t&&(er(!0),ei.current=setTimeout(()=>{let n=function(e,t,n){let r=g(e);if(0===r.length)return{row:7,col:7};let i=r.map(n=>({...n,score:p(e,n.row,n.col,t)}));if(i.sort((e,t)=>t.score-e.score),"easy"===n){if(i[0].score>=1e7)return i[0];let e=Math.floor(Math.random()*Math.min(i.length,4));return i[e]}if("normal"===n){let e=i[0].score,t=i.filter(t=>t.score>=.95*e);return t[Math.floor(Math.random()*t.length)]}let o=i.slice(0,6),a="black"===t?"white":"black",l=o[0],s=-1/0;for(let n of o){if(n.score>=1e7)return n;e[n.row][n.col]=t;let r=g(e).slice(0,5),i=0;for(let t of r){let n=p(e,t.row,t.col,a);n>i&&(i=n)}e[n.row][n.col]=null;let o=n.score-.8*i;o>s&&(s=o,l=n)}return l}(e,t,x);l(e=>{let r=e.map(e=>[...e]);return r[n.row][n.col]=t,r}),h(J);let r=F.length+1;H(e=>[...e,{row:n.row,col:n.col,player:t,turnNumber:r}]);let i=c(e,n.row,n.col);i?(X(i),K("black"===t?"black_win":"white_win"),m(J)):u(e)?K("draw"):(f(_),K("playing")),er(!1)},350)),()=>{ei.current&&clearTimeout(ei.current)}},[e,x,d,q,F.length,J,s,_]);let ea=F.length>0?F[F.length-1]:null;return(0,t.jsxs)(v,{children:[(0,t.jsxs)(r.default,{children:[(0,t.jsx)("title",{children:"오목 (Gomoku) — Everything AI Have"}),(0,t.jsx)("meta",{name:"description",content:"AI와 실력을 겨루는 스마트 오목 게임. 초급·중급·고급 난이도 지원 및 2인 대전 모드를 제공합니다."}),(0,t.jsx)("meta",{property:"og:type",content:"website"}),(0,t.jsx)("meta",{property:"og:title",content:"오목 (Gomoku) — Everything AI Have"}),(0,t.jsx)("meta",{property:"og:description",content:"AI와 실력을 겨루는 스마트 오목 게임. 초급·중급·고급 난이도 지원."})]}),(0,t.jsxs)(k,{children:[(0,t.jsx)(j,{children:(0,t.jsx)(T,{children:"오목 — GOMOKU"})}),(0,t.jsx)(i.default,{href:"/",passHref:!0,legacyBehavior:!0,children:(0,t.jsx)(C,{as:"a",children:"← 홈으로"})})]}),(0,t.jsxs)(O,{children:[(0,t.jsxs)(S,{children:[(0,t.jsxs)(P,{children:[(0,t.jsx)(I,{$active:"ai"===d,onClick:()=>{y("ai"),eo("ai",_)},children:"🤖 AI 대전"}),(0,t.jsx)(I,{$active:"pvp"===d,onClick:()=>{y("pvp"),eo("pvp",_)},children:"👥 2인 대전"})]}),"ai"===d&&(0,t.jsx)(P,{children:["easy","normal","hard"].map(e=>(0,t.jsxs)(I,{$active:x===e,onClick:()=>w(e),children:["easy"===e&&"초급","normal"===e&&"중급","hard"===e&&"고급"]},e))}),"ai"===d&&(0,t.jsxs)(P,{children:[(0,t.jsx)(I,{$active:"black"===_,onClick:()=>{G("black"),eo("ai","black")},title:"흑(선공)",children:"⚫ 선공"}),(0,t.jsx)(I,{$active:"white"===_,onClick:()=>{G("white"),eo("ai","white")},title:"백(후공)",children:"⚪ 후공"})]}),(0,t.jsxs)("div",{style:{display:"inline-flex",gap:"6px"},children:[(0,t.jsx)(E,{$active:Y,onClick:()=>Z(!Y),title:"수순 번호 표시",children:"🔢 번호"}),(0,t.jsx)(E,{$active:!J,onClick:()=>Q(!J),title:"사운드 온/오프",children:J?"🔇":"🔊"})]})]}),(0,t.jsxs)(N,{$winner:q.includes("win"),children:[(0,t.jsxs)(M,{children:[(0,t.jsx)(A,{$player:s}),(0,t.jsx)("span",{children:"black_win"===q?"ai"===d?"black"===_?"🎉 승리하셨습니다! (흑 승)":"💥 AI가 승리했습니다! (흑 승)":"🎉 흑돌(Black) 승리!":"white_win"===q?"ai"===d?"white"===_?"🎉 승리하셨습니다! (백 승)":"💥 AI가 승리했습니다! (백 승)":"🎉 백돌(White) 승리!":"draw"===q?"🤝 무승부입니다!":en?"🤖 AI가 수를 생각하는 중…":"ai"===d?s===_?"당신의 차례입니다":"상대방 차례입니다":"black"===s?"흑돌 차례입니다":"백돌 차례입니다"})]}),(0,t.jsxs)("span",{style:{fontSize:"12px",color:"#b09e8f"},children:[F.length,"수 진행 중"]})]})]}),(0,t.jsxs)(R,{children:[(0,t.jsxs)(L,{viewBox:"0 0 1500 1500",children:[Array.from({length:15}).map((e,n)=>{let r=50+100*n;return(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:50,y1:r,x2:1450,y2:r,stroke:"#5c3c15",strokeWidth:"3.2"}),(0,t.jsx)("line",{x1:r,y1:50,x2:r,y2:1450,stroke:"#5c3c15",strokeWidth:"3.2"})]},n)}),o.map((e,n)=>(0,t.jsx)("circle",{cx:50+100*e.col,cy:50+100*e.row,r:"8",fill:"#5c3c15"},n))]}),(0,t.jsx)($,{$size:15,children:e.map((n,r)=>n.map((n,i)=>{let o,a=ea?.row===r&&ea?.col===i,p=!!W&&W.line.some(e=>e.row===r&&e.col===i),g=(o=F.find(e=>e.row===r&&e.col===i))?o.turnNumber:null,y=ee?.row===r&&ee?.col===i&&null===n&&!en&&!q.includes("win");return(0,t.jsxs)(B,{onClick:()=>((t,n)=>{if(null!==e[t][n]||"black_win"===q||"white_win"===q||"draw"===q||"ai"===d&&(s!==_||en))return;let r=e.map(e=>[...e]);r[t][n]=s,l(r),h(J);let i=F.length+1;H([...F,{row:t,col:n,player:s,turnNumber:i}]);let o=c(r,t,n);if(o){X(o),K("black"===s?"black_win":"white_win"),m(J);return}u(r)?K("draw"):(f("black"===s?"white":"black"),K("playing"))})(r,i),onMouseEnter:()=>et({row:r,col:i}),onMouseLeave:()=>et(null),children:[n&&(0,t.jsx)(D,{$player:n,$isLast:a,$isWinLine:p,children:Y&&g}),y&&(0,t.jsx)(U,{$player:s})]},`${r}-${i}`)}))})]}),(0,t.jsxs)(z,{children:[(0,t.jsx)(V,{$variant:"secondary",onClick:()=>{if(0===F.length||en)return;let e=1;"ai"===d&&(e=F.length>=2?2:1);let t=F.slice(0,F.length-e),n=a();for(let e of t)n[e.row][e.col]=e.player;l(n),H(t),X(null),0===t.length?(f("black"),K("ready")):(f("black"===t[t.length-1].player?"white":"black"),K("playing")),function(e=!1){if(e)return;let t=b();if(t)try{let e=t.currentTime,n=t.createOscillator(),r=t.createGain();n.type="sine",n.frequency.setValueAtTime(350,e),n.frequency.exponentialRampToValueAtTime(220,e+.08),r.gain.setValueAtTime(.2,e),r.gain.exponentialRampToValueAtTime(.001,e+.08),n.connect(r),r.connect(t.destination),n.start(e),n.stop(e+.09)}catch{}}(J)},disabled:0===F.length||en,children:"↩️ 무르기"}),(0,t.jsx)(V,{$variant:"primary",onClick:()=>eo(),children:"🔄 다시 시작"})]})]})}],40941)},97151,(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/o",()=>e.r(40941)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/o"])})},48761,e=>{e.v(t=>Promise.all(["static/chunks/0ey~yy8oeyp~5.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/0599p99vu8fk5.js"].map(t=>e.l(t))).then(()=>t(79466)))}]);