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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/VoteForm.module.css */ "./styles/components/VoteForm.module.css");
/* harmony import */ var _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_4__);
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
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
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
    history.push('/overview');
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
      history.push('/overview');
    } else {
      alert('Vote not registered');
    }
  }; //JSX => JavaScript Syntax


  return __jsx("div", {
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.voteFormDiv,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.voteFormHeader,
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
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.voteFormRow,
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
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.voteFormNeoInput,
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
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.voteFormRow,
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
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.voteFormNeoInput,
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
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.voteFormNeoInput,
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
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.voteFormNeoSubmitButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }, "Vote"))), __jsx("a", {
    onClick: logout,
    className: _styles_components_VoteForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.profileLogoutBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, "LogOut"));
};

_s(VoteForm, "mVmxt6fMKFLh0OQLdsictWJStC0=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Wb3RlRm9ybS5qcyJdLCJuYW1lcyI6WyJWb3RlRm9ybSIsInByaW1hcnlQYXJ0eSIsInNldFByaW1hcnlQYXJ0eSIsInVzZVN0YXRlIiwic2Vjb25kYXJ5UGFydHkiLCJzZXRTZWNvbmRhcnlQYXJ0eSIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwicGFydHlMaXN0Iiwic2V0UGFydHlMaXN0Iiwic2Vjb25kYXJ5UGFydHlMaXN0Iiwic2V0U2Vjb25kYXJ5UGFydHlMaXN0IiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJ1c2VFZmZlY3QiLCJ0ZW1wTGlzdCIsInNlbGVjdFByaW1hcnkiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyIiwicGFydHkiLCJsb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwicHVzaCIsInN1Ym1pdEZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsInZvdGVEZXRhaWxzIiwicmVnaXN0ZXJlZFZvdGUiLCJheGlvcyIsInBvc3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdldEl0ZW0iLCJzZXRJdGVtIiwiYWxlcnQiLCJzdHlsZXMiLCJ2b3RlRm9ybURpdiIsInZvdGVGb3JtSGVhZGVyIiwidm90ZUZvcm1Sb3ciLCJ2b3RlRm9ybU5lb0lucHV0IiwibWFwIiwiZWxlbSIsImlkIiwidm90ZUZvcm1OZW9TdWJtaXRCdXR0b24iLCJwcm9maWxlTG9nb3V0QnRuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxNQUFNO0FBQUE7O0FBQ3JCLFFBQU07QUFBQSxPQUFDQyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0Msc0RBQVEsQ0FBQyxFQUFELENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBc0NGLHNEQUFRLENBQUMsRUFBRCxDQUFwRDtBQUNBLFFBQU07QUFBQSxPQUFDRyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3Qkosc0RBQVEsQ0FBQyxFQUFELENBQXRDO0FBRUEsUUFBTTtBQUFBLE9BQUNLLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCTixzREFBUSxDQUFDLEVBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ08sa0JBQUQ7QUFBQSxPQUFxQkM7QUFBckIsTUFBOENSLHNEQUFRLENBQUMsRUFBRCxDQUE1RDtBQUVBLFFBQU1TLE9BQU8sR0FBR0MsbUVBQVUsRUFBMUI7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2Q7QUFDQSxRQUFJQyxRQUFRLEdBQUcsQ0FDYixFQURhLEVBRWIsaUJBRmEsRUFHYixXQUhhLEVBSWIsZ0JBSmEsRUFLYixtQkFMYSxFQU1iLGlCQU5hLENBQWY7QUFRQU4sZ0JBQVksQ0FBQ00sUUFBRCxDQUFaO0FBQ0FKLHlCQUFxQixDQUFDLENBQUMsRUFBRCxDQUFELENBQXJCO0FBQ0QsR0FaUSxFQVlOLEVBWk0sQ0FBVDs7QUFjQSxRQUFNSyxhQUFhLEdBQUlDLEtBQUQsSUFBVztBQUMvQjtBQUNBZixtQkFBZSxDQUFDZSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFmLENBRitCLENBRy9COztBQUNBLFFBQUlKLFFBQVEsR0FBR1AsU0FBUyxDQUFDWSxNQUFWLENBQWtCQyxLQUFELElBQVdBLEtBQUssS0FBS0osS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQW5ELENBQWY7QUFDQVIseUJBQXFCLENBQUNJLFFBQUQsQ0FBckI7QUFDRCxHQU5EOztBQVFBLFFBQU1PLE1BQU0sR0FBRyxNQUFNO0FBQ25CQyxnQkFBWSxDQUFDQyxVQUFiLENBQXdCLGdCQUF4QjtBQUNBRCxnQkFBWSxDQUFDQyxVQUFiLENBQXdCLHNCQUF4QjtBQUNBWixXQUFPLENBQUNhLElBQVIsQ0FBYSxXQUFiO0FBQ0QsR0FKRCxDQWhDcUIsQ0FzQ3JCOzs7QUFDQSxRQUFNQyxVQUFVLEdBQUcsTUFBT1QsS0FBUCxJQUFpQjtBQUNsQ0EsU0FBSyxDQUFDVSxjQUFOLEdBRGtDLENBRWxDOztBQUNBLFFBQUlDLFdBQVcsR0FBRztBQUNoQjNCLGtCQURnQjtBQUVoQkcsb0JBRmdCO0FBR2hCRTtBQUhnQixLQUFsQjtBQU1BLFFBQUl1QixjQUFjLEdBQUcsTUFBTUMsNENBQUssQ0FBQ0MsSUFBTixDQUN6QixpREFEeUIsRUFFekJILFdBRnlCLEVBR3pCO0FBQ0VJLGFBQU8sRUFBRTtBQUNQQyxxQkFBYSxFQUNYLFlBQVlWLFlBQVksQ0FBQ1csT0FBYixDQUFxQixzQkFBckI7QUFGUDtBQURYLEtBSHlCLENBQTNCOztBQVdBLFFBQUlMLGNBQUosRUFBb0I7QUFDbEJOLGtCQUFZLENBQUNZLE9BQWIsQ0FBcUIsMkJBQXJCLEVBQWtELElBQWxEO0FBQ0F2QixhQUFPLENBQUNhLElBQVIsQ0FBYSxXQUFiO0FBQ0QsS0FIRCxNQUdPO0FBQ0xXLFdBQUssQ0FBQyxxQkFBRCxDQUFMO0FBQ0Q7QUFDRixHQTFCRCxDQXZDcUIsQ0FtRXJCOzs7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFFQyw2RUFBTSxDQUFDQyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVELDZFQUFNLENBQUNFLGNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFHRTtBQUFNLFlBQVEsRUFBRWIsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFVyw2RUFBTSxDQUFDRyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFNBQUssRUFBRXZDLFlBRFQ7QUFFRSxZQUFRLEVBQUVlLGFBRlo7QUFHRSxZQUFRLE1BSFY7QUFJRSxhQUFTLEVBQUVxQiw2RUFBTSxDQUFDSSxnQkFKcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HakMsU0FBUyxDQUFDa0MsR0FBVixDQUFjLENBQUNDLElBQUQsRUFBT0MsRUFBUCxLQUNiO0FBQVEsT0FBRyxFQUFHLFVBQVNBLEVBQUcsRUFBMUI7QUFBNkIsU0FBSyxFQUFFRCxJQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLElBREgsQ0FERCxDQU5ILENBREYsQ0FGRixDQURGLEVBbUJFO0FBQUssYUFBUyxFQUFFTiw2RUFBTSxDQUFDRyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFNBQUssRUFBRXBDLGNBRFQ7QUFFRSxZQUFRLEVBQUdhLEtBQUQsSUFBV1osaUJBQWlCLENBQUNZLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBRnhDO0FBR0UsYUFBUyxFQUFFa0IsNkVBQU0sQ0FBQ0ksZ0JBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRy9CLGtCQUFrQixDQUFDZ0MsR0FBbkIsQ0FBdUIsQ0FBQ0MsSUFBRCxFQUFPQyxFQUFQLEtBQ3RCO0FBQVEsT0FBRyxFQUFHLFVBQVNBLEVBQUcsRUFBMUI7QUFBNkIsU0FBSyxFQUFFRCxJQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLElBREgsQ0FERCxDQUxILENBREYsQ0FGRixDQW5CRixFQW9DRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsU0FBSyxFQUFFckMsT0FEVDtBQUVFLFlBQVEsRUFBR1csS0FBRCxJQUFXVixVQUFVLENBQUNVLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBRmpDO0FBR0UsUUFBSSxFQUFFLENBSFI7QUFJRSxRQUFJLEVBQUUsRUFKUjtBQUtFLGFBQVMsRUFBRWtCLDZFQUFNLENBQUNJLGdCQUxwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQXBDRixFQWlERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUVKLDZFQUFNLENBQUNRLHVCQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FqREYsQ0FIRixFQTJERTtBQUFHLFdBQU8sRUFBRXZCLE1BQVo7QUFBb0IsYUFBUyxFQUFFZSw2RUFBTSxDQUFDUyxnQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNERixDQURGO0FBaUVELENBcklEOztHQUFNOUMsUTtVQVFZYSwyRDs7O0tBUlpiLFE7QUF1SVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZvdGUuNjUxZTFmNjgxNzU2MTJiMDM5M2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Wb3RlRm9ybS5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IFZvdGVGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcmltYXJ5UGFydHksIHNldFByaW1hcnlQYXJ0eV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3NlY29uZGFyeVBhcnR5LCBzZXRTZWNvbmRhcnlQYXJ0eV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBbcGFydHlMaXN0LCBzZXRQYXJ0eUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWNvbmRhcnlQYXJ0eUxpc3QsIHNldFNlY29uZGFyeVBhcnR5TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBHZXQgY291bnRyeSBsaXN0IGZyb20gc29tZXdoZXJlXHJcbiAgICBsZXQgdGVtcExpc3QgPSBbXHJcbiAgICAgICcnLFxyXG4gICAgICAnRG9uYWxkIEouIFRydW1wJyxcclxuICAgICAgJ0pvZSBCaWRlbicsXHJcbiAgICAgICdCZXJuZXkgU2FuZGVycycsXHJcbiAgICAgICdFbGlhemFiZXRoIFdhcnJlbicsXHJcbiAgICAgICdNaWtlIEJsb29vbWJlcmcnLFxyXG4gICAgXTtcclxuICAgIHNldFBhcnR5TGlzdCh0ZW1wTGlzdCk7XHJcbiAgICBzZXRTZWNvbmRhcnlQYXJ0eUxpc3QoWycnXSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzZWxlY3RQcmltYXJ5ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvLyAgIFNldHRpbmcgdGhlIHZhbHVlIG9mIHByaW1hcnkgcGFydHlcclxuICAgIHNldFByaW1hcnlQYXJ0eShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgLy8gUmVtb3ZlIHRoZSBwcmltYXJ5IHBhcnR5IGZyb20gdGhlIHNlY29uZGFyeSBsaXN0XHJcbiAgICBsZXQgdGVtcExpc3QgPSBwYXJ0eUxpc3QuZmlsdGVyKChwYXJ0eSkgPT4gcGFydHkgIT09IGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRTZWNvbmRhcnlQYXJ0eUxpc3QodGVtcExpc3QpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhcHB5LXZvdGUtdXNlcicpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FwcHktdm90ZS11c2VyLXRva2VuJyk7XHJcbiAgICBoaXN0b3J5LnB1c2goJy9vdmVydmlldycpO1xyXG4gIH07XHJcblxyXG4gIC8vIFRoaXMgd2lsbCBzdWJtaXQgdGhlIGxvZ2luIGZvcm1cclxuICBjb25zdCBzdWJtaXRGb3JtID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy9kbyBzb21lIHByb2Nlc3NpbmcgaGVyZVxyXG4gICAgbGV0IHZvdGVEZXRhaWxzID0ge1xyXG4gICAgICBwcmltYXJ5UGFydHksXHJcbiAgICAgIHNlY29uZGFyeVBhcnR5LFxyXG4gICAgICBjb21tZW50LFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgcmVnaXN0ZXJlZFZvdGUgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAnaHR0cHM6Ly9tYWthaS10ZXN0Lmhlcm9rdWFwcC5jb20vYXBpL3ZvdGVzL3ZvdGUnLFxyXG4gICAgICB2b3RlRGV0YWlscyxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246XHJcbiAgICAgICAgICAgICdCZWFyZXIgJyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHB5LXZvdGUtdXNlci10b2tlbicpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgaWYgKHJlZ2lzdGVyZWRWb3RlKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcHB5LXZvdGUtdXNlci12b3RlU3RhdHVzJywgdHJ1ZSk7XHJcbiAgICAgIGhpc3RvcnkucHVzaCgnL292ZXJ2aWV3Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydCgnVm90ZSBub3QgcmVnaXN0ZXJlZCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vSlNYID0+IEphdmFTY3JpcHQgU3ludGF4XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudm90ZUZvcm1EaXZ9PlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy52b3RlRm9ybUhlYWRlcn0+Q2FzdCBZb3VyIFZvdGU8L3A+XHJcblxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0Rm9ybX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRm9ybVJvd30+XHJcbiAgICAgICAgICA8bGFiZWw+UHJpbWFyeSBQYXJ0eTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcmltYXJ5UGFydHl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NlbGVjdFByaW1hcnl9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy52b3RlRm9ybU5lb0lucHV0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3BhcnR5TGlzdC5tYXAoKGVsZW0sIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17YFByaW1hcnkke2lkfWB9IHZhbHVlPXtlbGVtfT5cclxuICAgICAgICAgICAgICAgICAge2VsZW19XHJcbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRm9ybVJvd30+XHJcbiAgICAgICAgICA8bGFiZWw+U2Vjb25kYXJ5IFBhcnR5OjwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlY29uZGFyeVBhcnR5fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNlY29uZGFyeVBhcnR5KGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudm90ZUZvcm1OZW9JbnB1dH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzZWNvbmRhcnlQYXJ0eUxpc3QubWFwKChlbGVtLCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2BQcmltYXJ5JHtpZH1gfSB2YWx1ZT17ZWxlbX0+XHJcbiAgICAgICAgICAgICAgICAgIHtlbGVtfVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWw+Q29tbWVudDwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICB2YWx1ZT17Y29tbWVudH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRDb21tZW50KGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgcm93cz17NX1cclxuICAgICAgICAgICAgICBjb2xzPXs1MH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy52b3RlRm9ybU5lb0lucHV0fVxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMudm90ZUZvcm1OZW9TdWJtaXRCdXR0b259PlxyXG4gICAgICAgICAgICBWb3RlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgPGEgb25DbGljaz17bG9nb3V0fSBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlTG9nb3V0QnRufT5cclxuICAgICAgICBMb2dPdXRcclxuICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZvdGVGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9