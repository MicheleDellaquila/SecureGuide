import "./chatMessages.scss";
import { useMessagesCtx } from "@/context/messagesCtx/useMessagesCtx";
import useLoadChatMessage from "./hook/useLoadChatMessage";

// components
import MessagesNotFound from "./messagesNotFound/messagesNotFound";
import Message from "./message/message";

export const ChatMessages = () => {
  const { messages } = useMessagesCtx();
  useLoadChatMessage();

  // check if messages is empty
  if (messages.length === 0) return <MessagesNotFound />;

  return (
    <div className="MessagesChat">
      <ul className="MessagesChat__list">
        {messages.map((message, index) => (
          <Message key={index} {...message} />
        ))}
      </ul>
    </div>
  );
};
