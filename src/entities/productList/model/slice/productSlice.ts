import type {
    IProductSchema,
    ProductFilterList,
} from '../types/productListTypes'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: IProductSchema = {
    filters: [],
    usp: 'offset=0&limit=8',
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        initialCreateFilter(state, action: PayloadAction<ProductFilterList>) {
            state.filters.push(action.payload)
        },

        changeCheckedValue(
            state,
            action: PayloadAction<{ id: string | number; checked: boolean }>
        ) {
            const { id, checked } = action.payload

            state.filters.forEach(
                (filter) => filter.id === id && (filter.checked = checked)
            )
        },

        resetAllFilters(state) {
            state.filters.forEach((filter) => (filter.checked = false))
        },

        setUrlSearchParams(state, action: PayloadAction<string>) {
            state.usp = action.payload
        },
    },
})

export const productActions = productSlice.actions

export const productReducer = productSlice.reducer
