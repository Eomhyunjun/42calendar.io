(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("mobx-react"), require("mobx"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "mobx-react", "mobx"], factory);
	else if(typeof exports === 'object')
		exports["ReactModal"] = factory(require("react"), require("react-dom"), require("mobx-react"), require("mobx"));
	else
		root["ReactModal"] = factory(root["React"], root["ReactDOM"], root["mobxReact"], root["mobx"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__71__, __WEBPACK_EXTERNAL_MODULE__73__, __WEBPACK_EXTERNAL_MODULE__74__, __WEBPACK_EXTERNAL_MODULE__83__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultProps = exports.setDefaultProps = exports.close = exports.open = exports.Modal = exports.createId = undefined;

__webpack_require__(1);

__webpack_require__(53);

var _shortid = __webpack_require__(60);

var _shortid2 = _interopRequireDefault(_shortid);

var _Modal = __webpack_require__(70);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Modal Component
 * @author: Seok Kyun. Choi. 최석균 (Syaku)
 * @site: http://syaku.tistory.com
 * @since: 2017. 8. 31.
 */
exports.default = _Modal2.default;
var createId = exports.createId = function createId() {
  return _shortid2.default.generate();
};
exports.Modal = _Modal2.default;
exports.open = _Modal.open;
exports.close = _Modal.close;
exports.setDefaultProps = _Modal.setDefaultProps;
exports.getDefaultProps = _Modal.getDefaultProps;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
__webpack_require__(46);
module.exports = __webpack_require__(10).Array.from;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(3)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(6)(String, 'String', function (iterated) {
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(4);
var defined = __webpack_require__(5);
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
/* 4 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(7);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(21);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(26);
var $iterCreate = __webpack_require__(27);
var setToStringTag = __webpack_require__(42);
var getPrototypeOf = __webpack_require__(44);
var ITERATOR = __webpack_require__(43)('iterator');
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
  var $default = $native || getMethod(DEFAULT);
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
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
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
/* 7 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var core = __webpack_require__(10);
var hide = __webpack_require__(11);
var redefine = __webpack_require__(21);
var ctx = __webpack_require__(24);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
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
/* 9 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var createDesc = __webpack_require__(20);
module.exports = __webpack_require__(16) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(15);
var toPrimitive = __webpack_require__(19);
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(16) && !__webpack_require__(17)(function () {
  return Object.defineProperty(__webpack_require__(18)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(17)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var document = __webpack_require__(9).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(14);
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
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var hide = __webpack_require__(11);
var has = __webpack_require__(22);
var SRC = __webpack_require__(23)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(10).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(25);
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
/* 25 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(28);
var descriptor = __webpack_require__(20);
var setToStringTag = __webpack_require__(42);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(11)(IteratorPrototype, __webpack_require__(43)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(13);
var dPs = __webpack_require__(29);
var enumBugKeys = __webpack_require__(40);
var IE_PROTO = __webpack_require__(38)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(18)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(41).appendChild(iframe);
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var anObject = __webpack_require__(13);
var getKeys = __webpack_require__(30);

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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(31);
var enumBugKeys = __webpack_require__(40);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(22);
var toIObject = __webpack_require__(32);
var arrayIndexOf = __webpack_require__(35)(false);
var IE_PROTO = __webpack_require__(38)('IE_PROTO');

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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(33);
var defined = __webpack_require__(5);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(34);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(32);
var toLength = __webpack_require__(36);
var toAbsoluteIndex = __webpack_require__(37);
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(4);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(4);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(39)('keys');
var uid = __webpack_require__(23);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(9).document;
module.exports = document && document.documentElement;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(12).f;
var has = __webpack_require__(22);
var TAG = __webpack_require__(43)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(39)('wks');
var uid = __webpack_require__(23);
var Symbol = __webpack_require__(9).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(22);
var toObject = __webpack_require__(45);
var IE_PROTO = __webpack_require__(38)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(5);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(24);
var $export = __webpack_require__(8);
var toObject = __webpack_require__(45);
var call = __webpack_require__(47);
var isArrayIter = __webpack_require__(48);
var toLength = __webpack_require__(36);
var createProperty = __webpack_require__(49);
var getIterFn = __webpack_require__(50);

$export($export.S + $export.F * !__webpack_require__(52)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(13);
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(26);
var ITERATOR = __webpack_require__(43)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(12);
var createDesc = __webpack_require__(20);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(51);
var ITERATOR = __webpack_require__(43)('iterator');
var Iterators = __webpack_require__(26);
module.exports = __webpack_require__(10).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(34);
var TAG = __webpack_require__(43)('toStringTag');
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(43)('iterator');
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54);
module.exports = __webpack_require__(10).Array.forEach;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(8);
var $forEach = __webpack_require__(55)(0);
var STRICT = __webpack_require__(59)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(24);
var IObject = __webpack_require__(33);
var toObject = __webpack_require__(45);
var toLength = __webpack_require__(36);
var asc = __webpack_require__(56);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(57);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var isArray = __webpack_require__(58);
var SPECIES = __webpack_require__(43)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(34);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(17);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(61);


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(62);
var encode = __webpack_require__(64);
var decode = __webpack_require__(66);
var build = __webpack_require__(67);
var isValid = __webpack_require__(68);

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__(69) || 0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.decode = decode;
module.exports.isValid = isValid;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomFromSeed = __webpack_require__(63);

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

module.exports = {
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

module.exports = {
    nextValue: getNextValue,
    seed: setSeed
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomByte = __webpack_require__(65);

function encode(lookup, number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = encode;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

function randomByte() {
    if (!crypto || !crypto.getRandomValues) {
        return Math.floor(Math.random() * 256) & 0x30;
    }
    var dest = new Uint8Array(1);
    crypto.getRandomValues(dest);
    return dest[0] & 0x30;
}

module.exports = randomByte;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(62);

/**
 * Decode the id to get the version and worker
 * Mainly for debugging and testing.
 * @param id - the shortid-generated id.
 */
function decode(id) {
    var characters = alphabet.shuffled();
    return {
        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
    };
}

module.exports = decode;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var encode = __webpack_require__(64);
var alphabet = __webpack_require__(62);

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1459707606518;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 6;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {

    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + encode(alphabet.lookup, version);
    str = str + encode(alphabet.lookup, clusterWorkerId);
    if (counter > 0) {
        str = str + encode(alphabet.lookup, counter);
    }
    str = str + encode(alphabet.lookup, seconds);

    return str;
}

module.exports = build;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(62);

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var characters = alphabet.characters();
    var len = id.length;
    for(var i = 0; i < len;i++) {
        if (characters.indexOf(id[i]) === -1) {
            return false;
        }
    }
    return true;
}

module.exports = isShortId;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 0;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultProps = exports.setDefaultProps = exports.close = exports.open = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(71);

var _react2 = _interopRequireDefault(_react);

var _withModal = __webpack_require__(72);

var _withModal2 = _interopRequireDefault(_withModal);

var _properties = __webpack_require__(84);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * Modal Component
                                                                                                                                                                                                                   * @author: Seok Kyun. Choi. 최석균 (Syaku)
                                                                                                                                                                                                                   * @site: http://syaku.tistory.com
                                                                                                                                                                                                                   * @since: 2017. 8. 31.
                                                                                                                                                                                                                   */


var propTypes = {
  children: _properties.defaultPropTypes.children.isRequired,
  zIndex: _properties.defaultPropTypes.zIndex,

  onRequestClose: _properties.defaultPropTypes.onRequestClose.isRequired,
  isCloseButton: _properties.defaultPropTypes.isCloseButton.isRequired,

  className: _properties.defaultPropTypes.className,
  style: _properties.defaultPropTypes.style,
  containerClassName: _properties.defaultPropTypes.containerClassName,
  containerStyle: _properties.defaultPropTypes.containerStyle,
  width: _properties.defaultPropTypes.width,
  height: _properties.defaultPropTypes.height,

  left: _properties.defaultPropTypes.left,
  top: _properties.defaultPropTypes.top,
  right: _properties.defaultPropTypes.right,
  bottom: _properties.defaultPropTypes.bottom
};

var setPosition = function setPosition(value, position) {
  if (!value) return {};
  return _defineProperty({}, position, value);
};

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  _createClass(Modal, null, [{
    key: 'defaultProps',
    get: function get() {
      var defaultProps = (0, _properties.getDefaultProps)();
      return {
        zIndex: defaultProps.zIndex,
        className: defaultProps.className,
        style: defaultProps.style,
        width: defaultProps.width,
        height: defaultProps.height,
        containerClassName: defaultProps.containerClassName,
        containerStyle: defaultProps.containerStyle,
        left: defaultProps.left,
        top: defaultProps.top,
        right: defaultProps.right,
        bottom: defaultProps.bottom
      };
    }
  }]);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.modal = undefined;
    _this.focus = false;

    _this.onFocus = _this.onFocus.bind(_this);

    var style = _extends({}, props.style);
    if (props.width && (props.width > 0 || props.width !== '')) {
      style = _extends({}, style, { width: props.width });
    }
    if (props.height && (props.height > 0 || props.height !== '')) {
      style = _extends({}, style, { height: props.height });
    }

    var left = setPosition(props.left, 'left');
    style = _extends({}, style, left);
    var top = setPosition(props.top, 'top');
    style = _extends({}, style, top);
    var right = setPosition(props.right, 'right');
    style = _extends({}, style, right);
    var bottom = setPosition(props.bottom, 'bottom');
    style = _extends({}, style, bottom);

    if (props.zIndex) {
      style = _extends({}, style, { zIndex: props.zIndex });
    }

    _this.style = style;

    _this.closeButton = props.isCloseButton ? _react2.default.createElement('span', { className: 'modal-close', role: 'button', tabIndex: '0', onClick: function onClick() {
        _this.props.onRequestClose();
      } }) : null;
    return _this;
  }

  _createClass(Modal, [{
    key: 'onFocus',
    value: function onFocus() {
      if (this.modal && !this.focus) {
        this.focus = true;
        this.modal.focus();
      }
    }
  }, {
    key: 'getDOMRootNode',
    value: function getDOMRootNode() {
      return this.modal;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(node) {
            _this2.modal = node;
          },
          className: 'modal-wrapper' + (this.props.className ? ' ' + this.props.className : ''),
          style: this.style,
          role: 'button',
          tabIndex: '0',
          onClick: function onClick(e) {
            e.stopPropagation();
          }
        },
        _react2.default.createElement(
          'div',
          {
            className: 'modal-container' + (this.props.containerClassName ? ' ' + this.props.containerClassName : ''),
            style: this.props.containerStyle ? this.props.containerStyle : {}
          },
          this.closeButton,
          this.props.children
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = propTypes;

exports.default = (0, _withModal2.default)(Modal);
exports.open = _withModal.open;
exports.close = _withModal.close;
exports.setDefaultProps = _properties.setDefaultProps;
exports.getDefaultProps = _properties.getDefaultProps;

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__71__;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(71);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(73);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mobxReact = __webpack_require__(74);

var _shortid = __webpack_require__(60);

var _shortid2 = _interopRequireDefault(_shortid);

__webpack_require__(75);

var _ModalStore = __webpack_require__(82);

var _ModalStore2 = _interopRequireDefault(_ModalStore);

var _properties = __webpack_require__(84);

var _utils = __webpack_require__(90);

var _Overlay = __webpack_require__(91);

var _Overlay2 = _interopRequireDefault(_Overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 현재 modalId 는 componentDid 상태에서만 확인할 수 있다.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author: Seok Kyun. Choi. 최석균 (Syaku)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @site: http://syaku.tistory.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @since: 2017. 9. 16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var doc = document;
var docBody = doc.body;

var reactModal = doc.getElementById('react-modal');

if (!reactModal) {
  reactModal = doc.createElement('div');
  reactModal.setAttribute('id', 'react-modal');

  // docBody.insertBefore(
  //   reactModal,
  //   docBody.hasChildNodes() ? docBody.childNodes[0] : null,
  // );

  docBody.appendChild(reactModal);
}

var propTypes = {
  children: _properties.defaultPropTypes.children.isRequired,
  id: _properties.defaultPropTypes.id,

  isCenter: _properties.defaultPropTypes.isCenter,
  left: _properties.defaultPropTypes.left,
  top: _properties.defaultPropTypes.top,
  right: _properties.defaultPropTypes.right,
  bottom: _properties.defaultPropTypes.bottom,

  beforeOpen: _properties.defaultPropTypes.beforeOpen,
  afterOpen: _properties.defaultPropTypes.afterOpen,
  doneClose: _properties.defaultPropTypes.doneClose,

  isOpen: _properties.defaultPropTypes.isOpen,
  onClose: _properties.defaultPropTypes.onClose,

  zIndex: _properties.defaultPropTypes.zIndex,

  overlayClassName: _properties.defaultPropTypes.overlayClassName,
  overlayStyle: _properties.defaultPropTypes.overlayStyle,
  isOverlayClose: _properties.defaultPropTypes.isOverlayClose,

  isCloseButton: _properties.defaultPropTypes.isCloseButton,
  isEscClose: _properties.defaultPropTypes.isEscClose,
  isAutoFocus: _properties.defaultPropTypes.isAutoFocus
};

var modalStore = new _ModalStore2.default();

var withModal = function withModal(Component) {
  var Modal = (0, _mobxReact.observer)(function (_React$Component) {
    _inherits(Modal, _React$Component);

    _createClass(Modal, null, [{
      key: 'defaultProps',
      get: function get() {
        var defaultProps = (0, _properties.getDefaultProps)();
        return {
          id: defaultProps.id,
          isCenter: defaultProps.isCenter,
          left: defaultProps.left,
          top: defaultProps.top,
          right: defaultProps.right,
          bottom: defaultProps.bottom,
          beforeOpen: defaultProps.beforeOpen,
          afterOpen: defaultProps.afterOpen,
          doneClose: defaultProps.doneClose,
          isOpen: defaultProps.isOpen,
          onClose: defaultProps.onClose,
          zIndex: defaultProps.zIndex,
          overlayClassName: defaultProps.overlayClassName,
          overlayStyle: defaultProps.overlayStyle,
          isOverlayClose: defaultProps.isOverlayClose,
          isEscClose: defaultProps.isEscClose,
          isCloseButton: defaultProps.isCloseButton,
          isAutoFocus: defaultProps.isAutoFocus
        };
      }
    }, {
      key: 'propTypes',
      get: function get() {
        return propTypes;
      }
    }]);

    function Modal(props) {
      _classCallCheck(this, Modal);

      var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

      _this.id = props.id || _shortid2.default.generate();

      _this.ele = doc.createElement('div');
      _this.ele.setAttribute('id', _this.id);

      _this.isCenter = props.isCenter;
      if (props.left !== null || props.top !== null || props.right !== null || props.bottom !== null) {
        _this.isCenter = false;
      }

      _this.beforeOpenOnce = false;
      _this.afterOpenOnce = false;
      _this.doneCloseOnce = false;

      _this.isKeydownEventListener = false;
      _this.isResizeEventListener = false;

      _this.onOpen = _this.onOpen.bind(_this);
      _this.onRequestClose = _this.onRequestClose.bind(_this);
      _this.onEscClose = _this.onEscClose.bind(_this);
      _this.onResizeEventListener = _this.onResizeEventListener.bind(_this);

      _this.isOpen = modalStore.isOpen(_this.id);
      return _this;
    }

    _createClass(Modal, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        if (this.props.isOpen) {
          this.onOpen();
          this.isOpen = modalStore.isOpen(this.id);
        }
        this.onEventBeforeOpen();
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.isOpen) reactModal.appendChild(this.ele);

        this.onEventAfterOpen();

        this.isScrollBarDisable = (0, _utils.isScrollBarDisable)();
        if (!this.isScrollBarDisable) (0, _utils.scrollbarHidden)(modalStore);

        if (this.props.isEscClose && this.isOpen && !this.isKeydownEventListener && modalStore.current === this.id) {
          window.addEventListener('keydown', this.onEscClose);
          this.isKeydownEventListener = true;
        }

        if (!this.isResizeEventListener && modalStore.current === this.id) {
          this.onResizeEventListener();
          window.addEventListener('resize', this.onResizeEventListener);
          this.isResizeEventListener = true;
        }

        if (this.id === modalStore.current && this.props.isAutoFocus) this.modal.onFocus();
      }
    }, {
      key: 'componentWillUpdate',
      value: function componentWillUpdate() {
        this.isOpen = modalStore.isOpen(this.id);

        this.onEventBeforeOpen();
        if (!this.isOpen) this.onEventDoneClose();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        var ele = doc.getElementById(this.id);
        if (ele && !this.isOpen) reactModal.removeChild(this.ele);
        if (!ele && this.isOpen) reactModal.appendChild(this.ele);

        this.onEventAfterOpen();

        if (this.props.isEscClose) {
          window.removeEventListener('keydown', this.onEscClose);
          this.isKeydownEventListener = false;

          if (this.isOpen && modalStore.current === this.id) {
            window.addEventListener('keydown', this.onEscClose);
            this.isKeydownEventListener = true;
          }
        }

        this.onResizeEventListener();
        window.removeEventListener('resize', this.onResizeEventListener);
        this.isResizeEventListener = false;

        if (modalStore.current === this.id) {
          window.addEventListener('resize', this.onResizeEventListener);
          this.isResizeEventListener = true;
        }

        if (!this.isScrollBarDisable) (0, _utils.scrollbarHidden)(modalStore);

        if (!this.isOpen) {
          this.beforeOpenOnce = false;
          this.afterOpenOnce = false;
        } else {
          this.doneCloseOnce = false;
        }

        if (this.id === modalStore.current && this.props.isAutoFocus) this.modal.onFocus();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.props.isEscClose) window.removeEventListener('keydown', this.onEscClose);
        window.removeEventListener('resize', this.onResizeEventListener);
        var ele = doc.getElementById(this.id);
        if (ele) reactModal.removeChild(this.ele);
      }
    }, {
      key: 'onRequestClose',
      value: function onRequestClose() {
        if (typeof this.props.onClose === 'function') {
          this.props.onClose(this.id);
        } else {
          modalStore.close(this.id);
        }
        this.isOpen = false;
      }
    }, {
      key: 'onEscClose',
      value: function onEscClose(e) {
        if (e.keyCode === 27) {
          this.onRequestClose();
        }
      }
    }, {
      key: 'onEventBeforeOpen',
      value: function onEventBeforeOpen() {
        if (this.isOpen && !this.beforeOpenOnce && typeof this.props.beforeOpen === 'function') {
          this.props.beforeOpen();
          this.beforeOpenOnce = true;
        }
      }
    }, {
      key: 'onEventAfterOpen',
      value: function onEventAfterOpen() {
        if (this.isOpen && !this.afterOpenOnce && typeof this.props.afterOpen === 'function') {
          this.props.afterOpen();
          this.afterOpenOnce = true;
        }
      }
    }, {
      key: 'onEventDoneClose',
      value: function onEventDoneClose() {
        if (!this.doneCloseOnce && typeof this.props.doneClose === 'function') {
          this.props.doneClose();
          this.doneCloseOnce = true;
        }
      }
    }, {
      key: 'onResizeEventListener',
      value: function onResizeEventListener() {
        // resize 이벤트를 통해 모달의 세로 정렬을 조작한다.
        // 모달 높이가 브라우저보다 클 경우 중앙 정렬을 하지 않는 다.
        if (!this.isCenter || !this.modal || !this.overlay) return;
        var modal = this.modal.getDOMRootNode();
        var overlay = this.overlay.getDOMRootNode();
        if (modal) {
          var windowHeight = window.innerHeight;
          if (windowHeight < modal.offsetHeight) {
            overlay.classList.remove('modal-overlay-alignCenter');
          } else {
            overlay.classList.add('modal-overlay-alignCenter');
          }
        }
      }
    }, {
      key: 'onOpen',
      value: function onOpen() {
        modalStore.open(this.id);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        if (!modalStore.isOpen(this.id)) return null;

        var _props = this.props,
            isCenter = _props.isCenter,
            overlayClassName = _props.overlayClassName,
            overlayStyle = _props.overlayStyle,
            props = _objectWithoutProperties(_props, ['isCenter', 'overlayClassName', 'overlayStyle']);

        return _reactDom2.default.createPortal(_react2.default.createElement(
          _Overlay2.default,
          {
            ref: function ref(node) {
              _this2.overlay = node;
            },
            zIndex: this.props.zIndex,
            isCenter: this.isCenter,
            overlayClassName: overlayClassName,
            overlayStyle: overlayStyle,
            onRequestClose: this.props.isOverlayClose ? this.onRequestClose : null
          },
          _react2.default.createElement(Component, _extends({}, props, {
            ref: function ref(node) {
              _this2.modal = node;
            },
            onRequestClose: this.onRequestClose
          }))
        ), this.ele);
      }
    }]);

    return Modal;
  }(_react2.default.Component));

  return Modal;
};

var open = exports.open = function open(id) {
  modalStore.open(id);
};
var close = exports.close = function close(id) {
  modalStore.close(id);
};
exports.default = withModal;

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__73__;

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__74__;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mobx = __webpack_require__(83);

var _properties = __webpack_require__(84);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModalStore = function () {
  function ModalStore() {
    _classCallCheck(this, ModalStore);

    this.modal = [];
  }

  _createClass(ModalStore, [{
    key: 'isOpen',
    value: function isOpen(id) {
      return this.modal.indexOf(id) > -1;
    }
  }, {
    key: 'open',
    value: function open(id) {
      var modal = this.modal.slice();
      if (modal.indexOf(id) === -1) {
        modal.unshift(id);

        if (modal.length > _properties.defaultProperties.modalLimit) {
          modal = modal.slice(0, _properties.defaultProperties.modalLimit);
        }
        this.modal.replace(modal);
      }
    }
  }, {
    key: 'close',
    value: function close(id) {
      var modal = this.modal.slice();
      var index = modal.indexOf(id);
      if (index > -1) {
        modal.splice(index, 1);
        this.modal.replace(modal);
      }
    }
  }, {
    key: 'current',
    get: function get() {
      var firstIndex = 0;
      if (this.modal.length === firstIndex) return null;
      return this.modal[firstIndex];
    }
  }]);

  return ModalStore;
}();

exports.default = (0, _mobx.decorate)(ModalStore, {
  modal: _mobx.observable,
  current: _mobx.computed,
  open: _mobx.action,
  close: _mobx.action
});

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__83__;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultProps = exports.setDefaultProps = exports.defaultProperties = exports.defaultPropTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(85);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultPropTypes = {
  children: _propTypes2.default.node,
  id: _propTypes2.default.string,

  beforeOpen: _propTypes2.default.func,
  afterOpen: _propTypes2.default.func,
  doneClose: _propTypes2.default.func,

  isOpen: _propTypes2.default.bool,
  onClose: _propTypes2.default.func,

  zIndex: _propTypes2.default.number,

  overlayClassName: _propTypes2.default.string,
  overlayStyle: _propTypes2.default.shape({}),
  isOverlayClose: _propTypes2.default.bool,

  onRequestClose: _propTypes2.default.func,
  isCloseButton: _propTypes2.default.bool,
  isEscClose: _propTypes2.default.bool,
  isAutoFocus: _propTypes2.default.bool,

  className: _propTypes2.default.string,
  style: _propTypes2.default.shape(),
  containerClassName: _propTypes2.default.string,
  containerStyle: _propTypes2.default.shape({}),
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),

  isCenter: _propTypes2.default.bool,
  left: _propTypes2.default.number,
  top: _propTypes2.default.number,
  right: _propTypes2.default.number,
  bottom: _propTypes2.default.number
};

var defaultProperties = {
  children: null,
  id: null,

  beforeOpen: null,
  afterOpen: null,
  doneClose: null,

  isOpen: false,
  onClose: null,

  zIndex: 3000,

  overlayClassName: null,
  overlayStyle: null,
  isOverlayClose: true,

  onRequestClose: null,
  isCloseButton: true,
  isEscClose: true,
  isAutoFocus: true,

  className: null,
  style: {},
  containerClassName: null,
  containerStyle: {},
  width: '50%',
  height: null,

  isCenter: true,
  left: null,
  top: null,
  right: null,
  bottom: null,

  modalLimit: 20
};

var defaultProps = _extends({}, defaultProperties);
var setDefaultProps = function setDefaultProps(props) {
  defaultProps = _extends(defaultProps, props);
};

var getDefaultProps = function getDefaultProps() {
  return defaultProps;
};

exports.defaultPropTypes = defaultPropTypes;
exports.defaultProperties = defaultProperties;
exports.setDefaultProps = setDefaultProps;
exports.getDefaultProps = getDefaultProps;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(86)();
}


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(87);
var invariant = __webpack_require__(88);
var ReactPropTypesSecret = __webpack_require__(89);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getBrowser = function getBrowser() {
  var userAgent = navigator.userAgent.toLowerCase();

  var result = {
    text: null,
    firefox: false,
    msie: false,
    edge: false,
    chrome: false,
    safari: false
  };

  if (userAgent.indexOf('firefox') > -1) {
    result.firefox = true;
    result.text = 'firefox';
  } else if (userAgent.indexOf('msie') > -1) {
    result.msie = true;
    result.text = 'msie';
  } else if (userAgent.indexOf('ie') > -1) {
    result.msie = true;
    result.text = 'msie';
  } else if (userAgent.indexOf('edge') > -1) {
    result.edge = true;
    result.text = 'edge';
  } else if (userAgent.indexOf('trident') > -1) {
    result.msie = true;
    result.text = 'msie';
  } else if (userAgent.indexOf('chrome') > -1) {
    result.chrome = true;
    result.text = 'chrome';
  } else if (userAgent.indexOf('safari') > -1) {
    result.safari = true;
    result.text = 'safari';
  }
  return result;
};

