const model = require("../../../config/geminiConfig");

function sendQuestionToGemini(question, historyChat) {
  return new Promise(async (resolve, reject) => {
    try {
      const chat = model.startChat({
        historyChat,
      });

      const result = await chat.sendMessage(question);
      const response = result.response;
      resolve(response.text());
    } catch (error) {
      reject(error.message);
    }
  });
}

module.exports = sendQuestionToGemini;
