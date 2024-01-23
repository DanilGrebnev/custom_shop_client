import { $axios } from '@/app/API'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchSetting = createAsyncThunk(
    'setting/fetchSetting',
    async () => {
        const response = await $axios.get('settings')

        return response.data
    }
)
