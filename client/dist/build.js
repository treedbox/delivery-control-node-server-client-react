/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./client/src/index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/App.css":
/*!****************************!*\
  !*** ./client/src/App.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./App.css */ \"./node_modules/css-loader/dist/cjs.js!./client/src/App.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/src/App.css?");

/***/ }),

/***/ "./client/src/App.js":
/*!***************************!*\
  !*** ./client/src/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./client/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ \"./client/src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons_bikers_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/bikers.svg */ \"./client/src/icons/bikers.svg\");\n/* harmony import */ var _icons_bikers_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_icons_bikers_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Profiles_Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Profiles/Profile */ \"./client/src/components/Profiles/Profile/index.js\");\n/* harmony import */ var _pages_ShipmentsPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/ShipmentsPage */ \"./client/src/pages/ShipmentsPage/index.js\");\n/* harmony import */ var _pages_LoginPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/LoginPage */ \"./client/src/pages/LoginPage/index.js\");\n/* harmony import */ var _pages_ClientsPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/ClientsPage */ \"./client/src/pages/ClientsPage/index.js\");\n/* harmony import */ var _pages_UsersPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/UsersPage */ \"./client/src/pages/UsersPage/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"./client/node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./client/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _actions_clientActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./actions/clientActions */ \"./client/src/actions/clientActions.js\");\n/* harmony import */ var _actions_shipmentActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./actions/shipmentActions */ \"./client/src/actions/shipmentActions.js\");\n/* harmony import */ var _actions_statusActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./actions/statusActions */ \"./client/src/actions/statusActions.js\");\n/* harmony import */ var _actions_userActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./actions/userActions */ \"./client/src/actions/userActions.js\");\n/* harmony import */ var _actions_loginActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./actions/loginActions */ \"./client/src/actions/loginActions.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"checkUser\", x => this.props.fetchLogin(x));\n\n    _defineProperty(this, \"isLogged\", () => {\n      if (Object.keys(this.props.login).length) {\n        return true;\n      } else {\n        return false;\n      }\n    });\n\n    _defineProperty(this, \"componentDidMount\", () => {});\n\n    props.fetchShipments();\n    props.fetchClients();\n    props.fetchStatuses();\n    props.fetchUsers();\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"BrowserRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"App\"\n    }, this.isLogged() && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n      className: \"App-header\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"NavLink\"], {\n      to: \"/\",\n      className: \"link-logo\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      className: \"App-logo\",\n      alt: \"Delivery control\",\n      src: _icons_bikers_svg__WEBPACK_IMPORTED_MODULE_2___default.a\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Delivery control\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"logged-in-user\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profiles_Profile__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      user: this.props.login,\n      folder: \"users\",\n      alt: \"Profile\",\n      hideEmail: true\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"exit\",\n      onClick: () => this.props.removeLogin()\n    }, \"Exit\"))), this.props.login.role === \"manager\" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n      className: \"main-navigation\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"NavLink\"], {\n      className: \"link-main-nav\",\n      exact: true,\n      to: \"/\"\n    }, \"Shipments\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"NavLink\"], {\n      className: \"link-main-nav\",\n      to: \"/clients\"\n    }, \"Clients\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"NavLink\"], {\n      className: \"link-main-nav\",\n      to: \"/users\"\n    }, \"Users\"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"Switch\"], null, this.isLogged() ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"Route\"], {\n      exact: true,\n      path: \"/clients\",\n      component: _pages_ClientsPage__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"Route\"], {\n      exact: true,\n      path: \"/users\",\n      component: _pages_UsersPage__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"Route\"], {\n      exact: true,\n      path: \"/\",\n      component: _pages_ShipmentsPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_LoginPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      checkUser: this.checkUser,\n      isLogged: this.isLogged\n    }))));\n  }\n\n}\n\nconst mapStateToProps = state => ({\n  users: state.users.items,\n  login: state.logins.item,\n  newUser: state.users.item,\n  shipments: state.shipments.items,\n  clients: state.clients.items,\n  statuses: state.statuses.items\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[\"connect\"])(mapStateToProps, {\n  fetchClients: _actions_clientActions__WEBPACK_IMPORTED_MODULE_10__[\"fetchClients\"],\n  fetchShipments: _actions_shipmentActions__WEBPACK_IMPORTED_MODULE_11__[\"fetchShipments\"],\n  fetchStatuses: _actions_statusActions__WEBPACK_IMPORTED_MODULE_12__[\"fetchStatuses\"],\n  fetchUsers: _actions_userActions__WEBPACK_IMPORTED_MODULE_13__[\"fetchUsers\"],\n  fetchLogin: _actions_loginActions__WEBPACK_IMPORTED_MODULE_14__[\"fetchLogin\"],\n  removeLogin: _actions_loginActions__WEBPACK_IMPORTED_MODULE_14__[\"removeLogin\"]\n})(App));\n\n//# sourceURL=webpack:///./client/src/App.js?");

/***/ }),

/***/ "./client/src/actions/clientActions.js":
/*!*********************************************!*\
  !*** ./client/src/actions/clientActions.js ***!
  \*********************************************/
/*! exports provided: fetchClients, fetchClient, createClient, updateClients */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchClients\", function() { return fetchClients; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchClient\", function() { return fetchClient; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createClient\", function() { return createClient; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateClients\", function() { return updateClients; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./client/src/actions/index.js\");\n\nconst fetchClients = () => dispatch => fetch(\"/api/clients\").then(res => res.json()).then(data => dispatch({\n  type: ___WEBPACK_IMPORTED_MODULE_0__[\"FETCH_CLIENTS\"],\n  payload: data\n})).catch(error => console.log(\"ERROR:\", error));\nconst fetchClient = id => dispatch => fetch(`/api/clients/${id}`).then(res => res.json()).then(data => dispatch({\n  type: ___WEBPACK_IMPORTED_MODULE_0__[\"FETCH_CLIENT\"],\n  payload: data\n})).catch(error => console.log(\"ERROR:\", error));\nconst createClient = client => dispatch => fetch(\"/api/clients\", {\n  method: \"POST\",\n  headers: {\n    \"content-type\": \"application/json\"\n  },\n  body: JSON.stringify(client)\n}).then(res => res.json()).then(data => dispatch({\n  type: ___WEBPACK_IMPORTED_MODULE_0__[\"NEW_CLIENT\"],\n  payload: data\n})).catch(error => console.log(\"ERROR:\", error));\nconst updateClients = clients => dispatch => {\n  return dispatch({\n    type: ___WEBPACK_IMPORTED_MODULE_0__[\"UPDATE_CLIENTS\"],\n    payload: clients\n  });\n};\n\n//# sourceURL=webpack:///./client/src/actions/clientActions.js?");

/***/ }),

/***/ "./client/src/actions/index.js":
/*!*************************************!*\
  !*** ./client/src/actions/index.js ***!
  \*************************************/
/*! exports provided: FETCH_CLIENTS, FETCH_CLIENT, NEW_CLIENT, UPDATE_CLIENTS, FETCH_SHIPMENTS, FETCH_SHIPMENT, NEW_SHIPMENT, UPDATE_SHIPMENTS, FETCH_STATUSES, FETCH_STATUS, NEW_STATUS, UPDATE_STATUSES, FETCH_USERS, FETCH_USER, NEW_USER, UPDATE_USERS, FETCH_LOGIN, REMOVE_LOGIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_CLIENTS\", function() { return FETCH_CLIENTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_CLIENT\", function() { return FETCH_CLIENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NEW_CLIENT\", function() { return NEW_CLIENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_CLIENTS\", function() { return UPDATE_CLIENTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_SHIPMENTS\", function() { return FETCH_SHIPMENTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_SHIPMENT\", function() { return FETCH_SHIPMENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NEW_SHIPMENT\", function() { return NEW_SHIPMENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_SHIPMENTS\", function() { return UPDATE_SHIPMENTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_STATUSES\", function() { return FETCH_STATUSES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_STATUS\", function() { return FETCH_STATUS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NEW_STATUS\", function() { return NEW_STATUS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_STATUSES\", function() { return UPDATE_STATUSES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_USERS\", function() { return FETCH_USERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_USER\", function() { return FETCH_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NEW_USER\", function() { return NEW_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_USERS\", function() { return UPDATE_USERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_LOGIN\", function() { return FETCH_LOGIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_LOGIN\", function() { return REMOVE_LOGIN; });\nconst FETCH_CLIENTS = \"FETCH_CLIENTS\";\nconst FETCH_CLIENT = \"FETCH_CLIENT\";\nconst NEW_CLIENT = \"NEW_CLIENT\";\nconst UPDATE_CLIENTS = \"UPDATE_CLIENTS\";\nconst FETCH_SHIPMENTS = \"FETCH_SHIPMENTS\";\nconst FETCH_SHIPMENT = \"FETCH_SHIPMENT\";\nconst NEW_SHIPMENT = \"NEW_SHIPMENT\";\nconst UPDATE_SHIPMENTS = \"UPDATE_SHIPMENTS\";\nconst FETCH_STATUSES = \"FETCH_STATUSES\";\nconst FETCH_STATUS = \"FETCH_STATUS\";\nconst NEW_STATUS = \"NEW_STATUS\";\nconst UPDATE_STATUSES = \"UPDATE_STATUS\";\nconst FETCH_USERS = \"FETCH_USERS\";\nconst FETCH_USER = \"FETCH_USER\";\nconst NEW_USER = \"NEW_USER\";\nconst UPDATE_USERS = \"UPDATE_USERS\";\nconst FETCH_LOGIN = \"FETCH_LOGIN\";\nconst REMOVE_LOGIN = \"REMOVE_LOGIN\";\n\n//# sourceURL=webpack:///./client/src/actions/index.js?");

/***/ }),

/***/ "./client/src/actions/loginActions.js":
/*!********************************************!*\
  !*** ./client/src/actions/loginActions.js ***!
  \********************************************/
/*! exports provided: fetchLogin, removeLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchLogin\", function() { return fetchLogin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeLogin\", function() { return removeLogin; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./client/src/actions/index.js\");\n\nconst fetchLogin = user => dispatch => fetch(\"/api/login\", {\n  method: \"POST\",\n  headers: {\n    Accept: \"application/json\",\n    \"Content-Type\": \"application/json\"\n  },\n  body: JSON.stringify(user)\n}).then(res => {\n  if (res.ok) {\n    return res.json();\n  } else {\n    throw Error(`Request rejected with status ${res.status}`);\n  }\n}).then(data => dispatch({\n  type: ___WEBPACK_IMPORTED_MODULE_0__[\"FETCH_LOGIN\"],\n  payload: data\n})).catch(error => console.log(\"ERROR:\", error));\nconst removeLogin = () => dispatch => dispatch({\n  type: ___WEBPACK_IMPORTED_MODULE_0__[\"REMOVE_LOGIN\"],\n  payload: {}\n});\n\n//# sourceURL=webpack:///./client/src/actions/loginActions.js?");

/***/ }),

/***/ "./client/src/actions/shipmentActions.js":
/*!***********************************************!*\
  !*** ./client/src/actions/shipmentActions.js ***!
  \***********************************************/
/*! exports provided: fetchShipments, fetchShipment, createShipment, updateShipments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchShipments\", function() { return fetchShipments; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchShipment\", function() { return fetchShipment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createShipment\", function() { return createShipment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateShipments\", function() { return updateShipments; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./client/src/actions/index.js\");\n\nconst fetchShipments = () => dispatch => fetch(\"/api/shipments\").then(res => res.json()).then(data => dispatch({\n  type: ___WEBPACK_IMPORTED_MODULE_0__[\"FETCH_SHIPMENTS\"],\n  payload: data\n})).catch(error => console.log(\"ERROR:\", error));\nconst fetchShipment = id => dispatch => fetch(`/api/shipments/${id}`).then(res => res.json()).then(data => dispatch({\n  type: ___WEBPACK_IMPORTED_MODULE_0__[\"FETCH_SHIPMENT\"],\n  payload: data\n})).catch(error => console.log(\"ERROR:\", error));\nconst createShipment = shipment => dispatch => fetch(\"/api/shipments\", {\n  method: \"POST\",\n  headers: {\n    \"content-type\": \"application/json\"\n  },\n  body: JSON.stringify(shipment)\n}).then(res => res.json()).then(data => dispatch({\n  type: ___WEBPACK_IMPORTED_MODULE_0__[\"NEW_SHIPMENT\"],\n  payload: data\n})).catch(error => console.log(\"ERROR:\", error));\nconst updateShipments = shipments => dispatch => {\n  return dispatch({\n    type: ___WEBPACK_IMPORTED_MODULE_0__[\"UPDATE_SHIPMENTS\"],\n    payload: shipments\n  });\n};\n\n//# sourceURL=webpack:///./client/src/actions/shipmentActions.js?");

/***/ }),

