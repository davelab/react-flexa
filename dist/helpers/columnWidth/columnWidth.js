Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAuto = exports.isHidden = exports.percentage = undefined;

var _templateObject = _taggedTemplateLiteral(['\n      display: none;\n    '], ['\n      display: none;\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n      flex: 1;\n    '], ['\n      flex: 1;\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    flex-basis: ', '%;\n    max-width: ', '%;\n    display: block;\n  '], ['\n    flex-basis: ', '%;\n    max-width: ', '%;\n    display: block;\n  ']);

var _styledComponents = require('styled-components');

var _lodash = require('lodash.has');

var _lodash2 = _interopRequireDefault(_lodash);

var _theme = require('../../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var theme = _theme.themeProvider.theme;
var percentage = exports.percentage = function percentage(props, breakpoint) {
  return Math.abs(props[breakpoint]) / theme(props).columns * 100;
};

var isHidden = exports.isHidden = function isHidden(props, breakpoint) {
  return props[breakpoint] === 0 || props[breakpoint] === 'hidden';
};

var isAuto = exports.isAuto = function isAuto(props, breakpoint) {
  return props[breakpoint] === 'auto';
};

var columnWidth = function columnWidth(props, breakpoint) {
  if (isHidden(props, breakpoint)) {
    return (0, _styledComponents.css)(_templateObject);
  }

  if (isAuto(props, breakpoint)) {
    return (0, _styledComponents.css)(_templateObject2);
  }

  var width = percentage(props, breakpoint);

  return (0, _lodash2['default'])(props, '' + String(breakpoint)) ? (0, _styledComponents.css)(_templateObject3, width, width) : null;
};
exports['default'] = columnWidth;