import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { TaskRow } from './TaskRow';
function TaskList() {
  // Store temporary edits per task index
  const [tempEdits, setTempEdits] = useState([]);
  const { tasks} = useContext(TaskContext);
return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Done</th>
          <th scope="col">Title</th>
          <th scope="col">Due Date</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks?.map((task) => {
          const temp = tempEdits?.find((edit) => edit.id === task.id);
          return <TaskRow temp={temp} task={task} setTempEdits={setTempEdits } tempEdits={tempEdits} />
        })}
      </tbody>
    </table>
  );
}

export default TaskList;