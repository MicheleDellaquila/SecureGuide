import useFocusTextAreaCtxAction from "@/context/focusTextAreaCtx/useFocusTextAreaCtxAction";
import { MessagesSquare } from "lucide-react";

// components
import Button from "@/components/ui/button/button";

// styles
import "./chatsNotFound.css";

const ChatsNotFound = () => {
  const { focusTextArea } = useFocusTextAreaCtxAction();

  return (
    <div className="ChatsNotFound">
      <MessagesSquare className="ChatsNotFound__icon" size={48} />
      <h4 className="ChatsNotFound__title">Nessuna Chats</h4>
      <p className="ChatsNotFound__text">Le conversazione che avrai con SecureGuide apparirono qua.</p>
      <Button className="ChatsNotFound__btn" size="sm" variant="primary" onClick={focusTextArea}>
        Inzia una nuova chat
      </Button>
    </div>
  );
};

export default ChatsNotFound;
