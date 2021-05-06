import { fireEvent, render, screen } from '@testing-library/react';
import { StateProvider, useStateContext } from '../store/store';
// import { getRoles } from '@testing-library/dom';
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

  test('to have role : button', () => {
    render(<Switch>demo text</Switch>);
    // action elements should have aria button role.
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  // test('should chnage the themet', () => {
  //   // test dispatch method changes theme
  //   // SWITCH_GAME
  //   // const state = useStateContext();
  //   render(
  //     <StateProvider value={{ isDarkTheme: true }}>
  //       <Switch onClick= >
  //         🤣
  //       </Switch>
  //     </StateProvider>
  //   );

  //   fireEvent(
  //     screen.getByTestId('switch-button'),
  //     new MouseEvent('click', {
  //       bubbles: true,
  //       cancelable: true,
  //     })
  //   );

  //   // console.log(state);
  //   expect().toBe(false);
  // });
  // test click action

  // test a11y attributes are in place
});