/***/ "./client/src/actions/statusActions.js":
/*!*********************************************!*\
  !*** ./client/src/actions/statusActions.js ***!
  \*********************************************/
/*! exports provided: fetchStatuses, fetchStatus, createStatus, updateStatuses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchStatuses\", function() { return fetchStatuses; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchStatus\", function() { return fetchStatus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createStatus\", function() { return createStatus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateStatuses\", function() { return updateStatuses; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./client/src/actions/index.js\");\n\nconst fetchStatuses = () => dispatch => fetch(\"/api/statuses\").then(res => res.json()).then(data => dispatch({\n  type: ___WEBPACK_IMPORTED_MODULE_0__[\"FETCH_STATUSES\"],\n  payload: data\n})).catch(error => console.log(\"ERROR:\", error));\nconst fetchStatus = id => dispatch => fetch(`/api/statuses/${id}`).then(res => res.json()).then(data => dispatch({\n  type: ___WEBPACK_IMPORTED_MODULE_0__[\"FETCH_STATUS\"],\n  payload: data\n})).catch(error => console.log(\"ERROR:\", error));\nconst createStatus = status => dispatch => fetch(\"/api/statuses\", {\n  method: \"POST\",\n  headers: {\n    \"content-type\": \"application/json\"\n  },\n  body: JSON.stringify(status)\n}).then(res => res.json()).then(data => dispatch({\n  type: ___WEBPACK_IMPORTED_MODULE_0__[\"NEW_STATUS\"],\n  payload: data\n})).catch(error => console.log(\"ERROR:\", error));\nconst updateStatuses = statuses => dispatch => {\n  return dispatch({\n    type: ___WEBPACK_IMPORTED_MODULE_0__[\"UPDATE_STATUSES\"],\n    payload: statuses\n  });\n};\n\n//# sourceURL=webpack:///./client/src/actions/statusActions.js?");

/***/ }),

/***/ "./client/src/actions/userActions.js":
/*!*******************************************!*\
  !*** ./client/src/actions/userActions.js ***!
  \*******************************************/
/*! exports provided: fetchUsers, fetchUser, createUser, updateUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchUsers\", function() { return fetchUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchUser\", function() { return fetchUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUser\", function() { return createUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateUsers\", function() { return updateUsers; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./client/src/actions/index.js\");\n\nconst fetchUsers = () => dispatch => fetch(\"/api/users\").then(res => res.json()).then(data => dispatch({\n  type: ___WEBPACK_IMPORTED_MODULE_0__[\"FETCH_USERS\"],\n  payload: data\n})).catch(error => console.log(\"ERROR:\", error));\nconst fetchUser = id => dispatch => fetch(`/api/users/${id}`).then(res => {\n  console.log(`fetchUser res:`, res);\n  return res.json();\n}).then(data => dispatch({\n  type: ___WEBPACK_IMPORTED_MODULE_0__[\"FETCH_USER\"],\n  payload: data\n})).catch(error => console.log(\"ERROR:\", error));\nconst createUser = user => dispatch => fetch(\"/api/users\", {\n  method: \"POST\",\n  headers: {\n    \"content-type\": \"application/json\"\n  },\n  body: JSON.stringify(user)\n}).then(res => res.json()).then(data => dispatch({\n  type: ___WEBPACK_IMPORTED_MODULE_0__[\"NEW_USER\"],\n  payload: data\n})).catch(error => console.log(\"ERROR:\", error));\nconst updateUsers = users => dispatch => {\n  return dispatch({\n    type: ___WEBPACK_IMPORTED_MODULE_0__[\"UPDATE_USERS\"],\n    payload: users\n  });\n};\n\n//# sourceURL=webpack:///./client/src/actions/userActions.js?");

/***/ }),

/***/ "./client/src/components/Addresses/Address/index.js":
/*!**********************************************************!*\
  !*** ./client/src/components/Addresses/Address/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./client/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./client/src/components/Addresses/Address/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Address = ({\n  address,\n  hideStreet,\n  hideState,\n  hideCountry\n}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"address\"\n}, !hideStreet && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, address.street_number, \" \", address.street_name)), !hideState && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, address.state_full, \" \", address.state, \" \", address.zipcode), !hideCountry && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, address.city, \" \", address.country));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Address);\n\n//# sourceURL=webpack:///./client/src/components/Addresses/Address/index.js?");

/***/ }),

/***/ "./client/src/components/Addresses/Address/style.css":
/*!***********************************************************!*\
  !*** ./client/src/components/Addresses/Address/style.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./client/src/components/Addresses/Address/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/src/components/Addresses/Address/style.css?");

/***/ }),

/***/ "./client/src/components/Addresses/index.js":
/*!**************************************************!*\
  !*** ./client/src/components/Addresses/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./client/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./client/src/components/Addresses/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Address */ \"./client/src/components/Addresses/Address/index.js\");\n\n\n\n\nconst Addresses = ({\n  addresses\n}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"addresses\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Addresses\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"addresses-list\"\n}, addresses.map(e => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Address__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  key: e.id,\n  address: e\n}))));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Addresses);\n\n//# sourceURL=webpack:///./client/src/components/Addresses/index.js?");

/***/ }),

/***/ "./client/src/components/Addresses/style.css":
/*!***************************************************!*\
  !*** ./client/src/components/Addresses/style.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./client/src/components/Addresses/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/src/components/Addresses/style.css?");

/***/ }),

/***/ "./client/src/components/Form/Input/index.js":
/*!***************************************************!*\
  !*** ./client/src/components/Form/Input/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./client/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Input = ({\n  attr,\n  handleChange\n}) => {\n  const {\n    label,\n    type,\n    name,\n    value,\n    placeholder,\n    required\n  } = attr;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, label, \":\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    name: name,\n    type: type,\n    value: value,\n    placeholder: placeholder,\n    required: required,\n    onChange: handleChange\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\n//# sourceURL=webpack:///./client/src/components/Form/Input/index.js?");

/***/ }),

/***/ "./client/src/components/Form/index.js":
/*!*********************************************!*\
  !*** ./client/src/components/Form/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./client/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./client/src/components/Form/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ \"./client/src/components/Form/Input/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nclass Form extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"handleChange\", ev => {\n      const newData = this.state.data.map(e => {\n        if (e.name === ev.target.name) {\n          e.value = ev.target.value;\n        }\n\n        return e;\n      });\n      this.setState(state => ({\n        data: newData\n      }));\n    });\n\n    _defineProperty(this, \"resetForm\", ev => {\n      const newData = this.state.data.map(e => {\n        e.value = \"\";\n        return e;\n      });\n      this.setState(state => ({\n        data: newData\n      }));\n    });\n\n    _defineProperty(this, \"render\", () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      className: this.props.className,\n      onSubmit: this.props.handleSubmit\n    }, this.state.data.map(e => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: e.id,\n      attr: e,\n      handleChange: this.handleChange\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      type: \"reset\",\n      onClick: this.resetForm\n    }, \"RESET\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      type: \"submit\"\n    }, \"SUBMIT\")));\n\n    this.state = {\n      data: this.props.data\n    };\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\n//# sourceURL=webpack:///./client/src/components/Form/index.js?");

/***/ }),

/***/ "./client/src/components/Form/style.css":
/*!**********************************************!*\
  !*** ./client/src/components/Form/style.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./client/src/components/Form/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/src/components/Form/style.css?");

/***/ }),

/***/ "./client/src/components/Picture/index.js":
/*!************************************************!*\
  !*** ./client/src/components/Picture/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./client/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Picture = ({\n  file,\n  folder,\n  alt\n}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n  className: \"picture\",\n  alt: alt,\n  src: __webpack_require__(\"./client/src/images sync recursive ^\\\\.\\\\/.*\\\\/.*$\")(`./${folder}/${file}`)\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Picture);\n\n//# sourceURL=webpack:///./client/src/components/Picture/index.js?");

/***/ }),

/***/ "./client/src/components/Profiles/Profile/index.js":
/*!*********************************************************!*\
  !*** ./client/src/components/Profiles/Profile/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./client/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./client/src/components/Profiles/Profile/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Picture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Picture */ \"./client/src/components/Picture/index.js\");\n/* harmony import */ var _Addresses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Addresses */ \"./client/src/components/Addresses/index.js\");\n\n\n\n\n\nconst Profile = ({\n  user,\n  folder,\n  alt,\n  hidePicture,\n  hideName,\n  hideAddresses,\n  hideEmail,\n  hideRole\n}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"article\", {\n  className: \"profile\"\n}, !hidePicture && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Picture__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  file: user ? user.picture : \"unknown.png\",\n  folder: folder,\n  alt: alt\n}), !hideName && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n  className: \"name\"\n}, user ? user.name : \"  ---  \"), !hideEmail && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n  className: \"email\"\n}, user ? user.email : \"\"), !hideAddresses && user.addresses && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Addresses__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  addresses: user.addresses\n}), !hideRole && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n  className: \"role\"\n}, user.role));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\n\n//# sourceURL=webpack:///./client/src/components/Profiles/Profile/index.js?");

/***/ }),

/***/ "./client/src/components/Profiles/Profile/style.css":
/*!**********************************************************!*\
  !*** ./client/src/components/Profiles/Profile/style.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./client/src/components/Profiles/Profile/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/src/components/Profiles/Profile/style.css?");

/***/ }),

/***/ "./client/src/components/Profiles/index.js":
/*!*************************************************!*\
  !*** ./client/src/components/Profiles/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./client/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./client/src/components/Profiles/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile */ \"./client/src/components/Profiles/Profile/index.js\");\n\n\n\n\nconst Profiles = ({\n  list,\n  folder,\n  alt,\n  hideName,\n  hideAddresses,\n  hideEmail,\n  hideRole\n}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n  className: \"profiles\"\n}, list.map(e => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Profile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  key: e.id,\n  user: e,\n  folder: folder ? folder : \"users\",\n  alt: alt ? alt : \"Profile\",\n  hideName: hideName,\n  hideAddresses: hideAddresses,\n  hideEmail: hideEmail,\n  hideRole: hideRole\n})));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profiles);\n\n//# sourceURL=webpack:///./client/src/components/Profiles/index.js?");

/***/ }),

/***/ "./client/src/components/Profiles/style.css":
/*!**************************************************!*\
  !*** ./client/src/components/Profiles/style.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./client/src/components/Profiles/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/src/components/Profiles/style.css?");

/***/ }),

/***/ "./client/src/components/Select/Option/index.js":
/*!******************************************************!*\
  !*** ./client/src/components/Select/Option/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./client/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Option = ({\n  option\n}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n  value: option.value\n}, option.text);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Option);\n\n//# sourceURL=webpack:///./client/src/components/Select/Option/index.js?");

/***/ }),

/***/ "./client/src/components/Select/index.js":
/*!***********************************************!*\
  !*** ./client/src/components/Select/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./client/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Option */ \"./client/src/components/Select/Option/index.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./client/src/components/Select/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Select = ({\n  id,\n  value,\n  handleSelect,\n  options\n}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n  className: \"select \" + value,\n  id: id,\n  value: value,\n  onChange: handleSelect\n}, options.map(e => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Option__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  key: e.id,\n  option: e\n})));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Select);\n\n//# sourceURL=webpack:///./client/src/components/Select/index.js?");

/***/ }),

/***/ "./client/src/components/Select/style.css":
/*!************************************************!*\
  !*** ./client/src/components/Select/style.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./client/src/components/Select/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/src/components/Select/style.css?");

/***/ }),

