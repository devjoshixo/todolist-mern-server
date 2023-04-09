const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: { type: String, required: true },
  checked: { type: Boolean },
});

const Tasks = mongoose.model('Tasks', taskSchema);

module.exports = Tasks;
