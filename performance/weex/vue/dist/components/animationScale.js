// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ({

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _animationScale = __webpack_require__(30);

var _animationScale2 = _interopRequireDefault(_animationScale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_animationScale2.default.el = '#root';
new Vue(_animationScale2.default);

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(31)
)

/* script */
__vue_exports__ = __webpack_require__(32)

/* template */
var __vue_template__ = __webpack_require__(33)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/XiaoFeng/work/Android/DiDi/OpenSource/hummer-standard-benchmarks/performance/weex/vue/src/components/animationScale.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-473edf36"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports = {
  "scale-animation-wrapper": {
    "width": 70,
    "height": 70,
    "marginTop": 10,
    "marginRight": 10,
    "marginBottom": 10,
    "marginLeft": 10,
    "backgroundColor": "#15D0B4"
  }
}

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

var animation = weex.requireModule('animation');
var ScaleList = new Map([[0, 'scale(0.5)'], [1, 'scale(1)']]);

exports.default = {
  name: 'AnimationScale',
  props: {
    index: Number,
    default: -1
  },
  data: function data() {
    return {
      ref: null,
      nextKey: 0,
      nextScale: ScaleList.get(0)
    };
  },
  mounted: function mounted() {
    this.ref = this.$refs['scale-animation'];
    this.startAnimation();
  },

  methods: {
    startAnimation: function startAnimation() {
      var that = this;
      animation.transition(this.ref, {
        styles: {
          transform: this.nextScale
        },
        duration: 1000,
        timingFunction: 'linear',
        needLayout: false,
        delay: 0
      }, function () {
        that.setNextScale();
        that.startAnimation();
      });
    },
    setNextScale: function setNextScale() {
      this.nextKey = this.nextKey + 1;
      this.nextKey = ScaleList.has(this.nextKey) ? this.nextKey : 0;
      this.nextScale = ScaleList.get(this.nextKey);
    }
  }
};

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "scale-animation",
    staticClass: ["scale-animation-wrapper"]
  }, [(_vm.index > -1) ? _c('text', {
    staticStyle: {
      textAlign: "center"
    }
  }, [_vm._v(_vm._s(_vm.index))]) : _vm._e()])
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["scale-animation-wrapper"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {},
      "ref": "scale-animation"
    }
  }, [_c('text', {
    staticStyle: {
      textAlign: "center"
    },
    attrs: {
      "[[match]]": "index>-1",
      "value": {
        "@binding": "index"
      }
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });