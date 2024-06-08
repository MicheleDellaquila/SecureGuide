import type { Timestamp } from "firebase/firestore";

// types
export type messageSender = "user" | "model";

// interfaces
export interface Chat {
  uid: string;
  title: string;
  messages?: MessagesDB[];
  userID?: string;
  createdAt: Timestamp;
}

export interface Message {
  text: string;
  sender: messageSender;
}

export interface MessagesDB {
  question: string;
  answer: string;
}

interface conversationPart {
  text: string;
}

export interface HistoryChat {
  history: Array<{ role: messageSender; parts: conversationPart[] }>;
}
