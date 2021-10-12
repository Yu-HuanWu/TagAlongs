import axios from 'axios';

export const createTagAlong = tagAlong => {
    return axios.post('/api/tagAlong/createTagAlong', tagAlong);
};