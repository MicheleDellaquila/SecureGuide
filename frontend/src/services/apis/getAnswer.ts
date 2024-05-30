import { axiosInstance } from "../axios";
import type { HistoryChat } from "@/types/types";
import clearGeminiResponse from "@/helpers/clearGeminiResponse";

const getAnswer = async (question: string, historyChat: HistoryChat[] | []) => {
  try {
    const response = await axiosInstance("/api/v1/answer/", {
      method: "POST",
      data: {
        question,
        historyChat,
      },
    });

    // check if response is successful
    if (response.status !== 200 && !response.data) throw new Error("Errore nella generazione della risposta");

    return clearGeminiResponse(response.data.answer);
  } catch (error) {
    throw error;
  }
};

export default getAnswer;
