"use strict";

exports.__esModule = true;
exports.default = void 0;

var _inferno = require("inferno");

var _BasicChart = _interopRequireDefault(require("./common/BasicChart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var setCurrent = function setCurrent(_ref, e) {
  var instance = _ref.instance,
      index = _ref.index;
  e.stopPropagation();
  instance.setState({
    current: index
  });
  ga('send', 'event', 'Benchmark', instance.state.list[instance.state.current].name);
};

var Benchmarks = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Benchmarks, _Component);

  function Benchmarks() {
    var _this;

    _this = _Component.call(this) || this;
    _this.state = {
      current: 0,
      list: [{
        id: 'marko-color-picker-chrome',
        name: 'Color Picker (Chrome)',
        description: 'This benchmark was created by Marko.js to compare client-side rendering performance of various frameworks – numbers show ops/sec, higher is better.',
        link: 'https://github.com/marko-js/isomorphic-ui-benchmarks',
        data: [{
          label: 'Inferno 7.3.2',
          bg: '#dc0030',
          score: 17078
        }, {
          label: 'Marko.js 4.18.16',
          score: 6008
        }, {
          label: 'Preact 10.0.1',
          score: 6435
        }, {
          label: 'React 16.10.2',
          score: 7358
        }, {
          label: 'Vue 2.6.10',
          score: 4291
        }]
      }, {
        id: 'marko-color-picker-node',
        name: 'Color Picker (Server)',
        description: 'This benchmark was created by Marko.js to compare server-side rendering performance of various frameworks – numbers show ops/sec, higher is better.',
        link: 'https://github.com/marko-js/isomorphic-ui-benchmarks',
        data: [{
          label: 'Inferno 7.3.2',
          bg: '#dc0030',
          score: 21453
        }, {
          label: 'Marko.js 4.18.16',
          score: 24540
        }, {
          label: 'Preact 10.0.1',
          score: 4587
        }, {
          label: 'React 16.10.2',
          score: 4300
        }, {
          label: 'Vue 2.6.10',
          score: 9120
        }]
      }, {
        id: 'frameworks',
        name: 'JS Framework',
        description: 'The js-framework-benchmark is a simple benchmark, comparing various typical app operations for several JavaScript frameworks. The benchmarks creates a large table with randomized entries and measures the time for various operations – lower is better.',
        link: 'https://github.com/krausest/js-framework-benchmark',
        data: [{
          label: 'Vanilla JS',
          score: 1.0
        }, {
          label: 'Inferno 5.3.0',
          bg: '#dc0030',
          score: 1.06
        }, {
          label: 'Preact 8.2.6',
          score: 1.29
        }, {
          label: 'Vue 2.5.16',
          score: 1.37
        }, {
          label: 'Svelte 2.9.7',
          score: 1.39
        }, {
          label: 'React 16.4.1',
          score: 1.50
        }, {
          label: 'Angular 6.1.0',
          score: 1.50
        }, {
          label: 'Marko.js 4.12.3',
          score: 1.50
        }]
      }, {
        id: 'uibench',
        name: 'UI Bench',
        description: 'UI Benchmark is considered a more accurate test of overall UI performance in a library. The tests were run with Full Render Time enabled and 5 Iterations. Read UI Benchmark\'s notes for caveats and stipulations before drawing further conclusions – lower is better.',
        link: 'https://localvoid.github.io/uibench/',
        data: [{
          label: 'Inferno JS',
          bg: '#dc0030',
          score: 1
        }, {
          label: 'Vanilla JS',
          score: 2.13
        }, {
          label: 'React 15.4',
          score: 2.10
        }, {
          label: 'Preact',
          score: 3.04
        }, {
          label: 'DIO',
          score: 1.64
        }, {
          label: 'ivi',
          score: 1.10
        }]
      }]
    };
    return _this;
  }

  var _proto = Benchmarks.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return (0, _inferno.createVNode)(1, "section", "container page row", (0, _inferno.createVNode)(1, "div", "benchmarks", [(0, _inferno.createVNode)(1, "ul", "options", this.state.list.map(function (item, index) {
      return (0, _inferno.createVNode)(1, "li", _this2.state.current === index ? 'active' : '', (0, _inferno.createVNode)(1, "span", null, item.name, 0, null, null, null), 2, {
        "onClick": (0, _inferno.linkEvent)({
          instance: _this2,
          index: index
        }, setCurrent)
      }, null, null);
    }), 0, null, null, null), (0, _inferno.createVNode)(1, "div", "row charts", [(0, _inferno.createVNode)(1, "div", "lg5 copy", (0, _inferno.createVNode)(1, "div", "center", [(0, _inferno.createVNode)(1, "p", null, this.state.list[this.state.current].description, 0, null, null, null), this.state.list[this.state.current].link ? (0, _inferno.createVNode)(1, "a", "button not-pad lg5 sm xs10", "View the benchmark", 16, {
      "target": "_blank",
      "rel": "noopener noreferrer",
      "href": this.state.list[this.state.current].link
    }, null, null) : ''], 0, null, null, null), 2, null, null, null), (0, _inferno.createVNode)(1, "div", "lg7 visual", (0, _inferno.createComponentVNode)(2, _BasicChart.default, {
      "data": this.state.list[this.state.current].data
    }, null, null), 2, null, null, null)], 4, null, null, null)], 4, null, null, null), 2, null, null, null);
  };

  return Benchmarks;
}(_inferno.Component);

exports.default = Benchmarks;