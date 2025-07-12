import React, { createContext, useState, useEffect, useCallback,useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';


export const TaskContext = createContext();
const taskReducer=(state,action)=>{
  switch(action.type){
    case 'LOAD_TASKS':
      return action.payload;
    case 'ADD_TASK':
      return [...state, { ...action.payload, id: uuidv4() }];
    case 'EDIT_TASK':
      return state.map(task =>
        task.id === action.payload.id ? { ...task, ...action.payload.editTask } : task
      );
    case 'DELETE_TASK':
      return state.filter(task=> task.id!== action.payload.id );
    case 'TOGGLE_DONE':
      return state.map(task=>
        task.id === action.payload.id ? {...task, isDone: !task.isDone } : task
      )
     default:
      return state;
  }
}
export const TaskProvider = ({ children }) => {
   const init = () => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  };
 const [tasks, taskDispatch] = useReducer(taskReducer, [], init);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks,taskDispatch }}>
      {children}
    </TaskContext.Provider>
  );
};