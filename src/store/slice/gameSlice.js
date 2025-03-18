import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null,
    des: [1, 1, 1, 1, 1],
    lancersRestants: 3,
    patisseriesGagnees: 0,
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        lancerDes: (state) => {
            if (state.lancersRestants > 0) {
                state.des = state.des.map(() => Math.ceil(Math.random() * 6));
                state.lancersRestants -= 1;

                const compteFaces = state.des.reduce((acc, valeur) => {
                    acc[valeur] = (acc[valeur] || 0) + 1;
                    return acc;
                }, {});

                const maxIdentiques = Math.max(...Object.values(compteFaces));

                if (maxIdentiques === 4) {
                    state.patisseriesGagnees += 3;
                } else if (maxIdentiques === 3) {
                    state.patisseriesGagnees += 2;
                } else if (maxIdentiques === 2) {
                    state.patisseriesGagnees += 1;
                }
            }
        },
        reinitialiserJeu: (state) => {
            state.des = [1, 1, 1, 1, 1];
            state.lancersRestants = 3;
            state.patisseriesGagnees = 0;
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.error = null;
        },
    },
})

export const { lancerDes, reinitialiserJeu } = gameSlice.actions
export default gameSlice.reducer
