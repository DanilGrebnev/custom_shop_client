import { IProductListSchema } from '../types/productListTypes'
import { fetchProductList } from '../services/productListServices'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IProductListSchema = {
    totalCount: 0,
    products: [],
    loading: true,
    error: '',
}

export const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {},
    extraReducers(builder) {
        return builder
            .addCase(fetchProductList.fulfilled, (state, action) => {
                state.products = action.payload.products
                state.totalCount = action.payload.totalCount

                state.loading = false
                state.error = ''
            })
            .addCase(fetchProductList.pending, (state) => {
                state.products = []
                state.loading = true
            })
            .addCase(fetchProductList.rejected, (state, action) => {
                state.loading = false
                state.totalCount = 0

                state.error = action.error
                console.error(action.error)
            })
    },
})

export const productListReducer = productListSlice.reducer
