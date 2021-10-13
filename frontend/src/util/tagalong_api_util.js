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

export const getLatLng = (string,key)=>{
  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${string}&key=${key}`)
}

