(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,89129,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return h},MiddlewareNotFoundError:function(){return _},MissingStaticPage:function(){return w},NormalizeError:function(){return b},PageNotFoundError:function(){return x},SP:function(){return m},ST:function(){return y},WEB_VITALS:function(){return o},execOnce:function(){return a},getDisplayName:function(){return u},getLocationOrigin:function(){return f},getURL:function(){return c},isAbsoluteUrl:function(){return l},isResSent:function(){return d},loadGetInitialProps:function(){return g},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return v}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function f(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function c(){let{href:e}=window.location,t=f();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function g(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await g(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&d(n))return r;if(!r)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return r}let m="u">typeof performance,y=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class b extends Error{}class x extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class _ extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},17431,(e,t,n)=>{"use strict";var r=e.r(91788);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var a={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},s=Symbol.for("react.portal"),l=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,n.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(i(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},n.flushSync=function(e){var t=l.T,n=a.p;try{if(l.T=null,a.p=2,e)return e()}finally{l.T=t,a.p=n,a.d.f()}},n.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,a.d.C(e,t))},n.prefetchDNS=function(e){"string"==typeof e&&a.d.D(e)},n.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var n=t.as,r=f(n,t.crossOrigin),i="string"==typeof t.integrity?t.integrity:void 0,o="string"==typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?a.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):"script"===n&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},n.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=f(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},n.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var n=t.as,r=f(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},n.preloadModule=function(e,t){if("string"==typeof e)if(t){var n=f(t.as,t.crossOrigin);a.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},n.requestFormReset=function(e){a.d.r(e)},n.unstable_batchedUpdates=function(e,t){return e(t)},n.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},n.useFormStatus=function(){return l.H.useHostTransitionStatus()},n.version="19.2.4"},30943,(e,t,n)=>{"use strict";!function e(){if("u">typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),t.exports=e.r(17431)},11829,(e,t,n)=>{"use strict";function r(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,i=e[r];if(0<a(i,t))e[r]=t,e[n]=i,n=r;else break}}function i(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,l=e[s],f=s+1,c=e[f];if(0>a(l,n))f<i&&0>a(c,l)?(e[r]=c,e[f]=n,r=f):(e[r]=l,e[s]=n,r=s);else if(f<i&&0>a(c,n))e[r]=c,e[f]=n,r=f;else break}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(n.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var s,l=performance;n.unstable_now=function(){return l.now()}}else{var f=Date,c=f.now();n.unstable_now=function(){return f.now()-c}}var u=[],d=[],p=1,g=null,m=3,y=!1,h=!1,b=!1,x=!1,w="function"==typeof setTimeout?setTimeout:null,_="function"==typeof clearTimeout?clearTimeout:null,v="u">typeof setImmediate?setImmediate:null;function k(e){for(var t=i(d);null!==t;){if(null===t.callback)o(d);else if(t.startTime<=e)o(d),t.sortIndex=t.expirationTime,r(u,t);else break;t=i(d)}}function S(e){if(b=!1,k(e),!h)if(null!==i(u))h=!0,C||(C=!0,s());else{var t=i(d);null!==t&&P(S,t.startTime-e)}}var C=!1,E=-1,N=5,T=-1;function $(){return!!x||!(n.unstable_now()-T<N)}function O(){if(x=!1,C){var e=n.unstable_now();T=e;var t=!0;try{e:{h=!1,b&&(b=!1,_(E),E=-1),y=!0;var r=m;try{t:{for(k(e),g=i(u);null!==g&&!(g.expirationTime>e&&$());){var a=g.callback;if("function"==typeof a){g.callback=null,m=g.priorityLevel;var l=a(g.expirationTime<=e);if(e=n.unstable_now(),"function"==typeof l){g.callback=l,k(e),t=!0;break t}g===i(u)&&o(u),k(e)}else o(u);g=i(u)}if(null!==g)t=!0;else{var f=i(d);null!==f&&P(S,f.startTime-e),t=!1}}break e}finally{g=null,m=r,y=!1}}}finally{t?s():C=!1}}}if("function"==typeof v)s=function(){v(O)};else if("u">typeof MessageChannel){var j=new MessageChannel,I=j.port2;j.port1.onmessage=O,s=function(){I.postMessage(null)}}else s=function(){w(O,0)};function P(e,t){E=w(function(){e(n.unstable_now())},t)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<e?Math.floor(1e3/e):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_next=function(e){switch(m){case 1:case 2:case 3:var t=3;break;default:t=m}var n=m;m=t;try{return e()}finally{m=n}},n.unstable_requestPaint=function(){x=!0},n.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=m;m=e;try{return t()}finally{m=n}},n.unstable_scheduleCallback=function(e,t,o){var a=n.unstable_now();switch(o="object"==typeof o&&null!==o&&"number"==typeof(o=o.delay)&&0<o?a+o:a,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=0x3fffffff;break;case 4:l=1e4;break;default:l=5e3}return l=o+l,e={id:p++,callback:t,priorityLevel:e,startTime:o,expirationTime:l,sortIndex:-1},o>a?(e.sortIndex=o,r(d,e),null===i(u)&&e===i(d)&&(b?(_(E),E=-1):b=!0,P(S,o-a))):(e.sortIndex=l,r(u,e),h||y||(h=!0,C||(C=!0,s()))),e},n.unstable_shouldYield=$,n.unstable_wrapCallback=function(e){var t=m;return function(){var n=m;m=t;try{return e.apply(this,arguments)}finally{m=n}}}},52659,(e,t,n)=>{"use strict";t.exports=e.r(11829)},12533,e=>{"use strict";var t=e.i(91398),n=e.i(91788),r=e.i(58678),i=e.i(60814);let o={2:{bg:"#eee4da",color:"#776e65"},4:{bg:"#ede0c8",color:"#776e65"},8:{bg:"#f2b179",color:"#f9f6f2"},16:{bg:"#f59563",color:"#f9f6f2"},32:{bg:"#f67c5f",color:"#f9f6f2"},64:{bg:"#f65e3b",color:"#f9f6f2"},128:{bg:"#edcf72",color:"#f9f6f2",fontSize:"1.6rem"},256:{bg:"#edcc61",color:"#f9f6f2",fontSize:"1.6rem"},512:{bg:"#edc850",color:"#f9f6f2",fontSize:"1.6rem"},1024:{bg:"#edc53f",color:"#f9f6f2",fontSize:"1.3rem"},2048:{bg:"#edc22e",color:"#f9f6f2",fontSize:"1.3rem"}},a={bg:"#3c3a32",color:"#f9f6f2",fontSize:"1.1rem"},s=i.keyframes`
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
`,l=i.keyframes`
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`,f=i.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,c=i.default.div.withConfig({displayName:"styled__Container",componentId:"sc-35fffe33-0"})`
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
`,u=i.default.div.withConfig({displayName:"styled__Header",componentId:"sc-35fffe33-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  width: 100%;
  max-width: 400px;
`,d=i.default.h1.withConfig({displayName:"styled__Title",componentId:"sc-35fffe33-2"})`
  margin: 0;

  font-size: 3rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #edc22e, #f2b179, #f67c5f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,p=i.default.div.withConfig({displayName:"styled__ScoreArea",componentId:"sc-35fffe33-3"})`
  display: flex;
  gap: 8px;
`,g=i.default.div.withConfig({displayName:"styled__ScoreBox",componentId:"sc-35fffe33-4"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  min-width: 70px;
  padding: 8px 12px;
  border-radius: 8px;

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
`,m=i.default.span.withConfig({displayName:"styled__ScoreLabel",componentId:"sc-35fffe33-5"})`
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
`,y=i.default.span.withConfig({displayName:"styled__ScoreValue",componentId:"sc-35fffe33-6"})`
  font-size: 1.2rem;
  font-weight: 800;
  color: #f9f6f2;
`,h=i.default.div.withConfig({displayName:"styled__ButtonRow",componentId:"sc-35fffe33-7"})`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 400px;
`,b=i.default.button.withConfig({displayName:"styled__NewGameButton",componentId:"sc-35fffe33-8"})`
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
`,x=i.default.button.withConfig({displayName:"styled__UndoButton",componentId:"sc-35fffe33-9"})`
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
`,w=i.default.div.withConfig({displayName:"styled__Board",componentId:"sc-35fffe33-10"})`
  position: relative;

  border-radius: 12px;

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  overflow: hidden;
`,_=i.default.div.withConfig({displayName:"styled__Grid",componentId:"sc-35fffe33-11"})`
  display: grid;
  grid-template-columns: repeat(${e=>e.$size}, 1fr);
  gap: 8px;

  position: relative;

  padding: 8px;
`,v=i.default.div.withConfig({displayName:"styled__EmptyCell",componentId:"sc-35fffe33-12"})`
  width: clamp(60px, 18vw, 85px);
  height: clamp(60px, 18vw, 85px);
  border-radius: 8px;

  background: rgba(255, 255, 255, 0.05);
`,k=i.default.div.withConfig({displayName:"styled__Tile",componentId:"sc-35fffe33-13"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  border-radius: 8px;

  font-size: ${e=>(o[e.$value]??a).fontSize??"2rem"};
  font-weight: 800;
  color: ${e=>(o[e.$value]??a).color};
  background: ${e=>(o[e.$value]??a).bg};
  box-shadow: ${e=>e.$value>=128?`0 0 20px rgba(237, 197, 63, ${Math.min(.1+e.$value/4096,.6)})`:"none"};

  ${e=>e.$isNew&&i.css`
      animation: ${s} 0.2s ease forwards;
    `}

  ${e=>e.$isMerged&&i.css`
      animation: ${l} 0.2s ease;
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
  animation: ${f} 0.4s ease;
`,C=i.default.span.withConfig({displayName:"styled__OverlayText",componentId:"sc-35fffe33-15"})`
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
`,N=i.default.p.withConfig({displayName:"styled__Instruction",componentId:"sc-35fffe33-17"})`
  max-width: 400px;
  margin: 0;

  font-size: 0.8rem;
  line-height: 1.5;
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
`,T=0;function $(){return Array.from({length:4},()=>[,,,,].fill(0))}function O(e){let t=[];for(let n=0;n<4;n++)for(let r=0;r<4;r++)0===e[n][r]&&t.push([n,r]);return t}function j(e){let t=O(e);if(0===t.length)return null;let[n,r]=t[Math.floor(Math.random()*t.length)];return e[n][r]=.9>Math.random()?2:4,[n,r]}function I(e){let t=e.filter(e=>0!==e),n=[],r=new Set,i=0,o=0;for(;o<t.length;)if(o+1<t.length&&t[o]===t[o+1]){let e=2*t[o];n.push(e),i+=e,r.add(n.length-1),o+=2}else n.push(t[o]),o++;for(;n.length<4;)n.push(0);return{result:n,score:i,merged:r}}function P(e){return e.map(e=>[...e])}e.s(["default",0,function(){let[e,i]=(0,n.useState)($),[o,a]=(0,n.useState)(0),[s,l]=(0,n.useState)(0),[f,L]=(0,n.useState)("playing"),[R,z]=(0,n.useState)([]),[A,M]=(0,n.useState)([]),[D,U]=(0,n.useState)(!1),B=(0,n.useRef)(null),F=(0,n.useRef)(null),[H,G]=(0,n.useState)(85);(0,n.useEffect)(()=>{function e(){G(Math.max(60,Math.min(.18*window.innerWidth,85)))}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,n.useEffect)(()=>{let e=localStorage.getItem("game2048_best");e&&l(Number(e))},[]),(0,n.useEffect)(()=>{o>s&&(l(o),localStorage.setItem("game2048_best",String(o)))},[o,s]);let X=(0,n.useCallback)((e,t,n)=>{let r=[];for(let i=0;i<4;i++)for(let o=0;o<4;o++)0!==e[i][o]&&r.push({id:++T,value:e[i][o],row:i,col:o,isNew:!!t&&t[0]===i&&t[1]===o,isMerged:n.has(`${i}-${o}`)});return r},[]),Y=(0,n.useCallback)(()=>{T=0;let e=$();j(e),j(e),i(e),a(0),L("playing"),U(!1),M([]),z(X(e,null,new Set))},[X]);(0,n.useEffect)(()=>{Y()},[Y]);let K=(0,n.useCallback)(t=>{if("lost"===f||"won"===f&&!D)return;let{newGrid:n,score:r,mergedPositions:s}=function(e,t){let n=P(e),r=0,i=new Set;if("left"===t)for(let e=0;e<4;e++){let{result:t,score:o,merged:a}=I(n[e]);n[e]=t,r+=o,a.forEach(t=>i.add(`${e}-${t}`))}else if("right"===t)for(let e=0;e<4;e++){let{result:t,score:o,merged:a}=I([...n[e]].reverse());n[e]=t.reverse(),r+=o,a.forEach(t=>i.add(`${e}-${3-t}`))}else if("up"===t)for(let e=0;e<4;e++){let{result:t,score:o,merged:a}=I(Array.from({length:4},(t,r)=>n[r][e]));for(let r=0;r<4;r++)n[r][e]=t[r];r+=o,a.forEach(t=>i.add(`${t}-${e}`))}else for(let e=0;e<4;e++){let{result:t,score:o,merged:a}=I(Array.from({length:4},(t,r)=>n[r][e]).reverse()),s=t.reverse();for(let t=0;t<4;t++)n[t][e]=s[t];r+=o,a.forEach(t=>i.add(`${3-t}-${e}`))}return{newGrid:n,score:r,mergedPositions:i}}(e,t);if(function(e,t){for(let n=0;n<4;n++)for(let r=0;r<4;r++)if(e[n][r]!==t[n][r])return!1;return!0}(e,n))return;M(t=>[...t.slice(-20),{grid:P(e),score:o}]);let l=j(n),c=o+r;(i(n),a(c),z(X(n,l,s)),!D&&n.some(e=>e.some(e=>e>=2048)))?L("won"):!function(e){if(O(e).length>0)return!0;for(let t=0;t<4;t++)for(let n=0;n<4;n++)if(n+1<4&&e[t][n]===e[t][n+1]||t+1<4&&e[t][n]===e[t+1][n])return!0;return!1}(n)&&L("lost")},[e,o,f,D,X]),V=(0,n.useCallback)(()=>{if(0===A.length)return;let e=A[A.length-1];i(e.grid),a(e.score),M(e=>e.slice(0,-1)),z(X(e.grid,null,new Set)),"lost"===f&&L("playing")},[A,X,f]);(0,n.useEffect)(()=>{function e(e){let t={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down"}[e.key];t&&(e.preventDefault(),K(t))}return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[K]);let W=(0,n.useCallback)(e=>{let t=e.touches[0];B.current={x:t.clientX,y:t.clientY}},[]),q=(0,n.useCallback)(e=>{if(!B.current)return;let t=e.changedTouches[0],n=t.clientX-B.current.x,r=t.clientY-B.current.y,i=Math.abs(n),o=Math.abs(r);30>Math.max(i,o)||(i>o?K(n>0?"right":"left"):K(r>0?"down":"up"),B.current=null)},[K]),Z=(0,n.useCallback)(()=>{U(!0),L("playing")},[]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.default,{children:[(0,t.jsx)("title",{children:"2048 게임"}),(0,t.jsx)("meta",{name:"description",content:"2048 퍼즐 게임 - 타일을 밀어서 2048을 만들어보세요!"})]}),(0,t.jsxs)(c,{children:[(0,t.jsxs)(u,{children:[(0,t.jsx)(d,{children:"2048"}),(0,t.jsxs)(p,{children:[(0,t.jsxs)(g,{children:[(0,t.jsx)(m,{children:"점수"}),(0,t.jsx)(y,{children:o.toLocaleString()})]}),(0,t.jsxs)(g,{children:[(0,t.jsx)(m,{children:"최고"}),(0,t.jsx)(y,{children:s.toLocaleString()})]})]})]}),(0,t.jsxs)(h,{children:[(0,t.jsx)(b,{onClick:Y,children:"새 게임"}),(0,t.jsx)(x,{onClick:V,disabled:0===A.length,children:"↩ 되돌리기"})]}),(0,t.jsxs)(w,{ref:F,onTouchStart:W,onTouchEnd:q,children:[(0,t.jsx)(_,{$size:4,children:Array.from({length:16}).map((e,n)=>(0,t.jsx)(v,{},n))}),R.map(e=>(0,t.jsx)("div",{style:{position:"absolute",top:8+e.row*(H+8),left:8+e.col*(H+8),width:H,height:H,transition:"top 0.12s ease, left 0.12s ease",zIndex:e.isMerged?2:1},children:(0,t.jsx)(k,{$value:e.value,$isNew:e.isNew,$isMerged:e.isMerged,children:e.value})},e.id)),"lost"===f&&(0,t.jsxs)(S,{children:[(0,t.jsx)(C,{children:"게임 오버!"}),(0,t.jsx)(E,{onClick:Y,children:"다시 시작"}),A.length>0&&(0,t.jsx)(E,{onClick:V,children:"되돌리기"})]}),"won"===f&&!D&&(0,t.jsxs)(S,{$won:!0,children:[(0,t.jsx)(C,{$won:!0,children:"🎉 2048 달성!"}),(0,t.jsx)(E,{onClick:Z,children:"계속하기"}),(0,t.jsx)(E,{onClick:Y,children:"새 게임"})]})]}),(0,t.jsx)(N,{children:"방향키 또는 스와이프로 타일을 이동하세요. 같은 숫자의 타일이 만나면 합쳐집니다!"})]})]})}],12533)},7560,(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/e",()=>e.r(12533)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/e"])})},48761,e=>{e.v(t=>Promise.all(["static/chunks/0ey~yy8oeyp~5.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/0599p99vu8fk5.js"].map(t=>e.l(t))).then(()=>t(79466)))}]);