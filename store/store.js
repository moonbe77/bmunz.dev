import { useReducer, createContext, useContext } from 'react';
import projects from '../public/data/projects.json';
import { menuItems } from '../utils/menuData';

export const StateContext = createContext();
const StateDispatcher = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDE_MENU':
      return { ...state, showSideMenu: action.payload };
    case 'SWITCH_THEME':
      return { ...state, isDarkTheme: action.payload };
    case 'SWITCH_GAME':
      return { ...state, showTicTacToe: action.payload };
    case 'ADD_GAME_MOVE':
      return {
        ...state,
        ...{ game: action.payload, gMoves: state.gMoves + 1 },
      };
    case 'ADD_GAME_HISTORY':
      return {
        ...state,
        gMovesHistory: [state.gMovesHistory, action.payload],
      };
    case 'TOGGLE_GAME_TURN':
      return { ...state, gTurn: !state.gTurn };
    case 'ADD_GAME_WINNER':
      return { ...state, gWinner: action.payload };
    case 'ADD_GAME_DRAW':
      return { ...state, gIsTie: action.payload };
    case 'RESET_GAME':
      return {
        ...state,
        ...{
          game: [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
          ],
          gTurn: false,
          gWinner: null,
          gIsTie: false,
          gMovesHistory: null,
          gMoves: 0,
        },
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const initialState = {
  name: 'bMunz.Dev',
  isDarkTheme: true,
  projects: projects.data,
  showSideMenu: false,
  menu: [...menuItems],
  showTicTacToe: false,
  game: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  gTurn: false, // game turn
  gWinner: null,
  gIsTie: false,
  gMovesHistory: null,
  gMoves: 0,
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateDispatcher.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </StateDispatcher.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
export const useStateDispatch = () => useContext(StateDispatcher);
