"use strict";

exports.__esModule = true;
exports.default = manifestMw;

var _url = _interopRequireDefault(require("url"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function manifestMw(manifestFile) {
  var manifest = require(_path.default.resolve('.', manifestFile));

  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
      var links;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!manifest[ctx.req.url]) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", next());

            case 2:
              links = [];
              Object.keys(manifest).forEach(function (key) {
                var u = _url.default.resolve(ctx.protocol + "://" + ctx.host, key);

                var link = "<" + u + ">; rel=preload; as=" + manifest[key].type;
                links.push(link);
              });
              ctx.set('Link', links.join(', ')); // Link: <https://localhost:3000/static/main-9a42a4188a.css>; rel=preload; as=style, <https://localhost:3000/app/common_2-3574809b05.js>; rel=preload; as=script, <https://localhost:3000/static/js/primus.js>; rel=preload; as=script, <https://localhost:3000/bower_components/polymer/polymer.html>; rel=preload; as=document

              ctx.state.h2 = manifest;
              _context.next = 8;
              return next();

            case 8:
              return _context.abrupt("return", _context.sent);

            case 9:
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
}