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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n}\n\n.full-main {\n  left: 0px !important;\n}\n\n.show-aside {\n  transform: translateX(0);\n}\n\n.hide-aside {\n  transform: translateX(-400px);\n}\n\n.collapse {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease-out;\n}\n\n.not-collapse {\n  max-height: 300px;\n}\n\n.hidden {\n  display: none;\n}\n\nhtml {\n  font-size: 10px;\n  overflow-y: hidden;\n}\nhtml body #content {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.6rem;\n  height: 100%;\n}\nhtml body #content header {\n  display: flex;\n  background-color: #db4c3f;\n  padding: 1rem 1.8rem;\n}\nhtml body #content header button {\n  border: none;\n  padding: 0.2rem;\n  border-radius: 2px;\n  background-color: transparent;\n  display: flex;\n  margin-left: 1.5rem;\n}\nhtml body #content header button:hover {\n  cursor: pointer;\n  background-color: rgba(255, 255, 255, 0.3);\n}\nhtml body #content #app {\n  display: flex;\n  position: relative;\n  overflow-y: hidden;\n  height: 100vh;\n}\nhtml body #content #app #aside-informations {\n  position: absolute;\n  background-color: #f7f7f7;\n  z-index: 10;\n  width: 300px;\n  height: 100%;\n  transition: transform 0.6s ease;\n}\nhtml body #content #app #aside-informations .todo-informations {\n  padding: 1.2rem 0.6rem 1.2rem 1.2rem;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list {\n  padding: 2rem 0 2rem 2rem;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list li {\n  display: flex;\n  align-items: center;\n  font-size: 1.4rem;\n  font-weight: 400;\n  list-style-type: none;\n  padding: 1rem 0.8rem;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list li .main-list-icon {\n  margin-right: 1rem;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-main-list {\n  border-radius: 5px;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-main-list:hover {\n  cursor: pointer;\n  background-color: #ececec;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-main-list span {\n  color: #202020;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 2rem 0 0 0;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title {\n  display: flex;\n  width: 100%;\n  padding: 1rem 0 1rem 0.8rem;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title .dropdown-projects-list {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  border: none;\n  background-color: transparent;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title .dropdown-projects-list:hover {\n  cursor: pointer;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title .dropdown-projects-list .bi-chevron-right {\n  transform: rotate(0);\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title .dropdown-projects-list span {\n  color: #333333;\n  font-weight: bold;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title .add-project {\n  width: 10%;\n  display: flex;\n  justify-content: center;\n  border: none;\n  background-color: transparent;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title .add-project:hover {\n  cursor: pointer;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list {\n  width: 100%;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project {\n  display: flex;\n  align-items: center;\n  border-radius: 5px;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project:hover {\n  cursor: pointer;\n  background-color: #ececec;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project:hover .delete-project-btn {\n  opacity: 1;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project .project-info {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem 0.9rem;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project .project-info .circle-color {\n  width: 13%;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project .project-info .project-name {\n  width: 100%;\n  font-weight: lighter;\n  letter-spacing: 0.5px;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project .delete-project-btn {\n  width: 10%;\n  opacity: 0;\n  border: none;\n  background-color: transparent;\n  display: flex;\n  justify-content: center;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project .delete-project-btn:hover {\n  cursor: pointer;\n}\nhtml body #content #app #main-informations {\n  position: absolute;\n  justify-self: center;\n  left: 300px;\n  width: calc(100% - 300px);\n  transition: left 0.6s ease;\n}\nhtml body #content #app #main-informations .display-todo-list {\n  padding: 6rem;\n}\nhtml body #content #app #main-informations .display-todo-list .todo-list {\n  padding: 2rem;\n}\nhtml body #content #app #main-informations .display-todo-list .todo-list .todo-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 0;\n  border-bottom: 1px solid #f0f0f0;\n  color: #808080;\n}\nhtml body #content #app #main-informations .display-todo-list .todo-list .todo-item .left {\n  display: flex;\n}\nhtml body #content #app #main-informations .display-todo-list .todo-list .todo-item .left button {\n  padding: 0 5px;\n  border: none;\n  background-color: transparent;\n}\nhtml body #content #app #main-informations .display-todo-list .todo-list .todo-item .left div {\n  color: #202020;\n  padding-left: 10px;\n  font-size: 1.4rem;\n  line-height: 21px;\n}\nhtml body #content #app #main-informations .display-todo-list .todo-list .todo-item .right {\n  display: flex;\n}\nhtml body #content #app #main-informations .display-todo-list .todo-list .todo-item .right .priority-wrapper {\n  position: relative;\n}\nhtml body #content #app #main-informations .display-todo-list .todo-list .todo-item .right .priority-wrapper .pop-up-priority {\n  border: 1px solid green;\n  padding: 10px;\n  width: 100px;\n  position: absolute;\n  background-color: paleturquoise;\n  right: 38px;\n}\nhtml body #content #app #main-informations .display-todo-list .todo-list .todo-item .right button {\n  padding: 5px;\n  background-color: transparent;\n  margin: 0 3px;\n  border: none;\n  border-radius: 5px;\n}\nhtml body #content #app #main-informations .display-todo-list .todo-list .todo-item .right button:hover {\n  background-color: #ececec;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/styles/base.scss","webpack://./src/style.scss","webpack://./src/styles/animation.scss","webpack://./src/styles/variables.scss"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n","@import './styles/base.scss';\r\n@import './styles/variables.scss';\r\n@import './styles/animation.scss';\r\n\r\nhtml {\r\n  font-size: $base-font-size;\r\n  overflow-y: hidden;\r\n\r\n  body {\r\n    #content {\r\n      display: flex;\r\n      flex-direction: column;\r\n      font-size: 1.6rem;\r\n      height: 100%;\r\n\r\n      header {\r\n        display: flex;\r\n        background-color: $header-color;\r\n        padding: 1rem 1.8rem;\r\n\r\n        button {\r\n          border: none;\r\n          padding: 0.2rem;\r\n          border-radius: 2px;\r\n          background-color: transparent;\r\n          display: flex;\r\n          margin-left: 1.5rem;\r\n\r\n          &:hover {\r\n            cursor: pointer;\r\n            background-color: $header-button-hover;\r\n          }\r\n        }\r\n      }\r\n\r\n      #app {\r\n        display: flex;\r\n        position: relative;\r\n        overflow-y: hidden;\r\n        height: 100vh;\r\n\r\n        #aside-informations {\r\n          position: absolute;\r\n          background-color: $aside-color;\r\n          z-index: 10;\r\n          width: 300px;\r\n          height: 100%;\r\n          transition: transform 0.6s ease;\r\n\r\n          .todo-informations {\r\n            padding: 1.2rem 0.6rem 1.2rem 1.2rem;\r\n\r\n            #projects-main-list {\r\n              padding: 2rem 0 2rem 2rem;\r\n\r\n              li {\r\n                display: flex;\r\n                align-items: center;\r\n                font-size: 1.4rem;\r\n                font-weight: 400;\r\n                list-style-type: none;\r\n                padding: 1rem 0.8rem;\r\n\r\n                .main-list-icon {\r\n                  margin-right: 1rem;\r\n                }\r\n              }\r\n\r\n              .display-main-list {\r\n                border-radius: 5px;\r\n\r\n                &:hover {\r\n                  cursor: pointer;\r\n                  background-color: $aside-color-hover;\r\n                }\r\n\r\n                span {\r\n                  color: $main-list-color;\r\n                }\r\n              }\r\n\r\n              .display-projects {\r\n                display: flex;\r\n                flex-direction: column;\r\n                justify-content: center;\r\n                align-items: flex-start;\r\n                padding: 2rem 0 0 0;\r\n\r\n                .display-projects-title {\r\n                  display: flex;\r\n                  width: 100%;\r\n                  padding: 1rem 0 1rem 0.8rem;\r\n\r\n                  .dropdown-projects-list {\r\n                    display: flex;\r\n                    align-items: center;\r\n                    width: 100%;\r\n                    border: none;\r\n                    background-color: transparent;\r\n\r\n                    &:hover {\r\n                      cursor: pointer;\r\n                    }\r\n\r\n                    .bi-chevron-right {\r\n                      transform: rotate(0);\r\n                    }\r\n\r\n                    span {\r\n                      color: #333333;\r\n                      font-weight: bold;\r\n                    }\r\n                  }\r\n\r\n                  .add-project {\r\n                    width: 10%;\r\n                    display: flex;\r\n                    justify-content: center;\r\n                    border: none;\r\n                    background-color: transparent;\r\n\r\n                    &:hover {\r\n                      cursor: pointer;\r\n                    }\r\n                  }\r\n                }\r\n              }\r\n\r\n              #display-projects-list {\r\n                width: 100%;\r\n\r\n                .project {\r\n                  display: flex;\r\n                  align-items: center;\r\n                  border-radius: 5px;\r\n\r\n                  &:hover {\r\n                    cursor: pointer;\r\n                    background-color: $aside-color-hover;\r\n\r\n                    .delete-project-btn {\r\n                      opacity: 1;\r\n                    }\r\n                  }\r\n                  .project-info {\r\n                    display: flex;\r\n                    width: 100%;\r\n                    justify-content: center;\r\n                    align-items: center;\r\n                    padding: 1rem 0.9rem;\r\n\r\n                    .circle-color {\r\n                      width: 13%;\r\n                    }\r\n\r\n                    .project-name {\r\n                      width: 100%;\r\n                      font-weight: lighter;\r\n                      letter-spacing: 0.5px;\r\n                    }\r\n                  }\r\n\r\n                  .delete-project-btn {\r\n                    width: 10%;\r\n                    opacity: 0;\r\n                    border: none;\r\n                    background-color: transparent;\r\n                    display: flex;\r\n                    justify-content: center;\r\n\r\n                    &:hover {\r\n                      cursor: pointer;\r\n                    }\r\n                  }\r\n                }\r\n              }\r\n            }\r\n          }\r\n        }\r\n\r\n        #main-informations {\r\n          position: absolute;\r\n          justify-self: center;\r\n          left: 300px;\r\n          width: calc(100% - 300px);\r\n          transition: left 0.6s ease;\r\n\r\n          .display-todo-list {\r\n            padding: 6rem;\r\n\r\n            .todo-list {\r\n              padding: 2rem;\r\n\r\n              .todo-item {\r\n                display: flex;\r\n                justify-content: space-between;\r\n                align-items: center;\r\n                padding: 1rem 0;\r\n                border-bottom: 1px solid #f0f0f0;\r\n                color: #808080;\r\n                // background-color: paleturquoise;\r\n\r\n                // button {\r\n                //   display: flex;\r\n                //   flex-direction: row;\r\n                // }\r\n\r\n                .left {\r\n                  display: flex;\r\n                  button {\r\n                    padding: 0 5px;\r\n                    // display: flex;\r\n                    border: none;\r\n                    background-color: transparent;\r\n                  }\r\n                  div {\r\n                    color: $main-list-color;\r\n                    padding-left: 10px;\r\n                    font-size: 1.4rem;\r\n                    line-height: 21px;\r\n                  }\r\n                }\r\n                .right {\r\n                  display: flex;\r\n\r\n                  .priority-wrapper {\r\n                    // outline: 1px solid red;\r\n                    position: relative;\r\n\r\n                    .pop-up-priority {\r\n                      // display: none;\r\n                      border: 1px solid green;\r\n                      padding: 10px;\r\n                      width: 100px;\r\n                      position: absolute;\r\n                      background-color: paleturquoise;\r\n                      right: 38px;\r\n                    }\r\n                  }\r\n                  button {\r\n                    padding: 5px;\r\n                    background-color: transparent;\r\n                    margin: 0 3px;\r\n                    border: none;\r\n                    border-radius: 5px;\r\n\r\n                    &:hover {\r\n                      background-color: $aside-color-hover;\r\n                      cursor: pointer;\r\n                    }\r\n                  }\r\n                }\r\n              }\r\n            }\r\n          }\r\n        }\r\n        #edit-todo-wrapper{\r\n          // display: none;\r\n          // display: ;\r\n\r\n\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n",".full-main {\r\n  left: 0px !important;\r\n}\r\n\r\n.show-aside {\r\n  transform: translateX(0);\r\n}\r\n\r\n.hide-aside {\r\n  transform: translateX(-400px);\r\n}\r\n\r\n.collapse {\r\n  max-height: 0;\r\n  overflow: hidden;\r\n  transition: max-height 0.3s ease-out;\r\n}\r\n\r\n.not-collapse {\r\n  max-height: 300px;\r\n}\r\n\r\n\r\n.hidden {\r\n  display: none;\r\n}","$body-color: blue;\r\n$header-color: #db4c3f;\r\n$header-button-hover: rgba(255, 255, 255, 0.3);\r\n$aside-color: #f7f7f7;\r\n$aside-color-hover: #ececec;\r\n$main-list-color: #202020;\r\n\r\n$base-font-size: 10px;\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@media only screen and (max-width: 815px) {\r\n  main {\r\n    width: 100%;\r\n    position: absolute;\r\n    margin-left: 0px;\r\n    left: 0px !important;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 815px) {\r\n  .full-main {\r\n    left: 140px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE;IACE,WAAW;IACX,kBAAkB;IAClB,gBAAgB;IAChB,oBAAoB;EACtB;AACF;;AAEA;EACE;IACE,WAAW;EACb;AACF","sourcesContent":["@media only screen and (max-width: 815px) {\r\n  main {\r\n    width: 100%;\r\n    position: absolute;\r\n    margin-left: 0px;\r\n    left: 0px !important;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 815px) {\r\n  .full-main {\r\n    left: 140px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/domElementFactory */ "./src/utilities/domElementFactory.js");
/* harmony import */ var _utilities_appendDomElementToParent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/appendDomElementToParent */ "./src/utilities/appendDomElementToParent.js");
/* harmony import */ var _handleTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleTodo */ "./src/modules/handleTodo.js");
/* harmony import */ var _handleProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleProject */ "./src/modules/handleProject.js");
/* harmony import */ var _utilities_priorityPopUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/priorityPopUp */ "./src/utilities/priorityPopUp.js");






