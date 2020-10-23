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
          router.reload();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlQ29tcGxldGUuanMiXSwibmFtZXMiOlsidGVtcExpc3QiLCJQcm9maWxlQ29tcGxldGVGb3JtIiwiYWdlIiwic2V0QWdlIiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiY291bnRyeSIsInNldENvdW50cnkiLCJpZE5vIiwic2V0SWQiLCJjb3VudHJ5TGlzdCIsInNldENvdW50cnlMaXN0Iiwic2F2ZWRVc2VyIiwic2V0U2F2ZWRVc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0Iiwic2V0VXNlciIsInVzZXIiLCJxdWVyeSIsImlkIiwidXNlclNlcnZpY2UiLCJnZXRVc2VyRGV0YWlscyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlcnJvciIsIkVycm9yIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwiY29tcGxldGVkIiwicHVzaCIsImVyciIsImFsZXJ0IiwiRXJyb3JFdmVudCIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJzdWJtaXRGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJEZXRhaWxzIiwicGVyc29uYWxJRCIsInVwZGF0ZWRVc2VyIiwiY29tcGxldGVQcm9maWxlIiwicmVsb2FkIiwic3R5bGVzIiwicHJvZmlsZUNvbXBsZXRlRGl2IiwicHJvZmlsZUNvbXBsZXRlSGVhZGVyIiwicHJvZmlsZUNvbXBsZXRlRm9ybSIsImRpc3BsYXlOYW1lIiwibmVvSW5wdXREaXNhYmxlZCIsImVtYWlsIiwidGFyZ2V0IiwidmFsdWUiLCJuZW9JbnB1dCIsIm1hcCIsImVsZW0iLCJwcm9maWxlTmVvU3VibWl0QnV0dG9uIiwicHJvZmlsZUxvZ291dEJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxRQUFRLEdBQUcsQ0FBQyxJQUFELEVB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QU8sRUFBRXRCLE1BQVo7QUFBb0IsYUFBUyxFQUFFVSxvRkFBTSxDQUFDYSxnQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNFRixDQURRLEdBZ0ZOLElBckZOLENBREY7QUF5RkQsQ0FoTEQ7O0dBQU0zRCxtQjtVQVNXZSxxRDs7O0tBVFhmLG1CO0FBa0xTQSxrRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92b3RlLjk4MWVjNzk3ZWIwM2FiNTAwZDJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgdXNlclNlcnZpY2UgZnJvbSAnLi8uLi91dGlscy91c2VyU2VydmljZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvUHJvZmlsZUNvbXBsZXRlLm1vZHVsZS5jc3MnO1xyXG5cclxubGV0IHRlbXBMaXN0ID0gWydVUycsICdVSycsICdDYW5hZGEnLCAnTmVwYWwnXTtcclxuXHJcbmNvbnN0IFByb2ZpbGVDb21wbGV0ZUZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FnZSwgc2V0QWdlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvdW50cnksIHNldENvdW50cnldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpZE5vLCBzZXRJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvdW50cnlMaXN0LCBzZXRDb3VudHJ5TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtzYXZlZFVzZXIsIHNldFNhdmVkVXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBHZXQgY291bnRyeSBsaXN0IGZyb20gc29tZXdoZXJlXHJcbiAgICBzZXRDb3VudHJ5KHRlbXBMaXN0WzBdKTtcclxuICAgIHNldENvdW50cnlMaXN0KHRlbXBMaXN0KTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGUgdXNlciBwcm9maWxlIGlzIGNvbXBsZXRlZFxyXG4gICAgc2V0VXNlcigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc2V0VXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB1c2VyO1xyXG4gICAgICBpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgICAgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldFVzZXJEZXRhaWxzKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldFVzZXJEZXRhaWxzKFxyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcHktdm90ZS11c2VyJylcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh1c2VyLmVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHVzZXIuZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcHB5LXZvdGUtdXNlcicsIHVzZXIuaWQpO1xyXG5cclxuICAgICAgLy9JZiBmb3JtIGlzIGNvbXBsZXRlXHJcbiAgICAgIGlmICh1c2VyLmNvbXBsZXRlZCkge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvb3ZlcnZpZXcnKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRTYXZlZFVzZXIodXNlcik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgYWxlcnQoJ0Vycm9yOicsIEVycm9yRXZlbnQubWVzc2FnZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FwcHktdm90ZS11c2VyJyk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXBweS12b3RlLXVzZXItdG9rZW4nKTtcclxuICAgIHJvdXRlci5wdXNoKCcvb3ZlcnZpZXcnKTtcclxuICB9O1xyXG5cclxuICAvLyBUaGlzIHdpbGwgc3VibWl0IHRoZSBsb2dpbiBmb3JtXHJcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgLy9kbyBzb21lIHByb2Nlc3NpbmcgaGVyZVxyXG4gICAgLy8gVGhpcyBpcyB3aGVyZSB3ZSBpbnRlcmFjdCB3aXRoIHRoZSBiYWNrZW5kIHRvIGxvZ2luXHJcbiAgICAvLyByZWRpcmVjdG8gdG8gc29tZSBwYWdlIGlmIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsXHJcbiAgICB0cnkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgbGV0IHVzZXJEZXRhaWxzID0geyAuLi5zYXZlZFVzZXIgfTtcclxuICAgICAgaWYgKGFnZSA+PSAxOCkge1xyXG4gICAgICAgIHVzZXJEZXRhaWxzLmFnZSA9IGFnZTtcclxuICAgICAgICB1c2VyRGV0YWlscy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHVzZXJEZXRhaWxzLmNvdW50cnkgPSBjb3VudHJ5O1xyXG4gICAgICAgIHVzZXJEZXRhaWxzLnBlcnNvbmFsSUQgPSBpZE5vO1xyXG4gICAgICAgIHVzZXJEZXRhaWxzLmNvbXBsZXRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCB1cGRhdGVkVXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmNvbXBsZXRlUHJvZmlsZSh1c2VyRGV0YWlscyk7XHJcbiAgICAgICAgaWYgKHVwZGF0ZWRVc2VyKSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXBweS12b3RlLXVzZXInLCB1cGRhdGVkVXNlci5pZCk7XHJcbiAgICAgICAgICByb3V0ZXIucmVsb2FkKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHVwZGF0ZSBlcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgnWW91IHNob3VsZCBiZSBncmVhdGVyIG9yIGVxdWFsIHRvIDE4Jyk7XHJcbiAgICAgIH1cclxuICAgICAgLy9Vc2VyIGhhcyBiZWVuIHNhdmVkIGhlcmUuLi5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgICAgIGFsZXJ0KCdTb21ldGhpbmcgaXMgd3Jvbmc6ICcsIGVyci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvL0pTWCA9PiBKYXZhU2NyaXB0IFN5bnRheFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVDb21wbGV0ZURpdn0+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVDb21wbGV0ZUhlYWRlcn0+XHJcbiAgICAgICAgQ29tcGxldGUgcHJvZmlsZSBiZWZvcmUgdm90aW5nXHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIHtzYXZlZFVzZXIgPyAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEZvcm19IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVDb21wbGV0ZUZvcm19PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzYXZlZFVzZXIuZGlzcGxheU5hbWV9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmVvSW5wdXREaXNhYmxlZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIGZvciBlbWFpbCAqL31cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2F2ZWRVc2VyLmVtYWlsfVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmVvSW5wdXREaXNhYmxlZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIHRoaXMgd2lsbCBiZSBhIHJvdyAqL31cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEFnZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2FnZX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWdlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0fVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFN0YXRlKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZW9JbnB1dH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RhdGVcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2NvdW50cnkgPT09ICdVUyd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvdW50cnl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0Q291bnRyeShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0fVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Y291bnRyeUxpc3QubWFwKChlbGVtLCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2BDb3VudHJ5JHtpZH1gfSB2YWx1ZT17ZWxlbX0+XHJcbiAgICAgICAgICAgICAgICAgIHtlbGVtfVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldElkKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2lkTm99XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmVvSW5wdXR9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYXRpb25hbCBpZChvcHRpb25hbClcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZU5lb1N1Ym1pdEJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgQ29tcGxldGUgTXkgUHJvZmlsZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9e2xvZ291dH0gY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUxvZ291dEJ0bn0+XHJcbiAgICAgICAgICAgIExvZ091dFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUNvbXBsZXRlRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==