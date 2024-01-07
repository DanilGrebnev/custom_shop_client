import { createSlice } from '@reduxjs/toolkit'
import { IProductSearchInputSchema } from '../schema/productSearchInputSchema'
import { fetchSearchInputProducts } from '../services/fetchSearchInputProducts'
import { PayloadAction } from '@reduxjs/toolkit'

const initialState: IProductSearchInputSchema = {
    totalСount: 0,
    products: [],
    isOpenSearchList: false,
    input: '',
    loading: false,
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
    },
    extraReducers(builder) {
        builder
            .addCase(fetchSearchInputProducts.fulfilled, (state, action) => {
                state.products = action.payload.products
                state.totalСount = action.payload.totalСount
                state.loading = false
                state.error = ''
            })
            .addCase(fetchSearchInputProducts.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchSearchInputProducts.rejected, (state, action) => {
                state.products = []
                state.loading = false
                state.error = action.error
            })
    },
})
export const { resetState, setInput, toggleVisibleSearchList, resetInput } =
    productSearchInputSlice.actions
export const productSearchInputReducer = productSearchInputSlice.reducer
