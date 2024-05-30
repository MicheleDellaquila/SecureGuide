import { createContext, type PropsWithChildren } from "react";
import type { Chat } from "@/types/types";
import useChats from "./hook/useChats";

// Chats context
export const ChatsCtx = createContext<Chat[]>([]);
export const ChatsActionCtx = createContext<(chat: Chat) => void>(() => {});

export const ChatsProvider = ({ children }: PropsWithChildren) => {
  const { chats, updateChats } = useChats();

  return (
    <ChatsActionCtx.Provider value={updateChats}>
      <ChatsCtx.Provider value={chats}>{children}</ChatsCtx.Provider>
    </ChatsActionCtx.Provider>
  );
};
