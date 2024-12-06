const express = require("express");
const router = express.Router();
const {
  getStyles,
  getStyle,
  addStyle,
} = require("../controllers/aboutStylesController");

router.get("/", getStyles); // Get all styles
router.get("/:id", getStyle); // Get a style by ID
router.post("/add", addStyle); // Add a new style

module.exports = router;
