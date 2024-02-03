const express = require('express');
const app = express();

// CONFIG
require('dotenv').config();
const PORT = process.env.PORT;

// ROUTES
app.get('/', (req, res) => {
    res.send('Hello Bread. Welcome to an Awesome App');
});

// BREADS ROUTES
app.use('/breads', require('./controllers/breads_controller'));

// LISTEN
app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});
