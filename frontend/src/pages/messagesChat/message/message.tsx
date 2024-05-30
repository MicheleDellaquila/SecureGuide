import type { HTMLProps } from "react";
import type { messageSender } from "@/types/types";
import "./message.scss";
import clsx from "clsx";

// Message props
interface MessageProps extends HTMLProps<HTMLDivElement> {
  text: string;
  sender: messageSender;
}

const Message = ({ text, sender }: MessageProps) => {
  return (
    <li className={clsx("Message", sender === "user" && "Message--user")}>
      <p className="Message__text">{text}</p>
    </li>
  );
};

export default Message;
