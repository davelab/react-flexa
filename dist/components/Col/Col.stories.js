var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _withReadme = require('storybook-readme/with-readme');

var _withReadme2 = _interopRequireDefault(_withReadme);

var _stories = require('./stories');

var _README = require('./README.md');

var _README2 = _interopRequireDefault(_README);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* eslint-disable import/no-extraneous-dependencies */

(0, _react3.storiesOf)('Col', module).addDecorator(_addonKnobs.withKnobs).addDecorator((0, _withReadme2['default'])(_README2['default'])).add('Default', function () {
  return _react2['default'].createElement(_stories.Col, null);
}).add('Fluid example', function () {
  return _react2['default'].createElement(_stories.Fluid, null);
}).add('Responsive example', function () {
  return _react2['default'].createElement(_stories.Responsive, null);
}).add('ColAutoGrow example', function () {
  return _react2['default'].createElement(_stories.ColAutoGrow, null);
});