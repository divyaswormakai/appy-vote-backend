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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: 'ASDF',
    email: 'Makai'
  });
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
    onChange: event => setCountry(event.target.value) // className={styles.neoInput}
    ,
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

_s(ProfileCompleteForm, "KwdErvvRJVd67VQq2oy9jZN9Bac=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlQ29tcGxldGUuanMiXSwibmFtZXMiOlsidGVtcExpc3QiLCJQcm9maWxlQ29tcGxldGVGb3JtIiwiYWdlIiwic2V0QWdlIiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiY291bnRyeSIsInNldENvdW50cnkiLCJpZE5vIiwic2V0SWQiLCJjb3VudHJ5TGlzdCIsInNldENvdW50cnlMaXN0Iiwic2F2ZWRVc2VyIiwic2V0U2F2ZWRVc2VyIiwibmFtZSIsImVtYWlsIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0Iiwic2V0VXNlciIsInVzZXIiLCJxdWVyeSIsImlkIiwidXNlclNlcnZpY2UiLCJnZXRVc2VyRGV0YWlscyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlcnJvciIsIkVycm9yIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwiY29tcGxldGVkIiwicHVzaCIsImVyciIsImFsZXJ0IiwiRXJyb3JFdmVudCIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJzdWJtaXRGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJEZXRhaWxzIiwicGVyc29uYWxJRCIsInVwZGF0ZWRVc2VyIiwiY29tcGxldGVQcm9maWxlIiwicmVsb2FkIiwic3R5bGVzIiwicHJvZmlsZUNvbXBsZXRlRGl2IiwicHJvZmlsZUNvbXBsZXRlSGVhZGVyIiwicHJvZmlsZUNvbXBsZXRlRm9ybSIsImRpc3BsYXlOYW1lIiwibmVvSW5wdXREaXNhYmxlZCIsInRhcmdldCIsInZhbHVlIiwibmVvSW5wdXQiLCJtYXAiLCJlbGVtIiwicHJvZmlsZU5lb1N1Ym1pdEJ1dHRvbiIsInByb2ZpbGVMb2dvdXRCdG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsUUFBUSxHQUFHLENBQ2IsZUFEYSxFQUViLGdCQUZhLEVBR2IsT0FIYSxFQUliLGFBSmEsRUFLYixTQUxhLEVBTWIsU0FOYSxFQU9iLGdCQVBhLEVBUWIsU0FSYSxFQVNiLFFBVGEsRUFVYixVQVZhLEVBV2IsWUFYYSxFQVliLHFCQVphLEVBYWIsV0FiYSxFQWNiLFNBZGEsRUFlYixPQWZhLEVBZ0JiLFdBaEJhLEVBaUJiLFNBakJhLEVBa0JiLFlBbEJhLEVBbUJiLFNBbkJhLEVBb0JiLFNBcEJhLEVBcUJiLFlBckJhLEVBc0JiLFVBdEJhLEVBdUJiLFNBdkJhLEVBd0JiLFNBeEJhLEVBeUJiLFFBekJhLEVBMEJiLE9BMUJhLEVBMkJiLFNBM0JhLEVBNEJiLFFBNUJhLEVBNkJiLFNBN0JhLEVBOEJiLHdCQTlCYSxFQStCYixVQS9CYSxFQWdDYixlQWhDYSxFQWlDYixRQWpDYSxFQWtDYixnQ0FsQ2EsRUFtQ2IsbUJBbkNhLEVBb0NiLFVBcENhLEVBcUNiLGNBckNhLEVBc0NiLFNBdENhLEVBdUNiLFVBdkNhLEVBd0NiLFVBeENhLEVBeUNiLFFBekNhLEVBMENiLFlBMUNhLEVBMkNiLGdCQTNDYSxFQTRDYiwwQkE1Q2EsRUE2Q2IsTUE3Q2EsRUE4Q2IsT0E5Q2EsRUErQ2IsT0EvQ2EsRUFnRGIsa0JBaERhLEVBaURiLHlCQWpEYSxFQWtEYixVQWxEYSxFQW1EYixTQW5EYSxFQW9EYixPQXBEYSxFQXFEYix1Q0FyRGEsRUFzRGIsY0F0RGEsRUF1RGIsWUF2RGEsRUF3RGIsZUF4RGEsRUF5RGIsb0JBekRhLEVBMERiLE1BMURhLEVBMkRiLFFBM0RhLEVBNERiLGdCQTVEYSxFQTZEYixTQTdEYSxFQThEYixVQTlEYSxFQStEYixVQS9EYSxFQWdFYixvQkFoRWEsRUFpRWIsWUFqRWEsRUFrRWIsU0FsRWEsRUFtRWIsT0FuRWEsRUFvRWIsYUFwRWEsRUFxRWIsbUJBckVhLEVBc0ViLFNBdEVhLEVBdUViLFNBdkVhLEVBd0ViLFVBeEVhLEVBeUViLDZCQXpFYSxFQTBFYixlQTFFYSxFQTJFYixNQTNFYSxFQTRFYixTQTVFYSxFQTZFYixRQTdFYSxFQThFYixxQkE5RWEsRUErRWIsZUEvRWEsRUFnRmIsa0JBaEZhLEVBaUZiLDZCQWpGYSxFQWtGYixPQWxGYSxFQW1GYixRQW5GYSxFQW9GYixTQXBGYSxFQXFGYixTQXJGYSxFQXNGYixPQXRGYSxFQXVGYixXQXZGYSxFQXdGYixRQXhGYSxFQXlGYixXQXpGYSxFQTBGYixTQTFGYSxFQTJGYixZQTNGYSxFQTRGYixNQTVGYSxFQTZGYixXQTdGYSxFQThGYixRQTlGYSxFQStGYixlQS9GYSxFQWdHYixRQWhHYSxFQWlHYixPQWpHYSxFQWtHYiw2QkFsR2EsRUFtR2IsK0JBbkdhLEVBb0diLFVBcEdhLEVBcUdiLFdBckdhLEVBc0diLFNBdEdhLEVBdUdiLFNBdkdhLEVBd0diLE9BeEdhLEVBeUdiLFdBekdhLEVBMEdiLDRCQTFHYSxFQTJHYixNQTNHYSxFQTRHYixTQTVHYSxFQTZHYixRQTdHYSxFQThHYixPQTlHYSxFQStHYixTQS9HYSxFQWdIYixPQWhIYSxFQWlIYixRQWpIYSxFQWtIYixZQWxIYSxFQW1IYixPQW5IYSxFQW9IYixVQXBIYSxFQXFIYix3Q0FySGEsRUFzSGIsb0JBdEhhLEVBdUhiLFFBdkhhLEVBd0hiLFlBeEhhLEVBeUhiLG1DQXpIYSxFQTBIYixRQTFIYSxFQTJIYixTQTNIYSxFQTRIYixTQTVIYSxFQTZIYixTQTdIYSxFQThIYix3QkE5SGEsRUErSGIsZUEvSGEsRUFnSWIsV0FoSWEsRUFpSWIsWUFqSWEsRUFrSWIsT0FsSWEsRUFtSWIsNENBbklhLEVBb0liLFlBcElhLEVBcUliLFFBcklhLEVBc0liLFVBdElhLEVBdUliLFVBdklhLEVBd0liLE1BeElhLEVBeUliLE9BeklhLEVBMEliLGtCQTFJYSxFQTJJYixZQTNJYSxFQTRJYixZQTVJYSxFQTZJYixXQTdJYSxFQThJYixTQTlJYSxFQStJYixRQS9JYSxFQWdKYixpQ0FoSmEsRUFpSmIsc0JBakphLEVBa0piLFFBbEphLEVBbUpiLFVBbkphLEVBb0piLFlBcEphLEVBcUpiLFNBckphLEVBc0piLFlBdEphLEVBdUpiLFNBdkphLEVBd0piLFNBeEphLEVBeUpiLE9BekphLEVBMEpiLGFBMUphLEVBMkpiLHNCQTNKYSxFQTRKYixlQTVKYSxFQTZKYixhQTdKYSxFQThKYixXQTlKYSxFQStKYixPQS9KYSxFQWdLYixTQWhLYSxFQWlLYixNQWpLYSxFQWtLYixnQkFsS2EsRUFtS2IsMEJBbkthLEVBb0tiLFFBcEthLEVBcUtiLE1BckthLEVBc0tiLFVBdEthLEVBdUtiLE9BdkthLEVBd0tiLFFBeEthLEVBeUtiLGtCQXpLYSxFQTBLYixVQTFLYSxFQTJLYixNQTNLYSxFQTRLYixhQTVLYSxFQTZLYixVQTdLYSxFQThLYixRQTlLYSxFQStLYixVQS9LYSxFQWdMYixhQWhMYSxFQWlMYixPQWpMYSxFQWtMYixTQWxMYSxFQW1MYixTQW5MYSxFQW9MYixvQkFwTGEsRUFxTGIsUUFyTGEsRUFzTGIsdUJBdExhLEVBdUxiLGFBdkxhLEVBd0xiLGtDQXhMYSxFQXlMYixPQXpMYSxFQTBMYixZQTFMYSxFQTJMYix1QkEzTGEsRUE0TGIsY0E1TGEsRUE2TGIsU0E3TGEsRUE4TGIsWUE5TGEsRUErTGIsY0EvTGEsRUFnTWIsV0FoTWEsRUFpTWIsNEJBak1hLEVBa01iLFVBbE1hLEVBbU1iLGlCQW5NYSxFQW9NYixTQXBNYSxFQXFNYixjQXJNYSxFQXNNYiw4Q0F0TWEsRUF1TWIsT0F2TWEsRUF3TWIsV0F4TWEsRUF5TWIsWUF6TWEsRUEwTWIseUJBMU1hLEVBMk1iLE9BM01hLEVBNE1iLFVBNU1hLEVBNk1iLGdDQTdNYSxFQThNYixXQTlNYSxFQStNYixRQS9NYSxFQWdOYixhQWhOYSxFQWlOYixzQkFqTmEsRUFrTmIsMkJBbE5hLEVBbU5iLFlBbk5hLEVBb05iLDhCQXBOYSxFQXFOYixVQXJOYSxFQXNOYixNQXROYSxFQXVOYixTQXZOYSxFQXdOYixPQXhOYSxFQXlOYixxQkF6TmEsRUEwTmIsU0ExTmEsRUEyTmIsUUEzTmEsRUE0TmIsY0E1TmEsRUE2TmIsMEJBN05hLEVBOE5iLFFBOU5hLEVBK05iLFFBL05hLEVBZ09iLFNBaE9hLEVBaU9iLHNCQWpPYSxFQWtPYixzQ0FsT2EsRUFtT2IsU0FuT2EsRUFvT2IsWUFwT2EsRUFxT2IsU0FyT2EsRUFzT2IsV0F0T2EsRUF1T2IsU0F2T2EsRUF3T2IsMEJBeE9hLEVBeU9iLHVCQXpPYSxFQTBPYiwyQkExT2EsRUEyT2IsZ0JBM09hLEVBNE9iLE9BNU9hLEVBNk9iLFlBN09hLEVBOE9iLFFBOU9hLEVBK09iLFVBL09hLENBQWY7O0FBa1BBLE1BQU1DLG1CQUFtQixHQUFHLE1BQU07QUFBQTs7QUFDaEMsUUFBTTtBQUFBLE9BQUNDLEdBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWdCQyxzREFBUSxFQUE5QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkYsc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCSixzREFBUSxDQUFDLEVBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBZ0JOLHNEQUFRLENBQUMsRUFBRCxDQUE5QjtBQUNBLFFBQU07QUFBQSxPQUFDTyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ1Isc0RBQVEsQ0FBQyxFQUFELENBQTlDO0FBRUEsUUFBTTtBQUFBLE9BQUNTLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCVixzREFBUSxDQUFDO0FBQUVXLFFBQUksRUFBRSxNQUFSO0FBQWdCQyxTQUFLLEVBQUU7QUFBdkIsR0FBRCxDQUExQztBQUVBLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2Q7QUFDQVgsY0FBVSxDQUFDUixRQUFRLENBQUMsQ0FBRCxDQUFULENBQVY7QUFDQVksa0JBQWMsQ0FBQ1osUUFBRCxDQUFkLENBSGMsQ0FLZDtBQUNBO0FBQ0QsR0FQUSxFQU9OLEVBUE0sQ0FBVDs7QUFTQSxRQUFNb0IsT0FBTyxHQUFHLFlBQVk7QUFDMUIsUUFBSTtBQUNGLFVBQUlDLElBQUo7O0FBQ0EsVUFBSUosTUFBTSxDQUFDSyxLQUFQLENBQWFDLEVBQWpCLEVBQXFCO0FBQ25CRixZQUFJLEdBQUcsTUFBTUcsMERBQVcsQ0FBQ0MsY0FBWixDQUEyQlIsTUFBTSxDQUFDSyxLQUFQLENBQWFDLEVBQXhDLENBQWI7QUFDRCxPQUZELE1BRU87QUFDTEYsWUFBSSxHQUFHLE1BQU1HLDBEQUFXLENBQUNDLGNBQVosQ0FDWEMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGdCQUFyQixDQURXLENBQWI7QUFHRDs7QUFDRCxVQUFJTixJQUFJLENBQUNPLEtBQVQsRUFBZ0I7QUFDZCxjQUFNLElBQUlDLEtBQUosQ0FBVVIsSUFBSSxDQUFDTyxLQUFMLENBQVdFLE9BQXJCLENBQU47QUFDRDs7QUFDREMsYUFBTyxDQUFDQyxHQUFSLENBQVlYLElBQVo7QUFDQUssa0JBQVksQ0FBQ08sT0FBYixDQUFxQixnQkFBckIsRUFBdUNaLElBQUksQ0FBQ0UsRUFBNUMsRUFiRSxDQWVGOztBQUNBLFVBQUlGLElBQUksQ0FBQ2EsU0FBVCxFQUFvQjtBQUNsQmpCLGNBQU0sQ0FBQ2tCLElBQVAsQ0FBWSxXQUFaO0FBQ0Q7O0FBQ0RyQixrQkFBWSxDQUFDTyxJQUFELENBQVo7QUFDRCxLQXBCRCxDQW9CRSxPQUFPZSxHQUFQLEVBQVk7QUFDWkMsV0FBSyxDQUFDLFFBQUQsRUFBV0MsVUFBVSxDQUFDUixPQUF0QixDQUFMO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSSxHQUFaO0FBQ0Q7QUFDRixHQXpCRDs7QUEyQkEsUUFBTUcsTUFBTSxHQUFHLE1BQU07QUFDbkJiLGdCQUFZLENBQUNjLFVBQWIsQ0FBd0IsZ0JBQXhCO0FBQ0FkLGdCQUFZLENBQUNjLFVBQWIsQ0FBd0Isc0JBQXhCO0FBQ0F2QixVQUFNLENBQUNrQixJQUFQLENBQVksV0FBWjtBQUNELEdBSkQsQ0EvQ2dDLENBcURoQzs7O0FBQ0EsUUFBTU0sVUFBVSxHQUFHLE1BQU9DLEtBQVAsSUFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsUUFBSTtBQUNGQSxXQUFLLENBQUNDLGNBQU47O0FBRUEsVUFBSUMsV0FBVyxxQkFBUS9CLFNBQVIsQ0FBZjs7QUFDQSxVQUFJWCxHQUFHLElBQUksRUFBWCxFQUFlO0FBQ2IwQyxtQkFBVyxDQUFDMUMsR0FBWixHQUFrQkEsR0FBbEI7QUFDQTBDLG1CQUFXLENBQUN2QyxLQUFaLEdBQW9CQSxLQUFwQjtBQUNBdUMsbUJBQVcsQ0FBQ3JDLE9BQVosR0FBc0JBLE9BQXRCO0FBQ0FxQyxtQkFBVyxDQUFDQyxVQUFaLEdBQXlCcEMsSUFBekI7QUFDQW1DLG1CQUFXLENBQUNWLFNBQVosR0FBd0IsSUFBeEI7QUFFQSxZQUFJWSxXQUFXLEdBQUcsTUFBTXRCLDBEQUFXLENBQUN1QixlQUFaLENBQTRCSCxXQUE1QixDQUF4Qjs7QUFDQSxZQUFJRSxXQUFKLEVBQWlCO0FBQ2ZwQixzQkFBWSxDQUFDTyxPQUFiLENBQXFCLGdCQUFyQixFQUF1Q2EsV0FBVyxDQUFDdkIsRUFBbkQ7QUFDQU4sZ0JBQU0sQ0FBQytCLE1BQVA7QUFDRCxTQUhELE1BR087QUFDTCxnQkFBTSxJQUFJbkIsS0FBSixDQUFVLHdCQUFWLENBQU47QUFDRDtBQUNGLE9BZEQsTUFjTztBQUNMUSxhQUFLLENBQUMsc0NBQUQsQ0FBTDtBQUNELE9BcEJDLENBcUJGOztBQUNELEtBdEJELENBc0JFLE9BQU9ELEdBQVAsRUFBWTtBQUNaTCxhQUFPLENBQUNDLEdBQVIsQ0FBWUksR0FBRyxDQUFDTixPQUFoQjtBQUNBTyxXQUFLLENBQUMsc0JBQUQsRUFBeUJELEdBQUcsQ0FBQ04sT0FBN0IsQ0FBTDtBQUNEO0FBQ0YsR0E5QkQsQ0F0RGdDLENBc0ZoQzs7O0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRW1CLG9GQUFNLENBQUNDLGtCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVELG9GQUFNLENBQUNFLHFCQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQURGLEVBS0d0QyxTQUFTLEdBQ1I7QUFBTSxZQUFRLEVBQUU0QixVQUFoQjtBQUE0QixhQUFTLEVBQUVRLG9GQUFNLENBQUNHLG1CQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsU0FBSyxFQUFFdkMsU0FBUyxDQUFDd0MsV0FGbkI7QUFHRSxZQUFRLE1BSFY7QUFJRSxhQUFTLEVBQUVKLG9GQUFNLENBQUNLLGdCQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLEVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxTQUFLLEVBQUV6QyxTQUFTLENBQUNHLEtBRm5CO0FBR0UsWUFBUSxNQUhWO0FBSUUsYUFBUyxFQUFFaUMsb0ZBQU0sQ0FBQ0ssZ0JBSnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVpGLEVBcUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsWUFBUSxFQUFHWixLQUFELElBQVd2QyxNQUFNLENBQUN1QyxLQUFLLENBQUNhLE1BQU4sQ0FBYUMsS0FBZCxDQUY3QjtBQUdFLFNBQUssRUFBRXRELEdBSFQ7QUFJRSxlQUFXLEVBQUMsS0FKZDtBQUtFLGFBQVMsRUFBRStDLG9GQUFNLENBQUNRLFFBTHBCO0FBTUUsWUFBUSxNQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXJCRixFQWdDRTtBQUNFLFNBQUssRUFBRWxELE9BRFQ7QUFFRSxZQUFRLEVBQUdtQyxLQUFELElBQVdsQyxVQUFVLENBQUNrQyxLQUFLLENBQUNhLE1BQU4sQ0FBYUMsS0FBZCxDQUZqQyxDQUdFO0FBSEY7QUFJRSxZQUFRLE1BSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HN0MsV0FBVyxDQUFDK0MsR0FBWixDQUFnQixDQUFDQyxJQUFELEVBQU9wQyxFQUFQLEtBQ2Y7QUFDRSxPQUFHLEVBQUcsVUFBU0EsRUFBRyxFQURwQjtBQUVFLFNBQUssRUFBRW9DLElBRlQ7QUFHRSxhQUFTLEVBQUVWLG9GQUFNLENBQUNRLFFBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLR0UsSUFMSCxDQURELENBTkgsQ0FoQ0YsRUFpREdwRCxPQUFPLEtBQUssZUFBWixHQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsWUFBUSxFQUFHbUMsS0FBRCxJQUFXcEMsUUFBUSxDQUFDb0MsS0FBSyxDQUFDYSxNQUFOLENBQWFDLEtBQWQsQ0FGL0I7QUFHRSxTQUFLLEVBQUVuRCxLQUhUO0FBSUUsYUFBUyxFQUFFNEMsb0ZBQU0sQ0FBQ1EsUUFKcEI7QUFLRSxlQUFXLEVBQUMsT0FMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERCxHQVVHLElBM0ROLEVBNkRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsWUFBUSxFQUFHZixLQUFELElBQVdoQyxLQUFLLENBQUNnQyxLQUFLLENBQUNhLE1BQU4sQ0FBYUMsS0FBZCxDQUY1QjtBQUdFLFNBQUssRUFBRS9DLElBSFQ7QUFJRSxhQUFTLEVBQUV3QyxvRkFBTSxDQUFDUSxRQUpwQjtBQUtFLGVBQVcsRUFBQyx1QkFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0E3REYsRUF1RUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFFUixvRkFBTSxDQUFDVyxzQkFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixDQXZFRixFQTZFRTtBQUFHLFdBQU8sRUFBRXJCLE1BQVo7QUFBb0IsYUFBUyxFQUFFVSxvRkFBTSxDQUFDWSxnQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdFRixDQURRLEdBa0ZOLElBdkZOLENBREY7QUEyRkQsQ0FsTEQ7O0dBQU01RCxtQjtVQVNXaUIscUQ7OztLQVRYakIsbUI7QUFvTFNBLGtGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZvdGUuZWRiNDBmMGMyNGU5Zjk3NzYyZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB1c2VyU2VydmljZSBmcm9tICcuLy4uL3V0aWxzL3VzZXJTZXJ2aWNlJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Qcm9maWxlQ29tcGxldGUubW9kdWxlLmNzcyc7XHJcblxyXG5sZXQgdGVtcExpc3QgPSBbXHJcbiAgJ1VuaXRlZCBTdGF0ZXMnLFxyXG4gICdVbml0ZWQgS2luZ2RvbScsXHJcbiAgJ05lcGFsJyxcclxuICAnQWZnaGFuaXN0YW4nLFxyXG4gICdBbGJhbmlhJyxcclxuICAnQWxnZXJpYScsXHJcbiAgJ0FtZXJpY2FuIFNhbW9hJyxcclxuICAnQW5kb3JyYScsXHJcbiAgJ0FuZ29sYScsXHJcbiAgJ0FuZ3VpbGxhJyxcclxuICAnQW50YXJjdGljYScsXHJcbiAgJ0FudGlndWEgYW5kIEJhcmJ1ZGEnLFxyXG4gICdBcmdlbnRpbmEnLFxyXG4gICdBcm1lbmlhJyxcclxuICAnQXJ1YmEnLFxyXG4gICdBdXN0cmFsaWEnLFxyXG4gICdBdXN0cmlhJyxcclxuICAnQXplcmJhaWphbicsXHJcbiAgJ0JhaGFtYXMnLFxyXG4gICdCYWhyYWluJyxcclxuICAnQmFuZ2xhZGVzaCcsXHJcbiAgJ0JhcmJhZG9zJyxcclxuICAnQmVsYXJ1cycsXHJcbiAgJ0JlbGdpdW0nLFxyXG4gICdCZWxpemUnLFxyXG4gICdCZW5pbicsXHJcbiAgJ0Jlcm11ZGEnLFxyXG4gICdCaHV0YW4nLFxyXG4gICdCb2xpdmlhJyxcclxuICAnQm9zbmlhIGFuZCBIZXJ6ZWdvd2luYScsXHJcbiAgJ0JvdHN3YW5hJyxcclxuICAnQm91dmV0IElzbGFuZCcsXHJcbiAgJ0JyYXppbCcsXHJcbiAgJ0JyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeScsXHJcbiAgJ0JydW5laSBEYXJ1c3NhbGFtJyxcclxuICAnQnVsZ2FyaWEnLFxyXG4gICdCdXJraW5hIEZhc28nLFxyXG4gICdCdXJ1bmRpJyxcclxuICAnQ2FtYm9kaWEnLFxyXG4gICdDYW1lcm9vbicsXHJcbiAgJ0NhbmFkYScsXHJcbiAgJ0NhcGUgVmVyZGUnLFxyXG4gICdDYXltYW4gSXNsYW5kcycsXHJcbiAgJ0NlbnRyYWwgQWZyaWNhbiBSZXB1YmxpYycsXHJcbiAgJ0NoYWQnLFxyXG4gICdDaGlsZScsXHJcbiAgJ0NoaW5hJyxcclxuICAnQ2hyaXN0bWFzIElzbGFuZCcsXHJcbiAgJ0NvY29zIChLZWVsaW5nKSBJc2xhbmRzJyxcclxuICAnQ29sb21iaWEnLFxyXG4gICdDb21vcm9zJyxcclxuICAnQ29uZ28nLFxyXG4gICdDb25nbywgdGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlJyxcclxuICAnQ29vayBJc2xhbmRzJyxcclxuICAnQ29zdGEgUmljYScsXHJcbiAgXCJDb3RlIGQnSXZvaXJlXCIsXHJcbiAgJ0Nyb2F0aWEgKEhydmF0c2thKScsXHJcbiAgJ0N1YmEnLFxyXG4gICdDeXBydXMnLFxyXG4gICdDemVjaCBSZXB1YmxpYycsXHJcbiAgJ0Rlbm1hcmsnLFxyXG4gICdEamlib3V0aScsXHJcbiAgJ0RvbWluaWNhJyxcclxuICAnRG9taW5pY2FuIFJlcHVibGljJyxcclxuICAnRWFzdCBUaW1vcicsXHJcbiAgJ0VjdWFkb3InLFxyXG4gICdFZ3lwdCcsXHJcbiAgJ0VsIFNhbHZhZG9yJyxcclxuICAnRXF1YXRvcmlhbCBHdWluZWEnLFxyXG4gICdFcml0cmVhJyxcclxuICAnRXN0b25pYScsXHJcbiAgJ0V0aGlvcGlhJyxcclxuICAnRmFsa2xhbmQgSXNsYW5kcyAoTWFsdmluYXMpJyxcclxuICAnRmFyb2UgSXNsYW5kcycsXHJcbiAgJ0ZpamknLFxyXG4gICdGaW5sYW5kJyxcclxuICAnRnJhbmNlJyxcclxuICAnRnJhbmNlIE1ldHJvcG9saXRhbicsXHJcbiAgJ0ZyZW5jaCBHdWlhbmEnLFxyXG4gICdGcmVuY2ggUG9seW5lc2lhJyxcclxuICAnRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzJyxcclxuICAnR2Fib24nLFxyXG4gICdHYW1iaWEnLFxyXG4gICdHZW9yZ2lhJyxcclxuICAnR2VybWFueScsXHJcbiAgJ0doYW5hJyxcclxuICAnR2licmFsdGFyJyxcclxuICAnR3JlZWNlJyxcclxuICAnR3JlZW5sYW5kJyxcclxuICAnR3JlbmFkYScsXHJcbiAgJ0d1YWRlbG91cGUnLFxyXG4gICdHdWFtJyxcclxuICAnR3VhdGVtYWxhJyxcclxuICAnR3VpbmVhJyxcclxuICAnR3VpbmVhLUJpc3NhdScsXHJcbiAgJ0d1eWFuYScsXHJcbiAgJ0hhaXRpJyxcclxuICAnSGVhcmQgYW5kIE1jIERvbmFsZCBJc2xhbmRzJyxcclxuICAnSG9seSBTZWUgKFZhdGljYW4gQ2l0eSBTdGF0ZSknLFxyXG4gICdIb25kdXJhcycsXHJcbiAgJ0hvbmcgS29uZycsXHJcbiAgJ0h1bmdhcnknLFxyXG4gICdJY2VsYW5kJyxcclxuICAnSW5kaWEnLFxyXG4gICdJbmRvbmVzaWEnLFxyXG4gICdJcmFuIChJc2xhbWljIFJlcHVibGljIG9mKScsXHJcbiAgJ0lyYXEnLFxyXG4gICdJcmVsYW5kJyxcclxuICAnSXNyYWVsJyxcclxuICAnSXRhbHknLFxyXG4gICdKYW1haWNhJyxcclxuICAnSmFwYW4nLFxyXG4gICdKb3JkYW4nLFxyXG4gICdLYXpha2hzdGFuJyxcclxuICAnS2VueWEnLFxyXG4gICdLaXJpYmF0aScsXHJcbiAgXCJLb3JlYSwgRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZlwiLFxyXG4gICdLb3JlYSwgUmVwdWJsaWMgb2YnLFxyXG4gICdLdXdhaXQnLFxyXG4gICdLeXJneXpzdGFuJyxcclxuICBcIkxhbywgUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpY1wiLFxyXG4gICdMYXR2aWEnLFxyXG4gICdMZWJhbm9uJyxcclxuICAnTGVzb3RobycsXHJcbiAgJ0xpYmVyaWEnLFxyXG4gICdMaWJ5YW4gQXJhYiBKYW1haGlyaXlhJyxcclxuICAnTGllY2h0ZW5zdGVpbicsXHJcbiAgJ0xpdGh1YW5pYScsXHJcbiAgJ0x1eGVtYm91cmcnLFxyXG4gICdNYWNhdScsXHJcbiAgJ01hY2Vkb25pYSwgVGhlIEZvcm1lciBZdWdvc2xhdiBSZXB1YmxpYyBvZicsXHJcbiAgJ01hZGFnYXNjYXInLFxyXG4gICdNYWxhd2knLFxyXG4gICdNYWxheXNpYScsXHJcbiAgJ01hbGRpdmVzJyxcclxuICAnTWFsaScsXHJcbiAgJ01hbHRhJyxcclxuICAnTWFyc2hhbGwgSXNsYW5kcycsXHJcbiAgJ01hcnRpbmlxdWUnLFxyXG4gICdNYXVyaXRhbmlhJyxcclxuICAnTWF1cml0aXVzJyxcclxuICAnTWF5b3R0ZScsXHJcbiAgJ01leGljbycsXHJcbiAgJ01pY3JvbmVzaWEsIEZlZGVyYXRlZCBTdGF0ZXMgb2YnLFxyXG4gICdNb2xkb3ZhLCBSZXB1YmxpYyBvZicsXHJcbiAgJ01vbmFjbycsXHJcbiAgJ01vbmdvbGlhJyxcclxuICAnTW9udHNlcnJhdCcsXHJcbiAgJ01vcm9jY28nLFxyXG4gICdNb3phbWJpcXVlJyxcclxuICAnTXlhbm1hcicsXHJcbiAgJ05hbWliaWEnLFxyXG4gICdOYXVydScsXHJcbiAgJ05ldGhlcmxhbmRzJyxcclxuICAnTmV0aGVybGFuZHMgQW50aWxsZXMnLFxyXG4gICdOZXcgQ2FsZWRvbmlhJyxcclxuICAnTmV3IFplYWxhbmQnLFxyXG4gICdOaWNhcmFndWEnLFxyXG4gICdOaWdlcicsXHJcbiAgJ05pZ2VyaWEnLFxyXG4gICdOaXVlJyxcclxuICAnTm9yZm9sayBJc2xhbmQnLFxyXG4gICdOb3J0aGVybiBNYXJpYW5hIElzbGFuZHMnLFxyXG4gICdOb3J3YXknLFxyXG4gICdPbWFuJyxcclxuICAnUGFraXN0YW4nLFxyXG4gICdQYWxhdScsXHJcbiAgJ1BhbmFtYScsXHJcbiAgJ1BhcHVhIE5ldyBHdWluZWEnLFxyXG4gICdQYXJhZ3VheScsXHJcbiAgJ1BlcnUnLFxyXG4gICdQaGlsaXBwaW5lcycsXHJcbiAgJ1BpdGNhaXJuJyxcclxuICAnUG9sYW5kJyxcclxuICAnUG9ydHVnYWwnLFxyXG4gICdQdWVydG8gUmljbycsXHJcbiAgJ1FhdGFyJyxcclxuICAnUmV1bmlvbicsXHJcbiAgJ1JvbWFuaWEnLFxyXG4gICdSdXNzaWFuIEZlZGVyYXRpb24nLFxyXG4gICdSd2FuZGEnLFxyXG4gICdTYWludCBLaXR0cyBhbmQgTmV2aXMnLFxyXG4gICdTYWludCBMdWNpYScsXHJcbiAgJ1NhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzJyxcclxuICAnU2Ftb2EnLFxyXG4gICdTYW4gTWFyaW5vJyxcclxuICAnU2FvIFRvbWUgYW5kIFByaW5jaXBlJyxcclxuICAnU2F1ZGkgQXJhYmlhJyxcclxuICAnU2VuZWdhbCcsXHJcbiAgJ1NleWNoZWxsZXMnLFxyXG4gICdTaWVycmEgTGVvbmUnLFxyXG4gICdTaW5nYXBvcmUnLFxyXG4gICdTbG92YWtpYSAoU2xvdmFrIFJlcHVibGljKScsXHJcbiAgJ1Nsb3ZlbmlhJyxcclxuICAnU29sb21vbiBJc2xhbmRzJyxcclxuICAnU29tYWxpYScsXHJcbiAgJ1NvdXRoIEFmcmljYScsXHJcbiAgJ1NvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzJyxcclxuICAnU3BhaW4nLFxyXG4gICdTcmkgTGFua2EnLFxyXG4gICdTdC4gSGVsZW5hJyxcclxuICAnU3QuIFBpZXJyZSBhbmQgTWlxdWVsb24nLFxyXG4gICdTdWRhbicsXHJcbiAgJ1N1cmluYW1lJyxcclxuICAnU3ZhbGJhcmQgYW5kIEphbiBNYXllbiBJc2xhbmRzJyxcclxuICAnU3dhemlsYW5kJyxcclxuICAnU3dlZGVuJyxcclxuICAnU3dpdHplcmxhbmQnLFxyXG4gICdTeXJpYW4gQXJhYiBSZXB1YmxpYycsXHJcbiAgJ1RhaXdhbiwgUHJvdmluY2Ugb2YgQ2hpbmEnLFxyXG4gICdUYWppa2lzdGFuJyxcclxuICAnVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZicsXHJcbiAgJ1RoYWlsYW5kJyxcclxuICAnVG9nbycsXHJcbiAgJ1Rva2VsYXUnLFxyXG4gICdUb25nYScsXHJcbiAgJ1RyaW5pZGFkIGFuZCBUb2JhZ28nLFxyXG4gICdUdW5pc2lhJyxcclxuICAnVHVya2V5JyxcclxuICAnVHVya21lbmlzdGFuJyxcclxuICAnVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzJyxcclxuICAnVHV2YWx1JyxcclxuICAnVWdhbmRhJyxcclxuICAnVWtyYWluZScsXHJcbiAgJ1VuaXRlZCBBcmFiIEVtaXJhdGVzJyxcclxuICAnVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzJyxcclxuICAnVXJ1Z3VheScsXHJcbiAgJ1V6YmVraXN0YW4nLFxyXG4gICdWYW51YXR1JyxcclxuICAnVmVuZXp1ZWxhJyxcclxuICAnVmlldG5hbScsXHJcbiAgJ1ZpcmdpbiBJc2xhbmRzIChCcml0aXNoKScsXHJcbiAgJ1ZpcmdpbiBJc2xhbmRzIChVLlMuKScsXHJcbiAgJ1dhbGxpcyBhbmQgRnV0dW5hIElzbGFuZHMnLFxyXG4gICdXZXN0ZXJuIFNhaGFyYScsXHJcbiAgJ1llbWVuJyxcclxuICAnWXVnb3NsYXZpYScsXHJcbiAgJ1phbWJpYScsXHJcbiAgJ1ppbWJhYndlJyxcclxuXTtcclxuXHJcbmNvbnN0IFByb2ZpbGVDb21wbGV0ZUZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FnZSwgc2V0QWdlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvdW50cnksIHNldENvdW50cnldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpZE5vLCBzZXRJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvdW50cnlMaXN0LCBzZXRDb3VudHJ5TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtzYXZlZFVzZXIsIHNldFNhdmVkVXNlcl0gPSB1c2VTdGF0ZSh7IG5hbWU6ICdBU0RGJywgZW1haWw6ICdNYWthaScgfSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gR2V0IGNvdW50cnkgbGlzdCBmcm9tIHNvbWV3aGVyZVxyXG4gICAgc2V0Q291bnRyeSh0ZW1wTGlzdFswXSk7XHJcbiAgICBzZXRDb3VudHJ5TGlzdCh0ZW1wTGlzdCk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHVzZXIgcHJvZmlsZSBpcyBjb21wbGV0ZWRcclxuICAgIC8vIHNldFVzZXIoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNldFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgdXNlcjtcclxuICAgICAgaWYgKHJvdXRlci5xdWVyeS5pZCkge1xyXG4gICAgICAgIHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRVc2VyRGV0YWlscyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRVc2VyRGV0YWlscyhcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHB5LXZvdGUtdXNlcicpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodXNlci5lcnJvcikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcih1c2VyLmVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXBweS12b3RlLXVzZXInLCB1c2VyLmlkKTtcclxuXHJcbiAgICAgIC8vSWYgZm9ybSBpcyBjb21wbGV0ZVxyXG4gICAgICBpZiAodXNlci5jb21wbGV0ZWQpIHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL292ZXJ2aWV3Jyk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0U2F2ZWRVc2VyKHVzZXIpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGFsZXJ0KCdFcnJvcjonLCBFcnJvckV2ZW50Lm1lc3NhZ2UpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhcHB5LXZvdGUtdXNlcicpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FwcHktdm90ZS11c2VyLXRva2VuJyk7XHJcbiAgICByb3V0ZXIucHVzaCgnL292ZXJ2aWV3Jyk7XHJcbiAgfTtcclxuXHJcbiAgLy8gVGhpcyB3aWxsIHN1Ym1pdCB0aGUgbG9naW4gZm9ybVxyXG4gIGNvbnN0IHN1Ym1pdEZvcm0gPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIC8vZG8gc29tZSBwcm9jZXNzaW5nIGhlcmVcclxuICAgIC8vIFRoaXMgaXMgd2hlcmUgd2UgaW50ZXJhY3Qgd2l0aCB0aGUgYmFja2VuZCB0byBsb2dpblxyXG4gICAgLy8gcmVkaXJlY3RvIHRvIHNvbWUgcGFnZSBpZiByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bFxyXG4gICAgdHJ5IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGxldCB1c2VyRGV0YWlscyA9IHsgLi4uc2F2ZWRVc2VyIH07XHJcbiAgICAgIGlmIChhZ2UgPj0gMTgpIHtcclxuICAgICAgICB1c2VyRGV0YWlscy5hZ2UgPSBhZ2U7XHJcbiAgICAgICAgdXNlckRldGFpbHMuc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB1c2VyRGV0YWlscy5jb3VudHJ5ID0gY291bnRyeTtcclxuICAgICAgICB1c2VyRGV0YWlscy5wZXJzb25hbElEID0gaWRObztcclxuICAgICAgICB1c2VyRGV0YWlscy5jb21wbGV0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgdXBkYXRlZFVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5jb21wbGV0ZVByb2ZpbGUodXNlckRldGFpbHMpO1xyXG4gICAgICAgIGlmICh1cGRhdGVkVXNlcikge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcHktdm90ZS11c2VyJywgdXBkYXRlZFVzZXIuaWQpO1xyXG4gICAgICAgICAgcm91dGVyLnJlbG9hZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCB1cGRhdGUgZXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ1lvdSBzaG91bGQgYmUgZ3JlYXRlciBvciBlcXVhbCB0byAxOCcpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vVXNlciBoYXMgYmVlbiBzYXZlZCBoZXJlLi4uXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gICAgICBhbGVydCgnU29tZXRoaW5nIGlzIHdyb25nOiAnLCBlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy9KU1ggPT4gSmF2YVNjcmlwdCBTeW50YXhcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlQ29tcGxldGVEaXZ9PlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlQ29tcGxldGVIZWFkZXJ9PlxyXG4gICAgICAgIENvbXBsZXRlIHByb2ZpbGUgYmVmb3JlIHZvdGluZ1xyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICB7c2F2ZWRVc2VyID8gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRGb3JtfSBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlQ29tcGxldGVGb3JtfT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2F2ZWRVc2VyLmRpc3BsYXlOYW1lfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0RGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiBmb3IgZW1haWwgKi99XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NhdmVkVXNlci5lbWFpbH1cclxuICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0RGlzYWJsZWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRBZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICB2YWx1ZT17YWdlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWdlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZW9JbnB1dH1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICB2YWx1ZT17Y291bnRyeX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0Q291bnRyeShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvLyBjbGFzc05hbWU9e3N0eWxlcy5uZW9JbnB1dH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NvdW50cnlMaXN0Lm1hcCgoZWxlbSwgaWQpID0+IChcclxuICAgICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgICBrZXk9e2BDb3VudHJ5JHtpZH1gfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VsZW19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZW9JbnB1dH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZWxlbX1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICB7Y291bnRyeSA9PT0gJ1VuaXRlZCBTdGF0ZXMnID8gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0U3RhdGUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5lb0lucHV0fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGF0ZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0SWQoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICB2YWx1ZT17aWROb31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZW9JbnB1dH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hdGlvbmFsIGlkKG9wdGlvbmFsKVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlTmVvU3VibWl0QnV0dG9ufT5cclxuICAgICAgICAgICAgICBDb21wbGV0ZSBNeSBQcm9maWxlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGEgb25DbGljaz17bG9nb3V0fSBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlTG9nb3V0QnRufT5cclxuICAgICAgICAgICAgTG9nT3V0XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlQ29tcGxldGVGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9