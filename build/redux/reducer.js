"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require("./actions.js");

exports.default = notificationReducer = function notificationReducer(state, action) {
  if (typeof state === 'undefined') {
    return {
      loading_counter: 0,
      loading: false,
      notifications: []
    };
  }

  var notifications = state.notifications;
  switch (action.type) {

    case _actions.LOADING_STOP:
      var counter = state.loading_counter - 1;
      return Object.assign({}, state, {
        loading_counter: counter,
        loading: counter != 0
      });
      break;

    case _actions.LOADING_START:
      var counter2 = state.loading_counter + 1;
      return Object.assign({}, state, {
        loading_counter: counter2,
        loading: true
      });
      break;

    case _actions.NOTIFICATION_TYPE:
      var _action$data = action.data,
          type = _action$data.type,
          message = _action$data.message;

      var id = Date.now();
      notifications.unshift({
        id: id,
        visible: true,
        type: type,
        message: message,
        timeout: TIMEOUT
      });
      return Object.assign({}, state, {
        notifications: notifications
      });
      break;

    case _actions.TIMEOUT_TYPE:
      return Object.assign({}, state, {
        notifications: notifications.map(function (el) {
          return el.id == action.data ? Object.assign(el, { visible: false }) : el;
        })
      });
      break;

    default:
      return state;
  }
};