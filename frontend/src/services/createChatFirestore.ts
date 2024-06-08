import { firestore } from "@/configs/firebase";
import { Timestamp, collection, doc, setDoc } from "firebase/firestore";
import type { MessagesDB } from "@/types/types";

const createChatFirestore = async (title: string, messages: MessagesDB[], userID: string) => {
  try {
    const chatRef = doc(collection(firestore, "chats"));
    const chat = {
      uid: chatRef.id,
      title: title,
      messages: messages,
      userID: userID,
      createdAt: Timestamp.now(),
    };
    await setDoc(chatRef, chat);

    return { title, uid: chatRef.id, createdAt: chat.createdAt };
  } catch (error: any) {
    console.error(error);
    throw new Error("Errore nella creazione della chat");
  }
};

export default createChatFirestore;
