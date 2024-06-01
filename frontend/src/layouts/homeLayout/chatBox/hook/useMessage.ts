import { useParams, type FetcherSubmitFunction } from "react-router-dom";
import type { SubmitTarget } from "react-router-dom/dist/dom";
import { useMessagesActionCtx, useMessagesCtx } from "@/context/messagesCtx/useMessagesCtx";
import { convertMessagesToHistoryChat } from "@/helpers/convertMessages";

const useMessage = () => {
  const { dispatch } = useMessagesActionCtx();
  const { messages } = useMessagesCtx();
  const { chatId } = useParams();
  const message = "";

  // send message action
  const sendMessage = (data: any, fetcherSubmit: FetcherSubmitFunction) => {
    dispatch({ type: "ADD_MESSAGE", payload: { text: data.message, sender: "user" } });
    dispatch({ type: "ADD_MESSAGE", payload: { text: "...", sender: "model" } });
    fetcherSubmit(
      {
        ...data,
        historyChat: JSON.stringify(convertMessagesToHistoryChat(messages)),
        chatId,
        actionType: "getAnswer",
      } as SubmitTarget,
      {
        method: "post",
        action: "/home",
      },
    );
  };

  return { message, sendMessage };
};

export default useMessage;
