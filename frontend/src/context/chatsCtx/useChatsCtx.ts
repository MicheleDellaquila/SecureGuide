import { useContext } from "react";
import { ChatsCtx } from "./chatsCtx";

const useChatsCtx = () => {
  const chats = useContext(ChatsCtx);

  // check if the context is undefined
  if (chats === undefined) throw new Error("useChatsCtx must be used within a ChatsProvider");

  return chats;
};

export default useChatsCtx;