/***/ "./client/src/components/Shipments/Shipment/index.js":
/*!***********************************************************!*\
  !*** ./client/src/components/Shipments/Shipment/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./client/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./client/src/components/Shipments/Shipment/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Profiles_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Profiles/Profile */ \"./client/src/components/Profiles/Profile/index.js\");\n/* harmony import */ var _Addresses_Address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Addresses/Address */ \"./client/src/components/Addresses/Address/index.js\");\n/* harmony import */ var _Timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Timeline */ \"./client/src/components/Timeline/index.js\");\n\n\n\n\n\n\nconst Shipment = ({\n  shipment,\n  user,\n  nextStatus,\n  togglebikersList,\n  login,\n  statuses\n}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"article\", {\n  key: shipment.id,\n  className: \"shipment\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, shipment.number), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"shipment-status\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n  className: \"button_status \" + shipment.status.type,\n  onClick: login.role === \"biker\" && shipment.status.id !== 4 ? () => nextStatus(shipment.id, shipment.status.id) : null,\n  disabled: login.role === \"manager\" || shipment.status.id === 4\n}, shipment.status.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"user \" + (shipment.status.id === 1 && \"allow_click\"),\n  onClick: shipment.status.id === 1 ? () => togglebikersList(shipment.id) : null\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Profiles_Profile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  user: user,\n  hideAddresses: true,\n  hideEmail: true,\n  hideRole: true,\n  folder: \"users\",\n  alt: \"Profile\"\n}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"details\", {\n  className: \"client\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"summary\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, shipment.client.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Profiles_Profile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  user: shipment.client,\n  hideAddresses: true,\n  folder: \"clients\",\n  alt: \"Profile\"\n})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"details\", {\n  className: \"client-address\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"summary\", null, shipment.client_address.street_number, \" \", shipment.client_address.street_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Addresses_Address__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  address: shipment.client_address,\n  hideStreet: true\n})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"details\", {\n  className: \"timeline\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"summary\", null, \"Timeline\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Timeline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n  timeline: shipment.timeline,\n  statuses: statuses\n})));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shipment);\n\n//# sourceURL=webpack:///./client/src/components/Shipments/Shipment/index.js?");

/***/ }),

/***/ "./client/src/components/Shipments/Shipment/style.css":
/*!************************************************************!*\
  !*** ./client/src/components/Shipments/Shipment/style.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./client/src/components/Shipments/Shipment/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/src/components/Shipments/Shipment/style.css?");

/***/ }),

/***/ "./client/src/components/Shipments/index.js":
/*!**************************************************!*\
  !*** ./client/src/components/Shipments/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./client/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./client/src/components/Shipments/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Shipment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shipment */ \"./client/src/components/Shipments/Shipment/index.js\");\n\n\n\n\nconst Shipments = ({\n  list,\n  users,\n  target,\n  value,\n  nextStatus,\n  togglebikersList,\n  login,\n  statuses\n}) => {\n  if (target && value >= 0) {\n    return list.filter(e => e[target] === value).map(e => {\n      const user = users.find(x => x.id === e.user_id);\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shipment__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        key: e.id,\n        shipment: e,\n        user: user,\n        nextStatus: nextStatus,\n        togglebikersList: togglebikersList,\n        login: login,\n        statuses: statuses\n      });\n    });\n  } else {\n    return list.map(e => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shipment__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      e: e\n    }));\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shipments);\n\n//# sourceURL=webpack:///./client/src/components/Shipments/index.js?");

/***/ }),

/***/ "./client/src/components/Shipments/style.css":
/*!***************************************************!*\
  !*** ./client/src/components/Shipments/style.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./client/src/components/Shipments/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/src/components/Shipments/style.css?");

/***/ }),

/***/ "./client/src/components/Timeline/index.js":
/*!*************************************************!*\
  !*** ./client/src/components/Timeline/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./client/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./client/src/components/Timeline/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Timeline = ({\n  timeline,\n  statuses\n}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"timeline-items\"\n}, timeline.map(e => {\n  const time = statuses.find(x => x.id === e.id);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    key: e.id,\n    className: \"timeline-item\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"status \" + time.type\n  }, time.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"time\"\n  }, e.timestamp));\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\n\n//# sourceURL=webpack:///./client/src/components/Timeline/index.js?");

/***/ }),

/***/ "./client/src/components/Timeline/style.css":
/*!**************************************************!*\
  !*** ./client/src/components/Timeline/style.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./client/src/components/Timeline/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/src/components/Timeline/style.css?");

/***/ }),

/***/ "./client/src/icons/bikers.svg":
/*!*************************************!*\
  !*** ./client/src/icons/bikers.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./icons/bikers.svg\";\n\n//# sourceURL=webpack:///./client/src/icons/bikers.svg?");

/***/ }),

/***/ "./client/src/images sync recursive ^\\.\\/.*\\/.*$":
/*!*********************************************!*\
  !*** ./client/src/images sync ^\.\/.*\/.*$ ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./clients/image-1.png\": \"./client/src/images/clients/image-1.png\",\n\t\"./clients/image-10.png\": \"./client/src/images/clients/image-10.png\",\n\t\"./clients/image-11.png\": \"./client/src/images/clients/image-11.png\",\n\t\"./clients/image-12.png\": \"./client/src/images/clients/image-12.png\",\n\t\"./clients/image-13.png\": \"./client/src/images/clients/image-13.png\",\n\t\"./clients/image-14.png\": \"./client/src/images/clients/image-14.png\",\n\t\"./clients/image-15.png\": \"./client/src/images/clients/image-15.png\",\n\t\"./clients/image-16.png\": \"./client/src/images/clients/image-16.png\",\n\t\"./clients/image-17.png\": \"./client/src/images/clients/image-17.png\",\n\t\"./clients/image-18.png\": \"./client/src/images/clients/image-18.png\",\n\t\"./clients/image-19.png\": \"./client/src/images/clients/image-19.png\",\n\t\"./clients/image-2.png\": \"./client/src/images/clients/image-2.png\",\n\t\"./clients/image-20.png\": \"./client/src/images/clients/image-20.png\",\n\t\"./clients/image-21.png\": \"./client/src/images/clients/image-21.png\",\n\t\"./clients/image-22.png\": \"./client/src/images/clients/image-22.png\",\n\t\"./clients/image-23.png\": \"./client/src/images/clients/image-23.png\",\n\t\"./clients/image-24.png\": \"./client/src/images/clients/image-24.png\",\n\t\"./clients/image-25.png\": \"./client/src/images/clients/image-25.png\",\n\t\"./clients/image-26.png\": \"./client/src/images/clients/image-26.png\",\n\t\"./clients/image-27.png\": \"./client/src/images/clients/image-27.png\",\n\t\"./clients/image-28.png\": \"./client/src/images/clients/image-28.png\",\n\t\"./clients/image-29.png\": \"./client/src/images/clients/image-29.png\",\n\t\"./clients/image-3.png\": \"./client/src/images/clients/image-3.png\",\n\t\"./clients/image-30.png\": \"./client/src/images/clients/image-30.png\",\n\t\"./clients/image-31.png\": \"./client/src/images/clients/image-31.png\",\n\t\"./clients/image-32.png\": \"./client/src/images/clients/image-32.png\",\n\t\"./clients/image-33.png\": \"./client/src/images/clients/image-33.png\",\n\t\"./clients/image-34.png\": \"./client/src/images/clients/image-34.png\",\n\t\"./clients/image-35.png\": \"./client/src/images/clients/image-35.png\",\n\t\"./clients/image-36.png\": \"./client/src/images/clients/image-36.png\",\n\t\"./clients/image-37.png\": \"./client/src/images/clients/image-37.png\",\n\t\"./clients/image-38.png\": \"./client/src/images/clients/image-38.png\",\n\t\"./clients/image-39.png\": \"./client/src/images/clients/image-39.png\",\n\t\"./clients/image-4.png\": \"./client/src/images/clients/image-4.png\",\n\t\"./clients/image-40.png\": \"./client/src/images/clients/image-40.png\",\n\t\"./clients/image-41.png\": \"./client/src/images/clients/image-41.png\",\n\t\"./clients/image-42.png\": \"./client/src/images/clients/image-42.png\",\n\t\"./clients/image-43.png\": \"./client/src/images/clients/image-43.png\",\n\t\"./clients/image-44.png\": \"./client/src/images/clients/image-44.png\",\n\t\"./clients/image-45.png\": \"./client/src/images/clients/image-45.png\",\n\t\"./clients/image-46.png\": \"./client/src/images/clients/image-46.png\",\n\t\"./clients/image-47.png\": \"./client/src/images/clients/image-47.png\",\n\t\"./clients/image-48.png\": \"./client/src/images/clients/image-48.png\",\n\t\"./clients/image-49.png\": \"./client/src/images/clients/image-49.png\",\n\t\"./clients/image-5.png\": \"./client/src/images/clients/image-5.png\",\n\t\"./clients/image-50.png\": \"./client/src/images/clients/image-50.png\",\n\t\"./clients/image-51.png\": \"./client/src/images/clients/image-51.png\",\n\t\"./clients/image-52.png\": \"./client/src/images/clients/image-52.png\",\n\t\"./clients/image-53.png\": \"./client/src/images/clients/image-53.png\",\n\t\"./clients/image-54.png\": \"./client/src/images/clients/image-54.png\",\n\t\"./clients/image-55.png\": \"./client/src/images/clients/image-55.png\",\n\t\"./clients/image-56.png\": \"./client/src/images/clients/image-56.png\",\n\t\"./clients/image-57.png\": \"./client/src/images/clients/image-57.png\",\n\t\"./clients/image-58.png\": \"./client/src/images/clients/image-58.png\",\n\t\"./clients/image-59.png\": \"./client/src/images/clients/image-59.png\",\n\t\"./clients/image-6.png\": \"./client/src/images/clients/image-6.png\",\n\t\"./clients/image-60.png\": \"./client/src/images/clients/image-60.png\",\n\t\"./clients/image-61.png\": \"./client/src/images/clients/image-61.png\",\n\t\"./clients/image-62.png\": \"./client/src/images/clients/image-62.png\",\n\t\"./clients/image-63.png\": \"./client/src/images/clients/image-63.png\",\n\t\"./clients/image-64.png\": \"./client/src/images/clients/image-64.png\",\n\t\"./clients/image-65.png\": \"./client/src/images/clients/image-65.png\",\n\t\"./clients/image-66.png\": \"./client/src/images/clients/image-66.png\",\n\t\"./clients/image-7.png\": \"./client/src/images/clients/image-7.png\",\n\t\"./clients/image-8.png\": \"./client/src/images/clients/image-8.png\",\n\t\"./clients/image-9.png\": \"./client/src/images/clients/image-9.png\",\n\t\"./clients/unknown.png\": \"./client/src/images/clients/unknown.png\",\n\t\"./users/image-1.png\": \"./client/src/images/users/image-1.png\",\n\t\"./users/image-10.png\": \"./client/src/images/users/image-10.png\",\n\t\"./users/image-100.png\": \"./client/src/images/users/image-100.png\",\n\t\"./users/image-11.png\": \"./client/src/images/users/image-11.png\",\n\t\"./users/image-12.png\": \"./client/src/images/users/image-12.png\",\n\t\"./users/image-13.png\": \"./client/src/images/users/image-13.png\",\n\t\"./users/image-14.png\": \"./client/src/images/users/image-14.png\",\n\t\"./users/image-15.png\": \"./client/src/images/users/image-15.png\",\n\t\"./users/image-16.png\": \"./client/src/images/users/image-16.png\",\n\t\"./users/image-17.png\": \"./client/src/images/users/image-17.png\",\n\t\"./users/image-18.png\": \"./client/src/images/users/image-18.png\",\n\t\"./users/image-19.png\": \"./client/src/images/users/image-19.png\",\n\t\"./users/image-2.png\": \"./client/src/images/users/image-2.png\",\n\t\"./users/image-20.png\": \"./client/src/images/users/image-20.png\",\n\t\"./users/image-21.png\": \"./client/src/images/users/image-21.png\",\n\t\"./users/image-22.png\": \"./client/src/images/users/image-22.png\",\n\t\"./users/image-23.png\": \"./client/src/images/users/image-23.png\",\n\t\"./users/image-24.png\": \"./client/src/images/users/image-24.png\",\n\t\"./users/image-25.png\": \"./client/src/images/users/image-25.png\",\n\t\"./users/image-26.png\": \"./client/src/images/users/image-26.png\",\n\t\"./users/image-27.png\": \"./client/src/images/users/image-27.png\",\n\t\"./users/image-28.png\": \"./client/src/images/users/image-28.png\",\n\t\"./users/image-29.png\": \"./client/src/images/users/image-29.png\",\n\t\"./users/image-3.png\": \"./client/src/images/users/image-3.png\",\n\t\"./users/image-30.png\": \"./client/src/images/users/image-30.png\",\n\t\"./users/image-31.png\": \"./client/src/images/users/image-31.png\",\n\t\"./users/image-32.png\": \"./client/src/images/users/image-32.png\",\n\t\"./users/image-33.png\": \"./client/src/images/users/image-33.png\",\n\t\"./users/image-34.png\": \"./client/src/images/users/image-34.png\",\n\t\"./users/image-35.png\": \"./client/src/images/users/image-35.png\",\n\t\"./users/image-36.png\": \"./client/src/images/users/image-36.png\",\n\t\"./users/image-37.png\": \"./client/src/images/users/image-37.png\",\n\t\"./users/image-38.png\": \"./client/src/images/users/image-38.png\",\n\t\"./users/image-39.png\": \"./client/src/images/users/image-39.png\",\n\t\"./users/image-4.png\": \"./client/src/images/users/image-4.png\",\n\t\"./users/image-40.png\": \"./client/src/images/users/image-40.png\",\n\t\"./users/image-41.png\": \"./client/src/images/users/image-41.png\",\n\t\"./users/image-42.png\": \"./client/src/images/users/image-42.png\",\n\t\"./users/image-43.png\": \"./client/src/images/users/image-43.png\",\n\t\"./users/image-44.png\": \"./client/src/images/users/image-44.png\",\n\t\"./users/image-45.png\": \"./client/src/images/users/image-45.png\",\n\t\"./users/image-46.png\": \"./client/src/images/users/image-46.png\",\n\t\"./users/image-47.png\": \"./client/src/images/users/image-47.png\",\n\t\"./users/image-48.png\": \"./client/src/images/users/image-48.png\",\n\t\"./users/image-49.png\": \"./client/src/images/users/image-49.png\",\n\t\"./users/image-5.png\": \"./client/src/images/users/image-5.png\",\n\t\"./users/image-50.png\": \"./client/src/images/users/image-50.png\",\n\t\"./users/image-51.png\": \"./client/src/images/users/image-51.png\",\n\t\"./users/image-52.png\": \"./client/src/images/users/image-52.png\",\n\t\"./users/image-53.png\": \"./client/src/images/users/image-53.png\",\n\t\"./users/image-54.png\": \"./client/src/images/users/image-54.png\",\n\t\"./users/image-55.png\": \"./client/src/images/users/image-55.png\",\n\t\"./users/image-56.png\": \"./client/src/images/users/image-56.png\",\n\t\"./users/image-57.png\": \"./client/src/images/users/image-57.png\",\n\t\"./users/image-58.png\": \"./client/src/images/users/image-58.png\",\n\t\"./users/image-59.png\": \"./client/src/images/users/image-59.png\",\n\t\"./users/image-6.png\": \"./client/src/images/users/image-6.png\",\n\t\"./users/image-60.png\": \"./client/src/images/users/image-60.png\",\n\t\"./users/image-61.png\": \"./client/src/images/users/image-61.png\",\n\t\"./users/image-62.png\": \"./client/src/images/users/image-62.png\",\n\t\"./users/image-63.png\": \"./client/src/images/users/image-63.png\",\n\t\"./users/image-64.png\": \"./client/src/images/users/image-64.png\",\n\t\"./users/image-65.png\": \"./client/src/images/users/image-65.png\",\n\t\"./users/image-66.png\": \"./client/src/images/users/image-66.png\",\n\t\"./users/image-67.png\": \"./client/src/images/users/image-67.png\",\n\t\"./users/image-68.png\": \"./client/src/images/users/image-68.png\",\n\t\"./users/image-69.png\": \"./client/src/images/users/image-69.png\",\n\t\"./users/image-7.png\": \"./client/src/images/users/image-7.png\",\n\t\"./users/image-70.png\": \"./client/src/images/users/image-70.png\",\n\t\"./users/image-71.png\": \"./client/src/images/users/image-71.png\",\n\t\"./users/image-72.png\": \"./client/src/images/users/image-72.png\",\n\t\"./users/image-73.png\": \"./client/src/images/users/image-73.png\",\n\t\"./users/image-74.png\": \"./client/src/images/users/image-74.png\",\n\t\"./users/image-75.png\": \"./client/src/images/users/image-75.png\",\n\t\"./users/image-76.png\": \"./client/src/images/users/image-76.png\",\n\t\"./users/image-77.png\": \"./client/src/images/users/image-77.png\",\n\t\"./users/image-78.png\": \"./client/src/images/users/image-78.png\",\n\t\"./users/image-79.png\": \"./client/src/images/users/image-79.png\",\n\t\"./users/image-8.png\": \"./client/src/images/users/image-8.png\",\n\t\"./users/image-80.png\": \"./client/src/images/users/image-80.png\",\n\t\"./users/image-81.png\": \"./client/src/images/users/image-81.png\",\n\t\"./users/image-82.png\": \"./client/src/images/users/image-82.png\",\n\t\"./users/image-83.png\": \"./client/src/images/users/image-83.png\",\n\t\"./users/image-84.png\": \"./client/src/images/users/image-84.png\",\n\t\"./users/image-85.png\": \"./client/src/images/users/image-85.png\",\n\t\"./users/image-86.png\": \"./client/src/images/users/image-86.png\",\n\t\"./users/image-87.png\": \"./client/src/images/users/image-87.png\",\n\t\"./users/image-88.png\": \"./client/src/images/users/image-88.png\",\n\t\"./users/image-89.png\": \"./client/src/images/users/image-89.png\",\n\t\"./users/image-9.png\": \"./client/src/images/users/image-9.png\",\n\t\"./users/image-90.png\": \"./client/src/images/users/image-90.png\",\n\t\"./users/image-91.png\": \"./client/src/images/users/image-91.png\",\n\t\"./users/image-92.png\": \"./client/src/images/users/image-92.png\",\n\t\"./users/image-93.png\": \"./client/src/images/users/image-93.png\",\n\t\"./users/image-94.png\": \"./client/src/images/users/image-94.png\",\n\t\"./users/image-95.png\": \"./client/src/images/users/image-95.png\",\n\t\"./users/image-96.png\": \"./client/src/images/users/image-96.png\",\n\t\"./users/image-97.png\": \"./client/src/images/users/image-97.png\",\n\t\"./users/image-98.png\": \"./client/src/images/users/image-98.png\",\n\t\"./users/image-99.png\": \"./client/src/images/users/image-99.png\",\n\t\"./users/unknown.png\": \"./client/src/images/users/unknown.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./client/src/images sync recursive ^\\\\.\\\\/.*\\\\/.*$\";\n\n//# sourceURL=webpack:///./client/src/images_sync_^\\.\\/.*\\/.*$?");

/***/ }),

