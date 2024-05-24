import { createContext, type PropsWithChildren } from "react";
import type { Chat } from "@/types/types";
import useChats from "./hook/useChats";

// Chats context
export const ChatsCtx = createContext<Chat[]>([]);

export const ChatsProvider = ({ children }: PropsWithChildren) => {
  const { chats } = useChats();

  return <ChatsCtx.Provider value={chats}>{children}</ChatsCtx.Provider>;
};
