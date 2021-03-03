// { "framework": "Vue"} 

!function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=20)}([function(t,e,n){var i,a,r=[];r.push(n(1)),i=n(2);var o=n(3);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a["@render"]=o["@render"],a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-cab8061c",a.style=a.style||{},r.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,r),t.exports=i},function(t,e){t.exports={"background-animation-wrapper":{width:70,height:70,marginTop:10,marginRight:10,marginBottom:10,marginLeft:10,backgroundColor:"#15D0B4"}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=weex.requireModule("animation"),a=new Map([[0,"#F1CA19"],[1,"#15D0B4"]]);e.default={name:"AnimationBackground",props:{index:Number,default:-1},data:function(){return{ref:null,nextKey:0,nextColor:a.get(0)}},mounted:function(){this.ref=this.$refs["background-animation"],this.startAnimation()},methods:{startAnimation:function(){var t=this;i.transition(this.ref,{styles:{backgroundColor:this.nextColor},duration:1e3,timingFunction:"linear",needLayout:!1,delay:0},function(){t.setNextColor(),t.startAnimation()})},setNextColor:function(){this.nextKey=this.nextKey+1,this.nextKey=a.has(this.nextKey)?this.nextKey:0,this.nextColor=a.get(this.nextKey)}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"background-animation",staticClass:["background-animation-wrapper"]},[t.index>-1?n("text",{staticStyle:{textAlign:"center"}},[t._v(t._s(t.index))]):t._e()])},"@render":function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["background-animation-wrapper"],attrs:{"@isComponentRoot":!0,"@templateId":t._uid,"@componentProps":t.$props||{},ref:"background-animation"}},[n("text",{staticStyle:{textAlign:"center"},attrs:{"[[match]]":"index>-1",value:{"@binding":"index"}}})])},staticRenderFns:[]}},function(t,e,n){var i,a,r=[];r.push(n(5)),i=n(6);var o=n(7);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a["@render"]=o["@render"],a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-7c4ee66d",a.style=a.style||{},r.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,r),t.exports=i},function(t,e){t.exports={"position-animation-wrapper":{width:70,height:70,marginTop:10,marginRight:10,marginBottom:10,marginLeft:10,backgroundColor:"#15D0B4"}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=weex.requireModule("animation"),a=new Map([[0,"translate(20, 0)"],[1,"translate(0, 0)"]]);e.default={name:"PositionBackground",props:{index:Number,default:-1},data:function(){return{ref:null,nextKey:0,nextPosition:a.get(0)}},mounted:function(){this.ref=this.$refs["position-animation"],this.startAnimation()},methods:{startAnimation:function(){var t=this;i.transition(this.ref,{styles:{transform:this.nextPosition},duration:1e3,timingFunction:"linear",needLayout:!1,delay:0},function(){t.setNextPosition(),t.startAnimation()})},setNextPosition:function(){this.nextKey=this.nextKey+1,this.nextKey=a.has(this.nextKey)?this.nextKey:0,this.nextPosition=a.get(this.nextKey)}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"position-animation",staticClass:["position-animation-wrapper"]},[t.index>-1?n("text",{staticStyle:{textAlign:"center"}},[t._v(t._s(t.index))]):t._e()])},"@render":function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["position-animation-wrapper"],attrs:{"@isComponentRoot":!0,"@templateId":t._uid,"@componentProps":t.$props||{},ref:"position-animation"}},[n("text",{staticStyle:{textAlign:"center"},attrs:{"[[match]]":"index>-1",value:{"@binding":"index"}}})])},staticRenderFns:[]}},function(t,e,n){var i,a,r=[];r.push(n(9)),i=n(10);var o=n(11);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a["@render"]=o["@render"],a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-2b57c077",a.style=a.style||{},r.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,r),t.exports=i},function(t,e){t.exports={"opacity-animation-wrapper":{width:70,height:70,marginTop:10,marginRight:10,marginBottom:10,marginLeft:10,backgroundColor:"#15D0B4"}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=weex.requireModule("animation"),a=new Map([[0,"0"],[1,"1"]]);e.default={name:"OpacityBackground",props:{index:Number,default:-1},data:function(){return{ref:null,nextKey:0,nextOpacity:a.get(0)}},mounted:function(){this.ref=this.$refs["opacity-animation"],this.startAnimation()},methods:{startAnimation:function(){var t=this;i.transition(this.ref,{styles:{opacity:this.nextOpacity},duration:1e3,timingFunction:"linear",needLayout:!1,delay:0},function(){t.setNextOpacity(),t.startAnimation()})},setNextOpacity:function(){this.nextKey=this.nextKey+1,this.nextKey=a.has(this.nextKey)?this.nextKey:0,this.nextOpacity=a.get(this.nextKey)}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"opacity-animation",staticClass:["opacity-animation-wrapper"]},[t.index>-1?n("text",{staticStyle:{textAlign:"center"}},[t._v(t._s(t.index))]):t._e()])},"@render":function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["opacity-animation-wrapper"],attrs:{"@isComponentRoot":!0,"@templateId":t._uid,"@componentProps":t.$props||{},ref:"opacity-animation"}},[n("text",{staticStyle:{textAlign:"center"},attrs:{"[[match]]":"index>-1",value:{"@binding":"index"}}})])},staticRenderFns:[]}},function(t,e,n){var i,a,r=[];r.push(n(13)),i=n(14);var o=n(15);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a["@render"]=o["@render"],a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-2bd99c9f",a.style=a.style||{},r.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,r),t.exports=i},function(t,e){t.exports={"rotate-animation-wrapper":{width:70,height:70,marginTop:10,marginRight:10,marginBottom:10,marginLeft:10,backgroundColor:"#15D0B4"}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=weex.requireModule("animation"),a=new Map([[0,"rotate(0)"],[1,"rotate(360deg)"]]);e.default={name:"AnimationRotate",props:{index:Number,default:-1},data:function(){return{ref:null,nextKey:0,nextRotate:a.get(0)}},mounted:function(){this.ref=this.$refs["rotate-animation"],this.startAnimation()},methods:{startAnimation:function(){var t=this;i.transition(this.ref,{styles:{transform:this.nextRotate},duration:1e3,timingFunction:"linear",needLayout:!1,delay:0},function(){t.setNextRotate(),t.startAnimation()})},setNextRotate:function(){this.nextKey=this.nextKey+1,this.nextKey=a.has(this.nextKey)?this.nextKey:0,this.nextRotate=a.get(this.nextKey)}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"rotate-animation",staticClass:["rotate-animation-wrapper"]},[t.index>-1?n("text",{staticStyle:{textAlign:"center"}},[t._v(t._s(t.index))]):t._e()])},"@render":function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["rotate-animation-wrapper"],attrs:{"@isComponentRoot":!0,"@templateId":t._uid,"@componentProps":t.$props||{},ref:"rotate-animation"}},[n("text",{staticStyle:{textAlign:"center"},attrs:{"[[match]]":"index>-1",value:{"@binding":"index"}}})])},staticRenderFns:[]}},function(t,e,n){var i,a,r=[];r.push(n(17)),i=n(18);var o=n(19);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a["@render"]=o["@render"],a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-95fac954",a.style=a.style||{},r.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,r),t.exports=i},function(t,e){t.exports={"scale-animation-wrapper":{width:70,height:70,marginTop:10,marginRight:10,marginBottom:10,marginLeft:10,backgroundColor:"#15D0B4"}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=weex.requireModule("animation"),a=new Map([[0,"scale(0.5)"],[1,"scale(1)"]]);e.default={name:"AnimationScale",props:{index:Number,default:-1},data:function(){return{ref:null,nextKey:0,nextScale:a.get(0)}},mounted:function(){this.ref=this.$refs["scale-animation"],this.startAnimation()},methods:{startAnimation:function(){var t=this;i.transition(this.ref,{styles:{transform:this.nextScale},duration:1e3,timingFunction:"linear",needLayout:!1,delay:0},function(){t.setNextScale(),t.startAnimation()})},setNextScale:function(){this.nextKey=this.nextKey+1,this.nextKey=a.has(this.nextKey)?this.nextKey:0,this.nextScale=a.get(this.nextKey)}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"scale-animation",staticClass:["scale-animation-wrapper"]},[t.index>-1?n("text",{staticStyle:{textAlign:"center"}},[t._v(t._s(t.index))]):t._e()])},"@render":function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["scale-animation-wrapper"],attrs:{"@isComponentRoot":!0,"@templateId":t._uid,"@componentProps":t.$props||{},ref:"scale-animation"}},[n("text",{staticStyle:{textAlign:"center"},attrs:{"[[match]]":"index>-1",value:{"@binding":"index"}}})])},staticRenderFns:[]}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=n(21),r=i(a);r.default.el="#root",new Vue(r.default)},function(t,e,n){var i,a,r=[];r.push(n(22)),i=n(23);var o=n(24);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-1dad81a4",a.style=a.style||{},r.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,r),t.exports=i},function(t,e){t.exports={"animation-wrapper":{flexDirection:"row",flexWrap:"wrap"}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),r=i(a),o=n(4),s=i(o),c=n(8),u=i(c),d=n(12),f=i(d),l=n(16),p=i(l);e.default={name:"Animation",components:{AnimationBackground:r.default,AnimationPosition:s.default,AnimationOpacity:u.default,AnimationRotate:f.default,AnimationScale:p.default},data:function(){return{aniArr:new Array(200)}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroller",{staticClass:["scroller"]},[n("div",{staticClass:["animation-wrapper"]},t._l(t.aniArr,function(e,i){return n("div",{key:i},[i%5==0?n("AnimationBackground"):t._e(),i%5==1?n("AnimationPosition"):t._e(),i%5==2?n("AnimationOpacity"):t._e(),i%5==3?n("AnimationRotate"):t._e(),i%5==4?n("AnimationScale"):t._e()],1)}))])},staticRenderFns:[]}}]);