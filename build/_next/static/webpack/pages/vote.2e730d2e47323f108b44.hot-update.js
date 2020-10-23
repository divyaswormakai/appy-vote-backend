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
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    formSelection();
  }, [router]);

  const formSelection = () => {
    // If user is not logged in show login form
    console.log(router.query);
    console.log(router.query.id);
    let query = router.query;
    console.log(router.query);
    console.log(router.query.id);

    if (query.id) {
      console.log('Why am I here');
      let id = query.id;
      let token = query.token;
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
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.mainContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.circle1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.circle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDiv,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDivInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "Place a vote", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }), "if you haven't yet!"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, "Check out BattleGround where we you can be updated with the latest and biggest news on the elections"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }), __jsx("a", {
    href: "/battleground",
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDivInfoVoteBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "To BattleGround")), __jsx("div", {
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDivForms,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDivFormsContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, showLogin ? __jsx(_components_LoginForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 28
    }
  }) : null, showCompleteForm ? __jsx(_components_ProfileComplete__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 35
    }
  }) : null, showVoteForm ? __jsx(_components_VoteForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 31
    }
  }) : null, showLogoutForm ? __jsx(_components_Logout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 33
    }
  }) : null))), __jsx("div", {
    className: "jsx-3587207939",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3587207939",
    __self: undefined
  }, "body{margin:0px;padding:0px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI', 'Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans', 'Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}label{font-size:15px;font-weight:500;}#__next-prerender-indicator{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXHZvdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0dhLEFBRzRCLEFBU0ksQUFJRixXQVpELEVBYWQsRUFKa0IsUUFONEIsUUFPOUMsOElBTnFDLG1DQUNELGtDQUNwQyIsImZpbGUiOiJEOlxcTmV4dFxcbmV4dGpzLWJsb2dcXHBhZ2VzXFx2b3RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkZvcm0nO1xyXG5pbXBvcnQgVm90ZUZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Wb3RlRm9ybSc7XHJcbmltcG9ydCBQcm9maWxlQ29tcGxldGVGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZmlsZUNvbXBsZXRlJztcclxuaW1wb3J0IExvZ091dEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dvdXQnO1xyXG5pbXBvcnQgdXNlclNlcnZpY2UgZnJvbSAnLi4vdXRpbHMvdXNlclNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLy4uL3N0eWxlcy9wYWdlcy92b3RlLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgbWFpblN0eWxlIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5cclxuY29uc3QgVm90ZSA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd0xvZ2luLCBzZXRTaG93TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93Q29tcGxldGVGb3JtLCBzZXRTaG93Q29tcGxldGVGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1ZvdGVGb3JtLCBzZXRTaG93Vm90ZUZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93TG9nb3V0Rm9ybSwgc2V0U2hvd0xvZ291dEZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZvcm1TZWxlY3Rpb24oKTtcclxuICB9LCBbcm91dGVyXSk7XHJcblxyXG4gIGNvbnN0IGZvcm1TZWxlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAvLyBJZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW4gc2hvdyBsb2dpbiBmb3JtXHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpO1xyXG4gICAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgIGxldCBxdWVyeSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeSk7XHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgaWYgKHF1ZXJ5LmlkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdXaHkgYW0gSSBoZXJlJyk7XHJcbiAgICAgIGxldCBpZCA9IHF1ZXJ5LmlkO1xyXG4gICAgICBsZXQgdG9rZW4gPSBxdWVyeS50b2tlbjtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcHktdm90ZS11c2VyJywgaWQpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXBweS12b3RlLXVzZXItdG9rZW4nLCB0b2tlbik7XHJcbiAgICAgIENoZWNrVXNlclN0YXR1cyhpZCk7XHJcbiAgICB9IGVsc2UgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHB5LXZvdGUtdXNlcicpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJIGFtIGhlcmUgdG9vJyk7XHJcbiAgICAgIGxldCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcHktdm90ZS11c2VyJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICBDaGVja1VzZXJTdGF0dXModXNlcik7XHJcbiAgICB9XHJcbiAgICAvL0lmIHVzZXIgaXMgbm90IGxvZ2dlZCBpblxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdPSCB3aGF0IHRoZSBoZWNrJyk7XHJcbiAgICAgIHNldFNob3dMb2dpbih0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBDaGVja1VzZXJTdGF0dXMgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdXaGF0IHRoZSBmdWNrIGlzIHRoaXM/Jyk7XHJcbiAgICBsZXQgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldFVzZXJEZXRhaWxzKGlkKTtcclxuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgaWYgKCF1c2VyLmNvbXBsZXRlZCkge1xyXG4gICAgICBzZXRTaG93Q29tcGxldGVGb3JtKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmICghdXNlci52b3RlU3RhdHVzKSB7XHJcbiAgICAgIHNldFNob3dWb3RlRm9ybSh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNob3dMb2dvdXRGb3JtKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vSlNYID0+IEphdmFTY3JpcHQgU3ludGF4XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuQXBwfT5cclxuICAgICAgPFNpZGViYXIgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUubWFpbkNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuY2lyY2xlMX0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5jaXJjbGUyfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvdGVEaXZ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2SW5mb30+XHJcbiAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICBQbGFjZSBhIHZvdGVcclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICBpZiB5b3UgaGF2ZW4ndCB5ZXQhXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIENoZWNrIG91dCBCYXR0bGVHcm91bmQgd2hlcmUgd2UgeW91IGNhbiBiZSB1cGRhdGVkIHdpdGggdGhlIGxhdGVzdFxyXG4gICAgICAgICAgICAgIGFuZCBiaWdnZXN0IG5ld3Mgb24gdGhlIGVsZWN0aW9uc1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL2JhdHRsZWdyb3VuZFwiIGNsYXNzTmFtZT17c3R5bGVzLnZvdGVEaXZJbmZvVm90ZUJ0bn0+XHJcbiAgICAgICAgICAgICAgVG8gQmF0dGxlR3JvdW5kXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2Rm9ybXN9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvdGVEaXZGb3Jtc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAge3Nob3dMb2dpbiA/IDxMb2dpbkZvcm0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgIHtzaG93Q29tcGxldGVGb3JtID8gPFByb2ZpbGVDb21wbGV0ZUZvcm0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgIHtzaG93Vm90ZUZvcm0gPyA8Vm90ZUZvcm0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgIHtzaG93TG9nb3V0Rm9ybSA/IDxMb2dPdXRGb3JtIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsXHJcbiAgICAgICAgICAgICAgICAgICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJyxcclxuICAgICAgICAgICAgICAgICAgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjX19uZXh0LXByZXJlbmRlci1pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWb3RlO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Next\\\\nextjs-blog\\\\pages\\\\vote.js */"))));
};

