webpackHotUpdate_N_E("pages/overview",{

/***/ "./pages/overview.js":
/*!***************************!*\
  !*** ./pages/overview.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_pages_overview_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../styles/pages/overview.module.css */ "./styles/pages/overview.module.css");
/* harmony import */ var _styles_pages_overview_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_overview_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "D:\\Next\\nextjs-blog\\pages\\overview.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







let tempData = {
  labels: ['Primary Votes', 'Secondary Votes'],
  datasets: [{
    label: 'Berney Sanders',
    data: [2, 1],
    backgroundColor: 'rgba(0, 99, 132, 1)'
  }, {
    label: 'Donald J. Trump',
    data: [1, 0],
    backgroundColor: 'rgba(255, 255, 132, 1)'
  }]
};

const Overview = () => {
  _s();

  const {
    0: chartData,
    1: setChartData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  let socket = null;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let endpoint = 'http://appyvote.com'; // let endpoint = 'https://makai-test.herokuapp.com';

    socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3___default()(endpoint);
    socket.on('getOverviewData', data => {
      console.log(data);
      setChartData(data);
    });
    return () => {
      socket.disconnect();
    };
  }, []); //JSX => JavaScript Syntax

  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.App,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.mainContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.circle1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.circle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_pages_overview_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.overviewChart,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/logo.png",
    height: 100,
    width: 100,
    className: _styles_pages_overview_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sidebarLogo,
    alt: "Logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _styles_pages_overview_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.overviewHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "Who do you think will win the next election?"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }), chartData ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: _styles_pages_overview_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.overviewChartDataContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Bar"], {
    data: chartData,
    options: {
      title: {
        display: 'Display Title',
        text: 'Current Statistics',
        fontSize: 30,
        fontColor: 'black'
      },
      legend: {
        display: true,
        position: 'top'
      },
      // responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }))) : null), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-2919720203",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2919720203",
    __self: undefined
  }, "body{margin:0px;padding:0px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI', 'Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans', 'Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}label{font-size:15px;font-weight:500;}#__next-prerender-indicator{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXG92ZXJ2aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtHVyxBQUcwQixBQVNJLEFBSUYsV0FaRCxFQWFkLEVBSmtCLFFBTjRCLFFBTzlDLDhJQU5xQyxtQ0FDRCxrQ0FDcEMiLCJmaWxlIjoiRDpcXE5leHRcXG5leHRqcy1ibG9nXFxwYWdlc1xcb3ZlcnZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFyIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuaW1wb3J0IHNvY2tldElPQ2xpZW50IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vc3R5bGVzL3BhZ2VzL292ZXJ2aWV3Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgbWFpblN0eWxlIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuXHJcbmxldCB0ZW1wRGF0YSA9IHtcclxuICBsYWJlbHM6IFsnUHJpbWFyeSBWb3RlcycsICdTZWNvbmRhcnkgVm90ZXMnXSxcclxuICBkYXRhc2V0czogW1xyXG4gICAge1xyXG4gICAgICBsYWJlbDogJ0Jlcm5leSBTYW5kZXJzJyxcclxuICAgICAgZGF0YTogWzIsIDFdLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDk5LCAxMzIsIDEpJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAnRG9uYWxkIEouIFRydW1wJyxcclxuICAgICAgZGF0YTogWzEsIDBdLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAxMzIsIDEpJyxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmNvbnN0IE92ZXJ2aWV3ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgbGV0IHNvY2tldCA9IG51bGw7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBlbmRwb2ludCA9ICdodHRwOi8vYXBweXZvdGUuY29tJztcclxuICAgIC8vIGxldCBlbmRwb2ludCA9ICdodHRwczovL21ha2FpLXRlc3QuaGVyb2t1YXBwLmNvbSc7XHJcbiAgICBzb2NrZXQgPSBzb2NrZXRJT0NsaWVudChlbmRwb2ludCk7XHJcbiAgICBzb2NrZXQub24oJ2dldE92ZXJ2aWV3RGF0YScsIChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBzZXRDaGFydERhdGEoZGF0YSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNvY2tldC5kaXNjb25uZWN0KCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy9KU1ggPT4gSmF2YVNjcmlwdCBTeW50YXhcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5BcHB9PlxyXG4gICAgICA8U2lkZWJhciAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5tYWluQ29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5jaXJjbGUxfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLmNpcmNsZTJ9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXdDaGFydH0+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIi9sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICAgICAgICB3aWR0aD17MTAwfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyTG9nb31cclxuICAgICAgICAgICAgYWx0PVwiTG9nb1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVydmlld0hlYWRlcn0+XHJcbiAgICAgICAgICAgIFdobyBkbyB5b3UgdGhpbmsgd2lsbCB3aW4gdGhlIG5leHQgZWxlY3Rpb24/XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAge2NoYXJ0RGF0YSA/IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJ2aWV3Q2hhcnREYXRhQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxCYXJcclxuICAgICAgICAgICAgICAgICAgZGF0YT17Y2hhcnREYXRhfVxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdEaXNwbGF5IFRpdGxlJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDdXJyZW50IFN0YXRpc3RpY3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHlBeGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsXHJcbiAgICAgICAgICAgICAgICAnUm9ib3RvJywgJ094eWdlbicsICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsXHJcbiAgICAgICAgICAgICAgICAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI19fbmV4dC1wcmVyZW5kZXItaW5kaWNhdG9yIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE92ZXJ2aWV3O1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Next\\\\nextjs-blog\\\\pages\\\\overview.js */")));
};

