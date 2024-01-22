import { createAsyncThunk } from '@reduxjs/toolkit'
import { $axios } from '@/app/API'

export const fetchUserProfile = createAsyncThunk(
    'userProfile/fetchUserProfile',
    async (_, thunkApi) => {
        const response = await $axios.get('user/me', { withCredentials: true })
        return response.data
    }
)

export const changeUserProfile = createAsyncThunk(
    'userProfile/changeUserProfile',
    async (payload, thunkApi) => {}
)

export class UserProfileServices {
    static fetchUserProfile = fetchUserProfile
    static changeUserProfile = changeUserProfile
}
