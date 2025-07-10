
import React, { useState, useContext ,memo} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TaskContext } from '../context/TaskContext';

const TaskForm=memo(function TaskForm() {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [isDone, setDone] = useState(false);
  const {taskDispatch} = useContext(TaskContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !dueDate) return;
    taskDispatch({ type: 'ADD_TASK', payload: {'title': title, 'dueDate': dueDate,'isDone': isDone} });
    setTitle('');
    setDueDate('');
  };

  return (
      <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="Title">Title</label>
            <input
              type="text"
              id="Title"
              class="form-control"
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div class="form-group">
          <label for="DueDate">Due Date</label>
            <input
              type="date"
              id="DueDate"
              class="form-control"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        <button type="submit" class="btn btn-primary">Add Task</button>
      </form>
  );
})

export default TaskForm;
