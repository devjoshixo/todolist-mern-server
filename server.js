const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('server opened');
});

app.listen(5000, (req, res) => {
  console.log('Hello');
});
