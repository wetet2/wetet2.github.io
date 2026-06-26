(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,89129,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return _},NormalizeError:function(){return b},PageNotFoundError:function(){return x},SP:function(){return m},ST:function(){return y},WEB_VITALS:function(){return i},execOnce:function(){return a},getDisplayName:function(){return d},getLocationOrigin:function(){return u},getURL:function(){return c},isAbsoluteUrl:function(){return s},isResSent:function(){return f},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return v}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>l.test(e);function u(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function c(){let{href:e}=window.location,t=u();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&f(n))return r;if(!r)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return r}let m="u">typeof performance,y=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class b extends Error{}class x extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class _ extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},17431,(e,t,n)=>{"use strict";var r=e.r(91788);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(o(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),s=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,n.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(o(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},n.flushSync=function(e){var t=s.T,n=a.p;try{if(s.T=null,a.p=2,e)return e()}finally{s.T=t,a.p=n,a.d.f()}},n.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,a.d.C(e,t))},n.prefetchDNS=function(e){"string"==typeof e&&a.d.D(e)},n.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var n=t.as,r=u(n,t.crossOrigin),o="string"==typeof t.integrity?t.integrity:void 0,i="string"==typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?a.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:o,fetchPriority:i}):"script"===n&&a.d.X(e,{crossOrigin:r,integrity:o,fetchPriority:i,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},n.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=u(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},n.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var n=t.as,r=u(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},n.preloadModule=function(e,t){if("string"==typeof e)if(t){var n=u(t.as,t.crossOrigin);a.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},n.requestFormReset=function(e){a.d.r(e)},n.unstable_batchedUpdates=function(e,t){return e(t)},n.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},n.useFormStatus=function(){return s.H.useHostTransitionStatus()},n.version="19.2.4"},30943,(e,t,n)=>{"use strict";!function e(){if("u">typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),t.exports=e.r(17431)},20955,(e,t,n)=>{var r={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}var s=[],u=!1,c=-1;function d(){u&&r&&(u=!1,r.length?s=r.concat(s):c=-1,s.length&&f())}function f(){if(!u){var e=l(d);u=!0;for(var t=s.length;t;){for(r=s,s=[];++c<t;)r&&r[c].run();c=-1,t=s.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||u||l(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}},a=!0;try{r[e](n,n.exports,i),a=!1}finally{a&&delete o[e]}return n.exports}i.ab="/ROOT/node_modules/next/dist/compiled/process/",t.exports=i(229)},50461,(e,t,n)=>{"use strict";var r,o;t.exports=(null==(r=e.g.process)?void 0:r.env)&&"object"==typeof(null==(o=e.g.process)?void 0:o.env)?e.g.process:e.r(20955)},8481,(e,t,n)=>{"use strict";var r=Symbol.for("react.transitional.element");function o(e,t,n){var o=null;if(void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),"key"in t)for(var i in n={},t)"key"!==i&&(n[i]=t[i]);else n=t;return{$$typeof:r,type:e,key:o,ref:void 0!==(t=n.ref)?t:null,props:n}}n.Fragment=Symbol.for("react.fragment"),n.jsx=o,n.jsxs=o},91398,(e,t,n)=>{"use strict";t.exports=e.r(8481)},61556,(e,t,n)=>{"use strict";var r=e.i(50461),o=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),y=Symbol.iterator,g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,x={};function _(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||g}function w(){}function v(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||g}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=_.prototype;var k=v.prototype=new w;k.constructor=v,b(k,_.prototype),k.isPureReactComponent=!0;var j=Array.isArray;function E(){}var S={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty;function I(e,t,n){var r=n.ref;return{$$typeof:o,type:e,key:t,ref:void 0!==r?r:null,props:n}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var T=/\/+/g;function N(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function D(e,t,n){if(null==e)return e;var r=[],a=0;return!function e(t,n,r,a,l){var s,u,c,d=typeof t;("undefined"===d||"boolean"===d)&&(t=null);var f=!1;if(null===t)f=!0;else switch(d){case"bigint":case"string":case"number":f=!0;break;case"object":switch(t.$$typeof){case o:case i:f=!0;break;case h:return e((f=t._init)(t._payload),n,r,a,l)}}if(f)return l=l(t),f=""===a?"."+N(t,0):a,j(l)?(r="",null!=f&&(r=f.replace(T,"$&/")+"/"),e(l,n,r,"",function(e){return e})):null!=l&&(O(l)&&(s=l,u=r+(null==l.key||t&&t.key===l.key?"":(""+l.key).replace(T,"$&/")+"/")+f,l=I(s.type,u,s.props)),n.push(l)),1;f=0;var p=""===a?".":a+":";if(j(t))for(var m=0;m<t.length;m++)d=p+N(a=t[m],m),f+=e(a,n,r,d,l);else if("function"==typeof(m=null===(c=t)||"object"!=typeof c?null:"function"==typeof(c=y&&c[y]||c["@@iterator"])?c:null))for(t=m.call(t),m=0;!(a=t.next()).done;)d=p+N(a=a.value,m++),f+=e(a,n,r,d,l);else if("object"===d){if("function"==typeof t.then)return e(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"==typeof e.status?e.then(E,E):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(t),n,r,a,l);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.")}return f}(e,r,"","",function(e){return t.call(n,e,a++)}),r}function L(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof r.default&&"function"==typeof r.default.emit)return void r.default.emit("uncaughtException",e);console.error(e)};n.Activity=m,n.Children={map:D,forEach:function(e,t,n){D(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return D(e,function(){t++}),t},toArray:function(e){return D(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=_,n.Fragment=a,n.Profiler=s,n.PureComponent=v,n.StrictMode=l,n.Suspense=f,n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,n.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},n.cache=function(e){return function(){return e.apply(null,arguments)}},n.cacheSignal=function(){return null},n.cloneElement=function(e,t,n){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".");var r=b({},e.props),o=e.key;if(null!=t)for(i in void 0!==t.key&&(o=""+t.key),t)C.call(t,i)&&"key"!==i&&"__self"!==i&&"__source"!==i&&("ref"!==i||void 0!==t.ref)&&(r[i]=t[i]);var i=arguments.length-2;if(1===i)r.children=n;else if(1<i){for(var a=Array(i),l=0;l<i;l++)a[l]=arguments[l+2];r.children=a}return I(e.type,o,r)},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:u,_context:e},e},n.createElement=function(e,t,n){var r,o={},i=null;if(null!=t)for(r in void 0!==t.key&&(i=""+t.key),t)C.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var l=Array(a),s=0;s<a;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return I(e,i,o)},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:d,render:e}},n.isValidElement=O,n.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:L}},n.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},n.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),o=S.S;null!==o&&o(n,r),"object"==typeof r&&null!==r&&"function"==typeof r.then&&r.then(E,$)}catch(e){$(e)}finally{null!==t&&null!==n.types&&(t.types=n.types),S.T=t}},n.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},n.use=function(e){return S.H.use(e)},n.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},n.useCallback=function(e,t){return S.H.useCallback(e,t)},n.useContext=function(e){return S.H.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},n.useEffect=function(e,t){return S.H.useEffect(e,t)},n.useEffectEvent=function(e){return S.H.useEffectEvent(e)},n.useId=function(){return S.H.useId()},n.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},n.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},n.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},n.useMemo=function(e,t){return S.H.useMemo(e,t)},n.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},n.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},n.useRef=function(e){return S.H.useRef(e)},n.useState=function(e){return S.H.useState(e)},n.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},n.useTransition=function(){return S.H.useTransition()},n.version="19.2.4"},91788,(e,t,n)=>{"use strict";t.exports=e.r(61556)},41705,(e,t,n)=>{"use strict";n._=function(e){return e&&e.__esModule?e:{default:e}}},13584,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"HeadManagerContext",{enumerable:!0,get:function(){return r}});let r=e.r(41705)._(e.r(91788)).default.createContext({})},94470,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},52456,(e,t,n)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}n._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}},94941,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});let r=e.r(91788),o="u"<typeof window,i=o?()=>{}:r.useLayoutEffect,a=o?()=>{}:r.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let e=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(e))}}return o&&(t?.mountedInstances?.add(e.children),l()),i(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),i(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},80963,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return m},defaultHead:function(){return d}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=e.r(41705),a=e.r(52456),l=e.r(91398),s=a._(e.r(91788)),u=i._(e.r(94941)),c=e.r(13584);function d(){return[(0,l.jsx)("meta",{charSet:"utf-8"},"charset"),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(94470);let p=["name","httpEquiv","charSet","itemProp"];function h(e){let t,n,r,o;return e.reduce(f,[]).reverse().concat(d().reverse()).filter((t=new Set,n=new Set,r=new Set,o={},e=>{let i=!0,a=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){a=!0;let n=e.key.slice(e.key.indexOf("$")+1);t.has(n)?i=!1:t.add(n)}switch(e.type){case"title":case"base":n.has(e.type)?i=!1:n.add(e.type);break;case"meta":for(let t=0,n=p.length;t<n;t++){let n=p[t];if(e.props.hasOwnProperty(n))if("charSet"===n)r.has(n)?i=!1:r.add(n);else{let t=e.props[n],r=o[n]||new Set;("name"!==n||!a)&&r.has(t)?i=!1:(r.add(t),o[n]=r)}}}return i})).reverse().map((e,t)=>{let n=e.key||t;return s.default.cloneElement(e,{key:n})})}let m=function({children:e}){let t=(0,s.useContext)(c.HeadManagerContext);return(0,l.jsx)(u.default,{reduceComponentsToState:h,headManager:t,children:e})};("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},58678,(e,t,n)=>{t.exports=e.r(80963)},59858,85103,e=>{"use strict";let t={bed:{width:2e3,depth:1400,height:700},chair:{width:600,depth:600,height:850},table:{width:1400,depth:800,height:750},sofa:{width:1900,depth:800,height:750},bookshelf:{width:900,depth:300,height:1800},shelf:{width:1e3,depth:350,height:1800},washingMachine:{width:600,depth:600,height:850},refrigerator:{width:900,depth:700,height:1800},door:{width:900,depth:240,height:2e3}},n={fountain:{width:1200,depth:1200,height:1500},donkey:{width:1200,depth:600,height:1200},dog:{width:1200,depth:600,height:1200},couch:{width:1800,depth:800,height:800},badDouble:{width:1e3,depth:600,height:350},bookcase2:{width:900,depth:350,height:1800},chair2:{width:600,depth:600,height:850},door2:{width:900,depth:240,height:2e3}};function r(e,t,n){let r=Math.cos(n),o=Math.sin(n);return[e*r-t*o,e*o+t*r]}function o(e){let{halfW:o,halfH:i,halfD:a}=function(e){if("room"===e.kind){let t=100*(!1!==e.hasWalls);return{halfW:e.width/2+t,halfH:e.height/2,halfD:e.depth/2+t}}if("model"===e.kind){let t=n[e.modelType];return{halfW:(e.width||t.width)/2,halfH:(e.height||t.height)/2,halfD:(e.depth||t.depth)/2}}let r=t[e.furnitureType];return{halfW:(e.width||r.width)/2,halfH:(e.height||r.height)/2,halfD:(e.depth||r.depth)/2}}(e),l=[[-o,-i,-a],[o,-i,-a],[o,i,-a],[-o,i,-a],[-o,-i,a],[o,-i,a],[o,i,a],[-o,i,a]].map(([t,n,o])=>{let[i,a]=r(t,o,e.rotation[1]);return[i+e.position[0],n+e.position[1],a+e.position[2]]}),s=l.map(([e])=>e),u=l.map(([,e])=>e),c=l.map(([,,e])=>e);return{minX:Math.min(...s),maxX:Math.max(...s),minY:Math.min(...u),maxY:Math.max(...u),minZ:Math.min(...c),maxZ:Math.max(...c)}}function i(e,t,n=0){return e.minX<t.maxX-n&&e.maxX>t.minX+n&&e.minY<t.maxY&&e.maxY>t.minY&&e.minZ<t.maxZ-n&&e.maxZ>t.minZ+n}function a(e,t,n,r,a){let l=o({id:"candidate",kind:"room",name:"",width:n,depth:r,height:3,position:[e,0,t],rotation:[0,0,0],color:""});return!a.some(e=>i(l,o(e),0))}function l(e,t,n,r){let o=Math.max(n,r)+200;for(let[i,l]of function*(){yield[e[0],e[2]];let t=1;for(;t<=100;){for(let n=-t+1;n<=t;n++)yield[e[0]+n*o,e[2]-t*o];for(let n=-t+1;n<=t;n++)yield[e[0]+t*o,e[2]+n*o];for(let n=t-1;n>=-t;n--)yield[e[0]+n*o,e[2]+t*o];for(let n=t-1;n>=-t;n--)yield[e[0]-t*o,e[2]+n*o];t++}}())if(a(i,l,n,r,t))return[i,0,l];return[e[0],0,e[2]]}e.s(["ANIMATION_LABELS",0,{Idle:"대기",Idle_2:"대기2",Idle_Headlow:"대기(고개 숙임)",Idle_2_HeadLow:"대기(고개 숙임)",Walk:"걷기",Gallop:"질주",Gallop_Jump:"질주 점프",Jump_toIdle:"점프 후 대기",Jump_ToIdle:"점프 후 대기",Eating:"먹기",Attack_Headbutt:"공격(박치기)",Attack_Kick:"공격(차기)",Attack:"공격",Death:"죽음",Idle_HitReact_Left:"피격 반응(좌)",Idle_HitReact_Right:"피격 반응(우)"},"FURNITURE_DEFAULT_DIMENSIONS",0,t,"MODEL_ANIMATIONS",0,{donkey:["Idle","Idle_2","Idle_Headlow","Walk","Gallop","Gallop_Jump","Jump_toIdle","Eating","Attack_Headbutt","Attack_Kick","Death","Idle_HitReact_Left","Idle_HitReact_Right"],dog:["Idle","Idle_2","Idle_2_HeadLow","Walk","Gallop","Gallop_Jump","Jump_ToIdle","Eating","Attack","Death","Idle_HitReact_Left","Idle_HitReact_Right"]},"MODEL_DEFAULT_DIMENSIONS",0,n,"MODEL_LABELS",0,{fountain:"분수대",donkey:"당나귀",dog:"강아지",couch:"소파(GLB)",badDouble:"침대 더블(GLB)",bookcase2:"책장2",chair2:"의자2",door2:"문2"},"MODE_LABELS",0,{translate:"이동",rotate:"회전",scale:"크기"},"TYPE_LABELS",0,{bed:"침대",chair:"의자",table:"테이블",sofa:"소파",bookshelf:"책장",shelf:"선반",washingMachine:"세탁기",refrigerator:"냉장고",door:"문"},"WALL_THICKNESS",0,100],85103),e.s(["findNonOverlappingRoomPosition",0,function(e,t,n,r=[0,0,0],o=[0,0,0]){if(0===e.length)return[r[0],0,r[2]];if(1===e.length){let r=e[0];return l([(o[0]+r.position[0])/2,0,(o[2]+r.position[2])/2],e,t,n)}let i=e.reduce((e,t)=>t.position[0]**2+t.position[2]**2<e.position[0]**2+e.position[2]**2?t:e,e[0]),[s,,u]=i.position;for(let[r,o]of[[s+i.width/2+t/2+200,u],[s-i.width/2-t/2-200,u],[s,u+i.depth/2+n/2+200],[s,u-i.depth/2-n/2-200]])if(a(r,o,t,n,e))return[r,0,o];return l([s,0,u],e,t,n)},"resolveCollisions",0,function(e,t,n,r){let a=n,l=r,s={...e,position:[a,e.position[1],l]};for(let n=0;n<10;n++){let n=!1;for(let r of t){if(r.id===e.id)continue;let t=o(s),u=o(r),c=("room"===s.kind&&r.kind,0);if(i(t,u,c)){n=!0;let r=Math.min(t.maxX-u.minX,u.maxX-t.minX),o=Math.min(t.maxZ-u.minZ,u.maxZ-t.minZ),i=Math.max(0,r-c),d=Math.max(0,o-c);i>0&&(0===d||i<d)?a+=((t.minX+t.maxX)/2<(u.minX+u.maxX)/2?-1:1)*(i+.01):d>0&&(l+=((t.minZ+t.maxZ)/2<(u.minZ+u.maxZ)/2?-1:1)*(d+.01)),s.position=[a,e.position[1],l]}}if(!n)break}return{x:a,z:l}},"rotatePointY",0,r],59858)},11829,(e,t,n)=>{"use strict";function r(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,o=e[r];if(0<a(o,t))e[r]=t,e[n]=o,n=r;else break}}function o(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,o=e.length,i=o>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>a(s,n))u<o&&0>a(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else if(u<o&&0>a(c,n))e[r]=c,e[u]=n,r=u;else break}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(n.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var l,s=performance;n.unstable_now=function(){return s.now()}}else{var u=Date,c=u.now();n.unstable_now=function(){return u.now()-c}}var d=[],f=[],p=1,h=null,m=3,y=!1,g=!1,b=!1,x=!1,_="function"==typeof setTimeout?setTimeout:null,w="function"==typeof clearTimeout?clearTimeout:null,v="u">typeof setImmediate?setImmediate:null;function k(e){for(var t=o(f);null!==t;){if(null===t.callback)i(f);else if(t.startTime<=e)i(f),t.sortIndex=t.expirationTime,r(d,t);else break;t=o(f)}}function j(e){if(b=!1,k(e),!g)if(null!==o(d))g=!0,E||(E=!0,l());else{var t=o(f);null!==t&&L(j,t.startTime-e)}}var E=!1,S=-1,C=5,I=-1;function O(){return!!x||!(n.unstable_now()-I<C)}function T(){if(x=!1,E){var e=n.unstable_now();I=e;var t=!0;try{e:{g=!1,b&&(b=!1,w(S),S=-1),y=!0;var r=m;try{t:{for(k(e),h=o(d);null!==h&&!(h.expirationTime>e&&O());){var a=h.callback;if("function"==typeof a){h.callback=null,m=h.priorityLevel;var s=a(h.expirationTime<=e);if(e=n.unstable_now(),"function"==typeof s){h.callback=s,k(e),t=!0;break t}h===o(d)&&i(d),k(e)}else i(d);h=o(d)}if(null!==h)t=!0;else{var u=o(f);null!==u&&L(j,u.startTime-e),t=!1}}break e}finally{h=null,m=r,y=!1}}}finally{t?l():E=!1}}}if("function"==typeof v)l=function(){v(T)};else if("u">typeof MessageChannel){var N=new MessageChannel,D=N.port2;N.port1.onmessage=T,l=function(){D.postMessage(null)}}else l=function(){_(T,0)};function L(e,t){S=_(function(){e(n.unstable_now())},t)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_next=function(e){switch(m){case 1:case 2:case 3:var t=3;break;default:t=m}var n=m;m=t;try{return e()}finally{m=n}},n.unstable_requestPaint=function(){x=!0},n.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=m;m=e;try{return t()}finally{m=n}},n.unstable_scheduleCallback=function(e,t,i){var a=n.unstable_now();switch(i="object"==typeof i&&null!==i&&"number"==typeof(i=i.delay)&&0<i?a+i:a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=0x3fffffff;break;case 4:s=1e4;break;default:s=5e3}return s=i+s,e={id:p++,callback:t,priorityLevel:e,startTime:i,expirationTime:s,sortIndex:-1},i>a?(e.sortIndex=i,r(f,e),null===o(d)&&e===o(f)&&(b?(w(S),S=-1):b=!0,L(j,i-a))):(e.sortIndex=s,r(d,e),g||y||(g=!0,E||(E=!0,l()))),e},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(e){var t=m;return function(){var n=m;m=t;try{return e.apply(this,arguments)}finally{m=n}}}},52659,(e,t,n)=>{"use strict";t.exports=e.r(11829)},61592,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"LoadableContext",{enumerable:!0,get:function(){return r}});let r=e.r(41705)._(e.r(91788)).default.createContext(null)},52414,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return f}});let r=e.r(41705)._(e.r(91788)),o=e.r(61592),i=[],a=[],l=!1;function s(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class u{constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}}function c(t){return function(t,n){let s=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},n),c=null;function d(){if(!c){let e=new u(t,s);c={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return c.promise()}if("u"<typeof window&&i.push(d),!l&&"u">typeof window){let t=s.webpack&&"function"==typeof e.t.resolveWeak?s.webpack():s.modules;t&&a.push(e=>{for(let n of t)if(e.includes(n))return d()})}function f(e,t){let n;d(),(n=r.default.useContext(o.LoadableContext))&&Array.isArray(s.modules)&&s.modules.forEach(e=>{n(e)});let i=r.default.useSyncExternalStore(c.subscribe,c.getCurrentValue,c.getCurrentValue);return r.default.useImperativeHandle(t,()=>({retry:c.retry}),[]),r.default.useMemo(()=>{var t;return i.loading||i.error?r.default.createElement(s.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:c.retry}):i.loaded?r.default.createElement((t=i.loaded)&&t.default?t.default:t,e):null},[e,i])}return f.preload=()=>d(),f.displayName="LoadableComponent",r.default.forwardRef(f)}(s,t)}function d(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then(()=>{if(e.length)return d(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{d(i).then(e,t)}),c.preloadReady=(e=[])=>new Promise(t=>{let n=()=>(l=!0,t());d(a,e).then(n,n)}),"u">typeof window&&(window.__NEXT_PRELOADREADY=c.preloadReady);let f=c},25167,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return d},noSSR:function(){return c}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=e.r(41705),a=e.r(91398);e.r(91788);let l=i._(e.r(52414)),s="u"<typeof window;function u(e){return{default:e?.default||e}}function c(e,t){if(delete t.webpack,delete t.modules,!s)return e(t);let n=t.loading;return()=>(0,a.jsx)(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function d(e,t){let n=l.default,r={loading:({error:e,isLoading:t,pastDelay:n})=>null};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r={...r,...e});let o=(r={...r,...t}).loader;return(r.loadableGenerated&&(r={...r,...r.loadableGenerated},delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr)?n({...r,loader:()=>null!=o?o().then(u):Promise.resolve(u(()=>null))}):(delete r.webpack,delete r.modules,c(n,r))}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},68489,(e,t,n)=>{t.exports=e.r(25167)},83594,e=>{"use strict";var t=e.i(91398),n=e.i(91788),r=e.i(68489),o=e.i(58678),i=e.i(24005),a=e.i(60814);let l=a.default.div.withConfig({displayName:"styled__Container",componentId:"sc-859c6c55-0"})`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #1a1a1a;
`,s=a.default.header.withConfig({displayName:"styled__Header",componentId:"sc-859c6c55-1"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 16px;
  background: #272727;
  backdrop-filter: blur(8px);
  color: #ffffff;

  h1 {
    font-size: 18px;
    font-weight: 700;
  }

  p {
    font-size: 12px;
    color: #cccccc;
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
`,u=a.default.button.withConfig({displayName:"styled__MenuButton",componentId:"sc-859c6c55-2"})`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3f3f46;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 18px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  flex-shrink: 0;

  @media (min-width: 769px) {
    display: none;
  }
`,c=a.default.button.withConfig({displayName:"styled__HeaderToggleButton",componentId:"sc-859c6c55-3"})`
  display: none;
  align-items: center;
  justify-content: center;
  background: #3f3f46;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 18px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  flex-shrink: 0;

  @media (max-width: 768px) {
    display: flex;
  }
`,d=a.default.div.withConfig({displayName:"styled__Panel",componentId:"sc-859c6c55-4"})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;

  position: absolute;
  top: 50px;
  left: 0;
  bottom: 0;

  width: 240px;
  /* max-height: calc(100vh - 100px); */
  padding: 16px;

  border-radius: 0px;
  background: rgba(30, 30, 30, 0.88);
  backdrop-filter: blur(10px);
  color: #ffffff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  z-index: 10;
`,f=(0,a.default)(d).withConfig({displayName:"styled__LeftPanel",componentId:"sc-859c6c55-5"})`
  @media (max-width: 768px) {
    width: 80vw;
    max-width: 280px;
    transition: transform 0.2s ease;
    transform: translateX(${e=>e.$open?"0":"-100%"});
  }
`;(0,a.default)(d).withConfig({displayName:"styled__RightPanel",componentId:"sc-859c6c55-6"})`
  right: 20px;
`;let p=a.default.hr.withConfig({displayName:"styled__Divider",componentId:"sc-859c6c55-7"})`
  border: none;
  border-top: 1px solid #3f3f46;
  margin: 0;
`,h=a.default.h2.withConfig({displayName:"styled__SectionTitle",componentId:"sc-859c6c55-8"})`
  margin: 0 0 8px 0;
  font-size: 14px;
  font-weight: 600;
  color: #eeeeee;
  display: flex;
  align-items: center;
  gap: 8px;
`,m=a.default.div.withConfig({displayName:"styled__CollapseAllGroup",componentId:"sc-859c6c55-9"})`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-left: auto;
`,y=a.default.button.withConfig({displayName:"styled__CollapseAllButton",componentId:"sc-859c6c55-10"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  background: none;
  border: none;
  color: #a1a1aa;
  font-size: 13px;
  cursor: pointer;
  padding: 0;
  line-height: 1;

  &:hover {
    color: #ffffff;
  }
`,g=a.default.div.withConfig({displayName:"styled__ButtonGroup",componentId:"sc-859c6c55-11"})`
  display: flex;
  flex-wrap: ${e=>e.$nowrap?"nowrap":"wrap"};
  gap: 8px;
`,b=a.default.button.withConfig({displayName:"styled__Button",componentId:"sc-859c6c55-12"})`
  flex: ${e=>e.$compact?"0 0 auto":"1 1 auto"};
  min-width: ${e=>e.$compact?"0":"60px"};
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  background: ${e=>e.$disabled?"#52525b":e.$danger?"#dc2626":e.$active?"#3b82f6":"#3f3f46"};
  color: ${e=>e.$disabled?"#a1a1aa":"#ffffff"};
  font-size: 13px;
  font-weight: 500;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  transition: background 0.15s ease;

  &:hover {
    background: ${e=>e.$disabled?"#52525b":e.$danger?"#b91c1c":e.$active?"#2563eb":"#52525b"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,x=a.default.div.withConfig({displayName:"styled__ColorInputWrap",componentId:"sc-859c6c55-13"})`
  position: relative;
  width: 32px; /* 원하는 크기 */
  height: 32px;
  border-radius: 50%; /* 원형으로 설정 */
  overflow: hidden;
`,_=a.default.input.withConfig({displayName:"styled__ColorInput",componentId:"sc-859c6c55-14"})`
  /* width: 100%;
  height: 36px;
  min-height: 36px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: transparent; */

  position: absolute;
  top: -50%;
  left: -50%;
  width: 200% !important;
  height: 200% !important;
  border: none;
  cursor: pointer;
  background: none;
`,w=a.default.input.withConfig({displayName:"styled__NumberInput",componentId:"sc-859c6c55-15"})`
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #52525b;
  border-radius: 8px;
  background: #27272a;
  color: #ffffff;
  font-size: 13px;
  outline: none;

  &:focus {
    border-color: #3b82f6;
  }
`,v=a.default.input.withConfig({displayName:"styled__TextInput",componentId:"sc-859c6c55-16"})`
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #52525b;
  border-radius: 8px;
  background: #27272a;
  color: #ffffff;
  font-size: 13px;
  outline: none;

  &:focus {
    border-color: #3b82f6;
  }
`,k=a.default.div.withConfig({displayName:"styled__InputRow",componentId:"sc-859c6c55-17"})`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`;a.default.div.withConfig({displayName:"styled__DimField",componentId:"sc-859c6c55-18"})`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
`,a.default.span.withConfig({displayName:"styled__DimLabel",componentId:"sc-859c6c55-19"})`
  font-size: 10px;
  font-weight: 700;
  color: #71717a;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding-left: 2px;
`;let j=a.default.div.withConfig({displayName:"styled__DimInputWrapper",componentId:"sc-859c6c55-20"})`
  position: relative;
  flex: 0 0 auto;

  input {
    padding-right: 24px;
    width: 100%;
    box-sizing: border-box;
  }
`,E=a.default.span.withConfig({displayName:"styled__DimInlineLabel",componentId:"sc-859c6c55-21"})`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  font-weight: 700;
  color: #52525b;
  text-transform: uppercase;
  pointer-events: none;
  user-select: none;
`,S=a.default.div.withConfig({displayName:"styled__Hint",componentId:"sc-859c6c55-22"})`
  font-size: 12px;
  color: #a1a1aa;
  line-height: 1.5;
`,C=a.default.div.withConfig({displayName:"styled__List",componentId:"sc-859c6c55-23"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 8px;
`,I=a.default.div.withConfig({displayName:"styled__ListItem",componentId:"sc-859c6c55-24"})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;

  ${e=>e.$indent&&`margin-left: ${10+16*e.$indent}px;`}

  border-radius: 6px;
  background: ${e=>e.$selected?"#3b82f6":"#3f3f46"};
  color: #ffffff;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.15s ease;
  outline: ${e=>e.$dragOver?"2px solid #60a5fa":"none"};

  &:hover {
    background: ${e=>e.$selected?"#2563eb":"#52525b"};
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
      background: #52525b;
    }
  `}
`,O=a.default.div.withConfig({displayName:"styled__RoomChildren",componentId:"sc-859c6c55-25"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 14px;
  padding-left: 12px;
  padding-top: 3px;
  padding-bottom: 3px;
  border-left: 2px solid #52525b;
  outline: ${e=>e.$dragOver?"2px dashed #60a5fa":"none"};
  outline-offset: 2px;
  border-radius: 4px;

  ${e=>e.$empty&&`
    min-height: 28px;
    align-items: center;
    justify-content: center;
  `}
`,T=a.default.span.withConfig({displayName:"styled__ListItemType",componentId:"sc-859c6c55-26"})`
  font-size: 11px;
  color: #d4d4d8;
`,N=a.default.button.withConfig({displayName:"styled__CollapseToggle",componentId:"sc-859c6c55-27"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  background: none;
  border: none;
  color: #a1a1aa;
  font-size: 10px;
  cursor: pointer;
  padding: 0;
  line-height: 1;

  &:hover {
    color: #ffffff;
  }
`,D=a.default.span.withConfig({displayName:"styled__RoomName",componentId:"sc-859c6c55-28"})`
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,L=a.default.div.withConfig({displayName:"styled__HeaderButtons",componentId:"sc-859c6c55-29"})`
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
    background: #272727;
    border-radius: 0 0 0 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
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
`,$=a.default.input.withConfig({displayName:"styled__OpacitySlider",componentId:"sc-859c6c55-30"})`
  width: 100%;
  cursor: pointer;
`,P=a.default.div.withConfig({displayName:"styled__Toolbar",componentId:"sc-859c6c55-31"})`
  position: absolute;
  top: 50px;
  left: 240px;
  right: 0px;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  color: #ffffff;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    left: 0;
    top: 52px;
    padding: 8px 10px;
  }
`;a.default.div.withConfig({displayName:"styled__ToolbarDivider",componentId:"sc-859c6c55-32"})`
  width: 1px;
  height: 22px;
  background: #3f3f46;
  flex-shrink: 0;
`;var A=e.i(59858),R=e.i(85103);let M=(0,r.default)(()=>e.A(17050),{loadableGenerated:{modules:[97220]},ssr:!1}),H=["bed","chair","table","sofa","bookshelf","shelf","washingMachine","refrigerator"],U=["fountain","donkey","dog","couch","badDouble","bookcase2","chair2","door2"],F={bed:"#8b5cf6",chair:"#f59e0b",table:"#10b981",sofa:"#3b82f6",bookshelf:"#ec4899",shelf:"#14b8a6",washingMachine:"#94a3b8",refrigerator:"#64748b",door:"#92400e"},B={fountain:"#06b6d4",donkey:"#a78bfa",dog:"#fbbf24",couch:"#f59e0b",badDouble:"#ef4444",bookcase2:"#ec4899",chair2:"#f59e0b",door2:"#92400e"},z={position:[16e3,16e3,16e3],target:[0,0,0]},W="dtf-state",X={container:e=>({...e,width:"150px"}),control:e=>({...e,background:"#27272a",borderColor:"#52525b",borderRadius:"8px",minHeight:"34px",boxShadow:"none",cursor:"pointer",fontSize:"13px",":hover":{borderColor:"#71717a"}}),singleValue:e=>({...e,color:"#ffffff"}),input:e=>({...e,color:"#ffffff"}),menu:e=>({...e,background:"#27272a",border:"1px solid #52525b",borderRadius:"8px",overflow:"hidden",zIndex:30}),option:(e,t)=>({...e,background:t.isSelected?"#3b82f6":t.isFocused?"#3f3f46":"#27272a",color:"#ffffff",cursor:"pointer",fontSize:"13px"}),indicatorSeparator:e=>({...e,background:"#52525b"}),dropdownIndicator:e=>({...e,color:"#a1a1aa"})},G={id:`room-${Date.now()}`,kind:"room",name:"방 1",width:8e3,depth:8e3,height:3e3,position:[0,0,0],rotation:[0,0,0],color:"#a8afb3"};e.s(["default",0,function(){let[e,r]=(0,n.useState)([G]),[a,d]=(0,n.useState)(null),[Y,V]=(0,n.useState)("translate"),[Z,J]=(0,n.useState)(z),[K,q]=(0,n.useState)(1),[Q,ee]=(0,n.useState)(!1),[et,en]=(0,n.useState)(null),[er,eo]=(0,n.useState)(!1),[ei,ea]=(0,n.useState)(!1),[el,es]=(0,n.useState)(!1),[eu,ec]=(0,n.useState)(!1),[ed,ef]=(0,n.useState)(()=>new Set),ep=(0,n.useRef)(null),eh=(0,n.useRef)(G.id),em=(0,n.useRef)(null),ey=(0,n.useRef)(e),eg=(0,n.useRef)([]),eb=(0,n.useRef)([]),ex=(0,n.useRef)(null),e_=(0,n.useCallback)(()=>{eo(eg.current.length>0),ea(eb.current.length>0)},[]),ew=(0,n.useCallback)(e=>{d(e),null===e&&V("translate")},[]),ev=(0,n.useCallback)(e=>{ef(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},[]),ek=(0,n.useCallback)(e=>{eg.current.push(ey.current),eb.current=[],r(e),e_()},[e_]),ej=(0,n.useCallback)(()=>{if(0===eg.current.length)return;let e=ey.current,t=eg.current.pop();eb.current.push(e),r(t),e_()},[e_]),eE=(0,n.useCallback)(()=>{if(0===eb.current.length)return;let e=ey.current,t=eb.current.pop();eg.current.push(e),r(t),e_()},[e_]),eS=(0,n.useCallback)(()=>{let e=`room-${Date.now()}`,t=ey.current.filter(e=>"room"===e.kind),n=(0,A.findNonOverlappingRoomPosition)(t,8e3,8e3,Z.target,Z.position),r=ey.current.filter(e=>"room"===e.kind).length,o={id:e,kind:"room",name:`방 ${r+1}`,width:8e3,depth:8e3,height:3e3,position:n,rotation:[0,0,0],color:"#a8afb3"};ek([...ey.current,o]),ew(e)},[ek,ew,Z]),eC=(0,n.useCallback)(()=>{let e=`room-${Date.now()}`,t=ey.current.filter(e=>"room"===e.kind),n=(0,A.findNonOverlappingRoomPosition)(t,2400,8e3,Z.target,Z.position),r=ey.current.filter(e=>"room"===e.kind&&!1===e.hasWalls).length,o={id:e,kind:"room",name:`공간 ${r+1}`,width:2400,depth:8e3,height:3e3,position:n,rotation:[0,0,0],color:"#a8afb3",hasWalls:!1};ek([...ey.current,o]),ew(e)},[ek,ew,Z]),eI=(0,n.useCallback)(e=>{let t=`${e}-${Date.now()}`,n=ey.current.find(e=>e.id===a)??null,r=(()=>{if(n?.kind==="room")return n;if(eh.current){let e=ey.current.find(e=>"room"===e.kind&&e.id===eh.current);if(e)return e}return ey.current.find(e=>"room"===e.kind)})(),o=R.FURNITURE_DEFAULT_DIMENSIONS[e],i=ey.current.filter(e=>"furniture"===e.kind).length,l={id:t,kind:"furniture",furnitureType:e,roomId:r?.id??null,name:`${R.TYPE_LABELS[e]} ${i+1}`,width:o.width,depth:o.depth,height:o.height,position:[0,10*("door"!==e),0],rotation:[0,0,0],color:F[e]};ek([...ey.current,l]),ew(t)},[ek,a,ew]),eO=(0,n.useCallback)(e=>{let t=`${e}-${Date.now()}`,n=ey.current.find(e=>e.id===a)??null,r=(()=>{if(n?.kind==="room")return n;if(eh.current){let e=ey.current.find(e=>"room"===e.kind&&e.id===eh.current);if(e)return e}return ey.current.find(e=>"room"===e.kind)})(),o=R.MODEL_DEFAULT_DIMENSIONS[e],i=ey.current.filter(e=>"model"===e.kind).length,l={id:t,kind:"model",modelType:e,roomId:r?.id??null,name:`${R.MODEL_LABELS[e]} ${i+1}`,width:o.width,depth:o.depth,height:o.height,position:[0,10,0],rotation:[0,0,0],color:B[e]};ek([...ey.current,l]),ew(t)},[ek,a,ew]),eT=(0,n.useCallback)((e,t)=>{ek(ey.current.map(n=>n.id===e?{...n,...t}:n))},[ek]),eN=(0,n.useCallback)(()=>{if(!a)return;let e=ey.current.find(e=>e.id===a);e?.kind==="room"?ek(ey.current.filter(e=>("furniture"!==e.kind&&"model"!==e.kind||e.roomId!==a)&&e.id!==a)):ek(ey.current.filter(e=>e.id!==a)),ew(null)},[ek,a,ew]),eD=(0,n.useCallback)(e=>e.map(e=>{if("model"===e.kind){let t=R.MODEL_DEFAULT_DIMENSIONS[e.modelType];return t&&("number"!=typeof e.width||"number"!=typeof e.depth||"number"!=typeof e.height)?Array.isArray(e.scale)&&3===e.scale.length?{...e,width:t.width*e.scale[0],depth:t.depth*e.scale[2],height:t.height*e.scale[1]}:{...e,width:t.width,depth:t.depth,height:t.height}:e}if("furniture"!==e.kind)return e;let t=R.FURNITURE_DEFAULT_DIMENSIONS[e.furnitureType];return t&&("number"!=typeof e.width||"number"!=typeof e.depth||"number"!=typeof e.height)?Array.isArray(e.scale)&&3===e.scale.length?{...e,width:t.width*e.scale[0],depth:t.depth*e.scale[2],height:t.height*e.scale[1]}:{...e,width:t.width,depth:t.depth,height:t.height}:e}),[]),eL=(0,n.useCallback)(e=>{let t=e.filter(e=>"room"===e.kind),n=e.filter(e=>"room"!==e.kind);return t.length<=1&&0===n.length},[]),e$=(0,n.useCallback)(()=>{let t=new Blob([JSON.stringify({items:e,camera:Z,wallOpacity:K,autoTransparent:Q,version:1},null,2)],{type:"application/json"}),n=URL.createObjectURL(t),r=document.createElement("a");r.href=n,r.download=`drop-the-furniture-${Date.now()}.json`,r.click(),URL.revokeObjectURL(n)},[e,Z,K,Q]),eP=(0,n.useCallback)(e=>{let t=e.target.files?.[0];if(!t)return;let n=new FileReader;n.onload=e=>{try{let t=JSON.parse(e.target?.result);if(!Array.isArray(t.items)||!t.camera)return void window.alert("올바르지 않은 파일 형식입니다.");let n=eD(t.items);ek(n),J(t.camera),q(t.wallOpacity??1),ee(t.autoTransparent??!1),ew(null)}catch{window.alert("JSON 파싱에 실패했습니다.")}},n.readAsText(t),e.target.value=""},[ek,ew,eD]),eA=(0,n.useCallback)(()=>{(eg.current?.length>0||eb.current?.length>0)&&e$();let e={id:`room-${Date.now()}`,kind:"room",name:"방 1",width:8e3,depth:8e3,height:3e3,position:[0,0,0],rotation:[0,0,0],color:"#a8afb3"};eg.current=[],eb.current=[],r([e]),ew(null),J(z),q(.5),eh.current=e.id,localStorage.removeItem(W),e_()},[e_,e$,ew]);(0,n.useEffect)(()=>{let e=e=>{let t=e.items.find(e=>"room"===e.kind);eh.current=t?.id??G.id,(0,n.startTransition)(()=>{r(e.items),d(e.selectedId??null),V(e.mode??"translate"),J(e.camera??z),q(e.wallOpacity??1),ee(e.autoTransparent??!1)})},t=function(){try{let e=localStorage.getItem(W);if(e)return JSON.parse(e)}catch{}return null}();t&&Array.isArray(t.items)&&!eL(t.items)?e({items:eD(t.items),camera:t.camera,wallOpacity:t.wallOpacity,autoTransparent:t.autoTransparent,selectedId:t.selectedId,mode:t.mode}):fetch("/sample_layout.json").then(e=>e.json()).then(t=>{Array.isArray(t.items)&&e({items:eD(t.items),camera:t.camera,wallOpacity:t.wallOpacity,autoTransparent:t.autoTransparent})}).catch(()=>{})},[eL,eD]),(0,n.useEffect)(()=>{ey.current=e},[e]),(0,n.useEffect)(()=>{localStorage.setItem(W,JSON.stringify({items:e,selectedId:a,mode:Y,camera:Z,wallOpacity:K,autoTransparent:Q,version:1}))},[e,a,Y,Z,K,Q]),(0,n.useEffect)(()=>{let t=e.find(e=>e.id===a);t?.kind==="room"&&(eh.current=t.id)},[e,a]),(0,n.useEffect)(()=>{let e=e=>{if("Escape"===e.key){a&&(e.preventDefault(),ew(null));return}if("Delete"===e.key||"Backspace"===e.key){if(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)return;if(a){e.preventDefault(),eN();return}}(e.ctrlKey||e.metaKey)&&("z"!==e.key.toLowerCase()||e.shiftKey?("y"===e.key.toLowerCase()||"z"===e.key.toLowerCase()&&e.shiftKey)&&(e.preventDefault(),eE()):(e.preventDefault(),ej()))};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[ej,eE,a,eN,ew]),(0,n.useEffect)(()=>{if(!el)return;let e=e=>{ep.current&&!ep.current.contains(e.target)&&es(!1)};return window.addEventListener("pointerdown",e),()=>{window.removeEventListener("pointerdown",e)}},[el]),e.filter(e=>"room"===e.kind).length,e.filter(e=>"furniture"===e.kind).length;let eR=e.filter(e=>"room"===e.kind),eM=e.filter(e=>"furniture"===e.kind&&!e.roomId),eH=e.filter(e=>"model"===e.kind&&!e.roomId),eU=e.find(e=>e.id===a);return eU?.kind,(0,t.jsxs)(l,{children:[(0,t.jsxs)(o.default,{children:[(0,t.jsx)("title",{children:"Drop the Furniture - 3D 방 & 가구 배치"}),(0,t.jsx)("meta",{name:"description",content:"3D 공간에서 방과 가구를 자유롭게 배치하고 편집할 수 있는 Next.js 기반 웹 앱입니다. 방 추가, 가구 배치, 이동/회전/크기 조절, 저장/불러오기 기능을 제공합니다."}),(0,t.jsx)("meta",{name:"keywords",content:"3D 가구 배치, 방 꾸미기, 인테리어 시뮬레이터, Drop the Furniture, Three.js, Next.js, 가구 배치 도구"}),(0,t.jsx)("meta",{name:"author",content:"Drop the Furniture"}),(0,t.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,t.jsx)("meta",{name:"robots",content:"index, follow"}),(0,t.jsx)("meta",{property:"og:type",content:"website"}),(0,t.jsx)("meta",{property:"og:title",content:"Drop the Furniture - 3D 방 & 가구 배치"}),(0,t.jsx)("meta",{property:"og:description",content:"3D 공간에서 방과 가구를 자유롭게 배치하고 편집할 수 있는 웹 앱입니다."}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,t.jsx)("meta",{name:"twitter:title",content:"Drop the Furniture - 3D 방 & 가구 배치"}),(0,t.jsx)("meta",{name:"twitter:description",content:"3D 공간에서 방과 가구를 자유롭게 배치하고 편집할 수 있는 웹 앱입니다."})]}),(0,t.jsxs)(s,{children:[(0,t.jsx)(u,{onPointerDown:e=>{e.stopPropagation()},onClick:e=>{es(e=>!e)},children:"☰"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{children:"Drop the Furniture"}),(0,t.jsx)("p",{children:"방과 가구를 자유롭게 배치해보세요."})]}),(0,t.jsx)(c,{onClick:()=>ec(e=>!e),children:"⋮"}),(0,t.jsxs)(L,{$open:eu,children:[(0,t.jsx)(b,{$compact:!0,onClick:eA,children:"🗑️ New"}),(0,t.jsx)(b,{$compact:!0,onClick:ej,disabled:!er,children:"↩ Undo"}),(0,t.jsx)(b,{$compact:!0,onClick:eE,disabled:!ei,children:"↪ Redo"}),(0,t.jsx)(b,{$compact:!0,onClick:e$,children:"💾 저장"}),(0,t.jsx)(b,{$compact:!0,onClick:()=>ex.current?.click(),children:"📂 불러오기"}),(0,t.jsx)("input",{ref:ex,type:"file",accept:"application/json",style:{display:"none"},onChange:eP})]})]}),(0,t.jsxs)(f,{ref:ep,$open:el,children:[(0,t.jsx)(h,{children:"방 추가"}),(0,t.jsxs)(g,{children:[(0,t.jsx)(b,{onClick:eS,children:"방"}),(0,t.jsx)(b,{onClick:eC,children:"공간"}),(0,t.jsx)(b,{onClick:()=>eI("door"),children:"🚪 문"})]}),(0,t.jsx)(p,{}),(0,t.jsx)(h,{children:"가구 추가"}),(0,t.jsx)(g,{children:H.map(e=>(0,t.jsx)(b,{onClick:()=>eI(e),children:R.TYPE_LABELS[e]},e))}),(0,t.jsx)(S,{children:"버튼을 누르면 방 중앙에 방/가구/문이 생성됩니다."}),(0,t.jsx)(p,{}),(0,t.jsx)(h,{children:"모델 추가"}),(0,t.jsx)(g,{children:U.map(e=>(0,t.jsx)(b,{onClick:()=>eO(e),children:R.MODEL_LABELS[e]},e))}),(0,t.jsx)(p,{}),(0,t.jsx)(h,{children:"설정"}),(0,t.jsx)(S,{children:"벽 투명도"}),(0,t.jsx)($,{type:"range",min:0,max:1,step:.05,value:K,onChange:e=>q(parseFloat(e.target.value))}),(0,t.jsx)(b,{$compact:!0,$active:Q,onClick:()=>ee(e=>!e),children:"👁 자동 투명"}),(0,t.jsx)(p,{}),(0,t.jsxs)(h,{children:["목록",eR.length>0&&(0,t.jsxs)(m,{children:[(0,t.jsx)(y,{title:"모두 펼치기",onClick:()=>ef(new Set),children:"⊞"}),(0,t.jsx)(y,{title:"모두 접기",onClick:()=>ef(new Set(eR.map(e=>e.id))),children:"⊟"})]})]}),(0,t.jsxs)(C,{children:[eR.map(r=>{let o=[...e.filter(e=>"furniture"===e.kind&&e.roomId===r.id),...e.filter(e=>"model"===e.kind&&e.roomId===r.id)];return(0,t.jsxs)(n.Fragment,{children:[(0,t.jsxs)(I,{$selected:r.id===a,$kind:"room",$dragOver:et===r.id,onClick:()=>ew(r.id),onDragOver:e=>{e.preventDefault(),em.current&&en(r.id)},onDragLeave:()=>en(null),onDrop:()=>{let e=em.current;e&&(eT(e,{roomId:r.id,position:[0,10,0]}),em.current=null,en(null))},children:[(0,t.jsxs)(D,{children:[(0,t.jsx)(N,{onPointerDown:e=>e.stopPropagation(),onClick:e=>{e.stopPropagation(),ev(r.id)},children:ed.has(r.id)?"▸":"▾"}),r.name]}),(0,t.jsx)(T,{children:!1===r.hasWalls?"공간":"방"})]}),!ed.has(r.id)&&(0,t.jsx)(O,{$dragOver:et===r.id,$empty:0===o.length,onDragOver:e=>{e.preventDefault(),em.current&&en(r.id)},onDragLeave:()=>en(null),onDrop:()=>{let e=em.current;e&&(eT(e,{roomId:r.id,position:[0,10,0]}),em.current=null,en(null))},children:o.length>0?o.map(e=>{let n="model"===e.kind?R.MODEL_LABELS[e.modelType]:R.TYPE_LABELS[e.furnitureType];return(0,t.jsxs)(I,{$selected:e.id===a,$kind:"furniture",$tree:!0,draggable:!0,onClick:()=>ew(e.id),onDragStart:()=>{em.current=e.id},onDragEnd:()=>{em.current=null,en(null)},children:[(0,t.jsx)("span",{children:e.name}),(0,t.jsx)(T,{children:n})]},e.id)}):(0,t.jsx)(S,{children:"여기로 드래그"})})]},r.id)}),eM.map(e=>(0,t.jsxs)(I,{$selected:e.id===a,$kind:"furniture",draggable:!0,onClick:()=>ew(e.id),onDragStart:()=>{em.current=e.id},onDragEnd:()=>{em.current=null,en(null)},children:[(0,t.jsx)("span",{children:e.name}),(0,t.jsx)(T,{children:R.TYPE_LABELS[e.furnitureType]})]},e.id)),eH.map(e=>(0,t.jsxs)(I,{$selected:e.id===a,$kind:"furniture",draggable:!0,onClick:()=>ew(e.id),onDragStart:()=>{em.current=e.id},onDragEnd:()=>{em.current=null,en(null)},children:[(0,t.jsx)("span",{children:e.name}),(0,t.jsx)(T,{children:R.MODEL_LABELS[e.modelType]})]},e.id))]}),!eU&&(0,t.jsx)(S,{children:"목록에서 항목을 클릭하면 선택해서 편집할 수 있습니다."})]}),eU&&(0,t.jsxs)(P,{children:[(0,t.jsx)(g,{$nowrap:!0,children:["translate","rotate","scale"].map(e=>(0,t.jsx)(b,{$active:Y===e,onClick:()=>V(e),children:R.MODE_LABELS[e]},e))}),(0,t.jsx)(v,{type:"text",value:eU.name,style:{width:"130px"},onChange:e=>eT(eU.id,{name:e.target.value})}),(0,t.jsx)(x,{children:(0,t.jsx)(_,{type:"color",value:eU.color,style:{width:"36px",padding:0},onChange:e=>eT(eU.id,{color:e.target.value})})}),"model"===eU.kind&&R.MODEL_ANIMATIONS[eU.modelType]&&(0,t.jsx)(i.default,{styles:X,value:eU.animationName&&R.MODEL_ANIMATIONS[eU.modelType].includes(eU.animationName)?{value:eU.animationName,label:R.ANIMATION_LABELS[eU.animationName]??eU.animationName}:null,onChange:e=>eT(eU.id,{animationName:e?.value||void 0}),options:R.MODEL_ANIMATIONS[eU.modelType].map(e=>({value:e,label:R.ANIMATION_LABELS[e]??e})),placeholder:"애니메이션"}),("room"===eU.kind||"furniture"===eU.kind||"model"===eU.kind)&&(0,t.jsx)(k,{style:{gap:"6px"},children:["width","depth","height"].map((e,n)=>(0,t.jsxs)(j,{style:{width:"72px"},children:[(0,t.jsx)(w,{type:"number",min:100,step:"room"===eU.kind?100:10,value:eU[e],onChange:t=>eT(eU.id,{[e]:parseFloat(t.target.value)||1})}),(0,t.jsx)(E,{children:["W","D","H"][n]})]},e))}),(0,t.jsx)(b,{$danger:!0,$compact:!0,onClick:eN,children:"삭제"})]}),(0,t.jsx)(M,{items:e,selectedId:a,mode:Y,cameraState:Z,wallOpacity:K,autoTransparent:Q,onSelect:ew,onChange:eT,onCameraChange:J})]})}],83594)},9977,(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/c",()=>e.r(83594)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/c"])})},48761,e=>{e.v(t=>Promise.all(["static/chunks/0ey~yy8oeyp~5.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/0599p99vu8fk5.js"].map(t=>e.l(t))).then(()=>t(79466)))},17050,e=>{e.v(t=>Promise.all(["static/chunks/0gadv2etgw2vm.js"].map(t=>e.l(t))).then(()=>t(97220)))}]);