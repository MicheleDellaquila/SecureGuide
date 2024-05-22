import { useState, useRef, useEffect, useCallback } from "react";
import type { FetcherSubmitFunction } from "react-router-dom";
import type { SubmitTarget } from "react-router-dom/dist/dom";
import sendCode from "@/services/apis/sendCode";

const useVerifyCode = () => {
  const [isInVerification, setIsInVerification] = useState(false);
  const refForm = useRef<HTMLFormElement>(null);
  const code = { number1: "", number2: "", number3: "", number4: "", number5: "" };

  // send code
  const sendCodeToEmail = useCallback(async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");

      // check if user is logged
      if (!user) throw new Error("Utente non loggato");

      const { code } = await sendCode(user.email);
      localStorage.setItem("code", code);
    } catch (error: any) {
      console.error(error);
      throw new Error("Errore nell'invio del codice");
    }
  }, []);

  // send code form
  useEffect(() => {
    sendCodeToEmail();
  }, [sendCodeToEmail]);

  // trigger submit form
  const submitForm = () => {
    if (refForm && refForm.current) refForm.current.requestSubmit();
  };

  // verify code form
  const verifyCodeForm = (data: object, fetcherSubmit: FetcherSubmitFunction) => {
    setIsInVerification(true);
    fetcherSubmit({ data, action: "verifyCode" } as SubmitTarget, { method: "post", action: "/verify-account" });
  };

  return { isInVerification, code, refForm, submitForm, verifyCodeForm };
};

export default useVerifyCode;
