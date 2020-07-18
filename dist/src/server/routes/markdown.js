"use strict";

exports.__esModule = true;
exports.default = void 0;

var _inferno = require("inferno");

var _commonmark = _interopRequireDefault(require("commonmark"));

var _infernoCreateElement = require("inferno-create-element");

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _prismjs = _interopRequireDefault(require("prismjs"));

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _xssFilters = _interopRequireDefault(require("xss-filters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * @todo this issue is just here because we don't know the exact path the output on the host 
 *       but we can fix this later, currently it lazily checks to find which path has the files
 * @todo we could also solve this with a build script........
 */
var publicDocsPath = "/public/docs";
var upOne = '../';
var upTwo = '../../';
var upThree = '../../../';
var upFour = '../../../../';
var devDocsPath = '../../docs';
var foundPath;
var pathsToTry = ["" + upOne, "" + upTwo, "" + upThree, "" + upFour, process.cwd()].map(function (basePath) {
  return _path.default.join(__dirname, basePath, publicDocsPath);
}).concat(process.env.NODE_ENV === 'development' ? [_path.default.resolve(__dirname, devDocsPath)] : []);

var _default = (0, _koaRouter.default)().get('/release', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
    var file;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            file = ctx.query.file;

            if (!file.includes('..')) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", ctx.body = (0, _inferno.createVNode)(1, "p", null, "Cannot access this path", 16, null, null, null));

          case 3:
            _context.next = 5;
            return parseMarkDown(file);

          case 5:
            ctx.body = _context.sent;

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()).get('/api/markdown', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx, next) {
    var file;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            file = ctx.query.file;

            if (!file.includes('..')) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", ctx.body = (0, _inferno.createVNode)(1, "p", null, "Cannot access this path", 16, null, null, null));

          case 3:
            _context2.next = 5;
            return parseMarkDown(file);

          case 5:
            ctx.body = _context2.sent;

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

exports.default = _default;

function findPathForFile(file) {
  var absPathToFile;

  if (!foundPath) {
    for (var index = 0; index < pathsToTry.length; index++) {
      var absPath = pathsToTry[index];

      var absPathToFileAttempt = _path.default.resolve(absPath, "./" + file + ".md");

      try {
        console.debug("[findPathForFile] checking " + absPathToFileAttempt);

        if (_fs.default.existsSync(absPathToFileAttempt)) {
          foundPath = absPath;
          console.debug("[findPathForFile] FOUND at " + index);
          break;
        }
      } catch (readExistsException) {
        console.error({
          readExistsException: readExistsException
        });
      }
    }
  }

  absPathToFile = _path.default.resolve(foundPath, "./" + file + ".md");
  return absPathToFile;
}
/**
 * @todo can use promisify...
 */


function parseMarkDown(_x5) {
  return _parseMarkDown.apply(this, arguments);
} // JSX support


function _parseMarkDown() {
  _parseMarkDown = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(file) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", new Promise(function (resolve) {
              var absPathToFile = findPathForFile(file);

              _fs.default.readFile(absPathToFile, 'utf-8', /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(err, data) {
                  var parser, renderer, ast, MarkdownResult;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          if (!err) {
                            _context3.next = 6;
                            break;
                          }

                          console.error(err);

                          if (!process.env.DEV) {
                            _context3.next = 5;
                            break;
                          }

                          console.warn("No document found at: \"/docs" + file + ".md\"");
                          return _context3.abrupt("return", resolve((0, _inferno.createVNode)(1, "p", null, [(0, _inferno.createTextVNode)("No document found at: "), (0, _inferno.createVNode)(1, "b", null, [(0, _inferno.createTextVNode)("/docs"), file], 0, null, null, null)], 4, null, null, null)));

                        case 5:
                          return _context3.abrupt("return", resolve((0, _inferno.createVNode)(1, "p", null, "Documentation is under development.", 16, null, null, null)));

                        case 6:
                          parser = new _commonmark.default.Parser();
                          renderer = new InfernoRenderer();
                          data = data.replace(/\[version\]/g, _inferno.version);
                          ast = parser.parse(data);
                          MarkdownResult = renderer.render(ast);
                          resolve(MarkdownResult);

                        case 12:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function (_x6, _x7) {
                  return _ref3.apply(this, arguments);
                };
              }());
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _parseMarkDown.apply(this, arguments);
}

(function addJSXSupport() {
  var javascript = _prismjs.default.util.clone(_prismjs.default.languages.javascript);

  _prismjs.default.languages.jsx = _prismjs.default.languages.extend('markup', javascript);
  _prismjs.default.languages.jsx.tag.pattern = /<\/?[\w.:-]+\s*(?:\s+[\w.:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+|(\{[\w\W]*?})))?\s*)*\/?>/i;
  _prismjs.default.languages.jsx.tag.inside['attr-value'].pattern = /=[^{](?:('|")[\w\W]*?(\1)|[^\s>]+)/i;

  var jsxExpression = _prismjs.default.util.clone(_prismjs.default.languages.jsx);

  delete jsxExpression.punctuation;
  jsxExpression = _prismjs.default.languages.insertBefore('jsx', 'operator', {
    'punctuation': /=(?={)|[{}[\];(),.:]/
  }, {
    jsx: jsxExpression
  });

  _prismjs.default.languages.insertBefore('inside', 'attr-value', {
    'script': {
      // Allow for one level of nesting
      pattern: /=(\{(?:\{[^}]*}|[^}])+})/i,
      inside: jsxExpression,
      'alias': 'language-javascript'
    }
  }, _prismjs.default.languages.jsx.tag);
})();
/**
 * Everything below is a port of react markdown renderer to inferno
 */


var typeAliases = {
  blockquote: 'block_quote',
  thematicbreak: 'thematic_break',
  htmlblock: 'html_block',
  htmlinline: 'html_inline',
  codeblock: 'code_block',
  hardbreak: 'linebreak'
};
var defaultRenderers = {
  block_quote: 'blockquote',
  // eslint-disable-line camelcase
  emph: 'em',
  linebreak: 'br',
  image: 'img',
  item: 'li',
  //link: 'a',
  paragraph: 'p',
  strong: 'strong',
  thematic_break: 'hr',
  // eslint-disable-line camelcase
  html_block: HtmlRenderer,
  // eslint-disable-line camelcase
  html_inline: HtmlRenderer,
  // eslint-disable-line camelcase
  list: function list(props) {
    var tag = props.type.toLowerCase() === 'bullet' ? 'ul' : 'ol';
    var attrs = getCoreProps(props);

    if (props.start !== null && props.start !== 1) {
      attrs.start = props.start.toString();
    }

    return (0, _infernoCreateElement.createElement)(tag, attrs, props.children);
  },
  code_block: function code_block(props) {
    // eslint-disable-line camelcase
    var html = _prismjs.default.highlight(props.literal, _prismjs.default.languages.jsx);

    var className = props.language && 'language-' + props.language;
    var code = (0, _infernoCreateElement.createElement)('code', {
      className: className,
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
    return (0, _infernoCreateElement.createElement)('pre', getCoreProps(props), code);
  },
  code: function code(props) {
    return (0, _infernoCreateElement.createElement)('code', getCoreProps(props), props.children);
  },
  heading: function heading(props) {
    return (0, _infernoCreateElement.createElement)('h' + props.level, getCoreProps(props), props.children);
  },
  link: function link(props) {
    return (0, _infernoCreateElement.createElement)('a', {
      href: props.href,
      title: props.title,
      target: props.href.startsWith('//') || props.href.startsWith('http') ? '_blank' : undefined,
      rel: 'noopener',
      literal: props.literal
    }, props.children);
  },
  text: null,
  softbreak: null
};
var coreTypes = Object.keys(defaultRenderers);

function getCoreProps(props) {
  return {
    'data-sourcepos': props['data-sourcepos']
  };
}

function normalizeTypeName(typeName) {
  var norm = typeName.toLowerCase();
  var type = typeAliases[norm] || norm;
  return typeof defaultRenderers[type] !== 'undefined' ? type : typeName;
}

function normalizeRenderers(renderers) {
  return Object.keys(renderers || {}).reduce(function (normalized, type) {
    var norm = normalizeTypeName(type);
    normalized[norm] = renderers[type];
    return normalized;
  }, {});
}

function HtmlRenderer(props) {
  var nodeProps = props.escapeHtml ? {} : {
    dangerouslySetInnerHTML: {
      __html: props.literal
    }
  };
  var children = props.escapeHtml ? [props.literal] : null;

  if (props.escapeHtml || !props.skipHtml) {
    return (0, _infernoCreateElement.createElement)(props.isBlock ? 'div' : 'span', nodeProps, children);
  }
}

function isGrandChildOfList(node) {
  var grandparent = node.parent.parent;
  return grandparent && grandparent.type.toLowerCase() === 'list' && grandparent.listTight;
}

function addChild(node, child) {
  var parent = node;

  do {
    parent = parent.parent;
  } while (!parent.react);

  if (typeof child.type === 'function') {
    //child.type = child.type(child.props)
    parent.react.children.push(child.type(child.props));
  } else {
    parent.react.children.push(child);
  }
}

function reduceChildren(children, child) {
  var lastIndex = children.length - 1;

  if (typeof child === 'string' && typeof children[lastIndex] === 'string') {
    children[lastIndex] += child;
  } else {
    children.push(child);
  }

  return children;
}

function flattenPosition(pos) {
  return [pos[0][0], ':', pos[0][1], '-', pos[1][0], ':', pos[1][1]].map(String).join('');
} // For some nodes, we want to include more props than for others


function getNodeProps(node, key, opts, renderer) {
  var props = {},
      undef; // `sourcePos` is true if the user wants source information (line/column info from markdown source)

  if (opts.sourcePos && node.sourcepos) {
    props['data-sourcepos'] = flattenPosition(node.sourcepos);
  }

  var type = normalizeTypeName(node.type);
  props._type = type;

  switch (type) {
    case 'html_inline':
    case 'html_block':
      props.isBlock = type === 'html_block';
      props.escapeHtml = opts.escapeHtml;
      props.skipHtml = opts.skipHtml;
      break;

    case 'code_block':
      var codeInfo = node.info ? node.info.split(/ +/) : [];

      if (codeInfo.length > 0 && codeInfo[0].length > 0) {
        props.language = codeInfo[0];
      }

      break;

    case 'code':
      props.children = node.literal;
      props.inline = true;
      break;

    case 'heading':
      props.level = node.level;
      break;

    case 'softbreak':
      props.softBreak = opts.softBreak;
      break;

    case 'link':
      props.href = opts.transformLinkUri ? opts.transformLinkUri(node.destination) : node.destination;
      props.title = node.title || undef;

      if (opts.linkTarget) {
        props.target = opts.linkTarget;
      }

      break;

    case 'image':
      props.src = opts.transformImageUri ? opts.transformImageUri(node.destination) : node.destination;
      props.title = node.title || undef; // Commonmark treats image description as children. We just want the text

      props.alt = node.react.children.join('');
      node.react.children = undef;
      break;

    case 'list':
      props.start = node.listStart;
      props.type = node.listType;
      props.tight = node.listTight;
      break;

    default:
  }

  if (typeof renderer !== 'string') {
    props.literal = node.literal; //props.children = Inferno.createVNode(1, 'span', null, node.literal)
  }

  var children = props.children || node.react && node.react.children;

  if (Array.isArray(children)) {
    props.children = children.reduce(reduceChildren, []) || null;
  }

  return props;
}

function getPosition(node) {
  if (!node) {
    return null;
  }

  if (node.sourcepos) {
    return flattenPosition(node.sourcepos);
  }

  return getPosition(node.parent);
}

function renderNodes(block) {
  var walker = block.walker(); // Softbreaks are usually treated as newlines, but in HTML we might want explicit linebreaks

  var softBreak = this.softBreak === 'br' ? (0, _infernoCreateElement.createElement)('br') : this.softBreak;
  var propOptions = {
    sourcePos: this.sourcePos,
    escapeHtml: this.escapeHtml,
    skipHtml: this.skipHtml,
    transformLinkUri: this.transformLinkUri,
    transformImageUri: this.transformImageUri,
    softBreak: softBreak,
    linkTarget: this.linkTarget
  };
  var e,
      node,
      entering,
      leaving,
      type,
      doc,
      key,
      nodeProps,
      prevPos,
      prevIndex = 0;

  while (e = walker.next()) {
    var pos = getPosition(e.node.sourcepos ? e.node : e.node.parent);

    if (prevPos === pos) {
      key = pos + prevIndex;
      prevIndex++;
    } else {
      key = pos;
      prevIndex = 0;
    }

    prevPos = pos;
    entering = e.entering;
    leaving = !entering;
    node = e.node;
    type = normalizeTypeName(node.type);
    nodeProps = null; // If we have not assigned a document yet, assume the current node is just that

    if (!doc) {
      doc = node;
      node.react = {
        children: []
      };
      continue;
    } else if (node === doc) {
      // When we're leaving...
      continue;
    } // In HTML, we don't want paragraphs inside of list items


    if (type === 'paragraph' && isGrandChildOfList(node)) {
      continue;
    } // If we're skipping HTML nodes, don't keep processing


    if (this.skipHtml && (type === 'html_block' || type === 'html_inline')) {
      continue;
    }

    var isDocument = node === doc;
    var disallowedByConfig = this.allowedTypes.indexOf(type) === -1;
    var disallowedByUser = false; // Do we have a user-defined function?

    var isCompleteParent = node.isContainer && leaving;
    var renderer = this.renderers[type];

    if (this.allowNode && (isCompleteParent || !node.isContainer)) {
      var nodeChildren = isCompleteParent ? node.react.children : [];
      nodeProps = getNodeProps(node, key, propOptions, renderer);
      disallowedByUser = !this.allowNode({
        type: pascalCase(type),
        renderer: this.renderers[type],
        props: nodeProps,
        children: nodeChildren
      });
    }

    if (!isDocument && (disallowedByUser || disallowedByConfig)) {
      if (!this.unwrapDisallowed && entering && node.isContainer) {
        walker.resumeAt(node, false);
      }

      continue;
    }

    var isSimpleNode = type === 'text' || type === 'softbreak';

    if (typeof renderer !== 'function' && !isSimpleNode && typeof renderer !== 'string') {
      throw new Error('Renderer for type `' + pascalCase(node.type) + '` not defined or is not renderable');
    }

    if (node.isContainer && entering) {
      node.react = {
        component: renderer,
        props: {},
        children: []
      };
    } else {
      var childProps = nodeProps || getNodeProps(node, key, propOptions, renderer);

      if (renderer) {
        childProps = typeof renderer === 'string' ? childProps : Object.assign(childProps, {
          nodeKey: childProps.key
        });
        addChild(node, (0, _infernoCreateElement.createElement)(renderer, childProps));
      } else if (type === 'text') {
        addChild(node, node.literal);
      } else if (type === 'softbreak') {
        addChild(node, softBreak);
      }
    }
  }

  return doc.react.children;
}

function defaultLinkUriFilter(uri) {
  var url = uri.replace(/file:\/\//g, 'x-file://'); // To prevent double-escaping of attributes, we need to decode

  return decodeURI(_xssFilters.default.uriInDoubleQuotedAttr(url));
}

function InfernoRenderer(options) {
  var opts = options || {};

  if (opts.allowedTypes && opts.disallowedTypes) {
    throw new Error('Only one of `allowedTypes` and `disallowedTypes` should be defined');
  }

  if (opts.allowedTypes && !Array.isArray(opts.allowedTypes)) {
    throw new Error('`allowedTypes` must be an array');
  }

  if (opts.disallowedTypes && !Array.isArray(opts.disallowedTypes)) {
    throw new Error('`disallowedTypes` must be an array');
  }

  if (opts.allowNode && typeof opts.allowNode !== 'function') {
    throw new Error('`allowNode` must be a function');
  }

  var linkFilter = opts.transformLinkUri;

  if (typeof linkFilter === 'undefined') {
    linkFilter = defaultLinkUriFilter;
  } else if (linkFilter && typeof linkFilter !== 'function') {
    throw new Error('`transformLinkUri` must either be a function, or `null` to disable');
  }

  var imageFilter = opts.transformImageUri;

  if (typeof imageFilter !== 'undefined' && typeof imageFilter !== 'function') {
    throw new Error('`transformImageUri` must be a function');
  }

  if (opts.renderers && !isPlainObject(opts.renderers)) {
    throw new Error('`renderers` must be a plain object of `Type`: `Renderer` pairs');
  }

  var allowedTypes = opts.allowedTypes && opts.allowedTypes.map(normalizeTypeName) || coreTypes;

  if (opts.disallowedTypes) {
    var disallowed = opts.disallowedTypes.map(normalizeTypeName);
    allowedTypes = allowedTypes.filter(function filterDisallowed(type) {
      return disallowed.indexOf(type) === -1;
    });
  }

  return {
    sourcePos: Boolean(opts.sourcePos),
    softBreak: opts.softBreak || '\n',
    renderers: Object.assign({}, defaultRenderers, normalizeRenderers(opts.renderers)),
    escapeHtml: Boolean(opts.escapeHtml),
    skipHtml: Boolean(opts.skipHtml),
    transformLinkUri: linkFilter,
    transformImageUri: imageFilter,
    allowNode: opts.allowNode,
    allowedTypes: allowedTypes,
    unwrapDisallowed: Boolean(opts.unwrapDisallowed),
    render: renderNodes,
    linkTarget: opts.linkTarget || false
  };
}

InfernoRenderer.uriTransformer = defaultLinkUriFilter;
InfernoRenderer.types = coreTypes.map(pascalCase);
InfernoRenderer.renderers = coreTypes.reduce(function (renderers, type) {
  renderers[pascalCase(type)] = defaultRenderers[type];
  return renderers;
}, {});

function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
}

function isObjectObject(o) {
  return isObject(o) === true && Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor, prot;
  if (isObjectObject(o) === false) return false; // If has modified constructor

  ctor = o.constructor;
  if (typeof ctor !== 'function') return false; // If has modified prototype

  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false; // If constructor does not have an Object-specific method

  if (Object.prototype.hasOwnProperty.call(prot, 'isPrototypeOf') === false) {
    return false;
  } // Most likely a plain Object


  return true;
}

function pascalCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string.');
  }

  str = str.replace(/([A-Z])/g, ' $1');

  if (str.length === 1) {
    return str.toUpperCase();
  }

  str = str.replace(/^[\W_]+|[\W_]+$/g, '').toLowerCase();
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str.replace(/[\W_]+(\w|$)/g, function (_, ch) {
    return ch.toUpperCase();
  });
}