const UI = (() => {
  const loadTodoList = (name = 'inbox') => {
    const todoCategory = document.getElementById('todo-category');
    const displayTodoList = document.querySelector('.todo-list');

    todoCategory.textContent = name;
    displayTodoList.textContent = '';

    const todoList = _handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.getTodoByProjectName(name);

    if (todoList.length === 0) {
      const wrapperEmptyTodoList = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'wrapper-empty-todo-list');
      const emptyTodoText = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('p', 'What tasks are on your mind ?', 'empty-todo-text');
      const addTodoBtn = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'add a task', 'add-todo-btn');
      (0,_utilities_appendDomElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(wrapperEmptyTodoList.el, emptyTodoText, addTodoBtn);
      (0,_utilities_appendDomElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(displayTodoList, wrapperEmptyTodoList);
    } else {
      todoList.forEach((todo) => {
        const todoAppended = renderTodoItem(todo);
        displayTodoList.appendChild(todoAppended);
      });
    }
  };

  const renderTodoItem = (todo) => {
    const RED_FLAG_PRIORITY = '#db4c3f';
    const BLUE_FLAG_PRIORITY = '#3f73d6';
    const ORANGE_FLAG_PRIORITY = '#ff9933';

    const todoItem = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'todo-item');
    const leftSideOfTodoItem = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'left');
    const rightSideOfTodoItem = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'right');
    const editWrapper = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'edit-wrapper');
    const priorityWrapper = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'priority-wrapper');
    const deleteWrapper = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'delete-wrapper');
    const doneWrapper = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'done-wrapper');
    const todoTitleWrapper = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'title-wrapper');
    const doneBtn = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('button');
    const editBtn = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('button', '', 'edit-todo-btn');
    const deleteBtn = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('button', '', 'delete-todo-btn');
    const priorityBtn = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('button', '', 'edit-priority-btn');
    const displayTodoTitle = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(
      'div',
      `${todo.title}`,
      'todo-title',
    );

    let colorFlagPriority = ORANGE_FLAG_PRIORITY;

    if (todo.priority === 'high') {
      colorFlagPriority = RED_FLAG_PRIORITY;
    } else if (todo.priority === 'low') {
      colorFlagPriority = BLUE_FLAG_PRIORITY;
    }

    doneBtn.el.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">
        <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>
      </svg>
    `;
    editBtn.el.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#808080" class="bi bi-pen edit-btn" viewBox="0 0 16 16">
        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
      </svg>
    `;
    priorityBtn.el.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill=${colorFlagPriority} class="bi bi-flag-fill priority-btn" viewBox="0 0 16 16">
        <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
      </svg>
    `;
    deleteBtn.el.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#808080" class="bi bi-trash delete-btn" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>
    `;

    const popUpPriority = (0,_utilities_priorityPopUp__WEBPACK_IMPORTED_MODULE_4__.createEditPriorityPopUp)(todo, () => loadTodoList(todo.project));
    priorityBtn.el.onclick = () => (0,_utilities_priorityPopUp__WEBPACK_IMPORTED_MODULE_4__.displayEditTodoPriorityPopUp)(popUpPriority.el);

    handleTodoItemEventListener(todo, editBtn.el, deleteBtn.el);

    (0,_utilities_appendDomElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(doneWrapper.el, doneBtn);
    (0,_utilities_appendDomElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(todoTitleWrapper.el, displayTodoTitle);
    (0,_utilities_appendDomElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(
      leftSideOfTodoItem.el,
      doneWrapper,
      todoTitleWrapper,
    );
    (0,_utilities_appendDomElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(editWrapper.el, editBtn);
    (0,_utilities_appendDomElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(priorityWrapper.el, priorityBtn, popUpPriority);
    (0,_utilities_appendDomElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(deleteWrapper.el, deleteBtn);
    (0,_utilities_appendDomElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(
      rightSideOfTodoItem.el,
      editWrapper,
      priorityWrapper,
      deleteWrapper,
    );

    (0,_utilities_appendDomElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(
      todoItem.el,
      leftSideOfTodoItem,
      rightSideOfTodoItem,
    );

    return todoItem.el;
  };

  const renderProjectItem = (project) => {
    const wrapperProject = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'project');
    const projectInfo = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'project-info');
    const circleColorProject = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('span', '', 'circle-color');
    const projectTitle = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(
      'span',
      `${project.title}`,
      'project-name',
    );
    const deleteProjectBtn = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(
      'button',
      '',
      'delete-project-btn',
    );
    projectInfo.el.dataset.list = `${project.title}`;

    deleteProjectBtn.el.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-x-lg delete-project" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
      </svg>
    `;

    circleColorProject.el.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#ff9933" class="bi bi-circle-fill" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="8"/>
      </svg>
    `;

    // deleteProjectBtn.el.onclick = () => deleteProject(project);
    handleProjectItemEventListener(project, deleteProjectBtn.el);

    (0,_utilities_appendDomElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(projectInfo.el, circleColorProject, projectTitle);
    (0,_utilities_appendDomElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(wrapperProject.el, projectInfo, deleteProjectBtn);

    return wrapperProject.el;
  };

  const fillPlaceHolderFormEditWithTodoData = (data) => {
    const inputEditTodo = Array.from(
      document.querySelectorAll('#edit-todo-form input'),
    );

    inputEditTodo.forEach((input) => {
      input.classList.add(`${input.id}-input`);
      input.value = '';
      input.placeholder = data[input.id];
    });
  };

  const loadProjectList = () => {
    const projectList = document.getElementById('display-projects-list');
    projectList.textContent = '';

    const projects = _handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.getAllProjectExceptDefaultProject();

    if (projects.length === 0) {
      const emptyProjectText = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('p', 'You have no project', 'empty-project-text');
      projectList.appendChild(emptyProjectText.el);
    } else {
      projects.forEach((project) => {
        const projectAppended = renderProjectItem(project);
        projectList.appendChild(projectAppended);
      });
    }
  };

  const deleteTodo = (todo) => {
    const { project, id } = todo;

    _handleTodo__WEBPACK_IMPORTED_MODULE_2__.handleTodoListModule.deleteTodo(id);
    _handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.deleteTodoInThisProject(project, id);

    loadTodoList(project);
  };

  const deleteProject = (project) => {
    const { id, title } = project;

    _handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.deleteProject(id, title);
    loadProjectList();
  };

  const handleTodoItemEventListener = (todo, ...args) => {
    args.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('edit-todo-btn')) {
          updateTodo(todo);
        } else if (btn.classList.contains('delete-todo-btn')) {
          deleteTodo(todo);
        }
      });
    });
  };

  const getUpdateTodoInfo = () => {
    const updatedTodo = Array.from(
      document.querySelectorAll('#edit-todo-form input'),
    ).reduce((acc, input) => ({
      ...acc, [input.id]: input.value || input.placeholder,
    }), {});

    return updatedTodo;
  };

  const addFormEventListenerToUpdateTodo = (editForm, wrapper) => {
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      // check if project value change
      const formProjectInputValue = document.querySelector('.project-input');
      let newProject = formProjectInputValue.value;
      const olderProject = formProjectInputValue.placeholder;

      if (!newProject) {
        newProject = olderProject;
      }

      const formId = editForm.getAttribute('data-id');

      const originalTodo = _handleTodo__WEBPACK_IMPORTED_MODULE_2__.handleTodoListModule.getTodo(formId);
      const updatedTodoInfo = getUpdateTodoInfo();

      const updatedTodo = _handleTodo__WEBPACK_IMPORTED_MODULE_2__.handleTodoListModule.updateTodo(originalTodo, updatedTodoInfo);

      const { id } = originalTodo;
      const { project } = updatedTodo;

      // this mean i have to moove todo in another folder project
      if (olderProject !== newProject) {
        _handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.deleteTodoInThisProject(olderProject, id);
        _handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addTodoToProject(project, updatedTodo);
        loadTodoList(project);
      } else {
        loadTodoList(olderProject);
      }

      wrapper.classList.toggle('hidden');
      editForm.reset();
    });
  };

  const updateTodo = (todo) => {
    const editTodoWrapper = document.getElementById('edit-todo-wrapper');
    const editTodoForm = document.getElementById('edit-todo-form');

    editTodoWrapper.classList.toggle('hidden');

    editTodoForm.dataset.id = todo.id;

    fillPlaceHolderFormEditWithTodoData(todo);
    addFormEventListenerToUpdateTodo(editTodoForm, editTodoWrapper);
  };

  const handleProjectItemEventListener = (project, ...args) => {
    args.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('delete-project-btn')) {
          deleteProject(project);
        }
      });
    });
  };

  const getTodoInfo = () => {
    const newTodo = Array.from(
      document.querySelectorAll('#add-todo-form input'),
    ).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});

    return newTodo;
  };

  const getNewProjectTitle = () => {
    const projectTitle = document.querySelector(
      '#add-project-form input',
    ).value;

    return projectTitle.toLowerCase();
  };

  const AddEventListenerToFetchTodoInProject = () => {
    const projectName = document.querySelectorAll(
      '.display-main-list, .project-info',
    );

    projectName.forEach((project) => {
      project.addEventListener('click', () => {
        const { list } = project.dataset;
        loadTodoList(list);
      });
    });
  };

  const toggleDropdowProjectsListAuto = () => {
    const chevronSVG = document.querySelector('.bi-chevron-right');
    const projectsList = document.getElementById('display-projects-list');

    const style = getComputedStyle(chevronSVG);
    if (style.transform === 'matrix(1, 0, 0, 1, 0, 0)') {
      chevronSVG.style.transform = 'rotate(90deg)';
      chevronSVG.style.transition = 'transform .1s ease';
      projectsList.classList.toggle('collapse');
      projectsList.classList.toggle('not-collapse');
    }
  };

  const addTodo = () => {
    const addTodoForm = document.getElementById('add-todo-form');

    addTodoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newTodoInfo = getTodoInfo();
      const newTodo = (0,_handleTodo__WEBPACK_IMPORTED_MODULE_2__.todoFactory2)(newTodoInfo);
      const { project } = newTodo;
      _handleTodo__WEBPACK_IMPORTED_MODULE_2__.handleTodoListModule.addTodo(newTodo);
      _handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addTodoToProject(project, newTodo);
      loadTodoList(project);
      addTodoForm.reset();
    });
  };

  const addProject = () => {
    const addProjectForm = document.getElementById('add-project-form');

    addProjectForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newProjectTitle = getNewProjectTitle();
      const newProject = (0,_handleProject__WEBPACK_IMPORTED_MODULE_3__.projectFactory)(newProjectTitle);
      const { title } = newProject;
      _handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addProject(newProject);
      loadProjectList();
      AddEventListenerToFetchTodoInProject();
      addProjectForm.reset();
      toggleDropdowProjectsListAuto();
      loadTodoList(title);
    });
  };

  return {
    loadTodoList,
    loadProjectList,
    AddEventListenerToFetchTodoInProject,
    addTodo,
    addProject,
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
  const todosListInThisProject = [];

  return {
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    title: title.toLowerCase(),
    todos: todosListInThisProject,
    defaultProject: defaultProject || false,
  };
};

