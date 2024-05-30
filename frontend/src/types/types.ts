import type { Timestamp } from "firebase/firestore";

// types
export type messageSender = "user" | "model";

// interfaces
export interface Chat {
  uid: string;
  title: string;
  messages: Messages[];
  userID: string;
  createdAt: Timestamp;
}

export interface Messages {
  text: string;
  sender: messageSender;
}

export interface MessagesDB {
  question: string;
  answer: string;
}