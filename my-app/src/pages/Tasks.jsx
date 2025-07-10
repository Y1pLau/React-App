import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TaskProvider } from '../context/TaskContext';
import { FilterPanel } from '../components/FilterPanel';
import { useState } from 'react';
function Tasks() {
  const [selectIsDone,setSelectIsDone] = useState('');
  console.log('test');
  return (
    <TaskProvider>
      <div className="mx-auto w-50">
        <h2>My Tasks</h2>
        <TaskForm />
        <FilterPanel selectIsDone={selectIsDone}  setSelectIsDone={setSelectIsDone}/>
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default Tasks;
