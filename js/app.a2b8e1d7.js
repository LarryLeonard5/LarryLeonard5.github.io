(function(t){function e(e){for(var o,n,u=e[0],l=e[1],s=e[2],i=0,d=[];i<u.length;i++)n=u[i],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);p&&p(e);while(d.length)d.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],o=!0,n=1;n<r.length;n++){var u=r[n];0!==a[u]&&(o=!1)}o&&(c.splice(e--,1),t=l(l.s=r[0]))}return t}var o={},n={app:0},a={app:0},c=[];function u(t){return l.p+"js/"+({about:"about",contact:"contact","gallery~products":"gallery~products",gallery:"gallery",products:"products",orders:"orders"}[t]||t)+"."+{about:"cee471c1",contact:"4979afed","gallery~products":"413b44af",gallery:"0cf56db7",products:"9247173f",orders:"5755dd12"}[t]+".js"}function l(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(t){var e=[],r={about:1,contact:1,gallery:1,products:1,orders:1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=new Promise((function(e,r){for(var o="css/"+({about:"about",contact:"contact","gallery~products":"gallery~products",gallery:"gallery",products:"products",orders:"orders"}[t]||t)+"."+{about:"d5d006c6",contact:"ec4f287a","gallery~products":"31d6cfe0",gallery:"c66e1ccc",products:"69b96e61",orders:"3f64806b"}[t]+".css",a=l.p+o,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],i=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===o||i===a))return e()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],i=s.getAttribute("data-href");if(i===o||i===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var o=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete n[t],p.parentNode.removeChild(p),r(c)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){n[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var c=new Promise((function(e,r){o=a[t]=[e,r]}));e.push(o[2]=c);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=u(t);var d=new Error;s=function(e){i.onerror=i.onload=null,clearTimeout(p);var r=a[t];if(0!==r){if(r){var o=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",d.name="ChunkLoadError",d.type=o,d.request=n,r[1](d)}a[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(e)},l.m=t,l.c=o,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(r,o,function(e){return t[e]}.bind(null,o));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var p=i;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"034f":function(t,e,r){"use strict";r("85ec")},"0e1f":function(t,e,r){t.exports=r.p+"img/6-Chairs-and-table-on-Deck-01-03-17-09.c5ac60bd.jpg"},"85ec":function(t,e,r){},aaca:function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t._m(0),r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),r("router-link",{attrs:{to:"/products"}},[t._v("Products")]),t._v(" | "),r("router-link",{attrs:{to:"/gallery"}},[t._v("Custom Works")]),t._v(" | "),r("router-link",{attrs:{to:"/orders"}},[t._v("Orders")]),t._v(" | "),r("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),r("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1),r("div",{staticClass:"content"},[r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("router-view")],1)],1)])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("div",{staticClass:"logo"},[r("div",{staticClass:"logo-text"},[t._v(" Leisure "),r("div",{staticClass:"logo-text-spacer"}),t._v(" Cedar ")])])])}],c=(r("034f"),r("2877")),u={},l=Object(c["a"])(u,n,a,!1,null,null,null),s=l.exports,i=r("8c4f"),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("router-link",{attrs:{to:"/products/royal-suite"}},[o("img",{attrs:{src:r("0e1f")}})]),t._m(0)],1)},p=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"copy"},[r("div",{staticClass:"heading"},[r("h1",[t._v("Royal Suite")])]),r("p",[t._v(" Leisure Cedar is an exciting company manufacturing value added outdoor recreational furniture from local cedar wood. We have been making high quality, comfortable outdoor furniture for the past twenty years. ")]),r("p")])}],f=(r("f96c"),{}),m=Object(c["a"])(f,d,p,!1,null,"451da0c4",null),v=m.exports;o["a"].use(i["a"]);const h=[{path:"/",name:"Home",component:v},{path:"/about",name:"About",component:()=>r.e("about").then(r.bind(null,"f820"))},{path:"/contact",name:"Contact",component:()=>r.e("contact").then(r.bind(null,"b8fa"))},{path:"/gallery",name:"Gallery",component:()=>Promise.all([r.e("gallery~products"),r.e("gallery")]).then(r.bind(null,"0d77"))},{path:"/orders",name:"Orders",component:()=>r.e("orders").then(r.bind(null,"159d"))},{path:"/products",name:"Products",component:()=>Promise.all([r.e("gallery~products"),r.e("products")]).then(r.bind(null,"e6dc"))},{path:"/products/:id",name:"Product",component:()=>Promise.all([r.e("gallery~products"),r.e("products")]).then(r.bind(null,"d2f1"))}],g=new i["a"]({routes:h});var y=g;o["a"].config.productionTip=!1,new o["a"]({router:y,render:t=>t(s)}).$mount("#app")},f96c:function(t,e,r){"use strict";r("aaca")}});
//# sourceMappingURL=app.a2b8e1d7.js.map