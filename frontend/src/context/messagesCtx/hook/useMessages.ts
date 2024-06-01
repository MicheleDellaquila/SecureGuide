import { useReducer } from "react";
import type { MessagesCtxsState, MessagesCtxAction } from "@/types/types";

// messages reducer
const messagesReducer = (state: MessagesCtxsState, action: MessagesCtxAction): MessagesCtxsState => {
  switch (action.type) {
    case "INITIALIZE_MESSAGES":
      return { ...state, messages: [...action.payload] };

    case "ADD_MESSAGE": {
      const copyMessages = [...state.messages.filter(message => message.text !== "...")];
      const updatedMessages = [...copyMessages, action.payload];

      return { ...state, messages: [...updatedMessages] };
    }

    case "RESET_MESSAGES":
      return { ...state, messages: [] };

    default:
      return state;
  }
};

// initial state
const initialState: MessagesCtxsState = {
  messages: [],
};

const useMessages = () => {
  const [state, dispatch] = useReducer(messagesReducer, initialState);

  return { state, dispatch };
};

export default useMessages;
