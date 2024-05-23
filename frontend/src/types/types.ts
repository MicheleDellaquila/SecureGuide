import type { Timestamp } from "firebase/firestore";

export interface chatsContext {
  chats: Chat[];
}

export interface Chat {
  documentId: string;
  title: string;
  timestamps: Timestamp;
  userId: string;
}
