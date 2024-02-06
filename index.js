const express = require('express');
const app = express();

// CONFIG
require('dotenv').config();
const PORT = process.env.PORT;

// MIDDLEWARE
app.use(express.static('public'));

// ROUTES
app.get('/', (req, res) => {
    res.send('Hello Bread. Welcome to an Awesome App');
});

// BREADS ROUTES
app.use('/breads', require('./controllers/breads_controller'));

// 404 Page
app.get('*', (req, res) => {
    res.status(404).send('404. Page not found.');
});

// LISTEN
app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});
