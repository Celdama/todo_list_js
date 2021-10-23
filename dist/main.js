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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n}\n\n.full-main {\n  left: 0px !important;\n}\n\n.show-aside {\n  transform: translateX(0);\n}\n\n.hide-aside {\n  transform: translateX(-400px);\n}\n\nhtml {\n  font-size: 10px;\n  overflow-y: hidden;\n}\nhtml body #content {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.6rem;\n  height: 100%;\n}\nhtml body #content header {\n  display: flex;\n  background-color: #db4c3f;\n  padding: 1rem 1.8rem;\n}\nhtml body #content header button {\n  border: none;\n  padding: 0.2rem;\n  border-radius: 2px;\n  background-color: transparent;\n  display: flex;\n  margin-left: 1.5rem;\n}\nhtml body #content header button:hover {\n  cursor: pointer;\n  background-color: rgba(255, 255, 255, 0.3);\n}\nhtml body #content #app {\n  display: flex;\n  position: relative;\n  overflow-y: hidden;\n  height: 100vh;\n}\nhtml body #content #app #aside-informations {\n  position: absolute;\n  background-color: #f7f7f7;\n  z-index: 10;\n  width: 300px;\n  height: 100%;\n  transition: transform 0.6s ease;\n}\nhtml body #content #app #aside-informations .todo-informations {\n  padding: 1.2rem 0.6rem 1.2rem 1.2rem;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list {\n  padding: 2rem 0 2rem 2rem;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list li {\n  display: flex;\n  align-items: center;\n  font-size: 1.4rem;\n  font-weight: 400;\n  list-style-type: none;\n  padding: 1rem 0.8rem;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list li .main-list-icon {\n  margin-right: 1rem;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-main-list {\n  border-radius: 5px;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-main-list:hover {\n  cursor: pointer;\n  background-color: #ececec;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-main-list span {\n  color: #202020;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 2rem 0 0 0;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title {\n  display: flex;\n  width: 100%;\n  padding: 1rem 0 1rem 0.8rem;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title .dropdown-projects-list {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  border: none;\n  background-color: transparent;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title .dropdown-projects-list:hover {\n  cursor: pointer;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title .dropdown-projects-list span {\n  color: #333333;\n  font-weight: bold;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title .add-project {\n  width: 10%;\n  display: flex;\n  justify-content: center;\n  border: none;\n  background-color: transparent;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title .add-project:hover {\n  cursor: pointer;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list {\n  width: 100%;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project {\n  display: flex;\n  align-items: center;\n  border-radius: 5px;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project:hover {\n  cursor: pointer;\n  background-color: #ececec;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project:hover .delete-project-btn {\n  opacity: 1;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project .project-info {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem 0.9rem;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project .project-info .circle-color {\n  width: 13%;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project .project-info .project-name {\n  width: 100%;\n  font-weight: lighter;\n  letter-spacing: 0.5px;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project .delete-project-btn {\n  width: 10%;\n  opacity: 0;\n  border: none;\n  background-color: transparent;\n  display: flex;\n  justify-content: center;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project .delete-project-btn:hover {\n  cursor: pointer;\n}\nhtml body #content #app #main-informations {\n  position: absolute;\n  justify-self: center;\n  left: 300px;\n  width: calc(100% - 300px);\n  transition: left 0.6s ease;\n}\nhtml body #content #app #main-informations .display-todo-list {\n  padding: 6rem;\n}\nhtml body #content #app #main-informations .display-todo-list .todo-list {\n  padding: 2rem;\n}\nhtml body #content #app #main-informations .display-todo-list .todo-list .todo-item {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 0;\n  border-bottom: 1px solid black;\n}", "",{"version":3,"sources":["webpack://./src/styles/base.scss","webpack://./src/style.scss","webpack://./src/styles/animation.scss","webpack://./src/styles/variables.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,uBAAA;EACA,sBAAA;ACCF;;ADEA;EACE,qBAAA;ACCF;;ACTA;EACE,oBAAA;ADYF;;ACTA;EACE,wBAAA;ADYF;;ACTA;EACE,6BAAA;ADYF;;AAjBA;EACE,eEEe;EFDf,kBAAA;AAoBF;AAjBI;EACE,aAAA;EACA,sBAAA;EACA,iBAAA;EACA,YAAA;AAmBN;AAjBM;EACE,aAAA;EACA,yBEhBO;EFiBP,oBAAA;AAmBR;AAjBQ;EACE,YAAA;EACA,eAAA;EACA,kBAAA;EACA,6BAAA;EACA,aAAA;EACA,mBAAA;AAmBV;AAjBU;EACE,eAAA;EACA,0CE5BU;AF+CtB;AAdM;EACE,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,aAAA;AAgBR;AAdQ;EACE,kBAAA;EACA,yBExCI;EFyCJ,WAAA;EACA,YAAA;EACA,YAAA;EACA,+BAAA;AAgBV;AAdU;EACE,oCAAA;AAgBZ;AAdY;EACE,yBAAA;AAgBd;AAdc;EACE,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,gBAAA;EACA,qBAAA;EACA,oBAAA;AAgBhB;AAdgB;EACE,kBAAA;AAgBlB;AAZc;EACE,kBAAA;AAchB;AAZgB;EACE,eAAA;EACA,yBErEE;AFmFpB;AAXgB;EACE,cExEA;AFqFlB;AATc;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;EACA,mBAAA;AAWhB;AATgB;EACE,aAAA;EACA,WAAA;EACA,2BAAA;AAWlB;AATkB;EACE,aAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,6BAAA;AAWpB;AAToB;EACE,eAAA;AAWtB;AARoB;EACE,cAAA;EACA,iBAAA;AAUtB;AANkB;EACE,UAAA;EACA,aAAA;EACA,uBAAA;EACA,YAAA;EACA,6BAAA;AAQpB;AANoB;EACE,eAAA;AAQtB;AAFc;EAEE,WAAA;AAGhB;AADgB;EACE,aAAA;EACA,mBAAA;EACA,kBAAA;AAGlB;AADkB;EACE,eAAA;EACA,yBEnIA;AFsIpB;AADoB;EACE,UAAA;AAGtB;AAAkB;EACE,aAAA;EACA,WAAA;EACA,uBAAA;EACA,mBAAA;EACA,oBAAA;AAEpB;AAAoB;EACE,UAAA;AAEtB;AACoB;EACE,WAAA;EACA,oBAAA;EACA,qBAAA;AACtB;AAGkB;EACE,UAAA;EACA,UAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,uBAAA;AADpB;AAGoB;EACE,eAAA;AADtB;AAUQ;EACE,kBAAA;EACA,oBAAA;EACA,WAAA;EACA,yBAAA;EACA,0BAAA;AARV;AAUU;EACE,aAAA;AARZ;AAUY;EACE,aAAA;AARd;AAUc;EACE,aAAA;EACA,8BAAA;EACA,eAAA;EACA,8BAAA;AARhB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n}\n","@import './styles/base.scss';\n@import './styles/variables.scss';\n@import './styles/animation.scss';\n\nhtml {\n  font-size: $base-font-size;\n  overflow-y: hidden;\n\n  body {\n    #content {\n      display: flex;\n      flex-direction: column;\n      font-size: 1.6rem;\n      height: 100%;\n\n      header {\n        display: flex;\n        background-color: $header-color;\n        padding: 1rem 1.8rem;\n\n        button {\n          border: none;\n          padding: 0.2rem;\n          border-radius: 2px;\n          background-color: transparent;\n          display: flex;\n          margin-left: 1.5rem;\n\n          &:hover {\n            cursor: pointer;\n            background-color: $header-button-hover;\n          }\n        }\n      }\n\n      #app {\n        display: flex;\n        position: relative;\n        overflow-y: hidden;\n        height: 100vh;\n\n        #aside-informations {\n          position: absolute;\n          background-color: $aside-color;\n          z-index: 10;\n          width: 300px;\n          height: 100%;\n          transition: transform 0.6s ease;\n\n          .todo-informations {\n            padding: 1.2rem 0.6rem 1.2rem 1.2rem;\n\n            #projects-main-list {\n              padding: 2rem 0 2rem 2rem;\n\n              li {\n                display: flex;\n                align-items: center;\n                font-size: 1.4rem;\n                font-weight: 400;\n                list-style-type: none;\n                padding: 1rem 0.8rem;\n\n                .main-list-icon {\n                  margin-right: 1rem;\n                }\n              }\n\n              .display-main-list {\n                border-radius: 5px;\n\n                &:hover {\n                  cursor: pointer;\n                  background-color: $aside-color-hover;\n                }\n\n                span {\n                  color: $main-list-color;\n                }\n              }\n\n              .display-projects {\n                display: flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: flex-start;\n                padding: 2rem 0 0 0;\n\n                .display-projects-title {\n                  display: flex;\n                  width: 100%;\n                  padding: 1rem 0 1rem 0.8rem;\n\n                  .dropdown-projects-list {\n                    display: flex;\n                    align-items: center;\n                    width: 100%;\n                    border: none;\n                    background-color: transparent;\n\n                    &:hover {\n                      cursor: pointer;\n                    }\n\n                    span {\n                      color: #333333;\n                      font-weight: bold;\n                    }\n                  }\n\n                  .add-project {\n                    width: 10%;\n                    display: flex;\n                    justify-content: center;\n                    border: none;\n                    background-color: transparent;\n\n                    &:hover {\n                      cursor: pointer;\n                    }\n                  }\n                }\n              }\n\n              #display-projects-list {\n                // margin-left: 3.4rem;\n                width: 100%;\n\n                .project {\n                  display: flex;\n                  align-items: center;\n                  border-radius: 5px;\n\n                  &:hover {\n                    cursor: pointer;\n                    background-color: $aside-color-hover;\n\n                    .delete-project-btn {\n                      opacity: 1;\n                    }\n                  }\n                  .project-info {\n                    display: flex;\n                    width: 100%;\n                    justify-content: center;\n                    align-items: center;\n                    padding: 1rem 0.9rem;\n\n                    .circle-color {\n                      width: 13%;\n                    }\n\n                    .project-name {\n                      width: 100%;\n                      font-weight: lighter;\n                      letter-spacing: 0.5px;\n                    }\n                  }\n\n                  .delete-project-btn {\n                    width: 10%;\n                    opacity: 0;\n                    border: none;\n                    background-color: transparent;\n                    display: flex;\n                    justify-content: center;\n\n                    &:hover {\n                      cursor: pointer;\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n\n        #main-informations {\n          position: absolute;\n          justify-self: center;\n          left: 300px;\n          width: calc(100% - 300px);\n          transition: left 0.6s ease;\n\n          .display-todo-list {\n            padding: 6rem;\n\n            .todo-list {\n              padding: 2rem;\n\n              .todo-item {\n                display: flex;\n                justify-content: space-between;\n                padding: 1rem 0;\n                border-bottom: 1px solid black;\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",".full-main {\n  left: 0px !important;\n}\n\n.show-aside {\n  transform: translateX(0);\n}\n\n.hide-aside {\n  transform: translateX(-400px);\n}\n","$body-color: blue;\n$header-color: #db4c3f;\n$header-button-hover: rgba(255, 255, 255, 0.3);\n$aside-color: #f7f7f7;\n$aside-color-hover: #ececec;\n$main-list-color: #202020;\n\n$base-font-size: 10px;\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@media only screen and (max-width: 815px) {\n  main {\n    width: 100%;\n    position: absolute;\n    margin-left: 0px;\n    left: 0px !important;\n  }\n}\n\n@media only screen and (min-width: 815px) {\n  .full-main {\n    left: 140px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE;IACE,WAAW;IACX,kBAAkB;IAClB,gBAAgB;IAChB,oBAAoB;EACtB;AACF;;AAEA;EACE;IACE,WAAW;EACb;AACF","sourcesContent":["@media only screen and (max-width: 815px) {\n  main {\n    width: 100%;\n    position: absolute;\n    margin-left: 0px;\n    left: 0px !important;\n  }\n}\n\n@media only screen and (min-width: 815px) {\n  .full-main {\n    left: 140px;\n  }\n}\n"],"sourceRoot":""}]);
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
    const projectList = document.getElementById('display-projects-list');
    projectList.textContent = '';

    const projects =
      _handleProject__WEBPACK_IMPORTED_MODULE_1__.handleProjectListModule.getAllProjectExceptDefaultProject();

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
    const projectInfo = document.createElement('div');
    const circleColorProject = document.createElement('span');
    const projectTitle = document.createElement('span');
    const deleteProjectBtn = document.createElement('button');
    wrapperProject.classList.add('project');
    projectInfo.classList.add('project-info');
    projectInfo.dataset.list = `${project.title}`;
    circleColorProject.classList.add('circle-color');
    projectTitle.classList.add('project-name');
    deleteProjectBtn.classList.add('delete-project-btn');
    projectTitle.textContent = project.title;
    deleteProjectBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-x-lg delete-project" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
      </svg>
    `;
    circleColorProject.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#ff9933" class="bi bi-circle-fill" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="8"/>
      </svg>
    `;
    deleteProjectBtn.onclick = () => deleteProject(project);
    projectInfo.appendChild(circleColorProject);
    projectInfo.appendChild(projectTitle);
    wrapperProject.appendChild(projectInfo);
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
    const newTodo = Array.from(
      document.querySelectorAll('#add-todo-form input')
    ).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});

    return newTodo;
  };

  const getProjectToAddInfo = () => {
    const projectTitle = document.querySelector(
      '#add-project-form input'
    ).value;

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
    const projectName = document.querySelectorAll(
      '.display-main-list, .project-info'
    );

    projectName.forEach((project) => {
      project.addEventListener('click', () => {
        loadTodoList(project.dataset.list);
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



const projectFactory = (title, defaultProject) => {
  const todos = [];

  return {
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    title: title.toLowerCase(),
    todos,
    defaultProject: defaultProject || false,
  };
};

const handleProjectListModule = (() => {
  const allTodos = _handleTodo__WEBPACK_IMPORTED_MODULE_0__.handleTodoListModule.getTodoList();
  let listProject = [];

  const addProject = (project) => {
    listProject.push(project);
  };

  const getProjectByName = (name) => {
    const results = listProject.find(
      (project) => project.title === name.toLowerCase()
    );
    return results;
  };

  const getTodosByProjectName = (name) => {
    const results = listProject.find(
      (project) => project.title === name.toLowerCase()
    );
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

    projectToDelete.todos = projectToDelete.todos.filter(
      (item) => item.id !== todo.id
    );
  };

  const showAllTodos = () => {
    console.table(allTodos);
  };

  const getAllProject = () => {
    console.log(listProject);
    return listProject;
  };

  const getAllProjectExceptDefaultProject = () => {
    const allProjectExceptInbox = listProject.filter(
      (project) => !project.defaultProject
    );
    return allProjectExceptInbox;
  };

  const deleteProject = (project) => {
    listProject = listProject.filter((item) => item.id !== project.id);

    _handleTodo__WEBPACK_IMPORTED_MODULE_0__.handleTodoListModule.deleteAllTodoFromDeletedProject(project.title);
  };

  return {
    addProject,
    getAllProject,
    getAllProjectExceptDefaultProject,
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
const inbox = (0,_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.projectFactory)('inbox', true);
const today = (0,_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.projectFactory)('today', true);
const upcoming = (0,_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.projectFactory)('upcoming', true);

// console.log(newProject);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addProject(newProject);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addProject(persoProject);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addProject(football);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addProject(inbox);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addProject(today);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addProject(upcoming);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQzVCLGNBQWMsc0VBQWM7QUFDNUIsaUJBQWlCLHNFQUFjOztBQUUvQjtBQUNBLHNGQUFrQztBQUNsQyxzRkFBa0M7QUFDbEMsc0ZBQWtDO0FBQ2xDLHNGQUFrQztBQUNsQyxzRkFBa0M7QUFDbEMsc0ZBQWtDO0FBQ2xDLHdGQUFvQztBQUNwQyw0RkFBd0M7QUFDeEMsNEZBQXdDO0FBQ3hDLDRGQUF3QztBQUN4Qyw0RkFBd0M7QUFDeEMsNEZBQXdDO0FBQ3hDLDRGQUF3QztBQUN4Qyw0RkFBd0M7QUFDeEMsNEZBQXdDO0FBQ3hDLDRGQUF3QztBQUN4Qyw0RkFBd0M7O0FBRXhDO0FBQ0Esd0ZBQW9DO0FBQ3BDLDRGQUF3Qzs7QUFFeEMsZ0ZBQStCO0FBQy9CLGlHQUE2QztBQUM3QyxpRkFBZ0M7O0FBRWhDLHlGQUFxQzs7QUFFckMseUZBQXFDO0FBQ3JDLHlGQUFxQztBQUNyQyx3RkFBb0M7O0FBRXBDO0FBQ0E7O0FBRUEsZ0VBQWU7QUFDZixtRUFBa0I7QUFDbEIsZ0VBQWU7QUFDZiw2REFBWTtBQUNaLHdGQUF1QztBQUN2QyxpRUFBZ0I7QUFDaEIsOEVBQTZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZHVsZXMvaGFuZGxlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbW9kdWxlcy9oYW5kbGVUb2RvLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uZnVsbC1tYWluIHtcXG4gIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2hvdy1hc2lkZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxufVxcblxcbi5oaWRlLWFzaWRlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDAwcHgpO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCBoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjRjM2Y7XFxuICBwYWRkaW5nOiAxcmVtIDEuOHJlbTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50IGhlYWRlciBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50IGhlYWRlciBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcbiAgei1pbmRleDogMTA7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyB7XFxuICBwYWRkaW5nOiAxLjJyZW0gMC42cmVtIDEuMnJlbSAxLjJyZW07XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3Qge1xcbiAgcGFkZGluZzogMnJlbSAwIDJyZW0gMnJlbTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDFyZW0gMC44cmVtO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0IGxpIC5tYWluLWxpc3QtaWNvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3QgLmRpc3BsYXktbWFpbi1saXN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAuZGlzcGxheS1tYWluLWxpc3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAuZGlzcGxheS1tYWluLWxpc3Qgc3BhbiB7XFxuICBjb2xvcjogIzIwMjAyMDtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAuZGlzcGxheS1wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAycmVtIDAgMCAwO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0IC5kaXNwbGF5LXByb2plY3RzIC5kaXNwbGF5LXByb2plY3RzLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDAuOHJlbTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAuZGlzcGxheS1wcm9qZWN0cyAuZGlzcGxheS1wcm9qZWN0cy10aXRsZSAuZHJvcGRvd24tcHJvamVjdHMtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3QgLmRpc3BsYXktcHJvamVjdHMgLmRpc3BsYXktcHJvamVjdHMtdGl0bGUgLmRyb3Bkb3duLXByb2plY3RzLWxpc3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0IC5kaXNwbGF5LXByb2plY3RzIC5kaXNwbGF5LXByb2plY3RzLXRpdGxlIC5kcm9wZG93bi1wcm9qZWN0cy1saXN0IHNwYW4ge1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAuZGlzcGxheS1wcm9qZWN0cyAuZGlzcGxheS1wcm9qZWN0cy10aXRsZSAuYWRkLXByb2plY3Qge1xcbiAgd2lkdGg6IDEwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0IC5kaXNwbGF5LXByb2plY3RzIC5kaXNwbGF5LXByb2plY3RzLXRpdGxlIC5hZGQtcHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3QgI2Rpc3BsYXktcHJvamVjdHMtbGlzdCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAjZGlzcGxheS1wcm9qZWN0cy1saXN0IC5wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0ICNkaXNwbGF5LXByb2plY3RzLWxpc3QgLnByb2plY3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAjZGlzcGxheS1wcm9qZWN0cy1saXN0IC5wcm9qZWN0OmhvdmVyIC5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAjZGlzcGxheS1wcm9qZWN0cy1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAwLjlyZW07XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3QgI2Rpc3BsYXktcHJvamVjdHMtbGlzdCAucHJvamVjdCAucHJvamVjdC1pbmZvIC5jaXJjbGUtY29sb3Ige1xcbiAgd2lkdGg6IDEzJTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAjZGlzcGxheS1wcm9qZWN0cy1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLnByb2plY3QtbmFtZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0ICNkaXNwbGF5LXByb2plY3RzLWxpc3QgLnByb2plY3QgLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICB3aWR0aDogMTAlO1xcbiAgb3BhY2l0eTogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0ICNkaXNwbGF5LXByb2plY3RzLWxpc3QgLnByb2plY3QgLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNtYWluLWluZm9ybWF0aW9ucyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGxlZnQ6IDMwMHB4O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcXG4gIHRyYW5zaXRpb246IGxlZnQgMC42cyBlYXNlO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjbWFpbi1pbmZvcm1hdGlvbnMgLmRpc3BsYXktdG9kby1saXN0IHtcXG4gIHBhZGRpbmc6IDZyZW07XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNtYWluLWluZm9ybWF0aW9ucyAuZGlzcGxheS10b2RvLWxpc3QgLnRvZG8tbGlzdCB7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjbWFpbi1pbmZvcm1hdGlvbnMgLmRpc3BsYXktdG9kby1saXN0IC50b2RvLWxpc3QgLnRvZG8taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYW5pbWF0aW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FDVEE7RUFDRSxvQkFBQTtBRFlGOztBQ1RBO0VBQ0Usd0JBQUE7QURZRjs7QUNUQTtFQUNFLDZCQUFBO0FEWUY7O0FBakJBO0VBQ0UsZUVFZTtFRkRmLGtCQUFBO0FBb0JGO0FBakJJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBbUJOO0FBakJNO0VBQ0UsYUFBQTtFQUNBLHlCRWhCTztFRmlCUCxvQkFBQTtBQW1CUjtBQWpCUTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQW1CVjtBQWpCVTtFQUNFLGVBQUE7RUFDQSwwQ0U1QlU7QUYrQ3RCO0FBZE07RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFnQlI7QUFkUTtFQUNFLGtCQUFBO0VBQ0EseUJFeENJO0VGeUNKLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FBZ0JWO0FBZFU7RUFDRSxvQ0FBQTtBQWdCWjtBQWRZO0VBQ0UseUJBQUE7QUFnQmQ7QUFkYztFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FBZ0JoQjtBQWRnQjtFQUNFLGtCQUFBO0FBZ0JsQjtBQVpjO0VBQ0Usa0JBQUE7QUFjaEI7QUFaZ0I7RUFDRSxlQUFBO0VBQ0EseUJFckVFO0FGbUZwQjtBQVhnQjtFQUNFLGNFeEVBO0FGcUZsQjtBQVRjO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBV2hCO0FBVGdCO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQVdsQjtBQVRrQjtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUFXcEI7QUFUb0I7RUFDRSxlQUFBO0FBV3RCO0FBUm9CO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBVXRCO0FBTmtCO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQVFwQjtBQU5vQjtFQUNFLGVBQUE7QUFRdEI7QUFGYztFQUVFLFdBQUE7QUFHaEI7QUFEZ0I7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUdsQjtBQURrQjtFQUNFLGVBQUE7RUFDQSx5QkVuSUE7QUZzSXBCO0FBRG9CO0VBQ0UsVUFBQTtBQUd0QjtBQUFrQjtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBRXBCO0FBQW9CO0VBQ0UsVUFBQTtBQUV0QjtBQUNvQjtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBQ3RCO0FBR2tCO0VBQ0UsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFEcEI7QUFHb0I7RUFDRSxlQUFBO0FBRHRCO0FBVVE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFSVjtBQVVVO0VBQ0UsYUFBQTtBQVJaO0FBVVk7RUFDRSxhQUFBO0FBUmQ7QUFVYztFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQVJoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cIixcIkBpbXBvcnQgJy4vc3R5bGVzL2Jhc2Uuc2Nzcyc7XFxuQGltcG9ydCAnLi9zdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xcbkBpbXBvcnQgJy4vc3R5bGVzL2FuaW1hdGlvbi5zY3NzJztcXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogJGJhc2UtZm9udC1zaXplO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcblxcbiAgYm9keSB7XFxuICAgICNjb250ZW50IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICAgIGhlYWRlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlci1jb2xvcjtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMS44cmVtO1xcblxcbiAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBwYWRkaW5nOiAwLjJyZW07XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxuXFxuICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGVhZGVyLWJ1dHRvbi1ob3ZlcjtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAjYXBwIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgICAgICAgI2FzaWRlLWluZm9ybWF0aW9ucyB7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFzaWRlLWNvbG9yO1xcbiAgICAgICAgICB6LWluZGV4OiAxMDtcXG4gICAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2U7XFxuXFxuICAgICAgICAgIC50b2RvLWluZm9ybWF0aW9ucyB7XFxuICAgICAgICAgICAgcGFkZGluZzogMS4ycmVtIDAuNnJlbSAxLjJyZW0gMS4ycmVtO1xcblxcbiAgICAgICAgICAgICNwcm9qZWN0cy1tYWluLWxpc3Qge1xcbiAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSAwIDJyZW0gMnJlbTtcXG5cXG4gICAgICAgICAgICAgIGxpIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAwLjhyZW07XFxuXFxuICAgICAgICAgICAgICAgIC5tYWluLWxpc3QtaWNvbiB7XFxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAuZGlzcGxheS1tYWluLWxpc3Qge1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXNpZGUtY29sb3ItaG92ZXI7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgICAgICAgY29sb3I6ICRtYWluLWxpc3QtY29sb3I7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgIC5kaXNwbGF5LXByb2plY3RzIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDAgMCAwO1xcblxcbiAgICAgICAgICAgICAgICAuZGlzcGxheS1wcm9qZWN0cy10aXRsZSB7XFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDAgMXJlbSAwLjhyZW07XFxuXFxuICAgICAgICAgICAgICAgICAgLmRyb3Bkb3duLXByb2plY3RzLWxpc3Qge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgIC5hZGQtcHJvamVjdCB7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAlO1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgI2Rpc3BsYXktcHJvamVjdHMtbGlzdCB7XFxuICAgICAgICAgICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAzLjRyZW07XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgICAgICAgICAgICAucHJvamVjdCB7XFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhc2lkZS1jb2xvci1ob3ZlcjtcXG5cXG4gICAgICAgICAgICAgICAgICAgIC5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAucHJvamVjdC1pbmZvIHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMC45cmVtO1xcblxcbiAgICAgICAgICAgICAgICAgICAgLmNpcmNsZS1jb2xvciB7XFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMyU7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdC1uYW1lIHtcXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgIC5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwJTtcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjbWFpbi1pbmZvcm1hdGlvbnMge1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgICBsZWZ0OiAzMDBweDtcXG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAwLjZzIGVhc2U7XFxuXFxuICAgICAgICAgIC5kaXNwbGF5LXRvZG8tbGlzdCB7XFxuICAgICAgICAgICAgcGFkZGluZzogNnJlbTtcXG5cXG4gICAgICAgICAgICAudG9kby1saXN0IHtcXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XFxuXFxuICAgICAgICAgICAgICAudG9kby1pdGVtIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIuZnVsbC1tYWluIHtcXG4gIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2hvdy1hc2lkZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxufVxcblxcbi5oaWRlLWFzaWRlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDAwcHgpO1xcbn1cXG5cIixcIiRib2R5LWNvbG9yOiBibHVlO1xcbiRoZWFkZXItY29sb3I6ICNkYjRjM2Y7XFxuJGhlYWRlci1idXR0b24taG92ZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4kYXNpZGUtY29sb3I6ICNmN2Y3Zjc7XFxuJGFzaWRlLWNvbG9yLWhvdmVyOiAjZWNlY2VjO1xcbiRtYWluLWxpc3QtY29sb3I6ICMyMDIwMjA7XFxuXFxuJGJhc2UtZm9udC1zaXplOiAxMHB4O1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODE1cHgpIHtcXG4gIG1haW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xcbiAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MTVweCkge1xcbiAgLmZ1bGwtbWFpbiB7XFxuICAgIGxlZnQ6IDE0MHB4O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQkFBb0I7RUFDdEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTVweCkge1xcbiAgbWFpbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxuICAgIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgxNXB4KSB7XFxuICAuZnVsbC1tYWluIHtcXG4gICAgbGVmdDogMTQwcHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxudmFyIGdldFJhbmRvbVZhbHVlcztcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLiBBbHNvLFxuICAgIC8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxudmFyIGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSkpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyKSB7XG4gIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICB2YXIgdXVpZCA9IChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gc3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQgeyB0b2RvRmFjdG9yeSwgaGFuZGxlVG9kb0xpc3RNb2R1bGUsIHRvZG9GYWN0b3J5MiB9IGZyb20gJy4vaGFuZGxlVG9kbyc7XG5pbXBvcnQgeyBwcm9qZWN0RmFjdG9yeSwgaGFuZGxlUHJvamVjdExpc3RNb2R1bGUgfSBmcm9tICcuL2hhbmRsZVByb2plY3QnO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdVSSBsb2FkZWQnKTtcblxuICBjb25zdCBsb2FkVG9kb0xpc3QgPSAobmFtZSA9ICdpbmJveCcpID0+IHtcbiAgICBjb25zdCB0b2RvQ2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1jYXRlZ29yeScpO1xuICAgIHRvZG9DYXRlZ29yeS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICBjb25zdCBkaXNwbGF5VG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG4gICAgZGlzcGxheVRvZG9MaXN0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBjb25zdCB0b2RvTGlzdCA9IGhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmdldFRvZG9zQnlQcm9qZWN0TmFtZShuYW1lKTtcblxuICAgIGlmICh0b2RvTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGVtcHR5VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICBlbXB0eVRvZG8udGV4dENvbnRlbnQgPSAnZW1wdHkgdG9kbyBmb3Igbm93JztcbiAgICAgIGRpc3BsYXlUb2RvTGlzdC5hcHBlbmRDaGlsZChlbXB0eVRvZG8pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvTGlzdC5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IGFwcGVuZFRvZG8gPSByZW5kZXJUb2RvSXRlbSh0b2RvKTtcbiAgICAgICAgZGlzcGxheVRvZG9MaXN0LmFwcGVuZENoaWxkKGFwcGVuZFRvZG8pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvYWRQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5LXByb2plY3RzLWxpc3QnKTtcbiAgICBwcm9qZWN0TGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPVxuICAgICAgaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuZ2V0QWxsUHJvamVjdEV4Y2VwdERlZmF1bHRQcm9qZWN0KCk7XG5cbiAgICBpZiAoIXByb2plY3RzKSB7XG4gICAgICBjb25zdCBlbXB0eVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgZW1wdHlQcm9qZWN0LnRleHRDb250ZW50ID0gJ05vIHByb2plY3QgeWV0JztcbiAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGVtcHR5UHJvamVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgYXBwZW5kUHJvamVjdCA9IHJlbmRlclByb2plY3RJdGVtKHByb2plY3QpO1xuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChhcHBlbmRQcm9qZWN0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWxldGVUb2RvID0gKHRvZG8pID0+IHtcbiAgICBoYW5kbGVUb2RvTGlzdE1vZHVsZS5kZWxldGVUb2RvV2l0aElEKHRvZG8uaWQpO1xuICAgIGhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmRlbGV0ZVRvZG9Gcm9tUHJvamVjdCh0b2RvLnByb2plY3QsIHRvZG8pO1xuXG4gICAgbG9hZFRvZG9MaXN0KHRvZG8ucHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuZGVsZXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICBsb2FkUHJvamVjdExpc3QoKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJQcm9qZWN0SXRlbSA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlclByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNpcmNsZUNvbG9yUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHdyYXBwZXJQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICBwcm9qZWN0SW5mby5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWluZm8nKTtcbiAgICBwcm9qZWN0SW5mby5kYXRhc2V0Lmxpc3QgPSBgJHtwcm9qZWN0LnRpdGxlfWA7XG4gICAgY2lyY2xlQ29sb3JQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2NpcmNsZS1jb2xvcicpO1xuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1wcm9qZWN0LWJ0bicpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgZGVsZXRlUHJvamVjdEJ0bi5pbm5lckhUTUwgPSBgXG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS14LWxnIGRlbGV0ZS1wcm9qZWN0XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMy44NTQgMi4xNDZhLjUuNSAwIDAgMSAwIC43MDhsLTExIDExYS41LjUgMCAwIDEtLjcwOC0uNzA4bDExLTExYS41LjUgMCAwIDEgLjcwOCAwWlwiLz5cbiAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMi4xNDYgMi4xNDZhLjUuNSAwIDAgMCAwIC43MDhsMTEgMTFhLjUuNSAwIDAgMCAuNzA4LS43MDhsLTExLTExYS41LjUgMCAwIDAtLjcwOCAwWlwiLz5cbiAgICAgIDwvc3ZnPlxuICAgIGA7XG4gICAgY2lyY2xlQ29sb3JQcm9qZWN0LmlubmVySFRNTCA9IGBcbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIGZpbGw9XCIjZmY5OTMzXCIgY2xhc3M9XCJiaSBiaS1jaXJjbGUtZmlsbFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjhcIiBjeT1cIjhcIiByPVwiOFwiLz5cbiAgICAgIDwvc3ZnPlxuICAgIGA7XG4gICAgZGVsZXRlUHJvamVjdEJ0bi5vbmNsaWNrID0gKCkgPT4gZGVsZXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICBwcm9qZWN0SW5mby5hcHBlbmRDaGlsZChjaXJjbGVDb2xvclByb2plY3QpO1xuICAgIHByb2plY3RJbmZvLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgd3JhcHBlclByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEluZm8pO1xuICAgIHdyYXBwZXJQcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xuXG4gICAgcmV0dXJuIHdyYXBwZXJQcm9qZWN0O1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclRvZG9JdGVtID0gKHRvZG8pID0+IHtcbiAgICAvLyBUT0RPIDogcmVjdXBlcmVyIG1lcyBkZXV4IGZvbmN0aW9ucyBBUFBFTkNISUxEIGV0IEZBQ1RPUllFTEVNRU5UXG4gICAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsZWZ0U2lkZU9mVG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCByaWdodFNpZGVPZlRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZG9uZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBkaXNsYXlUb2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgZGlzcGxheVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJyk7XG4gICAgbGVmdFNpZGVPZlRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcbiAgICByaWdodFNpZGVPZlRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Jyk7XG5cbiAgICBkaXNsYXlUb2RvVGl0bGUudGV4dENvbnRlbnQgPSBgJHt0b2RvLnRpdGxlfWA7XG4gICAgZG9uZUJ0bi50ZXh0Q29udGVudCA9ICdkb25lJztcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ2VkaXQnO1xuICAgIGRpc3BsYXlQcmlvcml0eS50ZXh0Q29udGVudCA9ICdwcmlvcml0eSc7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gICAgZGVsZXRlQnRuLm9uY2xpY2sgPSAoKSA9PiBkZWxldGVUb2RvKHRvZG8pO1xuXG4gICAgbGVmdFNpZGVPZlRvZG9JdGVtLmFwcGVuZENoaWxkKGRvbmVCdG4pO1xuICAgIGxlZnRTaWRlT2ZUb2RvSXRlbS5hcHBlbmRDaGlsZChkaXNsYXlUb2RvVGl0bGUpO1xuXG4gICAgcmlnaHRTaWRlT2ZUb2RvSXRlbS5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICByaWdodFNpZGVPZlRvZG9JdGVtLmFwcGVuZENoaWxkKGRpc3BsYXlQcmlvcml0eSk7XG4gICAgcmlnaHRTaWRlT2ZUb2RvSXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQobGVmdFNpZGVPZlRvZG9JdGVtKTtcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZChyaWdodFNpZGVPZlRvZG9JdGVtKTtcblxuICAgIHJldHVybiB0b2RvSXRlbTtcbiAgfTtcblxuICBjb25zdCBnZXRUb2RvSW5mbyA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdUb2RvID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNhZGQtdG9kby1mb3JtIGlucHV0JylcbiAgICApLnJlZHVjZSgoYWNjLCBpbnB1dCkgPT4gKHsgLi4uYWNjLCBbaW5wdXQuaWRdOiBpbnB1dC52YWx1ZSB9KSwge30pO1xuXG4gICAgcmV0dXJuIG5ld1RvZG87XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdFRvQWRkSW5mbyA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJyNhZGQtcHJvamVjdC1mb3JtIGlucHV0J1xuICAgICkudmFsdWU7XG5cbiAgICByZXR1cm4gcHJvamVjdFRpdGxlLnRvTG93ZXJDYXNlKCk7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9kb1VJID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZFRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10b2RvLWZvcm0nKTtcblxuICAgIGFkZFRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBuZXdUb2RvID0gdG9kb0ZhY3RvcnkyKGdldFRvZG9JbmZvKCkpO1xuICAgICAgY29uc29sZS5sb2cobmV3VG9kby5wcm9qZWN0KTtcbiAgICAgIGhhbmRsZVRvZG9MaXN0TW9kdWxlLmFkZFRvZG8obmV3VG9kbyk7XG4gICAgICBoYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5hZGRUb2RvVG9Qcm9qZWN0KG5ld1RvZG8ucHJvamVjdCwgbmV3VG9kbyk7XG4gICAgICBsb2FkVG9kb0xpc3QobmV3VG9kby5wcm9qZWN0KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBBZGRFdmVudExpc3RlbmVyVG9GZXRjaFRvZG9JblByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJy5kaXNwbGF5LW1haW4tbGlzdCwgLnByb2plY3QtaW5mbydcbiAgICApO1xuXG4gICAgcHJvamVjdE5hbWUuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbG9hZFRvZG9MaXN0KHByb2plY3QuZGF0YXNldC5saXN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGFkZFByb2plY3RVSSA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1mb3JtJyk7XG5cbiAgICBhZGRQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gZ2V0UHJvamVjdFRvQWRkSW5mbygpO1xuICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KG5ld1Byb2plY3RUaXRsZSk7XG4gICAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0KTtcbiAgICAgIGhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICBsb2FkUHJvamVjdExpc3QoKTtcbiAgICAgIEFkZEV2ZW50TGlzdGVuZXJUb0ZldGNoVG9kb0luUHJvamVjdCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVBc2lkZVNpZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgaGlkZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRlLWFzaWRlJyk7XG4gICAgY29uc3QgYXNpZGVJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FzaWRlLWluZm9ybWF0aW9ucycpO1xuICAgIGNvbnN0IG1haW5JbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4taW5mb3JtYXRpb25zJyk7XG4gICAgaGlkZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGFzaWRlSW5mby5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LWFzaWRlJyk7XG4gICAgICBhc2lkZUluZm8uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZS1hc2lkZScpO1xuICAgICAgbWFpbkluZm8uY2xhc3NMaXN0LnRvZ2dsZSgnZnVsbC1tYWluJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlQ2xhc3NPblNtYWxsZXJTY3JlZW4gPSAoKSA9PiB7XG4gICAgY29uc3QgYXNpZGVJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FzaWRlLWluZm9ybWF0aW9ucycpO1xuICAgIGNvbnN0IG1haW5JbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4taW5mb3JtYXRpb25zJyk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgY29uc3Qgd2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgICAgaWYgKHdpZHRoIDwgODE1KSB7XG4gICAgICAgIGlmIChhc2lkZUluZm8uY2xhc3NMaXN0LnZhbHVlID09PSAnc2hvdy1hc2lkZScpIHtcbiAgICAgICAgICBhc2lkZUluZm8uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1hc2lkZScpO1xuICAgICAgICAgIGFzaWRlSW5mby5jbGFzc0xpc3QuYWRkKCdoaWRlLWFzaWRlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHdpZHRoID4gODE1KSB7XG4gICAgICAgIGlmIChhc2lkZUluZm8uY2xhc3NMaXN0LnZhbHVlID09PSAnaGlkZS1hc2lkZScpIHtcbiAgICAgICAgICBhc2lkZUluZm8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1hc2lkZScpO1xuICAgICAgICAgIGFzaWRlSW5mby5jbGFzc0xpc3QuYWRkKCdzaG93LWFzaWRlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1haW5JbmZvLmNsYXNzTGlzdC52YWx1ZSA9PT0gJ2Z1bGwtbWFpbicpIHtcbiAgICAgICAgICBtYWluSW5mby5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsLW1haW4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbG9hZFRvZG9MaXN0LFxuICAgIGxvYWRQcm9qZWN0TGlzdCxcbiAgICBhZGRUb2RvVUksXG4gICAgYWRkUHJvamVjdFVJLFxuICAgIEFkZEV2ZW50TGlzdGVuZXJUb0ZldGNoVG9kb0luUHJvamVjdCxcbiAgICBoaWRlQXNpZGVTaWRlLFxuICAgIHRvZ2dsZUNsYXNzT25TbWFsbGVyU2NyZWVuLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVUk7XG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IGhhbmRsZVRvZG9MaXN0TW9kdWxlIH0gZnJvbSAnLi9oYW5kbGVUb2RvJztcblxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUsIGRlZmF1bHRQcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHRvZG9zID0gW107XG5cbiAgcmV0dXJuIHtcbiAgICBpZDogdXVpZHY0KCksXG4gICAgdGl0bGU6IHRpdGxlLnRvTG93ZXJDYXNlKCksXG4gICAgdG9kb3MsXG4gICAgZGVmYXVsdFByb2plY3Q6IGRlZmF1bHRQcm9qZWN0IHx8IGZhbHNlLFxuICB9O1xufTtcblxuY29uc3QgaGFuZGxlUHJvamVjdExpc3RNb2R1bGUgPSAoKCkgPT4ge1xuICBjb25zdCBhbGxUb2RvcyA9IGhhbmRsZVRvZG9MaXN0TW9kdWxlLmdldFRvZG9MaXN0KCk7XG4gIGxldCBsaXN0UHJvamVjdCA9IFtdO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGxpc3RQcm9qZWN0LnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdEJ5TmFtZSA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0cyA9IGxpc3RQcm9qZWN0LmZpbmQoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgKTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBjb25zdCBnZXRUb2Rvc0J5UHJvamVjdE5hbWUgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBsaXN0UHJvamVjdC5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IG5hbWUudG9Mb3dlckNhc2UoKVxuICAgICk7XG4gICAgcmV0dXJuIHJlc3VsdHMudG9kb3M7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9kb1RvUHJvamVjdCA9IChuYW1lLCB0b2RvKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFRvQWRkID0gZ2V0UHJvamVjdEJ5TmFtZShuYW1lKTtcblxuICAgIGlmIChwcm9qZWN0VG9BZGQudG9kb3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gdG9kby5pZCkpIHJldHVybjtcbiAgICBpZiAodG9kby5wcm9qZWN0ICE9PSBuYW1lKSByZXR1cm47XG4gICAgcHJvamVjdFRvQWRkLnRvZG9zLnB1c2godG9kbyk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVG9kb0Zyb21Qcm9qZWN0ID0gKHByb2plY3QsIHRvZG8pID0+IHtcbiAgICBjb25zdCBwcm9qZWN0VG9EZWxldGUgPSBnZXRQcm9qZWN0QnlOYW1lKHByb2plY3QpO1xuXG4gICAgcHJvamVjdFRvRGVsZXRlLnRvZG9zID0gcHJvamVjdFRvRGVsZXRlLnRvZG9zLmZpbHRlcihcbiAgICAgIChpdGVtKSA9PiBpdGVtLmlkICE9PSB0b2RvLmlkXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBzaG93QWxsVG9kb3MgPSAoKSA9PiB7XG4gICAgY29uc29sZS50YWJsZShhbGxUb2Rvcyk7XG4gIH07XG5cbiAgY29uc3QgZ2V0QWxsUHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhsaXN0UHJvamVjdCk7XG4gICAgcmV0dXJuIGxpc3RQcm9qZWN0O1xuICB9O1xuXG4gIGNvbnN0IGdldEFsbFByb2plY3RFeGNlcHREZWZhdWx0UHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBhbGxQcm9qZWN0RXhjZXB0SW5ib3ggPSBsaXN0UHJvamVjdC5maWx0ZXIoXG4gICAgICAocHJvamVjdCkgPT4gIXByb2plY3QuZGVmYXVsdFByb2plY3RcbiAgICApO1xuICAgIHJldHVybiBhbGxQcm9qZWN0RXhjZXB0SW5ib3g7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgbGlzdFByb2plY3QgPSBsaXN0UHJvamVjdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHByb2plY3QuaWQpO1xuXG4gICAgaGFuZGxlVG9kb0xpc3RNb2R1bGUuZGVsZXRlQWxsVG9kb0Zyb21EZWxldGVkUHJvamVjdChwcm9qZWN0LnRpdGxlKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZFByb2plY3QsXG4gICAgZ2V0QWxsUHJvamVjdCxcbiAgICBnZXRBbGxQcm9qZWN0RXhjZXB0RGVmYXVsdFByb2plY3QsXG4gICAgZ2V0UHJvamVjdEJ5TmFtZSxcbiAgICBnZXRUb2Rvc0J5UHJvamVjdE5hbWUsXG4gICAgc2hvd0FsbFRvZG9zLFxuICAgIGFkZFRvZG9Ub1Byb2plY3QsXG4gICAgZGVsZXRlVG9kb0Zyb21Qcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBwcm9qZWN0RmFjdG9yeSwgaGFuZGxlUHJvamVjdExpc3RNb2R1bGUgfTtcbiIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5jb25zdCB0b2RvRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3QgPSAnaW5ib3gnKSA9PiAoe1xuICBpZDogdXVpZHY0KCksXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgcHJvamVjdDogcHJvamVjdC50b0xvd2VyQ2FzZSgpLFxufSk7XG5cbmNvbnN0IHRvZG9GYWN0b3J5MiA9ICh0b2RvKSA9PiAoe1xuICBpZDogdXVpZHY0KCksXG4gIHRpdGxlOiB0b2RvLnRpdGxlLFxuICBkZXNjcmlwdGlvbjogdG9kby5kZXNjcmlwdGlvbixcbiAgcHJvamVjdDogdG9kby5wcm9qZWN0LnRvTG93ZXJDYXNlKCkgfHwgJ2luYm94Jyxcbn0pO1xuXG5jb25zdCBoYW5kbGVUb2RvTGlzdE1vZHVsZSA9ICgoKSA9PiB7XG4gIGxldCBsaXN0VG9kbyA9IFtdO1xuXG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xuICAgIGxpc3RUb2RvLnB1c2godG9kbyk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgLy8gZnVuY3Rpb24gaW51dGlsZSwgbWFpcyBqZSBsYSBnYXJkZSBwb3VyIGxlIG1vbWVudC5cbiAgICAvLyBqJ3V0aWxpc2UgbCdpZCB2aWEgbGUgZG9tIHBvdXIgZGVsZXRlXG4gICAgbGlzdFRvZG8gPSBsaXN0VG9kby5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHRvZG8uaWQpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG9XaXRoSUQgPSAoaWQpID0+IHtcbiAgICBsaXN0VG9kbyA9IGxpc3RUb2RvLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gaWQpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUFsbFRvZG9Gcm9tRGVsZXRlZFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBsaXN0VG9kbyA9IGxpc3RUb2RvLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5wcm9qZWN0ICE9PSBwcm9qZWN0TmFtZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VG9kb0xpc3QgPSAoKSA9PiB7XG4gICAgY29uc29sZS50YWJsZShsaXN0VG9kbyk7XG4gICAgcmV0dXJuIGxpc3RUb2RvO1xuICB9O1xuXG4gIGNvbnN0IGdldFRvZG9JZCA9ICh0b2RvKSA9PiB7XG4gICAgY29uc29sZS5sb2codG9kby5pZCk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVG9kbyA9ICh0b2RvLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3QpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkVG9kbyA9IHtcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBwcm9qZWN0OiBwcm9qZWN0LnRvTG93ZXJDYXNlKCksXG4gICAgfTtcblxuICAgIE9iamVjdC5hc3NpZ24odG9kbywgdXBkYXRlZFRvZG8pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkVG9kbyxcbiAgICBkZWxldGVUb2RvLFxuICAgIGdldFRvZG9MaXN0LFxuICAgIGdldFRvZG9JZCxcbiAgICB1cGRhdGVUb2RvLFxuICAgIGRlbGV0ZUFsbFRvZG9Gcm9tRGVsZXRlZFByb2plY3QsXG4gICAgZGVsZXRlVG9kb1dpdGhJRCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHRvZG9GYWN0b3J5LCB0b2RvRmFjdG9yeTIsIGhhbmRsZVRvZG9MaXN0TW9kdWxlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgeyB0b2RvRmFjdG9yeSwgaGFuZGxlVG9kb0xpc3RNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvaGFuZGxlVG9kbyc7XG5pbXBvcnQge1xuICBwcm9qZWN0RmFjdG9yeSxcbiAgaGFuZGxlUHJvamVjdExpc3RNb2R1bGUsXG59IGZyb20gJy4vbW9kdWxlcy9oYW5kbGVQcm9qZWN0JztcbmltcG9ydCBVSSBmcm9tICcuL21vZHVsZXMvVUknO1xuXG5jb25zdCBuZXdUb2RvID0gdG9kb0ZhY3RvcnkoJ3N0YXJ0IHJlYWN0JywgJ2J1eSBtaWxrIGZvciBsdW5lJywgJ0phdmFTY3JpcHQnKTtcbmNvbnN0IHRvZG8yID0gdG9kb0ZhY3RvcnkoJ2NhbGwgbW9tJywgJ2NhbGwgbW9tIGZvciBiaXJ0aGRheScsICdQZXJzbycpO1xuY29uc3QgdG9kbzMgPSB0b2RvRmFjdG9yeShcbiAgJ3JlYWQgWW91IGRvbnQga25vdyBKUycsXG4gICdidXkgdGhlIGJvb2sgZmlyc3QnLFxuICAnSmF2YVNjcmlwdCdcbik7XG5jb25zdCB0b2RvNCA9IHRvZG9GYWN0b3J5KCd3YXRjaCBiYXJjZWxvbmEnLCAnbGVhZ3VlIGRlcyBjaGFtcGlvc24nKTtcbmNvbnN0IGRlbGV0ZVRvZG8gPSB0b2RvRmFjdG9yeSgnZm9vJywgJ2JhcicsICdKQVZBU0NSSVBUJyk7XG5jb25zdCB0b2RvNSA9IHRvZG9GYWN0b3J5KCdhbm90aGVyIHRvZG8nLCAnaXRzIGNvb2wnKTtcbi8vIGNvbnNvbGUubG9nKG5ld1RvZG8pO1xuXG4vLyBoYW5kbGVUb2RvTGlzdC5nZXRUb2RvTGlzdCgpO1xuaGFuZGxlVG9kb0xpc3RNb2R1bGUuYWRkVG9kbyhuZXdUb2RvKTtcbmhhbmRsZVRvZG9MaXN0TW9kdWxlLmFkZFRvZG8odG9kbzIpO1xuaGFuZGxlVG9kb0xpc3RNb2R1bGUuYWRkVG9kbyh0b2RvMyk7XG5oYW5kbGVUb2RvTGlzdE1vZHVsZS5hZGRUb2RvKHRvZG80KTtcbmhhbmRsZVRvZG9MaXN0TW9kdWxlLmFkZFRvZG8oZGVsZXRlVG9kbyk7XG5oYW5kbGVUb2RvTGlzdE1vZHVsZS5hZGRUb2RvKHRvZG81KTtcbi8vIGhhbmRsZVRvZG9MaXN0LmdldFRvZG9MaXN0KCk7XG5cbi8vIGhhbmRsZVRvZG9MaXN0LmdldFRvZG9JZCh0b2RvMik7XG5oYW5kbGVUb2RvTGlzdE1vZHVsZS51cGRhdGVUb2RvKFxuICB0b2RvNCxcbiAgJ3dhdGNoIEJhcmNlbG9uYScsXG4gICdDaGFtcGlvbnMgTGVhZ3VlJyxcbiAgJ0Zvb3RiYWxsJ1xuKTtcbi8vIGhhbmRsZVRvZG9MaXN0LmRlbGV0ZVRvZG8odG9kbzMpO1xuXG5jb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoJ0phdmFTY3JpcHQnKTtcbmNvbnN0IHBlcnNvUHJvamVjdCA9IHByb2plY3RGYWN0b3J5KCdQZXJzbycpO1xuY29uc3QgZm9vdGJhbGwgPSBwcm9qZWN0RmFjdG9yeSgnZm9vVGJhbGwnKTtcbmNvbnN0IGluYm94ID0gcHJvamVjdEZhY3RvcnkoJ2luYm94JywgdHJ1ZSk7XG5jb25zdCB0b2RheSA9IHByb2plY3RGYWN0b3J5KCd0b2RheScsIHRydWUpO1xuY29uc3QgdXBjb21pbmcgPSBwcm9qZWN0RmFjdG9yeSgndXBjb21pbmcnLCB0cnVlKTtcblxuLy8gY29uc29sZS5sb2cobmV3UHJvamVjdCk7XG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkUHJvamVjdChwZXJzb1Byb2plY3QpO1xuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkUHJvamVjdChmb290YmFsbCk7XG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5hZGRQcm9qZWN0KGluYm94KTtcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFByb2plY3QodG9kYXkpO1xuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkUHJvamVjdCh1cGNvbWluZyk7XG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5zaG93QWxsVG9kb3MoKTtcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFRvZG9Ub1Byb2plY3QobmV3UHJvamVjdC50aXRsZSwgdG9kbzMpO1xuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkVG9kb1RvUHJvamVjdChmb290YmFsbC50aXRsZSwgdG9kbzQpO1xuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkVG9kb1RvUHJvamVjdChwZXJzb1Byb2plY3QudGl0bGUsIHRvZG8yKTtcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFRvZG9Ub1Byb2plY3QobmV3UHJvamVjdC50aXRsZSwgdG9kbzMpO1xuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkVG9kb1RvUHJvamVjdChuZXdQcm9qZWN0LnRpdGxlLCBkZWxldGVUb2RvKTtcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFRvZG9Ub1Byb2plY3QobmV3UHJvamVjdC50aXRsZSwgdG9kbzMpO1xuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkVG9kb1RvUHJvamVjdChuZXdQcm9qZWN0LnRpdGxlLCB0b2RvMyk7XG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5hZGRUb2RvVG9Qcm9qZWN0KG5ld1Byb2plY3QudGl0bGUsIG5ld1RvZG8pO1xuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkVG9kb1RvUHJvamVjdChuZXdQcm9qZWN0LnRpdGxlLCB0b2RvMyk7XG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5hZGRUb2RvVG9Qcm9qZWN0KGluYm94LnRpdGxlLCB0b2RvNSk7XG5cbi8vIGhhbmRsZVByb2plY3RMaXN0LmdldFByb2plY3RCeU5hbWUoJ0phdmFTY3JpcHQnKTtcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLnNob3dBbGxUb2RvcygpO1xuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuZ2V0UHJvamVjdEJ5TmFtZSgnamF2QXNjUmlwdCcpO1xuXG5oYW5kbGVUb2RvTGlzdE1vZHVsZS5kZWxldGVUb2RvKGRlbGV0ZVRvZG8pO1xuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuZGVsZXRlVG9kb0Zyb21Qcm9qZWN0KGRlbGV0ZVRvZG8ucHJvamVjdCwgZGVsZXRlVG9kbyk7XG5oYW5kbGVUb2RvTGlzdE1vZHVsZS5nZXRUb2RvTGlzdCgpO1xuXG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5nZXRBbGxQcm9qZWN0KCk7XG5cbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmRlbGV0ZVByb2plY3QocGVyc29Qcm9qZWN0KTtcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmdldEFsbFByb2plY3QoKTtcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLnNob3dBbGxUb2RvcygpO1xuXG4vLyBVSS5sb2FkVG9kb0xpc3QoKTtcbi8vIFVJLmRlbGV0ZVRvZG9VSSgpO1xuXG5VSS5sb2FkVG9kb0xpc3QoKTtcblVJLmxvYWRQcm9qZWN0TGlzdCgpO1xuVUkuYWRkUHJvamVjdFVJKCk7XG5VSS5hZGRUb2RvVUkoKTtcblVJLkFkZEV2ZW50TGlzdGVuZXJUb0ZldGNoVG9kb0luUHJvamVjdCgpO1xuVUkuaGlkZUFzaWRlU2lkZSgpO1xuVUkudG9nZ2xlQ2xhc3NPblNtYWxsZXJTY3JlZW4oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==