var doc = document;
var docBody = doc.body;

// 스크롤바 활성화 여부 판단
var isScrollBarDisable = function isScrollBarDisable() {
  return doc.body.clientHeight < window.innerHeight;
};

// 윈도우 스크롤바의 넓이를 계산한다. 크로스 브라우저를 지원한다.
var getScrollBarWidth = function getScrollBarWidth() {
  var inner = doc.createElement('p');
  inner.style.width = '100%';
  inner.style.height = '100%';

  var outer = doc.createElement('div');
  outer.style.position = 'absolute';
  outer.style.top = '0px';
  outer.style.left = '0px';
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.height = '100px';
  outer.style.overflow = 'hidden';
  outer.appendChild(inner);

  docBody.appendChild(outer);

  var w1 = inner.offsetWidth;
  var h1 = inner.offsetHeight;
  outer.style.overflow = 'scroll';
  var w2 = inner.offsetWidth;
  var h2 = inner.offsetHeight;
  if (w1 === w2 && outer.clientWidth) {
    w2 = outer.clientWidth;
  }
  if (h1 === h2 && outer.clientHeight) {
    h2 = outer.clientHeight;
  }

  docBody.removeChild(outer);

  // return [(w1 - w2), (h1 - h2)];
  return w1 - w2;

  // const scrollDiv = doc.createElement('div');
  // scrollDiv.style.visibility = 'hidden';
  // scrollDiv.style.width = '100px';
  // scrollDiv.style.msOverflowStyle = 'scrollbar';
  // doc.body.appendChild(scrollDiv);

  // const widthNoScroll = scrollDiv.offsetWidth;
  // scrollDiv.style.overflow = 'scroll';

  // const scrollDivInner = doc.createElement('div');
  // scrollDivInner.style.width = '100%';
  // scrollDiv.appendChild(scrollDivInner);

  // const widthWithScroll = scrollDivInner.offsetWidth;

  // scrollDiv.parentNode.removeChild(scrollDiv);

  // return widthNoScroll - widthWithScroll;
};

