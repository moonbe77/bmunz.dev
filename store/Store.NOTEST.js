// import { cleanup, fireEvent, render, screen } from '@testing-library/react';
// import { StateProvider, StateContext, StateDispatcher } from '../store/store';

// afterEach(cleanup);

// describe('Store', () => {
// test('store should have key "name": bMunz.dev', () => {
//   // expect store to have a key name with the value bMunz.dev
//   const { getByText } = render(
//     <StateProvider>
//       <StateContext.Consumer>
//         {(value) => <span>{value.name}</span>}
//       </StateContext.Consumer>
//     </StateProvider>
//   );
//   expect(getByText('bMunz.dev')).toBeTruthy();
// });

// test('should toggle menu state', () => {
//   // test dispatch method changes theme
//   const { getByText } = render(
//     <StateProvider>
//       <StateDispatcher.Consumer>
//         {(disp) => {
//           disp({ type: 'TOGGLE_SIDE_MENU', payload: true });
//           return (
//             <StateContext.Consumer>
//               {(value) => <span>{value.showSideMenu}</span>}
//             </StateContext.Consumer>
//           );
//         }}
//       </StateDispatcher.Consumer>
//     </StateProvider>
//   );
//   screen.debug();
//   expect(true).toBeTruthy();
// });
// test click action
// test a11y attributes are in place
// });
