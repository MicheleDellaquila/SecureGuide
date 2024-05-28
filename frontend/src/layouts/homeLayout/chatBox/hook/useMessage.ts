import { useState } from "react";
import type { FetcherSubmitFunction } from "react-router-dom";
import type { SubmitTarget } from "react-router-dom/dist/dom";

const useMessage = () => {
  const [message, setMessage] = useState("");

  // send message action
  const sendMessage = (data: object, fetcherSubmit: FetcherSubmitFunction) => {
    console.log(data);
    fetcherSubmit(data as SubmitTarget, { method: "post", action: "/home?index" });
  };

  return { message, setMessage, sendMessage };
};

export default useMessage;
