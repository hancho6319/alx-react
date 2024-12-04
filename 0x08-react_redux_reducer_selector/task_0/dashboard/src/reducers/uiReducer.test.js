import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state', () => {
    expect(uiReducer(undefined, {})).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const action = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
    const newState = uiReducer({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    }, action);
    expect(newState.isNotificationDrawerVisible).toBe(true);
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const action = {
      type: HIDE_NOTIFICATION_DRAWER,
    };
    const newState = uiReducer({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    }, action);
    expect(newState.isNotificationDrawerVisible).toBe(false);
  });

  it('should handle LOGIN_SUCCESS', () => {
    const user = { id: 1, name: 'John Doe' };
    const action = {
      type: LOGIN_SUCCESS,
      payload: user,
    };
    const newState = uiReducer({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    }, action);
    expect(newState.isUserLoggedIn).toBe(true);
    expect(newState.user).toEqual(user);
  });

  it('should handle LOGIN_FAILURE and LOGOUT', () => {
    const action = {
      type: LOGIN_FAILURE,
    };
    const newState = uiReducer({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: { id: 1, name: 'John Doe' },
    }, action);
    expect(newState.isUserLoggedIn).toBe(false);
    expect(newState.user).toEqual({});

    const logoutAction = {
      type: LOGOUT,
    };
    const finalState = uiReducer(newState, logoutAction);
    expect(finalState.isUserLoggedIn).toBe(false);
    expect(finalState.user).toEqual({});
  });
});