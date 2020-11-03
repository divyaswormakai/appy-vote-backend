webpackHotUpdate_N_E("pages/vote",{

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/gi */ "./node_modules/react-icons/gi/index.esm.js");
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/im */ "./node_modules/react-icons/im/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons */ "./node_modules/react-icons/lib/esm/index.js");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
var _jsxFileName = "D:\\Next\\nextjs-blog\\components\\Sidebar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable jsx-a11y/anchor-is-valid */



 //Icons








const Sidebar = () => {
  _s();

  const {
    0: showStat,
    1: setShowStat
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const sidebarRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('resize', () => {
      console.log(window.screen.width, typeof window.screen.width);

      if (window.screen.width >= 768 && sidebarRef.current.style.display === 'none') {
        sidebarRef.current.style.display = 'flex';
        setShowStat(true);
      }
    });
  });

  const toggleShow = () => {
    setShowStat(!showStat);
    let sidebar = sidebarRef.current;

    if (sidebar.style.display === 'none' || sidebar.style.display.length <= 0) {
      sidebar.style.display = 'flex';
    } else {
      sidebar.style.display = 'none';
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("button", {
    onClick: toggleShow,
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.toggleButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, !showStat ? __jsx(react_icons__WEBPACK_IMPORTED_MODULE_7__["IconContext"].Provider, {
    value: {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarToggleIcon,
      color: '#4d4749',
      size: 36
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_8__["BiMenu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  })) : __jsx(react_icons__WEBPACK_IMPORTED_MODULE_7__["IconContext"].Provider, {
    value: {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarToggleIconClose,
      color: '#4d4749',
      size: 36
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdClose"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }))), __jsx("div", {
    ref: sidebarRef,
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/logo.png",
    height: 75,
    width: 75,
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLogo,
    alt: "Logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    exact: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: router.pathname === '/' ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkActive : _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_7__["IconContext"].Provider, {
    value: {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkIcon
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_5__["ImHome3"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  })), "\xA0\xA0", __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }, "Home"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/overview",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: router.pathname === '/overview' ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkActive : _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_7__["IconContext"].Provider, {
    value: {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkIcon
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_5__["ImStatsBars"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  })), "\xA0\xA0", __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }, "Overview"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/vote",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: router.pathname === '/vote' ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkActive : _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_7__["IconContext"].Provider, {
    value: {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkIcon
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx(react_icons_gi__WEBPACK_IMPORTED_MODULE_4__["GiVote"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  })), "\xA0\xA0", __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }, "Vote"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/charts",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: router.pathname === '/charts' ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkActive : _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_7__["IconContext"].Provider, {
    value: {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkIcon
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaChartPie"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  })), "\xA0\xA0", __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 25
    }
  }, "Charts"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/battleground",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: router.pathname === '/battleground' ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkActive : _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_7__["IconContext"].Provider, {
    value: {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkIcon
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, __jsx(react_icons_gi__WEBPACK_IMPORTED_MODULE_4__["GiCrossedSwords"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  })), "\xA0\xA0", __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  }, "BattleGround"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: router.pathname === '/about' ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkActive : _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_7__["IconContext"].Provider, {
    value: {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkIcon
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdContacts"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  })), "\xA0\xA0", __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 25
    }
  }, "About Us"))), __jsx("p", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.policies,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  }, "AppyVote is not affiliated with any political party, candidate or interest group.")));
};

_s(Sidebar, "pzuapiocVzFy0PyeBuBHnnPGIPU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Sidebar;
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

var _c;

$RefreshReg$(_c, "Sidebar");

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

/***/ }),

/***/ "./node_modules/classnames/index.js":
false,

/***/ "./node_modules/debug/src/browser.js":
false,

/***/ "./node_modules/debug/src/debug.js":
false,

/***/ "./node_modules/jsonp/index.js":
false,

/***/ "./node_modules/ms/index.js":
false,

/***/ "./node_modules/react-share/es/EmailIcon.js":
false,

/***/ "./node_modules/react-share/es/EmailShareButton.js":
false,

/***/ "./node_modules/react-share/es/FacebookIcon.js":
false,

/***/ "./node_modules/react-share/es/FacebookMessengerIcon.js":
false,

/***/ "./node_modules/react-share/es/FacebookMessengerShareButton.js":
false,

/***/ "./node_modules/react-share/es/FacebookShareButton.js":
false,

/***/ "./node_modules/react-share/es/FacebookShareCount.js":
false,

