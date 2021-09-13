/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\r\nconst contactPageLoad = () => {\r\n    const content = document.querySelector(\"#contentContact\");\r\n    content.innerHTML = \"\";\r\n\r\n    let h1 = document.createElement(\"h1\");\r\n    h1.textContent = \"Get in touch with us\";\r\n\r\n    let form = document.createElement(\"form\");\r\n    form.innerHTML = `<label for=\"name\">Your name:</label><br>\r\n    <input type=\"text\" id=\"name\" name=\"name\"><br>\r\n    <label for=\"email\">Your email:</label><br>\r\n    <input type=\"email\" id=\"email\" name=\"email\"><br>\r\n    <label for=\"comment\">Your questions or comments:</label><br>\r\n    <input type=\"text\" id=\"comment\" name=\"comment\"><br>\r\n    <button type=\"submit\" class=\"button\">Submit</button>`\r\n\r\n    content.appendChild(h1);\r\n    content.appendChild(form);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPageLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst homePageLoad = () => {\r\n\r\n    const content = document.querySelector(\"#contentHome\");\r\n    content.innerHTML = \"\";\r\n\r\n    let h1 = document.createElement(\"h1\");\r\n    h1.textContent = \"Chez Michel\";\r\n    let img = document.createElement(\"IMG\");\r\n    img.src = \"../images/restaurant.jpg\";\r\n    img.alt = \"Interior of restaurant\";\r\n    let p = document.createElement(\"p\");\r\n    p.textContent = `We spoil you with modern french gastronomy with a classic twist. \r\n    Try our a la carte restaurant for brunch, lunch and dinner. \r\n    We also pamper your guests with delicious food for meetings and parties.`\r\n    \r\n    content.appendChild(h1);\r\n    content.appendChild(img);\r\n    content.appendChild(p);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePageLoad); \n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\n\r\n\r\nconst index = (() => {\r\n\r\n    // Default page is home page\r\n    (0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.default)(\"home\");\r\n\r\n    // Add event listeners to toggle between pages\r\n    document.querySelectorAll(\".tabs\").forEach(tab => tab.addEventListener('change', handlePageLoad));\r\n    \r\n    function handlePageLoad(e) {\r\n        (0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.default)(e.target.dataset.tab);\r\n    }\r\n\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst menuPageLoad = () => {\r\n    const content = document.querySelector(\"#contentMenu\");\r\n    content.innerHTML = \"\";\r\n\r\n    let h1 = document.createElement(\"h1\");\r\n    h1.textContent = \"Menu at Chez Michel\";\r\n    let menu = document.createElement(\"div\");\r\n    menu.innerHTML = `<h4>Entrées / Starters</h4>\r\n                        <p>Terrine  du Chef, petite compotée d'oignons  (Home-made terrine with onion chutney)\r\n                        <br><i>or</i><br>\r\n                        Bavarois d'asperges vertes sauce vinaigrette coriandre cumin façon mayonnaise, chips de jambon du pays (Asparagus mousse with a cumin and coriander mayonnaise and shards of local ham)</p>\r\n                        <h4>Plats principaux / Main courses</h4>\r\n                        <p>Suprême de Pintade Label Rouge du pays en Croûte Rouge, Gratin Dauphinois (Free range local guinea-fowl in pastry, with a potato gratin.)\r\n                        <br><i>or</i><br>\r\n                        Jarret de Boeuf à façon du pays, haricots verts pommes vapeur (Shank of beef local style, French beans and steamed potatoes.)</p>\r\n                        <h4>Desserts</h4>\r\n                        <p>Glace Melba vanille artisanale fruits de saison au romarin (Locally made vanilla ice-cream melba with seasonal fruit, flavoured with rosemary)\r\n                        <br><i>or</i><br>\r\n                        Crème Brulée à la confiture (caramel cream with jam)</p>`\r\n    \r\n    content.appendChild(h1);\r\n    content.appendChild(menu);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPageLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nconst pageLoad = (page) => {\r\n    switch (page) {\r\n        case \"home\":\r\n            (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.default)(); break;\r\n        case \"menu\":\r\n            (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.default)(); break;\r\n        case \"contact\":\r\n            (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.default)(); break;\r\n        default:\r\n            (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n    }\r\n    \r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoad.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;