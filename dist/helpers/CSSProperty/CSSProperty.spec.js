var _CSSProperty = require('./CSSProperty');

var _CSSProperty2 = _interopRequireDefault(_CSSProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

describe('getPropertyValue', function () {
  test('should generate css value from string', function () {
    var mockProps = { alignSelf: 'center' };
    expect((0, _CSSProperty.getPropertyValue)(mockProps, 'xs', 'align-self')).toEqual('center');
  });

  test('should not generate css value from string if not provided on props', function () {
    var mockProps = { alignSelf: 'center' };
    expect((0, _CSSProperty.getPropertyValue)(mockProps, 'xs', 'order')).toEqual(null);
  });

  test('should generate css value from string if breakpoint is == xs', function () {
    var mockProps = { alignSelf: 'center' };
    expect((0, _CSSProperty.getPropertyValue)(mockProps, 'xs', 'align-self')).toEqual('center');
  });

  test('should not generate css value from string if breakpoint is > xs', function () {
    var mockProps = { alignSelf: 'center' };
    expect((0, _CSSProperty.getPropertyValue)(mockProps, 'md', 'align-self')).toEqual(null);
  });

  test('should generate css value from object if it matches current breakpoint', function () {
    var mockProps = { alignSelf: { lg: 'center' } };
    expect((0, _CSSProperty.getPropertyValue)(mockProps, 'lg', 'align-self')).toEqual('center');
  });

  test('should not generate css value from object if does not match current breakpoint', function () {
    var mockProps = { alignSelf: { sm: 'center' } };
    expect((0, _CSSProperty.getPropertyValue)(mockProps, 'lg', 'align-self')).toEqual(null);
  });
});

describe('CSSProperty', function () {
  test('should generte css for valid property', function () {
    var mockProps = { alignSelf: 'center' };
    expect((0, _CSSProperty2['default'])(mockProps, 'xs', 'align-self').join('')).toContain('align-self: center');
  });

  test('should not generte css for invalid property', function () {
    var mockProps = { alignSelf: 'center' };
    expect((0, _CSSProperty2['default'])(mockProps, 'xs', 'order')).toEqual(null);
  });

  test('should generte css nested property', function () {
    var mockProps = { alignSelf: { sm: 'center' } };
    expect((0, _CSSProperty2['default'])(mockProps, 'sm', 'align-self').join('')).toContain('align-self: center');
  });
});