webpackHotUpdate_N_E("pages/overview",{

/***/ "./pages/overview.js":
/*!***************************!*\
  !*** ./pages/overview.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_pages_battleground_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../styles/pages/battleground.module.css */ "./styles/pages/battleground.module.css");
/* harmony import */ var _styles_pages_battleground_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_battleground_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar.js");
var _jsxFileName = "D:\\Next\\nextjs-blog\\pages\\overview.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Overview = () => {
  _s();

  const {
    0: chartData,
    1: setChartData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  let socket = null;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // let endpoint = 'http://localhost:3001';
    let endpoint = 'https://makai-test.herokuapp.com'; // let endpoint = '/';

    socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()(endpoint);
    socket.on('getOverviewData', data => {
      console.log(data);
      setChartData(data); // console.log('Getting data');
    });
    return () => {
      socket.disconnect();
    };
  }, []); //JSX => JavaScript Syntax

  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.App,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.mainContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.circle1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.circle2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _styles_pages_battleground_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.overviewChart,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_pages_battleground_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.overviewHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Who do you thing will win the next election?"), chartData ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _styles_pages_battleground_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.overviewChartDataContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
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
      maintainAspectRatio: true
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }))) : null)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3ZlcnZpZXcuanMiXSwibmFtZXMiOlsiT3ZlcnZpZXciLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJ1c2VTdGF0ZSIsInNvY2tldCIsInVzZUVmZmVjdCIsImVuZHBvaW50Iiwic29ja2V0SU9DbGllbnQiLCJvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGlzY29ubmVjdCIsIm1haW5TdHlsZSIsIkFwcCIsIm1haW5Db250ZW50IiwiY2lyY2xlMSIsImNpcmNsZTIiLCJzdHlsZXMiLCJvdmVydmlld0NoYXJ0Iiwib3ZlcnZpZXdIZWFkZXIiLCJvdmVydmlld0NoYXJ0RGF0YUNvbnRhaW5lciIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJmb250U2l6ZSIsImZvbnRDb2xvciIsImxlZ2VuZCIsInBvc2l0aW9uIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFBQTs7QUFDckIsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyxzREFBUSxDQUFDLEVBQUQsQ0FBMUM7QUFDQSxNQUFJQyxNQUFNLEdBQUcsSUFBYjtBQUNBQyx5REFBUyxDQUFDLE1BQU07QUFDZDtBQUNBLFFBQUlDLFFBQVEsR0FBRyxrQ0FBZixDQUZjLENBR2Q7O0FBQ0FGLFVBQU0sR0FBR0csdURBQWMsQ0FBQ0QsUUFBRCxDQUF2QjtBQUNBRixVQUFNLENBQUNJLEVBQVAsQ0FBVSxpQkFBVixFQUE4QkMsSUFBRCxJQUFVO0FBQ3JDQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBUCxrQkFBWSxDQUFDTyxJQUFELENBQVosQ0FGcUMsQ0FHckM7QUFDRCxLQUpEO0FBS0EsV0FBTyxNQUFNO0FBQ1hMLFlBQU0sQ0FBQ1EsVUFBUDtBQUNELEtBRkQ7QUFHRCxHQWJRLEVBYU4sRUFiTSxDQUFULENBSHFCLENBa0JyQjs7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFFQyw4REFBUyxDQUFDQyxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFHRTtBQUFLLGFBQVMsRUFBRUQsOERBQVMsQ0FBQ0UsV0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRiw4REFBUyxDQUFDRyxPQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBRUgsOERBQVMsQ0FBQ0ksT0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBSyxhQUFTLEVBQUVDLDRFQUFNLENBQUNDLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsNEVBQU0sQ0FBQ0UsY0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvREFERixFQUlHbkIsU0FBUyxHQUNSLG1FQUNFO0FBQUssYUFBUyxFQUFFaUIsNEVBQU0sQ0FBQ0csMEJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQ0UsUUFBSSxFQUFFcEIsU0FEUjtBQUVFLFdBQU8sRUFBRTtBQUNQcUIsV0FBSyxFQUFFO0FBQ0xDLGVBQU8sRUFBRSxlQURKO0FBRUxDLFlBQUksRUFBRSxvQkFGRDtBQUdMQyxnQkFBUSxFQUFFLEVBSEw7QUFJTEMsaUJBQVMsRUFBRTtBQUpOLE9BREE7QUFPUEMsWUFBTSxFQUFFO0FBQ05KLGVBQU8sRUFBRSxJQURIO0FBRU5LLGdCQUFRLEVBQUU7QUFGSixPQVBEO0FBV1BDLHlCQUFtQixFQUFFO0FBWGQsS0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURRLEdBcUJOLElBekJOLENBSEYsQ0FIRixDQURGO0FBcUNELENBeEREOztHQUFNN0IsUTs7S0FBQUEsUTtBQTBEU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvb3ZlcnZpZXcuOTcwYWFiYjMyZjMzMWYwMDJiOWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYXIgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5pbXBvcnQgc29ja2V0SU9DbGllbnQgZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi9zdHlsZXMvcGFnZXMvYmF0dGxlZ3JvdW5kLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgbWFpblN0eWxlIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5cclxuY29uc3QgT3ZlcnZpZXcgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICBsZXQgc29ja2V0ID0gbnVsbDtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gbGV0IGVuZHBvaW50ID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMSc7XHJcbiAgICBsZXQgZW5kcG9pbnQgPSAnaHR0cHM6Ly9tYWthaS10ZXN0Lmhlcm9rdWFwcC5jb20nO1xyXG4gICAgLy8gbGV0IGVuZHBvaW50ID0gJy8nO1xyXG4gICAgc29ja2V0ID0gc29ja2V0SU9DbGllbnQoZW5kcG9pbnQpO1xyXG4gICAgc29ja2V0Lm9uKCdnZXRPdmVydmlld0RhdGEnLCAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgc2V0Q2hhcnREYXRhKGRhdGEpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnR2V0dGluZyBkYXRhJyk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNvY2tldC5kaXNjb25uZWN0KCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy9KU1ggPT4gSmF2YVNjcmlwdCBTeW50YXhcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5BcHB9PlxyXG4gICAgICA8U2lkZWJhciAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5tYWluQ29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21haW5TdHlsZS5jaXJjbGUxfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpblN0eWxlLmNpcmNsZTJ9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXdDaGFydH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJ2aWV3SGVhZGVyfT5cclxuICAgICAgICAgICAgV2hvIGRvIHlvdSB0aGluZyB3aWxsIHdpbiB0aGUgbmV4dCBlbGVjdGlvbj9cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2NoYXJ0RGF0YSA/IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJ2aWV3Q2hhcnREYXRhQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxCYXJcclxuICAgICAgICAgICAgICAgICAgZGF0YT17Y2hhcnREYXRhfVxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdEaXNwbGF5IFRpdGxlJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDdXJyZW50IFN0YXRpc3RpY3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE92ZXJ2aWV3O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9