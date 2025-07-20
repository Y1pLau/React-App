const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  dueDate: { type: String, required: true },
  isDone: { type: Boolean, default: false },
  userID: { type: mongoose.Schema.Types.ObjectId,  ref: 'User', required: true },
});

module.exports = mongoose.model('Task', TaskSchema);