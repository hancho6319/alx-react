import { createSelector } from 'reselect';

const getNotificationState = state => state.notifications;

export const filterTypeSelected = createSelector(
  getNotificationState,
  state => state.get('filter')
);

export const getNotifications = createSelector(
  getNotificationState,
  state => state.get('entities').get('notifications')
);

export const getUnreadNotifications = createSelector(
  getNotifications,
  notifications => notifications.filter(notification => !notification.get('isRead'))
);