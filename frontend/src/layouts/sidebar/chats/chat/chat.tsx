import "./chat.scss";
import type { Timestamp } from "firebase/firestore";
import moment from "moment";
moment.locale("it");

// Chat props
interface ChatProps {
  title: string;
  timestamps: Timestamp;
}

const Chat = ({ title, timestamps }: ChatProps) => {
  return (
    <div className="Chat">
      <h5 className="Chat__title">{title}</h5>
      <p className="Chat__date">{moment(timestamps.toDate()).format("ll").toString()}</p>
    </div>
  );
};

export default Chat;
