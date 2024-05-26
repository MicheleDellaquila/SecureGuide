import useFocusTextAreaCtxAction from "@/context/focusTextAreaCtx/useFocusTextAreaCtxAction";

const useFocusChat = (isMobile: boolean, onClose?: () => void) => {
  const { focusTextArea } = useFocusTextAreaCtxAction();

  // focus chat
  const focusChat = () => {
    if (isMobile) onClose?.();
    focusTextArea();
  };

  return { focusChat };
};

export default useFocusChat;
