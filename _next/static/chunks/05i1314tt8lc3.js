(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,89129,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return m},MiddlewareNotFoundError:function(){return x},MissingStaticPage:function(){return _},NormalizeError:function(){return b},PageNotFoundError:function(){return v},SP:function(){return y},ST:function(){return h},WEB_VITALS:function(){return i},execOnce:function(){return l},getDisplayName:function(){return u},getLocationOrigin:function(){return f},getURL:function(){return c},isAbsoluteUrl:function(){return s},isResSent:function(){return d},loadGetInitialProps:function(){return g},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return w}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function l(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let a=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>a.test(e);function f(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=f();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function g(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await g(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&d(r))return n;if(!n)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let y="u">typeof performance,h=y&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class b extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class _ extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class x extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function w(e){return JSON.stringify({message:e.message,stack:e.stack})}},71914,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useIntersection",{enumerable:!0,get:function(){return s}});let n=e.r(91788),o=e.r(99604),i="function"==typeof IntersectionObserver,l=new Map,a=[];function s({rootRef:e,rootMargin:t,disabled:r}){let f=r||!i,[c,u]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(i){if(f||c)return;let r=d.current;if(r&&r.tagName)return function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t,r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},a.push(r),l.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(r,e=>e&&u(e),{root:e?.current,rootMargin:t})}else if(!c){let e=(0,o.requestIdleCallback)(()=>u(!0));return()=>(0,o.cancelIdleCallback)(e)}},[f,t,e,c,d.current]),[p,c,(0,n.useCallback)(()=>{u(!1)},[])]}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},54471,(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getDomainLocale",{enumerable:!0,get:function(){return n}}),e.r(70090),("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},63230,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=e.r(91788);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=i(e,n)),t&&(o.current=i(t,n))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},48735,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},39149,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return C},useLinkStatus:function(){return k}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(52456),l=e.r(91398),a=i._(e.r(91788)),s=e.r(60472),f=e.r(71112),c=e.r(28169),u=e.r(89129),d=e.r(14862),p=e.r(25479),g=e.r(71914),y=e.r(54471),h=e.r(44113),m=e.r(63230);e.r(48735);let b=new Set;function v(e,t,r,n){if(!("u"<typeof window)&&(0,f.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(b.has(o))return;b.add(o)}e.prefetch(t,r,n).catch(e=>{})}}function _(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let x=a.default.forwardRef(function(e,t){let r,n,{href:o,as:i,children:c,prefetch:b=null,passHref:x,replace:w,shallow:k,scroll:C,locale:S,onClick:j,onNavigate:E,onMouseEnter:O,onTouchStart:P,legacyBehavior:T=!1,transitionTypes:N,...I}=e;r=c,T&&("string"==typeof r||"number"==typeof r)&&(r=(0,l.jsx)("a",{children:r}));let M=a.default.useContext(p.RouterContext),$=!1!==b,{href:R,as:L}=a.default.useMemo(()=>{if(!M){let e=_(o);return{href:e,as:i?_(i):e}}let[e,t]=(0,s.resolveHref)(M,o,!0);return{href:e,as:i?(0,s.resolveHref)(M,i):t||e}},[M,o,i]),A=a.default.useRef(R),z=a.default.useRef(L);T&&(n=a.default.Children.only(r));let D=T?n&&"object"==typeof n&&n.ref:t,[U,B,F]=(0,g.useIntersection)({rootMargin:"200px"}),H=a.default.useCallback(e=>{(z.current!==L||A.current!==R)&&(F(),z.current=L,A.current=R),U(e)},[L,R,F,U]),K=(0,m.useMergedRef)(H,D);a.default.useEffect(()=>{!M||B&&$&&v(M,R,L,{locale:S})},[L,R,B,S,$,M?.locale,M]);let G={ref:K,onClick(e){T||"function"!=typeof j||j(e),T&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),!M||e.defaultPrevented||function(e,t,r,n,o,i,l,a,s){let c,{nodeName:u}=e.currentTarget;if(!("A"===u.toUpperCase()&&((c=e.currentTarget.getAttribute("target"))&&"_self"!==c||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which)||e.currentTarget.hasAttribute("download"))){if(!(0,f.isLocalURL)(r)){o&&(e.preventDefault(),location.replace(r));return}e.preventDefault(),(()=>{if(s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let e=l??!0;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,locale:a,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})})()}}(e,M,R,L,w,k,C,S,E)},onMouseEnter(e){T||"function"!=typeof O||O(e),T&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),M&&v(M,R,L,{locale:S,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){T||"function"!=typeof P||P(e),T&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),M&&v(M,R,L,{locale:S,priority:!0,bypassPrefetchedCheck:!0})}};if((0,u.isAbsoluteUrl)(L))G.href=L;else if(!T||x||"a"===n.type&&!("href"in n.props)){let e=void 0!==S?S:M?.locale;G.href=M?.isLocaleDomain&&(0,y.getDomainLocale)(L,e,M?.locales,M?.domainLocales)||(0,h.addBasePath)((0,d.addLocale)(L,e,M?.defaultLocale))}return T?a.default.cloneElement(n,G):(0,l.jsx)("a",{...I,...G,children:r})}),w=(0,a.createContext)({pending:!1}),k=()=>(0,a.useContext)(w),C=x;("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},41158,(e,t,r)=>{t.exports=e.r(39149)},17431,(e,t,r)=>{"use strict";var n=e.r(91788);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var l={d:{f:i,r:function(){throw Error(o(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},a=Symbol.for("react.portal"),s=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,r.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(o(299));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:a,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},r.flushSync=function(e){var t=s.T,r=l.p;try{if(s.T=null,l.p=2,e)return e()}finally{s.T=t,l.p=r,l.d.f()}},r.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,l.d.C(e,t))},r.prefetchDNS=function(e){"string"==typeof e&&l.d.D(e)},r.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var r=t.as,n=f(r,t.crossOrigin),o="string"==typeof t.integrity?t.integrity:void 0,i="string"==typeof t.fetchPriority?t.fetchPriority:void 0;"style"===r?l.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:n,integrity:o,fetchPriority:i}):"script"===r&&l.d.X(e,{crossOrigin:n,integrity:o,fetchPriority:i,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},r.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var r=f(t.as,t.crossOrigin);l.d.M(e,{crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&l.d.M(e)},r.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var r=t.as,n=f(r,t.crossOrigin);l.d.L(e,r,{crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},r.preloadModule=function(e,t){if("string"==typeof e)if(t){var r=f(t.as,t.crossOrigin);l.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else l.d.m(e)},r.requestFormReset=function(e){l.d.r(e)},r.unstable_batchedUpdates=function(e,t){return e(t)},r.useFormState=function(e,t,r){return s.H.useFormState(e,t,r)},r.useFormStatus=function(){return s.H.useHostTransitionStatus()},r.version="19.2.4"},30943,(e,t,r)=>{"use strict";!function e(){if("u">typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),t.exports=e.r(17431)},11829,(e,t,r)=>{"use strict";function n(e,t){var r=e.length;for(e.push(t);0<r;){var n=r-1>>>1,o=e[n];if(0<l(o,t))e[n]=t,e[r]=o,r=n;else break}}function o(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;for(var n=0,o=e.length,i=o>>>1;n<i;){var a=2*(n+1)-1,s=e[a],f=a+1,c=e[f];if(0>l(s,r))f<o&&0>l(c,s)?(e[n]=c,e[f]=r,n=f):(e[n]=s,e[a]=r,n=a);else if(f<o&&0>l(c,r))e[n]=c,e[f]=r,n=f;else break}}return t}function l(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if(r.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var a,s=performance;r.unstable_now=function(){return s.now()}}else{var f=Date,c=f.now();r.unstable_now=function(){return f.now()-c}}var u=[],d=[],p=1,g=null,y=3,h=!1,m=!1,b=!1,v=!1,_="function"==typeof setTimeout?setTimeout:null,x="function"==typeof clearTimeout?clearTimeout:null,w="u">typeof setImmediate?setImmediate:null;function k(e){for(var t=o(d);null!==t;){if(null===t.callback)i(d);else if(t.startTime<=e)i(d),t.sortIndex=t.expirationTime,n(u,t);else break;t=o(d)}}function C(e){if(b=!1,k(e),!m)if(null!==o(u))m=!0,S||(S=!0,a());else{var t=o(d);null!==t&&M(C,t.startTime-e)}}var S=!1,j=-1,E=5,O=-1;function P(){return!!v||!(r.unstable_now()-O<E)}function T(){if(v=!1,S){var e=r.unstable_now();O=e;var t=!0;try{e:{m=!1,b&&(b=!1,x(j),j=-1),h=!0;var n=y;try{t:{for(k(e),g=o(u);null!==g&&!(g.expirationTime>e&&P());){var l=g.callback;if("function"==typeof l){g.callback=null,y=g.priorityLevel;var s=l(g.expirationTime<=e);if(e=r.unstable_now(),"function"==typeof s){g.callback=s,k(e),t=!0;break t}g===o(u)&&i(u),k(e)}else i(u);g=o(u)}if(null!==g)t=!0;else{var f=o(d);null!==f&&M(C,f.startTime-e),t=!1}}break e}finally{g=null,y=n,h=!1}}}finally{t?a():S=!1}}}if("function"==typeof w)a=function(){w(T)};else if("u">typeof MessageChannel){var N=new MessageChannel,I=N.port2;N.port1.onmessage=T,a=function(){I.postMessage(null)}}else a=function(){_(T,0)};function M(e,t){j=_(function(){e(r.unstable_now())},t)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(e){e.callback=null},r.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<e?Math.floor(1e3/e):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(e){switch(y){case 1:case 2:case 3:var t=3;break;default:t=y}var r=y;y=t;try{return e()}finally{y=r}},r.unstable_requestPaint=function(){v=!0},r.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=y;y=e;try{return t()}finally{y=r}},r.unstable_scheduleCallback=function(e,t,i){var l=r.unstable_now();switch(i="object"==typeof i&&null!==i&&"number"==typeof(i=i.delay)&&0<i?l+i:l,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=0x3fffffff;break;case 4:s=1e4;break;default:s=5e3}return s=i+s,e={id:p++,callback:t,priorityLevel:e,startTime:i,expirationTime:s,sortIndex:-1},i>l?(e.sortIndex=i,n(d,e),null===o(u)&&e===o(d)&&(b?(x(j),j=-1):b=!0,M(C,i-l))):(e.sortIndex=s,n(u,e),m||h||(m=!0,S||(S=!0,a()))),e},r.unstable_shouldYield=P,r.unstable_wrapCallback=function(e){var t=y;return function(){var r=y;y=t;try{return e.apply(this,arguments)}finally{y=r}}}},52659,(e,t,r)=>{"use strict";t.exports=e.r(11829)},12533,e=>{"use strict";var t=e.i(91398),r=e.i(91788),n=e.i(58678),o=e.i(41158),i=e.i(60814);let l={2:{bg:"#eee4da",color:"#776e65"},4:{bg:"#ede0c8",color:"#776e65"},8:{bg:"#f2b179",color:"#f9f6f2"},16:{bg:"#f59563",color:"#f9f6f2"},32:{bg:"#f67c5f",color:"#f9f6f2"},64:{bg:"#f65e3b",color:"#f9f6f2"},128:{bg:"#edcf72",color:"#f9f6f2",fontSize:"1.6rem"},256:{bg:"#edcc61",color:"#f9f6f2",fontSize:"1.6rem"},512:{bg:"#edc850",color:"#f9f6f2",fontSize:"1.6rem"},1024:{bg:"#edc53f",color:"#f9f6f2",fontSize:"1.3rem"},2048:{bg:"#edc22e",color:"#f9f6f2",fontSize:"1.3rem"}},a={bg:"#3c3a32",color:"#f9f6f2",fontSize:"1.1rem"},s=i.keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`,f=i.keyframes`
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`,c=i.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,u=i.default.div.withConfig({displayName:"styled__Container",componentId:"sc-35fffe33-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  box-sizing: border-box;
  width: 100%;
  min-height: 100dvh;
  padding: 24px 16px;

  font-family: "Inter", "Segoe UI", system-ui, -apple-system, sans-serif;
  color: #f9f6f2;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`,d=i.default.div.withConfig({displayName:"styled__Header",componentId:"sc-35fffe33-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  width: 100%;
  max-width: 400px;
`,p=i.default.h1.withConfig({displayName:"styled__Title",componentId:"sc-35fffe33-2"})`
  margin: 0;

  font-size: 3rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #edc22e, #f2b179, #f67c5f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,g=i.default.div.withConfig({displayName:"styled__ScoreArea",componentId:"sc-35fffe33-3"})`
  display: flex;
  gap: 8px;
`,y=i.default.div.withConfig({displayName:"styled__ScoreBox",componentId:"sc-35fffe33-4"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  min-width: 70px;
  padding: 8px 12px;
  border-radius: 8px;

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
`,h=i.default.span.withConfig({displayName:"styled__ScoreLabel",componentId:"sc-35fffe33-5"})`
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
`,m=i.default.span.withConfig({displayName:"styled__ScoreValue",componentId:"sc-35fffe33-6"})`
  font-size: 1.2rem;
  font-weight: 800;
  color: #f9f6f2;
`,b=i.default.div.withConfig({displayName:"styled__ButtonRow",componentId:"sc-35fffe33-7"})`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 400px;
`,v=i.default.button.withConfig({displayName:"styled__NewGameButton",componentId:"sc-35fffe33-8"})`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;

  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #f9f6f2;
  background: linear-gradient(135deg, #f67c5f, #f2b179);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(246, 124, 95, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`,_=i.default.button.withConfig({displayName:"styled__UndoButton",componentId:"sc-35fffe33-9"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  padding: 10px 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;

  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.06);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    color: #f9f6f2;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,x=i.default.div.withConfig({displayName:"styled__Board",componentId:"sc-35fffe33-10"})`
  position: relative;

  border-radius: 12px;

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  overflow: hidden;
`,w=i.default.div.withConfig({displayName:"styled__Grid",componentId:"sc-35fffe33-11"})`
  display: grid;
  grid-template-columns: repeat(${e=>e.$size}, 1fr);
  gap: 8px;

  position: relative;

  padding: 8px;
`,k=i.default.div.withConfig({displayName:"styled__EmptyCell",componentId:"sc-35fffe33-12"})`
  width: clamp(60px, 18vw, 85px);
  height: clamp(60px, 18vw, 85px);
  border-radius: 8px;

  background: rgba(255, 255, 255, 0.05);
`,C=i.default.div.withConfig({displayName:"styled__Tile",componentId:"sc-35fffe33-13"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  border-radius: 8px;

  font-size: ${e=>(l[e.$value]??a).fontSize??"2rem"};
  font-weight: 800;
  color: ${e=>(l[e.$value]??a).color};
  background: ${e=>(l[e.$value]??a).bg};
  box-shadow: ${e=>e.$value>=128?`0 0 20px rgba(237, 197, 63, ${Math.min(.1+e.$value/4096,.6)})`:"none"};

  ${e=>e.$isNew&&i.css`
      animation: ${s} 0.2s ease forwards;
    `}

  ${e=>e.$isMerged&&i.css`
      animation: ${f} 0.2s ease;
    `}
`,S=i.default.div.withConfig({displayName:"styled__Overlay",componentId:"sc-35fffe33-14"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  position: absolute;
  inset: 0;
  z-index: 10;

  border-radius: 12px;

  background: ${e=>e.$won?"rgba(237, 194, 46, 0.7)":"rgba(0, 0, 0, 0.6)"};
  backdrop-filter: blur(4px);
  animation: ${c} 0.4s ease;
`,j=i.default.span.withConfig({displayName:"styled__OverlayText",componentId:"sc-35fffe33-15"})`
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: ${e=>e.$won?"#776e65":"#f9f6f2"};
  text-shadow: ${e=>e.$won?"none":"0 2px 8px rgba(0, 0, 0, 0.5)"};
`,E=i.default.button.withConfig({displayName:"styled__OverlayButton",componentId:"sc-35fffe33-16"})`
  padding: 10px 24px;
  border: none;
  border-radius: 8px;

  font-size: 0.9rem;
  font-weight: 700;
  color: #f9f6f2;
  background: linear-gradient(135deg, #f67c5f, #f2b179);
  cursor: pointer;
  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.05);
  }
`,O=i.default.p.withConfig({displayName:"styled__Instruction",componentId:"sc-35fffe33-17"})`
  max-width: 400px;
  margin: 0;

  font-size: 0.8rem;
  line-height: 1.5;
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
`,P=0;function T(){return Array.from({length:4},()=>[,,,,].fill(0))}function N(e){let t=[];for(let r=0;r<4;r++)for(let n=0;n<4;n++)0===e[r][n]&&t.push([r,n]);return t}function I(e){let t=N(e);if(0===t.length)return null;let[r,n]=t[Math.floor(Math.random()*t.length)];return e[r][n]=.9>Math.random()?2:4,[r,n]}function M(e){let t=e.filter(e=>0!==e),r=[],n=new Set,o=0,i=0;for(;i<t.length;)if(i+1<t.length&&t[i]===t[i+1]){let e=2*t[i];r.push(e),o+=e,n.add(r.length-1),i+=2}else r.push(t[i]),i++;for(;r.length<4;)r.push(0);return{result:r,score:o,merged:n}}function $(e){return e.map(e=>[...e])}e.s(["default",0,function(){let[e,i]=(0,r.useState)(T),[l,a]=(0,r.useState)(0),[s,f]=(0,r.useState)(0),[c,R]=(0,r.useState)("playing"),[L,A]=(0,r.useState)([]),[z,D]=(0,r.useState)([]),[U,B]=(0,r.useState)(!1),F=(0,r.useRef)(null),H=(0,r.useRef)(null),[K,G]=(0,r.useState)(85);(0,r.useEffect)(()=>{function e(){G(Math.max(60,Math.min(.18*window.innerWidth,85)))}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,r.useEffect)(()=>{let e=localStorage.getItem("game2048_best");e&&f(Number(e))},[]),(0,r.useEffect)(()=>{l>s&&(f(l),localStorage.setItem("game2048_best",String(l)))},[l,s]);let X=(0,r.useCallback)((e,t,r)=>{let n=[];for(let o=0;o<4;o++)for(let i=0;i<4;i++)0!==e[o][i]&&n.push({id:++P,value:e[o][i],row:o,col:i,isNew:!!t&&t[0]===o&&t[1]===i,isMerged:r.has(`${o}-${i}`)});return n},[]),Y=(0,r.useCallback)(()=>{P=0;let e=T();I(e),I(e),i(e),a(0),R("playing"),B(!1),D([]),A(X(e,null,new Set))},[X]);(0,r.useEffect)(()=>{Y()},[Y]);let V=(0,r.useCallback)(t=>{if("lost"===c||"won"===c&&!U)return;let{newGrid:r,score:n,mergedPositions:o}=function(e,t){let r=$(e),n=0,o=new Set;if("left"===t)for(let e=0;e<4;e++){let{result:t,score:i,merged:l}=M(r[e]);r[e]=t,n+=i,l.forEach(t=>o.add(`${e}-${t}`))}else if("right"===t)for(let e=0;e<4;e++){let{result:t,score:i,merged:l}=M([...r[e]].reverse());r[e]=t.reverse(),n+=i,l.forEach(t=>o.add(`${e}-${3-t}`))}else if("up"===t)for(let e=0;e<4;e++){let{result:t,score:i,merged:l}=M(Array.from({length:4},(t,n)=>r[n][e]));for(let n=0;n<4;n++)r[n][e]=t[n];n+=i,l.forEach(t=>o.add(`${t}-${e}`))}else for(let e=0;e<4;e++){let{result:t,score:i,merged:l}=M(Array.from({length:4},(t,n)=>r[n][e]).reverse()),a=t.reverse();for(let t=0;t<4;t++)r[t][e]=a[t];n+=i,l.forEach(t=>o.add(`${3-t}-${e}`))}return{newGrid:r,score:n,mergedPositions:o}}(e,t);if(function(e,t){for(let r=0;r<4;r++)for(let n=0;n<4;n++)if(e[r][n]!==t[r][n])return!1;return!0}(e,r))return;D(t=>[...t.slice(-20),{grid:$(e),score:l}]);let s=I(r),f=l+n;(i(r),a(f),A(X(r,s,o)),!U&&r.some(e=>e.some(e=>e>=2048)))?R("won"):!function(e){if(N(e).length>0)return!0;for(let t=0;t<4;t++)for(let r=0;r<4;r++)if(r+1<4&&e[t][r]===e[t][r+1]||t+1<4&&e[t][r]===e[t+1][r])return!0;return!1}(r)&&R("lost")},[e,l,c,U,X]),W=(0,r.useCallback)(()=>{if(0===z.length)return;let e=z[z.length-1];i(e.grid),a(e.score),D(e=>e.slice(0,-1)),A(X(e.grid,null,new Set)),"lost"===c&&R("playing")},[z,X,c]);(0,r.useEffect)(()=>{function e(e){let t={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down"}[e.key];t&&(e.preventDefault(),V(t))}return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[V]);let q=(0,r.useCallback)(e=>{let t=e.touches[0];F.current={x:t.clientX,y:t.clientY}},[]),Z=(0,r.useCallback)(e=>{if(!F.current)return;let t=e.changedTouches[0],r=t.clientX-F.current.x,n=t.clientY-F.current.y,o=Math.abs(r),i=Math.abs(n);30>Math.max(o,i)||(o>i?V(r>0?"right":"left"):V(n>0?"down":"up"),F.current=null)},[V]),J=(0,r.useCallback)(()=>{B(!0),R("playing")},[]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.default,{children:[(0,t.jsx)("title",{children:"2048 게임"}),(0,t.jsx)("meta",{name:"description",content:"2048 퍼즐 게임 - 타일을 밀어서 2048을 만들어보세요!"})]}),(0,t.jsxs)(u,{children:[(0,t.jsxs)(d,{children:[(0,t.jsx)(p,{children:(0,t.jsx)(o.default,{href:"/",style:{textDecoration:"none",color:"inherit"},children:"2048"})}),(0,t.jsxs)(g,{children:[(0,t.jsxs)(y,{children:[(0,t.jsx)(h,{children:"점수"}),(0,t.jsx)(m,{children:l.toLocaleString()})]}),(0,t.jsxs)(y,{children:[(0,t.jsx)(h,{children:"최고"}),(0,t.jsx)(m,{children:s.toLocaleString()})]})]})]}),(0,t.jsxs)(b,{children:[(0,t.jsx)(v,{onClick:Y,children:"새 게임"}),(0,t.jsx)(_,{onClick:W,disabled:0===z.length,children:"↩ 되돌리기"})]}),(0,t.jsxs)(x,{ref:H,onTouchStart:q,onTouchEnd:Z,children:[(0,t.jsx)(w,{$size:4,children:Array.from({length:16}).map((e,r)=>(0,t.jsx)(k,{},r))}),L.map(e=>(0,t.jsx)("div",{style:{position:"absolute",top:8+e.row*(K+8),left:8+e.col*(K+8),width:K,height:K,transition:"top 0.12s ease, left 0.12s ease",zIndex:e.isMerged?2:1},children:(0,t.jsx)(C,{$value:e.value,$isNew:e.isNew,$isMerged:e.isMerged,children:e.value})},e.id)),"lost"===c&&(0,t.jsxs)(S,{children:[(0,t.jsx)(j,{children:"게임 오버!"}),(0,t.jsx)(E,{onClick:Y,children:"다시 시작"}),z.length>0&&(0,t.jsx)(E,{onClick:W,children:"되돌리기"})]}),"won"===c&&!U&&(0,t.jsxs)(S,{$won:!0,children:[(0,t.jsx)(j,{$won:!0,children:"🎉 2048 달성!"}),(0,t.jsx)(E,{onClick:J,children:"계속하기"}),(0,t.jsx)(E,{onClick:Y,children:"새 게임"})]})]}),(0,t.jsx)(O,{children:"방향키 또는 스와이프로 타일을 이동하세요. 같은 숫자의 타일이 만나면 합쳐집니다!"})]})]})}],12533)},7560,(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/e",()=>e.r(12533)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/e"])})},48761,e=>{e.v(t=>Promise.all(["static/chunks/0ey~yy8oeyp~5.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/0599p99vu8fk5.js"].map(t=>e.l(t))).then(()=>t(79466)))}]);