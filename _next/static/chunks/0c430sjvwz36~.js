(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,89129,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return _},NormalizeError:function(){return y},PageNotFoundError:function(){return x},SP:function(){return g},ST:function(){return m},WEB_VITALS:function(){return o},execOnce:function(){return a},getDisplayName:function(){return u},getLocationOrigin:function(){return d},getURL:function(){return c},isAbsoluteUrl:function(){return s},isResSent:function(){return f},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return k}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>l.test(e);function d(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=d();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let g="u">typeof performance,m=g&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class y extends Error{}class x extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class _ extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function k(e){return JSON.stringify({message:e.message,stack:e.stack})}},71914,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useIntersection",{enumerable:!0,get:function(){return s}});let n=e.r(91788),i=e.r(99604),o="function"==typeof IntersectionObserver,a=new Map,l=[];function s({rootRef:e,rootMargin:t,disabled:r}){let d=r||!o,[c,u]=(0,n.useState)(!1),f=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{f.current=e},[]);return(0,n.useEffect)(()=>{if(o){if(d||c)return;let r=f.current;if(r&&r.tagName)return function(e,t,r){let{id:n,observer:i,elements:o}=function(e){let t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let i=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:i},l.push(r),a.set(r,t),t}(r);return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),a.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}(r,e=>e&&u(e),{root:e?.current,rootMargin:t})}else if(!c){let e=(0,i.requestIdleCallback)(()=>u(!0));return()=>(0,i.cancelIdleCallback)(e)}},[d,t,e,c,f.current]),[p,c,(0,n.useCallback)(()=>{u(!1)},[])]}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},54471,(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getDomainLocale",{enumerable:!0,get:function(){return n}}),e.r(70090),("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},63230,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return i}});let n=e.r(91788);function i(e,t){let r=(0,n.useRef)(null),i=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(r.current=o(e,n)),t&&(i.current=o(t,n))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},48735,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},39149,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return j},useLinkStatus:function(){return v}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let o=e.r(52456),a=e.r(91398),l=o._(e.r(91788)),s=e.r(60472),d=e.r(71112),c=e.r(28169),u=e.r(89129),f=e.r(14862),p=e.r(25479),h=e.r(71914),g=e.r(54471),m=e.r(44113),b=e.r(63230);e.r(48735);let y=new Set;function x(e,t,r,n){if(!("u"<typeof window)&&(0,d.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let i=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(y.has(i))return;y.add(i)}e.prefetch(t,r,n).catch(e=>{})}}function _(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let w=l.default.forwardRef(function(e,t){let r,n,{href:i,as:o,children:c,prefetch:y=null,passHref:w,replace:k,shallow:v,scroll:j,locale:C,onClick:I,onNavigate:O,onMouseEnter:E,onTouchStart:D,legacyBehavior:S=!1,transitionTypes:T,...L}=e;r=c,S&&("string"==typeof r||"number"==typeof r)&&(r=(0,a.jsx)("a",{children:r}));let N=l.default.useContext(p.RouterContext),$=!1!==y,{href:P,as:M}=l.default.useMemo(()=>{if(!N){let e=_(i);return{href:e,as:o?_(o):e}}let[e,t]=(0,s.resolveHref)(N,i,!0);return{href:e,as:o?(0,s.resolveHref)(N,o):t||e}},[N,i,o]),A=l.default.useRef(P),R=l.default.useRef(M);S&&(n=l.default.Children.only(r));let B=S?n&&"object"==typeof n&&n.ref:t,[U,z,F]=(0,h.useIntersection)({rootMargin:"200px"}),H=l.default.useCallback(e=>{(R.current!==M||A.current!==P)&&(F(),R.current=M,A.current=P),U(e)},[M,P,F,U]),X=(0,b.useMergedRef)(H,B);l.default.useEffect(()=>{!N||z&&$&&x(N,P,M,{locale:C})},[M,P,z,C,$,N?.locale,N]);let G={ref:X,onClick(e){S||"function"!=typeof I||I(e),S&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),!N||e.defaultPrevented||function(e,t,r,n,i,o,a,l,s){let c,{nodeName:u}=e.currentTarget;if(!("A"===u.toUpperCase()&&((c=e.currentTarget.getAttribute("target"))&&"_self"!==c||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which)||e.currentTarget.hasAttribute("download"))){if(!(0,d.isLocalURL)(r)){i&&(e.preventDefault(),location.replace(r));return}e.preventDefault(),(()=>{if(s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let e=a??!0;"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:o,locale:l,scroll:e}):t[i?"replace":"push"](n||r,{scroll:e})})()}}(e,N,P,M,k,v,j,C,O)},onMouseEnter(e){S||"function"!=typeof E||E(e),S&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),N&&x(N,P,M,{locale:C,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){S||"function"!=typeof D||D(e),S&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),N&&x(N,P,M,{locale:C,priority:!0,bypassPrefetchedCheck:!0})}};if((0,u.isAbsoluteUrl)(M))G.href=M;else if(!S||w||"a"===n.type&&!("href"in n.props)){let e=void 0!==C?C:N?.locale;G.href=N?.isLocaleDomain&&(0,g.getDomainLocale)(M,e,N?.locales,N?.domainLocales)||(0,m.addBasePath)((0,f.addLocale)(M,e,N?.defaultLocale))}return S?l.default.cloneElement(n,G):(0,a.jsx)("a",{...L,...G,children:r})}),k=(0,l.createContext)({pending:!1}),v=()=>(0,l.useContext)(k),j=w;("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},41158,(e,t,r)=>{t.exports=e.r(39149)},75907,e=>{"use strict";function t(){return(t=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>t])},17431,(e,t,r)=>{"use strict";var n=e.r(91788);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var a={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},l=Symbol.for("react.portal"),s=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,r.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(i(299));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},r.flushSync=function(e){var t=s.T,r=a.p;try{if(s.T=null,a.p=2,e)return e()}finally{s.T=t,a.p=r,a.d.f()}},r.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,a.d.C(e,t))},r.prefetchDNS=function(e){"string"==typeof e&&a.d.D(e)},r.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var r=t.as,n=d(r,t.crossOrigin),i="string"==typeof t.integrity?t.integrity:void 0,o="string"==typeof t.fetchPriority?t.fetchPriority:void 0;"style"===r?a.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:n,integrity:i,fetchPriority:o}):"script"===r&&a.d.X(e,{crossOrigin:n,integrity:i,fetchPriority:o,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},r.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var r=d(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},r.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var r=t.as,n=d(r,t.crossOrigin);a.d.L(e,r,{crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},r.preloadModule=function(e,t){if("string"==typeof e)if(t){var r=d(t.as,t.crossOrigin);a.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},r.requestFormReset=function(e){a.d.r(e)},r.unstable_batchedUpdates=function(e,t){return e(t)},r.useFormState=function(e,t,r){return s.H.useFormState(e,t,r)},r.useFormStatus=function(){return s.H.useHostTransitionStatus()},r.version="19.2.4"},30943,(e,t,r)=>{"use strict";!function e(){if("u">typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),t.exports=e.r(17431)},11829,(e,t,r)=>{"use strict";function n(e,t){var r=e.length;for(e.push(t);0<r;){var n=r-1>>>1,i=e[n];if(0<a(i,t))e[n]=t,e[r]=i,r=n;else break}}function i(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;for(var n=0,i=e.length,o=i>>>1;n<o;){var l=2*(n+1)-1,s=e[l],d=l+1,c=e[d];if(0>a(s,r))d<i&&0>a(c,s)?(e[n]=c,e[d]=r,n=d):(e[n]=s,e[l]=r,n=l);else if(d<i&&0>a(c,r))e[n]=c,e[d]=r,n=d;else break}}return t}function a(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if(r.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var l,s=performance;r.unstable_now=function(){return s.now()}}else{var d=Date,c=d.now();r.unstable_now=function(){return d.now()-c}}var u=[],f=[],p=1,h=null,g=3,m=!1,b=!1,y=!1,x=!1,_="function"==typeof setTimeout?setTimeout:null,w="function"==typeof clearTimeout?clearTimeout:null,k="u">typeof setImmediate?setImmediate:null;function v(e){for(var t=i(f);null!==t;){if(null===t.callback)o(f);else if(t.startTime<=e)o(f),t.sortIndex=t.expirationTime,n(u,t);else break;t=i(f)}}function j(e){if(y=!1,v(e),!b)if(null!==i(u))b=!0,C||(C=!0,l());else{var t=i(f);null!==t&&N(j,t.startTime-e)}}var C=!1,I=-1,O=5,E=-1;function D(){return!!x||!(r.unstable_now()-E<O)}function S(){if(x=!1,C){var e=r.unstable_now();E=e;var t=!0;try{e:{b=!1,y&&(y=!1,w(I),I=-1),m=!0;var n=g;try{t:{for(v(e),h=i(u);null!==h&&!(h.expirationTime>e&&D());){var a=h.callback;if("function"==typeof a){h.callback=null,g=h.priorityLevel;var s=a(h.expirationTime<=e);if(e=r.unstable_now(),"function"==typeof s){h.callback=s,v(e),t=!0;break t}h===i(u)&&o(u),v(e)}else o(u);h=i(u)}if(null!==h)t=!0;else{var d=i(f);null!==d&&N(j,d.startTime-e),t=!1}}break e}finally{h=null,g=n,m=!1}}}finally{t?l():C=!1}}}if("function"==typeof k)l=function(){k(S)};else if("u">typeof MessageChannel){var T=new MessageChannel,L=T.port2;T.port1.onmessage=S,l=function(){L.postMessage(null)}}else l=function(){_(S,0)};function N(e,t){I=_(function(){e(r.unstable_now())},t)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(e){e.callback=null},r.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<e?Math.floor(1e3/e):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(e){switch(g){case 1:case 2:case 3:var t=3;break;default:t=g}var r=g;g=t;try{return e()}finally{g=r}},r.unstable_requestPaint=function(){x=!0},r.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=g;g=e;try{return t()}finally{g=r}},r.unstable_scheduleCallback=function(e,t,o){var a=r.unstable_now();switch(o="object"==typeof o&&null!==o&&"number"==typeof(o=o.delay)&&0<o?a+o:a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=0x3fffffff;break;case 4:s=1e4;break;default:s=5e3}return s=o+s,e={id:p++,callback:t,priorityLevel:e,startTime:o,expirationTime:s,sortIndex:-1},o>a?(e.sortIndex=o,n(f,e),null===i(u)&&e===i(f)&&(y?(w(I),I=-1):y=!0,N(j,o-a))):(e.sortIndex=s,n(u,e),b||m||(b=!0,C||(C=!0,l()))),e},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(e){var t=g;return function(){var r=g;g=t;try{return e.apply(this,arguments)}finally{g=r}}}},52659,(e,t,r)=>{"use strict";t.exports=e.r(11829)},59858,85103,e=>{"use strict";let t={bed:{width:2e3,depth:1400,height:700},chair:{width:600,depth:600,height:850},table:{width:1400,depth:800,height:750},sofa:{width:1900,depth:800,height:750},bookshelf:{width:900,depth:300,height:1800},shelf:{width:1e3,depth:350,height:1800},washingMachine:{width:600,depth:600,height:850},refrigerator:{width:900,depth:700,height:1800},door:{width:900,depth:240,height:2e3}},r={fountain:{width:1200,depth:1200,height:1500},donkey:{width:348,depth:1419,height:1200},dog:{width:416,depth:1618,height:1200},couch:{width:2080,depth:757,height:800},badDouble:{width:892,depth:1050,height:350},bookcase2:{width:983,depth:355,height:1800},chair2:{width:473,depth:427,height:850},door2:{width:1125,depth:152,height:2e3},clothesDryer:{width:660,depth:643,height:850},fridge:{width:1427,depth:679,height:1800},sink:{width:746,depth:781,height:850},stove:{width:812,depth:850,height:850}};function n(e,t,r){let n=Math.cos(r),i=Math.sin(r);return[e*n-t*i,e*i+t*n]}function i(e){let{halfW:i,halfH:o,halfD:a}=function(e){if("room"===e.kind){let t=100*(!1!==e.hasWalls);return{halfW:e.width/2+t,halfH:e.height/2,halfD:e.depth/2+t}}if("model"===e.kind){let t=r[e.modelType];return{halfW:(e.width||t.width)/2,halfH:(e.height||t.height)/2,halfD:(e.depth||t.depth)/2}}let n=t[e.furnitureType];return{halfW:(e.width||n.width)/2,halfH:(e.height||n.height)/2,halfD:(e.depth||n.depth)/2}}(e),l=[[-i,-o,-a],[i,-o,-a],[i,o,-a],[-i,o,-a],[-i,-o,a],[i,-o,a],[i,o,a],[-i,o,a]].map(([t,r,i])=>{let[o,a]=n(t,i,e.rotation[1]);return[o+e.position[0],r+e.position[1],a+e.position[2]]}),s=l.map(([e])=>e),d=l.map(([,e])=>e),c=l.map(([,,e])=>e);return{minX:Math.min(...s),maxX:Math.max(...s),minY:Math.min(...d),maxY:Math.max(...d),minZ:Math.min(...c),maxZ:Math.max(...c)}}function o(e,t,r=0){return e.minX<t.maxX-r&&e.maxX>t.minX+r&&e.minY<t.maxY&&e.maxY>t.minY&&e.minZ<t.maxZ-r&&e.maxZ>t.minZ+r}function a(e,t,r,n,a){let l=i({id:"candidate",kind:"room",name:"",width:r,depth:n,height:3,position:[e,0,t],rotation:[0,0,0],color:""});return!a.some(e=>o(l,i(e),0))}function l(e,t,r,n){let i=Math.max(r,n)+200;for(let[o,l]of function*(){yield[e[0],e[2]];let t=1;for(;t<=100;){for(let r=-t+1;r<=t;r++)yield[e[0]+r*i,e[2]-t*i];for(let r=-t+1;r<=t;r++)yield[e[0]+t*i,e[2]+r*i];for(let r=t-1;r>=-t;r--)yield[e[0]+r*i,e[2]+t*i];for(let r=t-1;r>=-t;r--)yield[e[0]-t*i,e[2]+r*i];t++}}())if(a(o,l,r,n,t))return[o,0,l];return[e[0],0,e[2]]}e.s(["ANIMATION_LABELS",0,{Idle:"대기",Idle_2:"대기2",Idle_Headlow:"대기(고개 숙임)",Idle_2_HeadLow:"대기(고개 숙임)",Walk:"걷기",Gallop:"질주",Gallop_Jump:"질주 점프",Jump_toIdle:"점프 후 대기",Jump_ToIdle:"점프 후 대기",Eating:"먹기",Attack_Headbutt:"공격(박치기)",Attack_Kick:"공격(차기)",Attack:"공격",Death:"죽음",Idle_HitReact_Left:"피격 반응(좌)",Idle_HitReact_Right:"피격 반응(우)"},"FURNITURE_DEFAULT_DIMENSIONS",0,t,"MODEL_ANIMATIONS",0,{donkey:["Idle","Idle_2","Idle_Headlow","Walk","Gallop","Gallop_Jump","Jump_toIdle","Eating","Attack_Headbutt","Attack_Kick","Death","Idle_HitReact_Left","Idle_HitReact_Right"],dog:["Idle","Idle_2","Idle_2_HeadLow","Walk","Gallop","Gallop_Jump","Jump_ToIdle","Eating","Attack","Death","Idle_HitReact_Left","Idle_HitReact_Right"]},"MODEL_DEFAULT_DIMENSIONS",0,r,"MODEL_LABELS",0,{fountain:"분수대",donkey:"당나귀",dog:"강아지",couch:"소파(GLB)",badDouble:"침대 더블(GLB)",bookcase2:"책장2",chair2:"의자2",door2:"문2",clothesDryer:"건조기",fridge:"냉장고(GLB)",sink:"싱크대",stove:"스토브"},"MODE_LABELS",0,{translate:"이동",rotate:"회전",scale:"크기"},"TYPE_LABELS",0,{bed:"침대",chair:"의자",table:"테이블",sofa:"소파",bookshelf:"책장",shelf:"선반",washingMachine:"세탁기",refrigerator:"냉장고",door:"문"},"WALL_THICKNESS",0,100],85103),e.s(["findNonOverlappingRoomPosition",0,function(e,t,r,n=[0,0,0],i=[0,0,0]){if(0===e.length)return[n[0],0,n[2]];if(1===e.length){let n=e[0];return l([(i[0]+n.position[0])/2,0,(i[2]+n.position[2])/2],e,t,r)}let o=e.reduce((e,t)=>t.position[0]**2+t.position[2]**2<e.position[0]**2+e.position[2]**2?t:e,e[0]),[s,,d]=o.position;for(let[n,i]of[[s+o.width/2+t/2+200,d],[s-o.width/2-t/2-200,d],[s,d+o.depth/2+r/2+200],[s,d-o.depth/2-r/2-200]])if(a(n,i,t,r,e))return[n,0,i];return l([s,0,d],e,t,r)},"resolveCollisions",0,function(e,t,r,n){let a=r,l=n,s={...e,position:[a,e.position[1],l]};for(let r=0;r<10;r++){let r=!1;for(let n of t){if(n.id===e.id)continue;let t=i(s),d=i(n),c=("room"===s.kind&&n.kind,0);if(o(t,d,c)){r=!0;let n=Math.min(t.maxX-d.minX,d.maxX-t.minX),i=Math.min(t.maxZ-d.minZ,d.maxZ-t.minZ),o=Math.max(0,n-c),u=Math.max(0,i-c);o>0&&(0===u||o<u)?a+=((t.minX+t.maxX)/2<(d.minX+d.maxX)/2?-1:1)*(o+.01):u>0&&(l+=((t.minZ+t.maxZ)/2<(d.minZ+d.maxZ)/2?-1:1)*(u+.01)),s.position=[a,e.position[1],l]}}if(!r)break}return{x:a,z:l}},"rotatePointY",0,n],59858)},61592,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"LoadableContext",{enumerable:!0,get:function(){return n}});let n=e.r(41705)._(e.r(91788)).default.createContext(null)},52414,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return f}});let n=e.r(41705)._(e.r(91788)),i=e.r(61592),o=[],a=[],l=!1;function s(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class d{constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}}function c(t){return function(t,r){let s=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},r),c=null;function u(){if(!c){let e=new d(t,s);c={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return c.promise()}if("u"<typeof window&&o.push(u),!l&&"u">typeof window){let t=s.webpack&&"function"==typeof e.t.resolveWeak?s.webpack():s.modules;t&&a.push(e=>{for(let r of t)if(e.includes(r))return u()})}function f(e,t){let r;u(),(r=n.default.useContext(i.LoadableContext))&&Array.isArray(s.modules)&&s.modules.forEach(e=>{r(e)});let o=n.default.useSyncExternalStore(c.subscribe,c.getCurrentValue,c.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:c.retry}),[]),n.default.useMemo(()=>{var t;return o.loading||o.error?n.default.createElement(s.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:c.retry}):o.loaded?n.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return f.preload=()=>u(),f.displayName="LoadableComponent",n.default.forwardRef(f)}(s,t)}function u(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return u(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{u(o).then(e,t)}),c.preloadReady=(e=[])=>new Promise(t=>{let r=()=>(l=!0,t());u(a,e).then(r,r)}),"u">typeof window&&(window.__NEXT_PRELOADREADY=c.preloadReady);let f=c},25167,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return u},noSSR:function(){return c}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let o=e.r(41705),a=e.r(91398);e.r(91788);let l=o._(e.r(52414)),s="u"<typeof window;function d(e){return{default:e?.default||e}}function c(e,t){if(delete t.webpack,delete t.modules,!s)return e(t);let r=t.loading;return()=>(0,a.jsx)(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function u(e,t){let r=l.default,n={loading:({error:e,isLoading:t,pastDelay:r})=>null};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e});let i=(n={...n,...t}).loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:()=>null!=i?i().then(d):Promise.resolve(d(()=>null))}):(delete n.webpack,delete n.modules,c(r,n))}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},68489,(e,t,r)=>{t.exports=e.r(25167)},83594,e=>{"use strict";var t=e.i(91398),r=e.i(91788),n=e.i(68489),i=e.i(58678),o=e.i(41158),a=e.i(24005),l=e.i(60814);let s=l.default.div.withConfig({displayName:"styled__Container",componentId:"sc-859c6c55-0"})`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #0a0a0f;
  overflow: hidden;

  &::before {
    position: absolute;
    inset: 0;
    z-index: 0;
    background-image:
      linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    content: "";
    pointer-events: none;
  }
`,d=l.default.header.withConfig({displayName:"styled__Header",componentId:"sc-859c6c55-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 8px 16px;
  color: #ffffff;
  background: rgba(10, 10, 15, 0.9);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(0, 255, 255, 0.1);

  h1 {
    margin: 0;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #fff;

    span {
      background: linear-gradient(135deg, #00ffff, #ff00ff);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  @media (max-width: 768px) {
    padding: 8px 12px;

    h1 {
      font-size: 15px;
    }

    p {
      display: none;
    }

    & > div {
      flex: 1 1 auto;
      min-width: 0;
    }
  }
`,c=l.default.button.withConfig({displayName:"styled__MenuButton",componentId:"sc-859c6c55-2"})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  color: #00ffff;
  font-size: 18px;
  background: rgba(0, 255, 255, 0.06);
  border: 1px solid rgba(0, 255, 255, 0.15);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 255, 255, 0.12);
    border-color: rgba(0, 255, 255, 0.3);
    box-shadow: 0 0 12px rgba(0, 255, 255, 0.15);
  }

  @media (min-width: 769px) {
    display: none;
  }
