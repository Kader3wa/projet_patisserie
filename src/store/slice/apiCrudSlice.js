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
        })
    }),
});

export const {
    useGetAllPastriesQuery,
} = apiCrudSlice;