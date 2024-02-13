const express = require('express');
const router = express.Router();
const Bread = require('../models/bread');
const render = require('../render');

// New Route Form
router.get('/new', (req, res) => {
    // res.render('New');
    res.send(render('New'));
});

// Create Route
router.post('/', (req, res) => {
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true;
    } else {
        req.body.hasGluten = false;
    }
    Bread.create(req.body);
    res.redirect('/breads');
});

// List Route
router.get('/', (req, res) => {
    // res.render('Index', { breads: Bread });
    // res.send(render('Index', { breads: Bread }));

    Bread.find().then((breads) => {
        console.log(breads);
        // res.render('Index', { breads: breads });
        res.send(render('Index', { breads: breads }));
    });
});

// Detail Route
router.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
        .then((bread) => {
            // res.render('Show', { bread: bread });
            res.send(render('Show', { bread: bread }));
        })
        .catch((err) => {
            res.status(404).send('Unable to find Timmy. :(');
        });
});

// Edit Route Form
router.get('/:arrayIndex/edit', (req, res) => {
    // res.render('Edit', { bread: Bread[req.params.arrayIndex], index: req.params.arrayIndex });
    res.send(render('Edit', { bread: Bread[req.params.arrayIndex], index: req.params.arrayIndex }));
});

// Edit Route
router.put('/:arrayIndex', (req, res) => {
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true;
    } else {
        req.body.hasGluten = false;
    }
    Bread[req.params.arrayIndex] = req.body;
    console.log(req.body);
    res.redirect('/breads');
});

// Delete Route
router.delete('/:arrayIndex', (req, res) => {
    Bread.splice(req.params.arrayIndex, 1);
    res.redirect('/breads');
});

module.exports = router;
