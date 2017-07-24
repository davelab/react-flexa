var _columnWidth = require('./columnWidth');

var _columnWidth2 = _interopRequireDefault(_columnWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var mockProps = { xs: -1, sm: 2, md: 0, lg: 6 };

describe('percentage', function () {
  test('should generate a percentage based on collumn size', function () {
    expect((0, _columnWidth.percentage)(mockProps, 'lg')).toEqual(50);
    expect((0, _columnWidth.percentage)(mockProps, 'md')).toEqual(0);
    expect((0, _columnWidth.percentage)(mockProps, 'sm')).toEqual(16.666666666666664);
  });

  test('should normalise negative numbers', function () {
    expect((0, _columnWidth.percentage)(mockProps, 'xs')).toEqual(8.333333333333332);
  });
});

describe('isHidden', function () {
  test('should return hidden if a given breakpoint is explicitly "0" or "hidden"', function () {
    expect((0, _columnWidth.isHidden)({ xs: 0 }, 'xs')).toEqual(true);
    expect((0, _columnWidth.isHidden)({ xs: 'hidden' }, 'xs')).toEqual(true);
    expect((0, _columnWidth.isHidden)({ xs: undefined }, 'xs')).toEqual(false);
    expect((0, _columnWidth.isHidden)({ xs: 12 }, 'xs')).toEqual(false);
  });
});

describe('isAuto', function () {
  test('should return flex: 1 if a given property is explicitly "auto" if a given breakpoint is explicitly set to auto', function () {
    var autoGrowMockProps = { xs: -1, sm: 2, md: 'auto', lg: 6 };
    var width = (0, _columnWidth2['default'])(autoGrowMockProps, 'md').join('');
    expect((0, _columnWidth.isAuto)({ xs: 'auto' }, 'xs')).toEqual(true);
    expect(width).toContain('flex: 1');
  });
});

describe('columnWidth', function () {
  test('should generate column width css', function () {
    var width = (0, _columnWidth2['default'])(mockProps, 'sm').join('');
    expect(width).toContain('flex-basis: 16.666666666666664%;');
    expect(width).toContain('max-width: 16.666666666666664%;');
  });

  test('should return nothing if breakpoint does not exist', function () {
    var width = (0, _columnWidth2['default'])(mockProps, 'xl');
    expect(width).toEqual(null);
  });

  test('should return "display:none" if breakpoint is explicity set to 0', function () {
    var width = (0, _columnWidth2['default'])(mockProps, 'md').join('');
    expect(width).toContain('display: none');
  });

  test('should return "display:none" if breakpoint is explicity set to "hidden"', function () {
    var hiddenMockProps = { xs: -1, sm: 2, md: 'hidden', lg: 6 };
    var width = (0, _columnWidth2['default'])(hiddenMockProps, 'md').join('');
    expect(width).toContain('display: none');
  });
});