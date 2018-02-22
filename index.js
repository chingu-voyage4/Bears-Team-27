const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello Bears-27!<br>Let's rock and roll!");
});

app.listen(5000);
