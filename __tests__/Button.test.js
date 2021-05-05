// import '@testing-library/jest-dom/extend-expect';
// import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../components/atoms/Button/index';

test('should be in the document', () => {
  render(<Button />);
  expect(screen.getByTestId('button-component')).toBeInTheDocument();
});

test('should not have class = primary', () => {
  render(<Button />);
  expect(screen.getByTestId('button-component')).not.toHaveClass('primary');
});

test('button should render with the class full ', () => {
  render(<Button size="full" />);
  expect(screen.getByTestId('button-component')).toHaveClass('full');
});

test('should be default size = className -> medium', () => {
  render(<Button />);
  expect(screen.getByTestId('button-component')).toHaveClass('medium');
});

test('should be size  small', () => {
  render(<Button size="small" />);
  expect(screen.getByTestId('button-component')).toHaveClass('small');
});

test('should be size large', () => {
  render(<Button size="large" />);
  expect(screen.getByTestId('button-component')).toHaveClass('large');
});

test('should be type primary', () => {
  render(<Button primary />);
  expect(screen.getByTestId('button-component')).toHaveClass('primary');
});

test('should be default mode of button', () => {
  render(<Button />);
  expect(screen.getByTestId('button-component')).toHaveClass('secondary');
});
