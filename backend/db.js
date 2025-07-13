// server.js (CommonJS)
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Task = require('./models/Task');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  console.log(req.body)
  const task = new Task(req.body);
  await task.save();
  res.status(201).json(task);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
