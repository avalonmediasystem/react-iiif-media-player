(window.webpackJsonp=window.webpackJsonp||[]).push([[13,1,100],{190:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_menu",(function(){return l}));var i=n(25),r=n(256),o=(n(257),n(260),n(264)),s=n(259),a=n(263),u=function(t,e,n,i){return new(n||(n=Promise))((function(r,o){function s(t){try{u(i.next(t))}catch(t){o(t)}}function a(t){try{u(i.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((i=i.apply(t,e||[])).next())}))},c=function(t,e){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(r=s.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},l=function(){function t(t){Object(i.m)(this,t),this.lastOnEnd=0,this.blocker=s.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.mode=Object(i.f)(this),this.easing="ios"===this.mode?"cubic-bezier(0.32,0.72,0,1)":"cubic-bezier(0.0,0.0,0.2,1)",this.easingReverse="ios"===this.mode?"cubic-bezier(1, 0, 0.68, 0.28)":"cubic-bezier(0.4, 0, 0.6, 1)",this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50,this.ionWillOpen=Object(i.d)(this,"ionWillOpen",7),this.ionWillClose=Object(i.d)(this,"ionWillClose",7),this.ionDidOpen=Object(i.d)(this,"ionDidOpen",7),this.ionDidClose=Object(i.d)(this,"ionDidClose",7),this.ionMenuChange=Object(i.d)(this,"ionMenuChange",7)}return t.prototype.typeChanged=function(t,e){var n=this.contentEl;n&&(void 0!==e&&n.classList.remove("menu-content-"+e),n.classList.add("menu-content-"+t),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0},t.prototype.disabledChanged=function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})},t.prototype.sideChanged=function(){this.isEndSide=Object(r.h)(this.side)},t.prototype.swipeGestureChanged=function(){this.updateState()},t.prototype.connectedCallback=function(){return u(this,void 0,void 0,(function(){var t,e,r,o,s=this;return c(this,(function(u){switch(u.label){case 0:return void 0===this.type&&(this.type=i.k.get("menuType","overlay")),t=this.el,e=t.parentNode,void 0===this.contentId&&console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="main-content"></ion-menu>\n  <div id="main-content">...</div>\n'),(r=void 0!==this.contentId?document.getElementById(this.contentId):e&&e.querySelector&&e.querySelector("[main]"))&&r.tagName?(this.contentEl=r,r.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),a.a._register(this),o=this,[4,Promise.resolve().then(n.bind(null,259))]):(console.error('Menu: must have a "content" element to listen for drag events on.'),[2]);case 1:return o.gesture=u.sent().createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:function(t){return s.canStart(t)},onWillStart:function(){return s.onWillStart()},onStart:function(){return s.onStart()},onMove:function(t){return s.onMove(t)},onEnd:function(t){return s.onEnd(t)}}),this.updateState(),[2]}}))}))},t.prototype.componentDidLoad=function(){return u(this,void 0,void 0,(function(){return c(this,(function(t){return this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen}),this.updateState(),[2]}))}))},t.prototype.disconnectedCallback=function(){this.blocker.destroy(),a.a._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0},t.prototype.onSplitPaneChanged=function(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()},t.prototype.onBackdropClick=function(t){this._isOpen&&this.lastOnEnd<t.timeStamp-100&&(!!t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close()))},t.prototype.isOpen=function(){return Promise.resolve(this._isOpen)},t.prototype.isActive=function(){return Promise.resolve(this._isActive())},t.prototype.open=function(t){return void 0===t&&(t=!0),this.setOpen(!0,t)},t.prototype.close=function(t){return void 0===t&&(t=!0),this.setOpen(!1,t)},t.prototype.toggle=function(t){return void 0===t&&(t=!0),this.setOpen(!this._isOpen,t)},t.prototype.setOpen=function(t,e){return void 0===e&&(e=!0),a.a._setOpen(this,t,e)},t.prototype._setOpen=function(t,e){return void 0===e&&(e=!0),u(this,void 0,void 0,(function(){return c(this,(function(n){switch(n.label){case 0:return!this._isActive()||this.isAnimating||t===this._isOpen?[2,!1]:(this.beforeAnimation(t),[4,this.loadAnimation()]);case 1:return n.sent(),[4,this.startAnimation(t,e)];case 2:return n.sent(),this.afterAnimation(t),[2,!0]}}))}))},t.prototype.loadAnimation=function(){return u(this,void 0,void 0,(function(){var t,e;return c(this,(function(n){switch(n.label){case 0:return(t=this.menuInnerEl.offsetWidth)===this.width&&void 0!==this.animation?[2]:(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),e=this,[4,a.a._createAnimation(this.type,this)]);case 1:return e.animation=n.sent(),i.k.getBoolean("animated",!0)||this.animation.duration(0),this.animation.fill("both"),[2]}}))}))},t.prototype.startAnimation=function(t,e){return u(this,void 0,void 0,(function(){var n,i;return c(this,(function(r){switch(r.label){case 0:return n=!t,i=this.animation.direction(n?"reverse":"normal").easing(n?this.easingReverse:this.easing).onFinish((function(){"reverse"===i.getDirection()&&i.direction("normal")})),e?[4,i.play()]:[3,2];case 1:return r.sent(),[3,3];case 2:i.play({sync:!0}),r.label=3;case 3:return[2]}}))}))},t.prototype._isActive=function(){return!this.disabled&&!this.isPaneVisible},t.prototype.canSwipe=function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()},t.prototype.canStart=function(t){return!(!!document.querySelector("ion-modal.show-modal")||!this.canSwipe())&&(!!this._isOpen||!a.a._getOpenSync()&&h(window,t.currentX,this.isEndSide,this.maxEdgeStart))},t.prototype.onWillStart=function(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()},t.prototype.onStart=function(){this.isAnimating&&this.animation?this.animation.progressStart(!0,this._isOpen?1:0):Object(r.b)(!1,"isAnimating has to be true")},t.prototype.onMove=function(t){if(this.isAnimating&&this.animation){var e=d(t.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(this._isOpen?1-e:e)}else Object(r.b)(!1,"isAnimating has to be true")},t.prototype.onEnd=function(t){var e=this;if(this.isAnimating&&this.animation){var n=this._isOpen,i=this.isEndSide,s=d(t.deltaX,n,i),a=this.width,u=s/a,c=t.velocityX,l=a/2,h=c>=0&&(c>.2||t.deltaX>l),p=c<=0&&(c<-.2||t.deltaX<-l),f=n?i?h:p:i?p:h,m=!n&&f;n&&!f&&(m=!0),this.lastOnEnd=t.currentTime;var v=f?.001:-.001,b=u<0?.01:u;v+=Object(o.a)([0,0],[.4,0],[.6,1],[1,1],Object(r.c)(0,b,.9999))[0]||0;var y=this._isOpen?!f:f;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish((function(){return e.afterAnimation(m)}),{oneTimeCallback:!0}).progressEnd(y?1:0,this._isOpen?1-v:v,300)}else Object(r.b)(!1,"isAnimating has to be true")},t.prototype.beforeAnimation=function(t){Object(r.b)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(p),this.backdropEl&&this.backdropEl.classList.add(f),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()},t.prototype.afterAnimation=function(t){Object(r.b)(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&this.contentEl.classList.add(m),this.ionDidOpen.emit()):(this.el.classList.remove(p),this.contentEl&&this.contentEl.classList.remove(m),this.backdropEl&&this.backdropEl.classList.remove(f),this.animation&&this.animation.stop(),this.ionDidClose.emit())},t.prototype.updateState=function(){var t=this._isActive();this.gesture&&this.gesture.enable(t&&this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),this.disabled||a.a._setActiveMenu(this),Object(r.b)(!this.isAnimating,"can not be animating")},t.prototype.forceClosing=function(){Object(r.b)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").play({sync:!0}),this.afterAnimation(!1)},t.prototype.render=function(){var t,e=this,n=this,r=n.isEndSide,o=n.type,s=n.disabled,a=n.mode,u=n.isPaneVisible;return Object(i.i)(i.a,{role:"navigation",class:(t={},t[a]=!0,t["menu-type-"+o]=!0,t["menu-enabled"]=!s,t["menu-side-end"]=r,t["menu-side-start"]=!r,t["menu-pane-visible"]=u,t)},Object(i.i)("div",{class:"menu-inner",ref:function(t){return e.menuInnerEl=t}},Object(i.i)("slot",null)),Object(i.i)("ion-backdrop",{ref:function(t){return e.backdropEl=t},class:"menu-backdrop",tappable:!1,stopPropagation:!1}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.e)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}"},enumerable:!0,configurable:!0}),t}(),d=function(t,e,n){return Math.max(0,e!==n?-t:t)},h=function(t,e,n,i){return n?e>=t.innerWidth-i:e<=i},p="show-menu",f="show-backdrop",m="menu-content-open"},257:function(t,e,n){"use strict";n.r(e),n.d(e,"MENU_BACK_BUTTON_PRIORITY",(function(){return u})),n.d(e,"OVERLAY_BACK_BUTTON_PRIORITY",(function(){return a})),n.d(e,"startHardwareBackButton",(function(){return o}));var i=function(t,e,n,i){return new(n||(n=Promise))((function(r,o){function s(t){try{u(i.next(t))}catch(t){o(t)}}function a(t){try{u(i.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((i=i.apply(t,e||[])).next())}))},r=function(t,e){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(r=s.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},o=function(){var t=document,e=!1;t.addEventListener("backbutton",(function(){if(!e){var n=[],i=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register:function(t,e){n.push({priority:t,handler:e})}}});if(t.dispatchEvent(i),n.length>0){var r,o=Number.MIN_SAFE_INTEGER;n.forEach((function(t){var e=t.priority,n=t.handler;e>=o&&(o=e,r=n)})),e=!0,s(r).then((function(){return e=!1}))}}}))},s=function(t){return i(void 0,void 0,void 0,(function(){var e,n;return r(this,(function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),t?null==(e=t())?[3,2]:[4,e]:[3,2];case 1:i.sent(),i.label=2;case 2:return[3,4];case 3:return n=i.sent(),console.error(n),[3,4];case 4:return[2]}}))}))},a=100,u=99},259:function(t,e,n){"use strict";n.r(e),n.d(e,"GESTURE_CONTROLLER",(function(){return u})),n.d(e,"createGesture",(function(){return h}));var i,r=function(){function t(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new o(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new s(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,n){return this.canStart(t)?(this.requestedStart.set(e,n),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,n){if(!this.start(t,e,n))return!1;var i=this.requestedStart,r=-1e4;if(i.forEach((function(t){r=Math.max(r,t)})),r===n){this.capturedId=e,i.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(o),!0}return i.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0===n&&(n=new Set,this.disabledGestures.set(t,n)),n.add(e)},t.prototype.enableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0!==n&&n.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(a)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(a)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),o=function(){function t(t,e,n,i,r){this.id=e,this.name=n,this.disableScroll=r,this.priority=1e6*i+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),s=function(){function t(t,e,n,i){this.id=e,this.disable=n,this.disableScroll=i,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var n=e[t];this.ctrl.disableGesture(n,this.id)}this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var n=e[t];this.ctrl.enableGesture(n,this.id)}this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),a="backdrop-no-scroll",u=new r,c=function(t,e,n,i){var r,o,s=l(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return t.__zone_symbol__addEventListener?(r="__zone_symbol__addEventListener",o="__zone_symbol__removeEventListener"):(r="addEventListener",o="removeEventListener"),t[r](e,n,s),function(){t[o](e,n,s)}},l=function(t){if(void 0===i)try{var e=Object.defineProperty({},"passive",{get:function(){i=!0}});t.addEventListener("optsTest",(function(){}),e)}catch(t){i=!1}return!!i},d=function(t){return t instanceof Document?t:t.ownerDocument},h=function(t){var e=!1,n=!1,i=!0,r=!1,o=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),s=o.canStart,a=o.onWillStart,l=o.onStart,h=o.onEnd,v=o.notCaptured,b=o.onMove,y=o.threshold,g={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},w=function(t,e,n){var i=n*(Math.PI/180),r="x"===t,o=Math.cos(i),s=e*e,a=0,u=0,c=!1,l=0;return{start:function(t,e){a=t,u=e,l=0,c=!0},detect:function(t,e){if(!c)return!1;var n=t-a,i=e-u,d=n*n+i*i;if(d<s)return!1;var h=Math.sqrt(d),p=(r?n:i)/h;return l=p>o?1:p<-o?-1:0,c=!1,!0},isGesture:function(){return 0!==l},getDirection:function(){return l}}}(o.direction,o.threshold,o.maxAngle),O=u.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),E=function(){e&&(r=!1,b&&b(g))},S=function(){return!(O&&!O.capture())&&(e=!0,i=!1,g.startX=g.currentX,g.startY=g.currentY,g.startTime=g.currentTime,a?a(g).then(_):_(),!0)},_=function(){l&&l(g),i=!0},x=function(){e=!1,n=!1,r=!1,i=!0,O.release()},k=function(t){var n=e,r=i;x(),r&&(p(g,t),n?h&&h(g):v&&v(g))},A=function(t,e,n,i,r){var o,s,a,u,l,h,p,f=0,m=function(i){f=Date.now()+2e3,e(i)&&(!s&&n&&(s=c(t,"touchmove",n,r)),a||(a=c(t,"touchend",b,r)),u||(u=c(t,"touchcancel",b,r)))},v=function(i){f>Date.now()||e(i)&&(!h&&n&&(h=c(d(t),"mousemove",n,r)),p||(p=c(d(t),"mouseup",y,r)))},b=function(t){g(),i&&i(t)},y=function(t){w(),i&&i(t)},g=function(){s&&s(),a&&a(),u&&u(),s=a=u=void 0},w=function(){h&&h(),p&&p(),h=p=void 0},O=function(){g(),w()},E=function(e){void 0===e&&(e=!0),e?(o||(o=c(t,"touchstart",m,r)),l||(l=c(t,"mousedown",v,r))):(o&&o(),l&&l(),o=l=void 0,O())};return{enable:E,stop:O,destroy:function(){E(!1),i=n=e=void 0}}}(o.el,(function(t){var e=m(t);return!(n||!i)&&(f(t,g),g.startX=g.currentX,g.startY=g.currentY,g.startTime=g.currentTime=e,g.velocityX=g.velocityY=g.deltaX=g.deltaY=0,g.event=t,(!s||!1!==s(g))&&(O.release(),!!O.start()&&(n=!0,0===y?S():(w.start(g.startX,g.startY),!0))))}),(function(t){e?!r&&i&&(r=!0,p(g,t),requestAnimationFrame(E)):(p(g,t),w.detect(g.currentX,g.currentY)&&(w.isGesture()&&S()||M()))}),k,{capture:!1}),M=function(){x(),A.stop(),v&&v(g)};return{enable:function(t){void 0===t&&(t=!0),t||(e&&k(void 0),x()),A.enable(t)},destroy:function(){O.destroy(),A.destroy()}}},p=function(t,e){if(e){var n=t.currentX,i=t.currentY,r=t.currentTime;f(e,t);var o=t.currentX,s=t.currentY,a=(t.currentTime=m(e))-r;if(a>0&&a<100){var u=(o-n)/a,c=(s-i)/a;t.velocityX=.7*u+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=s-t.startY,t.event=e}},f=function(t,e){var n=0,i=0;if(t){var r=t.changedTouches;if(r&&r.length>0){var o=r[0];n=o.clientX,i=o.clientY}else void 0!==t.pageX&&(n=t.pageX,i=t.pageY)}e.currentX=n,e.currentY=i},m=function(t){return t.timeStamp||Date.now()}},263:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i=n(257),r=n(260),o=function(t,e,n,i){return new(n||(n=Promise))((function(r,o){function s(t){try{u(i.next(t))}catch(t){o(t)}}function a(t){try{u(i.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((i=i.apply(t,e||[])).next())}))},s=function(t,e){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(r=s.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},a=function(t){return Object(r.a)().duration(t?400:300)},u=function(t){var e,n,i=t.width+8,o=Object(r.a)(),s=Object(r.a)();t.isEndSide?(e=i+"px",n="0px"):(e=-i+"px",n="0px"),o.addElement(t.menuInnerEl).fromTo("transform","translateX("+e+")","translateX("+n+")");var u="ios"===t.mode,c=u?.2:.25;return s.addElement(t.backdropEl).fromTo("opacity",.01,c),a(u).addAnimation([o,s])},c=function(t){var e,n,i=t.width;t.isEndSide?(e=-i+"px",n=i+"px"):(e=i+"px",n=-i+"px");var o=Object(r.a)().addElement(t.menuInnerEl).fromTo("transform","translateX("+n+")","translateX(0px)"),s=Object(r.a)().addElement(t.contentEl).fromTo("transform","translateX(0px)","translateX("+e+")"),u=Object(r.a)().addElement(t.backdropEl).fromTo("opacity",.01,.32);return a("ios"===t.mode).addAnimation([o,s,u])},l=function(t){var e=t.width*(t.isEndSide?-1:1)+"px",n=Object(r.a)().addElement(t.contentEl).fromTo("transform","translateX(0px)","translateX("+e+")");return a("ios"===t.mode).addAnimation(n)},d=function(){var t=new Map,e=[],n=function(t){return o(void 0,void 0,void 0,(function(){var n,i;return s(this,(function(r){switch(r.label){case 0:return[4,v()];case 1:return r.sent(),"start"===t||"end"===t?(n=m((function(e){return e.side===t&&!e.disabled})))?[2,n]:[2,m((function(e){return e.side===t}))]:null!=t?[2,m((function(e){return e.menuId===t}))]:(i=m((function(t){return!t.disabled})))?[2,i]:[2,e.length>0?e[0].el:void 0]}}))}))},r=function(){return o(void 0,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,v()];case 1:return t.sent(),[2,h()]}}))}))},a=function(e,n){t.set(e,n)},d=function(t){var n=t.side;e.filter((function(e){return e.side===n&&e!==t})).forEach((function(t){return t.disabled=!0}))},h=function(){return m((function(t){return t._isOpen}))},p=function(){return e.map((function(t){return t.el}))},f=function(){return e.some((function(t){return t.isAnimating}))},m=function(t){var n=e.find(t);if(void 0!==n)return n.el},v=function(){return Promise.all(Array.from(document.querySelectorAll("ion-menu")).map((function(t){return t.componentOnReady()})))};return a("reveal",l),a("push",c),a("overlay",u),"undefined"!=typeof document&&document.addEventListener("ionBackButton",(function(t){var e=h();e&&t.detail.register(i.MENU_BACK_BUTTON_PRIORITY,(function(){return e.close()}))})),{registerAnimation:a,get:n,getMenus:function(){return o(void 0,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,v()];case 1:return t.sent(),[2,p()]}}))}))},getOpen:r,isEnabled:function(t){return o(void 0,void 0,void 0,(function(){var e;return s(this,(function(i){switch(i.label){case 0:return[4,n(t)];case 1:return(e=i.sent())?[2,!e.disabled]:[2,!1]}}))}))},swipeGesture:function(t,e){return o(void 0,void 0,void 0,(function(){var i;return s(this,(function(r){switch(r.label){case 0:return[4,n(e)];case 1:return(i=r.sent())&&(i.swipeGesture=t),[2,i]}}))}))},isAnimating:function(){return o(void 0,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,v()];case 1:return t.sent(),[2,f()]}}))}))},isOpen:function(t){return o(void 0,void 0,void 0,(function(){var e;return s(this,(function(i){switch(i.label){case 0:return null==t?[3,2]:[4,n(t)];case 1:return[2,void 0!==(e=i.sent())&&e.isOpen()];case 2:return[4,r()];case 3:return[2,void 0!==(e=i.sent())]}}))}))},enable:function(t,e){return o(void 0,void 0,void 0,(function(){var i;return s(this,(function(r){switch(r.label){case 0:return[4,n(e)];case 1:return(i=r.sent())&&(i.disabled=!t),[2,i]}}))}))},toggle:function(t){return o(void 0,void 0,void 0,(function(){var e;return s(this,(function(i){switch(i.label){case 0:return[4,n(t)];case 1:return(e=i.sent())?[2,e.toggle()]:[2,!1]}}))}))},close:function(t){return o(void 0,void 0,void 0,(function(){var e;return s(this,(function(i){switch(i.label){case 0:return[4,void 0!==t?n(t):r()];case 1:return void 0!==(e=i.sent())?[2,e.close()]:[2,!1]}}))}))},open:function(t){return o(void 0,void 0,void 0,(function(){var e;return s(this,(function(i){switch(i.label){case 0:return[4,n(t)];case 1:return(e=i.sent())?[2,e.open()]:[2,!1]}}))}))},_getOpenSync:h,_createAnimation:function(e,n){var i=t.get(e);if(!i)throw new Error("animation not registered");return i(n)},_register:function(t){e.indexOf(t)<0&&(t.disabled||d(t),e.push(t))},_unregister:function(t){var n=e.indexOf(t);n>-1&&e.splice(n,1)},_setOpen:function(t,e,n){return o(void 0,void 0,void 0,(function(){var i;return s(this,(function(o){switch(o.label){case 0:return f()?[2,!1]:e?[4,r()]:[3,3];case 1:return(i=o.sent())&&t.el!==i?[4,i.setOpen(!1,!1)]:[3,3];case 2:o.sent(),o.label=3;case 3:return[2,t._setOpen(e,n)]}}))}))},_setActiveMenu:d}}()},264:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i=function(t,e,n,i,s){return o(t[1],e[1],n[1],i[1],s).map((function(o){return r(t[0],e[0],n[0],i[0],o)}))},r=function(t,e,n,i,r){return r*(3*e*Math.pow(r-1,2)+r*(-3*n*r+3*n+i*r))-t*Math.pow(r-1,3)},o=function(t,e,n,i,r){return s((i-=r)-3*(n-=r)+3*(e-=r)-(t-=r),3*n-6*e+3*t,3*e-3*t,t).filter((function(t){return t>=0&&t<=1}))},s=function(t,e,n,i){if(0===t)return function(t,e,n){var i=e*e-4*t*n;return i<0?[]:[(-e+Math.sqrt(i))/(2*t),(-e-Math.sqrt(i))/(2*t)]}(e,n,i);var r=(3*(n/=t)-(e/=t)*e)/3,o=(2*e*e*e-9*e*n+27*(i/=t))/27;if(0===r)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-r),-Math.sqrt(-r)];var s=Math.pow(o/2,2)+Math.pow(r/3,3);if(0===s)return[Math.pow(o/2,.5)-e/3];if(s>0)return[Math.pow(-o/2+Math.sqrt(s),1/3)-Math.pow(o/2+Math.sqrt(s),1/3)-e/3];var a=Math.sqrt(Math.pow(-r/3,3)),u=Math.acos(-o/(2*Math.sqrt(Math.pow(-r/3,3)))),c=2*Math.pow(a,1/3);return[c*Math.cos(u/3)-e/3,c*Math.cos((u+2*Math.PI)/3)-e/3,c*Math.cos((u+4*Math.PI)/3)-e/3]}}}]);
//# sourceMappingURL=13.17a2d1f76dff611993b3.js.map