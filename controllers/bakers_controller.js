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
        .populate({
            path: 'breads',
            options: { limit: 2 },
        })
        .then((baker) => {
            // res.render('BakerShow', { baker: baker});
            res.send(render('BakerShow', { baker: baker }));
        });
});

// Delete Route
router.delete('/:id', (req, res) => {
    Baker.findByIdAndDelete(req.params.id).then((deletedBaker) => {
        res.status(303).redirect('/breads');
    });
});

module.exports = router;
