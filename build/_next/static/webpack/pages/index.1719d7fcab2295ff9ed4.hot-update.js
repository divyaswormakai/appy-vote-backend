webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/pages/home.module.css */ "./styles/pages/home.module.css");
/* harmony import */ var _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar.js");
var _jsxFileName = "D:\\Next\\nextjs-blog\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function Home() {
  _s();

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    CheckRedirect();
  }, []);

  const CheckRedirect = () => {
    console.log(window.location.pathname);
    let path = window.location.pathname;

    if (path.length > 1) {
      router.push(path);
    }

    let params = new URL(document.location).searchParams;
    console.log(params.keys()); // let queryID = params.get('id');
  };

  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "AppyVote"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.App,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.mainContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.circle1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.circle2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.homeDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.homeDivInfo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, "It's time to", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }), "Choose your", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }), "Candidate!"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, "Sign in to register your vote here and now. Vote for who you want as your next president."), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }), __jsx("a", {
    href: "/vote",
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.homeDivInfoVoteBtn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, "Vote Now")), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.homeDivSvg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/home.png",
    alt: "Homelogo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "jsx-2919720203",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2919720203",
    __self: this
  }, "body{margin:0px;padding:0px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI', 'Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans', 'Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}label{font-size:15px;font-weight:500;}#__next-prerender-indicator{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFVyxBQUcwQixBQVNJLEFBSUYsV0FaRCxFQWFkLEVBSmtCLFFBTjRCLFFBTzlDLDhJQU5xQyxtQ0FDRCxrQ0FDcEMiLCJmaWxlIjoiRDpcXE5leHRcXG5leHRqcy1ibG9nXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgSG9tZVN0eWxlIGZyb20gJy4uL3N0eWxlcy9wYWdlcy9ob21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlYmFyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgQ2hlY2tSZWRpcmVjdCgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgQ2hlY2tSZWRpcmVjdCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIGxldCBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGlmIChwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJvdXRlci5wdXNoKHBhdGgpO1xuICAgIH1cbiAgICBsZXQgcGFyYW1zID0gbmV3IFVSTChkb2N1bWVudC5sb2NhdGlvbikuc2VhcmNoUGFyYW1zO1xuICAgIGNvbnNvbGUubG9nKHBhcmFtcy5rZXlzKCkpO1xuICAgIC8vIGxldCBxdWVyeUlEID0gcGFyYW1zLmdldCgnaWQnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QXBweVZvdGU8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXBwfT5cbiAgICAgICAgPFNpZGViYXIgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5Db250ZW50fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNpcmNsZTF9PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2lyY2xlMn0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5ob21lRGl2fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuaG9tZURpdkluZm99PlxuICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgSXQncyB0aW1lIHRvXG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgQ2hvb3NlIHlvdXJcbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICBDYW5kaWRhdGUhXG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFNpZ24gaW4gdG8gcmVnaXN0ZXIgeW91ciB2b3RlIGhlcmUgYW5kIG5vdy4gVm90ZSBmb3Igd2hvIHlvdVxuICAgICAgICAgICAgICAgIHdhbnQgYXMgeW91ciBuZXh0IHByZXNpZGVudC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi92b3RlXCIgY2xhc3NOYW1lPXtIb21lU3R5bGUuaG9tZURpdkluZm9Wb3RlQnRufT5cbiAgICAgICAgICAgICAgICBWb3RlIE5vd1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuaG9tZURpdlN2Z30+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2hvbWUucG5nXCIgYWx0PVwiSG9tZWxvZ29cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJyxcbiAgICAgICAgICAgICAgICAnUm9ib3RvJywgJ094eWdlbicsICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsXG4gICAgICAgICAgICAgICAgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI19fbmV4dC1wcmVyZW5kZXItaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=D:\\\\Next\\\\nextjs-blog\\\\pages\\\\index.js */")));
}

