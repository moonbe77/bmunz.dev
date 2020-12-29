import { useReducer, createContext, useContext } from 'react';
import projects from '../data/projects.json';

const StateContext = createContext();
const StateDispatcher = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { name: action.payload };
    case 'RESET_NAME':
      return { name: 'My Name' };
    case 'SWITCH_THEME':
      return { ...state, isDarkTheme: action.payload };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const initialState = {
  name: 'BMDev',
  isDarkTheme: true,
  projects: projects.data,
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
