import type { ForwardedRef } from "react";
import type { RefCallBack } from "react-hook-form";

const getInputRef = (
  refInput: ForwardedRef<any>,
  refEl: HTMLInputElement | HTMLTextAreaElement,
  refRegister: RefCallBack,
) => {
  refRegister(refEl);

  // if refInput is a function, call it with refEl as argument
  if (typeof refInput === "function") {
    refInput(refEl);
  } else if (refInput) {
    refInput.current = refEl;
  }
};

export default getInputRef;
