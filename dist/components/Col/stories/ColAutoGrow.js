Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: 600px;\n'], ['\n  height: 600px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../../../../stories/components');

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var VerticalRow = _.Row.extend(_templateObject);

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
        'Horizontal layout with auto grow cols'
      ),
      _react2['default'].createElement(
        _.Row,
        null,
        _react2['default'].createElement(
          _.Col,
          null,
          _react2['default'].createElement(
            _components.Box,
            null,
            '0'
          )
        ),
        _react2['default'].createElement(
          _.Col,
          { xs: 'auto' },
          _react2['default'].createElement(
            _components.Box,
            null,
            'auto grow'
          )
        ),
        _react2['default'].createElement(
          _.Col,
          null,
          _react2['default'].createElement(
            _components.Box,
            null,
            '0'
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
        'Horizontal layout with auto grow cols and Responsive cols'
      ),
      _react2['default'].createElement(
        _.Row,
        null,
        _react2['default'].createElement(
          _.Col,
          { md: 4, lg: 2 },
          _react2['default'].createElement(
            _components.Box,
            null,
            'responsive'
          )
        ),
        _react2['default'].createElement(
          _.Col,
          { xs: 'auto' },
          _react2['default'].createElement(
            _components.Box,
            null,
            'auto grow'
          )
        ),
        _react2['default'].createElement(
          _.Col,
          { md: 2, lg: 4 },
          _react2['default'].createElement(
            _components.Box,
            null,
            'responsive'
          )
        )
      )
    ),
    _react2['default'].createElement(
      _components.Section,
      null,
      _react2['default'].createElement(
        _.Row,
        null,
        _react2['default'].createElement(
          _.Col,
          { md: 2 },
          _react2['default'].createElement(
            _components.Box,
            null,
            'responsive'
          )
        ),
        _react2['default'].createElement(
          _.Col,
          { flex: 1 },
          _react2['default'].createElement(
            _components.Box,
            null,
            'auto grow'
          )
        ),
        _react2['default'].createElement(
          _.Col,
          { xs: 'auto' },
          _react2['default'].createElement(
            _components.Box,
            null,
            'auto grow'
          )
        ),
        _react2['default'].createElement(
          _.Col,
          { md: 2 },
          _react2['default'].createElement(
            _components.Box,
            null,
            'responsive'
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
        'Vertical layout with auto grow cols into horizontal layout'
      ),
      _react2['default'].createElement(
        _.Row,
        null,
        _react2['default'].createElement(
          _.Col,
          { xs: 6 },
          _react2['default'].createElement(
            VerticalRow,
            { alignItems: 'stretch', flexDirection: 'column' },
            _react2['default'].createElement(
              _.Col,
              null,
              _react2['default'].createElement(
                _.Row,
                null,
                _react2['default'].createElement(
                  _.Col,
                  null,
                  _react2['default'].createElement(
                    _components.Box,
                    null,
                    '0'
                  )
                ),
                _react2['default'].createElement(
                  _.Col,
                  { flex: 1 },
                  _react2['default'].createElement(
                    _components.Box,
                    null,
                    'auto grow'
                  )
                ),
                _react2['default'].createElement(
                  _.Col,
                  null,
                  _react2['default'].createElement(
                    _components.Box,
                    null,
                    '0'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _.Col,
              { display: 'flex', flex: 1 },
              _react2['default'].createElement(
                _components.Box,
                { autoGrow: true },
                'vertical autoGrow'
              )
            ),
            _react2['default'].createElement(
              _.Col,
              null,
              _react2['default'].createElement(
                _components.Box,
                null,
                'responsive'
              )
            )
          )
        ),
        _react2['default'].createElement(
          _.Col,
          { xs: 6 },
          _react2['default'].createElement(
            VerticalRow,
            { alignItems: 'stretch', flexDirection: 'column' },
            _react2['default'].createElement(
              _.Col,
              null,
              _react2['default'].createElement(
                _components.Box,
                null,
                'responsive'
              )
            ),
            _react2['default'].createElement(
              _.Col,
              { display: 'flex', flex: 1 },
              _react2['default'].createElement(
                _components.Box,
                { autoGrow: true },
                'vertical autoGrow'
              )
            ),
            _react2['default'].createElement(
              _.Col,
              null,
              _react2['default'].createElement(
                _components.Box,
                null,
                'responsive'
              )
            )
          )
        )
      )
    )
  );
};