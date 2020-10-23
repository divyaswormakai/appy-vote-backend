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
var _jsxFileName = "D:\\Next\\nextjs-blog\\pages\\charts.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const Charts = () => {
  _s();

  const {
    0: ageData,
    1: setageData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let tempData = {
      labels: ['18-30', '30-50', '50+'],
      datasets: [{
        // data[0] for US, data[1] for all other countries
        label: 'US',
        data: [617594, 181045, 55505],
        backgroundColor: ['rgba(0, 99, 132, 1)', 'rgba(255, 99, 132, 1)', 'rgba(0, 255, 132, 1)', 'rgba(150, 99, 0, 1)']
      }]
    };
    setageData(tempData);
  }, []);
  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.App,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.mainContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.circle1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.circle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_pages_charts_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.chartDiv,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, ageData ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: _styles_pages_charts_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.chartDivDougnut,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "Votes according to age group"), __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Doughnut"], {
    data: ageData,
    options: {
      legend: {
        display: true,
        position: 'right'
      },
      responsive: false,
      maintainAspectRatio: true
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _styles_pages_charts_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.chartDivBubble,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, "Votes according to states"), __jsx(_weknow_react_bubble_chart_d3__WEBPACK_IMPORTED_MODULE_3___default.a, {
    graph: {
      zoom: 1,
      offsetX: -0.05,
      offsetY: -0.01
    },
    width: 1000,
    height: 1000,
    padding: 10 // optional value, number that set the padding between bubbles
    ,
    showLegend: false // optional value, pass false to disable the legend.
    ,
    valueFont: {
      family: 'Arial',
      size: 12,
      color: '#fff',
      weight: 'bold'
    },
    labelFont: {
      family: 'Arial',
      size: 16,
      color: '#fff',
      weight: 'bold'
    } //Custom bubble/legend click functions such as searching using the label, redirecting to other page
    ,
    data: bubbleChartData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }))) : null)), __jsx("div", {
    className: "jsx-2919720203",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2919720203",
    __self: undefined
  }, "body{margin:0px;padding:0px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI', 'Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans', 'Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}label{font-size:15px;font-weight:500;}#__next-prerender-indicator{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXGNoYXJ0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RlcsQUFHMEIsQUFTSSxBQUlGLFdBWkQsRUFhZCxFQUprQixRQU40QixRQU85Qyw4SUFOcUMsbUNBQ0Qsa0NBQ3BDIiwiZmlsZSI6IkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXGNoYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEb3VnaG51dCB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcbmltcG9ydCBCdWJibGVDaGFydCBmcm9tICdAd2Vrbm93L3JlYWN0LWJ1YmJsZS1jaGFydC1kMyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi9zdHlsZXMvcGFnZXMvY2hhcnRzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgbWFpblN0eWxlIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5cclxuY29uc3QgQ2hhcnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthZ2VEYXRhLCBzZXRhZ2VEYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRlbXBEYXRhID0ge1xyXG4gICAgICBsYWJlbHM6IFsnMTgtMzAnLCAnMzAtNTAnLCAnNTArJ10sXHJcbiAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy8gZGF0YVswXSBmb3IgVVMsIGRhdGFbMV0gZm9yIGFsbCBvdGhlciBjb3VudHJpZXNcclxuICAgICAgICAgIGxhYmVsOiAnVVMnLFxyXG4gICAgICAgICAgZGF0YTogWzYxNzU5NCwgMTgxMDQ1LCA1NTUwNV0sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgJ3JnYmEoMCwgOTksIDEzMiwgMSknLFxyXG4gICAgICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDEpJyxcclxuICAgICAgICAgICAgJ3JnYmEoMCwgMjU1LCAxMzIsIDEpJyxcclxuICAgICAgICAgICAgJ3JnYmEoMTUwLCA5OSwgMCwgMSknLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuXHJcbiAgICBzZXRhZ2VEYXRhKHRlbXBEYXRhKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuQXBwfT5cclxuICAgICAgPFNpZGViYXIgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUubWFpbkNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuY2lyY2xlMX0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5jaXJjbGUyfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJ0RGl2fT5cclxuICAgICAgICAgIHthZ2VEYXRhID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcnREaXZEb3VnbnV0fT5cclxuICAgICAgICAgICAgICAgIDxoMj5Wb3RlcyBhY2NvcmRpbmcgdG8gYWdlIGdyb3VwPC9oMj5cclxuICAgICAgICAgICAgICAgIDxEb3VnaG51dFxyXG4gICAgICAgICAgICAgICAgICBkYXRhPXthZ2VEYXRhfVxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJ0RGl2QnViYmxlfT5cclxuICAgICAgICAgICAgICAgIDxoMj5Wb3RlcyBhY2NvcmRpbmcgdG8gc3RhdGVzPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnViYmxlQ2hhcnRcclxuICAgICAgICAgICAgICAgICAgZ3JhcGg9e3tcclxuICAgICAgICAgICAgICAgICAgICB6b29tOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IC0wLjA1LFxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IC0wLjAxLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTAwMH1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDAwfVxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nPXsxMH0gLy8gb3B0aW9uYWwgdmFsdWUsIG51bWJlciB0aGF0IHNldCB0aGUgcGFkZGluZyBiZXR3ZWVuIGJ1YmJsZXNcclxuICAgICAgICAgICAgICAgICAgc2hvd0xlZ2VuZD17ZmFsc2V9IC8vIG9wdGlvbmFsIHZhbHVlLCBwYXNzIGZhbHNlIHRvIGRpc2FibGUgdGhlIGxlZ2VuZC5cclxuICAgICAgICAgICAgICAgICAgdmFsdWVGb250PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFtaWx5OiAnQXJpYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsRm9udD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGZhbWlseTogJ0FyaWFsJyxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiAxNixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvL0N1c3RvbSBidWJibGUvbGVnZW5kIGNsaWNrIGZ1bmN0aW9ucyBzdWNoIGFzIHNlYXJjaGluZyB1c2luZyB0aGUgbGFiZWwsIHJlZGlyZWN0aW5nIHRvIG90aGVyIHBhZ2VcclxuICAgICAgICAgICAgICAgICAgZGF0YT17YnViYmxlQ2hhcnREYXRhfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJyxcclxuICAgICAgICAgICAgICAgICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJyxcclxuICAgICAgICAgICAgICAgICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjX19uZXh0LXByZXJlbmRlci1pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgYnViYmxlQ2hhcnREYXRhID0gW1xyXG4gIHsgbGFiZWw6ICdDUk0nLCB2YWx1ZTogMSB9LFxyXG4gIHsgbGFiZWw6ICdBUEknLCB2YWx1ZTogMSB9LFxyXG4gIHsgbGFiZWw6ICdEYXRhJywgdmFsdWU6IDEgfSxcclxuICB7IGxhYmVsOiAnQ29tbWVyY2UnLCB2YWx1ZTogMSB9LFxyXG4gIHsgbGFiZWw6ICdBSScsIHZhbHVlOiAzIH0sXHJcbiAgeyBsYWJlbDogJ01hbmFnZW1lbnQnLCB2YWx1ZTogNSB9LFxyXG4gIHsgbGFiZWw6ICdUZXN0aW5nJywgdmFsdWU6IDYgfSxcclxuICB7IGxhYmVsOiAnTW9iaWxlJywgdmFsdWU6IDkgfSxcclxuICB7IGxhYmVsOiAnQ29udmVyc2lvbicsIHZhbHVlOiA5IH0sXHJcbiAgeyBsYWJlbDogJ01pc2MnLCB2YWx1ZTogMjEgfSxcclxuICB7IGxhYmVsOiAnRGF0YWJhc2VzJywgdmFsdWU6IDIyIH0sXHJcbiAgeyBsYWJlbDogJ0Rldk9wcycsIHZhbHVlOiAyMiB9LFxyXG4gIHsgbGFiZWw6ICdKYXZhc2NyaXB0JywgdmFsdWU6IDI5IH0sXHJcbiAgeyBsYWJlbDogJ0xhbmd1YWdlcyAvIEZyYW1ld29ya3MnLCB2YWx1ZTogMjUgfSxcclxuICB7IGxhYmVsOiAnRnJvbnQgRW5kJywgdmFsdWU6IDI2IH0sXHJcbiAgeyBsYWJlbDogJ0NvbnRlbnQnLCB2YWx1ZTogMjYgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJ0cztcclxuIl19 */\n/*@ sourceURL=D:\\\\Next\\\\nextjs-blog\\\\pages\\\\charts.js */")));
};

