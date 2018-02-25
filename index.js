const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Yeah for Sunday FUNday");
});

app.listen(5000);
