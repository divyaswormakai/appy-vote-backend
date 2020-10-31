webpackHotUpdate_N_E("pages/charts",{

/***/ "./utils/userService.js":
/*!******************************!*\
  !*** ./utils/userService.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = 'http://localhost:3001'; // axios.defaults.baseURL = 'https://makai-test.herokuapp.com';

const getUserDetails = async id => {
  try {
    let user = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/users/profile/${id}`);

    if (user) {
      return user.data;
    } else {
      throw new Error('No user found');
    }
  } catch (err) {
    console.log(err);
    return {
      error: err
    };
  }
};

const completeProfile = async userDetails => {
  try {
    let user = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/users/completeProfile', userDetails);

    if (user) {
      return user.data;
    } else {
      throw new Error('Update user failed');
    }
  } catch (err) {
    console.log(err);
    return {
      error: err
    };
  }
};

const getCounts = async () => {
  try {
    let user = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/totalCounts');

    if (user) {
      return user.data;
    } else {
      throw new Error('Update user failed');
    }
  } catch (err) {
    console.log(err);
    return {
      error: err
    };
  }
};

const getAgeData = async () => {
  try {
    let response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/ageData');

    if (response) {
      console.log('AGE data', response.data);
      return response.data;
    } else {
      throw new Error('Getting data failed');
    }
  } catch (err) {
    console.log(err);
    return {
      error: err
    };
  }
};

const getBubbleData = async () => {
  try {
    let reponse = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/bubbleChart');

    if (reponse) {
      return reponse.data;
    } else {
      throw new Error('Getting data failed');
    }
  } catch (err) {
    console.log(err);
    return {
      error: err
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  getUserDetails,
  completeProfile,
  getCounts,
  getAgeData,
  getBubbleData
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdXNlclNlcnZpY2UuanMiXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJnZXRVc2VyRGV0YWlscyIsImlkIiwidXNlciIsImdldCIsImRhdGEiLCJFcnJvciIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImNvbXBsZXRlUHJvZmlsZSIsInVzZXJEZXRhaWxzIiwicG9zdCIsImdldENvdW50cyIsImdldEFnZURhdGEiLCJyZXNwb25zZSIsImdldEJ1YmJsZURhdGEiLCJyZXBvbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQUEsNENBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLEdBQXlCLHVCQUF6QixDLENBQ0E7O0FBRUEsTUFBTUMsY0FBYyxHQUFHLE1BQU9DLEVBQVAsSUFBYztBQUNuQyxNQUFJO0FBQ0YsUUFBSUMsSUFBSSxHQUFHLE1BQU1MLDRDQUFLLENBQUNNLEdBQU4sQ0FBVyxzQkFBcUJGLEVBQUcsRUFBbkMsQ0FBakI7O0FBQ0EsUUFBSUMsSUFBSixFQUFVO0FBQ1IsYUFBT0EsSUFBSSxDQUFDRSxJQUFaO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsWUFBTSxJQUFJQyxLQUFKLENBQVUsZUFBVixDQUFOO0FBQ0Q7QUFDRixHQVBELENBT0UsT0FBT0MsR0FBUCxFQUFZO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0EsV0FBTztBQUFFRyxXQUFLLEVBQUVIO0FBQVQsS0FBUDtBQUNEO0FBQ0YsQ0FaRDs7QUFjQSxNQUFNSSxlQUFlLEdBQUcsTUFBT0MsV0FBUCxJQUF1QjtBQUM3QyxNQUFJO0FBQ0YsUUFBSVQsSUFBSSxHQUFHLE1BQU1MLDRDQUFLLENBQUNlLElBQU4sQ0FBVyw0QkFBWCxFQUF5Q0QsV0FBekMsQ0FBakI7O0FBQ0EsUUFBSVQsSUFBSixFQUFVO0FBQ1IsYUFBT0EsSUFBSSxDQUFDRSxJQUFaO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsWUFBTSxJQUFJQyxLQUFKLENBQVUsb0JBQVYsQ0FBTjtBQUNEO0FBQ0YsR0FQRCxDQU9FLE9BQU9DLEdBQVAsRUFBWTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLFdBQU87QUFBRUcsV0FBSyxFQUFFSDtBQUFULEtBQVA7QUFDRDtBQUNGLENBWkQ7O0FBY0EsTUFBTU8sU0FBUyxHQUFHLFlBQVk7QUFDNUIsTUFBSTtBQUNGLFFBQUlYLElBQUksR0FBRyxNQUFNTCw0Q0FBSyxDQUFDTSxHQUFOLENBQVUsa0JBQVYsQ0FBakI7O0FBQ0EsUUFBSUQsSUFBSixFQUFVO0FBQ1IsYUFBT0EsSUFBSSxDQUFDRSxJQUFaO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsWUFBTSxJQUFJQyxLQUFKLENBQVUsb0JBQVYsQ0FBTjtBQUNEO0FBQ0YsR0FQRCxDQU9FLE9BQU9DLEdBQVAsRUFBWTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLFdBQU87QUFBRUcsV0FBSyxFQUFFSDtBQUFULEtBQVA7QUFDRDtBQUNGLENBWkQ7O0FBY0EsTUFBTVEsVUFBVSxHQUFHLFlBQVk7QUFDN0IsTUFBSTtBQUNGLFFBQUlDLFFBQVEsR0FBRyxNQUFNbEIsNENBQUssQ0FBQ00sR0FBTixDQUFVLGNBQVYsQ0FBckI7O0FBQ0EsUUFBSVksUUFBSixFQUFjO0FBQ1pSLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JPLFFBQVEsQ0FBQ1gsSUFBakM7QUFDQSxhQUFPVyxRQUFRLENBQUNYLElBQWhCO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsWUFBTSxJQUFJQyxLQUFKLENBQVUscUJBQVYsQ0FBTjtBQUNEO0FBQ0YsR0FSRCxDQVFFLE9BQU9DLEdBQVAsRUFBWTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLFdBQU87QUFBRUcsV0FBSyxFQUFFSDtBQUFULEtBQVA7QUFDRDtBQUNGLENBYkQ7O0FBZUEsTUFBTVUsYUFBYSxHQUFHLFlBQVk7QUFDaEMsTUFBSTtBQUNGLFFBQUlDLE9BQU8sR0FBRyxNQUFNcEIsNENBQUssQ0FBQ00sR0FBTixDQUFVLGtCQUFWLENBQXBCOztBQUNBLFFBQUljLE9BQUosRUFBYTtBQUNYLGFBQU9BLE9BQU8sQ0FBQ2IsSUFBZjtBQUNELEtBRkQsTUFFTztBQUNMLFlBQU0sSUFBSUMsS0FBSixDQUFVLHFCQUFWLENBQU47QUFDRDtBQUNGLEdBUEQsQ0FPRSxPQUFPQyxHQUFQLEVBQVk7QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQSxXQUFPO0FBQUVHLFdBQUssRUFBRUg7QUFBVCxLQUFQO0FBQ0Q7QUFDRixDQVpEOztBQWFlO0FBQ2JOLGdCQURhO0FBRWJVLGlCQUZhO0FBR2JHLFdBSGE7QUFJYkMsWUFKYTtBQUtiRTtBQUxhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhcnRzLmQ0MDlmOWJlZTAxNmY1YmFjZGE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMSc7XHJcbi8vIGF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cHM6Ly9tYWthaS10ZXN0Lmhlcm9rdWFwcC5jb20nO1xyXG5cclxuY29uc3QgZ2V0VXNlckRldGFpbHMgPSBhc3luYyAoaWQpID0+IHtcclxuICB0cnkge1xyXG4gICAgbGV0IHVzZXIgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvdXNlcnMvcHJvZmlsZS8ke2lkfWApO1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgcmV0dXJuIHVzZXIuZGF0YTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gdXNlciBmb3VuZCcpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIHJldHVybiB7IGVycm9yOiBlcnIgfTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjb21wbGV0ZVByb2ZpbGUgPSBhc3luYyAodXNlckRldGFpbHMpID0+IHtcclxuICB0cnkge1xyXG4gICAgbGV0IHVzZXIgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3VzZXJzL2NvbXBsZXRlUHJvZmlsZScsIHVzZXJEZXRhaWxzKTtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIHJldHVybiB1c2VyLmRhdGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VwZGF0ZSB1c2VyIGZhaWxlZCcpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIHJldHVybiB7IGVycm9yOiBlcnIgfTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRDb3VudHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCB1c2VyID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3RvdGFsQ291bnRzJyk7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICByZXR1cm4gdXNlci5kYXRhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVcGRhdGUgdXNlciBmYWlsZWQnKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICByZXR1cm4geyBlcnJvcjogZXJyIH07XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0QWdlRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2FnZURhdGEnKTtcclxuICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnQUdFIGRhdGEnLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dldHRpbmcgZGF0YSBmYWlsZWQnKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICByZXR1cm4geyBlcnJvcjogZXJyIH07XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0QnViYmxlRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgbGV0IHJlcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvYnViYmxlQ2hhcnQnKTtcclxuICAgIGlmIChyZXBvbnNlKSB7XHJcbiAgICAgIHJldHVybiByZXBvbnNlLmRhdGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dldHRpbmcgZGF0YSBmYWlsZWQnKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICByZXR1cm4geyBlcnJvcjogZXJyIH07XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZ2V0VXNlckRldGFpbHMsXHJcbiAgY29tcGxldGVQcm9maWxlLFxyXG4gIGdldENvdW50cyxcclxuICBnZXRBZ2VEYXRhLFxyXG4gIGdldEJ1YmJsZURhdGEsXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=