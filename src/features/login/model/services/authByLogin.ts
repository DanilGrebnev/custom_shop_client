import { createAsyncThunk } from '@reduxjs/toolkit'
import { $axios } from '@/app/API'
import { StateSchema } from '@/app/providers/StoreProvider'

export const authByLogin = createAsyncThunk(
    'user/authByLogin',
    async (_, thunkApi) => {
        const state = thunkApi.getState() as StateSchema

        const response = await $axios.post<{ token: string }>(
            'auth/token/login',
            state.login.fields,
            { withCredentials: true }
        )

        return response.data
    }
)
