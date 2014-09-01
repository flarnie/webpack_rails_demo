/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// files required here will run in the global scope
	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var $ = __webpack_require__(2),
	    HelloWorldView = __webpack_require__(3);

	// Any logic to initialize the app goes here
	// For example, starting any routers or initializing the 'home' view
	$(function() {
	  HelloWorldView.render();
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = jQuery;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var $ = __webpack_require__(2);

	var firstPar = $('<p>'),
	    textStart = $('<span>').text("You're using "),
	    webpackURL = 'http://webpack.github.io/',
	    webpackLink = $('<a>').attr('href', webpackURL).text('webpack'),
	    textEnd = $('<span>').text(' with Rails.'),
	    es6text = 'ES6',
	// The ES6 loader will compile this template string into the ES5 equivalent.
	    es6Par = $('<p>').text(
	      (("You can also use " + es6text) + " features with the ES6 loader.")
	    );

	firstPar.append(textStart).append(webpackLink).append(textEnd);

	var HelloWorldView = {
	  render: function() {
	    $('.main').append(firstPar).append(es6Par);
	  }
	};

	module.exports = HelloWorldView;

/***/ }
/******/ ])