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
        setProfileFields(
            state,
            action: PayloadAction<IUserProfileFields | undefined>
        ) {
            if (!action.payload) return
            state.fields = action.payload
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
        const { fetchIsAuth } = UserProfileServices

        builder
            //Проверка аутентификации пользователя
            .addCase(fetchIsAuth.fulfilled, (state) => {
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
    },
})

export const userProfileReducer = userProfileSlice.reducer
export const userProfileActions = userProfileSlice.actions
