"use strict";

exports.__esModule = true;
exports.default = _default;

var _inferno = require("inferno");

var _infernoRouter = require("inferno-router");

var _IconCompatible = _interopRequireDefault(require("../icons/IconCompatible"));

var _IconSpeed = _interopRequireDefault(require("../icons/IconSpeed"));

var _IconIsomorphic = _interopRequireDefault(require("../icons/IconIsomorphic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return (0, _inferno.createVNode)(1, "div", "col-mr-auto text-center", (0, _inferno.createVNode)(1, "div", "columns", [(0, _inferno.createVNode)(1, "div", "column col-xs-12", [(0, _inferno.createComponentVNode)(2, _IconCompatible.default, null, null, null), (0, _inferno.createVNode)(1, "h4", null, "React Compatible", 16, null, null, null), (0, _inferno.createVNode)(1, "p", null, "React-like API, concepts and component lifecycle events. Switch over easily with inferno-compat.", 16, null, null, null)], 4, null, null, null), (0, _inferno.createVNode)(1, "div", "divider-vert hide-sm", null, 1, null, null, null), (0, _inferno.createVNode)(1, "div", "column col-xs-12", [(0, _inferno.createComponentVNode)(2, _IconSpeed.default, null, null, null), (0, _inferno.createVNode)(1, "h4", null, "Insane Performance", 16, null, null, null), (0, _inferno.createVNode)(1, "p", null, "One of the fastest front-end frameworks for rendering UI in the DOM, making 60 FPS on mobile possible.", 16, null, null, null), (0, _inferno.createComponentVNode)(2, _infernoRouter.Link, {
    "to": "/benchmarks",
    children: "See Our Benchmarks"
  }, null, null)], 4, null, null, null), (0, _inferno.createVNode)(1, "div", "divider-vert hide-sm", null, 1, null, null, null), (0, _inferno.createVNode)(1, "div", "column col-xs-12", [(0, _inferno.createComponentVNode)(2, _IconIsomorphic.default, null, null, null), (0, _inferno.createVNode)(1, "h4", null, "Isomorphic", 16, null, null, null), (0, _inferno.createVNode)(1, "p", null, "Isomorphic rendering on both client and server, along with fast-booting from server-side renders.", 16, null, null, null)], 4, null, null, null)], 4, null, null, null), 2, null, null, null);
}