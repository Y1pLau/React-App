import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { TaskRow } from './TaskRow';
const TaskList = React.memo(function  TaskList({filterTask}) {
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
          console.log(task?.title.includes(filterTask?.title),task?.title,filterTask?.title);
          if((filterTask?.isDone===String(task?.isDone) || filterTask?.isDone==='all')&& task?.title.includes(filterTask?.title)){
          const temp = tempEdits?.find((edit) => edit.id === task.id);
          return <TaskRow key={task.id} task={task} temp={temp} setTempEdits={setTempEdits} taskDispatch={taskDispatch} />
         }
        })}
      </tbody>
    </table>
  );
})

export default TaskList;