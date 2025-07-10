import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TaskProvider } from '../context/TaskContext';
import { FilterPanel } from '../components/FilterPanel';
import { useState } from 'react';
function Tasks() {
  const [filterTask,setFilterTask] = useState({isDone:'all',title:''});
  return (
    <TaskProvider>
      <div className="mx-auto w-50">
        <h2>My Tasks</h2>
        <TaskForm />
        <FilterPanel filterTask={filterTask}  setFilterTask={setFilterTask}/>
        <TaskList filterTask={filterTask} />
      </div>
    </TaskProvider>
  );
}

export default Tasks;
