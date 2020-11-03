webpackHotUpdate_N_E("pages/about",{

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/gi */ "./node_modules/react-icons/gi/index.esm.js");
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/im */ "./node_modules/react-icons/im/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons */ "./node_modules/react-icons/lib/esm/index.js");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-share */ "./node_modules/react-share/es/index.js");
var _jsxFileName = "D:\\Next\\nextjs-blog\\components\\Sidebar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable jsx-a11y/anchor-is-valid */



 //Icons









const Sidebar = () => {
  _s();

  const {
    0: showStat,
    1: setShowStat
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const sidebarRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('resize', () => {
      console.log(window.screen.width, typeof window.screen.width);

      if (window.screen.width >= 768 && sidebarRef.current.style.display === 'none') {
        sidebarRef.current.style.display = 'flex';
        setShowStat(true);
      }
    });
  });

  const toggleShow = () => {
    setShowStat(!showStat);
    let sidebar = sidebarRef.current;

    if (sidebar.style.display === 'none' || sidebar.style.display.length <= 0) {
      sidebar.style.display = 'flex';
    } else {
      sidebar.style.display = 'none';
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("button", {
    onClick: toggleShow,
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.toggleButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, !showStat ? __jsx(react_icons__WEBPACK_IMPORTED_MODULE_7__["IconContext"].Provider, {
    value: {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarToggleIcon,
      color: '#4d4749',
      size: 36
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_8__["BiMenu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  })) : __jsx(react_icons__WEBPACK_IMPORTED_MODULE_7__["IconContext"].Provider, {
    value: {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarToggleIconClose,
      color: '#4d4749',
      size: 36
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdClose"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }))), __jsx("div", {
    ref: sidebarRef,
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/logo.png",
    height: 75,
    width: 75,
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLogo,
    alt: "Logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    exact: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: router.pathname === '/' ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkActive : _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_7__["IconContext"].Provider, {
    value: {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkIcon
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, __jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_5__["ImHome3"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  })), "\xA0\xA0", __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 25
    }
  }, "Home"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/overview",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: router.pathname === '/overview' ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkActive : _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_7__["IconContext"].Provider, {
    value: {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkIcon
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_5__["ImStatsBars"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  })), "\xA0\xA0", __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 25
    }
  }, "Overview"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/vote",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: router.pathname === '/vote' ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkActive : _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_7__["IconContext"].Provider, {
    value: {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkIcon
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, __jsx(react_icons_gi__WEBPACK_IMPORTED_MODULE_4__["GiVote"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  })), "\xA0\xA0", __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  }, "Vote"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/charts",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: router.pathname === '/charts' ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkActive : _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_7__["IconContext"].Provider, {
    value: {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkIcon
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaChartPie"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  })), "\xA0\xA0", __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 25
    }
  }, "Charts"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/battleground",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: router.pathname === '/battleground' ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkActive : _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_7__["IconContext"].Provider, {
    value: {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkIcon
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }, __jsx(react_icons_gi__WEBPACK_IMPORTED_MODULE_4__["GiCrossedSwords"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  })), "\xA0\xA0", __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 25
    }
  }, "BattleGround"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: router.pathname === '/about' ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkActive : _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_7__["IconContext"].Provider, {
    value: {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkIcon
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdContacts"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 15
    }
  })), "\xA0\xA0", __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 25
    }
  }, "About Us"))), __jsx(react_share__WEBPACK_IMPORTED_MODULE_10__["EmailShareButton"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  }), __jsx(react_share__WEBPACK_IMPORTED_MODULE_10__["FacebookShareButton"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }
  }), __jsx(react_share__WEBPACK_IMPORTED_MODULE_10__["TwitterShareButton"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.policies,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, "AppyVote is not affiliated with any political party, candidate or interest group.")));
};

_s(Sidebar, "pzuapiocVzFy0PyeBuBHnnPGIPU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Sidebar;
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

var _c;

$RefreshReg$(_c, "Sidebar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/debug/src/debug.js":
/*!*****************************************!*\
  !*** ./node_modules/debug/src/debug.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "./node_modules/jsonp/index.js":
/*!*************************************!*\
  !*** ./node_modules/jsonp/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies
 */

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('jsonp');

/**
 * Module exports.
 */

module.exports = jsonp;

/**
 * Callback index.
 */

var count = 0;

/**
 * Noop function.
 */

function noop(){}

/**
 * JSONP handler
 *
 * Options:
 *  - param {String} qs parameter (`callback`)
 *  - prefix {String} qs parameter (`__jp`)
 *  - name {String} qs parameter (`prefix` + incr)
 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
 *
 * @param {String} url
 * @param {Object|Function} optional options / callback
 * @param {Function} optional callback
 */

function jsonp(url, opts, fn){
  if ('function' == typeof opts) {
    fn = opts;
    opts = {};
  }
  if (!opts) opts = {};

  var prefix = opts.prefix || '__jp';

  // use the callback name that was passed if one was provided.
  // otherwise generate a unique name by incrementing our counter.
  var id = opts.name || (prefix + (count++));

  var param = opts.param || 'callback';
  var timeout = null != opts.timeout ? opts.timeout : 60000;
  var enc = encodeURIComponent;
  var target = document.getElementsByTagName('script')[0] || document.head;
  var script;
  var timer;


  if (timeout) {
    timer = setTimeout(function(){
      cleanup();
      if (fn) fn(new Error('Timeout'));
    }, timeout);
  }

  function cleanup(){
    if (script.parentNode) script.parentNode.removeChild(script);
    window[id] = noop;
    if (timer) clearTimeout(timer);
  }

  function cancel(){
    if (window[id]) {
      cleanup();
    }
  }

  window[id] = function(data){
    debug('jsonp got', data);
    cleanup();
    if (fn) fn(null, data);
  };

  // add qs component
  url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
  url = url.replace('?&', '?');

  debug('jsonp req "%s"', url);

  // create script
  script = document.createElement('script');
  script.src = url;
  target.parentNode.insertBefore(script, target);

  return cancel;
}


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "./node_modules/react-share/es/EmailIcon.js":
/*!**************************************************!*\
  !*** ./node_modules/react-share/es/EmailIcon.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hocs/createIcon */ "./node_modules/react-share/es/hocs/createIcon.js");

var EmailIcon = Object(_hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: '#7f7f7f',
    networkName: 'email',
    path: 'M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z',
});
/* harmony default export */ __webpack_exports__["default"] = (EmailIcon);


/***/ }),

/***/ "./node_modules/react-share/es/EmailShareButton.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-share/es/EmailShareButton.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _hocs_createShareButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hocs/createShareButton */ "./node_modules/react-share/es/hocs/createShareButton.js");


function emailLink(url, _a) {
    var subject = _a.subject, body = _a.body, separator = _a.separator;
    return 'mailto:' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_0__["default"])({ subject: subject, body: body ? body + separator + url : url });
}
var EmailShareButton = Object(_hocs_createShareButton__WEBPACK_IMPORTED_MODULE_1__["default"])('email', emailLink, function (props) { return ({
    subject: props.subject,
    body: props.body,
    separator: props.separator || ' ',
}); }, {
    openShareDialogOnClick: false,
    onClick: function (_, link) {
        window.location.href = link;
    },
});
/* harmony default export */ __webpack_exports__["default"] = (EmailShareButton);


/***/ }),

/***/ "./node_modules/react-share/es/FacebookIcon.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-share/es/FacebookIcon.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hocs/createIcon */ "./node_modules/react-share/es/hocs/createIcon.js");

var FacebookIcon = Object(_hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: '#3b5998',
    networkName: 'facebook',
    path: 'M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z',
});
/* harmony default export */ __webpack_exports__["default"] = (FacebookIcon);


/***/ }),

/***/ "./node_modules/react-share/es/FacebookMessengerIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-share/es/FacebookMessengerIcon.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hocs/createIcon */ "./node_modules/react-share/es/hocs/createIcon.js");

var FacebookMessengerIcon = Object(_hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: '#2196F3',
    networkName: 'facebookmessenger',
    path: 'M 53.066406 21.871094 C 52.667969 21.339844 51.941406 21.179688 51.359375 21.496094 L 37.492188 29.058594 L 28.867188 21.660156 C 28.339844 21.207031 27.550781 21.238281 27.054688 21.730469 L 11.058594 37.726562 C 10.539062 38.25 10.542969 39.09375 11.0625 39.613281 C 11.480469 40.027344 12.121094 40.121094 12.640625 39.839844 L 26.503906 32.28125 L 35.136719 39.679688 C 35.667969 40.132812 36.457031 40.101562 36.949219 39.609375 L 52.949219 23.613281 C 53.414062 23.140625 53.464844 22.398438 53.066406 21.871094 Z M 53.066406 21.871094',
});
/* harmony default export */ __webpack_exports__["default"] = (FacebookMessengerIcon);


/***/ }),

/***/ "./node_modules/react-share/es/FacebookMessengerShareButton.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-share/es/FacebookMessengerShareButton.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _hocs_createShareButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hocs/createShareButton */ "./node_modules/react-share/es/hocs/createShareButton.js");


function facebookMessengerLink(url, _a) {
    var appId = _a.appId, redirectUri = _a.redirectUri, to = _a.to;
    return ('https://www.facebook.com/dialog/send' +
        Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_0__["default"])({
            link: url,
            redirect_uri: redirectUri || url,
            app_id: appId,
            to: to,
        }));
}
var FacebookMessengerShareButton = Object(_hocs_createShareButton__WEBPACK_IMPORTED_MODULE_1__["default"])('facebookmessenger', facebookMessengerLink, function (props) { return ({
    appId: props.appId,
    redirectUri: props.redirectUri,
    to: props.to,
}); }, {
    windowWidth: 1000,
    windowHeight: 820,
});
/* harmony default export */ __webpack_exports__["default"] = (FacebookMessengerShareButton);


/***/ }),

/***/ "./node_modules/react-share/es/FacebookShareButton.js":
/*!************************************************************!*\
  !*** ./node_modules/react-share/es/FacebookShareButton.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/assert */ "./node_modules/react-share/es/utils/assert.js");
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hocs/createShareButton */ "./node_modules/react-share/es/hocs/createShareButton.js");



function facebookLink(url, _a) {
    var quote = _a.quote, hashtag = _a.hashtag;
    Object(_utils_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(url, 'facebook.url');
    return ('https://www.facebook.com/sharer/sharer.php' +
        Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
            u: url,
            quote: quote,
            hashtag: hashtag,
        }));
}
var FacebookShareButton = Object(_hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__["default"])('facebook', facebookLink, function (props) { return ({
    quote: props.quote,
    hashtag: props.hashtag,
}); }, {
    windowWidth: 550,
    windowHeight: 400,
});
/* harmony default export */ __webpack_exports__["default"] = (FacebookShareButton);


/***/ }),

/***/ "./node_modules/react-share/es/FacebookShareCount.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-share/es/FacebookShareCount.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hocs_createShareCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hocs/createShareCount */ "./node_modules/react-share/es/hocs/createShareCount.js");


function getFacebookShareCount(shareUrl, callback) {
    var endpoint = "https://graph.facebook.com/?id=" + shareUrl + "&fields=og_object{engagement}";
    jsonp__WEBPACK_IMPORTED_MODULE_0___default()(endpoint, function (err, data) {
        callback(!err && data && data.og_object && data.og_object.engagement
            ? data.og_object.engagement.count
            : undefined);
    });
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_hocs_createShareCount__WEBPACK_IMPORTED_MODULE_1__["default"])(getFacebookShareCount));


/***/ }),

/***/ "./node_modules/react-share/es/HatenaIcon.js":
/*!***************************************************!*\
  !*** ./node_modules/react-share/es/HatenaIcon.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hocs/createIcon */ "./node_modules/react-share/es/hocs/createIcon.js");

var HatenaIcon = Object(_hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: '#009ad9',
    networkName: 'hatena',
    path: 'M 36.164062 33.554688 C 34.988281 32.234375 33.347656 31.5 31.253906 31.34375 C 33.125 30.835938 34.476562 30.09375 35.335938 29.09375 C 36.191406 28.09375 36.609375 26.78125 36.609375 25.101562 C 36.628906 23.875 36.332031 22.660156 35.75 21.578125 C 35.160156 20.558594 34.292969 19.71875 33.253906 19.160156 C 32.304688 18.640625 31.175781 18.265625 29.847656 18.042969 C 28.523438 17.824219 26.195312 17.730469 22.867188 17.730469 L 14.769531 17.730469 L 14.769531 47.269531 L 23.113281 47.269531 C 26.46875 47.269531 28.886719 47.15625 30.367188 46.929688 C 31.851562 46.695312 33.085938 46.304688 34.085938 45.773438 C 35.289062 45.148438 36.28125 44.179688 36.933594 42.992188 C 37.597656 41.796875 37.933594 40.402344 37.933594 38.816406 C 37.933594 36.621094 37.347656 34.867188 36.164062 33.554688 Z M 22.257812 24.269531 L 23.984375 24.269531 C 25.988281 24.269531 27.332031 24.496094 28.015625 24.945312 C 28.703125 25.402344 29.042969 26.183594 29.042969 27.285156 C 29.042969 28.390625 28.664062 29.105469 27.9375 29.550781 C 27.210938 29.992188 25.84375 30.199219 23.855469 30.199219 L 22.257812 30.199219 Z M 29.121094 41.210938 C 28.328125 41.691406 26.976562 41.925781 25.078125 41.925781 L 22.257812 41.925781 L 22.257812 35.488281 L 25.195312 35.488281 C 27.144531 35.488281 28.496094 35.738281 29.210938 36.230469 C 29.925781 36.726562 30.304688 37.582031 30.304688 38.832031 C 30.304688 40.078125 29.914062 40.742188 29.105469 41.222656 Z M 29.121094 41.210938 M 46.488281 39.792969 C 44.421875 39.792969 42.742188 41.46875 42.742188 43.535156 C 42.742188 45.605469 44.421875 47.28125 46.488281 47.28125 C 48.554688 47.28125 50.230469 45.605469 50.230469 43.535156 C 50.230469 41.46875 48.554688 39.792969 46.488281 39.792969 Z M 46.488281 39.792969 M 43.238281 17.730469 L 49.738281 17.730469 L 49.738281 37.429688 L 43.238281 37.429688 Z M 43.238281 17.730469 ',
});
/* harmony default export */ __webpack_exports__["default"] = (HatenaIcon);


/***/ }),

/***/ "./node_modules/react-share/es/HatenaShareButton.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-share/es/HatenaShareButton.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/assert */ "./node_modules/react-share/es/utils/assert.js");
/* harmony import */ var _hocs_createShareButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hocs/createShareButton */ "./node_modules/react-share/es/hocs/createShareButton.js");


function hatenaLink(url, _a) {
    var title = _a.title;
    Object(_utils_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(url, 'hatena.url');
    return "http://b.hatena.ne.jp/add?mode=confirm&url=" + url + "&title=" + title;
}
var HatenaShareButton = Object(_hocs_createShareButton__WEBPACK_IMPORTED_MODULE_1__["default"])('hatena', hatenaLink, function (props) { return ({
    title: props.title,
}); }, {
    windowWidth: 660,
    windowHeight: 460,
    windowPosition: 'windowCenter',
});
/* harmony default export */ __webpack_exports__["default"] = (HatenaShareButton);


/***/ }),

/***/ "./node_modules/react-share/es/HatenaShareCount.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-share/es/HatenaShareCount.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _hocs_createShareCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hocs/createShareCount */ "./node_modules/react-share/es/hocs/createShareCount.js");



function getHatenaShareCount(shareUrl, callback) {
    var url = 'https://bookmark.hatenaapis.com/count/entry';
    jsonp__WEBPACK_IMPORTED_MODULE_0___default()(url +
        Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
            url: shareUrl,
        }), function (err, data) {
        callback(data ? data : undefined);
    });
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_hocs_createShareCount__WEBPACK_IMPORTED_MODULE_2__["default"])(getHatenaShareCount));


/***/ }),

/***/ "./node_modules/react-share/es/InstapaperIcon.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-share/es/InstapaperIcon.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hocs/createIcon */ "./node_modules/react-share/es/hocs/createIcon.js");

var InstapaperIcon = Object(_hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: '#1F1F1F',
    networkName: 'instapaper',
    path: 'M35.688 43.012c0 2.425.361 2.785 3.912 3.056V48H24.401v-1.932c3.555-.27 3.912-.63 3.912-3.056V20.944c0-2.379-.36-2.785-3.912-3.056V16H39.6v1.888c-3.55.27-3.912.675-3.912 3.056v22.068h.001z',
});
/* harmony default export */ __webpack_exports__["default"] = (InstapaperIcon);


/***/ }),

/***/ "./node_modules/react-share/es/InstapaperShareButton.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-share/es/InstapaperShareButton.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/assert */ "./node_modules/react-share/es/utils/assert.js");
/* harmony import */ var _hocs_createShareButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hocs/createShareButton */ "./node_modules/react-share/es/hocs/createShareButton.js");
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");



function instapaperLink(url, _a) {
    var title = _a.title, description = _a.description;
    Object(_utils_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(url, 'instapaper.url');
    return ('http://www.instapaper.com/hello2' +
        Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
            url: url,
            title: title,
            description: description,
        }));
}
var InstapaperShareButton = Object(_hocs_createShareButton__WEBPACK_IMPORTED_MODULE_1__["default"])('instapaper', instapaperLink, function (props) { return ({
    title: props.title,
    description: props.description,
}); }, {
    windowWidth: 500,
    windowHeight: 500,
    windowPosition: 'windowCenter',
});
/* harmony default export */ __webpack_exports__["default"] = (InstapaperShareButton);


/***/ }),

/***/ "./node_modules/react-share/es/LineIcon.js":
/*!*************************************************!*\
  !*** ./node_modules/react-share/es/LineIcon.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hocs/createIcon */ "./node_modules/react-share/es/hocs/createIcon.js");

var LineIcon = Object(_hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: '#00b800',
    networkName: 'line',
    path: 'M52.62 30.138c0 3.693-1.432 7.019-4.42 10.296h.001c-4.326 4.979-14 11.044-16.201 11.972-2.2.927-1.876-.591-1.786-1.112l.294-1.765c.069-.527.142-1.343-.066-1.865-.232-.574-1.146-.872-1.817-1.016-9.909-1.31-17.245-8.238-17.245-16.51 0-9.226 9.251-16.733 20.62-16.733 11.37 0 20.62 7.507 20.62 16.733zM27.81 25.68h-1.446a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-8.985a.402.402 0 0 0-.402-.401zm9.956 0H36.32a.402.402 0 0 0-.402.401v5.338L31.8 25.858a.39.39 0 0 0-.031-.04l-.002-.003-.024-.025-.008-.007a.313.313 0 0 0-.032-.026.255.255 0 0 1-.021-.014l-.012-.007-.021-.012-.013-.006-.023-.01-.013-.005-.024-.008-.014-.003-.023-.005-.017-.002-.021-.003-.021-.002h-1.46a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-5.337l4.123 5.568c.028.04.063.072.101.099l.004.003a.236.236 0 0 0 .025.015l.012.006.019.01a.154.154 0 0 1 .019.008l.012.004.028.01.005.001a.442.442 0 0 0 .104.013h1.446a.4.4 0 0 0 .401-.4v-8.985a.402.402 0 0 0-.401-.401zm-13.442 7.537h-3.93v-7.136a.401.401 0 0 0-.401-.401h-1.447a.4.4 0 0 0-.401.401v8.984a.392.392 0 0 0 .123.29c.072.068.17.111.278.111h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401zm21.429-5.287c.222 0 .401-.18.401-.402v-1.446a.401.401 0 0 0-.401-.402h-5.778a.398.398 0 0 0-.279.113l-.005.004-.006.008a.397.397 0 0 0-.111.276v8.984c0 .108.043.206.112.278l.005.006a.401.401 0 0 0 .284.117h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401h-3.93v-1.519h3.93c.222 0 .401-.18.401-.402V29.85a.401.401 0 0 0-.401-.402h-3.93V27.93h3.93z',
});
/* harmony default export */ __webpack_exports__["default"] = (LineIcon);


/***/ }),

/***/ "./node_modules/react-share/es/LineShareButton.js":
/*!********************************************************!*\
  !*** ./node_modules/react-share/es/LineShareButton.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/assert */ "./node_modules/react-share/es/utils/assert.js");
/* harmony import */ var _hocs_createShareButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hocs/createShareButton */ "./node_modules/react-share/es/hocs/createShareButton.js");
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");



function lineLink(url, _a) {
    var title = _a.title;
    Object(_utils_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(url, 'line.url');
    return ('https://social-plugins.line.me/lineit/share' +
        Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
            url: url,
            text: title,
        }));
}
var LineShareButton = Object(_hocs_createShareButton__WEBPACK_IMPORTED_MODULE_1__["default"])('line', lineLink, function (props) { return ({
    title: props.title,
}); }, {
    windowWidth: 500,
    windowHeight: 500,
});
/* harmony default export */ __webpack_exports__["default"] = (LineShareButton);


/***/ }),

/***/ "./node_modules/react-share/es/LinkedinIcon.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-share/es/LinkedinIcon.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hocs/createIcon */ "./node_modules/react-share/es/hocs/createIcon.js");

var LinkedinIcon = Object(_hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: '#007fb1',
    networkName: 'linkedin',
    path: 'M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z',
});
/* harmony default export */ __webpack_exports__["default"] = (LinkedinIcon);


/***/ }),

/***/ "./node_modules/react-share/es/LinkedinShareButton.js":
/*!************************************************************!*\
  !*** ./node_modules/react-share/es/LinkedinShareButton.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/assert */ "./node_modules/react-share/es/utils/assert.js");
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hocs/createShareButton */ "./node_modules/react-share/es/hocs/createShareButton.js");



function linkedinLink(url, _a) {
    var title = _a.title, summary = _a.summary, source = _a.source;
    Object(_utils_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(url, 'linkedin.url');
    return ('https://linkedin.com/shareArticle' +
        Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({ url: url, mini: 'true', title: title, summary: summary, source: source }));
}
var LinkedinShareButton = Object(_hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__["default"])('linkedin', linkedinLink, function (_a) {
    var title = _a.title, summary = _a.summary, source = _a.source;
    return ({ title: title, summary: summary, source: source });
}, {
    windowWidth: 750,
    windowHeight: 600,
});
/* harmony default export */ __webpack_exports__["default"] = (LinkedinShareButton);


/***/ }),

/***/ "./node_modules/react-share/es/LivejournalIcon.js":
/*!********************************************************!*\
  !*** ./node_modules/react-share/es/LivejournalIcon.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hocs/createIcon */ "./node_modules/react-share/es/hocs/createIcon.js");

var LivejournalIcon = Object(_hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: '#21A5D8',
    networkName: 'livejournal',
    path: 'M18.3407821,28.1764706 L21.9441341,31.789916 L33.0055865,42.882353 C33.0055865,42.882353 33.0893855,42.9663866 33.0893855,42.9663866 L46.6648046,47 C46.6648046,47 46.6648046,47 46.7486034,47 C46.8324022,47 46.8324022,47 46.9162012,46.9159664 C47,46.8319327 47,46.8319327 47,46.7478991 L42.9776536,33.1344537 C42.9776536,33.1344537 42.9776536,33.1344537 42.8938548,33.0504202 L31.1620111,21.3697479 L31.1620111,21.3697479 L28.1452514,18.2605042 C27.3072626,17.4201681 26.5530726,17 25.7150838,17 C24.2905028,17 23.0335195,18.3445378 21.5251397,19.8571429 C21.273743,20.1092437 20.9385475,20.4453781 20.6871508,20.697479 C20.3519553,21.0336134 20.1005586,21.2857143 19.849162,21.5378151 C18.3407821,22.9663866 17.0837989,24.2268908 17,25.7394958 C17.0837989,26.4957983 17.5027933,27.3361345 18.3407821,28.1764706 Z M39.9012319,39.6134454 C39.7336341,39.4453781 39.4822374,37.6806724 40.2364275,36.8403362 C40.9906174,36.0840337 41.6610084,36 42.1638017,36 C42.3313995,36 42.4989973,36 42.5827961,36 L44.8453659,43.5630253 L43.5883828,44.8235295 L36.0464833,42.5546218 C35.9626843,42.2184874 35.8788855,41.2100841 36.8844722,40.2016807 C37.2196676,39.8655463 37.8900587,39.6134454 38.5604498,39.6134454 C39.147042,39.6134454 39.5660364,39.7815126 39.5660364,39.7815126 C39.6498353,39.8655463 39.8174331,39.8655463 39.8174331,39.7815126 C39.9850307,39.7815126 39.9850307,39.697479 39.9012319,39.6134454 Z',
});
/* harmony default export */ __webpack_exports__["default"] = (LivejournalIcon);


/***/ }),

/***/ "./node_modules/react-share/es/LivejournalShareButton.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-share/es/LivejournalShareButton.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/assert */ "./node_modules/react-share/es/utils/assert.js");
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hocs/createShareButton */ "./node_modules/react-share/es/hocs/createShareButton.js");



function livejournalLink(url, _a) {
    var title = _a.title, description = _a.description;
    Object(_utils_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(url, 'livejournal.url');
    return ('https://www.livejournal.com/update.bml' +
        Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
            subject: title,
            event: description,
        }));
}
var LivejournalShareButton = Object(_hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__["default"])('livejournal', livejournalLink, function (props) { return ({
    title: props.title,
    description: props.description,
}); }, {
    windowWidth: 660,
    windowHeight: 460,
});
/* harmony default export */ __webpack_exports__["default"] = (LivejournalShareButton);


/***/ }),

/***/ "./node_modules/react-share/es/MailruIcon.js":
/*!***************************************************!*\
  !*** ./node_modules/react-share/es/MailruIcon.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hocs/createIcon */ "./node_modules/react-share/es/hocs/createIcon.js");

var MailruIcon = Object(_hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: '#168DE2',
    networkName: 'mailru',
    path: 'M39.7107745,17 C41.6619755,17 43.3204965,18.732852 43.3204965,21.0072202 C43.3204965,23.2815885 41.7595357,25.0144404 39.7107745,25.0144404 C37.7595732,25.0144404 36.1010522,23.2815885 36.1010522,21.0072202 C36.1010522,18.732852 37.7595732,17 39.7107745,17 Z M24.3938451,17 C26.3450463,17 28.0035672,18.732852 28.0035672,21.0072202 C28.0035672,23.2815885 26.4426063,25.0144404 24.3938451,25.0144404 C22.4426439,25.0144404 20.7841229,23.2815885 20.7841229,21.0072202 C20.7841229,18.732852 22.4426439,17 24.3938451,17 Z M51.9057817,43.4259928 C51.7106617,44.0758123 51.4179815,44.6173285 50.9301812,44.9422383 C50.637501,45.1588448 50.2472607,45.267148 49.8570205,45.267148 C49.07654,45.267148 48.3936197,44.833935 48.0033795,44.0758123 L46.2472985,40.7184115 L45.759498,41.2599278 C42.5400162,44.9422383 37.466893,47 32.0035297,47 C26.5401664,47 21.5646034,44.9422383 18.2475614,41.2599278 L17.7597611,40.7184115 L16.00368,44.0758123 C15.6134398,44.833935 14.9305194,45.267148 14.1500389,45.267148 C13.7597986,45.267148 13.3695584,45.1588448 13.0768782,44.9422383 C12.0037176,44.2924187 11.7110374,42.7761733 12.2963978,41.5848375 L16.7841605,33.0288807 C17.1744007,32.270758 17.8573211,31.8375453 18.6378016,31.8375453 C19.0280418,31.8375453 19.4182821,31.9458485 19.7109623,32.1624548 C20.7841229,32.8122743 21.0768031,34.3285197 20.4914427,35.5198555 L20.1012025,36.2779783 L20.2963226,36.602888 C22.4426439,39.9602888 27.0279667,42.234657 31.9059697,42.234657 C36.7839727,42.234657 41.3692955,40.068592 43.5156167,36.602888 L43.7107367,36.2779783 L43.3204965,35.6281587 C43.0278165,35.0866425 42.9302562,34.436823 43.1253765,33.7870035 C43.3204965,33.137184 43.6131767,32.5956678 44.100977,32.270758 C44.3936572,32.0541515 44.7838975,31.9458485 45.1741377,31.9458485 C45.9546182,31.9458485 46.6375385,32.3790613 47.0277787,33.137184 L51.5155415,41.6931408 C52.003342,42.234657 52.100902,42.8844765 51.9057817,43.4259928 Z',
});
/* harmony default export */ __webpack_exports__["default"] = (MailruIcon);


/***/ }),

/***/ "./node_modules/react-share/es/MailruShareButton.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-share/es/MailruShareButton.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/assert */ "./node_modules/react-share/es/utils/assert.js");
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hocs/createShareButton */ "./node_modules/react-share/es/hocs/createShareButton.js");



function mailruLink(url, _a) {
    var title = _a.title, description = _a.description, imageUrl = _a.imageUrl;
    Object(_utils_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(url, 'mailru.url');
    return ('https://connect.mail.ru/share' +
        Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
            url: url,
            title: title,
            description: description,
            image_url: imageUrl,
        }));
}
var MailruShareButton = Object(_hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__["default"])('mailru', mailruLink, function (props) { return ({
    title: props.title,
    description: props.description,
    imageUrl: props.imageUrl,
}); }, {
    windowWidth: 660,
    windowHeight: 460,
});
/* harmony default export */ __webpack_exports__["default"] = (MailruShareButton);


/***/ }),

/***/ "./node_modules/react-share/es/OKIcon.js":
/*!***********************************************!*\
  !*** ./node_modules/react-share/es/OKIcon.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hocs/createIcon */ "./node_modules/react-share/es/hocs/createIcon.js");

var OKIcon = Object(_hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: '#f2720c',
    networkName: 'ok',
    path: 'M39,30c-1,0-3,2-7,2s-6-2-7-2c-1.1,0-2,0.9-2,2c0,1,0.6,1.5,1,1.7c1.2,0.7,5,2.3,5,2.3l-4.3,5.4   c0,0-0.8,0.9-0.8,1.6c0,1.1,0.9,2,2,2c1,0,1.5-0.7,1.5-0.7S32,39,32,39c0,0,4.5,5.3,4.5,5.3S37,45,38,45c1.1,0,2-0.9,2-2   c0-0.6-0.8-1.6-0.8-1.6L35,36c0,0,3.8-1.6,5-2.3c0.4-0.3,1-0.7,1-1.7C41,30.9,40.1,30,39,30z M32,15c-3.9,0-7,3.1-7,7s3.1,7,7,7c3.9,0,7-3.1,7-7S35.9,15,32,15z M32,25.5   c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5c1.9,0,3.5,1.6,3.5,3.5C35.5,23.9,33.9,22.5,35,22.5z ',
});
/* harmony default export */ __webpack_exports__["default"] = (OKIcon);


/***/ }),

/***/ "./node_modules/react-share/es/OKShareButton.js":
/*!******************************************************!*\
  !*** ./node_modules/react-share/es/OKShareButton.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/assert */ "./node_modules/react-share/es/utils/assert.js");
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hocs/createShareButton */ "./node_modules/react-share/es/hocs/createShareButton.js");



function okLink(url, _a) {
    var title = _a.title, description = _a.description, image = _a.image;
    Object(_utils_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(url, 'ok.url');
    return ('https://connect.ok.ru/offer' +
        Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
            url: url,
            title: title,
            description: description,
            imageUrl: image,
        }));
}
var OKShareButton = Object(_hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__["default"])('ok', okLink, function (props) { return ({
    title: props.title,
    description: props.description,
    image: props.image,
}); }, {
    windowWidth: 588,
    windowHeight: 480,
    windowPosition: 'screenCenter',
});
/* harmony default export */ __webpack_exports__["default"] = (OKShareButton);


/***/ }),

/***/ "./node_modules/react-share/es/OKShareCount.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-share/es/OKShareCount.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _hocs_createShareCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hocs/createShareCount */ "./node_modules/react-share/es/hocs/createShareCount.js");



function getOKShareCount(shareUrl, callback) {
    if (!window.OK) {
        window.OK = {
            Share: {
                count: function count(index, _count) {
                    window.OK.callbacks[index](_count);
                },
            },
            callbacks: [],
        };
    }
    var url = 'https://connect.ok.ru/dk';
    var index = window.OK.callbacks.length;
    window.ODKL = {
        updateCount: function (index, count) {
            var callbackIndex = index === '' ? 0 : parseInt(index.replace('react-share-', ''), 10);
            window.OK.callbacks[callbackIndex](count === '' ? undefined : parseInt(count, 10));
        },
    };
    window.OK.callbacks.push(callback);
    return jsonp__WEBPACK_IMPORTED_MODULE_0___default()(url +
        Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
            'st.cmd': 'extLike',
            uid: "react-share-" + index,
            ref: shareUrl,
        }));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_hocs_createShareCount__WEBPACK_IMPORTED_MODULE_2__["default"])(getOKShareCount));


/***/ }),

/***/ "./node_modules/react-share/es/PinterestIcon.js":
/*!******************************************************!*\
  !*** ./node_modules/react-share/es/PinterestIcon.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hocs/createIcon */ "./node_modules/react-share/es/hocs/createIcon.js");

var PinterestIcon = Object(_hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: '#cb2128',
    networkName: 'pinterest',
    path: 'M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z',
});
/* harmony default export */ __webpack_exports__["default"] = (PinterestIcon);


/***/ }),

/***/ "./node_modules/react-share/es/PinterestShareButton.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-share/es/PinterestShareButton.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/assert */ "./node_modules/react-share/es/utils/assert.js");
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hocs/createShareButton */ "./node_modules/react-share/es/hocs/createShareButton.js");



