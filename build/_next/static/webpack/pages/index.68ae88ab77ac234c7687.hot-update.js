webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/pages/home.module.css */ "./styles/pages/home.module.css");
/* harmony import */ var _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar.js");
/* harmony import */ var _utils_userService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/userService */ "./utils/userService.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/gi */ "./node_modules/react-icons/gi/index.esm.js");
var _jsxFileName = "D:\\Next\\nextjs-blog\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









function Home() {
  _s();

  const {
    0: userCount,
    1: setUserCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: votesCount,
    1: setVotesCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    CheckRedirect();
    GetStats();
  }, []);

  const CheckRedirect = () => {
    let path = window.location.pathname;
    let params = new URL(document.location).searchParams;
    console.log(params.get('id'));

    if (path !== '/') {
      console.log(path);

      if (path.includes('/vote')) {
        console.log('In vote');

        if (params.get('id') && params.get('token')) {
          console.log('We have the parameters');
          localStorage.setItem('appy-vote-user', params.get('id'));
          localStorage.setItem('appy-vote-user-token', params.get('token'));
          router.push('/vote');
        } else {
          router.push('/vote');
        }
      }

      router.push(path);
    }
  };

  const GetStats = async () => {
    try {
      let data = await _utils_userService__WEBPACK_IMPORTED_MODULE_7__["default"].getCounts();
      console.log(data);
      setUserCount(data.userCount);
      setVotesCount(data.voteCount);
    } catch (err) {
      alert(err);
    }
  };

  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "AppyVote"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.App,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.mainContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.circle1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.circle2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.homeDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.homeDivInfo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, "Welcome to AppyVote..."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, "All-in-one platform where you can enter your predictions as to who will win an election, and be updated with latest and biggest news on the elections."), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }), __jsx("a", {
    href: "/vote",
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.homeDivInfoVoteBtn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, __jsx(react_icons_gi__WEBPACK_IMPORTED_MODULE_9__["GiVote"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }), "Vote Now"), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.countDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.countDivCol,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 19
    }
  }, "Total Users:"), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 19
    }
  }, userCount)), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.countDivCol,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 19
    }
  }, "Total Votes:"), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 19
    }
  }, votesCount)))), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.homeDivSvg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/home.png",
    alt: "Homelogo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  })))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-2919720203",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2919720203",
    __self: this
  }, "body{margin:0px;padding:0px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI', 'Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans', 'Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}label{font-size:15px;font-weight:500;}#__next-prerender-indicator{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlHVyxBQUcwQixBQVNJLEFBSUYsV0FaRCxFQWFkLEVBSmtCLFFBTjRCLFFBTzlDLDhJQU5xQyxtQ0FDRCxrQ0FDcEMiLCJmaWxlIjoiRDpcXE5leHRcXG5leHRqcy1ibG9nXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IEhvbWVTdHlsZSBmcm9tICcuLi9zdHlsZXMvcGFnZXMvaG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcic7XG5pbXBvcnQgdXNlclNlcnZpY2UgZnJvbSAnLi4vdXRpbHMvdXNlclNlcnZpY2UnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgeyBHaVZvdGUgfSBmcm9tICdyZWFjdC1pY29ucy9naSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt1c2VyQ291bnQsIHNldFVzZXJDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3ZvdGVzQ291bnQsIHNldFZvdGVzQ291bnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIENoZWNrUmVkaXJlY3QoKTtcbiAgICBHZXRTdGF0cygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgQ2hlY2tSZWRpcmVjdCA9ICgpID0+IHtcbiAgICBsZXQgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICBsZXQgcGFyYW1zID0gbmV3IFVSTChkb2N1bWVudC5sb2NhdGlvbikuc2VhcmNoUGFyYW1zO1xuICAgIGNvbnNvbGUubG9nKHBhcmFtcy5nZXQoJ2lkJykpO1xuICAgIGlmIChwYXRoICE9PSAnLycpIHtcbiAgICAgIGNvbnNvbGUubG9nKHBhdGgpO1xuICAgICAgaWYgKHBhdGguaW5jbHVkZXMoJy92b3RlJykpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0luIHZvdGUnKTtcbiAgICAgICAgaWYgKHBhcmFtcy5nZXQoJ2lkJykgJiYgcGFyYW1zLmdldCgndG9rZW4nKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdXZSBoYXZlIHRoZSBwYXJhbWV0ZXJzJyk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcHktdm90ZS11c2VyJywgcGFyYW1zLmdldCgnaWQnKSk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcHktdm90ZS11c2VyLXRva2VuJywgcGFyYW1zLmdldCgndG9rZW4nKSk7XG4gICAgICAgICAgcm91dGVyLnB1c2goJy92b3RlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm91dGVyLnB1c2goJy92b3RlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJvdXRlci5wdXNoKHBhdGgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBHZXRTdGF0cyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IGRhdGEgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRDb3VudHMoKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgc2V0VXNlckNvdW50KGRhdGEudXNlckNvdW50KTtcbiAgICAgIHNldFZvdGVzQ291bnQoZGF0YS52b3RlQ291bnQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoZXJyKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5BcHB5Vm90ZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BcHB9PlxuICAgICAgICA8U2lkZWJhciAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkNvbnRlbnR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2lyY2xlMX0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaXJjbGUyfT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLmhvbWVEaXZ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5ob21lRGl2SW5mb30+XG4gICAgICAgICAgICAgIDxoMT5XZWxjb21lIHRvIEFwcHlWb3RlLi4uPC9oMT5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgQWxsLWluLW9uZSBwbGF0Zm9ybSB3aGVyZSB5b3UgY2FuIGVudGVyIHlvdXIgcHJlZGljdGlvbnMgYXMgdG9cbiAgICAgICAgICAgICAgICB3aG8gd2lsbCB3aW4gYW4gZWxlY3Rpb24sIGFuZCBiZSB1cGRhdGVkIHdpdGggbGF0ZXN0IGFuZCBiaWdnZXN0XG4gICAgICAgICAgICAgICAgbmV3cyBvbiB0aGUgZWxlY3Rpb25zLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL3ZvdGVcIiBjbGFzc05hbWU9e0hvbWVTdHlsZS5ob21lRGl2SW5mb1ZvdGVCdG59PlxuICAgICAgICAgICAgICAgIDxHaVZvdGUgLz5cbiAgICAgICAgICAgICAgICBWb3RlIE5vd1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuY291bnREaXZ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuY291bnREaXZDb2x9PlxuICAgICAgICAgICAgICAgICAgPHA+VG90YWwgVXNlcnM6PC9wPlxuICAgICAgICAgICAgICAgICAgPGgxPnt1c2VyQ291bnR9PC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLmNvdW50RGl2Q29sfT5cbiAgICAgICAgICAgICAgICAgIDxwPlRvdGFsIFZvdGVzOjwvcD5cbiAgICAgICAgICAgICAgICAgIDxoMT57dm90ZXNDb3VudH08L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5ob21lRGl2U3ZnfT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaG9tZS5wbmdcIiBhbHQ9XCJIb21lbG9nb1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsXG4gICAgICAgICAgICAgICAgJ1JvYm90bycsICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLFxuICAgICAgICAgICAgICAgICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNfX25leHQtcHJlcmVuZGVyLWluZGljYXRvciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=D:\\\\Next\\\\nextjs-blog\\\\pages\\\\index.js */")));
}

