import axios from 'axios';

export const giveCookie = rating => {
    return axios.post('/api/ratings/createRating', rating);
};

export const getRating = reviewPair => {
    // console.log(reviewPair);
    return axios.post('/api/ratings/show', reviewPair);
};