/***/ "./node_modules/react-share/es/HatenaIcon.js":
false,

/***/ "./node_modules/react-share/es/HatenaShareButton.js":
false,

/***/ "./node_modules/react-share/es/HatenaShareCount.js":
false,

/***/ "./node_modules/react-share/es/InstapaperIcon.js":
false,

/***/ "./node_modules/react-share/es/InstapaperShareButton.js":
false,

/***/ "./node_modules/react-share/es/LineIcon.js":
false,

/***/ "./node_modules/react-share/es/LineShareButton.js":
false,

/***/ "./node_modules/react-share/es/LinkedinIcon.js":
false,

/***/ "./node_modules/react-share/es/LinkedinShareButton.js":
false,

/***/ "./node_modules/react-share/es/LivejournalIcon.js":
false,

/***/ "./node_modules/react-share/es/LivejournalShareButton.js":
false,

/***/ "./node_modules/react-share/es/MailruIcon.js":
false,

/***/ "./node_modules/react-share/es/MailruShareButton.js":
false,

/***/ "./node_modules/react-share/es/OKIcon.js":
false,

/***/ "./node_modules/react-share/es/OKShareButton.js":
false,

/***/ "./node_modules/react-share/es/OKShareCount.js":
false,

/***/ "./node_modules/react-share/es/PinterestIcon.js":
false,

/***/ "./node_modules/react-share/es/PinterestShareButton.js":
false,

/***/ "./node_modules/react-share/es/PinterestShareCount.js":
false,

/***/ "./node_modules/react-share/es/PocketIcon.js":
false,

/***/ "./node_modules/react-share/es/PocketShareButton.js":
false,

/***/ "./node_modules/react-share/es/RedditIcon.js":
false,

/***/ "./node_modules/react-share/es/RedditShareButton.js":
false,

/***/ "./node_modules/react-share/es/RedditShareCount.js":
false,

/***/ "./node_modules/react-share/es/ShareButton.js":
false,

/***/ "./node_modules/react-share/es/TelegramIcon.js":
false,

/***/ "./node_modules/react-share/es/TelegramShareButton.js":
false,

/***/ "./node_modules/react-share/es/TumblrIcon.js":
false,

/***/ "./node_modules/react-share/es/TumblrShareButton.js":
false,

/***/ "./node_modules/react-share/es/TumblrShareCount.js":
false,

/***/ "./node_modules/react-share/es/TwitterIcon.js":
false,

/***/ "./node_modules/react-share/es/TwitterShareButton.js":
false,

/***/ "./node_modules/react-share/es/VKIcon.js":
false,

/***/ "./node_modules/react-share/es/VKShareButton.js":
false,

/***/ "./node_modules/react-share/es/VKShareCount.js":
false,

/***/ "./node_modules/react-share/es/ViberIcon.js":
false,

/***/ "./node_modules/react-share/es/ViberShareButton.js":
false,

/***/ "./node_modules/react-share/es/WeiboIcon.js":
false,

/***/ "./node_modules/react-share/es/WeiboShareButton.js":
false,

/***/ "./node_modules/react-share/es/WhatsappIcon.js":
false,

/***/ "./node_modules/react-share/es/WhatsappShareButton.js":
false,

/***/ "./node_modules/react-share/es/WorkplaceIcon.js":
false,

/***/ "./node_modules/react-share/es/WorkplaceShareButton.js":
false,

/***/ "./node_modules/react-share/es/hocs/createIcon.js":
false,

/***/ "./node_modules/react-share/es/hocs/createShareButton.js":
false,

/***/ "./node_modules/react-share/es/hocs/createShareCount.js":
false,

/***/ "./node_modules/react-share/es/index.js":
false,

/***/ "./node_modules/react-share/es/utils/assert.js":
false,

