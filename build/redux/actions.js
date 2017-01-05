"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var TIMEOUT_TYPE = exports.TIMEOUT_TYPE = "TIMEOUT_TYPE";
var NOTIFICATION_TYPE = exports.NOTIFICATION_TYPE = "NOTIFICATION_TYPE";
var TIMEOUT = exports.TIMEOUT = 1500;

var LOADING_START = exports.LOADING_START = "LOADING_START";
var LOADING_STOP = exports.LOADING_STOP = "LOADING_STOP";

var notification = exports.notification = function notification(type, message) {
  return {
    type: NOTIFICATION_TYPE,
    data: {
      type: type,
      message: message
    }
  };
};

var loadingStartAction = exports.loadingStartAction = function loadingStartAction() {
  return {
    type: LOADING_START
  };
};

var loadingStopAction = exports.loadingStopAction = function loadingStopAction() {
  return {
    type: LOADING_STOP
  };
};

var timeoutAction = function timeoutAction(id) {
  return {
    type: TIMEOUT_TYPE,
    data: id
  };
};