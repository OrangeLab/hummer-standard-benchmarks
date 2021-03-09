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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
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
__vue_options__.__file = "/Users/XiaoFeng/work/Android/DiDi/OpenSource/hummer-standard-benchmarks/performance/weex/vue/src/components/animationBackground.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-cab8061c"
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
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "background-animation-wrapper": {
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
/* 2 */
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
var colorList = new Map([[0, '#F1CA19'], [1, '#15D0B4']]);

exports.default = {
  name: 'AnimationBackground',
  props: {
    index: Number,
    default: -1
  },
  data: function data() {
    return {
      ref: null,
      nextKey: 0,
      nextColor: colorList.get(0)
    };
  },
  mounted: function mounted() {
    this.ref = this.$refs['background-animation'];
    this.startAnimation();
  },

  methods: {
    startAnimation: function startAnimation() {
      var that = this;
      animation.transition(this.ref, {
        styles: {
          backgroundColor: this.nextColor
        },
        duration: 1000,
        timingFunction: 'linear',
        needLayout: false,
        delay: 0
      }, function () {
        that.setNextColor();
        that.startAnimation();
      });
    },
    setNextColor: function setNextColor() {
      this.nextKey = this.nextKey + 1;
      this.nextKey = colorList.has(this.nextKey) ? this.nextKey : 0;
      this.nextColor = colorList.get(this.nextKey);
    }
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "background-animation",
    staticClass: ["background-animation-wrapper"]
  }, [(_vm.index > -1) ? _c('text', {
    staticStyle: {
      textAlign: "center"
    }
  }, [_vm._v(_vm._s(_vm.index))]) : _vm._e()])
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["background-animation-wrapper"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {},
      "ref": "background-animation"
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(7)
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
__vue_options__.__file = "/Users/XiaoFeng/work/Android/DiDi/OpenSource/hummer-standard-benchmarks/performance/weex/vue/src/components/animationPosition.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7c4ee66d"
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
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  "position-animation-wrapper": {
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
/* 6 */
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
var PositionList = new Map([[0, 'translate(20, 0)'], [1, 'translate(0, 0)']]);

exports.default = {
  name: 'PositionBackground',
  props: {
    index: Number,
    default: -1
  },
  data: function data() {
    return {
      ref: null,
      nextKey: 0,
      nextPosition: PositionList.get(0)
    };
  },
  mounted: function mounted() {
    this.ref = this.$refs['position-animation'];
    this.startAnimation();
  },

  methods: {
    startAnimation: function startAnimation() {
      var that = this;
      animation.transition(this.ref, {
        styles: {
          transform: this.nextPosition
        },
        duration: 1000,
        timingFunction: 'linear',
        needLayout: false,
        delay: 0
      }, function () {
        that.setNextPosition();
        that.startAnimation();
      });
    },
    setNextPosition: function setNextPosition() {
      this.nextKey = this.nextKey + 1;
      this.nextKey = PositionList.has(this.nextKey) ? this.nextKey : 0;
      this.nextPosition = PositionList.get(this.nextKey);
    }
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "position-animation",
    staticClass: ["position-animation-wrapper"]
  }, [(_vm.index > -1) ? _c('text', {
    staticStyle: {
      textAlign: "center"
    }
  }, [_vm._v(_vm._s(_vm.index))]) : _vm._e()])
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["position-animation-wrapper"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {},
      "ref": "position-animation"
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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(9)
)

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(11)
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
__vue_options__.__file = "/Users/XiaoFeng/work/Android/DiDi/OpenSource/hummer-standard-benchmarks/performance/weex/vue/src/components/animationOpacity.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2b57c077"
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
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  "opacity-animation-wrapper": {
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
/* 10 */
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
var OpacityList = new Map([[0, '0'], [1, '1']]);

exports.default = {
  name: 'OpacityBackground',
  props: {
    index: Number,
    default: -1
  },
  data: function data() {
    return {
      ref: null,
      nextKey: 0,
      nextOpacity: OpacityList.get(0)
    };
  },
  mounted: function mounted() {
    this.ref = this.$refs['opacity-animation'];
    this.startAnimation();
  },

  methods: {
    startAnimation: function startAnimation() {
      var that = this;
      animation.transition(this.ref, {
        styles: {
          opacity: this.nextOpacity
        },
        duration: 1000,
        timingFunction: 'linear',
        needLayout: false,
        delay: 0
      }, function () {
        that.setNextOpacity();
        that.startAnimation();
      });
    },
    setNextOpacity: function setNextOpacity() {
      this.nextKey = this.nextKey + 1;
      this.nextKey = OpacityList.has(this.nextKey) ? this.nextKey : 0;
      this.nextOpacity = OpacityList.get(this.nextKey);
    }
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "opacity-animation",
    staticClass: ["opacity-animation-wrapper"]
  }, [(_vm.index > -1) ? _c('text', {
    staticStyle: {
      textAlign: "center"
    }
  }, [_vm._v(_vm._s(_vm.index))]) : _vm._e()])
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["opacity-animation-wrapper"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {},
      "ref": "opacity-animation"
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

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(13)
)

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(15)
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
__vue_options__.__file = "/Users/XiaoFeng/work/Android/DiDi/OpenSource/hummer-standard-benchmarks/performance/weex/vue/src/components/animationRotate.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2bd99c9f"
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
/* 13 */
/***/ (function(module, exports) {

module.exports = {
  "rotate-animation-wrapper": {
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
/* 14 */
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
var RotateList = new Map([[0, 'rotate(0)'], [1, 'rotate(360deg)']]);

exports.default = {
  name: 'AnimationRotate',
  props: {
    index: Number,
    default: -1
  },
  data: function data() {
    return {
      ref: null,
      nextKey: 0,
      nextRotate: RotateList.get(0)
    };
  },
  mounted: function mounted() {
    this.ref = this.$refs['rotate-animation'];
    this.startAnimation();
  },

  methods: {
    startAnimation: function startAnimation() {
      var that = this;
      animation.transition(this.ref, {
        styles: {
          transform: this.nextRotate
        },
        duration: 1000,
        timingFunction: 'linear',
        needLayout: false,
        delay: 0
      }, function () {
        that.setNextRotate();
        that.startAnimation();
      });
    },
    setNextRotate: function setNextRotate() {
      this.nextKey = this.nextKey + 1;
      this.nextKey = RotateList.has(this.nextKey) ? this.nextKey : 0;
      this.nextRotate = RotateList.get(this.nextKey);
    }
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "rotate-animation",
    staticClass: ["rotate-animation-wrapper"]
  }, [(_vm.index > -1) ? _c('text', {
    staticStyle: {
      textAlign: "center"
    }
  }, [_vm._v(_vm._s(_vm.index))]) : _vm._e()])
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["rotate-animation-wrapper"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {},
      "ref": "rotate-animation"
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

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(17)
)

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(19)
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
__vue_options__.__file = "/Users/XiaoFeng/work/Android/DiDi/OpenSource/hummer-standard-benchmarks/performance/weex/vue/src/components/AnimationScale.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-95fac954"
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
/* 17 */
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
/* 18 */
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
/* 19 */
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

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _list = __webpack_require__(40);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_list2.default.el = '#root';
new Vue(_list2.default);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(41)
)

/* script */
__vue_exports__ = __webpack_require__(42)

/* template */
var __vue_template__ = __webpack_require__(43)
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
__vue_options__.__file = "/Users/XiaoFeng/work/Android/DiDi/OpenSource/hummer-standard-benchmarks/performance/weex/vue/src/components/list.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-227179ae"
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
/* 41 */
/***/ (function(module, exports) {

module.exports = {
  "animation-wrapper": {
    "flexDirection": "row"
  }
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _animationBackground = __webpack_require__(0);

var _animationBackground2 = _interopRequireDefault(_animationBackground);

var _animationPosition = __webpack_require__(4);

var _animationPosition2 = _interopRequireDefault(_animationPosition);

var _animationOpacity = __webpack_require__(8);

var _animationOpacity2 = _interopRequireDefault(_animationOpacity);

var _animationRotate = __webpack_require__(12);

var _animationRotate2 = _interopRequireDefault(_animationRotate);

var _AnimationScale = __webpack_require__(16);

var _AnimationScale2 = _interopRequireDefault(_AnimationScale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Animation',
  components: {
    AnimationBackground: _animationBackground2.default,
    AnimationPosition: _animationPosition2.default,
    AnimationOpacity: _animationOpacity2.default,
    AnimationRotate: _animationRotate2.default,
    AnimationScale: _AnimationScale2.default
  },
  data: function data() {
    return {
      aniArr: new Array(1000)
    };
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', _vm._l((_vm.aniArr), function(item, index) {
    return _c('cell', {
      key: index,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["animation-wrapper"]
    }, [_c('AnimationBackground', {
      attrs: {
        "index": index
      }
    }), _c('AnimationPosition', {
      attrs: {
        "index": index
      }
    }), _c('AnimationOpacity', {
      attrs: {
        "index": index
      }
    }), _c('AnimationRotate', {
      attrs: {
        "index": index
      }
    }), _c('AnimationScale', {
      attrs: {
        "index": index
      }
    })], 1)])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);