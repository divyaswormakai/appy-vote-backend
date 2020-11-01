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
  }, __jsx("div", {
    className: _styles_pages_overview_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.overviewHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Who do you think will win the next election?"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), chartData ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: _styles_pages_overview_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.overviewChartDataContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
      lineNumber: 57,
      columnNumber: 17
    }
  }))) : null), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-2919720203",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2919720203",
    __self: undefined
  }, "body{margin:0px;padding:0px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI', 'Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans', 'Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}label{font-size:15px;font-weight:500;}#__next-prerender-indicator{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXG92ZXJ2aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJGVyxBQUcwQixBQVNJLEFBSUYsV0FaRCxFQWFkLEVBSmtCLFFBTjRCLFFBTzlDLDhJQU5xQyxtQ0FDRCxrQ0FDcEMiLCJmaWxlIjoiRDpcXE5leHRcXG5leHRqcy1ibG9nXFxwYWdlc1xcb3ZlcnZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFyIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuaW1wb3J0IHNvY2tldElPQ2xpZW50IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vc3R5bGVzL3BhZ2VzL292ZXJ2aWV3Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgbWFpblN0eWxlIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuXHJcbmxldCB0ZW1wRGF0YSA9IHtcclxuICBsYWJlbHM6IFsnUHJpbWFyeSBWb3RlcycsICdTZWNvbmRhcnkgVm90ZXMnXSxcclxuICBkYXRhc2V0czogW1xyXG4gICAge1xyXG4gICAgICBsYWJlbDogJ0Jlcm5leSBTYW5kZXJzJyxcclxuICAgICAgZGF0YTogWzIsIDFdLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDk5LCAxMzIsIDEpJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAnRG9uYWxkIEouIFRydW1wJyxcclxuICAgICAgZGF0YTogWzEsIDBdLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAxMzIsIDEpJyxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmNvbnN0IE92ZXJ2aWV3ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgbGV0IHNvY2tldCA9IG51bGw7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBlbmRwb2ludCA9ICdodHRwOi8vYXBweXZvdGUuY29tJztcclxuICAgIC8vIGxldCBlbmRwb2ludCA9ICdodHRwczovL21ha2FpLXRlc3QuaGVyb2t1YXBwLmNvbSc7XHJcbiAgICBzb2NrZXQgPSBzb2NrZXRJT0NsaWVudChlbmRwb2ludCk7XHJcbiAgICBzb2NrZXQub24oJ2dldE92ZXJ2aWV3RGF0YScsIChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBzZXRDaGFydERhdGEoZGF0YSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNvY2tldC5kaXNjb25uZWN0KCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy9KU1ggPT4gSmF2YVNjcmlwdCBTeW50YXhcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5BcHB9PlxyXG4gICAgICA8U2lkZWJhciAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5tYWluQ29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5jaXJjbGUxfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLmNpcmNsZTJ9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXdDaGFydH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJ2aWV3SGVhZGVyfT5cclxuICAgICAgICAgICAgV2hvIGRvIHlvdSB0aGluayB3aWxsIHdpbiB0aGUgbmV4dCBlbGVjdGlvbj9cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICB7Y2hhcnREYXRhID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXdDaGFydERhdGFDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEJhclxyXG4gICAgICAgICAgICAgICAgICBkYXRhPXtjaGFydERhdGF9XHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ0Rpc3BsYXkgVGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0N1cnJlbnQgU3RhdGlzdGljcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250Q29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgeUF4ZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJyxcclxuICAgICAgICAgICAgICAgICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJyxcclxuICAgICAgICAgICAgICAgICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjX19uZXh0LXByZXJlbmRlci1pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3ZlcnZpZXc7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Next\\\\nextjs-blog\\\\pages\\\\overview.js */")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3ZlcnZpZXcuanMiXSwibmFtZXMiOlsidGVtcERhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiZGF0YSIsImJhY2tncm91bmRDb2xvciIsIk92ZXJ2aWV3IiwiY2hhcnREYXRhIiwic2V0Q2hhcnREYXRhIiwidXNlU3RhdGUiLCJzb2NrZXQiLCJ1c2VFZmZlY3QiLCJlbmRwb2ludCIsInNvY2tldElPQ2xpZW50Iiwib24iLCJjb25zb2xlIiwibG9nIiwiZGlzY29ubmVjdCIsIm1haW5TdHlsZSIsIkFwcCIsIm1haW5Db250ZW50IiwiY2lyY2xlMSIsImNpcmNsZTIiLCJzdHlsZXMiLCJvdmVydmlld0NoYXJ0Iiwib3ZlcnZpZXdIZWFkZXIiLCJvdmVydmlld0NoYXJ0RGF0YUNvbnRhaW5lciIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJmb250U2l6ZSIsImZvbnRDb2xvciIsImxlZ2VuZCIsInBvc2l0aW9uIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInNjYWxlcyIsInlBeGVzIiwidGlja3MiLCJiZWdpbkF0WmVybyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxRQUFRLEdBQUc7QUFDYkMsUUFBTSxFQUFFLENBQUMsZUFBRCxFQUFrQixpQkFBbEIsQ0FESztBQUViQyxVQUFRLEVBQUUsQ0FDUjtBQUNFQyxTQUFLLEVBQUUsZ0JBRFQ7QUFFRUMsUUFBSSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FGUjtBQUdFQyxtQkFBZSxFQUFFO0FBSG5CLEdBRFEsRUFNUjtBQUNFRixTQUFLLEVBQUUsaUJBRFQ7QUFFRUMsUUFBSSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FGUjtBQUdFQyxtQkFBZSxFQUFFO0FBSG5CLEdBTlE7QUFGRyxDQUFmOztBQWdCQSxNQUFNQyxRQUFRLEdB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aG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYXIgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5pbXBvcnQgc29ja2V0SU9DbGllbnQgZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi9zdHlsZXMvcGFnZXMvb3ZlcnZpZXcubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBtYWluU3R5bGUgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5cclxubGV0IHRlbXBEYXRhID0ge1xyXG4gIGxhYmVsczogWydQcmltYXJ5IFZvdGVzJywgJ1NlY29uZGFyeSBWb3RlcyddLFxyXG4gIGRhdGFzZXRzOiBbXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAnQmVybmV5IFNhbmRlcnMnLFxyXG4gICAgICBkYXRhOiBbMiwgMV0sXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgOTksIDEzMiwgMSknLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6ICdEb25hbGQgSi4gVHJ1bXAnLFxyXG4gICAgICBkYXRhOiBbMSwgMF0sXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDEzMiwgMSknLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuY29uc3QgT3ZlcnZpZXcgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICBsZXQgc29ja2V0ID0gbnVsbDtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGVuZHBvaW50ID0gJ2h0dHA6Ly9hcHB5dm90ZS5jb20nO1xyXG4gICAgLy8gbGV0IGVuZHBvaW50ID0gJ2h0dHBzOi8vbWFrYWktdGVzdC5oZXJva3VhcHAuY29tJztcclxuICAgIHNvY2tldCA9IHNvY2tldElPQ2xpZW50KGVuZHBvaW50KTtcclxuICAgIHNvY2tldC5vbignZ2V0T3ZlcnZpZXdEYXRhJywgKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHNldENoYXJ0RGF0YShkYXRhKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgc29ja2V0LmRpc2Nvbm5lY3QoKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICAvL0pTWCA9PiBKYXZhU2NyaXB0IFN5bnRheFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLkFwcH0+XHJcbiAgICAgIDxTaWRlYmFyIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLm1haW5Db250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLmNpcmNsZTF9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuY2lyY2xlMn0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVydmlld0NoYXJ0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXdIZWFkZXJ9PlxyXG4gICAgICAgICAgICBXaG8gZG8geW91IHRoaW5rIHdpbGwgd2luIHRoZSBuZXh0IGVsZWN0aW9uP1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIHtjaGFydERhdGEgPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVydmlld0NoYXJ0RGF0YUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8QmFyXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE9e2NoYXJ0RGF0YX1cclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnRGlzcGxheSBUaXRsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ3VycmVudCBTdGF0aXN0aWNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB5QXhlczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLFxyXG4gICAgICAgICAgICAgICAgJ1JvYm90bycsICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLFxyXG4gICAgICAgICAgICAgICAgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNfX25leHQtcHJlcmVuZGVyLWluZGljYXRvciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdmVydmlldztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==