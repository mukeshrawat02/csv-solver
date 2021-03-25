import { render, screen } from '@testing-library/react';
import { AppBar } from './AppBar';

test('renders learn react link', () => {
  render(<AppBar />);
  const titleEl = screen.getByText(/InTech Assessment/i);
  expect(titleEl).toBeInTheDocument();
});
