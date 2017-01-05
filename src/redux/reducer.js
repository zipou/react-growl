import {LOADING_START, LOADING_STOP, NOTIFICATION_TYPE, TIMEOUT_TYPE} from "./actions.js";

export default (state, action) => {
  if (typeof state === 'undefined') {
    return {
      loading_counter: 0,
      loading: false,
      notifications: []
    }
  }

  let notifications = state.notifications;
  switch (action.type) {

    case LOADING_STOP:
      let counter = state.loading_counter - 1;
      return Object.assign({}, state, {
        loading_counter: counter,
        loading: (counter != 0)
      })
      break;

    case LOADING_START:
      let counter2 = state.loading_counter + 1;
      return Object.assign({}, state, {
        loading_counter: counter2,
        loading: true,
      })
      break;

    case NOTIFICATION_TYPE:
      let {type, message} = action.data;
      let id = Date.now();
      notifications.unshift({
        id,
        visible : true,
        type,
        message,
        timeout : TIMEOUT,
      })
      return Object.assign({}, state, {
        notifications : notifications
      })
      break;

    case TIMEOUT_TYPE:
      return Object.assign({}, state, {
        notifications : notifications.map((el)=> {
          return (el.id == action.data) ? Object.assign(el, {visible : false}) : el
        })
      });
      break;

    default:
      return state;
  }
}
