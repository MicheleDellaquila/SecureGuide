import { firestore } from "@/services/firebase";
import {
  type QueryConstraint,
  type CollectionReference,
  type DocumentReference,
  type DocumentData,
  doc,
  getDoc,
  query,
  getDocs,
  setDoc,
} from "firebase/firestore";

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
    return resourceRef;
  } catch (error) {
    throw error;
  }
};

export const getDocsData = async <T>(
  collectionRef: CollectionReference,
  queryParams?: QueryConstraint | QueryConstraint[],
) => {
  try {
    // Convert queryParams to an array if it's not already
    const queryConstraints = queryParams ? (Array.isArray(queryParams) ? queryParams : [queryParams]) : [];

    // Get all documents from the collection
    const querySnapshot = query(collectionRef, ...queryConstraints);
    const docsData = await getDocs(querySnapshot);

    return [...docsData.docs.map(doc => ({ documentId: doc.id, ...(doc.data() as T) }))];
  } catch (error) {
    throw error;
  }
};

export const saveData = async (docRef: DocumentReference<DocumentData, DocumentData>, data: unknown) => {
  try {
    await setDoc(docRef, data);
  } catch (error) {
    throw error;
  }
};
