import { useCallback, useLayoutEffect } from "react";

const useResizingTextarea = (refTextArea: React.MutableRefObject<HTMLTextAreaElement | null>) => {
  const adjustHeight = useCallback(() => {
    if (!refTextArea.current) return;

    // check if text exceeds the maxHeight
    if (refTextArea.current.scrollHeight > 220) {
      refTextArea.current.style.height = `220px`;
      refTextArea.current.style.overflowY = "scroll";
      return;
    }

    // Create a temporary span to measure the text width
    const tempSpan = document.createElement("span");
    tempSpan.style.font = window.getComputedStyle(refTextArea.current).font;
    tempSpan.style.visibility = "hidden";
    tempSpan.style.whiteSpace = "pre";
    document.body.appendChild(tempSpan);

    // Add extra character to account for caret
    tempSpan.textContent = refTextArea.current.value.replace(/\n$/, "") + "m";

    // Check if text exceeds the width and needs a new line
    if (tempSpan.offsetWidth > refTextArea.current.clientWidth) {
      refTextArea.current.style.height = "auto";
      refTextArea.current.style.height = `${refTextArea.current.scrollHeight}px`;
    }

    document.body.removeChild(tempSpan);
  }, []);

  useLayoutEffect(() => {
    refTextArea.current?.addEventListener("input", adjustHeight);

    return () => {
      refTextArea.current?.removeEventListener("input", adjustHeight);
    };
  }, [adjustHeight]);
};

export default useResizingTextarea;
