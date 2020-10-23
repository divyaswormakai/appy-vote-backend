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
    // If user is not logged in show login form
    console.log(router.query.id);

    if (router.query.id !== undefined) {
      let id = router.query.id;
      let token = router.query.token;
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
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.mainContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.circle1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.circle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDiv,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDivInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Place a vote", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }), "if you haven't yet!"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "Check out BattleGround where we you can be updated with the latest and biggest news on the elections"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }), __jsx("a", {
    href: "/battleground",
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDivInfoVoteBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, "To BattleGround")), __jsx("div", {
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDivForms,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDivFormsContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, showLogin ? __jsx(_components_LoginForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 28
    }
  }) : null, showCompleteForm ? __jsx(_components_ProfileComplete__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 35
    }
  }) : null, showVoteForm ? __jsx(_components_VoteForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 31
    }
  }) : null, showLogoutForm ? __jsx(_components_Logout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 33
    }
  }) : null))), __jsx("div", {
    className: "jsx-3587207939",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3587207939",
    __self: undefined
  }, "body{margin:0px;padding:0px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI', 'Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans', 'Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}label{font-size:15px;font-weight:500;}#__next-prerender-indicator{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXHZvdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0ZhLEFBRzRCLEFBU0ksQUFJRixXQVpELEVBYWQsRUFKa0IsUUFONEIsUUFPOUMsOElBTnFDLG1DQUNELGtDQUNwQyIsImZpbGUiOiJEOlxcTmV4dFxcbmV4dGpzLWJsb2dcXHBhZ2VzXFx2b3RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkZvcm0nO1xyXG5pbXBvcnQgVm90ZUZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Wb3RlRm9ybSc7XHJcbmltcG9ydCBQcm9maWxlQ29tcGxldGVGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZmlsZUNvbXBsZXRlJztcclxuaW1wb3J0IExvZ091dEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dvdXQnO1xyXG5pbXBvcnQgdXNlclNlcnZpY2UgZnJvbSAnLi4vdXRpbHMvdXNlclNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLy4uL3N0eWxlcy9wYWdlcy92b3RlLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgbWFpblN0eWxlIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5cclxuY29uc3QgVm90ZSA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd0xvZ2luLCBzZXRTaG93TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93Q29tcGxldGVGb3JtLCBzZXRTaG93Q29tcGxldGVGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1ZvdGVGb3JtLCBzZXRTaG93Vm90ZUZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93TG9nb3V0Rm9ybSwgc2V0U2hvd0xvZ291dEZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIElmIHVzZXIgaXMgbm90IGxvZ2dlZCBpbiBzaG93IGxvZ2luIGZvcm1cclxuICAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5LmlkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgbGV0IGlkID0gcm91dGVyLnF1ZXJ5LmlkO1xyXG4gICAgICBsZXQgdG9rZW4gPSByb3V0ZXIucXVlcnkudG9rZW47XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcHB5LXZvdGUtdXNlcicsIGlkKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcHktdm90ZS11c2VyLXRva2VuJywgdG9rZW4pO1xyXG4gICAgICBDaGVja1VzZXJTdGF0dXMoaWQpO1xyXG4gICAgfSBlbHNlIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBweS12b3RlLXVzZXInKSkge1xyXG4gICAgICBsZXQgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHB5LXZvdGUtdXNlcicpO1xyXG4gICAgICBDaGVja1VzZXJTdGF0dXModXNlcik7XHJcbiAgICB9XHJcbiAgICAvL0lmIHVzZXIgaXMgbm90IGxvZ2dlZCBpblxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHNldFNob3dMb2dpbih0cnVlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IENoZWNrVXNlclN0YXR1cyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1doYXQgdGhlIGZ1Y2sgaXMgdGhpcz8nKTtcclxuICAgIGxldCB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UuZ2V0VXNlckRldGFpbHMoaWQpO1xyXG4gICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICBpZiAoIXVzZXIuY29tcGxldGVkKSB7XHJcbiAgICAgIHNldFNob3dDb21wbGV0ZUZvcm0odHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKCF1c2VyLnZvdGVTdGF0dXMpIHtcclxuICAgICAgc2V0U2hvd1ZvdGVGb3JtKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2hvd0xvZ291dEZvcm0odHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy9KU1ggPT4gSmF2YVNjcmlwdCBTeW50YXhcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5BcHB9PlxyXG4gICAgICA8U2lkZWJhciAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5tYWluQ29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5jaXJjbGUxfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLmNpcmNsZTJ9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudm90ZURpdn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvdGVEaXZJbmZvfT5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgIFBsYWNlIGEgdm90ZVxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIGlmIHlvdSBoYXZlbid0IHlldCFcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgQ2hlY2sgb3V0IEJhdHRsZUdyb3VuZCB3aGVyZSB3ZSB5b3UgY2FuIGJlIHVwZGF0ZWQgd2l0aCB0aGUgbGF0ZXN0XHJcbiAgICAgICAgICAgICAgYW5kIGJpZ2dlc3QgbmV3cyBvbiB0aGUgZWxlY3Rpb25zXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvYmF0dGxlZ3JvdW5kXCIgY2xhc3NOYW1lPXtzdHlsZXMudm90ZURpdkluZm9Wb3RlQnRufT5cclxuICAgICAgICAgICAgICBUbyBCYXR0bGVHcm91bmRcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvdGVEaXZGb3Jtc30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudm90ZURpdkZvcm1zQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICB7c2hvd0xvZ2luID8gPExvZ2luRm9ybSAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAge3Nob3dDb21wbGV0ZUZvcm0gPyA8UHJvZmlsZUNvbXBsZXRlRm9ybSAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAge3Nob3dWb3RlRm9ybSA/IDxWb3RlRm9ybSAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAge3Nob3dMb2dvdXRGb3JtID8gPExvZ091dEZvcm0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJyxcclxuICAgICAgICAgICAgICAgICAgJ1JvYm90bycsICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLFxyXG4gICAgICAgICAgICAgICAgICAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNfX25leHQtcHJlcmVuZGVyLWluZGljYXRvciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZvdGU7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Next\\\\nextjs-blog\\\\pages\\\\vote.js */"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdm90ZS5qcyJdLCJuYW1lcyI6WyJWb3RlIiwic2hvd0xvZ2luIiwic2V0U2hvd0xvZ2luIiwidXNlU3RhdGUiLCJzaG93Q29tcGxldGVGb3JtIiwic2V0U2hvd0NvbXBsZXRlRm9ybSIsInNob3dWb3RlRm9ybSIsInNldFNob3dWb3RlRm9ybSIsInNob3dMb2dvdXRGb3JtIiwic2V0U2hvd0xvZ291dEZvcm0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJpZCIsInVuZGVmaW5lZCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkNoZWNrVXNlclN0YXR1cyIsImdldEl0ZW0iLCJ1c2VyIiwidXNlclNlcnZpY2UiLCJnZXRVc2VyRGV0YWlscyIsImNvbXBsZXRlZCIsInZvdGVTdGF0dXMiLCJtYWluU3R5bGUiLCJBcHAiLCJtYWluQ29udGVudCIsImNpcmNsZTEiLCJjaXJjbGUyIiwic3R5bGVzIiwidm90ZURpdiIsInZvdGVEaXZJbmZvIiwidm90ZURpdkluZm9Wb3RlQnRuIiwidm90ZURpdkZvcm1zIiwidm90ZURpdkZvcm1zQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBQUE7O0FBQ2pCLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBQyxLQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLGdCQUFEO0FBQUEsT0FBbUJDO0FBQW5CLE1BQTBDRixzREFBUSxDQUFDLEtBQUQsQ0FBeEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0csWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NKLHNEQUFRLENBQUMs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QUFBQSxJQVZGLEVBV0U7QUFBRyxRQUFJLEVBQUMsZUFBUjtBQUF3QixhQUFTLEVBQUVGLG9FQUFNLENBQUNHLGtCQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVhGLENBREYsRUFnQkU7QUFBSyxhQUFTLEVBQUVILG9FQUFNLENBQUNJLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUosb0VBQU0sQ0FBQ0sscUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3JDLFNBQVMsR0FBRyxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSCxHQUFtQixJQUQvQixFQUVHRyxnQkFBZ0IsR0FBRyxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSCxHQUE2QixJQUZoRCxFQUdHRSxZQUFZLEdBQUcsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FBa0IsSUFIakMsRUFJR0UsY0FBYyxHQUFHLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFILEdBQW9CLElBSnJDLENBREYsQ0FoQkYsQ0FIRixFQTRCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsczhMQTVCRixDQUhGLENBREY7QUF5REQsQ0FsR0Q7O0dBQU1SLEk7VUFNV1cscUQ7OztLQU5YWCxJO0FBb0dTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92b3RlLmJkZmE3MTcwNzYyMWUzNzMyZTExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luRm9ybSc7XHJcbmltcG9ydCBWb3RlRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1ZvdGVGb3JtJztcclxuaW1wb3J0IFByb2ZpbGVDb21wbGV0ZUZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9maWxlQ29tcGxldGUnO1xyXG5pbXBvcnQgTG9nT3V0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ291dCc7XHJcbmltcG9ydCB1c2VyU2VydmljZSBmcm9tICcuLi91dGlscy91c2VyU2VydmljZSc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vc3R5bGVzL3BhZ2VzL3ZvdGUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBtYWluU3R5bGUgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcic7XHJcblxyXG5jb25zdCBWb3RlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaG93TG9naW4sIHNldFNob3dMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dDb21wbGV0ZUZvcm0sIHNldFNob3dDb21wbGV0ZUZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93Vm90ZUZvcm0sIHNldFNob3dWb3RlRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dMb2dvdXRGb3JtLCBzZXRTaG93TG9nb3V0Rm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gSWYgdXNlciBpcyBub3QgbG9nZ2VkIGluIHNob3cgbG9naW4gZm9ybVxyXG4gICAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5LmlkKTtcclxuICAgIGlmIChyb3V0ZXIucXVlcnkuaWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBsZXQgaWQgPSByb3V0ZXIucXVlcnkuaWQ7XHJcbiAgICAgIGxldCB0b2tlbiA9IHJvdXRlci5xdWVyeS50b2tlbjtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcHktdm90ZS11c2VyJywgaWQpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXBweS12b3RlLXVzZXItdG9rZW4nLCB0b2tlbik7XHJcbiAgICAgIENoZWNrVXNlclN0YXR1cyhpZCk7XHJcbiAgICB9IGVsc2UgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHB5LXZvdGUtdXNlcicpKSB7XHJcbiAgICAgIGxldCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcHktdm90ZS11c2VyJyk7XHJcbiAgICAgIENoZWNrVXNlclN0YXR1cyh1c2VyKTtcclxuICAgIH1cclxuICAgIC8vSWYgdXNlciBpcyBub3QgbG9nZ2VkIGluXHJcbiAgICBlbHNlIHtcclxuICAgICAgc2V0U2hvd0xvZ2luKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgQ2hlY2tVc2VyU3RhdHVzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnV2hhdCB0aGUgZnVjayBpcyB0aGlzPycpO1xyXG4gICAgbGV0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRVc2VyRGV0YWlscyhpZCk7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgIGlmICghdXNlci5jb21wbGV0ZWQpIHtcclxuICAgICAgc2V0U2hvd0NvbXBsZXRlRm9ybSh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAoIXVzZXIudm90ZVN0YXR1cykge1xyXG4gICAgICBzZXRTaG93Vm90ZUZvcm0odHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTaG93TG9nb3V0Rm9ybSh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvL0pTWCA9PiBKYXZhU2NyaXB0IFN5bnRheFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLkFwcH0+XHJcbiAgICAgIDxTaWRlYmFyIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLm1haW5Db250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLmNpcmNsZTF9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuY2lyY2xlMn0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudm90ZURpdkluZm99PlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgUGxhY2UgYSB2b3RlXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgaWYgeW91IGhhdmVuJ3QgeWV0IVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBDaGVjayBvdXQgQmF0dGxlR3JvdW5kIHdoZXJlIHdlIHlvdSBjYW4gYmUgdXBkYXRlZCB3aXRoIHRoZSBsYXRlc3RcclxuICAgICAgICAgICAgICBhbmQgYmlnZ2VzdCBuZXdzIG9uIHRoZSBlbGVjdGlvbnNcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9iYXR0bGVncm91bmRcIiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2SW5mb1ZvdGVCdG59PlxyXG4gICAgICAgICAgICAgIFRvIEJhdHRsZUdyb3VuZFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudm90ZURpdkZvcm1zfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2Rm9ybXNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIHtzaG93TG9naW4gPyA8TG9naW5Gb3JtIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICB7c2hvd0NvbXBsZXRlRm9ybSA/IDxQcm9maWxlQ29tcGxldGVGb3JtIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICB7c2hvd1ZvdGVGb3JtID8gPFZvdGVGb3JtIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICB7c2hvd0xvZ291dEZvcm0gPyA8TG9nT3V0Rm9ybSAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLFxyXG4gICAgICAgICAgICAgICAgICAnUm9ib3RvJywgJ094eWdlbicsICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsXHJcbiAgICAgICAgICAgICAgICAgICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI19fbmV4dC1wcmVyZW5kZXItaW5kaWNhdG9yIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVm90ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==