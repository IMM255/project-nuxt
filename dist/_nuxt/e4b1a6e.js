(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(t,e,r){"use strict";r.d(e,"b",(function(){return o}));var n;r(8);function o(t){n=t}var c={};["request","delete","get","head","options","post","put","patch"].forEach((function(t){c[t]=function(){var e;if(!n)throw new Error("httpClient not installed");return null===(e=n[t])||void 0===e?void 0:e.apply(null,arguments)}})),e.a=c},244:function(t,e,r){"use strict";(function(t){var n=r(59);e.a=function(e){var r,o,c=e.app,l=(e.store,null===(r=t)||void 0===r||null===(r=r.env)||void 0===r?void 0:"https://xjjeyccncvvwigqgsrrg.supabase.co");c.$axios=c.$axios.create({headers:{apiKey:null===(o=t)||void 0===o||null===(o=o.env)||void 0===o?void 0:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqamV5Y2NuY3Z2d2lncWdzcnJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0NzE3NjEsImV4cCI6MjAxMjA0Nzc2MX0.F2Kx403IhhG_8zQXshNnrXv5AM71DtTl2lnLEMBbEZ8",common:{Accept:"*/*","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"}}}),c.$axios.setBaseURL(l),Object(n.b)(c.$axios)}}).call(this,r(158))},245:function(t,e,r){"use strict";(function(t){var n=r(115);e.a=function(e){var r,o,c=e.app,l=(e.store,null===(r=t)||void 0===r||null===(r=r.env)||void 0===r?void 0:"https://xjjeyccncvvwigqgsrrg.supabase.co");c.$axios=c.$axios.create({headers:{apiKey:null===(o=t)||void 0===o||null===(o=o.env)||void 0===o?void 0:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqamV5Y2NuY3Z2d2lncWdzcnJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0NzE3NjEsImV4cCI6MjAxMjA0Nzc2MX0.F2Kx403IhhG_8zQXshNnrXv5AM71DtTl2lnLEMBbEZ8",common:{Accept:"*/*","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},Authorization:"Bearer"+localStorage.getItem("access_token")}}),c.$axios.setBaseURL(l),Object(n.b)(c.$axios)}}).call(this,r(158))},246:function(t,e,r){"use strict";(function(t){var n=r(83);e.a=function(e){var r,o,c=e.app,l=(e.store,null===(r=t)||void 0===r||null===(r=r.env)||void 0===r?void 0:"https://xjjeyccncvvwigqgsrrg.supabase.co");c.$axios=c.$axios.create({headers:{apiKey:null===(o=t)||void 0===o||null===(o=o.env)||void 0===o?void 0:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqamV5Y2NuY3Z2d2lncWdzcnJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0NzE3NjEsImV4cCI6MjAxMjA0Nzc2MX0.F2Kx403IhhG_8zQXshNnrXv5AM71DtTl2lnLEMBbEZ8",common:{Accept:"*/*","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},Authorization:"Bearer ".concat(localStorage.getItem("access_token"))}}),c.$axios.setBaseURL(l),Object(n.b)(c.$axios)}}).call(this,r(158))},247:function(t,e,r){"use strict";var n=r(3),o=r(254);r(518);e.a=function(t){var e=t.app;n.a.use(o.p,{vuetify:e.vuetify,iconsGroup:"mdi"})}},303:function(t,e,r){var content=r(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("fca07e04",content,!0,{sourceMap:!1})},304:function(t,e,r){var content=r(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("e33c9258",content,!0,{sourceMap:!1})},305:function(t,e,r){var content=r(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("308f380e",content,!0,{sourceMap:!1})},306:function(t,e,r){var content=r(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("338b4e17",content,!0,{sourceMap:!1})},343:function(t,e,r){"use strict";r(17);var n={mounted:function(){var t=JSON.parse(localStorage.getItem("user")),e=localStorage.getItem("access_token"),r=localStorage.getItem("refresh_token");t&&this.$store.commit("auth/SET_USER",{user:t,access_token:e,refresh_token:r})}},o=(r(400),r(72)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("the-header"),t._v(" "),e("Nuxt"),t._v(" "),e("the-footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{TheHeader:r(520).default,TheFooter:r(521).default})},344:function(t,e,r){"use strict";r(17);var n={mounted:function(){var t=JSON.parse(localStorage.getItem("user")),e=localStorage.getItem("access_token"),r=localStorage.getItem("refresh_token");t&&this.$store.commit("auth/SET_USER",{user:t,access_token:e,refresh_token:r})}},o=(r(406),r(72)),component=Object(o.a)(n,(function(){var t=this._self._c;return t("div",{attrs:{id:"app"}},[t("Nuxt")],1)}),[],!1,null,"452cc78d",null);e.a=component.exports},348:function(t,e,r){r(349),t.exports=r(350)},385:function(t,e,r){"use strict";r.r(e);var n=r(6);r(50),r(36);function o(){return(o=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,o,c,l,f,v,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.store,l=e.redirect,f=e.from,v=null==c||null===(r=c.state)||void 0===r||null===(r=r.auth)||void 0===r?void 0:r.user,null==c||null===(n=c.state)||void 0===n||null===(n=n.auth)||void 0===n?void 0:n.status,null==f?void 0:f.name,t.next=6,c.dispatch("auth/me");case 6:if(200==(null==c||null===(o=c.state)||void 0===o||null===(o=o.auth)||void 0===o?void 0:o.status)){t.next=10;break}return t.next=10,c.dispatch("auth/refreshToken",{refresh_token:localStorage.getItem("refresh_token")});case 10:if(null!=v){t.next=13;break}return v=null==c||null===(m=c.state)||void 0===m?void 0:m.auth.user,t.abrupt("return",l("/auth/signin"));case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.default=function(t){return o.apply(this,arguments)}},386:function(t,e,r){"use strict";r.r(e);var n=r(6);r(50);function o(){return(o=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.store,n=e.redirect,e.from,o=r.state.auth.user,r.state.auth.isLoggedIn,!o){t.next=8;break}return t.next=6,r.dispatch("auth/me");case 6:return o=r.state.auth.user,t.abrupt("return",n("/"));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.default=function(t){return o.apply(this,arguments)}},400:function(t,e,r){"use strict";r(303)},401:function(t,e,r){var n=r(23)((function(i){return i[1]}));n.push([t.i,":root{--bg-color-1:#fff8d6;--bg-color-2:#f7e1ae;--bg-color-3:#fffde3;--text-color:#32502e;--color4:#406343}#app{font-size:16px}",""]),n.locals={},t.exports=n},402:function(t,e,r){"use strict";r(304)},403:function(t,e,r){var n=r(23)((function(i){return i[1]}));n.push([t.i,"nav[data-v-968bed7e]{padding:1rem}.navbar[data-v-968bed7e]{font-size:1.2rem}.navbar-nav[data-v-968bed7e]{margin-left:auto}.nav-link[data-v-968bed7e]{color:var(--text-color)}",""]),n.locals={},t.exports=n},404:function(t,e,r){"use strict";r(305)},405:function(t,e,r){var n=r(23)((function(i){return i[1]}));n.push([t.i,".footer[data-v-6d4eb06b]{background:#f7e1ae}.nav-footer[data-v-6d4eb06b]{list-style-type:none}.nav-footer li[data-v-6d4eb06b]{padding-bottom:10px}.nav-footer-link[data-v-6d4eb06b]{color:#000;font-size:1.2rem;-webkit-text-decoration:none;text-decoration:none}",""]),n.locals={},t.exports=n},406:function(t,e,r){"use strict";r(306)},407:function(t,e,r){var n=r(23)((function(i){return i[1]}));n.push([t.i,"#app[data-v-452cc78d]{background:#f8f9fd;min-height:100vh;padding:7em 0}",""]),n.locals={},t.exports=n},520:function(t,e,r){"use strict";r.r(e);r(17),r(19),r(20),r(8),r(21),r(18),r(22);var n=r(6),o=r(4),c=(r(50),r(92));function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v={computed:f({},Object(c.c)("auth",["user"])),mounted:function(){},methods:f(f({},Object(c.b)("auth",["logout"])),{},{handleLogout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.logout();case 3:t.$router.push("/auth/signin"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}})},m=(r(402),r(72)),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-light py-4 px-4",staticStyle:{"background-color":"#F7E1AE"}},[e("div",{staticClass:"container"},[e("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("MaPaYa")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"collapse navbar-collapse me-auto",attrs:{id:"navbarToggler"}},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item pe-5"},[e("nuxt-link",{staticClass:"nav-link",attrs:{"aria-current":"page",to:"/"}},[t._v("Beranda")])],1),t._v(" "),e("li",{staticClass:"nav-item pe-5"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"#"}},[t._v("Bahan Masakan")])],1),t._v(" "),e("li",{staticClass:"nav-item pe-5"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"#"}},[t._v("Resep")])],1)])]),t._v(" "),t.user?e("div",[e("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){return t.handleLogout()}}},[t._v("Sign Out")])]):e("div",[e("nuxt-link",{staticClass:"btn",attrs:{to:"/auth/signup"}},[t._v("Register")]),t._v(" "),e("nuxt-link",{staticClass:"btn",attrs:{to:"/auth/signin"}},[t._v("Log In")])],1)],1)])}),[function(){var t=this._self._c;return t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarToggler","aria-controls":"navbarToggler","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"navbar-toggler-icon"})])}],!1,null,"968bed7e",null);e.default=component.exports},521:function(t,e,r){"use strict";r.r(e);r(404);var n=r(72),component=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer pt-4"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-md-2 text-start offset-md-1 col-12"},[e("ul",{staticClass:"nav-footer"},[e("li",[e("nuxt-link",{staticClass:"nav-footer-link",attrs:{to:"/"}},[t._v("Beranda")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"nav-footer-link",attrs:{to:"/menu"}},[t._v("Bahan Masakan")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"nav-footer-link",attrs:{to:"/blog"}},[t._v("Resep")])],1)])]),t._v(" "),t._m(1)]),t._v(" "),e("hr"),t._v(" "),t._m(2)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-4 text-start ps-5 col-12"},[e("h1",[t._v("Makan apa ya Hari ini?")]),t._v(" "),e("p",[t._v("Menyediakan Berbagai macam resep masakan")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-2 text-start offset-md-1 col-12"},[e("h5",[t._v("Get Connected")]),t._v(" "),e("ul",{staticClass:"list-unstyled"},[e("li",[t._v("Indramayu")]),t._v(" "),e("li",[t._v("Indonesia")]),t._v(" "),e("li",[t._v("mapaya@gmail.com")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 ps-5"},[e("p",[t._v("Copyright 2023 Mapaya")])]),t._v(" "),e("div",{staticClass:"col-md-6"})])}],!1,null,"6d4eb06b",null);e.default=component.exports},522:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(50),r(59)),c=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.get("/rest/v1/articles?select=*"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.get("/rest/v1/articles?id=eq.".concat(e,"&select=*")));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.get("/rest/v1/articles?id=eq.".concat(e,"&select=id,comments(*)")));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(body){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.post("/rest/v1/articles",body,{headers:{"Content-Type":"application/json",Prefer:"return=minimal"}}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e,body){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.patch("/rest/v1/articles?id=eq.".concat(e),body,{headers:{"Content-Type":"application/json",Prefer:"return=minimal"}}));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),d=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.delete("/rest/v1/articles?id=eq.".concat(e)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.default={namespaced:!0,state:function(){return{articles:[],article:null,currentPage:1,perPage:10,status:!1,message:""}},getters:{},mutations:{SET_RESPONSE:function(t,e){var r=e.message,n=e.status;t.message=r,t.status=n},SET_ARTICLES:function(t,e){t.articles=e},SET_ARTICLE:function(t,article){t.article=article}},actions:{fetchArticles:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,c();case 4:200===(n=e.sent).status&&(o=null==n?void 0:n.data,l=n.status,f=n.statusText,r("SET_RESPONSE",{statusText:f,status:l}),r("SET_ARTICLES",o)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},fetchDetailArticle:function(t,e){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,article,c,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.prev=1,r.next=4,l(e);case 4:200===(o=r.sent).status&&(article=null==o?void 0:o.data,c=o.status,f=o.statusText,n("SET_RESPONSE",{statusText:f,status:c}),n("SET_ARTICLE",article[0])),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),console.error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()},fetchCommentArticle:function(t,e){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,c,l,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.prev=1,r.next=4,f(e);case 4:200===(o=r.sent).status&&(c=null==o?void 0:o.data,l=o.status,v=o.statusText,n("SET_RESPONSE",{statusText:v,status:l}),n("SET_ARTICLE",c)),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),console.error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()},storeArticle:function(t,body){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,v(body);case 4:n=e.sent,console.log(n),200===n.status&&(o=n.status,c=n.statusText,r("SET_RESPONSE",{statusText:c,status:o})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},editArticle:function(t,e){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,body,c,l,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,o=e.id,body=e.body,r.prev=2,r.next=5,m(o,body);case 5:200===(c=r.sent).status&&(l=c.status,f=c.statusText,n("SET_RESPONSE",{statusText:f,status:l})),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),console.error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])})))()},removeArticle:function(t,e){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.prev=1,r.next=4,d(e);case 4:o=r.sent,console.log(o),200===o.status&&(c=o.status,l=o.statusText,n("SET_RESPONSE",{statusText:l,status:c})),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),console.error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()}}}},523:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(50),r(17),r(83)),c=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(body){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.post("/auth/v1/token?grant_type=password",body));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(body){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.post("/auth/v1/token?grant_type=refresh_token",body));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(body){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.post("/auth/v1/signup",body));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(body){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.post("/auth/v1/magiclink",body));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(body,e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.put("/auth/v1/user",body,{headers:{Authorization:"Bearer "+e}}));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),d=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.post("/auth/v1/logout"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.get("/auth/v1/user"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e.default={namespaced:!0,state:function(){return{user:JSON.parse(localStorage.getItem("user")),access_token:null,refresh_token:null,isLoggedIn:!1,status:!1,message:""}},getters:{getUser:function(t){return t.user}},mutations:{SET_RESPONSE:function(t,e){var r=e.message,n=e.status;t.message=r,t.status=n},SET_USER:function(t,e){var r=e.user,n=e.access_token,o=e.refresh_token;t.user=r,t.access_token=n,t.refresh_token=o,t.isLoggedIn=!0},RESET_TOKEN:function(t){t.user=null,t.access_token=null,t.refresh_token=null,localStorage.clear()}},actions:{login:function(t,body){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,f,v,m,d,h,x,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,c(body);case 4:200==(null==(n=e.sent)?void 0:n.status)&&(v=n.status,m=n.statusText,d=null===(o=n.data)||void 0===o?void 0:o.user,h=null===(l=n.data)||void 0===l?void 0:l.access_token,x=null===(f=n.data)||void 0===f?void 0:f.refresh_token,localStorage.setItem("user",JSON.stringify(d)),localStorage.setItem("access_token",h),localStorage.setItem("refresh_token",x),r("SET_RESPONSE",{statusText:m,status:v}),r("SET_USER",{user:d,access_token:h,refresh_token:x})),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(1),console.error(e.t0),null===e.t0||void 0===e.t0||null===(_=e.t0.response)||void 0===_?void 0:_.data;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()},register:function(t,body){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,f(body);case 4:200==(null==(n=e.sent)?void 0:n.status)&&(o=n.status,c=n.statusText,r("SET_RESPONSE",{statusText:c,status:o})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},logout:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,d();case 4:200==(null==(n=e.sent)?void 0:n.status)&&(o=n.status,c=n.statusText,r("SET_RESPONSE",{statusText:c,status:o}),r("RESET_TOKEN")),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),r("RESET_TOKEN"),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()},forgotPassword:function(t,body){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,v(body);case 4:200==(null==(n=e.sent)?void 0:n.status)&&(o=n.status,c=n.statusText,r("SET_RESPONSE",{statusText:c,status:o})),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.t0.response.data;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()},resetPassword:function(t,e){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,body,o,c,l,f,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,body=e.body,o=e.token,r.prev=2,r.next=5,m(body,o);case 5:200==(null==(c=r.sent)?void 0:c.status)&&(l=c.status,f=c.statusText,n("SET_RESPONSE",{statusText:f,status:l})),r.next=13;break;case 9:throw r.prev=9,r.t0=r.catch(2),console.error(r.t0),null===r.t0||void 0===r.t0||null===(v=r.t0.response)||void 0===v?void 0:v.data;case 13:case"end":return r.stop()}}),r,null,[[2,9]])})))()},me:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l,f,v,m,d,x,_,k,S;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,h();case 4:200===(n=e.sent).status&&(f=n.status,v=n.statusText,m=null===(o=n.data)||void 0===o?void 0:o.user,d=null===(c=n.data)||void 0===c?void 0:c.access_token,x=null===(l=n.data)||void 0===l?void 0:l.refresh_token,localStorage.setItem("user",JSON.stringify(m)),localStorage.setItem("access_token",d),localStorage.setItem("refresh_token",x),r("SET_RESPONSE",{statusText:v,status:f}),r("SET_USER",{user:m,access_token:d,refresh_token:x})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),_=null===e.t0||void 0===e.t0?void 0:e.t0.response,k=_.status,S=_.statusText,r("SET_RESPONSE",{statusText:S,status:k});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()},refreshToken:function(t,body){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,f,v,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,l(body);case 4:200===(n=e.sent).status&&(o=n.status,c=n.statusText,f=JSON.parse(localStorage.getItem("user")),v=localStorage.getItem("access_token"),m=localStorage.getItem("refresh_token"),r("SET_RESPONSE",{statusText:c,status:o}),r("SET_USER",{user:f,access_token:v,refresh_token:m})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},isLoggedIn:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h();case 3:if(200!==t.sent.status){t.next=6;break}return t.abrupt("return",!0);case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}}},524:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(50),r(59)),c=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.get("/rest/v1/informations?select=*"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.get("/rest/v1/informations?id=eq.".concat(e,"&select=*")));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(body){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.post("/rest/v1/informations",body,{headers:{"Content-Type":"application/json",Prefer:"return=minimal"}}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e,body){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.patch("/rest/v1/informations?id=eq.".concat(e),body,{headers:{"Content-Type":"application/json",Prefer:"return=minimal"}}));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),m=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.delete("/rest/v1/informations?id=eq.".concat(e)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.default={namespaced:!0,state:function(){return{informations:[],information:null,currentPage:1,perPage:10,status:!1,message:""}},getters:{},mutations:{SET_RESPONSE:function(t,e){var r=e.message,n=e.status;t.message=r,t.status=n},SET_INFORMATIONS:function(t,e){t.informations=e},SET_INFORMATION:function(t,e){t.information=e}},actions:{fetchInformations:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,c();case 4:200===(n=e.sent).status&&(o=null==n?void 0:n.data,l=n.status,f=n.statusText,r("SET_RESPONSE",{statusText:f,status:l}),r("SET_INFORMATIONS",o)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},fetchDetailInformation:function(t,e){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,c,f,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.prev=1,r.next=4,l(e);case 4:200===(o=r.sent).status&&(c=null==o?void 0:o.data,f=o.status,v=o.statusText,n("SET_RESPONSE",{statusText:v,status:f}),n("SET_INFORMATION",c[0])),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),console.error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()},storeInformation:function(t,body){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,f(body);case 4:n=e.sent,console.log(n),200===n.status&&(o=n.status,c=n.statusText,r("SET_RESPONSE",{statusText:c,status:o})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},editInformation:function(t,e){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,body,c,l,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,o=e.id,body=e.body,r.prev=2,r.next=5,v(o,body);case 5:200===(c=r.sent).status&&(l=c.status,f=c.statusText,n("SET_RESPONSE",{statusText:f,status:l})),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),console.error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])})))()},removeInformation:function(t,e){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.prev=1,r.next=4,m(e);case 4:o=r.sent,console.log(o),200===o.status&&(c=o.status,l=o.statusText,n("SET_RESPONSE",{statusText:l,status:c})),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),console.error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()}}}},525:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(50),r(115)),c=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path,body){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.post("/storage/v1/object/".concat(path),body));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),l=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e,body){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.post("/storage/v1/object/list/".concat(e),body));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}();e.default={namespaced:!0,state:function(){return{images:[],image:"",currentPage:1,perPage:10,status:!1,message:""}},getters:{},mutations:{SET_RESPONSE:function(t,e){var r=e.message,n=e.status;t.message=r,t.status=n},SET_IMAGES:function(t,e){t.images=e},SET_IMAGE:function(t,image){t.image=image}},actions:{uploadFile:function(t,e){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,body,l,image,f,v,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,o=e.file,body=e.body,r.prev=2,r.next=5,c(o,body);case 5:200===(l=r.sent).status&&(image=l.data,f=l.status,v=l.statusText,n("SET_RESPONSE",{statusText:v,status:f}),n("SET_IMAGE",image.Key)),r.next=13;break;case 9:throw r.prev=9,r.t0=r.catch(2),console.error(r.t0),null===r.t0||void 0===r.t0||null===(m=r.t0.response)||void 0===m?void 0:m.data;case 13:case"end":return r.stop()}}),r,null,[[2,9]])})))()},images:function(t,path){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,f,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,l(path);case 4:n=e.sent,console.log(n),200===n.status&&(o=null==n?void 0:n.data,c=n.status,f=n.statusText,r("SET_RESPONSE",{statusText:f,status:c}),r("SET_IMAGES",o)),e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(1),console.error(e.t0),null===e.t0||void 0===e.t0||null===(v=e.t0.response)||void 0===v?void 0:v.data;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}}},59:function(t,e,r){"use strict";r.d(e,"b",(function(){return o}));var n;r(8);function o(t){n=t}var c={};["request","delete","get","head","options","post","put","patch"].forEach((function(t){c[t]=function(){var e;if(!n)throw new Error("httpClient not installed");return null===(e=n[t])||void 0===e?void 0:e.apply(null,arguments)}})),e.a=c},83:function(t,e,r){"use strict";r.d(e,"b",(function(){return o}));var n;r(8);function o(t){n=t}var c={};["request","delete","get","head","options","post","put","patch"].forEach((function(t){c[t]=function(){var e;if(!n)throw new Error("httpClient not installed");return null===(e=n[t])||void 0===e?void 0:e.apply(null,arguments)}})),e.a=c}},[[348,19,1,20]]]);