Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.breakpointsKeys = exports.breakpoints = exports.theme = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash.has');

var _lodash2 = _interopRequireDefault(_lodash);

var _config = require('../config');

var _defaultTheme = require('./defaultTheme');

var _defaultTheme2 = _interopRequireDefault(_defaultTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var theme = exports.theme = function theme(props) {
  var customTheme = (0, _lodash2['default'])(props, 'theme') && (0, _lodash2['default'])(props, 'theme[' + String(_config.FLEXA_THEME) + ']') ? props.theme[_config.FLEXA_THEME] : {};
  return _extends({}, _defaultTheme2['default'], customTheme, {
    gutter: _extends({}, _defaultTheme2['default'].gutter, customTheme.gutter),
    breakpoints: _extends({}, _defaultTheme2['default'].breakpoints, customTheme.breakpoints)
  });
};

var breakpoints = exports.breakpoints = function breakpoints(props) {
  return theme(props).breakpoints;
};
var breakpointsKeys = exports.breakpointsKeys = function breakpointsKeys(props) {
  return Object.keys(theme(props).breakpoints);
};