const router = require('express').Router();

const storage = require('../db/storage');

router.get('/api/notes', (req, res) => {
    storage.getNote()
    .then((note) => res.json(note))
});

