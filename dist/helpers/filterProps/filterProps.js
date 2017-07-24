Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash.omitby');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.has');

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = require('lodash.includes');

var _lodash6 = _interopRequireDefault(_lodash5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var safeProps = ['children'];

var filterProps = function filterProps(props, filterOut) {
  return (0, _lodash2['default'])(props, function (value, key) {
    return (0, _lodash4['default'])(filterOut, '' + String(key)) && !(0, _lodash6['default'])(safeProps, key);
  });
};

exports['default'] = filterProps;