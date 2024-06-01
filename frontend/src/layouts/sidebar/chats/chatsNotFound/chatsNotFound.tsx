import useFocusChat from "./hook/useFocusChat";

// components
import Button from "@/components/ui/button/button";
import { MessagesSquare } from "lucide-react";

// styles
import "./chatsNotFound.scss";

// ChatsNotFound props
interface ChatsNotFoundProps {
  isMobile: boolean;
  onCloseSidebar?: () => void;
}

const ChatsNotFound = ({ isMobile, onCloseSidebar }: ChatsNotFoundProps) => {
  const { focusChat } = useFocusChat(isMobile, onCloseSidebar);

  return (
    <div className="ChatsNotFound">
      <MessagesSquare className="ChatsNotFound__icon" size={48} />
      <h4 className="ChatsNotFound__title">Nessuna Chats</h4>
      <p className="ChatsNotFound__text">Le conversazione che avrai con SecureGuide apparirono qua.</p>
      <Button className="ChatsNotFound__btn" size="sm" variant="primary" onClick={focusChat}>
        Inzia una nuova chat
      </Button>
    </div>
  );
};

export default ChatsNotFound;
