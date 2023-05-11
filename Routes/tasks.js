const express = require('express');
const Router = express.Router();
const tasks = require('../Controller/tasks');

Router.route('/').get(tasks.displayTasks);
Router.route('/add').post(tasks.addTask);
Router.route('/toggle').put(tasks.toggleCheck);
Router.route('/delete').delete(tasks.deleteTask);

module.exports = Router;
