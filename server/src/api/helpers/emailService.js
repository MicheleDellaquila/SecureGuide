const transporter = require("../config/nodemailerConfig");

const sendEmail = async (email, code) => {
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: "Il tuo codice di verifica",
    text: `Il tuo codice di verifica è: ${code}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email inviata con successo!" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

module.exports = { sendEmail };
