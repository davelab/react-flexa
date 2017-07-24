Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  // Initial component property\n  box-sizing: border-box;\n\n  ', ';\n'], ['\n  // Initial component property\n  box-sizing: border-box;\n\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    // Generate gutter\n    ', '\n\n    // Responsive Flexbox properties\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n  '], ['\n    // Generate gutter\n    ', '\n\n    // Responsive Flexbox properties\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n  ']);

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

var Row = (0, _styledComponents2['default'])(function (props) {
  return _react2['default'].createElement(props.elementType, (0, _helpers.filterProps)(props, Row.propTypes));
})(_templateObject, function (props) {
  return _theme.themeProvider.breakpointsKeys(props).map(function (breakpoint) {
    return (0, _helpers.mediaQuery)(props)[breakpoint](_templateObject2, _helpers.gutter.row(props, breakpoint), (0, _helpers.CSSProperty)(props, breakpoint, 'display'), (0, _helpers.CSSProperty)(props, breakpoint, 'flex-direction'), (0, _helpers.CSSProperty)(props, breakpoint, 'flex-wrap'), (0, _helpers.CSSProperty)(props, breakpoint, 'justify-content'), (0, _helpers.CSSProperty)(props, breakpoint, 'align-items'), (0, _helpers.CSSProperty)(props, breakpoint, 'align-content'));
  });
});

Row.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  elementType: 'div'
};

var displayOptions = ['flex', 'inline-flex'];
var flexDirectionOptions = ['row', 'row-reverse', 'column', 'column-reverse'];
var flexWrapOptions = ['nowrap', 'wrap', 'wrap-reverse'];
var justifyContentOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'];
var alignItemsOptions = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
var alignContentOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'];

Row.propTypes = {

  gutter: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].string, _propTypes2['default'].shape({
    xs: _propTypes2['default'].number,
    sm: _propTypes2['default'].number,
    md: _propTypes2['default'].number,
    lg: _propTypes2['default'].number
  })]),

  display: _propTypes2['default'].oneOfType([_propTypes2['default'].oneOf(displayOptions), _propTypes2['default'].shape({
    xs: _propTypes2['default'].oneOf(displayOptions),
    sm: _propTypes2['default'].oneOf(displayOptions),
    md: _propTypes2['default'].oneOf(displayOptions),
    lg: _propTypes2['default'].oneOf(displayOptions)
  })]),

  flexDirection: _propTypes2['default'].oneOfType([_propTypes2['default'].oneOf(flexDirectionOptions), _propTypes2['default'].shape({
    xs: _propTypes2['default'].oneOf(flexDirectionOptions),
    sm: _propTypes2['default'].oneOf(flexDirectionOptions),
    md: _propTypes2['default'].oneOf(flexDirectionOptions),
    lg: _propTypes2['default'].oneOf(flexDirectionOptions)
  })]),

  flexWrap: _propTypes2['default'].oneOfType([_propTypes2['default'].oneOf(flexWrapOptions), _propTypes2['default'].shape({
    xs: _propTypes2['default'].oneOf(flexWrapOptions),
    sm: _propTypes2['default'].oneOf(flexWrapOptions),
    md: _propTypes2['default'].oneOf(flexWrapOptions),
    lg: _propTypes2['default'].oneOf(flexWrapOptions)
  })]),

  justifyContent: _propTypes2['default'].oneOfType([_propTypes2['default'].oneOf(justifyContentOptions), _propTypes2['default'].shape({
    xs: _propTypes2['default'].oneOf(justifyContentOptions),
    sm: _propTypes2['default'].oneOf(justifyContentOptions),
    md: _propTypes2['default'].oneOf(justifyContentOptions),
    lg: _propTypes2['default'].oneOf(justifyContentOptions)
  })]),

  alignItems: _propTypes2['default'].oneOfType([_propTypes2['default'].oneOf(alignItemsOptions), _propTypes2['default'].shape({
    xs: _propTypes2['default'].oneOf(alignItemsOptions),
    sm: _propTypes2['default'].oneOf(alignItemsOptions),
    md: _propTypes2['default'].oneOf(alignItemsOptions),
    lg: _propTypes2['default'].oneOf(alignItemsOptions)
  })]),

  alignContent: _propTypes2['default'].oneOfType([_propTypes2['default'].oneOf(alignContentOptions), _propTypes2['default'].shape({
    xs: _propTypes2['default'].oneOf(alignContentOptions),
    sm: _propTypes2['default'].oneOf(alignContentOptions),
    md: _propTypes2['default'].oneOf(alignContentOptions),
    lg: _propTypes2['default'].oneOf(alignContentOptions)
  })]),

  elementType: _propTypes2['default'].string,

  children: _propTypes2['default'].node
};

Row.displayName = 'Row';

exports['default'] = Row;