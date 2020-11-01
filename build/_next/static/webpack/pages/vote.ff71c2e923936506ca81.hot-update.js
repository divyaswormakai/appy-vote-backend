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
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LoginForm */ "./components/LoginForm.js");
/* harmony import */ var _components_VoteForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/VoteForm */ "./components/VoteForm.js");
/* harmony import */ var _components_ProfileComplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProfileComplete */ "./components/ProfileComplete.js");
/* harmony import */ var _components_Logout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Logout */ "./components/Logout.js");
/* harmony import */ var _utils_userService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/userService */ "./utils/userService.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../styles/pages/vote.module.css */ "./styles/pages/vote.module.css");
/* harmony import */ var _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar.js");
var _jsxFileName = "D:\\Next\\nextjs-blog\\pages\\vote.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











const Vote = () => {
  _s();

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
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    formSelection();
  }, []);

  const formSelection = () => {
    // If user is not logged in show login form
    let params = new URL(document.location).searchParams;
    let queryID = params.get('id');
    console.log(queryID);

    if (queryID) {
      console.log('Why am I here');
      let id = queryID;
      let token = params.get('token');
      localStorage.setItem('appy-vote-user', id);
      localStorage.setItem('appy-vote-user-token', token);
      CheckUserStatus(id);
    } else if (localStorage.getItem('appy-vote-user')) {
      console.log('I am here too');
      let user = localStorage.getItem('appy-vote-user');
      console.log(user);
      CheckUserStatus(user);
    } //If user is not logged in
    else {
        console.log('OH what the heck');
        setShowLogin(true);
      }
  };

  const CheckUserStatus = async id => {
    console.log('What the fuck is this?');
    let user = await _utils_userService__WEBPACK_IMPORTED_MODULE_6__["default"].getUserDetails(id);
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
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.mainContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.circle1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.circle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDiv,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDivInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, "Place a vote", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }), "if you haven't yet!"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "Check out BattleGround where we you can be updated with the latest and biggest news on the elections"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }), __jsx("a", {
    href: "/battleground",
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDivInfoVoteBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "To BattleGround")), __jsx("div", {
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDivForms,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDivFormsContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, showLogin ? __jsx(_components_LoginForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 28
    }
  }) : null, showCompleteForm ? __jsx(_components_ProfileComplete__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 35
    }
  }) : null, showVoteForm ? __jsx(_components_VoteForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 31
    }
  }) : null, showLogoutForm ? __jsx(_components_Logout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 33
    }
  }) : null)), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    black: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-3587207939",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3587207939",
    __self: undefined
  }, "body{margin:0px;padding:0px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI', 'Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans', 'Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}label{font-size:15px;font-weight:500;}#__next-prerender-indicator{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXHZvdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0dhLEFBRzRCLEFBU0ksQUFJRixXQVpELEVBYWQsRUFKa0IsUUFONEIsUUFPOUMsOElBTnFDLG1DQUNELGtDQUNwQyIsImZpbGUiOiJEOlxcTmV4dFxcbmV4dGpzLWJsb2dcXHBhZ2VzXFx2b3RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Gb3JtJztcclxuaW1wb3J0IFZvdGVGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvVm90ZUZvcm0nO1xyXG5pbXBvcnQgUHJvZmlsZUNvbXBsZXRlRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1Byb2ZpbGVDb21wbGV0ZSc7XHJcbmltcG9ydCBMb2dPdXRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9nb3V0JztcclxuaW1wb3J0IHVzZXJTZXJ2aWNlIGZyb20gJy4uL3V0aWxzL3VzZXJTZXJ2aWNlJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vc3R5bGVzL3BhZ2VzL3ZvdGUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBtYWluU3R5bGUgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcic7XHJcblxyXG5jb25zdCBWb3RlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaG93TG9naW4sIHNldFNob3dMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dDb21wbGV0ZUZvcm0sIHNldFNob3dDb21wbGV0ZUZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93Vm90ZUZvcm0sIHNldFNob3dWb3RlRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dMb2dvdXRGb3JtLCBzZXRTaG93TG9nb3V0Rm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmb3JtU2VsZWN0aW9uKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmb3JtU2VsZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgLy8gSWYgdXNlciBpcyBub3QgbG9nZ2VkIGluIHNob3cgbG9naW4gZm9ybVxyXG5cclxuICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMKGRvY3VtZW50LmxvY2F0aW9uKS5zZWFyY2hQYXJhbXM7XHJcbiAgICBsZXQgcXVlcnlJRCA9IHBhcmFtcy5nZXQoJ2lkJyk7XHJcbiAgICBjb25zb2xlLmxvZyhxdWVyeUlEKTtcclxuICAgIGlmIChxdWVyeUlEKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdXaHkgYW0gSSBoZXJlJyk7XHJcbiAgICAgIGxldCBpZCA9IHF1ZXJ5SUQ7XHJcbiAgICAgIGxldCB0b2tlbiA9IHBhcmFtcy5nZXQoJ3Rva2VuJyk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcHB5LXZvdGUtdXNlcicsIGlkKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcHktdm90ZS11c2VyLXRva2VuJywgdG9rZW4pO1xyXG4gICAgICBDaGVja1VzZXJTdGF0dXMoaWQpO1xyXG4gICAgfSBlbHNlIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBweS12b3RlLXVzZXInKSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnSSBhbSBoZXJlIHRvbycpO1xyXG4gICAgICBsZXQgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHB5LXZvdGUtdXNlcicpO1xyXG4gICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgQ2hlY2tVc2VyU3RhdHVzKHVzZXIpO1xyXG4gICAgfVxyXG4gICAgLy9JZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW5cclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnT0ggd2hhdCB0aGUgaGVjaycpO1xyXG4gICAgICBzZXRTaG93TG9naW4odHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgQ2hlY2tVc2VyU3RhdHVzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnV2hhdCB0aGUgZnVjayBpcyB0aGlzPycpO1xyXG4gICAgbGV0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRVc2VyRGV0YWlscyhpZCk7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgIGlmICghdXNlci5jb21wbGV0ZWQpIHtcclxuICAgICAgc2V0U2hvd0NvbXBsZXRlRm9ybSh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAoIXVzZXIudm90ZVN0YXR1cykge1xyXG4gICAgICBzZXRTaG93Vm90ZUZvcm0odHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTaG93TG9nb3V0Rm9ybSh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvL0pTWCA9PiBKYXZhU2NyaXB0IFN5bnRheFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLkFwcH0+XHJcbiAgICAgIDxTaWRlYmFyIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLm1haW5Db250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLmNpcmNsZTF9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuY2lyY2xlMn0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudm90ZURpdkluZm99PlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgUGxhY2UgYSB2b3RlXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgaWYgeW91IGhhdmVuJ3QgeWV0IVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBDaGVjayBvdXQgQmF0dGxlR3JvdW5kIHdoZXJlIHdlIHlvdSBjYW4gYmUgdXBkYXRlZCB3aXRoIHRoZSBsYXRlc3RcclxuICAgICAgICAgICAgICBhbmQgYmlnZ2VzdCBuZXdzIG9uIHRoZSBlbGVjdGlvbnNcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9iYXR0bGVncm91bmRcIiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2SW5mb1ZvdGVCdG59PlxyXG4gICAgICAgICAgICAgIFRvIEJhdHRsZUdyb3VuZFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudm90ZURpdkZvcm1zfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2Rm9ybXNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIHtzaG93TG9naW4gPyA8TG9naW5Gb3JtIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICB7c2hvd0NvbXBsZXRlRm9ybSA/IDxQcm9maWxlQ29tcGxldGVGb3JtIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICB7c2hvd1ZvdGVGb3JtID8gPFZvdGVGb3JtIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICB7c2hvd0xvZ291dEZvcm0gPyA8TG9nT3V0Rm9ybSAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Rm9vdGVyIGJsYWNrPXt0cnVlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJyxcclxuICAgICAgICAgICAgICAgICAgJ1JvYm90bycsICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLFxyXG4gICAgICAgICAgICAgICAgICAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNfX25leHQtcHJlcmVuZGVyLWluZGljYXRvciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZvdGU7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Next\\\\nextjs-blog\\\\pages\\\\vote.js */"))));
};