_s(Home, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIkNoZWNrUmVkaXJlY3QiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInBhdGgiLCJsZW5ndGgiLCJwdXNoIiwicGFyYW1zIiwiVVJMIiwiZG9jdW1lbnQiLCJzZWFyY2hQYXJhbXMiLCJrZXlzIiwic3R5bGVzIiwiY29udGFpbmVyIiwiQXBwIiwibWFpbkNvbnRlbnQiLCJjaXJjbGUxIiwiY2lyY2xlMiIsIkhvbWVTdHlsZSIsImhvbWVEaXYiLCJob21lRGl2SW5mbyIsImhvbWVEaXZJbmZvVm90ZUJ0biIsImhvbWVEaXZTdmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBQyx5REFBUyxDQUFDLE1BQU07QUFDZEMsaUJBQWE7QUFDZCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLFFBQU1BLGFBQWEsR0FBRyxNQUFNO0FBQzFCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUE1QjtBQUNBLFFBQUlDLElBQUksR0FBR0gsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUEzQjs7QUFDQSxRQUFJQyxJQUFJLENBQUNDLE1BQUwsR0FBYyxDQUFsQixFQUFxQjtBQUNuQlYsWUFBTSxDQUFDVyxJQUFQLENBQVlGLElBQVo7QUFDRDs7QUFDRCxRQUFJRyxNQUFNLEdBQUcsSUFBSUMsR0FBSixDQUFRQyxRQUFRLENBQUNQLFFBQWpCLEVBQTJCUSxZQUF4QztBQUNBWCxXQUFPLENBQUNDLEdBQVIsQ0FBWU8sTUFBTSxDQUFDSSxJQUFQLEVBQVosRUFQMEIsQ0FRMUI7QUFDRCxHQVREOztBQVdBLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLDhEQUFNLENBQUNDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFNRTtBQUFLLGFBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBR0U7QUFBSyxhQUFTLEVBQUVGLDhEQUFNLENBQUNHLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUgsOERBQU0sQ0FBQ0ksT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVKLDhEQUFNLENBQUNLLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUssYUFBUyxFQUFFQyxvRUFBUyxDQUFDQyxPQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVELG9FQUFTLENBQUNFLFdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixpQkFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsZUFERixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUdBUkYsRUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsRUFhRTtBQUFHLFFBQUksRUFBQyxPQUFSO0FBQWdCLGFBQVMsRUFBRUYsb0VBQVMsQ0FBQ0csa0JBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkYsQ0FERixFQWtCRTtBQUFLLGFBQVMsRUFBRUgsb0VBQVMsQ0FBQ0ksVUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLFdBQVQ7QUFBcUIsT0FBRyxFQUFDLFVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWxCRixDQUhGLENBSEYsQ0FORixFQXFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK25JQXJDRixDQURGO0FBOEREOztHQS9FdUI1QixJO1VBQ1BFLHFEOzs7S0FET0YsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNzE5ZDdmY2FiMjI5NWZmOWVkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IEhvbWVTdHlsZSBmcm9tICcuLi9zdHlsZXMvcGFnZXMvaG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIENoZWNrUmVkaXJlY3QoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IENoZWNrUmVkaXJlY3QgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICBsZXQgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICBpZiAocGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICByb3V0ZXIucHVzaChwYXRoKTtcbiAgICB9XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBVUkwoZG9jdW1lbnQubG9jYXRpb24pLnNlYXJjaFBhcmFtcztcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMua2V5cygpKTtcbiAgICAvLyBsZXQgcXVlcnlJRCA9IHBhcmFtcy5nZXQoJ2lkJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFwcHlWb3RlPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFwcH0+XG4gICAgICAgIDxTaWRlYmFyIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluQ29udGVudH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaXJjbGUxfT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNpcmNsZTJ9PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuaG9tZURpdn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLmhvbWVEaXZJbmZvfT5cbiAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgIEl0J3MgdGltZSB0b1xuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIENob29zZSB5b3VyXG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgQ2FuZGlkYXRlIVxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBTaWduIGluIHRvIHJlZ2lzdGVyIHlvdXIgdm90ZSBoZXJlIGFuZCBub3cuIFZvdGUgZm9yIHdobyB5b3VcbiAgICAgICAgICAgICAgICB3YW50IGFzIHlvdXIgbmV4dCBwcmVzaWRlbnQuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvdm90ZVwiIGNsYXNzTmFtZT17SG9tZVN0eWxlLmhvbWVEaXZJbmZvVm90ZUJ0bn0+XG4gICAgICAgICAgICAgICAgVm90ZSBOb3dcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLmhvbWVEaXZTdmd9PlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9ob21lLnBuZ1wiIGFsdD1cIkhvbWVsb2dvXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsXG4gICAgICAgICAgICAgICAgJ1JvYm90bycsICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLFxuICAgICAgICAgICAgICAgICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNfX25leHQtcHJlcmVuZGVyLWluZGljYXRvciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==