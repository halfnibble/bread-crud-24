const express = require('express');
const router = express.Router();
const Bread = require('../models/bread');
const Baker = require('../models/baker');
const render = require('../render');

// New Route Form
router.get('/new', (req, res) => {
    Baker.find().then((bakers) => {
        // res.render('New', { bakers: bakers });
        res.send(render('New', { bakers: bakers }));
    });
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
router.get('/', async (req, res) => {
    const breads = await Bread.find().limit(10);
    const bakers = await Baker.find().limit(10).skip(0);

    // res.render('Index', { breads: breads, bakers: bakers });
    res.send(render('Index', { breads: breads, bakers: bakers }));
});

// List Route for a Baker
router.get('/bakers/:baker', (req, res) => {
    Bread.findByBaker(req.params.baker).then((breads) => {
        console.log(breads);
        // res.render('Index', { breads: breads });
        res.send(render('Index', { breads: breads, pageName: req.params.baker }));
    });
});

// Detail Route
router.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
        .populate('baker')
        .then((bread) => {
            console.log(bread);
            console.log(bread.getBakedBy());
            // res.render('Show', { bread: bread });
            res.send(render('Show', { bread: bread }));
        })
        .catch((err) => {
            res.status(404).send('Unable to find Timmy. :( <pre>' + err + '</pre>');
        });
});

// Edit Route Form
router.get('/:id/edit', (req, res) => {
    Bread.findById(req.params.id)
        .then((bread) => {
            Baker.find().then((bakers) => {
                // res.render('Edit', { bread: bread, bakers: bakers });
                res.send(render('Edit', { bread: bread, bakers: bakers }));
            });
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