const handleProjectListModule = (() => {
  let projectList = [];

  const addProject = (project) => {
    projectList.push(project);
  };

  const getProjectByName = (name) => {
    const results = projectList.find(
      (project) => project.title === name.toLowerCase(),
    );
    return results;
  };

  const addTodoToProject = (name, todo) => {
    const projectToAdd = getProjectByName(name);

    if (projectToAdd.todos.find((task) => task.id === todo.id)) return;
    if (todo.project !== name) return;
    projectToAdd.todos.push(todo);
  };

  // A supprimer une fois le dev terminé
  const getAllProject = () => {
    console.table(projectList);
    return projectList;
  };

  const getAllProjectExceptDefaultProject = () => {
    // default project = inbox, today, upcomming
    const allProjectExceptDefault = projectList.filter(
      (project) => !project.defaultProject,
    );

    return allProjectExceptDefault;
  };

  const getTodoByProjectName = (name) => {
    const results = projectList.find(
      (project) => project.title === name.toLowerCase(),
    );
    return results.todos;
  };

  const deleteTodoInThisProject = (project, todoId) => {
    const todosParentProject = getProjectByName(project);

    todosParentProject.todos = todosParentProject.todos.filter(
      (item) => item.id !== todoId,
    );
  };

  const deleteProject = (id, projectTitle) => {
    projectList = projectList.filter((item) => item.id !== id);

    _handleTodo__WEBPACK_IMPORTED_MODULE_0__.handleTodoListModule.deleteAllTodoFromDeletedProject(projectTitle);
  };

  return {
    addProject,
    getProjectByName,
    addTodoToProject,
    getAllProject,
    getAllProjectExceptDefaultProject,
    getTodoByProjectName,
    deleteTodoInThisProject,
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


// je garde cette fonction jusqu'à la fin de mon developpment, je l'utilise pour
// créer les todos à la volée dans index.js (c'est ma première version de ma function
// factory, une fois le projet terminé je la supprimerais.)
const todoFactory = (title, description, project = 'inbox', priority = 'medium') => ({
  id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  title,
  description,
  project: project.toLowerCase(),
  priority,
});

const todoFactory2 = (todo) => ({
  id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  title: todo.title,
  description: todo.description,
  project: todo.project.toLowerCase() || 'inbox',
  priority: todo.priority || 'medium',
});

const handleTodoListModule = (() => {
  let todoList = [];

  const addTodo = (todo) => {
    todoList.push(todo);
  };

  const getTodo = (id) => {
    const todo = todoList.find((item) => item.id === id);
    return todo;
  };

  const updateTodo = (originalTodo, updatedTodoInfo) => {
    const updatedTodo = Object.assign(originalTodo, updatedTodoInfo);
    return updatedTodo;
  };

  const deleteTodo = (id) => {
    todoList = todoList.filter((item) => item.id !== id);
  };

  const deleteAllTodoFromDeletedProject = (projectName) => {
    todoList = todoList.filter((item) => item.project !== projectName);
  };

  const getTodoList = () => {
    console.table(todoList);
    return todoList;
  };

  const updateTodoPriority = (todo, newPriorityValue) => {
    const todoPriorityValueUpdated = {
      priority: newPriorityValue,
    };

    Object.assign(todo, todoPriorityValueUpdated);
  };

  return {
    addTodo,
    getTodo,
    updateTodo,
    deleteTodo,
    deleteAllTodoFromDeletedProject,
    getTodoList,
    updateTodoPriority,
  };
})();




/***/ }),

/***/ "./src/utilities/animations.js":
/*!*************************************!*\
  !*** ./src/utilities/animations.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const animationsUI = (() => {
  const toggleDropdowProjectsListOnClick = () => {
    const toggleBtn = document.querySelector('.dropdown-projects-list');
    const chevronSVG = document.querySelector('.bi-chevron-right');
    const projectsList = document.getElementById('display-projects-list');

    toggleBtn.addEventListener('click', () => {
      const style = getComputedStyle(chevronSVG);
      if (style.transform === 'matrix(1, 0, 0, 1, 0, 0)') {
        chevronSVG.style.transform = 'rotate(90deg)';
        chevronSVG.style.transition = 'transform .1s ease';
      } else {
        chevronSVG.style.transform = 'rotate(0deg)';
      }
      projectsList.classList.toggle('collapse');
      projectsList.classList.toggle('not-collapse');
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

  const hideAside = () => {
    const hideBtn = document.getElementById('hide-aside');
    const asideInfo = document.getElementById('aside-informations');
    const mainInfo = document.getElementById('main-informations');
    hideBtn.addEventListener('click', () => {
      asideInfo.classList.toggle('show-aside');
      asideInfo.classList.toggle('hide-aside');
      mainInfo.classList.toggle('full-main');
    });
  };

  return {
    toggleDropdowProjectsListOnClick,
    toggleClassOnSmallerScreen,
    hideAside,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animationsUI);


/***/ }),

/***/ "./src/utilities/appendDomElementToParent.js":
/*!***************************************************!*\
  !*** ./src/utilities/appendDomElementToParent.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const appendDomElementToParent = (parent, ...args) => {
  args.forEach((arg) => {
    parent.appendChild(arg.el);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendDomElementToParent);


/***/ }),

/***/ "./src/utilities/domElementFactory.js":
/*!********************************************!*\
  !*** ./src/utilities/domElementFactory.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const domElementFactory = (type, content = '', className = '') => {
  const el = document.createElement(type);
  el.textContent = content;
  if (className) {
    el.classList.add(`${className}`);
  }

  return {
    el,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domElementFactory);


/***/ }),

/***/ "./src/utilities/priorityPopUp.js":
/*!****************************************!*\
  !*** ./src/utilities/priorityPopUp.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayEditTodoPriorityPopUp": () => (/* binding */ displayEditTodoPriorityPopUp),
/* harmony export */   "createEditPriorityPopUp": () => (/* binding */ createEditPriorityPopUp)
/* harmony export */ });
/* harmony import */ var _domElementFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElementFactory */ "./src/utilities/domElementFactory.js");
/* harmony import */ var _appendDomElementToParent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendDomElementToParent */ "./src/utilities/appendDomElementToParent.js");
/* harmony import */ var _modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/handleTodo */ "./src/modules/handleTodo.js");




const editTodoPriority = (todo, newPriorityValue) => {
  _modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.handleTodoListModule.updateTodoPriority(todo, newPriorityValue);
};

const displayEditTodoPriorityPopUp = (popUp) => {
  const priorityPopUp = popUp;
  const popUpDisplay = priorityPopUp.style.display === 'none'
    ? 'inline' : 'none';

  priorityPopUp.style.display = popUpDisplay;
};

