import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILoginSchema, ILoginFields } from '../schema/loginSchema'
import { authByLogin } from '../services/authByLogin'
import { ChangeEvent } from 'react'

const initialState: ILoginSchema = {
    fields: {
        username: '',
        password: '',
        remember_me: false,
    },
    loading: false,
    isAuth: false,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLoginValue(
            state,
            action: PayloadAction<{
                name: keyof Omit<ILoginFields, 'remember_me'>
                value: string
            }>
        ) {
            state.fields[action.payload.name] = action.payload.value
        },
        setRememberMe(state, action: PayloadAction<boolean>) {
            state.fields.remember_me = action.payload
        },
    },
    extraReducers(builder) {
        builder
            .addCase(authByLogin.fulfilled, (state, action) => {
                state.loading = false
                state.isAuth = true
            })
            .addCase(authByLogin.pending, (state) => {
                state.loading = true
            })
            .addCase(authByLogin.rejected, (state, action) => {
                state.loading = false
                console.error(action.payload)
            })
    },
})

export const loginReducer = loginSlice.reducer
export const loginActions = loginSlice.actions
