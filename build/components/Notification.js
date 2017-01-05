"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Notification = require("../static/Notification.scss");

var _Notification2 = _interopRequireDefault(_Notification);

var _reactRedux = require("react-redux");

var _Item = require("./Item.js");

var _Item2 = _interopRequireDefault(_Item);

var _actions = require("../redux/actions.js");

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