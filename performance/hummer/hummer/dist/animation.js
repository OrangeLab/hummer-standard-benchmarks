/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!*********************************************************************************************************************************************!*\
  !*** ../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!**************************************************************************************************************************************!*\
  !*** ../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/createSuper.js":
/*!***********************************************************************************************************************************!*\
  !*** ../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createSuper)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/isNativeReflectConstruct */ "../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(Derived) {
  var hasNativeReflectConstruct = (0,_babel_runtime_helpers_esm_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__.default)();
  return function _createSuperInternal() {
    var Super = (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__.default)(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.default)(this, result);
  };
}

/***/ }),

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!**************************************************************************************************************************************!*\
  !*** ../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!********************************************************************************************************************************!*\
  !*** ../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/setPrototypeOf */ "../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) (0,_babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!************************************************************************************************************************************************!*\
  !*** ../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeReflectConstruct)
/* harmony export */ });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!*************************************************************************************************************************************************!*\
  !*** ../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(call) === "object" || typeof call === "function")) {
    return call;
  }

  return (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(self);
}

/***/ }),

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!**************************************************************************************************************************************!*\
  !*** ../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!******************************************************************************************************************************!*\
  !*** ../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./src/common/CommonAnim.ts":
/*!**********************************!*\
  !*** ./src/common/CommonAnim.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PositionAnim": () => (/* binding */ PositionAnim),
/* harmony export */   "RotationZAnim": () => (/* binding */ RotationZAnim),
/* harmony export */   "ScaleAnim": () => (/* binding */ ScaleAnim),
/* harmony export */   "OpacityAnim": () => (/* binding */ OpacityAnim),
/* harmony export */   "BackgroundColorAnim": () => (/* binding */ BackgroundColorAnim)
/* harmony export */ });
/* harmony import */ var _usr_local_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _usr_local_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/inherits */ "../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _usr_local_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/createSuper */ "../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hummer/hummer-front */ "@hummer/hummer-front");
/* harmony import */ var _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hummer_hummer_front__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_CommonColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/CommonColor */ "./src/common/CommonColor.ts");





var PositionAnim = /*#__PURE__*/function (_KeyframeAnimation) {
  (0,_usr_local_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(PositionAnim, _KeyframeAnimation);

  var _super = (0,_usr_local_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__.default)(PositionAnim);

  function PositionAnim() {
    var _this;

    (0,_usr_local_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, PositionAnim);

    _this = _super.call(this, "position");
    _this.keyframes = [{
      percent: 0,
      value: {
        x: 0,
        y: 0
      }
    }, {
      percent: 0.5,
      value: {
        x: 20,
        y: 0
      }
    }, {
      percent: 1,
      value: {
        x: 0,
        y: 0
      }
    }];
    _this.repeatCount = -1;
    _this.duration = 2;
    _this.easing = 'linear';
    return _this;
  }

  return PositionAnim;
}(_hummer_hummer_front__WEBPACK_IMPORTED_MODULE_3__.KeyframeAnimation);
var RotationZAnim = /*#__PURE__*/function (_KeyframeAnimation2) {
  (0,_usr_local_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(RotationZAnim, _KeyframeAnimation2);

  var _super2 = (0,_usr_local_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__.default)(RotationZAnim);

  function RotationZAnim() {
    var _this2;

    (0,_usr_local_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, RotationZAnim);

    _this2 = _super2.call(this, "rotationZ");
    _this2.keyframes = [{
      percent: 0,
      value: 0
    }, {
      percent: 0.5,
      value: 360
    }, {
      percent: 1,
      value: 0
    }];
    _this2.repeatCount = -1;
    _this2.duration = 2;
    _this2.easing = 'linear';
    return _this2;
  }

  return RotationZAnim;
}(_hummer_hummer_front__WEBPACK_IMPORTED_MODULE_3__.KeyframeAnimation);
var ScaleAnim = /*#__PURE__*/function (_KeyframeAnimation3) {
  (0,_usr_local_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(ScaleAnim, _KeyframeAnimation3);

  var _super3 = (0,_usr_local_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__.default)(ScaleAnim);

  function ScaleAnim() {
    var _this3;

    (0,_usr_local_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ScaleAnim);

    _this3 = _super3.call(this, "scale");
    _this3.keyframes = [{
      percent: 0,
      value: 1
    }, {
      percent: 0.33,
      value: 1.4
    }, {
      percent: 0.66,
      value: 0.6
    }, {
      percent: 1,
      value: 1
    }];
    _this3.repeatCount = -1;
    _this3.duration = 2;
    _this3.easing = 'linear';
    return _this3;
  }

  return ScaleAnim;
}(_hummer_hummer_front__WEBPACK_IMPORTED_MODULE_3__.KeyframeAnimation);
var OpacityAnim = /*#__PURE__*/function (_KeyframeAnimation4) {
  (0,_usr_local_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(OpacityAnim, _KeyframeAnimation4);

  var _super4 = (0,_usr_local_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__.default)(OpacityAnim);

  function OpacityAnim() {
    var _this4;

    (0,_usr_local_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, OpacityAnim);

    _this4 = _super4.call(this, "opacity");
    _this4.keyframes = [{
      percent: 0,
      value: 1
    }, {
      percent: 0.5,
      value: 0.2
    }, {
      percent: 1,
      value: 1
    }];
    _this4.repeatCount = -1;
    _this4.duration = 2;
    _this4.easing = 'linear';
    return _this4;
  }

  return OpacityAnim;
}(_hummer_hummer_front__WEBPACK_IMPORTED_MODULE_3__.KeyframeAnimation);
var BackgroundColorAnim = /*#__PURE__*/function (_KeyframeAnimation5) {
  (0,_usr_local_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(BackgroundColorAnim, _KeyframeAnimation5);

  var _super5 = (0,_usr_local_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__.default)(BackgroundColorAnim);

  function BackgroundColorAnim() {
    var _this5;

    (0,_usr_local_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, BackgroundColorAnim);

    _this5 = _super5.call(this, "backgroundColor");
    _this5.keyframes = [{
      percent: 0,
      value: _common_CommonColor__WEBPACK_IMPORTED_MODULE_4__.Color.hm_blue
    }, {
      percent: 0.33,
      value: _common_CommonColor__WEBPACK_IMPORTED_MODULE_4__.Color.hm_purple
    }, {
      percent: 0.66,
      value: _common_CommonColor__WEBPACK_IMPORTED_MODULE_4__.Color.hm_orange
    }, {
      percent: 1,
      value: _common_CommonColor__WEBPACK_IMPORTED_MODULE_4__.Color.hm_blue
    }];
    _this5.repeatCount = -1;
    _this5.duration = 2;
    _this5.easing = 'linear';
    return _this5;
  }

  return BackgroundColorAnim;
}(_hummer_hummer_front__WEBPACK_IMPORTED_MODULE_3__.KeyframeAnimation);

/***/ }),

/***/ "./src/common/CommonColor.ts":
/*!***********************************!*\
  !*** ./src/common/CommonColor.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Color": () => (/* binding */ Color)
/* harmony export */ });
var Color = {
  hm_linear_gradient: 'linear-gradient(90deg #15D0B4 #E2ED00)',
  hm_yellow: '#E2ED00',
  hm_green: '#15D0B4',
  hm_blue: '#4A90E2',
  hm_orange: '#F1CA19',
  hm_purple: '#8484FF',
  transparent: '#00000000',
  black: '#000000',
  white: '#FFFFFF',
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF',
  grey: '#808080',
  light_grey: '#CCCCCC',
  dark_grey: '#333333',
  transparent_grey: '#00000060'
};

