import { createSlice } from '@reduxjs/toolkit'
import type { IProductListPaginationSchema } from '../schema/ProductListPaginationSchema'
import { PayloadAction } from '@reduxjs/toolkit'

const initialState: IProductListPaginationSchema = {
    previewItemsOnPage: 12,
}

const productListPagination = createSlice({
    name: 'productListPagination',
    initialState,
    reducers: {
        setPreviewItemsOnPage(state, action: PayloadAction<number>) {
            state.previewItemsOnPage = action.payload
        },
    },
})

export const { setPreviewItemsOnPage } = productListPagination.actions
export const productListPaginationReducer = productListPagination.reducer
