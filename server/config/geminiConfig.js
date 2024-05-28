const { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } = require("@google/generative-ai");

// access to google generative AI API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// get the generative model
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: {
    parts: [
      {
        text: "Answer the questions thoroughly, referring to the Privacy Knowledge Base and the GDPR guidelines applicable to the specific context presented. Begin with a concise answer that directly addresses the question. After the initial answer, provide practical examples of how “privacy by design” principles can be implemented.",
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
