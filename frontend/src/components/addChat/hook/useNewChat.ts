import { useMessagesActionCtx } from "@/context/messagesCtx/useMessagesCtx";
import { useNavigate } from "react-router-dom";

const useNewChat = () => {
  const { dispatch } = useMessagesActionCtx();
  const navigate = useNavigate();

  // add new chat
  const addNewChat = () => {
    dispatch({ type: "RESET_MESSAGES" });
    navigate("/home");
  };

  return { addNewChat };
};

export default useNewChat;
