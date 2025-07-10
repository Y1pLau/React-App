import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TaskProvider } from '../context/TaskContext';
import { FilterPanel } from '../components/FilterPanel';
function Tasks() {
  return (
    <TaskProvider>
      <div className="mx-auto w-50">
        <h2>My Tasks</h2>
        <TaskForm />
        <FilterPanel />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default Tasks;
