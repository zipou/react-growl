import Reducer from "./redux/reducer.js";
import Notification from "./components/Notification.js";
import {loadingStartAction, loadingStopAction, notification as notify} from "./redux/actions.js";

export const TIMEOUT = 1500;
export const INFO = "info";
export const WARNING = "warning";
export const DANGER = "danger";
export const SUCCESS = "success";

export default {
  Reducer,
  Notification,
  loadingStartAction,
  loadingStopAction,
  notify
}
