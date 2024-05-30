const formatGeminiResponse = (text: string) => {
  const lines = text.split("\n");
  let title = "";
  let response = "";

  // Loop through the lines to find the title and build the response
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Check if the line is a title
    if (line.startsWith("## ") && title === "") {
      title = line.replace("## ", "");
    } else {
      // Remove asterisks and add the line to the response
      line = line.replace(/\*/g, "").trim();
      if (line) {
        response += line + "\n";
      }
    }
  }

  return {
    title: title,
    response: response.trim(),
  };
};

export default formatGeminiResponse;
