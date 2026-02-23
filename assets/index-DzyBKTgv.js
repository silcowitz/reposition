(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();async function en(u={}){var t,e=u,i=import.meta.url,s="";function n(_){return e.locateFile?e.locateFile(_,s):s+_}var r;{try{s=new URL(".",i).href}catch{}r=async _=>{var B=await fetch(_,{credentials:"same-origin"});if(B.ok)return B.arrayBuffer();throw new Error(B.status+" : "+B.url)}}console.log.bind(console);var a=console.error.bind(console),o,h=!1,l,c,d,p,f=!1;function m(){var _=Fe.buffer;e.HEAPU8=d=new Uint8Array(_),p=new BigInt64Array(_),new BigUint64Array(_)}function x(){if(e.preRun)for(typeof e.preRun=="function"&&(e.preRun=[e.preRun]);e.preRun.length;)jt(e.preRun.shift());it(Lt)}function g(){f=!0,ye.d()}function w(){if(e.postRun)for(typeof e.postRun=="function"&&(e.postRun=[e.postRun]);e.postRun.length;)ut(e.postRun.shift());it(I)}function b(_){e.onAbort?.(_),_="Aborted("+_+")",a(_),h=!0,_+=". Build with -sASSERTIONS for more info.";var B=new WebAssembly.RuntimeError(_);throw c?.(B),B}var M;function z(){return e.locateFile?n("reposition_wasm.wasm"):new URL("/reposition/assets/reposition_wasm-BPsm-dCn.wasm",import.meta.url).href}function F(_){if(_==M&&o)return new Uint8Array(o);throw"both async and sync fetching of the wasm failed"}async function v(_){if(!o)try{var B=await r(_);return new Uint8Array(B)}catch{}return F(_)}async function E(_,B){try{var j=await v(_),Z=await WebAssembly.instantiate(j,B);return Z}catch(K){a(`failed to asynchronously prepare wasm: ${K}`),b(K)}}async function R(_,B,j){if(!_)try{var Z=fetch(B,{credentials:"same-origin"}),K=await WebAssembly.instantiateStreaming(Z,j);return K}catch(bt){a(`wasm streaming compile failed: ${bt}`),a("falling back to ArrayBuffer instantiation")}return E(B,j)}function D(){var _={a:Qs};return _}async function O(){function _(bt,ai){return ye=bt.exports,Js(ye),m(),ye}function B(bt){return _(bt.instance)}var j=D();if(e.instantiateWasm)return new Promise((bt,ai)=>{e.instantiateWasm(j,(tn,Cr)=>{bt(_(tn))})});M??=z();var Z=await R(o,M,j),K=B(Z);return K}var it=_=>{for(;_.length>0;)_.shift()(e)},I=[],ut=_=>I.push(_),Lt=[],jt=_=>Lt.push(_),Zt=()=>performance.now(),Gt=()=>Date.now(),Jt=_=>_>=0&&_<=3;function Qt(_,B,j){if(!Jt(_))return 28;var Z;_===0?Z=Gt():Z=Zt();var K=Math.round(Z*1e3*1e3);return p[j>>3]=BigInt(K),0}var Kt=()=>2147483648,js=(_,B)=>Math.ceil(_/B)*B,Zs=_=>{var B=Fe.buffer.byteLength,j=(_-B+65535)/65536|0;try{return Fe.grow(j),m(),1}catch{}},Gs=_=>{var B=d.length;_>>>=0;var j=Kt();if(_>j)return!1;for(var Z=1;Z<=4;Z*=2){var K=B*(1+.2/Z);K=Math.min(K,_+100663296);var bt=Math.min(j,js(Math.max(_,K),65536)),ai=Zs(bt);if(ai)return!0}return!1};if(e.noExitRuntime&&e.noExitRuntime,e.print&&e.print,e.printErr&&(a=e.printErr),e.wasmBinary&&(o=e.wasmBinary),e.arguments&&e.arguments,e.thisProgram&&e.thisProgram,e.preInit)for(typeof e.preInit=="function"&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.shift()();var Fe;function Js(_){e._solve=_.e,e._malloc=_.f,e._free=_.g,Fe=_.c,_.__indirect_function_table}var Qs={b:Qt,a:Gs};function Ks(){x();function _(){e.calledRun=!0,!h&&(g(),l?.(e),e.onRuntimeInitialized?.(),w())}e.setStatus?(e.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>e.setStatus(""),1),_()},1)):_()}var ye;return ye=await O(),Ks(),f?t=e:t=new Promise((_,B)=>{l=_,c=B}),t}async function sn(u){const t=await en();function e(o){const h=t._malloc(o*8),l=new Float64Array(t.HEAPU8.buffer,h,o);return{ptr:h,view:l}}const i=e(u*3),s=e(u*3),n=e(u),r=e(8);function a(o,h,l,c,d,p,f){i.view.set(c),n.view.set(d),s.view.set(p);let m=t._solve(o,h,l,i.ptr,n.ptr,s.ptr,r.ptr);return p.set(s.view.subarray(0,o*3)),f.set(r.view),m}return{solve:a}}class yt{constructor(t,e,i,s,n="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(n),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),yt.nextNameID=yt.nextNameID||0,this.$name.id=`lil-gui-name-${++yt.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",r=>r.stopPropagation()),this.domElement.addEventListener("keyup",r=>r.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class nn extends yt{constructor(t,e,i){super(t,e,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ii(u){let t,e;return(t=u.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=u.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=u.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const rn={isPrimitive:!0,match:u=>typeof u=="string",fromHexString:Ii,toHexString:Ii},ve={isPrimitive:!0,match:u=>typeof u=="number",fromHexString:u=>parseInt(u.substring(1),16),toHexString:u=>"#"+u.toString(16).padStart(6,0)},an={isPrimitive:!1,match:u=>Array.isArray(u)||ArrayBuffer.isView(u),fromHexString(u,t,e=1){const i=ve.fromHexString(u);t[0]=(i>>16&255)/255*e,t[1]=(i>>8&255)/255*e,t[2]=(i&255)/255*e},toHexString([u,t,e],i=1){i=255/i;const s=u*i<<16^t*i<<8^e*i<<0;return ve.toHexString(s)}},on={isPrimitive:!1,match:u=>Object(u)===u,fromHexString(u,t,e=1){const i=ve.fromHexString(u);t.r=(i>>16&255)/255*e,t.g=(i>>8&255)/255*e,t.b=(i&255)/255*e},toHexString({r:u,g:t,b:e},i=1){i=255/i;const s=u*i<<16^t*i<<8^e*i<<0;return ve.toHexString(s)}},hn=[rn,ve,an,on];function ln(u){return hn.find(t=>t.match(u))}class un extends yt{constructor(t,e,i,s){super(t,e,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=ln(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const n=Ii(this.$text.value);n&&this._setValueFromHexString(n)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class oi extends yt{constructor(t,e,i){super(t,e,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class cn extends yt{constructor(t,e,i,s,n,r){super(t,e,i,"lil-number"),this._initInput(),this.min(s),this.max(n);const a=r!==void 0;this.step(a?r:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let w=parseFloat(this.$input.value);isNaN(w)||(this._stepExplicit&&(w=this._snap(w)),this.setValue(this._clamp(w)))},i=w=>{const b=parseFloat(this.$input.value);isNaN(b)||(this._snapClampSetValue(b+w),this.$input.value=this.getValue())},s=w=>{w.key==="Enter"&&this.$input.blur(),w.code==="ArrowUp"&&(w.preventDefault(),i(this._step*this._arrowKeyMultiplier(w))),w.code==="ArrowDown"&&(w.preventDefault(),i(this._step*this._arrowKeyMultiplier(w)*-1))},n=w=>{this._inputFocused&&(w.preventDefault(),i(this._step*this._normalizeMouseWheel(w)))};let r=!1,a,o,h,l,c;const d=5,p=w=>{a=w.clientX,o=h=w.clientY,r=!0,l=this.getValue(),c=0,window.addEventListener("mousemove",f),window.addEventListener("mouseup",m)},f=w=>{if(r){const b=w.clientX-a,M=w.clientY-o;Math.abs(M)>d?(w.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(b)>d&&m()}if(!r){const b=w.clientY-h;c-=b*this._step*this._arrowKeyMultiplier(w),l+c>this._max?c=this._max-l:l+c<this._min&&(c=this._min-l),this._snapClampSetValue(l+c)}h=w.clientY},m=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",m)},x=()=>{this._inputFocused=!0},g=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",n,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",x),this.$input.addEventListener("blur",g)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const t=(g,w,b,M,z)=>(g-w)/(b-w)*(z-M)+M,e=g=>{const w=this.$slider.getBoundingClientRect();let b=t(g,w.left,w.right,this._min,this._max);this._snapClampSetValue(b)},i=g=>{this._setDraggingStyle(!0),e(g.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",n)},s=g=>{e(g.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",n)};let r=!1,a,o;const h=g=>{g.preventDefault(),this._setDraggingStyle(!0),e(g.touches[0].clientX),r=!1},l=g=>{g.touches.length>1||(this._hasScrollBar?(a=g.touches[0].clientX,o=g.touches[0].clientY,r=!0):h(g),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("touchend",d))},c=g=>{if(r){const w=g.touches[0].clientX-a,b=g.touches[0].clientY-o;Math.abs(w)>Math.abs(b)?h(g):(window.removeEventListener("touchmove",c),window.removeEventListener("touchend",d))}else g.preventDefault(),e(g.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),f=400;let m;const x=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();const b=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+b),this.$input.value=this.getValue(),clearTimeout(m),m=setTimeout(p,f)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",l,{passive:!1}),this.$slider.addEventListener("wheel",x,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),e+-i}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class dn extends yt{constructor(t,e,i,s){super(t,e,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const i=document.createElement("option");i.textContent=e,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class pn extends yt{constructor(t,e,i){super(t,e,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var fn=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function mn(u){const t=document.createElement("style");t.innerHTML=u;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Yi=!1;class Vi{constructor({parent:t,autoPlace:e=t===void 0,container:i,width:s,title:n="Controls",closeFolders:r=!1,injectStyles:a=!0,touchStyles:o=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(n),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),o&&this.domElement.classList.add("lil-allow-touch-styles"),!Yi&&a&&(mn(fn),Yi=!0),i?i.appendChild(this.domElement):e&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=r}add(t,e,i,s,n){if(Object(i)===i)return new dn(this,t,e,i);const r=t[e];switch(typeof r){case"number":return new cn(this,t,e,i,s,n);case"boolean":return new nn(this,t,e);case"string":return new pn(this,t,e);case"function":return new oi(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,r)}addColor(t,e,i=1){return new un(this,t,e,i)}addFolder(t){const e=new Vi({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof oi||i._name in t.controllers&&i.load(t.controllers[i._name])}),e&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof oi)){if(i._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);e.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);e.folders[i._title]=i.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("lil-transition");const i=n=>{n.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const Rs="182",Di=0,yn=1,ji=1,Zi=100,Gi=204,Ji=205,Qi=3,gn=0,Is=300,Ki=1e3,Te=1001,ts=1002,xn=1006,wn=1008,bn=1009,_n=1015,Mn=1023,Ds="",ot="srgb",es="srgb-linear",is="linear",hi="srgb",te=7680,ss=519,Oi=35044,Be=2e3,ns=2001;function vn(u){for(let t=u.length-1;t>=0;--t)if(u[t]>=65535)return!0;return!1}function rs(u){return document.createElementNS("http://www.w3.org/1999/xhtml",u)}const as={};function os(...u){const t="THREE."+u.shift();console.log(t,...u)}function P(...u){const t="THREE."+u.shift();console.warn(t,...u)}function Wt(...u){const t="THREE."+u.shift();console.error(t,...u)}function hs(...u){const t=u.join(" ");t in as||(as[t]=!0,P(...u))}class si{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const n=s.indexOf(e);n!==-1&&s.splice(n,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let n=0,r=s.length;n<r;n++)s[n].call(this,t);t.target=null}}}const W=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ls=1234567;const Os=Math.PI/180,Ls=180/Math.PI;function Et(){const u=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(W[u&255]+W[u>>8&255]+W[u>>16&255]+W[u>>24&255]+"-"+W[t&255]+W[t>>8&255]+"-"+W[t>>16&15|64]+W[t>>24&255]+"-"+W[e&63|128]+W[e>>8&255]+"-"+W[e>>16&255]+W[e>>24&255]+W[i&255]+W[i>>8&255]+W[i>>16&255]+W[i>>24&255]).toLowerCase()}function S(u,t,e){return Math.max(t,Math.min(e,u))}function $i(u,t){return(u%t+t)%t}function Sn(u,t,e,i,s){return i+(u-t)*(s-i)/(e-t)}function An(u,t,e){return u!==t?(e-u)/(t-u):0}function Me(u,t,e){return(1-e)*u+e*t}function zn(u,t,e,i){return Me(u,t,1-Math.exp(-e*i))}function En(u,t=1){return t-Math.abs($i(u,t*2)-t)}function Cn(u,t,e){return u<=t?0:u>=e?1:(u=(u-t)/(e-t),u*u*(3-2*u))}function Fn(u,t,e){return u<=t?0:u>=e?1:(u=(u-t)/(e-t),u*u*u*(u*(u*6-15)+10))}function Tn(u,t){return u+Math.floor(Math.random()*(t-u+1))}function Bn(u,t){return u+Math.random()*(t-u)}function kn(u){return u*(.5-Math.random())}function Rn(u){u!==void 0&&(ls=u);let t=ls+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function In(u){return u*Os}function Dn(u){return u*Ls}function On(u){return(u&u-1)===0&&u!==0}function Ln(u){return Math.pow(2,Math.ceil(Math.log(u)/Math.LN2))}function Pn(u){return Math.pow(2,Math.floor(Math.log(u)/Math.LN2))}function Un(u,t,e,i,s){const n=Math.cos,r=Math.sin,a=n(e/2),o=r(e/2),h=n((t+i)/2),l=r((t+i)/2),c=n((t-i)/2),d=r((t-i)/2),p=n((i-t)/2),f=r((i-t)/2);switch(s){case"XYX":u.set(a*l,o*c,o*d,a*h);break;case"YZY":u.set(o*d,a*l,o*c,a*h);break;case"ZXZ":u.set(o*c,o*d,a*l,a*h);break;case"XZX":u.set(a*l,o*f,o*p,a*h);break;case"YXY":u.set(o*p,a*l,o*f,a*h);break;case"ZYZ":u.set(o*f,o*p,a*l,a*h);break;default:P("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ht(u,t){switch(t.constructor){case Float32Array:return u;case Uint32Array:return u/4294967295;case Uint16Array:return u/65535;case Uint8Array:return u/255;case Int32Array:return Math.max(u/2147483647,-1);case Int16Array:return Math.max(u/32767,-1);case Int8Array:return Math.max(u/127,-1);default:throw new Error("Invalid component type.")}}function T(u,t){switch(t.constructor){case Float32Array:return u;case Uint32Array:return Math.round(u*4294967295);case Uint16Array:return Math.round(u*65535);case Uint8Array:return Math.round(u*255);case Int32Array:return Math.round(u*2147483647);case Int16Array:return Math.round(u*32767);case Int8Array:return Math.round(u*127);default:throw new Error("Invalid component type.")}}const Nn={DEG2RAD:Os,RAD2DEG:Ls,generateUUID:Et,clamp:S,euclideanModulo:$i,mapLinear:Sn,inverseLerp:An,lerp:Me,damp:zn,pingpong:En,smoothstep:Cn,smootherstep:Fn,randInt:Tn,randFloat:Bn,randFloatSpread:kn,seededRandom:Rn,degToRad:In,radToDeg:Dn,isPowerOfTwo:On,ceilPowerOfTwo:Ln,floorPowerOfTwo:Pn,setQuaternionFromProperEuler:Un,normalize:T,denormalize:ht};class X{constructor(t=0,e=0){X.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=S(this.x,t.x,e.x),this.y=S(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=S(this.x,t,e),this.y=S(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(S(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(S(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),n=this.x-t.x,r=this.y-t.y;return this.x=n*i-r*s+t.x,this.y=n*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ae{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,n,r,a){let o=i[s+0],h=i[s+1],l=i[s+2],c=i[s+3],d=n[r+0],p=n[r+1],f=n[r+2],m=n[r+3];if(a<=0){t[e+0]=o,t[e+1]=h,t[e+2]=l,t[e+3]=c;return}if(a>=1){t[e+0]=d,t[e+1]=p,t[e+2]=f,t[e+3]=m;return}if(c!==m||o!==d||h!==p||l!==f){let x=o*d+h*p+l*f+c*m;x<0&&(d=-d,p=-p,f=-f,m=-m,x=-x);let g=1-a;if(x<.9995){const w=Math.acos(x),b=Math.sin(w);g=Math.sin(g*w)/b,a=Math.sin(a*w)/b,o=o*g+d*a,h=h*g+p*a,l=l*g+f*a,c=c*g+m*a}else{o=o*g+d*a,h=h*g+p*a,l=l*g+f*a,c=c*g+m*a;const w=1/Math.sqrt(o*o+h*h+l*l+c*c);o*=w,h*=w,l*=w,c*=w}}t[e]=o,t[e+1]=h,t[e+2]=l,t[e+3]=c}static multiplyQuaternionsFlat(t,e,i,s,n,r){const a=i[s],o=i[s+1],h=i[s+2],l=i[s+3],c=n[r],d=n[r+1],p=n[r+2],f=n[r+3];return t[e]=a*f+l*c+o*p-h*d,t[e+1]=o*f+l*d+h*c-a*p,t[e+2]=h*f+l*p+a*d-o*c,t[e+3]=l*f-a*c-o*d-h*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,n=t._z,r=t._order,a=Math.cos,o=Math.sin,h=a(i/2),l=a(s/2),c=a(n/2),d=o(i/2),p=o(s/2),f=o(n/2);switch(r){case"XYZ":this._x=d*l*c+h*p*f,this._y=h*p*c-d*l*f,this._z=h*l*f+d*p*c,this._w=h*l*c-d*p*f;break;case"YXZ":this._x=d*l*c+h*p*f,this._y=h*p*c-d*l*f,this._z=h*l*f-d*p*c,this._w=h*l*c+d*p*f;break;case"ZXY":this._x=d*l*c-h*p*f,this._y=h*p*c+d*l*f,this._z=h*l*f+d*p*c,this._w=h*l*c-d*p*f;break;case"ZYX":this._x=d*l*c-h*p*f,this._y=h*p*c+d*l*f,this._z=h*l*f-d*p*c,this._w=h*l*c+d*p*f;break;case"YZX":this._x=d*l*c+h*p*f,this._y=h*p*c+d*l*f,this._z=h*l*f-d*p*c,this._w=h*l*c-d*p*f;break;case"XZY":this._x=d*l*c-h*p*f,this._y=h*p*c-d*l*f,this._z=h*l*f+d*p*c,this._w=h*l*c+d*p*f;break;default:P("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],n=e[8],r=e[1],a=e[5],o=e[9],h=e[2],l=e[6],c=e[10],d=i+a+c;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(l-o)*p,this._y=(n-h)*p,this._z=(r-s)*p}else if(i>a&&i>c){const p=2*Math.sqrt(1+i-a-c);this._w=(l-o)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(n+h)/p}else if(a>c){const p=2*Math.sqrt(1+a-i-c);this._w=(n-h)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(o+l)/p}else{const p=2*Math.sqrt(1+c-i-a);this._w=(r-s)/p,this._x=(n+h)/p,this._y=(o+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(S(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,n=t._z,r=t._w,a=e._x,o=e._y,h=e._z,l=e._w;return this._x=i*l+r*a+s*h-n*o,this._y=s*l+r*o+n*a-i*h,this._z=n*l+r*h+i*o-s*a,this._w=r*l-i*a-s*o-n*h,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,s=t._y,n=t._z,r=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,n=-n,r=-r,a=-a);let o=1-e;if(a<.9995){const h=Math.acos(a),l=Math.sin(h);o=Math.sin(o*h)/l,e=Math.sin(e*h)/l,this._x=this._x*o+i*e,this._y=this._y*o+s*e,this._z=this._z*o+n*e,this._w=this._w*o+r*e,this._onChangeCallback()}else this._x=this._x*o+i*e,this._y=this._y*o+s*e,this._z=this._z*o+n*e,this._w=this._w*o+r*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),n*Math.sin(e),n*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class y{constructor(t=0,e=0,i=0){y.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(us.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(us.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6]*s,this.y=n[1]*e+n[4]*i+n[7]*s,this.z=n[2]*e+n[5]*i+n[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,n=t.elements,r=1/(n[3]*e+n[7]*i+n[11]*s+n[15]);return this.x=(n[0]*e+n[4]*i+n[8]*s+n[12])*r,this.y=(n[1]*e+n[5]*i+n[9]*s+n[13])*r,this.z=(n[2]*e+n[6]*i+n[10]*s+n[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,n=t.x,r=t.y,a=t.z,o=t.w,h=2*(r*s-a*i),l=2*(a*e-n*s),c=2*(n*i-r*e);return this.x=e+o*h+r*c-a*l,this.y=i+o*l+a*h-n*c,this.z=s+o*c+n*l-r*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,n=t.elements;return this.x=n[0]*e+n[4]*i+n[8]*s,this.y=n[1]*e+n[5]*i+n[9]*s,this.z=n[2]*e+n[6]*i+n[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=S(this.x,t.x,e.x),this.y=S(this.y,t.y,e.y),this.z=S(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=S(this.x,t,e),this.y=S(this.y,t,e),this.z=S(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(S(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,n=t.z,r=e.x,a=e.y,o=e.z;return this.x=s*o-n*a,this.y=n*r-i*o,this.z=i*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return li.copy(this).projectOnVector(t),this.sub(li)}reflect(t){return this.sub(li.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(S(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const li=new y,us=new Ae;class C{constructor(t,e,i,s,n,r,a,o,h){C.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,n,r,a,o,h)}set(t,e,i,s,n,r,a,o,h){const l=this.elements;return l[0]=t,l[1]=s,l[2]=a,l[3]=e,l[4]=n,l[5]=o,l[6]=i,l[7]=r,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,n=this.elements,r=i[0],a=i[3],o=i[6],h=i[1],l=i[4],c=i[7],d=i[2],p=i[5],f=i[8],m=s[0],x=s[3],g=s[6],w=s[1],b=s[4],M=s[7],z=s[2],F=s[5],v=s[8];return n[0]=r*m+a*w+o*z,n[3]=r*x+a*b+o*F,n[6]=r*g+a*M+o*v,n[1]=h*m+l*w+c*z,n[4]=h*x+l*b+c*F,n[7]=h*g+l*M+c*v,n[2]=d*m+p*w+f*z,n[5]=d*x+p*b+f*F,n[8]=d*g+p*M+f*v,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],n=t[3],r=t[4],a=t[5],o=t[6],h=t[7],l=t[8];return e*r*l-e*a*h-i*n*l+i*a*o+s*n*h-s*r*o}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],n=t[3],r=t[4],a=t[5],o=t[6],h=t[7],l=t[8],c=l*r-a*h,d=a*o-l*n,p=h*n-r*o,f=e*c+i*d+s*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/f;return t[0]=c*m,t[1]=(s*h-l*i)*m,t[2]=(a*i-s*r)*m,t[3]=d*m,t[4]=(l*e-s*o)*m,t[5]=(s*n-a*e)*m,t[6]=p*m,t[7]=(i*o-h*e)*m,t[8]=(r*e-i*n)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,n,r,a){const o=Math.cos(n),h=Math.sin(n);return this.set(i*o,i*h,-i*(o*r+h*a)+r+t,-s*h,s*o,-s*(-h*r+o*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ui.makeScale(t,e)),this}rotate(t){return this.premultiply(ui.makeRotation(-t)),this}translate(t,e){return this.premultiply(ui.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ui=new C,cs=new C().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ds=new C().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vn(){const u={enabled:!0,workingColorSpace:es,spaces:{},convert:function(s,n,r){return this.enabled===!1||n===r||!n||!r||(this.spaces[n].transfer===hi&&(s.r=Ct(s.r),s.g=Ct(s.g),s.b=Ct(s.b)),this.spaces[n].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[n].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===hi&&(s.r=fe(s.r),s.g=fe(s.g),s.b=fe(s.b))),s},workingToColorSpace:function(s,n){return this.convert(s,this.workingColorSpace,n)},colorSpaceToWorking:function(s,n){return this.convert(s,n,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ds?is:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,n=this.workingColorSpace){return s.fromArray(this.spaces[n].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,n,r){return s.copy(this.spaces[n].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,n){return hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),u.workingToColorSpace(s,n)},toWorkingColorSpace:function(s,n){return hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),u.colorSpaceToWorking(s,n)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return u.define({[es]:{primaries:t,whitePoint:i,transfer:is,toXYZ:cs,fromXYZ:ds,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ot},outputColorSpaceConfig:{drawingBufferColorSpace:ot}},[ot]:{primaries:t,whitePoint:i,transfer:hi,toXYZ:cs,fromXYZ:ds,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ot}}}),u}const st=Vn();function Ct(u){return u<.04045?u*.0773993808:Math.pow(u*.9478672986+.0521327014,2.4)}function fe(u){return u<.0031308?u*12.92:1.055*Math.pow(u,.41666)-.055}let ee;class $n{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ee===void 0&&(ee=rs("canvas")),ee.width=t.width,ee.height=t.height;const s=ee.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ee}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=rs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),n=s.data;for(let r=0;r<n.length;r++)n[r]=Ct(n[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ct(e[i]/255)*255):e[i]=Ct(e[i]);return{data:e,width:t.width,height:t.height}}else return P("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wn=0;class Hn{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wn++}),this.uuid=Et(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let n;if(Array.isArray(s)){n=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?n.push(ci(s[r].image)):n.push(ci(s[r]))}else n=ci(s);i.url=n}return e||(t.images[this.uuid]=i),i}}function ci(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap?$n.getDataURL(u):u.data?{data:Array.from(u.data),width:u.width,height:u.height,type:u.data.constructor.name}:(P("Texture: Unable to serialize Texture."),{})}let qn=0;const di=new y;class qt extends si{constructor(t=qt.DEFAULT_IMAGE,e=qt.DEFAULT_MAPPING,i=Te,s=Te,n=xn,r=wn,a=Mn,o=bn,h=qt.DEFAULT_ANISOTROPY,l=Ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qn++}),this.uuid=Et(),this.name="",this.source=new Hn(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=n,this.minFilter=r,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=o,this.offset=new X(0,0),this.repeat=new X(1,1),this.center=new X(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new C,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(di).x}get height(){return this.source.getSize(di).y}get depth(){return this.source.getSize(di).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){P(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){P(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Is)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ki:t.x=t.x-Math.floor(t.x);break;case Te:t.x=t.x<0?0:1;break;case ts:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ki:t.y=t.y-Math.floor(t.y);break;case Te:t.y=t.y<0?0:1;break;case ts:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Is;qt.DEFAULT_ANISOTROPY=1;class wt{constructor(t=0,e=0,i=0,s=1){wt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,n=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*n,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*n,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*n,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,n;const o=t.elements,h=o[0],l=o[4],c=o[8],d=o[1],p=o[5],f=o[9],m=o[2],x=o[6],g=o[10];if(Math.abs(l-d)<.01&&Math.abs(c-m)<.01&&Math.abs(f-x)<.01){if(Math.abs(l+d)<.1&&Math.abs(c+m)<.1&&Math.abs(f+x)<.1&&Math.abs(h+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(h+1)/2,M=(p+1)/2,z=(g+1)/2,F=(l+d)/4,v=(c+m)/4,E=(f+x)/4;return b>M&&b>z?b<.01?(i=0,s=.707106781,n=.707106781):(i=Math.sqrt(b),s=F/i,n=v/i):M>z?M<.01?(i=.707106781,s=0,n=.707106781):(s=Math.sqrt(M),i=F/s,n=E/s):z<.01?(i=.707106781,s=.707106781,n=0):(n=Math.sqrt(z),i=v/n,s=E/n),this.set(i,s,n,e),this}let w=Math.sqrt((x-f)*(x-f)+(c-m)*(c-m)+(d-l)*(d-l));return Math.abs(w)<.001&&(w=1),this.x=(x-f)/w,this.y=(c-m)/w,this.z=(d-l)/w,this.w=Math.acos((h+p+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=S(this.x,t.x,e.x),this.y=S(this.y,t.y,e.y),this.z=S(this.z,t.z,e.z),this.w=S(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=S(this.x,t,e),this.y=S(this.y,t,e),this.z=S(this.z,t,e),this.w=S(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(S(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ot{constructor(t=new y(1/0,1/0,1/0),e=new y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(nt.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(nt.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=nt.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const n=i.getAttribute("position");if(e===!0&&n!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=n.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,nt):nt.fromBufferAttribute(n,r),nt.applyMatrix4(t.matrixWorld),this.expandByPoint(nt);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ke.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ke.copy(i.boundingBox)),ke.applyMatrix4(t.matrixWorld),this.union(ke)}const s=t.children;for(let n=0,r=s.length;n<r;n++)this.expandByObject(s[n],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nt),nt.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ge),Re.subVectors(this.max,ge),ie.subVectors(t.a,ge),se.subVectors(t.b,ge),ne.subVectors(t.c,ge),Tt.subVectors(se,ie),Bt.subVectors(ne,se),Pt.subVectors(ie,ne);let e=[0,-Tt.z,Tt.y,0,-Bt.z,Bt.y,0,-Pt.z,Pt.y,Tt.z,0,-Tt.x,Bt.z,0,-Bt.x,Pt.z,0,-Pt.x,-Tt.y,Tt.x,0,-Bt.y,Bt.x,0,-Pt.y,Pt.x,0];return!pi(e,ie,se,ne,Re)||(e=[1,0,0,0,1,0,0,0,1],!pi(e,ie,se,ne,Re))?!1:(Ie.crossVectors(Tt,Bt),e=[Ie.x,Ie.y,Ie.z],pi(e,ie,se,ne,Re))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nt).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nt).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_t[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_t[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_t[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_t[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_t[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_t[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_t[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_t[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_t),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const _t=[new y,new y,new y,new y,new y,new y,new y,new y],nt=new y,ke=new Ot,ie=new y,se=new y,ne=new y,Tt=new y,Bt=new y,Pt=new y,ge=new y,Re=new y,Ie=new y,Ut=new y;function pi(u,t,e,i,s){for(let n=0,r=u.length-3;n<=r;n+=3){Ut.fromArray(u,n);const a=s.x*Math.abs(Ut.x)+s.y*Math.abs(Ut.y)+s.z*Math.abs(Ut.z),o=t.dot(Ut),h=e.dot(Ut),l=i.dot(Ut);if(Math.max(-Math.max(o,h,l),Math.min(o,h,l))>a)return!1}return!0}const Xn=new Ot,xe=new y,fi=new y;class ni{constructor(t=new y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Xn.setFromPoints(t).getCenter(i);let s=0;for(let n=0,r=t.length;n<r;n++)s=Math.max(s,i.distanceToSquared(t[n]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xe.subVectors(t,this.center);const e=xe.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(xe,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fi.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xe.copy(t.center).add(fi)),this.expandByPoint(xe.copy(t.center).sub(fi))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Mt=new y,mi=new y,De=new y,kt=new y,yi=new y,Oe=new y,gi=new y;class Yn{constructor(t=new y,e=new y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mt)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mt.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mt.copy(this.origin).addScaledVector(this.direction,e),Mt.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){mi.copy(t).add(e).multiplyScalar(.5),De.copy(e).sub(t).normalize(),kt.copy(this.origin).sub(mi);const n=t.distanceTo(e)*.5,r=-this.direction.dot(De),a=kt.dot(this.direction),o=-kt.dot(De),h=kt.lengthSq(),l=Math.abs(1-r*r);let c,d,p,f;if(l>0)if(c=r*o-a,d=r*a-o,f=n*l,c>=0)if(d>=-f)if(d<=f){const m=1/l;c*=m,d*=m,p=c*(c+r*d+2*a)+d*(r*c+d+2*o)+h}else d=n,c=Math.max(0,-(r*d+a)),p=-c*c+d*(d+2*o)+h;else d=-n,c=Math.max(0,-(r*d+a)),p=-c*c+d*(d+2*o)+h;else d<=-f?(c=Math.max(0,-(-r*n+a)),d=c>0?-n:Math.min(Math.max(-n,-o),n),p=-c*c+d*(d+2*o)+h):d<=f?(c=0,d=Math.min(Math.max(-n,-o),n),p=d*(d+2*o)+h):(c=Math.max(0,-(r*n+a)),d=c>0?n:Math.min(Math.max(-n,-o),n),p=-c*c+d*(d+2*o)+h);else d=r>0?-n:n,c=Math.max(0,-(r*d+a)),p=-c*c+d*(d+2*o)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,c),s&&s.copy(mi).addScaledVector(De,d),p}intersectSphere(t,e){Mt.subVectors(t.center,this.origin);const i=Mt.dot(this.direction),s=Mt.dot(Mt)-i*i,n=t.radius*t.radius;if(s>n)return null;const r=Math.sqrt(n-s),a=i-r,o=i+r;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,n,r,a,o;const h=1/this.direction.x,l=1/this.direction.y,c=1/this.direction.z,d=this.origin;return h>=0?(i=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(i=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),l>=0?(n=(t.min.y-d.y)*l,r=(t.max.y-d.y)*l):(n=(t.max.y-d.y)*l,r=(t.min.y-d.y)*l),i>r||n>s||((n>i||isNaN(i))&&(i=n),(r<s||isNaN(s))&&(s=r),c>=0?(a=(t.min.z-d.z)*c,o=(t.max.z-d.z)*c):(a=(t.max.z-d.z)*c,o=(t.min.z-d.z)*c),i>o||a>s)||((a>i||i!==i)&&(i=a),(o<s||s!==s)&&(s=o),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Mt)!==null}intersectTriangle(t,e,i,s,n){yi.subVectors(e,t),Oe.subVectors(i,t),gi.crossVectors(yi,Oe);let r=this.direction.dot(gi),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;kt.subVectors(this.origin,t);const o=a*this.direction.dot(Oe.crossVectors(kt,Oe));if(o<0)return null;const h=a*this.direction.dot(yi.cross(kt));if(h<0||o+h>r)return null;const l=-a*kt.dot(gi);return l<0?null:this.at(l/r,n)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(t,e,i,s,n,r,a,o,h,l,c,d,p,f,m,x){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,n,r,a,o,h,l,c,d,p,f,m,x)}set(t,e,i,s,n,r,a,o,h,l,c,d,p,f,m,x){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=n,g[5]=r,g[9]=a,g[13]=o,g[2]=h,g[6]=l,g[10]=c,g[14]=d,g[3]=p,g[7]=f,g[11]=m,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,s=1/re.setFromMatrixColumn(t,0).length(),n=1/re.setFromMatrixColumn(t,1).length(),r=1/re.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*n,e[5]=i[5]*n,e[6]=i[6]*n,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,n=t.z,r=Math.cos(i),a=Math.sin(i),o=Math.cos(s),h=Math.sin(s),l=Math.cos(n),c=Math.sin(n);if(t.order==="XYZ"){const d=r*l,p=r*c,f=a*l,m=a*c;e[0]=o*l,e[4]=-o*c,e[8]=h,e[1]=p+f*h,e[5]=d-m*h,e[9]=-a*o,e[2]=m-d*h,e[6]=f+p*h,e[10]=r*o}else if(t.order==="YXZ"){const d=o*l,p=o*c,f=h*l,m=h*c;e[0]=d+m*a,e[4]=f*a-p,e[8]=r*h,e[1]=r*c,e[5]=r*l,e[9]=-a,e[2]=p*a-f,e[6]=m+d*a,e[10]=r*o}else if(t.order==="ZXY"){const d=o*l,p=o*c,f=h*l,m=h*c;e[0]=d-m*a,e[4]=-r*c,e[8]=f+p*a,e[1]=p+f*a,e[5]=r*l,e[9]=m-d*a,e[2]=-r*h,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){const d=r*l,p=r*c,f=a*l,m=a*c;e[0]=o*l,e[4]=f*h-p,e[8]=d*h+m,e[1]=o*c,e[5]=m*h+d,e[9]=p*h-f,e[2]=-h,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){const d=r*o,p=r*h,f=a*o,m=a*h;e[0]=o*l,e[4]=m-d*c,e[8]=f*c+p,e[1]=c,e[5]=r*l,e[9]=-a*l,e[2]=-h*l,e[6]=p*c+f,e[10]=d-m*c}else if(t.order==="XZY"){const d=r*o,p=r*h,f=a*o,m=a*h;e[0]=o*l,e[4]=-c,e[8]=h*l,e[1]=d*c+m,e[5]=r*l,e[9]=p*c-f,e[2]=f*c-p,e[6]=a*l,e[10]=m*c+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jn,t,Zn)}lookAt(t,e,i){const s=this.elements;return J.subVectors(t,e),J.lengthSq()===0&&(J.z=1),J.normalize(),Rt.crossVectors(i,J),Rt.lengthSq()===0&&(Math.abs(i.z)===1?J.x+=1e-4:J.z+=1e-4,J.normalize(),Rt.crossVectors(i,J)),Rt.normalize(),Le.crossVectors(J,Rt),s[0]=Rt.x,s[4]=Le.x,s[8]=J.x,s[1]=Rt.y,s[5]=Le.y,s[9]=J.y,s[2]=Rt.z,s[6]=Le.z,s[10]=J.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,n=this.elements,r=i[0],a=i[4],o=i[8],h=i[12],l=i[1],c=i[5],d=i[9],p=i[13],f=i[2],m=i[6],x=i[10],g=i[14],w=i[3],b=i[7],M=i[11],z=i[15],F=s[0],v=s[4],E=s[8],R=s[12],D=s[1],O=s[5],it=s[9],I=s[13],ut=s[2],Lt=s[6],jt=s[10],Zt=s[14],Gt=s[3],Jt=s[7],Qt=s[11],Kt=s[15];return n[0]=r*F+a*D+o*ut+h*Gt,n[4]=r*v+a*O+o*Lt+h*Jt,n[8]=r*E+a*it+o*jt+h*Qt,n[12]=r*R+a*I+o*Zt+h*Kt,n[1]=l*F+c*D+d*ut+p*Gt,n[5]=l*v+c*O+d*Lt+p*Jt,n[9]=l*E+c*it+d*jt+p*Qt,n[13]=l*R+c*I+d*Zt+p*Kt,n[2]=f*F+m*D+x*ut+g*Gt,n[6]=f*v+m*O+x*Lt+g*Jt,n[10]=f*E+m*it+x*jt+g*Qt,n[14]=f*R+m*I+x*Zt+g*Kt,n[3]=w*F+b*D+M*ut+z*Gt,n[7]=w*v+b*O+M*Lt+z*Jt,n[11]=w*E+b*it+M*jt+z*Qt,n[15]=w*R+b*I+M*Zt+z*Kt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],n=t[12],r=t[1],a=t[5],o=t[9],h=t[13],l=t[2],c=t[6],d=t[10],p=t[14],f=t[3],m=t[7],x=t[11],g=t[15],w=o*p-h*d,b=a*p-h*c,M=a*d-o*c,z=r*p-h*l,F=r*d-o*l,v=r*c-a*l;return e*(m*w-x*b+g*M)-i*(f*w-x*z+g*F)+s*(f*b-m*z+g*v)-n*(f*M-m*F+x*v)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],n=t[3],r=t[4],a=t[5],o=t[6],h=t[7],l=t[8],c=t[9],d=t[10],p=t[11],f=t[12],m=t[13],x=t[14],g=t[15],w=c*x*h-m*d*h+m*o*p-a*x*p-c*o*g+a*d*g,b=f*d*h-l*x*h-f*o*p+r*x*p+l*o*g-r*d*g,M=l*m*h-f*c*h+f*a*p-r*m*p-l*a*g+r*c*g,z=f*c*o-l*m*o-f*a*d+r*m*d+l*a*x-r*c*x,F=e*w+i*b+s*M+n*z;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const v=1/F;return t[0]=w*v,t[1]=(m*d*n-c*x*n-m*s*p+i*x*p+c*s*g-i*d*g)*v,t[2]=(a*x*n-m*o*n+m*s*h-i*x*h-a*s*g+i*o*g)*v,t[3]=(c*o*n-a*d*n-c*s*h+i*d*h+a*s*p-i*o*p)*v,t[4]=b*v,t[5]=(l*x*n-f*d*n+f*s*p-e*x*p-l*s*g+e*d*g)*v,t[6]=(f*o*n-r*x*n-f*s*h+e*x*h+r*s*g-e*o*g)*v,t[7]=(r*d*n-l*o*n+l*s*h-e*d*h-r*s*p+e*o*p)*v,t[8]=M*v,t[9]=(f*c*n-l*m*n-f*i*p+e*m*p+l*i*g-e*c*g)*v,t[10]=(r*m*n-f*a*n+f*i*h-e*m*h-r*i*g+e*a*g)*v,t[11]=(l*a*n-r*c*n-l*i*h+e*c*h+r*i*p-e*a*p)*v,t[12]=z*v,t[13]=(l*m*s-f*c*s+f*i*d-e*m*d-l*i*x+e*c*x)*v,t[14]=(f*a*s-r*m*s-f*i*o+e*m*o+r*i*x-e*a*x)*v,t[15]=(r*c*s-l*a*s+l*i*o-e*c*o-r*i*d+e*a*d)*v,this}scale(t){const e=this.elements,i=t.x,s=t.y,n=t.z;return e[0]*=i,e[4]*=s,e[8]*=n,e[1]*=i,e[5]*=s,e[9]*=n,e[2]*=i,e[6]*=s,e[10]*=n,e[3]*=i,e[7]*=s,e[11]*=n,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),n=1-i,r=t.x,a=t.y,o=t.z,h=n*r,l=n*a;return this.set(h*r+i,h*a-s*o,h*o+s*a,0,h*a+s*o,l*a+i,l*o-s*r,0,h*o-s*a,l*o+s*r,n*o*o+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,n,r){return this.set(1,i,n,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,n=e._x,r=e._y,a=e._z,o=e._w,h=n+n,l=r+r,c=a+a,d=n*h,p=n*l,f=n*c,m=r*l,x=r*c,g=a*c,w=o*h,b=o*l,M=o*c,z=i.x,F=i.y,v=i.z;return s[0]=(1-(m+g))*z,s[1]=(p+M)*z,s[2]=(f-b)*z,s[3]=0,s[4]=(p-M)*F,s[5]=(1-(d+g))*F,s[6]=(x+w)*F,s[7]=0,s[8]=(f+b)*v,s[9]=(x-w)*v,s[10]=(1-(d+m))*v,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;if(t.x=s[12],t.y=s[13],t.z=s[14],this.determinant()===0)return i.set(1,1,1),e.identity(),this;let n=re.set(s[0],s[1],s[2]).length();const r=re.set(s[4],s[5],s[6]).length(),a=re.set(s[8],s[9],s[10]).length();this.determinant()<0&&(n=-n),rt.copy(this);const h=1/n,l=1/r,c=1/a;return rt.elements[0]*=h,rt.elements[1]*=h,rt.elements[2]*=h,rt.elements[4]*=l,rt.elements[5]*=l,rt.elements[6]*=l,rt.elements[8]*=c,rt.elements[9]*=c,rt.elements[10]*=c,e.setFromRotationMatrix(rt),i.x=n,i.y=r,i.z=a,this}makePerspective(t,e,i,s,n,r,a=Be,o=!1){const h=this.elements,l=2*n/(e-t),c=2*n/(i-s),d=(e+t)/(e-t),p=(i+s)/(i-s);let f,m;if(o)f=n/(r-n),m=r*n/(r-n);else if(a===Be)f=-(r+n)/(r-n),m=-2*r*n/(r-n);else if(a===ns)f=-r/(r-n),m=-r*n/(r-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=l,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=c,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=f,h[14]=m,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,s,n,r,a=Be,o=!1){const h=this.elements,l=2/(e-t),c=2/(i-s),d=-(e+t)/(e-t),p=-(i+s)/(i-s);let f,m;if(o)f=1/(r-n),m=r/(r-n);else if(a===Be)f=-2/(r-n),m=-(r+n)/(r-n);else if(a===ns)f=-1/(r-n),m=-n/(r-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=l,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=c,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=f,h[14]=m,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const re=new y,rt=new et,jn=new y(0,0,0),Zn=new y(1,1,1),Rt=new y,Le=new y,J=new y,ps=new et,fs=new Ae;class ze{constructor(t=0,e=0,i=0,s=ze.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,n=s[0],r=s[4],a=s[8],o=s[1],h=s[5],l=s[9],c=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(S(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-r,n)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-S(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(o,h)):(this._y=Math.atan2(-c,n),this._z=0);break;case"ZXY":this._x=Math.asin(S(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,p),this._z=Math.atan2(-r,h)):(this._y=0,this._z=Math.atan2(o,n));break;case"ZYX":this._y=Math.asin(-S(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(o,n)):(this._x=0,this._z=Math.atan2(-r,h));break;case"YZX":this._z=Math.asin(S(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-c,n)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-S(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,n)):(this._x=Math.atan2(-l,p),this._y=0);break;default:P("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ps.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ps,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fs.setFromEuler(this),this.setFromQuaternion(fs,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ze.DEFAULT_ORDER="XYZ";class Gn{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jn=0;const ms=new y,ae=new Ae,vt=new et,Pe=new y,we=new y,Qn=new y,Kn=new Ae,ys=new y(1,0,0),gs=new y(0,1,0),xs=new y(0,0,1),ws={type:"added"},tr={type:"removed"},oe={type:"childadded",child:null},xi={type:"childremoved",child:null};class Ft extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jn++}),this.uuid=Et(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const t=new y,e=new ze,i=new Ae,s=new y(1,1,1);function n(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(n),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new C}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ae.setFromAxisAngle(t,e),this.quaternion.multiply(ae),this}rotateOnWorldAxis(t,e){return ae.setFromAxisAngle(t,e),this.quaternion.premultiply(ae),this}rotateX(t){return this.rotateOnAxis(ys,t)}rotateY(t){return this.rotateOnAxis(gs,t)}rotateZ(t){return this.rotateOnAxis(xs,t)}translateOnAxis(t,e){return ms.copy(t).applyQuaternion(this.quaternion),this.position.add(ms.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ys,t)}translateY(t){return this.translateOnAxis(gs,t)}translateZ(t){return this.translateOnAxis(xs,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vt.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Pe.copy(t):Pe.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),we.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vt.lookAt(we,Pe,this.up):vt.lookAt(Pe,we,this.up),this.quaternion.setFromRotationMatrix(vt),s&&(vt.extractRotation(s.matrixWorld),ae.setFromRotationMatrix(vt),this.quaternion.premultiply(ae.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ws),oe.child=t,this.dispatchEvent(oe),oe.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tr),xi.child=t,this.dispatchEvent(xi),xi.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vt.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vt.multiply(t.parent.matrixWorld)),t.applyMatrix4(vt),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ws),oe.child=t,this.dispatchEvent(oe),oe.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let n=0,r=s.length;n<r;n++)s[n].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(we,t,Qn),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(we,Kn,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let n=0,r=s.length;n<r;n++)s[n].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function n(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=n(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let h=0,l=o.length;h<l;h++){const c=o[h];n(t.shapes,c)}else n(t.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,h=this.material.length;o<h;o++)a.push(n(t.materials,this.material[o]));s.material=a}else s.material=n(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];s.animations.push(n(t.animations,o))}}if(e){const a=r(t.geometries),o=r(t.materials),h=r(t.textures),l=r(t.images),c=r(t.shapes),d=r(t.skeletons),p=r(t.animations),f=r(t.nodes);a.length>0&&(i.geometries=a),o.length>0&&(i.materials=o),h.length>0&&(i.textures=h),l.length>0&&(i.images=l),c.length>0&&(i.shapes=c),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=s,i;function r(a){const o=[];for(const h in a){const l=a[h];delete l.metadata,o.push(l)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ft.DEFAULT_UP=new y(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const at=new y,St=new y,wi=new y,At=new y,he=new y,le=new y,bs=new y,bi=new y,_i=new y,Mi=new y,vi=new wt,Si=new wt,Ai=new wt;class lt{constructor(t=new y,e=new y,i=new y){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),at.subVectors(t,e),s.cross(at);const n=s.lengthSq();return n>0?s.multiplyScalar(1/Math.sqrt(n)):s.set(0,0,0)}static getBarycoord(t,e,i,s,n){at.subVectors(s,e),St.subVectors(i,e),wi.subVectors(t,e);const r=at.dot(at),a=at.dot(St),o=at.dot(wi),h=St.dot(St),l=St.dot(wi),c=r*h-a*a;if(c===0)return n.set(0,0,0),null;const d=1/c,p=(h*o-a*l)*d,f=(r*l-a*o)*d;return n.set(1-p-f,f,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,At)===null?!1:At.x>=0&&At.y>=0&&At.x+At.y<=1}static getInterpolation(t,e,i,s,n,r,a,o){return this.getBarycoord(t,e,i,s,At)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(n,At.x),o.addScaledVector(r,At.y),o.addScaledVector(a,At.z),o)}static getInterpolatedAttribute(t,e,i,s,n,r){return vi.setScalar(0),Si.setScalar(0),Ai.setScalar(0),vi.fromBufferAttribute(t,e),Si.fromBufferAttribute(t,i),Ai.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(vi,n.x),r.addScaledVector(Si,n.y),r.addScaledVector(Ai,n.z),r}static isFrontFacing(t,e,i,s){return at.subVectors(i,e),St.subVectors(t,e),at.cross(St).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return at.subVectors(this.c,this.b),St.subVectors(this.a,this.b),at.cross(St).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return lt.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return lt.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,n){return lt.getInterpolation(t,this.a,this.b,this.c,e,i,s,n)}containsPoint(t){return lt.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return lt.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,n=this.c;let r,a;he.subVectors(s,i),le.subVectors(n,i),bi.subVectors(t,i);const o=he.dot(bi),h=le.dot(bi);if(o<=0&&h<=0)return e.copy(i);_i.subVectors(t,s);const l=he.dot(_i),c=le.dot(_i);if(l>=0&&c<=l)return e.copy(s);const d=o*c-l*h;if(d<=0&&o>=0&&l<=0)return r=o/(o-l),e.copy(i).addScaledVector(he,r);Mi.subVectors(t,n);const p=he.dot(Mi),f=le.dot(Mi);if(f>=0&&p<=f)return e.copy(n);const m=p*h-o*f;if(m<=0&&h>=0&&f<=0)return a=h/(h-f),e.copy(i).addScaledVector(le,a);const x=l*f-p*c;if(x<=0&&c-l>=0&&p-f>=0)return bs.subVectors(n,s),a=(c-l)/(c-l+(p-f)),e.copy(s).addScaledVector(bs,a);const g=1/(x+m+d);return r=m*g,a=d*g,e.copy(i).addScaledVector(he,r).addScaledVector(le,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ps={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},It={h:0,s:0,l:0},Ue={h:0,s:0,l:0};function zi(u,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?u+(t-u)*6*e:e<1/2?t:e<2/3?u+(t-u)*6*(2/3-e):u}class gt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ot){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,st.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=st.workingColorSpace){return this.r=t,this.g=e,this.b=i,st.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=st.workingColorSpace){if(t=$i(t,1),e=S(e,0,1),i=S(i,0,1),e===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+e):i+e-i*e,r=2*i-n;this.r=zi(r,n,t+1/3),this.g=zi(r,n,t),this.b=zi(r,n,t-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(t,e=ot){function i(n){n!==void 0&&parseFloat(n)<1&&P("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let n;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,e);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,e);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,e);break;default:P("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const n=s[1],r=n.length;if(r===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(n,16),e);P("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ot){const i=Ps[t.toLowerCase()];return i!==void 0?this.setHex(i,e):P("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ct(t.r),this.g=Ct(t.g),this.b=Ct(t.b),this}copyLinearToSRGB(t){return this.r=fe(t.r),this.g=fe(t.g),this.b=fe(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ot){return st.workingToColorSpace(H.copy(this),t),Math.round(S(H.r*255,0,255))*65536+Math.round(S(H.g*255,0,255))*256+Math.round(S(H.b*255,0,255))}getHexString(t=ot){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=st.workingColorSpace){st.workingToColorSpace(H.copy(this),e);const i=H.r,s=H.g,n=H.b,r=Math.max(i,s,n),a=Math.min(i,s,n);let o,h;const l=(a+r)/2;if(a===r)o=0,h=0;else{const c=r-a;switch(h=l<=.5?c/(r+a):c/(2-r-a),r){case i:o=(s-n)/c+(s<n?6:0);break;case s:o=(n-i)/c+2;break;case n:o=(i-s)/c+4;break}o/=6}return t.h=o,t.s=h,t.l=l,t}getRGB(t,e=st.workingColorSpace){return st.workingToColorSpace(H.copy(this),e),t.r=H.r,t.g=H.g,t.b=H.b,t}getStyle(t=ot){st.workingToColorSpace(H.copy(this),t);const e=H.r,i=H.g,s=H.b;return t!==ot?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(It),this.setHSL(It.h+t,It.s+e,It.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(It),t.getHSL(Ue);const i=Me(It.h,Ue.h,e),s=Me(It.s,Ue.s,e),n=Me(It.l,Ue.l,e);return this.setHSL(i,s,n),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,n=t.elements;return this.r=n[0]*e+n[3]*i+n[6]*s,this.g=n[1]*e+n[4]*i+n[7]*s,this.b=n[2]*e+n[5]*i+n[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const H=new gt;gt.NAMES=Ps;let er=0;class Us extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:er++}),this.uuid=Et(),this.name="",this.type="Material",this.blending=ji,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gi,this.blendDst=Ji,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ss,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=te,this.stencilZFail=te,this.stencilZPass=te,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){P(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){P(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gi&&(i.blendSrc=this.blendSrc),this.blendDst!==Ji&&(i.blendDst=this.blendDst),this.blendEquation!==Zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ss&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==te&&(i.stencilFail=this.stencilFail),this.stencilZFail!==te&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==te&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(n){const r=[];for(const a in n){const o=n[a];delete o.metadata,r.push(o)}return r}if(e){const n=s(t.textures),r=s(t.images);n.length>0&&(i.textures=n),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let n=0;n!==s;++n)i[n]=e[n].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ir extends Us{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ze,this.combine=gn,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const k=new y,Ne=new X;let sr=0;class Xt{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sr++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Oi,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,n=this.itemSize;s<n;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXY(e,Ne.x,Ne.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)k.fromBufferAttribute(this,e),k.applyMatrix3(t),this.setXYZ(e,k.x,k.y,k.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)k.fromBufferAttribute(this,e),k.applyMatrix4(t),this.setXYZ(e,k.x,k.y,k.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)k.fromBufferAttribute(this,e),k.applyNormalMatrix(t),this.setXYZ(e,k.x,k.y,k.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)k.fromBufferAttribute(this,e),k.transformDirection(t),this.setXYZ(e,k.x,k.y,k.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ht(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=T(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ht(e,this.array)),e}setX(t,e){return this.normalized&&(e=T(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ht(e,this.array)),e}setY(t,e){return this.normalized&&(e=T(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ht(e,this.array)),e}setZ(t,e){return this.normalized&&(e=T(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ht(e,this.array)),e}setW(t,e){return this.normalized&&(e=T(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=T(e,this.array),i=T(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=T(e,this.array),i=T(i,this.array),s=T(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,n){return t*=this.itemSize,this.normalized&&(e=T(e,this.array),i=T(i,this.array),s=T(s,this.array),n=T(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=n,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oi&&(t.usage=this.usage),t}}class nr extends Xt{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class rr extends Xt{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ii extends Xt{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ar=0;const tt=new et,Ei=new Ft,ue=new y,Q=new Ot,be=new Ot,L=new y;class Ee extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ar++}),this.uuid=Et(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vn(t)?rr:nr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new C().getNormalMatrix(t);i.applyNormalMatrix(n),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tt.makeRotationFromQuaternion(t),this.applyMatrix4(tt),this}rotateX(t){return tt.makeRotationX(t),this.applyMatrix4(tt),this}rotateY(t){return tt.makeRotationY(t),this.applyMatrix4(tt),this}rotateZ(t){return tt.makeRotationZ(t),this.applyMatrix4(tt),this}translate(t,e,i){return tt.makeTranslation(t,e,i),this.applyMatrix4(tt),this}scale(t,e,i){return tt.makeScale(t,e,i),this.applyMatrix4(tt),this}lookAt(t){return Ei.lookAt(t),Ei.updateMatrix(),this.applyMatrix4(Ei.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ue).negate(),this.translate(ue.x,ue.y,ue.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,n=t.length;s<n;s++){const r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ii(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const n=t[s];e.setXYZ(s,n.x,n.y,n.z||0)}t.length>e.count&&P("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ot);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new y(-1/0,-1/0,-1/0),new y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const n=e[i];Q.setFromBufferAttribute(n),this.morphTargetsRelative?(L.addVectors(this.boundingBox.min,Q.min),this.boundingBox.expandByPoint(L),L.addVectors(this.boundingBox.max,Q.max),this.boundingBox.expandByPoint(L)):(this.boundingBox.expandByPoint(Q.min),this.boundingBox.expandByPoint(Q.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new y,1/0);return}if(t){const i=this.boundingSphere.center;if(Q.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const a=e[n];be.setFromBufferAttribute(a),this.morphTargetsRelative?(L.addVectors(Q.min,be.min),Q.expandByPoint(L),L.addVectors(Q.max,be.max),Q.expandByPoint(L)):(Q.expandByPoint(be.min),Q.expandByPoint(be.max))}Q.getCenter(i);let s=0;for(let n=0,r=t.count;n<r;n++)L.fromBufferAttribute(t,n),s=Math.max(s,i.distanceToSquared(L));if(e)for(let n=0,r=e.length;n<r;n++){const a=e[n],o=this.morphTargetsRelative;for(let h=0,l=a.count;h<l;h++)L.fromBufferAttribute(a,h),o&&(ue.fromBufferAttribute(t,h),L.add(ue)),s=Math.max(s,i.distanceToSquared(L))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,n=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],o=[];for(let E=0;E<i.count;E++)a[E]=new y,o[E]=new y;const h=new y,l=new y,c=new y,d=new X,p=new X,f=new X,m=new y,x=new y;function g(E,R,D){h.fromBufferAttribute(i,E),l.fromBufferAttribute(i,R),c.fromBufferAttribute(i,D),d.fromBufferAttribute(n,E),p.fromBufferAttribute(n,R),f.fromBufferAttribute(n,D),l.sub(h),c.sub(h),p.sub(d),f.sub(d);const O=1/(p.x*f.y-f.x*p.y);isFinite(O)&&(m.copy(l).multiplyScalar(f.y).addScaledVector(c,-p.y).multiplyScalar(O),x.copy(c).multiplyScalar(p.x).addScaledVector(l,-f.x).multiplyScalar(O),a[E].add(m),a[R].add(m),a[D].add(m),o[E].add(x),o[R].add(x),o[D].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let E=0,R=w.length;E<R;++E){const D=w[E],O=D.start,it=D.count;for(let I=O,ut=O+it;I<ut;I+=3)g(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const b=new y,M=new y,z=new y,F=new y;function v(E){z.fromBufferAttribute(s,E),F.copy(z);const R=a[E];b.copy(R),b.sub(z.multiplyScalar(z.dot(R))).normalize(),M.crossVectors(F,R);const O=M.dot(o[E])<0?-1:1;r.setXYZW(E,b.x,b.y,b.z,O)}for(let E=0,R=w.length;E<R;++E){const D=w[E],O=D.start,it=D.count;for(let I=O,ut=O+it;I<ut;I+=3)v(t.getX(I+0)),v(t.getX(I+1)),v(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xt(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new y,n=new y,r=new y,a=new y,o=new y,h=new y,l=new y,c=new y;if(t)for(let d=0,p=t.count;d<p;d+=3){const f=t.getX(d+0),m=t.getX(d+1),x=t.getX(d+2);s.fromBufferAttribute(e,f),n.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),l.subVectors(r,n),c.subVectors(s,n),l.cross(c),a.fromBufferAttribute(i,f),o.fromBufferAttribute(i,m),h.fromBufferAttribute(i,x),a.add(l),o.add(l),h.add(l),i.setXYZ(f,a.x,a.y,a.z),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(x,h.x,h.y,h.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),n.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),l.subVectors(r,n),c.subVectors(s,n),l.cross(c),i.setXYZ(d+0,l.x,l.y,l.z),i.setXYZ(d+1,l.x,l.y,l.z),i.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)L.fromBufferAttribute(t,e),L.normalize(),t.setXYZ(e,L.x,L.y,L.z)}toNonIndexed(){function t(a,o){const h=a.array,l=a.itemSize,c=a.normalized,d=new h.constructor(o.length*l);let p=0,f=0;for(let m=0,x=o.length;m<x;m++){a.isInterleavedBufferAttribute?p=o[m]*a.data.stride+a.offset:p=o[m]*l;for(let g=0;g<l;g++)d[f++]=h[p++]}return new Xt(d,l,c)}if(this.index===null)return P("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,i=this.index.array,s=this.attributes;for(const a in s){const o=s[a],h=t(o,i);e.setAttribute(a,h)}const n=this.morphAttributes;for(const a in n){const o=[],h=n[a];for(let l=0,c=h.length;l<c;l++){const d=h[l],p=t(d,i);o.push(p)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,o=r.length;a<o;a++){const h=r[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const h in o)o[h]!==void 0&&(t[h]=o[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const o in i){const h=i[o];t.data.attributes[o]=h.toJSON(t.data)}const s={};let n=!1;for(const o in this.morphAttributes){const h=this.morphAttributes[o],l=[];for(let c=0,d=h.length;c<d;c++){const p=h[c];l.push(p.toJSON(t.data))}l.length>0&&(s[o]=l,n=!0)}n&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const h in s){const l=s[h];this.setAttribute(h,l.clone(e))}const n=t.morphAttributes;for(const h in n){const l=[],c=n[h];for(let d=0,p=c.length;d<p;d++)l.push(c[d].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let h=0,l=r.length;h<l;h++){const c=r[h];this.addGroup(c.start,c.count,c.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _s=new et,Nt=new Yn,Ve=new ni,Ms=new y,$e=new y,We=new y,He=new y,Ci=new y,qe=new y,vs=new y,Xe=new y;class or extends Ft{constructor(t=new Ee,e=new ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=s.length;n<r;n++){const a=s[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,n=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(n&&a){qe.set(0,0,0);for(let o=0,h=n.length;o<h;o++){const l=a[o],c=n[o];l!==0&&(Ci.fromBufferAttribute(c,t),r?qe.addScaledVector(Ci,l):qe.addScaledVector(Ci.sub(e),l))}e.add(qe)}return e}raycast(t,e){const i=this.geometry,s=this.material,n=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ve.copy(i.boundingSphere),Ve.applyMatrix4(n),Nt.copy(t.ray).recast(t.near),!(Ve.containsPoint(Nt.origin)===!1&&(Nt.intersectSphere(Ve,Ms)===null||Nt.origin.distanceToSquared(Ms)>(t.far-t.near)**2))&&(_s.copy(n).invert(),Nt.copy(t.ray).applyMatrix4(_s),!(i.boundingBox!==null&&Nt.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Nt)))}_computeIntersections(t,e,i){let s;const n=this.geometry,r=this.material,a=n.index,o=n.attributes.position,h=n.attributes.uv,l=n.attributes.uv1,c=n.attributes.normal,d=n.groups,p=n.drawRange;if(a!==null)if(Array.isArray(r))for(let f=0,m=d.length;f<m;f++){const x=d[f],g=r[x.materialIndex],w=Math.max(x.start,p.start),b=Math.min(a.count,Math.min(x.start+x.count,p.start+p.count));for(let M=w,z=b;M<z;M+=3){const F=a.getX(M),v=a.getX(M+1),E=a.getX(M+2);s=Ye(this,g,t,i,h,l,c,F,v,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const f=Math.max(0,p.start),m=Math.min(a.count,p.start+p.count);for(let x=f,g=m;x<g;x+=3){const w=a.getX(x),b=a.getX(x+1),M=a.getX(x+2);s=Ye(this,r,t,i,h,l,c,w,b,M),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(o!==void 0)if(Array.isArray(r))for(let f=0,m=d.length;f<m;f++){const x=d[f],g=r[x.materialIndex],w=Math.max(x.start,p.start),b=Math.min(o.count,Math.min(x.start+x.count,p.start+p.count));for(let M=w,z=b;M<z;M+=3){const F=M,v=M+1,E=M+2;s=Ye(this,g,t,i,h,l,c,F,v,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const f=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);for(let x=f,g=m;x<g;x+=3){const w=x,b=x+1,M=x+2;s=Ye(this,r,t,i,h,l,c,w,b,M),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}}function hr(u,t,e,i,s,n,r,a){let o;if(t.side===yn?o=i.intersectTriangle(r,n,s,!0,a):o=i.intersectTriangle(s,n,r,t.side===Di,a),o===null)return null;Xe.copy(a),Xe.applyMatrix4(u.matrixWorld);const h=e.ray.origin.distanceTo(Xe);return h<e.near||h>e.far?null:{distance:h,point:Xe.clone(),object:u}}function Ye(u,t,e,i,s,n,r,a,o,h){u.getVertexPosition(a,$e),u.getVertexPosition(o,We),u.getVertexPosition(h,He);const l=hr(u,t,e,i,$e,We,He,vs);if(l){const c=new y;lt.getBarycoord(vs,$e,We,He,c),s&&(l.uv=lt.getInterpolatedAttribute(s,a,o,h,c,new X)),n&&(l.uv1=lt.getInterpolatedAttribute(n,a,o,h,c,new X)),r&&(l.normal=lt.getInterpolatedAttribute(r,a,o,h,c,new y),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));const d={a,b:o,c:h,normal:new y,materialIndex:0};lt.getNormal($e,We,He,d.normal),l.face=d,l.barycoord=c}return l}function Wi(u){const t={};for(const e in u){t[e]={};for(const i in u[e]){const s=u[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(P("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Hi(u){const t={};for(let e=0;e<u.length;e++){const i=Wi(u[e]);for(const s in i)t[s]=i[s]}return t}function lr(u){const t=[];for(let e=0;e<u.length;e++)t.push(u[e].clone());return t}const Ns={clone:Wi,merge:Hi};var ur=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cr=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends Us{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ur,this.fragmentShader=cr,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=lr(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class pr{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Oi,this.updateRanges=[],this.version=0,this.uuid=Et()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,n=this.stride;s<n;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Et()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Et()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Y=new y;class Dt{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Y.fromBufferAttribute(this,e),Y.applyMatrix4(t),this.setXYZ(e,Y.x,Y.y,Y.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Y.fromBufferAttribute(this,e),Y.applyNormalMatrix(t),this.setXYZ(e,Y.x,Y.y,Y.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Y.fromBufferAttribute(this,e),Y.transformDirection(t),this.setXYZ(e,Y.x,Y.y,Y.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ht(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=T(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=T(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=T(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=T(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=T(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ht(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ht(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ht(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ht(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=T(e,this.array),i=T(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=T(e,this.array),i=T(i,this.array),s=T(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=T(e,this.array),i=T(i,this.array),s=T(s,this.array),n=T(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=n,this}clone(t){if(t===void 0){os("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)e.push(this.data.array[s+n])}return new Xt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Dt(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){os("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)e.push(this.data.array[s+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class fr extends Ee{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,s=new y,n=new y;if(t.index!==null){const r=t.attributes.position,a=t.index;let o=t.groups;o.length===0&&(o=[{start:0,count:a.count,materialIndex:0}]);for(let h=0,l=o.length;h<l;++h){const c=o[h],d=c.start,p=c.count;for(let f=d,m=d+p;f<m;f+=3)for(let x=0;x<3;x++){const g=a.getX(f+x),w=a.getX(f+(x+1)%3);s.fromBufferAttribute(r,g),n.fromBufferAttribute(r,w),Ss(s,n,i)===!0&&(e.push(s.x,s.y,s.z),e.push(n.x,n.y,n.z))}}}else{const r=t.attributes.position;for(let a=0,o=r.count/3;a<o;a++)for(let h=0;h<3;h++){const l=3*a+h,c=3*a+(h+1)%3;s.fromBufferAttribute(r,l),n.fromBufferAttribute(r,c),Ss(s,n,i)===!0&&(e.push(s.x,s.y,s.z),e.push(n.x,n.y,n.z))}}this.setAttribute("position",new ii(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Ss(u,t,e){const i=`${u.x},${u.y},${u.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${u.x},${u.y},${u.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}class mr extends Ee{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Li extends pr{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const As=new y,je=new y,ce=new y,de=new y,Fi=new y,yr=new y,gr=new y;class xr{constructor(t=new y,e=new y){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){As.subVectors(t,this.start),je.subVectors(this.end,this.start);const i=je.dot(je);let n=je.dot(As)/i;return e&&(n=S(n,0,1)),n}closestPointToPoint(t,e,i){const s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=yr,i=gr){const s=10000000000000001e-32;let n,r;const a=this.start,o=t.start,h=this.end,l=t.end;ce.subVectors(h,a),de.subVectors(l,o),Fi.subVectors(a,o);const c=ce.dot(ce),d=de.dot(de),p=de.dot(Fi);if(c<=s&&d<=s)return e.copy(a),i.copy(o),e.sub(i),e.dot(e);if(c<=s)n=0,r=p/d,r=S(r,0,1);else{const f=ce.dot(Fi);if(d<=s)r=0,n=S(-f/c,0,1);else{const m=ce.dot(de),x=c*d-m*m;x!==0?n=S((m*p-f*d)/x,0,1):n=0,r=(m*n+p)/d,r<0?(r=0,n=S(-f/c,0,1)):r>1&&(r=1,n=S((m-f)/c,0,1))}}return e.copy(a).add(ce.multiplyScalar(n)),i.copy(o).add(de.multiplyScalar(r)),e.sub(i),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rs}}));typeof window<"u"&&(window.__THREE__?P("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rs);const wr=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,br=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zs={meshphysical_vert:wr,meshphysical_frag:br},q={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new C},alphaMap:{value:null},alphaMapTransform:{value:new C},alphaTest:{value:0}},envmap:{envMap:{value:null},envMapRotation:{value:new C},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new C}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new C}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new C},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new C},normalScale:{value:new X(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new C},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new C}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new C}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new C}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}}},me={standard:{uniforms:Hi([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}])}};me.physical={uniforms:Hi([me.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new C},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new C},clearcoatNormalScale:{value:new X(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new C},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new C},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new C},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new C},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new C},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new C},transmissionSamplerSize:{value:new X},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new C},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new C},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new C},anisotropyVector:{value:new X},anisotropyMap:{value:null},anisotropyMapTransform:{value:new C}}]),vertexShader:zs.meshphysical_vert,fragmentShader:zs.meshphysical_frag};q.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new X(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};me.line={uniforms:Ns.merge([q.common,q.fog,q.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class qi extends dr{constructor(t){super({type:"LineMaterial",uniforms:Ns.clone(me.line.uniforms),vertexShader:me.line.vertexShader,fragmentShader:me.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Es=new Ot,Ze=new y;class Vs extends mr{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new ii(t,3)),this.setAttribute("uv",new ii(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),i.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const i=new Li(e,6,1);return this.setAttribute("instanceStart",new Dt(i,3,0)),this.setAttribute("instanceEnd",new Dt(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const i=new Li(e,6,1);return this.setAttribute("instanceColorStart",new Dt(i,3,0)),this.setAttribute("instanceColorEnd",new Dt(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new fr(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ot);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Es.setFromBufferAttribute(e),this.boundingBox.union(Es))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let n=0,r=t.count;n<r;n++)Ze.fromBufferAttribute(t,n),s=Math.max(s,i.distanceToSquared(Ze)),Ze.fromBufferAttribute(e,n),s=Math.max(s,i.distanceToSquared(Ze));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}const Ti=new wt,Cs=new y,Fs=new y,N=new wt,V=new wt,ct=new wt,Bi=new y,ki=new et,$=new xr,Ts=new y,Ge=new Ot,Je=new ni,dt=new wt;let ft,Yt;function Bs(u,t,e){return dt.set(0,0,-t,1).applyMatrix4(u.projectionMatrix),dt.multiplyScalar(1/dt.w),dt.x=Yt/e.width,dt.y=Yt/e.height,dt.applyMatrix4(u.projectionMatrixInverse),dt.multiplyScalar(1/dt.w),Math.abs(Math.max(dt.x,dt.y))}function _r(u,t){const e=u.matrixWorld,i=u.geometry,s=i.attributes.instanceStart,n=i.attributes.instanceEnd,r=Math.min(i.instanceCount,s.count);for(let a=0,o=r;a<o;a++){$.start.fromBufferAttribute(s,a),$.end.fromBufferAttribute(n,a),$.applyMatrix4(e);const h=new y,l=new y;ft.distanceSqToSegment($.start,$.end,l,h),l.distanceTo(h)<Yt*.5&&t.push({point:l,pointOnLine:h,distance:ft.origin.distanceTo(l),object:u,face:null,faceIndex:a,uv:null,uv1:null})}}function Mr(u,t,e){const i=t.projectionMatrix,n=u.material.resolution,r=u.matrixWorld,a=u.geometry,o=a.attributes.instanceStart,h=a.attributes.instanceEnd,l=Math.min(a.instanceCount,o.count),c=-t.near;ft.at(1,ct),ct.w=1,ct.applyMatrix4(t.matrixWorldInverse),ct.applyMatrix4(i),ct.multiplyScalar(1/ct.w),ct.x*=n.x/2,ct.y*=n.y/2,ct.z=0,Bi.copy(ct),ki.multiplyMatrices(t.matrixWorldInverse,r);for(let d=0,p=l;d<p;d++){if(N.fromBufferAttribute(o,d),V.fromBufferAttribute(h,d),N.w=1,V.w=1,N.applyMatrix4(ki),V.applyMatrix4(ki),N.z>c&&V.z>c)continue;if(N.z>c){const b=N.z-V.z,M=(N.z-c)/b;N.lerp(V,M)}else if(V.z>c){const b=V.z-N.z,M=(V.z-c)/b;V.lerp(N,M)}N.applyMatrix4(i),V.applyMatrix4(i),N.multiplyScalar(1/N.w),V.multiplyScalar(1/V.w),N.x*=n.x/2,N.y*=n.y/2,V.x*=n.x/2,V.y*=n.y/2,$.start.copy(N),$.start.z=0,$.end.copy(V),$.end.z=0;const m=$.closestPointToPointParameter(Bi,!0);$.at(m,Ts);const x=Nn.lerp(N.z,V.z,m),g=x>=-1&&x<=1,w=Bi.distanceTo(Ts)<Yt*.5;if(g&&w){$.start.fromBufferAttribute(o,d),$.end.fromBufferAttribute(h,d),$.start.applyMatrix4(r),$.end.applyMatrix4(r);const b=new y,M=new y;ft.distanceSqToSegment($.start,$.end,M,b),e.push({point:M,pointOnLine:b,distance:ft.origin.distanceTo(M),object:u,face:null,faceIndex:d,uv:null,uv1:null})}}}class vr extends or{constructor(t=new Vs,e=new qi({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,i=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let r=0,a=0,o=e.count;r<o;r++,a+=2)Cs.fromBufferAttribute(e,r),Fs.fromBufferAttribute(i,r),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Cs.distanceTo(Fs);const n=new Li(s,2,1);return t.setAttribute("instanceDistanceStart",new Dt(n,1,0)),t.setAttribute("instanceDistanceEnd",new Dt(n,1,1)),this}raycast(t,e){const i=this.material.worldUnits,s=t.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const n=t.params.Line2!==void 0&&t.params.Line2.threshold||0;ft=t.ray;const r=this.matrixWorld,a=this.geometry,o=this.material;Yt=o.linewidth+n,a.boundingSphere===null&&a.computeBoundingSphere(),Je.copy(a.boundingSphere).applyMatrix4(r);let h;if(i)h=Yt*.5;else{const c=Math.max(s.near,Je.distanceToPoint(ft.origin));h=Bs(s,c,o.resolution)}if(Je.radius+=h,ft.intersectsSphere(Je)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Ge.copy(a.boundingBox).applyMatrix4(r);let l;if(i)l=Yt*.5;else{const c=Math.max(s.near,Ge.distanceToPoint(ft.origin));l=Bs(s,c,o.resolution)}Ge.expandByScalar(l),ft.intersectsBox(Ge)!==!1&&(i?_r(this,e):Mr(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Ti),this.material.uniforms.resolution.value.set(Ti.z,Ti.w))}}class $s extends Vs{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return super.setPositions(i),this}setColors(t){const e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return super.setColors(i),this}setFromPoints(t){const e=t.length-1,i=new Float32Array(6*e);for(let s=0;s<e;s++)i[6*s]=t[s].x,i[6*s+1]=t[s].y,i[6*s+2]=t[s].z||0,i[6*s+3]=t[s+1].x,i[6*s+4]=t[s+1].y,i[6*s+5]=t[s+1].z||0;return super.setPositions(i),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class Sr extends vr{constructor(t=new $s,e=new qi({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}const G=1024*16,Ar=await sn(G),zt=new Float64Array(G*3),mt=new Float64Array(G*3),Pi=new Float64Array(G*3),_e=new Float64Array(G),Qe=new Float64Array(8),A={links:G-1,fps:0,error:0,solveTime:0,iters:0,max_iter:15,tol_exp:-7,gravity:!0,momentum:!0,floor:!0,mass_ratio:-3,beads:2,fix:0,N:1024};function Ws(){for(let u=0;u<G;u++)mt[u*3+0]=u*Math.cos(u*.1)*.1,mt[u*3+1]=u*Math.sin(u*.1)*.1,mt[u*3+2]=u*.01-250,_e[u]=u===0||u===G-1||u===G/4||u%(G/4)===0?1:.001;Pi.set(mt),zt.set(mt)}Ws();const ri=new THREE.Scene,Ce=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e4),xt=new THREE.WebGLRenderer;document.body.appendChild(xt.domElement);const Se=new $s,pe=new Float32Array(G*3);Se.setPositions(pe);const Hs=new qi({color:16776960,linewidth:2.3,vertexColors:!0});let ei=-1,Ht=-1;const qs=new Sr(Se,Hs),$t=new Float32Array(G*3);for(let u=0;u<G;u++)u/2%2===0?($t[u*3+0]=1,$t[u*3+1]=1,$t[u*3+2]=0):($t[u*3+0]=1,$t[u*3+1]=0,$t[u*3+2]=0);Se.setColors($t);Hs.resolution.set(window.innerWidth,window.innerHeight);qs.computeLineDistances();ri.add(qs);Ce.position.z=234;xt.setPixelRatio(window.devicePixelRatio);xt.setSize(window.innerWidth,window.innerHeight);xt.setClearColor(4210752);const Ui=new THREE.Raycaster,Ri=new THREE.Vector2,Xs=new THREE.Plane,Ke=new THREE.Vector3,ks=new THREE.Vector3,ti=new THREE.Color;new THREE.Vector3;const zr=new THREE.SphereGeometry(4.5,64,64),Er=new THREE.MeshBasicMaterial({opacity:1,transparent:!0}),pt=new THREE.InstancedMesh(zr,Er,G);pt.setColorAt(0,new THREE.Color(16777215));const Vt=new THREE.Object3D;ri.add(pt);const Ni=-150,Xi=new THREE.GridHelper(1024,64,8355711,8355711);Xi.position.y=Ni;ri.add(Xi);console.log(pt.instanceColor);window.addEventListener("wheel",u=>{Ce.position.z+=u.deltaY*1});window.addEventListener("pointermove",u=>{const t=xt.domElement.getBoundingClientRect();Ri.x=(u.clientX-t.left)/t.width*2-1,Ri.y=-((u.clientY-t.top)/t.height)*2+1,Ui.setFromCamera(Ri,Ce)});xt.domElement.addEventListener("pointerdown",u=>{if(console.log("mouse down",u),ei>=0){xt.domElement.setPointerCapture(u.pointerId),Ht=ei;const t=new THREE.Vector3,e=new THREE.Vector3;e.fromArray(pe,ei*3),Ce.getWorldDirection(t),Xs.setFromNormalAndCoplanarPoint(t,e)}});xt.domElement.addEventListener("pointerup",u=>{Ht=-1,xt.domElement.releasePointerCapture(u.pointerId),console.log("Drag end")});const U=new Vi({title:"Stats"});U.domElement.style.position="fixed";U.domElement.style.bottom="10px";U.domElement.style.right="10px";U.domElement.style.top="auto";U.domElement.style.width="auto";U.add({reset:Ws},"reset");U.add(A,"N",128,1024*8,1);U.add(A,"beads",2,16,1);U.add(A,"fix",{"end-points":0,between:1});U.add(A,"floor");U.add(A,"gravity");U.add(A,"momentum");U.add(A,"mass_ratio",-6,-1,1).name("mass ratio exp");U.add(A,"tol_exp",-32,0,1);U.add(A,"max_iter",1,64,1);U.add(A,"error",0,1).listen().disable().decimals(2).name("solve error");U.add(A,"solveTime",0,5).listen().decimals(3).disable().name("solve ms");U.add(A,"iters",1,64).listen().disable().name("solver iters");function Ys(){requestAnimationFrame(Ys),Xi.visible=A.floor;function u(i,s,n){const r=(n-1)/(s-1);return Math.floor(Math.round(i/r)*r)===i?1:0}for(let i=0;i<A.N;i++){const s=u(i,A.beads,A.N);_e[i]=s?1:Math.pow(10,A.mass_ratio)}for(let i=0;i<A.N;i++){if(u(i,A.beads,A.N)){if(A.fix===0&&(i==0||i==A.N-1))continue;if(A.fix==1&&i>0&&i<A.N-1)continue}for(let n=0;n<3;n++){const r=i*3+n;zt[r]=mt[r]+(mt[r]-Pi[r])*(A.momentum?1:0)-(A.gravity?1:0)*(n%3===1)}}if(Ht!==-1&&(Ui.ray.intersectPlane(Xs,Ke),zt[Ht*3]=Ke.x,zt[Ht*3+1]=Ke.y,zt[Ht*3+2]=Ke.z),A.floor)for(let i=0;i<A.N;i++)zt[i*3+1]=zt[i*3+1]<Ni?Ni:zt[i*3+1];Pi.set(mt),Ar.solve(A.N,Math.pow(10,A.tol_exp),A.max_iter,zt,_e,mt,Qe),A.solveTime=Qe[0],A.error=Qe[1],A.iters=Qe[2],pe.set(mt),Se.setPositions(pe),Se.instanceCount=A.N-1;let t=1/0;for(let i=0;i<A.N;i++)if(_e[i]===1){const s=Ui.ray;ks.fromArray(pe,i*3);let n=s.distanceSqToPoint(ks);n<t&&(t=n,ei=i)}let e=0;for(let i=0;i<A.N;i++)_e[i]===1&&(Vt.position.fromArray(pe,i*3),Vt.scale.set(1,1,1),Vt.updateMatrix(),ti.set(16711680),pt.setColorAt(e,ti),pt.setMatrixAt(e,Vt.matrix),e++,i==Ht&&(Vt.scale.set(1.5,1.5,1.5),ti.set(16777215),Vt.updateMatrix(),pt.setColorAt(e,ti),pt.setMatrixAt(e,Vt.matrix),e++));pt.count=e,pt.instanceColor.needsUpdate=!0,pt.instanceMatrix.needsUpdate=!0,xt.render(ri,Ce)}Ys();
