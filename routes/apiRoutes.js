// Dependencies
const router = require("express").Router();
const Storage = require("../db/storage");

// route to retrive notes
router.get("/api/notes", (req, res) => {
  Storage.getNote().then((note) => res.json(note));
});

// route to post notes
router.post("/api/notes/", (req, res) => {
  const newNote = req.body;
  Storage.writeNote(newNote).then((note) => res.json(note));
});

module.exports = router;
