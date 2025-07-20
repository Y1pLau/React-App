import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
        }
    }, extraReducers: (builder) => {
        builder
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.user = action.payload.user;
                state.error = null;
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.isAuthenticated = false;
                state.user = null;
                state.error = action.error.message;
            });
    }
});
export const loginAsync = createAsyncThunk('auth/login',
    async ({ userName, password }) => {
        const response = await fetch('http://localhost:3000/user/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "userName": userName, "password": password }),
        });
        if (!response.ok) throw new Error('Login failed');
        const data=await response.json();
        localStorage.setItem('token', data.token);
        return data;
    }
);
export const {  logout } = authSlice.actions
export default authSlice.reducer