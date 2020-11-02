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





let tempList = ['United States', 'United Kingdom', 'Nepal', 'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegowina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Congo, the Democratic Republic of the', 'Cook Islands', 'Costa Rica', "Cote d'Ivoire", 'Croatia (Hrvatska)', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'France Metropolitan', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and Mc Donald Islands', 'Holy See (Vatican City State)', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran (Islamic Republic of)', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', "Korea, Democratic People's Republic of", 'Korea, Republic of', 'Kuwait', 'Kyrgyzstan', "Lao, People's Democratic Republic", 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libyan Arab Jamahiriya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia, The Former Yugoslav Republic of', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia, Federated States of', 'Moldova, Republic of', 'Monaco', 'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia (Slovak Republic)', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia and the South Sandwich Islands', 'Spain', 'Sri Lanka', 'St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen Islands', 'Swaziland', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Taiwan, Province of China', 'Tajikistan', 'Tanzania, United Republic of', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United States Minor Outlying Islands', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Virgin Islands (British)', 'Virgin Islands (U.S.)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zambia', 'Zimbabwe'];

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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // Get country list from somewhere
    setCountry(tempList[0]);
    setCountryList(tempList); // Check if the user profile is completed
    // setUser();
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
      lineNumber: 336,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.profileCompleteHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 7
    }
  }, "Complete profile before voting"), savedUser ? __jsx("form", {
    onSubmit: submitForm,
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.profileCompleteForm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
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
      lineNumber: 345,
      columnNumber: 15
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
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
      lineNumber: 355,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 11
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
      lineNumber: 364,
      columnNumber: 13
    }
  })), __jsx("select", {
    value: country,
    onChange: event => setCountry(event.target.value),
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.neoInput,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 11
    }
  }, countryList.map((elem, id) => __jsx("option", {
    key: `Country${id}`,
    value: elem,
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.neoInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 15
    }
  }, elem))), country === 'United States' ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "text",
    onChange: event => setState(event.target.value),
    value: state,
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.neoInput,
    placeholder: "State",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 15
    }
  })) : null, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
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
      lineNumber: 404,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 11
    }
  }, __jsx("button", {
    type: "submit",
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.profileNeoSubmitButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 13
    }
  }, "Complete My Profile")), __jsx("a", {
    onClick: logout,
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.profileLogoutBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 11
    }
  }, "LogOut")) : null);
};

