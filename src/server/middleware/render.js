"use strict";

exports.__esModule = true;
exports.default = void 0;

var _inferno = require("inferno");

require("regenerator-runtime/runtime");

var _infernoServer = require("inferno-server");

var _infernoRouter = require("inferno-router");

var _config = _interopRequireDefault(require("../config"));

var _Index = _interopRequireDefault(require("../../components/Index"));

var _routes = _interopRequireDefault(require("../../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Server-side render
var _default = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
    var context, content;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            context = {};
            content = (0, _infernoServer.renderToString)((0, _inferno.createComponentVNode)(2, _infernoRouter.StaticRouter, {
              "location": ctx.url,
              "context": context,
              children: (0, _inferno.createComponentVNode)(2, _Index.default, {
                "hostname": ctx.hostname,
                "config": _config.default,
                children: _routes.default
              }, null, null)
            }, null, null)); // This will contain the URL to redirect to if <Redirect> was used

            if (!context.url) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", ctx.redirect(context.url));

          case 4:
            ctx.type = 'text/html';
            ctx.body = '<!DOCTYPE html>\n' + content;
            _context.next = 8;
            return next();

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;