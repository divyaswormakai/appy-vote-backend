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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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











const useQuery = () => {
  _s();

  return new URLSearchParams(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])().search);
};

_s(useQuery, "EuD9q2dZ34PfN/QO2OBhBzeMxmY=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"]];
});

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
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.mainContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.circle1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.circle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDiv,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDivInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "Place a vote", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }), "if you haven't yet!"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "Check out BattleGround where we you can be updated with the latest and biggest news on the elections"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }), __jsx("a", {
    href: "/battleground",
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDivInfoVoteBtn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "To BattleGround")), __jsx("div", {
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDivForms,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_pages_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteDivFormsContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, showLogin ? __jsx(_components_LoginForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 28
    }
  }) : null, showCompleteForm ? __jsx(_components_ProfileComplete__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 35
    }
  }) : null, showVoteForm ? __jsx(_components_VoteForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 31
    }
  }) : null, showLogoutForm ? __jsx(_components_Logout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 33
    }
  }) : null))), __jsx("div", {
    className: "jsx-3587207939",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3587207939",
    __self: undefined
  }, "body{margin:0px;padding:0px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI', 'Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans', 'Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}label{font-size:15px;font-weight:500;}#__next-prerender-indicator{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXHZvdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkZhLEFBRzRCLEFBU0ksQUFJRixXQVpELEVBYWQsRUFKa0IsUUFONEIsUUFPOUMsOElBTnFDLG1DQUNELGtDQUNwQyIsImZpbGUiOiJEOlxcTmV4dFxcbmV4dGpzLWJsb2dcXHBhZ2VzXFx2b3RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Gb3JtJztcclxuaW1wb3J0IFZvdGVGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvVm90ZUZvcm0nO1xyXG5pbXBvcnQgUHJvZmlsZUNvbXBsZXRlRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1Byb2ZpbGVDb21wbGV0ZSc7XHJcbmltcG9ydCBMb2dPdXRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9nb3V0JztcclxuaW1wb3J0IHVzZXJTZXJ2aWNlIGZyb20gJy4uL3V0aWxzL3VzZXJTZXJ2aWNlJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi9zdHlsZXMvcGFnZXMvdm90ZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IG1haW5TdHlsZSBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlYmFyJztcclxuXHJcbmNvbnN0IHVzZVF1ZXJ5ID0gKCkgPT4ge1xyXG4gIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHVzZUxvY2F0aW9uKCkuc2VhcmNoKTtcclxufTtcclxuXHJcbmNvbnN0IFZvdGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dMb2dpbiwgc2V0U2hvd0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0NvbXBsZXRlRm9ybSwgc2V0U2hvd0NvbXBsZXRlRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dWb3RlRm9ybSwgc2V0U2hvd1ZvdGVGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0xvZ291dEZvcm0sIHNldFNob3dMb2dvdXRGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgbGV0IHF1ZXJ5ID0gdXNlUXVlcnkoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIElmIHVzZXIgaXMgbm90IGxvZ2dlZCBpbiBzaG93IGxvZ2luIGZvcm1cclxuICAgIGlmIChxdWVyeS5nZXQoJ2lkJykpIHtcclxuICAgICAgbGV0IGlkID0gcXVlcnkuZ2V0KCdpZCcpO1xyXG4gICAgICBsZXQgdG9rZW4gPSBxdWVyeS5nZXQoJ3Rva2VuJyk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcHB5LXZvdGUtdXNlcicsIGlkKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcHktdm90ZS11c2VyLXRva2VuJywgdG9rZW4pO1xyXG4gICAgICBDaGVja1VzZXJTdGF0dXMoaWQpO1xyXG4gICAgfSBlbHNlIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBweS12b3RlLXVzZXInKSkge1xyXG4gICAgICBsZXQgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHB5LXZvdGUtdXNlcicpO1xyXG4gICAgICBDaGVja1VzZXJTdGF0dXModXNlcik7XHJcbiAgICB9XHJcbiAgICAvL0lmIHVzZXIgaXMgbm90IGxvZ2dlZCBpblxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHNldFNob3dMb2dpbih0cnVlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IENoZWNrVXNlclN0YXR1cyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1doYXQgdGhlIGZ1Y2sgaXMgdGhpcz8nKTtcclxuICAgIGxldCB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2UuZ2V0VXNlckRldGFpbHMoaWQpO1xyXG4gICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICBpZiAoIXVzZXIuY29tcGxldGVkKSB7XHJcbiAgICAgIHNldFNob3dDb21wbGV0ZUZvcm0odHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKCF1c2VyLnZvdGVTdGF0dXMpIHtcclxuICAgICAgc2V0U2hvd1ZvdGVGb3JtKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2hvd0xvZ291dEZvcm0odHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy9KU1ggPT4gSmF2YVNjcmlwdCBTeW50YXhcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5BcHB9PlxyXG4gICAgICA8U2lkZWJhciAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5tYWluQ29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5jaXJjbGUxfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLmNpcmNsZTJ9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudm90ZURpdn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvdGVEaXZJbmZvfT5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgIFBsYWNlIGEgdm90ZVxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIGlmIHlvdSBoYXZlbid0IHlldCFcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgQ2hlY2sgb3V0IEJhdHRsZUdyb3VuZCB3aGVyZSB3ZSB5b3UgY2FuIGJlIHVwZGF0ZWQgd2l0aCB0aGUgbGF0ZXN0XHJcbiAgICAgICAgICAgICAgYW5kIGJpZ2dlc3QgbmV3cyBvbiB0aGUgZWxlY3Rpb25zXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvYmF0dGxlZ3JvdW5kXCIgY2xhc3NOYW1lPXtzdHlsZXMudm90ZURpdkluZm9Wb3RlQnRufT5cclxuICAgICAgICAgICAgICBUbyBCYXR0bGVHcm91bmRcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvdGVEaXZGb3Jtc30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudm90ZURpdkZvcm1zQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICB7c2hvd0xvZ2luID8gPExvZ2luRm9ybSAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAge3Nob3dDb21wbGV0ZUZvcm0gPyA8UHJvZmlsZUNvbXBsZXRlRm9ybSAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAge3Nob3dWb3RlRm9ybSA/IDxWb3RlRm9ybSAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAge3Nob3dMb2dvdXRGb3JtID8gPExvZ091dEZvcm0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJyxcclxuICAgICAgICAgICAgICAgICAgJ1JvYm90bycsICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLFxyXG4gICAgICAgICAgICAgICAgICAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNfX25leHQtcHJlcmVuZGVyLWluZGljYXRvciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZvdGU7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Next\\\\nextjs-blog\\\\pages\\\\vote.js */"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdm90ZS5qcyJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsInVzZUxvY2F0aW9uIiwic2VhcmNoIiwiVm90ZSIsInNob3dMb2dpbiIsInNldFNob3dMb2dpbiIsInVzZVN0YXRlIiwic2hvd0NvbXBsZXRlRm9ybSIsInNldFNob3dDb21wbGV0ZUZvcm0iLCJzaG93Vm90ZUZvcm0iLCJzZXRTaG93Vm90ZUZvcm0iLCJzaG93TG9nb3V0Rm9ybSIsInNldFNob3dMb2dvdXRGb3JtIiwicXVlcnkiLCJ1c2VFZmZlY3QiLCJnZXQiLCJpZCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkNoZWNrVXNlclN0YXR1cyIsImdldEl0ZW0iLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInVzZXJTZXJ2aWNlIiwiZ2V0VXNlckRldGFpbHMiLCJjb21wbGV0ZWQiLCJ2b3RlU3RhdHVzIiwibWFpblN0eWxlIiwiQXBwIiwibWFpbkNvbnRlbnQiLCJjaXJjbGUxIiwiY2lyY2xlMiIsInN0eWxlcyIsInZvdGVEaXYiLCJ2b3RlRGl2SW5mbyIsInZvdGVEaXZJbmZvVm90ZUJ0biIsInZvdGVEaXZGb3JtcyIsInZvdGVEaXZGb3Jtc0NvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUFBOztBQUNyQixTQUFPLElBQUlDLGVBQUosQ0FBb0JDLG9FQUFXLEdBQUdDLE1BQWxDLENBQVA7QUFDRCxDQUZEOztHQUFNSCxRO1VBQ3VCRSw0RDs7O0FBRzdCLE1BQU1FLElBQUksR0FBRyxNQUFNO0FBQUE7O0FBQ2pCLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBQyxLQUFE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RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRHQU5GLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBV0U7QUFBRyxRQUFJLEVBQUMsZUFBUjtBQUF3QixhQUFTLEVBQUVGLG9FQUFNLENBQUNHLGtCQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVhGLENBREYsRUFnQkU7QUFBSyxhQUFTLEVBQUVILG9FQUFNLENBQUNJLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUosb0VBQU0sQ0FBQ0sscUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR25DLFNBQVMsR0FBRyxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSCxHQUFtQixJQUQvQixFQUVHRyxnQkFBZ0IsR0FBRyxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSCxHQUE2QixJQUZoRCxFQUdHRSxZQUFZLEdBQUcsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FBa0IsSUFIakMsRUFJR0UsY0FBYyxHQUFHLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFILEdBQW9CLElBSnJDLENBREYsQ0FoQkYsQ0FIRixFQTRCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa2dNQTVCRixDQUhGLENBREY7QUF5REQsQ0FqR0Q7O0lBQU1SLEk7VUFNUUosUTs7O0tBTlJJLEk7QUFtR1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZvdGUuZGQ5ZTNmZmZkMmU3YzhhYjFkYTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luRm9ybSc7XHJcbmltcG9ydCBWb3RlRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1ZvdGVGb3JtJztcclxuaW1wb3J0IFByb2ZpbGVDb21wbGV0ZUZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9maWxlQ29tcGxldGUnO1xyXG5pbXBvcnQgTG9nT3V0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ291dCc7XHJcbmltcG9ydCB1c2VyU2VydmljZSBmcm9tICcuLi91dGlscy91c2VyU2VydmljZSc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vc3R5bGVzL3BhZ2VzL3ZvdGUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBtYWluU3R5bGUgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcic7XHJcblxyXG5jb25zdCB1c2VRdWVyeSA9ICgpID0+IHtcclxuICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyh1c2VMb2NhdGlvbigpLnNlYXJjaCk7XHJcbn07XHJcblxyXG5jb25zdCBWb3RlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaG93TG9naW4sIHNldFNob3dMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dDb21wbGV0ZUZvcm0sIHNldFNob3dDb21wbGV0ZUZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93Vm90ZUZvcm0sIHNldFNob3dWb3RlRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dMb2dvdXRGb3JtLCBzZXRTaG93TG9nb3V0Rm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGxldCBxdWVyeSA9IHVzZVF1ZXJ5KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBJZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW4gc2hvdyBsb2dpbiBmb3JtXHJcbiAgICBpZiAocXVlcnkuZ2V0KCdpZCcpKSB7XHJcbiAgICAgIGxldCBpZCA9IHF1ZXJ5LmdldCgnaWQnKTtcclxuICAgICAgbGV0IHRva2VuID0gcXVlcnkuZ2V0KCd0b2tlbicpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXBweS12b3RlLXVzZXInLCBpZCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcHB5LXZvdGUtdXNlci10b2tlbicsIHRva2VuKTtcclxuICAgICAgQ2hlY2tVc2VyU3RhdHVzKGlkKTtcclxuICAgIH0gZWxzZSBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcHktdm90ZS11c2VyJykpIHtcclxuICAgICAgbGV0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBweS12b3RlLXVzZXInKTtcclxuICAgICAgQ2hlY2tVc2VyU3RhdHVzKHVzZXIpO1xyXG4gICAgfVxyXG4gICAgLy9JZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW5cclxuICAgIGVsc2Uge1xyXG4gICAgICBzZXRTaG93TG9naW4odHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBDaGVja1VzZXJTdGF0dXMgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdXaGF0IHRoZSBmdWNrIGlzIHRoaXM/Jyk7XHJcbiAgICBsZXQgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldFVzZXJEZXRhaWxzKGlkKTtcclxuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgaWYgKCF1c2VyLmNvbXBsZXRlZCkge1xyXG4gICAgICBzZXRTaG93Q29tcGxldGVGb3JtKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmICghdXNlci52b3RlU3RhdHVzKSB7XHJcbiAgICAgIHNldFNob3dWb3RlRm9ybSh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNob3dMb2dvdXRGb3JtKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vSlNYID0+IEphdmFTY3JpcHQgU3ludGF4XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuQXBwfT5cclxuICAgICAgPFNpZGViYXIgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUubWFpbkNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuY2lyY2xlMX0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5jaXJjbGUyfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvdGVEaXZ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2SW5mb30+XHJcbiAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICBQbGFjZSBhIHZvdGVcclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICBpZiB5b3UgaGF2ZW4ndCB5ZXQhXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIENoZWNrIG91dCBCYXR0bGVHcm91bmQgd2hlcmUgd2UgeW91IGNhbiBiZSB1cGRhdGVkIHdpdGggdGhlIGxhdGVzdFxyXG4gICAgICAgICAgICAgIGFuZCBiaWdnZXN0IG5ld3Mgb24gdGhlIGVsZWN0aW9uc1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL2JhdHRsZWdyb3VuZFwiIGNsYXNzTmFtZT17c3R5bGVzLnZvdGVEaXZJbmZvVm90ZUJ0bn0+XHJcbiAgICAgICAgICAgICAgVG8gQmF0dGxlR3JvdW5kXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RlRGl2Rm9ybXN9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvdGVEaXZGb3Jtc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAge3Nob3dMb2dpbiA/IDxMb2dpbkZvcm0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgIHtzaG93Q29tcGxldGVGb3JtID8gPFByb2ZpbGVDb21wbGV0ZUZvcm0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgIHtzaG93Vm90ZUZvcm0gPyA8Vm90ZUZvcm0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgIHtzaG93TG9nb3V0Rm9ybSA/IDxMb2dPdXRGb3JtIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsXHJcbiAgICAgICAgICAgICAgICAgICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJyxcclxuICAgICAgICAgICAgICAgICAgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjX19uZXh0LXByZXJlbmRlci1pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWb3RlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9