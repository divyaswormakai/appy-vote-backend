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
    width: 500,
    height: 500,
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
    },
    width: 500,
    height: 500,
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
      size: 15,
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
  }, "body{margin:0px;padding:0px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI', 'Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans', 'Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}label{font-size:15px;font-weight:500;}#__next-prerender-indicator{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXGNoYXJ0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRlcsQUFHMEIsQUFTSSxBQUlGLFdBWkQsRUFhZCxFQUprQixRQU40QixRQU85Qyw4SUFOcUMsbUNBQ0Qsa0NBQ3BDIiwiZmlsZSI6IkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXGNoYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEb3VnaG51dCB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcbmltcG9ydCBCdWJibGVDaGFydCBmcm9tICdAd2Vrbm93L3JlYWN0LWJ1YmJsZS1jaGFydC1kMyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi9zdHlsZXMvcGFnZXMvY2hhcnRzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgbWFpblN0eWxlIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5cclxuY29uc3QgQ2hhcnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthZ2VEYXRhLCBzZXRhZ2VEYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRlbXBEYXRhID0ge1xyXG4gICAgICBsYWJlbHM6IFsnMTgtMzAnLCAnMzAtNTAnLCAnNTArJ10sXHJcbiAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy8gZGF0YVswXSBmb3IgVVMsIGRhdGFbMV0gZm9yIGFsbCBvdGhlciBjb3VudHJpZXNcclxuICAgICAgICAgIGxhYmVsOiAnVVMnLFxyXG4gICAgICAgICAgZGF0YTogWzYxNzU5NCwgMTgxMDQ1LCA1NTUwNV0sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgJ3JnYmEoMCwgOTksIDEzMiwgMSknLFxyXG4gICAgICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDEpJyxcclxuICAgICAgICAgICAgJ3JnYmEoMCwgMjU1LCAxMzIsIDEpJyxcclxuICAgICAgICAgICAgJ3JnYmEoMTUwLCA5OSwgMCwgMSknLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuXHJcbiAgICBzZXRhZ2VEYXRhKHRlbXBEYXRhKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuQXBwfT5cclxuICAgICAgPFNpZGViYXIgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUubWFpbkNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuY2lyY2xlMX0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5jaXJjbGUyfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJ0RGl2fT5cclxuICAgICAgICAgIHthZ2VEYXRhID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcnREaXZEb3VnbnV0fT5cclxuICAgICAgICAgICAgICAgIDxoMj5Wb3RlcyBhY2NvcmRpbmcgdG8gYWdlIGdyb3VwPC9oMj5cclxuICAgICAgICAgICAgICAgIDxEb3VnaG51dFxyXG4gICAgICAgICAgICAgICAgICBkYXRhPXthZ2VEYXRhfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFydERpdkJ1YmJsZX0+XHJcbiAgICAgICAgICAgICAgICA8aDI+Vm90ZXMgYWNjb3JkaW5nIHRvIHN0YXRlczwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1YmJsZUNoYXJ0XHJcbiAgICAgICAgICAgICAgICAgIGdyYXBoPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgem9vbTogMSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc9ezEwfSAvLyBvcHRpb25hbCB2YWx1ZSwgbnVtYmVyIHRoYXQgc2V0IHRoZSBwYWRkaW5nIGJldHdlZW4gYnViYmxlc1xyXG4gICAgICAgICAgICAgICAgICBzaG93TGVnZW5kPXtmYWxzZX0gLy8gb3B0aW9uYWwgdmFsdWUsIHBhc3MgZmFsc2UgdG8gZGlzYWJsZSB0aGUgbGVnZW5kLlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZUZvbnQ9e3tcclxuICAgICAgICAgICAgICAgICAgICBmYW1pbHk6ICdBcmlhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgbGFiZWxGb250PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFtaWx5OiAnQXJpYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IDE1LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8vQ3VzdG9tIGJ1YmJsZS9sZWdlbmQgY2xpY2sgZnVuY3Rpb25zIHN1Y2ggYXMgc2VhcmNoaW5nIHVzaW5nIHRoZSBsYWJlbCwgcmVkaXJlY3RpbmcgdG8gb3RoZXIgcGFnZVxyXG4gICAgICAgICAgICAgICAgICBkYXRhPXtidWJibGVDaGFydERhdGF9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLFxyXG4gICAgICAgICAgICAgICAgJ1JvYm90bycsICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLFxyXG4gICAgICAgICAgICAgICAgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNfX25leHQtcHJlcmVuZGVyLWluZGljYXRvciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBidWJibGVDaGFydERhdGEgPSBbXHJcbiAgeyBsYWJlbDogJ0NSTScsIHZhbHVlOiAxIH0sXHJcbiAgeyBsYWJlbDogJ0FQSScsIHZhbHVlOiAxIH0sXHJcbiAgeyBsYWJlbDogJ0RhdGEnLCB2YWx1ZTogMSB9LFxyXG4gIHsgbGFiZWw6ICdDb21tZXJjZScsIHZhbHVlOiAxIH0sXHJcbiAgeyBsYWJlbDogJ0FJJywgdmFsdWU6IDMgfSxcclxuICB7IGxhYmVsOiAnTWFuYWdlbWVudCcsIHZhbHVlOiA1IH0sXHJcbiAgeyBsYWJlbDogJ1Rlc3RpbmcnLCB2YWx1ZTogNiB9LFxyXG4gIHsgbGFiZWw6ICdNb2JpbGUnLCB2YWx1ZTogOSB9LFxyXG4gIHsgbGFiZWw6ICdDb252ZXJzaW9uJywgdmFsdWU6IDkgfSxcclxuICB7IGxhYmVsOiAnTWlzYycsIHZhbHVlOiAyMSB9LFxyXG4gIHsgbGFiZWw6ICdEYXRhYmFzZXMnLCB2YWx1ZTogMjIgfSxcclxuICB7IGxhYmVsOiAnRGV2T3BzJywgdmFsdWU6IDIyIH0sXHJcbiAgeyBsYWJlbDogJ0phdmFzY3JpcHQnLCB2YWx1ZTogMjkgfSxcclxuICB7IGxhYmVsOiAnTGFuZ3VhZ2VzJywgdmFsdWU6IDI1IH0sXHJcbiAgeyBsYWJlbDogJ0Zyb250IEVuZCcsIHZhbHVlOiAyNiB9LFxyXG4gIHsgbGFiZWw6ICdDb250ZW50JywgdmFsdWU6IDI2IH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFydHM7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Next\\\\nextjs-blog\\\\pages\\\\charts.js */")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcnRzLmpzIl0sIm5hbWVzIjpbIkNoYXJ0cyIsImFnZURhdGEiLCJzZXRhZ2VEYXRhIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ0ZW1wRGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJkYXRhIiwiYmFja2dyb3VuZENvbG9yIiwibWFpblN0eWxlIiwiQXBwIiwibWFpbkNvbnRlbnQiLCJjaXJjbGUxIiwiY2lyY2xlMiIsInN0eWxlcyIsImNoYXJ0RGl2IiwiY2hhcnREaXZEb3VnbnV0IiwibGVnZW5kIiwiZGlzcGxheSIsInBvc2l0aW9uIiwicmVzcG9uc2l2ZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJjaGFydERpdkJ1YmJsZSIsInpvb20iLCJmYW1pbHkiLCJzaXplIiwiY29sb3IiLCJidWJibGVDaGFydERhdGEiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFBQTs7QUFDbkIsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLEVBQUQsQ0FBdEM7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSUMsUUFBUSxHQUFHO0FBQ2JDLFlBQU0sRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLEtBQW5CLENBREs7QUFFYkMsY0FBUSxFQUFFLENBQ1I7QUFDRTtBQUNBQyxhQUFLLEVBQUUsSUFGVDtBQUdFQyxZQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixLQUFqQixDQUhSO0FBSUVDLHVCQUFlLEVBQUUsQ0FDZixxQkFEZSxFQUVmLHVCQUZlLEVBR2Ysc0JBSGUsRUFJZixxQkFKZTtBQUpuQixPQURRO0FBRkcsS0FBZjtBQWlCQVIsY0FBVSxDQUFDRyxRQUFELENBQVY7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QVQ7QUFBZXNCLE9BQUssRUFBRTtBQUF0QixDQUxzQixFQU10QjtBQUFFdEIsT0FBSyxFQUFFLFlBQVQ7QUFBdUJzQixPQUFLLEVBQUU7QUFBOUIsQ0FOc0IsRUFPdEI7QUFBRXRCLE9BQUssRUFBRSxTQUFUO0FBQW9Cc0IsT0FBSyxFQUFFO0FBQTNCLENBUHNCLEVBUXRCO0FBQUV0QixPQUFLLEVBQUUsUUFBVDtBQUFtQnNCLE9BQUssRUFBRTtBQUExQixDQVJzQixFQVN0QjtBQUFFdEIsT0FBSyxFQUFFLFlBQVQ7QUFBdUJzQixPQUFLLEVBQUU7QUFBOUIsQ0FUc0IsRUFVdEI7QUFBRXRCLE9BQUssRUFBRSxNQUFUO0FBQWlCc0IsT0FBSyxFQUFFO0FBQXhCLENBVnNCLEVBV3RCO0FBQUV0QixPQUFLLEVBQUUsV0FBVDtBQUFzQnNCLE9BQUssRUFBRTtBQUE3QixDQVhzQixFQVl0QjtBQUFFdEIsT0FBSyxFQUFFLFFBQVQ7QUFBbUJzQixPQUFLLEVBQUU7QUFBMUIsQ0Fac0IsRUFhdEI7QUFBRXRCLE9BQUssRUFBRSxZQUFUO0FBQXVCc0IsT0FBSyxFQUFFO0FBQTlCLENBYnNCLEVBY3RCO0FBQUV0QixPQUFLLEVBQUUsV0FBVDtBQUFzQnNCLE9BQUssRUFBRTtBQUE3QixDQWRzQixFQWV0QjtBQUFFdEIsT0FBSyxFQUFFLFdBQVQ7QUFBc0JzQixPQUFLLEVBQUU7QUFBN0IsQ0Fmc0IsRUFnQnRCO0FBQUV0QixPQUFLLEVBQUUsU0FBVDtBQUFvQnNCLE9BQUssRUFBRTtBQUEzQixDQWhCc0IsQ0FBeEI7QUFtQmU5QixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGFydHMuYTE3YmYyYTAxNjMwYmQzYzc0ODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEb3VnaG51dCB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcbmltcG9ydCBCdWJibGVDaGFydCBmcm9tICdAd2Vrbm93L3JlYWN0LWJ1YmJsZS1jaGFydC1kMyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi9zdHlsZXMvcGFnZXMvY2hhcnRzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgbWFpblN0eWxlIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5cclxuY29uc3QgQ2hhcnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthZ2VEYXRhLCBzZXRhZ2VEYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRlbXBEYXRhID0ge1xyXG4gICAgICBsYWJlbHM6IFsnMTgtMzAnLCAnMzAtNTAnLCAnNTArJ10sXHJcbiAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy8gZGF0YVswXSBmb3IgVVMsIGRhdGFbMV0gZm9yIGFsbCBvdGhlciBjb3VudHJpZXNcclxuICAgICAgICAgIGxhYmVsOiAnVVMnLFxyXG4gICAgICAgICAgZGF0YTogWzYxNzU5NCwgMTgxMDQ1LCA1NTUwNV0sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgJ3JnYmEoMCwgOTksIDEzMiwgMSknLFxyXG4gICAgICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDEpJyxcclxuICAgICAgICAgICAgJ3JnYmEoMCwgMjU1LCAxMzIsIDEpJyxcclxuICAgICAgICAgICAgJ3JnYmEoMTUwLCA5OSwgMCwgMSknLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuXHJcbiAgICBzZXRhZ2VEYXRhKHRlbXBEYXRhKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuQXBwfT5cclxuICAgICAgPFNpZGViYXIgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUubWFpbkNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuY2lyY2xlMX0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5jaXJjbGUyfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJ0RGl2fT5cclxuICAgICAgICAgIHthZ2VEYXRhID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcnREaXZEb3VnbnV0fT5cclxuICAgICAgICAgICAgICAgIDxoMj5Wb3RlcyBhY2NvcmRpbmcgdG8gYWdlIGdyb3VwPC9oMj5cclxuICAgICAgICAgICAgICAgIDxEb3VnaG51dFxyXG4gICAgICAgICAgICAgICAgICBkYXRhPXthZ2VEYXRhfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFydERpdkJ1YmJsZX0+XHJcbiAgICAgICAgICAgICAgICA8aDI+Vm90ZXMgYWNjb3JkaW5nIHRvIHN0YXRlczwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1YmJsZUNoYXJ0XHJcbiAgICAgICAgICAgICAgICAgIGdyYXBoPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgem9vbTogMSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc9ezEwfSAvLyBvcHRpb25hbCB2YWx1ZSwgbnVtYmVyIHRoYXQgc2V0IHRoZSBwYWRkaW5nIGJldHdlZW4gYnViYmxlc1xyXG4gICAgICAgICAgICAgICAgICBzaG93TGVnZW5kPXtmYWxzZX0gLy8gb3B0aW9uYWwgdmFsdWUsIHBhc3MgZmFsc2UgdG8gZGlzYWJsZSB0aGUgbGVnZW5kLlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZUZvbnQ9e3tcclxuICAgICAgICAgICAgICAgICAgICBmYW1pbHk6ICdBcmlhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgbGFiZWxGb250PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFtaWx5OiAnQXJpYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IDE1LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8vQ3VzdG9tIGJ1YmJsZS9sZWdlbmQgY2xpY2sgZnVuY3Rpb25zIHN1Y2ggYXMgc2VhcmNoaW5nIHVzaW5nIHRoZSBsYWJlbCwgcmVkaXJlY3RpbmcgdG8gb3RoZXIgcGFnZVxyXG4gICAgICAgICAgICAgICAgICBkYXRhPXtidWJibGVDaGFydERhdGF9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLFxyXG4gICAgICAgICAgICAgICAgJ1JvYm90bycsICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLFxyXG4gICAgICAgICAgICAgICAgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNfX25leHQtcHJlcmVuZGVyLWluZGljYXRvciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBidWJibGVDaGFydERhdGEgPSBbXHJcbiAgeyBsYWJlbDogJ0NSTScsIHZhbHVlOiAxIH0sXHJcbiAgeyBsYWJlbDogJ0FQSScsIHZhbHVlOiAxIH0sXHJcbiAgeyBsYWJlbDogJ0RhdGEnLCB2YWx1ZTogMSB9LFxyXG4gIHsgbGFiZWw6ICdDb21tZXJjZScsIHZhbHVlOiAxIH0sXHJcbiAgeyBsYWJlbDogJ0FJJywgdmFsdWU6IDMgfSxcclxuICB7IGxhYmVsOiAnTWFuYWdlbWVudCcsIHZhbHVlOiA1IH0sXHJcbiAgeyBsYWJlbDogJ1Rlc3RpbmcnLCB2YWx1ZTogNiB9LFxyXG4gIHsgbGFiZWw6ICdNb2JpbGUnLCB2YWx1ZTogOSB9LFxyXG4gIHsgbGFiZWw6ICdDb252ZXJzaW9uJywgdmFsdWU6IDkgfSxcclxuICB7IGxhYmVsOiAnTWlzYycsIHZhbHVlOiAyMSB9LFxyXG4gIHsgbGFiZWw6ICdEYXRhYmFzZXMnLCB2YWx1ZTogMjIgfSxcclxuICB7IGxhYmVsOiAnRGV2T3BzJywgdmFsdWU6IDIyIH0sXHJcbiAgeyBsYWJlbDogJ0phdmFzY3JpcHQnLCB2YWx1ZTogMjkgfSxcclxuICB7IGxhYmVsOiAnTGFuZ3VhZ2VzJywgdmFsdWU6IDI1IH0sXHJcbiAgeyBsYWJlbDogJ0Zyb250IEVuZCcsIHZhbHVlOiAyNiB9LFxyXG4gIHsgbGFiZWw6ICdDb250ZW50JywgdmFsdWU6IDI2IH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFydHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=