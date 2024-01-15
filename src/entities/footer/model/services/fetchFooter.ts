import { createAsyncThunk } from '@reduxjs/toolkit'
import { $axios } from '@/app/API'

export const fetchFooter = createAsyncThunk(
    'users/fetchByIdStatus',
    async () => {
        const response = await $axios.get('/footer')
        return response.data
    }
)
