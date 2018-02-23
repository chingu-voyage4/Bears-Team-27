const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('WHATSUP!!');
});

app.listen(5000);
