import useFocusTextAreaCtxAction from "@/context/focusTextAreaCtx/useFocusTextAreaCtxAction";

const useFocusChat = (isMobile: boolean, onCloseSidebar?: () => void) => {
  const { focusTextArea } = useFocusTextAreaCtxAction();

  // focus chat
  const focusChat = () => {
    if (isMobile) onCloseSidebar?.();
    focusTextArea();
  };

  return { focusChat };
};

export default useFocusChat;
