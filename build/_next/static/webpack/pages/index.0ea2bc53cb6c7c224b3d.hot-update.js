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
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, "AppyVote"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }), __jsx("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=G-BTWM0DY4TH",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.App,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.mainContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.circle1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.circle2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.homeDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.homeDivInfo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "/",
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.goHome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
      lineNumber: 93,
      columnNumber: 17
    }
  }), __jsx(react_share__WEBPACK_IMPORTED_MODULE_12__["FacebookShareButton"], {
    url: "https://appyvote.com",
    quote: "Introducing APPYVOTE, an app to give your voice a vote, even if it won’t affect an election's result, it will certainly (maybe) be a nifty gauge.",
    hashtag: "#election",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_12__["FacebookIcon"], {
    size: 20,
    round: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 19
    }
  })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_12__["FacebookShareButton"], {
    url: "https://appyvote.com",
    quote: "Introducing APPYVOTE, an app to give your voice a vote, even if it won’t affect an election's result, it will certainly (maybe) be a nifty gauge.",
    hashtag: "#election",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_12__["FacebookIcon"], {
    size: 20,
    round: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 19
    }
  })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_12__["FacebookShareButton"], {
    url: "https://appyvote.com",
    quote: "Introducing APPYVOTE, an app to give your voice a vote, even if it won’t affect an election's result, it will certainly (maybe) be a nifty gauge.",
    hashtag: "#election",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_12__["FacebookIcon"], {
    size: 20,
    round: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 19
    }
  })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_12__["FacebookShareButton"], {
    url: "https://appyvote.com",
    quote: "Introducing APPYVOTE, an app to give your voice a vote, even if it won’t affect an election's result, it will certainly (maybe) be a nifty gauge.",
    hashtag: "#election",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_12__["FacebookIcon"], {
    size: 20,
    round: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 19
    }
  }))), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  }, "Welcome to AppyVote..."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }, "All-in-one platform where you can enter your predictions as to who will win an election, and be updated with latest and biggest news on the elections.", __jsx("a", {
    href: "/about",
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.learnMoreText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, "\xA0Learn more")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.VoteBtnContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "/vote",
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.homeDivInfoVoteBtn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
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
      lineNumber: 143,
      columnNumber: 19
    }
  }, __jsx(react_icons_gi__WEBPACK_IMPORTED_MODULE_9__["GiVote"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  })), '   ', "Vote Now")), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.countDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.countDivCol,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 19
    }
  }, "Total Users:"), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 19
    }
  }, userCount)), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.countDivCol,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 19
    }
  }, "Total Votes:"), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 19
    }
  }, votesCount))), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.storeDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.StoreButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "./playStoreIcon.png",
    height: "25",
    width: "25",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.StoreButtonText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.StoreButtonText1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 23
    }
  }, "GET IT ON"), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.StoreButtonText2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 23
    }
  }, "Google Play"))), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.comingSoon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 19
    }
  }, "Coming soon...")), __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.StoreButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
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
      lineNumber: 181,
      columnNumber: 21
    }
  }, __jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_10__["RiAppleFill"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 23
    }
  })), ' ', __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.StoreButtonText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.StoreButtonText1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 23
    }
  }, "GET IT ON"), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.StoreButtonText2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 23
    }
  }, "App Store"))), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.comingSoon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 19
    }
  }, "Coming soon...")))), __jsx("div", {
    className: _styles_pages_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.homeDivSvg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/home.png",
    alt: "Homelogo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 15
    }
  })))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-2919720203",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2919720203",
    __self: this
  }, "body{margin:0px;padding:0px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI', 'Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans', 'Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}label{font-size:15px;font-weight:500;}#__next-prerender-indicator{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1OVyxBQUcwQixBQVNJLEFBSUYsV0FaRCxFQWFkLEVBSmtCLFFBTjRCLFFBTzlDLDhJQU5xQyxtQ0FDRCxrQ0FDcEMiLCJmaWxlIjoiRDpcXE5leHRcXG5leHRqcy1ibG9nXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IEhvbWVTdHlsZSBmcm9tICcuLi9zdHlsZXMvcGFnZXMvaG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcic7XG5pbXBvcnQgdXNlclNlcnZpY2UgZnJvbSAnLi4vdXRpbHMvdXNlclNlcnZpY2UnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgeyBHaVZvdGUgfSBmcm9tICdyZWFjdC1pY29ucy9naSc7XG5pbXBvcnQgeyBSaUFwcGxlRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcbmltcG9ydCB7IEljb25Db250ZXh0IH0gZnJvbSAncmVhY3QtaWNvbnMnO1xuaW1wb3J0IHtcbiAgRmFjZWJvb2tTaGFyZUJ1dHRvbixcbiAgUmVkZGl0U2hhcmVCdXR0b24sXG4gIFR1bWJsclNoYXJlQnV0dG9uLFxuICBUd2l0dGVyU2hhcmVCdXR0b24sXG4gIEZhY2Vib29rSWNvbixcbiAgUmVkZGl0SWNvbixcbiAgVHVtYmxySWNvbixcbiAgVHdpdHRlckljb24sXG59IGZyb20gJ3JlYWN0LXNoYXJlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3VzZXJDb3VudCwgc2V0VXNlckNvdW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdm90ZXNDb3VudCwgc2V0Vm90ZXNDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgQ2hlY2tSZWRpcmVjdCgpO1xuICAgIEdldFN0YXRzKCk7XG4gICAgR0FTY3JpcHQoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IENoZWNrUmVkaXJlY3QgPSAoKSA9PiB7XG4gICAgbGV0IHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBVUkwoZG9jdW1lbnQubG9jYXRpb24pLnNlYXJjaFBhcmFtcztcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMuZ2V0KCdpZCcpKTtcbiAgICBpZiAocGF0aCAhPT0gJy8nKSB7XG4gICAgICBjb25zb2xlLmxvZyhwYXRoKTtcbiAgICAgIGlmIChwYXRoLmluY2x1ZGVzKCcvdm90ZScpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJbiB2b3RlJyk7XG4gICAgICAgIGlmIChwYXJhbXMuZ2V0KCdpZCcpICYmIHBhcmFtcy5nZXQoJ3Rva2VuJykpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnV2UgaGF2ZSB0aGUgcGFyYW1ldGVycycpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcHB5LXZvdGUtdXNlcicsIHBhcmFtcy5nZXQoJ2lkJykpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcHB5LXZvdGUtdXNlci10b2tlbicsIHBhcmFtcy5nZXQoJ3Rva2VuJykpO1xuICAgICAgICAgIHJvdXRlci5wdXNoKCcvdm90ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJvdXRlci5wdXNoKCcvdm90ZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByb3V0ZXIucHVzaChwYXRoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgR2V0U3RhdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgdXNlclNlcnZpY2UuZ2V0Q291bnRzKCk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIHNldFVzZXJDb3VudChkYXRhLnVzZXJDb3VudCk7XG4gICAgICBzZXRWb3Rlc0NvdW50KGRhdGEudm90ZUNvdW50KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGVycik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IEdBU2NyaXB0ID0gKCkgPT4ge1xuICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgIGZ1bmN0aW9uIGd0YWcoKSB7XG4gICAgICBkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO1xuICAgIH1cbiAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuICAgIGd0YWcoJ2NvbmZpZycsICdHLUJUV00wRFk0VEgnKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFwcHlWb3RlPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmNcbiAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctQlRXTTBEWTRUSFwiXG4gICAgICAgID48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BcHB9PlxuICAgICAgICA8U2lkZWJhciAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkNvbnRlbnR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2lyY2xlMX0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaXJjbGUyfT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLmhvbWVEaXZ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5ob21lRGl2SW5mb30+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtIb21lU3R5bGUuZ29Ib21lfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi93aGl0ZUxvZ28ucG5nXCIgaGVpZ2h0PXs3NX0gd2lkdGg9ezc1fSBhbHQ9XCJMb2dvXCIgLz5cbiAgICAgICAgICAgICAgICA8RmFjZWJvb2tTaGFyZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgdXJsPVwiaHR0cHM6Ly9hcHB5dm90ZS5jb21cIlxuICAgICAgICAgICAgICAgICAgcXVvdGU9e1xuICAgICAgICAgICAgICAgICAgICBcIkludHJvZHVjaW5nIEFQUFlWT1RFLCBhbiBhcHAgdG8gZ2l2ZSB5b3VyIHZvaWNlIGEgdm90ZSwgZXZlbiBpZiBpdCB3b27igJl0IGFmZmVjdCBhbiBlbGVjdGlvbidzIHJlc3VsdCwgaXQgd2lsbCBjZXJ0YWlubHkgKG1heWJlKSBiZSBhIG5pZnR5IGdhdWdlLlwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBoYXNodGFnPVwiI2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8RmFjZWJvb2tJY29uIHNpemU9ezIwfSByb3VuZD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICA8L0ZhY2Vib29rU2hhcmVCdXR0b24+XG4gICAgICAgICAgICAgICAgPEZhY2Vib29rU2hhcmVCdXR0b25cbiAgICAgICAgICAgICAgICAgIHVybD1cImh0dHBzOi8vYXBweXZvdGUuY29tXCJcbiAgICAgICAgICAgICAgICAgIHF1b3RlPXtcbiAgICAgICAgICAgICAgICAgICAgXCJJbnRyb2R1Y2luZyBBUFBZVk9URSwgYW4gYXBwIHRvIGdpdmUgeW91ciB2b2ljZSBhIHZvdGUsIGV2ZW4gaWYgaXQgd29u4oCZdCBhZmZlY3QgYW4gZWxlY3Rpb24ncyByZXN1bHQsIGl0IHdpbGwgY2VydGFpbmx5IChtYXliZSkgYmUgYSBuaWZ0eSBnYXVnZS5cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaGFzaHRhZz1cIiNlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEZhY2Vib29rSWNvbiBzaXplPXsyMH0gcm91bmQ9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgPC9GYWNlYm9va1NoYXJlQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxGYWNlYm9va1NoYXJlQnV0dG9uXG4gICAgICAgICAgICAgICAgICB1cmw9XCJodHRwczovL2FwcHl2b3RlLmNvbVwiXG4gICAgICAgICAgICAgICAgICBxdW90ZT17XG4gICAgICAgICAgICAgICAgICAgIFwiSW50cm9kdWNpbmcgQVBQWVZPVEUsIGFuIGFwcCB0byBnaXZlIHlvdXIgdm9pY2UgYSB2b3RlLCBldmVuIGlmIGl0IHdvbuKAmXQgYWZmZWN0IGFuIGVsZWN0aW9uJ3MgcmVzdWx0LCBpdCB3aWxsIGNlcnRhaW5seSAobWF5YmUpIGJlIGEgbmlmdHkgZ2F1Z2UuXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGhhc2h0YWc9XCIjZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxGYWNlYm9va0ljb24gc2l6ZT17MjB9IHJvdW5kPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgIDwvRmFjZWJvb2tTaGFyZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8RmFjZWJvb2tTaGFyZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgdXJsPVwiaHR0cHM6Ly9hcHB5dm90ZS5jb21cIlxuICAgICAgICAgICAgICAgICAgcXVvdGU9e1xuICAgICAgICAgICAgICAgICAgICBcIkludHJvZHVjaW5nIEFQUFlWT1RFLCBhbiBhcHAgdG8gZ2l2ZSB5b3VyIHZvaWNlIGEgdm90ZSwgZXZlbiBpZiBpdCB3b27igJl0IGFmZmVjdCBhbiBlbGVjdGlvbidzIHJlc3VsdCwgaXQgd2lsbCBjZXJ0YWlubHkgKG1heWJlKSBiZSBhIG5pZnR5IGdhdWdlLlwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBoYXNodGFnPVwiI2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8RmFjZWJvb2tJY29uIHNpemU9ezIwfSByb3VuZD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICA8L0ZhY2Vib29rU2hhcmVCdXR0b24+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGgxPldlbGNvbWUgdG8gQXBweVZvdGUuLi48L2gxPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBBbGwtaW4tb25lIHBsYXRmb3JtIHdoZXJlIHlvdSBjYW4gZW50ZXIgeW91ciBwcmVkaWN0aW9ucyBhcyB0b1xuICAgICAgICAgICAgICAgIHdobyB3aWxsIHdpbiBhbiBlbGVjdGlvbiwgYW5kIGJlIHVwZGF0ZWQgd2l0aCBsYXRlc3QgYW5kIGJpZ2dlc3RcbiAgICAgICAgICAgICAgICBuZXdzIG9uIHRoZSBlbGVjdGlvbnMuXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9hYm91dFwiIGNsYXNzTmFtZT17SG9tZVN0eWxlLmxlYXJuTW9yZVRleHR9PlxuICAgICAgICAgICAgICAgICAgJm5ic3A7TGVhcm4gbW9yZVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5Wb3RlQnRuQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3ZvdGVcIiBjbGFzc05hbWU9e0hvbWVTdHlsZS5ob21lRGl2SW5mb1ZvdGVCdG59PlxuICAgICAgICAgICAgICAgICAgPEljb25Db250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBzdHlsZXMuc2lkZWJhclRvZ2dsZUljb24sXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMjQsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxHaVZvdGUgLz5cbiAgICAgICAgICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICB7JyAgICd9Vm90ZSBOb3dcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLmNvdW50RGl2fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLmNvdW50RGl2Q29sfT5cbiAgICAgICAgICAgICAgICAgIDxwPlRvdGFsIFVzZXJzOjwvcD5cbiAgICAgICAgICAgICAgICAgIDxoMT57dXNlckNvdW50fTwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5jb3VudERpdkNvbH0+XG4gICAgICAgICAgICAgICAgICA8cD5Ub3RhbCBWb3Rlczo8L3A+XG4gICAgICAgICAgICAgICAgICA8aDE+e3ZvdGVzQ291bnR9PC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuc3RvcmVEaXZ9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLlN0b3JlQnV0dG9ufT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL3BsYXlTdG9yZUljb24ucG5nXCIgaGVpZ2h0PVwiMjVcIiB3aWR0aD1cIjI1XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5TdG9yZUJ1dHRvblRleHR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuU3RvcmVCdXR0b25UZXh0MX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBHRVQgSVQgT05cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLlN0b3JlQnV0dG9uVGV4dDJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgR29vZ2xlIFBsYXlcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuY29taW5nU29vbn0+Q29taW5nIHNvb24uLi48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuU3RvcmVCdXR0b259PlxuICAgICAgICAgICAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBzdHlsZXMuc2lkZWJhclRvZ2dsZUljb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFJpQXBwbGVGaWxsIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5TdG9yZUJ1dHRvblRleHR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuU3RvcmVCdXR0b25UZXh0MX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBHRVQgSVQgT05cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLlN0b3JlQnV0dG9uVGV4dDJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwIFN0b3JlXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLmNvbWluZ1Nvb259PkNvbWluZyBzb29uLi4uPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5ob21lRGl2U3ZnfT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaG9tZS5wbmdcIiBhbHQ9XCJIb21lbG9nb1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsXG4gICAgICAgICAgICAgICAgJ1JvYm90bycsICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLFxuICAgICAgICAgICAgICAgICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNfX25leHQtcHJlcmVuZGVyLWluZGljYXRvciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=D:\\\\Next\\\\nextjs-blog\\\\pages\\\\index.js */")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZXJDb3VudCIsInNldFVzZXJDb3VudCIsInVzZVN0YXRlIiwidm90ZXNDb3VudCIsInNldFZvdGVzQ291bnQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJDaGVja1JlZGlyZWN0IiwiR2V0U3RhdHMiLCJHQVNjcmlwdCIsInBhdGgiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicGFyYW1zIiwiVVJMIiwiZG9jdW1lbnQiLCJzZWFyY2hQYXJhbXMiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwiaW5jbHVkZXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaCIsImRhdGEiLCJ1c2VyU2VydmljZSIsImdldENvdW50cyIsInZvdGVDb3VudCIsImVyciIsImFsZXJ0IiwiZGF0YUxheWVyIiwiZ3RhZyIsImFyZ3VtZW50cyIsIkRhdGUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJBcHAiLCJtYWluQ29udGVudCIsImNpcmNsZTEiLCJjaXJjbGUyIiwiSG9tZVN0eWxlIiwiaG9tZURpdiIsImhvbWVEaXZJbmZvIiwiZ29Ib21lIiwibGVhcm5Nb3JlVGV4dCIsIlZvdGVCdG5Db250YWluZXIiLCJob21lRGl2SW5mb1ZvdGVCdG4iLCJjbGFzc05hbWUiLCJzaWRlYmFyVG9nZ2xlSWNvbiIsInNpemUiLCJjb3VudERpdiIsImNvdW50RGl2Q29sIiwic3RvcmVEaXYiLCJTdG9yZUJ1dHRvbiIsIlN0b3JlQnV0dG9uVGV4dCIsIlN0b3JlQnV0dG9uVGV4dDEiLCJTdG9yZUJ1dHRvblRleHQyIiwiY29taW5nU29vbiIsImhvbWVEaXZTdmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVdl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QUdQTyxxRDs7O0tBSE9QLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGVhMmJjNTNjYjZjN2MyMjRiM2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgSG9tZVN0eWxlIGZyb20gJy4uL3N0eWxlcy9wYWdlcy9ob21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlYmFyJztcbmltcG9ydCB1c2VyU2VydmljZSBmcm9tICcuLi91dGlscy91c2VyU2VydmljZSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCB7IEdpVm90ZSB9IGZyb20gJ3JlYWN0LWljb25zL2dpJztcbmltcG9ydCB7IFJpQXBwbGVGaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvcmknO1xuaW1wb3J0IHsgSWNvbkNvbnRleHQgfSBmcm9tICdyZWFjdC1pY29ucyc7XG5pbXBvcnQge1xuICBGYWNlYm9va1NoYXJlQnV0dG9uLFxuICBSZWRkaXRTaGFyZUJ1dHRvbixcbiAgVHVtYmxyU2hhcmVCdXR0b24sXG4gIFR3aXR0ZXJTaGFyZUJ1dHRvbixcbiAgRmFjZWJvb2tJY29uLFxuICBSZWRkaXRJY29uLFxuICBUdW1ibHJJY29uLFxuICBUd2l0dGVySWNvbixcbn0gZnJvbSAncmVhY3Qtc2hhcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdXNlckNvdW50LCBzZXRVc2VyQ291bnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt2b3Rlc0NvdW50LCBzZXRWb3Rlc0NvdW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBDaGVja1JlZGlyZWN0KCk7XG4gICAgR2V0U3RhdHMoKTtcbiAgICBHQVNjcmlwdCgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgQ2hlY2tSZWRpcmVjdCA9ICgpID0+IHtcbiAgICBsZXQgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICBsZXQgcGFyYW1zID0gbmV3IFVSTChkb2N1bWVudC5sb2NhdGlvbikuc2VhcmNoUGFyYW1zO1xuICAgIGNvbnNvbGUubG9nKHBhcmFtcy5nZXQoJ2lkJykpO1xuICAgIGlmIChwYXRoICE9PSAnLycpIHtcbiAgICAgIGNvbnNvbGUubG9nKHBhdGgpO1xuICAgICAgaWYgKHBhdGguaW5jbHVkZXMoJy92b3RlJykpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0luIHZvdGUnKTtcbiAgICAgICAgaWYgKHBhcmFtcy5nZXQoJ2lkJykgJiYgcGFyYW1zLmdldCgndG9rZW4nKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdXZSBoYXZlIHRoZSBwYXJhbWV0ZXJzJyk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcHktdm90ZS11c2VyJywgcGFyYW1zLmdldCgnaWQnKSk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcHktdm90ZS11c2VyLXRva2VuJywgcGFyYW1zLmdldCgndG9rZW4nKSk7XG4gICAgICAgICAgcm91dGVyLnB1c2goJy92b3RlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm91dGVyLnB1c2goJy92b3RlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJvdXRlci5wdXNoKHBhdGgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBHZXRTdGF0cyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IGRhdGEgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRDb3VudHMoKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgc2V0VXNlckNvdW50KGRhdGEudXNlckNvdW50KTtcbiAgICAgIHNldFZvdGVzQ291bnQoZGF0YS52b3RlQ291bnQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgR0FTY3JpcHQgPSAoKSA9PiB7XG4gICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgZnVuY3Rpb24gZ3RhZygpIHtcbiAgICAgIGRhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG4gICAgZ3RhZygnY29uZmlnJywgJ0ctQlRXTTBEWTRUSCcpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QXBweVZvdGU8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBhc3luY1xuICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9Ry1CVFdNMERZNFRIXCJcbiAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFwcH0+XG4gICAgICAgIDxTaWRlYmFyIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluQ29udGVudH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaXJjbGUxfT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNpcmNsZTJ9PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuaG9tZURpdn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLmhvbWVEaXZJbmZvfT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9e0hvbWVTdHlsZS5nb0hvbWV9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3doaXRlTG9nby5wbmdcIiBoZWlnaHQ9ezc1fSB3aWR0aD17NzV9IGFsdD1cIkxvZ29cIiAvPlxuICAgICAgICAgICAgICAgIDxGYWNlYm9va1NoYXJlQnV0dG9uXG4gICAgICAgICAgICAgICAgICB1cmw9XCJodHRwczovL2FwcHl2b3RlLmNvbVwiXG4gICAgICAgICAgICAgICAgICBxdW90ZT17XG4gICAgICAgICAgICAgICAgICAgIFwiSW50cm9kdWNpbmcgQVBQWVZPVEUsIGFuIGFwcCB0byBnaXZlIHlvdXIgdm9pY2UgYSB2b3RlLCBldmVuIGlmIGl0IHdvbuKAmXQgYWZmZWN0IGFuIGVsZWN0aW9uJ3MgcmVzdWx0LCBpdCB3aWxsIGNlcnRhaW5seSAobWF5YmUpIGJlIGEgbmlmdHkgZ2F1Z2UuXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGhhc2h0YWc9XCIjZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxGYWNlYm9va0ljb24gc2l6ZT17MjB9IHJvdW5kPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgIDwvRmFjZWJvb2tTaGFyZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8RmFjZWJvb2tTaGFyZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgdXJsPVwiaHR0cHM6Ly9hcHB5dm90ZS5jb21cIlxuICAgICAgICAgICAgICAgICAgcXVvdGU9e1xuICAgICAgICAgICAgICAgICAgICBcIkludHJvZHVjaW5nIEFQUFlWT1RFLCBhbiBhcHAgdG8gZ2l2ZSB5b3VyIHZvaWNlIGEgdm90ZSwgZXZlbiBpZiBpdCB3b27igJl0IGFmZmVjdCBhbiBlbGVjdGlvbidzIHJlc3VsdCwgaXQgd2lsbCBjZXJ0YWlubHkgKG1heWJlKSBiZSBhIG5pZnR5IGdhdWdlLlwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBoYXNodGFnPVwiI2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8RmFjZWJvb2tJY29uIHNpemU9ezIwfSByb3VuZD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICA8L0ZhY2Vib29rU2hhcmVCdXR0b24+XG4gICAgICAgICAgICAgICAgPEZhY2Vib29rU2hhcmVCdXR0b25cbiAgICAgICAgICAgICAgICAgIHVybD1cImh0dHBzOi8vYXBweXZvdGUuY29tXCJcbiAgICAgICAgICAgICAgICAgIHF1b3RlPXtcbiAgICAgICAgICAgICAgICAgICAgXCJJbnRyb2R1Y2luZyBBUFBZVk9URSwgYW4gYXBwIHRvIGdpdmUgeW91ciB2b2ljZSBhIHZvdGUsIGV2ZW4gaWYgaXQgd29u4oCZdCBhZmZlY3QgYW4gZWxlY3Rpb24ncyByZXN1bHQsIGl0IHdpbGwgY2VydGFpbmx5IChtYXliZSkgYmUgYSBuaWZ0eSBnYXVnZS5cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaGFzaHRhZz1cIiNlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEZhY2Vib29rSWNvbiBzaXplPXsyMH0gcm91bmQ9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgPC9GYWNlYm9va1NoYXJlQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxGYWNlYm9va1NoYXJlQnV0dG9uXG4gICAgICAgICAgICAgICAgICB1cmw9XCJodHRwczovL2FwcHl2b3RlLmNvbVwiXG4gICAgICAgICAgICAgICAgICBxdW90ZT17XG4gICAgICAgICAgICAgICAgICAgIFwiSW50cm9kdWNpbmcgQVBQWVZPVEUsIGFuIGFwcCB0byBnaXZlIHlvdXIgdm9pY2UgYSB2b3RlLCBldmVuIGlmIGl0IHdvbuKAmXQgYWZmZWN0IGFuIGVsZWN0aW9uJ3MgcmVzdWx0LCBpdCB3aWxsIGNlcnRhaW5seSAobWF5YmUpIGJlIGEgbmlmdHkgZ2F1Z2UuXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGhhc2h0YWc9XCIjZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxGYWNlYm9va0ljb24gc2l6ZT17MjB9IHJvdW5kPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgIDwvRmFjZWJvb2tTaGFyZUJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8aDE+V2VsY29tZSB0byBBcHB5Vm90ZS4uLjwvaDE+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEFsbC1pbi1vbmUgcGxhdGZvcm0gd2hlcmUgeW91IGNhbiBlbnRlciB5b3VyIHByZWRpY3Rpb25zIGFzIHRvXG4gICAgICAgICAgICAgICAgd2hvIHdpbGwgd2luIGFuIGVsZWN0aW9uLCBhbmQgYmUgdXBkYXRlZCB3aXRoIGxhdGVzdCBhbmQgYmlnZ2VzdFxuICAgICAgICAgICAgICAgIG5ld3Mgb24gdGhlIGVsZWN0aW9ucy5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2Fib3V0XCIgY2xhc3NOYW1lPXtIb21lU3R5bGUubGVhcm5Nb3JlVGV4dH0+XG4gICAgICAgICAgICAgICAgICAmbmJzcDtMZWFybiBtb3JlXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLlZvdGVCdG5Db250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvdm90ZVwiIGNsYXNzTmFtZT17SG9tZVN0eWxlLmhvbWVEaXZJbmZvVm90ZUJ0bn0+XG4gICAgICAgICAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHN0eWxlcy5zaWRlYmFyVG9nZ2xlSWNvbixcbiAgICAgICAgICAgICAgICAgICAgICBzaXplOiAyNCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEdpVm90ZSAvPlxuICAgICAgICAgICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgIHsnICAgJ31Wb3RlIE5vd1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuY291bnREaXZ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuY291bnREaXZDb2x9PlxuICAgICAgICAgICAgICAgICAgPHA+VG90YWwgVXNlcnM6PC9wPlxuICAgICAgICAgICAgICAgICAgPGgxPnt1c2VyQ291bnR9PC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLmNvdW50RGl2Q29sfT5cbiAgICAgICAgICAgICAgICAgIDxwPlRvdGFsIFZvdGVzOjwvcD5cbiAgICAgICAgICAgICAgICAgIDxoMT57dm90ZXNDb3VudH08L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5zdG9yZURpdn0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuU3RvcmVCdXR0b259PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vcGxheVN0b3JlSWNvbi5wbmdcIiBoZWlnaHQ9XCIyNVwiIHdpZHRoPVwiMjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLlN0b3JlQnV0dG9uVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5TdG9yZUJ1dHRvblRleHQxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEdFVCBJVCBPTlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuU3RvcmVCdXR0b25UZXh0Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICBHb29nbGUgUGxheVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5jb21pbmdTb29ufT5Db21pbmcgc29vbi4uLjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5TdG9yZUJ1dHRvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHN0eWxlcy5zaWRlYmFyVG9nZ2xlSWNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDMwLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8UmlBcHBsZUZpbGwgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj57JyAnfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLlN0b3JlQnV0dG9uVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0hvbWVTdHlsZS5TdG9yZUJ1dHRvblRleHQxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEdFVCBJVCBPTlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuU3RvcmVCdXR0b25UZXh0Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAgU3RvcmVcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtIb21lU3R5bGUuY29taW5nU29vbn0+Q29taW5nIHNvb24uLi48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17SG9tZVN0eWxlLmhvbWVEaXZTdmd9PlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9ob21lLnBuZ1wiIGFsdD1cIkhvbWVsb2dvXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJyxcbiAgICAgICAgICAgICAgICAnUm9ib3RvJywgJ094eWdlbicsICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsXG4gICAgICAgICAgICAgICAgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI19fbmV4dC1wcmVyZW5kZXItaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9