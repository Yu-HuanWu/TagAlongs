import axios from 'axios';

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const signup = (userData) => {
    return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
    return axios.post('/api/users/login', userData);
};

export const updateUser = (userData) => {
    return axios.post('/api/users/update', userData)
}

export const updateAvatar = (userData)=>{
  return axios.post('/api/users/updateAvatar',userData)
}

export const fetchUser = (UserID)=>{
  return axios.get(`/api/users/fetchUser/${UserID}`)
}