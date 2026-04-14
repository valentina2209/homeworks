import { createSelector, createSlice } from '@reduxjs/toolkit'
import { createNewPostThunk, deletePostThunk, postsThunk } from './postsThunk'

export const selectPostsList = (state) => state.posts?.posts || []
export const selectPostId = (state) => state.posts?.postId

export const getPostById = createSelector(
  [selectPostsList, selectPostId],
  (postsList, postId) => {
    if (postsList && postId) {
      return postsList.find((post) => post.id === postId)
    }
    return {}
  }
)

const initialState = {
  posts: [],
  meta: {
    page: 1,
    limit: 10,
    totalPagesNumber: 0,
  },
  loading: false,
  error: null,
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null
    },
    clearPosts: (state) => {
      state.posts = []
      state.meta.page = 1
    },
    setPostId: (state, action) => {
      state.postId = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postsThunk.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(postsThunk.fulfilled, (state, action) => {
        state.loading = false
        state.posts = action.payload.posts
        state.meta.page = action.payload.meta.page
        state.meta.totalPagesNumber = action.payload.meta.totalPagesNumber
      })
      .addCase(postsThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.error
      })
      .addCase(createNewPostThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(createNewPostThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.push(action.payload);
      })
      .addCase(createNewPostThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deletePostThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePostThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      })
      .addCase(deletePostThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
})

export const { clearError, clearPosts, setPostId } = postsSlice.actions

export default postsSlice.reducer
