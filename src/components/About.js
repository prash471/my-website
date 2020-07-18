"use strict";

exports.__esModule = true;
exports.default = void 0;

var _inferno = require("inferno");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var About = /*#__PURE__*/function (_Component) {
  _inheritsLoose(About, _Component);

  function About() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = About.prototype;

  _proto.render = function render() {
    return (0, _inferno.createVNode)(1, "section", "container page row", (0, _inferno.createVNode)(1, "div", "inner", [(0, _inferno.createVNode)(1, "h1", null, "About Inferno", 16, null, null, null), (0, _inferno.createVNode)(1, "blockquote", null, [(0, _inferno.createTextVNode)("Inferno 1.0 is really well written. It's how I would've written React. I'd recommend reading its source to learn."), (0, _inferno.createVNode)(1, "small", null, "\u2014 member of the React core team at Facebook", 16, null, null, null)], 4, null, null, null), (0, _inferno.createVNode)(1, "h2", null, "Objective", 16, null, null, null), (0, _inferno.createVNode)(1, "p", null, "Inferno is designed to be a light-weight and blazing fast React-like Javascript library for building modern interfaces. It was also designed to be React compatible, modular and isomorphic. The community supporting its development is tasked with continuously improving performance and exploring new and efficient methods.", 16, null, null, null), (0, _inferno.createVNode)(1, "h2", null, "What's React?", 16, null, null, null), (0, _inferno.createVNode)(1, "p", null, "For those not familiar with React, Inferno is a JavaScript library for building user interfaces in a declarative manner. Rather than working with MVC/MVVM style patterns, Inferno uses a component-based approach where data flows in one direction, making coding predictable, re-usable and highly testable. Based on the concept of learn once, write anywhere, Inferno doesn't impose any restrictions on how you create components. You literally write JavaScript to state how you'd like your UI to look \u2013 Inferno does all the rest. Inferno also renders content on the server via inferno-server and NodeJS, so you can write awesome UIs that get rendered full-stack.", 16, null, null, null), (0, _inferno.createVNode)(1, "h2", null, "History", 16, null, null, null), (0, _inferno.createVNode)(1, "p", null, "Inferno started as an idea two years ago, to see if a UI library could really improve the experience, battery, memory usage and performance on mobile devices. At the time we really struggled to get good performance on any UI library/framework at the time \u2013 it simply wasn't happening, we spent a huge amount of time writing lots of vanilla JavaScript code and it did the job \u2013 but it was a mess.", 16, null, null, null), (0, _inferno.createVNode)(1, "p", null, "Since then, things haven't really improved much in the mobile space. Libraries have gotten smaller, but the time to parse a 2mb app can result in 5+ seconds time before the user can even see anything. Frameworks and libraries need to lose bloat, they need to care about performance. Developing on a MacBook Pro and seeing animations, routing, complex UIs instantly appear is not going to happen on an average mobile device (especially in emerging countries).", 16, null, null, null), (0, _inferno.createVNode)(1, "h2", null, "Who's Using Inferno?", 16, null, null, null), (0, _inferno.createVNode)(1, "p", null, [(0, _inferno.createTextVNode)("Inferno 1.0 was officially released in early January 2017, however many projects have already started using Inferno either in production or for internal testing. In a short period of time Inferno grew from around 150 Github stars at the start of the year, to around 7300 by the end of the year, 15 NPM downloads to 15k a month and 300k downloads from the CDN. Inferno is actively being vetted or already in production by these companies:"), (0, _inferno.createVNode)(1, "ul", "list columns", [(0, _inferno.createVNode)(1, "li", null, (0, _inferno.createVNode)(1, "a", null, "The Grid", 16, {
      "target": "_blank",
      "rel": "noopener noreferrer",
      "href": "http://www.thegrid.io"
    }, null, null), 2, null, null, null), (0, _inferno.createVNode)(1, "li", null, (0, _inferno.createVNode)(1, "a", null, "Evite.com", 16, {
      "target": "_blank",
      "rel": "noopener noreferrer",
      "href": "http://www.evite.com"
    }, null, null), 2, null, null, null), (0, _inferno.createVNode)(1, "li", null, (0, _inferno.createVNode)(1, "a", null, "Globo.com (Brazil)", 16, {
      "target": "_blank",
      "rel": "noopener noreferrer",
      "href": "http://www.globo.com"
    }, null, null), 2, null, null, null)], 4, null, null, null), (0, _inferno.createTextVNode)("If your company/project is actively using Inferno, we'd love to know about it!")], 4, null, null, null), (0, _inferno.createVNode)(1, "h2", null, "Read About Inferno", 16, null, null, null), (0, _inferno.createVNode)(1, "p", null, [(0, _inferno.createTextVNode)("As the Inferno community grows and evolves, we hope that other people will contribute by writing new articles about the library or the community surrounding it. Here's a collection of some articles published to date:"), (0, _inferno.createVNode)(1, "ul", "list", [(0, _inferno.createVNode)(1, "li", null, (0, _inferno.createVNode)(1, "a", null, "Learn About Inferno JS: Build and Authenticate an App", 16, {
      "target": "_blank",
      "rel": "noopener noreferrer",
      "href": "https://auth0.com/blog/learn-about-inferno-js-build-and-authenticate-an-app/?utm_source=twitter&utm_medium=sc&utm_campaign=inferno"
    }, null, null), 2, null, null, null), (0, _inferno.createVNode)(1, "li", null, (0, _inferno.createVNode)(1, "a", null, "Hacker News", 16, {
      "target": "_blank",
      "rel": "noopener noreferrer",
      "href": "https://news.ycombinator.com/item?id=11837082"
    }, null, null), 2, null, null, null), (0, _inferno.createVNode)(1, "li", null, (0, _inferno.createVNode)(1, "a", null, "Inferno - Blazing fast, React-like UI library - Interview with Dominic Gannaway", 16, {
      "target": "_blank",
      "rel": "noopener noreferrer",
      "href": "http://survivejs.com/blog/inferno-interview/"
    }, null, null), 2, null, null, null), (0, _inferno.createVNode)(1, "li", null, (0, _inferno.createVNode)(1, "a", null, "JS web frameworks benchmark \u2013 Round 4", 16, {
      "target": "_blank",
      "rel": "noopener noreferrer",
      "href": "http://www.stefankrause.net/wp/?p=316"
    }, null, null), 2, null, null, null), (0, _inferno.createVNode)(1, "li", null, (0, _inferno.createVNode)(1, "a", null, "Introduction To Functional Front-Ends With Inferno", 16, {
      "target": "_blank",
      "rel": "noopener noreferrer",
      "href": "https://medium.com/javascript-inside/introduction-to-functional-front-ends-with-inferno-a188454c3e19#.dg7uhrnoc"
    }, null, null), 2, null, null, null)], 4, null, null, null)], 4, null, null, null), (0, _inferno.createVNode)(1, "h2", null, "Mobile", 16, null, null, null), (0, _inferno.createVNode)(1, "p", null, "Inferno proves that it is possible to be fast on mobile. Parse-time, load-time, rendering complex UIs and all the normal things you'd expect to just work. How Inferno does that is based on many factors, but ultimately Inferno's code is much better understood by modern JavaScript engines and can be highly optimised to perform far better than other libraries/frameworks.", 16, null, null, null)], 4, null, null, null), 2, null, null, null);
  };

  return About;
}(_inferno.Component);

exports.default = About;