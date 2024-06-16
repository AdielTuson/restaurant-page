/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/FuturaCyrillicLight.woff */ "./src/assets/fonts/FuturaCyrillicLight.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/FuturaCyrillicMedium.woff */ "./src/assets/fonts/FuturaCyrillicMedium.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Gwendolyn:wght@400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family:'Futura';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff'),
    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');
    font-style: normal;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    --main-color: #999A9B;
    --main-bgc: #000;
    --secondary-color: #fff;
    --main-spacing: 15px;
    font-family:'Futura', "Raleway", sans-serif;
}

body {
    width: 100%;
    min-height: 100vh;
    padding: 0 15px;
    background-color: var(--main-bgc);
    color: var(--main-color);
    
}

.header {
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--main-bgc);
    width: 100%;
    padding: 10px 0;
}

.logo {
    width: 130px;
}

.nav-menu {
    display: flex;
    gap: 15px;
}

.nav-menu > button {
    width: 100px;
    padding: 5px 10px;
    cursor: pointer;
    background-color: transparent;
    color: var(--main-color);
    border: 2px solid var(--main-color);
    border-radius: 5px;
    font-weight: bold;
    font-family: 'Raleway';
}

.nav-menu > button:hover {
    background-color:var(--main-color);
    color: var(--main-bgc);
}

.bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 50px;
    text-align: center;
}

.bottom > .info {
    line-height: 1.4;
    color: var(--secondary-color);
}

.clock-icon {
    width: 35px;
}


/* Home page */
#content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.home-header {
    font-size: clamp(1.2rem, 4vw, 1.8rem);
    padding: 20px;
    font-style: italic;
}

.home-image {
    width: 100%;
    max-height: 100vh;
}

.home-text {
    padding: 8% 25%;
    background-color: #f5f1f120;
    margin: 40px 0;
    color: var(--secondary-color);
    font-size: clamp(1rem, 1.8vw, 1.2rem);
    white-space: pre-line;
}


/* Menu */
.menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

.menu-header {
    font-family: 'Gwendolyn';
}

.divider {
    width: 300px;
}

.dish {
    width: max(400px, 45%);
    padding: 10px;
    border-radius: 8px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    gap: 2px 8px;
    text-align: left;
    background-color: #ffffffaa;
    color:var(--main-bgc);
}

.dish > img {
    grid-row: 1/3;
    border: 2px solid var(--main-bgc);
    width: 110px;
    height: 110px;
    align-self: center;
    object-fit: cover;
    box-shadow: 0 0 3px var(--main-bgc);
}

.dish > p:first-of-type {
    padding-bottom: 2px;
    border-bottom: 1px solid var(--main-bgc);
    font-weight: bold;
}


