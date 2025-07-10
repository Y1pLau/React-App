import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { TaskRow } from './TaskRow';
const TaskList = React.memo(function  TaskList({selectIsDone}) {
  // Store temporary edits per task index
  const [tempEdits, setTempEdits] = useState([]);
  const { tasks, taskDispatch } = useContext(TaskContext);
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
          if(selectIsDone==String(task?.isDone) || selectIsDone==='all'){
          const temp = tempEdits?.find((edit) => edit.id === task.id);
          return <TaskRow key={task.id} task={task} temp={temp} setTempEdits={setTempEdits} taskDispatch={taskDispatch} />
         }
        })}
      </tbody>
    </table>
  );
})

export default TaskList;