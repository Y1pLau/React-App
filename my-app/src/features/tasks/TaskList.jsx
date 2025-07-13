import React, { useState } from 'react';
import { TaskRow } from './TaskRow';
import {useSelector} from 'react-redux';
const TaskList = React.memo(function  TaskList({filterTask}) {
  // Store temporary edits per task index
  const [tempEdits, setTempEdits] = useState([]);
  const  tasks= useSelector((state)=>state.tasks);
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
          if((filterTask?.isDone===String(task?.isDone) || filterTask?.isDone==='all')&& task?.title.includes(filterTask?.title)){
          const temp = tempEdits?.find((edit) => edit.id === task.id);
          return <TaskRow key={task.id} task={task} temp={temp} setTempEdits={setTempEdits} />
         }
        })}
      </tbody>
    </table>
  );
})

export default TaskList;