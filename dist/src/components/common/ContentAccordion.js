"use strict";

exports.__esModule = true;
exports.default = void 0;

var _inferno = require("inferno");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var setCurrent = function setCurrent(_ref, e) {
  var instance = _ref.instance,
      index = _ref.index;
  e.stopPropagation();
  instance.setState({
    current: index
  });
  ga('send', 'event', 'Differences', instance.state.list[instance.state.current].name);
};

var ContentAccordion = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ContentAccordion, _Component);

  function ContentAccordion() {
    var _this;

    _this = _Component.call(this) || this;
    _this.state = {
      current: 0,
      list: [{
        name: 'Differences from React',
        description: ["Inferno doesn't have a fully synthetic event system like React does. Inferno has a partially synthetic event system, instead opting to only delegate certain events (such as `onClick`).", "Inferno doesn't support React Native. Inferno was only designed for the browser/server with the DOM in mind.", "Inferno doesn't support legacy string refs, use `createRef` or callback `ref` API", "Inferno provides lifecycle events on functional components. This is a major win for people who prefer lightweight components rather than ES2015 classes.", "Inferno is able to use the React Dev Tools extensions for Chrome/Firefox/etc to provide the same level of debugging experience to the Inferno user via `inferno-devtools`.", "Inferno styles are set using CSS property names [background-color: blue] rather than [backgroundColor: blue]. camelCase styles are supported through inferno-compat package."]
      }, {
        name: 'Differences from Preact',
        description: ["Inferno has a partial synthetic event system, resulting in better performance via delegation of certain events.", "Inferno is much faster than Preact in rendering, updating and removing elements from the DOM.", "Inferno fully supports controlled components for `input`/`select`/`textarea` elements. This prevents lots of edgecases where the virtual DOM is not the source of truth (it should always be). Preact pushes the source of truth to the DOM itself", "Inferno provides lifecycle events on functional components. This is a major win for people who prefer lightweight components rather than ES2015 classes."]
      }]
    };
    return _this;
  }

  var _proto = ContentAccordion.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return (0, _inferno.createVNode)(1, "div", "differences col-9 col-md-11 col-sm-12 col-xs-12 centered", [(0, _inferno.createVNode)(1, "ul", "tab tab-block", this.state.list.map(function (item, index) {
      return (0, _inferno.createVNode)(1, "li", _this2.state.current === index ? 'tab-item active' : 'tab-item', (0, _inferno.createVNode)(1, "a", null, item.name, 0, {
        "onClick": (0, _inferno.linkEvent)({
          instance: _this2,
          index: index
        }, setCurrent)
      }, null, null), 2, null, null, null);
    }), 0, null, null, null), (0, _inferno.createVNode)(1, "ul", null, this.state.list[this.state.current].description.map(function (item) {
      return (0, _inferno.createVNode)(1, "li", "differences-item", item, 0, null, null, null);
    }), 0, null, null, null)], 4, null, null, null);
  };

  return ContentAccordion;
}(_inferno.Component);

exports.default = ContentAccordion;