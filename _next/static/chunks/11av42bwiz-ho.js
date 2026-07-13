(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,89129,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return m},MiddlewareNotFoundError:function(){return x},MissingStaticPage:function(){return w},NormalizeError:function(){return b},PageNotFoundError:function(){return v},SP:function(){return g},ST:function(){return y},WEB_VITALS:function(){return i},execOnce:function(){return a},getDisplayName:function(){return f},getLocationOrigin:function(){return u},getURL:function(){return c},isAbsoluteUrl:function(){return l},isResSent:function(){return d},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return _}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function u(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function c(){let{href:e}=window.location,t=u();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&d(n))return r;if(!r)throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return r}let g="u">typeof performance,y=g&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class b extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class x extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function _(e){return JSON.stringify({message:e.message,stack:e.stack})}},71914,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useIntersection",{enumerable:!0,get:function(){return l}});let r=e.r(91788),o=e.r(99604),i="function"==typeof IntersectionObserver,a=new Map,s=[];function l({rootRef:e,rootMargin:t,disabled:n}){let u=n||!i,[c,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(i){if(u||c)return;let n=d.current;if(n&&n.tagName)return function(e,t,n){let{id:r,observer:o,elements:i}=function(e){let t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},s.push(n),a.set(n,t),t}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(r);let e=s.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&s.splice(e,1)}}}(n,e=>e&&f(e),{root:e?.current,rootMargin:t})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[u,t,e,c,d.current]),[p,c,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},54471,(e,t,n)=>{"use strict";function r(e,t,n,r){return!1}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getDomainLocale",{enumerable:!0,get:function(){return r}}),e.r(70090),("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},63230,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return o}});let r=e.r(91788);function o(e,t){let n=(0,r.useRef)(null),o=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(n.current=i(e,r)),t&&(o.current=i(t,r))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},48735,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},39149,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return T},useLinkStatus:function(){return k}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=e.r(52456),a=e.r(91398),s=i._(e.r(91788)),l=e.r(60472),u=e.r(71112),c=e.r(28169),f=e.r(89129),d=e.r(14862),p=e.r(25479),h=e.r(71914),g=e.r(54471),y=e.r(44113),m=e.r(63230);e.r(48735);let b=new Set;function v(e,t,n,r){if(!("u"<typeof window)&&(0,u.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(b.has(o))return;b.add(o)}e.prefetch(t,n,r).catch(e=>{})}}function w(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let x=s.default.forwardRef(function(e,t){let n,r,{href:o,as:i,children:c,prefetch:b=null,passHref:x,replace:_,shallow:k,scroll:T,locale:C,onClick:j,onNavigate:P,onMouseEnter:S,onTouchStart:E,legacyBehavior:O=!1,transitionTypes:I,...M}=e;n=c,O&&("string"==typeof n||"number"==typeof n)&&(n=(0,a.jsx)("a",{children:n}));let N=s.default.useContext(p.RouterContext),R=!1!==b,{href:L,as:D}=s.default.useMemo(()=>{if(!N){let e=w(o);return{href:e,as:i?w(i):e}}let[e,t]=(0,l.resolveHref)(N,o,!0);return{href:e,as:i?(0,l.resolveHref)(N,i):t||e}},[N,o,i]),A=s.default.useRef(L),$=s.default.useRef(D);O&&(r=s.default.Children.only(n));let z=O?r&&"object"==typeof r&&r.ref:t,[U,B,H]=(0,h.useIntersection)({rootMargin:"200px"}),F=s.default.useCallback(e=>{($.current!==D||A.current!==L)&&(H(),$.current=D,A.current=L),U(e)},[D,L,H,U]),K=(0,m.useMergedRef)(F,z);s.default.useEffect(()=>{!N||B&&R&&v(N,L,D,{locale:C})},[D,L,B,C,R,N?.locale,N]);let W={ref:K,onClick(e){O||"function"!=typeof j||j(e),O&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),!N||e.defaultPrevented||function(e,t,n,r,o,i,a,s,l){let c,{nodeName:f}=e.currentTarget;if(!("A"===f.toUpperCase()&&((c=e.currentTarget.getAttribute("target"))&&"_self"!==c||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which)||e.currentTarget.hasAttribute("download"))){if(!(0,u.isLocalURL)(n)){o&&(e.preventDefault(),location.replace(n));return}e.preventDefault(),(()=>{if(l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let e=a??!0;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})})()}}(e,N,L,D,_,k,T,C,P)},onMouseEnter(e){O||"function"!=typeof S||S(e),O&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),N&&v(N,L,D,{locale:C,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){O||"function"!=typeof E||E(e),O&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),N&&v(N,L,D,{locale:C,priority:!0,bypassPrefetchedCheck:!0})}};if((0,f.isAbsoluteUrl)(D))W.href=D;else if(!O||x||"a"===r.type&&!("href"in r.props)){let e=void 0!==C?C:N?.locale;W.href=N?.isLocaleDomain&&(0,g.getDomainLocale)(D,e,N?.locales,N?.domainLocales)||(0,y.addBasePath)((0,d.addLocale)(D,e,N?.defaultLocale))}return O?s.default.cloneElement(r,W):(0,a.jsx)("a",{...M,...W,children:n})}),_=(0,s.createContext)({pending:!1}),k=()=>(0,s.useContext)(_),T=x;("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},41158,(e,t,n)=>{t.exports=e.r(39149)},17431,(e,t,n)=>{"use strict";var r=e.r(91788);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(o(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal"),l=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,n.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(o(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},n.flushSync=function(e){var t=l.T,n=a.p;try{if(l.T=null,a.p=2,e)return e()}finally{l.T=t,a.p=n,a.d.f()}},n.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,a.d.C(e,t))},n.prefetchDNS=function(e){"string"==typeof e&&a.d.D(e)},n.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var n=t.as,r=u(n,t.crossOrigin),o="string"==typeof t.integrity?t.integrity:void 0,i="string"==typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?a.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:o,fetchPriority:i}):"script"===n&&a.d.X(e,{crossOrigin:r,integrity:o,fetchPriority:i,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},n.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=u(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},n.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var n=t.as,r=u(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},n.preloadModule=function(e,t){if("string"==typeof e)if(t){var n=u(t.as,t.crossOrigin);a.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},n.requestFormReset=function(e){a.d.r(e)},n.unstable_batchedUpdates=function(e,t){return e(t)},n.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},n.useFormStatus=function(){return l.H.useHostTransitionStatus()},n.version="19.2.4"},30943,(e,t,n)=>{"use strict";!function e(){if("u">typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),t.exports=e.r(17431)},11829,(e,t,n)=>{"use strict";function r(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,o=e[r];if(0<a(o,t))e[r]=t,e[n]=o,n=r;else break}}function o(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,o=e.length,i=o>>>1;r<i;){var s=2*(r+1)-1,l=e[s],u=s+1,c=e[u];if(0>a(l,n))u<o&&0>a(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[s]=n,r=s);else if(u<o&&0>a(c,n))e[r]=c,e[u]=n,r=u;else break}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(n.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var s,l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,c=u.now();n.unstable_now=function(){return u.now()-c}}var f=[],d=[],p=1,h=null,g=3,y=!1,m=!1,b=!1,v=!1,w="function"==typeof setTimeout?setTimeout:null,x="function"==typeof clearTimeout?clearTimeout:null,_="u">typeof setImmediate?setImmediate:null;function k(e){for(var t=o(d);null!==t;){if(null===t.callback)i(d);else if(t.startTime<=e)i(d),t.sortIndex=t.expirationTime,r(f,t);else break;t=o(d)}}function T(e){if(b=!1,k(e),!m)if(null!==o(f))m=!0,C||(C=!0,s());else{var t=o(d);null!==t&&N(T,t.startTime-e)}}var C=!1,j=-1,P=5,S=-1;function E(){return!!v||!(n.unstable_now()-S<P)}function O(){if(v=!1,C){var e=n.unstable_now();S=e;var t=!0;try{e:{m=!1,b&&(b=!1,x(j),j=-1),y=!0;var r=g;try{t:{for(k(e),h=o(f);null!==h&&!(h.expirationTime>e&&E());){var a=h.callback;if("function"==typeof a){h.callback=null,g=h.priorityLevel;var l=a(h.expirationTime<=e);if(e=n.unstable_now(),"function"==typeof l){h.callback=l,k(e),t=!0;break t}h===o(f)&&i(f),k(e)}else i(f);h=o(f)}if(null!==h)t=!0;else{var u=o(d);null!==u&&N(T,u.startTime-e),t=!1}}break e}finally{h=null,g=r,y=!1}}}finally{t?s():C=!1}}}if("function"==typeof _)s=function(){_(O)};else if("u">typeof MessageChannel){var I=new MessageChannel,M=I.port2;I.port1.onmessage=O,s=function(){M.postMessage(null)}}else s=function(){w(O,0)};function N(e,t){j=w(function(){e(n.unstable_now())},t)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_next=function(e){switch(g){case 1:case 2:case 3:var t=3;break;default:t=g}var n=g;g=t;try{return e()}finally{g=n}},n.unstable_requestPaint=function(){v=!0},n.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=g;g=e;try{return t()}finally{g=n}},n.unstable_scheduleCallback=function(e,t,i){var a=n.unstable_now();switch(i="object"==typeof i&&null!==i&&"number"==typeof(i=i.delay)&&0<i?a+i:a,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=0x3fffffff;break;case 4:l=1e4;break;default:l=5e3}return l=i+l,e={id:p++,callback:t,priorityLevel:e,startTime:i,expirationTime:l,sortIndex:-1},i>a?(e.sortIndex=i,r(d,e),null===o(f)&&e===o(d)&&(b?(x(j),j=-1):b=!0,N(T,i-a))):(e.sortIndex=l,r(f,e),m||y||(m=!0,C||(C=!0,s()))),e},n.unstable_shouldYield=E,n.unstable_wrapCallback=function(e){var t=g;return function(){var n=g;g=t;try{return e.apply(this,arguments)}finally{g=n}}}},52659,(e,t,n)=>{"use strict";t.exports=e.r(11829)},4162,e=>{"use strict";var t=e.i(91398),n=e.i(91788),r=e.i(58678),o=e.i(41158),i=e.i(60814);let a=i.default.div.withConfig({displayName:"styled__TypingPage",componentId:"sc-a3498437-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  font-family:
    "Fira Code", "Cascadia Code", "JetBrains Mono", "Consolas", monospace;
  background: #0a0a0f;

  background-image:
    linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
`,s=i.default.div.withConfig({displayName:"styled__Header",componentId:"sc-a3498437-1"})`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 48px;
  padding: 0 24px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.5);
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
`,l=i.default.span.withConfig({displayName:"styled__HeaderAccent",componentId:"sc-a3498437-2"})`
  color: #00ffff;
  text-shadow:
    0 0 8px rgba(0, 255, 255, 0.5),
    0 0 20px rgba(0, 255, 255, 0.2);
`,u=i.default.div.withConfig({displayName:"styled__StatsBar",componentId:"sc-a3498437-3"})`
  display: flex;
  gap: 40px;
  margin-bottom: 32px;
`,c=i.default.div.withConfig({displayName:"styled__StatItem",componentId:"sc-a3498437-4"})`
  text-align: center;
`,f=i.default.div.withConfig({displayName:"styled__StatValue",componentId:"sc-a3498437-5"})`
  font-size: 32px;
  font-weight: 700;
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
`,d=i.default.div.withConfig({displayName:"styled__StatLabel",componentId:"sc-a3498437-6"})`
  margin-top: 4px;
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 1px;
  text-transform: uppercase;
`,p=i.default.div.withConfig({displayName:"styled__SentenceDisplay",componentId:"sc-a3498437-7"})`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0px;
  max-width: 800px;
  height: 80px;

  padding: 16px 40px;
  margin-bottom: 16px;

  font-size: 28px;
  line-height: 1.6;
  text-align: center;
  background: #1a1a1a;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 600px) {
    font-size: 20px;
    padding: 24px 20px;
    margin: 0 16px 32px;
  }
`,h=i.default.span.withConfig({displayName:"styled__Char",componentId:"sc-a3498437-8"})`
  color: ${({$state:e})=>"correct"===e?"rgba(34, 197, 94, 0.9)":"incorrect"===e?"rgba(239, 68, 68, 0.9)":"current"===e?"#ffffff":"rgba(255, 255, 255, 0.25)"};
  white-space: pre;
  background: ${({$state:e})=>"current"===e?"rgba(0, 255, 255, 0.12)":"transparent"};
  border-bottom: ${({$state:e})=>"current"===e?"2px solid #00ffff":"2px solid transparent"};
  transition:
    color 0.1s,
    background 0.1s;
`,g=i.default.textarea.withConfig({displayName:"styled__TextInput",componentId:"sc-a3498437-9"})`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
  height: 80px;
  padding: 20px 40px 16px 40px;

  font-family: inherit;
  font-size: 28px;
  color: #ffffff;
  font-family: "Pretendard", sans-serif;
  white-space: nowrap;
  background: #1a1a1a;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  outline: none;
  resize: none;
  transition: border-color 0.15s;

  &:focus {
    border-color: rgba(0, 255, 255, 0.3);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.15);
  }

  @media (max-width: 600px) {
    width: calc(100% - 32px);
    margin: 0 16px;
    font-size: 20px;
    padding: 24px 20px;
  }
