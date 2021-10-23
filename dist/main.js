/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  color: blue;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;EACE,WAHW;AAEb","sourcesContent":["$body-color: blue;\n\nbody {\n  color: $body-color;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\nhtml {\n  font-size: 10px;\n  overflow-y: hidden;\n}\n\n.todo-list {\n  padding: 20px;\n}\n\n.todo-item {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 1px solid black;\n}\n\nheader {\n  display: flex;\n  padding: 0 240px;\n}\n\nheader button {\n  border: none;\n  padding: 2px;\n  border-radius: 2px;\n  background-color: transparent;\n  display: flex;\n  margin-left: 15px;\n}\n\nheader button:hover {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.6rem;\n  height: 100%;\n}\n\nheader h1 {\n  font-size: 2rem;\n  color: #fff;\n  height: 20px;\n  margin-left: 12px;\n}\n\n#app {\n  position: relative;\n  overflow-y: hidden;\n  height: 100vh;\n  display: flex;\n}\n\nmain {\n  position: absolute;\n  justify-self: center;\n  left: 300px;\n  width: calc(100% - 300px);\n\n  transition: left 0.6s ease;\n}\n\nmain .display-todo-list {\n  padding: 60px;\n}\n\n.full-main {\n  left: 0px;\n}\n\n#projects-list {\n  margin-left: 18px;\n}\n\naside {\n  position: absolute;\n  background-color: #f7f7f7;\n  z-index: 10;\n  transform: translateX(0);\n  width: 300px;\n  height: 100%;\n  transition: transform 0.6s ease;\n}\n\n.show-aside {\n  transform: translateX(0);\n}\n\n.hide-aside {\n  transform: translateX(-400px);\n}\n\naside #projects-main-list {\n  padding: 20px 0 20px 20px;\n}\n\naside #projects-main-list ul {\n  list-style-type: none;\n}\n\naside #projects-main-list li {\n  list-style-type: none;\n  padding: 10px 8px;\n  /* padding: 4px 6px; */\n  display: flex;\n  align-items: center;\n  font-size: 1.4rem;\n  font-weight: 400;\n}\n\naside #projects-main-list li svg {\n  margin-right: 10px;\n}\n\naside #projects-main-list .display-main-list {\n  border-radius: 5px;\n}\n\naside #projects-main-list .display-main-list:hover {\n  cursor: pointer;\n  background-color: #ececec;\n}\n\naside #projects-main-list .display-projects-list {\n  padding-top: 2rem;\n}\n\naside .todo-informations {\n  padding: 12px 6px 12px 12px;\n}\n\nheader {\n  background-color: #db4c3f;\n  padding: 1rem;\n}\n\n@media only screen and (max-width: 815px) {\n  main {\n    width: 100%;\n    position: absolute;\n    margin-left: 0px;\n    left: 0px;\n  }\n\n  aside {\n    transform: translateX(-340px);\n  }\n}\n\n@media only screen and (min-width: 815px) {\n  .full-main {\n    left: 140px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,6BAA6B;EAC7B,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,WAAW;EACX,yBAAyB;;EAEzB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,WAAW;EACX,wBAAwB;EACxB,YAAY;EACZ,YAAY;EACZ,+BAA+B;AACjC;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE;IACE,WAAW;IACX,kBAAkB;IAClB,gBAAgB;IAChB,SAAS;EACX;;EAEA;IACE,6BAA6B;EAC/B;AACF;;AAEA;EACE;IACE,WAAW;EACb;AACF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\nhtml {\n  font-size: 10px;\n  overflow-y: hidden;\n}\n\n.todo-list {\n  padding: 20px;\n}\n\n.todo-item {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 1px solid black;\n}\n\nheader {\n  display: flex;\n  padding: 0 240px;\n}\n\nheader button {\n  border: none;\n  padding: 2px;\n  border-radius: 2px;\n  background-color: transparent;\n  display: flex;\n  margin-left: 15px;\n}\n\nheader button:hover {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.6rem;\n  height: 100%;\n}\n\nheader h1 {\n  font-size: 2rem;\n  color: #fff;\n  height: 20px;\n  margin-left: 12px;\n}\n\n#app {\n  position: relative;\n  overflow-y: hidden;\n  height: 100vh;\n  display: flex;\n}\n\nmain {\n  position: absolute;\n  justify-self: center;\n  left: 300px;\n  width: calc(100% - 300px);\n\n  transition: left 0.6s ease;\n}\n\nmain .display-todo-list {\n  padding: 60px;\n}\n\n.full-main {\n  left: 0px;\n}\n\n#projects-list {\n  margin-left: 18px;\n}\n\naside {\n  position: absolute;\n  background-color: #f7f7f7;\n  z-index: 10;\n  transform: translateX(0);\n  width: 300px;\n  height: 100%;\n  transition: transform 0.6s ease;\n}\n\n.show-aside {\n  transform: translateX(0);\n}\n\n.hide-aside {\n  transform: translateX(-400px);\n}\n\naside #projects-main-list {\n  padding: 20px 0 20px 20px;\n}\n\naside #projects-main-list ul {\n  list-style-type: none;\n}\n\naside #projects-main-list li {\n  list-style-type: none;\n  padding: 10px 8px;\n  /* padding: 4px 6px; */\n  display: flex;\n  align-items: center;\n  font-size: 1.4rem;\n  font-weight: 400;\n}\n\naside #projects-main-list li svg {\n  margin-right: 10px;\n}\n\naside #projects-main-list .display-main-list {\n  border-radius: 5px;\n}\n\naside #projects-main-list .display-main-list:hover {\n  cursor: pointer;\n  background-color: #ececec;\n}\n\naside #projects-main-list .display-projects-list {\n  padding-top: 2rem;\n}\n\naside .todo-informations {\n  padding: 12px 6px 12px 12px;\n}\n\nheader {\n  background-color: #db4c3f;\n  padding: 1rem;\n}\n\n@media only screen and (max-width: 815px) {\n  main {\n    width: 100%;\n    position: absolute;\n    margin-left: 0px;\n    left: 0px;\n  }\n\n  aside {\n    transform: translateX(-340px);\n  }\n}\n\n@media only screen and (min-width: 815px) {\n  .full-main {\n    left: 140px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _handleTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleTodo */ "./src/modules/handleTodo.js");
/* harmony import */ var _handleProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleProject */ "./src/modules/handleProject.js");



const UI = (() => {
  console.log('UI loaded');

  const loadTodoList = (name = 'inbox') => {
    const todoCategory = document.getElementById('todo-category');
    todoCategory.textContent = name;

    const displayTodoList = document.querySelector('.todo-list');
    displayTodoList.textContent = '';

    const todoList = _handleProject__WEBPACK_IMPORTED_MODULE_1__.handleProjectListModule.getTodosByProjectName(name);

    if (todoList.length === 0) {
      const emptyTodo = document.createElement('h2');
      emptyTodo.textContent = 'empty todo for now';
      displayTodoList.appendChild(emptyTodo);
    } else {
      todoList.forEach((todo) => {
        const appendTodo = renderTodoItem(todo);
        displayTodoList.appendChild(appendTodo);
      });
    }
  };

  const loadProjectList = () => {
    const projectList = document.getElementById('projects-list');
    projectList.textContent = '';

    const projects = _handleProject__WEBPACK_IMPORTED_MODULE_1__.handleProjectListModule.getAllProjectExceptInbox();
    // const projects = null;

    if (!projects) {
      const emptyProject = document.createElement('h3');
      emptyProject.textContent = 'No project yet';
      projectList.appendChild(emptyProject);
    } else {
      projects.forEach((project) => {
        const appendProject = renderProjectItem(project);
        projectList.appendChild(appendProject);
      });
    }
  };

  const deleteTodo = (todo) => {
    _handleTodo__WEBPACK_IMPORTED_MODULE_0__.handleTodoListModule.deleteTodoWithID(todo.id);
    _handleProject__WEBPACK_IMPORTED_MODULE_1__.handleProjectListModule.deleteTodoFromProject(todo.project, todo);

    loadTodoList(todo.project);
  };

  const deleteProject = (project) => {
    _handleProject__WEBPACK_IMPORTED_MODULE_1__.handleProjectListModule.deleteProject(project);
    loadProjectList();
  };

  const renderProjectItem = (project) => {
    const wrapperProject = document.createElement('div');
    const projectTitle = document.createElement('span');
    const deleteProjectBtn = document.createElement('button');
    projectTitle.textContent = project.title;
    projectTitle.classList.add('project-name');
    deleteProjectBtn.textContent = 'X';
    deleteProjectBtn.onclick = () => deleteProject(project);
    wrapperProject.appendChild(projectTitle);
    wrapperProject.appendChild(deleteProjectBtn);

    return wrapperProject;
  };

  const renderTodoItem = (todo) => {
    // TODO : recuperer mes deux fonctions APPENCHILD et FACTORYELEMENT
    const todoItem = document.createElement('div');
    const leftSideOfTodoItem = document.createElement('div');
    const rightSideOfTodoItem = document.createElement('div');
    const doneBtn = document.createElement('button');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    const dislayTodoTitle = document.createElement('span');
    const displayPriority = document.createElement('span');

    todoItem.classList.add('todo-item');
    leftSideOfTodoItem.classList.add('left');
    rightSideOfTodoItem.classList.add('right');

    dislayTodoTitle.textContent = `${todo.title}`;
    doneBtn.textContent = 'done';
    editBtn.textContent = 'edit';
    displayPriority.textContent = 'priority';
    deleteBtn.textContent = 'delete';
    deleteBtn.onclick = () => deleteTodo(todo);

    leftSideOfTodoItem.appendChild(doneBtn);
    leftSideOfTodoItem.appendChild(dislayTodoTitle);

    rightSideOfTodoItem.appendChild(editBtn);
    rightSideOfTodoItem.appendChild(displayPriority);
    rightSideOfTodoItem.appendChild(deleteBtn);

    todoItem.appendChild(leftSideOfTodoItem);
    todoItem.appendChild(rightSideOfTodoItem);

    return todoItem;
  };

  const getTodoInfo = () => {
    const newTodo = Array.from(document.querySelectorAll('#add-todo-form input'))
      .reduce((acc, input) => (
        { ...acc, [input.id]: input.value }
      ), {});

    return newTodo;
  };

  const getProjectToAddInfo = () => {
    const projectTitle = document.querySelector('#add-project-form input').value;

    return projectTitle.toLowerCase();
  };

  const addTodoUI = () => {
    const addTodoForm = document.getElementById('add-todo-form');

    addTodoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newTodo = (0,_handleTodo__WEBPACK_IMPORTED_MODULE_0__.todoFactory2)(getTodoInfo());
      console.log(newTodo.project);
      _handleTodo__WEBPACK_IMPORTED_MODULE_0__.handleTodoListModule.addTodo(newTodo);
      _handleProject__WEBPACK_IMPORTED_MODULE_1__.handleProjectListModule.addTodoToProject(newTodo.project, newTodo);
      loadTodoList(newTodo.project);
    });
  };

  const AddEventListenerToFetchTodoInProject = () => {
    const projectName = document.querySelectorAll('.project-name');
    projectName.forEach((project) => {
      console.log(project);
      project.addEventListener('click', () => {
        loadTodoList(project.textContent);
      });
    });
  };

  const addProjectUI = () => {
    const addProjectForm = document.getElementById('add-project-form');

    addProjectForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newProjectTitle = getProjectToAddInfo();
      const newProject = (0,_handleProject__WEBPACK_IMPORTED_MODULE_1__.projectFactory)(newProjectTitle);
      console.log(newProject);
      _handleProject__WEBPACK_IMPORTED_MODULE_1__.handleProjectListModule.addProject(newProject);
      // handleProjectListModule.getAllProject();
      loadProjectList();
      AddEventListenerToFetchTodoInProject();
    });
  };

  const hideAsideSide = () => {
    const hideBtn = document.getElementById('hide-aside');
    const asideInfo = document.getElementById('aside-informations');
    const mainInfo = document.getElementById('main-informations');
    hideBtn.addEventListener('click', () => {
      asideInfo.classList.toggle('show-aside');
      asideInfo.classList.toggle('hide-aside');
      mainInfo.classList.toggle('full-main');
    });
  };

  const toggleClassOnSmallerScreen = () => {
    const asideInfo = document.getElementById('aside-informations');
    const mainInfo = document.getElementById('main-informations');

    window.addEventListener('resize', () => {
      const width = document.body.clientWidth;
      if (width < 815) {
        if (asideInfo.classList.value === 'show-aside') {
          asideInfo.classList.remove('show-aside');
          asideInfo.classList.add('hide-aside');
        }
      }

      if (width > 815) {
        if (asideInfo.classList.value === 'hide-aside') {
          asideInfo.classList.remove('hide-aside');
          asideInfo.classList.add('show-aside');
        }
        if (mainInfo.classList.value === 'full-main') {
          mainInfo.classList.remove('full-main');
        }
      }
    });
  };

  return {
    loadTodoList,
    loadProjectList,
    addTodoUI,
    addProjectUI,
    AddEventListenerToFetchTodoInProject,
    hideAsideSide,
    toggleClassOnSmallerScreen,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


/***/ }),

