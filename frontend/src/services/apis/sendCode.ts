import { axiosInstance } from "../axios";

const sendCode = async (email: string) => {
  try {
    const response = await axiosInstance.post("/api/v1/email/send-code", { email });
    console.log(response.data)

    // check if response status
    if (response.status !== 200) throw new Error("Errore nell'invio del codice");

    return response.data;
  } catch (error: any) {
    throw new Error("Errore nell'invio del codice");
  }
};

export default sendCode;
