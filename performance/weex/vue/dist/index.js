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
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
/******/ })
/************************************************************************/
/******/ ({

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(65);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(66)
)

/* script */
__vue_exports__ = __webpack_require__(67)

/* template */
var __vue_template__ = __webpack_require__(68)
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
__vue_options__.__file = "/Users/didi/Desktop/Tenon/hummer-standard-benchmarks/performance/weex/vue/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2964abc9"
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

/***/ 66:
/***/ (function(module, exports) {

module.exports = {
  "button": {
    "height": "48wx",
    "backgroundColor": "#15D0B4",
    "marginTop": "20wx",
    "marginLeft": "8wx",
    "marginRight": "8wx",
    "borderRadius": "8wx",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "btn-text": {
    "textAlign": "center",
    "fontSize": "20wx",
    "justifyContent": "center"
  }
}

/***/ }),

/***/ 67:
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
//

var navigator = weex.requireModule('navigator');

exports.default = {
  name: 'App',
  components: {
    // HelloWorld
  },
  data: function data() {
    return {
      pageList: [{
        name: '列表基准测试（Scroller）',
        url: 'components/scroller.js'
      }, {
        name: '列表基准测试（List）',
        url: 'components/list.js'
      }, {
        name: '动画基准测试',
        url: 'components/animation.js'
      }, {
        name: '拖拽基准测试',
        url: 'components/drag.js'
      }],
      e: null
    };
  },

  methods: {
    jumpPage: function jumpPage(e) {
      // var uurl = weex.config.bundleUrl
      // var uurls = uurl.split(':')
      // var ports = uurls[2]
      // ports = ports.split('/')
      // var hrefs = uurls[0] + ':' + uurls[1] + ':' + ports[0] + '/'
      navigator.push({
        url: '/' + e
      }, function (event) {
        console.log('callback: ', event);
      });
    }
  }
};

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, _vm._l((_vm.pageList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["button"],
      on: {
        "click": function($event) {
          _vm.jumpPage(item.url)
        }
      }
    }, [_c('text', {
      staticClass: ["btn-text"]
    }, [_vm._v(_vm._s(item.name))])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });