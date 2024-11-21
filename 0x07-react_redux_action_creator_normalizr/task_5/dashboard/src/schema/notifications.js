import { normalizedNotifications } from './notifications';

// Refactored getAllNotificationsByUser function
export function getAllNotificationsByUser(userId) {
  const { notifications, messages } = normalizedNotifications.entities;

  return Object.values(notifications)
    .reduce((acc, notification) => {
      if (notification.author === userId) {
        acc.push({
          ...notification,
          message: messages[notification.context],
        });
      }
      return acc;
    }, []);
}
