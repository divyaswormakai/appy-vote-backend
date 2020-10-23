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
    router.reload();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dvdXQuanMiXSwibmFtZXMiOlsiTG9nT3V0Rm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsImxvZ291dCIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJyZWxvYWQiLCJ2b3RlU3R5bGUiLCJWb3RlRm9ybURpdiIsInZvdGVGb3JtSGVhZGVyIiwibG9nb3V0U3R5bGVzIiwibG9nb3V0QnRuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFVBQVUsR0FBRyxNQUFNO0FBQUE7O0FBQ3ZCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsUUFBTUMsTUFBTSxHQUFHLE1BQU07QUFDbkJDLGdCQUFZLENBQUNDLFVBQWIsQ0FBd0IsZ0JBQXhCO0FBQ0FELGdCQUFZLENBQUNDLFVBQWIsQ0FBd0Isc0JBQXhCO0FBQ0FKLFVBQU0sQ0FBQ0ssTUFBUDtBQUNELEdBSkQ7O0FBS0EsU0FDRTtBQUFLLGFBQVMsRUFBRUMsNkVBQVMsQ0FBQ0MsV0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFRCw2RUFBUyxDQUFDRSxjQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9JQURGLEVBS0U7QUFBUSxXQUFPLEVBQUVOLE1BQWpCO0FBQXlCLGFBQVMsRUFBRU8sMkVBQVksQ0FBQ0MsU0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLENBREY7QUFXRCxDQWxCRDs7R0FBTVgsVTtVQUNXRSxxRDs7O0tBRFhGLFU7QUFvQlNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZvdGUuM2I5NTljYWFiOWQ5OTRmZDQ4YzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGxvZ291dFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Mb2dPdXQubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB2b3RlU3R5bGUgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvVm90ZUZvcm0ubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBMb2dPdXRGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhcHB5LXZvdGUtdXNlcicpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FwcHktdm90ZS11c2VyLXRva2VuJyk7XHJcbiAgICByb3V0ZXIucmVsb2FkKCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3ZvdGVTdHlsZS5Wb3RlRm9ybURpdn0+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17dm90ZVN0eWxlLnZvdGVGb3JtSGVhZGVyfT5cclxuICAgICAgICBUaGFua3MgZm9yIHZvdGluZy4gQ2hlY2sgb3ZlcnZpZXcgdG8gY2hlY2sgcmVhbHRpbWUgc3RhdHVzIG9yIGNoZWNrIHRoZVxyXG4gICAgICAgIGJhdHRsZWdyb3VuZCB0byBrZWVwIHlvdXJzZWxmIHVwZGF0ZWQgd2l0aCB0aGUgbmV3cy5cclxuICAgICAgPC9wPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ291dH0gY2xhc3NOYW1lPXtsb2dvdXRTdHlsZXMubG9nb3V0QnRufT5cclxuICAgICAgICBMb2cgb3V0XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ091dEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=