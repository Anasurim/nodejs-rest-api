const nodemailer = require("nodemailer");

require("dotenv").config();

const { GMAIL_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "cliffcrystall@gmail.com",
    pass: GMAIL_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  try {
    await transport.sendMail({
      from: "cliffcrystall@gmail.com",
      to: data.to,
      subject: data.subject,
      html: data.html,
    });

    console.log("Email sent success");
  } catch (error) {
    console.error(error);
  }
};

module.exports = sendEmail;
