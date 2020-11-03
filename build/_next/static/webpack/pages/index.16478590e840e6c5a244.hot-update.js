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
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons */ "./node_modules/react-icons/lib/esm/index.js");
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-share */ "./node_modules/react-share/es/index.js");
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
    GAScript();
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

  const GAScript = () => {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'G-BTWM0DY4TH');
  };

  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, "AppyVote"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }), __jsx("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=G-BTWM0DY4TH",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.App,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.mainContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.circle1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.circle2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.homeDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.homeDivInfo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "/",
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.goHome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/whiteLogo.png",
    height: 75,
    width: 75,
    alt: "Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }), __jsx(react_share__WEBPACK_IMPORTED_MODULE_12__["EmailShareButton"], {
    url: "https://appyvote.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, "Button")), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }, "Welcome to AppyVote..."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, "All-in-one platform where you can enter your predictions as to who will win an election, and be updated with latest and biggest news on the elections.", __jsx("a", {
    href: "/about",
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.learnMoreText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, "\xA0Learn more")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.VoteBtnContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "/vote",
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.homeDivInfoVoteBtn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_11__["IconContext"].Provider, {
    value: {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sidebarToggleIcon,
      size: 24
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 19
    }
  }, __jsx(react_icons_gi__WEBPACK_IMPORTED_MODULE_9__["GiVote"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  })), '   ', "Vote Now")), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.countDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.countDivCol,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 19
    }
  }, "Total Users:"), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 19
    }
  }, userCount)), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.countDivCol,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 19
    }
  }, "Total Votes:"), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 19
    }
  }, votesCount))), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.storeDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.StoreButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "./playStoreIcon.png",
    height: "25",
    width: "25",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.StoreButtonText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.StoreButtonText1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 23
    }
  }, "GET IT ON"), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.StoreButtonText2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 23
    }
  }, "Google Play"))), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.comingSoon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 19
    }
  }, "Coming soon...")), __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.StoreButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 19
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_11__["IconContext"].Provider, {
    value: {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sidebarToggleIcon,
      size: 30
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  }, __jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_10__["RiAppleFill"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 23
    }
  })), ' ', __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.StoreButtonText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.StoreButtonText1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 23
    }
  }, "GET IT ON"), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.StoreButtonText2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 23
    }
  }, "App Store"))), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.comingSoon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 19
    }
  }, "Coming soon...")))), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.homeDivSvg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/home.png",
    alt: "Homelogo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 15
    }
  })))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-2919720203",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2919720203",
    __self: this
  }, "body{margin:0px;padding:0px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI', 'Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans', 'Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}label{font-size:15px;font-weight:500;}#__next-prerender-indicator{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZMVyxBQUcwQixBQVNJLEFBSUYsV0FaRCxFQWFkLEVBSmtCLFFBTjRCLFFBTzlDLDhJQU5xQyxtQ0FDRCxrQ0FDcEMiLCJmaWxlIjoiRDpcXE5leHRcXG5leHRqcy1ibG9nXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IEhvbWVTdHlsZSBmcm9tICcuLi9zdHlsZXMvcGFnZXMvaG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcic7XG5pbXBvcnQgdXNlclNlcnZpY2UgZnJvbSAnLi4vdXRpbHMvdXNlclNlcnZpY2UnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgeyBHaVZvdGUgfSBmcm9tICdyZWFjdC1pY29ucy9naSc7XG5pbXBvcnQgeyBSaUFwcGxlRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcbmltcG9ydCB7IEljb25Db250ZXh0IH0gZnJvbSAncmVhY3QtaWNvbnMnO1xuaW1wb3J0IHtcbiAgRW1haWxTaGFyZUJ1dHRvbixcbiAgRmFjZWJvb2tTaGFyZUJ1dHRvbixcbiAgSGF0ZW5hU2hhcmVCdXR0b24sXG4gIEluc3RhcGFwZXJTaGFyZUJ1dHRvbixcbiAgTGluZVNoYXJlQnV0dG9uLFxuICBMaW5rZWRpblNoYXJlQnV0dG9uLFxuICBMaXZlam91cm5hbFNoYXJlQnV0dG9uLFxuICBNYWlscnVTaGFyZUJ1dHRvbixcbiAgT0tTaGFyZUJ1dHRvbixcbiAgUGludGVyZXN0U2hhcmVCdXR0b24sXG4gIFBvY2tldFNoYXJlQnV0dG9uLFxuICBSZWRkaXRTaGFyZUJ1dHRvbixcbiAgVGVsZWdyYW1TaGFyZUJ1dHRvbixcbiAgVHVtYmxyU2hhcmVCdXR0b24sXG4gIFR3aXR0ZXJTaGFyZUJ1dHRvbixcbiAgVmliZXJTaGFyZUJ1dHRvbixcbiAgVktTaGFyZUJ1dHRvbixcbiAgV2hhdHNhcHBTaGFyZUJ1dHRvbixcbiAgV29ya3BsYWNlU2hhcmVCdXR0b24sXG59IGZyb20gJ3JlYWN0LXNoYXJlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3VzZXJDb3VudCwgc2V0VXNlckNvdW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdm90ZXNDb3VudCwgc2V0Vm90ZXNDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgQ2hlY2tSZWRpcmVjdCgpO1xuICAgIEdldFN0YXRzKCk7XG4gICAgR0FTY3JpcHQoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IENoZWNrUmVkaXJlY3QgPSAoKSA9PiB7XG4gICAgbGV0IHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBVUkwoZG9jdW1lbnQubG9jYXRpb24pLnNlYXJjaFBhcmFtcztcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMuZ2V0KCdpZCcpKTtcbiAgICBpZiAocGF0aCAhPT0gJy8nKSB7XG4gICAgICBjb25zb2xlLmxvZyhwYXRoKTtcbiAgICAgIGlmIChwYXRoLmluY2x1ZGVzKCcvdm90ZScpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJbiB2b3RlJyk7XG4gICAgICAgIGlmIChwYXJhbXMuZ2V0KCdpZCcpICYmIHBhcmFtcy5nZXQoJ3Rva2VuJykpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnV2UgaGF2ZSB0aGUgcGFyYW1ldGVycycpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcHB5LXZvdGUtdXNlcicsIHBhcmFtcy5nZXQoJ2lkJykpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcHB5LXZvdGUtdXNlci10b2tlbicsIHBhcmFtcy5nZXQoJ3Rva2VuJykpO1xuICAgICAgICAgIHJvdXRlci5wdXNoKCcvdm90ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJvdXRlci5wdXNoKCcvdm90ZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByb3V0ZXIucHVzaChwYXRoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgR2V0U3RhdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgdXNlclNlcnZpY2UuZ2V0Q291bnRzKCk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIHNldFVzZXJDb3VudChkYXRhLnVzZXJDb3VudCk7XG4gICAgICBzZXRWb3Rlc0NvdW50KGRhdGEudm90ZUNvdW50KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGVycik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IEdBU2NyaXB0ID0gKCkgPT4ge1xuICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgIGZ1bmN0aW9uIGd0YWcoKSB7XG4gICAgICBkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO1xuICAgIH1cbiAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuICAgIGd0YWcoJ2NvbmZpZycsICdHLUJUV00wRFk0VEgnKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFwcHlWb3RlPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmNcbiAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctQlRXTTBEWTRUSFwiXG4gICAgICAgID48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BcHB9PlxuICAgICAgICA8U2lkZWJhciAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkNvbnRlbnR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2lyY2xlMX0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaXJjbGUyfT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLmhvbWVEaXZ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5ob21lRGl2SW5mb30+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtIb21lU3R5bGUuZ29Ib21lfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi93aGl0ZUxvZ28ucG5nXCIgaGVpZ2h0PXs3NX0gd2lkdGg9ezc1fSBhbHQ9XCJMb2dvXCIgLz5cbiAgICAgICAgICAgICAgICA8RW1haWxTaGFyZUJ1dHRvbiB1cmw9XCJodHRwczovL2FwcHl2b3RlLmNvbVwiPlxuICAgICAgICAgICAgICAgICAgQnV0dG9uXG4gICAgICAgICAgICAgICAgPC9FbWFpbFNoYXJlQnV0dG9uPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxoMT5XZWxjb21lIHRvIEFwcHlWb3RlLi4uPC9oMT5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgQWxsLWluLW9uZSBwbGF0Zm9ybSB3aGVyZSB5b3UgY2FuIGVudGVyIHlvdXIgcHJlZGljdGlvbnMgYXMgdG9cbiAgICAgICAgICAgICAgICB3aG8gd2lsbCB3aW4gYW4gZWxlY3Rpb24sIGFuZCBiZSB1cGRhdGVkIHdpdGggbGF0ZXN0IGFuZCBiaWdnZXN0XG4gICAgICAgICAgICAgICAgbmV3cyBvbiB0aGUgZWxlY3Rpb25zLlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvYWJvdXRcIiBjbGFzc05hbWU9e0hvbWVTdHlsZS5sZWFybk1vcmVUZXh0fT5cbiAgICAgICAgICAgICAgICAgICZuYnNwO0xlYXJuIG1vcmVcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuVm90ZUJ0bkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi92b3RlXCIgY2xhc3NOYW1lPXtIb21lU3R5bGUuaG9tZURpdkluZm9Wb3RlQnRufT5cbiAgICAgICAgICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogc3R5bGVzLnNpZGViYXJUb2dnbGVJY29uLFxuICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDI0LFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8R2lWb3RlIC8+XG4gICAgICAgICAgICAgICAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgeycgICAnfVZvdGUgTm93XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5jb3VudERpdn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5jb3VudERpdkNvbH0+XG4gICAgICAgICAgICAgICAgICA8cD5Ub3RhbCBVc2Vyczo8L3A+XG4gICAgICAgICAgICAgICAgICA8aDE+e3VzZXJDb3VudH08L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuY291bnREaXZDb2x9PlxuICAgICAgICAgICAgICAgICAgPHA+VG90YWwgVm90ZXM6PC9wPlxuICAgICAgICAgICAgICAgICAgPGgxPnt2b3Rlc0NvdW50fTwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLnN0b3JlRGl2fT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5TdG9yZUJ1dHRvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9wbGF5U3RvcmVJY29uLnBuZ1wiIGhlaWdodD1cIjI1XCIgd2lkdGg9XCIyNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuU3RvcmVCdXR0b25UZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLlN0b3JlQnV0dG9uVGV4dDF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgR0VUIElUIE9OXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5TdG9yZUJ1dHRvblRleHQyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEdvb2dsZSBQbGF5XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLmNvbWluZ1Nvb259PkNvbWluZyBzb29uLi4uPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLlN0b3JlQnV0dG9ufT5cbiAgICAgICAgICAgICAgICAgICAgPEljb25Db250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogc3R5bGVzLnNpZGViYXJUb2dnbGVJY29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxSaUFwcGxlRmlsbCAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPnsnICd9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuU3RvcmVCdXR0b25UZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLlN0b3JlQnV0dG9uVGV4dDF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgR0VUIElUIE9OXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5TdG9yZUJ1dHRvblRleHQyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcCBTdG9yZVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5jb21pbmdTb29ufT5Db21pbmcgc29vbi4uLjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuaG9tZURpdlN2Z30+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2hvbWUucG5nXCIgYWx0PVwiSG9tZWxvZ29cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLFxuICAgICAgICAgICAgICAgICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJyxcbiAgICAgICAgICAgICAgICAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjX19uZXh0LXByZXJlbmRlci1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=D:\\\\Next\\\\nextjs-blog\\\\pages\\\\index.js */")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZXJDb3VudCIsInNldFVzZXJDb3VudCIsInVzZVN0YXRlIiwidm90ZXNDb3VudCIsInNldFZvdGVzQ291bnQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJDaGVja1JlZGlyZWN0IiwiR2V0U3RhdHMiLCJHQVNjcmlwdCIsInBhdGgiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicGFyYW1zIiwiVVJMIiwiZG9jdW1lbnQiLCJzZWFyY2hQYXJhbXMiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwiaW5jbHVkZXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaCIsImRhdGEiLCJ1c2VyU2VydmljZSIsImdldENvdW50cyIsInZvdGVDb3VudCIsImVyciIsImFsZXJ0IiwiZGF0YUxheWVyIiwiZ3RhZyIsImFyZ3VtZW50cyIsIkRhdGUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJBcHAiLCJtYWluQ29udGVudCIsImNpcmNsZTEiLCJjaXJjbGUyIiwiSG9tZVN0eWxlIiwiaG9tZURpdiIsImhvbWVEaXZJbmZvIiwiZ29Ib21lIiwibGVhcm5Nb3JlVGV4dCIsIlZvdGVCdG5Db250YWluZXIiLCJob21lRGl2SW5mb1ZvdGVCdG4iLCJjbGFzc05hbWUiLCJzaWRlYmFyVG9nZ2xlSWNvbiIsInNpemUiLCJjb3VudERpdiIsImNvdW50RGl2Q29sIiwic3RvcmVEaXYiLCJTdG9yZUJ1dHRvbiIsIlN0b3JlQnV0dG9uVGV4dCIsIlN0b3JlQnV0dG9uVGV4dDEiLCJTdG9yZUJ1dHRvblRleHQyIiwiY29taW5nU29vbiIsImhvbWVEaXZTdmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXNC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SUExRkYsQ0FWRixFQXVHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK2xVQXZHRixDQURGO0FBZ0lEOztHQWxMdUI3RCxJO1VBR1BPLHFEOzs7S0FIT1AsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNjQ3ODU5MGU4NDBlNmM1YTI0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCBIb21lU3R5bGUgZnJvbSAnLi4vc3R5bGVzL3BhZ2VzL2hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInO1xuaW1wb3J0IHVzZXJTZXJ2aWNlIGZyb20gJy4uL3V0aWxzL3VzZXJTZXJ2aWNlJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IHsgR2lWb3RlIH0gZnJvbSAncmVhY3QtaWNvbnMvZ2knO1xuaW1wb3J0IHsgUmlBcHBsZUZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9yaSc7XG5pbXBvcnQgeyBJY29uQ29udGV4dCB9IGZyb20gJ3JlYWN0LWljb25zJztcbmltcG9ydCB7XG4gIEVtYWlsU2hhcmVCdXR0b24sXG4gIEZhY2Vib29rU2hhcmVCdXR0b24sXG4gIEhhdGVuYVNoYXJlQnV0dG9uLFxuICBJbnN0YXBhcGVyU2hhcmVCdXR0b24sXG4gIExpbmVTaGFyZUJ1dHRvbixcbiAgTGlua2VkaW5TaGFyZUJ1dHRvbixcbiAgTGl2ZWpvdXJuYWxTaGFyZUJ1dHRvbixcbiAgTWFpbHJ1U2hhcmVCdXR0b24sXG4gIE9LU2hhcmVCdXR0b24sXG4gIFBpbnRlcmVzdFNoYXJlQnV0dG9uLFxuICBQb2NrZXRTaGFyZUJ1dHRvbixcbiAgUmVkZGl0U2hhcmVCdXR0b24sXG4gIFRlbGVncmFtU2hhcmVCdXR0b24sXG4gIFR1bWJsclNoYXJlQnV0dG9uLFxuICBUd2l0dGVyU2hhcmVCdXR0b24sXG4gIFZpYmVyU2hhcmVCdXR0b24sXG4gIFZLU2hhcmVCdXR0b24sXG4gIFdoYXRzYXBwU2hhcmVCdXR0b24sXG4gIFdvcmtwbGFjZVNoYXJlQnV0dG9uLFxufSBmcm9tICdyZWFjdC1zaGFyZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt1c2VyQ291bnQsIHNldFVzZXJDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3ZvdGVzQ291bnQsIHNldFZvdGVzQ291bnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIENoZWNrUmVkaXJlY3QoKTtcbiAgICBHZXRTdGF0cygpO1xuICAgIEdBU2NyaXB0KCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBDaGVja1JlZGlyZWN0ID0gKCkgPT4ge1xuICAgIGxldCBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMKGRvY3VtZW50LmxvY2F0aW9uKS5zZWFyY2hQYXJhbXM7XG4gICAgY29uc29sZS5sb2cocGFyYW1zLmdldCgnaWQnKSk7XG4gICAgaWYgKHBhdGggIT09ICcvJykge1xuICAgICAgY29uc29sZS5sb2cocGF0aCk7XG4gICAgICBpZiAocGF0aC5pbmNsdWRlcygnL3ZvdGUnKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnSW4gdm90ZScpO1xuICAgICAgICBpZiAocGFyYW1zLmdldCgnaWQnKSAmJiBwYXJhbXMuZ2V0KCd0b2tlbicpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1dlIGhhdmUgdGhlIHBhcmFtZXRlcnMnKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXBweS12b3RlLXVzZXInLCBwYXJhbXMuZ2V0KCdpZCcpKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXBweS12b3RlLXVzZXItdG9rZW4nLCBwYXJhbXMuZ2V0KCd0b2tlbicpKTtcbiAgICAgICAgICByb3V0ZXIucHVzaCgnL3ZvdGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3V0ZXIucHVzaCgnL3ZvdGUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcm91dGVyLnB1c2gocGF0aCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IEdldFN0YXRzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldENvdW50cygpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBzZXRVc2VyQ291bnQoZGF0YS51c2VyQ291bnQpO1xuICAgICAgc2V0Vm90ZXNDb3VudChkYXRhLnZvdGVDb3VudCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChlcnIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBHQVNjcmlwdCA9ICgpID0+IHtcbiAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICBmdW5jdGlvbiBndGFnKCkge1xuICAgICAgZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTtcbiAgICB9XG4gICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcbiAgICBndGFnKCdjb25maWcnLCAnRy1CVFdNMERZNFRIJyk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5BcHB5Vm90ZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGFzeW5jXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1HLUJUV00wRFk0VEhcIlxuICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXBwfT5cbiAgICAgICAgPFNpZGViYXIgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5Db250ZW50fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNpcmNsZTF9PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2lyY2xlMn0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5ob21lRGl2fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuaG9tZURpdkluZm99PlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT17SG9tZVN0eWxlLmdvSG9tZX0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvd2hpdGVMb2dvLnBuZ1wiIGhlaWdodD17NzV9IHdpZHRoPXs3NX0gYWx0PVwiTG9nb1wiIC8+XG4gICAgICAgICAgICAgICAgPEVtYWlsU2hhcmVCdXR0b24gdXJsPVwiaHR0cHM6Ly9hcHB5dm90ZS5jb21cIj5cbiAgICAgICAgICAgICAgICAgIEJ1dHRvblxuICAgICAgICAgICAgICAgIDwvRW1haWxTaGFyZUJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8aDE+V2VsY29tZSB0byBBcHB5Vm90ZS4uLjwvaDE+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEFsbC1pbi1vbmUgcGxhdGZvcm0gd2hlcmUgeW91IGNhbiBlbnRlciB5b3VyIHByZWRpY3Rpb25zIGFzIHRvXG4gICAgICAgICAgICAgICAgd2hvIHdpbGwgd2luIGFuIGVsZWN0aW9uLCBhbmQgYmUgdXBkYXRlZCB3aXRoIGxhdGVzdCBhbmQgYmlnZ2VzdFxuICAgICAgICAgICAgICAgIG5ld3Mgb24gdGhlIGVsZWN0aW9ucy5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2Fib3V0XCIgY2xhc3NOYW1lPXtIb21lU3R5bGUubGVhcm5Nb3JlVGV4dH0+XG4gICAgICAgICAgICAgICAgICAmbmJzcDtMZWFybiBtb3JlXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLlZvdGVCdG5Db250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvdm90ZVwiIGNsYXNzTmFtZT17SG9tZVN0eWxlLmhvbWVEaXZJbmZvVm90ZUJ0bn0+XG4gICAgICAgICAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHN0eWxlcy5zaWRlYmFyVG9nZ2xlSWNvbixcbiAgICAgICAgICAgICAgICAgICAgICBzaXplOiAyNCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEdpVm90ZSAvPlxuICAgICAgICAgICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgIHsnICAgJ31Wb3RlIE5vd1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuY291bnREaXZ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuY291bnREaXZDb2x9PlxuICAgICAgICAgICAgICAgICAgPHA+VG90YWwgVXNlcnM6PC9wPlxuICAgICAgICAgICAgICAgICAgPGgxPnt1c2VyQ291bnR9PC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLmNvdW50RGl2Q29sfT5cbiAgICAgICAgICAgICAgICAgIDxwPlRvdGFsIFZvdGVzOjwvcD5cbiAgICAgICAgICAgICAgICAgIDxoMT57dm90ZXNDb3VudH08L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5zdG9yZURpdn0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuU3RvcmVCdXR0b259PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vcGxheVN0b3JlSWNvbi5wbmdcIiBoZWlnaHQ9XCIyNVwiIHdpZHRoPVwiMjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLlN0b3JlQnV0dG9uVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5TdG9yZUJ1dHRvblRleHQxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEdFVCBJVCBPTlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuU3RvcmVCdXR0b25UZXh0Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICBHb29nbGUgUGxheVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5jb21pbmdTb29ufT5Db21pbmcgc29vbi4uLjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5TdG9yZUJ1dHRvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHN0eWxlcy5zaWRlYmFyVG9nZ2xlSWNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDMwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8UmlBcHBsZUZpbGwgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj57JyAnfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLlN0b3JlQnV0dG9uVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5TdG9yZUJ1dHRvblRleHQxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEdFVCBJVCBPTlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuU3RvcmVCdXR0b25UZXh0Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAgU3RvcmVcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuY29taW5nU29vbn0+Q29taW5nIHNvb24uLi48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLmhvbWVEaXZTdmd9PlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9ob21lLnBuZ1wiIGFsdD1cIkhvbWVsb2dvXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJyxcbiAgICAgICAgICAgICAgICAnUm9ib3RvJywgJ094eWdlbicsICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsXG4gICAgICAgICAgICAgICAgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI19fbmV4dC1wcmVyZW5kZXItaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9