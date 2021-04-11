const express = require("express");
const bodyParser = require("body-parser");
const viewRouter = require("./routes/viewRoutes");
const apiRouter = require("./routes/apiRoutes");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/", viewRouter);
app.use("/api", apiRouter);

app.all("*", (req, res, next) => {
  res.status(404).render("error");
});
module.exports = app;
