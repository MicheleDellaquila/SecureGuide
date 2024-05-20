import { firestore } from "@/services/firebase";
import { doc, getDoc } from "firebase/firestore";

export const getUser = async (userId: string) => {
  try {
    const userRef = doc(firestore, "users", userId);
    const userSnap = await getDoc(userRef);
    return userSnap.data();
  } catch (error) {
    throw error;
  }
};

export const getDocReference = async (collectionName: string, docUid?: string) => {
  try {
    const documentUid = docUid || "";
    const resourceRef = doc(firestore, collectionName, documentUid);
    return resourceRef
  } catch (error) {
    throw error;
  }
}