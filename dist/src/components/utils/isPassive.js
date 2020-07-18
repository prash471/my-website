"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Because older browsers (as well as some not-too-old browsers)
 * still assume the third parameter is a Boolean, you need to build
 * your code to handle this scenario intelligently.
 */
var supportsPassive = false;

try {
  /* eslint-disable no-empty */
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      return supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}

var _default = supportsPassive ? {
  passive: true
} : false;

exports.default = _default;