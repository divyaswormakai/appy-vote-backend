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
    // let tempData = {
    //   labels: ['18-30', '30-50', '50+'],
    //   datasets: [
    //     {
    //       // data[0] for US, data[1] for all other countries
    //       label: 'US',
    //       data: [617594, 181045, 55505],
    //       backgroundColor: [
    //         'rgba(0, 99, 132, 1)',
    //         'rgba(255, 99, 132, 1)',
    //         'rgba(0, 255, 132, 1)',
    //         'rgba(150, 99, 0, 1)',
    //       ],
    //     },
    //   ],
    // };
    getData(); // setageData(tempData);
  }, []);

  const getData = async () => {
    try {
      let age = await _utils_userService__WEBPACK_IMPORTED_MODULE_7__["default"].getAgeData(); // let bubble = await userService.getBubbleData();

      console.log(age);
      setageData(age);
    } catch (err) {
      alert('Error occured getting data:', err);
    }
  };

  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.App,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.mainContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.circle1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.circle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_pages_charts_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.chartDiv,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, ageData ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: _styles_pages_charts_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.chartDivDougnut,
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
  }, "Votes according to age group"), __jsx("div", {
    class: _styles_pages_charts_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.doughnutChartContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
      lineNumber: 57,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: _styles_pages_charts_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.chartDivBubble,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "Votes according to states"), __jsx("div", {
    class: _styles_pages_charts_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bubbleChartContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
    data: bubbleChartData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 19
    }
  })))) : null)), __jsx("div", {
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
  }, "body{margin:0px;padding:0px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI', 'Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans', 'Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}label{font-size:15px;font-weight:500;}#__next-prerender-indicator{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXGNoYXJ0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzR1csQUFHMEIsQUFTSSxBQUlGLFdBWkQsRUFhZCxFQUprQixRQU40QixRQU85Qyw4SUFOcUMsbUNBQ0Qsa0NBQ3BDIiwiZmlsZSI6IkQ6XFxOZXh0XFxuZXh0anMtYmxvZ1xccGFnZXNcXGNoYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEb3VnaG51dCB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcbmltcG9ydCBCdWJibGVDaGFydCBmcm9tICdAd2Vrbm93L3JlYWN0LWJ1YmJsZS1jaGFydC1kMyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi9zdHlsZXMvcGFnZXMvY2hhcnRzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgbWFpblN0eWxlIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5pbXBvcnQgdXNlclNlcnZpY2UgZnJvbSAnLi4vdXRpbHMvdXNlclNlcnZpY2UnO1xyXG5jb25zdCBDaGFydHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FnZURhdGEsIHNldGFnZURhdGFdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtidWJibGVEYXRhLCBzZXRCdWJibGVEYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gbGV0IHRlbXBEYXRhID0ge1xyXG4gICAgLy8gICBsYWJlbHM6IFsnMTgtMzAnLCAnMzAtNTAnLCAnNTArJ10sXHJcbiAgICAvLyAgIGRhdGFzZXRzOiBbXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgLy8gZGF0YVswXSBmb3IgVVMsIGRhdGFbMV0gZm9yIGFsbCBvdGhlciBjb3VudHJpZXNcclxuICAgIC8vICAgICAgIGxhYmVsOiAnVVMnLFxyXG4gICAgLy8gICAgICAgZGF0YTogWzYxNzU5NCwgMTgxMDQ1LCA1NTUwNV0sXHJcbiAgICAvLyAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgIC8vICAgICAgICAgJ3JnYmEoMCwgOTksIDEzMiwgMSknLFxyXG4gICAgLy8gICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDEpJyxcclxuICAgIC8vICAgICAgICAgJ3JnYmEoMCwgMjU1LCAxMzIsIDEpJyxcclxuICAgIC8vICAgICAgICAgJ3JnYmEoMTUwLCA5OSwgMCwgMSknLFxyXG4gICAgLy8gICAgICAgXSxcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICBdLFxyXG4gICAgLy8gfTtcclxuICAgIGdldERhdGEoKTtcclxuXHJcbiAgICAvLyBzZXRhZ2VEYXRhKHRlbXBEYXRhKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgYWdlID0gYXdhaXQgdXNlclNlcnZpY2UuZ2V0QWdlRGF0YSgpO1xyXG4gICAgICAvLyBsZXQgYnViYmxlID0gYXdhaXQgdXNlclNlcnZpY2UuZ2V0QnViYmxlRGF0YSgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhhZ2UpO1xyXG4gICAgICBzZXRhZ2VEYXRhKGFnZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgYWxlcnQoJ0Vycm9yIG9jY3VyZWQgZ2V0dGluZyBkYXRhOicsIGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuQXBwfT5cclxuICAgICAgPFNpZGViYXIgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUubWFpbkNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuY2lyY2xlMX0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5jaXJjbGUyfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJ0RGl2fT5cclxuICAgICAgICAgIHthZ2VEYXRhID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcnREaXZEb3VnbnV0fT5cclxuICAgICAgICAgICAgICAgIDxoMj5Wb3RlcyBhY2NvcmRpbmcgdG8gYWdlIGdyb3VwPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9e3N0eWxlcy5kb3VnaG51dENoYXJ0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgPERvdWdobnV0XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17YWdlRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17JzcwJSd9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsnNzAlJ31cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcnREaXZCdWJibGV9PlxyXG4gICAgICAgICAgICAgICAgPGgyPlZvdGVzIGFjY29yZGluZyB0byBzdGF0ZXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz17c3R5bGVzLmJ1YmJsZUNoYXJ0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgPEJ1YmJsZUNoYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGg9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHpvb206IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDAwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc9ezEwfSAvLyBvcHRpb25hbCB2YWx1ZSwgbnVtYmVyIHRoYXQgc2V0IHRoZSBwYWRkaW5nIGJldHdlZW4gYnViYmxlc1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dMZWdlbmQ9e2ZhbHNlfSAvLyBvcHRpb25hbCB2YWx1ZSwgcGFzcyBmYWxzZSB0byBkaXNhYmxlIHRoZSBsZWdlbmQuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVGb250PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmYW1pbHk6ICdBcmlhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplOiAxMixcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbEZvbnQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGZhbWlseTogJ0FyaWFsJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDE2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vQ3VzdG9tIGJ1YmJsZS9sZWdlbmQgY2xpY2sgZnVuY3Rpb25zIHN1Y2ggYXMgc2VhcmNoaW5nIHVzaW5nIHRoZSBsYWJlbCwgcmVkaXJlY3RpbmcgdG8gb3RoZXIgcGFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2J1YmJsZUNoYXJ0RGF0YX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLFxyXG4gICAgICAgICAgICAgICAgJ1JvYm90bycsICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLFxyXG4gICAgICAgICAgICAgICAgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNfX25leHQtcHJlcmVuZGVyLWluZGljYXRvciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBidWJibGVDaGFydERhdGEgPSBbXHJcbiAgeyBsYWJlbDogJ0NSTScsIHZhbHVlOiAxIH0sXHJcbiAgeyBsYWJlbDogJ0FQSScsIHZhbHVlOiAxIH0sXHJcbiAgeyBsYWJlbDogJ0RhdGEnLCB2YWx1ZTogMSB9LFxyXG4gIHsgbGFiZWw6ICdDb21tZXJjZScsIHZhbHVlOiAxIH0sXHJcbiAgeyBsYWJlbDogJ0FJJywgdmFsdWU6IDMgfSxcclxuICB7IGxhYmVsOiAnTWFuYWdlbWVudCcsIHZhbHVlOiA1IH0sXHJcbiAgeyBsYWJlbDogJ1Rlc3RpbmcnLCB2YWx1ZTogNiB9LFxyXG4gIHsgbGFiZWw6ICdNb2JpbGUnLCB2YWx1ZTogOSB9LFxyXG4gIHsgbGFiZWw6ICdDb252ZXJzaW9uJywgdmFsdWU6IDkgfSxcclxuICB7IGxhYmVsOiAnTWlzYycsIHZhbHVlOiAyMSB9LFxyXG4gIHsgbGFiZWw6ICdEYXRhYmFzZXMnLCB2YWx1ZTogMjIgfSxcclxuICB7IGxhYmVsOiAnRGV2T3BzJywgdmFsdWU6IDIyIH0sXHJcbiAgeyBsYWJlbDogJ0phdmFzY3JpcHQnLCB2YWx1ZTogMjkgfSxcclxuICB7IGxhYmVsOiAnTGFuZ3VhZ2VzJywgdmFsdWU6IDI1IH0sXHJcbiAgeyBsYWJlbDogJ0Zyb250IEVuZCcsIHZhbHVlOiAyNiB9LFxyXG4gIHsgbGFiZWw6ICdDb250ZW50JywgdmFsdWU6IDI2IH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFydHM7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Next\\\\nextjs-blog\\\\pages\\\\charts.js */")));
};

