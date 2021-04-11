const express = require("express");
const apiController = require("../controllers/apiController");

const router = express.Router();

router
  .route("/feedback")
  .get(apiController.getFeedbackAPI)
  .delete(apiController.deleteAll);
router.route("/feedback/stats").get(apiController.getFeedbackStats);

module.exports = router;
