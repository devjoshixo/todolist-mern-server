const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(
  'mongodb+srv://admin-dev:Test123@cluster0.iemhubj.mongodb.net/todolistDB'
);

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('working');
});

app.listen(port, (req, res) => {
  console.log(`started server on port ${port}`);
});
