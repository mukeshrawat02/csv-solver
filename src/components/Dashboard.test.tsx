import { render, screen } from '@testing-library/react'
import { Dashboard } from './Dashboard'

test('should have title', () => {
  render(<Dashboard />)
  expect(screen.getByText(/CSV Numbers Formula Solver/i)).toBeInTheDocument()
})

test('should load FileReader component', () => {
  render(<Dashboard />)
  expect(screen.getByText(/Drop CSV file here/i)).toBeInTheDocument()
})