Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addonKnobs = require('@storybook/addon-knobs');

var _components = require('../../../../stories/components');

var _ = require('../../');

var _Col = require('../Col');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var rowDocStyles = {
  height: '100vh'
}; /* eslint-disable import/no-extraneous-dependencies */

exports['default'] = function () {
  return _react2['default'].createElement(
    _.Row,
    { style: rowDocStyles },
    _react2['default'].createElement(
      _.Col,
      { xs: 12, sm: 4, md: 6, lg: 3 },
      _react2['default'].createElement(
        _components.Box,
        null,
        'col'
      )
    ),
    _react2['default'].createElement(
      _.Col,
      {
        xs: (0, _addonKnobs.number)('xs', 12),
        sm: (0, _addonKnobs.number)('sm', 4),
        md: (0, _addonKnobs.number)('md', 6),
        lg: (0, _addonKnobs.number)('lg', 3),
        gutter: (0, _addonKnobs.object)('gutter (rem)', { xs: 0.5, sm: 0.5, md: 1, lg: 1 }),
        order: (0, _addonKnobs.number)('order', 0),
        alignSelf: (0, _addonKnobs.select)('align-self', _Col.alignSelfOptions, 'auto')
      },
      _react2['default'].createElement(
        _components.Box,
        { bgColor: '#ff9800' },
        'customize me!'
      )
    ),
    _react2['default'].createElement(
      _.Col,
      { xs: 12, sm: 4, md: 6, lg: 3 },
      _react2['default'].createElement(
        _components.Box,
        null,
        'col'
      )
    ),
    _react2['default'].createElement(
      _.Col,
      { xs: 12, sm: 4, md: 6, lg: 3 },
      _react2['default'].createElement(
        _components.Box,
        null,
        'col'
      )
    )
  );
};