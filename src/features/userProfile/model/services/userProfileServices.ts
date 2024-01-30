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

    static toggleWishList = createAsyncThunk(
        'userProfile/toggleFishList',
        async (productId: string) => {
            await $axios.post(
                'product/favorite/' + productId,
                {},
                { withCredentials: true }
            )

            const response = await $axios.get<IUserProfileFields>('user/me', {
                withCredentials: true,
            })

            return response.data
        }
    )
}
