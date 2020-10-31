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
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
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
      lineNumber: 365,
      columnNumber: 15
    }
  })), country === 'United States' ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 15
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
      lineNumber: 376,
      columnNumber: 17
    }
  })) : null), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
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
      lineNumber: 388,
      columnNumber: 13
    }
  }, countryList.map((elem, id) => __jsx("option", {
    key: `Country${id}`,
    value: elem,
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.neoInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 17
    }
  }, elem)))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
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
      lineNumber: 407,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 11
    }
  }, __jsx("button", {
    type: "submit",
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.profileNeoSubmitButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 13
    }
  }, "Complete My Profile")), __jsx("a", {
    onClick: logout,
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.profileLogoutBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlQ29tcGxldGUuanMiXSwibmFtZXMiOlsidGVtcExpc3QiLCJQcm9maWxlQ29tcGxldGVGb3JtIiwiYWdlIiwic2V0QWdlIiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiY291bnRyeSIsInNldENvdW50cnkiLCJpZE5vIiwic2V0SWQiLCJjb3VudHJ5TGlzdCIsInNldENvdW50cnlMaXN0Iiwic2F2ZWRVc2VyIiwic2V0U2F2ZWRVc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0Iiwic2V0VXNlciIsInVzZXIiLCJxdWVyeSIsImlkIiwidXNlclNlcnZpY2UiLCJnZXRVc2VyRGV0YWlscyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlcnJvciIsIkVycm9yIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwiY29tcGxldGVkIiwicHVzaCIsImVyciIsImFsZXJ0IiwiRXJyb3JFdmVudCIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJzdWJtaXRGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJEZXRhaWxzIiwicGVyc29uYWxJRCIsInVwZGF0ZWRVc2VyIiwiY29tcGxldGVQcm9maWxlIiwicmVsb2FkIiwic3R5bGVzIiwicHJvZmlsZUNvbXBsZXRlRGl2IiwicHJvZmlsZUNvbXBsZXRlSGVhZGVyIiwicHJvZmlsZUNvbXBsZXRlRm9ybSIsImRpc3BsYXlOYW1lIiwibmVvSW5wdXREaXNhYmxlZCIsImVtYWlsIiwidGFyZ2V0IiwidmFsdWUiLCJuZW9JbnB1dCIsIm1hcCIsImVsZW0iLCJwcm9maWxlTmVvU3VibWl0QnV0dG9uIiwicHJvZmlsZUxvZ291dEJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxRQUFRLEdBQUcsQ0FDYixlQURhLEVB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O0FBQUE7QUFBQSxJQURGLENBaEVGLEVBMEVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBRVQsb0ZBQU0sQ0FBQ1ksc0JBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsQ0ExRUYsRUFnRkU7QUFBRyxXQUFPLEVBQUV0QixNQUFaO0FBQW9CLGFBQVMsRUFBRVUsb0ZBQU0sQ0FBQ2EsZ0JBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoRkYsQ0FEUSxHQXFGTixJQTFGTixDQURGO0FBOEZELENBckxEOztHQUFNM0QsbUI7VUFTV2UscUQ7OztLQVRYZixtQjtBQXVMU0Esa0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdm90ZS42MjZjNWUzZjVlODc3YWIwOWJmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHVzZXJTZXJ2aWNlIGZyb20gJy4vLi4vdXRpbHMvdXNlclNlcnZpY2UnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL1Byb2ZpbGVDb21wbGV0ZS5tb2R1bGUuY3NzJztcclxuXHJcbmxldCB0ZW1wTGlzdCA9IFtcclxuICAnVW5pdGVkIFN0YXRlcycsXHJcbiAgJ1VuaXRlZCBLaW5nZG9tJyxcclxuICAnTmVwYWwnLFxyXG4gICdBZmdoYW5pc3RhbicsXHJcbiAgJ0FsYmFuaWEnLFxyXG4gICdBbGdlcmlhJyxcclxuICAnQW1lcmljYW4gU2Ftb2EnLFxyXG4gICdBbmRvcnJhJyxcclxuICAnQW5nb2xhJyxcclxuICAnQW5ndWlsbGEnLFxyXG4gICdBbnRhcmN0aWNhJyxcclxuICAnQW50aWd1YSBhbmQgQmFyYnVkYScsXHJcbiAgJ0FyZ2VudGluYScsXHJcbiAgJ0FybWVuaWEnLFxyXG4gICdBcnViYScsXHJcbiAgJ0F1c3RyYWxpYScsXHJcbiAgJ0F1c3RyaWEnLFxyXG4gICdBemVyYmFpamFuJyxcclxuICAnQmFoYW1hcycsXHJcbiAgJ0JhaHJhaW4nLFxyXG4gICdCYW5nbGFkZXNoJyxcclxuICAnQmFyYmFkb3MnLFxyXG4gICdCZWxhcnVzJyxcclxuICAnQmVsZ2l1bScsXHJcbiAgJ0JlbGl6ZScsXHJcbiAgJ0JlbmluJyxcclxuICAnQmVybXVkYScsXHJcbiAgJ0JodXRhbicsXHJcbiAgJ0JvbGl2aWEnLFxyXG4gICdCb3NuaWEgYW5kIEhlcnplZ293aW5hJyxcclxuICAnQm90c3dhbmEnLFxyXG4gICdCb3V2ZXQgSXNsYW5kJyxcclxuICAnQnJhemlsJyxcclxuICAnQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5JyxcclxuICAnQnJ1bmVpIERhcnVzc2FsYW0nLFxyXG4gICdCdWxnYXJpYScsXHJcbiAgJ0J1cmtpbmEgRmFzbycsXHJcbiAgJ0J1cnVuZGknLFxyXG4gICdDYW1ib2RpYScsXHJcbiAgJ0NhbWVyb29uJyxcclxuICAnQ2FuYWRhJyxcclxuICAnQ2FwZSBWZXJkZScsXHJcbiAgJ0NheW1hbiBJc2xhbmRzJyxcclxuICAnQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljJyxcclxuICAnQ2hhZCcsXHJcbiAgJ0NoaWxlJyxcclxuICAnQ2hpbmEnLFxyXG4gICdDaHJpc3RtYXMgSXNsYW5kJyxcclxuICAnQ29jb3MgKEtlZWxpbmcpIElzbGFuZHMnLFxyXG4gICdDb2xvbWJpYScsXHJcbiAgJ0NvbW9yb3MnLFxyXG4gICdDb25nbycsXHJcbiAgJ0NvbmdvLCB0aGUgRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUnLFxyXG4gICdDb29rIElzbGFuZHMnLFxyXG4gICdDb3N0YSBSaWNhJyxcclxuICBcIkNvdGUgZCdJdm9pcmVcIixcclxuICAnQ3JvYXRpYSAoSHJ2YXRza2EpJyxcclxuICAnQ3ViYScsXHJcbiAgJ0N5cHJ1cycsXHJcbiAgJ0N6ZWNoIFJlcHVibGljJyxcclxuICAnRGVubWFyaycsXHJcbiAgJ0RqaWJvdXRpJyxcclxuICAnRG9taW5pY2EnLFxyXG4gICdEb21pbmljYW4gUmVwdWJsaWMnLFxyXG4gICdFYXN0IFRpbW9yJyxcclxuICAnRWN1YWRvcicsXHJcbiAgJ0VneXB0JyxcclxuICAnRWwgU2FsdmFkb3InLFxyXG4gICdFcXVhdG9yaWFsIEd1aW5lYScsXHJcbiAgJ0VyaXRyZWEnLFxyXG4gICdFc3RvbmlhJyxcclxuICAnRXRoaW9waWEnLFxyXG4gICdGYWxrbGFuZCBJc2xhbmRzIChNYWx2aW5hcyknLFxyXG4gICdGYXJvZSBJc2xhbmRzJyxcclxuICAnRmlqaScsXHJcbiAgJ0ZpbmxhbmQnLFxyXG4gICdGcmFuY2UnLFxyXG4gICdGcmFuY2UgTWV0cm9wb2xpdGFuJyxcclxuICAnRnJlbmNoIEd1aWFuYScsXHJcbiAgJ0ZyZW5jaCBQb2x5bmVzaWEnLFxyXG4gICdGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXMnLFxyXG4gICdHYWJvbicsXHJcbiAgJ0dhbWJpYScsXHJcbiAgJ0dlb3JnaWEnLFxyXG4gICdHZXJtYW55JyxcclxuICAnR2hhbmEnLFxyXG4gICdHaWJyYWx0YXInLFxyXG4gICdHcmVlY2UnLFxyXG4gICdHcmVlbmxhbmQnLFxyXG4gICdHcmVuYWRhJyxcclxuICAnR3VhZGVsb3VwZScsXHJcbiAgJ0d1YW0nLFxyXG4gICdHdWF0ZW1hbGEnLFxyXG4gICdHdWluZWEnLFxyXG4gICdHdWluZWEtQmlzc2F1JyxcclxuICAnR3V5YW5hJyxcclxuICAnSGFpdGknLFxyXG4gICdIZWFyZCBhbmQgTWMgRG9uYWxkIElzbGFuZHMnLFxyXG4gICdIb2x5IFNlZSAoVmF0aWNhbiBDaXR5IFN0YXRlKScsXHJcbiAgJ0hvbmR1cmFzJyxcclxuICAnSG9uZyBLb25nJyxcclxuICAnSHVuZ2FyeScsXHJcbiAgJ0ljZWxhbmQnLFxyXG4gICdJbmRpYScsXHJcbiAgJ0luZG9uZXNpYScsXHJcbiAgJ0lyYW4gKElzbGFtaWMgUmVwdWJsaWMgb2YpJyxcclxuICAnSXJhcScsXHJcbiAgJ0lyZWxhbmQnLFxyXG4gICdJc3JhZWwnLFxyXG4gICdJdGFseScsXHJcbiAgJ0phbWFpY2EnLFxyXG4gICdKYXBhbicsXHJcbiAgJ0pvcmRhbicsXHJcbiAgJ0themFraHN0YW4nLFxyXG4gICdLZW55YScsXHJcbiAgJ0tpcmliYXRpJyxcclxuICBcIktvcmVhLCBEZW1vY3JhdGljIFBlb3BsZSdzIFJlcHVibGljIG9mXCIsXHJcbiAgJ0tvcmVhLCBSZXB1YmxpYyBvZicsXHJcbiAgJ0t1d2FpdCcsXHJcbiAgJ0t5cmd5enN0YW4nLFxyXG4gIFwiTGFvLCBQZW9wbGUncyBEZW1vY3JhdGljIFJlcHVibGljXCIsXHJcbiAgJ0xhdHZpYScsXHJcbiAgJ0xlYmFub24nLFxyXG4gICdMZXNvdGhvJyxcclxuICAnTGliZXJpYScsXHJcbiAgJ0xpYnlhbiBBcmFiIEphbWFoaXJpeWEnLFxyXG4gICdMaWVjaHRlbnN0ZWluJyxcclxuICAnTGl0aHVhbmlhJyxcclxuICAnTHV4ZW1ib3VyZycsXHJcbiAgJ01hY2F1JyxcclxuICAnTWFjZWRvbmlhLCBUaGUgRm9ybWVyIFl1Z29zbGF2IFJlcHVibGljIG9mJyxcclxuICAnTWFkYWdhc2NhcicsXHJcbiAgJ01hbGF3aScsXHJcbiAgJ01hbGF5c2lhJyxcclxuICAnTWFsZGl2ZXMnLFxyXG4gICdNYWxpJyxcclxuICAnTWFsdGEnLFxyXG4gICdNYXJzaGFsbCBJc2xhbmRzJyxcclxuICAnTWFydGluaXF1ZScsXHJcbiAgJ01hdXJpdGFuaWEnLFxyXG4gICdNYXVyaXRpdXMnLFxyXG4gICdNYXlvdHRlJyxcclxuICAnTWV4aWNvJyxcclxuICAnTWljcm9uZXNpYSwgRmVkZXJhdGVkIFN0YXRlcyBvZicsXHJcbiAgJ01vbGRvdmEsIFJlcHVibGljIG9mJyxcclxuICAnTW9uYWNvJyxcclxuICAnTW9uZ29saWEnLFxyXG4gICdNb250c2VycmF0JyxcclxuICAnTW9yb2NjbycsXHJcbiAgJ01vemFtYmlxdWUnLFxyXG4gICdNeWFubWFyJyxcclxuICAnTmFtaWJpYScsXHJcbiAgJ05hdXJ1JyxcclxuICAnTmV0aGVybGFuZHMnLFxyXG4gICdOZXRoZXJsYW5kcyBBbnRpbGxlcycsXHJcbiAgJ05ldyBDYWxlZG9uaWEnLFxyXG4gICdOZXcgWmVhbGFuZCcsXHJcbiAgJ05pY2FyYWd1YScsXHJcbiAgJ05pZ2VyJyxcclxuICAnTmlnZXJpYScsXHJcbiAgJ05pdWUnLFxyXG4gICdOb3Jmb2xrIElzbGFuZCcsXHJcbiAgJ05vcnRoZXJuIE1hcmlhbmEgSXNsYW5kcycsXHJcbiAgJ05vcndheScsXHJcbiAgJ09tYW4nLFxyXG4gICdQYWtpc3RhbicsXHJcbiAgJ1BhbGF1JyxcclxuICAnUGFuYW1hJyxcclxuICAnUGFwdWEgTmV3IEd1aW5lYScsXHJcbiAgJ1BhcmFndWF5JyxcclxuICAnUGVydScsXHJcbiAgJ1BoaWxpcHBpbmVzJyxcclxuICAnUGl0Y2Fpcm4nLFxyXG4gICdQb2xhbmQnLFxyXG4gICdQb3J0dWdhbCcsXHJcbiAgJ1B1ZXJ0byBSaWNvJyxcclxuICAnUWF0YXInLFxyXG4gICdSZXVuaW9uJyxcclxuICAnUm9tYW5pYScsXHJcbiAgJ1J1c3NpYW4gRmVkZXJhdGlvbicsXHJcbiAgJ1J3YW5kYScsXHJcbiAgJ1NhaW50IEtpdHRzIGFuZCBOZXZpcycsXHJcbiAgJ1NhaW50IEx1Y2lhJyxcclxuICAnU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXMnLFxyXG4gICdTYW1vYScsXHJcbiAgJ1NhbiBNYXJpbm8nLFxyXG4gICdTYW8gVG9tZSBhbmQgUHJpbmNpcGUnLFxyXG4gICdTYXVkaSBBcmFiaWEnLFxyXG4gICdTZW5lZ2FsJyxcclxuICAnU2V5Y2hlbGxlcycsXHJcbiAgJ1NpZXJyYSBMZW9uZScsXHJcbiAgJ1NpbmdhcG9yZScsXHJcbiAgJ1Nsb3Zha2lhIChTbG92YWsgUmVwdWJsaWMpJyxcclxuICAnU2xvdmVuaWEnLFxyXG4gICdTb2xvbW9uIElzbGFuZHMnLFxyXG4gICdTb21hbGlhJyxcclxuICAnU291dGggQWZyaWNhJyxcclxuICAnU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHMnLFxyXG4gICdTcGFpbicsXHJcbiAgJ1NyaSBMYW5rYScsXHJcbiAgJ1N0LiBIZWxlbmEnLFxyXG4gICdTdC4gUGllcnJlIGFuZCBNaXF1ZWxvbicsXHJcbiAgJ1N1ZGFuJyxcclxuICAnU3VyaW5hbWUnLFxyXG4gICdTdmFsYmFyZCBhbmQgSmFuIE1heWVuIElzbGFuZHMnLFxyXG4gICdTd2F6aWxhbmQnLFxyXG4gICdTd2VkZW4nLFxyXG4gICdTd2l0emVybGFuZCcsXHJcbiAgJ1N5cmlhbiBBcmFiIFJlcHVibGljJyxcclxuICAnVGFpd2FuLCBQcm92aW5jZSBvZiBDaGluYScsXHJcbiAgJ1RhamlraXN0YW4nLFxyXG4gICdUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mJyxcclxuICAnVGhhaWxhbmQnLFxyXG4gICdUb2dvJyxcclxuICAnVG9rZWxhdScsXHJcbiAgJ1RvbmdhJyxcclxuICAnVHJpbmlkYWQgYW5kIFRvYmFnbycsXHJcbiAgJ1R1bmlzaWEnLFxyXG4gICdUdXJrZXknLFxyXG4gICdUdXJrbWVuaXN0YW4nLFxyXG4gICdUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHMnLFxyXG4gICdUdXZhbHUnLFxyXG4gICdVZ2FuZGEnLFxyXG4gICdVa3JhaW5lJyxcclxuICAnVW5pdGVkIEFyYWIgRW1pcmF0ZXMnLFxyXG4gICdVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHMnLFxyXG4gICdVcnVndWF5JyxcclxuICAnVXpiZWtpc3RhbicsXHJcbiAgJ1ZhbnVhdHUnLFxyXG4gICdWZW5lenVlbGEnLFxyXG4gICdWaWV0bmFtJyxcclxuICAnVmlyZ2luIElzbGFuZHMgKEJyaXRpc2gpJyxcclxuICAnVmlyZ2luIElzbGFuZHMgKFUuUy4pJyxcclxuICAnV2FsbGlzIGFuZCBGdXR1bmEgSXNsYW5kcycsXHJcbiAgJ1dlc3Rlcm4gU2FoYXJhJyxcclxuICAnWWVtZW4nLFxyXG4gICdZdWdvc2xhdmlhJyxcclxuICAnWmFtYmlhJyxcclxuICAnWmltYmFid2UnLFxyXG5dO1xyXG5cclxuY29uc3QgUHJvZmlsZUNvbXBsZXRlRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbYWdlLCBzZXRBZ2VdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY291bnRyeSwgc2V0Q291bnRyeV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lkTm8sIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY291bnRyeUxpc3QsIHNldENvdW50cnlMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW3NhdmVkVXNlciwgc2V0U2F2ZWRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEdldCBjb3VudHJ5IGxpc3QgZnJvbSBzb21ld2hlcmVcclxuICAgIHNldENvdW50cnkodGVtcExpc3RbMF0pO1xyXG4gICAgc2V0Q291bnRyeUxpc3QodGVtcExpc3QpO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIHRoZSB1c2VyIHByb2ZpbGUgaXMgY29tcGxldGVkXHJcbiAgICBzZXRVc2VyKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzZXRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHVzZXI7XHJcbiAgICAgIGlmIChyb3V0ZXIucXVlcnkuaWQpIHtcclxuICAgICAgICB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UuZ2V0VXNlckRldGFpbHMocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UuZ2V0VXNlckRldGFpbHMoXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBweS12b3RlLXVzZXInKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHVzZXIuZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXNlci5lcnJvci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcHktdm90ZS11c2VyJywgdXNlci5pZCk7XHJcblxyXG4gICAgICAvL0lmIGZvcm0gaXMgY29tcGxldGVcclxuICAgICAgaWYgKHVzZXIuY29tcGxldGVkKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9vdmVydmlldycpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFNhdmVkVXNlcih1c2VyKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBhbGVydCgnRXJyb3I6JywgRXJyb3JFdmVudC5tZXNzYWdlKTtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXBweS12b3RlLXVzZXInKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhcHB5LXZvdGUtdXNlci10b2tlbicpO1xyXG4gICAgcm91dGVyLnB1c2goJy9vdmVydmlldycpO1xyXG4gIH07XHJcblxyXG4gIC8vIFRoaXMgd2lsbCBzdWJtaXQgdGhlIGxvZ2luIGZvcm1cclxuICBjb25zdCBzdWJtaXRGb3JtID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAvL2RvIHNvbWUgcHJvY2Vzc2luZyBoZXJlXHJcbiAgICAvLyBUaGlzIGlzIHdoZXJlIHdlIGludGVyYWN0IHdpdGggdGhlIGJhY2tlbmQgdG8gbG9naW5cclxuICAgIC8vIHJlZGlyZWN0byB0byBzb21lIHBhZ2UgaWYgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWxcclxuICAgIHRyeSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBsZXQgdXNlckRldGFpbHMgPSB7IC4uLnNhdmVkVXNlciB9O1xyXG4gICAgICBpZiAoYWdlID49IDE4KSB7XHJcbiAgICAgICAgdXNlckRldGFpbHMuYWdlID0gYWdlO1xyXG4gICAgICAgIHVzZXJEZXRhaWxzLnN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdXNlckRldGFpbHMuY291bnRyeSA9IGNvdW50cnk7XHJcbiAgICAgICAgdXNlckRldGFpbHMucGVyc29uYWxJRCA9IGlkTm87XHJcbiAgICAgICAgdXNlckRldGFpbHMuY29tcGxldGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IHVwZGF0ZWRVc2VyID0gYXdhaXQgdXNlclNlcnZpY2UuY29tcGxldGVQcm9maWxlKHVzZXJEZXRhaWxzKTtcclxuICAgICAgICBpZiAodXBkYXRlZFVzZXIpIHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcHB5LXZvdGUtdXNlcicsIHVwZGF0ZWRVc2VyLmlkKTtcclxuICAgICAgICAgIHJvdXRlci5yZWxvYWQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgdXBkYXRlIGVycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KCdZb3Ugc2hvdWxkIGJlIGdyZWF0ZXIgb3IgZXF1YWwgdG8gMTgnKTtcclxuICAgICAgfVxyXG4gICAgICAvL1VzZXIgaGFzIGJlZW4gc2F2ZWQgaGVyZS4uLlxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuICAgICAgYWxlcnQoJ1NvbWV0aGluZyBpcyB3cm9uZzogJywgZXJyLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vSlNYID0+IEphdmFTY3JpcHQgU3ludGF4XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUNvbXBsZXRlRGl2fT5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUNvbXBsZXRlSGVhZGVyfT5cclxuICAgICAgICBDb21wbGV0ZSBwcm9maWxlIGJlZm9yZSB2b3RpbmdcclxuICAgICAgPC9wPlxyXG5cclxuICAgICAge3NhdmVkVXNlciA/IChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0Rm9ybX0gY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZUNvbXBsZXRlRm9ybX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NhdmVkVXNlci5kaXNwbGF5TmFtZX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZW9JbnB1dERpc2FibGVkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogZm9yIGVtYWlsICovfVxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzYXZlZFVzZXIuZW1haWx9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZW9JbnB1dERpc2FibGVkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0QWdlKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YWdlfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZ2VcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmVvSW5wdXR9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7Y291bnRyeSA9PT0gJ1VuaXRlZCBTdGF0ZXMnID8gKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTdGF0ZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0fVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXRlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb3VudHJ5fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldENvdW50cnkoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZW9JbnB1dH1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2NvdW50cnlMaXN0Lm1hcCgoZWxlbSwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICAgICAga2V5PXtgQ291bnRyeSR7aWR9YH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VsZW19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7ZWxlbX1cclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRJZChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpZE5vfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmF0aW9uYWwgaWQob3B0aW9uYWwpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVOZW9TdWJtaXRCdXR0b259PlxyXG4gICAgICAgICAgICAgIENvbXBsZXRlIE15IFByb2ZpbGVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXtsb2dvdXR9IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVMb2dvdXRCdG59PlxyXG4gICAgICAgICAgICBMb2dPdXRcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVDb21wbGV0ZUZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=