var scrollbarHidden = function scrollbarHidden(syncModal) {
  var body = doc.body;


  var thisBrowser = getBrowser();
  var scrollbarWidth = getScrollBarWidth();

  if (syncModal.modal.length > 0) {
    body.style.overflow = 'hidden';
    if (!thisBrowser.msie) body.style.paddingRight = scrollbarWidth + 'px';
  } else {
    body.style.overflow = '';
    if (!thisBrowser.msie) body.style.paddingRight = '';
  }
};

exports.isScrollBarDisable = isScrollBarDisable;
exports.scrollbarHidden = scrollbarHidden;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(71);

var _react2 = _interopRequireDefault(_react);

var _properties = __webpack_require__(84);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  children: _properties.defaultPropTypes.children.isRequired,
  isCenter: _properties.defaultPropTypes.isCenter.isRequired,
  overlayClassName: _properties.defaultPropTypes.overlayClassName,
  overlayStyle: _properties.defaultPropTypes.overlayStyle,
  zIndex: _properties.defaultPropTypes.zIndex,
  onRequestClose: _properties.defaultPropTypes.onRequestClose
};

var Overlay = function (_React$Component) {
  _inherits(Overlay, _React$Component);

  _createClass(Overlay, null, [{
    key: 'defaultProps',
    get: function get() {
      var defaultProps = (0, _properties.getDefaultProps)();
      return {
        overlayClassName: defaultProps.overlayClassName,
        overlayStyle: defaultProps.overlayStyle,
        zIndex: defaultProps.zIndex,
        onRequestClose: defaultProps.onRequestClose
      };
    }
  }]);

  function Overlay(props) {
    _classCallCheck(this, Overlay);

    var _this = _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call(this, props));

    _this.overlay = undefined;

    _this.className = props.isCenter ? 'modal-overlay modal-overlay-center modal-overlay-alignCenter' : 'modal-overlay';
    _this.className = props.overlayClassName ? _this.className + ' ' + props.overlayClassName : _this.className;

    _this.style = props.zIndex ? { zIndex: props.zIndex } : {};
    _this.style = props.overlayStyle ? _extends({}, _this.style, props.overlayStyle) : _this.style;

    _this.onClose = _this.onClose.bind(_this);
    return _this;
  }

  _createClass(Overlay, [{
    key: 'onClose',
    value: function onClose() {
      if (typeof this.props.onRequestClose === 'function') {
        this.props.onRequestClose();
      }
    }
  }, {
    key: 'getDOMRootNode',
    value: function getDOMRootNode() {
      return this.overlay;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(node) {
            _this2.overlay = node;
          },
          className: this.className,
          style: this.style,
          role: 'button',
          tabIndex: '0',
          onClick: this.onClose
        },
        this.props.children
      );
    }
  }]);

  return Overlay;
}(_react2.default.Component);

Overlay.propTypes = propTypes;

exports.default = Overlay;

/***/ })
/******/ ]);
});