(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=o(t);if(e){var i=o(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return u(this,n)}}const a=__GLOBAL__;var l="#15D0B4",s=function(t){i(r,t);var e=f(r);function r(){var t;n(this,r),(t=e.call(this)).style={width:"100%",height:"100%"};var i=new a.List;return i.style={width:"100%",height:"100%",mode:"list",lineSpacing:10,itemSpacing:5,topSpacing:5,leftSpacing:5,rightSpacing:5,bottomSpacing:5},i.onCreate=function(t){return new h},i.onUpdate=function(t,e){e instanceof h&&e.refresh(t)},t.appendChild(i),i.refresh(1e3),t}return r}(a.View),h=function(t){i(o,t);var r=f(o);function o(){var t;return n(this,o),(t=r.call(this)).style={flexDirection:"row",width:"100%",height:48,margin:4,backgroundColor:"#15D0B422",alignItems:"center"},t.item1=new p,t.item2=new p,t.item3=new p,t.item4=new p,t.item5=new p,t.appendChild(t.item1),t.appendChild(t.item2),t.appendChild(t.item3),t.appendChild(t.item4),t.appendChild(t.item5),t}return e(o,[{key:"refresh",value:function(t){this.item1.refresh(t),this.item2.refresh(t),this.item3.refresh(t),this.item4.refresh(t),this.item5.refresh(t)}}]),o}(a.View),p=function(t){i(o,t);var r=f(o);function o(){var t;return n(this,o),(t=r.call(this)).style={width:34,height:34,backgroundColor:l,textAlign:"center",marginLeft:16,marginRight:16},t}return e(o,[{key:"refresh",value:function(t){this.text=t.toString()}}]),o}(a.Text);a.Hummer.render(new s)})();