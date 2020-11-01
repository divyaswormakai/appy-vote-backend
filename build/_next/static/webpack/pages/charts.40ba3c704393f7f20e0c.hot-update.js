webpackHotUpdate_N_E("pages/charts",{

/***/ "./pages/charts.js":
/*!*************************!*\
  !*** ./pages/charts.js ***!
  \*************************/
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
/* harmony import */ var _weknow_react_bubble_chart_d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @weknow/react-bubble-chart-d3 */ "./node_modules/@weknow/react-bubble-chart-d3/lib/index.js");
/* harmony import */ var _weknow_react_bubble_chart_d3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_weknow_react_bubble_chart_d3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_pages_charts_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../styles/pages/charts.module.css */ "./styles/pages/charts.module.css");
/* harmony import */ var _styles_pages_charts_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_charts_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar.js");
/* harmony import */ var _utils_userService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/userService */ "./utils/userService.js");
var _jsxFileName = "D:\\Next\\nextjs-blog\\pages\\charts.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const Charts = () => {
  _s();

  const {
    0: ageData,
    1: setageData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const {
    0: bubbleData,
    1: setBubbleData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let age = await _utils_userService__WEBPACK_IMPORTED_MODULE_7__["default"].getAgeData();
      setageData(age);
      let bubble = await _utils_userService__WEBPACK_IMPORTED_MODULE_7__["default"].getBubbleData();
      setBubbleData(bubble);
    } catch (err) {
      alert('Error occured getting data:', err);
    }
  };

  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.App,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.mainContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.circle1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.circle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_pages_charts_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.chartDiv,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, ageData ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: _styles_pages_charts_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.chartDivDougnut,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, "Votes according to age group"), __jsx("div", {
    class: _styles_pages_charts_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.doughnutChartContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Doughnut"], {
    data: ageData,
    width: '70%',
    height: '70%',
    options: {
      legend: {
        display: true,
        position: 'right'
      },
      maintainAspectRatio: false
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: _styles_pages_charts_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.chartDivBubble,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, "Votes according to states"), __jsx("div", {
    class: _styles_pages_charts_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bubbleChartContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx(_weknow_react_bubble_chart_d3__WEBPACK_IMPORTED_MODULE_3___default.a, {
    graph: {
      zoom: 1
    },
    width: 400,
    height: 400,
    padding: 10 // optional value, number that set the padding between bubbles
    ,
    showLegend: false // optional value, pass false to disable the legend.
    ,
    valueFont: {
      family: 'Arial',
      size: 12,
      color: '#fff'
    },
    labelFont: {
      family: 'Arial',
      size: 16,
      color: '#fff'
    } //Custom bubble/legend click functions such as searching using the label, redirecting to other page
    ,
    data: bubbleData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 19
    }
  })))) : null), __jsx(Footer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-2919720203",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2919720203",
    __self: undefined
  }, "body{margin:0px;padding:0px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI', 'Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans', 'Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}label{font-size:15px;font-weight:500;}#__next-prerender-indicator{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXGNoYXJ0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRlcsQUFHMEIsQUFTSSxBQUlGLFdBWkQsRUFhZCxFQUprQixRQU40QixRQU85Qyw4SUFOcUMsbUNBQ0Qsa0NBQ3BDIiwiZmlsZSI6IkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXGNoYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEb3VnaG51dCB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcbmltcG9ydCBCdWJibGVDaGFydCBmcm9tICdAd2Vrbm93L3JlYWN0LWJ1YmJsZS1jaGFydC1kMyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi9zdHlsZXMvcGFnZXMvY2hhcnRzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgbWFpblN0eWxlIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5pbXBvcnQgdXNlclNlcnZpY2UgZnJvbSAnLi4vdXRpbHMvdXNlclNlcnZpY2UnO1xyXG5jb25zdCBDaGFydHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FnZURhdGEsIHNldGFnZURhdGFdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtidWJibGVEYXRhLCBzZXRCdWJibGVEYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0RGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBhZ2UgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRBZ2VEYXRhKCk7XHJcbiAgICAgIHNldGFnZURhdGEoYWdlKTtcclxuICAgICAgbGV0IGJ1YmJsZSA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldEJ1YmJsZURhdGEoKTtcclxuICAgICAgc2V0QnViYmxlRGF0YShidWJibGUpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGFsZXJ0KCdFcnJvciBvY2N1cmVkIGdldHRpbmcgZGF0YTonLCBlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLkFwcH0+XHJcbiAgICAgIDxTaWRlYmFyIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLm1haW5Db250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLmNpcmNsZTF9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuY2lyY2xlMn0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFydERpdn0+XHJcbiAgICAgICAgICB7YWdlRGF0YSA/IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJ0RGl2RG91Z251dH0+XHJcbiAgICAgICAgICAgICAgICA8aDI+Vm90ZXMgYWNjb3JkaW5nIHRvIGFnZSBncm91cDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPXtzdHlsZXMuZG91Z2hudXRDaGFydENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxEb3VnaG51dFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2FnZURhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9eyc3MCUnfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17JzcwJSd9XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJ0RGl2QnViYmxlfT5cclxuICAgICAgICAgICAgICAgIDxoMj5Wb3RlcyBhY2NvcmRpbmcgdG8gc3RhdGVzPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9e3N0eWxlcy5idWJibGVDaGFydENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxCdWJibGVDaGFydFxyXG4gICAgICAgICAgICAgICAgICAgIGdyYXBoPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICB6b29tOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwMH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwMH1cclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nPXsxMH0gLy8gb3B0aW9uYWwgdmFsdWUsIG51bWJlciB0aGF0IHNldCB0aGUgcGFkZGluZyBiZXR3ZWVuIGJ1YmJsZXNcclxuICAgICAgICAgICAgICAgICAgICBzaG93TGVnZW5kPXtmYWxzZX0gLy8gb3B0aW9uYWwgdmFsdWUsIHBhc3MgZmFsc2UgdG8gZGlzYWJsZSB0aGUgbGVnZW5kLlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlRm9udD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmFtaWx5OiAnQXJpYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxGb250PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmYW1pbHk6ICdBcmlhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplOiAxNixcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvL0N1c3RvbSBidWJibGUvbGVnZW5kIGNsaWNrIGZ1bmN0aW9ucyBzdWNoIGFzIHNlYXJjaGluZyB1c2luZyB0aGUgbGFiZWwsIHJlZGlyZWN0aW5nIHRvIG90aGVyIHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtidWJibGVEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJyxcclxuICAgICAgICAgICAgICAgICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJyxcclxuICAgICAgICAgICAgICAgICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjX19uZXh0LXByZXJlbmRlci1pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcnRzO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Next\\\\nextjs-blog\\\\pages\\\\charts.js */")));
};

