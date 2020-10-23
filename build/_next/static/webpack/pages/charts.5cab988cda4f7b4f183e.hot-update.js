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
    width: "100vw",
    height: "100vh",
    options: {
      legend: {
        display: true,
        position: 'right'
      },
      responsive: false,
      maintainAspectRatio: false
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
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "Votes according to states"), __jsx(_weknow_react_bubble_chart_d3__WEBPACK_IMPORTED_MODULE_3___default.a, {
    graph: {
      zoom: 1
    } // width={500}
    // height={500}
    ,
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
    data: bubbleChartData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }))) : null)), __jsx("div", {
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
  }, "body{margin:0px;padding:0px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI', 'Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans', 'Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}label{font-size:15px;font-weight:500;}#__next-prerender-indicator{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXGNoYXJ0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRlcsQUFHMEIsQUFTSSxBQUlGLFdBWkQsRUFhZCxFQUprQixRQU40QixRQU85Qyw4SUFOcUMsbUNBQ0Qsa0NBQ3BDIiwiZmlsZSI6IkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXGNoYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEb3VnaG51dCB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcbmltcG9ydCBCdWJibGVDaGFydCBmcm9tICdAd2Vrbm93L3JlYWN0LWJ1YmJsZS1jaGFydC1kMyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi9zdHlsZXMvcGFnZXMvY2hhcnRzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgbWFpblN0eWxlIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5cclxuY29uc3QgQ2hhcnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthZ2VEYXRhLCBzZXRhZ2VEYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRlbXBEYXRhID0ge1xyXG4gICAgICBsYWJlbHM6IFsnMTgtMzAnLCAnMzAtNTAnLCAnNTArJ10sXHJcbiAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy8gZGF0YVswXSBmb3IgVVMsIGRhdGFbMV0gZm9yIGFsbCBvdGhlciBjb3VudHJpZXNcclxuICAgICAgICAgIGxhYmVsOiAnVVMnLFxyXG4gICAgICAgICAgZGF0YTogWzYxNzU5NCwgMTgxMDQ1LCA1NTUwNV0sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgJ3JnYmEoMCwgOTksIDEzMiwgMSknLFxyXG4gICAgICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDEpJyxcclxuICAgICAgICAgICAgJ3JnYmEoMCwgMjU1LCAxMzIsIDEpJyxcclxuICAgICAgICAgICAgJ3JnYmEoMTUwLCA5OSwgMCwgMSknLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuXHJcbiAgICBzZXRhZ2VEYXRhKHRlbXBEYXRhKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuQXBwfT5cclxuICAgICAgPFNpZGViYXIgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUubWFpbkNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuY2lyY2xlMX0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5jaXJjbGUyfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJ0RGl2fT5cclxuICAgICAgICAgIHthZ2VEYXRhID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcnREaXZEb3VnbnV0fT5cclxuICAgICAgICAgICAgICAgIDxoMj5Wb3RlcyBhY2NvcmRpbmcgdG8gYWdlIGdyb3VwPC9oMj5cclxuICAgICAgICAgICAgICAgIDxEb3VnaG51dFxyXG4gICAgICAgICAgICAgICAgICBkYXRhPXthZ2VEYXRhfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMHZ3XCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwdmhcIlxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFydERpdkJ1YmJsZX0+XHJcbiAgICAgICAgICAgICAgICA8aDI+Vm90ZXMgYWNjb3JkaW5nIHRvIHN0YXRlczwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1YmJsZUNoYXJ0XHJcbiAgICAgICAgICAgICAgICAgIGdyYXBoPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgem9vbTogMSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLy8gd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc9ezEwfSAvLyBvcHRpb25hbCB2YWx1ZSwgbnVtYmVyIHRoYXQgc2V0IHRoZSBwYWRkaW5nIGJldHdlZW4gYnViYmxlc1xyXG4gICAgICAgICAgICAgICAgICBzaG93TGVnZW5kPXtmYWxzZX0gLy8gb3B0aW9uYWwgdmFsdWUsIHBhc3MgZmFsc2UgdG8gZGlzYWJsZSB0aGUgbGVnZW5kLlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZUZvbnQ9e3tcclxuICAgICAgICAgICAgICAgICAgICBmYW1pbHk6ICdBcmlhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgbGFiZWxGb250PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFtaWx5OiAnQXJpYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IDE2LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8vQ3VzdG9tIGJ1YmJsZS9sZWdlbmQgY2xpY2sgZnVuY3Rpb25zIHN1Y2ggYXMgc2VhcmNoaW5nIHVzaW5nIHRoZSBsYWJlbCwgcmVkaXJlY3RpbmcgdG8gb3RoZXIgcGFnZVxyXG4gICAgICAgICAgICAgICAgICBkYXRhPXtidWJibGVDaGFydERhdGF9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLFxyXG4gICAgICAgICAgICAgICAgJ1JvYm90bycsICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLFxyXG4gICAgICAgICAgICAgICAgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNfX25leHQtcHJlcmVuZGVyLWluZGljYXRvciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBidWJibGVDaGFydERhdGEgPSBbXHJcbiAgeyBsYWJlbDogJ0NSTScsIHZhbHVlOiAxIH0sXHJcbiAgeyBsYWJlbDogJ0FQSScsIHZhbHVlOiAxIH0sXHJcbiAgeyBsYWJlbDogJ0RhdGEnLCB2YWx1ZTogMSB9LFxyXG4gIHsgbGFiZWw6ICdDb21tZXJjZScsIHZhbHVlOiAxIH0sXHJcbiAgeyBsYWJlbDogJ0FJJywgdmFsdWU6IDMgfSxcclxuICB7IGxhYmVsOiAnTWFuYWdlbWVudCcsIHZhbHVlOiA1IH0sXHJcbiAgeyBsYWJlbDogJ1Rlc3RpbmcnLCB2YWx1ZTogNiB9LFxyXG4gIHsgbGFiZWw6ICdNb2JpbGUnLCB2YWx1ZTogOSB9LFxyXG4gIHsgbGFiZWw6ICdDb252ZXJzaW9uJywgdmFsdWU6IDkgfSxcclxuICB7IGxhYmVsOiAnTWlzYycsIHZhbHVlOiAyMSB9LFxyXG4gIHsgbGFiZWw6ICdEYXRhYmFzZXMnLCB2YWx1ZTogMjIgfSxcclxuICB7IGxhYmVsOiAnRGV2T3BzJywgdmFsdWU6IDIyIH0sXHJcbiAgeyBsYWJlbDogJ0phdmFzY3JpcHQnLCB2YWx1ZTogMjkgfSxcclxuICB7IGxhYmVsOiAnTGFuZ3VhZ2VzJywgdmFsdWU6IDI1IH0sXHJcbiAgeyBsYWJlbDogJ0Zyb250IEVuZCcsIHZhbHVlOiAyNiB9LFxyXG4gIHsgbGFiZWw6ICdDb250ZW50JywgdmFsdWU6IDI2IH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFydHM7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Next\\\\nextjs-blog\\\\pages\\\\charts.js */")));
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
  label: 'Languages',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcnRzLmpzIl0sIm5hbWVzIjpbIkNoYXJ0cyIsImFnZURhdGEiLCJzZXRhZ2VEYXRhIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ0ZW1wRGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJkYXRhIiwiYmFja2dyb3VuZENvbG9yIiwibWFpblN0eWxlIiwiQXBwIiwibWFpbkNvbnRlbnQiLCJjaXJjbGUxIiwiY2lyY2xlMiIsInN0eWxlcyIsImNoYXJ0RGl2IiwiY2hhcnREaXZEb3VnbnV0IiwibGVnZW5kIiwiZGlzcGxheSIsInBvc2l0aW9uIiwicmVzcG9uc2l2ZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJjaGFydERpdkJ1YmJsZSIsInpvb20iLCJmYW1pbHkiLCJzaXplIiwiY29sb3IiLCJidWJibGVDaGFydERhdGEiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFBQTs7QUFDbkIsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLEVBQUQsQ0FBdEM7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSUMsUUFBUSxHQUFHO0FBQ2JDLFlBQU0sRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLEtBQW5CLENBREs7QUFFYkMsY0FBUSxFQUFFLENBQ1I7QUFDRTtBQUNBQyxhQUFLLEVBQUUsSUFGVDtBQUdFQyxZQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixLQUFqQixDQUhSO0FBSUVDLHVCQUFlLEVBQUUsQ0FDZixxQkFEZSxFQUVmLHVCQUZlLEVBR2Ysc0JBSGUsRUFJZixxQkFKZTtBQUpuQixPQURRO0FBRkcsS0FBZjtBQWlCQVIsY0FBVSxDQUFDRyxRQUFELENBQVY7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LENBTHNCLEVBTXRCO0FBQUV0QixPQUFLLEVBQUUsWUFBVDtBQUF1QnNCLE9BQUssRUFBRTtBQUE5QixDQU5zQixFQU90QjtBQUFFdEIsT0FBSyxFQUFFLFNBQVQ7QUFBb0JzQixPQUFLLEVBQUU7QUFBM0IsQ0FQc0IsRUFRdEI7QUFBRXRCLE9BQUssRUFBRSxRQUFUO0FBQW1Cc0IsT0FBSyxFQUFFO0FBQTFCLENBUnNCLEVBU3RCO0FBQUV0QixPQUFLLEVBQUUsWUFBVDtBQUF1QnNCLE9BQUssRUFBRTtBQUE5QixDQVRzQixFQVV0QjtBQUFFdEIsT0FBSyxFQUFFLE1BQVQ7QUFBaUJzQixPQUFLLEVBQUU7QUFBeEIsQ0FWc0IsRUFXdEI7QUFBRXRCLE9BQUssRUFBRSxXQUFUO0FBQXNCc0IsT0FBSyxFQUFFO0FBQTdCLENBWHNCLEVBWXRCO0FBQUV0QixPQUFLLEVBQUUsUUFBVDtBQUFtQnNCLE9BQUssRUFBRTtBQUExQixDQVpzQixFQWF0QjtBQUFFdEIsT0FBSyxFQUFFLFlBQVQ7QUFBdUJzQixPQUFLLEVBQUU7QUFBOUIsQ0Fic0IsRUFjdEI7QUFBRXRCLE9BQUssRUFBRSxXQUFUO0FBQXNCc0IsT0FBSyxFQUFFO0FBQTdCLENBZHNCLEVBZXRCO0FBQUV0QixPQUFLLEVBQUUsV0FBVDtBQUFzQnNCLE9BQUssRUFBRTtBQUE3QixDQWZzQixFQWdCdEI7QUFBRXRCLE9BQUssRUFBRSxTQUFUO0FBQW9Cc0IsT0FBSyxFQUFFO0FBQTNCLENBaEJzQixDQUF4QjtBQW1CZTlCLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXJ0cy41Y2FiOTg4Y2RhNGY3YjRmMTgzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERvdWdobnV0IH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuaW1wb3J0IEJ1YmJsZUNoYXJ0IGZyb20gJ0B3ZWtub3cvcmVhY3QtYnViYmxlLWNoYXJ0LWQzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLy4uL3N0eWxlcy9wYWdlcy9jaGFydHMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBtYWluU3R5bGUgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcic7XHJcblxyXG5jb25zdCBDaGFydHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FnZURhdGEsIHNldGFnZURhdGFdID0gdXNlU3RhdGUoe30pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdGVtcERhdGEgPSB7XHJcbiAgICAgIGxhYmVsczogWycxOC0zMCcsICczMC01MCcsICc1MCsnXSxcclxuICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAvLyBkYXRhWzBdIGZvciBVUywgZGF0YVsxXSBmb3IgYWxsIG90aGVyIGNvdW50cmllc1xyXG4gICAgICAgICAgbGFiZWw6ICdVUycsXHJcbiAgICAgICAgICBkYXRhOiBbNjE3NTk0LCAxODEwNDUsIDU1NTA1XSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAncmdiYSgwLCA5OSwgMTMyLCAxKScsXHJcbiAgICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMSknLFxyXG4gICAgICAgICAgICAncmdiYSgwLCAyNTUsIDEzMiwgMSknLFxyXG4gICAgICAgICAgICAncmdiYSgxNTAsIDk5LCAwLCAxKScsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG5cclxuICAgIHNldGFnZURhdGEodGVtcERhdGEpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5BcHB9PlxyXG4gICAgICA8U2lkZWJhciAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5tYWluQ29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5jaXJjbGUxfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLmNpcmNsZTJ9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcnREaXZ9PlxyXG4gICAgICAgICAge2FnZURhdGEgPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFydERpdkRvdWdudXR9PlxyXG4gICAgICAgICAgICAgICAgPGgyPlZvdGVzIGFjY29yZGluZyB0byBhZ2UgZ3JvdXA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPERvdWdobnV0XHJcbiAgICAgICAgICAgICAgICAgIGRhdGE9e2FnZURhdGF9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwdndcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDB2aFwiXHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJ0RGl2QnViYmxlfT5cclxuICAgICAgICAgICAgICAgIDxoMj5Wb3RlcyBhY2NvcmRpbmcgdG8gc3RhdGVzPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnViYmxlQ2hhcnRcclxuICAgICAgICAgICAgICAgICAgZ3JhcGg9e3tcclxuICAgICAgICAgICAgICAgICAgICB6b29tOiAxLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvLyB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgcGFkZGluZz17MTB9IC8vIG9wdGlvbmFsIHZhbHVlLCBudW1iZXIgdGhhdCBzZXQgdGhlIHBhZGRpbmcgYmV0d2VlbiBidWJibGVzXHJcbiAgICAgICAgICAgICAgICAgIHNob3dMZWdlbmQ9e2ZhbHNlfSAvLyBvcHRpb25hbCB2YWx1ZSwgcGFzcyBmYWxzZSB0byBkaXNhYmxlIHRoZSBsZWdlbmQuXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlRm9udD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGZhbWlseTogJ0FyaWFsJyxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiAxMixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbEZvbnQ9e3tcclxuICAgICAgICAgICAgICAgICAgICBmYW1pbHk6ICdBcmlhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLy9DdXN0b20gYnViYmxlL2xlZ2VuZCBjbGljayBmdW5jdGlvbnMgc3VjaCBhcyBzZWFyY2hpbmcgdXNpbmcgdGhlIGxhYmVsLCByZWRpcmVjdGluZyB0byBvdGhlciBwYWdlXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE9e2J1YmJsZUNoYXJ0RGF0YX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsXHJcbiAgICAgICAgICAgICAgICAnUm9ib3RvJywgJ094eWdlbicsICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsXHJcbiAgICAgICAgICAgICAgICAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI19fbmV4dC1wcmVyZW5kZXItaW5kaWNhdG9yIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGJ1YmJsZUNoYXJ0RGF0YSA9IFtcclxuICB7IGxhYmVsOiAnQ1JNJywgdmFsdWU6IDEgfSxcclxuICB7IGxhYmVsOiAnQVBJJywgdmFsdWU6IDEgfSxcclxuICB7IGxhYmVsOiAnRGF0YScsIHZhbHVlOiAxIH0sXHJcbiAgeyBsYWJlbDogJ0NvbW1lcmNlJywgdmFsdWU6IDEgfSxcclxuICB7IGxhYmVsOiAnQUknLCB2YWx1ZTogMyB9LFxyXG4gIHsgbGFiZWw6ICdNYW5hZ2VtZW50JywgdmFsdWU6IDUgfSxcclxuICB7IGxhYmVsOiAnVGVzdGluZycsIHZhbHVlOiA2IH0sXHJcbiAgeyBsYWJlbDogJ01vYmlsZScsIHZhbHVlOiA5IH0sXHJcbiAgeyBsYWJlbDogJ0NvbnZlcnNpb24nLCB2YWx1ZTogOSB9LFxyXG4gIHsgbGFiZWw6ICdNaXNjJywgdmFsdWU6IDIxIH0sXHJcbiAgeyBsYWJlbDogJ0RhdGFiYXNlcycsIHZhbHVlOiAyMiB9LFxyXG4gIHsgbGFiZWw6ICdEZXZPcHMnLCB2YWx1ZTogMjIgfSxcclxuICB7IGxhYmVsOiAnSmF2YXNjcmlwdCcsIHZhbHVlOiAyOSB9LFxyXG4gIHsgbGFiZWw6ICdMYW5ndWFnZXMnLCB2YWx1ZTogMjUgfSxcclxuICB7IGxhYmVsOiAnRnJvbnQgRW5kJywgdmFsdWU6IDI2IH0sXHJcbiAgeyBsYWJlbDogJ0NvbnRlbnQnLCB2YWx1ZTogMjYgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJ0cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==