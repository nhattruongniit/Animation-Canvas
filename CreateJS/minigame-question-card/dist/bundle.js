/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_createjs__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_createjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_createjs__);\n\n\n\n\nvar canvas, stage, loader, images;\nvar urlImage = 'images/';\nvar version = 1;\n\nvar manifest = [\n    { src: urlImage + 'luffy.png', id: 'luffy' },\n    { src: urlImage + 'zorro.png', id: 'zorro' },\n    { src: urlImage + 'sanji.png', id: 'sanji' }\n];\n\nfunction imgGeneration(path) {\n    var img = new Image();\n    img.src = path;\n    return img;\n}\n\nfunction cacheImage() {\n    for (var i = 0; i < manifest.length; i++) {\n        manifest[i].src = manifest[i].src + \"?v=\" + version;\n        imgGeneration(manifest[i].src);\n    }\n}\n\ncacheImage();\n\nfunction init() {\n    canvas = document.getElementById('canvas');\n    images = images || {};\n    stage = new __WEBPACK_IMPORTED_MODULE_0_createjs___default.a.Stage(canvas);\n    __WEBPACK_IMPORTED_MODULE_0_createjs___default.a.Ticker.setFPS(30);\n    __WEBPACK_IMPORTED_MODULE_0_createjs___default.a.Ticker.addEventListener('tick', handleTick);\n\n    loader = new __WEBPACK_IMPORTED_MODULE_0_createjs___default.a.LoadQueue(false);\n    loader.addEventListener('fileload', handleFileLoad);\n    loader.addEventListener('complete', handleComplete);\n    loader.loadManifest(manifest);\n\n    var luffy = new __WEBPACK_IMPORTED_MODULE_0_createjs___default.a.Bitmap(manifest[0].src);\n\n    stage.addChild(luffy);\n}\n\nfunction handleFileLoad(evt) {\n    if (evt.item.type == 'image') { images[evt.item.id] = evt.result }\n}\n\nfunction handleComplete() {\n\n}\n\nfunction handleTick() {\n    stage.update();\n}\n\nwindow.addEventListener('load', init(), false);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsiLi9kaXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGNyZWF0ZWpzIGZyb20gJ2NyZWF0ZWpzJztcblxudmFyIGNhbnZhcywgc3RhZ2UsIGxvYWRlciwgaW1hZ2VzO1xudmFyIHVybEltYWdlID0gJ2ltYWdlcy8nO1xudmFyIHZlcnNpb24gPSAxO1xuXG52YXIgbWFuaWZlc3QgPSBbXG4gICAgeyBzcmM6IHVybEltYWdlICsgJ2x1ZmZ5LnBuZycsIGlkOiAnbHVmZnknIH0sXG4gICAgeyBzcmM6IHVybEltYWdlICsgJ3pvcnJvLnBuZycsIGlkOiAnem9ycm8nIH0sXG4gICAgeyBzcmM6IHVybEltYWdlICsgJ3NhbmppLnBuZycsIGlkOiAnc2FuamknIH1cbl07XG5cbmZ1bmN0aW9uIGltZ0dlbmVyYXRpb24ocGF0aCkge1xuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gcGF0aDtcbiAgICByZXR1cm4gaW1nO1xufVxuXG5mdW5jdGlvbiBjYWNoZUltYWdlKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWFuaWZlc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbWFuaWZlc3RbaV0uc3JjID0gbWFuaWZlc3RbaV0uc3JjICsgXCI/dj1cIiArIHZlcnNpb247XG4gICAgICAgIGltZ0dlbmVyYXRpb24obWFuaWZlc3RbaV0uc3JjKTtcbiAgICB9XG59XG5cbmNhY2hlSW1hZ2UoKTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgaW1hZ2VzID0gaW1hZ2VzIHx8IHt9O1xuICAgIHN0YWdlID0gbmV3IGNyZWF0ZWpzLlN0YWdlKGNhbnZhcyk7XG4gICAgY3JlYXRlanMuVGlja2VyLnNldEZQUygzMCk7XG4gICAgY3JlYXRlanMuVGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3RpY2snLCBoYW5kbGVUaWNrKTtcblxuICAgIGxvYWRlciA9IG5ldyBjcmVhdGVqcy5Mb2FkUXVldWUoZmFsc2UpO1xuICAgIGxvYWRlci5hZGRFdmVudExpc3RlbmVyKCdmaWxlbG9hZCcsIGhhbmRsZUZpbGVMb2FkKTtcbiAgICBsb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCBoYW5kbGVDb21wbGV0ZSk7XG4gICAgbG9hZGVyLmxvYWRNYW5pZmVzdChtYW5pZmVzdCk7XG5cbiAgICB2YXIgbHVmZnkgPSBuZXcgY3JlYXRlanMuQml0bWFwKG1hbmlmZXN0WzBdLnNyYyk7XG5cbiAgICBzdGFnZS5hZGRDaGlsZChsdWZmeSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUZpbGVMb2FkKGV2dCkge1xuICAgIGlmIChldnQuaXRlbS50eXBlID09ICdpbWFnZScpIHsgaW1hZ2VzW2V2dC5pdGVtLmlkXSA9IGV2dC5yZXN1bHQgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDb21wbGV0ZSgpIHtcblxufVxuXG5mdW5jdGlvbiBoYW5kbGVUaWNrKCkge1xuICAgIHN0YWdlLnVwZGF0ZSgpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGluaXQoKSwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = createjs;

/***/ })
/******/ ]);