_s(Charts, "9lXMh27+ic3YD4Y09NCEuIWNp74=");

_c = Charts;
const bubbleChartData = [{
  label: 'CRM',
  value: 1
}, {
  label: 'API',
  value: 1
}, {
  label: 'Data',
  value: 1
}, {
  label: 'Commerce',
  value: 1
}, {
  label: 'AI',
  value: 3
}, {
  label: 'Management',
  value: 5
}, {
  label: 'Testing',
  value: 6
}, {
  label: 'Mobile',
  value: 9
}, {
  label: 'Conversion',
  value: 9
}, {
  label: 'Misc',
  value: 21
}, {
  label: 'Databases',
  value: 22
}, {
  label: 'DevOps',
  value: 22
}, {
  label: 'Javascript',
  value: 29
}, {
  label: 'Languages / Frameworks',
  value: 25
}, {
  label: 'Front End',
  value: 26
}, {
  label: 'Content',
  value: 26
}];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcnRzLmpzIl0sIm5hbWVzIjpbIkNoYXJ0cyIsImFnZURhdGEiLCJzZXRhZ2VEYXRhIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ0ZW1wRGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJkYXRhIiwiYmFja2dyb3VuZENvbG9yIiwibWFpblN0eWxlIiwiQXBwIiwibWFpbkNvbnRlbnQiLCJjaXJjbGUxIiwiY2lyY2xlMiIsInN0eWxlcyIsImNoYXJ0RGl2IiwiY2hhcnREaXZEb3VnbnV0IiwibGVnZW5kIiwiZGlzcGxheSIsInBvc2l0aW9uIiwicmVzcG9uc2l2ZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJjaGFydERpdkJ1YmJsZSIsInpvb20iLCJvZmZzZXRYIiwib2Zmc2V0WSIsImZhbWlseSIsInNpemUiLCJjb2xvciIsIndlaWdodCIsImJ1YmJsZUNoYXJ0RGF0YSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUFBOztBQUNuQixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBQyx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJQyxRQUFRLEdBQUc7QUFDYkMsWUFBTSxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsS0FBbkIsQ0FESztBQUViQyxjQUFRLEVBQUUsQ0FDUjtBQUNFO0FBQ0FDLGFBQUssRUFBRSxJQUZUO0FBR0VDLFlBQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLEtBQWpCLENBSFI7QUFJRUMsdUJBQWUsRUFBRSxDQUNmLHFCQURlLEVBRWYsdUJBRmUsRUFHZixzQkFIZSxFQUlmLHFCQUplO0FBSm5CLE9BRFE7QUFGRyxLQUFm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RUFJdEI7QUFBRXpCLE9BQUssRUFBRSxVQUFUO0FBQXFCeUIsT0FBSyxFQUFFO0FBQTVCLENBSnNCLEVBS3RCO0FBQUV6QixPQUFLLEVBQUUsSUFBVDtBQUFleUIsT0FBSyxFQUFFO0FBQXRCLENBTHNCLEVBTXRCO0FBQUV6QixPQUFLLEVBQUUsWUFBVDtBQUF1QnlCLE9BQUssRUFBRTtBQUE5QixDQU5zQixFQU90QjtBQUFFekIsT0FBSyxFQUFFLFNBQVQ7QUFBb0J5QixPQUFLLEVBQUU7QUFBM0IsQ0FQc0IsRUFRdEI7QUFBRXpCLE9BQUssRUFBRSxRQUFUO0FBQW1CeUIsT0FBSyxFQUFFO0FBQTFCLENBUnNCLEVBU3RCO0FBQUV6QixPQUFLLEVBQUUsWUFBVDtBQUF1QnlCLE9BQUssRUFBRTtBQUE5QixDQVRzQixFQVV0QjtBQUFFekIsT0FBSyxFQUFFLE1BQVQ7QUFBaUJ5QixPQUFLLEVBQUU7QUFBeEIsQ0FWc0IsRUFXdEI7QUFBRXpCLE9BQUssRUFBRSxXQUFUO0FBQXNCeUIsT0FBSyxFQUFFO0FBQTdCLENBWHNCLEVBWXRCO0FBQUV6QixPQUFLLEVBQUUsUUFBVDtBQUFtQnlCLE9BQUssRUFBRTtBQUExQixDQVpzQixFQWF0QjtBQUFFekIsT0FBSyxFQUFFLFlBQVQ7QUFBdUJ5QixPQUFLLEVBQUU7QUFBOUIsQ0Fic0IsRUFjdEI7QUFBRXpCLE9BQUssRUFBRSx3QkFBVDtBQUFtQ3lCLE9BQUssRUFBRTtBQUExQyxDQWRzQixFQWV0QjtBQUFFekIsT0FBSyxFQUFFLFdBQVQ7QUFBc0J5QixPQUFLLEVBQUU7QUFBN0IsQ0Fmc0IsRUFnQnRCO0FBQUV6QixPQUFLLEVBQUUsU0FBVDtBQUFvQnlCLE9BQUssRUFBRTtBQUEzQixDQWhCc0IsQ0FBeEI7QUFtQmVqQyxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGFydHMuOTJmZjg0NjJmYWVmNjFkYjAxZTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEb3VnaG51dCB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcbmltcG9ydCBCdWJibGVDaGFydCBmcm9tICdAd2Vrbm93L3JlYWN0LWJ1YmJsZS1jaGFydC1kMyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi9zdHlsZXMvcGFnZXMvY2hhcnRzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgbWFpblN0eWxlIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5cclxuY29uc3QgQ2hhcnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthZ2VEYXRhLCBzZXRhZ2VEYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRlbXBEYXRhID0ge1xyXG4gICAgICBsYWJlbHM6IFsnMTgtMzAnLCAnMzAtNTAnLCAnNTArJ10sXHJcbiAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy8gZGF0YVswXSBmb3IgVVMsIGRhdGFbMV0gZm9yIGFsbCBvdGhlciBjb3VudHJpZXNcclxuICAgICAgICAgIGxhYmVsOiAnVVMnLFxyXG4gICAgICAgICAgZGF0YTogWzYxNzU5NCwgMTgxMDQ1LCA1NTUwNV0sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgJ3JnYmEoMCwgOTksIDEzMiwgMSknLFxyXG4gICAgICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDEpJyxcclxuICAgICAgICAgICAgJ3JnYmEoMCwgMjU1LCAxMzIsIDEpJyxcclxuICAgICAgICAgICAgJ3JnYmEoMTUwLCA5OSwgMCwgMSknLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuXHJcbiAgICBzZXRhZ2VEYXRhKHRlbXBEYXRhKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuQXBwfT5cclxuICAgICAgPFNpZGViYXIgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUubWFpbkNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuY2lyY2xlMX0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5jaXJjbGUyfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJ0RGl2fT5cclxuICAgICAgICAgIHthZ2VEYXRhID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcnREaXZEb3VnbnV0fT5cclxuICAgICAgICAgICAgICAgIDxoMj5Wb3RlcyBhY2NvcmRpbmcgdG8gYWdlIGdyb3VwPC9oMj5cclxuICAgICAgICAgICAgICAgIDxEb3VnaG51dFxyXG4gICAgICAgICAgICAgICAgICBkYXRhPXthZ2VEYXRhfVxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJ0RGl2QnViYmxlfT5cclxuICAgICAgICAgICAgICAgIDxoMj5Wb3RlcyBhY2NvcmRpbmcgdG8gc3RhdGVzPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnViYmxlQ2hhcnRcclxuICAgICAgICAgICAgICAgICAgZ3JhcGg9e3tcclxuICAgICAgICAgICAgICAgICAgICB6b29tOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IC0wLjA1LFxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IC0wLjAxLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTAwMH1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDAwfVxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nPXsxMH0gLy8gb3B0aW9uYWwgdmFsdWUsIG51bWJlciB0aGF0IHNldCB0aGUgcGFkZGluZyBiZXR3ZWVuIGJ1YmJsZXNcclxuICAgICAgICAgICAgICAgICAgc2hvd0xlZ2VuZD17ZmFsc2V9IC8vIG9wdGlvbmFsIHZhbHVlLCBwYXNzIGZhbHNlIHRvIGRpc2FibGUgdGhlIGxlZ2VuZC5cclxuICAgICAgICAgICAgICAgICAgdmFsdWVGb250PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFtaWx5OiAnQXJpYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsRm9udD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGZhbWlseTogJ0FyaWFsJyxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiAxNixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvL0N1c3RvbSBidWJibGUvbGVnZW5kIGNsaWNrIGZ1bmN0aW9ucyBzdWNoIGFzIHNlYXJjaGluZyB1c2luZyB0aGUgbGFiZWwsIHJlZGlyZWN0aW5nIHRvIG90aGVyIHBhZ2VcclxuICAgICAgICAgICAgICAgICAgZGF0YT17YnViYmxlQ2hhcnREYXRhfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJyxcclxuICAgICAgICAgICAgICAgICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJyxcclxuICAgICAgICAgICAgICAgICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjX19uZXh0LXByZXJlbmRlci1pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgYnViYmxlQ2hhcnREYXRhID0gW1xyXG4gIHsgbGFiZWw6ICdDUk0nLCB2YWx1ZTogMSB9LFxyXG4gIHsgbGFiZWw6ICdBUEknLCB2YWx1ZTogMSB9LFxyXG4gIHsgbGFiZWw6ICdEYXRhJywgdmFsdWU6IDEgfSxcclxuICB7IGxhYmVsOiAnQ29tbWVyY2UnLCB2YWx1ZTogMSB9LFxyXG4gIHsgbGFiZWw6ICdBSScsIHZhbHVlOiAzIH0sXHJcbiAgeyBsYWJlbDogJ01hbmFnZW1lbnQnLCB2YWx1ZTogNSB9LFxyXG4gIHsgbGFiZWw6ICdUZXN0aW5nJywgdmFsdWU6IDYgfSxcclxuICB7IGxhYmVsOiAnTW9iaWxlJywgdmFsdWU6IDkgfSxcclxuICB7IGxhYmVsOiAnQ29udmVyc2lvbicsIHZhbHVlOiA5IH0sXHJcbiAgeyBsYWJlbDogJ01pc2MnLCB2YWx1ZTogMjEgfSxcclxuICB7IGxhYmVsOiAnRGF0YWJhc2VzJywgdmFsdWU6IDIyIH0sXHJcbiAgeyBsYWJlbDogJ0Rldk9wcycsIHZhbHVlOiAyMiB9LFxyXG4gIHsgbGFiZWw6ICdKYXZhc2NyaXB0JywgdmFsdWU6IDI5IH0sXHJcbiAgeyBsYWJlbDogJ0xhbmd1YWdlcyAvIEZyYW1ld29ya3MnLCB2YWx1ZTogMjUgfSxcclxuICB7IGxhYmVsOiAnRnJvbnQgRW5kJywgdmFsdWU6IDI2IH0sXHJcbiAgeyBsYWJlbDogJ0NvbnRlbnQnLCB2YWx1ZTogMjYgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJ0cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==