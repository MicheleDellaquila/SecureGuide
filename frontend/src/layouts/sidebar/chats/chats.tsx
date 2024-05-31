import "./chats.scss";
import { useChatsCtx } from "@/context/chatsCtx/useChatsCtx";

// components
import Chat from "./chat/chat";
import ChatsNotFound from "./chatsNotFound/chatsNotFound";

// chats props
interface ChatsProps {
  isMobile: boolean;
  onClose?: () => void;
}

const Chats = ({ isMobile, onClose }: ChatsProps) => {
  const { chats, chatSelected } = useChatsCtx();

  // check if there are no chats
  if (chats.length === 0) return <ChatsNotFound isMobile={isMobile} onClose={onClose} />;

  return (
    <ul className="Chats">
      {chats.map(chat => {
        const isSelected = chatSelected === chat.uid;

        return (
          <Chat key={chat.uid} uid={chat.uid} title={chat.title} timestamps={chat.createdAt} isSelected={isSelected} />
        );
      })}
    </ul>
  );
};

export default Chats;
