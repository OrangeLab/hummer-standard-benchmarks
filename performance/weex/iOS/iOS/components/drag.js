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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ({

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _drag = __webpack_require__(45);

var _drag2 = _interopRequireDefault(_drag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_drag2.default.el = '#root';
new Vue(_drag2.default);

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(46)
)

/* script */
__vue_exports__ = __webpack_require__(47)

/* template */
var __vue_template__ = __webpack_require__(48)
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
__vue_options__.__file = "/Users/didi/Desktop/Tenon/hummer-standard-benchmarks/performance/weex/vue/src/components/drag.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-bfdc8978"
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

/***/ 46:
/***/ (function(module, exports) {

module.exports = {
  "drag-target": {
    "width": 200,
    "height": 200,
    "backgroundColor": "#15D0B4",
    "position": "absolute"
  }
}

/***/ }),

/***/ 47:
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
//


exports.default = {
  name: 'Drag',
  data: function data() {
    return {
      event: '',
      positionStyle: Object.create(null),
      previewPageX: -1,
      previewPageY: -1,
      firstTouch: true,
      offsetX: 0,
      offsetY: 0,
      index: 0,
      moving: false
    };
  },

  methods: {
    handleMove: function handleMove(e) {
      // if (this.moving) {
      //   return
      // }
      this.event = e;
      if (this.firstTouch) {
        this.firstTouch = false;
        this.previewPageX = e.changedTouches[0].pageX;
        this.previewPageY = e.changedTouches[0].pageY;
        return;
      }
      var left = e.changedTouches[0].pageX - this.previewPageX;
      var top = e.changedTouches[0].pageY - this.previewPageY;
      this.offsetX = this.offsetX + left;
      this.offsetY = this.offsetY + top;
      this.positionStyle = {
        left: this.offsetX,
        top: this.offsetY
      };
      this.moving = true;
      // setTimeout(() => {
      //   this.moving = false
      // }, 16)

      this.previewPageX = e.changedTouches[0].pageX;
      this.previewPageY = e.changedTouches[0].pageY;
    },
    handleEnd: function handleEnd() {
      this.firstTouch = true;
    }
  }
};

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["drag-wrapper"]
  }, [_c('div', {
    staticClass: ["drag-target"],
    style: _vm.positionStyle,
    on: {
      "touchmove": _vm.handleMove,
      "touchend": _vm.handleEnd
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });