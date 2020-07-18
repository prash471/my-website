"use strict";

var _inferno = require("inferno");

require("isomorphic-fetch");

require("../core/polyfills");

require("../core/logger");

require("./assets/styles/index.scss");

var _infernoHydrate = require("inferno-hydrate");

var _history = require("history");

var _App = require("./components/App");

// This is the entry point for our client-side logic
// The server-side has a similar configuration in `src/server/middleware/render.js`
// We render our react app into this element
var root = document.getElementById('root');
var history = (0, _history.createBrowserHistory)();
history.listen(function (location) {
  window.ga('send', 'pageview', location.pathname);
});
/**
 * Render our component according to our routes
 */

(0, _infernoHydrate.hydrate)((0, _inferno.createComponentVNode)(2, _App.App, {
  "history": history
}, null, null), root); // cache all assets if browser supports serviceworker
// if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
//   const sw = navigator.serviceWorker;
//
//   sw.register('/offline.js').then(function() {
//     console.debug('ServiceWorker: registered');
//   }).catch(function(err) {
//     console.error('ServiceWorker:', err);
//   });
//
//   /*sw.register('/sw.js').then(function() {
//       console.debug('CDN Worker: registered')
//   }).catch(function(err) {
//       console.error('ServiceWorker:', err)
//   })*/
//
//   sw.ready.then(function() {
//     console.debug('Worker: ready');
//   });
// }

if (module.hot) {
  module.hot.accept();
}