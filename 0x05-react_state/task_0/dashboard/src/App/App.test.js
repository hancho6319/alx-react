import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('should have the initial state for displayDrawer set to false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('should set displayDrawer to true when handleDisplayDrawer is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('should set displayDrawer to false when handleHideDrawer is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });
});

