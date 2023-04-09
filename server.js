const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(
  'mongodb+srv://admin-dev:Test123@cluster0.iemhubj.mongodb.net/todolistDB'
);

app.get('/', (req, res) => {
  res.send('working');
});

app.listen(5000, (req, res) => {
  console.log('Hello');
});
