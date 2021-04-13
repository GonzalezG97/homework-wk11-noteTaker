// Dependencies
const router = require("express").Router();
const path = require("path");
const fs = require("fs");

// Route to default page
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Route to the notes page
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;
