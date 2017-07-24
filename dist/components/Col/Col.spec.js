var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

require('jest-styled-components');

var _Col = require('./Col');

var _Col2 = _interopRequireDefault(_Col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

describe('style rendering', function () {
  test('renders corrects', function () {
    var wrapper = (0, _enzyme.mount)(_react2['default'].createElement(_Col2['default'], null));
    expect(wrapper).toMatchStyledComponentsSnapshot();
  });

  test('generates default css', function () {
    var tree = _reactTestRenderer2['default'].create(_react2['default'].createElement(_Col2['default'], null)).toJSON();
    expect(tree).toHaveStyleRule('box-sizing', 'border-box');
    expect(tree).toHaveStyleRule('display', 'block');
    expect(tree).toHaveStyleRule('flex', '0 0 auto');
    expect(tree).toHaveStyleRule('align-self', 'auto');
    expect(tree).toHaveStyleRule('padding-left', 'calc(0.5rem / 2)');
    expect(tree).toHaveStyleRule('padding-right', 'calc(0.5rem / 2)');
  });

  test('generates custom css', function () {
    var tree = _reactTestRenderer2['default'].create(_react2['default'].createElement(_Col2['default'], { order: 2, alignSelf: 'flex-start' })).toJSON();
    expect(tree).toHaveStyleRule('order', '2');
    expect(tree).toHaveStyleRule('align-self', 'flex-start');
  });
});

describe('Create element', function () {
  test('Should by default create a div element', function () {
    var wrapper = (0, _enzyme.shallow)(_react2['default'].createElement(_Col2['default'], null));
    expect(wrapper.dive().type()).toEqual('div');
  });

  test('Should create a custom element if provided', function () {
    var wrapper = (0, _enzyme.shallow)(_react2['default'].createElement(_Col2['default'], { elementType: 'span' }));
    expect(wrapper.dive().type()).toEqual('span');
    expect(wrapper.dive().type()).not.toEqual('div');
  });

  test('generates custom with custom display css property', function () {
    var tree = _reactTestRenderer2['default'].create(_react2['default'].createElement(_Col2['default'], { display: 'flex' })).toJSON();
    expect(tree).toHaveStyleRule('display', '-webkit-box');
  });
});