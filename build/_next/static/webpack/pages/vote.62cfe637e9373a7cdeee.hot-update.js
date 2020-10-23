webpackHotUpdate_N_E("pages/vote",{

/***/ "./components/Logout.js":
/*!******************************!*\
  !*** ./components/Logout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_LogOut_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/LogOut.module.css */ "./styles/components/LogOut.module.css");
/* harmony import */ var _styles_components_LogOut_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_LogOut_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/VoteForm.module.css */ "./styles/components/VoteForm.module.css");
/* harmony import */ var _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Next\\nextjs-blog\\components\\Logout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const LogOutForm = () => {
  _s();

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  const logout = () => {
    localStorage.removeItem('appy-vote-user');
    localStorage.removeItem('appy-vote-user-token');
    router.push('/overview');
  };

  return __jsx("div", {
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.VoteFormDiv,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.voteFormHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "Thanks for voting. Check overview to check realtime status or check the battleground to keep yourself updated with the news."), __jsx("button", {
    onClick: logout,
    className: _styles_components_LogOut_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logoutBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "Log out"));
};

_s(LogOutForm, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = LogOutForm;
/* harmony default export */ __webpack_exports__["default"] = (LogOutForm);

var _c;

$RefreshReg$(_c, "LogOutForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dvdXQuanMiXSwibmFtZXMiOlsiTG9nT3V0Rm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsImxvZ291dCIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJwdXNoIiwidm90ZVN0eWxlIiwiVm90ZUZvcm1EaXYiLCJ2b3RlRm9ybUhlYWRlciIsImxvZ291dFN0eWxlcyIsImxvZ291dEJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxVQUFVLEdBQUcsTUFBTTtBQUFBOztBQUN2QixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLFFBQU1DLE1BQU0sR0FBRyxNQUFNO0FBQ25CQyxnQkFBWSxDQUFDQyxVQUFiLENBQXdCLGdCQUF4QjtBQUNBRCxnQkFBWSxDQUFDQyxVQUFiLENBQXdCLHNCQUF4QjtBQUNBSixVQUFNLENBQUNLLElBQVAsQ0FBWSxXQUFaO0FBQ0QsR0FKRDs7QUFLQSxTQUNFO0FBQUssYUFBUyxFQUFFQyw2RUFBUyxDQUFDQyxXQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVELDZFQUFTLENBQUNFLGNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0lBREYsRUFLRTtBQUFRLFdBQU8sRUFBRU4sTUFBakI7QUFBeUIsYUFBUyxFQUFFTywyRUFBWSxDQUFDQyxTQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsQ0FERjtBQVdELENBbEJEOztHQUFNWCxVO1VBQ1dFLHFEOzs7S0FEWEYsVTtBQW9CU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdm90ZS42MmNmZTYzN2U5MzczYTdjZGVlZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgbG9nb3V0U3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0xvZ091dC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHZvdGVTdHlsZSBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Wb3RlRm9ybS5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IExvZ091dEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FwcHktdm90ZS11c2VyJyk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXBweS12b3RlLXVzZXItdG9rZW4nKTtcclxuICAgIHJvdXRlci5wdXNoKCcvb3ZlcnZpZXcnKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17dm90ZVN0eWxlLlZvdGVGb3JtRGl2fT5cclxuICAgICAgPHAgY2xhc3NOYW1lPXt2b3RlU3R5bGUudm90ZUZvcm1IZWFkZXJ9PlxyXG4gICAgICAgIFRoYW5rcyBmb3Igdm90aW5nLiBDaGVjayBvdmVydmlldyB0byBjaGVjayByZWFsdGltZSBzdGF0dXMgb3IgY2hlY2sgdGhlXHJcbiAgICAgICAgYmF0dGxlZ3JvdW5kIHRvIGtlZXAgeW91cnNlbGYgdXBkYXRlZCB3aXRoIHRoZSBuZXdzLlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17bG9nb3V0fSBjbGFzc05hbWU9e2xvZ291dFN0eWxlcy5sb2dvdXRCdG59PlxyXG4gICAgICAgIExvZyBvdXRcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nT3V0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==