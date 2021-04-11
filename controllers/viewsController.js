const Feedback = require("../feedbackModel");
const sendMail = require("../mail");

exports.home = (req, res) => {
  res.status(200).render("index");
};

exports.about = (req, res) => {
  res.status(200).render("about");
};

exports.contact = (req, res) => {
  res.status(200).render("contact");
};

exports.postContact = (req, res) => {
  const email = req.body.email;
  const feedback = req.body.feedback;
  const name = req.body.userName;
  const mobile = req.body.phone;

  Feedback.create({
    name,
    email,
    mobile,
    feedback,
  });
  console.log("doc created");

  sendMail(email, "ODA feedback", feedback);

  res.redirect("/");
};
