import { useMessagesActionCtx } from "@/context/messagesCtx/useMessagesCtx";
import { useChatsActionCtx } from "@/context/chatsCtx/useChatsCtx";
import { useNavigate } from "react-router-dom";

const useNewChat = () => {
  const { dispatch } = useMessagesActionCtx();
  const { dispatch: dispatchChats } = useChatsActionCtx();
  const navigate = useNavigate();

  // add new chat
  const addNewChat = () => {
    dispatch({ type: "RESET_MESSAGES" });
    dispatchChats({ type: "SELECT_CHAT", payload: null });
    navigate("/home");
  };

  return { addNewChat };
};

export default useNewChat;
