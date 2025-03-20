import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiUserSlice = createApi({
    reducerPath: "apiUser",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001",
        credentials: "include",
    }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/login",
                method: "POST",
                body: credentials,
            }),
            invalidatesTags: ["User"],
        }),
        me: builder.query({
            query: () => "/me",
            providesTags: ["User"],
        }),
        logout: builder.mutation({
            query: () => ({
                url: "/logout",
                method: "GET",
            }),
            invalidatesTags: ["User"],
        }),
    }),
});

export const { useLoginMutation, useMeQuery, useLogoutMutation } = apiUserSlice;
