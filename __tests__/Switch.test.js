import { fireEvent, render, screen } from '@testing-library/react';
import { getRoles } from '@testing-library/dom';
import Switch from '../components/atoms/Switch';

describe('Switch Button', () => {
  test('should be on screen', () => {
    render(<Switch />);
    expect(screen.getByTestId('switch-button')).toBeInTheDocument();
  });

  test('to have children prop', () => {
    render(<Switch>demo text</Switch>);
    screen.debug();
    expect(screen.getByText('demo text')).toBeInTheDocument();
  });
});
