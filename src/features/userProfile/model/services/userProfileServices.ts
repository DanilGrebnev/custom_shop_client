import { createAsyncThunk } from '@reduxjs/toolkit'
import { IUserProfileSchema } from '../..'
import { $axios } from '@/app/API'
import { IUserProfileFields } from '../schema/userProfileSchema'

export class UserProfileServices {
    static fetchUserProfile = createAsyncThunk(
        'userProfile/fetchUserProfile',
        async (_, thunkApi) => {
            const response = await $axios.get<IUserProfileFields>('user/me', {
                withCredentials: true,
            })

            return response.data
        }
    )
}
