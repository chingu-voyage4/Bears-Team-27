const express = require('express');
const mongoose = require('mongoose');

const app = express();
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(5000);
