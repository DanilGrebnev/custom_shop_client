import { createSlice } from '@reduxjs/toolkit'
import { IFooterSchema } from '../..'
import { fetchFooter } from '../services/fetchFooter'
import { PayloadAction } from '@reduxjs/toolkit'
import { IFooter } from '../schema/footerSchema'

const initialState: IFooterSchema = {
    footer: {
        address: '',
        contact: '',
        email: '',
        text: '',
        id: 0,
    },
    error: {},
    loading: false,
}

const footerSlice = createSlice({
    name: 'footer',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(
                fetchFooter.fulfilled,
                (state, action: PayloadAction<IFooter>) => {
                    state.loading = false
                    state.footer = action.payload
                }
            )
            .addCase(fetchFooter.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchFooter.rejected, (state, action) => {
                state.error = action.error
                state.loading = false
            })
    },
})

export const footerReducer = footerSlice.reducer
