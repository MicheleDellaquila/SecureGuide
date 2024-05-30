import { useCallback, useState } from "react";
import { Messages, type messageSender } from "@/types/types";

const useMessages = () => {
  const [messages, setMessages] = useState<Messages[]>([]);

  // add message
  const addMessage = useCallback((message: string, sender: messageSender) => {
    setMessages(prevMessages => [...prevMessages, { text: message, sender }]);
  }, []);

  return { messages, addMessage };
};

export default useMessages;
