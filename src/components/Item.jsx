import React from "react";
import style from "../static/Notification.scss";

export default class Item extends React.Component {

    constructor(props) {
      super(props);
      let {id, timeout, onTimeout} = props;
      if (onTimeout) {
        setTimeout(()=> {
          return onTimeout(id)
        }, timeout);
      }
    }

    render() {
      let {message, type, visible} = this.props;
      let itemStyle= style[(visible) ? type : type+"_hidden"];
      return (<div className={itemStyle}>{message}</div>)
    }
}

export class LoadingItem extends React.Component {

    render() {
      let {message, type, visible} = this.props;
      let itemStyle= style[(visible) ? "loading" : "loading_hidden"];
      return (<div className={itemStyle}>{message}</div>)
    }
}