_s(Charts, "sdtWu0p0qbrMHNKb2I5KoGNUO6U=");

_c = Charts;
/* harmony default export */ __webpack_exports__["default"] = (Charts);

var _c;

$RefreshReg$(_c, "Charts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcnRzLmpzIl0sIm5hbWVzIjpbIkNoYXJ0cyIsImFnZURhdGEiLCJzZXRhZ2VEYXRhIiwidXNlU3RhdGUiLCJidWJibGVEYXRhIiwic2V0QnViYmxlRGF0YSIsInVzZUVmZmVjdCIsImdldERhdGEiLCJhZ2UiLCJ1c2VyU2VydmljZSIsImdldEFnZURhdGEiLCJidWJibGUiLCJnZXRCdWJibGVEYXRhIiwiZXJyIiwiYWxlcnQiLCJtYWluU3R5bGUiLCJBcHAiLCJtYWluQ29udGVudCIsImNpcmNsZTEiLCJjaXJjbGUyIiwic3R5bGVzIiwiY2hhcnREaXYiLCJjaGFydERpdkRvdWdudXQiLCJkb3VnaG51dENoYXJ0Q29udGFpbmVyIiwibGVnZW5kIiwiZGlzcGxheSIsInBvc2l0aW9uIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsImNoYXJ0RGl2QnViYmxlIiwiYnViYmxlQ2hhcnRDb250YWluZXIiLCJ6b29tIiwiZmFtaWx5Iiwic2l6ZSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUFBOztBQUNuQixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkYsc0RBQVEsQ0FBQyxFQUFELENBQTVDO0FBQ0FHLHlEQUFTLENBQUMsTUFBTTtBQUNkQyxXQUFPO0FBQ1IsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxRQUFNQSxPQUFPLEdBQUcsWUFBWTtBQUMxQixRQUFJO0FBQ0YsVUFBSUMsR0FBRyxHQUFHLE1BQU1DLDBEQUFXLENBQUNDLFVBQVosRUFBaEI7QUFDQVIsZ0JBQVUsQ0FBQ00sR0FBRCxDQUFWO0FBQ0EsVUFBSUcsTUFBTSxHQUFHLE1BQU1GLDBEQUFXLENBQUNHLGFBQVosRUFBbkI7QUFDQVAsbUJBQWEsQ0FBQ00sTUFBRCxDQUFiO0FBQ0QsS0FMRCxDQUtFLE9BQU9FLEdBQVAsRUFBWTtBQUNaQyxXQUFLLENBQUMsNkJBQUQsRUFBZ0NELEdBQWhDLENBQUw7QUFDRDtBQUNGLEdBVEQ7O0FBV0EsU0FDRTtBQUFLLGFBQVMsRUFBRUUsOERBQVMsQ0FBQ0MsR0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBR0U7QUFBSyxhQUFTLEVBQUVELDhEQUFTLENBQUNFLFdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUYsOERBQVMsQ0FBQ0csT0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVILDhEQUFTLENBQUNJLE9BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUssYUFBUyxFQUFFQyxzRUFBTSxDQUFDQyxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dwQixPQUFPLEdBQ04sbUVBQ0U7QUFBSyxhQUFTLEVBQUVtQixzRUFBTSxDQUFDRSxlQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FERixFQUVFO0FBQUssU0FBSyxFQUFFRixzRUFBTSxDQUFDRyxzQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFDRSxRQUFJLEVBQUV0QixPQURSO0FBRUUsU0FBSyxFQUFFLEtBRlQ7QUFHRSxVQUFNLEVBQUUsS0FIVjtBQUlFLFdBQU8sRUFBRTtBQUNQdUIsWUFBTSxFQUFFO0FBQ05DLGVBQU8sRUFBRSxJQURIO0FBRU5DLGdCQUFRLEVBQUU7QUFGSixPQUREO0FBS1BDLHlCQUFtQixFQUFFO0FBTGQsS0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQURGLEVBa0JFO0FBQUssYUFBUyxFQUFFUCxzRUFBTSxDQUFDUSxjQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERixFQUVFO0FBQUssU0FBSyxFQUFFUixzRUFBTSxDQUFDUyxvQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFDRSxTQUFLLEVBQUU7QUFDTEMsVUFBSSxFQUFFO0FBREQsS0FEVDtBQUlFLFNBQUssRUFBRSxHQUpUO0FBS0UsVUFBTSxFQUFFLEdBTFY7QUFNRSxXQUFPLEVBQUUsRUFOWCxDQU1lO0FBTmY7QUFPRSxjQUFVLEVBQUUsS0FQZCxDQU9xQjtBQVByQjtBQVFFLGFBQVMsRUFBRTtBQUNUQyxZQUFNLEVBQUUsT0FEQztBQUVUQyxVQUFJLEVBQUUsRUFGRztBQUdUQyxXQUFLLEVBQUU7QUFIRSxLQVJiO0FBYUUsYUFBUyxFQUFFO0FBQ1RGLFlBQU0sRUFBRSxPQURDO0FBRVRDLFVBQUksRUFBRSxFQUZHO0FBR1RDLFdBQUssRUFBRTtBQUhFLEtBYmIsQ0FrQkU7QUFsQkY7QUFtQkUsUUFBSSxFQUFFN0IsVUFuQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsQ0FsQkYsQ0FETSxHQThDSixJQS9DTixDQUhGLEVBb0RFLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcERGLENBSEYsRUEwREU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGczTEExREYsQ0FERjtBQW1GRCxDQXJHRDs7R0FBTUosTTs7S0FBQUEsTTtBQXVHU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhcnRzLjQwYmEzYzcwNDM5M2Y3ZjIwZTBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRG91Z2hudXQgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5pbXBvcnQgQnViYmxlQ2hhcnQgZnJvbSAnQHdla25vdy9yZWFjdC1idWJibGUtY2hhcnQtZDMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vc3R5bGVzL3BhZ2VzL2NoYXJ0cy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IG1haW5TdHlsZSBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlYmFyJztcclxuaW1wb3J0IHVzZXJTZXJ2aWNlIGZyb20gJy4uL3V0aWxzL3VzZXJTZXJ2aWNlJztcclxuY29uc3QgQ2hhcnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthZ2VEYXRhLCBzZXRhZ2VEYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbYnViYmxlRGF0YSwgc2V0QnViYmxlRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgYWdlID0gYXdhaXQgdXNlclNlcnZpY2UuZ2V0QWdlRGF0YSgpO1xyXG4gICAgICBzZXRhZ2VEYXRhKGFnZSk7XHJcbiAgICAgIGxldCBidWJibGUgPSBhd2FpdCB1c2VyU2VydmljZS5nZXRCdWJibGVEYXRhKCk7XHJcbiAgICAgIHNldEJ1YmJsZURhdGEoYnViYmxlKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBhbGVydCgnRXJyb3Igb2NjdXJlZCBnZXR0aW5nIGRhdGE6JywgZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5BcHB9PlxyXG4gICAgICA8U2lkZWJhciAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5tYWluQ29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5jaXJjbGUxfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLmNpcmNsZTJ9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcnREaXZ9PlxyXG4gICAgICAgICAge2FnZURhdGEgPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFydERpdkRvdWdudXR9PlxyXG4gICAgICAgICAgICAgICAgPGgyPlZvdGVzIGFjY29yZGluZyB0byBhZ2UgZ3JvdXA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz17c3R5bGVzLmRvdWdobnV0Q2hhcnRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8RG91Z2hudXRcclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXthZ2VEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsnNzAlJ31cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9eyc3MCUnfVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFydERpdkJ1YmJsZX0+XHJcbiAgICAgICAgICAgICAgICA8aDI+Vm90ZXMgYWNjb3JkaW5nIHRvIHN0YXRlczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPXtzdHlsZXMuYnViYmxlQ2hhcnRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8QnViYmxlQ2hhcnRcclxuICAgICAgICAgICAgICAgICAgICBncmFwaD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgem9vbTogMSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZz17MTB9IC8vIG9wdGlvbmFsIHZhbHVlLCBudW1iZXIgdGhhdCBzZXQgdGhlIHBhZGRpbmcgYmV0d2VlbiBidWJibGVzXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0xlZ2VuZD17ZmFsc2V9IC8vIG9wdGlvbmFsIHZhbHVlLCBwYXNzIGZhbHNlIHRvIGRpc2FibGUgdGhlIGxlZ2VuZC5cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZUZvbnQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGZhbWlseTogJ0FyaWFsJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsRm9udD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmFtaWx5OiAnQXJpYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLy9DdXN0b20gYnViYmxlL2xlZ2VuZCBjbGljayBmdW5jdGlvbnMgc3VjaCBhcyBzZWFyY2hpbmcgdXNpbmcgdGhlIGxhYmVsLCByZWRpcmVjdGluZyB0byBvdGhlciBwYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17YnViYmxlRGF0YX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsXHJcbiAgICAgICAgICAgICAgICAnUm9ib3RvJywgJ094eWdlbicsICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsXHJcbiAgICAgICAgICAgICAgICAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI19fbmV4dC1wcmVyZW5kZXItaW5kaWNhdG9yIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJ0cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==