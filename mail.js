const nodemailer = require("nodemailer");
const mailgun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
};

const transporter = nodemailer.createTransport(mailgun(auth));

const sendMail = (email, subject, text) => {
  const mailOptions = {
    from: email,
    to: "sajidulkabiradib@gmail.com",
    subject: subject,
    text,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) console.log("error");
    else console.log("email sent");
  });
};

module.exports = sendMail;
