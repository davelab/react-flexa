Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPropertyValue = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    ', ': ', ';\n  '], ['\n    ', ': ', ';\n  ']);

var _lodash = require('lodash.has');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.camelcase');

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = require('lodash.isobject');

var _lodash6 = _interopRequireDefault(_lodash5);

var _lodash7 = require('lodash.isnull');

var _lodash8 = _interopRequireDefault(_lodash7);

var _styledComponents = require('styled-components');

var _theme = require('../../theme');

var _helpers = require('../../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getPropertyValue = exports.getPropertyValue = function getPropertyValue(props, breakpoint, property) {
  var propertySlug = (0, _lodash4['default'])(property);
  var ThemeBreakpoints = _theme.themeProvider.theme(props).breakpoints;

  if ((0, _lodash2['default'])(props, '' + String(propertySlug))) {
    if ((0, _lodash6['default'])(props[propertySlug])) {
      return props[propertySlug][breakpoint] || null;
    }

    if (breakpoint === (0, _helpers.sortBreakpoints)(ThemeBreakpoints)[0]) {
      return props[propertySlug] || null;
    }
  }

  return null;
};

var CSSProperty = function CSSProperty(props, breakpoint, property) {
  var value = getPropertyValue(props, breakpoint, property);

  return (0, _lodash8['default'])(value) ? null : (0, _styledComponents.css)(_templateObject, property, value);
};

exports['default'] = CSSProperty;