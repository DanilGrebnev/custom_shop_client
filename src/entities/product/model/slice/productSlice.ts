import { addUrlParams } from '@/shared/lib/addUrlParams'
import { deleteUrlParams } from '@/shared/lib/deleteUrlParams'

import {
    IProductCheckBoxFilter,
    IProductChoiceFilter,
    IProductRangeFilter,
    isChoiceFilter,
    isRangeFilter,
} from '@/app/types/product'

import { productApi } from '../..'
import { type IProductSchema } from '../types/productListTypes'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

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

            (state, action) => {}
        )
    },
})

export const { actions: productActions, reducer: productReducer } = productSlice
