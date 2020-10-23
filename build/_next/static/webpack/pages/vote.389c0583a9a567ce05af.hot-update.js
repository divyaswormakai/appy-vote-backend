webpackHotUpdate_N_E("pages/vote",{

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

/* harmony default export */ __webpack_exports__["default"] = ({
  getUserDetails,
  completeProfile
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdXNlclNlcnZpY2UuanMiXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJnZXRVc2VyRGV0YWlscyIsImlkIiwidXNlciIsImdldCIsImRhdGEiLCJFcnJvciIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImNvbXBsZXRlUHJvZmlsZSIsInVzZXJEZXRhaWxzIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0FBLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixHQUF5Qix1QkFBekIsQyxDQUNBOztBQUVBLE1BQU1DLGNBQWMsR0FBRyxNQUFPQyxFQUFQLElBQWM7QUFDbkMsTUFBSTtBQUNGLFFBQUlDLElBQUksR0FBRyxNQUFNTCw0Q0FBSyxDQUFDTSxHQUFOLENBQVcsc0JBQXFCRixFQUFHLEVBQW5DLENBQWpCOztBQUNBLFFBQUlDLElBQUosRUFBVTtBQUNSLGFBQU9BLElBQUksQ0FBQ0UsSUFBWjtBQUNELEtBRkQsTUFFTztBQUNMLFlBQU0sSUFBSUMsS0FBSixDQUFVLGVBQVYsQ0FBTjtBQUNEO0FBQ0YsR0FQRCxDQU9FLE9BQU9DLEdBQVAsRUFBWTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLFdBQU87QUFBRUcsV0FBSyxFQUFFSDtBQUFULEtBQVA7QUFDRDtBQUNGLENBWkQ7O0FBY0EsTUFBTUksZUFBZSxHQUFHLE1BQU9DLFdBQVAsSUFBdUI7QUFDN0MsTUFBSTtBQUNGLFFBQUlULElBQUksR0FBRyxNQUFNTCw0Q0FBSyxDQUFDZSxJQUFOLENBQVcsNEJBQVgsRUFBeUNELFdBQXpDLENBQWpCOztBQUNBLFFBQUlULElBQUosRUFBVTtBQUNSLGFBQU9BLElBQUksQ0FBQ0UsSUFBWjtBQUNELEtBRkQsTUFFTztBQUNMLFlBQU0sSUFBSUMsS0FBSixDQUFVLG9CQUFWLENBQU47QUFDRDtBQUNGLEdBUEQsQ0FPRSxPQUFPQyxHQUFQLEVBQVk7QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQSxXQUFPO0FBQUVHLFdBQUssRUFBRUg7QUFBVCxLQUFQO0FBQ0Q7QUFDRixDQVpEOztBQWNlO0FBQUVOLGdCQUFGO0FBQWtCVTtBQUFsQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZvdGUuMzg5YzA1ODNhOWE1NjdjZTA1YWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxJztcclxuLy8gYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwczovL21ha2FpLXRlc3QuaGVyb2t1YXBwLmNvbSc7XHJcblxyXG5jb25zdCBnZXRVc2VyRGV0YWlscyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgdXNlciA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS91c2Vycy9wcm9maWxlLyR7aWR9YCk7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICByZXR1cm4gdXNlci5kYXRhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB1c2VyIGZvdW5kJyk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9O1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNvbXBsZXRlUHJvZmlsZSA9IGFzeW5jICh1c2VyRGV0YWlscykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgdXNlciA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvdXNlcnMvY29tcGxldGVQcm9maWxlJywgdXNlckRldGFpbHMpO1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgcmV0dXJuIHVzZXIuZGF0YTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVXBkYXRlIHVzZXIgZmFpbGVkJyk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgZ2V0VXNlckRldGFpbHMsIGNvbXBsZXRlUHJvZmlsZSB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9