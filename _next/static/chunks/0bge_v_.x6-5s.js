(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,89129,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return m},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return w},NormalizeError:function(){return y},PageNotFoundError:function(){return b},SP:function(){return h},ST:function(){return x},WEB_VITALS:function(){return i},execOnce:function(){return a},getDisplayName:function(){return f},getLocationOrigin:function(){return d},getURL:function(){return c},isAbsoluteUrl:function(){return s},isResSent:function(){return u},loadGetInitialProps:function(){return g},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return _}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>l.test(e);function d(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function c(){let{href:e}=window.location,t=d();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function g(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await g(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&u(n))return r;if(!r)throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return r}let h="u">typeof performance,x=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class y extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function _(e){return JSON.stringify({message:e.message,stack:e.stack})}},17431,(e,t,n)=>{"use strict";var r=e.r(91788);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(o(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),s=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,n.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(o(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},n.flushSync=function(e){var t=s.T,n=a.p;try{if(s.T=null,a.p=2,e)return e()}finally{s.T=t,a.p=n,a.d.f()}},n.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,a.d.C(e,t))},n.prefetchDNS=function(e){"string"==typeof e&&a.d.D(e)},n.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var n=t.as,r=d(n,t.crossOrigin),o="string"==typeof t.integrity?t.integrity:void 0,i="string"==typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?a.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:o,fetchPriority:i}):"script"===n&&a.d.X(e,{crossOrigin:r,integrity:o,fetchPriority:i,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},n.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=d(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},n.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var n=t.as,r=d(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},n.preloadModule=function(e,t){if("string"==typeof e)if(t){var n=d(t.as,t.crossOrigin);a.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},n.requestFormReset=function(e){a.d.r(e)},n.unstable_batchedUpdates=function(e,t){return e(t)},n.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},n.useFormStatus=function(){return s.H.useHostTransitionStatus()},n.version="19.2.4"},30943,(e,t,n)=>{"use strict";!function e(){if("u">typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),t.exports=e.r(17431)},11829,(e,t,n)=>{"use strict";function r(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,o=e[r];if(0<a(o,t))e[r]=t,e[n]=o,n=r;else break}}function o(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,o=e.length,i=o>>>1;r<i;){var l=2*(r+1)-1,s=e[l],d=l+1,c=e[d];if(0>a(s,n))d<o&&0>a(c,s)?(e[r]=c,e[d]=n,r=d):(e[r]=s,e[l]=n,r=l);else if(d<o&&0>a(c,n))e[r]=c,e[d]=n,r=d;else break}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(n.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var l,s=performance;n.unstable_now=function(){return s.now()}}else{var d=Date,c=d.now();n.unstable_now=function(){return d.now()-c}}var f=[],u=[],p=1,g=null,h=3,x=!1,m=!1,y=!1,b=!1,w="function"==typeof setTimeout?setTimeout:null,v="function"==typeof clearTimeout?clearTimeout:null,_="u">typeof setImmediate?setImmediate:null;function k(e){for(var t=o(u);null!==t;){if(null===t.callback)i(u);else if(t.startTime<=e)i(u),t.sortIndex=t.expirationTime,r(f,t);else break;t=o(u)}}function j(e){if(y=!1,k(e),!m)if(null!==o(f))m=!0,$||($=!0,l());else{var t=o(u);null!==t&&P(j,t.startTime-e)}}var $=!1,S=-1,C=5,E=-1;function T(){return!!b||!(n.unstable_now()-E<C)}function N(){if(b=!1,$){var e=n.unstable_now();E=e;var t=!0;try{e:{m=!1,y&&(y=!1,v(S),S=-1),x=!0;var r=h;try{t:{for(k(e),g=o(f);null!==g&&!(g.expirationTime>e&&T());){var a=g.callback;if("function"==typeof a){g.callback=null,h=g.priorityLevel;var s=a(g.expirationTime<=e);if(e=n.unstable_now(),"function"==typeof s){g.callback=s,k(e),t=!0;break t}g===o(f)&&i(f),k(e)}else i(f);g=o(f)}if(null!==g)t=!0;else{var d=o(u);null!==d&&P(j,d.startTime-e),t=!1}}break e}finally{g=null,h=r,x=!1}}}finally{t?l():$=!1}}}if("function"==typeof _)l=function(){_(N)};else if("u">typeof MessageChannel){var I=new MessageChannel,O=I.port2;I.port1.onmessage=N,l=function(){O.postMessage(null)}}else l=function(){w(N,0)};function P(e,t){S=w(function(){e(n.unstable_now())},t)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},n.unstable_requestPaint=function(){b=!0},n.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},n.unstable_scheduleCallback=function(e,t,i){var a=n.unstable_now();switch(i="object"==typeof i&&null!==i&&"number"==typeof(i=i.delay)&&0<i?a+i:a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=0x3fffffff;break;case 4:s=1e4;break;default:s=5e3}return s=i+s,e={id:p++,callback:t,priorityLevel:e,startTime:i,expirationTime:s,sortIndex:-1},i>a?(e.sortIndex=i,r(u,e),null===o(f)&&e===o(u)&&(y?(v(S),S=-1):y=!0,P(j,i-a))):(e.sortIndex=s,r(f,e),m||x||(m=!0,$||($=!0,l()))),e},n.unstable_shouldYield=T,n.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},52659,(e,t,n)=>{"use strict";t.exports=e.r(11829)},57277,e=>{"use strict";var t=e.i(91398),n=e.i(91788),r=e.i(58678),o=e.i(60814);let i="#c0c0c0",a="#ffffff",l="#808080",s="#404040",d=o.css`
  background: ${i};
  border-top: 2px solid ${a};
  border-left: 2px solid ${a};
  border-right: 2px solid ${s};
  border-bottom: 2px solid ${s};
`,c=o.css`
  background: ${i};
  border-top: 2px solid ${s};
  border-left: 2px solid ${s};
  border-right: 2px solid ${a};
  border-bottom: 2px solid ${a};
`,f=o.default.div.withConfig({displayName:"styled__Container",componentId:"sc-a1ad4163-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  padding: 24px 12px;

  font-family: Tahoma, "MS Sans Serif", "Segoe UI", sans-serif;
  color: #000;
  background: #008080;
  overflow-x: hidden;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`,u=o.default.div.withConfig({displayName:"styled__Heading",componentId:"sc-a1ad4163-1"})`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #ffffff;
  text-shadow: 1px 1px 0 #000;
`,p=o.default.div.withConfig({displayName:"styled__DifficultyRow",componentId:"sc-a1ad4163-2"})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`,g=o.default.button.withConfig({displayName:"styled__DiffButton",componentId:"sc-a1ad4163-3"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 6px 16px;

  font-family: inherit;
  font-size: 12px;
  font-weight: 700;
  color: #000;
  background: ${i};
  cursor: pointer;
  ${d}
  box-shadow: inset 1px 1px 0 #dfdfdf;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:active {
    ${c}
  }

  ${({$active:e})=>e&&o.css`
      ${c}
      color: #000080;
      text-shadow: none;
    `}
`,h=o.default.div.withConfig({displayName:"styled__ModeRow",componentId:"sc-a1ad4163-4"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  margin-top: 4px;
`,x=o.default.button.withConfig({displayName:"styled__ModeButton",componentId:"sc-a1ad4163-5"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  padding: 6px 14px;

  font-family: inherit;
  font-size: 12px;
  font-weight: 700;
  color: #000;
  background: ${i};
  cursor: pointer;
  ${d}
  box-shadow: inset 1px 1px 0 #dfdfdf;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:active {
    ${c}
  }

  ${({$active:e})=>e&&o.css`
      ${c}
      color: #000080;
      background: #dfdfdf;
    `}
`,m=o.default.div.withConfig({displayName:"styled__Panel",componentId:"sc-a1ad4163-6"})`
  box-sizing: border-box;
  max-width: 100%;
  padding: 8px;

  background: ${i};
  ${d}
`,y=o.default.div.withConfig({displayName:"styled__Hud",componentId:"sc-a1ad4163-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 6px 8px;
  margin-bottom: 8px;

  background: ${i};
  ${c}
`,b=o.default.div.withConfig({displayName:"styled__Counter",componentId:"sc-a1ad4163-8"})`
  display: flex;
  align-items: center;

  padding: 4px 7px;

  background: #000;
  border-top: 2px solid ${s};
  border-left: 2px solid ${s};
  border-right: 2px solid ${a};
  border-bottom: 2px solid ${a};
`,w=o.default.div.withConfig({displayName:"styled__LedRow",componentId:"sc-a1ad4163-9"})`
  display: flex;
  align-items: center;
  gap: 3px;
`,v=o.default.button.withConfig({displayName:"styled__FaceButton",componentId:"sc-a1ad4163-10"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  padding: 0;

  background: #ffd83b;
  border-radius: 50%;
  border-top: 2px solid #fff7c2;
  border-left: 2px solid #fff7c2;
  border-right: 2px solid #b38f00;
  border-bottom: 2px solid #b38f00;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:active {
    border-top: 2px solid #b38f00;
    border-left: 2px solid #b38f00;
    border-right: 2px solid #fff7c2;
    border-bottom: 2px solid #fff7c2;
  }
`,_=o.default.div.withConfig({displayName:"styled__FaceGraphic",componentId:"sc-a1ad4163-11"})`
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
        bottom: 4px;

        height: 5px;

        border: 2px solid #1a1a1a;
        border-bottom: none;
        border-radius: 10px 10px 0 0;
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
`,k=o.default.div.withConfig({displayName:"styled__FieldScrollArea",componentId:"sc-a1ad4163-12"})`
  box-sizing: border-box;
  max-width: 100%;

  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x pan-y;

  /* 스크롤바 커스텀 */
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: ${i};
  }
  &::-webkit-scrollbar-thumb {
    background: ${l};
    border: 1px solid ${a};
  }
`,j=o.default.div.withConfig({displayName:"styled__Field",componentId:"sc-a1ad4163-13"})`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e}, 30px);

  width: max-content;
  padding: 0;

  background: ${i};
  ${c}
`,$=o.default.button.withConfig({displayName:"styled__Cell",componentId:"sc-a1ad4163-14"})`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  width: 30px;
  height: 30px;
  padding: 0;

  font-family: Tahoma, "Segoe UI", Verdana, sans-serif;
  font-size: 20px;
  font-weight: 900;
  line-height: 1;
  -webkit-text-stroke: 0.7px currentColor;
  paint-order: stroke fill;
  cursor: ${({$revealed:e})=>e?"default":"pointer"};
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  touch-action: manipulation;
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
`,S=o.default.span.withConfig({displayName:"styled__MineMark",componentId:"sc-a1ad4163-15"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  position: relative;
`,C=o.default.span.withConfig({displayName:"styled__FlagMark",componentId:"sc-a1ad4163-16"})`
  position: relative;

  width: 16px;
  height: 16px;

  &::before {
    position: absolute;
    top: 2px;
    left: 9px;

    width: 2px;
    height: 11px;

    background: #000;
    content: "";
  }
  &::after {
    position: absolute;
    top: 2px;
    left: 1px;

    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-right: 9px solid #ff0000;
    content: "";
  }
`,E=o.default.span.withConfig({displayName:"styled__FlagBase",componentId:"sc-a1ad4163-17"})`
  position: absolute;
  bottom: 1px;
  left: 2px;

  width: 11px;
  height: 3px;

  background: #000;
  border: 1px solid #000;
`,T=o.default.span.withConfig({displayName:"styled__WrongX",componentId:"sc-a1ad4163-18"})`
  position: absolute;

  width: 22px;
  height: 22px;

  pointer-events: none;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 10px;

    width: 2px;
    height: 22px;

    background: #ff0000;
    content: "";
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`,N=o.default.div.withConfig({displayName:"styled__Status",componentId:"sc-a1ad4163-19"})`
  min-height: 18px;

  font-size: 13px;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 1px 1px 0 #000;
  text-align: center;
`,I=o.default.div.withConfig({displayName:"styled__Hint",componentId:"sc-a1ad4163-20"})`
  font-size: 11px;
  color: #e0e0e0;
  text-shadow: 1px 1px 0 #000;
  text-align: center;
  line-height: 1.5;
`,O={beginner:{rows:9,cols:9,mines:10,label:"초급"},intermediate:{rows:16,cols:16,mines:40,label:"중급"},expert:{rows:16,cols:30,mines:99,label:"상급"}},P=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];function R(e,t){return Array.from({length:e},()=>Array.from({length:t},()=>({mine:!1,revealed:!1,flagged:!1,adjacent:0,exploded:!1,wrong:!1})))}function M(e,t,n,r){let o=[];for(let[i,a]of P){let l=n+i,s=r+a;l>=0&&l<e&&s>=0&&s<t&&o.push([l,s])}return o}function L(e,t,n,r,o){let i=[[r,o]];for(;i.length>0;){let[r,o]=i.pop(),a=e[r][o];if(!a.revealed&&!a.flagged&&!a.mine&&(a.revealed=!0,0===a.adjacent))for(let[a,l]of M(t,n,r,o))e[a][l].revealed||i.push([a,l])}}function A(e,t,n,r){let o=0;for(let r=0;r<t;r++)for(let t=0;t<n;t++)!e[r][t].mine&&e[r][t].revealed&&o++;return o===t*n-r}let D={0:[!0,!0,!0,!0,!0,!0,!1],1:[!1,!0,!0,!1,!1,!1,!1],2:[!0,!0,!1,!0,!0,!1,!0],3:[!0,!0,!0,!0,!1,!1,!0],4:[!1,!0,!0,!1,!1,!0,!0],5:[!0,!1,!0,!0,!1,!0,!0],6:[!0,!1,!0,!0,!0,!0,!0],7:[!0,!0,!0,!1,!1,!1,!1],8:[!0,!0,!0,!0,!0,!0,!0],9:[!0,!0,!0,!0,!1,!0,!0],"-":[!1,!1,!1,!1,!1,!1,!0]},F=(e,t,n)=>[[e+6,n-6],[t-6,n-6],[t,n],[t-6,n+6],[e+6,n+6],[e,n]].map(e=>e.join(",")).join(" "),U=(e,t,n)=>[[e-6,t+6],[e,t],[e+6,t+6],[e+6,n-6],[e,n],[e-6,n-6]].map(e=>e.join(",")).join(" "),z={a:F(13,51,9),b:U(51,13,58),c:U(51,58,103),d:F(13,51,107),e:U(13,58,103),f:U(13,13,58),g:F(13,51,58)},B=["a","b","c","d","e","f","g"];function H({value:e}){let n=D[e]??D["0"];return(0,t.jsx)("svg",{viewBox:"0 0 64 116",width:"18",height:"33",style:{display:"block"},shapeRendering:"crispEdges",children:B.map((e,r)=>(0,t.jsx)("polygon",{points:z[e],fill:n[r]?"#ff2b2b":"#330000",style:n[r]?{filter:"drop-shadow(0 0 2px rgba(255, 43, 43, 0.85))"}:void 0},e))})}function X({value:e}){return(0,t.jsx)(w,{children:e.split("").map((e,n)=>(0,t.jsx)(H,{value:e},n))})}e.s(["default",0,function(){let[e,o]=(0,n.useState)("beginner"),{rows:i,cols:a,mines:l}=O[e],[s,d]=(0,n.useState)(()=>R(i,a)),[c,w]=(0,n.useState)("ready"),[P,D]=(0,n.useState)(0),[F,U]=(0,n.useState)("dig"),[z,B]=(0,n.useState)(new Set),[H,G]=(0,n.useState)(new Set),W=(0,n.useRef)(null),K=(0,n.useRef)(!1),V=(0,n.useRef)(null),Y=(0,n.useRef)(!1),q=(0,n.useRef)(null),Z=(0,n.useRef)(null),J=(0,n.useCallback)(e=>{let t=O[e];o(e),d(R(t.rows,t.cols)),w("ready"),D(0),B(new Set),G(new Set)},[]);(0,n.useEffect)(()=>("playing"===c&&(Z.current=setInterval(()=>{D(e=>e>=999?999:e+1)},1e3)),()=>{Z.current&&clearInterval(Z.current)}),[c]);let Q=l-function(e){let t=0;for(let n of e)for(let e of n)e.flagged&&t++;return t}(s),ee=(0,n.useCallback)((e,t)=>{let n=s[e][t];if(n.revealed&&n.adjacent>0){let r=M(i,a,e,t);return r.filter(([e,t])=>s[e][t].flagged).length===n.adjacent?new Set:new Set(r.filter(([e,t])=>!s[e][t].flagged).map(([e,t])=>`${e},${t}`))}return new Set([`${e},${t}`])},[s,i,a]),et=(0,n.useCallback)((e,t)=>{"won"!==c&&"lost"!==c&&(W.current={r:e,c:t},G(ee(e,t)))},[c,ee]);(0,n.useEffect)(()=>{let e=()=>{G(new Set),W.current=null,V.current&&(clearTimeout(V.current),V.current=null)};return window.addEventListener("mouseup",e),window.addEventListener("touchend",e),()=>{window.removeEventListener("mouseup",e),window.removeEventListener("touchend",e)}},[]);let en=(0,n.useCallback)((e,t)=>{let n=s[e][t],r=M(i,a,e,t);r.filter(([e,t])=>s[e][t].flagged).length===n.adjacent?d(e=>{let t=e.map(e=>e.map(e=>({...e}))),n=!1;for(let[e,o]of r){let r=t[e][o];if(!r.flagged&&!r.revealed){if(r.mine){r.revealed=!0,r.exploded=!0,n=!0;continue}L(t,i,a,e,o)}}if(n){for(let e of t)for(let t of e)t.mine&&(t.revealed=!0),t.flagged&&!t.mine&&(t.wrong=!0);return w("lost"),t}if(A(t,i,a,l)){for(let e of t)for(let t of e)t.mine&&(t.flagged=!0);w("won")}return t}):(B(new Set(r.filter(([e,t])=>!s[e][t].flagged).map(([e,t])=>`${e},${t}`))),window.setTimeout(()=>B(new Set),150))},[s,i,a,l]),er=(0,n.useCallback)((e,t)=>{if("won"===c||"lost"===c)return;let n=s[e][t];if(!n.flagged){if(n.revealed){n.adjacent>0&&en(e,t);return}d(n=>{let r;"ready"===c?(r=function(e,t,n,r,o,i){let a=e.map(e=>e.map(e=>({...e}))),l=new Set;for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++)l.add(`${o+e},${i+t}`);let s=0;for(;s<r;){let e=Math.floor(Math.random()*t),r=Math.floor(Math.random()*n);!(a[e][r].mine||l.has(`${e},${r}`))&&(a[e][r].mine=!0,s++)}for(let e=0;e<t;e++)for(let r=0;r<n;r++){if(a[e][r].mine)continue;let o=0;for(let[i,l]of M(t,n,e,r))a[i][l].mine&&o++;a[e][r].adjacent=o}return a}(n,i,a,l,e,t),w("playing")):r=n.map(e=>e.map(e=>({...e})));let o=r[e][t];if(o.mine){for(let e of r)for(let t of e)t.mine&&(t.revealed=!0),t.flagged&&!t.mine&&(t.wrong=!0);return o.exploded=!0,w("lost"),r}if(L(r,i,a,e,t),A(r,i,a,l)){for(let e of r)for(let t of e)t.mine&&(t.flagged=!0);w("won")}return r})}},[s,c,en,i,a,l]),eo=(0,n.useCallback)((e,t)=>{"won"!==c&&"lost"!==c&&("ready"===c&&w("playing"),d(n=>{let r=n.map(e=>e.map(e=>({...e}))),o=r[e][t];return o.revealed||(o.flagged=!o.flagged),r}))},[c]),ei=(e,t)=>{let n=W.current;G(new Set),W.current=null,n&&n.r===e&&n.c===t&&(K.current=!0,"flag"!==F||s[e][t].revealed?er(e,t):eo(e,t))},ea=e=>{if(!q.current)return;let t=e.touches[0],n=Math.abs(t.clientX-q.current.x),r=Math.abs(t.clientY-q.current.y);(n>10||r>10)&&(V.current&&(clearTimeout(V.current),V.current=null),G(new Set),W.current=null)},el=(0,n.useCallback)(()=>{d(R(i,a)),w("ready"),D(0),B(new Set),G(new Set)},[i,a]);return(0,t.jsxs)(f,{children:[(0,t.jsxs)(r.default,{children:[(0,t.jsx)("title",{children:"지뢰찾기 — Everything AI Have"}),(0,t.jsx)("meta",{name:"description",content:"초급·중급·상급 난이도로 즐기는 클래식 지뢰찾기 게임입니다. 모바일 터치 및 깃발 모드를 지원합니다."}),(0,t.jsx)("meta",{property:"og:type",content:"website"}),(0,t.jsx)("meta",{property:"og:title",content:"지뢰찾기 — Everything AI Have"}),(0,t.jsx)("meta",{property:"og:description",content:"초급·중급·상급 난이도로 즐기는 클래식 지뢰찾기 게임입니다."}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,t.jsx)("meta",{name:"twitter:title",content:"지뢰찾기 — Everything AI Have"}),(0,t.jsx)("meta",{name:"twitter:description",content:"초급·중급·상급 난이도로 즐기는 클래식 지뢰찾기 게임입니다."})]}),(0,t.jsx)(u,{children:"지뢰찾기 — MINESWEEPER"}),(0,t.jsx)(p,{children:Object.keys(O).map(n=>(0,t.jsx)(g,{$active:e===n,onClick:()=>J(n),children:O[n].label},n))}),(0,t.jsxs)(h,{children:[(0,t.jsx)(x,{$active:"dig"===F,onClick:()=>U("dig"),title:"타일 열기 모드",children:"⛏️ 열기 모드"}),(0,t.jsx)(x,{$active:"flag"===F,onClick:()=>U("flag"),title:"깃발 표시 모드",children:"🚩 깃발 모드"})]}),(0,t.jsxs)(m,{children:[(0,t.jsxs)(y,{children:[(0,t.jsx)(b,{children:(0,t.jsx)(X,{value:Q>=0?String(Q).padStart(3,"0"):"-"+String(Math.min(99,-Q)).padStart(2,"0")})}),(0,t.jsx)(v,{$state:c,onClick:el,title:"새 게임",children:(0,t.jsxs)(_,{$state:c,children:[(0,t.jsx)("span",{className:"eye left"}),(0,t.jsx)("span",{className:"eye right"}),(0,t.jsx)("span",{className:"mouth"})]})}),(0,t.jsx)(b,{children:(0,t.jsx)(X,{value:String(Math.min(999,P)).padStart(3,"0")})})]}),(0,t.jsx)(k,{children:(0,t.jsx)(j,{$cols:a,children:s.map((e,n)=>e.map((e,r)=>{var o;let i=`${n},${r}`,a=z.has(i)||H.has(i);return(0,t.jsx)($,{$revealed:e.revealed,$n:e.adjacent,$mine:e.mine,$lost:"lost"===c,$pressed:a,onMouseDown:e=>{0===e.button&&et(n,r)},onMouseUp:()=>ei(n,r),onTouchStart:e=>{let t;q.current={x:(t=e.touches[0]).clientX,y:t.clientY},Y.current=!1,et(n,r),V.current&&clearTimeout(V.current),V.current=setTimeout(()=>{s[n][r].revealed||(Y.current=!0,"u">typeof navigator&&navigator.vibrate&&navigator.vibrate(40),eo(n,r),G(new Set))},380)},onTouchMove:ea,onTouchEnd:()=>((e,t)=>{if(V.current&&(clearTimeout(V.current),V.current=null),Y.current){Y.current=!1,K.current=!0,G(new Set),W.current=null;return}ei(e,t)})(n,r),onClick:()=>{if(K.current){K.current=!1;return}"flag"!==F||e.revealed?er(n,r):eo(n,r)},onContextMenu:e=>{e.preventDefault(),eo(n,r)},children:(o=e).revealed?o.mine?(0,t.jsxs)(S,{children:[(0,t.jsxs)("svg",{viewBox:"0 0 24 24",width:"20",height:"20",style:{display:"block"},children:[(0,t.jsxs)("g",{stroke:"#111111",strokeWidth:"2",strokeLinecap:"round",children:[(0,t.jsx)("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),(0,t.jsx)("line",{x1:"12",y1:"3",x2:"12",y2:"21"}),(0,t.jsx)("line",{x1:"5.6",y1:"5.6",x2:"18.4",y2:"18.4"}),(0,t.jsx)("line",{x1:"5.6",y1:"18.4",x2:"18.4",y2:"5.6"})]}),(0,t.jsx)("circle",{cx:"12",cy:"12",r:"5",fill:"#111111"}),(0,t.jsx)("circle",{cx:"9.8",cy:"9.8",r:"1.6",fill:"#ffffff"})]}),o.wrong&&(0,t.jsx)(T,{})]}):o.adjacent>0?o.adjacent:"":o.flagged?(0,t.jsx)(C,{children:(0,t.jsx)(E,{})}):""},i)}))})})]}),(0,t.jsxs)(N,{children:["won"===c&&"🎉 클리어!","lost"===c&&"💥 게임 오버","ready"===c&&"첫 탭/클릭은 항상 안전합니다","playing"===c&&"진행 중…"]}),(0,t.jsxs)(I,{children:["PC: 좌클릭 열기 · 우클릭 깃발 · 숫자 클릭 자동 열기",(0,t.jsx)("br",{}),"모바일: 탭 열기 · 길게 누르기 깃발 · 상단 ⛏️/🚩 모드 전환 지원"]})]})}],57277)},30891,(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/b",()=>e.r(57277)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/b"])})},48761,e=>{e.v(t=>Promise.all(["static/chunks/0ey~yy8oeyp~5.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/0599p99vu8fk5.js"].map(t=>e.l(t))).then(()=>t(79466)))}]);