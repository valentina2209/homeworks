import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [app.reducerPath]: api.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})