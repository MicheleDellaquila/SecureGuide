import { useEffect } from "react";
import { useMessagesActionCtx } from "@/context/messagesCtx/useMessagesCtx";
import { useChatsActionCtx } from "@/context/chatsCtx/useChatsCtx";
import { useNavigate } from "react-router-dom";

const useCreateChat = (formResult: any) => {
  const { dispatch } = useMessagesActionCtx();
  const { dispatch: chatsDispatch } = useChatsActionCtx();
  const navigate = useNavigate();

  // create chat if form return a result
  useEffect(() => {
    if (!formResult) return;

    // update messages and chats
    dispatch({ type: "ADD_MESSAGE", payload: { text: formResult.answer, sender: "model" } });
    chatsDispatch(formResult.chat);

    // navigate to chat
    navigate(`/home/chat/${formResult.chat.id}`);
  }, [formResult]);

  // block textarea behavior
  const blockTextArea = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return { blockTextArea };
};

export default useCreateChat;
