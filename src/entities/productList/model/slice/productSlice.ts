import { addUrlParams } from '@/shared/lib/addUrlParams'
import { deleteUrlParams } from '@/shared/lib/deleteUrlParams'

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

            const currentFilter = state.filters.find(
                (filter) => filter.id === id
            ) as ProductFilterList

            if (currentFilter.checked) {
                const updatedUsp = addUrlParams({
                    key: currentFilter.key,
                    value: currentFilter.value,
                    usp: state.usp,
                })
                state.usp = updatedUsp
            }

            if (!checked) {
                const updatedUsp = deleteUrlParams({
                    filter: currentFilter.key + '=' + currentFilter.value,
                    usp: state.usp,
                })

                state.usp = updatedUsp
            }
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
