module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commonDefaultProps = exports.commonPropTypes = undefined;

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _simple = __webpack_require__(5);

var _simple2 = _interopRequireDefault(_simple);

var _simple3 = __webpack_require__(6);

var simpleEnterExit = _interopRequireWildcard(_simple3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commonPropTypes = exports.commonPropTypes = {
  columns: _propTypes2.default.number.isRequired,
  columnWidth: _propTypes2.default.number.isRequired,
  gutterWidth: _propTypes2.default.number,
  gutterHeight: _propTypes2.default.number,
  component: _propTypes2.default.string,
  layout: _propTypes2.default.func,
  enter: _propTypes2.default.func,
  entered: _propTypes2.default.func,
  exit: _propTypes2.default.func,
  perspective: _propTypes2.default.number,
  lengthUnit: _propTypes2.default.string,
  angleUnit: _propTypes2.default.string
};

var commonDefaultProps = exports.commonDefaultProps = {
  lengthUnit: 'px',
  angleUnit: 'deg',
  component: 'div',
  gutterWidth: 0,
  gutterHeight: 0,
  layout: _simple2.default,
  enter: simpleEnterExit.enter,
  entered: simpleEnterExit.entered,
  exit: simpleEnterExit.exit
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("shallowequal");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("lodash.omit");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (items, props) {
  var columnWidth = props.columnWidth,
      _props$itemHeight = props.itemHeight,
      itemHeight = _props$itemHeight === undefined ? 150 : _props$itemHeight,
      columns = props.columns,
      gutterWidth = props.gutterWidth,
      gutterHeight = props.gutterHeight;


  var positions = items.map(function (itemProps, i) {
    var column = i % columns;
    var row = Math.floor(i / columns);

    var x = column * columnWidth + column * gutterWidth;
    var y = row * itemHeight + row * gutterHeight;

    return [x, y];
  });

  var gridWidth = columns * columnWidth + (columns - 1) * gutterWidth;
  var gridHeight = Math.ceil(items.length / columns) * (itemHeight + gutterHeight) - gutterHeight;

  return { positions: positions, gridWidth: gridWidth, gridHeight: gridHeight };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var enterExit = function enterExit() {
  return { scale: 1, opacity: 1 };
};

var enter = exports.enter = enterExit;
var exit = exports.exit = enterExit;

var entered = exports.entered = function entered() {
  return { scale: 1, opacity: 1 };
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Values https://matthewlein.com/ceaser/
var quadIn = exports.quadIn = 'cubic-bezier(0.55, 0.085, 0.68, 0.53)';
var quadOut = exports.quadOut = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
var quadInOut = exports.quadInOut = 'cubic-bezier(0.455, 0.03, 0.515, 0.955)';
var cubicIn = exports.cubicIn = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)';
var cubicOut = exports.cubicOut = 'cubic-bezier(0.215, 0.61, 0.355, 1)';
var cubicInOut = exports.cubicInOut = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
var quartIn = exports.quartIn = 'cubic-bezier(0.895, 0.03, 0.685, 0.22)';
var quartOut = exports.quartOut = 'cubic-bezier(0.165, 0.84, 0.44, 1)';
var quartInOut = exports.quartInOut = 'cubic-bezier(0.77, 0, 0.175, 1)';
var quintIn = exports.quintIn = 'cubic-bezier(0.755, 0.05, 0.855, 0.06)';
var quintOut = exports.quintOut = 'cubic-bezier(0.23, 1, 0.32, 1)';
var quintInOut = exports.quintInOut = 'cubic-bezier(0.86, 0, 0.07, 1)';
var sineIn = exports.sineIn = 'cubic-bezier(0.47, 0, 0.745, 0.715)';
var sineOut = exports.sineOut = 'cubic-bezier(0.39, 0.575, 0.565, 1)';
var sineInOut = exports.sineInOut = 'cubic-bezier(0.445, 0.05, 0.55, 0.95)';
var expoIn = exports.expoIn = 'cubic-bezier(0.95, 0.05, 0.795, 0.035)';
var expoOut = exports.expoOut = 'cubic-bezier(0.19, 1, 0.22, 1)';
var expoInOut = exports.expoInOut = 'cubic-bezier(1, 0, 0, 1)';
var circIn = exports.circIn = 'cubic-bezier(0.6, 0.04, 0.98, 0.335)';
var circOut = exports.circOut = 'cubic-bezier(0.075, 0.82, 0.165, 1)';
var circInOut = exports.circInOut = 'cubic-bezier(0.785, 0.135, 0.15, 0.86)';
var backIn = exports.backIn = 'cubic-bezier(0.6, -0.28, 0.735, 0.045)';
var backOut = exports.backOut = 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';
var backInOut = exports.backInOut = 'cubic-bezier(0.68, -0.55, 0.265, 1.55)';

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element) {
  if (typeof element.type !== 'string') {
    throw new Error('Expected children to be simple React Elements but got a React Component. ' + 'Try wrapping your components e.g. <li key={id}><MyComponent /></li>');
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var properties = [{ name: 'translateX', unit: 'length' }, { name: 'translateY', unit: 'length' }, { name: 'perspective', unit: 'length' }, { name: 'translateZ', unit: 'length' }, { name: 'skew', unit: 'angle' }, { name: 'skewX', unit: 'angle' }, { name: 'skewY', unit: 'angle' }, { name: 'scale' }, { name: 'scaleX' }, { name: 'scaleY' }, { name: 'scaleZ' }, { name: 'rotate', unit: 'angle' }, { name: 'rotateX', unit: 'angle' }, { name: 'rotateY', unit: 'angle' }];

var positionToProperties = exports.positionToProperties = function positionToProperties(position) {
  return {
    translateX: -position[0],
    translateY: position[1]
  };
};

var buildTransform = exports.buildTransform = function buildTransform(style, perspective, units) {
  var arr = [];

  properties.forEach(function (prop) {
    if (prop.name === 'perspective') {
      if (typeof perspective !== 'undefined') {
        arr.push('perspective(' + perspective + units[prop.unit] + ')');
      }
    } else if (typeof style[prop.name] !== 'undefined') {
      var val = Number.isNaN(style[prop.name]) ? 0 : style[prop.name];
      arr.push(prop.name + '(' + val + (prop.unit ? units[prop.unit] : '') + ')');
    }
  });

  return arr.join(' ');
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.easings = exports.makeResponsive = exports.measureItems = exports.SpringGrid = exports.CSSGrid = exports.enterExitStyle = exports.layout = undefined;

var _CSSGrid = __webpack_require__(11);

var _CSSGrid2 = _interopRequireDefault(_CSSGrid);

var _SpringGrid = __webpack_require__(14);

var _SpringGrid2 = _interopRequireDefault(_SpringGrid);

var _makeResponsive = __webpack_require__(17);

var _makeResponsive2 = _interopRequireDefault(_makeResponsive);

var _measureItems = __webpack_require__(19);

var _measureItems2 = _interopRequireDefault(_measureItems);

var _pinterest = __webpack_require__(23);

var _pinterest2 = _interopRequireDefault(_pinterest);

var _simple = __webpack_require__(5);

var _simple2 = _interopRequireDefault(_simple);

var _foldUp = __webpack_require__(24);

var foldUp = _interopRequireWildcard(_foldUp);

var _fromCenter = __webpack_require__(25);

var fromCenter = _interopRequireWildcard(_fromCenter);

var _fromLeftToRight = __webpack_require__(26);

var fromLeftToRight = _interopRequireWildcard(_fromLeftToRight);

var _fromTop = __webpack_require__(27);

var fromTop = _interopRequireWildcard(_fromTop);

var _fromBottom = __webpack_require__(28);

var fromBottom = _interopRequireWildcard(_fromBottom);

var _newspaper = __webpack_require__(29);

var newspaper = _interopRequireWildcard(_newspaper);

var _simple3 = __webpack_require__(6);

var simpleEnterExit = _interopRequireWildcard(_simple3);

var _skew = __webpack_require__(30);

var skew = _interopRequireWildcard(_skew);

var _easings = __webpack_require__(7);

var easings = _interopRequireWildcard(_easings);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var layout = exports.layout = {
  pinterest: _pinterest2.default,
  simple: _simple2.default
};

var enterExitStyle = exports.enterExitStyle = {
  foldUp: foldUp,
  fromCenter: fromCenter,
  fromLeftToRight: fromLeftToRight,
  fromTop: fromTop,
  fromBottom: fromBottom,
  newspaper: newspaper,
  simple: simpleEnterExit,
  skew: skew
};

exports.CSSGrid = _CSSGrid2.default;
exports.SpringGrid = _SpringGrid2.default;
exports.measureItems = _measureItems2.default;
exports.makeResponsive = _makeResponsive2.default;
exports.easings = easings;
exports.default = {
  CSSGrid: _CSSGrid2.default,
  SpringGrid: _SpringGrid2.default,
  measureItems: _measureItems2.default,
  makeResponsive: _makeResponsive2.default,
  easings: easings,
  layout: layout,
  enterExitStyle: enterExitStyle
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroupPlus = __webpack_require__(12);

var _reactTransitionGroupPlus2 = _interopRequireDefault(_reactTransitionGroupPlus);

var _shallowequal = __webpack_require__(3);

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

var _commonProps = __webpack_require__(1);

var _easings = __webpack_require__(7);

var _assertIsElement = __webpack_require__(8);

var _assertIsElement2 = _interopRequireDefault(_assertIsElement);

var _CSSGridItem = __webpack_require__(13);

var _CSSGridItem2 = _interopRequireDefault(_CSSGridItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.state = _this.doLayout(props);
    return _this;
  }

  _createClass(_class, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _shallowequal2.default)(nextProps, this.props)) {
        this.setState(this.doLayout(nextProps));
      }
    }
  }, {
    key: 'doLayout',
    value: function doLayout(props) {
      var _props$layout = props.layout(_react2.default.Children.toArray(props.children).map(function (item) {
        (0, _assertIsElement2.default)(item);

        return _extends({}, item.props, {
          key: item.key
        });
      }), props),
          positions = _props$layout.positions,
          gridWidth = _props$layout.gridWidth,
          gridHeight = _props$layout.gridHeight;

      return { gridWidth: gridWidth, gridHeight: gridHeight, positions: positions };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _omit = (0, _lodash2.default)(this.props, ['itemHeight', 'measured', 'columns', 'columnWidth', 'gutterWidth', 'gutterHeight', 'layout', 'enter', 'entered', 'exit', 'perspective', 'springConfig', 'angleUnit']),
          component = _omit.component,
          style = _omit.style,
          children = _omit.children,
          duration = _omit.duration,
          easing = _omit.easing,
          lengthUnit = _omit.lengthUnit,
          rest = _objectWithoutProperties(_omit, ['component', 'style', 'children', 'duration', 'easing', 'lengthUnit']);

      var items = _react2.default.Children.toArray(children);
      var _state = this.state,
          positions = _state.positions,
          gridWidth = _state.gridWidth,
          gridHeight = _state.gridHeight;


      var transition = ['opacity', 'transform'].map(function (prop) {
        return prop + ' ' + duration + 'ms ' + easing;
      }).join(', ');

      var wrappedItems = items.map(function (item, i) {
        return _react2.default.createElement(
          _CSSGridItem2.default,
          _extends({
            key: item.key,
            position: positions[i]
          }, _this2.props, {
            transition: transition,
            gridProps: _this2.props,
            gridState: _this2.state
          }),
          item
        );
      });

      return _react2.default.createElement(
        _reactTransitionGroupPlus2.default,
        _extends({
          component: component,
          style: _extends({
            position: 'relative'
          }, style, {
            width: '' + gridWidth + lengthUnit,
            height: '' + gridHeight + lengthUnit
          })
        }, rest),
        wrappedItems
      );
    }
  }]);

  return _class;
}(_react.Component);

