import type { Timestamp } from "firebase/firestore";

// types
export type messageSender = "user" | "model";

// interfaces
export interface Chat {
  documentId: string;
  title: string;
  timestamps: Timestamp;
  userId: string;
}

export interface Messages {
  text: string;
  answer?: string;
  sender: messageSender;
}

export interface HistoryChat {
  text: string;
  sender: messageSender;
}
