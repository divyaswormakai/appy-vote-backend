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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_userService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils/userService */ "./utils/userService.js");
/* harmony import */ var _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/ProfileComplete.module.css */ "./styles/components/ProfileComplete.module.css");
/* harmony import */ var _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\Next\\nextjs-blog\\components\\ProfileComplete.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





let tempList = ['US', 'UK', 'Canada', 'Nepal'];

const ProfileCompleteForm = () => {
  _s();

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
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // Get country list from somewhere
    setCountry(tempList[0]);
    setCountryList(tempList); // Check if the user profile is completed

    setUser();
  }, []);

  const setUser = async () => {
    try {
      let user;

      if (router.query.id) {
        user = await _utils_userService__WEBPACK_IMPORTED_MODULE_3__["default"].getUserDetails(router.query.id);
      } else {
        user = await _utils_userService__WEBPACK_IMPORTED_MODULE_3__["default"].getUserDetails(localStorage.getItem('appy-vote-user'));
      }

      if (user.error) {
        throw new Error(user.error.message);
      }

      console.log(user);
      localStorage.setItem('appy-vote-user', user.id); //If form is complete

      if (user.completed) {
        router.push('/overview');
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
    router.push('/overview');
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
        let updatedUser = await _utils_userService__WEBPACK_IMPORTED_MODULE_3__["default"].completeProfile(userDetails);

        if (updatedUser) {
          localStorage.setItem('appy-vote-user', updatedUser.id);
          router.push('/vote');
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
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.profileCompleteDiv,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.profileCompleteHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, "Complete profile before voting"), savedUser ? __jsx("form", {
    onSubmit: submitForm,
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.profileCompleteForm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "text",
    value: savedUser.displayName,
    disabled: true,
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.neoInputDisabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "text",
    value: savedUser.email,
    disabled: true,
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.neoInputDisabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "number",
    onChange: event => setAge(event.target.value),
    value: age,
    placeholder: "Age",
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.neoInput,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "text",
    onChange: event => setState(event.target.value),
    value: state,
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.neoInput,
    placeholder: "State",
    required: country === 'US',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }, __jsx("select", {
    value: country,
    onChange: event => setCountry(event.target.value),
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.neoInput,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, countryList.map((elem, id) => __jsx("option", {
    key: `Country${id}`,
    value: elem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, elem)))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "text",
    onChange: event => setId(event.target.value),
    value: idNo,
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.neoInput,
    placeholder: "National id(optional)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 11
    }
  }, __jsx("button", {
    type: "submit",
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.profileNeoSubmitButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }, "Complete My Profile")), __jsx("a", {
    onClick: logout,
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.profileLogoutBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 11
    }
  }, "LogOut")) : null);
};

