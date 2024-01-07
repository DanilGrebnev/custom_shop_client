import { createSlice } from '@reduxjs/toolkit'
import { IHomePageSchema } from '../schema/homePageSchema'
import { fetchHomePageData } from '../services/fetchHomePageData'

const initialState: IHomePageSchema = {
    homePageData: {
        bestsellerProducts: [],
        featuredCategories: [],
        featureProducts: [],
        newProducts: [],
        comments: [],
        sliderImages: [],
    },
    loading: true,
    error: {},
}

const homePageSlice = createSlice({
    name: 'homePageSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomePageData.fulfilled, (state, action) => {
                state.homePageData = action.payload

                state.loading = false
            })
            .addCase(fetchHomePageData.rejected, (state, action) => {
                state.loading = false
                state.error = action.error
            })
    },
})

export const homePageReducer = homePageSlice.reducer
