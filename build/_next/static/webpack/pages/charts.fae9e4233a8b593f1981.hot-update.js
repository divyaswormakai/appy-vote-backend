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
    let reponse = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/ageData');

    if (reponse) {
      console.log('AGE data', response.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdXNlclNlcnZpY2UuanMiXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJnZXRVc2VyRGV0YWlscyIsImlkIiwidXNlciIsImdldCIsImRhdGEiLCJFcnJvciIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImNvbXBsZXRlUHJvZmlsZSIsInVzZXJEZXRhaWxzIiwicG9zdCIsImdldENvdW50cyIsImdldEFnZURhdGEiLCJyZXBvbnNlIiwicmVzcG9uc2UiLCJnZXRCdWJibGVEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQUEsNENBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLEdBQXlCLHVCQUF6QixDLENBQ0E7O0FBRUEsTUFBTUMsY0FBYyxHQUFHLE1BQU9DLEVBQVAsSUFBYztBQUNuQyxNQUFJO0FBQ0YsUUFBSUMsSUFBSSxHQUFHLE1BQU1MLDRDQUFLLENBQUNNLEdBQU4sQ0FBVyxzQkFBcUJGLEVBQUcsRUFBbkMsQ0FBakI7O0FBQ0EsUUFBSUMsSUFBSixFQUFVO0FBQ1IsYUFBT0EsSUFBSSxDQUFDRSxJQUFaO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsWUFBTSxJQUFJQyxLQUFKLENBQVUsZUFBVixDQUFOO0FBQ0Q7QUFDRixHQVBELENBT0UsT0FBT0MsR0FBUCxFQUFZO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0EsV0FBTztBQUFFRyxXQUFLLEVBQUVIO0FBQVQsS0FBUDtBQUNEO0FBQ0YsQ0FaRDs7QUFjQSxNQUFNSSxlQUFlLEdBQUcsTUFBT0MsV0FBUCxJQUF1QjtBQUM3QyxNQUFJO0FBQ0YsUUFBSVQsSUFBSSxHQUFHLE1BQU1MLDRDQUFLLENBQUNlLElBQU4sQ0FBVyw0QkFBWCxFQUF5Q0QsV0FBekMsQ0FBakI7O0FBQ0EsUUFBSVQsSUFBSixFQUFVO0FBQ1IsYUFBT0EsSUFBSSxDQUFDRSxJQUFaO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsWUFBTSxJQUFJQyxLQUFKLENBQVUsb0JBQVYsQ0FBTjtBQUNEO0FBQ0YsR0FQRCxDQU9FLE9BQU9DLEdBQVAsRUFBWTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLFdBQU87QUFBRUcsV0FBSyxFQUFFSDtBQUFULEtBQVA7QUFDRDtBQUNGLENBWkQ7O0FBY0EsTUFBTU8sU0FBUyxHQUFHLFlBQVk7QUFDNUIsTUFBSTtBQUNGLFFBQUlYLElBQUksR0FBRyxNQUFNTCw0Q0FBSyxDQUFDTSxHQUFOLENBQVUsa0JBQVYsQ0FBakI7O0FBQ0EsUUFBSUQsSUFBSixFQUFVO0FBQ1IsYUFBT0EsSUFBSSxDQUFDRSxJQUFaO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsWUFBTSxJQUFJQyxLQUFKLENBQVUsb0JBQVYsQ0FBTjtBQUNEO0FBQ0YsR0FQRCxDQU9FLE9BQU9DLEdBQVAsRUFBWTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLFdBQU87QUFBRUcsV0FBSyxFQUFFSDtBQUFULEtBQVA7QUFDRDtBQUNGLENBWkQ7O0FBY0EsTUFBTVEsVUFBVSxHQUFHLFlBQVk7QUFDN0IsTUFBSTtBQUNGLFFBQUlDLE9BQU8sR0FBRyxNQUFNbEIsNENBQUssQ0FBQ00sR0FBTixDQUFVLGNBQVYsQ0FBcEI7O0FBQ0EsUUFBSVksT0FBSixFQUFhO0FBQ1hSLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JRLFFBQVEsQ0FBQ1osSUFBakM7QUFDQSxhQUFPVyxPQUFPLENBQUNYLElBQWY7QUFDRCxLQUhELE1BR087QUFDTCxZQUFNLElBQUlDLEtBQUosQ0FBVSxxQkFBVixDQUFOO0FBQ0Q7QUFDRixHQVJELENBUUUsT0FBT0MsR0FBUCxFQUFZO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0EsV0FBTztBQUFFRyxXQUFLLEVBQUVIO0FBQVQsS0FBUDtBQUNEO0FBQ0YsQ0FiRDs7QUFlQSxNQUFNVyxhQUFhLEdBQUcsWUFBWTtBQUNoQyxNQUFJO0FBQ0YsUUFBSUYsT0FBTyxHQUFHLE1BQU1sQiw0Q0FBSyxDQUFDTSxHQUFOLENBQVUsa0JBQVYsQ0FBcEI7O0FBQ0EsUUFBSVksT0FBSixFQUFhO0FBQ1gsYUFBT0EsT0FBTyxDQUFDWCxJQUFmO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsWUFBTSxJQUFJQyxLQUFKLENBQVUscUJBQVYsQ0FBTjtBQUNEO0FBQ0YsR0FQRCxDQU9FLE9BQU9DLEdBQVAsRUFBWTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLFdBQU87QUFBRUcsV0FBSyxFQUFFSDtBQUFULEtBQVA7QUFDRDtBQUNGLENBWkQ7O0FBYWU7QUFDYk4sZ0JBRGE7QUFFYlUsaUJBRmE7QUFHYkcsV0FIYTtBQUliQyxZQUphO0FBS2JHO0FBTGEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGFydHMuZmFlOWU0MjMzYThiNTkzZjE5ODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxJztcclxuLy8gYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwczovL21ha2FpLXRlc3QuaGVyb2t1YXBwLmNvbSc7XHJcblxyXG5jb25zdCBnZXRVc2VyRGV0YWlscyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgdXNlciA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS91c2Vycy9wcm9maWxlLyR7aWR9YCk7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICByZXR1cm4gdXNlci5kYXRhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB1c2VyIGZvdW5kJyk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9O1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNvbXBsZXRlUHJvZmlsZSA9IGFzeW5jICh1c2VyRGV0YWlscykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgdXNlciA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvdXNlcnMvY29tcGxldGVQcm9maWxlJywgdXNlckRldGFpbHMpO1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgcmV0dXJuIHVzZXIuZGF0YTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVXBkYXRlIHVzZXIgZmFpbGVkJyk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9O1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldENvdW50cyA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgbGV0IHVzZXIgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdG90YWxDb3VudHMnKTtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIHJldHVybiB1c2VyLmRhdGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VwZGF0ZSB1c2VyIGZhaWxlZCcpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIHJldHVybiB7IGVycm9yOiBlcnIgfTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRBZ2VEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgcmVwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9hZ2VEYXRhJyk7XHJcbiAgICBpZiAocmVwb25zZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnQUdFIGRhdGEnLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgcmV0dXJuIHJlcG9uc2UuZGF0YTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignR2V0dGluZyBkYXRhIGZhaWxlZCcpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIHJldHVybiB7IGVycm9yOiBlcnIgfTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRCdWJibGVEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgcmVwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9idWJibGVDaGFydCcpO1xyXG4gICAgaWYgKHJlcG9uc2UpIHtcclxuICAgICAgcmV0dXJuIHJlcG9uc2UuZGF0YTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignR2V0dGluZyBkYXRhIGZhaWxlZCcpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIHJldHVybiB7IGVycm9yOiBlcnIgfTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBnZXRVc2VyRGV0YWlscyxcclxuICBjb21wbGV0ZVByb2ZpbGUsXHJcbiAgZ2V0Q291bnRzLFxyXG4gIGdldEFnZURhdGEsXHJcbiAgZ2V0QnViYmxlRGF0YSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==