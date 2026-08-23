(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,89129,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return m},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return _},NormalizeError:function(){return b},PageNotFoundError:function(){return x},SP:function(){return y},ST:function(){return h},WEB_VITALS:function(){return o},execOnce:function(){return a},getDisplayName:function(){return f},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return s},isResSent:function(){return d},loadGetInitialProps:function(){return g},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return w}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>l.test(e);function c(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function g(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await g(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&d(n))return r;if(!r)throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return r}let y="u">typeof performance,h=y&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class b extends Error{}class x extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class _ extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function w(e){return JSON.stringify({message:e.message,stack:e.stack})}},71914,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useIntersection",{enumerable:!0,get:function(){return s}});let r=e.r(91788),i=e.r(99604),o="function"==typeof IntersectionObserver,a=new Map,l=[];function s({rootRef:e,rootMargin:t,disabled:n}){let c=n||!o,[u,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(o){if(c||u)return;let n=d.current;if(n&&n.tagName)return function(e,t,n){let{id:r,observer:i,elements:o}=function(e){let t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let i=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:i},l.push(n),a.set(n,t),t}(n);return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),a.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(n,e=>e&&f(e),{root:e?.current,rootMargin:t})}else if(!u){let e=(0,i.requestIdleCallback)(()=>f(!0));return()=>(0,i.cancelIdleCallback)(e)}},[c,t,e,u,d.current]),[p,u,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},54471,(e,t,n)=>{"use strict";function r(e,t,n,r){return!1}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getDomainLocale",{enumerable:!0,get:function(){return r}}),e.r(70090),("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},63230,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return i}});let r=e.r(91788);function i(e,t){let n=(0,r.useRef)(null),i=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(n.current=o(e,r)),t&&(i.current=o(t,r))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},48735,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},39149,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return O},useLinkStatus:function(){return C}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=e.r(52456),a=e.r(91398),l=o._(e.r(91788)),s=e.r(60472),c=e.r(71112),u=e.r(28169),f=e.r(89129),d=e.r(14862),p=e.r(25479),g=e.r(71914),y=e.r(54471),h=e.r(44113),m=e.r(63230);e.r(48735);let b=new Set;function x(e,t,n,r){if(!("u"<typeof window)&&(0,c.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let i=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(b.has(i))return;b.add(i)}e.prefetch(t,n,r).catch(e=>{})}}function _(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let v=l.default.forwardRef(function(e,t){let n,r,{href:i,as:o,children:u,prefetch:b=null,passHref:v,replace:w,shallow:C,scroll:O,locale:k,onClick:j,onNavigate:I,onMouseEnter:P,onTouchStart:T,legacyBehavior:E=!1,transitionTypes:N,...S}=e;n=u,E&&("string"==typeof n||"number"==typeof n)&&(n=(0,a.jsx)("a",{children:n}));let A=l.default.useContext(p.RouterContext),M=!1!==b,{href:R,as:L}=l.default.useMemo(()=>{if(!A){let e=_(i);return{href:e,as:o?_(o):e}}let[e,t]=(0,s.resolveHref)(A,i,!0);return{href:e,as:o?(0,s.resolveHref)(A,o):t||e}},[A,i,o]),D=l.default.useRef(R),$=l.default.useRef(L);E&&(r=l.default.Children.only(n));let z=E?r&&"object"==typeof r&&r.ref:t,[U,F,B]=(0,g.useIntersection)({rootMargin:"200px"}),H=l.default.useCallback(e=>{($.current!==L||D.current!==R)&&(B(),$.current=L,D.current=R),U(e)},[L,R,B,U]),K=(0,m.useMergedRef)(H,z);l.default.useEffect(()=>{!A||F&&M&&x(A,R,L,{locale:k})},[L,R,F,k,M,A?.locale,A]);let G={ref:K,onClick(e){E||"function"!=typeof j||j(e),E&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),!A||e.defaultPrevented||function(e,t,n,r,i,o,a,l,s){let u,{nodeName:f}=e.currentTarget;if(!("A"===f.toUpperCase()&&((u=e.currentTarget.getAttribute("target"))&&"_self"!==u||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which)||e.currentTarget.hasAttribute("download"))){if(!(0,c.isLocalURL)(n)){i&&(e.preventDefault(),location.replace(n));return}e.preventDefault(),(()=>{if(s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let e=a??!0;"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:o,locale:l,scroll:e}):t[i?"replace":"push"](r||n,{scroll:e})})()}}(e,A,R,L,w,C,O,k,I)},onMouseEnter(e){E||"function"!=typeof P||P(e),E&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),A&&x(A,R,L,{locale:k,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){E||"function"!=typeof T||T(e),E&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),A&&x(A,R,L,{locale:k,priority:!0,bypassPrefetchedCheck:!0})}};if((0,f.isAbsoluteUrl)(L))G.href=L;else if(!E||v||"a"===r.type&&!("href"in r.props)){let e=void 0!==k?k:A?.locale;G.href=A?.isLocaleDomain&&(0,y.getDomainLocale)(L,e,A?.locales,A?.domainLocales)||(0,h.addBasePath)((0,d.addLocale)(L,e,A?.defaultLocale))}return E?l.default.cloneElement(r,G):(0,a.jsx)("a",{...S,...G,children:n})}),w=(0,l.createContext)({pending:!1}),C=()=>(0,l.useContext)(w),O=v;("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},41158,(e,t,n)=>{t.exports=e.r(39149)},17431,(e,t,n)=>{"use strict";var r=e.r(91788);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var a={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},l=Symbol.for("react.portal"),s=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,n.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(i(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},n.flushSync=function(e){var t=s.T,n=a.p;try{if(s.T=null,a.p=2,e)return e()}finally{s.T=t,a.p=n,a.d.f()}},n.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,a.d.C(e,t))},n.prefetchDNS=function(e){"string"==typeof e&&a.d.D(e)},n.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var n=t.as,r=c(n,t.crossOrigin),i="string"==typeof t.integrity?t.integrity:void 0,o="string"==typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?a.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):"script"===n&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},n.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},n.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var n=t.as,r=c(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},n.preloadModule=function(e,t){if("string"==typeof e)if(t){var n=c(t.as,t.crossOrigin);a.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},n.requestFormReset=function(e){a.d.r(e)},n.unstable_batchedUpdates=function(e,t){return e(t)},n.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},n.useFormStatus=function(){return s.H.useHostTransitionStatus()},n.version="19.2.4"},30943,(e,t,n)=>{"use strict";!function e(){if("u">typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),t.exports=e.r(17431)},11829,(e,t,n)=>{"use strict";function r(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,i=e[r];if(0<a(i,t))e[r]=t,e[n]=i,n=r;else break}}function i(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,i=e.length,o=i>>>1;r<o;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>a(s,n))c<i&&0>a(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else if(c<i&&0>a(u,n))e[r]=u,e[c]=n,r=c;else break}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(n.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var l,s=performance;n.unstable_now=function(){return s.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var f=[],d=[],p=1,g=null,y=3,h=!1,m=!1,b=!1,x=!1,_="function"==typeof setTimeout?setTimeout:null,v="function"==typeof clearTimeout?clearTimeout:null,w="u">typeof setImmediate?setImmediate:null;function C(e){for(var t=i(d);null!==t;){if(null===t.callback)o(d);else if(t.startTime<=e)o(d),t.sortIndex=t.expirationTime,r(f,t);else break;t=i(d)}}function O(e){if(b=!1,C(e),!m)if(null!==i(f))m=!0,k||(k=!0,l());else{var t=i(d);null!==t&&A(O,t.startTime-e)}}var k=!1,j=-1,I=5,P=-1;function T(){return!!x||!(n.unstable_now()-P<I)}function E(){if(x=!1,k){var e=n.unstable_now();P=e;var t=!0;try{e:{m=!1,b&&(b=!1,v(j),j=-1),h=!0;var r=y;try{t:{for(C(e),g=i(f);null!==g&&!(g.expirationTime>e&&T());){var a=g.callback;if("function"==typeof a){g.callback=null,y=g.priorityLevel;var s=a(g.expirationTime<=e);if(e=n.unstable_now(),"function"==typeof s){g.callback=s,C(e),t=!0;break t}g===i(f)&&o(f),C(e)}else o(f);g=i(f)}if(null!==g)t=!0;else{var c=i(d);null!==c&&A(O,c.startTime-e),t=!1}}break e}finally{g=null,y=r,h=!1}}}finally{t?l():k=!1}}}if("function"==typeof w)l=function(){w(E)};else if("u">typeof MessageChannel){var N=new MessageChannel,S=N.port2;N.port1.onmessage=E,l=function(){S.postMessage(null)}}else l=function(){_(E,0)};function A(e,t){j=_(function(){e(n.unstable_now())},t)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<e?Math.floor(1e3/e):5},n.unstable_getCurrentPriorityLevel=function(){return y},n.unstable_next=function(e){switch(y){case 1:case 2:case 3:var t=3;break;default:t=y}var n=y;y=t;try{return e()}finally{y=n}},n.unstable_requestPaint=function(){x=!0},n.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=y;y=e;try{return t()}finally{y=n}},n.unstable_scheduleCallback=function(e,t,o){var a=n.unstable_now();switch(o="object"==typeof o&&null!==o&&"number"==typeof(o=o.delay)&&0<o?a+o:a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=0x3fffffff;break;case 4:s=1e4;break;default:s=5e3}return s=o+s,e={id:p++,callback:t,priorityLevel:e,startTime:o,expirationTime:s,sortIndex:-1},o>a?(e.sortIndex=o,r(d,e),null===i(f)&&e===i(d)&&(b?(v(j),j=-1):b=!0,A(O,o-a))):(e.sortIndex=s,r(f,e),m||h||(m=!0,k||(k=!0,l()))),e},n.unstable_shouldYield=T,n.unstable_wrapCallback=function(e){var t=y;return function(){var n=y;y=t;try{return e.apply(this,arguments)}finally{y=n}}}},52659,(e,t,n)=>{"use strict";t.exports=e.r(11829)},87856,e=>{"use strict";var t=e.i(91398),n=e.i(58678),r=e.i(60814),i=e.i(41158);let o=r.keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
`,a=r.keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
`;r.default.header.withConfig({displayName:"styled__Toolbar",componentId:"sc-7094a356-0"})`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 52px;
  padding: 0 24px;
  background: rgba(10, 10, 15, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(0, 255, 255, 0.1);
`;let l=r.default.div.withConfig({displayName:"styled__ToolbarBrand",componentId:"sc-7094a356-1"})`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;

  span {
    color: #00ffff;
    text-shadow: 0 0 8px rgba(0, 255, 255, 0.4);
  }
`,s=r.default.div.withConfig({displayName:"styled__Container",componentId:"sc-7094a356-2"})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  padding: 92px 20px 40px;
  background: #0a0a0f;
  overflow: hidden;
`,c=r.default.div.withConfig({displayName:"styled__Grid",componentId:"sc-7094a356-3"})`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
`,u=r.default.div.withConfig({displayName:"styled__Scanline",componentId:"sc-7094a356-4"})`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(0, 255, 255, 0.01) 50%
  );
  background-size: 100% 4px;
  pointer-events: none;
  animation: ${a} 10s linear infinite;
