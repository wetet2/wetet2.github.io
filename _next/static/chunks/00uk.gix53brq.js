(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,89129,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return m},MiddlewareNotFoundError:function(){return x},MissingStaticPage:function(){return v},NormalizeError:function(){return _},PageNotFoundError:function(){return b},SP:function(){return g},ST:function(){return h},WEB_VITALS:function(){return i},execOnce:function(){return a},getDisplayName:function(){return f},getLocationOrigin:function(){return l},getURL:function(){return c},isAbsoluteUrl:function(){return u},isResSent:function(){return d},loadGetInitialProps:function(){return y},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return w}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>s.test(e);function l(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function c(){let{href:e}=window.location,t=l();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function y(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await y(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&d(n))return r;if(!r)throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return r}let g="u">typeof performance,h=g&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class _ extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class x extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function w(e){return JSON.stringify({message:e.message,stack:e.stack})}},20955,(e,t,n)=>{var r={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}var u=[],l=!1,c=-1;function f(){l&&r&&(l=!1,r.length?u=r.concat(u):c=-1,u.length&&d())}function d(){if(!l){var e=s(f);l=!0;for(var t=u.length;t;){for(r=u,u=[];++c<t;)r&&r[c].run();c=-1,t=u.length}r=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||l||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}},a=!0;try{r[e](n,n.exports,i),a=!1}finally{a&&delete o[e]}return n.exports}i.ab="/ROOT/node_modules/next/dist/compiled/process/",t.exports=i(229)},50461,(e,t,n)=>{"use strict";var r,o;t.exports=(null==(r=e.g.process)?void 0:r.env)&&"object"==typeof(null==(o=e.g.process)?void 0:o.env)?e.g.process:e.r(20955)},8481,(e,t,n)=>{"use strict";var r=Symbol.for("react.transitional.element");function o(e,t,n){var o=null;if(void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),"key"in t)for(var i in n={},t)"key"!==i&&(n[i]=t[i]);else n=t;return{$$typeof:r,type:e,key:o,ref:void 0!==(t=n.ref)?t:null,props:n}}n.Fragment=Symbol.for("react.fragment"),n.jsx=o,n.jsxs=o},91398,(e,t,n)=>{"use strict";t.exports=e.r(8481)},61556,(e,t,n)=>{"use strict";var r=e.i(50461),o=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),h=Symbol.iterator,m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,b={};function v(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||m}function x(){}function w(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=v.prototype;var k=w.prototype=new x;k.constructor=w,_(k,v.prototype),k.isPureReactComponent=!0;var E=Array.isArray;function S(){}var T={H:null,A:null,T:null,S:null},O=Object.prototype.hasOwnProperty;function j(e,t,n){var r=n.ref;return{$$typeof:o,type:e,key:t,ref:void 0!==r?r:null,props:n}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function I(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function N(e,t,n){if(null==e)return e;var r=[],a=0;return!function e(t,n,r,a,s){var u,l,c,f=typeof t;("undefined"===f||"boolean"===f)&&(t=null);var d=!1;if(null===t)d=!0;else switch(f){case"bigint":case"string":case"number":d=!0;break;case"object":switch(t.$$typeof){case o:case i:d=!0;break;case y:return e((d=t._init)(t._payload),n,r,a,s)}}if(d)return s=s(t),d=""===a?"."+I(t,0):a,E(s)?(r="",null!=d&&(r=d.replace(P,"$&/")+"/"),e(s,n,r,"",function(e){return e})):null!=s&&(C(s)&&(u=s,l=r+(null==s.key||t&&t.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+d,s=j(u.type,l,u.props)),n.push(s)),1;d=0;var p=""===a?".":a+":";if(E(t))for(var g=0;g<t.length;g++)f=p+I(a=t[g],g),d+=e(a,n,r,f,s);else if("function"==typeof(g=null===(c=t)||"object"!=typeof c?null:"function"==typeof(c=h&&c[h]||c["@@iterator"])?c:null))for(t=g.call(t),g=0;!(a=t.next()).done;)f=p+I(a=a.value,g++),d+=e(a,n,r,f,s);else if("object"===f){if("function"==typeof t.then)return e(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"==typeof e.status?e.then(S,S):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(t),n,r,a,s);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.")}return d}(e,r,"","",function(e){return t.call(n,e,a++)}),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof r.default&&"function"==typeof r.default.emit)return void r.default.emit("uncaughtException",e);console.error(e)};n.Activity=g,n.Children={map:N,forEach:function(e,t,n){N(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return N(e,function(){t++}),t},toArray:function(e){return N(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=v,n.Fragment=a,n.Profiler=u,n.PureComponent=w,n.StrictMode=s,n.Suspense=d,n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,n.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},n.cache=function(e){return function(){return e.apply(null,arguments)}},n.cacheSignal=function(){return null},n.cloneElement=function(e,t,n){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".");var r=_({},e.props),o=e.key;if(null!=t)for(i in void 0!==t.key&&(o=""+t.key),t)O.call(t,i)&&"key"!==i&&"__self"!==i&&"__source"!==i&&("ref"!==i||void 0!==t.ref)&&(r[i]=t[i]);var i=arguments.length-2;if(1===i)r.children=n;else if(1<i){for(var a=Array(i),s=0;s<i;s++)a[s]=arguments[s+2];r.children=a}return j(e.type,o,r)},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},n.createElement=function(e,t,n){var r,o={},i=null;if(null!=t)for(r in void 0!==t.key&&(i=""+t.key),t)O.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return j(e,i,o)},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:f,render:e}},n.isValidElement=C,n.lazy=function(e){return{$$typeof:y,_payload:{_status:-1,_result:e},_init:R}},n.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},n.startTransition=function(e){var t=T.T,n={};T.T=n;try{var r=e(),o=T.S;null!==o&&o(n,r),"object"==typeof r&&null!==r&&"function"==typeof r.then&&r.then(S,$)}catch(e){$(e)}finally{null!==t&&null!==n.types&&(t.types=n.types),T.T=t}},n.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},n.use=function(e){return T.H.use(e)},n.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},n.useCallback=function(e,t){return T.H.useCallback(e,t)},n.useContext=function(e){return T.H.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},n.useEffect=function(e,t){return T.H.useEffect(e,t)},n.useEffectEvent=function(e){return T.H.useEffectEvent(e)},n.useId=function(){return T.H.useId()},n.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},n.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},n.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},n.useMemo=function(e,t){return T.H.useMemo(e,t)},n.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},n.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},n.useRef=function(e){return T.H.useRef(e)},n.useState=function(e){return T.H.useState(e)},n.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},n.useTransition=function(){return T.H.useTransition()},n.version="19.2.4"},91788,(e,t,n)=>{"use strict";t.exports=e.r(61556)},41705,(e,t,n)=>{"use strict";n._=function(e){return e&&e.__esModule?e:{default:e}}},13584,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"HeadManagerContext",{enumerable:!0,get:function(){return r}});let r=e.r(41705)._(e.r(91788)).default.createContext({})},94470,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},52456,(e,t,n)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}n._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(o,a,s):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}},94941,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return s}});let r=e.r(91788),o="u"<typeof window,i=o?()=>{}:r.useLayoutEffect,a=o?()=>{}:r.useEffect;function s(e){let{headManager:t,reduceComponentsToState:n}=e;function s(){if(t&&t.mountedInstances){let e=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(e))}}return o&&(t?.mountedInstances?.add(e.children),s()),i(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),i(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},80963,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return g},defaultHead:function(){return f}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=e.r(41705),a=e.r(52456),s=e.r(91398),u=a._(e.r(91788)),l=i._(e.r(94941)),c=e.r(13584);function f(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(94470);let p=["name","httpEquiv","charSet","itemProp"];function y(e){let t,n,r,o;return e.reduce(d,[]).reverse().concat(f().reverse()).filter((t=new Set,n=new Set,r=new Set,o={},e=>{let i=!0,a=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){a=!0;let n=e.key.slice(e.key.indexOf("$")+1);t.has(n)?i=!1:t.add(n)}switch(e.type){case"title":case"base":n.has(e.type)?i=!1:n.add(e.type);break;case"meta":for(let t=0,n=p.length;t<n;t++){let n=p[t];if(e.props.hasOwnProperty(n))if("charSet"===n)r.has(n)?i=!1:r.add(n);else{let t=e.props[n],r=o[n]||new Set;("name"!==n||!a)&&r.has(t)?i=!1:(r.add(t),o[n]=r)}}}return i})).reverse().map((e,t)=>{let n=e.key||t;return u.default.cloneElement(e,{key:n})})}let g=function({children:e}){let t=(0,u.useContext)(c.HeadManagerContext);return(0,s.jsx)(l.default,{reduceComponentsToState:y,headManager:t,children:e})};("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},58678,(e,t,n)=>{t.exports=e.r(80963)},17431,(e,t,n)=>{"use strict";var r=e.r(91788);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(o(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal"),u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,n.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(o(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},n.flushSync=function(e){var t=u.T,n=a.p;try{if(u.T=null,a.p=2,e)return e()}finally{u.T=t,a.p=n,a.d.f()}},n.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,a.d.C(e,t))},n.prefetchDNS=function(e){"string"==typeof e&&a.d.D(e)},n.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var n=t.as,r=l(n,t.crossOrigin),o="string"==typeof t.integrity?t.integrity:void 0,i="string"==typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?a.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:o,fetchPriority:i}):"script"===n&&a.d.X(e,{crossOrigin:r,integrity:o,fetchPriority:i,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},n.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},n.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},n.preloadModule=function(e,t){if("string"==typeof e)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},n.requestFormReset=function(e){a.d.r(e)},n.unstable_batchedUpdates=function(e,t){return e(t)},n.useFormState=function(e,t,n){return u.H.useFormState(e,t,n)},n.useFormStatus=function(){return u.H.useHostTransitionStatus()},n.version="19.2.4"},30943,(e,t,n)=>{"use strict";!function e(){if("u">typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),t.exports=e.r(17431)},11829,(e,t,n)=>{"use strict";function r(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,o=e[r];if(0<a(o,t))e[r]=t,e[n]=o,n=r;else break}}function o(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,o=e.length,i=o>>>1;r<i;){var s=2*(r+1)-1,u=e[s],l=s+1,c=e[l];if(0>a(u,n))l<o&&0>a(c,u)?(e[r]=c,e[l]=n,r=l):(e[r]=u,e[s]=n,r=s);else if(l<o&&0>a(c,n))e[r]=c,e[l]=n,r=l;else break}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(n.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var s,u=performance;n.unstable_now=function(){return u.now()}}else{var l=Date,c=l.now();n.unstable_now=function(){return l.now()-c}}var f=[],d=[],p=1,y=null,g=3,h=!1,m=!1,_=!1,b=!1,v="function"==typeof setTimeout?setTimeout:null,x="function"==typeof clearTimeout?clearTimeout:null,w="u">typeof setImmediate?setImmediate:null;function k(e){for(var t=o(d);null!==t;){if(null===t.callback)i(d);else if(t.startTime<=e)i(d),t.sortIndex=t.expirationTime,r(f,t);else break;t=o(d)}}function E(e){if(_=!1,k(e),!m)if(null!==o(f))m=!0,S||(S=!0,s());else{var t=o(d);null!==t&&R(E,t.startTime-e)}}var S=!1,T=-1,O=5,j=-1;function C(){return!!b||!(n.unstable_now()-j<O)}function P(){if(b=!1,S){var e=n.unstable_now();j=e;var t=!0;try{e:{m=!1,_&&(_=!1,x(T),T=-1),h=!0;var r=g;try{t:{for(k(e),y=o(f);null!==y&&!(y.expirationTime>e&&C());){var a=y.callback;if("function"==typeof a){y.callback=null,g=y.priorityLevel;var u=a(y.expirationTime<=e);if(e=n.unstable_now(),"function"==typeof u){y.callback=u,k(e),t=!0;break t}y===o(f)&&i(f),k(e)}else i(f);y=o(f)}if(null!==y)t=!0;else{var l=o(d);null!==l&&R(E,l.startTime-e),t=!1}}break e}finally{y=null,g=r,h=!1}}}finally{t?s():S=!1}}}if("function"==typeof w)s=function(){w(P)};else if("u">typeof MessageChannel){var I=new MessageChannel,N=I.port2;I.port1.onmessage=P,s=function(){N.postMessage(null)}}else s=function(){v(P,0)};function R(e,t){T=v(function(){e(n.unstable_now())},t)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<e?Math.floor(1e3/e):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_next=function(e){switch(g){case 1:case 2:case 3:var t=3;break;default:t=g}var n=g;g=t;try{return e()}finally{g=n}},n.unstable_requestPaint=function(){b=!0},n.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=g;g=e;try{return t()}finally{g=n}},n.unstable_scheduleCallback=function(e,t,i){var a=n.unstable_now();switch(i="object"==typeof i&&null!==i&&"number"==typeof(i=i.delay)&&0<i?a+i:a,e){case 1:var u=-1;break;case 2:u=250;break;case 5:u=0x3fffffff;break;case 4:u=1e4;break;default:u=5e3}return u=i+u,e={id:p++,callback:t,priorityLevel:e,startTime:i,expirationTime:u,sortIndex:-1},i>a?(e.sortIndex=i,r(d,e),null===o(f)&&e===o(d)&&(_?(x(T),T=-1):_=!0,R(E,i-a))):(e.sortIndex=u,r(f,e),m||h||(m=!0,S||(S=!0,s()))),e},n.unstable_shouldYield=C,n.unstable_wrapCallback=function(e){var t=g;return function(){var n=g;g=t;try{return e.apply(this,arguments)}finally{g=n}}}},52659,(e,t,n)=>{"use strict";t.exports=e.r(11829)},87856,e=>{"use strict";var t=e.i(91398),n=e.i(58678),r=e.i(60814),o=e.i(41158);let i=r.keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
`,a=r.keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
`,s=r.default.header.withConfig({displayName:"styled__Toolbar",componentId:"sc-7094a356-0"})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 52px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  background: rgba(10, 10, 15, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(0, 255, 255, 0.1);
  z-index: 100;
`,u=r.default.div.withConfig({displayName:"styled__ToolbarBrand",componentId:"sc-7094a356-1"})`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;

  span {
    color: #00ffff;
    text-shadow: 0 0 8px rgba(0, 255, 255, 0.4);
  }
`,l=r.default.div.withConfig({displayName:"styled__Container",componentId:"sc-7094a356-2"})`
  min-height: 100vh;
  background: #0a0a0f;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 92px 20px 40px;
`,c=r.default.div.withConfig({displayName:"styled__Grid",componentId:"sc-7094a356-3"})`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
`,f=r.default.div.withConfig({displayName:"styled__Scanline",componentId:"sc-7094a356-4"})`
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
`,d=r.default.div.withConfig({displayName:"styled__Orb",componentId:"sc-7094a356-5"})`
  position: absolute;
  width: ${({$size:e})=>e};
  height: ${({$size:e})=>e};
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(0, 255, 255, 0.06) 0%,
    transparent 70%
  );
  top: ${({$top:e})=>e};
  left: ${({$left:e})=>e};
  filter: blur(60px);
  animation: ${i} 5s ease-in-out infinite;
  animation-delay: ${({$delay:e})=>e}s;
  pointer-events: none;
`,p=r.default.div.withConfig({displayName:"styled__Content",componentId:"sc-7094a356-6"})`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  width: 100%;
  max-width: 600px;
`,y=r.default.div.withConfig({displayName:"styled__Badge",componentId:"sc-7094a356-7"})`
  font-size: 11px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgba(0, 255, 255, 0.5);
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  text-align: center;
`,g=r.default.h1.withConfig({displayName:"styled__Title",componentId:"sc-7094a356-8"})`
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
`,h=r.default.p.withConfig({displayName:"styled__Subtitle",componentId:"sc-7094a356-9"})`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.3);
  text-align: center;
  margin: -24px 0 0;
  letter-spacing: 0.5px;
