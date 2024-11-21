import { filterUnreadNotifications, sortNotificationsByUrgency, extractNotificationValues } from './notifications'; // Adjust the import based on your project structure

const mockNotifications = [
  {
    id: "5debd76480edafc8af244228",
    author: {
      id: "5debd764a7c57c7839d722e9",
      name: { first: "Poole", last: "Sanders" },
      email: "poole.sanders@holberton.nz",
    },
    context: {
      guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
      isRead: true,
      type: "urgent",
      value: "Lorem ipsum dolor sit amet.",
    },
  },
  {
    id: "5debd764507712e7a1307303",
    author: {
      id: "5debd7648ba8641ce0a34ea4",
      name: { first: "Norton", last: "Grimes" },
      email: "norton.grimes@holberton.nz",
    },
    context: {
      guid: "cec84b7a-7be4-4af0-b833-f1485433f66e",
      isRead: false,
      type: "urgent",
      value: "ut labore et dolore magna aliqua.",
    },
  },
];

describe('Notification functions', () => {
  test('should filter only unread notifications', () => {
    const unreadNotifications = filterUnreadNotifications(mockNotifications);
    expect(unreadNotifications).toHaveLength(1);
    expect(unreadNotifications[0].context.isRead).toBe(false);
  });

  test('should sort notifications by urgency', () => {
    const sortedNotifications = sortNotificationsByUrgency(mockNotifications);
    expect(sortedNotifications[0].context.type).toBe('urgent');
    expect(sortedNotifications[sortedNotifications.length - 1].context.type).toBe('urgent');
  });

  test('should extract notification values', () => {
    const values = extractNotificationValues(mockNotifications);
    expect(values).toEqual([
      "Lorem ipsum dolor sit amet.",
      "ut labore et dolore magna aliqua.",
    ]);
  });
});
