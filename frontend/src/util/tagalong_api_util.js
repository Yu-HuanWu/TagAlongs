import axios from 'axios';

export const getTagAlongs = () => {
    return axios.get('/api/tagAlong/all')
};

export const createTagAlong = tagAlong => {
    return axios.post('/api/tagAlong/createTagAlong', tagAlong);
};

export const getTag = (id) => {
  return axios.get(`/api/tagAlong/show/${id}`)
}

export const acceptTag = (id,userID)=>{
  return axios.post(`/api/tagAlong/acceptBy/${id}`,userID)
}