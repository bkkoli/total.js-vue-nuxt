webpackJsonp([3],{116:function(t,e,n){"use strict";var r=n(66),o=n.n(r),a=n(119),i=a.keys(),s={},u=!0,c=!1,l=void 0;try{for(var f,d=o()(i);!(u=(f=d.next()).done);u=!0){var p=f.value;s[p.replace(/^\.\//,"").replace(/\.(js|ts)$/,"")]=function(t){var e=a(t);return e.default?e.default:e}(p)}}catch(t){c=!0,l=t}finally{try{!u&&d.return&&d.return()}finally{if(c)throw l}}e.a=s},119:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=119},120:function(t,e,n){"use strict";n.d(e,"b",function(){return w});var r=n(57),o=n.n(r),a=n(25),i=n.n(a),s=n(67),u=n.n(s),c=n(16),l=(n.n(c),n(64)),f=n.n(l),d=n(121),p=(n.n(d),n(3)),h=n(44),x=n.n(h),m=n(123),A=n(68),v=n(125),C=n(69),g=n(130),y=n(135),b=n(40),_=n(143);n.d(e,"a",function(){return C.a});var w=function(){var t=f()(o.a.mark(function t(e){var n,r,a,s,c,l,f;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=Object(m.a)(),r=Object(_.a)(),t.next=5;break;case 5:return window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),a=u()({router:n,store:r,_nuxt:{defaultTransition:B,transitions:[B],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?i()({},B,{name:t}):i()({},B,t):B}),this.$options._nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){"string"==typeof(t=t||null)&&(t={statusCode:500,message:t});var e=this._nuxt||this.$options._nuxt;return e.dateErr=Date.now(),e.err=t,t}}},y.a),s=e?e.next:function(t){return a.router.push(t)},c=n.currentRoute,e||(l=Object(b.e)(n.options.base),c=n.resolve(l).route),f=Object(b.d)({isServer:!!e,isClient:!e,route:c,next:s,error:a._nuxt.error.bind(a),store:r,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0},a),t.abrupt("return",{app:a,router:n,store:r});case 12:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();p.default.component(A.a.name,A.a),p.default.component(v.a.name,v.a),p.default.component(g.a.name,g.a),p.default.use(x.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var B={name:"page",mode:"out-in"}},123:function(t,e,n){"use strict";function r(){return new a.default({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:s,routes:[{path:"/",component:i,name:"index"}],fallback:!1})}e.a=r;var o=n(3),a=n(43);o.default.use(a.default);var i=function(){return n.e(0).then(n.bind(null,145)).then(function(t){return t.default||t})},s=function(t,e,n){if(n)return n;var r={};return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),t.hash&&(r={selector:t.hash}),r}},125:function(t,e,n){"use strict";n(3);e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},126:function(t,e,n){var r=n(127);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(42)("73961964",r,!0)},127:function(t,e,n){e=t.exports=n(41)(!0),e.push([t.i,".__nuxt-error-page{background:#f5f7fa;font-size:14px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-align:center}.__nuxt-error-page .container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100vh;margin:0 auto;max-width:70%}.__nuxt-error-page .error-box{-webkit-box-shadow:0 0 9px #d3d3d3;box-shadow:0 0 9px #d3d3d3;padding:10px;text-align:left}.__nuxt-error-page .poweredby{text-align:center;margin-top:10%}.__nuxt-error-page a{color:#42b983!important}.__nuxt-error-page pre{border-color:#42b983!important}","",{version:3,sources:["/Users/grzegorzkroczek/my-project2/.nuxt/components/nuxt-error.vue"],names:[],mappings:"AACA,mBACE,mBAAoB,AACpB,eAAgB,AAChB,iBAAkB,AAClB,0BAA2B,AAC3B,8BAA+B,AAC/B,kCAAmC,AACnC,mCAAoC,AACpC,iBAAmB,CACpB,AACD,8BACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,aAAc,AACd,cAAe,AACf,aAAe,CAChB,AACD,8BACE,mCAAwC,AAChC,2BAAgC,AACxC,aAAc,AACd,eAAiB,CAClB,AACD,8BACE,kBAAmB,AACnB,cAAgB,CACjB,AACD,qBACE,uBAA0B,CAC3B,AACD,uBACE,8BAAiC,CAClC",file:"nuxt-error.vue",sourcesContent:["\n.__nuxt-error-page {\n  background: #F5F7FA;\n  font-size: 14px;\n  word-spacing: 1px;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  text-align: center;\n}\n.__nuxt-error-page .container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100vh;\n  margin: 0 auto;\n  max-width: 70%;\n}\n.__nuxt-error-page .error-box {\n  -webkit-box-shadow: 0px 0px 9px #d3d3d3;\n          box-shadow: 0px 0px 9px #d3d3d3;\n  padding: 10px;\n  text-align: left;\n}\n.__nuxt-error-page .poweredby {\n  text-align: center;\n  margin-top: 10%;\n}\n.__nuxt-error-page a {\n  color: #42b983 !important;\n}\n.__nuxt-error-page pre {\n  border-color: #42b983 !important;\n}\n"],sourceRoot:""}])},128:function(t,e,n){"use strict";e.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.error?(this.error.statusCode||500)+" - "+(this.error.message||"Nuxt Server Error"):"500 - Nuxt Server Error",link:[{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css",type:"text/css",media:"all"},{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css",type:"text/css",media:"all"}]}}}},129:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"column"},[n("h1",[t._v(t._s(t.error.statusCode)+" ")]),n("h4",[t._v(" "+t._s(t.error.message)+" ")]),404===t.error.statusCode||"Whoops!"===t.error.statusCode?n("p",[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e()])]),t._m(0)])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"column"},[n("div",{staticClass:"poweredby"},[n("small",[t._v(" Powered by "),n("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[t._v("Nuxt.js")])])])])])}],a={render:r,staticRenderFns:o};e.a=a},130:function(t,e,n){"use strict";var r=n(131),o=n(134),a=n(17),i=a(r.a,o.a,null,null,null);e.a=i.exports},131:function(t,e,n){"use strict";var r=n(3),o=n(68),a=n(69),i=n(40);e.a={name:"nuxt",props:["nuxtChildKey"],beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options._nuxt)},created:function(){r.default.prototype.$nuxt=this,this.$root.$nuxt=this,this.setLayout=this.$root.setLayout.bind(this.$root),"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.$root.error},mounted:function(){this.$root.$loading&&this.$root.$loading.start&&(this.$loading=this.$root.$loading)},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())}},computed:{routerViewKey:function(){return void 0!==this.nuxtChildKey||this.$route.matched.length>1?this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params):this.$route.fullPath.split("#")[0]}},components:{NuxtChild:o.a,NuxtError:a.a}}},134:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.nuxt.err?n("nuxt-error",{attrs:{error:t.nuxt.err}}):n("nuxt-child",{key:t.routerViewKey})},o=[],a={render:r,staticRenderFns:o};e.a=a},135:function(t,e,n){"use strict";var r=n(136),o=n(142),a=n(17),i=a(r.a,o.a,null,null,null);e.a=i.exports},136:function(t,e,n){"use strict";var r=n(16),o=n.n(r),a=n(137),i={_default:function(){return n.e(1).then(n.bind(null,146)).then(function(t){return t.default||t})}};e.a={head:{title:"my-project2",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},data:function(){return{layout:null,layoutName:""}},mounted:function(){this.$loading=this.$refs.loading,this.$nuxt.$loading=this.$loading},methods:{setLayout:function(t){t&&i["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=i[e],this.layout},loadLayout:function(t){var e=this;t&&i["_"+t]||(t="default");var n="_"+t;return"function"!=typeof i[n]?o.a.resolve(i[n]):i[n]().then(function(t){return i[n]=t,i[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:a.a}}},137:function(t,e,n){"use strict";function r(t){n(138)}var o=n(140),a=n(141),i=n(17),s=r,u=i(o.a,a.a,s,"data-v-a4ff158c",null);e.a=u.exports},138:function(t,e,n){var r=n(139);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(42)("2c6fea4f",r,!0)},139:function(t,e,n){e=t.exports=n(41)(!0),e.push([t.i,".progress[data-v-a4ff158c]{position:fixed;top:0;left:0;right:0;height:2px;width:0;-webkit-transition:width .2s,opacity .4s;-o-transition:width .2s,opacity .4s;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}","",{version:3,sources:["/Users/grzegorzkroczek/my-project2/.nuxt/components/nuxt-loading.vue"],names:[],mappings:"AACA,2BACE,eAAgB,AAChB,MAAS,AACT,OAAU,AACV,QAAW,AACX,WAAY,AACZ,QAAU,AACV,yCAA6C,AAC7C,oCAAwC,AACxC,iCAAqC,AACrC,UAAW,AACX,yBAA0B,AAC1B,cAAgB,CACjB",file:"nuxt-loading.vue",sourcesContent:["\n.progress[data-v-a4ff158c] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  -webkit-transition: width 0.2s, opacity 0.4s;\n  -o-transition: width 0.2s, opacity 0.4s;\n  transition: width 0.2s, opacity 0.4s;\n  opacity: 1;\n  background-color: #efc14e;\n  z-index: 999999;\n}\n"],sourceRoot:""}])},140:function(t,e,n){"use strict";var r=n(3);e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},141:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"progress",style:{width:t.percent+"%",height:t.height,"background-color":t.canSuccess?t.color:t.failedColor,opacity:t.show?1:0}})},o=[],a={render:r,staticRenderFns:o};e.a=a},142:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"__nuxt"}},[n("nuxt-loading",{ref:"loading"}),t.layout?n(t.layout,{tag:"component"}):t._e()],1)},o=[],a={render:r,staticRenderFns:o};e.a=a},143:function(t,e,n){"use strict";function r(t){var e=f(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function o(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},o(t.modules[n],e)}n.d(e,"a",function(){return _});var a=n(25),i=n.n(a),s=n(66),u=n.n(s),c=n(3),l=n(45);c.default.use(l.default);var f=n(144),d=f.keys(),p={},h=void 0;if(d.forEach(function(t){-1!==t.indexOf("./index.")&&(h=t)}),h&&(p=r(h)),"function"!=typeof p){p.modules||(p.modules={});var x=!0,m=!1,A=void 0;try{for(var v,C=u()(d);!(x=(v=C.next()).done);x=!0){var g=v.value,y=g.replace(/^\.\//,"").replace(/\.(js|ts)$/,"");if("index"!==y){var b=y.split(/\//),t=o(p,b);y=b.pop(),t[y]=r(g),t[y].namespaced=!0}}}catch(t){m=!0,A=t}finally{try{!x&&C.return&&C.return()}finally{if(m)throw A}}}var _=p instanceof Function?p:function(){return new l.default.Store(i()({},p,{state:p.state instanceof Function?p.state():{}}))}},144:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=144},40:function(t,e,n){"use strict";function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.options.data||R;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.options.name]),E()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function o(t){return t.options?(t._Ctor=t,t.extendOptions=t.options):(t=j.default.extend(t),t._Ctor=t),!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t}function a(t){return[].concat.apply([],t.matched.map(function(t){return $()(t.components).map(function(e){return t.components[e]})}))}function i(t){return[].concat.apply([],t.matched.map(function(t){return $()(t.instances).map(function(e){return t.instances[e]})}))}function s(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return $()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function u(t,e){var n={isServer:!!t.isServer,isClient:!!t.isClient,isDev:!1,app:e,store:t.store,route:t.to?t.to:t.route,payload:t.payload,error:t.error,base:"/",env:{},hotReload:t.hotReload||!1},r=t.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(t,e,o){t&&(n._redirected=!0,"string"!=typeof t||void 0!==e&&"object"!==(void 0===e?"undefined":w()(e))||(o=e||{},e=t,t=302),r({path:e,query:o,status:t}))},t.req&&(n.req=t.req),t.res&&(n.res=t.res),t.from&&(n.from=t.from),n.isServer&&t.beforeRenderFns&&(n.beforeNuxtRender=function(e){return t.beforeRenderFns.push(e)}),n}function c(t,e){return!t.length||e._redirected?b.a.resolve():l(t[0],e).then(function(){return c(t.slice(1),e)})}function l(t,e){var n=void 0;return n=2===t.length?new b.a(function(n){t(e,function(t,r){t&&e.error(t),r=r||{},n(r)})}):t(e),n&&(n instanceof b.a||"function"==typeof n.then)||(n=b.a.resolve(n)),n}function f(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}function d(t,e){return m(p(t,e))}function p(t,e){for(var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";null!=(n=O.exec(t));){var u=n[0],c=n[1],l=n.index;if(i+=t.slice(a,l),a=l+u.length,c)i+=c[1];else{var f=t[a],d=n[2],p=n[3],h=n[4],x=n[5],m=n[6],C=n[7];i&&(r.push(i),i="");var g=null!=d&&null!=f&&f!==d,y="+"===m||"*"===m,b="?"===m||"*"===m,_=n[2]||s,w=h||x;r.push({name:p||o++,prefix:d||"",delimiter:_,optional:b,repeat:y,partial:g,asterisk:!!C,pattern:w?v(w):C?".*":"[^"+A(_)+"]+?"})}}return a<t.length&&(i+=t.substr(a)),i&&r.push(i),r}function h(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function x(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function m(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===w()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},i=r||{},s=i.pretty?h:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var l,f=a[c.name];if(null==f){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(f)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+g()(f)+"`");if(0===f.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var d=0;d<f.length;d++){if(l=s(f[d]),!e[u].test(l))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+g()(l)+"`");o+=(0===d?c.prefix:c.delimiter)+l}}else{if(l=c.asterisk?x(f):s(f),!e[u].test(l))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');o+=c.prefix+l}}else o+=c}return o}}function A(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function v(t){return t.replace(/([=!:$\/()])/g,"\\$1")}e.a=r,e.j=o,e.f=a,e.g=i,e.c=s,e.d=u,e.h=c,e.i=l,e.e=f,e.b=d;var C=n(132),g=n.n(C),y=n(16),b=n.n(y),_=n(46),w=n.n(_),B=n(65),$=n.n(B),k=n(67),E=n.n(k),j=n(3),R=function(){return{}};window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var O=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},68:function(t,e,n){"use strict";var r=(n(3),["name","mode","css","type","duration","enterClass","leaveClass","enterActiveClass","enterActiveClass","leaveActiveClass","enterToClass","leaveToClass"]),o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled"];e.a={name:"nuxt-child",functional:!0,render:function(t,e){var n=e.parent,a=e.data;a.nuxtChild=!0;for(var i=n,s=n.$nuxt.nuxt.transitions,u=n.$nuxt.nuxt.defaultTransition,c=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&c++,n=n.$parent;a.nuxtChildDepth=c;var l=s[c]||u,f={};r.forEach(function(t){void 0!==l[t]&&(f[t]=l[t])});var d={};return o.forEach(function(t){"function"==typeof l[t]&&(d[t]=l[t].bind(i))}),t("transition",{props:f,on:d},[t("router-view",a)])}}},69:function(t,e,n){"use strict";function r(t){n(126)}var o=n(128),a=n(129),i=n(17),s=r,u=i(o.a,a.a,s,null,null);e.a=u.exports},72:function(t,e,n){"use strict";function r(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}function o(t,e,n){var o=function(t){var o=r(t,"transition",e,n);return"string"==typeof o?{name:o}:o};return t.map(function(t){var e=y()({},o(t));if(n&&n.matched.length&&n.matched[0].components.default){var r=o(n.matched[0].components.default);C()(r).filter(function(t){return r[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=r[t]})}return e})}function a(t){var e=Object(B.e)(t.options.base);return Object(B.c)(t.match(e),function(t,e,n,r,o){if("function"!=typeof t||t.options){var a=Object(B.j)(t);return n.components[r]=a,a}return t().then(function(t){var e=Object(B.j)(t);return z.serverRendered&&(Object(B.a)(e,z.data[o]),z.components&&(t.options.components=y()(e.options.components,z.components[o])),e._Ctor=e),n.components[r]=e,e})})}function i(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"!=typeof _.a[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),_.a[t]}),!a)return Object(B.h)(o,e)}function s(t,e){Object(B.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":f()(t))||t.options||(t=b.default.extend(t),t._Ctor=t,n.components[r]=t),t})}function u(t,e){var n=this;this._hashChanged||b.default.nextTick(function(){var e=Object(B.g)(t);R=e.map(function(t,e){if(!t)return"";if(j[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)b.default.set(t.$data,r,n[r])}return t.constructor.options.__file}),n._hadError&&n._dateLastError===n.$options._nuxt.dateErr&&n.error();var r=n.$options._nuxt.err?w.a.layout:t.matched[0].components.default.options.layout;"function"==typeof r&&(r=r(n._context)),n.setLayout(r)})}function c(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),T.afterEach(function(e,n){t.$nuxt.$emit("routeChanged",e,n)})}Object.defineProperty(e,"__esModule",{value:!0});var l=n(46),f=n.n(l),d=n(57),p=n.n(d),h=n(16),x=n.n(h),m=n(64),A=n.n(m),v=n(65),C=n.n(v),g=n(25),y=n.n(g),b=n(3),_=n(116),w=n(120),B=n(40),$=function(){var t=A()(p.a.mark(function t(e,n,r){var o,a,i;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.fullPath.split("#")[0],a=e.fullPath.split("#")[0],this._hashChanged=o===a,!this._hashChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,x.a.all(Object(B.c)(e,function(t,e,n,r){if("function"!=typeof t||t.options){var o=Object(B.j)(t);return n.components[r]=o,o}return t().then(function(t){var e=Object(B.j)(t);return n.components[r]=e,e})}));case 7:r(),t.next=16;break;case 10:t.prev=10,t.t0=t.catch(4),t.t0||(t.t0={}),i=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:i,message:t.t0.message}),r(!1);case 16:case"end":return t.stop()}},t,this,[[4,10]])}));return function(e,n,r){return t.apply(this,arguments)}}(),k=function(){var t=A()(p.a.mark(function t(e,n,r){var a,s,u,c,l,f,d,h,m=this;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._hashChanged){t.next=2;break}return t.abrupt("return",r());case 2:if(a=!1,s=function(t){m.$loading.finish&&m.$loading.finish(),a||(a=!0,r(t))},u=Object(B.d)({to:e,from:n,store:N,isClient:!0,next:s.bind(this),error:this.error.bind(this)},O),this._context=u,this._dateLastError=this.$options._nuxt.dateErr,this._hadError=!!this.$options._nuxt.err,c=Object(B.f)(e),c.length){t.next=23;break}return t.next=12,i.call(this,c,u);case 12:if(!u._redirected){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,this.loadLayout("function"==typeof w.a.layout?w.a.layout(u):w.a.layout);case 16:return l=t.sent,t.next=19,i.call(this,c,u,l);case 19:if(!u._redirected){t.next=21;break}return t.abrupt("return");case 21:return this.error({statusCode:404,message:"This page could not be found."}),t.abrupt("return",r());case 23:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(o(c,e,n)),t.prev=25,t.next=28,i.call(this,c,u);case 28:if(!u._redirected){t.next=30;break}return t.abrupt("return");case 30:return f=c[0].options.layout,"function"==typeof f&&(f=f(u)),t.next=34,this.loadLayout(f);case 34:return f=t.sent,t.next=37,i.call(this,c,u,f);case 37:if(!u._redirected){t.next=39;break}return t.abrupt("return");case 39:if(d=!0,c.forEach(function(t){d&&"function"==typeof t.options.validate&&(d=t.options.validate({params:e.params||{},query:e.query||{},store:u.store}))}),d){t.next=44;break}return this.error({statusCode:404,message:"This page could not be found."}),t.abrupt("return",r());case 44:return t.next=46,x.a.all(c.map(function(t,n){if(t._path=Object(B.b)(e.matched[n].path)(e.params),!m._hadError&&t._path===j[n]&&n+1!==c.length)return x.a.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,a=!!t.options.fetch,i=o&&a?30:45;if(o){var s=Object(B.i)(t.options.asyncData,u).then(function(e){Object(B.a)(t,e),m.$loading.increase&&m.$loading.increase(i)});r.push(s)}if(a){var l=t.options.fetch(u);l&&(l instanceof x.a||"function"==typeof l.then)||(l=x.a.resolve(l)),l.then(function(t){m.$loading.increase&&m.$loading.increase(i)}),r.push(l)}return x.a.all(r)}));case 46:j=c.map(function(t,n){return Object(B.b)(e.matched[n].path)(e.params)}),this.$loading.finish&&this.$loading.finish(),a||r(),t.next=62;break;case 51:return t.prev=51,t.t0=t.catch(25),t.t0||(t.t0={}),j=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,h=w.a.layout,"function"==typeof h&&(h=h(u)),t.next=60,this.loadLayout(h);case 60:this.error(t.t0),r(!1);case 62:case"end":return t.stop()}},t,this,[[25,51]])}));return function(e,n,r){return t.apply(this,arguments)}}(),E=function(){var t=A()(p.a.mark(function t(e){var n,r,i,l;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return O=e.app,T=e.router,N=e.store,t.next=5,x.a.all(a(T));case 5:return n=t.sent,r=new b.default(O),i=z.layout||"default",t.next=10,r.loadLayout(i);case 10:if(r.setLayout(i),l=function(){r.$mount("#__nuxt"),b.default.nextTick(function(){c(r)})},r.setTransitions=r.$options._nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(o(n,T.currentRoute)),j=T.currentRoute.matched.map(function(t){return Object(B.b)(t.path)(T.currentRoute.params)}),R=n.map(function(t){return t.options.__file})),r.error=r.$options._nuxt.error.bind(r),r.$loading={},z.error&&r.error(z.error),T.beforeEach($.bind(r)),T.beforeEach(k.bind(r)),T.afterEach(s),T.afterEach(u.bind(r)),!z.serverRendered){t.next=24;break}return l(),t.abrupt("return");case 24:k.call(r,T.currentRoute,T.currentRoute,function(t){if(!t)return s(T.currentRoute,T.currentRoute),u.call(r,T.currentRoute,T.currentRoute),void l();var e=!1;T.afterEach(function(){e||(e=!0,l())}),T.push(t)});case 25:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),j=[],R=[],O=void 0,T=void 0,N=void 0,z=window.__NUXT__||{};z.components=window.__COMPONENTS__||null;var L=b.default.config.errorHandler;b.default.config.errorHandler=function(t,e,n){if(t.statusCode=t.statusCode||"Whoops!",e&&e.$root&&e.$root.$nuxt&&e.$root.$nuxt.error(t),"function"==typeof L)return L.apply(void 0,arguments);console.error(t)},Object(w.b)().then(E).catch(function(t){console.error("[nuxt] Error while initializing app",t)})}},[72]);
//# sourceMappingURL=nuxt.bundle.d9c6e7469cdcf7c61183.js.map