"use strict";

exports.__esModule = true;
exports.Community = Community;

var _inferno = require("inferno");

var SPONSORS_COUNT = 3;

function Community() {
  var infernoOpenCollective = 'https://opencollective.com/inferno';
  var content = [(0, _inferno.createVNode)(1, "h3", null, "Community", 16, null, null, null), (0, _inferno.createVNode)(1, "p", null, [(0, _inferno.createTextVNode)("There is an "), (0, _inferno.createVNode)(1, "a", null, "Inferno Slack", 16, {
    "rel": "nofollow",
    "href": "https://infernojs.slack.com"
  }, null, null), (0, _inferno.createTextVNode)(" group where you can ask questions and find out the latest news about Inferno development. You can join via "), (0, _inferno.createVNode)(1, "a", null, "inferno-slack.herokuapp.com.", 16, {
    "rel": "nofollow",
    "href": "https://inferno-slack.herokuapp.com"
  }, null, null)], 4, null, null, null), (0, _inferno.createVNode)(1, "h4", null, "Contributors", 16, null, null, null), (0, _inferno.createVNode)(1, "a", null, (0, _inferno.createVNode)(1, "img", null, null, 1, {
    "src": infernoOpenCollective + "/contributors.svg?width=890"
  }, null, null), 2, {
    "href": "https://github.com/infernojs/inferno/graphs/contributors"
  }, null, null), (0, _inferno.createVNode)(1, "h4", null, "Backers", 16, null, null, null), (0, _inferno.createVNode)(1, "p", null, [(0, _inferno.createTextVNode)("Thank you to all our backers! "), (0, _inferno.createVNode)(1, "a", null, "[Become a backer]", 16, {
    "href": infernoOpenCollective
  }, null, null)], 4, null, null, null), (0, _inferno.createVNode)(1, "a", null, (0, _inferno.createVNode)(1, "img", null, null, 1, {
    "src": infernoOpenCollective + "/backers.svg?width=890"
  }, null, null), 2, {
    "href": infernoOpenCollective,
    "rel": "noopener noreferrer",
    "target": "_blank"
  }, null, null), (0, _inferno.createVNode)(1, "h4", null, "Sponsors", 16, null, null, null), (0, _inferno.createVNode)(1, "p", null, [(0, _inferno.createTextVNode)("Support this project by becoming a sponsor. Your logo will show up here with a link to your website. "), (0, _inferno.createVNode)(1, "a", null, "[Become a sponsor]", 16, {
    "href": infernoOpenCollective
  }, null, null)], 4, null, null, null)];

  for (var i = 0; i < SPONSORS_COUNT; i++) {
    content.push((0, _inferno.createVNode)(1, "a", null, (0, _inferno.createVNode)(1, "img", null, null, 1, {
      "alt": "",
      "src": infernoOpenCollective + "/sponsor/" + i + "/avatar.svg"
    }, null, null), 2, {
      "href": infernoOpenCollective + "/sponsor/" + i + "/website",
      "rel": "noopener noreferrer",
      "target": "_blank"
    }, null, null));
  }

  return (0, _inferno.createVNode)(1, "section", "col-mr-auto text-center", content, 4, null, null, null);
}