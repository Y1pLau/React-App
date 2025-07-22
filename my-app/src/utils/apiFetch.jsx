import { logout } from '../features/auth/authSlice'; 
export const apiFetch = async (url, options = {},dispatch,navigate) => {
     const token = localStorage.getItem('token');

     
     const headers = {
        ...options.headers,
        Authorization: token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json',
    };

    const response = await fetch(url, {
        ...options,
        headers,
    });

    if (response.status === 401) {
        if (dispatch) dispatch(logout());
        if (navigate) navigate('/login');
        throw new Error('Unauthorized');
    }

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Request failed');
    }

    return response.json();
}