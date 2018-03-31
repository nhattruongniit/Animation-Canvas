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
/******/ 	return __webpack_require__(__webpack_require__.s = 84);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(69);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(121);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(125);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(69);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(51);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = PIXI;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__);




Object.defineProperty(exports, "__esModule", {
  value: true
});

var _import = __webpack_require__(130);

__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(_import).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property___default()(exports, key, {
    enumerable: true,
    get: function get() {
      return _import[key];
    }
  });
});

var Store = _interopRequireWildcard(_import);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = Store;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(85);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(95);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(118);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(46)('wks');
var uid = __webpack_require__(32);
var Symbol = __webpack_require__(13).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var core = __webpack_require__(8);
var ctx = __webpack_require__(26);
var hide = __webpack_require__(20);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = window;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(23)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(58);
var defined = __webpack_require__(40);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(14);
var IE8_DOM_DEFINE = __webpack_require__(60);
var toPrimitive = __webpack_require__(42);
var dP = Object.defineProperty;

exports.f = __webpack_require__(16) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(18);
var createDesc = __webpack_require__(31);
module.exports = __webpack_require__(16) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(63);
var enumBugKeys = __webpack_require__(47);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(30);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(87);
var global = __webpack_require__(13);
var hide = __webpack_require__(20);
var Iterators = __webpack_require__(22);
var TO_STRING_TAG = __webpack_require__(11)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(18).f;
var has = __webpack_require__(21);
var TAG = __webpack_require__(11)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(40);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(93)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(59)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(128), __esModule: true };

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__);




Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objects = __webpack_require__(161);

__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(_objects).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_property___default()(exports, key, {
    enumerable: true,
    get: function get() {
      return _objects[key];
    }
  });
});

var objects = _interopRequireWildcard(_objects);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = objects;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);
var document = __webpack_require__(13).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(19);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(14);
var dPs = __webpack_require__(62);
var enumBugKeys = __webpack_require__(47);
var IE_PROTO = __webpack_require__(45)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(41)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(65).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(46)('keys');
var uid = __webpack_require__(32);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(25);
var TAG = __webpack_require__(11)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(12);
var core = __webpack_require__(8);
var fails = __webpack_require__(23);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(105), __esModule: true };

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(11);


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var core = __webpack_require__(8);
var LIBRARY = __webpack_require__(29);
var wksExt = __webpack_require__(52);
var defineProperty = __webpack_require__(18).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(27);
var createDesc = __webpack_require__(31);
var toIObject = __webpack_require__(17);
var toPrimitive = __webpack_require__(42);
var has = __webpack_require__(21);
var IE8_DOM_DEFINE = __webpack_require__(60);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(16) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var resources = {
    ground: 'sprites/ground.jpg.json',
    header: 'sprites/header.png.json',
    number: 'sprites/number.png.json',
    footer: 'sprites/footer.png.json',
    house: 'sprites/house.png.json',
    hero: 'sprites/hero.png.json',
    status: 'sprites/status.png.json'
};

exports.default = resources;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(30);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(159), __esModule: true };

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(25);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(29);
var $export = __webpack_require__(12);
var redefine = __webpack_require__(61);
var hide = __webpack_require__(20);
var has = __webpack_require__(21);
var Iterators = __webpack_require__(22);
var $iterCreate = __webpack_require__(90);
var setToStringTag = __webpack_require__(33);
var getPrototypeOf = __webpack_require__(66);
var ITERATOR = __webpack_require__(11)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(16) && !__webpack_require__(23)(function () {
  return Object.defineProperty(__webpack_require__(41)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(18);
var anObject = __webpack_require__(14);
var getKeys = __webpack_require__(24);

module.exports = __webpack_require__(16) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(21);
var toIObject = __webpack_require__(17);
var arrayIndexOf = __webpack_require__(91)(false);
var IE_PROTO = __webpack_require__(45)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(44);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(13).document;
module.exports = document && document.documentElement;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(21);
var toObject = __webpack_require__(34);
var IE_PROTO = __webpack_require__(45)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(48);
var ITERATOR = __webpack_require__(11)('iterator');
var Iterators = __webpack_require__(22);
module.exports = __webpack_require__(8).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(24);
var toIObject = __webpack_require__(17);
var isEnum = __webpack_require__(27).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(107);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(109);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(63);
var hiddenKeys = __webpack_require__(47).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 71 */
/***/ (function(module, exports) {



/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pixi = __webpack_require__(5);

var ticker = new _pixi.ticker.Ticker();
exports.default = ticker;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var canvas = {
    width: 375,
    height: 667,
    resolution: window.devicePixelRatio
};

if (window.innerWidth / window.innerHeight > 375 / 667) {
    canvas.resolution *= window.innerHeight / 667;
} else {
    canvas.resolution *= window.innerWidth / 375;
}

canvas.battle = {
    x: 0,
    y: canvas.height * .3,
    width: canvas.width,
    height: canvas.height * .5
};
exports.default = canvas;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _denaGntHelper = __webpack_require__(131);

var _ticker = __webpack_require__(72);

var _ticker2 = _interopRequireDefault(_ticker);

var _canvas = __webpack_require__(73);

var _canvas2 = _interopRequireDefault(_canvas);

var _map = __webpack_require__(77);

var _map2 = _interopRequireDefault(_map);

var _gsap = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gameplay = new _denaGntHelper.DataStore({
    speed: 300, //pixel per second
    dead: {}, //Count npc dead
    factor: 10,
    boost: 1,
    play: false, //Playing state
    end: false,
    time: 0, //Time for played stage
    camera: { x: 0, y: 0 },
    attack: {}, //Atacking state
    skills: [],
    fireSkill: false,
    castSkill: false,
    bossdead: false,
    distance: function distance() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        if (value > _map2.default.length) {
            this.end = true;
            if (value > _map2.default.length + _canvas2.default.width) {
                this.play = false;
            }
        }
        return value;
    },

    lance: 0,
    lanceHeight: _canvas2.default.battle.height / _map2.default.lances,
    heroRange: _canvas2.default.battle.height / _map2.default.lances / 2 //Range attack
});

/*====================  Calculate time played ==================*/
_ticker2.default.add(function (delta) {
    gameplay.time += _ticker2.default.elapsedMS / 1000;
});
/*====================  End calculate time played ==================*/

/*====================  Calculate time Distance ==================*/
_ticker2.default.add(function (delta) {
    gameplay.distance = gameplay.distance + _ticker2.default.elapsedMS * gameplay.speed / 1000;
});
/*====================  End calculate time Distance ==================*/
gameplay.watch('play', function (state) {
    state ? _ticker2.default.start() : _ticker2.default.stop();

    if (state) _gsap.TweenLite.from(gameplay, 1, { speed: 0 });
}).watch('end', function (state) {
    return state ? {} : {
        time: 0,
        dead: {},
        attack: {},
        skill: {},
        play: false,
        distance: 0,
        bossdead: false,
        castSkill: null,
        fireSkill: null,
        boost: 1
    };
}).watch('castSkill', function (state) {
    if (state !== null) return {
        fireSkill: state
    };
});
window.gameplay = gameplay;
exports.default = gameplay;

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Fix__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__External__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Events__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DataStore__ = __webpack_require__(136);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return __WEBPACK_IMPORTED_MODULE_2__Events__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DataStore", function() { return __WEBPACK_IMPORTED_MODULE_3__DataStore__["a"]; });









/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Events(assign){
    assign = assign || this;
    var
        events = {}
    ;
    
    Object.defineProperties(assign,{
        emit:{
            value: function(name){
                const
                    args = [].slice.call(arguments,1),
                    calls = events[name] || []
                ;
                for(calls.iterator = 0; calls.iterator < calls.length; calls.iterator++){
                    if(calls[calls.iterator].apply(assign,args) === false) return false;
                }

                name = name.split(':');
                if(name.length > 1){
                    const sub = name.pop();
                    args.splice(0,0,name.join(':'), sub);
                    return this.emit.apply(this, args);
                }
                return true;
            },
            writable: false
        },
        on:{
            value: function(name, call, pos){
                if(name instanceof Object){
                    Object.entries(name).forEach(entry => assign.on.apply(assign, entry));
                }else{
                    if(!(call instanceof Function)) return this;
                    name.split(' ').filter(name => name).forEach(name => {
                        var calls = events[name] = events[name] || [], p = pos || calls.length;
                        if(!assign.emit('addEvent', name, call, p)) return;
                        calls.splice(p,0,call);
                    });
                }
                return this;
            },
            writable: false
        },
        off:{
            value: function(name, call){
                if(!name){
                    Object.keys(events).forEach(name => this.off(name,call));
                }else if(name instanceof Object){
                    Object.entries(name).forEach(entry => assign.off.apply(assign, entry));
                }else name.split(' ').filter(name => name).forEach(name => {
                    if(!call){
                        events[name].splice(0);
                    }else{
                        var calls = events[name] || [], i = calls.findIndex(triggle => triggle === call || triggle.native === call);
                        
                        if(i > -1){
                            calls.splice(i,1);
                            calls.iterator--;
                        }
                    }
                });
                return this;
            },
            writable: false
        },
        once:{
            value: function(name, call, pos){
                function once(){
                    this.off(name, once);
                    return call.apply(this,arguments);
                }
                once.native = call;
                return this.on(name, once, pos)
            },
            writable: false
        }
    });
}
/* harmony default export */ __webpack_exports__["a"] = (Events);

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    lances: 3,
    length: 5000,
    speed: 300,
    boss: 'boss_1',
    arrange: [{
        range: { from: 500, to: 4700 },
        lance: 0,
        enemy: {
            infantry: 50,
            sword: 50,
            spear: 50,
            bow: 50
        }
    }, {
        range: { from: 500, to: 4700 },
        lance: 1,
        enemy: {
            infantry: 50,
            sword: 50,
            spear: 50,
            bow: 50
        }
    }, {
        range: { from: 500, to: 4700 },
        lance: 2,
        enemy: {
            infantry: 50,
            sword: 50,
            spear: 50,
            bow: 50
        }
    }]
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = __webpack_require__(7);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(9);

var _entries2 = _interopRequireDefault(_entries);

var _resource = __webpack_require__(55);

var _resource2 = _interopRequireDefault(_resource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var soldier = {
    infantry: {
        name: 'Infantry',
        sheet: 'sprites/enemy/infantry.png.json',
        score: 5
    },
    sword: {
        name: 'Infantry',
        sheet: 'sprites/enemy/sword.png.json',
        score: 5
    },
    spear: {
        name: 'Infantry',
        sheet: 'sprites/enemy/spear.png.json',
        score: 5
    },
    bow: {
        name: 'Infantry',
        sheet: 'sprites/enemy/bow.png.json',
        score: 5
    },
    boss_1: {
        name: 'Boss 1',
        sheet: 'sprites/enemy/boss_1.png.json',
        score: 100
    },
    boss_2: {
        name: 'Infantry',
        sheet: 'sprites/enemy/boss_2.png.json',
        score: 100
    },
    boss_3: {
        name: 'Infantry',
        sheet: 'sprites/enemy/boss_3.png.json',
        score: 100
    },
    boss_4: {
        name: 'Infantry',
        sheet: 'sprites/enemy/boss_4.png.json',
        score: 100
    }
};

var enemy = _resource2.default.enemy = {
    dead: 'sprites/enemy/dead.png.json'
};
(0, _entries2.default)(soldier).forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        id = _ref2[0],
        config = _ref2[1];

    return enemy[id] = config.sheet;
});

exports.default = soldier;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(14);
var aFunction = __webpack_require__(30);
var SPECIES = __webpack_require__(11)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(26);
var invoke = __webpack_require__(146);
var html = __webpack_require__(65);
var cel = __webpack_require__(41);
var global = __webpack_require__(13);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(25)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(14);
var isObject = __webpack_require__(19);
var newPromiseCapability = __webpack_require__(56);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = __webpack_require__(7);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(9);

var _entries2 = _interopRequireDefault(_entries);

var _assign = __webpack_require__(36);

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__(37);

var _keys2 = _interopRequireDefault(_keys);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _get2 = __webpack_require__(10);

var _get3 = _interopRequireDefault(_get2);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _values = __webpack_require__(57);

var _values2 = _interopRequireDefault(_values);

var _pixi = __webpack_require__(5);

var _gsap = __webpack_require__(15);

var _objects = __webpack_require__(38);

var _store = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function deadFrames() {
    return (0, _values2.default)(_store.resources.enemy.dead);
}

var DeadEffect = function (_SpriteSheet) {
    (0, _inherits3.default)(DeadEffect, _SpriteSheet);

    function DeadEffect() {
        (0, _classCallCheck3.default)(this, DeadEffect);

        var _this = (0, _possibleConstructorReturn3.default)(this, (DeadEffect.__proto__ || (0, _getPrototypeOf2.default)(DeadEffect)).call(this, deadFrames()));

        _this.anchor.set(0.5, 1);
        _this.animationSpeed = _this._textures.length / 60 * 3;
        _this.loop = false;
        return _this;
    }

    return DeadEffect;
}(_objects.SpriteSheet);

var Soldier = function (_Container) {
    (0, _inherits3.default)(Soldier, _Container);

    function Soldier(id) {
        (0, _classCallCheck3.default)(this, Soldier);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (Soldier.__proto__ || (0, _getPrototypeOf2.default)(Soldier)).call(this));

        _this2.setupActions();
        if (!_store.soldier[id]) {
            var all = (0, _keys2.default)(_store.soldier);
            id = all[~~Math.range(0, all.length)];
        }

        _this2.enemyID = id;
        _this2.config = _store.soldier[id] || (0, _values2.default)(_store.soldier).shift();
        _this2.resources = {}; //;
        _this2.resources = _store.resources.enemy[id];

        _this2.addUI();
        return _this2;
    }

    (0, _createClass3.default)(Soldier, [{
        key: 'setupActions',
        value: function setupActions() {
            var _this4 = this;

            var id = this.enemyID;
            var actions = this.actions = {
                die: function die() {
                    var _this3 = this;

                    var dead = (0, _assign2.default)({}, _store.gameplay.dead);
                    dead[id] = (dead[id] || 0) + _store.gameplay.factor * _store.gameplay.boost;
                    _store.gameplay.dead = dead;

                    var inventorys = (0, _keys2.default)(this.resources).filter(function (key) {
                        return key.split('-')[0] === 'inventory';
                    }).map(function (key) {
                        var sprite = new _pixi.Sprite(_this3.resources[key]);
                        sprite.anchor.set(0.5);
                        _this3.addChild(sprite);

                        var x = Math.range(_store.gameplay.speed + 100, _store.gameplay.speed + 300),
                            y = -Math.range(200, 300),
                            time = Math.range(.4, .6),
                            rotation = Math.range(5, 10);

                        var timeLine = new _gsap.TimelineMax();
                        timeLine.add([_gsap.TweenMax.to(sprite, time, { x: x, rotation: rotation }), _gsap.TweenMax.to(sprite, time * .4, { y: y, ease: _gsap.Power2.easeOut }), _gsap.TweenMax.to(sprite, time * .6, { y: Math.range(-50, 50), ease: _gsap.Bounce.easeOut, delay: .2 })]);
                        timeLine.timeScale(0.5).play();
                        sprite.on('removed', function () {
                            return timeLine.kill();
                        });
                    });

                    this.actions.dead();
                },
                dead: function dead() {
                    this.removeChild(this.background);
                    var eff = new DeadEffect();
                    this.addChild(eff);
                    eff.on('complete', function () {
                        return eff.destroy();
                    });
                    eff.play();
                    var camera = function (state) {
                        var bounds = this.getBounds();
                        if (bounds.x + bounds.width < 0) {
                            _store.gameplay.off('changed:camera', camera);
                            this.destroy({ children: true });
                        }
                    }.bind(this);
                    _store.gameplay.on('changed:camera', camera);
                }
            };
            (0, _entries2.default)(actions).forEach(function (_ref) {
                var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                    key = _ref2[0],
                    func = _ref2[1];

                return actions[key] = func.bind(_this4);
            });
        }
    }, {
        key: 'addUI',
        value: function addUI() {
            var background = this.background = new _pixi.Sprite(this.resources.sprite);
            background.anchor.set(0.5, 0.9);
            this.addChild(background);
            this.scale.set(0.4);
        }
    }, {
        key: 'destroy',
        value: function destroy(child) {
            (0, _get3.default)(Soldier.prototype.__proto__ || (0, _getPrototypeOf2.default)(Soldier.prototype), 'destroy', this).call(this, child);
        }
    }]);
    return Soldier;
}(_pixi.Container);

exports.default = Soldier;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = __webpack_require__(7);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(9);

var _entries2 = _interopRequireDefault(_entries);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _assign = __webpack_require__(36);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(10);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _pixi = __webpack_require__(5);

var _store = __webpack_require__(6);

var _store2 = _interopRequireDefault(_store);

var _Sound = __webpack_require__(153);

var _Sound2 = _interopRequireDefault(_Sound);

var _Battle = __webpack_require__(156);

var _Battle2 = _interopRequireDefault(_Battle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*======================= Import Components ===========================*/

var KingdomGame = function (_Application) {
    (0, _inherits3.default)(KingdomGame, _Application);

    function KingdomGame(props) {
        (0, _classCallCheck3.default)(this, KingdomGame);

        props = (0, _assign2.default)(_store.canvas, props);

        var _this = (0, _possibleConstructorReturn3.default)(this, (KingdomGame.__proto__ || (0, _getPrototypeOf2.default)(KingdomGame)).call(this, props));

        _store.canvas.renderer = _this.renderer;
        //this.ticker = ticker;
        _this.loadLibs();
        return _this;
    }

    (0, _createClass3.default)(KingdomGame, [{
        key: 'addResource',
        value: function addResource(queue, resources, parent) {
            var _this2 = this;

            (0, _entries2.default)(resources).forEach(function (_ref) {
                var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                    id = _ref2[0],
                    src = _ref2[1];

                id = parent && parent + '.' + id || id;
                if (src instanceof _pixi.Texture) return;
                if (src instanceof Object) {
                    _this2.addResource(queue, src, id);
                } else queue.add(id, src);
            });
        }
    }, {
        key: 'applyResource',
        value: function applyResource(queue, resources, parent) {
            var _this3 = this;

            (0, _entries2.default)(resources).forEach(function (_ref3) {
                var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
                    id = _ref4[0],
                    src = _ref4[1];

                var name = parent && parent + '.' + id || id;
                if (src instanceof Object) {
                    _this3.applyResource(queue, src, name);
                } else {
                    var rs = queue.resources[name];
                    if (rs) {
                        resources[id] = rs.textures;
                    }
                }
            });
        }
    }, {
        key: 'loadLibs',
        value: function loadLibs() {
            var _this4 = this;

            var queue = _pixi.loaders.shared;
            this.addResource(queue, _store.resources);

            queue.once('complete', function (e) {
                _this4.applyResource(queue, _store.resources);
                _this4.sound = new _Sound2.default();
                _this4.sound.once('load', function () {
                    return setTimeout(_this4.setup.bind(_this4));
                });
            });
            queue.load();
        }
    }, {
        key: 'setup',
        value: function setup() {
            //Create gameplay
            this.stage.addChild(this.battle = new _Battle2.default({}));
            this.render();
            _store.gameplay.play = true;

            //gameplay.on('changed:end', () => setTimeout(()=>this.battle.destroy({children:true}),1000));
        }
    }, {
        key: 'destroy',
        value: function destroy(ops) {
            this.ticker = null;
            (0, _get3.default)(KingdomGame.prototype.__proto__ || (0, _getPrototypeOf2.default)(KingdomGame.prototype), 'destroy', this).call(this, ops);
        }
    }]);
    return KingdomGame;
}(_pixi.Application);

/*======================= Import Config ===========================*/


KingdomGame.Store = _store2.default;
global.DeNaFarufaruGame = KingdomGame;
exports.default = KingdomGame;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)))

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28);
__webpack_require__(35);
module.exports = __webpack_require__(94);


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(88);
var step = __webpack_require__(89);
var Iterators = __webpack_require__(22);
var toIObject = __webpack_require__(17);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(59)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(43);
var descriptor = __webpack_require__(31);
var setToStringTag = __webpack_require__(33);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(20)(IteratorPrototype, __webpack_require__(11)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(17);
var toLength = __webpack_require__(64);
var toAbsoluteIndex = __webpack_require__(92);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(44);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(44);
var defined = __webpack_require__(40);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(48);
var ITERATOR = __webpack_require__(11)('iterator');
var Iterators = __webpack_require__(22);
module.exports = __webpack_require__(8).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28);
__webpack_require__(35);
module.exports = __webpack_require__(97);


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(14);
var get = __webpack_require__(67);
module.exports = __webpack_require__(8).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(99);
module.exports = __webpack_require__(8).Object.entries;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(12);
var $entries = __webpack_require__(68)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(101);
module.exports = __webpack_require__(8).Object.getPrototypeOf;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(34);
var $getPrototypeOf = __webpack_require__(66);