/***/ "./src/modules/handleProject.js":
/*!**************************************!*\
  !*** ./src/modules/handleProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory),
/* harmony export */   "handleProjectListModule": () => (/* binding */ handleProjectListModule)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _handleTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleTodo */ "./src/modules/handleTodo.js");



const projectFactory = (title) => {
  const todos = [];

  return {
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    title: title.toLowerCase(),
    todos,
  };
};

const handleProjectListModule = (() => {
  const allTodos = _handleTodo__WEBPACK_IMPORTED_MODULE_0__.handleTodoListModule.getTodoList();
  let listProject = [];

  const addProject = (project) => {
    listProject.push(project);
  };

  const getProjectByName = (name) => {
    const results = listProject.find((project) => project.title === name.toLowerCase());
    return results;
  };

  const getTodosByProjectName = (name) => {
    const results = listProject.find((project) => project.title === name.toLowerCase());
    return results.todos;
  };

  const addTodoToProject = (name, todo) => {
    const projectToAdd = getProjectByName(name);

    if (projectToAdd.todos.find((task) => task.id === todo.id)) return;
    if (todo.project !== name) return;
    projectToAdd.todos.push(todo);
  };

  const deleteTodoFromProject = (project, todo) => {
    const projectToDelete = getProjectByName(project);

    projectToDelete.todos = projectToDelete.todos.filter((item) => item.id !== todo.id);
  };

  const showAllTodos = () => {
    console.table(allTodos);
  };

  const getAllProject = () => listProject;

  const getAllProjectExceptInbox = () => {
    const allProjectExceptInbox = listProject.filter((project) => project.title !== 'inbox');
    return allProjectExceptInbox;
  };

  const deleteProject = (project) => {
    listProject = listProject.filter((item) => item.id !== project.id);

    _handleTodo__WEBPACK_IMPORTED_MODULE_0__.handleTodoListModule.deleteAllTodoFromDeletedProject(project.title);
  };

  return {
    addProject,
    getAllProject,
    getAllProjectExceptInbox,
    getProjectByName,
    getTodosByProjectName,
    showAllTodos,
    addTodoToProject,
    deleteTodoFromProject,
    deleteProject,
  };
})();




