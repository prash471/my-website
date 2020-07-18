"use strict";

exports.__esModule = true;
exports.default = void 0;

var _debug = _interopRequireDefault(require("debug"));

var _koa = _interopRequireDefault(require("koa"));

var _koaBetterBody = _interopRequireDefault(require("koa-better-body"));

var _koaCompress = _interopRequireDefault(require("koa-compress"));

var _koaFavicon = _interopRequireDefault(require("koa-favicon"));

var _koaMount = _interopRequireDefault(require("koa-mount"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _koaConvert = _interopRequireDefault(require("koa-convert"));

var _config = _interopRequireDefault(require("./config"));

var _catcher = _interopRequireDefault(require("./middleware/catcher"));

var _render = _interopRequireDefault(require("./middleware/render"));

var _markdown = _interopRequireDefault(require("./routes/markdown"));

var _hooks = _interopRequireDefault(require("./routes/hooks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa.default(); // Middleware
// app.use(serverpush({
//   manifest: path.join(__dirname, '../../push_manifest.json'),
//   singleheader: false
// }));

app.use((0, _koaFavicon.default)(_config.default.http.favicon));
app.use((0, _koaCompress.default)());
app.use((0, _koaConvert.default)((0, _koaBetterBody.default)({
  formLimit: '200kb',
  jsonLimit: '200kb',
  bufferLimit: '4mb'
})));
app.use(_catcher.default);
app.use(_markdown.default.routes());
app.use(_hooks.default.routes()); // Serve static files

for (var _i = 0, _Object$entries = Object.entries(_config.default.static); _i < _Object$entries.length; _i++) {
  var _Object$entries$_i = _Object$entries[_i],
      k = _Object$entries$_i[0],
      v = _Object$entries$_i[1];
  (0, _debug.default)('inferno:static')(v);
  app.use((0, _koaMount.default)(k, (0, _koaStatic.default)(v, {
    index: false
  })));
} // Serve service worker
// app.use(serve(require('path').join(__dirname, '../assets/service')))


app.use((0, _koaStatic.default)(require('path').join(__dirname, '../../public/assets/service'))); // Render inferno app

app.use(_render.default); // if (process.env.DEV) {
//   // Without HTTP2 support
//   app.listen(config.http.port, function() {
//     logger('inferno:start')('Listening on port ' + config.http.port);
//   });
// } else {
//   // With HTTP2 support
//   const server = http2.createServer({
//       key: fs.readFileSync(config.server.certificate_key),
//       cert: fs.readFileSync(config.server.certificate)
//   }, app.callback())
//   server.listen(config.http.port, (error) => {
//       if (error) {
//           logger('inferno:error')(error)
//           process.exit(1)
//       } else {
//           logger('inferno:start')('Running with HTTP/2 enabled')
//           logger('inferno:start')('Listening on port ' + config.http.port)
//       }
//   })
// }

/**
 * only listen in dev env 
 * could also check with process.env.DEV
 */

if (process.env.IS_NOW === undefined) {
  (0, _debug.default)('inferno:server')('NOT on now');
  app.listen(_config.default.http.port, function () {
    (0, _debug.default)('inferno:start')('Listening on port ' + _config.default.http.port);
  });
} else {
  (0, _debug.default)('inferno:server')('IS on now');
}

var _default = app.callback();

exports.default = _default;