import { createSlice } from '@reduxjs/toolkit'
import { IProductPageSchema } from '../schema/productPageSchema'
import { fetchProductById } from '../services/fetchProductById'

const initialState: IProductPageSchema = {
    product: {
        id: 0,
        createdAt: '',
        updatedAt: '',
        name: '',
        slug: '',
        description: '',
        price: 0,
        quantity: 0,
        isPublished: false,
        available: false,
        category: [],
        color: '',
        images: [],
        averageRating: 0,
        numberOfRatings: 0,
    },
    loading: false,
    error: {},
}

const productPageSlice = createSlice({
    name: 'productPage',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.product = action.payload
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                console.error(action.error)
            })
    },
})

export const productPageReducer = productPageSlice.reducer
