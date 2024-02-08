const express = require('express');
const methodOverride = require('method-override');
const app = express();

// CONFIG
require('dotenv').config();
const PORT = process.env.PORT;

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

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
