webpackHotUpdate_N_E("pages/battleground",{

/***/ "./utils/battlegroundService.js":
/*!**************************************!*\
  !*** ./utils/battlegroundService.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = 'https://appyvote.com'; // axios.defaults.baseURL = 'https://makai-test.herokuapp.com';

const youtubeData = [{
  title: 'ABC News Live',
  url: 'https://www.youtube.com/embed/w_Ma8oQLmSM'
}, {
  title: 'How the US election works',
  url: 'https://www.youtube.com/embed/LY8L6C7tsx8'
}, {
  title: 'US election 2020: Vice presidential debate between Mike Pence and Kamala Harris',
  url: 'https://www.youtube.com/embed/6Gk8zA2AXc4'
}];

const getForumData = async () => {
  try {
    console.log('ASDFAAASS');
    let res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/forum');
    return res.data;
  } catch (err) {
    console.log(err);
    return {
      error: err.message
    };
  }
};

const getYoutubeData = async () => {
  try {
    return youtubeData;
  } catch (err) {
    console.log(err);
    return {
      error: err.message
    };
  }
};

const getNewsData = async () => {
  try {
    let res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/news');
    return res.data;
  } catch (err) {
    console.log(err);
    return {
      error: err.message
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  getForumData,
  getYoutubeData,
  getNewsData
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvYmF0dGxlZ3JvdW5kU2VydmljZS5qcyJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInlvdXR1YmVEYXRhIiwidGl0bGUiLCJ1cmwiLCJnZXRGb3J1bURhdGEiLCJjb25zb2xlIiwibG9nIiwicmVzIiwiZ2V0IiwiZGF0YSIsImVyciIsImVycm9yIiwibWVzc2FnZSIsImdldFlvdXR1YmVEYXRhIiwiZ2V0TmV3c0RhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBQSw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsR0FBeUIsc0JBQXpCLEMsQ0FDQTs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsQ0FDbEI7QUFBRUMsT0FBSyxFQUFFLGVBQVQ7QUFBMEJDLEtBQUcsRUFBRTtBQUEvQixDQURrQixFQUVsQjtBQUNFRCxPQUFLLEVBQUUsMkJBRFQ7QUFFRUMsS0FBRyxFQUFFO0FBRlAsQ0FGa0IsRUFPbEI7QUFDRUQsT0FBSyxFQUNILGlGQUZKO0FBR0VDLEtBQUcsRUFBRTtBQUhQLENBUGtCLENBQXBCOztBQWNBLE1BQU1DLFlBQVksR0FBRyxZQUFZO0FBQy9CLE1BQUk7QUFDRkMsV0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNBLFFBQUlDLEdBQUcsR0FBRyxNQUFNVCw0Q0FBSyxDQUFDVSxHQUFOLENBQVUsWUFBVixDQUFoQjtBQUNBLFdBQU9ELEdBQUcsQ0FBQ0UsSUFBWDtBQUNELEdBSkQsQ0FJRSxPQUFPQyxHQUFQLEVBQVk7QUFDWkwsV0FBTyxDQUFDQyxHQUFSLENBQVlJLEdBQVo7QUFDQSxXQUFPO0FBQUVDLFdBQUssRUFBRUQsR0FBRyxDQUFDRTtBQUFiLEtBQVA7QUFDRDtBQUNGLENBVEQ7O0FBV0EsTUFBTUMsY0FBYyxHQUFHLFlBQVk7QUFDakMsTUFBSTtBQUNGLFdBQU9aLFdBQVA7QUFDRCxHQUZELENBRUUsT0FBT1MsR0FBUCxFQUFZO0FBQ1pMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSSxHQUFaO0FBQ0EsV0FBTztBQUFFQyxXQUFLLEVBQUVELEdBQUcsQ0FBQ0U7QUFBYixLQUFQO0FBQ0Q7QUFDRixDQVBEOztBQVNBLE1BQU1FLFdBQVcsR0FBRyxZQUFZO0FBQzlCLE1BQUk7QUFDRixRQUFJUCxHQUFHLEdBQUcsTUFBTVQsNENBQUssQ0FBQ1UsR0FBTixDQUFVLFdBQVYsQ0FBaEI7QUFFQSxXQUFPRCxHQUFHLENBQUNFLElBQVg7QUFDRCxHQUpELENBSUUsT0FBT0MsR0FBUCxFQUFZO0FBQ1pMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSSxHQUFaO0FBQ0EsV0FBTztBQUFFQyxXQUFLLEVBQUVELEdBQUcsQ0FBQ0U7QUFBYixLQUFQO0FBQ0Q7QUFDRixDQVREOztBQVdlO0FBQUVSLGNBQUY7QUFBZ0JTLGdCQUFoQjtBQUFnQ0M7QUFBaEMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9iYXR0bGVncm91bmQuMGJkMjc1NzE1ZDQ1OGNkMmRlMzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cHM6Ly9hcHB5dm90ZS5jb20nO1xyXG4vLyBheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHBzOi8vbWFrYWktdGVzdC5oZXJva3VhcHAuY29tJztcclxuXHJcbmNvbnN0IHlvdXR1YmVEYXRhID0gW1xyXG4gIHsgdGl0bGU6ICdBQkMgTmV3cyBMaXZlJywgdXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvd19NYThvUUxtU00nIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdIb3cgdGhlIFVTIGVsZWN0aW9uIHdvcmtzJyxcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0xZOEw2Qzd0c3g4JyxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICB0aXRsZTpcclxuICAgICAgJ1VTIGVsZWN0aW9uIDIwMjA6IFZpY2UgcHJlc2lkZW50aWFsIGRlYmF0ZSBiZXR3ZWVuIE1pa2UgUGVuY2UgYW5kIEthbWFsYSBIYXJyaXMnLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvNkdrOHpBMkFYYzQnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBnZXRGb3J1bURhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKCdBU0RGQUFBU1MnKTtcclxuICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ydW0nKTtcclxuICAgIHJldHVybiByZXMuZGF0YTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICByZXR1cm4geyBlcnJvcjogZXJyLm1lc3NhZ2UgfTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRZb3V0dWJlRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIHlvdXR1YmVEYXRhO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIHJldHVybiB7IGVycm9yOiBlcnIubWVzc2FnZSB9O1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldE5ld3NEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL25ld3MnKTtcclxuXHJcbiAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgcmV0dXJuIHsgZXJyb3I6IGVyci5tZXNzYWdlIH07XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBnZXRGb3J1bURhdGEsIGdldFlvdXR1YmVEYXRhLCBnZXROZXdzRGF0YSB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9