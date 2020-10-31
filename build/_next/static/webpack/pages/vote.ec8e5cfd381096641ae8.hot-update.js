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
      lineNumber: 375,
      columnNumber: 11
    }
  }, countryList.map((elem, id) => __jsx("option", {
    key: `Country${id}`,
    value: elem,
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.neoInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 15
    }
  }, elem))), country === 'United States' ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
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
      lineNumber: 395,
      columnNumber: 15
    }
  })) : null, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
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
      lineNumber: 406,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 11
    }
  }, __jsx("button", {
    type: "submit",
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.profileNeoSubmitButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 13
    }
  }, "Complete My Profile")), __jsx("a", {
    onClick: logout,
    className: _styles_components_ProfileComplete_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.profileLogoutBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlQ29tcGxldGUuanMiXSwibmFtZXMiOlsidGVtcExpc3QiLCJQcm9maWxlQ29tcGxldGVGb3JtIiwiYWdlIiwic2V0QWdlIiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiY291bnRyeSIsInNldENvdW50cnkiLCJpZE5vIiwic2V0SWQiLCJjb3VudHJ5TGlzdCIsInNldENvdW50cnlMaXN0Iiwic2F2ZWRVc2VyIiwic2V0U2F2ZWRVc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0Iiwic2V0VXNlciIsInVzZXIiLCJxdWVyeSIsImlkIiwidXNlclNlcnZpY2UiLCJnZXRVc2VyRGV0YWlscyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlcnJvciIsIkVycm9yIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwiY29tcGxldGVkIiwicHVzaCIsImVyciIsImFsZXJ0IiwiRXJyb3JFdmVudCIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJzdWJtaXRGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJEZXRhaWxzIiwicGVyc29uYWxJRCIsInVwZGF0ZWRVc2VyIiwiY29tcGxldGVQcm9maWxlIiwicmVsb2FkIiwic3R5bGVzIiwicHJvZmlsZUNvbXBsZXRlRGl2IiwicHJvZmlsZUNvbXBsZXRlSGVhZGVyIiwicHJvZmlsZUNvbXBsZXRlRm9ybSIsImRpc3BsYXlOYW1lIiwibmVvSW5wdXREaXNhYmxlZCIsImVtYWlsIiwidGFyZ2V0IiwidmFsdWUiLCJuZW9JbnB1dCIsIm1hcCIsImVsZW0iLCJwcm9maWxlTmVvU3VibWl0QnV0dG9uIiwicHJvZmlsZUxvZ291dEJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxRQUFRLEdBQUcsQ0FDYixlQURhLEVB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QUFzQixhQUFTLEVBQUVULG9GQUFNLENBQUNZLHNCQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLENBekVGLEVBK0VFO0FBQUcsV0FBTyxFQUFFdEIsTUFBWjtBQUFvQixhQUFTLEVBQUVVLG9GQUFNLENBQUNhLGdCQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBL0VGLENBRFEsR0FvRk4sSUF6Rk4sQ0FERjtBQTZGRCxDQXBMRDs7R0FBTTNELG1CO1VBU1dlLHFEOzs7S0FUWGYsbUI7QUFzTFNBLGtGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZvdGUuZWM4ZTVjZmQzODEwOTY2NDFhZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB1c2VyU2VydmljZSBmcm9tICcuLy4uL3V0aWxzL3VzZXJTZXJ2aWNlJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Qcm9maWxlQ29tcGxldGUubW9kdWxlLmNzcyc7XHJcblxyXG5sZXQgdGVtcExpc3QgPSBbXHJcbiAgJ1VuaXRlZCBTdGF0ZXMnLFxyXG4gICdVbml0ZWQgS2luZ2RvbScsXHJcbiAgJ05lcGFsJyxcclxuICAnQWZnaGFuaXN0YW4nLFxyXG4gICdBbGJhbmlhJyxcclxuICAnQWxnZXJpYScsXHJcbiAgJ0FtZXJpY2FuIFNhbW9hJyxcclxuICAnQW5kb3JyYScsXHJcbiAgJ0FuZ29sYScsXHJcbiAgJ0FuZ3VpbGxhJyxcclxuICAnQW50YXJjdGljYScsXHJcbiAgJ0FudGlndWEgYW5kIEJhcmJ1ZGEnLFxyXG4gICdBcmdlbnRpbmEnLFxyXG4gICdBcm1lbmlhJyxcclxuICAnQXJ1YmEnLFxyXG4gICdBdXN0cmFsaWEnLFxyXG4gICdBdXN0cmlhJyxcclxuICAnQXplcmJhaWphbicsXHJcbiAgJ0JhaGFtYXMnLFxyXG4gICdCYWhyYWluJyxcclxuICAnQmFuZ2xhZGVzaCcsXHJcbiAgJ0JhcmJhZG9zJyxcclxuICAnQmVsYXJ1cycsXHJcbiAgJ0JlbGdpdW0nLFxyXG4gICdCZWxpemUnLFxyXG4gICdCZW5pbicsXHJcbiAgJ0Jlcm11ZGEnLFxyXG4gICdCaHV0YW4nLFxyXG4gICdCb2xpdmlhJyxcclxuICAnQm9zbmlhIGFuZCBIZXJ6ZWdvd2luYScsXHJcbiAgJ0JvdHN3YW5hJyxcclxuICAnQm91dmV0IElzbGFuZCcsXHJcbiAgJ0JyYXppbCcsXHJcbiAgJ0JyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeScsXHJcbiAgJ0JydW5laSBEYXJ1c3NhbGFtJyxcclxuICAnQnVsZ2FyaWEnLFxyXG4gICdCdXJraW5hIEZhc28nLFxyXG4gICdCdXJ1bmRpJyxcclxuICAnQ2FtYm9kaWEnLFxyXG4gICdDYW1lcm9vbicsXHJcbiAgJ0NhbmFkYScsXHJcbiAgJ0NhcGUgVmVyZGUnLFxyXG4gICdDYXltYW4gSXNsYW5kcycsXHJcbiAgJ0NlbnRyYWwgQWZyaWNhbiBSZXB1YmxpYycsXHJcbiAgJ0NoYWQnLFxyXG4gICdDaGlsZScsXHJcbiAgJ0NoaW5hJyxcclxuICAnQ2hyaXN0bWFzIElzbGFuZCcsXHJcbiAgJ0NvY29zIChLZWVsaW5nKSBJc2xhbmRzJyxcclxuICAnQ29sb21iaWEnLFxyXG4gICdDb21vcm9zJyxcclxuICAnQ29uZ28nLFxyXG4gICdDb25nbywgdGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlJyxcclxuICAnQ29vayBJc2xhbmRzJyxcclxuICAnQ29zdGEgUmljYScsXHJcbiAgXCJDb3RlIGQnSXZvaXJlXCIsXHJcbiAgJ0Nyb2F0aWEgKEhydmF0c2thKScsXHJcbiAgJ0N1YmEnLFxyXG4gICdDeXBydXMnLFxyXG4gICdDemVjaCBSZXB1YmxpYycsXHJcbiAgJ0Rlbm1hcmsnLFxyXG4gICdEamlib3V0aScsXHJcbiAgJ0RvbWluaWNhJyxcclxuICAnRG9taW5pY2FuIFJlcHVibGljJyxcclxuICAnRWFzdCBUaW1vcicsXHJcbiAgJ0VjdWFkb3InLFxyXG4gICdFZ3lwdCcsXHJcbiAgJ0VsIFNhbHZhZG9yJyxcclxuICAnRXF1YXRvcmlhbCBHdWluZWEnLFxyXG4gICdFcml0cmVhJyxcclxuICAnRXN0b25pYScsXHJcbiAgJ0V0aGlvcGlhJyxcclxuICAnRmFsa2xhbmQgSXNsYW5kcyAoTWFsdmluYXMpJyxcclxuICAnRmFyb2UgSXNsYW5kcycsXHJcbiAgJ0ZpamknLFxyXG4gICdGaW5sYW5kJyxcclxuICAnRnJhbmNlJyxcclxuICAnRnJhbmNlIE1ldHJvcG9saXRhbicsXHJcbiAgJ0ZyZW5jaCBHdWlhbmEnLFxyXG4gICdGcmVuY2ggUG9seW5lc2lhJyxcclxuICAnRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzJyxcclxuICAnR2Fib24nLFxyXG4gICdHYW1iaWEnLFxyXG4gICdHZW9yZ2lhJyxcclxuICAnR2VybWFueScsXHJcbiAgJ0doYW5hJyxcclxuICAnR2licmFsdGFyJyxcclxuICAnR3JlZWNlJyxcclxuICAnR3JlZW5sYW5kJyxcclxuICAnR3JlbmFkYScsXHJcbiAgJ0d1YWRlbG91cGUnLFxyXG4gICdHdWFtJyxcclxuICAnR3VhdGVtYWxhJyxcclxuICAnR3VpbmVhJyxcclxuICAnR3VpbmVhLUJpc3NhdScsXHJcbiAgJ0d1eWFuYScsXHJcbiAgJ0hhaXRpJyxcclxuICAnSGVhcmQgYW5kIE1jIERvbmFsZCBJc2xhbmRzJyxcclxuICAnSG9seSBTZWUgKFZhdGljYW4gQ2l0eSBTdGF0ZSknLFxyXG4gICdIb25kdXJhcycsXHJcbiAgJ0hvbmcgS29uZycsXHJcbiAgJ0h1bmdhcnknLFxyXG4gICdJY2VsYW5kJyxcclxuICAnSW5kaWEnLFxyXG4gICdJbmRvbmVzaWEnLFxyXG4gICdJcmFuIChJc2xhbWljIFJlcHVibGljIG9mKScsXHJcbiAgJ0lyYXEnLFxyXG4gICdJcmVsYW5kJyxcclxuICAnSXNyYWVsJyxcclxuICAnSXRhbHknLFxyXG4gICdKYW1haWNhJyxcclxuICAnSmFwYW4nLFxyXG4gICdKb3JkYW4nLFxyXG4gICdLYXpha2hzdGFuJyxcclxuICAnS2VueWEnLFxyXG4gICdLaXJpYmF0aScsXHJcbiAgXCJLb3JlYSwgRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZlwiLFxyXG4gICdLb3JlYSwgUmVwdWJsaWMgb2YnLFxyXG4gICdLdXdhaXQnLFxyXG4gICdLeXJneXpzdGFuJyxcclxuICBcIkxhbywgUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpY1wiLFxyXG4gICdMYXR2aWEnLFxyXG4gICdMZWJhbm9uJyxcclxuICAnTGVzb3RobycsXHJcbiAgJ0xpYmVyaWEnLFxyXG4gICdMaWJ5YW4gQXJhYiBKYW1haGlyaXlhJyxcclxuICAnTGllY2h0ZW5zdGVpbicsXHJcbiAgJ0xpdGh1YW5pYScsXHJcbiAgJ0x1eGVtYm91cmcnLFxyXG4gICdNYWNhdScsXHJcbiAgJ01hY2Vkb25pYSwgVGhlIEZvcm1lciBZdWdvc2xhdiBSZXB1YmxpYyBvZicsXHJcbiAgJ01hZGFnYXNjYXInLFxyXG4gICdNYWxhd2knLFxyXG4gICdNYWxheXNpYScsXHJcbiAgJ01hbGRpdmVzJyxcclxuICAnTWFsaScsXHJcbiAgJ01hbHRhJyxcclxuICAnTWFyc2hhbGwgSXNsYW5kcycsXHJcbiAgJ01hcnRpbmlxdWUnLFxyXG4gICdNYXVyaXRhbmlhJyxcclxuICAnTWF1cml0aXVzJyxcclxuICAnTWF5b3R0ZScsXHJcbiAgJ01leGljbycsXHJcbiAgJ01pY3JvbmVzaWEsIEZlZGVyYXRlZCBTdGF0ZXMgb2YnLFxyXG4gICdNb2xkb3ZhLCBSZXB1YmxpYyBvZicsXHJcbiAgJ01vbmFjbycsXHJcbiAgJ01vbmdvbGlhJyxcclxuICAnTW9udHNlcnJhdCcsXHJcbiAgJ01vcm9jY28nLFxyXG4gICdNb3phbWJpcXVlJyxcclxuICAnTXlhbm1hcicsXHJcbiAgJ05hbWliaWEnLFxyXG4gICdOYXVydScsXHJcbiAgJ05ldGhlcmxhbmRzJyxcclxuICAnTmV0aGVybGFuZHMgQW50aWxsZXMnLFxyXG4gICdOZXcgQ2FsZWRvbmlhJyxcclxuICAnTmV3IFplYWxhbmQnLFxyXG4gICdOaWNhcmFndWEnLFxyXG4gICdOaWdlcicsXHJcbiAgJ05pZ2VyaWEnLFxyXG4gICdOaXVlJyxcclxuICAnTm9yZm9sayBJc2xhbmQnLFxyXG4gICdOb3J0aGVybiBNYXJpYW5hIElzbGFuZHMnLFxyXG4gICdOb3J3YXknLFxyXG4gICdPbWFuJyxcclxuICAnUGFraXN0YW4nLFxyXG4gICdQYWxhdScsXHJcbiAgJ1BhbmFtYScsXHJcbiAgJ1BhcHVhIE5ldyBHdWluZWEnLFxyXG4gICdQYXJhZ3VheScsXHJcbiAgJ1BlcnUnLFxyXG4gICdQaGlsaXBwaW5lcycsXHJcbiAgJ1BpdGNhaXJuJyxcclxuICAnUG9sYW5kJyxcclxuICAnUG9ydHVnYWwnLFxyXG4gICdQdWVydG8gUmljbycsXHJcbiAgJ1FhdGFyJyxcclxuICAnUmV1bmlvbicsXHJcbiAgJ1JvbWFuaWEnLFxyXG4gICdSdXNzaWFuIEZlZGVyYXRpb24nLFxyXG4gICdSd2FuZGEnLFxyXG4gICdTYWludCBLaXR0cyBhbmQgTmV2aXMnLFxyXG4gICdTYWludCBMdWNpYScsXHJcbiAgJ1NhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzJyxcclxuICAnU2Ftb2EnLFxyXG4gICdTYW4gTWFyaW5vJyxcclxuICAnU2FvIFRvbWUgYW5kIFByaW5jaXBlJyxcclxuICAnU2F1ZGkgQXJhYmlhJyxcclxuICAnU2VuZWdhbCcsXHJcbiAgJ1NleWNoZWxsZXMnLFxyXG4gICdTaWVycmEgTGVvbmUnLFxyXG4gICdTaW5nYXBvcmUnLFxyXG4gICdTbG92YWtpYSAoU2xvdmFrIFJlcHVibGljKScsXHJcbiAgJ1Nsb3ZlbmlhJyxcclxuICAnU29sb21vbiBJc2xhbmRzJyxcclxuICAnU29tYWxpYScsXHJcbiAgJ1NvdXRoIEFmcmljYScsXHJcbiAgJ1NvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzJyxcclxuICAnU3BhaW4nLFxyXG4gICdTcmkgTGFua2EnLFxyXG4gICdTdC4gSGVsZW5hJyxcclxuICAnU3QuIFBpZXJyZSBhbmQgTWlxdWVsb24nLFxyXG4gICdTdWRhbicsXHJcbiAgJ1N1cmluYW1lJyxcclxuICAnU3ZhbGJhcmQgYW5kIEphbiBNYXllbiBJc2xhbmRzJyxcclxuICAnU3dhemlsYW5kJyxcclxuICAnU3dlZGVuJyxcclxuICAnU3dpdHplcmxhbmQnLFxyXG4gICdTeXJpYW4gQXJhYiBSZXB1YmxpYycsXHJcbiAgJ1RhaXdhbiwgUHJvdmluY2Ugb2YgQ2hpbmEnLFxyXG4gICdUYWppa2lzdGFuJyxcclxuICAnVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZicsXHJcbiAgJ1RoYWlsYW5kJyxcclxuICAnVG9nbycsXHJcbiAgJ1Rva2VsYXUnLFxyXG4gICdUb25nYScsXHJcbiAgJ1RyaW5pZGFkIGFuZCBUb2JhZ28nLFxyXG4gICdUdW5pc2lhJyxcclxuICAnVHVya2V5JyxcclxuICAnVHVya21lbmlzdGFuJyxcclxuICAnVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzJyxcclxuICAnVHV2YWx1JyxcclxuICAnVWdhbmRhJyxcclxuICAnVWtyYWluZScsXHJcbiAgJ1VuaXRlZCBBcmFiIEVtaXJhdGVzJyxcclxuICAnVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzJyxcclxuICAnVXJ1Z3VheScsXHJcbiAgJ1V6YmVraXN0YW4nLFxyXG4gICdWYW51YXR1JyxcclxuICAnVmVuZXp1ZWxhJyxcclxuICAnVmlldG5hbScsXHJcbiAgJ1ZpcmdpbiBJc2xhbmRzIChCcml0aXNoKScsXHJcbiAgJ1ZpcmdpbiBJc2xhbmRzIChVLlMuKScsXHJcbiAgJ1dhbGxpcyBhbmQgRnV0dW5hIElzbGFuZHMnLFxyXG4gICdXZXN0ZXJuIFNhaGFyYScsXHJcbiAgJ1llbWVuJyxcclxuICAnWXVnb3NsYXZpYScsXHJcbiAgJ1phbWJpYScsXHJcbiAgJ1ppbWJhYndlJyxcclxuXTtcclxuXHJcbmNvbnN0IFByb2ZpbGVDb21wbGV0ZUZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FnZSwgc2V0QWdlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvdW50cnksIHNldENvdW50cnldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpZE5vLCBzZXRJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvdW50cnlMaXN0LCBzZXRDb3VudHJ5TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtzYXZlZFVzZXIsIHNldFNhdmVkVXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBHZXQgY291bnRyeSBsaXN0IGZyb20gc29tZXdoZXJlXHJcbiAgICBzZXRDb3VudHJ5KHRlbXBMaXN0WzBdKTtcclxuICAgIHNldENvdW50cnlMaXN0KHRlbXBMaXN0KTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGUgdXNlciBwcm9maWxlIGlzIGNvbXBsZXRlZFxyXG4gICAgc2V0VXNlcigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc2V0VXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB1c2VyO1xyXG4gICAgICBpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgICAgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldFVzZXJEZXRhaWxzKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldFVzZXJEZXRhaWxzKFxyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcHktdm90ZS11c2VyJylcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh1c2VyLmVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHVzZXIuZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcHB5LXZvdGUtdXNlcicsIHVzZXIuaWQpO1xyXG5cclxuICAgICAgLy9JZiBmb3JtIGlzIGNvbXBsZXRlXHJcbiAgICAgIGlmICh1c2VyLmNvbXBsZXRlZCkge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvb3ZlcnZpZXcnKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRTYXZlZFVzZXIodXNlcik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgYWxlcnQoJ0Vycm9yOicsIEVycm9yRXZlbnQubWVzc2FnZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FwcHktdm90ZS11c2VyJyk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXBweS12b3RlLXVzZXItdG9rZW4nKTtcclxuICAgIHJvdXRlci5wdXNoKCcvb3ZlcnZpZXcnKTtcclxuICB9O1xyXG5cclxuICAvLyBUaGlzIHdpbGwgc3VibWl0IHRoZSBsb2dpbiBmb3JtXHJcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgLy9kbyBzb21lIHByb2Nlc3NpbmcgaGVyZVxyXG4gICAgLy8gVGhpcyBpcyB3aGVyZSB3ZSBpbnRlcmFjdCB3aXRoIHRoZSBiYWNrZW5kIHRvIGxvZ2luXHJcbiAgICAvLyByZWRpcmVjdG8gdG8gc29tZSBwYWdlIGlmIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsXHJcbiAgICB0cnkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgbGV0IHVzZXJEZXRhaWxzID0geyAuLi5zYXZlZFVzZXIgfTtcclxuICAgICAgaWYgKGFnZSA+PSAxOCkge1xyXG4gICAgICAgIHVzZXJEZXRhaWxzLmFnZSA9IGFnZTtcclxuICAgICAgICB1c2VyRGV0YWlscy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHVzZXJEZXRhaWxzLmNvdW50cnkgPSBjb3VudHJ5O1xyXG4gICAgICAgIHVzZXJEZXRhaWxzLnBlcnNvbmFsSUQgPSBpZE5vO1xyXG4gICAgICAgIHVzZXJEZXRhaWxzLmNvbXBsZXRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCB1cGRhdGVkVXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmNvbXBsZXRlUHJvZmlsZSh1c2VyRGV0YWlscyk7XHJcbiAgICAgICAgaWYgKHVwZGF0ZWRVc2VyKSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXBweS12b3RlLXVzZXInLCB1cGRhdGVkVXNlci5pZCk7XHJcbiAgICAgICAgICByb3V0ZXIucmVsb2FkKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHVwZGF0ZSBlcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgnWW91IHNob3VsZCBiZSBncmVhdGVyIG9yIGVxdWFsIHRvIDE4Jyk7XHJcbiAgICAgIH1cclxuICAgICAgLy9Vc2VyIGhhcyBiZWVuIHNhdmVkIGhlcmUuLi5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgICAgIGFsZXJ0KCdTb21ldGhpbmcgaXMgd3Jvbmc6ICcsIGVyci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvL0pTWCA9PiBKYXZhU2NyaXB0IFN5bnRheFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVDb21wbGV0ZURpdn0+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVDb21wbGV0ZUhlYWRlcn0+XHJcbiAgICAgICAgQ29tcGxldGUgcHJvZmlsZSBiZWZvcmUgdm90aW5nXHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIHtzYXZlZFVzZXIgPyAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEZvcm19IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVDb21wbGV0ZUZvcm19PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzYXZlZFVzZXIuZGlzcGxheU5hbWV9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmVvSW5wdXREaXNhYmxlZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIGZvciBlbWFpbCAqL31cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2F2ZWRVc2VyLmVtYWlsfVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmVvSW5wdXREaXNhYmxlZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEFnZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXthZ2V9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZ2VcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0fVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogPGRpdj4gKi99XHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb3VudHJ5fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRDb3VudHJ5KGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0fVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y291bnRyeUxpc3QubWFwKChlbGVtLCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICAgIGtleT17YENvdW50cnkke2lkfWB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZWxlbX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtlbGVtfVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgey8qIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgICB7Y291bnRyeSA9PT0gJ1VuaXRlZCBTdGF0ZXMnID8gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0U3RhdGUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGF0ZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0SWQoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICB2YWx1ZT17aWROb31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZW9JbnB1dH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hdGlvbmFsIGlkKG9wdGlvbmFsKVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlTmVvU3VibWl0QnV0dG9ufT5cclxuICAgICAgICAgICAgICBDb21wbGV0ZSBNeSBQcm9maWxlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGEgb25DbGljaz17bG9nb3V0fSBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlTG9nb3V0QnRufT5cclxuICAgICAgICAgICAgTG9nT3V0XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlQ29tcGxldGVGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9