/***/ "./client/src/images/clients/image-1.png":
/*!***********************************************!*\
  !*** ./client/src/images/clients/image-1.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-1.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-1.png?");

/***/ }),

/***/ "./client/src/images/clients/image-10.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-10.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-10.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-10.png?");

/***/ }),

/***/ "./client/src/images/clients/image-11.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-11.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-11.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-11.png?");

/***/ }),

/***/ "./client/src/images/clients/image-12.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-12.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-12.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-12.png?");

/***/ }),

/***/ "./client/src/images/clients/image-13.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-13.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-13.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-13.png?");

/***/ }),

/***/ "./client/src/images/clients/image-14.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-14.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-14.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-14.png?");

/***/ }),

/***/ "./client/src/images/clients/image-15.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-15.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-15.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-15.png?");

/***/ }),

/***/ "./client/src/images/clients/image-16.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-16.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-16.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-16.png?");

/***/ }),

/***/ "./client/src/images/clients/image-17.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-17.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-17.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-17.png?");

/***/ }),

/***/ "./client/src/images/clients/image-18.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-18.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-18.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-18.png?");

/***/ }),

/***/ "./client/src/images/clients/image-19.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-19.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-19.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-19.png?");

/***/ }),

/***/ "./client/src/images/clients/image-2.png":
/*!***********************************************!*\
  !*** ./client/src/images/clients/image-2.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-2.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-2.png?");

/***/ }),

/***/ "./client/src/images/clients/image-20.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-20.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-20.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-20.png?");

/***/ }),

/***/ "./client/src/images/clients/image-21.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-21.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-21.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-21.png?");

/***/ }),

/***/ "./client/src/images/clients/image-22.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-22.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-22.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-22.png?");

/***/ }),

/***/ "./client/src/images/clients/image-23.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-23.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-23.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-23.png?");

/***/ }),

/***/ "./client/src/images/clients/image-24.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-24.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-24.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-24.png?");

/***/ }),

/***/ "./client/src/images/clients/image-25.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-25.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-25.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-25.png?");

/***/ }),

/***/ "./client/src/images/clients/image-26.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-26.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-26.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-26.png?");

/***/ }),

/***/ "./client/src/images/clients/image-27.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-27.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-27.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-27.png?");

/***/ }),

/***/ "./client/src/images/clients/image-28.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-28.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-28.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-28.png?");

/***/ }),

/***/ "./client/src/images/clients/image-29.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-29.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-29.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-29.png?");

/***/ }),

/***/ "./client/src/images/clients/image-3.png":
/*!***********************************************!*\
  !*** ./client/src/images/clients/image-3.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-3.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-3.png?");

/***/ }),

/***/ "./client/src/images/clients/image-30.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-30.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-30.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-30.png?");

/***/ }),

/***/ "./client/src/images/clients/image-31.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-31.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-31.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-31.png?");

/***/ }),

/***/ "./client/src/images/clients/image-32.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-32.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-32.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-32.png?");

/***/ }),

/***/ "./client/src/images/clients/image-33.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-33.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-33.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-33.png?");

/***/ }),

/***/ "./client/src/images/clients/image-34.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-34.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-34.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-34.png?");

/***/ }),

/***/ "./client/src/images/clients/image-35.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-35.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-35.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-35.png?");

/***/ }),

/***/ "./client/src/images/clients/image-36.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-36.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-36.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-36.png?");

/***/ }),

/***/ "./client/src/images/clients/image-37.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-37.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-37.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-37.png?");

/***/ }),

/***/ "./client/src/images/clients/image-38.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-38.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-38.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-38.png?");

/***/ }),

/***/ "./client/src/images/clients/image-39.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-39.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-39.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-39.png?");

/***/ }),

/***/ "./client/src/images/clients/image-4.png":
/*!***********************************************!*\
  !*** ./client/src/images/clients/image-4.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-4.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-4.png?");

/***/ }),

/***/ "./client/src/images/clients/image-40.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-40.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-40.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-40.png?");

/***/ }),

/***/ "./client/src/images/clients/image-41.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-41.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-41.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-41.png?");

/***/ }),

/***/ "./client/src/images/clients/image-42.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-42.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-42.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-42.png?");

/***/ }),

/***/ "./client/src/images/clients/image-43.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-43.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-43.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-43.png?");

/***/ }),

/***/ "./client/src/images/clients/image-44.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-44.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-44.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-44.png?");

/***/ }),

/***/ "./client/src/images/clients/image-45.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-45.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-45.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-45.png?");

/***/ }),

/***/ "./client/src/images/clients/image-46.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-46.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-46.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-46.png?");

/***/ }),

/***/ "./client/src/images/clients/image-47.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-47.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-47.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-47.png?");

/***/ }),

/***/ "./client/src/images/clients/image-48.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-48.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-48.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-48.png?");

/***/ }),

/***/ "./client/src/images/clients/image-49.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-49.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-49.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-49.png?");

/***/ }),

/***/ "./client/src/images/clients/image-5.png":
/*!***********************************************!*\
  !*** ./client/src/images/clients/image-5.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-5.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-5.png?");

/***/ }),

/***/ "./client/src/images/clients/image-50.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-50.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-50.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-50.png?");

/***/ }),

/***/ "./client/src/images/clients/image-51.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-51.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-51.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-51.png?");

/***/ }),

/***/ "./client/src/images/clients/image-52.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-52.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-52.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-52.png?");

/***/ }),

/***/ "./client/src/images/clients/image-53.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-53.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-53.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-53.png?");

/***/ }),

/***/ "./client/src/images/clients/image-54.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-54.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-54.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-54.png?");

/***/ }),

/***/ "./client/src/images/clients/image-55.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-55.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-55.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-55.png?");

/***/ }),

/***/ "./client/src/images/clients/image-56.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-56.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-56.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-56.png?");

/***/ }),

/***/ "./client/src/images/clients/image-57.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-57.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-57.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-57.png?");

/***/ }),

/***/ "./client/src/images/clients/image-58.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-58.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-58.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-58.png?");

/***/ }),

/***/ "./client/src/images/clients/image-59.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-59.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-59.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-59.png?");

/***/ }),

/***/ "./client/src/images/clients/image-6.png":
/*!***********************************************!*\
  !*** ./client/src/images/clients/image-6.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-6.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-6.png?");

/***/ }),

/***/ "./client/src/images/clients/image-60.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-60.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-60.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-60.png?");