/* About-us page */
.about {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.about-text {
    padding:3% 20%;
    background-color: #f5f1f120;
    color: var(--secondary-color);
    font-size: clamp(1rem, 1.8vw, 1.2rem);
    white-space: pre-line;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAIA;IACI,oBAAoB;IACpB;0DAC+D;IAC/D,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,uBAAuB;IACvB,oBAAoB;IACpB,2CAA2C;AAC/C;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,eAAe;IACf,iCAAiC;IACjC,wBAAwB;;AAE5B;;AAEA;IACI,gBAAgB;IAChB,MAAM;IACN,OAAO;IACP,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,iCAAiC;IACjC,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,6BAA6B;IAC7B,wBAAwB;IACxB,mCAAmC;IACnC,kBAAkB;IAClB,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,kCAAkC;IAClC,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,6BAA6B;AACjC;;AAEA;IACI,WAAW;AACf;;;AAGA,cAAc;AACd;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,qCAAqC;IACrC,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,2BAA2B;IAC3B,cAAc;IACd,6BAA6B;IAC7B,qCAAqC;IACrC,qBAAqB;AACzB;;;AAGA,SAAS;AACT;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,+BAA+B;IAC/B,4BAA4B;IAC5B,YAAY;IACZ,gBAAgB;IAChB,2BAA2B;IAC3B,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,iBAAiB;IACjB,mCAAmC;AACvC;;AAEA;IACI,mBAAmB;IACnB,wCAAwC;IACxC,iBAAiB;AACrB;;;AAGA,kBAAkB;AAClB;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,cAAc;IACd,2BAA2B;IAC3B,6BAA6B;IAC7B,qCAAqC;IACrC,qBAAqB;AACzB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Gwendolyn:wght@400;700&display=swap');\n\n\n@font-face {\n    font-family:'Futura';\n    src: url('../assets/fonts/FuturaCyrillicLight.woff') format('woff'),\n    url('../assets/fonts/FuturaCyrillicMedium.woff') format('woff');\n    font-style: normal;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    --main-color: #999A9B;\n    --main-bgc: #000;\n    --secondary-color: #fff;\n    --main-spacing: 15px;\n    font-family:'Futura', \"Raleway\", sans-serif;\n}\n\nbody {\n    width: 100%;\n    min-height: 100vh;\n    padding: 0 15px;\n    background-color: var(--main-bgc);\n    color: var(--main-color);\n    \n}\n\n.header {\n    position: sticky;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--main-bgc);\n    width: 100%;\n    padding: 10px 0;\n}\n\n.logo {\n    width: 130px;\n}\n\n.nav-menu {\n    display: flex;\n    gap: 15px;\n}\n\n.nav-menu > button {\n    width: 100px;\n    padding: 5px 10px;\n    cursor: pointer;\n    background-color: transparent;\n    color: var(--main-color);\n    border: 2px solid var(--main-color);\n    border-radius: 5px;\n    font-weight: bold;\n    font-family: 'Raleway';\n}\n\n.nav-menu > button:hover {\n    background-color:var(--main-color);\n    color: var(--main-bgc);\n}\n\n.bottom {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 15px;\n    padding: 50px;\n    text-align: center;\n}\n\n.bottom > .info {\n    line-height: 1.4;\n    color: var(--secondary-color);\n}\n\n.clock-icon {\n    width: 35px;\n}\n\n\n/* Home page */\n#content {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.home-header {\n    font-size: clamp(1.2rem, 4vw, 1.8rem);\n    padding: 20px;\n    font-style: italic;\n}\n\n.home-image {\n    width: 100%;\n    max-height: 100vh;\n}\n\n.home-text {\n    padding: 8% 25%;\n    background-color: #f5f1f120;\n    margin: 40px 0;\n    color: var(--secondary-color);\n    font-size: clamp(1rem, 1.8vw, 1.2rem);\n    white-space: pre-line;\n}\n\n\n/* Menu */\n.menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 15px;\n}\n\n.menu-header {\n    font-family: 'Gwendolyn';\n}\n\n.divider {\n    width: 300px;\n}\n\n.dish {\n    width: max(400px, 45%);\n    padding: 10px;\n    border-radius: 8px;\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto 1fr;\n    gap: 2px 8px;\n    text-align: left;\n    background-color: #ffffffaa;\n    color:var(--main-bgc);\n}\n\n.dish > img {\n    grid-row: 1/3;\n    border: 2px solid var(--main-bgc);\n    width: 110px;\n    height: 110px;\n    align-self: center;\n    object-fit: cover;\n    box-shadow: 0 0 3px var(--main-bgc);\n}\n\n.dish > p:first-of-type {\n    padding-bottom: 2px;\n    border-bottom: 1px solid var(--main-bgc);\n    font-weight: bold;\n}\n\n\n/* About-us page */\n.about {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.about-text {\n    padding:3% 20%;\n    background-color: #f5f1f120;\n    color: var(--secondary-color);\n    font-size: clamp(1rem, 1.8vw, 1.2rem);\n    white-space: pre-line;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/load-about.js":
/*!***************************!*\
  !*** ./src/load-about.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadAbout)
/* harmony export */ });
/* harmony import */ var _assets_set_table_wine_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/set-table-wine.jpg */ "./src/assets/set-table-wine.jpg");


