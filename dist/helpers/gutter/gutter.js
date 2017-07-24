Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.col = exports.row = exports.gutterWidth = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    margin-left: calc(-', ' / 2);\n    margin-right: calc(-', ' / 2);\n  '], ['\n    margin-left: calc(-', ' / 2);\n    margin-right: calc(-', ' / 2);\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    padding-left: calc(', ' / 2);\n    padding-right: calc(', ' / 2);\n  '], ['\n    padding-left: calc(', ' / 2);\n    padding-right: calc(', ' / 2);\n  ']);

var _lodash = require('lodash.has');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.isobject');

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = require('lodash.isnumber');

var _lodash6 = _interopRequireDefault(_lodash5);

var _lodash7 = require('lodash.isundefined');

var _lodash8 = _interopRequireDefault(_lodash7);

var _styledComponents = require('styled-components');

var _theme = require('../../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var theme = _theme.themeProvider.theme;
var gutterWidth = exports.gutterWidth = function gutterWidth(props, breakpoint) {
  if ((0, _lodash4['default'])(props.gutter) && (0, _lodash2['default'])(props, 'gutter.' + String(breakpoint))) {
    return props.gutter[breakpoint];
  }

  if (!(0, _lodash4['default'])(props.gutter) && (0, _lodash2['default'])(props, 'gutter')) {
    return props.gutter;
  }

  return (0, _lodash4['default'])(theme(props).gutter) ? theme(props).gutter[breakpoint] : theme(props).gutter;
};

var row = exports.row = function row(props, breakpoint) {
  var gutterUnit = gutterWidth(props, breakpoint);
  var gutter = (0, _lodash6['default'])(gutterUnit) ? String(gutterUnit) + 'rem' : gutterUnit;

  return (0, _lodash8['default'])(gutterUnit) ? null : (0, _styledComponents.css)(_templateObject, gutter, gutter);
};

var col = exports.col = function col(props, breakpoint) {
  var gutterUnit = gutterWidth(props, breakpoint);
  var gutter = (0, _lodash6['default'])(gutterUnit) ? String(gutterUnit) + 'rem' : gutterUnit;

  return (0, _lodash8['default'])(gutterUnit) ? null : (0, _styledComponents.css)(_templateObject2, gutter, gutter);
};