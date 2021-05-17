import { render, screen, cleanup, fireEvent, queryByAltText, queryByTestId } from '@testing-library/react';
import * as nextRouter from 'next/router';
import { StateProvider, StateDispatcher } from '../store/store';
import Header from '../components/molecules/Header';

// afterEach(() => {
//   cleanup()
// }) // Default on import: runs it after each test.

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));

const customRender = (ui) => render(<StateProvider>{ui}</StateProvider>);

test('should be in the document', () => {
  customRender(<Header />);
  expect(screen.getByTestId('header')).toBeInTheDocument();
});

test(' header should have a switch button for switch-theme', () => {
  customRender(<Header />);
  expect(screen.getByTestId('switch-theme')).toBeInTheDocument()
});

test(' header should have a switch button for switch-game', () => {
  customRender(<Header />);
  expect(screen.getByTestId('switch-game')).toBeInTheDocument()
});

test('dispatch action switching theme', () => {
  customRender(<Header />);
  const testSwitch = screen.getByTestId('switch-theme')  
  
  fireEvent.click(testSwitch); //light
  expect(screen.getByTestId('header')).toHaveClass('header light', {exact: false});
  
  fireEvent.click(testSwitch); //dark
  expect(screen.getByTestId('header')).toHaveClass('header dark', {exact: false});
  
  fireEvent.click(testSwitch); //light
  expect(screen.getByTestId('header')).toHaveClass('header light', {exact: false});
})