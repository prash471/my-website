"use strict";

exports.__esModule = true;
exports.default = void 0;

var _inferno = require("inferno");

var _ContentAccordion = _interopRequireDefault(require("./common/ContentAccordion"));

var _Features = _interopRequireDefault(require("./home/Features"));

var _IconInferno = _interopRequireDefault(require("./icons/IconInferno"));

var _Community = require("./common/Community");

var _infernoRouter = require("inferno-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Home = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Home, _Component);

  function Home() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Home.prototype;

  _proto.render = function render() {
    return (0, _inferno.createVNode)(1, "div", "home container grid-lg", [(0, _inferno.createVNode)(1, "div", "hide-sm", null, 1, {
      "style": {
        'margin-bottom': '4rem'
      }
    }, null, null), (0, _inferno.createVNode)(1, "div", "center", (0, _inferno.createVNode)(1, "div", "columns hero-banner", [(0, _inferno.createVNode)(1, "div", "column col-4 col-sm-12 col-ml-auto", (0, _inferno.createVNode)(1, "div", "logo", (0, _inferno.createComponentVNode)(2, _IconInferno.default, null, null, null), 2, null, null, null), 2, null, null, null), (0, _inferno.createVNode)(1, "div", "column col-8 col-sm-12 col-mr-auto", (0, _inferno.createVNode)(1, "div", "logo-text", [(0, _inferno.createVNode)(1, "h1", null, [(0, _inferno.createTextVNode)("Inferno"), (0, _inferno.createVNode)(1, "small", null, (0, _inferno.createTextVNode)("v" + _inferno.version), 2, null, null, null)], 4, null, null, null), (0, _inferno.createVNode)(1, "h2", null, "Inferno is an insanely fast, React-like library for building high-performance user interfaces on both the client and server.", 16, null, null, null), (0, _inferno.createVNode)(1, "div", "buttons", [(0, _inferno.createComponentVNode)(2, _infernoRouter.Link, {
      "className": "button",
      "to": "/docs/guides/installation",
      children: "Get Started"
    }, null, null), (0, _inferno.createVNode)(1, "a", "button second", "GitHub", 16, {
      "target": "_blank",
      "href": "https://github.com/infernojs/inferno",
      "rel": "noopener noreferrer"
    }, null, null)], 4, null, null, null)], 4, null, null, null), 2, null, null, null)], 4, null, null, null), 2, null, null, null), (0, _inferno.createVNode)(1, "div", "hide-xs", null, 1, {
      "style": {
        'margin-bottom': '6rem'
      }
    }, null, null), (0, _inferno.createVNode)(1, "div", "show-xs", null, 1, {
      "style": {
        'margin-bottom': '3rem'
      }
    }, null, null), (0, _inferno.createVNode)(1, "section", "features", (0, _inferno.createComponentVNode)(2, _Features.default, null, null, null), 2, null, null, null), (0, _inferno.createVNode)(1, "div", "hide-xs", null, 1, {
      "style": {
        'margin-bottom': '6rem'
      }
    }, null, null), (0, _inferno.createVNode)(1, "div", "show-xs", null, 1, {
      "style": {
        'margin-bottom': '3rem'
      }
    }, null, null), (0, _inferno.createVNode)(1, "section", null, [(0, _inferno.createVNode)(1, "h3", "text-center", "Inferno is different, yet familiar...", 16, {
      "style": {
        color: '#b9b9b9',
        marginBottom: '2rem'
      }
    }, null, null), (0, _inferno.createComponentVNode)(2, _ContentAccordion.default, null, null, null)], 4, null, null, null), (0, _inferno.createVNode)(1, "div", "hide-xs", null, 1, {
      "style": {
        'margin-bottom': '6rem'
      }
    }, null, null), (0, _inferno.createVNode)(1, "div", "show-xs", null, 1, {
      "style": {
        'margin-bottom': '3rem'
      }
    }, null, null), (0, _inferno.createComponentVNode)(2, _Community.Community, null, null, null)], 4, null, null, null);
  };

  return Home;
}(_inferno.Component);

exports.default = Home;