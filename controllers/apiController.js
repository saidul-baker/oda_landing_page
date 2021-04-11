const Feedback = require("../feedbackModel");

exports.getFeedbackAPI = async (req, res) => {
  const feedback = await Feedback.find();

  res.status(200).json({
    status: "successful",
    Number_of_feedbacks: feedback.length,
    data: {
      feedback,
    },
  });
};

exports.deleteAll = async (req, res) => {
  await Feedback.deleteMany();

  res.status(200).json({
    status: "successfully deleted",
  });
};

exports.getFeedbackStats = async (req, res) => {
  const feedbackStats = await Feedback.aggregate([
    {
      $match: {},
    },
    {
      $group: {
        _id: "$email",
        feedbacks: { $push: "$feedback" },
        total_feedback: { $sum: 1 },
      },
    },
  ]);
  res.status(200).json({
    status: "success",
    total_emails: feedbackStats.length,
    data: {
      feedbackStats,
    },
  });
};