_s(Vote, "ujCtCyDiCz9sxiXx+/XmJcLxQ4I=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdm90ZS5qcyJdLCJuYW1lcyI6WyJWb3RlIiwic2hvd0xvZ2luIiwic2V0U2hvd0xvZ2luIiwidXNlU3RhdGUiLCJzaG93Q29tcGxldGVGb3JtIiwic2V0U2hvd0NvbXBsZXRlRm9ybSIsInNob3dWb3RlRm9ybSIsInNldFNob3dWb3RlRm9ybSIsInNob3dMb2dvdXRGb3JtIiwic2V0U2hvd0xvZ291dEZvcm0iLCJ1c2VFZmZlY3QiLCJmb3JtU2VsZWN0aW9uIiwicGFyYW1zIiwiVVJMIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInNlYXJjaFBhcmFtcyIsInF1ZXJ5SUQiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJDaGVja1VzZXJTdGF0dXMiLCJnZXRJdGVtIiwidXNlciIsInVzZXJTZXJ2aWNlIiwiZ2V0VXNlckRldGFpbHMiLCJjb21wbGV0ZWQiLCJ2b3RlU3RhdHVzIiwibWFpblN0eWxlIiwiQXBwIiwibWFpbkNvbnRlbnQiLCJjaXJjbGUxIiwiY2lyY2xlMiIsInN0eWxlcyIsInZvdGVEaXYiLCJ2b3RlRGl2SW5mbyIsInZvdGVEaXZJbmZvVm90ZUJ0biIsInZvdGVEaXZGb3JtcyIsInZvdGVEaXZGb3Jtc0NvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBQUE7O0FBQ2pCLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBQyxLQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLGdCQUFEO0FBQUEsT0FBbUJDO0FBQW5CLE1BQTBDRixzREFBUSxDQUFDLEtBQUQsQ0FBeEQ7QUFDQSxRQUFNO0FBQUEsT0FB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RixDQUhGLEVBNkJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzME1BN0JGLENBSEYsQ0FERjtBQTBERCxDQTVHRDs7R0FBTVIsSTs7S0FBQUEsSTtBQThHU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdm90ZS5mZjcxYzJlOTIzOTM2NTA2Y2E4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Gb3JtJztcclxuaW1wb3J0IFZvdGVGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvVm90ZUZvcm0nO1xyXG5pbXBvcnQgUHJvZmlsZUNvbXBsZXRlRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1Byb2ZpbGVDb21wbGV0ZSc7XHJcbmltcG9ydCBMb2dPdXRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9nb3V0JztcclxuaW1wb3J0IHVzZXJTZXJ2aWNlIGZyb20gJy4uL3V0aWxzL3VzZXJTZXJ2aWNlJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vc3R5bGVzL3BhZ2VzL3ZvdGUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBtYWluU3R5bGUgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcic7XHJcblxyXG5jb25zdCBWb3RlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaG93TG9naW4sIHNldFNob3dMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dDb21wbGV0ZUZvcm0sIHNldFNob3dDb21wbGV0ZUZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93Vm90ZUZvcm0sIHNldFNob3dWb3RlRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dMb2dvdXRGb3JtLCBzZXRTaG93TG9nb3V0Rm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmb3JtU2VsZWN0aW9uKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmb3JtU2VsZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgLy8gSWYgdXNlciBpcyBub3QgbG9nZ2VkIGluIHNob3cgbG9naW4gZm9ybVxyXG5cclxuICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMKGRvY3VtZW50LmxvY2F0aW9uKS5zZWFyY2hQYXJhbXM7XHJcbiAgICBsZXQgcXVlcnlJRCA9IHBhcmFtcy5nZXQoJ2lkJyk7XHJcbiAgICBjb25zb2xlLmxvZyhxdWVyeUlEKTtcclxuICAgIGlmIChxdWVyeUlEKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdXaHkgYW0gSSBoZXJlJyk7XHJcbiAgICAgIGxldCBpZCA9IHF1ZXJ5SUQ7XHJcbiAgICAgIGxldCB0b2tlbiA9IHBhcmFtcy5nZXQoJ3Rva2VuJyk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcHB5LXZvdGUtdXNlcicsIGlkKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcHktdm90ZS11c2VyLXRva2VuJywgdG9rZW4pO1xyXG4gICAgICBDaGVja1VzZXJTdGF0dXMoaWQpO1xyXG4gICAgfSBlbHNlIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBweS12b3RlLXVzZXInKSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnSSBhbSBoZXJlIHRvbycpO1xyXG4gICAgICBsZXQgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHB5LXZvdGUtdXNlcicpO1xyXG4gICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgQ2hlY2tVc2VyU3RhdHVzKHVzZXIpO1xyXG4gICAgfVxyXG4gICAgLy9JZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW5cclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnT0ggd2hhdCB0aGUgaGVjaycpO1xyXG4gICAgICBzZXRTaG93TG9naW4odHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgQ2hlY2tVc2VyU3RhdHVzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnV2hhdCB0aGUgZnVjayBpcyB0aGlzPycpO1xyXG4gICAgbGV0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRVc2VyRGV0YWlscyhpZCk7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgIGlmICghdXNlci5jb21wbGV0ZWQpIHtcclxuICAgICAgc2V0U2hvd0NvbXBsZXRlRm9ybSh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAoIXVzZXIudm90ZVN0YXR1cykge1xyXG4gICAgICBzZXRTaG93Vm90ZUZvcm0odHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTaG93TG9nb3V0Rm9ybSh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvL0pTWCA9PiBKYXZhU2NyaXB0IFN5bnRheFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLkFwcH0+XHJcbiAgICAgIDxTaWRlYmFyIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLm1haW5Db250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLmNpcmNsZTF9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuY2lyY2xlMn0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudm90ZURpdkluZm99PlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgUGxhY2UgYSB2b3RlXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgaWYgeW91IGhhdmVuJ3QgeWV0IVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBDaGVjayBvdXQgQmF0dGxlR3JvdW5kIHdoZXJlIHdlIHlvdSBjYW4gYmUgdXBkYXRlZCB3aXRoIHRoZSBsYXRlc3RcclxuICAgICAgICAgICAgICBhbmQgYmlnZ2VzdCBuZXdzIG9uIHRoZSBlbGVjdGlvbnNcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9iYXR0bGVncm91bmRcIiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2SW5mb1ZvdGVCdG59PlxyXG4gICAgICAgICAgICAgIFRvIEJhdHRsZUdyb3VuZFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudm90ZURpdkZvcm1zfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2Rm9ybXNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIHtzaG93TG9naW4gPyA8TG9naW5Gb3JtIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICB7c2hvd0NvbXBsZXRlRm9ybSA/IDxQcm9maWxlQ29tcGxldGVGb3JtIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICB7c2hvd1ZvdGVGb3JtID8gPFZvdGVGb3JtIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICB7c2hvd0xvZ291dEZvcm0gPyA8TG9nT3V0Rm9ybSAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Rm9vdGVyIGJsYWNrPXt0cnVlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJyxcclxuICAgICAgICAgICAgICAgICAgJ1JvYm90bycsICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLFxyXG4gICAgICAgICAgICAgICAgICAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNfX25leHQtcHJlcmVuZGVyLWluZGljYXRvciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZvdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=