_s(Overview, "qLlYZUJv3crif/0xI+dehEQf0o0=");

_c = Overview;
/* harmony default export */ __webpack_exports__["default"] = (Overview);

var _c;

$RefreshReg$(_c, "Overview");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3ZlcnZpZXcuanMiXSwibmFtZXMiOlsidGVtcERhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiZGF0YSIsImJhY2tncm91bmRDb2xvciIsIk92ZXJ2aWV3IiwiY2hhcnREYXRhIiwic2V0Q2hhcnREYXRhIiwidXNlU3RhdGUiLCJzb2NrZXQiLCJ1c2VFZmZlY3QiLCJlbmRwb2ludCIsInNvY2tldElPQ2xpZW50Iiwib24iLCJjb25zb2xlIiwibG9nIiwiZGlzY29ubmVjdCIsIm1haW5TdHlsZSIsIkFwcCIsIm1haW5Db250ZW50IiwiY2lyY2xlMSIsImNpcmNsZTIiLCJzdHlsZXMiLCJvdmVydmlld0NoYXJ0Iiwic2lkZWJhckxvZ28iLCJvdmVydmlld0hlYWRlciIsIm92ZXJ2aWV3Q2hhcnREYXRhQ29udGFpbmVyIiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCIsImZvbnRTaXplIiwiZm9udENvbG9yIiwibGVnZW5kIiwicG9zaXRpb24iLCJtYWludGFpbkFzcGVjdFJhdGlvIiwic2NhbGVzIiwieUF4ZXMiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFFBQVEsR0FBRztBQUNiQyxRQUFNLEVBQUUsQ0FBQyxlQUFELEVBQWtCLGlCQUFsQixDQURLO0FBRWJDLFVBQVEsRUFBRSxDQUNSO0FBQ0VDLFNBQUssRUFBRSxnQkFEVDtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUZSO0FBR0VDLG1CQUFlLEVBQUU7QUFIbkIsR0FEUSxFQU1SO0FBQ0VGLFNBQUssRUFBRSxpQkFEVDtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUZSO0FBR0VDLG1CQUFlLEVBQUU7QUFIbkIsR0FOUTtBQUZHLENBQWY7O0FBZ0JB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4d0xBdERGLENBREY7QUErRUQsQ0FoR0Q7O0dBQU1qQyxROztLQUFBQSxRO0FBa0dTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vdmVydmlldy5jY2MwNDhiZDY0ZmRiY2FmM2Q4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJhciB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcbmltcG9ydCBzb2NrZXRJT0NsaWVudCBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLy4uL3N0eWxlcy9wYWdlcy9vdmVydmlldy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IG1haW5TdHlsZSBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlYmFyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcblxyXG5sZXQgdGVtcERhdGEgPSB7XHJcbiAgbGFiZWxzOiBbJ1ByaW1hcnkgVm90ZXMnLCAnU2Vjb25kYXJ5IFZvdGVzJ10sXHJcbiAgZGF0YXNldHM6IFtcclxuICAgIHtcclxuICAgICAgbGFiZWw6ICdCZXJuZXkgU2FuZGVycycsXHJcbiAgICAgIGRhdGE6IFsyLCAxXSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCA5OSwgMTMyLCAxKScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogJ0RvbmFsZCBKLiBUcnVtcCcsXHJcbiAgICAgIGRhdGE6IFsxLCAwXSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsIDI1NSwgMTMyLCAxKScsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5jb25zdCBPdmVydmlldyA9ICgpID0+IHtcclxuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoe30pO1xyXG4gIGxldCBzb2NrZXQgPSBudWxsO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgZW5kcG9pbnQgPSAnaHR0cDovL2FwcHl2b3RlLmNvbSc7XHJcbiAgICAvLyBsZXQgZW5kcG9pbnQgPSAnaHR0cHM6Ly9tYWthaS10ZXN0Lmhlcm9rdWFwcC5jb20nO1xyXG4gICAgc29ja2V0ID0gc29ja2V0SU9DbGllbnQoZW5kcG9pbnQpO1xyXG4gICAgc29ja2V0Lm9uKCdnZXRPdmVydmlld0RhdGEnLCAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgc2V0Q2hhcnREYXRhKGRhdGEpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzb2NrZXQuZGlzY29ubmVjdCgpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vSlNYID0+IEphdmFTY3JpcHQgU3ludGF4XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuQXBwfT5cclxuICAgICAgPFNpZGViYXIgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUubWFpbkNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuY2lyY2xlMX0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5jaXJjbGUyfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJ2aWV3Q2hhcnR9PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCIvbG9nby5wbmdcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhckxvZ299XHJcbiAgICAgICAgICAgIGFsdD1cIkxvZ29cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXdIZWFkZXJ9PlxyXG4gICAgICAgICAgICBXaG8gZG8geW91IHRoaW5rIHdpbGwgd2luIHRoZSBuZXh0IGVsZWN0aW9uP1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIHtjaGFydERhdGEgPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVydmlld0NoYXJ0RGF0YUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8QmFyXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE9e2NoYXJ0RGF0YX1cclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnRGlzcGxheSBUaXRsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ3VycmVudCBTdGF0aXN0aWNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB5QXhlczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLFxyXG4gICAgICAgICAgICAgICAgJ1JvYm90bycsICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLFxyXG4gICAgICAgICAgICAgICAgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNfX25leHQtcHJlcmVuZGVyLWluZGljYXRvciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdmVydmlldztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==