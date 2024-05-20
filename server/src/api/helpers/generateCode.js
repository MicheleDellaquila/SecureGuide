function generateSixDigitCode() {
  let code = "";

  // generate a random number between 1 and 9
  for (let i = 0; i < 6; i++) {
    const digit = Math.floor(Math.random() * 9) + 1;
    code += digit.toString();
  }

  return code;
}

module.exports = { generateSixDigitCode };
