(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{232:function(t,n,e){"use strict";e.r(n),e.d(n,"ion_title",(function(){return o}));var i=e(28),r=e(247),o=function(){function t(t){Object(i.m)(this,t),this.ionStyle=Object(i.d)(this,"ionStyle",7)}return t.prototype.sizeChanged=function(){this.emitStyle()},t.prototype.connectedCallback=function(){this.emitStyle()},t.prototype.emitStyle=function(){var t,n=this.getSize();this.ionStyle.emit(((t={})["title-"+n]=!0,t))},t.prototype.getSize=function(){return void 0!==this.size?this.size:"default"},t.prototype.render=function(){var t,n=Object(i.f)(this),e=this.getSize();return Object(i.i)(i.a,{class:Object.assign((t={},t[n]=!0,t["title-"+e]=!0,t),Object(r.a)(this.color))},Object(i.i)("div",{class:"toolbar-title"},Object(i.i)("slot",null)))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.e)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{size:["sizeChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-small){padding-left:9px;padding-right:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:13px;font-weight:400}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-small){padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}:host(.title-large){padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}"},enumerable:!0,configurable:!0}),t}()},247:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return l})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return u}));var i=function(t,n,e,i){return new(e||(e=Promise))((function(r,o){function a(t){try{s(i.next(t))}catch(t){o(t)}}function l(t){try{s(i.throw(t))}catch(t){o(t)}}function s(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,l)}s((i=i.apply(t,n||[])).next())}))},r=function(t,n){var e,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(t,a)}catch(t){o=[6,t],i=0}finally{e=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},o=function(t,n){return null!==n.closest(t)},a=function(t){var n;return"string"==typeof t&&t.length>0?((n={"ion-color":!0})["ion-color-"+t]=!0,n):void 0},l=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return n[t]=!0})),n},s=/^[a-z][a-z0-9+\-.]*:/,u=function(t,n,e){return i(void 0,void 0,void 0,(function(){var i;return r(this,(function(r){return null!=t&&"#"!==t[0]&&!s.test(t)&&(i=document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[2,i.push(t,e)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=95.3c35540cc961dd505afc.js.map