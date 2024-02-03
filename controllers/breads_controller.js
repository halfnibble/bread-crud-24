const express = require('express');
const router = express.Router();
const Bread = require('../models/bread');
const render = require('../render');

// Breads Routes
router.get('/', (req, res) => {
    res.send(render('Index', { breads: Bread }));
});

router.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex]);
});

module.exports = router;
