import { createContext, type PropsWithChildren } from "react";
import type { chatsContext } from "@/types/types";
import useChats from "./useChats";

// Chats context
export const ChatsCtx = createContext<chatsContext>({
  chats: [],
});

export const ChatsProvider = ({ children }: PropsWithChildren) => {
  const { chats } = useChats();

  return <ChatsCtx.Provider value={{ chats }}>{children}</ChatsCtx.Provider>;
};
