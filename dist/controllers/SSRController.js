module.exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server-entry.js":
/*!*****************************!*\
  !*** ./src/server-entry.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cheerio */ \"cheerio\");\n/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _web_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./web/App */ \"./src/web/App.jsx\");\n/* harmony import */ var _web_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./web/routes */ \"./src/web/routes/index.js\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _web_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./web/store */ \"./src/web/store/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nclass SSRController {\n  constructor() {\n    this.renderToString = react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"];\n    this.routes = _web_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"];\n    this.serialize = serialize_javascript__WEBPACK_IMPORTED_MODULE_9___default.a;\n    this.store = Object(_web_store__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n    this.template = fs__WEBPACK_IMPORTED_MODULE_5___default.a.readFileSync(\"assets/index.html\");\n    fs__WEBPACK_IMPORTED_MODULE_5___default.a.unlinkSync(\"assets/index.html\");\n  }\n  /**\n   *获取Store\n   *\n   * @param {*} url\n   * @returns\n   * @memberof SSRController\n   */\n\n\n  getStore(url) {\n    const promises = this.routes.reduce((acc, route) => {\n      if (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"matchPath\"])(url, route) && route.component && route.component.initialAction) {\n        acc.push(Promise.resolve(this.store.dispatch(route.component.initialAction())));\n      }\n\n      return acc;\n    }, []);\n    return promises;\n  }\n  /**\n   *使用renderToStirng方法在服务端渲染组件\n   *\n   * @param {*} url\n   * @returns\n   * @memberof SSRController\n   */\n\n\n  async getRenderToString(url) {\n    await Promise.all(this.getStore(url));\n    const context = {};\n    const markHTML = this.renderToString(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n      store: this.store\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n      location: url,\n      context: context\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_web_App__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null))));\n    return markHTML;\n  }\n  /**\n   *通过http请求返回html\n   *\n   * @returns\n   * @memberof SSRController\n   */\n\n\n  render() {\n    return async ctx => {\n      const markHTML = await this.getRenderToString(ctx.url);\n      const $ = cheerio__WEBPACK_IMPORTED_MODULE_6___default.a.load(this.template);\n      $(\"#react-root\").html(markHTML);\n      ctx.body = $.html();\n    };\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SSRController);\n\n//# sourceURL=webpack:///./src/server-entry.js?");

/***/ }),

/***/ "./src/web/App.css":
/*!*************************!*\
  !*** ./src/web/App.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/images/App.css\";\n\n//# sourceURL=webpack:///./src/web/App.css?");

/***/ }),

/***/ "./src/web/App.jsx":
/*!*************************!*\
  !*** ./src/web/App.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./src/web/routes/index.js\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ \"./src/web/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logo.svg */ \"./src/web/logo.svg\");\n/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_4__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\nconst App = () => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header__logo\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: _logo_svg__WEBPACK_IMPORTED_MODULE_4___default.a,\n    alt: \"\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"home-ul\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, \"Home\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/news\"\n  }, \"News\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, _routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map((route, idx) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], _extends({\n    key: idx\n  }, route)))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/web/App.jsx?");

/***/ }),

/***/ "./src/web/components/Home/index.jsx":
/*!*******************************************!*\
  !*** ./src/web/components/Home/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Home = () => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Hello Welcome to React SSR\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/web/components/Home/index.jsx?");

/***/ }),

/***/ "./src/web/components/New/index.jsx":
/*!******************************************!*\
  !*** ./src/web/components/New/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst News = ({\n  id,\n  title,\n  body\n}) => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, id), \" : \", title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, body));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\n\n//# sourceURL=webpack:///./src/web/components/New/index.jsx?");

/***/ }),

/***/ "./src/web/components/NewsList/action.js":
/*!***********************************************!*\
  !*** ./src/web/components/NewsList/action.js ***!
  \***********************************************/
