import React from 'react';
import { render, screen } from '@testing-library/react';
import DVDStore from './DVDStore';

test('renders learn react link', () => {
  render(<DVDStore />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
