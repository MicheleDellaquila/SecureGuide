import { getDocReference, saveData } from "@/services/firebaseQuery";


const useCreateChat = () => {
  // context fn

  // create chat
  const createChat = () => {
    try {
      // await saveData(getDocReference("chats"), )
    } catch (error) {
      console.error(error);
      throw new Error("Errore durante la creazione della chat");
    }
  };
};

export default useCreateChat;
