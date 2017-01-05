export const TIMEOUT_TYPE = "TIMEOUT_TYPE";
export const NOTIFICATION_TYPE = "NOTIFICATION_TYPE";

export const LOADING_START = "LOADING_START";
export const LOADING_STOP = "LOADING_STOP";

export const notification = (type, message) => {
  return {
    type : NOTIFICATION_TYPE,
    data : {
      type : type,
      message: message,
    }
  }
}

export const loadingStartAction = () => {
  return {
    type : LOADING_START
  }
}

export const loadingStopAction = () => {
  return {
    type : LOADING_STOP
  }
}

export const timeoutAction = (id) => {
  return {
    type : TIMEOUT_TYPE,
    data : id
  }
}
