/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n    background-color: lightgray;\n}\n\np{\n    font-size: 24px;\n}\n\n.input_field{\n    border : 1px solid black;\n}\n\n#ntf{\n    display: flex;\n    gap : 10px;\n}\n\nhtml,body{\n    height: 100%;\n    margin: 0;\n}\n\n#ui{\ndisplay: grid;\ngrid-template-rows: 1fr 6fr;\ngrid-template-columns: 2fr 5fr;\nheight: 100%;\n}\n\n#topbar,#listPane, #taskPane{\n    box-sizing: border-box;\n    padding: 20px;\n}\n\n#topbar{\n    grid-area: 1/1/2/3;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n    font-size: 40px;\n}\n\n#listPane{\n    grid-area: 2/1/3/2;\n}\n\n#listPane > form{\n    display: flex;\n    flex-direction: row;\n    gap : 10px;\n}\n\n#taskPane{\n    grid-area: 2/2/3/3;\n}\n\n#topbar, #taskPane, #listPane{\n    border: 1px solid black;\n}\n\n#prev_lists{\n    padding-bottom: 20px;\n    display: flex;\n    flex-direction: column;\n}\n\n.first_half,.task_info{\n    display: flex;\n    flex-direction: row;\n    gap : 10px;\n}\n\n.list_container{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    box-sizing: border-box;\n    margin-top : 10px;\n}\n\n.list_container:hover{\n    border: 1px solid black;\n    cursor: pointer;\n}\n\n.list_container > button{\n    height: 35px;\n    width: 35px;\n}\n\n.list_container > div{\n    width: 100%;\n    height: 100%;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-left: 5px;\n    padding-right: 5px;\n}\n\n.task_details{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n#task_list{\n    display: flex;\n    flex-direction: column;\n    gap : 10px;\n}\n\nbutton{\n    color: white;\n    background-color: black;\n    padding: 5px;\n    border-radius: 15%;\n    font-size: 15px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Lists.js":
/*!**********************!*\
  !*** ./src/Lists.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addList: () => (/* binding */ addList),\n/* harmony export */   deleteList: () => (/* binding */ deleteList),\n/* harmony export */   getAllLists: () => (/* binding */ getAllLists),\n/* harmony export */   getFirstListKey: () => (/* binding */ getFirstListKey),\n/* harmony export */   getList: () => (/* binding */ getList),\n/* harmony export */   nearestValidListKey: () => (/* binding */ nearestValidListKey),\n/* harmony export */   updateLists: () => (/* binding */ updateLists)\n/* harmony export */ });\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ \"./src/Storage.js\");\n\nlet id = 0;\nlet Lists = (0,_Storage__WEBPACK_IMPORTED_MODULE_0__.getAllData)();\n\n/* Function to create Lists */\nconst ListFactory = () => {\n\n    const obj = {'tasks' : {}};\n    id++;\n    return obj;\n}\n\n\n//get the list by its name\nconst getList = (listName) => Lists[listName];\n\n//get All lists\nconst getAllLists = () => Lists;\n\n//get key of first list \nconst getFirstListKey = () => {\n    for(const key in Lists)\n    return key;\n}\n\n//get list of nearest valid key if listname is deleted\nconst nearestValidListKey = (listName) => {\n\n    const ListKeys = Object.keys(Lists);\n    const len = ListKeys.length;\n    if(len == 1) return '';\n    if(ListKeys[len-1] == listName) return ListKeys[len-2];\n    \n    let i;\n    \n    for(i = 0; i<len-1; i++)\n    {\n        if(ListKeys[i] == listName)\n        break;\n    }\n\n    return ListKeys[i+1];\n} \n\n//add a list\nconst addList = (listName) => {\n    const obj = ListFactory();\n    Lists[listName] = obj;\n    (0,_Storage__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(Lists);\n}\n\n//delete a list\nconst deleteList = (listName) => {\n    delete Lists[listName];\n    (0,_Storage__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(Lists);\n}\n\n//update Lists when tasks added\nconst updateLists = (prop) => {\n    Lists = prop;\n    (0,_Storage__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(Lists);\n}\n\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/Lists.js?");

/***/ }),

/***/ "./src/Storage.js":
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAllData: () => (/* binding */ getAllData),\n/* harmony export */   updateStorage: () => (/* binding */ updateStorage)\n/* harmony export */ });\n\nconst updateStorage = (Lists) => localStorage.setItem('listData',JSON.stringify(Lists));\n\nlet listData = localStorage.getItem('listData');\n\nif(listData == null || listData === \"{}\")\n{\n    const defaultObj = {'default' : {'tasks' : {}}};updateStorage(defaultObj);\n}\n\nconst getAllData = () => {\n    \n    //wonder if this check is neccessary anymore\n    let x = localStorage.getItem('listData');\n    if(x!='')\n    x = JSON.parse(localStorage.getItem('listData'));\n    return x;\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/Storage.js?");

/***/ }),

