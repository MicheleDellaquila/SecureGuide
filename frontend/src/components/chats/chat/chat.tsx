import "./chat.css";
import type { Timestamp } from "firebase/firestore";

// Chat props
interface ChatProps {
  title: string;
  timestamps: Timestamp;
}

const Chat = ({ title, timestamps }: ChatProps) => {
  return (
    <div className="Chat">
      <h5 className="Chat__title">{title}</h5>
      <p className="Chat__date">{timestamps.toDate().toISOString()}</p>
    </div>
  );
};

export default Chat;
