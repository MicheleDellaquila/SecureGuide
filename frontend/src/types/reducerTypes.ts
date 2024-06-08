import type { Message, Chat } from "./types";
import type { messageSender } from "./types";

// Messages Reducer
type INITIALIZE_MESSAGES = { type: "INITIALIZE_MESSAGES"; payload: Message[] };
type ADD_MESSAGE = { type: "ADD_MESSAGE"; payload: { text: string; sender: messageSender } };
type RESET_MESSAGES = { type: "RESET_MESSAGES" };
export type MessagesCtxAction = INITIALIZE_MESSAGES | ADD_MESSAGE | RESET_MESSAGES;

export interface MessagesCtxsState {
  messages: Message[];
}

// Chats Reducer
type INITIALIZE_CHATS = { type: "INITIALIZE_CHATS"; payload: Chat[] };
type ADD_CHAT = { type: "ADD_CHAT"; payload: Chat };
type SELECT_CHAT = { type: "SELECT_CHAT"; payload: string | null };
export type ChatsCtxAction = ADD_CHAT | INITIALIZE_CHATS | SELECT_CHAT;

export interface ChatsCtxState {
  chats: Chat[];
  chatSelected: string | null;
}