const createEditPriorityPopUp = (todo, reloadTodoFunctionFromUI) => {
  const priorityChoice = ['high', 'medium', 'low'];
  const popUp = (0,_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'pop-up-priority');

  priorityChoice.forEach((choice) => {
    const priorityBtn = (0,_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('button', `${choice}`, 'priority-choice-btn');

    priorityBtn.el.onclick = () => {
      const prioritySelected = priorityBtn.el.textContent;
      editTodoPriority(todo, prioritySelected);
      reloadTodoFunctionFromUI();
    };
    (0,_appendDomElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(popUp.el, priorityBtn);
  });
  popUp.el.style.display = 'none';
  return popUp;
};




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
/* harmony import */ var _utilities_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities/animations */ "./src/utilities/animations.js");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");







const newTodo = (0,_modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.todoFactory)(
  'start react',
  'buy milk for lune',
  'JavaScript',
  'low',
);
const todo3 = (0,_modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.todoFactory)(
  'read You dont know JS',
  'buy the book first',
  'JavaScript',
  'high',
);
const todo4 = (0,_modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.todoFactory)('watch barcelona', 'league des champiosn', 'football');
const todo5 = (0,_modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.todoFactory)('another todo', 'its cool');

_modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.handleTodoListModule.addTodo(newTodo);
_modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.handleTodoListModule.addTodo(todo3);
_modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.handleTodoListModule.addTodo(todo4);
_modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.handleTodoListModule.addTodo(todo5);

const newProject = (0,_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.projectFactory)('JavaScript');
const football = (0,_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.projectFactory)('fooTball');
const inbox = (0,_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.projectFactory)('inbox', true);
const today = (0,_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.projectFactory)('today', true);
const upcoming = (0,_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.projectFactory)('upcoming', true);

_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addProject(newProject);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addProject(football);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addProject(inbox);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addProject(today);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addProject(upcoming);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addTodoToProject(newProject.title, todo3);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addTodoToProject(football.title, todo4);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addTodoToProject(newProject.title, todo3);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addTodoToProject(newProject.title, todo3);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addTodoToProject(newProject.title, todo3);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addTodoToProject(newProject.title, newTodo);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addTodoToProject(newProject.title, todo3);
_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addTodoToProject(inbox.title, todo5);

_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.getProjectByName('javAscRipt');

_modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.handleTodoListModule.getTodoList();

_modules_handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.getAllProject();

_modules_UI__WEBPACK_IMPORTED_MODULE_5__["default"].loadTodoList();
_modules_UI__WEBPACK_IMPORTED_MODULE_5__["default"].loadProjectList();
_modules_UI__WEBPACK_IMPORTED_MODULE_5__["default"].addProject();
_modules_UI__WEBPACK_IMPORTED_MODULE_5__["default"].addTodo();
_modules_UI__WEBPACK_IMPORTED_MODULE_5__["default"].AddEventListenerToFetchTodoInProject();
_utilities_animations__WEBPACK_IMPORTED_MODULE_4__["default"].hideAside();
_utilities_animations__WEBPACK_IMPORTED_MODULE_4__["default"].toggleClassOnSmallerScreen();
_utilities_animations__WEBPACK_IMPORTED_MODULE_4__["default"].toggleDropdowProjectsListOnClick();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxVQUFVLFlBQVksT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FB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QUN4Qyw0RkFBd0M7QUFDeEMsNEZBQXdDO0FBQ3hDLDRGQUF3QztBQUN4Qyw0RkFBd0M7QUFDeEMsNEZBQXdDO0FBQ3hDLDRGQUF3QztBQUN4Qyw0RkFBd0M7QUFDeEM7QUFDQSw0RkFBd0M7QUFDeEM7QUFDQSxpRkFBZ0M7QUFDaEM7QUFDQSx5RkFBcUM7QUFDckM7QUFDQSxnRUFBZTtBQUNmLG1FQUFrQjtBQUNsQiw4REFBYTtBQUNiLDJEQUFVO0FBQ1Ysd0ZBQXVDO0FBQ3ZDLHVFQUFzQjtBQUN0Qix3RkFBdUM7QUFDdkMsOEZBQTZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZHVsZXMvaGFuZGxlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbW9kdWxlcy9oYW5kbGVUb2RvLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy91dGlsaXRpZXMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdXRpbGl0aWVzL2FwcGVuZERvbUVsZW1lbnRUb1BhcmVudC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdXRpbGl0aWVzL2RvbUVsZW1lbnRGYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy91dGlsaXRpZXMvcHJpb3JpdHlQb3BVcC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmZ1bGwtbWFpbiB7XFxuICBsZWZ0OiAwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLnNob3ctYXNpZGUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbn1cXG5cXG4uaGlkZS1hc2lkZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwMHB4KTtcXG59XFxuXFxuLmNvbGxhcHNlIHtcXG4gIG1heC1oZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzIGVhc2Utb3V0O1xcbn1cXG5cXG4ubm90LWNvbGxhcHNlIHtcXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50IGhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiNGMzZjtcXG4gIHBhZGRpbmc6IDFyZW0gMS44cmVtO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgaGVhZGVyIGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tbGVmdDogMS41cmVtO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgaGVhZGVyIGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XFxuICB6LWluZGV4OiAxMDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2U7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zIHtcXG4gIHBhZGRpbmc6IDEuMnJlbSAwLjZyZW0gMS4ycmVtIDEuMnJlbTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCB7XFxuICBwYWRkaW5nOiAycmVtIDAgMnJlbSAycmVtO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMXJlbSAwLjhyZW07XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3QgbGkgLm1haW4tbGlzdC1pY29uIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAuZGlzcGxheS1tYWluLWxpc3Qge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0IC5kaXNwbGF5LW1haW4tbGlzdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0IC5kaXNwbGF5LW1haW4tbGlzdCBzcGFuIHtcXG4gIGNvbG9yOiAjMjAyMDIwO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0IC5kaXNwbGF5LXByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDJyZW0gMCAwIDA7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3QgLmRpc3BsYXktcHJvamVjdHMgLmRpc3BsYXktcHJvamVjdHMtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAwIDFyZW0gMC44cmVtO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0IC5kaXNwbGF5LXByb2plY3RzIC5kaXNwbGF5LXByb2plY3RzLXRpdGxlIC5kcm9wZG93bi1wcm9qZWN0cy1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAuZGlzcGxheS1wcm9qZWN0cyAuZGlzcGxheS1wcm9qZWN0cy10aXRsZSAuZHJvcGRvd24tcHJvamVjdHMtbGlzdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3QgLmRpc3BsYXktcHJvamVjdHMgLmRpc3BsYXktcHJvamVjdHMtdGl0bGUgLmRyb3Bkb3duLXByb2plY3RzLWxpc3QgLmJpLWNoZXZyb24tcmlnaHQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3QgLmRpc3BsYXktcHJvamVjdHMgLmRpc3BsYXktcHJvamVjdHMtdGl0bGUgLmRyb3Bkb3duLXByb2plY3RzLWxpc3Qgc3BhbiB7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0IC5kaXNwbGF5LXByb2plY3RzIC5kaXNwbGF5LXByb2plY3RzLXRpdGxlIC5hZGQtcHJvamVjdCB7XFxuICB3aWR0aDogMTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3QgLmRpc3BsYXktcHJvamVjdHMgLmRpc3BsYXktcHJvamVjdHMtdGl0bGUgLmFkZC1wcm9qZWN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAjZGlzcGxheS1wcm9qZWN0cy1saXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0ICNkaXNwbGF5LXByb2plY3RzLWxpc3QgLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3QgI2Rpc3BsYXktcHJvamVjdHMtbGlzdCAucHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0ICNkaXNwbGF5LXByb2plY3RzLWxpc3QgLnByb2plY3Q6aG92ZXIgLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0ICNkaXNwbGF5LXByb2plY3RzLWxpc3QgLnByb2plY3QgLnByb2plY3QtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDAuOXJlbTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAjZGlzcGxheS1wcm9qZWN0cy1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLmNpcmNsZS1jb2xvciB7XFxuICB3aWR0aDogMTMlO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0ICNkaXNwbGF5LXByb2plY3RzLWxpc3QgLnByb2plY3QgLnByb2plY3QtaW5mbyAucHJvamVjdC1uYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3QgI2Rpc3BsYXktcHJvamVjdHMtbGlzdCAucHJvamVjdCAuZGVsZXRlLXByb2plY3QtYnRuIHtcXG4gIHdpZHRoOiAxMCU7XFxuICBvcGFjaXR5OiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3QgI2Rpc3BsYXktcHJvamVjdHMtbGlzdCAucHJvamVjdCAuZGVsZXRlLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI21haW4taW5mb3JtYXRpb25zIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgbGVmdDogMzAwcHg7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpO1xcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjZzIGVhc2U7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNtYWluLWluZm9ybWF0aW9ucyAuZGlzcGxheS10b2RvLWxpc3Qge1xcbiAgcGFkZGluZzogNnJlbTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI21haW4taW5mb3JtYXRpb25zIC5kaXNwbGF5LXRvZG8tbGlzdCAudG9kby1saXN0IHtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNtYWluLWluZm9ybWF0aW9ucyAuZGlzcGxheS10b2RvLWxpc3QgLnRvZG8tbGlzdCAudG9kby1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XFxuICBjb2xvcjogIzgwODA4MDtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI21haW4taW5mb3JtYXRpb25zIC5kaXNwbGF5LXRvZG8tbGlzdCAudG9kby1saXN0IC50b2RvLWl0ZW0gLmxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI21haW4taW5mb3JtYXRpb25zIC5kaXNwbGF5LXRvZG8tbGlzdCAudG9kby1saXN0IC50b2RvLWl0ZW0gLmxlZnQgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNtYWluLWluZm9ybWF0aW9ucyAuZGlzcGxheS10b2RvLWxpc3QgLnRvZG8tbGlzdCAudG9kby1pdGVtIC5sZWZ0IGRpdiB7XFxuICBjb2xvcjogIzIwMjAyMDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNtYWluLWluZm9ybWF0aW9ucyAuZGlzcGxheS10b2RvLWxpc3QgLnRvZG8tbGlzdCAudG9kby1pdGVtIC5yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjbWFpbi1pbmZvcm1hdGlvbnMgLmRpc3BsYXktdG9kby1saXN0IC50b2RvLWxpc3QgLnRvZG8taXRlbSAucmlnaHQgLnByaW9yaXR5LXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjbWFpbi1pbmZvcm1hdGlvbnMgLmRpc3BsYXktdG9kby1saXN0IC50b2RvLWxpc3QgLnRvZG8taXRlbSAucmlnaHQgLnByaW9yaXR5LXdyYXBwZXIgLnBvcC11cC1wcmlvcml0eSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldHVycXVvaXNlO1xcbiAgcmlnaHQ6IDM4cHg7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNtYWluLWluZm9ybWF0aW9ucyAuZGlzcGxheS10b2RvLWxpc3QgLnRvZG8tbGlzdCAudG9kby1pdGVtIC5yaWdodCBidXR0b24ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBtYXJnaW46IDAgM3B4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjbWFpbi1pbmZvcm1hdGlvbnMgLmRpc3BsYXktdG9kby1saXN0IC50b2RvLWxpc3QgLnRvZG8taXRlbSAucmlnaHQgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9hbmltYXRpb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QUNUQTtFQUNFLG9CQUFBO0FEWUY7O0FDVEE7RUFDRSx3QkFBQTtBRFlG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LFlBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtBQUh0QjtBQU1rQjtFQUNFLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFKcEI7QUFNb0I7RUFDRSx5QkVuUEY7RUZvUEUsZUFBQTtBQUp0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgJy4vc3R5bGVzL2Jhc2Uuc2Nzcyc7XFxyXFxuQGltcG9ydCAnLi9zdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xcclxcbkBpbXBvcnQgJy4vc3R5bGVzL2FuaW1hdGlvbi5zY3NzJztcXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogJGJhc2UtZm9udC1zaXplO1xcclxcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcclxcblxcclxcbiAgYm9keSB7XFxyXFxuICAgICNjb250ZW50IHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbiAgICAgIGhlYWRlciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlci1jb2xvcjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMS44cmVtO1xcclxcblxcclxcbiAgICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGVhZGVyLWJ1dHRvbi1ob3ZlcjtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAjYXBwIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcclxcblxcclxcbiAgICAgICAgI2FzaWRlLWluZm9ybWF0aW9ucyB7XFxyXFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFzaWRlLWNvbG9yO1xcclxcbiAgICAgICAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgICAgICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2U7XFxyXFxuXFxyXFxuICAgICAgICAgIC50b2RvLWluZm9ybWF0aW9ucyB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMS4ycmVtIDAuNnJlbSAxLjJyZW0gMS4ycmVtO1xcclxcblxcclxcbiAgICAgICAgICAgICNwcm9qZWN0cy1tYWluLWxpc3Qge1xcclxcbiAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSAwIDJyZW0gMnJlbTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgIGxpIHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAwLjhyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5tYWluLWxpc3QtaWNvbiB7XFxyXFxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAuZGlzcGxheS1tYWluLWxpc3Qge1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXNpZGUtY29sb3ItaG92ZXI7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgICAgICAgY29sb3I6ICRtYWluLWxpc3QtY29sb3I7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgIC5kaXNwbGF5LXByb2plY3RzIHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDAgMCAwO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAuZGlzcGxheS1wcm9qZWN0cy10aXRsZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDAgMXJlbSAwLjhyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgLmRyb3Bkb3duLXByb2plY3RzLWxpc3Qge1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIC5iaS1jaGV2cm9uLXJpZ2h0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAuYWRkLXByb2plY3Qge1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICNkaXNwbGF5LXByb2plY3RzLWxpc3Qge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLnByb2plY3Qge1xcclxcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXNpZGUtY29sb3ItaG92ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAuZGVsZXRlLXByb2plY3QtYnRuIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgLnByb2plY3QtaW5mbyB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDAuOXJlbTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIC5jaXJjbGUtY29sb3Ige1xcclxcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTMlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3QtbmFtZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAuZGVsZXRlLXByb2plY3QtYnRuIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI21haW4taW5mb3JtYXRpb25zIHtcXHJcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgbGVmdDogMzAwcHg7XFxyXFxuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCk7XFxyXFxuICAgICAgICAgIHRyYW5zaXRpb246IGxlZnQgMC42cyBlYXNlO1xcclxcblxcclxcbiAgICAgICAgICAuZGlzcGxheS10b2RvLWxpc3Qge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDZyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgLnRvZG8tbGlzdCB7XFxyXFxuICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xcclxcblxcclxcbiAgICAgICAgICAgICAgLnRvZG8taXRlbSB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICM4MDgwODA7XFxyXFxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHBhbGV0dXJxdW9pc2U7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC8vIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgICAgIC8vICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgLy8gICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgICAgICAgICAvLyB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5sZWZ0IHtcXHJcXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgZGl2IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1saXN0LWNvbG9yO1xcclxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcXHJcXG4gICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgLnJpZ2h0IHtcXHJcXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgIC5wcmlvcml0eS13cmFwcGVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIC8vIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAucG9wLXVwLXByaW9yaXR5IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxyXFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldHVycXVvaXNlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICByaWdodDogMzhweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDNweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXNpZGUtY29sb3ItaG92ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICNlZGl0LXRvZG8td3JhcHBlcntcXHJcXG4gICAgICAgICAgLy8gZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgLy8gZGlzcGxheTogO1xcclxcblxcclxcblxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIi5mdWxsLW1haW4ge1xcclxcbiAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWFzaWRlIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUtYXNpZGUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MDBweCk7XFxyXFxufVxcclxcblxcclxcbi5jb2xsYXBzZSB7XFxyXFxuICBtYXgtaGVpZ2h0OiAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdC1jb2xsYXBzZSB7XFxyXFxuICBtYXgtaGVpZ2h0OiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cIixcIiRib2R5LWNvbG9yOiBibHVlO1xcclxcbiRoZWFkZXItY29sb3I6ICNkYjRjM2Y7XFxyXFxuJGhlYWRlci1idXR0b24taG92ZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXHJcXG4kYXNpZGUtY29sb3I6ICNmN2Y3Zjc7XFxyXFxuJGFzaWRlLWNvbG9yLWhvdmVyOiAjZWNlY2VjO1xcclxcbiRtYWluLWxpc3QtY29sb3I6ICMyMDIwMjA7XFxyXFxuXFxyXFxuJGJhc2UtZm9udC1zaXplOiAxMHB4O1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODE1cHgpIHtcXHJcXG4gIG1haW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xcclxcbiAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MTVweCkge1xcclxcbiAgLmZ1bGwtbWFpbiB7XFxyXFxuICAgIGxlZnQ6IDE0MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQkFBb0I7RUFDdEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTVweCkge1xcclxcbiAgbWFpbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxuICAgIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgxNXB4KSB7XFxyXFxuICAuZnVsbC1tYWluIHtcXHJcXG4gICAgbGVmdDogMTQwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxudmFyIGdldFJhbmRvbVZhbHVlcztcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLiBBbHNvLFxuICAgIC8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxudmFyIGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSkpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyKSB7XG4gIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICB2YXIgdXVpZCA9IChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gc3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQgZG9tRWxlbWVudEZhY3RvcnkgZnJvbSAnLi4vdXRpbGl0aWVzL2RvbUVsZW1lbnRGYWN0b3J5JztcclxuaW1wb3J0IGFwcGVuZERvbUVsZW1lbnRUb1BhcmVudCBmcm9tICcuLi91dGlsaXRpZXMvYXBwZW5kRG9tRWxlbWVudFRvUGFyZW50JztcclxuaW1wb3J0IHsgdG9kb0ZhY3RvcnkyLCBoYW5kbGVUb2RvTGlzdE1vZHVsZSBhcyB0b2RvTGlzdE1vZHVsZSB9IGZyb20gJy4vaGFuZGxlVG9kbyc7XHJcbmltcG9ydCB7IHByb2plY3RGYWN0b3J5LCBoYW5kbGVQcm9qZWN0TGlzdE1vZHVsZSBhcyBwcm9qZWN0TGlzdE1vZHVsZSB9IGZyb20gJy4vaGFuZGxlUHJvamVjdCc7XHJcbmltcG9ydCB7IGRpc3BsYXlFZGl0VG9kb1ByaW9yaXR5UG9wVXAsIGNyZWF0ZUVkaXRQcmlvcml0eVBvcFVwIH0gZnJvbSAnLi4vdXRpbGl0aWVzL3ByaW9yaXR5UG9wVXAnO1xyXG5cclxuY29uc3QgVUkgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGxvYWRUb2RvTGlzdCA9IChuYW1lID0gJ2luYm94JykgPT4ge1xyXG4gICAgY29uc3QgdG9kb0NhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tY2F0ZWdvcnknKTtcclxuICAgIGNvbnN0IGRpc3BsYXlUb2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcclxuXHJcbiAgICB0b2RvQ2F0ZWdvcnkudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgZGlzcGxheVRvZG9MaXN0LnRleHRDb250ZW50ID0gJyc7XHJcblxyXG4gICAgY29uc3QgdG9kb0xpc3QgPSBwcm9qZWN0TGlzdE1vZHVsZS5nZXRUb2RvQnlQcm9qZWN0TmFtZShuYW1lKTtcclxuXHJcbiAgICBpZiAodG9kb0xpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnN0IHdyYXBwZXJFbXB0eVRvZG9MaXN0ID0gZG9tRWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAnd3JhcHBlci1lbXB0eS10b2RvLWxpc3QnKTtcclxuICAgICAgY29uc3QgZW1wdHlUb2RvVGV4dCA9IGRvbUVsZW1lbnRGYWN0b3J5KCdwJywgJ1doYXQgdGFza3MgYXJlIG9uIHlvdXIgbWluZCA/JywgJ2VtcHR5LXRvZG8tdGV4dCcpO1xyXG4gICAgICBjb25zdCBhZGRUb2RvQnRuID0gZG9tRWxlbWVudEZhY3RvcnkoJ2J1dHRvbicsICdhZGQgYSB0YXNrJywgJ2FkZC10b2RvLWJ0bicpO1xyXG4gICAgICBhcHBlbmREb21FbGVtZW50VG9QYXJlbnQod3JhcHBlckVtcHR5VG9kb0xpc3QuZWwsIGVtcHR5VG9kb1RleHQsIGFkZFRvZG9CdG4pO1xyXG4gICAgICBhcHBlbmREb21FbGVtZW50VG9QYXJlbnQoZGlzcGxheVRvZG9MaXN0LCB3cmFwcGVyRW1wdHlUb2RvTGlzdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2RvTGlzdC5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9kb0FwcGVuZGVkID0gcmVuZGVyVG9kb0l0ZW0odG9kbyk7XHJcbiAgICAgICAgZGlzcGxheVRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9BcHBlbmRlZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclRvZG9JdGVtID0gKHRvZG8pID0+IHtcclxuICAgIGNvbnN0IFJFRF9GTEFHX1BSSU9SSVRZID0gJyNkYjRjM2YnO1xyXG4gICAgY29uc3QgQkxVRV9GTEFHX1BSSU9SSVRZID0gJyMzZjczZDYnO1xyXG4gICAgY29uc3QgT1JBTkdFX0ZMQUdfUFJJT1JJVFkgPSAnI2ZmOTkzMyc7XHJcblxyXG4gICAgY29uc3QgdG9kb0l0ZW0gPSBkb21FbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICd0b2RvLWl0ZW0nKTtcclxuICAgIGNvbnN0IGxlZnRTaWRlT2ZUb2RvSXRlbSA9IGRvbUVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnJywgJ2xlZnQnKTtcclxuICAgIGNvbnN0IHJpZ2h0U2lkZU9mVG9kb0l0ZW0gPSBkb21FbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICdyaWdodCcpO1xyXG4gICAgY29uc3QgZWRpdFdyYXBwZXIgPSBkb21FbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICdlZGl0LXdyYXBwZXInKTtcclxuICAgIGNvbnN0IHByaW9yaXR5V3JhcHBlciA9IGRvbUVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnJywgJ3ByaW9yaXR5LXdyYXBwZXInKTtcclxuICAgIGNvbnN0IGRlbGV0ZVdyYXBwZXIgPSBkb21FbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICdkZWxldGUtd3JhcHBlcicpO1xyXG4gICAgY29uc3QgZG9uZVdyYXBwZXIgPSBkb21FbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICdkb25lLXdyYXBwZXInKTtcclxuICAgIGNvbnN0IHRvZG9UaXRsZVdyYXBwZXIgPSBkb21FbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICd0aXRsZS13cmFwcGVyJyk7XHJcbiAgICBjb25zdCBkb25lQnRuID0gZG9tRWxlbWVudEZhY3RvcnkoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgZWRpdEJ0biA9IGRvbUVsZW1lbnRGYWN0b3J5KCdidXR0b24nLCAnJywgJ2VkaXQtdG9kby1idG4nKTtcclxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvbUVsZW1lbnRGYWN0b3J5KCdidXR0b24nLCAnJywgJ2RlbGV0ZS10b2RvLWJ0bicpO1xyXG4gICAgY29uc3QgcHJpb3JpdHlCdG4gPSBkb21FbGVtZW50RmFjdG9yeSgnYnV0dG9uJywgJycsICdlZGl0LXByaW9yaXR5LWJ0bicpO1xyXG4gICAgY29uc3QgZGlzcGxheVRvZG9UaXRsZSA9IGRvbUVsZW1lbnRGYWN0b3J5KFxyXG4gICAgICAnZGl2JyxcclxuICAgICAgYCR7dG9kby50aXRsZX1gLFxyXG4gICAgICAndG9kby10aXRsZScsXHJcbiAgICApO1xyXG5cclxuICAgIGxldCBjb2xvckZsYWdQcmlvcml0eSA9IE9SQU5HRV9GTEFHX1BSSU9SSVRZO1xyXG5cclxuICAgIGlmICh0b2RvLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcclxuICAgICAgY29sb3JGbGFnUHJpb3JpdHkgPSBSRURfRkxBR19QUklPUklUWTtcclxuICAgIH0gZWxzZSBpZiAodG9kby5wcmlvcml0eSA9PT0gJ2xvdycpIHtcclxuICAgICAgY29sb3JGbGFnUHJpb3JpdHkgPSBCTFVFX0ZMQUdfUFJJT1JJVFk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9uZUJ0bi5lbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWFwcFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cclxuICAgICAgICA8cGF0aCBkPVwiTTExIDJhMyAzIDAgMCAxIDMgM3Y2YTMgMyAwIDAgMS0zIDNINWEzIDMgMCAwIDEtMy0zVjVhMyAzIDAgMCAxIDMtM2g2ek01IDFhNCA0IDAgMCAwLTQgNHY2YTQgNCAwIDAgMCA0IDRoNmE0IDQgMCAwIDAgNC00VjVhNCA0IDAgMCAwLTQtNEg1elwiLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICBgO1xyXG4gICAgZWRpdEJ0bi5lbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCIjODA4MDgwXCIgY2xhc3M9XCJiaSBiaS1wZW4gZWRpdC1idG5cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XHJcbiAgICAgICAgPHBhdGggZD1cIm0xMy40OTguNzk1LjE0OS0uMTQ5YTEuMjA3IDEuMjA3IDAgMSAxIDEuNzA3IDEuNzA4bC0uMTQ5LjE0OGExLjUgMS41IDAgMCAxLS4wNTkgMi4wNTlMNC44NTQgMTQuODU0YS41LjUgMCAwIDEtLjIzMy4xMzFsLTQgMWEuNS41IDAgMCAxLS42MDYtLjYwNmwxLTRhLjUuNSAwIDAgMSAuMTMxLS4yMzJsOS42NDItOS42NDJhLjUuNSAwIDAgMC0uNjQyLjA1Nkw2Ljg1NCA0Ljg1NGEuNS41IDAgMSAxLS43MDgtLjcwOEw5LjQ0Ljg1NEExLjUgMS41IDAgMCAxIDExLjUuNzk2YTEuNSAxLjUgMCAwIDEgMS45OTgtLjAwMXptLS42NDQuNzY2YS41LjUgMCAwIDAtLjcwNyAwTDEuOTUgMTEuNzU2bC0uNzY0IDMuMDU3IDMuMDU3LS43NjRMMTQuNDQgMy44NTRhLjUuNSAwIDAgMCAwLS43MDhsLTEuNTg1LTEuNTg1elwiLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICBgO1xyXG4gICAgcHJpb3JpdHlCdG4uZWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPSR7Y29sb3JGbGFnUHJpb3JpdHl9IGNsYXNzPVwiYmkgYmktZmxhZy1maWxsIHByaW9yaXR5LWJ0blwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cclxuICAgICAgICA8cGF0aCBkPVwiTTE0Ljc3OC4wODVBLjUuNSAwIDAgMSAxNSAuNVY4YS41LjUgMCAwIDEtLjMxNC40NjRMMTQuNSA4bC4xODYuNDY0LS4wMDMuMDAxLS4wMDYuMDAzLS4wMjMuMDA5YTEyLjQzNSAxMi40MzUgMCAwIDEtLjM5Ny4xNWMtLjI2NC4wOTUtLjYzMS4yMjMtMS4wNDcuMzUtLjgxNi4yNTItMS44NzkuNTIzLTIuNzEuNTIzLS44NDcgMC0xLjU0OC0uMjgtMi4xNTgtLjUyNWwtLjAyOC0uMDFDNy42OCA4LjcxIDcuMTQgOC41IDYuNSA4LjVjLS43IDAtMS42MzguMjMtMi40MzcuNDc3QTE5LjYyNiAxOS42MjYgMCAwIDAgMyA5LjM0MlYxNS41YS41LjUgMCAwIDEtMSAwVi41YS41LjUgMCAwIDEgMSAwdi4yODJjLjIyNi0uMDc5LjQ5Ni0uMTcuNzktLjI2QzQuNjA2LjI3MiA1LjY3IDAgNi41IDBjLjg0IDAgMS41MjQuMjc3IDIuMTIxLjUxOWwuMDQzLjAxOEM5LjI4Ni43ODggOS44MjggMSAxMC41IDFjLjcgMCAxLjYzOC0uMjMgMi40MzctLjQ3N2ExOS41ODcgMTkuNTg3IDAgMCAwIDEuMzQ5LS40NzZsLjAxOS0uMDA3LjAwNC0uMDAyaC4wMDFcIi8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgYDtcclxuICAgIGRlbGV0ZUJ0bi5lbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCIjODA4MDgwXCIgY2xhc3M9XCJiaSBiaS10cmFzaCBkZWxldGUtYnRuXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNNS41IDUuNUEuNS41IDAgMCAxIDYgNnY2YS41LjUgMCAwIDEtMSAwVjZhLjUuNSAwIDAgMSAuNS0uNXptMi41IDBhLjUuNSAwIDAgMSAuNS41djZhLjUuNSAwIDAgMS0xIDBWNmEuNS41IDAgMCAxIC41LS41em0zIC41YS41LjUgMCAwIDAtMSAwdjZhLjUuNSAwIDAgMCAxIDBWNnpcIi8+XHJcbiAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTQuNSAzYTEgMSAwIDAgMS0xIDFIMTN2OWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMlY0aC0uNWExIDEgMCAwIDEtMS0xVjJhMSAxIDAgMCAxIDEtMUg2YTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMSAxaDMuNWExIDEgMCAwIDEgMSAxdjF6TTQuMTE4IDQgNCA0LjA1OVYxM2ExIDEgMCAwIDAgMSAxaDZhMSAxIDAgMCAwIDEtMVY0LjA1OUwxMS44ODIgNEg0LjExOHpNMi41IDNWMmgxMXYxaC0xMXpcIi8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgYDtcclxuXHJcbiAgICBjb25zdCBwb3BVcFByaW9yaXR5ID0gY3JlYXRlRWRpdFByaW9yaXR5UG9wVXAodG9kbywgKCkgPT4gbG9hZFRvZG9MaXN0KHRvZG8ucHJvamVjdCkpO1xyXG4gICAgcHJpb3JpdHlCdG4uZWwub25jbGljayA9ICgpID0+IGRpc3BsYXlFZGl0VG9kb1ByaW9yaXR5UG9wVXAocG9wVXBQcmlvcml0eS5lbCk7XHJcblxyXG4gICAgaGFuZGxlVG9kb0l0ZW1FdmVudExpc3RlbmVyKHRvZG8sIGVkaXRCdG4uZWwsIGRlbGV0ZUJ0bi5lbCk7XHJcblxyXG4gICAgYXBwZW5kRG9tRWxlbWVudFRvUGFyZW50KGRvbmVXcmFwcGVyLmVsLCBkb25lQnRuKTtcclxuICAgIGFwcGVuZERvbUVsZW1lbnRUb1BhcmVudCh0b2RvVGl0bGVXcmFwcGVyLmVsLCBkaXNwbGF5VG9kb1RpdGxlKTtcclxuICAgIGFwcGVuZERvbUVsZW1lbnRUb1BhcmVudChcclxuICAgICAgbGVmdFNpZGVPZlRvZG9JdGVtLmVsLFxyXG4gICAgICBkb25lV3JhcHBlcixcclxuICAgICAgdG9kb1RpdGxlV3JhcHBlcixcclxuICAgICk7XHJcbiAgICBhcHBlbmREb21FbGVtZW50VG9QYXJlbnQoZWRpdFdyYXBwZXIuZWwsIGVkaXRCdG4pO1xyXG4gICAgYXBwZW5kRG9tRWxlbWVudFRvUGFyZW50KHByaW9yaXR5V3JhcHBlci5lbCwgcHJpb3JpdHlCdG4sIHBvcFVwUHJpb3JpdHkpO1xyXG4gICAgYXBwZW5kRG9tRWxlbWVudFRvUGFyZW50KGRlbGV0ZVdyYXBwZXIuZWwsIGRlbGV0ZUJ0bik7XHJcbiAgICBhcHBlbmREb21FbGVtZW50VG9QYXJlbnQoXHJcbiAgICAgIHJpZ2h0U2lkZU9mVG9kb0l0ZW0uZWwsXHJcbiAgICAgIGVkaXRXcmFwcGVyLFxyXG4gICAgICBwcmlvcml0eVdyYXBwZXIsXHJcbiAgICAgIGRlbGV0ZVdyYXBwZXIsXHJcbiAgICApO1xyXG5cclxuICAgIGFwcGVuZERvbUVsZW1lbnRUb1BhcmVudChcclxuICAgICAgdG9kb0l0ZW0uZWwsXHJcbiAgICAgIGxlZnRTaWRlT2ZUb2RvSXRlbSxcclxuICAgICAgcmlnaHRTaWRlT2ZUb2RvSXRlbSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHRvZG9JdGVtLmVsO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclByb2plY3RJdGVtID0gKHByb2plY3QpID0+IHtcclxuICAgIGNvbnN0IHdyYXBwZXJQcm9qZWN0ID0gZG9tRWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAncHJvamVjdCcpO1xyXG4gICAgY29uc3QgcHJvamVjdEluZm8gPSBkb21FbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICdwcm9qZWN0LWluZm8nKTtcclxuICAgIGNvbnN0IGNpcmNsZUNvbG9yUHJvamVjdCA9IGRvbUVsZW1lbnRGYWN0b3J5KCdzcGFuJywgJycsICdjaXJjbGUtY29sb3InKTtcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvbUVsZW1lbnRGYWN0b3J5KFxyXG4gICAgICAnc3BhbicsXHJcbiAgICAgIGAke3Byb2plY3QudGl0bGV9YCxcclxuICAgICAgJ3Byb2plY3QtbmFtZScsXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvbUVsZW1lbnRGYWN0b3J5KFxyXG4gICAgICAnYnV0dG9uJyxcclxuICAgICAgJycsXHJcbiAgICAgICdkZWxldGUtcHJvamVjdC1idG4nLFxyXG4gICAgKTtcclxuICAgIHByb2plY3RJbmZvLmVsLmRhdGFzZXQubGlzdCA9IGAke3Byb2plY3QudGl0bGV9YDtcclxuXHJcbiAgICBkZWxldGVQcm9qZWN0QnRuLmVsLmlubmVySFRNTCA9IGBcclxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmkteC1sZyBkZWxldGUtcHJvamVjdFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cclxuICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMy44NTQgMi4xNDZhLjUuNSAwIDAgMSAwIC43MDhsLTExIDExYS41LjUgMCAwIDEtLjcwOC0uNzA4bDExLTExYS41LjUgMCAwIDEgLjcwOCAwWlwiLz5cclxuICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yLjE0NiAyLjE0NmEuNS41IDAgMCAwIDAgLjcwOGwxMSAxMWEuNS41IDAgMCAwIC43MDgtLjcwOGwtMTEtMTFhLjUuNSAwIDAgMC0uNzA4IDBaXCIvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIGA7XHJcblxyXG4gICAgY2lyY2xlQ29sb3JQcm9qZWN0LmVsLmlubmVySFRNTCA9IGBcclxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgZmlsbD1cIiNmZjk5MzNcIiBjbGFzcz1cImJpIGJpLWNpcmNsZS1maWxsXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgICAgIDxjaXJjbGUgY3g9XCI4XCIgY3k9XCI4XCIgcj1cIjhcIi8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgYDtcclxuXHJcbiAgICAvLyBkZWxldGVQcm9qZWN0QnRuLmVsLm9uY2xpY2sgPSAoKSA9PiBkZWxldGVQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgaGFuZGxlUHJvamVjdEl0ZW1FdmVudExpc3RlbmVyKHByb2plY3QsIGRlbGV0ZVByb2plY3RCdG4uZWwpO1xyXG5cclxuICAgIGFwcGVuZERvbUVsZW1lbnRUb1BhcmVudChwcm9qZWN0SW5mby5lbCwgY2lyY2xlQ29sb3JQcm9qZWN0LCBwcm9qZWN0VGl0bGUpO1xyXG4gICAgYXBwZW5kRG9tRWxlbWVudFRvUGFyZW50KHdyYXBwZXJQcm9qZWN0LmVsLCBwcm9qZWN0SW5mbywgZGVsZXRlUHJvamVjdEJ0bik7XHJcblxyXG4gICAgcmV0dXJuIHdyYXBwZXJQcm9qZWN0LmVsO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbGxQbGFjZUhvbGRlckZvcm1FZGl0V2l0aFRvZG9EYXRhID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IGlucHV0RWRpdFRvZG8gPSBBcnJheS5mcm9tKFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZWRpdC10b2RvLWZvcm0gaW5wdXQnKSxcclxuICAgICk7XHJcblxyXG4gICAgaW5wdXRFZGl0VG9kby5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKGAke2lucHV0LmlkfS1pbnB1dGApO1xyXG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IGRhdGFbaW5wdXQuaWRdO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9hZFByb2plY3RMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheS1wcm9qZWN0cy1saXN0Jyk7XHJcbiAgICBwcm9qZWN0TGlzdC50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdExpc3RNb2R1bGUuZ2V0QWxsUHJvamVjdEV4Y2VwdERlZmF1bHRQcm9qZWN0KCk7XHJcblxyXG4gICAgaWYgKHByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjb25zdCBlbXB0eVByb2plY3RUZXh0ID0gZG9tRWxlbWVudEZhY3RvcnkoJ3AnLCAnWW91IGhhdmUgbm8gcHJvamVjdCcsICdlbXB0eS1wcm9qZWN0LXRleHQnKTtcclxuICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoZW1wdHlQcm9qZWN0VGV4dC5lbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdEFwcGVuZGVkID0gcmVuZGVyUHJvamVjdEl0ZW0ocHJvamVjdCk7XHJcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEFwcGVuZGVkKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlVG9kbyA9ICh0b2RvKSA9PiB7XHJcbiAgICBjb25zdCB7IHByb2plY3QsIGlkIH0gPSB0b2RvO1xyXG5cclxuICAgIHRvZG9MaXN0TW9kdWxlLmRlbGV0ZVRvZG8oaWQpO1xyXG4gICAgcHJvamVjdExpc3RNb2R1bGUuZGVsZXRlVG9kb0luVGhpc1Byb2plY3QocHJvamVjdCwgaWQpO1xyXG5cclxuICAgIGxvYWRUb2RvTGlzdChwcm9qZWN0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcclxuICAgIGNvbnN0IHsgaWQsIHRpdGxlIH0gPSBwcm9qZWN0O1xyXG5cclxuICAgIHByb2plY3RMaXN0TW9kdWxlLmRlbGV0ZVByb2plY3QoaWQsIHRpdGxlKTtcclxuICAgIGxvYWRQcm9qZWN0TGlzdCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRvZG9JdGVtRXZlbnRMaXN0ZW5lciA9ICh0b2RvLCAuLi5hcmdzKSA9PiB7XHJcbiAgICBhcmdzLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtdG9kby1idG4nKSkge1xyXG4gICAgICAgICAgdXBkYXRlVG9kbyh0b2RvKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS10b2RvLWJ0bicpKSB7XHJcbiAgICAgICAgICBkZWxldGVUb2RvKHRvZG8pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRVcGRhdGVUb2RvSW5mbyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZWRUb2RvID0gQXJyYXkuZnJvbShcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2VkaXQtdG9kby1mb3JtIGlucHV0JyksXHJcbiAgICApLnJlZHVjZSgoYWNjLCBpbnB1dCkgPT4gKHtcclxuICAgICAgLi4uYWNjLCBbaW5wdXQuaWRdOiBpbnB1dC52YWx1ZSB8fCBpbnB1dC5wbGFjZWhvbGRlcixcclxuICAgIH0pLCB7fSk7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZWRUb2RvO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZEZvcm1FdmVudExpc3RlbmVyVG9VcGRhdGVUb2RvID0gKGVkaXRGb3JtLCB3cmFwcGVyKSA9PiB7XHJcbiAgICBlZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIC8vIGNoZWNrIGlmIHByb2plY3QgdmFsdWUgY2hhbmdlXHJcbiAgICAgIGNvbnN0IGZvcm1Qcm9qZWN0SW5wdXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWlucHV0Jyk7XHJcbiAgICAgIGxldCBuZXdQcm9qZWN0ID0gZm9ybVByb2plY3RJbnB1dFZhbHVlLnZhbHVlO1xyXG4gICAgICBjb25zdCBvbGRlclByb2plY3QgPSBmb3JtUHJvamVjdElucHV0VmFsdWUucGxhY2Vob2xkZXI7XHJcblxyXG4gICAgICBpZiAoIW5ld1Byb2plY3QpIHtcclxuICAgICAgICBuZXdQcm9qZWN0ID0gb2xkZXJQcm9qZWN0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBmb3JtSWQgPSBlZGl0Rm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuXHJcbiAgICAgIGNvbnN0IG9yaWdpbmFsVG9kbyA9IHRvZG9MaXN0TW9kdWxlLmdldFRvZG8oZm9ybUlkKTtcclxuICAgICAgY29uc3QgdXBkYXRlZFRvZG9JbmZvID0gZ2V0VXBkYXRlVG9kb0luZm8oKTtcclxuXHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRUb2RvID0gdG9kb0xpc3RNb2R1bGUudXBkYXRlVG9kbyhvcmlnaW5hbFRvZG8sIHVwZGF0ZWRUb2RvSW5mbyk7XHJcblxyXG4gICAgICBjb25zdCB7IGlkIH0gPSBvcmlnaW5hbFRvZG87XHJcbiAgICAgIGNvbnN0IHsgcHJvamVjdCB9ID0gdXBkYXRlZFRvZG87XHJcblxyXG4gICAgICAvLyB0aGlzIG1lYW4gaSBoYXZlIHRvIG1vb3ZlIHRvZG8gaW4gYW5vdGhlciBmb2xkZXIgcHJvamVjdFxyXG4gICAgICBpZiAob2xkZXJQcm9qZWN0ICE9PSBuZXdQcm9qZWN0KSB7XHJcbiAgICAgICAgcHJvamVjdExpc3RNb2R1bGUuZGVsZXRlVG9kb0luVGhpc1Byb2plY3Qob2xkZXJQcm9qZWN0LCBpZCk7XHJcbiAgICAgICAgcHJvamVjdExpc3RNb2R1bGUuYWRkVG9kb1RvUHJvamVjdChwcm9qZWN0LCB1cGRhdGVkVG9kbyk7XHJcbiAgICAgICAgbG9hZFRvZG9MaXN0KHByb2plY3QpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxvYWRUb2RvTGlzdChvbGRlclByb2plY3QpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB3cmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4gICAgICBlZGl0Rm9ybS5yZXNldCgpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlVG9kbyA9ICh0b2RvKSA9PiB7XHJcbiAgICBjb25zdCBlZGl0VG9kb1dyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10b2RvLXdyYXBwZXInKTtcclxuICAgIGNvbnN0IGVkaXRUb2RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRvZG8tZm9ybScpO1xyXG5cclxuICAgIGVkaXRUb2RvV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuXHJcbiAgICBlZGl0VG9kb0Zvcm0uZGF0YXNldC5pZCA9IHRvZG8uaWQ7XHJcblxyXG4gICAgZmlsbFBsYWNlSG9sZGVyRm9ybUVkaXRXaXRoVG9kb0RhdGEodG9kbyk7XHJcbiAgICBhZGRGb3JtRXZlbnRMaXN0ZW5lclRvVXBkYXRlVG9kbyhlZGl0VG9kb0Zvcm0sIGVkaXRUb2RvV3JhcHBlcik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvamVjdEl0ZW1FdmVudExpc3RlbmVyID0gKHByb2plY3QsIC4uLmFyZ3MpID0+IHtcclxuICAgIGFyZ3MuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLXByb2plY3QtYnRuJykpIHtcclxuICAgICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFRvZG9JbmZvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3VG9kbyA9IEFycmF5LmZyb20oXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNhZGQtdG9kby1mb3JtIGlucHV0JyksXHJcbiAgICApLnJlZHVjZSgoYWNjLCBpbnB1dCkgPT4gKHsgLi4uYWNjLCBbaW5wdXQuaWRdOiBpbnB1dC52YWx1ZSB9KSwge30pO1xyXG5cclxuICAgIHJldHVybiBuZXdUb2RvO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldE5ld1Byb2plY3RUaXRsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcjYWRkLXByb2plY3QtZm9ybSBpbnB1dCcsXHJcbiAgICApLnZhbHVlO1xyXG5cclxuICAgIHJldHVybiBwcm9qZWN0VGl0bGUudG9Mb3dlckNhc2UoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBBZGRFdmVudExpc3RlbmVyVG9GZXRjaFRvZG9JblByb2plY3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICcuZGlzcGxheS1tYWluLWxpc3QsIC5wcm9qZWN0LWluZm8nLFxyXG4gICAgKTtcclxuXHJcbiAgICBwcm9qZWN0TmFtZS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBsaXN0IH0gPSBwcm9qZWN0LmRhdGFzZXQ7XHJcbiAgICAgICAgbG9hZFRvZG9MaXN0KGxpc3QpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZURyb3Bkb3dQcm9qZWN0c0xpc3RBdXRvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2hldnJvblNWRyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iaS1jaGV2cm9uLXJpZ2h0Jyk7XHJcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheS1wcm9qZWN0cy1saXN0Jyk7XHJcblxyXG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGNoZXZyb25TVkcpO1xyXG4gICAgaWYgKHN0eWxlLnRyYW5zZm9ybSA9PT0gJ21hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKScpIHtcclxuICAgICAgY2hldnJvblNWRy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XHJcbiAgICAgIGNoZXZyb25TVkcuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gLjFzIGVhc2UnO1xyXG4gICAgICBwcm9qZWN0c0xpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnY29sbGFwc2UnKTtcclxuICAgICAgcHJvamVjdHNMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ25vdC1jb2xsYXBzZScpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFRvZG8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhZGRUb2RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdG9kby1mb3JtJyk7XHJcblxyXG4gICAgYWRkVG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBuZXdUb2RvSW5mbyA9IGdldFRvZG9JbmZvKCk7XHJcbiAgICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvRmFjdG9yeTIobmV3VG9kb0luZm8pO1xyXG4gICAgICBjb25zdCB7IHByb2plY3QgfSA9IG5ld1RvZG87XHJcbiAgICAgIHRvZG9MaXN0TW9kdWxlLmFkZFRvZG8obmV3VG9kbyk7XHJcbiAgICAgIHByb2plY3RMaXN0TW9kdWxlLmFkZFRvZG9Ub1Byb2plY3QocHJvamVjdCwgbmV3VG9kbyk7XHJcbiAgICAgIGxvYWRUb2RvTGlzdChwcm9qZWN0KTtcclxuICAgICAgYWRkVG9kb0Zvcm0ucmVzZXQoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1mb3JtJyk7XHJcblxyXG4gICAgYWRkUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGUgPSBnZXROZXdQcm9qZWN0VGl0bGUoKTtcclxuICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KG5ld1Byb2plY3RUaXRsZSk7XHJcbiAgICAgIGNvbnN0IHsgdGl0bGUgfSA9IG5ld1Byb2plY3Q7XHJcbiAgICAgIHByb2plY3RMaXN0TW9kdWxlLmFkZFByb2plY3QobmV3UHJvamVjdCk7XHJcbiAgICAgIGxvYWRQcm9qZWN0TGlzdCgpO1xyXG4gICAgICBBZGRFdmVudExpc3RlbmVyVG9GZXRjaFRvZG9JblByb2plY3QoKTtcclxuICAgICAgYWRkUHJvamVjdEZvcm0ucmVzZXQoKTtcclxuICAgICAgdG9nZ2xlRHJvcGRvd1Byb2plY3RzTGlzdEF1dG8oKTtcclxuICAgICAgbG9hZFRvZG9MaXN0KHRpdGxlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBsb2FkVG9kb0xpc3QsXHJcbiAgICBsb2FkUHJvamVjdExpc3QsXHJcbiAgICBBZGRFdmVudExpc3RlbmVyVG9GZXRjaFRvZG9JblByb2plY3QsXHJcbiAgICBhZGRUb2RvLFxyXG4gICAgYWRkUHJvamVjdCxcclxuICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVUk7XHJcbiIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyBoYW5kbGVUb2RvTGlzdE1vZHVsZSB9IGZyb20gJy4vaGFuZGxlVG9kbyc7XHJcblxyXG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9ICh0aXRsZSwgZGVmYXVsdFByb2plY3QpID0+IHtcclxuICBjb25zdCB0b2Rvc0xpc3RJblRoaXNQcm9qZWN0ID0gW107XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpZDogdXVpZHY0KCksXHJcbiAgICB0aXRsZTogdGl0bGUudG9Mb3dlckNhc2UoKSxcclxuICAgIHRvZG9zOiB0b2Rvc0xpc3RJblRoaXNQcm9qZWN0LFxyXG4gICAgZGVmYXVsdFByb2plY3Q6IGRlZmF1bHRQcm9qZWN0IHx8IGZhbHNlLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVQcm9qZWN0TGlzdE1vZHVsZSA9ICgoKSA9PiB7XHJcbiAgbGV0IHByb2plY3RMaXN0ID0gW107XHJcblxyXG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xyXG4gICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRQcm9qZWN0QnlOYW1lID0gKG5hbWUpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBwcm9qZWN0TGlzdC5maW5kKFxyXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXN1bHRzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFRvZG9Ub1Byb2plY3QgPSAobmFtZSwgdG9kbykgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdFRvQWRkID0gZ2V0UHJvamVjdEJ5TmFtZShuYW1lKTtcclxuXHJcbiAgICBpZiAocHJvamVjdFRvQWRkLnRvZG9zLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IHRvZG8uaWQpKSByZXR1cm47XHJcbiAgICBpZiAodG9kby5wcm9qZWN0ICE9PSBuYW1lKSByZXR1cm47XHJcbiAgICBwcm9qZWN0VG9BZGQudG9kb3MucHVzaCh0b2RvKTtcclxuICB9O1xyXG5cclxuICAvLyBBIHN1cHByaW1lciB1bmUgZm9pcyBsZSBkZXYgdGVybWluw6lcclxuICBjb25zdCBnZXRBbGxQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS50YWJsZShwcm9qZWN0TGlzdCk7XHJcbiAgICByZXR1cm4gcHJvamVjdExpc3Q7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0QWxsUHJvamVjdEV4Y2VwdERlZmF1bHRQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgLy8gZGVmYXVsdCBwcm9qZWN0ID0gaW5ib3gsIHRvZGF5LCB1cGNvbW1pbmdcclxuICAgIGNvbnN0IGFsbFByb2plY3RFeGNlcHREZWZhdWx0ID0gcHJvamVjdExpc3QuZmlsdGVyKFxyXG4gICAgICAocHJvamVjdCkgPT4gIXByb2plY3QuZGVmYXVsdFByb2plY3QsXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBhbGxQcm9qZWN0RXhjZXB0RGVmYXVsdDtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRUb2RvQnlQcm9qZWN0TmFtZSA9IChuYW1lKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gcHJvamVjdExpc3QuZmluZChcclxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IG5hbWUudG9Mb3dlckNhc2UoKSxcclxuICAgICk7XHJcbiAgICByZXR1cm4gcmVzdWx0cy50b2RvcztcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVUb2RvSW5UaGlzUHJvamVjdCA9IChwcm9qZWN0LCB0b2RvSWQpID0+IHtcclxuICAgIGNvbnN0IHRvZG9zUGFyZW50UHJvamVjdCA9IGdldFByb2plY3RCeU5hbWUocHJvamVjdCk7XHJcblxyXG4gICAgdG9kb3NQYXJlbnRQcm9qZWN0LnRvZG9zID0gdG9kb3NQYXJlbnRQcm9qZWN0LnRvZG9zLmZpbHRlcihcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHRvZG9JZCxcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChpZCwgcHJvamVjdFRpdGxlKSA9PiB7XHJcbiAgICBwcm9qZWN0TGlzdCA9IHByb2plY3RMaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gaWQpO1xyXG5cclxuICAgIGhhbmRsZVRvZG9MaXN0TW9kdWxlLmRlbGV0ZUFsbFRvZG9Gcm9tRGVsZXRlZFByb2plY3QocHJvamVjdFRpdGxlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYWRkUHJvamVjdCxcclxuICAgIGdldFByb2plY3RCeU5hbWUsXHJcbiAgICBhZGRUb2RvVG9Qcm9qZWN0LFxyXG4gICAgZ2V0QWxsUHJvamVjdCxcclxuICAgIGdldEFsbFByb2plY3RFeGNlcHREZWZhdWx0UHJvamVjdCxcclxuICAgIGdldFRvZG9CeVByb2plY3ROYW1lLFxyXG4gICAgZGVsZXRlVG9kb0luVGhpc1Byb2plY3QsXHJcbiAgICBkZWxldGVQcm9qZWN0LFxyXG4gIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBwcm9qZWN0RmFjdG9yeSwgaGFuZGxlUHJvamVjdExpc3RNb2R1bGUgfTtcclxuIiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XHJcblxyXG4vLyBqZSBnYXJkZSBjZXR0ZSBmb25jdGlvbiBqdXNxdSfDoCBsYSBmaW4gZGUgbW9uIGRldmVsb3BwbWVudCwgamUgbCd1dGlsaXNlIHBvdXJcclxuLy8gY3LDqWVyIGxlcyB0b2RvcyDDoCBsYSB2b2zDqWUgZGFucyBpbmRleC5qcyAoYydlc3QgbWEgcHJlbWnDqHJlIHZlcnNpb24gZGUgbWEgZnVuY3Rpb25cclxuLy8gZmFjdG9yeSwgdW5lIGZvaXMgbGUgcHJvamV0IHRlcm1pbsOpIGplIGxhIHN1cHByaW1lcmFpcy4pXHJcbmNvbnN0IHRvZG9GYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdCA9ICdpbmJveCcsIHByaW9yaXR5ID0gJ21lZGl1bScpID0+ICh7XHJcbiAgaWQ6IHV1aWR2NCgpLFxyXG4gIHRpdGxlLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIHByb2plY3Q6IHByb2plY3QudG9Mb3dlckNhc2UoKSxcclxuICBwcmlvcml0eSxcclxufSk7XHJcblxyXG5jb25zdCB0b2RvRmFjdG9yeTIgPSAodG9kbykgPT4gKHtcclxuICBpZDogdXVpZHY0KCksXHJcbiAgdGl0bGU6IHRvZG8udGl0bGUsXHJcbiAgZGVzY3JpcHRpb246IHRvZG8uZGVzY3JpcHRpb24sXHJcbiAgcHJvamVjdDogdG9kby5wcm9qZWN0LnRvTG93ZXJDYXNlKCkgfHwgJ2luYm94JyxcclxuICBwcmlvcml0eTogdG9kby5wcmlvcml0eSB8fCAnbWVkaXVtJyxcclxufSk7XHJcblxyXG5jb25zdCBoYW5kbGVUb2RvTGlzdE1vZHVsZSA9ICgoKSA9PiB7XHJcbiAgbGV0IHRvZG9MaXN0ID0gW107XHJcblxyXG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xyXG4gICAgdG9kb0xpc3QucHVzaCh0b2RvKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRUb2RvID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCB0b2RvID0gdG9kb0xpc3QuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xyXG4gICAgcmV0dXJuIHRvZG87XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlVG9kbyA9IChvcmlnaW5hbFRvZG8sIHVwZGF0ZWRUb2RvSW5mbykgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlZFRvZG8gPSBPYmplY3QuYXNzaWduKG9yaWdpbmFsVG9kbywgdXBkYXRlZFRvZG9JbmZvKTtcclxuICAgIHJldHVybiB1cGRhdGVkVG9kbztcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVUb2RvID0gKGlkKSA9PiB7XHJcbiAgICB0b2RvTGlzdCA9IHRvZG9MaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gaWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUFsbFRvZG9Gcm9tRGVsZXRlZFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICAgIHRvZG9MaXN0ID0gdG9kb0xpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnByb2plY3QgIT09IHByb2plY3ROYW1lKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRUb2RvTGlzdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUudGFibGUodG9kb0xpc3QpO1xyXG4gICAgcmV0dXJuIHRvZG9MaXN0O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVRvZG9Qcmlvcml0eSA9ICh0b2RvLCBuZXdQcmlvcml0eVZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCB0b2RvUHJpb3JpdHlWYWx1ZVVwZGF0ZWQgPSB7XHJcbiAgICAgIHByaW9yaXR5OiBuZXdQcmlvcml0eVZhbHVlLFxyXG4gICAgfTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKHRvZG8sIHRvZG9Qcmlvcml0eVZhbHVlVXBkYXRlZCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGFkZFRvZG8sXHJcbiAgICBnZXRUb2RvLFxyXG4gICAgdXBkYXRlVG9kbyxcclxuICAgIGRlbGV0ZVRvZG8sXHJcbiAgICBkZWxldGVBbGxUb2RvRnJvbURlbGV0ZWRQcm9qZWN0LFxyXG4gICAgZ2V0VG9kb0xpc3QsXHJcbiAgICB1cGRhdGVUb2RvUHJpb3JpdHksXHJcbiAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IHRvZG9GYWN0b3J5LCB0b2RvRmFjdG9yeTIsIGhhbmRsZVRvZG9MaXN0TW9kdWxlIH07XHJcbiIsImNvbnN0IGFuaW1hdGlvbnNVSSA9ICgoKSA9PiB7XHJcbiAgY29uc3QgdG9nZ2xlRHJvcGRvd1Byb2plY3RzTGlzdE9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0b2dnbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tcHJvamVjdHMtbGlzdCcpO1xyXG4gICAgY29uc3QgY2hldnJvblNWRyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iaS1jaGV2cm9uLXJpZ2h0Jyk7XHJcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheS1wcm9qZWN0cy1saXN0Jyk7XHJcblxyXG4gICAgdG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoY2hldnJvblNWRyk7XHJcbiAgICAgIGlmIChzdHlsZS50cmFuc2Zvcm0gPT09ICdtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCknKSB7XHJcbiAgICAgICAgY2hldnJvblNWRy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XHJcbiAgICAgICAgY2hldnJvblNWRy5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAuMXMgZWFzZSc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2hldnJvblNWRy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcclxuICAgICAgfVxyXG4gICAgICBwcm9qZWN0c0xpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnY29sbGFwc2UnKTtcclxuICAgICAgcHJvamVjdHNMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ25vdC1jb2xsYXBzZScpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQ2xhc3NPblNtYWxsZXJTY3JlZW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhc2lkZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXNpZGUtaW5mb3JtYXRpb25zJyk7XHJcbiAgICBjb25zdCBtYWluSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWluZm9ybWF0aW9ucycpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHdpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuICAgICAgaWYgKHdpZHRoIDwgODE1KSB7XHJcbiAgICAgICAgaWYgKGFzaWRlSW5mby5jbGFzc0xpc3QudmFsdWUgPT09ICdzaG93LWFzaWRlJykge1xyXG4gICAgICAgICAgYXNpZGVJbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctYXNpZGUnKTtcclxuICAgICAgICAgIGFzaWRlSW5mby5jbGFzc0xpc3QuYWRkKCdoaWRlLWFzaWRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAod2lkdGggPiA4MTUpIHtcclxuICAgICAgICBpZiAoYXNpZGVJbmZvLmNsYXNzTGlzdC52YWx1ZSA9PT0gJ2hpZGUtYXNpZGUnKSB7XHJcbiAgICAgICAgICBhc2lkZUluZm8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1hc2lkZScpO1xyXG4gICAgICAgICAgYXNpZGVJbmZvLmNsYXNzTGlzdC5hZGQoJ3Nob3ctYXNpZGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1haW5JbmZvLmNsYXNzTGlzdC52YWx1ZSA9PT0gJ2Z1bGwtbWFpbicpIHtcclxuICAgICAgICAgIG1haW5JbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2Z1bGwtbWFpbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGlkZUFzaWRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGlkZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRlLWFzaWRlJyk7XHJcbiAgICBjb25zdCBhc2lkZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXNpZGUtaW5mb3JtYXRpb25zJyk7XHJcbiAgICBjb25zdCBtYWluSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWluZm9ybWF0aW9ucycpO1xyXG4gICAgaGlkZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgYXNpZGVJbmZvLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctYXNpZGUnKTtcclxuICAgICAgYXNpZGVJbmZvLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUtYXNpZGUnKTtcclxuICAgICAgbWFpbkluZm8uY2xhc3NMaXN0LnRvZ2dsZSgnZnVsbC1tYWluJyk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdG9nZ2xlRHJvcGRvd1Byb2plY3RzTGlzdE9uQ2xpY2ssXHJcbiAgICB0b2dnbGVDbGFzc09uU21hbGxlclNjcmVlbixcclxuICAgIGhpZGVBc2lkZSxcclxuICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYW5pbWF0aW9uc1VJO1xyXG4iLCJjb25zdCBhcHBlbmREb21FbGVtZW50VG9QYXJlbnQgPSAocGFyZW50LCAuLi5hcmdzKSA9PiB7XHJcbiAgYXJncy5mb3JFYWNoKChhcmcpID0+IHtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChhcmcuZWwpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwZW5kRG9tRWxlbWVudFRvUGFyZW50O1xyXG4iLCJjb25zdCBkb21FbGVtZW50RmFjdG9yeSA9ICh0eXBlLCBjb250ZW50ID0gJycsIGNsYXNzTmFtZSA9ICcnKSA9PiB7XHJcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG4gIGVsLnRleHRDb250ZW50ID0gY29udGVudDtcclxuICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBlbCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9tRWxlbWVudEZhY3Rvcnk7XHJcbiIsImltcG9ydCBkb21FbGVtZW50RmFjdG9yeSBmcm9tICcuL2RvbUVsZW1lbnRGYWN0b3J5JztcclxuaW1wb3J0IGFwcGVuZERvbUVsZW1lbnRUb1BhcmVudCBmcm9tICcuL2FwcGVuZERvbUVsZW1lbnRUb1BhcmVudCc7XHJcbmltcG9ydCB7IGhhbmRsZVRvZG9MaXN0TW9kdWxlIGFzIHRvZG9MaXN0TW9kdWxlIH0gZnJvbSAnLi4vbW9kdWxlcy9oYW5kbGVUb2RvJztcclxuXHJcbmNvbnN0IGVkaXRUb2RvUHJpb3JpdHkgPSAodG9kbywgbmV3UHJpb3JpdHlWYWx1ZSkgPT4ge1xyXG4gIHRvZG9MaXN0TW9kdWxlLnVwZGF0ZVRvZG9Qcmlvcml0eSh0b2RvLCBuZXdQcmlvcml0eVZhbHVlKTtcclxufTtcclxuXHJcbmNvbnN0IGRpc3BsYXlFZGl0VG9kb1ByaW9yaXR5UG9wVXAgPSAocG9wVXApID0+IHtcclxuICBjb25zdCBwcmlvcml0eVBvcFVwID0gcG9wVXA7XHJcbiAgY29uc3QgcG9wVXBEaXNwbGF5ID0gcHJpb3JpdHlQb3BVcC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZSdcclxuICAgID8gJ2lubGluZScgOiAnbm9uZSc7XHJcblxyXG4gIHByaW9yaXR5UG9wVXAuc3R5bGUuZGlzcGxheSA9IHBvcFVwRGlzcGxheTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUVkaXRQcmlvcml0eVBvcFVwID0gKHRvZG8sIHJlbG9hZFRvZG9GdW5jdGlvbkZyb21VSSkgPT4ge1xyXG4gIGNvbnN0IHByaW9yaXR5Q2hvaWNlID0gWydoaWdoJywgJ21lZGl1bScsICdsb3cnXTtcclxuICBjb25zdCBwb3BVcCA9IGRvbUVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnJywgJ3BvcC11cC1wcmlvcml0eScpO1xyXG5cclxuICBwcmlvcml0eUNob2ljZS5mb3JFYWNoKChjaG9pY2UpID0+IHtcclxuICAgIGNvbnN0IHByaW9yaXR5QnRuID0gZG9tRWxlbWVudEZhY3RvcnkoJ2J1dHRvbicsIGAke2Nob2ljZX1gLCAncHJpb3JpdHktY2hvaWNlLWJ0bicpO1xyXG5cclxuICAgIHByaW9yaXR5QnRuLmVsLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ZWQgPSBwcmlvcml0eUJ0bi5lbC50ZXh0Q29udGVudDtcclxuICAgICAgZWRpdFRvZG9Qcmlvcml0eSh0b2RvLCBwcmlvcml0eVNlbGVjdGVkKTtcclxuICAgICAgcmVsb2FkVG9kb0Z1bmN0aW9uRnJvbVVJKCk7XHJcbiAgICB9O1xyXG4gICAgYXBwZW5kRG9tRWxlbWVudFRvUGFyZW50KHBvcFVwLmVsLCBwcmlvcml0eUJ0bik7XHJcbiAgfSk7XHJcbiAgcG9wVXAuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICByZXR1cm4gcG9wVXA7XHJcbn07XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5RWRpdFRvZG9Qcmlvcml0eVBvcFVwLCBjcmVhdGVFZGl0UHJpb3JpdHlQb3BVcCB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuaW1wb3J0IHsgdG9kb0ZhY3RvcnksIGhhbmRsZVRvZG9MaXN0TW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2hhbmRsZVRvZG8nO1xyXG5pbXBvcnQgeyBwcm9qZWN0RmFjdG9yeSwgaGFuZGxlUHJvamVjdExpc3RNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvaGFuZGxlUHJvamVjdCc7XHJcbmltcG9ydCBhbmltYXRpb25zVUkgZnJvbSAnLi91dGlsaXRpZXMvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCBVSSBmcm9tICcuL21vZHVsZXMvVUknO1xyXG5cclxuY29uc3QgbmV3VG9kbyA9IHRvZG9GYWN0b3J5KFxyXG4gICdzdGFydCByZWFjdCcsXHJcbiAgJ2J1eSBtaWxrIGZvciBsdW5lJyxcclxuICAnSmF2YVNjcmlwdCcsXHJcbiAgJ2xvdycsXHJcbik7XHJcbmNvbnN0IHRvZG8zID0gdG9kb0ZhY3RvcnkoXHJcbiAgJ3JlYWQgWW91IGRvbnQga25vdyBKUycsXHJcbiAgJ2J1eSB0aGUgYm9vayBmaXJzdCcsXHJcbiAgJ0phdmFTY3JpcHQnLFxyXG4gICdoaWdoJyxcclxuKTtcclxuY29uc3QgdG9kbzQgPSB0b2RvRmFjdG9yeSgnd2F0Y2ggYmFyY2Vsb25hJywgJ2xlYWd1ZSBkZXMgY2hhbXBpb3NuJywgJ2Zvb3RiYWxsJyk7XHJcbmNvbnN0IHRvZG81ID0gdG9kb0ZhY3RvcnkoJ2Fub3RoZXIgdG9kbycsICdpdHMgY29vbCcpO1xyXG5cclxuaGFuZGxlVG9kb0xpc3RNb2R1bGUuYWRkVG9kbyhuZXdUb2RvKTtcclxuaGFuZGxlVG9kb0xpc3RNb2R1bGUuYWRkVG9kbyh0b2RvMyk7XHJcbmhhbmRsZVRvZG9MaXN0TW9kdWxlLmFkZFRvZG8odG9kbzQpO1xyXG5oYW5kbGVUb2RvTGlzdE1vZHVsZS5hZGRUb2RvKHRvZG81KTtcclxuXHJcbmNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeSgnSmF2YVNjcmlwdCcpO1xyXG5jb25zdCBmb290YmFsbCA9IHByb2plY3RGYWN0b3J5KCdmb29UYmFsbCcpO1xyXG5jb25zdCBpbmJveCA9IHByb2plY3RGYWN0b3J5KCdpbmJveCcsIHRydWUpO1xyXG5jb25zdCB0b2RheSA9IHByb2plY3RGYWN0b3J5KCd0b2RheScsIHRydWUpO1xyXG5jb25zdCB1cGNvbWluZyA9IHByb2plY3RGYWN0b3J5KCd1cGNvbWluZycsIHRydWUpO1xyXG5cclxuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcclxuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkUHJvamVjdChmb290YmFsbCk7XHJcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFByb2plY3QoaW5ib3gpO1xyXG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5hZGRQcm9qZWN0KHRvZGF5KTtcclxuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkUHJvamVjdCh1cGNvbWluZyk7XHJcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFRvZG9Ub1Byb2plY3QobmV3UHJvamVjdC50aXRsZSwgdG9kbzMpO1xyXG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5hZGRUb2RvVG9Qcm9qZWN0KGZvb3RiYWxsLnRpdGxlLCB0b2RvNCk7XHJcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFRvZG9Ub1Byb2plY3QobmV3UHJvamVjdC50aXRsZSwgdG9kbzMpO1xyXG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5hZGRUb2RvVG9Qcm9qZWN0KG5ld1Byb2plY3QudGl0bGUsIHRvZG8zKTtcclxuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkVG9kb1RvUHJvamVjdChuZXdQcm9qZWN0LnRpdGxlLCB0b2RvMyk7XHJcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFRvZG9Ub1Byb2plY3QobmV3UHJvamVjdC50aXRsZSwgbmV3VG9kbyk7XHJcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFRvZG9Ub1Byb2plY3QobmV3UHJvamVjdC50aXRsZSwgdG9kbzMpO1xyXG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5hZGRUb2RvVG9Qcm9qZWN0KGluYm94LnRpdGxlLCB0b2RvNSk7XHJcblxyXG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5nZXRQcm9qZWN0QnlOYW1lKCdqYXZBc2NSaXB0Jyk7XHJcblxyXG5oYW5kbGVUb2RvTGlzdE1vZHVsZS5nZXRUb2RvTGlzdCgpO1xyXG5cclxuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuZ2V0QWxsUHJvamVjdCgpO1xyXG5cclxuVUkubG9hZFRvZG9MaXN0KCk7XHJcblVJLmxvYWRQcm9qZWN0TGlzdCgpO1xyXG5VSS5hZGRQcm9qZWN0KCk7XHJcblVJLmFkZFRvZG8oKTtcclxuVUkuQWRkRXZlbnRMaXN0ZW5lclRvRmV0Y2hUb2RvSW5Qcm9qZWN0KCk7XHJcbmFuaW1hdGlvbnNVSS5oaWRlQXNpZGUoKTtcclxuYW5pbWF0aW9uc1VJLnRvZ2dsZUNsYXNzT25TbWFsbGVyU2NyZWVuKCk7XHJcbmFuaW1hdGlvbnNVSS50b2dnbGVEcm9wZG93UHJvamVjdHNMaXN0T25DbGljaygpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=