import { render, screen } from '@testing-library/react';
import * as nextRouter from 'next/router';
import { StateProvider } from '../store/store';
import Header from '../components/molecules/Header';

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));

const customRender = (ui) => render(<StateProvider>{ui}</StateProvider>);

test('should be in the document', () => {
  customRender(<Header />);

  expect(screen.getByTestId('header')).toBeInTheDocument();

  const switchElements = screen.getAllByTestId('switch');
  expect(switchElements.length).toBe(2);
});
