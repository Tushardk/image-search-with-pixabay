(function(e){function t(t){for(var i,s,o=t[0],c=t[1],u=t[2],l=0,d=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],i=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(i=!1)}i&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var i={},n={app:0},a=[];function s(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=i,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(r,i,function(t){return e[t]}.bind(null,i));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var p=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var i=r("85ec"),n=r.n(i);n.a},5413:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var i=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("appheader"),this.$store.getters.loading?r("Loader"):e._e(),r("appbody"),r("appfooter")],1)},a=[],s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"loaderCont"}},[r("div",{attrs:{id:"loader"}},[r("div",{staticClass:"lds-hourglass"})])])}],c={},u=c,p=(r("bbd3"),r("2877")),l=Object(p["a"])(u,s,o,!1,null,"b44988c6",null),d=l.exports,v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app-header"}},[r("h1",[e._v("Image Search with Pixabay")])])}],h={name:"app-header"},w=h,m=(r("b4eb"),Object(p["a"])(w,v,f,!1,null,"2cf04d68",null)),g=m.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app-body"}},[r("searchbar"),r("preview")],1)},_=[],x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"search-result"}},[r("div",{attrs:{id:"search"}},[r("input",{ref:"searchterm",attrs:{type:"text",name:"search-bar",id:"search-bar",value:"hills"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchApi(t)}}}),r("button",{attrs:{id:"search-button"},on:{click:e.searchApi}},[e._v("Search")])]),e.$store.getters.results?r("div",{attrs:{id:"result"}},[e.$store.getters.results.data.hits.length>0?r("div",e._l(e.$store.getters.results.data.hits,(function(t){return r("span",{key:t.id},[r("img",{attrs:{src:t.previewURL,alt:t.tags,"data-large-image-url":t.largeImageURL},on:{click:function(r){e.loadpreview(e.$store.getters.results.data.hits.indexOf(t),"direct")}}})])})),0):r("div",[e._v("Please enter appropriate search term")])]):e._e()])},y=[],A=r("bc3a"),$=r.n(A),O={methods:{loadpreview:function(e,t){this.$store.dispatch("currentpreview",[e,t])}}},k={name:"search-bar",data(){return{apikey:"15730940-7551094251995cb8e814b5f55",errors:{}}},mixins:[O],mounted(){this.searchApi()},computed:{currentpreview(){return this.$store.getters.currentpreview}},methods:{searchApi:function(){this.$store.commit("loading",!0);let e="https://pixabay.com/api/?key=",t="&q="+this.$refs.searchterm.value,r="&safesearch=true",i="&min_width=200px",n="&min_height=200px",a=e+this.apikey+t+i+n+r;$.a.get(a).then(e=>{this.$store.dispatch("captureResult",e),this.$store.dispatch("firstpreview",0),this.$store.dispatch("loading",!1)})}}},j=k,E=(r("da54"),Object(p["a"])(j,x,y,!1,null,"34b1193a",null)),P=E.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"preview"}},[r("span",{attrs:{id:"prev"},on:{click:e.prev}},[e._v("<")]),r("div",{attrs:{id:"preview-image"}},[r("img",{ref:"preview",attrs:{src:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",alt:""}})]),r("span",{attrs:{id:"next"},on:{click:e.next}},[e._v(">")]),e.previewloading?r("div",{attrs:{id:"preview-loader"}},[e._m(0)]):e._e()])},S=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"loader"}},[r("div",{staticClass:"lds-hourglass"})])}],C={name:"preview",data(){return{}},mixins:[O],computed:{currentpreview(){return this.$store.getters.currentpreview},currentpreviewindex(){return this.$store.getters.currentpreviewindex},previewloading(){return this.$store.getters.previewloading}},methods:{prev:function(){this.$store.dispatch("currentpreview",[this.currentpreviewindex-1,"prev"])},next:function(){this.$store.dispatch("currentpreview",[this.currentpreviewindex+1,"next"])}},watch:{currentpreview(){let e=this;this.$store.dispatch("previewloading",!0),this.$refs.preview.src=this.currentpreview,this.$refs.preview.onload=function(){e.$store.dispatch("previewloading",!1)}}}},L=C,I=(r("94fd"),Object(p["a"])(L,R,S,!1,null,"622e306c",null)),M=I.exports,T={name:"app-body",components:{searchbar:P,preview:M},methods:{}},B=T,N=(r("dfc6"),Object(p["a"])(B,b,_,!1,null,"b492631c",null)),U=N.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app-footer"}},[e._v("© Tushar Kshirsagar - kshirsagartd@gmail.com")])},q=[],D={name:"app-footer"},G=D,H=(r("dbe9"),Object(p["a"])(G,J,q,!1,null,"3e96d9b4",null)),K=H.exports,Q={name:"App",components:{Loader:d,appheader:g,appbody:U,appfooter:K}},z=Q,F=(r("034f"),Object(p["a"])(z,n,a,!1,null,null,null)),V=F.exports,W=r("2f62");i["a"].use(W["a"]);const X=new W["a"].Store({state:{loading:!1,previewloading:!1,results:null,currentpreview:"",currentpreviewindex:0},getters:{results:e=>e.results,loading:e=>e.loading,previewloading:e=>e.previewloading,currentpreview:e=>e.currentpreview,currentpreviewindex:e=>e.currentpreviewindex},mutations:{captureResult(e,t){e.results=t},loading(e,t){e.loading=t},previewloading(e,t){e.previewloading=t},currentpreview(e,t){"first"===t[1]||"direct"===t[1]||t[0]>=0&&"prev"===t[1]||t[0]<20&&"next"===t[1]?(e.currentpreviewindex=t[0],e.currentpreview=e.results.data.hits[e.currentpreviewindex]["largeImageURL"]):"prev"===t[1]?console.log("No Prev"):console.log("No Next")},firstpreview(e,t){this.commit("currentpreview",[t,"first"])}},actions:{captureResult(e,t){e.commit("captureResult",t)},loading(e,t){e.commit("loading",t)},previewloading(e,t){e.commit("previewloading",t)},currentpreview(e,t){e.commit("currentpreview",t)},firstpreview(e,t){e.commit("firstpreview",t)}}});var Y=X;i["a"].config.productionTip=!1,new i["a"]({store:Y,render:e=>e(V)}).$mount("#app")},"85ec":function(e,t,r){},"94fd":function(e,t,r){"use strict";var i=r("5413"),n=r.n(i);n.a},a135:function(e,t,r){},b4eb:function(e,t,r){"use strict";var i=r("a135"),n=r.n(i);n.a},b54b:function(e,t,r){},bbd3:function(e,t,r){"use strict";var i=r("e86b"),n=r.n(i);n.a},da54:function(e,t,r){"use strict";var i=r("fece"),n=r.n(i);n.a},dbe9:function(e,t,r){"use strict";var i=r("e7c7"),n=r.n(i);n.a},dfc6:function(e,t,r){"use strict";var i=r("b54b"),n=r.n(i);n.a},e7c7:function(e,t,r){},e86b:function(e,t,r){},fece:function(e,t,r){}});
//# sourceMappingURL=app.7e6d91fd.js.map