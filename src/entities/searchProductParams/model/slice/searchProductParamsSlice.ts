import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    usp: '',
}

export const searchProductParamsSlice = createSlice({
    name: 'searchProductParams',
    initialState,
    reducers: {
        setUSP(state, action: PayloadAction<string>) {
            state.usp = action.payload
        },

        /**
         * Удаляет ключ и значение из url search params
         * @param substring
         */
        deleteParamsBySubstring(state, action: PayloadAction<string>) {
            state.usp = new URLSearchParams(
                state.usp.replace(action.payload, '')
            ).toString()
        },
    },
})

export const searchProductParamsReducer = searchProductParamsSlice.reducer
export const searchProductParamsActions = searchProductParamsSlice.actions