`,u=l.default.button.withConfig({displayName:"styled__HeaderToggleButton",componentId:"sc-859c6c55-3"})`
  display: none;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  color: #00ffff;
  font-size: 18px;
  background: rgba(0, 255, 255, 0.06);
  border: 1px solid rgba(0, 255, 255, 0.15);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 255, 255, 0.12);
    border-color: rgba(0, 255, 255, 0.3);
    box-shadow: 0 0 12px rgba(0, 255, 255, 0.15);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`,f=l.default.div.withConfig({displayName:"styled__Panel",componentId:"sc-859c6c55-4"})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;

  position: absolute;
  top: 50px;
  left: 0;
  bottom: 0;
  z-index: 10;

  width: 240px;
  padding: 16px;
  color: #ffffff;
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border-radius: 0;
  border-right: 1px solid rgba(0, 255, 255, 0.08);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
`,p=(0,l.default)(f).withConfig({displayName:"styled__LeftPanel",componentId:"sc-859c6c55-5"})`
  @media (max-width: 768px) {
    width: 80vw;
    max-width: 280px;
    transition: transform 0.2s ease;
    transform: translateX(${e=>e.$open?"0":"-100%"});
  }
`;(0,l.default)(f).withConfig({displayName:"styled__RightPanel",componentId:"sc-859c6c55-6"})`
  right: 20px;
`;let h=l.default.hr.withConfig({displayName:"styled__Divider",componentId:"sc-859c6c55-7"})`
  margin: 0;
  border: none;
  border-top: 1px solid rgba(0, 255, 255, 0.08);
`,g=l.default.h2.withConfig({displayName:"styled__SectionTitle",componentId:"sc-859c6c55-8"})`
  margin: 0 0 8px 0;
  font-size: 14px;
  font-weight: 600;
  color: rgba(0, 255, 255, 0.7);
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 1px;
  text-transform: uppercase;
`,m=l.default.div.withConfig({displayName:"styled__CollapseAllGroup",componentId:"sc-859c6c55-9"})`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-left: auto;
`,b=l.default.button.withConfig({displayName:"styled__CollapseAllButton",componentId:"sc-859c6c55-10"})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  padding: 0;
  color: rgba(0, 255, 255, 0.4);
  font-size: 13px;
  line-height: 1;
  background: none;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    color: #00ffff;
    background: rgba(0, 255, 255, 0.05);
    border-color: rgba(0, 255, 255, 0.2);
  }
