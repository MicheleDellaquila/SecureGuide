import { useContext } from "react";
import { FocusTextAreaCtx } from "./focusTextAreaCtx";

const useFocusTextAreaCtx = () => {
  const { refTextArea } = useContext(FocusTextAreaCtx);

  // check if the context is used correctly
  if (!refTextArea) throw new Error("useFocusTextAreaCtx must be used within a FocusTextAreaCtxProvider");

  return { refTextArea };
};

export default useFocusTextAreaCtx;
