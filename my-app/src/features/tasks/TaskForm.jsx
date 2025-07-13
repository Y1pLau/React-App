
import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {addTask} from './tasksSlice';
import { useDispatch } from 'react-redux';
const TaskForm = function TaskForm() {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [isDone, setDone] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !dueDate) return;
    dispatch(addTask({  'title': title, 'dueDate': dueDate, 'isDone': isDone } ));
    setTitle('');
    setDueDate('');

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="Title">Title</label>
        <input
          type="text"
          id="Title"
          className="form-control"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="DueDate">Due Date</label>
        <input
          type="date"
          id="DueDate"
          className="form-control"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
}

export default TaskForm;
