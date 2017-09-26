"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _H = require("./Heading/H1");

var _H2 = _interopRequireDefault(_H);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Heading1 = function Heading1(props) {
  return _react2.default.createElement(
    _H2.default,
    props,
    props.children
  );
};

exports.default = Heading1;