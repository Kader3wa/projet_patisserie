import { configureStore } from "@reduxjs/toolkit";
import { apiGameSlice } from "./slice/apiGameSlice.js";
import gameSlice from "./slice/gameSlice.js";

const store = configureStore({
    reducer: {
        [apiGameSlice.reducerPath]: apiGameSlice.reducer,
        game: gameSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat([
                apiGameSlice.middleware
            ])
})

export default store