(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["commons"],{

/***/ "./src/browser-entry.js":
/*!******************************!*\
  !*** ./src/browser-entry.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _web_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web/App */ \"./src/web/App.jsx\");\n/* harmony import */ var _web_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web/store */ \"./src/web/store/index.js\");\n\n\n\n\n\n\nvar store = Object(_web_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\nObject(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"hydrate\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n  store: store\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"BrowserRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_web_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))), document.querySelector(\"#react-root\"));\n\n//# sourceURL=webpack:///./src/browser-entry.js?");

/***/ }),

/***/ "./src/web/App.css":
/*!*************************!*\
  !*** ./src/web/App.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/web/App.css?");

/***/ }),

/***/ "./src/web/App.jsx":
/*!*************************!*\
  !*** ./src/web/App.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./src/web/routes/index.js\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ \"./src/web/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logo.svg */ \"./src/web/logo.svg\");\n/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_4__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\nvar App = function App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header__logo\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: _logo_svg__WEBPACK_IMPORTED_MODULE_4___default.a,\n    alt: \"\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"home-ul\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, \"Home\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/news\"\n  }, \"News\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, _routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map(function (route, idx) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], _extends({\n      key: idx\n    }, route));\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/web/App.jsx?");

/***/ }),

/***/ "./src/web/components/Home/index.jsx":
/*!*******************************************!*\
  !*** ./src/web/components/Home/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Home = function Home() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Hello Welcome to React SSR\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/web/components/Home/index.jsx?");

/***/ }),

/***/ "./src/web/components/New/index.jsx":
/*!******************************************!*\
  !*** ./src/web/components/New/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar News = function News(_ref) {\n  var id = _ref.id,\n      title = _ref.title,\n      body = _ref.body;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, id), \" : \", title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, body));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\n\n//# sourceURL=webpack:///./src/web/components/New/index.jsx?");

/***/ }),

/***/ "./src/web/components/NewsList/action.js":
/*!***********************************************!*\
  !*** ./src/web/components/NewsList/action.js ***!
  \***********************************************/
/*! exports provided: FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE, receivedNews, newsError, fetchNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_NEWS_REQUEST\", function() { return FETCH_NEWS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_NEWS_SUCCESS\", function() { return FETCH_NEWS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_NEWS_FAILURE\", function() { return FETCH_NEWS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receivedNews\", function() { return receivedNews; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsError\", function() { return newsError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchNews\", function() { return fetchNews; });\n//type\nvar FETCH_NEWS_REQUEST = \"FETCH_NEWS_REQUEST\";\nvar FETCH_NEWS_SUCCESS = \"FETCH_NEWS_SUCCESS\";\nvar FETCH_NEWS_FAILURE = \"FETCH_NEWS_FAILURE\"; //action工厂\n\nvar actionFactory = function actionFactory(type) {\n  return function (data) {\n    return {\n      type: type,\n      data: data\n    };\n  };\n};\n\nvar receivedNews = actionFactory(FETCH_NEWS_SUCCESS);\nvar newsError = actionFactory(FETCH_NEWS_FAILURE);\nvar fetchNews = function fetchNews() {\n  return function (dispatch, getState) {\n    return fetch(\"http://127.0.0.1:8080/api/news\").then(function (res) {\n      return res.json();\n    }).then(function (news) {\n      return dispatch(receivedNews(news));\n    })[\"catch\"](function (err) {\n      return dispatch(newsError(err));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/web/components/NewsList/action.js?");

/***/ }),

/***/ "./src/web/components/NewsList/index.jsx":
/*!***********************************************!*\
  !*** ./src/web/components/NewsList/index.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _New__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../New */ \"./src/web/components/New/index.jsx\");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ \"./src/web/components/NewsList/action.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar NewsList =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(NewsList, _Component);\n\n  function NewsList(props) {\n    _classCallCheck(this, NewsList);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(NewsList).call(this, props));\n  }\n\n  _createClass(NewsList, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (this.props.news.length === 0) {\n        this.props.dispatch(NewsList.initialAction());\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var news = this.props.news;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, news.map(function (news) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_New__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _extends({\n          key: news.id\n        }, news));\n      }));\n    }\n  }], [{\n    key: \"initialAction\",\n    value: function initialAction() {\n      return Object(_action__WEBPACK_IMPORTED_MODULE_2__[\"fetchNews\"])();\n    }\n  }]);\n\n  return NewsList;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsList);\n\n//# sourceURL=webpack:///./src/web/components/NewsList/index.jsx?");

/***/ }),

/***/ "./src/web/components/NewsList/reducer.js":
/*!************************************************!*\
  !*** ./src/web/components/NewsList/reducer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ \"./src/web/components/NewsList/action.js\");\n\n\nvar newsReducer = function newsReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _action__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_NEWS_SUCCESS\"]:\n      return action.data;\n\n    default:\n      {\n        return state;\n      }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newsReducer);\n\n//# sourceURL=webpack:///./src/web/components/NewsList/reducer.js?");

/***/ }),

/***/ "./src/web/containers/NewsList/index.jsx":
/*!***********************************************!*\
  !*** ./src/web/containers/NewsList/index.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_NewsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/NewsList */ \"./src/web/components/NewsList/index.jsx\");\n\n\n\nvar mapStateToProps = function mapStateToProps(state, props) {\n  return {\n    news: state.news\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch, props) {\n  return {\n    dispatch: dispatch\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(_components_NewsList__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n\n//# sourceURL=webpack:///./src/web/containers/NewsList/index.jsx?");

/***/ }),

/***/ "./src/web/logo.svg":
/*!**************************!*\
  !*** ./src/web/logo.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/logo.svg\";\n\n//# sourceURL=webpack:///./src/web/logo.svg?");

/***/ }),

/***/ "./src/web/routes/index.js":
/*!*********************************!*\
  !*** ./src/web/routes/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Home */ \"./src/web/components/Home/index.jsx\");\n/* harmony import */ var _containers_NewsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/NewsList */ \"./src/web/containers/NewsList/index.jsx\");\n\n\nvar routes = [{\n  path: \"/\",\n  component: _components_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  exact: true\n}, {\n  path: \"/news\",\n  component: _containers_NewsList__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/web/routes/index.js?");

/***/ }),

/***/ "./src/web/store/index.js":
/*!********************************!*\
  !*** ./src/web/store/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var _components_NewsList_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NewsList/reducer */ \"./src/web/components/NewsList/reducer.js\");\n\n\n\nvar rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  news: _components_NewsList_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\nvar configurStore = function configurStore(initialData) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(rootReducer, initialData, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (configurStore);\n\n//# sourceURL=webpack:///./src/web/store/index.js?");

/***/ })

}]);