__webpack_require__(49)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
module.exports = __webpack_require__(8).Object.assign;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(12);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(104) });


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(24);
var gOPS = __webpack_require__(50);
var pIE = __webpack_require__(27);
var toObject = __webpack_require__(34);
var IObject = __webpack_require__(58);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(23)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(106);
var $Object = __webpack_require__(8).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(12);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(16), 'Object', { defineProperty: __webpack_require__(18).f });


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(35);
__webpack_require__(28);
module.exports = __webpack_require__(52).f('iterator');


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(111);
__webpack_require__(71);
__webpack_require__(116);
__webpack_require__(117);
module.exports = __webpack_require__(8).Symbol;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(13);
var has = __webpack_require__(21);
var DESCRIPTORS = __webpack_require__(16);
var $export = __webpack_require__(12);
var redefine = __webpack_require__(61);
var META = __webpack_require__(112).KEY;
var $fails = __webpack_require__(23);
var shared = __webpack_require__(46);
var setToStringTag = __webpack_require__(33);
var uid = __webpack_require__(32);
var wks = __webpack_require__(11);
var wksExt = __webpack_require__(52);
var wksDefine = __webpack_require__(53);
var enumKeys = __webpack_require__(113);
var isArray = __webpack_require__(114);
var anObject = __webpack_require__(14);
var isObject = __webpack_require__(19);
var toIObject = __webpack_require__(17);
var toPrimitive = __webpack_require__(42);
var createDesc = __webpack_require__(31);
var _create = __webpack_require__(43);
var gOPNExt = __webpack_require__(115);
var $GOPD = __webpack_require__(54);
var $DP = __webpack_require__(18);
var $keys = __webpack_require__(24);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(70).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(27).f = $propertyIsEnumerable;
  __webpack_require__(50).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(29)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(20)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(32)('meta');
var isObject = __webpack_require__(19);
var has = __webpack_require__(21);
var setDesc = __webpack_require__(18).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(23)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(24);
var gOPS = __webpack_require__(50);
var pIE = __webpack_require__(27);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(25);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(17);
var gOPN = __webpack_require__(70).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53)('asyncIterator');


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53)('observable');


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(119), __esModule: true };

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(120);
var $Object = __webpack_require__(8).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(17);
var $getOwnPropertyDescriptor = __webpack_require__(54).f;

__webpack_require__(49)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(122), __esModule: true };

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(123);
module.exports = __webpack_require__(8).Object.setPrototypeOf;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(12);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(124).set });


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(19);
var anObject = __webpack_require__(14);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(26)(Function.call, __webpack_require__(54).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(126), __esModule: true };

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(127);
var $Object = __webpack_require__(8).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(12);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(43) });


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(129);
module.exports = __webpack_require__(8).Object.keys;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(34);
var $keys = __webpack_require__(24);

__webpack_require__(49)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.skills = exports.map = exports.boss = exports.soldier = exports.resources = exports.gameplay = exports.canvas = exports.ticker = undefined;

var _ticker = __webpack_require__(72);

var _ticker2 = _interopRequireDefault(_ticker);

var _canvas = __webpack_require__(73);

var _canvas2 = _interopRequireDefault(_canvas);

var _gameplay = __webpack_require__(74);

var _gameplay2 = _interopRequireDefault(_gameplay);

var _soldier = __webpack_require__(78);

var _soldier2 = _interopRequireDefault(_soldier);

var _boss = __webpack_require__(137);

var _boss2 = _interopRequireDefault(_boss);

var _map = __webpack_require__(77);

var _map2 = _interopRequireDefault(_map);

var _skills = __webpack_require__(138);

var _skills2 = _interopRequireDefault(_skills);

var _resource = __webpack_require__(55);

var _resource2 = _interopRequireDefault(_resource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ticker = _ticker2.default;
exports.canvas = _canvas2.default;
exports.gameplay = _gameplay2.default;
exports.resources = _resource2.default;
exports.soldier = _soldier2.default;
exports.boss = _boss2.default;
exports.map = _map2.default;
exports.skills = _skills2.default;

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__import__ = __webpack_require__(75);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return __WEBPACK_IMPORTED_MODULE_0__import__["Events"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DataStore", function() { return __WEBPACK_IMPORTED_MODULE_0__import__["DataStore"]; });

global.DeNaGntHelper = __WEBPACK_IMPORTED_MODULE_0__import__;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(39)))

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Browser__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Browser__);


/***/ }),
/* 133 */
/***/ (function(module, exports) {


Object.assign || (function(){
    const arr = [];
    Object.assign = function(){
        const args = arr.slice.call(arguments),first = args.shift();
        args.forEach(obj => {
            for(var x in obj) first[x] = obj[x];
        });
        return first;
    }

    Object.assign(Object,{
        keys(obj){
            var keys = [];
            for(var x in obj) keys.push(x);
            return keys;
        },
        values(obj){
            var vals = [];
            for(var x in obj) keys.push(vals[x]);
            return vals;
        },
        entries(){
            var entries = [];
            for(var x in obj) entries.push([x, vals[x]]);
            return entries;
        }
    });
})()

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Math__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Math__);


/***/ }),
/* 135 */
/***/ (function(module, exports) {

Object.assign(Math,{
    range(a,b){
        return (b - a) * Math.random() + a;
    },
    polygonArea(points){
        const arrL = points.slice(0).reverse();
        arrL.push(arrL[0]);
        let sumX = 0, sumY = 0;
        
        for(let i = 0; i < points.length; i ++){
            sumX += arrL[i].x * arrL[i+1].y;
            sumY += arrL[i].y * arrL[i+1].x;
        }
        return Math.abs(sumX - sumY)/2;
    }
})

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Prop */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Events__ = __webpack_require__(76);


function equal(a, b) {
    if(a === b) return true;
    if(a instanceof Array){
        if(a.length != b.length) return false;
        return a.find((el,i) => !equal(el,b[i])) === undefined;
    }
    if(a instanceof Object){
        const keysA = Object.keys(a), keysB = Object.keys(b);
        if(keysA.length !== keysB.length) return false;
        return !Object.keys(b).find(key => {
            return !equal(a[key],b[key]);
        });
    }
    return false;
}

var Conn = (function(){
    function override(obj, news) {
        Object.keys(news).forEach(key => {
            obj[key] = news[key](obj[key]);
        });
    }

    function Conn(store, Com, call) {
        call = call.bind(store, store);
        var lastState;
        const conn = this, request = (function(){
            var newState = call();
            if (equal(lastState, newState)) return false;
            if(!this.emit('request',lastState,newState)) return false;
            this.update(newState);
        }).bind(this);
        const getTypeCom = () => {
            if(Com instanceof Function && Com.prototype.isReactComponent) return 'react';
            
            return 'vue';
        }

        Object(__WEBPACK_IMPORTED_MODULE_0__Events__["a" /* default */])(this.__proto__);

        Object.assign(this.__proto__,{
            request(){},
            update(newState){
                if(!this.emit('update',lastState,newState)) return false;
                lastState = newState;
            },
            stop(){
                this.request = ()=>{};
            },
            start(){
                this.request = request;
                lastState = call();
            },
            destroy(){
                this.emit('destroy');
                this.off();
            }
        });
    
        const type = ({
            vue(){
                var updateFn;
                override(Com, {
                    data: su => function(){
                        conn.start();
                        const df = su && su.apply(this,arguments) || {};
                        return Object.assign(df,lastState);
                    },
                    created: su => function() {
                        updateFn = (prev,next) => {
                            Object.assign(this,next);
                        }
                        conn.on('update', updateFn);
                        return su && su.apply(this,arguments);
                    },
                    beforeDestroy: su => function() {
                        conn.off('update',updateFn);
                        conn.stop();
                        return su && su.apply(this,arguments);
                    }
                });
            },
            react(){
                var props,updateFn;
                override(Com.prototype,{
                    componentWillMount: su => function(){
                        conn.start();
                        props = Object.assign({},this.props,lastState);
                        this.props = new Proxy(props,{
                            get(props,name){return props[name]},
                            set(){return false}
                        });
                        conn.on('update', updateFn = (prev,next) => {
                            Object.assign(props, next);
                            this.forceUpdate();
                        });
                        return su && su.apply(this,arguments);
                    },
                    componentWillUnmount:su => function(){
                        conn.stop('update',updateFn);
                        return su && su.apply(this,arguments);
                    }
                })
            }
        })[getTypeCom()];
        type && type.call(this);
    }
    return Conn;
})();

function Prop(value, watch){
    if(!(this instanceof Prop)) return new Prop(value, watch);
    Object.assign(this,{
        value(){return value},
        watch(){return watch}
    })
}

function DataStore(props) {
    var data = new function(){},
        actions = {},
        _get = key => data[key],
        connected = [],
        callUpdate = () => {
            clearTimeout(callUpdate.timeOut);
            callUpdate.timeOut = setTimeout(()=> connected.forEach(com => com.request()))
        };

    const store = new Proxy(data, {
        get: (data, key) => {
            return _get(key);
        },
        set: (data, key, value) => {
            store.dispatch(key, value);
            return true;
        }
    });
    Object(__WEBPACK_IMPORTED_MODULE_0__Events__["a" /* default */])(data.__proto__);
    
    function defs(obj){
        Object.keys(obj).forEach(name => {
            obj[name].value = obj[name].value.bind(store);
        });
        Object.defineProperties(data.__proto__,obj);
    }

    defs({
        define: {
            value(key, call, watch) {
                if(call instanceof Prop) return this.define(key, call.value(), call.watch());
                if (call instanceof Function) {
                    actions[key] = call;
                    data[key] = call.call(store);
                }else {
                    actions[key] = data => data;
                    data[key] = call;
                }

                if(watch instanceof Object)
                    Object.entries(watch).forEach((name, call) => {
                        store.watch(name, () => {
                            var rs = {};
                            rs[name] = call.call(store, data[name]);
                            return rs;
                        })
                    });              
            },
            writable: false
        },

        watch: {
            value(name, call){
                if(name instanceof Object){
                    Object.entries(name).forEach(entry => store.watch.apply(store,entry))
                }else if(call instanceof Function){
                    store.on('changed:'+name, newVal => {
                        Object.entries(call.call(store, newVal) || {}).forEach(([key, value]) => {
                            if(equal(data[key], value)) return;
                            if(!store.emit('change:' + key, value)) return;
                            data[key] = value;
                            store.emit('changed:' + key, value);
                        });
                        
                    })
                    
                }
                return store;
            },
            writable: false
        },
        
        dispatch: {
            value(name, value) {
                if(!store.emit('dispatch:'+name, value)) return;
                var action = actions[name];
                if (action) {
                    var newVal = action.call(store, value, data[name]);
                    if (equal(data[name], newVal)) return;
                    if(!store.emit('change:' + name, newVal)) return;
                    data[name] = newVal;
                    store.emit('changed:' + name, newVal);
                }else{
                    store.emit('changed:' + name, value);
                }
            },
            writable: false
        },
        
        connect: {
            value(Com, call) {
                const conn = {
                    component: Com,
                    call: call
                }
                if(!store.emit('connect', conn)) return store;

                var instance = new Conn(store, Com, call);
                instance.on('destroy',() => {
                    store.emit('disconnect', Com, call)
                    connected.splice(connected.indexOf(instance),1)
                });
                connected.push(instance);
                // return Com;
                return conn.component;
            },
            writable: false
        }
    });

    Object.entries(props).forEach(entry => store.define.apply(store, entry));
    store.on('changed', name => data.hasOwnProperty(name) && callUpdate());
    return store
}
DataStore.Prop = Prop;

/* harmony default export */ __webpack_exports__["a"] = (DataStore);

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(37);

var _keys2 = _interopRequireDefault(_keys);

var _promise = __webpack_require__(139);

var _promise2 = _interopRequireDefault(_promise);

var _slicedToArray2 = __webpack_require__(7);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(9);

var _entries2 = _interopRequireDefault(_entries);

var _pixi = __webpack_require__(5);

var _gameplay = __webpack_require__(74);

var _gameplay2 = _interopRequireDefault(_gameplay);

var _resource = __webpack_require__(55);

var _resource2 = _interopRequireDefault(_resource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getLance(num) {
    return [{ x: 0, y: num * .333 }, { x: 1, y: num * .333 }, { x: 1, y: (num + 1) * .333 }, { x: 0, y: (num + 1) * .333 }];
}

var types = {
    one: function one() {
        var lance = _gameplay2.default.lance + 1;
        lance = lance > 2 ? 0 : lance;
        return getLance(lance);
    },
    two: function two() {
        var lances = [0, 1, 2];
        lances.splice(_gameplay2.default.lance, 1);
        return lances.map(function (num) {
            return getLance(num);
        });
    },
    three: function three() {
        return [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }];
    },
    double: function double() {
        _gameplay2.default.boost *= 2;
        var distance = _gameplay2.default.distance,
            onDistance = function onDistance(value) {
            if (value - distance < 500) return;
            _gameplay2.default.boost /= 2;
            _gameplay2.default.off('changed:distance', onDistance);
        };

        _gameplay2.default.on('changed:distance', onDistance);
    }
};

var skills = {};
(0, _entries2.default)({
    'aang2': {
        paths: types.double
    },
    'aegh6': {
        paths: types.three
    },
    'aem7u': {
        paths: types.double
    },
    'ait3o': {
        paths: types.three
    },
    'choo1': {
        paths: types.one
    },
    'co4ao': {
        paths: types.double
    },
    'dah8f': {
        paths: types.three
    },
    'eedo9': {
        paths: types.two
    },
    'eesh7': {
        paths: types.three
    },
    'ei5pa': {
        paths: types.double
    },
    'eik9e': {
        paths: types.one
    },
    'eiw9a': {
        paths: types.one
    },
    'equ7e': {
        paths: types.two
    },
    'hae1n': {
        paths: types.two
    },
    'hai3y': {
        paths: types.one
    },
    'heem0': {
        paths: types.three
    },
    'ied5e': {
        paths: types.three
    },
    'ied5g': {
        paths: types.two
    },
    'ieko3': {
        paths: types.one
    },
    'iep9i': {
        paths: types.three
    },
    'iequ4': {
        paths: types.double
    },
    'in3oh': {
        paths: types.two
    },
    'iyu7u': {
        paths: types.two
    },
    'jae6g': {
        paths: types.three
    },
    'kori0': {
        paths: types.two
    },
    'ohl4l': {
        paths: types.two
    },
    'ooj6a': {
        paths: types.two
    },
    'ootu9': {
        paths: types.two
    },
    'pei6f': {
        paths: types.two
    },
    'phif0': {
        paths: types.two
    },
    'pohs6': {
        paths: types.two
    },
    'qua2i': {
        paths: types.one
    },
    'quah7': {
        paths: types.two
    },
    'raa8k': {
        paths: types.two
    },
    'sei4d': {
        paths: types.three
    },
    'shae2': {
        paths: types.one
    },
    'shu4f': {
        paths: types.three
    },
    'thai6': {
        paths: types.three
    },
    'ug3ok': {
        paths: types.two
    },
    'yiej8': {
        paths: types.three
    }
}).forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];

    val.sheet = "sprites/skills/" + key + ".png.json";
    skills[key] = val;
});

_resource2.default.skills = {};

var query = new _pixi.loaders.Loader();
function loadMore(ids) {
    return new _promise2.default(function (next) {
        ids.forEach(function (id) {
            id += '';
            query.add(id, skills[id].sheet);
        });

        query.once('complete', function () {
            ids.forEach(function (id) {
                _resource2.default.skills[id] = query.resources[id].textures;
            });
            next(_resource2.default.skills);
        });
        query.load();
    });
}

function getRandom() {
    var ids = (0, _keys2.default)(skills),
        ran = [];
    while (ran.length < 4) {
        ran.push(ids.splice(Math.range(0, ids.length), 1)[0]);
    }return ran;
}

_gameplay2.default.on('change:skills', function (newVal) {
    var loadSkills = newVal.filter(function (id) {
        return !_resource2.default.skills[id];
    });
    if (loadSkills.length === 0) return;
    loadMore(loadSkills).then(function (e) {
        return _gameplay2.default.skills = newVal;
    });
    return false;
});

_gameplay2.default.skills = getRandom();
exports.default = skills;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(140), __esModule: true };

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71);
__webpack_require__(35);
__webpack_require__(28);
__webpack_require__(141);
__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(8).Promise;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(29);
var global = __webpack_require__(13);
var ctx = __webpack_require__(26);
var classof = __webpack_require__(48);
var $export = __webpack_require__(12);
var isObject = __webpack_require__(19);
var aFunction = __webpack_require__(30);
var anInstance = __webpack_require__(142);
var forOf = __webpack_require__(143);
var speciesConstructor = __webpack_require__(79);
var task = __webpack_require__(80).set;
var microtask = __webpack_require__(147)();
var newPromiseCapabilityModule = __webpack_require__(56);
var perform = __webpack_require__(81);
var promiseResolve = __webpack_require__(82);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(11)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(148)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(33)($Promise, PROMISE);
__webpack_require__(149)(PROMISE);
Wrapper = __webpack_require__(8)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(150)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(26);
var call = __webpack_require__(144);
var isArrayIter = __webpack_require__(145);
var anObject = __webpack_require__(14);
var toLength = __webpack_require__(64);
var getIterFn = __webpack_require__(67);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(14);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(22);
var ITERATOR = __webpack_require__(11)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 146 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var macrotask = __webpack_require__(80).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(25)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(20);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(13);
var core = __webpack_require__(8);
var dP = __webpack_require__(18);
var DESCRIPTORS = __webpack_require__(16);
var SPECIES = __webpack_require__(11)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(11)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(12);
var core = __webpack_require__(8);
var global = __webpack_require__(13);
var speciesConstructor = __webpack_require__(79);
var promiseResolve = __webpack_require__(82);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(12);
var newPromiseCapability = __webpack_require__(56);
var perform = __webpack_require__(81);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = __webpack_require__(7);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(9);

var _entries2 = _interopRequireDefault(_entries);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _store = __webpack_require__(6);

var _howler = __webpack_require__(154);

var _sprite = __webpack_require__(155);

var _sprite2 = _interopRequireDefault(_sprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sound = function (_Howl) {
    (0, _inherits3.default)(Sound, _Howl);

    function Sound() {
        (0, _classCallCheck3.default)(this, Sound);

        _sprite2.default.src = _sprite2.default.urls;

        var _this = (0, _possibleConstructorReturn3.default)(this, (Sound.__proto__ || (0, _getPrototypeOf2.default)(Sound)).call(this, _sprite2.default));

        _this.load();
        _this.setupActions();
        return _this;
    }

    (0, _createClass3.default)(Sound, [{
        key: 'setupActions',
        value: function setupActions() {
            var _this4 = this;

            var countAttack = 0;
            var actions = this.actions = {
                play: function play(state) {
                    var _this2 = this;

                    if (state && _store.gameplay.distance === 0) {
                        this.play('start');
                        this.once('end', function () {
                            return _this2.play('bgm');
                        });
                    } else if (state) {
                        this.play('bgm');
                    } else {
                        this.pause();
                    }
                },
                attack: function attack() {
                    countAttack++;
                    this.play('attack-' + countAttack);
                    countAttack = countAttack % 2;
                },
                end: function end(state) {
                    var _this3 = this;

                    if (state) {
                        _store.gameplay.once('changed:play', function (state) {
                            return state || _this3.play('end') || true;
                        });
                    }
                },
                bossdead: function bossdead(state) {
                    if (state) {
                        this.play('boss');
                    }
                }
            };
            (0, _entries2.default)(actions).forEach(function (_ref) {
                var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                    key = _ref2[0],
                    func = _ref2[1];

                return actions[key] = func.bind(_this4);
            });

            _store.gameplay.on('changed:play', actions.play).on('changed:attack', actions.attack).on('changed:end', actions.end).on('changed:bossdead', actions.bossdead);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            _store.gameplay;
        }
    }]);
    return Sound;
}(_howler.Howl);

exports.default = Sound;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 *  howler.js v2.0.9
 *  howlerjs.com
 *
 *  (c) 2013-2018, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Create the global controller. All contained methods and properties apply
   * to all sounds that are currently playing or will be in the future.
   */
  var HowlerGlobal = function() {
    this.init();
  };
  HowlerGlobal.prototype = {
    /**
     * Initialize the global Howler object.
     * @return {Howler}
     */
    init: function() {
      var self = this || Howler;

      // Create a global ID counter.
      self._counter = 1000;

      // Internal properties.
      self._codecs = {};
      self._howls = [];
      self._muted = false;
      self._volume = 1;
      self._canPlayEvent = 'canplaythrough';
      self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;

      // Public properties.
      self.masterGain = null;
      self.noAudio = false;
      self.usingWebAudio = true;
      self.autoSuspend = true;
      self.ctx = null;

      // Set to false to disable the auto iOS enabler.
      self.mobileAutoEnable = true;

      // Setup the various state values for global tracking.
      self._setup();

      return self;
    },

    /**
     * Get/set the global volume for all sounds.
     * @param  {Float} vol Volume from 0.0 to 1.0.
     * @return {Howler/Float}     Returns self or current volume.
     */
    volume: function(vol) {
      var self = this || Howler;
      vol = parseFloat(vol);

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        self._volume = vol;

        // Don't update any of the nodes if we are muted.
        if (self._muted) {
          return self;
        }

        // When using Web Audio, we just need to adjust the master gain.
        if (self.usingWebAudio) {
          self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
        }

        // Loop through and change volume for all HTML5 audio nodes.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and change the volumes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node) {
                sound._node.volume = sound._volume * vol;
              }
            }
          }
        }

        return self;
      }

      return self._volume;
    },

    /**
     * Handle muting and unmuting globally.
     * @param  {Boolean} muted Is muted or not.
     */
    mute: function(muted) {
      var self = this || Howler;

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      self._muted = muted;

      // With Web Audio, we just need to mute the master gain.
      if (self.usingWebAudio) {
        self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
      }

      // Loop through and mute all HTML5 Audio nodes.
      for (var i=0; i<self._howls.length; i++) {
        if (!self._howls[i]._webAudio) {
          // Get all of the sounds in this Howl group.
          var ids = self._howls[i]._getSoundIds();

          // Loop through all sounds and mark the audio node as muted.
          for (var j=0; j<ids.length; j++) {
            var sound = self._howls[i]._soundById(ids[j]);

            if (sound && sound._node) {
              sound._node.muted = (muted) ? true : sound._muted;
            }
          }
        }
      }

      return self;
    },

    /**
     * Unload and destroy all currently loaded Howl objects.
     * @return {Howler}
     */
    unload: function() {
      var self = this || Howler;

      for (var i=self._howls.length-1; i>=0; i--) {
        self._howls[i].unload();
      }

      // Create a new AudioContext to make sure it is fully reset.
      if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
        self.ctx.close();
        self.ctx = null;
        setupAudioContext();
      }

      return self;
    },

    /**
     * Check for codec support of specific extension.
     * @param  {String} ext Audio file extention.
     * @return {Boolean}
     */
    codecs: function(ext) {
      return (this || Howler)._codecs[ext.replace(/^x-/, '')];
    },

    /**
     * Setup various state values for global tracking.
     * @return {Howler}
     */
    _setup: function() {
      var self = this || Howler;

      // Keeps track of the suspend/resume state of the AudioContext.
      self.state = self.ctx ? self.ctx.state || 'running' : 'running';

      // Automatically begin the 30-second suspend process
      self._autoSuspend();

      // Check if audio is available.
      if (!self.usingWebAudio) {
        // No audio is available on this system if noAudio is set to true.
        if (typeof Audio !== 'undefined') {
          try {
            var test = new Audio();

            // Check if the canplaythrough event is available.
            if (typeof test.oncanplaythrough === 'undefined') {
              self._canPlayEvent = 'canplay';
            }
          } catch(e) {
            self.noAudio = true;
          }
        } else {
          self.noAudio = true;
        }
      }

      // Test to make sure audio isn't disabled in Internet Explorer.
      try {
        var test = new Audio();
        if (test.muted) {
          self.noAudio = true;
        }
      } catch (e) {}

      // Check for supported codecs.
      if (!self.noAudio) {
        self._setupCodecs();
      }

      return self;
    },

    /**
     * Check for browser support for various codecs and cache the results.
     * @return {Howler}
     */
    _setupCodecs: function() {
      var self = this || Howler;
      var audioTest = null;

      // Must wrap in a try/catch because IE11 in server mode throws an error.
      try {
        audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;
      } catch (err) {
        return self;
      }

      if (!audioTest || typeof audioTest.canPlayType !== 'function') {
        return self;
      }

      var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');

      // Opera version <33 has mixed MP3 support, so we need to check for and block it.
      var checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g);
      var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);

      self._codecs = {
        mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
        mpeg: !!mpegTest,
        opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
        ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
        aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
        caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
        m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
        webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
        dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
        flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
      };

      return self;
    },

    /**
     * Mobile browsers will only allow audio to be played after a user interaction.
     * Attempt to automatically unlock audio on the first user interaction.
     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
     * @return {Howler}
     */
    _enableMobileAudio: function() {
      var self = this || Howler;

      // Only run this on mobile devices if audio isn't already eanbled.
      var isMobile = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(self._navigator && self._navigator.userAgent);
      var isTouch = !!(('ontouchend' in window) || (self._navigator && self._navigator.maxTouchPoints > 0) || (self._navigator && self._navigator.msMaxTouchPoints > 0));
      if (self._mobileEnabled || !self.ctx || (!isMobile && !isTouch)) {
        return;
      }

      self._mobileEnabled = false;

      // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
      // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
      // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
      if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
        self._mobileUnloaded = true;
        self.unload();
      }

      // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
      // http://stackoverflow.com/questions/24119684
      self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);

      // Call this method on touch start to create and play a buffer,
      // then check if the audio actually played to determine if
      // audio has now been unlocked on iOS, Android, etc.
      var unlock = function() {
        // Fix Android can not play in suspend state.
        Howler._autoResume();

        // Create an empty buffer.
        var source = self.ctx.createBufferSource();
        source.buffer = self._scratchBuffer;
        source.connect(self.ctx.destination);

        // Play the empty buffer.
        if (typeof source.start === 'undefined') {
          source.noteOn(0);
        } else {
          source.start(0);
        }

        // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
        if (typeof self.ctx.resume === 'function') {
          self.ctx.resume();
        }

        // Setup a timeout to check that we are unlocked on the next event loop.
        source.onended = function() {
          source.disconnect(0);

          // Update the unlocked state and prevent this check from happening again.
          self._mobileEnabled = true;
          self.mobileAutoEnable = false;

          // Remove the touch start listener.
          document.removeEventListener('touchstart', unlock, true);
          document.removeEventListener('touchend', unlock, true);
        };
      };

      // Setup a touch start listener to attempt an unlock in.
      document.addEventListener('touchstart', unlock, true);
      document.addEventListener('touchend', unlock, true);

      return self;
    },

    /**
     * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
     * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
     * @return {Howler}
     */
    _autoSuspend: function() {
      var self = this;

      if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      // Check if any sounds are playing.
      for (var i=0; i<self._howls.length; i++) {
        if (self._howls[i]._webAudio) {
          for (var j=0; j<self._howls[i]._sounds.length; j++) {
            if (!self._howls[i]._sounds[j]._paused) {
              return self;
            }
          }
        }
      }

      if (self._suspendTimer) {
        clearTimeout(self._suspendTimer);
      }

      // If no sound has played after 30 seconds, suspend the context.
      self._suspendTimer = setTimeout(function() {
        if (!self.autoSuspend) {
          return;
        }

        self._suspendTimer = null;
        self.state = 'suspending';
        self.ctx.suspend().then(function() {
          self.state = 'suspended';

          if (self._resumeAfterSuspend) {
            delete self._resumeAfterSuspend;
            self._autoResume();
          }
        });
      }, 30000);

      return self;
    },

    /**
     * Automatically resume the Web Audio AudioContext when a new sound is played.
     * @return {Howler}
     */
    _autoResume: function() {
      var self = this;

      if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      if (self.state === 'running' && self._suspendTimer) {
        clearTimeout(self._suspendTimer);
        self._suspendTimer = null;
      } else if (self.state === 'suspended') {
        self.ctx.resume().then(function() {
          self.state = 'running';

          // Emit to all Howls that the audio has resumed.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('resume');
          }
        });

        if (self._suspendTimer) {
          clearTimeout(self._suspendTimer);
          self._suspendTimer = null;
        }
      } else if (self.state === 'suspending') {
        self._resumeAfterSuspend = true;
      }

      return self;
    }
  };

  // Setup the global audio controller.
  var Howler = new HowlerGlobal();

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Create an audio group controller.
   * @param {Object} o Passed in properties for this group.
   */
  var Howl = function(o) {
    var self = this;

    // Throw an error if no source is provided.
    if (!o.src || o.src.length === 0) {
      console.error('An array of source files must be passed with any new Howl.');
      return;
    }

    self.init(o);
  };
  Howl.prototype = {
    /**
     * Initialize a new Howl group object.
     * @param  {Object} o Passed in properties for this group.
     * @return {Howl}
     */
    init: function(o) {
      var self = this;

      // If we don't have an AudioContext created yet, run the setup.
      if (!Howler.ctx) {
        setupAudioContext();
      }

      // Setup user-defined default properties.
      self._autoplay = o.autoplay || false;
      self._format = (typeof o.format !== 'string') ? o.format : [o.format];
      self._html5 = o.html5 || false;
      self._muted = o.mute || false;
      self._loop = o.loop || false;
      self._pool = o.pool || 5;
      self._preload = (typeof o.preload === 'boolean') ? o.preload : true;
      self._rate = o.rate || 1;
      self._sprite = o.sprite || {};
      self._src = (typeof o.src !== 'string') ? o.src : [o.src];
      self._volume = o.volume !== undefined ? o.volume : 1;
      self._xhrWithCredentials = o.xhrWithCredentials || false;

      // Setup all other default properties.
      self._duration = 0;
      self._state = 'unloaded';
      self._sounds = [];
      self._endTimers = {};
      self._queue = [];
      self._playLock = false;

      // Setup event listeners.
      self._onend = o.onend ? [{fn: o.onend}] : [];
      self._onfade = o.onfade ? [{fn: o.onfade}] : [];
      self._onload = o.onload ? [{fn: o.onload}] : [];
      self._onloaderror = o.onloaderror ? [{fn: o.onloaderror}] : [];
      self._onplayerror = o.onplayerror ? [{fn: o.onplayerror}] : [];
      self._onpause = o.onpause ? [{fn: o.onpause}] : [];
      self._onplay = o.onplay ? [{fn: o.onplay}] : [];
      self._onstop = o.onstop ? [{fn: o.onstop}] : [];
      self._onmute = o.onmute ? [{fn: o.onmute}] : [];
      self._onvolume = o.onvolume ? [{fn: o.onvolume}] : [];
      self._onrate = o.onrate ? [{fn: o.onrate}] : [];
      self._onseek = o.onseek ? [{fn: o.onseek}] : [];
      self._onresume = [];

      // Web Audio or HTML5 Audio?
      self._webAudio = Howler.usingWebAudio && !self._html5;

      // Automatically try to enable audio on iOS.
      if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.mobileAutoEnable) {
        Howler._enableMobileAudio();
      }

      // Keep track of this Howl group in the global controller.
      Howler._howls.push(self);

      // If they selected autoplay, add a play event to the load queue.
      if (self._autoplay) {
        self._queue.push({
          event: 'play',
          action: function() {
            self.play();
          }
        });
      }

      // Load the source file unless otherwise specified.
      if (self._preload) {
        self.load();
      }

      return self;
    },

    /**
     * Load the audio file.
     * @return {Howler}
     */
    load: function() {
      var self = this;
      var url = null;

      // If no audio is available, quit immediately.
      if (Howler.noAudio) {
        self._emit('loaderror', null, 'No audio support.');
        return;
      }

      // Make sure our source is in an array.
      if (typeof self._src === 'string') {
        self._src = [self._src];
      }

      // Loop through the sources and pick the first one that is compatible.
      for (var i=0; i<self._src.length; i++) {
        var ext, str;

        if (self._format && self._format[i]) {
          // If an extension was specified, use that instead.
          ext = self._format[i];
        } else {
          // Make sure the source is a string.
          str = self._src[i];
          if (typeof str !== 'string') {
            self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
            continue;
          }

          // Extract the file extension from the URL or base64 data URI.
          ext = /^data:audio\/([^;,]+);/i.exec(str);
          if (!ext) {
            ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
          }

          if (ext) {
            ext = ext[1].toLowerCase();
          }
        }

        // Log a warning if no extension was found.
        if (!ext) {
          console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
        }

        // Check if this extension is available.
        if (ext && Howler.codecs(ext)) {
          url = self._src[i];
          break;
        }
      }

      if (!url) {
        self._emit('loaderror', null, 'No codec support for selected audio sources.');
        return;
      }

      self._src = url;
      self._state = 'loading';

      // If the hosting page is HTTPS and the source isn't,
      // drop down to HTML5 Audio to avoid Mixed Content errors.
      if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
        self._html5 = true;
        self._webAudio = false;
      }

      // Create a new sound object and add it to the pool.
      new Sound(self);

      // Load and decode the audio data for playback.
      if (self._webAudio) {
        loadBuffer(self);
      }

      return self;
    },

    /**
     * Play a sound or resume previous playback.
     * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Number}          Sound ID.
     */
    play: function(sprite, internal) {
      var self = this;
      var id = null;

      // Determine if a sprite, sound id or nothing was passed
      if (typeof sprite === 'number') {
        id = sprite;
        sprite = null;
      } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
        // If the passed sprite doesn't exist, do nothing.
        return null;
      } else if (typeof sprite === 'undefined') {
        // Use the default sound sprite (plays the full audio length).
        sprite = '__default';

        // Check if there is a single paused sound that isn't ended.
        // If there is, play that sound. If not, continue as usual.
        var num = 0;
        for (var i=0; i<self._sounds.length; i++) {
          if (self._sounds[i]._paused && !self._sounds[i]._ended) {
            num++;
            id = self._sounds[i]._id;
          }
        }

        if (num === 1) {
          sprite = null;
        } else {
          id = null;
        }
      }

      // Get the selected node, or get one from the pool.
      var sound = id ? self._soundById(id) : self._inactiveSound();

      // If the sound doesn't exist, do nothing.
      if (!sound) {
        return null;
      }

      // Select the sprite definition.
      if (id && !sprite) {
        sprite = sound._sprite || '__default';
      }

      // If the sound hasn't loaded, we must wait to get the audio's duration.
      // We also need to wait to make sure we don't run into race conditions with
      // the order of function calls.
      if (self._state !== 'loaded') {
        // Set the sprite value on this sound.
        sound._sprite = sprite;

        // Makr this sounded as not ended in case another sound is played before this one loads.
        sound._ended = false;

        // Add the sound to the queue to be played on load.
        var soundId = sound._id;
        self._queue.push({
          event: 'play',
          action: function() {
            self.play(soundId);
          }
        });

        return soundId;
      }

      // Don't play the sound if an id was passed and it is already playing.
      if (id && !sound._paused) {
        // Trigger the play event, in order to keep iterating through queue.
        if (!internal) {
          self._loadQueue('play');
        }

        return sound._id;
      }

      // Make sure the AudioContext isn't suspended, and resume it if it is.
      if (self._webAudio) {
        Howler._autoResume();
      }

      // Determine how long to play for and where to start playing.
      var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
      var duration = Math.max(0, ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek);
      var timeout = (duration * 1000) / Math.abs(sound._rate);

      // Update the parameters of the sound
      sound._paused = false;
      sound._ended = false;
      sound._sprite = sprite;
      sound._seek = seek;
      sound._start = self._sprite[sprite][0] / 1000;
      sound._stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
      sound._loop = !!(sound._loop || self._sprite[sprite][2]);

      // Begin the actual playback.
      var node = sound._node;
      if (self._webAudio) {
        // Fire this when the sound is ready to play to begin Web Audio playback.
        var playWebAudio = function() {
          self._refreshBuffer(sound);

          // Setup the playback params.
          var vol = (sound._muted || self._muted) ? 0 : sound._volume;
          node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
          sound._playStart = Howler.ctx.currentTime;

          // Play the sound using the supported method.
          if (typeof node.bufferSource.start === 'undefined') {
            sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
          } else {
            sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
          }

          // Start a new timer if none is present.
          if (timeout !== Infinity) {
            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
          }

          if (!internal) {
            setTimeout(function() {
              self._emit('play', sound._id);
            }, 0);
          }
        };

        if (Howler.state === 'running') {
          playWebAudio();
        } else {
          self.once('resume', playWebAudio);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      } else {
        // Fire this when the sound is ready to play to begin HTML5 Audio playback.
        var playHtml5 = function() {
          node.currentTime = seek;
          node.muted = sound._muted || self._muted || Howler._muted || node.muted;
          node.volume = sound._volume * Howler.volume();
          node.playbackRate = sound._rate;

          // Mobile browsers will throw an error if this is called without user interaction.
          try {
            var play = node.play();

            // Support older browsers that don't support promises, and thus don't have this issue.
            if (typeof Promise !== 'undefined' && play instanceof Promise) {
              // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
              self._playLock = true;

              // Releases the lock and executes queued actions.
              var runLoadQueue = function() {
                self._playLock = false;
                if (!internal) {
                  self._emit('play', sound._id);
                }
              };
              play.then(runLoadQueue, runLoadQueue);
            } else if (!internal) {
              self._emit('play', sound._id);
            }

            // If the node is still paused, then we can assume there was a playback issue.
            if (node.paused) {
              self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                'on mobile devices where playback was not within a user interaction.');
              return;
            }

            // Setup the end timer on sprites or listen for the ended event.
            if (sprite !== '__default') {
              self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            } else {
              self._endTimers[sound._id] = function() {
                // Fire ended on this audio node.
                self._ended(sound);

                // Clear this listener.
                node.removeEventListener('ended', self._endTimers[sound._id], false);
              };
              node.addEventListener('ended', self._endTimers[sound._id], false);
            }
          } catch (err) {
            self._emit('playerror', sound._id, err);
          }
        };

        // Play immediately if ready, or wait for the 'canplaythrough'e vent.
        var loadedNoReadyState = (window && window.ejecta) || (!node.readyState && Howler._navigator.isCocoonJS);
        if (node.readyState >= 3 || loadedNoReadyState) {
          playHtml5();
        } else {
          var listener = function() {
            // Begin playback.
            playHtml5();

            // Clear this listener.
            node.removeEventListener(Howler._canPlayEvent, listener, false);
          };
          node.addEventListener(Howler._canPlayEvent, listener, false);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      }

      return sound._id;
    },

    /**
     * Pause playback and save current position.
     * @param  {Number} id The sound ID (empty to pause all in group).
     * @return {Howl}
     */
    pause: function(id) {
      var self = this;

      // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'pause',
          action: function() {
            self.pause(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be paused.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound && !sound._paused) {
          // Reset the seek position.
          sound._seek = self.seek(ids[i]);
          sound._rateSeek = 0;
          sound._paused = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound has been created.
              if (!sound._node.bufferSource) {
                continue;
              }

              if (typeof sound._node.bufferSource.stop === 'undefined') {
                sound._node.bufferSource.noteOff(0);
              } else {
                sound._node.bufferSource.stop(0);
              }

              // Clean up the buffer source.
              self._cleanBuffer(sound._node);
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.pause();
            }
          }
        }

        // Fire the pause event, unless `true` is passed as the 2nd argument.
        if (!arguments[1]) {
          self._emit('pause', sound ? sound._id : null);
        }
      }

      return self;
    },

    /**
     * Stop playback and reset to start.
     * @param  {Number} id The sound ID (empty to stop all in group).
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Howl}
     */
    stop: function(id, internal) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to stop when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'stop',
          action: function() {
            self.stop(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be stopped.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          // Reset the seek position.
          sound._seek = sound._start || 0;
          sound._rateSeek = 0;
          sound._paused = true;
          sound._ended = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound's AudioBufferSourceNode has been created.
              if (sound._node.bufferSource) {
                if (typeof sound._node.bufferSource.stop === 'undefined') {
                  sound._node.bufferSource.noteOff(0);
                } else {
                  sound._node.bufferSource.stop(0);
                }

                // Clean up the buffer source.
                self._cleanBuffer(sound._node);
              }
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.currentTime = sound._start || 0;
              sound._node.pause();
            }
          }

          if (!internal) {
            self._emit('stop', sound._id);
          }
        }
      }

      return self;
    },

    /**
     * Mute/unmute a single sound or all sounds in this Howl group.
     * @param  {Boolean} muted Set to true to mute and false to unmute.
     * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
     * @return {Howl}
     */
    mute: function(muted, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to mute when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'mute',
          action: function() {
            self.mute(muted, id);
          }
        });

        return self;
      }

      // If applying mute/unmute to all sounds, update the group's value.
      if (typeof id === 'undefined') {
        if (typeof muted === 'boolean') {
          self._muted = muted;
        } else {
          return self._muted;
        }
      }

      // If no id is passed, get all ID's to be muted.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          sound._muted = muted;

          // Cancel active fade and set the volume to the end value.
          if (sound._interval) {
            self._stopFade(sound._id);
          }

          if (self._webAudio && sound._node) {
            sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
          } else if (sound._node) {
            sound._node.muted = Howler._muted ? true : muted;
          }

          self._emit('mute', sound._id);
        }
      }

      return self;
    },

    /**
     * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
     *   volume() -> Returns the group's volume value.
     *   volume(id) -> Returns the sound id's current volume.
     *   volume(vol) -> Sets the volume of all sounds in this Howl group.
     *   volume(vol, id) -> Sets the volume of passed sound id.
     * @return {Howl/Number} Returns self or current volume.
     */
    volume: function() {
      var self = this;
      var args = arguments;
      var vol, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // Return the value of the groups' volume.
        return self._volume;
      } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
        // First check if this is an ID, and if not, assume it is a new volume.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          vol = parseFloat(args[0]);
        }
      } else if (args.length >= 2) {
        vol = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the volume or return the current volume.
      var sound;
      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        // If the sound hasn't loaded, add it to the load queue to change volume when capable.
        if (self._state !== 'loaded') {
          self._queue.push({
            event: 'volume',
            action: function() {
              self.volume.apply(self, args);
            }
          });

          return self;
        }

        // Set the group volume.
        if (typeof id === 'undefined') {
          self._volume = vol;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            sound._volume = vol;

            // Stop currently running fades.
            if (!args[2]) {
              self._stopFade(id[i]);
            }

            if (self._webAudio && sound._node && !sound._muted) {
              sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
            } else if (sound._node && !sound._muted) {
              sound._node.volume = vol * Howler.volume();
            }

            self._emit('volume', sound._id);
          }
        }
      } else {
        sound = id ? self._soundById(id) : self._sounds[0];
        return sound ? sound._volume : 0;
      }

      return self;
    },

    /**
     * Fade a currently playing sound between two volumes (if no id is passsed, all sounds will fade).
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id (omit to fade all sounds).
     * @return {Howl}
     */
    fade: function(from, to, len, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to fade when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'fade',
          action: function() {
            self.fade(from, to, len, id);
          }
        });

        return self;
      }

      // Set the volume to the start position.
      self.volume(from, id);

      // Fade the volume of one or all sounds.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        // Create a linear fade or fall back to timeouts with HTML5 Audio.
        if (sound) {
          // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
          if (!id) {
            self._stopFade(ids[i]);
          }

          // If we are using Web Audio, let the native methods do the actual fade.
          if (self._webAudio && !sound._muted) {
            var currentTime = Howler.ctx.currentTime;
            var end = currentTime + (len / 1000);
            sound._volume = from;
            sound._node.gain.setValueAtTime(from, currentTime);
            sound._node.gain.linearRampToValueAtTime(to, end);
          }

          self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
        }
      }

      return self;
    },

    /**
     * Starts the internal interval to fade a sound.
     * @param  {Object} sound Reference to sound to fade.
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id to fade.
     * @param  {Boolean} isGroup   If true, set the volume on the group.
     */
    _startFadeInterval: function(sound, from, to, len, id, isGroup) {
      var self = this;
      var vol = from;
      var diff = to - from;
      var steps = Math.abs(diff / 0.01);
      var stepLen = Math.max(4, (steps > 0) ? len / steps : len);
      var lastTick = Date.now();

      // Store the value being faded to.
      sound._fadeTo = to;

      // Update the volume value on each interval tick.
      sound._interval = setInterval(function() {
        // Update the volume based on the time since the last tick.
        var tick = (Date.now() - lastTick) / len;
        lastTick = Date.now();
        vol += diff * tick;

        // Make sure the volume is in the right bounds.
        vol = Math.max(0, vol);
        vol = Math.min(1, vol);

        // Round to within 2 decimal points.
        vol = Math.round(vol * 100) / 100;

        // Change the volume.
        if (self._webAudio) {
          sound._volume = vol;
        } else {
          self.volume(vol, sound._id, true);
        }

        // Set the group's volume.
        if (isGroup) {
          self._volume = vol;
        }

        // When the fade is complete, stop it and fire event.
        if ((to < from && vol <= to) || (to > from && vol >= to)) {
          clearInterval(sound._interval);
          sound._interval = null;
          sound._fadeTo = null;
          self.volume(to, sound._id);
          self._emit('fade', sound._id);
        }
      }, stepLen);
    },

    /**
     * Internal method that stops the currently playing fade when
     * a new fade starts, volume is changed or the sound is stopped.
     * @param  {Number} id The sound id.
     * @return {Howl}
     */
    _stopFade: function(id) {
      var self = this;
      var sound = self._soundById(id);

      if (sound && sound._interval) {
        if (self._webAudio) {
          sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
        }

        clearInterval(sound._interval);
        sound._interval = null;
        self.volume(sound._fadeTo, id);
        sound._fadeTo = null;
        self._emit('fade', id);
      }

      return self;
    },

    /**
     * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
     *   loop() -> Returns the group's loop value.
     *   loop(id) -> Returns the sound id's loop value.
     *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
     *   loop(loop, id) -> Sets the loop value of passed sound id.
     * @return {Howl/Boolean} Returns self or current loop value.
     */
    loop: function() {
      var self = this;
      var args = arguments;
      var loop, id, sound;

      // Determine the values for loop and id.
      if (args.length === 0) {
        // Return the grou's loop value.
        return self._loop;
      } else if (args.length === 1) {
        if (typeof args[0] === 'boolean') {
          loop = args[0];
          self._loop = loop;
        } else {
          // Return this sound's loop value.
          sound = self._soundById(parseInt(args[0], 10));
          return sound ? sound._loop : false;
        }
      } else if (args.length === 2) {
        loop = args[0];
        id = parseInt(args[1], 10);
      }

      // If no id is passed, get all ID's to be looped.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        sound = self._soundById(ids[i]);

        if (sound) {
          sound._loop = loop;
          if (self._webAudio && sound._node && sound._node.bufferSource) {
            sound._node.bufferSource.loop = loop;
            if (loop) {
              sound._node.bufferSource.loopStart = sound._start || 0;
              sound._node.bufferSource.loopEnd = sound._stop;
            }
          }
        }
      }

      return self;
    },

    /**
     * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   rate() -> Returns the first sound node's current playback rate.
     *   rate(id) -> Returns the sound id's current playback rate.
     *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
     *   rate(rate, id) -> Sets the playback rate of passed sound id.
     * @return {Howl/Number} Returns self or the current playback rate.
     */
    rate: function() {
      var self = this;
      var args = arguments;
      var rate, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current rate of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new rate value.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          rate = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        rate = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the playback rate or return the current value.
      var sound;
      if (typeof rate === 'number') {
        // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
        if (self._state !== 'loaded') {
          self._queue.push({
            event: 'rate',
            action: function() {
              self.rate.apply(self, args);
            }
          });

          return self;
        }

        // Set the group rate.
        if (typeof id === 'undefined') {
          self._rate = rate;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            // Keep track of our position when the rate changed and update the playback
            // start position so we can properly adjust the seek position for time elapsed.
            sound._rateSeek = self.seek(id[i]);
            sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
            sound._rate = rate;

            // Change the playback rate.
            if (self._webAudio && sound._node && sound._node.bufferSource) {
              sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
            } else if (sound._node) {
              sound._node.playbackRate = rate;
            }

            // Reset the timers.
            var seek = self.seek(id[i]);
            var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
            var timeout = (duration * 1000) / Math.abs(sound._rate);

            // Start a new end timer if sound is already playing.
            if (self._endTimers[id[i]] || !sound._paused) {
              self._clearTimer(id[i]);
              self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
            }

            self._emit('rate', sound._id);
          }
        }
      } else {
        sound = self._soundById(id);
        return sound ? sound._rate : self._rate;
      }

      return self;
    },

    /**
     * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   seek() -> Returns the first sound node's current seek position.
     *   seek(id) -> Returns the sound id's current seek position.
     *   seek(seek) -> Sets the seek position of the first sound node.
     *   seek(seek, id) -> Sets the seek position of passed sound id.
     * @return {Howl/Number} Returns self or the current seek position.
     */
    seek: function() {
      var self = this;
      var args = arguments;
      var seek, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current position of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new seek position.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else if (self._sounds.length) {
          id = self._sounds[0]._id;
          seek = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        seek = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // If there is no ID, bail out.
      if (typeof id === 'undefined') {
        return self;
      }

      // If the sound hasn't loaded, add it to the load queue to seek when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'seek',
          action: function() {
            self.seek.apply(self, args);
          }
        });

        return self;
      }

      // Get the sound.
      var sound = self._soundById(id);

      if (sound) {
        if (typeof seek === 'number' && seek >= 0) {
          // Pause the sound and update position for restarting playback.
          var playing = self.playing(id);
          if (playing) {
            self.pause(id, true);
          }

          // Move the position of the track and cancel timer.
          sound._seek = seek;
          sound._ended = false;
          self._clearTimer(id);

          // Restart the playback if the sound was playing.
          if (playing) {
            self.play(id, true);
          }

          // Update the seek position for HTML5 Audio.
          if (!self._webAudio && sound._node) {
            sound._node.currentTime = seek;
          }

          // Wait for the play lock to be unset before emitting (HTML5 Audio).
          if (playing && !self._webAudio) {
            var emitSeek = function() {
              if (!self._playLock) {
                self._emit('seek', id);
              } else {
                setTimeout(emitSeek, 0);
              }
            };
            setTimeout(emitSeek, 0);
          } else {
            self._emit('seek', id);
          }
        } else {
          if (self._webAudio) {
            var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
            var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
            return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
          } else {
            return sound._node.currentTime;
          }
        }
      }

      return self;
    },

    /**
     * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
     * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
     * @return {Boolean} True if playing and false if not.
     */
    playing: function(id) {
      var self = this;

      // Check the passed sound ID (if any).
      if (typeof id === 'number') {
        var sound = self._soundById(id);
        return sound ? !sound._paused : false;
      }

      // Otherwise, loop through all sounds and check if any are playing.
      for (var i=0; i<self._sounds.length; i++) {
        if (!self._sounds[i]._paused) {
          return true;
        }
      }

      return false;
    },

    /**
     * Get the duration of this sound. Passing a sound id will return the sprite duration.
     * @param  {Number} id The sound id to check. If none is passed, return full source duration.
     * @return {Number} Audio duration in seconds.
     */
    duration: function(id) {
      var self = this;
      var duration = self._duration;

      // If we pass an ID, get the sound and return the sprite length.
      var sound = self._soundById(id);
      if (sound) {
        duration = self._sprite[sound._sprite][1] / 1000;
      }

      return duration;
    },

    /**
     * Returns the current loaded state of this Howl.
     * @return {String} 'unloaded', 'loading', 'loaded'
     */
    state: function() {
      return this._state;
    },

    /**
     * Unload and destroy the current Howl object.
     * This will immediately stop all sound instances attached to this group.
     */
    unload: function() {
      var self = this;

      // Stop playing any active sounds.
      var sounds = self._sounds;
      for (var i=0; i<sounds.length; i++) {
        // Stop the sound if it is currently playing.
        if (!sounds[i]._paused) {
          self.stop(sounds[i]._id);
        }

        // Remove the source or disconnect.
        if (!self._webAudio) {
          // Set the source to 0-second silence to stop any downloading (except in IE).
          var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);
          if (!checkIE) {
            sounds[i]._node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
          }

          // Remove any event listeners.
          sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
          sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);
        }

        // Empty out all of the nodes.
        delete sounds[i]._node;

        // Make sure all timers are cleared out.
        self._clearTimer(sounds[i]._id);

        // Remove the references in the global Howler object.
        var index = Howler._howls.indexOf(self);
        if (index >= 0) {
          Howler._howls.splice(index, 1);
        }
      }

      // Delete this sound from the cache (if no other Howl is using it).
      var remCache = true;
      for (i=0; i<Howler._howls.length; i++) {
        if (Howler._howls[i]._src === self._src) {
          remCache = false;
          break;
        }
      }

      if (cache && remCache) {
        delete cache[self._src];
      }

      // Clear global errors.
      Howler.noAudio = false;

      // Clear out `self`.
      self._state = 'unloaded';
      self._sounds = [];
      self = null;

      return null;
    },

    /**
     * Listen to a custom event.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
     * @return {Howl}
     */
    on: function(event, fn, id, once) {
      var self = this;
      var events = self['_on' + event];

      if (typeof fn === 'function') {
        events.push(once ? {id: id, fn: fn, once: once} : {id: id, fn: fn});
      }

      return self;
    },

    /**
     * Remove a custom event. Call without parameters to remove all events.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to remove. Leave empty to remove all.
     * @param  {Number}   id    (optional) Only remove events for this sound.
     * @return {Howl}
     */
    off: function(event, fn, id) {
      var self = this;
      var events = self['_on' + event];
      var i = 0;

      // Allow passing just an event and ID.
      if (typeof fn === 'number') {
        id = fn;
        fn = null;
      }

      if (fn || id) {
        // Loop through event store and remove the passed function.
        for (i=0; i<events.length; i++) {
          var isId = (id === events[i].id);
          if (fn === events[i].fn && isId || !fn && isId) {
            events.splice(i, 1);
            break;
          }
        }
      } else if (event) {
        // Clear out all events of this type.
        self['_on' + event] = [];
      } else {
        // Clear out all events of every type.
        var keys = Object.keys(self);
        for (i=0; i<keys.length; i++) {
          if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
            self[keys[i]] = [];
          }
        }
      }

      return self;
    },

    /**
     * Listen to a custom event and remove it once fired.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @return {Howl}
     */
    once: function(event, fn, id) {
      var self = this;

      // Setup the event listener.
      self.on(event, fn, id, 1);

      return self;
    },

    /**
     * Emit all events of a specific type and pass the sound id.
     * @param  {String} event Event name.
     * @param  {Number} id    Sound ID.
     * @param  {Number} msg   Message to go with event.
     * @return {Howl}
     */
    _emit: function(event, id, msg) {
      var self = this;
      var events = self['_on' + event];

      // Loop through event store and fire all functions.
      for (var i=events.length-1; i>=0; i--) {
        // Only fire the listener if the correct ID is used.
        if (!events[i].id || events[i].id === id || event === 'load') {
          setTimeout(function(fn) {
            fn.call(this, id, msg);
          }.bind(self, events[i].fn), 0);

          // If this event was setup with `once`, remove it.
          if (events[i].once) {
            self.off(event, events[i].fn, events[i].id);
          }
        }
      }

      // Pass the event type into load queue so that it can continue stepping.
      self._loadQueue(event);

      return self;
    },

    /**
     * Queue of actions initiated before the sound has loaded.
     * These will be called in sequence, with the next only firing
     * after the previous has finished executing (even if async like play).
     * @return {Howl}
     */
    _loadQueue: function(event) {
      var self = this;

      if (self._queue.length > 0) {
        var task = self._queue[0];

        // Remove this task if a matching event was passed.
        if (task.event === event) {
          self._queue.shift();
          self._loadQueue();
        }

        // Run the task if no event type is passed.
        if (!event) {
          task.action();
        }
      }

      return self;
    },

    /**
     * Fired when playback ends at the end of the duration.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _ended: function(sound) {
      var self = this;
      var sprite = sound._sprite;

      // If we are using IE and there was network latency we may be clipping
      // audio before it completes playing. Lets check the node to make sure it
      // believes it has completed, before ending the playback.
      if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
        setTimeout(self._ended.bind(self, sound), 100);
        return self;
      }

      // Should this sound loop?
      var loop = !!(sound._loop || self._sprite[sprite][2]);

      // Fire the ended event.
      self._emit('end', sound._id);

      // Restart the playback for HTML5 Audio loop.
      if (!self._webAudio && loop) {
        self.stop(sound._id, true).play(sound._id);
      }

      // Restart this timer if on a Web Audio loop.
      if (self._webAudio && loop) {
        self._emit('play', sound._id);
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        sound._playStart = Howler.ctx.currentTime;

        var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
        self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
      }

      // Mark the node as paused.
      if (self._webAudio && !loop) {
        sound._paused = true;
        sound._ended = true;
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        self._clearTimer(sound._id);

        // Clean up the buffer source.
        self._cleanBuffer(sound._node);

        // Attempt to auto-suspend AudioContext if no sounds are still playing.
        Howler._autoSuspend();
      }

      // When using a sprite, end the track.
      if (!self._webAudio && !loop) {
        self.stop(sound._id);
      }

      return self;
    },

    /**
     * Clear the end timer for a sound playback.
     * @param  {Number} id The sound ID.
     * @return {Howl}
     */
    _clearTimer: function(id) {
      var self = this;

      if (self._endTimers[id]) {
        // Clear the timeout or remove the ended listener.
        if (typeof self._endTimers[id] !== 'function') {
          clearTimeout(self._endTimers[id]);
        } else {
          var sound = self._soundById(id);
          if (sound && sound._node) {
            sound._node.removeEventListener('ended', self._endTimers[id], false);
          }
        }

        delete self._endTimers[id];
      }

      return self;
    },

    /**
     * Return the sound identified by this ID, or return null.
     * @param  {Number} id Sound ID
     * @return {Object}    Sound object or null.
     */
    _soundById: function(id) {
      var self = this;

      // Loop through all sounds and find the one with this ID.
      for (var i=0; i<self._sounds.length; i++) {
        if (id === self._sounds[i]._id) {
          return self._sounds[i];
        }
      }

      return null;
    },

    /**
     * Return an inactive sound from the pool or create a new one.
     * @return {Sound} Sound playback object.
     */
    _inactiveSound: function() {
      var self = this;

      self._drain();

      // Find the first inactive node to recycle.
      for (var i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          return self._sounds[i].reset();
        }
      }

      // If no inactive node was found, create a new one.
      return new Sound(self);
    },

    /**
     * Drain excess inactive sounds from the pool.
     */
    _drain: function() {
      var self = this;
      var limit = self._pool;
      var cnt = 0;
      var i = 0;

      // If there are less sounds than the max pool size, we are done.
      if (self._sounds.length < limit) {
        return;
      }

      // Count the number of inactive sounds.
      for (i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          cnt++;
        }
      }

      // Remove excess inactive sounds, going in reverse order.
      for (i=self._sounds.length - 1; i>=0; i--) {
        if (cnt <= limit) {
          return;
        }

        if (self._sounds[i]._ended) {
          // Disconnect the audio source when using Web Audio.
          if (self._webAudio && self._sounds[i]._node) {
            self._sounds[i]._node.disconnect(0);
          }

          // Remove sounds until we have the pool size.
          self._sounds.splice(i, 1);
          cnt--;
        }
      }
    },

    /**
     * Get all ID's from the sounds pool.
     * @param  {Number} id Only return one ID if one is passed.
     * @return {Array}    Array of IDs.
     */
    _getSoundIds: function(id) {
      var self = this;

      if (typeof id === 'undefined') {
        var ids = [];
        for (var i=0; i<self._sounds.length; i++) {
          ids.push(self._sounds[i]._id);
        }

        return ids;
      } else {
        return [id];
      }
    },

    /**
     * Load the sound back into the buffer source.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _refreshBuffer: function(sound) {
      var self = this;

      // Setup the buffer source for playback.
      sound._node.bufferSource = Howler.ctx.createBufferSource();
      sound._node.bufferSource.buffer = cache[self._src];

      // Connect to the correct node.
      if (sound._panner) {
        sound._node.bufferSource.connect(sound._panner);
      } else {
        sound._node.bufferSource.connect(sound._node);
      }

      // Setup looping and playback rate.
      sound._node.bufferSource.loop = sound._loop;
      if (sound._loop) {
        sound._node.bufferSource.loopStart = sound._start || 0;
        sound._node.bufferSource.loopEnd = sound._stop;
      }
      sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);

      return self;
    },

    /**
     * Prevent memory leaks by cleaning up the buffer source after playback.
     * @param  {Object} node Sound's audio node containing the buffer source.
     * @return {Howl}
     */
    _cleanBuffer: function(node) {
      var self = this;

      if (Howler._scratchBuffer) {
        node.bufferSource.onended = null;
        node.bufferSource.disconnect(0);
        try { node.bufferSource.buffer = Howler._scratchBuffer; } catch(e) {}
      }
      node.bufferSource = null;

      return self;
    }
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Setup the sound object, which each node attached to a Howl group is contained in.
   * @param {Object} howl The Howl parent group.
   */
  var Sound = function(howl) {
    this._parent = howl;
    this.init();
  };
  Sound.prototype = {
    /**
     * Initialize a new Sound object.
     * @return {Sound}
     */
    init: function() {
      var self = this;
      var parent = self._parent;

      // Setup the default parameters.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a unique ID for this sound.
      self._id = ++Howler._counter;

      // Add itself to the parent's pool.
      parent._sounds.push(self);

      // Create the new node.
      self.create();

      return self;
    },

    /**
     * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
     * @return {Sound}
     */
    create: function() {
      var self = this;
      var parent = self._parent;
      var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;

      if (parent._webAudio) {
        // Create the gain node for controlling volume (the source will connect to this).
        self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
        self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
        self._node.paused = true;
        self._node.connect(Howler.masterGain);
      } else {
        self._node = new Audio();

        // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
        self._errorFn = self._errorListener.bind(self);
        self._node.addEventListener('error', self._errorFn, false);

        // Listen for 'canplaythrough' event to let us know the sound is ready.
        self._loadFn = self._loadListener.bind(self);
        self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);

        // Setup the new audio node.
        self._node.src = parent._src;
        self._node.preload = 'auto';
        self._node.volume = volume * Howler.volume();

        // Begin loading the source.
        self._node.load();
      }

      return self;
    },

    /**
     * Reset the parameters of this sound to the original state (for recycle).
     * @return {Sound}
     */
    reset: function() {
      var self = this;
      var parent = self._parent;

      // Reset all of the parameters of this sound.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._rateSeek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a new ID so that it isn't confused with the previous sound.
      self._id = ++Howler._counter;

      return self;
    },

    /**
     * HTML5 Audio error listener callback.
     */
    _errorListener: function() {
      var self = this;

      // Fire an error event and pass back the code.
      self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);

      // Clear the event listener.
      self._node.removeEventListener('error', self._errorFn, false);
    },

    /**
     * HTML5 Audio canplaythrough listener callback.
     */
    _loadListener: function() {
      var self = this;
      var parent = self._parent;

      // Round up the duration to account for the lower precision in HTML5 Audio.
      parent._duration = Math.ceil(self._node.duration * 10) / 10;

      // Setup a sprite if none is defined.
      if (Object.keys(parent._sprite).length === 0) {
        parent._sprite = {__default: [0, parent._duration * 1000]};
      }

      if (parent._state !== 'loaded') {
        parent._state = 'loaded';
        parent._emit('load');
        parent._loadQueue();
      }

      // Clear the event listener.
      self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
    }
  };

  /** Helper Methods **/
  /***************************************************************************/

  var cache = {};

  /**
   * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
   * @param  {Howl} self
   */
  var loadBuffer = function(self) {
    var url = self._src;

    // Check if the buffer has already been cached and use it instead.
    if (cache[url]) {
      // Set the duration from the cache.
      self._duration = cache[url].duration;

      // Load the sound into this Howl.
      loadSound(self);

      return;
    }

    if (/^data:[^;]+;base64,/.test(url)) {
      // Decode the base64 data URI without XHR, since some browsers don't support it.
      var data = atob(url.split(',')[1]);
      var dataView = new Uint8Array(data.length);
      for (var i=0; i<data.length; ++i) {
        dataView[i] = data.charCodeAt(i);
      }

      decodeAudioData(dataView.buffer, self);
    } else {
      // Load the buffer from the URL.
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.withCredentials = self._xhrWithCredentials;
      xhr.responseType = 'arraybuffer';
      xhr.onload = function() {
        // Make sure we get a successful response back.
        var code = (xhr.status + '')[0];
        if (code !== '0' && code !== '2' && code !== '3') {
          self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
          return;
        }

        decodeAudioData(xhr.response, self);
      };
      xhr.onerror = function() {
        // If there is an error, switch to HTML5 Audio.
        if (self._webAudio) {
          self._html5 = true;
          self._webAudio = false;
          self._sounds = [];
          delete cache[url];
          self.load();
        }
      };
      safeXhrSend(xhr);
    }
  };

  /**
   * Send the XHR request wrapped in a try/catch.
   * @param  {Object} xhr XHR to send.
   */
  var safeXhrSend = function(xhr) {
    try {
      xhr.send();
    } catch (e) {
      xhr.onerror();
    }
  };

  /**
   * Decode audio data from an array buffer.
   * @param  {ArrayBuffer} arraybuffer The audio data.
   * @param  {Howl}        self
   */
  var decodeAudioData = function(arraybuffer, self) {
    // Decode the buffer into an audio source.
    Howler.ctx.decodeAudioData(arraybuffer, function(buffer) {
      if (buffer && self._sounds.length > 0) {
        cache[self._src] = buffer;
        loadSound(self, buffer);
      }
    }, function() {
      self._emit('loaderror', null, 'Decoding audio data failed.');
    });
  };

  /**
   * Sound is now loaded, so finish setting everything up and fire the loaded event.
   * @param  {Howl} self
   * @param  {Object} buffer The decoded buffer sound source.
   */
  var loadSound = function(self, buffer) {
    // Set the duration.
    if (buffer && !self._duration) {
      self._duration = buffer.duration;
    }

    // Setup a sprite if none is defined.
    if (Object.keys(self._sprite).length === 0) {
      self._sprite = {__default: [0, self._duration * 1000]};
    }

    // Fire the loaded event.
    if (self._state !== 'loaded') {
      self._state = 'loaded';
      self._emit('load');
      self._loadQueue();
    }
  };

  /**
   * Setup the audio context when available, or switch to HTML5 Audio mode.
   */
  var setupAudioContext = function() {
    // Check if we are using Web Audio and setup the AudioContext if we are.
    try {
      if (typeof AudioContext !== 'undefined') {
        Howler.ctx = new AudioContext();
      } else if (typeof webkitAudioContext !== 'undefined') {
        Howler.ctx = new webkitAudioContext();
      } else {
        Howler.usingWebAudio = false;
      }
    } catch(e) {
      Howler.usingWebAudio = false;
    }

    // Check if a webview is being used on iOS8 or earlier (rather than the browser).
    // If it is, disable Web Audio as it causes crashing.
    var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
    var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    var version = appVersion ? parseInt(appVersion[1], 10) : null;
    if (iOS && version && version < 9) {
      var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
      if (Howler._navigator && Howler._navigator.standalone && !safari || Howler._navigator && !Howler._navigator.standalone && !safari) {
        Howler.usingWebAudio = false;
      }
    }

    // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
    if (Howler.usingWebAudio) {
      Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
      Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : 1, Howler.ctx.currentTime);
      Howler.masterGain.connect(Howler.ctx.destination);
    }

    // Re-run the setup on Howler.
    Howler._setup();
  };

  // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return {
        Howler: Howler,
        Howl: Howl
      };
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  // Add support for CommonJS libraries such as browserify.
  if (true) {
    exports.Howler = Howler;
    exports.Howl = Howl;
  }

  // Define globally in case AMD is not available or unused.
  if (typeof window !== 'undefined') {
    window.HowlerGlobal = HowlerGlobal;
    window.Howler = Howler;
    window.Howl = Howl;
    window.Sound = Sound;
  } else if (typeof global !== 'undefined') { // Add to global in Node.js (for testing, etc).
    global.HowlerGlobal = HowlerGlobal;
    global.Howler = Howler;
    global.Howl = Howl;
    global.Sound = Sound;
  }
})();


