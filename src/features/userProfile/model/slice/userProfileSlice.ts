import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserProfileSchema } from '../schema/userProfileSchema'
import { UserProfileServices } from '../services/userProfileServices'
import { IUserProfileFields } from '../schema/userProfileSchema'
import { copyObject } from '../lib/copyObject'

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
    loading: false,
    wishListLoading: false,
    isAuthLoading: true,
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
        setFieldsCopy(state) {
            const fieldsString = copyObject(state.fields, [
                'date_joined',
                'favorites',
            ])

            state.prevFieldsValue = fieldsString
        },
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        },
    },
    extraReducers(builder) {
        const {
            fetchUserProfile,
            toggleWishList,
            userProfileLogout,
            fetchIsAuth,
        } = UserProfileServices

        builder
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                console.log('Получения профиля успешно')
                state.fields = action.payload
                state.loading = false
            })
            .addCase(fetchUserProfile.pending, (state, action) => {
                state.loading = true
                console.log('Получения профиля')
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
            .addCase(toggleWishList.rejected, (state) => {
                state.wishListLoading = false
            })

            .addCase(fetchIsAuth.fulfilled, (state, action) => {
                console.log('Авторизация успешна')
                state.isAuth = true
                state.isAuthLoading = false
            })
            .addCase(fetchIsAuth.pending, (state) => {
                console.log('Авторизация')
                state.isAuthLoading = true
            })
            .addCase(fetchIsAuth.rejected, (state) => {
                state.isAuth = false
                state.isAuthLoading = false
                console.log('Ошибка авторизации')
            })
            .addCase(userProfileLogout.fulfilled, (state) => {
                state.isAuth = false
            })
    },
})

export const userProfileReducer = userProfileSlice.reducer
export const userProfileActions = userProfileSlice.actions
