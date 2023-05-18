/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Reagir.js":
/*!*******************!*\
  !*** ./Reagir.js ***!
  \*******************/
/***/ ((module) => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n/** @jsx createElement */\n/** @jsxFrag createFragment */\nvar appInitted = false;\nvar createElement = function createElement(tag, props) {\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n  if (typeof tag === 'function') {\n    if (!appInitted) {\n      appInitted = true;\n      app = tag;\n    }\n    return tag.apply(void 0, [props].concat(children));\n  }\n  var element = document.createElement(tag);\n  Object.entries(props || {}).forEach(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n      name = _ref2[0],\n      value = _ref2[1];\n    if (name.startsWith('on') && name.toLowerCase() in window) element.addEventListener(name.toLowerCase().substring(2), value);else if (name === 'style') {\n      element.setAttribute('style', Object.entries(value || {}).reduce(function (prev, current) {\n        var _current = _slicedToArray(current, 2),\n          key = _current[0],\n          val = _current[1];\n        return \"\".concat(prev ? \"\".concat(prev, \" \") : prev).concat(key, \": \").concat(val, \";\");\n      }, ''));\n    } else {\n      element.setAttribute(name, value.toString());\n    }\n  });\n  children.forEach(function (child) {\n    appendChild(element, child);\n  });\n  return element;\n};\nvar appendChild = function appendChild(parent, child) {\n  if (Array.isArray(child)) child.forEach(function (nestedChild) {\n    return appendChild(parent, nestedChild);\n  });else parent.appendChild(child.nodeType ? child : document.createTextNode(child));\n};\nvar createFragment = function createFragment(__) {\n  for (var _len2 = arguments.length, children = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {\n    children[_key2 - 1] = arguments[_key2];\n  }\n  return children;\n};\nvar arraysEqual = function arraysEqual(a, b) {\n  if (a === b) return true;\n  if (a == null || b == null) return false;\n  if (a.length !== b.length) return false;\n\n  // If you don't care about the order of the elements inside\n  // the array, you should sort both arrays here.\n  // Please note that calling sort on an array will modify that array.\n  // you might want to clone your array first.\n\n  for (var i = 0; i < a.length; ++i) {\n    if (a[i] !== b[i]) return false;\n  }\n  return true;\n};\nvar mount = function mount(vnode, container) {\n  container.appendChild(vnode);\n};\nvar replace = function replace(dnode, vnode) {\n  dnode.replaceWith(vnode);\n};\nvar unmount = function unmount(vnode) {\n  vnode.parentNode.removeChild(vnode);\n};\nvar getElementChildren = function getElementChildren(element) {\n  var childNodes = element.childNodes,\n    children = [],\n    i = childNodes.length;\n  while (i--) {\n    if (childNodes[i].nodeType === 1 || childNodes[i].nodeType === 2 || childNodes[i].nodeType === 3) {\n      children.unshift(childNodes[i]);\n    }\n  }\n  return children;\n};\nvar patch = function patch(ddom, vdom) {\n  if (ddom.nodeType === 3 && vdom.textContent !== ddom.textContent) {\n    ddom.textContent = vdom.textContent;\n  } else if (ddom.tagName === vdom.tagName) {\n    var c1 = getElementChildren(ddom);\n    var c2 = getElementChildren(vdom);\n    var commonLength = Math.min(c1.length, c2.length);\n\n    // Patch the children both nodes have in common\n    for (var i = 0; i < commonLength; i++) {\n      patch(c1[i], c2[i]);\n    }\n    if (c1.length > c2.length) {\n      c1.slice(c2.length).forEach(function (child) {\n        unmount(child);\n      });\n    }\n\n    // Old children was shorter\n    // Add the newly added children\n    else if (c2.length > c1.length) {\n      c2.slice(c1.length).forEach(function (child) {\n        mount(child, ddom);\n      });\n    }\n\n    // Attributes\n    var _iterator = _createForOfIteratorHelper(vdom.attributes || []),\n      _step;\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var attr = _step.value;\n        if (attr.name === 'value') {\n          ddom.value = attr.value;\n        }\n        if (attr.name === 'style') {}\n        ddom.setAttribute(attr.name, attr.value);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  } else {\n    replace(ddom, vdom);\n  }\n};\nvar render = function render() {\n  currentStateKey = -1;\n  currentUseEffectKey = -1;\n  // /reset\n  var rootwrapper = document.createElement('div');\n  rootwrapper.setAttribute('id', 'root');\n  rootwrapper.appendChild(createElement(app) || '');\n\n  // const vdom = document.createElement('div').appendChild(\n  //   // <div id=\"root\">\n  //   //   {/* <UsingFragment name=\"foo\" /> */}\n  //   //   {app}\n  //   // </div>\n  //   rootwrapper\n  // );\n  var vdom = rootwrapper;\n\n  // \"?root??\"\n\n  patch(root, vdom);\n};\n\n// useState\nvar componentsState = {};\nvar currentStateKey = -1;\nvar useState = function useState(defaultState) {\n  currentStateKey += 1;\n  var myStateKey = currentStateKey;\n  componentsState[currentStateKey] = componentsState[currentStateKey] || defaultState;\n  return [componentsState[currentStateKey], function (nextState) {\n    componentsState = _objectSpread(_objectSpread({}, componentsState), {}, _defineProperty({}, myStateKey, nextState));\n    render();\n  }];\n};\n// /state\n\n// useEffect\nvar currentUseEffectKey = -1;\nvar useEffectCache = {};\nvar useEffect = function useEffect(func, dependencies) {\n  currentUseEffectKey += 1;\n  var myUseEffectKey = currentUseEffectKey;\n  if (!arraysEqual(dependencies, useEffectCache[myUseEffectKey])) {\n    useEffectCache[myUseEffectKey] = dependencies;\n    setTimeout(function () {\n      func();\n    });\n  }\n};\n// /useEffect\n\n// createRoot\nvar root = '';\nvar app = '';\nvar renderRoot = function renderRoot(nextApp) {\n  // app = nextApp;\n\n  render();\n};\nvar createRoot = function createRoot(domNode) {\n  root = domNode;\n  return {\n    render: renderRoot\n  };\n};\n// /createRoot\nmodule.exports = {\n  createRoot: createRoot,\n  useState: useState,\n  useEffect: useEffect,\n  createElement: createElement,\n  createFragment: createFragment\n};\n\n//# sourceURL=webpack://reagir/./Reagir.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Reagir__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../Reagir */ \"./Reagir.js\");\n/* harmony import */ var _Reagir__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Reagir__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ \"./src/main.js\");\n\n\nvar domNode = document.getElementById('root');\nvar root = _Reagir__WEBPACK_IMPORTED_MODULE_0___default().createRoot(domNode);\nroot.render(_Reagir__WEBPACK_IMPORTED_MODULE_0___default().createElement(_main__WEBPACK_IMPORTED_MODULE_1__.UsingFragment, null));\n\n//# sourceURL=webpack://reagir/./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UsingFragment\": () => (/* binding */ UsingFragment)\n/* harmony export */ });\n/* harmony import */ var _Reagir__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../Reagir */ \"./Reagir.js\");\n/* harmony import */ var _Reagir__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Reagir__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar ChildTestColorGuy = function ChildTestColorGuy(props) {\n  return _Reagir__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      color: props.color\n    }\n  }, \"ColorGuy, color: \", props.color);\n};\nvar UsingFragment = function UsingFragment() {\n  var _useState = (0,_Reagir__WEBPACK_IMPORTED_MODULE_0__.useState)('Hello'),\n    _useState2 = _slicedToArray(_useState, 2),\n    whatToSay = _useState2[0],\n    setWhatToSay = _useState2[1];\n  var _useState3 = (0,_Reagir__WEBPACK_IMPORTED_MODULE_0__.useState)([1, 2, 3]),\n    _useState4 = _slicedToArray(_useState3, 2),\n    numsList = _useState4[0],\n    setNumsList = _useState4[1];\n  var _useState5 = (0,_Reagir__WEBPACK_IMPORTED_MODULE_0__.useState)('This is a regular paragraph'),\n    _useState6 = _slicedToArray(_useState5, 2),\n    regularParagraphText = _useState6[0],\n    setRegularParagraphText = _useState6[1];\n  var _useState7 = (0,_Reagir__WEBPACK_IMPORTED_MODULE_0__.useState)('blue'),\n    _useState8 = _slicedToArray(_useState7, 2),\n    colorGuyColor = _useState8[0],\n    setColorGuyColor = _useState8[1];\n  var _useState9 = (0,_Reagir__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState10 = _slicedToArray(_useState9, 2),\n    showFuckingGod = _useState10[0],\n    setShowFuckingGod = _useState10[1];\n  var _useState11 = (0,_Reagir__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState12 = _slicedToArray(_useState11, 2),\n    inputValue = _useState12[0],\n    setInputValue = _useState12[1];\n  (0,_Reagir__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var colors = ['pink', 'green', 'yellow', 'red', 'violet'];\n    setColorGuyColor(colors[Math.floor(Math.random() * colors.length)]);\n  }, [inputValue]);\n  (0,_Reagir__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (showFuckingGod) {\n      setInputValue('Mwahahahahah');\n    }\n  }, [showFuckingGod]);\n  return _Reagir__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    \"class\": \"jeez\",\n    id: colorGuyColor\n  }, _Reagir__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, regularParagraphText), _Reagir__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, _Reagir__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    id: \"test\"\n  }, \"This is a paragraph in a fragment\"), showFuckingGod ? _Reagir__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"fuckingGod\") : _Reagir__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"a\"), _Reagir__WEBPACK_IMPORTED_MODULE_0___default().createElement((_Reagir__WEBPACK_IMPORTED_MODULE_0___default().createFragment), null, _Reagir__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    id: \"whatToSay\"\n  }, whatToSay), showFuckingGod ? _Reagir__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"fuckingGod\") : _Reagir__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"a\")), _Reagir__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, numsList.map(function (item) {\n    return _Reagir__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, item);\n  }))), _Reagir__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChildTestColorGuy, {\n    color: colorGuyColor\n  }), _Reagir__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: function onClick() {\n      setWhatToSay('Uh Oh');\n      setNumsList(['One', 'Two', 'Three', 'Four']);\n      setRegularParagraphText('Uh oh paragraph text');\n      setShowFuckingGod(true);\n      setColorGuyColor('green');\n    }\n  }, \"Uh oh\"), _Reagir__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, inputValue), _Reagir__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    value: inputValue,\n    onInput: function onInput(e) {\n      setInputValue(e.target.value);\n    }\n  }));\n};\n\n// render();\n\n// const domNode = document.getElementById('root');\n// const root = createRoot(domNode);\n// root.render(<UsingFragment />);\n\n//# sourceURL=webpack://reagir/./src/main.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;