import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', value: 'New data available' },
  ];

  it('should render correctly with default props', () => {
    const wrapper = shallow(
      <Notifications 
        displayDrawer={false}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={() => {}}
        listNotifications={listNotifications}
        markNotificationAsRead={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should call markNotificationAsRead when a notification is clicked', () => {
    const markNotificationAsRead = jest.fn();
    const wrapper = shallow(
      <Notifications 
        displayDrawer={true}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={() => {}}
        listNotifications={listNotifications}
        markNotificationAsRead={markNotificationAsRead}
      />
    );
    wrapper.find('NotificationItem').at(0).prop('markAsRead')();
    expect(markNotificationAsRead).toHaveBeenCalledWith(1);
  });
});

