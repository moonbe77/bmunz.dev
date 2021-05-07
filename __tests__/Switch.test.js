import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StateProvider, StateContext, StateDispatcher } from '../store/store';
// import { getRoles } from '@testing-library/dom';
import Switch from '../components/atoms/Switch';

afterEach(cleanup);

describe('Switch Button', () => {
  test('should be on screen', () => {
    render(<Switch />);
    expect(screen.getByTestId('switch')).toBeInTheDocument();
  });

  test('to have children prop', () => {
    render(<Switch>demo text</Switch>);
    expect(screen.getByText('demo text')).toBeInTheDocument();
  });

  test('to have role : button', () => {
    render(<Switch>demo text</Switch>);
    // action elements should have aria button role.
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByTestId('switch')).toHaveAttribute('tabindex');
  });
});
