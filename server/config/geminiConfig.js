const { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } = require("@google/generative-ai");

// access to google generative AI API
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// get the generative model
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: {
    parts: [
      {
        text: "Answer the questions in detail according to the Privacy Knowledge Base and GDPR, depending on the context of the sentence. After giving a short answer, provide examples of implementation according to privacy by design.",
      },
    ],
    role: "model",
  },
  safetySettings: [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ],
});

module.exports = model;
