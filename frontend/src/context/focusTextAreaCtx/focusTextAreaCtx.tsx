import { createContext } from "react";
import type { PropsWithChildren, MutableRefObject } from "react";
import useFocusTextArea from "./hook/useFocusTextArea";

// focusTextAreaCtx
export const FocusTextAreaCtx = createContext({} as { refTextArea: MutableRefObject<HTMLTextAreaElement | null> });

// focusTextAreaCtx action
export const FocusTextAreaCtxAction = createContext(() => {});

export const FocusTextAreaCtxProvider = ({ children }: PropsWithChildren) => {
  const { refTextArea, focusTextArea } = useFocusTextArea();

  return (
    <FocusTextAreaCtxAction.Provider value={focusTextArea}>
      <FocusTextAreaCtx.Provider value={{ refTextArea }}>{children}</FocusTextAreaCtx.Provider>
    </FocusTextAreaCtxAction.Provider>
  );
};

export default FocusTextAreaCtxProvider;
{
  /* <FocusTextAreaCtx.Provider value={{ refTextArea }}>{children}</FocusTextAreaCtx.Provider>; */
}
