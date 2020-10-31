webpackHotUpdate_N_E("pages/vote",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/LoginForm.module.css */ "./styles/components/LoginForm.module.css");
/* harmony import */ var _styles_components_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/im */ "./node_modules/react-icons/im/index.esm.js");
var _jsxFileName = "D:\\Next\\nextjs-blog\\components\\LoginForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const LoginForm = () => {
  return __jsx("div", {
    className: _styles_components_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.loginFormDiv,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: _styles_components_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.loginFormHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "You must be logged in to vote"), __jsx("div", {
    className: _styles_components_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.loginFormBtnContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://makai-test.herokuapp.com/api/users/auth/google",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_components_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.loginFormNeoButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_2__["ImGoogle"], {
    size: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), "\xA0\xA0 Sign-in with Google")), __jsx("a", {
    href: "https://makai-test.herokuapp.com/api/users/auth/twitter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_components_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.loginFormNeoButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_2__["ImTwitter"], {
    size: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), "\xA0\xA0Sign-in with Twitter")), __jsx("a", {
    href: "https://makai-test.herokuapp.com/api/users/auth/facebook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_components_LoginForm_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.loginFormNeoButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_2__["ImFacebook"], {
    size: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), "\xA0\xA0 Sign-in with Facebook")), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "By continuing as a guest, you agree to Facebook's Terms, Data Policy and Cookies Policy. If you choose to log in, Veda will see the website you came from and info you've made public on your Facebook profile.")));
};

_c = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c;

$RefreshReg$(_c, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwic3R5bGVzIiwibG9naW5Gb3JtRGl2IiwibG9naW5Gb3JtSGVhZGVyIiwibG9naW5Gb3JtQnRuQ29udGFpbmVyIiwibG9naW5Gb3JtTmVvQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLE1BQU07QUFDdEIsU0FDRTtBQUFLLGFBQVMsRUFBRUMsOEVBQU0sQ0FBQ0MsWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFRCw4RUFBTSxDQUFDRSxlQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVGLDhFQUFNLENBQUNHLHFCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsd0RBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQUssYUFBUyxFQUFFSCw4RUFBTSxDQUFDSSxrQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBVSxRQUFJLEVBQUUsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLGlDQUZGLENBREYsRUFTRTtBQUFHLFFBQUksRUFBQyx5REFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFBSyxhQUFTLEVBQUVKLDhFQUFNLENBQUNJLGtCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFXLFFBQUksRUFBRSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsaUNBRkYsQ0FURixFQWlCRTtBQUFHLFFBQUksRUFBQywwREFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFBSyxhQUFTLEVBQUVKLDhFQUFNLENBQUNJLGtCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFZLFFBQUksRUFBRSxFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsbUNBRkYsQ0FqQkYsRUF5QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1TkF6QkYsQ0FGRixDQURGO0FBb0NELENBckNEOztLQUFNTCxTO0FBdUNTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92b3RlLjQ2NTE2NDQxZWZlMzMzMGQ4NzE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0xvZ2luRm9ybS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgSW1Hb29nbGUsIEltRmFjZWJvb2ssIEltVHdpdHRlciB9IGZyb20gJ3JlYWN0LWljb25zL2ltJztcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkZvcm1EaXZ9PlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkZvcm1IZWFkZXJ9PllvdSBtdXN0IGJlIGxvZ2dlZCBpbiB0byB2b3RlPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luRm9ybUJ0bkNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbWFrYWktdGVzdC5oZXJva3VhcHAuY29tL2FwaS91c2Vycy9hdXRoL2dvb2dsZVwiPlxyXG4gICAgICAgICAgey8qIDxhIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3VzZXJzL2F1dGgvZ29vZ2xlXCI+ICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkZvcm1OZW9CdXR0b259PlxyXG4gICAgICAgICAgICA8SW1Hb29nbGUgc2l6ZT17MjR9IC8+XHJcbiAgICAgICAgICAgICZuYnNwOyZuYnNwOyBTaWduLWluIHdpdGggR29vZ2xlXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL21ha2FpLXRlc3QuaGVyb2t1YXBwLmNvbS9hcGkvdXNlcnMvYXV0aC90d2l0dGVyXCI+XHJcbiAgICAgICAgICB7LyogPGEgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdXNlcnMvYXV0aC90d2l0dGVyXCI+ICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkZvcm1OZW9CdXR0b259PlxyXG4gICAgICAgICAgICA8SW1Ud2l0dGVyIHNpemU9ezI0fSAvPlxyXG4gICAgICAgICAgICAmbmJzcDsmbmJzcDtTaWduLWluIHdpdGggVHdpdHRlclxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9tYWthaS10ZXN0Lmhlcm9rdWFwcC5jb20vYXBpL3VzZXJzL2F1dGgvZmFjZWJvb2tcIj5cclxuICAgICAgICAgIHsvKiA8YSBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS91c2Vycy9hdXRoL2ZhY2Vib29rXCI+ICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkZvcm1OZW9CdXR0b259PlxyXG4gICAgICAgICAgICA8SW1GYWNlYm9vayBzaXplPXsyNH0gLz5cclxuICAgICAgICAgICAgJm5ic3A7Jm5ic3A7IFNpZ24taW4gd2l0aCBGYWNlYm9va1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIEJ5IGNvbnRpbnVpbmcgYXMgYSBndWVzdCwgeW91IGFncmVlIHRvIEZhY2Vib29rJ3MgVGVybXMsIERhdGEgUG9saWN5XHJcbiAgICAgICAgICBhbmQgQ29va2llcyBQb2xpY3kuIElmIHlvdSBjaG9vc2UgdG8gbG9nIGluLCBWZWRhIHdpbGwgc2VlIHRoZSB3ZWJzaXRlXHJcbiAgICAgICAgICB5b3UgY2FtZSBmcm9tIGFuZCBpbmZvIHlvdSd2ZSBtYWRlIHB1YmxpYyBvbiB5b3VyIEZhY2Vib29rIHByb2ZpbGUuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=