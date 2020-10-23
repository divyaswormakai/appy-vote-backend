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
    let registeredVote = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('https://makai-test.herokuapp.com/api/votes/vote', voteDetails, {
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
      lineNumber: 73,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.voteFormHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, "Cast Your Vote"), __jsx("form", {
    onSubmit: submitForm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.voteFormRow,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, "Primary Party:"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
      lineNumber: 80,
      columnNumber: 13
    }
  }, partyList.map((elem, id) => __jsx("option", {
    key: `Primary${id}`,
    value: elem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, elem))))), __jsx("div", {
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.voteFormRow,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, "Secondary Party:"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx("select", {
    value: secondaryParty,
    onChange: event => setSecondaryParty(event.target.value),
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.voteFormNeoInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, secondaryPartyList.map((elem, id) => __jsx("option", {
    key: `Primary${id}`,
    value: elem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, elem))))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, "Comment"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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
      lineNumber: 115,
      columnNumber: 13
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "submit",
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.voteFormNeoSubmitButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, "Vote"))), __jsx("a", {
    onClick: logout,
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.profileLogoutBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/history/esm/history.js":
false,

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/mini-create-react-context/dist/esm/index.js":
false,

/***/ "./node_modules/next/node_modules/webpack/buildin/global.js":
false,

/***/ "./node_modules/path-to-regexp/index.js":
false,

/***/ "./node_modules/path-to-regexp/node_modules/isarray/index.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
false,

/***/ "./node_modules/react-router/esm/react-router.js":
false,

/***/ "./node_modules/resolve-pathname/esm/resolve-pathname.js":
false,

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
false,

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
false,

/***/ "./node_modules/value-equal/esm/value-equal.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Wb3RlRm9ybS5qcyJdLCJuYW1lcyI6WyJWb3RlRm9ybSIsInByaW1hcnlQYXJ0eSIsInNldFByaW1hcnlQYXJ0eSIsInVzZVN0YXRlIiwic2Vjb25kYXJ5UGFydHkiLCJzZXRTZWNvbmRhcnlQYXJ0eSIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwicGFydHlMaXN0Iiwic2V0UGFydHlMaXN0Iiwic2Vjb25kYXJ5UGFydHlMaXN0Iiwic2V0U2Vjb25kYXJ5UGFydHlMaXN0IiwidXNlRWZmZWN0IiwidGVtcExpc3QiLCJzZWxlY3RQcmltYXJ5IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlciIsInBhcnR5IiwibG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInJvdXRlciIsInB1c2giLCJzdWJtaXRGb3JtIiwicHJldmVudERlZmF1bHQiLCJ2b3RlRGV0YWlscyIsInJlZ2lzdGVyZWRWb3RlIiwiYXhpb3MiLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXRJdGVtIiwic2V0SXRlbSIsImFsZXJ0Iiwic3R5bGVzIiwidm90ZUZvcm1EaXYiLCJ2b3RlRm9ybUhlYWRlciIsInZvdGVGb3JtUm93Iiwidm90ZUZvcm1OZW9JbnB1dCIsIm1hcCIsImVsZW0iLCJpZCIsInZvdGVGb3JtTmVvU3VibWl0QnV0dG9uIiwicHJvZmlsZUxvZ291dEJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUFBOztBQUNyQixRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NDLHNEQUFRLENBQUMsRUFBRCxDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDQyxjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDRixzREFBUSxDQUFDLEVBQUQsQ0FBcEQ7QUFD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LElBQVdSLFVBQVUsQ0FBQ1EsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FGakM7QUFHRSxRQUFJLEVBQUUsQ0FIUjtBQUlFLFFBQUksRUFBRSxFQUpSO0FBS0UsYUFBUyxFQUFFbUIsNkVBQU0sQ0FBQ0ksZ0JBTHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLENBcENGLEVBaURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBRUosNkVBQU0sQ0FBQ1EsdUJBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQWpERixDQUhGLEVBMkRFO0FBQUcsV0FBTyxFQUFFeEIsTUFBWjtBQUFvQixhQUFTLEVBQUVnQiw2RUFBTSxDQUFDUyxnQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNERixDQURGO0FBaUVELENBbklEOztHQUFNN0MsUTs7S0FBQUEsUTtBQXFJU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdm90ZS4xNDhjOTRlNTQxM2JkNWM2Y2ZmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Wb3RlRm9ybS5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IFZvdGVGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcmltYXJ5UGFydHksIHNldFByaW1hcnlQYXJ0eV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3NlY29uZGFyeVBhcnR5LCBzZXRTZWNvbmRhcnlQYXJ0eV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBbcGFydHlMaXN0LCBzZXRQYXJ0eUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWNvbmRhcnlQYXJ0eUxpc3QsIHNldFNlY29uZGFyeVBhcnR5TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBHZXQgY291bnRyeSBsaXN0IGZyb20gc29tZXdoZXJlXHJcbiAgICBsZXQgdGVtcExpc3QgPSBbXHJcbiAgICAgICcnLFxyXG4gICAgICAnRG9uYWxkIEouIFRydW1wJyxcclxuICAgICAgJ0pvZSBCaWRlbicsXHJcbiAgICAgICdCZXJuZXkgU2FuZGVycycsXHJcbiAgICAgICdFbGlhemFiZXRoIFdhcnJlbicsXHJcbiAgICAgICdNaWtlIEJsb29vbWJlcmcnLFxyXG4gICAgXTtcclxuICAgIHNldFBhcnR5TGlzdCh0ZW1wTGlzdCk7XHJcbiAgICBzZXRTZWNvbmRhcnlQYXJ0eUxpc3QoWycnXSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzZWxlY3RQcmltYXJ5ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvLyAgIFNldHRpbmcgdGhlIHZhbHVlIG9mIHByaW1hcnkgcGFydHlcclxuICAgIHNldFByaW1hcnlQYXJ0eShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgLy8gUmVtb3ZlIHRoZSBwcmltYXJ5IHBhcnR5IGZyb20gdGhlIHNlY29uZGFyeSBsaXN0XHJcbiAgICBsZXQgdGVtcExpc3QgPSBwYXJ0eUxpc3QuZmlsdGVyKChwYXJ0eSkgPT4gcGFydHkgIT09IGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRTZWNvbmRhcnlQYXJ0eUxpc3QodGVtcExpc3QpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhcHB5LXZvdGUtdXNlcicpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FwcHktdm90ZS11c2VyLXRva2VuJyk7XHJcbiAgICByb3V0ZXIucHVzaCgnL292ZXJ2aWV3Jyk7XHJcbiAgfTtcclxuXHJcbiAgLy8gVGhpcyB3aWxsIHN1Ym1pdCB0aGUgbG9naW4gZm9ybVxyXG4gIGNvbnN0IHN1Ym1pdEZvcm0gPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL2RvIHNvbWUgcHJvY2Vzc2luZyBoZXJlXHJcbiAgICBsZXQgdm90ZURldGFpbHMgPSB7XHJcbiAgICAgIHByaW1hcnlQYXJ0eSxcclxuICAgICAgc2Vjb25kYXJ5UGFydHksXHJcbiAgICAgIGNvbW1lbnQsXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCByZWdpc3RlcmVkVm90ZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICdodHRwczovL21ha2FpLXRlc3QuaGVyb2t1YXBwLmNvbS9hcGkvdm90ZXMvdm90ZScsXHJcbiAgICAgIHZvdGVEZXRhaWxzLFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjpcclxuICAgICAgICAgICAgJ0JlYXJlciAnICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcHktdm90ZS11c2VyLXRva2VuJyksXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAocmVnaXN0ZXJlZFZvdGUpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcHktdm90ZS11c2VyLXZvdGVTdGF0dXMnLCB0cnVlKTtcclxuICAgICAgcm91dGVyLnB1c2goJy9vdmVydmlldycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoJ1ZvdGUgbm90IHJlZ2lzdGVyZWQnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvL0pTWCA9PiBKYXZhU2NyaXB0IFN5bnRheFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvdGVGb3JtRGl2fT5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudm90ZUZvcm1IZWFkZXJ9PkNhc3QgWW91ciBWb3RlPC9wPlxyXG5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEZvcm19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudm90ZUZvcm1Sb3d9PlxyXG4gICAgICAgICAgPGxhYmVsPlByaW1hcnkgUGFydHk6PC9sYWJlbD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICB2YWx1ZT17cHJpbWFyeVBhcnR5fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZWxlY3RQcmltYXJ5fVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudm90ZUZvcm1OZW9JbnB1dH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtwYXJ0eUxpc3QubWFwKChlbGVtLCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2BQcmltYXJ5JHtpZH1gfSB2YWx1ZT17ZWxlbX0+XHJcbiAgICAgICAgICAgICAgICAgIHtlbGVtfVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudm90ZUZvcm1Sb3d9PlxyXG4gICAgICAgICAgPGxhYmVsPlNlY29uZGFyeSBQYXJ0eTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWNvbmRhcnlQYXJ0eX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTZWNvbmRhcnlQYXJ0eShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnZvdGVGb3JtTmVvSW5wdXR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c2Vjb25kYXJ5UGFydHlMaXN0Lm1hcCgoZWxlbSwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtgUHJpbWFyeSR7aWR9YH0gdmFsdWU9e2VsZW19PlxyXG4gICAgICAgICAgICAgICAgICB7ZWxlbX1cclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsPkNvbW1lbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0Q29tbWVudChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHJvd3M9ezV9XHJcbiAgICAgICAgICAgICAgY29scz17NTB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudm90ZUZvcm1OZW9JbnB1dH1cclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLnZvdGVGb3JtTmVvU3VibWl0QnV0dG9ufT5cclxuICAgICAgICAgICAgVm90ZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgIDxhIG9uQ2xpY2s9e2xvZ291dH0gY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUxvZ291dEJ0bn0+XHJcbiAgICAgICAgTG9nT3V0XHJcbiAgICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWb3RlRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==