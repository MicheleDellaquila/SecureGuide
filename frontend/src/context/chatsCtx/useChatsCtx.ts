import { useContext } from "react";
import { ChatsCtx, ChatsActionCtx } from "./chatsCtx";

// use chats action
export const useChatsActionCtx = () => {
  const dispatch = useContext(ChatsActionCtx);

  // check if the context is undefined
  if (dispatch === undefined) throw new Error("useChatsActionCtx must be used within a ChatsProvider");

  return { dispatch };
};

// useChatsCtx
export const useChatsCtx = () => {
  const { chats, chatSelected } = useContext(ChatsCtx);

  // check if the context is undefined
  if (chats === undefined) throw new Error("useChatsCtx must be used within a ChatsProvider");

  return { chats, chatSelected };
};
