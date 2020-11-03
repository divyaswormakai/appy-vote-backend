webpackHotUpdate_N_E("pages/about",{

/***/ "./components/EmailForm.js":
/*!*********************************!*\
  !*** ./components/EmailForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons */ "./node_modules/react-icons/lib/esm/index.js");
/* harmony import */ var _styles_components_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/EmailForm.module.css */ "./styles/components/EmailForm.module.css");
/* harmony import */ var _styles_components_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_userService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/userService */ "./utils/userService.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
var _jsxFileName = "D:\\Next\\nextjs-blog\\components\\EmailForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const EmailForm = () => {
  _s();

  const {
    0: from,
    1: setFrom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: subject,
    1: setSubject
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: body,
    1: setBody
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: showMsg,
    1: setShowMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const submitForm = async e => {
    e.preventDefault();

    if (from.length < 0) {
      alert('From must not be empty');
    } else {
      let res = await _utils_userService__WEBPACK_IMPORTED_MODULE_3__["default"].sendMail({
        from,
        subject,
        body
      });

      if (res.error) {
        alert(res.error);
      } else {
        setFrom('');
        setSubject('');
        setBody('');
        setShowMsg(true);
        setTimeout(() => {
          setShowMsg(false);
        }, 5000);
      }
    }
  };

  return __jsx("div", {
    className: _styles_components_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.EmailContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, showMsg ? __jsx("div", {
    className: _styles_components_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.successMsg,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "Email has been sent") : null, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "Find us here"), __jsx("div", {
    className: _styles_components_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logoContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_components_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.iconRow,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://www.facebook.com/appyvote/",
    target: "blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_1__["IconContext"].Provider, {
    value: {
      size: 40,
      color: '#4064ac',
      className: _styles_components_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__["AiFillFacebook"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }))), __jsx("a", {
    href: "https://twitter.com/appyvote",
    target: "blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_1__["IconContext"].Provider, {
    value: {
      color: '#34d1f7',
      size: 40,
      className: _styles_components_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__["AiOutlineTwitter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }))), __jsx("a", {
    href: "https://www.reddit.com/r/appyvote/",
    target: "blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_1__["IconContext"].Provider, {
    value: {
      size: 40,
      className: _styles_components_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
      color: '#ff4500'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__["AiFillRedditCircle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }))), __jsx("a", {
    href: "https://www.instagram.com/appyvote/",
    target: "blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "./instalogo.png",
    height: "40",
    width: "40",
    className: _styles_components_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  })))), __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, "Or send us an e-mail..."), __jsx("form", {
    onSubmit: submitForm,
    className: _styles_components_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.emailForm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "text",
    onChange: event => setFrom(event.target.value),
    value: from,
    placeholder: "From",
    className: _styles_components_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.neoInput,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "text",
    onChange: event => setSubject(event.target.value),
    value: subject,
    placeholder: "Subject",
    className: _styles_components_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.neoInput,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx("label", {
    className: _styles_components_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, "Your idea in brief"), __jsx("textarea", {
    value: body,
    onChange: event => setBody(event.target.value),
    rows: 5,
    cols: 50,
    className: _styles_components_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.neoInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "submit",
    className: _styles_components_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.neoSubmitBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, "Send"))), __jsx("div", {
    className: _styles_components_EmailForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.creditInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, "AppyVote, createad as a hobby project by Dipeche. Starring: Project Lead: Dipeche, Dev guru: Divyaswor, UI/UX: Buddhi, DevOps: Ujan"));
};

_s(EmailForm, "/ONoPeVuEyykrSkSjimqRY36akU=");

_c = EmailForm;
/* harmony default export */ __webpack_exports__["default"] = (EmailForm);

var _c;

$RefreshReg$(_c, "EmailForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FbWFpbEZvcm0uanMiXSwibmFtZXMiOlsiRW1haWxGb3JtIiwiZnJvbSIsInNldEZyb20iLCJ1c2VTdGF0ZSIsInN1YmplY3QiLCJzZXRTdWJqZWN0IiwiYm9keSIsInNldEJvZHkiLCJzaG93TXNnIiwic2V0U2hvd01zZyIsInN1Ym1pdEZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJhbGVydCIsInJlcyIsInVzZXJTZXJ2aWNlIiwic2VuZE1haWwiLCJlcnJvciIsInNldFRpbWVvdXQiLCJzdHlsZXMiLCJFbWFpbENvbnRhaW5lciIsInN1Y2Nlc3NNc2ciLCJsb2dvQ29udGFpbmVyIiwiaWNvblJvdyIsInNpemUiLCJjb2xvciIsImNsYXNzTmFtZSIsImljb24iLCJlbWFpbEZvcm0iLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwibmVvSW5wdXQiLCJsYWJlbCIsIm5lb1N1Ym1pdEJ0biIsImNyZWRpdEluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQU1BLE1BQU1BLFNBQVMsR0FBRyxNQUFNO0FBQUE7O0FBQ3RCLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCRixzREFBUSxDQUFDLEVBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JKLHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDSyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3Qk4sc0RBQVEsQ0FBQyxLQUFELENBQXRDOztBQUVBLFFBQU1PLFVBQVUsR0FBRyxNQUFPQyxDQUFQLElBQWE7QUFDOUJBLEtBQUMsQ0FBQ0Ms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QSxJQURGLENBWEYsRUFxQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sYUFBUyxFQUFFYiw4RUFBTSxDQUFDYyxLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLEVBRUU7QUFDRSxTQUFLLEVBQUU1QixJQURUO0FBRUUsWUFBUSxFQUFHd0IsS0FBRCxJQUFXdkIsT0FBTyxDQUFDdUIsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FGOUI7QUFHRSxRQUFJLEVBQUUsQ0FIUjtBQUlFLFFBQUksRUFBRSxFQUpSO0FBS0UsYUFBUyxFQUFFWiw4RUFBTSxDQUFDYSxRQUxwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FyQkYsRUFnQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFFYiw4RUFBTSxDQUFDZSxZQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FoQ0YsQ0FwREYsRUEwRkU7QUFBSyxhQUFTLEVBQUVmLDhFQUFNLENBQUNnQixVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJJQTFGRixDQURGO0FBaUdELENBM0hEOztHQUFNcEMsUzs7S0FBQUEsUztBQTZIU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuOGMwMWUzMDRjMGI3YjY1NmZmNmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSWNvbkNvbnRleHQgfSBmcm9tICdyZWFjdC1pY29ucyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvRW1haWxGb3JtLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgdXNlclNlcnZpY2UgZnJvbSAnLi4vdXRpbHMvdXNlclNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHtcclxuICBBaUZpbGxGYWNlYm9vayxcclxuICBBaU91dGxpbmVUd2l0dGVyLFxyXG4gIEFpRmlsbFJlZGRpdENpcmNsZSxcclxufSBmcm9tICdyZWFjdC1pY29ucy9haSc7XHJcblxyXG5jb25zdCBFbWFpbEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Zyb20sIHNldEZyb21dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzdWJqZWN0LCBzZXRTdWJqZWN0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Nob3dNc2csIHNldFNob3dNc2ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBzdWJtaXRGb3JtID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChmcm9tLmxlbmd0aCA8IDApIHtcclxuICAgICAgYWxlcnQoJ0Zyb20gbXVzdCBub3QgYmUgZW1wdHknKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCByZXMgPSBhd2FpdCB1c2VyU2VydmljZS5zZW5kTWFpbCh7IGZyb20sIHN1YmplY3QsIGJvZHkgfSk7XHJcbiAgICAgIGlmIChyZXMuZXJyb3IpIHtcclxuICAgICAgICBhbGVydChyZXMuZXJyb3IpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEZyb20oJycpO1xyXG4gICAgICAgIHNldFN1YmplY3QoJycpO1xyXG4gICAgICAgIHNldEJvZHkoJycpO1xyXG4gICAgICAgIHNldFNob3dNc2codHJ1ZSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRTaG93TXNnKGZhbHNlKTtcclxuICAgICAgICB9LCA1MDAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVtYWlsQ29udGFpbmVyfT5cclxuICAgICAge3Nob3dNc2cgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWNjZXNzTXNnfT5FbWFpbCBoYXMgYmVlbiBzZW50PC9kaXY+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgICA8aDE+RmluZCB1cyBoZXJlPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvQ29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25Sb3d9PlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9hcHB5dm90ZS9cIiB0YXJnZXQ9XCJibGFua1wiPlxyXG4gICAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgc2l6ZTogNDAsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyM0MDY0YWMnLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBzdHlsZXMuaWNvbixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEFpRmlsbEZhY2Vib29rIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9hcHB5dm90ZVwiIHRhcmdldD1cImJsYW5rXCI+XHJcbiAgICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMzNGQxZjcnLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogNDAsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHN0eWxlcy5pY29uLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QWlPdXRsaW5lVHdpdHRlciAvPlxyXG4gICAgICAgICAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnJlZGRpdC5jb20vci9hcHB5dm90ZS9cIiB0YXJnZXQ9XCJibGFua1wiPlxyXG4gICAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgc2l6ZTogNDAsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHN0eWxlcy5pY29uLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjZmY0NTAwJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEFpRmlsbFJlZGRpdENpcmNsZSAvPlxyXG4gICAgICAgICAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vYXBweXZvdGUvXCIgdGFyZ2V0PVwiYmxhbmtcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cIi4vaW5zdGFsb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmljb259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aDI+T3Igc2VuZCB1cyBhbiBlLW1haWwuLi48L2gyPlxyXG5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEZvcm19IGNsYXNzTmFtZT17c3R5bGVzLmVtYWlsRm9ybX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEZyb20oZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgdmFsdWU9e2Zyb219XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRnJvbVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0fVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0U3ViamVjdChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICB2YWx1ZT17c3ViamVjdH1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmVvSW5wdXR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PllvdXIgaWRlYSBpbiBicmllZjwvbGFiZWw+XHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgdmFsdWU9e2JvZHl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEJvZHkoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcm93cz17NX1cclxuICAgICAgICAgICAgY29scz17NTB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0fVxyXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5uZW9TdWJtaXRCdG59PlxyXG4gICAgICAgICAgICBTZW5kXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWRpdEluZm99PlxyXG4gICAgICAgIEFwcHlWb3RlLCBjcmVhdGVhZCBhcyBhIGhvYmJ5IHByb2plY3QgYnkgRGlwZWNoZS4gU3RhcnJpbmc6IFByb2plY3RcclxuICAgICAgICBMZWFkOiBEaXBlY2hlLCBEZXYgZ3VydTogRGl2eWFzd29yLCBVSS9VWDogQnVkZGhpLCBEZXZPcHM6IFVqYW5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1haWxGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9