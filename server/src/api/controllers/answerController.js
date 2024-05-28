const sendQuestionToGemini = require("../services/sendQuestionToGemini");

const getAnswer = async (req, res) => {
  try {
    const { question, historyChat } = req.body;

    // check if question is provided
    if (!question) throw new Error("Inserisci una domanda");

    // send question to Gemini and get the answer
    const answer = await sendQuestionToGemini(question, historyChat);

    // check if answer is provided
    if (!answer) throw new Error("Risposta non disponibile");

    res.status(200).send({ answer });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

module.exports = getAnswer;
