// reducers/notificationReducer.test.js
import { Map } from 'immutable';
import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  const initialState = Map({
    notifications: Map(),
    filter: 'DEFAULT'
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'Notification 1' },
        { id: 2, type: 'urgent', value: 'Notification 2' }
      ]
    };
    const newState = notificationReducer(initialState, action);
    expect(newState.get('notifications').toJS()).toEqual({
      1: { id: 1, type: 'default', value: 'Notification 1', isRead: false },
      2: { id: 2, type: 'urgent', value: 'Notification 2', isRead: false }
    });
  });

  it('should handle MARK_AS_READ', () => {
    const action = { type: MARK_AS_READ, index: 2 };
    const initial = Map({
      notifications: Map({
        2: { id: 2, isRead: false, type: 'urgent', value: 'Notification 2' }
      })
    });
    const newState = notificationReducer(initial, action);
    expect(newState.getIn(['notifications', 2, 'isRead'])).toBe(true);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const newState = notificationReducer(initialState, action);
    expect(newState.get('filter')).toBe('URGENT');
  });
});

