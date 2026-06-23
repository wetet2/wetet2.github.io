(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,20955,(e,t,n)=>{var r={229:function(e){var t,n,r,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}var u=[],s=!1,c=-1;function d(){s&&r&&(s=!1,r.length?u=r.concat(u):c=-1,u.length&&f())}function f(){if(!s){var e=l(d);s=!0;for(var t=u.length;t;){for(r=u,u=[];++c<t;)r&&r[c].run();c=-1,t=u.length}r=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||s||l(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}},a=!0;try{r[e](n,n.exports,o),a=!1}finally{a&&delete i[e]}return n.exports}o.ab="/ROOT/node_modules/next/dist/compiled/process/",t.exports=o(229)},50461,(e,t,n)=>{"use strict";var r,i;t.exports=(null==(r=e.g.process)?void 0:r.env)&&"object"==typeof(null==(i=e.g.process)?void 0:i.env)?e.g.process:e.r(20955)},8481,(e,t,n)=>{"use strict";var r=Symbol.for("react.transitional.element");function i(e,t,n){var i=null;if(void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),"key"in t)for(var o in n={},t)"key"!==o&&(n[o]=t[o]);else n=t;return{$$typeof:r,type:e,key:i,ref:void 0!==(t=n.ref)?t:null,props:n}}n.Fragment=Symbol.for("react.fragment"),n.jsx=i,n.jsxs=i},91398,(e,t,n)=>{"use strict";t.exports=e.r(8481)},61556,(e,t,n)=>{"use strict";var r=e.i(50461),i=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),y=Symbol.iterator,g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,x={};function _(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||g}function w(){}function v(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||g}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=_.prototype;var k=v.prototype=new w;k.constructor=v,b(k,_.prototype),k.isPureReactComponent=!0;var j=Array.isArray;function E(){}var C={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function O(e,t,n){var r=n.ref;return{$$typeof:i,type:e,key:t,ref:void 0!==r?r:null,props:n}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var I=/\/+/g;function D(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function $(e,t,n){if(null==e)return e;var r=[],a=0;return!function e(t,n,r,a,l){var u,s,c,d=typeof t;("undefined"===d||"boolean"===d)&&(t=null);var f=!1;if(null===t)f=!0;else switch(d){case"bigint":case"string":case"number":f=!0;break;case"object":switch(t.$$typeof){case i:case o:f=!0;break;case h:return e((f=t._init)(t._payload),n,r,a,l)}}if(f)return l=l(t),f=""===a?"."+D(t,0):a,j(l)?(r="",null!=f&&(r=f.replace(I,"$&/")+"/"),e(l,n,r,"",function(e){return e})):null!=l&&(T(l)&&(u=l,s=r+(null==l.key||t&&t.key===l.key?"":(""+l.key).replace(I,"$&/")+"/")+f,l=O(u.type,s,u.props)),n.push(l)),1;f=0;var p=""===a?".":a+":";if(j(t))for(var m=0;m<t.length;m++)d=p+D(a=t[m],m),f+=e(a,n,r,d,l);else if("function"==typeof(m=null===(c=t)||"object"!=typeof c?null:"function"==typeof(c=y&&c[y]||c["@@iterator"])?c:null))for(t=m.call(t),m=0;!(a=t.next()).done;)d=p+D(a=a.value,m++),f+=e(a,n,r,d,l);else if("object"===d){if("function"==typeof t.then)return e(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"==typeof e.status?e.then(E,E):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(t),n,r,a,l);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.")}return f}(e,r,"","",function(e){return t.call(n,e,a++)}),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var L="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof r.default&&"function"==typeof r.default.emit)return void r.default.emit("uncaughtException",e);console.error(e)};n.Activity=m,n.Children={map:$,forEach:function(e,t,n){$(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $(e,function(){t++}),t},toArray:function(e){return $(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=_,n.Fragment=a,n.Profiler=u,n.PureComponent=v,n.StrictMode=l,n.Suspense=f,n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,n.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},n.cache=function(e){return function(){return e.apply(null,arguments)}},n.cacheSignal=function(){return null},n.cloneElement=function(e,t,n){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".");var r=b({},e.props),i=e.key;if(null!=t)for(o in void 0!==t.key&&(i=""+t.key),t)S.call(t,o)&&"key"!==o&&"__self"!==o&&"__source"!==o&&("ref"!==o||void 0!==t.ref)&&(r[o]=t[o]);var o=arguments.length-2;if(1===o)r.children=n;else if(1<o){for(var a=Array(o),l=0;l<o;l++)a[l]=arguments[l+2];r.children=a}return O(e.type,i,r)},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},n.createElement=function(e,t,n){var r,i={},o=null;if(null!=t)for(r in void 0!==t.key&&(o=""+t.key),t)S.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(i[r]=t[r]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return O(e,o,i)},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:d,render:e}},n.isValidElement=T,n.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:P}},n.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},n.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;null!==i&&i(n,r),"object"==typeof r&&null!==r&&"function"==typeof r.then&&r.then(E,L)}catch(e){L(e)}finally{null!==t&&null!==n.types&&(t.types=n.types),C.T=t}},n.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},n.use=function(e){return C.H.use(e)},n.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},n.useCallback=function(e,t){return C.H.useCallback(e,t)},n.useContext=function(e){return C.H.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},n.useEffect=function(e,t){return C.H.useEffect(e,t)},n.useEffectEvent=function(e){return C.H.useEffectEvent(e)},n.useId=function(){return C.H.useId()},n.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},n.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},n.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},n.useMemo=function(e,t){return C.H.useMemo(e,t)},n.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},n.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},n.useRef=function(e){return C.H.useRef(e)},n.useState=function(e){return C.H.useState(e)},n.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},n.useTransition=function(){return C.H.useTransition()},n.version="19.2.4"},91788,(e,t,n)=>{"use strict";t.exports=e.r(61556)},41705,(e,t,n)=>{"use strict";n._=function(e){return e&&e.__esModule?e:{default:e}}},13584,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"HeadManagerContext",{enumerable:!0,get:function(){return r}});let r=e.r(41705)._(e.r(91788)).default.createContext({})},94470,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},52456,(e,t,n)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}n._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var i={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(i,a,l):i[a]=e[a]}return i.default=e,n&&n.set(e,i),i}},94941,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});let r=e.r(91788),i="u"<typeof window,o=i?()=>{}:r.useLayoutEffect,a=i?()=>{}:r.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let e=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(e))}}return i&&(t?.mountedInstances?.add(e.children),l()),o(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},80963,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return m},defaultHead:function(){return d}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=e.r(41705),a=e.r(52456),l=e.r(91398),u=a._(e.r(91788)),s=o._(e.r(94941)),c=e.r(13584);function d(){return[(0,l.jsx)("meta",{charSet:"utf-8"},"charset"),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(94470);let p=["name","httpEquiv","charSet","itemProp"];function h(e){let t,n,r,i;return e.reduce(f,[]).reverse().concat(d().reverse()).filter((t=new Set,n=new Set,r=new Set,i={},e=>{let o=!0,a=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){a=!0;let n=e.key.slice(e.key.indexOf("$")+1);t.has(n)?o=!1:t.add(n)}switch(e.type){case"title":case"base":n.has(e.type)?o=!1:n.add(e.type);break;case"meta":for(let t=0,n=p.length;t<n;t++){let n=p[t];if(e.props.hasOwnProperty(n))if("charSet"===n)r.has(n)?o=!1:r.add(n);else{let t=e.props[n],r=i[n]||new Set;("name"!==n||!a)&&r.has(t)?o=!1:(r.add(t),i[n]=r)}}}return o})).reverse().map((e,t)=>{let n=e.key||t;return u.default.cloneElement(e,{key:n})})}let m=function({children:e}){let t=(0,u.useContext)(c.HeadManagerContext);return(0,l.jsx)(s.default,{reduceComponentsToState:h,headManager:t,children:e})};("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},58678,(e,t,n)=>{t.exports=e.r(80963)},89129,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return _},NormalizeError:function(){return b},PageNotFoundError:function(){return x},SP:function(){return m},ST:function(){return y},WEB_VITALS:function(){return o},execOnce:function(){return a},getDisplayName:function(){return d},getLocationOrigin:function(){return s},getURL:function(){return c},isAbsoluteUrl:function(){return u},isResSent:function(){return f},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return v}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>l.test(e);function s(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function c(){let{href:e}=window.location,t=s();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&f(n))return r;if(!r)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return r}let m="u">typeof performance,y=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class b extends Error{}class x extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class _ extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},20262,(e,t,n)=>{"use strict";let r;Object.defineProperty(n,"__esModule",{value:!0});var i={getAssetToken:function(){return u},getAssetTokenQuery:function(){return s},getDeploymentId:function(){return a},getDeploymentIdQuery:function(){return l}};for(var o in i)Object.defineProperty(n,o,{enumerable:!0,get:i[o]});function a(){return r}function l(e=!1){let t=r;return t?`${e?"&":"?"}dpl=${t}`:""}function u(){return!1}function s(e=!1){return""}"u">typeof window?(r=document.documentElement.dataset.dplId,delete document.documentElement.dataset.dplId):r=void 0},17431,(e,t,n)=>{"use strict";var r=e.r(91788);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var a={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function s(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,n.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(i(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},n.flushSync=function(e){var t=u.T,n=a.p;try{if(u.T=null,a.p=2,e)return e()}finally{u.T=t,a.p=n,a.d.f()}},n.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,a.d.C(e,t))},n.prefetchDNS=function(e){"string"==typeof e&&a.d.D(e)},n.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var n=t.as,r=s(n,t.crossOrigin),i="string"==typeof t.integrity?t.integrity:void 0,o="string"==typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?a.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):"script"===n&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},n.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=s(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},n.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var n=t.as,r=s(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},n.preloadModule=function(e,t){if("string"==typeof e)if(t){var n=s(t.as,t.crossOrigin);a.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},n.requestFormReset=function(e){a.d.r(e)},n.unstable_batchedUpdates=function(e,t){return e(t)},n.useFormState=function(e,t,n){return u.H.useFormState(e,t,n)},n.useFormStatus=function(){return u.H.useHostTransitionStatus()},n.version="19.2.4"},30943,(e,t,n)=>{"use strict";!function e(){if("u">typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),t.exports=e.r(17431)},25479,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"RouterContext",{enumerable:!0,get:function(){return r}});let r=e.r(41705)._(e.r(91788)).default.createContext(null)},15125,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={VALID_LOADERS:function(){return o},imageConfigDefault:function(){return a}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=["default","imgix","cloudinary","akamai","custom"],a={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},13521,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=e.r(41705)._(e.r(91788)),i=e.r(15125),o=r.default.createContext(i.imageConfigDefault)},59858,85103,e=>{"use strict";let t={bed:{width:2e3,depth:1400,height:700},chair:{width:600,depth:600,height:850},table:{width:1400,depth:800,height:750},sofa:{width:1900,depth:800,height:750},bookshelf:{width:900,depth:300,height:1800},shelf:{width:1e3,depth:350,height:1800},washingMachine:{width:600,depth:600,height:850},refrigerator:{width:900,depth:700,height:1800},door:{width:900,depth:240,height:2e3}},n={fountain:{width:1200,depth:1200,height:1500},donkey:{width:1200,depth:600,height:1200},couch:{width:1800,depth:800,height:800},badDouble:{width:1e3,depth:600,height:350}};function r(e){let{halfW:r,halfH:i,halfD:o}=function(e){if("room"===e.kind)return{halfW:e.width/2+100,halfH:e.height/2,halfD:e.depth/2+100};if("model"===e.kind){let t=n[e.modelType];return{halfW:(e.width||t.width)/2,halfH:(e.height||t.height)/2,halfD:(e.depth||t.depth)/2}}let r=t[e.furnitureType];return{halfW:(e.width||r.width)/2,halfH:(e.height||r.height)/2,halfD:(e.depth||r.depth)/2}}(e),a=[[-r,-i,-o],[r,-i,-o],[r,i,-o],[-r,i,-o],[-r,-i,o],[r,-i,o],[r,i,o],[-r,i,o]].map(([t,n,r])=>{var i;let o,a,[l,u]=(o=Math.cos(i=e.rotation[1]),[t*o-r*(a=Math.sin(i)),t*a+r*o]);return[l+e.position[0],n+e.position[1],u+e.position[2]]}),l=a.map(([e])=>e),u=a.map(([,e])=>e),s=a.map(([,,e])=>e);return{minX:Math.min(...l),maxX:Math.max(...l),minY:Math.min(...u),maxY:Math.max(...u),minZ:Math.min(...s),maxZ:Math.max(...s)}}function i(e,t,n=0){return e.minX<t.maxX-n&&e.maxX>t.minX+n&&e.minY<t.maxY&&e.maxY>t.minY&&e.minZ<t.maxZ-n&&e.maxZ>t.minZ+n}e.s(["FURNITURE_DEFAULT_DIMENSIONS",0,t,"MODEL_DEFAULT_DIMENSIONS",0,n,"MODEL_LABELS",0,{fountain:"분수대",donkey:"당나귀",couch:"소파(GLB)",badDouble:"침대 더블(GLB)"},"MODE_LABELS",0,{translate:"이동",rotate:"회전",scale:"크기"},"TYPE_LABELS",0,{bed:"침대",chair:"의자",table:"테이블",sofa:"소파",bookshelf:"책장",shelf:"선반",washingMachine:"세탁기",refrigerator:"냉장고",door:"문"},"WALL_THICKNESS",0,100],85103),e.s(["findNonOverlappingRoomPosition",0,function(e,t,n){if(0===e.length)return[0,0,0];let o=Math.max(t,n)+200,a={id:"candidate",kind:"room",name:"",width:t,depth:n,height:3,position:[0,0,0],rotation:[0,0,0],color:""};for(let[t,n]of function*(){yield[0,0];let e=1;for(;e<=100;){for(let t=-e+1;t<=e;t++)yield[t*o,-e*o];for(let t=-e+1;t<=e;t++)yield[e*o,t*o];for(let t=e-1;t>=-e;t--)yield[t*o,e*o];for(let t=e-1;t>=-e;t--)yield[-e*o,t*o];e++}}()){let o=r({...a,position:[t,0,n]});if(!e.some(e=>i(o,r(e),0)))return[t,0,n]}return[e.length*o,0,0]},"resolveCollisions",0,function(e,t,n,o){let a=n,l=o,u={...e,position:[a,e.position[1],l]};for(let n=0;n<10;n++){let n=!1;for(let o of t){if(o.id===e.id)continue;let t=r(u),s=r(o),c=("room"===u.kind&&o.kind,0);if(i(t,s,c)){n=!0;let r=Math.min(t.maxX-s.minX,s.maxX-t.minX),i=Math.min(t.maxZ-s.minZ,s.maxZ-t.minZ),o=Math.max(0,r-c),d=Math.max(0,i-c);o>0&&(0===d||o<d)?a+=((t.minX+t.maxX)/2<(s.minX+s.maxX)/2?-1:1)*(o+.01):d>0&&(l+=((t.minZ+t.maxZ)/2<(s.minZ+s.maxZ)/2?-1:1)*(d+.01)),u.position=[a,e.position[1],l]}}if(!n)break}return{x:a,z:l}}],59858)},11829,(e,t,n)=>{"use strict";function r(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,i=e[r];if(0<a(i,t))e[r]=t,e[n]=i,n=r;else break}}function i(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,i=e.length,o=i>>>1;r<o;){var l=2*(r+1)-1,u=e[l],s=l+1,c=e[s];if(0>a(u,n))s<i&&0>a(c,u)?(e[r]=c,e[s]=n,r=s):(e[r]=u,e[l]=n,r=l);else if(s<i&&0>a(c,n))e[r]=c,e[s]=n,r=s;else break}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(n.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var l,u=performance;n.unstable_now=function(){return u.now()}}else{var s=Date,c=s.now();n.unstable_now=function(){return s.now()-c}}var d=[],f=[],p=1,h=null,m=3,y=!1,g=!1,b=!1,x=!1,_="function"==typeof setTimeout?setTimeout:null,w="function"==typeof clearTimeout?clearTimeout:null,v="u">typeof setImmediate?setImmediate:null;function k(e){for(var t=i(f);null!==t;){if(null===t.callback)o(f);else if(t.startTime<=e)o(f),t.sortIndex=t.expirationTime,r(d,t);else break;t=i(f)}}function j(e){if(b=!1,k(e),!g)if(null!==i(d))g=!0,E||(E=!0,l());else{var t=i(f);null!==t&&P(j,t.startTime-e)}}var E=!1,C=-1,S=5,O=-1;function T(){return!!x||!(n.unstable_now()-O<S)}function I(){if(x=!1,E){var e=n.unstable_now();O=e;var t=!0;try{e:{g=!1,b&&(b=!1,w(C),C=-1),y=!0;var r=m;try{t:{for(k(e),h=i(d);null!==h&&!(h.expirationTime>e&&T());){var a=h.callback;if("function"==typeof a){h.callback=null,m=h.priorityLevel;var u=a(h.expirationTime<=e);if(e=n.unstable_now(),"function"==typeof u){h.callback=u,k(e),t=!0;break t}h===i(d)&&o(d),k(e)}else o(d);h=i(d)}if(null!==h)t=!0;else{var s=i(f);null!==s&&P(j,s.startTime-e),t=!1}}break e}finally{h=null,m=r,y=!1}}}finally{t?l():E=!1}}}if("function"==typeof v)l=function(){v(I)};else if("u">typeof MessageChannel){var D=new MessageChannel,$=D.port2;D.port1.onmessage=I,l=function(){$.postMessage(null)}}else l=function(){_(I,0)};function P(e,t){C=_(function(){e(n.unstable_now())},t)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<e?Math.floor(1e3/e):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_next=function(e){switch(m){case 1:case 2:case 3:var t=3;break;default:t=m}var n=m;m=t;try{return e()}finally{m=n}},n.unstable_requestPaint=function(){x=!0},n.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=m;m=e;try{return t()}finally{m=n}},n.unstable_scheduleCallback=function(e,t,o){var a=n.unstable_now();switch(o="object"==typeof o&&null!==o&&"number"==typeof(o=o.delay)&&0<o?a+o:a,e){case 1:var u=-1;break;case 2:u=250;break;case 5:u=0x3fffffff;break;case 4:u=1e4;break;default:u=5e3}return u=o+u,e={id:p++,callback:t,priorityLevel:e,startTime:o,expirationTime:u,sortIndex:-1},o>a?(e.sortIndex=o,r(f,e),null===i(d)&&e===i(f)&&(b?(w(C),C=-1):b=!0,P(j,o-a))):(e.sortIndex=u,r(d,e),g||y||(g=!0,E||(E=!0,l()))),e},n.unstable_shouldYield=T,n.unstable_wrapCallback=function(e){var t=m;return function(){var n=m;m=t;try{return e.apply(this,arguments)}finally{m=n}}}},52659,(e,t,n)=>{"use strict";t.exports=e.r(11829)},61592,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"LoadableContext",{enumerable:!0,get:function(){return r}});let r=e.r(41705)._(e.r(91788)).default.createContext(null)},52414,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return f}});let r=e.r(41705)._(e.r(91788)),i=e.r(61592),o=[],a=[],l=!1;function u(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class s{constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}}function c(t){return function(t,n){let u=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},n),c=null;function d(){if(!c){let e=new s(t,u);c={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return c.promise()}if("u"<typeof window&&o.push(d),!l&&"u">typeof window){let t=u.webpack&&"function"==typeof e.t.resolveWeak?u.webpack():u.modules;t&&a.push(e=>{for(let n of t)if(e.includes(n))return d()})}function f(e,t){let n;d(),(n=r.default.useContext(i.LoadableContext))&&Array.isArray(u.modules)&&u.modules.forEach(e=>{n(e)});let o=r.default.useSyncExternalStore(c.subscribe,c.getCurrentValue,c.getCurrentValue);return r.default.useImperativeHandle(t,()=>({retry:c.retry}),[]),r.default.useMemo(()=>{var t;return o.loading||o.error?r.default.createElement(u.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:c.retry}):o.loaded?r.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return f.preload=()=>d(),f.displayName="LoadableComponent",r.default.forwardRef(f)}(u,t)}function d(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then(()=>{if(e.length)return d(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{d(o).then(e,t)}),c.preloadReady=(e=[])=>new Promise(t=>{let n=()=>(l=!0,t());d(a,e).then(n,n)}),"u">typeof window&&(window.__NEXT_PRELOADREADY=c.preloadReady);let f=c},25167,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return d},noSSR:function(){return c}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=e.r(41705),a=e.r(91398);e.r(91788);let l=o._(e.r(52414)),u="u"<typeof window;function s(e){return{default:e?.default||e}}function c(e,t){if(delete t.webpack,delete t.modules,!u)return e(t);let n=t.loading;return()=>(0,a.jsx)(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function d(e,t){let n=l.default,r={loading:({error:e,isLoading:t,pastDelay:n})=>null};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r={...r,...e});let i=(r={...r,...t}).loader;return(r.loadableGenerated&&(r={...r,...r.loadableGenerated},delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr)?n({...r,loader:()=>null!=i?i().then(s):Promise.resolve(s(()=>null))}):(delete r.webpack,delete r.modules,c(n,r))}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},68489,(e,t,n)=>{t.exports=e.r(25167)},83594,e=>{"use strict";var t=e.i(91398),n=e.i(91788),r=e.i(68489),i=e.i(58678),o=e.i(60814);let a=o.default.div.withConfig({displayName:"styled__Container",componentId:"sc-859c6c55-0"})`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #1a1a1a;
`,l=o.default.header.withConfig({displayName:"styled__Header",componentId:"sc-859c6c55-1"})`
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
`,u=o.default.button.withConfig({displayName:"styled__MenuButton",componentId:"sc-859c6c55-2"})`
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
`,s=o.default.button.withConfig({displayName:"styled__HeaderToggleButton",componentId:"sc-859c6c55-3"})`
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
`,c=o.default.div.withConfig({displayName:"styled__Panel",componentId:"sc-859c6c55-4"})`
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
`,d=(0,o.default)(c).withConfig({displayName:"styled__LeftPanel",componentId:"sc-859c6c55-5"})`
  @media (max-width: 768px) {
    width: 80vw;
    max-width: 280px;
    transition: transform 0.2s ease;
    transform: translateX(${e=>e.$open?"0":"-100%"});
  }
`;(0,o.default)(c).withConfig({displayName:"styled__RightPanel",componentId:"sc-859c6c55-6"})`
  right: 20px;
`;let f=o.default.hr.withConfig({displayName:"styled__Divider",componentId:"sc-859c6c55-7"})`
  border: none;
  border-top: 1px solid #3f3f46;
  margin: 0;
`,p=o.default.h2.withConfig({displayName:"styled__SectionTitle",componentId:"sc-859c6c55-8"})`
  margin: 0 0 8px 0;
  font-size: 14px;
  font-weight: 600;
  color: #eeeeee;
`,h=o.default.div.withConfig({displayName:"styled__ButtonGroup",componentId:"sc-859c6c55-9"})`
  display: flex;
  flex-wrap: ${e=>e.$nowrap?"nowrap":"wrap"};
  gap: 8px;
`,m=o.default.button.withConfig({displayName:"styled__Button",componentId:"sc-859c6c55-10"})`
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
`,y=o.default.div.withConfig({displayName:"styled__ColorInputWrap",componentId:"sc-859c6c55-11"})`
  position: relative;
  width: 32px; /* 원하는 크기 */
  height: 32px;
  border-radius: 50%; /* 원형으로 설정 */
  overflow: hidden;
`,g=o.default.input.withConfig({displayName:"styled__ColorInput",componentId:"sc-859c6c55-12"})`
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
`,b=o.default.input.withConfig({displayName:"styled__NumberInput",componentId:"sc-859c6c55-13"})`
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
`,x=o.default.input.withConfig({displayName:"styled__TextInput",componentId:"sc-859c6c55-14"})`
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
`,_=o.default.div.withConfig({displayName:"styled__InputRow",componentId:"sc-859c6c55-15"})`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`;o.default.div.withConfig({displayName:"styled__DimField",componentId:"sc-859c6c55-16"})`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
`,o.default.span.withConfig({displayName:"styled__DimLabel",componentId:"sc-859c6c55-17"})`
  font-size: 10px;
  font-weight: 700;
  color: #71717a;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding-left: 2px;
`;let w=o.default.div.withConfig({displayName:"styled__DimInputWrapper",componentId:"sc-859c6c55-18"})`
  position: relative;
  flex: 0 0 auto;

  input {
    padding-right: 24px;
    width: 100%;
    box-sizing: border-box;
  }
`,v=o.default.span.withConfig({displayName:"styled__DimInlineLabel",componentId:"sc-859c6c55-19"})`
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
`,k=o.default.div.withConfig({displayName:"styled__Hint",componentId:"sc-859c6c55-20"})`
  font-size: 12px;
  color: #a1a1aa;
  line-height: 1.5;
`,j=o.default.div.withConfig({displayName:"styled__List",componentId:"sc-859c6c55-21"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 8px;
`,E=o.default.div.withConfig({displayName:"styled__ListItem",componentId:"sc-859c6c55-22"})`
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
`,C=o.default.div.withConfig({displayName:"styled__RoomChildren",componentId:"sc-859c6c55-23"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 14px;
  padding-left: 12px;
  padding-top: 3px;
  padding-bottom: 3px;
  border-left: 2px solid #52525b;
`,S=o.default.span.withConfig({displayName:"styled__ListItemType",componentId:"sc-859c6c55-24"})`
  font-size: 11px;
  color: #d4d4d8;
`,O=o.default.div.withConfig({displayName:"styled__HeaderButtons",componentId:"sc-859c6c55-25"})`
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
`,T=o.default.input.withConfig({displayName:"styled__OpacitySlider",componentId:"sc-859c6c55-26"})`
  width: 100%;
  cursor: pointer;
`,I=o.default.div.withConfig({displayName:"styled__Toolbar",componentId:"sc-859c6c55-27"})`
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
`;o.default.div.withConfig({displayName:"styled__ToolbarDivider",componentId:"sc-859c6c55-28"})`
  width: 1px;
  height: 22px;
  background: #3f3f46;
  flex-shrink: 0;
`;var D=e.i(59858),$=e.i(85103);let P=(0,r.default)(()=>e.A(17050),{loadableGenerated:{modules:[97220]},ssr:!1}),L=["bed","chair","table","sofa","bookshelf","shelf","washingMachine","refrigerator"],N=["fountain","donkey","couch","badDouble"],R={bed:"#8b5cf6",chair:"#f59e0b",table:"#10b981",sofa:"#3b82f6",bookshelf:"#ec4899",shelf:"#14b8a6",washingMachine:"#94a3b8",refrigerator:"#64748b",door:"#92400e"},M={fountain:"#06b6d4",donkey:"#a78bfa",couch:"#f59e0b",badDouble:"#ef4444"},A={position:[16e3,16e3,16e3],target:[0,0,0]},H="dtf-state",U={id:`room-${Date.now()}`,kind:"room",name:"방 1",width:8e3,depth:8e3,height:3e3,position:[0,0,0],rotation:[0,0,0],color:"#a8afb3"};e.s(["default",0,function(){let[e,r]=(0,n.useState)([U]),[o,c]=(0,n.useState)(null),[F,z]=(0,n.useState)("translate"),[B,X]=(0,n.useState)(A),[Y,V]=(0,n.useState)(1),[W,Z]=(0,n.useState)(!1),[G,K]=(0,n.useState)(null),[q,J]=(0,n.useState)(!1),[Q,ee]=(0,n.useState)(!1),[et,en]=(0,n.useState)(!1),[er,ei]=(0,n.useState)(!1),eo=(0,n.useRef)(null),ea=(0,n.useRef)(U.id),el=(0,n.useRef)(null),eu=(0,n.useRef)(e),es=(0,n.useRef)([]),ec=(0,n.useRef)([]),ed=(0,n.useRef)(null),ef=(0,n.useCallback)(()=>{J(es.current.length>0),ee(ec.current.length>0)},[]),ep=(0,n.useCallback)(e=>{c(e),null===e&&z("translate")},[]),eh=(0,n.useCallback)(e=>{es.current.push(eu.current),ec.current=[],r(e),ef()},[ef]),em=(0,n.useCallback)(()=>{if(0===es.current.length)return;let e=eu.current,t=es.current.pop();ec.current.push(e),r(t),ef()},[ef]),ey=(0,n.useCallback)(()=>{if(0===ec.current.length)return;let e=eu.current,t=ec.current.pop();es.current.push(e),r(t),ef()},[ef]),eg=(0,n.useCallback)(()=>{let e=`room-${Date.now()}`,t=eu.current.filter(e=>"room"===e.kind),n=(0,D.findNonOverlappingRoomPosition)(t,8e3,8e3),r=eu.current.filter(e=>"room"===e.kind).length,i={id:e,kind:"room",name:`방 ${r+1}`,width:8e3,depth:8e3,height:3e3,position:n,rotation:[0,0,0],color:"#a8afb3"};eh([...eu.current,i]),ep(e)},[eh,ep]),eb=(0,n.useCallback)(e=>{let t=`${e}-${Date.now()}`,n=eu.current.find(e=>e.id===o)??null,r=(()=>{if(n?.kind==="room")return n;if(ea.current){let e=eu.current.find(e=>"room"===e.kind&&e.id===ea.current);if(e)return e}return eu.current.find(e=>"room"===e.kind)})(),i=$.FURNITURE_DEFAULT_DIMENSIONS[e],a=eu.current.filter(e=>"furniture"===e.kind).length,l={id:t,kind:"furniture",furnitureType:e,roomId:r?.id??null,name:`${$.TYPE_LABELS[e]} ${a+1}`,width:i.width,depth:i.depth,height:i.height,position:[0,10*("door"!==e),0],rotation:[0,0,0],color:R[e]};eh([...eu.current,l]),ep(t)},[eh,o,ep]),ex=(0,n.useCallback)(e=>{let t=`${e}-${Date.now()}`,n=eu.current.find(e=>e.id===o)??null,r=(()=>{if(n?.kind==="room")return n;if(ea.current){let e=eu.current.find(e=>"room"===e.kind&&e.id===ea.current);if(e)return e}return eu.current.find(e=>"room"===e.kind)})(),i=$.MODEL_DEFAULT_DIMENSIONS[e],a=eu.current.filter(e=>"model"===e.kind).length,l={id:t,kind:"model",modelType:e,roomId:r?.id??null,name:`${$.MODEL_LABELS[e]} ${a+1}`,width:i.width,depth:i.depth,height:i.height,position:[0,10,0],rotation:[0,0,0],color:M[e]};eh([...eu.current,l]),ep(t)},[eh,o,ep]),e_=(0,n.useCallback)((e,t)=>{eh(eu.current.map(n=>n.id===e?{...n,...t}:n))},[eh]),ew=(0,n.useCallback)(()=>{if(!o)return;let e=eu.current.find(e=>e.id===o);e?.kind==="room"?eh(eu.current.filter(e=>("furniture"!==e.kind&&"model"!==e.kind||e.roomId!==o)&&e.id!==o)):eh(eu.current.filter(e=>e.id!==o)),ep(null)},[eh,o,ep]),ev=(0,n.useCallback)(e=>e.map(e=>{if("model"===e.kind){let t=$.MODEL_DEFAULT_DIMENSIONS[e.modelType];return t&&("number"!=typeof e.width||"number"!=typeof e.depth||"number"!=typeof e.height)?Array.isArray(e.scale)&&3===e.scale.length?{...e,width:t.width*e.scale[0],depth:t.depth*e.scale[2],height:t.height*e.scale[1]}:{...e,width:t.width,depth:t.depth,height:t.height}:e}if("furniture"!==e.kind)return e;let t=$.FURNITURE_DEFAULT_DIMENSIONS[e.furnitureType];return t&&("number"!=typeof e.width||"number"!=typeof e.depth||"number"!=typeof e.height)?Array.isArray(e.scale)&&3===e.scale.length?{...e,width:t.width*e.scale[0],depth:t.depth*e.scale[2],height:t.height*e.scale[1]}:{...e,width:t.width,depth:t.depth,height:t.height}:e}),[]),ek=(0,n.useCallback)(e=>{let t=e.filter(e=>"room"===e.kind),n=e.filter(e=>"room"!==e.kind);return t.length<=1&&0===n.length},[]),ej=(0,n.useCallback)(()=>{let t=new Blob([JSON.stringify({items:e,camera:B,wallOpacity:Y,autoTransparent:W,version:1},null,2)],{type:"application/json"}),n=URL.createObjectURL(t),r=document.createElement("a");r.href=n,r.download=`drop-the-furniture-${Date.now()}.json`,r.click(),URL.revokeObjectURL(n)},[e,B,Y,W]),eE=(0,n.useCallback)(e=>{let t=e.target.files?.[0];if(!t)return;let n=new FileReader;n.onload=e=>{try{let t=JSON.parse(e.target?.result);if(!Array.isArray(t.items)||!t.camera)return void window.alert("올바르지 않은 파일 형식입니다.");let n=ev(t.items);eh(n),X(t.camera),V(t.wallOpacity??1),Z(t.autoTransparent??!1),ep(null)}catch{window.alert("JSON 파싱에 실패했습니다.")}},n.readAsText(t),e.target.value=""},[eh,ep,ev]),eC=(0,n.useCallback)(()=>{(es.current?.length>0||ec.current?.length>0)&&ej();let e={id:`room-${Date.now()}`,kind:"room",name:"방 1",width:8e3,depth:8e3,height:3e3,position:[0,0,0],rotation:[0,0,0],color:"#a8afb3"};es.current=[],ec.current=[],r([e]),ep(null),X(A),V(.5),ea.current=e.id,localStorage.removeItem(H),ef()},[ef,ej,ep]);(0,n.useEffect)(()=>{let e=e=>{let t=e.items.find(e=>"room"===e.kind);ea.current=t?.id??U.id,(0,n.startTransition)(()=>{r(e.items),c(e.selectedId??null),z(e.mode??"translate"),X(e.camera??A),V(e.wallOpacity??1),Z(e.autoTransparent??!1)})},t=function(){try{let e=localStorage.getItem(H);if(e)return JSON.parse(e)}catch{}return null}();t&&Array.isArray(t.items)&&!ek(t.items)?e({items:ev(t.items),camera:t.camera,wallOpacity:t.wallOpacity,autoTransparent:t.autoTransparent,selectedId:t.selectedId,mode:t.mode}):fetch("/sample_layout.json").then(e=>e.json()).then(t=>{Array.isArray(t.items)&&e({items:ev(t.items),camera:t.camera,wallOpacity:t.wallOpacity,autoTransparent:t.autoTransparent})}).catch(()=>{})},[ek,ev]),(0,n.useEffect)(()=>{eu.current=e},[e]),(0,n.useEffect)(()=>{localStorage.setItem(H,JSON.stringify({items:e,selectedId:o,mode:F,camera:B,wallOpacity:Y,autoTransparent:W,version:1}))},[e,o,F,B,Y,W]),(0,n.useEffect)(()=>{let t=e.find(e=>e.id===o);t?.kind==="room"&&(ea.current=t.id)},[e,o]),(0,n.useEffect)(()=>{let e=e=>{if("Escape"===e.key){o&&(e.preventDefault(),ep(null));return}if("Delete"===e.key||"Backspace"===e.key){if(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)return;if(o){e.preventDefault(),ew();return}}(e.ctrlKey||e.metaKey)&&("z"!==e.key.toLowerCase()||e.shiftKey?("y"===e.key.toLowerCase()||"z"===e.key.toLowerCase()&&e.shiftKey)&&(e.preventDefault(),ey()):(e.preventDefault(),em()))};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[em,ey,o,ew,ep]),(0,n.useEffect)(()=>{if(!et)return;let e=e=>{eo.current&&!eo.current.contains(e.target)&&en(!1)};return window.addEventListener("pointerdown",e),()=>{window.removeEventListener("pointerdown",e)}},[et]),e.filter(e=>"room"===e.kind).length,e.filter(e=>"furniture"===e.kind).length;let eS=e.filter(e=>"room"===e.kind),eO=e.filter(e=>"furniture"===e.kind&&!e.roomId),eT=e.filter(e=>"model"===e.kind&&!e.roomId),eI=e.find(e=>e.id===o);return eI?.kind,(0,t.jsxs)(a,{children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:"Drop the Furniture - 3D 방 & 가구 배치"}),(0,t.jsx)("meta",{name:"description",content:"3D 공간에서 방과 가구를 자유롭게 배치하고 편집할 수 있는 Next.js 기반 웹 앱입니다. 방 추가, 가구 배치, 이동/회전/크기 조절, 저장/불러오기 기능을 제공합니다."}),(0,t.jsx)("meta",{name:"keywords",content:"3D 가구 배치, 방 꾸미기, 인테리어 시뮬레이터, Drop the Furniture, Three.js, Next.js, 가구 배치 도구"}),(0,t.jsx)("meta",{name:"author",content:"Drop the Furniture"}),(0,t.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,t.jsx)("meta",{name:"robots",content:"index, follow"}),(0,t.jsx)("meta",{property:"og:type",content:"website"}),(0,t.jsx)("meta",{property:"og:title",content:"Drop the Furniture - 3D 방 & 가구 배치"}),(0,t.jsx)("meta",{property:"og:description",content:"3D 공간에서 방과 가구를 자유롭게 배치하고 편집할 수 있는 웹 앱입니다."}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,t.jsx)("meta",{name:"twitter:title",content:"Drop the Furniture - 3D 방 & 가구 배치"}),(0,t.jsx)("meta",{name:"twitter:description",content:"3D 공간에서 방과 가구를 자유롭게 배치하고 편집할 수 있는 웹 앱입니다."})]}),(0,t.jsxs)(l,{children:[(0,t.jsx)(u,{onPointerDown:e=>{e.stopPropagation()},onClick:e=>{en(e=>!e)},children:"☰"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{children:"Drop the Furniture"}),(0,t.jsx)("p",{children:"방과 가구를 자유롭게 배치해보세요."})]}),(0,t.jsx)(s,{onClick:()=>ei(e=>!e),children:"⋮"}),(0,t.jsxs)(O,{$open:er,children:[(0,t.jsx)(m,{$compact:!0,onClick:eC,children:"🗑️ New"}),(0,t.jsx)(m,{$compact:!0,onClick:em,disabled:!q,children:"↩ Undo"}),(0,t.jsx)(m,{$compact:!0,onClick:ey,disabled:!Q,children:"↪ Redo"}),(0,t.jsx)(m,{$compact:!0,onClick:ej,children:"💾 저장"}),(0,t.jsx)(m,{$compact:!0,onClick:()=>ed.current?.click(),children:"📂 불러오기"}),(0,t.jsx)("input",{ref:ed,type:"file",accept:"application/json",style:{display:"none"},onChange:eE})]})]}),(0,t.jsxs)(d,{ref:eo,$open:et,children:[(0,t.jsx)(p,{children:"방 추가"}),(0,t.jsxs)(h,{children:[(0,t.jsx)(m,{onClick:eg,children:"방 추가"}),(0,t.jsx)(m,{onClick:()=>eb("door"),children:"🚪 문"})]}),(0,t.jsx)(f,{}),(0,t.jsx)(p,{children:"가구 추가"}),(0,t.jsx)(h,{children:L.map(e=>(0,t.jsx)(m,{onClick:()=>eb(e),children:$.TYPE_LABELS[e]},e))}),(0,t.jsx)(k,{children:"버튼을 누르면 방 중앙에 방/가구/문이 생성됩니다."}),(0,t.jsx)(f,{}),(0,t.jsx)(p,{children:"모델 추가"}),(0,t.jsx)(h,{children:N.map(e=>(0,t.jsx)(m,{onClick:()=>ex(e),children:$.MODEL_LABELS[e]},e))}),(0,t.jsx)(f,{}),(0,t.jsx)(p,{children:"설정"}),(0,t.jsx)(k,{children:"벽 투명도"}),(0,t.jsx)(T,{type:"range",min:0,max:1,step:.05,value:Y,onChange:e=>V(parseFloat(e.target.value))}),(0,t.jsx)(m,{$compact:!0,$active:W,onClick:()=>Z(e=>!e),children:"👁 자동 투명"}),(0,t.jsx)(f,{}),(0,t.jsx)(p,{children:"목록"}),(0,t.jsxs)(j,{children:[eS.map(r=>{let i=[...e.filter(e=>"furniture"===e.kind&&e.roomId===r.id),...e.filter(e=>"model"===e.kind&&e.roomId===r.id)];return(0,t.jsxs)(n.Fragment,{children:[(0,t.jsxs)(E,{$selected:r.id===o,$kind:"room",$dragOver:G===r.id,onClick:()=>ep(r.id),onDragOver:e=>{e.preventDefault(),el.current&&K(r.id)},onDragLeave:()=>K(null),onDrop:()=>{let e=el.current;e&&(e_(e,{roomId:r.id,position:[0,10,0]}),el.current=null,K(null))},children:[(0,t.jsx)("span",{children:r.name}),(0,t.jsx)(S,{children:"방"})]}),i.length>0&&(0,t.jsx)(C,{children:i.map(e=>{let n="model"===e.kind?$.MODEL_LABELS[e.modelType]:$.TYPE_LABELS[e.furnitureType];return(0,t.jsxs)(E,{$selected:e.id===o,$kind:"furniture",$tree:!0,draggable:!0,onClick:()=>ep(e.id),onDragStart:()=>{el.current=e.id},onDragEnd:()=>{el.current=null,K(null)},children:[(0,t.jsx)("span",{children:e.name}),(0,t.jsx)(S,{children:n})]},e.id)})})]},r.id)}),eO.map(e=>(0,t.jsxs)(E,{$selected:e.id===o,$kind:"furniture",draggable:!0,onClick:()=>ep(e.id),onDragStart:()=>{el.current=e.id},onDragEnd:()=>{el.current=null,K(null)},children:[(0,t.jsx)("span",{children:e.name}),(0,t.jsx)(S,{children:$.TYPE_LABELS[e.furnitureType]})]},e.id)),eT.map(e=>(0,t.jsxs)(E,{$selected:e.id===o,$kind:"furniture",draggable:!0,onClick:()=>ep(e.id),onDragStart:()=>{el.current=e.id},onDragEnd:()=>{el.current=null,K(null)},children:[(0,t.jsx)("span",{children:e.name}),(0,t.jsx)(S,{children:$.MODEL_LABELS[e.modelType]})]},e.id))]}),!eI&&(0,t.jsx)(k,{children:"목록에서 항목을 클릭하면 선택해서 편집할 수 있습니다."})]}),eI&&(0,t.jsxs)(I,{children:[(0,t.jsx)(h,{$nowrap:!0,children:["translate","rotate","scale"].map(e=>(0,t.jsx)(m,{$active:F===e,onClick:()=>z(e),children:$.MODE_LABELS[e]},e))}),(0,t.jsx)(x,{type:"text",value:eI.name,style:{width:"130px"},onChange:e=>e_(eI.id,{name:e.target.value})}),(0,t.jsx)(y,{children:(0,t.jsx)(g,{type:"color",value:eI.color,style:{width:"36px",padding:0},onChange:e=>e_(eI.id,{color:e.target.value})})}),("room"===eI.kind||"furniture"===eI.kind||"model"===eI.kind)&&(0,t.jsx)(_,{style:{gap:"6px"},children:["width","depth","height"].map((e,n)=>(0,t.jsxs)(w,{style:{width:"72px"},children:[(0,t.jsx)(b,{type:"number",min:100,step:"room"===eI.kind?100:10,value:eI[e],onChange:t=>e_(eI.id,{[e]:parseFloat(t.target.value)||1})}),(0,t.jsx)(v,{children:["W","D","H"][n]})]},e))}),(0,t.jsx)(m,{$danger:!0,$compact:!0,onClick:ew,children:"삭제"})]}),(0,t.jsx)(P,{items:e,selectedId:o,mode:F,cameraState:B,wallOpacity:Y,autoTransparent:W,onSelect:ep,onChange:e_,onCameraChange:X})]})}],83594)},9977,(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/c",()=>e.r(83594)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/c"])})},48761,e=>{e.v(t=>Promise.all(["static/chunks/0ey~yy8oeyp~5.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/0599p99vu8fk5.js"].map(t=>e.l(t))).then(()=>t(79466)))},17050,e=>{e.v(t=>Promise.all(["static/chunks/173d..vk~264f.js"].map(t=>e.l(t))).then(()=>t(97220)))}]);