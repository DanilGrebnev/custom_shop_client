import { createAsyncThunk } from '@reduxjs/toolkit'
import { $axios } from '@/app/API'
import { StateSchema } from '@/app/providers/StoreProvider'
import { isAxiosError } from 'axios'

interface AxiosResponse {
    id: number
    firstName: string
    lastName: string
    email: string
}

export interface AxiosErrorResponse {
    email: string[]
    password: string[]
}

export const sendRegistrationData = createAsyncThunk(
    'user/sendRegistrationData',
    async (_, thunkAPI) => {
        const { getState, rejectWithValue } = thunkAPI
        const state = getState() as StateSchema

        const data = state.registration.fields
        try {
            const response = await $axios.post<AxiosResponse>('auth/reg', data)

            return response.data
        } catch (error) {
            if (isAxiosError(error)) {
                return rejectWithValue(error?.response?.data)
            } else {
                return rejectWithValue(error)
            }
        }
    }
)
