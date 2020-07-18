"use strict";

exports.__esModule = true;
exports.default = _default;

var _inferno = require("inferno");

var _Header = _interopRequireDefault(require("./common/Header"));

var _Footer = _interopRequireDefault(require("./common/Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(_ref) {
  var match = _ref.match,
      children = _ref.children;
  return (0, _inferno.createVNode)(1, "div", null, [(0, _inferno.createComponentVNode)(2, _Header.default, {
    "match": match
  }, null, null), (0, _inferno.createVNode)(1, "main", "container", children, 0, null, null, null), (0, _inferno.createComponentVNode)(2, _Footer.default, null, null, null)], 4, null, null, null);
}