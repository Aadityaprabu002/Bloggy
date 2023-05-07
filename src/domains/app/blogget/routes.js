const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../../../config/database");
const { isUndefined } = require("util");
router.get("/blogget", async (request, response) => {
  response.render(__dirname + "/views/blogget.html");
});
router.post("/blogget", async (request, response) => {
  const data = request.body;
  const user = db.getUserData(data.name);
  var resData = {};
  if (user != null) {
    resData.name = user["name"];
    resData.information = user["information"];
  }
  response.json(resData);
});
module.exports = router;
