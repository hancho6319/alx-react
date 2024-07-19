// Footer.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { AppContext, defaultUser } from '../App/AppContext';

describe('<Footer />', () => {
  it('should not display the contact link when user is logged out', () => {
    const contextValue = { user: defaultUser };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    ).dive();
    expect(wrapper.find('a').exists()).toBe(false);
  });

  it('should display the contact link when user is logged in', () => {
    const contextValue = { user: { ...defaultUser, isLoggedIn: true } };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    ).dive();
    expect(wrapper.find('a').exists()).toBe(true);
  });
});

