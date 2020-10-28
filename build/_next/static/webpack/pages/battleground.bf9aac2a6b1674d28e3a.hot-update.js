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
  }, item.comment)))) : null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CR0NvbXBvbmVudHMvQ29tbWVudHMuanMiXSwibmFtZXMiOlsiQ29tbWVudHMiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwidXNlU3RhdGUiLCJzb2NrZXQiLCJ1c2VFZmZlY3QiLCJlbmRwb2ludCIsInNvY2tldElPQ2xpZW50Iiwib24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpc2Nvbm5lY3QiLCJzdHlsZXMiLCJiZ0ZvcnVtQ29udGVudCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmR4IiwiaXRlbUxpbmtDb250ZW50IiwidXJsIiwiaXRlbUxpbmsiLCJpdGVtTGlua0hlYWRlciIsInVzZXIiLCJjb21tZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFBQTs7QUFDckIsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFFQSxNQUFJQyxNQUFNLEdBQUcsSUFBYjtBQUNBQyx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJQyxRQUFRLEdBQUcsdUJBQWYsQ0FEYyxDQUVkOztBQUNBRixVQUFNLEdBQUdHLHVEQUFjLENBQUNELFFBQUQsQ0FBdkI7QUFDQUYsVUFBTSxDQUFDSSxFQUFQLENBQVUsYUFBVixFQUEwQkMsSUFBRCxJQUFVO0FBQ2pDQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBUCxpQkFBVyxDQUFDTyxJQUFELENBQVg7QUFDRCxLQUhEO0FBSUEsV0FBTyxNQUFNO0FBQ1hMLFlBQU0sQ0FBQ1EsVUFBUDtBQUNELEtBRkQ7QUFHRCxHQVhRLEVBV04sRUFYTSxDQUFUO0FBYUEsU0FDRSxtRUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVDLDRFQUFNLENBQUNDLGNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2IsUUFBUSxDQUFDYyxNQUFULEdBQWtCLENBQWxCLEdBQ0dkLFFBQVEsQ0FBQ2UsR0FBVCxDQUFhLENBQUNDLElBQUQsRUFBT0MsSUFBUCxLQUNYO0FBQ0UsT0FBRyxFQUFHLGdCQUFlQSxJQUFLLEVBRDVCO0FBRUUsYUFBUyxFQUFFTCw0RUFBTSxDQUFDTSxlQUZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBRyxRQUFJLEVBQUVGLElBQUksQ0FBQ0csR0FBZDtBQUFtQixhQUFTLEVBQUVQLDRFQUFNLENBQUNRLFFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRVIsNEVBQU0sQ0FBQ1MsY0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUwsSUFBSSxDQUFDTSxJQUFULENBREYsRUFDcUIsR0FEckIsQ0FERixFQUlFO0FBQUcsYUFBUyxFQUFFViw0RUFBTSxDQUFDVyxPQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStCUCxJQUFJLENBQUNPLE9BQXBDLENBSkYsQ0FKRixDQURGLENBREgsR0FjRyxJQWZOLENBRkYsQ0FERjtBQXNCRCxDQXZDRDs7R0FBTXhCLFE7O0tBQUFBLFE7QUF5Q1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2JhdHRsZWdyb3VuZC5iZjlhYWMyYTZiMTY3NGQyOGUzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBiYXR0bGVncm91bmRTZXJ2aWNlIGZyb20gJy4uLy4uL3V0aWxzL2JhdHRsZWdyb3VuZFNlcnZpY2UnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9wYWdlcy9iYXR0bGVncm91bmQubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBzb2NrZXRJT0NsaWVudCBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuXHJcbmNvbnN0IENvbW1lbnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBsZXQgc29ja2V0ID0gbnVsbDtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGVuZHBvaW50ID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMSc7XHJcbiAgICAvLyBsZXQgZW5kcG9pbnQgPSAnaHR0cHM6Ly9tYWthaS10ZXN0Lmhlcm9rdWFwcC5jb20nO1xyXG4gICAgc29ja2V0ID0gc29ja2V0SU9DbGllbnQoZW5kcG9pbnQpO1xyXG4gICAgc29ja2V0Lm9uKCdnZXRDb21tZW50cycsIChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBzZXRDb21tZW50cyhkYXRhKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgc29ja2V0LmRpc2Nvbm5lY3QoKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxPkNvbW1lbnRzPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZ0ZvcnVtQ29udGVudH0+XHJcbiAgICAgICAge2NvbW1lbnRzLmxlbmd0aCA+IDBcclxuICAgICAgICAgID8gY29tbWVudHMubWFwKChpdGVtLCBpbmR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAga2V5PXtgQ29tbWVudC1pdGVtLSR7aW5keH1gfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbUxpbmtDb250ZW50fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0udXJsfSBjbGFzc05hbWU9e3N0eWxlcy5pdGVtTGlua30+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLml0ZW1MaW5rSGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Yj57aXRlbS51c2VyfTwvYj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnR9PntpdGVtLmNvbW1lbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==