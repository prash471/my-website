"use strict";

exports.__esModule = true;
exports.default = Loading;

var _inferno = require("inferno");

function Loading() {
  // Loading animation...
  return (0, _inferno.createVNode)(1, "main", "spinner-wrapper", (0, _inferno.createVNode)(32, "svg", "spinner", (0, _inferno.createVNode)(32, "circle", "path", null, 1, {
    "fill": "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    "cx": "33",
    "cy": "33",
    "r": "30"
  }, null, null), 2, {
    "width": "65px",
    "height": "65px",
    "viewBox": "0 0 66 66",
    "xmlns": "http://www.w3.org/2000/svg"
  }, null, null), 2, null, null, null);
}