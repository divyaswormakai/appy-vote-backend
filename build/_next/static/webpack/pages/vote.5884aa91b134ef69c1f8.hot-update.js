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
  }, __jsx("img", {
    src: "/whiteLogo.png",
    height: 75,
    width: 75,
    alt: "Logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }), __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, "Place your prediction", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }), "if you haven't yet!"), __jsx("div", {
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.desktopDesc,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, "Check out BattleGround where you can be updated with latest and biggest news on the elections"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }), __jsx("a", {
    href: "/battleground",
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDivInfoVoteBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, "To BattleGround"))), __jsx("div", {
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
  }, showLogin ? __jsx(_components_LoginForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 28
    }
  }) : null, showCompleteForm ? __jsx(_components_ProfileComplete__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 35
    }
  }) : null, showVoteForm ? __jsx(_components_VoteForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 31
    }
  }) : null, showLogoutForm ? __jsx(_components_Logout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 33
    }
  }) : null, __jsx("div", {
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.creditInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }, "AppyVote, createad as a hobby project by Dipeche. Starring: Project Lead: Dipeche, Dev guru: Divyaswor, UI/UX: Buddhi, DevOps: Ujan"))), __jsx("div", {
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.mobileDesc,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDivInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, "Check out BattleGround where you can be updated with the latest and biggest news on the elections"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }), __jsx("a", {
    href: "/battleground",
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDivInfoVoteBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, "To BattleGround")))), __jsx("div", {
    className: "jsx-3587207939",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3587207939",
    __self: undefined
  }, "body{margin:0px;padding:0px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI', 'Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans', 'Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}label{font-size:15px;font-weight:500;}#__next-prerender-indicator{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXHZvdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0hhLEFBRzRCLEFBU0ksQUFJRixXQVpELEVBYWQsRUFKa0IsUUFONEIsUUFPOUMsOElBTnFDLG1DQUNELGtDQUNwQyIsImZpbGUiOiJEOlxcTmV4dFxcbmV4dGpzLWJsb2dcXHBhZ2VzXFx2b3RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Gb3JtJztcclxuaW1wb3J0IFZvdGVGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvVm90ZUZvcm0nO1xyXG5pbXBvcnQgUHJvZmlsZUNvbXBsZXRlRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1Byb2ZpbGVDb21wbGV0ZSc7XHJcbmltcG9ydCBMb2dPdXRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9nb3V0JztcclxuaW1wb3J0IHVzZXJTZXJ2aWNlIGZyb20gJy4uL3V0aWxzL3VzZXJTZXJ2aWNlJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vc3R5bGVzL3BhZ2VzL3ZvdGUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBtYWluU3R5bGUgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcic7XHJcblxyXG5jb25zdCBWb3RlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaG93TG9naW4sIHNldFNob3dMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dDb21wbGV0ZUZvcm0sIHNldFNob3dDb21wbGV0ZUZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93Vm90ZUZvcm0sIHNldFNob3dWb3RlRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dMb2dvdXRGb3JtLCBzZXRTaG93TG9nb3V0Rm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmb3JtU2VsZWN0aW9uKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmb3JtU2VsZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgLy8gSWYgdXNlciBpcyBub3QgbG9nZ2VkIGluIHNob3cgbG9naW4gZm9ybVxyXG5cclxuICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMKGRvY3VtZW50LmxvY2F0aW9uKS5zZWFyY2hQYXJhbXM7XHJcbiAgICBsZXQgcXVlcnlJRCA9IHBhcmFtcy5nZXQoJ2lkJyk7XHJcbiAgICBjb25zb2xlLmxvZyhxdWVyeUlEKTtcclxuICAgIGlmIChxdWVyeUlEKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdXaHkgYW0gSSBoZXJlJyk7XHJcbiAgICAgIGxldCBpZCA9IHF1ZXJ5SUQ7XHJcbiAgICAgIGxldCB0b2tlbiA9IHBhcmFtcy5nZXQoJ3Rva2VuJyk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcHB5LXZvdGUtdXNlcicsIGlkKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcHktdm90ZS11c2VyLXRva2VuJywgdG9rZW4pO1xyXG4gICAgICBDaGVja1VzZXJTdGF0dXMoaWQpO1xyXG4gICAgfSBlbHNlIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBweS12b3RlLXVzZXInKSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnSSBhbSBoZXJlIHRvbycpO1xyXG4gICAgICBsZXQgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHB5LXZvdGUtdXNlcicpO1xyXG4gICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgQ2hlY2tVc2VyU3RhdHVzKHVzZXIpO1xyXG4gICAgfVxyXG4gICAgLy9JZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW5cclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnT0ggd2hhdCB0aGUgaGVjaycpO1xyXG4gICAgICBzZXRTaG93TG9naW4odHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgQ2hlY2tVc2VyU3RhdHVzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnV2hhdCB0aGUgZnVjayBpcyB0aGlzPycpO1xyXG4gICAgbGV0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRVc2VyRGV0YWlscyhpZCk7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgIGlmICghdXNlci5jb21wbGV0ZWQpIHtcclxuICAgICAgc2V0U2hvd0NvbXBsZXRlRm9ybSh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAoIXVzZXIudm90ZVN0YXR1cykge1xyXG4gICAgICBzZXRTaG93Vm90ZUZvcm0odHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTaG93TG9nb3V0Rm9ybSh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvL0pTWCA9PiBKYXZhU2NyaXB0IFN5bnRheFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLkFwcH0+XHJcbiAgICAgIDxTaWRlYmFyIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLm1haW5Db250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLmNpcmNsZTF9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuY2lyY2xlMn0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudm90ZURpdkluZm99PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi93aGl0ZUxvZ28ucG5nXCIgaGVpZ2h0PXs3NX0gd2lkdGg9ezc1fSBhbHQ9XCJMb2dvXCIgLz5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgIFBsYWNlIHlvdXIgcHJlZGljdGlvblxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIGlmIHlvdSBoYXZlbid0IHlldCFcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNrdG9wRGVzY30+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBDaGVjayBvdXQgQmF0dGxlR3JvdW5kIHdoZXJlIHlvdSBjYW4gYmUgdXBkYXRlZCB3aXRoIGxhdGVzdCBhbmRcclxuICAgICAgICAgICAgICAgIGJpZ2dlc3QgbmV3cyBvbiB0aGUgZWxlY3Rpb25zXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvYmF0dGxlZ3JvdW5kXCIgY2xhc3NOYW1lPXtzdHlsZXMudm90ZURpdkluZm9Wb3RlQnRufT5cclxuICAgICAgICAgICAgICAgIFRvIEJhdHRsZUdyb3VuZFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudm90ZURpdkZvcm1zfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2Rm9ybXNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIHtzaG93TG9naW4gPyA8TG9naW5Gb3JtIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICB7c2hvd0NvbXBsZXRlRm9ybSA/IDxQcm9maWxlQ29tcGxldGVGb3JtIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICB7c2hvd1ZvdGVGb3JtID8gPFZvdGVGb3JtIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICB7c2hvd0xvZ291dEZvcm0gPyA8TG9nT3V0Rm9ybSAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVkaXRJbmZvfT5cclxuICAgICAgICAgICAgICAgIEFwcHlWb3RlLCBjcmVhdGVhZCBhcyBhIGhvYmJ5IHByb2plY3QgYnkgRGlwZWNoZS4gU3RhcnJpbmc6XHJcbiAgICAgICAgICAgICAgICBQcm9qZWN0IExlYWQ6IERpcGVjaGUsIERldiBndXJ1OiBEaXZ5YXN3b3IsIFVJL1VYOiBCdWRkaGksXHJcbiAgICAgICAgICAgICAgICBEZXZPcHM6IFVqYW5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9iaWxlRGVzY30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudm90ZURpdkluZm99PlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgQ2hlY2sgb3V0IEJhdHRsZUdyb3VuZCB3aGVyZSB5b3UgY2FuIGJlIHVwZGF0ZWQgd2l0aCB0aGUgbGF0ZXN0XHJcbiAgICAgICAgICAgICAgICBhbmQgYmlnZ2VzdCBuZXdzIG9uIHRoZSBlbGVjdGlvbnNcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9iYXR0bGVncm91bmRcIiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2SW5mb1ZvdGVCdG59PlxyXG4gICAgICAgICAgICAgICAgVG8gQmF0dGxlR3JvdW5kXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsXHJcbiAgICAgICAgICAgICAgICAgICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJyxcclxuICAgICAgICAgICAgICAgICAgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjX19uZXh0LXByZXJlbmRlci1pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb290ZXIgYmxhY2s9e3RydWV9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZvdGU7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Next\\\\nextjs-blog\\\\pages\\\\vote.js */")), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    black: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdm90ZS5qcyJdLCJuYW1lcyI6WyJWb3RlIiwic2hvd0xvZ2luIiwic2V0U2hvd0xvZ2luIiwidXNlU3RhdGUiLCJzaG93Q29tcGxldGVGb3JtIiwic2V0U2hvd0NvbXBsZXRlRm9ybSIsInNob3dWb3RlRm9ybSIsInNldFNob3dWb3RlRm9ybSIsInNob3dMb2dvdXRGb3JtIiwic2V0U2hvd0xvZ291dEZvcm0iLCJ1c2VFZmZlY3QiLCJmb3JtU2VsZWN0aW9uIiwicGFyYW1zIiwiVVJMIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInNlYXJjaFBhcmFtcyIsInF1ZXJ5SUQiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJDaGVja1VzZXJTdGF0dXMiLCJnZXRJdGVtIiwidXNlciIsInVzZXJTZXJ2aWNlIiwiZ2V0VXNlckRldGFpbHMiLCJjb21wbGV0ZWQiLCJ2b3RlU3RhdHVzIiwibWFpblN0eWxlIiwiQXBwIiwibWFpbkNvbnRlbnQiLCJjaXJjbGUxIiwiY2lyY2xlMiIsInN0eWxlcyIsInZvdGVEaXYiLCJ2b3RlRGl2SW5mbyIsImRlc2t0b3BEZXNjIiwidm90ZURpdkluZm9Wb3RlQnRuIiwidm90ZURpdkZvcm1zIiwidm90ZURpdkZvcm1zQ29udGFpbmVyIiwiY3JlZGl0SW5mbyIsIm1vYmlsZURlc2MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsTUFBTTtBQUFBOztBQUNqQixRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsS0FBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDQyxnQkFBRDtBQUFBLE9BQW1CQztBQUFuQixNQUEwQ0Ys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SUFGaEQsRUFHR0UsWUFBWSxHQUFHLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFILEdBQWtCLElBSGpDLEVBSUdFLGNBQWMsR0FBRyxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSCxHQUFvQixJQUpyQyxFQUtFO0FBQUssYUFBUyxFQUFFNkIsb0VBQU0sQ0FBQ08sVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwySUFMRixDQURGLENBbkJGLEVBZ0NFO0FBQUssYUFBUyxFQUFFUCxvRUFBTSxDQUFDUSxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVSLG9FQUFNLENBQUNFLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlHQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUU7QUFBRyxRQUFJLEVBQUMsZUFBUjtBQUF3QixhQUFTLEVBQUVGLG9FQUFNLENBQUNJLGtCQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5GLENBREYsQ0FoQ0YsQ0FIRixFQWlERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMGhQQWpERixFQXVFRSxNQUFDLDBEQUFEO0FBQVEsU0FBSyxFQUFFLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZFRixDQUhGLENBREY7QUErRUQsQ0FqSUQ7O0dBQU16QyxJOztLQUFBQSxJO0FBbUlTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92b3RlLjU4ODRhYTkxYjEzNGVmNjljMWY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkZvcm0nO1xyXG5pbXBvcnQgVm90ZUZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Wb3RlRm9ybSc7XHJcbmltcG9ydCBQcm9maWxlQ29tcGxldGVGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZmlsZUNvbXBsZXRlJztcclxuaW1wb3J0IExvZ091dEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dvdXQnO1xyXG5pbXBvcnQgdXNlclNlcnZpY2UgZnJvbSAnLi4vdXRpbHMvdXNlclNlcnZpY2UnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi9zdHlsZXMvcGFnZXMvdm90ZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IG1haW5TdHlsZSBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlYmFyJztcclxuXHJcbmNvbnN0IFZvdGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dMb2dpbiwgc2V0U2hvd0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0NvbXBsZXRlRm9ybSwgc2V0U2hvd0NvbXBsZXRlRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dWb3RlRm9ybSwgc2V0U2hvd1ZvdGVGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0xvZ291dEZvcm0sIHNldFNob3dMb2dvdXRGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZvcm1TZWxlY3Rpb24oKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZvcm1TZWxlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAvLyBJZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW4gc2hvdyBsb2dpbiBmb3JtXHJcblxyXG4gICAgbGV0IHBhcmFtcyA9IG5ldyBVUkwoZG9jdW1lbnQubG9jYXRpb24pLnNlYXJjaFBhcmFtcztcclxuICAgIGxldCBxdWVyeUlEID0gcGFyYW1zLmdldCgnaWQnKTtcclxuICAgIGNvbnNvbGUubG9nKHF1ZXJ5SUQpO1xyXG4gICAgaWYgKHF1ZXJ5SUQpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1doeSBhbSBJIGhlcmUnKTtcclxuICAgICAgbGV0IGlkID0gcXVlcnlJRDtcclxuICAgICAgbGV0IHRva2VuID0gcGFyYW1zLmdldCgndG9rZW4nKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcHktdm90ZS11c2VyJywgaWQpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXBweS12b3RlLXVzZXItdG9rZW4nLCB0b2tlbik7XHJcbiAgICAgIENoZWNrVXNlclN0YXR1cyhpZCk7XHJcbiAgICB9IGVsc2UgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHB5LXZvdGUtdXNlcicpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJIGFtIGhlcmUgdG9vJyk7XHJcbiAgICAgIGxldCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcHktdm90ZS11c2VyJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICBDaGVja1VzZXJTdGF0dXModXNlcik7XHJcbiAgICB9XHJcbiAgICAvL0lmIHVzZXIgaXMgbm90IGxvZ2dlZCBpblxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdPSCB3aGF0IHRoZSBoZWNrJyk7XHJcbiAgICAgIHNldFNob3dMb2dpbih0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBDaGVja1VzZXJTdGF0dXMgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdXaGF0IHRoZSBmdWNrIGlzIHRoaXM/Jyk7XHJcbiAgICBsZXQgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldFVzZXJEZXRhaWxzKGlkKTtcclxuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgaWYgKCF1c2VyLmNvbXBsZXRlZCkge1xyXG4gICAgICBzZXRTaG93Q29tcGxldGVGb3JtKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmICghdXNlci52b3RlU3RhdHVzKSB7XHJcbiAgICAgIHNldFNob3dWb3RlRm9ybSh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNob3dMb2dvdXRGb3JtKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vSlNYID0+IEphdmFTY3JpcHQgU3ludGF4XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuQXBwfT5cclxuICAgICAgPFNpZGViYXIgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUubWFpbkNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuY2lyY2xlMX0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5jaXJjbGUyfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvdGVEaXZ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2SW5mb30+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3doaXRlTG9nby5wbmdcIiBoZWlnaHQ9ezc1fSB3aWR0aD17NzV9IGFsdD1cIkxvZ29cIiAvPlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgUGxhY2UgeW91ciBwcmVkaWN0aW9uXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgaWYgeW91IGhhdmVuJ3QgeWV0IVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2t0b3BEZXNjfT5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIENoZWNrIG91dCBCYXR0bGVHcm91bmQgd2hlcmUgeW91IGNhbiBiZSB1cGRhdGVkIHdpdGggbGF0ZXN0IGFuZFxyXG4gICAgICAgICAgICAgICAgYmlnZ2VzdCBuZXdzIG9uIHRoZSBlbGVjdGlvbnNcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9iYXR0bGVncm91bmRcIiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2SW5mb1ZvdGVCdG59PlxyXG4gICAgICAgICAgICAgICAgVG8gQmF0dGxlR3JvdW5kXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2Rm9ybXN9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvdGVEaXZGb3Jtc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAge3Nob3dMb2dpbiA/IDxMb2dpbkZvcm0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgIHtzaG93Q29tcGxldGVGb3JtID8gPFByb2ZpbGVDb21wbGV0ZUZvcm0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgIHtzaG93Vm90ZUZvcm0gPyA8Vm90ZUZvcm0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgIHtzaG93TG9nb3V0Rm9ybSA/IDxMb2dPdXRGb3JtIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWRpdEluZm99PlxyXG4gICAgICAgICAgICAgICAgQXBweVZvdGUsIGNyZWF0ZWFkIGFzIGEgaG9iYnkgcHJvamVjdCBieSBEaXBlY2hlLiBTdGFycmluZzpcclxuICAgICAgICAgICAgICAgIFByb2plY3QgTGVhZDogRGlwZWNoZSwgRGV2IGd1cnU6IERpdnlhc3dvciwgVUkvVVg6IEJ1ZGRoaSxcclxuICAgICAgICAgICAgICAgIERldk9wczogVWphblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGVEZXNjfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2SW5mb30+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBDaGVjayBvdXQgQmF0dGxlR3JvdW5kIHdoZXJlIHlvdSBjYW4gYmUgdXBkYXRlZCB3aXRoIHRoZSBsYXRlc3RcclxuICAgICAgICAgICAgICAgIGFuZCBiaWdnZXN0IG5ld3Mgb24gdGhlIGVsZWN0aW9uc1xyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiL2JhdHRsZWdyb3VuZFwiIGNsYXNzTmFtZT17c3R5bGVzLnZvdGVEaXZJbmZvVm90ZUJ0bn0+XHJcbiAgICAgICAgICAgICAgICBUbyBCYXR0bGVHcm91bmRcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJyxcclxuICAgICAgICAgICAgICAgICAgJ1JvYm90bycsICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLFxyXG4gICAgICAgICAgICAgICAgICAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNfX25leHQtcHJlcmVuZGVyLWluZGljYXRvciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvb3RlciBibGFjaz17dHJ1ZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVm90ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==