/*! exports provided: FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE, receivedNews, newsError, fetchNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_NEWS_REQUEST\", function() { return FETCH_NEWS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_NEWS_SUCCESS\", function() { return FETCH_NEWS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_NEWS_FAILURE\", function() { return FETCH_NEWS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receivedNews\", function() { return receivedNews; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsError\", function() { return newsError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchNews\", function() { return fetchNews; });\n//type\nconst FETCH_NEWS_REQUEST = \"FETCH_NEWS_REQUEST\";\nconst FETCH_NEWS_SUCCESS = \"FETCH_NEWS_SUCCESS\";\nconst FETCH_NEWS_FAILURE = \"FETCH_NEWS_FAILURE\"; //action工厂\n\nconst actionFactory = type => data => ({\n  type,\n  data\n});\n\nconst receivedNews = actionFactory(FETCH_NEWS_SUCCESS);\nconst newsError = actionFactory(FETCH_NEWS_FAILURE);\nconst fetchNews = () => (dispatch, getState) => {\n  return fetch(\"http://127.0.0.1:8080/api/news\").then(res => res.json()).then(news => dispatch(receivedNews(news))).catch(err => dispatch(newsError(err)));\n};\n\n//# sourceURL=webpack:///./src/web/components/NewsList/action.js?");

/***/ }),

/***/ "./src/web/components/NewsList/index.jsx":
/*!***********************************************!*\
  !*** ./src/web/components/NewsList/index.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _New__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../New */ \"./src/web/components/New/index.jsx\");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ \"./src/web/components/NewsList/action.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nclass NewsList extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n  }\n\n  static initialAction() {\n    return Object(_action__WEBPACK_IMPORTED_MODULE_2__[\"fetchNews\"])();\n  }\n\n  componentDidMount() {\n    if (this.props.news.length === 0) {\n      this.props.dispatch(NewsList.initialAction());\n    }\n  }\n\n  render() {\n    const {\n      news\n    } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, news.map(news => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_New__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _extends({\n      key: news.id\n    }, news))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsList);\n\n//# sourceURL=webpack:///./src/web/components/NewsList/index.jsx?");

/***/ }),

/***/ "./src/web/components/NewsList/reducer.js":
/*!************************************************!*\
  !*** ./src/web/components/NewsList/reducer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ \"./src/web/components/NewsList/action.js\");\n\n\nconst newsReducer = (state = [], action) => {\n  switch (action.type) {\n    case _action__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_NEWS_SUCCESS\"]:\n      return action.data;\n\n    default:\n      {\n        return state;\n      }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newsReducer);\n\n//# sourceURL=webpack:///./src/web/components/NewsList/reducer.js?");

/***/ }),

/***/ "./src/web/containers/NewsList/index.jsx":
/*!***********************************************!*\
  !*** ./src/web/containers/NewsList/index.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NewsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/NewsList */ \"./src/web/components/NewsList/index.jsx\");\n\n\n\nconst mapStateToProps = (state, props) => {\n  return {\n    news: state.news\n  };\n};\n\nconst mapDispatchToProps = (dispatch, props) => {\n  return {\n    dispatch\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(_components_NewsList__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n\n//# sourceURL=webpack:///./src/web/containers/NewsList/index.jsx?");

/***/ }),

/***/ "./src/web/logo.svg":
/*!**************************!*\
  !*** ./src/web/logo.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/images/logo.svg\";\n\n//# sourceURL=webpack:///./src/web/logo.svg?");

/***/ }),

/***/ "./src/web/routes/index.js":
/*!*********************************!*\
  !*** ./src/web/routes/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Home */ \"./src/web/components/Home/index.jsx\");\n/* harmony import */ var _containers_NewsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/NewsList */ \"./src/web/containers/NewsList/index.jsx\");\n\n\nconst routes = [{\n  path: \"/\",\n  component: _components_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  exact: true\n}, {\n  path: \"/news\",\n  component: _containers_NewsList__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/web/routes/index.js?");

/***/ }),

/***/ "./src/web/store/index.js":
/*!********************************!*\
  !*** ./src/web/store/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NewsList_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NewsList/reducer */ \"./src/web/components/NewsList/reducer.js\");\n\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  news: _components_NewsList_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\nconst configurStore = initialData => {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(rootReducer, initialData, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (configurStore);\n\n//# sourceURL=webpack:///./src/web/store/index.js?");

/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cheerio\");\n\n//# sourceURL=webpack:///external_%22cheerio%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });