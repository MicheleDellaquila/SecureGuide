import { useContext } from "react";
import { FocusTextAreaCtxAction } from "./focusTextAreaCtx";

const useFocusTextAreaCtxAction = () => {
  const focusTextArea = useContext(FocusTextAreaCtxAction);

  // check if the context is used correctly
  if (!focusTextArea) throw new Error("useFocusTextAreaCtx must be used within a FocusTextAreaCtxProvider");

  return { focusTextArea };
};

export default useFocusTextAreaCtxAction;
