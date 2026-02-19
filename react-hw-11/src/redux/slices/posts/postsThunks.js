import { postsAPI } from "@/services/postsAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    "posts/getAllPosts",
    async (_, { rejectWithValue }) => {
        try {
            return await postsAPI.fetchAllPosts()
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)