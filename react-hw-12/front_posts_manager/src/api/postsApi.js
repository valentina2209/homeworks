import axios from 'axios'

const baseURL = 'https://my-backend-app-3kra.onrender.com';

export const fetchPosts = async (page = 1, limit = 1) => {
  const res = await axios.get(`${baseURL}/posts`, {
    params: {
      page,
      limit,
    },
  })
  return res.data
}

export const deletePost = async (postId) => {
  await axios.delete(`${baseURL}/posts/${postId}`);
  return postId
};

export const createNewPost = async (postData) => {
  const res = await axios.post(`${baseURL}/posts`, postData)
  return res.data;
}

export const updatePost = async (postId, updateData) => {
  const res = await axios.put(`${baseURL}/posts/${postId}`, updateData);
  return res.data;
}