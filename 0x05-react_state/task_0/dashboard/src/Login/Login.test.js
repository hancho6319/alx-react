import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('<Login />', () => {
  it('should have the submit button disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="submit"]').props().disabled).toBe(true);
  });

  it('should enable the submit button when both email and password are provided', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input[type="email"]').simulate('change', { target: { value: 'test@test.com' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { value: 'password' } });
    expect(wrapper.find('input[type="submit"]').props().disabled).toBe(false);
  });
});

