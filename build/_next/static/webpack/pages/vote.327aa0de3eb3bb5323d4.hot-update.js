webpackHotUpdate_N_E("pages/vote",{

/***/ "./components/ProfileComplete.js":
/*!***************************************!*\
  !*** ./components/ProfileComplete.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_userService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../utils/userService */ "./utils/userService.js");
/* harmony import */ var _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/components/ProfileComplete.module.css */ "./styles/components/ProfileComplete.module.css");
/* harmony import */ var _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_5__);


var _s = $RefreshSig$(),
    _jsxFileName = "D:\\Next\\nextjs-blog\\components\\ProfileComplete.js",
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







const useQuery = () => {
  _s();

  return new URLSearchParams(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])().search);
};

_s(useQuery, "EuD9q2dZ34PfN/QO2OBhBzeMxmY=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"]];
});

let tempList = ['US', 'UK', 'Canada', 'Nepal'];

const ProfileCompleteForm = () => {
  _s2();

  const {
    0: age,
    1: setAge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: country,
    1: setCountry
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: idNo,
    1: setId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: countryList,
    1: setCountryList
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: savedUser,
    1: setSavedUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  let query = useQuery();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // Get country list from somewhere
    setCountry(tempList[0]);
    setCountryList(tempList); // Check if the user profile is completed

    setUser();
  }, []);

  const setUser = async () => {
    try {
      let user;

      if (query.get('id')) {
        user = await _utils_userService__WEBPACK_IMPORTED_MODULE_4__["default"].getUserDetails(query.get('id'));
      } else {
        user = await _utils_userService__WEBPACK_IMPORTED_MODULE_4__["default"].getUserDetails(localStorage.getItem('appy-vote-user'));
      }

      if (user.error) {
        throw new Error(user.error.message);
      }

      console.log(user);
      localStorage.setItem('appy-vote-user', user.id); //If form is complete

      if (user.completed) {
        history.push('/overview');
      }

      setSavedUser(user);
    } catch (err) {
      alert('Error:', ErrorEvent.message);
      console.log(err);
    }
  };

  const logout = () => {
    localStorage.removeItem('appy-vote-user');
    localStorage.removeItem('appy-vote-user-token');
    history.push('/overview');
  }; // This will submit the login form


  const submitForm = async event => {
    //do some processing here
    // This is where we interact with the backend to login
    // redirecto to some page if registration successful
    try {
      event.preventDefault();

      let userDetails = _objectSpread({}, savedUser);

      if (age >= 18) {
        userDetails.age = age;
        userDetails.state = state;
        userDetails.country = country;
        userDetails.personalID = idNo;
        userDetails.completed = true;
        let updatedUser = await _utils_userService__WEBPACK_IMPORTED_MODULE_4__["default"].completeProfile(userDetails);

        if (updatedUser) {
          localStorage.setItem('appy-vote-user', updatedUser.id);
          history.push('/overview');
        } else {
          throw new Error('Could not update error');
        }
      } else {
        alert('You should be greater or equal to 18');
      } //User has been saved here...

    } catch (err) {
      console.log(err.message);
      alert('Something is wrong: ', err.message);
    }
  }; //JSX => JavaScript Syntax


  return __jsx("div", {
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.profileCompleteDiv,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.profileCompleteHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, "Complete profile before voting"), savedUser ? __jsx("form", {
    onSubmit: submitForm,
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.profileCompleteForm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "text",
    value: savedUser.displayName,
    disabled: true,
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.neoInputDisabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "text",
    value: savedUser.email,
    disabled: true,
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.neoInputDisabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "number",
    onChange: event => setAge(event.target.value),
    value: age,
    placeholder: "Age",
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.neoInput,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "text",
    onChange: event => setState(event.target.value),
    value: state,
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.neoInput,
    placeholder: "State",
    required: country === 'US',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 15
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }, __jsx("select", {
    value: country,
    onChange: event => setCountry(event.target.value),
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.neoInput,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, countryList.map((elem, id) => __jsx("option", {
    key: `Country${id}`,
    value: elem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }, elem)))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "text",
    onChange: event => setId(event.target.value),
    value: idNo,
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.neoInput,
    placeholder: "National id(optional)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 11
    }
  }, __jsx("button", {
    type: "submit",
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.profileNeoSubmitButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 13
    }
  }, "Complete My Profile")), __jsx("a", {
    onClick: logout,
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.profileLogouBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }, "LogOut")) : null);
};

_s2(ProfileCompleteForm, "D9SBjpwuT9BbH1Vd8abIepbAxIY=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"], useQuery];
});

_c = ProfileCompleteForm;
/* harmony default export */ __webpack_exports__["default"] = (ProfileCompleteForm);

var _c;

