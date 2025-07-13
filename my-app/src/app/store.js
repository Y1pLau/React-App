import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import taskReducer from '../features/tasks/tasksSlice'
const store= configureStore({
  reducer: {
    authentication: authReducer,
    tasks:taskReducer,
  },
});
store.subscribe(() => {
  localStorage.setItem('tasks', JSON.stringify(store.getState().tasks));
});

export default store