function pinterestLink(url, _a) {
    var media = _a.media, description = _a.description;
    Object(_utils_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(url, 'pinterest.url');
    Object(_utils_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(media, 'pinterest.media');
    return ('https://pinterest.com/pin/create/button/' +
        Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
            url: url,
            media: media,
            description: description,
        }));
}
var PinterestShareButton = Object(_hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__["default"])('pinterest', pinterestLink, function (props) { return ({
    media: props.media,
    description: props.description,
}); }, {
    windowWidth: 1000,
    windowHeight: 730,
});
/* harmony default export */ __webpack_exports__["default"] = (PinterestShareButton);


/***/ }),

/***/ "./node_modules/react-share/es/PinterestShareCount.js":
/*!************************************************************!*\
  !*** ./node_modules/react-share/es/PinterestShareCount.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _hocs_createShareCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hocs/createShareCount */ "./node_modules/react-share/es/hocs/createShareCount.js");



function getPinterestShareCount(shareUrl, callback) {
    var url = 'https://api.pinterest.com/v1/urls/count.json';
    jsonp__WEBPACK_IMPORTED_MODULE_0___default()(url +
        Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
            url: shareUrl,
        }), function (err, data) {
        callback(data ? data.count : undefined);
    });
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_hocs_createShareCount__WEBPACK_IMPORTED_MODULE_2__["default"])(getPinterestShareCount));


/***/ }),

/***/ "./node_modules/react-share/es/PocketIcon.js":
/*!***************************************************!*\
  !*** ./node_modules/react-share/es/PocketIcon.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hocs/createIcon */ "./node_modules/react-share/es/hocs/createIcon.js");

var PocketIcon = Object(_hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: '#EF3F56',
    networkName: 'pocket',
    path: 'M41.084 29.065l-7.528 7.882a2.104 2.104 0 0 1-1.521.666 2.106 2.106 0 0 1-1.522-.666l-7.528-7.882c-.876-.914-.902-2.43-.065-3.384.84-.955 2.228-.987 3.1-.072l6.015 6.286 6.022-6.286c.88-.918 2.263-.883 3.102.071.841.938.82 2.465-.06 3.383l-.015.002zm6.777-10.976C47.463 16.84 46.361 16 45.14 16H18.905c-1.2 0-2.289.82-2.716 2.044-.125.363-.189.743-.189 1.125v10.539l.112 2.096c.464 4.766 2.73 8.933 6.243 11.838.06.053.125.102.19.153l.04.033c1.882 1.499 3.986 2.514 6.259 3.014a14.662 14.662 0 0 0 6.13.052c.118-.042.235-.065.353-.087.03 0 .065-.022.098-.042a15.395 15.395 0 0 0 6.011-2.945l.039-.045.18-.153c3.502-2.902 5.765-7.072 6.248-11.852L48 29.674v-10.52c0-.366-.041-.728-.161-1.08l.022.015z',
});
/* harmony default export */ __webpack_exports__["default"] = (PocketIcon);


/***/ }),

/***/ "./node_modules/react-share/es/PocketShareButton.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-share/es/PocketShareButton.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/assert */ "./node_modules/react-share/es/utils/assert.js");
/* harmony import */ var _hocs_createShareButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hocs/createShareButton */ "./node_modules/react-share/es/hocs/createShareButton.js");
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");



function pocketLink(url, _a) {
    var title = _a.title;
    Object(_utils_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(url, 'pocket.url');
    return ('https://getpocket.com/save' +
        Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
            url: url,
            title: title,
        }));
}
var PocketShareButton = Object(_hocs_createShareButton__WEBPACK_IMPORTED_MODULE_1__["default"])('pocket', pocketLink, function (props) { return ({
    title: props.title,
}); }, {
    windowWidth: 500,
    windowHeight: 500,
});
/* harmony default export */ __webpack_exports__["default"] = (PocketShareButton);


/***/ }),

/***/ "./node_modules/react-share/es/RedditIcon.js":
/*!***************************************************!*\
  !*** ./node_modules/react-share/es/RedditIcon.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hocs/createIcon */ "./node_modules/react-share/es/hocs/createIcon.js");

var RedditIcon = Object(_hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: '#5f99cf',
    networkName: 'reddit',
    path: 'm 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z',
});
/* harmony default export */ __webpack_exports__["default"] = (RedditIcon);


/***/ }),

/***/ "./node_modules/react-share/es/RedditShareButton.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-share/es/RedditShareButton.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/assert */ "./node_modules/react-share/es/utils/assert.js");
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hocs/createShareButton */ "./node_modules/react-share/es/hocs/createShareButton.js");



function redditLink(url, _a) {
    var title = _a.title;
    Object(_utils_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(url, 'reddit.url');
    return ('https://www.reddit.com/submit' +
        Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
            url: url,
            title: title,
        }));
}
var RedditShareButton = Object(_hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__["default"])('reddit', redditLink, function (props) { return ({
    title: props.title,
}); }, {
    windowWidth: 660,
    windowHeight: 460,
    windowPosition: 'windowCenter',
});
/* harmony default export */ __webpack_exports__["default"] = (RedditShareButton);


/***/ }),

/***/ "./node_modules/react-share/es/RedditShareCount.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-share/es/RedditShareCount.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hocs_createShareCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hocs/createShareCount */ "./node_modules/react-share/es/hocs/createShareCount.js");


function getRedditShareCount(shareUrl, callback) {
    var endpoint = "https://www.reddit.com/api/info.json?limit=1&url=" + shareUrl;
    jsonp__WEBPACK_IMPORTED_MODULE_0___default()(endpoint, { param: 'jsonp' }, function (err, response) {
        callback(!err &&
            response &&
            response.data &&
            response.data.children.length > 0 &&
            response.data.children[0].data.score
            ? response.data.children[0].data.score
            : undefined);
    });
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_hocs_createShareCount__WEBPACK_IMPORTED_MODULE_1__["default"])(getRedditShareCount));


/***/ }),

/***/ "./node_modules/react-share/es/ShareButton.js":
/*!****************************************************!*\
  !*** ./node_modules/react-share/es/ShareButton.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


var isPromise = function (obj) {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
};
var getBoxPositionOnWindowCenter = function (width, height) { return ({
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2,
}); };
var getBoxPositionOnScreenCenter = function (width, height) { return ({
    top: (window.screen.height - height) / 2,
    left: (window.screen.width - width) / 2,
}); };
function windowOpen(url, _a, onClose) {
    var height = _a.height, width = _a.width, configRest = __rest(_a, ["height", "width"]);
    var config = __assign({ height: height,
        width: width, location: 'no', toolbar: 'no', status: 'no', directories: 'no', menubar: 'no', scrollbars: 'yes', resizable: 'no', centerscreen: 'yes', chrome: 'yes' }, configRest);
    var shareDialog = window.open(url, '', Object.keys(config)
        .map(function (key) { return key + "=" + config[key]; })
        .join(', '));
    if (onClose) {
        var interval_1 = window.setInterval(function () {
            try {
                if (shareDialog === null || shareDialog.closed) {
                    window.clearInterval(interval_1);
                    onClose(shareDialog);
                }
            }
            catch (e) {
                /* eslint-disable no-console */
                console.error(e);
                /* eslint-enable no-console */
            }
        }, 1000);
    }
    return shareDialog;
}
var ShareButton = /** @class */ (function (_super) {
    __extends(ShareButton, _super);
    function ShareButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.openShareDialog = function (link) {
            var _a = _this.props, onShareWindowClose = _a.onShareWindowClose, _b = _a.windowHeight, windowHeight = _b === void 0 ? 400 : _b, _c = _a.windowPosition, windowPosition = _c === void 0 ? 'windowCenter' : _c, _d = _a.windowWidth, windowWidth = _d === void 0 ? 550 : _d;
            var windowConfig = __assign({ height: windowHeight, width: windowWidth }, (windowPosition === 'windowCenter'
                ? getBoxPositionOnWindowCenter(windowWidth, windowHeight)
                : getBoxPositionOnScreenCenter(windowWidth, windowHeight)));
            windowOpen(link, windowConfig, onShareWindowClose);
        };
        _this.handleClick = function (event) { return __awaiter(_this, void 0, void 0, function () {
            var _a, beforeOnClick, disabled, networkLink, onClick, url, openShareDialogOnClick, opts, link, returnVal;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, beforeOnClick = _a.beforeOnClick, disabled = _a.disabled, networkLink = _a.networkLink, onClick = _a.onClick, url = _a.url, openShareDialogOnClick = _a.openShareDialogOnClick, opts = _a.opts;
                        link = networkLink(url, opts);
                        if (disabled) {
                            return [2 /*return*/];
                        }
                        event.preventDefault();
                        if (!beforeOnClick) return [3 /*break*/, 2];
                        returnVal = beforeOnClick();
                        if (!isPromise(returnVal)) return [3 /*break*/, 2];
                        return [4 /*yield*/, returnVal];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        if (openShareDialogOnClick) {
                            this.openShareDialog(link);
                        }
                        if (onClick) {
                            onClick(event, link);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    ShareButton.prototype.render = function () {
        var _a = this.props, beforeOnClick = _a.beforeOnClick, children = _a.children, className = _a.className, disabled = _a.disabled, disabledStyle = _a.disabledStyle, forwardedRef = _a.forwardedRef, networkLink = _a.networkLink, networkName = _a.networkName, onShareWindowClose = _a.onShareWindowClose, openShareDialogOnClick = _a.openShareDialogOnClick, opts = _a.opts, resetButtonStyle = _a.resetButtonStyle, style = _a.style, url = _a.url, windowHeight = _a.windowHeight, windowPosition = _a.windowPosition, windowWidth = _a.windowWidth, rest = __rest(_a, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]);
        var newClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()('react-share__ShareButton', {
            'react-share__ShareButton--disabled': !!disabled,
            disabled: !!disabled,
        }, className);
        var newStyle = resetButtonStyle
            ? __assign(__assign({ backgroundColor: 'transparent', border: 'none', padding: 0, font: 'inherit', color: 'inherit', cursor: 'pointer' }, style), (disabled && disabledStyle)) : __assign(__assign({}, style), (disabled && disabledStyle));
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", __assign({}, rest, { "aria-label": rest['aria-label'] || networkName, className: newClassName, onClick: this.handleClick, ref: forwardedRef, style: newStyle }), children));
    };
    ShareButton.defaultProps = {
        disabledStyle: { opacity: 0.6 },
        openShareDialogOnClick: true,
        resetButtonStyle: true,
    };
    return ShareButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ShareButton);


/***/ }),

/***/ "./node_modules/react-share/es/TelegramIcon.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-share/es/TelegramIcon.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hocs/createIcon */ "./node_modules/react-share/es/hocs/createIcon.js");

var TelegramIcon = Object(_hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: '#37aee2',
    networkName: 'telegram',
    path: 'm45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957',
});
/* harmony default export */ __webpack_exports__["default"] = (TelegramIcon);


/***/ }),

/***/ "./node_modules/react-share/es/TelegramShareButton.js":
/*!************************************************************!*\
  !*** ./node_modules/react-share/es/TelegramShareButton.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/assert */ "./node_modules/react-share/es/utils/assert.js");
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hocs/createShareButton */ "./node_modules/react-share/es/hocs/createShareButton.js");



function telegramLink(url, _a) {
    var title = _a.title;
    Object(_utils_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(url, 'telegram.url');
    return ('https://telegram.me/share/' +
        Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
            url: url,
            text: title,
        }));
}
var TelegramShareButton = Object(_hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__["default"])('telegram', telegramLink, function (props) { return ({
    title: props.title,
}); }, {
    windowWidth: 550,
    windowHeight: 400,
});
/* harmony default export */ __webpack_exports__["default"] = (TelegramShareButton);


/***/ }),

/***/ "./node_modules/react-share/es/TumblrIcon.js":
/*!***************************************************!*\
  !*** ./node_modules/react-share/es/TumblrIcon.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hocs/createIcon */ "./node_modules/react-share/es/hocs/createIcon.js");

var TumblrIcon = Object(_hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: '#2c4762',
    networkName: 'tumblr',
    path: 'M39.2,41c-0.6,0.3-1.6,0.5-2.4,0.5c-2.4,0.1-2.9-1.7-2.9-3v-9.3h6v-4.5h-6V17c0,0-4.3,0-4.4,0 c-0.1,0-0.2,0.1-0.2,0.2c-0.3,2.3-1.4,6.4-5.9,8.1v3.9h3V39c0,3.4,2.5,8.1,9,8c2.2,0,4.7-1,5.2-1.8L39.2,41z',
});
/* harmony default export */ __webpack_exports__["default"] = (TumblrIcon);


/***/ }),

/***/ "./node_modules/react-share/es/TumblrShareButton.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-share/es/TumblrShareButton.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/assert */ "./node_modules/react-share/es/utils/assert.js");
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hocs/createShareButton */ "./node_modules/react-share/es/hocs/createShareButton.js");



function tumblrLink(url, _a) {
    var title = _a.title, caption = _a.caption, tags = _a.tags, posttype = _a.posttype;
    Object(_utils_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(url, 'tumblr.url');
    return ('https://www.tumblr.com/widgets/share/tool' +
        Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
            canonicalUrl: url,
            title: title,
            caption: caption,
            tags: tags,
            posttype: posttype,
        }));
}
var TumblrShareButton = Object(_hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__["default"])('tumblr', tumblrLink, function (props) { return ({
    title: props.title,
    tags: (props.tags || []).join(','),
    caption: props.caption,
    posttype: props.posttype || 'link',
}); }, {
    windowWidth: 660,
    windowHeight: 460,
});
/* harmony default export */ __webpack_exports__["default"] = (TumblrShareButton);


/***/ }),

/***/ "./node_modules/react-share/es/TumblrShareCount.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-share/es/TumblrShareCount.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _hocs_createShareCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hocs/createShareCount */ "./node_modules/react-share/es/hocs/createShareCount.js");



function getTumblrShareCount(shareUrl, callback) {
    var endpoint = 'https://api.tumblr.com/v2/share/stats';
    return jsonp__WEBPACK_IMPORTED_MODULE_0___default()(endpoint +
        Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
            url: shareUrl,
        }), function (err, data) {
        callback(!err && data && data.response ? data.response.note_count : undefined);
    });
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_hocs_createShareCount__WEBPACK_IMPORTED_MODULE_2__["default"])(getTumblrShareCount));


/***/ }),

/***/ "./node_modules/react-share/es/TwitterIcon.js":
/*!****************************************************!*\
  !*** ./node_modules/react-share/es/TwitterIcon.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hocs/createIcon */ "./node_modules/react-share/es/hocs/createIcon.js");

var TwitterIcon = Object(_hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: '#00aced',
    networkName: 'twitter',
    path: 'M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z',
});
/* harmony default export */ __webpack_exports__["default"] = (TwitterIcon);


/***/ }),

/***/ "./node_modules/react-share/es/TwitterShareButton.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-share/es/TwitterShareButton.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/assert */ "./node_modules/react-share/es/utils/assert.js");
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hocs/createShareButton */ "./node_modules/react-share/es/hocs/createShareButton.js");



function twitterLink(url, _a) {
    var title = _a.title, via = _a.via, _b = _a.hashtags, hashtags = _b === void 0 ? [] : _b, _c = _a.related, related = _c === void 0 ? [] : _c;
    Object(_utils_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(url, 'twitter.url');
    Object(_utils_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(Array.isArray(hashtags), 'twitter.hashtags is not an array');
    Object(_utils_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(Array.isArray(related), 'twitter.related is not an array');
    return ('https://twitter.com/share' +
        Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
            url: url,
            text: title,
            via: via,
            hashtags: hashtags.length > 0 ? hashtags.join(',') : undefined,
            related: related.length > 0 ? related.join(',') : undefined,
        }));
}
var TwitterShareButton = Object(_hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__["default"])('twitter', twitterLink, function (props) { return ({
    hashtags: props.hashtags,
    title: props.title,
    via: props.via,
    related: props.related,
}); }, {
    windowWidth: 550,
    windowHeight: 400,
});
/* harmony default export */ __webpack_exports__["default"] = (TwitterShareButton);


/***/ }),

/***/ "./node_modules/react-share/es/VKIcon.js":
/*!***********************************************!*\
  !*** ./node_modules/react-share/es/VKIcon.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hocs/createIcon */ "./node_modules/react-share/es/hocs/createIcon.js");

var VKIcon = Object(_hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: '#45668e',
    networkName: 'vk',
    path: 'M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z',
});
/* harmony default export */ __webpack_exports__["default"] = (VKIcon);


/***/ }),

/***/ "./node_modules/react-share/es/VKShareButton.js":
/*!******************************************************!*\
  !*** ./node_modules/react-share/es/VKShareButton.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/assert */ "./node_modules/react-share/es/utils/assert.js");
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hocs/createShareButton */ "./node_modules/react-share/es/hocs/createShareButton.js");



function vkLink(url, _a) {
    var title = _a.title, image = _a.image, noParse = _a.noParse, noVkLinks = _a.noVkLinks;
    Object(_utils_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(url, 'vk.url');
    return ('https://vk.com/share.php' +
        Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
            url: url,
            title: title,
            image: image,
            noparse: noParse ? 1 : 0,
            no_vk_links: noVkLinks ? 1 : 0,
        }));
}
var VKShareButton = Object(_hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__["default"])('vk', vkLink, function (props) { return ({
    title: props.title,
    image: props.image,
    noParse: props.noParse,
    noVkLinks: props.noVkLinks,
}); }, {
    windowWidth: 660,
    windowHeight: 460,
});
/* harmony default export */ __webpack_exports__["default"] = (VKShareButton);


/***/ }),

/***/ "./node_modules/react-share/es/VKShareCount.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-share/es/VKShareCount.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _hocs_createShareCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hocs/createShareCount */ "./node_modules/react-share/es/hocs/createShareCount.js");



function getVKShareCount(shareUrl, callback) {
    if (!window.VK)
        window.VK = {};
    window.VK.Share = {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        count: function (index, count) { return window.VK.callbacks[index](count); },
    };
    window.VK.callbacks = [];
    var url = 'https://vk.com/share.php';
    var index = window.VK.callbacks.length;
    window.VK.callbacks.push(callback);
    return jsonp__WEBPACK_IMPORTED_MODULE_0___default()(url +
        Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
            act: 'count',
            index: index,
            url: shareUrl,
        }));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_hocs_createShareCount__WEBPACK_IMPORTED_MODULE_2__["default"])(getVKShareCount));


/***/ }),

/***/ "./node_modules/react-share/es/ViberIcon.js":
/*!**************************************************!*\
  !*** ./node_modules/react-share/es/ViberIcon.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hocs/createIcon */ "./node_modules/react-share/es/hocs/createIcon.js");

var ViberIcon = Object(_hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: '#7C529E',
    networkName: 'viber',
    path: 'm31.0,12.3c9.0,0.2 16.4,6.2 18.0,15.2c0.2,1.5 0.3,3.0 0.4,4.6a1.0,1.0 0 0 1 -0.8,1.2l-0.1,0a1.1,1.1 0 0 1 -1.0,-1.2l0,0c-0.0,-1.2 -0.1,-2.5 -0.3,-3.8a16.1,16.1 0 0 0 -13.0,-13.5c-1.0,-0.1 -2.0,-0.2 -3.0,-0.3c-0.6,-0.0 -1.4,-0.1 -1.6,-0.8a1.1,1.1 0 0 1 0.9,-1.2l0.6,0l0.0,-0.0zm10.6,39.2a19.9,19.9 0 0 1 -2.1,-0.6c-6.9,-2.9 -13.2,-6.6 -18.3,-12.2a47.5,47.5 0 0 1 -7.0,-10.7c-0.8,-1.8 -1.6,-3.7 -2.4,-5.6c-0.6,-1.7 0.3,-3.4 1.4,-4.7a11.3,11.3 0 0 1 3.7,-2.8a2.4,2.4 0 0 1 3.0,0.7a39.0,39.0 0 0 1 4.7,6.5a3.1,3.1 0 0 1 -0.8,4.2c-0.3,0.2 -0.6,0.5 -1.0,0.8a3.3,3.3 0 0 0 -0.7,0.7a2.1,2.1 0 0 0 -0.1,1.9c1.7,4.9 4.7,8.7 9.7,10.8a5.0,5.0 0 0 0 2.5,0.6c1.5,-0.1 2.0,-1.8 3.1,-2.7a2.9,2.9 0 0 1 3.5,-0.1c1.1,0.7 2.2,1.4 3.3,2.2a37.8,37.8 0 0 1 3.1,2.4a2.4,2.4 0 0 1 0.7,3.0a10.4,10.4 0 0 1 -4.4,4.8a10.8,10.8 0 0 1 -1.9,0.6c-0.7,-0.2 0.6,-0.2 0,0l0.0,0l0,-0.0zm3.1,-21.4a4.2,4.2 0 0 1 -0.0,0.6a1.0,1.0 0 0 1 -1.9,0.1a2.7,2.7 0 0 1 -0.1,-0.8a10.9,10.9 0 0 0 -1.4,-5.5a10.2,10.2 0 0 0 -4.2,-4.0a12.3,12.3 0 0 0 -3.4,-1.0c-0.5,-0.0 -1.0,-0.1 -1.5,-0.2a0.9,0.9 0 0 1 -0.9,-1.0l0,-0.1a0.9,0.9 0 0 1 0.9,-0.9l0.1,0a14.1,14.1 0 0 1 5.9,1.5a11.9,11.9 0 0 1 6.5,9.3c0,0.1 0.0,0.3 0.0,0.5c0,0.4 0.0,0.9 0.0,1.5l0,0l0.0,0.0zm-5.6,-0.2a1.1,1.1 0 0 1 -1.2,-0.9l0,-0.1a11.3,11.3 0 0 0 -0.2,-1.4a4.0,4.0 0 0 0 -1.5,-2.3a3.9,3.9 0 0 0 -1.2,-0.5c-0.5,-0.1 -1.1,-0.1 -1.6,-0.2a1.0,1.0 0 0 1 -0.8,-1.1l0,0l0,0a1.0,1.0 0 0 1 1.1,-0.8c3.4,0.2 6.0,2.0 6.3,6.2a2.8,2.8 0 0 1 0,0.8a0.8,0.8 0 0 1 -0.8,0.7l0,0l0.0,-0.0z',
});
/* harmony default export */ __webpack_exports__["default"] = (ViberIcon);


/***/ }),

/***/ "./node_modules/react-share/es/ViberShareButton.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-share/es/ViberShareButton.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/assert */ "./node_modules/react-share/es/utils/assert.js");
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hocs/createShareButton */ "./node_modules/react-share/es/hocs/createShareButton.js");



function viberLink(url, _a) {
    var title = _a.title, separator = _a.separator;
    Object(_utils_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(url, 'viber.url');
    return ('viber://forward' +
        Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
            text: title ? title + separator + url : url,
        }));
}
var ViberShareButton = Object(_hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__["default"])('viber', viberLink, function (props) { return ({
    title: props.title,
    separator: props.separator || ' ',
}); }, {
    windowWidth: 660,
    windowHeight: 460,
});
/* harmony default export */ __webpack_exports__["default"] = (ViberShareButton);


/***/ }),

/***/ "./node_modules/react-share/es/WeiboIcon.js":
/*!**************************************************!*\
  !*** ./node_modules/react-share/es/WeiboIcon.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hocs/createIcon */ "./node_modules/react-share/es/hocs/createIcon.js");

var WeiboIcon = Object(_hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: '#CD201F',
    networkName: 'weibo',
    path: 'M40.9756152,15.0217119 C40.5000732,15.0546301 39.9999314,15.1204666 39.5325878,15.2192213 C38.6634928,15.4085016 38.0977589,16.2643757 38.2863368,17.1284787 C38.4667163,18.0008129 39.3194143,18.5686519 40.1885094,18.3793715 C42.8613908,17.8115326 45.7720411,18.6427174 47.7316073,20.8153207 C49.6911735,22.996153 50.2077122,25.975254 49.3714112,28.5840234 C49.1008441,29.4316684 49.5763861,30.3533789 50.4208857,30.6249537 C51.2653852,30.8965286 52.1754769,30.4192153 52.4542425,29.5715703 C53.6349013,25.9011885 52.9133876,21.7699494 50.1585171,18.7085538 C48.0923641,16.4042776 45.2063093,15.1533848 42.3530505,15.0217119 C41.8775084,14.9970227 41.4511594,14.9887937 40.9756152,15.0217119 Z M27.9227762,19.8277737 C24.9957268,20.140498 20.863421,22.4365431 17.2312548,26.0822378 C13.2711279,30.0571148 11,34.2871065 11,37.9328012 C11,44.9032373 19.8713401,49.125 28.5786978,49.125 C39.9917329,49.125 47.600423,42.4261409 47.600423,37.1427636 C47.600423,33.9496952 44.9603397,32.1638816 42.549827,31.4149913 C41.9594976,31.2339421 41.5167516,31.1434164 41.8283133,30.3616079 C42.5006339,28.66632 42.6236176,27.1932286 41.8939054,26.1480742 C40.5328692,24.1894405 36.7203236,24.2881952 32.448635,26.0822378 C32.448635,26.0822378 31.1203949,26.6912261 31.4647526,25.6213825 C32.1206742,23.4981576 32.0304845,21.712342 31.0056075,20.6836478 C30.2840938,19.9512176 29.2510184,19.6878718 27.9227762,19.8277737 Z M42.0906819,20.6836478 C41.6233383,20.6589586 41.1723917,20.716566 40.7132466,20.8153207 C39.9671353,20.9716828 39.4997917,21.7781784 39.6637721,22.5270687 C39.8277525,23.275959 40.5574647,23.7450433 41.303576,23.5804521 C42.1972686,23.3911718 43.2057485,23.6380596 43.8616701,24.3704897 C44.5175916,25.1029198 44.6733735,26.0657797 44.3864073,26.9381118 C44.1486363,27.6705419 44.5093932,28.4770397 45.2391054,28.7156963 C45.9688176,28.9461239 46.780521,28.5922524 47.0100936,27.8598223 C47.584026,26.0740087 47.2396661,24.0248493 45.8950269,22.5270687 C44.886547,21.4078489 43.4845162,20.7494842 42.0906819,20.6836478 Z M29.496988,29.9665891 C35.3100922,30.1723275 39.9917329,33.0691319 40.3852858,37.0769272 C40.8362324,41.6607904 35.5970585,45.9319315 28.6442899,46.6232144 C21.6915214,47.3144973 15.6488446,44.154347 15.197898,39.5787128 C14.7469514,34.9948495 20.059916,30.7237084 27.004486,30.0324256 C27.8735831,29.950131 28.6688875,29.9336709 29.496988,29.9665891 Z M25.5614586,34.3776322 C23.183744,34.5916017 20.9372116,35.9577073 19.9205332,37.9328012 C18.5348994,40.6238672 19.9041362,43.6029661 23.0689567,44.582284 C26.340366,45.5945202 30.1857056,44.0638213 31.5303448,41.1587879 C32.8503864,38.3195909 31.1613894,35.3734082 27.9227762,34.5751416 C27.1438688,34.3776322 26.356763,34.3035667 25.5614586,34.3776322 Z M24.052839,38.7228388 C24.3316067,38.7310678 24.5857748,38.8215935 24.8399449,38.9203482 C25.8648218,39.3400561 26.1845841,40.4428158 25.5614586,41.4221338 C24.9219361,42.3932227 23.5690963,42.8623069 22.5442194,42.4096807 C21.5357395,41.9652856 21.2487754,40.8542948 21.8882979,39.9078951 C22.3638421,39.2001542 23.2247386,38.7146097 24.052839,38.7228388 Z',
});
/* harmony default export */ __webpack_exports__["default"] = (WeiboIcon);


/***/ }),

/***/ "./node_modules/react-share/es/WeiboShareButton.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-share/es/WeiboShareButton.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/assert */ "./node_modules/react-share/es/utils/assert.js");
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hocs/createShareButton */ "./node_modules/react-share/es/hocs/createShareButton.js");



function weiboLink(url, _a) {
    var title = _a.title, image = _a.image;
    Object(_utils_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(url, 'weibo.url');
    return ('http://service.weibo.com/share/share.php' +
        Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
            url: url,
            title: title,
            pic: image,
        }));
}
var WeiboShareButton = Object(_hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__["default"])('weibo', weiboLink, function (props) { return ({
    title: props.title,
    image: props.image,
}); }, {
    windowWidth: 660,
    windowHeight: 550,
    windowPosition: 'screenCenter',
});
/* harmony default export */ __webpack_exports__["default"] = (WeiboShareButton);


/***/ }),

/***/ "./node_modules/react-share/es/WhatsappIcon.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-share/es/WhatsappIcon.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hocs/createIcon */ "./node_modules/react-share/es/hocs/createIcon.js");

var WhatsappIcon = Object(_hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: '#25D366',
    networkName: 'whatsapp',
    path: 'm42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915',
});
/* harmony default export */ __webpack_exports__["default"] = (WhatsappIcon);


/***/ }),

/***/ "./node_modules/react-share/es/WhatsappShareButton.js":
/*!************************************************************!*\
  !*** ./node_modules/react-share/es/WhatsappShareButton.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/assert */ "./node_modules/react-share/es/utils/assert.js");
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hocs/createShareButton */ "./node_modules/react-share/es/hocs/createShareButton.js");



function isMobileOrTablet() {
    return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
}
function whatsappLink(url, _a) {
    var title = _a.title, separator = _a.separator;
    Object(_utils_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(url, 'whatsapp.url');
    return ('https://' +
        (isMobileOrTablet() ? 'api' : 'web') +
        '.whatsapp.com/send' +
        Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
            text: title ? title + separator + url : url,
        }));
}
var WhatsappShareButton = Object(_hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__["default"])('whatsapp', whatsappLink, function (props) { return ({
    title: props.title,
    separator: props.separator || ' ',
}); }, {
    windowWidth: 550,
    windowHeight: 400,
});
/* harmony default export */ __webpack_exports__["default"] = (WhatsappShareButton);


/***/ }),

/***/ "./node_modules/react-share/es/WorkplaceIcon.js":
/*!******************************************************!*\
  !*** ./node_modules/react-share/es/WorkplaceIcon.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hocs/createIcon */ "./node_modules/react-share/es/hocs/createIcon.js");

var WorkplaceIcon = Object(_hocs_createIcon__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: '#3b3d4a',
    networkName: 'workplace',
    path: 'M34.019,10.292c0.21,0.017,0.423,0.034,0.636,0.049 c3.657,0.262,6.976,1.464,9.929,3.635c3.331,2.448,5.635,5.65,6.914,9.584c0.699,2.152,0.983,4.365,0.885,6.623 c-0.136,3.171-1.008,6.13-2.619,8.867c-0.442,0.75-0.908,1.492-1.495,2.141c-0.588,0.651-1.29,1.141-2.146,1.383 c-1.496,0.426-3.247-0.283-3.961-1.642c-0.26-0.494-0.442-1.028-0.654-1.548c-1.156-2.838-2.311-5.679-3.465-8.519 c-0.017-0.042-0.037-0.082-0.065-0.145c-0.101,0.245-0.192,0.472-0.284,0.698c-1.237,3.051-2.475,6.103-3.711,9.155 c-0.466,1.153-1.351,1.815-2.538,2.045c-1.391,0.267-2.577-0.154-3.496-1.247c-0.174-0.209-0.31-0.464-0.415-0.717 c-2.128-5.22-4.248-10.442-6.37-15.665c-0.012-0.029-0.021-0.059-0.036-0.104c0.054-0.003,0.103-0.006,0.15-0.006 c1.498-0.001,2.997,0,4.495-0.004c0.12-0.001,0.176,0.03,0.222,0.146c1.557,3.846,3.117,7.691,4.679,11.536 c0.018,0.046,0.039,0.091,0.067,0.159c0.273-0.673,0.536-1.32,0.797-1.968c1.064-2.627,2.137-5.25,3.19-7.883 c0.482-1.208,1.376-1.917,2.621-2.135c1.454-0.255,2.644,0.257,3.522,1.449c0.133,0.18,0.229,0.393,0.313,0.603 c1.425,3.495,2.848,6.991,4.269,10.488c0.02,0.047,0.04,0.093,0.073,0.172c0.196-0.327,0.385-0.625,0.559-0.935 c0.783-1.397,1.323-2.886,1.614-4.461c0.242-1.312,0.304-2.634,0.187-3.962c-0.242-2.721-1.16-5.192-2.792-7.38 c-2.193-2.939-5.086-4.824-8.673-5.625c-1.553-0.346-3.124-0.405-4.705-0.257c-3.162,0.298-6.036,1.366-8.585,3.258 c-3.414,2.534-5.638,5.871-6.623,10.016c-0.417,1.76-0.546,3.547-0.384,5.348c0.417,4.601,2.359,8.444,5.804,11.517 c2.325,2.073,5.037,3.393,8.094,3.989c1.617,0.317,3.247,0.395,4.889,0.242c1-0.094,1.982-0.268,2.952-0.529 c0.04-0.01,0.081-0.018,0.128-0.028c0,1.526,0,3.047,0,4.586c-0.402,0.074-0.805,0.154-1.21,0.221 c-0.861,0.14-1.728,0.231-2.601,0.258c-0.035,0.002-0.071,0.013-0.108,0.021c-0.493,0-0.983,0-1.476,0 c-0.049-0.007-0.1-0.018-0.149-0.022c-0.315-0.019-0.629-0.033-0.945-0.058c-1.362-0.105-2.702-0.346-4.017-0.716 c-3.254-0.914-6.145-2.495-8.66-4.752c-2.195-1.971-3.926-4.29-5.176-6.963c-1.152-2.466-1.822-5.057-1.993-7.774 c-0.014-0.226-0.033-0.451-0.05-0.676c0-0.502,0-1.003,0-1.504c0.008-0.049,0.02-0.099,0.022-0.148 c0.036-1.025,0.152-2.043,0.338-3.052c0.481-2.616,1.409-5.066,2.8-7.331c2.226-3.625,5.25-6.386,9.074-8.254 c2.536-1.24,5.217-1.947,8.037-2.126c0.23-0.015,0.461-0.034,0.691-0.051C33.052,10.292,33.535,10.292,34.019,10.292z',
});
/* harmony default export */ __webpack_exports__["default"] = (WorkplaceIcon);


