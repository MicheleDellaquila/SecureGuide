const clearGeminiResponse = (text: string) => {
  return (
    text
      // Rimuovi i titoli e sottotitoli con ##
      .replace(/##\s(.+?)\n/g, "$1\n")
      // Rimuovi i sottotitoli con **
      .replace(/\*\*(\d+\..+?)\*\*\n/g, "$1\n")
      // Rimuovi i sottotitoli interni con **
      .replace(/\*\*(.+?)\*\*/g, "$1")
      // Rimuovi gli asterischi dei punti elenco
      .replace(/\*\s(.+?)(?=\n|$)/g, "$1")
      // Rimuovi eventuali escape characters per gli apici singoli
      .replace(/\\'/g, "'")
      // Rimuovi eventuali spazi bianchi multipli
      .replace(/\s+/g, " ")
      // Rimuovi gli spazi bianchi all'inizio e alla fine
      .trim()
  );
};

export default clearGeminiResponse;