/***/ }),

/***/ "@hummer/hummer-front":
/*!*****************************!*\
  !*** external "__GLOBAL__" ***!
  \*****************************/
/***/ ((module) => {

module.exports = __GLOBAL__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/animation/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usr_local_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _usr_local_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/inherits */ "../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _usr_local_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/createSuper */ "../../../../../../../../../../usr/local/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hummer/hummer-front */ "@hummer/hummer-front");
/* harmony import */ var _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hummer_hummer_front__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_CommonColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/CommonColor */ "./src/common/CommonColor.ts");
/* harmony import */ var _common_CommonAnim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/CommonAnim */ "./src/common/CommonAnim.ts");






var ITEM_COUNT = 500;

var RootView = /*#__PURE__*/function (_Scroller) {
  (0,_usr_local_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__.default)(RootView, _Scroller);

  var _super = (0,_usr_local_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__.default)(RootView);

  function RootView() {
    var _this;

    (0,_usr_local_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, RootView);

    _this = _super.call(this);
    _this.style = {
      width: '100%',
      height: '100%'
    };
    var array = new Array();
    array.push(new _common_CommonAnim__WEBPACK_IMPORTED_MODULE_5__.PositionAnim());
    array.push(new _common_CommonAnim__WEBPACK_IMPORTED_MODULE_5__.RotationZAnim());
    array.push(new _common_CommonAnim__WEBPACK_IMPORTED_MODULE_5__.ScaleAnim());
    array.push(new _common_CommonAnim__WEBPACK_IMPORTED_MODULE_5__.OpacityAnim());
    array.push(new _common_CommonAnim__WEBPACK_IMPORTED_MODULE_5__.BackgroundColorAnim());
    var layout = new _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_3__.View();
    layout.style = {
      width: '100%',
      height: '100%',
      flexWrap: 'wrap',
      flexDirection: 'row'
    };

    for (var i = 0; i < ITEM_COUNT; i++) {
      var item = new _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_3__.View();
      item.style = {
        width: 34,
        height: 34,
        backgroundColor: _common_CommonColor__WEBPACK_IMPORTED_MODULE_4__.Color.hm_green,
        margin: 6
      };
      layout.appendChild(item);
      var t = i % 5;
      item.addAnimation(array[t], "" + i);
    }

    _this.appendChild(layout);

    return _this;
  }

  return RootView;
}(_hummer_hummer_front__WEBPACK_IMPORTED_MODULE_3__.Scroller);

_hummer_hummer_front__WEBPACK_IMPORTED_MODULE_3__.Hummer.render(new RootView());
})();

/******/ })()
;
//# sourceMappingURL=animation.js.map