/***/ }),

/***/ "./client/src/images/clients/image-61.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-61.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-61.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-61.png?");

/***/ }),

/***/ "./client/src/images/clients/image-62.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-62.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-62.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-62.png?");

/***/ }),

/***/ "./client/src/images/clients/image-63.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-63.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-63.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-63.png?");

/***/ }),

/***/ "./client/src/images/clients/image-64.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-64.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-64.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-64.png?");

/***/ }),

/***/ "./client/src/images/clients/image-65.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-65.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-65.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-65.png?");

/***/ }),

/***/ "./client/src/images/clients/image-66.png":
/*!************************************************!*\
  !*** ./client/src/images/clients/image-66.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-66.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-66.png?");

/***/ }),

/***/ "./client/src/images/clients/image-7.png":
/*!***********************************************!*\
  !*** ./client/src/images/clients/image-7.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-7.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-7.png?");

/***/ }),

/***/ "./client/src/images/clients/image-8.png":
/*!***********************************************!*\
  !*** ./client/src/images/clients/image-8.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-8.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-8.png?");

/***/ }),

/***/ "./client/src/images/clients/image-9.png":
/*!***********************************************!*\
  !*** ./client/src/images/clients/image-9.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/image-9.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/image-9.png?");

/***/ }),

/***/ "./client/src/images/clients/unknown.png":
/*!***********************************************!*\
  !*** ./client/src/images/clients/unknown.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/clients/unknown.png\";\n\n//# sourceURL=webpack:///./client/src/images/clients/unknown.png?");

/***/ }),

/***/ "./client/src/images/users/image-1.png":
/*!*********************************************!*\
  !*** ./client/src/images/users/image-1.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-1.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-1.png?");

/***/ }),

/***/ "./client/src/images/users/image-10.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-10.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-10.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-10.png?");

/***/ }),

/***/ "./client/src/images/users/image-100.png":
/*!***********************************************!*\
  !*** ./client/src/images/users/image-100.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-100.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-100.png?");

/***/ }),

/***/ "./client/src/images/users/image-11.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-11.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-11.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-11.png?");

/***/ }),

/***/ "./client/src/images/users/image-12.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-12.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-12.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-12.png?");

/***/ }),

/***/ "./client/src/images/users/image-13.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-13.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-13.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-13.png?");

/***/ }),

/***/ "./client/src/images/users/image-14.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-14.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-14.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-14.png?");

/***/ }),

/***/ "./client/src/images/users/image-15.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-15.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-15.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-15.png?");

/***/ }),

/***/ "./client/src/images/users/image-16.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-16.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-16.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-16.png?");

/***/ }),

/***/ "./client/src/images/users/image-17.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-17.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-17.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-17.png?");

/***/ }),

/***/ "./client/src/images/users/image-18.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-18.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-18.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-18.png?");

/***/ }),

/***/ "./client/src/images/users/image-19.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-19.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-19.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-19.png?");

/***/ }),

/***/ "./client/src/images/users/image-2.png":
/*!*********************************************!*\
  !*** ./client/src/images/users/image-2.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-2.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-2.png?");

/***/ }),

/***/ "./client/src/images/users/image-20.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-20.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-20.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-20.png?");

/***/ }),

/***/ "./client/src/images/users/image-21.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-21.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-21.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-21.png?");

/***/ }),

/***/ "./client/src/images/users/image-22.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-22.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-22.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-22.png?");

/***/ }),

/***/ "./client/src/images/users/image-23.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-23.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-23.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-23.png?");

/***/ }),

/***/ "./client/src/images/users/image-24.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-24.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-24.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-24.png?");

/***/ }),

/***/ "./client/src/images/users/image-25.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-25.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-25.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-25.png?");

/***/ }),

/***/ "./client/src/images/users/image-26.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-26.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-26.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-26.png?");

/***/ }),

/***/ "./client/src/images/users/image-27.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-27.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-27.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-27.png?");

/***/ }),

/***/ "./client/src/images/users/image-28.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-28.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-28.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-28.png?");

/***/ }),

/***/ "./client/src/images/users/image-29.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-29.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-29.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-29.png?");

/***/ }),

/***/ "./client/src/images/users/image-3.png":
/*!*********************************************!*\
  !*** ./client/src/images/users/image-3.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-3.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-3.png?");

/***/ }),

/***/ "./client/src/images/users/image-30.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-30.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-30.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-30.png?");

/***/ }),

/***/ "./client/src/images/users/image-31.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-31.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-31.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-31.png?");

/***/ }),

/***/ "./client/src/images/users/image-32.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-32.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-32.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-32.png?");

/***/ }),

/***/ "./client/src/images/users/image-33.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-33.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-33.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-33.png?");

/***/ }),

/***/ "./client/src/images/users/image-34.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-34.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-34.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-34.png?");

/***/ }),

/***/ "./client/src/images/users/image-35.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-35.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-35.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-35.png?");

/***/ }),

/***/ "./client/src/images/users/image-36.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-36.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-36.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-36.png?");

/***/ }),

/***/ "./client/src/images/users/image-37.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-37.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-37.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-37.png?");

/***/ }),

/***/ "./client/src/images/users/image-38.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-38.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-38.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-38.png?");

/***/ }),

/***/ "./client/src/images/users/image-39.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-39.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-39.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-39.png?");

/***/ }),

/***/ "./client/src/images/users/image-4.png":
/*!*********************************************!*\
  !*** ./client/src/images/users/image-4.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-4.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-4.png?");

/***/ }),

/***/ "./client/src/images/users/image-40.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-40.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-40.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-40.png?");

/***/ }),

/***/ "./client/src/images/users/image-41.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-41.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-41.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-41.png?");

/***/ }),

/***/ "./client/src/images/users/image-42.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-42.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-42.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-42.png?");

/***/ }),

/***/ "./client/src/images/users/image-43.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-43.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-43.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-43.png?");

/***/ }),

/***/ "./client/src/images/users/image-44.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-44.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-44.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-44.png?");

/***/ }),

/***/ "./client/src/images/users/image-45.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-45.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-45.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-45.png?");

/***/ }),

/***/ "./client/src/images/users/image-46.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-46.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-46.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-46.png?");

/***/ }),

/***/ "./client/src/images/users/image-47.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-47.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-47.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-47.png?");

/***/ }),

/***/ "./client/src/images/users/image-48.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-48.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-48.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-48.png?");

/***/ }),

/***/ "./client/src/images/users/image-49.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-49.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-49.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-49.png?");

/***/ }),

/***/ "./client/src/images/users/image-5.png":
/*!*********************************************!*\
  !*** ./client/src/images/users/image-5.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-5.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-5.png?");

/***/ }),

/***/ "./client/src/images/users/image-50.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-50.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-50.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-50.png?");

/***/ }),

/***/ "./client/src/images/users/image-51.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-51.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-51.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-51.png?");

/***/ }),

/***/ "./client/src/images/users/image-52.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-52.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-52.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-52.png?");

/***/ }),

/***/ "./client/src/images/users/image-53.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-53.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-53.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-53.png?");

/***/ }),

/***/ "./client/src/images/users/image-54.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-54.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-54.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-54.png?");

/***/ }),

/***/ "./client/src/images/users/image-55.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-55.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-55.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-55.png?");

/***/ }),

/***/ "./client/src/images/users/image-56.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-56.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-56.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-56.png?");

/***/ }),

/***/ "./client/src/images/users/image-57.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-57.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-57.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-57.png?");

/***/ }),

/***/ "./client/src/images/users/image-58.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-58.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-58.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-58.png?");

/***/ }),

/***/ "./client/src/images/users/image-59.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-59.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-59.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-59.png?");

/***/ }),

/***/ "./client/src/images/users/image-6.png":
/*!*********************************************!*\
  !*** ./client/src/images/users/image-6.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-6.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-6.png?");

/***/ }),

/***/ "./client/src/images/users/image-60.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-60.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-60.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-60.png?");

/***/ }),

/***/ "./client/src/images/users/image-61.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-61.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-61.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-61.png?");

/***/ }),

/***/ "./client/src/images/users/image-62.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-62.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-62.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-62.png?");

/***/ }),

/***/ "./client/src/images/users/image-63.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-63.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-63.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-63.png?");

/***/ }),

/***/ "./client/src/images/users/image-64.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-64.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-64.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-64.png?");

/***/ }),

/***/ "./client/src/images/users/image-65.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-65.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-65.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-65.png?");

/***/ }),

/***/ "./client/src/images/users/image-66.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-66.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-66.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-66.png?");

/***/ }),

/***/ "./client/src/images/users/image-67.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-67.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-67.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-67.png?");

/***/ }),

/***/ "./client/src/images/users/image-68.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-68.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-68.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-68.png?");

/***/ }),

/***/ "./client/src/images/users/image-69.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-69.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-69.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-69.png?");

/***/ }),

/***/ "./client/src/images/users/image-7.png":
/*!*********************************************!*\
  !*** ./client/src/images/users/image-7.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-7.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-7.png?");

/***/ }),

/***/ "./client/src/images/users/image-70.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-70.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-70.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-70.png?");

/***/ }),

/***/ "./client/src/images/users/image-71.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-71.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-71.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-71.png?");

/***/ }),

/***/ "./client/src/images/users/image-72.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-72.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-72.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-72.png?");

/***/ }),

/***/ "./client/src/images/users/image-73.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-73.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-73.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-73.png?");

/***/ }),

/***/ "./client/src/images/users/image-74.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-74.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-74.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-74.png?");

/***/ }),

/***/ "./client/src/images/users/image-75.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-75.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-75.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-75.png?");

/***/ }),

/***/ "./client/src/images/users/image-76.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-76.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-76.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-76.png?");

/***/ }),

/***/ "./client/src/images/users/image-77.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-77.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-77.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-77.png?");

/***/ }),

/***/ "./client/src/images/users/image-78.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-78.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-78.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-78.png?");

/***/ }),

/***/ "./client/src/images/users/image-79.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-79.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-79.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-79.png?");

/***/ }),

/***/ "./client/src/images/users/image-8.png":
/*!*********************************************!*\
  !*** ./client/src/images/users/image-8.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-8.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-8.png?");

/***/ }),

/***/ "./client/src/images/users/image-80.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-80.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-80.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-80.png?");

/***/ }),

/***/ "./client/src/images/users/image-81.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-81.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-81.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-81.png?");

/***/ }),

/***/ "./client/src/images/users/image-82.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-82.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-82.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-82.png?");

/***/ }),

/***/ "./client/src/images/users/image-83.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-83.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-83.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-83.png?");

/***/ }),

/***/ "./client/src/images/users/image-84.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-84.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-84.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-84.png?");

/***/ }),

/***/ "./client/src/images/users/image-85.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-85.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-85.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-85.png?");

/***/ }),

/***/ "./client/src/images/users/image-86.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-86.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-86.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-86.png?");

/***/ }),

/***/ "./client/src/images/users/image-87.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-87.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-87.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-87.png?");

/***/ }),

/***/ "./client/src/images/users/image-88.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-88.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-88.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-88.png?");

/***/ }),

/***/ "./client/src/images/users/image-89.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-89.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-89.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-89.png?");

/***/ }),

/***/ "./client/src/images/users/image-9.png":
/*!*********************************************!*\
  !*** ./client/src/images/users/image-9.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-9.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-9.png?");

/***/ }),

/***/ "./client/src/images/users/image-90.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-90.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-90.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-90.png?");

/***/ }),

/***/ "./client/src/images/users/image-91.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-91.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-91.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-91.png?");

/***/ }),

/***/ "./client/src/images/users/image-92.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-92.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-92.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-92.png?");

/***/ }),

/***/ "./client/src/images/users/image-93.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-93.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-93.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-93.png?");

/***/ }),

/***/ "./client/src/images/users/image-94.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-94.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-94.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-94.png?");

/***/ }),

/***/ "./client/src/images/users/image-95.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-95.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-95.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-95.png?");

/***/ }),

/***/ "./client/src/images/users/image-96.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-96.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-96.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-96.png?");

/***/ }),

/***/ "./client/src/images/users/image-97.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-97.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-97.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-97.png?");

/***/ }),

/***/ "./client/src/images/users/image-98.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-98.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-98.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-98.png?");

/***/ }),

/***/ "./client/src/images/users/image-99.png":
/*!**********************************************!*\
  !*** ./client/src/images/users/image-99.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/image-99.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/image-99.png?");

/***/ }),

