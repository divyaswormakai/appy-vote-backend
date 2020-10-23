webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/gi */ "./node_modules/react-icons/gi/index.esm.js");
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/im */ "./node_modules/react-icons/im/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons */ "./node_modules/react-icons/lib/esm/index.js");
var _s = $RefreshSig$(),
    _jsxFileName = "D:\\Next\\nextjs-blog\\components\\Sidebar.js",
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable jsx-a11y/anchor-is-valid */



 //Icons






const useQuery = () => {
  _s();

  return new URLSearchParams(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useLocation"])().search);
};

_s(useQuery, "EuD9q2dZ34PfN/QO2OBhBzeMxmY=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useLocation"]];
});

const Sidebar = () => {
  _s2();

  let query = useQuery();
  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/logo.png",
    height: 100,
    width: 100,
    className: "sidebar-logo",
    alt: "Logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    activeClassName: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkActive,
    exact: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_7__["IconContext"].Provider, {
    value: {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkIcon
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_5__["ImHome3"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  })), "\xA0\xA0", __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 23
    }
  }, "Home"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/overview",
    activeClassName: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_7__["IconContext"].Provider, {
    value: {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkIcon
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_5__["ImStatsBars"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  })), "\xA0\xA0", __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 23
    }
  }, "Overview"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/vote",
    activeClassName: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_7__["IconContext"].Provider, {
    value: {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkIcon
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx(react_icons_gi__WEBPACK_IMPORTED_MODULE_4__["GiVote"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  })), "\xA0\xA0", __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 23
    }
  }, "Vote"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/charts",
    activeClassName: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_7__["IconContext"].Provider, {
    value: {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkIcon
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaChartPie"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  })), ' ', "\xA0\xA0", __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 23
    }
  }, "Charts"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/battleground",
    activeClassName: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(react_icons__WEBPACK_IMPORTED_MODULE_7__["IconContext"].Provider, {
    value: {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebarLinkIcon
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx(react_icons_gi__WEBPACK_IMPORTED_MODULE_4__["GiCrossedSwords"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  })), "\xA0\xA0", __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 23
    }
  }, "BattleGround"))));
};

