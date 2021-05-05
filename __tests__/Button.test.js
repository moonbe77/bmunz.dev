import { render, screen } from '@testing-library/react';
import Button from '../components/atoms/Button/index';

test('should not have class = primary', () => {
  const { container } = render(<Button />);

  //   container.getByTestId('button');
  expect(container.firstChild).not.toHaveClass('primary');
});

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

test('should be size  small', () => {
  const { container } = render(<Button size="small" />);

  //   container.getByTestId('button');
  expect(container.firstChild).toHaveClass('small');
});

test('should be size large', () => {
  const { container } = render(<Button size="large" />);

  //   container.getByTestId('button');
  expect(container.firstChild).toHaveClass('large');
});

test('should be type primary', () => {
  const { container } = render(<Button primary />);

  //   container.getByTestId('button');
  expect(container.firstChild).toHaveClass('primary');
});

test('should be default mode of button', () => {
  const { container } = render(<Button />);

  //   container.getByTestId('button');
  expect(container.firstChild).toHaveClass('secondary');
});