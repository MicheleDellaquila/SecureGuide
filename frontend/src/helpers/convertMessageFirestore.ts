import type { Messages, MessagesDB } from "@/types/types";

const ConvertMessageFirestore = (messages: MessagesDB[]): Messages[] => {
  return messages.flatMap(message => {
    return [
      { text: message.question, sender: "user" },
      { text: message.answer, sender: "model" },
    ];
  });
};

export default ConvertMessageFirestore;
