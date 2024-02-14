import { IProductListSchema } from '../types/productListTypes'
import { createSlice } from '@reduxjs/toolkit'
import { productApi } from '../..'

const initialState: IProductListSchema = {
    totalCount: 0,
    products: [],
    filters: [],
    loading: false,
    error: '',
}

export const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {},
    extraReducers(builder) {
        return builder.addMatcher(
            productApi.endpoints.getProductFilters.matchFulfilled,
            (state, action) => {
                const { filters } = action.payload
            }
        )
    },
})

export const productListReducer = productListSlice.reducer
