import axios from 'axios';

export const giveCookie = rating => {
    return axios.post('/api/ratings/createRating', rating);
};