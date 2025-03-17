import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null,
    pastries: [],
    countLance: 0,
    countLanceMax: 3,
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        lanceDes: (state) => {
            state.countRoll++
        },
        resetLance: (state) => {
            state.countRoll = 0
        },
    }
})

export const { lanceDes, resetLance } = gameSlice.actions
export default gameSlice.reducer