/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.0.9
 *  howlerjs.com
 *
 *  (c) 2013-2018, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  // Setup default properties.
  HowlerGlobal.prototype._pos = [0, 0, 0];
  HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
  
  /** Global Methods **/
  /***************************************************************************/

  /**
   * Helper method to update the stereo panning position of all current Howls.
   * Future Howls will not use this value unless explicitly set.
   * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
   * @return {Howler/Number}     Self or current stereo panning value.
   */
  HowlerGlobal.prototype.stereo = function(pan) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Loop through all Howls and update their stereo panning.
    for (var i=self._howls.length-1; i>=0; i--) {
      self._howls[i].stereo(pan);
    }

    return self;
  };

  /**
   * Get/set the position of the listener in 3D cartesian space. Sounds using
   * 3D position will be relative to the listener's position.
   * @param  {Number} x The x-position of the listener.
   * @param  {Number} y The y-position of the listener.
   * @param  {Number} z The z-position of the listener.
   * @return {Howler/Array}   Self or current listener position.
   */
  HowlerGlobal.prototype.pos = function(x, y, z) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._pos[1] : y;
    z = (typeof z !== 'number') ? self._pos[2] : z;

    if (typeof x === 'number') {
      self._pos = [x, y, z];
      self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
    } else {
      return self._pos;
    }

    return self;
  };

  /**
   * Get/set the direction the listener is pointing in the 3D cartesian space.
   * A front and up vector must be provided. The front is the direction the
   * face of the listener is pointing, and up is the direction the top of the
   * listener is pointing. Thus, these values are expected to be at right angles
   * from each other.
   * @param  {Number} x   The x-orientation of the listener.
   * @param  {Number} y   The y-orientation of the listener.
   * @param  {Number} z   The z-orientation of the listener.
   * @param  {Number} xUp The x-orientation of the top of the listener.
   * @param  {Number} yUp The y-orientation of the top of the listener.
   * @param  {Number} zUp The z-orientation of the top of the listener.
   * @return {Howler/Array}     Returns self or the current orientation vectors.
   */
  HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    var or = self._orientation;
    y = (typeof y !== 'number') ? or[1] : y;
    z = (typeof z !== 'number') ? or[2] : z;
    xUp = (typeof xUp !== 'number') ? or[3] : xUp;
    yUp = (typeof yUp !== 'number') ? or[4] : yUp;
    zUp = (typeof zUp !== 'number') ? or[5] : zUp;

    if (typeof x === 'number') {
      self._orientation = [x, y, z, xUp, yUp, zUp];
      self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
    } else {
      return or;
    }

    return self;
  };

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core init.
   * @param  {Function} _super Core init method.
   * @return {Howl}
   */
  Howl.prototype.init = (function(_super) {
    return function(o) {
      var self = this;

      // Setup user-defined default properties.
      self._orientation = o.orientation || [1, 0, 0];
      self._stereo = o.stereo || null;
      self._pos = o.pos || null;
      self._pannerAttr = {
        coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
        coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
        coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
        distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
        maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
        panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
        refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
        rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
      };

      // Setup event listeners.
      self._onstereo = o.onstereo ? [{fn: o.onstereo}] : [];
      self._onpos = o.onpos ? [{fn: o.onpos}] : [];
      self._onorientation = o.onorientation ? [{fn: o.onorientation}] : [];

      // Complete initilization with howler.js core's init function.
      return _super.call(this, o);
    };
  })(Howl.prototype.init);

  /**
   * Get/set the stereo panning of the audio source for this sound or all in the group.
   * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Number}    Returns self or the current stereo panning value.
   */
  Howl.prototype.stereo = function(pan, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'stereo',
        action: function() {
          self.stereo(pan, id);
        }
      });

      return self;
    }

    // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
    var pannerType = (typeof Howler.ctx.createStereoPanner === 'undefined') ? 'spatial' : 'stereo';

    // Setup the group's stereo panning if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's stereo panning if no parameters are passed.
      if (typeof pan === 'number') {
        self._stereo = pan;
        self._pos = [pan, 0, 0];
      } else {
        return self._stereo;
      }
    }

    // Change the streo panning of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof pan === 'number') {
          sound._stereo = pan;
          sound._pos = [pan, 0, 0];

          if (sound._node) {
            // If we are falling back, make sure the panningModel is equalpower.
            sound._pannerAttr.panningModel = 'equalpower';

            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || !sound._panner.pan) {
              setupPanner(sound, pannerType);
            }

            if (pannerType === 'spatial') {
              sound._panner.setPosition(pan, 0, 0);
            } else {
              sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
            }
          }

          self._emit('stereo', sound._id);
        } else {
          return sound._stereo;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
   * @param  {Number} x  The x-position of the audio source.
   * @param  {Number} y  The y-position of the audio source.
   * @param  {Number} z  The z-position of the audio source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
   */
  Howl.prototype.pos = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change position when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'pos',
        action: function() {
          self.pos(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? 0 : y;
    z = (typeof z !== 'number') ? -0.5 : z;

    // Setup the group's spatial position if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial position if no parameters are passed.
      if (typeof x === 'number') {
        self._pos = [x, y, z];
      } else {
        return self._pos;
      }
    }

    // Change the spatial position of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._pos = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || sound._panner.pan) {
              setupPanner(sound, 'spatial');
            }

            sound._panner.setPosition(x, y, z);
          }

          self._emit('pos', sound._id);
        } else {
          return sound._pos;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
   * space. Depending on how direction the sound is, based on the `cone` attributes,
   * a sound pointing away from the listener can be quiet or silent.
   * @param  {Number} x  The x-orientation of the source.
   * @param  {Number} y  The y-orientation of the source.
   * @param  {Number} z  The z-orientation of the source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
   */
  Howl.prototype.orientation = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'orientation',
        action: function() {
          self.orientation(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._orientation[1] : y;
    z = (typeof z !== 'number') ? self._orientation[2] : z;

    // Setup the group's spatial orientation if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial orientation if no parameters are passed.
      if (typeof x === 'number') {
        self._orientation = [x, y, z];
      } else {
        return self._orientation;
      }
    }

    // Change the spatial orientation of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._orientation = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner) {
              // Make sure we have a position to setup the node with.
              if (!sound._pos) {
                sound._pos = self._pos || [0, 0, -0.5];
              }

              setupPanner(sound, 'spatial');
            }

            sound._panner.setOrientation(x, y, z);
          }

          self._emit('orientation', sound._id);
        } else {
          return sound._orientation;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the panner node's attributes for a sound or group of sounds.
   * This method can optionall take 0, 1 or 2 arguments.
   *   pannerAttr() -> Returns the group's values.
   *   pannerAttr(id) -> Returns the sound id's values.
   *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
   *   pannerAttr(o, id) -> Set's the values of passed sound id.
   *
   *   Attributes:
   *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      inside of which there will be no volume reduction.
   *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
   *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
   *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
   *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
   *                     listener. Can be `linear`, `inverse` or `exponential.
   *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
   *                   will not be reduced any further.
   *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
   *                   This is simply a variable of the distance model and has a different effect depending on which model
   *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
   *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
   *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
   *                     with `inverse` and `exponential`.
   *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
   *                     Can be `HRTF` or `equalpower`.
   * 
   * @return {Howl/Object} Returns self or current panner attributes.
   */
  Howl.prototype.pannerAttr = function() {
    var self = this;
    var args = arguments;
    var o, id, sound;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // Determine the values based on arguments.
    if (args.length === 0) {
      // Return the group's panner attribute values.
      return self._pannerAttr;
    } else if (args.length === 1) {
      if (typeof args[0] === 'object') {
        o = args[0];

        // Set the grou's panner attribute values.
        if (typeof id === 'undefined') {
          if (!o.pannerAttr) {
            o.pannerAttr = {
              coneInnerAngle: o.coneInnerAngle,
              coneOuterAngle: o.coneOuterAngle,
              coneOuterGain: o.coneOuterGain,
              distanceModel: o.distanceModel,
              maxDistance: o.maxDistance,
              refDistance: o.refDistance,
              rolloffFactor: o.rolloffFactor,
              panningModel: o.panningModel
            };
          }

          self._pannerAttr = {
            coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
            coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
            coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
            distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
            maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
            refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
            rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
            panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
          };
        }
      } else {
        // Return this sound's panner attribute values.
        sound = self._soundById(parseInt(args[0], 10));
        return sound ? sound._pannerAttr : self._pannerAttr;
      }
    } else if (args.length === 2) {
      o = args[0];
      id = parseInt(args[1], 10);
    }

    // Update the values of the specified sounds.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      sound = self._soundById(ids[i]);

      if (sound) {
        // Merge the new values into the sound.
        var pa = sound._pannerAttr;
        pa = {
          coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
          coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
          coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
          distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
          maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
          refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
          rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
          panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
        };

        // Update the panner values or create a new panner if none exists.
        var panner = sound._panner;
        if (panner) {
          panner.coneInnerAngle = pa.coneInnerAngle;
          panner.coneOuterAngle = pa.coneOuterAngle;
          panner.coneOuterGain = pa.coneOuterGain;
          panner.distanceModel = pa.distanceModel;
          panner.maxDistance = pa.maxDistance;
          panner.refDistance = pa.refDistance;
          panner.rolloffFactor = pa.rolloffFactor;
          panner.panningModel = pa.panningModel;
        } else {
          // Make sure we have a position to setup the node with.
          if (!sound._pos) {
            sound._pos = self._pos || [0, 0, -0.5];
          }

          // Create a new panner node.
          setupPanner(sound, 'spatial');
        }
      }
    }

    return self;
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core Sound init.
   * @param  {Function} _super Core Sound init method.
   * @return {Sound}
   */
  Sound.prototype.init = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Setup user-defined default properties.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // Complete initilization with howler.js core Sound's init function.
      _super.call(this);

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      }
    };
  })(Sound.prototype.init);

  /**
   * Override the Sound.reset method to clean up properties from the spatial plugin.
   * @param  {Function} _super Sound reset method.
   * @return {Sound}
   */
  Sound.prototype.reset = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Reset all spatial plugin properties on this sound.
      self._orientation = parent._orientation;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // Complete resetting of the sound.
      return _super.call(this);
    };
  })(Sound.prototype.reset);

  /** Helper Methods **/
  /***************************************************************************/

  /**
   * Create a new panner node and save it on the sound.
   * @param  {Sound} sound Specific sound to setup panning on.
   * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
   */
  var setupPanner = function(sound, type) {
    type = type || 'spatial';

    // Create the new panner node.
    if (type === 'spatial') {
      sound._panner = Howler.ctx.createPanner();
      sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
      sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
      sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
      sound._panner.distanceModel = sound._pannerAttr.distanceModel;
      sound._panner.maxDistance = sound._pannerAttr.maxDistance;
      sound._panner.refDistance = sound._pannerAttr.refDistance;
      sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
      sound._panner.panningModel = sound._pannerAttr.panningModel;
      sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
      sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
    } else {
      sound._panner = Howler.ctx.createStereoPanner();
      sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
    }

    sound._panner.connect(sound._node);

    // Update the connections.
    if (!sound._paused) {
      sound._parent.pause(sound._id, true).play(sound._id, true);
    }
  };
})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)))

/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = {"urls":["sounds/sprite.ogg","sounds/sprite.m4a","sounds/sprite.mp3","sounds/sprite.ac3"],"sprite":{"silence":[0,1000,true],"attack-0":[2000,800.5895691609978],"attack-1":[4000,889.3650793650796],"bgm":[6000,49051.08843537415],"boss":[57000,1471.90476190476],"end":[60000,3620.9977324263036],"start":[65000,1781.3605442176909]}}

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = __webpack_require__(7);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(9);

var _entries2 = _interopRequireDefault(_entries);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(10);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _pixi = __webpack_require__(5);

var _gsap = __webpack_require__(15);

var _Header = __webpack_require__(157);

var _Header2 = _interopRequireDefault(_Header);

var _Camera = __webpack_require__(169);

var _Camera2 = _interopRequireDefault(_Camera);

var _Footer = __webpack_require__(177);

var _Footer2 = _interopRequireDefault(_Footer);

var _Status = __webpack_require__(179);

var _Status2 = _interopRequireDefault(_Status);

var _HitArea = __webpack_require__(184);

var _HitArea2 = _interopRequireDefault(_HitArea);

var _store = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*============ Import components ===============*/
var Battle = function (_Container) {
    (0, _inherits3.default)(Battle, _Container);

    function Battle(props) {
        (0, _classCallCheck3.default)(this, Battle);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Battle.__proto__ || (0, _getPrototypeOf2.default)(Battle)).call(this));

        _this.setupActions();
        _this.setup();
        return _this;
    }

    (0, _createClass3.default)(Battle, [{
        key: 'setupActions',
        value: function setupActions() {
            var _this2 = this;

            var actions = this.actions = {
                bossdead: function bossdead() {
                    var speed = _store.gameplay.speed;
                    _gsap.TweenLite.to(_store.gameplay, .8, { speed: 100 });
                    _gsap.TweenLite.to(_store.gameplay, .8, { speed: speed, delay: 1 });
                },
                end: function end(state) {
                    if (!state) return;
                }
            };
            (0, _entries2.default)(actions).forEach(function (_ref) {
                var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                    key = _ref2[0],
                    func = _ref2[1];

                actions[key] = func.bind(_this2);
            });
            _store.gameplay.on('bossdead', actions.bossdead).on('end', actions.end);
        }
    }, {
        key: 'setup',
        value: function setup() {
            this.addChild(new _Camera2.default());
            this.addChild(new _Header2.default());
            this.addChild(new _Footer2.default());
            this.addChild(new _Status2.default());
            this.addChild(new _HitArea2.default());
        }
    }, {
        key: 'destroy',
        value: function destroy(child) {
            (0, _get3.default)(Battle.prototype.__proto__ || (0, _getPrototypeOf2.default)(Battle.prototype), 'destroy', this).call(this, child);
            _store.gameplay.off('bossdead', this.actions.bossdead).off('end', this.actions.end);
            this.sound.destroy(child);
        }
    }]);
    return Battle;
}(_pixi.Container);

exports.default = Battle;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _pixi = __webpack_require__(5);

var _CountDead = __webpack_require__(158);

var _CountDead2 = _interopRequireDefault(_CountDead);

var _TimeLine = __webpack_require__(167);

var _TimeLine2 = _interopRequireDefault(_TimeLine);

var _Boost = __webpack_require__(168);

var _Boost2 = _interopRequireDefault(_Boost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_Container) {
    (0, _inherits3.default)(Header, _Container);

    function Header() {
        (0, _classCallCheck3.default)(this, Header);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this));

        _this.setup();
        return _this;
    }

    (0, _createClass3.default)(Header, [{
        key: 'setup',
        value: function setup() {
            this.addChild(this.countDead = new _CountDead2.default());
            this.addChild(this.boost = new _Boost2.default());
            this.addChild(this.timeLine = new _TimeLine2.default());
        }
    }]);
    return Header;
}(_pixi.Container);

exports.default = Header;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _values = __webpack_require__(57);

var _values2 = _interopRequireDefault(_values);

var _slicedToArray2 = __webpack_require__(7);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(9);

var _entries2 = _interopRequireDefault(_entries);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(10);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _pixi = __webpack_require__(5);

var _objects = __webpack_require__(38);

var _store = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CountDead = function (_Container) {
    (0, _inherits3.default)(CountDead, _Container);

    function CountDead() {
        (0, _classCallCheck3.default)(this, CountDead);

        var _this = (0, _possibleConstructorReturn3.default)(this, (CountDead.__proto__ || (0, _getPrototypeOf2.default)(CountDead)).call(this));

        _this.setupActions();
        _this.addUI();

        return _this;
    }

    (0, _createClass3.default)(CountDead, [{
        key: 'setupActions',
        value: function setupActions() {
            var _this2 = this;

            var actions = this.actions = {
                dead: function dead(state) {
                    this.numbers.value = this.count(state);
                    this.numbers.pivot.x = this.numbers.width / this.numbers.scale.x;
                }
            };
            (0, _entries2.default)(actions).forEach(function (_ref) {
                var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                    key = _ref2[0],
                    func = _ref2[1];

                return actions[key] = func.bind(_this2);
            });

            _store.gameplay.on('changed:dead', this.actions.dead);
        }
    }, {
        key: 'addUI',
        value: function addUI() {
            var img = _store.resources.header['bg-top'],
                bg = new _pixi.Sprite(img);

            bg.scale.set(_store.canvas.width / img.width);
            this.addChild(bg);

            var numbers = this.numbers = new _objects.Numbers();
            numbers.x = _store.canvas.width * 0.73;
            numbers.y = bg.height * .12;
            numbers.scale.set(bg.height * .35 / numbers.height);
            this.addChild(numbers);

            this.actions.dead(_store.gameplay.dead);
        }
    }, {
        key: 'count',
        value: function count(state) {
            var values = (0, _values2.default)(state);
            return values.length ? values.reduce(function (a, b) {
                return a + b;
            }) : 0;
        }
    }, {
        key: 'destroy',
        value: function destroy(child) {
            _store.gameplay.off('changed:dead', this.actions.dead);
            (0, _get3.default)(CountDead.prototype.__proto__ || (0, _getPrototypeOf2.default)(CountDead.prototype), 'destroy', this).call(this, child);
        }
    }]);
    return CountDead;
}(_pixi.Container);

exports.default = CountDead;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(160);
module.exports = __webpack_require__(8).Object.values;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(12);
var $values = __webpack_require__(68)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpriteSheet = exports.Numbers = undefined;

var _Numbers = __webpack_require__(162);

var _Numbers2 = _interopRequireDefault(_Numbers);

var _SpriteSheet = __webpack_require__(166);

var _SpriteSheet2 = _interopRequireDefault(_SpriteSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import ImageRepeat from './ImageRepeat';
//import ImageSheetLoader from './ImageSheetLoader';
exports.Numbers = _Numbers2.default;
exports.SpriteSheet = _SpriteSheet2.default;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperties = __webpack_require__(163);

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _pixi = __webpack_require__(5);

var _store = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _numbersImg = function numbersImg() {
    var imgs = _store.resources.number,
        cache = {
        width: imgs['num-0'].width,
        height: imgs['num-0'].height
    },
        container = new _pixi.Container();

    for (var i = 0; i < 10; i++) {
        var img = imgs['num-' + i],
            sprite = new _pixi.Sprite(img);
        sprite.y = cache.height * i;
        container.addChild(sprite);
    }

    cache.texture = _store.canvas.renderer.generateTexture(container);

    _numbersImg = function numbersImg() {
        return cache;
    };
    return _numbersImg();
};

var Number = function (_extras$TilingSprite) {
    (0, _inherits3.default)(Number, _extras$TilingSprite);
    (0, _createClass3.default)(Number, [{
        key: 'value',
        get: function get() {
            return this._value;
        },
        set: function set(value) {
            this.updateValue(value);this._value = value;
        }
    }]);

    function Number(value) {
        (0, _classCallCheck3.default)(this, Number);

        var img = _numbersImg();

        var _this = (0, _possibleConstructorReturn3.default)(this, (Number.__proto__ || (0, _getPrototypeOf2.default)(Number)).call(this, img.texture, img.width, img.height));

        _this._value = value || 0;

        // Object.defineProperties(this,{
        //     value: {
        //         get(){ return value },
        //         set(newValue){
        //             if(newValue === value) return;
        //             value = newValue;
        //             this.updateValue(newValue);
        //         }
        //     }
        // });

        //this.updateValue(0);
        return _this;
    }

    (0, _createClass3.default)(Number, [{
        key: 'updateValue',
        value: function updateValue(value) {
            this.tilePosition.y = -this.height * value;
            this._value = value;
        }
    }]);
    return Number;
}(_pixi.extras.TilingSprite);

var Numbers = function (_Container) {
    (0, _inherits3.default)(Numbers, _Container);

    function Numbers(value, length) {
        (0, _classCallCheck3.default)(this, Numbers);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (Numbers.__proto__ || (0, _getPrototypeOf2.default)(Numbers)).call(this));

        value = 0 || 0;
        var floatRight = void 0;
        (0, _defineProperties2.default)(_this2, {
            value: {
                get: function get() {
                    return value;
                },
                set: function set(newValue) {
                    if (newValue === value) return;
                    value = newValue;
                    this.updateValue();
                }
            },
            lineHeight: {
                get: function get() {
                    return this.scaleY * this.children[0].height;
                },
                set: function set(value) {
                    this.scaleX = this.scaleY = value / this.children[0].height;
                }
            }
        });
        _this2.length = length;
        _this2.updateValue();
        return _this2;
    }

    (0, _createClass3.default)(Numbers, [{
        key: 'updateValue',
        value: function updateValue() {
            var numStrs = String(this.value).split(''),
                children = this.children;
            var length = this.length;
            length = typeof length === 'number' ? length : numStrs.length;

            while (children.length !== length) {
                if (children.length < length) {
                    this.addChild(new Number(0));
                } else {
                    this.removeChildAt(children.length - 1);
                }
            }
            numStrs.reverse().forEach(function (num, i) {
                if (children[i]) children[i].value = parseInt(num);
            });

            children.slice(0).reverse().forEach(function (num, i) {
                num.x = i * num.width;
            });
        }
    }]);
    return Numbers;
}(_pixi.Container);

exports.default = Numbers;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(164), __esModule: true };

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(165);
var $Object = __webpack_require__(8).Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(12);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(16), 'Object', { defineProperties: __webpack_require__(62) });


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _pixi = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpriteSheet = function (_extras$AnimatedSprit) {
    (0, _inherits3.default)(SpriteSheet, _extras$AnimatedSprit);

    function SpriteSheet(frames, autoUpdate) {
        (0, _classCallCheck3.default)(this, SpriteSheet);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SpriteSheet.__proto__ || (0, _getPrototypeOf2.default)(SpriteSheet)).call(this, frames, autoUpdate));

        _this.onFrameChange = function (frame) {
            this.emit('framechange', frame);
        };

        _this.onComplete = function (frame) {
            this.emit('complete', frame);
        };
        return _this;
    }

    return SpriteSheet;
}(_pixi.extras.AnimatedSprite);

exports.default = SpriteSheet;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(36);

var _assign2 = _interopRequireDefault(_assign);

var _slicedToArray2 = __webpack_require__(7);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(9);

var _entries2 = _interopRequireDefault(_entries);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(10);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _pixi = __webpack_require__(5);

var _store = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimeLine = function (_Container) {
    (0, _inherits3.default)(TimeLine, _Container);

    function TimeLine() {
        (0, _classCallCheck3.default)(this, TimeLine);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TimeLine.__proto__ || (0, _getPrototypeOf2.default)(TimeLine)).call(this));

        _this.setupActions();
        _this.addUI();
        return _this;
    }

    (0, _createClass3.default)(TimeLine, [{
        key: 'setupActions',
        value: function setupActions() {
            var _this2 = this;

            var actions = this.actions = {
                distance: function distance(to) {
                    var per = to < _store.map.length ? to / _store.map.length : 1;
                    this.iconCurrent.x = this.baseLine.width * per;
                    this.colorLine.scale.x = per;
                }
            };
            (0, _entries2.default)(actions).forEach(function (_ref) {
                var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                    key = _ref2[0],
                    func = _ref2[1];

                return actions[key] = func.bind(_this2);
            });

            _store.gameplay.on('changed:distance', this.actions.distance);
        }
    }, {
        key: 'addUI',
        value: function addUI() {
            (0, _assign2.default)(this, {
                x: _store.canvas.width * .15,
                y: _store.canvas.height * .1
            });

            var imgs = _store.resources.header,
                width = _store.canvas.width * .7,
                scale = .4,
                natureWidth = this.natureWidth = width / scale,
                baseLineImg = imgs['bar-base'],
                baseLine = this.baseLine = new _pixi.extras.TilingSprite(baseLineImg, natureWidth, baseLineImg.height),
                colorLine = this.colorLine = new _pixi.extras.TilingSprite(imgs['bar-color'], natureWidth, baseLineImg.height),
                iconStart = this.iconStart = new _pixi.Sprite(imgs['icon-start']),
                iconGoal = this.iconGoal = new _pixi.Sprite(imgs['icon-goal']),
                iconCurrentFrame = new _pixi.Sprite(imgs['icon-current']),
                iconCurrent = this.iconCurrent = new _pixi.Container();
            this.setIconSize(iconStart);
            this.setIconSize(iconGoal);
            this.setIconSize(iconCurrentFrame);
            iconCurrent.addChild(iconCurrentFrame);
            iconGoal.x = natureWidth;
            this.addChild(baseLine, colorLine, iconStart, iconGoal, iconCurrent);
            this.scale.set(scale);
            this.actions.distance(_store.gameplay.distance);
        }
    }, {
        key: 'setIconSize',
        value: function setIconSize(icon) {
            var width = icon.width,
                height = icon.height;

            icon.anchor.x = icon.anchor.y = 0.5;
            icon.y = this.baseLine.height / 2;
        }
    }, {
        key: 'destroy',
        value: function destroy(child) {
            (0, _get3.default)(TimeLine.prototype.__proto__ || (0, _getPrototypeOf2.default)(TimeLine.prototype), 'destroy', this).call(this, child);
            _store.gameplay.off('changed:distance', this.actions.distance);
        }
    }]);
    return TimeLine;
}(_pixi.Container);

exports.default = TimeLine;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = __webpack_require__(7);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(9);

var _entries2 = _interopRequireDefault(_entries);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(10);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _pixi = __webpack_require__(5);

var _store = __webpack_require__(6);

var _gsap = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Boost = function (_Container) {
    (0, _inherits3.default)(Boost, _Container);

    function Boost() {
        (0, _classCallCheck3.default)(this, Boost);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Boost.__proto__ || (0, _getPrototypeOf2.default)(Boost)).call(this));

        _this.setupActions();
        _this.addUI();
        return _this;
    }

    (0, _createClass3.default)(Boost, [{
        key: 'setupActions',
        value: function setupActions() {
            var _this3 = this;

            var deny = false;
            var actions = this.actions = {
                boost: function boost(value) {
                    var _this2 = this;

                    if (value > 1) {
                        this.visible = true;
                        this.timeline.play();
                        _gsap.TweenLite.to(this, .3, { alpha: 1 });
                    } else {
                        _gsap.TweenLite.to(this, .3, { alpha: 0, onComplete: function onComplete(e) {
                                _this2.visible = false;
                                _this2.timeline.stop();
                            } });
                    }
                }
            };
            (0, _entries2.default)(actions).forEach(function (_ref) {
                var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                    key = _ref2[0],
                    func = _ref2[1];

                return actions[key] = func.bind(_this3);
            });
            _store.gameplay.on('changed:boost', actions.boost);
        }
    }, {
        key: 'addUI',
        value: function addUI() {
            var icon = new _pixi.Sprite(_store.resources.header.boost),
                This = this;
            icon.anchor.set(0.5);
            this.addChild(icon);

            var timeline = this.timeline = new _gsap.TimelineMax({ repeat: -1, repeatDelay: .5, paused: true });
            timeline.add([0].map(function (i) {
                var eff = new _pixi.Sprite(_store.resources.header.boost);
                eff.anchor = icon.anchor;
                eff.position = icon.position;
                This.addChild(eff);
                return [_gsap.TweenLite.to(eff.scale, 1, { x: 1.6, y: 1.6, ease: Cubic.Out, delay: .2 * i }), _gsap.TweenLite.to(eff, 1, { alpha: 0, ease: Cubic.Out, delay: .2 * i })];
            }));
            this.scale.set(.4);
            this.position.set(_store.canvas.width * .9, 20);
            this.visible = false;
        }
    }, {
        key: 'destroy',
        value: function destroy(child) {
            (0, _get3.default)(Boost.prototype.__proto__ || (0, _getPrototypeOf2.default)(Boost.prototype), 'destroy', this).call(this, child);
            this.timeline.kill();
            _store.gameplay.off('changed:boost', this.actions.boost);
        }
    }]);
    return Boost;
}(_pixi.Container);

exports.default = Boost;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = __webpack_require__(7);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(9);

var _entries2 = _interopRequireDefault(_entries);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(10);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _pixi = __webpack_require__(5);

var _store = __webpack_require__(6);

var _Ground = __webpack_require__(170);

var _Ground2 = _interopRequireDefault(_Ground);

var _Hero = __webpack_require__(171);

var _Hero2 = _interopRequireDefault(_Hero);

var _Enemy = __webpack_require__(174);

var _Enemy2 = _interopRequireDefault(_Enemy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Camera = function (_Container) {
    (0, _inherits3.default)(Camera, _Container);

    function Camera() {
        (0, _classCallCheck3.default)(this, Camera);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Camera.__proto__ || (0, _getPrototypeOf2.default)(Camera)).call(this));

        _this.setupActions();
        _this.addSee();
        return _this;
    }

    (0, _createClass3.default)(Camera, [{
        key: 'setupActions',
        value: function setupActions() {
            var _this3 = this;

            var actions = this.actions = {
                distance: function distance(pos) {
                    if (pos > _store.map.length) pos = _store.map.length;
                    this.watch(pos - 80, 0);
                },
                bossdead: function bossdead(state) {
                    var _this2 = this;

                    if (!state) return;
                    _store.gameplay.once('changed:play', function (state) {
                        TweenLite.fromTo(_this2.space, 0.1, { y: -2 }, {
                            y: 2, ease: RoughEase.ease.config({ strength: 8, points: 20, template: Linear.easeNone, randomize: false }),
                            clearProps: "x",
                            delay: .15
                        });
                    });
                }
            };
            (0, _entries2.default)(actions).forEach(function (_ref) {
                var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                    key = _ref2[0],
                    func = _ref2[1];

                return actions[key] = func.bind(_this3);
            });
            _store.gameplay.on('changed:distance', this.actions.distance).on('changed:bossdead', this.actions.bossdead);
        }
    }, {
        key: 'addSee',
        value: function addSee() {
            /*============ Create background stage ===============*/
            var space = this.space = new _pixi.Container();

            var see = this.see = {
                ground: new _Ground2.default(),
                herro: new _Hero2.default(),
                enemy: new _Enemy2.default()
                //space.addChild(see.ground,see.herro);
            };space.addChild(see.ground, see.enemy, see.herro);
            this.addChild(space);

            this.actions.distance(0);

            // const shape = this.shape = new Shape();
            // shape.graphics.beginFill('#ff0').drawCircle(0,0,gameplay.heroRange);

            // this.addChild(shape);
        }
    }, {
        key: 'watch',
        value: function watch(x, y) {
            this.space.x = -x;
            this.space.y = -y;
            _store.gameplay.camera = { x: x, y: y, width: this.width, height: this.height };
        }
    }, {
        key: 'destroy',
        value: function destroy(child) {
            (0, _get3.default)(Camera.prototype.__proto__ || (0, _getPrototypeOf2.default)(Camera.prototype), 'destroy', this).call(this, child);
            _store.gameplay.off('changed:distance', this.actions.distance).off('changed:bossdead', this.actions.bossdead);
        }
    }]);
    return Camera;
}(_pixi.Container);

exports.default = Camera;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _values = __webpack_require__(57);

var _values2 = _interopRequireDefault(_values);

var _slicedToArray2 = __webpack_require__(7);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(9);

var _entries2 = _interopRequireDefault(_entries);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(10);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _pixi = __webpack_require__(5);

var _store = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ground = function (_Container) {
    (0, _inherits3.default)(Ground, _Container);

    function Ground() {
        (0, _classCallCheck3.default)(this, Ground);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Ground.__proto__ || (0, _getPrototypeOf2.default)(Ground)).call(this));

        _this.addGround();
        _this.setupAction();
        return _this;
    }

    (0, _createClass3.default)(Ground, [{
        key: 'setupAction',
        value: function setupAction() {
            var _this2 = this;

            var actions = this.actions = {
                camera: function camera(state) {
                    this.ground.x = state.x;
                    this.ground.tilePosition.x = -state.x / this.ground.scale.x;
                }
            };
            (0, _entries2.default)(actions).forEach(function (_ref) {
                var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                    key = _ref2[0],
                    func = _ref2[1];

                actions[key] = func.bind(_this2);
            });
            _store.gameplay.on('changed:camera', actions.camera);
        }
    }, {
        key: 'addGround',
        value: function addGround() {
            var imgs = (0, _values2.default)(_store.resources.ground),
                image = imgs[~~Math.range(0, imgs.length)],
                scale = _store.canvas.height / image.height,
                ground = this.ground = new _pixi.extras.TilingSprite(image, _store.canvas.width / scale, image.height);
            ground.scale.x = ground.scale.y = scale;
            this.addChild(ground);
        }
    }, {
        key: 'destroy',
        value: function destroy(child) {
            _store.gameplay.on('changed:camera', this.actions.camera);
            (0, _get3.default)(Ground.prototype.__proto__ || (0, _getPrototypeOf2.default)(Ground.prototype), 'destroy', this).call(this, child);
        }
    }]);
    return Ground;
}(_pixi.Container);

/*======================= Import Config ===========================*/


exports.default = Ground;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = __webpack_require__(7);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(9);

var _entries2 = _interopRequireDefault(_entries);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(10);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _pixi = __webpack_require__(5);

var _store = __webpack_require__(6);

var _Person = __webpack_require__(172);

var _Person2 = _interopRequireDefault(_Person);

var _House = __webpack_require__(173);

var _House2 = _interopRequireDefault(_House);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hero = function (_Container) {
    (0, _inherits3.default)(Hero, _Container);

    function Hero() {
        (0, _classCallCheck3.default)(this, Hero);

        // const graphics = new Graphics();
        // graphics.beginFill(0xFF0FF0);
        // graphics.drawCircle(0,0,gameplay.heroRange/ this.scale.x);
        // this.addChild(graphics);
        // graphics.alpha = .5;


        var _this = (0, _possibleConstructorReturn3.default)(this, (Hero.__proto__ || (0, _getPrototypeOf2.default)(Hero)).call(this));

        _this.scale.set(0.35);

        _this.setupActions();
        _this.addSprites();
        return _this;
    }

    (0, _createClass3.default)(Hero, [{
        key: 'setupActions',
        value: function setupActions() {
            var _this2 = this;

            var actions = this.actions = {
                distance: function distance(state) {
                    this.x = state;
                },
                lance: function lance(state) {
                    this.y = _store.canvas.battle.y + _store.gameplay.lanceHeight / 2 + _store.gameplay.lanceHeight * _store.gameplay.lance;
                }
            };
            (0, _entries2.default)(actions).forEach(function (_ref) {
                var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                    key = _ref2[0],
                    func = _ref2[1];

                return actions[key] = func.bind(_this2);
            });
            _store.gameplay.on('changed:distance', actions.distance).on('changed:lance', actions.lance);
        }
    }, {
        key: 'addSprites',
        value: function addSprites() {
            var house = new _House2.default();
            house.anchor.set(0.8, 0.8);
            this.addChild(house);

            var person = new _Person2.default();
            person.anchor.set(0.65, 1.05);
            this.addChild(person);
            house.on('framechange', function (frame) {
                return person.setBump(frame / house._textures.length || 0);
            });

            this.actions.lance(_store.gameplay.lance);
        }
    }, {
        key: 'destroy',
        value: function destroy(child) {
            (0, _get3.default)(Hero.prototype.__proto__ || (0, _getPrototypeOf2.default)(Hero.prototype), 'destroy', this).call(this, child);
            _store.gameplay.off('changed:distance', this.actions.distance).off('changed:lance', this.actions.lance);
        }
    }]);
    return Hero;
}(_pixi.Container);

exports.default = Hero;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = __webpack_require__(7);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(10);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _entries = __webpack_require__(9);

var _entries2 = _interopRequireDefault(_entries);

var _pixi = __webpack_require__(5);

var _objects = __webpack_require__(38);

var _store = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function frames() {
    return (0, _entries2.default)(_store.resources.hero).map(function (e) {
        return e[1];
    });
}

var Person = function (_SpriteSheet) {
    (0, _inherits3.default)(Person, _SpriteSheet);

    function Person() {
        (0, _classCallCheck3.default)(this, Person);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Person.__proto__ || (0, _getPrototypeOf2.default)(Person)).call(this, frames()));

        _this.setupActions();
        _this.animationSpeed = _this._textures.length / 60 * 5;
        _this.loop = false;

        _this.on('complete', function (frame) {
            return _this.gotoAndStop(0);
        });
        return _this;
    }

    (0, _createClass3.default)(Person, [{
        key: 'setupActions',
        value: function setupActions() {
            var _this2 = this;

            var actions = this.actions = {
                attack: function attack(state) {
                    state && this.play();
                }
            };
            (0, _entries2.default)(actions).forEach(function (_ref) {
                var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                    key = _ref2[0],
                    func = _ref2[1];

                return actions[key] = func.bind(_this2);
            });

            _store.gameplay.on('changed:attack', actions.attack);
            actions.attack(_store.gameplay.attack);
        }
    }, {
        key: 'setBump',
        value: function setBump(at) {
            var set = 1 - Math.abs(0.5 - at) * 2;
            this.y = -this.height * 0.01 * set;
            this.rotation = set / 45;
        }
    }, {
        key: 'destroy',
        value: function destroy(child) {
            (0, _get3.default)(Person.prototype.__proto__ || (0, _getPrototypeOf2.default)(Person.prototype), 'destroy', this).call(this, child);
            _store.gameplay.off('changed:attack', this.actions.attack);
        }
    }]);
    return Person;
}(_objects.SpriteSheet);

exports.default = Person;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = __webpack_require__(7);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(10);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _entries = __webpack_require__(9);

var _entries2 = _interopRequireDefault(_entries);

var _objects = __webpack_require__(38);

var _store = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function frames() {
    return (0, _entries2.default)(_store.resources.house).map(function (e) {
        return e[1];
    });
}

var House = function (_SpriteSheet) {
    (0, _inherits3.default)(House, _SpriteSheet);

    function House() {
        (0, _classCallCheck3.default)(this, House);

        //this.addFrames();
        var _this = (0, _possibleConstructorReturn3.default)(this, (House.__proto__ || (0, _getPrototypeOf2.default)(House)).call(this, frames()));

        _this.setupActions();
        //this.addSpritesheet();
        //this.applyActions();
        return _this;
    }

    (0, _createClass3.default)(House, [{
        key: 'setupActions',
        value: function setupActions() {
            var _this2 = this;

            var actions = this.actions = {
                play: function play(state) {
                    state ? this.play() : this.stop();
                },
                speed: function speed(state) {
                    this.animationSpeed = this._textures.length / 60 * (state / 100);
                }
            };
            (0, _entries2.default)(actions).forEach(function (_ref) {
                var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                    key = _ref2[0],
                    func = _ref2[1];

                return actions[key] = func.bind(_this2);
            });

            _store.gameplay.on('changed:play', actions.play).on('changed:speed', actions.speed);
            actions.play(_store.gameplay.play);
            actions.speed(_store.gameplay.speed);
        }
    }, {
        key: 'addSpritesheet',
        value: function addSpritesheet() {
            var index = 0,
                anims = this.animations = {};
            var imgs = (0, _entries2.default)(_store.resources.house).map(function (_ref3) {
                var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
                    key = _ref4[0],
                    image = _ref4[1];

                var name = key.replace(/\-[0-9]+$/, '');
                var anim = anims[name] = anims[name] || { frames: [] };
                anim.frames.push(index);

                index++;
                return image;
            });

            var _imgs$ = imgs[0],
                width = _imgs$.width,
                height = _imgs$.height;

            var sheet = this.spriteSheet = new _objects.SpriteSheet({
                images: imgs,
                frames: {
                    width: width,
                    height: height
                },
                animations: anims
            });
            this.actions.speed(_store.gameplay.speed);
            this.actions.play(_store.gameplay.play);
        }
    }, {
        key: 'destroy',
        value: function destroy(child) {
            (0, _get3.default)(House.prototype.__proto__ || (0, _getPrototypeOf2.default)(House.prototype), 'destroy', this).call(this, child);
            _store.gameplay.off('changed:speed', this.actions.speed).off('changed:play', this.actions.play);
        }
    }]);
    return House;
}(_objects.SpriteSheet);

exports.default = House;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = __webpack_require__(7);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(9);

var _entries2 = _interopRequireDefault(_entries);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(10);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _pixi = __webpack_require__(5);

var _Boss = __webpack_require__(175);

var _Boss2 = _interopRequireDefault(_Boss);

var _Group = __webpack_require__(176);

var _Group2 = _interopRequireDefault(_Group);

var _store = __webpack_require__(6);

var _soldier = __webpack_require__(78);

var _soldier2 = _interopRequireDefault(_soldier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Enemy = function (_Container) {
    (0, _inherits3.default)(Enemy, _Container);

    function Enemy() {
        (0, _classCallCheck3.default)(this, Enemy);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Enemy.__proto__ || (0, _getPrototypeOf2.default)(Enemy)).call(this));

        _this.setupActions();
        _this.initializeMap();
        _this.y = _store.canvas.battle.y;
        return _this;
    }

    (0, _createClass3.default)(Enemy, [{
        key: 'setupActions',
        value: function setupActions() {
            var _this4 = this;

            var heroRange = {
                range: _store.gameplay.heroRange
            };

            var actions = this.actions = {
                attack: function attack(soldier) {
                    _store.gameplay.attack = soldier;
                    soldier.actions.die();
                },
                distance: function distance(state) {
                    var _this2 = this;

                    while (this.enemy.length && this.enemy[0].x < state + _store.canvas.width) {
                        this.addChild(this.enemy.shift());
                        this.children.sort(function (a, b) {
                            return a.y - b.y;
                        });
                    }

                    heroRange.x = state;
                    heroRange.y = _store.gameplay.lance * _store.gameplay.lanceHeight + _store.gameplay.lanceHeight / 2;

                    var inRange = this.inRange(heroRange);
                    inRange.forEach(function (soldier) {
                        return _this2.actions.attack(soldier);
                    });
                },
                fireSkill: function fireSkill(id) {
                    var _this3 = this;

                    if (id === null) return;
                    var skill = _store.skills[id],
                        paths = skill.paths();
                    var inPath = void 0;
                    if (!paths || !paths.length) return;
                    if (paths[0] instanceof Array) {
                        inPath = paths.map(function (area) {
                            return _this3.inPath(area);
                        }).reduce(function (a, b) {
                            return a.concat(b);
                        });
                    } else {
                        inPath = this.inPath(paths);
                    }
                    inPath.forEach(function (child) {
                        return _this3.actions.attack(child);
                    });
                },
                end: function end(state) {
                    if (!state) {
                        while (this.children.length) {
                            this.removeChildAt(0);
                        }this.initializeMap();
                    }
                }
            };
            (0, _entries2.default)(actions).forEach(function (_ref) {
                var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                    key = _ref2[0],
                    func = _ref2[1];

                return actions[key] = func.bind(_this4);
            });

            _store.gameplay.on('changed:distance', this.actions.distance).on('changed:fireSkill', this.actions.fireSkill).on('changed:end', this.actions.end);
        }
    }, {
        key: 'initializeMap',
        value: function initializeMap() {
            var childs = [];
            _store.map.arrange.forEach(function (group) {
                group = new _Group2.default(group);
                childs.push.apply(childs, group);
            });
            childs.sort(function (a, b) {
                return a.x - b.x;
            });
            this.enemy = childs;
            this.enemy.push(this.boss = new _Boss2.default());
        }
    }, {
        key: 'inRange',
        value: function inRange(state) {
            var inRange = [];
            var child = void 0,
                distance = void 0;
            for (var i = 0; i < this.children.length; i++) {
                child = this.children[i];
                if (child.inRange) continue;
                if (child.outRange) {
                    var bounds = child.getBounds();
                    if (bounds.x + bounds.width < 0) {
                        child.destroy({ children: true });
                    }
                    continue;
                }
                distance = Math.sqrt(Math.pow(child.x - state.x, 2) + Math.pow(child.y - state.y, 2));
                if (distance <= state.range) {
                    child.inRange = true;
                    inRange.push(child);
                } else if (child.x + state.range < state.x) {
                    child.outRange = true;
                    continue;
                }
            }
            return inRange;
        }
    }, {
        key: 'inPath',
        value: function inPath(paths) {
            var _this5 = this;

            paths = paths.map(function (path) {
                return {
                    x: path.x * _store.canvas.battle.width + _store.gameplay.camera.x,
                    y: path.y * _store.canvas.battle.height
                };
            });

            var area = Math.polygonArea(paths);
            var inPath = [];

            var _loop = function _loop(i) {
                var child = _this5.children[i];

                if (child.inRange) return 'continue';
                if (child.outRange) {
                    child.outRange = false;
                }
                var triangles = paths.slice(0).map(function (point, i) {
                    var pointB = paths[(i + 1) % paths.length];
                    return Math.polygonArea([{ x: child.x, y: child.y }, { x: point.x, y: point.y }, { x: pointB.x, y: pointB.y }]);
                }).reduce(function (a, b) {
                    return a + b;
                });
                if (triangles - 20 < area) {
                    child.inRange = true;
                    inPath.push(child);
                }
            };

            for (var i = 0; i < this.children.length; i++) {
                var _ret = _loop(i);

                if (_ret === 'continue') continue;
            }
            return inPath;
        }
    }, {
        key: 'destroy',
        value: function destroy(child) {
            _store.gameplay.off('changed:distance', this.actions.distance).off('changed:fireSkill', this.actions.fireSkill).off('changed:end', this.actions.end);
            (0, _get3.default)(Enemy.prototype.__proto__ || (0, _getPrototypeOf2.default)(Enemy.prototype), 'destroy', this).call(this, child);
        }
    }]);
    return Enemy;
}(_pixi.Container);

exports.default = Enemy;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Soldier2 = __webpack_require__(83);

var _Soldier3 = _interopRequireDefault(_Soldier2);

var _store = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Boss = function (_Soldier) {
    (0, _inherits3.default)(Boss, _Soldier);

    function Boss() {
        (0, _classCallCheck3.default)(this, Boss);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Boss.__proto__ || (0, _getPrototypeOf2.default)(Boss)).call(this, _store.map.boss));

        _this.x = _store.map.length;
        _this.y = (~~Math.range(0, _store.map.lances) + .5) * _store.gameplay.lanceHeight;

        var dead = _this.actions.dead;
        _this.actions.dead = function () {
            dead();
            _store.gameplay.bossdead = true;
        }.bind(_this);
        return _this;
    }

    return Boss;
}(_Soldier3.default);

exports.default = Boss;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(36);

var _assign2 = _interopRequireDefault(_assign);

var _slicedToArray2 = __webpack_require__(7);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(9);

var _entries2 = _interopRequireDefault(_entries);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Soldier = __webpack_require__(83);

var _Soldier2 = _interopRequireDefault(_Soldier);

var _store = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Group = function (_Array) {
    (0, _inherits3.default)(Group, _Array);

    function Group(config) {
        (0, _classCallCheck3.default)(this, Group);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Group.__proto__ || (0, _getPrototypeOf2.default)(Group)).call(this));

        _this.config = config;
        (0, _entries2.default)(config.enemy).forEach(function (_ref) {
            var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                id = _ref2[0],
                num = _ref2[1];

            for (var i = 0; i < num; i++) {
                _this.push(_this.createSoldier(id));
            }
        });
        return _this;
    }

    (0, _createClass3.default)(Group, [{
        key: "createSoldier",
        value: function createSoldier(id) {
            var _config = this.config,
                range = _config.range,
                lance = _config.lance,
                soldier = new _Soldier2.default(id);

            (0, _assign2.default)(soldier, {
                x: Math.range(range.from, range.to),
                y: _store.gameplay.lanceHeight * lance + Math.range(10, _store.gameplay.lanceHeight - 20)
            });
            return soldier;
        }
    }]);
    return Group;
}(Array);

exports.default = Group;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _pixi = __webpack_require__(5);

var _store = __webpack_require__(6);

var _Skills = __webpack_require__(178);

var _Skills2 = _interopRequireDefault(_Skills);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*======================= Import Config ===========================*/
var Footer = function (_Container) {
    (0, _inherits3.default)(Footer, _Container);

    function Footer() {
        (0, _classCallCheck3.default)(this, Footer);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).call(this));

        _this.addGround();
        return _this;
    }

    (0, _createClass3.default)(Footer, [{
        key: 'addGround',
        value: function addGround() {
            var _resources$footer = _store.resources.footer,
                background = _resources$footer.background,
                engun = _resources$footer.engun,
                width = background.width,
                height = background.height,
                ground = new _pixi.Sprite(background),
                engunGround = new _pixi.Sprite(engun);

            engunGround.anchor.set(0.5, 1);
            engunGround.y = ground.height;
            engunGround.x = ground.width / 2;
            this.addChild(ground, engunGround);

            var skills = new _Skills2.default();
            skills.scale.set(.923 * this.width / skills.width, .68 * this.height / skills.height);
            skills.x = this.width * .042;
            skills.y = this.height * .08;

            this.addChild(skills);

            this.scale.set(_store.canvas.width / ground.width);
            this.y = _store.canvas.height;
            this.pivot.y = ground.height;

            // const  scale = canvas.width/width;
            // Object.assign(this,{
            //     scaleX  : scale,
            //     scaleY  : scale,
            //     regY    : height,
            //     y       : canvas.height
            // });
        }
    }]);
    return Footer;
}(_pixi.Container);

exports.default = Footer;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = __webpack_require__(7);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(9);

var _entries2 = _interopRequireDefault(_entries);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(10);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _pixi = __webpack_require__(5);

var _store = __webpack_require__(6);

var _gsap = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Skill = function (_Container) {
    (0, _inherits3.default)(Skill, _Container);

    function Skill(id) {
        (0, _classCallCheck3.default)(this, Skill);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Skill.__proto__ || (0, _getPrototypeOf2.default)(Skill)).call(this));

        _this.skillID = id;
        _this.setupAction();
        _this.addUI();
        _this.buttonMode = true;
        _this.interactive = true;
        return _this;
    }

    (0, _createClass3.default)(Skill, [{
        key: 'setupAction',
        value: function setupAction() {
            var _this2 = this;

            var actions = this.actions = {
                play: function play(state) {
                    state ? this.timeline.play() : this.timeline.pause();
                },
                castSkill: function castSkill(id) {
                    if (id !== this.skillID) return;
                    _store.gameplay.off('changed:play', actions.play).off('changed:castSkill', actions.castSkill);

                    this.off('pointerdown');
                    _gsap.TweenLite.to(this, .1, { y: -10 });
                },
                fireSkill: function fireSkill(id) {
                    if (id !== this.skillID) return;
                    this.timeline.kill();
                    while (this.children.length > 1) {
                        this.children[1].destroy({ children: true });
                    }_gsap.TweenLite.to(this, .1, { y: 0, alpha: .5 });
                },
                end: function end(state) {
                    if (state) {
                        _store.gameplay.off('changed:play', actions.play).off('changed:castSkill', actions.castSkill);

                        this.off('pointerdown');
                        this.timeline.kill();
                        while (this.children.length > 1) {
                            this.children[1].destroy({ children: true });
                        }
                    }
                }
            };
            (0, _entries2.default)(actions).forEach(function (_ref) {
                var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                    key = _ref2[0],
                    func = _ref2[1];

                actions[key] = func.bind(_this2);
            });
            _store.gameplay.on('changed:play', actions.play).on('changed:castSkill', actions.castSkill).on('changed:fireSkill', actions.fireSkill).on('changed:end', actions.end);
        }
    }, {
        key: 'addUI',
        value: function addUI() {
            var id = this.skillID,
                This = this;
            var sprite = new _pixi.Sprite(_store.resources.skills[id].panel);
            this.addChild(sprite);

            this.buttonMode = true;
            this.interactive = true;

            var icon = new _pixi.Sprite(_store.resources.footer['icon-skill']);
            icon.anchor.set(.5, 1);
            icon.position.set(.2 * this.width, this.height);
            this.addChild(icon);
            var timeline = this.timeline = new _gsap.TimelineMax({ repeat: -1, repeatDelay: .5 });
            timeline.add([2, 1, 0].map(function (i) {
                var eff = new _pixi.Sprite(_store.resources.footer['icon-skill']);
                eff.anchor = icon.anchor;
                eff.position = icon.position;
                This.addChild(eff);
                return [_gsap.TweenLite.to(eff.scale, .5, { x: 1.5, y: 1.5, ease: _gsap.Cubic.Out, delay: .2 * i }), _gsap.TweenLite.to(eff, .5, { alpha: 0, ease: _gsap.Cubic.Out, delay: .2 * i })];
            }));

            this.on('pointerdown', function (e) {
                return _store.gameplay.castSkill = id;
            });
        }
    }, {
        key: 'destroy',
        value: function destroy(ops) {
            (0, _get3.default)(Skill.prototype.__proto__ || (0, _getPrototypeOf2.default)(Skill.prototype), 'destroy', this).call(this, ops);
            this.timeline.kill();
            _store.gameplay.off('changed:play', this.actions.play).off('changed:castSkill', this.actions.castSkill).off('changed:fireSkill', this.actions.fireSkill);
        }
    }]);
    return Skill;
}(_pixi.Container);

var Skills = function (_Container2) {
    (0, _inherits3.default)(Skills, _Container2);

    function Skills() {
        (0, _classCallCheck3.default)(this, Skills);

        var _this3 = (0, _possibleConstructorReturn3.default)(this, (Skills.__proto__ || (0, _getPrototypeOf2.default)(Skills)).call(this));

        _this3.setupAction();
        _this3.addSkills(_store.gameplay.skills);
        return _this3;
    }

    (0, _createClass3.default)(Skills, [{
        key: 'setupAction',
        value: function setupAction() {
            var _this4 = this;

            var actions = this.actions = {
                skills: function skills(_skills) {
                    while (this.children.length) {
                        this.children[0].destroy({ children: true });
                    }this.addSkills(_skills);
                },
                end: function end(state) {
                    if (!state) actions.skills(_store.gameplay.skills);
                }
            };
            (0, _entries2.default)(actions).forEach(function (_ref3) {
                var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
                    key = _ref4[0],
                    func = _ref4[1];

                actions[key] = func.bind(_this4);
            });
            _store.gameplay.on('changed:skills', actions.skills).on('changed:end', actions.end);
        }
    }, {
        key: 'addSkills',
        value: function addSkills(skills) {
            var _this5 = this;

            skills.map(function (id) {
                var skill = new Skill(id);
                skill.x = _this5.width / _this5.scale.x;
                _this5.addChild(skill);
                return skill;
            });
        }
    }, {
        key: 'destroy',
        value: function destroy(ops) {
            (0, _get3.default)(Skills.prototype.__proto__ || (0, _getPrototypeOf2.default)(Skills.prototype), 'destroy', this).call(this, ops);
            _store.gameplay.off('changed:skills', this.actions.skills);
        }
    }]);
    return Skills;
}(_pixi.Container);

exports.default = Skills;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _pixi = __webpack_require__(5);

var _Start = __webpack_require__(180);

var _Start2 = _interopRequireDefault(_Start);

var _BossDead = __webpack_require__(181);

var _BossDead2 = _interopRequireDefault(_BossDead);

var _Attack = __webpack_require__(182);

var _Attack2 = _interopRequireDefault(_Attack);

var _Skill = __webpack_require__(183);

var _Skill2 = _interopRequireDefault(_Skill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Status = function (_Container) {
    (0, _inherits3.default)(Status, _Container);

    function Status() {
        (0, _classCallCheck3.default)(this, Status);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Status.__proto__ || (0, _getPrototypeOf2.default)(Status)).call(this));

        _this.addUI();
        return _this;
    }

    (0, _createClass3.default)(Status, [{
        key: 'addUI',
        value: function addUI() {
            this.addChild(new _Start2.default());
            this.addChild(new _Attack2.default());
            this.addChild(new _Skill2.default());
            this.addChild(new _BossDead2.default());
        }
    }]);
    return Status;
}(_pixi.Container);

exports.default = Status;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = __webpack_require__(7);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(9);

var _entries2 = _interopRequireDefault(_entries);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(10);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _pixi = __webpack_require__(5);

var _store = __webpack_require__(6);

var _gsap = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Start = function (_Container) {
    (0, _inherits3.default)(Start, _Container);

    function Start() {
        (0, _classCallCheck3.default)(this, Start);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Start.__proto__ || (0, _getPrototypeOf2.default)(Start)).call(this));

        _this.addUI();
        _this.setupActions();
        return _this;
    }

    (0, _createClass3.default)(Start, [{
        key: 'addUI',
        value: function addUI() {
            var start = new _pixi.Sprite(_store.resources.status.start);
            start.anchor.set(0.5);
            this.addChild(start);

            this.x = _store.canvas.width / 2;
            this.y = _store.canvas.height / 2;
            this.scale.set(.5 * _store.canvas.width / start.width);
            this.visible = false;
        }
    }, {
        key: 'setupActions',
        value: function setupActions() {
            var _this3 = this;

            var actions = this.actions = {
                play: function play(state) {
                    var _this2 = this;

                    if (!state || _store.gameplay.distance !== 0) return;
                    this.visible = true;
                    setTimeout(function () {
                        var scale = _this2.scale.x;
                        _gsap.TweenLite.to(_this2, 1, { alpha: 0 });
                        _gsap.TweenLite.to(_this2.scale, 1, {
                            x: scale * 2,
                            y: scale * 2,
                            onComplete: function onComplete() {
                                _this2.visible = false;
                                _this2.scale.set(scale);
                                _this2.alpha = 1;
                            }
                        });
                    }, 500);
                }
            };
            (0, _entries2.default)(actions).forEach(function (_ref) {
                var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                    key = _ref2[0],
                    func = _ref2[1];

                return actions[key] = func.bind(_this3);
            });
            _store.gameplay.on('changed:play', actions.play);
            actions.play(_store.gameplay.play);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            (0, _get3.default)(Start.prototype.__proto__ || (0, _getPrototypeOf2.default)(Start.prototype), 'destroy', this).call(this);
            _store.gameplay.off('changed:play', this.actions.play);
        }
    }]);
    return Start;
}(_pixi.Container);

exports.default = Start;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = __webpack_require__(7);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(9);

var _entries2 = _interopRequireDefault(_entries);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(10);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _pixi = __webpack_require__(5);

var _store = __webpack_require__(6);

var _gsap = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BossDead = function (_Container) {
    (0, _inherits3.default)(BossDead, _Container);

    function BossDead() {
        (0, _classCallCheck3.default)(this, BossDead);

        var _this = (0, _possibleConstructorReturn3.default)(this, (BossDead.__proto__ || (0, _getPrototypeOf2.default)(BossDead)).call(this));

        _this.addUI();
        _this.setupActions();
        return _this;
    }

    (0, _createClass3.default)(BossDead, [{
        key: 'addUI',
        value: function addUI() {

            var radian = this.radian = new _pixi.Sprite(_store.resources.status.radiation);
            radian.anchor.set(0.5);
            radian.scale.set(_store.canvas.width / radian.width);
            this.addChild(radian);

            var end = this.bgEnd = new _pixi.Sprite(_store.resources.status.end);
            end.anchor.set(0.5);
            end.scale.set(.7 * _store.canvas.width / end.width);
            this.addChild(end);

            this.x = _store.canvas.width / 2;
            this.y = _store.canvas.height / 2;
            this.visible = false;
        }
    }, {
        key: 'setupActions',
        value: function setupActions() {
            var _this3 = this;

            var actions = this.actions = {
                rotation: function rotation() {
                    this.radian.rotation += .005;
                },
                end: function end(state) {
                    if (!state) {
                        this.visible = false;
                        _pixi.ticker.shared.remove(actions.rotation);
                    }
                },
                play: function play(state) {
                    if (_store.gameplay.end && !state) {}
                },
                bossdead: function bossdead(state) {
                    var _this2 = this;

                    if (!state) return;
                    _store.gameplay.once('changed:play', function (state) {
                        if (state) return;
                        _this2.visible = true;
                        _gsap.TweenLite.from(_this2.radian, .2, { alpha: 0 });
                        _pixi.ticker.shared.add(actions.rotation);

                        var scale = _this2.bgEnd.scale.x;
                        _gsap.TweenLite.from(_this2.bgEnd, .2, { alpha: 0 });
                        _gsap.TweenLite.from(_this2.bgEnd.scale, .15, {
                            x: scale * 2,
                            y: scale * 2
                        });
                        _gsap.TweenLite.fromTo(_this2.bgEnd, 0.1, { x: -2 }, {
                            x: 2, ease: _gsap.RoughEase.ease.config({ strength: 8, points: 20, template: _gsap.Linear.easeNone, randomize: false }),
                            clearProps: "x",
                            delay: .15
                        });
                    });
                }
            };
            (0, _entries2.default)(actions).forEach(function (_ref) {
                var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                    key = _ref2[0],
                    func = _ref2[1];

                return actions[key] = func.bind(_this3);
            });
            _store.gameplay.on('changed:end', actions.end).on('changed:bossdead', actions.bossdead);
        }
    }, {
        key: 'destroy',
        value: function destroy(child) {
            (0, _get3.default)(BossDead.prototype.__proto__ || (0, _getPrototypeOf2.default)(BossDead.prototype), 'destroy', this).call(this, child);
            _store.gameplay.off('changed:end', this.actions.end);
            _pixi.ticker.shared.remove(this.actions.rotation);
        }
    }]);
    return BossDead;
}(_pixi.Container);

exports.default = BossDead;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = __webpack_require__(7);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(9);

var _entries2 = _interopRequireDefault(_entries);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(10);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _pixi = __webpack_require__(5);

var _store = __webpack_require__(6);

var _gsap = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Attack = function (_Container) {
    (0, _inherits3.default)(Attack, _Container);

    function Attack() {
        (0, _classCallCheck3.default)(this, Attack);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Attack.__proto__ || (0, _getPrototypeOf2.default)(Attack)).call(this));

        _this.setupActions();
        return _this;
    }

    (0, _createClass3.default)(Attack, [{
        key: 'setupActions',
        value: function setupActions() {
            var _this3 = this;

            var deny = false;
            var actions = this.actions = {
                attack: function attack(soldier) {
                    var _this2 = this;

                    if (deny) return;
                    deny = true;
                    setTimeout(function () {
                        return deny = false;
                    }, 100);
                    var range = Math.range(100, 120),
                        rotate = Math.range(0, Math.PI),
                        x = Math.sin(rotate) * range,
                        y = Math.cos(rotate) * range;
                    var sprite = new _pixi.Sprite(_store.resources.status.faru);

                    sprite.x = x + 50;
                    sprite.y = y + _store.canvas.battle.y + _store.gameplay.lance * _store.gameplay.lanceHeight;
                    sprite.scale.set(0.5);
                    sprite.anchor.set(0.5);

                    _gsap.TweenLite.from(sprite, .2, { alpha: 0 });
                    _gsap.TweenLite.fromTo(sprite, 0.1, { x: sprite.x - 2 }, {
                        x: sprite.x + 2, ease: _gsap.RoughEase.ease.config({ strength: 8, points: 20, template: _gsap.Linear.easeNone, randomize: false }),
                        clearProps: "x",
                        delay: .2
                    });

                    this.addChild(sprite);

                    setTimeout(function () {
                        return _this2.removeChild(sprite);
                    }, 500);
                }
            };
            (0, _entries2.default)(actions).forEach(function (_ref) {
                var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                    key = _ref2[0],
                    func = _ref2[1];

                return actions[key] = func.bind(_this3);
            });
            _store.gameplay.on('changed:attack', actions.attack);
        }
    }, {
        key: 'destroy',
        value: function destroy(child) {
            (0, _get3.default)(Attack.prototype.__proto__ || (0, _getPrototypeOf2.default)(Attack.prototype), 'destroy', this).call(this, child);
            _store.gameplay.off('changed:attack', this.actions.attack);
        }
    }]);
    return Attack;
}(_pixi.Container);

exports.default = Attack;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = __webpack_require__(7);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(9);

var _entries2 = _interopRequireDefault(_entries);

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(10);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _pixi = __webpack_require__(5);

var _store = __webpack_require__(6);

var _gsap = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Skill = function (_Container) {
    (0, _inherits3.default)(Skill, _Container);

    function Skill() {
        (0, _classCallCheck3.default)(this, Skill);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Skill.__proto__ || (0, _getPrototypeOf2.default)(Skill)).call(this));

        _this.setupActions();
        _this.addUI();
        _this.y = _store.canvas.height / 2;
        _this.visible = false;
        _this.alpha = 0;
        return _this;
    }

    (0, _createClass3.default)(Skill, [{
        key: 'setupActions',
        value: function setupActions() {
            var _this2 = this;

            var casting = null,
                speed = _store.gameplay.speed,
                playtween = new _gsap.TweenLite(_store.gameplay, 1, { speed: 0, paused: true });

            var actions = this.actions = {
                castSkill: function castSkill(id) {
                    if (casting !== null) return false;
                    if (casting === id) return;
                    casting = id;
                    playtween.timeScale = 0.5;
                    playtween.play();
                    //TweenLite.to(gameplay,.5,{speed:0});

                    var This = this;
                    this.visible = true;
                    var image = new _pixi.Sprite(_store.resources.skills[id].image);
                    image.anchor.set(0.5, 1);
                    image.x = _store.canvas.width / 2 / this.all.scale.y;
                    image.y = this.background.height / 2;
                    this.background.addChild(image);
                    _gsap.TweenLite.to(this, .3, { alpha: 1 });
                    _gsap.TweenLite.from(image, 1.5, { alpha: 1, x: -image.width, ease: _gsap.Expo.easeOut, onComplete: function onComplete() {
                            _gsap.TweenLite.to(This, .3, { alpha: 0, onComplete: function onComplete() {
                                    image.destroy({ children: true });
                                    This.visible = false;
                                    playtween.timeScale = 1;
                                    playtween.reverse();
                                    casting = null;
                                    _store.gameplay.fireSkill = id;
                                }
                            });
                        }
                    });
                },
                fireSkill: function fireSkill(id) {
                    if (casting !== null) return false;
                }
            };
            (0, _entries2.default)(actions).forEach(function (_ref) {
                var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                    key = _ref2[0],
                    func = _ref2[1];

                return actions[key] = func.bind(_this2);
            });
            _store.gameplay.on('change:castSkill', actions.castSkill).on('change:fireSkill', actions.fireSkill);
        }
    }, {
        key: 'addUI',
        value: function addUI() {
            var all = this.all = new _pixi.Container(),
                bg = this.background = new _pixi.Container(),
                imgBg = _store.resources.status['skill-bg'],
                bgReapeat = new _pixi.extras.TilingSprite(_store.resources.status['skill-bg'], imgBg.width, imgBg.height),
                thunderT = new _pixi.Sprite(_store.resources.status['skill-thunder']),
                thunderB = new _pixi.Sprite(_store.resources.status['skill-thunder']);
            bgReapeat.anchor.set(0, 0.5);
            thunderT.anchor.set(0, 0.5);
            thunderT.y = -bgReapeat.height / 2;
            thunderB.anchor.set(0, 0.5);
            thunderB.y = bgReapeat.height / 2;
            bg.addChild(bgReapeat);
            all.addChild(bg, thunderT, thunderB);
            all.scale.set(_store.canvas.width / bg.width);
            this.addChild(all);
        }
    }, {
        key: 'destroy',
        value: function destroy(ops) {
            (0, _get3.default)(Skill.prototype.__proto__ || (0, _getPrototypeOf2.default)(Skill.prototype), 'destroy', this).call(this, ops);
            _store.gameplay.off('changed:castSkill', this.actions.castSkill);
        }
    }]);
    return Skill;
}(_pixi.Container);

exports.default = Skill;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(0);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _pixi = __webpack_require__(5);

var _store = __webpack_require__(6);

var _gsap = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HitArea = function (_Container) {
    (0, _inherits3.default)(HitArea, _Container);

    function HitArea() {
        (0, _classCallCheck3.default)(this, HitArea);

        var _this = (0, _possibleConstructorReturn3.default)(this, (HitArea.__proto__ || (0, _getPrototypeOf2.default)(HitArea)).call(this));

        _this.hitArea = new _pixi.Rectangle(0, _store.canvas.height * 0.3, _store.canvas.width, _store.gameplay.lanceHeight * _store.map.lances);
        _this.buttonMode = true;
        _this.interactive = true;
        _this.on('pointerdown', _this.onTouch.bind(_this));
        return _this;
    }

    (0, _createClass3.default)(HitArea, [{
        key: 'onTouch',
        value: function onTouch(e) {
            var point = e.data.global,
                y = point.y - _store.canvas.battle.y,
                toLance = ~~(y / _store.gameplay.lanceHeight);
            this.goto(toLance);
        }
    }, {
        key: 'goto',
        value: function goto(toLance) {
            _gsap.TweenLite.to(_store.gameplay, Math.abs(toLance - _store.gameplay.lance) * 0, { lance: toLance });
        }
    }]);
    return HitArea;
}(_pixi.Container);

exports.default = HitArea;

/***/ })
/******/ ]);