_class.propTypes = _extends({}, _commonProps.commonPropTypes, {
  duration: _propTypes2.default.number.isRequired,
  easing: _propTypes2.default.string
});
_class.defaultProps = _extends({}, _commonProps.commonDefaultProps, {
  easing: _easings.cubicOut
});
exports.default = _class;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group-plus");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _shallowequal = __webpack_require__(3);

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

var _transformHelpers = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      style: {
        zIndex: 2
      }
    }, _this.setEndStyle = function (props, zIndex) {
      clearTimeout(_this.leaveTimeout);

      if (!_this.itemIsMounted) return;

      var position = props.position,
          gridProps = props.gridProps,
          gridState = props.gridState;


      _this.setState({
        style: _extends({}, _this.state.style, {
          zIndex: zIndex
        }, gridProps.entered(props, gridProps, gridState), (0, _transformHelpers.positionToProperties)(position))
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.itemIsMounted = true;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (!(0, _shallowequal2.default)(nextProps, this.props)) {
        requestAnimationFrame(function () {
          _this2.setEndStyle(nextProps, 2);
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.itemIsMounted = false;
      clearTimeout(this.leaveTimeout);
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(done) {
      this.setEndStyle(this.props, 2);
      done();
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(done) {
      var _this3 = this;

      clearTimeout(this.leaveTimeout);

      var _props = this.props,
          position = _props.position,
          gridProps = _props.gridProps,
          gridState = _props.gridState;


      requestAnimationFrame(function () {
        _this3.setState({
          style: _extends({}, _this3.state.style, (0, _transformHelpers.positionToProperties)(position), {
            zIndex: 1
          }, gridProps.enter(_this3.props, gridProps, gridState))
        });

        done();
      });
    }
  }, {
    key: 'componentDidEnter',
    value: function componentDidEnter() {
      var _this4 = this;

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          _this4.setEndStyle(_this4.props, 1);
        });
      });
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      var _this5 = this;

      var _props2 = this.props,
          gridProps = _props2.gridProps,
          gridState = _props2.gridState;


      requestAnimationFrame(function () {
        if (_this5.itemIsMounted) {
          _this5.setState({
            style: _extends({}, _this5.state.style, {
              zIndex: 0
            }, gridProps.exit(_this5.props, gridProps, gridState))
          });

          _this5.leaveTimeout = setTimeout(done, _this5.props.duration);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var item = _react2.default.Children.only(this.props.children);
      var _props3 = this.props,
          transition = _props3.transition,
          perspective = _props3.perspective,
          lengthUnit = _props3.lengthUnit,
          angleUnit = _props3.angleUnit;

      var Element = item.type;

      var _state$style = this.state.style,
          translateX = _state$style.translateX,
          translateY = _state$style.translateY,
          opacity = _state$style.opacity,
          zIndex = _state$style.zIndex;


      if (typeof translateX === 'undefined' || typeof translateY === 'undefined') {
        return null;
      }

      var transform = (0, _transformHelpers.buildTransform)(this.state.style, perspective, {
        length: lengthUnit,
        angle: angleUnit
      });

      var itemProps = (0, _lodash2.default)(item.props, ['itemRect', 'itemHeight']);

      return _react2.default.createElement(Element, _extends({}, itemProps, {
        style: _extends({}, itemProps.style, {
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: zIndex,
          opacity: opacity,
          transform: transform,
          transition: transition,
          WebkitTransform: transform,
          WebkitTransition: transition
        })
      }));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMotion = __webpack_require__(15);

var _stripStyle = __webpack_require__(16);

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _shallowequal = __webpack_require__(3);

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

var _transformHelpers = __webpack_require__(9);

var _commonProps = __webpack_require__(1);

var _assertIsElement = __webpack_require__(8);

var _assertIsElement2 = _interopRequireDefault(_assertIsElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.willEnter = function (transitionStyle) {
      var _this$state = _this.state,
          gridWidth = _this$state.gridWidth,
          gridHeight = _this$state.gridHeight;


      return _extends({}, (0, _stripStyle2.default)(transitionStyle.style), {
        zIndex: 1
      }, _this.props.enter(transitionStyle.data.element.props, _this.props, {
        gridWidth: gridWidth,
        gridHeight: gridHeight
      }));
    };

    _this.willLeave = function (transitionStyle) {
      var _this$state2 = _this.state,
          gridWidth = _this$state2.gridWidth,
          gridHeight = _this$state2.gridHeight;

      var exitStyle = _this.props.exit(transitionStyle.data.element.props, _this.props, {
        gridWidth: gridWidth,
        gridHeight: gridHeight
      });

      return _extends({}, transitionStyle.style, {
        zIndex: 0
      }, springify(exitStyle, _this.props.springConfig));
    };

    _this.state = _this.doLayout(props);
    return _this;
  }

  _createClass(_class, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _shallowequal2.default)(nextProps, this.props)) {
        this.setState(this.doLayout(nextProps));
      }
    }
  }, {
    key: 'doLayout',
    value: function doLayout(props) {
      var items = _react2.default.Children.toArray(props.children).map(function (element) {
        (0, _assertIsElement2.default)(element);

        return {
          key: element.key,
          data: {
            element: element
          }
        };
      });

      var _props$layout = props.layout(items.map(function (item) {
        return _extends({}, item.data.element.props, {
          key: item.data.element.key
        });
      }), props),
          positions = _props$layout.positions,
          gridWidth = _props$layout.gridWidth,
          gridHeight = _props$layout.gridHeight;

      var styles = positions.map(function (position, i) {
        return _extends({}, items[i], {
          style: _extends({}, items[i].style, {
            zIndex: 2
          }, springify(props.entered(items[i].data.element.props, props, {
            gridWidth: gridWidth,
            gridHeight: gridHeight
          }), props.springConfig), springify((0, _transformHelpers.positionToProperties)(position), props.springConfig))
        });
      });

      return { styles: styles, gridWidth: gridWidth, gridHeight: gridHeight };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _omit = (0, _lodash2.default)(this.props, ['itemHeight', 'measured', 'columns', 'columnWidth', 'gutterWidth', 'gutterHeight', 'layout', 'enter', 'entered', 'exit', 'springConfig', 'duration', 'easing']),
          Parent = _omit.component,
          style = _omit.style,
          perspective = _omit.perspective,
          lengthUnit = _omit.lengthUnit,
          angleUnit = _omit.angleUnit,
          rest = _objectWithoutProperties(_omit, ['component', 'style', 'perspective', 'lengthUnit', 'angleUnit']);

      return _react2.default.createElement(
        _reactMotion.TransitionMotion,
        {
          styles: this.state.styles,
          willEnter: this.willEnter,
          willLeave: this.willLeave },
        function (interpolatedStyles) {
          return _react2.default.createElement(
            Parent,
            _extends({
              style: _extends({
                position: 'relative'
              }, style, {
                width: '' + _this2.state.gridWidth + lengthUnit,
                height: '' + _this2.state.gridHeight + lengthUnit
              })
            }, rest),
            interpolatedStyles.map(function (config) {
              var _config$style = config.style,
                  opacity = _config$style.opacity,
                  zIndex = _config$style.zIndex,
                  data = config.data;

              var Child = data.element.type;

              var transform = (0, _transformHelpers.buildTransform)(config.style, perspective, {
                length: lengthUnit,
                angle: angleUnit
              });

              var itemProps = (0, _lodash2.default)(data.element.props, ['itemRect', 'itemHeight']);

              return _react2.default.createElement(Child, _extends({
                key: data.element.key
              }, itemProps, {
                style: _extends({}, itemProps.style, {
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  zIndex: zIndex,
                  opacity: opacity,
                  transform: transform,
                  WebkitTransform: transform,
                  msTransform: transform
                }) }));
            })
          );
        }
      );
    }
  }]);

  return _class;
}(_react.Component);

_class.propTypes = _extends({}, _commonProps.commonPropTypes, {
  springConfig: _propTypes2.default.shape({
    stiffness: _propTypes2.default.number,
    damping: _propTypes2.default.number,
    precision: _propTypes2.default.number
  })
});
_class.defaultProps = _extends({}, _commonProps.commonDefaultProps, {
  springConfig: { stiffness: 60, damping: 14, precision: 0.1 }
});
exports.default = _class;


function springify(style, springConfig) {
  return Object.keys(style).reduce(function (obj, key) {
    obj[key] = (0, _reactMotion.spring)(style[key], springConfig);
    return obj;
  }, {});
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-motion");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-motion/lib/stripStyle");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _commonProps = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-mixed-operators */


var enquire = typeof window !== 'undefined' ? __webpack_require__(18) : null;

exports.default = function (Grid) {
  var _class, _temp2;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      maxWidth = _ref.maxWidth,
      _ref$minPadding = _ref.minPadding,
      minPadding = _ref$minPadding === undefined ? 0 : _ref$minPadding,
      _ref$defaultColumns = _ref.defaultColumns,
      defaultColumns = _ref$defaultColumns === undefined ? 4 : _ref$defaultColumns;

  return _temp2 = _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
      var _ref2;

      var _temp, _this, _ret;

      _classCallCheck(this, _class);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
        columns: defaultColumns
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        var _props = this.props,
            columnWidth = _props.columnWidth,
            gutterWidth = _props.gutterWidth;


        var breakpoints = [];
        var getWidth = function getWidth(i) {
          return i * (columnWidth + gutterWidth) - gutterWidth + minPadding;
        };

        for (var i = 2; getWidth(i) <= maxWidth + columnWidth + gutterWidth; i++) {
          breakpoints.push(getWidth(i));
        }

        this.breakpoints = breakpoints.map(function (width, i, arr) {
          return ['screen', i > 0 && '(min-width: ' + arr[i - 1] + 'px)', i < arr.length - 1 && '(max-width: ' + width + 'px)'].filter(Boolean).join(' and ');
        }).map(function (breakpoint, i) {
          return {
            breakpoint: breakpoint,
            handler: function handler() {
              return _this2.setState({ columns: i + 1 });
            }
          };
        });

        this.breakpoints.forEach(function (_ref3) {
          var breakpoint = _ref3.breakpoint,
              handler = _ref3.handler;
          return enquire.register(breakpoint, { match: handler });
        });
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.breakpoints.forEach(function (_ref4) {
          var breakpoint = _ref4.breakpoint,
              handler = _ref4.handler;
          return enquire.unregister(breakpoint, handler);
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Grid, _extends({}, this.props, this.state));
      }
    }]);

    return _class;
  }(_react.Component), _class.defaultProps = {
    gutterWidth: _commonProps.commonDefaultProps.gutterWidth
  }, _temp2;
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("enquire.js");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(20);

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = __webpack_require__(21);

