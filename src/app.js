const express = require("express");
const app = express();

app.use("/", express.static("src/static"));
app.use("*", express.static("src/static/404"));

module.exports = app;
