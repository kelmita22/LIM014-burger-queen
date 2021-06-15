/* import React from 'react';
import ChefOrder from './ChefOrder';
import {render} from '@testing-library/react';

const MockMenu=[
  {
    "id":18,
    "img":"https://firebasestorage.googleapis.com/v0/b/burger-queen-a6754.appspot.com/o/queso.png?alt=media&token=80fd4474-a735-470f-a0fd-ad26af225ebd",
    "name":"Queso",
    "price":"1",
    "type":"extra"
  },
  {
    "id":6,
    "img":"https://firebasestorage.googleapis.com/v0/b/burger-queen-a6754.appspot.com/o/hamburguesaPolloS.png?alt=media&token=63bc788a-fabb-47fb-b27e-e36ad702f318",
    "name":"Hamburguesa Simple de Pollo",
    "price":"10",
    "type":"lunch"
  },
]

describe('Test Component', () => {
  test('Timer should display 45 sec left', () => {
    jest.useFakeTimers();
    const { getByText } = render(<ChefOrder />);
    setTimeout(() => {
      expect(getByText('45')).toBeInTheDocument();
    }, 15000);
    jest.runAllTimers();
  });
}); */


/* test('Timer should display 45 sec left', () => {
  jest.useFakeTimers();
  const { getByText } = render(<ChefOrder />);

  act(() => {
    jest.advanceTimersByTime(1500);
  })
  expect(getByText('45')).toBeInTheDocument();
}) */
