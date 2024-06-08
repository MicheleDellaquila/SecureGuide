import { useRef, useEffect, useCallback, useReducer } from "react";
import type { Chat } from "@/types/types";
import type { ChatsCtxState, ChatsCtxAction } from "@/types/reducerTypes";
import { collection } from "firebase/firestore";
import { getDocsData } from "@/services/firebaseQuery";
import { firestore } from "@/configs/firebase";
import { toast } from "react-toastify";

// chat reducer
const chatReducer = (state: ChatsCtxState, action: ChatsCtxAction): ChatsCtxState => {
  switch (action.type) {
    case "INITIALIZE_CHATS": {
      return { ...state, chats: [...action.payload] };
    }

    case "ADD_CHAT": {
      const copyChats = [...state.chats];
      const updateChats = [...copyChats, action.payload];
      return { ...state, chats: [...updateChats] };
    }

    case "SELECT_CHAT": {
      return { ...state, chatSelected: action.payload };
    }

    default:
      return state;
  }
};

// initial state
const initialState: ChatsCtxState = {
  chats: [],
  chatSelected: null,
};

const useChats = () => {
  const [state, dispatch] = useReducer(chatReducer, initialState);
  const initialRender = useRef(false);

  // get all chats
  const getChats = useCallback(async () => {
    try {
      const chatsData = await getDocsData<Chat>(collection(firestore, "chats"));
      dispatch({ type: "INITIALIZE_CHATS", payload: chatsData });
    } catch (error: any) {
      console.error(error);
      toast.error(error.message);
    }
  }, []);

  useEffect(() => {
    if (!initialRender.current) {
      getChats();
      initialRender.current = true;
    }
  }, [getChats]);

  return { state, dispatch };
};

export default useChats;
