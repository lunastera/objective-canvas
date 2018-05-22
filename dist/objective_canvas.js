(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["obc"] = factory();
	else
		root["obc"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/canvas_object.js":
/*!******************************!*\
  !*** ./src/canvas_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar CanvasObject = function () {\n  function CanvasObject(x, y, width, height) {\n    _classCallCheck(this, CanvasObject);\n\n    // this.id = id;\n    this.x = x;\n    this.y = y;\n    this.width = width;\n    this.height = height;\n  }\n\n  _createClass(CanvasObject, [{\n    key: \"update\",\n    value: function update(canvas) {}\n  }, {\n    key: \"render\",\n    value: function render(context) {}\n  }, {\n    key: \"isDead\",\n    value: function isDead() {\n      return false;\n    }\n  }]);\n\n  return CanvasObject;\n}();\n\n// Circleベース\n\n\nvar Circle = function (_CanvasObject) {\n  _inherits(Circle, _CanvasObject);\n\n  function Circle(x, y, radius) {\n    _classCallCheck(this, Circle);\n\n    var _this = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, x, y, radius * 2, radius * 2));\n\n    _this.r = radius;\n    return _this;\n  }\n\n  return Circle;\n}(CanvasObject);\n\nvar Rect = function Rect(x, y, size) {\n  _classCallCheck(this, Rect);\n};\n\nexports.CanvasObject = CanvasObject;\nexports.Circle = Circle;\n\n//# sourceURL=webpack://obc/./src/canvas_object.js?");

/***/ }),

/***/ "./src/canvas_object_array.js":
/*!************************************!*\
  !*** ./src/canvas_object_array.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar CanvasObjectArray = function () {\n  function CanvasObjectArray() {\n    _classCallCheck(this, CanvasObjectArray);\n\n    this.objects = [];\n  }\n\n  _createClass(CanvasObjectArray, [{\n    key: \"forEach\",\n    value: function forEach(func) {\n      this.objects.forEach(func);\n    }\n  }, {\n    key: \"map\",\n    value: function map(func) {\n      return this.objects.map(func);\n    }\n  }, {\n    key: \"push\",\n    value: function push(object) {\n      this.objects.push(object);\n    }\n\n    // 破壊的な変更\n\n  }, {\n    key: \"filter\",\n    value: function filter(func) {\n      this.objects = this.objects.filter(func);\n    }\n\n    // searchで特定されたオブジェクトを指定する\n\n  }, {\n    key: \"remove\",\n    value: function remove(object) {\n      this.filter(function (obj) {\n        return obj === object;\n      });\n    }\n\n    // 破壊的でない\n\n  }, {\n    key: \"search\",\n    value: function search(func) {\n      this.objects.filter(func);\n    }\n  }, {\n    key: \"searchNearest\",\n    value: function searchNearest(x, y) {\n      var nearestPoint = null;\n      var nearestObjects = [];\n      this.objects.forEach(function (obj) {\n        var sPointX = obj.x - obj.width / 2;\n        var sPointY = obj.y - obj.height / 2;\n        var ePointX = obj.x + obj.width / 2;\n        var ePointY = obj.y + obj.height / 2;\n        // そのオブジェクトの範囲内に入っているなら\n        if (x >= sPointX && x <= ePointX && y >= sPointY && y <= ePointY) {\n          // xとobj.xの距離を割り出して最も近いものを返す。\n          var point = Math.abs(x - obj.x) + Math.abs(y - obj.y);\n          if (nearestPoint === null || nearestPoint >= point) {\n            nearestPoint = point;\n            nearestObjects.push([point, obj]);\n          }\n        }\n      });\n      return nearestObjects.filter(function (row) {\n        return nearestPoint === row[0];\n      }).map(function (e) {\n        return e[1];\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render(canvas, context) {\n      this.objects.forEach(function (obj) {\n        obj.update(canvas);\n        obj.render(context);\n      });\n      this.filter(function (e) {\n        return !e.isDead();\n      });\n    }\n  }]);\n\n  return CanvasObjectArray;\n}();\n\nexports.CanvasObjectArray = CanvasObjectArray;\n\n//# sourceURL=webpack://obc/./src/canvas_object_array.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Circle = exports.CanvasObject = exports.CanvasObjectArray = exports.ObjectiveCanvas = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _canvas_object_array = __webpack_require__(/*! ./canvas_object_array */ \"./src/canvas_object_array.js\");\n\nvar _canvas_object = __webpack_require__(/*! ./canvas_object */ \"./src/canvas_object.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ObjectiveCanvas = function () {\n  function ObjectiveCanvas(canvas) {\n    _classCallCheck(this, ObjectiveCanvas);\n\n    this.canvas = /** @type {HTMLCanvasElement} */canvas;\n    this.width = this.canvas.width;\n    this.height = this.canvas.height;\n    this.context = /** @type {CanvasRenderringContext2D} */canvas.getContext('2d');\n    this.objects = new _canvas_object_array.CanvasObjectArray();\n    this.overlayObjects = new _canvas_object_array.CanvasObjectArray();\n  }\n\n  // Canvasに描画したいオブジェクトを追加\n\n\n  _createClass(ObjectiveCanvas, [{\n    key: \"add\",\n    value: function add(object) {\n      this.objects.push(object);\n    }\n\n    // Canvasからオブジェクトを削除\n\n  }, {\n    key: \"remove\",\n    value: function remove(object) {\n      this.objects.remove(object);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.objects.render(this.canvas, this.context);\n      // this.overlayObjects.render(this.canvas, this.context)\n    }\n\n    // 座標が一致するオブジェクトを取得。\n    // return: Array[CanvasObject]\n\n  }, {\n    key: \"attachObjects\",\n    value: function attachObjects(x, y) {\n      return this.objects.search(function (e) {\n        return e.x === x && e.y === y;\n      });\n    }\n\n    // 最も近い座標のオブジェクトを取得。\n    // return: Array[CanvasObject]\n\n  }, {\n    key: \"nearestObjects\",\n    value: function nearestObjects(x, y) {\n      return this.objects.searchNearest(x, y);\n    }\n\n    // Canvasの描画をクリア\n\n  }, {\n    key: \"clearAll\",\n    value: function clearAll() {\n      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    }\n  }, {\n    key: \"clearRect\",\n    value: function clearRect(x, y, w, h) {\n      this.context.clearRect(x, y, w, h);\n    }\n  }]);\n\n  return ObjectiveCanvas;\n}();\n\nexports.ObjectiveCanvas = ObjectiveCanvas;\nexports.CanvasObjectArray = _canvas_object_array.CanvasObjectArray;\nexports.CanvasObject = _canvas_object.CanvasObject;\nexports.Circle = _canvas_object.Circle;\n\n//# sourceURL=webpack://obc/./src/index.js?");

/***/ })

/******/ });
});