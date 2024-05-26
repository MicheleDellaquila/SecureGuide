import "./chats.scss";
import useChatsCtx from "@/context/chatsCtx/useChatsCtx";

// components
import Chat from "./chat/chat";
import ChatsNotFound from "./chatsNotFound/chatsNotFound";

// chats props
interface ChatsProps {
  isMobile: boolean;
  onClose?: () => void;
}

const Chats = ({ isMobile, onClose }: ChatsProps) => {
  const chats = useChatsCtx();

  // check if there are no chats
  if (chats.length === 0) return <ChatsNotFound isMobile={isMobile} onClose={onClose} />;

  return (
    <ul className="Chats">
      {chats.map(chat => (
        <Chat key={chat.documentId} title={chat.title} timestamps={chat.timestamps} />
      ))}
    </ul>
  );
};

export default Chats;
