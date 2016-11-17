/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var c, t;
	c = __webpack_require__(1);
	t = __webpack_require__(2);
	alert(8989);
	//# sourceMappingURL=e:\play\repo-play\node_modules\livescript-loader\index.js!e:\play\repo-play\src\index.ls.map


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function(){
	  alert(123123);
	};
	//# sourceMappingURL=e:\play\repo-play\node_modules\livescript-loader\index.js!e:\play\repo-play\src\component\component.ls.map


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "<p>Hi777</p>"

/***/ }
/******/ ]);