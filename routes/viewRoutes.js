const express = require("express");
const viewsController = require("../controllers/viewsController");

const router = express.Router();

router.route("/").get(viewsController.home);
router.route("/about").get(viewsController.about);
router
  .route("/contact")
  .get(viewsController.contact)
  .post(viewsController.postContact);

module.exports = router;
