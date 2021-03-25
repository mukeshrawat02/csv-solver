import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AppBar component', () => {
  render(<App />);
  const el = screen.getByText(/InTech Assessment/i);
  expect(el).toBeInTheDocument();
});

test('renders Dashboard component', () => {
  render(<App />);
  const el = screen.getByText(/CSV Numbers Formula Solver/i);
  expect(el).toBeInTheDocument();
});
