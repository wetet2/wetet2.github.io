(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,89129,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return _},MissingStaticPage:function(){return w},NormalizeError:function(){return m},PageNotFoundError:function(){return x},SP:function(){return y},ST:function(){return h},WEB_VITALS:function(){return o},execOnce:function(){return a},getDisplayName:function(){return f},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return s},isResSent:function(){return d},loadGetInitialProps:function(){return g},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return v}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>l.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function g(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await g(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&d(r))return n;if(!n)throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let y="u">typeof performance,h=y&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class m extends Error{}class x extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class _ extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},71914,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useIntersection",{enumerable:!0,get:function(){return s}});let n=e.r(91788),i=e.r(99604),o="function"==typeof IntersectionObserver,a=new Map,l=[];function s({rootRef:e,rootMargin:t,disabled:r}){let c=r||!o,[u,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(o){if(c||u)return;let r=d.current;if(r&&r.tagName)return function(e,t,r){let{id:n,observer:i,elements:o}=function(e){let t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let i=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:i},l.push(r),a.set(r,t),t}(r);return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),a.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}(r,e=>e&&f(e),{root:e?.current,rootMargin:t})}else if(!u){let e=(0,i.requestIdleCallback)(()=>f(!0));return()=>(0,i.cancelIdleCallback)(e)}},[c,t,e,u,d.current]),[p,u,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},54471,(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getDomainLocale",{enumerable:!0,get:function(){return n}}),e.r(70090),("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},63230,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return i}});let n=e.r(91788);function i(e,t){let r=(0,n.useRef)(null),i=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(r.current=o(e,n)),t&&(i.current=o(t,n))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},48735,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},39149,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return O},useLinkStatus:function(){return k}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let o=e.r(52456),a=e.r(91398),l=o._(e.r(91788)),s=e.r(60472),c=e.r(71112),u=e.r(28169),f=e.r(89129),d=e.r(14862),p=e.r(25479),g=e.r(71914),y=e.r(54471),h=e.r(44113),b=e.r(63230);e.r(48735);let m=new Set;function x(e,t,r,n){if(!("u"<typeof window)&&(0,c.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let i=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(m.has(i))return;m.add(i)}e.prefetch(t,r,n).catch(e=>{})}}function w(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let _=l.default.forwardRef(function(e,t){let r,n,{href:i,as:o,children:u,prefetch:m=null,passHref:_,replace:v,shallow:k,scroll:O,locale:T,onClick:j,onNavigate:C,onMouseEnter:E,onTouchStart:P,legacyBehavior:N=!1,transitionTypes:I,...S}=e;r=u,N&&("string"==typeof r||"number"==typeof r)&&(r=(0,a.jsx)("a",{children:r}));let M=l.default.useContext(p.RouterContext),R=!1!==m,{href:A,as:$}=l.default.useMemo(()=>{if(!M){let e=w(i);return{href:e,as:o?w(o):e}}let[e,t]=(0,s.resolveHref)(M,i,!0);return{href:e,as:o?(0,s.resolveHref)(M,o):t||e}},[M,i,o]),L=l.default.useRef(A),B=l.default.useRef($);N&&(n=l.default.Children.only(r));let D=N?n&&"object"==typeof n&&n.ref:t,[U,F,z]=(0,g.useIntersection)({rootMargin:"200px"}),V=l.default.useCallback(e=>{(B.current!==$||L.current!==A)&&(z(),B.current=$,L.current=A),U(e)},[$,A,z,U]),H=(0,b.useMergedRef)(V,D);l.default.useEffect(()=>{!M||F&&R&&x(M,A,$,{locale:T})},[$,A,F,T,R,M?.locale,M]);let G={ref:H,onClick(e){N||"function"!=typeof j||j(e),N&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),!M||e.defaultPrevented||function(e,t,r,n,i,o,a,l,s){let u,{nodeName:f}=e.currentTarget;if(!("A"===f.toUpperCase()&&((u=e.currentTarget.getAttribute("target"))&&"_self"!==u||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which)||e.currentTarget.hasAttribute("download"))){if(!(0,c.isLocalURL)(r)){i&&(e.preventDefault(),location.replace(r));return}e.preventDefault(),(()=>{if(s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let e=a??!0;"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:o,locale:l,scroll:e}):t[i?"replace":"push"](n||r,{scroll:e})})()}}(e,M,A,$,v,k,O,T,C)},onMouseEnter(e){N||"function"!=typeof E||E(e),N&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),M&&x(M,A,$,{locale:T,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){N||"function"!=typeof P||P(e),N&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),M&&x(M,A,$,{locale:T,priority:!0,bypassPrefetchedCheck:!0})}};if((0,f.isAbsoluteUrl)($))G.href=$;else if(!N||_||"a"===n.type&&!("href"in n.props)){let e=void 0!==T?T:M?.locale;G.href=M?.isLocaleDomain&&(0,y.getDomainLocale)($,e,M?.locales,M?.domainLocales)||(0,h.addBasePath)((0,d.addLocale)($,e,M?.defaultLocale))}return N?l.default.cloneElement(n,G):(0,a.jsx)("a",{...S,...G,children:r})}),v=(0,l.createContext)({pending:!1}),k=()=>(0,l.useContext)(v),O=_;("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},41158,(e,t,r)=>{t.exports=e.r(39149)},17431,(e,t,r)=>{"use strict";var n=e.r(91788);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var a={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},l=Symbol.for("react.portal"),s=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,r.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(i(299));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},r.flushSync=function(e){var t=s.T,r=a.p;try{if(s.T=null,a.p=2,e)return e()}finally{s.T=t,a.p=r,a.d.f()}},r.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,a.d.C(e,t))},r.prefetchDNS=function(e){"string"==typeof e&&a.d.D(e)},r.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var r=t.as,n=c(r,t.crossOrigin),i="string"==typeof t.integrity?t.integrity:void 0,o="string"==typeof t.fetchPriority?t.fetchPriority:void 0;"style"===r?a.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:n,integrity:i,fetchPriority:o}):"script"===r&&a.d.X(e,{crossOrigin:n,integrity:i,fetchPriority:o,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},r.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var r=c(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},r.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var r=t.as,n=c(r,t.crossOrigin);a.d.L(e,r,{crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},r.preloadModule=function(e,t){if("string"==typeof e)if(t){var r=c(t.as,t.crossOrigin);a.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},r.requestFormReset=function(e){a.d.r(e)},r.unstable_batchedUpdates=function(e,t){return e(t)},r.useFormState=function(e,t,r){return s.H.useFormState(e,t,r)},r.useFormStatus=function(){return s.H.useHostTransitionStatus()},r.version="19.2.4"},30943,(e,t,r)=>{"use strict";!function e(){if("u">typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),t.exports=e.r(17431)},11829,(e,t,r)=>{"use strict";function n(e,t){var r=e.length;for(e.push(t);0<r;){var n=r-1>>>1,i=e[n];if(0<a(i,t))e[n]=t,e[r]=i,r=n;else break}}function i(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;for(var n=0,i=e.length,o=i>>>1;n<o;){var l=2*(n+1)-1,s=e[l],c=l+1,u=e[c];if(0>a(s,r))c<i&&0>a(u,s)?(e[n]=u,e[c]=r,n=c):(e[n]=s,e[l]=r,n=l);else if(c<i&&0>a(u,r))e[n]=u,e[c]=r,n=c;else break}}return t}function a(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if(r.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var l,s=performance;r.unstable_now=function(){return s.now()}}else{var c=Date,u=c.now();r.unstable_now=function(){return c.now()-u}}var f=[],d=[],p=1,g=null,y=3,h=!1,b=!1,m=!1,x=!1,w="function"==typeof setTimeout?setTimeout:null,_="function"==typeof clearTimeout?clearTimeout:null,v="u">typeof setImmediate?setImmediate:null;function k(e){for(var t=i(d);null!==t;){if(null===t.callback)o(d);else if(t.startTime<=e)o(d),t.sortIndex=t.expirationTime,n(f,t);else break;t=i(d)}}function O(e){if(m=!1,k(e),!b)if(null!==i(f))b=!0,T||(T=!0,l());else{var t=i(d);null!==t&&M(O,t.startTime-e)}}var T=!1,j=-1,C=5,E=-1;function P(){return!!x||!(r.unstable_now()-E<C)}function N(){if(x=!1,T){var e=r.unstable_now();E=e;var t=!0;try{e:{b=!1,m&&(m=!1,_(j),j=-1),h=!0;var n=y;try{t:{for(k(e),g=i(f);null!==g&&!(g.expirationTime>e&&P());){var a=g.callback;if("function"==typeof a){g.callback=null,y=g.priorityLevel;var s=a(g.expirationTime<=e);if(e=r.unstable_now(),"function"==typeof s){g.callback=s,k(e),t=!0;break t}g===i(f)&&o(f),k(e)}else o(f);g=i(f)}if(null!==g)t=!0;else{var c=i(d);null!==c&&M(O,c.startTime-e),t=!1}}break e}finally{g=null,y=n,h=!1}}}finally{t?l():T=!1}}}if("function"==typeof v)l=function(){v(N)};else if("u">typeof MessageChannel){var I=new MessageChannel,S=I.port2;I.port1.onmessage=N,l=function(){S.postMessage(null)}}else l=function(){w(N,0)};function M(e,t){j=w(function(){e(r.unstable_now())},t)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(e){e.callback=null},r.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(e){switch(y){case 1:case 2:case 3:var t=3;break;default:t=y}var r=y;y=t;try{return e()}finally{y=r}},r.unstable_requestPaint=function(){x=!0},r.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=y;y=e;try{return t()}finally{y=r}},r.unstable_scheduleCallback=function(e,t,o){var a=r.unstable_now();switch(o="object"==typeof o&&null!==o&&"number"==typeof(o=o.delay)&&0<o?a+o:a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=0x3fffffff;break;case 4:s=1e4;break;default:s=5e3}return s=o+s,e={id:p++,callback:t,priorityLevel:e,startTime:o,expirationTime:s,sortIndex:-1},o>a?(e.sortIndex=o,n(d,e),null===i(f)&&e===i(d)&&(m?(_(j),j=-1):m=!0,M(O,o-a))):(e.sortIndex=s,n(f,e),b||h||(b=!0,T||(T=!0,l()))),e},r.unstable_shouldYield=P,r.unstable_wrapCallback=function(e){var t=y;return function(){var r=y;y=t;try{return e.apply(this,arguments)}finally{y=r}}}},52659,(e,t,r)=>{"use strict";t.exports=e.r(11829)},40941,e=>{"use strict";var t=e.i(91398),r=e.i(91788),n=e.i(58678),i=e.i(41158);let o=[{row:3,col:3},{row:3,col:11},{row:7,col:7},{row:11,col:3},{row:11,col:11}];function a(){return Array.from({length:15},()=>Array.from({length:15},()=>null))}function l(e,t){return e>=0&&e<15&&t>=0&&t<15}let s=[[0,1],[1,0],[1,1],[-1,1]];function c(e,t,r){let n=e[t][r];if(!n)return null;for(let[i,o]of s){let a=[{row:t,col:r}],s=t+i,c=r+o;for(;l(s,c)&&e[s][c]===n;)a.push({row:s,col:c}),s+=i,c+=o;for(s=t-i,c=r-o;l(s,c)&&e[s][c]===n;)a.push({row:s,col:c}),s-=i,c-=o;if(a.length>=5)return{winner:n,line:a}}return null}function u(e){for(let t=0;t<15;t++)for(let r=0;r<15;r++)if(null===e[t][r])return!1;return!0}let f=[[0,1],[1,0],[1,1],[-1,1]];function d(e,t,r,n){let i=0,o=0,a=0,s=0,c=0,u=0,d=0;for(let[p,g]of f){let f=function(e){for(let t=0;t<=4;t++)if(t<=4&&4<=t+4&&1===e[t]&&1===e[t+1]&&1===e[t+2]&&1===e[t+3]&&1===e[t+4])return"FIVE";for(let t=0;t<=3;t++)if(t<=4&&4<=t+5&&0===e[t]&&0===e[t+5]&&1===e[t+1]&&1===e[t+2]&&1===e[t+3]&&1===e[t+4])return"OPEN_FOUR";for(let t=0;t<=4;t++)if(t<=4&&4<=t+4){let r=0,n=0;for(let i=t;i<t+5;i++)1===e[i]?r++:0===e[i]&&n++;if(4===r&&1===n)return"BLOCKED_FOUR"}for(let t=0;t<=3;t++)if(t<=4&&4<=t+5&&0===e[t]&&0===e[t+5]){let r=0,n=0;for(let i=t+1;i<=t+4;i++)1===e[i]?r++:0===e[i]&&n++;if(3===r&&1===n)return"OPEN_THREE"}for(let t=0;t<=4;t++)if(t<=4&&4<=t+4){let r=0,n=0;for(let i=t;i<t+5;i++)1===e[i]?r++:0===e[i]&&n++;if(3===r&&2===n)return"BLOCKED_THREE"}for(let t=0;t<=3;t++)if(t<=4&&4<=t+5&&0===e[t]&&0===e[t+5]){let r=0,n=0;for(let i=t+1;i<=t+4;i++)1===e[i]?r++:0===e[i]&&n++;if(2===r&&2===n)return"OPEN_TWO"}for(let t=0;t<=4;t++)if(t<=4&&4<=t+4){let r=0,n=0;for(let i=t;i<t+5;i++)1===e[i]?r++:0===e[i]&&n++;if(2===r&&3===n)return"BLOCKED_TWO"}return"NONE"}(function(e,t,r,n,i,o){let a=[],s="black"===o?"white":"black";for(let c=-4;c<=4;c++){let u=t+c*n,f=r+c*i;l(u,f)?0===c||e[u][f]===o?a.push(1):e[u][f]===s?a.push(-1):a.push(0):a.push(2)}return a}(e,t,r,p,g,n));"FIVE"===f?i++:"OPEN_FOUR"===f?o++:"BLOCKED_FOUR"===f?a++:"OPEN_THREE"===f?s++:"BLOCKED_THREE"===f?c++:"OPEN_TWO"===f?u++:"BLOCKED_TWO"===f&&d++}if(i>0)return 1e7;if(o>0)return 1e6;if(a>=2)return 9e5;if(a>=1&&s>=1)return 85e4;if(s>=2)return 75e4;let p=0;return a>0&&(p+=12e4*a),s>0&&(p+=6e4*s),c>0&&(p+=8e3*c),u>0&&(p+=2500*u),d>0&&(p+=400*d),p}function p(e,t,r,n){let i=d(e,t,r,n),o=d(e,t,r,"black"===n?"white":"black");return i>=1e7?2e7:o>=1e7?15e6:i>=85e4?1.4*i:o>=85e4?1.3*o:i>=75e4?1.25*i:o>=75e4?1.2*o:1.1*i+(o>=6e4?1.25*o:o)+8*Math.max(0,14-(Math.abs(t-7)+Math.abs(r-7)))}function g(e){let t=[],r=Array.from({length:15},()=>Array(15).fill(0)),n=!1;for(let t=0;t<15;t++)for(let i=0;i<15;i++)if(null!==e[t][i]){n=!0;for(let n=-2;n<=2;n++)for(let o=-2;o<=2;o++){if(0===n&&0===o)continue;let a=t+n,s=i+o;l(a,s)&&null===e[a][s]&&r[a][s]++}}if(!n){let e=Math.floor(7.5);return[{row:e,col:e}]}for(let e=0;e<15;e++)for(let n=0;n<15;n++)r[e][n]>0&&t.push({row:e,col:n});return t}let y=null;function h(){if(!y){let e=window.AudioContext||window.webkitAudioContext;e&&(y=new e)}return y&&"suspended"===y.state&&y.resume(),y}function b(e=!1){if(e)return;let t=h();if(t)try{let e=t.currentTime,r=.015*t.sampleRate,n=t.createBuffer(1,r,t.sampleRate),i=n.getChannelData(0);for(let e=0;e<r;e++)i[e]=2*Math.random()-1;let o=t.createBufferSource();o.buffer=n;let a=t.createBiquadFilter();a.type="highpass",a.frequency.setValueAtTime(1e3,e);let l=t.createGain();l.gain.setValueAtTime(.3,e),l.gain.exponentialRampToValueAtTime(.01,e+.015),o.connect(a),a.connect(l),l.connect(t.destination),o.start(e);let s=t.createOscillator(),c=t.createGain();s.type="sine",s.frequency.setValueAtTime(620,e),s.frequency.exponentialRampToValueAtTime(120,e+.08),c.gain.setValueAtTime(.4,e),c.gain.exponentialRampToValueAtTime(.001,e+.08),s.connect(c),c.connect(t.destination),s.start(e),s.stop(e+.09)}catch{}}function m(e=!1){if(e)return;let t=h();if(t)try{[523.25,659.25,783.99,1046.5].forEach((e,r)=>{let n=t.currentTime+.1*r,i=t.createOscillator(),o=t.createGain();i.type="triangle",i.frequency.setValueAtTime(e,n),o.gain.setValueAtTime(.2,n),o.gain.exponentialRampToValueAtTime(.001,n+.28),i.connect(o),o.connect(t.destination),i.start(n),i.stop(n+.3)})}catch{}}var x=e.i(60814);let w=x.keyframes`
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
`,O=x.default.div.withConfig({displayName:"styled__TitleRow",componentId:"sc-f1e0290a-2"})`
  display: flex;
  align-items: center;
  gap: 8px;
`,T=x.default.h1.withConfig({displayName:"styled__Title",componentId:"sc-f1e0290a-3"})`
  margin: 0;

  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #f7ede2;
`,j=x.default.button.withConfig({displayName:"styled__BackButton",componentId:"sc-f1e0290a-4"})`
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
`,C=x.default.div.withConfig({displayName:"styled__ControlCard",componentId:"sc-f1e0290a-5"})`
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
`,E=x.default.div.withConfig({displayName:"styled__OptionsRow",componentId:"sc-f1e0290a-6"})`
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
`,N=x.default.button.withConfig({displayName:"styled__OptionButton",componentId:"sc-f1e0290a-8"})`
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
`,I=x.default.button.withConfig({displayName:"styled__IconToggleButton",componentId:"sc-f1e0290a-9"})`
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
`,S=x.default.div.withConfig({displayName:"styled__StatusBanner",componentId:"sc-f1e0290a-10"})`
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
`,R=x.default.span.withConfig({displayName:"styled__TurnDot",componentId:"sc-f1e0290a-12"})`
  display: inline-block;

  width: 14px;
  height: 14px;

  background: ${({$player:e})=>"black"===e?"radial-gradient(circle at 35% 35%, #555 0%, #1a1a1a 70%, #000 100%)":"radial-gradient(circle at 35% 35%, #fff 0%, #e0e0e0 70%, #b8b8b8 100%)"};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`,A=x.default.div.withConfig({displayName:"styled__BoardWrapper",componentId:"sc-f1e0290a-13"})`
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
`,F=x.default.div.withConfig({displayName:"styled__BottomBar",componentId:"sc-f1e0290a-19"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  width: 100%;
  max-width: 580px;
`,z=x.default.button.withConfig({displayName:"styled__ActionButton",componentId:"sc-f1e0290a-20"})`
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
`;e.s(["default",0,function(){let[e,l]=(0,r.useState)(a),[s,f]=(0,r.useState)("black"),[d,y]=(0,r.useState)("ai"),[x,w]=(0,r.useState)("normal"),[_,V]=(0,r.useState)("black"),[H,G]=(0,r.useState)([]),[K,W]=(0,r.useState)("ready"),[q,X]=(0,r.useState)(null),[Y,Z]=(0,r.useState)(!1),[J,Q]=(0,r.useState)(!1),[ee,et]=(0,r.useState)(null),[er,en]=(0,r.useState)(!1),ei=(0,r.useRef)(null),eo=(0,r.useCallback)((e=d,t=_)=>{ei.current&&clearTimeout(ei.current);let r=a();if(l(r),G([]),X(null),en(!1),et(null),"ai"===e&&"white"===t){let e=Math.floor(7.5);r[e][e]="black",l([...r.map(e=>[...e])]),G([{row:e,col:e,player:"black",turnNumber:1}]),f("white"),W("playing")}else f("black"),W("ready")},[d,_]);(0,r.useEffect)(()=>{if("ai"!==d||"black_win"===K||"white_win"===K||"draw"===K)return;let t="black"===_?"white":"black";return s===t&&(en(!0),ei.current=setTimeout(()=>{let r=function(e,t,r){let n=g(e);if(0===n.length){let e=Math.floor(7.5);return{row:e,col:e}}let i=n.map(r=>({...r,score:p(e,r.row,r.col,t)}));if(i.sort((e,t)=>t.score-e.score),i[0].score>=85e4)return i[0];if("easy"===r){let e=Math.floor(Math.random()*Math.min(i.length,5));return i[e]}if("normal"===r){let e=i[0].score,t=i.filter(t=>t.score>=.96*e);return t[Math.floor(Math.random()*t.length)]}let o="black"===t?"white":"black",a=i.slice(0,10),l=a[0],s=-1/0;for(let r of a){e[r.row][r.col]=t;let n=function e(t,r,n,i,o,a,l){let s="black"===a?"white":"black";if(0===r)return 0;let c=g(t);if(0===c.length)return 0;let u=c.map(e=>({...e,score:p(t,e.row,e.col,a)}));if(u.sort((e,t)=>t.score-e.score),u[0].score>=15e6)return o?1e7+1e3*r:-1e7-1e3*r;let f=u.slice(0,10);if(o){let o=-1/0;for(let c of f){t[c.row][c.col]=a;let u=e(t,r-1,n,i,!1,s,l);t[c.row][c.col]=null;let f=u+.1*c.score;if(o=Math.max(o,f),i<=(n=Math.max(n,f)))break}return o}{let o=1/0;for(let c of f){t[c.row][c.col]=a;let u=e(t,r-1,n,i,!0,s,l);t[c.row][c.col]=null;let f=u-.1*c.score;if(o=Math.min(o,f),(i=Math.min(i,f))<=n)break}return o}}(e,3,-1/0,1/0,!1,o,t)+r.score;e[r.row][r.col]=null,n>s&&(s=n,l=r)}return l}(e,t,x);l(e=>{let n=e.map(e=>[...e]);return n[r.row][r.col]=t,n}),b(J);let n=H.length+1;G(e=>[...e,{row:r.row,col:r.col,player:t,turnNumber:n}]);let i=c(e,r.row,r.col);i?(X(i),W("black"===t?"black_win":"white_win"),m(J)):u(e)?W("draw"):(f(_),W("playing")),en(!1)},350)),()=>{ei.current&&clearTimeout(ei.current)}},[e,x,d,K,H.length,J,s,_]);let ea=H.length>0?H[H.length-1]:null;return(0,t.jsxs)(v,{children:[(0,t.jsxs)(n.default,{children:[(0,t.jsx)("title",{children:"오목 (Gomoku) — Everything AI Have"}),(0,t.jsx)("meta",{name:"description",content:"AI와 실력을 겨루는 스마트 오목 게임. 초급·중급·고급 난이도 지원 및 2인 대전 모드를 제공합니다."}),(0,t.jsx)("meta",{property:"og:type",content:"website"}),(0,t.jsx)("meta",{property:"og:title",content:"오목 (Gomoku) — Everything AI Have"}),(0,t.jsx)("meta",{property:"og:description",content:"AI와 실력을 겨루는 스마트 오목 게임. 초급·중급·고급 난이도 지원."})]}),(0,t.jsxs)(k,{children:[(0,t.jsx)(O,{children:(0,t.jsx)(T,{children:"오목 — GOMOKU"})}),(0,t.jsx)(i.default,{href:"/",passHref:!0,legacyBehavior:!0,children:(0,t.jsx)(j,{as:"a",children:"← 홈으로"})})]}),(0,t.jsxs)(C,{children:[(0,t.jsxs)(E,{children:[(0,t.jsxs)(P,{children:[(0,t.jsx)(N,{$active:"ai"===d,onClick:()=>{y("ai"),eo("ai",_)},children:"🤖 AI 대전"}),(0,t.jsx)(N,{$active:"pvp"===d,onClick:()=>{y("pvp"),eo("pvp",_)},children:"👥 2인 대전"})]}),"ai"===d&&(0,t.jsx)(P,{children:["easy","normal","hard"].map(e=>(0,t.jsxs)(N,{$active:x===e,onClick:()=>w(e),children:["easy"===e&&"초급","normal"===e&&"중급","hard"===e&&"고급"]},e))}),"ai"===d&&(0,t.jsxs)(P,{children:[(0,t.jsx)(N,{$active:"black"===_,onClick:()=>{V("black"),eo("ai","black")},title:"흑(선공)",children:"⚫ 선공"}),(0,t.jsx)(N,{$active:"white"===_,onClick:()=>{V("white"),eo("ai","white")},title:"백(후공)",children:"⚪ 후공"})]}),(0,t.jsxs)("div",{style:{display:"inline-flex",gap:"6px"},children:[(0,t.jsx)(I,{$active:Y,onClick:()=>Z(!Y),title:"수순 번호 표시",children:"🔢 번호"}),(0,t.jsx)(I,{$active:!J,onClick:()=>Q(!J),title:"사운드 온/오프",children:J?"🔇":"🔊"})]})]}),(0,t.jsxs)(S,{$winner:K.includes("win"),children:[(0,t.jsxs)(M,{children:[(0,t.jsx)(R,{$player:s}),(0,t.jsx)("span",{children:"black_win"===K?"ai"===d?"black"===_?"🎉 승리하셨습니다! (흑 승)":"💥 AI가 승리했습니다! (흑 승)":"🎉 흑돌(Black) 승리!":"white_win"===K?"ai"===d?"white"===_?"🎉 승리하셨습니다! (백 승)":"💥 AI가 승리했습니다! (백 승)":"🎉 백돌(White) 승리!":"draw"===K?"🤝 무승부입니다!":er?"🤖 AI가 수를 생각하는 중…":"ai"===d?s===_?"당신의 차례입니다":"상대방 차례입니다":"black"===s?"흑돌 차례입니다":"백돌 차례입니다"})]}),(0,t.jsxs)("span",{style:{fontSize:"12px",color:"#b09e8f"},children:[H.length,"수 진행 중"]})]})]}),(0,t.jsxs)(A,{children:[(0,t.jsxs)(L,{viewBox:"0 0 1500 1500",children:[Array.from({length:15}).map((e,r)=>{let n=50+100*r;return(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:50,y1:n,x2:1450,y2:n,stroke:"#5c3c15",strokeWidth:"3.2"}),(0,t.jsx)("line",{x1:n,y1:50,x2:n,y2:1450,stroke:"#5c3c15",strokeWidth:"3.2"})]},r)}),o.map((e,r)=>(0,t.jsx)("circle",{cx:50+100*e.col,cy:50+100*e.row,r:"8",fill:"#5c3c15"},r))]}),(0,t.jsx)($,{$size:15,children:e.map((r,n)=>r.map((r,i)=>{let o,a=ea?.row===n&&ea?.col===i,p=!!q&&q.line.some(e=>e.row===n&&e.col===i),g=(o=H.find(e=>e.row===n&&e.col===i))?o.turnNumber:null,y=ee?.row===n&&ee?.col===i&&null===r&&!er&&!K.includes("win");return(0,t.jsxs)(B,{onClick:()=>((t,r)=>{if(null!==e[t][r]||"black_win"===K||"white_win"===K||"draw"===K||"ai"===d&&(s!==_||er))return;let n=e.map(e=>[...e]);n[t][r]=s,l(n),b(J);let i=H.length+1;G([...H,{row:t,col:r,player:s,turnNumber:i}]);let o=c(n,t,r);if(o){X(o),W("black"===s?"black_win":"white_win"),m(J);return}u(n)?W("draw"):(f("black"===s?"white":"black"),W("playing"))})(n,i),onMouseEnter:()=>et({row:n,col:i}),onMouseLeave:()=>et(null),children:[r&&(0,t.jsx)(D,{$player:r,$isLast:a,$isWinLine:p,children:Y&&g}),y&&(0,t.jsx)(U,{$player:s})]},`${n}-${i}`)}))})]}),(0,t.jsxs)(F,{children:[(0,t.jsx)(z,{$variant:"secondary",onClick:()=>{if(0===H.length||er)return;let e=1;"ai"===d&&(e=H.length>=2?2:1);let t=H.slice(0,H.length-e),r=a();for(let e of t)r[e.row][e.col]=e.player;l(r),G(t),X(null),0===t.length?(f("black"),W("ready")):(f("black"===t[t.length-1].player?"white":"black"),W("playing")),function(e=!1){if(e)return;let t=h();if(t)try{let e=t.currentTime,r=t.createOscillator(),n=t.createGain();r.type="sine",r.frequency.setValueAtTime(350,e),r.frequency.exponentialRampToValueAtTime(220,e+.08),n.gain.setValueAtTime(.2,e),n.gain.exponentialRampToValueAtTime(.001,e+.08),r.connect(n),n.connect(t.destination),r.start(e),r.stop(e+.09)}catch{}}(J)},disabled:0===H.length||er,children:"↩️ 무르기"}),(0,t.jsx)(z,{$variant:"primary",onClick:()=>eo(),children:"🔄 다시 시작"})]})]})}],40941)},97151,(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/o",()=>e.r(40941)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/o"])})},48761,e=>{e.v(t=>Promise.all(["static/chunks/0ey~yy8oeyp~5.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/0599p99vu8fk5.js"].map(t=>e.l(t))).then(()=>t(79466)))}]);