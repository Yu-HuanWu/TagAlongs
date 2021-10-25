import axios from 'axios';

export const getTagAlongs = () => {
    return axios.get('/api/tagAlong/all')
};

export const createTagAlong = tagAlong => {
    return axios.post('/api/tagAlong/createTagAlong', tagAlong);
};

export const getTag = id => {
    return axios.get(`/api/tagAlong/show/${id}`)
}

export const acceptTag = (id,userID) => {
    return axios.post(`/api/tagAlong/acceptBy/${id}`,userID)
}

export const acceptedTags = userId => {
    return axios.get(`/api/tagAlong/myAccepted/${userId}`)
}

export const completedTags = userId =>{
  return axios.get(`/api/tagAlong/myCompletedTags/${userId}`)
}

export const myTags = userId => {
    return axios.get(`/api/tagAlong/myPostedTags/${userId}`)
}

export const completeTag = tagAlongID => {
    return axios.post(`/api/tagAlong/completeTagAlong/${tagAlongID}`)
}

export const deleteTag = tagAlongID => {
    return axios.post(`/api/tagAlong/delete/${tagAlongID}`)
}