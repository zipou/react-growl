import React from "react";
import style from "../static/Notification.scss";
import {connect} from "react-redux";
import Item, {LoadingItem} from "./Item.jsx";
import {timeoutAction} from "../redux/actions";

const mapStateToProps = (state, ownProps) => {
  return {
    notificationState : state.notificationReducer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTimeout : (id) => {
      return dispatch(timeoutAction(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(class Notification extends React.Component {

  render() {
    let {notificationState} = this.props;
    let {notifications, loading} = notificationState;
    let display = ((notifications && notifications.length > 0) || loading) ? true : false;
    return (<div className={style.notification_banner} style={{visibility : (display) ? "visible" : "hidden"}}>
        <LoadingItem
          type="info"
          id="loading"
          message={<div><i className="fa fa-spinner fa-spin fa-1x fa-fw"> </i> chargement en cours...</div>}
          visible={loading}
        />
        {notifications && notifications.map((notif, index) =>{
        let {type, message, id, timeout, visible} = notif;
        return (<Item
          type={type}
          key={id}
          id={id}
          message={message}
          timeout={timeout}
          visible={visible}
          onTimeout={this.props.onTimeout.bind(this)}
        />)
      })}

    </div>)
  }
})
