import DbOperations from "@/shared/api/DbOperations";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const favoriteApi = createApi({
    reducerPath: 'favoriteApi',
    baseQuery: fakeBaseQuery(),
    tagTypes: ['Favorites'],
    endpoints: (builder) => ({
        getFavorites: builder.query({
            async queryFn(userId) {
                if (!userId) return { data: [] };
                const db = new DbOperations(`users/${userId}/favorites`);
                const data = await db.getAll();
                return { data };
            },
            providesTags: ['Favorites'],
        }),
        toggleFavorite: builder.mutation({
            async queryFn({ userId, product }) {
                const db = new DbOperations(`users/${userId}/favorites`);
                const exists = await db.getById(product.id);
                if (exists && exists.name) {
                    await db.delete(product.id);
                } else {
                    await db.setWithId(product.id, {
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        id: product.id
                    });
                }
                return { data: null };
            },
            invalidatesTags: ['Favorites'],
        }),
    }),
});

export const { useGetFavoritesQuery, useToggleFavoriteMutation } = favoriteApi;