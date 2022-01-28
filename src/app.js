const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Load Routes
const indexRoute = require('./routes/index');
const productsRoutes = require('./routes/products');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productsRoutes);

module.exports = app;