(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,89129,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return h},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return v},NormalizeError:function(){return x},PageNotFoundError:function(){return b},SP:function(){return m},ST:function(){return y},WEB_VITALS:function(){return i},execOnce:function(){return a},getDisplayName:function(){return c},getLocationOrigin:function(){return d},getURL:function(){return f},isAbsoluteUrl:function(){return s},isResSent:function(){return u},loadGetInitialProps:function(){return g},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return _}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>l.test(e);function d(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function f(){let{href:e}=window.location,t=d();return e.substring(t.length)}function c(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function g(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await g(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&u(n))return r;if(!r)throw Object.defineProperty(Error(`"${c(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return r}let m="u">typeof performance,y=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class x extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function _(e){return JSON.stringify({message:e.message,stack:e.stack})}},17431,(e,t,n)=>{"use strict";var r=e.r(91788);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(o(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),s=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,n.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(o(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},n.flushSync=function(e){var t=s.T,n=a.p;try{if(s.T=null,a.p=2,e)return e()}finally{s.T=t,a.p=n,a.d.f()}},n.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,a.d.C(e,t))},n.prefetchDNS=function(e){"string"==typeof e&&a.d.D(e)},n.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var n=t.as,r=d(n,t.crossOrigin),o="string"==typeof t.integrity?t.integrity:void 0,i="string"==typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?a.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:o,fetchPriority:i}):"script"===n&&a.d.X(e,{crossOrigin:r,integrity:o,fetchPriority:i,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},n.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=d(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},n.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var n=t.as,r=d(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},n.preloadModule=function(e,t){if("string"==typeof e)if(t){var n=d(t.as,t.crossOrigin);a.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},n.requestFormReset=function(e){a.d.r(e)},n.unstable_batchedUpdates=function(e,t){return e(t)},n.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},n.useFormStatus=function(){return s.H.useHostTransitionStatus()},n.version="19.2.4"},30943,(e,t,n)=>{"use strict";!function e(){if("u">typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),t.exports=e.r(17431)},11829,(e,t,n)=>{"use strict";function r(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,o=e[r];if(0<a(o,t))e[r]=t,e[n]=o,n=r;else break}}function o(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,o=e.length,i=o>>>1;r<i;){var l=2*(r+1)-1,s=e[l],d=l+1,f=e[d];if(0>a(s,n))d<o&&0>a(f,s)?(e[r]=f,e[d]=n,r=d):(e[r]=s,e[l]=n,r=l);else if(d<o&&0>a(f,n))e[r]=f,e[d]=n,r=d;else break}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(n.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var l,s=performance;n.unstable_now=function(){return s.now()}}else{var d=Date,f=d.now();n.unstable_now=function(){return d.now()-f}}var c=[],u=[],p=1,g=null,m=3,y=!1,h=!1,x=!1,b=!1,v="function"==typeof setTimeout?setTimeout:null,w="function"==typeof clearTimeout?clearTimeout:null,_="u">typeof setImmediate?setImmediate:null;function j(e){for(var t=o(u);null!==t;){if(null===t.callback)i(u);else if(t.startTime<=e)i(u),t.sortIndex=t.expirationTime,r(c,t);else break;t=o(u)}}function $(e){if(x=!1,j(e),!h)if(null!==o(c))h=!0,S||(S=!0,l());else{var t=o(u);null!==t&&P($,t.startTime-e)}}var S=!1,k=-1,C=5,E=-1;function N(){return!!b||!(n.unstable_now()-E<C)}function T(){if(b=!1,S){var e=n.unstable_now();E=e;var t=!0;try{e:{h=!1,x&&(x=!1,w(k),k=-1),y=!0;var r=m;try{t:{for(j(e),g=o(c);null!==g&&!(g.expirationTime>e&&N());){var a=g.callback;if("function"==typeof a){g.callback=null,m=g.priorityLevel;var s=a(g.expirationTime<=e);if(e=n.unstable_now(),"function"==typeof s){g.callback=s,j(e),t=!0;break t}g===o(c)&&i(c),j(e)}else i(c);g=o(c)}if(null!==g)t=!0;else{var d=o(u);null!==d&&P($,d.startTime-e),t=!1}}break e}finally{g=null,m=r,y=!1}}}finally{t?l():S=!1}}}if("function"==typeof _)l=function(){_(T)};else if("u">typeof MessageChannel){var I=new MessageChannel,O=I.port2;I.port1.onmessage=T,l=function(){O.postMessage(null)}}else l=function(){v(T,0)};function P(e,t){k=v(function(){e(n.unstable_now())},t)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_next=function(e){switch(m){case 1:case 2:case 3:var t=3;break;default:t=m}var n=m;m=t;try{return e()}finally{m=n}},n.unstable_requestPaint=function(){b=!0},n.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=m;m=e;try{return t()}finally{m=n}},n.unstable_scheduleCallback=function(e,t,i){var a=n.unstable_now();switch(i="object"==typeof i&&null!==i&&"number"==typeof(i=i.delay)&&0<i?a+i:a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=0x3fffffff;break;case 4:s=1e4;break;default:s=5e3}return s=i+s,e={id:p++,callback:t,priorityLevel:e,startTime:i,expirationTime:s,sortIndex:-1},i>a?(e.sortIndex=i,r(u,e),null===o(c)&&e===o(u)&&(x?(w(k),k=-1):x=!0,P($,i-a))):(e.sortIndex=s,r(c,e),h||y||(h=!0,S||(S=!0,l()))),e},n.unstable_shouldYield=N,n.unstable_wrapCallback=function(e){var t=m;return function(){var n=m;m=t;try{return e.apply(this,arguments)}finally{m=n}}}},52659,(e,t,n)=>{"use strict";t.exports=e.r(11829)},57277,e=>{"use strict";var t=e.i(91398),n=e.i(91788),r=e.i(58678),o=e.i(60814);let i="#c0c0c0",a="#ffffff",l="#808080",s="#404040",d=o.css`
  background: ${i};
  border-top: 2px solid ${a};
  border-left: 2px solid ${a};
  border-right: 2px solid ${s};
  border-bottom: 2px solid ${s};
`,f=o.css`
  background: ${i};
  border-top: 2px solid ${s};
  border-left: 2px solid ${s};
  border-right: 2px solid ${a};
  border-bottom: 2px solid ${a};
`,c=o.default.div.withConfig({displayName:"styled__Container",componentId:"sc-a1ad4163-0"})`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 32px 16px;
  background: #008080;
  font-family: Tahoma, "MS Sans Serif", "Segoe UI", sans-serif;
  color: #000;
`,u=o.default.div.withConfig({displayName:"styled__Heading",componentId:"sc-a1ad4163-1"})`
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-shadow: 1px 1px 0 #000;
`,p=o.default.div.withConfig({displayName:"styled__DifficultyRow",componentId:"sc-a1ad4163-2"})`
  display: flex;
  gap: 8px;
`,g=o.default.button.withConfig({displayName:"styled__DiffButton",componentId:"sc-a1ad4163-3"})`
  font-family: inherit;
  font-size: 12px;
  font-weight: 700;
  padding: 5px 16px;
  color: #000;
  cursor: pointer;
  ${d}
  box-shadow: inset 1px 1px 0 #dfdfdf;

  &:active {
    ${f}
  }

  ${({$active:e})=>e&&o.css`
      ${f}
      color: #000080;
      text-shadow: none;
    `}
`,m=o.default.div.withConfig({displayName:"styled__Panel",componentId:"sc-a1ad4163-4"})`
  ${d}
  padding: 8px;
  background: ${i};
`,y=o.default.div.withConfig({displayName:"styled__Hud",componentId:"sc-a1ad4163-5"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 8px;
  margin-bottom: 8px;
  ${f}
  background: ${i};
`,h=o.default.div.withConfig({displayName:"styled__Counter",componentId:"sc-a1ad4163-6"})`
  background: #000;
  display: flex;
  align-items: center;
  padding: 4px 7px;
  border-top: 2px solid ${s};
  border-left: 2px solid ${s};
  border-right: 2px solid ${a};
  border-bottom: 2px solid ${a};
`,x=o.default.div.withConfig({displayName:"styled__LedRow",componentId:"sc-a1ad4163-7"})`
  display: flex;
  gap: 3px;
  align-items: center;
`,b=o.default.button.withConfig({displayName:"styled__FaceButton",componentId:"sc-a1ad4163-8"})`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffd83b;
  border-top: 2px solid #fff7c2;
  border-left: 2px solid #fff7c2;
  border-right: 2px solid #b38f00;
  border-bottom: 2px solid #b38f00;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:active {
    border-top: 2px solid #b38f00;
    border-left: 2px solid #b38f00;
    border-right: 2px solid #fff7c2;
    border-bottom: 2px solid #fff7c2;
  }
`,v=o.default.div.withConfig({displayName:"styled__FaceGraphic",componentId:"sc-a1ad4163-9"})`
  position: relative;
  width: 24px;
  height: 24px;

  .eye {
    position: absolute;
    top: 6px;
    width: 4px;
    height: 5px;
    background: #1a1a1a;
    border-radius: 50%;
  }
  .eye.left {
    left: 4px;
  }
  .eye.right {
    right: 4px;
  }

  .mouth {
    position: absolute;
    bottom: 5px;
    left: 6px;
    width: 12px;
    height: 6px;
    border: 2px solid #1a1a1a;
    border-top: none;
    border-radius: 0 0 10px 10px;
  }

  ${({$state:e})=>"lost"===e&&o.css`
      .eye {
        top: 7px;
        width: 7px;
        height: 7px;
        background: transparent;
        border-radius: 0;
        border-left: 2px solid #1a1a1a;
        border-bottom: 2px solid #1a1a1a;
        transform: rotate(-45deg);
      }
      .eye.left {
        left: 3px;
      }
      .eye.right {
        right: 3px;
      }
      .mouth {
        height: 5px;
        border: 2px solid #1a1a1a;
        border-bottom: none;
        border-radius: 10px 10px 0 0;
        bottom: 4px;
      }
    `}

  ${({$state:e})=>"won"===e&&o.css`
      .eye {
        top: 7px;
        width: 8px;
        height: 5px;
        background: #1a1a1a;
        border-radius: 2px;
      }
      .eye.left {
        left: 3px;
      }
      .eye.right {
        right: 3px;
      }
    `}
`,w=o.default.div.withConfig({displayName:"styled__Field",componentId:"sc-a1ad4163-10"})`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e}, 30px);
  ${f}
  background: ${i};
  padding: 0;
`,_=o.default.button.withConfig({displayName:"styled__Cell",componentId:"sc-a1ad4163-11"})`
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  padding: 0;
  font-family: Tahoma, "Segoe UI", Verdana, sans-serif;
  font-size: 21px;
  font-weight: 900;
  line-height: 1;
  -webkit-text-stroke: 0.7px currentColor;
  paint-order: stroke fill;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({$revealed:e})=>e?"default":"pointer"};
  user-select: none;
  background: ${i};
  border-style: solid;
  border-width: 4px;

  ${({$revealed:e,$n:t,$mine:n,$lost:r,$pressed:d})=>e?n?o.css`
          border-width: 1px;
          border-color: ${l};
          background: ${r?"#ff0000":i};
        `:o.css`
        border-width: 1px;
        border-color: ${l};
        color: ${["","#0000ff","#008000","#ff0000","#000080","#800000","#008080","#000000","#808080"][t]||"#000000"};
      `:d?o.css`
        border-top-color: ${s};
        border-left-color: ${s};
        border-right-color: ${a};
        border-bottom-color: ${a};
      `:o.css`
      border-top-color: ${a};
      border-left-color: ${a};
      border-right-color: ${s};
      border-bottom-color: ${s};
    `}
`,j=o.default.span.withConfig({displayName:"styled__MineMark",componentId:"sc-a1ad4163-12"})`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,$=o.default.span.withConfig({displayName:"styled__FlagMark",componentId:"sc-a1ad4163-13"})`
  position: relative;
  width: 16px;
  height: 16px;

  &::before {
    content: "";
    position: absolute;
    left: 9px;
    top: 2px;
    width: 2px;
    height: 11px;
    background: #000;
  }
  &::after {
    content: "";
    position: absolute;
    left: 1px;
    top: 2px;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-right: 9px solid #ff0000;
  }
`,S=o.default.span.withConfig({displayName:"styled__FlagBase",componentId:"sc-a1ad4163-14"})`
  position: absolute;
  left: 2px;
  bottom: 1px;
  width: 11px;
  height: 3px;
  background: #000;
  border: 1px solid #000;
`,k=o.default.span.withConfig({displayName:"styled__WrongX",componentId:"sc-a1ad4163-15"})`
  position: absolute;
  width: 22px;
  height: 22px;
  pointer-events: none;
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 10px;
    top: 0;
    width: 2px;
    height: 22px;
    background: #ff0000;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`,C=o.default.div.withConfig({displayName:"styled__Status",componentId:"sc-a1ad4163-16"})`
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  text-shadow: 1px 1px 0 #000;
  min-height: 18px;
`,E=o.default.div.withConfig({displayName:"styled__Hint",componentId:"sc-a1ad4163-17"})`
  color: #e0e0e0;
  font-size: 11px;
  text-shadow: 1px 1px 0 #000;
`,N={beginner:{rows:9,cols:9,mines:10,label:"초급"},intermediate:{rows:16,cols:16,mines:40,label:"중급"},expert:{rows:16,cols:30,mines:99,label:"상급"}},T=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];function I(e,t){return Array.from({length:e},()=>Array.from({length:t},()=>({mine:!1,revealed:!1,flagged:!1,adjacent:0,exploded:!1,wrong:!1})))}function O(e,t,n,r){let o=[];for(let[i,a]of T){let l=n+i,s=r+a;l>=0&&l<e&&s>=0&&s<t&&o.push([l,s])}return o}function P(e,t,n,r,o){let i=[[r,o]];for(;i.length>0;){let[r,o]=i.pop(),a=e[r][o];if(!a.revealed&&!a.flagged&&!a.mine&&(a.revealed=!0,0===a.adjacent))for(let[a,l]of O(t,n,r,o))e[a][l].revealed||i.push([a,l])}}function R(e,t,n,r){let o=0;for(let r=0;r<t;r++)for(let t=0;t<n;t++)!e[r][t].mine&&e[r][t].revealed&&o++;return o===t*n-r}let L={0:[!0,!0,!0,!0,!0,!0,!1],1:[!1,!0,!0,!1,!1,!1,!1],2:[!0,!0,!1,!0,!0,!1,!0],3:[!0,!0,!0,!0,!1,!1,!0],4:[!1,!0,!0,!1,!1,!0,!0],5:[!0,!1,!0,!0,!1,!0,!0],6:[!0,!1,!0,!0,!0,!0,!0],7:[!0,!0,!0,!1,!1,!1,!1],8:[!0,!0,!0,!0,!0,!0,!0],9:[!0,!0,!0,!0,!1,!0,!0],"-":[!1,!1,!1,!1,!1,!1,!0]},M=(e,t,n)=>[[e+6,n-6],[t-6,n-6],[t,n],[t-6,n+6],[e+6,n+6],[e,n]].map(e=>e.join(",")).join(" "),A=(e,t,n)=>[[e-6,t+6],[e,t],[e+6,t+6],[e+6,n-6],[e,n],[e-6,n-6]].map(e=>e.join(",")).join(" "),D={a:M(13,51,9),b:A(51,13,58),c:A(51,58,103),d:M(13,51,107),e:A(13,58,103),f:A(13,13,58),g:M(13,51,58)},F=["a","b","c","d","e","f","g"];function U({value:e}){let n=L[e]??L["0"];return(0,t.jsx)("svg",{viewBox:"0 0 64 116",width:"18",height:"33",style:{display:"block"},shapeRendering:"crispEdges",children:F.map((e,r)=>(0,t.jsx)("polygon",{points:D[e],fill:n[r]?"#ff2b2b":"#330000",style:n[r]?{filter:"drop-shadow(0 0 2px rgba(255, 43, 43, 0.85))"}:void 0},e))})}function B({value:e}){return(0,t.jsx)(x,{children:e.split("").map((e,n)=>(0,t.jsx)(U,{value:e},n))})}e.s(["default",0,function(){let[e,o]=(0,n.useState)("beginner"),{rows:i,cols:a,mines:l}=N[e],[s,d]=(0,n.useState)(()=>I(i,a)),[f,x]=(0,n.useState)("ready"),[T,L]=(0,n.useState)(0),[M,A]=(0,n.useState)(new Set),[D,F]=(0,n.useState)(new Set),U=(0,n.useRef)(null),H=(0,n.useRef)(!1),z=(0,n.useRef)(null),G=(0,n.useCallback)(e=>{let t=N[e];o(e),d(I(t.rows,t.cols)),x("ready"),L(0),A(new Set),F(new Set)},[]);(0,n.useEffect)(()=>("playing"===f&&(z.current=setInterval(()=>{L(e=>e>=999?999:e+1)},1e3)),()=>{z.current&&clearInterval(z.current)}),[f]);let W=l-function(e){let t=0;for(let n of e)for(let e of n)e.flagged&&t++;return t}(s),X=(0,n.useCallback)((e,t)=>{let n=s[e][t];if(n.revealed&&n.adjacent>0){let r=O(i,a,e,t);return r.filter(([e,t])=>s[e][t].flagged).length===n.adjacent?new Set:new Set(r.filter(([e,t])=>!s[e][t].flagged).map(([e,t])=>`${e},${t}`))}return new Set([`${e},${t}`])},[s,i,a]),K=(0,n.useCallback)((e,t)=>{"won"!==f&&"lost"!==f&&(U.current={r:e,c:t},F(X(e,t)))},[f,X]);(0,n.useEffect)(()=>{let e=()=>{F(new Set),U.current=null};return window.addEventListener("mouseup",e),window.addEventListener("touchend",e),()=>{window.removeEventListener("mouseup",e),window.removeEventListener("touchend",e)}},[]);let V=(e,t)=>{let n=U.current;F(new Set),U.current=null,n&&n.r===e&&n.c===t&&(H.current=!0,q(e,t))},Y=(0,n.useCallback)((e,t)=>{let n=s[e][t],r=O(i,a,e,t);r.filter(([e,t])=>s[e][t].flagged).length===n.adjacent?d(e=>{let t=e.map(e=>e.map(e=>({...e}))),n=!1;for(let[e,o]of r){let r=t[e][o];if(!r.flagged&&!r.revealed){if(r.mine){r.revealed=!0,r.exploded=!0,n=!0;continue}P(t,i,a,e,o)}}if(n){for(let e of t)for(let t of e)t.mine&&(t.revealed=!0),t.flagged&&!t.mine&&(t.wrong=!0);return x("lost"),t}if(R(t,i,a,l)){for(let e of t)for(let t of e)t.mine&&(t.flagged=!0);x("won")}return t}):(A(new Set(r.filter(([e,t])=>!s[e][t].flagged).map(([e,t])=>`${e},${t}`))),window.setTimeout(()=>A(new Set),150))},[s,i,a,l]),q=(0,n.useCallback)((e,t)=>{if("won"===f||"lost"===f)return;let n=s[e][t];if(!n.flagged){if(n.revealed){n.adjacent>0&&Y(e,t);return}d(n=>{let r;"ready"===f?(r=function(e,t,n,r,o,i){let a=e.map(e=>e.map(e=>({...e}))),l=new Set;for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++)l.add(`${o+e},${i+t}`);let s=0;for(;s<r;){let e=Math.floor(Math.random()*t),r=Math.floor(Math.random()*n);!(a[e][r].mine||l.has(`${e},${r}`))&&(a[e][r].mine=!0,s++)}for(let e=0;e<t;e++)for(let r=0;r<n;r++){if(a[e][r].mine)continue;let o=0;for(let[i,l]of O(t,n,e,r))a[i][l].mine&&o++;a[e][r].adjacent=o}return a}(n,i,a,l,e,t),x("playing")):r=n.map(e=>e.map(e=>({...e})));let o=r[e][t];if(o.mine){for(let e of r)for(let t of e)t.mine&&(t.revealed=!0),t.flagged&&!t.mine&&(t.wrong=!0);return o.exploded=!0,x("lost"),r}if(P(r,i,a,e,t),R(r,i,a,l)){for(let e of r)for(let t of e)t.mine&&(t.flagged=!0);x("won")}return r})}},[s,f,Y,i,a,l]),Z=(0,n.useCallback)((e,t)=>{"won"!==f&&"lost"!==f&&("ready"===f&&x("playing"),d(n=>{let r=n.map(e=>e.map(e=>({...e}))),o=r[e][t];return o.revealed||(o.flagged=!o.flagged),r}))},[f]),J=(0,n.useCallback)(()=>{d(I(i,a)),x("ready"),L(0),A(new Set),F(new Set)},[i,a]);return(0,t.jsxs)(c,{children:[(0,t.jsxs)(r.default,{children:[(0,t.jsx)("title",{children:"지뢰찾기 — Everything AI Have"}),(0,t.jsx)("meta",{name:"description",content:"초급·중급·상급 난이도로 즐기는 클래식 지뢰찾기 게임입니다. 깃발 표시와 힌트로 안전하게 지뢰를 피해 보세요."}),(0,t.jsx)("meta",{property:"og:type",content:"website"}),(0,t.jsx)("meta",{property:"og:title",content:"지뢰찾기 — Everything AI Have"}),(0,t.jsx)("meta",{property:"og:description",content:"초급·중급·상급 난이도로 즐기는 클래식 지뢰찾기 게임입니다."}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,t.jsx)("meta",{name:"twitter:title",content:"지뢰찾기 — Everything AI Have"}),(0,t.jsx)("meta",{name:"twitter:description",content:"초급·중급·상급 난이도로 즐기는 클래식 지뢰찾기 게임입니다."})]}),(0,t.jsx)(u,{children:"지뢰찾기 — MINESWEEPER"}),(0,t.jsx)(p,{children:Object.keys(N).map(n=>(0,t.jsx)(g,{$active:e===n,onClick:()=>G(n),children:N[n].label},n))}),(0,t.jsxs)(m,{children:[(0,t.jsxs)(y,{children:[(0,t.jsx)(h,{children:(0,t.jsx)(B,{value:W>=0?String(W).padStart(3,"0"):"-"+String(Math.min(99,-W)).padStart(2,"0")})}),(0,t.jsx)(b,{$state:f,onClick:J,title:"새 게임",children:(0,t.jsxs)(v,{$state:f,children:[(0,t.jsx)("span",{className:"eye left"}),(0,t.jsx)("span",{className:"eye right"}),(0,t.jsx)("span",{className:"mouth"})]})}),(0,t.jsx)(h,{children:(0,t.jsx)(B,{value:String(Math.min(999,T)).padStart(3,"0")})})]}),(0,t.jsx)(w,{$cols:a,children:s.map((e,n)=>e.map((e,r)=>{var o;let i=`${n},${r}`,a=M.has(i)||D.has(i);return(0,t.jsx)(_,{$revealed:e.revealed,$n:e.adjacent,$mine:e.mine,$lost:"lost"===f,$pressed:a,onMouseDown:e=>{0===e.button&&K(n,r)},onMouseUp:()=>V(n,r),onTouchStart:e=>{e.preventDefault(),K(n,r)},onTouchEnd:()=>V(n,r),onClick:()=>{if(H.current){H.current=!1;return}q(n,r)},onContextMenu:e=>{e.preventDefault(),Z(n,r)},children:(o=e).revealed?o.mine?(0,t.jsxs)(j,{children:[(0,t.jsxs)("svg",{viewBox:"0 0 24 24",width:"20",height:"20",style:{display:"block"},children:[(0,t.jsxs)("g",{stroke:"#111111",strokeWidth:"2",strokeLinecap:"round",children:[(0,t.jsx)("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),(0,t.jsx)("line",{x1:"12",y1:"3",x2:"12",y2:"21"}),(0,t.jsx)("line",{x1:"5.6",y1:"5.6",x2:"18.4",y2:"18.4"}),(0,t.jsx)("line",{x1:"5.6",y1:"18.4",x2:"18.4",y2:"5.6"})]}),(0,t.jsx)("circle",{cx:"12",cy:"12",r:"5",fill:"#111111"}),(0,t.jsx)("circle",{cx:"9.8",cy:"9.8",r:"1.6",fill:"#ffffff"})]}),o.wrong&&(0,t.jsx)(k,{})]}):o.adjacent>0?o.adjacent:"":o.flagged?(0,t.jsx)($,{children:(0,t.jsx)(S,{})}):""},i)}))})]}),(0,t.jsxs)(C,{children:["won"===f&&"🎉 클리어!","lost"===f&&"💥 게임 오버","ready"===f&&"좌클릭으로 시작 · 첫 클릭은 항상 안전","playing"===f&&"진행 중…"]}),(0,t.jsx)(E,{children:"좌클릭: 열기 · 우클릭: 깃발 · 숫자 클릭: 주변 자동 열기"})]})}],57277)},30891,(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/b",()=>e.r(57277)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/b"])})},48761,e=>{e.v(t=>Promise.all(["static/chunks/0ey~yy8oeyp~5.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/0599p99vu8fk5.js"].map(t=>e.l(t))).then(()=>t(79466)))}]);