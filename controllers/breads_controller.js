const express = require('express');
const router = express.Router();

// Breads Routes
router.get('/', (req, res) => {
    res.send('This is the index at /breads');
});

module.exports = router;
