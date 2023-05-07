const express = require("express");
const router = express.Router();
const blogpostRoutes = require("./../domains/app/blogpost");
const bloggetRoutes = require("./../domains/app/blogget");
router.use("/app", blogpostRoutes);
router.use("/app", bloggetRoutes);
module.exports = router;
