import type { Timestamp } from "firebase/firestore";

// types
export type messageSender = "user" | "model";

// REDUCER TYPES ACTIONS
// Messages actions
type INITIALIZE_MESSAGES = { type: "INITIALIZE_MESSAGES"; payload: Array<Messages> };
type ADD_MESSAGE = { type: "ADD_MESSAGE"; payload: { text: string; sender: messageSender } };
type RESET_MESSAGES = { type: "RESET_MESSAGES" };
export type MessagesCtxAction = INITIALIZE_MESSAGES | ADD_MESSAGE | RESET_MESSAGES;

// Chats actions
type INITIALIZE_CHATS = { type: "INITIALIZE_CHATS"; payload: Array<Chat> };
type ADD_CHAT = { type: "ADD_CHAT"; payload: Chat };
type SELECT_CHAT = { type: "SELECT_CHAT"; payload: string | null };
export type ChatsCtxAction = ADD_CHAT | INITIALIZE_CHATS | SELECT_CHAT;

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

export interface ChatsCtxState {
  chats: Array<Chat>;
  chatSelected: string | null;
}
