const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  feedback: {
    type: String,
    maxlength: [200, "max length exceeded"],
    trim: true,
  },
});
const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;
