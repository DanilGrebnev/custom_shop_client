import { createAsyncThunk } from '@reduxjs/toolkit'
import { $axios } from '@/app/API'

export const fetchSidebarFilters = createAsyncThunk(
    'filterSideBar/fetchFilters',
    async () => {
        const response = await $axios.get<{ filters: any[] }>('product/filters')
        return response.data
    }
)
