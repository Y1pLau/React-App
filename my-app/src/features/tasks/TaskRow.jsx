import { memo, useContext } from 'react';
import { areTasksEqual } from '../../utils/areEqual';
import { useDispatch } from 'react-redux';
import  {editTask,deleteTask,toggleDoneTask} from './tasksSlice';
export const TaskRow = memo(function TaskRow({ temp, setTempEdits, task}) {
  const dispatch=useDispatch();
  const handleChange = (id, field, value) => {
    setTempEdits((prev) => {
      const exit = prev.find((task) => task.id === id);
      if (exit) {
        return prev.map((edit) => edit.id === id ? { ...edit, [field]: value } : edit
        );
      } else {
        return [...prev, { 'id': id, [field]: value }];
      }
    }
    );
  };
  const handleEditClick = (task) => {
    const edit = temp;
    const updatedTask = {
      title: edit?.title ?? task.title,
      dueDate: edit?.dueDate ?? task.dueDate,
      isDone: task.isDone,
    };
    dispatch(editTask({ id: task.id, editTask: updatedTask } ));
  };
  return (
    <tr key={task.id}>
      <td>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={task.isDone}
            onChange={() => dispatch(toggleDoneTask({ id: task.id } ))}
          />
        </div>
      </td>
      <td>
        <input
          type="text"
          className="form-control"
          value={temp?.title ?? task.title}
          onChange={(e) => handleChange(task.id, 'title', e.target.value)}
        />
      </td>
      <td>
        <input
          type="date"
          className="form-control"
          value={temp?.dueDate ?? task.dueDate}
          onChange={(e) => handleChange(task.id, 'dueDate', e.target.value)}
        />
      </td>
      <td>
        <div className="row">
          <div className="col">
            <button
              className="btn btn-primary btn-sm w-100"
              onClick={() => handleEditClick(task)}
            >
              Edit
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-danger btn-sm w-100"
              onClick={() => dispatch(deleteTask({ id: task.id } ))}
            >
              Delete
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}, areTasksEqual)