_s2(Sidebar, "c7fxJWDO4uMGjIdKMJSj1aiS9wg=", false, function () {
  return [useQuery];
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzIl0sIm5hbWVzIjpbInVzZVF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwidXNlTG9jYXRpb24iLCJzZWFyY2giLCJTaWRlYmFyIiwicXVlcnkiLCJzdHlsZXMiLCJzaWRlYmFyIiwic2lkZWJhckxpbmtBY3RpdmUiLCJzaWRlYmFyTGluayIsImNsYXNzTmFtZSIsInNpZGViYXJMaW5rSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFBQTs7QUFDckIsU0FBTyxJQUFJQyxlQUFKLENBQW9CQyxvRUFBVyxHQUFHQyxNQUFsQyxDQUFQO0FBQ0QsQ0FGRDs7R0FBTUgsUTtVQUN1QkUsNEQ7OztBQUc3QixNQUFNRSxPQUFPLEdBQUcsTUFBTTtBQUFBOztBQUNwQixNQUFJQyxLQUFLLEdBQUdMLFFBQVEsRUFBcEI7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFFTSw4REFBTSxDQUFDQyxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMsV0FETjtBQUVFLFVBQU0sRUFBRSxHQUZWO0FBR0UsU0FBSyxFQUFFLEdBSFQ7QUFJRSxhQUFTLEVBQUMsY0FKWjtBQUtFLE9BQUcsRUFBQyxNQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFlLG1CQUFlLEVBQUVELDhEQUFNLENBQUNFLGlCQUF2QztBQUEwRCxTQUFLLE1BQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRUYsOERBQU0sQ0FBQ0csV0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUVKLDhEQUFNLENBQUNLO0FBQXBCLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLGNBSWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpkLENBREYsQ0FURixFQWlCRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFdBQVg7QUFBdUIsbUJBQWUsRUFBRUwsOERBQU0sQ0FBQ0UsaUJBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRUYsOERBQU0sQ0FBQ0csV0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUVKLDhEQUFNLENBQUNLO0FBQXBCLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLGNBSWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKZCxDQURGLENBakJGLEVBeUJFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsT0FBWDtBQUFtQixtQkFBZSxFQUFFTCw4REFBTSxDQUFDRSxpQkFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFRiw4REFBTSxDQUFDRyxXQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRUosOERBQU0sQ0FBQ0s7QUFBcEIsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsY0FJYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSmQsQ0FERixDQXpCRixFQWlDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFNBQVg7QUFBcUIsbUJBQWUsRUFBRUwsOERBQU0sQ0FBQ0UsaUJBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRUYsOERBQU0sQ0FBQ0csV0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUVKLDhEQUFNLENBQUNLO0FBQXBCLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBRzBCLEdBSDFCLGNBSWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpkLENBREYsQ0FqQ0YsRUF5Q0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxlQUFYO0FBQTJCLG1CQUFlLEVBQUVMLDhEQUFNLENBQUNFLGlCQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVGLDhEQUFNLENBQUNHLFdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFSiw4REFBTSxDQUFDSztBQUFwQixLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixjQUljO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSmQsQ0FERixDQXpDRixDQURGO0FBb0RELENBdkREOztJQUFNUCxPO1VBQ1FKLFE7OztLQURSSSxPO0FBeURTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ODBkN2M1YzIzMGMyNjg4Zjg4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG4vL0ljb25zXHJcbmltcG9ydCB7IEdpVm90ZSwgR2lDcm9zc2VkU3dvcmRzIH0gZnJvbSAncmVhY3QtaWNvbnMvZ2knO1xyXG5pbXBvcnQgeyBJbUhvbWUzLCBJbVN0YXRzQmFycyB9IGZyb20gJ3JlYWN0LWljb25zL2ltJztcclxuaW1wb3J0IHsgRmFDaGFydFBpZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgSWNvbkNvbnRleHQgfSBmcm9tICdyZWFjdC1pY29ucyc7XHJcblxyXG5jb25zdCB1c2VRdWVyeSA9ICgpID0+IHtcclxuICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyh1c2VMb2NhdGlvbigpLnNlYXJjaCk7XHJcbn07XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xyXG4gIGxldCBxdWVyeSA9IHVzZVF1ZXJ5KCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJ9PlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPVwiL2xvZ28ucG5nXCJcclxuICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICB3aWR0aD17MTAwfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInNpZGViYXItbG9nb1wiXHJcbiAgICAgICAgYWx0PVwiTG9nb1wiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL1wiIGFjdGl2ZUNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJMaW5rQWN0aXZlfSBleGFjdD5cclxuICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyTGlua30+XHJcbiAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY2xhc3NOYW1lOiBzdHlsZXMuc2lkZWJhckxpbmtJY29uIH19PlxyXG4gICAgICAgICAgICA8SW1Ib21lMyAvPlxyXG4gICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICZuYnNwOyZuYnNwOzxsYWJlbD5Ib21lPC9sYWJlbD5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9vdmVydmlld1wiIGFjdGl2ZUNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJMaW5rQWN0aXZlfT5cclxuICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyTGlua30+XHJcbiAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY2xhc3NOYW1lOiBzdHlsZXMuc2lkZWJhckxpbmtJY29uIH19PlxyXG4gICAgICAgICAgICA8SW1TdGF0c0JhcnMgLz5cclxuICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAmbmJzcDsmbmJzcDs8bGFiZWw+T3ZlcnZpZXc8L2xhYmVsPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPVwiL3ZvdGVcIiBhY3RpdmVDbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyTGlua0FjdGl2ZX0+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhckxpbmt9PlxyXG4gICAgICAgICAgPEljb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNsYXNzTmFtZTogc3R5bGVzLnNpZGViYXJMaW5rSWNvbiB9fT5cclxuICAgICAgICAgICAgPEdpVm90ZSAvPlxyXG4gICAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICZuYnNwOyZuYnNwOzxsYWJlbD5Wb3RlPC9sYWJlbD5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9jaGFydHNcIiBhY3RpdmVDbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyTGlua0FjdGl2ZX0+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhckxpbmt9PlxyXG4gICAgICAgICAgPEljb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNsYXNzTmFtZTogc3R5bGVzLnNpZGViYXJMaW5rSWNvbiB9fT5cclxuICAgICAgICAgICAgPEZhQ2hhcnRQaWUgLz5cclxuICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+eycgJ31cclxuICAgICAgICAgICZuYnNwOyZuYnNwOzxsYWJlbD5DaGFydHM8L2xhYmVsPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPVwiL2JhdHRsZWdyb3VuZFwiIGFjdGl2ZUNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJMaW5rQWN0aXZlfT5cclxuICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyTGlua30+XHJcbiAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY2xhc3NOYW1lOiBzdHlsZXMuc2lkZWJhckxpbmtJY29uIH19PlxyXG4gICAgICAgICAgICA8R2lDcm9zc2VkU3dvcmRzIC8+XHJcbiAgICAgICAgICA8L0ljb25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgJm5ic3A7Jm5ic3A7PGxhYmVsPkJhdHRsZUdyb3VuZDwvbGFiZWw+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==