`,m=r.default.div.withConfig({displayName:"styled__CardGrid",componentId:"sc-7094a356-10"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media (min-width: 500px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`,_=(0,r.default)(o.default).withConfig({displayName:"styled__Card",componentId:"sc-7094a356-11"})`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 22px;
  border: 1px solid rgba(0, 255, 255, 0.12);
  border-radius: 10px;
  background: rgba(0, 255, 255, 0.02);
  backdrop-filter: blur(12px);
  text-decoration: none;
  transition: all 0.25s ease;
  cursor: pointer;

  &:hover {
    border-color: rgba(0, 255, 255, 0.4);
    background: rgba(0, 255, 255, 0.05);
    box-shadow: 0 0 24px rgba(0, 255, 255, 0.1);
    transform: translateY(-1px);
  }
`,b=r.default.div.withConfig({displayName:"styled__CardIcon",componentId:"sc-7094a356-12"})`
  width: 42px;
  height: 42px;
  border-radius: 8px;
  background: linear-gradient(
    135deg,
    rgba(0, 255, 255, 0.12),
    rgba(255, 0, 255, 0.08)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
`,v=r.default.div.withConfig({displayName:"styled__CardText",componentId:"sc-7094a356-13"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`,x=r.default.div.withConfig({displayName:"styled__CardTitle",componentId:"sc-7094a356-14"})`
  font-size: 15px;
  font-weight: 600;
  color: #fff;
`,w=r.default.div.withConfig({displayName:"styled__CardDesc",componentId:"sc-7094a356-15"})`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.35);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,k=r.default.span.withConfig({displayName:"styled__Arrow",componentId:"sc-7094a356-16"})`
  font-size: 18px;
  color: rgba(0, 255, 255, 0.4);
  transition: transform 0.25s ease;
  flex-shrink: 0;

  ${_}:hover & {
    transform: translateX(4px);
    color: #00ffff;
  }
`,E=r.default.div.withConfig({displayName:"styled__Footer",componentId:"sc-7094a356-17"})`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.1);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 8px;
`,S=[{href:"/t",short:"Typing",icon:"⌨️",title:"손은 눈보다 빠르다",desc:"타이핑으로 실력을 연습하자"},{href:"/c",short:"Furniture",icon:"🪑",title:"Drop The Furniture",desc:"3D 공간에 가구 배치하기"},{href:"/d",short:"Drawing",icon:"✏️",title:"Drawing Board",desc:"자유롭게 그리고 색칠하기"},{href:"/g",short:"Chat",icon:"💬",title:"AI Chat",desc:"AI와 자유로운 대화"},{href:"/n",short:"News",icon:"📰",title:"AI 뉴스",desc:"최신 AI 뉴스 다이제스트"}];e.s(["default",0,function(){return(0,t.jsxs)(l,{children:[(0,t.jsxs)(n.default,{children:[(0,t.jsx)("title",{children:"Everything AI Have"}),(0,t.jsx)("meta",{name:"description",content:"Everything AI Have — 여러 AI 도구를 한곳에 모은 프로젝트입니다."})]}),(0,t.jsx)(s,{children:(0,t.jsxs)(u,{children:["everything",(0,t.jsx)("span",{children:"ai"}),"have"]})}),(0,t.jsx)(c,{}),(0,t.jsx)(f,{}),(0,t.jsx)(d,{$top:"10%",$left:"5%",$size:"400px",$delay:0}),(0,t.jsx)(d,{$top:"60%",$left:"70%",$size:"350px",$delay:2.5}),(0,t.jsxs)(p,{children:[(0,t.jsx)(y,{children:"master & guest"}),(0,t.jsxs)(g,{children:["나의 ",(0,t.jsx)("span",{children:"AI"}),"저씨"]}),(0,t.jsx)(h,{children:"AI 주인님께 드리는 미천한 나의 프롬프트"}),(0,t.jsx)(m,{children:S.map(e=>(0,t.jsxs)(_,{href:e.href,children:[(0,t.jsx)(b,{children:e.icon}),(0,t.jsxs)(v,{children:[(0,t.jsx)(x,{children:e.title}),(0,t.jsx)(w,{children:e.desc})]}),(0,t.jsx)(k,{className:"arrow",children:"→"})]},e.href))}),(0,t.jsx)(E,{children:"©https://github.com/wetet2"})]})]})}],87856)},55075,(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",()=>e.r(87856)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/"])})},48761,e=>{e.v(t=>Promise.all(["static/chunks/0ey~yy8oeyp~5.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/0599p99vu8fk5.js"].map(t=>e.l(t))).then(()=>t(79466)))}]);