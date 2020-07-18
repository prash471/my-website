"use strict";

exports.__esModule = true;
exports.default = void 0;

var _inferno = require("inferno");

var _infernoRouter = require("inferno-router");

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Docs = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Docs, _Component);

  function Docs(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "loadDocument", function (to, changeRoute) {
      var router = _this.context.router;
      var path = '/' + to.replace('/docs/', '');

      if (changeRoute) {
        return router.history.push(to);
      }

      fetch("/api/markdown?file=" + path).then(function (response) {
        return response.json();
      }).then(function (response) {
        _this.setState({
          markdown: response
        });
      });
    });

    _this.state = {
      markdown: null,
      prevURL: null
    };
    return _this;
  }

  var _proto = Docs.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var match = _ref.match;
    this.loadDocument(match.params.path);
  };

  _proto.componentDidMount = function componentDidMount() {
    var match = this.props.match;
    this.loadDocument(match.params.path || 'guides/installation');
  };

  _proto.render = function render() {
    var match = this.props.match;
    var navigationAPI = (0, _inferno.createVNode)(1, "ul", "nav", (0, _inferno.createVNode)(1, "li", "nav-item active", [(0, _inferno.createVNode)(1, "h4", null, "API", 16, null, null, null), (0, _inferno.createVNode)(1, "ul", "nav", [(0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/api/inferno',
      children: "Inferno"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/api/inferno-server',
      children: "Inferno-server"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/api/inferno-mobx',
      children: "Inferno-mobx"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/api/inferno-redux',
      children: "Inferno-redux"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/api/inferno-router',
      children: "Inferno-router"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/api/inferno-test-utils',
      children: "Inferno-test-utils"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/api/inferno-vnode-flags',
      children: "Inferno-vnode-flags"
    }, null, null)], 4, null, null, null)], 4, null, null, null), 2, null, null, null);
    var navigationGuides = (0, _inferno.createVNode)(1, "ul", "nav", [(0, _inferno.createVNode)(1, "li", "nav-item active", [(0, _inferno.createVNode)(1, "h4", null, "Guides", 16, null, null, null), (0, _inferno.createVNode)(1, "ul", "nav", [(0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/guides/installation',
      children: "Installation"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/guides/using-cdn',
      children: "Using CDN"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": 'https://jsfiddle.net/rq5L9fgs/',
      children: "JS Fiddle"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/guides/getting-started',
      children: "Getting Started"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/guides/components',
      children: "Components"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/guides/libraries',
      children: "Community Libraries"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/guides/event-handling',
      children: "Event Handling"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/guides/forms',
      children: "Forms"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/guides/brunch',
      children: "Brunch Builder"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/guides/switching-to-inferno',
      children: "Switching to Inferno"
    }, null, null)], 4, null, null, null)], 4, null, null, null), (0, _inferno.createVNode)(1, "li", "nav-item active", [(0, _inferno.createVNode)(1, "h4", null, "Advanced", 16, null, null, null), (0, _inferno.createVNode)(1, "ul", "nav", [(0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/guides/what-is-jsx',
      children: "What is JSX?"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/guides/alternatives-to-jsx',
      children: "Alternatives to JSX"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/guides/devtools',
      children: "Dev Tools"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/guides/routing',
      children: "Routing"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/guides/server-side-rendering',
      children: "Server-side rendering"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/guides/isomorphic',
      children: "Isomorphic"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/guides/typescript-support',
      children: "TypeScript Support"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/guides/optimizations',
      children: "Optimizations"
    }, null, null), (0, _inferno.createComponentVNode)(2, MenuLink, {
      "match": match,
      "to": '/docs/guides/benefits/list-rendering',
      children: "Lists & keys"
    }, null, null)], 0, null, null, null)], 4, null, null, null)], 4, null, null, null);
    return (0, _inferno.createVNode)(1, "section", "columns docs row", [(0, _inferno.createVNode)(1, "aside", "docs-menu", match && match.url.includes('api/') ? navigationAPI : navigationGuides, 0, null, null, null), (0, _inferno.createVNode)(1, "aside", "column docs-content", this.state.markdown, 0, {
      "id": "markdown-root"
    }, null, null)], 4, null, null, null);
  };

  return Docs;
}(_inferno.Component);

exports.default = Docs;

var MenuLink = function MenuLink(_ref2) {
  var match = _ref2.match,
      to = _ref2.to,
      children = _ref2.children;

  if (to.indexOf('http') === 0) {
    return (0, _inferno.createVNode)(1, "li", null, (0, _inferno.createVNode)(1, "a", null, children, 0, {
      "target": "_blank",
      "rel": "noopener noreferrer",
      "href": to
    }, null, null), 2, null, null, null);
  }

  var className = match.url === to ? "nav-item selected" : "nav-item";
  return (0, _inferno.createVNode)(1, "li", null, (0, _inferno.createComponentVNode)(2, _infernoRouter.Link, {
    "className": className,
    "to": to,
    children: children
  }, null, null), 2, null, null, null);
};