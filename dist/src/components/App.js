"use strict";

exports.__esModule = true;
exports.App = void 0;

var _inferno = require("inferno");

var _infernoRouter = require("inferno-router");

var _routes = _interopRequireDefault(require("../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var App = /*#__PURE__*/function (_Component) {
  _inheritsLoose(App, _Component);

  function App() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = App.prototype;

  _proto.render = function render() {
    return (0, _inferno.createComponentVNode)(2, _infernoRouter.BrowserRouter, {
      children: _routes.default
    }, null, null);
  };

  return App;
}(_inferno.Component);

exports.App = App;