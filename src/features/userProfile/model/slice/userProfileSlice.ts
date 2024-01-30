import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserProfileSchema } from '../schema/userProfileSchema'
import { UserProfileServices } from '../services/userProfileServices'
import { IUserProfileFields } from '../schema/userProfileSchema'

const initialState: IUserProfileSchema = {
    fields: {
        id: 0,
        username: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        date_joined: '',
        email: '',
        favorites: [],
    },
    loading: false,
    wishListLoading: false,
    error: {},
}

const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        setUserProfileValue(
            state,
            action: PayloadAction<{
                name: keyof Omit<IUserProfileFields, 'favorites' | 'id'>
                value: string
            }>
        ) {
            state.fields[action.payload.name] = action.payload.value
        },
    },
    extraReducers(builder) {
        const { fetchUserProfile, toggleWishList } = UserProfileServices

        builder
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                state.fields = action.payload
                state.loading = false
            })
            .addCase(fetchUserProfile.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.loading = false
                console.error(action.error)
            })
            .addCase(toggleWishList.fulfilled, (state, action) => {
                state.fields = action.payload
                state.wishListLoading = false
            })
            .addCase(toggleWishList.pending, (state) => {
                state.wishListLoading = true
            })
            .addCase(toggleWishList.rejected, (state, action) => {
                state.wishListLoading = false
                console.log(action.error)
            })
    },
})

export const userProfileReducer = userProfileSlice.reducer
export const userProfileActions = userProfileSlice.actions
