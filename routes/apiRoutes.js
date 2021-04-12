const router = require('express').Router();

const Storage = require('../db/storage');

router.get('/api/notes', (req, res) => {
    Storage.getNote()
    .then((note) => res.json(note))
});

router.post('/api/notes/', (req, res) => {
    Storage.addNote()
    .then((note) => res.json(note))
});