`,y=l.default.div.withConfig({displayName:"styled__ButtonGroup",componentId:"sc-859c6c55-11"})`
  display: flex;
  flex-wrap: ${e=>e.$nowrap?"nowrap":"wrap"};
  gap: 8px;
`,x=l.default.button.withConfig({displayName:"styled__Button",componentId:"sc-859c6c55-12"})`
  flex: ${e=>e.$compact?"0 0 auto":"1 1 auto"};
  min-width: ${e=>e.$compact?"0":"60px"};
  padding: 8px 12px;
  color: ${e=>e.$disabled?"rgba(255, 255, 255, 0.2)":e.$danger?"#ff4444":e.$active?"#00ffff":"rgba(255, 255, 255, 0.7)"};
  font-size: 13px;
  font-weight: 500;
  text-shadow: ${e=>e.$active?"0 0 8px rgba(0, 255, 255, 0.4)":"none"};
  background: ${e=>e.$disabled?"rgba(255, 255, 255, 0.03)":e.$danger?"rgba(255, 0, 0, 0.1)":e.$active?"rgba(0, 255, 255, 0.12)":"rgba(0, 255, 255, 0.03)"};
  border: 1px solid
    ${e=>e.$active?"rgba(0, 255, 255, 0.5)":e.$danger?"rgba(255, 0, 0, 0.3)":"rgba(0, 255, 255, 0.1)"};
  border-radius: 8px;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>e.$disabled?"rgba(255, 255, 255, 0.03)":e.$danger?"rgba(255, 0, 0, 0.15)":e.$active?"rgba(0, 255, 255, 0.18)":"rgba(0, 255, 255, 0.06)"};
    border-color: ${e=>e.$disabled?"rgba(0, 255, 255, 0.1)":e.$danger?"rgba(255, 0, 0, 0.5)":e.$active?"rgba(0, 255, 255, 0.7)":"rgba(0, 255, 255, 0.3)"};
    box-shadow: ${e=>e.$active?"0 0 16px rgba(0, 255, 255, 0.15)":"none"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,_=l.default.div.withConfig({displayName:"styled__ColorInputWrap",componentId:"sc-859c6c55-13"})`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden; /* 원하는 크기 */ /* 원형으로 설정 */
`,w=l.default.input.withConfig({displayName:"styled__ColorInput",componentId:"sc-859c6c55-14"})`

  position: absolute;
  top: -50%;
  left: -50%;
  width: 200% !important;
  height: 200% !important;
  background: none;
  border: none;
  cursor: pointer;
  /* width: 100%;
  height: 36px;
  min-height: 36px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: transparent; */
`,k=l.default.input.withConfig({displayName:"styled__NumberInput",componentId:"sc-859c6c55-15"})`
  width: 100%;
  padding: 8px 10px;
  color: #ffffff;
  font-size: 13px;
  background: rgba(0, 255, 255, 0.03);
  border: 1px solid rgba(0, 255, 255, 0.15);
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: rgba(0, 255, 255, 0.4);
    box-shadow: 0 0 8px rgba(0, 255, 255, 0.1);
  }
`,v=l.default.input.withConfig({displayName:"styled__TextInput",componentId:"sc-859c6c55-16"})`
  width: 100%;
  padding: 8px 10px;
  color: #ffffff;
  font-size: 13px;
  background: rgba(0, 255, 255, 0.03);
  border: 1px solid rgba(0, 255, 255, 0.15);
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: rgba(0, 255, 255, 0.4);
    box-shadow: 0 0 8px rgba(0, 255, 255, 0.1);
  }
`,j=l.default.div.withConfig({displayName:"styled__InputRow",componentId:"sc-859c6c55-17"})`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`;l.default.div.withConfig({displayName:"styled__DimField",componentId:"sc-859c6c55-18"})`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
`,l.default.span.withConfig({displayName:"styled__DimLabel",componentId:"sc-859c6c55-19"})`
  padding-left: 2px;
  font-size: 10px;
  font-weight: 700;
  color: #71717a;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;let C=l.default.div.withConfig({displayName:"styled__DimInputWrapper",componentId:"sc-859c6c55-20"})`
  flex: 0 0 auto;
  position: relative;

  input {
    width: 100%;
    padding-right: 24px;
    box-sizing: border-box;
  }
`,I=l.default.span.withConfig({displayName:"styled__DimInlineLabel",componentId:"sc-859c6c55-21"})`
  position: absolute;
  right: 8px;
  top: 50%;
  font-size: 10px;
  font-weight: 700;
  color: #52525b;
  text-transform: uppercase;
  transform: translateY(-50%);
  pointer-events: none;
  user-select: none;
`,O=l.default.div.withConfig({displayName:"styled__Hint",componentId:"sc-859c6c55-22"})`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.25);
  line-height: 1.5;
