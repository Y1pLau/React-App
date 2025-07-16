const express = require('express')
const taskController = require('../controllers/taskController.js');
router.get('/getAllTasks',taskController.getAllTasks);
router.post('/addTask',taskController.addTask);
module.exports = router;