/***/ "./src/Tasks.js":
/*!**********************!*\
  !*** ./src/Tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   removeTask: () => (/* binding */ removeTask)\n/* harmony export */ });\n/* harmony import */ var _Lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lists */ \"./src/Lists.js\");\n\nconst TaskFactory = (dueDate, priority) => {\n\n    const obj = {'dueDate' : dueDate, 'priority' : priority};\n    return obj;\n}\n\nconst addTask = (listData, listName, taskName, dueDate, priority) => {\n\n    listData[listName]['tasks'][taskName] = TaskFactory(dueDate,priority);\n    (0,_Lists__WEBPACK_IMPORTED_MODULE_0__.updateLists)(listData);\n\n    }\n\nconst removeTask = (listData, listName, taskName) => {\n    \n    delete listData[listName]['tasks'][taskName];\n    (0,_Lists__WEBPACK_IMPORTED_MODULE_0__.updateLists)(listData);\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/Tasks.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lists */ \"./src/Lists.js\");\n/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tasks */ \"./src/Tasks.js\");\n\n\n\n\nconst UI = document.createElement('div');\nUI.id = 'ui';\nlet current_list = (0,_Lists__WEBPACK_IMPORTED_MODULE_0__.getFirstListKey)();\n\n//topbar\nconst topbar = document.createElement('div');\ntopbar.id = 'topbar';\ntopbar.textContent = 'To-do';\n\n//list pane\nconst list_pane = document.createElement('div');\nlist_pane.id = 'listPane';\n\nconst list_title = document.createElement('p');\nlist_title.textContent = 'Lists';\nlist_pane.appendChild(list_title);\n\nconst prev_lists = document.createElement('div');\nprev_lists.id = 'prev_lists';\nlist_pane.appendChild(prev_lists);\n\nconst new_list_btn = document.createElement('button');\nnew_list_btn.textContent = \"New List\" ;\nlist_pane.appendChild(new_list_btn);\nnew_list_btn.addEventListener('click', ()=>{\n    new_list_btn.style.visibility = 'collapse';\n    new_list_form.style.visibility = 'visible';\n    list_name.focus();\n});\n\nconst new_list_form = document.createElement('form');\nnew_list_form.style.visibility = 'collapse';\nlist_pane.appendChild(new_list_form);\n\nconst list_name = document.createElement('input');\nlist_name.classList.add('input_field');\nlist_name.setAttribute('type','text');\nlist_name.placeholder = 'List Name';\n\n//task pane\nconst task_pane = document.createElement('div');\ntask_pane.id = 'taskPane';\nconst task_pane_title = document.createElement('p');\ntask_pane_title.textContent = current_list;\ntask_pane.appendChild(task_pane_title);\n\nconst prev_tasks = document.createElement('div');\nprev_tasks.id = 'task_list';\ntask_pane.appendChild(prev_tasks);\n\n//function to display tasks\nconst display_prev_tasks = (listName) => {\n\n    prev_tasks.replaceChildren();\n    const tasks = (0,_Lists__WEBPACK_IMPORTED_MODULE_0__.getList)(listName)['tasks'];\n    current_list = listName;\n    for (const task in tasks)\n    {\n        const task_details = document.createElement('div');\n        task_details.classList.add('task_details');\n\n        let checkbox = document.createElement('input');\n        checkbox.type = 'checkbox';\n        checkbox.id = 'checkbox';\n        \n        checkbox.addEventListener('click', ()=> {\n            if(checkbox.checked){\n                (0,_Tasks__WEBPACK_IMPORTED_MODULE_1__.removeTask)((0,_Lists__WEBPACK_IMPORTED_MODULE_0__.getAllLists)(), current_list, task);\n                prev_tasks.removeChild(task_details);\n            }\n        })\n        \n\n        let title = document.createElement('div');\n        title.id = 'task_title';\n        title.textContent = `${task}`;\n\n        //find a better name\n        let first_half = document.createElement('div');\n        first_half.classList.add('first_half');\n\n        let info = document.createElement('div');\n        info.classList.add('task_info');\n\n        let dueDate = document.createElement('div');\n        dueDate.textContent = `${tasks[task]['dueDate']}`;\n\n        let priority = document.createElement('div');\n        priority.textContent = `${tasks[task]['priority']}`;\n\n\n        first_half.appendChild(checkbox);\n        first_half.appendChild(title);\n        info.appendChild(dueDate);\n        info.appendChild(priority);\n        task_details.appendChild(first_half);\n        task_details.appendChild(info);\n        prev_tasks.appendChild(task_details);\n    }\n}\ndisplay_prev_tasks((0,_Lists__WEBPACK_IMPORTED_MODULE_0__.getFirstListKey)());\n\n//display a list on list pane\nconst display_list = (listName) => {\n\n    const list = document.createElement('div');\n    const list_container = document.createElement('div');\n    list.textContent = listName;\n    list_container.classList.add('list_container');\n    list.addEventListener('click',()=>{\n        current_list = listName;\n        display_prev_tasks(listName);\n        task_pane_title.textContent = current_list;\n    });\n\n    const delete_list_btn = document.createElement('button');\n    delete_list_btn.textContent = 'X';\n    delete_list_btn.addEventListener('click', (e)=>{\n        \n        e.preventDefault();\n        const nearest_valid_key = (0,_Lists__WEBPACK_IMPORTED_MODULE_0__.nearestValidListKey)(listName);\n        if(nearest_valid_key != '')\n        {\n            display_prev_tasks(nearest_valid_key);\n            current_list = nearest_valid_key;\n        }\n        else {\n            prev_tasks.replaceChildren();\n            task_pane_title.textContent = '';\n            new_task_btn.style.visibility = 'collapse';\n        }\n        (0,_Lists__WEBPACK_IMPORTED_MODULE_0__.deleteList)(listName);\n        prev_lists.removeChild(list_container);\n    })\n    \n    list_container.appendChild(list);\n    list_container.appendChild(delete_list_btn)\n    prev_lists.appendChild(list_container);\n}\n\nlet Lists = (0,_Lists__WEBPACK_IMPORTED_MODULE_0__.getAllLists)();\nfor(const listName in Lists)\n{\n    display_list(listName);\n}\n\n//list form\nconst add_list = document.createElement('button');\nadd_list.textContent = '+';\nadd_list.addEventListener('click',(e)=>{\n    e.preventDefault();\n    current_list = list_name.value;\n    new_list_form.style.visibility = 'collapse';\n    new_list_btn.style.visibility = 'visible';\n    (0,_Lists__WEBPACK_IMPORTED_MODULE_0__.addList)(list_name.value); \n    display_list(list_name.value); \n    display_prev_tasks(list_name.value);\n    task_pane_title.textContent = list_name.value;\n    list_name.value = '';\n    new_task_btn.style.visibility = 'visible';\n})\n\nconst cancel_list = document.createElement('button');\ncancel_list.textContent = 'X';\ncancel_list.addEventListener('click',(e)=>{\n    e.preventDefault();\n    new_list_form.style.visibility = 'collapse';\n    new_list_btn.style.visibility = 'visible';\n    list_name.value = '';\n})\n\n\nconst list_components = [list_name,add_list,cancel_list];\nlist_components.forEach(e => {\n    new_list_form.appendChild(e);\n})\n\n//task form\nconst new_task_form = document.createElement('form');\nnew_task_form.id = 'ntf';\nnew_task_form.style.visibility = 'collapse';\ntask_pane.appendChild(new_task_form);\n\n\nconst task_title = document.createElement('input');\ntask_title.classList.add('input_field');\ntask_title.id = 'task_title';\ntask_title.placeholder = 'Enter title here';\n\nconst new_task_btn = document.createElement('button');\nnew_task_btn.textContent = 'New Task';\ntask_pane.appendChild(new_task_btn);\nnew_task_btn.addEventListener('click',(e)=>{\n    e.preventDefault();\n    new_task_form.style.visibility = 'visible';\n    new_task_btn.style.visibility = 'collapse';\n    task_title.focus();\n})\n\nconst task_priority = document.createElement('select');\ntask_priority.id = 'priority';\ntask_priority.setAttribute('for','priority');\ntask_priority.classList.add('input_field');\n['Low','Medium','High'].forEach(e => {\n    const option = document.createElement('option');\n    option.value = e;\n    option.textContent = e;\n    task_priority.appendChild(option);\n})\n\nconst date_input = document.createElement('input');\ndate_input.classList.add('input_field');\ndate_input.type = 'date';\ndate_input.id = 'date';\n\nconst add_task_btn = document.createElement('button');\nadd_task_btn.textContent = 'Add';\nadd_task_btn.addEventListener('click',(e)=>{\n\n    e.preventDefault();\n    \n    if(task_title != '' && date_input.value != '')\n    {\n        \n        new_task_btn.style.visibility = 'visible';\n        new_task_form.style.visibility = 'collapse';\n        /* add fucntion that adds it to storage */\n        const listData = (0,_Lists__WEBPACK_IMPORTED_MODULE_0__.getAllLists)();   \n        (0,_Tasks__WEBPACK_IMPORTED_MODULE_1__.addTask)(listData, current_list, task_title.value, date_input.value, task_priority.value);\n        task_title.value = '';\n        date_input.value = '';\n        task_priority.value = 'Low';\n        display_prev_tasks(current_list);\n    }\n\n});\n\nconst cancel_task = document.createElement('button');\ncancel_task.textContent = 'Cancel';\ncancel_task.type = 'reset';\ncancel_task.addEventListener('click', (e)=>{\n    e.preventDefault();\n    new_task_btn.style.visibility = 'visible';\n    new_task_form.style.visibility = 'collapse';\n    task_title.value = '';\n})\n\nconst arr = [task_title,task_priority,date_input,add_task_btn, cancel_task]\n\narr.forEach(e => {\n    new_task_form.appendChild(e);\n})\n\nUI.appendChild(topbar);\nUI.appendChild(list_pane);\nUI.appendChild(task_pane);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n//# sourceURL=webpack://to-do-list/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nconst body = document.querySelector('body');\nbody.appendChild(_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;