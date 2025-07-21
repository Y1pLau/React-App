import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiFetch } from '../../utils/apiFetch';
export const fetchTasksListByUserID= createAsyncThunk('task/fetchTaskListByUserID',async(dispatch)=>{
    const response=await apiFetch('http://localhost:3000/task/fetchTaskListByUserID',{method: 'GET'}, dispatch);
    return response;
})
export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        loadTasks: (state,action) => {
            return action.payload;
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
    },
        extraReducers: (builder) => {
                builder
                    .addCase(createTaskAsync.fulfilled, (state, action) => {
                        console.log('work');
                    })
                    .addCase(createTaskAsync.rejected, (state, action) => {
                        console.log('Rejected action:', action);
                    })
                    .addCase(fetchTasksListByUserID.fulfilled, (state, action) => {
                        console.log("fetchTasksListByUserID");
                        return action.payload;
                    })
                    .addCase(fetchTasksListByUserID.rejected, (state, action) => {
                        console.log('Rejected action:', action);
                    });
                }

})
export const createTaskAsync=createAsyncThunk('tasks/createTask',async ({ task }) => {
        const token =localStorage.getItem('token')
        const response = await fetch('http://localhost:3000/task/createTask', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ "title": task.title , "dueDate": task.dueDate, "token": token}),
        });
        if (!response.ok) throw new Error('create Task failed');
        return await response.json();
    }

);
export const { loadTasks,editTask,deleteTask,toggleDoneTask } = tasksSlice.actions
export default tasksSlice.reducer