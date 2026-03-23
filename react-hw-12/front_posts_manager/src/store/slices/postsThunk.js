import { API_BASE_URL, postsApi } from '@/api/postsApi'
import RequestManager from '@/api/requestManager'
import { createAsyncThunk } from '@reduxjs/toolkit'

const requestManager = new RequestManager(API_BASE_URL)

export const fetchPosts = createAsyncThunk('posts/fetch', async ({ page, limit }, { rejectWithValue }) => {
  try {
    const { data, error } = await requestManager.fetchData(postsApi.getPosts({ page, limit }))
    if (error) {
      return rejectWithValue(error)
    }
    return data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const createPost = createAsyncThunk('add/fetch', async (body, { rejectWithValue }) => {
  try {
    const { error } = await requestManager.postRequest(postsApi.addPost, body)
    if (error) return rejectWithValue(error)

    return true
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const updatePost = createAsyncThunk('update/fetch', async (post, { rejectWithValue }) => {
  try {
    const { error } = await requestManager.putRequest(postsApi.updatePost(post.id), post)
    if (error) return rejectWithValue(error)

    return true
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const deletePost = createAsyncThunk('delete/fetch', async (id, { rejectWithValue }) => {
  try {
    const { data, error } = await requestManager.deleteRequest(postsApi.deletePost(id))
    if (error) return rejectWithValue(error)

    return data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})