import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiGameSlice = createApi({
    reducerPath: "apiGame",
    tagTypes: ["Game"],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/game/"
    }),
    endpoints: (builder) => ({
        getPastries: builder.query({
            query: () => "/pastries",
            providesTags: ["Game"],
        }),
        winPastries: builder.query({
            query: (quantity) => `/win-pastries/${quantity}`,
            providesTags: ["Game"],
        }),
    }),
})

export const {
    useGetPastriesQuery,
    useWinPastriesQuery
} = apiGameSlice