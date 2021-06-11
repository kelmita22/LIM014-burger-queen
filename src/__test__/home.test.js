import {render,screen,cleanup} from '@testing-library/react';
import Home from '../components/Home';

test('shoulbe render to component',() => {
  render(<Home />);
  const todoElement= screen.getByText('home-1');
  expect(todoElement).toBeInTheDocument();
})