`,y=i.default.div.withConfig({displayName:"styled__LangToggle",componentId:"sc-a3498437-10"})`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`,m=i.default.button.withConfig({displayName:"styled__LangBtn",componentId:"sc-a3498437-11"})`
  padding: 6px 20px;
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;

  color: ${({$active:e})=>e?"#0a0a0f":"rgba(255, 255, 255, 0.4)"};
  background: ${({$active:e})=>e?"#00ffff":"rgba(255, 255, 255, 0.04)"};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s;
  border: 1px solid
    ${({$active:e})=>e?"#00ffff":"rgba(255, 255, 255, 0.08)"};

  &:hover {
    color: ${({$active:e})=>e?"#0a0a0f":"#00ffff"};
    background: ${({$active:e})=>e?"#00ffff":"rgba(0, 255, 255, 0.08)"};
    border-color: rgba(0, 255, 255, 0.3);
  }
`,b=i.default.div.withConfig({displayName:"styled__ProgressBar",componentId:"sc-a3498437-12"})`
  width: 80%;
  max-width: 600px;
  height: 3px;
  margin-bottom: 48px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 2px;
  overflow: hidden;

  &::after {
    display: block;
    height: 100%;
    width: ${({$progress:e})=>e}%;
    background: linear-gradient(90deg, #00ffff, #0088ff);
    content: "";
    border-radius: 2px;
    transition: width 0.15s ease;
  }
`,v=i.default.button.withConfig({displayName:"styled__NextButton",componentId:"sc-a3498437-13"})`
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
  color: #00ffff;
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid rgba(0, 255, 255, 0.25);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background: rgba(0, 255, 255, 0.2);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.15);
  }