function loadAbout() {
    const content = document.querySelector("#content");
    const about = document.createElement('div');
    about.classList.add('about');

    about.append(
        createHeader(), 
        createInfo(), 
        createImg(),
    );

    content.appendChild(about);
};

function createHeader() {
    const headerElement = document.createElement('h1');
    headerElement.textContent = "About Us";

    return headerElement;
}

function createInfo() {
    const aboutElement = document.createElement('p');
    aboutElement.textContent = "Welcome to Adiel's, where culinary excellence meets warm hospitality in an ambiance of refined elegance since 1998. Nestled by the serene waters of Dodo Lake, Adiel's offers an unparalleled dining experience that combines the richness of tradition with the freshness of modern cuisine.\n\n Our restaurant is renowned for its exceptional quality, with a special focus on our high-quality kosher meat dishes. Every cut of meat is carefully selected and expertly prepared to ensure a dining experience that delights even the most discerning palates. From our tender rib-eye steaks to our succulent burgers, each dish is crafted with passion and precision.\n\n But it's not just about the meat. At Adiel's, we offer a variety of delectable options, including fresh, flavorful seafood and exquisite vegetarian dishes. Our sushi trays are a feast for the eyes and the taste buds, and our side dishes, like our perfectly seasoned potato creations, provide the perfect complement to your meal.\n\n Accompanying our superb food is an extensive selection of beverages. Whether you're in the mood for a fine wine, a refreshing cocktail, or a premium non-alcoholic drink, our menu has something to satisfy every taste.\n\n The atmosphere at Adiel's is designed to make you feel at home while providing a touch of sophistication. Our interior is tastefully decorated, offering a cozy yet elegant setting for every occasion. Whether you are joining us for a romantic dinner, a family gathering, or a special celebration, our attentive staff is dedicated to ensuring your visit is memorable.\n\n At Adiel's, we believe in creating more than just a meal; we create moments. Moments filled with laughter, warmth, and the joy of exceptional dining. Come and discover why Adiel's is more than just a restaurant – it's a place where great food and great times come together.\n\n Experience the taste of excellence. Experience Adiel's";
    aboutElement.classList.add('about-text');

    return aboutElement;
}

function createImg() {
    const imgElement = document.createElement('img');
    imgElement.src = _assets_set_table_wine_jpg__WEBPACK_IMPORTED_MODULE_0__;
    imgElement.classList.add('home-image');

    return imgElement;
}



/***/ }),

/***/ "./src/load-home.js":
/*!**************************!*\
  !*** ./src/load-home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _assets_restaurant_interior_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/restaurant-interior.jpg */ "./src/assets/restaurant-interior.jpg");
/* harmony import */ var _assets_bar_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/bar.jpg */ "./src/assets/bar.jpg");




function loadHome() {
    const content = document.querySelector('#content');
    const header = document.createElement('h1');
    const pageImg = document.createElement('img');
    const pageText = document.createElement('p');
    const barImg = document.createElement('img');

    header.classList.add("home-header");
    pageImg.classList.add('home-image');
    pageText.classList.add('home-text');
    barImg.classList.add('home-image');

    header.textContent = "Adiel's Restaurant, Where Every Meal is a Masterpiece";
    pageImg.src = _assets_restaurant_interior_jpg__WEBPACK_IMPORTED_MODULE_0__;
    pageText.textContent = "Welcome to Adiel's, where culinary excellence meets elegant ambiance. Located in the heart of the city, Adiel's specializes in high-quality kosher meat dishes, meticulously crafted by our expert chefs. Each plate is a fusion of traditional flavors and modern flair, designed to delight your palate. \n\nOur sophisticated interior and attentive service create the perfect setting for any occasion, whether a special celebration or an intimate dinner.\n\nComplement your meal with selections from our extensive variety of fine wines and drinks, curated to enhance your dining experience. Join us at Adiel's, where every meal is a masterpiece and every visit is a celebration of taste and luxury.";
    barImg.src = _assets_bar_jpg__WEBPACK_IMPORTED_MODULE_1__;

    content.appendChild(header);
    content.appendChild(pageImg);
    content.appendChild(pageText);
    content.appendChild(barImg);
}


