const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../../../config/database");
router.get("/blogpost", async (request, response) => {
  response.render(__dirname + "/views/blogpost.html");
});
router.post("/blogpost", async (request, response) => {
  const data = request.body;
  db.putUserData(data.name, data.information);
  response.json({ status: "Posted!" });
});
module.exports = router;
