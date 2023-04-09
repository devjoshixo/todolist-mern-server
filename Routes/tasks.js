const express = require('express');
const router = express.router();
const tasks = require('../Controller/tasks');

router.route('/').get(tasks.displayTasks);
router.route('/add').post(tasks.addTask);
router.route('/delete').delete(tasks.deleteTask);
