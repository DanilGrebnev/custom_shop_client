import { createAsyncThunk } from '@reduxjs/toolkit'
import { $axios } from '@/app/API'
import { StateSchema } from '@/app/providers/StoreProvider'

export const authByLogin = createAsyncThunk(
    'user/authByLogin',
    async (_, thunkApi) => {
        const state = thunkApi.getState() as StateSchema
        // const rejectWithValue = thunkApi.rejectWithValue

        const response = await $axios.post(
            'auth/token/login',
            state.login.fields
        )
        return response.data
    }
)
