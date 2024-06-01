import type { Message, MessagesDB } from "@/types/types";

// convert messages from firestore to chat messages
export const ConvertMessageFirestore = (messages: MessagesDB[]): Message[] => {
  return messages.flatMap(message => {
    return [
      { text: message.question, sender: "user" },
      { text: message.answer, sender: "model" },
    ];
  });
};

// convert messages to history chat
export const convertMessagesToHistoryChat = (messages: Message[]) => {
  // check if messages is empty
  if (messages.length === 0) return [];

  const history = messages.reduce(
    (curr, message) => {
      const messageSender = message.sender;

      // check if the sender message
      if (messageSender === "user") {
        curr[0] = { ...curr[0], parts: [...curr[0].parts, { text: message.text }] };
      } else {
        curr[1] = { ...curr[1], parts: [...curr[1].parts, { text: message.text }] };
      }

      return curr;
    },
    [
      { role: "user", parts: [] },
      { role: "model", parts: [] },
    ] as any,
  );

  return history;
};
