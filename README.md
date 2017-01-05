Grow Like Notifications for box4b React Apps
============================================
Install
-------
### Step 1
Import the Redux Reducer and import it into you application

```
import {Reducer as notificationReducer} from "box4b-react-growl";

export default combineReducers({
  ...
  notificationReducer,
  ...
});

```

### Step 2
Import the UI component and render it in your application (make sure it's always visible, like in a NavBar, or a Container)

```
import {Notification} from "box4b-react-growl";

export default MyContainer extends React.component {

  render() {
    return (
      <div className="container">
        {this.props.children}
        <Notification/>
      </div>
    )
  }
}

```

Usage
-----

Use Redux Dispatch to send notification action :

```
import {notify, DANGER} from "box4b_react_growl";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    notification: (message) => {
      return dispatch(notify(DANGER, message))
    }
  }
}

```

Todo
----

- Init Custom Options (like labels, ..)
- Webpacking ?