/***/ "./client/src/images/users/unknown.png":
/*!*********************************************!*\
  !*** ./client/src/images/users/unknown.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/users/unknown.png\";\n\n//# sourceURL=webpack:///./client/src/images/users/unknown.png?");

/***/ }),

/***/ "./client/src/index.css":
/*!******************************!*\
  !*** ./client/src/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./client/src/index.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/src/index.css?");

/***/ }),

/***/ "./client/src/index.js":
/*!*****************************!*\
  !*** ./client/src/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./client/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./client/node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"./client/src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ \"./client/src/App.js\");\n/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ \"./client/src/serviceWorker.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./client/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store.js */ \"./client/src/store.js\");\n\n\n\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n  store: _store_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), document.getElementById(\"root\")); // If you want your app to work offline and load faster, you can change\n// unregister() to register() below. Note this comes with some pitfalls.\n// Learn more about service workers: http://bit.ly/CRA-PWA\n\n_serviceWorker__WEBPACK_IMPORTED_MODULE_4__[\"unregister\"]();\n\n//# sourceURL=webpack:///./client/src/index.js?");

/***/ }),

/***/ "./client/src/pages/ClientsPage/index.js":
/*!***********************************************!*\
  !*** ./client/src/pages/ClientsPage/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./client/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./client/src/pages/ClientsPage/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./client/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _actions_clientActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/clientActions */ \"./client/src/actions/clientActions.js\");\n/* harmony import */ var _components_Profiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Profiles */ \"./client/src/components/Profiles/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nclass ClientsPage extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"componentDidMount\", () => {\n      this.setState(state => ({\n        clients: this.props.fetchClients()\n      }));\n    });\n\n    _defineProperty(this, \"componentWillReceiveProps\", nextProps => {\n      if (this.props.clients.length) {\n        this.setState(state => ({ ...state,\n          clients: this.props.clients\n        }));\n      }\n    });\n\n    _defineProperty(this, \"render\", () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n      className: \"clients\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Clients\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profiles__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      list: this.props.clients,\n      folder: \"clients\",\n      alt: \"Profile\",\n      hideRole: true\n    })));\n\n    console.log(`props:`, props);\n\n    if (!this.props.clients.length) {\n      props.fetchClients();\n    }\n\n    this.state = {\n      clients: []\n    };\n  }\n\n}\n\nconst mapStateToProps = state => ({\n  clients: state.clients.items,\n  newClient: state.clients.item\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, {\n  fetchClients: _actions_clientActions__WEBPACK_IMPORTED_MODULE_3__[\"fetchClients\"]\n})(ClientsPage));\n\n//# sourceURL=webpack:///./client/src/pages/ClientsPage/index.js?");

/***/ }),

/***/ "./client/src/pages/ClientsPage/style.css":
/*!************************************************!*\
  !*** ./client/src/pages/ClientsPage/style.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./client/src/pages/ClientsPage/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/src/pages/ClientsPage/style.css?");

/***/ }),

/***/ "./client/src/pages/LoginPage/index.js":
/*!*********************************************!*\
  !*** ./client/src/pages/LoginPage/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./client/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./client/src/pages/LoginPage/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Form */ \"./client/src/components/Form/index.js\");\n/* harmony import */ var _icons_bikers_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/bikers.svg */ \"./client/src/icons/bikers.svg\");\n/* harmony import */ var _icons_bikers_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_icons_bikers_svg__WEBPACK_IMPORTED_MODULE_3__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nclass LoginPage extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"toggleMessage\", () => this.setState(state => ({ ...state,\n      showMessage: !this.state.showMessage\n    })));\n\n    _defineProperty(this, \"handleSubmit\", ev => {\n      ev.preventDefault();\n      const user = {\n        username: ev.target.username.value,\n        password: ev.target.password.value\n      };\n      let timer = \"\";\n      clearTimeout(timer);\n\n      const setTime = () => {\n        timer = setTimeout(() => this.state.showMessage ? this.toggleMessage() : null, 2000);\n      };\n\n      this.props.checkUser(user).then(res => {\n        if (res === undefined) {\n          if (!this.state.showMessage) {\n            this.toggleMessage();\n          }\n\n          setTime();\n        }\n      });\n    });\n\n    _defineProperty(this, \"render\", () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n      className: \"login\"\n    }, this.state.showMessage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"message error\"\n    }, \"Login Error. Try again.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      className: \"App-logo\",\n      alt: \"Delivery control\",\n      src: _icons_bikers_svg__WEBPACK_IMPORTED_MODULE_3___default.a\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Delivery control\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Login\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      className: \"login-form\",\n      data: this.state.data,\n      handleSubmit: this.handleSubmit\n    }))));\n\n    this.state = {\n      data: [{\n        id: 1,\n        label: \"Username\",\n        type: \"text\",\n        name: \"username\",\n        value: \"\",\n        placeholder: \"Your username\",\n        required: true\n      }, {\n        id: 2,\n        label: \"Password\",\n        type: \"password\",\n        name: \"password\",\n        value: \"\",\n        placeholder: \"Your password\",\n        required: true\n      }],\n      showMessage: false\n    };\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);\n\n//# sourceURL=webpack:///./client/src/pages/LoginPage/index.js?");

/***/ }),

/***/ "./client/src/pages/LoginPage/style.css":
/*!**********************************************!*\
  !*** ./client/src/pages/LoginPage/style.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./client/src/pages/LoginPage/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/src/pages/LoginPage/style.css?");

/***/ }),

/***/ "./client/src/pages/ShipmentsPage/index.js":
/*!*************************************************!*\
  !*** ./client/src/pages/ShipmentsPage/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./client/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./client/src/pages/ShipmentsPage/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./client/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _actions_shipmentActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/shipmentActions */ \"./client/src/actions/shipmentActions.js\");\n/* harmony import */ var _components_Shipments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Shipments */ \"./client/src/components/Shipments/index.js\");\n/* harmony import */ var _components_Profiles_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Profiles/Profile */ \"./client/src/components/Profiles/Profile/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nclass ShipmentsPage extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"getSingle\", (list, id) => list.find(e => e.id === Number(id)));\n\n    _defineProperty(this, \"componentDidMount\", () => {\n      this.setState(state => ({ ...state,\n        shipments: this.shipmentsJoinInfo()\n      }));\n    });\n\n    _defineProperty(this, \"componentWillReceiveProps\", nextProps => {\n      if (this.props.shipments.length && this.props.clients.length && this.props.statuses.length) {\n        this.setState(state => ({ ...state,\n          shipments: this.shipmentsJoinInfo()\n        }));\n      }\n    });\n\n    _defineProperty(this, \"shipmentsJoinInfo\", () => this.props.shipments.map(e => {\n      const clients = this.props.clients;\n      const client = this.getSingle(clients, e.client_id);\n      const client_address = this.getSingle(client.addresses, e.client_addres_id);\n      const statuses = this.props.statuses;\n      const status = this.getSingle(statuses, e.status_id);\n      const shipments = { ...e,\n        client,\n        client_address,\n        status\n      };\n      return shipments;\n    }));\n\n    _defineProperty(this, \"hasClients\", () => this.props.clients.length);\n\n    _defineProperty(this, \"convertDate\", (date, iso = \"en-US\") => date.toLocaleDateString(iso, {\n      weekday: \"long\",\n      year: \"numeric\",\n      month: \"long\",\n      day: \"numeric\",\n      hour: \"2-digit\",\n      minute: \"2-digit\",\n      second: \"2-digit\"\n    }));\n\n    _defineProperty(this, \"nextStatus\", (shipment_id, status_id) => {\n      if (this.props.statuses.length > status_id) {\n        status_id = status_id + 1;\n      } else {\n        status_id = 2;\n      }\n\n      const status = this.getSingle(this.props.statuses, status_id);\n      const shipments = this.props.shipments.map(e => {\n        if (e.id === Number(shipment_id)) {\n          e.status_id = status.id;\n          e.timeline.map(t => {\n            if (t.status_id === status_id) t.timestamp = this.convertDate(new Date());\n            return t;\n          });\n        }\n\n        return e;\n      });\n      this.props.updateShipments(shipments);\n      this.setState(state => ({ ...state,\n        shipments\n      }));\n    });\n\n    _defineProperty(this, \"togglebikersList\", shipment_id => {\n      this.setState(state => ({ ...state,\n        showBikersList: !this.state.showBikersList,\n        shipment_id: shipment_id\n      }));\n    });\n\n    _defineProperty(this, \"assignBiker\", user_id => {\n      const shipments = this.props.shipments.map(e => {\n        if (e.id === Number(this.state.shipment_id)) {\n          e.user_id = Number(user_id);\n          e.status_id = 2;\n          e.timeline.map(t => {\n            if (t.status_id === 2) {\n              t.timestamp = this.convertDate(new Date());\n            }\n\n            return t;\n          });\n        }\n\n        return e;\n      });\n      this.props.updateShipments(shipments);\n      this.setState(state => ({ ...state,\n        shipments,\n        togglebikersList: false,\n        shipment_id: \"\"\n      }));\n      const list = this.togglebikersList();\n      console.log(`list:`, list);\n      return list;\n    });\n\n    _defineProperty(this, \"render\", () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n      className: \"shipments \" + (this.props.login.role === \"manager\" && \"manager-list\")\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Shipments\"), this.state.shipments.length && this.props.users.length ? this.props.statuses.map(e => this.props.login.role === \"manager\" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: e.id,\n      className: \"shipment-list\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, e.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Shipments__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      list: this.state.shipments,\n      users: this.props.users,\n      target: \"status_id\",\n      value: e.id,\n      nextStatus: this.nextStatus,\n      togglebikersList: this.togglebikersList,\n      login: this.props.login,\n      statuses: this.props.statuses\n    })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: e.id,\n      className: \"shipment-list\"\n    }, e.id > 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, e.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Shipments__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      list: this.state.shipments.filter(e => e.user_id === this.props.login.id),\n      users: this.props.users,\n      target: \"status_id\",\n      value: e.id,\n      nextStatus: this.nextStatus,\n      togglebikersList: this.togglebikersList,\n      login: this.props.login,\n      statuses: this.props.statuses\n    }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Loading...\"), this.state.showBikersList && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"modal\",\n      onClick: () => this.togglebikersList()\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"bikers-list\"\n    }, this.props.users.filter(e => e.role === \"biker\").map(e => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: e.id,\n      className: \"biker\",\n      onClick: () => this.assignBiker(e.id)\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profiles_Profile__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      user: e,\n      folder: \"users\",\n      hideEmail: true,\n      hideRole: true\n    })))))));\n\n    this.state = {\n      shipments: [],\n      showBikersList: false,\n      shipment_id: \"\"\n    };\n  }\n\n}\n\nconst mapStateToProps = state => ({\n  shipments: state.shipments.items,\n  clients: state.clients.items,\n  users: state.users.items,\n  login: state.logins.item,\n  statuses: state.statuses.items\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, {\n  updateShipments: _actions_shipmentActions__WEBPACK_IMPORTED_MODULE_3__[\"updateShipments\"]\n})(ShipmentsPage));\n\n//# sourceURL=webpack:///./client/src/pages/ShipmentsPage/index.js?");

/***/ }),

/***/ "./client/src/pages/ShipmentsPage/style.css":
/*!**************************************************!*\
  !*** ./client/src/pages/ShipmentsPage/style.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./client/src/pages/ShipmentsPage/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/src/pages/ShipmentsPage/style.css?");

/***/ }),