/***/ }),

/***/ "./node_modules/react-share/es/WorkplaceShareButton.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-share/es/WorkplaceShareButton.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/assert */ "./node_modules/react-share/es/utils/assert.js");
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hocs/createShareButton */ "./node_modules/react-share/es/hocs/createShareButton.js");



function workplaceLink(url, _a) {
    var quote = _a.quote, hashtag = _a.hashtag;
    Object(_utils_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(url, 'workplace.url');
    return ('https://work.facebook.com/sharer.php' +
        Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
            u: url,
            quote: quote,
            hashtag: hashtag,
        }));
}
var WorkplaceShareButton = Object(_hocs_createShareButton__WEBPACK_IMPORTED_MODULE_2__["default"])('workplace', workplaceLink, function (props) { return ({
    quote: props.quote,
    hashtag: props.hashtag,
}); }, {
    windowWidth: 550,
    windowHeight: 400,
});
/* harmony default export */ __webpack_exports__["default"] = (WorkplaceShareButton);


/***/ }),

/***/ "./node_modules/react-share/es/hocs/createIcon.js":
/*!********************************************************!*\
  !*** ./node_modules/react-share/es/hocs/createIcon.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

function createIcon(iconConfig) {
    var Icon = function (_a) {
        var bgStyle = _a.bgStyle, borderRadius = _a.borderRadius, iconFillColor = _a.iconFillColor, round = _a.round, size = _a.size, rest = __rest(_a, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", __assign({ viewBox: "0 0 64 64", width: size, height: size }, rest),
            round ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", { cx: "32", cy: "32", r: "31", fill: iconConfig.color, style: bgStyle })) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { width: "64", height: "64", rx: borderRadius, ry: borderRadius, fill: iconConfig.color, style: bgStyle })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: iconConfig.path, fill: iconFillColor })));
    };
    Icon.defaultProps = {
        bgStyle: {},
        borderRadius: 0,
        iconFillColor: 'white',
        size: 64,
    };
    return Icon;
}


/***/ }),

/***/ "./node_modules/react-share/es/hocs/createShareButton.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-share/es/hocs/createShareButton.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ShareButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ShareButton */ "./node_modules/react-share/es/ShareButton.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


function createShareButton(networkName, link, optsMap, defaultProps) {
    function CreatedButton(props, ref) {
        var opts = optsMap(props);
        var passedProps = __assign({}, props);
        // remove keys from passed props that are passed as opts
        var optsKeys = Object.keys(opts);
        optsKeys.forEach(function (key) {
            delete passedProps[key];
        });
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShareButton__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({}, defaultProps, passedProps, { forwardedRef: ref, networkName: networkName, networkLink: link, opts: optsMap(props) })));
    }
    CreatedButton.displayName = "ShareButton-" + networkName;
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(CreatedButton);
}
/* harmony default export */ __webpack_exports__["default"] = (createShareButton);


/***/ }),

/***/ "./node_modules/react-share/es/hocs/createShareCount.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-share/es/hocs/createShareCount.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createShareCount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


var defaultChildren = function (shareCount) { return shareCount; };
var SocialMediaShareCount = /** @class */ (function (_super) {
    __extends(SocialMediaShareCount, _super);
    function SocialMediaShareCount(props) {
        var _this = _super.call(this, props) || this;
        _this._isMounted = false;
        _this.state = { count: 0, isLoading: false };
        return _this;
    }
    SocialMediaShareCount.prototype.componentDidMount = function () {
        this._isMounted = true;
        this.updateCount(this.props.url);
    };
    SocialMediaShareCount.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.url !== prevProps.url) {
            this.updateCount(this.props.url);
        }
    };
    SocialMediaShareCount.prototype.componentWillUnmount = function () {
        this._isMounted = false;
    };
    SocialMediaShareCount.prototype.updateCount = function (url) {
        var _this = this;
        this.setState({
            isLoading: true,
        });
        this.props.getCount(url, function (count) {
            if (_this._isMounted) {
                _this.setState({
                    count: count,
                    isLoading: false,
                });
            }
        });
    };
    SocialMediaShareCount.prototype.render = function () {
        var _a = this.state, count = _a.count, isLoading = _a.isLoading;
        var _b = this.props, _c = _b.children, children = _c === void 0 ? defaultChildren : _c, className = _b.className, _ = _b.getCount, rest = __rest(_b, ["children", "className", "getCount"]);
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", __assign({ className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('react-share__ShareCount', className) }, rest), !isLoading && count !== undefined && children(count)));
    };
    return SocialMediaShareCount;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
function createShareCount(getCount) {
    var ShareCount = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SocialMediaShareCount, __assign({ getCount: getCount }, props))); };
    ShareCount.displayName = "ShareCount(" + getCount.name + ")";
    return ShareCount;
}


/***/ }),

/***/ "./node_modules/react-share/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-share/es/index.js ***!
  \**********************************************/
