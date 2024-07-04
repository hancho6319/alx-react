import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
  it('renders without crashing', () => {
    render(<Login />);
  });

  it('renders 2 input tags and 2 label tags', () => {
    const { getAllByRole, getAllByLabelText } = render(<Login />);
    expect(getAllByRole('textbox').length).toBe(1);
    expect(getAllByRole('textbox', { type: 'password' }).length).toBe(1);
    expect(getAllByLabelText(/email/i).length).toBe(1);
    expect(getAllByLabelText(/password/i).length).toBe(1);
  });
});
