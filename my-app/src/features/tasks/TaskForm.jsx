
import { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { createTaskAsync } from './tasksSlice';
const TaskForm = function TaskForm() {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !dueDate) return;
    dispatch(createTaskAsync({task: { title, dueDate } }));
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
