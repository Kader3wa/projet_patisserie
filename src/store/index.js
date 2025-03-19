import { configureStore } from "@reduxjs/toolkit";
import { apiGameSlice } from "./slice/apiGameSlice.js";
import gameSlice from "./slice/gameSlice.js";
import { apiUserSlice } from "./slice/apiUserSlice.js";

const store = configureStore({
    reducer: {
        [apiGameSlice.reducerPath]: apiGameSlice.reducer,
        game: gameSlice,
        [apiUserSlice.reducerPath]: apiUserSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat([apiGameSlice.middleware, apiUserSlice.middleware])
})

export default store