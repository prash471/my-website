"use strict";

exports.__esModule = true;
exports.default = void 0;

var _inferno = require("inferno");

var _infernoRouter = require("inferno-router");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Contribute = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Contribute, _Component);

  function Contribute() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Contribute.prototype;

  _proto.componentDidMount = function componentDidMount() {};

  _proto.render = function render() {
    return (0, _inferno.createVNode)(1, "div", "text-xs-center p-3", [(0, _inferno.createVNode)(1, "h1", null, "Contribute", 16, null, null, null), (0, _inferno.createComponentVNode)(2, _infernoRouter.Link, {
      "to": "/",
      children: "Go to Homepage"
    }, null, null)], 4, null, null, null);
  };

  return Contribute;
}(_inferno.Component);

exports.default = Contribute;