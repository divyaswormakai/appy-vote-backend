webpackHotUpdate_N_E("pages/vote",{

/***/ "./pages/vote.js":
/*!***********************!*\
  !*** ./pages/vote.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LoginForm */ "./components/LoginForm.js");
/* harmony import */ var _components_VoteForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/VoteForm */ "./components/VoteForm.js");
/* harmony import */ var _components_ProfileComplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ProfileComplete */ "./components/ProfileComplete.js");
/* harmony import */ var _components_Logout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Logout */ "./components/Logout.js");
/* harmony import */ var _utils_userService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/userService */ "./utils/userService.js");
/* harmony import */ var _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../styles/pages/vote.module.css */ "./styles/pages/vote.module.css");
/* harmony import */ var _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar.js");
var _s = $RefreshSig$(),
    _jsxFileName = "D:\\Next\\nextjs-blog\\pages\\vote.js",
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // import { useLocation } from 'react-router-dom';











const useQuery = () => {
  _s();

  return new URLSearchParams(useLocation().search);
};

_s(useQuery, "EuD9q2dZ34PfN/QO2OBhBzeMxmY=", true);

const Vote = () => {
  _s2();

  const {
    0: showLogin,
    1: setShowLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: showCompleteForm,
    1: setShowCompleteForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: showVoteForm,
    1: setShowVoteForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: showLogoutForm,
    1: setShowLogoutForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  let query = useQuery();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // If user is not logged in show login form
    if (query.get('id')) {
      let id = query.get('id');
      let token = query.get('token');
      localStorage.setItem('appy-vote-user', id);
      localStorage.setItem('appy-vote-user-token', token);
      CheckUserStatus(id);
    } else if (localStorage.getItem('appy-vote-user')) {
      let user = localStorage.getItem('appy-vote-user');
      CheckUserStatus(user);
    } //If user is not logged in
    else {
        setShowLogin(true);
      }
  }, []);

  const CheckUserStatus = async id => {
    console.log('What the fuck is this?');
    let user = await _utils_userService__WEBPACK_IMPORTED_MODULE_7__["default"].getUserDetails(id);
    console.log(user);

    if (!user.completed) {
      setShowCompleteForm(true);
    } else if (!user.voteStatus) {
      setShowVoteForm(true);
    } else {
      setShowLogoutForm(true);
    }
  }; //JSX => JavaScript Syntax


  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.App,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.mainContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.circle1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.circle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDiv,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDivInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "Place a vote", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }), "if you haven't yet!"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, "Check out BattleGround where we you can be updated with the latest and biggest news on the elections"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }), __jsx("a", {
    href: "/battleground",
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDivInfoVoteBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "To BattleGround")), __jsx("div", {
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDivForms,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDivFormsContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, showLogin ? __jsx(_components_LoginForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 28
    }
  }) : null, showCompleteForm ? __jsx(_components_ProfileComplete__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 35
    }
  }) : null, showVoteForm ? __jsx(_components_VoteForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 31
    }
  }) : null, showLogoutForm ? __jsx(_components_Logout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  }) : null))), __jsx("div", {
    className: "jsx-3587207939",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3587207939",
    __self: undefined
  }, "body{margin:0px;padding:0px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI', 'Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans', 'Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}label{font-size:15px;font-weight:500;}#__next-prerender-indicator{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXHZvdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEZhLEFBRzRCLEFBU0ksQUFJRixXQVpELEVBYWQsRUFKa0IsUUFONEIsUUFPOUMsOElBTnFDLG1DQUNELGtDQUNwQyIsImZpbGUiOiJEOlxcTmV4dFxcbmV4dGpzLWJsb2dcXHBhZ2VzXFx2b3RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkZvcm0nO1xyXG5pbXBvcnQgVm90ZUZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Wb3RlRm9ybSc7XHJcbmltcG9ydCBQcm9maWxlQ29tcGxldGVGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZmlsZUNvbXBsZXRlJztcclxuaW1wb3J0IExvZ091dEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dvdXQnO1xyXG5pbXBvcnQgdXNlclNlcnZpY2UgZnJvbSAnLi4vdXRpbHMvdXNlclNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLy4uL3N0eWxlcy9wYWdlcy92b3RlLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgbWFpblN0eWxlIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5cclxuY29uc3QgdXNlUXVlcnkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXModXNlTG9jYXRpb24oKS5zZWFyY2gpO1xyXG59O1xyXG5cclxuY29uc3QgVm90ZSA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd0xvZ2luLCBzZXRTaG93TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93Q29tcGxldGVGb3JtLCBzZXRTaG93Q29tcGxldGVGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1ZvdGVGb3JtLCBzZXRTaG93Vm90ZUZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93TG9nb3V0Rm9ybSwgc2V0U2hvd0xvZ291dEZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBsZXQgcXVlcnkgPSB1c2VRdWVyeSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gSWYgdXNlciBpcyBub3QgbG9nZ2VkIGluIHNob3cgbG9naW4gZm9ybVxyXG4gICAgaWYgKHF1ZXJ5LmdldCgnaWQnKSkge1xyXG4gICAgICBsZXQgaWQgPSBxdWVyeS5nZXQoJ2lkJyk7XHJcbiAgICAgIGxldCB0b2tlbiA9IHF1ZXJ5LmdldCgndG9rZW4nKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcHktdm90ZS11c2VyJywgaWQpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXBweS12b3RlLXVzZXItdG9rZW4nLCB0b2tlbik7XHJcbiAgICAgIENoZWNrVXNlclN0YXR1cyhpZCk7XHJcbiAgICB9IGVsc2UgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHB5LXZvdGUtdXNlcicpKSB7XHJcbiAgICAgIGxldCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcHktdm90ZS11c2VyJyk7XHJcbiAgICAgIENoZWNrVXNlclN0YXR1cyh1c2VyKTtcclxuICAgIH1cclxuICAgIC8vSWYgdXNlciBpcyBub3QgbG9nZ2VkIGluXHJcbiAgICBlbHNlIHtcclxuICAgICAgc2V0U2hvd0xvZ2luKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgQ2hlY2tVc2VyU3RhdHVzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnV2hhdCB0aGUgZnVjayBpcyB0aGlzPycpO1xyXG4gICAgbGV0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRVc2VyRGV0YWlscyhpZCk7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgIGlmICghdXNlci5jb21wbGV0ZWQpIHtcclxuICAgICAgc2V0U2hvd0NvbXBsZXRlRm9ybSh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAoIXVzZXIudm90ZVN0YXR1cykge1xyXG4gICAgICBzZXRTaG93Vm90ZUZvcm0odHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTaG93TG9nb3V0Rm9ybSh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvL0pTWCA9PiBKYXZhU2NyaXB0IFN5bnRheFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLkFwcH0+XHJcbiAgICAgIDxTaWRlYmFyIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLm1haW5Db250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLmNpcmNsZTF9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuY2lyY2xlMn0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudm90ZURpdkluZm99PlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgUGxhY2UgYSB2b3RlXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgaWYgeW91IGhhdmVuJ3QgeWV0IVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBDaGVjayBvdXQgQmF0dGxlR3JvdW5kIHdoZXJlIHdlIHlvdSBjYW4gYmUgdXBkYXRlZCB3aXRoIHRoZSBsYXRlc3RcclxuICAgICAgICAgICAgICBhbmQgYmlnZ2VzdCBuZXdzIG9uIHRoZSBlbGVjdGlvbnNcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9iYXR0bGVncm91bmRcIiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2SW5mb1ZvdGVCdG59PlxyXG4gICAgICAgICAgICAgIFRvIEJhdHRsZUdyb3VuZFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudm90ZURpdkZvcm1zfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2Rm9ybXNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIHtzaG93TG9naW4gPyA8TG9naW5Gb3JtIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICB7c2hvd0NvbXBsZXRlRm9ybSA/IDxQcm9maWxlQ29tcGxldGVGb3JtIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICB7c2hvd1ZvdGVGb3JtID8gPFZvdGVGb3JtIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICB7c2hvd0xvZ291dEZvcm0gPyA8TG9nT3V0Rm9ybSAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLFxyXG4gICAgICAgICAgICAgICAgICAnUm9ib3RvJywgJ094eWdlbicsICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsXHJcbiAgICAgICAgICAgICAgICAgICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI19fbmV4dC1wcmVyZW5kZXItaW5kaWNhdG9yIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVm90ZTtcclxuIl19 */\n/*@ sourceURL=D:\\\\Next\\\\nextjs-blog\\\\pages\\\\vote.js */"))));
};

