import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { defaultUser } from './AppContext';

describe('<App />', () => {
  it('should have the initial state with default user, logOut function, and listNotifications', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('user')).toEqual(defaultUser);
    expect(typeof wrapper.state('logOut')).toBe('function');
    expect(wrapper.state('listNotifications')).toHaveLength(3);
  });

  it('should log in the user correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@test.com', 'password');
    expect(wrapper.state('user')).toEqual({
      email: 'test@test.com',
      password: 'password',
      isLoggedIn: true,
    });
  });

  it('should log out the user correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@test.com', 'password');
    wrapper.instance().logOut();
    expect(wrapper.state('user')).toEqual(defaultUser);
  });

  it('should mark a notification as read correctly', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    instance.markNotificationAsRead(2);
    expect(wrapper.state('listNotifications')).toHaveLength(2);
    expect(wrapper.state('listNotifications')).toEqual([
      { id: 1, type: 'default', value: 'New course available' },
      { id: 3, type: 'urgent', value: 'New data available' },
    ]);
  });
});

