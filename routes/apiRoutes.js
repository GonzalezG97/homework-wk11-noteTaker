const router = require('express').Router();

const Storage = require('../db/storage');

router.get('/api/notes', (req, res) => {
    Storage.getNote()
    .then((note) => res.json(note))
});

router.post('/api/notes/', (req, res) => {
    const newNote = req.body;
    Storage.writeNote(newNote)
    .then((note) => res.json(note))
});

module.exports = router;