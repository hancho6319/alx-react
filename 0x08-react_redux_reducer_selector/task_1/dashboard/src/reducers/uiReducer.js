import Immutable from 'immutable';

import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

const initialState = Immutable.Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Immutable.Map(),
});

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    case LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true).set('user', Immutable.fromJS(action.payload));
    case LOGIN_FAILURE:
    case LOGOUT:
      return state.set('isUserLoggedIn', false).set('user', Immutable.Map());
    default:
      return state;
  }
};

export default uiReducer;