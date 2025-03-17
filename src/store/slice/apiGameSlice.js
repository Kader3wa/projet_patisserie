import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiGameSlice = createApi({
    reducerPath: "game",
    tagTypes: ["Game"],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/game/pastries"
    }),
    endpoints: (build) => {
        return {
            getPastries: build.query({
                query: () => "/",
                providesTags: ['Game']
            })
        }
    }
})

export const {
    useGetPastriesQuery,
} = apiGameSlice