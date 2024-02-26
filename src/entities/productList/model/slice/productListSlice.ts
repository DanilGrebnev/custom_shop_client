import { productApi } from '../..'
import { IProductListSchema } from '../types/productListTypes'

import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit'

const initialState: IProductListSchema = {
    totalCount: 0,
    filters: [],
    loading: false,
    error: '',
}

export const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        initialCreateFilter(state, action) {
            state.filters.push(action.payload)
        },
        changeCheckedValue(
            state,
            action: PayloadAction<{ id: string | number; checked: boolean }>
        ) {
            const { id, checked } = action.payload

            state.filters = state.filters.map((filter) => {
                if (filter.id === id) {
                    return { ...filter, checked }
                }

                return filter
            })
        },
        resetAllFilters(state) {
            state.filters = state.filters.map((filter) => ({
                ...filter,
                checked: false,
            }))
        },
    },
})

export const productActions = productListSlice.actions

export const productListReducer = productListSlice.reducer
