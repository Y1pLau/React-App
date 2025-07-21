const express = require('express')
const taskController = require('../controllers/taskController.js');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
router.use(verifyToken);
router.get('/fetchTaskListByUserID',taskController.getAllTasks);
router.post('/createTask',taskController.createTask);
module.exports = router;