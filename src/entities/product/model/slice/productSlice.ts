import { isCheckedFilter } from '@/app/types/product'

import { productApi } from '../..'
import { type IProductSchema } from '../types/productListTypes'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

const initialState: IProductSchema = {
    filters: [],
    openFilter: false,
    usp: 'offset=0&limit=8',
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setOffset(state, action: PayloadAction<number>) {
            const usp = new URLSearchParams(state.usp)
            usp.set('offset', action.payload + '')
            state.usp = usp.toString()
        },
        /**
         * Открывает или закрывает окно настроек для телефона
         */
        toggleOpenSetting(state, action: PayloadAction<boolean>) {
            state.openFilter = action.payload ?? !state.openFilter
        },
    },

    extraReducers(builder) {
        builder.addMatcher(
            productApi.endpoints.getProductFiltersByCategoryId.matchFulfilled,

            (state, action) => {
                const updatedFilters = action.payload.map((filter) => {
                    if (isCheckedFilter(filter)) {
                        return {
                            ...filter,
                            choices: filter.choices.map((choice) => {
                                if (filter.type === 'choice') {
                                    return {
                                        ...choice,
                                        checked: false,
                                        checkedId: filter.slug,
                                        id: v4(),
                                    }
                                }
                                if (filter.type === 'multiple_choices') {
                                    return {
                                        ...choice,
                                        checked: false,
                                        id: v4(),
                                    }
                                }
                            }),
                        }
                    }
                })

                state.filters = updatedFilters as any
            }
        )
    },
})

export const { actions: productActions, reducer: productReducer } = productSlice
