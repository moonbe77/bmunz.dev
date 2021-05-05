import { fireEvent, render, screen } from '@testing-library/react';
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
