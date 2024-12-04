import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  filter: 'DEFAULT',
  entities: {
    notifications: [
      { id: 1, type: 'default', value: 'New course available', isRead: false },
      { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
      { id: 3, type: 'urgent', value: 'New data available', isRead: false },
    ],
  },
});

describe('notificationSelector', () => {
  it('should select the filter type', () => {
    expect(filterTypeSelected(initialState)).toBe('DEFAULT');
  });

  it('should select all notifications', () => {
    const expectedNotifications = initialState.getIn(['entities', 'notifications']);
    expect(getNotifications(initialState)).toEqual(expectedNotifications);
  });

  it('should select unread notifications', () => {
    const expectedUnreadNotifications = initialState.getIn(['entities', 'notifications']).filter(
      notification => !notification.get('isRead')
    );
    expect(getUnreadNotifications(initialState)).toEqual(expectedUnreadNotifications);
  });
});