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
    let endpoint = 'http://appyvote.com';
    console.log('ASDF'); // let endpoint = 'https://makai-test.herokuapp.com';

    socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3___default()(endpoint);
    socket.on('getOverviewData', data => {
      console.log(data);
      console.log('ASDf');
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
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.mainContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.circle1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.circle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_pages_overview_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.overviewChart,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_pages_overview_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.overviewHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, "Who do you think will win the next election?"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }), chartData ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: _styles_pages_overview_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.overviewChartDataContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
      lineNumber: 68,
      columnNumber: 17
    }
  }))) : null), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-2919720203",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2919720203",
    __self: undefined
  }, "body{margin:0px;padding:0px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI', 'Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans', 'Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}label{font-size:15px;font-weight:500;}#__next-prerender-indicator{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXG92ZXJ2aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNHVyxBQUcwQixBQVNJLEFBSUYsV0FaRCxFQWFkLEVBSmtCLFFBTjRCLFFBTzlDLDhJQU5xQyxtQ0FDRCxrQ0FDcEMiLCJmaWxlIjoiRDpcXE5leHRcXG5leHRqcy1ibG9nXFxwYWdlc1xcb3ZlcnZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFyIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuaW1wb3J0IHNvY2tldElPQ2xpZW50IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vc3R5bGVzL3BhZ2VzL292ZXJ2aWV3Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgbWFpblN0eWxlIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuXHJcbmxldCB0ZW1wRGF0YSA9IHtcclxuICBsYWJlbHM6IFsnUHJpbWFyeSBWb3RlcycsICdTZWNvbmRhcnkgVm90ZXMnXSxcclxuICBkYXRhc2V0czogW1xyXG4gICAge1xyXG4gICAgICBsYWJlbDogJ0Jlcm5leSBTYW5kZXJzJyxcclxuICAgICAgZGF0YTogWzIsIDFdLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDk5LCAxMzIsIDEpJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAnRG9uYWxkIEouIFRydW1wJyxcclxuICAgICAgZGF0YTogWzEsIDBdLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAxMzIsIDEpJyxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmNvbnN0IE92ZXJ2aWV3ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGxldCBzb2NrZXQgPSBudWxsO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGVuZHBvaW50ID0gJ2h0dHA6Ly9hcHB5dm90ZS5jb20nO1xyXG4gICAgY29uc29sZS5sb2coJ0FTREYnKTtcclxuICAgIC8vIGxldCBlbmRwb2ludCA9ICdodHRwczovL21ha2FpLXRlc3QuaGVyb2t1YXBwLmNvbSc7XHJcbiAgICBzb2NrZXQgPSBzb2NrZXRJT0NsaWVudChlbmRwb2ludCk7XHJcbiAgICBzb2NrZXQub24oJ2dldE92ZXJ2aWV3RGF0YScsIChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZygnQVNEZicpO1xyXG4gICAgICBzZXRDaGFydERhdGEoZGF0YSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNvY2tldC5kaXNjb25uZWN0KCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy9KU1ggPT4gSmF2YVNjcmlwdCBTeW50YXhcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5BcHB9PlxyXG4gICAgICA8U2lkZWJhciAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5tYWluQ29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5jaXJjbGUxfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLmNpcmNsZTJ9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXdDaGFydH0+XHJcbiAgICAgICAgICB7LyogPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCIvbG9nby5wbmdcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhckxvZ299XHJcbiAgICAgICAgICAgIGFsdD1cIkxvZ29cIlxyXG4gICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJ2aWV3SGVhZGVyfT5cclxuICAgICAgICAgICAgV2hvIGRvIHlvdSB0aGluayB3aWxsIHdpbiB0aGUgbmV4dCBlbGVjdGlvbj9cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICB7Y2hhcnREYXRhID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXdDaGFydERhdGFDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEJhclxyXG4gICAgICAgICAgICAgICAgICBkYXRhPXtjaGFydERhdGF9XHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ0Rpc3BsYXkgVGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0N1cnJlbnQgU3RhdGlzdGljcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250Q29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgeUF4ZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJyxcclxuICAgICAgICAgICAgICAgICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJyxcclxuICAgICAgICAgICAgICAgICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjX19uZXh0LXByZXJlbmRlci1pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3ZlcnZpZXc7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Next\\\\nextjs-blog\\\\pages\\\\overview.js */")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3ZlcnZpZXcuanMiXSwibmFtZXMiOlsidGVtcERhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiZGF0YSIsImJhY2tncm91bmRDb2xvciIsIk92ZXJ2aWV3IiwiY2hhcnREYXRhIiwic2V0Q2hhcnREYXRhIiwidXNlU3RhdGUiLCJzb2NrZXQiLCJ1c2VFZmZlY3QiLCJlbmRwb2ludCIsImNvbnNvbGUiLCJsb2ciLCJzb2NrZXRJT0NsaWVudCIsIm9uIiwiZGlzY29ubmVjdCIsIm1haW5TdHlsZSIsIkFwcCIsIm1haW5Db250ZW50IiwiY2lyY2xlMSIsImNpcmNsZTIiLCJzdHlsZXMiLCJvdmVydmlld0NoYXJ0Iiwib3ZlcnZpZXdIZWFkZXIiLCJvdmVydmlld0NoYXJ0RGF0YUNvbnRhaW5lciIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJmb250U2l6ZSIsImZvbnRDb2xvciIsImxlZ2VuZCIsInBvc2l0aW9uIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInNjYWxlcyIsInlBeGVzIiwidGlja3MiLCJiZWdpbkF0WmVybyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxRQUFRLEdBQUc7QUFDYkMsUUFBTSxFQUFFLENBQUMsZUFBRCxFQUFrQixpQkFBbEIsQ0FESztBQUViQyxVQUFRLEVBQUUsQ0FDUjtBQUNFQyxTQUFLLEVBQUUsZ0JBRFQ7QUFFRUMsUUFBSSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FGUjtBQUdFQyxtQkFBZSxFQUFFO0FBSG5CLEdBRFEsRUFNUjtBQUNFRixTQUFLLEVBQUUsaUJBRFQ7QUFFRUMsUUFBSSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FGUjtBQUdFQyxtQkFBZSxFQUFFO0FBSG5CLEdBTlE7QUFGRyxDQUFmOztBQWdCQSxNQUFNQyxRQUFRLEdB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QUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL292ZXJ2aWV3LmZjY2Q3YmFhODUwOWQwMDEzYTIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFyIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuaW1wb3J0IHNvY2tldElPQ2xpZW50IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vc3R5bGVzL3BhZ2VzL292ZXJ2aWV3Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgbWFpblN0eWxlIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuXHJcbmxldCB0ZW1wRGF0YSA9IHtcclxuICBsYWJlbHM6IFsnUHJpbWFyeSBWb3RlcycsICdTZWNvbmRhcnkgVm90ZXMnXSxcclxuICBkYXRhc2V0czogW1xyXG4gICAge1xyXG4gICAgICBsYWJlbDogJ0Jlcm5leSBTYW5kZXJzJyxcclxuICAgICAgZGF0YTogWzIsIDFdLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDk5LCAxMzIsIDEpJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAnRG9uYWxkIEouIFRydW1wJyxcclxuICAgICAgZGF0YTogWzEsIDBdLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAxMzIsIDEpJyxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmNvbnN0IE92ZXJ2aWV3ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGxldCBzb2NrZXQgPSBudWxsO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGVuZHBvaW50ID0gJ2h0dHA6Ly9hcHB5dm90ZS5jb20nO1xyXG4gICAgY29uc29sZS5sb2coJ0FTREYnKTtcclxuICAgIC8vIGxldCBlbmRwb2ludCA9ICdodHRwczovL21ha2FpLXRlc3QuaGVyb2t1YXBwLmNvbSc7XHJcbiAgICBzb2NrZXQgPSBzb2NrZXRJT0NsaWVudChlbmRwb2ludCk7XHJcbiAgICBzb2NrZXQub24oJ2dldE92ZXJ2aWV3RGF0YScsIChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZygnQVNEZicpO1xyXG4gICAgICBzZXRDaGFydERhdGEoZGF0YSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNvY2tldC5kaXNjb25uZWN0KCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy9KU1ggPT4gSmF2YVNjcmlwdCBTeW50YXhcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5BcHB9PlxyXG4gICAgICA8U2lkZWJhciAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5tYWluQ29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5jaXJjbGUxfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLmNpcmNsZTJ9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXdDaGFydH0+XHJcbiAgICAgICAgICB7LyogPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCIvbG9nby5wbmdcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhckxvZ299XHJcbiAgICAgICAgICAgIGFsdD1cIkxvZ29cIlxyXG4gICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJ2aWV3SGVhZGVyfT5cclxuICAgICAgICAgICAgV2hvIGRvIHlvdSB0aGluayB3aWxsIHdpbiB0aGUgbmV4dCBlbGVjdGlvbj9cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICB7Y2hhcnREYXRhID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXdDaGFydERhdGFDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEJhclxyXG4gICAgICAgICAgICAgICAgICBkYXRhPXtjaGFydERhdGF9XHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ0Rpc3BsYXkgVGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0N1cnJlbnQgU3RhdGlzdGljcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250Q29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgeUF4ZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJyxcclxuICAgICAgICAgICAgICAgICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJyxcclxuICAgICAgICAgICAgICAgICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjX19uZXh0LXByZXJlbmRlci1pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3ZlcnZpZXc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=