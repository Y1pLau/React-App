import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Check for existing token on app load
const getInitialAuthState = () => {
    const token = localStorage.getItem('token');
    if (token) {
        // You might want to decode the token here to get user info
        // For now, we'll just set authenticated to true
        return {
            user: null, // You could decode token to get user info
            isAuthenticated: true,
            error: null,
        };
    }
    return {
        user: null,
        isAuthenticated: false,
        error: null,
    };
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: getInitialAuthState(), // Use the function to get initial state
    reducers: {
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
            localStorage.removeItem('token');
        },
        // Add action to restore auth state
        restoreAuth: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.error = null;
        }
    }, 
    extraReducers: (builder) => {
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
        const data = await response.json();
        localStorage.setItem('token', data.token);
        return data;
    }
);

export const { logout, restoreAuth } = authSlice.actions;
export default authSlice.reducer;