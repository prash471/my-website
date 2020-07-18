"use strict";

exports.__esModule = true;
exports.default = Footer;

var _inferno = require("inferno");

var _LogoDO = _interopRequireDefault(require("../logos/LogoDO"));

var _LogoSauceLabs = _interopRequireDefault(require("../logos/LogoSauceLabs"));

var _LogoTheGrid = _interopRequireDefault(require("../logos/LogoTheGrid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Footer(props, _ref) {
  var router = _ref.router;
  var hideFooter = router.url === '/repl';

  if (hideFooter) {
    return null;
  }

  return (0, _inferno.createVNode)(1, "footer", "container grid-lg", [(0, _inferno.createVNode)(1, "div", "sponsors col-mr-auto", (0, _inferno.createVNode)(1, "div", "columns", [(0, _inferno.createComponentVNode)(2, FooterItem, {
    "href": "https://www.digitalocean.com",
    "className": "digitalocean",
    "LogoComponent": _LogoDO.default
  }, null, null), (0, _inferno.createVNode)(1, "div", "divider-vert hide-sm", null, 1, null, null, null), (0, _inferno.createComponentVNode)(2, FooterItem, {
    "href": "http://info.saucelabs.com",
    "className": "saucelabs",
    "LogoComponent": _LogoSauceLabs.default
  }, null, null), (0, _inferno.createVNode)(1, "div", "divider-vert hide-sm", null, 1, null, null, null), (0, _inferno.createComponentVNode)(2, FooterItem, {
    "href": "http://thegrid.io",
    "className": "thegrid",
    "LogoComponent": _LogoTheGrid.default
  }, null, null)], 4, null, null, null), 2, null, null, null), (0, _inferno.createVNode)(1, "div", "container text-center license", [(0, _inferno.createVNode)(1, "a", null, "Project licensed under MIT.", 16, {
    "target": "_blank",
    "rel": "noopener noreferrer",
    "href": "https://opensource.org/licenses/MIT"
  }, null, null), (0, _inferno.createVNode)(1, "div", "built", [(0, _inferno.createTextVNode)("Website built with Inferno " + _inferno.version + " using "), (0, _inferno.createVNode)(1, "a", null, "create-inferno-app", 16, {
    "target": "_blank",
    "rel": "noopener noreferrer",
    "href": "https://github.com/infernojs/create-inferno-app"
  }, null, null)], 4, null, null, null)], 4, null, null, null)], 4, null, null, null);
}

var FooterItem = function FooterItem(_ref2) {
  var href = _ref2.href,
      className = _ref2.className,
      LogoComponent = _ref2.LogoComponent;
  return (0, _inferno.createVNode)(1, "div", "column col-xs-10 text-center", (0, _inferno.createVNode)(1, "a", className, (0, _inferno.createComponentVNode)(2, LogoComponent, null, null, null), 2, {
    "target": "_blank",
    "rel": "noopener noreferrer",
    "href": href
  }, null, null), 2, null, null, null);
};