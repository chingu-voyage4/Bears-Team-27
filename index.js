const express = require('express');
const mongoose = require('mongoose');

const app = express();
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
