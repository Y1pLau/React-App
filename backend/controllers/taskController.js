const Task = require('../models/Task');
const mongoose = require('mongoose');
exports.createTask=async (req,res)=>{
    const { title, dueDate } = req.body;
    const userID = req.user.id || req.user._id || req.user.userID;
    const task= new Task({title,dueDate,userID});
    await task.save();
    res.status(201).json(task);
}
exports.getAllTasks=async (req,res)=>{
    const userID = req.user.id || req.user._id || req.user.userID;
    const tasks=await Task.find({userID});
    res.json(tasks);
}