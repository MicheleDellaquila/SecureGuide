import { useCallback, useRef } from "react";

const useFocusTextArea = () => {
  const refTextArea = useRef<HTMLTextAreaElement | null>(null);

  // focus the textarea
  const focusTextArea = useCallback(() => {
    if (refTextArea.current) {
      refTextArea.current.focus();
    }
  }, []);

  return { refTextArea, focusTextArea };
};

export default useFocusTextArea;
