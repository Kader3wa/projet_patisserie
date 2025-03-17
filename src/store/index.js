import { configureStore } from "@reduxjs/toolkit";
import { apiGameSlice } from "./slice/apiGameSlice.js";

const store = configureStore({
    reducer: {
        [apiGameSlice.reducerPath]: apiGameSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat([
                apiGameSlice.middleware
            ])
})

export default store