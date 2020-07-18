"use strict";

exports.__esModule = true;
exports.default = _default;

var _inferno = require("inferno");

var _infernoRouter = require("inferno-router");

function _default() {
  return (0, _inferno.createVNode)(1, "div", "text-xs-center p-3", [(0, _inferno.createVNode)(1, "h1", null, "Page not found", 16, null, null, null), (0, _inferno.createComponentVNode)(2, _infernoRouter.Link, {
    "to": "/",
    children: "Go to Homepage"
  }, null, null)], 4, null, null, null);
}