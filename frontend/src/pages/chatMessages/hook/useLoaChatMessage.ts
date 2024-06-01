import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useMessagesActionCtx } from "@/context/messagesCtx/useMessagesCtx";
import { getDocReference } from "@/services/firebaseQuery";
import { getDoc } from "firebase/firestore";
import { ConvertMessageFirestore } from "@/helpers/convertMessages";

const useLoaChatMessage = () => {
  const { chatId } = useParams();
  const { dispatch } = useMessagesActionCtx();

  // load chat messages
  const loadChatMessages = useCallback(async () => {
    try {
      if (!chatId) return;

      const messageRef = getDocReference("chats", chatId);
      const messageData = await getDoc(messageRef);

      // check if message data exists
      if (!messageData.exists()) return;

      dispatch({ type: "INITIALIZE_MESSAGES", payload: ConvertMessageFirestore(messageData.data().messages) });
    } catch (error: any) {
      console.error(error);
      toast.error(error.message);
    }
  }, [chatId]);

  useEffect(() => {
    loadChatMessages();
  }, [loadChatMessages]);
};

export default useLoaChatMessage;
