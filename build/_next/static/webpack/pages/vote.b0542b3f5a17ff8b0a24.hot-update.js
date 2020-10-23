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
    href: "http://localhost:3001/api/users/auth/google",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
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
    href: "http://localhost:3001/api/users/auth/twitter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
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
    href: "http://localhost:3001/api/users/auth/facebook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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
  }), "\xA0\xA0 Sign-in with Facebook"))));
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

/***/ }),

/***/ "./components/VoteForm.js":
/*!********************************!*\
  !*** ./components/VoteForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/VoteForm.module.css */ "./styles/components/VoteForm.module.css");
/* harmony import */ var _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Next\\nextjs-blog\\components\\VoteForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const VoteForm = () => {
  _s();

  const {
    0: primaryParty,
    1: setPrimaryParty
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: secondaryParty,
    1: setSecondaryParty
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: comment,
    1: setComment
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: partyList,
    1: setPartyList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: secondaryPartyList,
    1: setSecondaryPartyList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Get country list from somewhere
    let tempList = ['', 'Donald J. Trump', 'Joe Biden', 'Berney Sanders', 'Eliazabeth Warren', 'Mike Blooomberg'];
    setPartyList(tempList);
    setSecondaryPartyList(['']);
  }, []);

  const selectPrimary = event => {
    //   Setting the value of primary party
    setPrimaryParty(event.target.value); // Remove the primary party from the secondary list

    let tempList = partyList.filter(party => party !== event.target.value);
    setSecondaryPartyList(tempList);
  };

  const logout = () => {
    localStorage.removeItem('appy-vote-user');
    localStorage.removeItem('appy-vote-user-token');
    router.push('/overview');
  }; // This will submit the login form


  const submitForm = async event => {
    event.preventDefault(); //do some processing here

    let voteDetails = {
      primaryParty,
      secondaryParty,
      comment
    };
    let registeredVote = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhostL3001/api/votes/vote', // 'https://makai-test.herokuapp.com/api/votes/vote',
    voteDetails, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('appy-vote-user-token')
      }
    });

    if (registeredVote) {
      localStorage.setItem('appy-vote-user-voteStatus', true);
      router.push('/overview');
    } else {
      alert('Vote not registered');
    }
  }; //JSX => JavaScript Syntax


  return __jsx("div", {
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.voteFormDiv,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.voteFormHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, "Cast Your Vote"), __jsx("form", {
    onSubmit: submitForm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.voteFormRow,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, "Primary Party:"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx("select", {
    value: primaryParty,
    onChange: selectPrimary,
    required: true,
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.voteFormNeoInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, partyList.map((elem, id) => __jsx("option", {
    key: `Primary${id}`,
    value: elem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, elem))))), __jsx("div", {
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.voteFormRow,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, "Secondary Party:"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx("select", {
    value: secondaryParty,
    onChange: event => setSecondaryParty(event.target.value),
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.voteFormNeoInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, secondaryPartyList.map((elem, id) => __jsx("option", {
    key: `Primary${id}`,
    value: elem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, elem))))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, "Comment"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, __jsx("textarea", {
    value: comment,
    onChange: event => setComment(event.target.value),
    rows: 5,
    cols: 50,
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.voteFormNeoInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "submit",
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.voteFormNeoSubmitButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, "Vote"))), __jsx("a", {
    onClick: logout,
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.profileLogoutBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }, "LogOut"));
};

_s(VoteForm, "qnOG3PUEcV4CiXdjESM1W2ccMS0=");

_c = VoteForm;
/* harmony default export */ __webpack_exports__["default"] = (VoteForm);

var _c;

$RefreshReg$(_c, "VoteForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVm90ZUZvcm0uanMiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwic3R5bGVzIiwibG9naW5Gb3JtRGl2IiwibG9naW5Gb3JtSGVhZGVyIiwibG9naW5Gb3JtQnRuQ29udGFpbmVyIiwibG9naW5Gb3JtTmVvQnV0dG9uIiwiVm90ZUZvcm0iLCJwcmltYXJ5UGFydHkiLCJzZXRQcmltYXJ5UGFydHkiLCJ1c2VTdGF0ZSIsInNlY29uZGFyeVBhcnR5Iiwic2V0U2Vjb25kYXJ5UGFydHkiLCJjb21tZW50Iiwic2V0Q29tbWVudCIsInBhcnR5TGlzdCIsInNldFBhcnR5TGlzdCIsInNlY29uZGFyeVBhcnR5TGlzdCIsInNldFNlY29uZGFyeVBhcnR5TGlzdCIsInVzZUVmZmVjdCIsInRlbXBMaXN0Iiwic2VsZWN0UHJpbWFyeSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXIiLCJwYXJ0eSIsImxvZ291dCIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJyb3V0ZXIiLCJwdXNoIiwic3VibWl0Rm9ybSIsInByZXZlbnREZWZhdWx0Iiwidm90ZURldGFpbHMiLCJyZWdpc3RlcmVkVm90ZSIsImF4aW9zIiwicG9zdCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJhbGVydCIsInZvdGVGb3JtRGl2Iiwidm90ZUZvcm1IZWFkZXIiLCJ2b3RlRm9ybVJvdyIsInZvdGVGb3JtTmVvSW5wdXQiLCJtYXAiLCJlbGVtIiwiaWQiLCJ2b3RlRm9ybU5lb1N1Ym1pdEJ1dHRvbiIsInByb2ZpbGVMb2dvdXRCdG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUcsTUFBTTtBQUN0QixTQUNFO0FBQUssYUFBUyxFQUFFQyw4RUFB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QyxJQUFELEVBQU9DLEVBQVAsS0FDdEI7QUFBUSxPQUFHLEVBQUcsVUFBU0EsRUFBRyxFQUExQjtBQUE2QixTQUFLLEVBQUVELElBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsSUFESCxDQURELENBTEgsQ0FERixDQUZGLENBbkJGLEVBb0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUVuQyxPQURUO0FBRUUsWUFBUSxFQUFHUyxLQUFELElBQVdSLFVBQVUsQ0FBQ1EsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FGakM7QUFHRSxRQUFJLEVBQUUsQ0FIUjtBQUlFLFFBQUksRUFBRSxFQUpSO0FBS0UsYUFBUyxFQUFFdEIsNkVBQU0sQ0FBQzRDLGdCQUxwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQXBDRixFQWlERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUU1Qyw2RUFBTSxDQUFDZ0QsdUJBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQWpERixDQUhGLEVBMkRFO0FBQUcsV0FBTyxFQUFFdkIsTUFBWjtBQUFvQixhQUFTLEVBQUV6Qiw2RUFBTSxDQUFDaUQsZ0JBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzREYsQ0FERjtBQWlFRCxDQXBJRDs7R0FBTTVDLFE7O0tBQUFBLFE7QUFzSVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZvdGUuYjA1NDJiM2Y1YTE3ZmY4YjBhMjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvTG9naW5Gb3JtLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBJbUdvb2dsZSwgSW1GYWNlYm9vaywgSW1Ud2l0dGVyIH0gZnJvbSAncmVhY3QtaWNvbnMvaW0nO1xyXG5cclxuY29uc3QgTG9naW5Gb3JtID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luRm9ybURpdn0+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luRm9ybUhlYWRlcn0+WW91IG11c3QgYmUgbG9nZ2VkIGluIHRvIHZvdGU8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5Gb3JtQnRuQ29udGFpbmVyfT5cclxuICAgICAgICB7LyogPGEgaHJlZj1cImh0dHBzOi8vbWFrYWktdGVzdC5oZXJva3VhcHAuY29tL2FwaS91c2Vycy9hdXRoL2dvb2dsZVwiPiAqL31cclxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS91c2Vycy9hdXRoL2dvb2dsZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkZvcm1OZW9CdXR0b259PlxyXG4gICAgICAgICAgICA8SW1Hb29nbGUgc2l6ZT17MjR9IC8+XHJcbiAgICAgICAgICAgICZuYnNwOyZuYnNwOyBTaWduLWluIHdpdGggR29vZ2xlXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIHsvKiA8YSBocmVmPVwiaHR0cHM6Ly9tYWthaS10ZXN0Lmhlcm9rdWFwcC5jb20vYXBpL3VzZXJzL2F1dGgvdHdpdHRlclwiPiAqL31cclxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS91c2Vycy9hdXRoL3R3aXR0ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5Gb3JtTmVvQnV0dG9ufT5cclxuICAgICAgICAgICAgPEltVHdpdHRlciBzaXplPXsyNH0gLz5cclxuICAgICAgICAgICAgJm5ic3A7Jm5ic3A7U2lnbi1pbiB3aXRoIFR3aXR0ZXJcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgey8qIDxhIGhyZWY9XCJodHRwczovL21ha2FpLXRlc3QuaGVyb2t1YXBwLmNvbS9hcGkvdXNlcnMvYXV0aC9mYWNlYm9va1wiPiAqL31cclxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS91c2Vycy9hdXRoL2ZhY2Vib29rXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luRm9ybU5lb0J1dHRvbn0+XHJcbiAgICAgICAgICAgIDxJbUZhY2Vib29rIHNpemU9ezI0fSAvPlxyXG4gICAgICAgICAgICAmbmJzcDsmbmJzcDsgU2lnbi1pbiB3aXRoIEZhY2Vib29rXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Wb3RlRm9ybS5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IFZvdGVGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcmltYXJ5UGFydHksIHNldFByaW1hcnlQYXJ0eV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3NlY29uZGFyeVBhcnR5LCBzZXRTZWNvbmRhcnlQYXJ0eV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBbcGFydHlMaXN0LCBzZXRQYXJ0eUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWNvbmRhcnlQYXJ0eUxpc3QsIHNldFNlY29uZGFyeVBhcnR5TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBHZXQgY291bnRyeSBsaXN0IGZyb20gc29tZXdoZXJlXHJcbiAgICBsZXQgdGVtcExpc3QgPSBbXHJcbiAgICAgICcnLFxyXG4gICAgICAnRG9uYWxkIEouIFRydW1wJyxcclxuICAgICAgJ0pvZSBCaWRlbicsXHJcbiAgICAgICdCZXJuZXkgU2FuZGVycycsXHJcbiAgICAgICdFbGlhemFiZXRoIFdhcnJlbicsXHJcbiAgICAgICdNaWtlIEJsb29vbWJlcmcnLFxyXG4gICAgXTtcclxuICAgIHNldFBhcnR5TGlzdCh0ZW1wTGlzdCk7XHJcbiAgICBzZXRTZWNvbmRhcnlQYXJ0eUxpc3QoWycnXSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzZWxlY3RQcmltYXJ5ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvLyAgIFNldHRpbmcgdGhlIHZhbHVlIG9mIHByaW1hcnkgcGFydHlcclxuICAgIHNldFByaW1hcnlQYXJ0eShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgLy8gUmVtb3ZlIHRoZSBwcmltYXJ5IHBhcnR5IGZyb20gdGhlIHNlY29uZGFyeSBsaXN0XHJcbiAgICBsZXQgdGVtcExpc3QgPSBwYXJ0eUxpc3QuZmlsdGVyKChwYXJ0eSkgPT4gcGFydHkgIT09IGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRTZWNvbmRhcnlQYXJ0eUxpc3QodGVtcExpc3QpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhcHB5LXZvdGUtdXNlcicpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FwcHktdm90ZS11c2VyLXRva2VuJyk7XHJcbiAgICByb3V0ZXIucHVzaCgnL292ZXJ2aWV3Jyk7XHJcbiAgfTtcclxuXHJcbiAgLy8gVGhpcyB3aWxsIHN1Ym1pdCB0aGUgbG9naW4gZm9ybVxyXG4gIGNvbnN0IHN1Ym1pdEZvcm0gPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL2RvIHNvbWUgcHJvY2Vzc2luZyBoZXJlXHJcbiAgICBsZXQgdm90ZURldGFpbHMgPSB7XHJcbiAgICAgIHByaW1hcnlQYXJ0eSxcclxuICAgICAgc2Vjb25kYXJ5UGFydHksXHJcbiAgICAgIGNvbW1lbnQsXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCByZWdpc3RlcmVkVm90ZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICdodHRwOi8vbG9jYWxob3N0TDMwMDEvYXBpL3ZvdGVzL3ZvdGUnLFxyXG4gICAgICAvLyAnaHR0cHM6Ly9tYWthaS10ZXN0Lmhlcm9rdWFwcC5jb20vYXBpL3ZvdGVzL3ZvdGUnLFxyXG4gICAgICB2b3RlRGV0YWlscyxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246XHJcbiAgICAgICAgICAgICdCZWFyZXIgJyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHB5LXZvdGUtdXNlci10b2tlbicpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgaWYgKHJlZ2lzdGVyZWRWb3RlKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcHB5LXZvdGUtdXNlci12b3RlU3RhdHVzJywgdHJ1ZSk7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvb3ZlcnZpZXcnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KCdWb3RlIG5vdCByZWdpc3RlcmVkJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy9KU1ggPT4gSmF2YVNjcmlwdCBTeW50YXhcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRm9ybURpdn0+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnZvdGVGb3JtSGVhZGVyfT5DYXN0IFlvdXIgVm90ZTwvcD5cclxuXHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRGb3JtfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvdGVGb3JtUm93fT5cclxuICAgICAgICAgIDxsYWJlbD5QcmltYXJ5IFBhcnR5OjwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ByaW1hcnlQYXJ0eX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2VsZWN0UHJpbWFyeX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnZvdGVGb3JtTmVvSW5wdXR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7cGFydHlMaXN0Lm1hcCgoZWxlbSwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtgUHJpbWFyeSR7aWR9YH0gdmFsdWU9e2VsZW19PlxyXG4gICAgICAgICAgICAgICAgICB7ZWxlbX1cclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvdGVGb3JtUm93fT5cclxuICAgICAgICAgIDxsYWJlbD5TZWNvbmRhcnkgUGFydHk6PC9sYWJlbD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICB2YWx1ZT17c2Vjb25kYXJ5UGFydHl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0U2Vjb25kYXJ5UGFydHkoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy52b3RlRm9ybU5lb0lucHV0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3NlY29uZGFyeVBhcnR5TGlzdC5tYXAoKGVsZW0sIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17YFByaW1hcnkke2lkfWB9IHZhbHVlPXtlbGVtfT5cclxuICAgICAgICAgICAgICAgICAge2VsZW19XHJcbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbD5Db21tZW50PC9sYWJlbD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb21tZW50fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldENvbW1lbnQoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICByb3dzPXs1fVxyXG4gICAgICAgICAgICAgIGNvbHM9ezUwfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnZvdGVGb3JtTmVvSW5wdXR9XHJcbiAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRm9ybU5lb1N1Ym1pdEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIFZvdGVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICA8YSBvbkNsaWNrPXtsb2dvdXR9IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVMb2dvdXRCdG59PlxyXG4gICAgICAgIExvZ091dFxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVm90ZUZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=