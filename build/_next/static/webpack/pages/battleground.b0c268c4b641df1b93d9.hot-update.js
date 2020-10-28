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
      lineNumber: 25,
      columnNumber: 7
    }
  }, "Comments"), __jsx("div", {
    className: _styles_pages_battleground_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.bgForumContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, comments.length > 0 ? comments.map((item, indx) => __jsx("div", {
    key: `Comment-item-${indx}`,
    className: _styles_pages_battleground_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.itemLinkContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: item.url,
    className: _styles_pages_battleground_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.itemLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _styles_pages_battleground_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.itemLinkHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 19
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, item.user), ' '), __jsx("p", {
    className: _styles_pages_battleground_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.comment,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 19
    }
  }, item.text)))) : null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CR0NvbXBvbmVudHMvQ29tbWVudHMuanMiXSwibmFtZXMiOlsiQ29tbWVudHMiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwidXNlU3RhdGUiLCJzb2NrZXQiLCJ1c2VFZmZlY3QiLCJlbmRwb2ludCIsInNvY2tldElPQ2xpZW50Iiwib24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpc2Nvbm5lY3QiLCJzdHlsZXMiLCJiZ0ZvcnVtQ29udGVudCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmR4IiwiaXRlbUxpbmtDb250ZW50IiwidXJsIiwiaXRlbUxpbmsiLCJpdGVtTGlua0hlYWRlciIsInVzZXIiLCJjb21tZW50IiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxNQUFNO0FBQUE7O0FBQ3JCLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBRUEsTUFBSUMsTUFBTSxHQUFHLElBQWI7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSUMsUUFBUSxHQUFHLHVCQUFmLENBRGMsQ0FFZDs7QUFDQUYsVUFBTSxHQUFHRyx1REFBYyxDQUFDRCxRQUFELENBQXZCO0FBQ0FGLFVBQU0sQ0FBQ0ksRUFBUCxDQUFVLGFBQVYsRUFBMEJDLElBQUQsSUFBVTtBQUNqQ0MsYUFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQVAsaUJBQVcsQ0FBQ08sSUFBRCxDQUFYO0FBQ0QsS0FIRDtBQUlBLFdBQU8sTUFBTTtBQUNYTCxZQUFNLENBQUNRLFVBQVA7QUFDRCxLQUZEO0FBR0QsR0FYUSxFQVdOLEVBWE0sQ0FBVDtBQWFBLFNBQ0UsbUVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQUssYUFBUyxFQUFFQyw0RUFBTSxDQUFDQyxjQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0diLFFBQVEsQ0FBQ2MsTUFBVCxHQUFrQixDQUFsQixHQUNHZCxRQUFRLENBQUNlLEdBQVQsQ0FBYSxDQUFDQyxJQUFELEVBQU9DLElBQVAsS0FDWDtBQUNFLE9BQUcsRUFBRyxnQkFBZUEsSUFBSyxFQUQ1QjtBQUVFLGFBQVMsRUFBRUwsNEVBQU0sQ0FBQ00sZUFGcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUcsUUFBSSxFQUFFRixJQUFJLENBQUNHLEdBQWQ7QUFBbUIsYUFBUyxFQUFFUCw0RUFBTSxDQUFDUSxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVSLDRFQUFNLENBQUNTLGNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlMLElBQUksQ0FBQ00sSUFBVCxDQURGLEVBQ3FCLEdBRHJCLENBREYsRUFJRTtBQUFHLGFBQVMsRUFBRVYsNEVBQU0sQ0FBQ1csT0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErQlAsSUFBSSxDQUFDUSxJQUFwQyxDQUpGLENBSkYsQ0FERixDQURILEdBY0csSUFmTixDQUZGLENBREY7QUFzQkQsQ0F2Q0Q7O0dBQU16QixROztLQUFBQSxRO0FBeUNTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9iYXR0bGVncm91bmQuYjBjMjY4YzRiNjQxZGYxYjkzZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYmF0dGxlZ3JvdW5kU2VydmljZSBmcm9tICcuLi8uLi91dGlscy9iYXR0bGVncm91bmRTZXJ2aWNlJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvcGFnZXMvYmF0dGxlZ3JvdW5kLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgc29ja2V0SU9DbGllbnQgZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcblxyXG5jb25zdCBDb21tZW50cyA9ICgpID0+IHtcclxuICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgbGV0IHNvY2tldCA9IG51bGw7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBlbmRwb2ludCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDEnO1xyXG4gICAgLy8gbGV0IGVuZHBvaW50ID0gJ2h0dHBzOi8vbWFrYWktdGVzdC5oZXJva3VhcHAuY29tJztcclxuICAgIHNvY2tldCA9IHNvY2tldElPQ2xpZW50KGVuZHBvaW50KTtcclxuICAgIHNvY2tldC5vbignZ2V0Q29tbWVudHMnLCAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgc2V0Q29tbWVudHMoZGF0YSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNvY2tldC5kaXNjb25uZWN0KCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMT5Db21tZW50czwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmdGb3J1bUNvbnRlbnR9PlxyXG4gICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwXHJcbiAgICAgICAgICA/IGNvbW1lbnRzLm1hcCgoaXRlbSwgaW5keCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGtleT17YENvbW1lbnQtaXRlbS0ke2luZHh9YH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLml0ZW1MaW5rQ29udGVudH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLnVybH0gY2xhc3NOYW1lPXtzdHlsZXMuaXRlbUxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5pdGVtTGlua0hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGI+e2l0ZW0udXNlcn08L2I+eycgJ31cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50fT57aXRlbS50ZXh0fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=