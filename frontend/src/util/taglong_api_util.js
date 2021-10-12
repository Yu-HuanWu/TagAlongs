import axios from 'axios';

export const createTagAlong = tagAlong => {
    return axios.post('/api/taglongs/createTagAlong', tagAlong);
};