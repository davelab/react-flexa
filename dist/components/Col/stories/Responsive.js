Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../../../../stories/components');

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function () {
  return _react2['default'].createElement(
    'div',
    null,
    _react2['default'].createElement(
      _components.Section,
      null,
      _react2['default'].createElement(
        _components.Title,
        null,
        'Responsive columns'
      ),
      _react2['default'].createElement(
        _.Row,
        null,
        _react2['default'].createElement(
          _.Col,
          { xs: 12, md: 6, lg: 4 },
          _react2['default'].createElement(
            _components.Box,
            null,
            'col 1'
          )
        ),
        _react2['default'].createElement(
          _.Col,
          { xs: 12, sm: 6, lg: 4 },
          _react2['default'].createElement(
            _components.Box,
            { bgColor: '#9c27b0' },
            'col 2'
          )
        ),
        _react2['default'].createElement(
          _.Col,
          { xs: 12, sm: 6, md: 12, lg: 4 },
          _react2['default'].createElement(
            _components.Box,
            { bgColor: '#ff9800' },
            'col 3'
          )
        )
      )
    ),
    _react2['default'].createElement(
      _components.Section,
      null,
      _react2['default'].createElement(
        _components.Title,
        null,
        'Responsive gutter'
      ),
      _react2['default'].createElement(
        _.Row,
        { gutter: { xs: 0, sm: 2, md: 4, lg: 8 } },
        _react2['default'].createElement(
          _.Col,
          { xs: 4, gutter: { xs: 0, sm: 2, md: 4, lg: 8 } },
          _react2['default'].createElement(
            _components.Box,
            null,
            'col 1'
          )
        ),
        _react2['default'].createElement(
          _.Col,
          { xs: 4, gutter: { xs: 0, sm: 2, md: 4, lg: 8 } },
          _react2['default'].createElement(
            _components.Box,
            { bgColor: '#9c27b0' },
            'col 2'
          )
        ),
        _react2['default'].createElement(
          _.Col,
          { xs: 4, gutter: { xs: 0, sm: 2, md: 4, lg: 8 } },
          _react2['default'].createElement(
            _components.Box,
            { bgColor: '#ff9800' },
            'col 3'
          )
        )
      )
    ),
    _react2['default'].createElement(
      _components.Section,
      null,
      _react2['default'].createElement(
        _components.Title,
        null,
        'Responsive order'
      ),
      _react2['default'].createElement(
        _.Row,
        null,
        _react2['default'].createElement(
          _.Col,
          { xs: 3, order: { xs: 4, sm: 3, md: 2, lg: 1 } },
          _react2['default'].createElement(
            _components.Box,
            null,
            'col 1'
          )
        ),
        _react2['default'].createElement(
          _.Col,
          { xs: 3, order: 1 },
          _react2['default'].createElement(
            _components.Box,
            { bgColor: '#9c27b0' },
            'col 2'
          )
        ),
        _react2['default'].createElement(
          _.Col,
          { xs: 3, order: 2 },
          _react2['default'].createElement(
            _components.Box,
            { bgColor: '#ff9800' },
            'col 3'
          )
        ),
        _react2['default'].createElement(
          _.Col,
          { xs: 3, order: 3 },
          _react2['default'].createElement(
            _components.Box,
            { bgColor: '#388e3c' },
            'col 4'
          )
        )
      )
    ),
    _react2['default'].createElement(
      _components.Section,
      null,
      _react2['default'].createElement(
        _components.Title,
        null,
        'Responsive alignSelf'
      ),
      _react2['default'].createElement(
        _.Row,
        null,
        _react2['default'].createElement(
          _.Col,
          { xs: 4 },
          _react2['default'].createElement(
            _components.Box,
            { height: '5rem' },
            'col 1'
          )
        ),
        _react2['default'].createElement(
          _.Col,
          {
            xs: 4,
            alignSelf: { xs: 'flex-end', md: 'center', lg: 'flex-start' }
          },
          _react2['default'].createElement(
            _components.Box,
            { bgColor: '#9c27b0' },
            'col 2'
          )
        ),
        _react2['default'].createElement(
          _.Col,
          { xs: 4 },
          _react2['default'].createElement(
            _components.Box,
            { bgColor: '#ff9800', height: '5rem' },
            'col 3'
          )
        )
      )
    )
  );
};