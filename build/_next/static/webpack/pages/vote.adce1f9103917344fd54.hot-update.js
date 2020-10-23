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
/* harmony import */ var _styles_components_LogOut_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/LogOut.module.css */ "./styles/components/LogOut.module.css");
/* harmony import */ var _styles_components_LogOut_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_LogOut_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/VoteForm.module.css */ "./styles/components/VoteForm.module.css");
/* harmony import */ var _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Next\\nextjs-blog\\components\\Logout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import { useHistory } from 'react-router-dom';




const LogOutForm = () => {
  _s();

  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('appy-vote-user');
    localStorage.removeItem('appy-vote-user-token');
    history.go();
  };

  return __jsx("div", {
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.VoteFormDiv,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.voteFormHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "Thanks for voting. Check overview to check realtime status or check the battleground to keep yourself updated with the news."), __jsx("button", {
    onClick: logout,
    className: _styles_components_LogOut_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logoutBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "Log out"));
};

_s(LogOutForm, "9cZfZ04734qoCGIctmKX7+sX6eU=", true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dvdXQuanMiXSwibmFtZXMiOlsiTG9nT3V0Rm9ybSIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwibG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImdvIiwidm90ZVN0eWxlIiwiVm90ZUZvcm1EaXYiLCJ2b3RlRm9ybUhlYWRlciIsImxvZ291dFN0eWxlcyIsImxvZ291dEJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxVQUFVLEdBQUcsTUFBTTtBQUFBOztBQUN2QixRQUFNQyxPQUFPLEdBQUdDLFVBQVUsRUFBMUI7O0FBQ0EsUUFBTUMsTUFBTSxHQUFHLE1BQU07QUFDbkJDLGdCQUFZLENBQUNDLFVBQWIsQ0FBd0IsZ0JBQXhCO0FBQ0FELGdCQUFZLENBQUNDLFVBQWIsQ0FBd0Isc0JBQXhCO0FBQ0FKLFdBQU8sQ0FBQ0ssRUFBUjtBQUNELEdBSkQ7O0FBS0EsU0FDRTtBQUFLLGFBQVMsRUFBRUMsNkVBQVMsQ0FBQ0MsV0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFRCw2RUFBUyxDQUFDRSxjQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9JQURGLEVBS0U7QUFBUSxXQUFPLEVBQUVOLE1BQWpCO0FBQXlCLGFBQVMsRUFBRU8sMkVBQVksQ0FBQ0MsU0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLENBREY7QUFXRCxDQWxCRDs7R0FBTVgsVTs7S0FBQUEsVTtBQW9CU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdm90ZS5hZGNlMWY5MTAzOTE3MzQ0ZmQ1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgbG9nb3V0U3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0xvZ091dC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHZvdGVTdHlsZSBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Wb3RlRm9ybS5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IExvZ091dEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXBweS12b3RlLXVzZXInKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhcHB5LXZvdGUtdXNlci10b2tlbicpO1xyXG4gICAgaGlzdG9yeS5nbygpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXt2b3RlU3R5bGUuVm90ZUZvcm1EaXZ9PlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3ZvdGVTdHlsZS52b3RlRm9ybUhlYWRlcn0+XHJcbiAgICAgICAgVGhhbmtzIGZvciB2b3RpbmcuIENoZWNrIG92ZXJ2aWV3IHRvIGNoZWNrIHJlYWx0aW1lIHN0YXR1cyBvciBjaGVjayB0aGVcclxuICAgICAgICBiYXR0bGVncm91bmQgdG8ga2VlcCB5b3Vyc2VsZiB1cGRhdGVkIHdpdGggdGhlIG5ld3MuXHJcbiAgICAgIDwvcD5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dvdXR9IGNsYXNzTmFtZT17bG9nb3V0U3R5bGVzLmxvZ291dEJ0bn0+XHJcbiAgICAgICAgTG9nIG91dFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dPdXRGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9