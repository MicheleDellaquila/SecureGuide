import "./chat.scss";
import type { Timestamp } from "firebase/firestore";
import moment from "moment";
import clsx from "clsx";
import useSelectChat from "./hook/useSelectChat";
moment.locale("it");

// Chat props
interface ChatProps {
  uid: string;
  title: string;
  timestamps: Timestamp;
  isSelected: boolean;
}

const Chat = ({ uid, title, timestamps, isSelected }: ChatProps) => {
  const { selectChat } = useSelectChat();

  return (
    <div className={clsx("Chat", isSelected && "Chat--selected")} onClick={() => selectChat(uid)}>
      <h5 className="Chat__title">{title}</h5>
      <p className="Chat__date">{moment(timestamps.toDate()).format("ll").toString()}</p>
    </div>
  );
};

export default Chat;