`,w=i.default.div.withConfig({displayName:"styled__ResultOverlay",componentId:"sc-a3498437-14"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
`,x=i.default.div.withConfig({displayName:"styled__HelpText",componentId:"sc-a3498437-15"})`
  margin-top: 24px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.2);
`,_={en:["The quick brown fox jumps over the lazy dog","Practice makes perfect every single day","Typing is a valuable skill in the modern world","Never stop learning and improving yourself","The sun sets in the west and rises in the east","A journey of a thousand miles begins with a single step","Stay focused on your goals and dreams","Every moment is a fresh beginning in life","The best time to plant a tree was twenty years ago","Success is the sum of small efforts repeated daily","Reading books expands your mind and vocabulary","Technology changes the way we live and work","Creativity is intelligence having fun","The early bird catches the worm every morning","Simple things often bring the greatest happiness","Learning to code opens up endless possibilities","A positive attitude makes a big difference","The future belongs to those who prepare for it","Good things come to those who work hard","Every expert was once a beginner just like you","Take a deep breath and type each word carefully","Consistency matters more than perfection always","The only way to do great work is to love what you do","Small daily improvements lead to big results","Your fingers will get faster with regular practice","Mistakes are proof that you are trying your best","The secret of getting ahead is getting started","Believe in yourself and all that you are capable of","Patience and persistence can achieve the impossible","Type each word as it appears on the screen above","Keep your eyes on the screen not on the keyboard","Speed and accuracy will improve over time","Focus on rhythm and flow while you type along","Every keystroke brings you closer to mastery","The journey of learning never truly ends at all","Wake up each morning with a determined attitude","Let your fingers dance across the keyboard today","Turn your face to the sun and the shadows fall behind","Act as if what you do makes a difference it does","What lies behind us and before us are tiny matters","The only limit to our realization of tomorrow is doubt","Do what you can with all you have wherever you are","It does not matter how slowly you go as long as you go","Quality means doing it right when no one is looking","In the middle of every difficulty lies opportunity","The mind is everything what you think you become","Nothing is impossible the word itself says I am possible","Happiness is not something ready made it comes from action","Life is what happens when you are busy making other plans","Your time is limited so do not waste it living a borrowed life","A smooth sea never made a skilled sailor","The greatest glory in living lies not in never falling","The way to get started is to quit talking and begin doing","Life is what we make it always has been always will be","The world is full of wonderful things you just have to see them","Well done is better than well said every single time","It always seems impossible until it is finally done","Wherever you go go with all your heart and soul","The only person you are destined to become is the person you decide to be","Everything you have ever wanted is on the other side of fear","Success usually comes to those who are too busy to be looking for it","The only impossible journey is the one you never begin","What we achieve inwardly will change outer reality","Great minds discuss ideas average minds discuss events","The best revenge is massive success every single day","Do not watch the calendar just make every day count","The unexamined life is not worth living at all","To be yourself in a world that is constantly trying to change you is great","He who has a why to live can bear almost any how","Be yourself everyone else is already taken","Two roads diverged in a wood and I took the one less traveled","You miss one hundred percent of the shots you do not take","The only thing we have to fear is fear itself","That which does not kill us makes us stronger in the end","In three words I can sum up everything I have learned about life it goes on","Life is really simple but we insist on making it complicated","The purpose of life is not to be happy it is to be useful","Get busy living or get busy dying that is the choice","Whether you think you can or think you cannot you are right","The best way to predict the future is to create it yourself","You must be the change you wish to see in the world","It is during our darkest moments that we must focus to see the light","Do not go where the path may lead go instead where there is no path","We know what we are but know not what we may become next","Try not to become a man of success but rather a man of value","Success is not final failure is not fatal it is the courage to continue","Imagination is more important than knowledge itself","The important thing is not to stop questioning the universe","Logic will get you from A to B imagination will take you everywhere","Strive not to be a success but rather to be of great value","The true sign of intelligence is not knowledge but imagination","Learn from yesterday live for today hope for tomorrow always","The difference between stupidity and genius is that genius has its limits","A person who never made a mistake never tried anything new","Any fool can know the point is to understand the bigger picture","Life is like riding a bicycle to keep your balance you must keep moving","The measure of intelligence is the ability to change your mind","Science without religion is lame religion without science is blind","Time is what we want most but what we use worst of all"],ko:["지금부터 천천히 한글 문장을 입력해보세요","타자 연습은 꾸준함이 가장 중요합니다","오늘도 좋은 하루 보내시길 바랍니다","모든 위대한 일에는 작은 시작이 있습니다","노력 없이 얻을 수 있는 결과는 없습니다","컴퓨터 자판을 익히는 것은 생각보다 쉽습니다","올바른 손가락 위치가 빠른 타자의 비결입니다","천천히 정확하게 치는 것이 더 중요합니다","자신의 타자 속도에 너무 연연하지 마세요","매일 조금씩 연습하면 실력이 늘어납니다","화면을 보면서 타자하는 습관을 길러보세요","오타가 나도 괜찮습니다 계속 연습하세요","한글 문서를 작성할 때 타자 실력이 빛을 발합니다","올바른 자세로 앉아서 타자 연습을 해보세요","손목에 무리가 가지 않도록 주의해야 합니다","처음에는 느리더라도 포기하지 않는 것이 중요합니다","꾸준한 연습이 실력 향상의 지름길입니다","백스페이스보다는 정확하게 치는 연습을 하세요","글쇠 익히기부터 차근차근 시작해 봅시다","자신감을 가지고 천천히 타이핑해 보세요","올바른 타자법은 문서 작업의 생산성을 높여줍니다","눈은 화면에 두고 손가락은 자판을 찾게 하세요","반복되는 연습이 실수를 줄여주는 최고의 방법입니다","한글 두벌식 자판이 가장 보편적으로 사용됩니다","타자 속도보다 정확도에 집중하는 것이 좋습니다","오늘의 작은 성취가 내일의 큰 자신감이 됩니다","꾸준히 노력하면 못할 일이 없습니다","하루에 한 문장씩 연습해도 큰 변화가 생깁니다","바른 자세가 바른 타자를 만듭니다","타이핑은 생각을 표현하는 도구입니다","느리더라도 확실하게 나아가는 것이 중요합니다","매일 같은 시간에 연습하는 것이 효과적입니다","손가락의 움직임이 자연스러워질 때까지 반복하세요","글자를 외우지 말고 손이 기억하게 만드세요","좋은 타자 실력은 디지털 시대의 필수 무기입니다","집중력을 유지하면 타자 속도가 저절로 빨라집니다","처음부터 완벽할 필요는 없습니다 꾸준함이 답입니다","올바른 타자 습관은 평생 가는 자산이 됩니다","급하게 치지 말고 정확하게 치는 연습을 먼저 하세요","자판 위의 손가락 위치를 항상 의식하면서 타이핑하세요","타자 연습도 결국 인내심과 집중력의 싸움입니다","실수했다고 좌절하지 말고 천천히 다시 시작하세요","자신의 타자 속도를 기록하며 성장 과정을 확인하세요","올바른 타자법은 손목 건강에도 큰 도움이 됩니다","타자 실력은 취업과 업무 효율에 직접적인 영향을 줍니다","하루 십 분만 투자해도 일 년이면 큰 발전이 있습니다","손가락이 자판을 기억할 때까지 꾸준히 반복하세요","정확하지 않은 타자는 결국 시간 낭비입니다","천재는 노력하는 사람을 이길 수 없습니다","작은 습관이 모여 큰 실력을 만듭니다","아무리 바빠도 하루에 한 번은 타이핑 연습을 합시다","손가락의 힘을 빼고 부드럽게 타이핑하는 것이 중요합니다","올바른 타자는 문서 작업의 피로도를 줄여줍니다","백 스페이스를 누르는 시간도 아껴야 합니다","타자 연습은 뇌와 손의 협응력을 길러줍니다","정확한 타자는 전문가의 첫걸음입니다","자신만의 타자 리듬을 찾는 것이 중요합니다","눈으로 읽고 손으로 치는 과정을 반복하세요","문장 단위로 끊어서 치는 연습을 해보세요","손가락 위치를 고정하고 최소한의 움직임으로 타이핑하세요","타자가 빨라지면 생각의 속도도 따라갑니다","글을 쓰는 속도가 생각을 따라잡을 때가 가장 짜릿합니다","무심코 치는 습관보다 의식적인 연습이 더 중요합니다","손목 스트레칭과 함께 타자 연습을 병행하세요","타이핑 속도보다 문서의 내용이 더 중요합니다","바른 타자는 단순한 기술이 아니라 예술입니다","도전하지 않으면 성장도 없습니다","가장 늦었다고 생각할 때가 가장 빠른 때입니다","오늘의 노력이 내일의 실력으로 이어집니다","실패는 성공을 위한 가장 좋은 교과서입니다","끝까지 포기하지 않는 사람이 결국 이깁니다","자신을 믿고 꾸준히 나아가면 목표에 도달합니다","모든 전문가는 한때 초보자였습니다","작은 성공이 모여 큰 성취를 만듭니다","타자 연습도 결국 습관의 힘이 가장 중요합니다","한 글자 한 글자 정성을 다해 입력해보세요","디지털 시대의 기본 소양은 바로 타자 실력입니다","꾸준한 연습은 지루하지만 그 결실은 달콤합니다","오늘도 한 문장씩 꾸준히 실력을 쌓아가세요","타이핑은 생각을 현실로 만드는 마법 같은 도구입니다","자판 위의 손가락 춤을 즐길 수 있을 때까지 연습하세요","올바른 타자법을 익히면 컴퓨터 작업이 편안해집니다","자신의 페이스를 유지하며 천천히 나아가세요","타자 연습은 단순하지만 가장 효과적인 자기 개발입니다","올바른 습관을 들이면 실력은 자연스럽게 따라옵니다","하루 이틀 만에 이루어지는 것은 아무것도 없습니다","작은 노력이 쌓여 큰 변화를 만들어냅니다","자신의 타자 실력을 객관적으로 측정하고 개선하세요","타자 연습은 꾸준함이 재능을 이깁니다","매일 조금씩 나아지고 있다는 사실에 집중하세요","손가락이 기억하는 순간 타자는 무의식적인 행동이 됩니다","글쓰기와 타자는 별개의 기술이 아니라 함께 발전합니다","올바른 타자법을 배우는 데 늦은 때는 없습니다","시간을 정해두고 집중해서 연습하는 것이 효과적입니다","자판을 바라보지 않고 타자하는 습관을 길러보세요","한글 타자도 영어 타자처럼 꾸준히 연습해야 늡니다","똑같은 문장을 여러 번 쳐보면 속도가 붙습니다","자신에게 맞는 연습 방법을 찾는 것이 중요합니다","타이핑 게임을 통해 즐겁게 실력을 키울 수 있습니다","꾸준함은 재능을 이기고 노력은 운명을 바꿉니다","오늘도 힘차게 타이핑을 시작해보세요"]};e.s(["default",0,function(){let[e,i]=(0,n.useState)("ko"),[k,T]=(0,n.useState)(""),[C,j]=(0,n.useState)(""),[P,S]=(0,n.useState)(!1),[E,O]=(0,n.useState)(0),I=(0,n.useRef)(new Set),M=(0,n.useRef)(null),N=(0,n.useRef)(null),[R,L]=(0,n.useState)(null),D=(0,n.useRef)(0),[A,$]=(0,n.useState)(0),z=(0,n.useRef)(0),U=(0,n.useRef)(0),B=(0,n.useRef)(0),H=(0,n.useRef)(0),[F,K]=(0,n.useState)(0),[W,G]=(0,n.useState)(0),[Y,q]=(0,n.useState)(0),[X,V]=(0,n.useState)(0),[J,Z]=(0,n.useState)(0),Q=(0,n.useCallback)(e=>{let t=Date.now(),n=R?(t-R)/1e3:0;O(n),Z(n<1?0:Math.round(e/(n/60))),z.current+=e,U.current+=D.current,B.current+=n,H.current+=k.length,K(z.current),G(U.current),q(B.current),V(H.current)},[k,R]),ee=(0,n.useCallback)(()=>{var t;let n,r,o=(t=I.current,0===(n=_[e].filter(e=>!t.has(e))).length&&t.clear(),(r=n.length>0?n:_[e])[Math.floor(Math.random()*r.length)]);I.current.add(o),T(o),j(""),S(!1),$(0),L(null),D.current=0},[e]);(0,n.useEffect)(()=>{ee()},[ee]),(0,n.useEffect)(()=>{if(P||!R)return;let e=setInterval(()=>{O((Date.now()-R)/1e3)},200);return()=>clearInterval(e)},[P,R]);let et=(0,n.useMemo)(()=>k?k.split("").map((e,t)=>t>=C.length?t===C.length?"current":"pending":C[t]===e?"correct":"incorrect"):[],[k,C]),en=(0,n.useMemo)(()=>et.filter(e=>"correct"===e).length,[et]),er=(0,n.useMemo)(()=>k?Math.round(en/k.length*100):0,[en,k]),eo=F+(P?0:en),ei=Y+(P?0:E),ea=(0,n.useMemo)(()=>ei<1?0:Math.round(eo/(ei/60)),[eo,ei]),es=(0,n.useMemo)(()=>P||!R?J:Math.round(en/(E/60))||0,[en,E,P,J,R]),el=(0,n.useMemo)(()=>{let e=X+(P?0:k.length);return 0===e?100:Math.round(eo/e*100)},[eo,X,P,k]),eu=(0,n.useCallback)(e=>{if(P)return;let t=e.target.value;!R&&t.length>0&&(L(Date.now()),Z(0)),j(t)},[P,R]),ec=(0,n.useCallback)(e=>{if(P){"Enter"===e.key&&(e.preventDefault(),ee());return}if("Enter"===e.key){e.preventDefault(),Q(k.split("").filter((e,t)=>C[t]===e).length),S(!0);return}1===e.key.length&&(D.current+=1,$(D.current))},[P,ee,Q,k,C]),ef=(0,n.useCallback)(()=>{P&&ee()},[P,ee]),ed=(0,n.useCallback)(e=>{I.current.clear(),z.current=0,U.current=0,B.current=0,H.current=0,K(0),G(0),q(0),V(0),i(e)},[]);return(0,n.useEffect)(()=>{P?N.current?.focus():M.current?.focus()},[k,P]),(0,t.jsxs)(a,{children:[(0,t.jsxs)(r.default,{children:[(0,t.jsx)("title",{children:"손은 눈보다 빠르다 - Everything AI Have"}),(0,t.jsx)("meta",{name:"description",content:"문장을 따라 입력하며 타자 실力和 CPM을 연습하고 기록할 수 있는 온라인 타자 연습 게임입니다."}),(0,t.jsx)("meta",{property:"og:type",content:"website"}),(0,t.jsx)("meta",{property:"og:title",content:"손은 눈보다 빠르다 - Everything AI Have"}),(0,t.jsx)("meta",{property:"og:description",content:"문장을 따라 입력하며 타자 실력과 CPM을 연습하고 기록할 수 있는 온라인 타자 연습 게임입니다."}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,t.jsx)("meta",{name:"twitter:title",content:"손은 눈보다 빠르다 - Everything AI Have"}),(0,t.jsx)("meta",{name:"twitter:description",content:"문장을 따라 입력하며 타자 실력과 CPM을 연습하고 기록할 수 있는 온라인 타자 연습 게임입니다."})]}),(0,t.jsx)(s,{children:(0,t.jsxs)(o.default,{href:"/",style:{textDecoration:"none",color:"inherit"},children:[(0,t.jsx)(l,{children:"손"}),"은"," ",(0,t.jsx)(l,{children:"눈"}),"보다 빠르다"]})}),(0,t.jsxs)(u,{children:[(0,t.jsxs)(c,{children:[(0,t.jsx)(f,{children:es}),(0,t.jsx)(d,{children:"문장 CPM"})]}),(0,t.jsxs)(c,{children:[(0,t.jsx)(f,{children:ea}),(0,t.jsx)(d,{children:"누적 CPM"})]}),(0,t.jsxs)(c,{children:[(0,t.jsxs)(f,{children:[el,"%"]}),(0,t.jsx)(d,{children:"정확도"})]}),(0,t.jsxs)(c,{children:[(0,t.jsxs)(f,{children:[ei.toFixed(1),"s"]}),(0,t.jsx)(d,{children:"경과 시간"})]})]}),(0,t.jsxs)(y,{children:[(0,t.jsx)(m,{$active:"ko"===e,onClick:()=>ed("ko"),children:"한글"}),(0,t.jsx)(m,{$active:"en"===e,onClick:()=>ed("en"),children:"English"})]}),(0,t.jsx)(b,{$progress:er}),(0,t.jsxs)("div",{children:[(0,t.jsx)(p,{children:k.split("").map((e,n)=>(0,t.jsx)(h,{$state:et[n]||"pending",children:" "===e?" ":e},n))}),(0,t.jsx)(g,{ref:M,value:C,onChange:eu,onKeyDown:ec,placeholder:"여기에 문장을 입력하세요...",autoFocus:!0,spellCheck:!1}),P&&(0,t.jsx)(w,{children:(0,t.jsx)(v,{ref:N,onClick:ef,children:"다음 문장"})})]}),(0,t.jsx)(x,{children:P?"":"위 문장을 그대로 입력하세요"})]})}],4162)},72169,(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/t",()=>e.r(4162)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/t"])})},48761,e=>{e.v(t=>Promise.all(["static/chunks/0ey~yy8oeyp~5.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/0599p99vu8fk5.js"].map(t=>e.l(t))).then(()=>t(79466)))}]);