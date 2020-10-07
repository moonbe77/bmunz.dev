import { useReducer, createContext, useContext } from 'react';
const StateContext = createContext();
const StateDispatcher = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { name: action.payload };
    case 'RESET_NAME':
      return { name: 'My Name' };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    name: 'My Name',
  });

  return (
    <StateDispatcher.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </StateDispatcher.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
export const useStateDispatch = () => useContext(StateDispatcher);
