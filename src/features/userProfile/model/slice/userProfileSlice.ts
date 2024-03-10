import { profileApi } from '../api/profileApi'
import { IUserProfileSchema } from '../schema/userProfileSchema'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: IUserProfileSchema = {
    isAuth: false,
    isOpenBasketModal: false,
}

const userProfileSlice = createSlice({
    name: 'userProfileSlice',
    initialState,
    reducers: {
        setIsOpenBasketModal(state, action: PayloadAction<boolean>) {
            state.isOpenBasketModal = action.payload
        },
    },
    extraReducers(builder) {
        builder
            .addMatcher(
                profileApi.endpoints.getProfile.matchFulfilled,
                (state) => {
                    state.isAuth = true
                }
            )
            .addMatcher(
                profileApi.endpoints.logoutFromAccount.matchFulfilled,
                (state) => {
                    state.isAuth = false
                }
            )
    },
})

export const userProfileActions = userProfileSlice.actions
export const userProfileReducer = userProfileSlice.reducer
