import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: { items: [] },
    reducers: {
        setFavorites: (state, action) => {
            state.items = action.payload;
        },

    },
});

export const { setFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;