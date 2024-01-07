import { IFilterSideBarSchema } from '../schema/filterSchema'
import { fetchSidebarFilters } from '../services/fetchSidebarFilters'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IFilterSideBarSchema = {
    filters: [],
    loading: false,
    error: '',
}

const filterSidebarSlice = createSlice({
    name: 'filterSidebar',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchSidebarFilters.fulfilled, (state, action) => {
                state.filters = action.payload.filters
                state.loading = false
                state.error = ''
            })
            .addCase(fetchSidebarFilters.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchSidebarFilters.rejected, (state, action) => {
                state.loading = false
                state.error = action.error
            })
    },
})

export const filterSidebarReducer = filterSidebarSlice.reducer