`,f=r.default.div.withConfig({displayName:"styled__Orb",componentId:"sc-7094a356-5"})`
  position: absolute;
  top: ${({$top:e})=>e};
  left: ${({$left:e})=>e};
  width: ${({$size:e})=>e};
  height: ${({$size:e})=>e};
  background: radial-gradient(
    circle,
    rgba(0, 255, 255, 0.06) 0%,
    transparent 70%
  );
  border-radius: 50%;
  filter: blur(60px);
  animation: ${o} 5s ease-in-out infinite;
  animation-delay: ${({$delay:e})=>e}s;
  pointer-events: none;
`,d=r.default.div.withConfig({displayName:"styled__Content",componentId:"sc-7094a356-6"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 600px;
`;r.default.div.withConfig({displayName:"styled__Badge",componentId:"sc-7094a356-7"})`
  font-size: 11px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgba(0, 255, 255, 0.5);
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  text-align: center;
`;let p=r.default.h1.withConfig({displayName:"styled__Title",componentId:"sc-7094a356-8"})`
  font-size: clamp(28px, 6vw, 48px);
  font-weight: 800;
  color: #fff;
  text-align: center;
  line-height: 1.15;
  margin: 0;

  span {
    background: linear-gradient(135deg, #00ffff, #ff00ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`,g=r.default.p.withConfig({displayName:"styled__Subtitle",componentId:"sc-7094a356-9"})`
  margin: -24px 0 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.3);
  text-align: center;
  letter-spacing: 0.5px;
`,y=r.default.div.withConfig({displayName:"styled__CardGrid",componentId:"sc-7094a356-10"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media (min-width: 500px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`,h=(0,r.default)(i.default).withConfig({displayName:"styled__Card",componentId:"sc-7094a356-11"})`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 22px;
  text-decoration: none;
  background: rgba(0, 255, 255, 0.02);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 255, 255, 0.12);
  border-radius: 10px;
  transition: all 0.25s ease;
  cursor: pointer;

  &:hover {
    background: rgba(0, 255, 255, 0.05);
    border-color: rgba(0, 255, 255, 0.4);
    box-shadow: 0 0 24px rgba(0, 255, 255, 0.1);
    transform: translateY(-1px);
  }
`,m=r.default.div.withConfig({displayName:"styled__CardIcon",componentId:"sc-7094a356-12"})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  font-size: 20px;
  background: linear-gradient(
    135deg,
    rgba(0, 255, 255, 0.12),
    rgba(255, 0, 255, 0.08)
  );
  border-radius: 8px;
`,b=r.default.div.withConfig({displayName:"styled__CardText",componentId:"sc-7094a356-13"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`,x=r.default.div.withConfig({displayName:"styled__CardTitle",componentId:"sc-7094a356-14"})`
  font-size: 15px;
  font-weight: 600;
  color: #fff;
`,_=r.default.div.withConfig({displayName:"styled__CardDesc",componentId:"sc-7094a356-15"})`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.35);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`,v=r.default.span.withConfig({displayName:"styled__Arrow",componentId:"sc-7094a356-16"})`
  flex-shrink: 0;
  font-size: 18px;
  color: rgba(0, 255, 255, 0.4);
  transition: transform 0.25s ease;

  ${h}:hover & {
    color: #00ffff;
    transform: translateX(4px);
  }
`,w=r.default.div.withConfig({displayName:"styled__Footer",componentId:"sc-7094a356-17"})`
  margin-top: 8px;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.1);
  letter-spacing: 2px;
  text-transform: uppercase;
`,C=[{href:"/t",short:"Typing",icon:"⌨️",title:"손은 눈보다 빠르다",desc:"타이핑으로 실력을 연습하자"},{href:"/c",short:"Furniture",icon:"🪑",title:"Drop The Furniture",desc:"3D 공간에 가구 배치하기"},{href:"/d",short:"Drawing",icon:"✏️",title:"Drawing Board",desc:"자유롭게 그리고 색칠하기"},{href:"/g",short:"Chat",icon:"💬",title:"AI Chat",desc:"AI와 자유로운 대화"},{href:"/n",short:"News",icon:"📰",title:"AI 뉴스",desc:"최신 AI 뉴스 다이제스트"},{href:"/b",short:"Mine",icon:"💣",title:"지뢰찾기",desc:"초급·중급·상급 지뢰찾기"},{href:"/e",short:"2048",icon:"🔢",title:"2048 게임",desc:"타일을 합쳐 2048 만들기"}];e.s(["default",0,function(){return(0,t.jsxs)(s,{children:[(0,t.jsxs)(n.default,{children:[(0,t.jsx)("title",{children:"Everything AI Have"}),(0,t.jsx)("meta",{name:"description",content:"Everything AI Have — 여러 AI 도구를 한곳에 모은 프로젝트입니다."}),(0,t.jsx)("meta",{property:"og:type",content:"website"}),(0,t.jsx)("meta",{property:"og:title",content:"Everything AI Have"}),(0,t.jsx)("meta",{property:"og:description",content:"타자연습, 3D 가구 배치, 그림판, AI 채팅, 뉴스, 지뢰찾기, 2048 등 다양한 AI 도구를 한곳에서."}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,t.jsx)("meta",{name:"twitter:title",content:"Everything AI Have"}),(0,t.jsx)("meta",{name:"twitter:description",content:"타자연습, 3D 가구 배치, 그림판, AI 채팅, 뉴스, 지뢰찾기, 2048 등 다양한 AI 도구를 한곳에서."})]}),(0,t.jsx)(c,{}),(0,t.jsx)(u,{}),(0,t.jsx)(f,{$top:"10%",$left:"5%",$size:"400px",$delay:0}),(0,t.jsx)(f,{$top:"60%",$left:"70%",$size:"350px",$delay:2.5}),(0,t.jsxs)(d,{children:[(0,t.jsxs)(l,{children:["everything ",(0,t.jsx)("span",{children:"ai"})," have"]}),(0,t.jsxs)(p,{children:["나의 ",(0,t.jsx)("span",{children:"AI"}),"저씨"]}),(0,t.jsx)(g,{children:"AI 주인님께 드리는 미천한 나의 프롬프트"}),(0,t.jsx)(y,{children:C.map(e=>(0,t.jsxs)(h,{href:e.href,children:[(0,t.jsx)(m,{children:e.icon}),(0,t.jsxs)(b,{children:[(0,t.jsx)(x,{children:e.title}),(0,t.jsx)(_,{children:e.desc})]}),(0,t.jsx)(v,{className:"arrow",children:"→"})]},e.href))}),(0,t.jsx)(w,{children:"©https://github.com/wetet2"})]})]})}],87856)},55075,(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",()=>e.r(87856)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/"])})},48761,e=>{e.v(t=>Promise.all(["static/chunks/0ey~yy8oeyp~5.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/0599p99vu8fk5.js"].map(t=>e.l(t))).then(()=>t(79466)))}]);