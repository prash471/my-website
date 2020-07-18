'use strict';

exports.__esModule = true;
exports.default = void 0;

var config = require('../config');

var path = require('path');

var url = require('url');

var fs = require('mz/fs');

var mime = require('mime');

var zlib = require('zlib');

var logger = require('debug');

function serverpushConstructor(opts) {
  opts = opts ? opts : {};
  opts.manifest = opts.manifest || 'push_manifest.json';
  opts.gaeproxy = opts.gaeproxy ? true : false;
  opts.port = opts.port ? opts.port : false;
  opts.singleheader = opts.singleheader ? true : false;
  return function serverpush(ctx, next) {
    return next().then(function () {
      if (!ctx.response.is('html')) {
        console.log(ctx.url, ' is not HTML. Skipping...');
        return;
      } else {
        console.log(ctx.url, ' is HTML');
      }

      if ('nopush' in ctx.query) return;
      return new Promise(function (res, req) {
        var manifestfile = path.resolve(opts.manifest);
        fs.stat(manifestfile).then(function (stat) {
          return stat.isFile();
        }).then(function () {
          return fs.readFile(manifestfile);
        }).then(function (file) {
          var links = [];
          var contents = [];
          var data = JSON.parse(file.toString());

          for (var key in data) {
            var u = url.resolve(ctx.protocol + "://" + ctx.host, key);

            if (process.env.DEV) {
              u = url.resolve(ctx.protocol + "://" + ctx.host + ":" + (config.http.port + 2), key);
            }

            contents.push(u);
            links.push("<" + u + ">; rel=preload; as=" + data[key].type);
          }

          if (opts.gaeproxy && contents.length > 10) {
            console.warn('Google App Engine only supports a maximum of 10 resources to be sent via server push at this time.');
          }

          if (contents.length > 0) {
            if (opts.gaeproxy) {
              ctx.set('X-Associated-Content', contents.join(', '));
            }

            if (opts.singleheader) {
              ctx.set('Link', links.join(', '));
            } else {
              ctx.set('Link', links);
            }
          } else {
            return;
          }

          ctx.state.h2push = {
            links: links,
            contents: contents,
            data: data
          };
        }).then(function () {
          logger('inferno:push')(' LINK SET ');
          ctx.state.h2push.contents.forEach(function (location) {
            var pathname = url.parse(location).pathname;
            console.log('--', path.join(__dirname, '../../..', pathname));
            var content = fs.createReadStream(path.join(__dirname, '../../..', pathname));
            var p = ctx.res;
            content.pipe(zlib.createGzip()).pipe(p); //res();

            ctx.res.on('error', function (err) {
              console.error(err);
            });
          });
        }).catch(function (err) {
          logger('inferno:push')(err);
          res();
        });
      });
    });
  };
}

var _default = serverpushConstructor;
exports.default = _default;