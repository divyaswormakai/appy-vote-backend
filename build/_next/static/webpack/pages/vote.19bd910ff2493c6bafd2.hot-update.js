webpackHotUpdate_N_E("pages/vote",{

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
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
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
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.voteFormHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, "Cast Your Vote"), __jsx("form", {
    onSubmit: submitForm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.voteFormRow,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, "Primary Party:"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
      lineNumber: 83,
      columnNumber: 13
    }
  }, partyList.map((elem, id) => __jsx("option", {
    key: `Primary${id}`,
    value: elem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, elem))))), __jsx("div", {
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.voteFormRow,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, "Secondary Party:"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, __jsx("select", {
    value: secondaryParty,
    onChange: event => setSecondaryParty(event.target.value),
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.voteFormNeoInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, secondaryPartyList.map((elem, id) => __jsx("option", {
    key: `Primary${id}`,
    value: elem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, elem))))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, "Comment"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
      lineNumber: 118,
      columnNumber: 13
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "submit",
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.voteFormNeoSubmitButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }, "Vote"))), __jsx("a", {
    onClick: logout,
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.profileLogoutBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, "LogOut"));
};

_s(VoteForm, "9BwQUVU7c9mI+KqJBSDAlr8zVIg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Wb3RlRm9ybS5qcyJdLCJuYW1lcyI6WyJWb3RlRm9ybSIsInByaW1hcnlQYXJ0eSIsInNldFByaW1hcnlQYXJ0eSIsInVzZVN0YXRlIiwic2Vjb25kYXJ5UGFydHkiLCJzZXRTZWNvbmRhcnlQYXJ0eSIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwicGFydHlMaXN0Iiwic2V0UGFydHlMaXN0Iiwic2Vjb25kYXJ5UGFydHlMaXN0Iiwic2V0U2Vjb25kYXJ5UGFydHlMaXN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidGVtcExpc3QiLCJzZWxlY3RQcmltYXJ5IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlciIsInBhcnR5IiwibG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giLCJzdWJtaXRGb3JtIiwicHJldmVudERlZmF1bHQiLCJ2b3RlRGV0YWlscyIsInJlZ2lzdGVyZWRWb3RlIiwiYXhpb3MiLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXRJdGVtIiwic2V0SXRlbSIsImFsZXJ0Iiwic3R5bGVzIiwidm90ZUZvcm1EaXYiLCJ2b3RlRm9ybUhlYWRlciIsInZvdGVGb3JtUm93Iiwidm90ZUZvcm1OZW9JbnB1dCIsIm1hcCIsImVsZW0iLCJpZCIsInZvdGVGb3JtTmVvU3VibWl0QnV0dG9uIiwicHJvZmlsZUxvZ291dEJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUFBOztBQUNyQixRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NDLHNEQUFRLENBQUMsRUFBRCxDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDQyxjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDRixzREFBUSxDQUFDLEVB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QUFBQSxLQUNFO0FBQ0UsU0FBSyxFQUFFckMsT0FEVDtBQUVFLFlBQVEsRUFBR1csS0FBRCxJQUFXVixVQUFVLENBQUNVLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBRmpDO0FBR0UsUUFBSSxFQUFFLENBSFI7QUFJRSxRQUFJLEVBQUUsRUFKUjtBQUtFLGFBQVMsRUFBRWtCLDZFQUFNLENBQUNJLGdCQUxwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQXBDRixFQWlERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUVKLDZFQUFNLENBQUNRLHVCQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FqREYsQ0FIRixFQTJERTtBQUFHLFdBQU8sRUFBRXZCLE1BQVo7QUFBb0IsYUFBUyxFQUFFZSw2RUFBTSxDQUFDUyxnQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNERixDQURGO0FBaUVELENBdElEOztHQUFNOUMsUTtVQVFXYSxxRDs7O0tBUlhiLFE7QUF3SVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZvdGUuMTliZDkxMGZmMjQ5M2M2YmFmZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvVm90ZUZvcm0ubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBWb3RlRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbcHJpbWFyeVBhcnR5LCBzZXRQcmltYXJ5UGFydHldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzZWNvbmRhcnlQYXJ0eSwgc2V0U2Vjb25kYXJ5UGFydHldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgW3BhcnR5TGlzdCwgc2V0UGFydHlMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2Vjb25kYXJ5UGFydHlMaXN0LCBzZXRTZWNvbmRhcnlQYXJ0eUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEdldCBjb3VudHJ5IGxpc3QgZnJvbSBzb21ld2hlcmVcclxuICAgIGxldCB0ZW1wTGlzdCA9IFtcclxuICAgICAgJycsXHJcbiAgICAgICdEb25hbGQgSi4gVHJ1bXAnLFxyXG4gICAgICAnSm9lIEJpZGVuJyxcclxuICAgICAgJ0Jlcm5leSBTYW5kZXJzJyxcclxuICAgICAgJ0VsaWF6YWJldGggV2FycmVuJyxcclxuICAgICAgJ01pa2UgQmxvb29tYmVyZycsXHJcbiAgICBdO1xyXG4gICAgc2V0UGFydHlMaXN0KHRlbXBMaXN0KTtcclxuICAgIHNldFNlY29uZGFyeVBhcnR5TGlzdChbJyddKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNlbGVjdFByaW1hcnkgPSAoZXZlbnQpID0+IHtcclxuICAgIC8vICAgU2V0dGluZyB0aGUgdmFsdWUgb2YgcHJpbWFyeSBwYXJ0eVxyXG4gICAgc2V0UHJpbWFyeVBhcnR5KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyBSZW1vdmUgdGhlIHByaW1hcnkgcGFydHkgZnJvbSB0aGUgc2Vjb25kYXJ5IGxpc3RcclxuICAgIGxldCB0ZW1wTGlzdCA9IHBhcnR5TGlzdC5maWx0ZXIoKHBhcnR5KSA9PiBwYXJ0eSAhPT0gZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIHNldFNlY29uZGFyeVBhcnR5TGlzdCh0ZW1wTGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FwcHktdm90ZS11c2VyJyk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXBweS12b3RlLXVzZXItdG9rZW4nKTtcclxuICAgIHJvdXRlci5wdXNoKCcvb3ZlcnZpZXcnKTtcclxuICB9O1xyXG5cclxuICAvLyBUaGlzIHdpbGwgc3VibWl0IHRoZSBsb2dpbiBmb3JtXHJcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vZG8gc29tZSBwcm9jZXNzaW5nIGhlcmVcclxuICAgIGxldCB2b3RlRGV0YWlscyA9IHtcclxuICAgICAgcHJpbWFyeVBhcnR5LFxyXG4gICAgICBzZWNvbmRhcnlQYXJ0eSxcclxuICAgICAgY29tbWVudCxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHJlZ2lzdGVyZWRWb3RlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3RMMzAwMS9hcGkvdm90ZXMvdm90ZScsXHJcbiAgICAgIC8vICdodHRwczovL21ha2FpLXRlc3QuaGVyb2t1YXBwLmNvbS9hcGkvdm90ZXMvdm90ZScsXHJcbiAgICAgIHZvdGVEZXRhaWxzLFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjpcclxuICAgICAgICAgICAgJ0JlYXJlciAnICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcHktdm90ZS11c2VyLXRva2VuJyksXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAocmVnaXN0ZXJlZFZvdGUpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcHktdm90ZS11c2VyLXZvdGVTdGF0dXMnLCB0cnVlKTtcclxuICAgICAgcm91dGVyLnB1c2goJy9vdmVydmlldycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoJ1ZvdGUgbm90IHJlZ2lzdGVyZWQnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvL0pTWCA9PiBKYXZhU2NyaXB0IFN5bnRheFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvdGVGb3JtRGl2fT5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudm90ZUZvcm1IZWFkZXJ9PkNhc3QgWW91ciBWb3RlPC9wPlxyXG5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEZvcm19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudm90ZUZvcm1Sb3d9PlxyXG4gICAgICAgICAgPGxhYmVsPlByaW1hcnkgUGFydHk6PC9sYWJlbD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICB2YWx1ZT17cHJpbWFyeVBhcnR5fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZWxlY3RQcmltYXJ5fVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudm90ZUZvcm1OZW9JbnB1dH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtwYXJ0eUxpc3QubWFwKChlbGVtLCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2BQcmltYXJ5JHtpZH1gfSB2YWx1ZT17ZWxlbX0+XHJcbiAgICAgICAgICAgICAgICAgIHtlbGVtfVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudm90ZUZvcm1Sb3d9PlxyXG4gICAgICAgICAgPGxhYmVsPlNlY29uZGFyeSBQYXJ0eTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWNvbmRhcnlQYXJ0eX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTZWNvbmRhcnlQYXJ0eShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnZvdGVGb3JtTmVvSW5wdXR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c2Vjb25kYXJ5UGFydHlMaXN0Lm1hcCgoZWxlbSwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtgUHJpbWFyeSR7aWR9YH0gdmFsdWU9e2VsZW19PlxyXG4gICAgICAgICAgICAgICAgICB7ZWxlbX1cclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsPkNvbW1lbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0Q29tbWVudChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHJvd3M9ezV9XHJcbiAgICAgICAgICAgICAgY29scz17NTB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudm90ZUZvcm1OZW9JbnB1dH1cclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLnZvdGVGb3JtTmVvU3VibWl0QnV0dG9ufT5cclxuICAgICAgICAgICAgVm90ZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgIDxhIG9uQ2xpY2s9e2xvZ291dH0gY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUxvZ291dEJ0bn0+XHJcbiAgICAgICAgTG9nT3V0XHJcbiAgICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWb3RlRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==