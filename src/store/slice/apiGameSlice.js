import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiGameSlice = createApi({
    reducerPath: "apiGame",
    tagTypes: ["Game"],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/game/"
    }),
    endpoints: (build) => ({
        getPastries: build.query({
            query: () => "/pastries",
            providesTags: ["Game"],
        }),
        winPastries: build.query({
            query: (quantity) => `/win-pastries/${quantity}`,
            providesTags: ["Game"],
        }),
    }),
})

export const {
    useGetPastriesQuery,
    useWinPastriesQuery
} = apiGameSlice