/***/ }),

/***/ "./src/load-menu.js":
/*!**************************!*\
  !*** ./src/load-menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _assets_steak_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/steak.jpg */ "./src/assets/steak.jpg");
/* harmony import */ var _assets_hamburger_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/hamburger.jpg */ "./src/assets/hamburger.jpg");
/* harmony import */ var _assets_salmon_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/salmon.jpg */ "./src/assets/salmon.jpg");
/* harmony import */ var _assets_potato_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/potato.jpg */ "./src/assets/potato.jpg");
/* harmony import */ var _assets_sushi_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/sushi.jpg */ "./src/assets/sushi.jpg");
/* harmony import */ var _assets_menu_divider_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/menu-divider.png */ "./src/assets/menu-divider.png");







function loadMenu() {
    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.append(
        createMenuHeader(),
        createMenuDivider(),
        createDishElement(potato), 
        createDishElement(steak),
        createDishElement(hamburger),
        createDishElement(salmon),
        createDishElement(sushi),
        createMenuDivider(),
    );
    content.appendChild(menu);

}

function createMenuHeader() {
    const header = document.createElement('h1');
    header.textContent = 'Our Menu';
    header.classList.add('menu-header');
    return header;
}

function createMenuDivider() {
    const divider = document.createElement('img');
    divider.src = _assets_menu_divider_png__WEBPACK_IMPORTED_MODULE_5__;
    divider.classList.add('divider');
    return divider;
}

function createDishElement(dish) {
    const dishElement = document.createElement('div');
    const dishImg = document.createElement('img');
    const dishName = document.createElement('p');
    const dishDescription = document.createElement('p');


    dishImg.src = dish.imgSrc;
    dishName.textContent = dish.name;
    dishDescription.textContent = dish.description

    dishElement.append(dishImg, dishName, dishDescription);

    dishElement.classList.add('dish');

    return dishElement;
}

function createDish(imgSrc, name, description) {
    return { imgSrc, name, description }
}

const potato = createDish(_assets_potato_jpg__WEBPACK_IMPORTED_MODULE_3__, "Roasted Potatoes", "Crispy on the outside and tender on the inside, our Roasted Potatoes are seasoned with aromatic herbs and spices. The perfect complement to any main course.");

const steak = createDish(_assets_steak_jpg__WEBPACK_IMPORTED_MODULE_0__, "Premium rib-eye steak", "Succulent, tender, and richly marbled, our Rib-Eye Steak is expertly grilled to perfection. Served with gourmet sauces, it's a luxurious treat for true meat lovers.");

const hamburger = createDish(_assets_hamburger_jpg__WEBPACK_IMPORTED_MODULE_1__, "Adiel's Burger", "Juicy, flavorful, and perfectly seasoned, our Hamburger is grilled to perfection. Served with fresh toppings and gourmet sauces, it's a classic delight for burger lovers");

const salmon = createDish(_assets_salmon_jpg__WEBPACK_IMPORTED_MODULE_2__, "Grilled Salmon", "Perfectly grilled and tender, our Salmon is seasoned with a blend of herbs and spices. Served with a side of fresh vegetables, it's a delightful and healthy option for seafood enthusiasts.");

const sushi = createDish(_assets_sushi_jpg__WEBPACK_IMPORTED_MODULE_4__, "Sushi Tray", "A beautifully arranged selection of fresh, high-quality sushi, including nigiri, sashimi, and rolls. Perfectly balanced flavors and textures, crafted to delight sushi enthusiasts.");



/***/ }),

