import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';
export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: JSON.parse(localStorage.getItem('tasks')) || [],
    reducers: {
        loadTasks: (state,action) => {
            return action.payload;
        },
        addTask: (state, action) => {
            state.push( {...action.payload, id: uuidv4()});
        },
        editTask: (state, action) => {
            const index=state.findIndex((task)=>task.id===action.payload.id);
            if(index!==-1){
                state[index]={...state[index],...action.payload.editTask};
            }
        },
        deleteTask: (state,action) => {
            const newState = state.filter((task) => task.id !== action.payload.id);
            return newState;
        },
        toggleDoneTask: (state,action)=>{
            const index = state.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state[index].isDone = !state[index].isDone;
            }
        },
    }
})
export const { loadTasks, addTask,editTask,deleteTask,toggleDoneTask } = tasksSlice.actions
export default tasksSlice.reducer