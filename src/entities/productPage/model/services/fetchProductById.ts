import { createAsyncThunk } from '@reduxjs/toolkit'
import { $axios } from '@/app/API'

export const fetchProductById = createAsyncThunk(
    'product/fetchProductById',
    async (productId: string) => {
        const response = await $axios.get('product/' + productId)
        return response.data
    }
)
