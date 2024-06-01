import { useChatsActionCtx } from "@/context/chatsCtx/useChatsCtx";
import { useNavigate } from "react-router-dom";

const useSelectChat = (onCloseSidebar?: () => void) => {
  const { dispatch } = useChatsActionCtx();
  const navigate = useNavigate();

  // select chat and navigate to it
  const selectChat = (uid: string) => {
    dispatch({ type: "SELECT_CHAT", payload: uid });
    onCloseSidebar?.();
    navigate(`/home/chat/${uid}`);
  };

  return { selectChat };
};

export default useSelectChat;