_s(ProfileCompleteForm, "7+AFStlKdk7RiuN1h0i4Qasdmro=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlQ29tcGxldGUuanMiXSwibmFtZXMiOlsidGVtcExpc3QiLCJQcm9maWxlQ29tcGxldGVGb3JtIiwiYWdlIiwic2V0QWdlIiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiY291bnRyeSIsInNldENvdW50cnkiLCJpZE5vIiwic2V0SWQiLCJjb3VudHJ5TGlzdCIsInNldENvdW50cnlMaXN0Iiwic2F2ZWRVc2VyIiwic2V0U2F2ZWRVc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0Iiwic2V0VXNlciIsInVzZXIiLCJxdWVyeSIsImlkIiwidXNlclNlcnZpY2UiLCJnZXRVc2VyRGV0YWlscyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlcnJvciIsIkVycm9yIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwiY29tcGxldGVkIiwicHVzaCIsImVyciIsImFsZXJ0IiwiRXJyb3JFdmVudCIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJzdWJtaXRGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJEZXRhaWxzIiwicGVyc29uYWxJRCIsInVwZGF0ZWRVc2VyIiwiY29tcGxldGVQcm9maWxlIiwic3R5bGVzIiwicHJvZmlsZUNvbXBsZXRlRGl2IiwicHJvZmlsZUNvbXBsZXRlSGVhZGVyIiwicHJvZmlsZUNvbXBsZXRlRm9ybSIsImRpc3BsYXlOYW1lIiwibmVvSW5wdXREaXNhYmxlZCIsImVtYWlsIiwidGFyZ2V0IiwidmFsdWUiLCJuZW9JbnB1dCIsIm1hcCIsImVsZW0iLCJwcm9maWxlTmVvU3VibWl0QnV0dG9uIiwicHJvZmlsZUxvZ291dEJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxRQUFRLEdBQUcsQ0FBQyxJQUFELEVBQU8sSUFBUCxF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TyxFQUFFckIsTUFBWjtBQUFvQixhQUFTLEVBQUVTLG9GQUFNLENBQUNhLGdCQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0VGLENBRFEsR0FnRk4sSUFyRk4sQ0FERjtBQXlGRCxDQWhMRDs7R0FBTTFELG1CO1VBU1dlLHFEOzs7S0FUWGYsbUI7QUFrTFNBLGtGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZvdGUuZDhlMDYzN2ZhZGNlMGI5ZDczYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB1c2VyU2VydmljZSBmcm9tICcuLy4uL3V0aWxzL3VzZXJTZXJ2aWNlJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Qcm9maWxlQ29tcGxldGUubW9kdWxlLmNzcyc7XHJcblxyXG5sZXQgdGVtcExpc3QgPSBbJ1VTJywgJ1VLJywgJ0NhbmFkYScsICdOZXBhbCddO1xyXG5cclxuY29uc3QgUHJvZmlsZUNvbXBsZXRlRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbYWdlLCBzZXRBZ2VdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY291bnRyeSwgc2V0Q291bnRyeV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lkTm8sIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY291bnRyeUxpc3QsIHNldENvdW50cnlMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW3NhdmVkVXNlciwgc2V0U2F2ZWRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEdldCBjb3VudHJ5IGxpc3QgZnJvbSBzb21ld2hlcmVcclxuICAgIHNldENvdW50cnkodGVtcExpc3RbMF0pO1xyXG4gICAgc2V0Q291bnRyeUxpc3QodGVtcExpc3QpO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIHRoZSB1c2VyIHByb2ZpbGUgaXMgY29tcGxldGVkXHJcbiAgICBzZXRVc2VyKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzZXRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHVzZXI7XHJcbiAgICAgIGlmIChyb3V0ZXIucXVlcnkuaWQpIHtcclxuICAgICAgICB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UuZ2V0VXNlckRldGFpbHMocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UuZ2V0VXNlckRldGFpbHMoXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBweS12b3RlLXVzZXInKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHVzZXIuZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXNlci5lcnJvci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcHktdm90ZS11c2VyJywgdXNlci5pZCk7XHJcblxyXG4gICAgICAvL0lmIGZvcm0gaXMgY29tcGxldGVcclxuICAgICAgaWYgKHVzZXIuY29tcGxldGVkKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9vdmVydmlldycpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFNhdmVkVXNlcih1c2VyKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBhbGVydCgnRXJyb3I6JywgRXJyb3JFdmVudC5tZXNzYWdlKTtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXBweS12b3RlLXVzZXInKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhcHB5LXZvdGUtdXNlci10b2tlbicpO1xyXG4gICAgcm91dGVyLnB1c2goJy9vdmVydmlldycpO1xyXG4gIH07XHJcblxyXG4gIC8vIFRoaXMgd2lsbCBzdWJtaXQgdGhlIGxvZ2luIGZvcm1cclxuICBjb25zdCBzdWJtaXRGb3JtID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAvL2RvIHNvbWUgcHJvY2Vzc2luZyBoZXJlXHJcbiAgICAvLyBUaGlzIGlzIHdoZXJlIHdlIGludGVyYWN0IHdpdGggdGhlIGJhY2tlbmQgdG8gbG9naW5cclxuICAgIC8vIHJlZGlyZWN0byB0byBzb21lIHBhZ2UgaWYgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWxcclxuICAgIHRyeSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBsZXQgdXNlckRldGFpbHMgPSB7IC4uLnNhdmVkVXNlciB9O1xyXG4gICAgICBpZiAoYWdlID49IDE4KSB7XHJcbiAgICAgICAgdXNlckRldGFpbHMuYWdlID0gYWdlO1xyXG4gICAgICAgIHVzZXJEZXRhaWxzLnN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdXNlckRldGFpbHMuY291bnRyeSA9IGNvdW50cnk7XHJcbiAgICAgICAgdXNlckRldGFpbHMucGVyc29uYWxJRCA9IGlkTm87XHJcbiAgICAgICAgdXNlckRldGFpbHMuY29tcGxldGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IHVwZGF0ZWRVc2VyID0gYXdhaXQgdXNlclNlcnZpY2UuY29tcGxldGVQcm9maWxlKHVzZXJEZXRhaWxzKTtcclxuICAgICAgICBpZiAodXBkYXRlZFVzZXIpIHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcHB5LXZvdGUtdXNlcicsIHVwZGF0ZWRVc2VyLmlkKTtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvdm90ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCB1cGRhdGUgZXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ1lvdSBzaG91bGQgYmUgZ3JlYXRlciBvciBlcXVhbCB0byAxOCcpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vVXNlciBoYXMgYmVlbiBzYXZlZCBoZXJlLi4uXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gICAgICBhbGVydCgnU29tZXRoaW5nIGlzIHdyb25nOiAnLCBlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy9KU1ggPT4gSmF2YVNjcmlwdCBTeW50YXhcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlQ29tcGxldGVEaXZ9PlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlQ29tcGxldGVIZWFkZXJ9PlxyXG4gICAgICAgIENvbXBsZXRlIHByb2ZpbGUgYmVmb3JlIHZvdGluZ1xyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICB7c2F2ZWRVc2VyID8gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRGb3JtfSBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlQ29tcGxldGVGb3JtfT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2F2ZWRVc2VyLmRpc3BsYXlOYW1lfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0RGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiBmb3IgZW1haWwgKi99XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NhdmVkVXNlci5lbWFpbH1cclxuICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0RGlzYWJsZWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiB0aGlzIHdpbGwgYmUgYSByb3cgKi99XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRBZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXthZ2V9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFnZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZW9JbnB1dH1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTdGF0ZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmVvSW5wdXR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXRlXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtjb3VudHJ5ID09PSAnVVMnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb3VudHJ5fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldENvdW50cnkoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZW9JbnB1dH1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2NvdW50cnlMaXN0Lm1hcCgoZWxlbSwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtgQ291bnRyeSR7aWR9YH0gdmFsdWU9e2VsZW19PlxyXG4gICAgICAgICAgICAgICAgICB7ZWxlbX1cclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRJZChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpZE5vfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmF0aW9uYWwgaWQob3B0aW9uYWwpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVOZW9TdWJtaXRCdXR0b259PlxyXG4gICAgICAgICAgICAgIENvbXBsZXRlIE15IFByb2ZpbGVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXtsb2dvdXR9IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVMb2dvdXRCdG59PlxyXG4gICAgICAgICAgICBMb2dPdXRcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVDb21wbGV0ZUZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=