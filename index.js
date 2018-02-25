const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Have a great weekend everyone!');
});

app.listen(5000);
