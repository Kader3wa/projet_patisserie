import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiCrudSlice = createApi({
    reducerPath: "apiCrud",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/api",
        credentials: "include"
    }),
    tagTypes: ["Pastrie"],
    endpoints: (builder) => ({
        getAllPastries: builder.query({
            query: () => `/pastries`,
            providesTags: ["Pastrie"],
        }),
        deletePastrie: builder.mutation({
            query: (id) => ({
                url: `/pastrie/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Pastrie"],
        }),
        createPastrie: builder.mutation({
            query: (data) => ({
                url: `/pastrie`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Pastrie"],
        }),
        updatePastrie: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `/pastrie/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Pastrie"],
        }),
    }),
});

export const {
    useGetAllPastriesQuery,
    useDeletePastrieMutation,
    useCreatePastrieMutation,
    useUpdatePastrieMutation
} = apiCrudSlice;