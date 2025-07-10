import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TaskProvider } from '../context/TaskContext';
function Tasks() {
  return (
    <TaskProvider>
      <div className="mx-auto w-50">
        <h2>My Tasks</h2>
        <TaskForm />
        <TaskList/>
      </div>
    </TaskProvider>
  );
}

export default Tasks;