/***/ "./src/assets/bar.jpg":
/*!****************************!*\
  !*** ./src/assets/bar.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bar.jpg";

/***/ }),

/***/ "./src/assets/clock-icon.svg":
/*!***********************************!*\
  !*** ./src/assets/clock-icon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "clock-icon.svg";

/***/ }),

/***/ "./src/assets/fonts/FuturaCyrillicLight.woff":
/*!***************************************************!*\
  !*** ./src/assets/fonts/FuturaCyrillicLight.woff ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/FuturaCyrillicLight.woff";

/***/ }),

/***/ "./src/assets/fonts/FuturaCyrillicMedium.woff":
/*!****************************************************!*\
  !*** ./src/assets/fonts/FuturaCyrillicMedium.woff ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/FuturaCyrillicMedium.woff";

/***/ }),

/***/ "./src/assets/hamburger.jpg":
/*!**********************************!*\
  !*** ./src/assets/hamburger.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hamburger.jpg";

/***/ }),

/***/ "./src/assets/menu-divider.png":
/*!*************************************!*\
  !*** ./src/assets/menu-divider.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "menu-divider.png";

/***/ }),

/***/ "./src/assets/potato.jpg":
/*!*******************************!*\
  !*** ./src/assets/potato.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "potato.jpg";

/***/ }),

/***/ "./src/assets/restaurant-interior.jpg":
/*!********************************************!*\
  !*** ./src/assets/restaurant-interior.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "restaurant-interior.jpg";

/***/ }),

/***/ "./src/assets/restaurant-logo.svg":
/*!****************************************!*\
  !*** ./src/assets/restaurant-logo.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "restaurant-logo.svg";

/***/ }),

/***/ "./src/assets/salmon.jpg":
/*!*******************************!*\
  !*** ./src/assets/salmon.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "salmon.jpg";

/***/ }),

/***/ "./src/assets/set-table-wine.jpg":
/*!***************************************!*\
  !*** ./src/assets/set-table-wine.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "set-table-wine.jpg";

/***/ }),

/***/ "./src/assets/steak.jpg":
/*!******************************!*\
  !*** ./src/assets/steak.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "steak.jpg";

/***/ }),

/***/ "./src/assets/sushi.jpg":
/*!******************************!*\
  !*** ./src/assets/sushi.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sushi.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _load_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-home */ "./src/load-home.js");
/* harmony import */ var _load_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-menu */ "./src/load-menu.js");
/* harmony import */ var _load_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-about */ "./src/load-about.js");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _assets_restaurant_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/restaurant-logo.svg */ "./src/assets/restaurant-logo.svg");
/* harmony import */ var _assets_clock_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/clock-icon.svg */ "./src/assets/clock-icon.svg");
console.log('restaurant');








function renderPage() {
    const homeBtn = document.querySelector(".home");
    const menuBtn = document.querySelector(".menu");
    const aboutBtn = document.querySelector(".about");
    const content = document.querySelector("#content");
    
    loadAssets();
    // loadHome();
    (0,_load_about__WEBPACK_IMPORTED_MODULE_2__["default"])();

    homeBtn.addEventListener("click", () => {
        content.innerHTML = '';
        (0,_load_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
        window.scrollTo(0, 0);
    });

    menuBtn.addEventListener("click", () => {
        content.innerHTML = '';
        (0,_load_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
        window.scrollTo(0, 0);
    });

    aboutBtn.addEventListener("click", () => {
        content.innerHTML = '';
        (0,_load_about__WEBPACK_IMPORTED_MODULE_2__["default"])();
        window.scrollTo(0, 0);
    });
}
renderPage();

function loadAssets() {
    const logo = document.querySelector(".logo");
    logo.src = _assets_restaurant_logo_svg__WEBPACK_IMPORTED_MODULE_4__;

    const clock = document.querySelector(".clock-icon");
    clock.src = _assets_clock_icon_svg__WEBPACK_IMPORTED_MODULE_5__;
}



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map