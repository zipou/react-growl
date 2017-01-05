import Reducer from "redux/reducer";
import Notification from "components/Notification";
import {loadingStartAction, loadingStopAction, notification as notify} from "redux/actions";

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
