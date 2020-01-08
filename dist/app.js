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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var math = {
  lerp: function lerp(a, b, n) {
    return (1 - n) * a + n * b;
  }
};

var Cursor =
/*#__PURE__*/
function () {
  function Cursor() {
    _classCallCheck(this, Cursor);

    this.el = document.querySelector('[data-cursor]');
    this.stickies = _toConsumableArray(document.querySelectorAll('[data-stick-cursor]'));
    this.data = {
      mouse: {
        x: 0,
        y: 0
      },
      current: {
        x: 0,
        y: 0
      },
      last: {
        x: 0,
        y: 0
      },
      ease: 0.15,
      dist: 100,
      fx: {
        diff: 0,
        acc: 0,
        velo: 0,
        scale: 0
      }
    };
    this.bounds = {
      h: 0,
      a: 0
    };
    this.rAF = null;
    this.targets = null;
    this.run = this.run.bind(this);
    this.mousePos = this.mousePos.bind(this);
    this.stick = this.stick.bind(this);
    this.state = {
      stick: false
    };
    this.init();
  }

  _createClass(Cursor, [{
    key: "mousePos",
    value: function mousePos(e) {
      this.data.mouse.x = e.pageX;
      this.data.mouse.y = e.pageY;
      this.data.current.x = e.pageX;
      this.data.current.y = e.pageY;
    }
  }, {
    key: "getCache",
    value: function getCache() {
      var _this = this;

      this.targets = [];
      this.stickies.forEach(function (el, index) {
        var bounds = el.getBoundingClientRect();

        _this.targets.push({
          el: el,
          x: bounds.left + bounds.width / 2,
          y: bounds.top + bounds.height / 2
        });
      });
    }
  }, {
    key: "stick",
    value: function stick(target) {
      var d = {
        x: target.x - this.data.mouse.x,
        y: target.y - this.data.mouse.y
      };
      var a = Math.atan2(d.x, d.y);
      var h = Math.sqrt(d.x * d.x + d.y * d.y);

      if (h < this.data.dist && !this.state.stick) {
        this.state.stick = true;
        this.data.ease = 0.075;
        this.data.current.x = target.x - Math.sin(a) * h / 2.5;
        this.data.current.y = target.y - Math.cos(a) * h / 2.5;
        this.el.classList.add('is-active');
      } else if (this.state.stick) {
        this.state.stick = false;
        this.data.ease = 0.15;
      } else if (h > this.data.dist) {
        this.el.classList.remove('is-active');
      }
    }
  }, {
    key: "run",
    value: function run() {
      this.targets.forEach(this.stick);
      this.data.last.x = math.lerp(this.data.last.x, this.data.current.x, this.data.ease);
      this.data.last.y = math.lerp(this.data.last.y, this.data.current.y, this.data.ease);
      this.data.fx.diff = this.data.current.x - this.data.last.x;
      this.data.fx.acc = this.data.fx.diff / window.innerWidth;
      this.data.fx.velo = +this.data.fx.acc;
      this.data.fx.scale = 1 - Math.abs(this.data.fx.velo * 5);
      this.el.style.transform = "translate3d(".concat(this.data.last.x, "px, ").concat(this.data.last.y, "px, 0) scale(").concat(this.data.fx.scale, ")");
      this.raf();
    }
  }, {
    key: "raf",
    value: function raf() {
      this.rAF = requestAnimationFrame(this.run);
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      window.addEventListener('mousemove', this.mousePos, {
        passive: true
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.getCache();
      this.addListeners();
      this.raf();
    }
  }]);

  return Cursor;
}();

var cursor = new Cursor();

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/app.js ./src/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/sandesh/Projects/stickyMouse/src/app.js */"./src/app.js");
module.exports = __webpack_require__(/*! /Users/sandesh/Projects/stickyMouse/src/app.scss */"./src/app.scss");


/***/ })

/******/ });