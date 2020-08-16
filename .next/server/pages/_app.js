module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-toastify/dist/ReactToastify.css\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme */ \"./theme.ts\");\nvar _jsxFileName = \"/Users/vibhor/Documents/Event-Management-Application-Using-ReactJs-And-NextJs/pages/_app.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"ThemeProvider\"], {\n    theme: _theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__[\"ToastContainer\"], {\n    position: \"top-right\",\n    autoClose: 5000,\n    hideProgressBar: false,\n    newestOnTop: false,\n    closeOnClick: true,\n    rtl: false,\n    pauseOnFocusLoss: true,\n    draggable: true,\n    pauseOnHover: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }), __jsx(Component, _extends({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQWUsR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQW1DO0FBQ3pELFNBQ0UsbUVBQ0UsTUFBQywrREFBRDtBQUFlLFNBQUssRUFBRUMsOENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQ0UsWUFBUSxFQUFDLFdBRFg7QUFFRSxhQUFTLEVBQUUsSUFGYjtBQUdFLG1CQUFlLEVBQUUsS0FIbkI7QUFJRSxlQUFXLEVBQUUsS0FKZjtBQUtFLGdCQUFZLE1BTGQ7QUFNRSxPQUFHLEVBQUUsS0FOUDtBQU9FLG9CQUFnQixNQVBsQjtBQVFFLGFBQVMsTUFSWDtBQVNFLGdCQUFZLE1BVGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBY0UsTUFBQyxTQUFELGVBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWRGLENBREYsQ0FERjtBQW9CRCxDQXJCRDs7QUF1QmVGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZSc7XG5cbmNvbnN0IE15QXBwOiBSZWFjdC5GQyA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IGFueSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8VG9hc3RDb250YWluZXJcbiAgICAgICAgICBwb3NpdGlvbj1cInRvcC1yaWdodFwiXG4gICAgICAgICAgYXV0b0Nsb3NlPXs1MDAwfVxuICAgICAgICAgIGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XG4gICAgICAgICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxuICAgICAgICAgIGNsb3NlT25DbGlja1xuICAgICAgICAgIHJ0bD17ZmFsc2V9XG4gICAgICAgICAgcGF1c2VPbkZvY3VzTG9zc1xuICAgICAgICAgIGRyYWdnYWJsZVxuICAgICAgICAgIHBhdXNlT25Ib3ZlclxuICAgICAgICAvPlxuICAgICAgICB7LyogU2FtZSBhcyAqL31cblxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globals.css\n");

/***/ }),

