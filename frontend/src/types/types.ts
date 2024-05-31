import type { Timestamp } from "firebase/firestore";

// types
export type messageSender = "user" | "model";

// reducer types
type ADD_MESSAGE = { type: "ADD_MESSAGE"; payload: { text: string; sender: messageSender } };
type RESET_MESSAGES = { type: "RESET_MESSAGES" };
export type MessagesCtxAction = ADD_MESSAGE | RESET_MESSAGES;

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

export interface MessagesCtxsState {
  messages: Array<Messages>;
}
