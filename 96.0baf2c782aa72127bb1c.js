(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{233:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_title",(function(){return o}));var r=n(28),i=n(247),o=function(){function t(t){Object(r.m)(this,t),this.ionStyle=Object(r.d)(this,"ionStyle",7)}return t.prototype.sizeChanged=function(){this.emitStyle()},t.prototype.connectedCallback=function(){this.emitStyle()},t.prototype.emitStyle=function(){var t,e=this.getSize();this.ionStyle.emit(((t={})["title-"+e]=!0,t))},t.prototype.getSize=function(){return void 0!==this.size?this.size:"default"},t.prototype.render=function(){var t,e=Object(r.f)(this),n=this.getSize();return Object(r.i)(r.a,{class:Object.assign((t={},t[e]=!0,t["title-"+n]=!0,t),Object(i.a)(this.color))},Object(r.i)("div",{class:"toolbar-title"},Object(r.i)("slot",null)))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(r.e)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{size:["sizeChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:.0125em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.title-small){width:100%;height:100%;font-size:15px;font-weight:400}"},enumerable:!0,configurable:!0}),t}()},247:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return c}));var r=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function l(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(l,a)}u((r=r.apply(t,e||[])).next())}))},i=function(t,e){var n,r,i,o,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(i=l.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){l.label=o[1];break}if(6===o[0]&&l.label<i[1]){l.label=i[1],i=o;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(o);break}i[2]&&l.ops.pop(),l.trys.pop();continue}o=e.call(t,l)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},o=function(t,e){return null!==e.closest(t)},l=function(t){var e;return"string"==typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0},a=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},u=/^[a-z][a-z0-9+\-.]*:/,c=function(t,e,n){return r(void 0,void 0,void 0,(function(){var r;return i(this,(function(i){return null!=t&&"#"!==t[0]&&!u.test(t)&&(r=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,r.push(t,n)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=96.0baf2c782aa72127bb1c.js.map