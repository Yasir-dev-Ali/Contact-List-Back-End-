const express = require('express');
const app = express();

// Load env variables
require('dotenv').config();

// Middleware
app.use(express.json());

// Database connection
const connectDB = require('./config/Connection.js');
connectDB();

const port = process.env.PORT || 5000;


// Route
const contactRoute = require('./Route/contact.route');
const errorHandler = require('./Middleware/error.handler');

app.use('/api/contact', contactRoute);
app.use(errorHandler);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
