import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserProfileSchema } from '../schema/userProfileSchema'
import { profileApi } from '../api/profileApi'

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

export const { setIsOpenBasketModal } = userProfileSlice.actions
export const userProfileReducer = userProfileSlice.reducer
