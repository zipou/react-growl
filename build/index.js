"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item(props) {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));

    var id = props.id,
        timeout = props.timeout,
        onTimeout = props.onTimeout;

    if (onTimeout) {
      setTimeout(function () {
        return onTimeout(id);
      }, timeout);
    }
    return _this;
  }

  _createClass(Item, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          message = _props.message,
          type = _props.type,
          visible = _props.visible;

      var itemStyle = style[visible ? type : type + "_hidden"];
      return _react2.default.createElement(
        "div",
        { className: itemStyle },
        message
      );
    }
  }]);

  return Item;
}(_react2.default.Component);

exports.default = Item;

var LoadingItem = exports.LoadingItem = function (_React$Component2) {
  _inherits(LoadingItem, _React$Component2);

  function LoadingItem() {
    _classCallCheck(this, LoadingItem);

    return _possibleConstructorReturn(this, (LoadingItem.__proto__ || Object.getPrototypeOf(LoadingItem)).apply(this, arguments));
  }

  _createClass(LoadingItem, [{
    key: "render",
    value: function render() {
      var _props2 = this.props,
          message = _props2.message,
          type = _props2.type,
          visible = _props2.visible;

      var itemStyle = style[visible ? "loading" : "loading_hidden"];
      return _react2.default.createElement(
        "div",
        { className: itemStyle },
        message
      );
    }
  }]);

  return LoadingItem;
}(_react2.default.Component);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Notification = require("./Notification.scss");

var _Notification2 = _interopRequireDefault(_Notification);

var _reactRedux = require("react-redux");

var _Item = require("./Item.js");

var _Item2 = _interopRequireDefault(_Item);

var _actions = require("../redux/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    notificationState: state.notificationReducer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onTimeout: function onTimeout(id) {
      return dispatch((0, _actions.timeoutAction)(id));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(function (_React$Component) {
  _inherits(Notification, _React$Component);

  function Notification() {
    _classCallCheck(this, Notification);

    return _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).apply(this, arguments));
  }

  _createClass(Notification, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var notificationState = this.props.notificationState;
      var notifications = notificationState.notifications,
          loading = notificationState.loading;

      var display = notifications && notifications.length > 0 || loading ? true : false;
      return _react2.default.createElement(
        "div",
        { className: _Notification2.default.notification_banner, style: { visibility: display ? "visible" : "hidden" } },
        _react2.default.createElement(_Item.LoadingItem, {
          type: "info",
          id: "loading",
          message: _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "i",
              { className: "fa fa-spinner fa-spin fa-1x fa-fw" },
              " "
            ),
            " chargement en cours..."
          ),
          visible: loading
        }),
        notifications && notifications.map(function (notif, index) {
          var type = notif.type,
              message = notif.message,
              id = notif.id,
              timeout = notif.timeout,
              visible = notif.visible;

          return _react2.default.createElement(_Item2.default, {
            type: type,
            key: id,
            id: id,
            message: message,
            timeout: timeout,
            visible: visible,
            onTimeout: _this2.props.onTimeout.bind(_this2)
          });
        })
      );
    }
  }]);

  return Notification;
}(_react2.default.Component));
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SUCCESS = exports.DANGER = exports.WARNING = exports.INFO = undefined;

var _reducer = require("redux/reducer");

var _reducer2 = _interopRequireDefault(_reducer);

var _Notification = require("components/Notification.js");

var _Notification2 = _interopRequireDefault(_Notification);

var _actions = require("redux/actions");

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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require("./actions");

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
