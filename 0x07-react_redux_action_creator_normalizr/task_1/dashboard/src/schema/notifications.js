// src/schema/notifications.js

import { normalize, schema } from 'normalizr';

// Define a user entity
const user = new schema.Entity('users');

// Define a message entity with idAttribute set to 'guid'
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

// Define a notification entity
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// Export the schemas and normalization
export { user, message, notification };
