import { useState, useRef } from "react";
import type { FetcherSubmitFunction } from "react-router-dom";
import type { SubmitTarget } from "react-router-dom/dist/dom";

const useVerifyCode = () => {
  const [isInVerification, setIsInVerification] = useState(false);
  const refForm = useRef<HTMLFormElement>(null);
  const code = { number1: "", number2: "", number3: "", number4: "", number5: "" };

  // trigger submit form
  const submitForm = () => {
    if (refForm && refForm.current) refForm.current.requestSubmit();
  };

  // verify code form
  const verifyCodeForm = (data: object, fetcherSubmit: FetcherSubmitFunction) => {
    setIsInVerification(true)
    fetcherSubmit({ data, action: "verifyCode" } as SubmitTarget, { method: "post", action: "/signUp" });
  };

  return { isInVerification, code, refForm, submitForm, verifyCodeForm };
};

export default useVerifyCode;
