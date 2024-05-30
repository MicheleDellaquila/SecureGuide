import { useContext } from "react";
import { MessagesActionCtx, MessagesCtx } from "./messagesCtx";

export const useMessagesActionCtx = () => {
  const addMessage = useContext(MessagesActionCtx);

  // check if the context is used correctly
  if (!addMessage) throw new Error("MessagesActionCtx must be used within a MessagesProvider");

  return { addMessage };
};

export const useMessagesCtx = () => {
  const messages = useContext(MessagesCtx);

  // check if the context is used correctly
  if (!messages) throw new Error("MessagesCtx must be used within a MessagesProvider");

  return { messages };
};