$RefreshReg$(_c, "ProfileCompleteForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlQ29tcGxldGUuanMiXSwibmFtZXMiOlsidXNlUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJ1c2VMb2NhdGlvbiIsInNlYXJjaCIsInRlbXBMaXN0IiwiUHJvZmlsZUNvbXBsZXRlRm9ybSIsImFnZSIsInNldEFnZSIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImNvdW50cnkiLCJzZXRDb3VudHJ5IiwiaWRObyIsInNldElkIiwiY291bnRyeUxpc3QiLCJzZXRDb3VudHJ5TGlzdCIsInNhdmVkVXNlciIsInNldFNhdmVkVXNlciIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwicXVlcnkiLCJ1c2VFZmZlY3QiLCJzZXRVc2VyIiwidXNlciIsImdldCIsInVzZXJTZXJ2aWNlIiwiZ2V0VXNlckRldGFpbHMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZXJyb3IiLCJFcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsImlkIiwiY29tcGxldGVkIiwicHVzaCIsImVyciIsImFsZXJ0IiwiRXJyb3JFdmVudCIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJzdWJtaXRGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJEZXRhaWxzIiwicGVyc29uYWxJRCIsInVwZGF0ZWRVc2VyIiwiY29tcGxldGVQcm9maWxlIiwic3R5bGVzIiwicHJvZmlsZUNvbXBsZXRlRGl2IiwicHJvZmlsZUNvbXBsZXRlSGVhZGVyIiwicHJvZmlsZUNvbXBsZXRlRm9ybSIsImRpc3BsYXlOYW1lIiwibmVvSW5wdXREaXNhYmxlZCIsImVtYWlsIiwidGFyZ2V0IiwidmFsdWUiLCJuZW9JbnB1dCIsIm1hcCIsImVsZW0iLCJwcm9maWxlTmVvU3VibWl0QnV0dG9uIiwicHJvZmlsZUxvZ291QnRuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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ZUFBVyxFQUFDLHVCQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQTNERixFQXFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUVULG9GQUFNLENBQUNZLHNCQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLENBckVGLEVBMkVFO0FBQUcsV0FBTyxFQUFFckIsTUFBWjtBQUFvQixhQUFTLEVBQUVTLG9GQUFNLENBQUNhLGVBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzRUYsQ0FEUSxHQWdGTixJQXJGTixDQURGO0FBeUZELENBakxEOztJQUFNM0QsbUI7VUFTWWUsMkQsRUFDSnBCLFE7OztLQVZSSyxtQjtBQW1MU0Esa0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdm90ZS4zMjdhYTBkZTNlYjNiYjUzMjNkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnksIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHVzZXJTZXJ2aWNlIGZyb20gJy4vLi4vdXRpbHMvdXNlclNlcnZpY2UnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL1Byb2ZpbGVDb21wbGV0ZS5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IHVzZVF1ZXJ5ID0gKCkgPT4ge1xyXG4gIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHVzZUxvY2F0aW9uKCkuc2VhcmNoKTtcclxufTtcclxuXHJcbmxldCB0ZW1wTGlzdCA9IFsnVVMnLCAnVUsnLCAnQ2FuYWRhJywgJ05lcGFsJ107XHJcblxyXG5jb25zdCBQcm9maWxlQ29tcGxldGVGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthZ2UsIHNldEFnZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb3VudHJ5LCBzZXRDb3VudHJ5XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaWRObywgc2V0SWRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb3VudHJ5TGlzdCwgc2V0Q291bnRyeUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbc2F2ZWRVc2VyLCBzZXRTYXZlZFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcbiAgbGV0IHF1ZXJ5ID0gdXNlUXVlcnkoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEdldCBjb3VudHJ5IGxpc3QgZnJvbSBzb21ld2hlcmVcclxuICAgIHNldENvdW50cnkodGVtcExpc3RbMF0pO1xyXG4gICAgc2V0Q291bnRyeUxpc3QodGVtcExpc3QpO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIHRoZSB1c2VyIHByb2ZpbGUgaXMgY29tcGxldGVkXHJcbiAgICBzZXRVc2VyKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzZXRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHVzZXI7XHJcbiAgICAgIGlmIChxdWVyeS5nZXQoJ2lkJykpIHtcclxuICAgICAgICB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UuZ2V0VXNlckRldGFpbHMocXVlcnkuZ2V0KCdpZCcpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UuZ2V0VXNlckRldGFpbHMoXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBweS12b3RlLXVzZXInKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHVzZXIuZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXNlci5lcnJvci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcHktdm90ZS11c2VyJywgdXNlci5pZCk7XHJcblxyXG4gICAgICAvL0lmIGZvcm0gaXMgY29tcGxldGVcclxuICAgICAgaWYgKHVzZXIuY29tcGxldGVkKSB7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKCcvb3ZlcnZpZXcnKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRTYXZlZFVzZXIodXNlcik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgYWxlcnQoJ0Vycm9yOicsIEVycm9yRXZlbnQubWVzc2FnZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FwcHktdm90ZS11c2VyJyk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXBweS12b3RlLXVzZXItdG9rZW4nKTtcclxuICAgIGhpc3RvcnkucHVzaCgnL292ZXJ2aWV3Jyk7XHJcbiAgfTtcclxuXHJcbiAgLy8gVGhpcyB3aWxsIHN1Ym1pdCB0aGUgbG9naW4gZm9ybVxyXG4gIGNvbnN0IHN1Ym1pdEZvcm0gPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIC8vZG8gc29tZSBwcm9jZXNzaW5nIGhlcmVcclxuICAgIC8vIFRoaXMgaXMgd2hlcmUgd2UgaW50ZXJhY3Qgd2l0aCB0aGUgYmFja2VuZCB0byBsb2dpblxyXG4gICAgLy8gcmVkaXJlY3RvIHRvIHNvbWUgcGFnZSBpZiByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bFxyXG4gICAgdHJ5IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGxldCB1c2VyRGV0YWlscyA9IHsgLi4uc2F2ZWRVc2VyIH07XHJcbiAgICAgIGlmIChhZ2UgPj0gMTgpIHtcclxuICAgICAgICB1c2VyRGV0YWlscy5hZ2UgPSBhZ2U7XHJcbiAgICAgICAgdXNlckRldGFpbHMuc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB1c2VyRGV0YWlscy5jb3VudHJ5ID0gY291bnRyeTtcclxuICAgICAgICB1c2VyRGV0YWlscy5wZXJzb25hbElEID0gaWRObztcclxuICAgICAgICB1c2VyRGV0YWlscy5jb21wbGV0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgdXBkYXRlZFVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5jb21wbGV0ZVByb2ZpbGUodXNlckRldGFpbHMpO1xyXG4gICAgICAgIGlmICh1cGRhdGVkVXNlcikge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcHktdm90ZS11c2VyJywgdXBkYXRlZFVzZXIuaWQpO1xyXG4gICAgICAgICAgaGlzdG9yeS5wdXNoKCcvb3ZlcnZpZXcnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgdXBkYXRlIGVycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KCdZb3Ugc2hvdWxkIGJlIGdyZWF0ZXIgb3IgZXF1YWwgdG8gMTgnKTtcclxuICAgICAgfVxyXG4gICAgICAvL1VzZXIgaGFzIGJlZW4gc2F2ZWQgaGVyZS4uLlxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuICAgICAgYWxlcnQoJ1NvbWV0aGluZyBpcyB3cm9uZzogJywgZXJyLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vSlNYID0+IEphdmFTY3JpcHQgU3ludGF4XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUNvbXBsZXRlRGl2fT5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUNvbXBsZXRlSGVhZGVyfT5cclxuICAgICAgICBDb21wbGV0ZSBwcm9maWxlIGJlZm9yZSB2b3RpbmdcclxuICAgICAgPC9wPlxyXG5cclxuICAgICAge3NhdmVkVXNlciA/IChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0Rm9ybX0gY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUNvbXBsZXRlRm9ybX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NhdmVkVXNlci5kaXNwbGF5TmFtZX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZW9JbnB1dERpc2FibGVkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogZm9yIGVtYWlsICovfVxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzYXZlZFVzZXIuZW1haWx9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZW9JbnB1dERpc2FibGVkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogdGhpcyB3aWxsIGJlIGEgcm93ICovfVxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0QWdlKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YWdlfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZ2VcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmVvSW5wdXR9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0U3RhdGUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGF0ZVwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZD17Y291bnRyeSA9PT0gJ1VTJ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICB2YWx1ZT17Y291bnRyeX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRDb3VudHJ5KGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmVvSW5wdXR9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtjb3VudHJ5TGlzdC5tYXAoKGVsZW0sIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17YENvdW50cnkke2lkfWB9IHZhbHVlPXtlbGVtfT5cclxuICAgICAgICAgICAgICAgICAge2VsZW19XHJcbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0SWQoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICB2YWx1ZT17aWROb31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZW9JbnB1dH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hdGlvbmFsIGlkKG9wdGlvbmFsKVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlTmVvU3VibWl0QnV0dG9ufT5cclxuICAgICAgICAgICAgICBDb21wbGV0ZSBNeSBQcm9maWxlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGEgb25DbGljaz17bG9nb3V0fSBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlTG9nb3VCdG59PlxyXG4gICAgICAgICAgICBMb2dPdXRcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVDb21wbGV0ZUZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=