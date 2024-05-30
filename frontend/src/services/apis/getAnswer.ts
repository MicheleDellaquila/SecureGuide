import { axiosInstance } from "../axios";
import type { Messages } from "@/types/types";
import formatGeminiResponse from "@/helpers/formatGeminiResponse";

const getAnswer = async (question: string, historyChat: Messages[] | []) => {
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

    return formatGeminiResponse(response.data.answer);
  } catch (error) {
    throw error;
  }
};

export default getAnswer;
