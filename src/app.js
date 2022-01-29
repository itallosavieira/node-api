const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Connect with db
mongoose.connect('mongodb+srv://itallo:itallo@cluster0.iwrnr.mongodb.net/ndstr');

// Load Models
const Product = require('./models/product')

// Load Routes
const indexRoute = require('./routes/index');
const productsRoutes = require('./routes/products');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productsRoutes);

module.exports = app;