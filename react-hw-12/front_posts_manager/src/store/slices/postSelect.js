import { createSelector } from '@reduxjs/toolkit'

const selectPostsList = (state) => state.posts?.posts || []
const selectPostId = (state) => state.posts?.postId

export const getPostById = createSelector([selectPostsList, selectPostId], (postsList, postId) => {
    if (postsList && postId) {
        return postsList.find((post) => post.id === postId)
    }
    return {}
})