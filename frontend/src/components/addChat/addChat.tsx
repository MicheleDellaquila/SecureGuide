import "./addChat.scss";
import clsx from "clsx";
import useNewChat from "@/components/addChat/hook/useNewChat";

// icon
import { SquarePen } from "lucide-react";

// AddChat props
interface AddChatProps {
  className?: string;
}

const AddChat = ({ className }: AddChatProps) => {
  const { addNewChat } = useNewChat();

  return (
    <span className={clsx("AddChat", className)}>
      <SquarePen className="AddChat__icon" onClick={addNewChat} />
    </span>
  );
};

export default AddChat;
