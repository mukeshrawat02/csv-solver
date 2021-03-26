import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Dashboard } from './Dashboard'
import React, { Dispatch } from "react";

test('should have title', () => {
  render(<Dashboard />)
  expect(screen.getByText(/CSV Numbers Formula Solver/i)).toBeInTheDocument()
})

test('should load FileReader component', () => {
  render(<Dashboard />)
  expect(screen.getByText(/Drop CSV file here/i)).toBeInTheDocument()
})

test('should find the target in a given array', async () => {
  const initialState = {
    numbers: [1, 2, 3, 4],
    target: "12",
    formula: "",
  }

  type State = typeof initialState;
  const stateMock: Dispatch<Partial<State>> = jest.fn()

  const stateSpy = jest.spyOn(React, 'useState') as jest.SpyInstance<
    [State, Dispatch<State>]
  >
  stateSpy.mockImplementation((): [State, Dispatch<State>] => [
    initialState,
    stateMock,
  ])
  const { findByText } = render(<Dashboard />)
  //solve should be rendered as we are passing that in initial state
  const solve = await findByText('Solve');
  expect(solve).toBeTruthy();
  // fire solve click
  fireEvent.click(solve);
  
  await waitFor(() => {
    expect(stateMock).toHaveBeenLastCalledWith({
      ...initialState,
      ...{ formula: "4 * 3" },
    })
  })
})