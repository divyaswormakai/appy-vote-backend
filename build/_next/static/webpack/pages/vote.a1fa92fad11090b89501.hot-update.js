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
    let registeredVote = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post( // 'http://localhostL3001/api/votes/vote',
    'https://makai-test.herokuapp.com/api/votes/vote', voteDetails, {
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
  }, elem))))), __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, "Comment"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
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
      lineNumber: 117,
      columnNumber: 11
    }
  })), __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Wb3RlRm9ybS5qcyJdLCJuYW1lcyI6WyJWb3RlRm9ybSIsInByaW1hcnlQYXJ0eSIsInNldFByaW1hcnlQYXJ0eSIsInVzZVN0YXRlIiwic2Vjb25kYXJ5UGFydHkiLCJzZXRTZWNvbmRhcnlQYXJ0eSIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwicGFydHlMaXN0Iiwic2V0UGFydHlMaXN0Iiwic2Vjb25kYXJ5UGFydHlMaXN0Iiwic2V0U2Vjb25kYXJ5UGFydHlMaXN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidGVtcExpc3QiLCJzZWxlY3RQcmltYXJ5IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlciIsInBhcnR5IiwibG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giLCJzdWJtaXRGb3JtIiwicHJldmVudERlZmF1bHQiLCJ2b3RlRGV0YWlscyIsInJlZ2lzdGVyZWRWb3RlIiwiYXhpb3MiLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXRJdGVtIiwic2V0SXRlbSIsImFsZXJ0Iiwic3R5bGVzIiwidm90ZUZvcm1EaXYiLCJ2b3RlRm9ybUhlYWRlciIsInZvdGVGb3JtUm93Iiwidm90ZUZvcm1OZW9JbnB1dCIsIm1hcCIsImVsZW0iLCJpZCIsInZvdGVGb3JtTmVvU3VibWl0QnV0dG9uIiwicHJvZmlsZUxvZ291dEJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUFBOztBQUNyQixRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NDLHNEQUFRLENBQUMsRUFBRCxDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDQyxjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDRixzREFBUSxDQUFDLEVBQUQsQ0FBcEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0csT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JKLHNEQUFRLENBQUMsRUFBRCxDQUF0QztBQUVBLFFBQU07QUFBQSxPQUFDSyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0Qk4sc0RBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNPLGtCQUFEO0FBQUEsT0FBcUJDO0FBQXJCLE1BQThDUixzREFBUSxDQUFDLEVBQUQsQ0FBNUQ7QUFFQSxRQUFNUyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkO0FBQ0EsUUFBSUMsUUFBUSxHQUFHLENBQ2IsRUFEYSxFQUViLGlCQUZhLEVBR2IsV0FIYSxFQUliLGdCQUphLEVBS2IsbUJBTGEsRUFNYixpQkFOYSxDQUFmO0FBUUFOLGdCQUFZLENBQUNNLFFBQUQsQ0FBWjtBQUNBSix5QkFBcUIsQ0FBQyxDQUFDLEVBQUQsQ0FBRCxDQUFyQjtBQUNELEdBWlEsRUFZTixFQVpNLENBQVQ7O0FBY0EsUUFBTUssYUFBYSxHQUFJQyxLQUFELElBQVc7QUFDL0I7QUFDQWYsbUJBQWUsQ0FBQ2UsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBZixDQUYrQixDQUcvQjs7QUFDQSxRQUFJSixRQUFRLEdBQUdQLFNBQVMsQ0FBQ1ksTUFBVixDQUFrQkMsS0FBRCxJQUFXQSxLQUFLLEtBQUtKLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFuRCxDQUFmO0FBQ0FSLHlCQUFxQixDQUFDSSxRQUFELENBQXJCO0FBQ0QsR0FORDs7QUFRQSxRQUFNTyxNQUFNLEdBQUcsTUFBTTtBQUNuQkMsZ0JBQVksQ0FBQ0MsVUFBYixDQUF3QixnQkFBeEI7QUFDQUQsZ0JBQVksQ0FBQ0MsVUFBYixDQUF3QixzQkFBeEI7QUFDQVosVUFBTSxDQUFDYSxJQUFQLENBQVksV0FBWjtBQUNELEdBSkQsQ0FoQ3FCLENBc0NyQjs7O0FBQ0EsUUFBTUMsVUFBVSxHQUFHLE1BQU9ULEtBQVAsSUFBaUI7QUFDbENBLFNBQUssQ0FBQ1UsY0FBTixHQURrQyxDQUVsQzs7QUFDQSxRQUFJQyxXQUFXLEdBQUc7QUFDaEIzQixrQkFEZ0I7QUFFaEJHLG9CQUZnQjtBQUdoQkU7QUFIZ0IsS0FBbEI7QUFNQSxRQUFJdUIsY0FBYyxHQUFHLE1BQU1DLDRDQUFLLENBQUNDLElBQU4sRUFDekI7QUFDQSxxREFGeUIsRUFHekJILFdBSHlCLEVBSXpCO0FBQ0VJLGFBQU8sRUFBRTtBQUNQQyxxQkFBYSxFQUNYLFlBQVlWLFlBQVksQ0FBQ1csT0FBYixDQUFxQixzQkFBckI7QUFGUDtBQURYLEtBSnlCLENBQTNCOztBQVlBLFFBQUlMLGNBQUosRUFBb0I7QUFDbEJOLGtCQUFZLENBQUNZLE9BQWIsQ0FBcUIsMkJBQXJCLEVBQWtELElBQWxEO0FBQ0F2QixZQUFNLENBQUNhLElBQVAsQ0FBWSxXQUFaO0FBQ0QsS0FIRCxNQUdPO0FBQ0xXLFdBQUssQ0FBQyxxQkFBRCxDQUFMO0FBQ0Q7QUFDRixHQTNCRCxDQXZDcUIsQ0FvRXJCOzs7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFFQyw2RUFBTSxDQUFDQyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVELDZFQUFNLENBQUNFLGNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFHRTtBQUFNLFlBQVEsRUFBRWIsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFVyw2RUFBTSxDQUFDRyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFNBQUssRUFBRXZDLFlBRFQ7QUFFRSxZQUFRLEVBQUVlLGFBRlo7QUFHRSxZQUFRLE1BSFY7QUFJRSxhQUFTLEVBQUVxQiw2RUFBTSxDQUFDSSxnQkFKcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HakMsU0FBUyxDQUFDa0MsR0FBVixDQUFjLENBQUNDLElBQUQsRUFBT0MsRUFBUCxLQUNiO0FBQVEsT0FBRyxFQUFHLFVBQVNBLEVBQUcsRUFBMUI7QUFBNkIsU0FBSyxFQUFFRCxJQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLElBREgsQ0FERCxDQU5ILENBREYsQ0FGRixDQURGLEVBbUJFO0FBQUssYUFBUyxFQUFFTiw2RUFBTSxDQUFDRyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFNBQUssRUFBRXBDLGNBRFQ7QUFFRSxZQUFRLEVBQUdhLEtBQUQsSUFBV1osaUJBQWlCLENBQUNZLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBRnhDO0FBR0UsYUFBUyxFQUFFa0IsNkVBQU0sQ0FBQ0ksZ0JBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRy9CLGtCQUFrQixDQUFDZ0MsR0FBbkIsQ0FBdUIsQ0FBQ0MsSUFBRCxFQUFPQyxFQUFQLEtBQ3RCO0FBQVEsT0FBRyxFQUFHLFVBQVNBLEVBQUcsRUFBMUI7QUFBNkIsU0FBSyxFQUFFRCxJQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLElBREgsQ0FERCxDQUxILENBREYsQ0FGRixDQW5CRixFQW9DRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcENGLEVBcUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFNBQUssRUFBRXJDLE9BRFQ7QUFFRSxZQUFRLEVBQUdXLEtBQUQsSUFBV1YsVUFBVSxDQUFDVSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUZqQztBQUdFLFFBQUksRUFBRSxDQUhSO0FBSUUsUUFBSSxFQUFFLEVBSlI7QUFLRSxhQUFTLEVBQUVrQiw2RUFBTSxDQUFDSSxnQkFMcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBckNGLEVBK0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBRUosNkVBQU0sQ0FBQ1EsdUJBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQS9DRixDQUhGLEVBeURFO0FBQUcsV0FBTyxFQUFFdkIsTUFBWjtBQUFvQixhQUFTLEVBQUVlLDZFQUFNLENBQUNTLGdCQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekRGLENBREY7QUErREQsQ0FwSUQ7O0dBQU05QyxRO1VBUVdhLHFEOzs7S0FSWGIsUTtBQXNJU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdm90ZS5hMWZhOTJmYWQxMTA5MGI4OTUwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Wb3RlRm9ybS5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IFZvdGVGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcmltYXJ5UGFydHksIHNldFByaW1hcnlQYXJ0eV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3NlY29uZGFyeVBhcnR5LCBzZXRTZWNvbmRhcnlQYXJ0eV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBbcGFydHlMaXN0LCBzZXRQYXJ0eUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWNvbmRhcnlQYXJ0eUxpc3QsIHNldFNlY29uZGFyeVBhcnR5TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gR2V0IGNvdW50cnkgbGlzdCBmcm9tIHNvbWV3aGVyZVxyXG4gICAgbGV0IHRlbXBMaXN0ID0gW1xyXG4gICAgICAnJyxcclxuICAgICAgJ0RvbmFsZCBKLiBUcnVtcCcsXHJcbiAgICAgICdKb2UgQmlkZW4nLFxyXG4gICAgICAnQmVybmV5IFNhbmRlcnMnLFxyXG4gICAgICAnRWxpYXphYmV0aCBXYXJyZW4nLFxyXG4gICAgICAnTWlrZSBCbG9vb21iZXJnJyxcclxuICAgIF07XHJcbiAgICBzZXRQYXJ0eUxpc3QodGVtcExpc3QpO1xyXG4gICAgc2V0U2Vjb25kYXJ5UGFydHlMaXN0KFsnJ10pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0UHJpbWFyeSA9IChldmVudCkgPT4ge1xyXG4gICAgLy8gICBTZXR0aW5nIHRoZSB2YWx1ZSBvZiBwcmltYXJ5IHBhcnR5XHJcbiAgICBzZXRQcmltYXJ5UGFydHkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIC8vIFJlbW92ZSB0aGUgcHJpbWFyeSBwYXJ0eSBmcm9tIHRoZSBzZWNvbmRhcnkgbGlzdFxyXG4gICAgbGV0IHRlbXBMaXN0ID0gcGFydHlMaXN0LmZpbHRlcigocGFydHkpID0+IHBhcnR5ICE9PSBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0U2Vjb25kYXJ5UGFydHlMaXN0KHRlbXBMaXN0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXBweS12b3RlLXVzZXInKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhcHB5LXZvdGUtdXNlci10b2tlbicpO1xyXG4gICAgcm91dGVyLnB1c2goJy9vdmVydmlldycpO1xyXG4gIH07XHJcblxyXG4gIC8vIFRoaXMgd2lsbCBzdWJtaXQgdGhlIGxvZ2luIGZvcm1cclxuICBjb25zdCBzdWJtaXRGb3JtID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy9kbyBzb21lIHByb2Nlc3NpbmcgaGVyZVxyXG4gICAgbGV0IHZvdGVEZXRhaWxzID0ge1xyXG4gICAgICBwcmltYXJ5UGFydHksXHJcbiAgICAgIHNlY29uZGFyeVBhcnR5LFxyXG4gICAgICBjb21tZW50LFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgcmVnaXN0ZXJlZFZvdGUgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAvLyAnaHR0cDovL2xvY2FsaG9zdEwzMDAxL2FwaS92b3Rlcy92b3RlJyxcclxuICAgICAgJ2h0dHBzOi8vbWFrYWktdGVzdC5oZXJva3VhcHAuY29tL2FwaS92b3Rlcy92b3RlJyxcclxuICAgICAgdm90ZURldGFpbHMsXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOlxyXG4gICAgICAgICAgICAnQmVhcmVyICcgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBweS12b3RlLXVzZXItdG9rZW4nKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGlmIChyZWdpc3RlcmVkVm90ZSkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXBweS12b3RlLXVzZXItdm90ZVN0YXR1cycsIHRydWUpO1xyXG4gICAgICByb3V0ZXIucHVzaCgnL292ZXJ2aWV3Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydCgnVm90ZSBub3QgcmVnaXN0ZXJlZCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vSlNYID0+IEphdmFTY3JpcHQgU3ludGF4XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudm90ZUZvcm1EaXZ9PlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy52b3RlRm9ybUhlYWRlcn0+Q2FzdCBZb3VyIFZvdGU8L3A+XHJcblxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0Rm9ybX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRm9ybVJvd30+XHJcbiAgICAgICAgICA8bGFiZWw+UHJpbWFyeSBQYXJ0eTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcmltYXJ5UGFydHl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NlbGVjdFByaW1hcnl9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy52b3RlRm9ybU5lb0lucHV0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3BhcnR5TGlzdC5tYXAoKGVsZW0sIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17YFByaW1hcnkke2lkfWB9IHZhbHVlPXtlbGVtfT5cclxuICAgICAgICAgICAgICAgICAge2VsZW19XHJcbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRm9ybVJvd30+XHJcbiAgICAgICAgICA8bGFiZWw+U2Vjb25kYXJ5IFBhcnR5OjwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlY29uZGFyeVBhcnR5fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNlY29uZGFyeVBhcnR5KGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudm90ZUZvcm1OZW9JbnB1dH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzZWNvbmRhcnlQYXJ0eUxpc3QubWFwKChlbGVtLCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2BQcmltYXJ5JHtpZH1gfSB2YWx1ZT17ZWxlbX0+XHJcbiAgICAgICAgICAgICAgICAgIHtlbGVtfVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxsYWJlbD5Db21tZW50PC9sYWJlbD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRDb21tZW50KGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHJvd3M9ezV9XHJcbiAgICAgICAgICAgIGNvbHM9ezUwfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy52b3RlRm9ybU5lb0lucHV0fVxyXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRm9ybU5lb1N1Ym1pdEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIFZvdGVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICA8YSBvbkNsaWNrPXtsb2dvdXR9IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVMb2dvdXRCdG59PlxyXG4gICAgICAgIExvZ091dFxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVm90ZUZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=