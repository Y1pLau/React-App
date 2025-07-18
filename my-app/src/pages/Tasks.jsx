import TaskForm from '../features/tasks/TaskForm';
import TaskList from '../features/tasks/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FilterPanel } from '../features/tasks/FilterPanel';
import { useState } from 'react';
function Tasks() {
  const [filterTask,setFilterTask] = useState({isDone:'all',title:''});
  return (
      <div className="mx-auto w-50">
        <h2>My Tasks</h2>
        <TaskForm />
        <FilterPanel filterTask={filterTask}  setFilterTask={setFilterTask}/>
        <TaskList filterTask={filterTask} />
      </div>
  );
}

export default Tasks;
