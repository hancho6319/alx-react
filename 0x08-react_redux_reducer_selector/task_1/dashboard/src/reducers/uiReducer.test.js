import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';
import Immutable from 'immutable';

describe('uiReducer', () => {
  it('should return the initial state', () => {
    expect(uiReducer(undefined, {})).toEqual(Immutable.Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Immutable.Map(),
    }));
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const action = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
    const newState = uiReducer(
      Immutable.Map({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: Immutable.Map(),
      }),
      action
    );
    expect(newState.get('isNotificationDrawerVisible')).toBe(true);
  });

  // ...other tests, similar to the previous implementation, but using `get` and `toJS` for comparison