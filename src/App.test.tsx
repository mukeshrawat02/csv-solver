import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const el = screen.getByText(/CSV Loading...../i);
  expect(el).toBeInTheDocument();
});
