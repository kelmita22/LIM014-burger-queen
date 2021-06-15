import React, { useRef } from 'react'
import { render, screen } from '@testing-library/react'
import Cart from './Cart';

let idCounter = 1

const NumberDisplay = ({ number }) => {
  const id = useRef(idCounter++)

  return (
    <div>
      <span data-testid="number-display">{number}</span>
      <span data-testid="instance-id">{id.current}</span>
    </div>
  )
}

test('calling render with the same component on the same container does not remount', () => {
  const { rerender } = render(<Cart number={1} />)
  expect(screen.getByTestId('number-display')).toHaveTextContent('1')

  // re-render the same component with different props
  rerender(<Cart number={2} />)
  expect(screen.getByTestId('number-display')).toHaveTextContent('2')

  expect(screen.getByTestId('instance-id')).toHaveTextContent('1')
})
