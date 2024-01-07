import { ThunkApiConfig } from '@/app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { GetThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk'
import { $axios } from '@/app/API'
import { ICategory } from '@/app/types/category'

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi as GetThunkAPI<ThunkApiConfig<any>>

        try {
            const res = await $axios.get<ICategory[]>('categories')
            return res.data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
