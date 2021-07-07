import { useReducer, createContext, useContext } from 'react';

export const BotStateContext = createContext();
export const BotStateDispatcher = createContext();

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_MESSAGE': {
      const messages = [...state.messages, action.payload];
      return {
        ...state,
        messages,
      };
    }

    case 'ADD_SUGGESTIONS':
      // should receive an array
      return { ...state, suggestions: [...action.payload] };

    case 'IS_WAITING':
      return { ...state, isWaitingAnswer: action.payload };

    default:
      throw new Error(
        `Unknown action: ${action.type}, make sure the dispatch call has a TYPE value, it happened in the context of useBotDispatch`
      );
  }
};
const initialState = {
  name: 'bMunz Bot',
  messages: [],
  suggestions: [],
  isWaitingAnswer: false,
};

export const BotStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BotStateDispatcher.Provider value={dispatch}>
      <BotStateContext.Provider value={state}>
        {children}
      </BotStateContext.Provider>
    </BotStateDispatcher.Provider>
  );
};

export const useBotContext = () => useContext(BotStateContext);
export const useBotDispatch = () => useContext(BotStateDispatcher);