_s(Home, "ECRkmMQNgDAF1mkq9IaCx6Q5Ezs=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZXJDb3VudCIsInNldFVzZXJDb3VudCIsInVzZVN0YXRlIiwidm90ZXNDb3VudCIsInNldFZvdGVzQ291bnQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJDaGVja1JlZGlyZWN0IiwiR2V0U3RhdHMiLCJwYXRoIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInBhcmFtcyIsIlVSTCIsImRvY3VtZW50Iiwic2VhcmNoUGFyYW1zIiwiY29uc29sZSIsImxvZyIsImdldCIsImluY2x1ZGVzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInB1c2giLCJkYXRhIiwidXNlclNlcnZpY2UiLCJnZXRDb3VudHMiLCJ2b3RlQ291bnQiLCJlcnIiLCJhbGVydCIsInN0eWxlcyIsImNvbnRhaW5lciIsIkFwcCIsIm1haW5Db250ZW50IiwiY2lyY2xlMSIsImNpcmNsZTIiLCJIb21lU3R5bGUiLCJob21lRGl2IiwiaG9tZURpdkluZm8iLCJob21lRGl2SW5mb1ZvdGVCdG4iLCJjb3VudERpdiIsImNvdW50RGl2Q29sIiwiaG9tZURpdlN2ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUM3QixRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsQ0FBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkYsc0RBQVEsQ0FBQyxDQUFELENBQTVDO0FBQ0EsUUFBTUcsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBQyx5REFBUyxDQUFDLE1BQU07QUFDZEMsaUJBQWE7QUFDYkMsWUFB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cUIsT0FBRyxFQUFDLFVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXhCRixDQUhGLENBSEYsRUFtQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkNGLENBTkYsRUE0Q0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCt4TEE1Q0YsQ0FERjtBQXFFRDs7R0E3R3VCNUMsSTtVQUdQTyxxRDs7O0tBSE9QLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjhhZTg4YWI3N2FjMjM0Yzc2ODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgSG9tZVN0eWxlIGZyb20gJy4uL3N0eWxlcy9wYWdlcy9ob21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlYmFyJztcbmltcG9ydCB1c2VyU2VydmljZSBmcm9tICcuLi91dGlscy91c2VyU2VydmljZSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCB7IEdpVm90ZSB9IGZyb20gJ3JlYWN0LWljb25zL2dpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3VzZXJDb3VudCwgc2V0VXNlckNvdW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdm90ZXNDb3VudCwgc2V0Vm90ZXNDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgQ2hlY2tSZWRpcmVjdCgpO1xuICAgIEdldFN0YXRzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBDaGVja1JlZGlyZWN0ID0gKCkgPT4ge1xuICAgIGxldCBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMKGRvY3VtZW50LmxvY2F0aW9uKS5zZWFyY2hQYXJhbXM7XG4gICAgY29uc29sZS5sb2cocGFyYW1zLmdldCgnaWQnKSk7XG4gICAgaWYgKHBhdGggIT09ICcvJykge1xuICAgICAgY29uc29sZS5sb2cocGF0aCk7XG4gICAgICBpZiAocGF0aC5pbmNsdWRlcygnL3ZvdGUnKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnSW4gdm90ZScpO1xuICAgICAgICBpZiAocGFyYW1zLmdldCgnaWQnKSAmJiBwYXJhbXMuZ2V0KCd0b2tlbicpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1dlIGhhdmUgdGhlIHBhcmFtZXRlcnMnKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXBweS12b3RlLXVzZXInLCBwYXJhbXMuZ2V0KCdpZCcpKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXBweS12b3RlLXVzZXItdG9rZW4nLCBwYXJhbXMuZ2V0KCd0b2tlbicpKTtcbiAgICAgICAgICByb3V0ZXIucHVzaCgnL3ZvdGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3V0ZXIucHVzaCgnL3ZvdGUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcm91dGVyLnB1c2gocGF0aCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IEdldFN0YXRzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldENvdW50cygpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBzZXRVc2VyQ291bnQoZGF0YS51c2VyQ291bnQpO1xuICAgICAgc2V0Vm90ZXNDb3VudChkYXRhLnZvdGVDb3VudCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChlcnIpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFwcHlWb3RlPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFwcH0+XG4gICAgICAgIDxTaWRlYmFyIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluQ29udGVudH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaXJjbGUxfT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNpcmNsZTJ9PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuaG9tZURpdn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLmhvbWVEaXZJbmZvfT5cbiAgICAgICAgICAgICAgPGgxPldlbGNvbWUgdG8gQXBweVZvdGUuLi48L2gxPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBBbGwtaW4tb25lIHBsYXRmb3JtIHdoZXJlIHlvdSBjYW4gZW50ZXIgeW91ciBwcmVkaWN0aW9ucyBhcyB0b1xuICAgICAgICAgICAgICAgIHdobyB3aWxsIHdpbiBhbiBlbGVjdGlvbiwgYW5kIGJlIHVwZGF0ZWQgd2l0aCBsYXRlc3QgYW5kIGJpZ2dlc3RcbiAgICAgICAgICAgICAgICBuZXdzIG9uIHRoZSBlbGVjdGlvbnMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvdm90ZVwiIGNsYXNzTmFtZT17SG9tZVN0eWxlLmhvbWVEaXZJbmZvVm90ZUJ0bn0+XG4gICAgICAgICAgICAgICAgPEdpVm90ZSAvPlxuICAgICAgICAgICAgICAgIFZvdGUgTm93XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5jb3VudERpdn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5jb3VudERpdkNvbH0+XG4gICAgICAgICAgICAgICAgICA8cD5Ub3RhbCBVc2Vyczo8L3A+XG4gICAgICAgICAgICAgICAgICA8aDE+e3VzZXJDb3VudH08L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuY291bnREaXZDb2x9PlxuICAgICAgICAgICAgICAgICAgPHA+VG90YWwgVm90ZXM6PC9wPlxuICAgICAgICAgICAgICAgICAgPGgxPnt2b3Rlc0NvdW50fTwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLmhvbWVEaXZTdmd9PlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9ob21lLnBuZ1wiIGFsdD1cIkhvbWVsb2dvXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJyxcbiAgICAgICAgICAgICAgICAnUm9ib3RvJywgJ094eWdlbicsICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsXG4gICAgICAgICAgICAgICAgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI19fbmV4dC1wcmVyZW5kZXItaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9