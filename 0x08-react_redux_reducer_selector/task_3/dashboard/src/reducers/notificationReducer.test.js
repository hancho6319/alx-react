import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual({
      filter: 'DEFAULT',
      notifications: [],
    });
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' },
    ];
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notifications,
    };
    const newState = notificationReducer({}, action);
    expect(newState).toEqual({
      filter: 'DEFAULT',
      notifications: notifications.map(notification => ({
        ...notification,
        isRead: false,
      })),
    });
  });

  it('should handle MARK_AS_READ', () => {
    const state = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };
    const action = {
      type: MARK_AS_READ,
      index: 1,
    };
    const newState = notificationReducer(state, action);
    expect(newState.notifications[1].isRead).toBe(true);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const state = {
      filter: 'DEFAULT',
      notifications: [
        // ...
      ],
    };
    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    };
    const newState = notificationReducer(state, action);
    expect(newState.filter).toBe('URGENT');
  });
});