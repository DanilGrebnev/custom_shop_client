import { addUrlParams } from '@/shared/lib/addUrlParams'
import { deleteUrlParams } from '@/shared/lib/deleteUrlParams'

import { isChoiceFilter } from '@/app/types/product'

import { isTypeCheckedFilter } from '../lib/isTypeCheckedFilter'
import { isTypeRangeFilter } from '../lib/isTypeRangeFilter'
import { updateUsp } from '../lib/updateUsp'
import {
    type ICheckedFilters,
    type IProductSchema,
    type IRangeFilters,
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
        initialCreateFilter(
            state,
            action: PayloadAction<ICheckedFilters | IRangeFilters>
        ) {
            state.filters.push(action.payload)
        },

        changeCheckedValue(
            state,
            action: PayloadAction<{ id: string | number; checked: boolean }>
        ) {
            const { id, checked } = action.payload

            for (let filter of state.filters) {
                if (!isTypeCheckedFilter(filter) || filter.id !== id) continue

                filter.checked = checked

                if (filter.checked) {
                    state.usp = addUrlParams({
                        key: filter.key,
                        value: filter.value,
                        usp: state.usp,
                    })
                    break
                }

                state.usp = deleteUrlParams({
                    filter: filter.key + '=' + filter.value,
                    usp: state.usp,
                })
                break
            }
        },

        changeRangeValue(
            state,
            action: PayloadAction<{
                id: string
                name: string
                value: string
            }>
        ) {
            const { id, name, value } = action.payload

            for (let filter of state.filters) {
                if (id !== filter.id || !isTypeRangeFilter(filter)) continue

                if (name === filter.key1) {
                    filter.value1 = value
                    state.usp = updateUsp(name, filter.value1, state.usp)
                    break
                }

                filter.value2 = value
                state.usp = updateUsp(name, filter.value2, state.usp)
                break
            }
        },

        resetAllFilters(state) {
            for (let filter of state.filters) {
                if (isTypeCheckedFilter(filter)) {
                    filter.checked = false
                    continue
                }

                filter.value1 = ''
                filter.value2 = ''
            }

            state.usp = 'offset=0&limit=8'
        },

        setUrlSearchParams(state, action: PayloadAction<string>) {
            state.usp = action.payload
        },
    },
})

export const { actions: productActions, reducer: productReducer } = productSlice
