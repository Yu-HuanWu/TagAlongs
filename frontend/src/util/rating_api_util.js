import axios from 'axios';

export const giveRating = rating => {
    return axios.post('/api/ratings/', rating);
};