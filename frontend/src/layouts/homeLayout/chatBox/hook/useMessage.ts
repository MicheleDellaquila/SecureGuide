import type { FetcherSubmitFunction } from "react-router-dom";
import type { SubmitTarget } from "react-router-dom/dist/dom";
import { useMessagesActionCtx } from "@/context/messagesCtx/useMessagesCtx";

const useMessage = () => {
  const message = "";
  const { dispatch } = useMessagesActionCtx();

  // send message action
  const sendMessage = (data: any, fetcherSubmit: FetcherSubmitFunction) => {
    dispatch({ type: "ADD_MESSAGE", payload: { text: data.message, sender: "user" } });
    fetcherSubmit({ ...data, actionType: "getAnswer" } as SubmitTarget, { method: "post", action: "/home" });
  };

  return { message, sendMessage };
};

export default useMessage;