/***/ }),

/***/ "./src/modules/handleTodo.js":
/*!***********************************!*\
  !*** ./src/modules/handleTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoFactory": () => (/* binding */ todoFactory),
/* harmony export */   "todoFactory2": () => (/* binding */ todoFactory2),
/* harmony export */   "handleTodoListModule": () => (/* binding */ handleTodoListModule)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


const todoFactory = (title, description, project = 'inbox') => ({
  id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  title,
  description,
  project: project.toLowerCase(),
});

const todoFactory2 = (todo) => ({
  id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  title: todo.title,
  description: todo.description,
  project: todo.project.toLowerCase() || 'inbox',
});

const handleTodoListModule = (() => {
  let listTodo = [];

  const addTodo = (todo) => {
    listTodo.push(todo);
  };

  const deleteTodo = (todo) => {
    // function inutile, mais je la garde pour le moment.
    // j'utilise l'id via le dom pour delete
    listTodo = listTodo.filter((item) => item.id !== todo.id);
  };

  const deleteTodoWithID = (id) => {
    listTodo = listTodo.filter((item) => item.id !== id);
  };

  const deleteAllTodoFromDeletedProject = (projectName) => {
    listTodo = listTodo.filter((item) => item.project !== projectName);
  };

  const getTodoList = () => {
    console.table(listTodo);
    return listTodo;
  };

  const getTodoId = (todo) => {
    console.log(todo.id);
  };

  const updateTodo = (todo, title, description, project) => {
    const updatedTodo = {
      title,
      description,
      project: project.toLowerCase(),
    };

    Object.assign(todo, updatedTodo);
  };

  return {
    addTodo,
    deleteTodo,
    getTodoList,
    getTodoId,
    updateTodo,
    deleteAllTodoFromDeletedProject,
    deleteTodoWithID,
  };
})();




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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/handleTodo */ "./src/modules/handleTodo.js");
/* harmony import */ var _modules_handleProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handleProject */ "./src/modules/handleProject.js");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");






const newTodo = (0,_modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.todoFactory)('start react', 'buy milk for lune', 'JavaScript');
const todo2 = (0,_modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.todoFactory)('call mom', 'call mom for birthday', 'Perso');
const todo3 = (0,_modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.todoFactory)(
  'read You dont know JS',
  'buy the book first',
  'JavaScript'
);
const todo4 = (0,_modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.todoFactory)('watch barcelona', 'league des champiosn');
const deleteTodo = (0,_modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.todoFactory)('foo', 'bar', 'JAVASCRIPT');
const todo5 = (0,_modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.todoFactory)('another todo', 'its cool');
// console.log(newTodo);

// handleTodoList.getTodoList();
_modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.handleTodoListModule.addTodo(newTodo);
_modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.handleTodoListModule.addTodo(todo2);
_modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.handleTodoListModule.addTodo(todo3);
_modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.handleTodoListModule.addTodo(todo4);
_modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.handleTodoListModule.addTodo(deleteTodo);
_modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.handleTodoListModule.addTodo(todo5);
// handleTodoList.getTodoList();

// handleTodoList.getTodoId(todo2);
_modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.handleTodoListModule.updateTodo(
  todo4,
  'watch Barcelona',
  'Champions League',
  'Football'
);
// handleTodoList.deleteTodo(todo3);

const newProject = (0,_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.projectFactory)('JavaScript');
const persoProject = (0,_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.projectFactory)('Perso');
const football = (0,_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.projectFactory)('fooTball');
const inbox = (0,_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.projectFactory)('inbox');

// console.log(newProject);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addProject(newProject);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addProject(persoProject);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addProject(football);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addProject(inbox);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.showAllTodos();
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addTodoToProject(newProject.title, todo3);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addTodoToProject(football.title, todo4);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addTodoToProject(persoProject.title, todo2);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addTodoToProject(newProject.title, todo3);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addTodoToProject(newProject.title, deleteTodo);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addTodoToProject(newProject.title, todo3);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addTodoToProject(newProject.title, todo3);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addTodoToProject(newProject.title, newTodo);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addTodoToProject(newProject.title, todo3);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addTodoToProject(inbox.title, todo5);

// handleProjectList.getProjectByName('JavaScript');
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.showAllTodos();
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.getProjectByName('javAscRipt');

_modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.handleTodoListModule.deleteTodo(deleteTodo);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.deleteTodoFromProject(deleteTodo.project, deleteTodo);
_modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.handleTodoListModule.getTodoList();

_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.getAllProject();

_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.deleteProject(persoProject);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.getAllProject();
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.showAllTodos();

// UI.loadTodoList();
// UI.deleteTodoUI();

