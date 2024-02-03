const express = require('express');
const app = express();

// CONFIG
require('dotenv').config();
const PORT = process.env.PORT;
console.log(PORT);

// ROUTES
app.get('/', (req, res) => {
    res.send('Hello Bread. Welcome to an Awesome App');
});

// LISTEN
app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});
