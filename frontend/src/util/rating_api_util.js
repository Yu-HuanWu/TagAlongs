import axios from 'axios';

export const giveCookie = rating => {
    return axios.post('/api/ratings/createRating', rating);
};

export const getRating = reviewPair => {
    return axios.get('/api/ratings/show', reviewPair);
};