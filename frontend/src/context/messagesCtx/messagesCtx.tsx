import { createContext, type PropsWithChildren } from "react";
import type { Messages, messageSender } from "@/types/types";
import useMessages from "./hook/useMessages";

// messages context
export const MessagesCtx = createContext<Messages[]>([]);
export const MessagesActionCtx = createContext<(message: string, sender: messageSender) => void>(() => {});

export const MessagesProvider = ({ children }: PropsWithChildren) => {
  const { messages, addMessage } = useMessages();

  return (
    <MessagesActionCtx.Provider value={addMessage}>
      <MessagesCtx.Provider value={messages}>{children}</MessagesCtx.Provider>
    </MessagesActionCtx.Provider>
  );
};
