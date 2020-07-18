"use strict";

exports.__esModule = true;
exports.LatestRelease = void 0;

var _inferno = require("inferno");

var _infernoVnodeFlags = require("inferno-vnode-flags");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var LatestRelease = /*#__PURE__*/function (_Component) {
  _inheritsLoose(LatestRelease, _Component);

  function LatestRelease(props, context) {
    var _this;

    _this = _Component.call(this, props, context) || this;
    _this.state = {
      release: null
    };
    return _this;
  }

  var _proto = LatestRelease.prototype;

  _proto.componentWillMount = function componentWillMount() {
    var _this2 = this;

    fetch("/api/release/latest").then(function (response) {
      return response.json();
    }).then(function (response) {
      _this2.setState({
        release: response
      });
    });
  };

  _proto.render = function render(props, state) {
    var release = state.release;

    if (!release) {
      return null;
    }

    return (0, _inferno.createVNode)(1, "section", "news", [(0, _inferno.createVNode)(1, "h4", null, (0, _inferno.createTextVNode)(release.name), 2, null, null, null), (0, _inferno.createVNode)(1, "span", "release", (0, _inferno.createTextVNode)(new Date(release.published_at).toLocaleString()), 2, null, null, null)], 4, null, null, null);
  };

  return LatestRelease;
}(_inferno.Component);

exports.LatestRelease = LatestRelease;