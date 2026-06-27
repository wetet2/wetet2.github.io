(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,61592,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"LoadableContext",{enumerable:!0,get:function(){return r}});let r=e.r(41705)._(e.r(91788)).default.createContext(null)},52414,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return p}});let r=e.r(41705)._(e.r(91788)),i=e.r(61592),o=[],a=[],l=!1;function d(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class s{constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}}function c(t){return function(t,n){let d=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},n),c=null;function u(){if(!c){let e=new s(t,d);c={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return c.promise()}if("u"<typeof window&&o.push(u),!l&&"u">typeof window){let t=d.webpack&&"function"==typeof e.t.resolveWeak?d.webpack():d.modules;t&&a.push(e=>{for(let n of t)if(e.includes(n))return u()})}function p(e,t){let n;u(),(n=r.default.useContext(i.LoadableContext))&&Array.isArray(d.modules)&&d.modules.forEach(e=>{n(e)});let o=r.default.useSyncExternalStore(c.subscribe,c.getCurrentValue,c.getCurrentValue);return r.default.useImperativeHandle(t,()=>({retry:c.retry}),[]),r.default.useMemo(()=>{var t;return o.loading||o.error?r.default.createElement(d.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:c.retry}):o.loaded?r.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return p.preload=()=>u(),p.displayName="LoadableComponent",r.default.forwardRef(p)}(d,t)}function u(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then(()=>{if(e.length)return u(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{u(o).then(e,t)}),c.preloadReady=(e=[])=>new Promise(t=>{let n=()=>(l=!0,t());u(a,e).then(n,n)}),"u">typeof window&&(window.__NEXT_PRELOADREADY=c.preloadReady);let p=c},25167,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return u},noSSR:function(){return c}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=e.r(41705),a=e.r(91398);e.r(91788);let l=o._(e.r(52414)),d="u"<typeof window;function s(e){return{default:e?.default||e}}function c(e,t){if(delete t.webpack,delete t.modules,!d)return e(t);let n=t.loading;return()=>(0,a.jsx)(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function u(e,t){let n=l.default,r={loading:({error:e,isLoading:t,pastDelay:n})=>null};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r={...r,...e});let i=(r={...r,...t}).loader;return(r.loadableGenerated&&(r={...r,...r.loadableGenerated},delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr)?n({...r,loader:()=>null!=i?i().then(s):Promise.resolve(s(()=>null))}):(delete r.webpack,delete r.modules,c(n,r))}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},68489,(e,t,n)=>{t.exports=e.r(25167)},83594,e=>{"use strict";var t=e.i(91398),n=e.i(91788),r=e.i(68489),i=e.i(58678),o=e.i(24005),a=e.i(60814);let l=a.default.div.withConfig({displayName:"styled__Container",componentId:"sc-859c6c55-0"})`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #1a1a1a;
`,d=a.default.header.withConfig({displayName:"styled__Header",componentId:"sc-859c6c55-1"})`
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
`,s=a.default.button.withConfig({displayName:"styled__MenuButton",componentId:"sc-859c6c55-2"})`
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
`,u=a.default.div.withConfig({displayName:"styled__Panel",componentId:"sc-859c6c55-4"})`
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
`,p=(0,a.default)(u).withConfig({displayName:"styled__LeftPanel",componentId:"sc-859c6c55-5"})`
  @media (max-width: 768px) {
    width: 80vw;
    max-width: 280px;
    transition: transform 0.2s ease;
    transform: translateX(${e=>e.$open?"0":"-100%"});
  }
`;(0,a.default)(u).withConfig({displayName:"styled__RightPanel",componentId:"sc-859c6c55-6"})`
  right: 20px;
`;let f=a.default.hr.withConfig({displayName:"styled__Divider",componentId:"sc-859c6c55-7"})`
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
`,g=a.default.button.withConfig({displayName:"styled__CollapseAllButton",componentId:"sc-859c6c55-10"})`
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
`,x=a.default.div.withConfig({displayName:"styled__ButtonGroup",componentId:"sc-859c6c55-11"})`
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
`,y=a.default.div.withConfig({displayName:"styled__ColorInputWrap",componentId:"sc-859c6c55-13"})`
  position: relative;
  width: 32px; /* 원하는 크기 */
  height: 32px;
  border-radius: 50%; /* 원형으로 설정 */
  overflow: hidden;
`,w=a.default.input.withConfig({displayName:"styled__ColorInput",componentId:"sc-859c6c55-14"})`
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
`,_=a.default.input.withConfig({displayName:"styled__NumberInput",componentId:"sc-859c6c55-15"})`
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
`,k=a.default.input.withConfig({displayName:"styled__TextInput",componentId:"sc-859c6c55-16"})`
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
`,j=a.default.div.withConfig({displayName:"styled__InputRow",componentId:"sc-859c6c55-17"})`
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
`;let C=a.default.div.withConfig({displayName:"styled__DimInputWrapper",componentId:"sc-859c6c55-20"})`
  position: relative;
  flex: 0 0 auto;

  input {
    padding-right: 24px;
    width: 100%;
    box-sizing: border-box;
  }
`,v=a.default.span.withConfig({displayName:"styled__DimInlineLabel",componentId:"sc-859c6c55-21"})`
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
`,I=a.default.div.withConfig({displayName:"styled__Hint",componentId:"sc-859c6c55-22"})`
  font-size: 12px;
  color: #a1a1aa;
  line-height: 1.5;
`,$=a.default.div.withConfig({displayName:"styled__List",componentId:"sc-859c6c55-23"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 8px;
`,D=a.default.div.withConfig({displayName:"styled__ListItem",componentId:"sc-859c6c55-24"})`
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
`,N=a.default.div.withConfig({displayName:"styled__RoomChildren",componentId:"sc-859c6c55-25"})`
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
`,S=a.default.span.withConfig({displayName:"styled__ListItemType",componentId:"sc-859c6c55-26"})`
  font-size: 11px;
  color: #d4d4d8;
`,E=a.default.button.withConfig({displayName:"styled__CollapseToggle",componentId:"sc-859c6c55-27"})`
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
`,L=a.default.span.withConfig({displayName:"styled__RoomName",componentId:"sc-859c6c55-28"})`
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,T=a.default.div.withConfig({displayName:"styled__HeaderButtons",componentId:"sc-859c6c55-29"})`
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
`,O=a.default.input.withConfig({displayName:"styled__OpacitySlider",componentId:"sc-859c6c55-30"})`
  width: 100%;
  cursor: pointer;
`,A=a.default.div.withConfig({displayName:"styled__Toolbar",componentId:"sc-859c6c55-31"})`
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
`;var R=e.i(59858),P=e.i(85103);let M=(0,r.default)(()=>e.A(17050),{loadableGenerated:{modules:[97220]},ssr:!1}),z=["bed","chair","table","sofa","bookshelf","shelf","washingMachine","refrigerator"],B=["fountain","donkey","dog","couch","badDouble","bookcase2","chair2","door2","clothesDryer","fridge","sink","stove"],F={bed:"#8b5cf6",chair:"#f59e0b",table:"#10b981",sofa:"#3b82f6",bookshelf:"#ec4899",shelf:"#14b8a6",washingMachine:"#94a3b8",refrigerator:"#64748b",door:"#92400e"},U={fountain:"#06b6d4",donkey:"#a78bfa",dog:"#fbbf24",couch:"#f59e0b",badDouble:"#ef4444",bookcase2:"#ec4899",chair2:"#f59e0b",door2:"#92400e",clothesDryer:"#94a3b8",fridge:"#64748b",sink:"#9ca3af",stove:"#4b5563"},H={position:[16e3,16e3,16e3],target:[0,0,0]},Y="dtf-state",W={container:e=>({...e,width:"150px"}),control:e=>({...e,background:"#27272a",borderColor:"#52525b",borderRadius:"8px",minHeight:"34px",boxShadow:"none",cursor:"pointer",fontSize:"13px",":hover":{borderColor:"#71717a"}}),singleValue:e=>({...e,color:"#ffffff"}),input:e=>({...e,color:"#ffffff"}),menu:e=>({...e,background:"#27272a",border:"1px solid #52525b",borderRadius:"8px",overflow:"hidden",zIndex:30}),option:(e,t)=>({...e,background:t.isSelected?"#3b82f6":t.isFocused?"#3f3f46":"#27272a",color:"#ffffff",cursor:"pointer",fontSize:"13px"}),indicatorSeparator:e=>({...e,background:"#52525b"}),dropdownIndicator:e=>({...e,color:"#a1a1aa"})},G={id:`room-${Date.now()}`,kind:"room",name:"방 1",width:8e3,depth:8e3,height:3e3,position:[0,0,0],rotation:[0,0,0],color:"#a8afb3"};e.s(["default",0,function(){let[e,r]=(0,n.useState)([G]),[a,u]=(0,n.useState)(null),[K,V]=(0,n.useState)("translate"),[J,X]=(0,n.useState)(H),[q,Q]=(0,n.useState)(1),[Z,ee]=(0,n.useState)(!1),[et,en]=(0,n.useState)(null),[er,ei]=(0,n.useState)(!1),[eo,ea]=(0,n.useState)(!1),[el,ed]=(0,n.useState)(!1),[es,ec]=(0,n.useState)(!1),[eu,ep]=(0,n.useState)(()=>new Set),ef=(0,n.useRef)(null),eh=(0,n.useRef)(G.id),em=(0,n.useRef)(null),eg=(0,n.useRef)(e),ex=(0,n.useRef)([]),eb=(0,n.useRef)([]),ey=(0,n.useRef)(null),ew=(0,n.useCallback)(()=>{ei(ex.current.length>0),ea(eb.current.length>0)},[]),e_=(0,n.useCallback)(e=>{u(e),null===e&&V("translate")},[]),ek=(0,n.useCallback)(e=>{ep(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},[]),ej=(0,n.useCallback)(e=>{ex.current.push(eg.current),eb.current=[],r(e),ew()},[ew]),eC=(0,n.useCallback)(()=>{if(0===ex.current.length)return;let e=eg.current,t=ex.current.pop();eb.current.push(e),r(t),ew()},[ew]),ev=(0,n.useCallback)(()=>{if(0===eb.current.length)return;let e=eg.current,t=eb.current.pop();ex.current.push(e),r(t),ew()},[ew]),eI=(0,n.useCallback)(()=>{let e=`room-${Date.now()}`,t=eg.current.filter(e=>"room"===e.kind),n=(0,R.findNonOverlappingRoomPosition)(t,8e3,8e3,J.target,J.position),r=eg.current.filter(e=>"room"===e.kind).length,i={id:e,kind:"room",name:`방 ${r+1}`,width:8e3,depth:8e3,height:3e3,position:n,rotation:[0,0,0],color:"#a8afb3"};ej([...eg.current,i]),e_(e)},[ej,e_,J]),e$=(0,n.useCallback)(()=>{let e=`room-${Date.now()}`,t=eg.current.filter(e=>"room"===e.kind),n=(0,R.findNonOverlappingRoomPosition)(t,2400,8e3,J.target,J.position),r=eg.current.filter(e=>"room"===e.kind&&!1===e.hasWalls).length,i={id:e,kind:"room",name:`공간 ${r+1}`,width:2400,depth:8e3,height:3e3,position:n,rotation:[0,0,0],color:"#a8afb3",hasWalls:!1};ej([...eg.current,i]),e_(e)},[ej,e_,J]),eD=(0,n.useCallback)(e=>{let t=`${e}-${Date.now()}`,n=eg.current.find(e=>e.id===a)??null,r=(()=>{if(n?.kind==="room")return n;if(eh.current){let e=eg.current.find(e=>"room"===e.kind&&e.id===eh.current);if(e)return e}return eg.current.find(e=>"room"===e.kind)})(),i=P.FURNITURE_DEFAULT_DIMENSIONS[e],o=eg.current.filter(e=>"furniture"===e.kind).length,l={id:t,kind:"furniture",furnitureType:e,roomId:r?.id??null,name:`${P.TYPE_LABELS[e]} ${o+1}`,width:i.width,depth:i.depth,height:i.height,position:[0,10*("door"!==e),0],rotation:[0,0,0],color:F[e]};ej([...eg.current,l]),e_(t)},[ej,a,e_]),eN=(0,n.useCallback)(e=>{let t=`${e}-${Date.now()}`,n=eg.current.find(e=>e.id===a)??null,r=(()=>{if(n?.kind==="room")return n;if(eh.current){let e=eg.current.find(e=>"room"===e.kind&&e.id===eh.current);if(e)return e}return eg.current.find(e=>"room"===e.kind)})(),i=P.MODEL_DEFAULT_DIMENSIONS[e],o=eg.current.filter(e=>"model"===e.kind).length,l={id:t,kind:"model",modelType:e,roomId:r?.id??null,name:`${P.MODEL_LABELS[e]} ${o+1}`,width:i.width,depth:i.depth,height:i.height,position:[0,10,0],rotation:[0,0,0],color:U[e]};ej([...eg.current,l]),e_(t)},[ej,a,e_]),eS=(0,n.useCallback)((e,t)=>{ej(eg.current.map(n=>n.id===e?{...n,...t}:n))},[ej]),eE=(0,n.useCallback)(()=>{if(!a)return;let e=eg.current.find(e=>e.id===a);e?.kind==="room"?ej(eg.current.filter(e=>("furniture"!==e.kind&&"model"!==e.kind||e.roomId!==a)&&e.id!==a)):ej(eg.current.filter(e=>e.id!==a)),e_(null)},[ej,a,e_]),eL=(0,n.useCallback)(e=>e.map(e=>{if("model"===e.kind){let t=P.MODEL_DEFAULT_DIMENSIONS[e.modelType];return t&&("number"!=typeof e.width||"number"!=typeof e.depth||"number"!=typeof e.height)?Array.isArray(e.scale)&&3===e.scale.length?{...e,width:t.width*e.scale[0],depth:t.depth*e.scale[2],height:t.height*e.scale[1]}:{...e,width:t.width,depth:t.depth,height:t.height}:e}if("furniture"!==e.kind)return e;let t=P.FURNITURE_DEFAULT_DIMENSIONS[e.furnitureType];return t&&("number"!=typeof e.width||"number"!=typeof e.depth||"number"!=typeof e.height)?Array.isArray(e.scale)&&3===e.scale.length?{...e,width:t.width*e.scale[0],depth:t.depth*e.scale[2],height:t.height*e.scale[1]}:{...e,width:t.width,depth:t.depth,height:t.height}:e}),[]),eT=(0,n.useCallback)(e=>{let t=e.filter(e=>"room"===e.kind),n=e.filter(e=>"room"!==e.kind);return t.length<=1&&0===n.length},[]),eO=(0,n.useCallback)(()=>{let t=new Blob([JSON.stringify({items:e,camera:J,wallOpacity:q,autoTransparent:Z,version:1},null,2)],{type:"application/json"}),n=URL.createObjectURL(t),r=document.createElement("a");r.href=n,r.download=`drop-the-furniture-${Date.now()}.json`,r.click(),URL.revokeObjectURL(n)},[e,J,q,Z]),eA=(0,n.useCallback)(e=>{let t=e.target.files?.[0];if(!t)return;let n=new FileReader;n.onload=e=>{try{let t=JSON.parse(e.target?.result);if(!Array.isArray(t.items)||!t.camera)return void window.alert("올바르지 않은 파일 형식입니다.");let n=eL(t.items);ej(n),X(t.camera),Q(t.wallOpacity??1),ee(t.autoTransparent??!1),e_(null)}catch{window.alert("JSON 파싱에 실패했습니다.")}},n.readAsText(t),e.target.value=""},[ej,e_,eL]),eR=(0,n.useCallback)(()=>{(ex.current?.length>0||eb.current?.length>0)&&eO();let e={id:`room-${Date.now()}`,kind:"room",name:"방 1",width:8e3,depth:8e3,height:3e3,position:[0,0,0],rotation:[0,0,0],color:"#a8afb3"};ex.current=[],eb.current=[],r([e]),e_(null),X(H),Q(.5),eh.current=e.id,localStorage.removeItem(Y),ew()},[ew,eO,e_]);(0,n.useEffect)(()=>{let e=e=>{let t=e.items.find(e=>"room"===e.kind);eh.current=t?.id??G.id,(0,n.startTransition)(()=>{r(e.items),u(e.selectedId??null),V(e.mode??"translate"),X(e.camera??H),Q(e.wallOpacity??1),ee(e.autoTransparent??!1)})},t=function(){try{let e=localStorage.getItem(Y);if(e)return JSON.parse(e)}catch{}return null}();t&&Array.isArray(t.items)&&!eT(t.items)?e({items:eL(t.items),camera:t.camera,wallOpacity:t.wallOpacity,autoTransparent:t.autoTransparent,selectedId:t.selectedId,mode:t.mode}):fetch("/sample_layout.json").then(e=>e.json()).then(t=>{Array.isArray(t.items)&&e({items:eL(t.items),camera:t.camera,wallOpacity:t.wallOpacity,autoTransparent:t.autoTransparent})}).catch(()=>{})},[eT,eL]),(0,n.useEffect)(()=>{eg.current=e},[e]),(0,n.useEffect)(()=>{localStorage.setItem(Y,JSON.stringify({items:e,selectedId:a,mode:K,camera:J,wallOpacity:q,autoTransparent:Z,version:1}))},[e,a,K,J,q,Z]),(0,n.useEffect)(()=>{let t=e.find(e=>e.id===a);t?.kind==="room"&&(eh.current=t.id)},[e,a]),(0,n.useEffect)(()=>{let e=e=>{if("Escape"===e.key){a&&(e.preventDefault(),e_(null));return}if("Delete"===e.key||"Backspace"===e.key){if(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)return;if(a){e.preventDefault(),eE();return}}(e.ctrlKey||e.metaKey)&&("z"!==e.key.toLowerCase()||e.shiftKey?("y"===e.key.toLowerCase()||"z"===e.key.toLowerCase()&&e.shiftKey)&&(e.preventDefault(),ev()):(e.preventDefault(),eC()))};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[eC,ev,a,eE,e_]),(0,n.useEffect)(()=>{if(!el)return;let e=e=>{ef.current&&!ef.current.contains(e.target)&&ed(!1)};return window.addEventListener("pointerdown",e),()=>{window.removeEventListener("pointerdown",e)}},[el]),e.filter(e=>"room"===e.kind).length,e.filter(e=>"furniture"===e.kind).length;let eP=e.filter(e=>"room"===e.kind),eM=e.filter(e=>"furniture"===e.kind&&!e.roomId),ez=e.filter(e=>"model"===e.kind&&!e.roomId),eB=e.find(e=>e.id===a);return eB?.kind,(0,t.jsxs)(l,{children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:"Drop the Furniture - 3D 방 & 가구 배치"}),(0,t.jsx)("meta",{name:"description",content:"3D 공간에서 방과 가구를 자유롭게 배치하고 편집할 수 있는 Next.js 기반 웹 앱입니다. 방 추가, 가구 배치, 이동/회전/크기 조절, 저장/불러오기 기능을 제공합니다."}),(0,t.jsx)("meta",{name:"keywords",content:"3D 가구 배치, 방 꾸미기, 인테리어 시뮬레이터, Drop the Furniture, Three.js, Next.js, 가구 배치 도구"}),(0,t.jsx)("meta",{name:"author",content:"Drop the Furniture"}),(0,t.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,t.jsx)("meta",{name:"robots",content:"index, follow"}),(0,t.jsx)("meta",{property:"og:type",content:"website"}),(0,t.jsx)("meta",{property:"og:title",content:"Drop the Furniture - 3D 방 & 가구 배치"}),(0,t.jsx)("meta",{property:"og:description",content:"3D 공간에서 방과 가구를 자유롭게 배치하고 편집할 수 있는 웹 앱입니다."}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,t.jsx)("meta",{name:"twitter:title",content:"Drop the Furniture - 3D 방 & 가구 배치"}),(0,t.jsx)("meta",{name:"twitter:description",content:"3D 공간에서 방과 가구를 자유롭게 배치하고 편집할 수 있는 웹 앱입니다."})]}),(0,t.jsxs)(d,{children:[(0,t.jsx)(s,{onPointerDown:e=>{e.stopPropagation()},onClick:e=>{ed(e=>!e)},children:"☰"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{children:"Drop the Furniture"}),(0,t.jsx)("p",{children:"방과 가구를 자유롭게 배치해보세요."})]}),(0,t.jsx)(c,{onClick:()=>ec(e=>!e),children:"⋮"}),(0,t.jsxs)(T,{$open:es,children:[(0,t.jsx)(b,{$compact:!0,onClick:eR,children:"🗑️ New"}),(0,t.jsx)(b,{$compact:!0,onClick:eC,disabled:!er,children:"↩ Undo"}),(0,t.jsx)(b,{$compact:!0,onClick:ev,disabled:!eo,children:"↪ Redo"}),(0,t.jsx)(b,{$compact:!0,onClick:eO,children:"💾 저장"}),(0,t.jsx)(b,{$compact:!0,onClick:()=>ey.current?.click(),children:"📂 불러오기"}),(0,t.jsx)("input",{ref:ey,type:"file",accept:"application/json",style:{display:"none"},onChange:eA})]})]}),(0,t.jsxs)(p,{ref:ef,$open:el,children:[(0,t.jsx)(h,{children:"방 추가"}),(0,t.jsxs)(x,{children:[(0,t.jsx)(b,{onClick:eI,children:"방"}),(0,t.jsx)(b,{onClick:e$,children:"공간"}),(0,t.jsx)(b,{onClick:()=>eD("door"),children:"🚪 문"})]}),(0,t.jsx)(f,{}),(0,t.jsx)(h,{children:"가구 추가"}),(0,t.jsx)(x,{children:z.map(e=>(0,t.jsx)(b,{onClick:()=>eD(e),children:P.TYPE_LABELS[e]},e))}),(0,t.jsx)(I,{children:"버튼을 누르면 방 중앙에 방/가구/문이 생성됩니다."}),(0,t.jsx)(f,{}),(0,t.jsx)(h,{children:"모델 추가"}),(0,t.jsx)(x,{children:B.map(e=>(0,t.jsx)(b,{onClick:()=>eN(e),children:P.MODEL_LABELS[e]},e))}),(0,t.jsx)(f,{}),(0,t.jsx)(h,{children:"설정"}),(0,t.jsx)(I,{children:"벽 투명도"}),(0,t.jsx)(O,{type:"range",min:0,max:1,step:.05,value:q,onChange:e=>Q(parseFloat(e.target.value))}),(0,t.jsx)(b,{$compact:!0,$active:Z,onClick:()=>ee(e=>!e),children:"👁 자동 투명"}),(0,t.jsx)(f,{}),(0,t.jsxs)(h,{children:["목록",eP.length>0&&(0,t.jsxs)(m,{children:[(0,t.jsx)(g,{title:"모두 펼치기",onClick:()=>ep(new Set),children:"⊞"}),(0,t.jsx)(g,{title:"모두 접기",onClick:()=>ep(new Set(eP.map(e=>e.id))),children:"⊟"})]})]}),(0,t.jsxs)($,{children:[eP.map(r=>{let i=[...e.filter(e=>"furniture"===e.kind&&e.roomId===r.id),...e.filter(e=>"model"===e.kind&&e.roomId===r.id)];return(0,t.jsxs)(n.Fragment,{children:[(0,t.jsxs)(D,{$selected:r.id===a,$kind:"room",$dragOver:et===r.id,onClick:()=>e_(r.id),onDragOver:e=>{e.preventDefault(),em.current&&en(r.id)},onDragLeave:()=>en(null),onDrop:()=>{let e=em.current;e&&(eS(e,{roomId:r.id,position:[0,10,0]}),em.current=null,en(null))},children:[(0,t.jsxs)(L,{children:[(0,t.jsx)(E,{onPointerDown:e=>e.stopPropagation(),onClick:e=>{e.stopPropagation(),ek(r.id)},children:eu.has(r.id)?"▸":"▾"}),r.name]}),(0,t.jsx)(S,{children:!1===r.hasWalls?"공간":"방"})]}),!eu.has(r.id)&&(0,t.jsx)(N,{$dragOver:et===r.id,$empty:0===i.length,onDragOver:e=>{e.preventDefault(),em.current&&en(r.id)},onDragLeave:()=>en(null),onDrop:()=>{let e=em.current;e&&(eS(e,{roomId:r.id,position:[0,10,0]}),em.current=null,en(null))},children:i.length>0?i.map(e=>{let n="model"===e.kind?P.MODEL_LABELS[e.modelType]:P.TYPE_LABELS[e.furnitureType];return(0,t.jsxs)(D,{$selected:e.id===a,$kind:"furniture",$tree:!0,draggable:!0,onClick:()=>e_(e.id),onDragStart:()=>{em.current=e.id},onDragEnd:()=>{em.current=null,en(null)},children:[(0,t.jsx)("span",{children:e.name}),(0,t.jsx)(S,{children:n})]},e.id)}):(0,t.jsx)(I,{children:"여기로 드래그"})})]},r.id)}),eM.map(e=>(0,t.jsxs)(D,{$selected:e.id===a,$kind:"furniture",draggable:!0,onClick:()=>e_(e.id),onDragStart:()=>{em.current=e.id},onDragEnd:()=>{em.current=null,en(null)},children:[(0,t.jsx)("span",{children:e.name}),(0,t.jsx)(S,{children:P.TYPE_LABELS[e.furnitureType]})]},e.id)),ez.map(e=>(0,t.jsxs)(D,{$selected:e.id===a,$kind:"furniture",draggable:!0,onClick:()=>e_(e.id),onDragStart:()=>{em.current=e.id},onDragEnd:()=>{em.current=null,en(null)},children:[(0,t.jsx)("span",{children:e.name}),(0,t.jsx)(S,{children:P.MODEL_LABELS[e.modelType]})]},e.id))]}),!eB&&(0,t.jsx)(I,{children:"목록에서 항목을 클릭하면 선택해서 편집할 수 있습니다."})]}),eB&&(0,t.jsxs)(A,{children:[(0,t.jsx)(x,{$nowrap:!0,children:["translate","rotate","scale"].map(e=>(0,t.jsx)(b,{$active:K===e,onClick:()=>V(e),children:P.MODE_LABELS[e]},e))}),(0,t.jsx)(k,{type:"text",value:eB.name,style:{width:"130px"},onChange:e=>eS(eB.id,{name:e.target.value})}),(0,t.jsx)(y,{children:(0,t.jsx)(w,{type:"color",value:eB.color,style:{width:"36px",padding:0},onChange:e=>eS(eB.id,{color:e.target.value})})}),"model"===eB.kind&&P.MODEL_ANIMATIONS[eB.modelType]&&(0,t.jsx)(o.default,{styles:W,value:eB.animationName&&P.MODEL_ANIMATIONS[eB.modelType].includes(eB.animationName)?{value:eB.animationName,label:P.ANIMATION_LABELS[eB.animationName]??eB.animationName}:null,onChange:e=>eS(eB.id,{animationName:e?.value||void 0}),options:P.MODEL_ANIMATIONS[eB.modelType].map(e=>({value:e,label:P.ANIMATION_LABELS[e]??e})),placeholder:"애니메이션"}),("room"===eB.kind||"furniture"===eB.kind||"model"===eB.kind)&&(0,t.jsx)(j,{style:{gap:"6px"},children:["width","depth","height"].map((e,n)=>(0,t.jsxs)(C,{style:{width:"72px"},children:[(0,t.jsx)(_,{type:"number",min:100,step:"room"===eB.kind?100:10,value:eB[e],onChange:t=>eS(eB.id,{[e]:parseFloat(t.target.value)||1})}),(0,t.jsx)(v,{children:["W","D","H"][n]})]},e))}),(0,t.jsx)(b,{$danger:!0,$compact:!0,onClick:eE,children:"삭제"})]}),(0,t.jsx)(M,{items:e,selectedId:a,mode:K,cameraState:J,wallOpacity:q,autoTransparent:Z,onSelect:e_,onChange:eS,onCameraChange:X})]})}],83594)},9977,(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/c",()=>e.r(83594)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/c"])})}]);