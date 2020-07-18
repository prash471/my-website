"use strict";

exports.__esModule = true;
exports.default = _default;

var _inferno = require("inferno");

/**
 * This component is rendered on the server side
 */
function _default(_ref) {
  var hostname = _ref.hostname,
      config = _ref.config,
      children = _ref.children;
  var serverURL = "//" + hostname;
  var bundleURL = process.env.DEV ? serverURL + ":" + (config.http.port + 2) : '';
  return (0, _inferno.createVNode)(1, "html", null, [(0, _inferno.createVNode)(1, "head", null, [(0, _inferno.createVNode)(1, "meta", null, null, 1, {
    "charSet": "utf-8"
  }, null, null), (0, _inferno.createVNode)(1, "title", null, "Inferno", 16, null, null, null), (0, _inferno.createVNode)(1, "meta", null, null, 1, {
    "name": "viewport",
    "content": "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
  }, null, null), (0, _inferno.createVNode)(1, "meta", null, null, 1, {
    "httpEquiv": "Content-Type",
    "content": "text/html; charset=UTF-8"
  }, null, null), (0, _inferno.createVNode)(1, "meta", null, null, 1, {
    "name": "description",
    "content": "An extremely fast React-like javascript library for building modern user interfaces."
  }, null, null), (0, _inferno.createVNode)(1, "meta", null, null, 1, {
    "name": "keywords",
    "content": "javascript, framework, performance, fast, UI, programming, code, component, inferno, infernojs"
  }, null, null), (0, _inferno.createVNode)(1, "meta", null, null, 1, {
    "name": "theme-color",
    "content": "#ffffff"
  }, null, null), (0, _inferno.createVNode)(1, "meta", null, null, 1, {
    "property": "og:locale",
    "content": "en_US"
  }, null, null), (0, _inferno.createVNode)(1, "meta", null, null, 1, {
    "property": "og:type",
    "content": "website"
  }, null, null), (0, _inferno.createVNode)(1, "meta", null, null, 1, {
    "property": "og:title",
    "content": "Inferno"
  }, null, null), (0, _inferno.createVNode)(1, "meta", null, null, 1, {
    "property": "og:description",
    "content": "An extremely fast React-like javascript library for building modern user interfaces."
  }, null, null), (0, _inferno.createVNode)(1, "meta", null, null, 1, {
    "property": "og:url",
    "content": "https://www.infernojs.org/"
  }, null, null), (0, _inferno.createVNode)(1, "meta", null, null, 1, {
    "property": "og:site_name",
    "content": "Inferno.js"
  }, null, null), (0, _inferno.createVNode)(1, "meta", null, null, 1, {
    "property": "og:image",
    "content": "/assets/share.png"
  }, null, null), (0, _inferno.createVNode)(1, "meta", null, null, 1, {
    "name": "twitter:card",
    "content": "summary_large_image"
  }, null, null), (0, _inferno.createVNode)(1, "meta", null, null, 1, {
    "name": "twitter:description",
    "content": "An extremely fast React-like javascript library for building modern user interfaces."
  }, null, null), (0, _inferno.createVNode)(1, "meta", null, null, 1, {
    "name": "twitter:title",
    "content": "Inferno"
  }, null, null), (0, _inferno.createVNode)(1, "meta", null, null, 1, {
    "name": "twitter:site",
    "content": "@InfernoJS"
  }, null, null), (0, _inferno.createVNode)(1, "meta", null, null, 1, {
    "name": "twitter:image",
    "content": "/assets/share.png"
  }, null, null), (0, _inferno.createVNode)(1, "meta", null, null, 1, {
    "name": "twitter:creator",
    "content": "@InfernoJS"
  }, null, null), (0, _inferno.createVNode)(1, "link", null, null, 1, {
    "rel": "manifest",
    "href": "/assets/manifest.json"
  }, null, null), (0, _inferno.createVNode)(1, "link", null, null, 1, {
    "href": bundleURL + "/build/bundle.css",
    "rel": "stylesheet"
  }, null, null)], 4, null, null, null), (0, _inferno.createVNode)(1, "body", null, [(0, _inferno.createVNode)(1, "div", null, children, 2, {
    "id": "root"
  }, null, null), (0, _inferno.createVNode)(1, "script", null, null, 1, {
    "src": "https://cdn.polyfill.io/v2/polyfill.min.js?features=Promise"
  }, null, null), (0, _inferno.createVNode)(1, "script", null, null, 1, {
    "src": bundleURL + "/build/bundle.js",
    "async": "async"
  }, null, null)], 4, null, null, null)], 4, null, null, null);
}