// Notifications.js
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import './Notifications.css';

class Notifications extends PureComponent {
  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer, listNotifications, markNotificationAsRead } = this.props;
    return (
      <div className="Notifications">
        <div className="menuItem" onClick={handleDisplayDrawer}>Your notifications</div>
        {displayDrawer && (
          <div className="NotificationsPanel">
            <button onClick={handleHideDrawer}>Close</button>
            <ul>
              {listNotifications.length === 0 && <li>No new notification</li>}
              {listNotifications.map(notification => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  markAsRead={() => markNotificationAsRead(notification.id)}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,
  listNotifications: PropTypes.arrayOf(PropTypes.object).isRequired,
  markNotificationAsRead: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  listNotifications: [],
};

export default Notifications;

