import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(<Header />);
  });

  it('renders img and h1 tags', () => {
    const { getByAltText, getByText } = render(<Header />);
    expect(getByAltText('Holberton Logo')).toBeInTheDocument();
    expect(getByText('School dashboard')).toBeInTheDocument();
  });
});
