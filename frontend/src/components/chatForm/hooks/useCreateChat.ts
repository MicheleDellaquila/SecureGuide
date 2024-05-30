import { useEffect } from "react";
import { useMessagesActionCtx } from "@/context/messagesCtx/useMessagesCtx";
import { useChatsActionCtx } from "@/context/chatsCtx/useChatsCtx";
import { useNavigate } from "react-router-dom";

const useCreateChat = (formResult: any) => {
  const { addMessage } = useMessagesActionCtx();
  const { updateChats } = useChatsActionCtx();
  const navigate = useNavigate();

  // create chat if form return a result
  useEffect(() => {
    if (!formResult) return;

    // update messages and chats
    addMessage(formResult.answer, "model");
    updateChats(formResult.chat);

    // navigate to chat
    navigate(`/home/${formResult.chat.id}`);
  }, [formResult]);

  return;
};

export default useCreateChat;
