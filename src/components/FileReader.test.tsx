import { render, screen } from '@testing-library/react';
import { FileReader } from './FileReader';

let handleFileRead: jest.Mock<any, any>

beforeEach(() => {
  handleFileRead = jest.fn()
})

test('should render CSVReaderd', () => {
  render(<FileReader onFileRead={handleFileRead} />)
  expect(screen.getByText(/Drop CSV file here/i)).toBeInTheDocument()
});

