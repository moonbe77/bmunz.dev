import { fireEvent, render, screen } from '@testing-library/react';
import { getRoles } from '@testing-library/dom';
import Burger from '../components/atoms/Burger';

test('should be in the document', () => {
  render(<Burger isDarkTheme={false} />);
  expect(screen.getByTestId('burger')).toBeInTheDocument();
});

test('should be clicked', () => {
  const handleClick = jest.fn();
  render(<Burger handleSideMenu={handleClick} />);

  fireEvent(
    screen.getByTestId('burger'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('should have aria-role="switch"', () => {
  render(<Burger />);
  const burger = screen.getByRole('switch');
  expect(burger).toBeInTheDocument();
});
