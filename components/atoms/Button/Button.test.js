import { render, screen } from '@testing-library/react';
import Button from './index';

test('button should render with the class full ', () => {
  const { container } = render(<Button size="full" />);

  //   container.getByTestId('button');
  expect(container.firstChild).toHaveClass('full');
});

test('should be default size = className -> medium', () => {
  const { container } = render(<Button />);

  //   container.getByTestId('button');
  expect(container.firstChild).toHaveClass('medium');
});
