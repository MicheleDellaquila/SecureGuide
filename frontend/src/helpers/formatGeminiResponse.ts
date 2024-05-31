const formatGeminiResponse = (text: string) => {
  const lines = text.split("\n");
  let title = "";
  let response = "";
  let isInList = false;

  // Loop through the lines to build the response
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    // Check if the line is a title
    if (line.startsWith("## ") && title === "") {
      title = line.replace("## ", "").trim(); // Save title
    } else if (line.startsWith("**") && line.endsWith("**")) {
      // Handle bold text by converting to paragraph with bold text
      if (isInList) {
        response += "</ul>";
        isInList = false;
      }
      response += `<p><strong>${line.replace(/\*\*/g, "").trim()}</strong></p>`;
    } else if (line.startsWith("* ")) {
      // Handle list items
      if (!isInList) {
        response += "<ul>";
        isInList = true;
      }
      response += `<li>${line.replace("* ", "").replace(/\*\*/g, "").trim()}</li>`;
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

  return {
    title,
    html: `${response}`,
  };
};

export default formatGeminiResponse;