/***/ "./client/src/pages/UsersPage/index.js":
/*!*********************************************!*\
  !*** ./client/src/pages/UsersPage/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./client/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./client/src/pages/UsersPage/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./client/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _actions_userActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/userActions */ \"./client/src/actions/userActions.js\");\n/* harmony import */ var _components_Profiles_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Profiles/Profile */ \"./client/src/components/Profiles/Profile/index.js\");\n/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Select */ \"./client/src/components/Select/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nclass UsersPage extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"componentDidMount\", () => {\n      this.setState(state => ({\n        users: this.props.users\n      }));\n    });\n\n    _defineProperty(this, \"componentWillReceiveProps\", nextProps => {\n      if (this.props.users.length) {\n        this.setState(state => ({ ...state,\n          users: this.props.users\n        }));\n      }\n    });\n\n    _defineProperty(this, \"handleSelect\", user => ev => {\n      const users = this.props.users.map(e => {\n        if (e.id === Number(user.id)) {\n          e.role = ev.target.value;\n        }\n\n        return e;\n      });\n      this.props.updateUsers(users);\n      this.setState(state => ({ ...state,\n        users\n      }));\n    });\n\n    _defineProperty(this, \"render\", () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n      className: \"users\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Users\"), this.state.users.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.users.map(e => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: e.id,\n      className: \"users-list\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Select__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      id: \"select-role\",\n      value: e.role,\n      handleSelect: this.handleSelect(e),\n      options: this.state.roles\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profiles_Profile__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      user: e,\n      folder: \"users\",\n      alt: \"User\",\n      hideRole: true\n    })))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Loading...\")));\n\n    if (!this.props.users.length) {\n      props.fetchUsers();\n    }\n\n    this.state = {\n      users: [],\n      roles: [{\n        id: 1,\n        value: \"manager\",\n        text: \"Manager\"\n      }, {\n        id: 2,\n        value: \"biker\",\n        text: \"Biker\"\n      }]\n    };\n  }\n\n}\n\nconst mapStateToProps = state => ({\n  users: state.users.items,\n  newUser: state.users.item\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, {\n  fetchUsers: _actions_userActions__WEBPACK_IMPORTED_MODULE_3__[\"fetchUsers\"],\n  updateUsers: _actions_userActions__WEBPACK_IMPORTED_MODULE_3__[\"updateUsers\"]\n})(UsersPage));\n\n//# sourceURL=webpack:///./client/src/pages/UsersPage/index.js?");

/***/ }),

/***/ "./client/src/pages/UsersPage/style.css":
/*!**********************************************!*\
  !*** ./client/src/pages/UsersPage/style.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./client/src/pages/UsersPage/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/src/pages/UsersPage/style.css?");

/***/ }),

/***/ "./client/src/reducers/clientReducer.js":
/*!**********************************************!*\
  !*** ./client/src/reducers/clientReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./client/src/actions/index.js\");\n\nconst initialState = {\n  items: [],\n  item: {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((state = initialState, action) => {\n  console.log(`action.type:`, action.type);\n\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_CLIENTS\"]:\n      return { ...state,\n        items: action.payload\n      };\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"NEW_CLIENT\"]:\n      return { ...state,\n        item: action.payload\n      };\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./client/src/reducers/clientReducer.js?");

/***/ }),

/***/ "./client/src/reducers/index.js":
/*!**************************************!*\
  !*** ./client/src/reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./client/node_modules/redux/es/redux.js\");\n/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userReducer */ \"./client/src/reducers/userReducer.js\");\n/* harmony import */ var _clientReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clientReducer */ \"./client/src/reducers/clientReducer.js\");\n/* harmony import */ var _shipmentReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shipmentReducer */ \"./client/src/reducers/shipmentReducer.js\");\n/* harmony import */ var _statusReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./statusReducer */ \"./client/src/reducers/statusReducer.js\");\n/* harmony import */ var _loginReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loginReducer */ \"./client/src/reducers/loginReducer.js\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  users: _userReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  logins: _loginReducer__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  clients: _clientReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  shipments: _shipmentReducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  statuses: _statusReducer__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./client/src/reducers/index.js?");

/***/ }),

/***/ "./client/src/reducers/loginReducer.js":
/*!*********************************************!*\
  !*** ./client/src/reducers/loginReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./client/src/actions/index.js\");\n\nconst initialState = {\n  items: [],\n  item: {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((state = initialState, action) => {\n  console.log(`action.type:`, action.type);\n\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_LOGIN\"]:\n      return { ...state,\n        item: action.payload\n      };\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"REMOVE_LOGIN\"]:\n      return { ...state,\n        item: action.payload\n      };\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./client/src/reducers/loginReducer.js?");

/***/ }),

/***/ "./client/src/reducers/shipmentReducer.js":
/*!************************************************!*\
  !*** ./client/src/reducers/shipmentReducer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./client/src/actions/index.js\");\n\nconst initialState = {\n  items: [],\n  item: {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((state = initialState, action) => {\n  console.log(`action.type:`, action.type);\n\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_SHIPMENTS\"]:\n      return { ...state,\n        items: action.payload\n      };\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"NEW_SHIPMENT\"]:\n      return { ...state,\n        item: action.payload\n      };\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"UPDATE_SHIPMENTS\"]:\n      return { ...state,\n        items: action.payload\n      };\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./client/src/reducers/shipmentReducer.js?");

/***/ }),

/***/ "./client/src/reducers/statusReducer.js":
/*!**********************************************!*\
  !*** ./client/src/reducers/statusReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./client/src/actions/index.js\");\n\nconst initialState = {\n  items: [],\n  item: {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((state = initialState, action) => {\n  console.log(`action.type:`, action.type);\n\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_STATUSES\"]:\n      return { ...state,\n        items: action.payload\n      };\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"NEW_STATUS\"]:\n      return { ...state,\n        item: action.payload\n      };\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./client/src/reducers/statusReducer.js?");

/***/ }),

/***/ "./client/src/reducers/userReducer.js":
/*!********************************************!*\
  !*** ./client/src/reducers/userReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./client/src/actions/index.js\");\n\nconst initialState = {\n  items: [],\n  item: {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((state = initialState, action) => {\n  console.log(`action.type:`, action.type);\n\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_USERS\"]:\n      return { ...state,\n        items: action.payload\n      };\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"NEW_USER\"]:\n      return { ...state,\n        item: action.payload\n      };\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"UPDATE_USERS\"]:\n      return { ...state,\n        items: action.payload\n      };\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./client/src/reducers/userReducer.js?");

/***/ }),

/***/ "./client/src/serviceWorker.js":
/*!*************************************!*\
  !*** ./client/src/serviceWorker.js ***!
  \*************************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"register\", function() { return register; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unregister\", function() { return unregister; });\n// This optional code is used to register a service worker.\n// register() is not called by default.\n// This lets the app load faster on subsequent visits in production, and gives\n// it offline capabilities. However, it also means that developers (and users)\n// will only see deployed updates on subsequent visits to a page, after all the\n// existing tabs open on the page have been closed, since previously cached\n// resources are updated in the background.\n// To learn more about the benefits of this model and instructions on how to\n// opt-in, read http://bit.ly/CRA-PWA\nconst isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.\nwindow.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.\nwindow.location.hostname.match(/^127(?:\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));\nfunction register(config) {\n  if (false) {}\n}\n\nfunction registerValidSW(swUrl, config) {\n  navigator.serviceWorker.register(swUrl).then(registration => {\n    registration.onupdatefound = () => {\n      const installingWorker = registration.installing;\n\n      if (installingWorker == null) {\n        return;\n      }\n\n      installingWorker.onstatechange = () => {\n        if (installingWorker.state === 'installed') {\n          if (navigator.serviceWorker.controller) {\n            // At this point, the updated precached content has been fetched,\n            // but the previous service worker will still serve the older\n            // content until all client tabs are closed.\n            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback\n\n            if (config && config.onUpdate) {\n              config.onUpdate(registration);\n            }\n          } else {\n            // At this point, everything has been precached.\n            // It's the perfect time to display a\n            // \"Content is cached for offline use.\" message.\n            console.log('Content is cached for offline use.'); // Execute callback\n\n            if (config && config.onSuccess) {\n              config.onSuccess(registration);\n            }\n          }\n        }\n      };\n    };\n  }).catch(error => {\n    console.error('Error during service worker registration:', error);\n  });\n}\n\nfunction checkValidServiceWorker(swUrl, config) {\n  // Check if the service worker can be found. If it can't reload the page.\n  fetch(swUrl).then(response => {\n    // Ensure service worker exists, and that we really are getting a JS file.\n    const contentType = response.headers.get('content-type');\n\n    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {\n      // No service worker found. Probably a different app. Reload the page.\n      navigator.serviceWorker.ready.then(registration => {\n        registration.unregister().then(() => {\n          window.location.reload();\n        });\n      });\n    } else {\n      // Service worker found. Proceed as normal.\n      registerValidSW(swUrl, config);\n    }\n  }).catch(() => {\n    console.log('No internet connection found. App is running in offline mode.');\n  });\n}\n\nfunction unregister() {\n  if ('serviceWorker' in navigator) {\n    navigator.serviceWorker.ready.then(registration => {\n      registration.unregister();\n    });\n  }\n}\n\n//# sourceURL=webpack:///./client/src/serviceWorker.js?");

/***/ }),

