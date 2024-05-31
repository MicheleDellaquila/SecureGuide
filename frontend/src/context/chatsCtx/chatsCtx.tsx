import { createContext, type Dispatch, type PropsWithChildren } from "react";
import type { ChatsCtxAction, ChatsCtxState } from "@/types/types";
import useChats from "./hook/useChats";

// Chats context
export const ChatsCtx = createContext<ChatsCtxState>({ chats: [] });
export const ChatsActionCtx = createContext<Dispatch<ChatsCtxAction>>(() => {});

export const ChatsProvider = ({ children }: PropsWithChildren) => {
  const { state, dispatch } = useChats();

  return (
    <ChatsActionCtx.Provider value={dispatch}>
      <ChatsCtx.Provider value={state}>{children}</ChatsCtx.Provider>
    </ChatsActionCtx.Provider>
  );
};
