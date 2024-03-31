import { IProductSearchInputSchema } from '../schema/productSearchInputSchema'

import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

const initialState: IProductSearchInputSchema = {
    totalСount: 0,
    products: [],
    isOpenSearchList: false,
    input: '',
    loading: false,
    hiddenSearchList: false,
    error: '',
}

const productSearchInputSlice = createSlice({
    name: 'productSearchInputSlice',
    initialState,
    reducers: {
        setInput(state, action: PayloadAction<string>) {
            state.input = action.payload
        },
        resetInput(state) {
            state.input = ''
        },
        toggleVisibleSearchList(state, action: PayloadAction<boolean>) {
            state.isOpenSearchList = action.payload
        },
        resetState(state) {
            state.products = []
            state.totalСount = 0
        },
        isHiddenSearchList(state, action: PayloadAction<boolean>) {
            state.hiddenSearchList = action.payload
        },
    },
})
export const { resetState, setInput, toggleVisibleSearchList, resetInput } =
    productSearchInputSlice.actions
export const productSearchInputActions = productSearchInputSlice.actions
export const productSearchInputReducer = productSearchInputSlice.reducer
