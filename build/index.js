"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducer = require("./redux/reducer.js");

Object.defineProperty(exports, "Reducer", {
  enumerable: true,
  get: function get() {
    return _reducer.Reducer;
  }
});

var _Notification = require("./components/Notification.js");

Object.defineProperty(exports, "Notification", {
  enumerable: true,
  get: function get() {
    return _Notification.Notification;
  }
});

var _actions = require("./redux/actions.js");

Object.defineProperty(exports, "loadingStartAction", {
  enumerable: true,
  get: function get() {
    return _actions.loadingStartAction;
  }
});
Object.defineProperty(exports, "loadingStopAction", {
  enumerable: true,
  get: function get() {
    return _actions.loadingStopAction;
  }
});
Object.defineProperty(exports, "notify", {
  enumerable: true,
  get: function get() {
    return _actions.notification;
  }
});
var TIMEOUT = exports.TIMEOUT = 1500;
var INFO = exports.INFO = "info";
var WARNING = exports.WARNING = "warning";
var DANGER = exports.DANGER = "danger";
var SUCCESS = exports.SUCCESS = "success";