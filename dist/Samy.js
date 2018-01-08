'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SVGLoader = require('./SVGLoader');

var _SVGLoader2 = _interopRequireDefault(_SVGLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Samy = function (_React$Component) {
  _inherits(Samy, _React$Component);

  _createClass(Samy, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        svg: this.state.svg
      };
    }
  }]);

  function Samy(props) {
    _classCallCheck(this, Samy);

    var _this = _possibleConstructorReturn(this, (Samy.__proto__ || Object.getPrototypeOf(Samy)).call(this, props));

    _this.state = {
      svg: null
    };

    _this.onSVGReady = _this.onSVGReady.bind(_this);
    return _this;
  }

  _createClass(Samy, [{
    key: 'onSVGReady',
    value: function onSVGReady(svgNode) {
      this.setState({ svg: svgNode });
      this.props.onSVGReady(svgNode);
      console.log('onSVGReady fired', svgNode);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          path = _props.path,
          onSVGReady = _props.onSVGReady,
          children = _props.children,
          svgXML = _props.svgXML,
          props = _objectWithoutProperties(_props, ['path', 'onSVGReady', 'children', 'svgXML']);

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_SVGLoader2.default, _extends({
          path: this.props.path,
          onSVGReady: this.onSVGReady,
          svgXML: svgXML
        }, props)),
        this.props.children
      );
    }
  }]);

  return Samy;
}(_react2.default.Component);

Samy.propTypes = {
  path: _propTypes2.default.string,
  //if we have the svg text we can use that instead of loading it with ajax
  svgXML: _propTypes2.default.string,
  onSVGReady: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element]),
  style: _propTypes2.default.object
};
Samy.childContextTypes = {
  svg: _propTypes2.default.object
};


Samy.defaultProps = {
  onSVGReady: function onSVGReady() {}
};

exports.default = Samy;