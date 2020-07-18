"use strict";

exports.__esModule = true;
exports.default = void 0;

var _inferno = require("inferno");

var _infernoRouter = require("inferno-router");

var _Layout = _interopRequireDefault(require("./components/Layout"));

var _NotFound = _interopRequireDefault(require("./components/NotFound"));

var _Home = _interopRequireDefault(require("./components/Home"));

var _Benchmarks = _interopRequireDefault(require("./components/Benchmarks"));

var _Docs = _interopRequireDefault(require("./components/Docs"));

var _About = _interopRequireDefault(require("./components/About"));

var _Contribute = _interopRequireDefault(require("./components/Contribute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// function ReactDemo() {
//   return <div>
//     <script src="http://localhost:8082/build/react.js" async="async"/>
//     <iframe src=""/>
//   </div>;
// }
var AppRoute = function AppRoute(_ref) {
  var Component = _ref.component,
      rest = _objectWithoutPropertiesLoose(_ref, ["component"]);

  return (0, _inferno.normalizeProps)((0, _inferno.createComponentVNode)(2, _infernoRouter.Route, _objectSpread(_objectSpread({}, rest), {}, {
    "render": function render(props) {
      return (0, _inferno.normalizeProps)((0, _inferno.createComponentVNode)(2, _Layout.default, _objectSpread(_objectSpread({}, props), {}, {
        children: (0, _inferno.normalizeProps)((0, _inferno.createComponentVNode)(2, Component, _objectSpread({}, props), null, null))
      }), null, null));
    }
  }), null, null));
};
/**
 * Routes are defined here.
 */
// <Route path="/demo" component={ DemoInferno }/>


var _default = (0, _inferno.createComponentVNode)(2, _infernoRouter.Switch, {
  children: [(0, _inferno.createComponentVNode)(2, AppRoute, {
    "path": "/",
    "component": _Home.default,
    "exact": true
  }, null, null), (0, _inferno.createComponentVNode)(2, AppRoute, {
    "path": "/benchmarks",
    "component": _Benchmarks.default,
    "exact": true
  }, null, null), (0, _inferno.createComponentVNode)(2, AppRoute, {
    "path": "/docs/:path*",
    "component": _Docs.default
  }, null, null), (0, _inferno.createComponentVNode)(2, AppRoute, {
    "path": "/docs",
    "component": _Docs.default,
    "exact": true
  }, null, null), (0, _inferno.createComponentVNode)(2, AppRoute, {
    "path": "/about",
    "component": _About.default,
    "exact": true
  }, null, null), (0, _inferno.createComponentVNode)(2, AppRoute, {
    "path": "/contribute",
    "component": _Contribute.default,
    "exact": true
  }, null, null), (0, _inferno.createComponentVNode)(2, AppRoute, {
    "path": "*",
    "component": _NotFound.default
  }, null, null)]
}, null, null);

exports.default = _default;