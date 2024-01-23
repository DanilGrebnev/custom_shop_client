import { ISettingSchema } from '../schema/settingSchema'
import { createSlice } from '@reduxjs/toolkit'
import { fetchSetting } from '../services/fetchSetting'

const initialState: ISettingSchema = {
    fields: {
        color: '',
        currency: '',
        home_logo: '',
        is_active: true,
        id: 0,
    },
    loading: false,
    error: {},
}

const settingSlice = createSlice({
    name: 'settingSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchSetting.fulfilled, (state, action) => {
                state.fields = action.payload
                state.loading = false
            })
            .addCase(fetchSetting.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchSetting.rejected, (state) => {
                state.loading = false
            })
    },
})

export const settingReducer = settingSlice.reducer
