(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{237:function(t,n,e){"use strict";e.r(n),e.d(n,"ion_toggle",(function(){return s}));var r=e(28),i=e(248),o=e(247),a=e(259),c=function(t,n,e,r){return new(e||(e=Promise))((function(i,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function c(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,c)}u((r=r.apply(t,n||[])).next())}))},u=function(t,n){var e,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(t,a)}catch(t){o=[6,t],r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},s=function(){function t(t){var n=this;Object(r.m)(this,t),this.inputId="ion-tg-"+d++,this.lastDrag=0,this.activated=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onClick=function(){n.lastDrag+300<Date.now()&&(n.checked=!n.checked)},this.onFocus=function(){n.ionFocus.emit()},this.onBlur=function(){n.ionBlur.emit()},this.ionChange=Object(r.d)(this,"ionChange",7),this.ionFocus=Object(r.d)(this,"ionFocus",7),this.ionBlur=Object(r.d)(this,"ionBlur",7),this.ionStyle=Object(r.d)(this,"ionStyle",7)}return t.prototype.checkedChanged=function(t){this.ionChange.emit({checked:t,value:this.value})},t.prototype.disabledChanged=function(){this.emitStyle(),this.gesture&&this.gesture.enable(!this.disabled)},t.prototype.connectedCallback=function(){return c(this,void 0,void 0,(function(){var t,n=this;return u(this,(function(r){switch(r.label){case 0:return t=this,[4,e.e(1).then(e.bind(null,251))];case 1:return t.gesture=r.sent().createGesture({el:this.el,gestureName:"toggle",gesturePriority:100,threshold:5,passive:!1,onStart:function(){return n.onStart()},onMove:function(t){return n.onMove(t)},onEnd:function(t){return n.onEnd(t)}}),this.disabledChanged(),[2]}}))}))},t.prototype.disconnectedCallback=function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.componentWillLoad=function(){this.emitStyle()},t.prototype.emitStyle=function(){this.ionStyle.emit({"interactive-disabled":this.disabled})},t.prototype.onStart=function(){this.activated=!0,this.setFocus()},t.prototype.onMove=function(t){l(document,this.checked,t.deltaX,-10)&&(this.checked=!this.checked,Object(a.c)())},t.prototype.onEnd=function(t){this.activated=!1,this.lastDrag=Date.now(),t.event.preventDefault(),t.event.stopImmediatePropagation()},t.prototype.getValue=function(){return this.value||""},t.prototype.setFocus=function(){this.buttonEl&&this.buttonEl.focus()},t.prototype.render=function(){var t,n=this,e=this,a=e.inputId,c=e.disabled,u=e.checked,s=e.activated,l=e.color,d=e.el,p=Object(r.f)(this),g=a+"-lbl",h=Object(i.f)(d),f=this.getValue();return h&&(h.id=g),Object(i.a)(!0,d,this.name,u?f:"",c),Object(r.i)(r.a,{onClick:this.onClick,role:"checkbox","aria-disabled":c?"true":null,"aria-checked":""+u,"aria-labelledby":g,class:Object.assign(Object.assign({},Object(o.a)(l)),(t={},t[p]=!0,t["in-item"]=Object(o.c)("ion-item",d),t["toggle-activated"]=s,t["toggle-checked"]=u,t["toggle-disabled"]=c,t.interactive=!0,t))},Object(r.i)("div",{class:"toggle-icon"},Object(r.i)("div",{class:"toggle-inner"})),Object(r.i)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:c,ref:function(t){return n.buttonEl=t}}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(r.e)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}:host{--background:rgba(var(--ion-text-color-rgb,0,0,0),0.3);--background-checked:rgba(var(--ion-color-primary-rgb,56,128,255),0.5);--handle-background:#fff;--handle-background-checked:var(--ion-color-primary,#3880ff);--border-radius:14px;--handle-border-radius:50%;padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:36px;height:14px;contain:strict}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb),.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:background-color .16s;transition:background-color .16s;background:var(--background);pointer-events:none}.toggle-inner{left:0;top:-3px;border-radius:var(--handle-border-radius);position:absolute;width:20px;height:20px;-webkit-transition-duration:.16s;transition-duration:.16s;-webkit-transition-property:background-color,-webkit-transform;transition-property:background-color,-webkit-transform;transition-property:transform,background-color;transition-property:transform,background-color,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);background:var(--handle-background);-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);will-change:transform,background-color;contain:strict}:host-context([dir=rtl]) .toggle-inner,[dir=rtl] .toggle-inner{left:unset;right:unset;right:0}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(16px,0,0);transform:translate3d(16px,0,0);background:var(--handle-background-checked)}:host-context([dir=rtl]).toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(-1 * 16px),0,0);transform:translate3d(calc(-1 * 16px),0,0)}:host(.toggle-disabled){opacity:.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:16px;padding-right:0;padding-top:12px;padding-bottom:12px;cursor:pointer}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0}}:host(.in-item[slot=start]){padding-left:2px;padding-right:18px;padding-top:12px;padding-bottom:12px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:18px;padding-inline-end:18px}}"},enumerable:!0,configurable:!0}),t}(),l=function(t,n,e,r){var i="rtl"===t.dir;return n?!i&&r>e||i&&-r<e:!i&&-r<e||i&&r>e},d=0},247:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return s}));var r=function(t,n,e,r){return new(e||(e=Promise))((function(i,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function c(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,c)}u((r=r.apply(t,n||[])).next())}))},i=function(t,n){var e,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(t,a)}catch(t){o=[6,t],r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},o=function(t,n){return null!==n.closest(t)},a=function(t){var n;return"string"==typeof t&&t.length>0?((n={"ion-color":!0})["ion-color-"+t]=!0,n):void 0},c=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return n[t]=!0})),n},u=/^[a-z][a-z0-9+\-.]*:/,s=function(t,n,e){return r(void 0,void 0,void 0,(function(){var r;return i(this,(function(i){return null!=t&&"#"!==t[0]&&!u.test(t)&&(r=document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[2,r.push(t,e)]):[2,!1]}))}))}},248:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return u})),e.d(n,"d",(function(){return g})),e.d(n,"e",(function(){return h})),e.d(n,"f",(function(){return a})),e.d(n,"g",(function(){return o})),e.d(n,"h",(function(){return p})),e.d(n,"i",(function(){return l})),e.d(n,"j",(function(){return d})),e.d(n,"k",(function(){return i}));var r=function(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var r=Array(t),i=0;for(n=0;n<e;n++)for(var o=arguments[n],a=0,c=o.length;a<c;a++,i++)r[i]=o[a];return r},i=function(t){return"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"==typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t)},o=function(t){return!!t.shadowRoot&&!!t.attachShadow},a=function(t){var n=t.closest("ion-item");return n?n.querySelector("ion-label"):null},c=function(t,n,e,r,i){if(t||o(n)){var a=n.querySelector("input.aux-input");a||((a=n.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),n.appendChild(a)),a.disabled=i,a.name=e,a.value=r||""}},u=function(t,n,e){return Math.max(t,Math.min(n,e))},s=function(t,n){if(!t){var e="ASSERT: "+n;throw console.error(e),new Error(e)}},l=function(t){return t.timeStamp||Date.now()},d=function(t){if(t){var n=t.changedTouches;if(n&&n.length>0){var e=n[0];return{x:e.clientX,y:e.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},p=function(t){var n="rtl"===document.dir;switch(t){case"start":return n;case"end":return!n;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}},g=function(t,n){var e=t._original||t;return{_original:t,emit:h(e.emit.bind(e),n)}},h=function(t,n){var e;return void 0===n&&(n=0),function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];clearTimeout(e),e=setTimeout.apply(void 0,r([t,n],i))}}},259:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"d",(function(){return i}));var r=function(){var t=window.TapticEngine;t&&t.selection()},i=function(){var t=window.TapticEngine;t&&t.gestureSelectionStart()},o=function(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()},a=function(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}}}]);
//# sourceMappingURL=30.fe6c07c0ac168fc694c2.js.map