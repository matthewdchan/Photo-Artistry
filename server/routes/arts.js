const express = require('express');
const router = express.Router();
const Art = require('../models/Art');
var bodyParser = require("body-parser");
const mongoose = require('mongoose');

// @route POST /arts
router.post('/', bodyParser.json(), (req, res) => {
    const newArt = {
        name: req.body.name,
        img: req.body.img,
        artist: req.body.artist,
        date: req.body.date,
        identifier: Math.random().toString(),
    };
    Art.create(newArt)
    .then((art) => res.json({ msg: 'Art piece added successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to add this art piece' }));
});

// @route GET arts
router.get('/', (req, res) => {
    Art.find()
    .then((arts) => res.json(arts))
    .catch((err) => res.status(404).json({ noitemfound: 'No art pieces found' }));
});

// @route GET arts/:id
router.get('/:id', (req, res) => {
    const artId = req.params.id;
    console.log('request for art with id:', artId);
    Art.findById(artId)
    .then((art) => res.json(art))
    .catch((err) => res.status(404).json({ noitemfound: 'No matching art piece found' }));
});

// @route PUT arts/:id
router.put('/:id', (req, res) => {
    Art.findByIdAndUpdate(req.params.id, req.body)
    .then((art) => res.json({ msg: 'Updated successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to update the database' }));
});

// @route DELETE arts/:id
router.delete('/:id', (req, res) => {
    Art.findByIdAndDelete(req.params.id)
    .then((art) => res.json({ msg: 'Art piece deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No such an art piece found' }));
});

module.exports = router;