_s2(Vote, "TDHL/+NMK5+chEd7a6HhR/Ym4f4=", false, function () {
  return [useQuery];
});

_c = Vote;
/* harmony default export */ __webpack_exports__["default"] = (Vote);

var _c;

$RefreshReg$(_c, "Vote");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdm90ZS5qcyJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsInVzZUxvY2F0aW9uIiwic2VhcmNoIiwiVm90ZSIsInNob3dMb2dpbiIsInNldFNob3dMb2dpbiIsInVzZVN0YXRlIiwic2hvd0NvbXBsZXRlRm9ybSIsInNldFNob3dDb21wbGV0ZUZvcm0iLCJzaG93Vm90ZUZvcm0iLCJzZXRTaG93Vm90ZUZvcm0iLCJzaG93TG9nb3V0Rm9ybSIsInNldFNob3dMb2dvdXRGb3JtIiwicXVlcnkiLCJ1c2VFZmZlY3QiLCJnZXQiLCJpZCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkNoZWNrVXNlclN0YXR1cyIsImdldEl0ZW0iLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInVzZXJTZXJ2aWNlIiwiZ2V0VXNlckRldGFpbHMiLCJjb21wbGV0ZWQiLCJ2b3RlU3RhdHVzIiwibWFpblN0eWxlIiwiQXBwIiwibWFpbkNvbnRlbnQiLCJjaXJjbGUxIiwiY2lyY2xlMiIsInN0eWxlcyIsInZvdGVEaXYiLCJ2b3RlRGl2SW5mbyIsInZvdGVEaXZJbmZvVm90ZUJ0biIsInZvdGVEaXZGb3JtcyIsInZvdGVEaXZGb3Jtc0NvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxNQUFNO0FBQUE7O0FBQ3JCLFNBQU8sSUFBSUMsZUFBSixDQUFvQkMsV0FBVyxHQUFHQyxNQUFsQyxDQUFQO0FBQ0QsQ0FGRDs7R0FBTUgsUTs7QUFJTixNQUFNSSxJQUFJLEdBQUcsTUFBTTtBQUFBOztBQUNqQixRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsS0FBRCxDQUExQztBQUNB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0R0FORixFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQVdFO0FBQUcsUUFBSSxFQUFDLGVBQVI7QUFBd0IsYUFBUyxFQUFFRixvRUFBTSxDQUFDRyxrQkFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYRixDQURGLEVBZ0JFO0FBQUssYUFBUyxFQUFFSCxvRUFBTSxDQUFDSSxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVKLG9FQUFNLENBQUNLLHFCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0duQyxTQUFTLEdBQUcsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FBbUIsSUFEL0IsRUFFR0csZ0JBQWdCLEdBQUcsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FBNkIsSUFGaEQsRUFHR0UsWUFBWSxHQUFHLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFILEdBQWtCLElBSGpDLEVBSUdFLGNBQWMsR0FBRyxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSCxHQUFvQixJQUpyQyxDQURGLENBaEJGLENBSEYsRUE0QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhqTUE1QkYsQ0FIRixDQURGO0FBeURELENBakdEOztJQUFNUixJO1VBTVFKLFE7OztLQU5SSSxJO0FBbUdTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92b3RlLjM0MGViNTUzMjgwZDlmODI4NGJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luRm9ybSc7XHJcbmltcG9ydCBWb3RlRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1ZvdGVGb3JtJztcclxuaW1wb3J0IFByb2ZpbGVDb21wbGV0ZUZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9maWxlQ29tcGxldGUnO1xyXG5pbXBvcnQgTG9nT3V0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ291dCc7XHJcbmltcG9ydCB1c2VyU2VydmljZSBmcm9tICcuLi91dGlscy91c2VyU2VydmljZSc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vc3R5bGVzL3BhZ2VzL3ZvdGUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBtYWluU3R5bGUgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcic7XHJcblxyXG5jb25zdCB1c2VRdWVyeSA9ICgpID0+IHtcclxuICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyh1c2VMb2NhdGlvbigpLnNlYXJjaCk7XHJcbn07XHJcblxyXG5jb25zdCBWb3RlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaG93TG9naW4sIHNldFNob3dMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dDb21wbGV0ZUZvcm0sIHNldFNob3dDb21wbGV0ZUZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93Vm90ZUZvcm0sIHNldFNob3dWb3RlRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dMb2dvdXRGb3JtLCBzZXRTaG93TG9nb3V0Rm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGxldCBxdWVyeSA9IHVzZVF1ZXJ5KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBJZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW4gc2hvdyBsb2dpbiBmb3JtXHJcbiAgICBpZiAocXVlcnkuZ2V0KCdpZCcpKSB7XHJcbiAgICAgIGxldCBpZCA9IHF1ZXJ5LmdldCgnaWQnKTtcclxuICAgICAgbGV0IHRva2VuID0gcXVlcnkuZ2V0KCd0b2tlbicpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXBweS12b3RlLXVzZXInLCBpZCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcHB5LXZvdGUtdXNlci10b2tlbicsIHRva2VuKTtcclxuICAgICAgQ2hlY2tVc2VyU3RhdHVzKGlkKTtcclxuICAgIH0gZWxzZSBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcHktdm90ZS11c2VyJykpIHtcclxuICAgICAgbGV0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBweS12b3RlLXVzZXInKTtcclxuICAgICAgQ2hlY2tVc2VyU3RhdHVzKHVzZXIpO1xyXG4gICAgfVxyXG4gICAgLy9JZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW5cclxuICAgIGVsc2Uge1xyXG4gICAgICBzZXRTaG93TG9naW4odHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBDaGVja1VzZXJTdGF0dXMgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdXaGF0IHRoZSBmdWNrIGlzIHRoaXM/Jyk7XHJcbiAgICBsZXQgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldFVzZXJEZXRhaWxzKGlkKTtcclxuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgaWYgKCF1c2VyLmNvbXBsZXRlZCkge1xyXG4gICAgICBzZXRTaG93Q29tcGxldGVGb3JtKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmICghdXNlci52b3RlU3RhdHVzKSB7XHJcbiAgICAgIHNldFNob3dWb3RlRm9ybSh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNob3dMb2dvdXRGb3JtKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vSlNYID0+IEphdmFTY3JpcHQgU3ludGF4XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuQXBwfT5cclxuICAgICAgPFNpZGViYXIgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUubWFpbkNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuY2lyY2xlMX0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5jaXJjbGUyfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvdGVEaXZ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2SW5mb30+XHJcbiAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICBQbGFjZSBhIHZvdGVcclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICBpZiB5b3UgaGF2ZW4ndCB5ZXQhXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIENoZWNrIG91dCBCYXR0bGVHcm91bmQgd2hlcmUgd2UgeW91IGNhbiBiZSB1cGRhdGVkIHdpdGggdGhlIGxhdGVzdFxyXG4gICAgICAgICAgICAgIGFuZCBiaWdnZXN0IG5ld3Mgb24gdGhlIGVsZWN0aW9uc1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL2JhdHRsZWdyb3VuZFwiIGNsYXNzTmFtZT17c3R5bGVzLnZvdGVEaXZJbmZvVm90ZUJ0bn0+XHJcbiAgICAgICAgICAgICAgVG8gQmF0dGxlR3JvdW5kXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2Rm9ybXN9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvdGVEaXZGb3Jtc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAge3Nob3dMb2dpbiA/IDxMb2dpbkZvcm0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgIHtzaG93Q29tcGxldGVGb3JtID8gPFByb2ZpbGVDb21wbGV0ZUZvcm0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgIHtzaG93Vm90ZUZvcm0gPyA8Vm90ZUZvcm0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgIHtzaG93TG9nb3V0Rm9ybSA/IDxMb2dPdXRGb3JtIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsXHJcbiAgICAgICAgICAgICAgICAgICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJyxcclxuICAgICAgICAgICAgICAgICAgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjX19uZXh0LXByZXJlbmRlci1pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWb3RlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9