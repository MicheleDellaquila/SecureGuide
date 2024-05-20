const { sendEmail } = require("../helpers/emailService");
const { generateSixDigitCode } = require("../helpers/generateCode");

const sendVerificationCode = async (req, res) => {
  try {
    const { email } = req.body;

    // check if email exists
    if (!email) throw new Error("Inserisci un email valida.");

    // send email with verification code
    const result = await sendEmail(email, generateSixDigitCode());

    // check if email was failed to send
    if (!result.success) throw new Error(result.message);

    res.status(200).json({ message: "Codice inviato via email." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { sendVerificationCode };
