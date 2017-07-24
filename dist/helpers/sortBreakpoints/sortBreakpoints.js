Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash.map');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.sortby');

var _lodash4 = _interopRequireDefault(_lodash3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var sortBreakpoints = function sortBreakpoints(breakpoints) {
  var mappedBreakpoints = (0, _lodash2['default'])(breakpoints, function (value, key) {
    return { key: key, value: value };
  });
  var sortedBreakpoints = (0, _lodash4['default'])(mappedBreakpoints, 'value');

  return (0, _lodash2['default'])(sortedBreakpoints, function (value) {
    return value.key;
  });
};

exports['default'] = sortBreakpoints;