import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { AppContext, defaultUser } from '../App/AppContext';

describe('<Header />', () => {
  it('should not render logoutSection when user is not logged in', () => {
    const contextValue = { user: defaultUser, logOut: jest.fn() };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    ).dive();
    expect(wrapper.find('#logoutSection').exists()).toBe(false);
  });

  it('should render logoutSection when user is logged in', () => {
    const contextValue = { user: { email: 'test@test.com', isLoggedIn: true }, logOut: jest.fn() };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    ).dive();
    expect(wrapper.find('#logoutSection').exists()).toBe(true);
  });

  it('should call logOut function when logout link is clicked', () => {
    const logOut = jest.fn();
    const contextValue = { user: { email: 'test@test.com', isLoggedIn: true }, logOut };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    ).dive();
    wrapper.find('#logoutSection a').simulate('click', { preventDefault: () => {} });
    expect(logOut).toHaveBeenCalled();
  });
});

