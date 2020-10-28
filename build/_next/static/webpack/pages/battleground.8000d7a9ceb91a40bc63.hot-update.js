webpackHotUpdate_N_E("pages/battleground",{

/***/ "./components/BGComponents/Comments.js":
/*!*********************************************!*\
  !*** ./components/BGComponents/Comments.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_battlegroundService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/battlegroundService */ "./utils/battlegroundService.js");
/* harmony import */ var _styles_pages_battleground_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/pages/battleground.module.css */ "./styles/pages/battleground.module.css");
/* harmony import */ var _styles_pages_battleground_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_battleground_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Next\\nextjs-blog\\components\\BGComponents\\Comments.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Comments = () => {
  _s();

  const {
    0: comments,
    1: setComments
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  let socket = null;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let endpoint = 'http://localhost:3001'; // let endpoint = 'https://makai-test.herokuapp.com';
    // let endpoint = '/';

    socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3___default()(endpoint);
    socket.on('getComments', data => {
      console.log(data);
      setComments(data);
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, "Comments"), __jsx("div", {
    className: _styles_pages_battleground_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.bgForumContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, comments.length > 0 ? comments.map((item, indx) => __jsx("div", {
    key: `Forum-item-${indx}`,
    className: _styles_pages_battleground_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.itemLinkContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: item.url,
    className: _styles_pages_battleground_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.itemLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _styles_pages_battleground_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.itemLinkHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, item.author), ' '), __jsx("p", {
    className: _styles_pages_battleground_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.itemLinkDesc,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 19
    }
  }, item.text), __jsx("p", {
    className: _styles_pages_battleground_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.itemLinkReadMore,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 19
    }
  }, "Read more...")))) : null));
};

_s(Comments, "ByfV/t0DOiJY0nGyfgV+6QjIggQ=");

_c = Comments;
/* harmony default export */ __webpack_exports__["default"] = (Comments);

var _c;

$RefreshReg$(_c, "Comments");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CR0NvbXBvbmVudHMvQ29tbWVudHMuanMiXSwibmFtZXMiOlsiQ29tbWVudHMiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwidXNlU3RhdGUiLCJzb2NrZXQiLCJ1c2VFZmZlY3QiLCJlbmRwb2ludCIsInNvY2tldElPQ2xpZW50Iiwib24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpc2Nvbm5lY3QiLCJzdHlsZXMiLCJiZ0ZvcnVtQ29udGVudCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmR4IiwiaXRlbUxpbmtDb250ZW50IiwidXJsIiwiaXRlbUxpbmsiLCJpdGVtTGlua0hlYWRlciIsImF1dGhvciIsIml0ZW1MaW5rRGVzYyIsInRleHQiLCJpdGVtTGlua1JlYWRNb3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFBQTs7QUFDckIsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFFQSxNQUFJQyxNQUFNLEdBQUcsSUFBYjtBQUNBQyx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJQyxRQUFRLEdBQUcsdUJBQWYsQ0FEYyxDQUVkO0FBQ0E7O0FBQ0FGLFVBQU0sR0FBR0csdURBQWMsQ0FBQ0QsUUFBRCxDQUF2QjtBQUNBRixVQUFNLENBQUNJLEVBQVAsQ0FBVSxhQUFWLEVBQTBCQyxJQUFELElBQVU7QUFDakNDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FQLGlCQUFXLENBQUNPLElBQUQsQ0FBWDtBQUNELEtBSEQ7QUFJQSxXQUFPLE1BQU07QUFDWEwsWUFBTSxDQUFDUSxVQUFQO0FBQ0QsS0FGRDtBQUdELEdBWlEsRUFZTixFQVpNLENBQVQ7QUFjQSxTQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUFLLGFBQVMsRUFBRUMsNEVBQU0sQ0FBQ0MsY0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHYixRQUFRLENBQUNjLE1BQVQsR0FBa0IsQ0FBbEIsR0FDR2QsUUFBUSxDQUFDZSxHQUFULENBQWEsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEtBQ1g7QUFDRSxPQUFHLEVBQUcsY0FBYUEsSUFBSyxFQUQxQjtBQUVFLGFBQVMsRUFBRUwsNEVBQU0sQ0FBQ00sZUFGcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUcsUUFBSSxFQUFFRixJQUFJLENBQUNHLEdBQWQ7QUFBbUIsYUFBUyxFQUFFUCw0RUFBTSxDQUFDUSxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVSLDRFQUFNLENBQUNTLGNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlMLElBQUksQ0FBQ00sTUFBVCxDQURGLEVBQ3VCLEdBRHZCLENBREYsRUFJRTtBQUFHLGFBQVMsRUFBRVYsNEVBQU0sQ0FBQ1csWUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQ1AsSUFBSSxDQUFDUSxJQUF6QyxDQUpGLEVBS0U7QUFBRyxhQUFTLEVBQUVaLDRFQUFNLENBQUNhLGdCQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxGLENBSkYsQ0FERixDQURILEdBZUcsSUFoQk4sQ0FGRixDQURGO0FBdUJELENBekNEOztHQUFNMUIsUTs7S0FBQUEsUTtBQTJDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmF0dGxlZ3JvdW5kLjgwMDBkN2E5Y2ViOTFhNDBiYzYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGJhdHRsZWdyb3VuZFNlcnZpY2UgZnJvbSAnLi4vLi4vdXRpbHMvYmF0dGxlZ3JvdW5kU2VydmljZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3BhZ2VzL2JhdHRsZWdyb3VuZC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHNvY2tldElPQ2xpZW50IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5cclxuY29uc3QgQ29tbWVudHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGxldCBzb2NrZXQgPSBudWxsO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgZW5kcG9pbnQgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxJztcclxuICAgIC8vIGxldCBlbmRwb2ludCA9ICdodHRwczovL21ha2FpLXRlc3QuaGVyb2t1YXBwLmNvbSc7XHJcbiAgICAvLyBsZXQgZW5kcG9pbnQgPSAnLyc7XHJcbiAgICBzb2NrZXQgPSBzb2NrZXRJT0NsaWVudChlbmRwb2ludCk7XHJcbiAgICBzb2NrZXQub24oJ2dldENvbW1lbnRzJywgKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHNldENvbW1lbnRzKGRhdGEpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzb2NrZXQuZGlzY29ubmVjdCgpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDE+Q29tbWVudHM8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJnRm9ydW1Db250ZW50fT5cclxuICAgICAgICB7Y29tbWVudHMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgPyBjb21tZW50cy5tYXAoKGl0ZW0sIGluZHgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBrZXk9e2BGb3J1bS1pdGVtLSR7aW5keH1gfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbUxpbmtDb250ZW50fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0udXJsfSBjbGFzc05hbWU9e3N0eWxlcy5pdGVtTGlua30+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLml0ZW1MaW5rSGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Yj57aXRlbS5hdXRob3J9PC9iPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbUxpbmtEZXNjfT57aXRlbS50ZXh0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbUxpbmtSZWFkTW9yZX0+UmVhZCBtb3JlLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==