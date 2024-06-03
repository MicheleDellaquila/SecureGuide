interface formatGeminiAnswerResponse {
  title: string;
  newAnswer: string;
}

// format gemini answer
export const formatGeminiAnswer = (answer: string): formatGeminiAnswerResponse => {
  try {
    const titleRegex = /^## (.+)\n\n/;
    const match = answer.match(titleRegex);

    // check if match is found
    if (!match) throw new Error("Errore nella ");

    const title = match[1];
    const newAnswer = answer.replace(titleRegex, "").replace(/\*/g, "");
    return { title, newAnswer };
  } catch (error: any) {
    throw error;
  }
};

// Funzione helper per convertire i link markdown in tag <a>
const linkifyMarkdown = (text: string) => {
  const markdownLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\)/g;
  return text.replace(markdownLinkRegex, (match, text, url) => `<a href="${url}" target="_blank">${text}</a>`);
};

export const convertAnswerTextToHtml = (text: string) => {
  const lines = text.split("\n");
  let response = "";
  let isInList = false;

  // Loop through the lines to build the response
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    // Converti i link markdown nel testo
    line = linkifyMarkdown(line);

    // Check if the line is a title (Assuming titles are followed by ":")
    if (line.endsWith(":")) {
      // Handle bold text by converting to paragraph with bold text
      if (isInList) {
        response += "</ul>";
        isInList = false;
      }
      response += `<p><strong>${line}</strong></p>`;
    } else if (line.startsWith("* ")) {
      // Handle list items
      if (!isInList) {
        response += "<ul>";
        isInList = true;
      }
      response += `<li>${line.replace("* ", "").trim()}</li>`;
    } else {
      // Handle regular lines
      if (isInList) {
        response += "</ul>";
        isInList = false;
      }
      if (line) {
        response += `<p>${line}</p>`;
      }
    }
  }

  // Close any open lists
  if (isInList) {
    response += "</ul>";
  }

  return response;
};
