import { createAsyncThunk } from '@reduxjs/toolkit'
import { createNewPost, deletePost, fetchPosts, updatePost } from '@/api/postsApi'


export const postsThunk = createAsyncThunk('fetch/posts', async ({ page, limit }, { rejectWithValue }) => {
  try {
    return await fetchPosts(page, limit);
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const createNewPostThunk = createAsyncThunk('add/post', async (postData, { rejectWithValue }) => {
  try {
    return await createNewPost(postData);
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const updatePostThunk = createAsyncThunk('update/post', async (postData, { rejectWithValue }) => {
  try {
    return await updatePost(postData.id, postData)
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const deletePostThunk = createAsyncThunk('delete/post', async (postId, { rejectWithValue }) => {
  try {
    return await deletePost(postId)
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

