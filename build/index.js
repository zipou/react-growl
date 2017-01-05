"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SUCCESS = exports.DANGER = exports.WARNING = exports.INFO = undefined;

var _reducer = require("./redux/reducer.js");

var _reducer2 = _interopRequireDefault(_reducer);

var _Notification = require("./components/Notification.js");

var _Notification2 = _interopRequireDefault(_Notification);

var _actions = require("./redux/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INFO = exports.INFO = "info";
var WARNING = exports.WARNING = "warning";
var DANGER = exports.DANGER = "danger";
var SUCCESS = exports.SUCCESS = "success";

exports.default = {
  Reducer: _reducer2.default,
  Notification: _Notification2.default,
  loadingStartAction: _actions.loadingStartAction,
  loadingStopAction: _actions.loadingStopAction,
  notify: _actions.notification
};