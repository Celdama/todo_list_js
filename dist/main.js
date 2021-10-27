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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n}\n\n.full-main {\n  left: 0px !important;\n}\n\n.show-aside {\n  transform: translateX(0);\n}\n\n.hide-aside {\n  transform: translateX(-400px);\n}\n\n.collapse {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease-out;\n}\n\n.not-collapse {\n  max-height: 300px;\n}\n\n.visible-edit-wrapper-todo {\n  display: inline;\n}\n\n.hidden-edit-wrapper-todo {\n  display: none;\n}\n\nhtml {\n  font-size: 10px;\n  overflow-y: hidden;\n}\nhtml body #content {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.6rem;\n  height: 100%;\n}\nhtml body #content header {\n  display: flex;\n  background-color: #db4c3f;\n  padding: 1rem 1.8rem;\n}\nhtml body #content header button {\n  border: none;\n  padding: 0.2rem;\n  border-radius: 2px;\n  background-color: transparent;\n  display: flex;\n  margin-left: 1.5rem;\n}\nhtml body #content header button:hover {\n  cursor: pointer;\n  background-color: rgba(255, 255, 255, 0.3);\n}\nhtml body #content #app {\n  display: flex;\n  position: relative;\n  overflow-y: hidden;\n  height: 100vh;\n}\nhtml body #content #app #aside-informations {\n  position: absolute;\n  background-color: #f7f7f7;\n  z-index: 10;\n  width: 300px;\n  height: 100%;\n  transition: transform 0.6s ease;\n}\nhtml body #content #app #aside-informations .todo-informations {\n  padding: 1.2rem 0.6rem 1.2rem 1.2rem;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list {\n  padding: 2rem 0 2rem 2rem;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list li {\n  display: flex;\n  align-items: center;\n  font-size: 1.4rem;\n  font-weight: 400;\n  list-style-type: none;\n  padding: 1rem 0.8rem;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list li .main-list-icon {\n  margin-right: 1rem;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-main-list {\n  border-radius: 5px;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-main-list:hover {\n  cursor: pointer;\n  background-color: #ececec;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-main-list span {\n  color: #202020;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 2rem 0 0 0;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title {\n  display: flex;\n  width: 100%;\n  padding: 1rem 0 1rem 0.8rem;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title .dropdown-projects-list {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  border: none;\n  background-color: transparent;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title .dropdown-projects-list:hover {\n  cursor: pointer;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title .dropdown-projects-list .bi-chevron-right {\n  transform: rotate(0);\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title .dropdown-projects-list span {\n  color: #333333;\n  font-weight: bold;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title .add-project {\n  width: 10%;\n  display: flex;\n  justify-content: center;\n  border: none;\n  background-color: transparent;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list .display-projects .display-projects-title .add-project:hover {\n  cursor: pointer;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list {\n  width: 100%;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project {\n  display: flex;\n  align-items: center;\n  border-radius: 5px;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project:hover {\n  cursor: pointer;\n  background-color: #ececec;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project:hover .delete-project-btn {\n  opacity: 1;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project .project-info {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem 0.9rem;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project .project-info .circle-color {\n  width: 13%;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project .project-info .project-name {\n  width: 100%;\n  font-weight: lighter;\n  letter-spacing: 0.5px;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project .delete-project-btn {\n  width: 10%;\n  opacity: 0;\n  border: none;\n  background-color: transparent;\n  display: flex;\n  justify-content: center;\n}\nhtml body #content #app #aside-informations .todo-informations #projects-main-list #display-projects-list .project .delete-project-btn:hover {\n  cursor: pointer;\n}\nhtml body #content #app #main-informations {\n  position: absolute;\n  justify-self: center;\n  left: 300px;\n  width: calc(100% - 300px);\n  transition: left 0.6s ease;\n}\nhtml body #content #app #main-informations .display-todo-list {\n  padding: 6rem;\n}\nhtml body #content #app #main-informations .display-todo-list .todo-list {\n  padding: 2rem;\n}\nhtml body #content #app #main-informations .display-todo-list .todo-list .todo-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 0;\n  border-bottom: 1px solid #f0f0f0;\n  color: #808080;\n}\nhtml body #content #app #main-informations .display-todo-list .todo-list .todo-item .left {\n  display: flex;\n}\nhtml body #content #app #main-informations .display-todo-list .todo-list .todo-item .left button {\n  padding: 0 5px;\n  border: none;\n  background-color: transparent;\n}\nhtml body #content #app #main-informations .display-todo-list .todo-list .todo-item .left div {\n  color: #202020;\n  padding-left: 10px;\n  font-size: 1.4rem;\n  line-height: 21px;\n}\nhtml body #content #app #main-informations .display-todo-list .todo-list .todo-item .right {\n  display: flex;\n}\nhtml body #content #app #main-informations .display-todo-list .todo-list .todo-item .right .priority-wrapper {\n  position: relative;\n}\nhtml body #content #app #main-informations .display-todo-list .todo-list .todo-item .right .priority-wrapper .pop-up-priority {\n  border: 1px solid green;\n  padding: 10px;\n  width: 100px;\n  position: absolute;\n  background-color: paleturquoise;\n  right: 38px;\n}\nhtml body #content #app #main-informations .display-todo-list .todo-list .todo-item .right button {\n  padding: 5px;\n  background-color: transparent;\n  margin: 0 3px;\n  border: none;\n  border-radius: 5px;\n}\nhtml body #content #app #main-informations .display-todo-list .todo-list .todo-item .right button:hover {\n  background-color: #ececec;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/styles/base.scss","webpack://./src/style.scss","webpack://./src/styles/animation.scss","webpack://./src/styles/variables.scss"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n","@import './styles/base.scss';\r\n@import './styles/variables.scss';\r\n@import './styles/animation.scss';\r\n\r\nhtml {\r\n  font-size: $base-font-size;\r\n  overflow-y: hidden;\r\n\r\n  body {\r\n    #content {\r\n      display: flex;\r\n      flex-direction: column;\r\n      font-size: 1.6rem;\r\n      height: 100%;\r\n\r\n      header {\r\n        display: flex;\r\n        background-color: $header-color;\r\n        padding: 1rem 1.8rem;\r\n\r\n        button {\r\n          border: none;\r\n          padding: 0.2rem;\r\n          border-radius: 2px;\r\n          background-color: transparent;\r\n          display: flex;\r\n          margin-left: 1.5rem;\r\n\r\n          &:hover {\r\n            cursor: pointer;\r\n            background-color: $header-button-hover;\r\n          }\r\n        }\r\n      }\r\n\r\n      #app {\r\n        display: flex;\r\n        position: relative;\r\n        overflow-y: hidden;\r\n        height: 100vh;\r\n\r\n        #aside-informations {\r\n          position: absolute;\r\n          background-color: $aside-color;\r\n          z-index: 10;\r\n          width: 300px;\r\n          height: 100%;\r\n          transition: transform 0.6s ease;\r\n\r\n          .todo-informations {\r\n            padding: 1.2rem 0.6rem 1.2rem 1.2rem;\r\n\r\n            #projects-main-list {\r\n              padding: 2rem 0 2rem 2rem;\r\n\r\n              li {\r\n                display: flex;\r\n                align-items: center;\r\n                font-size: 1.4rem;\r\n                font-weight: 400;\r\n                list-style-type: none;\r\n                padding: 1rem 0.8rem;\r\n\r\n                .main-list-icon {\r\n                  margin-right: 1rem;\r\n                }\r\n              }\r\n\r\n              .display-main-list {\r\n                border-radius: 5px;\r\n\r\n                &:hover {\r\n                  cursor: pointer;\r\n                  background-color: $aside-color-hover;\r\n                }\r\n\r\n                span {\r\n                  color: $main-list-color;\r\n                }\r\n              }\r\n\r\n              .display-projects {\r\n                display: flex;\r\n                flex-direction: column;\r\n                justify-content: center;\r\n                align-items: flex-start;\r\n                padding: 2rem 0 0 0;\r\n\r\n                .display-projects-title {\r\n                  display: flex;\r\n                  width: 100%;\r\n                  padding: 1rem 0 1rem 0.8rem;\r\n\r\n                  .dropdown-projects-list {\r\n                    display: flex;\r\n                    align-items: center;\r\n                    width: 100%;\r\n                    border: none;\r\n                    background-color: transparent;\r\n\r\n                    &:hover {\r\n                      cursor: pointer;\r\n                    }\r\n\r\n                    .bi-chevron-right {\r\n                      transform: rotate(0);\r\n                    }\r\n\r\n                    span {\r\n                      color: #333333;\r\n                      font-weight: bold;\r\n                    }\r\n                  }\r\n\r\n                  .add-project {\r\n                    width: 10%;\r\n                    display: flex;\r\n                    justify-content: center;\r\n                    border: none;\r\n                    background-color: transparent;\r\n\r\n                    &:hover {\r\n                      cursor: pointer;\r\n                    }\r\n                  }\r\n                }\r\n              }\r\n\r\n              #display-projects-list {\r\n                width: 100%;\r\n\r\n                .project {\r\n                  display: flex;\r\n                  align-items: center;\r\n                  border-radius: 5px;\r\n\r\n                  &:hover {\r\n                    cursor: pointer;\r\n                    background-color: $aside-color-hover;\r\n\r\n                    .delete-project-btn {\r\n                      opacity: 1;\r\n                    }\r\n                  }\r\n                  .project-info {\r\n                    display: flex;\r\n                    width: 100%;\r\n                    justify-content: center;\r\n                    align-items: center;\r\n                    padding: 1rem 0.9rem;\r\n\r\n                    .circle-color {\r\n                      width: 13%;\r\n                    }\r\n\r\n                    .project-name {\r\n                      width: 100%;\r\n                      font-weight: lighter;\r\n                      letter-spacing: 0.5px;\r\n                    }\r\n                  }\r\n\r\n                  .delete-project-btn {\r\n                    width: 10%;\r\n                    opacity: 0;\r\n                    border: none;\r\n                    background-color: transparent;\r\n                    display: flex;\r\n                    justify-content: center;\r\n\r\n                    &:hover {\r\n                      cursor: pointer;\r\n                    }\r\n                  }\r\n                }\r\n              }\r\n            }\r\n          }\r\n        }\r\n\r\n        #main-informations {\r\n          position: absolute;\r\n          justify-self: center;\r\n          left: 300px;\r\n          width: calc(100% - 300px);\r\n          transition: left 0.6s ease;\r\n\r\n          .display-todo-list {\r\n            padding: 6rem;\r\n\r\n            .todo-list {\r\n              padding: 2rem;\r\n\r\n              .todo-item {\r\n                display: flex;\r\n                justify-content: space-between;\r\n                align-items: center;\r\n                padding: 1rem 0;\r\n                border-bottom: 1px solid #f0f0f0;\r\n                color: #808080;\r\n                // background-color: paleturquoise;\r\n\r\n                // button {\r\n                //   display: flex;\r\n                //   flex-direction: row;\r\n                // }\r\n\r\n                .left {\r\n                  display: flex;\r\n                  button {\r\n                    padding: 0 5px;\r\n                    // display: flex;\r\n                    border: none;\r\n                    background-color: transparent;\r\n                  }\r\n                  div {\r\n                    color: $main-list-color;\r\n                    padding-left: 10px;\r\n                    font-size: 1.4rem;\r\n                    line-height: 21px;\r\n                  }\r\n                }\r\n                .right {\r\n                  display: flex;\r\n\r\n                  .priority-wrapper {\r\n                    // outline: 1px solid red;\r\n                    position: relative;\r\n\r\n                    .pop-up-priority {\r\n                      // display: none;\r\n                      border: 1px solid green;\r\n                      padding: 10px;\r\n                      width: 100px;\r\n                      position: absolute;\r\n                      background-color: paleturquoise;\r\n                      right: 38px;\r\n                    }\r\n                  }\r\n                  button {\r\n                    padding: 5px;\r\n                    background-color: transparent;\r\n                    margin: 0 3px;\r\n                    border: none;\r\n                    border-radius: 5px;\r\n\r\n                    &:hover {\r\n                      background-color: $aside-color-hover;\r\n                      cursor: pointer;\r\n                    }\r\n                  }\r\n                }\r\n              }\r\n            }\r\n          }\r\n        }\r\n        #edit-todo-wrapper{\r\n          // display: none;\r\n          // display: ;\r\n\r\n\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n",".full-main {\r\n  left: 0px !important;\r\n}\r\n\r\n.show-aside {\r\n  transform: translateX(0);\r\n}\r\n\r\n.hide-aside {\r\n  transform: translateX(-400px);\r\n}\r\n\r\n.collapse {\r\n  max-height: 0;\r\n  overflow: hidden;\r\n  transition: max-height 0.3s ease-out;\r\n}\r\n\r\n.not-collapse {\r\n  max-height: 300px;\r\n}\r\n\r\n.visible-edit-wrapper-todo {\r\n  display: inline;\r\n}\r\n\r\n.hidden-edit-wrapper-todo {\r\n  display: none;\r\n}","$body-color: blue;\r\n$header-color: #db4c3f;\r\n$header-button-hover: rgba(255, 255, 255, 0.3);\r\n$aside-color: #f7f7f7;\r\n$aside-color-hover: #ececec;\r\n$main-list-color: #202020;\r\n\r\n$base-font-size: 10px;\r\n"],"sourceRoot":""}]);
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
  console.log('UI loaded');

  const renderTodoItem = (todo) => {
    const todoItem = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'todo-item');
    const leftSideOfTodoItem = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'left');
    const rightSideOfTodoItem = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'right');
    const editWrapper = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'edit-wrapper');
    const priorityWrapper = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'priority-wrapper');
    const deleteWrapper = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'delete-wrapper');
    const doneWrapper = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'done-wrapper');
    const todoTitleWrapper = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'title-wrapper');
    const doneBtn = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('button');
    const editBtn = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('button');
    const deleteBtn = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('button');
    const priorityBtn = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('button');
    const displayTodoTitle = (0,_utilities_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(
      'div',
      `${todo.title}`,
      'todo-title',
    );

    let colorFlagPriority = '#ff9933';

    if (todo.priority === 'high') {
      colorFlagPriority = '#db4c3f';
    } else if (todo.priority === 'low') {
      colorFlagPriority = '#3f73d6';
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

    deleteBtn.el.onclick = () => deleteTodo(todo);
    const popUpPriority = (0,_utilities_priorityPopUp__WEBPACK_IMPORTED_MODULE_4__.createEditPriorityPopUp)(todo, () => loadTodoList(todo.project));
    priorityBtn.el.onclick = () => (0,_utilities_priorityPopUp__WEBPACK_IMPORTED_MODULE_4__.displayEditTodoPriorityPopUp)(popUpPriority);
    editBtn.el.onclick = (todo, () => updateTodo(todo));

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
    deleteProjectBtn.el.onclick = () => deleteProject(project);

    (0,_utilities_appendDomElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(projectInfo.el, circleColorProject, projectTitle);
    (0,_utilities_appendDomElementToParent__WEBPACK_IMPORTED_MODULE_1__["default"])(wrapperProject.el, projectInfo, deleteProjectBtn);

    return wrapperProject.el;
  };

  const addEventListenerToUpdateTodo = (editForm, wrapper) => {
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      // check if project value change
      const projectInputValue = document.querySelector('.project-input');
      let newProject = projectInputValue.value;
      const olderProject = projectInputValue.placeholder;

      if (!newProject) {
        newProject = olderProject;
      }

      const todoUpdatedInfo = getUpdateTodoInfo();
      const formId = editForm.getAttribute('data-id');
      const updateThisTodo = _handleTodo__WEBPACK_IMPORTED_MODULE_2__.handleTodoListModule.getTodo(formId);

      if (formId === updateThisTodo.id) {
        const todoUpdated = _handleTodo__WEBPACK_IMPORTED_MODULE_2__.handleTodoListModule.updateTodo(updateThisTodo, todoUpdatedInfo);

        // this mean i have to moove todo in another folder project
        if (olderProject !== newProject) {
          _handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.deleteTodoInThisProject(olderProject, updateThisTodo.id);
          _handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addTodoToProject(todoUpdated.project, todoUpdated);
          loadTodoList(todoUpdated.project);
        } else {
          loadTodoList(olderProject);
        }

        wrapper.classList.toggle('hidden-edit-wrapper-todo');
        wrapper.classList.toggle('visible-edit-wrapper-todo');
      }
      editForm.reset();
    });
  };

  const getUpdateTodoInfo = () => {
    const updatedTodo = Array.from(
      document.querySelectorAll('#edit-todo-form input'),
    ).reduce((acc, input) => ({ ...acc, [input.id]: input.value || input.placeholder }), {});

    return updatedTodo;
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

  const updateTodo = (todo) => {
    const editTodoWrapper = document.getElementById('edit-todo-wrapper');
    editTodoWrapper.classList.remove('hidden-edit-wrapper-todo');
    editTodoWrapper.classList.add('visible-edit-wrapper-todo');

    const editTodoForm = document.getElementById('edit-todo-form');
    editTodoForm.dataset.id = todo.id;

    fillPlaceHolderFormEditWithTodoData(todo);
    addEventListenerToUpdateTodo(editTodoForm, editTodoWrapper);
  };

  const getTodoInfo = () => {
    const newTodo = Array.from(
      document.querySelectorAll('#add-todo-form input'),
    ).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});

    return newTodo;
  };

  const getProjectToAddInfo = () => {
    const projectTitle = document.querySelector(
      '#add-project-form input',
    ).value;

    return projectTitle.toLowerCase();
  };

  const addTodoUI = () => {
    const addTodoForm = document.getElementById('add-todo-form');

    addTodoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newTodo = (0,_handleTodo__WEBPACK_IMPORTED_MODULE_2__.todoFactory2)(getTodoInfo());
      _handleTodo__WEBPACK_IMPORTED_MODULE_2__.handleTodoListModule.addTodo(newTodo);
      _handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addTodoToProject(newTodo.project, newTodo);
      loadTodoList(newTodo.project);
    });
  };

  const AddEventListenerToFetchTodoInProject = () => {
    const projectName = document.querySelectorAll(
      '.display-main-list, .project-info',
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
      const newProject = (0,_handleProject__WEBPACK_IMPORTED_MODULE_3__.projectFactory)(newProjectTitle);
      _handleProject__WEBPACK_IMPORTED_MODULE_3__.handleProjectListModule.addProject(newProject);
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

  const toggleDropdowProjectsList = () => {
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

  return {
    loadTodoList,
    loadProjectList,
    addTodoUI,
    addProjectUI,
    AddEventListenerToFetchTodoInProject,
    hideAsideSide,
    toggleClassOnSmallerScreen,
    toggleDropdowProjectsList,
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

  const updateTodo = (olderTodoVersion, updateTodoVersion) => {
    const todoUpdated = Object.assign(olderTodoVersion, updateTodoVersion);
    return todoUpdated;
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




const editTodoPriorityUi = (todo, newPriorityValue) => {
  _modules_handleTodo__WEBPACK_IMPORTED_MODULE_2__.handleTodoListModule.updateTodoPriority(todo, newPriorityValue);
};

const displayEditTodoPriorityPopUp = (popUp) => {
  const priorityPopUp = popUp;
  if (popUp.el.style.display === 'none') {
    priorityPopUp.el.style.display = 'inline';
  } else {
    priorityPopUp.el.style.display = 'none';
  }
};

const createEditPriorityPopUp = (todo, reloadTodoFunctionFromUI) => {
  const priorityChoice = ['high', 'medium', 'low'];
  const popUp = (0,_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'pop-up-priority');
  priorityChoice.forEach((choice) => {
    const priorityBtn = (0,_domElementFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('button', `${choice}`, 'priority-choice');
    priorityBtn.el.onclick = () => {
      const newPriority = priorityBtn.el.textContent;
      editTodoPriorityUi(todo, newPriority);
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
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");






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

_modules_UI__WEBPACK_IMPORTED_MODULE_4__["default"].loadTodoList();
_modules_UI__WEBPACK_IMPORTED_MODULE_4__["default"].loadProjectList();
_modules_UI__WEBPACK_IMPORTED_MODULE_4__["default"].addProjectUI();
_modules_UI__WEBPACK_IMPORTED_MODULE_4__["default"].addTodoUI();
_modules_UI__WEBPACK_IMPORTED_MODULE_4__["default"].AddEventListenerToFetchTodoInProject();
_modules_UI__WEBPACK_IMPORTED_MODULE_4__["default"].hideAsideSide();
_modules_UI__WEBPACK_IMPORTED_MODULE_4__["default"].toggleClassOnSmallerScreen();
_modules_UI__WEBPACK_IMPORTED_MODULE_4__["default"].toggleDropdowProjectsList();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxVQUFVLFlBQVksT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFlBQVksT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1B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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxFQUFFLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlXa0I7QUFDZ0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0RBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkZBQW9EO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEZmO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdEQUFNO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLE1BQU0sZ0RBQU07QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDMkQ7Ozs7Ozs7Ozs7Ozs7OztBQ3RFM0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSx3QkFBd0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDTnhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFVBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ptQjtBQUNjO0FBQ0w7QUFDN0Q7QUFDQTtBQUNBLEVBQUUsd0ZBQXVDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOERBQWlCO0FBQ2pDO0FBQ0Esd0JBQXdCLDhEQUFpQixjQUFjLE9BQU87QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscUVBQXdCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNpRTs7Ozs7OztVQ2pDakU7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDQztBQUNtRDtBQUNTO0FBQ3BEO0FBQzlCO0FBQ0EsZ0JBQWdCLGdFQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdFQUFXO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdFQUFXO0FBQ3pCLGNBQWMsZ0VBQVc7QUFDekI7QUFDQSw2RUFBNEI7QUFDNUIsNkVBQTRCO0FBQzVCLDZFQUE0QjtBQUM1Qiw2RUFBNEI7QUFDNUI7QUFDQSxtQkFBbUIsc0VBQWM7QUFDakMsaUJBQWlCLHNFQUFjO0FBQy9CLGNBQWMsc0VBQWM7QUFDNUIsY0FBYyxzRUFBYztBQUM1QixpQkFBaUIsc0VBQWM7QUFDL0I7QUFDQSxzRkFBa0M7QUFDbEMsc0ZBQWtDO0FBQ2xDLHNGQUFrQztBQUNsQyxzRkFBa0M7QUFDbEMsc0ZBQWtDO0FBQ2xDLDRGQUF3QztBQUN4Qyw0RkFBd0M7QUFDeEMsNEZBQXdDO0FBQ3hDLDRGQUF3QztBQUN4Qyw0RkFBd0M7QUFDeEMsNEZBQXdDO0FBQ3hDLDRGQUF3QztBQUN4Qyw0RkFBd0M7QUFDeEM7QUFDQSw0RkFBd0M7QUFDeEM7QUFDQSxpRkFBZ0M7QUFDaEM7QUFDQSx5RkFBcUM7QUFDckM7QUFDQSxnRUFBZTtBQUNmLG1FQUFrQjtBQUNsQixnRUFBZTtBQUNmLDZEQUFZO0FBQ1osd0ZBQXVDO0FBQ3ZDLGlFQUFnQjtBQUNoQiw4RUFBNkI7QUFDN0IsNkVBQTRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZHVsZXMvaGFuZGxlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbW9kdWxlcy9oYW5kbGVUb2RvLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy91dGlsaXRpZXMvYXBwZW5kRG9tRWxlbWVudFRvUGFyZW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy91dGlsaXRpZXMvZG9tRWxlbWVudEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3V0aWxpdGllcy9wcmlvcml0eVBvcFVwLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uZnVsbC1tYWluIHtcXG4gIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2hvdy1hc2lkZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxufVxcblxcbi5oaWRlLWFzaWRlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDAwcHgpO1xcbn1cXG5cXG4uY29sbGFwc2Uge1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuM3MgZWFzZS1vdXQ7XFxufVxcblxcbi5ub3QtY29sbGFwc2Uge1xcbiAgbWF4LWhlaWdodDogMzAwcHg7XFxufVxcblxcbi52aXNpYmxlLWVkaXQtd3JhcHBlci10b2RvIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmhpZGRlbi1lZGl0LXdyYXBwZXItdG9kbyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCBoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjRjM2Y7XFxuICBwYWRkaW5nOiAxcmVtIDEuOHJlbTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50IGhlYWRlciBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50IGhlYWRlciBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcbiAgei1pbmRleDogMTA7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyB7XFxuICBwYWRkaW5nOiAxLjJyZW0gMC42cmVtIDEuMnJlbSAxLjJyZW07XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3Qge1xcbiAgcGFkZGluZzogMnJlbSAwIDJyZW0gMnJlbTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDFyZW0gMC44cmVtO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0IGxpIC5tYWluLWxpc3QtaWNvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3QgLmRpc3BsYXktbWFpbi1saXN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAuZGlzcGxheS1tYWluLWxpc3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAuZGlzcGxheS1tYWluLWxpc3Qgc3BhbiB7XFxuICBjb2xvcjogIzIwMjAyMDtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAuZGlzcGxheS1wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAycmVtIDAgMCAwO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0IC5kaXNwbGF5LXByb2plY3RzIC5kaXNwbGF5LXByb2plY3RzLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDAuOHJlbTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAuZGlzcGxheS1wcm9qZWN0cyAuZGlzcGxheS1wcm9qZWN0cy10aXRsZSAuZHJvcGRvd24tcHJvamVjdHMtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3QgLmRpc3BsYXktcHJvamVjdHMgLmRpc3BsYXktcHJvamVjdHMtdGl0bGUgLmRyb3Bkb3duLXByb2plY3RzLWxpc3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0IC5kaXNwbGF5LXByb2plY3RzIC5kaXNwbGF5LXByb2plY3RzLXRpdGxlIC5kcm9wZG93bi1wcm9qZWN0cy1saXN0IC5iaS1jaGV2cm9uLXJpZ2h0IHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0IC5kaXNwbGF5LXByb2plY3RzIC5kaXNwbGF5LXByb2plY3RzLXRpdGxlIC5kcm9wZG93bi1wcm9qZWN0cy1saXN0IHNwYW4ge1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAuZGlzcGxheS1wcm9qZWN0cyAuZGlzcGxheS1wcm9qZWN0cy10aXRsZSAuYWRkLXByb2plY3Qge1xcbiAgd2lkdGg6IDEwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0IC5kaXNwbGF5LXByb2plY3RzIC5kaXNwbGF5LXByb2plY3RzLXRpdGxlIC5hZGQtcHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3QgI2Rpc3BsYXktcHJvamVjdHMtbGlzdCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAjZGlzcGxheS1wcm9qZWN0cy1saXN0IC5wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0ICNkaXNwbGF5LXByb2plY3RzLWxpc3QgLnByb2plY3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAjZGlzcGxheS1wcm9qZWN0cy1saXN0IC5wcm9qZWN0OmhvdmVyIC5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAjZGlzcGxheS1wcm9qZWN0cy1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAwLjlyZW07XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNhc2lkZS1pbmZvcm1hdGlvbnMgLnRvZG8taW5mb3JtYXRpb25zICNwcm9qZWN0cy1tYWluLWxpc3QgI2Rpc3BsYXktcHJvamVjdHMtbGlzdCAucHJvamVjdCAucHJvamVjdC1pbmZvIC5jaXJjbGUtY29sb3Ige1xcbiAgd2lkdGg6IDEzJTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI2FzaWRlLWluZm9ybWF0aW9ucyAudG9kby1pbmZvcm1hdGlvbnMgI3Byb2plY3RzLW1haW4tbGlzdCAjZGlzcGxheS1wcm9qZWN0cy1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LWluZm8gLnByb2plY3QtbmFtZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0ICNkaXNwbGF5LXByb2plY3RzLWxpc3QgLnByb2plY3QgLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICB3aWR0aDogMTAlO1xcbiAgb3BhY2l0eTogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjYXNpZGUtaW5mb3JtYXRpb25zIC50b2RvLWluZm9ybWF0aW9ucyAjcHJvamVjdHMtbWFpbi1saXN0ICNkaXNwbGF5LXByb2plY3RzLWxpc3QgLnByb2plY3QgLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNtYWluLWluZm9ybWF0aW9ucyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGxlZnQ6IDMwMHB4O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcXG4gIHRyYW5zaXRpb246IGxlZnQgMC42cyBlYXNlO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjbWFpbi1pbmZvcm1hdGlvbnMgLmRpc3BsYXktdG9kby1saXN0IHtcXG4gIHBhZGRpbmc6IDZyZW07XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNtYWluLWluZm9ybWF0aW9ucyAuZGlzcGxheS10b2RvLWxpc3QgLnRvZG8tbGlzdCB7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjbWFpbi1pbmZvcm1hdGlvbnMgLmRpc3BsYXktdG9kby1saXN0IC50b2RvLWxpc3QgLnRvZG8taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xcbiAgY29sb3I6ICM4MDgwODA7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNtYWluLWluZm9ybWF0aW9ucyAuZGlzcGxheS10b2RvLWxpc3QgLnRvZG8tbGlzdCAudG9kby1pdGVtIC5sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbmh0bWwgYm9keSAjY29udGVudCAjYXBwICNtYWluLWluZm9ybWF0aW9ucyAuZGlzcGxheS10b2RvLWxpc3QgLnRvZG8tbGlzdCAudG9kby1pdGVtIC5sZWZ0IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjbWFpbi1pbmZvcm1hdGlvbnMgLmRpc3BsYXktdG9kby1saXN0IC50b2RvLWxpc3QgLnRvZG8taXRlbSAubGVmdCBkaXYge1xcbiAgY29sb3I6ICMyMDIwMjA7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjbWFpbi1pbmZvcm1hdGlvbnMgLmRpc3BsYXktdG9kby1saXN0IC50b2RvLWxpc3QgLnRvZG8taXRlbSAucmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI21haW4taW5mb3JtYXRpb25zIC5kaXNwbGF5LXRvZG8tbGlzdCAudG9kby1saXN0IC50b2RvLWl0ZW0gLnJpZ2h0IC5wcmlvcml0eS13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI21haW4taW5mb3JtYXRpb25zIC5kaXNwbGF5LXRvZG8tbGlzdCAudG9kby1saXN0IC50b2RvLWl0ZW0gLnJpZ2h0IC5wcmlvcml0eS13cmFwcGVyIC5wb3AtdXAtcHJpb3JpdHkge1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGFsZXR1cnF1b2lzZTtcXG4gIHJpZ2h0OiAzOHB4O1xcbn1cXG5odG1sIGJvZHkgI2NvbnRlbnQgI2FwcCAjbWFpbi1pbmZvcm1hdGlvbnMgLmRpc3BsYXktdG9kby1saXN0IC50b2RvLWxpc3QgLnRvZG8taXRlbSAucmlnaHQgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbWFyZ2luOiAwIDNweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuaHRtbCBib2R5ICNjb250ZW50ICNhcHAgI21haW4taW5mb3JtYXRpb25zIC5kaXNwbGF5LXRvZG8tbGlzdCAudG9kby1saXN0IC50b2RvLWl0ZW0gLnJpZ2h0IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYW5pbWF0aW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FDVEE7RUFDRSxvQkFBQTtBRFlGOztBQ1RBO0VBQ0Usd0JBQUE7QURZRjs7QUNUQTtFQUNFLDZCQUFBO0FEWUY7O0FDVEE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBRFlGOztBQ1RBO0VBQ0UsaUJBQUE7QURZRjs7QUNUQTtFQUNFLGVBQUE7QURZRjs7QUNUQTtFQUNFLGFBQUE7QURZRjs7QUFuQ0E7RUFDRSxlRUVlO0VGRGYsa0JBQUE7QUFzQ0Y7QUFuQ0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFxQ047QUFuQ007RUFDRSxhQUFBO0VBQ0EseUJFaEJPO0VGaUJQLG9CQUFBO0FBcUNSO0FBbkNRO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBcUNWO0FBbkNVO0VBQ0UsZUFBQTtFQUNBLDBDRTVCVTtBRmlFdEI7QUFoQ007RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFrQ1I7QUFoQ1E7RUFDRSxrQkFBQTtFQUNBLHlCRXhDSTtFRnlDSixXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtBQWtDVjtBQWhDVTtFQUNFLG9DQUFBO0FBa0NaO0FBaENZO0VBQ0UseUJBQUE7QUFrQ2Q7QUFoQ2M7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQWtDaEI7QUFoQ2dCO0VBQ0Usa0JBQUE7QUFrQ2xCO0FBOUJjO0VBQ0Usa0JBQUE7QUFnQ2hCO0FBOUJnQjtFQUNFLGVBQUE7RUFDQSx5QkVyRUU7QUZxR3BCO0FBN0JnQjtFQUNFLGNFeEVBO0FGdUdsQjtBQTNCYztFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTZCaEI7QUEzQmdCO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQTZCbEI7QUEzQmtCO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQTZCcEI7QUEzQm9CO0VBQ0UsZUFBQTtBQTZCdEI7QUExQm9CO0VBQ0Usb0JBQUE7QUE0QnRCO0FBekJvQjtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQTJCdEI7QUF2QmtCO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQXlCcEI7QUF2Qm9CO0VBQ0UsZUFBQTtBQXlCdEI7QUFuQmM7RUFDRSxXQUFBO0FBcUJoQjtBQW5CZ0I7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXFCbEI7QUFuQmtCO0VBQ0UsZUFBQTtFQUNBLHlCRXRJQTtBRjJKcEI7QUFuQm9CO0VBQ0UsVUFBQTtBQXFCdEI7QUFsQmtCO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFvQnBCO0FBbEJvQjtFQUNFLFVBQUE7QUFvQnRCO0FBakJvQjtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBbUJ0QjtBQWZrQjtFQUNFLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBaUJwQjtBQWZvQjtFQUNFLGVBQUE7QUFpQnRCO0FBUlE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFVVjtBQVJVO0VBQ0UsYUFBQTtBQVVaO0FBUlk7RUFDRSxhQUFBO0FBVWQ7QUFSYztFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBQVVoQjtBQUZnQjtFQUNFLGFBQUE7QUFJbEI7QUFIa0I7RUFDRSxjQUFBO0VBRUEsWUFBQTtFQUNBLDZCQUFBO0FBSXBCO0FBRmtCO0VBQ0UsY0VuTkY7RUZvTkUsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBSXBCO0FBRGdCO0VBQ0UsYUFBQTtBQUdsQjtBQURrQjtFQUVFLGtCQUFBO0FBRXBCO0FBQW9CO0VBRUUsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0FBQ3RCO0FBRWtCO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUFwQjtBQUVvQjtFQUNFLHlCRW5QRjtFRm9QRSxlQUFBO0FBQXRCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCAnLi9zdHlsZXMvYmFzZS5zY3NzJztcXHJcXG5AaW1wb3J0ICcuL3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XFxyXFxuQGltcG9ydCAnLi9zdHlsZXMvYW5pbWF0aW9uLnNjc3MnO1xcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiAkYmFzZS1mb250LXNpemU7XFxyXFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxuXFxyXFxuICBib2R5IHtcXHJcXG4gICAgI2NvbnRlbnQge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICAgICAgaGVhZGVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGVhZGVyLWNvbG9yO1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbSAxLjhyZW07XFxyXFxuXFxyXFxuICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXHJcXG5cXHJcXG4gICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXItYnV0dG9uLWhvdmVyO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgICNhcHAge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxyXFxuXFxyXFxuICAgICAgICAjYXNpZGUtaW5mb3JtYXRpb25zIHtcXHJcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXNpZGUtY29sb3I7XFxyXFxuICAgICAgICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZTtcXHJcXG5cXHJcXG4gICAgICAgICAgLnRvZG8taW5mb3JtYXRpb25zIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjJyZW0gMC42cmVtIDEuMnJlbSAxLjJyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgI3Byb2plY3RzLW1haW4tbGlzdCB7XFxyXFxuICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDAgMnJlbSAycmVtO1xcclxcblxcclxcbiAgICAgICAgICAgICAgbGkge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDAuOHJlbTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLm1haW4tbGlzdC1pY29uIHtcXHJcXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgIC5kaXNwbGF5LW1haW4tbGlzdCB7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhc2lkZS1jb2xvci1ob3ZlcjtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJG1haW4tbGlzdC1jb2xvcjtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgLmRpc3BsYXktcHJvamVjdHMge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMCAwIDA7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5kaXNwbGF5LXByb2plY3RzLXRpdGxlIHtcXHJcXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDAuOHJlbTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAuZHJvcGRvd24tcHJvamVjdHMtbGlzdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgLmJpLWNoZXZyb24tcmlnaHQge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgIC5hZGQtcHJvamVjdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgI2Rpc3BsYXktcHJvamVjdHMtbGlzdCB7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAucHJvamVjdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhc2lkZS1jb2xvci1ob3ZlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIC5kZWxldGUtcHJvamVjdC1idG4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAucHJvamVjdC1pbmZvIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMC45cmVtO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgLmNpcmNsZS1jb2xvciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMyU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdC1uYW1lIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgIC5kZWxldGUtcHJvamVjdC1idG4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjbWFpbi1pbmZvcm1hdGlvbnMge1xcclxcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICAgICAgICBsZWZ0OiAzMDBweDtcXHJcXG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAwLjZzIGVhc2U7XFxyXFxuXFxyXFxuICAgICAgICAgIC5kaXNwbGF5LXRvZG8tbGlzdCB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogNnJlbTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAudG9kby1saXN0IHtcXHJcXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAudG9kby1pdGVtIHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogIzgwODA4MDtcXHJcXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcGFsZXR1cnF1b2lzZTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLy8gYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICAgICAgLy8gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICAvLyAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICAgICAgICAgIC8vIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLmxlZnQge1xcclxcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICBkaXYge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRtYWluLWxpc3QtY29sb3I7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xcclxcbiAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAucmlnaHQge1xcclxcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgLnByaW9yaXR5LXdyYXBwZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgLy8gb3V0bGluZTogMXB4IHNvbGlkIHJlZDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIC5wb3AtdXAtcHJpb3JpdHkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHBhbGV0dXJxdW9pc2U7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAzOHB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgM3B4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhc2lkZS1jb2xvci1ob3ZlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgI2VkaXQtdG9kby13cmFwcGVye1xcclxcbiAgICAgICAgICAvLyBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAvLyBkaXNwbGF5OiA7XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiLmZ1bGwtbWFpbiB7XFxyXFxuICBsZWZ0OiAwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctYXNpZGUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZS1hc2lkZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbGxhcHNlIHtcXHJcXG4gIG1heC1oZWlnaHQ6IDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubm90LWNvbGxhcHNlIHtcXHJcXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udmlzaWJsZS1lZGl0LXdyYXBwZXItdG9kbyB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4tZWRpdC13cmFwcGVyLXRvZG8ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XCIsXCIkYm9keS1jb2xvcjogYmx1ZTtcXHJcXG4kaGVhZGVyLWNvbG9yOiAjZGI0YzNmO1xcclxcbiRoZWFkZXItYnV0dG9uLWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxyXFxuJGFzaWRlLWNvbG9yOiAjZjdmN2Y3O1xcclxcbiRhc2lkZS1jb2xvci1ob3ZlcjogI2VjZWNlYztcXHJcXG4kbWFpbi1saXN0LWNvbG9yOiAjMjAyMDIwO1xcclxcblxcclxcbiRiYXNlLWZvbnQtc2l6ZTogMTBweDtcXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgxNXB4KSB7XFxyXFxuICBtYWluIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcXHJcXG4gICAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODE1cHgpIHtcXHJcXG4gIC5mdWxsLW1haW4ge1xcclxcbiAgICBsZWZ0OiAxNDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODE1cHgpIHtcXHJcXG4gIG1haW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xcclxcbiAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MTVweCkge1xcclxcbiAgLmZ1bGwtbWFpbiB7XFxyXFxuICAgIGxlZnQ6IDE0MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IGRvbUVsZW1lbnRGYWN0b3J5IGZyb20gJy4uL3V0aWxpdGllcy9kb21FbGVtZW50RmFjdG9yeSc7XHJcbmltcG9ydCBhcHBlbmREb21FbGVtZW50VG9QYXJlbnQgZnJvbSAnLi4vdXRpbGl0aWVzL2FwcGVuZERvbUVsZW1lbnRUb1BhcmVudCc7XHJcbmltcG9ydCB7IHRvZG9GYWN0b3J5MiwgaGFuZGxlVG9kb0xpc3RNb2R1bGUgYXMgdG9kb0xpc3RNb2R1bGUgfSBmcm9tICcuL2hhbmRsZVRvZG8nO1xyXG5pbXBvcnQgeyBwcm9qZWN0RmFjdG9yeSwgaGFuZGxlUHJvamVjdExpc3RNb2R1bGUgYXMgcHJvamVjdExpc3RNb2R1bGUgfSBmcm9tICcuL2hhbmRsZVByb2plY3QnO1xyXG5pbXBvcnQgeyBkaXNwbGF5RWRpdFRvZG9Qcmlvcml0eVBvcFVwLCBjcmVhdGVFZGl0UHJpb3JpdHlQb3BVcCB9IGZyb20gJy4uL3V0aWxpdGllcy9wcmlvcml0eVBvcFVwJztcclxuXHJcbmNvbnN0IFVJID0gKCgpID0+IHtcclxuICBjb25zb2xlLmxvZygnVUkgbG9hZGVkJyk7XHJcblxyXG4gIGNvbnN0IHJlbmRlclRvZG9JdGVtID0gKHRvZG8pID0+IHtcclxuICAgIGNvbnN0IHRvZG9JdGVtID0gZG9tRWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAndG9kby1pdGVtJyk7XHJcbiAgICBjb25zdCBsZWZ0U2lkZU9mVG9kb0l0ZW0gPSBkb21FbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICdsZWZ0Jyk7XHJcbiAgICBjb25zdCByaWdodFNpZGVPZlRvZG9JdGVtID0gZG9tRWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAncmlnaHQnKTtcclxuICAgIGNvbnN0IGVkaXRXcmFwcGVyID0gZG9tRWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAnZWRpdC13cmFwcGVyJyk7XHJcbiAgICBjb25zdCBwcmlvcml0eVdyYXBwZXIgPSBkb21FbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICdwcmlvcml0eS13cmFwcGVyJyk7XHJcbiAgICBjb25zdCBkZWxldGVXcmFwcGVyID0gZG9tRWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAnZGVsZXRlLXdyYXBwZXInKTtcclxuICAgIGNvbnN0IGRvbmVXcmFwcGVyID0gZG9tRWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAnZG9uZS13cmFwcGVyJyk7XHJcbiAgICBjb25zdCB0b2RvVGl0bGVXcmFwcGVyID0gZG9tRWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAndGl0bGUtd3JhcHBlcicpO1xyXG4gICAgY29uc3QgZG9uZUJ0biA9IGRvbUVsZW1lbnRGYWN0b3J5KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGVkaXRCdG4gPSBkb21FbGVtZW50RmFjdG9yeSgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb21FbGVtZW50RmFjdG9yeSgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBwcmlvcml0eUJ0biA9IGRvbUVsZW1lbnRGYWN0b3J5KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGRpc3BsYXlUb2RvVGl0bGUgPSBkb21FbGVtZW50RmFjdG9yeShcclxuICAgICAgJ2RpdicsXHJcbiAgICAgIGAke3RvZG8udGl0bGV9YCxcclxuICAgICAgJ3RvZG8tdGl0bGUnLFxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgY29sb3JGbGFnUHJpb3JpdHkgPSAnI2ZmOTkzMyc7XHJcblxyXG4gICAgaWYgKHRvZG8ucHJpb3JpdHkgPT09ICdoaWdoJykge1xyXG4gICAgICBjb2xvckZsYWdQcmlvcml0eSA9ICcjZGI0YzNmJztcclxuICAgIH0gZWxzZSBpZiAodG9kby5wcmlvcml0eSA9PT0gJ2xvdycpIHtcclxuICAgICAgY29sb3JGbGFnUHJpb3JpdHkgPSAnIzNmNzNkNic7XHJcbiAgICB9XHJcblxyXG4gICAgZG9uZUJ0bi5lbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWFwcFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cclxuICAgICAgICA8cGF0aCBkPVwiTTExIDJhMyAzIDAgMCAxIDMgM3Y2YTMgMyAwIDAgMS0zIDNINWEzIDMgMCAwIDEtMy0zVjVhMyAzIDAgMCAxIDMtM2g2ek01IDFhNCA0IDAgMCAwLTQgNHY2YTQgNCAwIDAgMCA0IDRoNmE0IDQgMCAwIDAgNC00VjVhNCA0IDAgMCAwLTQtNEg1elwiLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICBgO1xyXG4gICAgZWRpdEJ0bi5lbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCIjODA4MDgwXCIgY2xhc3M9XCJiaSBiaS1wZW4gZWRpdC1idG5cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XHJcbiAgICAgICAgPHBhdGggZD1cIm0xMy40OTguNzk1LjE0OS0uMTQ5YTEuMjA3IDEuMjA3IDAgMSAxIDEuNzA3IDEuNzA4bC0uMTQ5LjE0OGExLjUgMS41IDAgMCAxLS4wNTkgMi4wNTlMNC44NTQgMTQuODU0YS41LjUgMCAwIDEtLjIzMy4xMzFsLTQgMWEuNS41IDAgMCAxLS42MDYtLjYwNmwxLTRhLjUuNSAwIDAgMSAuMTMxLS4yMzJsOS42NDItOS42NDJhLjUuNSAwIDAgMC0uNjQyLjA1Nkw2Ljg1NCA0Ljg1NGEuNS41IDAgMSAxLS43MDgtLjcwOEw5LjQ0Ljg1NEExLjUgMS41IDAgMCAxIDExLjUuNzk2YTEuNSAxLjUgMCAwIDEgMS45OTgtLjAwMXptLS42NDQuNzY2YS41LjUgMCAwIDAtLjcwNyAwTDEuOTUgMTEuNzU2bC0uNzY0IDMuMDU3IDMuMDU3LS43NjRMMTQuNDQgMy44NTRhLjUuNSAwIDAgMCAwLS43MDhsLTEuNTg1LTEuNTg1elwiLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICBgO1xyXG4gICAgcHJpb3JpdHlCdG4uZWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPSR7Y29sb3JGbGFnUHJpb3JpdHl9IGNsYXNzPVwiYmkgYmktZmxhZy1maWxsIHByaW9yaXR5LWJ0blwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cclxuICAgICAgICA8cGF0aCBkPVwiTTE0Ljc3OC4wODVBLjUuNSAwIDAgMSAxNSAuNVY4YS41LjUgMCAwIDEtLjMxNC40NjRMMTQuNSA4bC4xODYuNDY0LS4wMDMuMDAxLS4wMDYuMDAzLS4wMjMuMDA5YTEyLjQzNSAxMi40MzUgMCAwIDEtLjM5Ny4xNWMtLjI2NC4wOTUtLjYzMS4yMjMtMS4wNDcuMzUtLjgxNi4yNTItMS44NzkuNTIzLTIuNzEuNTIzLS44NDcgMC0xLjU0OC0uMjgtMi4xNTgtLjUyNWwtLjAyOC0uMDFDNy42OCA4LjcxIDcuMTQgOC41IDYuNSA4LjVjLS43IDAtMS42MzguMjMtMi40MzcuNDc3QTE5LjYyNiAxOS42MjYgMCAwIDAgMyA5LjM0MlYxNS41YS41LjUgMCAwIDEtMSAwVi41YS41LjUgMCAwIDEgMSAwdi4yODJjLjIyNi0uMDc5LjQ5Ni0uMTcuNzktLjI2QzQuNjA2LjI3MiA1LjY3IDAgNi41IDBjLjg0IDAgMS41MjQuMjc3IDIuMTIxLjUxOWwuMDQzLjAxOEM5LjI4Ni43ODggOS44MjggMSAxMC41IDFjLjcgMCAxLjYzOC0uMjMgMi40MzctLjQ3N2ExOS41ODcgMTkuNTg3IDAgMCAwIDEuMzQ5LS40NzZsLjAxOS0uMDA3LjAwNC0uMDAyaC4wMDFcIi8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgYDtcclxuICAgIGRlbGV0ZUJ0bi5lbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCIjODA4MDgwXCIgY2xhc3M9XCJiaSBiaS10cmFzaCBkZWxldGUtYnRuXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNNS41IDUuNUEuNS41IDAgMCAxIDYgNnY2YS41LjUgMCAwIDEtMSAwVjZhLjUuNSAwIDAgMSAuNS0uNXptMi41IDBhLjUuNSAwIDAgMSAuNS41djZhLjUuNSAwIDAgMS0xIDBWNmEuNS41IDAgMCAxIC41LS41em0zIC41YS41LjUgMCAwIDAtMSAwdjZhLjUuNSAwIDAgMCAxIDBWNnpcIi8+XHJcbiAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTQuNSAzYTEgMSAwIDAgMS0xIDFIMTN2OWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMlY0aC0uNWExIDEgMCAwIDEtMS0xVjJhMSAxIDAgMCAxIDEtMUg2YTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMSAxaDMuNWExIDEgMCAwIDEgMSAxdjF6TTQuMTE4IDQgNCA0LjA1OVYxM2ExIDEgMCAwIDAgMSAxaDZhMSAxIDAgMCAwIDEtMVY0LjA1OUwxMS44ODIgNEg0LjExOHpNMi41IDNWMmgxMXYxaC0xMXpcIi8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgYDtcclxuXHJcbiAgICBkZWxldGVCdG4uZWwub25jbGljayA9ICgpID0+IGRlbGV0ZVRvZG8odG9kbyk7XHJcbiAgICBjb25zdCBwb3BVcFByaW9yaXR5ID0gY3JlYXRlRWRpdFByaW9yaXR5UG9wVXAodG9kbywgKCkgPT4gbG9hZFRvZG9MaXN0KHRvZG8ucHJvamVjdCkpO1xyXG4gICAgcHJpb3JpdHlCdG4uZWwub25jbGljayA9ICgpID0+IGRpc3BsYXlFZGl0VG9kb1ByaW9yaXR5UG9wVXAocG9wVXBQcmlvcml0eSk7XHJcbiAgICBlZGl0QnRuLmVsLm9uY2xpY2sgPSAodG9kbywgKCkgPT4gdXBkYXRlVG9kbyh0b2RvKSk7XHJcblxyXG4gICAgYXBwZW5kRG9tRWxlbWVudFRvUGFyZW50KGRvbmVXcmFwcGVyLmVsLCBkb25lQnRuKTtcclxuICAgIGFwcGVuZERvbUVsZW1lbnRUb1BhcmVudCh0b2RvVGl0bGVXcmFwcGVyLmVsLCBkaXNwbGF5VG9kb1RpdGxlKTtcclxuICAgIGFwcGVuZERvbUVsZW1lbnRUb1BhcmVudChcclxuICAgICAgbGVmdFNpZGVPZlRvZG9JdGVtLmVsLFxyXG4gICAgICBkb25lV3JhcHBlcixcclxuICAgICAgdG9kb1RpdGxlV3JhcHBlcixcclxuICAgICk7XHJcbiAgICBhcHBlbmREb21FbGVtZW50VG9QYXJlbnQoZWRpdFdyYXBwZXIuZWwsIGVkaXRCdG4pO1xyXG4gICAgYXBwZW5kRG9tRWxlbWVudFRvUGFyZW50KHByaW9yaXR5V3JhcHBlci5lbCwgcHJpb3JpdHlCdG4sIHBvcFVwUHJpb3JpdHkpO1xyXG4gICAgYXBwZW5kRG9tRWxlbWVudFRvUGFyZW50KGRlbGV0ZVdyYXBwZXIuZWwsIGRlbGV0ZUJ0bik7XHJcbiAgICBhcHBlbmREb21FbGVtZW50VG9QYXJlbnQoXHJcbiAgICAgIHJpZ2h0U2lkZU9mVG9kb0l0ZW0uZWwsXHJcbiAgICAgIGVkaXRXcmFwcGVyLFxyXG4gICAgICBwcmlvcml0eVdyYXBwZXIsXHJcbiAgICAgIGRlbGV0ZVdyYXBwZXIsXHJcbiAgICApO1xyXG5cclxuICAgIGFwcGVuZERvbUVsZW1lbnRUb1BhcmVudChcclxuICAgICAgdG9kb0l0ZW0uZWwsXHJcbiAgICAgIGxlZnRTaWRlT2ZUb2RvSXRlbSxcclxuICAgICAgcmlnaHRTaWRlT2ZUb2RvSXRlbSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHRvZG9JdGVtLmVsO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvYWRUb2RvTGlzdCA9IChuYW1lID0gJ2luYm94JykgPT4ge1xyXG4gICAgY29uc3QgdG9kb0NhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tY2F0ZWdvcnknKTtcclxuICAgIGNvbnN0IGRpc3BsYXlUb2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcclxuXHJcbiAgICB0b2RvQ2F0ZWdvcnkudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgZGlzcGxheVRvZG9MaXN0LnRleHRDb250ZW50ID0gJyc7XHJcblxyXG4gICAgY29uc3QgdG9kb0xpc3QgPSBwcm9qZWN0TGlzdE1vZHVsZS5nZXRUb2RvQnlQcm9qZWN0TmFtZShuYW1lKTtcclxuXHJcbiAgICBpZiAodG9kb0xpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnN0IHdyYXBwZXJFbXB0eVRvZG9MaXN0ID0gZG9tRWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAnd3JhcHBlci1lbXB0eS10b2RvLWxpc3QnKTtcclxuICAgICAgY29uc3QgZW1wdHlUb2RvVGV4dCA9IGRvbUVsZW1lbnRGYWN0b3J5KCdwJywgJ1doYXQgdGFza3MgYXJlIG9uIHlvdXIgbWluZCA/JywgJ2VtcHR5LXRvZG8tdGV4dCcpO1xyXG4gICAgICBjb25zdCBhZGRUb2RvQnRuID0gZG9tRWxlbWVudEZhY3RvcnkoJ2J1dHRvbicsICdhZGQgYSB0YXNrJywgJ2FkZC10b2RvLWJ0bicpO1xyXG4gICAgICBhcHBlbmREb21FbGVtZW50VG9QYXJlbnQod3JhcHBlckVtcHR5VG9kb0xpc3QuZWwsIGVtcHR5VG9kb1RleHQsIGFkZFRvZG9CdG4pO1xyXG4gICAgICBhcHBlbmREb21FbGVtZW50VG9QYXJlbnQoZGlzcGxheVRvZG9MaXN0LCB3cmFwcGVyRW1wdHlUb2RvTGlzdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2RvTGlzdC5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9kb0FwcGVuZGVkID0gcmVuZGVyVG9kb0l0ZW0odG9kbyk7XHJcbiAgICAgICAgZGlzcGxheVRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9BcHBlbmRlZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvYWRQcm9qZWN0TGlzdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXktcHJvamVjdHMtbGlzdCcpO1xyXG4gICAgcHJvamVjdExpc3QudGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RMaXN0TW9kdWxlLmdldEFsbFByb2plY3RFeGNlcHREZWZhdWx0UHJvamVjdCgpO1xyXG5cclxuICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc3QgZW1wdHlQcm9qZWN0VGV4dCA9IGRvbUVsZW1lbnRGYWN0b3J5KCdwJywgJ1lvdSBoYXZlIG5vIHByb2plY3QnLCAnZW1wdHktcHJvamVjdC10ZXh0Jyk7XHJcbiAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGVtcHR5UHJvamVjdFRleHQuZWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RBcHBlbmRlZCA9IHJlbmRlclByb2plY3RJdGVtKHByb2plY3QpO1xyXG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RBcHBlbmRlZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAodG9kbykgPT4ge1xyXG4gICAgY29uc3QgeyBwcm9qZWN0LCBpZCB9ID0gdG9kbztcclxuXHJcbiAgICB0b2RvTGlzdE1vZHVsZS5kZWxldGVUb2RvKGlkKTtcclxuICAgIHByb2plY3RMaXN0TW9kdWxlLmRlbGV0ZVRvZG9JblRoaXNQcm9qZWN0KHByb2plY3QsIGlkKTtcclxuXHJcbiAgICBsb2FkVG9kb0xpc3QocHJvamVjdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XHJcbiAgICBjb25zdCB7IGlkLCB0aXRsZSB9ID0gcHJvamVjdDtcclxuXHJcbiAgICBwcm9qZWN0TGlzdE1vZHVsZS5kZWxldGVQcm9qZWN0KGlkLCB0aXRsZSk7XHJcbiAgICBsb2FkUHJvamVjdExpc3QoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJQcm9qZWN0SXRlbSA9IChwcm9qZWN0KSA9PiB7XHJcbiAgICBjb25zdCB3cmFwcGVyUHJvamVjdCA9IGRvbUVsZW1lbnRGYWN0b3J5KCdkaXYnLCAnJywgJ3Byb2plY3QnKTtcclxuICAgIGNvbnN0IHByb2plY3RJbmZvID0gZG9tRWxlbWVudEZhY3RvcnkoJ2RpdicsICcnLCAncHJvamVjdC1pbmZvJyk7XHJcbiAgICBjb25zdCBjaXJjbGVDb2xvclByb2plY3QgPSBkb21FbGVtZW50RmFjdG9yeSgnc3BhbicsICcnLCAnY2lyY2xlLWNvbG9yJyk7XHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb21FbGVtZW50RmFjdG9yeShcclxuICAgICAgJ3NwYW4nLFxyXG4gICAgICBgJHtwcm9qZWN0LnRpdGxlfWAsXHJcbiAgICAgICdwcm9qZWN0LW5hbWUnLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb21FbGVtZW50RmFjdG9yeShcclxuICAgICAgJ2J1dHRvbicsXHJcbiAgICAgICcnLFxyXG4gICAgICAnZGVsZXRlLXByb2plY3QtYnRuJyxcclxuICAgICk7XHJcbiAgICBwcm9qZWN0SW5mby5lbC5kYXRhc2V0Lmxpc3QgPSBgJHtwcm9qZWN0LnRpdGxlfWA7XHJcbiAgICBkZWxldGVQcm9qZWN0QnRuLmVsLmlubmVySFRNTCA9IGBcclxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmkteC1sZyBkZWxldGUtcHJvamVjdFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cclxuICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMy44NTQgMi4xNDZhLjUuNSAwIDAgMSAwIC43MDhsLTExIDExYS41LjUgMCAwIDEtLjcwOC0uNzA4bDExLTExYS41LjUgMCAwIDEgLjcwOCAwWlwiLz5cclxuICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yLjE0NiAyLjE0NmEuNS41IDAgMCAwIDAgLjcwOGwxMSAxMWEuNS41IDAgMCAwIC43MDgtLjcwOGwtMTEtMTFhLjUuNSAwIDAgMC0uNzA4IDBaXCIvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIGA7XHJcbiAgICBjaXJjbGVDb2xvclByb2plY3QuZWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiBmaWxsPVwiI2ZmOTkzM1wiIGNsYXNzPVwiYmkgYmktY2lyY2xlLWZpbGxcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XHJcbiAgICAgICAgPGNpcmNsZSBjeD1cIjhcIiBjeT1cIjhcIiByPVwiOFwiLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICBgO1xyXG4gICAgZGVsZXRlUHJvamVjdEJ0bi5lbC5vbmNsaWNrID0gKCkgPT4gZGVsZXRlUHJvamVjdChwcm9qZWN0KTtcclxuXHJcbiAgICBhcHBlbmREb21FbGVtZW50VG9QYXJlbnQocHJvamVjdEluZm8uZWwsIGNpcmNsZUNvbG9yUHJvamVjdCwgcHJvamVjdFRpdGxlKTtcclxuICAgIGFwcGVuZERvbUVsZW1lbnRUb1BhcmVudCh3cmFwcGVyUHJvamVjdC5lbCwgcHJvamVjdEluZm8sIGRlbGV0ZVByb2plY3RCdG4pO1xyXG5cclxuICAgIHJldHVybiB3cmFwcGVyUHJvamVjdC5lbDtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRFdmVudExpc3RlbmVyVG9VcGRhdGVUb2RvID0gKGVkaXRGb3JtLCB3cmFwcGVyKSA9PiB7XHJcbiAgICBlZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIC8vIGNoZWNrIGlmIHByb2plY3QgdmFsdWUgY2hhbmdlXHJcbiAgICAgIGNvbnN0IHByb2plY3RJbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaW5wdXQnKTtcclxuICAgICAgbGV0IG5ld1Byb2plY3QgPSBwcm9qZWN0SW5wdXRWYWx1ZS52YWx1ZTtcclxuICAgICAgY29uc3Qgb2xkZXJQcm9qZWN0ID0gcHJvamVjdElucHV0VmFsdWUucGxhY2Vob2xkZXI7XHJcblxyXG4gICAgICBpZiAoIW5ld1Byb2plY3QpIHtcclxuICAgICAgICBuZXdQcm9qZWN0ID0gb2xkZXJQcm9qZWN0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB0b2RvVXBkYXRlZEluZm8gPSBnZXRVcGRhdGVUb2RvSW5mbygpO1xyXG4gICAgICBjb25zdCBmb3JtSWQgPSBlZGl0Rm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgICAgY29uc3QgdXBkYXRlVGhpc1RvZG8gPSB0b2RvTGlzdE1vZHVsZS5nZXRUb2RvKGZvcm1JZCk7XHJcblxyXG4gICAgICBpZiAoZm9ybUlkID09PSB1cGRhdGVUaGlzVG9kby5pZCkge1xyXG4gICAgICAgIGNvbnN0IHRvZG9VcGRhdGVkID0gdG9kb0xpc3RNb2R1bGUudXBkYXRlVG9kbyh1cGRhdGVUaGlzVG9kbywgdG9kb1VwZGF0ZWRJbmZvKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcyBtZWFuIGkgaGF2ZSB0byBtb292ZSB0b2RvIGluIGFub3RoZXIgZm9sZGVyIHByb2plY3RcclxuICAgICAgICBpZiAob2xkZXJQcm9qZWN0ICE9PSBuZXdQcm9qZWN0KSB7XHJcbiAgICAgICAgICBwcm9qZWN0TGlzdE1vZHVsZS5kZWxldGVUb2RvSW5UaGlzUHJvamVjdChvbGRlclByb2plY3QsIHVwZGF0ZVRoaXNUb2RvLmlkKTtcclxuICAgICAgICAgIHByb2plY3RMaXN0TW9kdWxlLmFkZFRvZG9Ub1Byb2plY3QodG9kb1VwZGF0ZWQucHJvamVjdCwgdG9kb1VwZGF0ZWQpO1xyXG4gICAgICAgICAgbG9hZFRvZG9MaXN0KHRvZG9VcGRhdGVkLnByb2plY3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsb2FkVG9kb0xpc3Qob2xkZXJQcm9qZWN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuLWVkaXQtd3JhcHBlci10b2RvJyk7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlLWVkaXQtd3JhcHBlci10b2RvJyk7XHJcbiAgICAgIH1cclxuICAgICAgZWRpdEZvcm0ucmVzZXQoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFVwZGF0ZVRvZG9JbmZvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlZFRvZG8gPSBBcnJheS5mcm9tKFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZWRpdC10b2RvLWZvcm0gaW5wdXQnKSxcclxuICAgICkucmVkdWNlKChhY2MsIGlucHV0KSA9PiAoeyAuLi5hY2MsIFtpbnB1dC5pZF06IGlucHV0LnZhbHVlIHx8IGlucHV0LnBsYWNlaG9sZGVyIH0pLCB7fSk7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZWRUb2RvO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbGxQbGFjZUhvbGRlckZvcm1FZGl0V2l0aFRvZG9EYXRhID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IGlucHV0RWRpdFRvZG8gPSBBcnJheS5mcm9tKFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZWRpdC10b2RvLWZvcm0gaW5wdXQnKSxcclxuICAgICk7XHJcblxyXG4gICAgaW5wdXRFZGl0VG9kby5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKGAke2lucHV0LmlkfS1pbnB1dGApO1xyXG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IGRhdGFbaW5wdXQuaWRdO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlVG9kbyA9ICh0b2RvKSA9PiB7XHJcbiAgICBjb25zdCBlZGl0VG9kb1dyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10b2RvLXdyYXBwZXInKTtcclxuICAgIGVkaXRUb2RvV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4tZWRpdC13cmFwcGVyLXRvZG8nKTtcclxuICAgIGVkaXRUb2RvV3JhcHBlci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlLWVkaXQtd3JhcHBlci10b2RvJyk7XHJcblxyXG4gICAgY29uc3QgZWRpdFRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdG9kby1mb3JtJyk7XHJcbiAgICBlZGl0VG9kb0Zvcm0uZGF0YXNldC5pZCA9IHRvZG8uaWQ7XHJcblxyXG4gICAgZmlsbFBsYWNlSG9sZGVyRm9ybUVkaXRXaXRoVG9kb0RhdGEodG9kbyk7XHJcbiAgICBhZGRFdmVudExpc3RlbmVyVG9VcGRhdGVUb2RvKGVkaXRUb2RvRm9ybSwgZWRpdFRvZG9XcmFwcGVyKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRUb2RvSW5mbyA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1RvZG8gPSBBcnJheS5mcm9tKFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYWRkLXRvZG8tZm9ybSBpbnB1dCcpLFxyXG4gICAgKS5yZWR1Y2UoKGFjYywgaW5wdXQpID0+ICh7IC4uLmFjYywgW2lucHV0LmlkXTogaW5wdXQudmFsdWUgfSksIHt9KTtcclxuXHJcbiAgICByZXR1cm4gbmV3VG9kbztcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRQcm9qZWN0VG9BZGRJbmZvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgJyNhZGQtcHJvamVjdC1mb3JtIGlucHV0JyxcclxuICAgICkudmFsdWU7XHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RUaXRsZS50b0xvd2VyQ2FzZSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFRvZG9VSSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFkZFRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10b2RvLWZvcm0nKTtcclxuXHJcbiAgICBhZGRUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvRmFjdG9yeTIoZ2V0VG9kb0luZm8oKSk7XHJcbiAgICAgIHRvZG9MaXN0TW9kdWxlLmFkZFRvZG8obmV3VG9kbyk7XHJcbiAgICAgIHByb2plY3RMaXN0TW9kdWxlLmFkZFRvZG9Ub1Byb2plY3QobmV3VG9kby5wcm9qZWN0LCBuZXdUb2RvKTtcclxuICAgICAgbG9hZFRvZG9MaXN0KG5ld1RvZG8ucHJvamVjdCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBBZGRFdmVudExpc3RlbmVyVG9GZXRjaFRvZG9JblByb2plY3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICcuZGlzcGxheS1tYWluLWxpc3QsIC5wcm9qZWN0LWluZm8nLFxyXG4gICAgKTtcclxuXHJcbiAgICBwcm9qZWN0TmFtZS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbG9hZFRvZG9MaXN0KHByb2plY3QuZGF0YXNldC5saXN0KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRQcm9qZWN0VUkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1mb3JtJyk7XHJcblxyXG4gICAgYWRkUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGUgPSBnZXRQcm9qZWN0VG9BZGRJbmZvKCk7XHJcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeShuZXdQcm9qZWN0VGl0bGUpO1xyXG4gICAgICBwcm9qZWN0TGlzdE1vZHVsZS5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG4gICAgICBsb2FkUHJvamVjdExpc3QoKTtcclxuICAgICAgQWRkRXZlbnRMaXN0ZW5lclRvRmV0Y2hUb2RvSW5Qcm9qZWN0KCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoaWRlQXNpZGVTaWRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGlkZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRlLWFzaWRlJyk7XHJcbiAgICBjb25zdCBhc2lkZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXNpZGUtaW5mb3JtYXRpb25zJyk7XHJcbiAgICBjb25zdCBtYWluSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWluZm9ybWF0aW9ucycpO1xyXG4gICAgaGlkZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgYXNpZGVJbmZvLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctYXNpZGUnKTtcclxuICAgICAgYXNpZGVJbmZvLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUtYXNpZGUnKTtcclxuICAgICAgbWFpbkluZm8uY2xhc3NMaXN0LnRvZ2dsZSgnZnVsbC1tYWluJyk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVDbGFzc09uU21hbGxlclNjcmVlbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFzaWRlSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhc2lkZS1pbmZvcm1hdGlvbnMnKTtcclxuICAgIGNvbnN0IG1haW5JbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4taW5mb3JtYXRpb25zJyk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgY29uc3Qgd2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG4gICAgICBpZiAod2lkdGggPCA4MTUpIHtcclxuICAgICAgICBpZiAoYXNpZGVJbmZvLmNsYXNzTGlzdC52YWx1ZSA9PT0gJ3Nob3ctYXNpZGUnKSB7XHJcbiAgICAgICAgICBhc2lkZUluZm8uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1hc2lkZScpO1xyXG4gICAgICAgICAgYXNpZGVJbmZvLmNsYXNzTGlzdC5hZGQoJ2hpZGUtYXNpZGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh3aWR0aCA+IDgxNSkge1xyXG4gICAgICAgIGlmIChhc2lkZUluZm8uY2xhc3NMaXN0LnZhbHVlID09PSAnaGlkZS1hc2lkZScpIHtcclxuICAgICAgICAgIGFzaWRlSW5mby5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLWFzaWRlJyk7XHJcbiAgICAgICAgICBhc2lkZUluZm8uY2xhc3NMaXN0LmFkZCgnc2hvdy1hc2lkZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWFpbkluZm8uY2xhc3NMaXN0LnZhbHVlID09PSAnZnVsbC1tYWluJykge1xyXG4gICAgICAgICAgbWFpbkluZm8uY2xhc3NMaXN0LnJlbW92ZSgnZnVsbC1tYWluJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVEcm9wZG93UHJvamVjdHNMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdG9nZ2xlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLXByb2plY3RzLWxpc3QnKTtcclxuICAgIGNvbnN0IGNoZXZyb25TVkcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmktY2hldnJvbi1yaWdodCcpO1xyXG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXktcHJvamVjdHMtbGlzdCcpO1xyXG5cclxuICAgIHRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGNoZXZyb25TVkcpO1xyXG4gICAgICBpZiAoc3R5bGUudHJhbnNmb3JtID09PSAnbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApJykge1xyXG4gICAgICAgIGNoZXZyb25TVkcuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xyXG4gICAgICAgIGNoZXZyb25TVkcuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gLjFzIGVhc2UnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNoZXZyb25TVkcuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XHJcbiAgICAgIH1cclxuICAgICAgcHJvamVjdHNMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2NvbGxhcHNlJyk7XHJcbiAgICAgIHByb2plY3RzTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdub3QtY29sbGFwc2UnKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBsb2FkVG9kb0xpc3QsXHJcbiAgICBsb2FkUHJvamVjdExpc3QsXHJcbiAgICBhZGRUb2RvVUksXHJcbiAgICBhZGRQcm9qZWN0VUksXHJcbiAgICBBZGRFdmVudExpc3RlbmVyVG9GZXRjaFRvZG9JblByb2plY3QsXHJcbiAgICBoaWRlQXNpZGVTaWRlLFxyXG4gICAgdG9nZ2xlQ2xhc3NPblNtYWxsZXJTY3JlZW4sXHJcbiAgICB0b2dnbGVEcm9wZG93UHJvamVjdHNMaXN0LFxyXG4gIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVSTtcclxuIiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7IGhhbmRsZVRvZG9MaXN0TW9kdWxlIH0gZnJvbSAnLi9oYW5kbGVUb2RvJztcclxuXHJcbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlLCBkZWZhdWx0UHJvamVjdCkgPT4ge1xyXG4gIGNvbnN0IHRvZG9zTGlzdEluVGhpc1Byb2plY3QgPSBbXTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGlkOiB1dWlkdjQoKSxcclxuICAgIHRpdGxlOiB0aXRsZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgdG9kb3M6IHRvZG9zTGlzdEluVGhpc1Byb2plY3QsXHJcbiAgICBkZWZhdWx0UHJvamVjdDogZGVmYXVsdFByb2plY3QgfHwgZmFsc2UsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZVByb2plY3RMaXN0TW9kdWxlID0gKCgpID0+IHtcclxuICBsZXQgcHJvamVjdExpc3QgPSBbXTtcclxuXHJcbiAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XHJcbiAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFByb2plY3RCeU5hbWUgPSAobmFtZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IHByb2plY3RMaXN0LmZpbmQoXHJcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSBuYW1lLnRvTG93ZXJDYXNlKCksXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkVG9kb1RvUHJvamVjdCA9IChuYW1lLCB0b2RvKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0VG9BZGQgPSBnZXRQcm9qZWN0QnlOYW1lKG5hbWUpO1xyXG5cclxuICAgIGlmIChwcm9qZWN0VG9BZGQudG9kb3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gdG9kby5pZCkpIHJldHVybjtcclxuICAgIGlmICh0b2RvLnByb2plY3QgIT09IG5hbWUpIHJldHVybjtcclxuICAgIHByb2plY3RUb0FkZC50b2Rvcy5wdXNoKHRvZG8pO1xyXG4gIH07XHJcblxyXG4gIC8vIEEgc3VwcHJpbWVyIHVuZSBmb2lzIGxlIGRldiB0ZXJtaW7DqVxyXG4gIGNvbnN0IGdldEFsbFByb2plY3QgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLnRhYmxlKHByb2plY3RMaXN0KTtcclxuICAgIHJldHVybiBwcm9qZWN0TGlzdDtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRBbGxQcm9qZWN0RXhjZXB0RGVmYXVsdFByb2plY3QgPSAoKSA9PiB7XHJcbiAgICAvLyBkZWZhdWx0IHByb2plY3QgPSBpbmJveCwgdG9kYXksIHVwY29tbWluZ1xyXG4gICAgY29uc3QgYWxsUHJvamVjdEV4Y2VwdERlZmF1bHQgPSBwcm9qZWN0TGlzdC5maWx0ZXIoXHJcbiAgICAgIChwcm9qZWN0KSA9PiAhcHJvamVjdC5kZWZhdWx0UHJvamVjdCxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIGFsbFByb2plY3RFeGNlcHREZWZhdWx0O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFRvZG9CeVByb2plY3ROYW1lID0gKG5hbWUpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBwcm9qZWN0TGlzdC5maW5kKFxyXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXN1bHRzLnRvZG9zO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVRvZG9JblRoaXNQcm9qZWN0ID0gKHByb2plY3QsIHRvZG9JZCkgPT4ge1xyXG4gICAgY29uc3QgdG9kb3NQYXJlbnRQcm9qZWN0ID0gZ2V0UHJvamVjdEJ5TmFtZShwcm9qZWN0KTtcclxuXHJcbiAgICB0b2Rvc1BhcmVudFByb2plY3QudG9kb3MgPSB0b2Rvc1BhcmVudFByb2plY3QudG9kb3MuZmlsdGVyKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pZCAhPT0gdG9kb0lkLFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKGlkLCBwcm9qZWN0VGl0bGUpID0+IHtcclxuICAgIHByb2plY3RMaXN0ID0gcHJvamVjdExpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBpZCk7XHJcblxyXG4gICAgaGFuZGxlVG9kb0xpc3RNb2R1bGUuZGVsZXRlQWxsVG9kb0Zyb21EZWxldGVkUHJvamVjdChwcm9qZWN0VGl0bGUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBhZGRQcm9qZWN0LFxyXG4gICAgZ2V0UHJvamVjdEJ5TmFtZSxcclxuICAgIGFkZFRvZG9Ub1Byb2plY3QsXHJcbiAgICBnZXRBbGxQcm9qZWN0LFxyXG4gICAgZ2V0QWxsUHJvamVjdEV4Y2VwdERlZmF1bHRQcm9qZWN0LFxyXG4gICAgZ2V0VG9kb0J5UHJvamVjdE5hbWUsXHJcbiAgICBkZWxldGVUb2RvSW5UaGlzUHJvamVjdCxcclxuICAgIGRlbGV0ZVByb2plY3QsXHJcbiAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IHByb2plY3RGYWN0b3J5LCBoYW5kbGVQcm9qZWN0TGlzdE1vZHVsZSB9O1xyXG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuXHJcbi8vIGplIGdhcmRlIGNldHRlIGZvbmN0aW9uIGp1c3F1J8OgIGxhIGZpbiBkZSBtb24gZGV2ZWxvcHBtZW50LCBqZSBsJ3V0aWxpc2UgcG91clxyXG4vLyBjcsOpZXIgbGVzIHRvZG9zIMOgIGxhIHZvbMOpZSBkYW5zIGluZGV4LmpzIChjJ2VzdCBtYSBwcmVtacOocmUgdmVyc2lvbiBkZSBtYSBmdW5jdGlvblxyXG4vLyBmYWN0b3J5LCB1bmUgZm9pcyBsZSBwcm9qZXQgdGVybWluw6kgamUgbGEgc3VwcHJpbWVyYWlzLilcclxuY29uc3QgdG9kb0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0ID0gJ2luYm94JywgcHJpb3JpdHkgPSAnbWVkaXVtJykgPT4gKHtcclxuICBpZDogdXVpZHY0KCksXHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgcHJvamVjdDogcHJvamVjdC50b0xvd2VyQ2FzZSgpLFxyXG4gIHByaW9yaXR5LFxyXG59KTtcclxuXHJcbmNvbnN0IHRvZG9GYWN0b3J5MiA9ICh0b2RvKSA9PiAoe1xyXG4gIGlkOiB1dWlkdjQoKSxcclxuICB0aXRsZTogdG9kby50aXRsZSxcclxuICBkZXNjcmlwdGlvbjogdG9kby5kZXNjcmlwdGlvbixcclxuICBwcm9qZWN0OiB0b2RvLnByb2plY3QudG9Mb3dlckNhc2UoKSB8fCAnaW5ib3gnLFxyXG4gIHByaW9yaXR5OiB0b2RvLnByaW9yaXR5IHx8ICdtZWRpdW0nLFxyXG59KTtcclxuXHJcbmNvbnN0IGhhbmRsZVRvZG9MaXN0TW9kdWxlID0gKCgpID0+IHtcclxuICBsZXQgdG9kb0xpc3QgPSBbXTtcclxuXHJcbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XHJcbiAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFRvZG8gPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IHRvZG8gPSB0b2RvTGlzdC5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCk7XHJcbiAgICByZXR1cm4gdG9kbztcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVUb2RvID0gKG9sZGVyVG9kb1ZlcnNpb24sIHVwZGF0ZVRvZG9WZXJzaW9uKSA9PiB7XHJcbiAgICBjb25zdCB0b2RvVXBkYXRlZCA9IE9iamVjdC5hc3NpZ24ob2xkZXJUb2RvVmVyc2lvbiwgdXBkYXRlVG9kb1ZlcnNpb24pO1xyXG4gICAgcmV0dXJuIHRvZG9VcGRhdGVkO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAoaWQpID0+IHtcclxuICAgIHRvZG9MaXN0ID0gdG9kb0xpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBpZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQWxsVG9kb0Zyb21EZWxldGVkUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gICAgdG9kb0xpc3QgPSB0b2RvTGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ucHJvamVjdCAhPT0gcHJvamVjdE5hbWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFRvZG9MaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS50YWJsZSh0b2RvTGlzdCk7XHJcbiAgICByZXR1cm4gdG9kb0xpc3Q7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlVG9kb1ByaW9yaXR5ID0gKHRvZG8sIG5ld1ByaW9yaXR5VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eVZhbHVlVXBkYXRlZCA9IHtcclxuICAgICAgcHJpb3JpdHk6IG5ld1ByaW9yaXR5VmFsdWUsXHJcbiAgICB9O1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24odG9kbywgdG9kb1ByaW9yaXR5VmFsdWVVcGRhdGVkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYWRkVG9kbyxcclxuICAgIGdldFRvZG8sXHJcbiAgICB1cGRhdGVUb2RvLFxyXG4gICAgZGVsZXRlVG9kbyxcclxuICAgIGRlbGV0ZUFsbFRvZG9Gcm9tRGVsZXRlZFByb2plY3QsXHJcbiAgICBnZXRUb2RvTGlzdCxcclxuICAgIHVwZGF0ZVRvZG9Qcmlvcml0eSxcclxuICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgdG9kb0ZhY3RvcnksIHRvZG9GYWN0b3J5MiwgaGFuZGxlVG9kb0xpc3RNb2R1bGUgfTtcclxuIiwiY29uc3QgYXBwZW5kRG9tRWxlbWVudFRvUGFyZW50ID0gKHBhcmVudCwgLi4uYXJncykgPT4ge1xyXG4gIGFyZ3MuZm9yRWFjaCgoYXJnKSA9PiB7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYXJnLmVsKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcGVuZERvbUVsZW1lbnRUb1BhcmVudDtcclxuIiwiY29uc3QgZG9tRWxlbWVudEZhY3RvcnkgPSAodHlwZSwgY29udGVudCA9ICcnLCBjbGFzc05hbWUgPSAnJykgPT4ge1xyXG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICBlbC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XHJcbiAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9YCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZWwsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvbUVsZW1lbnRGYWN0b3J5O1xyXG4iLCJpbXBvcnQgZG9tRWxlbWVudEZhY3RvcnkgZnJvbSAnLi9kb21FbGVtZW50RmFjdG9yeSc7XHJcbmltcG9ydCBhcHBlbmREb21FbGVtZW50VG9QYXJlbnQgZnJvbSAnLi9hcHBlbmREb21FbGVtZW50VG9QYXJlbnQnO1xyXG5pbXBvcnQgeyBoYW5kbGVUb2RvTGlzdE1vZHVsZSB9IGZyb20gJy4uL21vZHVsZXMvaGFuZGxlVG9kbyc7XHJcblxyXG5jb25zdCBlZGl0VG9kb1ByaW9yaXR5VWkgPSAodG9kbywgbmV3UHJpb3JpdHlWYWx1ZSkgPT4ge1xyXG4gIGhhbmRsZVRvZG9MaXN0TW9kdWxlLnVwZGF0ZVRvZG9Qcmlvcml0eSh0b2RvLCBuZXdQcmlvcml0eVZhbHVlKTtcclxufTtcclxuXHJcbmNvbnN0IGRpc3BsYXlFZGl0VG9kb1ByaW9yaXR5UG9wVXAgPSAocG9wVXApID0+IHtcclxuICBjb25zdCBwcmlvcml0eVBvcFVwID0gcG9wVXA7XHJcbiAgaWYgKHBvcFVwLmVsLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgcHJpb3JpdHlQb3BVcC5lbC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgfSBlbHNlIHtcclxuICAgIHByaW9yaXR5UG9wVXAuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVFZGl0UHJpb3JpdHlQb3BVcCA9ICh0b2RvLCByZWxvYWRUb2RvRnVuY3Rpb25Gcm9tVUkpID0+IHtcclxuICBjb25zdCBwcmlvcml0eUNob2ljZSA9IFsnaGlnaCcsICdtZWRpdW0nLCAnbG93J107XHJcbiAgY29uc3QgcG9wVXAgPSBkb21FbGVtZW50RmFjdG9yeSgnZGl2JywgJycsICdwb3AtdXAtcHJpb3JpdHknKTtcclxuICBwcmlvcml0eUNob2ljZS5mb3JFYWNoKChjaG9pY2UpID0+IHtcclxuICAgIGNvbnN0IHByaW9yaXR5QnRuID0gZG9tRWxlbWVudEZhY3RvcnkoJ2J1dHRvbicsIGAke2Nob2ljZX1gLCAncHJpb3JpdHktY2hvaWNlJyk7XHJcbiAgICBwcmlvcml0eUJ0bi5lbC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdQcmlvcml0eSA9IHByaW9yaXR5QnRuLmVsLnRleHRDb250ZW50O1xyXG4gICAgICBlZGl0VG9kb1ByaW9yaXR5VWkodG9kbywgbmV3UHJpb3JpdHkpO1xyXG4gICAgICByZWxvYWRUb2RvRnVuY3Rpb25Gcm9tVUkoKTtcclxuICAgIH07XHJcbiAgICBhcHBlbmREb21FbGVtZW50VG9QYXJlbnQocG9wVXAuZWwsIHByaW9yaXR5QnRuKTtcclxuICB9KTtcclxuICBwb3BVcC5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIHJldHVybiBwb3BVcDtcclxufTtcclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlFZGl0VG9kb1ByaW9yaXR5UG9wVXAsIGNyZWF0ZUVkaXRQcmlvcml0eVBvcFVwIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQgeyB0b2RvRmFjdG9yeSwgaGFuZGxlVG9kb0xpc3RNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvaGFuZGxlVG9kbyc7XHJcbmltcG9ydCB7IHByb2plY3RGYWN0b3J5LCBoYW5kbGVQcm9qZWN0TGlzdE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9oYW5kbGVQcm9qZWN0JztcclxuaW1wb3J0IFVJIGZyb20gJy4vbW9kdWxlcy9VSSc7XHJcblxyXG5jb25zdCBuZXdUb2RvID0gdG9kb0ZhY3RvcnkoXHJcbiAgJ3N0YXJ0IHJlYWN0JyxcclxuICAnYnV5IG1pbGsgZm9yIGx1bmUnLFxyXG4gICdKYXZhU2NyaXB0JyxcclxuICAnbG93JyxcclxuKTtcclxuY29uc3QgdG9kbzMgPSB0b2RvRmFjdG9yeShcclxuICAncmVhZCBZb3UgZG9udCBrbm93IEpTJyxcclxuICAnYnV5IHRoZSBib29rIGZpcnN0JyxcclxuICAnSmF2YVNjcmlwdCcsXHJcbiAgJ2hpZ2gnLFxyXG4pO1xyXG5jb25zdCB0b2RvNCA9IHRvZG9GYWN0b3J5KCd3YXRjaCBiYXJjZWxvbmEnLCAnbGVhZ3VlIGRlcyBjaGFtcGlvc24nLCAnZm9vdGJhbGwnKTtcclxuY29uc3QgdG9kbzUgPSB0b2RvRmFjdG9yeSgnYW5vdGhlciB0b2RvJywgJ2l0cyBjb29sJyk7XHJcblxyXG5oYW5kbGVUb2RvTGlzdE1vZHVsZS5hZGRUb2RvKG5ld1RvZG8pO1xyXG5oYW5kbGVUb2RvTGlzdE1vZHVsZS5hZGRUb2RvKHRvZG8zKTtcclxuaGFuZGxlVG9kb0xpc3RNb2R1bGUuYWRkVG9kbyh0b2RvNCk7XHJcbmhhbmRsZVRvZG9MaXN0TW9kdWxlLmFkZFRvZG8odG9kbzUpO1xyXG5cclxuY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KCdKYXZhU2NyaXB0Jyk7XHJcbmNvbnN0IGZvb3RiYWxsID0gcHJvamVjdEZhY3RvcnkoJ2Zvb1RiYWxsJyk7XHJcbmNvbnN0IGluYm94ID0gcHJvamVjdEZhY3RvcnkoJ2luYm94JywgdHJ1ZSk7XHJcbmNvbnN0IHRvZGF5ID0gcHJvamVjdEZhY3RvcnkoJ3RvZGF5JywgdHJ1ZSk7XHJcbmNvbnN0IHVwY29taW5nID0gcHJvamVjdEZhY3RvcnkoJ3VwY29taW5nJywgdHJ1ZSk7XHJcblxyXG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5hZGRQcm9qZWN0KGZvb3RiYWxsKTtcclxuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkUHJvamVjdChpbmJveCk7XHJcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFByb2plY3QodG9kYXkpO1xyXG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5hZGRQcm9qZWN0KHVwY29taW5nKTtcclxuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkVG9kb1RvUHJvamVjdChuZXdQcm9qZWN0LnRpdGxlLCB0b2RvMyk7XHJcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFRvZG9Ub1Byb2plY3QoZm9vdGJhbGwudGl0bGUsIHRvZG80KTtcclxuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkVG9kb1RvUHJvamVjdChuZXdQcm9qZWN0LnRpdGxlLCB0b2RvMyk7XHJcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFRvZG9Ub1Byb2plY3QobmV3UHJvamVjdC50aXRsZSwgdG9kbzMpO1xyXG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5hZGRUb2RvVG9Qcm9qZWN0KG5ld1Byb2plY3QudGl0bGUsIHRvZG8zKTtcclxuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkVG9kb1RvUHJvamVjdChuZXdQcm9qZWN0LnRpdGxlLCBuZXdUb2RvKTtcclxuaGFuZGxlUHJvamVjdExpc3RNb2R1bGUuYWRkVG9kb1RvUHJvamVjdChuZXdQcm9qZWN0LnRpdGxlLCB0b2RvMyk7XHJcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmFkZFRvZG9Ub1Byb2plY3QoaW5ib3gudGl0bGUsIHRvZG81KTtcclxuXHJcbmhhbmRsZVByb2plY3RMaXN0TW9kdWxlLmdldFByb2plY3RCeU5hbWUoJ2phdkFzY1JpcHQnKTtcclxuXHJcbmhhbmRsZVRvZG9MaXN0TW9kdWxlLmdldFRvZG9MaXN0KCk7XHJcblxyXG5oYW5kbGVQcm9qZWN0TGlzdE1vZHVsZS5nZXRBbGxQcm9qZWN0KCk7XHJcblxyXG5VSS5sb2FkVG9kb0xpc3QoKTtcclxuVUkubG9hZFByb2plY3RMaXN0KCk7XHJcblVJLmFkZFByb2plY3RVSSgpO1xyXG5VSS5hZGRUb2RvVUkoKTtcclxuVUkuQWRkRXZlbnRMaXN0ZW5lclRvRmV0Y2hUb2RvSW5Qcm9qZWN0KCk7XHJcblVJLmhpZGVBc2lkZVNpZGUoKTtcclxuVUkudG9nZ2xlQ2xhc3NPblNtYWxsZXJTY3JlZW4oKTtcclxuVUkudG9nZ2xlRHJvcGRvd1Byb2plY3RzTGlzdCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=