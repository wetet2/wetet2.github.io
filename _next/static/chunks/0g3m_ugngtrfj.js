(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,89129,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return h},MiddlewareNotFoundError:function(){return _},MissingStaticPage:function(){return v},NormalizeError:function(){return b},PageNotFoundError:function(){return x},SP:function(){return g},ST:function(){return m},WEB_VITALS:function(){return o},execOnce:function(){return a},getDisplayName:function(){return u},getLocationOrigin:function(){return f},getURL:function(){return c},isAbsoluteUrl:function(){return s},isResSent:function(){return d},loadGetInitialProps:function(){return y},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return w}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>l.test(e);function f(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function c(){let{href:e}=window.location,t=f();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function y(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await y(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&d(n))return r;if(!r)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return r}let g="u">typeof performance,m=g&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class b extends Error{}class x extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class _ extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function w(e){return JSON.stringify({message:e.message,stack:e.stack})}},71914,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useIntersection",{enumerable:!0,get:function(){return s}});let r=e.r(91788),i=e.r(99604),o="function"==typeof IntersectionObserver,a=new Map,l=[];function s({rootRef:e,rootMargin:t,disabled:n}){let f=n||!o,[c,u]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(o){if(f||c)return;let n=d.current;if(n&&n.tagName)return function(e,t,n){let{id:r,observer:i,elements:o}=function(e){let t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let i=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:i},l.push(n),a.set(n,t),t}(n);return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),a.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(n,e=>e&&u(e),{root:e?.current,rootMargin:t})}else if(!c){let e=(0,i.requestIdleCallback)(()=>u(!0));return()=>(0,i.cancelIdleCallback)(e)}},[f,t,e,c,d.current]),[p,c,(0,r.useCallback)(()=>{u(!1)},[])]}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},54471,(e,t,n)=>{"use strict";function r(e,t,n,r){return!1}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getDomainLocale",{enumerable:!0,get:function(){return r}}),e.r(70090),("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},63230,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return i}});let r=e.r(91788);function i(e,t){let n=(0,r.useRef)(null),i=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(n.current=o(e,r)),t&&(i.current=o(t,r))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},48735,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},39149,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return I},useLinkStatus:function(){return j}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=e.r(52456),a=e.r(91398),l=o._(e.r(91788)),s=e.r(60472),f=e.r(71112),c=e.r(28169),u=e.r(89129),d=e.r(14862),p=e.r(25479),y=e.r(71914),g=e.r(54471),m=e.r(44113),h=e.r(63230);e.r(48735);let b=new Set;function x(e,t,n,r){if(!("u"<typeof window)&&(0,f.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let i=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(b.has(i))return;b.add(i)}e.prefetch(t,n,r).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let _=l.default.forwardRef(function(e,t){let n,r,{href:i,as:o,children:c,prefetch:b=null,passHref:_,replace:w,shallow:j,scroll:I,locale:C,onClick:O,onNavigate:k,onMouseEnter:P,onTouchStart:E,legacyBehavior:T=!1,transitionTypes:N,...S}=e;n=c,T&&("string"==typeof n||"number"==typeof n)&&(n=(0,a.jsx)("a",{children:n}));let A=l.default.useContext(p.RouterContext),M=!1!==b,{href:R,as:L}=l.default.useMemo(()=>{if(!A){let e=v(i);return{href:e,as:o?v(o):e}}let[e,t]=(0,s.resolveHref)(A,i,!0);return{href:e,as:o?(0,s.resolveHref)(A,o):t||e}},[A,i,o]),D=l.default.useRef(R),$=l.default.useRef(L);T&&(r=l.default.Children.only(n));let U=T?r&&"object"==typeof r&&r.ref:t,[z,H,F]=(0,y.useIntersection)({rootMargin:"200px"}),B=l.default.useCallback(e=>{($.current!==L||D.current!==R)&&(F(),$.current=L,D.current=R),z(e)},[L,R,F,z]),G=(0,h.useMergedRef)(B,U);l.default.useEffect(()=>{!A||H&&M&&x(A,R,L,{locale:C})},[L,R,H,C,M,A?.locale,A]);let K={ref:G,onClick(e){T||"function"!=typeof O||O(e),T&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),!A||e.defaultPrevented||function(e,t,n,r,i,o,a,l,s){let c,{nodeName:u}=e.currentTarget;if(!("A"===u.toUpperCase()&&((c=e.currentTarget.getAttribute("target"))&&"_self"!==c||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which)||e.currentTarget.hasAttribute("download"))){if(!(0,f.isLocalURL)(n)){i&&(e.preventDefault(),location.replace(n));return}e.preventDefault(),(()=>{if(s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let e=a??!0;"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:o,locale:l,scroll:e}):t[i?"replace":"push"](r||n,{scroll:e})})()}}(e,A,R,L,w,j,I,C,k)},onMouseEnter(e){T||"function"!=typeof P||P(e),T&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),A&&x(A,R,L,{locale:C,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){T||"function"!=typeof E||E(e),T&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),A&&x(A,R,L,{locale:C,priority:!0,bypassPrefetchedCheck:!0})}};if((0,u.isAbsoluteUrl)(L))K.href=L;else if(!T||_||"a"===r.type&&!("href"in r.props)){let e=void 0!==C?C:A?.locale;K.href=A?.isLocaleDomain&&(0,g.getDomainLocale)(L,e,A?.locales,A?.domainLocales)||(0,m.addBasePath)((0,d.addLocale)(L,e,A?.defaultLocale))}return T?l.default.cloneElement(r,K):(0,a.jsx)("a",{...S,...K,children:n})}),w=(0,l.createContext)({pending:!1}),j=()=>(0,l.useContext)(w),I=_;("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},41158,(e,t,n)=>{t.exports=e.r(39149)},17431,(e,t,n)=>{"use strict";var r=e.r(91788);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var a={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},l=Symbol.for("react.portal"),s=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,n.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(i(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},n.flushSync=function(e){var t=s.T,n=a.p;try{if(s.T=null,a.p=2,e)return e()}finally{s.T=t,a.p=n,a.d.f()}},n.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,a.d.C(e,t))},n.prefetchDNS=function(e){"string"==typeof e&&a.d.D(e)},n.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var n=t.as,r=f(n,t.crossOrigin),i="string"==typeof t.integrity?t.integrity:void 0,o="string"==typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?a.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):"script"===n&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},n.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=f(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},n.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var n=t.as,r=f(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},n.preloadModule=function(e,t){if("string"==typeof e)if(t){var n=f(t.as,t.crossOrigin);a.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},n.requestFormReset=function(e){a.d.r(e)},n.unstable_batchedUpdates=function(e,t){return e(t)},n.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},n.useFormStatus=function(){return s.H.useHostTransitionStatus()},n.version="19.2.4"},30943,(e,t,n)=>{"use strict";!function e(){if("u">typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),t.exports=e.r(17431)},11829,(e,t,n)=>{"use strict";function r(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,i=e[r];if(0<a(i,t))e[r]=t,e[n]=i,n=r;else break}}function i(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,i=e.length,o=i>>>1;r<o;){var l=2*(r+1)-1,s=e[l],f=l+1,c=e[f];if(0>a(s,n))f<i&&0>a(c,s)?(e[r]=c,e[f]=n,r=f):(e[r]=s,e[l]=n,r=l);else if(f<i&&0>a(c,n))e[r]=c,e[f]=n,r=f;else break}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(n.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var l,s=performance;n.unstable_now=function(){return s.now()}}else{var f=Date,c=f.now();n.unstable_now=function(){return f.now()-c}}var u=[],d=[],p=1,y=null,g=3,m=!1,h=!1,b=!1,x=!1,v="function"==typeof setTimeout?setTimeout:null,_="function"==typeof clearTimeout?clearTimeout:null,w="u">typeof setImmediate?setImmediate:null;function j(e){for(var t=i(d);null!==t;){if(null===t.callback)o(d);else if(t.startTime<=e)o(d),t.sortIndex=t.expirationTime,r(u,t);else break;t=i(d)}}function I(e){if(b=!1,j(e),!h)if(null!==i(u))h=!0,C||(C=!0,l());else{var t=i(d);null!==t&&A(I,t.startTime-e)}}var C=!1,O=-1,k=5,P=-1;function E(){return!!x||!(n.unstable_now()-P<k)}function T(){if(x=!1,C){var e=n.unstable_now();P=e;var t=!0;try{e:{h=!1,b&&(b=!1,_(O),O=-1),m=!0;var r=g;try{t:{for(j(e),y=i(u);null!==y&&!(y.expirationTime>e&&E());){var a=y.callback;if("function"==typeof a){y.callback=null,g=y.priorityLevel;var s=a(y.expirationTime<=e);if(e=n.unstable_now(),"function"==typeof s){y.callback=s,j(e),t=!0;break t}y===i(u)&&o(u),j(e)}else o(u);y=i(u)}if(null!==y)t=!0;else{var f=i(d);null!==f&&A(I,f.startTime-e),t=!1}}break e}finally{y=null,g=r,m=!1}}}finally{t?l():C=!1}}}if("function"==typeof w)l=function(){w(T)};else if("u">typeof MessageChannel){var N=new MessageChannel,S=N.port2;N.port1.onmessage=T,l=function(){S.postMessage(null)}}else l=function(){v(T,0)};function A(e,t){O=v(function(){e(n.unstable_now())},t)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<e?Math.floor(1e3/e):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_next=function(e){switch(g){case 1:case 2:case 3:var t=3;break;default:t=g}var n=g;g=t;try{return e()}finally{g=n}},n.unstable_requestPaint=function(){x=!0},n.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=g;g=e;try{return t()}finally{g=n}},n.unstable_scheduleCallback=function(e,t,o){var a=n.unstable_now();switch(o="object"==typeof o&&null!==o&&"number"==typeof(o=o.delay)&&0<o?a+o:a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=0x3fffffff;break;case 4:s=1e4;break;default:s=5e3}return s=o+s,e={id:p++,callback:t,priorityLevel:e,startTime:o,expirationTime:s,sortIndex:-1},o>a?(e.sortIndex=o,r(d,e),null===i(u)&&e===i(d)&&(b?(_(O),O=-1):b=!0,A(I,o-a))):(e.sortIndex=s,r(u,e),h||m||(h=!0,C||(C=!0,l()))),e},n.unstable_shouldYield=E,n.unstable_wrapCallback=function(e){var t=g;return function(){var n=g;g=t;try{return e.apply(this,arguments)}finally{g=n}}}},52659,(e,t,n)=>{"use strict";t.exports=e.r(11829)},23984,e=>{"use strict";var t=e.i(91398),n=e.i(58678),r=e.i(41158),i=e.i(60814);let o=i.keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
`,a=i.keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`,l=i.keyframes`
  0%, 100% { clip-path: inset(0 0 0 0); }
  20% { clip-path: inset(20% 0 60% 0); }
  40% { clip-path: inset(40% 0 40% 0); }
  60% { clip-path: inset(60% 0 20% 0); }
  80% { clip-path: inset(80% 0 5% 0); }
`,s=i.keyframes`
  0%, 100% { clip-path: inset(0 0 0 0); }
  20% { clip-path: inset(10% 0 70% 0); }
  40% { clip-path: inset(50% 0 30% 0); }
  60% { clip-path: inset(30% 0 50% 0); }
  80% { clip-path: inset(70% 0 10% 0); }
`,f=i.keyframes`
  0%, 100% { opacity: 1; }
  92% { opacity: 1; }
  93% { opacity: 0.8; }
  94% { opacity: 1; }
  96% { opacity: 0.6; }
  97% { opacity: 1; }
`,c=i.default.div.withConfig({displayName:"styled__Container",componentId:"sc-e319c320-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  padding: 80px 20px;
  font-family: "Pretendard", sans-serif;
  background: #0a0a0f;
  overflow: hidden;
`,u=i.default.div.withConfig({displayName:"styled__Grid",componentId:"sc-e319c320-1"})`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 0, 255, 0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
`,d=i.default.div.withConfig({displayName:"styled__Scanline",componentId:"sc-e319c320-2"})`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(0, 0, 0, 0.02) 50%
  );
  background-size: 100% 4px;
  pointer-events: none;
  animation: ${o} 10s linear infinite;
`,p=i.default.div.withConfig({displayName:"styled__GlowBar",componentId:"sc-e319c320-3"})`
  position: absolute;
  top: ${({$top:e})=>e};
  left: ${({$left:e})=>e};
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, ${({$color:e})=>e}25 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
`,y=i.default.div.withConfig({displayName:"styled__Content",componentId:"sc-e319c320-4"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 560px;
`,g=i.default.div.withConfig({displayName:"styled__Badge",componentId:"sc-e319c320-5"})`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgba(255, 0, 255, 0.6);
  font-weight: 700;

  &::after {
    width: 4px;
    height: 4px;
    background: #00ffff;
    content: "";
    border-radius: 50%;
    animation: ${a} 1s step-end infinite;
  }
`,m=i.default.h1.withConfig({displayName:"styled__Title",componentId:"sc-e319c320-6"})`
  font-size: clamp(28px, 6vw, 48px);
  font-weight: 900;
  color: #fff;
  text-align: center;
  line-height: 1.15;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: ${f} 3s linear infinite;

  span:first-child {
    color: #00ffff;
    text-shadow:
      0 0 4px #00ffff,
      0 0 12px #00ffff66,
      0 0 24px #00ffff33;
  }

  .glitch {
    position: relative;
    color: #ff00ff;
    text-shadow:
      0 0 4px #ff00ff,
      0 0 12px #ff00ff66,
      0 0 24px #ff00ff33;

    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    &::before {
      color: #00ffff;
      animation: ${l} 2s infinite linear alternate-reverse;
    }

    &::after {
      color: #ff00ff;
      animation: ${s} 2s infinite linear alternate-reverse;
    }
  }
`,h=i.default.div.withConfig({displayName:"styled__List",componentId:"sc-e319c320-7"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 520px;
`,b=i.default.a.withConfig({displayName:"styled__Card",componentId:"sc-e319c320-8"})`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 0, 255, 0.15);
  border-radius: 8px;
  transition: all 0.25s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(0, 255, 255, 0.4);
    box-shadow:
      0 0 12px rgba(0, 255, 255, 0.15),
      inset 0 0 12px rgba(0, 255, 255, 0.05);
    transform: translateY(-2px);
  }

  &:hover .arrow {
    color: #00ffff;
    transform: translateX(4px);
  }
`,x=i.default.div.withConfig({displayName:"styled__CardIcon",componentId:"sc-e319c320-9"})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  font-size: 16px;
  background: rgba(255, 0, 255, 0.08);
  border-radius: 6px;
  border: 1px solid rgba(255, 0, 255, 0.2);
`,v=i.default.div.withConfig({displayName:"styled__CardText",componentId:"sc-e319c320-10"})`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
  min-width: 0;
`,_=i.default.div.withConfig({displayName:"styled__CardTitle",componentId:"sc-e319c320-11"})`
  font-size: 15px;
  font-weight: 600;
  color: #fff;
`,w=i.default.div.withConfig({displayName:"styled__CardDesc",componentId:"sc-e319c320-12"})`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.35);
`,j=i.default.span.withConfig({displayName:"styled__Arrow",componentId:"sc-e319c320-13"})`
  flex-shrink: 0;
  margin-left: auto;
  font-size: 16px;
  color: rgba(255, 0, 255, 0.3);
  transition: all 0.25s ease;
`,I=i.default.div.withConfig({displayName:"styled__Footer",componentId:"sc-e319c320-14"})`
  font-size: 10px;
  color: rgba(0, 255, 255, 0.3);
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;
`;e.s(["__N_SSG",0,!0,"default",0,function({news:e}){return(0,t.jsxs)(c,{children:[(0,t.jsxs)(n.default,{children:[(0,t.jsx)("title",{children:"AI 뉴스 다이제스트 — Everything AI Have"}),(0,t.jsx)("meta",{name:"description",content:"최신 AI 뉴스를 한눈에 모아보는 AI 뉴스 다이제스트입니다. 인공지능 트렌드와 소식을 날짜별로 정리했습니다."}),(0,t.jsx)("meta",{name:"keywords",content:"AI 뉴스, 인공지능, AI 다이제스트, AI 소식, 인공지능 트렌드, Artificial Intelligence, News"}),(0,t.jsx)("meta",{name:"author",content:"Everything AI Have"}),(0,t.jsx)("meta",{name:"theme-color",content:"#0a0a0f"}),(0,t.jsx)("meta",{name:"robots",content:"index, follow"}),(0,t.jsx)("meta",{property:"og:type",content:"website"}),(0,t.jsx)("meta",{property:"og:title",content:"AI 뉴스 다이제스트 — Everything AI Have"}),(0,t.jsx)("meta",{property:"og:description",content:"최신 AI 뉴스를 한눈에 모아보는 AI 뉴스 다이제스트입니다."}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,t.jsx)("meta",{name:"twitter:title",content:"AI 뉴스 다이제스트 — Everything AI Have"}),(0,t.jsx)("meta",{name:"twitter:description",content:"최신 AI 뉴스를 한눈에 모아보는 AI 뉴스 다이제스트입니다."})]}),(0,t.jsx)(u,{}),(0,t.jsx)(d,{}),(0,t.jsx)(p,{$top:"15%",$left:"10%",$color:"#ff00ff"}),(0,t.jsx)(p,{$top:"60%",$left:"75%",$color:"#00ffff"}),(0,t.jsxs)(y,{children:[(0,t.jsx)(g,{children:(0,t.jsx)(r.default,{href:"/",style:{textDecoration:"none",color:"inherit"},children:"AI 뉴스 다이제스트"})}),(0,t.jsxs)(m,{children:[(0,t.jsx)("span",{"data-text":"AI 뉴스",children:"AI가 말아주는"}),(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:"glitch","data-text":"전세계 AI 늬우스",children:"전세계 AI 늬우스"})]}),(0,t.jsx)(h,{children:e.map(e=>(0,t.jsxs)(b,{href:e.href,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(x,{children:"📡"}),(0,t.jsxs)(v,{children:[(0,t.jsx)(_,{children:e.title}),(0,t.jsx)(w,{children:e.label})]}),(0,t.jsx)(j,{className:"arrow",children:"→"})]},e.href))}),(0,t.jsx)(I,{children:"neural feed // Everything AI Have"})]})]})}],23984)},78813,(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/n",()=>e.r(23984)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/n"])})},48761,e=>{e.v(t=>Promise.all(["static/chunks/0ey~yy8oeyp~5.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/0599p99vu8fk5.js"].map(t=>e.l(t))).then(()=>t(79466)))}]);