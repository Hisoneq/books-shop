/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_js_navigation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/js/navigation.js */ \"./src/js/navigation.js\");\n/* harmony import */ var _src_js_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/js/slider.js */ \"./src/js/slider.js\");\n/* harmony import */ var _src_js_categories_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/js/categories.js */ \"./src/js/categories.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    (0,_src_js_navigation_js__WEBPACK_IMPORTED_MODULE_0__.setupNavigation)();\r\n    (0,_src_js_slider_js__WEBPACK_IMPORTED_MODULE_1__.setupSlider)();\r\n    (0,_src_js_categories_js__WEBPACK_IMPORTED_MODULE_2__.setupCategories)();\r\n});\n\n//# sourceURL=webpack://books/./index.js?");

/***/ }),

/***/ "./src/js/categories.js":
/*!******************************!*\
  !*** ./src/js/categories.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupCategories: () => (/* binding */ setupCategories)\n/* harmony export */ });\nfunction setupCategories(){\r\n    const categotyItems = document.querySelectorAll('.categories__nav li');\r\n\r\n    if (categotyItems.length > 0) {\r\n        categotyItems[0].classList.add('active');\r\n    }\r\n\r\n    categotyItems.forEach(item => {\r\n        item.addEventListener('click', () => {\r\n           categotyItems.forEach(el => el.classList.remove('active'));\r\n            item.classList.add('active');\r\n        });\r\n    });\r\n}\n\n//# sourceURL=webpack://books/./src/js/categories.js?");

/***/ }),

/***/ "./src/js/navigation.js":
/*!******************************!*\
  !*** ./src/js/navigation.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupNavigation: () => (/* binding */ setupNavigation)\n/* harmony export */ });\nfunction setupNavigation() {\r\n    const navItems = document.querySelectorAll('.header_nav li');\r\n\r\n    if (navItems.length > 0) {\r\n        navItems[0].classList.add('active');\r\n    }\r\n\r\n    navItems.forEach(item => {\r\n        item.addEventListener('click', () => {\r\n            document.querySelectorAll('.header_nav li').forEach(el => el.classList.remove('active'));\r\n            item.classList.add('active');\r\n            document.getElementById(item.getAttribute('data-section')).scrollIntoView({\r\n                behavior: 'smooth'\r\n            });\r\n        });\r\n    });\r\n}\n\n//# sourceURL=webpack://books/./src/js/navigation.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupSlider: () => (/* binding */ setupSlider)\n/* harmony export */ });\nfunction setupSlider() {\r\n    let currentIndex = 0;\r\n    const images = document.querySelectorAll('.firstPict');\r\n    const circles = document.querySelectorAll('.main__circle');\r\n    const totalImages = images.length;\r\n\r\n    function showImage(index) {\r\n        images.forEach((image, i) => {\r\n            image.style.display = (i === index) ? 'block' : 'none';\r\n        });\r\n        circles.forEach((circle, i) => {\r\n            circle.classList.toggle('active', i === index);\r\n        });\r\n    }\r\n\r\n    function nextImage() {\r\n        currentIndex = (currentIndex + 1) % totalImages;\r\n        showImage(currentIndex);\r\n    }\r\n\r\n    setInterval(nextImage, 5000);\r\n\r\n    circles.forEach((circle, index) => {\r\n        circle.addEventListener('click', () => {\r\n            currentIndex = index;\r\n            showImage(currentIndex);\r\n        });\r\n    });\r\n\r\n    showImage(currentIndex);\r\n}\n\n//# sourceURL=webpack://books/./src/js/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;