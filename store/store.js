import { useReducer, createContext, useContext } from 'react';
import projects from '../data/projects.json';

const StateContext = createContext();
const StateDispatcher = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { name: action.payload };
    case 'TOGGLE_SIDE_MENU':
      return { ...state, showSideMenu: action.payload };
    case 'SWITCH_THEME':
      return { ...state, isDarkTheme: action.payload };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const initialState = {
  name: 'bMunz.Dev',
  isDarkTheme: true,
  projects: projects.data,
  showSideMenu: false,
  theme: {
    lightTheme: {
      colors: {
        text: 'rgb(246, 241, 247)',
        backgroundColor: '#2d2d2d',
      },
    },
    darkTheme: {
      colors: {
        text: '#2d2d2d',
        backgroundColor: 'rgb(246, 241, 247)',
      },
    },
  },
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
