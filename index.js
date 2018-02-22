const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Good morning Bears!');
});

app.listen(5000);