/***/ "./node_modules/react-share/es/utils/objectToGetParams.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJzaG93U3RhdCIsInNldFNob3dTdGF0IiwidXNlU3RhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzaWRlYmFyUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJzY3JlZW4iLCJ3aWR0aCIsImN1cnJlbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJ0b2dnbGVTaG93Iiwic2lkZWJhciIsImxlbmd0aCIsInN0eWxlcyIsInRvZ2dsZUJ1dHRvbiIsImNsYXNzTmFtZSIsInNpZGViYXJUb2dnbGVJY29uIiwiY29sb3IiLCJzaXplIiwic2lkZWJhclRvZ2dsZUljb25DbG9zZSIsInNpZGViYXJMb2dvIiwicGF0aG5hbWUiLCJzaWRlYmFyTGlua0FjdGl2ZSIsInNpZGViYXJMaW5rIiwic2lkZWJhckxpbmtJY29uIiwicG9saWNpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxNQUFNO0FBQUE7O0FBQ3BCLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQyxLQUFELENBQXhDO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLFFBQU1DLFVBQVUsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXpCO0FBQ0FDLHlEQUFTLENBQUMsTUFBTTtBQUNkQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLE1BQU07QUFDdENDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFNLENBQUNJLE1BQVAsQ0FBY0MsS0FBMUIsRUFBaUMsT0FBT0ws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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVmQsQ0FERixDQWhFRixFQThFRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUNQNUIsTUFBTSxDQUFDeUIsUUFBUCxLQUFvQixRQUFwQixHQUNJUiw4REFBTSxDQUFDUyxpQkFEWCxHQUVJVCw4REFBTSxDQUFDVSxXQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxNQUFDLHVEQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFBRVIsZUFBUyxFQUFFRiw4REFBTSxDQUFDVztBQUFwQixLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FQRixjQVVjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVmQsQ0FERixDQTlFRixFQTZGRTtBQUFHLGFBQVMsRUFBRVgsOERBQU0sQ0FBQ1ksUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5RkE3RkYsQ0F4QkYsQ0FERjtBQTZIRCxDQXpKRDs7R0FBTWpDLE87VUFFV0sscUQ7OztLQUZYTCxPO0FBMkpTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92b3RlLmExM2Y3YmFiNjUzOWU1ODQ0MmUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG4vL0ljb25zXHJcbmltcG9ydCB7IEdpVm90ZSwgR2lDcm9zc2VkU3dvcmRzIH0gZnJvbSAncmVhY3QtaWNvbnMvZ2knO1xyXG5pbXBvcnQgeyBJbUhvbWUzLCBJbVN0YXRzQmFycyB9IGZyb20gJ3JlYWN0LWljb25zL2ltJztcclxuaW1wb3J0IHsgRmFDaGFydFBpZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgSWNvbkNvbnRleHQgfSBmcm9tICdyZWFjdC1pY29ucyc7XHJcbmltcG9ydCB7IEJpTWVudSB9IGZyb20gJ3JlYWN0LWljb25zL2JpJztcclxuaW1wb3J0IHsgTWRDbG9zZSwgTWRDb250YWN0cyB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dTdGF0LCBzZXRTaG93U3RhdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHNpZGViYXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5zY3JlZW4ud2lkdGgsIHR5cGVvZiB3aW5kb3cuc2NyZWVuLndpZHRoKTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHdpbmRvdy5zY3JlZW4ud2lkdGggPj0gNzY4ICYmXHJcbiAgICAgICAgc2lkZWJhclJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJ1xyXG4gICAgICApIHtcclxuICAgICAgICBzaWRlYmFyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICBzZXRTaG93U3RhdCh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNob3cgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93U3RhdCghc2hvd1N0YXQpO1xyXG4gICAgbGV0IHNpZGViYXIgPSBzaWRlYmFyUmVmLmN1cnJlbnQ7XHJcbiAgICBpZiAoc2lkZWJhci5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgfHwgc2lkZWJhci5zdHlsZS5kaXNwbGF5Lmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVTaG93fSBjbGFzc05hbWU9e3N0eWxlcy50b2dnbGVCdXR0b259PlxyXG4gICAgICAgIHshc2hvd1N0YXQgPyAoXHJcbiAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICBjbGFzc05hbWU6IHN0eWxlcy5zaWRlYmFyVG9nZ2xlSWNvbixcclxuICAgICAgICAgICAgICBjb2xvcjogJyM0ZDQ3NDknLFxyXG4gICAgICAgICAgICAgIHNpemU6IDM2LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8QmlNZW51IC8+XHJcbiAgICAgICAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICBjbGFzc05hbWU6IHN0eWxlcy5zaWRlYmFyVG9nZ2xlSWNvbkNsb3NlLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzRkNDc0OScsXHJcbiAgICAgICAgICAgICAgc2l6ZTogMzYsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZENsb3NlIC8+XHJcbiAgICAgICAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8ZGl2IHJlZj17c2lkZWJhclJlZn0gY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcn0+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiL2xvZ28ucG5nXCJcclxuICAgICAgICAgIGhlaWdodD17NzV9XHJcbiAgICAgICAgICB3aWR0aD17NzV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyTG9nb31cclxuICAgICAgICAgIGFsdD1cIkxvZ29cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBleGFjdD5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSAnLydcclxuICAgICAgICAgICAgICAgID8gc3R5bGVzLnNpZGViYXJMaW5rQWN0aXZlXHJcbiAgICAgICAgICAgICAgICA6IHN0eWxlcy5zaWRlYmFyTGlua1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjbGFzc05hbWU6IHN0eWxlcy5zaWRlYmFyTGlua0ljb24gfX0+XHJcbiAgICAgICAgICAgICAgPEltSG9tZTMgLz5cclxuICAgICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgJm5ic3A7Jm5ic3A7PGxhYmVsPkhvbWU8L2xhYmVsPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL292ZXJ2aWV3XCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gJy9vdmVydmlldydcclxuICAgICAgICAgICAgICAgID8gc3R5bGVzLnNpZGViYXJMaW5rQWN0aXZlXHJcbiAgICAgICAgICAgICAgICA6IHN0eWxlcy5zaWRlYmFyTGlua1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjbGFzc05hbWU6IHN0eWxlcy5zaWRlYmFyTGlua0ljb24gfX0+XHJcbiAgICAgICAgICAgICAgPEltU3RhdHNCYXJzIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICZuYnNwOyZuYnNwOzxsYWJlbD5PdmVydmlldzwvbGFiZWw+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvdm90ZVwiPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09ICcvdm90ZSdcclxuICAgICAgICAgICAgICAgID8gc3R5bGVzLnNpZGViYXJMaW5rQWN0aXZlXHJcbiAgICAgICAgICAgICAgICA6IHN0eWxlcy5zaWRlYmFyTGlua1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjbGFzc05hbWU6IHN0eWxlcy5zaWRlYmFyTGlua0ljb24gfX0+XHJcbiAgICAgICAgICAgICAgPEdpVm90ZSAvPlxyXG4gICAgICAgICAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICAmbmJzcDsmbmJzcDs8bGFiZWw+Vm90ZTwvbGFiZWw+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY2hhcnRzXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gJy9jaGFydHMnXHJcbiAgICAgICAgICAgICAgICA/IHN0eWxlcy5zaWRlYmFyTGlua0FjdGl2ZVxyXG4gICAgICAgICAgICAgICAgOiBzdHlsZXMuc2lkZWJhckxpbmtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY2xhc3NOYW1lOiBzdHlsZXMuc2lkZWJhckxpbmtJY29uIH19PlxyXG4gICAgICAgICAgICAgIDxGYUNoYXJ0UGllIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICZuYnNwOyZuYnNwOzxsYWJlbD5DaGFydHM8L2xhYmVsPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL2JhdHRsZWdyb3VuZFwiPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09ICcvYmF0dGxlZ3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgPyBzdHlsZXMuc2lkZWJhckxpbmtBY3RpdmVcclxuICAgICAgICAgICAgICAgIDogc3R5bGVzLnNpZGViYXJMaW5rXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNsYXNzTmFtZTogc3R5bGVzLnNpZGViYXJMaW5rSWNvbiB9fT5cclxuICAgICAgICAgICAgICA8R2lDcm9zc2VkU3dvcmRzIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICZuYnNwOyZuYnNwOzxsYWJlbD5CYXR0bGVHcm91bmQ8L2xhYmVsPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gJy9hYm91dCdcclxuICAgICAgICAgICAgICAgID8gc3R5bGVzLnNpZGViYXJMaW5rQWN0aXZlXHJcbiAgICAgICAgICAgICAgICA6IHN0eWxlcy5zaWRlYmFyTGlua1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjbGFzc05hbWU6IHN0eWxlcy5zaWRlYmFyTGlua0ljb24gfX0+XHJcbiAgICAgICAgICAgICAgPE1kQ29udGFjdHMgLz5cclxuICAgICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgJm5ic3A7Jm5ic3A7PGxhYmVsPkFib3V0IFVzPC9sYWJlbD5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBvbGljaWVzfT5cclxuICAgICAgICAgIEFwcHlWb3RlIGlzIG5vdCBhZmZpbGlhdGVkIHdpdGggYW55IHBvbGl0aWNhbCBwYXJ0eSwgY2FuZGlkYXRlIG9yXHJcbiAgICAgICAgICBpbnRlcmVzdCBncm91cC5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=