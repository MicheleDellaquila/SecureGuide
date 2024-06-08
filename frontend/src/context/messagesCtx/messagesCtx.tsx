import { createContext, type Dispatch, type PropsWithChildren } from "react";
import type { MessagesCtxAction, MessagesCtxsState } from "@/types/reducerTypes";
import useMessages from "./hook/useMessages";

// messages context
export const MessagesCtx = createContext<MessagesCtxsState>({ messages: [] });
export const MessagesActionCtx = createContext<Dispatch<MessagesCtxAction>>(() => {});

export const MessagesProvider = ({ children }: PropsWithChildren) => {
  const { state, dispatch } = useMessages();

  return (
    <MessagesActionCtx.Provider value={dispatch}>
      <MessagesCtx.Provider value={state}>{children}</MessagesCtx.Provider>
    </MessagesActionCtx.Provider>
  );
};
