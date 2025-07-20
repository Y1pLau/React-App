import { logout } from '../features/auth/authSlice'; 
export const apiFetch = async (url, options = {}, dispatch) => {
     const headers = {
        ...options.headers,
        Authorization: token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json',
    };

    const response = await fetch(url, {
        ...options,
        headers,
    });

    if (response.status === 403) {
        localStorage.removeItem('token');
        if (dispatch) dispatch(logout());
        navigate("/");
        throw new Error('Unauthorized');
    }

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Request failed');
    }

    return response.json();
}