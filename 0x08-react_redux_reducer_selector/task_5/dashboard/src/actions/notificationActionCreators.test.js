import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    NotificationTypeFilters,
  } from './notificationActionTypes';
  import {
    markAsRead,
    setNotificationFilter,
  } from './notificationActionCreators';
  
  describe('Notification Action Creators', () => {
    it('markAsRead returns the correct action', () => {
      const expectedAction = {
        type: MARK_AS_READ,
        index: 1,
      };
      expect(markAsRead(1)).toEqual(expectedAction);
    });
  
    it('setNotificationFilter returns the correct action', () => {
      const expectedAction = {
        type: SET_TYPE_FILTER,
        filter: NotificationTypeFilters.DEFAULT,
      };
      expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual(
        expectedAction
      );
    });
  });
  