_modules_UI__WEBPACK_IMPORTED_MODULE_4__["default"].loadTodoList();
_modules_UI__WEBPACK_IMPORTED_MODULE_4__["default"].loadProjectList();
_modules_UI__WEBPACK_IMPORTED_MODULE_4__["default"].addProjectUI();
_modules_UI__WEBPACK_IMPORTED_MODULE_4__["default"].addTodoUI();
_modules_UI__WEBPACK_IMPORTED_MODULE_4__["default"].AddEventListenerToFetchTodoInProject();
_modules_UI__WEBPACK_IMPORTED_MODULE_4__["default"].hideAsideSide();
_modules_UI__WEBPACK_IMPORTED_MODULE_4__["default"].toggleClassOnSmallerScreen();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNDO0FBQ21EO0FBSXhDO0FBQ0g7O0FBRTlCLGdCQUFnQixnRUFBVztBQUMzQixjQUFjLGdFQUFXO0FBQ3pCLGNBQWMsZ0VBQVc7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdFQUFXO0FBQ3pCLG1CQUFtQixnRUFBVztBQUM5QixjQUFjLGdFQUFXO0FBQ3pCOztBQUVBO0FBQ0EsNkVBQTRCO0FBQzVCLDZFQUE0QjtBQUM1Qiw2RUFBNEI7QUFDNUIsNkVBQTRCO0FBQzVCLDZFQUE0QjtBQUM1Qiw2RUFBNEI7QUFDNUI7O0FBRUE7QUFDQSxnRkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixzRUFBYztBQUNqQyxxQkFBcUIsc0VBQWM7QUFDbkMsaUJBQWlCLHNFQUFjO0FBQy9CLGNBQWMsc0VBQWM7O0FBRTVCO0FBQ0Esc0ZBQWtDO0FBQ2xDLHNGQUFrQztBQUNsQyxzRkFBa0M7QUFDbEMsc0ZBQWtDO0FBQ2xDLHdGQUFvQztBQUNwQyw0RkFBd0M7QUFDeEMsNEZBQXdDO0FBQ3hDLDRGQUF3QztBQUN4Qyw0RkFBd0M7QUFDeEMsNEZBQXdDO0FBQ3hDLDRGQUF3QztBQUN4Qyw0RkFBd0M7QUFDeEMsNEZBQXdDO0FBQ3hDLDRGQUF3QztBQUN4Qyw0RkFBd0M7O0FBRXhDO0FBQ0Esd0ZBQW9DO0FBQ3BDLDRGQUF3Qzs7QUFFeEMsZ0ZBQStCO0FBQy9CLGlHQUE2QztBQUM3QyxpRkFBZ0M7O0FBRWhDLHlGQUFxQzs7QUFFckMseUZBQXFDO0FBQ3JDLHlGQUFxQztBQUNyQyx3RkFBb0M7O0FBRXBDO0FBQ0E7O0FBRUEsZ0VBQWU7QUFDZixtRUFBa0I7QUFDbEIsZ0VBQWU7QUFDZiw2REFBWTtBQUNaLHdGQUF1QztBQUN2QyxpRUFBZ0I7QUFDaEIsOEVBQTZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZHVsZXMvaGFuZGxlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbW9kdWxlcy9oYW5kbGVUb2RvLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGNvbG9yOiBibHVlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFdBSFc7QUFFYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYm9keS1jb2xvcjogYmx1ZTtcXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiAkYm9keS1jb2xvcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi50b2RvLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwIDI0MHB4O1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XFxufVxcblxcbiNhcHAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbm1haW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBsZWZ0OiAzMDBweDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCk7XFxuXFxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuNnMgZWFzZTtcXG59XFxuXFxubWFpbiAuZGlzcGxheS10b2RvLWxpc3Qge1xcbiAgcGFkZGluZzogNjBweDtcXG59XFxuXFxuLmZ1bGwtbWFpbiB7XFxuICBsZWZ0OiAwcHg7XFxufVxcblxcbiNwcm9qZWN0cy1saXN0IHtcXG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xcbn1cXG5cXG5hc2lkZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcbiAgei1pbmRleDogMTA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlO1xcbn1cXG5cXG4uc2hvdy1hc2lkZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxufVxcblxcbi5oaWRlLWFzaWRlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDAwcHgpO1xcbn1cXG5cXG5hc2lkZSAjcHJvamVjdHMtbWFpbi1saXN0IHtcXG4gIHBhZGRpbmc6IDIwcHggMCAyMHB4IDIwcHg7XFxufVxcblxcbmFzaWRlICNwcm9qZWN0cy1tYWluLWxpc3QgdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5hc2lkZSAjcHJvamVjdHMtbWFpbi1saXN0IGxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHggOHB4O1xcbiAgLyogcGFkZGluZzogNHB4IDZweDsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5hc2lkZSAjcHJvamVjdHMtbWFpbi1saXN0IGxpIHN2ZyB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbmFzaWRlICNwcm9qZWN0cy1tYWluLWxpc3QgLmRpc3BsYXktbWFpbi1saXN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuYXNpZGUgI3Byb2plY3RzLW1haW4tbGlzdCAuZGlzcGxheS1tYWluLWxpc3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcXG59XFxuXFxuYXNpZGUgI3Byb2plY3RzLW1haW4tbGlzdCAuZGlzcGxheS1wcm9qZWN0cy1saXN0IHtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbn1cXG5cXG5hc2lkZSAudG9kby1pbmZvcm1hdGlvbnMge1xcbiAgcGFkZGluZzogMTJweCA2cHggMTJweCAxMnB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiNGMzZjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODE1cHgpIHtcXG4gIG1haW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICB9XFxuXFxuICBhc2lkZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzQwcHgpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgxNXB4KSB7XFxuICAuZnVsbC1tYWluIHtcXG4gICAgbGVmdDogMTQwcHg7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCx5QkFBeUI7O0VBRXpCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osWUFBWTtFQUNaLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSw2QkFBNkI7RUFDL0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi50b2RvLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwIDI0MHB4O1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XFxufVxcblxcbiNhcHAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbm1haW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBsZWZ0OiAzMDBweDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCk7XFxuXFxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuNnMgZWFzZTtcXG59XFxuXFxubWFpbiAuZGlzcGxheS10b2RvLWxpc3Qge1xcbiAgcGFkZGluZzogNjBweDtcXG59XFxuXFxuLmZ1bGwtbWFpbiB7XFxuICBsZWZ0OiAwcHg7XFxufVxcblxcbiNwcm9qZWN0cy1saXN0IHtcXG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xcbn1cXG5cXG5hc2lkZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcbiAgei1pbmRleDogMTA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlO1xcbn1cXG5cXG4uc2hvdy1hc2lkZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxufVxcblxcbi5oaWRlLWFzaWRlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDAwcHgpO1xcbn1cXG5cXG5hc2lkZSAjcHJvamVjdHMtbWFpbi1saXN0IHtcXG4gIHBhZGRpbmc6IDIwcHggMCAyMHB4IDIwcHg7XFxufVxcblxcbmFzaWRlICNwcm9qZWN0cy1tYWluLWxpc3QgdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5hc2lkZSAjcHJvamVjdHMtbWFpbi1saXN0IGxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHggOHB4O1xcbiAgLyogcGFkZGluZzogNHB4IDZweDsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5hc2lkZSAjcHJvamVjdHMtbWFpbi1saXN0IGxpIHN2ZyB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbmFzaWRlICNwcm9qZWN0cy1tYWluLWxpc3QgLmRpc3BsYXktbWFpbi1saXN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuYXNpZGUgI3Byb2plY3RzLW1haW4tbGlzdCAuZGlzcGxheS1tYWluLWxpc3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcXG59XFxuXFxuYXNpZGUgI3Byb2plY3RzLW1haW4tbGlzdCAuZGlzcGxheS1wcm9qZWN0cy1saXN0IHtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbn1cXG5cXG5hc2lkZSAudG9kby1pbmZvcm1hdGlvbnMge1xcbiAgcGFkZGluZzogMTJweCA2cHggMTJweCAxMnB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiNGMzZjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODE1cHgpIHtcXG4gIG1haW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICB9XFxuXFxuICBhc2lkZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzQwcHgpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgxNXB4KSB7XFxuICAuZnVsbC1tYWluIHtcXG4gICAgbGVmdDogMTQwcHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxudmFyIGdldFJhbmRvbVZhbHVlcztcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLiBBbHNvLFxuICAgIC8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxudmFyIGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSkpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyKSB7XG4gIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICB2YXIgdXVpZCA9IChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gc3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQgeyB0b2RvRmFjdG9yeSwgaGFuZGxlVG9kb0xpc3RNb2R1bGUsIHRvZG9GYWN0b3J5MiB9IGZyb20gJy4vaGFuZGxlVG9kbyc7XG5pbXBvcnQgeyBwcm9qZWN0RmFjdG9yeSwgaGFuZGxlUHJvamVjdExpc3RNb2R1bGUgfSBmcm9tICcuL2hhbmRsZVByb2plY3QnO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdVSSBsb2FkZWQnKTtcblxuICBjb25zdCBsb2FkVG9kb0xpc3QgPSAobmFtZSA9ICdpbmJveCcpID0+IHtcbiAgICBjb25zdCB0b2RvQ2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1jYXRlZ29yeScpO1xuICAgIHRvZG9DYXRlZ29yeS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICBjb25zdCBkaXNwbGF5VG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG4gICAgZGlzcGxheVRvZG9MaXN0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBjb25zdCB0b2RvTGlzdCA9IGhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmdldFRvZG9zQnlQcm9qZWN0TmFtZShuYW1lKTtcblxuICAgIGlmICh0b2RvTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGVtcHR5VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICBlbXB0eVRvZG8udGV4dENvbnRlbnQgPSAnZW1wdHkgdG9kbyBmb3Igbm93JztcbiAgICAgIGRpc3BsYXlUb2RvTGlzdC5hcHBlbmRDaGlsZChlbXB0eVRvZG8pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvTGlzdC5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IGFwcGVuZFRvZG8gPSByZW5kZXJUb2RvSXRlbSh0b2RvKTtcbiAgICAgICAgZGlzcGxheVRvZG9MaXN0LmFwcGVuZENoaWxkKGFwcGVuZFRvZG8pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvYWRQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy1saXN0Jyk7XG4gICAgcHJvamVjdExpc3QudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGNvbnN0IHByb2plY3RzID0gaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuZ2V0QWxsUHJvamVjdEV4Y2VwdEluYm94KCk7XG4gICAgLy8gY29uc3QgcHJvamVjdHMgPSBudWxsO1xuXG4gICAgaWYgKCFwcm9qZWN0cykge1xuICAgICAgY29uc3QgZW1wdHlQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIGVtcHR5UHJvamVjdC50ZXh0Q29udGVudCA9ICdObyBwcm9qZWN0IHlldCc7XG4gICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChlbXB0eVByb2plY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGFwcGVuZFByb2plY3QgPSByZW5kZXJQcm9qZWN0SXRlbShwcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoYXBwZW5kUHJvamVjdCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgaGFuZGxlVG9kb0xpc3RNb2R1bGUuZGVsZXRlVG9kb1dpdGhJRCh0b2RvLmlkKTtcbiAgICBoYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5kZWxldGVUb2RvRnJvbVByb2plY3QodG9kby5wcm9qZWN0LCB0b2RvKTtcblxuICAgIGxvYWRUb2RvTGlzdCh0b2RvLnByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmRlbGV0ZVByb2plY3QocHJvamVjdCk7XG4gICAgbG9hZFByb2plY3RMaXN0KCk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUHJvamVjdEl0ZW0gPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXJQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICBkZWxldGVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIGRlbGV0ZVByb2plY3RCdG4ub25jbGljayA9ICgpID0+IGRlbGV0ZVByb2plY3QocHJvamVjdCk7XG4gICAgd3JhcHBlclByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICB3cmFwcGVyUHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcblxuICAgIHJldHVybiB3cmFwcGVyUHJvamVjdDtcbiAgfTtcblxuICBjb25zdCByZW5kZXJUb2RvSXRlbSA9ICh0b2RvKSA9PiB7XG4gICAgLy8gVE9ETyA6IHJlY3VwZXJlciBtZXMgZGV1eCBmb25jdGlvbnMgQVBQRU5DSElMRCBldCBGQUNUT1JZRUxFTUVOVFxuICAgIGNvbnN0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbGVmdFNpZGVPZlRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcmlnaHRTaWRlT2ZUb2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRvbmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZGlzbGF5VG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGRpc3BsYXlQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbScpO1xuICAgIGxlZnRTaWRlT2ZUb2RvSXRlbS5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XG4gICAgcmlnaHRTaWRlT2ZUb2RvSXRlbS5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xuXG4gICAgZGlzbGF5VG9kb1RpdGxlLnRleHRDb250ZW50ID0gYCR7dG9kby50aXRsZX1gO1xuICAgIGRvbmVCdG4udGV4dENvbnRlbnQgPSAnZG9uZSc7XG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdlZGl0JztcbiAgICBkaXNwbGF5UHJpb3JpdHkudGV4dENvbnRlbnQgPSAncHJpb3JpdHknO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdkZWxldGUnO1xuICAgIGRlbGV0ZUJ0bi5vbmNsaWNrID0gKCkgPT4gZGVsZXRlVG9kbyh0b2RvKTtcblxuICAgIGxlZnRTaWRlT2ZUb2RvSXRlbS5hcHBlbmRDaGlsZChkb25lQnRuKTtcbiAgICBsZWZ0U2lkZU9mVG9kb0l0ZW0uYXBwZW5kQ2hpbGQoZGlzbGF5VG9kb1RpdGxlKTtcblxuICAgIHJpZ2h0U2lkZU9mVG9kb0l0ZW0uYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgcmlnaHRTaWRlT2ZUb2RvSXRlbS5hcHBlbmRDaGlsZChkaXNwbGF5UHJpb3JpdHkpO1xuICAgIHJpZ2h0U2lkZU9mVG9kb0l0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKGxlZnRTaWRlT2ZUb2RvSXRlbSk7XG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQocmlnaHRTaWRlT2ZUb2RvSXRlbSk7XG5cbiAgICByZXR1cm4gdG9kb0l0ZW07XG4gIH07XG5cbiAgY29uc3QgZ2V0VG9kb0luZm8gPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kbyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2FkZC10b2RvLWZvcm0gaW5wdXQnKSlcbiAgICAgIC5yZWR1Y2UoKGFjYywgaW5wdXQpID0+IChcbiAgICAgICAgeyAuLi5hY2MsIFtpbnB1dC5pZF06IGlucHV0LnZhbHVlIH1cbiAgICAgICksIHt9KTtcblxuICAgIHJldHVybiBuZXdUb2RvO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RUb0FkZEluZm8gPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LWZvcm0gaW5wdXQnKS52YWx1ZTtcblxuICAgIHJldHVybiBwcm9qZWN0VGl0bGUudG9Mb3dlckNhc2UoKTtcbiAgfTtcblxuICBjb25zdCBhZGRUb2RvVUkgPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkVG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRvZG8tZm9ybScpO1xuXG4gICAgYWRkVG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvRmFjdG9yeTIoZ2V0VG9kb0luZm8oKSk7XG4gICAgICBjb25zb2xlLmxvZyhuZXdUb2RvLnByb2plY3QpO1xuICAgICAgaGFuZGxlVG9kb0xpc3RNb2R1bGUuYWRkVG9kbyhuZXdUb2RvKTtcbiAgICAgIGhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFRvZG9Ub1Byb2plY3QobmV3VG9kby5wcm9qZWN0LCBuZXdUb2RvKTtcbiAgICAgIGxvYWRUb2RvTGlzdChuZXdUb2RvLnByb2plY3QpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IEFkZEV2ZW50TGlzdGVuZXJUb0ZldGNoVG9kb0luUHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW5hbWUnKTtcbiAgICBwcm9qZWN0TmFtZS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxvYWRUb2RvTGlzdChwcm9qZWN0LnRleHRDb250ZW50KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGFkZFByb2plY3RVSSA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1mb3JtJyk7XG5cbiAgICBhZGRQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gZ2V0UHJvamVjdFRvQWRkSW5mbygpO1xuICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KG5ld1Byb2plY3RUaXRsZSk7XG4gICAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0KTtcbiAgICAgIGhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAvLyBoYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5nZXRBbGxQcm9qZWN0KCk7XG4gICAgICBsb2FkUHJvamVjdExpc3QoKTtcbiAgICAgIEFkZEV2ZW50TGlzdGVuZXJUb0ZldGNoVG9kb0luUHJvamVjdCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVBc2lkZVNpZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgaGlkZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRlLWFzaWRlJyk7XG4gICAgY29uc3QgYXNpZGVJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FzaWRlLWluZm9ybWF0aW9ucycpO1xuICAgIGNvbnN0IG1haW5JbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4taW5mb3JtYXRpb25zJyk7XG4gICAgaGlkZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGFzaWRlSW5mby5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LWFzaWRlJyk7XG4gICAgICBhc2lkZUluZm8uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZS1hc2lkZScpO1xuICAgICAgbWFpbkluZm8uY2xhc3NMaXN0LnRvZ2dsZSgnZnVsbC1tYWluJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlQ2xhc3NPblNtYWxsZXJTY3JlZW4gPSAoKSA9PiB7XG4gICAgY29uc3QgYXNpZGVJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FzaWRlLWluZm9ybWF0aW9ucycpO1xuICAgIGNvbnN0IG1haW5JbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4taW5mb3JtYXRpb25zJyk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgY29uc3Qgd2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgICAgaWYgKHdpZHRoIDwgODE1KSB7XG4gICAgICAgIGlmIChhc2lkZUluZm8uY2xhc3NMaXN0LnZhbHVlID09PSAnc2hvdy1hc2lkZScpIHtcbiAgICAgICAgICBhc2lkZUluZm8uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1hc2lkZScpO1xuICAgICAgICAgIGFzaWRlSW5mby5jbGFzc0xpc3QuYWRkKCdoaWRlLWFzaWRlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHdpZHRoID4gODE1KSB7XG4gICAgICAgIGlmIChhc2lkZUluZm8uY2xhc3NMaXN0LnZhbHVlID09PSAnaGlkZS1hc2lkZScpIHtcbiAgICAgICAgICBhc2lkZUluZm8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1hc2lkZScpO1xuICAgICAgICAgIGFzaWRlSW5mby5jbGFzc0xpc3QuYWRkKCdzaG93LWFzaWRlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1haW5JbmZvLmNsYXNzTGlzdC52YWx1ZSA9PT0gJ2Z1bGwtbWFpbicpIHtcbiAgICAgICAgICBtYWluSW5mby5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsLW1haW4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbG9hZFRvZG9MaXN0LFxuICAgIGxvYWRQcm9qZWN0TGlzdCxcbiAgICBhZGRUb2RvVUksXG4gICAgYWRkUHJvamVjdFVJLFxuICAgIEFkZEV2ZW50TGlzdGVuZXJUb0ZldGNoVG9kb0luUHJvamVjdCxcbiAgICBoaWRlQXNpZGVTaWRlLFxuICAgIHRvZ2dsZUNsYXNzT25TbWFsbGVyU2NyZWVuLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVUk7XG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IGhhbmRsZVRvZG9MaXN0TW9kdWxlIH0gZnJvbSAnLi9oYW5kbGVUb2RvJztcblxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUpID0+IHtcbiAgY29uc3QgdG9kb3MgPSBbXTtcblxuICByZXR1cm4ge1xuICAgIGlkOiB1dWlkdjQoKSxcbiAgICB0aXRsZTogdGl0bGUudG9Mb3dlckNhc2UoKSxcbiAgICB0b2RvcyxcbiAgfTtcbn07XG5cbmNvbnN0IGhhbmRsZVByb2plY3RMaXN0TW9kdWxlID0gKCgpID0+IHtcbiAgY29uc3QgYWxsVG9kb3MgPSBoYW5kbGVUb2RvTGlzdE1vZHVsZS5nZXRUb2RvTGlzdCgpO1xuICBsZXQgbGlzdFByb2plY3QgPSBbXTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBsaXN0UHJvamVjdC5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RCeU5hbWUgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBsaXN0UHJvamVjdC5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSBuYW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIGNvbnN0IGdldFRvZG9zQnlQcm9qZWN0TmFtZSA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0cyA9IGxpc3RQcm9qZWN0LmZpbmQoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IG5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgcmV0dXJuIHJlc3VsdHMudG9kb3M7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9kb1RvUHJvamVjdCA9IChuYW1lLCB0b2RvKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFRvQWRkID0gZ2V0UHJvamVjdEJ5TmFtZShuYW1lKTtcblxuICAgIGlmIChwcm9qZWN0VG9BZGQudG9kb3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gdG9kby5pZCkpIHJldHVybjtcbiAgICBpZiAodG9kby5wcm9qZWN0ICE9PSBuYW1lKSByZXR1cm47XG4gICAgcHJvamVjdFRvQWRkLnRvZG9zLnB1c2godG9kbyk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVG9kb0Zyb21Qcm9qZWN0ID0gKHByb2plY3QsIHRvZG8pID0+IHtcbiAgICBjb25zdCBwcm9qZWN0VG9EZWxldGUgPSBnZXRQcm9qZWN0QnlOYW1lKHByb2plY3QpO1xuXG4gICAgcHJvamVjdFRvRGVsZXRlLnRvZG9zID0gcHJvamVjdFRvRGVsZXRlLnRvZG9zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gdG9kby5pZCk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd0FsbFRvZG9zID0gKCkgPT4ge1xuICAgIGNvbnNvbGUudGFibGUoYWxsVG9kb3MpO1xuICB9O1xuXG4gIGNvbnN0IGdldEFsbFByb2plY3QgPSAoKSA9PiBsaXN0UHJvamVjdDtcblxuICBjb25zdCBnZXRBbGxQcm9qZWN0RXhjZXB0SW5ib3ggPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsUHJvamVjdEV4Y2VwdEluYm94ID0gbGlzdFByb2plY3QuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlICE9PSAnaW5ib3gnKTtcbiAgICByZXR1cm4gYWxsUHJvamVjdEV4Y2VwdEluYm94O1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGxpc3RQcm9qZWN0ID0gbGlzdFByb2plY3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBwcm9qZWN0LmlkKTtcblxuICAgIGhhbmRsZVRvZG9MaXN0TW9kdWxlLmRlbGV0ZUFsbFRvZG9Gcm9tRGVsZXRlZFByb2plY3QocHJvamVjdC50aXRsZSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRQcm9qZWN0LFxuICAgIGdldEFsbFByb2plY3QsXG4gICAgZ2V0QWxsUHJvamVjdEV4Y2VwdEluYm94LFxuICAgIGdldFByb2plY3RCeU5hbWUsXG4gICAgZ2V0VG9kb3NCeVByb2plY3ROYW1lLFxuICAgIHNob3dBbGxUb2RvcyxcbiAgICBhZGRUb2RvVG9Qcm9qZWN0LFxuICAgIGRlbGV0ZVRvZG9Gcm9tUHJvamVjdCxcbiAgICBkZWxldGVQcm9qZWN0LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgcHJvamVjdEZhY3RvcnksIGhhbmRsZVByb2plY3RMaXN0TW9kdWxlIH07XG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxuY29uc3QgdG9kb0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0ID0gJ2luYm94JykgPT4gKHtcbiAgaWQ6IHV1aWR2NCgpLFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIHByb2plY3Q6IHByb2plY3QudG9Mb3dlckNhc2UoKSxcbn0pO1xuXG5jb25zdCB0b2RvRmFjdG9yeTIgPSAodG9kbykgPT4gKHtcbiAgaWQ6IHV1aWR2NCgpLFxuICB0aXRsZTogdG9kby50aXRsZSxcbiAgZGVzY3JpcHRpb246IHRvZG8uZGVzY3JpcHRpb24sXG4gIHByb2plY3Q6IHRvZG8ucHJvamVjdC50b0xvd2VyQ2FzZSgpIHx8ICdpbmJveCcsXG59KTtcblxuY29uc3QgaGFuZGxlVG9kb0xpc3RNb2R1bGUgPSAoKCkgPT4ge1xuICBsZXQgbGlzdFRvZG8gPSBbXTtcblxuICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHtcbiAgICBsaXN0VG9kby5wdXNoKHRvZG8pO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAodG9kbykgPT4ge1xuICAgIC8vIGZ1bmN0aW9uIGludXRpbGUsIG1haXMgamUgbGEgZ2FyZGUgcG91ciBsZSBtb21lbnQuXG4gICAgLy8gaid1dGlsaXNlIGwnaWQgdmlhIGxlIGRvbSBwb3VyIGRlbGV0ZVxuICAgIGxpc3RUb2RvID0gbGlzdFRvZG8uZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSB0b2RvLmlkKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUb2RvV2l0aElEID0gKGlkKSA9PiB7XG4gICAgbGlzdFRvZG8gPSBsaXN0VG9kby5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGlkKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVBbGxUb2RvRnJvbURlbGV0ZWRQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgbGlzdFRvZG8gPSBsaXN0VG9kby5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ucHJvamVjdCAhPT0gcHJvamVjdE5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGdldFRvZG9MaXN0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUudGFibGUobGlzdFRvZG8pO1xuICAgIHJldHVybiBsaXN0VG9kbztcbiAgfTtcblxuICBjb25zdCBnZXRUb2RvSWQgPSAodG9kbykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRvZG8uaWQpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVRvZG8gPSAodG9kbywgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZFRvZG8gPSB7XG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgcHJvamVjdDogcHJvamVjdC50b0xvd2VyQ2FzZSgpLFxuICAgIH07XG5cbiAgICBPYmplY3QuYXNzaWduKHRvZG8sIHVwZGF0ZWRUb2RvKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZFRvZG8sXG4gICAgZGVsZXRlVG9kbyxcbiAgICBnZXRUb2RvTGlzdCxcbiAgICBnZXRUb2RvSWQsXG4gICAgdXBkYXRlVG9kbyxcbiAgICBkZWxldGVBbGxUb2RvRnJvbURlbGV0ZWRQcm9qZWN0LFxuICAgIGRlbGV0ZVRvZG9XaXRoSUQsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyB0b2RvRmFjdG9yeSwgdG9kb0ZhY3RvcnkyLCBoYW5kbGVUb2RvTGlzdE1vZHVsZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHsgdG9kb0ZhY3RvcnksIGhhbmRsZVRvZG9MaXN0TW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2hhbmRsZVRvZG8nO1xuaW1wb3J0IHtcbiAgcHJvamVjdEZhY3RvcnksXG4gIGhhbmRsZVByb2plY3RMaXN0TW9kdWxlLFxufSBmcm9tICcuL21vZHVsZXMvaGFuZGxlUHJvamVjdCc7XG5pbXBvcnQgVUkgZnJvbSAnLi9tb2R1bGVzL1VJJztcblxuY29uc3QgbmV3VG9kbyA9IHRvZG9GYWN0b3J5KCdzdGFydCByZWFjdCcsICdidXkgbWlsayBmb3IgbHVuZScsICdKYXZhU2NyaXB0Jyk7XG5jb25zdCB0b2RvMiA9IHRvZG9GYWN0b3J5KCdjYWxsIG1vbScsICdjYWxsIG1vbSBmb3IgYmlydGhkYXknLCAnUGVyc28nKTtcbmNvbnN0IHRvZG8zID0gdG9kb0ZhY3RvcnkoXG4gICdyZWFkIFlvdSBkb250IGtub3cgSlMnLFxuICAnYnV5IHRoZSBib29rIGZpcnN0JyxcbiAgJ0phdmFTY3JpcHQnXG4pO1xuY29uc3QgdG9kbzQgPSB0b2RvRmFjdG9yeSgnd2F0Y2ggYmFyY2Vsb25hJywgJ2xlYWd1ZSBkZXMgY2hhbXBpb3NuJyk7XG5jb25zdCBkZWxldGVUb2RvID0gdG9kb0ZhY3RvcnkoJ2ZvbycsICdiYXInLCAnSkFWQVNDUklQVCcpO1xuY29uc3QgdG9kbzUgPSB0b2RvRmFjdG9yeSgnYW5vdGhlciB0b2RvJywgJ2l0cyBjb29sJyk7XG4vLyBjb25zb2xlLmxvZyhuZXdUb2RvKTtcblxuLy8gaGFuZGxlVG9kb0xpc3QuZ2V0VG9kb0xpc3QoKTtcbmhhbmRsZVRvZG9MaXN0TW9kdWxlLmFkZFRvZG8obmV3VG9kbyk7XG5oYW5kbGVUb2RvTGlzdE1vZHVsZS5hZGRUb2RvKHRvZG8yKTtcbmhhbmRsZVRvZG9MaXN0TW9kdWxlLmFkZFRvZG8odG9kbzMpO1xuaGFuZGxlVG9kb0xpc3RNb2R1bGUuYWRkVG9kbyh0b2RvNCk7XG5oYW5kbGVUb2RvTGlzdE1vZHVsZS5hZGRUb2RvKGRlbGV0ZVRvZG8pO1xuaGFuZGxlVG9kb0xpc3RNb2R1bGUuYWRkVG9kbyh0b2RvNSk7XG4vLyBoYW5kbGVUb2RvTGlzdC5nZXRUb2RvTGlzdCgpO1xuXG4vLyBoYW5kbGVUb2RvTGlzdC5nZXRUb2RvSWQodG9kbzIpO1xuaGFuZGxlVG9kb0xpc3RNb2R1bGUudXBkYXRlVG9kbyhcbiAgdG9kbzQsXG4gICd3YXRjaCBCYXJjZWxvbmEnLFxuICAnQ2hhbXBpb25zIExlYWd1ZScsXG4gICdGb290YmFsbCdcbik7XG4vLyBoYW5kbGVUb2RvTGlzdC5kZWxldGVUb2RvKHRvZG8zKTtcblxuY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KCdKYXZhU2NyaXB0Jyk7XG5jb25zdCBwZXJzb1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeSgnUGVyc28nKTtcbmNvbnN0IGZvb3RiYWxsID0gcHJvamVjdEZhY3RvcnkoJ2Zvb1RiYWxsJyk7XG5jb25zdCBpbmJveCA9IHByb2plY3RGYWN0b3J5KCdpbmJveCcpO1xuXG4vLyBjb25zb2xlLmxvZyhuZXdQcm9qZWN0KTtcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5hZGRQcm9qZWN0KHBlcnNvUHJvamVjdCk7XG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5hZGRQcm9qZWN0KGZvb3RiYWxsKTtcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFByb2plY3QoaW5ib3gpO1xuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuc2hvd0FsbFRvZG9zKCk7XG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5hZGRUb2RvVG9Qcm9qZWN0KG5ld1Byb2plY3QudGl0bGUsIHRvZG8zKTtcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFRvZG9Ub1Byb2plY3QoZm9vdGJhbGwudGl0bGUsIHRvZG80KTtcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFRvZG9Ub1Byb2plY3QocGVyc29Qcm9qZWN0LnRpdGxlLCB0b2RvMik7XG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5hZGRUb2RvVG9Qcm9qZWN0KG5ld1Byb2plY3QudGl0bGUsIHRvZG8zKTtcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFRvZG9Ub1Byb2plY3QobmV3UHJvamVjdC50aXRsZSwgZGVsZXRlVG9kbyk7XG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5hZGRUb2RvVG9Qcm9qZWN0KG5ld1Byb2plY3QudGl0bGUsIHRvZG8zKTtcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFRvZG9Ub1Byb2plY3QobmV3UHJvamVjdC50aXRsZSwgdG9kbzMpO1xuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkVG9kb1RvUHJvamVjdChuZXdQcm9qZWN0LnRpdGxlLCBuZXdUb2RvKTtcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFRvZG9Ub1Byb2plY3QobmV3UHJvamVjdC50aXRsZSwgdG9kbzMpO1xuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkVG9kb1RvUHJvamVjdChpbmJveC50aXRsZSwgdG9kbzUpO1xuXG4vLyBoYW5kbGVQcm9qZWN0TGlzdC5nZXRQcm9qZWN0QnlOYW1lKCdKYXZhU2NyaXB0Jyk7XG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5zaG93QWxsVG9kb3MoKTtcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmdldFByb2plY3RCeU5hbWUoJ2phdkFzY1JpcHQnKTtcblxuaGFuZGxlVG9kb0xpc3RNb2R1bGUuZGVsZXRlVG9kbyhkZWxldGVUb2RvKTtcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmRlbGV0ZVRvZG9Gcm9tUHJvamVjdChkZWxldGVUb2RvLnByb2plY3QsIGRlbGV0ZVRvZG8pO1xuaGFuZGxlVG9kb0xpc3RNb2R1bGUuZ2V0VG9kb0xpc3QoKTtcblxuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuZ2V0QWxsUHJvamVjdCgpO1xuXG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5kZWxldGVQcm9qZWN0KHBlcnNvUHJvamVjdCk7XG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5nZXRBbGxQcm9qZWN0KCk7XG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5zaG93QWxsVG9kb3MoKTtcblxuLy8gVUkubG9hZFRvZG9MaXN0KCk7XG4vLyBVSS5kZWxldGVUb2RvVUkoKTtcblxuVUkubG9hZFRvZG9MaXN0KCk7XG5VSS5sb2FkUHJvamVjdExpc3QoKTtcblVJLmFkZFByb2plY3RVSSgpO1xuVUkuYWRkVG9kb1VJKCk7XG5VSS5BZGRFdmVudExpc3RlbmVyVG9GZXRjaFRvZG9JblByb2plY3QoKTtcblVJLmhpZGVBc2lkZVNpZGUoKTtcblVJLnRvZ2dsZUNsYXNzT25TbWFsbGVyU2NyZWVuKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=