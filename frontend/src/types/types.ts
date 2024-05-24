import type { Timestamp } from "firebase/firestore";



export interface Chat {
  documentId: string;
  title: string;
  timestamps: Timestamp;
  userId: string;
}
