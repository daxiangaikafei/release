webpackJsonp([4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(519), __esModule: true };

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(509);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(508);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(162);

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

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(162);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = routerWarning;
	exports._resetWarned = _resetWarned;

	var _warning = __webpack_require__(309);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var warned = {};

	function routerWarning(falseToWarn, message) {
	  // Only issue deprecation warnings once.
	  if (message.indexOf('deprecated') !== -1) {
	    if (warned[message]) {
	      return;
	    }

	    warned[message] = true;
	  }

	  message = '[react-router] ' + message;

	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
	}

	function _resetWarned() {
	  warned = {};
	}

/***/ },
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
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(42);

	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}

	module.exports = toObject;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(158),
	    isLength = __webpack_require__(98),
	    isObjectLike = __webpack_require__(99);

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};

	module.exports = isArray;


/***/ },
/* 51 */,
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isValidChild(object) {
	  return object == null || _react2.default.isValidElement(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}

	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);

	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);

	    if (childRoutes.length) route.childRoutes = childRoutes;

	    delete route.children;
	  }

	  return route;
	}

	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router'
	 *
	 *   const routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   )
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */
	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];

	  _react2.default.Children.forEach(children, function (element) {
	    if (_react2.default.isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);

	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });

	  return routes;
	}

	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */
	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }

	  return routes;
	}

/***/ },
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// Convenience main entrypoint if you are running with destructuring support:
	//
	//   import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
	//
	// You can also require just the component(s) you're using:
	//
	//   var VelocityComponent = require('velocity-react/velocity-component');
	//
	// Note that if you want to use UI Pack you will need to require 'velocity' and
	// 'velocity.ui' at a top level in your app:
	//
	//   require('velocity');
	//   require('velocity-animate/velocity.ui');

	module.exports = {
	  VelocityComponent: __webpack_require__(1158),
	  VelocityTransitionGroup: __webpack_require__(1160),
	  velocityHelpers: __webpack_require__(1159),
	};


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _promise = __webpack_require__(274);

	var _promise2 = _interopRequireDefault(_promise);

	var _stringify = __webpack_require__(272);

	var _stringify2 = _interopRequireDefault(_stringify);

	exports.fetchPosts = fetchPosts;

	__webpack_require__(1162);

	var _size = __webpack_require__(350);

	var _size2 = _interopRequireDefault(_size);

	var _each = __webpack_require__(342);

	var _each2 = _interopRequireDefault(_each);

	var _assignIn = __webpack_require__(731);

	var _assignIn2 = _interopRequireDefault(_assignIn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function fetchPosts(url, param) {
	    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "POST";
	    var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	    var repType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "json";
	    var fetchNum = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;


	    //debugger;
	    //param.userId = 30000654;
	    if (type.toLocaleUpperCase() === "GET" && (0, _size2.default)(param) > 0 && url.indexOf("?") < 0) {
	        url += "?" + toExcString(param);
	    }
	    headers = (0, _assignIn2.default)({}, {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json',
	        "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
	        "Response-Content-Type": 'application/json'
	    });
	    // debugger;
	    headers = (0, _assignIn2.default)({}, headers, { token: "0579171e05cb5e3d221aeefd8b470106" });
	    url = url.replace(/\/api(?!\/qbii)/ig, "/api/qbii");

	    return fetch(url, {
	        method: type.toLocaleUpperCase(),
	        headers: headers,
	        credentials: 'same-origin',
	        //credentials: 'same-origin',
	        body: type.toLocaleUpperCase() === "GET" ? undefined : repType == "json" ? (0, _stringify2.default)(param) : param
	    }).then(function (res) {
	        var result;
	        try {
	            result = res.json();
	        } catch (errorMsg) {
	            return fetchError(errorMsg);
	        }
	        return result;
	    }).then(function (data) {

	        if (data && data.code === 200 && fetchNum < 30) {
	            QBFK.Business.login();
	            return fetchSetTimeout().then(function () {
	                return fetchPosts(url, param, type, headers, repType, fetchNum + 1);
	            });
	        }
	        return data;
	    });
	}

	//可配的
	// 可以引入fetch来进行Ajax
	var fetchSetTimeout = function fetchSetTimeout() {
	    var fetchSetTimeout = new _promise2.default(function (resolve, reject) {
	        //做一些异步操作
	        setTimeout(function () {
	            //console.log('执行完成');
	            resolve('随便什么数据');
	        }, 500);
	    });
	    return fetchSetTimeout;
	};

	var fetchError = function fetchError(error) {
	    var fetchSetTimeout = new _promise2.default(function (resolve, reject) {
	        //console.log('执行完成');
	        reject(error);
	    });
	    return fetchSetTimeout;
	};

	var toExcString = function toExcString(array) {
	    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { ":": "=", ",": "&" };


	    var result = "";
	    for (var temp in array) {
	        result += temp + '=' + array[temp] + "&";
	    }
	    return result.substring(-1, result.length - 1);
	};

/***/ },
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
	exports.falsy = falsy;

	var _react = __webpack_require__(2);

	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var arrayOf = _react.PropTypes.arrayOf;
	var oneOfType = _react.PropTypes.oneOfType;
	var element = _react.PropTypes.element;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;
	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}

	var history = exports.history = shape({
	  listen: func.isRequired,
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired
	});

	var component = exports.component = oneOfType([func, string]);
	var components = exports.components = oneOfType([component, object]);
	var route = exports.route = oneOfType([object, element]);
	var routes = exports.routes = oneOfType([route, arrayOf(route)]);

/***/ },
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(158),
	    isArrayLike = __webpack_require__(114),
	    isObject = __webpack_require__(42),
	    shimKeys = __webpack_require__(1149);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};

	module.exports = keys;


/***/ },
/* 79 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setCookie = setCookie;
	exports.getCookie = getCookie;
	exports.delCookie = delCookie;
	exports.priceFormat = priceFormat;
	exports.tagStrFormat = tagStrFormat;
	exports.createCORSRequest = createCORSRequest;
	function setCookie(name, value) {
	  var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "cookie";

	  if (mode == "cookie") {
	    var Days = 30;
	    var exp = new Date();
	    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
	    return true;
	  } else if (mode == "storage") {
	    var _localStorage = window.localStorage;
	    if (_localStorage) {
	      _localStorage.setItem(name, value);
	      return true;
	    }
	    return false;
	  }
	}

	function getCookie(name) {
	  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "cookie";

	  if (mode == "cookie") {
	    var arr,
	        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	    if (arr = document.cookie.match(reg)) {
	      return unescape(arr[2]);
	    } else {
	      return null;
	    }
	  } else if (mode == "storage") {
	    var _localStorage = window.localStorage;
	    if (_localStorage) {
	      return _localStorage.getItem(name);
	    } else return null;
	  }
	}

	function delCookie(name) {
	  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "cookie";

	  if (mode == "cookie") {
	    var exp = new Date();
	    exp.setTime(exp.getTime() - 1);
	    var cval = getCookie(name);
	    if (cval != null) {
	      document.cookie = name + '=' + cval + ";expires=" + exp.toGMTString();
	    }
	  } else if (mode == "storage") {
	    var _localStorage = window.localStorage;
	    if (_localStorage) {
	      _localStorage.removeItem(name);
	    }
	  }
	}

	function priceFormat(price, n) {
	  n = n >= 0 && n <= 20 ? n : 2;
	  var isMinus = price < 0;
	  price = isMinus ? 0 - price : price;
	  price = parseFloat((price + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
	  var l = price.split(".")[0].split("").reverse(),
	      r = price.split(".")[1];
	  var t = "";
	  for (var i = 0; i < l.length; i++) {
	    t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? "," : "");
	  }
	  if (n == 0) {
	    return (isMinus ? '-' : '') + t.split("").reverse().join("");
	  } else {
	    return (isMinus ? '-' : '') + t.split("").reverse().join("") + "." + r;
	  }
	}

	function tagStrFormat(str, num) {
	  return (/(\d+)(\D+)/ig.exec(str)[num]
	  );
	}

	function createCORSRequest(method, url) {
	  var cors_api_host = 'finiyang.com:8080';
	  var cors_api_url = 'http://' + cors_api_host + '/';
	  var slice = [].slice;
	  var origin = window.location.protocol + '//' + window.location.host;
	  var open = XMLHttpRequest.prototype.open;
	  XMLHttpRequest.prototype.open = function () {
	    var args = slice.call(arguments);
	    var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
	    if (targetOrigin && targetOrigin[0].toLowerCase() !== origin && targetOrigin[1] !== cors_api_host) {
	      args[1] = cors_api_url + args[1];
	    }
	    return open.apply(this, args);
	  };
	  var xhr = new XMLHttpRequest();
	  if ("withCredentials" in xhr) {
	    xhr.open(method, url, true);
	  } else {
	    xhr = null;
	  }
	  return xhr;
	}

/***/ },
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;

	var _invariant = __webpack_require__(25);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];

	  var match = void 0,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
	    }

	    if (match[1]) {
	      regexpSource += '([^/]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '**') {
	      regexpSource += '(.*)';
	      paramNames.push('splat');
	    } else if (match[0] === '*') {
	      regexpSource += '(.*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }

	    tokens.push(match[0]);

	    lastIndex = matcher.lastIndex;
	  }

	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
	  }

	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}

	var CompiledPatternsCache = Object.create(null);

	function compilePattern(pattern) {
	  if (!CompiledPatternsCache[pattern]) CompiledPatternsCache[pattern] = _compilePattern(pattern);

	  return CompiledPatternsCache[pattern];
	}

	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 * - **             Consumes (greedy) all characters up to the next character
	 *                  in the pattern, or to the end of the URL if there is none
	 *
	 *  The function calls callback(error, matched) when finished.
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */
	function matchPattern(pattern, pathname) {
	  // Ensure pattern starts with leading slash for consistency with pathname.
	  if (pattern.charAt(0) !== '/') {
	    pattern = '/' + pattern;
	  }

	  var _compilePattern2 = compilePattern(pattern);

	  var regexpSource = _compilePattern2.regexpSource;
	  var paramNames = _compilePattern2.paramNames;
	  var tokens = _compilePattern2.tokens;


	  if (pattern.charAt(pattern.length - 1) !== '/') {
	    regexpSource += '/?'; // Allow optional path separator at end.
	  }

	  // Special-case patterns like '*' for catch-all routes.
	  if (tokens[tokens.length - 1] === '*') {
	    regexpSource += '$';
	  }

	  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));
	  if (match == null) {
	    return null;
	  }

	  var matchedPath = match[0];
	  var remainingPathname = pathname.substr(matchedPath.length);

	  if (remainingPathname) {
	    // Require that the match ends at a path separator, if we didn't match
	    // the full path, so any remaining pathname is a new path segment.
	    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
	      return null;
	    }

	    // If there is a remaining pathname, treat the path separator as part of
	    // the remaining pathname for properly continuing the match.
	    remainingPathname = '/' + remainingPathname;
	  }

	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: match.slice(1).map(function (v) {
	      return v && decodeURIComponent(v);
	    })
	  };
	}

	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}

	function getParams(pattern, pathname) {
	  var match = matchPattern(pattern, pathname);
	  if (!match) {
	    return null;
	  }

	  var paramNames = match.paramNames;
	  var paramValues = match.paramValues;

	  var params = {};

	  paramNames.forEach(function (paramName, index) {
	    params[paramName] = paramValues[index];
	  });

	  return params;
	}

	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */
	function formatPattern(pattern, params) {
	  params = params || {};

	  var _compilePattern3 = compilePattern(pattern);

	  var tokens = _compilePattern3.tokens;

	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0;

	  var token = void 0,
	      paramName = void 0,
	      paramValue = void 0;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];

	    if (token === '*' || token === '**') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue != null) pathname += encodeURI(paramValue);
	    } else if (token === '(') {
	      parenCount += 1;
	    } else if (token === ')') {
	      parenCount -= 1;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];

	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue != null) pathname += encodeURIComponent(paramValue);
	    } else {
	      pathname += token;
	    }
	  }

	  return pathname.replace(/\/+/g, '/');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 85 */,
/* 86 */,
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isFunction2 = __webpack_require__(17);

	var _isFunction3 = _interopRequireDefault(_isFunction2);

	var _extendReactClass = __webpack_require__(751);

	var _extendReactClass2 = _interopRequireDefault(_extendReactClass);

	var _wrapStatelessFunction = __webpack_require__(756);

	var _wrapStatelessFunction2 = _interopRequireDefault(_wrapStatelessFunction);

	var _makeConfiguration = __webpack_require__(754);

	var _makeConfiguration2 = _interopRequireDefault(_makeConfiguration);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Determines if the given object has the signature of a class that inherits React.Component.
	 */


	/**
	 * @see https://github.com/gajus/react-css-modules#options
	 */
	var isReactComponent = function isReactComponent(maybeReactComponent) {
	  return 'prototype' in maybeReactComponent && (0, _isFunction3.default)(maybeReactComponent.prototype.render);
	};

	/**
	 * When used as a function.
	 */
	var functionConstructor = function functionConstructor(Component, defaultStyles, options) {
	  var decoratedClass = void 0;

	  var configuration = (0, _makeConfiguration2.default)(options);

	  if (isReactComponent(Component)) {
	    decoratedClass = (0, _extendReactClass2.default)(Component, defaultStyles, configuration);
	  } else {
	    decoratedClass = (0, _wrapStatelessFunction2.default)(Component, defaultStyles, configuration);
	  }

	  if (Component.displayName) {
	    decoratedClass.displayName = Component.displayName;
	  } else {
	    decoratedClass.displayName = Component.name;
	  }

	  return decoratedClass;
	};

	/**
	 * When used as a ES7 decorator.
	 */
	var decoratorConstructor = function decoratorConstructor(defaultStyles, options) {
	  return function (Component) {
	    return functionConstructor(Component, defaultStyles, options);
	  };
	};

	exports.default = function () {
	  if ((0, _isFunction3.default)(arguments.length <= 0 ? undefined : arguments[0])) {
	    return functionConstructor(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
	  } else {
	    return decoratorConstructor(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]);
	  }
	};

	module.exports = exports['default'];

/***/ },
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 99 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(472);

	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}

	module.exports = bindCallback;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(466),
	    isLength = __webpack_require__(98);

	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}

	module.exports = isArrayLike;


/***/ },
/* 115 */,
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _navbar = __webpack_require__(479);

	Object.defineProperty(exports, 'NavBar', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_navbar).default;
	  }
	});

	var _dialog = __webpack_require__(477);

	Object.defineProperty(exports, 'Dialog', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_dialog).default;
	  }
	});

	var _icon = __webpack_require__(478);

	Object.defineProperty(exports, 'Icon', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_icon).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(161);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(25);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _deprecateObjectProperties = __webpack_require__(124);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	var _getRouteParams = __webpack_require__(592);

	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

	var _RouteUtils = __webpack_require__(52);

	var _routerWarning = __webpack_require__(20);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var array = _React$PropTypes.array;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <RouterContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */

	var RouterContext = _react2.default.createClass({
	  displayName: 'RouterContext',


	  propTypes: {
	    history: object,
	    router: object.isRequired,
	    location: object.isRequired,
	    routes: array.isRequired,
	    params: object.isRequired,
	    components: array.isRequired,
	    createElement: func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      createElement: _react2.default.createElement
	    };
	  },


	  childContextTypes: {
	    history: object,
	    location: object.isRequired,
	    router: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    var _props = this.props;
	    var router = _props.router;
	    var history = _props.history;
	    var location = _props.location;

	    if (!router) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`<RouterContext>` expects a `router` rather than a `history`') : void 0;

	      router = _extends({}, history, {
	        setRouteLeaveHook: history.listenBeforeLeavingRoute
	      });
	      delete router.listenBeforeLeavingRoute;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      location = (0, _deprecateObjectProperties2.default)(location, '`context.location` is deprecated, please use a route component\'s `props.location` instead. http://tiny.cc/router-accessinglocation');
	    }

	    return { history: history, location: location, router: router };
	  },
	  createElement: function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  },
	  render: function render() {
	    var _this = this;

	    var _props2 = this.props;
	    var history = _props2.history;
	    var location = _props2.location;
	    var routes = _props2.routes;
	    var params = _props2.params;
	    var components = _props2.components;

	    var element = null;

	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.

	        var route = routes[index];
	        var routeParams = (0, _getRouteParams2.default)(route, params);
	        var props = {
	          history: history,
	          location: location,
	          params: params,
	          route: route,
	          routeParams: routeParams,
	          routes: routes
	        };

	        if ((0, _RouteUtils.isReactChildren)(element)) {
	          props.children = element;
	        } else if (element) {
	          for (var prop in element) {
	            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
	          }
	        }

	        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object') {
	          var elements = {};

	          for (var key in components) {
	            if (Object.prototype.hasOwnProperty.call(components, key)) {
	              // Pass through the key as a prop to createElement to allow
	              // custom createElement functions to know which named component
	              // they're rendering, for e.g. matching up to fetched data.
	              elements[key] = _this.createElement(components[key], _extends({
	                key: key }, props));
	            }
	          }

	          return elements;
	        }

	        return _this.createElement(components, props);
	      }, element);
	    }

	    !(element === null || element === false || _react2.default.isValidElement(element)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The root route must render a single element') : (0, _invariant2.default)(false) : void 0;

	    return element;
	  }
	});

	exports.default = RouterContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.canUseMembrane = undefined;

	var _routerWarning = __webpack_require__(20);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canUseMembrane = exports.canUseMembrane = false;

	// No-op by default.
	var deprecateObjectProperties = function deprecateObjectProperties(object) {
	  return object;
	};

	if (process.env.NODE_ENV !== 'production') {
	  try {
	    if (Object.defineProperty({}, 'x', {
	      get: function get() {
	        return true;
	      }
	    }).x) {
	      exports.canUseMembrane = canUseMembrane = true;
	    }
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */

	  if (canUseMembrane) {
	    deprecateObjectProperties = function deprecateObjectProperties(object, message) {
	      // Wrap the deprecated object in a membrane to warn on property access.
	      var membrane = {};

	      var _loop = function _loop(prop) {
	        if (!Object.prototype.hasOwnProperty.call(object, prop)) {
	          return 'continue';
	        }

	        if (typeof object[prop] === 'function') {
	          // Can't use fat arrow here because of use of arguments below.
	          membrane[prop] = function () {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	            return object[prop].apply(object, arguments);
	          };
	          return 'continue';
	        }

	        // These properties are non-enumerable to prevent React dev tools from
	        // seeing them and causing spurious warnings when accessing them. In
	        // principle this could be done with a proxy, but support for the
	        // ownKeys trap on proxies is not universal, even among browsers that
	        // otherwise support proxies.
	        Object.defineProperty(membrane, prop, {
	          get: function get() {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	            return object[prop];
	          }
	        });
	      };

	      for (var prop in object) {
	        var _ret = _loop(prop);

	        if (_ret === 'continue') continue;
	      }

	      return membrane;
	    };
	  }
	}

	exports.default = deprecateObjectProperties;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(1151);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _defineProperty2 = __webpack_require__(117);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(23);

	var ReactDOM = _interopRequireWildcard(_reactDom);

	var _help = __webpack_require__(475);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Swipe = function (_Component) {
	    (0, _inherits3.default)(Swipe, _Component);

	    function Swipe(props) {
	        (0, _classCallCheck3.default)(this, Swipe);

	        var _this2 = (0, _possibleConstructorReturn3.default)(this, (Swipe.__proto__ || (0, _getPrototypeOf2.default)(Swipe)).call(this, props));

	        _this2.state = {
	            value: props.value,
	            isShowLoad: true
	        };

	        _this2.scrollInit = _this2.scrollInit.bind(_this2);
	        //this.scrollEnd = this.scrollEnd.bind(this);
	        //this.upFn = this.upFn.bind(this);
	        //this.handleBlur = this.handleBlur.bind(this);
	        return _this2;
	    }

	    (0, _createClass3.default)(Swipe, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var _this = this;
	            _this.AlloyTouch = false;
	            __webpack_require__.e/* nsure */(3, function () {
	                _this.AlloyTouch = __webpack_require__(268);
	            });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {

	            if (nextProps.isShowLoad !== undefined && nextProps.isShowLoad !== this.state.isShowLoad) {
	                this.setState({
	                    isShowLoad: nextProps.isShowLoad
	                });
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {
	            /* if(this.AlloyTouch&&prevState.isShowLoad!==this.state.isShowLoad){
	                 //console.log("掉用这里？")
	                 this.scrollInit();
	             }*/

	            var _props = this.props,
	                stopPro = _props.stopPro,
	                property = _props.property,
	                width = _props.width,
	                min = _props.min,
	                max = _props.max,
	                step = _props.step,
	                findScroller = _props.findScroller,
	                vertical = _props.vertical,
	                findDis = _props.findDis,
	                touchMove = _props.touchMove;

	            if (min === "auto" && this.alloyTouch && vertical === true && property === "translateY") {
	                // debugger;
	                var target = ReactDOM.findDOMNode(this.refs.swipe);
	                var dom = ReactDOM.findDOMNode(this.refs.touch); //offsetTop
	                var length = -(target.clientHeight - dom.clientHeight);
	                this.alloyTouch.min = length > 0 ? 0 : length;
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this = this;
	            if (_this.AlloyTouch) {
	                _this.scrollInit();
	            } else {
	                __webpack_require__.e/* nsure */(3/* duplicate */, function () {
	                    _this.AlloyTouch = __webpack_require__(268);
	                    _this.scrollInit();
	                });
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            //debugger
	            this.alloyTouch && this.alloyTouch.destory();
	        }
	    }, {
	        key: 'scrollInit',
	        value: function scrollInit() {
	            var _ref;

	            var dom = ReactDOM.findDOMNode(this.refs.touch); //offsetTop
	            var target = ReactDOM.findDOMNode(this.refs.swipe);
	            var _props2 = this.props,
	                intervals = _props2.intervals,
	                stopPro = _props2.stopPro,
	                property = _props2.property,
	                width = _props2.width,
	                min = _props2.min,
	                max = _props2.max,
	                step = _props2.step,
	                findScroller = _props2.findScroller,
	                vertical = _props2.vertical,
	                findDis = _props2.findDis,
	                touchMove = _props2.touchMove;

	            var prevTarget = false;
	            //let $ = this.$;

	            // if(findDis!==false){
	            //     let dis = $(findDis,$(dom)).eq(0).width();
	            //     min = -dis;
	            //     step = dis;
	            // }

	            //console.log("dom",dom);
	            if (min === "auto") {
	                min = -1000;
	                min = -((vertical === false ? target.offsetWidth : target.offsetHeight) - (vertical === false ? dom.offsetWidth : dom.offsetHeight));
	                console.log(min);
	                min = min > 0 ? 0 : min;
	            }
	            this.alloyTouch = new this.AlloyTouch((_ref = {
	                touch: dom, //反馈触摸的dom
	                target: target,
	                vertical: vertical }, (0, _defineProperty3.default)(_ref, 'target', target), (0, _defineProperty3.default)(_ref, 'property', property), (0, _defineProperty3.default)(_ref, 'sensitivity', 1), (0, _defineProperty3.default)(_ref, 'factor', 1), (0, _defineProperty3.default)(_ref, 'min', min), (0, _defineProperty3.default)(_ref, 'max', max), (0, _defineProperty3.default)(_ref, 'step', step), (0, _defineProperty3.default)(_ref, 'spring', true), (0, _defineProperty3.default)(_ref, 'inertia', false), (0, _defineProperty3.default)(_ref, 'intelligentCorrection', true), (0, _defineProperty3.default)(_ref, 'stopPro', stopPro), (0, _defineProperty3.default)(_ref, 'touchStart', function touchStart(value, target) {
	                console.log("heheda ", value);
	            }), (0, _defineProperty3.default)(_ref, 'touchMove', _help._.throttle(function () {
	                touchMove(this, arguments);
	            }, intervals)), _ref));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var onClick = this.props.onClick;

	            return _react2.default.createElement(
	                'div',
	                { className: this.props.className, ref: 'touch', style: this.props.style, onClick: onClick },
	                _react2.default.createElement(
	                    'div',
	                    { ref: 'swipe' },
	                    this.props.children
	                )
	            );
	        }
	    }]);
	    return Swipe;
	}(_react.Component);

	Swipe.defaultProps = {
	    property: "translateX",
	    width: false,
	    min: 0,
	    max: 0,
	    step: 0,
	    vertical: false,
	    findScroller: false,
	    target: "",
	    className: "",
	    findDis: false,
	    stopPro: true,
	    intervals: 300, //间隔时间
	    touchMove: function touchMove(x) {
	        //console.error("sssssss",this,x)
	    },
	    onClick: function onClick() {}

	};

	module.exports = Swipe;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(23);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _ui = __webpack_require__(116);

	var _velocityReact = __webpack_require__(59);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Area = function (_Component) {
	    (0, _inherits3.default)(Area, _Component);

	    function Area(props) {
	        (0, _classCallCheck3.default)(this, Area);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (Area.__proto__ || (0, _getPrototypeOf2.default)(Area)).call(this, props));

	        _this.state = {
	            shrink: props.isClose,
	            "anBefore": {
	                duration: 300,
	                animation: {
	                    rotateZ: 0
	                }
	            },
	            "anAfter": {
	                duration: 300,
	                animation: {
	                    rotateZ: 90
	                }
	            }
	        };
	        _this.handClick = _this.handClick.bind(_this);
	        return _this;
	    }

	    (0, _createClass3.default)(Area, [{
	        key: 'handClick',
	        value: function handClick() {
	            console.log("hehe");
	            if (this.props.hasIcon === false) {
	                return false;
	            }
	            this.setState({
	                shrink: !this.state.shrink
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                enterAnimation = _props.enterAnimation,
	                leaveAnimation = _props.leaveAnimation;

	            var anProps = this.state.shrink === false ? this.state.anBefore : this.state.anAfter;
	            var _props2 = this.props,
	                title = _props2.title,
	                className = _props2.className,
	                hasIcon = _props2.hasIcon,
	                hasLine = _props2.hasLine;

	            return _react2.default.createElement(
	                'div',
	                { className: "area-info " + className },
	                _react2.default.createElement(
	                    'div',
	                    { onClick: this.handClick, className: "area-info-title" + (hasLine ? " bottom-line" : "") },
	                    _react2.default.createElement(
	                        'span',
	                        null,
	                        title
	                    ),
	                    _react2.default.createElement(
	                        _velocityReact.VelocityComponent,
	                        anProps,
	                        _react2.default.createElement(_ui.Icon, { name: 'arrow-right', color: '#787A88', size: '16', className: hasIcon ? "" : "hide", style: { float: 'right' } })
	                    )
	                ),
	                this.renderAn()
	            );
	        }
	    }, {
	        key: 'renderAn',
	        value: function renderAn() {
	            // let {hasIcon} = this.props;
	            var _props3 = this.props,
	                enterAnimation = _props3.enterAnimation,
	                leaveAnimation = _props3.leaveAnimation;

	            var anProps = this.state.shrink === false ? this.state.anBefore : this.state.anAfter;
	            var _props4 = this.props,
	                title = _props4.title,
	                className = _props4.className,
	                hasIcon = _props4.hasIcon,
	                hasLine = _props4.hasLine;
	            // debugger

	            if (hasIcon) {
	                return _react2.default.createElement(
	                    _velocityReact.VelocityTransitionGroup,
	                    { enter: enterAnimation, leave: leaveAnimation },
	                    this.state.shrink === false ? this.props.children : null
	                );
	            } else {
	                return this.props.children;
	            }
	        }
	    }]);
	    return Area;
	}(_react.Component);

	Area.defaultProps = {
	    title: "",
	    className: "area-margin",
	    hasIcon: true,
	    hasLine: false,
	    isClose: false,
	    enterAnimation: {
	        duration: 300,
	        animation: "slideDown"
	    },
	    leaveAnimation: {
	        duration: 300,
	        animation: "slideUp"
	    }
	};

	exports.default = Area;
	module.exports = exports['default'];

/***/ },
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;
	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = void 0;

	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(Array.prototype.slice.call(arguments));
	      return;
	    }

	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) {
	      return;
	    }

	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }

	    sync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }

	    sync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }

	  next();
	}

	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];

	  if (length === 0) return callback(null, values);

	  var isDone = false,
	      doneCount = 0;

	  function done(index, error, value) {
	    if (isDone) return;

	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;

	      isDone = ++doneCount === length;

	      if (isDone) callback(null, values);
	    }
	  }

	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.router = exports.routes = exports.route = exports.components = exports.component = exports.location = exports.history = exports.falsy = exports.locationShape = exports.routerShape = undefined;

	var _react = __webpack_require__(2);

	var _deprecateObjectProperties = __webpack_require__(124);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	var _InternalPropTypes = __webpack_require__(65);

	var InternalPropTypes = _interopRequireWildcard(_InternalPropTypes);

	var _routerWarning = __webpack_require__(20);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;
	var routerShape = exports.routerShape = shape({
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired,
	  setRouteLeaveHook: func.isRequired,
	  isActive: func.isRequired
	});

	var locationShape = exports.locationShape = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});

	// Deprecated stuff below:

	var falsy = exports.falsy = InternalPropTypes.falsy;
	var history = exports.history = InternalPropTypes.history;
	var location = exports.location = locationShape;
	var component = exports.component = InternalPropTypes.component;
	var components = exports.components = InternalPropTypes.components;
	var route = exports.route = InternalPropTypes.route;
	var routes = exports.routes = InternalPropTypes.routes;
	var router = exports.router = routerShape;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var deprecatePropType = function deprecatePropType(propType, message) {
	      return function () {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	        return propType.apply(undefined, arguments);
	      };
	    };

	    var deprecateInternalPropType = function deprecateInternalPropType(propType) {
	      return deprecatePropType(propType, 'This prop type is not intended for external use, and was previously exported by mistake. These internal prop types are deprecated for external use, and will be removed in a later version.');
	    };

	    var deprecateRenamedPropType = function deprecateRenamedPropType(propType, name) {
	      return deprecatePropType(propType, 'The `' + name + '` prop type is now exported as `' + name + 'Shape` to avoid name conflicts. This export is deprecated and will be removed in a later version.');
	    };

	    exports.falsy = falsy = deprecateInternalPropType(falsy);
	    exports.history = history = deprecateInternalPropType(history);
	    exports.component = component = deprecateInternalPropType(component);
	    exports.components = components = deprecateInternalPropType(components);
	    exports.route = route = deprecateInternalPropType(route);
	    exports.routes = routes = deprecateInternalPropType(routes);

	    exports.location = location = deprecateRenamedPropType(location, 'location');
	    exports.router = router = deprecateRenamedPropType(router, 'router');
	  })();
	}

	var defaultExport = {
	  falsy: falsy,
	  history: history,
	  location: location,
	  component: component,
	  components: components,
	  route: route,
	  // For some reason, routes was never here.
	  router: router
	};

	if (process.env.NODE_ENV !== 'production') {
	  defaultExport = (0, _deprecateObjectProperties2.default)(defaultExport, 'The default export from `react-router/lib/PropTypes` is deprecated. Please use the named exports instead.');
	}

	exports.default = defaultExport;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = createTransitionManager;

	var _routerWarning = __webpack_require__(20);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _computeChangedRoutes2 = __webpack_require__(590);

	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

	var _TransitionUtils = __webpack_require__(587);

	var _isActive2 = __webpack_require__(594);

	var _isActive3 = _interopRequireDefault(_isActive2);

	var _getComponents = __webpack_require__(591);

	var _getComponents2 = _interopRequireDefault(_getComponents);

	var _matchRoutes = __webpack_require__(596);

	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
	  }return false;
	}

	function createTransitionManager(history, routes) {
	  var state = {};

	  // Signature should be (location, indexOnly), but needs to support (path,
	  // query, indexOnly)
	  function isActive(location) {
	    var indexOnlyOrDeprecatedQuery = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	    var deprecatedIndexOnly = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	    var indexOnly = void 0;
	    if (indexOnlyOrDeprecatedQuery && indexOnlyOrDeprecatedQuery !== true || deprecatedIndexOnly !== null) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`isActive(pathname, query, indexOnly) is deprecated; use `isActive(location, indexOnly)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
	      location = { pathname: location, query: indexOnlyOrDeprecatedQuery };
	      indexOnly = deprecatedIndexOnly || false;
	    } else {
	      location = history.createLocation(location);
	      indexOnly = indexOnlyOrDeprecatedQuery;
	    }

	    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
	  }

	  var partialNextState = void 0;

	  function match(location, callback) {
	    if (partialNextState && partialNextState.location === location) {
	      // Continue from where we left off.
	      finishMatch(partialNextState, callback);
	    } else {
	      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	        if (error) {
	          callback(error);
	        } else if (nextState) {
	          finishMatch(_extends({}, nextState, { location: location }), callback);
	        } else {
	          callback();
	        }
	      });
	    }
	  }

	  function finishMatch(nextState, callback) {
	    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState);

	    var leaveRoutes = _computeChangedRoutes.leaveRoutes;
	    var changeRoutes = _computeChangedRoutes.changeRoutes;
	    var enterRoutes = _computeChangedRoutes.enterRoutes;


	    (0, _TransitionUtils.runLeaveHooks)(leaveRoutes, state);

	    // Tear down confirmation hooks for left routes
	    leaveRoutes.filter(function (route) {
	      return enterRoutes.indexOf(route) === -1;
	    }).forEach(removeListenBeforeHooksForRoute);

	    // change and enter hooks are run in series
	    (0, _TransitionUtils.runChangeHooks)(changeRoutes, state, nextState, function (error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      (0, _TransitionUtils.runEnterHooks)(enterRoutes, nextState, finishEnterHooks);
	    });

	    function finishEnterHooks(error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      // TODO: Fetch components after state is updated.
	      (0, _getComponents2.default)(nextState, function (error, components) {
	        if (error) {
	          callback(error);
	        } else {
	          // TODO: Make match a pure function and have some other API
	          // for "match and update state".
	          callback(null, null, state = _extends({}, nextState, { components: components }));
	        }
	      });
	    }

	    function handleErrorOrRedirect(error, redirectInfo) {
	      if (error) callback(error);else callback(null, redirectInfo);
	    }
	  }

	  var RouteGuid = 1;

	  function getRouteID(route) {
	    var create = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	    return route.__id__ || create && (route.__id__ = RouteGuid++);
	  }

	  var RouteHooks = Object.create(null);

	  function getRouteHooksForRoutes(routes) {
	    return routes.reduce(function (hooks, route) {
	      hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
	      return hooks;
	    }, []);
	  }

	  function transitionHook(location, callback) {
	    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	      if (nextState == null) {
	        // TODO: We didn't actually match anything, but hang
	        // onto error/nextState so we don't have to matchRoutes
	        // again in the listen callback.
	        callback();
	        return;
	      }

	      // Cache some state here so we don't have to
	      // matchRoutes() again in the listen callback.
	      partialNextState = _extends({}, nextState, { location: location });

	      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);

	      var result = void 0;
	      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	        // Passing the location arg here indicates to
	        // the user that this is a transition hook.
	        result = hooks[i](location);
	      }

	      callback(result);
	    });
	  }

	  /* istanbul ignore next: untestable with Karma */
	  function beforeUnloadHook() {
	    // Synchronously check to see if any route hooks want
	    // to prevent the current window/tab from closing.
	    if (state.routes) {
	      var hooks = getRouteHooksForRoutes(state.routes);

	      var message = void 0;
	      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	        // Passing no args indicates to the user that this is a
	        // beforeunload hook. We don't know the next location.
	        message = hooks[i]();
	      }

	      return message;
	    }
	  }

	  var unlistenBefore = void 0,
	      unlistenBeforeUnload = void 0;

	  function removeListenBeforeHooksForRoute(route) {
	    var routeID = getRouteID(route, false);
	    if (!routeID) {
	      return;
	    }

	    delete RouteHooks[routeID];

	    if (!hasAnyProperties(RouteHooks)) {
	      // teardown transition & beforeunload hooks
	      if (unlistenBefore) {
	        unlistenBefore();
	        unlistenBefore = null;
	      }

	      if (unlistenBeforeUnload) {
	        unlistenBeforeUnload();
	        unlistenBeforeUnload = null;
	      }
	    }
	  }

	  /**
	   * Registers the given hook function to run before leaving the given route.
	   *
	   * During a normal transition, the hook function receives the next location
	   * as its only argument and can return either a prompt message (string) to show the user,
	   * to make sure they want to leave the page; or `false`, to prevent the transition.
	   * Any other return value will have no effect.
	   *
	   * During the beforeunload event (in browsers) the hook receives no arguments.
	   * In this case it must return a prompt message to prevent the transition.
	   *
	   * Returns a function that may be used to unbind the listener.
	   */
	  function listenBeforeLeavingRoute(route, hook) {
	    // TODO: Warn if they register for a route that isn't currently
	    // active. They're probably doing something wrong, like re-creating
	    // route objects on every location change.
	    var routeID = getRouteID(route);
	    var hooks = RouteHooks[routeID];

	    if (!hooks) {
	      var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);

	      RouteHooks[routeID] = [hook];

	      if (thereWereNoRouteHooks) {
	        // setup transition & beforeunload hooks
	        unlistenBefore = history.listenBefore(transitionHook);

	        if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	      }
	    } else {
	      if (hooks.indexOf(hook) === -1) {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'adding multiple leave hooks for the same route is deprecated; manage multiple confirmations in your own code instead') : void 0;

	        hooks.push(hook);
	      }
	    }

	    return function () {
	      var hooks = RouteHooks[routeID];

	      if (hooks) {
	        var newHooks = hooks.filter(function (item) {
	          return item !== hook;
	        });

	        if (newHooks.length === 0) {
	          removeListenBeforeHooksForRoute(route);
	        } else {
	          RouteHooks[routeID] = newHooks;
	        }
	      }
	    };
	  }

	  /**
	   * This is the API for stateful environments. As the location
	   * changes, we update state and call the listener. We can also
	   * gracefully handle errors and redirects.
	   */
	  function listen(listener) {
	    // TODO: Only use a single history listener. Otherwise we'll
	    // end up with multiple concurrent calls to match.
	    return history.listen(function (location) {
	      if (state.location === location) {
	        listener(null, state);
	      } else {
	        match(location, function (error, redirectLocation, nextState) {
	          if (error) {
	            listener(error);
	          } else if (redirectLocation) {
	            history.replace(redirectLocation);
	          } else if (nextState) {
	            listener(null, nextState);
	          } else {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : void 0;
	          }
	        });
	      }
	    });
	  }

	  return {
	    isActive: isActive,
	    match: match,
	    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	    listen: listen
	  };
	}

	//export default useRoutes

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"flex":"src-views-Home-___page__flex___2blYF","flex-justify":"src-views-Home-___page__flex-justify___2VWhE","flex-vertical":"src-views-Home-___page__flex-vertical___3hX9_","flex-item-auto":"src-views-Home-___page__flex-item-auto___3qgdx","flex-item-none":"src-views-Home-___page__flex-item-none___3a0TO","flex-align-center":"src-views-Home-___page__flex-align-center___3t_nM","flex-center":"src-views-Home-___page__flex-center___iQ5aq","home-container":"src-views-Home-___page__home-container___3TR9P","top-container":"src-views-Home-___page__top-container___rki9z","dash-container":"src-views-Home-___page__dash-container___2Ci_z","dash":"src-views-Home-___page__dash___pVdjO","top-bg":"src-views-Home-___page__top-bg___3q77q","content":"src-views-Home-___page__content___9sQ3M","nothing":"src-views-Home-___page__nothing___3ipeb","btn-group":"src-views-Home-___page__btn-group___gMpwa","btn":"src-views-Home-___page__btn___3FwFc","asset-container":"src-views-Home-___page__asset-container___3yGFA","item":"src-views-Home-___page__item___1e13-","list-container":"src-views-Home-___page__list-container___2LoyA","banner":"src-views-Home-___page__banner___ZrG_E","corner":"src-views-Home-___page__corner___2ztHz","title":"src-views-Home-___page__title___3Zc1b","user-tag":"src-views-Home-___page__user-tag___1tHkW","icon-item":"src-views-Home-___page__icon-item___cLYoC","icon-arrow":"src-views-Home-___page__icon-arrow___133Yv","active":"src-views-Home-___page__active___zaMr3","tag":"src-views-Home-___page__tag___2IXVV","tag-item":"src-views-Home-___page__tag-item___1HESX","pointer":"src-views-Home-___page__pointer___18Y_3","tag-name":"src-views-Home-___page__tag-name___2tlDB","tag-value":"src-views-Home-___page__tag-value___3v70E","increase":"src-views-Home-___page__increase___1t0sT","count":"src-views-Home-___page__count___3fBSZ","info":"src-views-Home-___page__info___1iHUk","info-title":"src-views-Home-___page__info-title___UUaV8","info-progress":"src-views-Home-___page__info-progress___1McND","progress-container":"src-views-Home-___page__progress-container___4AXvJ","more":"src-views-Home-___page__more___2Ytx8","news-container":"src-views-Home-___page__news-container___xgSfb","name":"src-views-Home-___page__name___3tiQt","icon":"src-views-Home-___page__icon___2wEjh","img":"src-views-Home-___page__img___3lqyQ","item-title":"src-views-Home-___page__item-title___2GiAl","bottom-container":"src-views-Home-___page__bottom-container___1b6F3","cover-container":"src-views-Home-___page__cover-container___2K9hU","txt":"src-views-Home-___page__txt____4LiR","btn-join":"src-views-Home-___page__btn-join___1O7LX","bg-ani":"src-views-Home-___page__bg-ani___X_6pI"};

/***/ },
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// Shim to avoid requiring Velocity in Node environments, since it
	// requires window. Note that this just no-ops the components so
	// that they'll render, rather than doing something clever like
	// statically rendering the end state of any provided animations.
	//
	// TODO(finneganh): Circle back on jsdom to see if we can run full
	// Velocity with it in place. This come up in:
	// https://github.com/twitter-fabric/velocity-react/issues/119
	// but there may have been different loading issues in that case,
	// not a global incompatibility with jsdom.
	if (typeof window === 'undefined' || navigator.userAgent.indexOf("Node.js") !== -1 || navigator.userAgent.indexOf("jsdom") !== -1) {

	  var Velocity = function() {};
	  Velocity.Utilities = {};
	  Velocity.Utilities.removeData = function() {};
	  Velocity.velocityReactServerShim = true;
	  module.exports = Velocity;

	} else {
	  // this is how velocity-ui finds the Velocity instance, so lets make sure we find the right instance
	  var g = (window.jQuery || window.Zepto || window);

	  // require Velocity if it doesn't already exist
	  module.exports = g.Velocity ? g.Velocity : __webpack_require__(1157);

	}


/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(1114),
	    baseEach = __webpack_require__(462),
	    createForEach = __webpack_require__(1140);

	/**
	 * Iterates over elements of `collection` invoking `iteratee` for each element.
	 * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	 * (value, index|key, collection). Iteratee functions may exit iteration early
	 * by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length" property
	 * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
	 * may be used for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @alias each
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @param {*} [thisArg] The `this` binding of `iteratee`.
	 * @returns {Array|Object|string} Returns `collection`.
	 * @example
	 *
	 * _([1, 2]).forEach(function(n) {
	 *   console.log(n);
	 * }).value();
	 * // => logs each value from left to right and returns the array
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
	 *   console.log(n, key);
	 * });
	 * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
	 */
	var forEach = createForEach(arrayEach, baseEach);

	module.exports = forEach;


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(1126),
	    isObject = __webpack_require__(42),
	    isObjectLike = __webpack_require__(99);

	/**
	 * The base implementation of `_.isEqual` without support for `this` binding
	 * `customizer` functions.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	}

	module.exports = baseIsEqual;


/***/ },
/* 265 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	module.exports = isIndex;


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(114),
	    isObjectLike = __webpack_require__(99);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}

	module.exports = isArguments;


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(266),
	    isArray = __webpack_require__(50),
	    isIndex = __webpack_require__(265),
	    isLength = __webpack_require__(98),
	    isObject = __webpack_require__(42);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;

	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keysIn;


/***/ },
/* 268 */,
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(29);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var React = _interopRequireWildcard(_react);

	var _swipe = __webpack_require__(159);

	var _swipe2 = _interopRequireDefault(_swipe);

	var _fetch = __webpack_require__(60);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import * as _ from "lodash";

	var Scroll = function (_React$Component) {
	    (0, _inherits3.default)(Scroll, _React$Component);

	    function Scroll(props) {
	        (0, _classCallCheck3.default)(this, Scroll);

	        var _this2 = (0, _possibleConstructorReturn3.default)(this, (Scroll.__proto__ || (0, _getPrototypeOf2.default)(Scroll)).call(this, props));

	        _this2.state = {
	            items: [],
	            page: 1,
	            isLoading: true,
	            oneHeight: false,
	            isEnd: false
	        };

	        _this2.getData = _this2.getData.bind(_this2);
	        _this2.touchMove = _this2.touchMove.bind(_this2);
	        //this.handClick = this.handClick.bind(this);

	        return _this2;
	    }

	    (0, _createClass3.default)(Scroll, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.getData(1);
	        }
	    }, {
	        key: 'getData',
	        value: function getData(num) {
	            var _props = this.props,
	                pageSize = _props.pageSize,
	                url = _props.url,
	                searchParam = _props.searchParam,
	                analysis_data = _props.analysis_data,
	                pageName = _props.pageName,
	                pageSizeName = _props.pageSizeName;
	            var _state = this.state,
	                page = _state.page,
	                items = _state.items,
	                isLoading = _state.isLoading,
	                isEnd = _state.isEnd;

	            if (page !== 1 && isLoading === true || isEnd) {
	                return;
	            }
	            this.setState({
	                isLoading: true
	            });
	            var _this = this,
	                param = (0, _extends3.default)({}, searchParam);
	            param[pageName] = page;
	            param[pageSizeName] = pageSize;
	            page += num;
	            return (0, _fetch.fetchPosts)(url, param, "POST").then(function (data) {
	                console.log(data);
	                var result = analysis_data(data);
	                //debugger;
	                if (result !== false) {
	                    _this.setState({
	                        isLoading: false,
	                        page: page,
	                        isEnd: result.length < pageSize ? true : false,
	                        items: items.concat(result)
	                    });
	                } else {
	                    _this.setState({
	                        isLoading: false });
	                }
	            }).catch(function () {
	                _this.setState({
	                    isLoading: false });
	            });
	        }
	    }, {
	        key: 'touchMove',
	        value: function touchMove(that, args) {
	            console.log(that, args);
	            //let {items} = this.state;
	            if (that.min - args[0] > -300) {
	                this.getData(1);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _state2 = this.state,
	                items = _state2.items,
	                isLoading = _state2.isLoading,
	                page = _state2.page,
	                isEnd = _state2.isEnd;
	            var _props2 = this.props,
	                renderItem = _props2.renderItem,
	                totalProps = _props2.totalProps,
	                nullRender = _props2.nullRender;

	            var i = 0,
	                j = items.length,
	                $lis = [],
	                totalPrice = 0,
	                totalSb = 0;
	            while (i < j) {
	                console.log("----");
	                var item = items[i];
	                i += 1;
	                $lis.push(renderItem(item, i));
	            }

	            var props = {
	                property: "translateY",
	                className: totalProps.className,
	                tag: "ul",
	                min: "auto",
	                stopPro: false,
	                vertical: true,
	                touchMove: this.touchMove
	            };
	            if (j === 0 && isLoading === false) {
	                return React.createElement(
	                    'div',
	                    { className: totalProps.className },
	                    nullRender()
	                );
	            } else if (j === 0 && page === 0) {
	                return React.createElement('div', null);
	            }
	            //return ({})
	            return React.createElement(
	                _swipe2.default,
	                (0, _extends3.default)({}, props, { onClick: totalProps.onClick }),
	                $lis,
	                isLoading === true && React.createElement(
	                    'div',
	                    { className: 'no-up' },
	                    'Loading'
	                ),
	                page > 1 && isEnd === true && React.createElement(
	                    'div',
	                    { className: 'no-up' },
	                    '-- \u5DF2\u7ECF\u5230\u5E95\u4E86 --'
	                )
	            );
	        }
	    }]);
	    return Scroll;
	}(React.Component);

	;

	Scroll.defaultProps = {
	    pageSize: 20,
	    pageName: "page",
	    pageSizeName: "pageSize",
	    url: "/stuff/order/list.do",
	    type: "POST",
	    //根据每个 item渲染
	    renderItem: function renderItem(item) {
	        console.log(item);
	    },
	    //加载在最外层触摸div props
	    totalProps: {
	        className: "",
	        onClick: function onClick() {}
	    },
	    //解析从 后台接收到数据  data
	    analysis_data: function analysis_data(data) {
	        return data; //如果请求错误  请返回false  正确 请返回 数组数据
	    },
	    //固定的查询参数
	    searchParam: {},
	    nullRender: function nullRender() {
	        return React.createElement(
	            'div',
	            { style: { textAlign: 'center', paddingTop: '10px' } },
	            '\u6682\u65E0\u8BA2\u5355'
	        );
	    }

	};

	module.exports = Scroll;

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(23);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Video = function (_Component) {
	    (0, _inherits3.default)(Video, _Component);

	    function Video(props) {
	        (0, _classCallCheck3.default)(this, Video);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (Video.__proto__ || (0, _getPrototypeOf2.default)(Video)).call(this, props));

	        _this.state = {
	            play: false
	        };
	        _this.handPlay = _this.handPlay.bind(_this);
	        _this.handPause = _this.handPause.bind(_this);
	        return _this;
	    }

	    (0, _createClass3.default)(Video, [{
	        key: "handPlay",
	        value: function handPlay() {
	            var domVedio = _reactDom2.default.findDOMNode(this.refs.vedio);
	            domVedio.play();
	            this.setState({
	                play: !this.state.play
	            });
	        }
	    }, {
	        key: "handPause",
	        value: function handPause() {
	            var domVedio = _reactDom2.default.findDOMNode(this.refs.vedio);
	            if (this.state.play === true) {
	                domVedio.pause();
	                this.setState({
	                    play: !this.state.play
	                });
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var markCss = this.state.play ? "vedio-mark-hide" : "vedio-mark";
	            var _props = this.props,
	                src = _props.src,
	                bgUrl = _props.bgUrl;

	            return _react2.default.createElement(
	                "div",
	                { className: "party-video" },
	                _react2.default.createElement(
	                    "div",
	                    { className: markCss, onClick: this.handPause, style: { backgroundImage: "url(" + bgUrl + ")" } },
	                    _react2.default.createElement(
	                        "div",
	                        { onClick: this.handPlay, className: "vedio-mark-play" },
	                        _react2.default.createElement("span", null)
	                    )
	                ),
	                src !== "" && _react2.default.createElement("video", { ref: "vedio", className: "", src: src })
	            );
	        }
	    }]);
	    return Video;
	}(_react.Component);

	Video.defaultProps = {
	    src: "",
	    bgUrl: ""
	};

	exports.default = Video;
	module.exports = exports["default"];

/***/ },
/* 271 */,
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(515), __esModule: true };

/***/ },
/* 273 */,
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(522), __esModule: true };

/***/ },
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(80)
	  , invoke             = __webpack_require__(531)
	  , html               = __webpack_require__(277)
	  , cel                = __webpack_require__(165)
	  , global             = __webpack_require__(30)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(100)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(20);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(25);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _PropTypes = __webpack_require__(180);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _React$PropTypes = _react2.default.PropTypes;
	var bool = _React$PropTypes.bool;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;
	var oneOfType = _React$PropTypes.oneOfType;


	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
	function isEmptyObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
	  }return true;
	}

	function createLocationDescriptor(to, _ref) {
	  var query = _ref.query;
	  var hash = _ref.hash;
	  var state = _ref.state;

	  if (query || hash || state) {
	    return { pathname: to, query: query, hash: hash, state: state };
	  }

	  return to;
	}

	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * activeClassName prop.
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */
	var Link = _react2.default.createClass({
	  displayName: 'Link',


	  contextTypes: {
	    router: _PropTypes.routerShape
	  },

	  propTypes: {
	    to: oneOfType([string, object]),
	    query: object,
	    hash: string,
	    state: object,
	    activeStyle: object,
	    activeClassName: string,
	    onlyActiveOnIndex: bool.isRequired,
	    onClick: func,
	    target: string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onlyActiveOnIndex: false,
	      style: {}
	    };
	  },
	  handleClick: function handleClick(event) {
	    if (this.props.onClick) this.props.onClick(event);

	    if (event.defaultPrevented) return;

	    !this.context.router ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Link>s rendered outside of a router context cannot navigate.') : (0, _invariant2.default)(false) : void 0;

	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

	    // If target prop is set (e.g. to "_blank"), let browser handle link.
	    /* istanbul ignore if: untestable with Karma */
	    if (this.props.target) return;

	    event.preventDefault();

	    var _props = this.props;
	    var to = _props.to;
	    var query = _props.query;
	    var hash = _props.hash;
	    var state = _props.state;

	    var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });

	    this.context.router.push(location);
	  },
	  render: function render() {
	    var _props2 = this.props;
	    var to = _props2.to;
	    var query = _props2.query;
	    var hash = _props2.hash;
	    var state = _props2.state;
	    var activeClassName = _props2.activeClassName;
	    var activeStyle = _props2.activeStyle;
	    var onlyActiveOnIndex = _props2.onlyActiveOnIndex;

	    var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!(query || hash || state), 'the `query`, `hash`, and `state` props on `<Link>` are deprecated, use `<Link to={{ pathname, query, hash, state }}/>. http://tiny.cc/router-isActivedeprecated') : void 0;

	    // Ignore if rendered outside the context of router, simplifies unit testing.
	    var router = this.context.router;


	    if (router) {
	      // If user does not specify a `to` prop, return an empty anchor tag.
	      if (to == null) {
	        return _react2.default.createElement('a', props);
	      }

	      var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });
	      props.href = router.createHref(location);

	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (router.isActive(location, onlyActiveOnIndex)) {
	          if (activeClassName) {
	            if (props.className) {
	              props.className += ' ' + activeClassName;
	            } else {
	              props.className = activeClassName;
	            }
	          }

	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }

	    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick }));
	  }
	});

	exports.default = Link;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(25);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(52);

	var _PatternUtils = __webpack_require__(84);

	var _InternalPropTypes = __webpack_require__(65);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * A <Redirect> is used to declare another URL path a client should
	 * be sent to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration
	 * and are traversed in the same manner.
	 */

	var Redirect = _react2.default.createClass({
	  displayName: 'Redirect',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

	      if (route.from) route.path = route.from;

	      route.onEnter = function (nextState, replace) {
	        var location = nextState.location;
	        var params = nextState.params;


	        var pathname = void 0;
	        if (route.to.charAt(0) === '/') {
	          pathname = (0, _PatternUtils.formatPattern)(route.to, params);
	        } else if (!route.to) {
	          pathname = location.pathname;
	        } else {
	          var routeIndex = nextState.routes.indexOf(route);
	          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
	          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
	          pathname = (0, _PatternUtils.formatPattern)(pattern, params);
	        }

	        replace({
	          pathname: pathname,
	          query: route.query || location.query,
	          state: route.state || location.state
	        });
	      };

	      return route;
	    },
	    getRoutePattern: function getRoutePattern(routes, routeIndex) {
	      var parentPattern = '';

	      for (var i = routeIndex; i >= 0; i--) {
	        var route = routes[i];
	        var pattern = route.path || '';

	        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

	        if (pattern.indexOf('/') === 0) break;
	      }

	      return '/' + parentPattern;
	    }
	  },

	  propTypes: {
	    path: string,
	    from: string, // Alias for path
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Redirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Redirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.createRouterObject = createRouterObject;
	exports.createRoutingHistory = createRoutingHistory;

	var _deprecateObjectProperties = __webpack_require__(124);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createRouterObject(history, transitionManager) {
	  return _extends({}, history, {
	    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
	    isActive: transitionManager.isActive
	  });
	}

	// deprecated
	function createRoutingHistory(history, transitionManager) {
	  history = _extends({}, history, transitionManager);

	  if (process.env.NODE_ENV !== 'production') {
	    history = (0, _deprecateObjectProperties2.default)(history, '`props.history` and `context.history` are deprecated. Please use `context.router`. http://tiny.cc/router-contextchanges');
	  }

	  return history;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = createMemoryHistory;

	var _useQueries = __webpack_require__(126);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(316);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	var _createMemoryHistory = __webpack_require__(625);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createMemoryHistory(options) {
	  // signatures and type checking differ between `useRoutes` and
	  // `createMemoryHistory`, have to create `memoryHistory` first because
	  // `useQueries` doesn't understand the signature
	  var memoryHistory = (0, _createMemoryHistory2.default)(options);
	  var createHistory = function createHistory() {
	    return memoryHistory;
	  };
	  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	  history.__v2_compatible__ = true;
	  return history;
	}
	module.exports = exports['default'];

/***/ },
/* 303 */,
/* 304 */,
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = makeStateWithLocation;

	var _deprecateObjectProperties = __webpack_require__(124);

	var _routerWarning = __webpack_require__(20);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function makeStateWithLocation(state, location) {
	  if (process.env.NODE_ENV !== 'production' && _deprecateObjectProperties.canUseMembrane) {
	    var stateWithLocation = _extends({}, state);

	    // I don't use deprecateObjectProperties here because I want to keep the
	    // same code path between development and production, in that we just
	    // assign extra properties to the copy of the state object in both cases.

	    var _loop = function _loop(prop) {
	      if (!Object.prototype.hasOwnProperty.call(location, prop)) {
	        return 'continue';
	      }

	      Object.defineProperty(stateWithLocation, prop, {
	        get: function get() {
	          process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Accessing location properties directly from the first argument to `getComponent`, `getComponents`, `getChildRoutes`, and `getIndexRoute` is deprecated. That argument is now the router state (`nextState` or `partialNextState`) rather than the location. To access the location, use `nextState.location` or `partialNextState.location`.') : void 0;
	          return location[prop];
	        }
	      });
	    };

	    for (var prop in location) {
	      var _ret = _loop(prop);

	      if (_ret === 'continue') continue;
	    }

	    return stateWithLocation;
	  }

	  return _extends({}, state, location);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(593);
	module.exports.routerRedux = __webpack_require__(297);


/***/ },
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(323),
	    eq = __webpack_require__(134);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;


/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(333);

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;


/***/ },
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(322),
	    baseAssignValue = __webpack_require__(323);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(194),
	    isIterateeCall = __webpack_require__(197);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */
/***/ function(module, exports) {

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsZWJ = '\\u200d';

	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

	/**
	 * Checks if `string` contains Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	 */
	function hasUnicode(string) {
	  return reHasUnicode.test(string);
	}

	module.exports = hasUnicode;


/***/ },
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(344);


/***/ },
/* 343 */,
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(638),
	    baseEach = __webpack_require__(191),
	    castFunction = __webpack_require__(670),
	    isArray = __webpack_require__(13);

	/**
	 * Iterates over elements of `collection` and invokes `iteratee` for each element.
	 * The iteratee is invoked with three arguments: (value, index|key, collection).
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length"
	 * property are iterated like arrays. To avoid this behavior use `_.forIn`
	 * or `_.forOwn` for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @alias each
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 * @see _.forEachRight
	 * @example
	 *
	 * _.forEach([1, 2], function(value) {
	 *   console.log(value);
	 * });
	 * // => Logs `1` then `2`.
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	 */
	function forEach(collection, iteratee) {
	  var func = isArray(collection) ? arrayEach : baseEach;
	  return func(collection, castFunction(iteratee));
	}

	module.exports = forEach;


/***/ },
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	var baseKeys = __webpack_require__(326),
	    getTag = __webpack_require__(336),
	    isArrayLike = __webpack_require__(53),
	    isString = __webpack_require__(204),
	    stringSize = __webpack_require__(725);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    setTag = '[object Set]';

	/**
	 * Gets the size of `collection` by returning its length for array-like
	 * values or the number of own enumerable string keyed properties for objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to inspect.
	 * @returns {number} Returns the collection size.
	 * @example
	 *
	 * _.size([1, 2, 3]);
	 * // => 3
	 *
	 * _.size({ 'a': 1, 'b': 2 });
	 * // => 2
	 *
	 * _.size('pebbles');
	 * // => 7
	 */
	function size(collection) {
	  if (collection == null) {
	    return 0;
	  }
	  if (isArrayLike(collection)) {
	    return isString(collection) ? stringSize(collection) : collection.length;
	  }
	  var tag = getTag(collection);
	  if (tag == mapTag || tag == setTag) {
	    return collection.size;
	  }
	  return baseKeys(collection).length;
	}

	module.exports = size;


/***/ },
/* 351 */,
/* 352 */,
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isObject2 = __webpack_require__(26);

	var _isObject3 = _interopRequireDefault(_isObject2);

	var _isArray2 = __webpack_require__(13);

	var _isArray3 = _interopRequireDefault(_isArray2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _objectUnfreeze = __webpack_require__(758);

	var _objectUnfreeze2 = _interopRequireDefault(_objectUnfreeze);

	var _isIterable = __webpack_require__(753);

	var _isIterable2 = _interopRequireDefault(_isIterable);

	var _parseStyleName = __webpack_require__(755);

	var _parseStyleName2 = _interopRequireDefault(_parseStyleName);

	var _generateAppendClassName = __webpack_require__(752);

	var _generateAppendClassName2 = _interopRequireDefault(_generateAppendClassName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var linkElement = function linkElement(element, styles, configuration) {
	  var appendClassName = void 0;
	  var elementIsFrozen = void 0;
	  var elementShallowCopy = void 0;

	  elementShallowCopy = element;

	  if (Object.isFrozen && Object.isFrozen(elementShallowCopy)) {
	    elementIsFrozen = true;

	    // https://github.com/facebook/react/blob/v0.13.3/src/classic/element/ReactElement.js#L131
	    elementShallowCopy = (0, _objectUnfreeze2.default)(elementShallowCopy);
	    elementShallowCopy.props = (0, _objectUnfreeze2.default)(elementShallowCopy.props);
	  }

	  var styleNames = (0, _parseStyleName2.default)(elementShallowCopy.props.styleName || '', configuration.allowMultiple);

	  if (_react2.default.isValidElement(elementShallowCopy.props.children)) {
	    elementShallowCopy.props.children = linkElement(_react2.default.Children.only(elementShallowCopy.props.children), styles, configuration);
	  } else if ((0, _isArray3.default)(elementShallowCopy.props.children) || (0, _isIterable2.default)(elementShallowCopy.props.children)) {
	    elementShallowCopy.props.children = _react2.default.Children.map(elementShallowCopy.props.children, function (node) {
	      if (_react2.default.isValidElement(node)) {
	        return linkElement(node, styles, configuration);
	      } else {
	        return node;
	      }
	    });
	  }

	  if (styleNames.length) {
	    appendClassName = (0, _generateAppendClassName2.default)(styles, styleNames, configuration.errorWhenNotFound);

	    if (appendClassName) {
	      if (elementShallowCopy.props.className) {
	        appendClassName = elementShallowCopy.props.className + ' ' + appendClassName;
	      }

	      elementShallowCopy.props.className = appendClassName;
	    }
	  }

	  delete elementShallowCopy.props.styleName;

	  if (elementIsFrozen) {
	    Object.freeze(elementShallowCopy.props);
	    Object.freeze(elementShallowCopy);
	  }

	  return elementShallowCopy;
	};

	/**
	 * @param {ReactElement} element
	 * @param {Object} styles CSS modules class map.
	 * @param {CSSModules~Options} configuration
	 */

	exports.default = function (element) {
	  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var configuration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  // @see https://github.com/gajus/react-css-modules/pull/30
	  if (!(0, _isObject3.default)(element)) {
	    return element;
	  }

	  return linkElement(element, styles, configuration);
	};

	module.exports = exports['default'];

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (version) {
	  var major = version.split('.')[0];

	  return parseInt(major, 10) < 15 ? _react2.default.createElement('noscript') : null;
	};

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ },
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "src/components/ui/icon/symbol-defs.svg";

/***/ },
/* 460 */
/***/ function(module, exports) {

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);

	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}

	module.exports = restParam;


/***/ },
/* 461 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(1124),
	    createBaseEach = __webpack_require__(1137);

	/**
	 * The base implementation of `_.forEach` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object|string} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	module.exports = baseEach;


/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(1138);

	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ },
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(49);

	/**
	 * The base implementation of `get` without support for string paths
	 * and default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} path The path of the property to get.
	 * @param {string} [pathKey] The key representation of path.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path, pathKey) {
	  if (object == null) {
	    return;
	  }
	  if (pathKey !== undefined && pathKey in toObject(object)) {
	    path = [pathKey];
	  }
	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[path[index++]];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 465 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(465);

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	module.exports = getLength;


/***/ },
/* 467 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(50),
	    toObject = __webpack_require__(49);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  var type = typeof value;
	  if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	    return true;
	  }
	  if (isArray(value)) {
	    return false;
	  }
	  var result = !reIsDeepProp.test(value);
	  return result || (object != null && value in toObject(object));
	}

	module.exports = isKey;


/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(42);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ },
/* 469 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(1133),
	    isArray = __webpack_require__(50);

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `value` to property path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Array} Returns the property path array.
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return value;
	  }
	  var result = [];
	  baseToString(value).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	}

	module.exports = toPath;


/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(264),
	    bindCallback = __webpack_require__(113);

	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent. If `customizer` is provided it's invoked to compare values.
	 * If `customizer` returns `undefined` comparisons are handled by the method
	 * instead. The `customizer` is bound to `thisArg` and invoked with up to
	 * three arguments: (value, other [, index|key]).
	 *
	 * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	 * numbers, `Object` objects, regexes, and strings. Objects are compared by
	 * their own, not inherited, enumerable properties. Functions and DOM nodes
	 * are **not** supported. Provide a customizer function to extend support
	 * for comparing other values.
	 *
	 * @static
	 * @memberOf _
	 * @alias eq
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize value comparisons.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * object == other;
	 * // => false
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * // using a customizer callback
	 * var array = ['hello', 'goodbye'];
	 * var other = ['hi', 'goodbye'];
	 *
	 * _.isEqual(array, other, function(value, other) {
	 *   if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
	 *     return true;
	 *   }
	 * });
	 * // => true
	 */
	function isEqual(value, other, customizer, thisArg) {
	  customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
	  var result = customizer ? customizer(value, other) : undefined;
	  return  result === undefined ? baseIsEqual(value, other, customizer) : !!result;
	}

	module.exports = isEqual;


/***/ },
/* 471 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(461),
	    baseDifference = __webpack_require__(1121),
	    baseFlatten = __webpack_require__(1122),
	    bindCallback = __webpack_require__(113),
	    keysIn = __webpack_require__(267),
	    pickByArray = __webpack_require__(1147),
	    pickByCallback = __webpack_require__(1148),
	    restParam = __webpack_require__(460);

	/**
	 * The opposite of `_.pick`; this method creates an object composed of the
	 * own and inherited enumerable properties of `object` that are not omitted.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {Function|...(string|string[])} [predicate] The function invoked per
	 *  iteration or property names to omit, specified as individual property
	 *  names or arrays of property names.
	 * @param {*} [thisArg] The `this` binding of `predicate`.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'user': 'fred', 'age': 40 };
	 *
	 * _.omit(object, 'age');
	 * // => { 'user': 'fred' }
	 *
	 * _.omit(object, _.isNumber);
	 * // => { 'user': 'fred' }
	 */
	var omit = restParam(function(object, props) {
	  if (object == null) {
	    return {};
	  }
	  if (typeof props[0] != 'function') {
	    var props = arrayMap(baseFlatten(props), String);
	    return pickByArray(object, baseDifference(keysIn(object), props));
	  }
	  var predicate = bindCallback(props[0], props[1], 3);
	  return pickByCallback(object, function(value, key, object) {
	    return !predicate(value, key, object);
	  });
	});

	module.exports = omit;


/***/ },
/* 472 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 473 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(465),
	    basePropertyDeep = __webpack_require__(1131),
	    isKey = __webpack_require__(467);

	/**
	 * Creates a function that returns the property value at `path` on a
	 * given object.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': { 'c': 2 } } },
	 *   { 'a': { 'b': { 'c': 1 } } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b.c'));
	 * // => [2, 1]
	 *
	 * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ },
/* 474 */,
/* 475 */
/***/ function(module, exports) {

	"use strict";

	var _ = {};

	_.now = function () {
	  return Date.now();
	};

	/**
	 * 频率控制 返回函数连续调用时，func 执行频率限定为 次 / wait
	 * 
	 * @param  {function}   func      传入函数
	 * @param  {number}     wait      表示时间窗口的间隔
	 * @param  {object}     options   如果想忽略开始边界上的调用，传入{leading: false}。
	 *                                如果想忽略结尾边界上的调用，传入{trailing: false}
	 * @return {function}             返回客户调用函数   
	 */
	_.throttle = function (func, wait, options) {
	  var context, args, result;var dd = Date.now();
	  var timeout = null;
	  // 上次执行时间点
	  var previous = 0;
	  if (!options) options = {};
	  // 延迟执行函数
	  var later = function later() {
	    // 若设定了开始边界不执行选项，上次执行时间始终为0
	    previous = options.leading === false ? 0 : _.now();
	    timeout = null;
	    result = func.apply(context, args);
	    if (!timeout) context = args = null;

	    console.log("uuuuu", Date.now() - dd);
	  };
	  return function () {
	    var now = _.now();
	    // 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。
	    if (!previous && options.leading === false) previous = now;
	    // 延迟执行时间间隔
	    var remaining = wait - (now - previous);

	    console.log("remaining", remaining);
	    context = this;
	    args = arguments;
	    // 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口
	    // remaining大于时间窗口wait，表示客户端系统时间被调整过
	    if (remaining <= 0 || remaining > wait) {
	      clearTimeout(timeout);
	      timeout = null;
	      previous = now;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	      //如果延迟执行不存在，且没有设定结尾边界不执行选项
	    } else if (!timeout && options.trailing !== false) {

	      dd = Date.now();
	      console.info('=====', dd);
	      timeout = setTimeout(later, remaining);
	    }
	    return result;
	  };
	};

	/**
	 * 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
	 *
	 * @param  {function} func        传入函数
	 * @param  {number}   wait        表示时间窗口的间隔
	 * @param  {boolean}  immediate   设置为ture时，调用触发于开始边界而不是结束边界
	 * @return {function}             返回客户调用函数
	 */
	_.debounce = function (func, wait, immediate) {
	  var timeout, args, context, timestamp, result;

	  var later = function later() {
	    // 据上一次触发时间间隔
	    var last = _.now() - timestamp;
	    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
	    if (last < wait && last > 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
	      if (!immediate) {
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      }
	    }
	  };

	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = _.now();
	    var callNow = immediate && !timeout;
	    // 如果延时不存在，重新设定延时
	    if (!timeout) timeout = setTimeout(later, wait);
	    if (callNow) {
	      result = func.apply(context, args);
	      context = args = null;
	    }

	    return result;
	  };
	};

	module.exports = { _: _ };

/***/ },
/* 476 */,
/* 477 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(23);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	__webpack_require__(605);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Dialog = function (_React$Component) {
	    (0, _inherits3.default)(Dialog, _React$Component);

	    function Dialog(props, context) {
	        (0, _classCallCheck3.default)(this, Dialog);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (Dialog.__proto__ || (0, _getPrototypeOf2.default)(Dialog)).call(this, props, context));

	        _this._buttonConfirm = _this._buttonConfirm.bind(_this);
	        return _this;
	    }

	    (0, _createClass3.default)(Dialog, [{
	        key: '_buttonConfirm',
	        value: function _buttonConfirm() {
	            //
	            //var _name = ReactDom.findDOMNode(this.refs.nameInput);
	            //var _phone = ReactDom.findDOMNode(this.refs.phoneInput);

	            this.props.buttonConfirm();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            if (!this.props.show) return _react2.default.createElement('div', null);

	            return _react2.default.createElement(
	                'div',
	                { className: 'sweet-mask' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'sweet-alert showSweetAlert visible block',
	                        'data-has-cancel-button': 'false',
	                        'data-has-confirm-button': 'true',
	                        'data-animation': 'pop' },
	                    _react2.default.createElement(Header, { type: this.props.type }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'sa-button-container' },
	                        _react2.default.createElement(
	                            'button',
	                            { className: 'confirm', tabIndex: '1', onClick: function onClick() {
	                                    return _this2._buttonConfirm();
	                                } },
	                            '\u597D\u7684'
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Dialog;
	}(_react2.default.Component); /**
	                               * Created by xiaolin on 17/1/4.
	                               */


	var Header = function Header(_ref) {
	    var type = _ref.type;

	    return _react2.default.createElement(
	        'div',
	        null,
	        [type].map(function (name) {
	            if (name == 'error') {
	                return _react2.default.createElement(
	                    'div',
	                    { className: type == 'success' ? 'sa-icon sa-' + type + ' animate block' : 'sa-icon sa-' + type + ' block' },
	                    _react2.default.createElement(
	                        'span',
	                        { 'class': 'sa-x-mark', key: name },
	                        '\u2028',
	                        _react2.default.createElement('span', { className: 'sa-line sa-left' }),
	                        '\u2028',
	                        _react2.default.createElement('span', { className: 'sa-line sa-right' }),
	                        '\u2028'
	                    )
	                );
	            } else if (name == 'info') {
	                return _react2.default.createElement(
	                    'div',
	                    { className: type == 'success' ? 'sa-icon sa-' + type + ' animate block' : 'sa-icon sa-' + type + ' block' },
	                    _react2.default.createElement('span', { className: 'sa-body', key: name }),
	                    _react2.default.createElement('span', { className: 'sa-dot' })
	                );
	            } else if (name == 'success') var domT = [];
	            domT.push(_react2.default.createElement(
	                'div',
	                { className: 'sa-title' },
	                '\u9884\u7EA6\u6210\u529F'
	            ));
	            domT.push(_react2.default.createElement(
	                'div',
	                { className: type == 'success' ? 'sa-icon sa-' + type + ' animate block' : 'sa-icon sa-' + type + ' block' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'sa-icon sa-success animate block', key: name },
	                    _react2.default.createElement('span', { className: 'sa-line sa-tip animateSuccessTip' }),
	                    _react2.default.createElement('span', { className: 'sa-line sa-long animateSuccessLong' }),
	                    _react2.default.createElement('div', { className: 'sa-placeholder' }),
	                    _react2.default.createElement('div', { className: 'sa-fix' })
	                )
	            ));
	            domT.push(_react2.default.createElement(
	                'p',
	                { className: 'sa-fileds' },
	                '\u6211\u4EEC\u5C06\u572810\u5206\u949F\u5185\u7ED9\u60A8\u56DE\u7535'
	            ));
	            domT.push(_react2.default.createElement('p', { style: { display: 'block' } }));
	            return domT;
	        })
	    );
	};

	Dialog.defaultProps = {
	    type: 'success',
	    buttonConfirm: function buttonConfirm() {},
	    errorShow: false,
	    data: {
	        name: '',
	        phone: 0
	    }
	};

	exports.default = Dialog;
	module.exports = exports['default'];

/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(117);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _extends2 = __webpack_require__(29);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(16);

	var _classnames2 = _interopRequireDefault(_classnames);

	__webpack_require__(606);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Icon = function (_Component) {
	  (0, _inherits3.default)(Icon, _Component);

	  function Icon(props) {
	    (0, _classCallCheck3.default)(this, Icon);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (Icon.__proto__ || (0, _getPrototypeOf2.default)(Icon)).call(this, props));

	    _this.url = __webpack_require__(459);
	    return _this;
	  }

	  (0, _createClass3.default)(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          name = _props.name,
	          size = _props.size,
	          color = _props.color,
	          style = _props.style,
	          className = _props.className;

	      color = color || '#000';
	      size = size || 16;
	      name = 'icon-' + this.props.name;
	      return _react2.default.createElement(
	        'svg',
	        {
	          style: (0, _extends3.default)({
	            width: size + 'px',
	            height: size + 'px',
	            fill: color
	          }, style),
	          className: (0, _classnames2.default)((0, _defineProperty3.default)({ icon: 1 }, className, 1)) },
	        _react2.default.createElement('use', { xlinkHref: this.url + '#' + name })
	      );
	    }
	  }]);
	  return Icon;
	}(_react.Component);

	exports.default = Icon;
	module.exports = exports['default'];

/***/ },
/* 479 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(607);

	var _router = __webpack_require__(310);

	var _dva = __webpack_require__(64);

	var _classnames = __webpack_require__(16);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NavBar = function (_React$Component) {
	  (0, _inherits3.default)(NavBar, _React$Component);

	  function NavBar(props, context) {
	    (0, _classCallCheck3.default)(this, NavBar);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (NavBar.__proto__ || (0, _getPrototypeOf2.default)(NavBar)).call(this, props, context));

	    _this.state = {
	      title: '',
	      pathName: ''
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(NavBar, [{
	    key: '_filter',
	    value: function _filter(pathname, route) {
	      var _result = route.childRoutes.filter(function (item) {
	        return item.path.toLowerCase() == pathname.toLowerCase() || pathname.toLowerCase().match(item.path.toLowerCase().replace(':projectid', '\\\d+'));
	      });
	      return _result.length ? _result[0].name : route.indexRoute.name;
	    }
	  }, {
	    key: '_getTitle',
	    value: function _getTitle() {
	      var pathname = this.props.location.pathname;
	      var route = this.props.route;


	      switch (route.path == pathname) {
	        case true:
	          this.state.title = route.name;
	          break;
	        default:
	          this.state.title = this._filter(pathname, route);
	          break;
	      }

	      this.state.pathName = pathname;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var self = this;
	      QBFK.Business.clientGoBack = function () {
	        return self._handleClick();
	      };
	      QBFK.Business.go = function (url) {
	        return self.context.router.push(url);
	      };
	    }
	  }, {
	    key: '_handleClick',
	    value: function _handleClick() {

	      this.state.pathName != '/' && this.context.router.goBack();

	      this.state.pathName == '/' && typeof QBaoJSBridge != 'undefined' && QBaoJSBridge.QBIIClose();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      this._getTitle();
	      return _react2.default.createElement(
	        'div',
	        { className: 'qbii-navbar-container' },
	        _react2.default.createElement(
	          'div',
	          { className: 'qbii-navbar qbii-navbar-light' },
	          _react2.default.createElement(
	            'div',
	            { className: 'qbii-navbar-left', onClick: function onClick() {
	                return _this2._handleClick();
	              } },
	            _react2.default.createElement('span', { className: 'left' }),
	            _react2.default.createElement('span', { className: 'left-icon' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'qbii-navbar-title' },
	            this.state.title
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'qbii-navbar-right' },
	            _react2.default.createElement('span', { className: (0, _classnames2.default)({ 'right-icon': 1, 'hide': !this.props.helpShow }), onClick: function onClick() {
	                return QBFK.Business.go('/Help');
	              } }),
	            _react2.default.createElement('span', { className: 'right hide' })
	          )
	        )
	      );
	    }
	  }]);
	  return NavBar;
	}(_react2.default.Component); /**
	                               * (NavBar组件)
	                               *
	                               * @export
	                               * @class NavBar
	                               * @extends {react}
	                               * @author sean on 16/12/29.
	                               */

	function mapStateToProps(state) {
	  return state.home;
	}

	function mapDispatchToProps(dispatch) {
	  return {};
	}
	NavBar.contextTypes = {
	  router: _react2.default.PropTypes.object.isRequired
	};
	// NavBar.defaultProps = {
	//   helpShow: false
	// }
	exports.default = (0, _dva.connect)(mapStateToProps, mapDispatchToProps)(NavBar);
	module.exports = exports['default'];

/***/ },
/* 480 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(29);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCssTransitionGroup = __webpack_require__(749);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	__webpack_require__(609);

	__webpack_require__(608);

	var _ui = __webpack_require__(116);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cx = __webpack_require__(16);

	function CoreLayout(_ref) {
	    var children = _ref.children,
	        location = _ref.location;

	    var isQBC = QBFK.Business.isQBClient();
	    var top = isQBC ? 44 : 0;
	    var viewHeight = window.innerHeight - top;
	    var styles = (0, _extends3.default)({}, { opacity: 0 }); // child.props.style contains an int (e.g 34)
	    location.action == 'PUSH' && (document.querySelector('.page-container-finally').scrollTop = 0);
	    return _react2.default.createElement(
	        'div',
	        null,
	        isQBC ? _react2.default.createElement(_ui.NavBar, arguments[0]) : '',
	        _react2.default.createElement(
	            'main',
	            { style: { height: viewHeight, position: 'fixed', top: top + 'px', width: '100%', overflow: 'hidden' } },
	            _react2.default.createElement(
	                _reactAddonsCssTransitionGroup2.default,
	                { component: 'div',
	                    transitionName: {
	                        enter: 'default-enter',
	                        enterActive: location.action == 'PUSH' ? 'fadeInRight' : 'fadeInLeft',
	                        leave: 'default-leave',
	                        leaveActive: location.action == 'PUSH' ? '' : ''
	                    },
	                    style: { overflowY: 'scroll', height: '100%', position: 'absolute', top: 0, width: '100%' },
	                    className: "page-container-finally",
	                    transitionEnterTimeout: 500,
	                    transitionLeaveTimeout: 500
	                },
	                _react2.default.cloneElement(children, {
	                    style: { position: 'absolute', top: 0, left: 0, width: '100%' },
	                    key: location.pathname
	                })
	            )
	        )
	    );
	}

	CoreLayout.propTypes = {
	    children: _react.PropTypes.element,
	    location: _react.PropTypes.object
	};

	exports.default = CoreLayout;
	module.exports = exports['default'];

/***/ },
/* 481 */,
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _regenerator = __webpack_require__(178);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by xiaolin on 17/1/6.
	 */

	exports.default = {
	    namespace: 'business',
	    state: {
	        loading: false
	    },
	    subscriptions: {
	        setup: function setup(_ref) {
	            //dispatch({
	            //    type: 'business/go',
	            //});
	            //history.listen(({ pathname }) => {
	            //    if (pathname === '/') {
	            //        //dispatch({
	            //        //    type: 'business/go',
	            //        //});
	            //    }
	            //});

	            var dispatch = _ref.dispatch,
	                history = _ref.history;
	        }
	    },
	    effects: {
	        go: _regenerator2.default.mark(function go(action, _ref2) {
	            var put = _ref2.put,
	                call = _ref2.call;
	            return _regenerator2.default.wrap(function go$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                            debugger;

	                        case 1:
	                        case 'end':
	                            return _context.stop();
	                    }
	                }
	            }, go, this);
	        })
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 483 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(29);

	var _extends3 = _interopRequireDefault(_extends2);

	var _regenerator = __webpack_require__(178);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _fetch = __webpack_require__(60);

	var _util = __webpack_require__(79);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  namespace: 'home',
	  state: {
	    loading: false,
	    levelInfo: {
	      "level": ""
	    },
	    userInfo: {
	      "level": "",
	      "assetsDes": 0,
	      "profitDes": 0
	    },
	    projList: [],
	    progressInfo: {},
	    serverTime: '',
	    helpShow: false
	  },
	  effects: {
	    // *'fetch' (action, {put, call}) {
	    //   yield put({type: 'request', loading: true})
	    //
	    //   let count = yield call((count) => {
	    //     return new Promise(resolve => {
	    //       setTimeout(() => {
	    //         resolve(count + 1)
	    //       }, 1000)
	    //     })
	    //   }, action.count)
	    //
	    //   yield put({
	    //     type: 'response',
	    //     loading: false,
	    //     count
	    //   })
	    // },
	    // *getUserId (action, {put, call}) {
	    //   yield put({type: 'levelReq', loading: true})

	    //   yield call(() => {
	    //     return fetchPosts("/api/user/userId",{},"GET")
	    //       .then(data => data.result)
	    //       .then(data => {

	    //         let levelInfo =  call(() => {
	    //           return fetchPosts("/api/user/level",{},"GET")
	    //             .then(data => data.result)
	    //             .catch(err => ({
	    //           		"userId" : 111111,
	    //           		"level" : "暂无"
	    //              }))
	    //         }, action.levelInfo)

	    //         let userInfo =  call(() => {
	    //           return fetchPosts("/api/user/userInfo",{},"GET")
	    //             .then(data => data.result.user)
	    //             .catch(err => ({
	    //               "id": 111111,
	    //         			"level": "暂无",
	    //         			"assets": 0,
	    //         			"profit": 0
	    //             }))
	    //         }, action.userInfo)

	    //         let projList =  call(() => {
	    //           return fetchPosts("/api/project/1",{},"GET")
	    //             .then(data => data.result.project)
	    //             .catch(err => ({
	    //               "assetsId": 1,
	    //               "id": 1,
	    //               "name": "--",
	    //               "pics": "",
	    //               "tag": "--",
	    //               "watched": 0,
	    //               "projectAssets": {},
	    //               "projectInfo": {
	    //                   "assetsRatio": [
	    //                       {
	    //                           "name": "--",
	    //                           "value": 1
	    //                       },
	    //                       {
	    //                           "name": "--",
	    //                           "value": 1
	    //                       },
	    //                       {
	    //                           "name": "--",
	    //                           "value": 1
	    //                       }
	    //                   ],
	    //                   "id": 2,
	    //                   "projectId": 1,
	    //                   "tag1": "+0%",
	    //                   "tag2": "0款",
	    //                   "tag3": "0个",
	    //               },
	    //           }))
	    //         }, action.projList)

	    //         let progressInfo =  call(() => {
	    //           return fetchPosts("/api/project/1/progress",{},"GET")
	    //             .then(data => data.result)
	    //             .catch(err => ({
	    //               "amount": 0,
	    //               "target": 0,
	    //               "user_count": 0
	    //             }))
	    //         }, action.progressInfo)

	    //       })
	    //       .catch(err => {
	    //         console.log(err);
	    //       })
	    //   })


	    //   yield call(() => {
	    //     setCookie("level",levelInfo.level,"storage");
	    //   })
	    //   yield put({
	    //     type: 'levelRes',
	    //     loading: false,
	    //     levelInfo,
	    //     userInfo,
	    //     projList,
	    //     progressInfo
	    //   })
	    // },
	    getLevel: _regenerator2.default.mark(function getLevel(action, _ref) {
	      var put = _ref.put,
	          call = _ref.call;
	      var levelInfo;
	      return _regenerator2.default.wrap(function getLevel$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              _context.next = 2;
	              return put({ type: 'levelReq', loading: true });

	            case 2:
	              _context.next = 4;
	              return call(function () {
	                return (0, _fetch.fetchPosts)("/api/user/level", {}, "GET").then(function (data) {
	                  return data.result;
	                }).catch(function (err) {
	                  return {
	                    "userId": 111111,
	                    "level": "暂无"
	                  };
	                });
	              }, action.levelInfo);

	            case 4:
	              levelInfo = _context.sent;
	              _context.next = 7;
	              return call(function () {
	                (0, _util.setCookie)("level", levelInfo.level, "storage");
	              });

	            case 7:
	              _context.next = 9;
	              return put({
	                type: 'levelRes',
	                loading: false,
	                levelInfo: levelInfo
	              });

	            case 9:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, getLevel, this);
	    }),
	    getUserInfo: _regenerator2.default.mark(function getUserInfo(action, _ref2) {
	      var put = _ref2.put,
	          call = _ref2.call;
	      var userInfo;
	      return _regenerator2.default.wrap(function getUserInfo$(_context2) {
	        while (1) {
	          switch (_context2.prev = _context2.next) {
	            case 0:
	              _context2.next = 2;
	              return put({ type: 'userInfoReq', loading: true });

	            case 2:
	              _context2.next = 4;
	              return call(function () {
	                return (0, _fetch.fetchPosts)("/api/user/userInfo", {}, "GET").then(function (data) {
	                  return data.result.user;
	                }).catch(function (err) {
	                  return {
	                    "id": 111111,
	                    "level": "暂无",
	                    "assetsDes": 0,
	                    "profitDes": 0
	                  };
	                });
	              }, action.userInfo);

	            case 4:
	              userInfo = _context2.sent;
	              _context2.next = 7;
	              return put({
	                type: 'userInfoRes',
	                loading: false,
	                userInfo: userInfo
	              });

	            case 7:
	            case 'end':
	              return _context2.stop();
	          }
	        }
	      }, getUserInfo, this);
	    }),
	    getProjList: _regenerator2.default.mark(function getProjList(action, _ref3) {
	      var put = _ref3.put,
	          call = _ref3.call;
	      var serverTime, helpShow, projList;
	      return _regenerator2.default.wrap(function getProjList$(_context3) {
	        while (1) {
	          switch (_context3.prev = _context3.next) {
	            case 0:
	              _context3.next = 2;
	              return put({ type: 'projListReq', loading: true });

	            case 2:
	              serverTime = void 0, helpShow = void 0;
	              _context3.next = 5;
	              return call(function () {
	                return (0, _fetch.fetchPosts)("/api/project/list", {}, "GET").then(function (data) {
	                  serverTime = data.serverTime;
	                  helpShow = data.result.projects.length > 0;
	                  return data.result.projects;
	                }).catch(function (err) {
	                  return {
	                    "assetsId": 1,
	                    "id": 1,
	                    "name": "--",
	                    "pics": [""],
	                    "tag": "--",
	                    "watched": 0,
	                    "projectAssets": {},
	                    "projectInfo": {
	                      "assetsRatio": [{
	                        "name": "--",
	                        "value": 1
	                      }, {
	                        "name": "--",
	                        "value": 1
	                      }, {
	                        "name": "--",
	                        "value": 1
	                      }],
	                      "id": 2,
	                      "projectId": 1,
	                      "tag1": "+0%",
	                      "tag2": "0款",
	                      "tag3": "0个"
	                    }

	                  };
	                });
	              }, action.projList);

	            case 5:
	              projList = _context3.sent;
	              _context3.next = 8;
	              return put({
	                type: 'projListRes',
	                loading: false,
	                projList: projList,
	                serverTime: serverTime,
	                helpShow: helpShow
	              });

	            case 8:
	            case 'end':
	              return _context3.stop();
	          }
	        }
	      }, getProjList, this);
	    }),
	    getProgressInfo: _regenerator2.default.mark(function getProgressInfo(action, _ref4) {
	      var put = _ref4.put,
	          call = _ref4.call;
	      var id, progressInfo;
	      return _regenerator2.default.wrap(function getProgressInfo$(_context4) {
	        while (1) {
	          switch (_context4.prev = _context4.next) {
	            case 0:
	              _context4.next = 2;
	              return put({ type: 'progressInfoReq', loading: true });

	            case 2:
	              id = action.progressInfo, progressInfo = {};
	              _context4.next = 5;
	              return call(function () {
	                return (0, _fetch.fetchPosts)("/api/project/" + id + "/progress", {}, "GET").then(function (data) {
	                  return data.result;
	                }).catch(function (err) {
	                  return {
	                    "amount": 0,
	                    "target": 0,
	                    "user_count": 0
	                  };
	                });
	              }, action.progressInfo);

	            case 5:
	              progressInfo[id] = _context4.sent;
	              _context4.next = 8;
	              return put({
	                type: 'progressInfoRes',
	                loading: false,
	                progressInfo: progressInfo
	              });

	            case 8:
	            case 'end':
	              return _context4.stop();
	          }
	        }
	      }, getProgressInfo, this);
	    }),
	    setHelpStatus: _regenerator2.default.mark(function setHelpStatus(action, _ref5) {
	      var put = _ref5.put;
	      return _regenerator2.default.wrap(function setHelpStatus$(_context5) {
	        while (1) {
	          switch (_context5.prev = _context5.next) {
	            case 0:
	              _context5.next = 2;
	              return put({ type: 'helpShowReq' });

	            case 2:
	              _context5.next = 4;
	              return put({
	                type: 'helpShowRes',
	                helpShow: true
	              });

	            case 4:
	            case 'end':
	              return _context5.stop();
	          }
	        }
	      }, setHelpStatus, this);
	    })
	  },
	  reducers: {
	    helpShowReq: function helpShowReq(state, payload) {
	      return (0, _extends3.default)({}, state, payload);
	    },
	    helpShowRes: function helpShowRes(state, payload) {
	      return (0, _extends3.default)({}, state, payload);
	    },
	    levelReq: function levelReq(state, payload) {
	      return (0, _extends3.default)({}, state, payload);
	    },
	    levelRes: function levelRes(state, payload) {
	      return (0, _extends3.default)({}, state, payload);
	    },
	    userInfoReq: function userInfoReq(state, payload) {
	      return (0, _extends3.default)({}, state, payload);
	    },
	    userInfoRes: function userInfoRes(state, payload) {
	      return (0, _extends3.default)({}, state, payload);
	    },
	    projListReq: function projListReq(state, payload) {
	      return (0, _extends3.default)({}, state, payload);
	    },
	    projListRes: function projListRes(state, payload) {
	      return (0, _extends3.default)({}, state, payload);
	    },
	    progressInfoReq: function progressInfoReq(state, payload) {
	      return (0, _extends3.default)({}, state, payload);
	    },
	    progressInfoRes: function progressInfoRes(state, payload) {
	      payload.progressInfo = (0, _extends3.default)(state.progressInfo, payload.progressInfo);
	      return (0, _extends3.default)({}, state, payload);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 484 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (ref) {
	  return _react2.default.createElement(
	    _router.Router,
	    { history: ref.history },
	    _react2.default.createElement(
	      _router.Route,
	      { path: '/', component: _layout2.default, name: 'QBII' },
	      _react2.default.createElement(_router.IndexRoute, { component: _page2.default, name: 'QBII\u8BBE\u7F6E\u9875\u9762' }),
	      _react2.default.createElement(_router.Route, { path: '/Home', component: _page2.default, name: 'QBII\u8BBE\u7F6E' }),
	      _react2.default.createElement(_router.Route, { path: '/Theme', component: _page6.default, name: '\u6652\u8EAB\u4EFD' }),
	      _react2.default.createElement(_router.Route, { path: '/About', component: _page4.default, name: '\u4E86\u89E3QBII' }),
	      _react2.default.createElement(_router.Route, { path: '/OrderConfirm/:projectId', component: _page8.default, name: '\u8BA2\u5355\u786E\u8BA4' }),
	      _react2.default.createElement(_router.Route, { path: '/InfoTpl/:projectId', component: _page10.default, name: '\u9879\u76EE\u8BE6\u60C5' }),
	      _react2.default.createElement(_router.Route, { path: '/NewsDetail/:projectId', component: _page12.default, name: '\u6700\u65B0\u8D44\u8BAF' }),
	      _react2.default.createElement(_router.Route, { path: '/OrderList', component: _page14.default, name: '\u8BA2\u5355\u5217\u8868' }),
	      _react2.default.createElement(_router.Route, { path: '/ProfitList', component: _page16.default, name: '\u6536\u76CA\u5217\u8868' }),
	      _react2.default.createElement(_router.Route, { path: '/Help', component: _page18.default, name: 'FAQ' }),
	      _react2.default.createElement(_router.Route, { path: '/IconDoc', component: _page20.default, name: 'Icon Document' })
	    )
	  );
	};

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _router = __webpack_require__(310);

	var _layout = __webpack_require__(480);

	var _layout2 = _interopRequireDefault(_layout);

	var _page = __webpack_require__(490);

	var _page2 = _interopRequireDefault(_page);

	var _page3 = __webpack_require__(486);

	var _page4 = _interopRequireDefault(_page3);

	var _page5 = __webpack_require__(503);

	var _page6 = _interopRequireDefault(_page5);

	var _page7 = __webpack_require__(500);

	var _page8 = _interopRequireDefault(_page7);

	var _page9 = __webpack_require__(496);

	var _page10 = _interopRequireDefault(_page9);

	var _page11 = __webpack_require__(498);

	var _page12 = _interopRequireDefault(_page11);

	var _page13 = __webpack_require__(501);

	var _page14 = _interopRequireDefault(_page13);

	var _page15 = __webpack_require__(502);

	var _page16 = _interopRequireDefault(_page15);

	var _page17 = __webpack_require__(487);

	var _page18 = _interopRequireDefault(_page17);

	var _page19 = __webpack_require__(491);

	var _page20 = _interopRequireDefault(_page19);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import HomeDo from 'views/HomeDo/page'
	module.exports = exports['default'];
	// import OrderInfo from "views/OrderInfo/page";


	// import AnDemo from "views/AnDemo/page";
	// import DemoSwipe from "views/DemoSwipe/page";

/***/ },
/* 485 */,
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(29);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactCssModules = __webpack_require__(87);

	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

	var _page = __webpack_require__(620);

	var _page2 = _interopRequireDefault(_page);

	var _swipe = __webpack_require__(159);

	var _swipe2 = _interopRequireDefault(_swipe);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var About = function (_Component) {
	  (0, _inherits3.default)(About, _Component);

	  function About(props) {
	    (0, _classCallCheck3.default)(this, About);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).call(this, props));

	    _this.slideUpHandler = function () {
	      _this.setState({
	        activeIndex: ++_this.state.activeIndex
	      });
	    };

	    _this.slideChangeHandler = function (index, next) {
	      _this.setState({
	        activeIndex: index
	      });
	    };

	    _this.state = {
	      activeIndex: 0
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(About, [{
	    key: 'render',
	    value: function render() {
	      var slide = {
	        // height: '25%',
	        position: 'relative'
	      };
	      var itemHeight = window.innerHeight - 44;
	      var swipeProps = {
	        min: -itemHeight * 3,
	        max: 0,
	        step: itemHeight,
	        property: "translateY",
	        findScroller: ".slide-item",
	        vertical: true,
	        sensitivity: 0.5
	      };
	      return _react2.default.createElement(
	        _swipe2.default,
	        (0, _extends3.default)({ styleName: 'about-container' }, swipeProps, { style: { position: 'absolute', left: 0, width: '100%' } }),
	        _react2.default.createElement(
	          'div',
	          { style: slide, className: 'slide-item' },
	          _react2.default.createElement('div', { styleName: 'about-title' }),
	          _react2.default.createElement(
	            'div',
	            { styleName: 'about-content' },
	            _react2.default.createElement(
	              'p',
	              null,
	              'QBII(Qualified Qbao Institutional Investors) ',
	              _react2.default.createElement('br', null),
	              '\u5408\u683C\u7684\u94B1\u5B9D\u6295\u8D44\u8005'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'QBII\u7684\u6743\u76CA\uFF1A',
	              _react2.default.createElement('br', null),
	              '\u4EE5\u6295\u8D44\u4EBA\u7684\u8EAB\u4EFD\u53C2\u4E0E\u94B1\u5B9D\u4E3B\u8425\u4E1A\u52A1\uFF1B\u53C2\u4E0E\u5B75\u5316\u4E1A\u52A1\u83B7\u5F97\u88AB\u5B75\u5316\u516C\u53F8\u5229\u6DA6\u5206\u7EA2\u548C\u53C2\u80A1\u80A1\u6743\u589E\u503C\u6536\u76CA\uFF1B\u8FDB\u5165\u94B1\u5B9D\u6295\u8D44\u4EBA\u6838\u5FC3\u793E\u4EA4\u5708\uFF1B\u5177\u5907\u6240\u6709\u4E1A\u52A1\u6807\u7684\u8FD0\u8425\u6743\u548C\u51B3\u7B56\u6295\u7968\u6743\u3002'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              '\u6210\u4E3AQBII\u540E\u7684\u6536\u5165\u5C06\u989D\u5916\u83B7\u5F97\u5F88\u5927\u4E00\u90E8\u5206\u7684\u6295\u8D44\u6536\u76CA\uFF0C\u9664\u4E86\u62FF\u5230\u6295\u8D44\u6807\u7684\u989D\u5916\u7684\u5206\u7EA2\u6536\u76CA\uFF0C\u66F4\u5C06\u6709\u673A\u4F1A\u6210\u4E3APE\uFF0C\u4E0E\u94B1\u5B9D\u4E00\u8D77\u6295\u8D44\u5DF2\u6709\u5229\u6DA6\u548C\u672A\u6765\u6709\u5927\u91CF\u5229\u6DA6\u4ECE\u800C\u83B7\u5F97\u9AD8\u4F30\u503C\u7684\u4F01\u4E1A\u3002'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { styleName: 'bottom-wrap' },
	            _react2.default.createElement(
	              'span',
	              { styleName: 'page' },
	              '1/4'
	            ),
	            _react2.default.createElement('i', { styleName: 'arrow', className: 'extend', onClick: this.slideUpHandler })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: slide, className: 'slide-item' },
	          _react2.default.createElement('div', { styleName: 'about-title' }),
	          _react2.default.createElement(
	            'div',
	            { styleName: 'about-content' },
	            _react2.default.createElement(
	              'p',
	              null,
	              'QBII\u80CC\u666F\uFF1A',
	              _react2.default.createElement('br', null),
	              '\u57FA\u4E8E\u94B1\u65FA\u4FE1\u63A7\u5F3A\u5927\u7684\u8D44\u672C\u73B0\u91D1\u6D41\uFF0C\u4F9D\u6258\u94B1\u5B9D\u7F511.6\u4EBF\u6CE8\u518C\u7528\u6237\u7684\u5DE8\u5927\u6D41\u91CF\uFF0C\u4EE5\u201C\u4E92\u8054\u7F51\uFF0B\u201D\u6B66\u88C5\u601D\u7EF4\uFF0C\u6DF1\u5EA6\u53D1\u6398\u8986\u76D6\u5404\u4E2A\u9886\u57DF\u7684\u65B0\u5174\u4E1A\u52A1\uFF0C\u901A\u8FC7\u751F\u6001\u5708\u5185\u4E92\u8054\u7F51\u7684\u878D\u5408\uFF0C\u8FC5\u901F\u5B75\u5316\u51FA\u540C\u65F6\u5177\u5907\u5546\u4E1A\u548C\u793E\u4F1A\u4EF7\u503C\u7684\u6295\u8D44\u6807\u7684\u3002'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              '\u521B\u65B0\u4E3A\u738B\uFF0C\u5B9E\u4E1A\u5174\u56FD\uFF0C\u56FA\u672C\u5B89\u90A6\uFF1B\u201C\u75DB\u4E8E\u6C11\u751F\u4E4B\u7A98\u4E5F\uFF0C\u5219\u66F0\u8BB2\u6C42\u5B9E\u4E1A\u201D\uFF1B\u6CA1\u6709\u5B9E\u4E1A\uFF0C\u5C31\u6CA1\u6709\u94B1\u65FA\u3002'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { styleName: 'bottom-wrap' },
	            _react2.default.createElement(
	              'span',
	              { styleName: 'page' },
	              '2/4'
	            ),
	            _react2.default.createElement('i', { styleName: 'arrow', className: 'extend', onClick: this.slideUpHandler })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: slide, className: 'slide-item' },
	          _react2.default.createElement('div', { styleName: 'about-title' }),
	          _react2.default.createElement(
	            'div',
	            { styleName: 'about-content' },
	            _react2.default.createElement(
	              'p',
	              null,
	              'QBII\u4E3B\u8981\u6807\u51C6\uFF1A'
	            ),
	            _react2.default.createElement(
	              'div',
	              { styleName: 'level-info' },
	              _react2.default.createElement(
	                'p',
	                null,
	                ' ',
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  '\u7EA7\u522B'
	                ),
	                ' ',
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  '\u6D3B\u8DC3\u503C'
	                ),
	                ' '
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                ' ',
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  'QBII-PRO'
	                ),
	                ' ',
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  '80\u4E07'
	                ),
	                ' '
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                ' ',
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  'QBII-A'
	                ),
	                ' ',
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  '29\u4E07'
	                ),
	                ' '
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                ' ',
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  'QBII-B'
	                ),
	                ' ',
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  '15\u4E07'
	                ),
	                ' '
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                ' ',
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  'QBII-C'
	                ),
	                ' ',
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  '8\u4E07'
	                ),
	                ' '
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                ' ',
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  '\u6682\u65E0'
	                ),
	                ' ',
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  '\u4F4E\u4E8E8\u4E07'
	                ),
	                ' '
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'QBII\u5FC5\u5907\u8981\u7D20\uFF1A',
	              _react2.default.createElement('br', null),
	              '\u6709\u6295\u8D44\u80FD\u529B\u5E76\u5177\u6709\u5951\u7EA6\u7CBE\u795E\u3001\u6709\u575A\u5B9A\u7684\u4FE1\u4EF0\u3001\u6709\u5065\u5168\u7684\u4EBA\u683C\u3001\u6709\u5B8C\u6574\u79D1\u5B66\u7684\u77E5\u8BC6\u4F53\u7CFB\u548C\u5BF9\u8FD9\u4E2A\u77E5\u8BC6\u4F53\u7CFB\u5B66\u4E60\u548C\u77E5\u8BC6\u66F4\u65B0\u80FD\u529B\u6216\u8005\u662F\u6709\u610F\u613F\u6210\u4E3A\u8FD9\u6837\u7684\u6295\u8D44\u4EBA\u7684\u94B1\u5B9D\u7528\u6237\u3002'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { styleName: 'bottom-wrap' },
	            _react2.default.createElement(
	              'span',
	              { styleName: 'page' },
	              '3/4'
	            ),
	            _react2.default.createElement('i', { styleName: 'arrow', className: 'extend', onClick: this.slideUpHandler })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: slide, className: 'slide-item' },
	          _react2.default.createElement('div', { styleName: 'about-title' }),
	          _react2.default.createElement(
	            'div',
	            { styleName: 'about-content' },
	            _react2.default.createElement(
	              'p',
	              null,
	              '\u5B75\u5316\u5BF9\u8C61\uFF1A',
	              _react2.default.createElement('br', null),
	              '1.\u94B1\u65FA\u4FE1\u606F\u4EA7\u4E1A\u63A7\u80A1\u96C6\u56E2\u65D7\u4E0B\u6240\u6709\u88AB\u5B75\u5316\u516C\u53F8',
	              _react2.default.createElement('br', null),
	              '\uFF08\u5982\u4E0A\u6D77\u5546\u8083\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8\u3001\u4E0A\u6D77\u5B9A\u83F1\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8\u3001\u4E0A\u6D77\u96F7\u60A6\u6587\u5316\u53D1\u5C55\u6709\u9650\u516C\u53F8\u3001\u4E0A\u6D77\u9177\u96C5\u667A\u80FD\u79D1\u6280\u6709\u9650\u516C\u53F8\u3001\u56DB\u5DDD\u96F7\u795E\u7A7A\u5929\u79D1\u6280\u6709\u9650\u516C\u53F8\u3001\u4E0A\u6D77\u53CB\u7E41\u667A\u80FD\u79D1\u6280\u6709\u9650\u516C\u53F8\u7B49\u7B49\uFF09\u3002'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              '2.\u5177\u5907\u5B9E\u5E72\u80FD\u529B\u548C\u521B\u65B0\u7CBE\u795E\u7684\u521B\u4E1A\u8005\u3001\u4F01\u4E1A\u548C\u4F01\u4E1A\u5BB6\u3002'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { styleName: 'bottom-wrap' },
	            _react2.default.createElement(
	              'span',
	              { styleName: 'page' },
	              '4/4'
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return About;
	}(_react.Component);

	exports.default = (0, _reactCssModules2.default)(About, _page2.default, { allowMultiple: true });
	module.exports = exports['default'];

/***/ },
/* 487 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _dva = __webpack_require__(64);

	var _reactCssModules = __webpack_require__(87);

	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

	var _page = __webpack_require__(610);

	var _page2 = _interopRequireDefault(_page);

	var _reactRouter = __webpack_require__(72);

	var _classnames = __webpack_require__(16);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Help = function (_Component) {
	  (0, _inherits3.default)(Help, _Component);

	  function Help(props) {
	    (0, _classCallCheck3.default)(this, Help);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (Help.__proto__ || (0, _getPrototypeOf2.default)(Help)).call(this, props));

	    _this.state = {
	      questions: [{
	        question: '想了解下紫隆山葡萄酒的公司情况？',
	        answer: '紫隆山葡萄酒厂坐落于吉林通化，创建于1997年。张总也曾邀约多位宝粉共同参观过酒厂，跟这所葡萄庄园结缘颇深。紫隆山品牌依托互联网平台的优势，打造出一个响当当的山葡萄酒品牌，带动了整个地区的山葡萄产业。'
	      }, {
	        question: '项目回报率有多高？',
	        answer: 'QBII项目本身就是作为对钱宝合格投资人的回馈，年化均比当前领取任务要高，而且可以省去天天做任务的繁琐过程。投资股权后，当您想了解当前收益时，随时可打开APP点击QBII板块，就可看到您当前的利润分红、股本收益等等，与钱宝一起投资风险共担。'
	      }, {
	        question: '签署合同后，资金如何操作？',
	        answer: '资金将直接从您的钱宝账户中扣款，打入QBII。您可在APP的QBII板块中看到。'
	      }, {
	        question: '有意向投资，但现在大部分资金仍在任务中，没有结算怎么办？',
	        answer: '如果您在投资生效后，当前钱宝账号中可提现资金少于投资资金，您可选择终止当前尚未结束任务，提前进行结算。按照任务的日收益计算，结算已完成的任务天数发放收益。如果您账号中有多笔任务，可由您选择结算哪一项任务，或委托钱宝自行结束。总之不会让您有任何损失，您可放心。'
	      }, {
	        question: '必须要钱宝认证人签约合同吗？ 老人年纪大，可以代签吗？',
	        answer: '必须要本人亲自签署，目前签署地点待定。但如果实在不方便出门，可先由工作人员这边记录，上门签署。'
	      }]
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(Help, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { styleName: 'home-container' },
	        this.state.questions.map(function (item, index) {
	          return _react2.default.createElement(
	            'div',
	            { className: 'item', key: index },
	            _react2.default.createElement(
	              'div',
	              { className: 'question' },
	              item.question
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'answer' },
	              item.answer
	            )
	          );
	        })
	      );
	    }
	  }]);
	  return Help;
	}(_react.Component);

	;

	function mapStateToProps(state) {
	  return state;
	}

	function mapDispatchToProps(dispatch) {
	  return {};
	}
	Help.PropTypes = {
	  enterAnimation: {
	    duration: 2000,
	    animation: "slideDown"
	  },
	  leaveAnimation: {
	    duration: 2000,
	    animation: "slideUp"
	  }
	};

	exports.default = (0, _dva.connect)(mapStateToProps, mapDispatchToProps)((0, _reactCssModules2.default)(Help, _page2.default, { allowMultiple: true }));
	module.exports = exports['default'];

/***/ },
/* 488 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _dva = __webpack_require__(64);

	var _reactCssModules = __webpack_require__(87);

	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

	var _page = __webpack_require__(185);

	var _page2 = _interopRequireDefault(_page);

	var _classnames = __webpack_require__(16);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _recharts = __webpack_require__(416);

	var _util = __webpack_require__(79);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ProjectItem = function (_Component) {
	  (0, _inherits3.default)(ProjectItem, _Component);

	  function ProjectItem(props) {
	    (0, _classCallCheck3.default)(this, ProjectItem);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (ProjectItem.__proto__ || (0, _getPrototypeOf2.default)(ProjectItem)).call(this, props));

	    _this.projectStatus = ['未开始', '进行中', '已结束'];

	    _this.togglePieShowHandler = function () {
	      _this.setState({});
	    };

	    _this.state = {};
	    return _this;
	  }

	  (0, _createClass3.default)(ProjectItem, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        { styleName: 'item', onClick: function onClick() {
	            return QBFK.Business.go('/InfoTpl/' + _this2.props.projInfo.pageId || "");
	          } },
	        _react2.default.createElement(
	          'div',
	          { styleName: 'banner' },
	          _react2.default.createElement(
	            'span',
	            { styleName: 'corner' },
	            _react2.default.createElement(
	              'i',
	              null,
	              this.projectStatus[this.checkProjStatus(this.props.projInfo)]
	            )
	          ),
	          _react2.default.createElement('img', { src: this.props.projInfo.picCover, alt: '', onError: function onError(e) {
	              e.target.style.display = 'none';
	            }, onLoad: function onLoad(e) {
	              e.target.style.display = 'block';
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { styleName: 'title' },
	          this.props.projInfo.name,
	          _react2.default.createElement(
	            'small',
	            null,
	            _react2.default.createElement('i', { styleName: 'icon icon-item' }),
	            _react2.default.createElement(
	              'span',
	              null,
	              this.props.projInfo.tag
	            )
	          ),
	          _react2.default.createElement('span', { styleName: 'user-tag' })
	        )
	      );
	    }
	  }, {
	    key: 'checkProjStatus',
	    value: function checkProjStatus(proj) {
	      var serverTime = new Date(this.props.serverTime).getTime();
	      var startTime = new Date(proj.prostarttime).getTime();
	      var endTime = new Date(proj.proendtime).getTime();
	      return serverTime < startTime ? 0 : serverTime > startTime && serverTime < endTime ? 1 : serverTime > endTime ? 2 : 1;
	    }
	  }]);
	  return ProjectItem;
	}(_react.Component);

	function mapStateToProps(state) {
	  return state.home;
	}

	function mapDispatchToProps(dispatch) {
	  return {
	    getProgressInfo: function getProgressInfo(progressInfo) {
	      dispatch({ type: 'home/getProgressInfo', progressInfo: progressInfo });
	    }
	  };
	}
	exports.default = (0, _dva.connect)(mapStateToProps, mapDispatchToProps)((0, _reactCssModules2.default)(ProjectItem, _page2.default, { allowMultiple: true }));
	module.exports = exports['default'];

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(23);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _velocityReact = __webpack_require__(59);

	var _reactRouter = __webpack_require__(72);

	var _classnames = __webpack_require__(16);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactCssModules = __webpack_require__(87);

	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

	var _fetch = __webpack_require__(60);

	var _page = __webpack_require__(185);

	var _page2 = _interopRequireDefault(_page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var News = function (_Component) {
	    (0, _inherits3.default)(News, _Component);

	    function News(props) {
	        (0, _classCallCheck3.default)(this, News);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (News.__proto__ || (0, _getPrototypeOf2.default)(News)).call(this, props));

	        _this.state = {
	            lists: []
	        };
	        return _this;
	    }

	    (0, _createClass3.default)(News, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var self = this;
	            ///qbii-app/
	            (0, _fetch.fetchPosts)("/api/news/getNewsList", {}, "POST").then(function (data) {
	                console.log('返回结果为:', data);
	                //debugger;
	                if (data.code == 0) {
	                    self.setState({
	                        lists: data.result.newsList
	                    });
	                }
	            });
	        }
	    }, {
	        key: "toDetail",
	        value: function toDetail(id) {
	            QBFK.Business.go('/NewsDetail/' + id);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var lists = this.state.lists;

	            var length = lists.length;

	            var items = [],
	                i = 0;
	            //onClick={()=>QBFK.Business.go('/NewsDetail/'+{item.id})}
	            while (i < length) {
	                var item = lists[i];
	                i += 1;
	                items.push(_react2.default.createElement(
	                    "div",
	                    { styleName: "item", key: i, onClick: this.toDetail.bind(this, item.id) },
	                    _react2.default.createElement(
	                        "div",
	                        { styleName: "img" },
	                        _react2.default.createElement("img", { src: item.image, alt: "" })
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { styleName: "item-title" },
	                        _react2.default.createElement(
	                            "p",
	                            null,
	                            item.title
	                        ),
	                        _react2.default.createElement(
	                            "small",
	                            null,
	                            item.des
	                        )
	                    )
	                ));
	                // statement
	            }

	            return _react2.default.createElement(
	                "div",
	                { className: "" },
	                items
	            );
	        }
	    }]);
	    return News;
	}(_react.Component);

	News.defaultProps = {
	    title: ""
	};
	exports.default = (0, _reactRouter.withRouter)((0, _reactCssModules2.default)(News, _page2.default, { allowMultiple: true }));
	module.exports = exports["default"];

/***/ },
/* 490 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _dva = __webpack_require__(64);

	var _reactCssModules = __webpack_require__(87);

	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

	var _page = __webpack_require__(185);

	var _page2 = _interopRequireDefault(_page);

	var _reactRouter = __webpack_require__(72);

	var _classnames = __webpack_require__(16);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _util = __webpack_require__(79);

	var _fetch = __webpack_require__(60);

	var _ProjectItem = __webpack_require__(488);

	var _ProjectItem2 = _interopRequireDefault(_ProjectItem);

	var _news = __webpack_require__(489);

	var _news2 = _interopRequireDefault(_news);

	var _isArray = __webpack_require__(13);

	var _isArray2 = _interopRequireDefault(_isArray);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Home = function (_Component) {
	  (0, _inherits3.default)(Home, _Component);

	  function Home(props) {
	    (0, _classCallCheck3.default)(this, Home);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));

	    _this.levelOption = { "暂无": 0, "C": 25, "B": 50, "A": 75, "PRO": 100, "": 0 };

	    _this.showCoverHandler = function (e) {
	      if (e) e.stopPropagation();
	      _this.setState({
	        isShowCover: true
	      });
	    };

	    _this.hideCoverHandler = function () {
	      (0, _util.setCookie)("isShowCover", "1", "storage");
	      _this.setState({
	        isShowCover: false
	      });
	    };

	    (0, _fetch.fetchPosts)("/api/user/userId", {}, "GET").then(function (data) {
	      props.getLevel();
	      props.getUserInfo();
	      props.getProjList();
	    });

	    _this.state = {
	      isShowCover: !(0, _util.getCookie)("isShowCover", "storage"),
	      isGaugeRendered: false
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(Home, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (!!this.props.userInfo.level && !this.state.isGaugeRendered) {
	        this.renderGauge(this.levelOption[this.props.userInfo.level.toUpperCase()]);
	        // this.renderGauge(this.levelOption[this.props.userInfo.level]);
	        this.setState({
	          isGaugeRendered: true
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      // if(this.props.projList.length>0) {
	      //   this.props.setHelpStatus()
	      // }
	      var projItems = this.props.projList.length > 0 ? this.props.projList.map(function (item, index) {
	        return _react2.default.createElement(_ProjectItem2.default, { projInfo: item, key: index, serverTime: _this2.props.serverTime });
	      }) : "";
	      return _react2.default.createElement(
	        'div',
	        { styleName: 'home-container', style: this.props.style },
	        _react2.default.createElement(
	          'div',
	          { styleName: 'top-container' },
	          _react2.default.createElement('div', { styleName: 'top-bg' }),
	          _react2.default.createElement(
	            'div',
	            { styleName: 'dash-container' },
	            _react2.default.createElement('canvas', { id: 'dash', styleName: 'dash', width: '240', height: '210' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { styleName: 'content' },
	            _react2.default.createElement(
	              'h5',
	              null,
	              'QBII'
	            ),
	            _react2.default.createElement(
	              'h3',
	              null,
	              '\u8BA4\u8BC1\u7B49\u7EA7'
	            ),
	            _react2.default.createElement(
	              'h1',
	              { styleName: (0, _classnames2.default)({ "nothing": this.props.userInfo.level && this.props.userInfo.level == '暂无' }) },
	              this.props.userInfo.level
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              '\u7B49\u7EA7\u8D8A\u9AD8\uFF0C\u53EF\u6295\u9879\u76EE\u8D8A\u591A'
	            ),
	            _react2.default.createElement(
	              'div',
	              { styleName: 'btn-group' },
	              _react2.default.createElement(
	                'span',
	                { styleName: 'btn', onClick: function onClick() {
	                    return QBFK.Business.go('/Theme');
	                  } },
	                '\u6652\u8EAB\u4EFD'
	              ),
	              _react2.default.createElement(
	                'span',
	                { styleName: 'btn', onClick: function onClick() {
	                    return QBFK.Business.go('/About');
	                  } },
	                '\u4E86\u89E3QBII'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { styleName: 'asset-container' },
	          _react2.default.createElement(
	            'div',
	            { onClick: function onClick() {
	                (0, _isArray2.default)(_this2.props.projList) && _this2.props.projList.length !== 0 && QBFK.Business.go('/OrderList');
	              }, styleName: 'item' },
	            _react2.default.createElement(
	              'span',
	              null,
	              '\u6295\u5165\u8D44\u4EA7(\u4E07)'
	            ),
	            _react2.default.createElement(
	              'h3',
	              null,
	              (0, _util.priceFormat)(this.props.userInfo.assetsDes) || 0.00,
	              ' '
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { onClick: function onClick() {
	                return (0, _isArray2.default)(_this2.props.projList) && _this2.props.projList.length !== 0 && QBFK.Business.go('/ProfitList');
	              }, styleName: 'item' },
	            _react2.default.createElement(
	              'span',
	              null,
	              '\u7D2F\u8BA1\u6536\u76CA(\u5143)'
	            ),
	            _react2.default.createElement(
	              'h3',
	              null,
	              (0, _util.priceFormat)(this.props.userInfo.profitDes) || 0.00
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { styleName: 'list-container', className: (0, _classnames2.default)({ "hide": this.props.projList.length == 0 }) },
	          projItems
	        ),
	        _react2.default.createElement(
	          'div',
	          { styleName: 'news-container' },
	          _react2.default.createElement(
	            'div',
	            { styleName: 'title' },
	            _react2.default.createElement(
	              'div',
	              { styleName: 'name' },
	              '\u6700\u65B0\u8D44\u8BAF'
	            ),
	            _react2.default.createElement('div', { styleName: 'more' })
	          ),
	          _react2.default.createElement(_news2.default, null)
	        ),
	        _react2.default.createElement(
	          'div',
	          { styleName: 'bottom-container' },
	          _react2.default.createElement(
	            'span',
	            null,
	            '\u66F4\u591A\u9879\u76EE\uFF0C\u656C\u8BF7\u671F\u5F85'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'animated zoomIn', styleName: (0, _classnames2.default)("cover-container", { "active": this.state.isShowCover }) },
	          _react2.default.createElement(
	            'p',
	            null,
	            '\u94B1\u5B9D 5.0 ',
	            _react2.default.createElement('br', null),
	            '\u5F00\u542F\u4F60\u7684\u8D44\u672C\u4E4B\u8DEF'
	          ),
	          _react2.default.createElement('div', { className: 'animated fadeIn', styleName: 'img' }),
	          _react2.default.createElement(
	            'p',
	            { styleName: 'txt' },
	            '\u5F53\u524D\u8BA4\u8BC1\u7B49\u7EA7'
	          ),
	          _react2.default.createElement(
	            'h1',
	            null,
	            this.props.levelInfo.level
	          ),
	          _react2.default.createElement(
	            'span',
	            { styleName: 'btn-join', onClick: this.hideCoverHandler },
	            '\u5373\u523B\u52A0\u5165'
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderGauge',
	    value: function renderGauge(displayValue) {
	      var angle = 0.14,
	          innerAngle = angle;
	      var displayAngle = getAngle(displayValue),
	          innerDisplayAngle = displayAngle;
	      var radius = 100,
	          innerRadius = radius - 8,
	          iconRadius = radius - 16;
	      var canvas = document.getElementById("dash");
	      var ctx = canvas.getContext("2d");
	      var w = 240 / 2;
	      var h = 210 / 2;

	      ctx.strokeStyle = "rgba(173, 141, 114, 0.3)";
	      ctx.beginPath();
	      ctx.arc(w, h, radius, (1 - angle) * Math.PI, (2 + angle) * Math.PI, false);
	      ctx.lineWidth = 1;
	      ctx.lineCap = "round";
	      ctx.stroke();

	      ctx.beginPath();
	      ctx.arc(w, h, innerRadius, (1 - angle) * Math.PI, (2 + angle) * Math.PI, false);
	      ctx.setLineDash([1, 4]);
	      ctx.stroke();
	      ctx.restore();

	      ctx.strokeStyle = "#ae8e72";
	      ctx.beginPath();
	      ctx.setLineDash([]);
	      ctx.arc(w, h, radius, (1 - angle) * Math.PI, displayAngle, false);
	      ctx.stroke();

	      ctx.beginPath();
	      ctx.setLineDash([1, 3]);
	      ctx.arc(w, h, innerRadius, (1 - innerAngle) * Math.PI, innerDisplayAngle, false);
	      ctx.stroke();

	      ctx.strokeStyle = "#F6E284";
	      ctx.beginPath();
	      ctx.lineWidth = 4;
	      ctx.setLineDash([2, 1000]);
	      ctx.arc(w, h, radius, displayAngle, (2 + angle) * Math.PI, false);
	      ctx.shadowColor = '#fff';
	      ctx.shadowOffsetX = ctx.shadowOffsetY = 0;
	      ctx.shadowBlur = 5;
	      ctx.stroke();

	      var startX,
	          startY,
	          x,
	          y,
	          length = 88;
	      var img = document.createElement("img");
	      img.src = __webpack_require__(1102);
	      img.addEventListener("load", function () {
	        startX = Math.round(w + 5 * Math.cos(displayAngle - Math.PI / 2));
	        startY = Math.round(h + 7.25 * Math.sin(displayAngle - Math.PI / 2));
	        ctx.save();
	        ctx.shadowBlur = 0;
	        ctx.translate(startX, startY);
	        ctx.rotate(displayAngle + Math.PI / 2);
	        ctx.drawImage(img, 0, -length, 10, 14.5);
	        ctx.restore();
	        canvas.style.zIndex = "2";
	      }, false);

	      function getAngle(value) {
	        var min = 2.72,
	            max = 6.65;
	        return (max - min) / 100 * value + min;
	      }
	    }
	  }]);
	  return Home;
	}(_react.Component);

	;

	/*

	   <div styleName="item" onClick={()=>QBFK.Business.go('/NewsDetail/4')}>
	            <div styleName="img">
	              <img src={require("static/imgs/home/theme4.png")} alt=""/>
	            </div>
	            <div styleName="item-title">
	              QBII钱宝5.0全国巡回落幕
	              <small>一路相伴，一路前行</small>
	            </div>
	          </div>
	          <div styleName="item" onClick={()=>QBFK.Business.go('/NewsDetail/1')}>
	            <div styleName="img">
	              <img src={require("static/imgs/home/theme2.png")} alt=""/>
	            </div>
	            <div styleName="item-title">
	              全新身份QBII
	              <small>钱宝5.0时代身具跨时代新标识</small>
	            </div>
	          </div>
	          <div styleName="item" onClick={()=>QBFK.Business.go('/NewsDetail/3')}>
	            <div styleName="img">
	              <img src={require("static/imgs/home/theme1.png")} alt=""/>
	            </div>
	            <div styleName="item-title">
	              QBII的深刻解读
	              <small>让商业回归本质，守住初心</small>
	            </div>
	          </div>
	           */
	function mapStateToProps(state) {
	  return state.home;
	}

	function mapDispatchToProps(dispatch) {
	  return {
	    getLevel: function getLevel(levelInfo) {
	      dispatch({ type: 'home/getLevel', levelInfo: levelInfo });
	    },
	    getUserInfo: function getUserInfo(userInfo) {
	      dispatch({ type: 'home/getUserInfo', userInfo: userInfo });
	    },
	    getProjList: function getProjList(projList) {
	      dispatch({ type: 'home/getProjList', projList: projList });
	    },
	    getProgressInfo: function getProgressInfo(progressInfo) {
	      dispatch({ type: 'home/getProgressInfo', progressInfo: progressInfo });
	    },
	    setHelpStatus: function setHelpStatus(helpStatus) {
	      dispatch({ type: 'home/setHelpStatus', helpStatus: helpStatus });
	    }
	  };
	}
	Home.PropTypes = {
	  enterAnimation: {
	    duration: 2000,
	    animation: "slideDown"
	  },
	  leaveAnimation: {
	    duration: 2000,
	    animation: "slideUp"
	  }
	};

	exports.default = (0, _dva.connect)(mapStateToProps, mapDispatchToProps)((0, _reactCssModules2.default)(Home, _page2.default, { allowMultiple: true }));
	module.exports = exports['default'];

/***/ },
/* 491 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _promise = __webpack_require__(274);

	var _promise2 = _interopRequireDefault(_promise);

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactCssModules = __webpack_require__(87);

	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

	var _page = __webpack_require__(621);

	var _page2 = _interopRequireDefault(_page);

	var _ui = __webpack_require__(116);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IconDoc = function (_Component) {
	  (0, _inherits3.default)(IconDoc, _Component);

	  function IconDoc(props) {
	    (0, _classCallCheck3.default)(this, IconDoc);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (IconDoc.__proto__ || (0, _getPrototypeOf2.default)(IconDoc)).call(this, props));

	    _this.state = {
	      txt: ''
	    };
	    var url = __webpack_require__(459);
	    getText(url).then(function (data) {
	      _this.setState({
	        txt: data
	      });
	    }, function (error) {
	      console.error('Error:', error);
	    });
	    return _this;
	  }

	  (0, _createClass3.default)(IconDoc, [{
	    key: 'render',
	    value: function render() {
	      var txt = this.state.txt;

	      if (txt === '') return '';
	      var icons = txt.match(/icon-[A-Za-z0-9-]+(?=")/gm);
	      console.log('Icons count:' + icons.length);
	      return _react2.default.createElement(
	        'div',
	        { styleName: 'home-container' },
	        _react2.default.createElement(
	          'ul',
	          { styleName: 'icons' },
	          _react2.default.createElement(
	            'li',
	            null,
	            _react2.default.createElement(_ui.Icon, { name: 'spinner', color: '#427cf3', size: '32', styleName: 'loading' }),
	            _react2.default.createElement(
	              'span',
	              { styleName: 'title' },
	              'spinner'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            null,
	            _react2.default.createElement(_ui.Icon, { name: 'home3', color: '#427cf3', size: '32', style: { opacity: 0.4 } }),
	            _react2.default.createElement(
	              'span',
	              { styleName: 'title' },
	              'home3'
	            )
	          ),
	          icons.map(function (item, index) {
	            item = item.replace(/icon-/ig, '');
	            return _react2.default.createElement(
	              'li',
	              { key: index },
	              _react2.default.createElement(_ui.Icon, { name: item, color: '#427cf3', size: '32' }),
	              _react2.default.createElement(
	                'span',
	                { styleName: 'title' },
	                item
	              )
	            );
	          })
	        )
	      );
	    }
	  }]);
	  return IconDoc;
	}(_react.Component);

	function getText(url) {
	  var promise = new _promise2.default(function (resolve, reject) {
	    var client = new XMLHttpRequest();
	    client.open("GET", url);
	    client.onreadystatechange = handler;
	    client.responseType = "text";
	    client.setRequestHeader("Accept", "text/plan");
	    client.send();

	    function handler() {
	      if (this.readyState !== 4) {
	        return;
	      }
	      if (this.status === 200) {
	        resolve(this.response);
	      } else {
	        reject(new Error(this.statusText));
	      }
	    }
	  });

	  return promise;
	};

	exports.default = (0, _reactCssModules2.default)(IconDoc, _page2.default, { allowMultiple: true });
	module.exports = exports['default'];

/***/ },
/* 492 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _objectDestructuringEmpty2 = __webpack_require__(512);

	var _objectDestructuringEmpty3 = _interopRequireDefault(_objectDestructuringEmpty2);

	var _stringify = __webpack_require__(272);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(23);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _velocityReact = __webpack_require__(59);

	__webpack_require__(611);

	var _vedio = __webpack_require__(270);

	var _vedio2 = _interopRequireDefault(_vedio);

	var _swipe = __webpack_require__(159);

	var _swipe2 = _interopRequireDefault(_swipe);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Banner = function (_Component) {
	    (0, _inherits3.default)(Banner, _Component);

	    function Banner(props) {
	        (0, _classCallCheck3.default)(this, Banner);
	        return (0, _possibleConstructorReturn3.default)(this, (Banner.__proto__ || (0, _getPrototypeOf2.default)(Banner)).call(this, props));
	    }

	    (0, _createClass3.default)(Banner, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {}
	    }, {
	        key: "typeShow",
	        value: function typeShow(type, item, i) {
	            switch (type) {
	                case "image":
	                    {
	                        return _react2.default.createElement(
	                            "div",
	                            { key: i, className: "order-banner-item" },
	                            _react2.default.createElement("img", { src: item.url })
	                        );
	                    }
	                case "video":
	                    {
	                        return _react2.default.createElement(
	                            "div",
	                            { key: i, className: "order-banner-item" },
	                            _react2.default.createElement(_vedio2.default, { bgUrl: item.url, src: item.data })
	                        );
	                    }
	                default:
	                    {
	                        return (0, _stringify2.default)(type);
	                    }
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props,
	                className = _props.className,
	                step = _props.step;
	            var items = this.props.items;

	            var i = 0,
	                length = items.length,
	                $lis = [],
	                self = this;
	            while (i < length) {
	                var item = items[i];
	                i += 1;
	                $lis.push(self.typeShow(item.category, item, i));
	            }

	            return _react2.default.createElement(
	                "div",
	                { className: "order-banner " + className },
	                length >= 2 ? _react2.default.createElement(
	                    _swipe2.default,
	                    { min: -(length - 1) * step, step: step, className: "order-banner-items" },
	                    $lis
	                ) : $lis
	            );
	        }
	    }, {
	        key: "isSwipe",
	        value: function isSwipe(length) {
	            if (length < 1) {
	                return;
	            }
	        }
	    }]);
	    return Banner;
	}(_react.Component);

	var Item = function (_Component2) {
	    (0, _inherits3.default)(Item, _Component2);

	    function Item(props) {
	        (0, _classCallCheck3.default)(this, Item);
	        return (0, _possibleConstructorReturn3.default)(this, (Item.__proto__ || (0, _getPrototypeOf2.default)(Item)).call(this, props));
	    }

	    (0, _createClass3.default)(Item, [{
	        key: "render",
	        value: function render() {
	            (0, _objectDestructuringEmpty3.default)(this.props);


	            return _react2.default.createElement(
	                "div",
	                { className: "order-banner" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "order-banner-items" },
	                    _react2.default.createElement("div", { className: "order-banner-item" })
	                )
	            );
	        }
	    }]);
	    return Item;
	}(_react.Component);

	Banner.defaultProps = {
	    title: "",
	    items: [],
	    className: "",
	    step: window.innerWidth
	};

	exports.default = Banner;
	module.exports = exports["default"];

/***/ },
/* 493 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(23);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _velocityReact = __webpack_require__(59);

	__webpack_require__(612);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var GrideView = function (_Component) {
	    (0, _inherits3.default)(GrideView, _Component);

	    function GrideView(props) {
	        (0, _classCallCheck3.default)(this, GrideView);
	        return (0, _possibleConstructorReturn3.default)(this, (GrideView.__proto__ || (0, _getPrototypeOf2.default)(GrideView)).call(this, props));
	    }

	    (0, _createClass3.default)(GrideView, [{
	        key: "render",
	        value: function render() {
	            var items = this.props.items;

	            var i = 0,
	                length = items.length,
	                $lis = [];
	            while (i < length) {
	                var item = items[i];
	                i += 1;
	                $lis.push(_react2.default.createElement(
	                    "li",
	                    { key: i },
	                    _react2.default.createElement(
	                        "span",
	                        null,
	                        item.title
	                    ),
	                    _react2.default.createElement(
	                        "span",
	                        null,
	                        item.data
	                    )
	                ));
	            }
	            return _react2.default.createElement(
	                "ul",
	                { className: "party-plan" },
	                $lis
	            );
	        }
	    }]);
	    return GrideView;
	}(_react.Component);

	GrideView.defaultProps = {
	    title: "",
	    items: []
	};

	exports.default = GrideView;
	module.exports = exports["default"];

/***/ },
/* 494 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Info = function (_Component) {
	    (0, _inherits3.default)(Info, _Component);

	    function Info(props) {
	        (0, _classCallCheck3.default)(this, Info);
	        return (0, _possibleConstructorReturn3.default)(this, (Info.__proto__ || (0, _getPrototypeOf2.default)(Info)).call(this, props));
	    }

	    (0, _createClass3.default)(Info, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'p',
	                null,
	                '\u519C\u4E1A\u9886\u57DF\uFF1A',
	                _react2.default.createElement('br', null),
	                '1.\u79D1\u6280\u60E0\u519C\uFF0C\u9AD8\u6548\u5B89\u5168',
	                _react2.default.createElement('br', null),
	                '\u201C\u96E8\u7530\u4E00\u53F7\u201D\u5177\u6709\u4F5C\u4E1A\u9AD8\u5EA6\u4F4E\uFF0C\u98D8\u79FB\u5C11\uFF0C\u53EF\u7A7A\u4E2D\u60AC\u505C\uFF0C\u65E0\u9700\u4E13\u7528\u8D77\u964D\u673A\u573A\uFF0C\u53EF\u8FDC\u8DDD\u79BB\u9065\u63A7\u64CD\u4F5C\uFF0C\u63D0\u9AD8\u4E86\u55B7\u6D12\u4F5C\u4E1A\u5B89\u5168\u6027\u7B49\u8BF8\u591A\u4F18\u70B9\u3002',
	                _react2.default.createElement('br', null),
	                _react2.default.createElement('br', null),
	                '2.\u8282\u7EA6\u519C\u836F\u53CA\u7528\u6C34\u91CF\uFF0C\u964D\u4F4E\u6210\u672C',
	                _react2.default.createElement('br', null),
	                '\u65E0\u4EBA\u76F4\u5347\u673A\u55B7\u6D12\u6280\u672F\u91C7\u7528\u6C34\u96FE\u55B7\u6D12\u7684\u65B9\u5F0F\uFF0C\u81F3\u5C11\u53EF\u4EE5\u8282\u7EA620%\u4EE5\u4E0A\u7684\u519C\u836F\u4F7F\u7528\u91CF\uFF0C\u540C\u6BD4\u4EBA\u5DE5\u64CD\u4F5C\u8282\u6C3490%\uFF0C\u6781\u5927\u7684\u964D\u4F4E\u4E86\u4F7F\u7528\u6210\u672C\u3002',
	                _react2.default.createElement('br', null),
	                _react2.default.createElement('br', null),
	                '3.\u8986\u76D6\u5BC6\u5EA6\u9AD8\uFF0C\u9632\u6CBB\u6548\u679C\u597D',
	                _react2.default.createElement('br', null),
	                '\u55B7\u96FE\u836F\u6DB2\u5728\u5355\u4F4D\u9762\u79EF\u4E0A\u8986\u76D6\u5BC6\u5EA6\u8D8A\u9AD8\u3001\u8D8A\u5747\u5300\uFF0C\u9632\u6CBB\u6548\u679C\u5C31\u8D8A\u597D\u3002\u5728\u836F\u6DB2\u96FE\u6EF4\u98D8\u79FB\u8BD5\u9A8C\u53CD\u6620\u4E86\u7528\u65E0\u4EBA\u673A\u55B7\u6D12\u4F5C\u4E1A\u5BF9\u519C\u836F\u98D8\u5931\u7A0B\u5EA6\u7684\u4E00\u4E2A\u4F18\u52BF\uFF0C\u4F5C\u4E1A\u9AD8\u5EA6\u6BD4\u8F83\u4F4E\uFF0C\u5F53\u836F\u6DB2\u96FE\u6EF4\u4ECE\u55B7\u6D12\u5668\u55B7\u51FA\u65F6\u88AB\u65CB\u7FFC\u7684\u5411\u4E0B\u6C14\u6D41\u52A0\u901F\u5F62\u6210\u6C14\u96FE\u6D41\uFF0C\u76F4\u63A5\u589E\u52A0\u4E86\u836F\u6DB2\u96FE\u6EF4\u5BF9\u519C\u4F5C\u7269\u7684\u7A7F\u900F\u6027\uFF0C\u51CF\u5C11\u4E86\u519C\u836F\u98D8\u5931\u7A0B\u5EA6\uFF0C\u5E76\u4E14\u836F\u6DB2\u6C89\u79EF\u91CF\u548C\u836F\u6DB2\u8986\u76D6\u7387\u90FD\u4F18\u4E8E\u5E38\u89C4\uFF0C\u56E0\u800C\u9632\u6CBB\u6548\u679C\u6BD4\u4F20\u7EDF\u7684\u597D\uFF0C\u8FD8\u53EF\u4EE5\u9632\u6B62\u519C\u836F\u5BF9\u571F\u58E4\u9020\u6210\u6C61\u67D3\u3002',
	                _react2.default.createElement('br', null),
	                _react2.default.createElement('br', null),
	                '\u5DE5\u4E1A\u9886\u57DF\uFF1A',
	                _react2.default.createElement('br', null),
	                '1.\u822A\u62CD\u822A\u6D4B',
	                _react2.default.createElement('br', null),
	                '\u5229\u7528\u643A\u5E26\u6444\u50CF\u673A\u88C5\u7F6E\u7684\u65E0\u4EBA\u673A\uFF0C\u5F00\u5C55\u5927\u89C4\u6A21\u822A\u62CD\uFF0C\u5B9E\u73B0\u7A7A\u4E2D\u4FEF\u77B0\u7684\u6548\u679C\u3002\u901A\u8FC7\u4E13\u4E1A\u7EA7\u7684\u822A\u62CD\u6765\u4E3A\u67D0\u4E00\u9886\u57DF\u63D0\u4F9B\u8D44\u6599\uFF0C\u5728\u672A\u6765\u5DE5\u7A0B\u6D4B\u91CF\u9886\u57DF\u5F97\u5230\u5E7F\u6CDB\u5E94\u7528\u3002',
	                _react2.default.createElement('br', null),
	                _react2.default.createElement('br', null),
	                '2.\u7535\u529B\u5DE1\u68C0',
	                _react2.default.createElement('br', null),
	                '\u6211\u56FD\u7535\u7F51\u89C4\u6A21\u5DF2\u8DC3\u5C45\u4E16\u754C\u9996\u4F4D\uFF0C\u56FD\u571F\u5E45\u5458\u8FBD\u9614\uFF0C\u5730\u5F62\u76F8\u5BF9\u590D\u6742\uFF0C\u6C14\u8C61\u6761\u4EF6\u7684\u590D\u6742\u591A\u53D8\u3002\u4F20\u7EDF\u7684\u4EBA\u5DE5\u5DE1\u68C0\u65B9\u5F0F\u5B58\u5728\u6548\u7387\u4F4E\u4E0B\u3001\u96BE\u4EE5\u7BA1\u63A7\u3001\u5371\u9669\u6027\u9AD8\u548C\u53D7\u5236\u4E8E\u5929\u6C14\u7B49\u95EE\u9898\u3002\u800C\u901A\u8FC7\u65E0\u4EBA\u673A\u5DE1\u7EBF\uFF0C\u4E0D\u4EC5\u53EF\u4EE5\u5BF9\u8F93\u7535\u7EBF\u8DEF\u672C\u4F53\u7F3A\u9677\u3001\u901A\u9053\u9690\u60A3\u8FDB\u884C\u5FEB\u901F\u68C0\u6D4B\uFF0C\u8FD8\u80FD\u5728\u5404\u79CD\u590D\u6742\u5730\u5F62\u3001\u6076\u52A3\u6C14\u5019\u3001\u707E\u5BB3\u5929\u6C14\u4E0B\uFF0C\u53CA\u65F6\u3001\u51C6\u786E\u3001\u9AD8\u6548\u5730\u83B7\u53D6\u73B0\u573A\u4FE1\u606F\uFF0C\u56E0\u6B64\u53EF\u4EE3\u66FF\u4EBA\u5DE5\u53BB\u5B8C\u6210\u4E00\u4E9B\u5371\u9669\u7684\u4EFB\u52A1\u3002\u66F4\u91CD\u8981\u7684\u662F\uFF0C\u65E0\u4EBA\u673A\u5DE1\u7EBF\u63D0\u9AD8\u4E86\u7535\u529B\u7EF4\u62A4\u68C0\u4FEE\u7684\u901F\u5EA6\u548C\u6548\u7387\uFF0C\u4F7F\u8BB8\u591A\u5DE5\u4F5C\u80FD\u5728\u5B8C\u5168\u5E26\u7535\u7684\u60C5\u51B5\u4E0B\u8FC5\u901F\u5B8C\u6210\uFF0C\u6BD4\u4EBA\u5DE5\u5DE1\u7EBF\u6548\u7387\u9AD8\u51FA40\u500D\u3002',
	                _react2.default.createElement('br', null),
	                _react2.default.createElement('br', null),
	                '3.\u6D88\u9632\u5E94\u7528',
	                _react2.default.createElement('br', null),
	                '\u4E00\u76F4\u4EE5\u6765\uFF0C\u706B\u707E\u90FD\u662F\u7ED9\u4EBA\u7C7B\u751F\u547D\u8D22\u4EA7\u5B89\u5168\u5E26\u6765\u5DE8\u5927\u5371\u5BB3\u7684\u707E\u96BE\u4E4B\u4E00\u3002\u4E00\u65B9\u9762\uFF0C\u65E0\u4EBA\u673A\u7CFB\u7EDF\u53EF\u4EE5\u9AD8\u6548\u5730\u5B8C\u6210\u5DE1\u62A4\u4EFB\u52A1\uFF0C\u53CA\u65F6\u53D1\u73B0\u706B\u60C5\u9690\u60A3\uFF0C\u4E3A\u9632\u706B\u5DE5\u4F5C\u63D0\u4F9B\u4FBF\u5229\u3002\u53E6\u4E00\u65B9\u9762\uFF0C\u5F53\u706B\u707E\u53D1\u751F\u65F6\uFF0C\u65E0\u4EBA\u673A\u53EF\u642D\u8F7D\u7EA2\u5916\u548C\u53EF\u89C1\u5149\u6444\u50CF\u673A\u76D1\u6D4B\u706B\u707E\uFF0C\u7ECF\u6570\u63A7\u9065\u6D4B\u7535\u8DEF\u5B9E\u65F6\u4F20\u8F93\u5230\u5730\u9762\u63A7\u5236\u7AD9\uFF0C\u5C06\u706B\u70B9\u3001\u70ED\u70B9\u663E\u793A\u5728\u5730\u9762\u7AD9\u7684\u6570\u5B57\u5730\u56FE\u4E0A\uFF0C\u7ECF\u8FC7\u8BC6\u522B\u7CFB\u7EDF\u786E\u5B9A\u662F\u5426\u662F\u706B\u70B9\uFF0C\u5E76\u8FDB\u884C\u7CBE\u786E\u7684\u706B\u70B9\u5B9A\u4F4D\uFF0C\u4E3A\u5730\u9762\u6D88\u9632\u90E8\u95E8\u7B2C\u4E00\u65F6\u95F4\u63D0\u4F9B\u706B\u573A\u5730\u7406\u5750\u6807\uFF08\u7ECF\u3001\u7EAC\u5EA6\uFF09\u3002\u5F53\u65E0\u4EBA\u673A\u5728\u706B\u573A\u4E0A\u65B9\u98DE\u884C\u65F6\uFF0C\u8FD8\u53EF\u5C06\u706B\u573A\u7684\u8F6E\u5ED3\u3001\u9762\u79EF\u3001\u8513\u5EF6\u901F\u5EA6\u7B49\u6570\u636E\u5B9E\u65F6\u4F20\u56DE\u5730\u9762\u63A7\u5236\u4E2D\u5FC3\uFF0C\u4E3A\u5730\u9762\u6251\u706B\u6307\u6325\u63D0\u4F9B\u53EF\u9760\u4FE1\u606F\uFF0C\u4F7F\u706D\u706B\u6307\u6325\u90E8\u95E8\u8FC5\u901F\u6709\u6548\u5730\u7EC4\u7EC7\u3001\u5E03\u7F72\u706D\u706B\u961F\u4F0D\uFF0C\u63D0\u9AD8\u706D\u706B\u4F5C\u6218\u6548\u7387\uFF0C\u9632\u6B62\u6551\u706B\u4EBA\u5458\u7684\u4F24\u4EA1\u3002',
	                _react2.default.createElement('br', null),
	                _react2.default.createElement('br', null),
	                '4.\u73AF\u4FDD\u5E94\u7528',
	                _react2.default.createElement('br', null),
	                '\u65E0\u4EBA\u673A\u56E0\u4E3A\u4E0D\u53D7\u7A7A\u95F4\u4E0E\u5730\u5F62\u9650\u5236\uFF0C\u6548\u6027\u5F3A\uFF0C\u673A\u52A8\u6027\u597D\uFF0C\u5DE1\u67E5\u8303\u56F4\u5E7F\u7B49\u4F18\u70B9\uFF0C\u6267\u6CD5\u90E8\u95E8\u80FD\u591F\u8F7B\u6613\u7684\u5229\u7528\u5B83\u6765\u627E\u5230\u6C61\u67D3\u6E90\u5934\u548C\u6D4B\u8BD5\u6C61\u67D3\u7A0B\u5EA6\u3002\u5E76\u4E14\u80FD\u5229\u7528\u643A\u5E26\u4E86\u50AC\u5316\u5242\u548C\u6C14\u8C61\u63A2\u6D4B\u8BBE\u7684\u65E0\u4EBA\u673A\u5728\u7A7A\u4E2D\u8FDB\u884C\u55B7\u6492\uFF0C\u4E0E\u65E0\u4EBA\u673A\u64AD\u6492\u519C\u836F\u7684\u5DE5\u4F5C\u539F\u7406\u4E00\u6837\uFF0C\u5728\u4E00\u5B9A\u533A\u57DF\u5185\u6D88\u9664\u96FE\u973E\u3002',
	                _react2.default.createElement('br', null),
	                _react2.default.createElement('br', null),
	                '\u6D88\u8D39\u5A31\u4E50\uFF1A',
	                _react2.default.createElement('br', null),
	                '1.VR\u6E38\u620F ',
	                _react2.default.createElement('br', null),
	                '\u901A\u8FC7\u642D\u8F7D\u9AD8\u6E05\u6444\u50CF\u5934\u53CAVR\u773C\u955C\uFF0C\u80FD\u591A\u89D2\u5EA6\u62CD\u6444\u4FEF\u77B0\u753B\u9762\uFF0C\u8FBE\u5230\u8EAB\u4E34\u5176\u5883\u7684\u98DE\u884C\u4F53\u9A8C\u3002  ',
	                _react2.default.createElement('br', null)
	            );
	        }
	    }]);
	    return Info;
	}(_react.Component);
	/*
	<Chart projectId={this.props.routeParams.projectId}/>
	 */


	Info.defaultProps = {
	    type: 1
	};

	exports.default = Info;

	//export default withRouter(OrderInfo);

	//<div className="theme-img"></div>  <button><span className="step-download"></span></button>

	module.exports = exports['default'];

/***/ },
/* 495 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(23);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _velocityReact = __webpack_require__(59);

	var _area = __webpack_require__(160);

	var _area2 = _interopRequireDefault(_area);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*class ListView extends Component {
	    constructor(props) {
	        super(props);
	        
	    }
	    render() {
	        return (
	            <Area className="area-margin" title="产品明细" hasIcon={true} hasLine={true}>
	                <Items items={this.props.items}/>
	            </Area> 
	        )
	    }
	}
	ListView.defaultProps = {
	    title:"",
	    items:[]
	}*/

	var ListView = function (_Component) {
	    (0, _inherits3.default)(ListView, _Component);

	    function ListView(props) {
	        (0, _classCallCheck3.default)(this, ListView);
	        return (0, _possibleConstructorReturn3.default)(this, (ListView.__proto__ || (0, _getPrototypeOf2.default)(ListView)).call(this, props));
	    }

	    (0, _createClass3.default)(ListView, [{
	        key: "render",
	        value: function render() {
	            var items = this.props.items;

	            var i = 0,
	                length = items.length,
	                $lis = [];
	            while (i < length) {
	                var item = items[i];
	                i += 1;
	                $lis.push(_react2.default.createElement(
	                    "li",
	                    { key: i },
	                    _react2.default.createElement(
	                        "span",
	                        null,
	                        item.title
	                    ),
	                    _react2.default.createElement(
	                        "span",
	                        null,
	                        item.data
	                    )
	                ));
	            }
	            return _react2.default.createElement(
	                "ul",
	                { className: "area-rows" },
	                $lis
	            );
	        }
	    }]);
	    return ListView;
	}(_react.Component);
	/*
	<li><span>目标规模</span><span></span><span>{data.target/10000+"万"}</span></li>
	                    <li><span>管理机构</span><span>{data.organization}</span></li>
	                    <li><span>投资方向</span><span>{data.direction}</span></li>
	                    <li><span>资本类型</span><span>{data.assetsType}</span></li>
	                    <li><span>组织形式</span><span>{data.organizationType}</span></li>
	                    <li><span>结构化</span><span>{data.structured}</span></li>
	                    <li><span>犹豫期</span><span>7天</span></li>
	                    <li><span>退出方式</span>{this.renderArrayInfo(data.exitWay)}</li>*/

	ListView.defaultProps = {
	    items: []
	};

	exports.default = ListView;
	module.exports = exports["default"];

/***/ },
/* 496 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(29);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(117);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _dva = __webpack_require__(64);

	var _reactRouter = __webpack_require__(72);

	var _isObject = __webpack_require__(26);

	var _isObject2 = _interopRequireDefault(_isObject);

	var _isArray = __webpack_require__(13);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _fetch = __webpack_require__(60);

	var _util = __webpack_require__(79);

	var _info = __webpack_require__(494);

	var _info2 = _interopRequireDefault(_info);

	var _banner = __webpack_require__(492);

	var _banner2 = _interopRequireDefault(_banner);

	var _grideView = __webpack_require__(493);

	var _grideView2 = _interopRequireDefault(_grideView);

	var _listView = __webpack_require__(495);

	var _listView2 = _interopRequireDefault(_listView);

	var _textView = __webpack_require__(497);

	var _textView2 = _interopRequireDefault(_textView);

	__webpack_require__(613);

	var _vedio = __webpack_require__(270);

	var _vedio2 = _interopRequireDefault(_vedio);

	var _area = __webpack_require__(160);

	var _area2 = _interopRequireDefault(_area);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import Chart from "./chart.js";

	//var moment = require('moment');

	var OrderInfo = function (_Component) {
	    (0, _inherits3.default)(OrderInfo, _Component);

	    function OrderInfo(props) {
	        var _data;

	        (0, _classCallCheck3.default)(this, OrderInfo);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (OrderInfo.__proto__ || (0, _getPrototypeOf2.default)(OrderInfo)).call(this, props));

	        _this.state = {
	            heart: false,
	            data: (_data = {
	                name: "",
	                duration: "", //存续期限
	                direction: "", //投资方向 1股权
	                minPrice: "", //认购起点
	                des: "", //特色亮点,
	                target: "", //目标规模
	                organization: "", //管理机构
	                // direction //投资方向
	                assetsType: "", // type//资本类型 1-本土
	                organizationType: "", //组织形式  1-有限合伙制
	                structured: "", //结构化 . 1-是，2-否
	                exitWay: ["", ""], //退出形式
	                trusteeFee: ["", ""], //认购费 .
	                managementFee: ["", ""] }, (0, _defineProperty3.default)(_data, 'trusteeFee', ["", ""]), (0, _defineProperty3.default)(_data, 'profit', ""), (0, _defineProperty3.default)(_data, 'pics', ["", "", ""]), (0, _defineProperty3.default)(_data, 'video', ""), (0, _defineProperty3.default)(_data, 'applyFee', ["", ""]), _data),
	            startDate: _this.formate(),
	            endDate: _this.formate(2),
	            disabled: false,
	            now: false
	        };

	        _this.getData = _this.getData.bind(_this);
	        _this.handThink = _this.handThink.bind(_this);
	        _this.handHeart = _this.handHeart.bind(_this);
	        return _this;
	    }

	    (0, _createClass3.default)(OrderInfo, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var levelName = (0, _util.getCookie)("level", "storage") || "暂无";
	            //debugger
	            if (levelName !== "暂无") {
	                this.setState({
	                    disabled: false
	                });
	            }

	            // const Level={"暂无":0,"C":25,"B":50,"A":75,"PRO":100,"暂无":0};
	            this.getData();
	        }
	    }, {
	        key: 'formate',
	        value: function formate(num) {
	            // var today = new Date();
	            // if(num){
	            //     today.setDate(today.getDate()+1);
	            // }
	            // //debugger
	            // return Number(today.getMonth()+1)+"-"+today.getDate();

	            var today = new Date();
	            if (num) {
	                today.setDate(today.getDate() + num);
	            }
	            var month = Number(today.getMonth() + 1);
	            var date = today.getDate();
	            return (month < 10 ? "0" + month : month) + "-" + (date < 10 ? "0" + date : date);
	        }
	    }, {
	        key: 'getData',
	        value: function getData() {
	            var self = this;
	            var projectId = this.props.routeParams.projectId;

	            (0, _fetch.fetchPosts)("/api/page/" + projectId, {}, "GET").then(function (data) {

	                self.setState({
	                    data: data.result.page
	                });
	            });
	        }
	    }, {
	        key: 'formateData',
	        value: function formateData(data, oldData) {
	            var newState = {};
	            for (var key in data) {
	                var temp = {};

	                if ((0, _isObject2.default)(data[key]) && !(0, _isArray2.default)(data[key])) {
	                    temp = this.formateData(data[key], oldData);
	                } else if (oldData[key] !== undefined) {
	                    newState[key] = data[key];
	                }
	                newState = (0, _extends3.default)(newState, temp);
	            }
	            return newState;
	        }
	    }, {
	        key: 'handThink',
	        value: function handThink() {
	            if (this.state.disabled === true) {
	                return false;
	            }
	            var projectId = this.props.routeParams.projectId;
	            //this.props.router.push({pathname:"/orderconfirm/"+projectId,state:{minPrice:this.state.data.minPrice},query: { modal: true }});

	            this.context.router.push({ pathname: "/orderconfirm/" + projectId, state: { minPrice: this.state.data.minPrice / 10000, maxPrice: this.state.data.target / 10000 } });
	            //query: { modal: true },state: { fromDashboard: true }
	        }
	    }, {
	        key: 'handHeart',
	        value: function handHeart() {
	            this.setState({
	                heart: !this.state.heart
	            });
	        }
	    }, {
	        key: 'typeShow',
	        value: function typeShow(type, items, i) {

	            switch (type) {
	                case "banner":
	                    {
	                        return _react2.default.createElement(_banner2.default, { key: i, className: 'party-head', items: items });
	                    }
	                case "grideView":
	                    {
	                        return _react2.default.createElement(_grideView2.default, { key: i, items: items });
	                    }
	                // case "tap":{
	                //     return (<GrideView items={items}/>);
	                // }
	                case "textView":
	                    {
	                        return _react2.default.createElement(_textView2.default, { key: i, items: items });
	                    }
	                case "listView":
	                    {
	                        return _react2.default.createElement(_listView2.default, { key: i, items: items });
	                    }
	                default:
	                    {
	                        //return (JSON.stringify(type));
	                        return undefined;
	                    }
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _state = this.state,
	                data = _state.data,
	                heart = _state.heart,
	                startDate = _state.startDate,
	                endDate = _state.endDate;

	            var modules = data.modules || [];
	            var i = 0,
	                length = modules.length,
	                $lis = [],
	                self = this;
	            while (i < length) {

	                var modular = modules[i];
	                i += 1;
	                console.info(modular);

	                if (!modular || !modular.items) {
	                    continue;
	                }
	                var items = modular.items,
	                    category = modular.category,
	                    title = modular.title;


	                if (title && title.text) {
	                    //debugger
	                    var hadIcon = "textView,listView".indexOf(category) >= 0 ? true : false;
	                    var className = "grideView".indexOf(category) >= 0 ? "" : "area-margin ";
	                    $lis.push(_react2.default.createElement(
	                        _area2.default,
	                        { key: i, className: className, title: title.text, hasIcon: hadIcon, hasLine: hadIcon },
	                        self.typeShow(category, items, i)
	                    ));
	                } else {
	                    $lis.push(self.typeShow(category, items, i));
	                }
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'party-info' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'party-temp' },
	                    $lis
	                )
	            );
	        }
	    }, {
	        key: 'renderArrayInfo',
	        value: function renderArrayInfo(param) {
	            if (!param) {
	                retunr(_react2.default.createElement('div', { className: 'area-p' }));
	            }
	            var re = [];
	            for (var i = 0; i < param.length; i++) {
	                re.push(_react2.default.createElement(
	                    'p',
	                    { key: i },
	                    param[i]
	                ));
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'area-p' },
	                re
	            );
	        }
	    }]);
	    return OrderInfo;
	}(_react.Component);

	OrderInfo.defaultProps = {};

	OrderInfo.contextTypes = {
	    router: _react2.default.PropTypes.object.isRequired
	};
	exports.default = OrderInfo;


	{/*<Banner className="party-head"/>
	                       <Area className="" title={"系双方的时间开放"} hasIcon={false}>
	                           <GrideView items={tempGrideViewData}/>
	                       </Area>
	                       <Area className="area-margin area-bottom" title="项目解析" hasIcon={false}>
	                           <Vedio bgUrl={data.pics[2]} src={data.video}/>
	                       </Area>
	                        <Area className="area-margin" title={"特色亮点"} hasIcon={true} hasLine={true} isClose={true}>
	                           <TextView content={"ddsskdskdkdksdiiiiiiiiiiiiiiiiiiiiiiiikks"} />
	                       </Area>
	                        <Area className="area-margin" title="募集说明" hasIcon={false}>
	                           <div className="party-step">
	                               <div className="step-row">
	                                   <span>申购</span>
	                                   <span>确认份额</span>
	                               </div>
	                               <div className="step-row step-arrow">
	                               </div>
	                               <div className="step-row">
	                                   <span>{startDate}</span>
	                                   <span>{endDate}</span>
	                                   <span>持有中</span>
	                               </div>
	                               <p>现在申购，<span className="date">{endDate.replace("-","月")+"日"}</span>确认份额后产生收益</p>
	                           </div>
	                       </Area>
	                        <ListView title="产品明细" items={tempListViewData}/>*/}
	module.exports = exports['default'];

/***/ },
/* 497 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(23);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _velocityReact = __webpack_require__(59);

	var _area = __webpack_require__(160);

	var _area2 = _interopRequireDefault(_area);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TextView = function (_Component) {
	    (0, _inherits3.default)(TextView, _Component);

	    function TextView(props) {
	        (0, _classCallCheck3.default)(this, TextView);
	        return (0, _possibleConstructorReturn3.default)(this, (TextView.__proto__ || (0, _getPrototypeOf2.default)(TextView)).call(this, props));
	    }

	    (0, _createClass3.default)(TextView, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props,
	                title = _props.title,
	                items = _props.items;


	            return _react2.default.createElement(
	                "div",
	                { className: "area-p area-duan" },
	                items && items[0].data
	            );
	        }
	    }]);
	    return TextView;
	}(_react.Component);

	TextView.defaultProps = {
	    title: "",
	    item: []
	};

	exports.default = TextView;
	module.exports = exports["default"];

/***/ },
/* 498 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(29);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(614);

	var _reactRouter = __webpack_require__(72);

	var _fetch = __webpack_require__(60);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import { createCORSRequest } from 'libs/util'
	// 

	var viHtml = '<div><p></p><p></p><p></p><p></p><p></p></div>';

	var NewsDetail = function (_Component) {
	    (0, _inherits3.default)(NewsDetail, _Component);

	    function NewsDetail(props, context) {
	        (0, _classCallCheck3.default)(this, NewsDetail);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (NewsDetail.__proto__ || (0, _getPrototypeOf2.default)(NewsDetail)).call(this, props, context));

	        _this.state = {
	            detail: false
	        };
	        return _this;
	    }

	    (0, _createClass3.default)(NewsDetail, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var projectId = this.props.routeParams.projectId;

	            var self = this;
	            //console.log(projectId)
	            ///qbii-app/
	            var time = Date.now();
	            (0, _fetch.fetchPosts)("/api/news/getNewsDetail", { id: Number(projectId) }, "GET").then(function (data) {
	                //console.log('返回结果为:',data.result.newsDetail);
	                //debugger;
	                var lTime = Date.now();
	                var timeout = lTime - time < 1000 ? 1000 - (lTime - time) : 0;
	                //setTimeout(function(){
	                if (data.code == 0) {
	                    self.setState({
	                        detail: data.result.newsDetail
	                    });
	                }
	                //},timeout)
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var detail = this.state.detail;

	            var className = " newsDetail-loading-hide",
	                info = detail;
	            var newProps = {};

	            if (detail === false) {
	                className = ""; //mask-loading mask-loading-vi
	                newProps.dangerouslySetInnerHTML = { __html: viHtml };
	                info = {};
	                //return this.laoding(className);
	            } else {
	                newProps.dangerouslySetInnerHTML = { __html: decodeURIComponent(info.content) };
	                //console.log(info.content)
	            }

	            // let className = detail===false?" mask-loading mask-loading-vi":" ";
	            // let info = detail===false?{}:detail;
	            return _react2.default.createElement(
	                'div',
	                { className: "newsDetail-container" },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'newsDetail-head ' },
	                    _react2.default.createElement(
	                        'h2',
	                        null,
	                        info.title
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'newsDetail-auth-info' },
	                        _react2.default.createElement(
	                            'em',
	                            null,
	                            info.createTime && info.createTime.substring(0, 10)
	                        ),
	                        _react2.default.createElement(
	                            'em',
	                            null,
	                            info.author
	                        ),
	                        _react2.default.createElement('em', null)
	                    )
	                ),
	                _react2.default.createElement('div', (0, _extends3.default)({ className: 'newsDetail-body' }, newProps)),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'newsDetail-footer' },
	                    _react2.default.createElement(
	                        'em',
	                        null,
	                        '\u9605\u8BFB'
	                    ),
	                    _react2.default.createElement(
	                        'em',
	                        null,
	                        info.watched
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'laoding',
	        value: function laoding(className) {
	            return _react2.default.createElement(
	                'div',
	                { className: "newsDetail-container newsDetail-loading " + className },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'newsDetail-head ' },
	                    _react2.default.createElement('h2', null),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'newsDetail-auth-info' },
	                        _react2.default.createElement('em', null),
	                        _react2.default.createElement('em', null),
	                        _react2.default.createElement('em', null)
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'newsDetail-body' },
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement('p', null),
	                        _react2.default.createElement('p', null),
	                        _react2.default.createElement('p', null),
	                        _react2.default.createElement('p', null),
	                        _react2.default.createElement('p', null)
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'newsDetail-footer' },
	                    _react2.default.createElement('em', null),
	                    _react2.default.createElement('em', null)
	                )
	            );
	        }
	    }]);
	    return NewsDetail;
	}(_react.Component);

	exports.default = NewsDetail;
	module.exports = exports['default'];

/***/ },
/* 499 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(23);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	__webpack_require__(615);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Input = function (_Component) {
	    (0, _inherits3.default)(Input, _Component);

	    function Input(props) {
	        (0, _classCallCheck3.default)(this, Input);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call(this, props));

	        _this.handFocus = _this.handFocus.bind(_this);
	        _this.handBlur = _this.handBlur.bind(_this);
	        _this.handChange = _this.handChange.bind(_this);
	        _this.state = {
	            value: ""
	        };
	        return _this;
	    }

	    (0, _createClass3.default)(Input, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {}
	    }, {
	        key: "handFocus",
	        value: function handFocus() {
	            var $in = _reactDom2.default.findDOMNode(this.refs.input);
	            $in.focus();
	        }
	    }, {
	        key: "handChange",
	        value: function handChange(e) {
	            var maxLength = this.props.maxLength;

	            this.setState({
	                value: e.target.value.substr(0, maxLength)
	            });
	        }
	    }, {
	        key: "handBlur",
	        value: function handBlur() {
	            var _props = this.props,
	                onChange = _props.onChange,
	                name = _props.name;

	            onChange && onChange(name, this.state.value);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props2 = this.props,
	                className = _props2.className,
	                title = _props2.title,
	                maxLength = _props2.maxLength,
	                placeholder = _props2.placeholder,
	                type = _props2.type;
	            var value = this.state.value;


	            var inProps = {
	                placeholder: title,
	                value: value,
	                maxLength: maxLength,
	                type: type,
	                ref: "input",
	                onChange: this.handChange,
	                onBlur: this.handBlur
	            };
	            return _react2.default.createElement(
	                "div",
	                { className: "virtual-input " + className },
	                _react2.default.createElement("input", inProps)
	            );
	        }
	    }]);
	    return Input;
	}(_react.Component);
	//onClick={this.handFocus}


	Input.defaultProps = {
	    maxLength: 20,
	    title: "请传入一个title",
	    className: "",
	    placeholder: "",
	    name: "必须要有一个name",
	    type: "text"
	};

	//  <label>{title}</label>
	//                <i></i>


	exports.default = Input;

	/**
	 * 
	 * 
	 * type: 'success',
	    buttonConfirm: function () {
	    },
	    errorShow: false,
	 */
	//<div className="theme-img"></div>

	module.exports = exports["default"];

/***/ },
/* 500 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(29);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(23);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	__webpack_require__(616);

	var _fetch = __webpack_require__(60);

	var _reactRouter = __webpack_require__(72);

	var _isNumber = __webpack_require__(202);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _each = __webpack_require__(342);

	var _each2 = _interopRequireDefault(_each);

	var _size = __webpack_require__(350);

	var _size2 = _interopRequireDefault(_size);

	var _ui = __webpack_require__(116);

	var _input = __webpack_require__(499);

	var _input2 = _interopRequireDefault(_input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var OrderConfirm = function (_Component) {
	    (0, _inherits3.default)(OrderConfirm, _Component);

	    function OrderConfirm(props) {
	        (0, _classCallCheck3.default)(this, OrderConfirm);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (OrderConfirm.__proto__ || (0, _getPrototypeOf2.default)(OrderConfirm)).call(this, props));

	        _this.state = {
	            showData: {
	                investmentNum: 10, //投资金额
	                estimateMoney: "", //钱宝可赚
	                estimatePer: 140, //预计百分比
	                bankMoney: "", //银行可赚
	                bankPer: 17, //
	                totalNum: "", //合计
	                cycleYear: 5 //周期 年
	            },
	            modelData: {
	                name: '',
	                phone: '',
	                orderId: false
	            },
	            disabled: false,
	            show: false,
	            errorShow: false,
	            values: {},
	            errorMsgs: {
	                name: "姓名不能为空！",
	                phone: "联系电话不能为空！"
	            },
	            eMsg: "",
	            minPrice: 10,
	            maxPrice: 100
	        };
	        _this.moneyCalculate = _this.moneyCalculate.bind(_this);
	        _this.handOk = _this.handOk.bind(_this);
	        _this.operate = _this.operate.bind(_this);
	        _this.handChange = _this.handChange.bind(_this);
	        _this.handBlur = _this.handBlur.bind(_this);

	        _this.hangInChange = _this.hangInChange.bind(_this);
	        return _this;
	    }

	    (0, _createClass3.default)(OrderConfirm, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            //if() minPrice
	            //debugger
	            var _ref = this.props.location && this.props.location.state,
	                minPrice = _ref.minPrice,
	                maxPrice = _ref.maxPrice;

	            if (!minPrice) {
	                this.context.router.push({ pathname: "/" });
	            }
	            //let maxPrice = 1000;
	            var showData = this.state.showData;

	            showData.investmentNum = minPrice;
	            this.setState({
	                minPrice: minPrice,
	                maxPrice: maxPrice,
	                showData: (0, _extends3.default)({}, showData, this.moneyCalculate(showData))
	            });
	        }
	    }, {
	        key: "handBlur",
	        value: function handBlur() {
	            //&&value>=this.state.minPrice
	            //debugger;
	            //ReactDom.findDOMNode(this.refs.temp).focus();
	            if (this.state.showData.investmentNum < this.state.minPrice) {
	                this.setState({
	                    disabled: true,
	                    eMsg: "起投金额不能小于" + this.state.minPrice + "万"
	                });
	                alert("起投金额不能小于" + this.state.minPrice + "万");
	                //return ;
	            } else if (this.state.showData.investmentNum > this.state.maxPrice) {
	                this.setState({
	                    disabled: true,
	                    eMsg: "起投金额不能大于" + this.state.maxPrice + "万"
	                });
	                alert("起投金额不能大于" + this.state.maxPrice + "万");
	                // return ;
	            } else {
	                this.setState({
	                    disabled: false,
	                    showData: (0, _extends3.default)({}, this.state.showData, this.moneyCalculate(this.state.showData))
	                });
	            }
	        }
	    }, {
	        key: "moneyCalculate",
	        value: function moneyCalculate(data) {
	            var newState = {};
	            var investmentNum = data.investmentNum,
	                estimatePer = data.estimatePer,
	                bankPer = data.bankPer,
	                cycleYear = data.cycleYear;

	            newState.estimateMoney = this.calculate(investmentNum, estimatePer, cycleYear);
	            newState.bankMoney = this.calculate(investmentNum, bankPer, cycleYear);
	            newState.totalNum = investmentNum;
	            return newState;
	        }
	    }, {
	        key: "calculate",
	        value: function calculate(money, per, cycle) {
	            return (money * per * cycle / 365).toFixed(2);
	        }
	    }, {
	        key: "handOk",
	        value: function handOk() {
	            //0debugger;
	            var vaResult = true,
	                errorMsg = this.state.eMsg;
	            var _state = this.state,
	                values = _state.values,
	                errorMsgs = _state.errorMsgs,
	                showData = _state.showData;

	            (0, _each2.default)(errorMsgs, function (one, key) {
	                if (one !== true) {
	                    vaResult = false;
	                    errorMsg = one;
	                    return false;
	                }
	            });
	            //debugger
	            if (this.state.disabled === true || vaResult === false || (0, _size2.default)(errorMsgs) != 2) {
	                alert(errorMsg);
	                return;
	            }

	            this.setState({
	                disabled: true
	            });
	            var self = this;
	            var projectId = this.props.routeParams.projectId;

	            values.amount = Number(showData.investmentNum) * 10000;
	            //debugger;
	            (0, _fetch.fetchPosts)("/api/project/" + projectId + "/apply", values, "POST").then(function (data) {
	                //debugger;
	                if (data.code === 0) {
	                    data = data.result;
	                    self.setState({
	                        modelData: {
	                            name: data.user.realName,
	                            phone: data.user.phoneNo,
	                            orderId: data.orderId
	                        },
	                        disabled: false,
	                        show: true
	                    });
	                } else {
	                    alert(data.message);
	                    self.setState({
	                        disabled: false
	                    });

	                    // self.props.router.push({pathname:"/orderinfo/"+projectId});

	                    //self.props.router.push({pathname:"/"});
	                }

	                //consoel.log("niya . sha b ",data);
	                //modelData
	            }).catch(function () {
	                self.setState({
	                    disabled: false
	                });
	                //alert("系统繁忙，请稍后再试！");
	                // let data = {user:{name:"呵呵",phone:"11111111111"}}
	                // self.setState({
	                //     modelData:{
	                //         name:data.user.name,
	                //         phone:data.user.phone,
	                //         orderId:data.orderId
	                //     },
	                //     disabled:false,
	                //     show:true
	                // })
	            });
	            //this.props.router.push({pathname:"/home"})
	            //
	        }
	    }, {
	        key: "handChange",
	        value: function handChange(event) {
	            var value = event.target.value.substr(0, 140);
	            value = Number(value);
	            //debugger
	            if ((0, _isNumber2.default)(value) && value <= 10000) {
	                this.setState({
	                    showData: (0, _extends3.default)({}, this.state.showData, { investmentNum: value })
	                });
	                console.log((0, _extends3.default)({}, this.state.showData, { investmentNum: value }));
	            }
	        }
	    }, {
	        key: "operate",
	        value: function operate(data) {
	            var projectId = this.props.routeParams.projectId;
	            //this.props.router.push({pathname:"/orderinfo/"+projectId});

	            this.props.history.push({ pathname: "/" });
	        }
	    }, {
	        key: "hangInChange",
	        value: function hangInChange(name, value) {
	            //ReactDom.findDOMNode(this.refs.temp).focus();

	            var errorMsg = true,
	                newState = {};
	            //debugger
	            if (!value) {
	                errorMsg = (name === 'name' ? "姓名" : "联系电话") + "不能为空";
	                //ReactDom.findDOMNode(this.refs.temp).focus();
	            } else if (name === "phone" && !/^1(3|4|5|7|8)\d{9}$/.test(value)) {
	                errorMsg = "手机号码错误";
	            }

	            var newValue = {},
	                newMsg = {};
	            newValue[name] = value;
	            newMsg[name] = errorMsg;

	            if (errorMsg === true) {
	                newState.values = (0, _extends3.default)({}, this.state.values, newValue);
	                newState.errorMsgs = (0, _extends3.default)({}, this.state.errorMsgs, newMsg);
	            } else {
	                newState.errorMsgs = (0, _extends3.default)({}, this.state.errorMsgs, newMsg);
	                //alert(errorMsg);
	                //ReactDom.findDOMNode(this.refs.temp).focus();
	                //return ;
	            }

	            this.setState(newState);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;

	            var inputProps = this.props.inputProps;
	            var _state$showData = this.state.showData,
	                investmentNum = _state$showData.investmentNum,
	                estimateMoney = _state$showData.estimateMoney,
	                bankMoney = _state$showData.bankMoney,
	                totalNum = _state$showData.totalNum;

	            return _react2.default.createElement(
	                "div",
	                { className: "order-confirm" },
	                _react2.default.createElement("input", { type: "hidden", ref: "temp" }),
	                _react2.default.createElement(
	                    "div",
	                    { className: "order-join" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "join-top" },
	                        _react2.default.createElement(
	                            "span",
	                            null,
	                            "\u6211\u8981\u6295(\u4E07\u5143)"
	                        ),
	                        _react2.default.createElement("input", { type: "input", value: investmentNum, onChange: this.handChange, onBlur: this.handBlur })
	                    ),
	                    _react2.default.createElement("div", { className: "join-slide hide" })
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "order-clause" },
	                    _react2.default.createElement(
	                        "p",
	                        { className: "order-clause-new" },
	                        "\u4E2A\u4EBA\u4FE1\u606F"
	                    ),
	                    _react2.default.createElement(_input2.default, (0, _extends3.default)({}, inputProps.name, { onChange: this.hangInChange })),
	                    _react2.default.createElement(_input2.default, (0, _extends3.default)({}, inputProps.phone, { onChange: this.hangInChange }))
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "order-sure" },
	                    _react2.default.createElement(
	                        "p",
	                        null,
	                        "\u5408\u8BA1:",
	                        _react2.default.createElement(
	                            "span",
	                            null,
	                            "\xA5",
	                            totalNum,
	                            "\u4E07"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "button",
	                        { onClick: this.handOk },
	                        "\u786E\u8BA4"
	                    )
	                ),
	                _react2.default.createElement(_ui.Dialog, { errorShow: this.state.errorShow, buttonConfirm: function buttonConfirm(data) {
	                        return _this2.operate(data);
	                    }, show: this.state.show, data: this.state.modelData })
	            );
	        }
	    }]);
	    return OrderConfirm;
	}(_react.Component);

	OrderConfirm.defaultProps = {
	    inputProps: {
	        name: {
	            title: "姓名",
	            name: "name",
	            maxLength: 10
	        },
	        phone: {
	            title: "联系电话",
	            name: "phone",
	            maxLength: 11,
	            type: "text"
	        }

	    }
	};

	OrderConfirm.contextTypes = {
	    router: _react2.default.PropTypes.object.isRequired
	};

	exports.default = OrderConfirm;

	/**
	 * 
	 * 
	 * type: 'success',
	    buttonConfirm: function () {
	    },
	    errorShow: false,



	    <ul className="order-estimate">
	                    <li className="order-estimate-one">
	                        <i></i>
	                        <span>预计到期可赚(万元)</span>
	                        <span className="estimate-money">{estimateMoney}</span>
	                    </li>
	                    <li className="order-estimate-one estimate-bank">
	                        <i></i>
	                        <span>银行同期可赚(万元)</span>
	                        <span className="estimate-money">{bankMoney}</span>
	                    </li>
	                </ul>



	 */
	//<div className="theme-img"></div>

	module.exports = exports["default"];

/***/ },
/* 501 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(29);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _scroll = __webpack_require__(269);

	var _scroll2 = _interopRequireDefault(_scroll);

	__webpack_require__(618);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Status = {
	    "待审核": "step1",
	    "已生效": "step2",
	    "已取消": "step3",
	    "已结算": "step4"
	};

	var OrderList = function (_Component) {
	    (0, _inherits3.default)(OrderList, _Component);

	    function OrderList(props) {
	        (0, _classCallCheck3.default)(this, OrderList);
	        return (0, _possibleConstructorReturn3.default)(this, (OrderList.__proto__ || (0, _getPrototypeOf2.default)(OrderList)).call(this, props));
	    }

	    (0, _createClass3.default)(OrderList, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {}
	    }, {
	        key: "renderItem",
	        value: function renderItem(item, i) {
	            //debugger;
	            var step = Status[item.statusDes] || "step1";

	            return _react2.default.createElement(
	                "div",
	                { key: i, className: "order-list-item " + step },
	                _react2.default.createElement(
	                    "p",
	                    null,
	                    item.projectName
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "exc" },
	                    item.statusDes
	                ),
	                _react2.default.createElement(
	                    "div",
	                    null,
	                    _react2.default.createElement(
	                        "span",
	                        null,
	                        item.createTime.substr(0, 10),
	                        _react2.default.createElement(
	                            "em",
	                            null,
	                            "\u4E0B\u5355\u65F6\u95F4"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "span",
	                        null,
	                        item.amountDes + "万",
	                        _react2.default.createElement(
	                            "em",
	                            null,
	                            "\u8BA2\u5355\u91D1\u989D"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "span",
	                        null,
	                        item.proportionDes,
	                        _react2.default.createElement(
	                            "em",
	                            null,
	                            "\u6295\u8D44\u989D\u5360\u6BD4"
	                        )
	                    )
	                )
	            );
	        }
	    }, {
	        key: "analysis_data",
	        value: function analysis_data(data) {
	            if (data.code === 0) {
	                return data.result.orderList;
	            }
	            return false;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var scrollOptions = this.props.scrollOptions;

	            var props = (0, _extends3.default)({}, scrollOptions, {
	                analysis_data: this.analysis_data,
	                renderItem: this.renderItem
	            });
	            return _react2.default.createElement(
	                "div",
	                { className: "container-order-list" },
	                _react2.default.createElement(_scroll2.default, props)
	            );
	        }
	    }]);
	    return OrderList;
	}(_react.Component);
	/*
	<Chart projectId={this.props.routeParams.projectId}/>
	 */


	OrderList.defaultProps = {
	    type: 1,
	    scrollOptions: {
	        url: "/api/user/userOrderList",
	        pageName: "pageNo",
	        totalProps: { className: 'order-list' }

	    }
	};

	exports.default = OrderList;

	//export default withRouter(OrderInfo);

	//<div className="theme-img"></div>  <button><span className="step-download"></span></button>

	module.exports = exports["default"];

/***/ },
/* 502 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(29);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _scroll = __webpack_require__(269);

	var _scroll2 = _interopRequireDefault(_scroll);

	__webpack_require__(619);

	var _util = __webpack_require__(79);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function toThousands(num) {
	    var num = (num || 0).toString(),
	        result = '';
	    while (num.length > 3) {
	        result = ',' + num.slice(-3) + result;
	        num = num.slice(0, num.length - 3);
	    }
	    if (num) {
	        result = num + result;
	    }
	    return result;
	};

	var ProfitList = function (_Component) {
	    (0, _inherits3.default)(ProfitList, _Component);

	    function ProfitList(props) {
	        (0, _classCallCheck3.default)(this, ProfitList);
	        return (0, _possibleConstructorReturn3.default)(this, (ProfitList.__proto__ || (0, _getPrototypeOf2.default)(ProfitList)).call(this, props));
	    }

	    (0, _createClass3.default)(ProfitList, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {}
	    }, {
	        key: "renderItem",
	        value: function renderItem(item, i) {
	            //debugger;
	            return _react2.default.createElement(
	                "div",
	                { key: i, className: "profit-list-item" },
	                _react2.default.createElement(
	                    "p",
	                    null,
	                    item.profitTime.substr(0, 7)
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "profit-list-item-main" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "profit-list-item-info" },
	                        _react2.default.createElement(
	                            "i",
	                            null,
	                            item.projectName.substr(0, 1)
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            _react2.default.createElement(
	                                "span",
	                                null,
	                                (0, _util.priceFormat)(item.totalAmount / 100) + "元"
	                            ),
	                            _react2.default.createElement(
	                                "em",
	                                null,
	                                item.projectName
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "span",
	                        { className: "item-icon-right" },
	                        _react2.default.createElement("i", null)
	                    ),
	                    _react2.default.createElement(
	                        "span",
	                        { className: "item-tab" },
	                        (0, _util.priceFormat)(item.profitAmount / 100),
	                        _react2.default.createElement(
	                            "em",
	                            null,
	                            "\u5229\u6DA6\u5206\u7EA2(\u5143)"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "span",
	                        { className: "item-tab" },
	                        (0, _util.priceFormat)(item.assetAmount / 100),
	                        _react2.default.createElement(
	                            "em",
	                            null,
	                            "\u80A1\u672C\u589E\u503C(\u5143)"
	                        )
	                    )
	                )
	            );
	        }
	    }, {
	        key: "analysis_data",
	        value: function analysis_data(data) {
	            if (data.code === 0) {
	                return data.result.profitList;
	            }
	            return false;
	        }
	    }, {
	        key: "nullRender",
	        value: function nullRender() {
	            return _react2.default.createElement(
	                "div",
	                { style: { textAlign: 'center', paddingTop: '10px' } },
	                "\u6682\u65E0\u6536\u76CA"
	            );
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var scrollOptions = this.props.scrollOptions;

	            var props = (0, _extends3.default)({}, scrollOptions, {
	                analysis_data: this.analysis_data,
	                renderItem: this.renderItem,
	                nullRender: this.nullRender
	            });
	            return _react2.default.createElement(
	                "div",
	                { className: "container-profit-list" },
	                _react2.default.createElement(_scroll2.default, props)
	            );
	        }
	    }]);
	    return ProfitList;
	}(_react.Component);

	ProfitList.defaultProps = {
	    scrollOptions: {
	        url: "/api/user/userProfitList",
	        pageName: "pageNo",
	        totalProps: { className: 'profit-list' }
	    }
	};

	exports.default = ProfitList;
	module.exports = exports["default"];

/***/ },
/* 503 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _defineProperty2 = __webpack_require__(117);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(617);

	var _ring = __webpack_require__(504);

	var _ring2 = _interopRequireDefault(_ring);

	var _ringVi = __webpack_require__(505);

	var _ringVi2 = _interopRequireDefault(_ringVi);

	var _util = __webpack_require__(79);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Level = (0, _defineProperty3.default)({ "暂无": 0, "C": 25, "B": 50, "A": 75, "PRO": 100 }, "\u6682\u65E0", 0);

	var Theme = function (_Component) {
	    (0, _inherits3.default)(Theme, _Component);

	    function Theme(props) {
	        (0, _classCallCheck3.default)(this, Theme);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (Theme.__proto__ || (0, _getPrototypeOf2.default)(Theme)).call(this, props));

	        _this.state = {
	            chooseNum: _this.getImgIndex()
	        };
	        _this.handClick = _this.handClick.bind(_this);
	        _this.renderUls = _this.renderUls.bind(_this);
	        _this.saveClick = _this.saveClick.bind(_this);

	        _this.buildImage = _this.buildImage.bind(_this);
	        return _this;
	    }

	    (0, _createClass3.default)(Theme, [{
	        key: "getImgIndex",
	        value: function getImgIndex() {
	            return window.localStorage.theme ? Number(window.localStorage.theme) : 0;
	        }
	    }, {
	        key: "saveImgIndex",
	        value: function saveImgIndex(index) {
	            //console.log("sdssdds",index)
	            window.localStorage.theme = index;
	            //保存图片 。this.urlImage 
	        }
	    }, {
	        key: "handClick",
	        value: function handClick(e) {
	            var self = this;

	            var target = e.target;
	            if (target.tagName !== "LI") {
	                target = target.parentNode;
	            }
	            var lis = e.currentTarget.querySelectorAll("li");
	            for (var i = 0; i < lis.length; i++) {
	                if (lis[i] === target) {
	                    break;
	                }
	            }

	            //console.log("设置chooseNum",i)
	            i < 6 && self.setState({
	                chooseNum: i
	            });
	        }
	        //保存主题

	    }, {
	        key: "saveClick",
	        value: function saveClick() {
	            this.saveImgIndex(this.state.chooseNum);
	            typeof QBaoJSBridge != 'undefined' && QBaoJSBridge.saveImg(this.urlImage);
	        }
	    }, {
	        key: "renderUls",
	        value: function renderUls() {
	            var data = this.props.data,
	                $lis = [],
	                chooseNum = this.state.chooseNum;
	            for (var i = 0; i < data.length; i++) {
	                $lis.push(_react2.default.createElement(
	                    "li",
	                    { key: i },
	                    _react2.default.createElement(
	                        "span",
	                        null,
	                        data[i].title
	                    ),
	                    _react2.default.createElement("span", { className: chooseNum === i ? "layer" : "layer hide" })
	                ));
	            }
	            return _react2.default.createElement(
	                "ul",
	                { className: "", onClick: this.handClick },
	                $lis
	            );
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            //console.error("父级加载")
	        }
	    }, {
	        key: "buildImage",
	        value: function buildImage(data) {
	            this.urlImage = data;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var levelName = (0, _util.getCookie)("level", "storage") || "无";
	            //debugger;
	            var level = Level[levelName];

	            //level = 20;
	            //debugger;
	            return _react2.default.createElement(
	                "div",
	                { className: "theme", style: this.props.style },
	                _react2.default.createElement(
	                    "div",
	                    { className: "header" },
	                    _react2.default.createElement("div", { className: "header-layer" }),
	                    _react2.default.createElement(_ring2.default, { showNum: this.state.chooseNum, levelName: levelName, level: level }),
	                    _react2.default.createElement(_ringVi2.default, { buildImage: this.buildImage, showNum: this.state.chooseNum, levelName: levelName, level: level })
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "content" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "menu" },
	                        _react2.default.createElement(
	                            "h2",
	                            null,
	                            "\u8BF7\u9009\u62E9\u60A8\u5206\u4EAB\u7684\u4E3B\u9898"
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "menu-box" },
	                            this.renderUls()
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "footer", onClick: this.saveClick, style: { display: 'flex' } },
	                    "\u4FDD\u5B58\u4E3B\u9898"
	                )
	            );
	        }
	    }]);
	    return Theme;
	}(_react.Component);

	Theme.defaultProps = {
	    data: [{ title: "守望者", url: "static/imgs/theme/sun-header0.jpg" }, { title: "实力派", url: "static/imgs/theme/sun-header1.jpg" }, { title: "潜行者", url: "static/imgs/theme/sun-header2.jpg" }, { title: "勇敢者", url: "static/imgs/theme/sun-header3.jpg" }, { title: "领路人", url: "static/imgs/theme/sun-header4.jpg" }, { title: "梦想家", url: "static/imgs/theme/sun-header5.jpg" }]
	};

	exports.default = Theme;
	//<Ring buildImage={this.buildImage}  showNum={this.state.chooseNum} levelName={levelName} level={level}/>
	//<div className="theme-img"></div>

	module.exports = exports["default"];

/***/ },
/* 504 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _velocityReact = __webpack_require__(59);

	var _reactDom = __webpack_require__(23);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _isArray = __webpack_require__(13);

	var _isArray2 = _interopRequireDefault(_isArray);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isFirstLoad = false;

	var Ring = function (_Component) {
	    (0, _inherits3.default)(Ring, _Component);

	    function Ring(props) {
	        (0, _classCallCheck3.default)(this, Ring);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (Ring.__proto__ || (0, _getPrototypeOf2.default)(Ring)).call(this, props));

	        _this.draw = _this.draw.bind(_this);
	        _this.state = {
	            images: false,
	            src: ""
	        };
	        return _this;
	    }

	    (0, _createClass3.default)(Ring, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var self = this;
	        }
	    }, {
	        key: "componentWillUpdate",
	        value: function componentWillUpdate(nextProps, nextState) {
	            var self = this;
	            if (nextState.images && (0, _isArray2.default)(nextState.images) && nextProps.showNum !== this.props.showNum || this.state.images == false) {
	                console.error("--------------");
	                var img = new Image();
	                //debugger
	                img.src = nextState.images[nextProps.showNum];

	                self.setState({
	                    src: nextState.images[nextProps.showNum]
	                });
	                // img.addEventListener("load",function(){
	                //     //debugger;
	                //     self.draw(70,nextState.images[nextProps.showNum],nextProps.levelName);
	                // })
	                //window.onload = function(){

	                //}
	            }
	            setTimeout(function () {
	                self.draw(nextProps.level, nextState.images[nextProps.showNum], nextProps.levelName);
	            }, 500);
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var self = this;
	            console.error("-------777777777777-------");
	            __webpack_require__.e/* nsure */(2, function (a, b, c, d) {
	                var arr = [];
	                for (var i = 0; i < 6; i++) {
	                    arr.push(__webpack_require__(474)("./sun-header" + i + ".jpg"));
	                }
	                console.error("-----111---");
	                self.setState({
	                    images: arr
	                });
	            });
	            // var self = this;

	            // setTimeout(function(){
	            //     self.draw(70,"static/imgs/theme/sun-header0.jpg","Pro");
	            // },1000)
	        }
	    }, {
	        key: "getAngle",
	        value: function getAngle(value) {
	            var min = 2.72,
	                max = 6.65;
	            return (max - min) / 100 * value + min;
	        }
	    }, {
	        key: "draw",
	        value: function draw(displayValue, url, level) {
	            var self = this;
	            var angle = 0.14,
	                innerAngle = angle;
	            var displayAngle = this.getAngle(displayValue),
	                innerDisplayAngle = displayAngle;
	            var radius = 60,
	                innerRadius = radius - 8,
	                iconRadius = radius - 16;

	            var startX,
	                startY,
	                x,
	                y,
	                length = 88;
	            var img = document.createElement("img");
	            img.src = url;
	            console.error(url);
	            img.crossOrigin = "anonymous";
	            img.addEventListener("load", function () {
	                //let ring = document.getElementById("ring");
	                //var canvas = document.getElementById("canvas");
	                var canvas = _reactDom2.default.findDOMNode(self.refs.canvas);
	                var width = canvas.offsetWidth;
	                var height = canvas.offsetHeight;

	                var wi = img.width,
	                    hi = img.height;
	                var per = height / hi;

	                canvas.width = wi * per;
	                canvas.height = canvas.offsetHeight;

	                var w = canvas.width / 2;
	                var h = 100;
	                //debugger;
	                canvas.style.width = wi * per + "px";
	                //canvas.style.marginLeft = -wi*per/2+"px";
	                //margin-left


	                var ctx = canvas.getContext("2d");
	                // ctx.drawImage(img,0,0, wi*per, hi*per);
	                // ctx.restore();

	                ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
	                ctx.beginPath();
	                ctx.arc(w, h, radius, (1 - angle) * Math.PI, (2 + angle) * Math.PI, false);
	                ctx.lineWidth = 1;
	                ctx.lineCap = "round";
	                ctx.stroke();

	                ctx.beginPath();
	                ctx.arc(w, h, innerRadius, (1 - angle) * Math.PI, (2 + angle) * Math.PI, false);
	                ctx.setLineDash([1, 4]);
	                ctx.stroke();

	                ctx.strokeStyle = "rgb(255, 255, 255)";
	                ctx.beginPath();
	                ctx.setLineDash([0]);
	                ctx.arc(w, h, radius, (1 - angle) * Math.PI, displayAngle, false);
	                ctx.stroke();

	                ctx.beginPath();
	                ctx.setLineDash([1, 3]);
	                ctx.arc(w, h, innerRadius, (1 - innerAngle) * Math.PI, innerDisplayAngle, false);
	                ctx.stroke();

	                ctx.font = "12px Helvetica";
	                ctx.textAlign = "center";
	                ctx.fillStyle = "white";
	                ctx.fillText("QBII", 116, 70);
	                ctx.fillText("认证等级", 116, 84);

	                ctx.font = "40px Helvetica";
	                ctx.fillText(level, 116, 126);

	                // var strDataURI = canvas.toDataURL("image/jpeg");

	                // self.props.buildImage(strDataURI);
	                // this.setState({
	                //     dataUrl:strDataURI
	                // })
	                //console.log(strDataURI)
	            }, false);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var levelName = this.props.levelName;
	            var src = this.state.src;

	            return _react2.default.createElement(
	                "div",
	                { className: "ring-bg", style: { backgroundImage: "url(" + src + ")" } },
	                _react2.default.createElement("canvas", { id: "canvas", ref: "canvas", className: "ring" })
	            );
	        }
	    }]);
	    return Ring;
	}(_react.Component);

	Ring.defaultProps = {
	    level: 0,
	    showNum: false,
	    levelName: "Pro",
	    totalLevel: 5,
	    buildImage: function buildImage() {}
	};

	exports.default = Ring;
	module.exports = exports["default"];

/***/ },
/* 505 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(8);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(10);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(9);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _velocityReact = __webpack_require__(59);

	var _reactDom = __webpack_require__(23);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _isArray = __webpack_require__(13);

	var _isArray2 = _interopRequireDefault(_isArray);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isFirstLoad = false;

	var RingVi = function (_Component) {
	    (0, _inherits3.default)(RingVi, _Component);

	    function RingVi(props) {
	        (0, _classCallCheck3.default)(this, RingVi);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (RingVi.__proto__ || (0, _getPrototypeOf2.default)(RingVi)).call(this, props));

	        _this.draw = _this.draw.bind(_this);
	        _this.state = {
	            images: false
	        };
	        return _this;
	    }

	    (0, _createClass3.default)(RingVi, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var self = this;
	        }
	    }, {
	        key: "componentWillUpdate",
	        value: function componentWillUpdate(nextProps, nextState) {
	            var self = this;
	            if (nextState.images && (0, _isArray2.default)(nextState.images) && nextProps.showNum !== this.props.showNum || this.state.images == false) {
	                console.error("--------------");
	                var img = new Image();
	                //debugger
	                img.src = nextState.images[nextProps.showNum];
	                // img.addEventListener("load",function(){
	                //     //debugger;
	                //     self.draw(70,nextState.images[nextProps.showNum],nextProps.levelName);
	                // })
	                //window.onload = function(){

	                //}
	            }
	            setTimeout(function () {
	                self.draw(nextProps.level, nextState.images[nextProps.showNum], nextProps.levelName);
	            }, 500);
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var self = this;
	            console.error("-------777777777777-------");
	            __webpack_require__.e/* nsure */(2/* duplicate */, function (a, b, c, d) {
	                var arr = [];
	                for (var i = 0; i < 6; i++) {
	                    arr.push(__webpack_require__(474)("./sun-header" + i + ".jpg"));
	                }
	                console.error("-----111---");
	                self.setState({
	                    images: arr
	                });
	            });
	            // var self = this;

	            // setTimeout(function(){
	            //     self.draw(70,"static/imgs/theme/sun-header0.jpg","Pro");
	            // },1000)
	        }
	    }, {
	        key: "getAngle",
	        value: function getAngle(value) {
	            var min = 2.72,
	                max = 6.65;
	            return (max - min) / 100 * value + min;
	        }
	    }, {
	        key: "draw",
	        value: function draw(displayValue, url, level) {
	            var self = this;
	            var angle = 0.14,
	                innerAngle = angle;
	            var displayAngle = this.getAngle(displayValue),
	                innerDisplayAngle = displayAngle;
	            var radius = 80,
	                innerRadius = radius - 8,
	                iconRadius = radius - 16;

	            var startX,
	                startY,
	                x,
	                y,
	                length = 88;
	            var img = document.createElement("img");
	            img.src = url;
	            console.error(url);
	            img.crossOrigin = "anonymous";
	            img.addEventListener("load", function () {
	                //let RingVi = document.getElementById("RingVi");
	                //var canvas = document.getElementById("canvas");
	                var canvas = _reactDom2.default.findDOMNode(self.refs["canvas-vi"]);

	                var width = window.innerWidth;
	                var height = window.innerHeight;

	                var wi = img.width,
	                    hi = img.height;
	                var per = height / hi;

	                canvas.width = wi * per;
	                canvas.height = canvas.offsetHeight;

	                var w = width / 2;
	                var h = height * 0.24;
	                //debugger;
	                canvas.style.width = wi * per + "px";
	                //canvas.style.marginLeft = -wi*per/2+"px";
	                //margin-left


	                var ctx = canvas.getContext("2d");
	                ctx.drawImage(img, 0, 0, width, height);
	                ctx.restore();

	                ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
	                ctx.beginPath();
	                ctx.arc(w, h, radius, (1 - angle) * Math.PI, (2 + angle) * Math.PI, false);
	                ctx.lineWidth = 1;
	                ctx.lineCap = "round";
	                ctx.stroke();

	                ctx.beginPath();
	                ctx.arc(w, h, innerRadius, (1 - angle) * Math.PI, (2 + angle) * Math.PI, false);
	                ctx.setLineDash([1, 4]);
	                ctx.stroke();

	                ctx.strokeStyle = "rgb(255, 255, 255)";
	                ctx.beginPath();
	                ctx.setLineDash([0]);
	                ctx.arc(w, h, radius, (1 - angle) * Math.PI, displayAngle, false);
	                ctx.stroke();

	                ctx.beginPath();
	                ctx.setLineDash([1, 3]);
	                ctx.arc(w, h, innerRadius, (1 - innerAngle) * Math.PI, innerDisplayAngle, false);
	                ctx.stroke();

	                ctx.font = "12px Helvetica";
	                ctx.textAlign = "center";
	                ctx.fillStyle = "white";
	                ctx.fillText("QBII", w, h - 30);
	                ctx.fillText("认证等级", w, h - 16);

	                ctx.font = "36px Helvetica";
	                ctx.fillText(level, w, h + 26);

	                var strDataURI = canvas.toDataURL("image/jpeg");

	                self.props.buildImage(strDataURI);
	                // this.setState({
	                //     dataUrl:strDataURI
	                // })
	                console.log(strDataURI);
	            }, false);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var levelName = this.props.levelName;

	            return _react2.default.createElement("canvas", { id: "canvas-vi", ref: "canvas-vi", className: "ring-vi" });
	        }
	    }]);
	    return RingVi;
	}(_react.Component);

	RingVi.defaultProps = {
	    level: 0,
	    showNum: false,
	    levelName: "Pro",
	    totalLevel: 5,
	    buildImage: function buildImage() {}
	};

	exports.default = RingVi;
	module.exports = exports["default"];

/***/ },
/* 506 */,
/* 507 */,
/* 508 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(517), __esModule: true };

/***/ },
/* 509 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(521), __esModule: true };

/***/ },
/* 510 */,
/* 511 */,
/* 512 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (obj) {
	  if (obj == null) throw new TypeError("Cannot destructure undefined");
	};

/***/ },
/* 513 */,
/* 514 */,
/* 515 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(19)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 516 */,
/* 517 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(551);
	var $Object = __webpack_require__(19).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 518 */,
/* 519 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(553);
	module.exports = __webpack_require__(19).Object.getPrototypeOf;

/***/ },
/* 520 */,
/* 521 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(555);
	module.exports = __webpack_require__(19).Object.setPrototypeOf;

/***/ },
/* 522 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(291);
	__webpack_require__(122);
	__webpack_require__(177);
	__webpack_require__(556);
	module.exports = __webpack_require__(19).Promise;

/***/ },
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(80)
	  , call        = __webpack_require__(281)
	  , isArrayIter = __webpack_require__(280)
	  , anObject    = __webpack_require__(43)
	  , toLength    = __webpack_require__(172)
	  , getIterFn   = __webpack_require__(176)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 531 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
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
	  } return              fn.apply(that, args);
	};

/***/ },
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(30)
	  , macrotask = __webpack_require__(290).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(100)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(62);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 542 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(82)
	  , anObject = __webpack_require__(43);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(80)(Function.call, __webpack_require__(284).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 543 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(30)
	  , core        = __webpack_require__(19)
	  , dP          = __webpack_require__(45)
	  , DESCRIPTORS = __webpack_require__(51)
	  , SPECIES     = __webpack_require__(28)('species');

	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 544 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(43)
	  , aFunction = __webpack_require__(163)
	  , SPECIES   = __webpack_require__(28)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(44)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(167)});

/***/ },
/* 552 */,
/* 553 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(103)
	  , $getPrototypeOf = __webpack_require__(286);

	__webpack_require__(288)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 554 */,
/* 555 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(44);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(542).set});

/***/ },
/* 556 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(118)
	  , global             = __webpack_require__(30)
	  , ctx                = __webpack_require__(80)
	  , classof            = __webpack_require__(276)
	  , $export            = __webpack_require__(44)
	  , isObject           = __webpack_require__(82)
	  , aFunction          = __webpack_require__(163)
	  , anInstance         = __webpack_require__(526)
	  , forOf              = __webpack_require__(530)
	  , speciesConstructor = __webpack_require__(544)
	  , task               = __webpack_require__(290).set
	  , microtask          = __webpack_require__(537)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(28)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(541)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(120)($Promise, PROMISE);
	__webpack_require__(543)(PROMISE);
	Wrapper = __webpack_require__(19)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(283)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _routerWarning = __webpack_require__(20);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _InternalPropTypes = __webpack_require__(65);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * A mixin that adds the "history" instance variable to components.
	 */
	var History = {

	  contextTypes: {
	    history: _InternalPropTypes.history
	  },

	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'the `History` mixin is deprecated, please access `context.router` with your own `contextTypes`. http://tiny.cc/router-historymixin') : void 0;
	    this.history = this.context.history;
	  }
	};

	exports.default = History;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 579 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Link = __webpack_require__(299);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */
	var IndexLink = _react2.default.createClass({
	  displayName: 'IndexLink',
	  render: function render() {
	    return _react2.default.createElement(_Link2.default, _extends({}, this.props, { onlyActiveOnIndex: true }));
	  }
	});

	exports.default = IndexLink;
	module.exports = exports['default'];

/***/ },
/* 580 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(20);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(25);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Redirect = __webpack_require__(300);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	var _InternalPropTypes = __webpack_require__(65);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */

	var IndexRedirect = _react2.default.createClass({
	  displayName: 'IndexRedirect',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = _Redirect2.default.createRouteFromReactElement(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRedirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 581 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(20);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(25);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(52);

	var _InternalPropTypes = __webpack_require__(65);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var func = _react2.default.PropTypes.func;

	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */

	var IndexRoute = _react2.default.createClass({
	  displayName: 'IndexRoute',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = (0, _RouteUtils.createRouteFromReactElement)(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    path: _InternalPropTypes.falsy,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRoute;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 582 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _routerWarning = __webpack_require__(20);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(25);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var object = _react2.default.PropTypes.object;

	/**
	 * The Lifecycle mixin adds the routerWillLeave lifecycle method to a
	 * component that may be used to cancel a transition or prompt the user
	 * for confirmation.
	 *
	 * On standard transitions, routerWillLeave receives a single argument: the
	 * location we're transitioning to. To cancel the transition, return false.
	 * To prompt the user for confirmation, return a prompt message (string).
	 *
	 * During the beforeunload event (assuming you're using the useBeforeUnload
	 * history enhancer), routerWillLeave does not receive a location object
	 * because it isn't possible for us to know the location we're transitioning
	 * to. In this case routerWillLeave must return a prompt message to prevent
	 * the user from closing the window/tab.
	 */

	var Lifecycle = {

	  contextTypes: {
	    history: object.isRequired,
	    // Nested children receive the route as context, either
	    // set by the route component using the RouteContext mixin
	    // or by some other ancestor.
	    route: object
	  },

	  propTypes: {
	    // Route components receive the route object as a prop.
	    route: object
	  },

	  componentDidMount: function componentDidMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'the `Lifecycle` mixin is deprecated, please use `context.router.setRouteLeaveHook(route, hook)`. http://tiny.cc/router-lifecyclemixin') : void 0;
	    !this.routerWillLeave ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin requires you to define a routerWillLeave method') : (0, _invariant2.default)(false) : void 0;

	    var route = this.props.route || this.context.route;

	    !route ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin must be used on either a) a <Route component> or ' + 'b) a descendant of a <Route component> that uses the RouteContext mixin') : (0, _invariant2.default)(false) : void 0;

	    this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(route, this.routerWillLeave);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlistenBeforeLeavingRoute) this._unlistenBeforeLeavingRoute();
	  }
	};

	exports.default = Lifecycle;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 583 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(25);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(52);

	var _InternalPropTypes = __webpack_require__(65);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;

	/**
	 * A <Route> is used to declare which components are rendered to the
	 * page when the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is
	 * requested, the tree is searched depth-first to find a route whose
	 * path matches the URL.  When one is found, all routes in the tree
	 * that lead to it are considered "active" and their components are
	 * rendered into the DOM, nested in the same order as in the tree.
	 */

	var Route = _react2.default.createClass({
	  displayName: 'Route',


	  statics: {
	    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
	  },

	  propTypes: {
	    path: string,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Route> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Route;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 584 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _routerWarning = __webpack_require__(20);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var object = _react2.default.PropTypes.object;

	/**
	 * The RouteContext mixin provides a convenient way for route
	 * components to set the route in context. This is needed for
	 * routes that render elements that want to use the Lifecycle
	 * mixin to prevent transitions.
	 */

	var RouteContext = {

	  propTypes: {
	    route: object.isRequired
	  },

	  childContextTypes: {
	    route: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      route: this.props.route
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'The `RouteContext` mixin is deprecated. You can provide `this.props.route` on context with your own `contextTypes`. http://tiny.cc/router-routecontextmixin') : void 0;
	  }
	};

	exports.default = RouteContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 585 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createHashHistory = __webpack_require__(314);

	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

	var _useQueries = __webpack_require__(126);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _invariant = __webpack_require__(25);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _createTransitionManager = __webpack_require__(181);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _InternalPropTypes = __webpack_require__(65);

	var _RouterContext = __webpack_require__(123);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _RouteUtils = __webpack_require__(52);

	var _RouterUtils = __webpack_require__(301);

	var _routerWarning = __webpack_require__(20);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function isDeprecatedHistory(history) {
	  return !history || !history.__v2_compatible__;
	}

	/* istanbul ignore next: sanity check */
	function isUnsupportedHistory(history) {
	  // v3 histories expose getCurrentLocation, but aren't currently supported.
	  return history && history.getCurrentLocation;
	}

	var _React$PropTypes = _react2.default.PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RouterContext> with all the props
	 * it needs each time the URL changes.
	 */

	var Router = _react2.default.createClass({
	  displayName: 'Router',


	  propTypes: {
	    history: object,
	    children: _InternalPropTypes.routes,
	    routes: _InternalPropTypes.routes, // alias for children
	    render: func,
	    createElement: func,
	    onError: func,
	    onUpdate: func,

	    // Deprecated:
	    parseQueryString: func,
	    stringifyQuery: func,

	    // PRIVATE: For client-side rehydration of server match.
	    matchContext: object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      render: function render(props) {
	        return _react2.default.createElement(_RouterContext2.default, props);
	      }
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  },
	  handleError: function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    var _props = this.props;
	    var parseQueryString = _props.parseQueryString;
	    var stringifyQuery = _props.stringifyQuery;

	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!(parseQueryString || stringifyQuery), '`parseQueryString` and `stringifyQuery` are deprecated. Please create a custom history. http://tiny.cc/router-customquerystring') : void 0;

	    var _createRouterObjects = this.createRouterObjects();

	    var history = _createRouterObjects.history;
	    var transitionManager = _createRouterObjects.transitionManager;
	    var router = _createRouterObjects.router;


	    this._unlisten = transitionManager.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });

	    this.history = history;
	    this.router = router;
	  },
	  createRouterObjects: function createRouterObjects() {
	    var matchContext = this.props.matchContext;

	    if (matchContext) {
	      return matchContext;
	    }

	    var history = this.props.history;
	    var _props2 = this.props;
	    var routes = _props2.routes;
	    var children = _props2.children;


	    !!isUnsupportedHistory(history) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You have provided a history object created with history v3.x. ' + 'This version of React Router is not compatible with v3 history ' + 'objects. Please use history v2.x instead.') : (0, _invariant2.default)(false) : void 0;

	    if (isDeprecatedHistory(history)) {
	      history = this.wrapDeprecatedHistory(history);
	    }

	    var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes || children));
	    var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
	    var routingHistory = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

	    return { history: routingHistory, transitionManager: transitionManager, router: router };
	  },
	  wrapDeprecatedHistory: function wrapDeprecatedHistory(history) {
	    var _props3 = this.props;
	    var parseQueryString = _props3.parseQueryString;
	    var stringifyQuery = _props3.stringifyQuery;


	    var createHistory = void 0;
	    if (history) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'It appears you have provided a deprecated history object to `<Router/>`, please use a history provided by ' + 'React Router with `import { browserHistory } from \'react-router\'` or `import { hashHistory } from \'react-router\'`. ' + 'If you are using a custom history please create it with `useRouterHistory`, see http://tiny.cc/router-usinghistory for details.') : void 0;
	      createHistory = function createHistory() {
	        return history;
	      };
	    } else {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`Router` no longer defaults the history prop to hash history. Please use the `hashHistory` singleton instead. http://tiny.cc/router-defaulthistory') : void 0;
	      createHistory = _createHashHistory2.default;
	    }

	    return (0, _useQueries2.default)(createHistory)({ parseQueryString: parseQueryString, stringifyQuery: stringifyQuery });
	  },


	  /* istanbul ignore next: sanity check */
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : void 0;

	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : void 0;
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  },
	  render: function render() {
	    var _state = this.state;
	    var location = _state.location;
	    var routes = _state.routes;
	    var params = _state.params;
	    var components = _state.components;
	    var _props4 = this.props;
	    var createElement = _props4.createElement;
	    var render = _props4.render;

	    var props = _objectWithoutProperties(_props4, ['createElement', 'render']);

	    if (location == null) return null; // Async match

	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });

	    return render(_extends({}, props, {
	      history: this.history,
	      router: this.router,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components,
	      createElement: createElement
	    }));
	  }
	});

	exports.default = Router;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 586 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _RouterContext = __webpack_require__(123);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _routerWarning = __webpack_require__(20);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RoutingContext = _react2.default.createClass({
	  displayName: 'RoutingContext',
	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`RoutingContext` has been renamed to `RouterContext`. Please use `import { RouterContext } from \'react-router\'`. http://tiny.cc/router-routercontext') : void 0;
	  },
	  render: function render() {
	    return _react2.default.createElement(_RouterContext2.default, this.props);
	  }
	});

	exports.default = RoutingContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 587 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runChangeHooks = runChangeHooks;
	exports.runLeaveHooks = runLeaveHooks;

	var _AsyncUtils = __webpack_require__(179);

	var _routerWarning = __webpack_require__(20);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createTransitionHook(hook, route, asyncArity) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    hook.apply(route, args);

	    if (hook.length < asyncArity) {
	      var callback = args[args.length - 1];
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };
	}

	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3));

	    return hooks;
	  }, []);
	}

	function getChangeHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4));
	    return hooks;
	  }, []);
	}

	function runTransitionHooks(length, iter, callback) {
	  if (!length) {
	    callback();
	    return;
	  }

	  var redirectInfo = void 0;
	  function replace(location, deprecatedPathname, deprecatedQuery) {
	    if (deprecatedPathname) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`replaceState(state, pathname, query) is deprecated; use `replace(location)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
	      redirectInfo = {
	        pathname: deprecatedPathname,
	        query: deprecatedQuery,
	        state: location
	      };

	      return;
	    }

	    redirectInfo = location;
	  }

	  (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
	    iter(index, replace, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}

	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runEnterHooks(routes, nextState, callback) {
	  var hooks = getEnterHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    hooks[index](nextState, replace, next);
	  }, callback);
	}

	/**
	 * Runs all onChange hooks in the given array of routes in order
	 * with onChange(prevState, nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runChangeHooks(routes, state, nextState, callback) {
	  var hooks = getChangeHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    hooks[index](state, nextState, replace, next);
	  }, callback);
	}

	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */
	function runLeaveHooks(routes, prevState) {
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    if (routes[i].onLeave) routes[i].onLeave.call(routes[i], prevState);
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 588 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _RouterContext = __webpack_require__(123);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _routerWarning = __webpack_require__(20);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    middlewares.forEach(function (middleware, index) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(middleware.renderRouterContext || middleware.renderRouteComponent, 'The middleware specified at index ' + index + ' does not appear to be ' + 'a valid React Router middleware.') : void 0;
	    });
	  }

	  var withContext = middlewares.map(function (middleware) {
	    return middleware.renderRouterContext;
	  }).filter(Boolean);
	  var withComponent = middlewares.map(function (middleware) {
	    return middleware.renderRouteComponent;
	  }).filter(Boolean);

	  var makeCreateElement = function makeCreateElement() {
	    var baseCreateElement = arguments.length <= 0 || arguments[0] === undefined ? _react.createElement : arguments[0];
	    return function (Component, props) {
	      return withComponent.reduceRight(function (previous, renderRouteComponent) {
	        return renderRouteComponent(previous, props);
	      }, baseCreateElement(Component, props));
	    };
	  };

	  return function (renderProps) {
	    return withContext.reduceRight(function (previous, renderRouterContext) {
	      return renderRouterContext(previous, renderProps);
	    }, _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, {
	      createElement: makeCreateElement(renderProps.createElement)
	    })));
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 589 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createBrowserHistory = __webpack_require__(623);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _createRouterHistory = __webpack_require__(303);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createRouterHistory2.default)(_createBrowserHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 590 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(84);

	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;

	  var paramNames = (0, _PatternUtils.getParamNames)(route.path);

	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}

	/**
	 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 *
	 * changeRoutes are any routes that didn't leave or enter during
	 * the transition.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;

	  var leaveRoutes = void 0,
	      changeRoutes = void 0,
	      enterRoutes = void 0;
	  if (prevRoutes) {
	    (function () {
	      var parentIsLeaving = false;
	      leaveRoutes = prevRoutes.filter(function (route) {
	        if (parentIsLeaving) {
	          return true;
	        } else {
	          var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	          if (isLeaving) parentIsLeaving = true;
	          return isLeaving;
	        }
	      });

	      // onLeave hooks start at the leaf route.
	      leaveRoutes.reverse();

	      enterRoutes = [];
	      changeRoutes = [];

	      nextRoutes.forEach(function (route) {
	        var isNew = prevRoutes.indexOf(route) === -1;
	        var paramsChanged = leaveRoutes.indexOf(route) !== -1;

	        if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
	      });
	    })();
	  } else {
	    leaveRoutes = [];
	    changeRoutes = [];
	    enterRoutes = nextRoutes;
	  }

	  return {
	    leaveRoutes: leaveRoutes,
	    changeRoutes: changeRoutes,
	    enterRoutes: enterRoutes
	  };
	}

	exports.default = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },
/* 591 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(179);

	var _makeStateWithLocation = __webpack_require__(305);

	var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getComponentsForRoute(nextState, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	    return;
	  }

	  var getComponent = route.getComponent || route.getComponents;
	  if (!getComponent) {
	    callback();
	    return;
	  }

	  var location = nextState.location;

	  var nextStateWithLocation = (0, _makeStateWithLocation2.default)(nextState, location);

	  getComponent.call(route, nextStateWithLocation, callback);
	}

	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  (0, _AsyncUtils.mapAsync)(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState, route, callback);
	  }, callback);
	}

	exports.default = getComponents;
	module.exports = exports['default'];

/***/ },
/* 592 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(84);

	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};

	  if (!route.path) return routeParams;

	  (0, _PatternUtils.getParamNames)(route.path).forEach(function (p) {
	    if (Object.prototype.hasOwnProperty.call(params, p)) {
	      routeParams[p] = params[p];
	    }
	  });

	  return routeParams;
	}

	exports.default = getRouteParams;
	module.exports = exports['default'];

/***/ },
/* 593 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createMemoryHistory = exports.hashHistory = exports.browserHistory = exports.applyRouterMiddleware = exports.formatPattern = exports.useRouterHistory = exports.match = exports.routerShape = exports.locationShape = exports.PropTypes = exports.RoutingContext = exports.RouterContext = exports.createRoutes = exports.useRoutes = exports.RouteContext = exports.Lifecycle = exports.History = exports.Route = exports.Redirect = exports.IndexRoute = exports.IndexRedirect = exports.withRouter = exports.IndexLink = exports.Link = exports.Router = undefined;

	var _RouteUtils = __webpack_require__(52);

	Object.defineProperty(exports, 'createRoutes', {
	  enumerable: true,
	  get: function get() {
	    return _RouteUtils.createRoutes;
	  }
	});

	var _PropTypes2 = __webpack_require__(180);

	Object.defineProperty(exports, 'locationShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes2.locationShape;
	  }
	});
	Object.defineProperty(exports, 'routerShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes2.routerShape;
	  }
	});

	var _PatternUtils = __webpack_require__(84);

	Object.defineProperty(exports, 'formatPattern', {
	  enumerable: true,
	  get: function get() {
	    return _PatternUtils.formatPattern;
	  }
	});

	var _Router2 = __webpack_require__(585);

	var _Router3 = _interopRequireDefault(_Router2);

	var _Link2 = __webpack_require__(299);

	var _Link3 = _interopRequireDefault(_Link2);

	var _IndexLink2 = __webpack_require__(579);

	var _IndexLink3 = _interopRequireDefault(_IndexLink2);

	var _withRouter2 = __webpack_require__(598);

	var _withRouter3 = _interopRequireDefault(_withRouter2);

	var _IndexRedirect2 = __webpack_require__(580);

	var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);

	var _IndexRoute2 = __webpack_require__(581);

	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

	var _Redirect2 = __webpack_require__(300);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	var _Route2 = __webpack_require__(583);

	var _Route3 = _interopRequireDefault(_Route2);

	var _History2 = __webpack_require__(578);

	var _History3 = _interopRequireDefault(_History2);

	var _Lifecycle2 = __webpack_require__(582);

	var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);

	var _RouteContext2 = __webpack_require__(584);

	var _RouteContext3 = _interopRequireDefault(_RouteContext2);

	var _useRoutes2 = __webpack_require__(597);

	var _useRoutes3 = _interopRequireDefault(_useRoutes2);

	var _RouterContext2 = __webpack_require__(123);

	var _RouterContext3 = _interopRequireDefault(_RouterContext2);

	var _RoutingContext2 = __webpack_require__(586);

	var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);

	var _PropTypes3 = _interopRequireDefault(_PropTypes2);

	var _match2 = __webpack_require__(595);

	var _match3 = _interopRequireDefault(_match2);

	var _useRouterHistory2 = __webpack_require__(306);

	var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);

	var _applyRouterMiddleware2 = __webpack_require__(588);

	var _applyRouterMiddleware3 = _interopRequireDefault(_applyRouterMiddleware2);

	var _browserHistory2 = __webpack_require__(589);

	var _browserHistory3 = _interopRequireDefault(_browserHistory2);

	var _hashHistory2 = __webpack_require__(304);

	var _hashHistory3 = _interopRequireDefault(_hashHistory2);

	var _createMemoryHistory2 = __webpack_require__(302);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Router = _Router3.default; /* components */

	exports.Link = _Link3.default;
	exports.IndexLink = _IndexLink3.default;
	exports.withRouter = _withRouter3.default;

	/* components (configuration) */

	exports.IndexRedirect = _IndexRedirect3.default;
	exports.IndexRoute = _IndexRoute3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;

	/* mixins */

	exports.History = _History3.default;
	exports.Lifecycle = _Lifecycle3.default;
	exports.RouteContext = _RouteContext3.default;

	/* utils */

	exports.useRoutes = _useRoutes3.default;
	exports.RouterContext = _RouterContext3.default;
	exports.RoutingContext = _RoutingContext3.default;
	exports.PropTypes = _PropTypes3.default;
	exports.match = _match3.default;
	exports.useRouterHistory = _useRouterHistory3.default;
	exports.applyRouterMiddleware = _applyRouterMiddleware3.default;

	/* histories */

	exports.browserHistory = _browserHistory3.default;
	exports.hashHistory = _hashHistory3.default;
	exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ },
/* 594 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = isActive;

	var _PatternUtils = __webpack_require__(84);

	function deepEqual(a, b) {
	  if (a == b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return deepEqual(item, b[index]);
	    });
	  }

	  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
	    for (var p in a) {
	      if (!Object.prototype.hasOwnProperty.call(a, p)) {
	        continue;
	      }

	      if (a[p] === undefined) {
	        if (b[p] !== undefined) {
	          return false;
	        }
	      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
	        return false;
	      } else if (!deepEqual(a[p], b[p])) {
	        return false;
	      }
	    }

	    return true;
	  }

	  return String(a) === String(b);
	}

	/**
	 * Returns true if the current pathname matches the supplied one, net of
	 * leading and trailing slash normalization. This is sufficient for an
	 * indexOnly route match.
	 */
	function pathIsActive(pathname, currentPathname) {
	  // Normalize leading slash for consistency. Leading slash on pathname has
	  // already been normalized in isActive. See caveat there.
	  if (currentPathname.charAt(0) !== '/') {
	    currentPathname = '/' + currentPathname;
	  }

	  // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
	  // `/foo` as active, but in this case, we would already have failed the
	  // match.
	  if (pathname.charAt(pathname.length - 1) !== '/') {
	    pathname += '/';
	  }
	  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
	    currentPathname += '/';
	  }

	  return currentPathname === pathname;
	}

	/**
	 * Returns true if the given pathname matches the active routes and params.
	 */
	function routeIsActive(pathname, routes, params) {
	  var remainingPathname = pathname,
	      paramNames = [],
	      paramValues = [];

	  // for...of would work here but it's probably slower post-transpilation.
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    var route = routes[i];
	    var pattern = route.path || '';

	    if (pattern.charAt(0) === '/') {
	      remainingPathname = pathname;
	      paramNames = [];
	      paramValues = [];
	    }

	    if (remainingPathname !== null && pattern) {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }

	      if (remainingPathname === '') {
	        // We have an exact match on the route. Just check that all the params
	        // match.
	        // FIXME: This doesn't work on repeated params.
	        return paramNames.every(function (paramName, index) {
	          return String(paramValues[index]) === String(params[paramName]);
	        });
	      }
	    }
	  }

	  return false;
	}

	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;

	  if (query == null) return true;

	  return deepEqual(query, activeQuery);
	}

	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */
	function isActive(_ref, indexOnly, currentLocation, routes, params) {
	  var pathname = _ref.pathname;
	  var query = _ref.query;

	  if (currentLocation == null) return false;

	  // TODO: This is a bit ugly. It keeps around support for treating pathnames
	  // without preceding slashes as absolute paths, but possibly also works
	  // around the same quirks with basenames as in matchRoutes.
	  if (pathname.charAt(0) !== '/') {
	    pathname = '/' + pathname;
	  }

	  if (!pathIsActive(pathname, currentLocation.pathname)) {
	    // The path check is necessary and sufficient for indexOnly, but otherwise
	    // we still need to check the routes.
	    if (indexOnly || !routeIsActive(pathname, routes, params)) {
	      return false;
	    }
	  }

	  return queryIsActive(query, currentLocation.query);
	}
	module.exports = exports['default'];

/***/ },
/* 595 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _Actions = __webpack_require__(86);

	var _invariant = __webpack_require__(25);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _createMemoryHistory = __webpack_require__(302);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	var _createTransitionManager = __webpack_require__(181);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _RouteUtils = __webpack_require__(52);

	var _RouterUtils = __webpack_require__(301);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser unless you're using
	 * server-side rendering with async routes.
	 */
	function match(_ref, callback) {
	  var history = _ref.history;
	  var routes = _ref.routes;
	  var location = _ref.location;

	  var options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);

	  !(history || location) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'match needs a history or a location') : (0, _invariant2.default)(false) : void 0;

	  history = history ? history : (0, _createMemoryHistory2.default)(options);
	  var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));

	  var unlisten = void 0;

	  if (location) {
	    // Allow match({ location: '/the/path', ... })
	    location = history.createLocation(location);
	  } else {
	    // Pick up the location from the history via synchronous history.listen
	    // call if needed.
	    unlisten = history.listen(function (historyLocation) {
	      location = historyLocation;
	    });
	  }

	  var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
	  history = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

	  transitionManager.match(location, function (error, redirectLocation, nextState) {
	    callback(error, redirectLocation && router.createLocation(redirectLocation, _Actions.REPLACE), nextState && _extends({}, nextState, {
	      history: history,
	      router: router,
	      matchContext: { history: history, transitionManager: transitionManager, router: router }
	    }));

	    // Defer removing the listener to here to prevent DOM histories from having
	    // to unwind DOM event listeners unnecessarily, in case callback renders a
	    // <Router> and attaches another history listener.
	    if (unlisten) {
	      unlisten();
	    }
	  });
	}

	exports.default = match;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 596 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = matchRoutes;

	var _AsyncUtils = __webpack_require__(179);

	var _makeStateWithLocation = __webpack_require__(305);

	var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);

	var _PatternUtils = __webpack_require__(84);

	var _routerWarning = __webpack_require__(20);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _RouteUtils = __webpack_require__(52);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getChildRoutes(route, location, paramNames, paramValues, callback) {
	  if (route.childRoutes) {
	    return [null, route.childRoutes];
	  }
	  if (!route.getChildRoutes) {
	    return [];
	  }

	  var sync = true,
	      result = void 0;

	  var partialNextState = {
	    location: location,
	    params: createParams(paramNames, paramValues)
	  };

	  var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);

	  route.getChildRoutes(partialNextStateWithLocation, function (error, childRoutes) {
	    childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);
	    if (sync) {
	      result = [error, childRoutes];
	      return;
	    }

	    callback(error, childRoutes);
	  });

	  sync = false;
	  return result; // Might be undefined.
	}

	function getIndexRoute(route, location, paramNames, paramValues, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    var partialNextState = {
	      location: location,
	      params: createParams(paramNames, paramValues)
	    };

	    var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);

	    route.getIndexRoute(partialNextStateWithLocation, function (error, indexRoute) {
	      callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
	    });
	  } else if (route.childRoutes) {
	    (function () {
	      var pathless = route.childRoutes.filter(function (childRoute) {
	        return !childRoute.path;
	      });

	      (0, _AsyncUtils.loopAsync)(pathless.length, function (index, next, done) {
	        getIndexRoute(pathless[index], location, paramNames, paramValues, function (error, indexRoute) {
	          if (error || indexRoute) {
	            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
	            done(error, routes);
	          } else {
	            next();
	          }
	        });
	      }, function (err, routes) {
	        callback(null, routes);
	      });
	    })();
	  } else {
	    callback();
	  }
	}

	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduce(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];

	    if (Array.isArray(params[paramName])) {
	      params[paramName].push(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [params[paramName], paramValue];
	    } else {
	      params[paramName] = paramValue;
	    }

	    return params;
	  }, params);
	}

	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}

	function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
	  var pattern = route.path || '';

	  if (pattern.charAt(0) === '/') {
	    remainingPathname = location.pathname;
	    paramNames = [];
	    paramValues = [];
	  }

	  // Only try to match the path if the route actually has a pattern, and if
	  // we're not just searching for potential nested absolute paths.
	  if (remainingPathname !== null && pattern) {
	    try {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }
	    } catch (error) {
	      callback(error);
	    }

	    // By assumption, pattern is non-empty here, which is the prerequisite for
	    // actually terminating a match.
	    if (remainingPathname === '') {
	      var _ret2 = function () {
	        var match = {
	          routes: [route],
	          params: createParams(paramNames, paramValues)
	        };

	        getIndexRoute(route, location, paramNames, paramValues, function (error, indexRoute) {
	          if (error) {
	            callback(error);
	          } else {
	            if (Array.isArray(indexRoute)) {
	              var _match$routes;

	              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : void 0;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : void 0;
	              match.routes.push(indexRoute);
	            }

	            callback(null, match);
	          }
	        });

	        return {
	          v: void 0
	        };
	      }();

	      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
	    }
	  }

	  if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    var onChildRoutes = function onChildRoutes(error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, remainingPathname, paramNames, paramValues);
	      } else {
	        callback();
	      }
	    };

	    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
	    if (result) {
	      onChildRoutes.apply(undefined, result);
	    }
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback, remainingPathname) {
	  var paramNames = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
	  var paramValues = arguments.length <= 5 || arguments[5] === undefined ? [] : arguments[5];

	  if (remainingPathname === undefined) {
	    // TODO: This is a little bit ugly, but it works around a quirk in history
	    // that strips the leading slash from pathnames when using basenames with
	    // trailing slashes.
	    if (location.pathname.charAt(0) !== '/') {
	      location = _extends({}, location, {
	        pathname: '/' + location.pathname
	      });
	    }
	    remainingPathname = location.pathname;
	  }

	  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
	    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
	      if (error || match) {
	        done(error, match);
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 597 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _useQueries = __webpack_require__(126);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _createTransitionManager = __webpack_require__(181);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _routerWarning = __webpack_require__(20);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know about routing.
	 *
	 * Enhances history objects with the following methods:
	 *
	 * - listen((error, nextState) => {})
	 * - listenBeforeLeavingRoute(route, (nextLocation) => {})
	 * - match(location, (error, redirectLocation, nextState) => {})
	 * - isActive(pathname, query, indexOnly=false)
	 */
	function useRoutes(createHistory) {
	  process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`useRoutes` is deprecated. Please use `createTransitionManager` instead.') : void 0;

	  return function () {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var routes = _ref.routes;

	    var options = _objectWithoutProperties(_ref, ['routes']);

	    var history = (0, _useQueries2.default)(createHistory)(options);
	    var transitionManager = (0, _createTransitionManager2.default)(history, routes);
	    return _extends({}, history, transitionManager);
	  };
	}

	exports.default = useRoutes;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 598 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = withRouter;

	var _invariant = __webpack_require__(25);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _hoistNonReactStatics = __webpack_require__(599);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _PropTypes = __webpack_require__(180);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	function withRouter(WrappedComponent, options) {
	  var withRef = options && options.withRef;

	  var WithRouter = _react2.default.createClass({
	    displayName: 'WithRouter',

	    contextTypes: { router: _PropTypes.routerShape },
	    propTypes: { router: _PropTypes.routerShape },

	    getWrappedInstance: function getWrappedInstance() {
	      !withRef ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'To access the wrapped instance, you need to specify ' + '`{ withRef: true }` as the second argument of the withRouter() call.') : (0, _invariant2.default)(false) : void 0;

	      return this.wrappedInstance;
	    },
	    render: function render() {
	      var _this = this;

	      var router = this.props.router || this.context.router;
	      var props = _extends({}, this.props, { router: router });

	      if (withRef) {
	        props.ref = function (c) {
	          _this.wrappedInstance = c;
	        };
	      }

	      return _react2.default.createElement(WrappedComponent, props);
	    }
	  });

	  WithRouter.displayName = 'withRouter(' + getDisplayName(WrappedComponent) + ')';
	  WithRouter.WrappedComponent = WrappedComponent;

	  return (0, _hoistNonReactStatics2.default)(WithRouter, WrappedComponent);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 599 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"sweet-mask":"sweet-mask","hide":"hide","sweet-alert":"sweet-alert","sa-title":"sa-title","sa-fileds":"sa-fileds","confirm":"confirm","block":"block","sa-error-container":"sa-error-container","icon":"icon","sa-input-error":"sa-input-error","show":"show","show-input":"show-input","cancel":"cancel","sa-icon":"sa-icon","sa-error":"sa-error","sa-x-mark":"sa-x-mark","sa-line":"sa-line","sa-left":"sa-left","sa-right":"sa-right","sa-warning":"sa-warning","sa-body":"sa-body","sa-dot":"sa-dot","sa-info":"sa-info","sa-success":"sa-success","sa-placeholder":"sa-placeholder","sa-fix":"sa-fix","sa-tip":"sa-tip","sa-long":"sa-long","sa-custom":"sa-custom","showSweetAlert":"showSweetAlert","slideFromTop":"slideFromTop","slideFromBottom":"slideFromBottom","hideSweetAlert":"hideSweetAlert","slideToTop":"slideToTop","slideToBottom":"slideToBottom","animateSuccessTip":"animateSuccessTip","animateSuccessLong":"animateSuccessLong","animate":"animate","rotatePlaceholder":"rotatePlaceholder","animateErrorIcon":"animateErrorIcon","animateXMark":"animateXMark","pulseWarning":"pulseWarning","pulseWarningIns":"pulseWarningIns"};

/***/ },
/* 606 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"icon":"icon"};

/***/ },
/* 607 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"navbar-flex":"navbar-flex","navbar-flex-item":"navbar-flex-item","qbii-navbar-container":"qbii-navbar-container","qbii-navbar-top":"qbii-navbar-top","qbii-navbar-bottom":"qbii-navbar-bottom","qbii-navbar":"qbii-navbar","qbii-navbar-left":"qbii-navbar-left","left":"left","left-icon":"left-icon","qbii-navbar-title":"qbii-navbar-title","qbii-navbar-right":"qbii-navbar-right","right-icon":"right-icon","right":"right"};

/***/ },
/* 608 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"default-enter":"default-enter","default-leave-active":"default-leave-active","default-leave":"default-leave","fadeOutRight":"fadeOutRight","fadeOutLeft":"fadeOutLeft","fadeInLeft":"fadeInLeft","fadeInRight":"fadeInRight","animated":"animated","infinite":"infinite","hinge":"hinge","flipOutX":"flipOutX","flipOutY":"flipOutY","bounceIn":"bounceIn","bounceOut":"bounceOut","fadeIn":"fadeIn","fadeInLeftBig":"fadeInLeftBig","fadeOut":"fadeOut","zoomIn":"zoomIn"};

/***/ },
/* 609 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"hidden":"hidden"};

/***/ },
/* 610 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"flex":"flex","flex-justify":"flex-justify","flex-vertical":"flex-vertical","flex-item-auto":"flex-item-auto","flex-item-1":"flex-item-1","flex-item-none":"flex-item-none","flex-align-center":"flex-align-center","flex-center":"flex-center","flex-wrap":"flex-wrap","home-container":"home-container","item":"item","question":"question","answer":"answer","icon":"icon","icon-item":"icon-item","icon-arrow":"icon-arrow"};

/***/ },
/* 611 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"order-banner":"order-banner","order-banner-items":"order-banner-items","order-banner-item":"order-banner-item"};

/***/ },
/* 612 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"flex":"flex","flex-justify":"flex-justify","flex-vertical":"flex-vertical","flex-item-auto":"flex-item-auto","flex-item-1":"flex-item-1","flex-item-none":"flex-item-none","flex-align-center":"flex-align-center","flex-center":"flex-center","flex-wrap":"flex-wrap","party-plan":"party-plan"};

/***/ },
/* 613 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"party-info":"party-info","party-temp":"party-temp","party-head":"party-head","party-logo":"party-logo","area-info":"area-info","area-info-title":"area-info-title","bottom-line":"bottom-line","area-rows":"area-rows","area-p":"area-p","area-duan":"area-duan","area-margin":"area-margin","area-bottom":"area-bottom","party-video":"party-video","vedio-mark":"vedio-mark","vedio-mark-hide":"vedio-mark-hide","vedio-mark-play":"vedio-mark-play","party-chart":"party-chart","chart-top":"chart-top","chart-select":"chart-select","chart-info":"chart-info","part-chart-top":"part-chart-top","bottom-title":"bottom-title","chart-low-line":"chart-low-line","chart-title":"chart-title","chart-num":"chart-num","chart-rose":"chart-rose","part-chart-bottom":"part-chart-bottom","chart-remark":"chart-remark","chart-main":"chart-main","recharts-wrapper":"recharts-wrapper","select":"select","select-ex":"select-ex","chart-todo":"chart-todo","party-step":"party-step","step-arrow":"step-arrow","date":"date","step-row":"step-row","step-end":"step-end","step-btn-end":"step-btn-end","step-heart":"step-heart","heart-line":"heart-line","step-download":"step-download"};

/***/ },
/* 614 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"newsDetail-container":"newsDetail-container","newsDetail-head":"newsDetail-head","newsDetail-auth-info":"newsDetail-auth-info","newsDetail-body":"newsDetail-body","newsDetail-footer":"newsDetail-footer","newsDetail-loading":"newsDetail-loading","newsDetail-loading-hide":"newsDetail-loading-hide","mask-loading":"mask-loading","mask-loading-vi":"mask-loading-vi"};

/***/ },
/* 615 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"virtual-input":"virtual-input"};

/***/ },
/* 616 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"order-confirm":"order-confirm","order-join":"order-join","join-top":"join-top","order-estimate":"order-estimate","order-estimate-one":"order-estimate-one","estimate-money":"estimate-money","estimate-bank":"estimate-bank","order-clause":"order-clause","virtual-input":"virtual-input","order-sure":"order-sure"};

/***/ },
/* 617 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"theme":"theme","theme-img":"theme-img","theme-img-0":"theme-img-0","hide":"hide","header":"header","content":"content","menu":"menu","menu-bar":"menu-bar","menu-bar-top":"menu-bar-top","menu-content":"menu-content","menu-pass":"menu-pass","pass":"pass","menu-margin":"menu-margin","footer":"footer","ring":"ring","ring-vi":"ring-vi","ring-show":"ring-show","ring-bg":"ring-bg","container-ring":"container-ring","container-ring-hide":"container-ring-hide","outer-ring":"outer-ring","inner-ring":"inner-ring","content-ring":"content-ring","menu-box":"menu-box","layer":"layer","header-layer":"header-layer"};

/***/ },
/* 618 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container-order-list":"container-order-list","order-list":"order-list","step1":"step1","exc":"exc","step2":"step2","step3":"step3","step4":"step4","order-list-item":"order-list-item","no-up":"no-up"};

/***/ },
/* 619 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container-profit-list":"container-profit-list","profit-list":"profit-list","profit-list-item":"profit-list-item","profit-list-item-main":"profit-list-item-main","profit-list-item-info":"profit-list-item-info","item-tab":"item-tab","item-icon-right":"item-icon-right"};

/***/ },
/* 620 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"flex":"src-views-About-___page__flex___iF-8W","flex-justify":"src-views-About-___page__flex-justify___rQamF","flex-vertical":"src-views-About-___page__flex-vertical___TFuf_","flex-item-auto":"src-views-About-___page__flex-item-auto___3SeCm","flex-align-center":"src-views-About-___page__flex-align-center___NES9V","flex-center":"src-views-About-___page__flex-center___2eygs","about-container":"src-views-About-___page__about-container___OH3gz","about-title":"src-views-About-___page__about-title___2NFuX","about-content":"src-views-About-___page__about-content___j_zer","level-info":"src-views-About-___page__level-info___1Rbkd","bottom-wrap":"src-views-About-___page__bottom-wrap___2ryZc","page":"src-views-About-___page__page___RkVbx","arrow":"src-views-About-___page__arrow___2wL8C","arrow-up":"src-views-About-___page__arrow-up___3Jiso"};

/***/ },
/* 621 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"flex":"src-views-IconDoc-___page__flex___1SRGH","flex-justify":"src-views-IconDoc-___page__flex-justify___2ls0W","flex-vertical":"src-views-IconDoc-___page__flex-vertical___2Pk7M","flex-item-auto":"src-views-IconDoc-___page__flex-item-auto___3MGPc","flex-item-1":"src-views-IconDoc-___page__flex-item-1___3mS2-","flex-item-none":"src-views-IconDoc-___page__flex-item-none___1K0uT","flex-align-center":"src-views-IconDoc-___page__flex-align-center___1wn9b","flex-center":"src-views-IconDoc-___page__flex-center___2Xw8t","flex-wrap":"src-views-IconDoc-___page__flex-wrap___1hilr","home-container":"src-views-IconDoc-___page__home-container___3El8x","icons":"src-views-IconDoc-___page__icons___2Tk4V","title":"src-views-IconDoc-___page__title___19S-V","loading":"src-views-IconDoc-___page__loading___11hpV"};

/***/ },
/* 622 */,
/* 623 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(127);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(86);

	var _PathUtils = __webpack_require__(66);

	var _ExecutionEnvironment = __webpack_require__(125);

	var _DOMUtils = __webpack_require__(186);

	var _DOMStateStorage = __webpack_require__(312);

	var _createDOMHistory = __webpack_require__(313);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve URLs.
	 */
	function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

	  var forceRefresh = options.forceRefresh;

	  var isSupported = _DOMUtils.supportsHistory();
	  var useRefresh = !isSupported || forceRefresh;

	  function getCurrentLocation(historyState) {
	    try {
	      historyState = historyState || window.history.state || {};
	    } catch (e) {
	      historyState = {};
	    }

	    var path = _DOMUtils.getWindowPath();
	    var _historyState = historyState;
	    var key = _historyState.key;

	    var state = undefined;
	    if (key) {
	      state = _DOMStateStorage.readState(key);
	    } else {
	      state = null;
	      key = history.createKey();

	      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null);
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function startPopStateListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function popStateListener(event) {
	      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

	      transitionTo(getCurrentLocation(event.state));
	    }

	    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    _DOMStateStorage.saveState(key, state);

	    var path = (basename || '') + pathname + search + hash;
	    var historyState = {
	      key: key
	    };

	    if (action === _Actions.PUSH) {
	      if (useRefresh) {
	        window.location.href = path;
	        return false; // Prevent location update.
	      } else {
	          window.history.pushState(historyState, null, path);
	        }
	    } else {
	      // REPLACE
	      if (useRefresh) {
	        window.location.replace(path);
	        return false; // Prevent location update.
	      } else {
	          window.history.replaceState(historyState, null, path);
	        }
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopPopStateListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopPopStateListener();
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook
	  });
	}

	exports['default'] = createBrowserHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 624 */,
/* 625 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(36);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(127);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _PathUtils = __webpack_require__(66);

	var _Actions = __webpack_require__(86);

	var _createHistory = __webpack_require__(315);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	}

	function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }

	  var history = _createHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: saveState,
	    go: go
	  }));

	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;

	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }

	  entries = entries.map(function (entry) {
	    var key = history.createKey();

	    if (typeof entry === 'string') return { pathname: entry, key: key };

	    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });

	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
	  });

	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
	  }

	  var storage = createStateStorage(entries);

	  function saveState(key, state) {
	    storage[key] = state;
	  }

	  function readState(key) {
	    return storage[key];
	  }

	  function getCurrentLocation() {
	    var entry = entries[current];
	    var basename = entry.basename;
	    var pathname = entry.pathname;
	    var search = entry.search;

	    var path = (basename || '') + pathname + (search || '');

	    var key = undefined,
	        state = undefined;
	    if (entry.key) {
	      key = entry.key;
	      state = readState(key);
	    } else {
	      key = history.createKey();
	      state = null;
	      entry.key = key;
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  }

	  function go(n) {
	    if (n) {
	      if (!canGo(n)) {
	        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
	        return;
	      }

	      current += n;

	      var currentLocation = getCurrentLocation();

	      // change action to POP
	      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	    }
	  }

	  function finishTransition(location) {
	    switch (location.action) {
	      case _Actions.PUSH:
	        current += 1;

	        // if we are not on the top of stack
	        // remove rest and push new
	        if (current < entries.length) entries.splice(current);

	        entries.push(location);
	        saveState(location.key, location.state);
	        break;
	      case _Actions.REPLACE:
	        entries[current] = location;
	        saveState(location.key, location.state);
	        break;
	    }
	  }

	  return history;
	}

	exports['default'] = createMemoryHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ },
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(327);

	/**
	 * Gets the size of an ASCII `string`.
	 *
	 * @private
	 * @param {string} string The string inspect.
	 * @returns {number} Returns the string size.
	 */
	var asciiSize = baseProperty('length');

	module.exports = asciiSize;


/***/ },
/* 643 */
/***/ function(module, exports) {

	/**
	 * Converts an ASCII `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function asciiToArray(string) {
	  return string.split('');
	}

	module.exports = asciiToArray;


/***/ },
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(26),
	    isPrototype = __webpack_require__(199),
	    nativeKeysIn = __webpack_require__(710);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeysIn;


/***/ },
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	module.exports = baseSlice;


/***/ },
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(105);

	/**
	 * Casts `value` to `identity` if it's not a function.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Function} Returns cast function.
	 */
	function castFunction(value) {
	  return typeof value == 'function' ? value : identity;
	}

	module.exports = castFunction;


/***/ },
/* 671 */
/***/ function(module, exports, __webpack_require__) {

	var baseSlice = __webpack_require__(666);

	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return (!start && end >= length) ? array : baseSlice(array, start, end);
	}

	module.exports = castSlice;


/***/ },
/* 672 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(192);

	/**
	 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
	 * that is not found in the character symbols.
	 *
	 * @private
	 * @param {Array} strSymbols The string symbols to inspect.
	 * @param {Array} chrSymbols The character symbols to find.
	 * @returns {number} Returns the index of the last unmatched string symbol.
	 */
	function charsEndIndex(strSymbols, chrSymbols) {
	  var index = strSymbols.length;

	  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	  return index;
	}

	module.exports = charsEndIndex;


/***/ },
/* 673 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(192);

	/**
	 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
	 * that is not found in the character symbols.
	 *
	 * @private
	 * @param {Array} strSymbols The string symbols to inspect.
	 * @param {Array} chrSymbols The character symbols to find.
	 * @returns {number} Returns the index of the first unmatched string symbol.
	 */
	function charsStartIndex(strSymbols, chrSymbols) {
	  var index = -1,
	      length = strSymbols.length;

	  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	  return index;
	}

	module.exports = charsStartIndex;


/***/ },
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */
/***/ function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = nativeKeysIn;


/***/ },
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */
/***/ function(module, exports, __webpack_require__) {

	var asciiSize = __webpack_require__(642),
	    hasUnicode = __webpack_require__(337),
	    unicodeSize = __webpack_require__(728);

	/**
	 * Gets the number of symbols in `string`.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {number} Returns the string size.
	 */
	function stringSize(string) {
	  return hasUnicode(string)
	    ? unicodeSize(string)
	    : asciiSize(string);
	}

	module.exports = stringSize;


/***/ },
/* 726 */
/***/ function(module, exports, __webpack_require__) {

	var asciiToArray = __webpack_require__(643),
	    hasUnicode = __webpack_require__(337),
	    unicodeToArray = __webpack_require__(729);

	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray(string) {
	  return hasUnicode(string)
	    ? unicodeToArray(string)
	    : asciiToArray(string);
	}

	module.exports = stringToArray;


/***/ },
/* 727 */,
/* 728 */
/***/ function(module, exports) {

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange + ']',
	    rsCombo = '[' + rsComboRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

	/**
	 * Gets the size of a Unicode `string`.
	 *
	 * @private
	 * @param {string} string The string inspect.
	 * @returns {number} Returns the string size.
	 */
	function unicodeSize(string) {
	  var result = reUnicode.lastIndex = 0;
	  while (reUnicode.test(string)) {
	    ++result;
	  }
	  return result;
	}

	module.exports = unicodeSize;


/***/ },
/* 729 */
/***/ function(module, exports) {

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange + ']',
	    rsCombo = '[' + rsComboRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

	/**
	 * Converts a Unicode `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function unicodeToArray(string) {
	  return string.match(reUnicode) || [];
	}

	module.exports = unicodeToArray;


/***/ },
/* 730 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(322),
	    copyObject = __webpack_require__(331),
	    createAssigner = __webpack_require__(332),
	    isArrayLike = __webpack_require__(53),
	    isPrototype = __webpack_require__(199),
	    keys = __webpack_require__(135);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});

	module.exports = assign;


/***/ },
/* 731 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(331),
	    createAssigner = __webpack_require__(332),
	    keysIn = __webpack_require__(740);

	/**
	 * This method is like `_.assign` except that it iterates over own and
	 * inherited source properties.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias extend
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assign
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assignIn({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
	 */
	var assignIn = createAssigner(function(object, source) {
	  copyObject(source, keysIn(source), object);
	});

	module.exports = assignIn;


/***/ },
/* 732 */,
/* 733 */,
/* 734 */,
/* 735 */,
/* 736 */,
/* 737 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(46),
	    isObjectLike = __webpack_require__(38);

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]';

	/**
	 * Checks if `value` is classified as a boolean primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
	 * @example
	 *
	 * _.isBoolean(false);
	 * // => true
	 *
	 * _.isBoolean(null);
	 * // => false
	 */
	function isBoolean(value) {
	  return value === true || value === false ||
	    (isObjectLike(value) && baseGetTag(value) == boolTag);
	}

	module.exports = isBoolean;


/***/ },
/* 738 */,
/* 739 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is `undefined`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	 * @example
	 *
	 * _.isUndefined(void 0);
	 * // => true
	 *
	 * _.isUndefined(null);
	 * // => false
	 */
	function isUndefined(value) {
	  return value === undefined;
	}

	module.exports = isUndefined;


/***/ },
/* 740 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(320),
	    baseKeysIn = __webpack_require__(658),
	    isArrayLike = __webpack_require__(53);

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	module.exports = keysIn;


/***/ },
/* 741 */,
/* 742 */,
/* 743 */,
/* 744 */,
/* 745 */,
/* 746 */,
/* 747 */,
/* 748 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(328),
	    castSlice = __webpack_require__(671),
	    charsEndIndex = __webpack_require__(672),
	    charsStartIndex = __webpack_require__(673),
	    stringToArray = __webpack_require__(726),
	    toString = __webpack_require__(205);

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/**
	 * Removes leading and trailing whitespace or specified characters from `string`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to trim.
	 * @param {string} [chars=whitespace] The characters to trim.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {string} Returns the trimmed string.
	 * @example
	 *
	 * _.trim('  abc  ');
	 * // => 'abc'
	 *
	 * _.trim('-_-abc-_-', '_-');
	 * // => 'abc'
	 *
	 * _.map(['  foo  ', '  bar  '], _.trim);
	 * // => ['foo', 'bar']
	 */
	function trim(string, chars, guard) {
	  string = toString(string);
	  if (string && (guard || chars === undefined)) {
	    return string.replace(reTrim, '');
	  }
	  if (!string || !(chars = baseToString(chars))) {
	    return string;
	  }
	  var strSymbols = stringToArray(string),
	      chrSymbols = stringToArray(chars),
	      start = charsStartIndex(strSymbols, chrSymbols),
	      end = charsEndIndex(strSymbols, chrSymbols) + 1;

	  return castSlice(strSymbols, start, end).join('');
	}

	module.exports = trim;


/***/ },
/* 749 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(889);

/***/ },
/* 750 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _class = function () {
	  function _class() {
	    _classCallCheck(this, _class);

	    this.size = 0;
	    this.keys = [];
	    this.values = [];
	  }

	  _class.prototype.get = function get(key) {
	    var index = this.keys.indexOf(key);

	    return this.values[index];
	  };

	  _class.prototype.set = function set(key, value) {
	    this.keys.push(key);
	    this.values.push(value);
	    this.size = this.keys.length;

	    return value;
	  };

	  return _class;
	}();

	exports.default = _class;
	module.exports = exports["default"];

/***/ },
/* 751 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isObject2 = __webpack_require__(26);

	var _isObject3 = _interopRequireDefault(_isObject2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _hoistNonReactStatics = __webpack_require__(757);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _linkClass = __webpack_require__(353);

	var _linkClass2 = _interopRequireDefault(_linkClass);

	var _renderNothing = __webpack_require__(354);

	var _renderNothing2 = _interopRequireDefault(_renderNothing);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /* eslint-disable react/prop-types */

	/**
	 * @param {ReactClass} Component
	 * @param {Object} defaultStyles
	 * @param {Object} options
	 * @returns {ReactClass}
	 */
	exports.default = function (Component, defaultStyles, options) {
	  var WrappedComponent = function (_Component) {
	    _inherits(WrappedComponent, _Component);

	    function WrappedComponent() {
	      _classCallCheck(this, WrappedComponent);

	      return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }

	    WrappedComponent.prototype.render = function render() {
	      var propsChanged = void 0;
	      var styles = void 0;

	      propsChanged = false;

	      if (this.props.styles) {
	        styles = this.props.styles;
	      } else if ((0, _isObject3.default)(defaultStyles)) {
	        var props = Object.assign({}, this.props);

	        Object.defineProperty(props, 'styles', {
	          configurable: true,
	          enumerable: false,
	          value: defaultStyles,
	          writable: false
	        });

	        this.props = props;

	        propsChanged = true;
	        styles = defaultStyles;
	      } else {
	        styles = {};
	      }

	      var renderResult = _Component.prototype.render.call(this);

	      if (propsChanged) {
	        delete this.props.styles;
	      }

	      if (renderResult) {
	        return (0, _linkClass2.default)(renderResult, styles, options);
	      }

	      return (0, _renderNothing2.default)(_react2.default.version);
	    };

	    return WrappedComponent;
	  }(Component);

	  return (0, _hoistNonReactStatics2.default)(WrappedComponent, Component);
	};

	module.exports = exports['default'];

/***/ },
/* 752 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _SimpleMap = __webpack_require__(750);

	var _SimpleMap2 = _interopRequireDefault(_SimpleMap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CustomMap = typeof Map === 'undefined' ? _SimpleMap2.default : Map;

	var stylesIndex = new CustomMap();

	exports.default = function (styles, styleNames, errorWhenNotFound) {
	  var appendClassName = void 0;
	  var stylesIndexMap = void 0;

	  stylesIndexMap = stylesIndex.get(styles);

	  if (stylesIndexMap) {
	    var styleNameIndex = stylesIndexMap.get(styleNames);

	    if (styleNameIndex) {
	      return styleNameIndex;
	    }
	  } else {
	    stylesIndexMap = new CustomMap();
	    stylesIndex.set(styles, new CustomMap());
	  }

	  appendClassName = '';

	  for (var styleName in styleNames) {
	    if (styleNames.hasOwnProperty(styleName)) {
	      var className = styles[styleNames[styleName]];

	      if (className) {
	        appendClassName += ' ' + className;
	      } else if (errorWhenNotFound === true) {
	        throw new Error('"' + styleNames[styleName] + '" CSS module is undefined.');
	      }
	    }
	  }

	  appendClassName = appendClassName.trim();

	  stylesIndexMap.set(styleNames, appendClassName);

	  return appendClassName;
	};

	module.exports = exports['default'];

/***/ },
/* 753 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isObject2 = __webpack_require__(26);

	var _isObject3 = _interopRequireDefault(_isObject2);

	var _isFunction2 = __webpack_require__(17);

	var _isFunction3 = _interopRequireDefault(_isFunction2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ITERATOR_SYMBOL = typeof Symbol !== 'undefined' && (0, _isFunction3.default)(Symbol) && Symbol.iterator;
	var OLD_ITERATOR_SYMBOL = '@@iterator';

	/**
	 * @see https://github.com/lodash/lodash/issues/1668
	 * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration_protocols
	 */

	exports.default = function (maybeIterable) {
	  var iterator = void 0;

	  if (!(0, _isObject3.default)(maybeIterable)) {
	    return false;
	  }

	  if (ITERATOR_SYMBOL) {
	    iterator = maybeIterable[ITERATOR_SYMBOL];
	  } else {
	    iterator = maybeIterable[OLD_ITERATOR_SYMBOL];
	  }

	  return (0, _isFunction3.default)(iterator);
	};

	module.exports = exports['default'];

/***/ },
/* 754 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isBoolean2 = __webpack_require__(737);

	var _isBoolean3 = _interopRequireDefault(_isBoolean2);

	var _isUndefined2 = __webpack_require__(739);

	var _isUndefined3 = _interopRequireDefault(_isUndefined2);

	var _forEach2 = __webpack_require__(344);

	var _forEach3 = _interopRequireDefault(_forEach2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @typedef CSSModules~Options
	 * @see {@link https://github.com/gajus/react-css-modules#options}
	 * @property {boolean} allowMultiple
	 * @property {boolean} errorWhenNotFound
	 */

	/**
	 * @param {CSSModules~Options} userConfiguration
	 * @returns {CSSModules~Options}
	 */
	exports.default = function () {
	  var userConfiguration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var configuration = {
	    allowMultiple: false,
	    errorWhenNotFound: true
	  };

	  (0, _forEach3.default)(userConfiguration, function (value, name) {
	    if ((0, _isUndefined3.default)(configuration[name])) {
	      throw new Error('Unknown configuration property "' + name + '".');
	    }

	    if (!(0, _isBoolean3.default)(value)) {
	      throw new Error('"' + name + '" property value must be a boolean.');
	    }

	    configuration[name] = value;
	  });

	  return configuration;
	};

	module.exports = exports['default'];

/***/ },
/* 755 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _filter2 = __webpack_require__(343);

	var _filter3 = _interopRequireDefault(_filter2);

	var _trim2 = __webpack_require__(748);

	var _trim3 = _interopRequireDefault(_trim2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var styleNameIndex = {};

	exports.default = function (styleNamePropertyValue, allowMultiple) {
	  var styleNames = void 0;

	  if (styleNameIndex[styleNamePropertyValue]) {
	    styleNames = styleNameIndex[styleNamePropertyValue];
	  } else {
	    styleNames = (0, _trim3.default)(styleNamePropertyValue).split(' ');
	    styleNames = (0, _filter3.default)(styleNames);

	    styleNameIndex[styleNamePropertyValue] = styleNames;
	  }

	  if (allowMultiple === false && styleNames.length > 1) {
	    throw new Error('ReactElement styleName property defines multiple module names ("' + styleNamePropertyValue + '").');
	  }

	  return styleNames;
	};

	module.exports = exports['default'];

/***/ },
/* 756 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign2 = __webpack_require__(730);

	var _assign3 = _interopRequireDefault(_assign2);

	var _isObject2 = __webpack_require__(26);

	var _isObject3 = _interopRequireDefault(_isObject2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _linkClass = __webpack_require__(353);

	var _linkClass2 = _interopRequireDefault(_linkClass);

	var _renderNothing = __webpack_require__(354);

	var _renderNothing2 = _interopRequireDefault(_renderNothing);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @see https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html#stateless-function-components
	 */
	exports.default = function (Component, defaultStyles, options) {
	  var WrappedComponent = function WrappedComponent() {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    var styles = void 0;
	    var useProps = void 0;

	    if (props.styles) {
	      useProps = props;
	      styles = props.styles;
	    } else if ((0, _isObject3.default)(defaultStyles)) {
	      useProps = (0, _assign3.default)({}, props, {
	        styles: defaultStyles
	      });

	      Object.defineProperty(useProps, 'styles', {
	        configurable: true,
	        enumerable: false,
	        value: defaultStyles,
	        writable: false
	      });

	      styles = defaultStyles;
	    } else {
	      useProps = props;
	      styles = {};
	    }

	    var renderResult = Component.apply(undefined, [useProps].concat(args));

	    if (renderResult) {
	      return (0, _linkClass2.default)(renderResult, styles, options);
	    }

	    return (0, _renderNothing2.default)(_react2.default.version);
	  };

	  (0, _assign3.default)(WrappedComponent, Component);

	  return WrappedComponent;
	}; /* eslint-disable react/prop-types */

	module.exports = exports['default'];

/***/ },
/* 757 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 758 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	/**
	 * Make a shallow copy of the object maintaining the prototype.
	 */

	exports.default = function (source) {
	    var target = void 0;

	    if (source.constructor === Array) {
	        target = source.map(function (element) {
	            return element;
	        });
	    } else {
	        target = {};
	        for (var property in source) {
	            if (source.hasOwnProperty(property)) {
	                target[property] = source[property];
	            }
	        }
	    }

	    _defaults(target, Object.getPrototypeOf(source));

	    return target;
	};

	module.exports = exports['default'];
	//# sourceMappingURL=objectUnfreeze.js.map


/***/ },
/* 759 */,
/* 760 */,
/* 761 */,
/* 762 */,
/* 763 */,
/* 764 */,
/* 765 */,
/* 766 */,
/* 767 */,
/* 768 */,
/* 769 */,
/* 770 */,
/* 771 */,
/* 772 */,
/* 773 */,
/* 774 */,
/* 775 */,
/* 776 */,
/* 777 */,
/* 778 */,
/* 779 */,
/* 780 */,
/* 781 */,
/* 782 */,
/* 783 */,
/* 784 */,
/* 785 */,
/* 786 */,
/* 787 */,
/* 788 */,
/* 789 */,
/* 790 */,
/* 791 */,
/* 792 */,
/* 793 */,
/* 794 */,
/* 795 */,
/* 796 */,
/* 797 */,
/* 798 */,
/* 799 */,
/* 800 */,
/* 801 */,
/* 802 */,
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */,
/* 807 */,
/* 808 */,
/* 809 */,
/* 810 */,
/* 811 */,
/* 812 */,
/* 813 */,
/* 814 */,
/* 815 */,
/* 816 */,
/* 817 */,
/* 818 */,
/* 819 */,
/* 820 */,
/* 821 */,
/* 822 */,
/* 823 */,
/* 824 */,
/* 825 */,
/* 826 */,
/* 827 */,
/* 828 */,
/* 829 */,
/* 830 */,
/* 831 */,
/* 832 */,
/* 833 */,
/* 834 */,
/* 835 */,
/* 836 */,
/* 837 */,
/* 838 */,
/* 839 */,
/* 840 */,
/* 841 */,
/* 842 */,
/* 843 */,
/* 844 */,
/* 845 */,
/* 846 */,
/* 847 */,
/* 848 */,
/* 849 */,
/* 850 */,
/* 851 */,
/* 852 */,
/* 853 */,
/* 854 */,
/* 855 */,
/* 856 */,
/* 857 */,
/* 858 */,
/* 859 */,
/* 860 */,
/* 861 */,
/* 862 */,
/* 863 */,
/* 864 */,
/* 865 */,
/* 866 */,
/* 867 */,
/* 868 */,
/* 869 */,
/* 870 */,
/* 871 */,
/* 872 */,
/* 873 */,
/* 874 */,
/* 875 */,
/* 876 */,
/* 877 */,
/* 878 */,
/* 879 */,
/* 880 */,
/* 881 */,
/* 882 */,
/* 883 */,
/* 884 */,
/* 885 */,
/* 886 */,
/* 887 */,
/* 888 */,
/* 889 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(94);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(34);

	var ReactTransitionGroup = __webpack_require__(237);
	var ReactCSSTransitionGroupChild = __webpack_require__(890);

	function createTransitionTimeoutPropValidator(transitionType) {
	  var timeoutPropName = 'transition' + transitionType + 'Timeout';
	  var enabledPropName = 'transition' + transitionType;

	  return function (props) {
	    // If the transition is enabled
	    if (props[enabledPropName]) {
	      // If no timeout duration is provided
	      if (props[timeoutPropName] == null) {
	        return new Error(timeoutPropName + ' wasn\'t supplied to ReactCSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

	        // If the duration isn't a number
	      } else if (typeof props[timeoutPropName] !== 'number') {
	        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
	      }
	    }
	  };
	}

	/**
	 * An easy way to perform CSS transitions and animations when a React component
	 * enters or leaves the DOM.
	 * See https://facebook.github.io/react/docs/animation.html#high-level-api-reactcsstransitiongroup
	 */

	var ReactCSSTransitionGroup = function (_React$Component) {
	  _inherits(ReactCSSTransitionGroup, _React$Component);

	  function ReactCSSTransitionGroup() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, ReactCSSTransitionGroup);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
	      // We need to provide this childFactory so that
	      // ReactCSSTransitionGroupChild can receive updates to name, enter, and
	      // leave while it is leaving.
	      return React.createElement(ReactCSSTransitionGroupChild, {
	        name: _this.props.transitionName,
	        appear: _this.props.transitionAppear,
	        enter: _this.props.transitionEnter,
	        leave: _this.props.transitionLeave,
	        appearTimeout: _this.props.transitionAppearTimeout,
	        enterTimeout: _this.props.transitionEnterTimeout,
	        leaveTimeout: _this.props.transitionLeaveTimeout
	      }, child);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  ReactCSSTransitionGroup.prototype.render = function render() {
	    return React.createElement(ReactTransitionGroup, _assign({}, this.props, { childFactory: this._wrapChild }));
	  };

	  return ReactCSSTransitionGroup;
	}(React.Component);

	ReactCSSTransitionGroup.displayName = 'ReactCSSTransitionGroup';
	ReactCSSTransitionGroup.propTypes = {
	  transitionName: ReactCSSTransitionGroupChild.propTypes.name,

	  transitionAppear: React.PropTypes.bool,
	  transitionEnter: React.PropTypes.bool,
	  transitionLeave: React.PropTypes.bool,
	  transitionAppearTimeout: createTransitionTimeoutPropValidator('Appear'),
	  transitionEnterTimeout: createTransitionTimeoutPropValidator('Enter'),
	  transitionLeaveTimeout: createTransitionTimeoutPropValidator('Leave')
	};
	ReactCSSTransitionGroup.defaultProps = {
	  transitionAppear: false,
	  transitionEnter: true,
	  transitionLeave: true
	};


	module.exports = ReactCSSTransitionGroup;

/***/ },
/* 890 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var React = __webpack_require__(34);
	var ReactAddonsDOMDependencies = __webpack_require__(402);

	var CSSCore = __webpack_require__(901);
	var ReactTransitionEvents = __webpack_require__(897);

	var onlyChild = __webpack_require__(406);

	var TICK = 17;

	var ReactCSSTransitionGroupChild = React.createClass({
	  displayName: 'ReactCSSTransitionGroupChild',

	  propTypes: {
	    name: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.shape({
	      enter: React.PropTypes.string,
	      leave: React.PropTypes.string,
	      active: React.PropTypes.string
	    }), React.PropTypes.shape({
	      enter: React.PropTypes.string,
	      enterActive: React.PropTypes.string,
	      leave: React.PropTypes.string,
	      leaveActive: React.PropTypes.string,
	      appear: React.PropTypes.string,
	      appearActive: React.PropTypes.string
	    })]).isRequired,

	    // Once we require timeouts to be specified, we can remove the
	    // boolean flags (appear etc.) and just accept a number
	    // or a bool for the timeout flags (appearTimeout etc.)
	    appear: React.PropTypes.bool,
	    enter: React.PropTypes.bool,
	    leave: React.PropTypes.bool,
	    appearTimeout: React.PropTypes.number,
	    enterTimeout: React.PropTypes.number,
	    leaveTimeout: React.PropTypes.number
	  },

	  transition: function (animationType, finishCallback, userSpecifiedDelay) {
	    var node = ReactAddonsDOMDependencies.getReactDOM().findDOMNode(this);

	    if (!node) {
	      if (finishCallback) {
	        finishCallback();
	      }
	      return;
	    }

	    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
	    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
	    var timeout = null;

	    var endListener = function (e) {
	      if (e && e.target !== node) {
	        return;
	      }

	      clearTimeout(timeout);

	      CSSCore.removeClass(node, className);
	      CSSCore.removeClass(node, activeClassName);

	      ReactTransitionEvents.removeEndEventListener(node, endListener);

	      // Usually this optional callback is used for informing an owner of
	      // a leave animation and telling it to remove the child.
	      if (finishCallback) {
	        finishCallback();
	      }
	    };

	    CSSCore.addClass(node, className);

	    // Need to do this to actually trigger a transition.
	    this.queueClassAndNode(activeClassName, node);

	    // If the user specified a timeout delay.
	    if (userSpecifiedDelay) {
	      // Clean-up the animation after the specified delay
	      timeout = setTimeout(endListener, userSpecifiedDelay);
	      this.transitionTimeouts.push(timeout);
	    } else {
	      // DEPRECATED: this listener will be removed in a future version of react
	      ReactTransitionEvents.addEndEventListener(node, endListener);
	    }
	  },

	  queueClassAndNode: function (className, node) {
	    this.classNameAndNodeQueue.push({
	      className: className,
	      node: node
	    });

	    if (!this.timeout) {
	      this.timeout = setTimeout(this.flushClassNameAndNodeQueue, TICK);
	    }
	  },

	  flushClassNameAndNodeQueue: function () {
	    if (this.isMounted()) {
	      this.classNameAndNodeQueue.forEach(function (obj) {
	        CSSCore.addClass(obj.node, obj.className);
	      });
	    }
	    this.classNameAndNodeQueue.length = 0;
	    this.timeout = null;
	  },

	  componentWillMount: function () {
	    this.classNameAndNodeQueue = [];
	    this.transitionTimeouts = [];
	  },

	  componentWillUnmount: function () {
	    if (this.timeout) {
	      clearTimeout(this.timeout);
	    }
	    this.transitionTimeouts.forEach(function (timeout) {
	      clearTimeout(timeout);
	    });

	    this.classNameAndNodeQueue.length = 0;
	  },

	  componentWillAppear: function (done) {
	    if (this.props.appear) {
	      this.transition('appear', done, this.props.appearTimeout);
	    } else {
	      done();
	    }
	  },

	  componentWillEnter: function (done) {
	    if (this.props.enter) {
	      this.transition('enter', done, this.props.enterTimeout);
	    } else {
	      done();
	    }
	  },

	  componentWillLeave: function (done) {
	    if (this.props.leave) {
	      this.transition('leave', done, this.props.leaveTimeout);
	    } else {
	      done();
	    }
	  },

	  render: function () {
	    return onlyChild(this.props.children);
	  }
	});

	module.exports = ReactCSSTransitionGroupChild;

/***/ },
/* 891 */,
/* 892 */,
/* 893 */,
/* 894 */,
/* 895 */,
/* 896 */,
/* 897 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(902);

	var getVendorPrefixedEventName = __webpack_require__(377);

	var endEvents = [];

	function detectEvents() {
	  var animEnd = getVendorPrefixedEventName('animationend');
	  var transEnd = getVendorPrefixedEventName('transitionend');

	  if (animEnd) {
	    endEvents.push(animEnd);
	  }

	  if (transEnd) {
	    endEvents.push(transEnd);
	  }
	}

	if (ExecutionEnvironment.canUseDOM) {
	  detectEvents();
	}

	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var ReactTransitionEvents = {
	  addEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },

	  removeEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};

	module.exports = ReactTransitionEvents;

/***/ },
/* 898 */,
/* 899 */,
/* 900 */,
/* 901 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var invariant = __webpack_require__(58);

	/**
	 * The CSSCore module specifies the API (and implements most of the methods)
	 * that should be used when dealing with the display of elements (via their
	 * CSS classes and visibility on screen. It is an API focused on mutating the
	 * display and not reading it as no logical state should be encoded in the
	 * display of elements.
	 */

	/* Slow implementation for browsers that don't natively support .matches() */
	function matchesSelector_SLOW(element, selector) {
	  var root = element;
	  while (root.parentNode) {
	    root = root.parentNode;
	  }

	  var all = root.querySelectorAll(selector);
	  return Array.prototype.indexOf.call(all, element) !== -1;
	}

	var CSSCore = {

	  /**
	   * Adds the class passed in to the element if it doesn't already have it.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  addClass: function addClass(element, className) {
	    !!/\s/.test(className) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'CSSCore.addClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : void 0;

	    if (className) {
	      if (element.classList) {
	        element.classList.add(className);
	      } else if (!CSSCore.hasClass(element, className)) {
	        element.className = element.className + ' ' + className;
	      }
	    }
	    return element;
	  },

	  /**
	   * Removes the class passed in from the element
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  removeClass: function removeClass(element, className) {
	    !!/\s/.test(className) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'CSSCore.removeClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : void 0;

	    if (className) {
	      if (element.classList) {
	        element.classList.remove(className);
	      } else if (CSSCore.hasClass(element, className)) {
	        element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
	        .replace(/^\s*|\s*$/g, ''); // trim the ends
	      }
	    }
	    return element;
	  },

	  /**
	   * Helper to add or remove a class from an element based on a condition.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @param {*} bool condition to whether to add or remove the class
	   * @return {DOMElement} the element passed in
	   */
	  conditionClass: function conditionClass(element, className, bool) {
	    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
	  },

	  /**
	   * Tests whether the element has the class specified.
	   *
	   * @param {DOMNode|DOMWindow} element the element to check the class on
	   * @param {string} className the CSS className
	   * @return {boolean} true if the element has the class, false if not
	   */
	  hasClass: function hasClass(element, className) {
	    !!/\s/.test(className) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'CSS.hasClass takes only a single class name.') : invariant(false) : void 0;
	    if (element.classList) {
	      return !!className && element.classList.contains(className);
	    }
	    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	  },

	  /**
	   * Tests whether the element matches the selector specified
	   *
	   * @param {DOMNode|DOMWindow} element the element that we are querying
	   * @param {string} selector the CSS selector
	   * @return {boolean} true if the element matches the selector, false if not
	   */
	  matchesSelector: function matchesSelector(element, selector) {
	    var matchesImpl = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector || function (s) {
	      return matchesSelector_SLOW(element, s);
	    };
	    return matchesImpl.call(element, selector);
	  }

	};

	module.exports = CSSCore;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 902 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;

/***/ },
/* 903 */,
/* 904 */,
/* 905 */,
/* 906 */,
/* 907 */,
/* 908 */,
/* 909 */,
/* 910 */,
/* 911 */,
/* 912 */,
/* 913 */,
/* 914 */,
/* 915 */,
/* 916 */,
/* 917 */,
/* 918 */,
/* 919 */,
/* 920 */,
/* 921 */,
/* 922 */,
/* 923 */,
/* 924 */,
/* 925 */,
/* 926 */,
/* 927 */,
/* 928 */,
/* 929 */,
/* 930 */,
/* 931 */,
/* 932 */,
/* 933 */,
/* 934 */,
/* 935 */,
/* 936 */,
/* 937 */,
/* 938 */,
/* 939 */,
/* 940 */,
/* 941 */,
/* 942 */,
/* 943 */,
/* 944 */,
/* 945 */,
/* 946 */,
/* 947 */,
/* 948 */,
/* 949 */,
/* 950 */,
/* 951 */,
/* 952 */,
/* 953 */,
/* 954 */,
/* 955 */,
/* 956 */,
/* 957 */,
/* 958 */,
/* 959 */,
/* 960 */,
/* 961 */,
/* 962 */,
/* 963 */,
/* 964 */,
/* 965 */,
/* 966 */,
/* 967 */,
/* 968 */,
/* 969 */,
/* 970 */,
/* 971 */,
/* 972 */,
/* 973 */,
/* 974 */,
/* 975 */,
/* 976 */,
/* 977 */,
/* 978 */,
/* 979 */,
/* 980 */,
/* 981 */,
/* 982 */,
/* 983 */,
/* 984 */,
/* 985 */,
/* 986 */,
/* 987 */,
/* 988 */,
/* 989 */,
/* 990 */,
/* 991 */,
/* 992 */,
/* 993 */,
/* 994 */,
/* 995 */,
/* 996 */,
/* 997 */,
/* 998 */,
/* 999 */,
/* 1000 */,
/* 1001 */,
/* 1002 */,
/* 1003 */,
/* 1004 */,
/* 1005 */,
/* 1006 */,
/* 1007 */,
/* 1008 */,
/* 1009 */,
/* 1010 */,
/* 1011 */,
/* 1012 */,
/* 1013 */,
/* 1014 */,
/* 1015 */,
/* 1016 */,
/* 1017 */,
/* 1018 */,
/* 1019 */,
/* 1020 */,
/* 1021 */,
/* 1022 */,
/* 1023 */,
/* 1024 */,
/* 1025 */,
/* 1026 */,
/* 1027 */,
/* 1028 */,
/* 1029 */,
/* 1030 */,
/* 1031 */,
/* 1032 */,
/* 1033 */,
/* 1034 */,
/* 1035 */,
/* 1036 */,
/* 1037 */,
/* 1038 */,
/* 1039 */,
/* 1040 */,
/* 1041 */,
/* 1042 */,
/* 1043 */,
/* 1044 */,
/* 1045 */,
/* 1046 */,
/* 1047 */,
/* 1048 */,
/* 1049 */,
/* 1050 */,
/* 1051 */,
/* 1052 */,
/* 1053 */,
/* 1054 */,
/* 1055 */,
/* 1056 */,
/* 1057 */,
/* 1058 */,
/* 1059 */,
/* 1060 */,
/* 1061 */,
/* 1062 */,
/* 1063 */,
/* 1064 */,
/* 1065 */,
/* 1066 */,
/* 1067 */,
/* 1068 */,
/* 1069 */,
/* 1070 */,
/* 1071 */,
/* 1072 */,
/* 1073 */,
/* 1074 */,
/* 1075 */,
/* 1076 */,
/* 1077 */,
/* 1078 */,
/* 1079 */,
/* 1080 */,
/* 1081 */,
/* 1082 */,
/* 1083 */,
/* 1084 */,
/* 1085 */,
/* 1086 */,
/* 1087 */,
/* 1088 */,
/* 1089 */,
/* 1090 */,
/* 1091 */,
/* 1092 */,
/* 1093 */,
/* 1094 */,
/* 1095 */,
/* 1096 */,
/* 1097 */,
/* 1098 */,
/* 1099 */,
/* 1100 */,
/* 1101 */,
/* 1102 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAkCAMAAACg5NohAAAAh1BMVEVHcEyqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinKqinJukpnyAAAALHRSTlMAQAy/U/eM7+rhBSQTtcgYedKqNtgQgvyGt05HkSjzZWguXNocxbKUpcotbzUwX3oAAAFKSURBVHhefZPnboMwGAA/pm02lBECWc3ouvd/vkooQeCi3t+D8/hkWeD650a2iUvztm2aED7zTbVXEJyiDXPwAMqNZNMy8fE36Wsmju+2+U554lnJqGUmdNc5w4xZJeMHC9LDQu06luwWuZoVtf8yt56JQKngmby9cgEQ1GlYFGFfB8CxlYnhCpjwIhOX0HRwHaYp9YDnyIzjAX0jEp019KsbuKSgfyLJM7juZcVQw9dN3jW01pCiAvRJPjuMIxaOoaukhCq2VVxBLRrCxFZJCFoUtK6t3BbUf3+V8DjY6vCAUqoOPdhq0HSVnBXs3I2lzhKXYPy18g2UsUSFgvvq0I4HqohE8hTI/HmXiZ8BaT599AXo0YkT101iZ9RA9szsM4CjNxbF6B0B7vMo3qqABUG1GF9zytTTBio7NbIk34+eUcrcP/zXU/kFYOoy5tOA3/AAAAAASUVORK5CYII="

/***/ },
/* 1103 */,
/* 1104 */,
/* 1105 */,
/* 1106 */,
/* 1107 */,
/* 1108 */,
/* 1109 */
/***/ function(module, exports) {

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array ? array.length : 0;
	  return length ? array[length - 1] : undefined;
	}

	module.exports = last;


/***/ },
/* 1110 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(263);


/***/ },
/* 1111 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(461),
	    baseCallback = __webpack_require__(1119),
	    baseMap = __webpack_require__(1128),
	    isArray = __webpack_require__(50);

	/**
	 * Creates an array of values by running each element in `collection` through
	 * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
	 * arguments: (value, index|key, collection).
	 *
	 * If a property name is provided for `iteratee` the created `_.property`
	 * style callback returns the property value of the given element.
	 *
	 * If a value is also provided for `thisArg` the created `_.matchesProperty`
	 * style callback returns `true` for elements that have a matching property
	 * value, else `false`.
	 *
	 * If an object is provided for `iteratee` the created `_.matches` style
	 * callback returns `true` for elements that have the properties of the given
	 * object, else `false`.
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	 *
	 * The guarded methods are:
	 * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
	 * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
	 * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
	 * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
	 * `sum`, `uniq`, and `words`
	 *
	 * @static
	 * @memberOf _
	 * @alias collect
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	 *  per iteration.
	 * @param {*} [thisArg] The `this` binding of `iteratee`.
	 * @returns {Array} Returns the new mapped array.
	 * @example
	 *
	 * function timesThree(n) {
	 *   return n * 3;
	 * }
	 *
	 * _.map([1, 2], timesThree);
	 * // => [3, 6]
	 *
	 * _.map({ 'a': 1, 'b': 2 }, timesThree);
	 * // => [3, 6] (iteration order is not guaranteed)
	 *
	 * var users = [
	 *   { 'user': 'barney' },
	 *   { 'user': 'fred' }
	 * ];
	 *
	 * // using the `_.property` callback shorthand
	 * _.map(users, 'user');
	 * // => ['barney', 'fred']
	 */
	function map(collection, iteratee, thisArg) {
	  var func = isArray(collection) ? arrayMap : baseMap;
	  iteratee = baseCallback(iteratee, thisArg, 3);
	  return func(collection, iteratee);
	}

	module.exports = map;


/***/ },
/* 1112 */
/***/ function(module, exports, __webpack_require__) {

	var map = __webpack_require__(1111),
	    property = __webpack_require__(473);

	/**
	 * Gets the property value of `path` from all elements in `collection`.
	 *
	 * @static
	 * @memberOf _
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Array|string} path The path of the property to pluck.
	 * @returns {Array} Returns the property values.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney', 'age': 36 },
	 *   { 'user': 'fred',   'age': 40 }
	 * ];
	 *
	 * _.pluck(users, 'user');
	 * // => ['barney', 'fred']
	 *
	 * var userIndex = _.indexBy(users, 'user');
	 * _.pluck(userIndex, 'age');
	 * // => [36, 40] (iteration order is not guaranteed)
	 */
	function pluck(collection, path) {
	  return map(collection, property(path));
	}

	module.exports = pluck;


/***/ },
/* 1113 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var cachePush = __webpack_require__(1135),
	    getNative = __webpack_require__(158);

	/** Native method references. */
	var Set = getNative(global, 'Set');

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');

	/**
	 *
	 * Creates a cache object to store unique values.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var length = values ? values.length : 0;

	  this.data = { 'hash': nativeCreate(null), 'set': new Set };
	  while (length--) {
	    this.push(values[length]);
	  }
	}

	// Add functions to the `Set` cache.
	SetCache.prototype.push = cachePush;

	module.exports = SetCache;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1114 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ },
/* 1115 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 1116 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 1117 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(78);

	/**
	 * A specialized version of `_.assign` for customizing assigned values without
	 * support for argument juggling, multiple sources, and `this` binding `customizer`
	 * functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {Function} customizer The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 */
	function assignWith(object, source, customizer) {
	  var index = -1,
	      props = keys(source),
	      length = props.length;

	  while (++index < length) {
	    var key = props[index],
	        value = object[key],
	        result = customizer(value, source[key], key, object, source);

	    if ((result === result ? (result !== value) : (value === value)) ||
	        (value === undefined && !(key in object))) {
	      object[key] = result;
	    }
	  }
	  return object;
	}

	module.exports = assignWith;


/***/ },
/* 1118 */
/***/ function(module, exports, __webpack_require__) {

	var baseCopy = __webpack_require__(1120),
	    keys = __webpack_require__(78);

	/**
	 * The base implementation of `_.assign` without support for argument juggling,
	 * multiple sources, and `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return source == null
	    ? object
	    : baseCopy(source, keys(source), object);
	}

	module.exports = baseAssign;


/***/ },
/* 1119 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(1129),
	    baseMatchesProperty = __webpack_require__(1130),
	    bindCallback = __webpack_require__(113),
	    identity = __webpack_require__(472),
	    property = __webpack_require__(473);

	/**
	 * The base implementation of `_.callback` which supports specifying the
	 * number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {*} [func=_.identity] The value to convert to a callback.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function baseCallback(func, thisArg, argCount) {
	  var type = typeof func;
	  if (type == 'function') {
	    return thisArg === undefined
	      ? func
	      : bindCallback(func, thisArg, argCount);
	  }
	  if (func == null) {
	    return identity;
	  }
	  if (type == 'object') {
	    return baseMatches(func);
	  }
	  return thisArg === undefined
	    ? property(func)
	    : baseMatchesProperty(func, thisArg);
	}

	module.exports = baseCallback;


/***/ },
/* 1120 */
/***/ function(module, exports) {

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, props, object) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}

	module.exports = baseCopy;


/***/ },
/* 1121 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(1125),
	    cacheIndexOf = __webpack_require__(1134),
	    createCache = __webpack_require__(1139);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of `_.difference` which accepts a single array
	 * of values to exclude.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values) {
	  var length = array ? array.length : 0,
	      result = [];

	  if (!length) {
	    return result;
	  }
	  var index = -1,
	      indexOf = baseIndexOf,
	      isCommon = true,
	      cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
	      valuesLength = values.length;

	  if (cache) {
	    indexOf = cacheIndexOf;
	    isCommon = false;
	    values = cache;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index];

	    if (isCommon && value === value) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === value) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (indexOf(values, value, 0) < 0) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseDifference;


/***/ },
/* 1122 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(1115),
	    isArguments = __webpack_require__(266),
	    isArray = __webpack_require__(50),
	    isArrayLike = __webpack_require__(114),
	    isObjectLike = __webpack_require__(99);

	/**
	 * The base implementation of `_.flatten` with added support for restricting
	 * flattening and specifying the start index.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {boolean} [isDeep] Specify a deep flatten.
	 * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, isDeep, isStrict, result) {
	  result || (result = []);

	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    var value = array[index];
	    if (isObjectLike(value) && isArrayLike(value) &&
	        (isStrict || isArray(value) || isArguments(value))) {
	      if (isDeep) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, isDeep, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	module.exports = baseFlatten;


/***/ },
/* 1123 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(463),
	    keysIn = __webpack_require__(267);

	/**
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}

	module.exports = baseForIn;


/***/ },
/* 1124 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(463),
	    keys = __webpack_require__(78);

	/**
	 * The base implementation of `_.forOwn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ },
/* 1125 */
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(1145);

	/**
	 * The base implementation of `_.indexOf` without support for binary searches.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseIndexOf;


/***/ },
/* 1126 */
/***/ function(module, exports, __webpack_require__) {

	var equalArrays = __webpack_require__(1141),
	    equalByTag = __webpack_require__(1142),
	    equalObjects = __webpack_require__(1143),
	    isArray = __webpack_require__(50),
	    isTypedArray = __webpack_require__(1152);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = objToString.call(object);
	    if (objTag == argsTag) {
	      objTag = objectTag;
	    } else if (objTag != objectTag) {
	      objIsArr = isTypedArray(object);
	    }
	  }
	  if (!othIsArr) {
	    othTag = objToString.call(other);
	    if (othTag == argsTag) {
	      othTag = objectTag;
	    } else if (othTag != objectTag) {
	      othIsArr = isTypedArray(other);
	    }
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && !(objIsArr || objIsObj)) {
	    return equalByTag(object, other, objTag);
	  }
	  if (!isLoose) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  // For more information on detecting circular references see https://es5.github.io/#JO.
	  stackA || (stackA = []);
	  stackB || (stackB = []);

	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] == object) {
	      return stackB[length] == other;
	    }
	  }
	  // Add `object` and `other` to the stack of traversed objects.
	  stackA.push(object);
	  stackB.push(other);

	  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);

	  stackA.pop();
	  stackB.pop();

	  return result;
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 1127 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(264),
	    toObject = __webpack_require__(49);

	/**
	 * The base implementation of `_.isMatch` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Array} matchData The propery names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = toObject(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ },
/* 1128 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(462),
	    isArrayLike = __webpack_require__(114);

	/**
	 * The base implementation of `_.map` without support for callback shorthands
	 * and `this` binding.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function baseMap(collection, iteratee) {
	  var index = -1,
	      result = isArrayLike(collection) ? Array(collection.length) : [];

	  baseEach(collection, function(value, key, collection) {
	    result[++index] = iteratee(value, key, collection);
	  });
	  return result;
	}

	module.exports = baseMap;


/***/ },
/* 1129 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(1127),
	    getMatchData = __webpack_require__(1144),
	    toObject = __webpack_require__(49);

	/**
	 * The base implementation of `_.matches` which does not clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    var key = matchData[0][0],
	        value = matchData[0][1];

	    return function(object) {
	      if (object == null) {
	        return false;
	      }
	      return object[key] === value && (value !== undefined || (key in toObject(object)));
	    };
	  }
	  return function(object) {
	    return baseIsMatch(object, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 1130 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(464),
	    baseIsEqual = __webpack_require__(264),
	    baseSlice = __webpack_require__(1132),
	    isArray = __webpack_require__(50),
	    isKey = __webpack_require__(467),
	    isStrictComparable = __webpack_require__(468),
	    last = __webpack_require__(1109),
	    toObject = __webpack_require__(49),
	    toPath = __webpack_require__(469);

	/**
	 * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to compare.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  var isArr = isArray(path),
	      isCommon = isKey(path) && isStrictComparable(srcValue),
	      pathKey = (path + '');

	  path = toPath(path);
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    var key = pathKey;
	    object = toObject(object);
	    if ((isArr || !isCommon) && !(key in object)) {
	      object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	      if (object == null) {
	        return false;
	      }
	      key = last(path);
	      object = toObject(object);
	    }
	    return object[key] === srcValue
	      ? (srcValue !== undefined || (key in object))
	      : baseIsEqual(srcValue, object[key], undefined, true);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ },
/* 1131 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(464),
	    toPath = __webpack_require__(469);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function basePropertyDeep(path) {
	  var pathKey = (path + '');
	  path = toPath(path);
	  return function(object) {
	    return baseGet(object, path, pathKey);
	  };
	}

	module.exports = basePropertyDeep;


/***/ },
/* 1132 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  start = start == null ? 0 : (+start || 0);
	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = (end === undefined || end > length) ? length : (+end || 0);
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	module.exports = baseSlice;


/***/ },
/* 1133 */
/***/ function(module, exports) {

	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` or `undefined` values.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  return value == null ? '' : (value + '');
	}

	module.exports = baseToString;


/***/ },
/* 1134 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(42);

	/**
	 * Checks if `value` is in `cache` mimicking the return signature of
	 * `_.indexOf` by returning `0` if the value is found, else `-1`.
	 *
	 * @private
	 * @param {Object} cache The cache to search.
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `0` if `value` is found, else `-1`.
	 */
	function cacheIndexOf(cache, value) {
	  var data = cache.data,
	      result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];

	  return result ? 0 : -1;
	}

	module.exports = cacheIndexOf;


/***/ },
/* 1135 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(42);

	/**
	 * Adds `value` to the cache.
	 *
	 * @private
	 * @name push
	 * @memberOf SetCache
	 * @param {*} value The value to cache.
	 */
	function cachePush(value) {
	  var data = this.data;
	  if (typeof value == 'string' || isObject(value)) {
	    data.set.add(value);
	  } else {
	    data.hash[value] = true;
	  }
	}

	module.exports = cachePush;


/***/ },
/* 1136 */
/***/ function(module, exports, __webpack_require__) {

	var bindCallback = __webpack_require__(113),
	    isIterateeCall = __webpack_require__(1146),
	    restParam = __webpack_require__(460);

	/**
	 * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return restParam(function(object, sources) {
	    var index = -1,
	        length = object == null ? 0 : sources.length,
	        customizer = length > 2 ? sources[length - 2] : undefined,
	        guard = length > 2 ? sources[2] : undefined,
	        thisArg = length > 1 ? sources[length - 1] : undefined;

	    if (typeof customizer == 'function') {
	      customizer = bindCallback(customizer, thisArg, 5);
	      length -= 2;
	    } else {
	      customizer = typeof thisArg == 'function' ? thisArg : undefined;
	      length -= (customizer ? 1 : 0);
	    }
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 1137 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(466),
	    isLength = __webpack_require__(98),
	    toObject = __webpack_require__(49);

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    var length = collection ? getLength(collection) : 0;
	    if (!isLength(length)) {
	      return eachFunc(collection, iteratee);
	    }
	    var index = fromRight ? length : -1,
	        iterable = toObject(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	module.exports = createBaseEach;


/***/ },
/* 1138 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(49);

	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;

	    while ((fromRight ? index-- : ++index < length)) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ },
/* 1139 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var SetCache = __webpack_require__(1113),
	    getNative = __webpack_require__(158);

	/** Native method references. */
	var Set = getNative(global, 'Set');

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');

	/**
	 * Creates a `Set` cache object to optimize linear searches of large arrays.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
	 */
	function createCache(values) {
	  return (nativeCreate && Set) ? new SetCache(values) : null;
	}

	module.exports = createCache;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1140 */
/***/ function(module, exports, __webpack_require__) {

	var bindCallback = __webpack_require__(113),
	    isArray = __webpack_require__(50);

	/**
	 * Creates a function for `_.forEach` or `_.forEachRight`.
	 *
	 * @private
	 * @param {Function} arrayFunc The function to iterate over an array.
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @returns {Function} Returns the new each function.
	 */
	function createForEach(arrayFunc, eachFunc) {
	  return function(collection, iteratee, thisArg) {
	    return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	      ? arrayFunc(collection, iteratee)
	      : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
	  };
	}

	module.exports = createForEach;


/***/ },
/* 1141 */
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(1116);

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing arrays.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var index = -1,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	    return false;
	  }
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index],
	        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;

	    if (result !== undefined) {
	      if (result) {
	        continue;
	      }
	      return false;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isLoose) {
	      if (!arraySome(other, function(othValue) {
	            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	          })) {
	        return false;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = equalArrays;


/***/ },
/* 1142 */
/***/ function(module, exports) {

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag) {
	  switch (tag) {
	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	      return +object == +other;

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object)
	        ? other != +other
	        : object == +other;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings primitives and string
	      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	      return object == (other + '');
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 1143 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(78);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isLoose) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  var skipCtor = isLoose;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key],
	        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;

	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	      return false;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (!skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = equalObjects;


/***/ },
/* 1144 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(468),
	    pairs = __webpack_require__(1155);

	/**
	 * Gets the propery names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = pairs(object),
	      length = result.length;

	  while (length--) {
	    result[length][2] = isStrictComparable(result[length][1]);
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ },
/* 1145 */
/***/ function(module, exports) {

	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 0 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = indexOfNaN;


/***/ },
/* 1146 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(114),
	    isIndex = __webpack_require__(265),
	    isObject = __webpack_require__(42);

	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 1147 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(49);

	/**
	 * A specialized version of `_.pick` which picks `object` properties specified
	 * by `props`.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property names to pick.
	 * @returns {Object} Returns the new object.
	 */
	function pickByArray(object, props) {
	  object = toObject(object);

	  var index = -1,
	      length = props.length,
	      result = {};

	  while (++index < length) {
	    var key = props[index];
	    if (key in object) {
	      result[key] = object[key];
	    }
	  }
	  return result;
	}

	module.exports = pickByArray;


/***/ },
/* 1148 */
/***/ function(module, exports, __webpack_require__) {

	var baseForIn = __webpack_require__(1123);

	/**
	 * A specialized version of `_.pick` which picks `object` properties `predicate`
	 * returns truthy for.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Object} Returns the new object.
	 */
	function pickByCallback(object, predicate) {
	  var result = {};
	  baseForIn(object, function(value, key, object) {
	    if (predicate(value, key, object)) {
	      result[key] = value;
	    }
	  });
	  return result;
	}

	module.exports = pickByCallback;


/***/ },
/* 1149 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(266),
	    isArray = __webpack_require__(50),
	    isIndex = __webpack_require__(265),
	    isLength = __webpack_require__(98),
	    keysIn = __webpack_require__(267);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;

	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));

	  var index = -1,
	      result = [];

	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = shimKeys;


/***/ },
/* 1150 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(42);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	module.exports = isFunction;


/***/ },
/* 1151 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(1150),
	    isObjectLike = __webpack_require__(99);

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = isNative;


/***/ },
/* 1152 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(98),
	    isObjectLike = __webpack_require__(99);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	}

	module.exports = isTypedArray;


/***/ },
/* 1153 */
/***/ function(module, exports, __webpack_require__) {

	var assignWith = __webpack_require__(1117),
	    baseAssign = __webpack_require__(1118),
	    createAssigner = __webpack_require__(1136);

	/**
	 * Assigns own enumerable properties of source object(s) to the destination
	 * object. Subsequent sources overwrite property assignments of previous sources.
	 * If `customizer` is provided it's invoked to produce the assigned values.
	 * The `customizer` is bound to `thisArg` and invoked with five arguments:
	 * (objectValue, sourceValue, key, object, source).
	 *
	 * **Note:** This method mutates `object` and is based on
	 * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
	 *
	 * @static
	 * @memberOf _
	 * @alias extend
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	 * // => { 'user': 'fred', 'age': 40 }
	 *
	 * // using a customizer callback
	 * var defaults = _.partialRight(_.assign, function(value, other) {
	 *   return _.isUndefined(value) ? other : value;
	 * });
	 *
	 * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	 * // => { 'user': 'barney', 'age': 36 }
	 */
	var assign = createAssigner(function(object, source, customizer) {
	  return customizer
	    ? assignWith(object, source, customizer)
	    : baseAssign(object, source);
	});

	module.exports = assign;


/***/ },
/* 1154 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1153);


/***/ },
/* 1155 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(78),
	    toObject = __webpack_require__(49);

	/**
	 * Creates a two dimensional array of the key-value pairs for `object`,
	 * e.g. `[[key1, value1], [key2, value2]]`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the new array of key-value pairs.
	 * @example
	 *
	 * _.pairs({ 'barney': 36, 'fred': 40 });
	 * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	 */
	function pairs(object) {
	  object = toObject(object);

	  var index = -1,
	      props = keys(object),
	      length = props.length,
	      result = Array(length);

	  while (++index < length) {
	    var key = props[index];
	    result[index] = [key, object[key]];
	  }
	  return result;
	}

	module.exports = pairs;


/***/ },
/* 1156 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(237);

/***/ },
/* 1157 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! VelocityJS.org (1.4.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */

	/*************************
	 Velocity jQuery Shim
	 *************************/

	/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */

	/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */
	/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */
	/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */

	(function(window) {
		"use strict";
		/***************
		 Setup
		 ***************/

		/* If jQuery is already loaded, there's no point in loading this shim. */
		if (window.jQuery) {
			return;
		}

		/* jQuery base. */
		var $ = function(selector, context) {
			return new $.fn.init(selector, context);
		};

		/********************
		 Private Methods
		 ********************/

		/* jQuery */
		$.isWindow = function(obj) {
			/* jshint eqeqeq: false */
			return obj && obj === obj.window;
		};

		/* jQuery */
		$.type = function(obj) {
			if (!obj) {
				return obj + "";
			}

			return typeof obj === "object" || typeof obj === "function" ?
					class2type[toString.call(obj)] || "object" :
					typeof obj;
		};

		/* jQuery */
		$.isArray = Array.isArray || function(obj) {
			return $.type(obj) === "array";
		};

		/* jQuery */
		function isArraylike(obj) {
			var length = obj.length,
					type = $.type(obj);

			if (type === "function" || $.isWindow(obj)) {
				return false;
			}

			if (obj.nodeType === 1 && length) {
				return true;
			}

			return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
		}

		/***************
		 $ Methods
		 ***************/

		/* jQuery: Support removed for IE<9. */
		$.isPlainObject = function(obj) {
			var key;

			if (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {
				return false;
			}

			try {
				if (obj.constructor &&
						!hasOwn.call(obj, "constructor") &&
						!hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
					return false;
				}
			} catch (e) {
				return false;
			}

			for (key in obj) {
			}

			return key === undefined || hasOwn.call(obj, key);
		};

		/* jQuery */
		$.each = function(obj, callback, args) {
			var value,
					i = 0,
					length = obj.length,
					isArray = isArraylike(obj);

			if (args) {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.apply(obj[i], args);

						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						if (!obj.hasOwnProperty(i)) {
							continue;
						}
						value = callback.apply(obj[i], args);

						if (value === false) {
							break;
						}
					}
				}

			} else {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.call(obj[i], i, obj[i]);

						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						if (!obj.hasOwnProperty(i)) {
							continue;
						}
						value = callback.call(obj[i], i, obj[i]);

						if (value === false) {
							break;
						}
					}
				}
			}

			return obj;
		};

		/* Custom */
		$.data = function(node, key, value) {
			/* $.getData() */
			if (value === undefined) {
				var getId = node[$.expando],
						store = getId && cache[getId];

				if (key === undefined) {
					return store;
				} else if (store) {
					if (key in store) {
						return store[key];
					}
				}
				/* $.setData() */
			} else if (key !== undefined) {
				var setId = node[$.expando] || (node[$.expando] = ++$.uuid);

				cache[setId] = cache[setId] || {};
				cache[setId][key] = value;

				return value;
			}
		};

		/* Custom */
		$.removeData = function(node, keys) {
			var id = node[$.expando],
					store = id && cache[id];

			if (store) {
				// Cleanup the entire store if no keys are provided.
				if (!keys) {
					delete cache[id];
				} else {
					$.each(keys, function(_, key) {
						delete store[key];
					});
				}
			}
		};

		/* jQuery */
		$.extend = function() {
			var src, copyIsArray, copy, name, options, clone,
					target = arguments[0] || {},
					i = 1,
					length = arguments.length,
					deep = false;

			if (typeof target === "boolean") {
				deep = target;

				target = arguments[i] || {};
				i++;
			}

			if (typeof target !== "object" && $.type(target) !== "function") {
				target = {};
			}

			if (i === length) {
				target = this;
				i--;
			}

			for (; i < length; i++) {
				if ((options = arguments[i])) {
					for (name in options) {
						if (!options.hasOwnProperty(name)) {
							continue;
						}
						src = target[name];
						copy = options[name];

						if (target === copy) {
							continue;
						}

						if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && $.isArray(src) ? src : [];

							} else {
								clone = src && $.isPlainObject(src) ? src : {};
							}

							target[name] = $.extend(deep, clone, copy);

						} else if (copy !== undefined) {
							target[name] = copy;
						}
					}
				}
			}

			return target;
		};

		/* jQuery 1.4.3 */
		$.queue = function(elem, type, data) {
			function $makeArray(arr, results) {
				var ret = results || [];

				if (arr) {
					if (isArraylike(Object(arr))) {
						/* $.merge */
						(function(first, second) {
							var len = +second.length,
									j = 0,
									i = first.length;

							while (j < len) {
								first[i++] = second[j++];
							}

							if (len !== len) {
								while (second[j] !== undefined) {
									first[i++] = second[j++];
								}
							}

							first.length = i;

							return first;
						})(ret, typeof arr === "string" ? [arr] : arr);
					} else {
						[].push.call(ret, arr);
					}
				}

				return ret;
			}

			if (!elem) {
				return;
			}

			type = (type || "fx") + "queue";

			var q = $.data(elem, type);

			if (!data) {
				return q || [];
			}

			if (!q || $.isArray(data)) {
				q = $.data(elem, type, $makeArray(data));
			} else {
				q.push(data);
			}

			return q;
		};

		/* jQuery 1.4.3 */
		$.dequeue = function(elems, type) {
			/* Custom: Embed element iteration. */
			$.each(elems.nodeType ? [elems] : elems, function(i, elem) {
				type = type || "fx";

				var queue = $.queue(elem, type),
						fn = queue.shift();

				if (fn === "inprogress") {
					fn = queue.shift();
				}

				if (fn) {
					if (type === "fx") {
						queue.unshift("inprogress");
					}

					fn.call(elem, function() {
						$.dequeue(elem, type);
					});
				}
			});
		};

		/******************
		 $.fn Methods
		 ******************/

		/* jQuery */
		$.fn = $.prototype = {
			init: function(selector) {
				/* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */
				if (selector.nodeType) {
					this[0] = selector;

					return this;
				} else {
					throw new Error("Not a DOM node.");
				}
			},
			offset: function() {
				/* jQuery altered code: Dropped disconnected DOM node checking. */
				var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};

				return {
					top: box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
					left: box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
				};
			},
			position: function() {
				/* jQuery */
				function offsetParentFn(elem) {
					var offsetParent = elem.offsetParent;

					while (offsetParent && offsetParent.nodeName.toLowerCase() !== "html" && offsetParent.style && offsetParent.style.position === "static") {
						offsetParent = offsetParent.offsetParent;
					}

					return offsetParent || document;
				}

				/* Zepto */
				var elem = this[0],
						offsetParent = offsetParentFn(elem),
						offset = this.offset(),
						parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? {top: 0, left: 0} : $(offsetParent).offset();

				offset.top -= parseFloat(elem.style.marginTop) || 0;
				offset.left -= parseFloat(elem.style.marginLeft) || 0;

				if (offsetParent.style) {
					parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;
					parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0;
				}

				return {
					top: offset.top - parentOffset.top,
					left: offset.left - parentOffset.left
				};
			}
		};

		/**********************
		 Private Variables
		 **********************/

		/* For $.data() */
		var cache = {};
		$.expando = "velocity" + (new Date().getTime());
		$.uuid = 0;

		/* For $.queue() */
		var class2type = {},
				hasOwn = class2type.hasOwnProperty,
				toString = class2type.toString;

		var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
		for (var i = 0; i < types.length; i++) {
			class2type["[object " + types[i] + "]"] = types[i].toLowerCase();
		}

		/* Makes $(node) possible, without having to call init. */
		$.fn.init.prototype = $.fn;

		/* Globalize Velocity onto the window, and assign its Utilities property. */
		window.Velocity = {Utilities: $};
	})(window);

	/******************
	 Velocity.js
	 ******************/

	(function(factory) {
		"use strict";
		/* CommonJS module. */
		if (typeof module === "object" && typeof module.exports === "object") {
			module.exports = factory();
			/* AMD module. */
		} else if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			/* Browser globals. */
		} else {
			factory();
		}
	}(function() {
		"use strict";
		return function(global, window, document, undefined) {

			/***************
			 Summary
			 ***************/

			/*
			 - CSS: CSS stack that works independently from the rest of Velocity.
			 - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
			 - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
			 - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
			 Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
			 - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
			 - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
			 - completeCall(): Handles the cleanup process for each Velocity call.
			 */

			/*********************
			 Helper Functions
			 *********************/

			/* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
			var IE = (function() {
				if (document.documentMode) {
					return document.documentMode;
				} else {
					for (var i = 7; i > 4; i--) {
						var div = document.createElement("div");

						div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";

						if (div.getElementsByTagName("span").length) {
							div = null;

							return i;
						}
					}
				}

				return undefined;
			})();

			/* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */
			var rAFShim = (function() {
				var timeLast = 0;

				return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
					var timeCurrent = (new Date()).getTime(),
							timeDelta;

					/* Dynamically set delay on a per-tick basis to match 60fps. */
					/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
					timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
					timeLast = timeCurrent + timeDelta;

					return setTimeout(function() {
						callback(timeCurrent + timeDelta);
					}, timeDelta);
				};
			})();

			var performance = (function() {
				var perf = window.performance || {};

				if (!perf.hasOwnProperty("now")) {
					var nowOffset = perf.timing && perf.timing.domComplete ? perf.timing.domComplete : (new Date()).getTime();

					perf.now = function() {
						return (new Date()).getTime() - nowOffset;
					};
				}
				return perf;
			})();

			/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
			function compactSparseArray(array) {
				var index = -1,
						length = array ? array.length : 0,
						result = [];

				while (++index < length) {
					var value = array[index];

					if (value) {
						result.push(value);
					}
				}

				return result;
			}

			function sanitizeElements(elements) {
				/* Unwrap jQuery/Zepto objects. */
				if (Type.isWrapped(elements)) {
					elements = [].slice.call(elements);
					/* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */
				} else if (Type.isNode(elements)) {
					elements = [elements];
				}

				return elements;
			}

			var Type = {
				isNumber: function(variable) {
					return (typeof variable === "number");
				},
				isString: function(variable) {
					return (typeof variable === "string");
				},
				isArray: Array.isArray || function(variable) {
					return Object.prototype.toString.call(variable) === "[object Array]";
				},
				isFunction: function(variable) {
					return Object.prototype.toString.call(variable) === "[object Function]";
				},
				isNode: function(variable) {
					return variable && variable.nodeType;
				},
				/* Copyright Martin Bohm. MIT License: https://gist.github.com/Tomalak/818a78a226a0738eaade */
				isNodeList: function(variable) {
					return typeof variable === "object" &&
							/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(variable)) &&
							variable.length !== undefined &&
							(variable.length === 0 || (typeof variable[0] === "object" && variable[0].nodeType > 0));
				},
				/* Determine if variable is an array-like wrapped jQuery, Zepto or similar element. */
				isWrapped: function(variable) {
					return variable && (Type.isArray(variable) || (Type.isNumber(variable.length) && !Type.isString(variable) && !Type.isFunction(variable)));
				},
				isSVG: function(variable) {
					return window.SVGElement && (variable instanceof window.SVGElement);
				},
				isEmptyObject: function(variable) {
					for (var name in variable) {
						if (variable.hasOwnProperty(name)) {
							return false;
						}
					}

					return true;
				}
			};

			/*****************
			 Dependencies
			 *****************/

			var $,
					isJQuery = false;

			if (global.fn && global.fn.jquery) {
				$ = global;
				isJQuery = true;
			} else {
				$ = window.Velocity.Utilities;
			}

			if (IE <= 8 && !isJQuery) {
				throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
			} else if (IE <= 7) {
				/* Revert to jQuery's $.animate(), and lose Velocity's extra features. */
				jQuery.fn.velocity = jQuery.fn.animate;

				/* Now that $.fn.velocity is aliased, abort this Velocity declaration. */
				return;
			}

			/*****************
			 Constants
			 *****************/

			var DURATION_DEFAULT = 400,
					EASING_DEFAULT = "swing";

			/*************
			 State
			 *************/

			var Velocity = {
				/* Container for page-wide Velocity state data. */
				State: {
					/* Detect mobile devices to determine if mobileHA should be turned on. */
					isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
					/* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */
					isAndroid: /Android/i.test(navigator.userAgent),
					isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
					isChrome: window.chrome,
					isFirefox: /Firefox/i.test(navigator.userAgent),
					/* Create a cached element for re-use when checking for CSS property prefixes. */
					prefixElement: document.createElement("div"),
					/* Cache every prefix match to avoid repeating lookups. */
					prefixMatches: {},
					/* Cache the anchor used for animating window scrolling. */
					scrollAnchor: null,
					/* Cache the browser-specific property names associated with the scroll anchor. */
					scrollPropertyLeft: null,
					scrollPropertyTop: null,
					/* Keep track of whether our RAF tick is running. */
					isTicking: false,
					/* Container for every in-progress call to Velocity. */
					calls: [],
					delayedElements: {
						count: 0
					}
				},
				/* Velocity's custom CSS stack. Made global for unit testing. */
				CSS: {/* Defined below. */},
				/* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */
				Utilities: $,
				/* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */
				Redirects: {/* Manually registered by the user. */},
				Easings: {/* Defined below. */},
				/* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */
				Promise: window.Promise,
				/* Velocity option defaults, which can be overriden by the user. */
				defaults: {
					queue: "",
					duration: DURATION_DEFAULT,
					easing: EASING_DEFAULT,
					begin: undefined,
					complete: undefined,
					progress: undefined,
					display: undefined,
					visibility: undefined,
					loop: false,
					delay: false,
					mobileHA: true,
					/* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */
					_cacheValues: true,
					/* Advanced: Set to false if the promise should always resolve on empty element lists. */
					promiseRejectEmpty: true
				},
				/* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */
				init: function(element) {
					$.data(element, "velocity", {
						/* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */
						isSVG: Type.isSVG(element),
						/* Keep track of whether the element is currently being animated by Velocity.
						 This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */
						isAnimating: false,
						/* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
						computedStyle: null,
						/* Tween data is cached for each animation on the element so that data can be passed across calls --
						 in particular, end values are used as subsequent start values in consecutive Velocity calls. */
						tweensContainer: null,
						/* The full root property values of each CSS hook being animated on this element are cached so that:
						 1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
						 2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */
						rootPropertyValueCache: {},
						/* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */
						transformCache: {}
					});
				},
				/* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */
				hook: null, /* Defined below. */
				/* Velocity-wide animation time remapping for testing purposes. */
				mock: false,
				version: {major: 1, minor: 4, patch: 0},
				/* Set to 1 or 2 (most verbose) to output debug info to console. */
				debug: false,
				/* Use rAF high resolution timestamp when available */
				timestamp: true,
				/* Pause all animations */
				pauseAll: function(queueName) {
					var currentTime = (new Date()).getTime();

					$.each(Velocity.State.calls, function(i, activeCall) {

						if (activeCall) {

							/* If we have a queueName and this call is not on that queue, skip */
							if (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {
								return true;
							}

							/* Set call to paused */
							activeCall[5] = {
								resume: false
							};
						}
					});

					/* Pause timers on any currently delayed calls */
					$.each(Velocity.State.delayedElements, function(k, element) {
						if (!element) {
							return;
						}
						pauseDelayOnElement(element, currentTime);
					});
				},
				/* Resume all animations */
				resumeAll: function(queueName) {
					var currentTime = (new Date()).getTime();

					$.each(Velocity.State.calls, function(i, activeCall) {

						if (activeCall) {

							/* If we have a queueName and this call is not on that queue, skip */
							if (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {
								return true;
							}

							/* Set call to resumed if it was paused */
							if (activeCall[5]) {
								activeCall[5].resume = true;
							}
						}
					});
					/* Resume timers on any currently delayed calls */
					$.each(Velocity.State.delayedElements, function(k, element) {
						if (!element) {
							return;
						}
						resumeDelayOnElement(element, currentTime);
					});
				}
			};

			/* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */
			if (window.pageYOffset !== undefined) {
				Velocity.State.scrollAnchor = window;
				Velocity.State.scrollPropertyLeft = "pageXOffset";
				Velocity.State.scrollPropertyTop = "pageYOffset";
			} else {
				Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;
				Velocity.State.scrollPropertyLeft = "scrollLeft";
				Velocity.State.scrollPropertyTop = "scrollTop";
			}

			/* Shorthand alias for jQuery's $.data() utility. */
			function Data(element) {
				/* Hardcode a reference to the plugin name. */
				var response = $.data(element, "velocity");

				/* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */
				return response === null ? undefined : response;
			}

			/**************
			 Delay Timer
			 **************/

			function pauseDelayOnElement(element, currentTime) {
				/* Check for any delay timers, and pause the set timeouts (while preserving time data)
				 to be resumed when the "resume" command is issued */
				var data = Data(element);
				if (data && data.delayTimer && !data.delayPaused) {
					data.delayRemaining = data.delay - currentTime + data.delayBegin;
					data.delayPaused = true;
					clearTimeout(data.delayTimer.setTimeout);
				}
			}

			function resumeDelayOnElement(element, currentTime) {
				/* Check for any paused timers and resume */
				var data = Data(element);
				if (data && data.delayTimer && data.delayPaused) {
					/* If the element was mid-delay, re initiate the timeout with the remaining delay */
					data.delayPaused = false;
					data.delayTimer.setTimeout = setTimeout(data.delayTimer.next, data.delayRemaining);
				}
			}



			/**************
			 Easing
			 **************/

			/* Step easing generator. */
			function generateStep(steps) {
				return function(p) {
					return Math.round(p * steps) * (1 / steps);
				};
			}

			/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
			function generateBezier(mX1, mY1, mX2, mY2) {
				var NEWTON_ITERATIONS = 4,
						NEWTON_MIN_SLOPE = 0.001,
						SUBDIVISION_PRECISION = 0.0000001,
						SUBDIVISION_MAX_ITERATIONS = 10,
						kSplineTableSize = 11,
						kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
						float32ArraySupported = "Float32Array" in window;

				/* Must contain four arguments. */
				if (arguments.length !== 4) {
					return false;
				}

				/* Arguments must be numbers. */
				for (var i = 0; i < 4; ++i) {
					if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
						return false;
					}
				}

				/* X values must be in the [0, 1] range. */
				mX1 = Math.min(mX1, 1);
				mX2 = Math.min(mX2, 1);
				mX1 = Math.max(mX1, 0);
				mX2 = Math.max(mX2, 0);

				var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);

				function A(aA1, aA2) {
					return 1.0 - 3.0 * aA2 + 3.0 * aA1;
				}
				function B(aA1, aA2) {
					return 3.0 * aA2 - 6.0 * aA1;
				}
				function C(aA1) {
					return 3.0 * aA1;
				}

				function calcBezier(aT, aA1, aA2) {
					return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
				}

				function getSlope(aT, aA1, aA2) {
					return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
				}

				function newtonRaphsonIterate(aX, aGuessT) {
					for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
						var currentSlope = getSlope(aGuessT, mX1, mX2);

						if (currentSlope === 0.0) {
							return aGuessT;
						}

						var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
						aGuessT -= currentX / currentSlope;
					}

					return aGuessT;
				}

				function calcSampleValues() {
					for (var i = 0; i < kSplineTableSize; ++i) {
						mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
					}
				}

				function binarySubdivide(aX, aA, aB) {
					var currentX, currentT, i = 0;

					do {
						currentT = aA + (aB - aA) / 2.0;
						currentX = calcBezier(currentT, mX1, mX2) - aX;
						if (currentX > 0.0) {
							aB = currentT;
						} else {
							aA = currentT;
						}
					} while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

					return currentT;
				}

				function getTForX(aX) {
					var intervalStart = 0.0,
							currentSample = 1,
							lastSample = kSplineTableSize - 1;

					for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
						intervalStart += kSampleStepSize;
					}

					--currentSample;

					var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),
							guessForT = intervalStart + dist * kSampleStepSize,
							initialSlope = getSlope(guessForT, mX1, mX2);

					if (initialSlope >= NEWTON_MIN_SLOPE) {
						return newtonRaphsonIterate(aX, guessForT);
					} else if (initialSlope === 0.0) {
						return guessForT;
					} else {
						return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
					}
				}

				var _precomputed = false;

				function precompute() {
					_precomputed = true;
					if (mX1 !== mY1 || mX2 !== mY2) {
						calcSampleValues();
					}
				}

				var f = function(aX) {
					if (!_precomputed) {
						precompute();
					}
					if (mX1 === mY1 && mX2 === mY2) {
						return aX;
					}
					if (aX === 0) {
						return 0;
					}
					if (aX === 1) {
						return 1;
					}

					return calcBezier(getTForX(aX), mY1, mY2);
				};

				f.getControlPoints = function() {
					return [{x: mX1, y: mY1}, {x: mX2, y: mY2}];
				};

				var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
				f.toString = function() {
					return str;
				};

				return f;
			}

			/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
			/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
			 then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
			var generateSpringRK4 = (function() {
				function springAccelerationForState(state) {
					return (-state.tension * state.x) - (state.friction * state.v);
				}

				function springEvaluateStateWithDerivative(initialState, dt, derivative) {
					var state = {
						x: initialState.x + derivative.dx * dt,
						v: initialState.v + derivative.dv * dt,
						tension: initialState.tension,
						friction: initialState.friction
					};

					return {dx: state.v, dv: springAccelerationForState(state)};
				}

				function springIntegrateState(state, dt) {
					var a = {
						dx: state.v,
						dv: springAccelerationForState(state)
					},
							b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
							c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
							d = springEvaluateStateWithDerivative(state, dt, c),
							dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
							dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);

					state.x = state.x + dxdt * dt;
					state.v = state.v + dvdt * dt;

					return state;
				}

				return function springRK4Factory(tension, friction, duration) {

					var initState = {
						x: -1,
						v: 0,
						tension: null,
						friction: null
					},
							path = [0],
							time_lapsed = 0,
							tolerance = 1 / 10000,
							DT = 16 / 1000,
							have_duration, dt, last_state;

					tension = parseFloat(tension) || 500;
					friction = parseFloat(friction) || 20;
					duration = duration || null;

					initState.tension = tension;
					initState.friction = friction;

					have_duration = duration !== null;

					/* Calculate the actual time it takes for this animation to complete with the provided conditions. */
					if (have_duration) {
						/* Run the simulation without a duration. */
						time_lapsed = springRK4Factory(tension, friction);
						/* Compute the adjusted time delta. */
						dt = time_lapsed / duration * DT;
					} else {
						dt = DT;
					}

					while (true) {
						/* Next/step function .*/
						last_state = springIntegrateState(last_state || initState, dt);
						/* Store the position. */
						path.push(1 + last_state.x);
						time_lapsed += 16;
						/* If the change threshold is reached, break. */
						if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
							break;
						}
					}

					/* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
					 computed path and returns a snapshot of the position according to a given percentComplete. */
					return !have_duration ? time_lapsed : function(percentComplete) {
						return path[ (percentComplete * (path.length - 1)) | 0 ];
					};
				};
			}());

			/* jQuery easings. */
			Velocity.Easings = {
				linear: function(p) {
					return p;
				},
				swing: function(p) {
					return 0.5 - Math.cos(p * Math.PI) / 2;
				},
				/* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */
				spring: function(p) {
					return 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6));
				}
			};

			/* CSS3 and Robert Penner easings. */
			$.each(
					[
						["ease", [0.25, 0.1, 0.25, 1.0]],
						["ease-in", [0.42, 0.0, 1.00, 1.0]],
						["ease-out", [0.00, 0.0, 0.58, 1.0]],
						["ease-in-out", [0.42, 0.0, 0.58, 1.0]],
						["easeInSine", [0.47, 0, 0.745, 0.715]],
						["easeOutSine", [0.39, 0.575, 0.565, 1]],
						["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
						["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
						["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
						["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
						["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
						["easeOutCubic", [0.215, 0.61, 0.355, 1]],
						["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
						["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
						["easeOutQuart", [0.165, 0.84, 0.44, 1]],
						["easeInOutQuart", [0.77, 0, 0.175, 1]],
						["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
						["easeOutQuint", [0.23, 1, 0.32, 1]],
						["easeInOutQuint", [0.86, 0, 0.07, 1]],
						["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
						["easeOutExpo", [0.19, 1, 0.22, 1]],
						["easeInOutExpo", [1, 0, 0, 1]],
						["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
						["easeOutCirc", [0.075, 0.82, 0.165, 1]],
						["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]
					], function(i, easingArray) {
				Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);
			});

			/* Determine the appropriate easing type given an easing input. */
			function getEasing(value, duration) {
				var easing = value;

				/* The easing option can either be a string that references a pre-registered easing,
				 or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */
				if (Type.isString(value)) {
					/* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */
					if (!Velocity.Easings[value]) {
						easing = false;
					}
				} else if (Type.isArray(value) && value.length === 1) {
					easing = generateStep.apply(null, value);
				} else if (Type.isArray(value) && value.length === 2) {
					/* springRK4 must be passed the animation's duration. */
					/* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing
					 function generated with default tension and friction values. */
					easing = generateSpringRK4.apply(null, value.concat([duration]));
				} else if (Type.isArray(value) && value.length === 4) {
					/* Note: If the bezier array contains non-numbers, generateBezier() returns false. */
					easing = generateBezier.apply(null, value);
				} else {
					easing = false;
				}

				/* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
				 if the Velocity-wide default has been incorrectly modified. */
				if (easing === false) {
					if (Velocity.Easings[Velocity.defaults.easing]) {
						easing = Velocity.defaults.easing;
					} else {
						easing = EASING_DEFAULT;
					}
				}

				return easing;
			}

			/*****************
			 CSS Stack
			 *****************/

			/* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
			 It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */
			/* Note: A "CSS" shorthand is aliased so that our code is easier to read. */
			var CSS = Velocity.CSS = {
				/*************
				 RegEx
				 *************/

				RegEx: {
					isHex: /^#([A-f\d]{3}){1,2}$/i,
					/* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */
					valueUnwrap: /^[A-z]+\((.*)\)$/i,
					wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
					/* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */
					valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
				},
				/************
				 Lists
				 ************/

				Lists: {
					colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
					transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
					transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
					units: [
						"%", // relative
						"em", "ex", "ch", "rem", // font relative
						"vw", "vh", "vmin", "vmax", // viewport relative
						"cm", "mm", "Q", "in", "pc", "pt", "px", // absolute lengths
						"deg", "grad", "rad", "turn", // angles
						"s", "ms" // time
					],
					colorNames: {
						"aliceblue": "240,248,255",
						"antiquewhite": "250,235,215",
						"aquamarine": "127,255,212",
						"aqua": "0,255,255",
						"azure": "240,255,255",
						"beige": "245,245,220",
						"bisque": "255,228,196",
						"black": "0,0,0",
						"blanchedalmond": "255,235,205",
						"blueviolet": "138,43,226",
						"blue": "0,0,255",
						"brown": "165,42,42",
						"burlywood": "222,184,135",
						"cadetblue": "95,158,160",
						"chartreuse": "127,255,0",
						"chocolate": "210,105,30",
						"coral": "255,127,80",
						"cornflowerblue": "100,149,237",
						"cornsilk": "255,248,220",
						"crimson": "220,20,60",
						"cyan": "0,255,255",
						"darkblue": "0,0,139",
						"darkcyan": "0,139,139",
						"darkgoldenrod": "184,134,11",
						"darkgray": "169,169,169",
						"darkgrey": "169,169,169",
						"darkgreen": "0,100,0",
						"darkkhaki": "189,183,107",
						"darkmagenta": "139,0,139",
						"darkolivegreen": "85,107,47",
						"darkorange": "255,140,0",
						"darkorchid": "153,50,204",
						"darkred": "139,0,0",
						"darksalmon": "233,150,122",
						"darkseagreen": "143,188,143",
						"darkslateblue": "72,61,139",
						"darkslategray": "47,79,79",
						"darkturquoise": "0,206,209",
						"darkviolet": "148,0,211",
						"deeppink": "255,20,147",
						"deepskyblue": "0,191,255",
						"dimgray": "105,105,105",
						"dimgrey": "105,105,105",
						"dodgerblue": "30,144,255",
						"firebrick": "178,34,34",
						"floralwhite": "255,250,240",
						"forestgreen": "34,139,34",
						"fuchsia": "255,0,255",
						"gainsboro": "220,220,220",
						"ghostwhite": "248,248,255",
						"gold": "255,215,0",
						"goldenrod": "218,165,32",
						"gray": "128,128,128",
						"grey": "128,128,128",
						"greenyellow": "173,255,47",
						"green": "0,128,0",
						"honeydew": "240,255,240",
						"hotpink": "255,105,180",
						"indianred": "205,92,92",
						"indigo": "75,0,130",
						"ivory": "255,255,240",
						"khaki": "240,230,140",
						"lavenderblush": "255,240,245",
						"lavender": "230,230,250",
						"lawngreen": "124,252,0",
						"lemonchiffon": "255,250,205",
						"lightblue": "173,216,230",
						"lightcoral": "240,128,128",
						"lightcyan": "224,255,255",
						"lightgoldenrodyellow": "250,250,210",
						"lightgray": "211,211,211",
						"lightgrey": "211,211,211",
						"lightgreen": "144,238,144",
						"lightpink": "255,182,193",
						"lightsalmon": "255,160,122",
						"lightseagreen": "32,178,170",
						"lightskyblue": "135,206,250",
						"lightslategray": "119,136,153",
						"lightsteelblue": "176,196,222",
						"lightyellow": "255,255,224",
						"limegreen": "50,205,50",
						"lime": "0,255,0",
						"linen": "250,240,230",
						"magenta": "255,0,255",
						"maroon": "128,0,0",
						"mediumaquamarine": "102,205,170",
						"mediumblue": "0,0,205",
						"mediumorchid": "186,85,211",
						"mediumpurple": "147,112,219",
						"mediumseagreen": "60,179,113",
						"mediumslateblue": "123,104,238",
						"mediumspringgreen": "0,250,154",
						"mediumturquoise": "72,209,204",
						"mediumvioletred": "199,21,133",
						"midnightblue": "25,25,112",
						"mintcream": "245,255,250",
						"mistyrose": "255,228,225",
						"moccasin": "255,228,181",
						"navajowhite": "255,222,173",
						"navy": "0,0,128",
						"oldlace": "253,245,230",
						"olivedrab": "107,142,35",
						"olive": "128,128,0",
						"orangered": "255,69,0",
						"orange": "255,165,0",
						"orchid": "218,112,214",
						"palegoldenrod": "238,232,170",
						"palegreen": "152,251,152",
						"paleturquoise": "175,238,238",
						"palevioletred": "219,112,147",
						"papayawhip": "255,239,213",
						"peachpuff": "255,218,185",
						"peru": "205,133,63",
						"pink": "255,192,203",
						"plum": "221,160,221",
						"powderblue": "176,224,230",
						"purple": "128,0,128",
						"red": "255,0,0",
						"rosybrown": "188,143,143",
						"royalblue": "65,105,225",
						"saddlebrown": "139,69,19",
						"salmon": "250,128,114",
						"sandybrown": "244,164,96",
						"seagreen": "46,139,87",
						"seashell": "255,245,238",
						"sienna": "160,82,45",
						"silver": "192,192,192",
						"skyblue": "135,206,235",
						"slateblue": "106,90,205",
						"slategray": "112,128,144",
						"snow": "255,250,250",
						"springgreen": "0,255,127",
						"steelblue": "70,130,180",
						"tan": "210,180,140",
						"teal": "0,128,128",
						"thistle": "216,191,216",
						"tomato": "255,99,71",
						"turquoise": "64,224,208",
						"violet": "238,130,238",
						"wheat": "245,222,179",
						"whitesmoke": "245,245,245",
						"white": "255,255,255",
						"yellowgreen": "154,205,50",
						"yellow": "255,255,0"
					}
				},
				/************
				 Hooks
				 ************/

				/* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
				 (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */
				/* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
				 tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */
				Hooks: {
					/********************
					 Registration
					 ********************/

					/* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */
					/* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */
					templates: {
						"textShadow": ["Color X Y Blur", "black 0px 0px 0px"],
						"boxShadow": ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
						"clip": ["Top Right Bottom Left", "0px 0px 0px 0px"],
						"backgroundPosition": ["X Y", "0% 0%"],
						"transformOrigin": ["X Y Z", "50% 50% 0px"],
						"perspectiveOrigin": ["X Y", "50% 50%"]
					},
					/* A "registered" hook is one that has been converted from its template form into a live,
					 tweenable property. It contains data to associate it with its root property. */
					registered: {
						/* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],
						 which consists of the subproperty's name, the associated root property's name,
						 and the subproperty's position in the root's value. */
					},
					/* Convert the templates into individual hooks then append them to the registered object above. */
					register: function() {
						/* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
						 currently set to "transparent" default to their respective template below when color-animated,
						 and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
						 which is almost always set closer to black than white. */
						for (var i = 0; i < CSS.Lists.colors.length; i++) {
							var rgbComponents = (CSS.Lists.colors[i] === "color") ? "0 0 0 1" : "255 255 255 1";
							CSS.Hooks.templates[CSS.Lists.colors[i]] = ["Red Green Blue Alpha", rgbComponents];
						}

						var rootProperty,
								hookTemplate,
								hookNames;

						/* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
						 Thus, we re-arrange the templates accordingly. */
						if (IE) {
							for (rootProperty in CSS.Hooks.templates) {
								if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
									continue;
								}
								hookTemplate = CSS.Hooks.templates[rootProperty];
								hookNames = hookTemplate[0].split(" ");

								var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);

								if (hookNames[0] === "Color") {
									/* Reposition both the hook's name and its default value to the end of their respective strings. */
									hookNames.push(hookNames.shift());
									defaultValues.push(defaultValues.shift());

									/* Replace the existing template for the hook's root property. */
									CSS.Hooks.templates[rootProperty] = [hookNames.join(" "), defaultValues.join(" ")];
								}
							}
						}

						/* Hook registration. */
						for (rootProperty in CSS.Hooks.templates) {
							if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
								continue;
							}
							hookTemplate = CSS.Hooks.templates[rootProperty];
							hookNames = hookTemplate[0].split(" ");

							for (var j in hookNames) {
								if (!hookNames.hasOwnProperty(j)) {
									continue;
								}
								var fullHookName = rootProperty + hookNames[j],
										hookPosition = j;

								/* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
								 and the hook's position in its template's default value string. */
								CSS.Hooks.registered[fullHookName] = [rootProperty, hookPosition];
							}
						}
					},
					/*****************************
					 Injection and Extraction
					 *****************************/

					/* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */
					/* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */
					getRoot: function(property) {
						var hookData = CSS.Hooks.registered[property];

						if (hookData) {
							return hookData[0];
						} else {
							/* If there was no hook match, return the property name untouched. */
							return property;
						}
					},
					getUnit: function(str, start) {
						var unit = (str.substr(start || 0, 5).match(/^[a-z%]+/) || [])[0] || "";

						if (unit && CSS.Lists.units.indexOf(unit) >= 0) {
							return unit;
						}
						return "";
					},
					fixColors: function(str) {
						return str.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function($0, $1, $2) {
							if (CSS.Lists.colorNames.hasOwnProperty($2)) {
								return ($1 ? $1 : "rgba(") + CSS.Lists.colorNames[$2] + ($1 ? "" : ",1)");
							}
							return $1 + $2;
						});
					},
					/* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that
					 the targeted hook can be injected or extracted at its standard position. */
					cleanRootPropertyValue: function(rootProperty, rootPropertyValue) {
						/* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */
						if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {
							rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];
						}

						/* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
						 default to the root's default value as defined in CSS.Hooks.templates. */
						/* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
						 zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */
						if (CSS.Values.isCSSNullValue(rootPropertyValue)) {
							rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
						}

						return rootPropertyValue;
					},
					/* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */
					extractValue: function(fullHookName, rootPropertyValue) {
						var hookData = CSS.Hooks.registered[fullHookName];

						if (hookData) {
							var hookRoot = hookData[0],
									hookPosition = hookData[1];

							rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);

							/* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */
							return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];
						} else {
							/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
							return rootPropertyValue;
						}
					},
					/* Inject the hook's value into its root property's value. This is used to piece back together the root property
					 once Velocity has updated one of its individually hooked values through tweening. */
					injectValue: function(fullHookName, hookValue, rootPropertyValue) {
						var hookData = CSS.Hooks.registered[fullHookName];

						if (hookData) {
							var hookRoot = hookData[0],
									hookPosition = hookData[1],
									rootPropertyValueParts,
									rootPropertyValueUpdated;

							rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);

							/* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
							 then reconstruct the rootPropertyValue string. */
							rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);
							rootPropertyValueParts[hookPosition] = hookValue;
							rootPropertyValueUpdated = rootPropertyValueParts.join(" ");

							return rootPropertyValueUpdated;
						} else {
							/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
							return rootPropertyValue;
						}
					}
				},
				/*******************
				 Normalizations
				 *******************/

				/* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
				 and reformatting special properties (e.g. clip, rgba) to look like standard ones. */
				Normalizations: {
					/* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
					 the targeted element (which may need to be queried), and the targeted property value. */
					registered: {
						clip: function(type, element, propertyValue) {
							switch (type) {
								case "name":
									return "clip";
									/* Clip needs to be unwrapped and stripped of its commas during extraction. */
								case "extract":
									var extracted;

									/* If Velocity also extracted this value, skip extraction. */
									if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
										extracted = propertyValue;
									} else {
										/* Remove the "rect()" wrapper. */
										extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);

										/* Strip off commas. */
										extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue;
									}

									return extracted;
									/* Clip needs to be re-wrapped during injection. */
								case "inject":
									return "rect(" + propertyValue + ")";
							}
						},
						blur: function(type, element, propertyValue) {
							switch (type) {
								case "name":
									return Velocity.State.isFirefox ? "filter" : "-webkit-filter";
								case "extract":
									var extracted = parseFloat(propertyValue);

									/* If extracted is NaN, meaning the value isn't already extracted. */
									if (!(extracted || extracted === 0)) {
										var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);

										/* If the filter string had a blur component, return just the blur value and unit type. */
										if (blurComponent) {
											extracted = blurComponent[1];
											/* If the component doesn't exist, default blur to 0. */
										} else {
											extracted = 0;
										}
									}

									return extracted;
									/* Blur needs to be re-wrapped during injection. */
								case "inject":
									/* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */
									if (!parseFloat(propertyValue)) {
										return "none";
									} else {
										return "blur(" + propertyValue + ")";
									}
							}
						},
						/* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */
						opacity: function(type, element, propertyValue) {
							if (IE <= 8) {
								switch (type) {
									case "name":
										return "filter";
									case "extract":
										/* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
										 Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */
										var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);

										if (extracted) {
											/* Convert to decimal value. */
											propertyValue = extracted[1] / 100;
										} else {
											/* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */
											propertyValue = 1;
										}

										return propertyValue;
									case "inject":
										/* Opacified elements are required to have their zoom property set to a non-zero value. */
										element.style.zoom = 1;

										/* Setting the filter property on elements with certain font property combinations can result in a
										 highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
										 value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */
										if (parseFloat(propertyValue) >= 1) {
											return "";
										} else {
											/* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */
											return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";
										}
								}
								/* With all other browsers, normalization is not required; return the same values that were passed in. */
							} else {
								switch (type) {
									case "name":
										return "opacity";
									case "extract":
										return propertyValue;
									case "inject":
										return propertyValue;
								}
							}
						}
					},
					/*****************************
					 Batched Registrations
					 *****************************/

					/* Note: Batched normalizations extend the CSS.Normalizations.registered object. */
					register: function() {

						/*****************
						 Transforms
						 *****************/

						/* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
						 so that they can be referenced in a properties map by their individual names. */
						/* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
						 setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
						 Transform setting is batched in this way to improve performance: the transform style only needs to be updated
						 once when multiple transform subproperties are being animated simultaneously. */
						/* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
						 transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
						 from being normalized for these browsers so that tweening skips these properties altogether
						 (since it will ignore them as being unsupported by the browser.) */
						if ((!IE || IE > 9) && !Velocity.State.isGingerbread) {
							/* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
							 share the same name, the latter is given a unique token within Velocity: "transformPerspective". */
							CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);
						}

						for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {
							/* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
							 paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */
							(function() {
								var transformName = CSS.Lists.transformsBase[i];

								CSS.Normalizations.registered[transformName] = function(type, element, propertyValue) {
									switch (type) {
										/* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */
										case "name":
											return "transform";
											/* Transform values are cached onto a per-element transformCache object. */
										case "extract":
											/* If this transform has yet to be assigned a value, return its null value. */
											if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
												/* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */
												return /^scale/i.test(transformName) ? 1 : 0;
												/* When transform values are set, they are wrapped in parentheses as per the CSS spec.
												 Thus, when extracting their values (for tween calculations), we strip off the parentheses. */
											}
											return Data(element).transformCache[transformName].replace(/[()]/g, "");
										case "inject":
											var invalid = false;

											/* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
											 Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */
											/* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */
											switch (transformName.substr(0, transformName.length - 1)) {
												/* Whitelist unit types for each transform. */
												case "translate":
													invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);
													break;
													/* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */
												case "scal":
												case "scale":
													/* Chrome on Android has a bug in which scaled elements blur if their initial scale
													 value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
													 and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */
													if (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {
														propertyValue = 1;
													}

													invalid = !/(\d)$/i.test(propertyValue);
													break;
												case "skew":
													invalid = !/(deg|\d)$/i.test(propertyValue);
													break;
												case "rotate":
													invalid = !/(deg|\d)$/i.test(propertyValue);
													break;
											}

											if (!invalid) {
												/* As per the CSS spec, wrap the value in parentheses. */
												Data(element).transformCache[transformName] = "(" + propertyValue + ")";
											}

											/* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */
											return Data(element).transformCache[transformName];
									}
								};
							})();
						}

						/*************
						 Colors
						 *************/

						/* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
						 Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */
						for (var j = 0; j < CSS.Lists.colors.length; j++) {
							/* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
							 (Otherwise, all functions would take the final for loop's colorName.) */
							(function() {
								var colorName = CSS.Lists.colors[j];

								/* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */
								CSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {
									switch (type) {
										case "name":
											return colorName;
											/* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */
										case "extract":
											var extracted;

											/* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */
											if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
												extracted = propertyValue;
											} else {
												var converted,
														colorNames = {
															black: "rgb(0, 0, 0)",
															blue: "rgb(0, 0, 255)",
															gray: "rgb(128, 128, 128)",
															green: "rgb(0, 128, 0)",
															red: "rgb(255, 0, 0)",
															white: "rgb(255, 255, 255)"
														};

												/* Convert color names to rgb. */
												if (/^[A-z]+$/i.test(propertyValue)) {
													if (colorNames[propertyValue] !== undefined) {
														converted = colorNames[propertyValue];
													} else {
														/* If an unmatched color name is provided, default to black. */
														converted = colorNames.black;
													}
													/* Convert hex values to rgb. */
												} else if (CSS.RegEx.isHex.test(propertyValue)) {
													converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";
													/* If the provided color doesn't match any of the accepted color formats, default to black. */
												} else if (!(/^rgba?\(/i.test(propertyValue))) {
													converted = colorNames.black;
												}

												/* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
												 repeated spaces (in case the value included spaces to begin with). */
												extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
											}

											/* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
											if ((!IE || IE > 8) && extracted.split(" ").length === 3) {
												extracted += " 1";
											}

											return extracted;
										case "inject":
											/* If we have a pattern then it might already have the right values */
											if (/^rgb/.test(propertyValue)) {
												return propertyValue;
											}

											/* If this is IE<=8 and an alpha component exists, strip it off. */
											if (IE <= 8) {
												if (propertyValue.split(" ").length === 4) {
													propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ");
												}
												/* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
											} else if (propertyValue.split(" ").length === 3) {
												propertyValue += " 1";
											}

											/* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
											 on all values but the fourth (R, G, and B only accept whole numbers). */
											return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
									}
								};
							})();
						}

						/**************
						 Dimensions
						 **************/
						function augmentDimension(name, element, wantInner) {
							var isBorderBox = CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() === "border-box";

							if (isBorderBox === (wantInner || false)) {
								/* in box-sizing mode, the CSS width / height accessors already give the outerWidth / outerHeight. */
								var i,
										value,
										augment = 0,
										sides = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"],
										fields = ["padding" + sides[0], "padding" + sides[1], "border" + sides[0] + "Width", "border" + sides[1] + "Width"];

								for (i = 0; i < fields.length; i++) {
									value = parseFloat(CSS.getPropertyValue(element, fields[i]));
									if (!isNaN(value)) {
										augment += value;
									}
								}
								return wantInner ? -augment : augment;
							}
							return 0;
						}
						function getDimension(name, wantInner) {
							return function(type, element, propertyValue) {
								switch (type) {
									case "name":
										return name;
									case "extract":
										return parseFloat(propertyValue) + augmentDimension(name, element, wantInner);
									case "inject":
										return (parseFloat(propertyValue) - augmentDimension(name, element, wantInner)) + "px";
								}
							};
						}
						CSS.Normalizations.registered.innerWidth = getDimension("width", true);
						CSS.Normalizations.registered.innerHeight = getDimension("height", true);
						CSS.Normalizations.registered.outerWidth = getDimension("width");
						CSS.Normalizations.registered.outerHeight = getDimension("height");
					}
				},
				/************************
				 CSS Property Names
				 ************************/

				Names: {
					/* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
					 Camelcasing is used to normalize property names between and across calls. */
					camelCase: function(property) {
						return property.replace(/-(\w)/g, function(match, subMatch) {
							return subMatch.toUpperCase();
						});
					},
					/* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */
					SVGAttribute: function(property) {
						var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";

						/* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */
						if (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {
							SVGAttributes += "|transform";
						}

						return new RegExp("^(" + SVGAttributes + ")$", "i").test(property);
					},
					/* Determine whether a property should be set with a vendor prefix. */
					/* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
					 If the property is not at all supported by the browser, return a false flag. */
					prefixCheck: function(property) {
						/* If this property has already been checked, return the cached value. */
						if (Velocity.State.prefixMatches[property]) {
							return [Velocity.State.prefixMatches[property], true];
						} else {
							var vendors = ["", "Webkit", "Moz", "ms", "O"];

							for (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {
								var propertyPrefixed;

								if (i === 0) {
									propertyPrefixed = property;
								} else {
									/* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */
									propertyPrefixed = vendors[i] + property.replace(/^\w/, function(match) {
										return match.toUpperCase();
									});
								}

								/* Check if the browser supports this property as prefixed. */
								if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {
									/* Cache the match. */
									Velocity.State.prefixMatches[property] = propertyPrefixed;

									return [propertyPrefixed, true];
								}
							}

							/* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */
							return [property, false];
						}
					}
				},
				/************************
				 CSS Property Values
				 ************************/

				Values: {
					/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
					hexToRgb: function(hex) {
						var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
								longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
								rgbParts;

						hex = hex.replace(shortformRegex, function(m, r, g, b) {
							return r + r + g + g + b + b;
						});

						rgbParts = longformRegex.exec(hex);

						return rgbParts ? [parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16)] : [0, 0, 0];
					},
					isCSSNullValue: function(value) {
						/* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
						 Thus, we check for both falsiness and these special strings. */
						/* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
						 templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */
						/* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */
						return (!value || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value));
					},
					/* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */
					getUnitType: function(property) {
						if (/^(rotate|skew)/i.test(property)) {
							return "deg";
						} else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {
							/* The above properties are unitless. */
							return "";
						} else {
							/* Default to px for all other properties. */
							return "px";
						}
					},
					/* HTML elements default to an associated display type when they're not set to display:none. */
					/* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */
					getDisplayType: function(element) {
						var tagName = element && element.tagName.toString().toLowerCase();

						if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {
							return "inline";
						} else if (/^(li)$/i.test(tagName)) {
							return "list-item";
						} else if (/^(tr)$/i.test(tagName)) {
							return "table-row";
						} else if (/^(table)$/i.test(tagName)) {
							return "table";
						} else if (/^(tbody)$/i.test(tagName)) {
							return "table-row-group";
							/* Default to "block" when no match is found. */
						} else {
							return "block";
						}
					},
					/* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */
					addClass: function(element, className) {
						if (element) {
							if (element.classList) {
								element.classList.add(className);
							} else if (Type.isString(element.className)) {
								// Element.className is around 15% faster then set/getAttribute
								element.className += (element.className.length ? " " : "") + className;
							} else {
								// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
								var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";

								element.setAttribute("class", currentClass + (currentClass ? " " : "") + className);
							}
						}
					},
					removeClass: function(element, className) {
						if (element) {
							if (element.classList) {
								element.classList.remove(className);
							} else if (Type.isString(element.className)) {
								// Element.className is around 15% faster then set/getAttribute
								// TODO: Need some jsperf tests on performance - can we get rid of the regex and maybe use split / array manipulation?
								element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " ");
							} else {
								// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
								var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";

								element.setAttribute("class", currentClass.replace(new RegExp("(^|\s)" + className.split(" ").join("|") + "(\s|$)", "gi"), " "));
							}
						}
					}
				},
				/****************************
				 Style Getting & Setting
				 ****************************/

				/* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
				getPropertyValue: function(element, property, rootPropertyValue, forceStyleLookup) {
					/* Get an element's computed property value. */
					/* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
					 style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
					 *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
					function computePropertyValue(element, property) {
						/* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
						 element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
						 offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
						 We subtract border and padding to get the sum of interior + scrollbar. */
						var computedValue = 0;

						/* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
						 of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
						 codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
						 Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */
						if (IE <= 8) {
							computedValue = $.css(element, property); /* GET */
							/* All other browsers support getComputedStyle. The returned live object reference is cached onto its
							 associated element so that it does not need to be refetched upon every GET. */
						} else {
							/* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
							 toggle display to the element type's default value. */
							var toggleDisplay = false;

							if (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {
								toggleDisplay = true;
								CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));
							}

							var revertDisplay = function() {
								if (toggleDisplay) {
									CSS.setPropertyValue(element, "display", "none");
								}
							};

							if (!forceStyleLookup) {
								if (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
									var contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);
									revertDisplay();

									return contentBoxHeight;
								} else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
									var contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);
									revertDisplay();

									return contentBoxWidth;
								}
							}

							var computedStyle;

							/* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
							 of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */
							if (Data(element) === undefined) {
								computedStyle = window.getComputedStyle(element, null); /* GET */
								/* If the computedStyle object has yet to be cached, do so now. */
							} else if (!Data(element).computedStyle) {
								computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null); /* GET */
								/* If computedStyle is cached, use it. */
							} else {
								computedStyle = Data(element).computedStyle;
							}

							/* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
							 Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
							 So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */
							if (property === "borderColor") {
								property = "borderTopColor";
							}

							/* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
							 instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */
							if (IE === 9 && property === "filter") {
								computedValue = computedStyle.getPropertyValue(property); /* GET */
							} else {
								computedValue = computedStyle[property];
							}

							/* Fall back to the property's style value (if defined) when computedValue returns nothing,
							 which can happen when the element hasn't been painted. */
							if (computedValue === "" || computedValue === null) {
								computedValue = element.style[property];
							}

							revertDisplay();
						}

						/* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
						 defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
						 effect as being set to 0, so no conversion is necessary.) */
						/* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
						 property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
						 to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */
						if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {
							var position = computePropertyValue(element, "position"); /* GET */

							/* For absolute positioning, jQuery's $.position() only returns values for top and left;
							 right and bottom will have their "auto" value reverted to 0. */
							/* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
							 Not a big deal since we're currently in a GET batch anyway. */
							if (position === "fixed" || (position === "absolute" && /top|left/i.test(property))) {
								/* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
								computedValue = $(element).position()[property] + "px"; /* GET */
							}
						}

						return computedValue;
					}

					var propertyValue;

					/* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),
					 extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */
					if (CSS.Hooks.registered[property]) {
						var hook = property,
								hookRoot = CSS.Hooks.getRoot(hook);

						/* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
						 query the DOM for the root property's value. */
						if (rootPropertyValue === undefined) {
							/* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */
							rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]); /* GET */
						}

						/* If this root has a normalization registered, peform the associated normalization extraction. */
						if (CSS.Normalizations.registered[hookRoot]) {
							rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);
						}

						/* Extract the hook's value. */
						propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);

						/* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),
						 normalize the property's name and value, and handle the special case of transforms. */
						/* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly
						 numerical and therefore do not require normalization extraction. */
					} else if (CSS.Normalizations.registered[property]) {
						var normalizedPropertyName,
								normalizedPropertyValue;

						normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);

						/* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
						 At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
						 This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
						 thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */
						if (normalizedPropertyName !== "transform") {
							normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */

							/* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */
							if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {
								normalizedPropertyValue = CSS.Hooks.templates[property][1];
							}
						}

						propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);
					}

					/* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */
					if (!/^[\d-]/.test(propertyValue)) {
						/* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
						 their HTML attribute values instead of their CSS style values. */
						var data = Data(element);

						if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
							/* Since the height/width attribute values must be set manually, they don't reflect computed values.
							 Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */
							if (/^(height|width)$/i.test(property)) {
								/* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */
								try {
									propertyValue = element.getBBox()[property];
								} catch (error) {
									propertyValue = 0;
								}
								/* Otherwise, access the attribute value directly. */
							} else {
								propertyValue = element.getAttribute(property);
							}
						} else {
							propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]); /* GET */
						}
					}

					/* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
					 convert CSS null-values to an integer of value 0. */
					if (CSS.Values.isCSSNullValue(propertyValue)) {
						propertyValue = 0;
					}

					if (Velocity.debug >= 2) {
						console.log("Get " + property + ": " + propertyValue);
					}

					return propertyValue;
				},
				/* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
				setPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {
					var propertyName = property;

					/* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */
					if (property === "scroll") {
						/* If a container option is present, scroll the container instead of the browser window. */
						if (scrollData.container) {
							scrollData.container["scroll" + scrollData.direction] = propertyValue;
							/* Otherwise, Velocity defaults to scrolling the browser window. */
						} else {
							if (scrollData.direction === "Left") {
								window.scrollTo(propertyValue, scrollData.alternateValue);
							} else {
								window.scrollTo(scrollData.alternateValue, propertyValue);
							}
						}
					} else {
						/* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
						 Thus, for now, we merely cache transforms being SET. */
						if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
							/* Perform a normalization injection. */
							/* Note: The normalization logic handles the transformCache updating. */
							CSS.Normalizations.registered[property]("inject", element, propertyValue);

							propertyName = "transform";
							propertyValue = Data(element).transformCache[property];
						} else {
							/* Inject hooks. */
							if (CSS.Hooks.registered[property]) {
								var hookName = property,
										hookRoot = CSS.Hooks.getRoot(property);

								/* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */
								rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot); /* GET */

								propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);
								property = hookRoot;
							}

							/* Normalize names and values. */
							if (CSS.Normalizations.registered[property]) {
								propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);
								property = CSS.Normalizations.registered[property]("name", element);
							}

							/* Assign the appropriate vendor prefix before performing an official style update. */
							propertyName = CSS.Names.prefixCheck(property)[0];

							/* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
							 Try/catch is avoided for other browsers since it incurs a performance overhead. */
							if (IE <= 8) {
								try {
									element.style[propertyName] = propertyValue;
								} catch (error) {
									if (Velocity.debug) {
										console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]");
									}
								}
								/* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */
								/* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */
							} else {
								var data = Data(element);

								if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
									/* Note: For SVG attributes, vendor-prefixed property names are never used. */
									/* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */
									element.setAttribute(property, propertyValue);
								} else {
									element.style[propertyName] = propertyValue;
								}
							}

							if (Velocity.debug >= 2) {
								console.log("Set " + property + " (" + propertyName + "): " + propertyValue);
							}
						}
					}

					/* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */
					return [propertyName, propertyValue];
				},
				/* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */
				/* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */
				flushTransformCache: function(element) {
					var transformString = "",
							data = Data(element);

					/* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
					 (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */
					if ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && data && data.isSVG) {
						/* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
						 Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */
						var getTransformFloat = function(transformProperty) {
							return parseFloat(CSS.getPropertyValue(element, transformProperty));
						};

						/* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
						 we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */
						var SVGTransforms = {
							translate: [getTransformFloat("translateX"), getTransformFloat("translateY")],
							skewX: [getTransformFloat("skewX")], skewY: [getTransformFloat("skewY")],
							/* If the scale property is set (non-1), use that value for the scaleX and scaleY values
							 (this behavior mimics the result of animating all these properties at once on HTML elements). */
							scale: getTransformFloat("scale") !== 1 ? [getTransformFloat("scale"), getTransformFloat("scale")] : [getTransformFloat("scaleX"), getTransformFloat("scaleY")],
							/* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
							 defining the rotation's origin point. We ignore the origin values (default them to 0). */
							rotate: [getTransformFloat("rotateZ"), 0, 0]
						};

						/* Iterate through the transform properties in the user-defined property map order.
						 (This mimics the behavior of non-SVG transform animation.) */
						$.each(Data(element).transformCache, function(transformName) {
							/* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
							 properties so that they match up with SVG's accepted transform properties. */
							if (/^translate/i.test(transformName)) {
								transformName = "translate";
							} else if (/^scale/i.test(transformName)) {
								transformName = "scale";
							} else if (/^rotate/i.test(transformName)) {
								transformName = "rotate";
							}

							/* Check that we haven't yet deleted the property from the SVGTransforms container. */
							if (SVGTransforms[transformName]) {
								/* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */
								transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";

								/* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
								 re-insert the same master property if we encounter another one of its axis-specific properties. */
								delete SVGTransforms[transformName];
							}
						});
					} else {
						var transformValue,
								perspective;

						/* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */
						$.each(Data(element).transformCache, function(transformName) {
							transformValue = Data(element).transformCache[transformName];

							/* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */
							if (transformName === "transformPerspective") {
								perspective = transformValue;
								return true;
							}

							/* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */
							if (IE === 9 && transformName === "rotateZ") {
								transformName = "rotate";
							}

							transformString += transformName + transformValue + " ";
						});

						/* If present, set the perspective subproperty first. */
						if (perspective) {
							transformString = "perspective" + perspective + " " + transformString;
						}
					}

					CSS.setPropertyValue(element, "transform", transformString);
				}
			};

			/* Register hooks and normalizations. */
			CSS.Hooks.register();
			CSS.Normalizations.register();

			/* Allow hook setting in the same fashion as jQuery's $.css(). */
			Velocity.hook = function(elements, arg2, arg3) {
				var value;

				elements = sanitizeElements(elements);

				$.each(elements, function(i, element) {
					/* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */
					if (Data(element) === undefined) {
						Velocity.init(element);
					}

					/* Get property value. If an element set was passed in, only return the value for the first element. */
					if (arg3 === undefined) {
						if (value === undefined) {
							value = CSS.getPropertyValue(element, arg2);
						}
						/* Set property value. */
					} else {
						/* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */
						var adjustedSet = CSS.setPropertyValue(element, arg2, arg3);

						/* Transform properties don't automatically set. They have to be flushed to the DOM. */
						if (adjustedSet[0] === "transform") {
							Velocity.CSS.flushTransformCache(element);
						}

						value = adjustedSet;
					}
				});

				return value;
			};

			/*****************
			 Animation
			 *****************/

			var animate = function() {
				var opts;

				/******************
				 Call Chain
				 ******************/

				/* Logic for determining what to return to the call stack when exiting out of Velocity. */
				function getChain() {
					/* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
					 default to null instead of returning the targeted elements so that utility function's return value is standardized. */
					if (isUtility) {
						return promiseData.promise || null;
						/* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */
					} else {
						return elementsWrapped;
					}
				}

				/*************************
				 Arguments Assignment
				 *************************/

				/* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
				 objects are defined on a container object that's passed in as Velocity's sole argument. */
				/* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */
				var syntacticSugar = (arguments[0] && (arguments[0].p || (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))),
						/* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */
						isUtility,
						/* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly
						 passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */
						elementsWrapped,
						argumentIndex;

				var elements,
						propertiesMap,
						options;

				/* Detect jQuery/Zepto elements being animated via the $.fn method. */
				if (Type.isWrapped(this)) {
					isUtility = false;

					argumentIndex = 0;
					elements = this;
					elementsWrapped = this;
					/* Otherwise, raw elements are being animated via the utility function. */
				} else {
					isUtility = true;

					argumentIndex = 1;
					elements = syntacticSugar ? (arguments[0].elements || arguments[0].e) : arguments[0];
				}

				/***************
				 Promises
				 ***************/

				var promiseData = {
					promise: null,
					resolver: null,
					rejecter: null
				};

				/* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
				 promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
				 method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
				 call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */
				/* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
				 triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
				 grouped together for the purposes of resolving and rejecting a promise. */
				if (isUtility && Velocity.Promise) {
					promiseData.promise = new Velocity.Promise(function(resolve, reject) {
						promiseData.resolver = resolve;
						promiseData.rejecter = reject;
					});
				}

				if (syntacticSugar) {
					propertiesMap = arguments[0].properties || arguments[0].p;
					options = arguments[0].options || arguments[0].o;
				} else {
					propertiesMap = arguments[argumentIndex];
					options = arguments[argumentIndex + 1];
				}

				elements = sanitizeElements(elements);

				if (!elements) {
					if (promiseData.promise) {
						if (!propertiesMap || !options || options.promiseRejectEmpty !== false) {
							promiseData.rejecter();
						} else {
							promiseData.resolver();
						}
					}
					return;
				}

				/* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
				 single raw DOM element is passed in (which doesn't contain a length property). */
				var elementsLength = elements.length,
						elementsIndex = 0;

				/***************************
				 Argument Overloading
				 ***************************/

				/* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
				 Overloading is detected by checking for the absence of an object being passed into options. */
				/* Note: The stop/finish/pause/resume actions do not accept animation options, and are therefore excluded from this check. */
				if (!/^(stop|finish|finishAll|pause|resume)$/i.test(propertiesMap) && !$.isPlainObject(options)) {
					/* The utility function shifts all arguments one position to the right, so we adjust for that offset. */
					var startingArgumentPosition = argumentIndex + 1;

					options = {};

					/* Iterate through all options arguments */
					for (var i = startingArgumentPosition; i < arguments.length; i++) {
						/* Treat a number as a duration. Parse it out. */
						/* Note: The following RegEx will return true if passed an array with a number as its first item.
						 Thus, arrays are skipped from this check. */
						if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
							options.duration = arguments[i];
							/* Treat strings and arrays as easings. */
						} else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {
							options.easing = arguments[i];
							/* Treat a function as a complete callback. */
						} else if (Type.isFunction(arguments[i])) {
							options.complete = arguments[i];
						}
					}
				}

				/*********************
				 Action Detection
				 *********************/

				/* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
				 or they can be started, stopped, paused, resumed, or reversed . If a literal or referenced properties map is passed in as Velocity's
				 first argument, the associated action is "start". Alternatively, "scroll", "reverse", "pause", "resume" or "stop" can be passed in 
				 instead of a properties map. */
				var action;

				switch (propertiesMap) {
					case "scroll":
						action = "scroll";
						break;

					case "reverse":
						action = "reverse";
						break;

					case "pause":

						/*******************
						 Action: Pause
						 *******************/

						var currentTime = (new Date()).getTime();

						/* Handle delay timers */
						$.each(elements, function(i, element) {
							pauseDelayOnElement(element, currentTime);
						});

						/* Pause and Resume are call-wide (not on a per element basis). Thus, calling pause or resume on a 
						 single element will cause any calls that containt tweens for that element to be paused/resumed
						 as well. */

						/* Iterate through all calls and pause any that contain any of our elements */
						$.each(Velocity.State.calls, function(i, activeCall) {

							var found = false;
							/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
							if (activeCall) {
								/* Iterate through the active call's targeted elements. */
								$.each(activeCall[1], function(k, activeElement) {
									var queueName = (options === undefined) ? "" : options;

									if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
										return true;
									}

									/* Iterate through the calls targeted by the stop command. */
									$.each(elements, function(l, element) {
										/* Check that this call was applied to the target element. */
										if (element === activeElement) {

											/* Set call to paused */
											activeCall[5] = {
												resume: false
											};

											/* Once we match an element, we can bounce out to the next call entirely */
											found = true;
											return false;
										}
									});

									/* Proceed to check next call if we have already matched */
									if (found) {
										return false;
									}
								});
							}

						});

						/* Since pause creates no new tweens, exit out of Velocity. */
						return getChain();

					case "resume":

						/*******************
						 Action: Resume
						 *******************/

						/* Handle delay timers */
						$.each(elements, function(i, element) {
							resumeDelayOnElement(element, currentTime);
						});

						/* Pause and Resume are call-wide (not on a per elemnt basis). Thus, calling pause or resume on a 
						 single element will cause any calls that containt tweens for that element to be paused/resumed
						 as well. */

						/* Iterate through all calls and pause any that contain any of our elements */
						$.each(Velocity.State.calls, function(i, activeCall) {
							var found = false;
							/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
							if (activeCall) {
								/* Iterate through the active call's targeted elements. */
								$.each(activeCall[1], function(k, activeElement) {
									var queueName = (options === undefined) ? "" : options;

									if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
										return true;
									}

									/* Skip any calls that have never been paused */
									if (!activeCall[5]) {
										return true;
									}

									/* Iterate through the calls targeted by the stop command. */
									$.each(elements, function(l, element) {
										/* Check that this call was applied to the target element. */
										if (element === activeElement) {

											/* Flag a pause object to be resumed, which will occur during the next tick. In
											 addition, the pause object will at that time be deleted */
											activeCall[5].resume = true;

											/* Once we match an element, we can bounce out to the next call entirely */
											found = true;
											return false;
										}
									});

									/* Proceed to check next call if we have already matched */
									if (found) {
										return false;
									}
								});
							}

						});

						/* Since resume creates no new tweens, exit out of Velocity. */
						return getChain();

					case "finish":
					case "finishAll":
					case "stop":
						/*******************
						 Action: Stop
						 *******************/

						/* Clear the currently-active delay on each targeted element. */
						$.each(elements, function(i, element) {
							if (Data(element) && Data(element).delayTimer) {
								/* Stop the timer from triggering its cached next() function. */
								clearTimeout(Data(element).delayTimer.setTimeout);

								/* Manually call the next() function so that the subsequent queue items can progress. */
								if (Data(element).delayTimer.next) {
									Data(element).delayTimer.next();
								}

								delete Data(element).delayTimer;
							}

							/* If we want to finish everything in the queue, we have to iterate through it
							 and call each function. This will make them active calls below, which will
							 cause them to be applied via the duration setting. */
							if (propertiesMap === "finishAll" && (options === true || Type.isString(options))) {
								/* Iterate through the items in the element's queue. */
								$.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
									/* The queue array can contain an "inprogress" string, which we skip. */
									if (Type.isFunction(item)) {
										item();
									}
								});

								/* Clearing the $.queue() array is achieved by resetting it to []. */
								$.queue(element, Type.isString(options) ? options : "", []);
							}
						});

						var callsToStop = [];

						/* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
						 been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
						 is stopped, the next item in its animation queue is immediately triggered. */
						/* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
						 or a custom queue string can be passed in. */
						/* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
						 regardless of the element's current queue state. */

						/* Iterate through every active call. */
						$.each(Velocity.State.calls, function(i, activeCall) {
							/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
							if (activeCall) {
								/* Iterate through the active call's targeted elements. */
								$.each(activeCall[1], function(k, activeElement) {
									/* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
									 clear calls associated with the relevant queue. */
									/* Call stopping logic works as follows:
									 - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
									 - options === undefined --> stop current queue:"" call and all queue:false calls.
									 - options === false --> stop only queue:false calls.
									 - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */
									var queueName = (options === undefined) ? "" : options;

									if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
										return true;
									}

									/* Iterate through the calls targeted by the stop command. */
									$.each(elements, function(l, element) {
										/* Check that this call was applied to the target element. */
										if (element === activeElement) {
											/* Optionally clear the remaining queued calls. If we're doing "finishAll" this won't find anything,
											 due to the queue-clearing above. */
											if (options === true || Type.isString(options)) {
												/* Iterate through the items in the element's queue. */
												$.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
													/* The queue array can contain an "inprogress" string, which we skip. */
													if (Type.isFunction(item)) {
														/* Pass the item's callback a flag indicating that we want to abort from the queue call.
														 (Specifically, the queue will resolve the call's associated promise then abort.)  */
														item(null, true);
													}
												});

												/* Clearing the $.queue() array is achieved by resetting it to []. */
												$.queue(element, Type.isString(options) ? options : "", []);
											}

											if (propertiesMap === "stop") {
												/* Since "reverse" uses cached start values (the previous call's endValues), these values must be
												 changed to reflect the final value that the elements were actually tweened to. */
												/* Note: If only queue:false animations are currently running on an element, it won't have a tweensContainer
												 object. Also, queue:false animations can't be reversed. */
												var data = Data(element);
												if (data && data.tweensContainer && queueName !== false) {
													$.each(data.tweensContainer, function(m, activeTween) {
														activeTween.endValue = activeTween.currentValue;
													});
												}

												callsToStop.push(i);
											} else if (propertiesMap === "finish" || propertiesMap === "finishAll") {
												/* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
												 they finish upon the next rAf tick then proceed with normal call completion logic. */
												activeCall[2].duration = 1;
											}
										}
									});
								});
							}
						});

						/* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
						 that the complete callback and display:none setting should be skipped since we're completing prematurely. */
						if (propertiesMap === "stop") {
							$.each(callsToStop, function(i, j) {
								completeCall(j, true);
							});

							if (promiseData.promise) {
								/* Immediately resolve the promise associated with this stop call since stop runs synchronously. */
								promiseData.resolver(elements);
							}
						}

						/* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */
						return getChain();

					default:
						/* Treat a non-empty plain object as a literal properties map. */
						if ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {
							action = "start";

							/****************
							 Redirects
							 ****************/

							/* Check if a string matches a registered redirect (see Redirects above). */
						} else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {
							opts = $.extend({}, options);

							var durationOriginal = opts.duration,
									delayOriginal = opts.delay || 0;

							/* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */
							if (opts.backwards === true) {
								elements = $.extend(true, [], elements).reverse();
							}

							/* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */
							$.each(elements, function(elementIndex, element) {
								/* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */
								if (parseFloat(opts.stagger)) {
									opts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex);
								} else if (Type.isFunction(opts.stagger)) {
									opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);
								}

								/* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
								 the duration of each element's animation, using floors to prevent producing very short durations. */
								if (opts.drag) {
									/* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */
									opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);

									/* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
									 B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
									 The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */
									opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex / elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);
								}

								/* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
								 reduce the opts checking logic required inside the redirect. */
								Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);
							});

							/* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
							 (The performance overhead up to this point is virtually non-existant.) */
							/* Note: The jQuery call chain is kept intact by returning the complete element set. */
							return getChain();
						} else {
							var abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";

							if (promiseData.promise) {
								promiseData.rejecter(new Error(abortError));
							} else {
								console.log(abortError);
							}

							return getChain();
						}
				}

				/**************************
				 Call-Wide Variables
				 **************************/

				/* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
				 being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
				 avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
				 conversion metrics across Velocity animations that are not immediately consecutively chained. */
				var callUnitConversionData = {
					lastParent: null,
					lastPosition: null,
					lastFontSize: null,
					lastPercentToPxWidth: null,
					lastPercentToPxHeight: null,
					lastEmToPx: null,
					remToPx: null,
					vwToPx: null,
					vhToPx: null
				};

				/* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
				 Velocity.State.calls array that is processed during animation ticking. */
				var call = [];

				/************************
				 Element Processing
				 ************************/

				/* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
				 1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
				 2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
				 3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
				 `elementArrayIndex` allows passing index of the element in the original array to value functions.
				 If `elementsIndex` were used instead the index would be determined by the elements' per-element queue.
				 */
				function processElement(element, elementArrayIndex) {

					/*************************
					 Part I: Pre-Queueing
					 *************************/

					/***************************
					 Element-Wide Variables
					 ***************************/

					var /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */
							opts = $.extend({}, Velocity.defaults, options),
							/* A container for the processed data associated with each property in the propertyMap.
							 (Each property in the map produces its own "tween".) */
							tweensContainer = {},
							elementUnitConversionData;

					/******************
					 Element Init
					 ******************/

					if (Data(element) === undefined) {
						Velocity.init(element);
					}

					/******************
					 Option: Delay
					 ******************/

					/* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */
					/* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()
					 (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */
					if (parseFloat(opts.delay) && opts.queue !== false) {
						$.queue(element, opts.queue, function(next) {
							/* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */
							Velocity.velocityQueueEntryFlag = true;

							/* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
							 The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command, and
							 delayBegin/delayTime is used to ensure we can "pause" and "resume" a tween that is still mid-delay. */

							/* Temporarily store delayed elements to facilite access for global pause/resume */
							var callIndex = Velocity.State.delayedElements.count++;
							Velocity.State.delayedElements[callIndex] = element;

							var delayComplete = (function(index) {
								return function() {
									/* Clear the temporary element */
									Velocity.State.delayedElements[index] = false;

									/* Finally, issue the call */
									next();
								};
							})(callIndex);


							Data(element).delayBegin = (new Date()).getTime();
							Data(element).delay = parseFloat(opts.delay);
							Data(element).delayTimer = {
								setTimeout: setTimeout(next, parseFloat(opts.delay)),
								next: delayComplete
							};
						});
					}

					/*********************
					 Option: Duration
					 *********************/

					/* Support for jQuery's named durations. */
					switch (opts.duration.toString().toLowerCase()) {
						case "fast":
							opts.duration = 200;
							break;

						case "normal":
							opts.duration = DURATION_DEFAULT;
							break;

						case "slow":
							opts.duration = 600;
							break;

						default:
							/* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */
							opts.duration = parseFloat(opts.duration) || 1;
					}

					/************************
					 Global Option: Mock
					 ************************/

					if (Velocity.mock !== false) {
						/* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
						 Alternatively, a multiplier can be passed in to time remap all delays and durations. */
						if (Velocity.mock === true) {
							opts.duration = opts.delay = 1;
						} else {
							opts.duration *= parseFloat(Velocity.mock) || 1;
							opts.delay *= parseFloat(Velocity.mock) || 1;
						}
					}

					/*******************
					 Option: Easing
					 *******************/

					opts.easing = getEasing(opts.easing, opts.duration);

					/**********************
					 Option: Callbacks
					 **********************/

					/* Callbacks must functions. Otherwise, default to null. */
					if (opts.begin && !Type.isFunction(opts.begin)) {
						opts.begin = null;
					}

					if (opts.progress && !Type.isFunction(opts.progress)) {
						opts.progress = null;
					}

					if (opts.complete && !Type.isFunction(opts.complete)) {
						opts.complete = null;
					}

					/*********************************
					 Option: Display & Visibility
					 *********************************/

					/* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */
					/* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */
					if (opts.display !== undefined && opts.display !== null) {
						opts.display = opts.display.toString().toLowerCase();

						/* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */
						if (opts.display === "auto") {
							opts.display = Velocity.CSS.Values.getDisplayType(element);
						}
					}

					if (opts.visibility !== undefined && opts.visibility !== null) {
						opts.visibility = opts.visibility.toString().toLowerCase();
					}

					/**********************
					 Option: mobileHA
					 **********************/

					/* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
					 on animating elements. HA is removed from the element at the completion of its animation. */
					/* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
					/* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */
					opts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);

					/***********************
					 Part II: Queueing
					 ***********************/

					/* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
					 In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */
					/* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
					 the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */
					function buildQueue(next) {
						var data, lastTweensContainer;

						/*******************
						 Option: Begin
						 *******************/

						/* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */
						if (opts.begin && elementsIndex === 0) {
							/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
							try {
								opts.begin.call(elements, elements);
							} catch (error) {
								setTimeout(function() {
									throw error;
								}, 1);
							}
						}

						/*****************************************
						 Tween Data Construction (for Scroll)
						 *****************************************/

						/* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */
						if (action === "scroll") {
							/* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */
							var scrollDirection = (/^x$/i.test(opts.axis) ? "Left" : "Top"),
									scrollOffset = parseFloat(opts.offset) || 0,
									scrollPositionCurrent,
									scrollPositionCurrentAlternate,
									scrollPositionEnd;

							/* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
							 as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */
							if (opts.container) {
								/* Ensure that either a jQuery object or a raw DOM element was passed in. */
								if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {
									/* Extract the raw DOM element from the jQuery wrapper. */
									opts.container = opts.container[0] || opts.container;
									/* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
									 (due to the user's natural interaction with the page). */
									scrollPositionCurrent = opts.container["scroll" + scrollDirection]; /* GET */

									/* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
									 -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
									 the scroll container's current scroll position. */
									scrollPositionEnd = (scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()]) + scrollOffset; /* GET */
									/* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */
								} else {
									opts.container = null;
								}
							} else {
								/* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
								 the appropriate cached property names (which differ based on browser type). */
								scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]]; /* GET */
								/* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */
								scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]]; /* GET */

								/* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
								 and therefore end values do not need to be compounded onto current values. */
								scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */
							}

							/* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */
							tweensContainer = {
								scroll: {
									rootPropertyValue: false,
									startValue: scrollPositionCurrent,
									currentValue: scrollPositionCurrent,
									endValue: scrollPositionEnd,
									unitType: "",
									easing: opts.easing,
									scrollData: {
										container: opts.container,
										direction: scrollDirection,
										alternateValue: scrollPositionCurrentAlternate
									}
								},
								element: element
							};

							if (Velocity.debug) {
								console.log("tweensContainer (scroll): ", tweensContainer.scroll, element);
							}

							/******************************************
							 Tween Data Construction (for Reverse)
							 ******************************************/

							/* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
							 that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
							 the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */
							/* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */
							/* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
							 there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
							 as reverting to the element's values as they were prior to the previous *Velocity* call. */
						} else if (action === "reverse") {
							data = Data(element);

							/* Abort if there is no prior animation data to reverse to. */
							if (!data) {
								return;
							}

							if (!data.tweensContainer) {
								/* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */
								$.dequeue(element, opts.queue);

								return;
							} else {
								/*********************
								 Options Parsing
								 *********************/

								/* If the element was hidden via the display option in the previous call,
								 revert display to "auto" prior to reversal so that the element is visible again. */
								if (data.opts.display === "none") {
									data.opts.display = "auto";
								}

								if (data.opts.visibility === "hidden") {
									data.opts.visibility = "visible";
								}

								/* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
								 Further, remove the previous call's callback options; typically, users do not want these to be refired. */
								data.opts.loop = false;
								data.opts.begin = null;
								data.opts.complete = null;

								/* Since we're extending an opts object that has already been extended with the defaults options object,
								 we remove non-explicitly-defined properties that are auto-assigned values. */
								if (!options.easing) {
									delete opts.easing;
								}

								if (!options.duration) {
									delete opts.duration;
								}

								/* The opts object used for reversal is an extension of the options object optionally passed into this
								 reverse call plus the options used in the previous Velocity call. */
								opts = $.extend({}, data.opts, opts);

								/*************************************
								 Tweens Container Reconstruction
								 *************************************/

								/* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */
								lastTweensContainer = $.extend(true, {}, data ? data.tweensContainer : null);

								/* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */
								for (var lastTween in lastTweensContainer) {
									/* In addition to tween data, tweensContainers contain an element property that we ignore here. */
									if (lastTweensContainer.hasOwnProperty(lastTween) && lastTween !== "element") {
										var lastStartValue = lastTweensContainer[lastTween].startValue;

										lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
										lastTweensContainer[lastTween].endValue = lastStartValue;

										/* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
										 Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
										 The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */
										if (!Type.isEmptyObject(options)) {
											lastTweensContainer[lastTween].easing = opts.easing;
										}

										if (Velocity.debug) {
											console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);
										}
									}
								}

								tweensContainer = lastTweensContainer;
							}

							/*****************************************
							 Tween Data Construction (for Start)
							 *****************************************/

						} else if (action === "start") {

							/*************************
							 Value Transferring
							 *************************/

							/* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
							 while the element was in the process of being animated by Velocity, then this current call is safe to use
							 the end values from the prior call as its start values. Velocity attempts to perform this value transfer
							 process whenever possible in order to avoid requerying the DOM. */
							/* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
							 then the DOM is queried for the element's current values as a last resort. */
							/* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */

							data = Data(element);

							/* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
							 to transfer over end values to use as start values. If it's set to true and there is a previous
							 Velocity call to pull values from, do so. */
							if (data && data.tweensContainer && data.isAnimating === true) {
								lastTweensContainer = data.tweensContainer;
							}

							/***************************
							 Tween Data Calculation
							 ***************************/

							/* This function parses property data and defaults endValue, easing, and startValue as appropriate. */
							/* Property map values can either take the form of 1) a single value representing the end value,
							 or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
							 The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
							 the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */
							var parsePropertyValue = function(valueData, skipResolvingEasing) {
								var endValue, easing, startValue;

								/* If we have a function as the main argument then resolve it first, in case it returns an array that needs to be split */
								if (Type.isFunction(valueData)) {
									valueData = valueData.call(element, elementArrayIndex, elementsLength);
								}

								/* Handle the array format, which can be structured as one of three potential overloads:
								 A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */
								if (Type.isArray(valueData)) {
									/* endValue is always the first item in the array. Don't bother validating endValue's value now
									 since the ensuing property cycling logic does that. */
									endValue = valueData[0];

									/* Two-item array format: If the second item is a number, function, or hex string, treat it as a
									 start value since easings can only be non-hex strings or arrays. */
									if ((!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
										startValue = valueData[1];
										/* Two or three-item array: If the second item is a non-hex string easing name or an array, treat it as an easing. */
									} else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1]) && Velocity.Easings[valueData[1]]) || Type.isArray(valueData[1])) {
										easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);

										/* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */
										startValue = valueData[2];
									} else {
										startValue = valueData[1] || valueData[2];
									}
									/* Handle the single-value format. */
								} else {
									endValue = valueData;
								}

								/* Default to the call's easing if a per-property easing type was not defined. */
								if (!skipResolvingEasing) {
									easing = easing || opts.easing;
								}

								/* If functions were passed in as values, pass the function the current element as its context,
								 plus the element's index and the element set's size as arguments. Then, assign the returned value. */
								if (Type.isFunction(endValue)) {
									endValue = endValue.call(element, elementArrayIndex, elementsLength);
								}

								if (Type.isFunction(startValue)) {
									startValue = startValue.call(element, elementArrayIndex, elementsLength);
								}

								/* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */
								return [endValue || 0, easing, startValue];
							};

							var fixPropertyValue = function(property, valueData) {
								/* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */
								var rootProperty = CSS.Hooks.getRoot(property),
										rootPropertyValue = false,
										/* Parse out endValue, easing, and startValue from the property's data. */
										endValue = valueData[0],
										easing = valueData[1],
										startValue = valueData[2],
										pattern;

								/**************************
								 Start Value Sourcing
								 **************************/

								/* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
								 inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
								 Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */
								/* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
								 there is no way to check for their explicit browser support, and so we skip skip this check for them. */
								if ((!data || !data.isSVG) && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {
									if (Velocity.debug) {
										console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");
									}
									return;
								}

								/* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
								 animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
								 a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */
								if (((opts.display !== undefined && opts.display !== null && opts.display !== "none") || (opts.visibility !== undefined && opts.visibility !== "hidden")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
									startValue = 0;
								}

								/* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
								 for all of the current call's properties that were *also* animated in the previous call. */
								/* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */
								if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {
									if (startValue === undefined) {
										startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;
									}

									/* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
									 instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
									 attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */
									rootPropertyValue = data.rootPropertyValueCache[rootProperty];
									/* If values were not transferred from a previous Velocity call, query the DOM as needed. */
								} else {
									/* Handle hooked properties. */
									if (CSS.Hooks.registered[property]) {
										if (startValue === undefined) {
											rootPropertyValue = CSS.getPropertyValue(element, rootProperty); /* GET */
											/* Note: The following getPropertyValue() call does not actually trigger a DOM query;
											 getPropertyValue() will extract the hook from rootPropertyValue. */
											startValue = CSS.getPropertyValue(element, property, rootPropertyValue);
											/* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;
											 just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual
											 root property value (if one is set), but this is acceptable since the primary reason users forcefeed is
											 to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */
										} else {
											/* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */
											rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
										}
										/* Handle non-hooked properties that haven't already been defined via forcefeeding. */
									} else if (startValue === undefined) {
										startValue = CSS.getPropertyValue(element, property); /* GET */
									}
								}

								/**************************
								 Value Data Extraction
								 **************************/

								var separatedValue,
										endValueUnitType,
										startValueUnitType,
										operator = false;

								/* Separates a property value into its numeric value and its unit type. */
								var separateValue = function(property, value) {
									var unitType,
											numericValue;

									numericValue = (value || "0")
											.toString()
											.toLowerCase()
											/* Match the unit type at the end of the value. */
											.replace(/[%A-z]+$/, function(match) {
												/* Grab the unit type. */
												unitType = match;

												/* Strip the unit type off of value. */
												return "";
											});

									/* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */
									if (!unitType) {
										unitType = CSS.Values.getUnitType(property);
									}

									return [numericValue, unitType];
								};

								if (startValue !== endValue && Type.isString(startValue) && Type.isString(endValue)) {
									pattern = "";
									var iStart = 0, // index in startValue
											iEnd = 0, // index in endValue
											aStart = [], // array of startValue numbers
											aEnd = [], // array of endValue numbers
											inCalc = 0, // Keep track of being inside a "calc()" so we don't duplicate it
											inRGB = 0, // Keep track of being inside an RGB as we can't use fractional values
											inRGBA = 0; // Keep track of being inside an RGBA as we must pass fractional for the alpha channel

									startValue = CSS.Hooks.fixColors(startValue);
									endValue = CSS.Hooks.fixColors(endValue);
									while (iStart < startValue.length && iEnd < endValue.length) {
										var cStart = startValue[iStart],
												cEnd = endValue[iEnd];

										if (/[\d\.]/.test(cStart) && /[\d\.]/.test(cEnd)) {
											var tStart = cStart, // temporary character buffer
													tEnd = cEnd, // temporary character buffer
													dotStart = ".", // Make sure we can only ever match a single dot in a decimal
													dotEnd = "."; // Make sure we can only ever match a single dot in a decimal

											while (++iStart < startValue.length) {
												cStart = startValue[iStart];
												if (cStart === dotStart) {
													dotStart = ".."; // Can never match two characters
												} else if (!/\d/.test(cStart)) {
													break;
												}
												tStart += cStart;
											}
											while (++iEnd < endValue.length) {
												cEnd = endValue[iEnd];
												if (cEnd === dotEnd) {
													dotEnd = ".."; // Can never match two characters
												} else if (!/\d/.test(cEnd)) {
													break;
												}
												tEnd += cEnd;
											}
											var uStart = CSS.Hooks.getUnit(startValue, iStart), // temporary unit type
													uEnd = CSS.Hooks.getUnit(endValue, iEnd); // temporary unit type

											iStart += uStart.length;
											iEnd += uEnd.length;
											if (uStart === uEnd) {
												// Same units
												if (tStart === tEnd) {
													// Same numbers, so just copy over
													pattern += tStart + uStart;
												} else {
													// Different numbers, so store them
													pattern += "{" + aStart.length + (inRGB ? "!" : "") + "}" + uStart;
													aStart.push(parseFloat(tStart));
													aEnd.push(parseFloat(tEnd));
												}
											} else {
												// Different units, so put into a "calc(from + to)" and animate each side to/from zero
												var nStart = parseFloat(tStart),
														nEnd = parseFloat(tEnd);

												pattern += (inCalc < 5 ? "calc" : "") + "("
														+ (nStart ? "{" + aStart.length + (inRGB ? "!" : "") + "}" : "0") + uStart
														+ " + "
														+ (nEnd ? "{" + (aStart.length + 1) + (inRGB ? "!" : "") + "}" : "0") + uEnd
														+ ")";
												if (nStart) {
													aStart.push(parseFloat(tStart));
													aStart.push(parseFloat(0));
												}
												if (nEnd) {
													aEnd.push(parseFloat(0));
													aEnd.push(parseFloat(tEnd));
												}
											}
										} else if (cStart === cEnd) {
											pattern += cStart;
											iStart++;
											iEnd++;
											// Keep track of being inside a calc()
											if (inCalc === 0 && cStart === "c"
													|| inCalc === 1 && cStart === "a"
													|| inCalc === 2 && cStart === "l"
													|| inCalc === 3 && cStart === "c"
													|| inCalc >= 4 && cStart === "("
													) {
												inCalc++;
											} else if ((inCalc && inCalc < 5)
													|| inCalc >= 4 && cStart === ")" && --inCalc < 5) {
												inCalc = 0;
											}
											// Keep track of being inside an rgb() / rgba()
											if (inRGB === 0 && cStart === "r"
													|| inRGB === 1 && cStart === "g"
													|| inRGB === 2 && cStart === "b"
													|| inRGB === 3 && cStart === "a"
													|| inRGB >= 3 && cStart === "("
													) {
												if (inRGB === 3 && cStart === "a") {
													inRGBA = 1;
												}
												inRGB++;
											} else if (inRGBA && cStart === ",") {
												if (++inRGBA > 3) {
													inRGB = inRGBA = 0;
												}
											} else if ((inRGBA && inRGB < (inRGBA ? 5 : 4))
													|| inRGB >= (inRGBA ? 4 : 3) && cStart === ")" && --inRGB < (inRGBA ? 5 : 4)) {
												inRGB = inRGBA = 0;
											}
										} else {
											inCalc = 0;
											// TODO: changing units, fixing colours
											break;
										}
									}
									if (iStart !== startValue.length || iEnd !== endValue.length) {
										if (Velocity.debug) {
											console.error("Trying to pattern match mis-matched strings [\"" + endValue + "\", \"" + startValue + "\"]");
										}
										pattern = undefined;
									}
									if (pattern) {
										if (aStart.length) {
											if (Velocity.debug) {
												console.log("Pattern found \"" + pattern + "\" -> ", aStart, aEnd, "[" + startValue + "," + endValue + "]");
											}
											startValue = aStart;
											endValue = aEnd;
											endValueUnitType = startValueUnitType = "";
										} else {
											pattern = undefined;
										}
									}
								}

								if (!pattern) {
									/* Separate startValue. */
									separatedValue = separateValue(property, startValue);
									startValue = separatedValue[0];
									startValueUnitType = separatedValue[1];

									/* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */
									separatedValue = separateValue(property, endValue);
									endValue = separatedValue[0].replace(/^([+-\/*])=/, function(match, subMatch) {
										operator = subMatch;

										/* Strip the operator off of the value. */
										return "";
									});
									endValueUnitType = separatedValue[1];

									/* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */
									startValue = parseFloat(startValue) || 0;
									endValue = parseFloat(endValue) || 0;

									/***************************************
									 Property-Specific Value Conversion
									 ***************************************/

									/* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */
									if (endValueUnitType === "%") {
										/* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
										 which is identical to the em unit's behavior, so we piggyback off of that. */
										if (/^(fontSize|lineHeight)$/.test(property)) {
											/* Convert % into an em decimal value. */
											endValue = endValue / 100;
											endValueUnitType = "em";
											/* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */
										} else if (/^scale/.test(property)) {
											endValue = endValue / 100;
											endValueUnitType = "";
											/* For RGB components, take the defined percentage of 255 and strip off the unit type. */
										} else if (/(Red|Green|Blue)$/i.test(property)) {
											endValue = (endValue / 100) * 255;
											endValueUnitType = "";
										}
									}
								}

								/***************************
								 Unit Ratio Calculation
								 ***************************/

								/* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
								 %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
								 for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
								 from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
								 1) Calculating the ratio of %/em/rem/vh/vw relative to pixels
								 2) Converting startValue into the same unit of measurement as endValue based on these ratios. */
								/* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
								 setting values with the target unit type then comparing the returned pixel value. */
								/* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
								 of batching the SETs and GETs together upfront outweights the potential overhead
								 of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */
								/* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */
								var calculateUnitRatios = function() {

									/************************
									 Same Ratio Checks
									 ************************/

									/* The properties below are used to determine whether the element differs sufficiently from this call's
									 previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
									 of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
									 this is done to minimize DOM querying. */
									var sameRatioIndicators = {
										myParent: element.parentNode || document.body, /* GET */
										position: CSS.getPropertyValue(element, "position"), /* GET */
										fontSize: CSS.getPropertyValue(element, "fontSize") /* GET */
									},
											/* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */
											samePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent)),
											/* Determine if the same em ratio can be used. em is relative to the element's fontSize. */
											sameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);

									/* Store these ratio indicators call-wide for the next element to compare against. */
									callUnitConversionData.lastParent = sameRatioIndicators.myParent;
									callUnitConversionData.lastPosition = sameRatioIndicators.position;
									callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;

									/***************************
									 Element-Specific Units
									 ***************************/

									/* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
									 of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */
									var measurement = 100,
											unitRatios = {};

									if (!sameEmRatio || !samePercentRatio) {
										var dummy = data && data.isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");

										Velocity.init(dummy);
										sameRatioIndicators.myParent.appendChild(dummy);

										/* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
										 Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */
										/* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */
										$.each(["overflow", "overflowX", "overflowY"], function(i, property) {
											Velocity.CSS.setPropertyValue(dummy, property, "hidden");
										});
										Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);
										Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);
										Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");

										/* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */
										$.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(i, property) {
											Velocity.CSS.setPropertyValue(dummy, property, measurement + "%");
										});
										/* paddingLeft arbitrarily acts as our proxy property for the em ratio. */
										Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");

										/* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */
										unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement; /* GET */
										unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement; /* GET */
										unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement; /* GET */

										sameRatioIndicators.myParent.removeChild(dummy);
									} else {
										unitRatios.emToPx = callUnitConversionData.lastEmToPx;
										unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;
										unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;
									}

									/***************************
									 Element-Agnostic Units
									 ***************************/

									/* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
									 once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
									 that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
									 so we calculate it now. */
									if (callUnitConversionData.remToPx === null) {
										/* Default to browsers' default fontSize of 16px in the case of 0. */
										callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16; /* GET */
									}

									/* Similarly, viewport units are %-relative to the window's inner dimensions. */
									if (callUnitConversionData.vwToPx === null) {
										callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */
										callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */
									}

									unitRatios.remToPx = callUnitConversionData.remToPx;
									unitRatios.vwToPx = callUnitConversionData.vwToPx;
									unitRatios.vhToPx = callUnitConversionData.vhToPx;

									if (Velocity.debug >= 1) {
										console.log("Unit ratios: " + JSON.stringify(unitRatios), element);
									}
									return unitRatios;
								};

								/********************
								 Unit Conversion
								 ********************/

								/* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */
								if (/[\/*]/.test(operator)) {
									endValueUnitType = startValueUnitType;
									/* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
									 is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
									 on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
									 would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */
									/* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */
								} else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {
									/* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */
									/* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
									 match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
									 which remains past the point of the animation's completion. */
									if (endValue === 0) {
										endValueUnitType = startValueUnitType;
									} else {
										/* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
										 If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */
										elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();

										/* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */
										/* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */
										var axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x") ? "x" : "y";

										/* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
										 1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */
										switch (startValueUnitType) {
											case "%":
												/* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
												 Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
												 to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */
												startValue *= (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
												break;

											case "px":
												/* px acts as our midpoint in the unit conversion process; do nothing. */
												break;

											default:
												startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];
										}

										/* Invert the px ratios to convert into to the target unit. */
										switch (endValueUnitType) {
											case "%":
												startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
												break;

											case "px":
												/* startValue is already in px, do nothing; we're done. */
												break;

											default:
												startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];
										}
									}
								}

								/*********************
								 Relative Values
								 *********************/

								/* Operator logic must be performed last since it requires unit-normalized start and end values. */
								/* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
								 to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
								 50 points is added on top of the current % value. */
								switch (operator) {
									case "+":
										endValue = startValue + endValue;
										break;

									case "-":
										endValue = startValue - endValue;
										break;

									case "*":
										endValue = startValue * endValue;
										break;

									case "/":
										endValue = startValue / endValue;
										break;
								}

								/**************************
								 tweensContainer Push
								 **************************/

								/* Construct the per-property tween object, and push it to the element's tweensContainer. */
								tweensContainer[property] = {
									rootPropertyValue: rootPropertyValue,
									startValue: startValue,
									currentValue: startValue,
									endValue: endValue,
									unitType: endValueUnitType,
									easing: easing
								};
								if (pattern) {
									tweensContainer[property].pattern = pattern;
								}

								if (Velocity.debug) {
									console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);
								}
							};

							/* Create a tween out of each property, and append its associated data to tweensContainer. */
							for (var property in propertiesMap) {

								if (!propertiesMap.hasOwnProperty(property)) {
									continue;
								}
								/* The original property name's format must be used for the parsePropertyValue() lookup,
								 but we then use its camelCase styling to normalize it for manipulation. */
								var propertyName = CSS.Names.camelCase(property),
										valueData = parsePropertyValue(propertiesMap[property]);

								/* Find shorthand color properties that have been passed a hex string. */
								/* Would be quicker to use CSS.Lists.colors.includes() if possible */
								if (CSS.Lists.colors.indexOf(propertyName) >= 0) {
									/* Parse the value data for each shorthand. */
									var endValue = valueData[0],
											easing = valueData[1],
											startValue = valueData[2];

									if (CSS.RegEx.isHex.test(endValue)) {
										/* Convert the hex strings into their RGB component arrays. */
										var colorComponents = ["Red", "Green", "Blue"],
												endValueRGB = CSS.Values.hexToRgb(endValue),
												startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;

										/* Inject the RGB component tweens into propertiesMap. */
										for (var i = 0; i < colorComponents.length; i++) {
											var dataArray = [endValueRGB[i]];

											if (easing) {
												dataArray.push(easing);
											}

											if (startValueRGB !== undefined) {
												dataArray.push(startValueRGB[i]);
											}

											fixPropertyValue(propertyName + colorComponents[i], dataArray);
										}
										/* If we have replaced a shortcut color value then don't update the standard property name */
										continue;
									}
								}
								fixPropertyValue(propertyName, valueData);
							}

							/* Along with its property data, store a reference to the element itself onto tweensContainer. */
							tweensContainer.element = element;
						}

						/*****************
						 Call Push
						 *****************/

						/* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
						 being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */
						if (tweensContainer.element) {
							/* Apply the "velocity-animating" indicator class. */
							CSS.Values.addClass(element, "velocity-animating");

							/* The call array houses the tweensContainers for each element being animated in the current call. */
							call.push(tweensContainer);

							data = Data(element);

							if (data) {
								/* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */
								if (opts.queue === "") {

									data.tweensContainer = tweensContainer;
									data.opts = opts;
								}

								/* Switch on the element's animating flag. */
								data.isAnimating = true;
							}

							/* Once the final element in this call's element set has been processed, push the call array onto
							 Velocity.State.calls for the animation tick to immediately begin processing. */
							if (elementsIndex === elementsLength - 1) {
								/* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
								 Anything on this call container is subjected to tick() processing. */
								Velocity.State.calls.push([call, elements, opts, null, promiseData.resolver, null, 0]);

								/* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */
								if (Velocity.State.isTicking === false) {
									Velocity.State.isTicking = true;

									/* Start the tick loop. */
									tick();
								}
							} else {
								elementsIndex++;
							}
						}
					}

					/* When the queue option is set to false, the call skips the element's queue and fires immediately. */
					if (opts.queue === false) {
						/* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
						 we manually inject the delay property here with an explicit setTimeout. */
						if (opts.delay) {

							/* Temporarily store delayed elements to facilitate access for global pause/resume */
							var callIndex = Velocity.State.delayedElements.count++;
							Velocity.State.delayedElements[callIndex] = element;

							var delayComplete = (function(index) {
								return function() {
									/* Clear the temporary element */
									Velocity.State.delayedElements[index] = false;

									/* Finally, issue the call */
									buildQueue();
								};
							})(callIndex);

							Data(element).delayBegin = (new Date()).getTime();
							Data(element).delay = parseFloat(opts.delay);
							Data(element).delayTimer = {
								setTimeout: setTimeout(buildQueue, parseFloat(opts.delay)),
								next: delayComplete
							};
						} else {
							buildQueue();
						}
						/* Otherwise, the call undergoes element queueing as normal. */
						/* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */
					} else {
						$.queue(element, opts.queue, function(next, clearQueue) {
							/* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
							 so it's fine if this is repeatedly triggered for each element in the associated call.) */
							if (clearQueue === true) {
								if (promiseData.promise) {
									promiseData.resolver(elements);
								}

								/* Do not continue with animation queueing. */
								return true;
							}

							/* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
							 See completeCall() for further details. */
							Velocity.velocityQueueEntryFlag = true;

							buildQueue(next);
						});
					}

					/*********************
					 Auto-Dequeuing
					 *********************/

					/* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element
					 must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
					 for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
					 queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
					 first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */
					/* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
					 each one of the elements in the set has reached the end of its individually pre-existing queue chain. */
					/* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.
					 Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */
					if ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {
						$.dequeue(element);
					}
				}

				/**************************
				 Element Set Iteration
				 **************************/

				/* If the "nodeType" property exists on the elements variable, we're animating a single element.
				 Place it in an array so that $.each() can iterate over it. */
				$.each(elements, function(i, element) {
					/* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */
					if (Type.isNode(element)) {
						processElement(element, i);
					}
				});

				/******************
				 Option: Loop
				 ******************/

				/* The loop option accepts an integer indicating how many times the element should loop between the values in the
				 current call's properties map and the element's property values prior to this call. */
				/* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
				 to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
				 which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */
				opts = $.extend({}, Velocity.defaults, options);
				opts.loop = parseInt(opts.loop, 10);
				var reverseCallsCount = (opts.loop * 2) - 1;

				if (opts.loop) {
					/* Double the loop count to convert it into its appropriate number of "reverse" calls.
					 Subtract 1 from the resulting value since the current call is included in the total alternation count. */
					for (var x = 0; x < reverseCallsCount; x++) {
						/* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
						 isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
						 call so that the delay logic that occurs inside *Pre-Queueing* can process it. */
						var reverseOptions = {
							delay: opts.delay,
							progress: opts.progress
						};

						/* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
						 so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */
						if (x === reverseCallsCount - 1) {
							reverseOptions.display = opts.display;
							reverseOptions.visibility = opts.visibility;
							reverseOptions.complete = opts.complete;
						}

						animate(elements, "reverse", reverseOptions);
					}
				}

				/***************
				 Chaining
				 ***************/

				/* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */
				return getChain();
			};

			/* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */
			Velocity = $.extend(animate, Velocity);
			/* For legacy support, also expose the literal animate method. */
			Velocity.animate = animate;

			/**************
			 Timing
			 **************/

			/* Ticker function. */
			var ticker = window.requestAnimationFrame || rAFShim;

			/* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
			 To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
			 devices to avoid wasting battery power on inactive tabs. */
			/* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */
			if (!Velocity.State.isMobile && document.hidden !== undefined) {
				var updateTicker = function() {
					/* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */
					if (document.hidden) {
						ticker = function(callback) {
							/* The tick function needs a truthy first argument in order to pass its internal timestamp check. */
							return setTimeout(function() {
								callback(true);
							}, 16);
						};

						/* The rAF loop has been paused by the browser, so we manually restart the tick. */
						tick();
					} else {
						ticker = window.requestAnimationFrame || rAFShim;
					}
				};

				/* Page could be sitting in the background at this time (i.e. opened as new tab) so making sure we use correct ticker from the start */
				updateTicker();

				/* And then run check again every time visibility changes */
				document.addEventListener("visibilitychange", updateTicker);
			}

			/************
			 Tick
			 ************/

			/* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */
			function tick(timestamp) {
				/* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
				 We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
				 the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
				 calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
				 the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
				 by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
				if (timestamp) {
					/* We normally use RAF's high resolution timestamp but as it can be significantly offset when the browser is
					 under high stress we give the option for choppiness over allowing the browser to drop huge chunks of frames.
					 We use performance.now() and shim it if it doesn't exist for when the tab is hidden. */
					var timeCurrent = Velocity.timestamp && timestamp !== true ? timestamp : performance.now();

					/********************
					 Call Iteration
					 ********************/

					var callsLength = Velocity.State.calls.length;

					/* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
					 when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
					 has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */
					if (callsLength > 10000) {
						Velocity.State.calls = compactSparseArray(Velocity.State.calls);
						callsLength = Velocity.State.calls.length;
					}

					/* Iterate through each active call. */
					for (var i = 0; i < callsLength; i++) {
						/* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */
						if (!Velocity.State.calls[i]) {
							continue;
						}

						/************************
						 Call-Wide Variables
						 ************************/

						var callContainer = Velocity.State.calls[i],
								call = callContainer[0],
								opts = callContainer[2],
								timeStart = callContainer[3],
								firstTick = !!timeStart,
								tweenDummyValue = null,
								pauseObject = callContainer[5],
								millisecondsEllapsed = callContainer[6];



						/* If timeStart is undefined, then this is the first time that this call has been processed by tick().
						 We assign timeStart now so that its value is as close to the real animation start time as possible.
						 (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
						 between that time and now would cause the first few frames of the tween to be skipped since
						 percentComplete is calculated relative to timeStart.) */
						/* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
						 first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
						 same style value as the element's current value. */
						if (!timeStart) {
							timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;
						}

						/* If a pause object is present, skip processing unless it has been set to resume */
						if (pauseObject) {
							if (pauseObject.resume === true) {
								/* Update the time start to accomodate the paused completion amount */
								timeStart = callContainer[3] = Math.round(timeCurrent - millisecondsEllapsed - 16);

								/* Remove pause object after processing */
								callContainer[5] = null;
							} else {
								continue;
							}
						}

						millisecondsEllapsed = callContainer[6] = timeCurrent - timeStart;

						/* The tween's completion percentage is relative to the tween's start time, not the tween's start value
						 (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
						 Accordingly, we ensure that percentComplete does not exceed 1. */
						var percentComplete = Math.min((millisecondsEllapsed) / opts.duration, 1);

						/**********************
						 Element Iteration
						 **********************/

						/* For every call, iterate through each of the elements in its set. */
						for (var j = 0, callLength = call.length; j < callLength; j++) {
							var tweensContainer = call[j],
									element = tweensContainer.element;

							/* Check to see if this element has been deleted midway through the animation by checking for the
							 continued existence of its data cache. If it's gone, or the element is currently paused, skip animating this element. */
							if (!Data(element)) {
								continue;
							}

							var transformPropertyExists = false;

							/**********************************
							 Display & Visibility Toggling
							 **********************************/

							/* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
							 (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */
							if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {
								if (opts.display === "flex") {
									var flexValues = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];

									$.each(flexValues, function(i, flexValue) {
										CSS.setPropertyValue(element, "display", flexValue);
									});
								}

								CSS.setPropertyValue(element, "display", opts.display);
							}

							/* Same goes with the visibility option, but its "none" equivalent is "hidden". */
							if (opts.visibility !== undefined && opts.visibility !== "hidden") {
								CSS.setPropertyValue(element, "visibility", opts.visibility);
							}

							/************************
							 Property Iteration
							 ************************/

							/* For every element, iterate through each property. */
							for (var property in tweensContainer) {
								/* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */
								if (tweensContainer.hasOwnProperty(property) && property !== "element") {
									var tween = tweensContainer[property],
											currentValue,
											/* Easing can either be a pre-genereated function or a string that references a pre-registered easing
											 on the Velocity.Easings object. In either case, return the appropriate easing *function*. */
											easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;

									/******************************
									 Current Value Calculation
									 ******************************/

									if (Type.isString(tween.pattern)) {
										var patternReplace = percentComplete === 1 ?
												function($0, index, round) {
													var result = tween.endValue[index];

													return round ? Math.round(result) : result;
												} :
												function($0, index, round) {
													var startValue = tween.startValue[index],
															tweenDelta = tween.endValue[index] - startValue,
															result = startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));

													return round ? Math.round(result) : result;
												};

										currentValue = tween.pattern.replace(/{(\d+)(!)?}/g, patternReplace);
									} else if (percentComplete === 1) {
										/* If this is the last tick pass (if we've reached 100% completion for this tween),
										 ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */
										currentValue = tween.endValue;
									} else {
										/* Otherwise, calculate currentValue based on the current delta from startValue. */
										var tweenDelta = tween.endValue - tween.startValue;

										currentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));
										/* If no value change is occurring, don't proceed with DOM updating. */
									}
									if (!firstTick && (currentValue === tween.currentValue)) {
										continue;
									}

									tween.currentValue = currentValue;

									/* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
									 it can be passed into the progress callback. */
									if (property === "tween") {
										tweenDummyValue = currentValue;
									} else {
										/******************
										 Hooks: Part I
										 ******************/
										var hookRoot;

										/* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
										 for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
										 rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
										 updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
										 subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */
										if (CSS.Hooks.registered[property]) {
											hookRoot = CSS.Hooks.getRoot(property);

											var rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];

											if (rootPropertyValueCache) {
												tween.rootPropertyValue = rootPropertyValueCache;
											}
										}

										/*****************
										 DOM Update
										 *****************/

										/* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */
										/* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */
										var adjustedSetData = CSS.setPropertyValue(element, /* SET */
												property,
												tween.currentValue + (IE < 9 && parseFloat(currentValue) === 0 ? "" : tween.unitType),
												tween.rootPropertyValue,
												tween.scrollData);

										/*******************
										 Hooks: Part II
										 *******************/

										/* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */
										if (CSS.Hooks.registered[property]) {
											/* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */
											if (CSS.Normalizations.registered[hookRoot]) {
												Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);
											} else {
												Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];
											}
										}

										/***************
										 Transforms
										 ***************/

										/* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */
										if (adjustedSetData[0] === "transform") {
											transformPropertyExists = true;
										}

									}
								}
							}

							/****************
							 mobileHA
							 ****************/

							/* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
							 It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */
							if (opts.mobileHA) {
								/* Don't set the null transform hack if we've already done so. */
								if (Data(element).transformCache.translate3d === undefined) {
									/* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */
									Data(element).transformCache.translate3d = "(0px, 0px, 0px)";

									transformPropertyExists = true;
								}
							}

							if (transformPropertyExists) {
								CSS.flushTransformCache(element);
							}
						}

						/* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
						 Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */
						if (opts.display !== undefined && opts.display !== "none") {
							Velocity.State.calls[i][2].display = false;
						}
						if (opts.visibility !== undefined && opts.visibility !== "hidden") {
							Velocity.State.calls[i][2].visibility = false;
						}

						/* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */
						if (opts.progress) {
							opts.progress.call(callContainer[1],
									callContainer[1],
									percentComplete,
									Math.max(0, (timeStart + opts.duration) - timeCurrent),
									timeStart,
									tweenDummyValue);
						}

						/* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */
						if (percentComplete === 1) {
							completeCall(i);
						}
					}
				}

				/* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */
				if (Velocity.State.isTicking) {
					ticker(tick);
				}
			}

			/**********************
			 Call Completion
			 **********************/

			/* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */
			function completeCall(callIndex, isStopped) {
				/* Ensure the call exists. */
				if (!Velocity.State.calls[callIndex]) {
					return false;
				}

				/* Pull the metadata from the call. */
				var call = Velocity.State.calls[callIndex][0],
						elements = Velocity.State.calls[callIndex][1],
						opts = Velocity.State.calls[callIndex][2],
						resolver = Velocity.State.calls[callIndex][4];

				var remainingCallsExist = false;

				/*************************
				 Element Finalization
				 *************************/

				for (var i = 0, callLength = call.length; i < callLength; i++) {
					var element = call[i].element;

					/* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */
					/* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */
					/* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */
					if (!isStopped && !opts.loop) {
						if (opts.display === "none") {
							CSS.setPropertyValue(element, "display", opts.display);
						}

						if (opts.visibility === "hidden") {
							CSS.setPropertyValue(element, "visibility", opts.visibility);
						}
					}

					/* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
					 a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
					 an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
					 we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
					 is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */
					var data = Data(element);

					if (opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {
						/* The element may have been deleted. Ensure that its data cache still exists before acting on it. */
						if (data) {
							data.isAnimating = false;
							/* Clear the element's rootPropertyValueCache, which will become stale. */
							data.rootPropertyValueCache = {};

							var transformHAPropertyExists = false;
							/* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */
							$.each(CSS.Lists.transforms3D, function(i, transformName) {
								var defaultValue = /^scale/.test(transformName) ? 1 : 0,
										currentValue = data.transformCache[transformName];

								if (data.transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
									transformHAPropertyExists = true;

									delete data.transformCache[transformName];
								}
							});

							/* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */
							if (opts.mobileHA) {
								transformHAPropertyExists = true;
								delete data.transformCache.translate3d;
							}

							/* Flush the subproperty removals to the DOM. */
							if (transformHAPropertyExists) {
								CSS.flushTransformCache(element);
							}

							/* Remove the "velocity-animating" indicator class. */
							CSS.Values.removeClass(element, "velocity-animating");
						}
					}

					/*********************
					 Option: Complete
					 *********************/

					/* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */
					/* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */
					if (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {
						/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
						try {
							opts.complete.call(elements, elements);
						} catch (error) {
							setTimeout(function() {
								throw error;
							}, 1);
						}
					}

					/**********************
					 Promise Resolving
					 **********************/

					/* Note: Infinite loops don't return promises. */
					if (resolver && opts.loop !== true) {
						resolver(elements);
					}

					/****************************
					 Option: Loop (Infinite)
					 ****************************/

					if (data && opts.loop === true && !isStopped) {
						/* If a rotateX/Y/Z property is being animated by 360 deg with loop:true, swap tween start/end values to enable
						 continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */
						$.each(data.tweensContainer, function(propertyName, tweenContainer) {
							if (/^rotate/.test(propertyName) && ((parseFloat(tweenContainer.startValue) - parseFloat(tweenContainer.endValue)) % 360 === 0)) {
								var oldStartValue = tweenContainer.startValue;

								tweenContainer.startValue = tweenContainer.endValue;
								tweenContainer.endValue = oldStartValue;
							}

							if (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {
								tweenContainer.endValue = 0;
								tweenContainer.startValue = 100;
							}
						});

						Velocity(element, "reverse", {loop: true, delay: opts.delay});
					}

					/***************
					 Dequeueing
					 ***************/

					/* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
					 which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
					 $.dequeue() must still be called in order to completely clear jQuery's animation queue. */
					if (opts.queue !== false) {
						$.dequeue(element, opts.queue);
					}
				}

				/************************
				 Calls Array Cleanup
				 ************************/

				/* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
				 (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */
				Velocity.State.calls[callIndex] = false;

				/* Iterate through the calls array to determine if this was the final in-progress animation.
				 If so, set a flag to end ticking and clear the calls array. */
				for (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {
					if (Velocity.State.calls[j] !== false) {
						remainingCallsExist = true;

						break;
					}
				}

				if (remainingCallsExist === false) {
					/* tick() will detect this flag upon its next iteration and subsequently turn itself off. */
					Velocity.State.isTicking = false;

					/* Clear the calls array so that its length is reset. */
					delete Velocity.State.calls;
					Velocity.State.calls = [];
				}
			}

			/******************
			 Frameworks
			 ******************/

			/* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
			 If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
			 also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
			 accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
			 (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */
			global.Velocity = Velocity;

			if (global !== window) {
				/* Assign the element function to Velocity's core animate() method. */
				global.fn.velocity = animate;
				/* Assign the object function's defaults to Velocity's global defaults object. */
				global.fn.velocity.defaults = Velocity.defaults;
			}

			/***********************
			 Packaged Redirects
			 ***********************/

			/* slideUp, slideDown */
			$.each(["Down", "Up"], function(i, direction) {
				Velocity.Redirects["slide" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
					var opts = $.extend({}, options),
							begin = opts.begin,
							complete = opts.complete,
							inlineValues = {},
							computedValues = {height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: ""};

					if (opts.display === undefined) {
						/* Show the element before slideDown begins and hide the element after slideUp completes. */
						/* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */
						opts.display = (direction === "Down" ? (Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block") : "none");
					}

					opts.begin = function() {
						/* If the user passed in a begin callback, fire it now. */
						if (elementsIndex === 0 && begin) {
							begin.call(elements, elements);
						}

						/* Cache the elements' original vertical dimensional property values so that we can animate back to them. */
						for (var property in computedValues) {
							if (!computedValues.hasOwnProperty(property)) {
								continue;
							}
							inlineValues[property] = element.style[property];

							/* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
							 use forcefeeding to start from computed values and animate down to 0. */
							var propertyValue = CSS.getPropertyValue(element, property);
							computedValues[property] = (direction === "Down") ? [propertyValue, 0] : [0, propertyValue];
						}

						/* Force vertical overflow content to clip so that sliding works as expected. */
						inlineValues.overflow = element.style.overflow;
						element.style.overflow = "hidden";
					};

					opts.complete = function() {
						/* Reset element to its pre-slide inline values once its slide animation is complete. */
						for (var property in inlineValues) {
							if (inlineValues.hasOwnProperty(property)) {
								element.style[property] = inlineValues[property];
							}
						}

						/* If the user passed in a complete callback, fire it now. */
						if (elementsIndex === elementsSize - 1) {
							if (complete) {
								complete.call(elements, elements);
							}
							if (promiseData) {
								promiseData.resolver(elements);
							}
						}
					};

					Velocity(element, computedValues, opts);
				};
			});

			/* fadeIn, fadeOut */
			$.each(["In", "Out"], function(i, direction) {
				Velocity.Redirects["fade" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
					var opts = $.extend({}, options),
							complete = opts.complete,
							propertiesMap = {opacity: (direction === "In") ? 1 : 0};

					/* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
					 callbacks by firing them only when the final element has been reached. */
					if (elementsIndex !== 0) {
						opts.begin = null;
					}
					if (elementsIndex !== elementsSize - 1) {
						opts.complete = null;
					} else {
						opts.complete = function() {
							if (complete) {
								complete.call(elements, elements);
							}
							if (promiseData) {
								promiseData.resolver(elements);
							}
						};
					}

					/* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */
					/* Note: We allow users to pass in "null" to skip display setting altogether. */
					if (opts.display === undefined) {
						opts.display = (direction === "In" ? "auto" : "none");
					}

					Velocity(this, propertiesMap, opts);
				};
			});

			return Velocity;
		}((window.jQuery || window.Zepto || window), window, (window ? window.document : undefined));
	}));

	/******************
	 Known Issues
	 ******************/

	/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.
	 Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties
	 will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */


/***/ },
/* 1158 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Copyright (c) 2015 Twitter, Inc. and other contributors

	Component to add Velocity animations to one or more children. Wraps a single child without adding
	additional DOM nodes.

	The API attempts to be as declarative as possible. A single animation property declares what
	animation the child should have. If that property changes, this component applies the new animation
	to the child on the next tick.

	By default, the animation is not run when the component is mounted. Instead, Velocity's "finish"
	command is used to jump to the animation's end state. For a component that animates out of and
	back in to a default state, this allows the parent to specify the "animate into" animation as
	the default, and therefore not have to distinguish between the initial state and the state to
	return to after animating away.

	Properties:
	 animation: Either an animation key or hash defining the animation. See Velocity's documentation
	   for what this can be. (It is passed to Velocity exactly.)
	 runOnMount: If true, runs the animation even when the component is first mounted.
	 targetQuerySelector: By default, this component's single child is animated. If targetQuerySelector
	   is provided, it is used to select descendants to apply the animation to. Use with caution, only
	   when you're confident that React's reconciliation will preserve these nodes during animation.
	   Also note querySelectorAll's silly behavior w.r.t. pruning results when being called on a node.
	   A special value of "children" will use the direct children of the node, since there isn't a
	   great way to specify that to querySelectorAll.

	Unrecognized properties are passed as options to Velocity (e.g. "duration", "delay", "loop").

	Methods:
	 runAnimation: Triggers the animation immediately. Useful for when you want an animation that
	   corresponds to an event but not a particular model state change (e.g. a "bump" when a click
	   occurs).
	*/

	var _ = {
	  forEach: __webpack_require__(263),
	  isEqual: __webpack_require__(470),
	  keys: __webpack_require__(78),
	  omit: __webpack_require__(471),
	};
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(23);
	var Velocity = __webpack_require__(262);

	var VelocityComponent = React.createClass({
	  displayName: 'VelocityComponent',

	  propTypes: {
	    animation: React.PropTypes.any,
	    children: React.PropTypes.element.isRequired,
	    runOnMount: React.PropTypes.bool,
	    targetQuerySelector: React.PropTypes.string,
	    // Any additional properties will be sent as options to Velocity
	  },

	  getDefaultProps: function () {
	    return {
	      animation: null,
	      runOnMount: false,
	      targetQuerySelector: null,
	    }
	  },

	  componentDidMount: function () {
	    this.runAnimation();

	    // Jump to the end so that the component has the visual appearance of the animation having
	    // been run to completion.
	    if (this.props.runOnMount !== true) {
	      this._finishAnimation();
	    }
	  },

	  componentWillUpdate: function (newProps, newState) {
	    if (!_.isEqual(newProps.animation, this.props.animation)) {
	      this._stopAnimation();
	      this._scheduleAnimation();
	    }
	  },

	  componentWillUnmount: function () {
	    this._stopAnimation();
	    this._clearVelocityCache(this._getDOMTarget());
	  },

	  // It's ok to call this externally! By default the animation will be queued up. Pass stop: true in
	  // to stop the current animation before running. Pass finish: true to finish the current animation
	  // before running.
	  runAnimation: function (config) {
	    config = config || {};

	    this._shouldRunAnimation = false;

	    if (!this.isMounted() || this.props.animation == null) {
	      return;
	    }

	    if (config.stop) {
	      Velocity(this._getDOMTarget(), 'stop', true);
	    } else if (config.finish) {
	      Velocity(this._getDOMTarget(), 'finishAll', true);
	    }

	    // Delegate all props except for the ones that we have specified as our own via propTypes.
	    var opts = _.omit(this.props, _.keys(this.constructor.propTypes));
	    Velocity(this._getDOMTarget(), this.props.animation, opts);
	  },

	  // We trigger animations on a new tick because of a Velocity bug where adding a
	  // multi-step animation from within a complete callback causes the first 2 animations to run
	  // simultaneously.
	  _scheduleAnimation: function () {
	    if (this._shouldRunAnimation) {
	      return;
	    }

	    this._shouldRunAnimation = true;
	    setTimeout(this.runAnimation, 0);
	  },

	  // Returns one or more DOM nodes to apply the animation to. This is checked every time we start
	  // or stop an animation, which means that if an animation is proceeding but the element is removed
	  // from the page, it will run its course rather than ever being stopped. (We go this route
	  // because of difficulty in tracking what animations are currently being animated, due to both
	  // chained animations and the need to be able to "stop" an animation before it begins.)
	  _getDOMTarget: function () {
	    var node = ReactDOM.findDOMNode(this);

	    if (this.props.targetQuerySelector === 'children') {
	      return node.children;
	    } else if (this.props.targetQuerySelector != null) {
	      return node.querySelectorAll(this.props.targetQuerySelector);
	    } else {
	      return node;
	    }
	  },

	  _finishAnimation: function () {
	    Velocity(this._getDOMTarget(), 'finishAll', true);
	  },

	  _stopAnimation: function () {
	    Velocity(this._getDOMTarget(), 'stop', true);
	  },

	  // Velocity keeps extensive caches for all animated elements to minimize layout thrashing.
	  // This can cause a serious memory leak, keeping references to unmounted elements as well
	  // completion handlers and associated react objects. This crudely clears these references.
	  _clearVelocityCache: function (target) {
	    if (target.length) {
	      forEach(target, this._clearVelocityCache)
	    } else {
	      Velocity.Utilities.removeData(target, ['velocity', 'fxqueue']);
	    }
	  },

	  // This component does not include any DOM footprint of its own, so instead we return our
	  // child out of render(). (Render must only return a single element, which restricts us to
	  // one child. If you want to animate multiple children, provide your own wrapper element and
	  // use the "targetQuerySelector" prop to target its children.)
	  render: function () {
	    return this.props.children;
	  }
	});

	module.exports = VelocityComponent;


/***/ },
/* 1159 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) 2015 Twitter, Inc. and other contributors

	var _ = {
	  isObject: __webpack_require__(42),
	};
	var Velocity = __webpack_require__(262);

	var effectCounter = 0;

	// Takes a Velocity "UI pack effect" definition and registers it with a unique key, returning that
	// key (to later pass as a value for the "animation" property). Takes an optional suffix, which can
	// be "In" or "Out" to modify UI Pack's behavior.
	//
	// Unlike what you get from passing a style hash to VelocityComponent's "animation" property,
	// Velocity "UI pack effects" can have chained animation calls and specify a "defaultDuration", and
	// also can take advantage of "stagger" and "reverse" options on the VelocityComponent.
	//
	// You will need to manually register the UI Pack with the global Velocity in your application with:
	//
	//   require('velocity');
	//   require('velocity-animate/velocity.ui');
	//
	// See: http://julian.com/research/velocity/#uiPack
	//
	// Typical usage:
	//
	// var Animations = {
	//   down: VelocityHelpers.registerEffect({
	//     defaultDuration: 1100,
	//     calls: [
	//       [{
	//         transformOriginX: [ '50%', '50%' ],
	//         transformOriginY: [ 0, 0 ],
	//         rotateX: [0, 'spring'],
	//       }, 1, {
	//         delay: 100,
	//         easing: 'ease-in',
	//       }]
	//     ],
	//   }),
	//
	//   up: VelocityHelpers.registerEffect({
	//     defaultDuration: 200,
	//     calls: [
	//       [{
	//         transformOriginX: [ '50%', '50%' ],
	//         transformOriginY: [ 0, 0 ],
	//         rotateX: 160,
	//       }]
	//     ],
	//   }),
	// };
	// ...
	// <VelocityComponent animation={this.state.isUp ? Animations.up : Animations.down}>
	//   ...
	// <Velocity>
	function registerEffect(suffix, animation) {
	  if (_.isObject(suffix)) {
	    animation = suffix;
	    suffix = '';    
	  }

	  var key = 'VelocityHelper.animation.' + (effectCounter++) + suffix;

	  // No-op on the server for now.
	  if (Velocity.velocityReactServerShim) {
	    return key
	  }

	  if (Velocity.RegisterEffect === undefined) {
	    throw "Velocity.RegisterEffect not found. You need to require 'velocity-animate/velocity.ui' at a top level for UI Pack.";
	  }

	  Velocity.RegisterEffect(key, animation);
	  return key;
	}

	module.exports = {
	  registerEffect: registerEffect,
	};


/***/ },
/* 1160 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Copyright (c) 2015 Twitter, Inc. and other contributors

	Component to add Velocity animations around React transitions. Delegates to the React TransitionGroup
	addon.

	Properties
	  enter: Animation to run on a child component being added
	  leave: Animation to run on a child component leaving
	  runOnMount: if true, runs the "enter" animation on the elements that exist as children when this
	    component is mounted.
	  enterHideStyle/enterShowStyle: see below.

	Any additional properties (e.g. "className", "component") will be passed to the internal
	TransitionGroup.

	"enter" and "leave" should either be a string naming an animation, or a hash with an
	"animation" key that can either be a string itself, or a hash of style attributes to animate (this
	value is passed to Velocity its the first arg).

	If "enter" or "leave" is a hash, it can additionally have a "style" value that is applied the tick
	before the Velocity animation starts. Use this for non-animating properties (like "position") that
	are prerequisites for correct animation. The style value is applied using Velocity's JS -> CSS
	routines, which may differ from React's.

	Any hash entries beyond "animation" and "style" are passed in an options hash to Velocity. Use this
	for options like "stagger", "reverse", &tc.

	By default, this component will immediately hide all entering children with display: 'none', and
	unhide them one tick later with display: ''. This is done so that we can coalesce multiple enters
	into a single animation, and we want to avoid any popping of elements in while they're collected. If
	you prefer a different way of hiding these elements so that e.g. geometry can be immediately
	calculated, use the enterHideStyle and enterShowStyle props to provide alternate style hashes for
	hiding and revealing entering elements.

	Statics
	  disabledForTest: Set this to true globally to turn off all custom animation logic. Instead, this
	    component will behave like a vanilla TransitionGroup.

	Inspired by https://gist.github.com/tkafka/0d94c6ec94297bb67091
	*/

	var _ = {
	  each: __webpack_require__(1110),
	  extend: __webpack_require__(1154),
	  forEach: __webpack_require__(263),
	  isEqual: __webpack_require__(470),
	  keys: __webpack_require__(78),
	  omit: __webpack_require__(471),
	  pluck: __webpack_require__(1112),
	};
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(23);
	var ReactTransitionGroup = __webpack_require__(1156);
	var Velocity = __webpack_require__(262);

	// Shim requestAnimationFrame for browsers that don't support it, in particular IE 9.
	var shimRequestAnimationFrame =
	  (typeof window !== 'undefined') && (
	    window.requestAnimationFrame ||
	    window.webkitRequestAnimationFrame ||
	    window.mozRequestAnimationFrame ||
	    function(callback) { window.setTimeout(callback, 0) }
	  );

	// Fix 'Invalid calling object' error in IE
	shimRequestAnimationFrame = (typeof window !== 'undefined') &&  shimRequestAnimationFrame.bind(window);

	// Internal wrapper for the transitioned elements. Delegates all child lifecycle events to the
	// parent VelocityTransitionGroup so that it can co-ordinate animating all of the elements at once.
	var VelocityTransitionGroupChild = React.createClass({
	  displayName: 'VelocityTransitionGroupChild',

	  propTypes: {
	    children: React.PropTypes.element.isRequired,
	    willAppearFunc: React.PropTypes.func.isRequired,
	    willEnterFunc: React.PropTypes.func.isRequired,
	    willLeaveFunc: React.PropTypes.func.isRequired,
	  },

	  componentWillAppear: function (doneFn) {
	    this.props.willAppearFunc(ReactDOM.findDOMNode(this), doneFn);
	  },

	  componentWillEnter: function (doneFn) {
	    this.props.willEnterFunc(ReactDOM.findDOMNode(this), doneFn);
	  },

	  componentWillLeave: function (doneFn) {
	    this.props.willLeaveFunc(ReactDOM.findDOMNode(this), doneFn);
	  },

	  componentWillUnmount: function () {
	    // Clear references from velocity cache.
	    Velocity.Utilities.removeData(ReactDOM.findDOMNode(this), ['velocity', 'fxqueue']);
	  },

	  render: function () {
	    return React.Children.only(this.props.children);
	  },
	});

	var VelocityTransitionGroup = React.createClass({
	  displayName: 'VelocityTransitionGroup',

	  statics: {
	    disabledForTest: false, // global, mutable, for disabling animations during test
	  },

	  propTypes: {
	    runOnMount: React.PropTypes.bool,
	    enter: React.PropTypes.any,
	    leave: React.PropTypes.any,
	    children: React.PropTypes.any,
	    enterHideStyle: React.PropTypes.object,
	    enterShowStyle: React.PropTypes.object,
	  },

	  getDefaultProps: function() {
	    return {
	      runOnMount: false,
	      enter: null,
	      leave: null,
	      enterHideStyle: {
	        display: 'none',
	      },
	      enterShowStyle: {
	        display: '',
	      },
	    };
	  },

	  componentWillMount: function () {
	    this._scheduled = false;
	    this._entering = [];
	    this._leaving = [];
	  },

	  componentWillUnmount: function () {
	    this._entering = [];
	    this._leaving = [];
	  },

	  render: function () {
	    // Pass any props that are not our own on into the TransitionGroup delegate.
	    var transitionGroupProps = _.omit(this.props, _.keys(this.constructor.propTypes));

	    // Without our custom childFactory, we just get a default TransitionGroup that doesn't do
	    // anything special at all.
	    if (!this.constructor.disabledForTest && !Velocity.velocityReactServerShim) {
	      transitionGroupProps.childFactory = this._wrapChild;
	    }

	    return React.createElement(ReactTransitionGroup, transitionGroupProps, this.props.children);
	  },

	  childWillAppear: function (node, doneFn) {
	    if (this.props.runOnMount) {
	      this.childWillEnter(node, doneFn);
	    } else {
	      this._finishAnimation(node, this.props.enter);

	      // Important to tick over so that any callbacks due to finishing the animation complete first.
	      // isMounted check necessary to avoid exception in tests, which can mount and unmount a
	      // component before this runs over, as the "doneFn" callback does a ref lookup rather than
	      // closing over the component.
	      //
	      // Using setTimeout so that doneFn gets called even when the tab is hidden.
	      var self = this;
	      window.setTimeout(function () {
	        if (self.isMounted()) {
	          doneFn();
	        }
	      }, 0);
	    }
	  },

	  childWillEnter: function (node, doneFn) {
	    if (this._shortCircuitAnimation(this.props.enter, doneFn)) return;

	    // By finishing a "leave" on the element, we put it in the right state to be animated in. Useful
	    // if "leave" includes a rotation or something that we'd like to have as our starting point, for
	    // symmetry.
	    // We use overrideOpts to prevent any "begin" or "complete" callback from triggering in this case, since
	    // it doesn't make a ton of sense.
	    this._finishAnimation(node, this.props.leave, {begin: undefined, complete: undefined});

	    // We're not going to start the animation for a tick, so set the node's display to none (or any
	    // custom "hide" style provided) so that it doesn't flash in.
	    _.forEach(this.props.enterHideStyle, function (val, key) {
	      Velocity.CSS.setPropertyValue(node, key, val);
	    });

	    this._entering.push({
	      node: node,
	      doneFn: doneFn,
	    });

	    this._schedule();
	  },

	  childWillLeave: function (node, doneFn) {
	    if (this._shortCircuitAnimation(this.props.leave, doneFn)) return;

	    this._leaving.push({
	      node: node,
	      doneFn: doneFn,
	    });

	    this._schedule();
	  },

	  // document.hidden check is there because animation completion callbacks won't fire (due to
	  // chaining off of rAF), which would prevent entering / leaving DOM nodes from being cleaned up
	  // while the tab is hidden.
	  //
	  // Returns true if this did short circuit, false if lifecycle methods should continue with
	  // their animations.
	  _shortCircuitAnimation: function (animationProp, doneFn) {
	    if (document.hidden || (this._parseAnimationProp(animationProp).animation == null)) {
	      if (this.isMounted()) {
	        doneFn();
	      }

	      return true;
	    } else {
	      return false;
	    }
	  },

	  _schedule: function () {
	    if (this._scheduled) {
	      return;
	    }

	    this._scheduled = true;

	    // Need rAF to make sure we're in the same event queue as Velocity from here out. Important
	    // for avoiding getting wrong interleaving with Velocity callbacks.
	    shimRequestAnimationFrame(this._runAnimations);
	  },

	  _runAnimations: function () {
	    this._scheduled = false;

	    this._runAnimation(true, this._entering, this.props.enter);
	    this._runAnimation(false, this._leaving, this.props.leave);

	    this._entering = [];
	    this._leaving = [];
	  },

	  // Used to parse out the 'enter' and 'leave' properties. Handles cases where they are omitted
	  // as well as when they are just strings and not hashes of animation and options.
	  _parseAnimationProp: function (animationProp) {
	    var animation, opts, style;

	    if (typeof animationProp === 'string') {
	      animation = animationProp;
	      style = null;
	      opts = {};
	    } else {
	      animation = (animationProp != null) ? animationProp.animation : null;
	      style = (animationProp != null) ? animationProp.style : null;
	      opts = _.omit(animationProp, 'animation', 'style');
	    }

	    return {
	      animation: animation,
	      style: style,
	      opts: opts,
	    };
	  },

	  _runAnimation: function (entering, queue, animationProp) {
	    if (!this.isMounted() || queue.length === 0) {
	      return;
	    }

	    var nodes = _.pluck(queue, 'node');
	    var doneFns = _.pluck(queue, 'doneFn');

	    var parsedAnimation = this._parseAnimationProp(animationProp);
	    var animation = parsedAnimation.animation;
	    var style = parsedAnimation.style;
	    var opts = parsedAnimation.opts;

	    // Clearing display reverses the behavior from childWillAppear where all elements are added with
	    // display: none to prevent them from flashing in before the animation starts. We don't do this
	    // for the fade/slide animations or any animation that ends in "In," since Velocity will handle
	    // it for us.
	    //
	    // If a custom "enterShowStyle" prop is passed, (i.e. not one that just reverses display: none)
	    // we always run it, regardless of the animation, since it's probably doing something around
	    // opacity or positioning that Velocity will not necessarily reset.
	    if (entering) {
	      if (!_.isEqual(this.props.enterShowStyle, {display: ''})
	        || !(/^(fade|slide)/.test(animation) || /In$/.test(animation))) {
	        style = _.extend({}, this.props.enterShowStyle, style);
	      }
	    }

	    // Because Safari can synchronously repaint when CSS "display" is reset, we set styles for all
	    // browsers before the rAF tick below that starts the animation. This way you know in all
	    // cases that you need to support your static styles being visible on the element before
	    // the animation begins.
	    if (style != null) {
	      _.each(style, function (value, key) {
	        Velocity.hook(nodes, key, value);
	      });
	    }

	    var self = this;
	    var doneFn = function () {
	      if (!self.isMounted()) {
	        return;
	      }

	      doneFns.map(function (doneFn) { doneFn(); });
	    };

	    // For nodes that are entering, we tell the TransitionGroup that we're done with them
	    // immediately. That way, they can be removed later before their entering animations complete.
	    // If we're leaving, we stop current animations (which may be partially-completed enter
	    // animations) so that we can then animate out. Velocity typically makes these transitions
	    // very smooth, correctly animating from whatever state the element is currently in.
	    if (entering) {
	      doneFn();
	      doneFn = null;
	    } else {
	      Velocity(nodes, 'stop');
	    }

	    var combinedCompleteFn;
	    if (doneFn && opts.complete) {
	      var optsCompleteFn = opts.complete;
	      combinedCompleteFn = function () {
	        doneFn();
	        // preserve this / args from Velocity so the complete function has context for what completed
	        optsCompleteFn.apply(this, arguments);
	      };
	    } else {
	      // One or the other or neither.
	      combinedCompleteFn = doneFn || opts.complete;
	    }

	    // Bit of a hack. Without this rAF, sometimes an enter animation doesn't start running, or is
	    // stopped before getting anywhere. This should get us on the other side of both completeFn and
	    // any _finishAnimation that's happening.
	    shimRequestAnimationFrame(function () {
	      Velocity(nodes, animation, _.extend({}, opts, {
	        complete: combinedCompleteFn,
	      }));
	    });
	  },

	  _finishAnimation: function (node, animationProp, overrideOpts) {
	    var parsedAnimation = this._parseAnimationProp(animationProp);
	    var animation = parsedAnimation.animation;
	    var style = parsedAnimation.style;
	    var opts = _.extend({}, parsedAnimation.opts, overrideOpts);

	    if (style != null) {
	      _.each(style, function (value, key) {
	        Velocity.hook(node, key, value);
	      });
	    }

	    if (animation != null) {
	      // Opts are relevant even though we're immediately finishing, since things like "display"
	      // can affect the animation outcome.

	      Velocity(node, animation, opts);
	      Velocity(node, 'finishAll', true);
	    }
	  },

	  _wrapChild: function (child) {
	    return React.createElement(VelocityTransitionGroupChild, {
	      willAppearFunc: this.childWillAppear,
	      willEnterFunc: this.childWillEnter,
	      willLeaveFunc: this.childWillLeave,
	    }, child);
	  },
	});

	module.exports = VelocityTransitionGroup;


/***/ },
/* 1161 */,
/* 1162 */
/***/ function(module, exports) {

	(function(self) {
	  'use strict';

	  if (self.fetch) {
	    return
	  }

	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }

	  if (support.arrayBuffer) {
	    var viewClasses = [
	      '[object Int8Array]',
	      '[object Uint8Array]',
	      '[object Uint8ClampedArray]',
	      '[object Int16Array]',
	      '[object Uint16Array]',
	      '[object Int32Array]',
	      '[object Uint32Array]',
	      '[object Float32Array]',
	      '[object Float64Array]'
	    ]

	    var isDataView = function(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj)
	    }

	    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
	    }
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }

	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }

	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }

	    return iterator
	  }

	  function Headers(headers) {
	    this.map = {}

	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)

	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }

	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var oldValue = this.map[name]
	    this.map[name] = oldValue ? oldValue+','+value : value
	  }

	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }

	  Headers.prototype.get = function(name) {
	    name = normalizeName(name)
	    return this.has(name) ? this.map[name] : null
	  }

	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }

	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = normalizeValue(value)
	  }

	  Headers.prototype.forEach = function(callback, thisArg) {
	    for (var name in this.map) {
	      if (this.map.hasOwnProperty(name)) {
	        callback.call(thisArg, this.map[name], name, this)
	      }
	    }
	  }

	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }

	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsArrayBuffer(blob)
	    return promise
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsText(blob)
	    return promise
	  }

	  function readArrayBufferAsText(buf) {
	    var view = new Uint8Array(buf)
	    var chars = new Array(view.length)

	    for (var i = 0; i < view.length; i++) {
	      chars[i] = String.fromCharCode(view[i])
	    }
	    return chars.join('')
	  }

	  function bufferClone(buf) {
	    if (buf.slice) {
	      return buf.slice(0)
	    } else {
	      var view = new Uint8Array(buf.byteLength)
	      view.set(new Uint8Array(buf))
	      return view.buffer
	    }
	  }

	  function Body() {
	    this.bodyUsed = false

	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (!body) {
	        this._bodyText = ''
	      } else if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	        this._bodyArrayBuffer = bufferClone(body.buffer)
	        // IE 10-11 can't handle a DataView body.
	        this._bodyInit = new Blob([this._bodyArrayBuffer])
	      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	        this._bodyArrayBuffer = bufferClone(body)
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }

	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }

	      this.arrayBuffer = function() {
	        if (this._bodyArrayBuffer) {
	          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
	        } else {
	          return this.blob().then(readBlobAsArrayBuffer)
	        }
	      }
	    }

	    this.text = function() {
	      var rejected = consumed(this)
	      if (rejected) {
	        return rejected
	      }

	      if (this._bodyBlob) {
	        return readBlobAsText(this._bodyBlob)
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as text')
	      } else {
	        return Promise.resolve(this._bodyText)
	      }
	    }

	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }

	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }

	    return this
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }

	  function Request(input, options) {
	    options = options || {}
	    var body = options.body

	    if (typeof input === 'string') {
	      this.url = input
	    } else {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    }

	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }

	  Request.prototype.clone = function() {
	    return new Request(this, { body: this._bodyInit })
	  }

	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }

	  function parseHeaders(rawHeaders) {
	    var headers = new Headers()
	    rawHeaders.split('\r\n').forEach(function(line) {
	      var parts = line.split(':')
	      var key = parts.shift().trim()
	      if (key) {
	        var value = parts.join(':').trim()
	        headers.append(key, value)
	      }
	    })
	    return headers
	  }

	  Body.call(Request.prototype)

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }

	    this.type = 'default'
	    this.status = 'status' in options ? options.status : 200
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = 'statusText' in options ? options.statusText : 'OK'
	    this.headers = new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }

	  Body.call(Response.prototype)

	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }

	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }

	  var redirectStatuses = [301, 302, 303, 307, 308]

	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }

	    return new Response(null, {status: status, headers: {location: url}})
	  }

	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response

	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request = new Request(input, init)
	      var xhr = new XMLHttpRequest()

	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	        }
	        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }

	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.open(request.method, request.url, true)

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }

	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ }
]);