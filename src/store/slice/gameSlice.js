import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null,
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        
    }
})

export const { lanceDes, resetLance } = gameSlice.actions
export default gameSlice.reducer
