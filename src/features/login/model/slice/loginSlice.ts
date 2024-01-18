import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILoginSchema } from '../schema/loginSchema'
import { ILoginFields } from '../schema/loginSchema'
import { authByLogin } from '../services/authByLogin'

const initialState: ILoginSchema = {
    fields: {
        username: '',
        password: '',
    },
    loading: false,
    succes: false,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLoginValue(
            state,
            action: PayloadAction<{
                name: keyof ILoginFields
                value: string
            }>
        ) {
            state.fields[action.payload.name] = action.payload.value
        },
    },
    extraReducers(builder) {
        builder
            .addCase(authByLogin.fulfilled, (state, action) => {
                state.loading = false
                console.log(action.payload)
            })
            .addCase(authByLogin.pending, (state) => {
                state.loading = true
            })
            .addCase(authByLogin.rejected, (state, action) => {
                state.loading = false
                console.warn(action.payload)
            })
    },
})

export const loginReducer = loginSlice.reducer
export const { setLoginValue } = loginSlice.actions
