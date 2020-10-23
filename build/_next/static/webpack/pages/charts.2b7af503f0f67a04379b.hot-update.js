webpackHotUpdate_N_E("pages/charts",{

/***/ "./pages/charts.js":
/*!*************************!*\
  !*** ./pages/charts.js ***!
  \*************************/
/*! exports provided: Charts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Charts", function() { return Charts; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
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
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(Sidebar, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.mainContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.circle1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.circle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_pages_charts_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.chartDiv,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, ageData ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: _styles_pages_charts_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.chartDivDougnut,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, "Votes according to age group"), __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Doughnut"], {
    data: ageData,
    width: 600,
    height: 500,
    options: {
      legend: {
        display: true,
        position: 'right'
      },
      responsive: true,
      maintainAspectRatio: true
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _styles_pages_charts_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.chartDivBubble,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
      lineNumber: 58,
      columnNumber: 17
    }
  }))) : null)), __jsx("div", {
    className: "jsx-2919720203",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2919720203",
    __self: undefined
  }, "body{margin:0px;padding:0px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI', 'Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans', 'Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}label{font-size:15px;font-weight:500;}#__next-prerender-indicator{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXGNoYXJ0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RlcsQUFHMEIsQUFTSSxBQUlGLFdBWkQsRUFhZCxFQUprQixRQU40QixRQU85Qyw4SUFOcUMsbUNBQ0Qsa0NBQ3BDIiwiZmlsZSI6IkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXGNoYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEb3VnaG51dCB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcbmltcG9ydCBCdWJibGVDaGFydCBmcm9tICdAd2Vrbm93L3JlYWN0LWJ1YmJsZS1jaGFydC1kMyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi9zdHlsZXMvcGFnZXMvY2hhcnRzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgbWFpblN0eWxlIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYXJ0cyA9ICgpID0+IHtcclxuICBjb25zdCBbYWdlRGF0YSwgc2V0YWdlRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB0ZW1wRGF0YSA9IHtcclxuICAgICAgbGFiZWxzOiBbJzE4LTMwJywgJzMwLTUwJywgJzUwKyddLFxyXG4gICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIC8vIGRhdGFbMF0gZm9yIFVTLCBkYXRhWzFdIGZvciBhbGwgb3RoZXIgY291bnRyaWVzXHJcbiAgICAgICAgICBsYWJlbDogJ1VTJyxcclxuICAgICAgICAgIGRhdGE6IFs2MTc1OTQsIDE4MTA0NSwgNTU1MDVdLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICdyZ2JhKDAsIDk5LCAxMzIsIDEpJyxcclxuICAgICAgICAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAxKScsXHJcbiAgICAgICAgICAgICdyZ2JhKDAsIDI1NSwgMTMyLCAxKScsXHJcbiAgICAgICAgICAgICdyZ2JhKDE1MCwgOTksIDAsIDEpJyxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH07XHJcblxyXG4gICAgc2V0YWdlRGF0YSh0ZW1wRGF0YSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLkFwcH0+XHJcbiAgICAgIDxTaWRlYmFyIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLm1haW5Db250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLmNpcmNsZTF9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuY2lyY2xlMn0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFydERpdn0+XHJcbiAgICAgICAgICB7YWdlRGF0YSA/IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJ0RGl2RG91Z251dH0+XHJcbiAgICAgICAgICAgICAgICA8aDI+Vm90ZXMgYWNjb3JkaW5nIHRvIGFnZSBncm91cDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8RG91Z2hudXRcclxuICAgICAgICAgICAgICAgICAgZGF0YT17YWdlRGF0YX1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezYwMH1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFydERpdkJ1YmJsZX0+XHJcbiAgICAgICAgICAgICAgICA8aDI+Vm90ZXMgYWNjb3JkaW5nIHRvIHN0YXRlczwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1YmJsZUNoYXJ0XHJcbiAgICAgICAgICAgICAgICAgIGdyYXBoPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgem9vbTogMSxcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiAtMC4wNSxcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAtMC4wMSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMDB9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwMH1cclxuICAgICAgICAgICAgICAgICAgcGFkZGluZz17MTB9IC8vIG9wdGlvbmFsIHZhbHVlLCBudW1iZXIgdGhhdCBzZXQgdGhlIHBhZGRpbmcgYmV0d2VlbiBidWJibGVzXHJcbiAgICAgICAgICAgICAgICAgIHNob3dMZWdlbmQ9e2ZhbHNlfSAvLyBvcHRpb25hbCB2YWx1ZSwgcGFzcyBmYWxzZSB0byBkaXNhYmxlIHRoZSBsZWdlbmQuXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlRm9udD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGZhbWlseTogJ0FyaWFsJyxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiAxMixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbEZvbnQ9e3tcclxuICAgICAgICAgICAgICAgICAgICBmYW1pbHk6ICdBcmlhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLy9DdXN0b20gYnViYmxlL2xlZ2VuZCBjbGljayBmdW5jdGlvbnMgc3VjaCBhcyBzZWFyY2hpbmcgdXNpbmcgdGhlIGxhYmVsLCByZWRpcmVjdGluZyB0byBvdGhlciBwYWdlXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE9e2J1YmJsZUNoYXJ0RGF0YX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsXHJcbiAgICAgICAgICAgICAgICAnUm9ib3RvJywgJ094eWdlbicsICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsXHJcbiAgICAgICAgICAgICAgICAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI19fbmV4dC1wcmVyZW5kZXItaW5kaWNhdG9yIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGJ1YmJsZUNoYXJ0RGF0YSA9IFtcclxuICB7IGxhYmVsOiAnQ1JNJywgdmFsdWU6IDEgfSxcclxuICB7IGxhYmVsOiAnQVBJJywgdmFsdWU6IDEgfSxcclxuICB7IGxhYmVsOiAnRGF0YScsIHZhbHVlOiAxIH0sXHJcbiAgeyBsYWJlbDogJ0NvbW1lcmNlJywgdmFsdWU6IDEgfSxcclxuICB7IGxhYmVsOiAnQUknLCB2YWx1ZTogMyB9LFxyXG4gIHsgbGFiZWw6ICdNYW5hZ2VtZW50JywgdmFsdWU6IDUgfSxcclxuICB7IGxhYmVsOiAnVGVzdGluZycsIHZhbHVlOiA2IH0sXHJcbiAgeyBsYWJlbDogJ01vYmlsZScsIHZhbHVlOiA5IH0sXHJcbiAgeyBsYWJlbDogJ0NvbnZlcnNpb24nLCB2YWx1ZTogOSB9LFxyXG4gIHsgbGFiZWw6ICdNaXNjJywgdmFsdWU6IDIxIH0sXHJcbiAgeyBsYWJlbDogJ0RhdGFiYXNlcycsIHZhbHVlOiAyMiB9LFxyXG4gIHsgbGFiZWw6ICdEZXZPcHMnLCB2YWx1ZTogMjIgfSxcclxuICB7IGxhYmVsOiAnSmF2YXNjcmlwdCcsIHZhbHVlOiAyOSB9LFxyXG4gIHsgbGFiZWw6ICdMYW5ndWFnZXMgLyBGcmFtZXdvcmtzJywgdmFsdWU6IDI1IH0sXHJcbiAgeyBsYWJlbDogJ0Zyb250IEVuZCcsIHZhbHVlOiAyNiB9LFxyXG4gIHsgbGFiZWw6ICdDb250ZW50JywgdmFsdWU6IDI2IH0sXHJcbl07XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Next\\\\nextjs-blog\\\\pages\\\\charts.js */")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcnRzLmpzIl0sIm5hbWVzIjpbIkNoYXJ0cyIsImFnZURhdGEiLCJzZXRhZ2VEYXRhIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ0ZW1wRGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJkYXRhIiwiYmFja2dyb3VuZENvbG9yIiwibWFpblN0eWxlIiwiQXBwIiwibWFpbkNvbnRlbnQiLCJjaXJjbGUxIiwiY2lyY2xlMiIsInN0eWxlcyIsImNoYXJ0RGl2IiwiY2hhcnREaXZEb3VnbnV0IiwibGVnZW5kIiwiZGlzcGxheSIsInBvc2l0aW9uIiwicmVzcG9uc2l2ZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJjaGFydERpdkJ1YmJsZSIsInpvb20iLCJvZmZzZXRYIiwib2Zmc2V0WSIsImZhbWlseSIsInNpemUiLCJjb2xvciIsIndlaWdodCIsImJ1YmJsZUNoYXJ0RGF0YSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUFBOztBQUMxQixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBQyx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJQyxRQUFRLEdBQUc7QUFDYkMsWUFBTSxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsS0FBbkIsQ0FESztBQUViQyxjQUFRLEVBQUUsQ0FDUjtBQUNFO0FBQ0FDLGFBQUssRUFBRSxJQUZUO0FBR0VDLFlBQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLEtBQWpCLENBSFI7QUFJRUMsdUJBQWUsRUFBRSxDQUNmLHFCQURlLEVBRWYsdUJBRmUsRUFHZixzQkFIZSxFQUlmLHFCQUplO0FBSm5CLE9BRFE7QUFGRyxLQUFmO0FBaUJB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TUFBVDtBQUFpQnlCLE9BQUssRUFBRTtBQUF4QixDQUhzQixFQUl0QjtBQUFFekIsT0FBSyxFQUFFLFVBQVQ7QUFBcUJ5QixPQUFLLEVBQUU7QUFBNUIsQ0FKc0IsRUFLdEI7QUFBRXpCLE9BQUssRUFBRSxJQUFUO0FBQWV5QixPQUFLLEVBQUU7QUFBdEIsQ0FMc0IsRUFNdEI7QUFBRXpCLE9BQUssRUFBRSxZQUFUO0FBQXVCeUIsT0FBSyxFQUFFO0FBQTlCLENBTnNCLEVBT3RCO0FBQUV6QixPQUFLLEVBQUUsU0FBVDtBQUFvQnlCLE9BQUssRUFBRTtBQUEzQixDQVBzQixFQVF0QjtBQUFFekIsT0FBSyxFQUFFLFFBQVQ7QUFBbUJ5QixPQUFLLEVBQUU7QUFBMUIsQ0FSc0IsRUFTdEI7QUFBRXpCLE9BQUssRUFBRSxZQUFUO0FBQXVCeUIsT0FBSyxFQUFFO0FBQTlCLENBVHNCLEVBVXRCO0FBQUV6QixPQUFLLEVBQUUsTUFBVDtBQUFpQnlCLE9BQUssRUFBRTtBQUF4QixDQVZzQixFQVd0QjtBQUFFekIsT0FBSyxFQUFFLFdBQVQ7QUFBc0J5QixPQUFLLEVBQUU7QUFBN0IsQ0FYc0IsRUFZdEI7QUFBRXpCLE9BQUssRUFBRSxRQUFUO0FBQW1CeUIsT0FBSyxFQUFFO0FBQTFCLENBWnNCLEVBYXRCO0FBQUV6QixPQUFLLEVBQUUsWUFBVDtBQUF1QnlCLE9BQUssRUFBRTtBQUE5QixDQWJzQixFQWN0QjtBQUFFekIsT0FBSyxFQUFFLHdCQUFUO0FBQW1DeUIsT0FBSyxFQUFFO0FBQTFDLENBZHNCLEVBZXRCO0FBQUV6QixPQUFLLEVBQUUsV0FBVDtBQUFzQnlCLE9BQUssRUFBRTtBQUE3QixDQWZzQixFQWdCdEI7QUFBRXpCLE9BQUssRUFBRSxTQUFUO0FBQW9CeUIsT0FBSyxFQUFFO0FBQTNCLENBaEJzQixDQUF4QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGFydHMuMmI3YWY1MDNmMGY2N2EwNDM3OWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEb3VnaG51dCB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcbmltcG9ydCBCdWJibGVDaGFydCBmcm9tICdAd2Vrbm93L3JlYWN0LWJ1YmJsZS1jaGFydC1kMyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi9zdHlsZXMvcGFnZXMvY2hhcnRzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgbWFpblN0eWxlIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYXJ0cyA9ICgpID0+IHtcclxuICBjb25zdCBbYWdlRGF0YSwgc2V0YWdlRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB0ZW1wRGF0YSA9IHtcclxuICAgICAgbGFiZWxzOiBbJzE4LTMwJywgJzMwLTUwJywgJzUwKyddLFxyXG4gICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIC8vIGRhdGFbMF0gZm9yIFVTLCBkYXRhWzFdIGZvciBhbGwgb3RoZXIgY291bnRyaWVzXHJcbiAgICAgICAgICBsYWJlbDogJ1VTJyxcclxuICAgICAgICAgIGRhdGE6IFs2MTc1OTQsIDE4MTA0NSwgNTU1MDVdLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICdyZ2JhKDAsIDk5LCAxMzIsIDEpJyxcclxuICAgICAgICAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAxKScsXHJcbiAgICAgICAgICAgICdyZ2JhKDAsIDI1NSwgMTMyLCAxKScsXHJcbiAgICAgICAgICAgICdyZ2JhKDE1MCwgOTksIDAsIDEpJyxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH07XHJcblxyXG4gICAgc2V0YWdlRGF0YSh0ZW1wRGF0YSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLkFwcH0+XHJcbiAgICAgIDxTaWRlYmFyIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLm1haW5Db250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLmNpcmNsZTF9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuY2lyY2xlMn0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFydERpdn0+XHJcbiAgICAgICAgICB7YWdlRGF0YSA/IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJ0RGl2RG91Z251dH0+XHJcbiAgICAgICAgICAgICAgICA8aDI+Vm90ZXMgYWNjb3JkaW5nIHRvIGFnZSBncm91cDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8RG91Z2hudXRcclxuICAgICAgICAgICAgICAgICAgZGF0YT17YWdlRGF0YX1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezYwMH1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFydERpdkJ1YmJsZX0+XHJcbiAgICAgICAgICAgICAgICA8aDI+Vm90ZXMgYWNjb3JkaW5nIHRvIHN0YXRlczwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1YmJsZUNoYXJ0XHJcbiAgICAgICAgICAgICAgICAgIGdyYXBoPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgem9vbTogMSxcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiAtMC4wNSxcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAtMC4wMSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMDB9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwMH1cclxuICAgICAgICAgICAgICAgICAgcGFkZGluZz17MTB9IC8vIG9wdGlvbmFsIHZhbHVlLCBudW1iZXIgdGhhdCBzZXQgdGhlIHBhZGRpbmcgYmV0d2VlbiBidWJibGVzXHJcbiAgICAgICAgICAgICAgICAgIHNob3dMZWdlbmQ9e2ZhbHNlfSAvLyBvcHRpb25hbCB2YWx1ZSwgcGFzcyBmYWxzZSB0byBkaXNhYmxlIHRoZSBsZWdlbmQuXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlRm9udD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGZhbWlseTogJ0FyaWFsJyxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiAxMixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbEZvbnQ9e3tcclxuICAgICAgICAgICAgICAgICAgICBmYW1pbHk6ICdBcmlhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLy9DdXN0b20gYnViYmxlL2xlZ2VuZCBjbGljayBmdW5jdGlvbnMgc3VjaCBhcyBzZWFyY2hpbmcgdXNpbmcgdGhlIGxhYmVsLCByZWRpcmVjdGluZyB0byBvdGhlciBwYWdlXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE9e2J1YmJsZUNoYXJ0RGF0YX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsXHJcbiAgICAgICAgICAgICAgICAnUm9ib3RvJywgJ094eWdlbicsICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsXHJcbiAgICAgICAgICAgICAgICAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI19fbmV4dC1wcmVyZW5kZXItaW5kaWNhdG9yIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGJ1YmJsZUNoYXJ0RGF0YSA9IFtcclxuICB7IGxhYmVsOiAnQ1JNJywgdmFsdWU6IDEgfSxcclxuICB7IGxhYmVsOiAnQVBJJywgdmFsdWU6IDEgfSxcclxuICB7IGxhYmVsOiAnRGF0YScsIHZhbHVlOiAxIH0sXHJcbiAgeyBsYWJlbDogJ0NvbW1lcmNlJywgdmFsdWU6IDEgfSxcclxuICB7IGxhYmVsOiAnQUknLCB2YWx1ZTogMyB9LFxyXG4gIHsgbGFiZWw6ICdNYW5hZ2VtZW50JywgdmFsdWU6IDUgfSxcclxuICB7IGxhYmVsOiAnVGVzdGluZycsIHZhbHVlOiA2IH0sXHJcbiAgeyBsYWJlbDogJ01vYmlsZScsIHZhbHVlOiA5IH0sXHJcbiAgeyBsYWJlbDogJ0NvbnZlcnNpb24nLCB2YWx1ZTogOSB9LFxyXG4gIHsgbGFiZWw6ICdNaXNjJywgdmFsdWU6IDIxIH0sXHJcbiAgeyBsYWJlbDogJ0RhdGFiYXNlcycsIHZhbHVlOiAyMiB9LFxyXG4gIHsgbGFiZWw6ICdEZXZPcHMnLCB2YWx1ZTogMjIgfSxcclxuICB7IGxhYmVsOiAnSmF2YXNjcmlwdCcsIHZhbHVlOiAyOSB9LFxyXG4gIHsgbGFiZWw6ICdMYW5ndWFnZXMgLyBGcmFtZXdvcmtzJywgdmFsdWU6IDI1IH0sXHJcbiAgeyBsYWJlbDogJ0Zyb250IEVuZCcsIHZhbHVlOiAyNiB9LFxyXG4gIHsgbGFiZWw6ICdDb250ZW50JywgdmFsdWU6IDI2IH0sXHJcbl07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=