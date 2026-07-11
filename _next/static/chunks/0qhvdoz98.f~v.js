(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,17431,(e,t,n)=>{"use strict";var i=e.r(91788);function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var a={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},s=Symbol.for("react.portal"),l=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,n.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(r(299));return function(e,t,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==i?null:""+i,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},n.flushSync=function(e){var t=l.T,n=a.p;try{if(l.T=null,a.p=2,e)return e()}finally{l.T=t,a.p=n,a.d.f()}},n.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,a.d.C(e,t))},n.prefetchDNS=function(e){"string"==typeof e&&a.d.D(e)},n.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var n=t.as,i=c(n,t.crossOrigin),r="string"==typeof t.integrity?t.integrity:void 0,o="string"==typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?a.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:i,integrity:r,fetchPriority:o}):"script"===n&&a.d.X(e,{crossOrigin:i,integrity:r,fetchPriority:o,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},n.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},n.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var n=t.as,i=c(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:i,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},n.preloadModule=function(e,t){if("string"==typeof e)if(t){var n=c(t.as,t.crossOrigin);a.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},n.requestFormReset=function(e){a.d.r(e)},n.unstable_batchedUpdates=function(e,t){return e(t)},n.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},n.useFormStatus=function(){return l.H.useHostTransitionStatus()},n.version="19.2.4"},30943,(e,t,n)=>{"use strict";!function e(){if("u">typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),t.exports=e.r(17431)},11829,(e,t,n)=>{"use strict";function i(e,t){var n=e.length;for(e.push(t);0<n;){var i=n-1>>>1,r=e[i];if(0<a(r,t))e[i]=t,e[n]=r,n=i;else break}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var i=0,r=e.length,o=r>>>1;i<o;){var s=2*(i+1)-1,l=e[s],c=s+1,f=e[c];if(0>a(l,n))c<r&&0>a(f,l)?(e[i]=f,e[c]=n,i=c):(e[i]=l,e[s]=n,i=s);else if(c<r&&0>a(f,n))e[i]=f,e[c]=n,i=c;else break}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(n.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var s,l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var d=[],p=[],u=1,g=null,y=3,h=!1,m=!1,x=!1,b=!1,_="function"==typeof setTimeout?setTimeout:null,v="function"==typeof clearTimeout?clearTimeout:null,w="u">typeof setImmediate?setImmediate:null;function k(e){for(var t=r(p);null!==t;){if(null===t.callback)o(p);else if(t.startTime<=e)o(p),t.sortIndex=t.expirationTime,i(d,t);else break;t=r(p)}}function C(e){if(x=!1,k(e),!m)if(null!==r(d))m=!0,T||(T=!0,s());else{var t=r(p);null!==t&&E(C,t.startTime-e)}}var T=!1,I=-1,N=5,O=-1;function S(){return!!b||!(n.unstable_now()-O<N)}function j(){if(b=!1,T){var e=n.unstable_now();O=e;var t=!0;try{e:{m=!1,x&&(x=!1,v(I),I=-1),h=!0;var i=y;try{t:{for(k(e),g=r(d);null!==g&&!(g.expirationTime>e&&S());){var a=g.callback;if("function"==typeof a){g.callback=null,y=g.priorityLevel;var l=a(g.expirationTime<=e);if(e=n.unstable_now(),"function"==typeof l){g.callback=l,k(e),t=!0;break t}g===r(d)&&o(d),k(e)}else o(d);g=r(d)}if(null!==g)t=!0;else{var c=r(p);null!==c&&E(C,c.startTime-e),t=!1}}break e}finally{g=null,y=i,h=!1}}}finally{t?s():T=!1}}}if("function"==typeof w)s=function(){w(j)};else if("u">typeof MessageChannel){var P=new MessageChannel,A=P.port2;P.port1.onmessage=j,s=function(){A.postMessage(null)}}else s=function(){_(j,0)};function E(e,t){I=_(function(){e(n.unstable_now())},t)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<e?Math.floor(1e3/e):5},n.unstable_getCurrentPriorityLevel=function(){return y},n.unstable_next=function(e){switch(y){case 1:case 2:case 3:var t=3;break;default:t=y}var n=y;y=t;try{return e()}finally{y=n}},n.unstable_requestPaint=function(){b=!0},n.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=y;y=e;try{return t()}finally{y=n}},n.unstable_scheduleCallback=function(e,t,o){var a=n.unstable_now();switch(o="object"==typeof o&&null!==o&&"number"==typeof(o=o.delay)&&0<o?a+o:a,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=0x3fffffff;break;case 4:l=1e4;break;default:l=5e3}return l=o+l,e={id:u++,callback:t,priorityLevel:e,startTime:o,expirationTime:l,sortIndex:-1},o>a?(e.sortIndex=o,i(p,e),null===r(d)&&e===r(p)&&(x?(v(I),I=-1):x=!0,E(C,o-a))):(e.sortIndex=l,i(d,e),m||h||(m=!0,T||(T=!0,s()))),e},n.unstable_shouldYield=S,n.unstable_wrapCallback=function(e){var t=y;return function(){var n=y;y=t;try{return e.apply(this,arguments)}finally{y=n}}}},52659,(e,t,n)=>{"use strict";t.exports=e.r(11829)},87856,e=>{"use strict";var t=e.i(91398),n=e.i(58678),i=e.i(60814),r=e.i(41158);let o=i.keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
`,a=i.keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
`;i.default.header.withConfig({displayName:"styled__Toolbar",componentId:"sc-7094a356-0"})`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 52px;
  padding: 0 24px;
  background: rgba(10, 10, 15, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(0, 255, 255, 0.1);
`;let s=i.default.div.withConfig({displayName:"styled__ToolbarBrand",componentId:"sc-7094a356-1"})`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;

  span {
    color: #00ffff;
    text-shadow: 0 0 8px rgba(0, 255, 255, 0.4);
  }
`,l=i.default.div.withConfig({displayName:"styled__Container",componentId:"sc-7094a356-2"})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  padding: 92px 20px 40px;
  background: #0a0a0f;
  overflow: hidden;
`,c=i.default.div.withConfig({displayName:"styled__Grid",componentId:"sc-7094a356-3"})`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
`,f=i.default.div.withConfig({displayName:"styled__Scanline",componentId:"sc-7094a356-4"})`
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
`,d=i.default.div.withConfig({displayName:"styled__Orb",componentId:"sc-7094a356-5"})`
  position: absolute;
  top: ${({$top:e})=>e};
  left: ${({$left:e})=>e};
  width: ${({$size:e})=>e};
  height: ${({$size:e})=>e};
  background: radial-gradient(
    circle,
    rgba(0, 255, 255, 0.06) 0%,
    transparent 70%
  );
  border-radius: 50%;
  filter: blur(60px);
  animation: ${o} 5s ease-in-out infinite;
  animation-delay: ${({$delay:e})=>e}s;
  pointer-events: none;
`,p=i.default.div.withConfig({displayName:"styled__Content",componentId:"sc-7094a356-6"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 600px;
`;i.default.div.withConfig({displayName:"styled__Badge",componentId:"sc-7094a356-7"})`
  font-size: 11px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgba(0, 255, 255, 0.5);
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  text-align: center;
`;let u=i.default.h1.withConfig({displayName:"styled__Title",componentId:"sc-7094a356-8"})`
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
`,g=i.default.p.withConfig({displayName:"styled__Subtitle",componentId:"sc-7094a356-9"})`
  margin: -24px 0 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.3);
  text-align: center;
  letter-spacing: 0.5px;
`,y=i.default.div.withConfig({displayName:"styled__CardGrid",componentId:"sc-7094a356-10"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media (min-width: 500px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`,h=(0,i.default)(r.default).withConfig({displayName:"styled__Card",componentId:"sc-7094a356-11"})`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 22px;
  text-decoration: none;
  background: rgba(0, 255, 255, 0.02);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 255, 255, 0.12);
  border-radius: 10px;
  transition: all 0.25s ease;
  cursor: pointer;

  &:hover {
    background: rgba(0, 255, 255, 0.05);
    border-color: rgba(0, 255, 255, 0.4);
    box-shadow: 0 0 24px rgba(0, 255, 255, 0.1);
    transform: translateY(-1px);
  }
`,m=i.default.div.withConfig({displayName:"styled__CardIcon",componentId:"sc-7094a356-12"})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  font-size: 20px;
  background: linear-gradient(
    135deg,
    rgba(0, 255, 255, 0.12),
    rgba(255, 0, 255, 0.08)
  );
  border-radius: 8px;
`,x=i.default.div.withConfig({displayName:"styled__CardText",componentId:"sc-7094a356-13"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`,b=i.default.div.withConfig({displayName:"styled__CardTitle",componentId:"sc-7094a356-14"})`
  font-size: 15px;
  font-weight: 600;
  color: #fff;
`,_=i.default.div.withConfig({displayName:"styled__CardDesc",componentId:"sc-7094a356-15"})`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.35);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`,v=i.default.span.withConfig({displayName:"styled__Arrow",componentId:"sc-7094a356-16"})`
  flex-shrink: 0;
  font-size: 18px;
  color: rgba(0, 255, 255, 0.4);
  transition: transform 0.25s ease;

  ${h}:hover & {
    color: #00ffff;
    transform: translateX(4px);
  }
`,w=i.default.div.withConfig({displayName:"styled__Footer",componentId:"sc-7094a356-17"})`
  margin-top: 8px;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.1);
  letter-spacing: 2px;
  text-transform: uppercase;
`,k=[{href:"/t",short:"Typing",icon:"⌨️",title:"손은 눈보다 빠르다",desc:"타이핑으로 실력을 연습하자"},{href:"/c",short:"Furniture",icon:"🪑",title:"Drop The Furniture",desc:"3D 공간에 가구 배치하기"},{href:"/d",short:"Drawing",icon:"✏️",title:"Drawing Board",desc:"자유롭게 그리고 색칠하기"},{href:"/g",short:"Chat",icon:"💬",title:"AI Chat",desc:"AI와 자유로운 대화"},{href:"/n",short:"News",icon:"📰",title:"AI 뉴스",desc:"최신 AI 뉴스 다이제스트"},{href:"/b",short:"Mine",icon:"💣",title:"지뢰찾기",desc:"초급·중급·상급 지뢰찾기"}];e.s(["default",0,function(){return(0,t.jsxs)(l,{children:[(0,t.jsxs)(n.default,{children:[(0,t.jsx)("title",{children:"Everything AI Have"}),(0,t.jsx)("meta",{name:"description",content:"Everything AI Have — 여러 AI 도구를 한곳에 모은 프로젝트입니다."})]}),(0,t.jsx)(c,{}),(0,t.jsx)(f,{}),(0,t.jsx)(d,{$top:"10%",$left:"5%",$size:"400px",$delay:0}),(0,t.jsx)(d,{$top:"60%",$left:"70%",$size:"350px",$delay:2.5}),(0,t.jsxs)(p,{children:[(0,t.jsxs)(s,{children:["everything ",(0,t.jsx)("span",{children:"ai"})," have"]}),(0,t.jsxs)(u,{children:["나의 ",(0,t.jsx)("span",{children:"AI"}),"저씨"]}),(0,t.jsx)(g,{children:"AI 주인님께 드리는 미천한 나의 프롬프트"}),(0,t.jsx)(y,{children:k.map(e=>(0,t.jsxs)(h,{href:e.href,children:[(0,t.jsx)(m,{children:e.icon}),(0,t.jsxs)(x,{children:[(0,t.jsx)(b,{children:e.title}),(0,t.jsx)(_,{children:e.desc})]}),(0,t.jsx)(v,{className:"arrow",children:"→"})]},e.href))}),(0,t.jsx)(w,{children:"©https://github.com/wetet2"})]})]})}],87856)},55075,(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",()=>e.r(87856)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/"])})},48761,e=>{e.v(t=>Promise.all(["static/chunks/0ey~yy8oeyp~5.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/0599p99vu8fk5.js"].map(t=>e.l(t))).then(()=>t(79466)))}]);