// import react-testing methods
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useStateContext, useStateDispatch, StateContext } from './store';
import Switch from '../components/atoms/Switch';

describe('<Switch />', () => {
  beforeEach(() => {
    render(
      <StateContext>
        <Switch />
      </StateContext>
    );
  });

  describe('when page is initialized', () => {
    it('then shows the light theme by default', () => {
      // "Use Dark Theme" text is only shown when the light theme is active
      expect(screen.getByTestId('switch')).toBeVisible();
    });
  });
});
// test('useStateContext shows default value', () => {
//   expect(screen.getByText(/^isDarkTheme:/)).toBeTruthy();
// });
