import { useContext } from "react";
import { ChatsCtx, ChatsActionCtx } from "./chatsCtx";

// use chats action
export const useChatsActionCtx = () => {
  const updateChats = useContext(ChatsActionCtx);

  // check if the context is undefined
  if (updateChats === undefined) throw new Error("useChatsActionCtx must be used within a ChatsProvider");

  return { updateChats };
};

// useChatsCtx
export const useChatsCtx = () => {
  const chats = useContext(ChatsCtx);

  // check if the context is undefined
  if (chats === undefined) throw new Error("useChatsCtx must be used within a ChatsProvider");

  return { chats };
};
