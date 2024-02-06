const express = require('express');
const router = express.Router();
const Bread = require('../models/bread');
const render = require('../render');

// Breads Routes
router.get('/', (req, res) => {
    // res.render('Index', { breads: Bread });
    res.send(render('Index', { breads: Bread }));
});

router.get('/:arrayIndex', (req, res) => {
    // res.render('Show', { bread: Bread[req.params.arrayIndex]})
    res.send(render('Show', { bread: Bread[req.params.arrayIndex] }));
});

module.exports = router;