/***/ "./theme.ts":
/*!******************!*\
  !*** ./theme.ts ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst theme = {\n  color: {\n    primaryColor100: '#0368FF',\n    light1: '#FAFBFD',\n    light2: '#FFFFFF',\n    light3: '#fbfbff',\n    heidelbergRed100: '#EA3546'\n  },\n  gradient: {\n    tealGreen: 'linear-gradient(99.32deg, #1EACB2 5.1%, #0DCCAA 98.86%)',\n    primaryColor: 'linear-gradient(180deg, #1F1BF9 0%, #531DEB 100%)'\n  },\n  shadow: {\n    elevation00: `inset 0px 0.5px 4px`,\n    elevation01: `0px 1px 3px`,\n    elevation02: `0px 1px 7px`,\n    elevation03: `0px 2px 6px`,\n    elevation04: `0px 3px 16px`,\n    elevation05: `0px 16px 24px`,\n    elevation06: `0px 7px 37px`,\n    elevation07: `0px 3px 9px`\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZS50cz9mNzdmIl0sIm5hbWVzIjpbInRoZW1lIiwiY29sb3IiLCJwcmltYXJ5Q29sb3IxMDAiLCJsaWdodDEiLCJsaWdodDIiLCJsaWdodDMiLCJoZWlkZWxiZXJnUmVkMTAwIiwiZ3JhZGllbnQiLCJ0ZWFsR3JlZW4iLCJwcmltYXJ5Q29sb3IiLCJzaGFkb3ciLCJlbGV2YXRpb24wMCIsImVsZXZhdGlvbjAxIiwiZWxldmF0aW9uMDIiLCJlbGV2YXRpb24wMyIsImVsZXZhdGlvbjA0IiwiZWxldmF0aW9uMDUiLCJlbGV2YXRpb24wNiIsImVsZXZhdGlvbjA3Il0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBLE1BQU1BLEtBQW1CLEdBQUc7QUFDMUJDLE9BQUssRUFBRTtBQUNMQyxtQkFBZSxFQUFFLFNBRFo7QUFFTEMsVUFBTSxFQUFFLFNBRkg7QUFHTEMsVUFBTSxFQUFFLFNBSEg7QUFJTEMsVUFBTSxFQUFFLFNBSkg7QUFLTEMsb0JBQWdCLEVBQUU7QUFMYixHQURtQjtBQVExQkMsVUFBUSxFQUFFO0FBQ1JDLGFBQVMsRUFBRSx5REFESDtBQUVSQyxnQkFBWSxFQUFFO0FBRk4sR0FSZ0I7QUFZMUJDLFFBQU0sRUFBRTtBQUNOQyxlQUFXLEVBQUcscUJBRFI7QUFFTkMsZUFBVyxFQUFHLGFBRlI7QUFHTkMsZUFBVyxFQUFHLGFBSFI7QUFJTkMsZUFBVyxFQUFHLGFBSlI7QUFLTkMsZUFBVyxFQUFHLGNBTFI7QUFNTkMsZUFBVyxFQUFHLGVBTlI7QUFPTkMsZUFBVyxFQUFHLGNBUFI7QUFRTkMsZUFBVyxFQUFHO0FBUlI7QUFaa0IsQ0FBNUI7QUF3QmVsQixvRUFBZiIsImZpbGUiOiIuL3RoZW1lLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVmYXVsdFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCB0aGVtZTogRGVmYXVsdFRoZW1lID0ge1xuICBjb2xvcjoge1xuICAgIHByaW1hcnlDb2xvcjEwMDogJyMwMzY4RkYnLFxuICAgIGxpZ2h0MTogJyNGQUZCRkQnLFxuICAgIGxpZ2h0MjogJyNGRkZGRkYnLFxuICAgIGxpZ2h0MzogJyNmYmZiZmYnLFxuICAgIGhlaWRlbGJlcmdSZWQxMDA6ICcjRUEzNTQ2JyxcbiAgfSxcbiAgZ3JhZGllbnQ6IHtcbiAgICB0ZWFsR3JlZW46ICdsaW5lYXItZ3JhZGllbnQoOTkuMzJkZWcsICMxRUFDQjIgNS4xJSwgIzBEQ0NBQSA5OC44NiUpJyxcbiAgICBwcmltYXJ5Q29sb3I6ICdsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMUYxQkY5IDAlLCAjNTMxREVCIDEwMCUpJyxcbiAgfSxcbiAgc2hhZG93OiB7XG4gICAgZWxldmF0aW9uMDA6IGBpbnNldCAwcHggMC41cHggNHB4YCxcbiAgICBlbGV2YXRpb24wMTogYDBweCAxcHggM3B4YCxcbiAgICBlbGV2YXRpb24wMjogYDBweCAxcHggN3B4YCxcbiAgICBlbGV2YXRpb24wMzogYDBweCAycHggNnB4YCxcbiAgICBlbGV2YXRpb24wNDogYDBweCAzcHggMTZweGAsXG4gICAgZWxldmF0aW9uMDU6IGAwcHggMTZweCAyNHB4YCxcbiAgICBlbGV2YXRpb24wNjogYDBweCA3cHggMzdweGAsXG4gICAgZWxldmF0aW9uMDc6IGAwcHggM3B4IDlweGAsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./theme.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-toastify\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiP2FlOWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtdG9hc3RpZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-toastify\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });