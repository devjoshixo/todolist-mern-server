const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    'mongodb+srv://admin-dev:Test123@cluster0.iemhubj.mongodb.net/todolistDB'
  )
  .then(() => {
    console.log('Connected to mongodb database');
  })
  .catch((e) => {
    console.log(e);
  });

const port = process.env.PORT || 5000;

const tasks = require('./Routes/tasks');

app.use('/tasks', tasks);

app.listen(port, (req, res) => {
  console.log(`started server on port ${port}`);
});
