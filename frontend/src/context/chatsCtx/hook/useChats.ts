import { useState, useRef, useEffect, useCallback } from "react";
import type { Chat } from "@/types/types";
import { collection } from "firebase/firestore";
import { getDocsData } from "@/services/firebaseQuery";
import { firestore } from "@/services/firebase";
import { toast } from "react-toastify";

const useChats = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const initialRender = useRef(false);

  // get all chats
  const getChats = useCallback(async () => {
    try {
      const chatsData = await getDocsData<Chat>(collection(firestore, "chats"));
      setChats([...chatsData]);
    } catch (error: any) {
      console.error(error);
      toast.error(error.message);
    }
  }, []);

  useEffect(() => {
    if (!initialRender.current) {
      getChats();
      initialRender.current = true;
    }
  }, [getChats]);

  return { chats };
};

export default useChats;