/***/ "./client/src/store.js":
/*!*****************************!*\
  !*** ./client/src/store.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./client/node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"./client/node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ \"./client/src/reducers/index.js\");\n\n\n\nconst initialState = {},\n      middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_1__[\"default\"]],\n      store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(...middleware),  true && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"]));\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./client/src/store.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/src/App.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/src/App.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".App-logo {\\n  height: 60px;\\n}\\n.App-header {\\n  background-color: #fff;\\n  display: grid;\\n  grid-template-columns: 60px 1fr 100px;\\n}\\n.App-logo {\\n  width: 45px;\\n}\\n\\n.App .main-navigation {\\n  padding: 5px;\\n  text-align: center;\\n  position: sticky;\\n  top: 0;\\n  background-color: #f5f5f5;\\n  margin-bottom: 10px;\\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);\\n}\\n.App .main-navigation ul {\\n  margin: 0;\\n  padding-left: 0;\\n}\\n.App .main-navigation ul li {\\n  list-style: none;\\n  display: inline-block;\\n}\\n.App section {\\n  margin-top: 10px !important;\\n}\\n\\n.App button {\\n  text-transform: uppercase;\\n}\\n\\n.App .main-navigation .link-main-nav {\\n  background-color: #fff;\\n  color: #263238;\\n  padding: 10px;\\n  margin: 2px;\\n  border-radius: 5px;\\n  text-decoration: none;\\n  display: inline-block;\\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);\\n}\\n.App .main-navigation .link-main-nav.active {\\n  background-color: #f00;\\n  color: #fff;\\n}\\n\\n.App .logged-in-user {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  text-align: center;\\n  padding: 5px;\\n  height: 50px;\\n  width: 55px;\\n  overflow: hidden;\\n  transition: 0.5s all;\\n  background-color: #fff;\\n}\\n.App .logged-in-user .profile .picture {\\n  border-radius: 50%;\\n  width: 50px;\\n}\\n.App .logged-in-user .profile .name {\\n  font-weight: normal;\\n  max-height: 46px;\\n  overflow: hidden;\\n  margin: 0;\\n}\\n.App .logged-in-user:hover,\\n.App .logged-in-user:active {\\n  width: 100px;\\n  height: 200px;\\n  box-shadow: -3px 3px 3px rgba(0, 0, 0, 0.1);\\n  z-index: 99;\\n}\\n\\n.App .logged-in-user button.exit {\\n  background-color: #f00;\\n  color: #fff;\\n  border: 0;\\n  padding: 10px;\\n  margin: 5px;\\n  border-radius: 5px;\\n  transition: all 0.1s;\\n  cursor: pointer;\\n  box-shadow: 0 3px 0 #bd0000;\\n}\\n\\n.App .logged-in-user button.exit:active {\\n  transform: scale(0.97);\\n  box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/src/App.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/src/components/Addresses/Address/style.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/src/components/Addresses/Address/style.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".address {\\n  background-color: #eee;\\n  border-radius: 5px;\\n  padding: 10px;\\n  margin-bottom: 10px;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/src/components/Addresses/Address/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/src/components/Addresses/style.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/src/components/Addresses/style.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".addresses {\\n  background-color: #fff;\\n  border-radius: 5px;\\n  padding: 10px;\\n}\\n.addresses h5 {\\n  margin: 10px;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/src/components/Addresses/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/src/components/Form/style.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/src/components/Form/style.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/src/components/Form/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/src/components/Profiles/Profile/style.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/src/components/Profiles/Profile/style.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/src/components/Profiles/Profile/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/src/components/Profiles/style.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/src/components/Profiles/style.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".profiles {\\n  background-color: #fff;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/src/components/Profiles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/src/components/Select/style.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/src/components/Select/style.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".select {\\n  padding: 8px 16px;\\n  border: 1px solid transparent;\\n  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;\\n  cursor: pointer;\\n  user-select: none;\\n  background-color: #000;\\n  color: #fff;\\n  border-radius: 5px;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/src/components/Select/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/src/components/Shipments/Shipment/style.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/src/components/Shipments/Shipment/style.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".shipment {\\n  background-color: #eee;\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  margin-bottom: 30px;\\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);\\n  grid-template-areas:\\n    \\\"number\\\"\\n    \\\"status\\\"\\n    \\\"client\\\"\\n    \\\"address\\\"\\n    \\\"timeline\\\";\\n}\\n\\n.shipment .client {\\n  background-color: #fff;\\n}\\n.shipment .client-address {\\n  background-color: #fff;\\n}\\n\\n.shipment .button_status {\\n  background-color: #f00;\\n  color: #fff;\\n  border: 0;\\n  margin: 5px;\\n  padding: 10px;\\n  border-radius: 5px;\\n  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.2);\\n  cursor: pointer;\\n  outline-color: transparent;\\n  transition: all 0.1s;\\n  max-width: 200px;\\n  text-transform: uppercase;\\n}\\n\\n.shipment .button_status.waiting {\\n  background-color: #3f51b5;\\n  box-shadow: 0 3px 0 #1a237e;\\n}\\n.shipment .button_status.assigned {\\n  background-color: #f44336;\\n  box-shadow: 0 3px 0 #b71c1c;\\n}\\n.shipment .button_status.picked_up {\\n  background-color: #ffc107;\\n  color: #263238;\\n  box-shadow: 0 3px 0 #c19100;\\n}\\n.shipment .button_status.delivered {\\n  background-color: #4caf50;\\n  /* box-shadow: 0 3px 0 #1b5e20; */\\n  box-shadow: none;\\n  cursor: auto;\\n}\\n.shipment .button_status:active {\\n  transform: scale(0.97);\\n  box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);\\n}\\n\\n.shipment details {\\n  padding: 10px;\\n}\\n.shipment details summary {\\n  padding: 10px;\\n  margin-bottom: 10px;\\n}\\n.shipment .shipment-status .user.allow_click {\\n  cursor: pointer;\\n}\\n\\n.shipment .shipment-status .user .profile {\\n  background-color: #fff;\\n  display: grid;\\n  grid-template-columns: 1fr 40px;\\n  grid-template-areas: \\\"user_name user_picture\\\";\\n  margin: 5px;\\n  border-radius: 5px;\\n  transition: 0.3s all;\\n}\\n.shipment .shipment-status .user.allow_click .profile:hover {\\n  background-color: #000;\\n  color: #fff;\\n}\\n\\n.shipment .shipment-status .user .profile .picture {\\n  grid-area: user_picture;\\n  width: 40px;\\n  background-color: #eee;\\n  border-top-right-radius: 5px;\\n  border-bottom-right-radius: 5px;\\n}\\n.shipment .shipment-status .user .profile h3 {\\n  grid-area: user_name;\\n  margin: 10px 0;\\n  font-size: 15px;\\n}\\n.shipment h3 {\\n  grid-area: number;\\n}\\n.shipment .timeline {\\n  grid-area: timeline;\\n  padding: 0;\\n  background-color: #fff;\\n}\\n.shipment .timeline summary {\\n  background-color: #eee;\\n}\\n\\n@media screen and (min-width: 450px) {\\n  .shipment {\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-areas:\\n      \\\"number status\\\"\\n      \\\"client address\\\"\\n      \\\"timeline timeline\\\";\\n  }\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/src/components/Shipments/Shipment/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/src/components/Shipments/style.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/src/components/Shipments/style.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/src/components/Shipments/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/src/components/Timeline/style.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/src/components/Timeline/style.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".timeline-item {\\n  margin-bottom: 10px;\\n  display: grid;\\n  grid-template-columns: 1fr;\\n}\\n.timeline-item .time {\\n  padding: 5px;\\n}\\n.timeline-item .status {\\n  color: #fff;\\n  padding: 5px;\\n  border-radius: 5px 5px 0 0;\\n}\\n.timeline-item .status.waiting {\\n  background-color: #3f51b5;\\n}\\n.timeline-item .status.assigned {\\n  background-color: #f44336;\\n}\\n.timeline-item .status.picked_up {\\n  background-color: #ffc107;\\n  color: #263238;\\n}\\n.timeline-item .status.delivered {\\n  background-color: #4caf50;\\n}\\n\\n.timeline-item .status.waiting + .time {\\n  border-bottom: 2px solid #3f51b5;\\n}\\n\\n.timeline-item .status.assigned + .time {\\n  border-bottom: 2px solid #f44336;\\n}\\n\\n.timeline-item .status.picked_up + .time {\\n  border-bottom: 2px solid #ffc107;\\n}\\n\\n.timeline-item .status.delivered + .time {\\n  border-bottom: 2px solid #4caf50;\\n}\\n\\n@media screen and (min-width: 450px) {\\n  .timeline-item {\\n    grid-template-columns: 1fr 1fr;\\n  }\\n  .timeline-item .status {\\n    border-radius: 5px 0 0 5px;\\n  }\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/src/components/Timeline/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/src/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/src/index.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\n  margin: 0;\\n  padding: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", \\\"Roboto\\\", \\\"Oxygen\\\",\\n    \\\"Ubuntu\\\", \\\"Cantarell\\\", \\\"Fira Sans\\\", \\\"Droid Sans\\\", \\\"Helvetica Neue\\\",\\n    sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  background-color: #eee;\\n}\\n\\ncode {\\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \\\"Courier New\\\",\\n    monospace;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/src/pages/ClientsPage/style.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/src/pages/ClientsPage/style.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".clients {\\n  background-color: #fff;\\n  max-width: 90%;\\n  margin: 0 auto;\\n  padding: 10px;\\n  border-radius: 5px;\\n}\\n.clients h2 {\\n  text-align: center;\\n  color: #f00;\\n}\\n\\n.clients .profile {\\n  display: grid;\\n  margin-bottom: 20px;\\n  padding: 10px;\\n  border-radius: 5px;\\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-areas:\\n    \\\"picture picture\\\"\\n    \\\"name name\\\"\\n    \\\"email email\\\"\\n    \\\"addresses addresses\\\";\\n}\\n.clients .profile h3 {\\n  text-align: center;\\n}\\n.clients .profile .picture {\\n  grid-area: picture;\\n  border-radius: 50%;\\n  margin: auto;\\n}\\n.clients .profile .name {\\n  grid-area: name;\\n}\\n.clients .profile .email {\\n  grid-area: email;\\n  text-align: center;\\n  align-content: center;\\n}\\n.clients .profile .addresses {\\n  grid-area: addresses;\\n}\\n.clients .profile .addresses .addresses-list {\\n  display: grid;\\n  grid-template-columns: 1fr;\\n}\\n.clients .profile .addresses .addresses-list .address {\\n  margin: 10px;\\n}\\n\\n@media screen and (min-width: 450px) {\\n  .clients .profile {\\n    grid-template-areas:\\n      \\\"picture name\\\"\\n      \\\"picture email\\\"\\n      \\\"addresses addresses\\\";\\n  }\\n  .clients .profile .addresses .addresses-list {\\n    grid-template-columns: 1fr 1fr;\\n  }\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/src/pages/ClientsPage/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/src/pages/LoginPage/style.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/src/pages/LoginPage/style.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"section.login {\\n  background: linear-gradient(0deg, #eee, #fff);\\n  background-size: 0% 100%;\\n  max-width: 300px;\\n  margin: 10vw auto;\\n  margin-top: 10vw !important;\\n  text-align: center;\\n  padding: 40px 10px 10px;\\n  border-radius: 5px;\\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.5);\\n  animation: show 5s forwards;\\n}\\nsection.login .link-logo {\\n  display: block;\\n}\\nsection.login .App-logo {\\n  width: 100px;\\n}\\n\\nsection.login input {\\n  display: block;\\n  margin: 0 auto;\\n  padding: 10px;\\n  border-width: 0 0 2px 0;\\n  max-width: 100%;\\n  margin-bottom: 10px;\\n}\\n\\nsection.login button {\\n  background-color: #f00;\\n  color: #fff;\\n  border: 0;\\n  padding: 10px;\\n  margin: 5px;\\n  border-radius: 5px;\\n  transition: all 0.1s;\\n  cursor: pointer;\\n  box-shadow: 0 3px 0 #bd0000;\\n}\\n\\nsection.login button:active {\\n  transform: scale(0.97);\\n  box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);\\n}\\nsection.login button[type=\\\"reset\\\"] {\\n  background-color: #9e9e9e;\\n  box-shadow: 0 3px 0 #636363;\\n}\\n\\nsection.login .message.error {\\n  background-color: #f44336;\\n  color: #fff;\\n  padding: 10px;\\n  margin-bottom: 10px;\\n}\\n\\n@keyframes show {\\n  0% {\\n    background-size: 0% 100%;\\n    box-shadow: 0 0px 0px rgba(0, 0, 0, 0);\\n  }\\n  100% {\\n    background-size: 200% 200%;\\n    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.5);\\n  }\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/src/pages/LoginPage/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/src/pages/ShipmentsPage/style.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/src/pages/ShipmentsPage/style.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"section.shipments {\\n  background-color: #fff;\\n  margin: 0 auto;\\n  text-align: center;\\n  max-width: 90%;\\n  padding: 10px;\\n  border-radius: 5px;\\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.5);\\n}\\n\\nsection.shipments h2 {\\n  text-align: center;\\n  color: #f00;\\n}\\n\\nsection.shipments .modal {\\n  display: block;\\n  position: fixed;\\n  left: 0;\\n  top: 0;\\n  z-index: 9999;\\n  width: 100%;\\n  height: 100%;\\n  padding-top: 100px;\\n  background-color: black;\\n  background-color: rgba(0, 0, 0, 0.4);\\n  transition: 0.5s;\\n  overflow: auto;\\n  transition: all 0.3s linear;\\n}\\nsection.shipments .bikers-list {\\n  background-color: #fefefe;\\n  margin: auto;\\n  padding: 10px;\\n  border-radius: 5px;\\n  max-width: 300px;\\n  max-height: 400px;\\n  overflow-x: hidden;\\n  overflow-y: auto;\\n}\\n\\nsection.shipments .bikers-list .profile {\\n  background-color: #fff;\\n  display: grid;\\n  grid-template-columns: 1fr 40px;\\n  grid-template-areas: \\\"user_name user_picture\\\";\\n  margin: 5px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n}\\n\\nsection.shipments .bikers-list .profile:hover {\\n  background-color: #000;\\n  color: #fff;\\n}\\n\\nsection.shipments .bikers-list .profile .picture {\\n  grid-area: user_picture;\\n  width: 40px;\\n  background-color: #eee;\\n  border-top-right-radius: 5px;\\n  border-bottom-right-radius: 5px;\\n}\\nsection.shipments .bikers-list .profile h3 {\\n  grid-area: user_name;\\n  margin: 10px 0;\\n  font-size: 15px;\\n}\\n\\nsection.shipments.manager-list .shipment .button_status {\\n  box-shadow: none;\\n  cursor: auto;\\n}\\n\\nsection.shipments .shipment-list h4 {\\n  border-bottom: solid #e0e0e0 4px;\\n  padding-bottom: 5px;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/src/pages/ShipmentsPage/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/src/pages/UsersPage/style.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/src/pages/UsersPage/style.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".users {\\n  background-color: #fff;\\n  max-width: 90%;\\n  margin: 0 auto;\\n  padding: 10px;\\n  border-radius: 5px;\\n}\\n.users h2 {\\n  text-align: center;\\n  color: #f00;\\n}\\n\\n.users .profile {\\n  display: grid;\\n  margin-bottom: 20px;\\n  padding: 10px;\\n  border-radius: 5px;\\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-areas:\\n    \\\"picture picture\\\"\\n    \\\"name name\\\"\\n    \\\"email email\\\"\\n    \\\"addresses addresses\\\";\\n}\\n.users .profile h3 {\\n  text-align: center;\\n}\\n.users .profile .picture {\\n  grid-area: picture;\\n  margin: auto;\\n}\\n.users .select-role {\\n  background-color: #fd0;\\n}\\n.users .profile .name {\\n  grid-area: name;\\n}\\n.users .profile .email {\\n  grid-area: email;\\n  text-align: center;\\n  align-content: center;\\n}\\n.users .profile .addresses {\\n  grid-area: addresses;\\n}\\n.users .profile .addresses .addresses-list {\\n  display: grid;\\n  grid-template-columns: 1fr;\\n}\\n.users .profile .addresses .addresses-list .address {\\n  margin: 10px;\\n}\\n\\n.select.biker {\\n  background-color: #f00;\\n}\\n\\n@media screen and (min-width: 450px) {\\n  .users .profile {\\n    grid-template-areas:\\n      \\\"picture name\\\"\\n      \\\"picture email\\\"\\n      \\\"addresses addresses\\\";\\n  }\\n  .users .profile .addresses .addresses-list {\\n    grid-template-columns: 1fr 1fr;\\n  }\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/src/pages/UsersPage/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ })

/******/ });