var _lodash4 = _interopRequireDefault(_lodash3);

var _commonProps = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var imagesLoaded = typeof window !== 'undefined' ? __webpack_require__(22) : null;

exports.default = function (Grid) {
  var _class, _temp;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      measureImages = _ref.measureImages,
      background = _ref.background;

  return _temp = _class = function (_Component) {
    _inherits(_class, _Component);

    function _class(props) {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

      _this.measureElements = function () {
        if (_this.elementsToMeasureContainer) {
          var elements = _this.elementsToMeasureContainer.children;

          if (elements.length) {
            if (measureImages) {
              Array.from(elements).filter(function (el) {
                return !_this.loading[el.dataset.stonecutterkey];
              }).forEach(function (el) {
                _this.loading[el.dataset.stonecutterkey] = true;

                imagesLoaded(el, { background: background }, function () {
                  _this.measureElementWithImages(el, 5);
                });
              });
            } else {
              _this.rects = Array.from(elements).reduce(function (acc, el) {
                acc[el.dataset.stonecutterkey] = el.getBoundingClientRect();
                return acc;
              }, {});

              _this.updateRects();
            }
          }
        }
      };

      _this.measureElementWithImages = function (el, retries) {
        var clientRect = el.getBoundingClientRect();

        if (clientRect && clientRect.height > 0) {
          _this.rects[el.dataset.stonecutterkey] = clientRect;
          delete _this.loading[el.dataset.stonecutterkey];
          _this.updateRectsDebounced();
        } else if (retries > 0) {
          clearTimeout(_this.retryTimeouts[el.dataset.stonecutterkey]);
          _this.retryTimeouts[el.dataset.stonecutterkey] = setTimeout(_this.measureElement, 20, el, --retries);
        }
      };

      _this.updateRects = function () {
        _this.setState({
          rects: _extends({}, _this.state.rects, _this.rects)
        });

        _this.rects = {};
      };

      _this.rects = {};
      _this.loading = {};
      _this.retryTimeouts = {};

      _this.state = {
        rects: {}
      };
      return _this;
    }

    _createClass(_class, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.updateRectsDebounced = (0, _lodash4.default)(this.updateRects, 20);
        this.measureElements();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.measureElements();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var _this2 = this;

        Object.keys(this.retryTimeouts).forEach(function (key) {
          clearTimeout(_this2.retryTimeouts[key]);
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var component = this.props.component;

        var _partition = (0, _lodash2.default)(_react2.default.Children.toArray(this.props.children), function (element) {
          return !_this3.state.rects[element.key];
        }),
            _partition2 = _slicedToArray(_partition, 2),
            newElements = _partition2[0],
            existingElements = _partition2[1];

        var elementsToMeasure = newElements.map(function (element) {
          return _react2.default.cloneElement(element, {
            'style': _extends({}, element.props.style, {
              width: _this3.props.columnWidth
            }),
            'data-stonecutterkey': element.key
          });
        });

        var measuredElements = existingElements.map(function (element) {
          return _react2.default.cloneElement(element, {
            itemRect: _this3.state.rects[element.key]
          });
        });

        return _react2.default.createElement(
          'span',
          null,
          measuredElements.length > 0 && _react2.default.createElement(
            Grid,
            this.props,
            measuredElements
          ),
          elementsToMeasure.length > 0 && _react2.default.createElement(component, {
            style: {
              width: 0,
              height: 0,
              padding: 0,
              margin: 0,
              overflow: 'hidden',
              visibility: 'hidden'
            },
            ref: function ref(el) {
              _this3.elementsToMeasureContainer = el;
            }
          }, elementsToMeasure)
        );
      }
    }]);

    return _class;
  }(_react.Component), _class.defaultProps = {
    component: _commonProps.commonDefaultProps.component
  }, _temp;
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("lodash.partition");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("lodash.debounce");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("imagesloaded");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (items, props) {
  var columns = props.columns,
      columnWidth = props.columnWidth,
      gutterWidth = props.gutterWidth,
      gutterHeight = props.gutterHeight;


  var columnHeights = [];
  for (var i = 0; i < columns; i++) {
    columnHeights.push(0);
  }

  var positions = items.map(function (itemProps) {
    var column = columnHeights.indexOf(Math.min.apply(null, columnHeights));

    var height = itemProps.itemHeight || itemProps.itemRect && itemProps.itemRect.height;

    if (!(height && typeof height === 'number')) {
      throw new Error('Each child must have an "itemHeight" prop or an "itemRect.height" prop.');
    }

    var x = column * columnWidth + column * gutterWidth;
    var y = columnHeights[column];

    columnHeights[column] += Math.round(height) + gutterHeight;

    return [x, y];
  });

  var gridWidth = columns * columnWidth + (columns - 1) * gutterWidth;
  var gridHeight = Math.max.apply(null, columnHeights) - gutterHeight;

  return { positions: positions, gridWidth: gridWidth, gridHeight: gridHeight };
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var enter = exports.enter = function enter() {
  return { rotateX: -90, scale: 1, opacity: 1 };
};
var exit = exports.exit = function exit() {
  return { rotateX: -90, scale: 0, opacity: 0 };
};
var entered = exports.entered = function entered() {
  return { rotateX: 0, scale: 1, opacity: 1 };
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-mixed-operators */
var enterExit = function enterExit(itemProps, gridProps, gridState) {
  var columns = gridProps.columns,
      columnWidth = gridProps.columnWidth,
      gutterWidth = gridProps.gutterWidth;


  return {
    translateX: (columns * columnWidth + (columns - 1) * gutterWidth - columnWidth) / 2,
    translateY: gridState.gridHeight / 2,
    scale: 0,
    opacity: 0
  };
};

var enter = exports.enter = enterExit;
var exit = exports.exit = enterExit;

var entered = exports.entered = function entered() {
  return { scale: 1, opacity: 1 };
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var enter = exports.enter = function enter() {
  return { translateX: -500, opacity: 0 };
};

var exit = exports.exit = function exit(itemProps, gridProps, gridState) {
  return {
    translateX: gridState.gridWidth + 500,
    opacity: 0
  };
};

var entered = exports.entered = function entered() {
  return { opacity: 1 };
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var enterExit = function enterExit() {
  return { translateY: 0, opacity: 0 };
};

var enter = exports.enter = enterExit;
var exit = exports.exit = enterExit;

var entered = exports.entered = function entered() {
  return { opacity: 1 };
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var enterExit = exports.enterExit = function enterExit(itemProps, gridProps, gridState) {
  return {
    translateY: gridState.gridHeight + 500,
    opacity: 0
  };
};

var enter = exports.enter = enterExit;
var exit = exports.exit = enterExit;

var entered = exports.entered = function entered() {
  return { opacity: 1 };
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var enter = exports.enter = function enter() {
  return {
    scale: 0,
    opacity: 0,
    rotate: -720
  };
};

var exit = exports.exit = function exit() {
  return { scale: 0, opacity: 0 };
};

var entered = exports.entered = function entered() {
  return { scale: 1, opacity: 1, rotate: 0 };
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var enter = exports.enter = function enter() {
  return {
    skew: 90,
    rotate: 45,
    scale: 0,
    opacity: 0
  };
};

var exit = exports.exit = function exit() {
  return {
    skew: -90,
    rotate: -45,
    scale: 0,
    opacity: 0
  };
};

var entered = exports.entered = function entered() {
  return {
    skew: 0,
    rotate: 0,
    scale: 1,
    opacity: 1
  };
};

/***/ })
/******/ ]);