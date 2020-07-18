"use strict";

exports.__esModule = true;
exports.default = void 0;

var _inferno = require("inferno");

var _Editor = _interopRequireDefault(require("./repl/Editor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var codeSample = "\nexport default class MyInfernoTimer extends Component {\n  constructor(props, context) {\n    super(props, context)\n    this.state = {\n      time: null\n    }\n  }\n  componentDidMount() {\n    setInterval(() => {\n      this.setState({\n        time: (new Date()).toLocaleString()\n      })\n    }, 200)\n  }\n  render() {\n    return (\n      <h2>\n        Current time: <span>{this.state.time}</span>\n      </h2>\n    )\n  }\n}\n";

var REPL = /*#__PURE__*/function (_Component) {
  _inheritsLoose(REPL, _Component);

  function REPL(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      loaded: false
    };
    return _this;
  }

  var _proto = REPL.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setState({
      loaded: true
    });
  };

  _proto.render = function render() {
    return (0, _inferno.createComponentVNode)(2, _Editor.default, {
      "loaded": this.state.loaded,
      children: codeSample
    }, null, null);
  };

  return REPL;
}(_inferno.Component);

exports.default = REPL;