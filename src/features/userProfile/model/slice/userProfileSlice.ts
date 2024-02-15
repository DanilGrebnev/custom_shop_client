import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserProfileSchema } from '../schema/userProfileSchema'
import { IUserProfileFields } from '../schema/userProfileSchema'
import { copyObject } from '../lib/copyObject'
import { profileApi } from '../..'

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
    prevFieldsValue: '',
    isAuth: false,
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

        setProfileFields(
            state,
            action: PayloadAction<IUserProfileFields | undefined>
        ) {
            if (!action.payload) return
            state.fields = action.payload
        },
        
        setFieldsCopy(state) {
            state.prevFieldsValue = JSON.stringify(state.fields)
        },
    },
    extraReducers(builder) {
        builder
            .addMatcher(
                profileApi.endpoints.getProfile.matchFulfilled,
                (state, action) => {
                    state.fields = action.payload
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

export const userProfileReducer = userProfileSlice.reducer
export const userProfileActions = userProfileSlice.actions