_s(Vote, "H1PgpTK3yBUZIoHhMhPhKpc1RQI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdm90ZS5qcyJdLCJuYW1lcyI6WyJWb3RlIiwic2hvd0xvZ2luIiwic2V0U2hvd0xvZ2luIiwidXNlU3RhdGUiLCJzaG93Q29tcGxldGVGb3JtIiwic2V0U2hvd0NvbXBsZXRlRm9ybSIsInNob3dWb3RlRm9ybSIsInNldFNob3dWb3RlRm9ybSIsInNob3dMb2dvdXRGb3JtIiwic2V0U2hvd0xvZ291dEZvcm0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJmb3JtU2VsZWN0aW9uIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiaWQiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJDaGVja1VzZXJTdGF0dXMiLCJnZXRJdGVtIiwidXNlciIsInVzZXJTZXJ2aWNlIiwiZ2V0VXNlckRldGFpbHMiLCJjb21wbGV0ZWQiLCJ2b3RlU3RhdHVzIiwibWFpblN0eWxlIiwiQXBwIiwibWFpbkNvbnRlbnQiLCJjaXJjbGUxIiwiY2lyY2xlMiIsInN0eWxlcyIsInZvdGVEaXYiLCJ2b3RlRGl2SW5mbyIsInZvdGVEaXZJbmZvVm90ZUJ0biIsInZvdGVEaXZGb3JtcyIsInZvdGVEaXZGb3Jtc0NvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsTUFBTTtBQUFBOztBQUNqQixRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsS0FBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDQyxnQkFBRDtBQUFBLE9BQW1CQztBQUFuQixNQUEwQ0Ysc0RBQVEsQ0FBQyxLQUFELENBQXhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDSixzREFBUSxD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SCxHQUFvQixJQUpyQyxDQURGLENBaEJGLENBSEYsRUE0QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDAzTUE1QkYsQ0FIRixDQURGO0FBeURELENBOUdEOztHQUFNUixJO1VBTVdXLHFEOzs7S0FOWFgsSTtBQWdIU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdm90ZS4yZTczMGQyZTQ3MzIzZjEwOGI0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkZvcm0nO1xyXG5pbXBvcnQgVm90ZUZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Wb3RlRm9ybSc7XHJcbmltcG9ydCBQcm9maWxlQ29tcGxldGVGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZmlsZUNvbXBsZXRlJztcclxuaW1wb3J0IExvZ091dEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dvdXQnO1xyXG5pbXBvcnQgdXNlclNlcnZpY2UgZnJvbSAnLi4vdXRpbHMvdXNlclNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLy4uL3N0eWxlcy9wYWdlcy92b3RlLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgbWFpblN0eWxlIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5cclxuY29uc3QgVm90ZSA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd0xvZ2luLCBzZXRTaG93TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93Q29tcGxldGVGb3JtLCBzZXRTaG93Q29tcGxldGVGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1ZvdGVGb3JtLCBzZXRTaG93Vm90ZUZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93TG9nb3V0Rm9ybSwgc2V0U2hvd0xvZ291dEZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZvcm1TZWxlY3Rpb24oKTtcclxuICB9LCBbcm91dGVyXSk7XHJcblxyXG4gIGNvbnN0IGZvcm1TZWxlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAvLyBJZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW4gc2hvdyBsb2dpbiBmb3JtXHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpO1xyXG4gICAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgIGxldCBxdWVyeSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeSk7XHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgaWYgKHF1ZXJ5LmlkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdXaHkgYW0gSSBoZXJlJyk7XHJcbiAgICAgIGxldCBpZCA9IHF1ZXJ5LmlkO1xyXG4gICAgICBsZXQgdG9rZW4gPSBxdWVyeS50b2tlbjtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcHktdm90ZS11c2VyJywgaWQpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXBweS12b3RlLXVzZXItdG9rZW4nLCB0b2tlbik7XHJcbiAgICAgIENoZWNrVXNlclN0YXR1cyhpZCk7XHJcbiAgICB9IGVsc2UgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHB5LXZvdGUtdXNlcicpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJIGFtIGhlcmUgdG9vJyk7XHJcbiAgICAgIGxldCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcHktdm90ZS11c2VyJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICBDaGVja1VzZXJTdGF0dXModXNlcik7XHJcbiAgICB9XHJcbiAgICAvL0lmIHVzZXIgaXMgbm90IGxvZ2dlZCBpblxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdPSCB3aGF0IHRoZSBoZWNrJyk7XHJcbiAgICAgIHNldFNob3dMb2dpbih0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBDaGVja1VzZXJTdGF0dXMgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdXaGF0IHRoZSBmdWNrIGlzIHRoaXM/Jyk7XHJcbiAgICBsZXQgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldFVzZXJEZXRhaWxzKGlkKTtcclxuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgaWYgKCF1c2VyLmNvbXBsZXRlZCkge1xyXG4gICAgICBzZXRTaG93Q29tcGxldGVGb3JtKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmICghdXNlci52b3RlU3RhdHVzKSB7XHJcbiAgICAgIHNldFNob3dWb3RlRm9ybSh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNob3dMb2dvdXRGb3JtKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vSlNYID0+IEphdmFTY3JpcHQgU3ludGF4XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuQXBwfT5cclxuICAgICAgPFNpZGViYXIgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUubWFpbkNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuY2lyY2xlMX0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5jaXJjbGUyfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvdGVEaXZ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2SW5mb30+XHJcbiAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICBQbGFjZSBhIHZvdGVcclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICBpZiB5b3UgaGF2ZW4ndCB5ZXQhXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIENoZWNrIG91dCBCYXR0bGVHcm91bmQgd2hlcmUgd2UgeW91IGNhbiBiZSB1cGRhdGVkIHdpdGggdGhlIGxhdGVzdFxyXG4gICAgICAgICAgICAgIGFuZCBiaWdnZXN0IG5ld3Mgb24gdGhlIGVsZWN0aW9uc1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL2JhdHRsZWdyb3VuZFwiIGNsYXNzTmFtZT17c3R5bGVzLnZvdGVEaXZJbmZvVm90ZUJ0bn0+XHJcbiAgICAgICAgICAgICAgVG8gQmF0dGxlR3JvdW5kXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2Rm9ybXN9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvdGVEaXZGb3Jtc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAge3Nob3dMb2dpbiA/IDxMb2dpbkZvcm0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgIHtzaG93Q29tcGxldGVGb3JtID8gPFByb2ZpbGVDb21wbGV0ZUZvcm0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgIHtzaG93Vm90ZUZvcm0gPyA8Vm90ZUZvcm0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgIHtzaG93TG9nb3V0Rm9ybSA/IDxMb2dPdXRGb3JtIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsXHJcbiAgICAgICAgICAgICAgICAgICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJyxcclxuICAgICAgICAgICAgICAgICAgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjX19uZXh0LXByZXJlbmRlci1pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWb3RlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9