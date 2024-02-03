import { createAsyncThunk } from '@reduxjs/toolkit'
import { $axios } from '@/app/API'
import { IUserProfileFields } from '../schema/userProfileSchema'

const thunkName = 'userProfile/'

export class UserProfileServices {
    static getProfile = createAsyncThunk(
        thunkName + 'fetchUserProfile',
        async () => {
            const response = await $axios.get<IUserProfileFields>('user/me', {
                withCredentials: true,
            })

            return response.data
        }
    )

    static fetchIsAuth = createAsyncThunk(
        thunkName + 'fetchIsAuth',
        async () => {
            const response = await $axios.get<IUserProfileFields>('user/me', {
                withCredentials: true,
            })

            return response.data
        }
    )
}
