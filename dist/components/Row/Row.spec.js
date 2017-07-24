var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

require('jest-styled-components');

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

describe('style rendering', function () {
  test('renders corrects', function () {
    var wrapper = (0, _enzyme.mount)(_react2['default'].createElement(_Row2['default'], null));
    expect(wrapper).toMatchStyledComponentsSnapshot();
  });

  test('generates default css', function () {
    var tree = _reactTestRenderer2['default'].create(_react2['default'].createElement(_Row2['default'], null)).toJSON();
    expect(tree).toHaveStyleRule('box-sizing', 'border-box');
    expect(tree).toHaveStyleRule('margin-left', 'calc(-0.5rem / 2)');
    expect(tree).toHaveStyleRule('margin-right', 'calc(-0.5rem / 2)');
    expect(tree).toHaveStyleRule('display', '-webkit-box');
    expect(tree).toHaveStyleRule('flex-direction', 'row');
    expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
    expect(tree).toHaveStyleRule('justify-content', 'flex-start');
    expect(tree).toHaveStyleRule('align-items', 'flex-start');
    expect(tree).toHaveStyleRule('align-content', 'flex-start');
  });

  test('generates custom css', function () {
    var tree = _reactTestRenderer2['default'].create(_react2['default'].createElement(_Row2['default'], {
      display: 'inline-flex',
      flexDirection: 'row-reverse',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'baseline',
      alignContent: 'stretch'
    })).toJSON();
    expect(tree).toHaveStyleRule('display', '-webkit-inline-box');
    expect(tree).toHaveStyleRule('flex-direction', 'row-reverse');
    expect(tree).toHaveStyleRule('flex-wrap', 'nowrap');
    expect(tree).toHaveStyleRule('justify-content', 'center');
    expect(tree).toHaveStyleRule('align-items', 'baseline');
    expect(tree).toHaveStyleRule('align-content', 'stretch');
  });
});

describe('Create element', function () {
  test('Should by default create a div element', function () {
    var wrapper = (0, _enzyme.shallow)(_react2['default'].createElement(_Row2['default'], null));
    expect(wrapper.dive().type()).toEqual('div');
  });

  test('Should create a custom element if provided', function () {
    var wrapper = (0, _enzyme.shallow)(_react2['default'].createElement(_Row2['default'], { elementType: 'span' }));
    expect(wrapper.dive().type()).toEqual('span');
    expect(wrapper.dive().type()).not.toEqual('div');
  });
});