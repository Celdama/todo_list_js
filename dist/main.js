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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n}\n\n.full-main {\n  left: 0px !important;\n}\n\n.show-aside {\n  transform: translateX(0);\n}\n\n.hide-aside {\n  transform: translateX(-400px);\n}\n\nhtml {\n  font-size: 10px;\n  overflow-y: hidden;\n}\nhtml body #content {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.6rem;\n  height: 100%;\n}\nhtml body #content header {\n  display: flex;\n  background-color: #db4c3f;\n  padding: 1rem 1.8rem;\n}\nhtml body #content header button {\n  border: none;\n  padding: 0.2rem;\n  border-radius: 2px;\n  background-color: transparent;\n  display: flex;\n  margin-left: 1.5rem;\n}\nhtml body #content header button:hover {\n  cursor: pointer;\n  background-color: rgba(255, 255, 255, 0.3);\n}\nhtml body #content #app {\n  display: flex;\n  position: relative;\n  overflow-y: hidden;\n  height: 100vh;\n}\nhtml body #content #app #aside-informations {\n  position: absolute;\n  background-color: #f7f7f7;\n  z-index: 10;\n  width: 300px;\n  height: 100%;\n  transition: transform 0.6s ease;\n}\nhtml body #content #app #aside-informations .todo-informations {\n  padding: 1.2rem 0.6rem 1.2rem 1.2rem;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list {\n  padding: 2rem 0 2rem 2rem;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list li {\n  display: flex;\n  align-items: center;\n  font-size: 1.4rem;\n  font-weight: 400;\n  list-style-type: none;\n  padding: 1rem 0.8rem;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list li .main-list-icon {\n  margin-right: 1rem;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-main-list {\n  border-radius: 5px;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-main-list:hover {\n  cursor: pointer;\n  background-color: #ececec;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-main-list span {\n  color: #202020;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 2rem 0 0 0;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title {\n  display: flex;\n  width: 100%;\n  padding: 1rem 0 1rem 0.8rem;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title .dropdown-projects-list {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  border: none;\n  background-color: transparent;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title .dropdown-projects-list:hover {\n  cursor: pointer;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title .dropdown-projects-list span {\n  color: #333333;\n  font-weight: bold;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title .add-project {\n  width: 10%;\n  display: flex;\n  justify-content: center;\n  border: none;\n  background-color: transparent;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title .add-project:hover {\n  cursor: pointer;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list {\n  width: 100%;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project {\n  display: flex;\n  align-items: center;\n  border-radius: 5px;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project:hover {\n  cursor: pointer;\n  background-color: #ececec;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project:hover .delete-project-btn {\n  opacity: 1;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project .project-info {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem 0.8rem;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project .project-info .circle-color {\n  width: 13%;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project .project-info .project-name {\n  width: 100%;\n  font-weight: lighter;\n  letter-spacing: 0.5px;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project .delete-project-btn {\n  width: 10%;\n  opacity: 0;\n  border: none;\n  background-color: transparent;\n  display: flex;\n  justify-content: center;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project .delete-project-btn:hover {\n  cursor: pointer;\n}\nhtml body #content #app #main-informations {\n  position: absolute;\n  justify-self: center;\n  left: 300px;\n  width: calc(100% - 300px);\n  transition: left 0.6s ease;\n}\nhtml body #content #app #main-informations .display-todo-list {\n  padding: 6rem;\n}\nhtml body #content #app #main-informations .display-todo-list .todo-list {\n  padding: 2rem;\n}\nhtml body #content #app #main-informations .display-todo-list .todo-list .todo-item {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 0;\n  border-bottom: 1px solid black;\n}", "",{"version":3,"sources":["webpack://./src/styles/base.scss","webpack://./src/style.scss","webpack://./src/styles/animation.scss","webpack://./src/styles/variables.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,uBAAA;EACA,sBAAA;ACCF;;ADEA;EACE,qBAAA;ACCF;;ACTA;EACE,oBAAA;ADYF;;ACTA;EACE,wBAAA;ADYF;;ACTA;EACE,6BAAA;ADYF;;AAjBA;EACE,eEEe;EFDf,kBAAA;AAoBF;AAjBI;EACE,aAAA;EACA,sBAAA;EACA,iBAAA;EACA,YAAA;AAmBN;AAjBM;EACE,aAAA;EACA,yBEhBO;EFiBP,oBAAA;AAmBR;AAjBQ;EACE,YAAA;EACA,eAAA;EACA,kBAAA;EACA,6BAAA;EACA,aAAA;EACA,mBAAA;AAmBV;AAjBU;EACE,eAAA;EACA,0CE5BU;AF+CtB;AAdM;EACE,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,aAAA;AAgBR;AAdQ;EACE,kBAAA;EACA,yBExCI;EFyCJ,WAAA;EACA,YAAA;EACA,YAAA;EACA,+BAAA;AAgBV;AAdU;EACE,oCAAA;AAgBZ;AAdY;EACE,yBAAA;AAgBd;AAdc;EACE,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,gBAAA;EACA,qBAAA;EACA,oBAAA;AAgBhB;AAdgB;EACE,kBAAA;AAgBlB;AAZc;EACE,kBAAA;AAchB;AAZgB;EACE,eAAA;EACA,yBErEE;AFmFpB;AAXgB;EACE,cExEA;AFqFlB;AATc;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;EACA,mBAAA;AAWhB;AATgB;EACE,aAAA;EACA,WAAA;EACA,2BAAA;AAWlB;AATkB;EACE,aAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,6BAAA;AAWpB;AAToB;EACE,eAAA;AAWtB;AARoB;EACE,cAAA;EACA,iBAAA;AAUtB;AANkB;EACE,UAAA;EACA,aAAA;EACA,uBAAA;EACA,YAAA;EACA,6BAAA;AAQpB;AANoB;EACE,eAAA;AAQtB;AAFc;EAEE,WAAA;AAGhB;AADgB;EACE,aAAA;EACA,mBAAA;EACA,kBAAA;AAGlB;AADkB;EACE,eAAA;EACA,yBEnIA;AFsIpB;AADoB;EACE,UAAA;AAGtB;AAAkB;EACE,aAAA;EACA,WAAA;EACA,uBAAA;EACA,mBAAA;EACA,oBAAA;AAEpB;AAAoB;EACE,UAAA;AAEtB;AACoB;EACE,WAAA;EACA,oBAAA;EACA,qBAAA;AACtB;AAGkB;EACE,UAAA;EACA,UAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,uBAAA;AADpB;AAGoB;EACE,eAAA;AADtB;AAUQ;EACE,kBAAA;EACA,oBAAA;EACA,WAAA;EACA,yBAAA;EACA,0BAAA;AARV;AAUU;EACE,aAAA;AARZ;AAUY;EACE,aAAA;AARd;AAUc;EACE,aAAA;EACA,8BAAA;EACA,eAAA;EACA,8BAAA;AARhB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n}\n","@import './styles/base.scss';\n@import './styles/variables.scss';\n@import './styles/animation.scss';\n\nhtml {\n  font-size: $base-font-size;\n  overflow-y: hidden;\n\n  body {\n    #content {\n      display: flex;\n      flex-direction: column;\n      font-size: 1.6rem;\n      height: 100%;\n\n      header {\n        display: flex;\n        background-color: $header-color;\n        padding: 1rem 1.8rem;\n\n        button {\n          border: none;\n          padding: 0.2rem;\n          border-radius: 2px;\n          background-color: transparent;\n          display: flex;\n          margin-left: 1.5rem;\n\n          &:hover {\n            cursor: pointer;\n            background-color: $header-button-hover;\n          }\n        }\n      }\n\n      #app {\n        display: flex;\n        position: relative;\n        overflow-y: hidden;\n        height: 100vh;\n\n        #aside-informations {\n          position: absolute;\n          background-color: $aside-color;\n          z-index: 10;\n          width: 300px;\n          height: 100%;\n          transition: transform 0.6s ease;\n\n          .todo-informations {\n            padding: 1.2rem 0.6rem 1.2rem 1.2rem;\n\n            #projects-main-list {\n              padding: 2rem 0 2rem 2rem;\n\n              li {\n                display: flex;\n                align-items: center;\n                font-size: 1.4rem;\n                font-weight: 400;\n                list-style-type: none;\n                padding: 1rem 0.8rem;\n\n                .main-list-icon {\n                  margin-right: 1rem;\n                }\n              }\n\n              .display-main-list {\n                border-radius: 5px;\n\n                &:hover {\n                  cursor: pointer;\n                  background-color: $aside-color-hover;\n                }\n\n                span {\n                  color: $main-list-color;\n                }\n              }\n\n              .display-projects {\n                display: flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: flex-start;\n                padding: 2rem 0 0 0;\n\n                .display-projects-title {\n                  display: flex;\n                  width: 100%;\n                  padding: 1rem 0 1rem 0.8rem;\n\n                  .dropdown-projects-list {\n                    display: flex;\n                    align-items: center;\n                    width: 100%;\n                    border: none;\n                    background-color: transparent;\n\n                    &:hover {\n                      cursor: pointer;\n                    }\n\n                    span {\n                      color: #333333;\n                      font-weight: bold;\n                    }\n                  }\n\n                  .add-project {\n                    width: 10%;\n                    display: flex;\n                    justify-content: center;\n                    border: none;\n                    background-color: transparent;\n\n                    &:hover {\n                      cursor: pointer;\n                    }\n                  }\n                }\n              }\n\n              #display-projects-list {\n                // margin-left: 3.4rem;\n                width: 100%;\n\n                .project {\n                  display: flex;\n                  align-items: center;\n                  border-radius: 5px;\n\n                  &:hover {\n                    cursor: pointer;\n                    background-color: $aside-color-hover;\n\n                    .delete-project-btn {\n                      opacity: 1;\n                    }\n                  }\n                  .project-info {\n                    display: flex;\n                    width: 100%;\n                    justify-content: center;\n                    align-items: center;\n                    padding: 1rem 0.8rem;\n\n                    .circle-color {\n                      width: 13%;\n                    }\n\n                    .project-name {\n                      width: 100%;\n                      font-weight: lighter;\n                      letter-spacing: 0.5px;\n                    }\n                  }\n\n                  .delete-project-btn {\n                    width: 10%;\n                    opacity: 0;\n                    border: none;\n                    background-color: transparent;\n                    display: flex;\n                    justify-content: center;\n\n                    &:hover {\n                      cursor: pointer;\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n\n        #main-informations {\n          position: absolute;\n          justify-self: center;\n          left: 300px;\n          width: calc(100% - 300px);\n          transition: left 0.6s ease;\n\n          .display-todo-list {\n            padding: 6rem;\n\n            .todo-list {\n              padding: 2rem;\n\n              .todo-item {\n                display: flex;\n                justify-content: space-between;\n                padding: 1rem 0;\n                border-bottom: 1px solid black;\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",".full-main {\n  left: 0px !important;\n}\n\n.show-aside {\n  transform: translateX(0);\n}\n\n.hide-aside {\n  transform: translateX(-400px);\n}\n","$body-color: blue;\n$header-color: #db4c3f;\n$header-button-hover: rgba(255, 255, 255, 0.3);\n$aside-color: #f7f7f7;\n$aside-color-hover: #ececec;\n$main-list-color: #202020;\n\n$base-font-size: 10px;\n"],"sourceRoot":""}]);
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
    const projectInfo = document.createElement('div');
    const circleColorProject = document.createElement('span');
    const projectTitle = document.createElement('span');
    const deleteProjectBtn = document.createElement('button');
    wrapperProject.classList.add('project');
    projectInfo.classList.add('project-info');
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
    const projectName = document.querySelectorAll('.project-name');
    projectName.forEach((project) => {
      // console.log(project);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDRGQUF3QztBQUN4Qyw0RkFBd0M7QUFDeEMsNEZBQXdDO0FBQ3hDLDRGQUF3QztBQUN4Qyw0RkFBd0M7QUFDeEMsNEZBQXdDO0FBQ3hDLDRGQUF3QztBQUN4Qyw0RkFBd0M7QUFDeEMsNEZBQXdDO0FBQ3hDLDRGQUF3Qzs7QUFFeEM7QUFDQSx3RkFBb0M7QUFDcEMsNEZBQXdDOztBQUV4QyxnRkFBK0I7QUFDL0IsaUdBQTZDO0FBQzdDLGlGQUFnQzs7QUFFaEMseUZBQXFDOztBQUVyQyx5RkFBcUM7QUFDckMseUZBQXFDO0FBQ3JDLHdGQUFvQzs7QUFFcEM7QUFDQTs7QUFFQSxnRUFBZTtBQUNmLG1FQUFrQjtBQUNsQixnRUFBZTtBQUNmLDZEQUFZO0FBQ1osd0ZBQXVDO0FBQ3ZDLGlFQUFnQjtBQUNoQiw4RUFBNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbW9kdWxlcy9oYW5kbGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9tb2R1bGVzL2hhbmRsZVRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5mdWxsLW1haW4ge1xcbiAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zaG93LWFzaWRlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG59XFxuXFxuLmhpZGUtYXNpZGUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MDBweCk7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50IGhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiNGMzZjtcXG4gIHBhZGRpbmc6IDFyZW0gMS44cmVtO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgaGVhZGVyIGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tbGVmdDogMS41cmVtO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgaGVhZGVyIGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XFxuICB6LWluZGV4OiAxMDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2U7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zIHtcXG4gIHBhZGRpbmc6IDEuMnJlbSAwLjZyZW0gMS4ycmVtIDEuMnJlbTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCB7XFxuICBwYWRkaW5nOiAycmVtIDAgMnJlbSAycmVtO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMXJlbSAwLjhyZW07XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3QgbGkgLm1haW4tbGlzdC1pY29uIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAuZGlzcGxheS1tYWluLWxpc3Qge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0IC5kaXNwbGF5LW1haW4tbGlzdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0IC5kaXNwbGF5LW1haW4tbGlzdCBzcGFuIHtcXG4gIGNvbG9yOiAjMjAyMDIwO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0IC5kaXNwbGF5LXByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDJyZW0gMCAwIDA7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3QgLmRpc3BsYXktcHJvamVjdHMgLmRpc3BsYXktcHJvamVjdHMtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAwIDFyZW0gMC44cmVtO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0IC5kaXNwbGF5LXByb2plY3RzIC5kaXNwbGF5LXByb2plY3RzLXRpdGxlIC5kcm9wZG93bi1wcm9qZWN0cy1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAuZGlzcGxheS1wcm9qZWN0cyAuZGlzcGxheS1wcm9qZWN0cy10aXRsZSAuZHJvcGRvd24tcHJvamVjdHMtbGlzdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3QgLmRpc3BsYXktcHJvamVjdHMgLmRpc3BsYXktcHJvamVjdHMtdGl0bGUgLmRyb3Bkb3duLXByb2plY3RzLWxpc3Qgc3BhbiB7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0IC5kaXNwbGF5LXByb2plY3RzIC5kaXNwbGF5LXByb2plY3RzLXRpdGxlIC5hZGQtcHJvamVjdCB7XFxuICB3aWR0aDogMTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3QgLmRpc3BsYXktcHJvamVjdHMgLmRpc3BsYXktcHJvamVjdHMtdGl0bGUgLmFkZC1wcm9qZWN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAjZGlzcGxheS1wcm9qZWN0cy1saXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0ICNkaXNwbGF5LXByb2plY3RzLWxpc3QgLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3QgI2Rpc3BsYXktcHJvamVjdHMtbGlzdCAucHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0ICNkaXNwbGF5LXByb2plY3RzLWxpc3QgLnByb2plY3Q6aG92ZXIgLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0ICNkaXNwbGF5LXByb2plY3RzLWxpc3QgLnByb2plY3QgLnByb2plY3QtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDAuOHJlbTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAjZGlzcGxheS1wcm9qZWN0cy1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLmNpcmNsZS1jb2xvciB7XFxuICB3aWR0aDogMTMlO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0ICNkaXNwbGF5LXByb2plY3RzLWxpc3QgLnByb2plY3QgLnByb2plY3QtaW5mbyAucHJvamVjdC1uYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3QgI2Rpc3BsYXktcHJvamVjdHMtbGlzdCAucHJvamVjdCAuZGVsZXRlLXByb2plY3QtYnRuIHtcXG4gIHdpZHRoOiAxMCU7XFxuICBvcGFjaXR5OiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3QgI2Rpc3BsYXktcHJvamVjdHMtbGlzdCAucHJvamVjdCAuZGVsZXRlLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI21haW4taW5mb3JtYXRpb25zIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgbGVmdDogMzAwcHg7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpO1xcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjZzIGVhc2U7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNtYWluLWluZm9ybWF0aW9ucyAuZGlzcGxheS10b2RvLWxpc3Qge1xcbiAgcGFkZGluZzogNnJlbTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI21haW4taW5mb3JtYXRpb25zIC5kaXNwbGF5LXRvZG8tbGlzdCAudG9kby1saXN0IHtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNtYWluLWluZm9ybWF0aW9ucyAuZGlzcGxheS10b2RvLWxpc3QgLnRvZG8tbGlzdCAudG9kby1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9hbmltYXRpb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QUNUQTtFQUNFLG9CQUFBO0FEWUY7O0FDVEE7RUFDRSx3QkFBQTtBRFlGOztBQ1RBO0VBQ0UsNkJBQUE7QURZRjs7QUFqQkE7RUFDRSxlRUVlO0VGRGYsa0JBQUE7QUFvQkY7QUFqQkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFtQk47QUFqQk07RUFDRSxhQUFBO0VBQ0EseUJFaEJPO0VGaUJQLG9CQUFBO0FBbUJSO0FBakJRO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBbUJWO0FBakJVO0VBQ0UsZUFBQTtFQUNBLDBDRTVCVTtBRitDdEI7QUFkTTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQWdCUjtBQWRRO0VBQ0Usa0JBQUE7RUFDQSx5QkV4Q0k7RUZ5Q0osV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUFnQlY7QUFkVTtFQUNFLG9DQUFBO0FBZ0JaO0FBZFk7RUFDRSx5QkFBQTtBQWdCZDtBQWRjO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFnQmhCO0FBZGdCO0VBQ0Usa0JBQUE7QUFnQmxCO0FBWmM7RUFDRSxrQkFBQTtBQWNoQjtBQVpnQjtFQUNFLGVBQUE7RUFDQSx5QkVyRUU7QUZtRnBCO0FBWGdCO0VBQ0UsY0V4RUE7QUZxRmxCO0FBVGM7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFXaEI7QUFUZ0I7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBV2xCO0FBVGtCO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQVdwQjtBQVRvQjtFQUNFLGVBQUE7QUFXdEI7QUFSb0I7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFVdEI7QUFOa0I7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBUXBCO0FBTm9CO0VBQ0UsZUFBQTtBQVF0QjtBQUZjO0VBRUUsV0FBQTtBQUdoQjtBQURnQjtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBR2xCO0FBRGtCO0VBQ0UsZUFBQTtFQUNBLHlCRW5JQTtBRnNJcEI7QUFEb0I7RUFDRSxVQUFBO0FBR3RCO0FBQWtCO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFFcEI7QUFBb0I7RUFDRSxVQUFBO0FBRXRCO0FBQ29CO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFDdEI7QUFHa0I7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQURwQjtBQUdvQjtFQUNFLGVBQUE7QUFEdEI7QUFVUTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQVJWO0FBVVU7RUFDRSxhQUFBO0FBUlo7QUFVWTtFQUNFLGFBQUE7QUFSZDtBQVVjO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBUmhCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblwiLFwiQGltcG9ydCAnLi9zdHlsZXMvYmFzZS5zY3NzJztcXG5AaW1wb3J0ICcuL3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XFxuQGltcG9ydCAnLi9zdHlsZXMvYW5pbWF0aW9uLnNjc3MnO1xcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAkYmFzZS1mb250LXNpemU7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxuXFxuICBib2R5IHtcXG4gICAgI2NvbnRlbnQge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgICAgaGVhZGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGVhZGVyLWNvbG9yO1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAxLjhyZW07XFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgIHBhZGRpbmc6IDAuMnJlbTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG5cXG4gICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXItYnV0dG9uLWhvdmVyO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgICNhcHAge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuXFxuICAgICAgICAjYXNpZGUtaW5mb3JtYXRpb25zIHtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXNpZGUtY29sb3I7XFxuICAgICAgICAgIHotaW5kZXg6IDEwO1xcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XFxuICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZTtcXG5cXG4gICAgICAgICAgLnRvZG8taW5mb3JtYXRpb25zIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjJyZW0gMC42cmVtIDEuMnJlbSAxLjJyZW07XFxuXFxuICAgICAgICAgICAgI3Byb2plY3RzLW1haW4tbGlzdCB7XFxuICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDAgMnJlbSAycmVtO1xcblxcbiAgICAgICAgICAgICAgbGkge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDAuOHJlbTtcXG5cXG4gICAgICAgICAgICAgICAgLm1haW4tbGlzdC1pY29uIHtcXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgIC5kaXNwbGF5LW1haW4tbGlzdCB7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhc2lkZS1jb2xvci1ob3ZlcjtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJG1haW4tbGlzdC1jb2xvcjtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgLmRpc3BsYXktcHJvamVjdHMge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMCAwIDA7XFxuXFxuICAgICAgICAgICAgICAgIC5kaXNwbGF5LXByb2plY3RzLXRpdGxlIHtcXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDAuOHJlbTtcXG5cXG4gICAgICAgICAgICAgICAgICAuZHJvcGRvd24tcHJvamVjdHMtbGlzdCB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgLmFkZC1wcm9qZWN0IHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAjZGlzcGxheS1wcm9qZWN0cy1saXN0IHtcXG4gICAgICAgICAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IDMuNHJlbTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgICAgICAgICAgIC5wcm9qZWN0IHtcXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFzaWRlLWNvbG9yLWhvdmVyO1xcblxcbiAgICAgICAgICAgICAgICAgICAgLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgIC5wcm9qZWN0LWluZm8ge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAwLjhyZW07XFxuXFxuICAgICAgICAgICAgICAgICAgICAuY2lyY2xlLWNvbG9yIHtcXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEzJTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0LW5hbWUge1xcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAlO1xcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNtYWluLWluZm9ybWF0aW9ucyB7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgIGxlZnQ6IDMwMHB4O1xcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuNnMgZWFzZTtcXG5cXG4gICAgICAgICAgLmRpc3BsYXktdG9kby1saXN0IHtcXG4gICAgICAgICAgICBwYWRkaW5nOiA2cmVtO1xcblxcbiAgICAgICAgICAgIC50b2RvLWxpc3Qge1xcbiAgICAgICAgICAgICAgcGFkZGluZzogMnJlbTtcXG5cXG4gICAgICAgICAgICAgIC50b2RvLWl0ZW0ge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIi5mdWxsLW1haW4ge1xcbiAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zaG93LWFzaWRlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG59XFxuXFxuLmhpZGUtYXNpZGUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MDBweCk7XFxufVxcblwiLFwiJGJvZHktY29sb3I6IGJsdWU7XFxuJGhlYWRlci1jb2xvcjogI2RiNGMzZjtcXG4kaGVhZGVyLWJ1dHRvbi1ob3ZlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiRhc2lkZS1jb2xvcjogI2Y3ZjdmNztcXG4kYXNpZGUtY29sb3ItaG92ZXI6ICNlY2VjZWM7XFxuJG1haW4tbGlzdC1jb2xvcjogIzIwMjAyMDtcXG5cXG4kYmFzZS1mb250LXNpemU6IDEwcHg7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTVweCkge1xcbiAgbWFpbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxuICAgIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgxNXB4KSB7XFxuICAuZnVsbC1tYWluIHtcXG4gICAgbGVmdDogMTQwcHg7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgxNXB4KSB7XFxuICBtYWluIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcXG4gICAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODE1cHgpIHtcXG4gIC5mdWxsLW1haW4ge1xcbiAgICBsZWZ0OiAxNDBweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4gICAgLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCB7IHRvZG9GYWN0b3J5LCBoYW5kbGVUb2RvTGlzdE1vZHVsZSwgdG9kb0ZhY3RvcnkyIH0gZnJvbSAnLi9oYW5kbGVUb2RvJztcbmltcG9ydCB7IHByb2plY3RGYWN0b3J5LCBoYW5kbGVQcm9qZWN0TGlzdE1vZHVsZSB9IGZyb20gJy4vaGFuZGxlUHJvamVjdCc7XG5cbmNvbnN0IFVJID0gKCgpID0+IHtcbiAgY29uc29sZS5sb2coJ1VJIGxvYWRlZCcpO1xuXG4gIGNvbnN0IGxvYWRUb2RvTGlzdCA9IChuYW1lID0gJ2luYm94JykgPT4ge1xuICAgIGNvbnN0IHRvZG9DYXRlZ29yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWNhdGVnb3J5Jyk7XG4gICAgdG9kb0NhdGVnb3J5LnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgIGNvbnN0IGRpc3BsYXlUb2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcbiAgICBkaXNwbGF5VG9kb0xpc3QudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGNvbnN0IHRvZG9MaXN0ID0gaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuZ2V0VG9kb3NCeVByb2plY3ROYW1lKG5hbWUpO1xuXG4gICAgaWYgKHRvZG9MaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgZW1wdHlUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIGVtcHR5VG9kby50ZXh0Q29udGVudCA9ICdlbXB0eSB0b2RvIGZvciBub3cnO1xuICAgICAgZGlzcGxheVRvZG9MaXN0LmFwcGVuZENoaWxkKGVtcHR5VG9kbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZG9MaXN0LmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgYXBwZW5kVG9kbyA9IHJlbmRlclRvZG9JdGVtKHRvZG8pO1xuICAgICAgICBkaXNwbGF5VG9kb0xpc3QuYXBwZW5kQ2hpbGQoYXBwZW5kVG9kbyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9hZFByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXktcHJvamVjdHMtbGlzdCcpO1xuICAgIHByb2plY3RMaXN0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IGhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmdldEFsbFByb2plY3RFeGNlcHRJbmJveCgpO1xuICAgIC8vIGNvbnN0IHByb2plY3RzID0gbnVsbDtcblxuICAgIGlmICghcHJvamVjdHMpIHtcbiAgICAgIGNvbnN0IGVtcHR5UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICBlbXB0eVByb2plY3QudGV4dENvbnRlbnQgPSAnTm8gcHJvamVjdCB5ZXQnO1xuICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoZW1wdHlQcm9qZWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBhcHBlbmRQcm9qZWN0ID0gcmVuZGVyUHJvamVjdEl0ZW0ocHJvamVjdCk7XG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGFwcGVuZFByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAodG9kbykgPT4ge1xuICAgIGhhbmRsZVRvZG9MaXN0TW9kdWxlLmRlbGV0ZVRvZG9XaXRoSUQodG9kby5pZCk7XG4gICAgaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuZGVsZXRlVG9kb0Zyb21Qcm9qZWN0KHRvZG8ucHJvamVjdCwgdG9kbyk7XG5cbiAgICBsb2FkVG9kb0xpc3QodG9kby5wcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBoYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5kZWxldGVQcm9qZWN0KHByb2plY3QpO1xuICAgIGxvYWRQcm9qZWN0TGlzdCgpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclByb2plY3RJdGVtID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByb2plY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2lyY2xlQ29sb3JQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgd3JhcHBlclByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgIHByb2plY3RJbmZvLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaW5mbycpO1xuICAgIGNpcmNsZUNvbG9yUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdjaXJjbGUtY29sb3InKTtcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJyk7XG4gICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdC1idG4nKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIGRlbGV0ZVByb2plY3RCdG4uaW5uZXJIVE1MID0gYFxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmkteC1sZyBkZWxldGUtcHJvamVjdFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTMuODU0IDIuMTQ2YS41LjUgMCAwIDEgMCAuNzA4bC0xMSAxMWEuNS41IDAgMCAxLS43MDgtLjcwOGwxMS0xMWEuNS41IDAgMCAxIC43MDggMFpcIi8+XG4gICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIuMTQ2IDIuMTQ2YS41LjUgMCAwIDAgMCAuNzA4bDExIDExYS41LjUgMCAwIDAgLjcwOC0uNzA4bC0xMS0xMWEuNS41IDAgMCAwLS43MDggMFpcIi8+XG4gICAgICA8L3N2Zz5cbiAgICBgO1xuICAgIGNpcmNsZUNvbG9yUHJvamVjdC5pbm5lckhUTUwgPSBgXG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiBmaWxsPVwiI2ZmOTkzM1wiIGNsYXNzPVwiYmkgYmktY2lyY2xlLWZpbGxcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgIDxjaXJjbGUgY3g9XCI4XCIgY3k9XCI4XCIgcj1cIjhcIi8+XG4gICAgICA8L3N2Zz5cbiAgICBgO1xuICAgIGRlbGV0ZVByb2plY3RCdG4ub25jbGljayA9ICgpID0+IGRlbGV0ZVByb2plY3QocHJvamVjdCk7XG4gICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQoY2lyY2xlQ29sb3JQcm9qZWN0KTtcbiAgICBwcm9qZWN0SW5mby5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgIHdyYXBwZXJQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RJbmZvKTtcbiAgICB3cmFwcGVyUHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcblxuICAgIHJldHVybiB3cmFwcGVyUHJvamVjdDtcbiAgfTtcblxuICBjb25zdCByZW5kZXJUb2RvSXRlbSA9ICh0b2RvKSA9PiB7XG4gICAgLy8gVE9ETyA6IHJlY3VwZXJlciBtZXMgZGV1eCBmb25jdGlvbnMgQVBQRU5DSElMRCBldCBGQUNUT1JZRUxFTUVOVFxuICAgIGNvbnN0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbGVmdFNpZGVPZlRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcmlnaHRTaWRlT2ZUb2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRvbmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZGlzbGF5VG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGRpc3BsYXlQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbScpO1xuICAgIGxlZnRTaWRlT2ZUb2RvSXRlbS5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XG4gICAgcmlnaHRTaWRlT2ZUb2RvSXRlbS5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xuXG4gICAgZGlzbGF5VG9kb1RpdGxlLnRleHRDb250ZW50ID0gYCR7dG9kby50aXRsZX1gO1xuICAgIGRvbmVCdG4udGV4dENvbnRlbnQgPSAnZG9uZSc7XG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdlZGl0JztcbiAgICBkaXNwbGF5UHJpb3JpdHkudGV4dENvbnRlbnQgPSAncHJpb3JpdHknO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdkZWxldGUnO1xuICAgIGRlbGV0ZUJ0bi5vbmNsaWNrID0gKCkgPT4gZGVsZXRlVG9kbyh0b2RvKTtcblxuICAgIGxlZnRTaWRlT2ZUb2RvSXRlbS5hcHBlbmRDaGlsZChkb25lQnRuKTtcbiAgICBsZWZ0U2lkZU9mVG9kb0l0ZW0uYXBwZW5kQ2hpbGQoZGlzbGF5VG9kb1RpdGxlKTtcblxuICAgIHJpZ2h0U2lkZU9mVG9kb0l0ZW0uYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgcmlnaHRTaWRlT2ZUb2RvSXRlbS5hcHBlbmRDaGlsZChkaXNwbGF5UHJpb3JpdHkpO1xuICAgIHJpZ2h0U2lkZU9mVG9kb0l0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKGxlZnRTaWRlT2ZUb2RvSXRlbSk7XG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQocmlnaHRTaWRlT2ZUb2RvSXRlbSk7XG5cbiAgICByZXR1cm4gdG9kb0l0ZW07XG4gIH07XG5cbiAgY29uc3QgZ2V0VG9kb0luZm8gPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kbyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYWRkLXRvZG8tZm9ybSBpbnB1dCcpXG4gICAgKS5yZWR1Y2UoKGFjYywgaW5wdXQpID0+ICh7IC4uLmFjYywgW2lucHV0LmlkXTogaW5wdXQudmFsdWUgfSksIHt9KTtcblxuICAgIHJldHVybiBuZXdUb2RvO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RUb0FkZEluZm8gPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcjYWRkLXByb2plY3QtZm9ybSBpbnB1dCdcbiAgICApLnZhbHVlO1xuXG4gICAgcmV0dXJuIHByb2plY3RUaXRsZS50b0xvd2VyQ2FzZSgpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRvZG9VSSA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRUb2RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdG9kby1mb3JtJyk7XG5cbiAgICBhZGRUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbmV3VG9kbyA9IHRvZG9GYWN0b3J5MihnZXRUb2RvSW5mbygpKTtcbiAgICAgIGNvbnNvbGUubG9nKG5ld1RvZG8ucHJvamVjdCk7XG4gICAgICBoYW5kbGVUb2RvTGlzdE1vZHVsZS5hZGRUb2RvKG5ld1RvZG8pO1xuICAgICAgaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkVG9kb1RvUHJvamVjdChuZXdUb2RvLnByb2plY3QsIG5ld1RvZG8pO1xuICAgICAgbG9hZFRvZG9MaXN0KG5ld1RvZG8ucHJvamVjdCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgQWRkRXZlbnRMaXN0ZW5lclRvRmV0Y2hUb2RvSW5Qcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtbmFtZScpO1xuICAgIHByb2plY3ROYW1lLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbG9hZFRvZG9MaXN0KHByb2plY3QudGV4dENvbnRlbnQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYWRkUHJvamVjdFVJID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LWZvcm0nKTtcblxuICAgIGFkZFByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGUgPSBnZXRQcm9qZWN0VG9BZGRJbmZvKCk7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkobmV3UHJvamVjdFRpdGxlKTtcbiAgICAgIGNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xuICAgICAgaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgIC8vIGhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmdldEFsbFByb2plY3QoKTtcbiAgICAgIGxvYWRQcm9qZWN0TGlzdCgpO1xuICAgICAgQWRkRXZlbnRMaXN0ZW5lclRvRmV0Y2hUb2RvSW5Qcm9qZWN0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGlkZUFzaWRlU2lkZSA9ICgpID0+IHtcbiAgICBjb25zdCBoaWRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGUtYXNpZGUnKTtcbiAgICBjb25zdCBhc2lkZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXNpZGUtaW5mb3JtYXRpb25zJyk7XG4gICAgY29uc3QgbWFpbkluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1pbmZvcm1hdGlvbnMnKTtcbiAgICBoaWRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYXNpZGVJbmZvLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctYXNpZGUnKTtcbiAgICAgIGFzaWRlSW5mby5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlLWFzaWRlJyk7XG4gICAgICBtYWluSW5mby5jbGFzc0xpc3QudG9nZ2xlKCdmdWxsLW1haW4nKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVDbGFzc09uU21hbGxlclNjcmVlbiA9ICgpID0+IHtcbiAgICBjb25zdCBhc2lkZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXNpZGUtaW5mb3JtYXRpb25zJyk7XG4gICAgY29uc3QgbWFpbkluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1pbmZvcm1hdGlvbnMnKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICBjb25zdCB3aWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgICBpZiAod2lkdGggPCA4MTUpIHtcbiAgICAgICAgaWYgKGFzaWRlSW5mby5jbGFzc0xpc3QudmFsdWUgPT09ICdzaG93LWFzaWRlJykge1xuICAgICAgICAgIGFzaWRlSW5mby5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LWFzaWRlJyk7XG4gICAgICAgICAgYXNpZGVJbmZvLmNsYXNzTGlzdC5hZGQoJ2hpZGUtYXNpZGUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAod2lkdGggPiA4MTUpIHtcbiAgICAgICAgaWYgKGFzaWRlSW5mby5jbGFzc0xpc3QudmFsdWUgPT09ICdoaWRlLWFzaWRlJykge1xuICAgICAgICAgIGFzaWRlSW5mby5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLWFzaWRlJyk7XG4gICAgICAgICAgYXNpZGVJbmZvLmNsYXNzTGlzdC5hZGQoJ3Nob3ctYXNpZGUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWFpbkluZm8uY2xhc3NMaXN0LnZhbHVlID09PSAnZnVsbC1tYWluJykge1xuICAgICAgICAgIG1haW5JbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2Z1bGwtbWFpbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBsb2FkVG9kb0xpc3QsXG4gICAgbG9hZFByb2plY3RMaXN0LFxuICAgIGFkZFRvZG9VSSxcbiAgICBhZGRQcm9qZWN0VUksXG4gICAgQWRkRXZlbnRMaXN0ZW5lclRvRmV0Y2hUb2RvSW5Qcm9qZWN0LFxuICAgIGhpZGVBc2lkZVNpZGUsXG4gICAgdG9nZ2xlQ2xhc3NPblNtYWxsZXJTY3JlZW4sXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBVSTtcbiIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgaGFuZGxlVG9kb0xpc3RNb2R1bGUgfSBmcm9tICcuL2hhbmRsZVRvZG8nO1xuXG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9ICh0aXRsZSkgPT4ge1xuICBjb25zdCB0b2RvcyA9IFtdO1xuXG4gIHJldHVybiB7XG4gICAgaWQ6IHV1aWR2NCgpLFxuICAgIHRpdGxlOiB0aXRsZS50b0xvd2VyQ2FzZSgpLFxuICAgIHRvZG9zLFxuICB9O1xufTtcblxuY29uc3QgaGFuZGxlUHJvamVjdExpc3RNb2R1bGUgPSAoKCkgPT4ge1xuICBjb25zdCBhbGxUb2RvcyA9IGhhbmRsZVRvZG9MaXN0TW9kdWxlLmdldFRvZG9MaXN0KCk7XG4gIGxldCBsaXN0UHJvamVjdCA9IFtdO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGxpc3RQcm9qZWN0LnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdEJ5TmFtZSA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0cyA9IGxpc3RQcm9qZWN0LmZpbmQoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IG5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgY29uc3QgZ2V0VG9kb3NCeVByb2plY3ROYW1lID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCByZXN1bHRzID0gbGlzdFByb2plY3QuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICByZXR1cm4gcmVzdWx0cy50b2RvcztcbiAgfTtcblxuICBjb25zdCBhZGRUb2RvVG9Qcm9qZWN0ID0gKG5hbWUsIHRvZG8pID0+IHtcbiAgICBjb25zdCBwcm9qZWN0VG9BZGQgPSBnZXRQcm9qZWN0QnlOYW1lKG5hbWUpO1xuXG4gICAgaWYgKHByb2plY3RUb0FkZC50b2Rvcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSB0b2RvLmlkKSkgcmV0dXJuO1xuICAgIGlmICh0b2RvLnByb2plY3QgIT09IG5hbWUpIHJldHVybjtcbiAgICBwcm9qZWN0VG9BZGQudG9kb3MucHVzaCh0b2RvKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUb2RvRnJvbVByb2plY3QgPSAocHJvamVjdCwgdG9kbykgPT4ge1xuICAgIGNvbnN0IHByb2plY3RUb0RlbGV0ZSA9IGdldFByb2plY3RCeU5hbWUocHJvamVjdCk7XG5cbiAgICBwcm9qZWN0VG9EZWxldGUudG9kb3MgPSBwcm9qZWN0VG9EZWxldGUudG9kb3MuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSB0b2RvLmlkKTtcbiAgfTtcblxuICBjb25zdCBzaG93QWxsVG9kb3MgPSAoKSA9PiB7XG4gICAgY29uc29sZS50YWJsZShhbGxUb2Rvcyk7XG4gIH07XG5cbiAgY29uc3QgZ2V0QWxsUHJvamVjdCA9ICgpID0+IGxpc3RQcm9qZWN0O1xuXG4gIGNvbnN0IGdldEFsbFByb2plY3RFeGNlcHRJbmJveCA9ICgpID0+IHtcbiAgICBjb25zdCBhbGxQcm9qZWN0RXhjZXB0SW5ib3ggPSBsaXN0UHJvamVjdC5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgIT09ICdpbmJveCcpO1xuICAgIHJldHVybiBhbGxQcm9qZWN0RXhjZXB0SW5ib3g7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgbGlzdFByb2plY3QgPSBsaXN0UHJvamVjdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHByb2plY3QuaWQpO1xuXG4gICAgaGFuZGxlVG9kb0xpc3RNb2R1bGUuZGVsZXRlQWxsVG9kb0Zyb21EZWxldGVkUHJvamVjdChwcm9qZWN0LnRpdGxlKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZFByb2plY3QsXG4gICAgZ2V0QWxsUHJvamVjdCxcbiAgICBnZXRBbGxQcm9qZWN0RXhjZXB0SW5ib3gsXG4gICAgZ2V0UHJvamVjdEJ5TmFtZSxcbiAgICBnZXRUb2Rvc0J5UHJvamVjdE5hbWUsXG4gICAgc2hvd0FsbFRvZG9zLFxuICAgIGFkZFRvZG9Ub1Byb2plY3QsXG4gICAgZGVsZXRlVG9kb0Zyb21Qcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBwcm9qZWN0RmFjdG9yeSwgaGFuZGxlUHJvamVjdExpc3RNb2R1bGUgfTtcbiIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5jb25zdCB0b2RvRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3QgPSAnaW5ib3gnKSA9PiAoe1xuICBpZDogdXVpZHY0KCksXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgcHJvamVjdDogcHJvamVjdC50b0xvd2VyQ2FzZSgpLFxufSk7XG5cbmNvbnN0IHRvZG9GYWN0b3J5MiA9ICh0b2RvKSA9PiAoe1xuICBpZDogdXVpZHY0KCksXG4gIHRpdGxlOiB0b2RvLnRpdGxlLFxuICBkZXNjcmlwdGlvbjogdG9kby5kZXNjcmlwdGlvbixcbiAgcHJvamVjdDogdG9kby5wcm9qZWN0LnRvTG93ZXJDYXNlKCkgfHwgJ2luYm94Jyxcbn0pO1xuXG5jb25zdCBoYW5kbGVUb2RvTGlzdE1vZHVsZSA9ICgoKSA9PiB7XG4gIGxldCBsaXN0VG9kbyA9IFtdO1xuXG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xuICAgIGxpc3RUb2RvLnB1c2godG9kbyk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgLy8gZnVuY3Rpb24gaW51dGlsZSwgbWFpcyBqZSBsYSBnYXJkZSBwb3VyIGxlIG1vbWVudC5cbiAgICAvLyBqJ3V0aWxpc2UgbCdpZCB2aWEgbGUgZG9tIHBvdXIgZGVsZXRlXG4gICAgbGlzdFRvZG8gPSBsaXN0VG9kby5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHRvZG8uaWQpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG9XaXRoSUQgPSAoaWQpID0+IHtcbiAgICBsaXN0VG9kbyA9IGxpc3RUb2RvLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gaWQpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUFsbFRvZG9Gcm9tRGVsZXRlZFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBsaXN0VG9kbyA9IGxpc3RUb2RvLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5wcm9qZWN0ICE9PSBwcm9qZWN0TmFtZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VG9kb0xpc3QgPSAoKSA9PiB7XG4gICAgY29uc29sZS50YWJsZShsaXN0VG9kbyk7XG4gICAgcmV0dXJuIGxpc3RUb2RvO1xuICB9O1xuXG4gIGNvbnN0IGdldFRvZG9JZCA9ICh0b2RvKSA9PiB7XG4gICAgY29uc29sZS5sb2codG9kby5pZCk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVG9kbyA9ICh0b2RvLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3QpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkVG9kbyA9IHtcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBwcm9qZWN0OiBwcm9qZWN0LnRvTG93ZXJDYXNlKCksXG4gICAgfTtcblxuICAgIE9iamVjdC5hc3NpZ24odG9kbywgdXBkYXRlZFRvZG8pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkVG9kbyxcbiAgICBkZWxldGVUb2RvLFxuICAgIGdldFRvZG9MaXN0LFxuICAgIGdldFRvZG9JZCxcbiAgICB1cGRhdGVUb2RvLFxuICAgIGRlbGV0ZUFsbFRvZG9Gcm9tRGVsZXRlZFByb2plY3QsXG4gICAgZGVsZXRlVG9kb1dpdGhJRCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHRvZG9GYWN0b3J5LCB0b2RvRmFjdG9yeTIsIGhhbmRsZVRvZG9MaXN0TW9kdWxlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgeyB0b2RvRmFjdG9yeSwgaGFuZGxlVG9kb0xpc3RNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvaGFuZGxlVG9kbyc7XG5pbXBvcnQge1xuICBwcm9qZWN0RmFjdG9yeSxcbiAgaGFuZGxlUHJvamVjdExpc3RNb2R1bGUsXG59IGZyb20gJy4vbW9kdWxlcy9oYW5kbGVQcm9qZWN0JztcbmltcG9ydCBVSSBmcm9tICcuL21vZHVsZXMvVUknO1xuXG5jb25zdCBuZXdUb2RvID0gdG9kb0ZhY3RvcnkoJ3N0YXJ0IHJlYWN0JywgJ2J1eSBtaWxrIGZvciBsdW5lJywgJ0phdmFTY3JpcHQnKTtcbmNvbnN0IHRvZG8yID0gdG9kb0ZhY3RvcnkoJ2NhbGwgbW9tJywgJ2NhbGwgbW9tIGZvciBiaXJ0aGRheScsICdQZXJzbycpO1xuY29uc3QgdG9kbzMgPSB0b2RvRmFjdG9yeShcbiAgJ3JlYWQgWW91IGRvbnQga25vdyBKUycsXG4gICdidXkgdGhlIGJvb2sgZmlyc3QnLFxuICAnSmF2YVNjcmlwdCdcbik7XG5jb25zdCB0b2RvNCA9IHRvZG9GYWN0b3J5KCd3YXRjaCBiYXJjZWxvbmEnLCAnbGVhZ3VlIGRlcyBjaGFtcGlvc24nKTtcbmNvbnN0IGRlbGV0ZVRvZG8gPSB0b2RvRmFjdG9yeSgnZm9vJywgJ2JhcicsICdKQVZBU0NSSVBUJyk7XG5jb25zdCB0b2RvNSA9IHRvZG9GYWN0b3J5KCdhbm90aGVyIHRvZG8nLCAnaXRzIGNvb2wnKTtcbi8vIGNvbnNvbGUubG9nKG5ld1RvZG8pO1xuXG4vLyBoYW5kbGVUb2RvTGlzdC5nZXRUb2RvTGlzdCgpO1xuaGFuZGxlVG9kb0xpc3RNb2R1bGUuYWRkVG9kbyhuZXdUb2RvKTtcbmhhbmRsZVRvZG9MaXN0TW9kdWxlLmFkZFRvZG8odG9kbzIpO1xuaGFuZGxlVG9kb0xpc3RNb2R1bGUuYWRkVG9kbyh0b2RvMyk7XG5oYW5kbGVUb2RvTGlzdE1vZHVsZS5hZGRUb2RvKHRvZG80KTtcbmhhbmRsZVRvZG9MaXN0TW9kdWxlLmFkZFRvZG8oZGVsZXRlVG9kbyk7XG5oYW5kbGVUb2RvTGlzdE1vZHVsZS5hZGRUb2RvKHRvZG81KTtcbi8vIGhhbmRsZVRvZG9MaXN0LmdldFRvZG9MaXN0KCk7XG5cbi8vIGhhbmRsZVRvZG9MaXN0LmdldFRvZG9JZCh0b2RvMik7XG5oYW5kbGVUb2RvTGlzdE1vZHVsZS51cGRhdGVUb2RvKFxuICB0b2RvNCxcbiAgJ3dhdGNoIEJhcmNlbG9uYScsXG4gICdDaGFtcGlvbnMgTGVhZ3VlJyxcbiAgJ0Zvb3RiYWxsJ1xuKTtcbi8vIGhhbmRsZVRvZG9MaXN0LmRlbGV0ZVRvZG8odG9kbzMpO1xuXG5jb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoJ0phdmFTY3JpcHQnKTtcbmNvbnN0IHBlcnNvUHJvamVjdCA9IHByb2plY3RGYWN0b3J5KCdQZXJzbycpO1xuY29uc3QgZm9vdGJhbGwgPSBwcm9qZWN0RmFjdG9yeSgnZm9vVGJhbGwnKTtcbmNvbnN0IGluYm94ID0gcHJvamVjdEZhY3RvcnkoJ2luYm94Jyk7XG5cbi8vIGNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFByb2plY3QocGVyc29Qcm9qZWN0KTtcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFByb2plY3QoZm9vdGJhbGwpO1xuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkUHJvamVjdChpbmJveCk7XG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5zaG93QWxsVG9kb3MoKTtcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFRvZG9Ub1Byb2plY3QobmV3UHJvamVjdC50aXRsZSwgdG9kbzMpO1xuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkVG9kb1RvUHJvamVjdChmb290YmFsbC50aXRsZSwgdG9kbzQpO1xuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkVG9kb1RvUHJvamVjdChwZXJzb1Byb2plY3QudGl0bGUsIHRvZG8yKTtcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFRvZG9Ub1Byb2plY3QobmV3UHJvamVjdC50aXRsZSwgdG9kbzMpO1xuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkVG9kb1RvUHJvamVjdChuZXdQcm9qZWN0LnRpdGxlLCBkZWxldGVUb2RvKTtcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFRvZG9Ub1Byb2plY3QobmV3UHJvamVjdC50aXRsZSwgdG9kbzMpO1xuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkVG9kb1RvUHJvamVjdChuZXdQcm9qZWN0LnRpdGxlLCB0b2RvMyk7XG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5hZGRUb2RvVG9Qcm9qZWN0KG5ld1Byb2plY3QudGl0bGUsIG5ld1RvZG8pO1xuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkVG9kb1RvUHJvamVjdChuZXdQcm9qZWN0LnRpdGxlLCB0b2RvMyk7XG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5hZGRUb2RvVG9Qcm9qZWN0KGluYm94LnRpdGxlLCB0b2RvNSk7XG5cbi8vIGhhbmRsZVByb2plY3RMaXN0LmdldFByb2plY3RCeU5hbWUoJ0phdmFTY3JpcHQnKTtcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLnNob3dBbGxUb2RvcygpO1xuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuZ2V0UHJvamVjdEJ5TmFtZSgnamF2QXNjUmlwdCcpO1xuXG5oYW5kbGVUb2RvTGlzdE1vZHVsZS5kZWxldGVUb2RvKGRlbGV0ZVRvZG8pO1xuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuZGVsZXRlVG9kb0Zyb21Qcm9qZWN0KGRlbGV0ZVRvZG8ucHJvamVjdCwgZGVsZXRlVG9kbyk7XG5oYW5kbGVUb2RvTGlzdE1vZHVsZS5nZXRUb2RvTGlzdCgpO1xuXG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5nZXRBbGxQcm9qZWN0KCk7XG5cbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmRlbGV0ZVByb2plY3QocGVyc29Qcm9qZWN0KTtcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmdldEFsbFByb2plY3QoKTtcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLnNob3dBbGxUb2RvcygpO1xuXG4vLyBVSS5sb2FkVG9kb0xpc3QoKTtcbi8vIFVJLmRlbGV0ZVRvZG9VSSgpO1xuXG5VSS5sb2FkVG9kb0xpc3QoKTtcblVJLmxvYWRQcm9qZWN0TGlzdCgpO1xuVUkuYWRkUHJvamVjdFVJKCk7XG5VSS5hZGRUb2RvVUkoKTtcblVJLkFkZEV2ZW50TGlzdGVuZXJUb0ZldGNoVG9kb0luUHJvamVjdCgpO1xuVUkuaGlkZUFzaWRlU2lkZSgpO1xuVUkudG9nZ2xlQ2xhc3NPblNtYWxsZXJTY3JlZW4oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==