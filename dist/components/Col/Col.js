Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alignSelfOptions = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  // Initial component properties\n  box-sizing: border-box;\n\n  ', ';\n'], ['\n  // Initial component properties\n  box-sizing: border-box;\n\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    // Generated Display\n    ', '\n\n    // Generate gutter\n    ', '\n\n    // Generate flex rule before width, this avoid override\n    ', '\n\n    // Generate column width\n    ', '\n\n    // Responsive Flexbox properties\n    ', '\n    ', '\n  '], ['\n    // Generated Display\n    ', '\n\n    // Generate gutter\n    ', '\n\n    // Generate flex rule before width, this avoid override\n    ', '\n\n    // Generate column width\n    ', '\n\n    // Responsive Flexbox properties\n    ', '\n    ', '\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../../theme');

var _helpers = require('../../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Col = (0, _styledComponents2['default'])(function (props) {
  return _react2['default'].createElement(props.elementType, (0, _helpers.filterProps)(props, Col.propTypes));
})(_templateObject, function (props) {
  return _theme.themeProvider.breakpointsKeys(props).map(function (breakpoint) {
    return (0, _helpers.mediaQuery)(props)[breakpoint](_templateObject2, (0, _helpers.CSSProperty)(props, breakpoint, 'display'), _helpers.gutter.col(props, breakpoint), (0, _helpers.CSSProperty)(props, breakpoint, 'flex'), (0, _helpers.columnWidth)(props, breakpoint), (0, _helpers.CSSProperty)(props, breakpoint, 'order'), (0, _helpers.CSSProperty)(props, breakpoint, 'align-self'));
  });
});

Col.defaultProps = {
  order: 0,
  alignSelf: 'auto',
  elementType: 'div',
  display: 'block',
  flex: '0 0 auto'
};

var alignSelfOptions = exports.alignSelfOptions = ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'];

Col.propTypes = {
  xs: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].oneOf(['hidden, auto'])]),
  sm: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].oneOf(['hidden, auto'])]),
  md: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].oneOf(['hidden, auto'])]),
  lg: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].oneOf(['hidden, auto'])]),

  gutter: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].string, _propTypes2['default'].shape({
    xs: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].string]),
    sm: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].string]),
    md: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].string]),
    lg: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].string])
  })]),

  order: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].shape({
    xs: _propTypes2['default'].number,
    sm: _propTypes2['default'].number,
    md: _propTypes2['default'].number,
    lg: _propTypes2['default'].number
  })]),

  alignSelf: _propTypes2['default'].oneOfType([_propTypes2['default'].oneOf(alignSelfOptions), _propTypes2['default'].shape({
    xs: _propTypes2['default'].oneOf(alignSelfOptions),
    sm: _propTypes2['default'].oneOf(alignSelfOptions),
    md: _propTypes2['default'].oneOf(alignSelfOptions),
    lg: _propTypes2['default'].oneOf(alignSelfOptions)
  })]),

  autoGrow: _propTypes2['default'].bool,

  elementType: _propTypes2['default'].string,

  flex: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].string]),

  display: _propTypes2['default'].string,

  children: _propTypes2['default'].node
};

Col.displayName = 'Col';

exports['default'] = Col;