_s(Charts, "sdtWu0p0qbrMHNKb2I5KoGNUO6U=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcnRzLmpzIl0sIm5hbWVzIjpbIkNoYXJ0cyIsImFnZURhdGEiLCJzZXRhZ2VEYXRhIiwidXNlU3RhdGUiLCJidWJibGVEYXRhIiwic2V0QnViYmxlRGF0YSIsInVzZUVmZmVjdCIsImdldERhdGEiLCJhZ2UiLCJ1c2VyU2VydmljZSIsImdldEFnZURhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiYWxlcnQiLCJtYWluU3R5bGUiLCJBcHAiLCJtYWluQ29udGVudCIsImNpcmNsZTEiLCJjaXJjbGUyIiwic3R5bGVzIiwiY2hhcnREaXYiLCJjaGFydERpdkRvdWdudXQiLCJkb3VnaG51dENoYXJ0Q29udGFpbmVyIiwibGVnZW5kIiwiZGlzcGxheSIsInBvc2l0aW9uIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsImNoYXJ0RGl2QnViYmxlIiwiYnViYmxlQ2hhcnRDb250YWluZXIiLCJ6b29tIiwiZmFtaWx5Iiwic2l6ZSIsImNvbG9yIiwiYnViYmxlQ2hhcnREYXRhIiwibGFiZWwiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFBQTs7QUFDbkIsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLEVBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJGLHNEQUFRLENBQUMsRUFBRCxDQUE1QztBQUNBRyx5REFBUyxDQUFDLE1BQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxXQUFPLEdBakJPLENBbUJkO0FBQ0QsR0FwQlEsRUFvQk4sRUFwQk0s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LE9BQUssRUFBRSxXQUFUO0FBQXNCQyxPQUFLLEVBQUU7QUFBN0IsQ0Fmc0IsRUFnQnRCO0FBQUVELE9BQUssRUFBRSxTQUFUO0FBQW9CQyxPQUFLLEVBQUU7QUFBM0IsQ0FoQnNCLENBQXhCO0FBbUJlcEMscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhcnRzLjgwYzljNjA3NjhlNTJjMzFiZDY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRG91Z2hudXQgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5pbXBvcnQgQnViYmxlQ2hhcnQgZnJvbSAnQHdla25vdy9yZWFjdC1idWJibGUtY2hhcnQtZDMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vc3R5bGVzL3BhZ2VzL2NoYXJ0cy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IG1haW5TdHlsZSBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlYmFyJztcclxuaW1wb3J0IHVzZXJTZXJ2aWNlIGZyb20gJy4uL3V0aWxzL3VzZXJTZXJ2aWNlJztcclxuY29uc3QgQ2hhcnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthZ2VEYXRhLCBzZXRhZ2VEYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbYnViYmxlRGF0YSwgc2V0QnViYmxlRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGxldCB0ZW1wRGF0YSA9IHtcclxuICAgIC8vICAgbGFiZWxzOiBbJzE4LTMwJywgJzMwLTUwJywgJzUwKyddLFxyXG4gICAgLy8gICBkYXRhc2V0czogW1xyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgIC8vIGRhdGFbMF0gZm9yIFVTLCBkYXRhWzFdIGZvciBhbGwgb3RoZXIgY291bnRyaWVzXHJcbiAgICAvLyAgICAgICBsYWJlbDogJ1VTJyxcclxuICAgIC8vICAgICAgIGRhdGE6IFs2MTc1OTQsIDE4MTA0NSwgNTU1MDVdLFxyXG4gICAgLy8gICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAvLyAgICAgICAgICdyZ2JhKDAsIDk5LCAxMzIsIDEpJyxcclxuICAgIC8vICAgICAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAxKScsXHJcbiAgICAvLyAgICAgICAgICdyZ2JhKDAsIDI1NSwgMTMyLCAxKScsXHJcbiAgICAvLyAgICAgICAgICdyZ2JhKDE1MCwgOTksIDAsIDEpJyxcclxuICAgIC8vICAgICAgIF0sXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgXSxcclxuICAgIC8vIH07XHJcbiAgICBnZXREYXRhKCk7XHJcblxyXG4gICAgLy8gc2V0YWdlRGF0YSh0ZW1wRGF0YSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGFnZSA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldEFnZURhdGEoKTtcclxuICAgICAgLy8gbGV0IGJ1YmJsZSA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldEJ1YmJsZURhdGEoKTtcclxuICAgICAgY29uc29sZS5sb2coYWdlKTtcclxuICAgICAgc2V0YWdlRGF0YShhZ2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGFsZXJ0KCdFcnJvciBvY2N1cmVkIGdldHRpbmcgZGF0YTonLCBlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLkFwcH0+XHJcbiAgICAgIDxTaWRlYmFyIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLm1haW5Db250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLmNpcmNsZTF9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluU3R5bGUuY2lyY2xlMn0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFydERpdn0+XHJcbiAgICAgICAgICB7YWdlRGF0YSA/IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJ0RGl2RG91Z251dH0+XHJcbiAgICAgICAgICAgICAgICA8aDI+Vm90ZXMgYWNjb3JkaW5nIHRvIGFnZSBncm91cDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPXtzdHlsZXMuZG91Z2hudXRDaGFydENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxEb3VnaG51dFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2FnZURhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9eyc3MCUnfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17JzcwJSd9XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJ0RGl2QnViYmxlfT5cclxuICAgICAgICAgICAgICAgIDxoMj5Wb3RlcyBhY2NvcmRpbmcgdG8gc3RhdGVzPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9e3N0eWxlcy5idWJibGVDaGFydENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxCdWJibGVDaGFydFxyXG4gICAgICAgICAgICAgICAgICAgIGdyYXBoPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICB6b29tOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwMH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwMH1cclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nPXsxMH0gLy8gb3B0aW9uYWwgdmFsdWUsIG51bWJlciB0aGF0IHNldCB0aGUgcGFkZGluZyBiZXR3ZWVuIGJ1YmJsZXNcclxuICAgICAgICAgICAgICAgICAgICBzaG93TGVnZW5kPXtmYWxzZX0gLy8gb3B0aW9uYWwgdmFsdWUsIHBhc3MgZmFsc2UgdG8gZGlzYWJsZSB0aGUgbGVnZW5kLlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlRm9udD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmFtaWx5OiAnQXJpYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxGb250PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmYW1pbHk6ICdBcmlhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplOiAxNixcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvL0N1c3RvbSBidWJibGUvbGVnZW5kIGNsaWNrIGZ1bmN0aW9ucyBzdWNoIGFzIHNlYXJjaGluZyB1c2luZyB0aGUgbGFiZWwsIHJlZGlyZWN0aW5nIHRvIG90aGVyIHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtidWJibGVDaGFydERhdGF9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJyxcclxuICAgICAgICAgICAgICAgICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJyxcclxuICAgICAgICAgICAgICAgICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjX19uZXh0LXByZXJlbmRlci1pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgYnViYmxlQ2hhcnREYXRhID0gW1xyXG4gIHsgbGFiZWw6ICdDUk0nLCB2YWx1ZTogMSB9LFxyXG4gIHsgbGFiZWw6ICdBUEknLCB2YWx1ZTogMSB9LFxyXG4gIHsgbGFiZWw6ICdEYXRhJywgdmFsdWU6IDEgfSxcclxuICB7IGxhYmVsOiAnQ29tbWVyY2UnLCB2YWx1ZTogMSB9LFxyXG4gIHsgbGFiZWw6ICdBSScsIHZhbHVlOiAzIH0sXHJcbiAgeyBsYWJlbDogJ01hbmFnZW1lbnQnLCB2YWx1ZTogNSB9LFxyXG4gIHsgbGFiZWw6ICdUZXN0aW5nJywgdmFsdWU6IDYgfSxcclxuICB7IGxhYmVsOiAnTW9iaWxlJywgdmFsdWU6IDkgfSxcclxuICB7IGxhYmVsOiAnQ29udmVyc2lvbicsIHZhbHVlOiA5IH0sXHJcbiAgeyBsYWJlbDogJ01pc2MnLCB2YWx1ZTogMjEgfSxcclxuICB7IGxhYmVsOiAnRGF0YWJhc2VzJywgdmFsdWU6IDIyIH0sXHJcbiAgeyBsYWJlbDogJ0Rldk9wcycsIHZhbHVlOiAyMiB9LFxyXG4gIHsgbGFiZWw6ICdKYXZhc2NyaXB0JywgdmFsdWU6IDI5IH0sXHJcbiAgeyBsYWJlbDogJ0xhbmd1YWdlcycsIHZhbHVlOiAyNSB9LFxyXG4gIHsgbGFiZWw6ICdGcm9udCBFbmQnLCB2YWx1ZTogMjYgfSxcclxuICB7IGxhYmVsOiAnQ29udGVudCcsIHZhbHVlOiAyNiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcnRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9