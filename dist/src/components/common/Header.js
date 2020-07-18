"use strict";

exports.__esModule = true;
exports.default = void 0;

var _inferno = require("inferno");

var _infernoRouter = require("inferno-router");

var _IconMenu = _interopRequireDefault(require("../icons/IconMenu"));

var _IconInferno = _interopRequireDefault(require("../icons/IconInferno"));

var _isPassive = _interopRequireDefault(require("../utils/isPassive"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MenuLink = function MenuLink(props) {
  var className = getMenuClassName(props, props.match.url);

  if (props.to.startsWith('http')) {
    return (0, _inferno.createVNode)(1, "a", className, props.children, 0, {
      "href": props.to,
      "target": "_blank",
      "rel": "noopener noreferrer"
    }, null, null);
  }

  return (0, _inferno.createComponentVNode)(2, _infernoRouter.Link, {
    "to": props.to,
    "className": className,
    children: props.children
  }, null, null);
};

var Header = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Header, _Component);

  function Header(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "closeSidebar", function () {
      _this.setState({
        active: false,
        activeDropdown: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleSidebar", function () {
      _this.setState({
        active: !_this.state.active
      });
    });

    _defineProperty(_assertThisInitialized(_this), "openDropdown", function (activeDropdown) {
      return function (e) {
        e.preventDefault();

        _this.setState({
          activeDropdown: activeDropdown
        });
      };
    });

    _this.state = {
      active: false,
      activeDropdown: null
    };
    return _this;
  }

  var _proto = Header.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var main = document.querySelector('body');
    main.addEventListener('click', this.closeSidebar, _isPassive.default);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var main = document.querySelector('body');
    main.removeEventListener('click', this.closeSidebar, _isPassive.default);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        location = _this$props.location,
        match = _this$props.match;
    var locationURL = location.pathname;
    return (0, _inferno.createFragment)([(0, _inferno.createVNode)(1, "div", "banner", [(0, _inferno.createTextVNode)("Black Lives Matter.\xA0"), (0, _inferno.createVNode)(1, "a", null, "Support\xA0the\xA0Equal\xA0Justice\xA0Initiative.", 16, {
      "style": "color:#dc0030",
      "target": "_blank",
      "rel": "noopener noreferrer",
      "href": "https://support.eji.org/give/153413/#!/donation/checkout"
    }, null, null)], 4, null, null, null), (0, _inferno.createVNode)(1, "div", "menu", (0, _inferno.createVNode)(1, "div", "container", (0, _inferno.createVNode)(1, "div", "row", [(0, _inferno.createVNode)(1, "div", "menu-toggle", (0, _inferno.createComponentVNode)(2, _IconMenu.default, null, null, null), 2, {
      "onClick": this.toggleSidebar
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": "/",
      "className": "branding lg3 sm3",
      children: [(0, _inferno.createComponentVNode)(2, _IconInferno.default, null, null, null), " Inferno ", (0, _inferno.createVNode)(1, "small", null, [(0, _inferno.createTextVNode)("v"), _inferno.version], 0, null, null, null)]
    }, null, null), (0, _inferno.createVNode)(1, "nav", 'lg9 sm9 ' + (this.state.active ? 'open' : 'closed'), [(0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": "/",
      children: "Home"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": "/docs/guides/installation",
      children: "Quick Start"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": "/docs/api/inferno",
      children: "API"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": "https://github.com/infernojs",
      children: "Github"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": "https://github.com/infernojs/inferno/releases",
      children: "Release notes"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": "https://opencollective.com/inferno",
      children: "Open collective"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": "https://inferno-slack.herokuapp.com",
      children: "Slack"
    }, null, null)], 4, null, null, null)], 4, null, null, null), 2, null, null, null), 2, null, null, null)], 4, null);
  };

  return Header;
}(_inferno.Component);

var _default = (0, _infernoRouter.withRouter)(Header);

exports.default = _default;

function getMenuClassName(props, url) {
  // Hacky solution to highlight the correct menu item
  var classNames = props.className ? props.className.split(' ') : [];

  if (url && props.to.split('/').length > 2) {
    if (url.includes('/docs/guides') && props.to.includes('/docs/guides') || url.includes('/docs/api') && props.to.includes('/docs/api')) {
      classNames.push('selected');
      return classNames.join(' ');
    }
  }

  if (url && url === props.to) {
    classNames.push('selected');
  }

  if (classNames.indexOf('branding') !== -1 && url !== '/') {
    classNames.push('show');
  }

  return classNames.join(' ');
}