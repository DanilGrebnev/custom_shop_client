import { createSlice } from '@reduxjs/toolkit'
import { IUserProfileSchema } from '../schema/userProfileSchema'
import { fetchUserProfile } from '../services/userProfileServices'

const initialState: IUserProfileSchema = {
    id: 0,
    username: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    date_joined: '',
    email: '',
    favorites: [],
}

const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                console.log(action.payload)
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                console.log('action.payload from error', action.payload)
                console.error(action.error)
            })
    },
})

export const userProfileReducer = userProfileSlice.reducer