_s(ProfileCompleteForm, "ZThmWT2P8RSPRJxiBegSMPLeGtg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlQ29tcGxldGUuanMiXSwibmFtZXMiOlsidGVtcExpc3QiLCJQcm9maWxlQ29tcGxldGVGb3JtIiwiYWdlIiwic2V0QWdlIiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiY291bnRyeSIsInNldENvdW50cnkiLCJpZE5vIiwic2V0SWQiLCJjb3VudHJ5TGlzdCIsInNldENvdW50cnlMaXN0Iiwic2F2ZWRVc2VyIiwic2V0U2F2ZWRVc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0Iiwic2V0VXNlciIsInVzZXIiLCJxdWVyeSIsImlkIiwidXNlclNlcnZpY2UiLCJnZXRVc2VyRGV0YWlscyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlcnJvciIsIkVycm9yIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwiY29tcGxldGVkIiwicHVzaCIsImVyciIsImFsZXJ0IiwiRXJyb3JFdmVudCIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJzdWJtaXRGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJEZXRhaWxzIiwicGVyc29uYWxJRCIsInVwZGF0ZWRVc2VyIiwiY29tcGxldGVQcm9maWxlIiwicmVsb2FkIiwic3R5bGVzIiwicHJvZmlsZUNvbXBsZXRlRGl2IiwicHJvZmlsZUNvbXBsZXRlSGVhZGVyIiwicHJvZmlsZUNvbXBsZXRlRm9ybSIsImRpc3BsYXlOYW1lIiwibmVvSW5wdXREaXNhYmxlZCIsImVtYWlsIiwidGFyZ2V0IiwidmFsdWUiLCJuZW9JbnB1dCIsIm1hcCIsImVsZW0iLCJwcm9maWxlTmVvU3VibWl0QnV0dG9uIiwicHJvZmlsZUxvZ291dEJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxRQUFRLEdBQUcsQ0FDYixlQURhLEVB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RkFBTSxDQUFDWSxzQkFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixDQXZFRixFQTZFRTtBQUFHLFdBQU8sRUFBRXRCLE1BQVo7QUFBb0IsYUFBUyxFQUFFVSxvRkFBTSxDQUFDYSxnQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdFRixDQURRLEdBa0ZOLElBdkZOLENBREY7QUEyRkQsQ0FsTEQ7O0dBQU0zRCxtQjtVQVNXZSxxRDs7O0tBVFhmLG1CO0FBb0xTQSxrRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92b3RlLjRiMmQ5NzdjMGQ4NmRhZmU5NjUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgdXNlclNlcnZpY2UgZnJvbSAnLi8uLi91dGlscy91c2VyU2VydmljZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvUHJvZmlsZUNvbXBsZXRlLm1vZHVsZS5jc3MnO1xyXG5cclxubGV0IHRlbXBMaXN0ID0gW1xyXG4gICdVbml0ZWQgU3RhdGVzJyxcclxuICAnVW5pdGVkIEtpbmdkb20nLFxyXG4gICdOZXBhbCcsXHJcbiAgJ0FmZ2hhbmlzdGFuJyxcclxuICAnQWxiYW5pYScsXHJcbiAgJ0FsZ2VyaWEnLFxyXG4gICdBbWVyaWNhbiBTYW1vYScsXHJcbiAgJ0FuZG9ycmEnLFxyXG4gICdBbmdvbGEnLFxyXG4gICdBbmd1aWxsYScsXHJcbiAgJ0FudGFyY3RpY2EnLFxyXG4gICdBbnRpZ3VhIGFuZCBCYXJidWRhJyxcclxuICAnQXJnZW50aW5hJyxcclxuICAnQXJtZW5pYScsXHJcbiAgJ0FydWJhJyxcclxuICAnQXVzdHJhbGlhJyxcclxuICAnQXVzdHJpYScsXHJcbiAgJ0F6ZXJiYWlqYW4nLFxyXG4gICdCYWhhbWFzJyxcclxuICAnQmFocmFpbicsXHJcbiAgJ0JhbmdsYWRlc2gnLFxyXG4gICdCYXJiYWRvcycsXHJcbiAgJ0JlbGFydXMnLFxyXG4gICdCZWxnaXVtJyxcclxuICAnQmVsaXplJyxcclxuICAnQmVuaW4nLFxyXG4gICdCZXJtdWRhJyxcclxuICAnQmh1dGFuJyxcclxuICAnQm9saXZpYScsXHJcbiAgJ0Jvc25pYSBhbmQgSGVyemVnb3dpbmEnLFxyXG4gICdCb3Rzd2FuYScsXHJcbiAgJ0JvdXZldCBJc2xhbmQnLFxyXG4gICdCcmF6aWwnLFxyXG4gICdCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnknLFxyXG4gICdCcnVuZWkgRGFydXNzYWxhbScsXHJcbiAgJ0J1bGdhcmlhJyxcclxuICAnQnVya2luYSBGYXNvJyxcclxuICAnQnVydW5kaScsXHJcbiAgJ0NhbWJvZGlhJyxcclxuICAnQ2FtZXJvb24nLFxyXG4gICdDYW5hZGEnLFxyXG4gICdDYXBlIFZlcmRlJyxcclxuICAnQ2F5bWFuIElzbGFuZHMnLFxyXG4gICdDZW50cmFsIEFmcmljYW4gUmVwdWJsaWMnLFxyXG4gICdDaGFkJyxcclxuICAnQ2hpbGUnLFxyXG4gICdDaGluYScsXHJcbiAgJ0NocmlzdG1hcyBJc2xhbmQnLFxyXG4gICdDb2NvcyAoS2VlbGluZykgSXNsYW5kcycsXHJcbiAgJ0NvbG9tYmlhJyxcclxuICAnQ29tb3JvcycsXHJcbiAgJ0NvbmdvJyxcclxuICAnQ29uZ28sIHRoZSBEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZScsXHJcbiAgJ0Nvb2sgSXNsYW5kcycsXHJcbiAgJ0Nvc3RhIFJpY2EnLFxyXG4gIFwiQ290ZSBkJ0l2b2lyZVwiLFxyXG4gICdDcm9hdGlhIChIcnZhdHNrYSknLFxyXG4gICdDdWJhJyxcclxuICAnQ3lwcnVzJyxcclxuICAnQ3plY2ggUmVwdWJsaWMnLFxyXG4gICdEZW5tYXJrJyxcclxuICAnRGppYm91dGknLFxyXG4gICdEb21pbmljYScsXHJcbiAgJ0RvbWluaWNhbiBSZXB1YmxpYycsXHJcbiAgJ0Vhc3QgVGltb3InLFxyXG4gICdFY3VhZG9yJyxcclxuICAnRWd5cHQnLFxyXG4gICdFbCBTYWx2YWRvcicsXHJcbiAgJ0VxdWF0b3JpYWwgR3VpbmVhJyxcclxuICAnRXJpdHJlYScsXHJcbiAgJ0VzdG9uaWEnLFxyXG4gICdFdGhpb3BpYScsXHJcbiAgJ0ZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKScsXHJcbiAgJ0Zhcm9lIElzbGFuZHMnLFxyXG4gICdGaWppJyxcclxuICAnRmlubGFuZCcsXHJcbiAgJ0ZyYW5jZScsXHJcbiAgJ0ZyYW5jZSBNZXRyb3BvbGl0YW4nLFxyXG4gICdGcmVuY2ggR3VpYW5hJyxcclxuICAnRnJlbmNoIFBvbHluZXNpYScsXHJcbiAgJ0ZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllcycsXHJcbiAgJ0dhYm9uJyxcclxuICAnR2FtYmlhJyxcclxuICAnR2VvcmdpYScsXHJcbiAgJ0dlcm1hbnknLFxyXG4gICdHaGFuYScsXHJcbiAgJ0dpYnJhbHRhcicsXHJcbiAgJ0dyZWVjZScsXHJcbiAgJ0dyZWVubGFuZCcsXHJcbiAgJ0dyZW5hZGEnLFxyXG4gICdHdWFkZWxvdXBlJyxcclxuICAnR3VhbScsXHJcbiAgJ0d1YXRlbWFsYScsXHJcbiAgJ0d1aW5lYScsXHJcbiAgJ0d1aW5lYS1CaXNzYXUnLFxyXG4gICdHdXlhbmEnLFxyXG4gICdIYWl0aScsXHJcbiAgJ0hlYXJkIGFuZCBNYyBEb25hbGQgSXNsYW5kcycsXHJcbiAgJ0hvbHkgU2VlIChWYXRpY2FuIENpdHkgU3RhdGUpJyxcclxuICAnSG9uZHVyYXMnLFxyXG4gICdIb25nIEtvbmcnLFxyXG4gICdIdW5nYXJ5JyxcclxuICAnSWNlbGFuZCcsXHJcbiAgJ0luZGlhJyxcclxuICAnSW5kb25lc2lhJyxcclxuICAnSXJhbiAoSXNsYW1pYyBSZXB1YmxpYyBvZiknLFxyXG4gICdJcmFxJyxcclxuICAnSXJlbGFuZCcsXHJcbiAgJ0lzcmFlbCcsXHJcbiAgJ0l0YWx5JyxcclxuICAnSmFtYWljYScsXHJcbiAgJ0phcGFuJyxcclxuICAnSm9yZGFuJyxcclxuICAnS2F6YWtoc3RhbicsXHJcbiAgJ0tlbnlhJyxcclxuICAnS2lyaWJhdGknLFxyXG4gIFwiS29yZWEsIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2ZcIixcclxuICAnS29yZWEsIFJlcHVibGljIG9mJyxcclxuICAnS3V3YWl0JyxcclxuICAnS3lyZ3l6c3RhbicsXHJcbiAgXCJMYW8sIFBlb3BsZSdzIERlbW9jcmF0aWMgUmVwdWJsaWNcIixcclxuICAnTGF0dmlhJyxcclxuICAnTGViYW5vbicsXHJcbiAgJ0xlc290aG8nLFxyXG4gICdMaWJlcmlhJyxcclxuICAnTGlieWFuIEFyYWIgSmFtYWhpcml5YScsXHJcbiAgJ0xpZWNodGVuc3RlaW4nLFxyXG4gICdMaXRodWFuaWEnLFxyXG4gICdMdXhlbWJvdXJnJyxcclxuICAnTWFjYXUnLFxyXG4gICdNYWNlZG9uaWEsIFRoZSBGb3JtZXIgWXVnb3NsYXYgUmVwdWJsaWMgb2YnLFxyXG4gICdNYWRhZ2FzY2FyJyxcclxuICAnTWFsYXdpJyxcclxuICAnTWFsYXlzaWEnLFxyXG4gICdNYWxkaXZlcycsXHJcbiAgJ01hbGknLFxyXG4gICdNYWx0YScsXHJcbiAgJ01hcnNoYWxsIElzbGFuZHMnLFxyXG4gICdNYXJ0aW5pcXVlJyxcclxuICAnTWF1cml0YW5pYScsXHJcbiAgJ01hdXJpdGl1cycsXHJcbiAgJ01heW90dGUnLFxyXG4gICdNZXhpY28nLFxyXG4gICdNaWNyb25lc2lhLCBGZWRlcmF0ZWQgU3RhdGVzIG9mJyxcclxuICAnTW9sZG92YSwgUmVwdWJsaWMgb2YnLFxyXG4gICdNb25hY28nLFxyXG4gICdNb25nb2xpYScsXHJcbiAgJ01vbnRzZXJyYXQnLFxyXG4gICdNb3JvY2NvJyxcclxuICAnTW96YW1iaXF1ZScsXHJcbiAgJ015YW5tYXInLFxyXG4gICdOYW1pYmlhJyxcclxuICAnTmF1cnUnLFxyXG4gICdOZXRoZXJsYW5kcycsXHJcbiAgJ05ldGhlcmxhbmRzIEFudGlsbGVzJyxcclxuICAnTmV3IENhbGVkb25pYScsXHJcbiAgJ05ldyBaZWFsYW5kJyxcclxuICAnTmljYXJhZ3VhJyxcclxuICAnTmlnZXInLFxyXG4gICdOaWdlcmlhJyxcclxuICAnTml1ZScsXHJcbiAgJ05vcmZvbGsgSXNsYW5kJyxcclxuICAnTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzJyxcclxuICAnTm9yd2F5JyxcclxuICAnT21hbicsXHJcbiAgJ1Bha2lzdGFuJyxcclxuICAnUGFsYXUnLFxyXG4gICdQYW5hbWEnLFxyXG4gICdQYXB1YSBOZXcgR3VpbmVhJyxcclxuICAnUGFyYWd1YXknLFxyXG4gICdQZXJ1JyxcclxuICAnUGhpbGlwcGluZXMnLFxyXG4gICdQaXRjYWlybicsXHJcbiAgJ1BvbGFuZCcsXHJcbiAgJ1BvcnR1Z2FsJyxcclxuICAnUHVlcnRvIFJpY28nLFxyXG4gICdRYXRhcicsXHJcbiAgJ1JldW5pb24nLFxyXG4gICdSb21hbmlhJyxcclxuICAnUnVzc2lhbiBGZWRlcmF0aW9uJyxcclxuICAnUndhbmRhJyxcclxuICAnU2FpbnQgS2l0dHMgYW5kIE5ldmlzJyxcclxuICAnU2FpbnQgTHVjaWEnLFxyXG4gICdTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lcycsXHJcbiAgJ1NhbW9hJyxcclxuICAnU2FuIE1hcmlubycsXHJcbiAgJ1NhbyBUb21lIGFuZCBQcmluY2lwZScsXHJcbiAgJ1NhdWRpIEFyYWJpYScsXHJcbiAgJ1NlbmVnYWwnLFxyXG4gICdTZXljaGVsbGVzJyxcclxuICAnU2llcnJhIExlb25lJyxcclxuICAnU2luZ2Fwb3JlJyxcclxuICAnU2xvdmFraWEgKFNsb3ZhayBSZXB1YmxpYyknLFxyXG4gICdTbG92ZW5pYScsXHJcbiAgJ1NvbG9tb24gSXNsYW5kcycsXHJcbiAgJ1NvbWFsaWEnLFxyXG4gICdTb3V0aCBBZnJpY2EnLFxyXG4gICdTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kcycsXHJcbiAgJ1NwYWluJyxcclxuICAnU3JpIExhbmthJyxcclxuICAnU3QuIEhlbGVuYScsXHJcbiAgJ1N0LiBQaWVycmUgYW5kIE1pcXVlbG9uJyxcclxuICAnU3VkYW4nLFxyXG4gICdTdXJpbmFtZScsXHJcbiAgJ1N2YWxiYXJkIGFuZCBKYW4gTWF5ZW4gSXNsYW5kcycsXHJcbiAgJ1N3YXppbGFuZCcsXHJcbiAgJ1N3ZWRlbicsXHJcbiAgJ1N3aXR6ZXJsYW5kJyxcclxuICAnU3lyaWFuIEFyYWIgUmVwdWJsaWMnLFxyXG4gICdUYWl3YW4sIFByb3ZpbmNlIG9mIENoaW5hJyxcclxuICAnVGFqaWtpc3RhbicsXHJcbiAgJ1RhbnphbmlhLCBVbml0ZWQgUmVwdWJsaWMgb2YnLFxyXG4gICdUaGFpbGFuZCcsXHJcbiAgJ1RvZ28nLFxyXG4gICdUb2tlbGF1JyxcclxuICAnVG9uZ2EnLFxyXG4gICdUcmluaWRhZCBhbmQgVG9iYWdvJyxcclxuICAnVHVuaXNpYScsXHJcbiAgJ1R1cmtleScsXHJcbiAgJ1R1cmttZW5pc3RhbicsXHJcbiAgJ1R1cmtzIGFuZCBDYWljb3MgSXNsYW5kcycsXHJcbiAgJ1R1dmFsdScsXHJcbiAgJ1VnYW5kYScsXHJcbiAgJ1VrcmFpbmUnLFxyXG4gICdVbml0ZWQgQXJhYiBFbWlyYXRlcycsXHJcbiAgJ1VuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kcycsXHJcbiAgJ1VydWd1YXknLFxyXG4gICdVemJla2lzdGFuJyxcclxuICAnVmFudWF0dScsXHJcbiAgJ1ZlbmV6dWVsYScsXHJcbiAgJ1ZpZXRuYW0nLFxyXG4gICdWaXJnaW4gSXNsYW5kcyAoQnJpdGlzaCknLFxyXG4gICdWaXJnaW4gSXNsYW5kcyAoVS5TLiknLFxyXG4gICdXYWxsaXMgYW5kIEZ1dHVuYSBJc2xhbmRzJyxcclxuICAnV2VzdGVybiBTYWhhcmEnLFxyXG4gICdZZW1lbicsXHJcbiAgJ1l1Z29zbGF2aWEnLFxyXG4gICdaYW1iaWEnLFxyXG4gICdaaW1iYWJ3ZScsXHJcbl07XHJcblxyXG5jb25zdCBQcm9maWxlQ29tcGxldGVGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthZ2UsIHNldEFnZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb3VudHJ5LCBzZXRDb3VudHJ5XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaWRObywgc2V0SWRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb3VudHJ5TGlzdCwgc2V0Q291bnRyeUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbc2F2ZWRVc2VyLCBzZXRTYXZlZFVzZXJdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBHZXQgY291bnRyeSBsaXN0IGZyb20gc29tZXdoZXJlXHJcbiAgICBzZXRDb3VudHJ5KHRlbXBMaXN0WzBdKTtcclxuICAgIHNldENvdW50cnlMaXN0KHRlbXBMaXN0KTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGUgdXNlciBwcm9maWxlIGlzIGNvbXBsZXRlZFxyXG4gICAgLy8gc2V0VXNlcigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc2V0VXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB1c2VyO1xyXG4gICAgICBpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgICAgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldFVzZXJEZXRhaWxzKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldFVzZXJEZXRhaWxzKFxyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcHktdm90ZS11c2VyJylcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh1c2VyLmVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHVzZXIuZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcHB5LXZvdGUtdXNlcicsIHVzZXIuaWQpO1xyXG5cclxuICAgICAgLy9JZiBmb3JtIGlzIGNvbXBsZXRlXHJcbiAgICAgIGlmICh1c2VyLmNvbXBsZXRlZCkge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvb3ZlcnZpZXcnKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRTYXZlZFVzZXIodXNlcik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgYWxlcnQoJ0Vycm9yOicsIEVycm9yRXZlbnQubWVzc2FnZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FwcHktdm90ZS11c2VyJyk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXBweS12b3RlLXVzZXItdG9rZW4nKTtcclxuICAgIHJvdXRlci5wdXNoKCcvb3ZlcnZpZXcnKTtcclxuICB9O1xyXG5cclxuICAvLyBUaGlzIHdpbGwgc3VibWl0IHRoZSBsb2dpbiBmb3JtXHJcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgLy9kbyBzb21lIHByb2Nlc3NpbmcgaGVyZVxyXG4gICAgLy8gVGhpcyBpcyB3aGVyZSB3ZSBpbnRlcmFjdCB3aXRoIHRoZSBiYWNrZW5kIHRvIGxvZ2luXHJcbiAgICAvLyByZWRpcmVjdG8gdG8gc29tZSBwYWdlIGlmIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsXHJcbiAgICB0cnkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgbGV0IHVzZXJEZXRhaWxzID0geyAuLi5zYXZlZFVzZXIgfTtcclxuICAgICAgaWYgKGFnZSA+PSAxOCkge1xyXG4gICAgICAgIHVzZXJEZXRhaWxzLmFnZSA9IGFnZTtcclxuICAgICAgICB1c2VyRGV0YWlscy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHVzZXJEZXRhaWxzLmNvdW50cnkgPSBjb3VudHJ5O1xyXG4gICAgICAgIHVzZXJEZXRhaWxzLnBlcnNvbmFsSUQgPSBpZE5vO1xyXG4gICAgICAgIHVzZXJEZXRhaWxzLmNvbXBsZXRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCB1cGRhdGVkVXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmNvbXBsZXRlUHJvZmlsZSh1c2VyRGV0YWlscyk7XHJcbiAgICAgICAgaWYgKHVwZGF0ZWRVc2VyKSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXBweS12b3RlLXVzZXInLCB1cGRhdGVkVXNlci5pZCk7XHJcbiAgICAgICAgICByb3V0ZXIucmVsb2FkKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHVwZGF0ZSBlcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgnWW91IHNob3VsZCBiZSBncmVhdGVyIG9yIGVxdWFsIHRvIDE4Jyk7XHJcbiAgICAgIH1cclxuICAgICAgLy9Vc2VyIGhhcyBiZWVuIHNhdmVkIGhlcmUuLi5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgICAgIGFsZXJ0KCdTb21ldGhpbmcgaXMgd3Jvbmc6ICcsIGVyci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvL0pTWCA9PiBKYXZhU2NyaXB0IFN5bnRheFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVDb21wbGV0ZURpdn0+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVDb21wbGV0ZUhlYWRlcn0+XHJcbiAgICAgICAgQ29tcGxldGUgcHJvZmlsZSBiZWZvcmUgdm90aW5nXHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIHtzYXZlZFVzZXIgPyAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEZvcm19IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVDb21wbGV0ZUZvcm19PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzYXZlZFVzZXIuZGlzcGxheU5hbWV9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmVvSW5wdXREaXNhYmxlZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIGZvciBlbWFpbCAqL31cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2F2ZWRVc2VyLmVtYWlsfVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmVvSW5wdXREaXNhYmxlZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEFnZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXthZ2V9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZ2VcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0fVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb3VudHJ5fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRDb3VudHJ5KGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0fVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y291bnRyeUxpc3QubWFwKChlbGVtLCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICAgIGtleT17YENvdW50cnkke2lkfWB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZWxlbX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtlbGVtfVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgIHtjb3VudHJ5ID09PSAnVW5pdGVkIFN0YXRlcycgPyAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTdGF0ZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmVvSW5wdXR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXRlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRJZChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpZE5vfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmF0aW9uYWwgaWQob3B0aW9uYWwpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVOZW9TdWJtaXRCdXR0b259PlxyXG4gICAgICAgICAgICAgIENvbXBsZXRlIE15IFByb2ZpbGVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXtsb2dvdXR9IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVMb2dvdXRCdG59PlxyXG4gICAgICAgICAgICBMb2dPdXRcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVDb21wbGV0ZUZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=