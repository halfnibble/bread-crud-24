const express = require('express');
const router = express.Router();
const Baker = require('../models/baker');
const render = require('../render'); // Only if using custom render

router.get('/', (req, res) => {
    Baker.find()
        .populate('breads')
        .then((bakers) => {
            res.send(bakers);
        });
});

router.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate('breads')
        .then((baker) => {
            // res.render('BakerShow', { baker: baker});
            res.send(render('BakerShow', { baker: baker }));
        });
});

module.exports = router;