/*! exports provided: EmailIcon, EmailShareButton, FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton, FacebookShareButton, FacebookShareCount, HatenaIcon, HatenaShareButton, HatenaShareCount, InstapaperIcon, InstapaperShareButton, LineIcon, LineShareButton, LinkedinIcon, LinkedinShareButton, LivejournalIcon, LivejournalShareButton, MailruIcon, MailruShareButton, OKIcon, OKShareButton, OKShareCount, PinterestIcon, PinterestShareButton, PinterestShareCount, PocketIcon, PocketShareButton, RedditIcon, RedditShareButton, RedditShareCount, TelegramIcon, TelegramShareButton, TumblrIcon, TumblrShareButton, TumblrShareCount, TwitterIcon, TwitterShareButton, ViberIcon, ViberShareButton, VKIcon, VKShareButton, VKShareCount, WeiboIcon, WeiboShareButton, WhatsappIcon, WhatsappShareButton, WorkplaceIcon, WorkplaceShareButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailIcon */ "./node_modules/react-share/es/EmailIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailIcon", function() { return _EmailIcon__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _EmailShareButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailShareButton */ "./node_modules/react-share/es/EmailShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailShareButton", function() { return _EmailShareButton__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _FacebookIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FacebookIcon */ "./node_modules/react-share/es/FacebookIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookIcon", function() { return _FacebookIcon__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _FacebookMessengerIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FacebookMessengerIcon */ "./node_modules/react-share/es/FacebookMessengerIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookMessengerIcon", function() { return _FacebookMessengerIcon__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _FacebookMessengerShareButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FacebookMessengerShareButton */ "./node_modules/react-share/es/FacebookMessengerShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookMessengerShareButton", function() { return _FacebookMessengerShareButton__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _FacebookShareButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FacebookShareButton */ "./node_modules/react-share/es/FacebookShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookShareButton", function() { return _FacebookShareButton__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _FacebookShareCount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FacebookShareCount */ "./node_modules/react-share/es/FacebookShareCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookShareCount", function() { return _FacebookShareCount__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _HatenaIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HatenaIcon */ "./node_modules/react-share/es/HatenaIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HatenaIcon", function() { return _HatenaIcon__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _HatenaShareButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HatenaShareButton */ "./node_modules/react-share/es/HatenaShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HatenaShareButton", function() { return _HatenaShareButton__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _HatenaShareCount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HatenaShareCount */ "./node_modules/react-share/es/HatenaShareCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HatenaShareCount", function() { return _HatenaShareCount__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _InstapaperIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InstapaperIcon */ "./node_modules/react-share/es/InstapaperIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InstapaperIcon", function() { return _InstapaperIcon__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _InstapaperShareButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./InstapaperShareButton */ "./node_modules/react-share/es/InstapaperShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InstapaperShareButton", function() { return _InstapaperShareButton__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _LineIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LineIcon */ "./node_modules/react-share/es/LineIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineIcon", function() { return _LineIcon__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _LineShareButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./LineShareButton */ "./node_modules/react-share/es/LineShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineShareButton", function() { return _LineShareButton__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _LinkedinIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./LinkedinIcon */ "./node_modules/react-share/es/LinkedinIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedinIcon", function() { return _LinkedinIcon__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _LinkedinShareButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./LinkedinShareButton */ "./node_modules/react-share/es/LinkedinShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedinShareButton", function() { return _LinkedinShareButton__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _LivejournalIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LivejournalIcon */ "./node_modules/react-share/es/LivejournalIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivejournalIcon", function() { return _LivejournalIcon__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _LivejournalShareButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./LivejournalShareButton */ "./node_modules/react-share/es/LivejournalShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivejournalShareButton", function() { return _LivejournalShareButton__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _MailruIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./MailruIcon */ "./node_modules/react-share/es/MailruIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MailruIcon", function() { return _MailruIcon__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _MailruShareButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./MailruShareButton */ "./node_modules/react-share/es/MailruShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MailruShareButton", function() { return _MailruShareButton__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _OKIcon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./OKIcon */ "./node_modules/react-share/es/OKIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OKIcon", function() { return _OKIcon__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _OKShareButton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./OKShareButton */ "./node_modules/react-share/es/OKShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OKShareButton", function() { return _OKShareButton__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _OKShareCount__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./OKShareCount */ "./node_modules/react-share/es/OKShareCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OKShareCount", function() { return _OKShareCount__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _PinterestIcon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./PinterestIcon */ "./node_modules/react-share/es/PinterestIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PinterestIcon", function() { return _PinterestIcon__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _PinterestShareButton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./PinterestShareButton */ "./node_modules/react-share/es/PinterestShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PinterestShareButton", function() { return _PinterestShareButton__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _PinterestShareCount__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./PinterestShareCount */ "./node_modules/react-share/es/PinterestShareCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PinterestShareCount", function() { return _PinterestShareCount__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _PocketIcon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./PocketIcon */ "./node_modules/react-share/es/PocketIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PocketIcon", function() { return _PocketIcon__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _PocketShareButton__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./PocketShareButton */ "./node_modules/react-share/es/PocketShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PocketShareButton", function() { return _PocketShareButton__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _RedditIcon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./RedditIcon */ "./node_modules/react-share/es/RedditIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RedditIcon", function() { return _RedditIcon__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _RedditShareButton__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./RedditShareButton */ "./node_modules/react-share/es/RedditShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RedditShareButton", function() { return _RedditShareButton__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _RedditShareCount__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./RedditShareCount */ "./node_modules/react-share/es/RedditShareCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RedditShareCount", function() { return _RedditShareCount__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _TelegramIcon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./TelegramIcon */ "./node_modules/react-share/es/TelegramIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TelegramIcon", function() { return _TelegramIcon__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _TelegramShareButton__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./TelegramShareButton */ "./node_modules/react-share/es/TelegramShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TelegramShareButton", function() { return _TelegramShareButton__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _TumblrIcon__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./TumblrIcon */ "./node_modules/react-share/es/TumblrIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TumblrIcon", function() { return _TumblrIcon__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _TumblrShareButton__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./TumblrShareButton */ "./node_modules/react-share/es/TumblrShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TumblrShareButton", function() { return _TumblrShareButton__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _TumblrShareCount__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./TumblrShareCount */ "./node_modules/react-share/es/TumblrShareCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TumblrShareCount", function() { return _TumblrShareCount__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _TwitterIcon__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./TwitterIcon */ "./node_modules/react-share/es/TwitterIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TwitterIcon", function() { return _TwitterIcon__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _TwitterShareButton__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./TwitterShareButton */ "./node_modules/react-share/es/TwitterShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TwitterShareButton", function() { return _TwitterShareButton__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _ViberIcon__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./ViberIcon */ "./node_modules/react-share/es/ViberIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViberIcon", function() { return _ViberIcon__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _ViberShareButton__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./ViberShareButton */ "./node_modules/react-share/es/ViberShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViberShareButton", function() { return _ViberShareButton__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _VKIcon__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./VKIcon */ "./node_modules/react-share/es/VKIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VKIcon", function() { return _VKIcon__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _VKShareButton__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./VKShareButton */ "./node_modules/react-share/es/VKShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VKShareButton", function() { return _VKShareButton__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _VKShareCount__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./VKShareCount */ "./node_modules/react-share/es/VKShareCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VKShareCount", function() { return _VKShareCount__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _WeiboIcon__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./WeiboIcon */ "./node_modules/react-share/es/WeiboIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeiboIcon", function() { return _WeiboIcon__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _WeiboShareButton__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./WeiboShareButton */ "./node_modules/react-share/es/WeiboShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeiboShareButton", function() { return _WeiboShareButton__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _WhatsappIcon__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./WhatsappIcon */ "./node_modules/react-share/es/WhatsappIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WhatsappIcon", function() { return _WhatsappIcon__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _WhatsappShareButton__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./WhatsappShareButton */ "./node_modules/react-share/es/WhatsappShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WhatsappShareButton", function() { return _WhatsappShareButton__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony import */ var _WorkplaceIcon__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./WorkplaceIcon */ "./node_modules/react-share/es/WorkplaceIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkplaceIcon", function() { return _WorkplaceIcon__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _WorkplaceShareButton__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./WorkplaceShareButton */ "./node_modules/react-share/es/WorkplaceShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkplaceShareButton", function() { return _WorkplaceShareButton__WEBPACK_IMPORTED_MODULE_48__["default"]; });




















































/***/ }),

/***/ "./node_modules/react-share/es/utils/assert.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-share/es/utils/assert.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return assert; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AssertionError = /** @class */ (function (_super) {
    __extends(AssertionError, _super);
    function AssertionError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'AssertionError';
        return _this;
    }
    return AssertionError;
}(Error));
function assert(value, message) {
    if (!value) {
        throw new AssertionError(message);
    }
}


/***/ }),

/***/ "./node_modules/react-share/es/utils/objectToGetParams.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-share/es/utils/objectToGetParams.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return objectToGetParams; });
function objectToGetParams(object) {
    var params = Object.entries(object)
        .filter(function (_a) {
        var value = _a[1];
        return value !== undefined && value !== null;
    })
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return encodeURIComponent(key) + "=" + encodeURIComponent(String(value));
    });
    return params.length > 0 ? "?" + params.join('&') : '';
}


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2RlYnVnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvanNvbnAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL0VtYWlsSWNvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL0VtYWlsU2hhcmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9GYWNlYm9va0ljb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9GYWNlYm9va01lc3Nlbmdlckljb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9GYWNlYm9va01lc3NlbmdlclNoYXJlQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvRmFjZWJvb2tTaGFyZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL0ZhY2Vib29rU2hhcmVDb3VudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL0hhdGVuYUljb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9IYXRlbmFTaGFyZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL0hhdGVuYVNoYXJlQ291bnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9JbnN0YXBhcGVySWNvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL0luc3RhcGFwZXJTaGFyZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL0xpbmVJY29uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvTGluZVNoYXJlQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvTGlua2VkaW5JY29uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvTGlua2VkaW5TaGFyZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL0xpdmVqb3VybmFsSWNvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL0xpdmVqb3VybmFsU2hhcmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9NYWlscnVJY29uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvTWFpbHJ1U2hhcmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9PS0ljb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9PS1NoYXJlQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvT0tTaGFyZUNvdW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvUGludGVyZXN0SWNvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1BpbnRlcmVzdFNoYXJlQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvUGludGVyZXN0U2hhcmVDb3VudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1BvY2tldEljb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9Qb2NrZXRTaGFyZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1JlZGRpdEljb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9SZWRkaXRTaGFyZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1JlZGRpdFNoYXJlQ291bnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9TaGFyZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1RlbGVncmFtSWNvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1RlbGVncmFtU2hhcmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9UdW1ibHJJY29uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvVHVtYmxyU2hhcmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9UdW1ibHJTaGFyZUNvdW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvVHdpdHRlckljb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9Ud2l0dGVyU2hhcmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9WS0ljb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9WS1NoYXJlQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvVktTaGFyZUNvdW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvVmliZXJJY29uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvVmliZXJTaGFyZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1dlaWJvSWNvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1dlaWJvU2hhcmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9XaGF0c2FwcEljb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9XaGF0c2FwcFNoYXJlQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvV29ya3BsYWNlSWNvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1dvcmtwbGFjZVNoYXJlQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvaG9jcy9jcmVhdGVJY29uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvaG9jcy9jcmVhdGVTaGFyZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL2hvY3MvY3JlYXRlU2hhcmVDb3VudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvdXRpbHMvYXNzZXJ0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMuanMiXSwibmFtZXMiOlsiU2lkZWJhciIsInNob3dTdGF0Iiwic2V0U2hvd1N0YXQiLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInNpZGViYXJSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInNjcmVlbiIsIndpZHRoIiwiY3VycmVudCIsInN0eWxlIiwiZGlzcGxheSIsInRvZ2dsZVNob3ciLCJzaWRlYmFyIiwibGVuZ3RoIiwic3R5bGVzIiwidG9nZ2xlQnV0dG9uIiwiY2xhc3NOYW1lIiwic2lkZWJhclRvZ2dsZUljb24iLCJjb2xvciIsInNpemUiLCJzaWRlYmFyVG9nZ2xlSWNvbkNsb3NlIiwic2lkZWJhckxvZ28iLCJwYXRobmFtZSIsInNpZGViYXJMaW5rQWN0aXZlIiwic2lkZWJhckxpbmsiLCJzaWRlYmFyTGlua0ljb24iLCJwb2xpY2llcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FB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Q0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2M7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC4yMzZkNDU4ODg2NTE0NTM0ZTM1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuLy9JY29uc1xyXG5pbXBvcnQgeyBHaVZvdGUsIEdpQ3Jvc3NlZFN3b3JkcyB9IGZyb20gJ3JlYWN0LWljb25zL2dpJztcclxuaW1wb3J0IHsgSW1Ib21lMywgSW1TdGF0c0JhcnMgfSBmcm9tICdyZWFjdC1pY29ucy9pbSc7XHJcbmltcG9ydCB7IEZhQ2hhcnRQaWUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IEljb25Db250ZXh0IH0gZnJvbSAncmVhY3QtaWNvbnMnO1xyXG5pbXBvcnQgeyBCaU1lbnUgfSBmcm9tICdyZWFjdC1pY29ucy9iaSc7XHJcbmltcG9ydCB7IE1kQ2xvc2UsIE1kQ29udGFjdHMgfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEVtYWlsU2hhcmVCdXR0b24sXHJcbiAgRmFjZWJvb2tTaGFyZUJ1dHRvbixcclxuICBIYXRlbmFTaGFyZUJ1dHRvbixcclxuICBJbnN0YXBhcGVyU2hhcmVCdXR0b24sXHJcbiAgTGluZVNoYXJlQnV0dG9uLFxyXG4gIExpbmtlZGluU2hhcmVCdXR0b24sXHJcbiAgTGl2ZWpvdXJuYWxTaGFyZUJ1dHRvbixcclxuICBNYWlscnVTaGFyZUJ1dHRvbixcclxuICBPS1NoYXJlQnV0dG9uLFxyXG4gIFBpbnRlcmVzdFNoYXJlQnV0dG9uLFxyXG4gIFBvY2tldFNoYXJlQnV0dG9uLFxyXG4gIFJlZGRpdFNoYXJlQnV0dG9uLFxyXG4gIFRlbGVncmFtU2hhcmVCdXR0b24sXHJcbiAgVHVtYmxyU2hhcmVCdXR0b24sXHJcbiAgVHdpdHRlclNoYXJlQnV0dG9uLFxyXG4gIFZpYmVyU2hhcmVCdXR0b24sXHJcbiAgVktTaGFyZUJ1dHRvbixcclxuICBXaGF0c2FwcFNoYXJlQnV0dG9uLFxyXG4gIFdvcmtwbGFjZVNoYXJlQnV0dG9uLFxyXG59IGZyb20gJ3JlYWN0LXNoYXJlJztcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dTdGF0LCBzZXRTaG93U3RhdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHNpZGViYXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5zY3JlZW4ud2lkdGgsIHR5cGVvZiB3aW5kb3cuc2NyZWVuLndpZHRoKTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHdpbmRvdy5zY3JlZW4ud2lkdGggPj0gNzY4ICYmXHJcbiAgICAgICAgc2lkZWJhclJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJ1xyXG4gICAgICApIHtcclxuICAgICAgICBzaWRlYmFyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICBzZXRTaG93U3RhdCh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNob3cgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93U3RhdCghc2hvd1N0YXQpO1xyXG4gICAgbGV0IHNpZGViYXIgPSBzaWRlYmFyUmVmLmN1cnJlbnQ7XHJcbiAgICBpZiAoc2lkZWJhci5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgfHwgc2lkZWJhci5zdHlsZS5kaXNwbGF5Lmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVTaG93fSBjbGFzc05hbWU9e3N0eWxlcy50b2dnbGVCdXR0b259PlxyXG4gICAgICAgIHshc2hvd1N0YXQgPyAoXHJcbiAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICBjbGFzc05hbWU6IHN0eWxlcy5zaWRlYmFyVG9nZ2xlSWNvbixcclxuICAgICAgICAgICAgICBjb2xvcjogJyM0ZDQ3NDknLFxyXG4gICAgICAgICAgICAgIHNpemU6IDM2LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8QmlNZW51IC8+XHJcbiAgICAgICAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICBjbGFzc05hbWU6IHN0eWxlcy5zaWRlYmFyVG9nZ2xlSWNvbkNsb3NlLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzRkNDc0OScsXHJcbiAgICAgICAgICAgICAgc2l6ZTogMzYsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZENsb3NlIC8+XHJcbiAgICAgICAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8ZGl2IHJlZj17c2lkZWJhclJlZn0gY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcn0+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiL2xvZ28ucG5nXCJcclxuICAgICAgICAgIGhlaWdodD17NzV9XHJcbiAgICAgICAgICB3aWR0aD17NzV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyTG9nb31cclxuICAgICAgICAgIGFsdD1cIkxvZ29cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBleGFjdD5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSAnLydcclxuICAgICAgICAgICAgICAgID8gc3R5bGVzLnNpZGViYXJMaW5rQWN0aXZlXHJcbiAgICAgICAgICAgICAgICA6IHN0eWxlcy5zaWRlYmFyTGlua1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjbGFzc05hbWU6IHN0eWxlcy5zaWRlYmFyTGlua0ljb24gfX0+XHJcbiAgICAgICAgICAgICAgPEltSG9tZTMgLz5cclxuICAgICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgJm5ic3A7Jm5ic3A7PGxhYmVsPkhvbWU8L2xhYmVsPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL292ZXJ2aWV3XCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gJy9vdmVydmlldydcclxuICAgICAgICAgICAgICAgID8gc3R5bGVzLnNpZGViYXJMaW5rQWN0aXZlXHJcbiAgICAgICAgICAgICAgICA6IHN0eWxlcy5zaWRlYmFyTGlua1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjbGFzc05hbWU6IHN0eWxlcy5zaWRlYmFyTGlua0ljb24gfX0+XHJcbiAgICAgICAgICAgICAgPEltU3RhdHNCYXJzIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICZuYnNwOyZuYnNwOzxsYWJlbD5PdmVydmlldzwvbGFiZWw+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvdm90ZVwiPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09ICcvdm90ZSdcclxuICAgICAgICAgICAgICAgID8gc3R5bGVzLnNpZGViYXJMaW5rQWN0aXZlXHJcbiAgICAgICAgICAgICAgICA6IHN0eWxlcy5zaWRlYmFyTGlua1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjbGFzc05hbWU6IHN0eWxlcy5zaWRlYmFyTGlua0ljb24gfX0+XHJcbiAgICAgICAgICAgICAgPEdpVm90ZSAvPlxyXG4gICAgICAgICAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICAmbmJzcDsmbmJzcDs8bGFiZWw+Vm90ZTwvbGFiZWw+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY2hhcnRzXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gJy9jaGFydHMnXHJcbiAgICAgICAgICAgICAgICA/IHN0eWxlcy5zaWRlYmFyTGlua0FjdGl2ZVxyXG4gICAgICAgICAgICAgICAgOiBzdHlsZXMuc2lkZWJhckxpbmtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY2xhc3NOYW1lOiBzdHlsZXMuc2lkZWJhckxpbmtJY29uIH19PlxyXG4gICAgICAgICAgICAgIDxGYUNoYXJ0UGllIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICZuYnNwOyZuYnNwOzxsYWJlbD5DaGFydHM8L2xhYmVsPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL2JhdHRsZWdyb3VuZFwiPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09ICcvYmF0dGxlZ3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgPyBzdHlsZXMuc2lkZWJhckxpbmtBY3RpdmVcclxuICAgICAgICAgICAgICAgIDogc3R5bGVzLnNpZGViYXJMaW5rXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNsYXNzTmFtZTogc3R5bGVzLnNpZGViYXJMaW5rSWNvbiB9fT5cclxuICAgICAgICAgICAgICA8R2lDcm9zc2VkU3dvcmRzIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICZuYnNwOyZuYnNwOzxsYWJlbD5CYXR0bGVHcm91bmQ8L2xhYmVsPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gJy9hYm91dCdcclxuICAgICAgICAgICAgICAgID8gc3R5bGVzLnNpZGViYXJMaW5rQWN0aXZlXHJcbiAgICAgICAgICAgICAgICA6IHN0eWxlcy5zaWRlYmFyTGlua1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjbGFzc05hbWU6IHN0eWxlcy5zaWRlYmFyTGlua0ljb24gfX0+XHJcbiAgICAgICAgICAgICAgPE1kQ29udGFjdHMgLz5cclxuICAgICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgJm5ic3A7Jm5ic3A7PGxhYmVsPkFib3V0IFVzPC9sYWJlbD5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgIDxFbWFpbFNoYXJlQnV0dG9uIC8+XHJcbiAgICAgICAgPEZhY2Vib29rU2hhcmVCdXR0b24gLz5cclxuICAgICAgICA8VHdpdHRlclNoYXJlQnV0dG9uIC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucG9saWNpZXN9PlxyXG4gICAgICAgICAgQXBweVZvdGUgaXMgbm90IGFmZmlsaWF0ZWQgd2l0aCBhbnkgcG9saXRpY2FsIHBhcnR5LCBjYW5kaWRhdGUgb3JcclxuICAgICAgICAgIGludGVyZXN0IGdyb3VwLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcclxuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGVidWcnKTtcbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lXG4gICAgICAgICAgICAgICAmJiAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lLnN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgID8gY2hyb21lLnN0b3JhZ2UubG9jYWxcbiAgICAgICAgICAgICAgICAgIDogbG9jYWxzdG9yYWdlKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuICAnbGlnaHRzZWFncmVlbicsXG4gICdmb3Jlc3RncmVlbicsXG4gICdnb2xkZW5yb2QnLFxuICAnZG9kZ2VyYmx1ZScsXG4gICdkYXJrb3JjaGlkJyxcbiAgJ2NyaW1zb24nXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcbiAgLy8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuICAvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuICAvLyBleHBsaWNpdGx5XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiB3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBpcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuICAvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuICByZXR1cm4gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSkgfHxcbiAgICAvLyBpcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG4gICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8ICh3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpKSkgfHxcbiAgICAvLyBpcyBmaXJlZm94ID49IHYzMT9cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcbiAgICAvLyBkb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pKTtcbn1cblxuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbih2KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyLm1lc3NhZ2U7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcbiAgdmFyIHVzZUNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXG4gIGFyZ3NbMF0gPSAodXNlQ29sb3JzID8gJyVjJyA6ICcnKVxuICAgICsgdGhpcy5uYW1lc3BhY2VcbiAgICArICh1c2VDb2xvcnMgPyAnICVjJyA6ICcgJylcbiAgICArIGFyZ3NbMF1cbiAgICArICh1c2VDb2xvcnMgPyAnJWMgJyA6ICcgJylcbiAgICArICcrJyArIGV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuICBpZiAoIXVzZUNvbG9ycykgcmV0dXJuO1xuXG4gIHZhciBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcbiAgYXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0JylcblxuICAvLyB0aGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuICAvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG4gIC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGFzdEMgPSAwO1xuICBhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICBpZiAoJyUlJyA9PT0gbWF0Y2gpIHJldHVybjtcbiAgICBpbmRleCsrO1xuICAgIGlmICgnJWMnID09PSBtYXRjaCkge1xuICAgICAgLy8gd2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG4gICAgICAvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuICAgICAgbGFzdEMgPSBpbmRleDtcbiAgICB9XG4gIH0pO1xuXG4gIGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmxvZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUubG9nYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBsb2coKSB7XG4gIC8vIHRoaXMgaGFja2VyeSBpcyByZXF1aXJlZCBmb3IgSUU4LzksIHdoZXJlXG4gIC8vIHRoZSBgY29uc29sZS5sb2dgIGZ1bmN0aW9uIGRvZXNuJ3QgaGF2ZSAnYXBwbHknXG4gIHJldHVybiAnb2JqZWN0JyA9PT0gdHlwZW9mIGNvbnNvbGVcbiAgICAmJiBjb25zb2xlLmxvZ1xuICAgICYmIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGUubG9nLCBjb25zb2xlLCBhcmd1bWVudHMpO1xufVxuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcbiAgdHJ5IHtcbiAgICBpZiAobnVsbCA9PSBuYW1lc3BhY2VzKSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLmRlYnVnID0gbmFtZXNwYWNlcztcbiAgICB9XG4gIH0gY2F0Y2goZSkge31cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2FkKCkge1xuICB2YXIgcjtcbiAgdHJ5IHtcbiAgICByID0gZXhwb3J0cy5zdG9yYWdlLmRlYnVnO1xuICB9IGNhdGNoKGUpIHt9XG5cbiAgLy8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuICBpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcbiAgICByID0gcHJvY2Vzcy5lbnYuREVCVUc7XG4gIH1cblxuICByZXR1cm4gcjtcbn1cblxuLyoqXG4gKiBFbmFibGUgbmFtZXNwYWNlcyBsaXN0ZWQgaW4gYGxvY2FsU3RvcmFnZS5kZWJ1Z2AgaW5pdGlhbGx5LlxuICovXG5cbmV4cG9ydHMuZW5hYmxlKGxvYWQoKSk7XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuICB0cnkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICB9IGNhdGNoIChlKSB7fVxufVxuIiwiXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWdbJ2RlZmF1bHQnXSA9IGNyZWF0ZURlYnVnO1xuZXhwb3J0cy5jb2VyY2UgPSBjb2VyY2U7XG5leHBvcnRzLmRpc2FibGUgPSBkaXNhYmxlO1xuZXhwb3J0cy5lbmFibGUgPSBlbmFibGU7XG5leHBvcnRzLmVuYWJsZWQgPSBlbmFibGVkO1xuZXhwb3J0cy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cbi8qKlxuICogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG4gKi9cblxuZXhwb3J0cy5uYW1lcyA9IFtdO1xuZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4vKipcbiAqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cbiAqXG4gKiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzID0ge307XG5cbi8qKlxuICogUHJldmlvdXMgbG9nIHRpbWVzdGFtcC5cbiAqL1xuXG52YXIgcHJldlRpbWU7XG5cbi8qKlxuICogU2VsZWN0IGEgY29sb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcbiAgdmFyIGhhc2ggPSAwLCBpO1xuXG4gIGZvciAoaSBpbiBuYW1lc3BhY2UpIHtcbiAgICBoYXNoICA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgfVxuXG4gIHJldHVybiBleHBvcnRzLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGV4cG9ydHMuY29sb3JzLmxlbmd0aF07XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXG4gIGZ1bmN0aW9uIGRlYnVnKCkge1xuICAgIC8vIGRpc2FibGVkP1xuICAgIGlmICghZGVidWcuZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgdmFyIHNlbGYgPSBkZWJ1ZztcblxuICAgIC8vIHNldCBgZGlmZmAgdGltZXN0YW1wXG4gICAgdmFyIGN1cnIgPSArbmV3IERhdGUoKTtcbiAgICB2YXIgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuICAgIHNlbGYuZGlmZiA9IG1zO1xuICAgIHNlbGYucHJldiA9IHByZXZUaW1lO1xuICAgIHNlbGYuY3VyciA9IGN1cnI7XG4gICAgcHJldlRpbWUgPSBjdXJyO1xuXG4gICAgLy8gdHVybiB0aGUgYGFyZ3VtZW50c2AgaW50byBhIHByb3BlciBBcnJheVxuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBhcmdzWzBdID0gZXhwb3J0cy5jb2VyY2UoYXJnc1swXSk7XG5cbiAgICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBhcmdzWzBdKSB7XG4gICAgICAvLyBhbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuICAgICAgYXJncy51bnNoaWZ0KCclTycpO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICBhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgZnVuY3Rpb24obWF0Y2gsIGZvcm1hdCkge1xuICAgICAgLy8gaWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuICAgICAgaWYgKG1hdGNoID09PSAnJSUnKSByZXR1cm4gbWF0Y2g7XG4gICAgICBpbmRleCsrO1xuICAgICAgdmFyIGZvcm1hdHRlciA9IGV4cG9ydHMuZm9ybWF0dGVyc1tmb3JtYXRdO1xuICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBmb3JtYXR0ZXIpIHtcbiAgICAgICAgdmFyIHZhbCA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICBtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cbiAgICAgICAgLy8gbm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuICAgICAgICBhcmdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGluZGV4LS07XG4gICAgICB9XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG5cbiAgICAvLyBhcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuICAgIGV4cG9ydHMuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG4gICAgdmFyIGxvZ0ZuID0gZGVidWcubG9nIHx8IGV4cG9ydHMubG9nIHx8IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7XG4gICAgbG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gIH1cblxuICBkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gIGRlYnVnLmVuYWJsZWQgPSBleHBvcnRzLmVuYWJsZWQobmFtZXNwYWNlKTtcbiAgZGVidWcudXNlQ29sb3JzID0gZXhwb3J0cy51c2VDb2xvcnMoKTtcbiAgZGVidWcuY29sb3IgPSBzZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuXG4gIC8vIGVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZXhwb3J0cy5pbml0KSB7XG4gICAgZXhwb3J0cy5pbml0KGRlYnVnKTtcbiAgfVxuXG4gIHJldHVybiBkZWJ1Zztcbn1cblxuLyoqXG4gKiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG4gKiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG4gIGV4cG9ydHMuc2F2ZShuYW1lc3BhY2VzKTtcblxuICBleHBvcnRzLm5hbWVzID0gW107XG4gIGV4cG9ydHMuc2tpcHMgPSBbXTtcblxuICB2YXIgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuICB2YXIgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIXNwbGl0W2ldKSBjb250aW51ZTsgLy8gaWdub3JlIGVtcHR5IHN0cmluZ3NcbiAgICBuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcbiAgICBpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG4gICAgICBleHBvcnRzLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBkaXNhYmxlKCkge1xuICBleHBvcnRzLmVuYWJsZSgnJyk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcbiAgdmFyIGksIGxlbjtcbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ29lcmNlIGB2YWxgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcbiAgcmV0dXJuIHZhbDtcbn1cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5cbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ2pzb25wJyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBqc29ucDtcblxuLyoqXG4gKiBDYWxsYmFjayBpbmRleC5cbiAqL1xuXG52YXIgY291bnQgPSAwO1xuXG4vKipcbiAqIE5vb3AgZnVuY3Rpb24uXG4gKi9cblxuZnVuY3Rpb24gbm9vcCgpe31cblxuLyoqXG4gKiBKU09OUCBoYW5kbGVyXG4gKlxuICogT3B0aW9uczpcbiAqICAtIHBhcmFtIHtTdHJpbmd9IHFzIHBhcmFtZXRlciAoYGNhbGxiYWNrYClcbiAqICAtIHByZWZpeCB7U3RyaW5nfSBxcyBwYXJhbWV0ZXIgKGBfX2pwYClcbiAqICAtIG5hbWUge1N0cmluZ30gcXMgcGFyYW1ldGVyIChgcHJlZml4YCArIGluY3IpXG4gKiAgLSB0aW1lb3V0IHtOdW1iZXJ9IGhvdyBsb25nIGFmdGVyIGEgdGltZW91dCBlcnJvciBpcyBlbWl0dGVkIChgNjAwMDBgKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7T2JqZWN0fEZ1bmN0aW9ufSBvcHRpb25hbCBvcHRpb25zIC8gY2FsbGJhY2tcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbmFsIGNhbGxiYWNrXG4gKi9cblxuZnVuY3Rpb24ganNvbnAodXJsLCBvcHRzLCBmbil7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBvcHRzKSB7XG4gICAgZm4gPSBvcHRzO1xuICAgIG9wdHMgPSB7fTtcbiAgfVxuICBpZiAoIW9wdHMpIG9wdHMgPSB7fTtcblxuICB2YXIgcHJlZml4ID0gb3B0cy5wcmVmaXggfHwgJ19fanAnO1xuXG4gIC8vIHVzZSB0aGUgY2FsbGJhY2sgbmFtZSB0aGF0IHdhcyBwYXNzZWQgaWYgb25lIHdhcyBwcm92aWRlZC5cbiAgLy8gb3RoZXJ3aXNlIGdlbmVyYXRlIGEgdW5pcXVlIG5hbWUgYnkgaW5jcmVtZW50aW5nIG91ciBjb3VudGVyLlxuICB2YXIgaWQgPSBvcHRzLm5hbWUgfHwgKHByZWZpeCArIChjb3VudCsrKSk7XG5cbiAgdmFyIHBhcmFtID0gb3B0cy5wYXJhbSB8fCAnY2FsbGJhY2snO1xuICB2YXIgdGltZW91dCA9IG51bGwgIT0gb3B0cy50aW1lb3V0ID8gb3B0cy50aW1lb3V0IDogNjAwMDA7XG4gIHZhciBlbmMgPSBlbmNvZGVVUklDb21wb25lbnQ7XG4gIHZhciB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF0gfHwgZG9jdW1lbnQuaGVhZDtcbiAgdmFyIHNjcmlwdDtcbiAgdmFyIHRpbWVyO1xuXG5cbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGNsZWFudXAoKTtcbiAgICAgIGlmIChmbikgZm4obmV3IEVycm9yKCdUaW1lb3V0JykpO1xuICAgIH0sIHRpbWVvdXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cCgpe1xuICAgIGlmIChzY3JpcHQucGFyZW50Tm9kZSkgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICB3aW5kb3dbaWRdID0gbm9vcDtcbiAgICBpZiAodGltZXIpIGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKXtcbiAgICBpZiAod2luZG93W2lkXSkge1xuICAgICAgY2xlYW51cCgpO1xuICAgIH1cbiAgfVxuXG4gIHdpbmRvd1tpZF0gPSBmdW5jdGlvbihkYXRhKXtcbiAgICBkZWJ1ZygnanNvbnAgZ290JywgZGF0YSk7XG4gICAgY2xlYW51cCgpO1xuICAgIGlmIChmbikgZm4obnVsbCwgZGF0YSk7XG4gIH07XG5cbiAgLy8gYWRkIHFzIGNvbXBvbmVudFxuICB1cmwgKz0gKH51cmwuaW5kZXhPZignPycpID8gJyYnIDogJz8nKSArIHBhcmFtICsgJz0nICsgZW5jKGlkKTtcbiAgdXJsID0gdXJsLnJlcGxhY2UoJz8mJywgJz8nKTtcblxuICBkZWJ1ZygnanNvbnAgcmVxIFwiJXNcIicsIHVybCk7XG5cbiAgLy8gY3JlYXRlIHNjcmlwdFxuICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgc2NyaXB0LnNyYyA9IHVybDtcbiAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNjcmlwdCwgdGFyZ2V0KTtcblxuICByZXR1cm4gY2FuY2VsO1xufVxuIiwiLyoqXG4gKiBIZWxwZXJzLlxuICovXG5cbnZhciBzID0gMTAwMDtcbnZhciBtID0gcyAqIDYwO1xudmFyIGggPSBtICogNjA7XG52YXIgZCA9IGggKiAyNDtcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKCg/OlxcZCspP1xcLj9cXGQrKSAqKG1pbGxpc2Vjb25kcz98bXNlY3M/fG1zfHNlY29uZHM/fHNlY3M/fHN8bWludXRlcz98bWlucz98bXxob3Vycz98aHJzP3xofGRheXM/fGR8eWVhcnM/fHlycz98eSk/JC9pLmV4ZWMoXG4gICAgc3RyXG4gICk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG4gPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgdmFyIHR5cGUgPSAobWF0Y2hbMl0gfHwgJ21zJykudG9Mb3dlckNhc2UoKTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAneWVhcnMnOlxuICAgIGNhc2UgJ3llYXInOlxuICAgIGNhc2UgJ3lycyc6XG4gICAgY2FzZSAneXInOlxuICAgIGNhc2UgJ3knOlxuICAgICAgcmV0dXJuIG4gKiB5O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgaWYgKG1zID49IGQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGQpICsgJ2QnO1xuICB9XG4gIGlmIChtcyA+PSBoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBoKSArICdoJztcbiAgfVxuICBpZiAobXMgPj0gbSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbSkgKyAnbSc7XG4gIH1cbiAgaWYgKG1zID49IHMpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIHMpICsgJ3MnO1xuICB9XG4gIHJldHVybiBtcyArICdtcyc7XG59XG5cbi8qKlxuICogTG9uZyBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRMb25nKG1zKSB7XG4gIHJldHVybiBwbHVyYWwobXMsIGQsICdkYXknKSB8fFxuICAgIHBsdXJhbChtcywgaCwgJ2hvdXInKSB8fFxuICAgIHBsdXJhbChtcywgbSwgJ21pbnV0ZScpIHx8XG4gICAgcGx1cmFsKG1zLCBzLCAnc2Vjb25kJykgfHxcbiAgICBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbiwgbmFtZSkge1xuICBpZiAobXMgPCBuKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChtcyA8IG4gKiAxLjUpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihtcyAvIG4pICsgJyAnICsgbmFtZTtcbiAgfVxuICByZXR1cm4gTWF0aC5jZWlsKG1zIC8gbikgKyAnICcgKyBuYW1lICsgJ3MnO1xufVxuIiwiaW1wb3J0IGNyZWF0ZUljb24gZnJvbSAnLi9ob2NzL2NyZWF0ZUljb24nO1xudmFyIEVtYWlsSWNvbiA9IGNyZWF0ZUljb24oe1xuICAgIGNvbG9yOiAnIzdmN2Y3ZicsXG4gICAgbmV0d29ya05hbWU6ICdlbWFpbCcsXG4gICAgcGF0aDogJ00xNywyMnYyMGgzMFYyMkgxN3ogTTQxLjEsMjVMMzIsMzIuMUwyMi45LDI1SDQxLjF6IE0yMCwzOVYyNi42bDEyLDkuM2wxMi05LjNWMzlIMjB6Jyxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgRW1haWxJY29uO1xuIiwiaW1wb3J0IG9iamVjdFRvR2V0UGFyYW1zIGZyb20gJy4vdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMnO1xuaW1wb3J0IGNyZWF0ZVNoYXJlQnV0dG9uIGZyb20gJy4vaG9jcy9jcmVhdGVTaGFyZUJ1dHRvbic7XG5mdW5jdGlvbiBlbWFpbExpbmsodXJsLCBfYSkge1xuICAgIHZhciBzdWJqZWN0ID0gX2Euc3ViamVjdCwgYm9keSA9IF9hLmJvZHksIHNlcGFyYXRvciA9IF9hLnNlcGFyYXRvcjtcbiAgICByZXR1cm4gJ21haWx0bzonICsgb2JqZWN0VG9HZXRQYXJhbXMoeyBzdWJqZWN0OiBzdWJqZWN0LCBib2R5OiBib2R5ID8gYm9keSArIHNlcGFyYXRvciArIHVybCA6IHVybCB9KTtcbn1cbnZhciBFbWFpbFNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oJ2VtYWlsJywgZW1haWxMaW5rLCBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuICh7XG4gICAgc3ViamVjdDogcHJvcHMuc3ViamVjdCxcbiAgICBib2R5OiBwcm9wcy5ib2R5LFxuICAgIHNlcGFyYXRvcjogcHJvcHMuc2VwYXJhdG9yIHx8ICcgJyxcbn0pOyB9LCB7XG4gICAgb3BlblNoYXJlRGlhbG9nT25DbGljazogZmFsc2UsXG4gICAgb25DbGljazogZnVuY3Rpb24gKF8sIGxpbmspIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsaW5rO1xuICAgIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IEVtYWlsU2hhcmVCdXR0b247XG4iLCJpbXBvcnQgY3JlYXRlSWNvbiBmcm9tICcuL2hvY3MvY3JlYXRlSWNvbic7XG52YXIgRmFjZWJvb2tJY29uID0gY3JlYXRlSWNvbih7XG4gICAgY29sb3I6ICcjM2I1OTk4JyxcbiAgICBuZXR3b3JrTmFtZTogJ2ZhY2Vib29rJyxcbiAgICBwYXRoOiAnTTM0LjEsNDdWMzMuM2g0LjZsMC43LTUuM2gtNS4zdi0zLjRjMC0xLjUsMC40LTIuNiwyLjYtMi42bDIuOCwwdi00LjhjLTAuNS0wLjEtMi4yLTAuMi00LjEtMC4yIGMtNC4xLDAtNi45LDIuNS02LjksN1YyOEgyNHY1LjNoNC42VjQ3SDM0LjF6Jyxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgRmFjZWJvb2tJY29uO1xuIiwiaW1wb3J0IGNyZWF0ZUljb24gZnJvbSAnLi9ob2NzL2NyZWF0ZUljb24nO1xudmFyIEZhY2Vib29rTWVzc2VuZ2VySWNvbiA9IGNyZWF0ZUljb24oe1xuICAgIGNvbG9yOiAnIzIxOTZGMycsXG4gICAgbmV0d29ya05hbWU6ICdmYWNlYm9va21lc3NlbmdlcicsXG4gICAgcGF0aDogJ00gNTMuMDY2NDA2IDIxLjg3MTA5NCBDIDUyLjY2Nzk2OSAyMS4zMzk4NDQgNTEuOTQxNDA2IDIxLjE3OTY4OCA1MS4zNTkzNzUgMjEuNDk2MDk0IEwgMzcuNDkyMTg4IDI5LjA1ODU5NCBMIDI4Ljg2NzE4OCAyMS42NjAxNTYgQyAyOC4zMzk4NDQgMjEuMjA3MDMxIDI3LjU1MDc4MSAyMS4yMzgyODEgMjcuMDU0Njg4IDIxLjczMDQ2OSBMIDExLjA1ODU5NCAzNy43MjY1NjIgQyAxMC41MzkwNjIgMzguMjUgMTAuNTQyOTY5IDM5LjA5Mzc1IDExLjA2MjUgMzkuNjEzMjgxIEMgMTEuNDgwNDY5IDQwLjAyNzM0NCAxMi4xMjEwOTQgNDAuMTIxMDk0IDEyLjY0MDYyNSAzOS44Mzk4NDQgTCAyNi41MDM5MDYgMzIuMjgxMjUgTCAzNS4xMzY3MTkgMzkuNjc5Njg4IEMgMzUuNjY3OTY5IDQwLjEzMjgxMiAzNi40NTcwMzEgNDAuMTAxNTYyIDM2Ljk0OTIxOSAzOS42MDkzNzUgTCA1Mi45NDkyMTkgMjMuNjEzMjgxIEMgNTMuNDE0MDYyIDIzLjE0MDYyNSA1My40NjQ4NDQgMjIuMzk4NDM4IDUzLjA2NjQwNiAyMS44NzEwOTQgWiBNIDUzLjA2NjQwNiAyMS44NzEwOTQnLFxufSk7XG5leHBvcnQgZGVmYXVsdCBGYWNlYm9va01lc3Nlbmdlckljb247XG4iLCJpbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5pbXBvcnQgY3JlYXRlU2hhcmVCdXR0b24gZnJvbSAnLi9ob2NzL2NyZWF0ZVNoYXJlQnV0dG9uJztcbmZ1bmN0aW9uIGZhY2Vib29rTWVzc2VuZ2VyTGluayh1cmwsIF9hKSB7XG4gICAgdmFyIGFwcElkID0gX2EuYXBwSWQsIHJlZGlyZWN0VXJpID0gX2EucmVkaXJlY3RVcmksIHRvID0gX2EudG87XG4gICAgcmV0dXJuICgnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2RpYWxvZy9zZW5kJyArXG4gICAgICAgIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICAgICAgICAgIGxpbms6IHVybCxcbiAgICAgICAgICAgIHJlZGlyZWN0X3VyaTogcmVkaXJlY3RVcmkgfHwgdXJsLFxuICAgICAgICAgICAgYXBwX2lkOiBhcHBJZCxcbiAgICAgICAgICAgIHRvOiB0byxcbiAgICAgICAgfSkpO1xufVxudmFyIEZhY2Vib29rTWVzc2VuZ2VyU2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbignZmFjZWJvb2ttZXNzZW5nZXInLCBmYWNlYm9va01lc3NlbmdlckxpbmssIGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gKHtcbiAgICBhcHBJZDogcHJvcHMuYXBwSWQsXG4gICAgcmVkaXJlY3RVcmk6IHByb3BzLnJlZGlyZWN0VXJpLFxuICAgIHRvOiBwcm9wcy50byxcbn0pOyB9LCB7XG4gICAgd2luZG93V2lkdGg6IDEwMDAsXG4gICAgd2luZG93SGVpZ2h0OiA4MjAsXG59KTtcbmV4cG9ydCBkZWZhdWx0IEZhY2Vib29rTWVzc2VuZ2VyU2hhcmVCdXR0b247XG4iLCJpbXBvcnQgYXNzZXJ0IGZyb20gJy4vdXRpbHMvYXNzZXJ0JztcbmltcG9ydCBvYmplY3RUb0dldFBhcmFtcyBmcm9tICcuL3V0aWxzL29iamVjdFRvR2V0UGFyYW1zJztcbmltcG9ydCBjcmVhdGVTaGFyZUJ1dHRvbiBmcm9tICcuL2hvY3MvY3JlYXRlU2hhcmVCdXR0b24nO1xuZnVuY3Rpb24gZmFjZWJvb2tMaW5rKHVybCwgX2EpIHtcbiAgICB2YXIgcXVvdGUgPSBfYS5xdW90ZSwgaGFzaHRhZyA9IF9hLmhhc2h0YWc7XG4gICAgYXNzZXJ0KHVybCwgJ2ZhY2Vib29rLnVybCcpO1xuICAgIHJldHVybiAoJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocCcgK1xuICAgICAgICBvYmplY3RUb0dldFBhcmFtcyh7XG4gICAgICAgICAgICB1OiB1cmwsXG4gICAgICAgICAgICBxdW90ZTogcXVvdGUsXG4gICAgICAgICAgICBoYXNodGFnOiBoYXNodGFnLFxuICAgICAgICB9KSk7XG59XG52YXIgRmFjZWJvb2tTaGFyZUJ1dHRvbiA9IGNyZWF0ZVNoYXJlQnV0dG9uKCdmYWNlYm9vaycsIGZhY2Vib29rTGluaywgZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoe1xuICAgIHF1b3RlOiBwcm9wcy5xdW90ZSxcbiAgICBoYXNodGFnOiBwcm9wcy5oYXNodGFnLFxufSk7IH0sIHtcbiAgICB3aW5kb3dXaWR0aDogNTUwLFxuICAgIHdpbmRvd0hlaWdodDogNDAwLFxufSk7XG5leHBvcnQgZGVmYXVsdCBGYWNlYm9va1NoYXJlQnV0dG9uO1xuIiwiaW1wb3J0IGpzb25wIGZyb20gJ2pzb25wJztcbmltcG9ydCBjcmVhdGVTaGFyZUNvdW50IGZyb20gJy4vaG9jcy9jcmVhdGVTaGFyZUNvdW50JztcbmZ1bmN0aW9uIGdldEZhY2Vib29rU2hhcmVDb3VudChzaGFyZVVybCwgY2FsbGJhY2spIHtcbiAgICB2YXIgZW5kcG9pbnQgPSBcImh0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tLz9pZD1cIiArIHNoYXJlVXJsICsgXCImZmllbGRzPW9nX29iamVjdHtlbmdhZ2VtZW50fVwiO1xuICAgIGpzb25wKGVuZHBvaW50LCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKCFlcnIgJiYgZGF0YSAmJiBkYXRhLm9nX29iamVjdCAmJiBkYXRhLm9nX29iamVjdC5lbmdhZ2VtZW50XG4gICAgICAgICAgICA/IGRhdGEub2dfb2JqZWN0LmVuZ2FnZW1lbnQuY291bnRcbiAgICAgICAgICAgIDogdW5kZWZpbmVkKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNoYXJlQ291bnQoZ2V0RmFjZWJvb2tTaGFyZUNvdW50KTtcbiIsImltcG9ydCBjcmVhdGVJY29uIGZyb20gJy4vaG9jcy9jcmVhdGVJY29uJztcbnZhciBIYXRlbmFJY29uID0gY3JlYXRlSWNvbih7XG4gICAgY29sb3I6ICcjMDA5YWQ5JyxcbiAgICBuZXR3b3JrTmFtZTogJ2hhdGVuYScsXG4gICAgcGF0aDogJ00gMzYuMTY0MDYyIDMzLjU1NDY4OCBDIDM0Ljk4ODI4MSAzMi4yMzQzNzUgMzMuMzQ3NjU2IDMxLjUgMzEuMjUzOTA2IDMxLjM0Mzc1IEMgMzMuMTI1IDMwLjgzNTkzOCAzNC40NzY1NjIgMzAuMDkzNzUgMzUuMzM1OTM4IDI5LjA5Mzc1IEMgMzYuMTkxNDA2IDI4LjA5Mzc1IDM2LjYwOTM3NSAyNi43ODEyNSAzNi42MDkzNzUgMjUuMTAxNTYyIEMgMzYuNjI4OTA2IDIzLjg3NSAzNi4zMzIwMzEgMjIuNjYwMTU2IDM1Ljc1IDIxLjU3ODEyNSBDIDM1LjE2MDE1NiAyMC41NTg1OTQgMzQuMjkyOTY5IDE5LjcxODc1IDMzLjI1MzkwNiAxOS4xNjAxNTYgQyAzMi4zMDQ2ODggMTguNjQwNjI1IDMxLjE3NTc4MSAxOC4yNjU2MjUgMjkuODQ3NjU2IDE4LjA0Mjk2OSBDIDI4LjUyMzQzOCAxNy44MjQyMTkgMjYuMTk1MzEyIDE3LjczMDQ2OSAyMi44NjcxODggMTcuNzMwNDY5IEwgMTQuNzY5NTMxIDE3LjczMDQ2OSBMIDE0Ljc2OTUzMSA0Ny4yNjk1MzEgTCAyMy4xMTMyODEgNDcuMjY5NTMxIEMgMjYuNDY4NzUgNDcuMjY5NTMxIDI4Ljg4NjcxOSA0Ny4xNTYyNSAzMC4zNjcxODggNDYuOTI5Njg4IEMgMzEuODUxNTYyIDQ2LjY5NTMxMiAzMy4wODU5MzggNDYuMzA0Njg4IDM0LjA4NTkzOCA0NS43NzM0MzggQyAzNS4yODkwNjIgNDUuMTQ4NDM4IDM2LjI4MTI1IDQ0LjE3OTY4OCAzNi45MzM1OTQgNDIuOTkyMTg4IEMgMzcuNTk3NjU2IDQxLjc5Njg3NSAzNy45MzM1OTQgNDAuNDAyMzQ0IDM3LjkzMzU5NCAzOC44MTY0MDYgQyAzNy45MzM1OTQgMzYuNjIxMDk0IDM3LjM0NzY1NiAzNC44NjcxODggMzYuMTY0MDYyIDMzLjU1NDY4OCBaIE0gMjIuMjU3ODEyIDI0LjI2OTUzMSBMIDIzLjk4NDM3NSAyNC4yNjk1MzEgQyAyNS45ODgyODEgMjQuMjY5NTMxIDI3LjMzMjAzMSAyNC40OTYwOTQgMjguMDE1NjI1IDI0Ljk0NTMxMiBDIDI4LjcwMzEyNSAyNS40MDIzNDQgMjkuMDQyOTY5IDI2LjE4MzU5NCAyOS4wNDI5NjkgMjcuMjg1MTU2IEMgMjkuMDQyOTY5IDI4LjM5MDYyNSAyOC42NjQwNjIgMjkuMTA1NDY5IDI3LjkzNzUgMjkuNTUwNzgxIEMgMjcuMjEwOTM4IDI5Ljk5MjE4OCAyNS44NDM3NSAzMC4xOTkyMTkgMjMuODU1NDY5IDMwLjE5OTIxOSBMIDIyLjI1NzgxMiAzMC4xOTkyMTkgWiBNIDI5LjEyMTA5NCA0MS4yMTA5MzggQyAyOC4zMjgxMjUgNDEuNjkxNDA2IDI2Ljk3NjU2MiA0MS45MjU3ODEgMjUuMDc4MTI1IDQxLjkyNTc4MSBMIDIyLjI1NzgxMiA0MS45MjU3ODEgTCAyMi4yNTc4MTIgMzUuNDg4MjgxIEwgMjUuMTk1MzEyIDM1LjQ4ODI4MSBDIDI3LjE0NDUzMSAzNS40ODgyODEgMjguNDk2MDk0IDM1LjczODI4MSAyOS4yMTA5MzggMzYuMjMwNDY5IEMgMjkuOTI1NzgxIDM2LjcyNjU2MiAzMC4zMDQ2ODggMzcuNTgyMDMxIDMwLjMwNDY4OCAzOC44MzIwMzEgQyAzMC4zMDQ2ODggNDAuMDc4MTI1IDI5LjkxNDA2MiA0MC43NDIxODggMjkuMTA1NDY5IDQxLjIyMjY1NiBaIE0gMjkuMTIxMDk0IDQxLjIxMDkzOCBNIDQ2LjQ4ODI4MSAzOS43OTI5NjkgQyA0NC40MjE4NzUgMzkuNzkyOTY5IDQyLjc0MjE4OCA0MS40Njg3NSA0Mi43NDIxODggNDMuNTM1MTU2IEMgNDIuNzQyMTg4IDQ1LjYwNTQ2OSA0NC40MjE4NzUgNDcuMjgxMjUgNDYuNDg4MjgxIDQ3LjI4MTI1IEMgNDguNTU0Njg4IDQ3LjI4MTI1IDUwLjIzMDQ2OSA0NS42MDU0NjkgNTAuMjMwNDY5IDQzLjUzNTE1NiBDIDUwLjIzMDQ2OSA0MS40Njg3NSA0OC41NTQ2ODggMzkuNzkyOTY5IDQ2LjQ4ODI4MSAzOS43OTI5NjkgWiBNIDQ2LjQ4ODI4MSAzOS43OTI5NjkgTSA0My4yMzgyODEgMTcuNzMwNDY5IEwgNDkuNzM4MjgxIDE3LjczMDQ2OSBMIDQ5LjczODI4MSAzNy40Mjk2ODggTCA0My4yMzgyODEgMzcuNDI5Njg4IFogTSA0My4yMzgyODEgMTcuNzMwNDY5ICcsXG59KTtcbmV4cG9ydCBkZWZhdWx0IEhhdGVuYUljb247XG4iLCJpbXBvcnQgYXNzZXJ0IGZyb20gJy4vdXRpbHMvYXNzZXJ0JztcbmltcG9ydCBjcmVhdGVTaGFyZUJ1dHRvbiBmcm9tICcuL2hvY3MvY3JlYXRlU2hhcmVCdXR0b24nO1xuZnVuY3Rpb24gaGF0ZW5hTGluayh1cmwsIF9hKSB7XG4gICAgdmFyIHRpdGxlID0gX2EudGl0bGU7XG4gICAgYXNzZXJ0KHVybCwgJ2hhdGVuYS51cmwnKTtcbiAgICByZXR1cm4gXCJodHRwOi8vYi5oYXRlbmEubmUuanAvYWRkP21vZGU9Y29uZmlybSZ1cmw9XCIgKyB1cmwgKyBcIiZ0aXRsZT1cIiArIHRpdGxlO1xufVxudmFyIEhhdGVuYVNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oJ2hhdGVuYScsIGhhdGVuYUxpbmssIGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gKHtcbiAgICB0aXRsZTogcHJvcHMudGl0bGUsXG59KTsgfSwge1xuICAgIHdpbmRvd1dpZHRoOiA2NjAsXG4gICAgd2luZG93SGVpZ2h0OiA0NjAsXG4gICAgd2luZG93UG9zaXRpb246ICd3aW5kb3dDZW50ZXInLFxufSk7XG5leHBvcnQgZGVmYXVsdCBIYXRlbmFTaGFyZUJ1dHRvbjtcbiIsImltcG9ydCBqc29ucCBmcm9tICdqc29ucCc7XG5pbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5pbXBvcnQgY3JlYXRlU2hhcmVDb3VudCBmcm9tICcuL2hvY3MvY3JlYXRlU2hhcmVDb3VudCc7XG5mdW5jdGlvbiBnZXRIYXRlbmFTaGFyZUNvdW50KHNoYXJlVXJsLCBjYWxsYmFjaykge1xuICAgIHZhciB1cmwgPSAnaHR0cHM6Ly9ib29rbWFyay5oYXRlbmFhcGlzLmNvbS9jb3VudC9lbnRyeSc7XG4gICAganNvbnAodXJsICtcbiAgICAgICAgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgICAgICAgICAgdXJsOiBzaGFyZVVybCxcbiAgICAgICAgfSksIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2soZGF0YSA/IGRhdGEgOiB1bmRlZmluZWQpO1xuICAgIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hhcmVDb3VudChnZXRIYXRlbmFTaGFyZUNvdW50KTtcbiIsImltcG9ydCBjcmVhdGVJY29uIGZyb20gJy4vaG9jcy9jcmVhdGVJY29uJztcbnZhciBJbnN0YXBhcGVySWNvbiA9IGNyZWF0ZUljb24oe1xuICAgIGNvbG9yOiAnIzFGMUYxRicsXG4gICAgbmV0d29ya05hbWU6ICdpbnN0YXBhcGVyJyxcbiAgICBwYXRoOiAnTTM1LjY4OCA0My4wMTJjMCAyLjQyNS4zNjEgMi43ODUgMy45MTIgMy4wNTZWNDhIMjQuNDAxdi0xLjkzMmMzLjU1NS0uMjcgMy45MTItLjYzIDMuOTEyLTMuMDU2VjIwLjk0NGMwLTIuMzc5LS4zNi0yLjc4NS0zLjkxMi0zLjA1NlYxNkgzOS42djEuODg4Yy0zLjU1LjI3LTMuOTEyLjY3NS0zLjkxMiAzLjA1NnYyMi4wNjhoLjAwMXonLFxufSk7XG5leHBvcnQgZGVmYXVsdCBJbnN0YXBhcGVySWNvbjtcbiIsImltcG9ydCBhc3NlcnQgZnJvbSAnLi91dGlscy9hc3NlcnQnO1xuaW1wb3J0IGNyZWF0ZVNoYXJlQnV0dG9uIGZyb20gJy4vaG9jcy9jcmVhdGVTaGFyZUJ1dHRvbic7XG5pbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5mdW5jdGlvbiBpbnN0YXBhcGVyTGluayh1cmwsIF9hKSB7XG4gICAgdmFyIHRpdGxlID0gX2EudGl0bGUsIGRlc2NyaXB0aW9uID0gX2EuZGVzY3JpcHRpb247XG4gICAgYXNzZXJ0KHVybCwgJ2luc3RhcGFwZXIudXJsJyk7XG4gICAgcmV0dXJuICgnaHR0cDovL3d3dy5pbnN0YXBhcGVyLmNvbS9oZWxsbzInICtcbiAgICAgICAgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIH0pKTtcbn1cbnZhciBJbnN0YXBhcGVyU2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbignaW5zdGFwYXBlcicsIGluc3RhcGFwZXJMaW5rLCBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuICh7XG4gICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbn0pOyB9LCB7XG4gICAgd2luZG93V2lkdGg6IDUwMCxcbiAgICB3aW5kb3dIZWlnaHQ6IDUwMCxcbiAgICB3aW5kb3dQb3NpdGlvbjogJ3dpbmRvd0NlbnRlcicsXG59KTtcbmV4cG9ydCBkZWZhdWx0IEluc3RhcGFwZXJTaGFyZUJ1dHRvbjtcbiIsImltcG9ydCBjcmVhdGVJY29uIGZyb20gJy4vaG9jcy9jcmVhdGVJY29uJztcbnZhciBMaW5lSWNvbiA9IGNyZWF0ZUljb24oe1xuICAgIGNvbG9yOiAnIzAwYjgwMCcsXG4gICAgbmV0d29ya05hbWU6ICdsaW5lJyxcbiAgICBwYXRoOiAnTTUyLjYyIDMwLjEzOGMwIDMuNjkzLTEuNDMyIDcuMDE5LTQuNDIgMTAuMjk2aC4wMDFjLTQuMzI2IDQuOTc5LTE0IDExLjA0NC0xNi4yMDEgMTEuOTcyLTIuMi45MjctMS44NzYtLjU5MS0xLjc4Ni0xLjExMmwuMjk0LTEuNzY1Yy4wNjktLjUyNy4xNDItMS4zNDMtLjA2Ni0xLjg2NS0uMjMyLS41NzQtMS4xNDYtLjg3Mi0xLjgxNy0xLjAxNi05LjkwOS0xLjMxLTE3LjI0NS04LjIzOC0xNy4yNDUtMTYuNTEgMC05LjIyNiA5LjI1MS0xNi43MzMgMjAuNjItMTYuNzMzIDExLjM3IDAgMjAuNjIgNy41MDcgMjAuNjIgMTYuNzMzek0yNy44MSAyNS42OGgtMS40NDZhLjQwMi40MDIgMCAwIDAtLjQwMi40MDF2OC45ODVjMCAuMjIxLjE4LjQuNDAyLjRoMS40NDZhLjQwMS40MDEgMCAwIDAgLjQwMi0uNHYtOC45ODVhLjQwMi40MDIgMCAwIDAtLjQwMi0uNDAxem05Ljk1NiAwSDM2LjMyYS40MDIuNDAyIDAgMCAwLS40MDIuNDAxdjUuMzM4TDMxLjggMjUuODU4YS4zOS4zOSAwIDAgMC0uMDMxLS4wNGwtLjAwMi0uMDAzLS4wMjQtLjAyNS0uMDA4LS4wMDdhLjMxMy4zMTMgMCAwIDAtLjAzMi0uMDI2LjI1NS4yNTUgMCAwIDEtLjAyMS0uMDE0bC0uMDEyLS4wMDctLjAyMS0uMDEyLS4wMTMtLjAwNi0uMDIzLS4wMS0uMDEzLS4wMDUtLjAyNC0uMDA4LS4wMTQtLjAwMy0uMDIzLS4wMDUtLjAxNy0uMDAyLS4wMjEtLjAwMy0uMDIxLS4wMDJoLTEuNDZhLjQwMi40MDIgMCAwIDAtLjQwMi40MDF2OC45ODVjMCAuMjIxLjE4LjQuNDAyLjRoMS40NDZhLjQwMS40MDEgMCAwIDAgLjQwMi0uNHYtNS4zMzdsNC4xMjMgNS41NjhjLjAyOC4wNC4wNjMuMDcyLjEwMS4wOTlsLjAwNC4wMDNhLjIzNi4yMzYgMCAwIDAgLjAyNS4wMTVsLjAxMi4wMDYuMDE5LjAxYS4xNTQuMTU0IDAgMCAxIC4wMTkuMDA4bC4wMTIuMDA0LjAyOC4wMS4wMDUuMDAxYS40NDIuNDQyIDAgMCAwIC4xMDQuMDEzaDEuNDQ2YS40LjQgMCAwIDAgLjQwMS0uNHYtOC45ODVhLjQwMi40MDIgMCAwIDAtLjQwMS0uNDAxem0tMTMuNDQyIDcuNTM3aC0zLjkzdi03LjEzNmEuNDAxLjQwMSAwIDAgMC0uNDAxLS40MDFoLTEuNDQ3YS40LjQgMCAwIDAtLjQwMS40MDF2OC45ODRhLjM5Mi4zOTIgMCAwIDAgLjEyMy4yOWMuMDcyLjA2OC4xNy4xMTEuMjc4LjExMWg1Ljc3OGEuNC40IDAgMCAwIC40MDEtLjQwMXYtMS40NDdhLjQwMS40MDEgMCAwIDAtLjQwMS0uNDAxem0yMS40MjktNS4yODdjLjIyMiAwIC40MDEtLjE4LjQwMS0uNDAydi0xLjQ0NmEuNDAxLjQwMSAwIDAgMC0uNDAxLS40MDJoLTUuNzc4YS4zOTguMzk4IDAgMCAwLS4yNzkuMTEzbC0uMDA1LjAwNC0uMDA2LjAwOGEuMzk3LjM5NyAwIDAgMC0uMTExLjI3NnY4Ljk4NGMwIC4xMDguMDQzLjIwNi4xMTIuMjc4bC4wMDUuMDA2YS40MDEuNDAxIDAgMCAwIC4yODQuMTE3aDUuNzc4YS40LjQgMCAwIDAgLjQwMS0uNDAxdi0xLjQ0N2EuNDAxLjQwMSAwIDAgMC0uNDAxLS40MDFoLTMuOTN2LTEuNTE5aDMuOTNjLjIyMiAwIC40MDEtLjE4LjQwMS0uNDAyVjI5Ljg1YS40MDEuNDAxIDAgMCAwLS40MDEtLjQwMmgtMy45M1YyNy45M2gzLjkzeicsXG59KTtcbmV4cG9ydCBkZWZhdWx0IExpbmVJY29uO1xuIiwiaW1wb3J0IGFzc2VydCBmcm9tICcuL3V0aWxzL2Fzc2VydCc7XG5pbXBvcnQgY3JlYXRlU2hhcmVCdXR0b24gZnJvbSAnLi9ob2NzL2NyZWF0ZVNoYXJlQnV0dG9uJztcbmltcG9ydCBvYmplY3RUb0dldFBhcmFtcyBmcm9tICcuL3V0aWxzL29iamVjdFRvR2V0UGFyYW1zJztcbmZ1bmN0aW9uIGxpbmVMaW5rKHVybCwgX2EpIHtcbiAgICB2YXIgdGl0bGUgPSBfYS50aXRsZTtcbiAgICBhc3NlcnQodXJsLCAnbGluZS51cmwnKTtcbiAgICByZXR1cm4gKCdodHRwczovL3NvY2lhbC1wbHVnaW5zLmxpbmUubWUvbGluZWl0L3NoYXJlJyArXG4gICAgICAgIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgIH0pKTtcbn1cbnZhciBMaW5lU2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbignbGluZScsIGxpbmVMaW5rLCBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuICh7XG4gICAgdGl0bGU6IHByb3BzLnRpdGxlLFxufSk7IH0sIHtcbiAgICB3aW5kb3dXaWR0aDogNTAwLFxuICAgIHdpbmRvd0hlaWdodDogNTAwLFxufSk7XG5leHBvcnQgZGVmYXVsdCBMaW5lU2hhcmVCdXR0b247XG4iLCJpbXBvcnQgY3JlYXRlSWNvbiBmcm9tICcuL2hvY3MvY3JlYXRlSWNvbic7XG52YXIgTGlua2VkaW5JY29uID0gY3JlYXRlSWNvbih7XG4gICAgY29sb3I6ICcjMDA3ZmIxJyxcbiAgICBuZXR3b3JrTmFtZTogJ2xpbmtlZGluJyxcbiAgICBwYXRoOiAnTTIwLjQsNDRoNS40VjI2LjZoLTUuNFY0NHogTTIzLjEsMThjLTEuNywwLTMuMSwxLjQtMy4xLDMuMWMwLDEuNywxLjQsMy4xLDMuMSwzLjEgYzEuNywwLDMuMS0xLjQsMy4xLTMuMUMyNi4yLDE5LjQsMjQuOCwxOCwyMy4xLDE4eiBNMzkuNSwyNi4yYy0yLjYsMC00LjQsMS40LTUuMSwyLjhoLTAuMXYtMi40aC01LjJWNDRoNS40di04LjYgYzAtMi4zLDAuNC00LjUsMy4yLTQuNWMyLjgsMCwyLjgsMi42LDIuOCw0LjZWNDRINDZ2LTkuNUM0NiwyOS44LDQ1LDI2LjIsMzkuNSwyNi4yeicsXG59KTtcbmV4cG9ydCBkZWZhdWx0IExpbmtlZGluSWNvbjtcbiIsImltcG9ydCBhc3NlcnQgZnJvbSAnLi91dGlscy9hc3NlcnQnO1xuaW1wb3J0IG9iamVjdFRvR2V0UGFyYW1zIGZyb20gJy4vdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMnO1xuaW1wb3J0IGNyZWF0ZVNoYXJlQnV0dG9uIGZyb20gJy4vaG9jcy9jcmVhdGVTaGFyZUJ1dHRvbic7XG5mdW5jdGlvbiBsaW5rZWRpbkxpbmsodXJsLCBfYSkge1xuICAgIHZhciB0aXRsZSA9IF9hLnRpdGxlLCBzdW1tYXJ5ID0gX2Euc3VtbWFyeSwgc291cmNlID0gX2Euc291cmNlO1xuICAgIGFzc2VydCh1cmwsICdsaW5rZWRpbi51cmwnKTtcbiAgICByZXR1cm4gKCdodHRwczovL2xpbmtlZGluLmNvbS9zaGFyZUFydGljbGUnICtcbiAgICAgICAgb2JqZWN0VG9HZXRQYXJhbXMoeyB1cmw6IHVybCwgbWluaTogJ3RydWUnLCB0aXRsZTogdGl0bGUsIHN1bW1hcnk6IHN1bW1hcnksIHNvdXJjZTogc291cmNlIH0pKTtcbn1cbnZhciBMaW5rZWRpblNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oJ2xpbmtlZGluJywgbGlua2VkaW5MaW5rLCBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgdGl0bGUgPSBfYS50aXRsZSwgc3VtbWFyeSA9IF9hLnN1bW1hcnksIHNvdXJjZSA9IF9hLnNvdXJjZTtcbiAgICByZXR1cm4gKHsgdGl0bGU6IHRpdGxlLCBzdW1tYXJ5OiBzdW1tYXJ5LCBzb3VyY2U6IHNvdXJjZSB9KTtcbn0sIHtcbiAgICB3aW5kb3dXaWR0aDogNzUwLFxuICAgIHdpbmRvd0hlaWdodDogNjAwLFxufSk7XG5leHBvcnQgZGVmYXVsdCBMaW5rZWRpblNoYXJlQnV0dG9uO1xuIiwiaW1wb3J0IGNyZWF0ZUljb24gZnJvbSAnLi9ob2NzL2NyZWF0ZUljb24nO1xudmFyIExpdmVqb3VybmFsSWNvbiA9IGNyZWF0ZUljb24oe1xuICAgIGNvbG9yOiAnIzIxQTVEOCcsXG4gICAgbmV0d29ya05hbWU6ICdsaXZlam91cm5hbCcsXG4gICAgcGF0aDogJ00xOC4zNDA3ODIxLDI4LjE3NjQ3MDYgTDIxLjk0NDEzNDEsMzEuNzg5OTE2IEwzMy4wMDU1ODY1LDQyLjg4MjM1MyBDMzMuMDA1NTg2NSw0Mi44ODIzNTMgMzMuMDg5Mzg1NSw0Mi45NjYzODY2IDMzLjA4OTM4NTUsNDIuOTY2Mzg2NiBMNDYuNjY0ODA0Niw0NyBDNDYuNjY0ODA0Niw0NyA0Ni42NjQ4MDQ2LDQ3IDQ2Ljc0ODYwMzQsNDcgQzQ2LjgzMjQwMjIsNDcgNDYuODMyNDAyMiw0NyA0Ni45MTYyMDEyLDQ2LjkxNTk2NjQgQzQ3LDQ2LjgzMTkzMjcgNDcsNDYuODMxOTMyNyA0Nyw0Ni43NDc4OTkxIEw0Mi45Nzc2NTM2LDMzLjEzNDQ1MzcgQzQyLjk3NzY1MzYsMzMuMTM0NDUzNyA0Mi45Nzc2NTM2LDMzLjEzNDQ1MzcgNDIuODkzODU0OCwzMy4wNTA0MjAyIEwzMS4xNjIwMTExLDIxLjM2OTc0NzkgTDMxLjE2MjAxMTEsMjEuMzY5NzQ3OSBMMjguMTQ1MjUxNCwxOC4yNjA1MDQyIEMyNy4zMDcyNjI2LDE3LjQyMDE2ODEgMjYuNTUzMDcyNiwxNyAyNS43MTUwODM4LDE3IEMyNC4yOTA1MDI4LDE3IDIzLjAzMzUxOTUsMTguMzQ0NTM3OCAyMS41MjUxMzk3LDE5Ljg1NzE0MjkgQzIxLjI3Mzc0MywyMC4xMDkyNDM3IDIwLjkzODU0NzUsMjAuNDQ1Mzc4MSAyMC42ODcxNTA4LDIwLjY5NzQ3OSBDMjAuMzUxOTU1MywyMS4wMzM2MTM0IDIwLjEwMDU1ODYsMjEuMjg1NzE0MyAxOS44NDkxNjIsMjEuNTM3ODE1MSBDMTguMzQwNzgyMSwyMi45NjYzODY2IDE3LjA4Mzc5ODksMjQuMjI2ODkwOCAxNywyNS43Mzk0OTU4IEMxNy4wODM3OTg5LDI2LjQ5NTc5ODMgMTcuNTAyNzkzMywyNy4zMzYxMzQ1IDE4LjM0MDc4MjEsMjguMTc2NDcwNiBaIE0zOS45MDEyMzE5LDM5LjYxMzQ0NTQgQzM5LjczMzYzNDEsMzkuNDQ1Mzc4MSAzOS40ODIyMzc0LDM3LjY4MDY3MjQgNDAuMjM2NDI3NSwzNi44NDAzMzYyIEM0MC45OTA2MTc0LDM2LjA4NDAzMzcgNDEuNjYxMDA4NCwzNiA0Mi4xNjM4MDE3LDM2IEM0Mi4zMzEzOTk1LDM2IDQyLjQ5ODk5NzMsMzYgNDIuNTgyNzk2MSwzNiBMNDQuODQ1MzY1OSw0My41NjMwMjUzIEw0My41ODgzODI4LDQ0LjgyMzUyOTUgTDM2LjA0NjQ4MzMsNDIuNTU0NjIxOCBDMzUuOTYyNjg0Myw0Mi4yMTg0ODc0IDM1Ljg3ODg4NTUsNDEuMjEwMDg0MSAzNi44ODQ0NzIyLDQwLjIwMTY4MDcgQzM3LjIxOTY2NzYsMzkuODY1NTQ2MyAzNy44OTAwNTg3LDM5LjYxMzQ0NTQgMzguNTYwNDQ5OCwzOS42MTM0NDU0IEMzOS4xNDcwNDIsMzkuNjEzNDQ1NCAzOS41NjYwMzY0LDM5Ljc4MTUxMjYgMzkuNTY2MDM2NCwzOS43ODE1MTI2IEMzOS42NDk4MzUzLDM5Ljg2NTU0NjMgMzkuODE3NDMzMSwzOS44NjU1NDYzIDM5LjgxNzQzMzEsMzkuNzgxNTEyNiBDMzkuOTg1MDMwNywzOS43ODE1MTI2IDM5Ljk4NTAzMDcsMzkuNjk3NDc5IDM5LjkwMTIzMTksMzkuNjEzNDQ1NCBaJyxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgTGl2ZWpvdXJuYWxJY29uO1xuIiwiaW1wb3J0IGFzc2VydCBmcm9tICcuL3V0aWxzL2Fzc2VydCc7XG5pbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5pbXBvcnQgY3JlYXRlU2hhcmVCdXR0b24gZnJvbSAnLi9ob2NzL2NyZWF0ZVNoYXJlQnV0dG9uJztcbmZ1bmN0aW9uIGxpdmVqb3VybmFsTGluayh1cmwsIF9hKSB7XG4gICAgdmFyIHRpdGxlID0gX2EudGl0bGUsIGRlc2NyaXB0aW9uID0gX2EuZGVzY3JpcHRpb247XG4gICAgYXNzZXJ0KHVybCwgJ2xpdmVqb3VybmFsLnVybCcpO1xuICAgIHJldHVybiAoJ2h0dHBzOi8vd3d3LmxpdmVqb3VybmFsLmNvbS91cGRhdGUuYm1sJyArXG4gICAgICAgIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICAgICAgICAgIHN1YmplY3Q6IHRpdGxlLFxuICAgICAgICAgICAgZXZlbnQ6IGRlc2NyaXB0aW9uLFxuICAgICAgICB9KSk7XG59XG52YXIgTGl2ZWpvdXJuYWxTaGFyZUJ1dHRvbiA9IGNyZWF0ZVNoYXJlQnV0dG9uKCdsaXZlam91cm5hbCcsIGxpdmVqb3VybmFsTGluaywgZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoe1xuICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG59KTsgfSwge1xuICAgIHdpbmRvd1dpZHRoOiA2NjAsXG4gICAgd2luZG93SGVpZ2h0OiA0NjAsXG59KTtcbmV4cG9ydCBkZWZhdWx0IExpdmVqb3VybmFsU2hhcmVCdXR0b247XG4iLCJpbXBvcnQgY3JlYXRlSWNvbiBmcm9tICcuL2hvY3MvY3JlYXRlSWNvbic7XG52YXIgTWFpbHJ1SWNvbiA9IGNyZWF0ZUljb24oe1xuICAgIGNvbG9yOiAnIzE2OERFMicsXG4gICAgbmV0d29ya05hbWU6ICdtYWlscnUnLFxuICAgIHBhdGg6ICdNMzkuNzEwNzc0NSwxNyBDNDEuNjYxOTc1NSwxNyA0My4zMjA0OTY1LDE4LjczMjg1MiA0My4zMjA0OTY1LDIxLjAwNzIyMDIgQzQzLjMyMDQ5NjUsMjMuMjgxNTg4NSA0MS43NTk1MzU3LDI1LjAxNDQ0MDQgMzkuNzEwNzc0NSwyNS4wMTQ0NDA0IEMzNy43NTk1NzMyLDI1LjAxNDQ0MDQgMzYuMTAxMDUyMiwyMy4yODE1ODg1IDM2LjEwMTA1MjIsMjEuMDA3MjIwMiBDMzYuMTAxMDUyMiwxOC43MzI4NTIgMzcuNzU5NTczMiwxNyAzOS43MTA3NzQ1LDE3IFogTTI0LjM5Mzg0NTEsMTcgQzI2LjM0NTA0NjMsMTcgMjguMDAzNTY3MiwxOC43MzI4NTIgMjguMDAzNTY3MiwyMS4wMDcyMjAyIEMyOC4wMDM1NjcyLDIzLjI4MTU4ODUgMjYuNDQyNjA2MywyNS4wMTQ0NDA0IDI0LjM5Mzg0NTEsMjUuMDE0NDQwNCBDMjIuNDQyNjQzOSwyNS4wMTQ0NDA0IDIwLjc4NDEyMjksMjMuMjgxNTg4NSAyMC43ODQxMjI5LDIxLjAwNzIyMDIgQzIwLjc4NDEyMjksMTguNzMyODUyIDIyLjQ0MjY0MzksMTcgMjQuMzkzODQ1MSwxNyBaIE01MS45MDU3ODE3LDQzLjQyNTk5MjggQzUxLjcxMDY2MTcsNDQuMDc1ODEyMyA1MS40MTc5ODE1LDQ0LjYxNzMyODUgNTAuOTMwMTgxMiw0NC45NDIyMzgzIEM1MC42Mzc1MDEsNDUuMTU4ODQ0OCA1MC4yNDcyNjA3LDQ1LjI2NzE0OCA0OS44NTcwMjA1LDQ1LjI2NzE0OCBDNDkuMDc2NTQsNDUuMjY3MTQ4IDQ4LjM5MzYxOTcsNDQuODMzOTM1IDQ4LjAwMzM3OTUsNDQuMDc1ODEyMyBMNDYuMjQ3Mjk4NSw0MC43MTg0MTE1IEw0NS43NTk0OTgsNDEuMjU5OTI3OCBDNDIuNTQwMDE2Miw0NC45NDIyMzgzIDM3LjQ2Njg5Myw0NyAzMi4wMDM1Mjk3LDQ3IEMyNi41NDAxNjY0LDQ3IDIxLjU2NDYwMzQsNDQuOTQyMjM4MyAxOC4yNDc1NjE0LDQxLjI1OTkyNzggTDE3Ljc1OTc2MTEsNDAuNzE4NDExNSBMMTYuMDAzNjgsNDQuMDc1ODEyMyBDMTUuNjEzNDM5OCw0NC44MzM5MzUgMTQuOTMwNTE5NCw0NS4yNjcxNDggMTQuMTUwMDM4OSw0NS4yNjcxNDggQzEzLjc1OTc5ODYsNDUuMjY3MTQ4IDEzLjM2OTU1ODQsNDUuMTU4ODQ0OCAxMy4wNzY4NzgyLDQ0Ljk0MjIzODMgQzEyLjAwMzcxNzYsNDQuMjkyNDE4NyAxMS43MTEwMzc0LDQyLjc3NjE3MzMgMTIuMjk2Mzk3OCw0MS41ODQ4Mzc1IEwxNi43ODQxNjA1LDMzLjAyODg4MDcgQzE3LjE3NDQwMDcsMzIuMjcwNzU4IDE3Ljg1NzMyMTEsMzEuODM3NTQ1MyAxOC42Mzc4MDE2LDMxLjgzNzU0NTMgQzE5LjAyODA0MTgsMzEuODM3NTQ1MyAxOS40MTgyODIxLDMxLjk0NTg0ODUgMTkuNzEwOTYyMywzMi4xNjI0NTQ4IEMyMC43ODQxMjI5LDMyLjgxMjI3NDMgMjEuMDc2ODAzMSwzNC4zMjg1MTk3IDIwLjQ5MTQ0MjcsMzUuNTE5ODU1NSBMMjAuMTAxMjAyNSwzNi4yNzc5NzgzIEwyMC4yOTYzMjI2LDM2LjYwMjg4OCBDMjIuNDQyNjQzOSwzOS45NjAyODg4IDI3LjAyNzk2NjcsNDIuMjM0NjU3IDMxLjkwNTk2OTcsNDIuMjM0NjU3IEMzNi43ODM5NzI3LDQyLjIzNDY1NyA0MS4zNjkyOTU1LDQwLjA2ODU5MiA0My41MTU2MTY3LDM2LjYwMjg4OCBMNDMuNzEwNzM2NywzNi4yNzc5NzgzIEw0My4zMjA0OTY1LDM1LjYyODE1ODcgQzQzLjAyNzgxNjUsMzUuMDg2NjQyNSA0Mi45MzAyNTYyLDM0LjQzNjgyMyA0My4xMjUzNzY1LDMzLjc4NzAwMzUgQzQzLjMyMDQ5NjUsMzMuMTM3MTg0IDQzLjYxMzE3NjcsMzIuNTk1NjY3OCA0NC4xMDA5NzcsMzIuMjcwNzU4IEM0NC4zOTM2NTcyLDMyLjA1NDE1MTUgNDQuNzgzODk3NSwzMS45NDU4NDg1IDQ1LjE3NDEzNzcsMzEuOTQ1ODQ4NSBDNDUuOTU0NjE4MiwzMS45NDU4NDg1IDQ2LjYzNzUzODUsMzIuMzc5MDYxMyA0Ny4wMjc3Nzg3LDMzLjEzNzE4NCBMNTEuNTE1NTQxNSw0MS42OTMxNDA4IEM1Mi4wMDMzNDIsNDIuMjM0NjU3IDUyLjEwMDkwMiw0Mi44ODQ0NzY1IDUxLjkwNTc4MTcsNDMuNDI1OTkyOCBaJyxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgTWFpbHJ1SWNvbjtcbiIsImltcG9ydCBhc3NlcnQgZnJvbSAnLi91dGlscy9hc3NlcnQnO1xuaW1wb3J0IG9iamVjdFRvR2V0UGFyYW1zIGZyb20gJy4vdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMnO1xuaW1wb3J0IGNyZWF0ZVNoYXJlQnV0dG9uIGZyb20gJy4vaG9jcy9jcmVhdGVTaGFyZUJ1dHRvbic7XG5mdW5jdGlvbiBtYWlscnVMaW5rKHVybCwgX2EpIHtcbiAgICB2YXIgdGl0bGUgPSBfYS50aXRsZSwgZGVzY3JpcHRpb24gPSBfYS5kZXNjcmlwdGlvbiwgaW1hZ2VVcmwgPSBfYS5pbWFnZVVybDtcbiAgICBhc3NlcnQodXJsLCAnbWFpbHJ1LnVybCcpO1xuICAgIHJldHVybiAoJ2h0dHBzOi8vY29ubmVjdC5tYWlsLnJ1L3NoYXJlJyArXG4gICAgICAgIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2VfdXJsOiBpbWFnZVVybCxcbiAgICAgICAgfSkpO1xufVxudmFyIE1haWxydVNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oJ21haWxydScsIG1haWxydUxpbmssIGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gKHtcbiAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgIGltYWdlVXJsOiBwcm9wcy5pbWFnZVVybCxcbn0pOyB9LCB7XG4gICAgd2luZG93V2lkdGg6IDY2MCxcbiAgICB3aW5kb3dIZWlnaHQ6IDQ2MCxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgTWFpbHJ1U2hhcmVCdXR0b247XG4iLCJpbXBvcnQgY3JlYXRlSWNvbiBmcm9tICcuL2hvY3MvY3JlYXRlSWNvbic7XG52YXIgT0tJY29uID0gY3JlYXRlSWNvbih7XG4gICAgY29sb3I6ICcjZjI3MjBjJyxcbiAgICBuZXR3b3JrTmFtZTogJ29rJyxcbiAgICBwYXRoOiAnTTM5LDMwYy0xLDAtMywyLTcsMnMtNi0yLTctMmMtMS4xLDAtMiwwLjktMiwyYzAsMSwwLjYsMS41LDEsMS43YzEuMiwwLjcsNSwyLjMsNSwyLjNsLTQuMyw1LjQgICBjMCwwLTAuOCwwLjktMC44LDEuNmMwLDEuMSwwLjksMiwyLDJjMSwwLDEuNS0wLjcsMS41LTAuN1MzMiwzOSwzMiwzOWMwLDAsNC41LDUuMyw0LjUsNS4zUzM3LDQ1LDM4LDQ1YzEuMSwwLDItMC45LDItMiAgIGMwLTAuNi0wLjgtMS42LTAuOC0xLjZMMzUsMzZjMCwwLDMuOC0xLjYsNS0yLjNjMC40LTAuMywxLTAuNywxLTEuN0M0MSwzMC45LDQwLjEsMzAsMzksMzB6IE0zMiwxNWMtMy45LDAtNywzLjEtNyw3czMuMSw3LDcsN2MzLjksMCw3LTMuMSw3LTdTMzUuOSwxNSwzMiwxNXogTTMyLDI1LjUgICBjLTEuOSwwLTMuNS0xLjYtMy41LTMuNWMwLTEuOSwxLjYtMy41LDMuNS0zLjVjMS45LDAsMy41LDEuNiwzLjUsMy41QzM1LjUsMjMuOSwzMy45LDIyLjUsMzUsMjIuNXogJyxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgT0tJY29uO1xuIiwiaW1wb3J0IGFzc2VydCBmcm9tICcuL3V0aWxzL2Fzc2VydCc7XG5pbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5pbXBvcnQgY3JlYXRlU2hhcmVCdXR0b24gZnJvbSAnLi9ob2NzL2NyZWF0ZVNoYXJlQnV0dG9uJztcbmZ1bmN0aW9uIG9rTGluayh1cmwsIF9hKSB7XG4gICAgdmFyIHRpdGxlID0gX2EudGl0bGUsIGRlc2NyaXB0aW9uID0gX2EuZGVzY3JpcHRpb24sIGltYWdlID0gX2EuaW1hZ2U7XG4gICAgYXNzZXJ0KHVybCwgJ29rLnVybCcpO1xuICAgIHJldHVybiAoJ2h0dHBzOi8vY29ubmVjdC5vay5ydS9vZmZlcicgK1xuICAgICAgICBvYmplY3RUb0dldFBhcmFtcyh7XG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlVXJsOiBpbWFnZSxcbiAgICAgICAgfSkpO1xufVxudmFyIE9LU2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbignb2snLCBva0xpbmssIGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gKHtcbiAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgIGltYWdlOiBwcm9wcy5pbWFnZSxcbn0pOyB9LCB7XG4gICAgd2luZG93V2lkdGg6IDU4OCxcbiAgICB3aW5kb3dIZWlnaHQ6IDQ4MCxcbiAgICB3aW5kb3dQb3NpdGlvbjogJ3NjcmVlbkNlbnRlcicsXG59KTtcbmV4cG9ydCBkZWZhdWx0IE9LU2hhcmVCdXR0b247XG4iLCJpbXBvcnQganNvbnAgZnJvbSAnanNvbnAnO1xuaW1wb3J0IG9iamVjdFRvR2V0UGFyYW1zIGZyb20gJy4vdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMnO1xuaW1wb3J0IGNyZWF0ZVNoYXJlQ291bnQgZnJvbSAnLi9ob2NzL2NyZWF0ZVNoYXJlQ291bnQnO1xuZnVuY3Rpb24gZ2V0T0tTaGFyZUNvdW50KHNoYXJlVXJsLCBjYWxsYmFjaykge1xuICAgIGlmICghd2luZG93Lk9LKSB7XG4gICAgICAgIHdpbmRvdy5PSyA9IHtcbiAgICAgICAgICAgIFNoYXJlOiB7XG4gICAgICAgICAgICAgICAgY291bnQ6IGZ1bmN0aW9uIGNvdW50KGluZGV4LCBfY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lk9LLmNhbGxiYWNrc1tpbmRleF0oX2NvdW50KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbGxiYWNrczogW10sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciB1cmwgPSAnaHR0cHM6Ly9jb25uZWN0Lm9rLnJ1L2RrJztcbiAgICB2YXIgaW5kZXggPSB3aW5kb3cuT0suY2FsbGJhY2tzLmxlbmd0aDtcbiAgICB3aW5kb3cuT0RLTCA9IHtcbiAgICAgICAgdXBkYXRlQ291bnQ6IGZ1bmN0aW9uIChpbmRleCwgY291bnQpIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFja0luZGV4ID0gaW5kZXggPT09ICcnID8gMCA6IHBhcnNlSW50KGluZGV4LnJlcGxhY2UoJ3JlYWN0LXNoYXJlLScsICcnKSwgMTApO1xuICAgICAgICAgICAgd2luZG93Lk9LLmNhbGxiYWNrc1tjYWxsYmFja0luZGV4XShjb3VudCA9PT0gJycgPyB1bmRlZmluZWQgOiBwYXJzZUludChjb3VudCwgMTApKTtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIHdpbmRvdy5PSy5jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgcmV0dXJuIGpzb25wKHVybCArXG4gICAgICAgIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICAgICAgICAgICdzdC5jbWQnOiAnZXh0TGlrZScsXG4gICAgICAgICAgICB1aWQ6IFwicmVhY3Qtc2hhcmUtXCIgKyBpbmRleCxcbiAgICAgICAgICAgIHJlZjogc2hhcmVVcmwsXG4gICAgICAgIH0pKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNoYXJlQ291bnQoZ2V0T0tTaGFyZUNvdW50KTtcbiIsImltcG9ydCBjcmVhdGVJY29uIGZyb20gJy4vaG9jcy9jcmVhdGVJY29uJztcbnZhciBQaW50ZXJlc3RJY29uID0gY3JlYXRlSWNvbih7XG4gICAgY29sb3I6ICcjY2IyMTI4JyxcbiAgICBuZXR3b3JrTmFtZTogJ3BpbnRlcmVzdCcsXG4gICAgcGF0aDogJ00zMiwxNmMtOC44LDAtMTYsNy4yLTE2LDE2YzAsNi42LDMuOSwxMi4yLDkuNiwxNC43YzAtMS4xLDAtMi41LDAuMy0zLjcgYzAuMy0xLjMsMi4xLTguNywyLjEtOC43cy0wLjUtMS0wLjUtMi41YzAtMi40LDEuNC00LjEsMy4xLTQuMWMxLjUsMCwyLjIsMS4xLDIuMiwyLjRjMCwxLjUtMC45LDMuNy0xLjQsNS43IGMtMC40LDEuNywwLjksMy4xLDIuNSwzLjFjMywwLDUuMS0zLjksNS4xLTguNWMwLTMuNS0yLjQtNi4xLTYuNy02LjFjLTQuOSwwLTcuOSwzLjYtNy45LDcuN2MwLDEuNCwwLjQsMi40LDEuMSwzLjEgYzAuMywwLjMsMC4zLDAuNSwwLjIsMC45Yy0wLjEsMC4zLTAuMywxLTAuMywxLjNjLTAuMSwwLjQtMC40LDAuNi0wLjgsMC40Yy0yLjItMC45LTMuMy0zLjQtMy4zLTYuMWMwLTQuNSwzLjgtMTAsMTEuNC0xMCBjNi4xLDAsMTAuMSw0LjQsMTAuMSw5LjJjMCw2LjMtMy41LDExLTguNiwxMWMtMS43LDAtMy40LTAuOS0zLjktMmMwLDAtMC45LDMuNy0xLjEsNC40Yy0wLjMsMS4yLTEsMi41LTEuNiwzLjQgYzEuNCwwLjQsMywwLjcsNC41LDAuN2M4LjgsMCwxNi03LjIsMTYtMTZDNDgsMjMuMiw0MC44LDE2LDMyLDE2eicsXG59KTtcbmV4cG9ydCBkZWZhdWx0IFBpbnRlcmVzdEljb247XG4iLCJpbXBvcnQgYXNzZXJ0IGZyb20gJy4vdXRpbHMvYXNzZXJ0JztcbmltcG9ydCBvYmplY3RUb0dldFBhcmFtcyBmcm9tICcuL3V0aWxzL29iamVjdFRvR2V0UGFyYW1zJztcbmltcG9ydCBjcmVhdGVTaGFyZUJ1dHRvbiBmcm9tICcuL2hvY3MvY3JlYXRlU2hhcmVCdXR0b24nO1xuZnVuY3Rpb24gcGludGVyZXN0TGluayh1cmwsIF9hKSB7XG4gICAgdmFyIG1lZGlhID0gX2EubWVkaWEsIGRlc2NyaXB0aW9uID0gX2EuZGVzY3JpcHRpb247XG4gICAgYXNzZXJ0KHVybCwgJ3BpbnRlcmVzdC51cmwnKTtcbiAgICBhc3NlcnQobWVkaWEsICdwaW50ZXJlc3QubWVkaWEnKTtcbiAgICByZXR1cm4gKCdodHRwczovL3BpbnRlcmVzdC5jb20vcGluL2NyZWF0ZS9idXR0b24vJyArXG4gICAgICAgIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICB9KSk7XG59XG52YXIgUGludGVyZXN0U2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbigncGludGVyZXN0JywgcGludGVyZXN0TGluaywgZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoe1xuICAgIG1lZGlhOiBwcm9wcy5tZWRpYSxcbiAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG59KTsgfSwge1xuICAgIHdpbmRvd1dpZHRoOiAxMDAwLFxuICAgIHdpbmRvd0hlaWdodDogNzMwLFxufSk7XG5leHBvcnQgZGVmYXVsdCBQaW50ZXJlc3RTaGFyZUJ1dHRvbjtcbiIsImltcG9ydCBqc29ucCBmcm9tICdqc29ucCc7XG5pbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5pbXBvcnQgY3JlYXRlU2hhcmVDb3VudCBmcm9tICcuL2hvY3MvY3JlYXRlU2hhcmVDb3VudCc7XG5mdW5jdGlvbiBnZXRQaW50ZXJlc3RTaGFyZUNvdW50KHNoYXJlVXJsLCBjYWxsYmFjaykge1xuICAgIHZhciB1cmwgPSAnaHR0cHM6Ly9hcGkucGludGVyZXN0LmNvbS92MS91cmxzL2NvdW50Lmpzb24nO1xuICAgIGpzb25wKHVybCArXG4gICAgICAgIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICAgICAgICAgIHVybDogc2hhcmVVcmwsXG4gICAgICAgIH0pLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKGRhdGEgPyBkYXRhLmNvdW50IDogdW5kZWZpbmVkKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNoYXJlQ291bnQoZ2V0UGludGVyZXN0U2hhcmVDb3VudCk7XG4iLCJpbXBvcnQgY3JlYXRlSWNvbiBmcm9tICcuL2hvY3MvY3JlYXRlSWNvbic7XG52YXIgUG9ja2V0SWNvbiA9IGNyZWF0ZUljb24oe1xuICAgIGNvbG9yOiAnI0VGM0Y1NicsXG4gICAgbmV0d29ya05hbWU6ICdwb2NrZXQnLFxuICAgIHBhdGg6ICdNNDEuMDg0IDI5LjA2NWwtNy41MjggNy44ODJhMi4xMDQgMi4xMDQgMCAwIDEtMS41MjEuNjY2IDIuMTA2IDIuMTA2IDAgMCAxLTEuNTIyLS42NjZsLTcuNTI4LTcuODgyYy0uODc2LS45MTQtLjkwMi0yLjQzLS4wNjUtMy4zODQuODQtLjk1NSAyLjIyOC0uOTg3IDMuMS0uMDcybDYuMDE1IDYuMjg2IDYuMDIyLTYuMjg2Yy44OC0uOTE4IDIuMjYzLS44ODMgMy4xMDIuMDcxLjg0MS45MzguODIgMi40NjUtLjA2IDMuMzgzbC0uMDE1LjAwMnptNi43NzctMTAuOTc2QzQ3LjQ2MyAxNi44NCA0Ni4zNjEgMTYgNDUuMTQgMTZIMTguOTA1Yy0xLjIgMC0yLjI4OS44Mi0yLjcxNiAyLjA0NC0uMTI1LjM2My0uMTg5Ljc0My0uMTg5IDEuMTI1djEwLjUzOWwuMTEyIDIuMDk2Yy40NjQgNC43NjYgMi43MyA4LjkzMyA2LjI0MyAxMS44MzguMDYuMDUzLjEyNS4xMDIuMTkuMTUzbC4wNC4wMzNjMS44ODIgMS40OTkgMy45ODYgMi41MTQgNi4yNTkgMy4wMTRhMTQuNjYyIDE0LjY2MiAwIDAgMCA2LjEzLjA1MmMuMTE4LS4wNDIuMjM1LS4wNjUuMzUzLS4wODcuMDMgMCAuMDY1LS4wMjIuMDk4LS4wNDJhMTUuMzk1IDE1LjM5NSAwIDAgMCA2LjAxMS0yLjk0NWwuMDM5LS4wNDUuMTgtLjE1M2MzLjUwMi0yLjkwMiA1Ljc2NS03LjA3MiA2LjI0OC0xMS44NTJMNDggMjkuNjc0di0xMC41MmMwLS4zNjYtLjA0MS0uNzI4LS4xNjEtMS4wOGwuMDIyLjAxNXonLFxufSk7XG5leHBvcnQgZGVmYXVsdCBQb2NrZXRJY29uO1xuIiwiaW1wb3J0IGFzc2VydCBmcm9tICcuL3V0aWxzL2Fzc2VydCc7XG5pbXBvcnQgY3JlYXRlU2hhcmVCdXR0b24gZnJvbSAnLi9ob2NzL2NyZWF0ZVNoYXJlQnV0dG9uJztcbmltcG9ydCBvYmplY3RUb0dldFBhcmFtcyBmcm9tICcuL3V0aWxzL29iamVjdFRvR2V0UGFyYW1zJztcbmZ1bmN0aW9uIHBvY2tldExpbmsodXJsLCBfYSkge1xuICAgIHZhciB0aXRsZSA9IF9hLnRpdGxlO1xuICAgIGFzc2VydCh1cmwsICdwb2NrZXQudXJsJyk7XG4gICAgcmV0dXJuICgnaHR0cHM6Ly9nZXRwb2NrZXQuY29tL3NhdmUnICtcbiAgICAgICAgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIH0pKTtcbn1cbnZhciBQb2NrZXRTaGFyZUJ1dHRvbiA9IGNyZWF0ZVNoYXJlQnV0dG9uKCdwb2NrZXQnLCBwb2NrZXRMaW5rLCBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuICh7XG4gICAgdGl0bGU6IHByb3BzLnRpdGxlLFxufSk7IH0sIHtcbiAgICB3aW5kb3dXaWR0aDogNTAwLFxuICAgIHdpbmRvd0hlaWdodDogNTAwLFxufSk7XG5leHBvcnQgZGVmYXVsdCBQb2NrZXRTaGFyZUJ1dHRvbjtcbiIsImltcG9ydCBjcmVhdGVJY29uIGZyb20gJy4vaG9jcy9jcmVhdGVJY29uJztcbnZhciBSZWRkaXRJY29uID0gY3JlYXRlSWNvbih7XG4gICAgY29sb3I6ICcjNWY5OWNmJyxcbiAgICBuZXR3b3JrTmFtZTogJ3JlZGRpdCcsXG4gICAgcGF0aDogJ20gNTIuODE2NSwzMS45NDIzNjIgYyAwLC0yLjQ4MDMgLTIuMDI2NCwtNC40OTY1IC00LjUxNjksLTQuNDk2NSAtMS4yMTU1LDAgLTIuMzE3MSwwLjQ4NjIgLTMuMTI4LDEuMjY4MiAtMy4wNzcsLTIuMDI0NyAtNy4yNDAzLC0zLjMxMzMgLTExLjg1MDcsLTMuNDc4MiBsIDIuNTIxMSwtNy45MzczIDYuODI3MiwxLjU5OTcgLTAuMDEwMiwwLjA5ODYgYyAwLDIuMDI4MSAxLjY1NzUsMy42NzcxIDMuNjk1OCwzLjY3NzEgMi4wMzY2LDAgMy42OTI0LC0xLjY0OSAzLjY5MjQsLTMuNjc3MSAwLC0yLjAyODEgLTEuNjU3NSwtMy42Nzg4IC0zLjY5MjQsLTMuNjc4OCAtMS41NjQsMCAtMi44OTY4LDAuOTc1OCAtMy40MzU3LDIuMzQ0MyBsIC03LjM1OTMsLTEuNzI1NSBjIC0wLjMyMTMsLTAuMDc4MiAtMC42NDc3LDAuMTA3MSAtMC43NDgsMC40MjMzIEwgMzIsMjUuMjEyMDYyIGMgLTQuODI0NiwwLjA1NzggLTkuMTk1MywxLjM1NjYgLTEyLjQxLDMuNDQyNSAtMC44MDU4LC0wLjc0NDYgLTEuODc1MSwtMS4yMTA0IC0zLjA1ODMsLTEuMjEwNCAtMi40OTA1LDAgLTQuNTE1MiwyLjAxNzkgLTQuNTE1Miw0LjQ5ODIgMCwxLjY0OSAwLjkwNjEsMy4wNzg3IDIuMjM4OSwzLjg2MDcgLTAuMDg4NCwwLjQ3OTQgLTAuMTQ2MiwwLjk2MzkgLTAuMTQ2MiwxLjQ1NjkgMCw2LjY0ODcgOC4xNzM2LDEyLjA1ODEgMTguMjIyMywxMi4wNTgxIDEwLjA0ODcsMCAxOC4yMjQsLTUuNDA5NCAxOC4yMjQsLTEyLjA1ODEgMCwtMC40NjU4IC0wLjA0OTMsLTAuOTI0OCAtMC4xMjc1LC0xLjM3NyAxLjQxNDQsLTAuNzU5OSAyLjM4ODUsLTIuMjMwNCAyLjM4ODUsLTMuOTQwNiB6IG0gLTI5LjI4MDgsMy4wODcyIGMgMCwtMS40NzU2IDEuMjA3LC0yLjY3NzUgMi42ODk0LC0yLjY3NzUgMS40ODI0LDAgMi42ODc3LDEuMjAxOSAyLjY4NzcsMi42Nzc1IDAsMS40NzU2IC0xLjIwNTMsMi42NzU4IC0yLjY4NzcsMi42NzU4IC0xLjQ4MjQsMCAtMi42ODk0LC0xLjIwMDIgLTIuNjg5NCwtMi42NzU4IHogbSAxNS40MDM3LDcuOTM3MyBjIC0xLjM1NDksMS4zNDgxIC0zLjQ4MTYsMi4wMDQzIC02LjUwMDgsMi4wMDQzIGwgLTAuMDIyMSwtMC4wMDUxIC0wLjAyMjEsMC4wMDUxIGMgLTMuMDIwOSwwIC01LjE0NzYsLTAuNjU2MiAtNi41MDA4LC0yLjAwNDMgLTAuMjQ2NSwtMC4yNDQ4IC0wLjI0NjUsLTAuNjQ0MyAwLC0wLjg4OTEgMC4yNDY1LC0wLjI0NjUgMC42NDc3LC0wLjI0NjUgMC44OTQyLDAgMS4xMDUsMS4wOTk5IDIuOTM5MywxLjYzMzcgNS42MDY2LDEuNjMzNyBsIDAuMDIyMSwwLjAwNTEgMC4wMjIxLC0wLjAwNTEgYyAyLjY2NzMsMCA0LjUwMTYsLTAuNTM1NSA1LjYwNjYsLTEuNjM1NCAwLjI0NjUsLTAuMjQ2NSAwLjY0NzcsLTAuMjQ0OCAwLjg5NDIsMCAwLjI0NjUsMC4yNDY1IDAuMjQ2NSwwLjY0NDMgMCwwLjg5MDggeiBtIC0wLjMyMTMsLTUuMjYxNSBjIC0xLjQ4MjQsMCAtMi42ODc3LC0xLjIwMDIgLTIuNjg3NywtMi42NzU4IDAsLTEuNDc1NiAxLjIwNTMsLTIuNjc3NSAyLjY4NzcsLTIuNjc3NSAxLjQ4MjQsMCAyLjY4NzcsMS4yMDE5IDIuNjg3NywyLjY3NzUgMCwxLjQ3NTYgLTEuMjA1MywyLjY3NTggLTIuNjg3NywyLjY3NTggeicsXG59KTtcbmV4cG9ydCBkZWZhdWx0IFJlZGRpdEljb247XG4iLCJpbXBvcnQgYXNzZXJ0IGZyb20gJy4vdXRpbHMvYXNzZXJ0JztcbmltcG9ydCBvYmplY3RUb0dldFBhcmFtcyBmcm9tICcuL3V0aWxzL29iamVjdFRvR2V0UGFyYW1zJztcbmltcG9ydCBjcmVhdGVTaGFyZUJ1dHRvbiBmcm9tICcuL2hvY3MvY3JlYXRlU2hhcmVCdXR0b24nO1xuZnVuY3Rpb24gcmVkZGl0TGluayh1cmwsIF9hKSB7XG4gICAgdmFyIHRpdGxlID0gX2EudGl0bGU7XG4gICAgYXNzZXJ0KHVybCwgJ3JlZGRpdC51cmwnKTtcbiAgICByZXR1cm4gKCdodHRwczovL3d3dy5yZWRkaXQuY29tL3N1Ym1pdCcgK1xuICAgICAgICBvYmplY3RUb0dldFBhcmFtcyh7XG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgfSkpO1xufVxudmFyIFJlZGRpdFNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oJ3JlZGRpdCcsIHJlZGRpdExpbmssIGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gKHtcbiAgICB0aXRsZTogcHJvcHMudGl0bGUsXG59KTsgfSwge1xuICAgIHdpbmRvd1dpZHRoOiA2NjAsXG4gICAgd2luZG93SGVpZ2h0OiA0NjAsXG4gICAgd2luZG93UG9zaXRpb246ICd3aW5kb3dDZW50ZXInLFxufSk7XG5leHBvcnQgZGVmYXVsdCBSZWRkaXRTaGFyZUJ1dHRvbjtcbiIsImltcG9ydCBqc29ucCBmcm9tICdqc29ucCc7XG5pbXBvcnQgY3JlYXRlU2hhcmVDb3VudCBmcm9tICcuL2hvY3MvY3JlYXRlU2hhcmVDb3VudCc7XG5mdW5jdGlvbiBnZXRSZWRkaXRTaGFyZUNvdW50KHNoYXJlVXJsLCBjYWxsYmFjaykge1xuICAgIHZhciBlbmRwb2ludCA9IFwiaHR0cHM6Ly93d3cucmVkZGl0LmNvbS9hcGkvaW5mby5qc29uP2xpbWl0PTEmdXJsPVwiICsgc2hhcmVVcmw7XG4gICAganNvbnAoZW5kcG9pbnQsIHsgcGFyYW06ICdqc29ucCcgfSwgZnVuY3Rpb24gKGVyciwgcmVzcG9uc2UpIHtcbiAgICAgICAgY2FsbGJhY2soIWVyciAmJlxuICAgICAgICAgICAgcmVzcG9uc2UgJiZcbiAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEgJiZcbiAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuY2hpbGRyZW4ubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5jaGlsZHJlblswXS5kYXRhLnNjb3JlXG4gICAgICAgICAgICA/IHJlc3BvbnNlLmRhdGEuY2hpbGRyZW5bMF0uZGF0YS5zY29yZVxuICAgICAgICAgICAgOiB1bmRlZmluZWQpO1xuICAgIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hhcmVDb3VudChnZXRSZWRkaXRTaGFyZUNvdW50KTtcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG52YXIgaXNQcm9taXNlID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiAhIW9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nO1xufTtcbnZhciBnZXRCb3hQb3NpdGlvbk9uV2luZG93Q2VudGVyID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHsgcmV0dXJuICh7XG4gICAgbGVmdDogd2luZG93Lm91dGVyV2lkdGggLyAyICsgKHdpbmRvdy5zY3JlZW5YIHx8IHdpbmRvdy5zY3JlZW5MZWZ0IHx8IDApIC0gd2lkdGggLyAyLFxuICAgIHRvcDogd2luZG93Lm91dGVySGVpZ2h0IC8gMiArICh3aW5kb3cuc2NyZWVuWSB8fCB3aW5kb3cuc2NyZWVuVG9wIHx8IDApIC0gaGVpZ2h0IC8gMixcbn0pOyB9O1xudmFyIGdldEJveFBvc2l0aW9uT25TY3JlZW5DZW50ZXIgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkgeyByZXR1cm4gKHtcbiAgICB0b3A6ICh3aW5kb3cuc2NyZWVuLmhlaWdodCAtIGhlaWdodCkgLyAyLFxuICAgIGxlZnQ6ICh3aW5kb3cuc2NyZWVuLndpZHRoIC0gd2lkdGgpIC8gMixcbn0pOyB9O1xuZnVuY3Rpb24gd2luZG93T3Blbih1cmwsIF9hLCBvbkNsb3NlKSB7XG4gICAgdmFyIGhlaWdodCA9IF9hLmhlaWdodCwgd2lkdGggPSBfYS53aWR0aCwgY29uZmlnUmVzdCA9IF9fcmVzdChfYSwgW1wiaGVpZ2h0XCIsIFwid2lkdGhcIl0pO1xuICAgIHZhciBjb25maWcgPSBfX2Fzc2lnbih7IGhlaWdodDogaGVpZ2h0LFxuICAgICAgICB3aWR0aDogd2lkdGgsIGxvY2F0aW9uOiAnbm8nLCB0b29sYmFyOiAnbm8nLCBzdGF0dXM6ICdubycsIGRpcmVjdG9yaWVzOiAnbm8nLCBtZW51YmFyOiAnbm8nLCBzY3JvbGxiYXJzOiAneWVzJywgcmVzaXphYmxlOiAnbm8nLCBjZW50ZXJzY3JlZW46ICd5ZXMnLCBjaHJvbWU6ICd5ZXMnIH0sIGNvbmZpZ1Jlc3QpO1xuICAgIHZhciBzaGFyZURpYWxvZyA9IHdpbmRvdy5vcGVuKHVybCwgJycsIE9iamVjdC5rZXlzKGNvbmZpZylcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgKyBcIj1cIiArIGNvbmZpZ1trZXldOyB9KVxuICAgICAgICAuam9pbignLCAnKSk7XG4gICAgaWYgKG9uQ2xvc2UpIHtcbiAgICAgICAgdmFyIGludGVydmFsXzEgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoc2hhcmVEaWFsb2cgPT09IG51bGwgfHwgc2hhcmVEaWFsb2cuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsXzEpO1xuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlKHNoYXJlRGlhbG9nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG4gICAgcmV0dXJuIHNoYXJlRGlhbG9nO1xufVxudmFyIFNoYXJlQnV0dG9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTaGFyZUJ1dHRvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTaGFyZUJ1dHRvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm9wZW5TaGFyZURpYWxvZyA9IGZ1bmN0aW9uIChsaW5rKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcywgb25TaGFyZVdpbmRvd0Nsb3NlID0gX2Eub25TaGFyZVdpbmRvd0Nsb3NlLCBfYiA9IF9hLndpbmRvd0hlaWdodCwgd2luZG93SGVpZ2h0ID0gX2IgPT09IHZvaWQgMCA/IDQwMCA6IF9iLCBfYyA9IF9hLndpbmRvd1Bvc2l0aW9uLCB3aW5kb3dQb3NpdGlvbiA9IF9jID09PSB2b2lkIDAgPyAnd2luZG93Q2VudGVyJyA6IF9jLCBfZCA9IF9hLndpbmRvd1dpZHRoLCB3aW5kb3dXaWR0aCA9IF9kID09PSB2b2lkIDAgPyA1NTAgOiBfZDtcbiAgICAgICAgICAgIHZhciB3aW5kb3dDb25maWcgPSBfX2Fzc2lnbih7IGhlaWdodDogd2luZG93SGVpZ2h0LCB3aWR0aDogd2luZG93V2lkdGggfSwgKHdpbmRvd1Bvc2l0aW9uID09PSAnd2luZG93Q2VudGVyJ1xuICAgICAgICAgICAgICAgID8gZ2V0Qm94UG9zaXRpb25PbldpbmRvd0NlbnRlcih3aW5kb3dXaWR0aCwgd2luZG93SGVpZ2h0KVxuICAgICAgICAgICAgICAgIDogZ2V0Qm94UG9zaXRpb25PblNjcmVlbkNlbnRlcih3aW5kb3dXaWR0aCwgd2luZG93SGVpZ2h0KSkpO1xuICAgICAgICAgICAgd2luZG93T3BlbihsaW5rLCB3aW5kb3dDb25maWcsIG9uU2hhcmVXaW5kb3dDbG9zZSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EsIGJlZm9yZU9uQ2xpY2ssIGRpc2FibGVkLCBuZXR3b3JrTGluaywgb25DbGljaywgdXJsLCBvcGVuU2hhcmVEaWFsb2dPbkNsaWNrLCBvcHRzLCBsaW5rLCByZXR1cm5WYWw7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXMucHJvcHMsIGJlZm9yZU9uQ2xpY2sgPSBfYS5iZWZvcmVPbkNsaWNrLCBkaXNhYmxlZCA9IF9hLmRpc2FibGVkLCBuZXR3b3JrTGluayA9IF9hLm5ldHdvcmtMaW5rLCBvbkNsaWNrID0gX2Eub25DbGljaywgdXJsID0gX2EudXJsLCBvcGVuU2hhcmVEaWFsb2dPbkNsaWNrID0gX2Eub3BlblNoYXJlRGlhbG9nT25DbGljaywgb3B0cyA9IF9hLm9wdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rID0gbmV0d29ya0xpbmsodXJsLCBvcHRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJlZm9yZU9uQ2xpY2spIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsID0gYmVmb3JlT25DbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1Byb21pc2UocmV0dXJuVmFsKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXR1cm5WYWxdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcGVuU2hhcmVEaWFsb2dPbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuU2hhcmVEaWFsb2cobGluayk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25DbGljaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2soZXZlbnQsIGxpbmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTaGFyZUJ1dHRvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBiZWZvcmVPbkNsaWNrID0gX2EuYmVmb3JlT25DbGljaywgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLCBkaXNhYmxlZCA9IF9hLmRpc2FibGVkLCBkaXNhYmxlZFN0eWxlID0gX2EuZGlzYWJsZWRTdHlsZSwgZm9yd2FyZGVkUmVmID0gX2EuZm9yd2FyZGVkUmVmLCBuZXR3b3JrTGluayA9IF9hLm5ldHdvcmtMaW5rLCBuZXR3b3JrTmFtZSA9IF9hLm5ldHdvcmtOYW1lLCBvblNoYXJlV2luZG93Q2xvc2UgPSBfYS5vblNoYXJlV2luZG93Q2xvc2UsIG9wZW5TaGFyZURpYWxvZ09uQ2xpY2sgPSBfYS5vcGVuU2hhcmVEaWFsb2dPbkNsaWNrLCBvcHRzID0gX2Eub3B0cywgcmVzZXRCdXR0b25TdHlsZSA9IF9hLnJlc2V0QnV0dG9uU3R5bGUsIHN0eWxlID0gX2Euc3R5bGUsIHVybCA9IF9hLnVybCwgd2luZG93SGVpZ2h0ID0gX2Eud2luZG93SGVpZ2h0LCB3aW5kb3dQb3NpdGlvbiA9IF9hLndpbmRvd1Bvc2l0aW9uLCB3aW5kb3dXaWR0aCA9IF9hLndpbmRvd1dpZHRoLCByZXN0ID0gX19yZXN0KF9hLCBbXCJiZWZvcmVPbkNsaWNrXCIsIFwiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkU3R5bGVcIiwgXCJmb3J3YXJkZWRSZWZcIiwgXCJuZXR3b3JrTGlua1wiLCBcIm5ldHdvcmtOYW1lXCIsIFwib25TaGFyZVdpbmRvd0Nsb3NlXCIsIFwib3BlblNoYXJlRGlhbG9nT25DbGlja1wiLCBcIm9wdHNcIiwgXCJyZXNldEJ1dHRvblN0eWxlXCIsIFwic3R5bGVcIiwgXCJ1cmxcIiwgXCJ3aW5kb3dIZWlnaHRcIiwgXCJ3aW5kb3dQb3NpdGlvblwiLCBcIndpbmRvd1dpZHRoXCJdKTtcbiAgICAgICAgdmFyIG5ld0NsYXNzTmFtZSA9IGN4KCdyZWFjdC1zaGFyZV9fU2hhcmVCdXR0b24nLCB7XG4gICAgICAgICAgICAncmVhY3Qtc2hhcmVfX1NoYXJlQnV0dG9uLS1kaXNhYmxlZCc6ICEhZGlzYWJsZWQsXG4gICAgICAgICAgICBkaXNhYmxlZDogISFkaXNhYmxlZCxcbiAgICAgICAgfSwgY2xhc3NOYW1lKTtcbiAgICAgICAgdmFyIG5ld1N0eWxlID0gcmVzZXRCdXR0b25TdHlsZVxuICAgICAgICAgICAgPyBfX2Fzc2lnbihfX2Fzc2lnbih7IGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JywgYm9yZGVyOiAnbm9uZScsIHBhZGRpbmc6IDAsIGZvbnQ6ICdpbmhlcml0JywgY29sb3I6ICdpbmhlcml0JywgY3Vyc29yOiAncG9pbnRlcicgfSwgc3R5bGUpLCAoZGlzYWJsZWQgJiYgZGlzYWJsZWRTdHlsZSkpIDogX19hc3NpZ24oX19hc3NpZ24oe30sIHN0eWxlKSwgKGRpc2FibGVkICYmIGRpc2FibGVkU3R5bGUpKTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIF9fYXNzaWduKHt9LCByZXN0LCB7IFwiYXJpYS1sYWJlbFwiOiByZXN0WydhcmlhLWxhYmVsJ10gfHwgbmV0d29ya05hbWUsIGNsYXNzTmFtZTogbmV3Q2xhc3NOYW1lLCBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrLCByZWY6IGZvcndhcmRlZFJlZiwgc3R5bGU6IG5ld1N0eWxlIH0pLCBjaGlsZHJlbikpO1xuICAgIH07XG4gICAgU2hhcmVCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBkaXNhYmxlZFN0eWxlOiB7IG9wYWNpdHk6IDAuNiB9LFxuICAgICAgICBvcGVuU2hhcmVEaWFsb2dPbkNsaWNrOiB0cnVlLFxuICAgICAgICByZXNldEJ1dHRvblN0eWxlOiB0cnVlLFxuICAgIH07XG4gICAgcmV0dXJuIFNoYXJlQnV0dG9uO1xufShDb21wb25lbnQpKTtcbmV4cG9ydCBkZWZhdWx0IFNoYXJlQnV0dG9uO1xuIiwiaW1wb3J0IGNyZWF0ZUljb24gZnJvbSAnLi9ob2NzL2NyZWF0ZUljb24nO1xudmFyIFRlbGVncmFtSWNvbiA9IGNyZWF0ZUljb24oe1xuICAgIGNvbG9yOiAnIzM3YWVlMicsXG4gICAgbmV0d29ya05hbWU6ICd0ZWxlZ3JhbScsXG4gICAgcGF0aDogJ200NS45MDg3MywxNS40NDMzNWMtMC42OTAxLC0wLjAyODEgLTEuMzc2NjgsMC4xNDA0OCAtMS45NjE0MiwwLjQxMjY1Yy0wLjg0OTg5LDAuMzI2NjEgLTguNjM5MzksMy4zMzk4NiAtMTYuNTIzNyw2LjM5MTc0Yy0zLjk2ODUsMS41MzI5NiAtNy45MzM0OSwzLjA2NTkzIC0xMC45ODUzNyw0LjI0MDY3Yy0zLjA1MDEyLDEuMTc2NSAtNS4zNDY5NCwyLjA1MDk4IC01LjQ2ODEsMi4wOTMxMmMtMC44MDc3NSwwLjI4MDk2IC0xLjg5OTk2LDAuNjM1NjYgLTIuODI3MTIsMS43Mjc4OGMtMC4yMzM1NCwwLjI3MjE4IC0wLjQ2ODg0LDAuNjIxNjEgLTAuNTg4MjUsMS4xMDI3NWMtMC4xMTk0MSwwLjQ4MTE0IC0wLjA2NjczLDEuMDkyMjIgMC4xNjY4MiwxLjU3MTZjMC40NjUzMywwLjk2MDUyIDEuMjUzNzYsMS4zNTczNyAyLjE4NDQzLDEuNzEzODNjMy4wOTA1MSwwLjk5MDM3IDYuMjg2MzgsMS45MzUwOCA4LjkzMjYzLDIuODIzNmMwLjk3NjMyLDMuNDQxNzEgMS45MTQwMSw2Ljg5NTcxIDIuODQxMTYsMTAuMzQyNjhjMC4zMDU1NCwwLjY5MTg1IDAuOTcxMDUsMC45NDgyMyAxLjY1NzY0LDAuOTU1MjVsLTAuMDAzNTEsMC4wMzUxMmMwLDAgMC41MzkwOCwwLjA1MjY4IDEuMDY0MTIsLTAuMDczNzVjMC41MjY3OSwtMC4xMjI5MiAxLjE4ODc5LC0wLjQyODQ2IDEuNzkxMDksLTAuOTkyMTJjMC42NjIsLTAuNjIxNjEgMi40NTgzNiwtMi4zODgxMiAzLjQ3NjgzLC0zLjM4NTUybDcuNjczNiw1LjY2NDc3bDAuMDYxNDYsMC4wMzUxMmMwLDAgMC44NDk4OSwwLjU5NzAzIDIuMDkzMTIsMC42ODEzMmMwLjYyMTYxLDAuMDQyMTQgMS40Mzk5LC0wLjA3NzI2IDIuMTQyMjksLTAuNTkxNzZjMC43MDc2NiwtMC41MTYyNiAxLjE3NjUsLTEuMzQ2ODMgMS4zOTYsLTIuMjk1MDZjMC42NTY3MywtMi44NjIyNCA1LjAwOTc5LC0yMy41Nzc0NSA1Ljc1MjU3LC0yNy4wMDY4NmwtMC4wMjEwNywwLjA4MDc3YzAuNTE5NzcsLTEuOTMxNTcgMC4zMjgzNywtMy43MDE1OSAtMC44NzA5NiwtNC43NDk5MWMtMC42MDA1NCwtMC41MjE1MiAtMS4yOTI0LC0wLjc0OTggLTEuOTg0MjUsLTAuNzc5NjVsMCwwLjAwMTc2em0tMC4yMDcyLDMuMjkwNjljMC4wNDc0MSwwLjA0MzkgMC4wNDM5LDAuMDQzOSAwLjAwMzUxLDAuMDQ3NDFjLTAuMDEyMjksLTAuMDAzNTEgMC4xNDA0OCwwLjIwNzIgLTAuMTU4MDQsMS4zMjU3NmwtMC4wMTIyOSwwLjA0MjE0bC0wLjAwODc4LDAuMDM4NjNjLTAuNzU4NTgsMy41MDY2OCAtNS4xNTU1NCwyNC40MDgwMiAtNS43NDIwMywyNi45NjQ3MmMtMC4wODA3NywwLjM0NDE3IC0wLjExNDE0LDAuMzE5NTkgLTAuMDk0ODIsMC4yOTg1MmMtMC4xNzU2LC0wLjAyNjM0IC0wLjUwMDQ1LC0wLjE2NTA2IC0wLjUyNjc5LC0wLjE3NTZsLTEzLjEzNDY4LC05LjcwMTc1YzQuNDk4OCwtNC4zMzE5OSA5LjA5OTQ1LC04LjI1MzA3IDEzLjc0NCwtMTIuNDMyMjljMC44MjE4LC0wLjQxMjY1IDAuNjg0ODMsLTEuNjg1NzMgLTAuMjk4NTIsLTEuNzA2ODFjLTEuMDQzMDUsMC4yNDU4NCAtMS45MjI3OSwwLjk5NTY0IC0yLjg3OTgsMS40NzUwMmMtNS40OTk3MSwzLjI2MjYgLTExLjExODgyLDYuMTMxODYgLTE2LjU1ODgyLDkuNDkyNzljLTIuNzkyLC0wLjk3MTA1IC01LjU3ODczLC0xLjc3NzA0IC04LjE1Mjk4LC0yLjU3NjAxYzIuMjMzNiwtMC44OTU1NSA0LjAwODg5LC0xLjU1NTc5IDUuNzU2MDgsLTIuMjMwMDljMy4wNTE4OCwtMS4xNzY1IDcuMDE2ODcsLTIuNzA0MiAxMC45ODUzNywtNC4yNDA2N2M3Ljk0MDUxLC0zLjA2OTQ0IDE1LjkyNjY3LC02LjE2MzQ2IDE2LjYyMDI4LC02LjQzMDM3bDAuMDU2MTksLTAuMDIyODNsMC4wNTI2OCwtMC4wMjI4M2MwLjE5MzE2LC0wLjA4NzggMC4zMDM3OCwtMC4wOTY1OCAwLjM1NDcxLC0wLjEwMDA5YzAsMCAtMC4wMTc1NiwtMC4wNTc5NSAtMC4wMDM1MSwtMC4wNDU2NmwtMC4wMDE3Niwwem0tMjAuOTE3MTUsMjIuMDYzOGwyLjE2Njg3LDEuNjAxNDVjLTAuOTM0MTgsMC45MTMxMSAtMS44MTc0MywxLjc3MzUzIC0yLjQ1NDg1LDIuMzg4MTJsMC4yODc5OCwtMy45ODk1NycsXG59KTtcbmV4cG9ydCBkZWZhdWx0IFRlbGVncmFtSWNvbjtcbiIsImltcG9ydCBhc3NlcnQgZnJvbSAnLi91dGlscy9hc3NlcnQnO1xuaW1wb3J0IG9iamVjdFRvR2V0UGFyYW1zIGZyb20gJy4vdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMnO1xuaW1wb3J0IGNyZWF0ZVNoYXJlQnV0dG9uIGZyb20gJy4vaG9jcy9jcmVhdGVTaGFyZUJ1dHRvbic7XG5mdW5jdGlvbiB0ZWxlZ3JhbUxpbmsodXJsLCBfYSkge1xuICAgIHZhciB0aXRsZSA9IF9hLnRpdGxlO1xuICAgIGFzc2VydCh1cmwsICd0ZWxlZ3JhbS51cmwnKTtcbiAgICByZXR1cm4gKCdodHRwczovL3RlbGVncmFtLm1lL3NoYXJlLycgK1xuICAgICAgICBvYmplY3RUb0dldFBhcmFtcyh7XG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICB9KSk7XG59XG52YXIgVGVsZWdyYW1TaGFyZUJ1dHRvbiA9IGNyZWF0ZVNoYXJlQnV0dG9uKCd0ZWxlZ3JhbScsIHRlbGVncmFtTGluaywgZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoe1xuICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbn0pOyB9LCB7XG4gICAgd2luZG93V2lkdGg6IDU1MCxcbiAgICB3aW5kb3dIZWlnaHQ6IDQwMCxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgVGVsZWdyYW1TaGFyZUJ1dHRvbjtcbiIsImltcG9ydCBjcmVhdGVJY29uIGZyb20gJy4vaG9jcy9jcmVhdGVJY29uJztcbnZhciBUdW1ibHJJY29uID0gY3JlYXRlSWNvbih7XG4gICAgY29sb3I6ICcjMmM0NzYyJyxcbiAgICBuZXR3b3JrTmFtZTogJ3R1bWJscicsXG4gICAgcGF0aDogJ00zOS4yLDQxYy0wLjYsMC4zLTEuNiwwLjUtMi40LDAuNWMtMi40LDAuMS0yLjktMS43LTIuOS0zdi05LjNoNnYtNC41aC02VjE3YzAsMC00LjMsMC00LjQsMCBjLTAuMSwwLTAuMiwwLjEtMC4yLDAuMmMtMC4zLDIuMy0xLjQsNi40LTUuOSw4LjF2My45aDNWMzljMCwzLjQsMi41LDguMSw5LDhjMi4yLDAsNC43LTEsNS4yLTEuOEwzOS4yLDQxeicsXG59KTtcbmV4cG9ydCBkZWZhdWx0IFR1bWJsckljb247XG4iLCJpbXBvcnQgYXNzZXJ0IGZyb20gJy4vdXRpbHMvYXNzZXJ0JztcbmltcG9ydCBvYmplY3RUb0dldFBhcmFtcyBmcm9tICcuL3V0aWxzL29iamVjdFRvR2V0UGFyYW1zJztcbmltcG9ydCBjcmVhdGVTaGFyZUJ1dHRvbiBmcm9tICcuL2hvY3MvY3JlYXRlU2hhcmVCdXR0b24nO1xuZnVuY3Rpb24gdHVtYmxyTGluayh1cmwsIF9hKSB7XG4gICAgdmFyIHRpdGxlID0gX2EudGl0bGUsIGNhcHRpb24gPSBfYS5jYXB0aW9uLCB0YWdzID0gX2EudGFncywgcG9zdHR5cGUgPSBfYS5wb3N0dHlwZTtcbiAgICBhc3NlcnQodXJsLCAndHVtYmxyLnVybCcpO1xuICAgIHJldHVybiAoJ2h0dHBzOi8vd3d3LnR1bWJsci5jb20vd2lkZ2V0cy9zaGFyZS90b29sJyArXG4gICAgICAgIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICAgICAgICAgIGNhbm9uaWNhbFVybDogdXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgY2FwdGlvbjogY2FwdGlvbixcbiAgICAgICAgICAgIHRhZ3M6IHRhZ3MsXG4gICAgICAgICAgICBwb3N0dHlwZTogcG9zdHR5cGUsXG4gICAgICAgIH0pKTtcbn1cbnZhciBUdW1ibHJTaGFyZUJ1dHRvbiA9IGNyZWF0ZVNoYXJlQnV0dG9uKCd0dW1ibHInLCB0dW1ibHJMaW5rLCBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuICh7XG4gICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgIHRhZ3M6IChwcm9wcy50YWdzIHx8IFtdKS5qb2luKCcsJyksXG4gICAgY2FwdGlvbjogcHJvcHMuY2FwdGlvbixcbiAgICBwb3N0dHlwZTogcHJvcHMucG9zdHR5cGUgfHwgJ2xpbmsnLFxufSk7IH0sIHtcbiAgICB3aW5kb3dXaWR0aDogNjYwLFxuICAgIHdpbmRvd0hlaWdodDogNDYwLFxufSk7XG5leHBvcnQgZGVmYXVsdCBUdW1ibHJTaGFyZUJ1dHRvbjtcbiIsImltcG9ydCBqc29ucCBmcm9tICdqc29ucCc7XG5pbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5pbXBvcnQgY3JlYXRlU2hhcmVDb3VudCBmcm9tICcuL2hvY3MvY3JlYXRlU2hhcmVDb3VudCc7XG5mdW5jdGlvbiBnZXRUdW1ibHJTaGFyZUNvdW50KHNoYXJlVXJsLCBjYWxsYmFjaykge1xuICAgIHZhciBlbmRwb2ludCA9ICdodHRwczovL2FwaS50dW1ibHIuY29tL3YyL3NoYXJlL3N0YXRzJztcbiAgICByZXR1cm4ganNvbnAoZW5kcG9pbnQgK1xuICAgICAgICBvYmplY3RUb0dldFBhcmFtcyh7XG4gICAgICAgICAgICB1cmw6IHNoYXJlVXJsLFxuICAgICAgICB9KSwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgICAgICBjYWxsYmFjayghZXJyICYmIGRhdGEgJiYgZGF0YS5yZXNwb25zZSA/IGRhdGEucmVzcG9uc2Uubm90ZV9jb3VudCA6IHVuZGVmaW5lZCk7XG4gICAgfSk7XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaGFyZUNvdW50KGdldFR1bWJsclNoYXJlQ291bnQpO1xuIiwiaW1wb3J0IGNyZWF0ZUljb24gZnJvbSAnLi9ob2NzL2NyZWF0ZUljb24nO1xudmFyIFR3aXR0ZXJJY29uID0gY3JlYXRlSWNvbih7XG4gICAgY29sb3I6ICcjMDBhY2VkJyxcbiAgICBuZXR3b3JrTmFtZTogJ3R3aXR0ZXInLFxuICAgIHBhdGg6ICdNNDgsMjIuMWMtMS4yLDAuNS0yLjQsMC45LTMuOCwxYzEuNC0wLjgsMi40LTIuMSwyLjktMy42Yy0xLjMsMC44LTIuNywxLjMtNC4yLDEuNiBDNDEuNywxOS44LDQwLDE5LDM4LjIsMTljLTMuNiwwLTYuNiwyLjktNi42LDYuNmMwLDAuNSwwLjEsMSwwLjIsMS41Yy01LjUtMC4zLTEwLjMtMi45LTEzLjUtNi45Yy0wLjYsMS0wLjksMi4xLTAuOSwzLjMgYzAsMi4zLDEuMiw0LjMsMi45LDUuNWMtMS4xLDAtMi4xLTAuMy0zLTAuOGMwLDAsMCwwLjEsMCwwLjFjMCwzLjIsMi4zLDUuOCw1LjMsNi40Yy0wLjYsMC4xLTEuMSwwLjItMS43LDAuMmMtMC40LDAtMC44LDAtMS4yLTAuMSBjMC44LDIuNiwzLjMsNC41LDYuMSw0LjZjLTIuMiwxLjgtNS4xLDIuOC04LjIsMi44Yy0wLjUsMC0xLjEsMC0xLjYtMC4xYzIuOSwxLjksNi40LDIuOSwxMC4xLDIuOWMxMi4xLDAsMTguNy0xMCwxOC43LTE4LjcgYzAtMC4zLDAtMC42LDAtMC44QzQ2LDI0LjUsNDcuMSwyMy40LDQ4LDIyLjF6Jyxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgVHdpdHRlckljb247XG4iLCJpbXBvcnQgYXNzZXJ0IGZyb20gJy4vdXRpbHMvYXNzZXJ0JztcbmltcG9ydCBvYmplY3RUb0dldFBhcmFtcyBmcm9tICcuL3V0aWxzL29iamVjdFRvR2V0UGFyYW1zJztcbmltcG9ydCBjcmVhdGVTaGFyZUJ1dHRvbiBmcm9tICcuL2hvY3MvY3JlYXRlU2hhcmVCdXR0b24nO1xuZnVuY3Rpb24gdHdpdHRlckxpbmsodXJsLCBfYSkge1xuICAgIHZhciB0aXRsZSA9IF9hLnRpdGxlLCB2aWEgPSBfYS52aWEsIF9iID0gX2EuaGFzaHRhZ3MsIGhhc2h0YWdzID0gX2IgPT09IHZvaWQgMCA/IFtdIDogX2IsIF9jID0gX2EucmVsYXRlZCwgcmVsYXRlZCA9IF9jID09PSB2b2lkIDAgPyBbXSA6IF9jO1xuICAgIGFzc2VydCh1cmwsICd0d2l0dGVyLnVybCcpO1xuICAgIGFzc2VydChBcnJheS5pc0FycmF5KGhhc2h0YWdzKSwgJ3R3aXR0ZXIuaGFzaHRhZ3MgaXMgbm90IGFuIGFycmF5Jyk7XG4gICAgYXNzZXJ0KEFycmF5LmlzQXJyYXkocmVsYXRlZCksICd0d2l0dGVyLnJlbGF0ZWQgaXMgbm90IGFuIGFycmF5Jyk7XG4gICAgcmV0dXJuICgnaHR0cHM6Ly90d2l0dGVyLmNvbS9zaGFyZScgK1xuICAgICAgICBvYmplY3RUb0dldFBhcmFtcyh7XG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgICAgdmlhOiB2aWEsXG4gICAgICAgICAgICBoYXNodGFnczogaGFzaHRhZ3MubGVuZ3RoID4gMCA/IGhhc2h0YWdzLmpvaW4oJywnKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJlbGF0ZWQ6IHJlbGF0ZWQubGVuZ3RoID4gMCA/IHJlbGF0ZWQuam9pbignLCcpIDogdW5kZWZpbmVkLFxuICAgICAgICB9KSk7XG59XG52YXIgVHdpdHRlclNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oJ3R3aXR0ZXInLCB0d2l0dGVyTGluaywgZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoe1xuICAgIGhhc2h0YWdzOiBwcm9wcy5oYXNodGFncyxcbiAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgdmlhOiBwcm9wcy52aWEsXG4gICAgcmVsYXRlZDogcHJvcHMucmVsYXRlZCxcbn0pOyB9LCB7XG4gICAgd2luZG93V2lkdGg6IDU1MCxcbiAgICB3aW5kb3dIZWlnaHQ6IDQwMCxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgVHdpdHRlclNoYXJlQnV0dG9uO1xuIiwiaW1wb3J0IGNyZWF0ZUljb24gZnJvbSAnLi9ob2NzL2NyZWF0ZUljb24nO1xudmFyIFZLSWNvbiA9IGNyZWF0ZUljb24oe1xuICAgIGNvbG9yOiAnIzQ1NjY4ZScsXG4gICAgbmV0d29ya05hbWU6ICd2aycsXG4gICAgcGF0aDogJ000NC45NCw0NC44NGgtMC4yYy0yLjE3LS4zNi0zLjY2LTEuOTItNC45Mi0zLjM3QzM5LjEsNDAuNjYsMzgsMzguODEsMzYuNywzOWMtMS44NS4zLS45MywzLjUyLTEuNzEsNC45LTAuNjIsMS4xMS0zLjI5LjkxLTUuMTIsMC43MS01Ljc5LS42Mi04Ljc1LTMuNzctMTEuMzUtNy4xNEE2NC4xMyw2NC4xMywwLDAsMSwxMS42LDI2YTEwLjU5LDEwLjU5LDAsMCwxLTEuNTEtNC40OUMxMSwyMC43LDEyLjU2LDIxLDE0LjExLDIxYzEuMzEsMCwzLjM2LS4yOSw0LjMyLjJDMTksMjEuNDYsMTkuNTcsMjMsMjAsMjRhMzcuMTgsMzcuMTgsMCwwLDAsMy4zMSw1LjgyYzAuNTYsMC44MSwxLjQxLDIuMzUsMi40MSwyLjE0czEuMDYtMi42MywxLjEtNC4xOGMwLTEuNzcsMC00LS41LTQuOVMyNSwyMiwyNC4xNSwyMS40N2MwLjczLTEuNDksMi43Mi0xLjYzLDUuMTItMS42MywyLDAsNC44NC0uMjMsNS42MiwxLjEyczAuMjUsMy44NS4yLDUuNzFjLTAuMDYsMi4wOS0uNDEsNC4yNSwxLDUuMjEsMS4wOS0uMTIsMS42OC0xLjIsMi4zMS0yQTI4LDI4LDAsMCwwLDQxLjcyLDI0YzAuNDQtMSwuOTEtMi42NSwxLjcxLTMsMS4yMS0uNDcsMy4xNS0wLjEsNC45Mi0wLjEsMS40NiwwLDQuMDUtLjQxLDQuNTIuNjEsMC4zOSwwLjg1LS43NSwzLTEuMSwzLjU3YTYxLjg4LDYxLjg4LDAsMCwxLTQuMTIsNS42MWMtMC41OC43OC0xLjc4LDItMS43MSwzLjI3LDAuMDUsMC45NCwxLDEuNjcsMS43MSwyLjM1YTMzLjEyLDMzLjEyLDAsMCwxLDMuOTIsNC4xOGMwLjQ3LDAuNjIsMS41LDIsMS40LDIuNzZDNTIuNjYsNDUuODEsNDYuODgsNDQuMjQsNDQuOTQsNDQuODRaJyxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgVktJY29uO1xuIiwiaW1wb3J0IGFzc2VydCBmcm9tICcuL3V0aWxzL2Fzc2VydCc7XG5pbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5pbXBvcnQgY3JlYXRlU2hhcmVCdXR0b24gZnJvbSAnLi9ob2NzL2NyZWF0ZVNoYXJlQnV0dG9uJztcbmZ1bmN0aW9uIHZrTGluayh1cmwsIF9hKSB7XG4gICAgdmFyIHRpdGxlID0gX2EudGl0bGUsIGltYWdlID0gX2EuaW1hZ2UsIG5vUGFyc2UgPSBfYS5ub1BhcnNlLCBub1ZrTGlua3MgPSBfYS5ub1ZrTGlua3M7XG4gICAgYXNzZXJ0KHVybCwgJ3ZrLnVybCcpO1xuICAgIHJldHVybiAoJ2h0dHBzOi8vdmsuY29tL3NoYXJlLnBocCcgK1xuICAgICAgICBvYmplY3RUb0dldFBhcmFtcyh7XG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIGltYWdlOiBpbWFnZSxcbiAgICAgICAgICAgIG5vcGFyc2U6IG5vUGFyc2UgPyAxIDogMCxcbiAgICAgICAgICAgIG5vX3ZrX2xpbmtzOiBub1ZrTGlua3MgPyAxIDogMCxcbiAgICAgICAgfSkpO1xufVxudmFyIFZLU2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbigndmsnLCB2a0xpbmssIGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gKHtcbiAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgaW1hZ2U6IHByb3BzLmltYWdlLFxuICAgIG5vUGFyc2U6IHByb3BzLm5vUGFyc2UsXG4gICAgbm9Wa0xpbmtzOiBwcm9wcy5ub1ZrTGlua3MsXG59KTsgfSwge1xuICAgIHdpbmRvd1dpZHRoOiA2NjAsXG4gICAgd2luZG93SGVpZ2h0OiA0NjAsXG59KTtcbmV4cG9ydCBkZWZhdWx0IFZLU2hhcmVCdXR0b247XG4iLCJpbXBvcnQganNvbnAgZnJvbSAnanNvbnAnO1xuaW1wb3J0IG9iamVjdFRvR2V0UGFyYW1zIGZyb20gJy4vdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMnO1xuaW1wb3J0IGNyZWF0ZVNoYXJlQ291bnQgZnJvbSAnLi9ob2NzL2NyZWF0ZVNoYXJlQ291bnQnO1xuZnVuY3Rpb24gZ2V0VktTaGFyZUNvdW50KHNoYXJlVXJsLCBjYWxsYmFjaykge1xuICAgIGlmICghd2luZG93LlZLKVxuICAgICAgICB3aW5kb3cuVksgPSB7fTtcbiAgICB3aW5kb3cuVksuU2hhcmUgPSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgIGNvdW50OiBmdW5jdGlvbiAoaW5kZXgsIGNvdW50KSB7IHJldHVybiB3aW5kb3cuVksuY2FsbGJhY2tzW2luZGV4XShjb3VudCk7IH0sXG4gICAgfTtcbiAgICB3aW5kb3cuVksuY2FsbGJhY2tzID0gW107XG4gICAgdmFyIHVybCA9ICdodHRwczovL3ZrLmNvbS9zaGFyZS5waHAnO1xuICAgIHZhciBpbmRleCA9IHdpbmRvdy5WSy5jYWxsYmFja3MubGVuZ3RoO1xuICAgIHdpbmRvdy5WSy5jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgcmV0dXJuIGpzb25wKHVybCArXG4gICAgICAgIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICAgICAgICAgIGFjdDogJ2NvdW50JyxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIHVybDogc2hhcmVVcmwsXG4gICAgICAgIH0pKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNoYXJlQ291bnQoZ2V0VktTaGFyZUNvdW50KTtcbiIsImltcG9ydCBjcmVhdGVJY29uIGZyb20gJy4vaG9jcy9jcmVhdGVJY29uJztcbnZhciBWaWJlckljb24gPSBjcmVhdGVJY29uKHtcbiAgICBjb2xvcjogJyM3QzUyOUUnLFxuICAgIG5ldHdvcmtOYW1lOiAndmliZXInLFxuICAgIHBhdGg6ICdtMzEuMCwxMi4zYzkuMCwwLjIgMTYuNCw2LjIgMTguMCwxNS4yYzAuMiwxLjUgMC4zLDMuMCAwLjQsNC42YTEuMCwxLjAgMCAwIDEgLTAuOCwxLjJsLTAuMSwwYTEuMSwxLjEgMCAwIDEgLTEuMCwtMS4ybDAsMGMtMC4wLC0xLjIgLTAuMSwtMi41IC0wLjMsLTMuOGExNi4xLDE2LjEgMCAwIDAgLTEzLjAsLTEzLjVjLTEuMCwtMC4xIC0yLjAsLTAuMiAtMy4wLC0wLjNjLTAuNiwtMC4wIC0xLjQsLTAuMSAtMS42LC0wLjhhMS4xLDEuMSAwIDAgMSAwLjksLTEuMmwwLjYsMGwwLjAsLTAuMHptMTAuNiwzOS4yYTE5LjksMTkuOSAwIDAgMSAtMi4xLC0wLjZjLTYuOSwtMi45IC0xMy4yLC02LjYgLTE4LjMsLTEyLjJhNDcuNSw0Ny41IDAgMCAxIC03LjAsLTEwLjdjLTAuOCwtMS44IC0xLjYsLTMuNyAtMi40LC01LjZjLTAuNiwtMS43IDAuMywtMy40IDEuNCwtNC43YTExLjMsMTEuMyAwIDAgMSAzLjcsLTIuOGEyLjQsMi40IDAgMCAxIDMuMCwwLjdhMzkuMCwzOS4wIDAgMCAxIDQuNyw2LjVhMy4xLDMuMSAwIDAgMSAtMC44LDQuMmMtMC4zLDAuMiAtMC42LDAuNSAtMS4wLDAuOGEzLjMsMy4zIDAgMCAwIC0wLjcsMC43YTIuMSwyLjEgMCAwIDAgLTAuMSwxLjljMS43LDQuOSA0LjcsOC43IDkuNywxMC44YTUuMCw1LjAgMCAwIDAgMi41LDAuNmMxLjUsLTAuMSAyLjAsLTEuOCAzLjEsLTIuN2EyLjksMi45IDAgMCAxIDMuNSwtMC4xYzEuMSwwLjcgMi4yLDEuNCAzLjMsMi4yYTM3LjgsMzcuOCAwIDAgMSAzLjEsMi40YTIuNCwyLjQgMCAwIDEgMC43LDMuMGExMC40LDEwLjQgMCAwIDEgLTQuNCw0LjhhMTAuOCwxMC44IDAgMCAxIC0xLjksMC42Yy0wLjcsLTAuMiAwLjYsLTAuMiAwLDBsMC4wLDBsMCwtMC4wem0zLjEsLTIxLjRhNC4yLDQuMiAwIDAgMSAtMC4wLDAuNmExLjAsMS4wIDAgMCAxIC0xLjksMC4xYTIuNywyLjcgMCAwIDEgLTAuMSwtMC44YTEwLjksMTAuOSAwIDAgMCAtMS40LC01LjVhMTAuMiwxMC4yIDAgMCAwIC00LjIsLTQuMGExMi4zLDEyLjMgMCAwIDAgLTMuNCwtMS4wYy0wLjUsLTAuMCAtMS4wLC0wLjEgLTEuNSwtMC4yYTAuOSwwLjkgMCAwIDEgLTAuOSwtMS4wbDAsLTAuMWEwLjksMC45IDAgMCAxIDAuOSwtMC45bDAuMSwwYTE0LjEsMTQuMSAwIDAgMSA1LjksMS41YTExLjksMTEuOSAwIDAgMSA2LjUsOS4zYzAsMC4xIDAuMCwwLjMgMC4wLDAuNWMwLDAuNCAwLjAsMC45IDAuMCwxLjVsMCwwbDAuMCwwLjB6bS01LjYsLTAuMmExLjEsMS4xIDAgMCAxIC0xLjIsLTAuOWwwLC0wLjFhMTEuMywxMS4zIDAgMCAwIC0wLjIsLTEuNGE0LjAsNC4wIDAgMCAwIC0xLjUsLTIuM2EzLjksMy45IDAgMCAwIC0xLjIsLTAuNWMtMC41LC0wLjEgLTEuMSwtMC4xIC0xLjYsLTAuMmExLjAsMS4wIDAgMCAxIC0wLjgsLTEuMWwwLDBsMCwwYTEuMCwxLjAgMCAwIDEgMS4xLC0wLjhjMy40LDAuMiA2LjAsMi4wIDYuMyw2LjJhMi44LDIuOCAwIDAgMSAwLDAuOGEwLjgsMC44IDAgMCAxIC0wLjgsMC43bDAsMGwwLjAsLTAuMHonLFxufSk7XG5leHBvcnQgZGVmYXVsdCBWaWJlckljb247XG4iLCJpbXBvcnQgYXNzZXJ0IGZyb20gJy4vdXRpbHMvYXNzZXJ0JztcbmltcG9ydCBvYmplY3RUb0dldFBhcmFtcyBmcm9tICcuL3V0aWxzL29iamVjdFRvR2V0UGFyYW1zJztcbmltcG9ydCBjcmVhdGVTaGFyZUJ1dHRvbiBmcm9tICcuL2hvY3MvY3JlYXRlU2hhcmVCdXR0b24nO1xuZnVuY3Rpb24gdmliZXJMaW5rKHVybCwgX2EpIHtcbiAgICB2YXIgdGl0bGUgPSBfYS50aXRsZSwgc2VwYXJhdG9yID0gX2Euc2VwYXJhdG9yO1xuICAgIGFzc2VydCh1cmwsICd2aWJlci51cmwnKTtcbiAgICByZXR1cm4gKCd2aWJlcjovL2ZvcndhcmQnICtcbiAgICAgICAgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgICAgICAgICAgdGV4dDogdGl0bGUgPyB0aXRsZSArIHNlcGFyYXRvciArIHVybCA6IHVybCxcbiAgICAgICAgfSkpO1xufVxudmFyIFZpYmVyU2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbigndmliZXInLCB2aWJlckxpbmssIGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gKHtcbiAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgc2VwYXJhdG9yOiBwcm9wcy5zZXBhcmF0b3IgfHwgJyAnLFxufSk7IH0sIHtcbiAgICB3aW5kb3dXaWR0aDogNjYwLFxuICAgIHdpbmRvd0hlaWdodDogNDYwLFxufSk7XG5leHBvcnQgZGVmYXVsdCBWaWJlclNoYXJlQnV0dG9uO1xuIiwiaW1wb3J0IGNyZWF0ZUljb24gZnJvbSAnLi9ob2NzL2NyZWF0ZUljb24nO1xudmFyIFdlaWJvSWNvbiA9IGNyZWF0ZUljb24oe1xuICAgIGNvbG9yOiAnI0NEMjAxRicsXG4gICAgbmV0d29ya05hbWU6ICd3ZWlibycsXG4gICAgcGF0aDogJ000MC45NzU2MTUyLDE1LjAyMTcxMTkgQzQwLjUwMDA3MzIsMTUuMDU0NjMwMSAzOS45OTk5MzE0LDE1LjEyMDQ2NjYgMzkuNTMyNTg3OCwxNS4yMTkyMjEzIEMzOC42NjM0OTI4LDE1LjQwODUwMTYgMzguMDk3NzU4OSwxNi4yNjQzNzU3IDM4LjI4NjMzNjgsMTcuMTI4NDc4NyBDMzguNDY2NzE2MywxOC4wMDA4MTI5IDM5LjMxOTQxNDMsMTguNTY4NjUxOSA0MC4xODg1MDk0LDE4LjM3OTM3MTUgQzQyLjg2MTM5MDgsMTcuODExNTMyNiA0NS43NzIwNDExLDE4LjY0MjcxNzQgNDcuNzMxNjA3MywyMC44MTUzMjA3IEM0OS42OTExNzM1LDIyLjk5NjE1MyA1MC4yMDc3MTIyLDI1Ljk3NTI1NCA0OS4zNzE0MTEyLDI4LjU4NDAyMzQgQzQ5LjEwMDg0NDEsMjkuNDMxNjY4NCA0OS41NzYzODYxLDMwLjM1MzM3ODkgNTAuNDIwODg1NywzMC42MjQ5NTM3IEM1MS4yNjUzODUyLDMwLjg5NjUyODYgNTIuMTc1NDc2OSwzMC40MTkyMTUzIDUyLjQ1NDI0MjUsMjkuNTcxNTcwMyBDNTMuNjM0OTAxMywyNS45MDExODg1IDUyLjkxMzM4NzYsMjEuNzY5OTQ5NCA1MC4xNTg1MTcxLDE4LjcwODU1MzggQzQ4LjA5MjM2NDEsMTYuNDA0Mjc3NiA0NS4yMDYzMDkzLDE1LjE1MzM4NDggNDIuMzUzMDUwNSwxNS4wMjE3MTE5IEM0MS44Nzc1MDg0LDE0Ljk5NzAyMjcgNDEuNDUxMTU5NCwxNC45ODg3OTM3IDQwLjk3NTYxNTIsMTUuMDIxNzExOSBaIE0yNy45MjI3NzYyLDE5LjgyNzc3MzcgQzI0Ljk5NTcyNjgsMjAuMTQwNDk4IDIwLjg2MzQyMSwyMi40MzY1NDMxIDE3LjIzMTI1NDgsMjYuMDgyMjM3OCBDMTMuMjcxMTI3OSwzMC4wNTcxMTQ4IDExLDM0LjI4NzEwNjUgMTEsMzcuOTMyODAxMiBDMTEsNDQuOTAzMjM3MyAxOS44NzEzNDAxLDQ5LjEyNSAyOC41Nzg2OTc4LDQ5LjEyNSBDMzkuOTkxNzMyOSw0OS4xMjUgNDcuNjAwNDIzLDQyLjQyNjE0MDkgNDcuNjAwNDIzLDM3LjE0Mjc2MzYgQzQ3LjYwMDQyMywzMy45NDk2OTUyIDQ0Ljk2MDMzOTcsMzIuMTYzODgxNiA0Mi41NDk4MjcsMzEuNDE0OTkxMyBDNDEuOTU5NDk3NiwzMS4yMzM5NDIxIDQxLjUxNjc1MTYsMzEuMTQzNDE2NCA0MS44MjgzMTMzLDMwLjM2MTYwNzkgQzQyLjUwMDYzMzksMjguNjY2MzIgNDIuNjIzNjE3NiwyNy4xOTMyMjg2IDQxLjg5MzkwNTQsMjYuMTQ4MDc0MiBDNDAuNTMyODY5MiwyNC4xODk0NDA1IDM2LjcyMDMyMzYsMjQuMjg4MTk1MiAzMi40NDg2MzUsMjYuMDgyMjM3OCBDMzIuNDQ4NjM1LDI2LjA4MjIzNzggMzEuMTIwMzk0OSwyNi42OTEyMjYxIDMxLjQ2NDc1MjYsMjUuNjIxMzgyNSBDMzIuMTIwNjc0MiwyMy40OTgxNTc2IDMyLjAzMDQ4NDUsMjEuNzEyMzQyIDMxLjAwNTYwNzUsMjAuNjgzNjQ3OCBDMzAuMjg0MDkzOCwxOS45NTEyMTc2IDI5LjI1MTAxODQsMTkuNjg3ODcxOCAyNy45MjI3NzYyLDE5LjgyNzc3MzcgWiBNNDIuMDkwNjgxOSwyMC42ODM2NDc4IEM0MS42MjMzMzgzLDIwLjY1ODk1ODYgNDEuMTcyMzkxNywyMC43MTY1NjYgNDAuNzEzMjQ2NiwyMC44MTUzMjA3IEMzOS45NjcxMzUzLDIwLjk3MTY4MjggMzkuNDk5NzkxNywyMS43NzgxNzg0IDM5LjY2Mzc3MjEsMjIuNTI3MDY4NyBDMzkuODI3NzUyNSwyMy4yNzU5NTkgNDAuNTU3NDY0NywyMy43NDUwNDMzIDQxLjMwMzU3NiwyMy41ODA0NTIxIEM0Mi4xOTcyNjg2LDIzLjM5MTE3MTggNDMuMjA1NzQ4NSwyMy42MzgwNTk2IDQzLjg2MTY3MDEsMjQuMzcwNDg5NyBDNDQuNTE3NTkxNiwyNS4xMDI5MTk4IDQ0LjY3MzM3MzUsMjYuMDY1Nzc5NyA0NC4zODY0MDczLDI2LjkzODExMTggQzQ0LjE0ODYzNjMsMjcuNjcwNTQxOSA0NC41MDkzOTMyLDI4LjQ3NzAzOTcgNDUuMjM5MTA1NCwyOC43MTU2OTYzIEM0NS45Njg4MTc2LDI4Ljk0NjEyMzkgNDYuNzgwNTIxLDI4LjU5MjI1MjQgNDcuMDEwMDkzNiwyNy44NTk4MjIzIEM0Ny41ODQwMjYsMjYuMDc0MDA4NyA0Ny4yMzk2NjYxLDI0LjAyNDg0OTMgNDUuODk1MDI2OSwyMi41MjcwNjg3IEM0NC44ODY1NDcsMjEuNDA3ODQ4OSA0My40ODQ1MTYyLDIwLjc0OTQ4NDIgNDIuMDkwNjgxOSwyMC42ODM2NDc4IFogTTI5LjQ5Njk4OCwyOS45NjY1ODkxIEMzNS4zMTAwOTIyLDMwLjE3MjMyNzUgMzkuOTkxNzMyOSwzMy4wNjkxMzE5IDQwLjM4NTI4NTgsMzcuMDc2OTI3MiBDNDAuODM2MjMyNCw0MS42NjA3OTA0IDM1LjU5NzA1ODUsNDUuOTMxOTMxNSAyOC42NDQyODk5LDQ2LjYyMzIxNDQgQzIxLjY5MTUyMTQsNDcuMzE0NDk3MyAxNS42NDg4NDQ2LDQ0LjE1NDM0NyAxNS4xOTc4OTgsMzkuNTc4NzEyOCBDMTQuNzQ2OTUxNCwzNC45OTQ4NDk1IDIwLjA1OTkxNiwzMC43MjM3MDg0IDI3LjAwNDQ4NiwzMC4wMzI0MjU2IEMyNy44NzM1ODMxLDI5Ljk1MDEzMSAyOC42Njg4ODc1LDI5LjkzMzY3MDkgMjkuNDk2OTg4LDI5Ljk2NjU4OTEgWiBNMjUuNTYxNDU4NiwzNC4zNzc2MzIyIEMyMy4xODM3NDQsMzQuNTkxNjAxNyAyMC45MzcyMTE2LDM1Ljk1NzcwNzMgMTkuOTIwNTMzMiwzNy45MzI4MDEyIEMxOC41MzQ4OTk0LDQwLjYyMzg2NzIgMTkuOTA0MTM2Miw0My42MDI5NjYxIDIzLjA2ODk1NjcsNDQuNTgyMjg0IEMyNi4zNDAzNjYsNDUuNTk0NTIwMiAzMC4xODU3MDU2LDQ0LjA2MzgyMTMgMzEuNTMwMzQ0OCw0MS4xNTg3ODc5IEMzMi44NTAzODY0LDM4LjMxOTU5MDkgMzEuMTYxMzg5NCwzNS4zNzM0MDgyIDI3LjkyMjc3NjIsMzQuNTc1MTQxNiBDMjcuMTQzODY4OCwzNC4zNzc2MzIyIDI2LjM1Njc2MywzNC4zMDM1NjY3IDI1LjU2MTQ1ODYsMzQuMzc3NjMyMiBaIE0yNC4wNTI4MzksMzguNzIyODM4OCBDMjQuMzMxNjA2NywzOC43MzEwNjc4IDI0LjU4NTc3NDgsMzguODIxNTkzNSAyNC44Mzk5NDQ5LDM4LjkyMDM0ODIgQzI1Ljg2NDgyMTgsMzkuMzQwMDU2MSAyNi4xODQ1ODQxLDQwLjQ0MjgxNTggMjUuNTYxNDU4Niw0MS40MjIxMzM4IEMyNC45MjE5MzYxLDQyLjM5MzIyMjcgMjMuNTY5MDk2Myw0Mi44NjIzMDY5IDIyLjU0NDIxOTQsNDIuNDA5NjgwNyBDMjEuNTM1NzM5NSw0MS45NjUyODU2IDIxLjI0ODc3NTQsNDAuODU0Mjk0OCAyMS44ODgyOTc5LDM5LjkwNzg5NTEgQzIyLjM2Mzg0MjEsMzkuMjAwMTU0MiAyMy4yMjQ3Mzg2LDM4LjcxNDYwOTcgMjQuMDUyODM5LDM4LjcyMjgzODggWicsXG59KTtcbmV4cG9ydCBkZWZhdWx0IFdlaWJvSWNvbjtcbiIsImltcG9ydCBhc3NlcnQgZnJvbSAnLi91dGlscy9hc3NlcnQnO1xuaW1wb3J0IG9iamVjdFRvR2V0UGFyYW1zIGZyb20gJy4vdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMnO1xuaW1wb3J0IGNyZWF0ZVNoYXJlQnV0dG9uIGZyb20gJy4vaG9jcy9jcmVhdGVTaGFyZUJ1dHRvbic7XG5mdW5jdGlvbiB3ZWlib0xpbmsodXJsLCBfYSkge1xuICAgIHZhciB0aXRsZSA9IF9hLnRpdGxlLCBpbWFnZSA9IF9hLmltYWdlO1xuICAgIGFzc2VydCh1cmwsICd3ZWliby51cmwnKTtcbiAgICByZXR1cm4gKCdodHRwOi8vc2VydmljZS53ZWliby5jb20vc2hhcmUvc2hhcmUucGhwJyArXG4gICAgICAgIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgcGljOiBpbWFnZSxcbiAgICAgICAgfSkpO1xufVxudmFyIFdlaWJvU2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbignd2VpYm8nLCB3ZWlib0xpbmssIGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gKHtcbiAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgaW1hZ2U6IHByb3BzLmltYWdlLFxufSk7IH0sIHtcbiAgICB3aW5kb3dXaWR0aDogNjYwLFxuICAgIHdpbmRvd0hlaWdodDogNTUwLFxuICAgIHdpbmRvd1Bvc2l0aW9uOiAnc2NyZWVuQ2VudGVyJyxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgV2VpYm9TaGFyZUJ1dHRvbjtcbiIsImltcG9ydCBjcmVhdGVJY29uIGZyb20gJy4vaG9jcy9jcmVhdGVJY29uJztcbnZhciBXaGF0c2FwcEljb24gPSBjcmVhdGVJY29uKHtcbiAgICBjb2xvcjogJyMyNUQzNjYnLFxuICAgIG5ldHdvcmtOYW1lOiAnd2hhdHNhcHAnLFxuICAgIHBhdGg6ICdtNDIuMzIyODYsMzMuOTMyODdjLTAuNTE3OCwtMC4yNTg5IC0zLjA0NzI2LC0xLjQ5NjQ0IC0zLjUyMTA1LC0xLjY2NzMyYy0wLjQ3MTIsLTAuMTczNDYgLTAuODE1NTQsLTAuMjU4OSAtMS4xNTk4NywwLjI1ODljLTAuMzQxNzUsMC41MTAwNCAtMS4zMzA3NSwxLjY2NDc0IC0xLjYzMTA4LDIuMDA2NDhjLTAuMzAwMzIsMC4zMzY1OCAtMC42MDA2NCwwLjM2MjQ3IC0xLjExMzI3LDAuMTI5NDVjLTAuNTE3OCwtMC4yNTg5IC0yLjE3OTk0LC0wLjgwMjU5IC00LjE0NzU5LC0yLjU2MzEyYy0xLjUzMjY5LC0xLjM3MjE3IC0yLjU2MzEyLC0zLjA1NTAzIC0yLjg2NjAzLC0zLjU3MjgzYy0wLjMwMDMzLC0wLjUxNzggLTAuMDMzNjYsLTAuODAyNTkgMC4yMjUyNCwtMS4wNjE0OWMwLjIzMzAxLC0wLjIzMzAxIDAuNTE3OCwtMC41OTU0NyAwLjc3NjcsLTAuOTA2MTZjMC4yNTM3MiwtMC4zMTA2OCAwLjMzNjU3LC0wLjUxNzggMC41MTI2MiwtMC44NTQzN2MwLjE3MDg4LC0wLjM2MjQ2IDAuMDg1NDQsLTAuNjQ3MjUgLTAuMDQ0MDIsLTAuOTA2MTVjLTAuMTI5NDUsLTAuMjU4OSAtMS4xNTk4NywtMi43OTYxMyAtMS41ODk2NCwtMy44MDU4NGMtMC40MTQyNCwtMS4wMDk3MSAtMC44NDE0MiwtMC44ODAyNyAtMS4xNTk4NywtMC44ODAyN2MtMC4yOTc3MywtMC4wMjU4OCAtMC42NDIwOCwtMC4wMjU4OCAtMC45ODM4MiwtMC4wMjU4OGMtMC4zNDY5MywwIC0wLjkwNjE2LDAuMTI5NDUgLTEuMzc3MzYsMC42MjEzNmMtMC40NzEyLDAuNTE3OCAtMS44MDE5NCwxLjc2MDUzIC0xLjgwMTk0LDQuMjcxODZjMCwyLjUxMTM0IDEuODQ1OTYsNC45NDUgMi4xMDIyNyw1LjMwNzQ3YzAuMjU4OSwwLjMzNjU3IDMuNjM0OTcsNS41MTQ1OCA4LjgwMjYyLDcuNzQxMTNjMS4yMzIzNywwLjUxNzggMi4xOTAzLDAuODI4NDggMi45NDExMSwxLjA4NzM4YzEuMjMyMzcsMC4zODgzNiAyLjM1NTk5LDAuMzM2NTcgMy4yNDQwMiwwLjIwNzEyYzAuOTkxNTksLTAuMTU1MzQgMy4wNDk4NSwtMS4yNDI3MiAzLjQ3OTYzLC0yLjQ1OTU2YzAuNDQwMTMsLTEuMjE2ODMgMC40NDAxMywtMi4yMjY1NCAwLjMxMDY4LC0yLjQ1OTU1Yy0wLjEyOTQ1LC0wLjIzMzAxIC0wLjQ2NjAxLC0wLjM2MjQ3IC0wLjk4MzgyLC0wLjU5NTQ4bS05LjQwMDY4LDEyLjg0NDA3bC0wLjAyNTg5LDBjLTMuMDU1MDMsMCAtNi4wODQxNywtMC44Mjg0OSAtOC43MjQ5NSwtMi4zODE4OWwtMC42MjEzNiwtMC4zNzAyM2wtNi40NzI1MiwxLjY4Mjg2bDEuNzM0NjMsLTYuMjkxMjlsLTAuNDE0MjQsLTAuNjQ3MjVjLTEuNzA4NzUsLTIuNzE4NDYgLTIuNjE0OSwtNS44NTExNiAtMi42MTQ5LC05LjA3NzA2YzAsLTkuMzk4MDkgNy42ODkzNCwtMTcuMDYxNTUgMTcuMTU5OTMsLTE3LjA2MTU1YzQuNTgyNTMsMCA4Ljg4MDI5LDEuNzg2NDIgMTIuMTE2NTUsNS4wMjI2OGMzLjIzNjI1LDMuMjEwMzYgNS4wMjI2Nyw3LjUwODEyIDUuMDIyNjcsMTIuMDY0NzZjLTAuMDA3OCw5LjM5ODEgLTcuNjk3MTIsMTcuMDYxNTUgLTE3LjE0Njk5LDE3LjA2MTU1bTE0LjU4OTA2LC0zMS41ODg0NmMtMy45MzUyOSwtMy44MDU4NCAtOS4xMTMzLC01Ljk1NDcxIC0xNC42Mjc4OSwtNS45NTQ3MWMtMTEuMzYwNTUsMCAtMjAuNjA4NDgsOS4yMDY1IC0yMC42MTYyNSwyMC41MjU2NGMwLDMuNjE2ODQgMC45NDc1Nyw3LjE0NTY1IDIuNzUyMTEsMTAuMjYyODJsLTIuOTI1NTcsMTAuNjM1NjRsMTAuOTMzMzcsLTIuODUzMDljMy4wMTM2LDEuNjMxMDggNi40MDUyLDIuNDk1OCA5Ljg1NjM0LDIuNDk4MzlsMC4wMTAzNywwYzExLjM2NTc0LDAgMjAuNjE4ODQsLTkuMjA5MSAyMC42MjQwMywtMjAuNTMwODJjMCwtNS40ODA5MyAtMi4xNDExMSwtMTAuNjQwODEgLTYuMDMyMzksLTE0LjUxOTE1Jyxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgV2hhdHNhcHBJY29uO1xuIiwiaW1wb3J0IGFzc2VydCBmcm9tICcuL3V0aWxzL2Fzc2VydCc7XG5pbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5pbXBvcnQgY3JlYXRlU2hhcmVCdXR0b24gZnJvbSAnLi9ob2NzL2NyZWF0ZVNoYXJlQnV0dG9uJztcbmZ1bmN0aW9uIGlzTW9iaWxlT3JUYWJsZXQoKSB7XG4gICAgcmV0dXJuIC8oYW5kcm9pZHxpcGhvbmV8aXBhZHxtb2JpbGUpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbn1cbmZ1bmN0aW9uIHdoYXRzYXBwTGluayh1cmwsIF9hKSB7XG4gICAgdmFyIHRpdGxlID0gX2EudGl0bGUsIHNlcGFyYXRvciA9IF9hLnNlcGFyYXRvcjtcbiAgICBhc3NlcnQodXJsLCAnd2hhdHNhcHAudXJsJyk7XG4gICAgcmV0dXJuICgnaHR0cHM6Ly8nICtcbiAgICAgICAgKGlzTW9iaWxlT3JUYWJsZXQoKSA/ICdhcGknIDogJ3dlYicpICtcbiAgICAgICAgJy53aGF0c2FwcC5jb20vc2VuZCcgK1xuICAgICAgICBvYmplY3RUb0dldFBhcmFtcyh7XG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSA/IHRpdGxlICsgc2VwYXJhdG9yICsgdXJsIDogdXJsLFxuICAgICAgICB9KSk7XG59XG52YXIgV2hhdHNhcHBTaGFyZUJ1dHRvbiA9IGNyZWF0ZVNoYXJlQnV0dG9uKCd3aGF0c2FwcCcsIHdoYXRzYXBwTGluaywgZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoe1xuICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICBzZXBhcmF0b3I6IHByb3BzLnNlcGFyYXRvciB8fCAnICcsXG59KTsgfSwge1xuICAgIHdpbmRvd1dpZHRoOiA1NTAsXG4gICAgd2luZG93SGVpZ2h0OiA0MDAsXG59KTtcbmV4cG9ydCBkZWZhdWx0IFdoYXRzYXBwU2hhcmVCdXR0b247XG4iLCJpbXBvcnQgY3JlYXRlSWNvbiBmcm9tICcuL2hvY3MvY3JlYXRlSWNvbic7XG52YXIgV29ya3BsYWNlSWNvbiA9IGNyZWF0ZUljb24oe1xuICAgIGNvbG9yOiAnIzNiM2Q0YScsXG4gICAgbmV0d29ya05hbWU6ICd3b3JrcGxhY2UnLFxuICAgIHBhdGg6ICdNMzQuMDE5LDEwLjI5MmMwLjIxLDAuMDE3LDAuNDIzLDAuMDM0LDAuNjM2LDAuMDQ5IGMzLjY1NywwLjI2Miw2Ljk3NiwxLjQ2NCw5LjkyOSwzLjYzNWMzLjMzMSwyLjQ0OCw1LjYzNSw1LjY1LDYuOTE0LDkuNTg0YzAuNjk5LDIuMTUyLDAuOTgzLDQuMzY1LDAuODg1LDYuNjIzIGMtMC4xMzYsMy4xNzEtMS4wMDgsNi4xMy0yLjYxOSw4Ljg2N2MtMC40NDIsMC43NS0wLjkwOCwxLjQ5Mi0xLjQ5NSwyLjE0MWMtMC41ODgsMC42NTEtMS4yOSwxLjE0MS0yLjE0NiwxLjM4MyBjLTEuNDk2LDAuNDI2LTMuMjQ3LTAuMjgzLTMuOTYxLTEuNjQyYy0wLjI2LTAuNDk0LTAuNDQyLTEuMDI4LTAuNjU0LTEuNTQ4Yy0xLjE1Ni0yLjgzOC0yLjMxMS01LjY3OS0zLjQ2NS04LjUxOSBjLTAuMDE3LTAuMDQyLTAuMDM3LTAuMDgyLTAuMDY1LTAuMTQ1Yy0wLjEwMSwwLjI0NS0wLjE5MiwwLjQ3Mi0wLjI4NCwwLjY5OGMtMS4yMzcsMy4wNTEtMi40NzUsNi4xMDMtMy43MTEsOS4xNTUgYy0wLjQ2NiwxLjE1My0xLjM1MSwxLjgxNS0yLjUzOCwyLjA0NWMtMS4zOTEsMC4yNjctMi41NzctMC4xNTQtMy40OTYtMS4yNDdjLTAuMTc0LTAuMjA5LTAuMzEtMC40NjQtMC40MTUtMC43MTcgYy0yLjEyOC01LjIyLTQuMjQ4LTEwLjQ0Mi02LjM3LTE1LjY2NWMtMC4wMTItMC4wMjktMC4wMjEtMC4wNTktMC4wMzYtMC4xMDRjMC4wNTQtMC4wMDMsMC4xMDMtMC4wMDYsMC4xNS0wLjAwNiBjMS40OTgtMC4wMDEsMi45OTcsMCw0LjQ5NS0wLjAwNGMwLjEyLTAuMDAxLDAuMTc2LDAuMDMsMC4yMjIsMC4xNDZjMS41NTcsMy44NDYsMy4xMTcsNy42OTEsNC42NzksMTEuNTM2IGMwLjAxOCwwLjA0NiwwLjAzOSwwLjA5MSwwLjA2NywwLjE1OWMwLjI3My0wLjY3MywwLjUzNi0xLjMyLDAuNzk3LTEuOTY4YzEuMDY0LTIuNjI3LDIuMTM3LTUuMjUsMy4xOS03Ljg4MyBjMC40ODItMS4yMDgsMS4zNzYtMS45MTcsMi42MjEtMi4xMzVjMS40NTQtMC4yNTUsMi42NDQsMC4yNTcsMy41MjIsMS40NDljMC4xMzMsMC4xOCwwLjIyOSwwLjM5MywwLjMxMywwLjYwMyBjMS40MjUsMy40OTUsMi44NDgsNi45OTEsNC4yNjksMTAuNDg4YzAuMDIsMC4wNDcsMC4wNCwwLjA5MywwLjA3MywwLjE3MmMwLjE5Ni0wLjMyNywwLjM4NS0wLjYyNSwwLjU1OS0wLjkzNSBjMC43ODMtMS4zOTcsMS4zMjMtMi44ODYsMS42MTQtNC40NjFjMC4yNDItMS4zMTIsMC4zMDQtMi42MzQsMC4xODctMy45NjJjLTAuMjQyLTIuNzIxLTEuMTYtNS4xOTItMi43OTItNy4zOCBjLTIuMTkzLTIuOTM5LTUuMDg2LTQuODI0LTguNjczLTUuNjI1Yy0xLjU1My0wLjM0Ni0zLjEyNC0wLjQwNS00LjcwNS0wLjI1N2MtMy4xNjIsMC4yOTgtNi4wMzYsMS4zNjYtOC41ODUsMy4yNTggYy0zLjQxNCwyLjUzNC01LjYzOCw1Ljg3MS02LjYyMywxMC4wMTZjLTAuNDE3LDEuNzYtMC41NDYsMy41NDctMC4zODQsNS4zNDhjMC40MTcsNC42MDEsMi4zNTksOC40NDQsNS44MDQsMTEuNTE3IGMyLjMyNSwyLjA3Myw1LjAzNywzLjM5Myw4LjA5NCwzLjk4OWMxLjYxNywwLjMxNywzLjI0NywwLjM5NSw0Ljg4OSwwLjI0MmMxLTAuMDk0LDEuOTgyLTAuMjY4LDIuOTUyLTAuNTI5IGMwLjA0LTAuMDEsMC4wODEtMC4wMTgsMC4xMjgtMC4wMjhjMCwxLjUyNiwwLDMuMDQ3LDAsNC41ODZjLTAuNDAyLDAuMDc0LTAuODA1LDAuMTU0LTEuMjEsMC4yMjEgYy0wLjg2MSwwLjE0LTEuNzI4LDAuMjMxLTIuNjAxLDAuMjU4Yy0wLjAzNSwwLjAwMi0wLjA3MSwwLjAxMy0wLjEwOCwwLjAyMWMtMC40OTMsMC0wLjk4MywwLTEuNDc2LDAgYy0wLjA0OS0wLjAwNy0wLjEtMC4wMTgtMC4xNDktMC4wMjJjLTAuMzE1LTAuMDE5LTAuNjI5LTAuMDMzLTAuOTQ1LTAuMDU4Yy0xLjM2Mi0wLjEwNS0yLjcwMi0wLjM0Ni00LjAxNy0wLjcxNiBjLTMuMjU0LTAuOTE0LTYuMTQ1LTIuNDk1LTguNjYtNC43NTJjLTIuMTk1LTEuOTcxLTMuOTI2LTQuMjktNS4xNzYtNi45NjNjLTEuMTUyLTIuNDY2LTEuODIyLTUuMDU3LTEuOTkzLTcuNzc0IGMtMC4wMTQtMC4yMjYtMC4wMzMtMC40NTEtMC4wNS0wLjY3NmMwLTAuNTAyLDAtMS4wMDMsMC0xLjUwNGMwLjAwOC0wLjA0OSwwLjAyLTAuMDk5LDAuMDIyLTAuMTQ4IGMwLjAzNi0xLjAyNSwwLjE1Mi0yLjA0MywwLjMzOC0zLjA1MmMwLjQ4MS0yLjYxNiwxLjQwOS01LjA2NiwyLjgtNy4zMzFjMi4yMjYtMy42MjUsNS4yNS02LjM4Niw5LjA3NC04LjI1NCBjMi41MzYtMS4yNCw1LjIxNy0xLjk0Nyw4LjAzNy0yLjEyNmMwLjIzLTAuMDE1LDAuNDYxLTAuMDM0LDAuNjkxLTAuMDUxQzMzLjA1MiwxMC4yOTIsMzMuNTM1LDEwLjI5MiwzNC4wMTksMTAuMjkyeicsXG59KTtcbmV4cG9ydCBkZWZhdWx0IFdvcmtwbGFjZUljb247XG4iLCJpbXBvcnQgYXNzZXJ0IGZyb20gJy4vdXRpbHMvYXNzZXJ0JztcbmltcG9ydCBvYmplY3RUb0dldFBhcmFtcyBmcm9tICcuL3V0aWxzL29iamVjdFRvR2V0UGFyYW1zJztcbmltcG9ydCBjcmVhdGVTaGFyZUJ1dHRvbiBmcm9tICcuL2hvY3MvY3JlYXRlU2hhcmVCdXR0b24nO1xuZnVuY3Rpb24gd29ya3BsYWNlTGluayh1cmwsIF9hKSB7XG4gICAgdmFyIHF1b3RlID0gX2EucXVvdGUsIGhhc2h0YWcgPSBfYS5oYXNodGFnO1xuICAgIGFzc2VydCh1cmwsICd3b3JrcGxhY2UudXJsJyk7XG4gICAgcmV0dXJuICgnaHR0cHM6Ly93b3JrLmZhY2Vib29rLmNvbS9zaGFyZXIucGhwJyArXG4gICAgICAgIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICAgICAgICAgIHU6IHVybCxcbiAgICAgICAgICAgIHF1b3RlOiBxdW90ZSxcbiAgICAgICAgICAgIGhhc2h0YWc6IGhhc2h0YWcsXG4gICAgICAgIH0pKTtcbn1cbnZhciBXb3JrcGxhY2VTaGFyZUJ1dHRvbiA9IGNyZWF0ZVNoYXJlQnV0dG9uKCd3b3JrcGxhY2UnLCB3b3JrcGxhY2VMaW5rLCBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuICh7XG4gICAgcXVvdGU6IHByb3BzLnF1b3RlLFxuICAgIGhhc2h0YWc6IHByb3BzLmhhc2h0YWcsXG59KTsgfSwge1xuICAgIHdpbmRvd1dpZHRoOiA1NTAsXG4gICAgd2luZG93SGVpZ2h0OiA0MDAsXG59KTtcbmV4cG9ydCBkZWZhdWx0IFdvcmtwbGFjZVNoYXJlQnV0dG9uO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVJY29uKGljb25Db25maWcpIHtcbiAgICB2YXIgSWNvbiA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgYmdTdHlsZSA9IF9hLmJnU3R5bGUsIGJvcmRlclJhZGl1cyA9IF9hLmJvcmRlclJhZGl1cywgaWNvbkZpbGxDb2xvciA9IF9hLmljb25GaWxsQ29sb3IsIHJvdW5kID0gX2Eucm91bmQsIHNpemUgPSBfYS5zaXplLCByZXN0ID0gX19yZXN0KF9hLCBbXCJiZ1N0eWxlXCIsIFwiYm9yZGVyUmFkaXVzXCIsIFwiaWNvbkZpbGxDb2xvclwiLCBcInJvdW5kXCIsIFwic2l6ZVwiXSk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfX2Fzc2lnbih7IHZpZXdCb3g6IFwiMCAwIDY0IDY0XCIsIHdpZHRoOiBzaXplLCBoZWlnaHQ6IHNpemUgfSwgcmVzdCksXG4gICAgICAgICAgICByb3VuZCA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHsgY3g6IFwiMzJcIiwgY3k6IFwiMzJcIiwgcjogXCIzMVwiLCBmaWxsOiBpY29uQ29uZmlnLmNvbG9yLCBzdHlsZTogYmdTdHlsZSB9KSkgOiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInJlY3RcIiwgeyB3aWR0aDogXCI2NFwiLCBoZWlnaHQ6IFwiNjRcIiwgcng6IGJvcmRlclJhZGl1cywgcnk6IGJvcmRlclJhZGl1cywgZmlsbDogaWNvbkNvbmZpZy5jb2xvciwgc3R5bGU6IGJnU3R5bGUgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBpY29uQ29uZmlnLnBhdGgsIGZpbGw6IGljb25GaWxsQ29sb3IgfSkpKTtcbiAgICB9O1xuICAgIEljb24uZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBiZ1N0eWxlOiB7fSxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgICAgICBpY29uRmlsbENvbG9yOiAnd2hpdGUnLFxuICAgICAgICBzaXplOiA2NCxcbiAgICB9O1xuICAgIHJldHVybiBJY29uO1xufVxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNoYXJlQnV0dG9uIGZyb20gJy4uL1NoYXJlQnV0dG9uJztcbmZ1bmN0aW9uIGNyZWF0ZVNoYXJlQnV0dG9uKG5ldHdvcmtOYW1lLCBsaW5rLCBvcHRzTWFwLCBkZWZhdWx0UHJvcHMpIHtcbiAgICBmdW5jdGlvbiBDcmVhdGVkQnV0dG9uKHByb3BzLCByZWYpIHtcbiAgICAgICAgdmFyIG9wdHMgPSBvcHRzTWFwKHByb3BzKTtcbiAgICAgICAgdmFyIHBhc3NlZFByb3BzID0gX19hc3NpZ24oe30sIHByb3BzKTtcbiAgICAgICAgLy8gcmVtb3ZlIGtleXMgZnJvbSBwYXNzZWQgcHJvcHMgdGhhdCBhcmUgcGFzc2VkIGFzIG9wdHNcbiAgICAgICAgdmFyIG9wdHNLZXlzID0gT2JqZWN0LmtleXMob3B0cyk7XG4gICAgICAgIG9wdHNLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgZGVsZXRlIHBhc3NlZFByb3BzW2tleV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmVCdXR0b24sIF9fYXNzaWduKHt9LCBkZWZhdWx0UHJvcHMsIHBhc3NlZFByb3BzLCB7IGZvcndhcmRlZFJlZjogcmVmLCBuZXR3b3JrTmFtZTogbmV0d29ya05hbWUsIG5ldHdvcmtMaW5rOiBsaW5rLCBvcHRzOiBvcHRzTWFwKHByb3BzKSB9KSkpO1xuICAgIH1cbiAgICBDcmVhdGVkQnV0dG9uLmRpc3BsYXlOYW1lID0gXCJTaGFyZUJ1dHRvbi1cIiArIG5ldHdvcmtOYW1lO1xuICAgIHJldHVybiBmb3J3YXJkUmVmKENyZWF0ZWRCdXR0b24pO1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hhcmVCdXR0b247XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG52YXIgZGVmYXVsdENoaWxkcmVuID0gZnVuY3Rpb24gKHNoYXJlQ291bnQpIHsgcmV0dXJuIHNoYXJlQ291bnQ7IH07XG52YXIgU29jaWFsTWVkaWFTaGFyZUNvdW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTb2NpYWxNZWRpYVNoYXJlQ291bnQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU29jaWFsTWVkaWFTaGFyZUNvdW50KHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnN0YXRlID0geyBjb3VudDogMCwgaXNMb2FkaW5nOiBmYWxzZSB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFNvY2lhbE1lZGlhU2hhcmVDb3VudC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudXBkYXRlQ291bnQodGhpcy5wcm9wcy51cmwpO1xuICAgIH07XG4gICAgU29jaWFsTWVkaWFTaGFyZUNvdW50LnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiAocHJldlByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnVybCAhPT0gcHJldlByb3BzLnVybCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDb3VudCh0aGlzLnByb3BzLnVybCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNvY2lhbE1lZGlhU2hhcmVDb3VudC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIH07XG4gICAgU29jaWFsTWVkaWFTaGFyZUNvdW50LnByb3RvdHlwZS51cGRhdGVDb3VudCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLmdldENvdW50KHVybCwgZnVuY3Rpb24gKGNvdW50KSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuX2lzTW91bnRlZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IGNvdW50LFxuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNvY2lhbE1lZGlhU2hhcmVDb3VudC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnN0YXRlLCBjb3VudCA9IF9hLmNvdW50LCBpc0xvYWRpbmcgPSBfYS5pc0xvYWRpbmc7XG4gICAgICAgIHZhciBfYiA9IHRoaXMucHJvcHMsIF9jID0gX2IuY2hpbGRyZW4sIGNoaWxkcmVuID0gX2MgPT09IHZvaWQgMCA/IGRlZmF1bHRDaGlsZHJlbiA6IF9jLCBjbGFzc05hbWUgPSBfYi5jbGFzc05hbWUsIF8gPSBfYi5nZXRDb3VudCwgcmVzdCA9IF9fcmVzdChfYiwgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJnZXRDb3VudFwiXSk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGN4KCdyZWFjdC1zaGFyZV9fU2hhcmVDb3VudCcsIGNsYXNzTmFtZSkgfSwgcmVzdCksICFpc0xvYWRpbmcgJiYgY291bnQgIT09IHVuZGVmaW5lZCAmJiBjaGlsZHJlbihjb3VudCkpKTtcbiAgICB9O1xuICAgIHJldHVybiBTb2NpYWxNZWRpYVNoYXJlQ291bnQ7XG59KENvbXBvbmVudCkpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2hhcmVDb3VudChnZXRDb3VudCkge1xuICAgIHZhciBTaGFyZUNvdW50ID0gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTb2NpYWxNZWRpYVNoYXJlQ291bnQsIF9fYXNzaWduKHsgZ2V0Q291bnQ6IGdldENvdW50IH0sIHByb3BzKSkpOyB9O1xuICAgIFNoYXJlQ291bnQuZGlzcGxheU5hbWUgPSBcIlNoYXJlQ291bnQoXCIgKyBnZXRDb3VudC5uYW1lICsgXCIpXCI7XG4gICAgcmV0dXJuIFNoYXJlQ291bnQ7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEVtYWlsSWNvbiB9IGZyb20gJy4vRW1haWxJY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW1haWxTaGFyZUJ1dHRvbiB9IGZyb20gJy4vRW1haWxTaGFyZUJ1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZhY2Vib29rSWNvbiB9IGZyb20gJy4vRmFjZWJvb2tJY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmFjZWJvb2tNZXNzZW5nZXJJY29uIH0gZnJvbSAnLi9GYWNlYm9va01lc3Nlbmdlckljb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGYWNlYm9va01lc3NlbmdlclNoYXJlQnV0dG9uIH0gZnJvbSAnLi9GYWNlYm9va01lc3NlbmdlclNoYXJlQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmFjZWJvb2tTaGFyZUJ1dHRvbiB9IGZyb20gJy4vRmFjZWJvb2tTaGFyZUJ1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZhY2Vib29rU2hhcmVDb3VudCB9IGZyb20gJy4vRmFjZWJvb2tTaGFyZUNvdW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGF0ZW5hSWNvbiB9IGZyb20gJy4vSGF0ZW5hSWNvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEhhdGVuYVNoYXJlQnV0dG9uIH0gZnJvbSAnLi9IYXRlbmFTaGFyZUJ1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEhhdGVuYVNoYXJlQ291bnQgfSBmcm9tICcuL0hhdGVuYVNoYXJlQ291bnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnN0YXBhcGVySWNvbiB9IGZyb20gJy4vSW5zdGFwYXBlckljb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnN0YXBhcGVyU2hhcmVCdXR0b24gfSBmcm9tICcuL0luc3RhcGFwZXJTaGFyZUJ1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExpbmVJY29uIH0gZnJvbSAnLi9MaW5lSWNvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExpbmVTaGFyZUJ1dHRvbiB9IGZyb20gJy4vTGluZVNoYXJlQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGlua2VkaW5JY29uIH0gZnJvbSAnLi9MaW5rZWRpbkljb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5rZWRpblNoYXJlQnV0dG9uIH0gZnJvbSAnLi9MaW5rZWRpblNoYXJlQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGl2ZWpvdXJuYWxJY29uIH0gZnJvbSAnLi9MaXZlam91cm5hbEljb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaXZlam91cm5hbFNoYXJlQnV0dG9uIH0gZnJvbSAnLi9MaXZlam91cm5hbFNoYXJlQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFpbHJ1SWNvbiB9IGZyb20gJy4vTWFpbHJ1SWNvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1haWxydVNoYXJlQnV0dG9uIH0gZnJvbSAnLi9NYWlscnVTaGFyZUJ1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE9LSWNvbiB9IGZyb20gJy4vT0tJY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT0tTaGFyZUJ1dHRvbiB9IGZyb20gJy4vT0tTaGFyZUJ1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE9LU2hhcmVDb3VudCB9IGZyb20gJy4vT0tTaGFyZUNvdW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGludGVyZXN0SWNvbiB9IGZyb20gJy4vUGludGVyZXN0SWNvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBpbnRlcmVzdFNoYXJlQnV0dG9uIH0gZnJvbSAnLi9QaW50ZXJlc3RTaGFyZUJ1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBpbnRlcmVzdFNoYXJlQ291bnQgfSBmcm9tICcuL1BpbnRlcmVzdFNoYXJlQ291bnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQb2NrZXRJY29uIH0gZnJvbSAnLi9Qb2NrZXRJY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUG9ja2V0U2hhcmVCdXR0b24gfSBmcm9tICcuL1BvY2tldFNoYXJlQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVkZGl0SWNvbiB9IGZyb20gJy4vUmVkZGl0SWNvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlZGRpdFNoYXJlQnV0dG9uIH0gZnJvbSAnLi9SZWRkaXRTaGFyZUJ1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlZGRpdFNoYXJlQ291bnQgfSBmcm9tICcuL1JlZGRpdFNoYXJlQ291bnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZWxlZ3JhbUljb24gfSBmcm9tICcuL1RlbGVncmFtSWNvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRlbGVncmFtU2hhcmVCdXR0b24gfSBmcm9tICcuL1RlbGVncmFtU2hhcmVCdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUdW1ibHJJY29uIH0gZnJvbSAnLi9UdW1ibHJJY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHVtYmxyU2hhcmVCdXR0b24gfSBmcm9tICcuL1R1bWJsclNoYXJlQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHVtYmxyU2hhcmVDb3VudCB9IGZyb20gJy4vVHVtYmxyU2hhcmVDb3VudCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFR3aXR0ZXJJY29uIH0gZnJvbSAnLi9Ud2l0dGVySWNvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFR3aXR0ZXJTaGFyZUJ1dHRvbiB9IGZyb20gJy4vVHdpdHRlclNoYXJlQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVmliZXJJY29uIH0gZnJvbSAnLi9WaWJlckljb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWaWJlclNoYXJlQnV0dG9uIH0gZnJvbSAnLi9WaWJlclNoYXJlQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVktJY29uIH0gZnJvbSAnLi9WS0ljb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWS1NoYXJlQnV0dG9uIH0gZnJvbSAnLi9WS1NoYXJlQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVktTaGFyZUNvdW50IH0gZnJvbSAnLi9WS1NoYXJlQ291bnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBXZWlib0ljb24gfSBmcm9tICcuL1dlaWJvSWNvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFdlaWJvU2hhcmVCdXR0b24gfSBmcm9tICcuL1dlaWJvU2hhcmVCdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBXaGF0c2FwcEljb24gfSBmcm9tICcuL1doYXRzYXBwSWNvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFdoYXRzYXBwU2hhcmVCdXR0b24gfSBmcm9tICcuL1doYXRzYXBwU2hhcmVCdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBXb3JrcGxhY2VJY29uIH0gZnJvbSAnLi9Xb3JrcGxhY2VJY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV29ya3BsYWNlU2hhcmVCdXR0b24gfSBmcm9tICcuL1dvcmtwbGFjZVNoYXJlQnV0dG9uJztcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgQXNzZXJ0aW9uRXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFzc2VydGlvbkVycm9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFzc2VydGlvbkVycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbWVzc2FnZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubmFtZSA9ICdBc3NlcnRpb25FcnJvcic7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEFzc2VydGlvbkVycm9yO1xufShFcnJvcikpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzZXJ0KHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgQXNzZXJ0aW9uRXJyb3IobWVzc2FnZSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb2JqZWN0VG9HZXRQYXJhbXMob2JqZWN0KSB7XG4gICAgdmFyIHBhcmFtcyA9IE9iamVjdC5lbnRyaWVzKG9iamVjdClcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gX2FbMV07XG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsO1xuICAgIH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBrZXkgPSBfYVswXSwgdmFsdWUgPSBfYVsxXTtcbiAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHZhbHVlKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcmFtcy5sZW5ndGggPiAwID8gXCI/XCIgKyBwYXJhbXMuam9pbignJicpIDogJyc7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9