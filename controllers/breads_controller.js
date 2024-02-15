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
    if (req.body.image === '') {
        delete req.body.image;
    }
    Bread.create(req.body)
        .then(() => {
            res.redirect('/breads');
        })
        .catch((err) => res.status(400).send(`Unable to save bread, reason: ${err.message}`));
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
router.get('/:id/edit', (req, res) => {
    Bread.findById(req.params.id)
        .then((bread) => {
            // res.render('Edit', { bread: bread });
            res.send(render('Edit', { bread: bread }));
        })
        .catch((err) => {
            res.status(404).send('Unable to find Timmy. :(');
        });
});

// Edit Route
router.put('/:id', (req, res) => {
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true;
    } else {
        req.body.hasGluten = false;
    }
    if (req.body.image === '') {
        delete req.body.image;
    }
    Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedBread) => {
            console.log(updatedBread);
            res.redirect(`/breads/${updatedBread.id}`);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send(`Unable to update, reason: ${err.message}`);
        });
});

// Delete Route
router.delete('/:id', (req, res) => {
    Bread.findByIdAndDelete(req.params.id)
        .then((deletedBread) => {
            res.status(303).redirect('/breads');
        })
        .catch((err) => {
            console.log(err);
            res.status(404).send('Unable to delete Timmy. :(');
        });
});

module.exports = router;
