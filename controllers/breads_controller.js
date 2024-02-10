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
    Bread.push(req.body);
    res.redirect('/breads');
});

// List Route
router.get('/', (req, res) => {
    // res.render('Index', { breads: Bread });
    res.send(render('Index', { breads: Bread }));
});

// Detail Route
router.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
        // res.render('Show', { bread: Bread[req.params.arrayIndex], index: req.params.arrayIndex })
        res.send(
            render('Show', { bread: Bread[req.params.arrayIndex], index: req.params.arrayIndex })
        );
    } else {
        res.status(404).send('404. Bread not found.');
    }
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
