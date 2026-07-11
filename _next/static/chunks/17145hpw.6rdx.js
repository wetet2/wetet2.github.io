(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,17431,(e,t,n)=>{"use strict";var i=e.r(91788);function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var a={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},s=Symbol.for("react.portal"),l=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,n.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(r(299));return function(e,t,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==i?null:""+i,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},n.flushSync=function(e){var t=l.T,n=a.p;try{if(l.T=null,a.p=2,e)return e()}finally{l.T=t,a.p=n,a.d.f()}},n.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,a.d.C(e,t))},n.prefetchDNS=function(e){"string"==typeof e&&a.d.D(e)},n.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var n=t.as,i=f(n,t.crossOrigin),r="string"==typeof t.integrity?t.integrity:void 0,o="string"==typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?a.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:i,integrity:r,fetchPriority:o}):"script"===n&&a.d.X(e,{crossOrigin:i,integrity:r,fetchPriority:o,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},n.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=f(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},n.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var n=t.as,i=f(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:i,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},n.preloadModule=function(e,t){if("string"==typeof e)if(t){var n=f(t.as,t.crossOrigin);a.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},n.requestFormReset=function(e){a.d.r(e)},n.unstable_batchedUpdates=function(e,t){return e(t)},n.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},n.useFormStatus=function(){return l.H.useHostTransitionStatus()},n.version="19.2.4"},30943,(e,t,n)=>{"use strict";!function e(){if("u">typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),t.exports=e.r(17431)},11829,(e,t,n)=>{"use strict";function i(e,t){var n=e.length;for(e.push(t);0<n;){var i=n-1>>>1,r=e[i];if(0<a(r,t))e[i]=t,e[n]=r,n=i;else break}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var i=0,r=e.length,o=r>>>1;i<o;){var s=2*(i+1)-1,l=e[s],f=s+1,c=e[f];if(0>a(l,n))f<r&&0>a(c,l)?(e[i]=c,e[f]=n,i=f):(e[i]=l,e[s]=n,i=s);else if(f<r&&0>a(c,n))e[i]=c,e[f]=n,i=f;else break}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(n.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var s,l=performance;n.unstable_now=function(){return l.now()}}else{var f=Date,c=f.now();n.unstable_now=function(){return f.now()-c}}var p=[],d=[],u=1,y=null,g=3,m=!1,h=!1,x=!1,_=!1,v="function"==typeof setTimeout?setTimeout:null,b="function"==typeof clearTimeout?clearTimeout:null,w="u">typeof setImmediate?setImmediate:null;function I(e){for(var t=r(d);null!==t;){if(null===t.callback)o(d);else if(t.startTime<=e)o(d),t.sortIndex=t.expirationTime,i(p,t);else break;t=r(d)}}function k(e){if(x=!1,I(e),!h)if(null!==r(p))h=!0,T||(T=!0,s());else{var t=r(d);null!==t&&E(k,t.startTime-e)}}var T=!1,j=-1,C=5,A=-1;function N(){return!!_||!(n.unstable_now()-A<C)}function O(){if(_=!1,T){var e=n.unstable_now();A=e;var t=!0;try{e:{h=!1,x&&(x=!1,b(j),j=-1),m=!0;var i=g;try{t:{for(I(e),y=r(p);null!==y&&!(y.expirationTime>e&&N());){var a=y.callback;if("function"==typeof a){y.callback=null,g=y.priorityLevel;var l=a(y.expirationTime<=e);if(e=n.unstable_now(),"function"==typeof l){y.callback=l,I(e),t=!0;break t}y===r(p)&&o(p),I(e)}else o(p);y=r(p)}if(null!==y)t=!0;else{var f=r(d);null!==f&&E(k,f.startTime-e),t=!1}}break e}finally{y=null,g=i,m=!1}}}finally{t?s():T=!1}}}if("function"==typeof w)s=function(){w(O)};else if("u">typeof MessageChannel){var S=new MessageChannel,P=S.port2;S.port1.onmessage=O,s=function(){P.postMessage(null)}}else s=function(){v(O,0)};function E(e,t){j=v(function(){e(n.unstable_now())},t)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_next=function(e){switch(g){case 1:case 2:case 3:var t=3;break;default:t=g}var n=g;g=t;try{return e()}finally{g=n}},n.unstable_requestPaint=function(){_=!0},n.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=g;g=e;try{return t()}finally{g=n}},n.unstable_scheduleCallback=function(e,t,o){var a=n.unstable_now();switch(o="object"==typeof o&&null!==o&&"number"==typeof(o=o.delay)&&0<o?a+o:a,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=0x3fffffff;break;case 4:l=1e4;break;default:l=5e3}return l=o+l,e={id:u++,callback:t,priorityLevel:e,startTime:o,expirationTime:l,sortIndex:-1},o>a?(e.sortIndex=o,i(d,e),null===r(p)&&e===r(d)&&(x?(b(j),j=-1):x=!0,E(k,o-a))):(e.sortIndex=l,i(p,e),h||m||(h=!0,T||(T=!0,s()))),e},n.unstable_shouldYield=N,n.unstable_wrapCallback=function(e){var t=g;return function(){var n=g;g=t;try{return e.apply(this,arguments)}finally{g=n}}}},52659,(e,t,n)=>{"use strict";t.exports=e.r(11829)},23984,e=>{"use strict";var t=e.i(91398),n=e.i(58678),i=e.i(41158),r=e.i(60814);let o=r.keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
`,a=r.keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`,s=r.keyframes`
  0%, 100% { clip-path: inset(0 0 0 0); }
  20% { clip-path: inset(20% 0 60% 0); }
  40% { clip-path: inset(40% 0 40% 0); }
  60% { clip-path: inset(60% 0 20% 0); }
  80% { clip-path: inset(80% 0 5% 0); }
`,l=r.keyframes`
  0%, 100% { clip-path: inset(0 0 0 0); }
  20% { clip-path: inset(10% 0 70% 0); }
  40% { clip-path: inset(50% 0 30% 0); }
  60% { clip-path: inset(30% 0 50% 0); }
  80% { clip-path: inset(70% 0 10% 0); }
`,f=r.keyframes`
  0%, 100% { opacity: 1; }
  92% { opacity: 1; }
  93% { opacity: 0.8; }
  94% { opacity: 1; }
  96% { opacity: 0.6; }
  97% { opacity: 1; }
`,c=r.default.div.withConfig({displayName:"styled__Container",componentId:"sc-e319c320-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  padding: 80px 20px;
  font-family: "Pretendard", sans-serif;
  background: #0a0a0f;
  overflow: hidden;
`,p=r.default.div.withConfig({displayName:"styled__Grid",componentId:"sc-e319c320-1"})`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 0, 255, 0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
`,d=r.default.div.withConfig({displayName:"styled__Scanline",componentId:"sc-e319c320-2"})`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(0, 0, 0, 0.02) 50%
  );
  background-size: 100% 4px;
  pointer-events: none;
  animation: ${o} 10s linear infinite;
`,u=r.default.div.withConfig({displayName:"styled__GlowBar",componentId:"sc-e319c320-3"})`
  position: absolute;
  top: ${({$top:e})=>e};
  left: ${({$left:e})=>e};
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, ${({$color:e})=>e}25 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
`,y=r.default.div.withConfig({displayName:"styled__Content",componentId:"sc-e319c320-4"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 560px;
`,g=r.default.div.withConfig({displayName:"styled__Badge",componentId:"sc-e319c320-5"})`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgba(255, 0, 255, 0.6);
  font-weight: 700;

  &::after {
    width: 4px;
    height: 4px;
    background: #00ffff;
    content: "";
    border-radius: 50%;
    animation: ${a} 1s step-end infinite;
  }
`,m=r.default.h1.withConfig({displayName:"styled__Title",componentId:"sc-e319c320-6"})`
  font-size: clamp(28px, 6vw, 48px);
  font-weight: 900;
  color: #fff;
  text-align: center;
  line-height: 1.15;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: ${f} 3s linear infinite;

  span:first-child {
    color: #00ffff;
    text-shadow:
      0 0 4px #00ffff,
      0 0 12px #00ffff66,
      0 0 24px #00ffff33;
  }

  .glitch {
    position: relative;
    color: #ff00ff;
    text-shadow:
      0 0 4px #ff00ff,
      0 0 12px #ff00ff66,
      0 0 24px #ff00ff33;

    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    &::before {
      color: #00ffff;
      animation: ${s} 2s infinite linear alternate-reverse;
    }

    &::after {
      color: #ff00ff;
      animation: ${l} 2s infinite linear alternate-reverse;
    }
  }
`,h=r.default.div.withConfig({displayName:"styled__List",componentId:"sc-e319c320-7"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 520px;
`,x=r.default.a.withConfig({displayName:"styled__Card",componentId:"sc-e319c320-8"})`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 0, 255, 0.15);
  border-radius: 8px;
  transition: all 0.25s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(0, 255, 255, 0.4);
    box-shadow:
      0 0 12px rgba(0, 255, 255, 0.15),
      inset 0 0 12px rgba(0, 255, 255, 0.05);
    transform: translateY(-2px);
  }

  &:hover .arrow {
    color: #00ffff;
    transform: translateX(4px);
  }
`,_=r.default.div.withConfig({displayName:"styled__CardIcon",componentId:"sc-e319c320-9"})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  font-size: 16px;
  background: rgba(255, 0, 255, 0.08);
  border-radius: 6px;
  border: 1px solid rgba(255, 0, 255, 0.2);
`,v=r.default.div.withConfig({displayName:"styled__CardText",componentId:"sc-e319c320-10"})`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
  min-width: 0;
`,b=r.default.div.withConfig({displayName:"styled__CardTitle",componentId:"sc-e319c320-11"})`
  font-size: 15px;
  font-weight: 600;
  color: #fff;
`,w=r.default.div.withConfig({displayName:"styled__CardDesc",componentId:"sc-e319c320-12"})`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.35);
`,I=r.default.span.withConfig({displayName:"styled__Arrow",componentId:"sc-e319c320-13"})`
  flex-shrink: 0;
  margin-left: auto;
  font-size: 16px;
  color: rgba(255, 0, 255, 0.3);
  transition: all 0.25s ease;
`,k=r.default.div.withConfig({displayName:"styled__Footer",componentId:"sc-e319c320-14"})`
  font-size: 10px;
  color: rgba(0, 255, 255, 0.3);
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;
`;e.s(["__N_SSG",0,!0,"default",0,function({news:e}){return(0,t.jsxs)(c,{children:[(0,t.jsxs)(n.default,{children:[(0,t.jsx)("title",{children:"AI 뉴스 다이제스트 — Everything AI Have"}),(0,t.jsx)("meta",{name:"description",content:"최신 AI 뉴스를 한눈에 모아보는 AI 뉴스 다이제스트입니다. 인공지능 트렌드와 소식을 날짜별로 정리했습니다."}),(0,t.jsx)("meta",{name:"keywords",content:"AI 뉴스, 인공지능, AI 다이제스트, AI 소식, 인공지능 트렌드, Artificial Intelligence, News"}),(0,t.jsx)("meta",{name:"author",content:"Everything AI Have"}),(0,t.jsx)("meta",{name:"theme-color",content:"#0a0a0f"}),(0,t.jsx)("meta",{name:"robots",content:"index, follow"}),(0,t.jsx)("meta",{property:"og:type",content:"website"}),(0,t.jsx)("meta",{property:"og:title",content:"AI 뉴스 다이제스트 — Everything AI Have"}),(0,t.jsx)("meta",{property:"og:description",content:"최신 AI 뉴스를 한눈에 모아보는 AI 뉴스 다이제스트입니다."}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,t.jsx)("meta",{name:"twitter:title",content:"AI 뉴스 다이제스트 — Everything AI Have"}),(0,t.jsx)("meta",{name:"twitter:description",content:"최신 AI 뉴스를 한눈에 모아보는 AI 뉴스 다이제스트입니다."})]}),(0,t.jsx)(p,{}),(0,t.jsx)(d,{}),(0,t.jsx)(u,{$top:"15%",$left:"10%",$color:"#ff00ff"}),(0,t.jsx)(u,{$top:"60%",$left:"75%",$color:"#00ffff"}),(0,t.jsxs)(y,{children:[(0,t.jsx)(g,{children:(0,t.jsx)(i.default,{href:"/",style:{textDecoration:"none",color:"inherit"},children:"AI 뉴스 다이제스트"})}),(0,t.jsxs)(m,{children:[(0,t.jsx)("span",{"data-text":"AI 뉴스",children:"AI가 말아주는"}),(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:"glitch","data-text":"전세계 AI 늬우스",children:"전세계 AI 늬우스"})]}),(0,t.jsx)(h,{children:e.map(e=>(0,t.jsxs)(x,{href:e.href,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(_,{children:"📡"}),(0,t.jsxs)(v,{children:[(0,t.jsx)(b,{children:e.title}),(0,t.jsx)(w,{children:e.label})]}),(0,t.jsx)(I,{className:"arrow",children:"→"})]},e.href))}),(0,t.jsx)(k,{children:"neural feed // Everything AI Have"})]})]})}],23984)},78813,(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/n",()=>e.r(23984)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/n"])})},48761,e=>{e.v(t=>Promise.all(["static/chunks/0ey~yy8oeyp~5.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/0599p99vu8fk5.js"].map(t=>e.l(t))).then(()=>t(79466)))}]);