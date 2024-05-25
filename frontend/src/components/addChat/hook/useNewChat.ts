import { useNavigate } from "react-router-dom";

const useNewChat = () => {
  const navigate = useNavigate();

  // add new chat
  const addNewChat = () => {
    navigate("/home");
  };

  return { addNewChat };
};

export default useNewChat;
