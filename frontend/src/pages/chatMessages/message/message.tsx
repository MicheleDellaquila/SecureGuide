import type { HTMLProps } from "react";
import type { messageSender } from "@/types/types";
import "./message.scss";
import clsx from "clsx";
import DOMPurify from "dompurify";
import { convertAnswerTextToHtml } from "@/helpers/formatAnswer";

// components
import Logo from "@/components/ui/logo/logo";
import LoadingDots from "@/containers/loadingDots/loadingDots";

// Message props
interface MessageProps extends HTMLProps<HTMLDivElement> {
  text: string;
  sender: messageSender;
}

const Message = ({ text, sender }: MessageProps) => {
  const sanitizedHtml = sender === "model" ? DOMPurify.sanitize(convertAnswerTextToHtml(text)) : "";

  return (
    <li className={clsx("Message", sender === "user" ? "Message--user" : "Message--model")}>
      {sender === "model" && <Logo width={36} height={36} className="Message__logo" />}
      {sender === "user" && <p className="Message__text">{text}</p>}
      {sender === "model" && text === "..." && <LoadingDots />}
      {sender === "model" && text !== "..." && (
        <div className="Message__prose" dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
      )}
    </li>
  );
};

export default Message;
