webpackHotUpdate_N_E("pages/vote",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2RlYnVnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvanNvbnAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL0VtYWlsSWNvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL0VtYWlsU2hhcmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9GYWNlYm9va0ljb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9GYWNlYm9va01lc3Nlbmdlckljb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9GYWNlYm9va01lc3NlbmdlclNoYXJlQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvRmFjZWJvb2tTaGFyZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL0ZhY2Vib29rU2hhcmVDb3VudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL0hhdGVuYUljb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9IYXRlbmFTaGFyZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL0hhdGVuYVNoYXJlQ291bnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9JbnN0YXBhcGVySWNvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL0luc3RhcGFwZXJTaGFyZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL0xpbmVJY29uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvTGluZVNoYXJlQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvTGlua2VkaW5JY29uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvTGlua2VkaW5TaGFyZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL0xpdmVqb3VybmFsSWNvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL0xpdmVqb3VybmFsU2hhcmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9NYWlscnVJY29uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvTWFpbHJ1U2hhcmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9PS0ljb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9PS1NoYXJlQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvT0tTaGFyZUNvdW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvUGludGVyZXN0SWNvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1BpbnRlcmVzdFNoYXJlQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvUGludGVyZXN0U2hhcmVDb3VudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1BvY2tldEljb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9Qb2NrZXRTaGFyZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1JlZGRpdEljb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9SZWRkaXRTaGFyZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1JlZGRpdFNoYXJlQ291bnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9TaGFyZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1RlbGVncmFtSWNvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1RlbGVncmFtU2hhcmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9UdW1ibHJJY29uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvVHVtYmxyU2hhcmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9UdW1ibHJTaGFyZUNvdW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvVHdpdHRlckljb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9Ud2l0dGVyU2hhcmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9WS0ljb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9WS1NoYXJlQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvVktTaGFyZUNvdW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvVmliZXJJY29uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvVmliZXJTaGFyZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1dlaWJvSWNvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1dlaWJvU2hhcmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9XaGF0c2FwcEljb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9XaGF0c2FwcFNoYXJlQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvV29ya3BsYWNlSWNvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1dvcmtwbGFjZVNoYXJlQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvaG9jcy9jcmVhdGVJY29uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvaG9jcy9jcmVhdGVTaGFyZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL2hvY3MvY3JlYXRlU2hhcmVDb3VudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvdXRpbHMvYXNzZXJ0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMuanMiXSwibmFtZXMiOlsiU2lkZWJhciIsInNob3dTdGF0Iiwic2V0U2hvd1N0YXQiLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInNpZGViYXJSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInNjcmVlbiIsIndpZHRoIiwiY3VycmVudCIsInN0eWxlIiwiZGlzcGxheSIsInRvZ2dsZVNob3ciLCJzaWRlYmFyIiwibGVuZ3RoIiwic3R5bGVzIiwidG9nZ2xlQnV0dG9uIiwiY2xhc3NOYW1lIiwic2lkZWJhclRvZ2dsZUljb24iLCJjb2xvciIsInNpemUiLCJzaWRlYmFyVG9nZ2xlSWNvbkNsb3NlIiwic2lkZWJhckxvZ28iLCJwYXRobmFtZSIsInNpZGViYXJMaW5rQWN0aXZlIiwic2lkZWJhckxpbmsiLCJzaWRlYmFyTGlua0ljb24iLCJwb2xpY2llcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FB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Q0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2M7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92b3RlLjIzNmQ0NTg4ODY1MTQ1MzRlMzU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG4vL0ljb25zXHJcbmltcG9ydCB7IEdpVm90ZSwgR2lDcm9zc2VkU3dvcmRzIH0gZnJvbSAncmVhY3QtaWNvbnMvZ2knO1xyXG5pbXBvcnQgeyBJbUhvbWUzLCBJbVN0YXRzQmFycyB9IGZyb20gJ3JlYWN0LWljb25zL2ltJztcclxuaW1wb3J0IHsgRmFDaGFydFBpZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgSWNvbkNvbnRleHQgfSBmcm9tICdyZWFjdC1pY29ucyc7XHJcbmltcG9ydCB7IEJpTWVudSB9IGZyb20gJ3JlYWN0LWljb25zL2JpJztcclxuaW1wb3J0IHsgTWRDbG9zZSwgTWRDb250YWN0cyB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcclxuXHJcbmltcG9ydCB7XHJcbiAgRW1haWxTaGFyZUJ1dHRvbixcclxuICBGYWNlYm9va1NoYXJlQnV0dG9uLFxyXG4gIEhhdGVuYVNoYXJlQnV0dG9uLFxyXG4gIEluc3RhcGFwZXJTaGFyZUJ1dHRvbixcclxuICBMaW5lU2hhcmVCdXR0b24sXHJcbiAgTGlua2VkaW5TaGFyZUJ1dHRvbixcclxuICBMaXZlam91cm5hbFNoYXJlQnV0dG9uLFxyXG4gIE1haWxydVNoYXJlQnV0dG9uLFxyXG4gIE9LU2hhcmVCdXR0b24sXHJcbiAgUGludGVyZXN0U2hhcmVCdXR0b24sXHJcbiAgUG9ja2V0U2hhcmVCdXR0b24sXHJcbiAgUmVkZGl0U2hhcmVCdXR0b24sXHJcbiAgVGVsZWdyYW1TaGFyZUJ1dHRvbixcclxuICBUdW1ibHJTaGFyZUJ1dHRvbixcclxuICBUd2l0dGVyU2hhcmVCdXR0b24sXHJcbiAgVmliZXJTaGFyZUJ1dHRvbixcclxuICBWS1NoYXJlQnV0dG9uLFxyXG4gIFdoYXRzYXBwU2hhcmVCdXR0b24sXHJcbiAgV29ya3BsYWNlU2hhcmVCdXR0b24sXHJcbn0gZnJvbSAncmVhY3Qtc2hhcmUnO1xyXG5cclxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd1N0YXQsIHNldFNob3dTdGF0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3Qgc2lkZWJhclJlZiA9IHVzZVJlZihudWxsKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cod2luZG93LnNjcmVlbi53aWR0aCwgdHlwZW9mIHdpbmRvdy5zY3JlZW4ud2lkdGgpO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgd2luZG93LnNjcmVlbi53aWR0aCA+PSA3NjggJiZcclxuICAgICAgICBzaWRlYmFyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnXHJcbiAgICAgICkge1xyXG4gICAgICAgIHNpZGViYXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIHNldFNob3dTdGF0KHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlU2hvdyA9ICgpID0+IHtcclxuICAgIHNldFNob3dTdGF0KCFzaG93U3RhdCk7XHJcbiAgICBsZXQgc2lkZWJhciA9IHNpZGViYXJSZWYuY3VycmVudDtcclxuICAgIGlmIChzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyB8fCBzaWRlYmFyLnN0eWxlLmRpc3BsYXkubGVuZ3RoIDw9IDApIHtcclxuICAgICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVNob3d9IGNsYXNzTmFtZT17c3R5bGVzLnRvZ2dsZUJ1dHRvbn0+XHJcbiAgICAgICAgeyFzaG93U3RhdCA/IChcclxuICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogc3R5bGVzLnNpZGViYXJUb2dnbGVJY29uLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzRkNDc0OScsXHJcbiAgICAgICAgICAgICAgc2l6ZTogMzYsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCaU1lbnUgLz5cclxuICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogc3R5bGVzLnNpZGViYXJUb2dnbGVJY29uQ2xvc2UsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjNGQ0NzQ5JyxcclxuICAgICAgICAgICAgICBzaXplOiAzNixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1kQ2xvc2UgLz5cclxuICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxkaXYgcmVmPXtzaWRlYmFyUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyfT5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCIvbG9nby5wbmdcIlxyXG4gICAgICAgICAgaGVpZ2h0PXs3NX1cclxuICAgICAgICAgIHdpZHRoPXs3NX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJMb2dvfVxyXG4gICAgICAgICAgYWx0PVwiTG9nb1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGV4YWN0PlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09ICcvJ1xyXG4gICAgICAgICAgICAgICAgPyBzdHlsZXMuc2lkZWJhckxpbmtBY3RpdmVcclxuICAgICAgICAgICAgICAgIDogc3R5bGVzLnNpZGViYXJMaW5rXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNsYXNzTmFtZTogc3R5bGVzLnNpZGViYXJMaW5rSWNvbiB9fT5cclxuICAgICAgICAgICAgICA8SW1Ib21lMyAvPlxyXG4gICAgICAgICAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICAmbmJzcDsmbmJzcDs8bGFiZWw+SG9tZTwvbGFiZWw+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvb3ZlcnZpZXdcIj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSAnL292ZXJ2aWV3J1xyXG4gICAgICAgICAgICAgICAgPyBzdHlsZXMuc2lkZWJhckxpbmtBY3RpdmVcclxuICAgICAgICAgICAgICAgIDogc3R5bGVzLnNpZGViYXJMaW5rXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNsYXNzTmFtZTogc3R5bGVzLnNpZGViYXJMaW5rSWNvbiB9fT5cclxuICAgICAgICAgICAgICA8SW1TdGF0c0JhcnMgLz5cclxuICAgICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgJm5ic3A7Jm5ic3A7PGxhYmVsPk92ZXJ2aWV3PC9sYWJlbD5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi92b3RlXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gJy92b3RlJ1xyXG4gICAgICAgICAgICAgICAgPyBzdHlsZXMuc2lkZWJhckxpbmtBY3RpdmVcclxuICAgICAgICAgICAgICAgIDogc3R5bGVzLnNpZGViYXJMaW5rXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNsYXNzTmFtZTogc3R5bGVzLnNpZGViYXJMaW5rSWNvbiB9fT5cclxuICAgICAgICAgICAgICA8R2lWb3RlIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICZuYnNwOyZuYnNwOzxsYWJlbD5Wb3RlPC9sYWJlbD5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9jaGFydHNcIj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSAnL2NoYXJ0cydcclxuICAgICAgICAgICAgICAgID8gc3R5bGVzLnNpZGViYXJMaW5rQWN0aXZlXHJcbiAgICAgICAgICAgICAgICA6IHN0eWxlcy5zaWRlYmFyTGlua1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjbGFzc05hbWU6IHN0eWxlcy5zaWRlYmFyTGlua0ljb24gfX0+XHJcbiAgICAgICAgICAgICAgPEZhQ2hhcnRQaWUgLz5cclxuICAgICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgJm5ic3A7Jm5ic3A7PGxhYmVsPkNoYXJ0czwvbGFiZWw+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYmF0dGxlZ3JvdW5kXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gJy9iYXR0bGVncm91bmQnXHJcbiAgICAgICAgICAgICAgICA/IHN0eWxlcy5zaWRlYmFyTGlua0FjdGl2ZVxyXG4gICAgICAgICAgICAgICAgOiBzdHlsZXMuc2lkZWJhckxpbmtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY2xhc3NOYW1lOiBzdHlsZXMuc2lkZWJhckxpbmtJY29uIH19PlxyXG4gICAgICAgICAgICAgIDxHaUNyb3NzZWRTd29yZHMgLz5cclxuICAgICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgJm5ic3A7Jm5ic3A7PGxhYmVsPkJhdHRsZUdyb3VuZDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSAnL2Fib3V0J1xyXG4gICAgICAgICAgICAgICAgPyBzdHlsZXMuc2lkZWJhckxpbmtBY3RpdmVcclxuICAgICAgICAgICAgICAgIDogc3R5bGVzLnNpZGViYXJMaW5rXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNsYXNzTmFtZTogc3R5bGVzLnNpZGViYXJMaW5rSWNvbiB9fT5cclxuICAgICAgICAgICAgICA8TWRDb250YWN0cyAvPlxyXG4gICAgICAgICAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICAmbmJzcDsmbmJzcDs8bGFiZWw+QWJvdXQgVXM8L2xhYmVsPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPEVtYWlsU2hhcmVCdXR0b24gLz5cclxuICAgICAgICA8RmFjZWJvb2tTaGFyZUJ1dHRvbiAvPlxyXG4gICAgICAgIDxUd2l0dGVyU2hhcmVCdXR0b24gLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wb2xpY2llc30+XHJcbiAgICAgICAgICBBcHB5Vm90ZSBpcyBub3QgYWZmaWxpYXRlZCB3aXRoIGFueSBwb2xpdGljYWwgcGFydHksIGNhbmRpZGF0ZSBvclxyXG4gICAgICAgICAgaW50ZXJlc3QgZ3JvdXAuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG4iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCIvKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kZWJ1ZycpO1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9ICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWVcbiAgICAgICAgICAgICAgICYmICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWUuc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgPyBjaHJvbWUuc3RvcmFnZS5sb2NhbFxuICAgICAgICAgICAgICAgICAgOiBsb2NhbHN0b3JhZ2UoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG4gICdsaWdodHNlYWdyZWVuJyxcbiAgJ2ZvcmVzdGdyZWVuJyxcbiAgJ2dvbGRlbnJvZCcsXG4gICdkb2RnZXJibHVlJyxcbiAgJ2RhcmtvcmNoaWQnLFxuICAnY3JpbXNvbidcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuICAvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG4gIC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG4gIC8vIGV4cGxpY2l0bHlcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmIHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIGlzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG4gIC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG4gIHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuICAgIC8vIGlzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcbiAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuICAgIC8vIGlzIGZpcmVmb3ggPj0gdjMxP1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuICAgIC8vIGRvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uKHYpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnIubWVzc2FnZTtcbiAgfVxufTtcblxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuICB2YXIgdXNlQ29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cbiAgYXJnc1swXSA9ICh1c2VDb2xvcnMgPyAnJWMnIDogJycpXG4gICAgKyB0aGlzLm5hbWVzcGFjZVxuICAgICsgKHVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKVxuICAgICsgYXJnc1swXVxuICAgICsgKHVzZUNvbG9ycyA/ICclYyAnIDogJyAnKVxuICAgICsgJysnICsgZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG4gIGlmICghdXNlQ29sb3JzKSByZXR1cm47XG5cbiAgdmFyIGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuICBhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKVxuXG4gIC8vIHRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG4gIC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cbiAgLy8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsYXN0QyA9IDA7XG4gIGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgIGlmICgnJSUnID09PSBtYXRjaCkgcmV0dXJuO1xuICAgIGluZGV4Kys7XG4gICAgaWYgKCclYycgPT09IG1hdGNoKSB7XG4gICAgICAvLyB3ZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcbiAgICAgIC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG4gICAgICBsYXN0QyA9IGluZGV4O1xuICAgIH1cbiAgfSk7XG5cbiAgYXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGxvZygpIHtcbiAgLy8gdGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcbiAgLy8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcbiAgcmV0dXJuICdvYmplY3QnID09PSB0eXBlb2YgY29uc29sZVxuICAgICYmIGNvbnNvbGUubG9nXG4gICAgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZS5sb2csIGNvbnNvbGUsIGFyZ3VtZW50cyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuICB0cnkge1xuICAgIGlmIChudWxsID09IG5hbWVzcGFjZXMpIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UuZGVidWcgPSBuYW1lc3BhY2VzO1xuICAgIH1cbiAgfSBjYXRjaChlKSB7fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHZhciByO1xuICB0cnkge1xuICAgIHIgPSBleHBvcnRzLnN0b3JhZ2UuZGVidWc7XG4gIH0gY2F0Y2goZSkge31cblxuICAvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG4gIGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuICAgIHIgPSBwcm9jZXNzLmVudi5ERUJVRztcbiAgfVxuXG4gIHJldHVybiByO1xufVxuXG4vKipcbiAqIEVuYWJsZSBuYW1lc3BhY2VzIGxpc3RlZCBpbiBgbG9jYWxTdG9yYWdlLmRlYnVnYCBpbml0aWFsbHkuXG4gKi9cblxuZXhwb3J0cy5lbmFibGUobG9hZCgpKTtcblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG4iLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Z1snZGVmYXVsdCddID0gY3JlYXRlRGVidWc7XG5leHBvcnRzLmNvZXJjZSA9IGNvZXJjZTtcbmV4cG9ydHMuZGlzYWJsZSA9IGRpc2FibGU7XG5leHBvcnRzLmVuYWJsZSA9IGVuYWJsZTtcbmV4cG9ydHMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5leHBvcnRzLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cbiAqL1xuXG5leHBvcnRzLm5hbWVzID0gW107XG5leHBvcnRzLnNraXBzID0gW107XG5cbi8qKlxuICogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuICpcbiAqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMgPSB7fTtcblxuLyoqXG4gKiBQcmV2aW91cyBsb2cgdGltZXN0YW1wLlxuICovXG5cbnZhciBwcmV2VGltZTtcblxuLyoqXG4gKiBTZWxlY3QgYSBjb2xvci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuICB2YXIgaGFzaCA9IDAsIGk7XG5cbiAgZm9yIChpIGluIG5hbWVzcGFjZSkge1xuICAgIGhhc2ggID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcbiAgICBoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICB9XG5cbiAgcmV0dXJuIGV4cG9ydHMuY29sb3JzW01hdGguYWJzKGhhc2gpICUgZXhwb3J0cy5jb2xvcnMubGVuZ3RoXTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cbiAgZnVuY3Rpb24gZGVidWcoKSB7XG4gICAgLy8gZGlzYWJsZWQ/XG4gICAgaWYgKCFkZWJ1Zy5lbmFibGVkKSByZXR1cm47XG5cbiAgICB2YXIgc2VsZiA9IGRlYnVnO1xuXG4gICAgLy8gc2V0IGBkaWZmYCB0aW1lc3RhbXBcbiAgICB2YXIgY3VyciA9ICtuZXcgRGF0ZSgpO1xuICAgIHZhciBtcyA9IGN1cnIgLSAocHJldlRpbWUgfHwgY3Vycik7XG4gICAgc2VsZi5kaWZmID0gbXM7XG4gICAgc2VsZi5wcmV2ID0gcHJldlRpbWU7XG4gICAgc2VsZi5jdXJyID0gY3VycjtcbiAgICBwcmV2VGltZSA9IGN1cnI7XG5cbiAgICAvLyB0dXJuIHRoZSBgYXJndW1lbnRzYCBpbnRvIGEgcHJvcGVyIEFycmF5XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIGFyZ3NbMF0gPSBleHBvcnRzLmNvZXJjZShhcmdzWzBdKTtcblxuICAgIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIGFyZ3NbMF0pIHtcbiAgICAgIC8vIGFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG4gICAgICBhcmdzLnVuc2hpZnQoJyVPJyk7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCBmdW5jdGlvbihtYXRjaCwgZm9ybWF0KSB7XG4gICAgICAvLyBpZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG4gICAgICBpZiAobWF0Y2ggPT09ICclJScpIHJldHVybiBtYXRjaDtcbiAgICAgIGluZGV4Kys7XG4gICAgICB2YXIgZm9ybWF0dGVyID0gZXhwb3J0cy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG4gICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGZvcm1hdHRlcikge1xuICAgICAgICB2YXIgdmFsID0gYXJnc1tpbmRleF07XG4gICAgICAgIG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuICAgICAgICAvLyBub3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG4gICAgICAgIGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgaW5kZXgtLTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcblxuICAgIC8vIGFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG4gICAgZXhwb3J0cy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cbiAgICB2YXIgbG9nRm4gPSBkZWJ1Zy5sb2cgfHwgZXhwb3J0cy5sb2cgfHwgY29uc29sZS5sb2cuYmluZChjb25zb2xlKTtcbiAgICBsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgfVxuXG4gIGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgZGVidWcuZW5hYmxlZCA9IGV4cG9ydHMuZW5hYmxlZChuYW1lc3BhY2UpO1xuICBkZWJ1Zy51c2VDb2xvcnMgPSBleHBvcnRzLnVzZUNvbG9ycygpO1xuICBkZWJ1Zy5jb2xvciA9IHNlbGVjdENvbG9yKG5hbWVzcGFjZSk7XG5cbiAgLy8gZW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBleHBvcnRzLmluaXQpIHtcbiAgICBleHBvcnRzLmluaXQoZGVidWcpO1xuICB9XG5cbiAgcmV0dXJuIGRlYnVnO1xufVxuXG4vKipcbiAqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcbiAqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcbiAgZXhwb3J0cy5zYXZlKG5hbWVzcGFjZXMpO1xuXG4gIGV4cG9ydHMubmFtZXMgPSBbXTtcbiAgZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4gIHZhciBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG4gIHZhciBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICghc3BsaXRbaV0pIGNvbnRpbnVlOyAvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuICAgIG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuICAgIGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcbiAgICAgIGV4cG9ydHMuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gIGV4cG9ydHMuZW5hYmxlKCcnKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG1vZGUgbmFtZSBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuICB2YXIgaSwgbGVuO1xuICBmb3IgKGkgPSAwLCBsZW4gPSBleHBvcnRzLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGV4cG9ydHMuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKGkgPSAwLCBsZW4gPSBleHBvcnRzLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGV4cG9ydHMubmFtZXNbaV0udGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDb2VyY2UgYHZhbGAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsXG4gKiBAcmV0dXJuIHtNaXhlZH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuICByZXR1cm4gdmFsO1xufVxuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cblxudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnanNvbnAnKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGpzb25wO1xuXG4vKipcbiAqIENhbGxiYWNrIGluZGV4LlxuICovXG5cbnZhciBjb3VudCA9IDA7XG5cbi8qKlxuICogTm9vcCBmdW5jdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiBub29wKCl7fVxuXG4vKipcbiAqIEpTT05QIGhhbmRsZXJcbiAqXG4gKiBPcHRpb25zOlxuICogIC0gcGFyYW0ge1N0cmluZ30gcXMgcGFyYW1ldGVyIChgY2FsbGJhY2tgKVxuICogIC0gcHJlZml4IHtTdHJpbmd9IHFzIHBhcmFtZXRlciAoYF9fanBgKVxuICogIC0gbmFtZSB7U3RyaW5nfSBxcyBwYXJhbWV0ZXIgKGBwcmVmaXhgICsgaW5jcilcbiAqICAtIHRpbWVvdXQge051bWJlcn0gaG93IGxvbmcgYWZ0ZXIgYSB0aW1lb3V0IGVycm9yIGlzIGVtaXR0ZWQgKGA2MDAwMGApXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtPYmplY3R8RnVuY3Rpb259IG9wdGlvbmFsIG9wdGlvbnMgLyBjYWxsYmFja1xuICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9uYWwgY2FsbGJhY2tcbiAqL1xuXG5mdW5jdGlvbiBqc29ucCh1cmwsIG9wdHMsIGZuKXtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIG9wdHMpIHtcbiAgICBmbiA9IG9wdHM7XG4gICAgb3B0cyA9IHt9O1xuICB9XG4gIGlmICghb3B0cykgb3B0cyA9IHt9O1xuXG4gIHZhciBwcmVmaXggPSBvcHRzLnByZWZpeCB8fCAnX19qcCc7XG5cbiAgLy8gdXNlIHRoZSBjYWxsYmFjayBuYW1lIHRoYXQgd2FzIHBhc3NlZCBpZiBvbmUgd2FzIHByb3ZpZGVkLlxuICAvLyBvdGhlcndpc2UgZ2VuZXJhdGUgYSB1bmlxdWUgbmFtZSBieSBpbmNyZW1lbnRpbmcgb3VyIGNvdW50ZXIuXG4gIHZhciBpZCA9IG9wdHMubmFtZSB8fCAocHJlZml4ICsgKGNvdW50KyspKTtcblxuICB2YXIgcGFyYW0gPSBvcHRzLnBhcmFtIHx8ICdjYWxsYmFjayc7XG4gIHZhciB0aW1lb3V0ID0gbnVsbCAhPSBvcHRzLnRpbWVvdXQgPyBvcHRzLnRpbWVvdXQgOiA2MDAwMDtcbiAgdmFyIGVuYyA9IGVuY29kZVVSSUNvbXBvbmVudDtcbiAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXSB8fCBkb2N1bWVudC5oZWFkO1xuICB2YXIgc2NyaXB0O1xuICB2YXIgdGltZXI7XG5cblxuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgY2xlYW51cCgpO1xuICAgICAgaWYgKGZuKSBmbihuZXcgRXJyb3IoJ1RpbWVvdXQnKSk7XG4gICAgfSwgdGltZW91dCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwKCl7XG4gICAgaWYgKHNjcmlwdC5wYXJlbnROb2RlKSBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgIHdpbmRvd1tpZF0gPSBub29wO1xuICAgIGlmICh0aW1lcikgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpe1xuICAgIGlmICh3aW5kb3dbaWRdKSB7XG4gICAgICBjbGVhbnVwKCk7XG4gICAgfVxuICB9XG5cbiAgd2luZG93W2lkXSA9IGZ1bmN0aW9uKGRhdGEpe1xuICAgIGRlYnVnKCdqc29ucCBnb3QnLCBkYXRhKTtcbiAgICBjbGVhbnVwKCk7XG4gICAgaWYgKGZuKSBmbihudWxsLCBkYXRhKTtcbiAgfTtcblxuICAvLyBhZGQgcXMgY29tcG9uZW50XG4gIHVybCArPSAofnVybC5pbmRleE9mKCc/JykgPyAnJicgOiAnPycpICsgcGFyYW0gKyAnPScgKyBlbmMoaWQpO1xuICB1cmwgPSB1cmwucmVwbGFjZSgnPyYnLCAnPycpO1xuXG4gIGRlYnVnKCdqc29ucCByZXEgXCIlc1wiJywgdXJsKTtcblxuICAvLyBjcmVhdGUgc2NyaXB0XG4gIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHQuc3JjID0gdXJsO1xuICB0YXJnZXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2NyaXB0LCB0YXJnZXQpO1xuXG4gIHJldHVybiBjYW5jZWw7XG59XG4iLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWwpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oKD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICBpZiAobXMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtcyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgcmV0dXJuIHBsdXJhbChtcywgZCwgJ2RheScpIHx8XG4gICAgcGx1cmFsKG1zLCBoLCAnaG91cicpIHx8XG4gICAgcGx1cmFsKG1zLCBtLCAnbWludXRlJykgfHxcbiAgICBwbHVyYWwobXMsIHMsICdzZWNvbmQnKSB8fFxuICAgIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBuLCBuYW1lKSB7XG4gIGlmIChtcyA8IG4pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG1zIDwgbiAqIDEuNSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKG1zIC8gbikgKyAnICcgKyBuYW1lO1xuICB9XG4gIHJldHVybiBNYXRoLmNlaWwobXMgLyBuKSArICcgJyArIG5hbWUgKyAncyc7XG59XG4iLCJpbXBvcnQgY3JlYXRlSWNvbiBmcm9tICcuL2hvY3MvY3JlYXRlSWNvbic7XG52YXIgRW1haWxJY29uID0gY3JlYXRlSWNvbih7XG4gICAgY29sb3I6ICcjN2Y3ZjdmJyxcbiAgICBuZXR3b3JrTmFtZTogJ2VtYWlsJyxcbiAgICBwYXRoOiAnTTE3LDIydjIwaDMwVjIySDE3eiBNNDEuMSwyNUwzMiwzMi4xTDIyLjksMjVINDEuMXogTTIwLDM5VjI2LjZsMTIsOS4zbDEyLTkuM1YzOUgyMHonLFxufSk7XG5leHBvcnQgZGVmYXVsdCBFbWFpbEljb247XG4iLCJpbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5pbXBvcnQgY3JlYXRlU2hhcmVCdXR0b24gZnJvbSAnLi9ob2NzL2NyZWF0ZVNoYXJlQnV0dG9uJztcbmZ1bmN0aW9uIGVtYWlsTGluayh1cmwsIF9hKSB7XG4gICAgdmFyIHN1YmplY3QgPSBfYS5zdWJqZWN0LCBib2R5ID0gX2EuYm9keSwgc2VwYXJhdG9yID0gX2Euc2VwYXJhdG9yO1xuICAgIHJldHVybiAnbWFpbHRvOicgKyBvYmplY3RUb0dldFBhcmFtcyh7IHN1YmplY3Q6IHN1YmplY3QsIGJvZHk6IGJvZHkgPyBib2R5ICsgc2VwYXJhdG9yICsgdXJsIDogdXJsIH0pO1xufVxudmFyIEVtYWlsU2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbignZW1haWwnLCBlbWFpbExpbmssIGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gKHtcbiAgICBzdWJqZWN0OiBwcm9wcy5zdWJqZWN0LFxuICAgIGJvZHk6IHByb3BzLmJvZHksXG4gICAgc2VwYXJhdG9yOiBwcm9wcy5zZXBhcmF0b3IgfHwgJyAnLFxufSk7IH0sIHtcbiAgICBvcGVuU2hhcmVEaWFsb2dPbkNsaWNrOiBmYWxzZSxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiAoXywgbGluaykge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxpbms7XG4gICAgfSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgRW1haWxTaGFyZUJ1dHRvbjtcbiIsImltcG9ydCBjcmVhdGVJY29uIGZyb20gJy4vaG9jcy9jcmVhdGVJY29uJztcbnZhciBGYWNlYm9va0ljb24gPSBjcmVhdGVJY29uKHtcbiAgICBjb2xvcjogJyMzYjU5OTgnLFxuICAgIG5ldHdvcmtOYW1lOiAnZmFjZWJvb2snLFxuICAgIHBhdGg6ICdNMzQuMSw0N1YzMy4zaDQuNmwwLjctNS4zaC01LjN2LTMuNGMwLTEuNSwwLjQtMi42LDIuNi0yLjZsMi44LDB2LTQuOGMtMC41LTAuMS0yLjItMC4yLTQuMS0wLjIgYy00LjEsMC02LjksMi41LTYuOSw3VjI4SDI0djUuM2g0LjZWNDdIMzQuMXonLFxufSk7XG5leHBvcnQgZGVmYXVsdCBGYWNlYm9va0ljb247XG4iLCJpbXBvcnQgY3JlYXRlSWNvbiBmcm9tICcuL2hvY3MvY3JlYXRlSWNvbic7XG52YXIgRmFjZWJvb2tNZXNzZW5nZXJJY29uID0gY3JlYXRlSWNvbih7XG4gICAgY29sb3I6ICcjMjE5NkYzJyxcbiAgICBuZXR3b3JrTmFtZTogJ2ZhY2Vib29rbWVzc2VuZ2VyJyxcbiAgICBwYXRoOiAnTSA1My4wNjY0MDYgMjEuODcxMDk0IEMgNTIuNjY3OTY5IDIxLjMzOTg0NCA1MS45NDE0MDYgMjEuMTc5Njg4IDUxLjM1OTM3NSAyMS40OTYwOTQgTCAzNy40OTIxODggMjkuMDU4NTk0IEwgMjguODY3MTg4IDIxLjY2MDE1NiBDIDI4LjMzOTg0NCAyMS4yMDcwMzEgMjcuNTUwNzgxIDIxLjIzODI4MSAyNy4wNTQ2ODggMjEuNzMwNDY5IEwgMTEuMDU4NTk0IDM3LjcyNjU2MiBDIDEwLjUzOTA2MiAzOC4yNSAxMC41NDI5NjkgMzkuMDkzNzUgMTEuMDYyNSAzOS42MTMyODEgQyAxMS40ODA0NjkgNDAuMDI3MzQ0IDEyLjEyMTA5NCA0MC4xMjEwOTQgMTIuNjQwNjI1IDM5LjgzOTg0NCBMIDI2LjUwMzkwNiAzMi4yODEyNSBMIDM1LjEzNjcxOSAzOS42Nzk2ODggQyAzNS42Njc5NjkgNDAuMTMyODEyIDM2LjQ1NzAzMSA0MC4xMDE1NjIgMzYuOTQ5MjE5IDM5LjYwOTM3NSBMIDUyLjk0OTIxOSAyMy42MTMyODEgQyA1My40MTQwNjIgMjMuMTQwNjI1IDUzLjQ2NDg0NCAyMi4zOTg0MzggNTMuMDY2NDA2IDIxLjg3MTA5NCBaIE0gNTMuMDY2NDA2IDIxLjg3MTA5NCcsXG59KTtcbmV4cG9ydCBkZWZhdWx0IEZhY2Vib29rTWVzc2VuZ2VySWNvbjtcbiIsImltcG9ydCBvYmplY3RUb0dldFBhcmFtcyBmcm9tICcuL3V0aWxzL29iamVjdFRvR2V0UGFyYW1zJztcbmltcG9ydCBjcmVhdGVTaGFyZUJ1dHRvbiBmcm9tICcuL2hvY3MvY3JlYXRlU2hhcmVCdXR0b24nO1xuZnVuY3Rpb24gZmFjZWJvb2tNZXNzZW5nZXJMaW5rKHVybCwgX2EpIHtcbiAgICB2YXIgYXBwSWQgPSBfYS5hcHBJZCwgcmVkaXJlY3RVcmkgPSBfYS5yZWRpcmVjdFVyaSwgdG8gPSBfYS50bztcbiAgICByZXR1cm4gKCdodHRwczovL3d3dy5mYWNlYm9vay5jb20vZGlhbG9nL3NlbmQnICtcbiAgICAgICAgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgICAgICAgICAgbGluazogdXJsLFxuICAgICAgICAgICAgcmVkaXJlY3RfdXJpOiByZWRpcmVjdFVyaSB8fCB1cmwsXG4gICAgICAgICAgICBhcHBfaWQ6IGFwcElkLFxuICAgICAgICAgICAgdG86IHRvLFxuICAgICAgICB9KSk7XG59XG52YXIgRmFjZWJvb2tNZXNzZW5nZXJTaGFyZUJ1dHRvbiA9IGNyZWF0ZVNoYXJlQnV0dG9uKCdmYWNlYm9va21lc3NlbmdlcicsIGZhY2Vib29rTWVzc2VuZ2VyTGluaywgZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoe1xuICAgIGFwcElkOiBwcm9wcy5hcHBJZCxcbiAgICByZWRpcmVjdFVyaTogcHJvcHMucmVkaXJlY3RVcmksXG4gICAgdG86IHByb3BzLnRvLFxufSk7IH0sIHtcbiAgICB3aW5kb3dXaWR0aDogMTAwMCxcbiAgICB3aW5kb3dIZWlnaHQ6IDgyMCxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgRmFjZWJvb2tNZXNzZW5nZXJTaGFyZUJ1dHRvbjtcbiIsImltcG9ydCBhc3NlcnQgZnJvbSAnLi91dGlscy9hc3NlcnQnO1xuaW1wb3J0IG9iamVjdFRvR2V0UGFyYW1zIGZyb20gJy4vdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMnO1xuaW1wb3J0IGNyZWF0ZVNoYXJlQnV0dG9uIGZyb20gJy4vaG9jcy9jcmVhdGVTaGFyZUJ1dHRvbic7XG5mdW5jdGlvbiBmYWNlYm9va0xpbmsodXJsLCBfYSkge1xuICAgIHZhciBxdW90ZSA9IF9hLnF1b3RlLCBoYXNodGFnID0gX2EuaGFzaHRhZztcbiAgICBhc3NlcnQodXJsLCAnZmFjZWJvb2sudXJsJyk7XG4gICAgcmV0dXJuICgnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwJyArXG4gICAgICAgIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICAgICAgICAgIHU6IHVybCxcbiAgICAgICAgICAgIHF1b3RlOiBxdW90ZSxcbiAgICAgICAgICAgIGhhc2h0YWc6IGhhc2h0YWcsXG4gICAgICAgIH0pKTtcbn1cbnZhciBGYWNlYm9va1NoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oJ2ZhY2Vib29rJywgZmFjZWJvb2tMaW5rLCBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuICh7XG4gICAgcXVvdGU6IHByb3BzLnF1b3RlLFxuICAgIGhhc2h0YWc6IHByb3BzLmhhc2h0YWcsXG59KTsgfSwge1xuICAgIHdpbmRvd1dpZHRoOiA1NTAsXG4gICAgd2luZG93SGVpZ2h0OiA0MDAsXG59KTtcbmV4cG9ydCBkZWZhdWx0IEZhY2Vib29rU2hhcmVCdXR0b247XG4iLCJpbXBvcnQganNvbnAgZnJvbSAnanNvbnAnO1xuaW1wb3J0IGNyZWF0ZVNoYXJlQ291bnQgZnJvbSAnLi9ob2NzL2NyZWF0ZVNoYXJlQ291bnQnO1xuZnVuY3Rpb24gZ2V0RmFjZWJvb2tTaGFyZUNvdW50KHNoYXJlVXJsLCBjYWxsYmFjaykge1xuICAgIHZhciBlbmRwb2ludCA9IFwiaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vP2lkPVwiICsgc2hhcmVVcmwgKyBcIiZmaWVsZHM9b2dfb2JqZWN0e2VuZ2FnZW1lbnR9XCI7XG4gICAganNvbnAoZW5kcG9pbnQsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2soIWVyciAmJiBkYXRhICYmIGRhdGEub2dfb2JqZWN0ICYmIGRhdGEub2dfb2JqZWN0LmVuZ2FnZW1lbnRcbiAgICAgICAgICAgID8gZGF0YS5vZ19vYmplY3QuZW5nYWdlbWVudC5jb3VudFxuICAgICAgICAgICAgOiB1bmRlZmluZWQpO1xuICAgIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hhcmVDb3VudChnZXRGYWNlYm9va1NoYXJlQ291bnQpO1xuIiwiaW1wb3J0IGNyZWF0ZUljb24gZnJvbSAnLi9ob2NzL2NyZWF0ZUljb24nO1xudmFyIEhhdGVuYUljb24gPSBjcmVhdGVJY29uKHtcbiAgICBjb2xvcjogJyMwMDlhZDknLFxuICAgIG5ldHdvcmtOYW1lOiAnaGF0ZW5hJyxcbiAgICBwYXRoOiAnTSAzNi4xNjQwNjIgMzMuNTU0Njg4IEMgMzQuOTg4MjgxIDMyLjIzNDM3NSAzMy4zNDc2NTYgMzEuNSAzMS4yNTM5MDYgMzEuMzQzNzUgQyAzMy4xMjUgMzAuODM1OTM4IDM0LjQ3NjU2MiAzMC4wOTM3NSAzNS4zMzU5MzggMjkuMDkzNzUgQyAzNi4xOTE0MDYgMjguMDkzNzUgMzYuNjA5Mzc1IDI2Ljc4MTI1IDM2LjYwOTM3NSAyNS4xMDE1NjIgQyAzNi42Mjg5MDYgMjMuODc1IDM2LjMzMjAzMSAyMi42NjAxNTYgMzUuNzUgMjEuNTc4MTI1IEMgMzUuMTYwMTU2IDIwLjU1ODU5NCAzNC4yOTI5NjkgMTkuNzE4NzUgMzMuMjUzOTA2IDE5LjE2MDE1NiBDIDMyLjMwNDY4OCAxOC42NDA2MjUgMzEuMTc1NzgxIDE4LjI2NTYyNSAyOS44NDc2NTYgMTguMDQyOTY5IEMgMjguNTIzNDM4IDE3LjgyNDIxOSAyNi4xOTUzMTIgMTcuNzMwNDY5IDIyLjg2NzE4OCAxNy43MzA0NjkgTCAxNC43Njk1MzEgMTcuNzMwNDY5IEwgMTQuNzY5NTMxIDQ3LjI2OTUzMSBMIDIzLjExMzI4MSA0Ny4yNjk1MzEgQyAyNi40Njg3NSA0Ny4yNjk1MzEgMjguODg2NzE5IDQ3LjE1NjI1IDMwLjM2NzE4OCA0Ni45Mjk2ODggQyAzMS44NTE1NjIgNDYuNjk1MzEyIDMzLjA4NTkzOCA0Ni4zMDQ2ODggMzQuMDg1OTM4IDQ1Ljc3MzQzOCBDIDM1LjI4OTA2MiA0NS4xNDg0MzggMzYuMjgxMjUgNDQuMTc5Njg4IDM2LjkzMzU5NCA0Mi45OTIxODggQyAzNy41OTc2NTYgNDEuNzk2ODc1IDM3LjkzMzU5NCA0MC40MDIzNDQgMzcuOTMzNTk0IDM4LjgxNjQwNiBDIDM3LjkzMzU5NCAzNi42MjEwOTQgMzcuMzQ3NjU2IDM0Ljg2NzE4OCAzNi4xNjQwNjIgMzMuNTU0Njg4IFogTSAyMi4yNTc4MTIgMjQuMjY5NTMxIEwgMjMuOTg0Mzc1IDI0LjI2OTUzMSBDIDI1Ljk4ODI4MSAyNC4yNjk1MzEgMjcuMzMyMDMxIDI0LjQ5NjA5NCAyOC4wMTU2MjUgMjQuOTQ1MzEyIEMgMjguNzAzMTI1IDI1LjQwMjM0NCAyOS4wNDI5NjkgMjYuMTgzNTk0IDI5LjA0Mjk2OSAyNy4yODUxNTYgQyAyOS4wNDI5NjkgMjguMzkwNjI1IDI4LjY2NDA2MiAyOS4xMDU0NjkgMjcuOTM3NSAyOS41NTA3ODEgQyAyNy4yMTA5MzggMjkuOTkyMTg4IDI1Ljg0Mzc1IDMwLjE5OTIxOSAyMy44NTU0NjkgMzAuMTk5MjE5IEwgMjIuMjU3ODEyIDMwLjE5OTIxOSBaIE0gMjkuMTIxMDk0IDQxLjIxMDkzOCBDIDI4LjMyODEyNSA0MS42OTE0MDYgMjYuOTc2NTYyIDQxLjkyNTc4MSAyNS4wNzgxMjUgNDEuOTI1NzgxIEwgMjIuMjU3ODEyIDQxLjkyNTc4MSBMIDIyLjI1NzgxMiAzNS40ODgyODEgTCAyNS4xOTUzMTIgMzUuNDg4MjgxIEMgMjcuMTQ0NTMxIDM1LjQ4ODI4MSAyOC40OTYwOTQgMzUuNzM4MjgxIDI5LjIxMDkzOCAzNi4yMzA0NjkgQyAyOS45MjU3ODEgMzYuNzI2NTYyIDMwLjMwNDY4OCAzNy41ODIwMzEgMzAuMzA0Njg4IDM4LjgzMjAzMSBDIDMwLjMwNDY4OCA0MC4wNzgxMjUgMjkuOTE0MDYyIDQwLjc0MjE4OCAyOS4xMDU0NjkgNDEuMjIyNjU2IFogTSAyOS4xMjEwOTQgNDEuMjEwOTM4IE0gNDYuNDg4MjgxIDM5Ljc5Mjk2OSBDIDQ0LjQyMTg3NSAzOS43OTI5NjkgNDIuNzQyMTg4IDQxLjQ2ODc1IDQyLjc0MjE4OCA0My41MzUxNTYgQyA0Mi43NDIxODggNDUuNjA1NDY5IDQ0LjQyMTg3NSA0Ny4yODEyNSA0Ni40ODgyODEgNDcuMjgxMjUgQyA0OC41NTQ2ODggNDcuMjgxMjUgNTAuMjMwNDY5IDQ1LjYwNTQ2OSA1MC4yMzA0NjkgNDMuNTM1MTU2IEMgNTAuMjMwNDY5IDQxLjQ2ODc1IDQ4LjU1NDY4OCAzOS43OTI5NjkgNDYuNDg4MjgxIDM5Ljc5Mjk2OSBaIE0gNDYuNDg4MjgxIDM5Ljc5Mjk2OSBNIDQzLjIzODI4MSAxNy43MzA0NjkgTCA0OS43MzgyODEgMTcuNzMwNDY5IEwgNDkuNzM4MjgxIDM3LjQyOTY4OCBMIDQzLjIzODI4MSAzNy40Mjk2ODggWiBNIDQzLjIzODI4MSAxNy43MzA0NjkgJyxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgSGF0ZW5hSWNvbjtcbiIsImltcG9ydCBhc3NlcnQgZnJvbSAnLi91dGlscy9hc3NlcnQnO1xuaW1wb3J0IGNyZWF0ZVNoYXJlQnV0dG9uIGZyb20gJy4vaG9jcy9jcmVhdGVTaGFyZUJ1dHRvbic7XG5mdW5jdGlvbiBoYXRlbmFMaW5rKHVybCwgX2EpIHtcbiAgICB2YXIgdGl0bGUgPSBfYS50aXRsZTtcbiAgICBhc3NlcnQodXJsLCAnaGF0ZW5hLnVybCcpO1xuICAgIHJldHVybiBcImh0dHA6Ly9iLmhhdGVuYS5uZS5qcC9hZGQ/bW9kZT1jb25maXJtJnVybD1cIiArIHVybCArIFwiJnRpdGxlPVwiICsgdGl0bGU7XG59XG52YXIgSGF0ZW5hU2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbignaGF0ZW5hJywgaGF0ZW5hTGluaywgZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoe1xuICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbn0pOyB9LCB7XG4gICAgd2luZG93V2lkdGg6IDY2MCxcbiAgICB3aW5kb3dIZWlnaHQ6IDQ2MCxcbiAgICB3aW5kb3dQb3NpdGlvbjogJ3dpbmRvd0NlbnRlcicsXG59KTtcbmV4cG9ydCBkZWZhdWx0IEhhdGVuYVNoYXJlQnV0dG9uO1xuIiwiaW1wb3J0IGpzb25wIGZyb20gJ2pzb25wJztcbmltcG9ydCBvYmplY3RUb0dldFBhcmFtcyBmcm9tICcuL3V0aWxzL29iamVjdFRvR2V0UGFyYW1zJztcbmltcG9ydCBjcmVhdGVTaGFyZUNvdW50IGZyb20gJy4vaG9jcy9jcmVhdGVTaGFyZUNvdW50JztcbmZ1bmN0aW9uIGdldEhhdGVuYVNoYXJlQ291bnQoc2hhcmVVcmwsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHVybCA9ICdodHRwczovL2Jvb2ttYXJrLmhhdGVuYWFwaXMuY29tL2NvdW50L2VudHJ5JztcbiAgICBqc29ucCh1cmwgK1xuICAgICAgICBvYmplY3RUb0dldFBhcmFtcyh7XG4gICAgICAgICAgICB1cmw6IHNoYXJlVXJsLFxuICAgICAgICB9KSwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhkYXRhID8gZGF0YSA6IHVuZGVmaW5lZCk7XG4gICAgfSk7XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaGFyZUNvdW50KGdldEhhdGVuYVNoYXJlQ291bnQpO1xuIiwiaW1wb3J0IGNyZWF0ZUljb24gZnJvbSAnLi9ob2NzL2NyZWF0ZUljb24nO1xudmFyIEluc3RhcGFwZXJJY29uID0gY3JlYXRlSWNvbih7XG4gICAgY29sb3I6ICcjMUYxRjFGJyxcbiAgICBuZXR3b3JrTmFtZTogJ2luc3RhcGFwZXInLFxuICAgIHBhdGg6ICdNMzUuNjg4IDQzLjAxMmMwIDIuNDI1LjM2MSAyLjc4NSAzLjkxMiAzLjA1NlY0OEgyNC40MDF2LTEuOTMyYzMuNTU1LS4yNyAzLjkxMi0uNjMgMy45MTItMy4wNTZWMjAuOTQ0YzAtMi4zNzktLjM2LTIuNzg1LTMuOTEyLTMuMDU2VjE2SDM5LjZ2MS44ODhjLTMuNTUuMjctMy45MTIuNjc1LTMuOTEyIDMuMDU2djIyLjA2OGguMDAxeicsXG59KTtcbmV4cG9ydCBkZWZhdWx0IEluc3RhcGFwZXJJY29uO1xuIiwiaW1wb3J0IGFzc2VydCBmcm9tICcuL3V0aWxzL2Fzc2VydCc7XG5pbXBvcnQgY3JlYXRlU2hhcmVCdXR0b24gZnJvbSAnLi9ob2NzL2NyZWF0ZVNoYXJlQnV0dG9uJztcbmltcG9ydCBvYmplY3RUb0dldFBhcmFtcyBmcm9tICcuL3V0aWxzL29iamVjdFRvR2V0UGFyYW1zJztcbmZ1bmN0aW9uIGluc3RhcGFwZXJMaW5rKHVybCwgX2EpIHtcbiAgICB2YXIgdGl0bGUgPSBfYS50aXRsZSwgZGVzY3JpcHRpb24gPSBfYS5kZXNjcmlwdGlvbjtcbiAgICBhc3NlcnQodXJsLCAnaW5zdGFwYXBlci51cmwnKTtcbiAgICByZXR1cm4gKCdodHRwOi8vd3d3Lmluc3RhcGFwZXIuY29tL2hlbGxvMicgK1xuICAgICAgICBvYmplY3RUb0dldFBhcmFtcyh7XG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgfSkpO1xufVxudmFyIEluc3RhcGFwZXJTaGFyZUJ1dHRvbiA9IGNyZWF0ZVNoYXJlQnV0dG9uKCdpbnN0YXBhcGVyJywgaW5zdGFwYXBlckxpbmssIGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gKHtcbiAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxufSk7IH0sIHtcbiAgICB3aW5kb3dXaWR0aDogNTAwLFxuICAgIHdpbmRvd0hlaWdodDogNTAwLFxuICAgIHdpbmRvd1Bvc2l0aW9uOiAnd2luZG93Q2VudGVyJyxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgSW5zdGFwYXBlclNoYXJlQnV0dG9uO1xuIiwiaW1wb3J0IGNyZWF0ZUljb24gZnJvbSAnLi9ob2NzL2NyZWF0ZUljb24nO1xudmFyIExpbmVJY29uID0gY3JlYXRlSWNvbih7XG4gICAgY29sb3I6ICcjMDBiODAwJyxcbiAgICBuZXR3b3JrTmFtZTogJ2xpbmUnLFxuICAgIHBhdGg6ICdNNTIuNjIgMzAuMTM4YzAgMy42OTMtMS40MzIgNy4wMTktNC40MiAxMC4yOTZoLjAwMWMtNC4zMjYgNC45NzktMTQgMTEuMDQ0LTE2LjIwMSAxMS45NzItMi4yLjkyNy0xLjg3Ni0uNTkxLTEuNzg2LTEuMTEybC4yOTQtMS43NjVjLjA2OS0uNTI3LjE0Mi0xLjM0My0uMDY2LTEuODY1LS4yMzItLjU3NC0xLjE0Ni0uODcyLTEuODE3LTEuMDE2LTkuOTA5LTEuMzEtMTcuMjQ1LTguMjM4LTE3LjI0NS0xNi41MSAwLTkuMjI2IDkuMjUxLTE2LjczMyAyMC42Mi0xNi43MzMgMTEuMzcgMCAyMC42MiA3LjUwNyAyMC42MiAxNi43MzN6TTI3LjgxIDI1LjY4aC0xLjQ0NmEuNDAyLjQwMiAwIDAgMC0uNDAyLjQwMXY4Ljk4NWMwIC4yMjEuMTguNC40MDIuNGgxLjQ0NmEuNDAxLjQwMSAwIDAgMCAuNDAyLS40di04Ljk4NWEuNDAyLjQwMiAwIDAgMC0uNDAyLS40MDF6bTkuOTU2IDBIMzYuMzJhLjQwMi40MDIgMCAwIDAtLjQwMi40MDF2NS4zMzhMMzEuOCAyNS44NThhLjM5LjM5IDAgMCAwLS4wMzEtLjA0bC0uMDAyLS4wMDMtLjAyNC0uMDI1LS4wMDgtLjAwN2EuMzEzLjMxMyAwIDAgMC0uMDMyLS4wMjYuMjU1LjI1NSAwIDAgMS0uMDIxLS4wMTRsLS4wMTItLjAwNy0uMDIxLS4wMTItLjAxMy0uMDA2LS4wMjMtLjAxLS4wMTMtLjAwNS0uMDI0LS4wMDgtLjAxNC0uMDAzLS4wMjMtLjAwNS0uMDE3LS4wMDItLjAyMS0uMDAzLS4wMjEtLjAwMmgtMS40NmEuNDAyLjQwMiAwIDAgMC0uNDAyLjQwMXY4Ljk4NWMwIC4yMjEuMTguNC40MDIuNGgxLjQ0NmEuNDAxLjQwMSAwIDAgMCAuNDAyLS40di01LjMzN2w0LjEyMyA1LjU2OGMuMDI4LjA0LjA2My4wNzIuMTAxLjA5OWwuMDA0LjAwM2EuMjM2LjIzNiAwIDAgMCAuMDI1LjAxNWwuMDEyLjAwNi4wMTkuMDFhLjE1NC4xNTQgMCAwIDEgLjAxOS4wMDhsLjAxMi4wMDQuMDI4LjAxLjAwNS4wMDFhLjQ0Mi40NDIgMCAwIDAgLjEwNC4wMTNoMS40NDZhLjQuNCAwIDAgMCAuNDAxLS40di04Ljk4NWEuNDAyLjQwMiAwIDAgMC0uNDAxLS40MDF6bS0xMy40NDIgNy41MzdoLTMuOTN2LTcuMTM2YS40MDEuNDAxIDAgMCAwLS40MDEtLjQwMWgtMS40NDdhLjQuNCAwIDAgMC0uNDAxLjQwMXY4Ljk4NGEuMzkyLjM5MiAwIDAgMCAuMTIzLjI5Yy4wNzIuMDY4LjE3LjExMS4yNzguMTExaDUuNzc4YS40LjQgMCAwIDAgLjQwMS0uNDAxdi0xLjQ0N2EuNDAxLjQwMSAwIDAgMC0uNDAxLS40MDF6bTIxLjQyOS01LjI4N2MuMjIyIDAgLjQwMS0uMTguNDAxLS40MDJ2LTEuNDQ2YS40MDEuNDAxIDAgMCAwLS40MDEtLjQwMmgtNS43NzhhLjM5OC4zOTggMCAwIDAtLjI3OS4xMTNsLS4wMDUuMDA0LS4wMDYuMDA4YS4zOTcuMzk3IDAgMCAwLS4xMTEuMjc2djguOTg0YzAgLjEwOC4wNDMuMjA2LjExMi4yNzhsLjAwNS4wMDZhLjQwMS40MDEgMCAwIDAgLjI4NC4xMTdoNS43NzhhLjQuNCAwIDAgMCAuNDAxLS40MDF2LTEuNDQ3YS40MDEuNDAxIDAgMCAwLS40MDEtLjQwMWgtMy45M3YtMS41MTloMy45M2MuMjIyIDAgLjQwMS0uMTguNDAxLS40MDJWMjkuODVhLjQwMS40MDEgMCAwIDAtLjQwMS0uNDAyaC0zLjkzVjI3LjkzaDMuOTN6Jyxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgTGluZUljb247XG4iLCJpbXBvcnQgYXNzZXJ0IGZyb20gJy4vdXRpbHMvYXNzZXJ0JztcbmltcG9ydCBjcmVhdGVTaGFyZUJ1dHRvbiBmcm9tICcuL2hvY3MvY3JlYXRlU2hhcmVCdXR0b24nO1xuaW1wb3J0IG9iamVjdFRvR2V0UGFyYW1zIGZyb20gJy4vdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMnO1xuZnVuY3Rpb24gbGluZUxpbmsodXJsLCBfYSkge1xuICAgIHZhciB0aXRsZSA9IF9hLnRpdGxlO1xuICAgIGFzc2VydCh1cmwsICdsaW5lLnVybCcpO1xuICAgIHJldHVybiAoJ2h0dHBzOi8vc29jaWFsLXBsdWdpbnMubGluZS5tZS9saW5laXQvc2hhcmUnICtcbiAgICAgICAgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgfSkpO1xufVxudmFyIExpbmVTaGFyZUJ1dHRvbiA9IGNyZWF0ZVNoYXJlQnV0dG9uKCdsaW5lJywgbGluZUxpbmssIGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gKHtcbiAgICB0aXRsZTogcHJvcHMudGl0bGUsXG59KTsgfSwge1xuICAgIHdpbmRvd1dpZHRoOiA1MDAsXG4gICAgd2luZG93SGVpZ2h0OiA1MDAsXG59KTtcbmV4cG9ydCBkZWZhdWx0IExpbmVTaGFyZUJ1dHRvbjtcbiIsImltcG9ydCBjcmVhdGVJY29uIGZyb20gJy4vaG9jcy9jcmVhdGVJY29uJztcbnZhciBMaW5rZWRpbkljb24gPSBjcmVhdGVJY29uKHtcbiAgICBjb2xvcjogJyMwMDdmYjEnLFxuICAgIG5ldHdvcmtOYW1lOiAnbGlua2VkaW4nLFxuICAgIHBhdGg6ICdNMjAuNCw0NGg1LjRWMjYuNmgtNS40VjQ0eiBNMjMuMSwxOGMtMS43LDAtMy4xLDEuNC0zLjEsMy4xYzAsMS43LDEuNCwzLjEsMy4xLDMuMSBjMS43LDAsMy4xLTEuNCwzLjEtMy4xQzI2LjIsMTkuNCwyNC44LDE4LDIzLjEsMTh6IE0zOS41LDI2LjJjLTIuNiwwLTQuNCwxLjQtNS4xLDIuOGgtMC4xdi0yLjRoLTUuMlY0NGg1LjR2LTguNiBjMC0yLjMsMC40LTQuNSwzLjItNC41YzIuOCwwLDIuOCwyLjYsMi44LDQuNlY0NEg0NnYtOS41QzQ2LDI5LjgsNDUsMjYuMiwzOS41LDI2LjJ6Jyxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgTGlua2VkaW5JY29uO1xuIiwiaW1wb3J0IGFzc2VydCBmcm9tICcuL3V0aWxzL2Fzc2VydCc7XG5pbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5pbXBvcnQgY3JlYXRlU2hhcmVCdXR0b24gZnJvbSAnLi9ob2NzL2NyZWF0ZVNoYXJlQnV0dG9uJztcbmZ1bmN0aW9uIGxpbmtlZGluTGluayh1cmwsIF9hKSB7XG4gICAgdmFyIHRpdGxlID0gX2EudGl0bGUsIHN1bW1hcnkgPSBfYS5zdW1tYXJ5LCBzb3VyY2UgPSBfYS5zb3VyY2U7XG4gICAgYXNzZXJ0KHVybCwgJ2xpbmtlZGluLnVybCcpO1xuICAgIHJldHVybiAoJ2h0dHBzOi8vbGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZScgK1xuICAgICAgICBvYmplY3RUb0dldFBhcmFtcyh7IHVybDogdXJsLCBtaW5pOiAndHJ1ZScsIHRpdGxlOiB0aXRsZSwgc3VtbWFyeTogc3VtbWFyeSwgc291cmNlOiBzb3VyY2UgfSkpO1xufVxudmFyIExpbmtlZGluU2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbignbGlua2VkaW4nLCBsaW5rZWRpbkxpbmssIGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciB0aXRsZSA9IF9hLnRpdGxlLCBzdW1tYXJ5ID0gX2Euc3VtbWFyeSwgc291cmNlID0gX2Euc291cmNlO1xuICAgIHJldHVybiAoeyB0aXRsZTogdGl0bGUsIHN1bW1hcnk6IHN1bW1hcnksIHNvdXJjZTogc291cmNlIH0pO1xufSwge1xuICAgIHdpbmRvd1dpZHRoOiA3NTAsXG4gICAgd2luZG93SGVpZ2h0OiA2MDAsXG59KTtcbmV4cG9ydCBkZWZhdWx0IExpbmtlZGluU2hhcmVCdXR0b247XG4iLCJpbXBvcnQgY3JlYXRlSWNvbiBmcm9tICcuL2hvY3MvY3JlYXRlSWNvbic7XG52YXIgTGl2ZWpvdXJuYWxJY29uID0gY3JlYXRlSWNvbih7XG4gICAgY29sb3I6ICcjMjFBNUQ4JyxcbiAgICBuZXR3b3JrTmFtZTogJ2xpdmVqb3VybmFsJyxcbiAgICBwYXRoOiAnTTE4LjM0MDc4MjEsMjguMTc2NDcwNiBMMjEuOTQ0MTM0MSwzMS43ODk5MTYgTDMzLjAwNTU4NjUsNDIuODgyMzUzIEMzMy4wMDU1ODY1LDQyLjg4MjM1MyAzMy4wODkzODU1LDQyLjk2NjM4NjYgMzMuMDg5Mzg1NSw0Mi45NjYzODY2IEw0Ni42NjQ4MDQ2LDQ3IEM0Ni42NjQ4MDQ2LDQ3IDQ2LjY2NDgwNDYsNDcgNDYuNzQ4NjAzNCw0NyBDNDYuODMyNDAyMiw0NyA0Ni44MzI0MDIyLDQ3IDQ2LjkxNjIwMTIsNDYuOTE1OTY2NCBDNDcsNDYuODMxOTMyNyA0Nyw0Ni44MzE5MzI3IDQ3LDQ2Ljc0Nzg5OTEgTDQyLjk3NzY1MzYsMzMuMTM0NDUzNyBDNDIuOTc3NjUzNiwzMy4xMzQ0NTM3IDQyLjk3NzY1MzYsMzMuMTM0NDUzNyA0Mi44OTM4NTQ4LDMzLjA1MDQyMDIgTDMxLjE2MjAxMTEsMjEuMzY5NzQ3OSBMMzEuMTYyMDExMSwyMS4zNjk3NDc5IEwyOC4xNDUyNTE0LDE4LjI2MDUwNDIgQzI3LjMwNzI2MjYsMTcuNDIwMTY4MSAyNi41NTMwNzI2LDE3IDI1LjcxNTA4MzgsMTcgQzI0LjI5MDUwMjgsMTcgMjMuMDMzNTE5NSwxOC4zNDQ1Mzc4IDIxLjUyNTEzOTcsMTkuODU3MTQyOSBDMjEuMjczNzQzLDIwLjEwOTI0MzcgMjAuOTM4NTQ3NSwyMC40NDUzNzgxIDIwLjY4NzE1MDgsMjAuNjk3NDc5IEMyMC4zNTE5NTUzLDIxLjAzMzYxMzQgMjAuMTAwNTU4NiwyMS4yODU3MTQzIDE5Ljg0OTE2MiwyMS41Mzc4MTUxIEMxOC4zNDA3ODIxLDIyLjk2NjM4NjYgMTcuMDgzNzk4OSwyNC4yMjY4OTA4IDE3LDI1LjczOTQ5NTggQzE3LjA4Mzc5ODksMjYuNDk1Nzk4MyAxNy41MDI3OTMzLDI3LjMzNjEzNDUgMTguMzQwNzgyMSwyOC4xNzY0NzA2IFogTTM5LjkwMTIzMTksMzkuNjEzNDQ1NCBDMzkuNzMzNjM0MSwzOS40NDUzNzgxIDM5LjQ4MjIzNzQsMzcuNjgwNjcyNCA0MC4yMzY0Mjc1LDM2Ljg0MDMzNjIgQzQwLjk5MDYxNzQsMzYuMDg0MDMzNyA0MS42NjEwMDg0LDM2IDQyLjE2MzgwMTcsMzYgQzQyLjMzMTM5OTUsMzYgNDIuNDk4OTk3MywzNiA0Mi41ODI3OTYxLDM2IEw0NC44NDUzNjU5LDQzLjU2MzAyNTMgTDQzLjU4ODM4MjgsNDQuODIzNTI5NSBMMzYuMDQ2NDgzMyw0Mi41NTQ2MjE4IEMzNS45NjI2ODQzLDQyLjIxODQ4NzQgMzUuODc4ODg1NSw0MS4yMTAwODQxIDM2Ljg4NDQ3MjIsNDAuMjAxNjgwNyBDMzcuMjE5NjY3NiwzOS44NjU1NDYzIDM3Ljg5MDA1ODcsMzkuNjEzNDQ1NCAzOC41NjA0NDk4LDM5LjYxMzQ0NTQgQzM5LjE0NzA0MiwzOS42MTM0NDU0IDM5LjU2NjAzNjQsMzkuNzgxNTEyNiAzOS41NjYwMzY0LDM5Ljc4MTUxMjYgQzM5LjY0OTgzNTMsMzkuODY1NTQ2MyAzOS44MTc0MzMxLDM5Ljg2NTU0NjMgMzkuODE3NDMzMSwzOS43ODE1MTI2IEMzOS45ODUwMzA3LDM5Ljc4MTUxMjYgMzkuOTg1MDMwNywzOS42OTc0NzkgMzkuOTAxMjMxOSwzOS42MTM0NDU0IFonLFxufSk7XG5leHBvcnQgZGVmYXVsdCBMaXZlam91cm5hbEljb247XG4iLCJpbXBvcnQgYXNzZXJ0IGZyb20gJy4vdXRpbHMvYXNzZXJ0JztcbmltcG9ydCBvYmplY3RUb0dldFBhcmFtcyBmcm9tICcuL3V0aWxzL29iamVjdFRvR2V0UGFyYW1zJztcbmltcG9ydCBjcmVhdGVTaGFyZUJ1dHRvbiBmcm9tICcuL2hvY3MvY3JlYXRlU2hhcmVCdXR0b24nO1xuZnVuY3Rpb24gbGl2ZWpvdXJuYWxMaW5rKHVybCwgX2EpIHtcbiAgICB2YXIgdGl0bGUgPSBfYS50aXRsZSwgZGVzY3JpcHRpb24gPSBfYS5kZXNjcmlwdGlvbjtcbiAgICBhc3NlcnQodXJsLCAnbGl2ZWpvdXJuYWwudXJsJyk7XG4gICAgcmV0dXJuICgnaHR0cHM6Ly93d3cubGl2ZWpvdXJuYWwuY29tL3VwZGF0ZS5ibWwnICtcbiAgICAgICAgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgICAgICAgICAgc3ViamVjdDogdGl0bGUsXG4gICAgICAgICAgICBldmVudDogZGVzY3JpcHRpb24sXG4gICAgICAgIH0pKTtcbn1cbnZhciBMaXZlam91cm5hbFNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oJ2xpdmVqb3VybmFsJywgbGl2ZWpvdXJuYWxMaW5rLCBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuICh7XG4gICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbn0pOyB9LCB7XG4gICAgd2luZG93V2lkdGg6IDY2MCxcbiAgICB3aW5kb3dIZWlnaHQ6IDQ2MCxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgTGl2ZWpvdXJuYWxTaGFyZUJ1dHRvbjtcbiIsImltcG9ydCBjcmVhdGVJY29uIGZyb20gJy4vaG9jcy9jcmVhdGVJY29uJztcbnZhciBNYWlscnVJY29uID0gY3JlYXRlSWNvbih7XG4gICAgY29sb3I6ICcjMTY4REUyJyxcbiAgICBuZXR3b3JrTmFtZTogJ21haWxydScsXG4gICAgcGF0aDogJ00zOS43MTA3NzQ1LDE3IEM0MS42NjE5NzU1LDE3IDQzLjMyMDQ5NjUsMTguNzMyODUyIDQzLjMyMDQ5NjUsMjEuMDA3MjIwMiBDNDMuMzIwNDk2NSwyMy4yODE1ODg1IDQxLjc1OTUzNTcsMjUuMDE0NDQwNCAzOS43MTA3NzQ1LDI1LjAxNDQ0MDQgQzM3Ljc1OTU3MzIsMjUuMDE0NDQwNCAzNi4xMDEwNTIyLDIzLjI4MTU4ODUgMzYuMTAxMDUyMiwyMS4wMDcyMjAyIEMzNi4xMDEwNTIyLDE4LjczMjg1MiAzNy43NTk1NzMyLDE3IDM5LjcxMDc3NDUsMTcgWiBNMjQuMzkzODQ1MSwxNyBDMjYuMzQ1MDQ2MywxNyAyOC4wMDM1NjcyLDE4LjczMjg1MiAyOC4wMDM1NjcyLDIxLjAwNzIyMDIgQzI4LjAwMzU2NzIsMjMuMjgxNTg4NSAyNi40NDI2MDYzLDI1LjAxNDQ0MDQgMjQuMzkzODQ1MSwyNS4wMTQ0NDA0IEMyMi40NDI2NDM5LDI1LjAxNDQ0MDQgMjAuNzg0MTIyOSwyMy4yODE1ODg1IDIwLjc4NDEyMjksMjEuMDA3MjIwMiBDMjAuNzg0MTIyOSwxOC43MzI4NTIgMjIuNDQyNjQzOSwxNyAyNC4zOTM4NDUxLDE3IFogTTUxLjkwNTc4MTcsNDMuNDI1OTkyOCBDNTEuNzEwNjYxNyw0NC4wNzU4MTIzIDUxLjQxNzk4MTUsNDQuNjE3MzI4NSA1MC45MzAxODEyLDQ0Ljk0MjIzODMgQzUwLjYzNzUwMSw0NS4xNTg4NDQ4IDUwLjI0NzI2MDcsNDUuMjY3MTQ4IDQ5Ljg1NzAyMDUsNDUuMjY3MTQ4IEM0OS4wNzY1NCw0NS4yNjcxNDggNDguMzkzNjE5Nyw0NC44MzM5MzUgNDguMDAzMzc5NSw0NC4wNzU4MTIzIEw0Ni4yNDcyOTg1LDQwLjcxODQxMTUgTDQ1Ljc1OTQ5OCw0MS4yNTk5Mjc4IEM0Mi41NDAwMTYyLDQ0Ljk0MjIzODMgMzcuNDY2ODkzLDQ3IDMyLjAwMzUyOTcsNDcgQzI2LjU0MDE2NjQsNDcgMjEuNTY0NjAzNCw0NC45NDIyMzgzIDE4LjI0NzU2MTQsNDEuMjU5OTI3OCBMMTcuNzU5NzYxMSw0MC43MTg0MTE1IEwxNi4wMDM2OCw0NC4wNzU4MTIzIEMxNS42MTM0Mzk4LDQ0LjgzMzkzNSAxNC45MzA1MTk0LDQ1LjI2NzE0OCAxNC4xNTAwMzg5LDQ1LjI2NzE0OCBDMTMuNzU5Nzk4Niw0NS4yNjcxNDggMTMuMzY5NTU4NCw0NS4xNTg4NDQ4IDEzLjA3Njg3ODIsNDQuOTQyMjM4MyBDMTIuMDAzNzE3Niw0NC4yOTI0MTg3IDExLjcxMTAzNzQsNDIuNzc2MTczMyAxMi4yOTYzOTc4LDQxLjU4NDgzNzUgTDE2Ljc4NDE2MDUsMzMuMDI4ODgwNyBDMTcuMTc0NDAwNywzMi4yNzA3NTggMTcuODU3MzIxMSwzMS44Mzc1NDUzIDE4LjYzNzgwMTYsMzEuODM3NTQ1MyBDMTkuMDI4MDQxOCwzMS44Mzc1NDUzIDE5LjQxODI4MjEsMzEuOTQ1ODQ4NSAxOS43MTA5NjIzLDMyLjE2MjQ1NDggQzIwLjc4NDEyMjksMzIuODEyMjc0MyAyMS4wNzY4MDMxLDM0LjMyODUxOTcgMjAuNDkxNDQyNywzNS41MTk4NTU1IEwyMC4xMDEyMDI1LDM2LjI3Nzk3ODMgTDIwLjI5NjMyMjYsMzYuNjAyODg4IEMyMi40NDI2NDM5LDM5Ljk2MDI4ODggMjcuMDI3OTY2Nyw0Mi4yMzQ2NTcgMzEuOTA1OTY5Nyw0Mi4yMzQ2NTcgQzM2Ljc4Mzk3MjcsNDIuMjM0NjU3IDQxLjM2OTI5NTUsNDAuMDY4NTkyIDQzLjUxNTYxNjcsMzYuNjAyODg4IEw0My43MTA3MzY3LDM2LjI3Nzk3ODMgTDQzLjMyMDQ5NjUsMzUuNjI4MTU4NyBDNDMuMDI3ODE2NSwzNS4wODY2NDI1IDQyLjkzMDI1NjIsMzQuNDM2ODIzIDQzLjEyNTM3NjUsMzMuNzg3MDAzNSBDNDMuMzIwNDk2NSwzMy4xMzcxODQgNDMuNjEzMTc2NywzMi41OTU2Njc4IDQ0LjEwMDk3NywzMi4yNzA3NTggQzQ0LjM5MzY1NzIsMzIuMDU0MTUxNSA0NC43ODM4OTc1LDMxLjk0NTg0ODUgNDUuMTc0MTM3NywzMS45NDU4NDg1IEM0NS45NTQ2MTgyLDMxLjk0NTg0ODUgNDYuNjM3NTM4NSwzMi4zNzkwNjEzIDQ3LjAyNzc3ODcsMzMuMTM3MTg0IEw1MS41MTU1NDE1LDQxLjY5MzE0MDggQzUyLjAwMzM0Miw0Mi4yMzQ2NTcgNTIuMTAwOTAyLDQyLjg4NDQ3NjUgNTEuOTA1NzgxNyw0My40MjU5OTI4IFonLFxufSk7XG5leHBvcnQgZGVmYXVsdCBNYWlscnVJY29uO1xuIiwiaW1wb3J0IGFzc2VydCBmcm9tICcuL3V0aWxzL2Fzc2VydCc7XG5pbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5pbXBvcnQgY3JlYXRlU2hhcmVCdXR0b24gZnJvbSAnLi9ob2NzL2NyZWF0ZVNoYXJlQnV0dG9uJztcbmZ1bmN0aW9uIG1haWxydUxpbmsodXJsLCBfYSkge1xuICAgIHZhciB0aXRsZSA9IF9hLnRpdGxlLCBkZXNjcmlwdGlvbiA9IF9hLmRlc2NyaXB0aW9uLCBpbWFnZVVybCA9IF9hLmltYWdlVXJsO1xuICAgIGFzc2VydCh1cmwsICdtYWlscnUudXJsJyk7XG4gICAgcmV0dXJuICgnaHR0cHM6Ly9jb25uZWN0Lm1haWwucnUvc2hhcmUnICtcbiAgICAgICAgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZV91cmw6IGltYWdlVXJsLFxuICAgICAgICB9KSk7XG59XG52YXIgTWFpbHJ1U2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbignbWFpbHJ1JywgbWFpbHJ1TGluaywgZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoe1xuICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgaW1hZ2VVcmw6IHByb3BzLmltYWdlVXJsLFxufSk7IH0sIHtcbiAgICB3aW5kb3dXaWR0aDogNjYwLFxuICAgIHdpbmRvd0hlaWdodDogNDYwLFxufSk7XG5leHBvcnQgZGVmYXVsdCBNYWlscnVTaGFyZUJ1dHRvbjtcbiIsImltcG9ydCBjcmVhdGVJY29uIGZyb20gJy4vaG9jcy9jcmVhdGVJY29uJztcbnZhciBPS0ljb24gPSBjcmVhdGVJY29uKHtcbiAgICBjb2xvcjogJyNmMjcyMGMnLFxuICAgIG5ldHdvcmtOYW1lOiAnb2snLFxuICAgIHBhdGg6ICdNMzksMzBjLTEsMC0zLDItNywycy02LTItNy0yYy0xLjEsMC0yLDAuOS0yLDJjMCwxLDAuNiwxLjUsMSwxLjdjMS4yLDAuNyw1LDIuMyw1LDIuM2wtNC4zLDUuNCAgIGMwLDAtMC44LDAuOS0wLjgsMS42YzAsMS4xLDAuOSwyLDIsMmMxLDAsMS41LTAuNywxLjUtMC43UzMyLDM5LDMyLDM5YzAsMCw0LjUsNS4zLDQuNSw1LjNTMzcsNDUsMzgsNDVjMS4xLDAsMi0wLjksMi0yICAgYzAtMC42LTAuOC0xLjYtMC44LTEuNkwzNSwzNmMwLDAsMy44LTEuNiw1LTIuM2MwLjQtMC4zLDEtMC43LDEtMS43QzQxLDMwLjksNDAuMSwzMCwzOSwzMHogTTMyLDE1Yy0zLjksMC03LDMuMS03LDdzMy4xLDcsNyw3YzMuOSwwLDctMy4xLDctN1MzNS45LDE1LDMyLDE1eiBNMzIsMjUuNSAgIGMtMS45LDAtMy41LTEuNi0zLjUtMy41YzAtMS45LDEuNi0zLjUsMy41LTMuNWMxLjksMCwzLjUsMS42LDMuNSwzLjVDMzUuNSwyMy45LDMzLjksMjIuNSwzNSwyMi41eiAnLFxufSk7XG5leHBvcnQgZGVmYXVsdCBPS0ljb247XG4iLCJpbXBvcnQgYXNzZXJ0IGZyb20gJy4vdXRpbHMvYXNzZXJ0JztcbmltcG9ydCBvYmplY3RUb0dldFBhcmFtcyBmcm9tICcuL3V0aWxzL29iamVjdFRvR2V0UGFyYW1zJztcbmltcG9ydCBjcmVhdGVTaGFyZUJ1dHRvbiBmcm9tICcuL2hvY3MvY3JlYXRlU2hhcmVCdXR0b24nO1xuZnVuY3Rpb24gb2tMaW5rKHVybCwgX2EpIHtcbiAgICB2YXIgdGl0bGUgPSBfYS50aXRsZSwgZGVzY3JpcHRpb24gPSBfYS5kZXNjcmlwdGlvbiwgaW1hZ2UgPSBfYS5pbWFnZTtcbiAgICBhc3NlcnQodXJsLCAnb2sudXJsJyk7XG4gICAgcmV0dXJuICgnaHR0cHM6Ly9jb25uZWN0Lm9rLnJ1L29mZmVyJyArXG4gICAgICAgIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2VVcmw6IGltYWdlLFxuICAgICAgICB9KSk7XG59XG52YXIgT0tTaGFyZUJ1dHRvbiA9IGNyZWF0ZVNoYXJlQnV0dG9uKCdvaycsIG9rTGluaywgZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoe1xuICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgaW1hZ2U6IHByb3BzLmltYWdlLFxufSk7IH0sIHtcbiAgICB3aW5kb3dXaWR0aDogNTg4LFxuICAgIHdpbmRvd0hlaWdodDogNDgwLFxuICAgIHdpbmRvd1Bvc2l0aW9uOiAnc2NyZWVuQ2VudGVyJyxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgT0tTaGFyZUJ1dHRvbjtcbiIsImltcG9ydCBqc29ucCBmcm9tICdqc29ucCc7XG5pbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5pbXBvcnQgY3JlYXRlU2hhcmVDb3VudCBmcm9tICcuL2hvY3MvY3JlYXRlU2hhcmVDb3VudCc7XG5mdW5jdGlvbiBnZXRPS1NoYXJlQ291bnQoc2hhcmVVcmwsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCF3aW5kb3cuT0spIHtcbiAgICAgICAgd2luZG93Lk9LID0ge1xuICAgICAgICAgICAgU2hhcmU6IHtcbiAgICAgICAgICAgICAgICBjb3VudDogZnVuY3Rpb24gY291bnQoaW5kZXgsIF9jb3VudCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuT0suY2FsbGJhY2tzW2luZGV4XShfY291bnQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FsbGJhY2tzOiBbXSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIHVybCA9ICdodHRwczovL2Nvbm5lY3Qub2sucnUvZGsnO1xuICAgIHZhciBpbmRleCA9IHdpbmRvdy5PSy5jYWxsYmFja3MubGVuZ3RoO1xuICAgIHdpbmRvdy5PREtMID0ge1xuICAgICAgICB1cGRhdGVDb3VudDogZnVuY3Rpb24gKGluZGV4LCBjb3VudCkge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrSW5kZXggPSBpbmRleCA9PT0gJycgPyAwIDogcGFyc2VJbnQoaW5kZXgucmVwbGFjZSgncmVhY3Qtc2hhcmUtJywgJycpLCAxMCk7XG4gICAgICAgICAgICB3aW5kb3cuT0suY2FsbGJhY2tzW2NhbGxiYWNrSW5kZXhdKGNvdW50ID09PSAnJyA/IHVuZGVmaW5lZCA6IHBhcnNlSW50KGNvdW50LCAxMCkpO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgd2luZG93Lk9LLmNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICByZXR1cm4ganNvbnAodXJsICtcbiAgICAgICAgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgICAgICAgICAgJ3N0LmNtZCc6ICdleHRMaWtlJyxcbiAgICAgICAgICAgIHVpZDogXCJyZWFjdC1zaGFyZS1cIiArIGluZGV4LFxuICAgICAgICAgICAgcmVmOiBzaGFyZVVybCxcbiAgICAgICAgfSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hhcmVDb3VudChnZXRPS1NoYXJlQ291bnQpO1xuIiwiaW1wb3J0IGNyZWF0ZUljb24gZnJvbSAnLi9ob2NzL2NyZWF0ZUljb24nO1xudmFyIFBpbnRlcmVzdEljb24gPSBjcmVhdGVJY29uKHtcbiAgICBjb2xvcjogJyNjYjIxMjgnLFxuICAgIG5ldHdvcmtOYW1lOiAncGludGVyZXN0JyxcbiAgICBwYXRoOiAnTTMyLDE2Yy04LjgsMC0xNiw3LjItMTYsMTZjMCw2LjYsMy45LDEyLjIsOS42LDE0LjdjMC0xLjEsMC0yLjUsMC4zLTMuNyBjMC4zLTEuMywyLjEtOC43LDIuMS04LjdzLTAuNS0xLTAuNS0yLjVjMC0yLjQsMS40LTQuMSwzLjEtNC4xYzEuNSwwLDIuMiwxLjEsMi4yLDIuNGMwLDEuNS0wLjksMy43LTEuNCw1LjcgYy0wLjQsMS43LDAuOSwzLjEsMi41LDMuMWMzLDAsNS4xLTMuOSw1LjEtOC41YzAtMy41LTIuNC02LjEtNi43LTYuMWMtNC45LDAtNy45LDMuNi03LjksNy43YzAsMS40LDAuNCwyLjQsMS4xLDMuMSBjMC4zLDAuMywwLjMsMC41LDAuMiwwLjljLTAuMSwwLjMtMC4zLDEtMC4zLDEuM2MtMC4xLDAuNC0wLjQsMC42LTAuOCwwLjRjLTIuMi0wLjktMy4zLTMuNC0zLjMtNi4xYzAtNC41LDMuOC0xMCwxMS40LTEwIGM2LjEsMCwxMC4xLDQuNCwxMC4xLDkuMmMwLDYuMy0zLjUsMTEtOC42LDExYy0xLjcsMC0zLjQtMC45LTMuOS0yYzAsMC0wLjksMy43LTEuMSw0LjRjLTAuMywxLjItMSwyLjUtMS42LDMuNCBjMS40LDAuNCwzLDAuNyw0LjUsMC43YzguOCwwLDE2LTcuMiwxNi0xNkM0OCwyMy4yLDQwLjgsMTYsMzIsMTZ6Jyxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgUGludGVyZXN0SWNvbjtcbiIsImltcG9ydCBhc3NlcnQgZnJvbSAnLi91dGlscy9hc3NlcnQnO1xuaW1wb3J0IG9iamVjdFRvR2V0UGFyYW1zIGZyb20gJy4vdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMnO1xuaW1wb3J0IGNyZWF0ZVNoYXJlQnV0dG9uIGZyb20gJy4vaG9jcy9jcmVhdGVTaGFyZUJ1dHRvbic7XG5mdW5jdGlvbiBwaW50ZXJlc3RMaW5rKHVybCwgX2EpIHtcbiAgICB2YXIgbWVkaWEgPSBfYS5tZWRpYSwgZGVzY3JpcHRpb24gPSBfYS5kZXNjcmlwdGlvbjtcbiAgICBhc3NlcnQodXJsLCAncGludGVyZXN0LnVybCcpO1xuICAgIGFzc2VydChtZWRpYSwgJ3BpbnRlcmVzdC5tZWRpYScpO1xuICAgIHJldHVybiAoJ2h0dHBzOi8vcGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2J1dHRvbi8nICtcbiAgICAgICAgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBtZWRpYTogbWVkaWEsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIH0pKTtcbn1cbnZhciBQaW50ZXJlc3RTaGFyZUJ1dHRvbiA9IGNyZWF0ZVNoYXJlQnV0dG9uKCdwaW50ZXJlc3QnLCBwaW50ZXJlc3RMaW5rLCBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuICh7XG4gICAgbWVkaWE6IHByb3BzLm1lZGlhLFxuICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbn0pOyB9LCB7XG4gICAgd2luZG93V2lkdGg6IDEwMDAsXG4gICAgd2luZG93SGVpZ2h0OiA3MzAsXG59KTtcbmV4cG9ydCBkZWZhdWx0IFBpbnRlcmVzdFNoYXJlQnV0dG9uO1xuIiwiaW1wb3J0IGpzb25wIGZyb20gJ2pzb25wJztcbmltcG9ydCBvYmplY3RUb0dldFBhcmFtcyBmcm9tICcuL3V0aWxzL29iamVjdFRvR2V0UGFyYW1zJztcbmltcG9ydCBjcmVhdGVTaGFyZUNvdW50IGZyb20gJy4vaG9jcy9jcmVhdGVTaGFyZUNvdW50JztcbmZ1bmN0aW9uIGdldFBpbnRlcmVzdFNoYXJlQ291bnQoc2hhcmVVcmwsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHVybCA9ICdodHRwczovL2FwaS5waW50ZXJlc3QuY29tL3YxL3VybHMvY291bnQuanNvbic7XG4gICAganNvbnAodXJsICtcbiAgICAgICAgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgICAgICAgICAgdXJsOiBzaGFyZVVybCxcbiAgICAgICAgfSksIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2soZGF0YSA/IGRhdGEuY291bnQgOiB1bmRlZmluZWQpO1xuICAgIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hhcmVDb3VudChnZXRQaW50ZXJlc3RTaGFyZUNvdW50KTtcbiIsImltcG9ydCBjcmVhdGVJY29uIGZyb20gJy4vaG9jcy9jcmVhdGVJY29uJztcbnZhciBQb2NrZXRJY29uID0gY3JlYXRlSWNvbih7XG4gICAgY29sb3I6ICcjRUYzRjU2JyxcbiAgICBuZXR3b3JrTmFtZTogJ3BvY2tldCcsXG4gICAgcGF0aDogJ000MS4wODQgMjkuMDY1bC03LjUyOCA3Ljg4MmEyLjEwNCAyLjEwNCAwIDAgMS0xLjUyMS42NjYgMi4xMDYgMi4xMDYgMCAwIDEtMS41MjItLjY2NmwtNy41MjgtNy44ODJjLS44NzYtLjkxNC0uOTAyLTIuNDMtLjA2NS0zLjM4NC44NC0uOTU1IDIuMjI4LS45ODcgMy4xLS4wNzJsNi4wMTUgNi4yODYgNi4wMjItNi4yODZjLjg4LS45MTggMi4yNjMtLjg4MyAzLjEwMi4wNzEuODQxLjkzOC44MiAyLjQ2NS0uMDYgMy4zODNsLS4wMTUuMDAyem02Ljc3Ny0xMC45NzZDNDcuNDYzIDE2Ljg0IDQ2LjM2MSAxNiA0NS4xNCAxNkgxOC45MDVjLTEuMiAwLTIuMjg5LjgyLTIuNzE2IDIuMDQ0LS4xMjUuMzYzLS4xODkuNzQzLS4xODkgMS4xMjV2MTAuNTM5bC4xMTIgMi4wOTZjLjQ2NCA0Ljc2NiAyLjczIDguOTMzIDYuMjQzIDExLjgzOC4wNi4wNTMuMTI1LjEwMi4xOS4xNTNsLjA0LjAzM2MxLjg4MiAxLjQ5OSAzLjk4NiAyLjUxNCA2LjI1OSAzLjAxNGExNC42NjIgMTQuNjYyIDAgMCAwIDYuMTMuMDUyYy4xMTgtLjA0Mi4yMzUtLjA2NS4zNTMtLjA4Ny4wMyAwIC4wNjUtLjAyMi4wOTgtLjA0MmExNS4zOTUgMTUuMzk1IDAgMCAwIDYuMDExLTIuOTQ1bC4wMzktLjA0NS4xOC0uMTUzYzMuNTAyLTIuOTAyIDUuNzY1LTcuMDcyIDYuMjQ4LTExLjg1Mkw0OCAyOS42NzR2LTEwLjUyYzAtLjM2Ni0uMDQxLS43MjgtLjE2MS0xLjA4bC4wMjIuMDE1eicsXG59KTtcbmV4cG9ydCBkZWZhdWx0IFBvY2tldEljb247XG4iLCJpbXBvcnQgYXNzZXJ0IGZyb20gJy4vdXRpbHMvYXNzZXJ0JztcbmltcG9ydCBjcmVhdGVTaGFyZUJ1dHRvbiBmcm9tICcuL2hvY3MvY3JlYXRlU2hhcmVCdXR0b24nO1xuaW1wb3J0IG9iamVjdFRvR2V0UGFyYW1zIGZyb20gJy4vdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMnO1xuZnVuY3Rpb24gcG9ja2V0TGluayh1cmwsIF9hKSB7XG4gICAgdmFyIHRpdGxlID0gX2EudGl0bGU7XG4gICAgYXNzZXJ0KHVybCwgJ3BvY2tldC51cmwnKTtcbiAgICByZXR1cm4gKCdodHRwczovL2dldHBvY2tldC5jb20vc2F2ZScgK1xuICAgICAgICBvYmplY3RUb0dldFBhcmFtcyh7XG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgfSkpO1xufVxudmFyIFBvY2tldFNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oJ3BvY2tldCcsIHBvY2tldExpbmssIGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gKHtcbiAgICB0aXRsZTogcHJvcHMudGl0bGUsXG59KTsgfSwge1xuICAgIHdpbmRvd1dpZHRoOiA1MDAsXG4gICAgd2luZG93SGVpZ2h0OiA1MDAsXG59KTtcbmV4cG9ydCBkZWZhdWx0IFBvY2tldFNoYXJlQnV0dG9uO1xuIiwiaW1wb3J0IGNyZWF0ZUljb24gZnJvbSAnLi9ob2NzL2NyZWF0ZUljb24nO1xudmFyIFJlZGRpdEljb24gPSBjcmVhdGVJY29uKHtcbiAgICBjb2xvcjogJyM1Zjk5Y2YnLFxuICAgIG5ldHdvcmtOYW1lOiAncmVkZGl0JyxcbiAgICBwYXRoOiAnbSA1Mi44MTY1LDMxLjk0MjM2MiBjIDAsLTIuNDgwMyAtMi4wMjY0LC00LjQ5NjUgLTQuNTE2OSwtNC40OTY1IC0xLjIxNTUsMCAtMi4zMTcxLDAuNDg2MiAtMy4xMjgsMS4yNjgyIC0zLjA3NywtMi4wMjQ3IC03LjI0MDMsLTMuMzEzMyAtMTEuODUwNywtMy40NzgyIGwgMi41MjExLC03LjkzNzMgNi44MjcyLDEuNTk5NyAtMC4wMTAyLDAuMDk4NiBjIDAsMi4wMjgxIDEuNjU3NSwzLjY3NzEgMy42OTU4LDMuNjc3MSAyLjAzNjYsMCAzLjY5MjQsLTEuNjQ5IDMuNjkyNCwtMy42NzcxIDAsLTIuMDI4MSAtMS42NTc1LC0zLjY3ODggLTMuNjkyNCwtMy42Nzg4IC0xLjU2NCwwIC0yLjg5NjgsMC45NzU4IC0zLjQzNTcsMi4zNDQzIGwgLTcuMzU5MywtMS43MjU1IGMgLTAuMzIxMywtMC4wNzgyIC0wLjY0NzcsMC4xMDcxIC0wLjc0OCwwLjQyMzMgTCAzMiwyNS4yMTIwNjIgYyAtNC44MjQ2LDAuMDU3OCAtOS4xOTUzLDEuMzU2NiAtMTIuNDEsMy40NDI1IC0wLjgwNTgsLTAuNzQ0NiAtMS44NzUxLC0xLjIxMDQgLTMuMDU4MywtMS4yMTA0IC0yLjQ5MDUsMCAtNC41MTUyLDIuMDE3OSAtNC41MTUyLDQuNDk4MiAwLDEuNjQ5IDAuOTA2MSwzLjA3ODcgMi4yMzg5LDMuODYwNyAtMC4wODg0LDAuNDc5NCAtMC4xNDYyLDAuOTYzOSAtMC4xNDYyLDEuNDU2OSAwLDYuNjQ4NyA4LjE3MzYsMTIuMDU4MSAxOC4yMjIzLDEyLjA1ODEgMTAuMDQ4NywwIDE4LjIyNCwtNS40MDk0IDE4LjIyNCwtMTIuMDU4MSAwLC0wLjQ2NTggLTAuMDQ5MywtMC45MjQ4IC0wLjEyNzUsLTEuMzc3IDEuNDE0NCwtMC43NTk5IDIuMzg4NSwtMi4yMzA0IDIuMzg4NSwtMy45NDA2IHogbSAtMjkuMjgwOCwzLjA4NzIgYyAwLC0xLjQ3NTYgMS4yMDcsLTIuNjc3NSAyLjY4OTQsLTIuNjc3NSAxLjQ4MjQsMCAyLjY4NzcsMS4yMDE5IDIuNjg3NywyLjY3NzUgMCwxLjQ3NTYgLTEuMjA1MywyLjY3NTggLTIuNjg3NywyLjY3NTggLTEuNDgyNCwwIC0yLjY4OTQsLTEuMjAwMiAtMi42ODk0LC0yLjY3NTggeiBtIDE1LjQwMzcsNy45MzczIGMgLTEuMzU0OSwxLjM0ODEgLTMuNDgxNiwyLjAwNDMgLTYuNTAwOCwyLjAwNDMgbCAtMC4wMjIxLC0wLjAwNTEgLTAuMDIyMSwwLjAwNTEgYyAtMy4wMjA5LDAgLTUuMTQ3NiwtMC42NTYyIC02LjUwMDgsLTIuMDA0MyAtMC4yNDY1LC0wLjI0NDggLTAuMjQ2NSwtMC42NDQzIDAsLTAuODg5MSAwLjI0NjUsLTAuMjQ2NSAwLjY0NzcsLTAuMjQ2NSAwLjg5NDIsMCAxLjEwNSwxLjA5OTkgMi45MzkzLDEuNjMzNyA1LjYwNjYsMS42MzM3IGwgMC4wMjIxLDAuMDA1MSAwLjAyMjEsLTAuMDA1MSBjIDIuNjY3MywwIDQuNTAxNiwtMC41MzU1IDUuNjA2NiwtMS42MzU0IDAuMjQ2NSwtMC4yNDY1IDAuNjQ3NywtMC4yNDQ4IDAuODk0MiwwIDAuMjQ2NSwwLjI0NjUgMC4yNDY1LDAuNjQ0MyAwLDAuODkwOCB6IG0gLTAuMzIxMywtNS4yNjE1IGMgLTEuNDgyNCwwIC0yLjY4NzcsLTEuMjAwMiAtMi42ODc3LC0yLjY3NTggMCwtMS40NzU2IDEuMjA1MywtMi42Nzc1IDIuNjg3NywtMi42Nzc1IDEuNDgyNCwwIDIuNjg3NywxLjIwMTkgMi42ODc3LDIuNjc3NSAwLDEuNDc1NiAtMS4yMDUzLDIuNjc1OCAtMi42ODc3LDIuNjc1OCB6Jyxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgUmVkZGl0SWNvbjtcbiIsImltcG9ydCBhc3NlcnQgZnJvbSAnLi91dGlscy9hc3NlcnQnO1xuaW1wb3J0IG9iamVjdFRvR2V0UGFyYW1zIGZyb20gJy4vdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMnO1xuaW1wb3J0IGNyZWF0ZVNoYXJlQnV0dG9uIGZyb20gJy4vaG9jcy9jcmVhdGVTaGFyZUJ1dHRvbic7XG5mdW5jdGlvbiByZWRkaXRMaW5rKHVybCwgX2EpIHtcbiAgICB2YXIgdGl0bGUgPSBfYS50aXRsZTtcbiAgICBhc3NlcnQodXJsLCAncmVkZGl0LnVybCcpO1xuICAgIHJldHVybiAoJ2h0dHBzOi8vd3d3LnJlZGRpdC5jb20vc3VibWl0JyArXG4gICAgICAgIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICB9KSk7XG59XG52YXIgUmVkZGl0U2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbigncmVkZGl0JywgcmVkZGl0TGluaywgZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoe1xuICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbn0pOyB9LCB7XG4gICAgd2luZG93V2lkdGg6IDY2MCxcbiAgICB3aW5kb3dIZWlnaHQ6IDQ2MCxcbiAgICB3aW5kb3dQb3NpdGlvbjogJ3dpbmRvd0NlbnRlcicsXG59KTtcbmV4cG9ydCBkZWZhdWx0IFJlZGRpdFNoYXJlQnV0dG9uO1xuIiwiaW1wb3J0IGpzb25wIGZyb20gJ2pzb25wJztcbmltcG9ydCBjcmVhdGVTaGFyZUNvdW50IGZyb20gJy4vaG9jcy9jcmVhdGVTaGFyZUNvdW50JztcbmZ1bmN0aW9uIGdldFJlZGRpdFNoYXJlQ291bnQoc2hhcmVVcmwsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGVuZHBvaW50ID0gXCJodHRwczovL3d3dy5yZWRkaXQuY29tL2FwaS9pbmZvLmpzb24/bGltaXQ9MSZ1cmw9XCIgKyBzaGFyZVVybDtcbiAgICBqc29ucChlbmRwb2ludCwgeyBwYXJhbTogJ2pzb25wJyB9LCBmdW5jdGlvbiAoZXJyLCByZXNwb25zZSkge1xuICAgICAgICBjYWxsYmFjayghZXJyICYmXG4gICAgICAgICAgICByZXNwb25zZSAmJlxuICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSAmJlxuICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5jaGlsZHJlbi5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICByZXNwb25zZS5kYXRhLmNoaWxkcmVuWzBdLmRhdGEuc2NvcmVcbiAgICAgICAgICAgID8gcmVzcG9uc2UuZGF0YS5jaGlsZHJlblswXS5kYXRhLnNjb3JlXG4gICAgICAgICAgICA6IHVuZGVmaW5lZCk7XG4gICAgfSk7XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaGFyZUNvdW50KGdldFJlZGRpdFNoYXJlQ291bnQpO1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbnZhciBpc1Byb21pc2UgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuICEhb2JqICYmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbic7XG59O1xudmFyIGdldEJveFBvc2l0aW9uT25XaW5kb3dDZW50ZXIgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkgeyByZXR1cm4gKHtcbiAgICBsZWZ0OiB3aW5kb3cub3V0ZXJXaWR0aCAvIDIgKyAod2luZG93LnNjcmVlblggfHwgd2luZG93LnNjcmVlbkxlZnQgfHwgMCkgLSB3aWR0aCAvIDIsXG4gICAgdG9wOiB3aW5kb3cub3V0ZXJIZWlnaHQgLyAyICsgKHdpbmRvdy5zY3JlZW5ZIHx8IHdpbmRvdy5zY3JlZW5Ub3AgfHwgMCkgLSBoZWlnaHQgLyAyLFxufSk7IH07XG52YXIgZ2V0Qm94UG9zaXRpb25PblNjcmVlbkNlbnRlciA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0KSB7IHJldHVybiAoe1xuICAgIHRvcDogKHdpbmRvdy5zY3JlZW4uaGVpZ2h0IC0gaGVpZ2h0KSAvIDIsXG4gICAgbGVmdDogKHdpbmRvdy5zY3JlZW4ud2lkdGggLSB3aWR0aCkgLyAyLFxufSk7IH07XG5mdW5jdGlvbiB3aW5kb3dPcGVuKHVybCwgX2EsIG9uQ2xvc2UpIHtcbiAgICB2YXIgaGVpZ2h0ID0gX2EuaGVpZ2h0LCB3aWR0aCA9IF9hLndpZHRoLCBjb25maWdSZXN0ID0gX19yZXN0KF9hLCBbXCJoZWlnaHRcIiwgXCJ3aWR0aFwiXSk7XG4gICAgdmFyIGNvbmZpZyA9IF9fYXNzaWduKHsgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgIHdpZHRoOiB3aWR0aCwgbG9jYXRpb246ICdubycsIHRvb2xiYXI6ICdubycsIHN0YXR1czogJ25vJywgZGlyZWN0b3JpZXM6ICdubycsIG1lbnViYXI6ICdubycsIHNjcm9sbGJhcnM6ICd5ZXMnLCByZXNpemFibGU6ICdubycsIGNlbnRlcnNjcmVlbjogJ3llcycsIGNocm9tZTogJ3llcycgfSwgY29uZmlnUmVzdCk7XG4gICAgdmFyIHNoYXJlRGlhbG9nID0gd2luZG93Lm9wZW4odXJsLCAnJywgT2JqZWN0LmtleXMoY29uZmlnKVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSArIFwiPVwiICsgY29uZmlnW2tleV07IH0pXG4gICAgICAgIC5qb2luKCcsICcpKTtcbiAgICBpZiAob25DbG9zZSkge1xuICAgICAgICB2YXIgaW50ZXJ2YWxfMSA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChzaGFyZURpYWxvZyA9PT0gbnVsbCB8fCBzaGFyZURpYWxvZy5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxfMSk7XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2Uoc2hhcmVEaWFsb2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgICByZXR1cm4gc2hhcmVEaWFsb2c7XG59XG52YXIgU2hhcmVCdXR0b24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNoYXJlQnV0dG9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNoYXJlQnV0dG9uKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMub3BlblNoYXJlRGlhbG9nID0gZnVuY3Rpb24gKGxpbmspIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLCBvblNoYXJlV2luZG93Q2xvc2UgPSBfYS5vblNoYXJlV2luZG93Q2xvc2UsIF9iID0gX2Eud2luZG93SGVpZ2h0LCB3aW5kb3dIZWlnaHQgPSBfYiA9PT0gdm9pZCAwID8gNDAwIDogX2IsIF9jID0gX2Eud2luZG93UG9zaXRpb24sIHdpbmRvd1Bvc2l0aW9uID0gX2MgPT09IHZvaWQgMCA/ICd3aW5kb3dDZW50ZXInIDogX2MsIF9kID0gX2Eud2luZG93V2lkdGgsIHdpbmRvd1dpZHRoID0gX2QgPT09IHZvaWQgMCA/IDU1MCA6IF9kO1xuICAgICAgICAgICAgdmFyIHdpbmRvd0NvbmZpZyA9IF9fYXNzaWduKHsgaGVpZ2h0OiB3aW5kb3dIZWlnaHQsIHdpZHRoOiB3aW5kb3dXaWR0aCB9LCAod2luZG93UG9zaXRpb24gPT09ICd3aW5kb3dDZW50ZXInXG4gICAgICAgICAgICAgICAgPyBnZXRCb3hQb3NpdGlvbk9uV2luZG93Q2VudGVyKHdpbmRvd1dpZHRoLCB3aW5kb3dIZWlnaHQpXG4gICAgICAgICAgICAgICAgOiBnZXRCb3hQb3NpdGlvbk9uU2NyZWVuQ2VudGVyKHdpbmRvd1dpZHRoLCB3aW5kb3dIZWlnaHQpKSk7XG4gICAgICAgICAgICB3aW5kb3dPcGVuKGxpbmssIHdpbmRvd0NvbmZpZywgb25TaGFyZVdpbmRvd0Nsb3NlKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYSwgYmVmb3JlT25DbGljaywgZGlzYWJsZWQsIG5ldHdvcmtMaW5rLCBvbkNsaWNrLCB1cmwsIG9wZW5TaGFyZURpYWxvZ09uQ2xpY2ssIG9wdHMsIGxpbmssIHJldHVyblZhbDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gdGhpcy5wcm9wcywgYmVmb3JlT25DbGljayA9IF9hLmJlZm9yZU9uQ2xpY2ssIGRpc2FibGVkID0gX2EuZGlzYWJsZWQsIG5ldHdvcmtMaW5rID0gX2EubmV0d29ya0xpbmssIG9uQ2xpY2sgPSBfYS5vbkNsaWNrLCB1cmwgPSBfYS51cmwsIG9wZW5TaGFyZURpYWxvZ09uQ2xpY2sgPSBfYS5vcGVuU2hhcmVEaWFsb2dPbkNsaWNrLCBvcHRzID0gX2Eub3B0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsgPSBuZXR3b3JrTGluayh1cmwsIG9wdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYmVmb3JlT25DbGljaykgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWwgPSBiZWZvcmVPbkNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzUHJvbWlzZShyZXR1cm5WYWwpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJldHVyblZhbF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wZW5TaGFyZURpYWxvZ09uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5TaGFyZURpYWxvZyhsaW5rKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayhldmVudCwgbGluayk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pOyB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFNoYXJlQnV0dG9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGJlZm9yZU9uQ2xpY2sgPSBfYS5iZWZvcmVPbkNsaWNrLCBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLCBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsIGRpc2FibGVkID0gX2EuZGlzYWJsZWQsIGRpc2FibGVkU3R5bGUgPSBfYS5kaXNhYmxlZFN0eWxlLCBmb3J3YXJkZWRSZWYgPSBfYS5mb3J3YXJkZWRSZWYsIG5ldHdvcmtMaW5rID0gX2EubmV0d29ya0xpbmssIG5ldHdvcmtOYW1lID0gX2EubmV0d29ya05hbWUsIG9uU2hhcmVXaW5kb3dDbG9zZSA9IF9hLm9uU2hhcmVXaW5kb3dDbG9zZSwgb3BlblNoYXJlRGlhbG9nT25DbGljayA9IF9hLm9wZW5TaGFyZURpYWxvZ09uQ2xpY2ssIG9wdHMgPSBfYS5vcHRzLCByZXNldEJ1dHRvblN0eWxlID0gX2EucmVzZXRCdXR0b25TdHlsZSwgc3R5bGUgPSBfYS5zdHlsZSwgdXJsID0gX2EudXJsLCB3aW5kb3dIZWlnaHQgPSBfYS53aW5kb3dIZWlnaHQsIHdpbmRvd1Bvc2l0aW9uID0gX2Eud2luZG93UG9zaXRpb24sIHdpbmRvd1dpZHRoID0gX2Eud2luZG93V2lkdGgsIHJlc3QgPSBfX3Jlc3QoX2EsIFtcImJlZm9yZU9uQ2xpY2tcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRTdHlsZVwiLCBcImZvcndhcmRlZFJlZlwiLCBcIm5ldHdvcmtMaW5rXCIsIFwibmV0d29ya05hbWVcIiwgXCJvblNoYXJlV2luZG93Q2xvc2VcIiwgXCJvcGVuU2hhcmVEaWFsb2dPbkNsaWNrXCIsIFwib3B0c1wiLCBcInJlc2V0QnV0dG9uU3R5bGVcIiwgXCJzdHlsZVwiLCBcInVybFwiLCBcIndpbmRvd0hlaWdodFwiLCBcIndpbmRvd1Bvc2l0aW9uXCIsIFwid2luZG93V2lkdGhcIl0pO1xuICAgICAgICB2YXIgbmV3Q2xhc3NOYW1lID0gY3goJ3JlYWN0LXNoYXJlX19TaGFyZUJ1dHRvbicsIHtcbiAgICAgICAgICAgICdyZWFjdC1zaGFyZV9fU2hhcmVCdXR0b24tLWRpc2FibGVkJzogISFkaXNhYmxlZCxcbiAgICAgICAgICAgIGRpc2FibGVkOiAhIWRpc2FibGVkLFxuICAgICAgICB9LCBjbGFzc05hbWUpO1xuICAgICAgICB2YXIgbmV3U3R5bGUgPSByZXNldEJ1dHRvblN0eWxlXG4gICAgICAgICAgICA/IF9fYXNzaWduKF9fYXNzaWduKHsgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLCBib3JkZXI6ICdub25lJywgcGFkZGluZzogMCwgZm9udDogJ2luaGVyaXQnLCBjb2xvcjogJ2luaGVyaXQnLCBjdXJzb3I6ICdwb2ludGVyJyB9LCBzdHlsZSksIChkaXNhYmxlZCAmJiBkaXNhYmxlZFN0eWxlKSkgOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc3R5bGUpLCAoZGlzYWJsZWQgJiYgZGlzYWJsZWRTdHlsZSkpO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgX19hc3NpZ24oe30sIHJlc3QsIHsgXCJhcmlhLWxhYmVsXCI6IHJlc3RbJ2FyaWEtbGFiZWwnXSB8fCBuZXR3b3JrTmFtZSwgY2xhc3NOYW1lOiBuZXdDbGFzc05hbWUsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2ssIHJlZjogZm9yd2FyZGVkUmVmLCBzdHlsZTogbmV3U3R5bGUgfSksIGNoaWxkcmVuKSk7XG4gICAgfTtcbiAgICBTaGFyZUJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGRpc2FibGVkU3R5bGU6IHsgb3BhY2l0eTogMC42IH0sXG4gICAgICAgIG9wZW5TaGFyZURpYWxvZ09uQ2xpY2s6IHRydWUsXG4gICAgICAgIHJlc2V0QnV0dG9uU3R5bGU6IHRydWUsXG4gICAgfTtcbiAgICByZXR1cm4gU2hhcmVCdXR0b247XG59KENvbXBvbmVudCkpO1xuZXhwb3J0IGRlZmF1bHQgU2hhcmVCdXR0b247XG4iLCJpbXBvcnQgY3JlYXRlSWNvbiBmcm9tICcuL2hvY3MvY3JlYXRlSWNvbic7XG52YXIgVGVsZWdyYW1JY29uID0gY3JlYXRlSWNvbih7XG4gICAgY29sb3I6ICcjMzdhZWUyJyxcbiAgICBuZXR3b3JrTmFtZTogJ3RlbGVncmFtJyxcbiAgICBwYXRoOiAnbTQ1LjkwODczLDE1LjQ0MzM1Yy0wLjY5MDEsLTAuMDI4MSAtMS4zNzY2OCwwLjE0MDQ4IC0xLjk2MTQyLDAuNDEyNjVjLTAuODQ5ODksMC4zMjY2MSAtOC42MzkzOSwzLjMzOTg2IC0xNi41MjM3LDYuMzkxNzRjLTMuOTY4NSwxLjUzMjk2IC03LjkzMzQ5LDMuMDY1OTMgLTEwLjk4NTM3LDQuMjQwNjdjLTMuMDUwMTIsMS4xNzY1IC01LjM0Njk0LDIuMDUwOTggLTUuNDY4MSwyLjA5MzEyYy0wLjgwNzc1LDAuMjgwOTYgLTEuODk5OTYsMC42MzU2NiAtMi44MjcxMiwxLjcyNzg4Yy0wLjIzMzU0LDAuMjcyMTggLTAuNDY4ODQsMC42MjE2MSAtMC41ODgyNSwxLjEwMjc1Yy0wLjExOTQxLDAuNDgxMTQgLTAuMDY2NzMsMS4wOTIyMiAwLjE2NjgyLDEuNTcxNmMwLjQ2NTMzLDAuOTYwNTIgMS4yNTM3NiwxLjM1NzM3IDIuMTg0NDMsMS43MTM4M2MzLjA5MDUxLDAuOTkwMzcgNi4yODYzOCwxLjkzNTA4IDguOTMyNjMsMi44MjM2YzAuOTc2MzIsMy40NDE3MSAxLjkxNDAxLDYuODk1NzEgMi44NDExNiwxMC4zNDI2OGMwLjMwNTU0LDAuNjkxODUgMC45NzEwNSwwLjk0ODIzIDEuNjU3NjQsMC45NTUyNWwtMC4wMDM1MSwwLjAzNTEyYzAsMCAwLjUzOTA4LDAuMDUyNjggMS4wNjQxMiwtMC4wNzM3NWMwLjUyNjc5LC0wLjEyMjkyIDEuMTg4NzksLTAuNDI4NDYgMS43OTEwOSwtMC45OTIxMmMwLjY2MiwtMC42MjE2MSAyLjQ1ODM2LC0yLjM4ODEyIDMuNDc2ODMsLTMuMzg1NTJsNy42NzM2LDUuNjY0NzdsMC4wNjE0NiwwLjAzNTEyYzAsMCAwLjg0OTg5LDAuNTk3MDMgMi4wOTMxMiwwLjY4MTMyYzAuNjIxNjEsMC4wNDIxNCAxLjQzOTksLTAuMDc3MjYgMi4xNDIyOSwtMC41OTE3NmMwLjcwNzY2LC0wLjUxNjI2IDEuMTc2NSwtMS4zNDY4MyAxLjM5NiwtMi4yOTUwNmMwLjY1NjczLC0yLjg2MjI0IDUuMDA5NzksLTIzLjU3NzQ1IDUuNzUyNTcsLTI3LjAwNjg2bC0wLjAyMTA3LDAuMDgwNzdjMC41MTk3NywtMS45MzE1NyAwLjMyODM3LC0zLjcwMTU5IC0wLjg3MDk2LC00Ljc0OTkxYy0wLjYwMDU0LC0wLjUyMTUyIC0xLjI5MjQsLTAuNzQ5OCAtMS45ODQyNSwtMC43Nzk2NWwwLDAuMDAxNzZ6bS0wLjIwNzIsMy4yOTA2OWMwLjA0NzQxLDAuMDQzOSAwLjA0MzksMC4wNDM5IDAuMDAzNTEsMC4wNDc0MWMtMC4wMTIyOSwtMC4wMDM1MSAwLjE0MDQ4LDAuMjA3MiAtMC4xNTgwNCwxLjMyNTc2bC0wLjAxMjI5LDAuMDQyMTRsLTAuMDA4NzgsMC4wMzg2M2MtMC43NTg1OCwzLjUwNjY4IC01LjE1NTU0LDI0LjQwODAyIC01Ljc0MjAzLDI2Ljk2NDcyYy0wLjA4MDc3LDAuMzQ0MTcgLTAuMTE0MTQsMC4zMTk1OSAtMC4wOTQ4MiwwLjI5ODUyYy0wLjE3NTYsLTAuMDI2MzQgLTAuNTAwNDUsLTAuMTY1MDYgLTAuNTI2NzksLTAuMTc1NmwtMTMuMTM0NjgsLTkuNzAxNzVjNC40OTg4LC00LjMzMTk5IDkuMDk5NDUsLTguMjUzMDcgMTMuNzQ0LC0xMi40MzIyOWMwLjgyMTgsLTAuNDEyNjUgMC42ODQ4MywtMS42ODU3MyAtMC4yOTg1MiwtMS43MDY4MWMtMS4wNDMwNSwwLjI0NTg0IC0xLjkyMjc5LDAuOTk1NjQgLTIuODc5OCwxLjQ3NTAyYy01LjQ5OTcxLDMuMjYyNiAtMTEuMTE4ODIsNi4xMzE4NiAtMTYuNTU4ODIsOS40OTI3OWMtMi43OTIsLTAuOTcxMDUgLTUuNTc4NzMsLTEuNzc3MDQgLTguMTUyOTgsLTIuNTc2MDFjMi4yMzM2LC0wLjg5NTU1IDQuMDA4ODksLTEuNTU1NzkgNS43NTYwOCwtMi4yMzAwOWMzLjA1MTg4LC0xLjE3NjUgNy4wMTY4NywtMi43MDQyIDEwLjk4NTM3LC00LjI0MDY3YzcuOTQwNTEsLTMuMDY5NDQgMTUuOTI2NjcsLTYuMTYzNDYgMTYuNjIwMjgsLTYuNDMwMzdsMC4wNTYxOSwtMC4wMjI4M2wwLjA1MjY4LC0wLjAyMjgzYzAuMTkzMTYsLTAuMDg3OCAwLjMwMzc4LC0wLjA5NjU4IDAuMzU0NzEsLTAuMTAwMDljMCwwIC0wLjAxNzU2LC0wLjA1Nzk1IC0wLjAwMzUxLC0wLjA0NTY2bC0wLjAwMTc2LDB6bS0yMC45MTcxNSwyMi4wNjM4bDIuMTY2ODcsMS42MDE0NWMtMC45MzQxOCwwLjkxMzExIC0xLjgxNzQzLDEuNzczNTMgLTIuNDU0ODUsMi4zODgxMmwwLjI4Nzk4LC0zLjk4OTU3Jyxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgVGVsZWdyYW1JY29uO1xuIiwiaW1wb3J0IGFzc2VydCBmcm9tICcuL3V0aWxzL2Fzc2VydCc7XG5pbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5pbXBvcnQgY3JlYXRlU2hhcmVCdXR0b24gZnJvbSAnLi9ob2NzL2NyZWF0ZVNoYXJlQnV0dG9uJztcbmZ1bmN0aW9uIHRlbGVncmFtTGluayh1cmwsIF9hKSB7XG4gICAgdmFyIHRpdGxlID0gX2EudGl0bGU7XG4gICAgYXNzZXJ0KHVybCwgJ3RlbGVncmFtLnVybCcpO1xuICAgIHJldHVybiAoJ2h0dHBzOi8vdGVsZWdyYW0ubWUvc2hhcmUvJyArXG4gICAgICAgIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgIH0pKTtcbn1cbnZhciBUZWxlZ3JhbVNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oJ3RlbGVncmFtJywgdGVsZWdyYW1MaW5rLCBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuICh7XG4gICAgdGl0bGU6IHByb3BzLnRpdGxlLFxufSk7IH0sIHtcbiAgICB3aW5kb3dXaWR0aDogNTUwLFxuICAgIHdpbmRvd0hlaWdodDogNDAwLFxufSk7XG5leHBvcnQgZGVmYXVsdCBUZWxlZ3JhbVNoYXJlQnV0dG9uO1xuIiwiaW1wb3J0IGNyZWF0ZUljb24gZnJvbSAnLi9ob2NzL2NyZWF0ZUljb24nO1xudmFyIFR1bWJsckljb24gPSBjcmVhdGVJY29uKHtcbiAgICBjb2xvcjogJyMyYzQ3NjInLFxuICAgIG5ldHdvcmtOYW1lOiAndHVtYmxyJyxcbiAgICBwYXRoOiAnTTM5LjIsNDFjLTAuNiwwLjMtMS42LDAuNS0yLjQsMC41Yy0yLjQsMC4xLTIuOS0xLjctMi45LTN2LTkuM2g2di00LjVoLTZWMTdjMCwwLTQuMywwLTQuNCwwIGMtMC4xLDAtMC4yLDAuMS0wLjIsMC4yYy0wLjMsMi4zLTEuNCw2LjQtNS45LDguMXYzLjloM1YzOWMwLDMuNCwyLjUsOC4xLDksOGMyLjIsMCw0LjctMSw1LjItMS44TDM5LjIsNDF6Jyxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgVHVtYmxySWNvbjtcbiIsImltcG9ydCBhc3NlcnQgZnJvbSAnLi91dGlscy9hc3NlcnQnO1xuaW1wb3J0IG9iamVjdFRvR2V0UGFyYW1zIGZyb20gJy4vdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMnO1xuaW1wb3J0IGNyZWF0ZVNoYXJlQnV0dG9uIGZyb20gJy4vaG9jcy9jcmVhdGVTaGFyZUJ1dHRvbic7XG5mdW5jdGlvbiB0dW1ibHJMaW5rKHVybCwgX2EpIHtcbiAgICB2YXIgdGl0bGUgPSBfYS50aXRsZSwgY2FwdGlvbiA9IF9hLmNhcHRpb24sIHRhZ3MgPSBfYS50YWdzLCBwb3N0dHlwZSA9IF9hLnBvc3R0eXBlO1xuICAgIGFzc2VydCh1cmwsICd0dW1ibHIudXJsJyk7XG4gICAgcmV0dXJuICgnaHR0cHM6Ly93d3cudHVtYmxyLmNvbS93aWRnZXRzL3NoYXJlL3Rvb2wnICtcbiAgICAgICAgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgICAgICAgICAgY2Fub25pY2FsVXJsOiB1cmwsXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBjYXB0aW9uOiBjYXB0aW9uLFxuICAgICAgICAgICAgdGFnczogdGFncyxcbiAgICAgICAgICAgIHBvc3R0eXBlOiBwb3N0dHlwZSxcbiAgICAgICAgfSkpO1xufVxudmFyIFR1bWJsclNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oJ3R1bWJscicsIHR1bWJsckxpbmssIGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gKHtcbiAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgdGFnczogKHByb3BzLnRhZ3MgfHwgW10pLmpvaW4oJywnKSxcbiAgICBjYXB0aW9uOiBwcm9wcy5jYXB0aW9uLFxuICAgIHBvc3R0eXBlOiBwcm9wcy5wb3N0dHlwZSB8fCAnbGluaycsXG59KTsgfSwge1xuICAgIHdpbmRvd1dpZHRoOiA2NjAsXG4gICAgd2luZG93SGVpZ2h0OiA0NjAsXG59KTtcbmV4cG9ydCBkZWZhdWx0IFR1bWJsclNoYXJlQnV0dG9uO1xuIiwiaW1wb3J0IGpzb25wIGZyb20gJ2pzb25wJztcbmltcG9ydCBvYmplY3RUb0dldFBhcmFtcyBmcm9tICcuL3V0aWxzL29iamVjdFRvR2V0UGFyYW1zJztcbmltcG9ydCBjcmVhdGVTaGFyZUNvdW50IGZyb20gJy4vaG9jcy9jcmVhdGVTaGFyZUNvdW50JztcbmZ1bmN0aW9uIGdldFR1bWJsclNoYXJlQ291bnQoc2hhcmVVcmwsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGVuZHBvaW50ID0gJ2h0dHBzOi8vYXBpLnR1bWJsci5jb20vdjIvc2hhcmUvc3RhdHMnO1xuICAgIHJldHVybiBqc29ucChlbmRwb2ludCArXG4gICAgICAgIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICAgICAgICAgIHVybDogc2hhcmVVcmwsXG4gICAgICAgIH0pLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKCFlcnIgJiYgZGF0YSAmJiBkYXRhLnJlc3BvbnNlID8gZGF0YS5yZXNwb25zZS5ub3RlX2NvdW50IDogdW5kZWZpbmVkKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNoYXJlQ291bnQoZ2V0VHVtYmxyU2hhcmVDb3VudCk7XG4iLCJpbXBvcnQgY3JlYXRlSWNvbiBmcm9tICcuL2hvY3MvY3JlYXRlSWNvbic7XG52YXIgVHdpdHRlckljb24gPSBjcmVhdGVJY29uKHtcbiAgICBjb2xvcjogJyMwMGFjZWQnLFxuICAgIG5ldHdvcmtOYW1lOiAndHdpdHRlcicsXG4gICAgcGF0aDogJ000OCwyMi4xYy0xLjIsMC41LTIuNCwwLjktMy44LDFjMS40LTAuOCwyLjQtMi4xLDIuOS0zLjZjLTEuMywwLjgtMi43LDEuMy00LjIsMS42IEM0MS43LDE5LjgsNDAsMTksMzguMiwxOWMtMy42LDAtNi42LDIuOS02LjYsNi42YzAsMC41LDAuMSwxLDAuMiwxLjVjLTUuNS0wLjMtMTAuMy0yLjktMTMuNS02LjljLTAuNiwxLTAuOSwyLjEtMC45LDMuMyBjMCwyLjMsMS4yLDQuMywyLjksNS41Yy0xLjEsMC0yLjEtMC4zLTMtMC44YzAsMCwwLDAuMSwwLDAuMWMwLDMuMiwyLjMsNS44LDUuMyw2LjRjLTAuNiwwLjEtMS4xLDAuMi0xLjcsMC4yYy0wLjQsMC0wLjgsMC0xLjItMC4xIGMwLjgsMi42LDMuMyw0LjUsNi4xLDQuNmMtMi4yLDEuOC01LjEsMi44LTguMiwyLjhjLTAuNSwwLTEuMSwwLTEuNi0wLjFjMi45LDEuOSw2LjQsMi45LDEwLjEsMi45YzEyLjEsMCwxOC43LTEwLDE4LjctMTguNyBjMC0wLjMsMC0wLjYsMC0wLjhDNDYsMjQuNSw0Ny4xLDIzLjQsNDgsMjIuMXonLFxufSk7XG5leHBvcnQgZGVmYXVsdCBUd2l0dGVySWNvbjtcbiIsImltcG9ydCBhc3NlcnQgZnJvbSAnLi91dGlscy9hc3NlcnQnO1xuaW1wb3J0IG9iamVjdFRvR2V0UGFyYW1zIGZyb20gJy4vdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMnO1xuaW1wb3J0IGNyZWF0ZVNoYXJlQnV0dG9uIGZyb20gJy4vaG9jcy9jcmVhdGVTaGFyZUJ1dHRvbic7XG5mdW5jdGlvbiB0d2l0dGVyTGluayh1cmwsIF9hKSB7XG4gICAgdmFyIHRpdGxlID0gX2EudGl0bGUsIHZpYSA9IF9hLnZpYSwgX2IgPSBfYS5oYXNodGFncywgaGFzaHRhZ3MgPSBfYiA9PT0gdm9pZCAwID8gW10gOiBfYiwgX2MgPSBfYS5yZWxhdGVkLCByZWxhdGVkID0gX2MgPT09IHZvaWQgMCA/IFtdIDogX2M7XG4gICAgYXNzZXJ0KHVybCwgJ3R3aXR0ZXIudXJsJyk7XG4gICAgYXNzZXJ0KEFycmF5LmlzQXJyYXkoaGFzaHRhZ3MpLCAndHdpdHRlci5oYXNodGFncyBpcyBub3QgYW4gYXJyYXknKTtcbiAgICBhc3NlcnQoQXJyYXkuaXNBcnJheShyZWxhdGVkKSwgJ3R3aXR0ZXIucmVsYXRlZCBpcyBub3QgYW4gYXJyYXknKTtcbiAgICByZXR1cm4gKCdodHRwczovL3R3aXR0ZXIuY29tL3NoYXJlJyArXG4gICAgICAgIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICB2aWE6IHZpYSxcbiAgICAgICAgICAgIGhhc2h0YWdzOiBoYXNodGFncy5sZW5ndGggPiAwID8gaGFzaHRhZ3Muam9pbignLCcpIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgcmVsYXRlZDogcmVsYXRlZC5sZW5ndGggPiAwID8gcmVsYXRlZC5qb2luKCcsJykgOiB1bmRlZmluZWQsXG4gICAgICAgIH0pKTtcbn1cbnZhciBUd2l0dGVyU2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbigndHdpdHRlcicsIHR3aXR0ZXJMaW5rLCBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuICh7XG4gICAgaGFzaHRhZ3M6IHByb3BzLmhhc2h0YWdzLFxuICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICB2aWE6IHByb3BzLnZpYSxcbiAgICByZWxhdGVkOiBwcm9wcy5yZWxhdGVkLFxufSk7IH0sIHtcbiAgICB3aW5kb3dXaWR0aDogNTUwLFxuICAgIHdpbmRvd0hlaWdodDogNDAwLFxufSk7XG5leHBvcnQgZGVmYXVsdCBUd2l0dGVyU2hhcmVCdXR0b247XG4iLCJpbXBvcnQgY3JlYXRlSWNvbiBmcm9tICcuL2hvY3MvY3JlYXRlSWNvbic7XG52YXIgVktJY29uID0gY3JlYXRlSWNvbih7XG4gICAgY29sb3I6ICcjNDU2NjhlJyxcbiAgICBuZXR3b3JrTmFtZTogJ3ZrJyxcbiAgICBwYXRoOiAnTTQ0Ljk0LDQ0Ljg0aC0wLjJjLTIuMTctLjM2LTMuNjYtMS45Mi00LjkyLTMuMzdDMzkuMSw0MC42NiwzOCwzOC44MSwzNi43LDM5Yy0xLjg1LjMtLjkzLDMuNTItMS43MSw0LjktMC42MiwxLjExLTMuMjkuOTEtNS4xMiwwLjcxLTUuNzktLjYyLTguNzUtMy43Ny0xMS4zNS03LjE0QTY0LjEzLDY0LjEzLDAsMCwxLDExLjYsMjZhMTAuNTksMTAuNTksMCwwLDEtMS41MS00LjQ5QzExLDIwLjcsMTIuNTYsMjEsMTQuMTEsMjFjMS4zMSwwLDMuMzYtLjI5LDQuMzIuMkMxOSwyMS40NiwxOS41NywyMywyMCwyNGEzNy4xOCwzNy4xOCwwLDAsMCwzLjMxLDUuODJjMC41NiwwLjgxLDEuNDEsMi4zNSwyLjQxLDIuMTRzMS4wNi0yLjYzLDEuMS00LjE4YzAtMS43NywwLTQtLjUtNC45UzI1LDIyLDI0LjE1LDIxLjQ3YzAuNzMtMS40OSwyLjcyLTEuNjMsNS4xMi0xLjYzLDIsMCw0Ljg0LS4yMyw1LjYyLDEuMTJzMC4yNSwzLjg1LjIsNS43MWMtMC4wNiwyLjA5LS40MSw0LjI1LDEsNS4yMSwxLjA5LS4xMiwxLjY4LTEuMiwyLjMxLTJBMjgsMjgsMCwwLDAsNDEuNzIsMjRjMC40NC0xLC45MS0yLjY1LDEuNzEtMywxLjIxLS40NywzLjE1LTAuMSw0LjkyLTAuMSwxLjQ2LDAsNC4wNS0uNDEsNC41Mi42MSwwLjM5LDAuODUtLjc1LDMtMS4xLDMuNTdhNjEuODgsNjEuODgsMCwwLDEtNC4xMiw1LjYxYy0wLjU4Ljc4LTEuNzgsMi0xLjcxLDMuMjcsMC4wNSwwLjk0LDEsMS42NywxLjcxLDIuMzVhMzMuMTIsMzMuMTIsMCwwLDEsMy45Miw0LjE4YzAuNDcsMC42MiwxLjUsMiwxLjQsMi43NkM1Mi42Niw0NS44MSw0Ni44OCw0NC4yNCw0NC45NCw0NC44NFonLFxufSk7XG5leHBvcnQgZGVmYXVsdCBWS0ljb247XG4iLCJpbXBvcnQgYXNzZXJ0IGZyb20gJy4vdXRpbHMvYXNzZXJ0JztcbmltcG9ydCBvYmplY3RUb0dldFBhcmFtcyBmcm9tICcuL3V0aWxzL29iamVjdFRvR2V0UGFyYW1zJztcbmltcG9ydCBjcmVhdGVTaGFyZUJ1dHRvbiBmcm9tICcuL2hvY3MvY3JlYXRlU2hhcmVCdXR0b24nO1xuZnVuY3Rpb24gdmtMaW5rKHVybCwgX2EpIHtcbiAgICB2YXIgdGl0bGUgPSBfYS50aXRsZSwgaW1hZ2UgPSBfYS5pbWFnZSwgbm9QYXJzZSA9IF9hLm5vUGFyc2UsIG5vVmtMaW5rcyA9IF9hLm5vVmtMaW5rcztcbiAgICBhc3NlcnQodXJsLCAndmsudXJsJyk7XG4gICAgcmV0dXJuICgnaHR0cHM6Ly92ay5jb20vc2hhcmUucGhwJyArXG4gICAgICAgIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgaW1hZ2U6IGltYWdlLFxuICAgICAgICAgICAgbm9wYXJzZTogbm9QYXJzZSA/IDEgOiAwLFxuICAgICAgICAgICAgbm9fdmtfbGlua3M6IG5vVmtMaW5rcyA/IDEgOiAwLFxuICAgICAgICB9KSk7XG59XG52YXIgVktTaGFyZUJ1dHRvbiA9IGNyZWF0ZVNoYXJlQnV0dG9uKCd2aycsIHZrTGluaywgZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoe1xuICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICBpbWFnZTogcHJvcHMuaW1hZ2UsXG4gICAgbm9QYXJzZTogcHJvcHMubm9QYXJzZSxcbiAgICBub1ZrTGlua3M6IHByb3BzLm5vVmtMaW5rcyxcbn0pOyB9LCB7XG4gICAgd2luZG93V2lkdGg6IDY2MCxcbiAgICB3aW5kb3dIZWlnaHQ6IDQ2MCxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgVktTaGFyZUJ1dHRvbjtcbiIsImltcG9ydCBqc29ucCBmcm9tICdqc29ucCc7XG5pbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5pbXBvcnQgY3JlYXRlU2hhcmVDb3VudCBmcm9tICcuL2hvY3MvY3JlYXRlU2hhcmVDb3VudCc7XG5mdW5jdGlvbiBnZXRWS1NoYXJlQ291bnQoc2hhcmVVcmwsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCF3aW5kb3cuVkspXG4gICAgICAgIHdpbmRvdy5WSyA9IHt9O1xuICAgIHdpbmRvdy5WSy5TaGFyZSA9IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgY291bnQ6IGZ1bmN0aW9uIChpbmRleCwgY291bnQpIHsgcmV0dXJuIHdpbmRvdy5WSy5jYWxsYmFja3NbaW5kZXhdKGNvdW50KTsgfSxcbiAgICB9O1xuICAgIHdpbmRvdy5WSy5jYWxsYmFja3MgPSBbXTtcbiAgICB2YXIgdXJsID0gJ2h0dHBzOi8vdmsuY29tL3NoYXJlLnBocCc7XG4gICAgdmFyIGluZGV4ID0gd2luZG93LlZLLmNhbGxiYWNrcy5sZW5ndGg7XG4gICAgd2luZG93LlZLLmNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICByZXR1cm4ganNvbnAodXJsICtcbiAgICAgICAgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgICAgICAgICAgYWN0OiAnY291bnQnLFxuICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgdXJsOiBzaGFyZVVybCxcbiAgICAgICAgfSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hhcmVDb3VudChnZXRWS1NoYXJlQ291bnQpO1xuIiwiaW1wb3J0IGNyZWF0ZUljb24gZnJvbSAnLi9ob2NzL2NyZWF0ZUljb24nO1xudmFyIFZpYmVySWNvbiA9IGNyZWF0ZUljb24oe1xuICAgIGNvbG9yOiAnIzdDNTI5RScsXG4gICAgbmV0d29ya05hbWU6ICd2aWJlcicsXG4gICAgcGF0aDogJ20zMS4wLDEyLjNjOS4wLDAuMiAxNi40LDYuMiAxOC4wLDE1LjJjMC4yLDEuNSAwLjMsMy4wIDAuNCw0LjZhMS4wLDEuMCAwIDAgMSAtMC44LDEuMmwtMC4xLDBhMS4xLDEuMSAwIDAgMSAtMS4wLC0xLjJsMCwwYy0wLjAsLTEuMiAtMC4xLC0yLjUgLTAuMywtMy44YTE2LjEsMTYuMSAwIDAgMCAtMTMuMCwtMTMuNWMtMS4wLC0wLjEgLTIuMCwtMC4yIC0zLjAsLTAuM2MtMC42LC0wLjAgLTEuNCwtMC4xIC0xLjYsLTAuOGExLjEsMS4xIDAgMCAxIDAuOSwtMS4ybDAuNiwwbDAuMCwtMC4wem0xMC42LDM5LjJhMTkuOSwxOS45IDAgMCAxIC0yLjEsLTAuNmMtNi45LC0yLjkgLTEzLjIsLTYuNiAtMTguMywtMTIuMmE0Ny41LDQ3LjUgMCAwIDEgLTcuMCwtMTAuN2MtMC44LC0xLjggLTEuNiwtMy43IC0yLjQsLTUuNmMtMC42LC0xLjcgMC4zLC0zLjQgMS40LC00LjdhMTEuMywxMS4zIDAgMCAxIDMuNywtMi44YTIuNCwyLjQgMCAwIDEgMy4wLDAuN2EzOS4wLDM5LjAgMCAwIDEgNC43LDYuNWEzLjEsMy4xIDAgMCAxIC0wLjgsNC4yYy0wLjMsMC4yIC0wLjYsMC41IC0xLjAsMC44YTMuMywzLjMgMCAwIDAgLTAuNywwLjdhMi4xLDIuMSAwIDAgMCAtMC4xLDEuOWMxLjcsNC45IDQuNyw4LjcgOS43LDEwLjhhNS4wLDUuMCAwIDAgMCAyLjUsMC42YzEuNSwtMC4xIDIuMCwtMS44IDMuMSwtMi43YTIuOSwyLjkgMCAwIDEgMy41LC0wLjFjMS4xLDAuNyAyLjIsMS40IDMuMywyLjJhMzcuOCwzNy44IDAgMCAxIDMuMSwyLjRhMi40LDIuNCAwIDAgMSAwLjcsMy4wYTEwLjQsMTAuNCAwIDAgMSAtNC40LDQuOGExMC44LDEwLjggMCAwIDEgLTEuOSwwLjZjLTAuNywtMC4yIDAuNiwtMC4yIDAsMGwwLjAsMGwwLC0wLjB6bTMuMSwtMjEuNGE0LjIsNC4yIDAgMCAxIC0wLjAsMC42YTEuMCwxLjAgMCAwIDEgLTEuOSwwLjFhMi43LDIuNyAwIDAgMSAtMC4xLC0wLjhhMTAuOSwxMC45IDAgMCAwIC0xLjQsLTUuNWExMC4yLDEwLjIgMCAwIDAgLTQuMiwtNC4wYTEyLjMsMTIuMyAwIDAgMCAtMy40LC0xLjBjLTAuNSwtMC4wIC0xLjAsLTAuMSAtMS41LC0wLjJhMC45LDAuOSAwIDAgMSAtMC45LC0xLjBsMCwtMC4xYTAuOSwwLjkgMCAwIDEgMC45LC0wLjlsMC4xLDBhMTQuMSwxNC4xIDAgMCAxIDUuOSwxLjVhMTEuOSwxMS45IDAgMCAxIDYuNSw5LjNjMCwwLjEgMC4wLDAuMyAwLjAsMC41YzAsMC40IDAuMCwwLjkgMC4wLDEuNWwwLDBsMC4wLDAuMHptLTUuNiwtMC4yYTEuMSwxLjEgMCAwIDEgLTEuMiwtMC45bDAsLTAuMWExMS4zLDExLjMgMCAwIDAgLTAuMiwtMS40YTQuMCw0LjAgMCAwIDAgLTEuNSwtMi4zYTMuOSwzLjkgMCAwIDAgLTEuMiwtMC41Yy0wLjUsLTAuMSAtMS4xLC0wLjEgLTEuNiwtMC4yYTEuMCwxLjAgMCAwIDEgLTAuOCwtMS4xbDAsMGwwLDBhMS4wLDEuMCAwIDAgMSAxLjEsLTAuOGMzLjQsMC4yIDYuMCwyLjAgNi4zLDYuMmEyLjgsMi44IDAgMCAxIDAsMC44YTAuOCwwLjggMCAwIDEgLTAuOCwwLjdsMCwwbDAuMCwtMC4weicsXG59KTtcbmV4cG9ydCBkZWZhdWx0IFZpYmVySWNvbjtcbiIsImltcG9ydCBhc3NlcnQgZnJvbSAnLi91dGlscy9hc3NlcnQnO1xuaW1wb3J0IG9iamVjdFRvR2V0UGFyYW1zIGZyb20gJy4vdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMnO1xuaW1wb3J0IGNyZWF0ZVNoYXJlQnV0dG9uIGZyb20gJy4vaG9jcy9jcmVhdGVTaGFyZUJ1dHRvbic7XG5mdW5jdGlvbiB2aWJlckxpbmsodXJsLCBfYSkge1xuICAgIHZhciB0aXRsZSA9IF9hLnRpdGxlLCBzZXBhcmF0b3IgPSBfYS5zZXBhcmF0b3I7XG4gICAgYXNzZXJ0KHVybCwgJ3ZpYmVyLnVybCcpO1xuICAgIHJldHVybiAoJ3ZpYmVyOi8vZm9yd2FyZCcgK1xuICAgICAgICBvYmplY3RUb0dldFBhcmFtcyh7XG4gICAgICAgICAgICB0ZXh0OiB0aXRsZSA/IHRpdGxlICsgc2VwYXJhdG9yICsgdXJsIDogdXJsLFxuICAgICAgICB9KSk7XG59XG52YXIgVmliZXJTaGFyZUJ1dHRvbiA9IGNyZWF0ZVNoYXJlQnV0dG9uKCd2aWJlcicsIHZpYmVyTGluaywgZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoe1xuICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICBzZXBhcmF0b3I6IHByb3BzLnNlcGFyYXRvciB8fCAnICcsXG59KTsgfSwge1xuICAgIHdpbmRvd1dpZHRoOiA2NjAsXG4gICAgd2luZG93SGVpZ2h0OiA0NjAsXG59KTtcbmV4cG9ydCBkZWZhdWx0IFZpYmVyU2hhcmVCdXR0b247XG4iLCJpbXBvcnQgY3JlYXRlSWNvbiBmcm9tICcuL2hvY3MvY3JlYXRlSWNvbic7XG52YXIgV2VpYm9JY29uID0gY3JlYXRlSWNvbih7XG4gICAgY29sb3I6ICcjQ0QyMDFGJyxcbiAgICBuZXR3b3JrTmFtZTogJ3dlaWJvJyxcbiAgICBwYXRoOiAnTTQwLjk3NTYxNTIsMTUuMDIxNzExOSBDNDAuNTAwMDczMiwxNS4wNTQ2MzAxIDM5Ljk5OTkzMTQsMTUuMTIwNDY2NiAzOS41MzI1ODc4LDE1LjIxOTIyMTMgQzM4LjY2MzQ5MjgsMTUuNDA4NTAxNiAzOC4wOTc3NTg5LDE2LjI2NDM3NTcgMzguMjg2MzM2OCwxNy4xMjg0Nzg3IEMzOC40NjY3MTYzLDE4LjAwMDgxMjkgMzkuMzE5NDE0MywxOC41Njg2NTE5IDQwLjE4ODUwOTQsMTguMzc5MzcxNSBDNDIuODYxMzkwOCwxNy44MTE1MzI2IDQ1Ljc3MjA0MTEsMTguNjQyNzE3NCA0Ny43MzE2MDczLDIwLjgxNTMyMDcgQzQ5LjY5MTE3MzUsMjIuOTk2MTUzIDUwLjIwNzcxMjIsMjUuOTc1MjU0IDQ5LjM3MTQxMTIsMjguNTg0MDIzNCBDNDkuMTAwODQ0MSwyOS40MzE2Njg0IDQ5LjU3NjM4NjEsMzAuMzUzMzc4OSA1MC40MjA4ODU3LDMwLjYyNDk1MzcgQzUxLjI2NTM4NTIsMzAuODk2NTI4NiA1Mi4xNzU0NzY5LDMwLjQxOTIxNTMgNTIuNDU0MjQyNSwyOS41NzE1NzAzIEM1My42MzQ5MDEzLDI1LjkwMTE4ODUgNTIuOTEzMzg3NiwyMS43Njk5NDk0IDUwLjE1ODUxNzEsMTguNzA4NTUzOCBDNDguMDkyMzY0MSwxNi40MDQyNzc2IDQ1LjIwNjMwOTMsMTUuMTUzMzg0OCA0Mi4zNTMwNTA1LDE1LjAyMTcxMTkgQzQxLjg3NzUwODQsMTQuOTk3MDIyNyA0MS40NTExNTk0LDE0Ljk4ODc5MzcgNDAuOTc1NjE1MiwxNS4wMjE3MTE5IFogTTI3LjkyMjc3NjIsMTkuODI3NzczNyBDMjQuOTk1NzI2OCwyMC4xNDA0OTggMjAuODYzNDIxLDIyLjQzNjU0MzEgMTcuMjMxMjU0OCwyNi4wODIyMzc4IEMxMy4yNzExMjc5LDMwLjA1NzExNDggMTEsMzQuMjg3MTA2NSAxMSwzNy45MzI4MDEyIEMxMSw0NC45MDMyMzczIDE5Ljg3MTM0MDEsNDkuMTI1IDI4LjU3ODY5NzgsNDkuMTI1IEMzOS45OTE3MzI5LDQ5LjEyNSA0Ny42MDA0MjMsNDIuNDI2MTQwOSA0Ny42MDA0MjMsMzcuMTQyNzYzNiBDNDcuNjAwNDIzLDMzLjk0OTY5NTIgNDQuOTYwMzM5NywzMi4xNjM4ODE2IDQyLjU0OTgyNywzMS40MTQ5OTEzIEM0MS45NTk0OTc2LDMxLjIzMzk0MjEgNDEuNTE2NzUxNiwzMS4xNDM0MTY0IDQxLjgyODMxMzMsMzAuMzYxNjA3OSBDNDIuNTAwNjMzOSwyOC42NjYzMiA0Mi42MjM2MTc2LDI3LjE5MzIyODYgNDEuODkzOTA1NCwyNi4xNDgwNzQyIEM0MC41MzI4NjkyLDI0LjE4OTQ0MDUgMzYuNzIwMzIzNiwyNC4yODgxOTUyIDMyLjQ0ODYzNSwyNi4wODIyMzc4IEMzMi40NDg2MzUsMjYuMDgyMjM3OCAzMS4xMjAzOTQ5LDI2LjY5MTIyNjEgMzEuNDY0NzUyNiwyNS42MjEzODI1IEMzMi4xMjA2NzQyLDIzLjQ5ODE1NzYgMzIuMDMwNDg0NSwyMS43MTIzNDIgMzEuMDA1NjA3NSwyMC42ODM2NDc4IEMzMC4yODQwOTM4LDE5Ljk1MTIxNzYgMjkuMjUxMDE4NCwxOS42ODc4NzE4IDI3LjkyMjc3NjIsMTkuODI3NzczNyBaIE00Mi4wOTA2ODE5LDIwLjY4MzY0NzggQzQxLjYyMzMzODMsMjAuNjU4OTU4NiA0MS4xNzIzOTE3LDIwLjcxNjU2NiA0MC43MTMyNDY2LDIwLjgxNTMyMDcgQzM5Ljk2NzEzNTMsMjAuOTcxNjgyOCAzOS40OTk3OTE3LDIxLjc3ODE3ODQgMzkuNjYzNzcyMSwyMi41MjcwNjg3IEMzOS44Mjc3NTI1LDIzLjI3NTk1OSA0MC41NTc0NjQ3LDIzLjc0NTA0MzMgNDEuMzAzNTc2LDIzLjU4MDQ1MjEgQzQyLjE5NzI2ODYsMjMuMzkxMTcxOCA0My4yMDU3NDg1LDIzLjYzODA1OTYgNDMuODYxNjcwMSwyNC4zNzA0ODk3IEM0NC41MTc1OTE2LDI1LjEwMjkxOTggNDQuNjczMzczNSwyNi4wNjU3Nzk3IDQ0LjM4NjQwNzMsMjYuOTM4MTExOCBDNDQuMTQ4NjM2MywyNy42NzA1NDE5IDQ0LjUwOTM5MzIsMjguNDc3MDM5NyA0NS4yMzkxMDU0LDI4LjcxNTY5NjMgQzQ1Ljk2ODgxNzYsMjguOTQ2MTIzOSA0Ni43ODA1MjEsMjguNTkyMjUyNCA0Ny4wMTAwOTM2LDI3Ljg1OTgyMjMgQzQ3LjU4NDAyNiwyNi4wNzQwMDg3IDQ3LjIzOTY2NjEsMjQuMDI0ODQ5MyA0NS44OTUwMjY5LDIyLjUyNzA2ODcgQzQ0Ljg4NjU0NywyMS40MDc4NDg5IDQzLjQ4NDUxNjIsMjAuNzQ5NDg0MiA0Mi4wOTA2ODE5LDIwLjY4MzY0NzggWiBNMjkuNDk2OTg4LDI5Ljk2NjU4OTEgQzM1LjMxMDA5MjIsMzAuMTcyMzI3NSAzOS45OTE3MzI5LDMzLjA2OTEzMTkgNDAuMzg1Mjg1OCwzNy4wNzY5MjcyIEM0MC44MzYyMzI0LDQxLjY2MDc5MDQgMzUuNTk3MDU4NSw0NS45MzE5MzE1IDI4LjY0NDI4OTksNDYuNjIzMjE0NCBDMjEuNjkxNTIxNCw0Ny4zMTQ0OTczIDE1LjY0ODg0NDYsNDQuMTU0MzQ3IDE1LjE5Nzg5OCwzOS41Nzg3MTI4IEMxNC43NDY5NTE0LDM0Ljk5NDg0OTUgMjAuMDU5OTE2LDMwLjcyMzcwODQgMjcuMDA0NDg2LDMwLjAzMjQyNTYgQzI3Ljg3MzU4MzEsMjkuOTUwMTMxIDI4LjY2ODg4NzUsMjkuOTMzNjcwOSAyOS40OTY5ODgsMjkuOTY2NTg5MSBaIE0yNS41NjE0NTg2LDM0LjM3NzYzMjIgQzIzLjE4Mzc0NCwzNC41OTE2MDE3IDIwLjkzNzIxMTYsMzUuOTU3NzA3MyAxOS45MjA1MzMyLDM3LjkzMjgwMTIgQzE4LjUzNDg5OTQsNDAuNjIzODY3MiAxOS45MDQxMzYyLDQzLjYwMjk2NjEgMjMuMDY4OTU2Nyw0NC41ODIyODQgQzI2LjM0MDM2Niw0NS41OTQ1MjAyIDMwLjE4NTcwNTYsNDQuMDYzODIxMyAzMS41MzAzNDQ4LDQxLjE1ODc4NzkgQzMyLjg1MDM4NjQsMzguMzE5NTkwOSAzMS4xNjEzODk0LDM1LjM3MzQwODIgMjcuOTIyNzc2MiwzNC41NzUxNDE2IEMyNy4xNDM4Njg4LDM0LjM3NzYzMjIgMjYuMzU2NzYzLDM0LjMwMzU2NjcgMjUuNTYxNDU4NiwzNC4zNzc2MzIyIFogTTI0LjA1MjgzOSwzOC43MjI4Mzg4IEMyNC4zMzE2MDY3LDM4LjczMTA2NzggMjQuNTg1Nzc0OCwzOC44MjE1OTM1IDI0LjgzOTk0NDksMzguOTIwMzQ4MiBDMjUuODY0ODIxOCwzOS4zNDAwNTYxIDI2LjE4NDU4NDEsNDAuNDQyODE1OCAyNS41NjE0NTg2LDQxLjQyMjEzMzggQzI0LjkyMTkzNjEsNDIuMzkzMjIyNyAyMy41NjkwOTYzLDQyLjg2MjMwNjkgMjIuNTQ0MjE5NCw0Mi40MDk2ODA3IEMyMS41MzU3Mzk1LDQxLjk2NTI4NTYgMjEuMjQ4Nzc1NCw0MC44NTQyOTQ4IDIxLjg4ODI5NzksMzkuOTA3ODk1MSBDMjIuMzYzODQyMSwzOS4yMDAxNTQyIDIzLjIyNDczODYsMzguNzE0NjA5NyAyNC4wNTI4MzksMzguNzIyODM4OCBaJyxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgV2VpYm9JY29uO1xuIiwiaW1wb3J0IGFzc2VydCBmcm9tICcuL3V0aWxzL2Fzc2VydCc7XG5pbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5pbXBvcnQgY3JlYXRlU2hhcmVCdXR0b24gZnJvbSAnLi9ob2NzL2NyZWF0ZVNoYXJlQnV0dG9uJztcbmZ1bmN0aW9uIHdlaWJvTGluayh1cmwsIF9hKSB7XG4gICAgdmFyIHRpdGxlID0gX2EudGl0bGUsIGltYWdlID0gX2EuaW1hZ2U7XG4gICAgYXNzZXJ0KHVybCwgJ3dlaWJvLnVybCcpO1xuICAgIHJldHVybiAoJ2h0dHA6Ly9zZXJ2aWNlLndlaWJvLmNvbS9zaGFyZS9zaGFyZS5waHAnICtcbiAgICAgICAgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBwaWM6IGltYWdlLFxuICAgICAgICB9KSk7XG59XG52YXIgV2VpYm9TaGFyZUJ1dHRvbiA9IGNyZWF0ZVNoYXJlQnV0dG9uKCd3ZWlibycsIHdlaWJvTGluaywgZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoe1xuICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICBpbWFnZTogcHJvcHMuaW1hZ2UsXG59KTsgfSwge1xuICAgIHdpbmRvd1dpZHRoOiA2NjAsXG4gICAgd2luZG93SGVpZ2h0OiA1NTAsXG4gICAgd2luZG93UG9zaXRpb246ICdzY3JlZW5DZW50ZXInLFxufSk7XG5leHBvcnQgZGVmYXVsdCBXZWlib1NoYXJlQnV0dG9uO1xuIiwiaW1wb3J0IGNyZWF0ZUljb24gZnJvbSAnLi9ob2NzL2NyZWF0ZUljb24nO1xudmFyIFdoYXRzYXBwSWNvbiA9IGNyZWF0ZUljb24oe1xuICAgIGNvbG9yOiAnIzI1RDM2NicsXG4gICAgbmV0d29ya05hbWU6ICd3aGF0c2FwcCcsXG4gICAgcGF0aDogJ200Mi4zMjI4NiwzMy45MzI4N2MtMC41MTc4LC0wLjI1ODkgLTMuMDQ3MjYsLTEuNDk2NDQgLTMuNTIxMDUsLTEuNjY3MzJjLTAuNDcxMiwtMC4xNzM0NiAtMC44MTU1NCwtMC4yNTg5IC0xLjE1OTg3LDAuMjU4OWMtMC4zNDE3NSwwLjUxMDA0IC0xLjMzMDc1LDEuNjY0NzQgLTEuNjMxMDgsMi4wMDY0OGMtMC4zMDAzMiwwLjMzNjU4IC0wLjYwMDY0LDAuMzYyNDcgLTEuMTEzMjcsMC4xMjk0NWMtMC41MTc4LC0wLjI1ODkgLTIuMTc5OTQsLTAuODAyNTkgLTQuMTQ3NTksLTIuNTYzMTJjLTEuNTMyNjksLTEuMzcyMTcgLTIuNTYzMTIsLTMuMDU1MDMgLTIuODY2MDMsLTMuNTcyODNjLTAuMzAwMzMsLTAuNTE3OCAtMC4wMzM2NiwtMC44MDI1OSAwLjIyNTI0LC0xLjA2MTQ5YzAuMjMzMDEsLTAuMjMzMDEgMC41MTc4LC0wLjU5NTQ3IDAuNzc2NywtMC45MDYxNmMwLjI1MzcyLC0wLjMxMDY4IDAuMzM2NTcsLTAuNTE3OCAwLjUxMjYyLC0wLjg1NDM3YzAuMTcwODgsLTAuMzYyNDYgMC4wODU0NCwtMC42NDcyNSAtMC4wNDQwMiwtMC45MDYxNWMtMC4xMjk0NSwtMC4yNTg5IC0xLjE1OTg3LC0yLjc5NjEzIC0xLjU4OTY0LC0zLjgwNTg0Yy0wLjQxNDI0LC0xLjAwOTcxIC0wLjg0MTQyLC0wLjg4MDI3IC0xLjE1OTg3LC0wLjg4MDI3Yy0wLjI5NzczLC0wLjAyNTg4IC0wLjY0MjA4LC0wLjAyNTg4IC0wLjk4MzgyLC0wLjAyNTg4Yy0wLjM0NjkzLDAgLTAuOTA2MTYsMC4xMjk0NSAtMS4zNzczNiwwLjYyMTM2Yy0wLjQ3MTIsMC41MTc4IC0xLjgwMTk0LDEuNzYwNTMgLTEuODAxOTQsNC4yNzE4NmMwLDIuNTExMzQgMS44NDU5Niw0Ljk0NSAyLjEwMjI3LDUuMzA3NDdjMC4yNTg5LDAuMzM2NTcgMy42MzQ5Nyw1LjUxNDU4IDguODAyNjIsNy43NDExM2MxLjIzMjM3LDAuNTE3OCAyLjE5MDMsMC44Mjg0OCAyLjk0MTExLDEuMDg3MzhjMS4yMzIzNywwLjM4ODM2IDIuMzU1OTksMC4zMzY1NyAzLjI0NDAyLDAuMjA3MTJjMC45OTE1OSwtMC4xNTUzNCAzLjA0OTg1LC0xLjI0MjcyIDMuNDc5NjMsLTIuNDU5NTZjMC40NDAxMywtMS4yMTY4MyAwLjQ0MDEzLC0yLjIyNjU0IDAuMzEwNjgsLTIuNDU5NTVjLTAuMTI5NDUsLTAuMjMzMDEgLTAuNDY2MDEsLTAuMzYyNDcgLTAuOTgzODIsLTAuNTk1NDhtLTkuNDAwNjgsMTIuODQ0MDdsLTAuMDI1ODksMGMtMy4wNTUwMywwIC02LjA4NDE3LC0wLjgyODQ5IC04LjcyNDk1LC0yLjM4MTg5bC0wLjYyMTM2LC0wLjM3MDIzbC02LjQ3MjUyLDEuNjgyODZsMS43MzQ2MywtNi4yOTEyOWwtMC40MTQyNCwtMC42NDcyNWMtMS43MDg3NSwtMi43MTg0NiAtMi42MTQ5LC01Ljg1MTE2IC0yLjYxNDksLTkuMDc3MDZjMCwtOS4zOTgwOSA3LjY4OTM0LC0xNy4wNjE1NSAxNy4xNTk5MywtMTcuMDYxNTVjNC41ODI1MywwIDguODgwMjksMS43ODY0MiAxMi4xMTY1NSw1LjAyMjY4YzMuMjM2MjUsMy4yMTAzNiA1LjAyMjY3LDcuNTA4MTIgNS4wMjI2NywxMi4wNjQ3NmMtMC4wMDc4LDkuMzk4MSAtNy42OTcxMiwxNy4wNjE1NSAtMTcuMTQ2OTksMTcuMDYxNTVtMTQuNTg5MDYsLTMxLjU4ODQ2Yy0zLjkzNTI5LC0zLjgwNTg0IC05LjExMzMsLTUuOTU0NzEgLTE0LjYyNzg5LC01Ljk1NDcxYy0xMS4zNjA1NSwwIC0yMC42MDg0OCw5LjIwNjUgLTIwLjYxNjI1LDIwLjUyNTY0YzAsMy42MTY4NCAwLjk0NzU3LDcuMTQ1NjUgMi43NTIxMSwxMC4yNjI4MmwtMi45MjU1NywxMC42MzU2NGwxMC45MzMzNywtMi44NTMwOWMzLjAxMzYsMS42MzEwOCA2LjQwNTIsMi40OTU4IDkuODU2MzQsMi40OTgzOWwwLjAxMDM3LDBjMTEuMzY1NzQsMCAyMC42MTg4NCwtOS4yMDkxIDIwLjYyNDAzLC0yMC41MzA4MmMwLC01LjQ4MDkzIC0yLjE0MTExLC0xMC42NDA4MSAtNi4wMzIzOSwtMTQuNTE5MTUnLFxufSk7XG5leHBvcnQgZGVmYXVsdCBXaGF0c2FwcEljb247XG4iLCJpbXBvcnQgYXNzZXJ0IGZyb20gJy4vdXRpbHMvYXNzZXJ0JztcbmltcG9ydCBvYmplY3RUb0dldFBhcmFtcyBmcm9tICcuL3V0aWxzL29iamVjdFRvR2V0UGFyYW1zJztcbmltcG9ydCBjcmVhdGVTaGFyZUJ1dHRvbiBmcm9tICcuL2hvY3MvY3JlYXRlU2hhcmVCdXR0b24nO1xuZnVuY3Rpb24gaXNNb2JpbGVPclRhYmxldCgpIHtcbiAgICByZXR1cm4gLyhhbmRyb2lkfGlwaG9uZXxpcGFkfG1vYmlsZSkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xufVxuZnVuY3Rpb24gd2hhdHNhcHBMaW5rKHVybCwgX2EpIHtcbiAgICB2YXIgdGl0bGUgPSBfYS50aXRsZSwgc2VwYXJhdG9yID0gX2Euc2VwYXJhdG9yO1xuICAgIGFzc2VydCh1cmwsICd3aGF0c2FwcC51cmwnKTtcbiAgICByZXR1cm4gKCdodHRwczovLycgK1xuICAgICAgICAoaXNNb2JpbGVPclRhYmxldCgpID8gJ2FwaScgOiAnd2ViJykgK1xuICAgICAgICAnLndoYXRzYXBwLmNvbS9zZW5kJyArXG4gICAgICAgIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICAgICAgICAgIHRleHQ6IHRpdGxlID8gdGl0bGUgKyBzZXBhcmF0b3IgKyB1cmwgOiB1cmwsXG4gICAgICAgIH0pKTtcbn1cbnZhciBXaGF0c2FwcFNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oJ3doYXRzYXBwJywgd2hhdHNhcHBMaW5rLCBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuICh7XG4gICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgIHNlcGFyYXRvcjogcHJvcHMuc2VwYXJhdG9yIHx8ICcgJyxcbn0pOyB9LCB7XG4gICAgd2luZG93V2lkdGg6IDU1MCxcbiAgICB3aW5kb3dIZWlnaHQ6IDQwMCxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgV2hhdHNhcHBTaGFyZUJ1dHRvbjtcbiIsImltcG9ydCBjcmVhdGVJY29uIGZyb20gJy4vaG9jcy9jcmVhdGVJY29uJztcbnZhciBXb3JrcGxhY2VJY29uID0gY3JlYXRlSWNvbih7XG4gICAgY29sb3I6ICcjM2IzZDRhJyxcbiAgICBuZXR3b3JrTmFtZTogJ3dvcmtwbGFjZScsXG4gICAgcGF0aDogJ00zNC4wMTksMTAuMjkyYzAuMjEsMC4wMTcsMC40MjMsMC4wMzQsMC42MzYsMC4wNDkgYzMuNjU3LDAuMjYyLDYuOTc2LDEuNDY0LDkuOTI5LDMuNjM1YzMuMzMxLDIuNDQ4LDUuNjM1LDUuNjUsNi45MTQsOS41ODRjMC42OTksMi4xNTIsMC45ODMsNC4zNjUsMC44ODUsNi42MjMgYy0wLjEzNiwzLjE3MS0xLjAwOCw2LjEzLTIuNjE5LDguODY3Yy0wLjQ0MiwwLjc1LTAuOTA4LDEuNDkyLTEuNDk1LDIuMTQxYy0wLjU4OCwwLjY1MS0xLjI5LDEuMTQxLTIuMTQ2LDEuMzgzIGMtMS40OTYsMC40MjYtMy4yNDctMC4yODMtMy45NjEtMS42NDJjLTAuMjYtMC40OTQtMC40NDItMS4wMjgtMC42NTQtMS41NDhjLTEuMTU2LTIuODM4LTIuMzExLTUuNjc5LTMuNDY1LTguNTE5IGMtMC4wMTctMC4wNDItMC4wMzctMC4wODItMC4wNjUtMC4xNDVjLTAuMTAxLDAuMjQ1LTAuMTkyLDAuNDcyLTAuMjg0LDAuNjk4Yy0xLjIzNywzLjA1MS0yLjQ3NSw2LjEwMy0zLjcxMSw5LjE1NSBjLTAuNDY2LDEuMTUzLTEuMzUxLDEuODE1LTIuNTM4LDIuMDQ1Yy0xLjM5MSwwLjI2Ny0yLjU3Ny0wLjE1NC0zLjQ5Ni0xLjI0N2MtMC4xNzQtMC4yMDktMC4zMS0wLjQ2NC0wLjQxNS0wLjcxNyBjLTIuMTI4LTUuMjItNC4yNDgtMTAuNDQyLTYuMzctMTUuNjY1Yy0wLjAxMi0wLjAyOS0wLjAyMS0wLjA1OS0wLjAzNi0wLjEwNGMwLjA1NC0wLjAwMywwLjEwMy0wLjAwNiwwLjE1LTAuMDA2IGMxLjQ5OC0wLjAwMSwyLjk5NywwLDQuNDk1LTAuMDA0YzAuMTItMC4wMDEsMC4xNzYsMC4wMywwLjIyMiwwLjE0NmMxLjU1NywzLjg0NiwzLjExNyw3LjY5MSw0LjY3OSwxMS41MzYgYzAuMDE4LDAuMDQ2LDAuMDM5LDAuMDkxLDAuMDY3LDAuMTU5YzAuMjczLTAuNjczLDAuNTM2LTEuMzIsMC43OTctMS45NjhjMS4wNjQtMi42MjcsMi4xMzctNS4yNSwzLjE5LTcuODgzIGMwLjQ4Mi0xLjIwOCwxLjM3Ni0xLjkxNywyLjYyMS0yLjEzNWMxLjQ1NC0wLjI1NSwyLjY0NCwwLjI1NywzLjUyMiwxLjQ0OWMwLjEzMywwLjE4LDAuMjI5LDAuMzkzLDAuMzEzLDAuNjAzIGMxLjQyNSwzLjQ5NSwyLjg0OCw2Ljk5MSw0LjI2OSwxMC40ODhjMC4wMiwwLjA0NywwLjA0LDAuMDkzLDAuMDczLDAuMTcyYzAuMTk2LTAuMzI3LDAuMzg1LTAuNjI1LDAuNTU5LTAuOTM1IGMwLjc4My0xLjM5NywxLjMyMy0yLjg4NiwxLjYxNC00LjQ2MWMwLjI0Mi0xLjMxMiwwLjMwNC0yLjYzNCwwLjE4Ny0zLjk2MmMtMC4yNDItMi43MjEtMS4xNi01LjE5Mi0yLjc5Mi03LjM4IGMtMi4xOTMtMi45MzktNS4wODYtNC44MjQtOC42NzMtNS42MjVjLTEuNTUzLTAuMzQ2LTMuMTI0LTAuNDA1LTQuNzA1LTAuMjU3Yy0zLjE2MiwwLjI5OC02LjAzNiwxLjM2Ni04LjU4NSwzLjI1OCBjLTMuNDE0LDIuNTM0LTUuNjM4LDUuODcxLTYuNjIzLDEwLjAxNmMtMC40MTcsMS43Ni0wLjU0NiwzLjU0Ny0wLjM4NCw1LjM0OGMwLjQxNyw0LjYwMSwyLjM1OSw4LjQ0NCw1LjgwNCwxMS41MTcgYzIuMzI1LDIuMDczLDUuMDM3LDMuMzkzLDguMDk0LDMuOTg5YzEuNjE3LDAuMzE3LDMuMjQ3LDAuMzk1LDQuODg5LDAuMjQyYzEtMC4wOTQsMS45ODItMC4yNjgsMi45NTItMC41MjkgYzAuMDQtMC4wMSwwLjA4MS0wLjAxOCwwLjEyOC0wLjAyOGMwLDEuNTI2LDAsMy4wNDcsMCw0LjU4NmMtMC40MDIsMC4wNzQtMC44MDUsMC4xNTQtMS4yMSwwLjIyMSBjLTAuODYxLDAuMTQtMS43MjgsMC4yMzEtMi42MDEsMC4yNThjLTAuMDM1LDAuMDAyLTAuMDcxLDAuMDEzLTAuMTA4LDAuMDIxYy0wLjQ5MywwLTAuOTgzLDAtMS40NzYsMCBjLTAuMDQ5LTAuMDA3LTAuMS0wLjAxOC0wLjE0OS0wLjAyMmMtMC4zMTUtMC4wMTktMC42MjktMC4wMzMtMC45NDUtMC4wNThjLTEuMzYyLTAuMTA1LTIuNzAyLTAuMzQ2LTQuMDE3LTAuNzE2IGMtMy4yNTQtMC45MTQtNi4xNDUtMi40OTUtOC42Ni00Ljc1MmMtMi4xOTUtMS45NzEtMy45MjYtNC4yOS01LjE3Ni02Ljk2M2MtMS4xNTItMi40NjYtMS44MjItNS4wNTctMS45OTMtNy43NzQgYy0wLjAxNC0wLjIyNi0wLjAzMy0wLjQ1MS0wLjA1LTAuNjc2YzAtMC41MDIsMC0xLjAwMywwLTEuNTA0YzAuMDA4LTAuMDQ5LDAuMDItMC4wOTksMC4wMjItMC4xNDggYzAuMDM2LTEuMDI1LDAuMTUyLTIuMDQzLDAuMzM4LTMuMDUyYzAuNDgxLTIuNjE2LDEuNDA5LTUuMDY2LDIuOC03LjMzMWMyLjIyNi0zLjYyNSw1LjI1LTYuMzg2LDkuMDc0LTguMjU0IGMyLjUzNi0xLjI0LDUuMjE3LTEuOTQ3LDguMDM3LTIuMTI2YzAuMjMtMC4wMTUsMC40NjEtMC4wMzQsMC42OTEtMC4wNTFDMzMuMDUyLDEwLjI5MiwzMy41MzUsMTAuMjkyLDM0LjAxOSwxMC4yOTJ6Jyxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgV29ya3BsYWNlSWNvbjtcbiIsImltcG9ydCBhc3NlcnQgZnJvbSAnLi91dGlscy9hc3NlcnQnO1xuaW1wb3J0IG9iamVjdFRvR2V0UGFyYW1zIGZyb20gJy4vdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMnO1xuaW1wb3J0IGNyZWF0ZVNoYXJlQnV0dG9uIGZyb20gJy4vaG9jcy9jcmVhdGVTaGFyZUJ1dHRvbic7XG5mdW5jdGlvbiB3b3JrcGxhY2VMaW5rKHVybCwgX2EpIHtcbiAgICB2YXIgcXVvdGUgPSBfYS5xdW90ZSwgaGFzaHRhZyA9IF9hLmhhc2h0YWc7XG4gICAgYXNzZXJ0KHVybCwgJ3dvcmtwbGFjZS51cmwnKTtcbiAgICByZXR1cm4gKCdodHRwczovL3dvcmsuZmFjZWJvb2suY29tL3NoYXJlci5waHAnICtcbiAgICAgICAgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgICAgICAgICAgdTogdXJsLFxuICAgICAgICAgICAgcXVvdGU6IHF1b3RlLFxuICAgICAgICAgICAgaGFzaHRhZzogaGFzaHRhZyxcbiAgICAgICAgfSkpO1xufVxudmFyIFdvcmtwbGFjZVNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oJ3dvcmtwbGFjZScsIHdvcmtwbGFjZUxpbmssIGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gKHtcbiAgICBxdW90ZTogcHJvcHMucXVvdGUsXG4gICAgaGFzaHRhZzogcHJvcHMuaGFzaHRhZyxcbn0pOyB9LCB7XG4gICAgd2luZG93V2lkdGg6IDU1MCxcbiAgICB3aW5kb3dIZWlnaHQ6IDQwMCxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgV29ya3BsYWNlU2hhcmVCdXR0b247XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUljb24oaWNvbkNvbmZpZykge1xuICAgIHZhciBJY29uID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBiZ1N0eWxlID0gX2EuYmdTdHlsZSwgYm9yZGVyUmFkaXVzID0gX2EuYm9yZGVyUmFkaXVzLCBpY29uRmlsbENvbG9yID0gX2EuaWNvbkZpbGxDb2xvciwgcm91bmQgPSBfYS5yb3VuZCwgc2l6ZSA9IF9hLnNpemUsIHJlc3QgPSBfX3Jlc3QoX2EsIFtcImJnU3R5bGVcIiwgXCJib3JkZXJSYWRpdXNcIiwgXCJpY29uRmlsbENvbG9yXCIsIFwicm91bmRcIiwgXCJzaXplXCJdKTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9fYXNzaWduKHsgdmlld0JveDogXCIwIDAgNjQgNjRcIiwgd2lkdGg6IHNpemUsIGhlaWdodDogc2l6ZSB9LCByZXN0KSxcbiAgICAgICAgICAgIHJvdW5kID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwgeyBjeDogXCIzMlwiLCBjeTogXCIzMlwiLCByOiBcIjMxXCIsIGZpbGw6IGljb25Db25maWcuY29sb3IsIHN0eWxlOiBiZ1N0eWxlIH0pKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7IHdpZHRoOiBcIjY0XCIsIGhlaWdodDogXCI2NFwiLCByeDogYm9yZGVyUmFkaXVzLCByeTogYm9yZGVyUmFkaXVzLCBmaWxsOiBpY29uQ29uZmlnLmNvbG9yLCBzdHlsZTogYmdTdHlsZSB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IGljb25Db25maWcucGF0aCwgZmlsbDogaWNvbkZpbGxDb2xvciB9KSkpO1xuICAgIH07XG4gICAgSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGJnU3R5bGU6IHt9LFxuICAgICAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgICAgIGljb25GaWxsQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIHNpemU6IDY0LFxuICAgIH07XG4gICAgcmV0dXJuIEljb247XG59XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2hhcmVCdXR0b24gZnJvbSAnLi4vU2hhcmVCdXR0b24nO1xuZnVuY3Rpb24gY3JlYXRlU2hhcmVCdXR0b24obmV0d29ya05hbWUsIGxpbmssIG9wdHNNYXAsIGRlZmF1bHRQcm9wcykge1xuICAgIGZ1bmN0aW9uIENyZWF0ZWRCdXR0b24ocHJvcHMsIHJlZikge1xuICAgICAgICB2YXIgb3B0cyA9IG9wdHNNYXAocHJvcHMpO1xuICAgICAgICB2YXIgcGFzc2VkUHJvcHMgPSBfX2Fzc2lnbih7fSwgcHJvcHMpO1xuICAgICAgICAvLyByZW1vdmUga2V5cyBmcm9tIHBhc3NlZCBwcm9wcyB0aGF0IGFyZSBwYXNzZWQgYXMgb3B0c1xuICAgICAgICB2YXIgb3B0c0tleXMgPSBPYmplY3Qua2V5cyhvcHRzKTtcbiAgICAgICAgb3B0c0tleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBkZWxldGUgcGFzc2VkUHJvcHNba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZUJ1dHRvbiwgX19hc3NpZ24oe30sIGRlZmF1bHRQcm9wcywgcGFzc2VkUHJvcHMsIHsgZm9yd2FyZGVkUmVmOiByZWYsIG5ldHdvcmtOYW1lOiBuZXR3b3JrTmFtZSwgbmV0d29ya0xpbms6IGxpbmssIG9wdHM6IG9wdHNNYXAocHJvcHMpIH0pKSk7XG4gICAgfVxuICAgIENyZWF0ZWRCdXR0b24uZGlzcGxheU5hbWUgPSBcIlNoYXJlQnV0dG9uLVwiICsgbmV0d29ya05hbWU7XG4gICAgcmV0dXJuIGZvcndhcmRSZWYoQ3JlYXRlZEJ1dHRvbik7XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaGFyZUJ1dHRvbjtcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbnZhciBkZWZhdWx0Q2hpbGRyZW4gPSBmdW5jdGlvbiAoc2hhcmVDb3VudCkgeyByZXR1cm4gc2hhcmVDb3VudDsgfTtcbnZhciBTb2NpYWxNZWRpYVNoYXJlQ291bnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNvY2lhbE1lZGlhU2hhcmVDb3VudCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTb2NpYWxNZWRpYVNoYXJlQ291bnQocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7IGNvdW50OiAwLCBpc0xvYWRpbmc6IGZhbHNlIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgU29jaWFsTWVkaWFTaGFyZUNvdW50LnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVDb3VudCh0aGlzLnByb3BzLnVybCk7XG4gICAgfTtcbiAgICBTb2NpYWxNZWRpYVNoYXJlQ291bnQucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIChwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudXJsICE9PSBwcmV2UHJvcHMudXJsKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvdW50KHRoaXMucHJvcHMudXJsKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU29jaWFsTWVkaWFTaGFyZUNvdW50LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gICAgfTtcbiAgICBTb2NpYWxNZWRpYVNoYXJlQ291bnQucHJvdG90eXBlLnVwZGF0ZUNvdW50ID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0Q291bnQodXJsLCBmdW5jdGlvbiAoY291bnQpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5faXNNb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBjb3VudDogY291bnQsXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU29jaWFsTWVkaWFTaGFyZUNvdW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuc3RhdGUsIGNvdW50ID0gX2EuY291bnQsIGlzTG9hZGluZyA9IF9hLmlzTG9hZGluZztcbiAgICAgICAgdmFyIF9iID0gdGhpcy5wcm9wcywgX2MgPSBfYi5jaGlsZHJlbiwgY2hpbGRyZW4gPSBfYyA9PT0gdm9pZCAwID8gZGVmYXVsdENoaWxkcmVuIDogX2MsIGNsYXNzTmFtZSA9IF9iLmNsYXNzTmFtZSwgXyA9IF9iLmdldENvdW50LCByZXN0ID0gX19yZXN0KF9iLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcImdldENvdW50XCJdKTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY3goJ3JlYWN0LXNoYXJlX19TaGFyZUNvdW50JywgY2xhc3NOYW1lKSB9LCByZXN0KSwgIWlzTG9hZGluZyAmJiBjb3VudCAhPT0gdW5kZWZpbmVkICYmIGNoaWxkcmVuKGNvdW50KSkpO1xuICAgIH07XG4gICAgcmV0dXJuIFNvY2lhbE1lZGlhU2hhcmVDb3VudDtcbn0oQ29tcG9uZW50KSk7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTaGFyZUNvdW50KGdldENvdW50KSB7XG4gICAgdmFyIFNoYXJlQ291bnQgPSBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFNvY2lhbE1lZGlhU2hhcmVDb3VudCwgX19hc3NpZ24oeyBnZXRDb3VudDogZ2V0Q291bnQgfSwgcHJvcHMpKSk7IH07XG4gICAgU2hhcmVDb3VudC5kaXNwbGF5TmFtZSA9IFwiU2hhcmVDb3VudChcIiArIGdldENvdW50Lm5hbWUgKyBcIilcIjtcbiAgICByZXR1cm4gU2hhcmVDb3VudDtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgRW1haWxJY29uIH0gZnJvbSAnLi9FbWFpbEljb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbWFpbFNoYXJlQnV0dG9uIH0gZnJvbSAnLi9FbWFpbFNoYXJlQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmFjZWJvb2tJY29uIH0gZnJvbSAnLi9GYWNlYm9va0ljb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGYWNlYm9va01lc3Nlbmdlckljb24gfSBmcm9tICcuL0ZhY2Vib29rTWVzc2VuZ2VySWNvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZhY2Vib29rTWVzc2VuZ2VyU2hhcmVCdXR0b24gfSBmcm9tICcuL0ZhY2Vib29rTWVzc2VuZ2VyU2hhcmVCdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGYWNlYm9va1NoYXJlQnV0dG9uIH0gZnJvbSAnLi9GYWNlYm9va1NoYXJlQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmFjZWJvb2tTaGFyZUNvdW50IH0gZnJvbSAnLi9GYWNlYm9va1NoYXJlQ291bnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIYXRlbmFJY29uIH0gZnJvbSAnLi9IYXRlbmFJY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGF0ZW5hU2hhcmVCdXR0b24gfSBmcm9tICcuL0hhdGVuYVNoYXJlQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGF0ZW5hU2hhcmVDb3VudCB9IGZyb20gJy4vSGF0ZW5hU2hhcmVDb3VudCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEluc3RhcGFwZXJJY29uIH0gZnJvbSAnLi9JbnN0YXBhcGVySWNvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEluc3RhcGFwZXJTaGFyZUJ1dHRvbiB9IGZyb20gJy4vSW5zdGFwYXBlclNoYXJlQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGluZUljb24gfSBmcm9tICcuL0xpbmVJY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGluZVNoYXJlQnV0dG9uIH0gZnJvbSAnLi9MaW5lU2hhcmVCdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5rZWRpbkljb24gfSBmcm9tICcuL0xpbmtlZGluSWNvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExpbmtlZGluU2hhcmVCdXR0b24gfSBmcm9tICcuL0xpbmtlZGluU2hhcmVCdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaXZlam91cm5hbEljb24gfSBmcm9tICcuL0xpdmVqb3VybmFsSWNvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExpdmVqb3VybmFsU2hhcmVCdXR0b24gfSBmcm9tICcuL0xpdmVqb3VybmFsU2hhcmVCdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYWlscnVJY29uIH0gZnJvbSAnLi9NYWlscnVJY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFpbHJ1U2hhcmVCdXR0b24gfSBmcm9tICcuL01haWxydVNoYXJlQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT0tJY29uIH0gZnJvbSAnLi9PS0ljb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBPS1NoYXJlQnV0dG9uIH0gZnJvbSAnLi9PS1NoYXJlQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT0tTaGFyZUNvdW50IH0gZnJvbSAnLi9PS1NoYXJlQ291bnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQaW50ZXJlc3RJY29uIH0gZnJvbSAnLi9QaW50ZXJlc3RJY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGludGVyZXN0U2hhcmVCdXR0b24gfSBmcm9tICcuL1BpbnRlcmVzdFNoYXJlQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGludGVyZXN0U2hhcmVDb3VudCB9IGZyb20gJy4vUGludGVyZXN0U2hhcmVDb3VudCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBvY2tldEljb24gfSBmcm9tICcuL1BvY2tldEljb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQb2NrZXRTaGFyZUJ1dHRvbiB9IGZyb20gJy4vUG9ja2V0U2hhcmVCdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWRkaXRJY29uIH0gZnJvbSAnLi9SZWRkaXRJY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVkZGl0U2hhcmVCdXR0b24gfSBmcm9tICcuL1JlZGRpdFNoYXJlQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVkZGl0U2hhcmVDb3VudCB9IGZyb20gJy4vUmVkZGl0U2hhcmVDb3VudCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRlbGVncmFtSWNvbiB9IGZyb20gJy4vVGVsZWdyYW1JY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGVsZWdyYW1TaGFyZUJ1dHRvbiB9IGZyb20gJy4vVGVsZWdyYW1TaGFyZUJ1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFR1bWJsckljb24gfSBmcm9tICcuL1R1bWJsckljb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUdW1ibHJTaGFyZUJ1dHRvbiB9IGZyb20gJy4vVHVtYmxyU2hhcmVCdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUdW1ibHJTaGFyZUNvdW50IH0gZnJvbSAnLi9UdW1ibHJTaGFyZUNvdW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHdpdHRlckljb24gfSBmcm9tICcuL1R3aXR0ZXJJY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHdpdHRlclNoYXJlQnV0dG9uIH0gZnJvbSAnLi9Ud2l0dGVyU2hhcmVCdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWaWJlckljb24gfSBmcm9tICcuL1ZpYmVySWNvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZpYmVyU2hhcmVCdXR0b24gfSBmcm9tICcuL1ZpYmVyU2hhcmVCdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWS0ljb24gfSBmcm9tICcuL1ZLSWNvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZLU2hhcmVCdXR0b24gfSBmcm9tICcuL1ZLU2hhcmVCdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWS1NoYXJlQ291bnQgfSBmcm9tICcuL1ZLU2hhcmVDb3VudCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFdlaWJvSWNvbiB9IGZyb20gJy4vV2VpYm9JY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV2VpYm9TaGFyZUJ1dHRvbiB9IGZyb20gJy4vV2VpYm9TaGFyZUJ1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFdoYXRzYXBwSWNvbiB9IGZyb20gJy4vV2hhdHNhcHBJY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV2hhdHNhcHBTaGFyZUJ1dHRvbiB9IGZyb20gJy4vV2hhdHNhcHBTaGFyZUJ1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFdvcmtwbGFjZUljb24gfSBmcm9tICcuL1dvcmtwbGFjZUljb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBXb3JrcGxhY2VTaGFyZUJ1dHRvbiB9IGZyb20gJy4vV29ya3BsYWNlU2hhcmVCdXR0b24nO1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBBc3NlcnRpb25FcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXNzZXJ0aW9uRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXNzZXJ0aW9uRXJyb3IobWVzc2FnZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtZXNzYWdlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5uYW1lID0gJ0Fzc2VydGlvbkVycm9yJztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gQXNzZXJ0aW9uRXJyb3I7XG59KEVycm9yKSk7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NlcnQodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHRocm93IG5ldyBBc3NlcnRpb25FcnJvcihtZXNzYWdlKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvYmplY3RUb0dldFBhcmFtcyhvYmplY3QpIHtcbiAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmVudHJpZXMob2JqZWN0KVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBfYVsxXTtcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGw7XG4gICAgfSlcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGtleSA9IF9hWzBdLCB2YWx1ZSA9IF9hWzFdO1xuICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcGFyYW1zLmxlbmd0aCA+IDAgPyBcIj9cIiArIHBhcmFtcy5qb2luKCcmJykgOiAnJztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=