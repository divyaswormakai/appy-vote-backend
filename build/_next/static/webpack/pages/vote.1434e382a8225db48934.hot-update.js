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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
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
  }, "Complete My Profile"))) : null, __jsx("a", {
    onClick: logout,
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.profileLogoutBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 7
    }
  }, "LogOut"));
};

_s(ProfileCompleteForm, "lD04rk4pvqgneojDoFgPN4P4vPM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlQ29tcGxldGUuanMiXSwibmFtZXMiOlsidGVtcExpc3QiLCJQcm9maWxlQ29tcGxldGVGb3JtIiwiYWdlIiwic2V0QWdlIiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiY291bnRyeSIsInNldENvdW50cnkiLCJpZE5vIiwic2V0SWQiLCJjb3VudHJ5TGlzdCIsInNldENvdW50cnlMaXN0Iiwic2F2ZWRVc2VyIiwic2V0U2F2ZWRVc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0Iiwic2V0VXNlciIsInVzZXIiLCJxdWVyeSIsImlkIiwidXNlclNlcnZpY2UiLCJnZXRVc2VyRGV0YWlscyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlcnJvciIsIkVycm9yIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwiY29tcGxldGVkIiwicHVzaCIsImVyciIsImFsZXJ0IiwiRXJyb3JFdmVudCIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJzdWJtaXRGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJEZXRhaWxzIiwicGVyc29uYWxJRCIsInVwZGF0ZWRVc2VyIiwiY29tcGxldGVQcm9maWxlIiwicmVsb2FkIiwic3R5bGVzIiwicHJvZmlsZUNvbXBsZXRlRGl2IiwicHJvZmlsZUNvbXBsZXRlSGVhZGVyIiwicHJvZmlsZUNvbXBsZXRlRm9ybSIsImRpc3BsYXlOYW1lIiwibmVvSW5wdXREaXNhYmxlZCIsImVtYWlsIiwidGFyZ2V0IiwidmFsdWUiLCJuZW9JbnB1dCIsIm1hcCIsImVsZW0iLCJwcm9maWxlTmVvU3VibWl0QnV0dG9uIiwicHJvZmlsZUxvZ291dEJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxRQUFRLEdBQUcsQ0FDYixlQURhLEVB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QVMsRUFBRVQsb0ZBQU0sQ0FBQ1ksc0JBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsQ0F2RUYsQ0FEUSxHQThFTixJQW5GTixFQW9GRTtBQUFHLFdBQU8sRUFBRXRCLE1BQVo7QUFBb0IsYUFBUyxFQUFFVSxvRkFBTSxDQUFDYSxnQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBGRixDQURGO0FBMEZELENBakxEOztHQUFNM0QsbUI7VUFTV2UscUQ7OztLQVRYZixtQjtBQW1MU0Esa0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdm90ZS4xNDM0ZTM4MmE4MjI1ZGI0ODkzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHVzZXJTZXJ2aWNlIGZyb20gJy4vLi4vdXRpbHMvdXNlclNlcnZpY2UnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL1Byb2ZpbGVDb21wbGV0ZS5tb2R1bGUuY3NzJztcclxuXHJcbmxldCB0ZW1wTGlzdCA9IFtcclxuICAnVW5pdGVkIFN0YXRlcycsXHJcbiAgJ1VuaXRlZCBLaW5nZG9tJyxcclxuICAnTmVwYWwnLFxyXG4gICdBZmdoYW5pc3RhbicsXHJcbiAgJ0FsYmFuaWEnLFxyXG4gICdBbGdlcmlhJyxcclxuICAnQW1lcmljYW4gU2Ftb2EnLFxyXG4gICdBbmRvcnJhJyxcclxuICAnQW5nb2xhJyxcclxuICAnQW5ndWlsbGEnLFxyXG4gICdBbnRhcmN0aWNhJyxcclxuICAnQW50aWd1YSBhbmQgQmFyYnVkYScsXHJcbiAgJ0FyZ2VudGluYScsXHJcbiAgJ0FybWVuaWEnLFxyXG4gICdBcnViYScsXHJcbiAgJ0F1c3RyYWxpYScsXHJcbiAgJ0F1c3RyaWEnLFxyXG4gICdBemVyYmFpamFuJyxcclxuICAnQmFoYW1hcycsXHJcbiAgJ0JhaHJhaW4nLFxyXG4gICdCYW5nbGFkZXNoJyxcclxuICAnQmFyYmFkb3MnLFxyXG4gICdCZWxhcnVzJyxcclxuICAnQmVsZ2l1bScsXHJcbiAgJ0JlbGl6ZScsXHJcbiAgJ0JlbmluJyxcclxuICAnQmVybXVkYScsXHJcbiAgJ0JodXRhbicsXHJcbiAgJ0JvbGl2aWEnLFxyXG4gICdCb3NuaWEgYW5kIEhlcnplZ293aW5hJyxcclxuICAnQm90c3dhbmEnLFxyXG4gICdCb3V2ZXQgSXNsYW5kJyxcclxuICAnQnJhemlsJyxcclxuICAnQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5JyxcclxuICAnQnJ1bmVpIERhcnVzc2FsYW0nLFxyXG4gICdCdWxnYXJpYScsXHJcbiAgJ0J1cmtpbmEgRmFzbycsXHJcbiAgJ0J1cnVuZGknLFxyXG4gICdDYW1ib2RpYScsXHJcbiAgJ0NhbWVyb29uJyxcclxuICAnQ2FuYWRhJyxcclxuICAnQ2FwZSBWZXJkZScsXHJcbiAgJ0NheW1hbiBJc2xhbmRzJyxcclxuICAnQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljJyxcclxuICAnQ2hhZCcsXHJcbiAgJ0NoaWxlJyxcclxuICAnQ2hpbmEnLFxyXG4gICdDaHJpc3RtYXMgSXNsYW5kJyxcclxuICAnQ29jb3MgKEtlZWxpbmcpIElzbGFuZHMnLFxyXG4gICdDb2xvbWJpYScsXHJcbiAgJ0NvbW9yb3MnLFxyXG4gICdDb25nbycsXHJcbiAgJ0NvbmdvLCB0aGUgRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUnLFxyXG4gICdDb29rIElzbGFuZHMnLFxyXG4gICdDb3N0YSBSaWNhJyxcclxuICBcIkNvdGUgZCdJdm9pcmVcIixcclxuICAnQ3JvYXRpYSAoSHJ2YXRza2EpJyxcclxuICAnQ3ViYScsXHJcbiAgJ0N5cHJ1cycsXHJcbiAgJ0N6ZWNoIFJlcHVibGljJyxcclxuICAnRGVubWFyaycsXHJcbiAgJ0RqaWJvdXRpJyxcclxuICAnRG9taW5pY2EnLFxyXG4gICdEb21pbmljYW4gUmVwdWJsaWMnLFxyXG4gICdFYXN0IFRpbW9yJyxcclxuICAnRWN1YWRvcicsXHJcbiAgJ0VneXB0JyxcclxuICAnRWwgU2FsdmFkb3InLFxyXG4gICdFcXVhdG9yaWFsIEd1aW5lYScsXHJcbiAgJ0VyaXRyZWEnLFxyXG4gICdFc3RvbmlhJyxcclxuICAnRXRoaW9waWEnLFxyXG4gICdGYWxrbGFuZCBJc2xhbmRzIChNYWx2aW5hcyknLFxyXG4gICdGYXJvZSBJc2xhbmRzJyxcclxuICAnRmlqaScsXHJcbiAgJ0ZpbmxhbmQnLFxyXG4gICdGcmFuY2UnLFxyXG4gICdGcmFuY2UgTWV0cm9wb2xpdGFuJyxcclxuICAnRnJlbmNoIEd1aWFuYScsXHJcbiAgJ0ZyZW5jaCBQb2x5bmVzaWEnLFxyXG4gICdGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXMnLFxyXG4gICdHYWJvbicsXHJcbiAgJ0dhbWJpYScsXHJcbiAgJ0dlb3JnaWEnLFxyXG4gICdHZXJtYW55JyxcclxuICAnR2hhbmEnLFxyXG4gICdHaWJyYWx0YXInLFxyXG4gICdHcmVlY2UnLFxyXG4gICdHcmVlbmxhbmQnLFxyXG4gICdHcmVuYWRhJyxcclxuICAnR3VhZGVsb3VwZScsXHJcbiAgJ0d1YW0nLFxyXG4gICdHdWF0ZW1hbGEnLFxyXG4gICdHdWluZWEnLFxyXG4gICdHdWluZWEtQmlzc2F1JyxcclxuICAnR3V5YW5hJyxcclxuICAnSGFpdGknLFxyXG4gICdIZWFyZCBhbmQgTWMgRG9uYWxkIElzbGFuZHMnLFxyXG4gICdIb2x5IFNlZSAoVmF0aWNhbiBDaXR5IFN0YXRlKScsXHJcbiAgJ0hvbmR1cmFzJyxcclxuICAnSG9uZyBLb25nJyxcclxuICAnSHVuZ2FyeScsXHJcbiAgJ0ljZWxhbmQnLFxyXG4gICdJbmRpYScsXHJcbiAgJ0luZG9uZXNpYScsXHJcbiAgJ0lyYW4gKElzbGFtaWMgUmVwdWJsaWMgb2YpJyxcclxuICAnSXJhcScsXHJcbiAgJ0lyZWxhbmQnLFxyXG4gICdJc3JhZWwnLFxyXG4gICdJdGFseScsXHJcbiAgJ0phbWFpY2EnLFxyXG4gICdKYXBhbicsXHJcbiAgJ0pvcmRhbicsXHJcbiAgJ0themFraHN0YW4nLFxyXG4gICdLZW55YScsXHJcbiAgJ0tpcmliYXRpJyxcclxuICBcIktvcmVhLCBEZW1vY3JhdGljIFBlb3BsZSdzIFJlcHVibGljIG9mXCIsXHJcbiAgJ0tvcmVhLCBSZXB1YmxpYyBvZicsXHJcbiAgJ0t1d2FpdCcsXHJcbiAgJ0t5cmd5enN0YW4nLFxyXG4gIFwiTGFvLCBQZW9wbGUncyBEZW1vY3JhdGljIFJlcHVibGljXCIsXHJcbiAgJ0xhdHZpYScsXHJcbiAgJ0xlYmFub24nLFxyXG4gICdMZXNvdGhvJyxcclxuICAnTGliZXJpYScsXHJcbiAgJ0xpYnlhbiBBcmFiIEphbWFoaXJpeWEnLFxyXG4gICdMaWVjaHRlbnN0ZWluJyxcclxuICAnTGl0aHVhbmlhJyxcclxuICAnTHV4ZW1ib3VyZycsXHJcbiAgJ01hY2F1JyxcclxuICAnTWFjZWRvbmlhLCBUaGUgRm9ybWVyIFl1Z29zbGF2IFJlcHVibGljIG9mJyxcclxuICAnTWFkYWdhc2NhcicsXHJcbiAgJ01hbGF3aScsXHJcbiAgJ01hbGF5c2lhJyxcclxuICAnTWFsZGl2ZXMnLFxyXG4gICdNYWxpJyxcclxuICAnTWFsdGEnLFxyXG4gICdNYXJzaGFsbCBJc2xhbmRzJyxcclxuICAnTWFydGluaXF1ZScsXHJcbiAgJ01hdXJpdGFuaWEnLFxyXG4gICdNYXVyaXRpdXMnLFxyXG4gICdNYXlvdHRlJyxcclxuICAnTWV4aWNvJyxcclxuICAnTWljcm9uZXNpYSwgRmVkZXJhdGVkIFN0YXRlcyBvZicsXHJcbiAgJ01vbGRvdmEsIFJlcHVibGljIG9mJyxcclxuICAnTW9uYWNvJyxcclxuICAnTW9uZ29saWEnLFxyXG4gICdNb250c2VycmF0JyxcclxuICAnTW9yb2NjbycsXHJcbiAgJ01vemFtYmlxdWUnLFxyXG4gICdNeWFubWFyJyxcclxuICAnTmFtaWJpYScsXHJcbiAgJ05hdXJ1JyxcclxuICAnTmV0aGVybGFuZHMnLFxyXG4gICdOZXRoZXJsYW5kcyBBbnRpbGxlcycsXHJcbiAgJ05ldyBDYWxlZG9uaWEnLFxyXG4gICdOZXcgWmVhbGFuZCcsXHJcbiAgJ05pY2FyYWd1YScsXHJcbiAgJ05pZ2VyJyxcclxuICAnTmlnZXJpYScsXHJcbiAgJ05pdWUnLFxyXG4gICdOb3Jmb2xrIElzbGFuZCcsXHJcbiAgJ05vcnRoZXJuIE1hcmlhbmEgSXNsYW5kcycsXHJcbiAgJ05vcndheScsXHJcbiAgJ09tYW4nLFxyXG4gICdQYWtpc3RhbicsXHJcbiAgJ1BhbGF1JyxcclxuICAnUGFuYW1hJyxcclxuICAnUGFwdWEgTmV3IEd1aW5lYScsXHJcbiAgJ1BhcmFndWF5JyxcclxuICAnUGVydScsXHJcbiAgJ1BoaWxpcHBpbmVzJyxcclxuICAnUGl0Y2Fpcm4nLFxyXG4gICdQb2xhbmQnLFxyXG4gICdQb3J0dWdhbCcsXHJcbiAgJ1B1ZXJ0byBSaWNvJyxcclxuICAnUWF0YXInLFxyXG4gICdSZXVuaW9uJyxcclxuICAnUm9tYW5pYScsXHJcbiAgJ1J1c3NpYW4gRmVkZXJhdGlvbicsXHJcbiAgJ1J3YW5kYScsXHJcbiAgJ1NhaW50IEtpdHRzIGFuZCBOZXZpcycsXHJcbiAgJ1NhaW50IEx1Y2lhJyxcclxuICAnU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXMnLFxyXG4gICdTYW1vYScsXHJcbiAgJ1NhbiBNYXJpbm8nLFxyXG4gICdTYW8gVG9tZSBhbmQgUHJpbmNpcGUnLFxyXG4gICdTYXVkaSBBcmFiaWEnLFxyXG4gICdTZW5lZ2FsJyxcclxuICAnU2V5Y2hlbGxlcycsXHJcbiAgJ1NpZXJyYSBMZW9uZScsXHJcbiAgJ1NpbmdhcG9yZScsXHJcbiAgJ1Nsb3Zha2lhIChTbG92YWsgUmVwdWJsaWMpJyxcclxuICAnU2xvdmVuaWEnLFxyXG4gICdTb2xvbW9uIElzbGFuZHMnLFxyXG4gICdTb21hbGlhJyxcclxuICAnU291dGggQWZyaWNhJyxcclxuICAnU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHMnLFxyXG4gICdTcGFpbicsXHJcbiAgJ1NyaSBMYW5rYScsXHJcbiAgJ1N0LiBIZWxlbmEnLFxyXG4gICdTdC4gUGllcnJlIGFuZCBNaXF1ZWxvbicsXHJcbiAgJ1N1ZGFuJyxcclxuICAnU3VyaW5hbWUnLFxyXG4gICdTdmFsYmFyZCBhbmQgSmFuIE1heWVuIElzbGFuZHMnLFxyXG4gICdTd2F6aWxhbmQnLFxyXG4gICdTd2VkZW4nLFxyXG4gICdTd2l0emVybGFuZCcsXHJcbiAgJ1N5cmlhbiBBcmFiIFJlcHVibGljJyxcclxuICAnVGFpd2FuLCBQcm92aW5jZSBvZiBDaGluYScsXHJcbiAgJ1RhamlraXN0YW4nLFxyXG4gICdUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mJyxcclxuICAnVGhhaWxhbmQnLFxyXG4gICdUb2dvJyxcclxuICAnVG9rZWxhdScsXHJcbiAgJ1RvbmdhJyxcclxuICAnVHJpbmlkYWQgYW5kIFRvYmFnbycsXHJcbiAgJ1R1bmlzaWEnLFxyXG4gICdUdXJrZXknLFxyXG4gICdUdXJrbWVuaXN0YW4nLFxyXG4gICdUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHMnLFxyXG4gICdUdXZhbHUnLFxyXG4gICdVZ2FuZGEnLFxyXG4gICdVa3JhaW5lJyxcclxuICAnVW5pdGVkIEFyYWIgRW1pcmF0ZXMnLFxyXG4gICdVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHMnLFxyXG4gICdVcnVndWF5JyxcclxuICAnVXpiZWtpc3RhbicsXHJcbiAgJ1ZhbnVhdHUnLFxyXG4gICdWZW5lenVlbGEnLFxyXG4gICdWaWV0bmFtJyxcclxuICAnVmlyZ2luIElzbGFuZHMgKEJyaXRpc2gpJyxcclxuICAnVmlyZ2luIElzbGFuZHMgKFUuUy4pJyxcclxuICAnV2FsbGlzIGFuZCBGdXR1bmEgSXNsYW5kcycsXHJcbiAgJ1dlc3Rlcm4gU2FoYXJhJyxcclxuICAnWWVtZW4nLFxyXG4gICdZdWdvc2xhdmlhJyxcclxuICAnWmFtYmlhJyxcclxuICAnWmltYmFid2UnLFxyXG5dO1xyXG5cclxuY29uc3QgUHJvZmlsZUNvbXBsZXRlRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbYWdlLCBzZXRBZ2VdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY291bnRyeSwgc2V0Q291bnRyeV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lkTm8sIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY291bnRyeUxpc3QsIHNldENvdW50cnlMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW3NhdmVkVXNlciwgc2V0U2F2ZWRVc2VyXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBHZXQgY291bnRyeSBsaXN0IGZyb20gc29tZXdoZXJlXHJcbiAgICBzZXRDb3VudHJ5KHRlbXBMaXN0WzBdKTtcclxuICAgIHNldENvdW50cnlMaXN0KHRlbXBMaXN0KTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGUgdXNlciBwcm9maWxlIGlzIGNvbXBsZXRlZFxyXG4gICAgLy8gc2V0VXNlcigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc2V0VXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB1c2VyO1xyXG4gICAgICBpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgICAgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldFVzZXJEZXRhaWxzKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldFVzZXJEZXRhaWxzKFxyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcHktdm90ZS11c2VyJylcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh1c2VyLmVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHVzZXIuZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcHB5LXZvdGUtdXNlcicsIHVzZXIuaWQpO1xyXG5cclxuICAgICAgLy9JZiBmb3JtIGlzIGNvbXBsZXRlXHJcbiAgICAgIGlmICh1c2VyLmNvbXBsZXRlZCkge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvb3ZlcnZpZXcnKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRTYXZlZFVzZXIodXNlcik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgYWxlcnQoJ0Vycm9yOicsIEVycm9yRXZlbnQubWVzc2FnZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FwcHktdm90ZS11c2VyJyk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXBweS12b3RlLXVzZXItdG9rZW4nKTtcclxuICAgIHJvdXRlci5wdXNoKCcvb3ZlcnZpZXcnKTtcclxuICB9O1xyXG5cclxuICAvLyBUaGlzIHdpbGwgc3VibWl0IHRoZSBsb2dpbiBmb3JtXHJcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgLy9kbyBzb21lIHByb2Nlc3NpbmcgaGVyZVxyXG4gICAgLy8gVGhpcyBpcyB3aGVyZSB3ZSBpbnRlcmFjdCB3aXRoIHRoZSBiYWNrZW5kIHRvIGxvZ2luXHJcbiAgICAvLyByZWRpcmVjdG8gdG8gc29tZSBwYWdlIGlmIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsXHJcbiAgICB0cnkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgbGV0IHVzZXJEZXRhaWxzID0geyAuLi5zYXZlZFVzZXIgfTtcclxuICAgICAgaWYgKGFnZSA+PSAxOCkge1xyXG4gICAgICAgIHVzZXJEZXRhaWxzLmFnZSA9IGFnZTtcclxuICAgICAgICB1c2VyRGV0YWlscy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHVzZXJEZXRhaWxzLmNvdW50cnkgPSBjb3VudHJ5O1xyXG4gICAgICAgIHVzZXJEZXRhaWxzLnBlcnNvbmFsSUQgPSBpZE5vO1xyXG4gICAgICAgIHVzZXJEZXRhaWxzLmNvbXBsZXRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCB1cGRhdGVkVXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmNvbXBsZXRlUHJvZmlsZSh1c2VyRGV0YWlscyk7XHJcbiAgICAgICAgaWYgKHVwZGF0ZWRVc2VyKSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXBweS12b3RlLXVzZXInLCB1cGRhdGVkVXNlci5pZCk7XHJcbiAgICAgICAgICByb3V0ZXIucmVsb2FkKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHVwZGF0ZSBlcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgnWW91IHNob3VsZCBiZSBncmVhdGVyIG9yIGVxdWFsIHRvIDE4Jyk7XHJcbiAgICAgIH1cclxuICAgICAgLy9Vc2VyIGhhcyBiZWVuIHNhdmVkIGhlcmUuLi5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgICAgIGFsZXJ0KCdTb21ldGhpbmcgaXMgd3Jvbmc6ICcsIGVyci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvL0pTWCA9PiBKYXZhU2NyaXB0IFN5bnRheFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVDb21wbGV0ZURpdn0+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVDb21wbGV0ZUhlYWRlcn0+XHJcbiAgICAgICAgQ29tcGxldGUgcHJvZmlsZSBiZWZvcmUgdm90aW5nXHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIHtzYXZlZFVzZXIgPyAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEZvcm19IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVDb21wbGV0ZUZvcm19PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzYXZlZFVzZXIuZGlzcGxheU5hbWV9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmVvSW5wdXREaXNhYmxlZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIGZvciBlbWFpbCAqL31cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2F2ZWRVc2VyLmVtYWlsfVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmVvSW5wdXREaXNhYmxlZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEFnZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXthZ2V9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZ2VcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0fVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb3VudHJ5fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRDb3VudHJ5KGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0fVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y291bnRyeUxpc3QubWFwKChlbGVtLCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICAgIGtleT17YENvdW50cnkke2lkfWB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZWxlbX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtlbGVtfVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgIHtjb3VudHJ5ID09PSAnVW5pdGVkIFN0YXRlcycgPyAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTdGF0ZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmVvSW5wdXR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXRlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRJZChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpZE5vfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmF0aW9uYWwgaWQob3B0aW9uYWwpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVOZW9TdWJtaXRCdXR0b259PlxyXG4gICAgICAgICAgICAgIENvbXBsZXRlIE15IFByb2ZpbGVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgICA8YSBvbkNsaWNrPXtsb2dvdXR9IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVMb2dvdXRCdG59PlxyXG4gICAgICAgIExvZ091dFxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUNvbXBsZXRlRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==