`,E=l.default.div.withConfig({displayName:"styled__List",componentId:"sc-859c6c55-23"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 8px;
`,D=l.default.div.withConfig({displayName:"styled__ListItem",componentId:"sc-859c6c55-24"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 6px 10px;
  color: ${e=>e.$selected?"#00ffff":"rgba(255, 255, 255, 0.7)"};
  font-size: 13px;
  text-shadow: ${e=>e.$selected?"0 0 8px rgba(0, 255, 255, 0.3)":"none"};
  background: ${e=>e.$selected?"rgba(0, 255, 255, 0.12)":"rgba(0, 255, 255, 0.02)"};

  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: ${e=>e.$dragOver?"1px solid rgba(0, 255, 255, 0.5)":"none"};

  ${e=>e.$indent&&`margin-left: ${10+16*e.$indent}px;`}

  &:hover {
    background: ${e=>e.$selected?"rgba(0, 255, 255, 0.18)":"rgba(0, 255, 255, 0.06)"};
  }

  ${e=>e.$tree&&`
    &::before {
      content: '';
      position: absolute;
      left: -12px;
      top: 50%;
      transform: translateY(-50%);
      width: 10px;
      height: 2px;
      background: rgba(0, 255, 255, 0.15);
    }
  `}
`,S=l.default.div.withConfig({displayName:"styled__RoomChildren",componentId:"sc-859c6c55-25"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 14px;
  padding-left: 12px;
  padding-top: 3px;
  padding-bottom: 3px;
  border-left: 2px solid rgba(0, 255, 255, 0.12);
  outline: ${e=>e.$dragOver?"1px dashed rgba(0, 255, 255, 0.4)":"none"};
  outline-offset: 2px;
  border-radius: 4px;

  ${e=>e.$empty&&`
    min-height: 28px;
    align-items: center;
    justify-content: center;
  `}
`,T=l.default.span.withConfig({displayName:"styled__ListItemType",componentId:"sc-859c6c55-26"})`
  font-size: 11px;
  color: rgba(0, 255, 255, 0.4);
`,L=l.default.button.withConfig({displayName:"styled__CollapseToggle",componentId:"sc-859c6c55-27"})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  padding: 0;
  color: rgba(0, 255, 255, 0.4);
  font-size: 10px;
  line-height: 1;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #00ffff;
  }
`,N=l.default.span.withConfig({displayName:"styled__RoomName",componentId:"sc-859c6c55-28"})`
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,$=l.default.div.withConfig({displayName:"styled__HeaderButtons",componentId:"sc-859c6c55-29"})`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    right: 0;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    min-width: 160px;
    padding: 12px;
    gap: 10px;
    background: rgba(10, 10, 15, 0.95);
    border: 1px solid rgba(0, 255, 255, 0.1);
    border-radius: 0 0 0 8px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    transform-origin: top right;
    transform: scaleY(${e=>e.$open?"1":"0"});
    opacity: ${e=>e.$open?"1":"0"};
    pointer-events: ${e=>e.$open?"auto":"none"};
    transition:
      transform 0.2s ease,
      opacity 0.2s ease;
    z-index: 20;

    & > button {
      width: 100%;
    }
  }
`,P=l.default.input.withConfig({displayName:"styled__OpacitySlider",componentId:"sc-859c6c55-30"})`
  width: 100%;
  cursor: pointer;
`,M=l.default.div.withConfig({displayName:"styled__Toolbar",componentId:"sc-859c6c55-31"})`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  position: absolute;
  top: 50px;
  left: 240px;
  right: 0px;
  z-index: 5;
  padding: 8px 14px;
  color: #ffffff;
  background: rgba(10, 10, 15, 0.5);
  border-bottom: 1px solid rgba(0, 255, 255, 0.06);

  @media (max-width: 768px) {
    left: 0;
    top: 52px;
    padding: 8px 10px;
  }
`;l.default.div.withConfig({displayName:"styled__ToolbarDivider",componentId:"sc-859c6c55-32"})`
  flex-shrink: 0;
  width: 1px;
  height: 22px;
  background: rgba(0, 255, 255, 0.1);
`;var A=e.i(59858),R=e.i(85103);let B=(0,n.default)(()=>e.A(17050),{loadableGenerated:{modules:[97220]},ssr:!1}),U=["bed","chair","table","sofa","bookshelf","shelf","washingMachine","refrigerator"],z=["fountain","donkey","dog","couch","badDouble","bookcase2","chair2","door2","clothesDryer","fridge","sink","stove"],F={bed:"#8b5cf6",chair:"#f59e0b",table:"#10b981",sofa:"#3b82f6",bookshelf:"#ec4899",shelf:"#14b8a6",washingMachine:"#94a3b8",refrigerator:"#64748b",door:"#92400e"},H={fountain:"#06b6d4",donkey:"#a78bfa",dog:"#fbbf24",couch:"#f59e0b",badDouble:"#ef4444",bookcase2:"#ec4899",chair2:"#f59e0b",door2:"#92400e",clothesDryer:"#94a3b8",fridge:"#64748b",sink:"#9ca3af",stove:"#4b5563"},X={position:[16e3,16e3,16e3],target:[0,0,0]},G="dtf-state",W={container:e=>({...e,width:"150px"}),control:e=>({...e,background:"rgba(0, 255, 255, 0.03)",borderColor:"rgba(0, 255, 255, 0.15)",borderRadius:"8px",minHeight:"34px",boxShadow:"none",cursor:"pointer",fontSize:"13px",":hover":{borderColor:"rgba(0, 255, 255, 0.3)"}}),singleValue:e=>({...e,color:"#ffffff"}),input:e=>({...e,color:"#ffffff"}),menu:e=>({...e,background:"rgba(10, 10, 15, 0.95)",border:"1px solid rgba(0, 255, 255, 0.15)",borderRadius:"8px",overflow:"hidden",zIndex:30}),option:(e,t)=>({...e,background:t.isSelected?"rgba(0, 255, 255, 0.15)":t.isFocused?"rgba(0, 255, 255, 0.06)":"transparent",color:t.isSelected?"#00ffff":"#ffffff",cursor:"pointer",fontSize:"13px"}),indicatorSeparator:e=>({...e,background:"rgba(0, 255, 255, 0.1)"}),dropdownIndicator:e=>({...e,color:"rgba(0, 255, 255, 0.4)"})},Y={id:`room-${Date.now()}`,kind:"room",name:"방 1",width:8e3,depth:8e3,height:3e3,position:[0,0,0],rotation:[0,0,0],color:"#a8afb3"};e.s(["default",0,function(){let[e,n]=(0,r.useState)([Y]),[l,f]=(0,r.useState)(null),[K,Z]=(0,r.useState)("translate"),[J,V]=(0,r.useState)(X),[q,Q]=(0,r.useState)(1),[ee,et]=(0,r.useState)(!1),[er,en]=(0,r.useState)(null),[ei,eo]=(0,r.useState)(!1),[ea,el]=(0,r.useState)(!1),[es,ed]=(0,r.useState)(!1),[ec,eu]=(0,r.useState)(!1),[ef,ep]=(0,r.useState)(()=>new Set),eh=(0,r.useRef)(null),eg=(0,r.useRef)(Y.id),em=(0,r.useRef)(null),eb=(0,r.useRef)(e),ey=(0,r.useRef)([]),ex=(0,r.useRef)([]),e_=(0,r.useRef)(null),ew=(0,r.useCallback)(()=>{eo(ey.current.length>0),el(ex.current.length>0)},[]),ek=(0,r.useCallback)(e=>{f(e),null===e&&Z("translate")},[]),ev=(0,r.useCallback)(e=>{ep(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},[]),ej=(0,r.useCallback)(e=>{ey.current.push(eb.current),ex.current=[],n(e),ew()},[ew]),eC=(0,r.useCallback)(()=>{if(0===ey.current.length)return;let e=eb.current,t=ey.current.pop();ex.current.push(e),n(t),ew()},[ew]),eI=(0,r.useCallback)(()=>{if(0===ex.current.length)return;let e=eb.current,t=ex.current.pop();ey.current.push(e),n(t),ew()},[ew]),eO=(0,r.useCallback)(()=>{let e=`room-${Date.now()}`,t=eb.current.filter(e=>"room"===e.kind),r=(0,A.findNonOverlappingRoomPosition)(t,8e3,8e3,J.target,J.position),n=eb.current.filter(e=>"room"===e.kind).length,i={id:e,kind:"room",name:`방 ${n+1}`,width:8e3,depth:8e3,height:3e3,position:r,rotation:[0,0,0],color:"#a8afb3"};ej([...eb.current,i]),ek(e)},[ej,ek,J]),eE=(0,r.useCallback)(()=>{let e=`room-${Date.now()}`,t=eb.current.filter(e=>"room"===e.kind),r=(0,A.findNonOverlappingRoomPosition)(t,2400,8e3,J.target,J.position),n=eb.current.filter(e=>"room"===e.kind&&!1===e.hasWalls).length,i={id:e,kind:"room",name:`공간 ${n+1}`,width:2400,depth:8e3,height:3e3,position:r,rotation:[0,0,0],color:"#a8afb3",hasWalls:!1};ej([...eb.current,i]),ek(e)},[ej,ek,J]),eD=(0,r.useCallback)(e=>{let t=`${e}-${Date.now()}`,r=eb.current.find(e=>e.id===l)??null,n=(()=>{if(r?.kind==="room")return r;if(eg.current){let e=eb.current.find(e=>"room"===e.kind&&e.id===eg.current);if(e)return e}return eb.current.find(e=>"room"===e.kind)})(),i=R.FURNITURE_DEFAULT_DIMENSIONS[e],o=eb.current.filter(e=>"furniture"===e.kind).length,a={id:t,kind:"furniture",furnitureType:e,roomId:n?.id??null,name:`${R.TYPE_LABELS[e]} ${o+1}`,width:i.width,depth:i.depth,height:i.height,position:[0,10*("door"!==e),0],rotation:[0,0,0],color:F[e]};ej([...eb.current,a]),ek(t)},[ej,l,ek]),eS=(0,r.useCallback)(e=>{let t=`${e}-${Date.now()}`,r=eb.current.find(e=>e.id===l)??null,n=(()=>{if(r?.kind==="room")return r;if(eg.current){let e=eb.current.find(e=>"room"===e.kind&&e.id===eg.current);if(e)return e}return eb.current.find(e=>"room"===e.kind)})(),i=R.MODEL_DEFAULT_DIMENSIONS[e],o=eb.current.filter(e=>"model"===e.kind).length,a={id:t,kind:"model",modelType:e,roomId:n?.id??null,name:`${R.MODEL_LABELS[e]} ${o+1}`,width:i.width,depth:i.depth,height:i.height,position:[0,10,0],rotation:[0,0,0],color:H[e]};ej([...eb.current,a]),ek(t)},[ej,l,ek]),eT=(0,r.useCallback)((e,t)=>{ej(eb.current.map(r=>r.id===e?{...r,...t}:r))},[ej]),eL=(0,r.useCallback)(()=>{if(!l)return;let e=eb.current.find(e=>e.id===l);e?.kind==="room"?ej(eb.current.filter(e=>("furniture"!==e.kind&&"model"!==e.kind||e.roomId!==l)&&e.id!==l)):ej(eb.current.filter(e=>e.id!==l)),ek(null)},[ej,l,ek]),eN=(0,r.useCallback)(e=>e.map(e=>{if("model"===e.kind){let t=R.MODEL_DEFAULT_DIMENSIONS[e.modelType];return t&&("number"!=typeof e.width||"number"!=typeof e.depth||"number"!=typeof e.height)?Array.isArray(e.scale)&&3===e.scale.length?{...e,width:t.width*e.scale[0],depth:t.depth*e.scale[2],height:t.height*e.scale[1]}:{...e,width:t.width,depth:t.depth,height:t.height}:e}if("furniture"!==e.kind)return e;let t=R.FURNITURE_DEFAULT_DIMENSIONS[e.furnitureType];return t&&("number"!=typeof e.width||"number"!=typeof e.depth||"number"!=typeof e.height)?Array.isArray(e.scale)&&3===e.scale.length?{...e,width:t.width*e.scale[0],depth:t.depth*e.scale[2],height:t.height*e.scale[1]}:{...e,width:t.width,depth:t.depth,height:t.height}:e}),[]),e$=(0,r.useCallback)(e=>{let t=e.filter(e=>"room"===e.kind),r=e.filter(e=>"room"!==e.kind);return t.length<=1&&0===r.length},[]),eP=(0,r.useCallback)(()=>{let t=new Blob([JSON.stringify({items:e,camera:J,wallOpacity:q,autoTransparent:ee,version:1},null,2)],{type:"application/json"}),r=URL.createObjectURL(t),n=document.createElement("a");n.href=r,n.download=`drop-the-furniture-${Date.now()}.json`,n.click(),URL.revokeObjectURL(r)},[e,J,q,ee]),eM=(0,r.useCallback)(e=>{let t=e.target.files?.[0];if(!t)return;let r=new FileReader;r.onload=e=>{try{let t=JSON.parse(e.target?.result);if(!Array.isArray(t.items)||!t.camera)return void window.alert("올바르지 않은 파일 형식입니다.");let r=eN(t.items);ej(r),V(t.camera),Q(t.wallOpacity??1),et(t.autoTransparent??!1),ek(null)}catch{window.alert("JSON 파싱에 실패했습니다.")}},r.readAsText(t),e.target.value=""},[ej,ek,eN]),eA=(0,r.useCallback)(()=>{(ey.current?.length>0||ex.current?.length>0)&&eP();let e={id:`room-${Date.now()}`,kind:"room",name:"방 1",width:8e3,depth:8e3,height:3e3,position:[0,0,0],rotation:[0,0,0],color:"#a8afb3"};ey.current=[],ex.current=[],n([e]),ek(null),V(X),Q(.5),eg.current=e.id,localStorage.removeItem(G),ew()},[ew,eP,ek]);(0,r.useEffect)(()=>{let e=e=>{let t=e.items.find(e=>"room"===e.kind);eg.current=t?.id??Y.id,(0,r.startTransition)(()=>{n(e.items),f(e.selectedId??null),Z(e.mode??"translate"),V(e.camera??X),Q(e.wallOpacity??1),et(e.autoTransparent??!1)})},t=function(){try{let e=localStorage.getItem(G);if(e)return JSON.parse(e)}catch{}return null}();t&&Array.isArray(t.items)&&!e$(t.items)?e({items:eN(t.items),camera:t.camera,wallOpacity:t.wallOpacity,autoTransparent:t.autoTransparent,selectedId:t.selectedId,mode:t.mode}):fetch("/sample_layout.json").then(e=>e.json()).then(t=>{Array.isArray(t.items)&&e({items:eN(t.items),camera:t.camera,wallOpacity:t.wallOpacity,autoTransparent:t.autoTransparent})}).catch(()=>{})},[e$,eN]),(0,r.useEffect)(()=>{eb.current=e},[e]),(0,r.useEffect)(()=>{localStorage.setItem(G,JSON.stringify({items:e,selectedId:l,mode:K,camera:J,wallOpacity:q,autoTransparent:ee,version:1}))},[e,l,K,J,q,ee]),(0,r.useEffect)(()=>{let t=e.find(e=>e.id===l);t?.kind==="room"&&(eg.current=t.id)},[e,l]),(0,r.useEffect)(()=>{let e=e=>{if("Escape"===e.key){l&&(e.preventDefault(),ek(null));return}if("Delete"===e.key||"Backspace"===e.key){if(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)return;if(l){e.preventDefault(),eL();return}}(e.ctrlKey||e.metaKey)&&("z"!==e.key.toLowerCase()||e.shiftKey?("y"===e.key.toLowerCase()||"z"===e.key.toLowerCase()&&e.shiftKey)&&(e.preventDefault(),eI()):(e.preventDefault(),eC()))};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[eC,eI,l,eL,ek]),(0,r.useEffect)(()=>{if(!es)return;let e=e=>{eh.current&&!eh.current.contains(e.target)&&ed(!1)};return window.addEventListener("pointerdown",e),()=>{window.removeEventListener("pointerdown",e)}},[es]),e.filter(e=>"room"===e.kind).length,e.filter(e=>"furniture"===e.kind).length;let eR=e.filter(e=>"room"===e.kind),eB=e.filter(e=>"furniture"===e.kind&&!e.roomId),eU=e.filter(e=>"model"===e.kind&&!e.roomId),ez=e.find(e=>e.id===l);return ez?.kind,(0,t.jsxs)(s,{children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:"Drop the Furniture - 3D 방 & 가구 배치"}),(0,t.jsx)("meta",{name:"description",content:"3D 공간에서 방과 가구를 자유롭게 배치하고 편집할 수 있는 Next.js 기반 웹 앱입니다. 방 추가, 가구 배치, 이동/회전/크기 조절, 저장/불러오기 기능을 제공합니다."}),(0,t.jsx)("meta",{name:"keywords",content:"3D 가구 배치, 방 꾸미기, 인테리어 시뮬레이터, Drop the Furniture, Three.js, Next.js, 가구 배치 도구"}),(0,t.jsx)("meta",{name:"author",content:"Drop the Furniture"}),(0,t.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,t.jsx)("meta",{name:"robots",content:"index, follow"}),(0,t.jsx)("meta",{property:"og:type",content:"website"}),(0,t.jsx)("meta",{property:"og:title",content:"Drop the Furniture - 3D 방 & 가구 배치"}),(0,t.jsx)("meta",{property:"og:description",content:"3D 공간에서 방과 가구를 자유롭게 배치하고 편집할 수 있는 웹 앱입니다."}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,t.jsx)("meta",{name:"twitter:title",content:"Drop the Furniture - 3D 방 & 가구 배치"}),(0,t.jsx)("meta",{name:"twitter:description",content:"3D 공간에서 방과 가구를 자유롭게 배치하고 편집할 수 있는 웹 앱입니다."})]}),(0,t.jsxs)(d,{children:[(0,t.jsx)(c,{onPointerDown:e=>{e.stopPropagation()},onClick:e=>{ed(e=>!e)},children:"☰"}),(0,t.jsx)("div",{children:(0,t.jsx)("h1",{children:(0,t.jsxs)(o.default,{href:"/",style:{textDecoration:"none",color:"inherit"},children:["Drop the ",(0,t.jsx)("span",{children:"Furniture"})]})})}),(0,t.jsx)(u,{onClick:()=>eu(e=>!e),children:"⋮"}),(0,t.jsxs)($,{$open:ec,children:[(0,t.jsx)(x,{$compact:!0,onClick:eA,children:"🗑️ New"}),(0,t.jsx)(x,{$compact:!0,onClick:eC,disabled:!ei,children:"↩ Undo"}),(0,t.jsx)(x,{$compact:!0,onClick:eI,disabled:!ea,children:"↪ Redo"}),(0,t.jsx)(x,{$compact:!0,onClick:eP,children:"💾 저장"}),(0,t.jsx)(x,{$compact:!0,onClick:()=>e_.current?.click(),children:"📂 불러오기"}),(0,t.jsx)("input",{ref:e_,type:"file",accept:"application/json",style:{display:"none"},onChange:eM})]})]}),(0,t.jsxs)(p,{ref:eh,$open:es,children:[(0,t.jsx)(g,{children:"방 추가"}),(0,t.jsxs)(y,{children:[(0,t.jsx)(x,{onClick:eO,children:"방"}),(0,t.jsx)(x,{onClick:eE,children:"공간"}),(0,t.jsx)(x,{onClick:()=>eD("door"),children:"🚪 문"})]}),(0,t.jsx)(h,{}),(0,t.jsx)(g,{children:"가구 추가"}),(0,t.jsx)(y,{children:U.map(e=>(0,t.jsx)(x,{onClick:()=>eD(e),children:R.TYPE_LABELS[e]},e))}),(0,t.jsx)(O,{children:"버튼을 누르면 방 중앙에 방/가구/문이 생성됩니다."}),(0,t.jsx)(h,{}),(0,t.jsx)(g,{children:"모델 추가"}),(0,t.jsx)(y,{children:z.map(e=>(0,t.jsx)(x,{onClick:()=>eS(e),children:R.MODEL_LABELS[e]},e))}),(0,t.jsx)(h,{}),(0,t.jsx)(g,{children:"설정"}),(0,t.jsx)(O,{children:"벽 투명도"}),(0,t.jsx)(P,{type:"range",min:0,max:1,step:.05,value:q,onChange:e=>Q(parseFloat(e.target.value))}),(0,t.jsx)(x,{$compact:!0,$active:ee,onClick:()=>et(e=>!e),children:"👁 자동 투명"}),(0,t.jsx)(h,{}),(0,t.jsxs)(g,{children:["목록",eR.length>0&&(0,t.jsxs)(m,{children:[(0,t.jsx)(b,{title:"모두 펼치기",onClick:()=>ep(new Set),children:"⊞"}),(0,t.jsx)(b,{title:"모두 접기",onClick:()=>ep(new Set(eR.map(e=>e.id))),children:"⊟"})]})]}),(0,t.jsxs)(E,{children:[eR.map(n=>{let i=[...e.filter(e=>"furniture"===e.kind&&e.roomId===n.id),...e.filter(e=>"model"===e.kind&&e.roomId===n.id)];return(0,t.jsxs)(r.Fragment,{children:[(0,t.jsxs)(D,{$selected:n.id===l,$kind:"room",$dragOver:er===n.id,onClick:()=>ek(n.id),onDragOver:e=>{e.preventDefault(),em.current&&en(n.id)},onDragLeave:()=>en(null),onDrop:()=>{let e=em.current;e&&(eT(e,{roomId:n.id,position:[0,10,0]}),em.current=null,en(null))},children:[(0,t.jsxs)(N,{children:[(0,t.jsx)(L,{onPointerDown:e=>e.stopPropagation(),onClick:e=>{e.stopPropagation(),ev(n.id)},children:ef.has(n.id)?"▸":"▾"}),n.name]}),(0,t.jsx)(T,{children:!1===n.hasWalls?"공간":"방"})]}),!ef.has(n.id)&&(0,t.jsx)(S,{$dragOver:er===n.id,$empty:0===i.length,onDragOver:e=>{e.preventDefault(),em.current&&en(n.id)},onDragLeave:()=>en(null),onDrop:()=>{let e=em.current;e&&(eT(e,{roomId:n.id,position:[0,10,0]}),em.current=null,en(null))},children:i.length>0?i.map(e=>{let r="model"===e.kind?R.MODEL_LABELS[e.modelType]:R.TYPE_LABELS[e.furnitureType];return(0,t.jsxs)(D,{$selected:e.id===l,$kind:"furniture",$tree:!0,draggable:!0,onClick:()=>ek(e.id),onDragStart:()=>{em.current=e.id},onDragEnd:()=>{em.current=null,en(null)},children:[(0,t.jsx)("span",{children:e.name}),(0,t.jsx)(T,{children:r})]},e.id)}):(0,t.jsx)(O,{children:"여기로 드래그"})})]},n.id)}),eB.map(e=>(0,t.jsxs)(D,{$selected:e.id===l,$kind:"furniture",draggable:!0,onClick:()=>ek(e.id),onDragStart:()=>{em.current=e.id},onDragEnd:()=>{em.current=null,en(null)},children:[(0,t.jsx)("span",{children:e.name}),(0,t.jsx)(T,{children:R.TYPE_LABELS[e.furnitureType]})]},e.id)),eU.map(e=>(0,t.jsxs)(D,{$selected:e.id===l,$kind:"furniture",draggable:!0,onClick:()=>ek(e.id),onDragStart:()=>{em.current=e.id},onDragEnd:()=>{em.current=null,en(null)},children:[(0,t.jsx)("span",{children:e.name}),(0,t.jsx)(T,{children:R.MODEL_LABELS[e.modelType]})]},e.id))]}),!ez&&(0,t.jsx)(O,{children:"목록에서 항목을 클릭하면 선택해서 편집할 수 있습니다."})]}),ez&&(0,t.jsxs)(M,{children:[(0,t.jsx)(y,{$nowrap:!0,children:["translate","rotate","scale"].map(e=>(0,t.jsx)(x,{$active:K===e,onClick:()=>Z(e),children:R.MODE_LABELS[e]},e))}),(0,t.jsx)(v,{type:"text",value:ez.name,style:{width:"130px"},onChange:e=>eT(ez.id,{name:e.target.value})}),(0,t.jsx)(_,{children:(0,t.jsx)(w,{type:"color",value:ez.color,style:{width:"36px",padding:0},onChange:e=>eT(ez.id,{color:e.target.value})})}),"model"===ez.kind&&R.MODEL_ANIMATIONS[ez.modelType]&&(0,t.jsx)(a.default,{styles:W,value:ez.animationName&&R.MODEL_ANIMATIONS[ez.modelType].includes(ez.animationName)?{value:ez.animationName,label:R.ANIMATION_LABELS[ez.animationName]??ez.animationName}:null,onChange:e=>eT(ez.id,{animationName:e?.value||void 0}),options:R.MODEL_ANIMATIONS[ez.modelType].map(e=>({value:e,label:R.ANIMATION_LABELS[e]??e})),placeholder:"애니메이션"}),("room"===ez.kind||"furniture"===ez.kind||"model"===ez.kind)&&(0,t.jsx)(j,{style:{gap:"6px"},children:["width","depth","height"].map((e,r)=>(0,t.jsxs)(C,{style:{width:"72px"},children:[(0,t.jsx)(k,{type:"number",min:100,step:"room"===ez.kind?100:10,value:ez[e],onChange:t=>eT(ez.id,{[e]:parseFloat(t.target.value)||1})}),(0,t.jsx)(I,{children:["W","D","H"][r]})]},e))}),(0,t.jsx)(x,{$danger:!0,$compact:!0,onClick:eL,children:"삭제"})]}),(0,t.jsx)(B,{items:e,selectedId:l,mode:K,cameraState:J,wallOpacity:q,autoTransparent:ee,onSelect:ek,onChange:eT,onCameraChange:V})]})}],83594)},9977,(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/c",()=>e.r(83594)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/c"])})},48761,e=>{e.v(t=>Promise.all(["static/chunks/0ey~yy8oeyp~5.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/0599p99vu8fk5.js"].map(t=>e.l(t))).then(()=>t(79466)))},17050,e=>{e.v(t=>Promise.all(["static/chunks/0zch26b.7k.dq.js","static/chunks/0kk9ftpnyjcqs.js","static/chunks/0ikygd21p_2xm.js"].map(t=>e.l(t))).then(()=>t(97220)))}]);